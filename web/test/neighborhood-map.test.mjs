import test from 'node:test';
import assert from 'node:assert/strict';
import {projectNormalized,unprojectNormalized,advanceMovement} from '../src/features/map/neighborhood-map.mjs';
const view={width:960,height:650,angle:Math.PI/4,zoom:1};
test('map world coordinates project and invert with a changing camera',()=>{
  for (const v of [view,{width:375,height:254,angle:.3,zoom:1.2},{...view,angle:1.27,zoom:.8}]) {
    for(const p of [{x:.5,z:.5},{x:.1,z:.9},{x:.8,z:.3}]){
      const screen=projectNormalized(p,v),back=unprojectNormalized(screen,v);
      assert.ok(Math.abs(p.x-back.x)<1e-9 && Math.abs(p.z-back.z)<1e-9);
    }
  }
});
test('invalid coordinates and invalid view fail closed',()=>{
  assert.equal(projectNormalized({x:NaN,z:0},view),null);
  assert.equal(projectNormalized({x:-.1,z:0},view),null);
  assert.equal(unprojectNormalized({left:-10000,top:-10000},view),null);
  assert.equal(projectNormalized({x:.5,z:.5},{...view,width:0}),null);
});
test('walking converges, is bounded and cannot overshoot after suspended tabs',()=>{
  const a={x:.2,z:.4},b={x:.3,z:.4};
  const step=advanceMovement(a,b,.1);assert.ok(step.x>a.x && step.x<b.x);
  const delayed=advanceMovement(a,b,100);assert.ok(delayed.x<=b.x);
  assert.deepEqual(advanceMovement(b,b,.1),b);
});

test('renderer keeps sibling UI, projects clicks, rotates, and cleans up listeners', async t=>{
  const {mount}=await import('../src/features/map/neighborhood-map.mjs');
  const previous={window:globalThis.window,document:globalThis.document,ResizeObserver:globalThis.ResizeObserver,IntersectionObserver:globalThis.IntersectionObserver,requestAnimationFrame:globalThis.requestAnimationFrame,cancelAnimationFrame:globalThis.cancelAnimationFrame};
  t.after(()=>{for(const [k,v] of Object.entries(previous)){if(v===undefined)delete globalThis[k];else globalThis[k]=v;}});
  const calls={},docEvents={},motionEvents={};let disconnected=0,visibleObserver=0,received;
  const context=new Proxy({}, {get:(_,key)=>key==='createLinearGradient'||key==='createRadialGradient'?()=>({addColorStop(){}}):()=>{},set:()=>true});
  const canvas={className:'',classList:{add(){},remove(){}},setAttribute(){},getContext:()=>context,addEventListener:(name,fn)=>calls[name]=fn,setPointerCapture(){},getBoundingClientRect:()=>({left:0,top:0}),parentNode:null};
  globalThis.document={hidden:false,createElement:()=>canvas,addEventListener:(n,f)=>docEvents[n]=f,removeEventListener:n=>delete docEvents[n]};
  globalThis.window={devicePixelRatio:1,matchMedia:()=>({matches:true,addEventListener:(n,f)=>motionEvents[n]=f,removeEventListener:n=>delete motionEvents[n]})};
  globalThis.ResizeObserver=class{observe(){}disconnect(){disconnected++;}};
  globalThis.IntersectionObserver=class{observe(){visibleObserver++;}disconnect(){disconnected++;}};
  globalThis.requestAnimationFrame=()=>123;globalThis.cancelAnimationFrame=()=>{};
  const sibling={name:'React-owned sibling'};let kids=[sibling];
  const host={clientWidth:960,clientHeight:650,classList:{add(){}},appendChild(el){el.parentNode=this;kids.push(el);},removeChild(el){kids=kids.filter(x=>x!==el);el.parentNode=null;}};
  const api=mount(host,{onMapClick:p=>{received=p;}});assert.ok(api);assert.equal(kids[0],sibling);assert.equal(visibleObserver,1);
  const point=api.project({x:.5,z:.5});calls.pointerdown({button:0,pointerId:1,clientX:point.left,clientY:point.top});calls.pointerup({pointerId:1,clientX:point.left,clientY:point.top});assert.ok(Math.abs(received.x-.5)<1e-9 && Math.abs(received.z-.5)<1e-9);
  const before=api.project({x:.8,z:.4});calls.pointerdown({button:0,pointerId:2,clientX:100,clientY:100});calls.pointermove({pointerId:2,clientX:150,clientY:100});calls.pointerup({pointerId:2,clientX:150,clientY:100});assert.notDeepEqual(api.project({x:.8,z:.4}),before);
  api.dispose();assert.deepEqual(kids,[sibling]);assert.equal(disconnected,2);assert.equal(Object.keys(docEvents).length,0);assert.equal(Object.keys(motionEvents).length,0);
});

test('failed renderer mount removes its canvas and disconnects partial observers', async t=>{
  const {mount}=await import('../src/features/map/neighborhood-map.mjs');
  const keys=['window','document','ResizeObserver','IntersectionObserver','requestAnimationFrame','cancelAnimationFrame'];const prev=Object.fromEntries(keys.map(k=>[k,globalThis[k]]));
  t.after(()=>{for(const k of keys){if(prev[k]===undefined)delete globalThis[k];else globalThis[k]=prev[k];}});
  let cleaned=0;const ctx=new Proxy({},{get:(_,k)=>k==='createLinearGradient'||k==='createRadialGradient'?()=>({addColorStop(){}}):()=>{},set:()=>true});
  const canvas={classList:{add(){},remove(){}},setAttribute(){},getContext:()=>ctx,addEventListener(){},parentNode:null};
  globalThis.window={devicePixelRatio:1,matchMedia:()=>({matches:true,addEventListener(){},removeEventListener(){}})};
  globalThis.document={hidden:false,createElement:()=>canvas,addEventListener(){},removeEventListener(){}};
  globalThis.ResizeObserver=class{observe(){}disconnect(){cleaned++;}};
  globalThis.IntersectionObserver=class{constructor(){throw Error('unavailable');}};
  globalThis.requestAnimationFrame=()=>1;globalThis.cancelAnimationFrame=()=>{};
  const host={clientWidth:960,clientHeight:650,classList:{add(){}},children:[],appendChild(x){x.parentNode=this;this.children.push(x);},removeChild(x){this.children=this.children.filter(y=>y!==x);x.parentNode=null;}};
  assert.throws(()=>mount(host),/unavailable/);assert.equal(cleaned,1);assert.equal(host.children.length,0);
  canvas.getContext=()=>null;assert.equal(mount(host),null);assert.equal(host.children.length,0);
});
