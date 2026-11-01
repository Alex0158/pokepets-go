(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var El=0,Ka=1,Tl=2;var cs=1,wr=2,Ci=3,Hn=0,Ne=1,un=2,ei=0,Ii=1,Qa=2,ja=3,to=4,Al=5;var ni=100,wl=101,Rl=102,Cl=103,Il=104,Pl=200,Ll=201,Dl=202,Nl=203,eo=204,no=205,Ul=206,Fl=207,Ol=208,Bl=209,zl=210,kl=211,Gl=212,Vl=213,Hl=214,Ys=0,Zs=1,Js=2,yi=3,$s=4,Ks=5,Qs=6,js=7,io=0,Wl=1,Xl=2,dn=0,so=1,ro=2,ao=3,hs=4,oo=5,lo=6,co=7;var ho=300,ii=301,Pi=302,Rr=303,Cr=304,tr=1e3,an=1001,er=1002,Me=1003,ql=1004;var us=1005;var De=1006,Ir=1007;var Tn=1008;var Be=1009,uo=1010,fo=1011,Li=1012,Pr=1013,tn=1014,en=1015,nn=1016,Lr=1017,Dr=1018,si=1020,po=35902,mo=35899,go=1021,_o=1022,sn=1023,Sn=1026,An=1027,xo=1028,Nr=1029,Wn=1030,Ur=1031;var Fr=1033,ds=33776,fs=33777,ps=33778,ms=33779,Or=35840,Br=35841,zr=35842,kr=35843,Gr=36196,Vr=37492,Hr=37496,Wr=37488,Xr=37489,gs=37490,qr=37491,Yr=37808,Zr=37809,Jr=37810,$r=37811,Kr=37812,Qr=37813,jr=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,aa=37821,oa=36492,la=36494,ca=36495,ha=36283,ua=36284,_s=36285,da=36286;var Gi=2300,nr=2301,Xs=2302,Wa=2303,Xa=2400,qa=2401,Ya=2402;var Yl=3200;var fa=0,Zl=1,wn="",Pe="srgb",Vi="srgb-linear",Hi="linear",Kt="srgb";var qs=7680;var Jl=519,$l=512,Kl=513,Ql=514,vo=515,jl=516,tc=517,yo=518,Mo=519,ec=35044;var So="300 es",Ye=2e3,Mi=2001;function Zc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jc(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nc(){let i=Wi("canvas");return i.style.display="block",i}var el={},Si=null;function bo(...i){let t="THREE."+i.shift();Si?Si("log",t,...i):console.log(t,...i)}function ic(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pt(...i){i=ic(i);let t="THREE."+i.shift();if(Si)Si("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Dt(...i){i=ic(i);let t="THREE."+i.shift();if(Si)Si("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ki(...i){let t=i.join(" ");t in el||(el[t]=!0,Pt(...i))}function sc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var rc={[Ys]:Ys,[Js]:Qs,[$s]:$s,[yi]:Ks,[Zs]:Zs,[Qs]:Js,[js]:js,[Ks]:yi},ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sa=Math.PI/180,ir=180/Math.PI;function xs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function $c(i,t){return(i%t+t)%t}function ba(i,t,e){return(1-e)*i+e*t}function ac(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Eo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Kc(i,t){if(t.constructor===Float32Array)return i;let e=Eo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Qc(i,t){if(t.constructor===Float32Array)return i;let e=Eo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Co=class Co{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Co.prototype.isVector2=!0;var Ht=Co,cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],g=n[s+3],h=r[a+0],f=r[a+1],_=r[a+2],S=r[a+3];if(g!==S||c!==h||l!==f||u!==_){let p=c*h+l*f+u*_+g*S;p<0&&(h=-h,f=-f,_=-_,S=-S,p=-p);let d=1-o;if(p<.9995){let y=Math.acos(p),A=Math.sin(y);d=Math.sin(d*y)/A,o=Math.sin(o*y)/A,c=c*d+h*o,l=l*d+f*o,u=u*d+_*o,g=g*d+S*o}else{c=c*d+h*o,l=l*d+f*o,u=u*d+_*o,g=g*d+S*o;let y=1/Math.sqrt(c*c+l*l+u*u+g*g);c*=y,l*=y,u*=y,g*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],g=r[a],h=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+u*g+c*f-l*h,t[e+1]=c*_+u*h+l*g-o*f,t[e+2]=l*_+u*f+o*h-c*g,t[e+3]=u*_-o*g-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),g=o(r/2),h=c(n/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=h*u*g+l*f*_,this._y=l*f*g-h*u*_,this._z=l*u*_+h*f*g,this._w=l*u*g-h*f*_;break;case"YXZ":this._x=h*u*g+l*f*_,this._y=l*f*g-h*u*_,this._z=l*u*_-h*f*g,this._w=l*u*g+h*f*_;break;case"ZXY":this._x=h*u*g-l*f*_,this._y=l*f*g+h*u*_,this._z=l*u*_+h*f*g,this._w=l*u*g-h*f*_;break;case"ZYX":this._x=h*u*g-l*f*_,this._y=l*f*g+h*u*_,this._z=l*u*_-h*f*g,this._w=l*u*g+h*f*_;break;case"YZX":this._x=h*u*g+l*f*_,this._y=l*f*g+h*u*_,this._z=l*u*_-h*f*g,this._w=l*u*g-h*f*_;break;case"XZY":this._x=h*u*g-l*f*_,this._y=l*f*g-h*u*_,this._z=l*u*_+h*f*g,this._w=l*u*g+h*f*_;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],g=e[10],h=n+o+g;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>g){let f=2*Math.sqrt(1+n-o-g);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>g){let f=2*Math.sqrt(1+o-n-g);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+g-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Io=class Io{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),g=2*(r*n-a*e);return this.x=e+c*l+a*g-o*u,this.y=n+c*u+o*l-r*g,this.z=s+c*g+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ea.copy(this).projectOnVector(t),this.sub(Ea)}reflect(t){return this.sub(Ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Io.prototype.isVector3=!0;var F=Io,Ea=new F,nl=new cn,Po=class Po{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],g=n[7],h=n[2],f=n[5],_=n[8],S=s[0],p=s[3],d=s[6],y=s[1],A=s[4],b=s[7],w=s[2],T=s[5],m=s[8];return r[0]=a*S+o*y+c*w,r[3]=a*p+o*A+c*T,r[6]=a*d+o*b+c*m,r[1]=l*S+u*y+g*w,r[4]=l*p+u*A+g*T,r[7]=l*d+u*b+g*m,r[2]=h*S+f*y+_*w,r[5]=h*p+f*A+_*T,r[8]=h*d+f*b+_*m,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],g=u*a-o*l,h=o*c-u*r,f=l*r-a*c,_=e*g+n*h+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=g*S,t[1]=(s*l-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*c)*S,t[5]=(s*r-o*e)*S,t[6]=f*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ta.makeScale(t,e)),this}rotate(t){return ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ta.makeRotation(-t)),this}translate(t,e){return ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Po.prototype.isMatrix3=!0;var Nt=Po,Ta=new Nt,il=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sl=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jc(){let i={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Kt&&(s.r=Mn(s.r),s.g=Mn(s.g),s.b=Mn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===wn?Hi:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vi]:{primaries:t,whitePoint:n,transfer:Hi,toXYZ:il,fromXYZ:sl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:il,fromXYZ:sl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var qt=jc();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ai,sr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ai===void 0&&(ai=Wi("canvas")),ai.width=t.width,ai.height=t.height;let s=ai.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ai}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mn(e[n]/255)*255):e[n]=Mn(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},th=0,bi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Aa(s[a].image)):r.push(Aa(s[a]))}else r=Aa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var eh=0,wa=new F,Fe=class i extends ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=an,s=an,r=De,a=Tn,o=sn,c=Be,l=i.DEFAULT_ANISOTROPY,u=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=xs(),this.name="",this.source=new bi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ho)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=ho;Fe.DEFAULT_ANISOTROPY=1;var Lo=class Lo{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],g=c[8],h=c[1],f=c[5],_=c[9],S=c[2],p=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(g-S)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(g+S)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,b=(f+1)/2,w=(d+1)/2,T=(u+h)/4,m=(g+S)/4,M=(_+p)/4;return A>b&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=m/n):b>w?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=M/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=m/r,s=M/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(g-S)*(g-S)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(g-S)/y,this.z=(h-u)/y,this.w=Math.acos((l+f+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lo.prototype.isVector4=!0;var ue=Lo,rr=class extends ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Fe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:De,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new bi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ve=class extends rr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xi=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ar=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ar=class Ar{constructor(t,e,n,s,r,a,o,c,l,u,g,h,f,_,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,g,h,f,_,S,p)}set(t,e,n,s,r,a,o,c,l,u,g,h,f,_,S,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=g,d[14]=h,d[3]=f,d[7]=_,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ar().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/oi.setFromMatrixColumn(t,0).length(),r=1/oi.setFromMatrixColumn(t,1).length(),a=1/oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*g,_=o*u,S=o*g;e[0]=c*u,e[4]=-c*g,e[8]=l,e[1]=f+_*l,e[5]=h-S*l,e[9]=-o*c,e[2]=S-h*l,e[6]=_+f*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,f=c*g,_=l*u,S=l*g;e[0]=h+S*o,e[4]=_*o-f,e[8]=a*l,e[1]=a*g,e[5]=a*u,e[9]=-o,e[2]=f*o-_,e[6]=S+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,f=c*g,_=l*u,S=l*g;e[0]=h-S*o,e[4]=-a*g,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,f=a*g,_=o*u,S=o*g;e[0]=c*u,e[4]=_*l-f,e[8]=h*l+S,e[1]=c*g,e[5]=S*l+h,e[9]=f*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,f=a*l,_=o*c,S=o*l;e[0]=c*u,e[4]=S-h*g,e[8]=_*g+f,e[1]=g,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*g+_,e[10]=h-S*g}else if(t.order==="XZY"){let h=a*c,f=a*l,_=o*c,S=o*l;e[0]=c*u,e[4]=-g,e[8]=l*u,e[1]=h*g+S,e[5]=a*u,e[9]=f*g-_,e[2]=_*g-f,e[6]=o*u,e[10]=S*g+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nh,t,ih)}lookAt(t,e,n){let s=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),In.crossVectors(n,ze),In.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),In.crossVectors(n,ze)),In.normalize(),Ts.crossVectors(ze,In),s[0]=In.x,s[4]=Ts.x,s[8]=ze.x,s[1]=In.y,s[5]=Ts.y,s[9]=ze.y,s[2]=In.z,s[6]=Ts.z,s[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],g=n[5],h=n[9],f=n[13],_=n[2],S=n[6],p=n[10],d=n[14],y=n[3],A=n[7],b=n[11],w=n[15],T=s[0],m=s[4],M=s[8],L=s[12],R=s[1],D=s[5],U=s[9],H=s[13],I=s[2],V=s[6],Y=s[10],k=s[14],st=s[3],W=s[7],et=s[11],it=s[15];return r[0]=a*T+o*R+c*I+l*st,r[4]=a*m+o*D+c*V+l*W,r[8]=a*M+o*U+c*Y+l*et,r[12]=a*L+o*H+c*k+l*it,r[1]=u*T+g*R+h*I+f*st,r[5]=u*m+g*D+h*V+f*W,r[9]=u*M+g*U+h*Y+f*et,r[13]=u*L+g*H+h*k+f*it,r[2]=_*T+S*R+p*I+d*st,r[6]=_*m+S*D+p*V+d*W,r[10]=_*M+S*U+p*Y+d*et,r[14]=_*L+S*H+p*k+d*it,r[3]=y*T+A*R+b*I+w*st,r[7]=y*m+A*D+b*V+w*W,r[11]=y*M+A*U+b*Y+w*et,r[15]=y*L+A*H+b*k+w*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],g=t[6],h=t[10],f=t[14],_=t[3],S=t[7],p=t[11],d=t[15],y=c*f-l*h,A=o*f-l*g,b=o*h-c*g,w=a*f-l*u,T=a*h-c*u,m=a*g-o*u;return e*(S*y-p*A+d*b)-n*(_*y-p*w+d*T)+s*(_*A-S*w+d*m)-r*(_*b-S*T+p*m)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],g=t[9],h=t[10],f=t[11],_=t[12],S=t[13],p=t[14],d=t[15],y=e*o-n*a,A=e*c-s*a,b=e*l-r*a,w=n*c-s*o,T=n*l-r*o,m=s*l-r*c,M=u*S-g*_,L=u*p-h*_,R=u*d-f*_,D=g*p-h*S,U=g*d-f*S,H=h*d-f*p,I=y*H-A*U+b*D+w*R-T*L+m*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return t[0]=(o*H-c*U+l*D)*V,t[1]=(s*U-n*H-r*D)*V,t[2]=(S*m-p*T+d*w)*V,t[3]=(h*T-g*m-f*w)*V,t[4]=(c*R-a*H-l*L)*V,t[5]=(e*H-s*R+r*L)*V,t[6]=(p*b-_*m-d*A)*V,t[7]=(u*m-h*b+f*A)*V,t[8]=(a*U-o*R+l*M)*V,t[9]=(n*R-e*U-r*M)*V,t[10]=(_*T-S*b+d*y)*V,t[11]=(g*b-u*T-f*y)*V,t[12]=(o*L-a*D-c*M)*V,t[13]=(e*D-n*L+s*M)*V,t[14]=(S*A-_*w-p*y)*V,t[15]=(u*w-g*A+h*y)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,g=o+o,h=r*l,f=r*u,_=r*g,S=a*u,p=a*g,d=o*g,y=c*l,A=c*u,b=c*g,w=n.x,T=n.y,m=n.z;return s[0]=(1-(S+d))*w,s[1]=(f+b)*w,s[2]=(_-A)*w,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(h+d))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(_+A)*m,s[9]=(p-y)*m,s[10]=(1-(h+S))*m,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=oi.set(s[0],s[1],s[2]).length(),o=oi.set(s[4],s[5],s[6]).length(),c=oi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),$e.copy(this);let l=1/a,u=1/o,g=1/c;return $e.elements[0]*=l,$e.elements[1]*=l,$e.elements[2]*=l,$e.elements[4]*=u,$e.elements[5]*=u,$e.elements[6]*=u,$e.elements[8]*=g,$e.elements[9]*=g,$e.elements[10]*=g,e.setFromRotationMatrix($e),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Ye,c=!1){let l=this.elements,u=2*r/(e-t),g=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),_,S;if(c)_=r/(a-r),S=a*r/(a-r);else if(o===Ye)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Mi)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=g,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ye,c=!1){let l=this.elements,u=2/(e-t),g=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),_,S;if(c)_=1/(a-r),S=a/(a-r);else if(o===Ye)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===Mi)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=g,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ar.prototype.isMatrix4=!0;var ce=Ar,oi=new F,$e=new ce,nh=new F(0,0,0),ih=new F(1,1,1),In=new F,Ts=new F,ze=new F,rl=new ce,al=new cn,bn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],g=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-g,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return al.setFromEuler(this),this.setFromQuaternion(al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var qi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sh=0,ol=new F,li=new cn,gn=new ce,As=new F,Fi=new F,rh=new F,ah=new cn,ll=new F(1,0,0),cl=new F(0,1,0),hl=new F(0,0,1),ul={type:"added"},oh={type:"removed"},ci={type:"childadded",child:null},Ra={type:"childremoved",child:null},we=class i extends ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new bn,n=new cn,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Nt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(ll,t)}rotateY(t){return this.rotateOnAxis(cl,t)}rotateZ(t){return this.rotateOnAxis(hl,t)}translateOnAxis(t,e){return ol.copy(t).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ll,t)}translateY(t){return this.translateOnAxis(cl,t)}translateZ(t){return this.translateOnAxis(hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?As.copy(t):As.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Fi,As,this.up):gn.lookAt(As,Fi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),li.setFromRotationMatrix(gn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ul),ci.child=t,this.dispatchEvent(ci),ci.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oh),Ra.child=t,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ul),ci.child=t,this.dispatchEvent(ci),ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,rh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,ah,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let g=c[l];r(t.shapes,g)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),g=a(t.shapes),h=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),g.length>0&&(n.shapes=g),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};we.DEFAULT_UP=new F(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ge=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},lh={type:"move"},Ei=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let S of t.hand.values()){let p=e.getJointPose(S,n),d=this._getHandJoint(l,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=l.joints["index-finger-tip"],g=l.joints["thumb-tip"],h=u.position.distanceTo(g.position),f=.02,_=.005;l.inputState.pinching&&h>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},ws={h:0,s:0,l:0};function Ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=$c(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ca(a,r,t+1/3),this.g=Ca(a,r,t),this.b=Ca(a,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mn(t.r),this.g=Mn(t.g),this.b=Mn(t.b),this}copyLinearToSRGB(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return qt.workingToColorSpace(Ae.copy(this),t),Math.round(Yt(Ae.r*255,0,255))*65536+Math.round(Yt(Ae.g*255,0,255))*256+Math.round(Yt(Ae.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let g=a-o;switch(l=u<=.5?g/(a+o):g/(2-a-o),a){case n:c=(s-r)/g+(s<r?6:0);break;case s:c=(r-n)/g+2;break;case r:c=(n-s)/g+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Pe){qt.workingToColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(ws);let n=ba(Pn.h,ws.h,e),s=ba(Pn.s,ws.s,e),r=ba(Pn.l,ws.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new Gt;Gt.NAMES=oc;var Yi=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zi=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ke=new F,_n=new F,Ia=new F,xn=new F,hi=new F,ui=new F,dl=new F,Pa=new F,La=new F,Da=new F,Na=new ue,Ua=new ue,Fa=new ue,Un=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ke.subVectors(t,e),s.cross(Ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ke.subVectors(s,e),_n.subVectors(n,e),Ia.subVectors(t,e);let a=Ke.dot(Ke),o=Ke.dot(_n),c=Ke.dot(Ia),l=_n.dot(_n),u=_n.dot(Ia),g=a*l-o*o;if(g===0)return r.set(0,0,0),null;let h=1/g,f=(l*c-o*u)*h,_=(a*u-o*c)*h;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(a,xn.y),c.addScaledVector(o,xn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Na.setScalar(0),Ua.setScalar(0),Fa.setScalar(0),Na.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,n),Fa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Na,r.x),a.addScaledVector(Ua,r.y),a.addScaledVector(Fa,r.z),a}static isFrontFacing(t,e,n,s){return Ke.subVectors(n,e),_n.subVectors(t,e),Ke.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Ke.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;hi.subVectors(s,n),ui.subVectors(r,n),Pa.subVectors(t,n);let c=hi.dot(Pa),l=ui.dot(Pa);if(c<=0&&l<=0)return e.copy(n);La.subVectors(t,s);let u=hi.dot(La),g=ui.dot(La);if(u>=0&&g<=u)return e.copy(s);let h=c*g-u*l;if(h<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),e.copy(n).addScaledVector(hi,a);Da.subVectors(t,r);let f=hi.dot(Da),_=ui.dot(Da);if(_>=0&&f<=_)return e.copy(r);let S=f*l-c*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(ui,o);let p=u*_-f*g;if(p<=0&&g-u>=0&&f-_>=0)return dl.subVectors(r,s),o=(g-u)/(g-u+(f-_)),e.copy(s).addScaledVector(dl,o);let d=1/(p+S+h);return a=S*d,o=h*d,e.copy(n).addScaledVector(hi,a).addScaledVector(ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(t.matrixWorld),this.union(Rs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),Cs.subVectors(this.max,Oi),di.subVectors(t.a,Oi),fi.subVectors(t.b,Oi),pi.subVectors(t.c,Oi),Ln.subVectors(fi,di),Dn.subVectors(pi,fi),Zn.subVectors(di,pi);let e=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-Zn.z,Zn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,Zn.z,0,-Zn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-Zn.y,Zn.x,0];return!Oa(e,di,fi,pi,Cs)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,di,fi,pi,Cs))?!1:(Is.crossVectors(Ln,Dn),e=[Is.x,Is.y,Is.z],Oa(e,di,fi,pi,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vn=[new F,new F,new F,new F,new F,new F,new F,new F],Qe=new F,Rs=new Fn,di=new F,fi=new F,pi=new F,Ln=new F,Dn=new F,Zn=new F,Oi=new F,Cs=new F,Is=new F,Jn=new F;function Oa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);let o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),c=t.dot(Jn),l=e.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var pe=new F,Ps=new Ht,ch=0,on=class extends ln{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ch++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ec,this.updateRanges=[],this.gpuType=en,this.version=0,this._normalizationScale=t!==void 0?Eo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ps.fromBufferAttribute(this,e),Ps.applyMatrix3(t),this.setXY(e,Ps.x,Ps.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Kc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Qc(t,this.array)}};var Ji=class extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $i=class extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}},hh=new Fn,Bi=new F,Ba=new F,Ti=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);let e=Bi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(Ba)),this.expandByPoint(Bi.copy(t.center).sub(Ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},uh=0,qe=new ce,za=new we,mi=new F,ke=new Fn,zi=new Fn,ye=new F,Ze=class i extends ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zc(t)?$i:Ji)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return za.lookAt(t),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(ke.min,zi.min),ke.expandByPoint(ye),ye.addVectors(ke.max,zi.max),ke.expandByPoint(ye)):(ke.expandByPoint(zi.min),ke.expandByPoint(zi.max))}ke.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ye.fromBufferAttribute(o,l),c&&(mi.fromBufferAttribute(t,l),ye.add(mi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new on(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new F,c[L]=new F;let u=new F,g=new F,h=new F,f=new Ht,_=new Ht,S=new Ht,p=new F,d=new F;function y(L,R,D){l[L]=l[R]=l[D]=1,u.fromBufferAttribute(n,L),g.fromBufferAttribute(n,R),h.fromBufferAttribute(n,D),f.fromBufferAttribute(r,L),_.fromBufferAttribute(r,R),S.fromBufferAttribute(r,D),g.sub(u),h.sub(u),_.sub(f),S.sub(f);let U=1/(_.x*S.y-S.x*_.y);isFinite(U)&&(p.copy(g).multiplyScalar(S.y).addScaledVector(h,-_.y).multiplyScalar(U),d.copy(h).multiplyScalar(_.x).addScaledVector(g,-S.x).multiplyScalar(U),o[L].add(p),o[R].add(p),o[D].add(p),c[L].add(d),c[R].add(d),c[D].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let L=0,R=A.length;L<R;++L){let D=A[L],U=D.start,H=D.count;for(let I=U,V=U+H;I<V;I+=3)y(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let b=new F,w=new F,T=new F,m=new F;function M(L){T.fromBufferAttribute(s,L),m.copy(T);let R=o[L];b.copy(R),b.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(m,R);let U=w.dot(c[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,U)}for(let L=0,R=n.count;L<R;++L)l[L]&&M(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,g=new F;if(t)for(let h=0,f=t.count;h<f;h+=3){let _=t.getX(h+0),S=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,p),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,g=o.normalized,h=new l.constructor(c.length*u),f=0,_=0;for(let S=0,p=c.length;S<p;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*u;for(let d=0;d<u;d++)h[_++]=l[f++]}return new on(h,u,g)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,g=l.length;u<g;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let g=0,h=l.length;g<h;g++){let f=l[g];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],g=r[l];for(let h=0,f=g.length;h<f;h++)u.push(g[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let g=a[l];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ka=new F,dh=new F,fh=new Nt,je=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ka.subVectors(n,e).cross(dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ka),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fh.getNormalMatrix(t),s=this.coplanarPoint(ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ph=0,On=class extends ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=Ii,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new je().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ht().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var yn=new F,Ga=new F,Ls=new F,Ds=new F,or=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ga.copy(t).add(e).multiplyScalar(.5),Ls.copy(e).sub(t).normalize(),Ds.copy(this.origin).sub(Ga);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ls),o=Ds.dot(this.direction),c=-Ds.dot(Ls),l=Ds.lengthSq(),u=Math.abs(1-a*a),g,h,f,_;if(u>0)if(g=a*c-o,h=a*o-c,_=r*u,g>=0)if(h>=-_)if(h<=_){let S=1/u;g*=S,h*=S,f=g*(g+a*h+2*o)+h*(a*g+h+2*c)+l}else h=r,g=Math.max(0,-(a*h+o)),f=-g*g+h*(h+2*c)+l;else h=-r,g=Math.max(0,-(a*h+o)),f=-g*g+h*(h+2*c)+l;else h<=-_?(g=Math.max(0,-(-a*r+o)),h=g>0?-r:Math.min(Math.max(-r,-c),r),f=-g*g+h*(h+2*c)+l):h<=_?(g=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(g=Math.max(0,-(a*r+o)),h=g>0?r:Math.min(Math.max(-r,-c),r),f=-g*g+h*(h+2*c)+l);else h=a>0?-r:r,g=Math.max(0,-(a*h+o)),f=-g*g+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Ga).addScaledVector(Ls,h),f}intersectSphere(t,e){if(t.radius<0)return null;yn.subVectors(t.center,this.origin);let n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(t.min.z-h.z)*g,c=(t.max.z-h.z)*g):(o=(t.max.z-h.z)*g,c=(t.min.z-h.z)*g),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,g=t.x-a.x,h=t.y-a.y,f=t.z-a.z,_=e.x-a.x,S=e.y-a.y,p=e.z-a.z,d=n.x-a.x,y=n.y-a.y,A=n.z-a.z,b=Math.abs(c),w=Math.abs(l),T=Math.abs(u),m,M,L,R,D,U,H,I,V,Y,k,st;if(b>=w&&b>=T?(L=c,U=g,V=_,st=d,c>=0?(m=l,M=u,R=h,D=f,H=S,I=p,Y=y,k=A):(m=u,M=l,R=f,D=h,H=p,I=S,Y=A,k=y)):w>=T?(L=l,U=h,V=S,st=y,l>=0?(m=u,M=c,R=f,D=g,H=p,I=_,Y=A,k=d):(m=c,M=u,R=g,D=f,H=_,I=p,Y=d,k=A)):(L=u,U=f,V=p,st=A,u>=0?(m=c,M=l,R=g,D=h,H=_,I=S,Y=d,k=y):(m=l,M=c,R=h,D=g,H=S,I=_,Y=y,k=d)),L===0)return null;let W=m/L,et=M/L,it=1/L,bt=R-W*U,Lt=D-et*U,K=H-W*V,X=I-et*V,nt=Y-W*st,lt=k-et*st,J=nt*X-lt*K,Z=bt*lt-Lt*nt,Rt=K*Lt-X*bt;if(s){if(J<0||Z<0||Rt<0)return null}else if((J<0||Z<0||Rt<0)&&(J>0||Z>0||Rt>0))return null;let gt=J+Z+Rt;if(gt===0)return null;let Ot=it*(J*U+Z*V+Rt*st);return(gt>0?Ot<0:Ot>0)?null:this.at(Ot/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qn=class extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fl=new ce,$n=new or,Ns=new Ti,pl=new F,Us=new F,Fs=new F,Os=new F,Va=new F,Bs=new F,ml=new F,zs=new F,Oe=class extends we{constructor(t=new Ze,e=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Bs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],g=r[c];u!==0&&(Va.fromBufferAttribute(g,t),a?Bs.addScaledVector(Va,u):Bs.addScaledVector(Va.sub(e),u))}e.add(Bs)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Ns.containsPoint($n.origin)===!1&&($n.intersectSphere(Ns,pl)===null||$n.origin.distanceToSquared(pl)>(t.far-t.near)**2))&&(fl.copy(r).invert(),$n.copy(t.ray).applyMatrix4(fl),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){let p=h[_],d=a[p.materialIndex],y=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,w=A;b<w;b+=3){let T=o.getX(b),m=o.getX(b+1),M=o.getX(b+2);s=ks(this,d,t,n,l,u,g,T,m,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let p=_,d=S;p<d;p+=3){let y=o.getX(p),A=o.getX(p+1),b=o.getX(p+2);s=ks(this,a,t,n,l,u,g,y,A,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){let p=h[_],d=a[p.materialIndex],y=Math.max(p.start,f.start),A=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=y,w=A;b<w;b+=3){let T=b,m=b+1,M=b+2;s=ks(this,d,t,n,l,u,g,T,m,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let p=_,d=S;p<d;p+=3){let y=p,A=p+1,b=p+2;s=ks(this,a,t,n,l,u,g,y,A,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function mh(i,t,e,n,s,r,a,o){let c;if(t.side===Ne?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Hn,o),c===null)return null;zs.copy(o),zs.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(zs);return l<e.near||l>e.far?null:{distance:l,point:zs.clone(),object:i}}function ks(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Us),i.getVertexPosition(c,Fs),i.getVertexPosition(l,Os);let u=mh(i,t,e,n,Us,Fs,Os,ml);if(u){let g=new F;Un.getBarycoord(ml,Us,Fs,Os,g),s&&(u.uv=Un.getInterpolatedAttribute(s,o,c,l,g,new Ht)),r&&(u.uv1=Un.getInterpolatedAttribute(r,o,c,l,g,new Ht)),a&&(u.normal=Un.getInterpolatedAttribute(a,o,c,l,g,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new F,materialIndex:0};Un.getNormal(Us,Fs,Os,h.normal),u.face=h,u.barycoord=g}return u}var lr=class extends Fe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Me,u=Me,g,h){super(null,a,o,c,l,u,s,r,g,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=new Ti,gh=new Ht(.5,.5),Gs=new F,Bn=class{constructor(t=new je,e=new je,n=new je,s=new je,r=new je,a=new je){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ye,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],g=r[5],h=r[6],f=r[7],_=r[8],S=r[9],p=r[10],d=r[11],y=r[12],A=r[13],b=r[14],w=r[15];if(s[0].setComponents(l-a,f-u,d-_,w-y).normalize(),s[1].setComponents(l+a,f+u,d+_,w+y).normalize(),s[2].setComponents(l+o,f+g,d+S,w+A).normalize(),s[3].setComponents(l-o,f-g,d-S,w-A).normalize(),n)s[4].setComponents(c,h,p,b).normalize(),s[5].setComponents(l-c,f-h,d-p,w-b).normalize();else if(s[4].setComponents(l-c,f-h,d-p,w-b).normalize(),e===Ye)s[5].setComponents(l+c,f+h,d+p,w+b).normalize();else if(e===Mi)s[5].setComponents(c,h,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(t){Kn.center.set(0,0,0);let e=gh.distanceTo(t.center);return Kn.radius=.7071067811865476+e,Kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gl=new ce,cr=class i{constructor(){this.coordinateSystem=Ye,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];gl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Bn),n[s].setFromProjectionMatrix(gl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Bn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ki=class extends Fe{constructor(t=[],e=ii,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var En=class extends Fe{constructor(t,e,n=tn,s,r,a,o=Me,c=Me,l,u=Sn,g=1){if(u!==Sn&&u!==An)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:g};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qi=class extends En{constructor(t,e=tn,n=ii,s,r,a=Me,o=Me,c,l=Sn){let u={width:t,height:t,depth:1},g=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ji=class extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ai=class i extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],g=[],h=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(g,2));function _(S,p,d,y,A,b,w,T,m,M,L){let R=b/m,D=w/M,U=b/2,H=w/2,I=T/2,V=m+1,Y=M+1,k=0,st=0,W=new F;for(let et=0;et<Y;et++){let it=et*D-H;for(let bt=0;bt<V;bt++){let Lt=bt*R-U;W[S]=Lt*y,W[p]=it*A,W[d]=I,l.push(W.x,W.y,W.z),W[S]=0,W[p]=0,W[d]=T>0?1:-1,u.push(W.x,W.y,W.z),g.push(bt/m),g.push(1-et/M),k+=1}}for(let et=0;et<M;et++)for(let it=0;it<m;it++){let bt=h+it+V*et,Lt=h+it+V*(et+1),K=h+(it+1)+V*(et+1),X=h+(it+1)+V*et;c.push(bt,Lt,X),c.push(Lt,K,X),st+=6}o.addGroup(f,st,L),f+=st,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zn=class i extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],g=[],h=[],f=[],_=0,S=[],p=n/2,d=0;y(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new he(g,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(f,2));function y(){let b=new F,w=new F,T=0,m=(e-t)/n;for(let M=0;M<=r;M++){let L=[],R=M/r,D=R*(e-t)+t;for(let U=0;U<=s;U++){let H=U/s,I=H*c+o,V=Math.sin(I),Y=Math.cos(I);w.x=D*V,w.y=-R*n+p,w.z=D*Y,g.push(w.x,w.y,w.z),b.set(V,m,Y).normalize(),h.push(b.x,b.y,b.z),f.push(H,1-R),L.push(_++)}S.push(L)}for(let M=0;M<s;M++)for(let L=0;L<r;L++){let R=S[L][M],D=S[L+1][M],U=S[L+1][M+1],H=S[L][M+1];(t>0||L!==0)&&(u.push(R,D,H),T+=3),(e>0||L!==r-1)&&(u.push(D,U,H),T+=3)}l.addGroup(d,T,0),d+=T}function A(b){let w=_,T=new Ht,m=new F,M=0,L=b===!0?t:e,R=b===!0?1:-1;for(let U=1;U<=s;U++)g.push(0,p*R,0),h.push(0,R,0),f.push(.5,.5),_++;let D=_;for(let U=0;U<=s;U++){let I=U/s*c+o,V=Math.cos(I),Y=Math.sin(I);m.x=L*Y,m.y=p*R,m.z=L*V,g.push(m.x,m.y,m.z),h.push(0,R,0),T.x=V*.5+.5,T.y=Y*.5*R+.5,f.push(T.x,T.y),_++}for(let U=0;U<s;U++){let H=w+U,I=D+U;b===!0?u.push(I,I+1,H):u.push(I+1,I,H),M+=3}l.addGroup(d,M,b===!0?1:2),d+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},jn=class i extends zn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hr=class i extends Ze{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let A=new F,b=new F,w=new F;for(let T=0;T<e.length;T+=3)f(e[T+0],A),f(e[T+1],b),f(e[T+2],w),c(A,b,w,y)}function c(y,A,b,w){let T=w+1,m=[];for(let M=0;M<=T;M++){m[M]=[];let L=y.clone().lerp(b,M/T),R=A.clone().lerp(b,M/T),D=T-M;for(let U=0;U<=D;U++)U===0&&M===T?m[M][U]=L:m[M][U]=L.clone().lerp(R,U/D)}for(let M=0;M<T;M++)for(let L=0;L<2*(T-M)-1;L++){let R=Math.floor(L/2);L%2===0?(h(m[M][R+1]),h(m[M+1][R]),h(m[M][R])):(h(m[M][R+1]),h(m[M+1][R+1]),h(m[M+1][R]))}}function l(y){let A=new F;for(let b=0;b<r.length;b+=3)A.x=r[b+0],A.y=r[b+1],A.z=r[b+2],A.normalize().multiplyScalar(y),r[b+0]=A.x,r[b+1]=A.y,r[b+2]=A.z}function u(){let y=new F;for(let A=0;A<r.length;A+=3){y.x=r[A+0],y.y=r[A+1],y.z=r[A+2];let b=p(y)/2/Math.PI+.5,w=d(y)/Math.PI+.5;a.push(b,1-w)}_(),g()}function g(){for(let y=0;y<a.length;y+=6){let A=a[y+0],b=a[y+2],w=a[y+4],T=Math.max(A,b,w),m=Math.min(A,b,w);T>.9&&m<.1&&(A<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function h(y){r.push(y.x,y.y,y.z)}function f(y,A){let b=y*3;A.x=t[b+0],A.y=t[b+1],A.z=t[b+2]}function _(){let y=new F,A=new F,b=new F,w=new F,T=new Ht,m=new Ht,M=new Ht;for(let L=0,R=0;L<r.length;L+=9,R+=6){y.set(r[L+0],r[L+1],r[L+2]),A.set(r[L+3],r[L+4],r[L+5]),b.set(r[L+6],r[L+7],r[L+8]),T.set(a[R+0],a[R+1]),m.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),w.copy(y).add(A).add(b).divideScalar(3);let D=p(w);S(T,R+0,y,D),S(m,R+2,A,D),S(M,R+4,b,D)}}function S(y,A,b,w){w<0&&y.x===1&&(a[A]=y.x-1),b.x===0&&b.z===0&&(a[A]=w/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ts=class i extends hr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},es=class i extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,g=t/o,h=e/c,f=[],_=[],S=[],p=[];for(let d=0;d<u;d++){let y=d*h-a;for(let A=0;A<l;A++){let b=A*g-r;_.push(b,-y,0),S.push(0,0,1),p.push(A/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){let A=y+l*d,b=y+l*(d+1),w=y+1+l*(d+1),T=y+1+l*d;f.push(A,b,T),f.push(b,w,T)}this.setIndex(f),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(S,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ns=class i extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],g=new F,h=new F,f=[],_=[],S=[],p=[];for(let d=0;d<=n;d++){let y=[],A=d/n,b=a+A*o,w=t*Math.cos(b),T=Math.sqrt(t*t-w*w),m=0;d===0&&a===0?m=.5/e:d===n&&c===Math.PI&&(m=-.5/e);for(let M=0;M<=e;M++){let L=M/e,R=s+L*r;g.x=-T*Math.cos(R),g.y=w,g.z=T*Math.sin(R),_.push(g.x,g.y,g.z),h.copy(g).normalize(),S.push(h.x,h.y,h.z),p.push(L+m,1-A),y.push(l++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){let A=u[d][y+1],b=u[d][y],w=u[d+1][y],T=u[d+1][y+1];(d!==0||a>0)&&f.push(A,b,T),(d!==n-1||c<Math.PI)&&f.push(b,w,T)}this.setIndex(f),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(S,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ti=class i extends Ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],g=[],h=new F,f=new F,_=new F;for(let S=0;S<=n;S++){let p=a+S/n*o;for(let d=0;d<=s;d++){let y=d/s*r;f.x=(t+e*Math.cos(p))*Math.cos(y),f.y=(t+e*Math.cos(p))*Math.sin(y),f.z=e*Math.sin(p),l.push(f.x,f.y,f.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),_.subVectors(f,h).normalize(),u.push(_.x,_.y,_.z),g.push(d/s),g.push(S/n)}}for(let S=1;S<=n;S++)for(let p=1;p<=s;p++){let d=(s+1)*S+p-1,y=(s+1)*(S-1)+p-1,A=(s+1)*(S-1)+p,b=(s+1)*S+p;c.push(d,y,b),c.push(y,A,b)}this.setIndex(c),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ri(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(_l(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(_l(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Re(i){let t={};for(let e=0;e<i.length;e++){let n=ri(i[e]);for(let s in n)t[s]=n[s]}return t}function _l(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _h(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function To(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var lc={clone:ri,merge:Re},xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xh,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ri(t.uniforms),this.uniformsGroups=_h(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ue().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ur=class extends hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},is=class extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var dr=class extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fr=class extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Vs(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var kn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pr=class extends kn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xa,endingEnd:Xa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case qa:r=t,o=2*e-n;break;case Ya:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qa:a=t,c=2*n-e;break;case Ya:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,g=this._offsetNext,h=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),S=_*_,p=S*_,d=-h*p+2*h*S-h*_,y=(1+h)*p+(-1.5-2*h)*S+(-.5+h)*_+1,A=(-1-f)*p+(1.5+f)*S+.5*_,b=f*p-f*S;for(let w=0;w!==o;++w)r[w]=d*a[u+w]+y*a[l+w]+A*a[c+w]+b*a[g+w];return r}},mr=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),g=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*g+a[c+h]*u;return r}},gr=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_r=class extends kn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,g=this.outTangents;if(!u||!g){let _=(n-e)/(s-e),S=1-_;for(let p=0;p!==o;++p)r[p]=a[l+p]*S+a[c+p]*_;return r}let h=o*2,f=t-1;for(let _=0;_!==o;++_){let S=a[l+_],p=a[c+_],d=f*h+_*2,y=g[d],A=g[d+1],b=t*h+_*2,w=u[b],T=u[b+1],m=Mh(n,e,y,w,s);r[_]=cc(m,S,A,T,p)}return r}};function cc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function yh(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Mh(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=cc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=yh(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var He=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gi(e,this.TimeBufferType),this.values=gi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gi(t.times,Array),values:gi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Vs(t.settings)&&(n.settings={inTangents:gi(t.settings.inTangents,Array),outTangents:gi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new _r(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Gi:e=this.InterpolantFactoryMethodDiscrete;break;case nr:e=this.InterpolantFactoryMethodLinear;break;case Xs:e=this.InterpolantFactoryMethodSmooth;break;case Wa:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gi;case this.InterpolantFactoryMethodLinear:return nr;case this.InterpolantFactoryMethodSmooth:return Xs;case this.InterpolantFactoryMethodBezier:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Vs(this.settings)&&(xl(this.settings.inTangents,t),xl(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Vs(this.settings)&&(vl(this.settings.inTangents,t),vl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Dt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Dt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Jc(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Dt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xs,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let g=o*n,h=g-n,f=g+n;for(let _=0;_!==n;++_){let S=e[g+_];if(S!==e[h+_]||S!==e[f+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let g=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[g+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Vs(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function xl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function vl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}He.prototype.ValueTypeName="";He.prototype.TimeBufferType=Float32Array;He.prototype.ValueBufferType=Float32Array;He.prototype.DefaultInterpolation=nr;var Gn=class extends He{constructor(t,e,n){super(t,e,n)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Gi;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var xr=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};xr.prototype.ValueTypeName="color";var vr=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};vr.prototype.ValueTypeName="number";var yr=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)cn.slerpFlat(r,0,a,l-o,a,l,c);return r}},ss=class extends He{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new yr(this.times,this.values,this.getValueSize(),t)}};ss.prototype.ValueTypeName="quaternion";ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends He{constructor(t,e,n){super(t,e,n)}};Vn.prototype.ValueTypeName="string";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=Gi;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Mr=class extends He{constructor(t,e,n,s){super(t,e,n,s)}};Mr.prototype.ValueTypeName="vector";var Sr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,g){return l.push(u,g),this},this.removeHandler=function(u){let g=l.indexOf(u);return g!==-1&&l.splice(g,2),this},this.getHandler=function(u){for(let g=0,h=l.length;g<h;g+=2){let f=l[g],_=l[g+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hc=new Sr,br=class{constructor(t){this.manager=t!==void 0?t:hc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};br.DEFAULT_MATERIAL_NAME="__DEFAULT";var rs=class extends we{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},as=class extends rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ha=new ce,yl=new F,Ml=new F,Er=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=Be,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bn,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(yl),Ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ml),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ha,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Mi||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Hs=new F,Ws=new cn,rn=new F,os=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Hs,Ws,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Hs,Ws,rn),rn.x===1&&rn.y===1&&rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hs,Ws,rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Nn=new F,Sl=new Ht,bl=new Ht,Le=class extends os{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Sl,bl),e.subVectors(bl,Sl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ls=class extends os{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Za=class extends Er{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wi=class extends rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Za}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var _i=-90,xi=1,Ri=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(_i,xi,t,e);s.layers=this.layers,this.add(s);let r=new Le(_i,xi,t,e);r.layers=this.layers,this.add(r);let a=new Le(_i,xi,t,e);a.layers=this.layers,this.add(a);let o=new Le(_i,xi,t,e);o.layers=this.layers,this.add(o);let c=new Le(_i,xi,t,e);c.layers=this.layers,this.add(c);let l=new Le(_i,xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Ye)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Mi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,g=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(g,h,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Tr=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ao="\\[\\]\\.:\\/",Sh=new RegExp("["+Ao+"]","g"),wo="[^"+Ao+"]",bh="[^"+Ao.replace("\\.","")+"]",Eh=/((?:WC+[\/:])*)/.source.replace("WC",wo),Th=/(WCOD+)?/.source.replace("WCOD",bh),Ah=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wo),wh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wo),Rh=new RegExp("^"+Eh+Th+Ah+wh+"$"),Ch=["material","materials","bones","map"],Ja=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sh,"")}static parseTrackName(t){let e=Rh.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ch.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Ja;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ym=new Float32Array(1);var Do=class Do{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Do.prototype.isMatrix2=!0;var $a=Do;function Ro(i,t,e,n){let s=Ih(n);switch(e){case go:return i*t;case xo:return i*t/s.components*s.byteLength;case Nr:return i*t/s.components*s.byteLength;case Wn:return i*t*2/s.components*s.byteLength;case Ur:return i*t*2/s.components*s.byteLength;case _o:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case Fr:return i*t*4/s.components*s.byteLength;case ds:case fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Br:case kr:return Math.max(i,16)*Math.max(t,8)/4;case Or:case zr:return Math.max(i,8)*Math.max(t,8)/2;case Gr:case Vr:case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case gs:case qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $r:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case oa:case la:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _s:case da:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ih(i){switch(i){case Be:case uo:return{byteLength:1,components:1};case Li:case fo:case nn:return{byteLength:2,components:1};case Lr:case Dr:return{byteLength:2,components:4};case tn:case Pr:case en:return{byteLength:4,components:1};case po:case mo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lh(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,g=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,c,l){let u=c.array,g=c.updateRanges;if(i.bindBuffer(l,o),g.length===0)i.bufferSubData(l,0,u);else{g.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<g.length;f++){let _=g[h],S=g[f];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,g[h]=S)}g.length=h+1;for(let f=0,_=g.length;f<_;f++){let S=g[f];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",cu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,du=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Su=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Eu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Tu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Au=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Iu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Du=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nu=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Uu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ou=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ku=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qu=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_d=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Md=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Td=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ad=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ud=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,af=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,of=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Dh,alphahash_pars_fragment:Nh,alphamap_fragment:Uh,alphamap_pars_fragment:Fh,alphatest_fragment:Oh,alphatest_pars_fragment:Bh,aomap_fragment:zh,aomap_pars_fragment:kh,batching_pars_vertex:Gh,batching_vertex:Vh,begin_vertex:Hh,beginnormal_vertex:Wh,bsdfs:Xh,iridescence_fragment:qh,bumpmap_pars_fragment:Yh,clipping_planes_fragment:Zh,clipping_planes_pars_fragment:Jh,clipping_planes_pars_vertex:$h,clipping_planes_vertex:Kh,color_fragment:Qh,color_pars_fragment:jh,color_pars_vertex:tu,color_vertex:eu,common:nu,defaultnormal_vertex:iu,displacementmap_pars_vertex:su,displacementmap_vertex:ru,emissivemap_fragment:au,emissivemap_pars_fragment:ou,colorspace_fragment:lu,colorspace_pars_fragment:cu,envmap_fragment:hu,envmap_common_pars_fragment:uu,envmap_pars_fragment:du,envmap_pars_vertex:fu,envmap_physical_pars_fragment:Eu,envmap_vertex:pu,fog_vertex:mu,fog_pars_vertex:gu,fog_fragment:_u,fog_pars_fragment:xu,gradientmap_pars_fragment:vu,lightmap_pars_fragment:yu,lights_lambert_fragment:Mu,lights_lambert_pars_fragment:Su,lights_pars_begin:bu,lights_toon_fragment:Tu,lights_toon_pars_fragment:Au,lights_phong_fragment:wu,lights_phong_pars_fragment:Ru,lights_physical_fragment:Cu,lights_physical_pars_fragment:Iu,lights_fragment_begin:Pu,lights_fragment_maps:Lu,lights_fragment_end:Du,lightprobes_pars_fragment:Nu,logdepthbuf_fragment:Uu,logdepthbuf_pars_fragment:Fu,logdepthbuf_pars_vertex:Ou,logdepthbuf_vertex:Bu,map_fragment:zu,map_pars_fragment:ku,map_particle_fragment:Gu,map_particle_pars_fragment:Vu,metalnessmap_fragment:Hu,metalnessmap_pars_fragment:Wu,morphinstance_vertex:Xu,morphcolor_vertex:qu,morphnormal_vertex:Yu,morphtarget_pars_vertex:Zu,morphtarget_vertex:Ju,normal_fragment_begin:$u,normal_fragment_maps:Ku,normal_pars_fragment:Qu,normal_pars_vertex:ju,normal_vertex:td,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:nd,clearcoat_normal_fragment_maps:id,clearcoat_pars_fragment:sd,iridescence_pars_fragment:rd,opaque_fragment:ad,packing:od,premultiplied_alpha_fragment:ld,project_vertex:cd,dithering_fragment:hd,dithering_pars_fragment:ud,roughnessmap_fragment:dd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:pd,shadowmap_pars_vertex:md,shadowmap_vertex:gd,shadowmask_pars_fragment:_d,skinbase_vertex:xd,skinning_pars_vertex:vd,skinning_vertex:yd,skinnormal_vertex:Md,specularmap_fragment:Sd,specularmap_pars_fragment:bd,tonemapping_fragment:Ed,tonemapping_pars_fragment:Td,transmission_fragment:Ad,transmission_pars_fragment:wd,uv_pars_fragment:Rd,uv_pars_vertex:Cd,uv_vertex:Id,worldpos_vertex:Pd,background_vert:Ld,background_frag:Dd,backgroundCube_vert:Nd,backgroundCube_frag:Ud,cube_vert:Fd,cube_frag:Od,depth_vert:Bd,depth_frag:zd,distance_vert:kd,distance_frag:Gd,equirect_vert:Vd,equirect_frag:Hd,linedashed_vert:Wd,linedashed_frag:Xd,meshbasic_vert:qd,meshbasic_frag:Yd,meshlambert_vert:Zd,meshlambert_frag:Jd,meshmatcap_vert:$d,meshmatcap_frag:Kd,meshnormal_vert:Qd,meshnormal_frag:jd,meshphong_vert:tf,meshphong_frag:ef,meshphysical_vert:nf,meshphysical_frag:sf,meshtoon_vert:rf,meshtoon_frag:af,points_vert:of,points_frag:lf,shadow_vert:cf,shadow_frag:hf,sprite_vert:uf,sprite_frag:df},vt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},pn={basic:{uniforms:Re([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Re([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Re([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Re([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Re([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Re([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Re([vt.points,vt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Re([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Re([vt.common,vt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Re([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Re([vt.sprite,vt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Re([vt.common,vt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Re([vt.lights,vt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};pn.physical={uniforms:Re([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var pa={r:0,b:0,g:0},ff=new ce,Dc=new Nt;Dc.set(-1,0,0,0,1,0,0,0,1);function pf(i,t,e,n,s,r){let a=new Gt(0),o=s===!0?0:1,c,l,u=null,g=0,h=null;function f(y){let A=y.isScene===!0?y.background:null;if(A&&A.isTexture){let b=y.backgroundBlurriness>0;A=t.get(A,b)}return A}function _(y){let A=!1,b=f(y);b===null?p(a,o):b&&b.isColor&&(p(b,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(y,A){let b=f(A);b&&b.isCubeTexture?(l===void 0&&(l=new Oe(new Ai(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ri(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ff.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Dc),l.material.toneMapped=qt.getTransfer(b.colorSpace)!==Kt,(u!==b||g!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,g=b.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Oe(new es(2,2),new hn({name:"BackgroundMaterial",uniforms:ri(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=qt.getTransfer(b.colorSpace)!==Kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||g!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,g=b.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,A){y.getRGB(pa,To(i)),e.buffers.color.setClear(pa.r,pa.g,pa.b,A,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,A=1){a.set(y),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:_,addToRenderList:S,dispose:d}}function mf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(D,U,H,I,V){let Y=!1,k=g(D,I,H,U);r!==k&&(r=k,l(r.object)),Y=f(D,I,H,V),Y&&_(D,I,H,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(D,U,H,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function g(D,U,H,I){let V=I.wireframe===!0,Y=n[U.id];Y===void 0&&(Y={},n[U.id]=Y);let k=D.isInstancedMesh===!0?D.id:0,st=Y[k];st===void 0&&(st={},Y[k]=st);let W=st[H.id];W===void 0&&(W={},st[H.id]=W);let et=W[V];return et===void 0&&(et=h(c()),W[V]=et),et}function h(D){let U=[],H=[],I=[];for(let V=0;V<e;V++)U[V]=0,H[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,U,H,I){let V=r.attributes,Y=U.attributes,k=0,st=H.getAttributes();for(let W in st)if(st[W].location>=0){let it=V[W],bt=Y[W];if(bt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor)),it===void 0||it.attribute!==bt||bt&&it.data!==bt.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function _(D,U,H,I){let V={},Y=U.attributes,k=0,st=H.getAttributes();for(let W in st)if(st[W].location>=0){let it=Y[W];it===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(it=D.instanceColor));let bt={};bt.attribute=it,it&&it.data&&(bt.data=it.data),V[W]=bt,k++}r.attributes=V,r.attributesNum=k,r.index=I}function S(){let D=r.newAttributes;for(let U=0,H=D.length;U<H;U++)D[U]=0}function p(D){d(D,0)}function d(D,U){let H=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;H[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),V[D]!==U&&(i.vertexAttribDivisor(D,U),V[D]=U)}function y(){let D=r.newAttributes,U=r.enabledAttributes;for(let H=0,I=U.length;H<I;H++)U[H]!==D[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function A(D,U,H,I,V,Y,k){k===!0?i.vertexAttribIPointer(D,U,H,V,Y):i.vertexAttribPointer(D,U,H,I,V,Y)}function b(D,U,H,I){S();let V=I.attributes,Y=H.getAttributes(),k=U.defaultAttributeValues;for(let st in Y){let W=Y[st];if(W.location>=0){let et=V[st];if(et===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(et=D.instanceColor)),et!==void 0){let it=et.normalized,bt=et.itemSize,Lt=t.get(et);if(Lt===void 0)continue;let K=Lt.buffer,X=Lt.type,nt=Lt.bytesPerElement,lt=X===i.INT||X===i.UNSIGNED_INT||et.gpuType===Pr;if(et.isInterleavedBufferAttribute){let J=et.data,Z=J.isInterleavedBuffer===!0?J.stride:J.itemSize,Rt=et.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let gt=0;gt<W.locationSize;gt++)d(W.location+gt,J.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let gt=0;gt<W.locationSize;gt++)p(W.location+gt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let gt=0;gt<W.locationSize;gt++)A(W.location+gt,bt/W.locationSize,X,it,Z*nt,(Rt+bt/W.locationSize*gt)*nt,lt)}else{if(et.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)d(W.location+J,et.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let J=0;J<W.locationSize;J++)p(W.location+J);i.bindBuffer(i.ARRAY_BUFFER,K);for(let J=0;J<W.locationSize;J++)A(W.location+J,bt/W.locationSize,X,it,bt*nt,bt/W.locationSize*J*nt,lt)}}else if(k!==void 0){let it=k[st];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(W.location,it);break;case 3:i.vertexAttrib3fv(W.location,it);break;case 4:i.vertexAttrib4fv(W.location,it);break;default:i.vertexAttrib1fv(W.location,it)}}}}y()}function w(){L();for(let D in n){let U=n[D];for(let H in U){let I=U[H];for(let V in I){let Y=I[V];for(let k in Y)u(Y[k].object),delete Y[k];delete I[V]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let H in U){let I=U[H];for(let V in I){let Y=I[V];for(let k in Y)u(Y[k].object),delete Y[k];delete I[V]}}delete n[D.id]}function m(D){for(let U in n){let H=n[U];for(let I in H){let V=H[I];if(V[D.id]===void 0)continue;let Y=V[D.id];for(let k in Y)u(Y[k].object),delete Y[k];delete V[D.id]}}}function M(D){for(let U in n){let H=n[U],I=D.isInstancedMesh===!0?D.id:0,V=H[I];if(V!==void 0){for(let Y in V){let k=V[Y];for(let st in k)u(k[st].object),delete k[st];delete V[Y]}delete H[I],Object.keys(H).length===0&&delete n[U]}}}function L(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:m,initAttributes:S,enableAttribute:p,disableUnusedAttributes:y}}function gf(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function _f(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let m=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(m){return!(m!==sn&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(m){let M=m===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(m!==Be&&m!==en&&!M&&n.convert(m)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(m){if(m==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Pt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=e.logarithmicDepthBuffer===!0&&g===!1;e.reversedDepthBuffer===!0&&g===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&g===!0&&Pt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:g,maxTextures:f,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:y,maxVaryings:A,maxFragmentUniforms:b,maxSamples:w,samples:T}}function xf(i){let t=this,e=null,n=0,s=!1,r=!1,a=new je,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,h){let f=g.length!==0||h||n!==0||s;return s=h,n=g.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,h){e=u(g,h,0)},this.setState=function(g,h,f){let _=g.clippingPlanes,S=g.clipIntersection,p=g.clipShadows,d=i.get(g);if(!s||_===null||_.length===0||r&&!p)r?u(null):l();else{let y=r?0:n,A=y*4,b=d.clippingState||null;c.value=b,b=u(_,h,A,f);for(let w=0;w!==A;++w)b[w]=e[w];d.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(g,h,f,_){let S=g!==null?g.length:0,p=null;if(S!==0){if(p=c.value,_!==!0||p===null){let d=f+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,b=f;A!==S;++A,b+=4)a.copy(g[A]).applyMatrix4(y,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}var Ms=class extends Ve{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ki(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ai(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:ei});r.uniforms.tEquirect.value=e;let a=new Oe(s,r),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=De),new Ri(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},uc=256,vf=3,yf=20,Nc=256,Uc=16,Mf=3,Sf=new F,bf=new Gt,ga=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ri(1,10,null),this._boxMesh=new Oe(new Ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Sf}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),u=this._getSourceTarget(!0);e>0&&(u.texture.mipmapsAutoUpdate=!1);let g=c.autoClear,h=c.autoClearColor,f=c.autoClearDepth,_=c.autoClearStencil,S=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(t.background=c.getClearColor(bf));let p=new Ri(n,s,u);return p.position.copy(o),p.update(c,t),c.autoClear=g,c.autoClearColor=h,c.autoClearDepth=f,c.autoClearStencil=_,t.background=S,e>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(uc,ac(t))}_fromTexture(t,e){t.mapping===ii||t.mapping===Pi?this._setSize(t.image.length===0?uc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=dc(t,!1,!1),n=Math.log2(t)-vf;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ii||t.mapping===Pi?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=fc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ef(),this._integrationMaterial=Tf());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Uc);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Mf)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Nc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Af());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function dc(i,t,e){return new Ms(i,{minFilter:Tn,generateMipmaps:t,type:nn,colorSpace:Vi,depthBuffer:e})}function Ss(i,t,e){return new hn({name:i,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:e,side:Ne,blending:ei,depthTest:!1,depthWrite:!1})}function Ef(){return Ss("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Tf(){return Ss("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Uc}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Af(){return Ss("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${yf}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function fc(){return Ss("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function pc(){return Ss("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function wf(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===Rr||f===Cr)if(t.has(h)){let _=t.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let S=new Ms(_.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,_=f===Rr||f===Cr,S=f===ii||f===Pi;if(_||S){let p=e.get(h),d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return n===null&&(n=new ga(i)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let y=h.image;return _&&y&&y.height>0||S&&y&&c(y)?(n===null&&(n=new ga(i)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Rr?h.mapping=ii:f===Cr&&(h.mapping=Pi),h}function c(h){let f=0,_=6;for(let S=0;S<_;S++)h[S]!==void 0&&f++;return f===_}function l(h){let f=h.target;f.removeEventListener("dispose",l);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Rf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ki("WebGLRenderer: "+n+" extension not supported."),s}}}function Cf(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&t.remove(_.index);for(let p in _.attributes)t.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let S=r.get(_);S&&(t.remove(S),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function u(_){let S=_.attributes;for(let p in S)t.update(S[p],i.ARRAY_BUFFER)}function g(_){let S=_.index,p=_.attributes.position,d=0;if(p===void 0)return;let y=S!==null?S.array.length:p.array.length/3-1,A=p.count>=65535?$i:Ji,b=new A(Math.ceil(y/3)*6,1),w=b.array;if(S!==null){let m=S.array;d=S.version;for(let M=0,L=0;M<y;M+=3){let R=m[M+0],D=m[M+1],U=m[M+2];w[L++]=R,w[L++]=D,w[L++]=D,w[L++]=U,w[L++]=U,w[L++]=R}}else{d=p.version;for(let m=0,M=0;m<y;m+=3){let L=m+0,R=m+1,D=m+2;w[M++]=L,w[M++]=R,w[M++]=R,w[M++]=D,w[M++]=D,w[M++]=L}}b.version=d;let T=r.get(_);T&&t.remove(T),r.set(_,b)}function h(_){let S=r.get(_);if(S){let p=_.index;p!==null&&S.version<p.version&&g(_)}else g(_);return r.get(_)}function f(){for(let _ in s){let S=s[_].deref();S!==void 0&&c(S)}}return{get:l,update:u,getWireframeAttribute:h,dispose:f}}function If(i,t,e){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function c(g,h){i.drawElements(n,h,r,g*a),e.update(h,n,1)}function l(g,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,g*a,f),e.update(h,n,f))}function u(g,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,g,0,f);let S=0;for(let p=0;p<f;p++)S+=h[p];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Pf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Dt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Lf(i,t,e){let n=new WeakMap,s=new ue;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==g){let L=function(){m.dispose(),n.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],A=0;f===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let b=o.attributes.position.count*A,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*w*4*g),m=new Xi(T,b,w,g);m.type=en,m.needsUpdate=!0;let M=A*4;for(let R=0;R<g;R++){let D=p[R],U=d[R],H=y[R],I=b*w*4*R;for(let V=0;V<D.count;V++){let Y=V*M;f===!0&&(s.fromBufferAttribute(D,V),T[I+Y+0]=s.x,T[I+Y+1]=s.y,T[I+Y+2]=s.z,T[I+Y+3]=0),_===!0&&(s.fromBufferAttribute(U,V),T[I+Y+4]=s.x,T[I+Y+5]=s.y,T[I+Y+6]=s.z,T[I+Y+7]=0),S===!0&&(s.fromBufferAttribute(H,V),T[I+Y+8]=s.x,T[I+Y+9]=s.y,T[I+Y+10]=s.z,T[I+Y+11]=H.itemSize===4?s.w:1)}}h={count:g,texture:m,size:new Ht(b,w)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let S=0;S<l.length;S++)f+=l[S];let _=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Df(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,g=l.geometry,h=t.get(l,g);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Nf={[so]:"LINEAR_TONE_MAPPING",[ro]:"REINHARD_TONE_MAPPING",[ao]:"CINEON_TONE_MAPPING",[hs]:"ACES_FILMIC_TONE_MAPPING",[lo]:"AGX_TONE_MAPPING",[co]:"NEUTRAL_TONE_MAPPING",[oo]:"CUSTOM_TONE_MAPPING"};function Uf(i,t,e,n,s,r){let a=new Ve(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,u=new Ze;u.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new he([0,2,0,0,2,0],2));let g=new ur({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Oe(u,g),f=new ls(-1,1,1,-1,0,1),_=null,S=null,p=!1,d,y=null,A=[],b=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),c!==null&&c.setSize(w,T);for(let m=0;m<A.length;m++){let M=A[m];M.setSize&&M.setSize(w,T)}},this.setEffects=function(w){A=w,b=A.length>0&&A[0].isRenderPass===!0;let T=a.width,m=a.height;A.length>0&&o===null&&(o=new Ve(T,m,{type:nn,depthBuffer:!1,stencilBuffer:!1}),c=new Ve(T,m,{type:nn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&A.some(L=>L.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new En(T,m),r===!0&&(l.format=An,l.type=si)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let L=0;L<A.length;L++){let R=A[L];R.setSize&&R.setSize(T,m),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(w,T){if(p||w.toneMapping===dn&&A.length===0)return!1;if(y=T,T!==null){let m=T.width,M=T.height;(a.width!==m||a.height!==M)&&this.setSize(m,M)}return b===!1&&w.setRenderTarget(a),d=w.toneMapping,w.toneMapping=dn,!0},this.hasRenderPass=function(){return b},this.end=function(w,T){w.toneMapping=d,p=!0;let m=a,M=o;for(let L=0;L<A.length;L++){let R=A[L];R.enabled!==!1&&(R.render(w,M,m,T),R.needsSwap!==!1&&(m=M,M=M===o?c:o))}if(_!==w.outputColorSpace||S!==w.toneMapping){_=w.outputColorSpace,S=w.toneMapping,g.defines={},qt.getTransfer(_)===Kt&&(g.defines.SRGB_TRANSFER="");let L=Nf[S];L&&(g.defines[L]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=m.texture,w.setRenderTarget(y),w.render(h,f),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),g.dispose()}}var Fc=new Fe,Oc=new En(1,1),Bc=new Qi(1),zc=new Xi,kc=new ar,Gc=new Ki,mc=[],gc=[],_c=new Float32Array(16),xc=new Float32Array(9),vc=new Float32Array(4);function Ni(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=mc[s];if(r===void 0&&(r=new Float32Array(s),mc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xa(i,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ff(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Of(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Bf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function zf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function kf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;vc.set(n),i.uniformMatrix2fv(this.addr,!1,vc),_e(e,n)}}function Gf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;xc.set(n),i.uniformMatrix3fv(this.addr,!1,xc),_e(e,n)}}function Vf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;_c.set(n),i.uniformMatrix4fv(this.addr,!1,_c),_e(e,n)}}function Hf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Wf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Xf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function qf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Yf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Jf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function $f(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function va(i){return i.version===0&&(i.compareFunction=Mo,i.needsUpdate=!0),i}function Kf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=va(Oc):r=Fc,e.setTexture2D(t||r,s)}function Qf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kc,s)}function jf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=va(Bc):r=Gc,e.setTextureCube(t||r,s)}function tp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zc,s)}function ep(i){switch(i){case 5126:return Ff;case 35664:return Of;case 35665:return Bf;case 35666:return zf;case 35674:return kf;case 35675:return Gf;case 35676:return Vf;case 5124:case 35670:return Hf;case 35667:case 35671:return Wf;case 35668:case 35672:return Xf;case 35669:case 35673:return qf;case 5125:return Yf;case 36294:return Zf;case 36295:return Jf;case 36296:return $f;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return Qf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return tp}}function np(i,t){i.uniform1fv(this.addr,t)}function ip(i,t){let e=Ni(t,this.size,2);i.uniform2fv(this.addr,e)}function sp(i,t){let e=Ni(t,this.size,3);i.uniform3fv(this.addr,e)}function rp(i,t){let e=Ni(t,this.size,4);i.uniform4fv(this.addr,e)}function ap(i,t){let e=Ni(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function op(i,t){let e=Ni(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function lp(i,t){let e=Ni(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function cp(i,t){i.uniform1iv(this.addr,t)}function hp(i,t){i.uniform2iv(this.addr,t)}function up(i,t){i.uniform3iv(this.addr,t)}function dp(i,t){i.uniform4iv(this.addr,t)}function fp(i,t){i.uniform1uiv(this.addr,t)}function pp(i,t){i.uniform2uiv(this.addr,t)}function mp(i,t){i.uniform3uiv(this.addr,t)}function gp(i,t){i.uniform4uiv(this.addr,t)}function _p(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=va(Oc):a=Fc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function xp(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kc,r[a])}function vp(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=va(Bc):a=Gc;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function yp(i,t,e){let n=this.cache,s=t.length,r=xa(e,s);ge(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zc,r[a])}function Mp(i){switch(i){case 5126:return np;case 35664:return ip;case 35665:return sp;case 35666:return rp;case 35674:return ap;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return hp;case 35668:case 35672:return up;case 35669:case 35673:return dp;case 5125:return fp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return yp}}var Fo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ep(e.type)}},Oo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mp(e.type)}},Bo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},No=/(\w+)(\])?(\[|\.)?/g;function yc(i,t){i.seq.push(t),i.map[t.id]=t}function Sp(i,t,e){let n=i.name,s=n.length;for(No.lastIndex=0;;){let r=No.exec(n),a=No.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){yc(e,l===void 0?new Fo(o,i,t):new Oo(o,i,t));break}else{let g=e.map[o];g===void 0&&(g=new Bo(o),yc(e,g)),e=g}}}var Di=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Sp(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Mc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var bp=37297,Ep=0;function Tp(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Sc=new Nt;function Ap(i){qt._getMatrix(Sc,qt.workingColorSpace,i);let t=`mat3( ${Sc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Hi:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function bc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Tp(i.getShaderSource(t),o)}else return r}function wp(i,t){let e=Ap(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Rp={[so]:"Linear",[ro]:"Reinhard",[ao]:"Cineon",[hs]:"ACESFilmic",[lo]:"AgX",[co]:"Neutral",[oo]:"Custom"};function Cp(i,t){let e=Rp[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ma=new F;function Ip(){qt.getLuminanceCoefficients(ma);let i=ma.x.toFixed(4),t=ma.y.toFixed(4),e=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function Lp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ys(i){return i!==""}function Ec(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Np=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(i){return i.replace(Np,Up)}function Up(i,t){let e=Vt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return zo(e)}var Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(Fp,Op)}function Op(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Bp={[cs]:"SHADOWMAP_TYPE_PCF",[Ci]:"SHADOWMAP_TYPE_VSM"};function zp(i){return Bp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kp={[Pi]:"ENVMAP_MODE_REFRACTION"};function Gp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":kp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vp={[io]:"ENVMAP_BLENDING_MULTIPLY",[Wl]:"ENVMAP_BLENDING_MIX",[Xl]:"ENVMAP_BLENDING_ADD"};function Hp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vp[i.combine]||"ENVMAP_BLENDING_NONE"}function Wp(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=zp(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Gp(e),g=Hp(e),h=Pp(e),f=Lp(r),_=s.createProgram(),S,p,d=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ys).join(`
`),S.length>0&&(S+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(ys).join(`
`),p.length>0&&(p+=`
`)):(S=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),p=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+g:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==dn?"#define TONE_MAPPING":"",e.toneMapping!==dn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==dn?Cp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,wp("linearToOutputTexel",e.outputColorSpace),Ip(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ys).join(`
`)),a=zo(a),a=Ec(a,e),a=Tc(a,e),o=zo(o),o=Ec(o,e),o=Tc(o,e),a=Ac(a),o=Ac(o),e.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,S=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,p=["#define varying in",e.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=d+S+a,A=d+p+o,b=Mc(s,s.VERTEX_SHADER,y),w=Mc(s,s.FRAGMENT_SHADER,A);s.attachShader(_,b),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(b)||"",H=s.getShaderInfoLog(w)||"",I=D.trim(),V=U.trim(),Y=H.trim(),k=!0,st=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,b,w);else{let W=bc(s,b,"vertex"),et=bc(s,w,"fragment");Dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+W+`
`+et)}else I!==""?Pt("WebGLProgram: Program Info Log:",I):(V===""||Y==="")&&(st=!1);st&&(R.diagnostics={runnable:k,programLog:I,vertexShader:{log:V,prefix:S},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(b),s.deleteShader(w),m=new Di(s,_),M=Dp(s,_)}let m;this.getUniforms=function(){return m===void 0&&T(this),m};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,bp)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ep++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}var Xp=0,ko=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Go(t),e.set(t,n)),n}},Go=class{constructor(t){this.id=Xp++,this.code=t,this.usedTimes=0}};function qp(i){return i===Wn||i===gs||i===_s}function Yp(i,t,e,n,s,r){let a=new qi,o=new ko,c=new Set,l=[],u=new Map,g=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(m){return c.add(m),m===0?"uv":`uv${m}`}function _(m,M,L,R,D,U){let H=R.fog,I=D.geometry,V=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?R.environment:null,Y=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,k=t.get(m.envMap||V,Y),st=h[m.type],W=n.precision;m.precision!==null&&(W=n.getMaxPrecision(m.precision),W!==m.precision&&Pt("WebGLProgram.getParameters:",m.precision,"not supported, using",W,"instead."));let et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,it=et!==void 0?et.length:0,bt=0;I.morphAttributes.position!==void 0&&(bt=1),I.morphAttributes.normal!==void 0&&(bt=2),I.morphAttributes.color!==void 0&&(bt=3);let Lt,K,X,nt;if(st){let xt=pn[st];Lt=xt.vertexShader,K=xt.fragmentShader}else{Lt=m.vertexShader,K=m.fragmentShader;let xt=o.getVertexShaderStage(m),jt=o.getFragmentShaderStage(m);o.update(m,xt,jt),X=xt.id,nt=jt.id}let lt=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),Z=D.isInstancedMesh===!0,Rt=D.isBatchedMesh===!0,gt=!!m.map,Ot=!!m.matcap,Bt=!!k,Mt=Bt&&k.isPMREMTexture===!0,Jt=!!m.aoMap,ee=!!m.lightMap,Qt=!!m.bumpMap&&m.wireframe===!1,se=!!m.normalMap,We=!!m.displacementMap,re=!!m.emissiveMap,ne=!!m.metalnessMap,Ce=!!m.roughnessMap,Ue=m.anisotropy>0,N=m.clearcoat>0,Xe=m.diffuseRoughness>0,oe=m.dispersion>0,le=m.retroreflectivity>0,_t=m.iridescence>0,me=m.sheen>0,It=m.transmission>0,Ut=Ue&&!!m.anisotropyMap,E=N&&!!m.clearcoatMap,x=N&&!!m.clearcoatNormalMap,B=N&&!!m.clearcoatRoughnessMap,rt=Xe&&!!m.diffuseRoughnessMap,tt=_t&&!!m.iridescenceMap,ct=_t&&!!m.iridescenceThicknessMap,pt=me&&!!m.sheenColorMap,$=me&&!!m.sheenRoughnessMap,Q=!!m.specularMap,ut=!!m.specularColorMap,C=!!m.specularIntensityMap,j=It&&!!m.transmissionMap,q=It&&!!m.thicknessMap,dt=!!m.gradientMap,ot=!!m.alphaMap,ht=m.alphaTest>0,wt=!!m.alphaHash,kt=!!m.extensions,at=dn;m.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(at=i.toneMapping);let Ct=Mt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,zt={shaderID:st,shaderType:m.type,shaderName:m.name,vertexShader:Lt,fragmentShader:K,defines:m.defines,customVertexShaderID:X,customFragmentShaderID:nt,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:W,batching:Rt,batchingColor:Rt&&D._colorsTexture!==null,instancing:Z,instancingColor:Z&&D.instanceColor!==null,instancingMorph:Z&&D.morphTexture!==null,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:gt,matcap:Ot,envMap:Bt,envMapMode:Bt&&k.mapping,envMapPMREM:Mt,envMapMaxLod:Mt?Ct.length-1:null,envMapSize:Mt?Ct[0].width:null,aoMap:Jt,lightMap:ee,bumpMap:Qt,normalMap:se,displacementMap:We,emissiveMap:re,normalMapObjectSpace:se&&m.normalMapType===Zl,normalMapTangentSpace:se&&m.normalMapType===fa,packedNormalMap:se&&m.normalMapType===fa&&qp(m.normalMap.format),metalnessMap:ne,roughnessMap:Ce,anisotropy:Ue,anisotropyMap:Ut,clearcoat:N,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:Xe,diffuseRoughnessMap:rt,dispersion:oe,retroreflection:le,iridescence:_t,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:me,sheenColorMap:pt,sheenRoughnessMap:$,specularMap:Q,specularColorMap:ut,specularIntensityMap:C,transmission:It,transmissionMap:j,thicknessMap:q,gradientMap:dt,opaque:m.transparent===!1&&m.blending===Ii&&m.alphaToCoverage===!1,alphaMap:ot,alphaTest:ht,alphaHash:wt,combine:m.combine,mapUv:gt&&f(m.map.channel),aoMapUv:Jt&&f(m.aoMap.channel),lightMapUv:ee&&f(m.lightMap.channel),bumpMapUv:Qt&&f(m.bumpMap.channel),normalMapUv:se&&f(m.normalMap.channel),displacementMapUv:We&&f(m.displacementMap.channel),emissiveMapUv:re&&f(m.emissiveMap.channel),metalnessMapUv:ne&&f(m.metalnessMap.channel),roughnessMapUv:Ce&&f(m.roughnessMap.channel),anisotropyMapUv:Ut&&f(m.anisotropyMap.channel),clearcoatMapUv:E&&f(m.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(m.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&f(m.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(m.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(m.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&f(m.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(m.sheenRoughnessMap.channel),specularMapUv:Q&&f(m.specularMap.channel),specularColorMapUv:ut&&f(m.specularColorMap.channel),specularIntensityMapUv:C&&f(m.specularIntensityMap.channel),transmissionMapUv:j&&f(m.transmissionMap.channel),thicknessMapUv:q&&f(m.thicknessMap.channel),alphaMapUv:ot&&f(m.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(se||Ue),vertexNormals:!!I.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(gt||ot),fog:!!H,useFog:m.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||I.attributes.normal===void 0&&se===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:J,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:bt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(xt=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:gt&&m.map.isVideoTexture===!0&&qt.getTransfer(m.map.colorSpace)===Kt,decodeVideoTextureEmissive:re&&m.emissiveMap.isVideoTexture===!0&&qt.getTransfer(m.emissiveMap.colorSpace)===Kt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===un,flipSided:m.side===Ne,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:kt&&m.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&m.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function S(m){let M=[];if(m.shaderID?M.push(m.shaderID):(M.push(m.customVertexShaderID),M.push(m.customFragmentShaderID)),m.defines!==void 0)for(let L in m.defines)M.push(L),M.push(m.defines[L]);return m.isRawShaderMaterial===!1&&(p(M,m),d(M,m),M.push(i.outputColorSpace)),M.push(m.customProgramCacheKey),M.join()}function p(m,M){m.push(M.precision),m.push(M.outputColorSpace),m.push(M.envMapMode),m.push(M.envMapPMREM),m.push(M.envMapMaxLod),m.push(M.envMapSize),m.push(M.mapUv),m.push(M.alphaMapUv),m.push(M.lightMapUv),m.push(M.aoMapUv),m.push(M.bumpMapUv),m.push(M.normalMapUv),m.push(M.displacementMapUv),m.push(M.emissiveMapUv),m.push(M.metalnessMapUv),m.push(M.roughnessMapUv),m.push(M.anisotropyMapUv),m.push(M.clearcoatMapUv),m.push(M.clearcoatNormalMapUv),m.push(M.clearcoatRoughnessMapUv),m.push(M.diffuseRoughnessMapUv),m.push(M.iridescenceMapUv),m.push(M.iridescenceThicknessMapUv),m.push(M.sheenColorMapUv),m.push(M.sheenRoughnessMapUv),m.push(M.specularMapUv),m.push(M.specularColorMapUv),m.push(M.specularIntensityMapUv),m.push(M.transmissionMapUv),m.push(M.thicknessMapUv),m.push(M.combine),m.push(M.fogExp2),m.push(M.sizeAttenuation),m.push(M.morphTargetsCount),m.push(M.numSunLights),m.push(M.numDirLights),m.push(M.numPointLights),m.push(M.numSpotLights),m.push(M.numSpotLightMaps),m.push(M.numHemiLights),m.push(M.numRectAreaLights),m.push(M.numSunLightShadows),m.push(M.numDirLightShadows),m.push(M.numPointLightShadows),m.push(M.numSpotLightShadows),m.push(M.numSpotLightShadowsWithMaps),m.push(M.numLightProbes),m.push(M.numLightProbeGrids),m.push(M.shadowMapType),m.push(M.toneMapping),m.push(M.numClippingPlanes),m.push(M.numClipIntersection),m.push(M.depthPacking)}function d(m,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function y(m){let M=h[m.type],L;if(M){let R=pn[M];L=lc.clone(R.uniforms)}else L=m.uniforms;return L}function A(m,M){let L=u.get(M);return L!==void 0?++L.usedTimes:(L=new Wp(i,M,m,s),l.push(L),u.set(M,L)),L}function b(m){if(--m.usedTimes===0){let M=l.indexOf(m);l[M]=l[l.length-1],l.pop(),u.delete(m.cacheKey),m.destroy()}}function w(m){o.remove(m)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:y,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:T}}function Zp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Cc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,_,S,p,d){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:f,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:d},i[t]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=_,y.materialVariant=a(h),y.groupOrder=S,y.renderOrder=h.renderOrder,y.z=p,y.group=d),t++,y}function c(h,f,_,S,p,d,y){y.reversedDepth===!0&&(p=-p);let A=o(h,f,_,S,p,d);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function l(h,f,_,S,p,d){let y=o(h,f,_,S,p,d);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,f){e.length>1&&e.sort(h||Jp),n.length>1&&n.sort(f||Rc),s.length>1&&s.sort(f||Rc)}function g(){for(let h=t,f=i.length;h<f;h++){let _=i[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:g,sort:u}}function $p(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Cc,i.set(n,[a])):s>=r.length?(a=new Cc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Kp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Gt};break;case"SpotLight":e={position:new F,direction:new F,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Qp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var jp=0;function tm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function em(i){let t=new Kp,e=Qp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new ce,a=new ce;function o(l){let u=0,g=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,_=0,S=0,p=0,d=0,y=0,A=0,b=0,w=0,T=0,m=0,M=0,L=0,R=0;l.sort(tm);for(let U=0,H=l.length;U<H;U++){let I=l[U],V=I.color,Y=I.intensity,k=I.distance,st=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Wn?st=I.shadow.map.texture:st=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=V.r*Y,g+=V.g*Y,h+=V.b*Y;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],Y);R++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[_]=it,n.sunShadowMap[_]=st;let bt=et.getViewportCount();for(let Lt=0;Lt<bt;Lt++)n.sunShadowMatrix[S+Lt]=et.getMatrix(Lt),n.sunShadowCascade[S+Lt]=et._cascadeData[Lt];S+=bt,_++}n.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.directionalShadow[p]=it,n.directionalShadowMap[p]=st,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(V).multiplyScalar(Y),W.distance=k,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[y]=W;let et=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,et.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[y]=et.matrix,I.castShadow){let it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.spotShadow[y]=it,n.spotShadowMap[y]=st,m++}y++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(V).multiplyScalar(Y),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=W,A++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let et=I.shadow,it=e.get(I);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,n.pointShadow[d]=it,n.pointShadowMap[d]=st,n.pointShadowMatrix[d]=I.shadow.matrix,T++}n.point[d]=W,d++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(Y),W.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[b]=W,b++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=h;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==d||D.spotLength!==y||D.rectAreaLength!==A||D.hemiLength!==b||D.numSunShadows!==_||D.numDirectionalShadows!==w||D.numPointShadows!==T||D.numSpotShadows!==m||D.numSpotMaps!==M||D.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=y,n.rectArea.length=A,n.point.length=d,n.hemi.length=b,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=m,n.spotShadowMap.length=m,n.spotLightMatrix.length=m+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,D.sunLength=f,D.directionalLength=p,D.pointLength=d,D.spotLength=y,D.rectAreaLength=A,D.hemiLength=b,D.numSunShadows=_,D.numDirectionalShadows=w,D.numPointShadows=T,D.numSpotShadows=m,D.numSpotMaps=M,D.numLightProbes=R,n.version=jp++)}function c(l,u){let g=0,h=0,f=0,_=0,S=0,p=0,d=u.matrixWorldInverse;for(let y=0,A=l.length;y<A;y++){let b=l[y];if(b.isSunLight){let w=n.sun[g];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(d),g++}else if(b.isDirectionalLight){let w=n.directional[h];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(b.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),_++}else if(b.isRectAreaLight){let w=n.rectArea[S];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(b.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(b.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(d),f++}else if(b.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:o,setupView:c,state:n}}function Ic(i){let t=new em(i),e=[],n=[],s=[];function r(g){u.camera=g,e.length=0,n.length=0,s.length=0}function a(g){g.isLightProbeGrid?s.push(g):e.push(g)}function o(g){n.push(g)}function c(){t.setup(e),s.sort((g,h)=>g.priority-h.priority||g.id-h.id)}function l(g){t.setupView(e,g)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function nm(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ic(i),t.set(s,[o])):r>=a.length?(o=new Ic(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],am=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Pc=new ce,vs=new F,Uo=new F;function om(i,t,e){let n=new Bn,s=new Ht,r=new Ht,a=new ue,o=new dr,c=new fr,l={},u=e.maxTextureSize,g={[Hn]:Ne,[Ne]:Hn,[un]:un},h=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:im,fragmentShader:sm}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let _=new Ze;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Oe(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cs;let d=this.type;this.render=function(T,m,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===wr&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cs);let L=i.getRenderTarget(),R=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ei),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=d!==this.type;H&&m.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=T.length;I<V;I++){let Y=T[I],k=Y.shadow;if(k===void 0){Pt("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();s.multiply(st),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,k.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||H===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ci){if(Y.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ve(s.x,s.y,{format:Wn,type:nn,minFilter:De,magFilter:De,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new En(s.x,s.y,en),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=Sn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Me,k.map.depthTexture.magFilter=Me}else Y.isPointLight?(k.map=new Ms(s.x),k.map.depthTexture=new Qi(s.x,tn)):(k.map=new Ve(s.x,s.y),k.map.depthTexture=new En(s.x,s.y,tn)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=Sn,this.type===cs?(k.map.depthTexture.compareFunction=W?yo:vo,k.map.depthTexture.minFilter=De,k.map.depthTexture.magFilter=De):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Me,k.map.depthTexture.magFilter=Me);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let et=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();Y.isPointLight!==!0&&k.updateMatrices(Y,M);let it=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:M.layers;for(let bt=0;bt<et;bt++){let Lt=k.getCamera(bt);if(Y.isPointLight){let K=k.camera,X=k.matrix,nt=Y.distance||K.far;nt!==K.far&&(K.far=nt,K.updateProjectionMatrix()),vs.setFromMatrixPosition(Y.matrixWorld),K.position.copy(vs),Uo.copy(K.position),Uo.add(rm[bt]),K.up.copy(am[bt]),K.lookAt(Uo),K.updateMatrixWorld(),X.makeTranslation(-vs.x,-vs.y,-vs.z),Pc.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Pc,K.coordinateSystem,K.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(k.map),i.clear());let K=k.getViewport(bt);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),U.viewport(a)}n=k.getFrustum(bt),b(m,M,Lt,Y,it,this.type)}k.isPointLightShadow!==!0&&this.type===Ci&&y(k,M),k.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(L,R,D)};function y(T,m){let M=t.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ve(s.x,s.y,{format:Wn,type:nn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(m,null,M,h,S,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(m,null,M,f,S,null)}function A(T,m,M,L){let R=null,D=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)R=D;else if(R=M.isPointLight===!0?c:o,i.localClippingEnabled&&m.clipShadows===!0&&Array.isArray(m.clippingPlanes)&&m.clippingPlanes.length!==0||m.displacementMap&&m.displacementScale!==0||m.alphaMap&&m.alphaTest>0||m.map&&m.alphaTest>0||m.alphaToCoverage===!0){let U=R.uuid,H=m.uuid,I=l[U];I===void 0&&(I={},l[U]=I);let V=I[H];V===void 0&&(V=R.clone(),I[H]=V,m.addEventListener("dispose",w)),R=V}if(R.visible=m.visible,R.wireframe=m.wireframe,L===Ci?R.side=m.shadowSide!==null?m.shadowSide:m.side:R.side=m.shadowSide!==null?m.shadowSide:g[m.side],R.alphaMap=m.alphaMap,R.alphaTest=m.alphaToCoverage===!0?.5:m.alphaTest,R.map=m.map,R.clipShadows=m.clipShadows,R.clippingPlanes=m.clippingPlanes,R.clipIntersection=m.clipIntersection,R.displacementMap=m.displacementMap,R.displacementScale=m.displacementScale,R.displacementBias=m.displacementBias,R.wireframeLinewidth=m.wireframeLinewidth,R.linewidth=m.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=i.properties.get(R);U.light=M}return R}function b(T,m,M,L,R,D){if(T.visible===!1)return;if(T.layers.test(R)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Ci)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);let I=t.update(T),V=T.material;if(Array.isArray(V)){let Y=I.groups;for(let k=0,st=Y.length;k<st;k++){let W=Y[k],et=V[W.materialIndex];if(et&&et.visible){let it=A(T,et,L,D);T.onBeforeShadow(i,T,m,M,I,it,W),i.renderBufferDirect(M,null,I,it,T,W),T.onAfterShadow(i,T,m,M,I,it,W)}}}else if(V.visible){let Y=A(T,V,L,D);T.onBeforeShadow(i,T,m,M,I,Y,null),i.renderBufferDirect(M,null,I,Y,T,null),T.onAfterShadow(i,T,m,M,I,Y,null)}}let H=T.children;for(let I=0,V=H.length;I<V;I++)b(H[I],m,M,L,R,D)}function w(T){T.target.removeEventListener("dispose",w);for(let M in l){let L=l[M],R=T.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function lm(i,t){function e(){let C=!1,j=new ue,q=null,dt=new ue(0,0,0,0);return{setMask:function(ot){q!==ot&&!C&&(i.colorMask(ot,ot,ot,ot),q=ot)},setLocked:function(ot){C=ot},setClear:function(ot,ht,wt,kt,at){at===!0&&(ot*=kt,ht*=kt,wt*=kt),j.set(ot,ht,wt,kt),dt.equals(j)===!1&&(i.clearColor(ot,ht,wt,kt),dt.copy(j))},reset:function(){C=!1,q=null,dt.set(-1,0,0,0)}}}function n(){let C=!1,j=!1,q=null,dt=null,ot=null;return{setReversed:function(ht){if(j!==ht){let wt=t.get("EXT_clip_control");ht?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),j=ht;let kt=ot;ot=null,this.setClear(kt)}},getReversed:function(){return j},setTest:function(ht){ht?J(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(ht){q!==ht&&!C&&(i.depthMask(ht),q=ht)},setFunc:function(ht){if(j&&(ht=rc[ht]),dt!==ht){switch(ht){case Ys:i.depthFunc(i.NEVER);break;case Zs:i.depthFunc(i.ALWAYS);break;case Js:i.depthFunc(i.LESS);break;case yi:i.depthFunc(i.LEQUAL);break;case $s:i.depthFunc(i.EQUAL);break;case Ks:i.depthFunc(i.GEQUAL);break;case Qs:i.depthFunc(i.GREATER);break;case js:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=ht}},setLocked:function(ht){C=ht},setClear:function(ht){ot!==ht&&(ot=ht,j&&(ht=1-ht),i.clearDepth(ht))},reset:function(){C=!1,q=null,dt=null,ot=null,j=!1}}}function s(){let C=!1,j=null,q=null,dt=null,ot=null,ht=null,wt=null,kt=null,at=null;return{setTest:function(Ct){C||(Ct?J(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(Ct){j!==Ct&&!C&&(i.stencilMask(Ct),j=Ct)},setFunc:function(Ct,zt,xt){(q!==Ct||dt!==zt||ot!==xt)&&(i.stencilFunc(Ct,zt,xt),q=Ct,dt=zt,ot=xt)},setOp:function(Ct,zt,xt){(ht!==Ct||wt!==zt||kt!==xt)&&(i.stencilOp(Ct,zt,xt),ht=Ct,wt=zt,kt=xt)},setLocked:function(Ct){C=Ct},setClear:function(Ct){at!==Ct&&(i.clearStencil(Ct),at=Ct)},reset:function(){C=!1,j=null,q=null,dt=null,ot=null,ht=null,wt=null,kt=null,at=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,u={},g={},h={},f=new WeakMap,_=[],S=null,p=!1,d=null,y=null,A=null,b=null,w=null,T=null,m=null,M=new Gt(0,0,0),L=0,R=!1,D=null,U=null,H=null,I=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,st=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=st>=1):W.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=st>=2);let et=null,it={},bt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),K=new ue().fromArray(bt),X=new ue().fromArray(Lt);function nt(C,j,q,dt){let ot=new Uint8Array(4),ht=i.createTexture();i.bindTexture(C,ht),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<q;wt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(j,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(j+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return ht}let lt={};lt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(yi),Qt(!1),se(Ka),J(i.CULL_FACE),Jt(ei);function J(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function Z(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Rt(C,j){return h[C]!==j?(i.bindFramebuffer(C,j),h[C]=j,C===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=j),C===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=j),!0):!1}function gt(C,j){let q=_,dt=!1;if(C){q=f.get(j),q===void 0&&(q=[],f.set(j,q));let ot=C.textures;if(q.length!==ot.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,wt=ot.length;ht<wt;ht++)q[ht]=i.COLOR_ATTACHMENT0+ht;q.length=ot.length,dt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,dt=!0);dt&&i.drawBuffers(q)}function Ot(C){return S!==C?(i.useProgram(C),S=C,!0):!1}let Bt={[ni]:i.FUNC_ADD,[wl]:i.FUNC_SUBTRACT,[Rl]:i.FUNC_REVERSE_SUBTRACT};Bt[Cl]=i.MIN,Bt[Il]=i.MAX;let Mt={[Pl]:i.ZERO,[Ll]:i.ONE,[Dl]:i.SRC_COLOR,[eo]:i.SRC_ALPHA,[zl]:i.SRC_ALPHA_SATURATE,[Ol]:i.DST_COLOR,[Ul]:i.DST_ALPHA,[Nl]:i.ONE_MINUS_SRC_COLOR,[no]:i.ONE_MINUS_SRC_ALPHA,[Bl]:i.ONE_MINUS_DST_COLOR,[Fl]:i.ONE_MINUS_DST_ALPHA,[kl]:i.CONSTANT_COLOR,[Gl]:i.ONE_MINUS_CONSTANT_COLOR,[Vl]:i.CONSTANT_ALPHA,[Hl]:i.ONE_MINUS_CONSTANT_ALPHA};function Jt(C,j,q,dt,ot,ht,wt,kt,at,Ct){if(C===ei){p===!0&&(Z(i.BLEND),p=!1);return}if(p===!1&&(J(i.BLEND),p=!0),C!==Al){if(C!==d||Ct!==R){if((y!==ni||w!==ni)&&(i.blendEquation(i.FUNC_ADD),y=ni,w=ni),Ct)switch(C){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case to:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Dt("WebGLState: Invalid blending: ",C);break}else switch(C){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ja:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case to:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",C);break}A=null,b=null,T=null,m=null,M.set(0,0,0),L=0,d=C,R=Ct}return}ot=ot||j,ht=ht||q,wt=wt||dt,(j!==y||ot!==w)&&(i.blendEquationSeparate(Bt[j],Bt[ot]),y=j,w=ot),(q!==A||dt!==b||ht!==T||wt!==m)&&(i.blendFuncSeparate(Mt[q],Mt[dt],Mt[ht],Mt[wt]),A=q,b=dt,T=ht,m=wt),(kt.equals(M)===!1||at!==L)&&(i.blendColor(kt.r,kt.g,kt.b,at),M.copy(kt),L=at),d=C,R=!1}function ee(C,j){C.side===un?Z(i.CULL_FACE):J(i.CULL_FACE);let q=C.side===Ne;j&&(q=!q),Qt(q),C.blending===Ii&&C.transparent===!1?Jt(ei):Jt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let dt=C.stencilWrite;o.setTest(dt),dt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),re(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(C){D!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),D=C)}function se(C){C!==El?(J(i.CULL_FACE),C!==U&&(C===Ka?i.cullFace(i.BACK):C===Tl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),U=C}function We(C){C!==H&&(k&&i.lineWidth(C),H=C)}function re(C,j,q){C?(J(i.POLYGON_OFFSET_FILL),(I!==j||V!==q)&&(I=j,V=q,a.getReversed()&&(j=-j,q=-q),i.polygonOffset(j,q))):Z(i.POLYGON_OFFSET_FILL)}function ne(C){C?J(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function Ce(C){C===void 0&&(C=i.TEXTURE0+Y-1),et!==C&&(i.activeTexture(C),et=C)}function Ue(C,j,q){q===void 0&&(et===null?q=i.TEXTURE0+Y-1:q=et);let dt=it[q];dt===void 0&&(dt={type:void 0,texture:void 0},it[q]=dt),(dt.type!==C||dt.texture!==j)&&(et!==q&&(i.activeTexture(q),et=q),i.bindTexture(C,j||lt[C]),dt.type=C,dt.texture=j)}function N(){let C=it[et];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Xe(){try{i.compressedTexImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function oe(){try{i.compressedTexImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function le(){try{i.texSubImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function _t(){try{i.texSubImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function me(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function Ut(){try{i.texStorage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function E(){try{i.texStorage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){Dt("WebGLState:",C)}}function B(){try{i.texImage3D(...arguments)}catch(C){Dt("WebGLState:",C)}}function rt(C){return g[C]!==void 0?g[C]:i.getParameter(C)}function tt(C,j){g[C]!==j&&(i.pixelStorei(C,j),g[C]=j)}function ct(C){K.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function pt(C){X.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),X.copy(C))}function $(C,j){let q=l.get(j);q===void 0&&(q=new WeakMap,l.set(j,q));let dt=q.get(C);dt===void 0&&(dt=i.getUniformBlockIndex(j,C.name),i.uniformBlockBinding(j,dt,dt),q.set(C,dt))}function Q(C,j,q){let ot=l.get(j).get(C);c[ot]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,ot,q),c[ot]=q)}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},g={},et=null,it={},h={},c={},f=new WeakMap,_=[],S=null,p=!1,d=null,y=null,A=null,b=null,w=null,T=null,m=null,M=new Gt(0,0,0),L=0,R=!1,D=null,U=null,H=null,I=null,V=null,K.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:Z,bindFramebuffer:Rt,drawBuffers:gt,useProgram:Ot,setBlending:Jt,setMaterial:ee,setFlipSided:Qt,setCullFace:se,setLineWidth:We,setPolygonOffset:re,setScissorTest:ne,activeTexture:Ce,bindTexture:Ue,unbindTexture:N,compressedTexImage2D:Xe,compressedTexImage3D:oe,texImage2D:x,texImage3D:B,pixelStorei:tt,getParameter:rt,updateUBOMapping:$,uniformBlockBinding:Q,texStorage2D:Ut,texStorage3D:E,texSubImage2D:le,texSubImage3D:_t,compressedTexSubImage2D:me,compressedTexSubImage3D:It,scissor:ct,viewport:pt,reset:ut}}function cm(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,u=new WeakMap,g=new Set,h,f=new WeakMap,_=new Set,S=new FinalizationRegistry(E=>_.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(E,x){return p?new OffscreenCanvas(E,x):Wi("canvas")}function y(E,x,B){let rt=1,tt=Ut(E);if((tt.width>B||tt.height>B)&&(rt=B/Math.max(tt.width,tt.height)),rt<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ct=Math.floor(rt*tt.width),pt=Math.floor(rt*tt.height);h===void 0&&(h=d(ct,pt));let $=x?d(ct,pt):h;return $.width=ct,$.height=pt,$.getContext("2d").drawImage(E,0,0,ct,pt),Pt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ct+"x"+pt+")."),$}else return"data"in E&&Pt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function A(E){return E.generateMipmaps}function b(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,x,B,rt,tt,ct=!1){if(E!==null){if(i[E]!==void 0)return i[E];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pt;rt&&(pt=t.get("EXT_texture_norm16"),pt||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&pt&&($=pt.R16_EXT),B===i.SHORT&&pt&&($=pt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),x===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&pt&&($=pt.RG16_EXT),B===i.SHORT&&pt&&($=pt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&pt&&($=pt.RGB16_EXT),B===i.SHORT&&pt&&($=pt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){let Q=ct?Hi:qt.getTransfer(tt);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=Q===Kt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&pt&&($=pt.RGBA16_EXT),B===i.SHORT&&pt&&($=pt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function m(E,x){let B;return E?x===null||x===tn||x===si?B=i.DEPTH24_STENCIL8:x===en?B=i.DEPTH32F_STENCIL8:x===Li&&(B=i.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===tn||x===si?B=i.DEPTH_COMPONENT24:x===en?B=i.DEPTH_COMPONENT32F:x===Li&&(B=i.DEPTH_COMPONENT16),B}function M(E,x){return A(E)===!0||E.isFramebufferTexture&&E.minFilter!==Me&&E.minFilter!==De?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function L(E){let x=new WeakRef(E);n.get(E).__ref=x,_.add(x),S.register(E,x,x)}function R(E){let x=n.get(E).__ref;x!==void 0&&(_.delete(x),S.unregister(x))}function D(E){H(E.target)}function U(E){I(E.target)}function H(E){E.removeEventListener("dispose",D),R(E),Y(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&g.delete(E)}function I(E){E.removeEventListener("dispose",U),R(E),st(E)}function V(){for(let E of _){let x=E.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):H(x))}_.clear(),g.clear()}function Y(E){let x=n.get(E);if(x.__webglInit===void 0)return;let B=E.source,rt=f.get(B);if(rt){let tt=rt[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&k(E),Object.keys(rt).length===0&&f.delete(B)}n.remove(E)}function k(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let B=E.source,rt=f.get(B);delete rt[x.__cacheKey],a.memory.textures--}function st(E){let x=n.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=E.depthTexture;if(B&&B.renderTarget===E&&H(B),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let ct=0;ct<x.__webglFramebuffer[tt].length;ct++)i.deleteFramebuffer(x.__webglFramebuffer[tt][ct]);else i.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[tt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let rt=E.textures;for(let tt=0,ct=rt.length;tt<ct;tt++){let pt=n.get(rt[tt]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(rt[tt])}n.remove(E)}let W=0;function et(){W=0}function it(){return W}function bt(E){W=E}function Lt(){let E=W;return E>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,E}function K(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function X(E,x){let B=n.get(E);if(E.isVideoTexture&&me(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let rt=E.image;if(rt===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(B,E,x);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function nt(E,x){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ee(B,E,x);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function lt(E,x){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){ee(B,E,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function J(E,x){let B=n.get(E);if(E.version>0&&B.__version!==E.version){Qt(B,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let Z={[tr]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[er]:i.MIRRORED_REPEAT},Rt={[Me]:i.NEAREST,[ql]:i.NEAREST_MIPMAP_NEAREST,[us]:i.NEAREST_MIPMAP_LINEAR,[De]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},gt={[$l]:i.NEVER,[Mo]:i.ALWAYS,[Kl]:i.LESS,[vo]:i.LEQUAL,[Ql]:i.EQUAL,[yo]:i.GEQUAL,[jl]:i.GREATER,[tc]:i.NOTEQUAL};function Ot(E,x){if(x.type===en&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===De||x.magFilter===Ir||x.magFilter===us||x.magFilter===Tn||x.minFilter===De||x.minFilter===Ir||x.minFilter===us||x.minFilter===Tn)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Z[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Z[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Z[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Rt[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Rt[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,gt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Me||x.minFilter!==us&&x.minFilter!==Tn||x.type===en&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Bt(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",D),L(x));let rt=x.source,tt=f.get(rt);tt===void 0&&(tt={},f.set(rt,tt));let ct=K(x);if(ct!==E.__cacheKey){tt[ct]===void 0&&(tt[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[ct].usedTimes++;let pt=tt[E.__cacheKey];pt!==void 0&&(tt[E.__cacheKey].usedTimes--,pt.usedTimes===0&&k(x)),E.__cacheKey=ct,E.__webglTexture=tt[ct].texture}return B}function Mt(E,x,B){return Math.floor(Math.floor(E/B)/x)}function Jt(E,x,B,rt){let ct=E.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,rt,x.data);else{ct.sort((C,j)=>C.start-j.start);let pt=0;for(let C=1;C<ct.length;C++){let j=ct[pt],q=ct[C],dt=j.start+j.count,ot=Mt(q.start,x.width,4),ht=Mt(j.start,x.width,4);q.start<=dt+1&&ot===ht&&Mt(q.start+q.count-1,x.width,4)===ot?j.count=Math.max(j.count,q.start+q.count-j.start):(++pt,ct[pt]=q)}ct.length=pt+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,j=ct.length;C<j;C++){let q=ct[C],dt=Math.floor(q.start/4),ot=Math.ceil(q.count/4),ht=dt%x.width,wt=Math.floor(dt/x.width),kt=ot,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt),e.texSubImage2D(i.TEXTURE_2D,0,ht,wt,kt,at,B,rt,x.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function ee(E,x,B){let rt=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(rt=i.TEXTURE_3D);let tt=Bt(E,x),ct=x.source;e.bindTexture(rt,E.__webglTexture,i.TEXTURE0+B);let pt=n.get(ct);if(ct.version!==pt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let at=qt.getPrimaries(qt.workingColorSpace),Ct=x.colorSpace===wn?null:qt.getPrimaries(x.colorSpace),zt=x.colorSpace===wn||at===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=y(x.image,!1,s.maxTextureSize);Q=It(x,Q);let ut=r.convert(x.format,x.colorSpace),C=r.convert(x.type),j=T(x.internalFormat,ut,C,x.normalized,x.colorSpace,x.isVideoTexture);Ot(rt,x);let q,dt=x.mipmaps,ot=x.isVideoTexture!==!0,ht=pt.__version===void 0||tt===!0,wt=ct.dataReady,kt=M(x,Q);if(x.isDepthTexture)j=m(x.format===An,x.type),ht&&(ot?e.texStorage2D(i.TEXTURE_2D,1,j,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,ut,C,null));else if(x.isDataTexture)if(dt.length>0){ot&&ht&&e.texStorage2D(i.TEXTURE_2D,kt,j,dt[0].width,dt[0].height);for(let at=0,Ct=dt.length;at<Ct;at++)q=dt[at],ot?wt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,q.width,q.height,ut,C,q.data):e.texImage2D(i.TEXTURE_2D,at,j,q.width,q.height,0,ut,C,q.data);x.generateMipmaps=!1}else ot?(ht&&e.texStorage2D(i.TEXTURE_2D,kt,j,Q.width,Q.height),wt&&Jt(x,Q,ut,C)):e.texImage2D(i.TEXTURE_2D,0,j,Q.width,Q.height,0,ut,C,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ot&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,j,dt[0].width,dt[0].height,Q.depth);for(let at=0,Ct=dt.length;at<Ct;at++)if(q=dt[at],x.format!==sn)if(ut!==null)if(ot){if(wt)if(x.layerUpdates.size>0){let zt=Ro(q.width,q.height,x.format,x.type);for(let xt of x.layerUpdates){let jt=q.data.subarray(xt*zt/q.data.BYTES_PER_ELEMENT,(xt+1)*zt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,xt,q.width,q.height,1,ut,jt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,Q.depth,ut,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,j,q.width,q.height,Q.depth,0,q.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,Q.depth,ut,C,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,j,q.width,q.height,Q.depth,0,ut,C,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ot&&ht&&e.texStorage2D(i.TEXTURE_2D,kt,j,dt[0].width,dt[0].height);for(let at=0,Ct=dt.length;at<Ct;at++)q=dt[at],x.format!==sn?ut!==null?ot?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,q.width,q.height,ut,q.data):e.compressedTexImage2D(i.TEXTURE_2D,at,j,q.width,q.height,0,q.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?wt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,q.width,q.height,ut,C,q.data):e.texImage2D(i.TEXTURE_2D,at,j,q.width,q.height,0,ut,C,q.data)}else if(x.isDataArrayTexture)if(ot){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,j,Q.width,Q.height,Q.depth),wt)if(x.layerUpdates.size>0){let at=Ro(Q.width,Q.height,x.format,x.type);for(let Ct of x.layerUpdates){let zt=Q.data.subarray(Ct*at/Q.data.BYTES_PER_ELEMENT,(Ct+1)*at/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ct,Q.width,Q.height,1,ut,C,zt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,C,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,j,Q.width,Q.height,Q.depth,0,ut,C,Q.data);else if(x.isData3DTexture)ot?(ht&&e.texStorage3D(i.TEXTURE_3D,kt,j,Q.width,Q.height,Q.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,C,Q.data)):e.texImage3D(i.TEXTURE_3D,0,j,Q.width,Q.height,Q.depth,0,ut,C,Q.data);else if(x.isFramebufferTexture){if(ht)if(ot)e.texStorage2D(i.TEXTURE_2D,kt,j,Q.width,Q.height);else{let at=Q.width,Ct=Q.height;for(let zt=0;zt<kt;zt++)e.texImage2D(i.TEXTURE_2D,zt,j,at,Ct,0,ut,C,null),at>>=1,Ct>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),Q.parentNode!==at){at.appendChild(Q),g.add(x),at.onpaint=Ct=>{let zt=Ct.changedElements;for(let xt of g)zt.includes(xt.image)&&(xt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let zt=i.RGBA,xt=i.RGBA,jt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,zt,xt,jt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(dt.length>0){if(ot&&ht){let at=Ut(dt[0]);e.texStorage2D(i.TEXTURE_2D,kt,j,at.width,at.height)}for(let at=0,Ct=dt.length;at<Ct;at++)q=dt[at],ot?wt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,ut,C,q):e.texImage2D(i.TEXTURE_2D,at,j,ut,C,q);x.generateMipmaps=!1}else if(ot){if(ht){let at=Ut(Q);e.texStorage2D(i.TEXTURE_2D,kt,j,at.width,at.height)}wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,C,Q)}else e.texImage2D(i.TEXTURE_2D,0,j,ut,C,Q);A(x)&&x.mipmapsAutoUpdate===!0&&b(rt),pt.__version=ct.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Qt(E,x,B){if(x.image.length!==6)return;let rt=Bt(E,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let ct=n.get(tt);if(tt.version!==ct.__version||rt===!0){e.activeTexture(i.TEXTURE0+B);let pt=qt.getPrimaries(qt.workingColorSpace),$=x.colorSpace===wn?null:qt.getPrimaries(x.colorSpace),Q=x.colorSpace===wn||pt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ut=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,j=[];for(let xt=0;xt<6;xt++)!ut&&!C?j[xt]=y(x.image[xt],!0,s.maxCubemapSize):j[xt]=C?x.image[xt].image:x.image[xt],j[xt]=It(x,j[xt]);let q=j[0],dt=r.convert(x.format,x.colorSpace),ot=r.convert(x.type),ht=T(x.internalFormat,dt,ot,x.normalized,x.colorSpace),wt=x.isVideoTexture!==!0,kt=ct.__version===void 0||rt===!0,at=tt.dataReady,Ct=M(x,q);Ot(i.TEXTURE_CUBE_MAP,x);let zt;if(x.isDepthTexture){if(ht=m(x.format===An,x.type),kt)if(wt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ht,q.width,q.height);else for(let xt=0;xt<6;xt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,q.width,q.height,0,dt,ot,null)}else if(ut){wt&&kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ht,q.width,q.height);for(let xt=0;xt<6;xt++){zt=j[xt].mipmaps;for(let jt=0;jt<zt.length;jt++){let xe=zt[jt];x.format!==sn?dt!==null?wt?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,0,0,xe.width,xe.height,dt,xe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,ht,xe.width,xe.height,0,xe.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,0,0,xe.width,xe.height,dt,ot,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,ht,xe.width,xe.height,0,dt,ot,xe.data)}}}else{if(zt=x.mipmaps,wt&&kt){zt.length>0&&Ct++;let xt=Ut(j[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,ht,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(C){wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,j[xt].width,j[xt].height,dt,ot,j[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,j[xt].width,j[xt].height,0,dt,ot,j[xt].data);for(let jt=0;jt<zt.length;jt++){let Rn=zt[jt].image[xt].image;wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,0,0,Rn.width,Rn.height,dt,ot,Rn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,ht,Rn.width,Rn.height,0,dt,ot,Rn.data)}}else{wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,dt,ot,j[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ht,dt,ot,j[xt]);for(let jt=0;jt<zt.length;jt++){let xe=zt[jt];wt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,0,0,dt,ot,xe.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,ht,dt,ot,xe.image[xt])}}}A(x)&&x.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),ct.__version=tt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function se(E,x,B,rt,tt,ct){let pt=r.convert(B.format,B.colorSpace),$=r.convert(B.type),Q=T(B.internalFormat,pt,$,B.normalized,B.colorSpace),ut=n.get(x),C=n.get(B);if(C.__renderTarget=x,!ut.__hasExternalTextures){let j=Math.max(1,x.width>>ct),q=Math.max(1,x.height>>ct);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ct,Q,j,q,x.depth,0,pt,$,null):e.texImage2D(tt,ct,Q,j,q,0,pt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,tt,C.__webglTexture,0,le(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,tt,C.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function We(E,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let rt=x.depthTexture,tt=rt&&rt.isDepthTexture?rt.type:null,ct=m(x.stencilBuffer,tt),pt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(x),ct,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(x),ct,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ct,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,E)}else{let rt=x.textures;for(let tt=0;tt<rt.length;tt++){let ct=rt[tt],pt=r.convert(ct.format,ct.colorSpace),$=r.convert(ct.type),Q=T(ct.internalFormat,pt,$,ct.normalized,ct.colorSpace);_t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le(x),Q,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,le(x),Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function re(E,x,B){let rt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(x.depthTexture);tt.__renderTarget=x;let ct=rt?x.depthTexture.image[0]:x.depthTexture.image;(!tt.__webglTexture||ct.width!==x.width||ct.height!==x.height)&&(ct.width=x.width,ct.height=x.height,x.depthTexture.needsUpdate=!0),rt?J(x.depthTexture,0):X(x.depthTexture,0);let pt=tt.__webglTexture,$=le(x),Q=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ut=x.depthTexture.format===An?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Sn)_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Q,pt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Q,pt,0);else if(x.depthTexture.format===An)_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Q,pt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Q,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(E){let x=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let rt=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),rt){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,rt.removeEventListener("dispose",tt)};rt.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=rt}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let rt=0;rt<6;rt++)re(x.__webglFramebuffer[rt],E,rt);else E.texture.mipmaps.length>0?re(x.__webglFramebuffer[0],E,0):re(x.__webglFramebuffer,E,0);else if(B){x.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[rt]),x.__webglDepthbuffer[rt]===void 0)x.__webglDepthbuffer[rt]=i.createRenderbuffer(),We(x.__webglDepthbuffer[rt],E,!1);else{let tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ct)}}else if(E.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),We(x.__webglDepthbuffer,E,!1);else{let tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(E,x,B){let rt=n.get(E);x!==void 0&&se(rt.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ne(E)}function Ue(E){let x=E.texture,B=n.get(E),rt=n.get(x);E.addEventListener("dispose",U),L(E);let tt=E.textures,ct=E.isWebGLCubeRenderTarget===!0,pt=tt.length>1;if(pt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=x.version,a.memory.textures++),ct){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[$][Q]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(pt)for(let $=0,Q=tt.length;$<Q;$++){let ut=n.get(tt[$]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&_t(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<tt.length;$++){let Q=tt[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let ut=r.convert(Q.format,Q.colorSpace),C=r.convert(Q.type),j=T(Q.internalFormat,ut,C,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),q=le(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,j,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),We(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)se(B.__webglFramebuffer[$][Q],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else se(B.__webglFramebuffer[$],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);A(x)?b(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let $=0,Q=tt.length;$<Q;$++){let ut=tt[$],C=n.get(ut),j=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(j=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,C.__webglTexture),Ot(j,ut),se(B.__webglFramebuffer,E,ut,i.COLOR_ATTACHMENT0+$,j,0),A(ut)&&b(j)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,rt.__webglTexture),Ot($,x),x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)se(B.__webglFramebuffer[Q],E,x,i.COLOR_ATTACHMENT0,$,Q);else se(B.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,$,0);A(x)?b($):x.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}E.depthBuffer&&ne(E)}function N(E){let x=E.textures;for(let B=0,rt=x.length;B<rt;B++){let tt=x[B];if(A(tt)&&tt.mipmapsAutoUpdate===!0){let ct=w(E),pt=n.get(tt).__webglTexture;e.bindTexture(ct,pt),b(ct),e.unbindTexture()}}}let Xe=[];function oe(E){if(E.samples>0){if(_t(E)===!1){let x=E.textures,B=E.width,rt=E.height,tt=i.COLOR_BUFFER_BIT,ct=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(E),$=x.length>1;if($)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);let C=n.get(x[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,B,rt,0,0,B,rt,tt,i.NEAREST),c===!0&&(Xe.length=0,Xe.push(i.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Xe.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);let C=n.get(x[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function le(E){return Math.min(s.maxSamples,E.samples)}function _t(E){let x=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function me(E){let x=a.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function It(E,x){let B=E.colorSpace,rt=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Vi&&B!==wn&&(qt.getTransfer(B)===Kt?(rt!==sn||tt!==Be)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",B)),x}function Ut(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Lt,this.resetTextureUnits=et,this.getTextureUnits=it,this.setTextureUnits=bt,this.setTexture2D=X,this.setTexture2DArray=nt,this.setTexture3D=lt,this.setTextureCube=J,this.rebindTextures=Ce,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=se,this.useMultisampledRTT=_t,this.dispose=V}function hm(i,t){function e(n,s=wn){let r,a=qt.getTransfer(s);if(n===Be)return i.UNSIGNED_BYTE;if(n===Lr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===po)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uo)return i.BYTE;if(n===fo)return i.SHORT;if(n===Li)return i.UNSIGNED_SHORT;if(n===Pr)return i.INT;if(n===tn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===go)return i.ALPHA;if(n===_o)return i.RGB;if(n===sn)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===An)return i.DEPTH_STENCIL;if(n===xo)return i.RED;if(n===Nr)return i.RED_INTEGER;if(n===Wn)return i.RG;if(n===Ur)return i.RG_INTEGER;if(n===Fr)return i.RGBA_INTEGER;if(n===ds||n===fs||n===ps||n===ms)if(a===Kt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Or||n===Br||n===zr||n===kr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gr||n===Vr||n===Hr||n===Wr||n===Xr||n===gs||n===qr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gr||n===Vr)return a===Kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wr)return r.COMPRESSED_R11_EAC;if(n===Xr)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gs)return r.COMPRESSED_RG11_EAC;if(n===qr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yr||n===Zr||n===Jr||n===$r||n===Kr||n===Qr||n===jr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$r)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jr)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return a===Kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===la||n===ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===oa)return a===Kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ha||n===ua||n===_s||n===da)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ji(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:um,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ho=class extends ln{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,g=null,h=null,f=null,_=null,S=typeof XRWebGLBinding<"u",p=new Vo,d={},y=e.getContextAttributes(),A=null,b=null,w=[],T=[],m=new Ht,M=null,L=null,R=new Le;R.viewport=new ue;let D=new Le;D.viewport=new ue;let U=[R,D],H=new Tr,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let X=w[K];return X===void 0&&(X=new Ei,w[K]=X),X.getTargetRaySpace()},this.getControllerGrip=function(K){let X=w[K];return X===void 0&&(X=new Ei,w[K]=X),X.getGripSpace()},this.getHand=function(K){let X=w[K];return X===void 0&&(X=new Ei,w[K]=X),X.getHandSpace()};function Y(K){let X=T.indexOf(K.inputSource);if(X===-1)return;let nt=w[X];nt!==void 0&&(nt.update(K.inputSource,K.frame,l||a),nt.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",st);for(let K=0;K<w.length;K++){let X=T[K];X!==null&&(T[K]=null,w[K].disconnect(X))}I=null,V=null,p.reset();for(let K in d)delete d[K];if(t.setRenderTarget(A),f=null,h=null,g=null,s=null,b=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(m.width,m.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return g===null&&S&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",k),s.addEventListener("inputsourceschange",st),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(m),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,lt=null,J=null;y.depth&&(J=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=y.stencil?An:Sn,lt=y.stencil?si:tn);let Z={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};g=this.getBinding(),h=g.createProjectionLayer(Z),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),b=new Ve(h.textureWidth,h.textureHeight,{format:sn,type:Be,depthTexture:new En(h.textureWidth,h.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let nt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ve(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Be,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function st(K){for(let X=0;X<K.removed.length;X++){let nt=K.removed[X],lt=T.indexOf(nt);lt>=0&&(T[lt]=null,w[lt].disconnect(nt))}for(let X=0;X<K.added.length;X++){let nt=K.added[X],lt=T.indexOf(nt);if(lt===-1){for(let Z=0;Z<w.length;Z++)if(Z>=T.length){T.push(nt),lt=Z;break}else if(T[Z]===null){T[Z]=nt,lt=Z;break}if(lt===-1)break}let J=w[lt];J&&J.connect(nt)}}function W(K,X){X===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(X.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let X=K.near,nt=K.far;p.texture!==null&&(p.depthNear>0&&(X=p.depthNear),p.depthFar>0&&(nt=p.depthFar)),H.near=D.near=R.near=X,H.far=D.far=R.far=nt,(I!==H.near||V!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,V=H.far),H.layers.mask=K.layers.mask|6,R.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let lt=K.parent,J=H.cameras;W(H,lt);for(let Z=0;Z<J.length;Z++)W(J[Z],lt);H.projectionMatrix.copy(R.projectionMatrix),H.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),et(K,H,lt)};function et(K,X,nt){nt===null?K.matrix.copy(X.matrixWorld):(K.matrix.copy(nt.matrixWorld),K.matrix.invert(),K.matrix.multiply(X.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(X.projectionMatrix),K.projectionMatrixInverse.copy(X.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ir*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(K){return d[K]};let it=null;function bt(K,X){if(u=X.getViewerPose(l||a),_=X,u!==null){let nt=u.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let lt=!1;nt.length!==H.cameras.length&&(H.cameras.length=0,lt=!0);for(let gt=0;gt<nt.length;gt++){let Ot=nt[gt],Bt=null;if(f!==null)Bt=f.getViewport(Ot);else{let Jt=g.getViewSubImage(h,Ot);Bt=Jt.viewport,gt===0&&(t.setRenderTargetTextures(b,Jt.colorTexture,Jt.depthStencilTexture),t.setRenderTarget(b))}let Mt=U[gt];Mt===void 0&&(Mt=new Le,Mt.layers.enable(gt),Mt.viewport=new ue,U[gt]=Mt),Mt.matrix.fromArray(Ot.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Ot.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),gt===0&&(H.matrix.copy(Mt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),lt===!0&&H.cameras.push(Mt)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){g=n.getBinding();let gt=g.getDepthInformation(nt[0]);gt&&gt.isValid&&gt.texture&&p.init(gt,s.renderState)}if(J&&J.includes("camera-access")&&S){t.state.unbindTexture(),g=n.getBinding();for(let gt=0;gt<nt.length;gt++){let Ot=nt[gt].camera;if(Ot){let Bt=d[Ot];Bt||(Bt=new ji,d[Ot]=Bt);let Mt=g.getCameraImage(Ot);Bt.sourceTexture=Mt}}}}for(let nt=0;nt<w.length;nt++){let lt=T[nt],J=w[nt];lt!==null&&J!==void 0&&J.update(lt,X,l||a)}it&&it(K,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),_=null}let Lt=new Lc;Lt.setAnimationLoop(bt),this.setAnimationLoop=function(K){it=K},this.dispose=function(){}}},fm=new ce,Vc=new Nt;Vc.set(-1,0,0,0,1,0,0,0,1);function pm(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,To(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,A,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),g(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),h(p,d),d.isMeshPhysicalMaterial&&f(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),S(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,y,A):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ne&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ne&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let y=t.get(d),A=y.envMap,b=y.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(fm.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Vc),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,y,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=A*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function g(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function f(p,d,y){p.ior.value=d.ior,d.diffuseRoughness>0&&(p.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=d.diffuseRoughnessMap,e(d.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){let y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mm(i,t,e,n){let s={},r={};function a(y,A){let b=A.program;n.uniformBlockBinding(y,b,s[y.id])}function o(y,A){let b=s[y.id];b===void 0&&(_(y),b=c(y),s[y.id]=b,y.addEventListener("dispose",p));let w=A.program;n.updateUBOMapping(y,w);let T=t.render.frame;r[y.id]!==T&&(l(y),r[y.id]=T)}function c(y){let A=i.createBuffer(),b=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,b,w),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(y){let A=s[y.id],b=y.uniforms,w=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,m=b.length;T<m;T++){let M=b[T];if(Array.isArray(M))for(let L=0,R=M.length;L<R;L++)u(M[L],T,L,w);else u(M,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,A,b,w){if(h(y,A,b,w)===!0){let T=y.__offset,m=y.value;if(Array.isArray(m)){let M=0;for(let L=0;L<m.length;L++){let R=m[L],D=S(R,!0);g(R,y.__data,M),M+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else g(m,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function g(y,A,b){typeof y=="number"||typeof y=="boolean"?A[b]=y:y.isMatrix3?(A[b]=y.elements[0],A[b+1]=y.elements[1],A[b+2]=y.elements[2],A[b+3]=0,A[b+4]=y.elements[3],A[b+5]=y.elements[4],A[b+6]=y.elements[5],A[b+7]=0,A[b+8]=y.elements[6],A[b+9]=y.elements[7],A[b+10]=y.elements[8],A[b+11]=0):ArrayBuffer.isView(y)?A.set(y.subarray(0,A.length-b),b):y.toArray(A,b)}function h(y,A,b,w){let T=y.value,m=A+"_"+b;if(Array.isArray(T)){w[m]===void 0&&(w[m]=[]);let M=w[m],L=!1;for(let R=0;R<T.length;R++)f(T[R],M,R)===!0&&(L=!0);return L}return f(T,w,m)}function f(y,A,b){if(A[b]===void 0)return typeof y=="number"||typeof y=="boolean"?A[b]=y:ArrayBuffer.isView(y)?A[b]=y.slice():A[b]=y.clone(),!0;{let w=A[b];if(typeof y=="number"||typeof y=="boolean"){if(w!==y)return A[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(w.equals(y)===!1)return w.copy(y),!0}}return!1}function _(y){let A=y.uniforms,b=0,w=16;for(let m=0,M=A.length;m<M;m++){let L=Array.isArray(A[m])?A[m]:[A[m]];for(let R=0,D=L.length;R<D;R++){let U=L[R],H=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(A[m])||Array.isArray(U.value),V=b;for(let k=0,st=H.length;k<st;k++){let W=H[k],et=S(W,I),it=b%w,bt=it%et.boundary,Lt=it+bt;b+=bt,Lt!==0&&w-Lt<et.storage&&(b+=w-Lt),k===0&&(V=b),b+=et.storage}let Y=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new Y((b-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}let T=b%w;return T>0&&(b+=w-T),y.__size=b,y.__cache={},this}function S(y,A){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=16,b.storage=48):y.isMatrix4?(b.boundary=16,b.storage=64):y.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",y),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(y){let A=y.target;A.removeEventListener("dispose",p),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:d}}var gm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fn=null;function _m(){return fn===null&&(fn=new lr(gm,16,16,Wn,nn),fn.name="DFG_LUT",fn.minFilter=De,fn.magFilter=De,fn.wrapS=an,fn.wrapT=an,fn.generateMipmaps=!1,fn.needsUpdate=!0),fn}var _a=class{constructor(t={}){let{canvas:e=nc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Be}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let S=f,p=new Set([Fr,Ur,Nr]),d=new Set([Be,tn,Li,si,Lr,Dr]),y=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},w=null,T=null,m=[],M=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,U=null,H=null,I=null,V=null;this._outputColorSpace=Pe;let Y=0,k=0,st=null,W=-1,et=null,it=new ue,bt=new ue,Lt=null,K=new Gt(0),X=0,nt=e.width,lt=e.height,J=1,Z=null,Rt=null,gt=new ue(0,0,nt,lt),Ot=new ue(0,0,nt,lt),Bt=!1,Mt=new Bn,Jt=new cr,ee=!1,Qt=!1,se=new ce,We=new F,re=new ue,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function Ue(){return st===null?J:1}let N=n;function Xe(v,P){return e.getContext(v,P)}let oe,le,_t,me,It,Ut,E,x,B,rt,tt,ct,pt,$,Q,ut,C,j,q,dt,ot,ht,wt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ct,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),N===null){let P="webgl2";if(N=Xe(P,v),N===null)throw Xe(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(v){throw e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Dt("WebGLRenderer: "+v.message),v}function kt(){oe=new Rf(N),oe.init(),ot=new hm(N,oe),le=new _f(N,oe,t,ot),_t=new lm(N,oe),le.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),H=N.createFramebuffer(),I=N.createFramebuffer(),V=N.createFramebuffer(),me=new Pf(N),It=new Zp,Ut=new cm(N,oe,_t,It,le,ot,me),E=new wf(R),x=new Lh(N),ht=new mf(N,x),B=new Cf(N,x,me,ht),rt=new Df(N,B,x,ht,me),j=new Lf(N,le,Ut),Q=new xf(It),tt=new Yp(R,E,oe,le,ht,Q),ct=new pm(R,It),pt=new $p,$=new nm(oe),C=new pf(R,E,_t,rt,_,c),ut=new om(R,rt,le),wt=new mm(N,me,le,_t),q=new gf(N,oe,me),dt=new If(N,oe,me),me.programs=tt.programs,R.capabilities=le,R.extensions=oe,R.properties=It,R.renderLists=pt,R.shadowMap=ut,R.state=_t,R.info=me}S!==Be&&(L=new Uf(S,e.width,e.height,o,s,r));let at=new Ho(R,N);this.xr=at,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=oe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=oe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(v){v!==void 0&&(J=v,this.setSize(nt,lt,!1))},this.getSize=function(v){return v.set(nt,lt)},this.setSize=function(v,P,G=!0){if(at.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=v,lt=P,e.width=Math.floor(v*J),e.height=Math.floor(P*J),G===!0&&(e.style.width=v+"px",e.style.height=P+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(nt*J,lt*J).floor()},this.setDrawingBufferSize=function(v,P,G){nt=v,lt=P,J=G,e.width=Math.floor(v*G),e.height=Math.floor(P*G),this.setViewport(0,0,v,P)},this.setEffects=function(v){if(S===Be){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let P=0;P<v.length;P++)if(v[P].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(it)},this.getViewport=function(v){return v.copy(gt)},this.setViewport=function(v,P,G,O){v.isVector4?gt.set(v.x,v.y,v.z,v.w):gt.set(v,P,G,O),_t.viewport(it.copy(gt).multiplyScalar(Ue()).round())},this.getScissor=function(v){return v.copy(Ot)},this.setScissor=function(v,P,G,O){v.isVector4?Ot.set(v.x,v.y,v.z,v.w):Ot.set(v,P,G,O),_t.scissor(bt.copy(Ot).multiplyScalar(Ue()).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(v){_t.setScissorTest(Bt=v)},this.setOpaqueSort=function(v){Z=v},this.setTransparentSort=function(v){Rt=v},this.getClearColor=function(v){return v.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(v=!0,P=!0,G=!0){let O=0;if(v){let z=!1;if(st!==null){let mt=st.texture.format;z=p.has(mt)}if(z){let mt=st.texture.type,St=d.has(mt),ft=C.getClearColor(),yt=C.getClearAlpha(),At=ft.r,Ft=ft.g,Wt=ft.b;St?(y[0]=At,y[1]=Ft,y[2]=Wt,y[3]=yt,N.clearBufferuiv(N.COLOR,0,y)):(A[0]=At,A[1]=Ft,A[2]=Wt,A[3]=yt,N.clearBufferiv(N.COLOR,0,A))}else O|=N.COLOR_BUFFER_BIT}P&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Ct,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),C.dispose(),pt.dispose(),$.dispose(),Ut.dispose(),It.dispose(),E.dispose(),rt.dispose(),B.dispose(),ht.dispose(),wt.dispose(),tt.dispose(),at.dispose(),at.removeEventListener("sessionstart",Xo),at.removeEventListener("sessionend",qo),Xn.stop()};function Ct(v){v.preventDefault(),bo("WebGLRenderer: Context Lost."),D=!0}function zt(){bo("WebGLRenderer: Context Restored."),D=!1;let v=me.autoReset,P=ut.enabled,G=ut.autoUpdate,O=ut.needsUpdate,z=ut.type;kt(),me.autoReset=v,ut.enabled=P,ut.autoUpdate=G,ut.needsUpdate=O,ut.type=z}function xt(v){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function jt(v){let P=v.target;P.removeEventListener("dispose",jt),xe(P)}function xe(v){Rn(v),It.remove(v)}function Rn(v){let P=It.get(v).programs;P!==void 0&&(P.forEach(function(G){tt.releaseProgram(G)}),v.isShaderMaterial&&tt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,G,O,z,mt){P===null&&(P=ne);let St=z.isMesh&&z.matrixWorld.determinantAffine()<0,ft=Xc(v,P,G,O,z);_t.setMaterial(O,St);let yt=G.index,At=1;if(O.wireframe===!0){if(yt=B.getWireframeAttribute(G),yt===void 0)return;At=2}let Ft=G.drawRange,Wt=G.attributes.position,Et=Ft.start*At,Xt=(Ft.start+Ft.count)*At;mt!==null&&(Et=Math.max(Et,mt.start*At),Xt=Math.min(Xt,(mt.start+mt.count)*At)),yt!==null?(Et=Math.max(Et,0),Xt=Math.min(Xt,yt.count)):Wt!=null&&(Et=Math.max(Et,0),Xt=Math.min(Xt,Wt.count));let fe=Xt-Et;if(fe<0||fe===1/0)return;ht.setup(z,O,ft,G,yt);let ie,te=q;if(yt!==null&&(ie=x.get(yt),te=dt,te.setIndex(ie)),z.isMesh)O.wireframe===!0?(_t.setLineWidth(O.wireframeLinewidth*Ue()),te.setMode(N.LINES)):te.setMode(N.TRIANGLES);else if(z.isLine){let be=O.linewidth;be===void 0&&(be=1),_t.setLineWidth(be*Ue()),z.isLineSegments?te.setMode(N.LINES):z.isLineLoop?te.setMode(N.LINE_LOOP):te.setMode(N.LINE_STRIP)}else z.isPoints?te.setMode(N.POINTS):z.isSprite&&te.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))te.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let be=z._multiDrawStarts,Tt=z._multiDrawCounts,Ie=z._multiDrawCount,$t=yt?x.get(yt).bytesPerElement:1,qn=It.get(O).currentProgram.getUniforms();for(let Ee=0;Ee<Ie;Ee++)qn.setValue(N,"_gl_DrawID",Ee),te.render(be[Ee]/$t,Tt[Ee])}else if(z.isInstancedMesh)te.renderInstances(Et,fe,z.count);else if(G.isInstancedBufferGeometry){let be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Tt=Math.min(G.instanceCount,be);te.renderInstances(Et,fe,Tt)}else te.render(Et,fe)};function Wo(v,P,G,O){U!==null&&v.isNodeMaterial&&U.setObject(O,v),ee===!0&&Q.setState(v,G,!1),v.transparent===!0&&v.side===un&&v.forceSinglePass===!1?(v.side=Ne,v.needsUpdate=!0,Ui(v,P,O),v.side=Hn,v.needsUpdate=!0,Ui(v,P,O),v.side=un):Ui(v,P,O)}this.compile=function(v,P,G=null){G===null&&(G=v),U!==null&&U.renderStart(v,P,G),T=$.get(G),T.init(P),M.push(T),G.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),v!==G&&v.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),Qt=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,Qt),ee===!0&&Q.setGlobalState(this.clippingPlanes,P),U!==null&&ut.render(T.state.shadowsArray,G,P);let O=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let mt=z.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){let ft=mt[St];Wo(ft,G,P,z),O.add(ft)}else Wo(mt,G,P,z),O.add(mt)}),T=M.pop(),U!==null&&U.renderEnd(),O},this.compileAsync=function(v,P,G=null){let O=this.compile(v,P,G);return new Promise(z=>{function mt(){if(O.forEach(function(St){let yt=It.get(St).currentProgram;(yt===void 0||yt.isReady())&&O.delete(St)}),O.size===0){z(v);return}setTimeout(mt,10)}oe.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ya=null;function Hc(v){ya&&ya(v)}function Xo(){Xn.stop()}function qo(){Xn.start()}let Xn=new Lc;Xn.setAnimationLoop(Hc),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(v){ya=v,at.setAnimationLoop(v),v===null?Xn.stop():Xn.start()},at.addEventListener("sessionstart",Xo),at.addEventListener("sessionend",qo),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(v,P);let G=at.enabled===!0&&at.isPresenting===!0,O=L!==null&&(st===null||G)&&L.begin(R,st);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(P),P=at.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,P,st),T=$.get(v,M.length),T.init(P),T.state.textureUnits=Ut.getTextureUnits(),M.push(T),se.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Jt.setFromArrayCamera(P):Mt.setFromProjectionMatrix(se,Ye,P.reversedDepth),Qt=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,Qt),w=pt.get(v,m.length),w.init(),m.push(w),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let St=R.xr.getDepthSensingMesh();St!==null&&Ma(St,P,-1/0,R.sortObjects)}Ma(v,P,0,R.sortObjects),w.finish(),U!==null&&U.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(Z,Rt),Ce=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Ce&&C.addToRenderList(w,v),this.info.autoReset===!0&&this.info.reset(),ee===!0&&Q.beginShadows();let z=T.state.shadowsArray;if(ut.render(z,v,P),ee===!0&&Q.endShadows(),(O&&L.hasRenderPass())===!1){let St=w.opaque,ft=w.transmissive;if(T.setupLights(),P.isArrayCamera){let yt=P.cameras;if(ft.length>0)for(let At=0,Ft=yt.length;At<Ft;At++){let Wt=yt[At];Zo(St,ft,v,Wt)}Ce&&C.render(v);for(let At=0,Ft=yt.length;At<Ft;At++){let Wt=yt[At];Yo(w,v,Wt,Wt.viewport)}}else ft.length>0&&Zo(St,ft,v,P),Ce&&C.render(v),Yo(w,v,P)}st!==null&&k===0&&(Ut.updateMultisampleRenderTarget(st),Ut.updateRenderTargetMipmap(st)),O&&L.end(R),v.isScene===!0&&v.onAfterRender(R,v,P),ht.resetDefaultState(),W=-1,et=null,M.pop(),M.length>0?(T=M[M.length-1],Ut.setTextureUnits(T.state.textureUnits),ee===!0&&Q.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,m.pop(),m.length>0?w=m[m.length-1]:w=null,U!==null&&U.renderEnd()};function Ma(v,P,G,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)T.pushLight(v),v.castShadow&&T.pushShadow(v);else if(v.isSprite){let St=P.isArrayCamera?Jt:Mt;if(!v.frustumCulled||v.intersectsFrustum(St)){O&&re.setFromMatrixPosition(v.matrixWorld).applyMatrix4(se);let ft=rt.update(v),yt=v.material;yt.visible&&w.push(v,ft,yt,G,re.z,null,P)}}else if(v.isMesh||v.isLine||v.isPoints){let St=P.isArrayCamera?Jt:Mt;if(!v.frustumCulled||v.intersectsFrustum(St)){let ft=rt.update(v),yt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),re.copy(v.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),re.copy(ft.boundingSphere.center)),re.applyMatrix4(v.matrixWorld).applyMatrix4(se)),Array.isArray(yt)){let At=ft.groups;for(let Ft=0,Wt=At.length;Ft<Wt;Ft++){let Et=At[Ft],Xt=yt[Et.materialIndex];Xt&&Xt.visible&&w.push(v,ft,Xt,G,re.z,Et,P)}}else yt.visible&&w.push(v,ft,yt,G,re.z,null,P)}}}let mt=v.children;for(let St=0,ft=mt.length;St<ft;St++)Ma(mt[St],P,G,O)}function Yo(v,P,G,O){let{opaque:z,transmissive:mt,transparent:St}=v;T.setupLightsView(G),ee===!0&&Q.setGlobalState(R.clippingPlanes,G),O&&_t.viewport(it.copy(O)),z.length>0&&bs(z,P,G),mt.length>0&&bs(mt,P,G),St.length>0&&bs(St,P,G),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Zo(v,P,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[O.id]===void 0){let Et=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[O.id]=new Ve(1,1,{generateMipmaps:!0,type:Et?nn:Be,minFilter:Tn,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let mt=T.state.transmissionRenderTarget[O.id],St=O.viewport||it;mt.setSize(St.z*R.transmissionResolutionScale,St.w*R.transmissionResolutionScale);let ft=R.getRenderTarget(),yt=R.getActiveCubeFace(),At=R.getActiveMipmapLevel();R.setRenderTarget(mt),R.getClearColor(K),X=R.getClearAlpha(),X<1&&R.setClearColor(16777215,.5),R.clear(),Ce&&C.render(G);let Ft=R.toneMapping;R.toneMapping=dn;let Wt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),T.setupLightsView(O),ee===!0&&Q.setGlobalState(R.clippingPlanes,O),bs(v,G,O),Ut.updateMultisampleRenderTarget(mt),Ut.updateRenderTargetMipmap(mt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Xt=0,fe=P.length;Xt<fe;Xt++){let ie=P[Xt],{object:te,geometry:be,material:Tt,group:Ie}=ie;if(Tt.side===un&&te.layers.test(O.layers)){let $t=Tt.side;Tt.side=Ne,Tt.needsUpdate=!0,Jo(te,G,O,be,Tt,Ie),Tt.side=$t,Tt.needsUpdate=!0,Et=!0}}Et===!0&&(Ut.updateMultisampleRenderTarget(mt),Ut.updateRenderTargetMipmap(mt))}R.setRenderTarget(ft,yt,At),R.setClearColor(K,X),Wt!==void 0&&(O.viewport=Wt),R.toneMapping=Ft}function bs(v,P,G){let O=P.isScene===!0?P.overrideMaterial:null;for(let z=0,mt=v.length;z<mt;z++){let St=v[z],{object:ft,geometry:yt,group:At}=St,Ft=St.material;Ft.allowOverride===!0&&O!==null&&(Ft=O),ft.layers.test(G.layers)&&Jo(ft,P,G,yt,Ft,At)}}function Jo(v,P,G,O,z,mt){U!==null&&z.isNodeMaterial&&U.setObject(v,z),v.onBeforeRender(R,P,G,O,z,mt),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(R,P,G,O,v,mt),z.transparent===!0&&z.side===un&&z.forceSinglePass===!1?(z.side=Ne,z.needsUpdate=!0,R.renderBufferDirect(G,P,O,z,v,mt),z.side=Hn,z.needsUpdate=!0,R.renderBufferDirect(G,P,O,z,v,mt),z.side=un):R.renderBufferDirect(G,P,O,z,v,mt),v.onAfterRender(R,P,G,O,z,mt)}function $o(v){let P=0;for(let G of v)G.texture!==null&&P++;return P}function Ui(v,P,G){P.isScene!==!0&&(P=ne);let O=It.get(v),z=T.state.lights,mt=T.state.shadowsArray,St=z.state.version,ft=tt.getParameters(v,z.state,mt,P,G,T.state.lightProbeGridArray),yt=tt.getProgramCacheKey(ft),At=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;let Ft=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=E.get(v.envMap||O.environment,Ft),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,At===void 0&&(v.addEventListener("dispose",jt),At=new Map,O.programs=At,O.programVariants=new Map);let Wt=At.get(yt);if(Wt!==void 0){if(O.currentProgram===Wt&&O.lightsStateVersion===St)return Qo(v,ft),Wt}else ft.uniforms=tt.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,G,ft),v.onBeforeCompile(ft,R),Wt=tt.acquireProgram(ft,yt),At.set(yt,Wt),O.uniforms=ft.uniforms;let Et=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Et.clippingPlanes=Q.uniform),Qo(v,ft),O.needsLights=Yc(v),O.lightsStateVersion=St,O.needsLights&&(Et.ambientLightColor.value=z.state.ambient,Et.lightProbe.value=z.state.probe,Et.sunLights.value=z.state.sun,Et.sunLightShadows.value=z.state.sunShadow,Et.directionalLights.value=z.state.directional,Et.directionalLightShadows.value=z.state.directionalShadow,Et.spotLights.value=z.state.spot,Et.spotLightShadows.value=z.state.spotShadow,Et.rectAreaLights.value=z.state.rectArea,Et.ltc_1.value=z.state.rectAreaLTC1,Et.ltc_2.value=z.state.rectAreaLTC2,Et.pointLights.value=z.state.point,Et.pointLightShadows.value=z.state.pointShadow,Et.hemisphereLights.value=z.state.hemi,Et.sunShadowMatrix.value=z.state.sunShadowMatrix,Et.sunShadowCascade.value=z.state.sunShadowCascade,Et.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Et.spotLightMatrix.value=z.state.spotLightMatrix,Et.spotLightMap.value=z.state.spotLightMap,Et.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=$o(T.state.lightProbeGridArray),O.currentProgram=Wt,O.uniformsList=null,Wt}function Wc(v,P,G,O,z){let mt=It.get(v),St=mt.currentProgram.id+","+O+","+z,ft=mt.programVariants.get(St);return ft===void 0?(ft=Ui(v,P,G),mt.programVariants.set(St,ft)):(mt.currentProgram=ft,mt.uniformsList=null,mt.outputColorSpace=O,mt.toneMapping=z),ft}function Ko(v){if(v.uniformsList===null){let P=v.currentProgram.getUniforms();v.uniformsList=Di.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Qo(v,P){let G=It.get(v);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function Xc(v,P,G,O,z){P.isScene!==!0&&(P=ne),Ut.resetTextureUnits();let mt=P.fog,St=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,ft=st===null?R.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:qt.workingColorSpace,yt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,At=E.get(O.envMap||St,yt),Ft=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Et=!!G.morphAttributes.position,Xt=!!G.morphAttributes.normal,fe=!!G.morphAttributes.color,ie=dn;O.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ie=R.toneMapping);let te=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,be=te!==void 0?te.length:0,Tt=It.get(O),Ie=T.state.lights;if(ee===!0&&(Qt===!0||v!==et)){let de=v===et&&O.id===W;Q.setState(O,v,de)}let $t=!1,qn=!1;O.version===Tt.__version?Tt.needsLights&&Tt.lightsStateVersion!==Ie.state.version||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==At||O.fog===!0&&Tt.fog!==mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Q.numPlanes||Tt.numIntersection!==Q.numIntersection)||Tt.vertexAlphas!==Ft||Tt.vertexTangents!==Wt||Tt.morphTargets!==Et||Tt.morphNormals!==Xt||Tt.morphColors!==fe||Tt.morphTargetsCount!==be||Tt.numLightProbeGrids!==$o(T.state.lightProbeGridArray)?$t=!0:(Tt.outputColorSpace!==ft||Tt.toneMapping!==ie)&&(qn=!0):($t=!0,Tt.__version=O.version);let Ee=Tt.currentProgram;($t===!0||qn===!0)&&(Ee=qn===!0?Wc(O,P,z,ft,ie):Ui(O,P,z),U&&O.isNodeMaterial&&U.onUpdateProgram(O,Ee,Tt));let Es=!1,Cn=!1,Yn=!1,Zt=Ee.getUniforms(),Se=Tt.uniforms;if(_t.useProgram(Ee.program)&&(Es=!0,Cn=!0,Yn=!0),O.id!==W&&(W=O.id,Cn=!0),Es||et!==v){_t.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Zt.setValue(N,"projectionMatrix",v.projectionMatrix),Zt.setValue(N,"viewMatrix",v.matrixWorldInverse);let ve=Zt.map.cameraPosition;ve!==void 0&&ve.setValue(N,We.setFromMatrixPosition(v.matrixWorld)),le.logarithmicDepthBuffer&&Zt.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Zt.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),et!==v&&(et=v,Cn=!0,Yn=!0)}if(Tt.needsLights&&(Ie.state.sunShadowMap.length>0&&Zt.setValue(N,"sunShadowMap",Ie.state.sunShadowMap,Ut),Ie.state.directionalShadowMap.length>0&&Zt.setValue(N,"directionalShadowMap",Ie.state.directionalShadowMap,Ut),Ie.state.spotShadowMap.length>0&&Zt.setValue(N,"spotShadowMap",Ie.state.spotShadowMap,Ut),Ie.state.pointShadowMap.length>0&&Zt.setValue(N,"pointShadowMap",Ie.state.pointShadowMap,Ut)),z.isSkinnedMesh){Zt.setOptional(N,z,"bindMatrix"),Zt.setOptional(N,z,"bindMatrixInverse");let de=z.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),Zt.setValue(N,"boneTexture",de.boneTexture,Ut))}z.isBatchedMesh&&(Zt.setOptional(N,z,"batchingTexture"),Zt.setValue(N,"batchingTexture",z._matricesTexture,Ut),Zt.setOptional(N,z,"batchingIdTexture"),Zt.setValue(N,"batchingIdTexture",z._indirectTexture,Ut),Zt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Zt.setValue(N,"batchingColorTexture",z._colorsTexture,Ut));let Je=G.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&j.update(z,G,Ee),(Cn||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,Zt.setValue(N,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(Se.envMapIntensity.value=P.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=_m()),Cn){if(Zt.setValue(N,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&qc(Se,Yn),mt&&O.fog===!0&&ct.refreshFogUniforms(Se,mt),ct.refreshMaterialUniforms(Se,O,J,lt,T.state.transmissionRenderTarget[v.id]),Tt.needsLights&&Tt.numLightProbeGrids>0){let de=b,ve=0;for(let mn of T.state.lightProbeGridArray)mn.texture!==null&&(de.textures[ve]=mn.texture,de.min[ve]=mn.boundingBox.min,de.max[ve]=mn.boundingBox.max,de.resolution[ve]=mn.resolution,ve++);for(let mn in de)de[mn].length=ve;Se.probesSH.value=de.textures,Se.probesMin.value=de.min,Se.probesMax.value=de.max,Se.probesResolution.value=de.resolution}Di.upload(N,Ko(Tt),Se,Ut)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Di.upload(N,Ko(Tt),Se,Ut),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Zt.setValue(N,"center",z.center),Zt.setValue(N,"modelViewMatrix",z.modelViewMatrix),Zt.setValue(N,"normalMatrix",z.normalMatrix),Zt.setValue(N,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let de=O.uniformsGroups;for(let ve=0,mn=de.length;ve<mn;ve++){let tl=de[ve];wt.update(tl,Ee),wt.bind(tl,Ee)}}return Ee}function qc(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.sunLights.needsUpdate=P,v.sunLightShadows.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Yc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(v,P,G){let O=It.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),It.get(v.texture).__webglTexture=P,It.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,P){let G=It.get(v);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,G=0){st=v,Y=P,k=G;let O=null,z=!1,mt=!1;if(v){let ft=It.get(v);if(ft.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(N.FRAMEBUFFER,ft.__webglFramebuffer),it.copy(v.viewport),bt.copy(v.scissor),Lt=v.scissorTest,_t.viewport(it),_t.scissor(bt),_t.setScissorTest(Lt),W=-1;return}else if(ft.__webglFramebuffer===void 0)Ut.setupRenderTarget(v);else if(ft.__hasExternalTextures)Ut.rebindTextures(v,It.get(v.texture).__webglTexture,It.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ft=v.depthTexture;if(ft.__boundDepthTexture!==Ft){if(Ft!==null&&It.has(Ft)&&(v.width!==Ft.image.width||v.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ut.setupDepthRenderbuffer(v)}}let yt=v.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(mt=!0);let At=It.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(At[P])?O=At[P][G]:O=At[P],z=!0):v.samples>0&&Ut.useMultisampledRTT(v)===!1?O=It.get(v).__webglMultisampledFramebuffer:Array.isArray(At)?O=At[G]:O=At,it.copy(v.viewport),bt.copy(v.scissor),Lt=v.scissorTest}else it.copy(gt).multiplyScalar(J).floor(),bt.copy(Ot).multiplyScalar(J).floor(),Lt=Bt;if(G!==0&&(O=H),_t.bindFramebuffer(N.FRAMEBUFFER,O)&&_t.drawBuffers(v,O),_t.viewport(it),_t.scissor(bt),_t.setScissorTest(Lt),z){let ft=It.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,ft.__webglTexture,G)}else if(mt){let ft=P;for(let yt=0;yt<v.textures.length;yt++){let At=It.get(v.textures[yt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+yt,At.__webglTexture,G,ft)}}else if(v!==null&&G!==0){let ft=It.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,G)}W=-1};function jo(v){let P=It.get(v);return(P.__readFormat!==v.format||P.__readType!==v.type)&&(P.__readFormat=v.format,P.__readType=v.type,P.__formatReadable=le.textureFormatReadable(v.format),P.__typeReadable=le.textureTypeReadable(v.type)),P}this.readRenderTargetPixels=function(v,P,G,O,z,mt,St,ft=0){if(!(v&&v.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=It.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt){_t.bindFramebuffer(N.FRAMEBUFFER,yt);try{let At=v.textures[ft],Ft=At.format,Wt=At.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ft);let Et=jo(At);if(Et.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&G>=0&&G<=v.height-z&&N.readPixels(P,G,O,z,ot.convert(Ft),ot.convert(Wt),mt)}finally{let At=st!==null?It.get(st).__webglFramebuffer:null;_t.bindFramebuffer(N.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(v,P,G,O,z,mt,St,ft=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=It.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(yt=yt[St],Array.isArray(yt)&&(yt=yt[0])),yt)if(P>=0&&P<=v.width-O&&G>=0&&G<=v.height-z){_t.bindFramebuffer(N.FRAMEBUFFER,yt);let At=v.textures[ft],Ft=At.format,Wt=At.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ft);let Et=jo(At);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xt),N.bufferData(N.PIXEL_PACK_BUFFER,mt.byteLength,N.STREAM_READ),N.readPixels(P,G,O,z,ot.convert(Ft),ot.convert(Wt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let fe=st!==null?It.get(st).__webglFramebuffer:null;_t.bindFramebuffer(N.FRAMEBUFFER,fe);let ie=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await sc(N,ie,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,mt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Xt),N.deleteSync(ie),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,P=null,G=0){let O=Math.pow(2,-G),z=Math.floor(v.image.width*O),mt=Math.floor(v.image.height*O),St=P!==null?P.x:0,ft=P!==null?P.y:0;Ut.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,St,ft,z,mt),_t.unbindTexture()},this.copyTextureToTexture=function(v,P,G=null,O=null,z=0,mt=0){let St,ft,yt,At,Ft,Wt,Et,Xt,fe,ie=v.isCompressedTexture?v.mipmaps[mt]:v.image;if(G!==null)St=G.max.x-G.min.x,ft=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,At=G.min.x,Ft=G.min.y,Wt=G.isBox3?G.min.z:0;else{let Zt=Math.pow(2,-z);St=Math.floor(ie.width*Zt),ft=Math.floor(ie.height*Zt),v.isDataArrayTexture?yt=ie.depth:v.isData3DTexture?yt=Math.floor(ie.depth*Zt):yt=1,At=0,Ft=0,Wt=0}O!==null?(Et=O.x,Xt=O.y,fe=O.z):(Et=0,Xt=0,fe=0);let te=ot.convert(P.format),be=ot.convert(P.type),Tt;P.isData3DTexture?(Ut.setTexture3D(P,0),Tt=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Ut.setTexture2DArray(P,0),Tt=N.TEXTURE_2D_ARRAY):(Ut.setTexture2D(P,0),Tt=N.TEXTURE_2D),_t.activeTexture(N.TEXTURE0),_t.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),_t.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),_t.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let Ie=_t.getParameter(N.UNPACK_ROW_LENGTH),$t=_t.getParameter(N.UNPACK_IMAGE_HEIGHT),qn=_t.getParameter(N.UNPACK_SKIP_PIXELS),Ee=_t.getParameter(N.UNPACK_SKIP_ROWS),Es=_t.getParameter(N.UNPACK_SKIP_IMAGES);_t.pixelStorei(N.UNPACK_ROW_LENGTH,ie.width),_t.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ie.height),_t.pixelStorei(N.UNPACK_SKIP_PIXELS,At),_t.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),_t.pixelStorei(N.UNPACK_SKIP_IMAGES,Wt);let Cn=v.isDataArrayTexture||v.isData3DTexture,Yn=P.isDataArrayTexture||P.isData3DTexture;if(v.isDepthTexture){let Zt=It.get(v),Se=It.get(P),Je=It.get(Zt.__renderTarget),de=It.get(Se.__renderTarget);_t.bindFramebuffer(N.READ_FRAMEBUFFER,Je.__webglFramebuffer),_t.bindFramebuffer(N.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ve=0;ve<yt;ve++)Cn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(v).__webglTexture,z,Wt+ve),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.get(P).__webglTexture,mt,fe+ve)),N.blitFramebuffer(At,Ft,At+St,Ft+ft,Et,Xt,Et+St,Xt+ft,N.DEPTH_BUFFER_BIT,N.NEAREST);_t.bindFramebuffer(N.READ_FRAMEBUFFER,null),_t.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||It.has(v)){let Zt=It.get(v),Se=It.get(P);_t.bindFramebuffer(N.READ_FRAMEBUFFER,I),_t.bindFramebuffer(N.DRAW_FRAMEBUFFER,V);for(let Je=0;Je<yt;Je++)Cn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Zt.__webglTexture,z,Wt+Je):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Zt.__webglTexture,z),Yn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.__webglTexture,mt,fe+Je):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Se.__webglTexture,mt),z!==0?N.blitFramebuffer(At,Ft,At+St,Ft+ft,Et,Xt,Et+St,Xt+ft,N.COLOR_BUFFER_BIT,N.NEAREST):Yn?N.copyTexSubImage3D(Tt,mt,Et,Xt,fe+Je,At,Ft,St,ft):N.copyTexSubImage2D(Tt,mt,Et,Xt,At,Ft,St,ft);_t.bindFramebuffer(N.READ_FRAMEBUFFER,null),_t.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Yn?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Tt,mt,Et,Xt,fe,St,ft,yt,te,be,ie.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,mt,Et,Xt,fe,St,ft,yt,te,ie.data):N.texSubImage3D(Tt,mt,Et,Xt,fe,St,ft,yt,te,be,ie):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,mt,Et,Xt,St,ft,te,be,ie.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,mt,Et,Xt,ie.width,ie.height,te,ie.data):N.texSubImage2D(N.TEXTURE_2D,mt,Et,Xt,St,ft,te,be,ie);_t.pixelStorei(N.UNPACK_ROW_LENGTH,Ie),_t.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$t),_t.pixelStorei(N.UNPACK_SKIP_PIXELS,qn),_t.pixelStorei(N.UNPACK_SKIP_ROWS,Ee),_t.pixelStorei(N.UNPACK_SKIP_IMAGES,Es),mt===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&N.generateMipmap(Tt),_t.unbindTexture()},this.initRenderTarget=function(v){It.get(v).__webglFramebuffer===void 0&&Ut.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ut.setTextureCube(v,0):v.isData3DTexture?Ut.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ut.setTexture2DArray(v,0):Ut.setTexture2D(v,0),_t.unbindTexture()},this.resetState=function(){Y=0,k=0,st=null,_t.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};function vm(i,t={}){let e=t.theme==="afterglow",n=window.matchMedia("(prefers-reduced-motion: reduce)"),s;try{s=new _a({antialias:!0,alpha:!1})}catch{return i.innerHTML='<div style="height:100%;display:grid;place-items:center;text-align:center;padding:24px"><div><strong>Battle arena</strong><p>3D is unavailable on this device.<br>The battle controls and HP still work.</p></div></div>',i.dataset.renderer="fallback",{play:()=>Promise.resolve(),dispose(){}}}i.dataset.renderer="webgl",i.replaceChildren(s.domElement),s.domElement.style.cssText="width:100%;height:100%;display:block;touch-action:pan-y",s.domElement.setAttribute("role","img"),s.domElement.setAttribute("aria-label","Animated 3D pet battle arena with two original companions"),s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.shadowMap.enabled=!0,s.shadowMap.type=wr,s.outputColorSpace=Pe,s.toneMapping=hs,s.toneMappingExposure=e?1.45:1.2;let r=new Zi;r.background=new Gt(e?"#172237":"#dce9d0"),r.fog=new Yi(r.background,13,31);let a=new Le(37,1,.1,60),o=new F(7,5.6,10);a.position.copy(o);let c=new F(0,.65,0);a.lookAt(c),r.add(new as(e?"#c2cbff":"#fff9dc",e?"#344957":"#789263",2.6));let l=new wi(e?"#cfcaff":"#fff3cc",3.1);l.position.set(-3,8,5),l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.camera.left=l.shadow.camera.bottom=-9,l.shadow.camera.right=l.shadow.camera.top=9,l.shadow.normalBias=.035,r.add(l);let u=new wi(e?"#a6ffce":"#e7ffd6",1.9);u.position.set(4,4,-6),r.add(u);let g=new ns(1,24,16),h=new Set([g]),f=(X,nt={})=>{let lt=new is({color:X,roughness:.76,...nt});return h.add(lt),lt};function _(X,nt,lt,J,Z=[1,1,1]){h.add(nt);let Rt=new Oe(nt,lt);return Rt.position.set(...J),Rt.scale.set(...Z),Rt.castShadow=!0,Rt.receiveShadow=!0,X.add(Rt),Rt}let S=(X,nt,lt,J)=>_(X,g,nt,lt,J),p=_(r,new zn(15,15,.3,64),f(e?"#243f42":"#a7c18a"),[0,-.3,0]);p.castShadow=!1;let d=f(e?"#4d6961":"#c4d7a5"),y=f(e?"#a6e3c5":"#e9ecc5",{emissive:e?"#3e765e":"#000000",emissiveIntensity:.3}),A={player:new F(-2.3,0,1.3),opponent:new F(2.3,0,-1.3)};for(let X of Object.values(A)){_(r,new zn(1.7,1.82,.15,64),d,[X.x,-.065,X.z]);let nt=_(r,new ti(1.65,.035,8,80),y,[X.x,.025,X.z]);nt.rotation.x=Math.PI/2}let b=f(e?"#4d566d":"#bdc5a8"),w=["#698e62","#8fa66b","#658575"].map(X=>f(e?"#3b6060":X)),T=f(e?"#57556a":"#8c7959");for(let X=0;X<15;X++){let nt=X*.39+.2,lt=Math.cos(nt)*9,J=Math.sin(nt)*7-3;if(J>2)continue;let Z=1.8+X%3*.5;_(r,new zn(.12,.2,Z,8),T,[lt,Z/2,J]),S(r,w[X%3],[lt,Z+.5,J],[.9,1.4,.9]),S(r,b,[lt+1.3,.15,J+1],[.6,.32,.45])}let m=f(e?"#d5f7a6":"#fff0ae",{emissive:e?"#99d45a":"#000000",emissiveIntensity:.5});for(let X=0;X<26;X++){let nt=Math.sin(X*2.4)*7,lt=Math.cos(X*1.7)*5;Math.abs(nt)<4&&Math.abs(lt)<2.5||S(r,m,[nt,.12,lt],[.09,.1,.09])}function M(X,nt,lt){let J=new Ge,Z=new Ge;J.add(Z);let Rt=f(nt),gt=f(X==="cat"?"#dfd7ff":"#fff2d6"),Ot=f("#e6a3ab"),Bt=f("#26303e",{roughness:.3}),Mt=f("#ffffff",{roughness:.25}),Jt=f(lt);S(Z,Rt,[0,.77,-.15],[.62,.7,.75]),S(Z,gt,[0,.73,.47],[.43,.5,.17]);let ee=[];for(let ne of[-.4,.4])ee.push(S(Z,Rt,[ne,.24,-.44],[.23,.28,.3])),ee.push(S(Z,gt,[ne,.19,.4],[.24,.23,.3]));let Qt=new Ge;Qt.position.set(0,1.52,.23),Z.add(Qt),S(Qt,Rt,[0,0,0],[.78,.67,.63]);for(let ne of[-1,1]){let Ce=_(Qt,new jn(.32,.76,4),Rt,[ne*.52,.58,-.01],[1,1,.65]);Ce.rotation.z=-ne*.2,Ce.rotation.y=Math.PI/4;let Ue=_(Qt,new jn(.19,.48,3),Ot,[ne*.53,.64,.17],[1,1,.3]);Ue.rotation.z=-ne*.2,S(Qt,Bt,[ne*.3,.06,.555],[.105,.15,.065]),S(Qt,Mt,[ne*.3-.025,.11,.607],[.03,.042,.02]),S(Qt,gt,[ne*.16,-.2,.54],[.25,.2,.18]),S(Qt,Ot,[ne*.48,-.16,.5],[.12,.05,.027])}X==="corgi"&&S(Qt,gt,[0,.24,.54],[.16,.4,.07]),S(Qt,Bt,[0,-.13,.733],[.12,.078,.065]),S(Qt,Bt,[0,-.32,.62],[.12,.085,.035]),S(Qt,Ot,[0,-.35,.652],[.073,.055,.018]);let se=_(Z,new ti(.44,.12,8,32),Jt,[0,1.12,.16]);se.rotation.x=Math.PI/2;let We=_(Z,new jn(.24,.43,3),Jt,[.12,.89,.65],[1,1,.25]);We.rotation.z=Math.PI;let re=new Ge;if(re.position.set(0,.77,-.7),Z.add(re),X==="cat"){let ne=_(re,new ti(.38,.14,10,28,Math.PI*1.6),Rt,[.26,.25,-.15]);ne.rotation.y=.6}else S(re,Rt,[0,.15,-.18],[.28,.3,.48]),S(re,gt,[0,.29,-.45],[.21,.23,.23]);return r.add(J),{root:J,body:Z,head:Qt,tail:re,legs:ee,fur:Rt,action:null,fainted:!1,won:!1}}let L={player:M(t.playerKind||"corgi",e?"#b8a2ee":"#dfa65e",e?"#d7ff78":"#6d9859"),opponent:M(t.opponentKind||"cat",e?"#e3a268":"#aaa5d1",e?"#8bcddc":"#9bbcca")};for(let[X,nt]of Object.entries(L)){nt.root.position.copy(A[X]);let lt=A[X==="player"?"opponent":"player"];nt.facing=Math.atan2(lt.x-A[X].x,lt.z-A[X].z),nt.root.rotation.y=nt.facing}let R=new Ge;r.add(R);let D=new ts(.12);h.add(D);let U=[];function H(){for(let X of U)R.remove(X),X.material.dispose();U=[]}function I(X,nt,lt){H();let J=X==="heal"?"#9dffbc":X==="guard"?"#a2daff":e?"#d9a6ff":"#e9ee73";for(let Z=0;Z<18;Z++){let Rt=new Qn({color:J,transparent:!0,opacity:.9}),gt=new Oe(D,Rt);gt.userData={i:Z,origin:nt.clone(),destination:lt.clone(),move:X},R.add(gt),U.push(gt)}if(X==="guard"){let Z=new Oe(g,new Qn({color:J,transparent:!0,opacity:.18,wireframe:!0}));Z.position.copy(nt).add(new F(0,1.1,0)),Z.scale.set(1.05,1.4,1.05),Z.userData.shield=!0,R.add(Z),U.push(Z)}}let V=!1,Y=0,k=null,st=performance.now();function W(X){if(V)return Promise.resolve();let nt=X.actor==="opponent"?"opponent":"player",lt=L[nt];lt.action&&lt.action.resolve();let J=["attack","special","guard","heal","faint","victory"].includes(X.move)?X.move:"attack",Z=n.matches?80:J==="attack"?1350:J==="special"?1400:J==="faint"?900:1e3,Rt=A[nt==="player"?"opponent":"player"];return k={move:J,start:performance.now(),duration:Z,actor:nt},!n.matches&&!["faint","victory"].includes(J)&&I(J,A[nt],Rt),new Promise(gt=>{lt.action={move:J,start:performance.now(),duration:Z,resolve:gt}})}function et(){if(V)return;let X=Math.max(1,i.clientWidth),nt=Math.max(1,i.clientHeight);s.setSize(X,nt,!1),a.aspect=X/nt,a.fov=X<500?48:37,a.updateProjectionMatrix()}let it=new ResizeObserver(et);it.observe(i),et();function bt(X){X.preventDefault(),K(),i.dataset.renderer="fallback",i.innerHTML='<p style="padding:30px;text-align:center">3D paused. Battle controls remain available.</p>'}s.domElement.addEventListener("webglcontextlost",bt);function Lt(X){if(V)return;let nt=(X-st)/1e3,lt=!n.matches&&!document.hidden;a.position.copy(o),lt&&(a.position.x+=Math.sin(nt*.25)*.14,a.position.y+=Math.sin(nt*.4)*.06);for(let[J,Z]of Object.entries(L)){Z.root.position.copy(A[J]),Z.root.rotation.set(0,Z.facing,0),Z.body.rotation.x=0,Z.head.rotation.x=0,Z.legs.forEach((Bt,Mt)=>{Bt.rotation.x=0,Bt.position.z=Mt%2?.4:-.44}),Z.body.scale.setScalar(Z.fainted?.6:1),Z.body.position.y=lt&&!Z.fainted?Math.sin(nt*2.8+(J==="opponent"?1:0))*.045:0,Z.head.rotation.z=lt?Math.sin(nt*1.8)*.035:0,Z.tail.rotation.y=lt?Math.sin(nt*6)*.3:0,Z.fur.emissive.setHex(0),Z.fainted&&(Z.root.rotation.z=J==="player"?-.8:.8),Z.won&&lt&&(Z.root.position.y=Math.abs(Math.sin(nt*3))*.25);let Rt=Z.action;if(!Rt)continue;let gt=Math.min(1,(X-Rt.start)/Rt.duration),Ot=Math.sin(gt*Math.PI);if(lt)if(Rt.move==="attack"){let Bt=A[J==="player"?"opponent":"player"].clone().sub(A[J]);if(gt<.18){let Mt=Math.sin(gt/.18*Math.PI/2);Z.body.scale.set(1+Mt*.12,1-Mt*.25,1+Mt*.12),Z.head.rotation.x=Mt*.16,Z.root.position.addScaledVector(Bt,-Mt*.035)}else if(gt<.58){let Mt=(gt-.18)/.4;Z.root.position.addScaledVector(Bt,Mt*.7),Z.root.position.y=Math.sin(Mt*Math.PI)*1.25,Z.body.rotation.x=-.25+Mt*.55,Z.legs.forEach((Jt,ee)=>{Jt.rotation.x=ee%2?-.9:.65,Jt.position.z+=ee%2?.25:-.2})}else if(gt<.9){let Mt=(gt-.58)/.32;Z.root.position.addScaledVector(Bt,(1-Mt)*.7),Z.root.position.y=Math.sin(Mt*Math.PI)*.55,Z.body.rotation.x=-.18*Math.sin(Mt*Math.PI)}else{let Mt=Math.sin((gt-.9)/.1*Math.PI);Z.body.scale.set(1+Mt*.1,1-Mt*.2,1+Mt*.1)}}else Rt.move==="special"?(Z.root.position.y=Ot*.55,Z.root.rotation.y+=Math.sin(gt*Math.PI*2)*.4,Z.fur.emissive.set(e?"#433061":"#4a5120").multiplyScalar(Ot)):Rt.move==="guard"?Z.body.scale.set(1+Ot*.1,1-Ot*.16,1+Ot*.1):Rt.move==="heal"?Z.root.position.y=Ot*.3:Rt.move==="faint"?(Z.root.rotation.z=gt*(J==="player"?-.8:.8),Z.body.scale.setScalar(1-gt*.4)):Rt.move==="victory"&&(Z.root.position.y=Math.abs(Math.sin(gt*Math.PI*3))*.6,Z.root.rotation.y+=gt*Math.PI*2);gt===1&&(Rt.move==="faint"&&(Z.fainted=!0),Rt.move==="victory"&&(Z.won=!0),Z.body.rotation.x=0,Z.action=null,Rt.resolve())}if(k){let J=Math.min(1,(X-k.start)/k.duration);if(lt&&["attack","special"].includes(k.move)&&J>.5&&J<.86){let Z=L[k.actor==="player"?"opponent":"player"];Z.root.position.x+=Math.sin(J*70)*.1,Z.fur.emissive.set("#ffb8a8").multiplyScalar(Math.max(0,Math.sin(J*50))*.45),a.position.x+=Math.sin(J*70)*.035}for(let Z of U){if(Z.userData.shield){Z.material.opacity=Math.sin(J*Math.PI)*.25;continue}let{i:Rt,origin:gt,destination:Ot,move:Bt}=Z.userData,Mt=Rt*2.4;if(Bt==="guard"||Bt==="heal")Z.position.copy(gt).add(new F(Math.cos(Mt+J*4)*.8,.4+J*2+Rt%3*.15,Math.sin(Mt+J*4)*.8));else if(Bt==="attack"){let Jt=Math.max(0,(J-.54)/.46);Z.position.copy(Jt?Ot:gt).add(new F(Math.cos(Mt)*Jt*2,Jt?.8+Math.sin(Mt)*Jt:.1,Math.sin(Mt)*Jt*2)),Z.visible=J>.54}else{let Jt=Math.max(0,Math.min(1,(J-.25)/.35));Z.position.lerpVectors(gt,Ot,Jt).add(new F(Math.cos(Mt+J*5)*.22,1.2+Math.sin(Jt*Math.PI)*.4,Math.sin(Mt+J*5)*.22)),J>.6&&Z.position.add(new F(Math.cos(Mt)*(J-.6)*4,Math.sin(Mt)*(J-.6)*3,Math.sin(Mt*2)*(J-.6)*4))}Z.rotation.set(J*8+Rt,J*4,0),Z.material.opacity=Math.sin(J*Math.PI),Z.scale.setScalar(k.move==="special"?1.2:.7)}J===1&&(H(),k=null)}a.lookAt(c),s.render(r,a),Y=requestAnimationFrame(Lt)}Y=requestAnimationFrame(Lt);function K(){if(!V){V=!0,cancelAnimationFrame(Y),it.disconnect();for(let X of Object.values(L))X.action?.resolve(),X.action=null;H(),h.forEach(X=>X.dispose()),s.domElement.removeEventListener("webglcontextlost",bt),s.dispose(),s.forceContextLoss()}}return{play:W,dispose:K}}window.PokepetArena={mount:vm};})();
