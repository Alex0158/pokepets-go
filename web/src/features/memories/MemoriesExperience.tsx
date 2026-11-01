"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import {
  MEMORY_KINDS,
  type JournalInput,
  type MemoryCard,
  type MemoryKind,
  type MemoryPage,
} from "../../shared/memories";
import styles from "./memories.module.css";

type Profile = {
  player: { _id: string; displayName: string };
  pet: { name: string };
};
type Tab = "mine" | "community";
const labels: Record<MemoryKind, string> = {
  walk: "Little walks",
  play: "Play time",
  bonding: "Quiet moments",
  other: "Everyday magic",
};
const messages: Record<string, string> = {
  unauthenticated:
    "Your session has ended. Return to the app to reconnect with your existing player.",
  memories_unavailable:
    "Your journal is temporarily unavailable. Your saved memories stay safe. Try again.",
  database_unavailable:
    "The app connection is unavailable. Try again in a moment.",
  stale_memory:
    "This memory changed in another window. Refresh before changing who can see it.",
  reaction_unavailable:
    "This memory is no longer available for a reaction. Refresh the feed.",
  command_conflict:
    "This save has different content from its earlier attempt. Refresh your journal to check it.",
};
class ApiError extends Error {
  constructor(readonly code: string) {
    super(messages[code] ?? "That did not finish. Please try again.");
  }
}
async function request<T>(
  path: string,
  method = "GET",
  input?: unknown,
): Promise<T> {
  const controller = new AbortController(),
    timer = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(path, {
      method,
      credentials: "same-origin",
      cache: "no-store",
      signal: controller.signal,
      ...(input === undefined
        ? {}
        : {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input),
          }),
    });
    const value = await response.json();
    if (!response.ok) throw new ApiError(value.error ?? "request_failed");
    return value as T;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new Error("Connection interrupted. Retry to check the saved result.");
  } finally {
    clearTimeout(timer);
  }
}
function Paw({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="18" rx="5" ry="7" transform="rotate(-25 12 18)" />
      <ellipse cx="23" cy="12" rx="5" ry="7" />
      <ellipse cx="35" cy="17" rx="5" ry="7" transform="rotate(25 35 17)" />
      <path d="M24 23c-7 0-15 10-12 16 3 6 8 1 12 1s9 5 12-1c3-6-5-16-12-16Z" />
    </svg>
  );
}
function KeepsakeArt({ kind }: { kind: MemoryKind }) {
  return (
    <div className={`${styles.art} ${styles[kind]}`} aria-hidden="true">
      <span className={styles.artOrbit} />
      <span className={styles.artSun} />
      <Paw className={styles.artPaw} />
      <span className={styles.artLabel}>{labels[kind]}</span>
      <span className={styles.spark}>✦</span>
    </div>
  );
}

export default function MemoriesExperience({
  embedded = false,
  active = true,
  playerId = "",
}: { embedded?: boolean; active?: boolean; playerId?: string } = {}) {
  const Content = embedded ? "section" : "main";
  const [profile, setProfile] = useState<Profile | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [tab, setTab] = useState<Tab>("mine");
  const [playerFilter, setPlayerFilter] = useState("");
  const [items, setItems] = useState<MemoryCard[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [composer, setComposer] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [kind, setKind] = useState<MemoryKind>("walk");
  const [pending, setPending] = useState<JournalInput | null>(null);
  const [sharing, setSharing] = useState<MemoryCard | null>(null);
  const generation = useRef(0);
  const mounted = useRef(true);
  const report = useCallback((cause: unknown) => {
    setError(
      cause instanceof Error
        ? cause.message
        : "Something went wrong. Try again.",
    );
    if (cause instanceof ApiError && cause.code === "unauthenticated") {
      setProfile(null);
      setItems([]);
      setCursor(null);
    }
  }, []);
  const load = useCallback(
    async (nextCursor?: string) => {
      const ticket = ++generation.current;
      setLoading(true);
      setError("");
      const params = new URLSearchParams();
      if (nextCursor) params.set("cursor", nextCursor);
      if (tab === "community" && playerFilter)
        params.set("player", playerFilter);
      try {
        const value = await request<MemoryPage>(
          `${tab === "mine" ? "/api/memories" : "/api/community/memories"}?${params}`,
        );
        if (!mounted.current || ticket !== generation.current) return;
        setItems((previous) =>
          nextCursor
            ? [
                ...previous,
                ...value.items.filter(
                  (item) => !previous.some((p) => p.id === item.id),
                ),
              ]
            : value.items,
        );
        setCursor(value.nextCursor);
      } catch (cause) {
        if (mounted.current && ticket === generation.current) report(cause);
      } finally {
        if (mounted.current && ticket === generation.current) setLoading(false);
      }
    },
    [tab, playerFilter, report],
  );
  const connect = useCallback(async () => {
    setInitializing(true);
    setError("");
    try {
      setProfile(await request<Profile>("/api/session"));
    } catch (cause) {
      if (!(cause instanceof ApiError && cause.code === "unauthenticated"))
        report(cause);
    } finally {
      setInitializing(false);
    }
  }, [report]);
  useEffect(() => {
    mounted.current = true;
    const player =
      !embedded && new URLSearchParams(window.location.search).get("player");
    if (player) {
      setPlayerFilter(player);
      setTab("community");
    }
    void connect();
    return () => {
      mounted.current = false;
      generation.current++;
    };
  }, [connect, embedded]);
  useEffect(() => {
    if (!embedded) return;
    setPlayerFilter(playerId);
    setTab(playerId ? "community" : "mine");
    setSharing(null);
  }, [embedded, playerId]);
  useEffect(() => {
    if (profile && active) {
      setItems([]);
      setCursor(null);
      void load();
    }
  }, [profile, load, active]);
  async function startSession(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      setProfile(
        await request<Profile>("/api/session", "POST", { displayName }),
      );
    } catch (cause) {
      report(cause);
    } finally {
      setBusy(false);
    }
  }
  async function save(event: FormEvent) {
    event.preventDefault();
    const input = pending ?? {
      commandId: crypto.randomUUID(),
      title,
      note,
      kind,
    };
    setPending(input);
    setBusy(true);
    setError("");
    try {
      await request<MemoryCard>("/api/memories", "POST", input);
      setPending(null);
      setTitle("");
      setNote("");
      setComposer(false);
      setNotice("Memory saved. Only you can see it.");
      await load();
    } catch (cause) {
      report(cause);
    } finally {
      setBusy(false);
    }
  }
  async function changeSharing(memory: MemoryCard, shared: boolean) {
    setBusy(true);
    setError("");
    try {
      const saved = await request<MemoryCard>(
        `/api/memories/${memory.id}/sharing`,
        "PATCH",
        { shared, expectedVersion: memory.version },
      );
      setItems((previous) =>
        previous
          .map((item) => (item.id === saved.id ? saved : item))
          .filter((item) => tab === "mine" || item.shared),
      );
      setSharing(null);
      setNotice(
        shared
          ? "Shared with the community."
          : "Memory is private again. It has been removed from the feed.",
      );
    } catch (cause) {
      report(cause);
    } finally {
      setBusy(false);
    }
  }
  async function react(memory: MemoryCard) {
    setBusy(true);
    setError("");
    try {
      const saved = await request<MemoryCard>(
        `/api/community/memories/${memory.id}/paw`,
        "PUT",
        { active: !memory.pawed },
      );
      setItems((previous) =>
        previous.map((item) => (item.id === saved.id ? saved : item)),
      );
    } catch (cause) {
      report(cause);
    } finally {
      setBusy(false);
    }
  }
  function selectTab(next: Tab) {
    if (next === tab) return;
    generation.current++;
    setItems([]);
    setCursor(null);
    setTab(next);
    setNotice("");
    setSharing(null);
    setComposer(next === "mine" && pending !== null);
  }
  return (
    <div className={`${styles.experience} ${embedded ? styles.embedded : ""}`}>
      {!embedded && (
        <header className={styles.header}>
          <a href="/" className={styles.brand}>
            <span>
              <Paw />
            </span>
            pokepet<span className={styles.go}>GO</span>
          </a>
          <span className={styles.chapter}>
            THE LITTLE THINGS, KEPT FOREVER
          </span>
          <span className={styles.identity}>
            {profile ? profile.player.displayName : "Your adventure journal"}
          </span>
        </header>
      )}
      <Content className={styles.main}>
        {!embedded && (
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>A LIFE WELL PLAYED</p>
              <h1>
                Small adventures.
                <br />
                <em>Big memories.</em>
              </h1>
              <p className={styles.description}>
                The muddy paws. The favourite toy. The quiet walk home.
                <br />
                Keep the moments that make your pet, your pet.
              </p>
            </div>
            <div className={styles.heroArt} aria-hidden="true">
              <span className={styles.heroRing} />
              <Paw />
              <span>better, together.</span>
            </div>
          </div>
        )}
        {error && (
          <div className={styles.error} role="alert">
            <span>{error}</span>
            <button
              onClick={() => {
                setSharing(null);
                void (profile ? load() : connect());
              }}
              disabled={busy || loading || initializing}
            >
              Refresh
            </button>
          </div>
        )}
        {notice && (
          <p className={styles.notice} role="status">
            {notice}
          </p>
        )}
        {initializing ? (
          <p className={styles.empty} role="status">
            Opening your journal…
          </p>
        ) : !profile ? (
          <section className={styles.welcome}>
            <Paw />
            <h2>Every great story starts with a hello.</h2>
            <p>
              Continue with your Pokepet session, or start a new journal on this
              browser.
            </p>
            <form onSubmit={startSession}>
              <label htmlFor="memory-owner">Your name</label>
              <input
                id="memory-owner"
                maxLength={40}
                value={displayName}
                onChange={(event) => setDisplayName(event.target.value)}
                placeholder="What should we call you?"
                required
              />
              <button
                className={styles.primary}
                disabled={busy || !displayName.trim()}
              >
                {busy ? "Opening…" : "Start my journal ↗"}
              </button>
            </form>
            <p className={styles.fineprint}>
              This demo uses a browser session. Keep this browser to return to
              your saved memories.
            </p>
          </section>
        ) : (
          <>
            <div className={styles.toolbar}>
              <nav aria-label="Memory collections">
                <button
                  aria-pressed={tab === "mine"}
                  className={tab === "mine" ? styles.active : ""}
                  onClick={() => selectTab("mine")}
                  disabled={busy}
                >
                  My memories
                </button>
                <button
                  aria-pressed={tab === "community"}
                  className={tab === "community" ? styles.active : ""}
                  onClick={() => selectTab("community")}
                  disabled={busy}
                >
                  Community
                </button>
              </nav>
              <div className={styles.toolbarActions}>
                <button
                  className={styles.quiet}
                  onClick={() => void load()}
                  disabled={busy || loading}
                >
                  Refresh
                </button>
                {tab === "mine" && (
                  <button
                    className={styles.primary}
                    onClick={() => {
                      setComposer(!composer);
                      setSharing(null);
                    }}
                    disabled={busy || !!pending}
                  >
                    {composer ? "Close" : "+ Keep a memory"}
                  </button>
                )}
              </div>
            </div>
            <div className={styles.sectionHeading}>
              <div>
                <h2>
                  {tab === "mine"
                    ? `${profile.pet.name}’s little time capsule`
                    : playerFilter
                      ? "Their shared adventures"
                      : "Good days are better shared."}
                </h2>
                <p>
                  {tab === "mine"
                    ? "Private by default. Share only the moments you choose."
                    : "Real memories shared by players. This feed is not based on your location."}
                </p>
              </div>
              {playerFilter && tab === "community" && (
                <button
                  className={styles.quiet}
                  onClick={() => setPlayerFilter("")}
                  disabled={busy}
                >
                  Show everyone
                </button>
              )}
            </div>
            {composer && (
              <section
                className={styles.composer}
                aria-labelledby="new-memory-title"
              >
                <div>
                  <p className={styles.eyebrow}>TODAY IS WORTH KEEPING</p>
                  <h2 id="new-memory-title">What made you smile?</h2>
                  <p>
                    A journal entry records your story.
                    <br />
                    It doesn’t award game points.
                  </p>
                </div>
                <form onSubmit={save}>
                  <fieldset disabled={busy || !!pending}>
                    <label htmlFor="memory-kind">The kind of day</label>
                    <select
                      id="memory-kind"
                      value={kind}
                      onChange={(event) =>
                        setKind(event.target.value as MemoryKind)
                      }
                    >
                      {MEMORY_KINDS.map((value) => (
                        <option key={value} value={value}>
                          {labels[value]}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="memory-title">Give it a title</label>
                    <input
                      id="memory-title"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                      maxLength={80}
                      placeholder="The great leaf-chasing expedition"
                      required
                    />
                    <label htmlFor="memory-note">
                      A little detail <span>(optional)</span>
                    </label>
                    <textarea
                      id="memory-note"
                      value={note}
                      onChange={(event) => setNote(event.target.value)}
                      maxLength={500}
                      rows={3}
                      placeholder="The part you never want to forget…"
                    />
                  </fieldset>
                  <div className={styles.formFooter}>
                    <span>♡ Only you can see this</span>
                    <button
                      className={styles.primary}
                      disabled={busy || !title.trim()}
                    >
                      {busy
                        ? "Saving…"
                        : pending
                          ? "Retry this save"
                          : "Save this moment ↗"}
                    </button>
                  </div>
                  {pending && !busy && (
                    <p className={styles.fineprint}>
                      Retry checks the same save, so your memory won’t be
                      duplicated.
                    </p>
                  )}
                </form>
              </section>
            )}
            {sharing && (
              <section
                className={styles.sharePrompt}
                role="region"
                aria-label="Confirm sharing"
              >
                <div>
                  <h3>Let the community see this moment?</h3>
                  <p>
                    “{sharing.title}”, its note, your name and pet name will be
                    visible to other players. You can make it private again.
                  </p>
                </div>
                <div>
                  <button
                    className={styles.quiet}
                    disabled={busy}
                    onClick={() => setSharing(null)}
                  >
                    Keep private
                  </button>
                  <button
                    className={styles.primary}
                    disabled={busy}
                    onClick={() => void changeSharing(sharing, true)}
                  >
                    {busy ? "Sharing…" : "Share memory"}
                  </button>
                </div>
              </section>
            )}
            {loading && !items.length ? (
              <p className={styles.empty} role="status">
                Collecting the good moments…
              </p>
            ) : !items.length && !error ? (
              <section className={styles.empty}>
                <Paw />
                <h3>
                  {tab === "mine"
                    ? "Your story is just getting started."
                    : "Be the first to share a little joy."}
                </h3>
                <p>
                  {tab === "mine"
                    ? "Keep a moment from today, or collect a keepsake when a connected mission is completed."
                    : "Shared memories will appear here. Your private journal stays yours."}
                </p>
                {tab === "mine" && !composer && (
                  <button
                    className={styles.primary}
                    onClick={() => setComposer(true)}
                  >
                    Keep my first memory ↗
                  </button>
                )}
              </section>
            ) : (
              <div className={styles.grid}>
                {items.map((memory) => (
                  <article className={styles.card} key={memory.id}>
                    <KeepsakeArt kind={memory.kind} />
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <time dateTime={memory.occurredAt}>
                          {new Date(memory.occurredAt).toLocaleDateString(
                            undefined,
                            { month: "short", day: "numeric", year: "numeric" },
                          )}
                        </time>
                        <span>{memory.shared ? "↗ Shared" : "♡ Just you"}</span>
                      </div>
                      <h3>{memory.title}</h3>
                      {memory.note && (
                        <p className={styles.note}>{memory.note}</p>
                      )}
                      <p className={styles.petLine}>
                        {memory.petName} <span>with</span>{" "}
                        <button
                          disabled={busy}
                          onClick={() => {
                            setPlayerFilter(memory.ownerId);
                            setTab("community");
                            setComposer(false);
                            setSharing(null);
                          }}
                        >
                          {memory.ownerName}
                        </button>
                      </p>
                      <p className={styles.source}>
                        {memory.source === "mission"
                          ? `Activity keepsake · ${memory.rewardPoints} game points · Owner-reported`
                          : memory.owned
                            ? "From your journal · owner-written"
                            : "From their journal · owner-written"}
                      </p>
                      <div className={styles.cardFooter}>
                        {memory.owned ? (
                          <>
                            <span className={styles.pawCount}>
                              <Paw /> {memory.pawCount}
                            </span>
                            <button
                              className={styles.quiet}
                              disabled={busy}
                              onClick={() =>
                                memory.shared
                                  ? void changeSharing(memory, false)
                                  : setSharing(memory)
                              }
                            >
                              {memory.shared
                                ? "Make private"
                                : "Share moment ↗"}
                            </button>
                          </>
                        ) : (
                          <button
                            className={`${styles.pawButton} ${memory.pawed ? styles.pawed : ""}`}
                            aria-pressed={memory.pawed}
                            aria-label={`${memory.pawed ? "Remove" : "Give"} a paw for ${memory.title}`}
                            disabled={busy}
                            onClick={() => void react(memory)}
                          >
                            <Paw />
                            {memory.pawCount}{" "}
                            <span>
                              {memory.pawed ? "Paw given" : "Send a paw"}
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
            {cursor && (
              <div className={styles.more}>
                <button
                  className={styles.quiet}
                  disabled={busy || loading}
                  onClick={() => void load(cursor)}
                >
                  {loading ? "Loading…" : "More good moments ↓"}
                </button>
              </div>
            )}
          </>
        )}
        {!embedded && (
          <footer className={styles.footer}>
            <Paw />
            <span>Less scrolling. More tail-wagging.</span>
            <a href="/">Back to Pokepet Go ↗</a>
          </footer>
        )}
      </Content>
    </div>
  );
}
