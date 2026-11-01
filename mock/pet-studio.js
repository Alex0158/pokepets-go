/* Local character creation: photo palette + an expressive procedural 3D rig. */
(() => {
  let cleanup = () => {};
  const kinds = { cat: "Cat", corgi: "Dog", rabbit: "Rabbit" };
  const moods = [
    ["idle", "Curious"],
    ["happy", "Happy"],
    ["guard", "Focused"],
    ["hurt", "Shy"],
  ];
  const angles = [
    "Front",
    "¾ left",
    "Left",
    "Back left",
    "Back",
    "Back right",
    "Right",
    "¾ right",
  ];
  function open({
    openDialog,
    dialog,
    escapeHTML: esc,
    icon,
    pet,
    onSave,
    onBack,
  }) {
    cleanup();
    let active = true;
    let scene;
    let timer;
    let uploadVersion = 0;
    let draft = pet
      ? { ...pet }
      : { name: "", kind: "cat", color: "#b8a2ee", photo: "" };
    const dispose = () => {
      active = false;
      uploadVersion++;
      clearTimeout(timer);
      scene?.dispose();
      scene = null;
    };
    const show = (html) => {
      scene?.dispose();
      scene = null;
      // openDialog disposes the previous screen; register this screen afterwards.
      cleanup = () => {};
      openDialog(html);
      dialog.classList.add("pet-studio-dialog");
      const title = document.querySelector("#dialog-title");
      title.tabIndex = -1;
      title.focus({ preventScroll: true });
      cleanup = dispose;
    };
    const heading = (step, title, subtitle) =>
      `<div class="studio-heading"><span class="eyebrow">PET STUDIO / ${step}</span><h2 id="dialog-title">${title}</h2><p>${subtitle}</p></div>`;
    function form() {
      show(`${heading("01", "A little photo.<br>A whole new adventure.", "Turn your real-world companion into your next little sidekick.")}
        <form id="pet-create-form"><div class="studio-input-grid"><label class="pet-upload" id="pet-drop-zone"><input id="pet-photo" type="file" accept="image/jpeg,image/png,image/webp" aria-label="Choose a photo of your pet"/><span id="pet-upload-preview">${draft.photo ? `<img src="${draft.photo}" alt="Your pet’s photo"/>` : `<span class="upload-paw">${icon("paw")}</span><strong>Add your pet’s photo</strong><span>Drop it here or choose a photo</span>`}</span><small>JPG, PNG or WebP · up to 8 MB</small><span class="upload-change">${draft.photo ? "Change photo" : "Choose photo"} ↗</span></label>
        <div class="studio-fields"><label>Your pet’s name<input name="name" type="text" maxlength="18" required placeholder="What do you call your sidekick?" value="${esc(draft.name)}"/></label><label>Pet type<select name="kind">${Object.entries(
          kinds,
        )
          .map(
            ([key, label]) =>
              `<option value="${key}" ${draft.kind === key ? "selected" : ""}>${label}</option>`,
          )
          .join(
            "",
          )}</select></label><div class="photo-tip">${icon("star")}<p>A clear photo, a familiar face.<br><span>For the best look, keep your pet in the centre of the frame.</span></p></div></div></div>
        <p id="pet-upload-status" class="studio-status" role="status" aria-live="polite">${draft.photo ? "Photo ready. Let’s bring your companion to life." : "Your photo stays on this device."}</p><div class="dialog-actions"><button type="button" class="secondary-button" id="pet-create-back">Back to my pets</button><button type="submit" class="primary-button" id="pet-create-submit" ${draft.photo ? "" : "disabled"}>Create my companion ${icon("star")}</button></div></form>`);
      const formEl = document.querySelector("#pet-create-form");
      const fileInput = document.querySelector("#pet-photo");
      const status = document.querySelector("#pet-upload-status");
      const submit = document.querySelector("#pet-create-submit");
      const zone = document.querySelector("#pet-drop-zone");
      async function accept(file) {
        if (!file) return;
        const version = ++uploadVersion;
        draft.photo = "";
        submit.disabled = true;
        document.querySelector("#pet-upload-preview").innerHTML =
          `<span class="upload-paw">${icon("paw")}</span><strong>Choose a pet photo</strong>`;
        if (
          !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
          file.size > 8 * 1024 * 1024
        ) {
          status.textContent = "Choose a JPG, PNG or WebP image under 8 MB.";
          fileInput.value = "";
          return;
        }
        status.textContent = "Preparing your photo…";
        try {
          const result = await readPhoto(file);
          if (!active || version !== uploadVersion || !formEl.isConnected)
            return;
          Object.assign(draft, result);
          document.querySelector("#pet-upload-preview").innerHTML =
            `<img src="${draft.photo}" alt="Your pet’s photo"/>`;
          document.querySelector(".upload-change").textContent =
            "Change photo ↗";
          status.textContent =
            "Photo ready. Let’s bring your companion to life.";
          submit.disabled = false;
        } catch {
          if (!active || version !== uploadVersion) return;
          status.textContent =
            "We couldn’t open that photo. Try another image.";
          fileInput.value = "";
        }
      }
      fileInput.addEventListener("change", () => accept(fileInput.files[0]));
      zone.addEventListener("dragover", (event) => {
        event.preventDefault();
        zone.classList.add("dragging");
      });
      zone.addEventListener("dragleave", () =>
        zone.classList.remove("dragging"),
      );
      zone.addEventListener("drop", (event) => {
        event.preventDefault();
        zone.classList.remove("dragging");
        accept(event.dataTransfer.files[0]);
      });
      document.querySelector("#pet-create-back").onclick = onBack;
      formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        const values = new FormData(formEl);
        draft.name = String(values.get("name")).trim().slice(0, 18);
        draft.kind = String(values.get("kind"));
        if (!draft.name || !draft.photo) {
          status.textContent = "Add a photo and your pet’s name to continue.";
          return;
        }
        generate();
      });
    }
    function generate() {
      show(
        `${heading("02", `A little magic for ${esc(draft.name)}.`, "One familiar face. A new world to explore.")}<div class="pet-generating"><img src="${draft.photo}" alt="Your pet’s photo"/><span class="generation-orbit"></span>${icon("star")}</div><div class="generation-steps" role="status" aria-live="polite"><strong id="generation-message">Finding your pet’s colours…</strong><progress id="generation-progress" max="3" value="1" aria-label="Creating your companion"></progress><span id="generation-detail">1 of 3 · Coat & colours</span></div><button class="secondary-button" id="generation-cancel">Back to photo</button>`,
      );
      document.querySelector("#generation-cancel").onclick = () => {
        clearTimeout(timer);
        form();
      };
      let step = 1;
      const next = () => {
        if (!active || !dialog.open) return;
        step++;
        if (step > 3) {
          result();
          return;
        }
        document.querySelector("#generation-progress").value = step;
        document.querySelector("#generation-message").textContent =
          step === 2
            ? "Shaping your little sidekick…"
            : "Adding a little personality…";
        document.querySelector("#generation-detail").textContent =
          step === 2
            ? "2 of 3 · 3D companion"
            : "3 of 3 · Expressions & sprites";
        timer = setTimeout(next, 650);
      };
      timer = setTimeout(next, 650);
    }
    function result() {
      show(
        `${heading("03", `${esc(draft.name)}, meet your new world.`, "The same little spirit. Ready for a whole new adventure.")}<div class="studio-result-grid"><div class="studio-character"><div id="studio-stage" class="studio-stage"></div><span class="studio-live">3D COMPANION</span><div class="studio-source"><img src="${draft.photo || draft.thumbnail || ""}" alt="Original pet photo"/><span>${draft.photo ? "From your photo" : "Your companion"}</span></div></div><div class="studio-controls"><span class="eyebrow">A LITTLE PERSONALITY</span><div class="studio-moods">${moods.map(([key, label], i) => `<button class="secondary-button" data-studio-mood="${key}" aria-pressed="${!i}">${label}</button>`).join("")}</div><label class="studio-coat">Coat colour<input type="color" id="studio-coat" value="${draft.color}" aria-label="Adjust coat colour"/></label><span class="eyebrow">EVERY LITTLE ANGLE</span><div class="studio-angles">${angles.map((label, i) => `<button data-studio-angle="${i * 45}" aria-pressed="${!i}">${label}</button>`).join("")}</div><div class="studio-gestures"><button class="secondary-button" data-studio-motion="wave">Say hello</button><button class="secondary-button" data-studio-motion="play">Happy hop</button></div><p id="studio-motion-status" class="studio-status" role="status" aria-live="polite">Pick an expression. Find their best side.</p></div></div><details class="studio-sprites"><summary>Character sprites <span>4 expressions · 8 angles · 32 frames</span></summary><p>Each row is an expression: curious, happy, focused, then shy. Each column turns your companion by 45°.</p><div class="sprite-sheet-wrap"><img id="studio-sheet" alt="Character sprite sheet with four expressions and eight viewing angles"/></div><a class="secondary-button" id="studio-download" download="${esc(draft.name.replace(/[^a-z0-9_-]/gi, "") || "pet")}-sprites.png">Download sprite sheet ↓</a></details><p id="studio-error" class="studio-status" role="status"></p><div class="dialog-actions"><button class="secondary-button" id="studio-back">${pet ? "Back to my pets" : "Change photo"}</button><button class="primary-button" id="studio-save">${pet ? "Save companion" : "Add to my pets"} ${icon("arrow")}</button></div>`,
      );
      let assets;
      const host = document.querySelector("#studio-stage");
      const saveButton = document.querySelector("#studio-save");
      function mount() {
        scene?.dispose();
        try {
          scene = window.PokepetArena?.mount(host, {
            theme: "afterglow",
            mode: "profile",
            playerKind: draft.kind,
            playerColor: draft.color,
          });
          assets = scene?.captureSprites?.();
          if (!assets) throw new Error("3D unavailable");
          document.querySelector("#studio-sheet").src = assets.sheet;
          if (!draft.photo)
            document.querySelector(".studio-source img").src = assets.thumbnail;
          document.querySelector(".studio-sprites").hidden = false;
          document
            .querySelectorAll(
              "[data-studio-mood], [data-studio-angle], [data-studio-motion]",
            )
            .forEach((button) => {
              button.disabled = false;
            });
          document.querySelector("#studio-download").href = assets.sheet;
          saveButton.disabled = false;
          document.querySelector("#studio-error").textContent = "";
        } catch {
          saveButton.disabled = true;
          document.querySelector("#studio-error").textContent =
            "3D couldn’t start on this device. Try reopening in a browser with WebGL enabled. Your photo is still here.";
          document.querySelector(".studio-sprites").hidden = true;
          document
            .querySelectorAll(
              "[data-studio-mood], [data-studio-angle], [data-studio-motion]",
            )
            .forEach((button) => {
              button.disabled = true;
            });
        }
      }
      mount();
      document.querySelector("#studio-coat").onchange = (event) => {
        draft.color = event.target.value;
        mount();
        document
          .querySelectorAll("[data-studio-angle], [data-studio-mood]")
          .forEach((button) =>
            button.setAttribute(
              "aria-pressed",
              String(
                button.dataset.studioAngle === "0" ||
                  button.dataset.studioMood === "idle",
              ),
            ),
          );
      };
      for (const [attribute, handler] of [
        ["mood", (value) => scene?.setMood(value)],
        ["angle", (value) => scene?.setAngle(Number(value))],
      ]) {
        document
          .querySelectorAll(`[data-studio-${attribute}]`)
          .forEach((button) => {
            button.onclick = () => {
              document
                .querySelectorAll(`[data-studio-${attribute}]`)
                .forEach((item) =>
                  item.setAttribute("aria-pressed", String(item === button)),
                );
              handler(
                button.dataset[
                  attribute === "mood" ? "studioMood" : "studioAngle"
                ],
              );
            };
          });
      }
      document.querySelectorAll("[data-studio-motion]").forEach((button) => {
        button.onclick = async () => {
          const current = scene;
          const buttons = document.querySelectorAll("[data-studio-motion]");
          buttons.forEach((item) => {
            item.disabled = true;
          });
          document.querySelector("#studio-motion-status").textContent =
            button.dataset.studioMotion === "wave"
              ? `${draft.name} says hello!`
              : `${draft.name} is ready to play!`;
          await current?.play({
            actor: "player",
            move: button.dataset.studioMotion,
          });
          if (active && scene === current)
            buttons.forEach((item) => {
              item.disabled = false;
            });
        };
      });
      document.querySelector("#studio-back").onclick = pet ? onBack : form;
      saveButton.onclick = () => {
        if (!assets) return;
        saveButton.disabled = true;
        onSave({ ...draft, thumbnail: assets.thumbnail });
      };
    }
    if (pet) result();
    else form();
  }
  function readPhoto(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          const scale = Math.min(
            1,
            384 / Math.max(img.naturalWidth, img.naturalHeight),
          );
          canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
          canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const pixels = ctx.getImageData(
            Math.floor(canvas.width * 0.25),
            Math.floor(canvas.height * 0.25),
            Math.max(1, Math.floor(canvas.width * 0.5)),
            Math.max(1, Math.floor(canvas.height * 0.5)),
          ).data;
          const rgb = [0, 0, 0];
          let count = 0;
          for (let i = 0; i < pixels.length; i += 16) {
            if (pixels[i + 3] < 128) continue;
            rgb.forEach((_, channel) => {
              rgb[channel] += pixels[i + channel];
            });
            count++;
          }
          const color = count
            ? `#${rgb
                .map((v) =>
                  Math.round(v / count)
                    .toString(16)
                    .padStart(2, "0"),
                )
                .join("")}`
            : "#b8a2ee";
          resolve({ photo: canvas.toDataURL("image/jpeg", 0.8), color });
        } catch (error) {
          reject(error);
        } finally {
          URL.revokeObjectURL(url);
        }
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Invalid image"));
      };
      img.src = url;
    });
  }
  window.PetStudio = {
    open,
    dispose: () => {
      cleanup();
      cleanup = () => {};
    },
  };
})();
