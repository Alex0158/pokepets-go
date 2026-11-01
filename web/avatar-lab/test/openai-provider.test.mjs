import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { createOpenAIProvider } from '../service/openai-provider.mjs';
const png=await readFile(new URL('../assets/sample-puppy-sheet.png',import.meta.url));

test('live adapter sends one isolated reference per subject, fixed model, no key in returned provenance',async()=>{
  const requests=[];
  const provider=createOpenAIProvider({apiKey:'unit-test-only',maxRequests:2,fetchImpl:async(url,init)=>{
    requests.push({url,init});return new Response(JSON.stringify({data:[{b64_json:png.toString('base64')}],usage:{input_tokens:120,input_tokens_details:{image_tokens:100,text_tokens:20},output_tokens:200,total_tokens:320}}),{headers:{'x-request-id':'req_synthetic_test'}});
  }});
  for(const subject of ['owner','pet']){
    const out=await provider({subject,bytes:Buffer.from(png),mimeType:'image/png',signal:new AbortController().signal});
    assert.equal(out.provenance.provider,'openai');assert.equal(out.provenance.subject,subject);assert.equal(out.provenance.inputConditioned,true);
    assert.equal(JSON.stringify(out.provenance).includes('unit-test-only'),false);assert.ok(out.provenance.estimatedCostUsd>0);
  }
  assert.equal(requests.length,2);
  for(const r of requests){assert.equal(r.url,'https://api.openai.com/v1/images/edits');const b=JSON.parse(r.init.body);assert.equal(b.images.length,1);assert.equal(b.model,'gpt-image-2.5-flare-2026-09-08');assert.equal(b.n,1);assert.equal(b.background,'transparent');assert.equal(b.size,'1024x1024');assert.equal(b.quality,'low');}
  await assert.rejects(provider({subject:'owner',bytes:png,mimeType:'image/png',signal:new AbortController().signal}),e=>e.code==='request_budget_reached');
});

test('provider errors are sanitized and never retried automatically',async()=>{
  let calls=0;const provider=createOpenAIProvider({apiKey:'unit-test-only',fetchImpl:async()=>{calls++;return new Response(JSON.stringify({error:{message:'private provider response',code:'insufficient_quota',param:null}}),{status:429,headers:{'x-request-id':'req_test'}});}});
  await assert.rejects(provider({subject:'pet',bytes:png,mimeType:'image/png',signal:new AbortController().signal}),e=>e.code==='openai_429_insufficient_quota'&&!e.message.includes('private'));
  assert.equal(calls,1);
});

test('authorized photo requests strip metadata and use truthful policy wording',async()=>{
  const source=await sharp(png).withMetadata({orientation:6}).toBuffer();
  assert.equal((await sharp(source).metadata()).orientation,6);
  let transmitted;
  const provider=createOpenAIProvider({apiKey:'unit-test-only',maxRequests:1,fetchImpl:async(_url,init)=>{
    transmitted=JSON.parse(init.body);
    return Response.json({data:[{b64_json:png.toString('base64')}]});
  }});
  const out=await provider({subject:'pet',bytes:source,mimeType:'image/png',inputPolicy:'personal-photo',signal:new AbortController().signal});
  const normalized=Buffer.from(transmitted.images[0].image_url.split(',')[1],'base64');
  const metadata=await sharp(normalized).metadata();
  for(const field of ['exif','icc','xmp','orientation'])assert.equal(metadata[field],undefined,field);
  assert.ok(metadata.width<=1024&&metadata.height<=1024);
  assert.match(transmitted.prompt,/selected by an authorized uploader/);
  assert.doesNotMatch(transmitted.prompt,/invented synthetic reference/);
  assert.equal(out.provenance.inputPolicy,'personal-photo');
  assert.equal((await sharp(source).metadata()).orientation,6,'original bytes unchanged');
});
test('hosted quota denial prevents HTTP, while a provider error consumes its reserved attempt',async()=>{
  let reservations=0,calls=0;
  const input={subject:'owner',bytes:png,mimeType:'image/png',signal:new AbortController().signal};
  const denied=createOpenAIProvider({apiKey:'unit-test-only',beforeRequest:async()=>{reservations++;return false;},fetchImpl:async()=>{calls++;return Response.json({data:[{b64_json:png.toString('base64')}]});}});
  await assert.rejects(denied(input),e=>e.code==='request_budget_hosted_quota_reached');assert.equal(reservations,1);assert.equal(calls,0);
  const allowed=createOpenAIProvider({apiKey:'unit-test-only',beforeRequest:async()=>{reservations++;return true;},fetchImpl:async()=>{calls++;return Response.json({error:{code:'insufficient_quota'}},{status:429});}});
  await assert.rejects(allowed(input),e=>e.code==='openai_429_insufficient_quota');assert.equal(reservations,2);assert.equal(calls,1);
});
