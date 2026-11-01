(()=>{/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var dc=0,Do=1,fc=2;var Ls=1,na=2,Fi=3,Xn=0,ze=1,fn=2,ii=0,Oi=1,No=2,Uo=3,Fo=4,pc=5;var si=100,mc=101,gc=102,_c=103,xc=104,vc=200,yc=201,Mc=202,Sc=203,Oo=204,Bo=205,bc=206,Ec=207,Tc=208,Ac=209,wc=210,Rc=211,Cc=212,Ic=213,Pc=214,_r=0,xr=1,vr=2,Si=3,yr=4,Mr=5,Sr=6,br=7,zo=0,Lc=1,Dc=2,pn=0,ko=1,Go=2,Vo=3,Ds=4,Ho=5,Wo=6,Xo=7;var qo=300,ri=301,Bi=302,ia=303,sa=304,Er=1e3,ln=1001,Tr=1002,we=1003,Nc=1004;var Ns=1005;var Be=1006,ra=1007;var wn=1008;var He=1009,Yo=1010,Zo=1011,zi=1012,aa=1013,nn=1014,sn=1015,rn=1016,oa=1017,la=1018,ai=1020,Jo=35902,$o=35899,Ko=1021,Qo=1022,an=1023,En=1026,Rn=1027,jo=1028,ca=1029,qn=1030,ha=1031;var ua=1033,Us=33776,Fs=33777,Os=33778,Bs=33779,da=35840,fa=35841,pa=35842,ma=35843,ga=36196,_a=37492,xa=37496,va=37488,ya=37489,zs=37490,Ma=37491,Sa=37808,ba=37809,Ea=37810,Ta=37811,Aa=37812,wa=37813,Ra=37814,Ca=37815,Ia=37816,Pa=37817,La=37818,Da=37819,Na=37820,Ua=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,ka=36284,ks=36285,Ga=36286;var Qi=2300,Ar=2301,mr=2302,bo=2303,Eo=2400,To=2401,Ao=2402;var Uc=3200;var Va=0,Fc=1,Cn="",Fe="srgb",ji="srgb-linear",ts="linear",le="srgb";var gr=7680;var Oc=519,Bc=512,zc=513,kc=514,tl=515,Gc=516,Vc=517,el=518,nl=519,Hc=35044;var il="300 es",$e=2e3,bi=2001;function kh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wc(){let i=es("canvas");return i.style.display="block",i}var Ol={},Ei=null;function sl(...i){let t="THREE."+i.shift();Ei?Ei("log",t,...i):console.log(t,...i)}function Xc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Xc(i);let t="THREE."+i.shift();if(Ei)Ei("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=Xc(i);let t="THREE."+i.shift();if(Ei)Ei("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ji(...i){let t=i.join(" ");t in Ol||(Ol[t]=!0,Xt(...i))}function qc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yc={[_r]:_r,[vr]:Sr,[yr]:yr,[Si]:Mr,[xr]:xr,[Sr]:vr,[br]:br,[Mr]:Si},hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ka=Math.PI/180,wr=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function Vh(i,t){return(i%t+t)%t}function Qa(i,t,e){return(1-e)*i+e*t}function Zc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hh(i,t){if(t.constructor===Float32Array)return i;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Wh(i,t){if(t.constructor===Float32Array)return i;let e=rl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ul=class ul{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;var _t=ul,un=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],p=n[s+3],u=r[a+0],d=r[a+1],_=r[a+2],b=r[a+3];if(p!==b||l!==u||c!==d||h!==_){let f=l*u+c*d+h*_+p*b;f<0&&(u=-u,d=-d,_=-_,b=-b,f=-f);let m=1-o;if(f<.9995){let M=Math.acos(f),E=Math.sin(M);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E,l=l*m+u*o,c=c*m+d*o,h=h*m+_*o,p=p*m+b*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+_*o,p=p*m+b*o;let M=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=M,c*=M,h*=M,p*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],p=r[a],u=r[a+1],d=r[a+2],_=r[a+3];return t[e]=o*_+h*p+l*d-c*u,t[e+1]=l*_+h*u+c*p-o*d,t[e+2]=c*_+h*d+o*u-l*p,t[e+3]=h*_-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),p=o(r/2),u=l(n/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*d*_,this._y=c*d*p-u*h*_,this._z=c*h*_+u*d*p,this._w=c*h*p-u*d*_;break;case"YXZ":this._x=u*h*p+c*d*_,this._y=c*d*p-u*h*_,this._z=c*h*_-u*d*p,this._w=c*h*p+u*d*_;break;case"ZXY":this._x=u*h*p-c*d*_,this._y=c*d*p+u*h*_,this._z=c*h*_+u*d*p,this._w=c*h*p-u*d*_;break;case"ZYX":this._x=u*h*p-c*d*_,this._y=c*d*p+u*h*_,this._z=c*h*_-u*d*p,this._w=c*h*p+u*d*_;break;case"YZX":this._x=u*h*p+c*d*_,this._y=c*d*p+u*h*_,this._z=c*h*_-u*d*p,this._w=c*h*p-u*d*_;break;case"XZY":this._x=u*h*p-c*d*_,this._y=c*d*p-u*h*_,this._z=c*h*_+u*d*p,this._w=c*h*p+u*d*_;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=n+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>p){let d=2*Math.sqrt(1+n-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-n-p);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dl=class dl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*h,this.y=n+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dl.prototype.isVector3=!0;var D=dl,ja=new D,Bl=new un,fl=class fl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],p=n[7],u=n[2],d=n[5],_=n[8],b=s[0],f=s[3],m=s[6],M=s[1],E=s[4],v=s[7],w=s[2],A=s[5],g=s[8];return r[0]=a*b+o*M+l*w,r[3]=a*f+o*E+l*A,r[6]=a*m+o*v+l*g,r[1]=c*b+h*M+p*w,r[4]=c*f+h*E+p*A,r[7]=c*m+h*v+p*g,r[2]=u*b+d*M+_*w,r[5]=u*f+d*E+_*A,r[8]=u*m+d*v+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,u=o*l-h*r,d=c*r-a*l,_=e*p+n*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return t[0]=p*b,t[1]=(s*c-h*n)*b,t[2]=(o*n-s*a)*b,t[3]=u*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-o*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(to.makeScale(t,e)),this}rotate(t){return Ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(to.makeRotation(-t)),this}translate(t,e){return Ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fl.prototype.isMatrix3=!0;var Zt=fl,to=new Zt,zl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xh(){let i={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?ts:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ji]:{primaries:t,whitePoint:n,transfer:ts,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:le,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var re=Xh();function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var li,Rr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{li===void 0&&(li=es("canvas")),li.width=t.width,li.height=t.height;let s=li.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=li}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=es("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},qh=0,Ti=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(eo(s[a].image)):r.push(eo(s[a]))}else r=eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var Yh=0,no=new D,ke=class i extends hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ln,s=ln,r=Be,a=wn,o=an,l=He,c=i.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=ki(),this.name="",this.source=new Ti(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Er:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Er:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=qo;ke.DEFAULT_ANISOTROPY=1;var pl=class pl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],_=l[9],b=l[2],f=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-b)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+b)<.1&&Math.abs(_+f)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(d+1)/2,w=(m+1)/2,A=(h+u)/4,g=(p+b)/4,S=(_+f)/4;return E>v&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=g/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=S/r),this.set(n,s,r,e),this}let M=Math.sqrt((f-_)*(f-_)+(p-b)*(p-b)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(p-b)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pl.prototype.isVector4=!0;var ge=pl,Cr=class extends hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ke({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ti(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends Cr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ns=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ir=class extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ea=class ea{constructor(t,e,n,s,r,a,o,l,c,h,p,u,d,_,b,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,p,u,d,_,b,f)}set(t,e,n,s,r,a,o,l,c,h,p,u,d,_,b,f){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=p,m[14]=u,m[3]=d,m[7]=_,m[11]=b,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ea().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),a=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*p,_=o*h,b=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=d+_*c,e[5]=u-b*c,e[9]=-o*l,e[2]=b-u*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*p,_=c*h,b=c*p;e[0]=u+b*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=b+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*p,_=c*h,b=c*p;e[0]=u-b*o,e[4]=-a*p,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=b-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*p,_=o*h,b=o*p;e[0]=l*h,e[4]=_*c-d,e[8]=u*c+b,e[1]=l*p,e[5]=b*c+u,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,_=o*l,b=o*c;e[0]=l*h,e[4]=b-u*p,e[8]=_*p+d,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*p+_,e[10]=u-b*p}else if(t.order==="XZY"){let u=a*l,d=a*c,_=o*l,b=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+b,e[5]=a*h,e[9]=d*p-_,e[2]=_*p-d,e[6]=o*h,e[10]=b*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zh,t,Jh)}lookAt(t,e,n){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Ln.crossVectors(n,We),Ln.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Ln.crossVectors(n,We)),Ln.normalize(),Ys.crossVectors(We,Ln),s[0]=Ln.x,s[4]=Ys.x,s[8]=We.x,s[1]=Ln.y,s[5]=Ys.y,s[9]=We.y,s[2]=Ln.z,s[6]=Ys.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],p=n[5],u=n[9],d=n[13],_=n[2],b=n[6],f=n[10],m=n[14],M=n[3],E=n[7],v=n[11],w=n[15],A=s[0],g=s[4],S=s[8],U=s[12],R=s[1],N=s[5],O=s[9],W=s[13],I=s[2],H=s[6],Z=s[10],V=s[14],lt=s[3],Y=s[7],st=s[11],rt=s[15];return r[0]=a*A+o*R+l*I+c*lt,r[4]=a*g+o*N+l*H+c*Y,r[8]=a*S+o*O+l*Z+c*st,r[12]=a*U+o*W+l*V+c*rt,r[1]=h*A+p*R+u*I+d*lt,r[5]=h*g+p*N+u*H+d*Y,r[9]=h*S+p*O+u*Z+d*st,r[13]=h*U+p*W+u*V+d*rt,r[2]=_*A+b*R+f*I+m*lt,r[6]=_*g+b*N+f*H+m*Y,r[10]=_*S+b*O+f*Z+m*st,r[14]=_*U+b*W+f*V+m*rt,r[3]=M*A+E*R+v*I+w*lt,r[7]=M*g+E*N+v*H+w*Y,r[11]=M*S+E*O+v*Z+w*st,r[15]=M*U+E*W+v*V+w*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],_=t[3],b=t[7],f=t[11],m=t[15],M=l*d-c*u,E=o*d-c*p,v=o*u-l*p,w=a*d-c*h,A=a*u-l*h,g=a*p-o*h;return e*(b*M-f*E+m*v)-n*(_*M-f*w+m*A)+s*(_*E-b*w+m*g)-r*(_*v-b*A+f*g)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],_=t[12],b=t[13],f=t[14],m=t[15],M=e*o-n*a,E=e*l-s*a,v=e*c-r*a,w=n*l-s*o,A=n*c-r*o,g=s*c-r*l,S=h*b-p*_,U=h*f-u*_,R=h*m-d*_,N=p*f-u*b,O=p*m-d*b,W=u*m-d*f,I=M*W-E*O+v*N+w*R-A*U+g*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return t[0]=(o*W-l*O+c*N)*H,t[1]=(s*O-n*W-r*N)*H,t[2]=(b*g-f*A+m*w)*H,t[3]=(u*A-p*g-d*w)*H,t[4]=(l*R-a*W-c*U)*H,t[5]=(e*W-s*R+r*U)*H,t[6]=(f*v-_*g-m*E)*H,t[7]=(h*g-u*v+d*E)*H,t[8]=(a*O-o*R+c*S)*H,t[9]=(n*R-e*O-r*S)*H,t[10]=(_*A-b*v+m*M)*H,t[11]=(p*v-h*A-d*M)*H,t[12]=(o*U-a*N-l*S)*H,t[13]=(e*N-n*U+s*S)*H,t[14]=(b*E-_*w-f*M)*H,t[15]=(h*w-p*E+u*M)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,u=r*c,d=r*h,_=r*p,b=a*h,f=a*p,m=o*p,M=l*c,E=l*h,v=l*p,w=n.x,A=n.y,g=n.z;return s[0]=(1-(b+m))*w,s[1]=(d+v)*w,s[2]=(_-E)*w,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(u+m))*A,s[6]=(f+M)*A,s[7]=0,s[8]=(_+E)*g,s[9]=(f-M)*g,s[10]=(1-(u+b))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ci.set(s[0],s[1],s[2]).length(),o=ci.set(s[4],s[5],s[6]).length(),l=ci.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qe.copy(this);let c=1/a,h=1/o,p=1/l;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=p,Qe.elements[9]*=p,Qe.elements[10]*=p,e.setFromRotationMatrix(Qe),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=$e,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),_,b;if(l)_=r/(a-r),b=a*r/(a-r);else if(o===$e)_=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===bi)_=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=$e,l=!1){let c=this.elements,h=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),_,b;if(l)_=1/(a-r),b=a/(a-r);else if(o===$e)_=-2/(a-r),b=-(a+r)/(a-r);else if(o===bi)_=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ea.prototype.isMatrix4=!0;var me=ea,ci=new D,Qe=new me,Zh=new D(0,0,0),Jh=new D(1,1,1),Ln=new D,Ys=new D,We=new D,Gl=new me,Vl=new un,Tn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$h=0,Hl=new D,hi=new un,xn=new me,Zs=new D,Wi=new D,Kh=new D,Qh=new un,Wl=new D(1,0,0),Xl=new D(0,1,0),ql=new D(0,0,1),Yl={type:"added"},jh={type:"removed"},ui={type:"childadded",child:null},io={type:"childremoved",child:null},De=class i extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new Tn,n=new un,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Zt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Wi,Zs,this.up):xn.lookAt(Zs,Wi,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(xn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),ui.child=t,this.dispatchEvent(ui),ui.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jh),io.child=t,this.dispatchEvent(io),io.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,Kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Qh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};De.DEFAULT_UP=new D(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ae=class extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}},tu={type:"move"},Ai=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ae,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ae,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ae,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let b of t.hand.values()){let f=e.getJointPose(b,n),m=this._getHandJoint(c,b);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ae;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Vh(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=so(a,r,t+1/3),this.g=so(a,r,t),this.b=so(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return re.workingToColorSpace(Le.copy(this),t),Math.round(ne(Le.r*255,0,255))*65536+Math.round(ne(Le.g*255,0,255))*256+Math.round(ne(Le.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Le.copy(this),e);let n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Fe){re.workingToColorSpace(Le.copy(this),t);let e=Le.r,n=Le.g,s=Le.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Js);let n=Qa(Dn.h,Js.h,e),s=Qa(Dn.s,Js.s,e),r=Qa(Dn.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Le=new te;te.NAMES=Jc;var ss=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rs=class extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},je=new D,vn=new D,ro=new D,yn=new D,di=new D,fi=new D,Zl=new D,ao=new D,oo=new D,lo=new D,co=new ge,ho=new ge,uo=new ge,On=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){je.subVectors(s,e),vn.subVectors(n,e),ro.subVectors(t,e);let a=je.dot(je),o=je.dot(vn),l=je.dot(ro),c=vn.dot(vn),h=vn.dot(ro),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-d-_,_,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return co.setScalar(0),ho.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(co,r.x),a.addScaledVector(ho,r.y),a.addScaledVector(uo,r.z),a}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),vn.subVectors(t,e),je.cross(vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),je.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;di.subVectors(s,n),fi.subVectors(r,n),ao.subVectors(t,n);let l=di.dot(ao),c=fi.dot(ao);if(l<=0&&c<=0)return e.copy(n);oo.subVectors(t,s);let h=di.dot(oo),p=fi.dot(oo);if(h>=0&&p<=h)return e.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(di,a);lo.subVectors(t,r);let d=di.dot(lo),_=fi.dot(lo);if(_>=0&&d<=_)return e.copy(r);let b=d*c-l*_;if(b<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(fi,o);let f=h*_-d*p;if(f<=0&&p-h>=0&&d-_>=0)return Zl.subVectors(r,s),o=(p-h)/(p-h+(d-_)),e.copy(s).addScaledVector(Zl,o);let m=1/(f+b+u);return a=b*m,o=u*m,e.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,tn):tn.fromBufferAttribute(r,a),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$s.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(t.matrixWorld),this.union($s)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),Ks.subVectors(this.max,Xi),pi.subVectors(t.a,Xi),mi.subVectors(t.b,Xi),gi.subVectors(t.c,Xi),Nn.subVectors(mi,pi),Un.subVectors(gi,mi),$n.subVectors(pi,gi);let e=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-$n.z,$n.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,$n.z,0,-$n.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-$n.y,$n.x,0];return!fo(e,pi,mi,gi,Ks)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,pi,mi,gi,Ks))?!1:(Qs.crossVectors(Nn,Un),e=[Qs.x,Qs.y,Qs.z],fo(e,pi,mi,gi,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mn=[new D,new D,new D,new D,new D,new D,new D,new D],tn=new D,$s=new Bn,pi=new D,mi=new D,gi=new D,Nn=new D,Un=new D,$n=new D,Xi=new D,Ks=new D,Qs=new D,Kn=new D;function fo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);let o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ye=new D,js=new _t,eu=0,cn=class extends hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=sn,this.version=0,this._normalizationScale=t!==void 0?rl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Hh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Wh(t,this.array)}};var as=class extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var os=class extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}},nu=new Bn,qi=new D,po=new D,wi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):nu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);let e=qi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(po)),this.expandByPoint(qi.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},iu=0,Je=new me,mo=new De,_i=new D,Xe=new Bn,Yi=new Bn,Te=new D,Ge=class i extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kh(t)?os:as)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(Xe.min,Yi.min),Xe.expandByPoint(Te),Te.addVectors(Xe.max,Yi.max),Xe.expandByPoint(Te)):(Xe.expandByPoint(Yi.min),Xe.expandByPoint(Yi.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Te.fromBufferAttribute(o,c),l&&(_i.fromBufferAttribute(t,c),Te.add(_i)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new D,l[U]=new D;let h=new D,p=new D,u=new D,d=new _t,_=new _t,b=new _t,f=new D,m=new D;function M(U,R,N){c[U]=c[R]=c[N]=1,h.fromBufferAttribute(n,U),p.fromBufferAttribute(n,R),u.fromBufferAttribute(n,N),d.fromBufferAttribute(r,U),_.fromBufferAttribute(r,R),b.fromBufferAttribute(r,N),p.sub(h),u.sub(h),_.sub(d),b.sub(d);let O=1/(_.x*b.y-b.x*_.y);isFinite(O)&&(f.copy(p).multiplyScalar(b.y).addScaledVector(u,-_.y).multiplyScalar(O),m.copy(u).multiplyScalar(_.x).addScaledVector(p,-b.x).multiplyScalar(O),o[U].add(f),o[R].add(f),o[N].add(f),l[U].add(m),l[R].add(m),l[N].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,R=E.length;U<R;++U){let N=E[U],O=N.start,W=N.count;for(let I=O,H=O+W;I<H;I+=3)M(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new D,w=new D,A=new D,g=new D;function S(U){A.fromBufferAttribute(s,U),g.copy(A);let R=o[U];v.copy(R),v.sub(A.multiplyScalar(A.dot(R))).normalize(),w.crossVectors(g,R);let O=w.dot(l[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,O)}for(let U=0,R=n.count;U<R;++U)c[U]&&S(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,p=new D;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),b=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,f),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,f),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,_=0;for(let b=0,f=l.length;b<f;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*h;for(let m=0;m<h;m++)u[_++]=c[d++]}return new cn(u,h,p)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var go=new D,su=new D,ru=new Zt,en=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=go.subVectors(n,e).cross(su.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(go),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ru.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},au=0,zn=class extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Oi,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new en().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _t().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Sn=new D,_o=new D,tr=new D,er=new D,Pr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_o.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),er.copy(this.origin).sub(_o);let r=t.distanceTo(e)*.5,a=-this.direction.dot(tr),o=er.dot(this.direction),l=-er.dot(tr),c=er.lengthSq(),h=Math.abs(1-a*a),p,u,d,_;if(h>0)if(p=a*l-o,u=a*o-l,_=r*h,p>=0)if(u>=-_)if(u<=_){let b=1/h;p*=b,u*=b,d=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),d=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),d=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(_o).addScaledVector(tr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Sn.subVectors(t.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,d=t.z-a.z,_=e.x-a.x,b=e.y-a.y,f=e.z-a.z,m=n.x-a.x,M=n.y-a.y,E=n.z-a.z,v=Math.abs(l),w=Math.abs(c),A=Math.abs(h),g,S,U,R,N,O,W,I,H,Z,V,lt;if(v>=w&&v>=A?(U=l,O=p,H=_,lt=m,l>=0?(g=c,S=h,R=u,N=d,W=b,I=f,Z=M,V=E):(g=h,S=c,R=d,N=u,W=f,I=b,Z=E,V=M)):w>=A?(U=c,O=u,H=b,lt=M,c>=0?(g=h,S=l,R=d,N=p,W=f,I=_,Z=E,V=m):(g=l,S=h,R=p,N=d,W=_,I=f,Z=m,V=E)):(U=h,O=d,H=f,lt=E,h>=0?(g=l,S=c,R=p,N=u,W=_,I=b,Z=m,V=M):(g=c,S=l,R=u,N=p,W=b,I=_,Z=M,V=m)),U===0)return null;let Y=g/U,st=S/U,rt=1/U,At=R-Y*O,Vt=N-st*O,K=W-Y*H,Mt=I-st*H,Rt=Z-Y*lt,zt=V-st*lt,St=Rt*Mt-zt*K,kt=At*zt-Vt*Rt,ue=K*Vt-Mt*At;if(s){if(St<0||kt<0||ue<0)return null}else if((St<0||kt<0||ue<0)&&(St>0||kt>0||ue>0))return null;let Wt=St+kt+ue;if(Wt===0)return null;let Kt=rt*(St*O+kt*H+ue*lt);return(Wt>0?Kt<0:Kt>0)?null:this.at(Kt/Wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ei=class extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Jl=new me,Qn=new Pr,nr=new wi,$l=new D,ir=new D,sr=new D,rr=new D,xo=new D,ar=new D,Kl=new D,or=new D,Ve=class extends De{constructor(t=new Ge,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(xo.fromBufferAttribute(p,t),a?ar.addScaledVector(xo,h):ar.addScaledVector(xo.sub(e),h))}e.add(ar)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(nr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(nr,$l)===null||Qn.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(Jl.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=u.length;_<b;_++){let f=u[_],m=a[f.materialIndex],M=Math.max(f.start,d.start),E=Math.min(o.count,Math.min(f.start+f.count,d.start+d.count));for(let v=M,w=E;v<w;v+=3){let A=o.getX(v),g=o.getX(v+1),S=o.getX(v+2);s=lr(this,m,t,n,c,h,p,A,g,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let f=_,m=b;f<m;f+=3){let M=o.getX(f),E=o.getX(f+1),v=o.getX(f+2);s=lr(this,a,t,n,c,h,p,M,E,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,b=u.length;_<b;_++){let f=u[_],m=a[f.materialIndex],M=Math.max(f.start,d.start),E=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let v=M,w=E;v<w;v+=3){let A=v,g=v+1,S=v+2;s=lr(this,m,t,n,c,h,p,A,g,S),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let _=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let f=_,m=b;f<m;f+=3){let M=f,E=f+1,v=f+2;s=lr(this,a,t,n,c,h,p,M,E,v),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function ou(i,t,e,n,s,r,a,o){let l;if(t.side===ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Xn,o),l===null)return null;or.copy(o),or.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(or);return c<e.near||c>e.far?null:{distance:c,point:or.clone(),object:i}}function lr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ir),i.getVertexPosition(l,sr),i.getVertexPosition(c,rr);let h=ou(i,t,e,n,ir,sr,rr,Kl);if(h){let p=new D;On.getBarycoord(Kl,ir,sr,rr,p),s&&(h.uv=On.getInterpolatedAttribute(s,o,l,c,p,new _t)),r&&(h.uv1=On.getInterpolatedAttribute(r,o,l,c,p,new _t)),a&&(h.normal=On.getInterpolatedAttribute(a,o,l,c,p,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};On.getNormal(ir,sr,rr,u.normal),h.face=u,h.barycoord=p}return h}var Lr=class extends ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=we,h=we,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jn=new wi,lu=new _t(.5,.5),cr=new D,kn=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,a=new en){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$e,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],d=r[7],_=r[8],b=r[9],f=r[10],m=r[11],M=r[12],E=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,m-_,w-M).normalize(),s[1].setComponents(c+a,d+h,m+_,w+M).normalize(),s[2].setComponents(c+o,d+p,m+b,w+E).normalize(),s[3].setComponents(c-o,d-p,m-b,w-E).normalize(),n)s[4].setComponents(l,u,f,v).normalize(),s[5].setComponents(c-l,d-u,m-f,w-v).normalize();else if(s[4].setComponents(c-l,d-u,m-f,w-v).normalize(),e===$e)s[5].setComponents(c+l,d+u,m+f,w+v).normalize();else if(e===bi)s[5].setComponents(l,u,f,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){jn.center.set(0,0,0);let e=lu.distanceTo(t.center);return jn.radius=.7071067811865476+e,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ql=new me,Dr=class i{constructor(){this.coordinateSystem=$e,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Ql.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new kn),n[s].setFromProjectionMatrix(Ql,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new kn),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ls=class extends ke{constructor(t=[],e=ri,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var An=class extends ke{constructor(t,e,n=nn,s,r,a,o=we,l=we,c,h=En,p=1){if(h!==En&&h!==Rn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ti(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},cs=class extends An{constructor(t,e=nn,n=ri,s,r,a=we,o=we,l,c=En){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hs=class extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ri=class i extends Ge{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,d=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(p,2));function _(b,f,m,M,E,v,w,A,g,S,U){let R=v/g,N=w/S,O=v/2,W=w/2,I=A/2,H=g+1,Z=S+1,V=0,lt=0,Y=new D;for(let st=0;st<Z;st++){let rt=st*N-W;for(let At=0;At<H;At++){let Vt=At*R-O;Y[b]=Vt*M,Y[f]=rt*E,Y[m]=I,c.push(Y.x,Y.y,Y.z),Y[b]=0,Y[f]=0,Y[m]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),p.push(At/g),p.push(1-st/S),V+=1}}for(let st=0;st<S;st++)for(let rt=0;rt<g;rt++){let At=u+rt+H*st,Vt=u+rt+H*(st+1),K=u+(rt+1)+H*(st+1),Mt=u+(rt+1)+H*st;l.push(At,Vt,Mt),l.push(Vt,K,Mt),lt+=6}o.addGroup(d,lt,U),d+=lt,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Gn=class i extends Ge{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],d=[],_=0,b=[],f=n/2,m=0;M(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(d,2));function M(){let v=new D,w=new D,A=0,g=(e-t)/n;for(let S=0;S<=r;S++){let U=[],R=S/r,N=R*(e-t)+t;for(let O=0;O<=s;O++){let W=O/s,I=W*l+o,H=Math.sin(I),Z=Math.cos(I);w.x=N*H,w.y=-R*n+f,w.z=N*Z,p.push(w.x,w.y,w.z),v.set(H,g,Z).normalize(),u.push(v.x,v.y,v.z),d.push(W,1-R),U.push(_++)}b.push(U)}for(let S=0;S<s;S++)for(let U=0;U<r;U++){let R=b[U][S],N=b[U+1][S],O=b[U+1][S+1],W=b[U][S+1];(t>0||U!==0)&&(h.push(R,N,W),A+=3),(e>0||U!==r-1)&&(h.push(N,O,W),A+=3)}c.addGroup(m,A,0),m+=A}function E(v){let w=_,A=new _t,g=new D,S=0,U=v===!0?t:e,R=v===!0?1:-1;for(let O=1;O<=s;O++)p.push(0,f*R,0),u.push(0,R,0),d.push(.5,.5),_++;let N=_;for(let O=0;O<=s;O++){let I=O/s*l+o,H=Math.cos(I),Z=Math.sin(I);g.x=U*Z,g.y=f*R,g.z=U*H,p.push(g.x,g.y,g.z),u.push(0,R,0),A.x=H*.5+.5,A.y=Z*.5*R+.5,d.push(A.x,A.y),_++}for(let O=0;O<s;O++){let W=w+O,I=N+O;v===!0?h.push(I,I+1,W):h.push(I+1,I,W),S+=3}c.addGroup(m,S,v===!0?1:2),m+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},us=class i extends Gn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Nr=class i extends Ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let E=new D,v=new D,w=new D;for(let A=0;A<e.length;A+=3)d(e[A+0],E),d(e[A+1],v),d(e[A+2],w),l(E,v,w,M)}function l(M,E,v,w){let A=w+1,g=[];for(let S=0;S<=A;S++){g[S]=[];let U=M.clone().lerp(v,S/A),R=E.clone().lerp(v,S/A),N=A-S;for(let O=0;O<=N;O++)O===0&&S===A?g[S][O]=U:g[S][O]=U.clone().lerp(R,O/N)}for(let S=0;S<A;S++)for(let U=0;U<2*(A-S)-1;U++){let R=Math.floor(U/2);U%2===0?(u(g[S][R+1]),u(g[S+1][R]),u(g[S][R])):(u(g[S][R+1]),u(g[S+1][R+1]),u(g[S+1][R]))}}function c(M){let E=new D;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(M),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let M=new D;for(let E=0;E<r.length;E+=3){M.x=r[E+0],M.y=r[E+1],M.z=r[E+2];let v=f(M)/2/Math.PI+.5,w=m(M)/Math.PI+.5;a.push(v,1-w)}_(),p()}function p(){for(let M=0;M<a.length;M+=6){let E=a[M+0],v=a[M+2],w=a[M+4],A=Math.max(E,v,w),g=Math.min(E,v,w);A>.9&&g<.1&&(E<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,E){let v=M*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function _(){let M=new D,E=new D,v=new D,w=new D,A=new _t,g=new _t,S=new _t;for(let U=0,R=0;U<r.length;U+=9,R+=6){M.set(r[U+0],r[U+1],r[U+2]),E.set(r[U+3],r[U+4],r[U+5]),v.set(r[U+6],r[U+7],r[U+8]),A.set(a[R+0],a[R+1]),g.set(a[R+2],a[R+3]),S.set(a[R+4],a[R+5]),w.copy(M).add(E).add(v).divideScalar(3);let N=f(w);b(A,R+0,M,N),b(g,R+2,E,N),b(S,R+4,v,N)}}function b(M,E,v,w){w<0&&M.x===1&&(a[E]=M.x-1),v.x===0&&v.z===0&&(a[E]=w/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Ye=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new _t:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new me;for(let d=0;d<=t;d++){let _=d/t;s[d]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),p<=c&&(c=p,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ne(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ne(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ci=class extends Ye{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new _t){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*p+this.aX,c=u*p+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ur=class extends Ci{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function al(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var jl=new D,tc=new D,vo=new al,yo=new al,Mo=new al,Ii=class extends Ye{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(tc.subVectors(s[0],s[1]).add(s[0]),c=tc);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(jl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(p),d),b=Math.pow(p.distanceToSquared(u),d),f=Math.pow(u.distanceToSquared(h),d);b<1e-4&&(b=1),_<1e-4&&(_=b),f<1e-4&&(f=b),vo.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,_,b,f),yo.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,_,b,f),Mo.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,_,b,f)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),yo.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),Mo.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return n.set(vo.calc(l),yo.calc(l),Mo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ec(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function cu(i,t){let e=1-i;return e*e*t}function hu(i,t){return 2*(1-i)*i*t}function uu(i,t){return i*i*t}function $i(i,t,e,n){return cu(i,t)+hu(i,e)+uu(i,n)}function du(i,t){let e=1-i;return e*e*e*t}function fu(i,t){let e=1-i;return 3*e*e*i*t}function pu(i,t){return 3*(1-i)*i*i*t}function mu(i,t){return i*i*i*t}function Ki(i,t,e,n,s){return du(i,t)+fu(i,e)+pu(i,n)+mu(i,s)}var ds=class extends Ye{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ki(t,s.x,r.x,a.x,o.x),Ki(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends Ye{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ki(t,s.x,r.x,a.x,o.x),Ki(t,s.y,r.y,a.y,o.y),Ki(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fs=class extends Ye{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Ye{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ps=class extends Ye{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($i(t,s.x,r.x,a.x),$i(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ms=class extends Ye{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($i(t,s.x,r.x,a.x),$i(t,s.y,r.y,a.y),$i(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gs=class extends Ye{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return n.set(ec(o,l.x,c.x,h.x,p.x),ec(o,l.y,c.y,h.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},Br=Object.freeze({__proto__:null,ArcCurve:Ur,CatmullRomCurve3:Ii,CubicBezierCurve:ds,CubicBezierCurve3:Fr,EllipseCurve:Ci,LineCurve:fs,LineCurve3:Or,QuadraticBezierCurve:ps,QuadraticBezierCurve3:ms,SplineCurve:gs}),zr=class extends Ye{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Br[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Br[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},_s=class extends zr{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fs(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ps(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ds(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new gs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ci(t,e,n,s,r,a,o,l);if(this.curves.length>0){let p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Pi=class extends _s{constructor(t){super(t),this.uuid=ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new _s().fromJSON(s))}return this}};function gu(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=$c(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Mu(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,p=l;for(let u=e;u<s;u+=e){let d=i[u],_=i[u+1];d<o&&(o=d),_<l&&(l=_),d>h&&(h=d),_>p&&(p=_)}c=Math.max(h-o,p-l),c=c!==0?32767/c:0}return xs(r,a,e,o,l,c,0),a}function $c(i,t,e,n,s){let r;if(s===Lu(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=nc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=nc(a/n|0,i[a],i[a+1],r);return r&&Li(r,r.next)&&(ys(r),r=r.next),r}function ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Li(e,e.next)||xe(e.prev,e,e.next)===0)){if(ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Au(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?xu(i,n,s,r):_u(i)){t.push(l.i,i.i,c.i),ys(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=vu(ni(i),t),xs(i,t,e,n,s,r,2)):a===2&&yu(i,t,e,n,s,r):xs(ni(i),t,e,n,s,r,1);break}}}function _u(i){let t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),p=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),_=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=p&&_.y<=d&&Zi(s,o,r,l,a,c,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function xu(i,t,e,n){let s=i.prev,r=i,a=i.next;if(xe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,p=r.y,u=a.y,d=Math.min(o,l,c),_=Math.min(h,p,u),b=Math.max(o,l,c),f=Math.max(h,p,u),m=wo(d,_,t,e,n),M=wo(b,f,t,e,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=m&&v&&v.z<=M;){if(E.x>=d&&E.x<=b&&E.y>=_&&E.y<=f&&E!==s&&E!==a&&Zi(o,h,l,p,c,u,E.x,E.y)&&xe(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=b&&v.y>=_&&v.y<=f&&v!==s&&v!==a&&Zi(o,h,l,p,c,u,v.x,v.y)&&xe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=b&&E.y>=_&&E.y<=f&&E!==s&&E!==a&&Zi(o,h,l,p,c,u,E.x,E.y)&&xe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=b&&v.y>=_&&v.y<=f&&v!==s&&v!==a&&Zi(o,h,l,p,c,u,v.x,v.y)&&xe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vu(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Li(n,s)&&Qc(n,e,e.next,s)&&vs(n,s)&&vs(s,n)&&(t.push(n.i,e.i,s.i),ys(e),ys(e.next),e=i=s),e=e.next}while(e!==i);return ni(e)}function yu(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Cu(a,o)){let l=jc(a,o);a=ni(a,a.next),l=ni(l,l.next),xs(a,t,e,n,s,r,0),xs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Mu(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=$c(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ru(c))}s.sort(Su);for(let r=0;r<s.length;r++)e=bu(s[r],e);return e}function Su(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function bu(i,t){let e=Eu(i,t);if(!e)return t;let n=jc(e,i);return ni(n,n.next),ni(e,e.next)}function Eu(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Li(i,e))return e;do{if(Li(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Kc(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);vs(e,i)&&(p<h||p===h&&(e.x>a.x||e.x===a.x&&Tu(a,e)))&&(a=e,h=p)}e=e.next}while(e!==o);return a}function Tu(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function Au(i,t,e,n){let s=i;do s.z===0&&(s.z=wo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wu(s)}function wu(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function wo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ru(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Kc(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Zi(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Kc(i,t,e,n,s,r,a,o)}function Cu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Iu(i,t)&&(vs(i,t)&&vs(t,i)&&Pu(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||Li(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Li(i,t){return i.x===t.x&&i.y===t.y}function Qc(i,t,e,n){let s=ur(xe(i,t,e)),r=ur(xe(i,t,n)),a=ur(xe(e,n,i)),o=ur(xe(e,n,t));return!!(s!==r&&a!==o||s===0&&hr(i,e,t)||r===0&&hr(i,n,t)||a===0&&hr(e,i,n)||o===0&&hr(e,t,n))}function hr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ur(i){return i>0?1:i<0?-1:0}function Iu(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vs(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function Pu(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function jc(i,t){let e=Ro(i.i,i.x,i.y),n=Ro(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nc(i,t,e,n){let s=Ro(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ro(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lu(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Co=class{static triangulate(t,e,n=2){return gu(t,e,n)}},ti=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ic(t),sc(n,t);let a=t.length;e.forEach(ic);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,sc(n,e[l]);let o=Co.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ic(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ms=class i extends Ge{constructor(t=new Pi([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new he(s,3)),this.setAttribute("uv",new he(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:d-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Du,E,v=!1,w,A,g,S;if(m){E=m.getSpacedPoints(h),v=!0,u=!1;let z=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,z),A=new D,g=new D,S=new D}u||(f=0,d=0,_=0,b=0);let U=o.extractPoints(c),R=U.shape,N=U.holes;if(!ti.isClockWise(R)){R=R.reverse();for(let z=0,tt=N.length;z<tt;z++){let X=N[z];ti.isClockWise(X)&&(N[z]=X.reverse())}}function W(z){let X=10000000000000001e-36,F=z[0];for(let j=1;j<=z.length;j++){let bt=j%z.length,dt=z[bt],Ut=dt.x-F.x,It=dt.y-F.y,Ot=Ut*Ut+It*It,P=Math.max(Math.abs(dt.x),Math.abs(dt.y),Math.abs(F.x),Math.abs(F.y)),Yt=X*P*P;if(Ot<=Yt){z.splice(bt,1),j--;continue}F=dt}}W(R),N.forEach(W);let I=N.length,H=R;for(let z=0;z<I;z++){let tt=N[z];R=R.concat(tt)}function Z(z,tt,X){return tt||qt("ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(tt,X)}let V=R.length;function lt(z,tt,X){let F,j,bt,dt=z.x-tt.x,Ut=z.y-tt.y,It=X.x-z.x,Ot=X.y-z.y,P=dt*dt+Ut*Ut,Yt=dt*Ot-Ut*It;if(Math.abs(Yt)>Number.EPSILON){let Dt=Math.sqrt(P),Ft=Math.sqrt(It*It+Ot*Ot),at=tt.x-Ut/Dt,$t=tt.y+dt/Dt,vt=X.x-Ot/Ft,Gt=X.y+It/Ft,T=((vt-at)*Ot-(Gt-$t)*It)/(dt*Ot-Ut*It);F=at+dt*T-z.x,j=$t+Ut*T-z.y;let x=F*F+j*j;if(x<=2)return new _t(F,j);bt=Math.sqrt(x/2)}else{let Dt=!1;dt>Number.EPSILON?It>Number.EPSILON&&(Dt=!0):dt<-Number.EPSILON?It<-Number.EPSILON&&(Dt=!0):Math.sign(Ut)===Math.sign(Ot)&&(Dt=!0),Dt?(F=-Ut,j=dt,bt=Math.sqrt(P)):(F=dt,j=Ut,bt=Math.sqrt(P/2))}return new _t(F/bt,j/bt)}let Y=[];for(let z=0,tt=H.length,X=tt-1,F=z+1;z<tt;z++,X++,F++)X===tt&&(X=0),F===tt&&(F=0),Y[z]=lt(H[z],H[X],H[F]);let st=[],rt,At=Y.concat();for(let z=0,tt=I;z<tt;z++){let X=N[z];rt=[];for(let F=0,j=X.length,bt=j-1,dt=F+1;F<j;F++,bt++,dt++)bt===j&&(bt=0),dt===j&&(dt=0),rt[F]=lt(X[F],X[bt],X[dt]);st.push(rt),At=At.concat(rt)}let Vt;if(f===0)Vt=ti.triangulateShape(H,N);else{let z=[],tt=[];for(let X=0;X<f;X++){let F=X/f,j=d*Math.cos(F*Math.PI/2),bt=_*Math.sin(F*Math.PI/2)+b;for(let dt=0,Ut=H.length;dt<Ut;dt++){let It=Z(H[dt],Y[dt],bt);kt(It.x,It.y,-j),F===0&&z.push(It)}for(let dt=0,Ut=I;dt<Ut;dt++){let It=N[dt];rt=st[dt];let Ot=[];for(let P=0,Yt=It.length;P<Yt;P++){let Dt=Z(It[P],rt[P],bt);kt(Dt.x,Dt.y,-j),F===0&&Ot.push(Dt)}F===0&&tt.push(Ot)}}Vt=ti.triangulateShape(z,tt)}let K=Vt.length,Mt=_+b;for(let z=0;z<V;z++){let tt=u?Z(R[z],At[z],Mt):R[z];v?(g.copy(w.normals[0]).multiplyScalar(tt.x),A.copy(w.binormals[0]).multiplyScalar(tt.y),S.copy(E[0]).add(g).add(A),kt(S.x,S.y,S.z)):kt(tt.x,tt.y,0)}for(let z=1;z<=h;z++)for(let tt=0;tt<V;tt++){let X=u?Z(R[tt],At[tt],Mt):R[tt];v?(g.copy(w.normals[z]).multiplyScalar(X.x),A.copy(w.binormals[z]).multiplyScalar(X.y),S.copy(E[z]).add(g).add(A),kt(S.x,S.y,S.z)):kt(X.x,X.y,p/h*z)}for(let z=f-1;z>=0;z--){let tt=z/f,X=d*Math.cos(tt*Math.PI/2),F=_*Math.sin(tt*Math.PI/2)+b;for(let j=0,bt=H.length;j<bt;j++){let dt=Z(H[j],Y[j],F);kt(dt.x,dt.y,p+X)}for(let j=0,bt=N.length;j<bt;j++){let dt=N[j];rt=st[j];for(let Ut=0,It=dt.length;Ut<It;Ut++){let Ot=Z(dt[Ut],rt[Ut],F);v?kt(Ot.x,Ot.y+E[h-1].y,E[h-1].x+X):kt(Ot.x,Ot.y,p+X)}}}Rt(),zt();function Rt(){let z=s.length/3;if(u){let tt=0,X=V*tt;for(let F=0;F<K;F++){let j=Vt[F];ue(j[2]+X,j[1]+X,j[0]+X)}tt=h+f*2,X=V*tt;for(let F=0;F<K;F++){let j=Vt[F];ue(j[0]+X,j[1]+X,j[2]+X)}}else{for(let tt=0;tt<K;tt++){let X=Vt[tt];ue(X[2],X[1],X[0])}for(let tt=0;tt<K;tt++){let X=Vt[tt];ue(X[0]+V*h,X[1]+V*h,X[2]+V*h)}}n.addGroup(z,s.length/3-z,0)}function zt(){let z=s.length/3,tt=0;St(H,tt),tt+=H.length;for(let X=0,F=N.length;X<F;X++){let j=N[X];St(j,tt),tt+=j.length}n.addGroup(z,s.length/3-z,1)}function St(z,tt){let X=z.length;for(;--X>=0;){let F=X,j=X-1;j<0&&(j=z.length-1);for(let bt=0,dt=h+f*2;bt<dt;bt++){let Ut=V*bt,It=V*(bt+1),Ot=tt+F+Ut,P=tt+j+Ut,Yt=tt+j+It,Dt=tt+F+It;Wt(Ot,P,Yt,Dt)}}}function kt(z,tt,X){l.push(z),l.push(tt),l.push(X)}function ue(z,tt,X){Kt(z),Kt(tt),Kt(X);let F=s.length/3,j=M.generateTopUV(n,s,F-3,F-2,F-1);Q(j[0]),Q(j[1]),Q(j[2])}function Wt(z,tt,X,F){Kt(z),Kt(tt),Kt(F),Kt(tt),Kt(X),Kt(F);let j=s.length/3,bt=M.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);Q(bt[0]),Q(bt[1]),Q(bt[3]),Q(bt[1]),Q(bt[2]),Q(bt[3])}function Kt(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function Q(z){r.push(z.x),r.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nu(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Br[s.type]().fromJSON(s)),new i(n,t.options)}},Du={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new _t(r,a),new _t(o,l),new _t(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],p=t[n*3+2],u=t[s*3],d=t[s*3+1],_=t[s*3+2],b=t[r*3],f=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new _t(a,1-l),new _t(c,1-p),new _t(u,1-_),new _t(b,1-m)]:[new _t(o,1-l),new _t(h,1-p),new _t(d,1-_),new _t(f,1-m)]}};function Nu(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ss=class i extends Nr{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},bs=class i extends Ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=e/l,d=[],_=[],b=[],f=[];for(let m=0;m<h;m++){let M=m*u-a;for(let E=0;E<c;E++){let v=E*p-r;_.push(v,-M,0),b.push(0,0,1),f.push(E/o),f.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let E=M+c*m,v=M+c*(m+1),w=M+1+c*(m+1),A=M+1+c*m;d.push(E,v,A),d.push(v,w,A)}this.setIndex(d),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(b,3)),this.setAttribute("uv",new he(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Es=class i extends Ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new D,u=new D,d=[],_=[],b=[],f=[];for(let m=0;m<=n;m++){let M=[],E=m/n,v=a+E*o,w=t*Math.cos(v),A=Math.sqrt(t*t-w*w),g=0;m===0&&a===0?g=.5/e:m===n&&l===Math.PI&&(g=-.5/e);for(let S=0;S<=e;S++){let U=S/e,R=s+U*r;p.x=-A*Math.cos(R),p.y=w,p.z=A*Math.sin(R),_.push(p.x,p.y,p.z),u.copy(p).normalize(),b.push(u.x,u.y,u.z),f.push(U+g,1-E),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let E=h[m][M+1],v=h[m][M],w=h[m+1][M],A=h[m+1][M+1];(m!==0||a>0)&&d.push(E,v,A),(m!==n-1||l<Math.PI)&&d.push(v,w,A)}this.setIndex(d),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(b,3)),this.setAttribute("uv",new he(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Di=class i extends Ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=new D,d=new D,_=new D;for(let b=0;b<=n;b++){let f=a+b/n*o;for(let m=0;m<=s;m++){let M=m/s*r;d.x=(t+e*Math.cos(f))*Math.cos(M),d.y=(t+e*Math.cos(f))*Math.sin(M),d.z=e*Math.sin(f),c.push(d.x,d.y,d.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),_.subVectors(d,u).normalize(),h.push(_.x,_.y,_.z),p.push(m/s),p.push(b/n)}}for(let b=1;b<=n;b++)for(let f=1;f<=s;f++){let m=(s+1)*b+f-1,M=(s+1)*(b-1)+f-1,E=(s+1)*(b-1)+f,v=(s+1)*b+f;l.push(m,M,v),l.push(M,E,v)}this.setIndex(l),this.setAttribute("position",new he(c,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ts=class i extends Ge{constructor(t=new ms(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new _t,h=new D,p=[],u=[],d=[],_=[];b(),this.setIndex(_),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(d,2));function b(){for(let E=0;E<e;E++)f(E);f(r===!1?e:0),M(),m()}function f(E){h=t.getPointAt(E/e,h);let v=a.normals[E],w=a.binormals[E];for(let A=0;A<=s;A++){let g=A/s*Math.PI*2,S=Math.sin(g),U=-Math.cos(g);l.x=U*v.x+S*w.x,l.y=U*v.y+S*w.y,l.z=U*v.z+S*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,p.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=e;E++)for(let v=1;v<=s;v++){let w=(s+1)*(E-1)+(v-1),A=(s+1)*E+(v-1),g=(s+1)*E+v,S=(s+1)*(E-1)+v;_.push(w,A,S),_.push(A,g,S)}}function M(){for(let E=0;E<=e;E++)for(let v=0;v<=s;v++)c.x=E/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Br[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(rc(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(rc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ne(i){let t={};for(let e=0;e<i.length;e++){let n=oi(i[e]);for(let s in n)t[s]=n[s]}return t}function rc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Uu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ol(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var th={clone:oi,merge:Ne},Fu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ou=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fu,this.fragmentShader=Ou,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=oi(t.uniforms),this.uniformsGroups=Uu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new me().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},kr=class extends dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},As=class extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Gr=class extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Vr=class extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Hr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eo,endingEnd:Eo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case To:r=t,o=2*e-n;break;case Ao:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case To:a=t,l=2*n-e;break;case Ao:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(n-e)/(s-e),b=_*_,f=b*_,m=-u*f+2*u*b-u*_,M=(1+u)*f+(-1.5-2*u)*b+(-.5+u)*_+1,E=(-1-d)*f+(1.5+d)*b+.5*_,v=d*f-d*b;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+M*a[c+w]+E*a[l+w]+v*a[p+w];return r}},Wr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},Xr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},qr=class extends Vn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(n-e)/(s-e),b=1-_;for(let f=0;f!==o;++f)r[f]=a[c+f]*b+a[l+f]*_;return r}let u=o*2,d=t-1;for(let _=0;_!==o;++_){let b=a[c+_],f=a[l+_],m=d*u+_*2,M=p[m],E=p[m+1],v=t*u+_*2,w=h[v],A=h[v+1],g=zu(n,e,M,w,s);r[_]=eh(g,b,E,A,f)}return r}};function eh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Bu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function zu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=eh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Bu(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ze=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xi(e,this.TimeBufferType),this.values=xi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xi(t.times,Array),values:xi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),dr(t.settings)&&(n.settings={inTangents:xi(t.settings.inTangents,Array),outTangents:xi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Xr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Hr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new qr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Qi:e=this.InterpolantFactoryMethodDiscrete;break;case Ar:e=this.InterpolantFactoryMethodLinear;break;case mr:e=this.InterpolantFactoryMethodSmooth;break;case bo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qi;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return mr;case this.InterpolantFactoryMethodBezier:return bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;dr(this.settings)&&(ac(this.settings.inTangents,t),ac(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;dr(this.settings)&&(oc(this.settings.inTangents,t),oc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Gh(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,u=p-n,d=p+n;for(let _=0;_!==n;++_){let b=e[p+_];if(b!==e[u+_]||b!==e[d+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[p+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,dr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ac(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function oc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ze.prototype.ValueTypeName="";Ze.prototype.TimeBufferType=Float32Array;Ze.prototype.ValueBufferType=Float32Array;Ze.prototype.DefaultInterpolation=Ar;var Hn=class extends Ze{constructor(t,e,n){super(t,e,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=Qi;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Yr.prototype.ValueTypeName="color";var Zr=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};Zr.prototype.ValueTypeName="number";var Jr=class extends Vn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)un.slerpFlat(r,0,a,c-o,a,c,l);return r}},ws=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Jr(this.times,this.values,this.getValueSize(),t)}};ws.prototype.ValueTypeName="quaternion";ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Ze{constructor(t,e,n){super(t,e,n)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=Qi;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Ze{constructor(t,e,n,s){super(t,e,n,s)}};$r.prototype.ValueTypeName="vector";var Kr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],_=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nh=new Kr,Qr=class{constructor(t){this.manager=t!==void 0?t:nh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends De{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Cs=class extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},So=new me,lc=new D,cc=new D,jr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=He,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kn,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(So,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===bi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(So)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fr=new D,pr=new un,on=new D,Is=class extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=$e,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fr,pr,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,on.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fr,pr,on),on.x===1&&on.y===1&&on.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,on.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fn=new D,hc=new _t,uc=new _t,Oe=class extends Is{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ps=class extends Is{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Io=class extends jr{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ni=class extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Io}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var vi=-90,yi=1,Ui=class extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(vi,yi,t,e);s.layers=this.layers,this.add(s);let r=new Oe(vi,yi,t,e);r.layers=this.layers,this.add(r);let a=new Oe(vi,yi,t,e);a.layers=this.layers,this.add(a);let o=new Oe(vi,yi,t,e);o.layers=this.layers,this.add(o);let l=new Oe(vi,yi,t,e);l.layers=this.layers,this.add(l);let c=new Oe(vi,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===$e)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=b,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ta=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var ll="\\[\\]\\.:\\/",ku=new RegExp("["+ll+"]","g"),cl="[^"+ll+"]",Gu="[^"+ll.replace("\\.","")+"]",Vu=/((?:WC+[\/:])*)/.source.replace("WC",cl),Hu=/(WCOD+)?/.source.replace("WCOD",Gu),Wu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cl),Xu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cl),qu=new RegExp("^"+Vu+Hu+Wu+Xu+"$"),Yu=["material","materials","bones","map"],Po=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ku,"")}static parseTrackName(t){let e=qu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Yu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=Po;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bg=new Float32Array(1);var ml=class ml{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ml.prototype.isMatrix2=!0;var Lo=ml;function hl(i,t,e,n){let s=Zu(n);switch(e){case Ko:return i*t;case jo:return i*t/s.components*s.byteLength;case ca:return i*t/s.components*s.byteLength;case qn:return i*t*2/s.components*s.byteLength;case ha:return i*t*2/s.components*s.byteLength;case Qo:return i*t*3/s.components*s.byteLength;case an:return i*t*4/s.components*s.byteLength;case ua:return i*t*4/s.components*s.byteLength;case Us:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:case ma:return Math.max(i,16)*Math.max(t,8)/4;case da:case pa:return Math.max(i,8)*Math.max(t,8)/2;case ga:case _a:case va:case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xa:case zs:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case za:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ks:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zu(i){switch(i){case He:case Yo:return{byteLength:1,components:1};case zi:case Zo:case rn:return{byteLength:2,components:1};case oa:case la:return{byteLength:2,components:4};case nn:case aa:case sn:return{byteLength:4,components:1};case Jo:case $o:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $u(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let h=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,h);else{p.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<p.length;d++){let _=p[u],b=p[d];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,_=p.length;d<_;d++){let b=p[d];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qu=`#ifdef USE_ALPHAHASH
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
#endif`,ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
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
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
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
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hd=`#ifdef USE_IRIDESCENCE
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
#endif`,ud=`#ifdef USE_BUMPMAP
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yd=`#define PI 3.141592653589793
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
} // validated`,Md=`vec3 transformedNormal = objectNormal;
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
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",wd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Od=`#ifdef USE_GRADIENTMAP
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
}`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
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
#endif`,Zd=`uniform sampler2D dfgLUT;
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
}`,Jd=`
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,of=`#if defined( USE_POINTS_UV )
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
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uf=`#if defined( USE_MORPHCOLORS )
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
#endif`,df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
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
#endif`,pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,Mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ff=`float getShadowMask() {
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
}`,Of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,qf=`#ifdef USE_TRANSMISSION
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qf=`uniform sampler2D t2D;
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
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`uniform float backgroundBlurriness;
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,rp=`#define DISTANCE
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
}`,ap=`#define DISTANCE
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#define LAMBERT
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define MATCAP
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
}`,gp=`#define MATCAP
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
}`,_p=`#define NORMAL
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
}`,xp=`#define NORMAL
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
}`,vp=`#define PHONG
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
}`,yp=`#define PHONG
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
}`,Mp=`#define STANDARD
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
}`,Sp=`#define STANDARD
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
}`,bp=`#define TOON
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
}`,Ep=`#define TOON
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
}`,Tp=`uniform float size;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,wp=`#include <common>
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
}`,Rp=`uniform vec3 color;
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
}`,Cp=`uniform float rotation;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Ku,alphahash_pars_fragment:Qu,alphamap_fragment:ju,alphamap_pars_fragment:td,alphatest_fragment:ed,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:sd,batching_pars_vertex:rd,batching_vertex:ad,begin_vertex:od,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:hd,bumpmap_pars_fragment:ud,clipping_planes_fragment:dd,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:_d,color_pars_vertex:xd,color_vertex:vd,common:yd,defaultnormal_vertex:Md,displacementmap_pars_vertex:Sd,displacementmap_vertex:bd,emissivemap_fragment:Ed,emissivemap_pars_fragment:Td,colorspace_fragment:Ad,colorspace_pars_fragment:wd,envmap_fragment:Rd,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Id,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Vd,envmap_vertex:Ld,fog_vertex:Dd,fog_pars_vertex:Nd,fog_fragment:Ud,fog_pars_fragment:Fd,gradientmap_pars_fragment:Od,lightmap_pars_fragment:Bd,lights_lambert_fragment:zd,lights_lambert_pars_fragment:kd,lights_pars_begin:Gd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:Zd,lights_fragment_begin:Jd,lights_fragment_maps:$d,lights_fragment_end:Kd,lightprobes_pars_fragment:Qd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:tf,logdepthbuf_pars_vertex:ef,logdepthbuf_vertex:nf,map_fragment:sf,map_pars_fragment:rf,map_particle_fragment:af,map_particle_pars_fragment:of,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphinstance_vertex:hf,morphcolor_vertex:uf,morphnormal_vertex:df,morphtarget_pars_vertex:ff,morphtarget_vertex:pf,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:_f,normal_pars_vertex:xf,normal_vertex:vf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:Mf,clearcoat_normal_fragment_maps:Sf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Ef,opaque_fragment:Tf,packing:Af,premultiplied_alpha_fragment:wf,project_vertex:Rf,dithering_fragment:Cf,dithering_pars_fragment:If,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Nf,shadowmap_vertex:Uf,shadowmask_pars_fragment:Ff,skinbase_vertex:Of,skinning_pars_vertex:Bf,skinning_vertex:zf,skinnormal_vertex:kf,specularmap_fragment:Gf,specularmap_pars_fragment:Vf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Wf,transmission_fragment:Xf,transmission_pars_fragment:qf,uv_pars_fragment:Yf,uv_pars_vertex:Zf,uv_vertex:Jf,worldpos_vertex:$f,background_vert:Kf,background_frag:Qf,backgroundCube_vert:jf,backgroundCube_frag:tp,cube_vert:ep,cube_frag:np,depth_vert:ip,depth_frag:sp,distance_vert:rp,distance_frag:ap,equirect_vert:op,equirect_frag:lp,linedashed_vert:cp,linedashed_frag:hp,meshbasic_vert:up,meshbasic_frag:dp,meshlambert_vert:fp,meshlambert_frag:pp,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:_p,meshnormal_frag:xp,meshphong_vert:vp,meshphong_frag:yp,meshphysical_vert:Mp,meshphysical_frag:Sp,meshtoon_vert:bp,meshtoon_frag:Ep,points_vert:Tp,points_frag:Ap,shadow_vert:wp,shadow_frag:Rp,sprite_vert:Cp,sprite_frag:Ip},Tt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},gn={basic:{uniforms:Ne([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ne([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ne([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ne([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ne([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new te(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ne([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ne([Tt.points,Tt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ne([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ne([Tt.common,Tt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ne([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ne([Tt.sprite,Tt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:Ne([Tt.common,Tt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:Ne([Tt.lights,Tt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};gn.physical={uniforms:Ne([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var Ha={r:0,b:0,g:0},Pp=new me,Th=new Zt;Th.set(-1,0,0,0,1,0,0,0,1);function Lp(i,t,e,n,s,r){let a=new te(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let v=M.backgroundBlurriness>0;E=t.get(E,v)}return E}function _(M){let E=!1,v=d(M);v===null?f(a,o):v&&v.isColor&&(f(v,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(M,E){let v=d(E);v&&v.isCubeTexture?(c===void 0&&(c=new Ve(new Ri(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:oi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Th),c.material.toneMapped=re.getTransfer(v.colorSpace)!==le,(h!==v||p!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ve(new bs(2,2),new dn({name:"BackgroundMaterial",uniforms:oi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=re.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,p=v.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,E){M.getRGB(Ha,ol(i)),e.buffers.color.setClear(Ha.r,Ha.g,Ha.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,f(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,f(a,o)},render:_,addToRenderList:b,dispose:m}}function Dp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,O,W,I,H){let Z=!1,V=p(N,I,W,O);r!==V&&(r=V,c(r.object)),Z=d(N,I,W,H),Z&&_(N,I,W,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,v(N,O,W,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function p(N,O,W,I){let H=I.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let V=N.isInstancedMesh===!0?N.id:0,lt=Z[V];lt===void 0&&(lt={},Z[V]=lt);let Y=lt[W.id];Y===void 0&&(Y={},lt[W.id]=Y);let st=Y[H];return st===void 0&&(st=u(l()),Y[H]=st),st}function u(N){let O=[],W=[],I=[];for(let H=0;H<e;H++)O[H]=0,W[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:W,attributeDivisors:I,object:N,attributes:{},index:null}}function d(N,O,W,I){let H=r.attributes,Z=O.attributes,V=0,lt=W.getAttributes();for(let Y in lt)if(lt[Y].location>=0){let rt=H[Y],At=Z[Y];if(At===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(At=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(At=N.instanceColor)),rt===void 0||rt.attribute!==At||At&&rt.data!==At.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function _(N,O,W,I){let H={},Z=O.attributes,V=0,lt=W.getAttributes();for(let Y in lt)if(lt[Y].location>=0){let rt=Z[Y];rt===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(rt=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(rt=N.instanceColor));let At={};At.attribute=rt,rt&&rt.data&&(At.data=rt.data),H[Y]=At,V++}r.attributes=H,r.attributesNum=V,r.index=I}function b(){let N=r.newAttributes;for(let O=0,W=N.length;O<W;O++)N[O]=0}function f(N){m(N,0)}function m(N,O){let W=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;W[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),H[N]!==O&&(i.vertexAttribDivisor(N,O),H[N]=O)}function M(){let N=r.newAttributes,O=r.enabledAttributes;for(let W=0,I=O.length;W<I;W++)O[W]!==N[W]&&(i.disableVertexAttribArray(W),O[W]=0)}function E(N,O,W,I,H,Z,V){V===!0?i.vertexAttribIPointer(N,O,W,H,Z):i.vertexAttribPointer(N,O,W,I,H,Z)}function v(N,O,W,I){b();let H=I.attributes,Z=W.getAttributes(),V=O.defaultAttributeValues;for(let lt in Z){let Y=Z[lt];if(Y.location>=0){let st=H[lt];if(st===void 0&&(lt==="instanceMatrix"&&N.instanceMatrix&&(st=N.instanceMatrix),lt==="instanceColor"&&N.instanceColor&&(st=N.instanceColor)),st!==void 0){let rt=st.normalized,At=st.itemSize,Vt=t.get(st);if(Vt===void 0)continue;let K=Vt.buffer,Mt=Vt.type,Rt=Vt.bytesPerElement,zt=Mt===i.INT||Mt===i.UNSIGNED_INT||st.gpuType===aa;if(st.isInterleavedBufferAttribute){let St=st.data,kt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,ue=st.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Wt=0;Wt<Y.locationSize;Wt++)m(Y.location+Wt,St.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Wt=0;Wt<Y.locationSize;Wt++)f(Y.location+Wt);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Wt=0;Wt<Y.locationSize;Wt++)E(Y.location+Wt,At/Y.locationSize,Mt,rt,kt*Rt,(ue+At/Y.locationSize*Wt)*Rt,zt)}else{if(st.isInstancedBufferAttribute){for(let St=0;St<Y.locationSize;St++)m(Y.location+St,st.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let St=0;St<Y.locationSize;St++)f(Y.location+St);i.bindBuffer(i.ARRAY_BUFFER,K);for(let St=0;St<Y.locationSize;St++)E(Y.location+St,At/Y.locationSize,Mt,rt,At*Rt,At/Y.locationSize*St*Rt,zt)}}else if(V!==void 0){let rt=V[lt];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(Y.location,rt);break;case 3:i.vertexAttrib3fv(Y.location,rt);break;case 4:i.vertexAttrib4fv(Y.location,rt);break;default:i.vertexAttrib1fv(Y.location,rt)}}}}M()}function w(){U();for(let N in n){let O=n[N];for(let W in O){let I=O[W];for(let H in I){let Z=I[H];for(let V in Z)h(Z[V].object),delete Z[V];delete I[H]}}delete n[N]}}function A(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let W in O){let I=O[W];for(let H in I){let Z=I[H];for(let V in Z)h(Z[V].object),delete Z[V];delete I[H]}}delete n[N.id]}function g(N){for(let O in n){let W=n[O];for(let I in W){let H=W[I];if(H[N.id]===void 0)continue;let Z=H[N.id];for(let V in Z)h(Z[V].object),delete Z[V];delete H[N.id]}}}function S(N){for(let O in n){let W=n[O],I=N.isInstancedMesh===!0?N.id:0,H=W[I];if(H!==void 0){for(let Z in H){let V=H[Z];for(let lt in V)h(V[lt].object),delete V[lt];delete H[Z]}delete W[I],Object.keys(W).length===0&&delete n[O]}}}function U(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:f,disableUnusedAttributes:M}}function Np(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Up(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==an&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let S=g===rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==He&&g!==sn&&!S&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:w,samples:A}}function Fp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new en,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||n!==0||s;return s=u,n=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,d){let _=p.clippingPlanes,b=p.clipIntersection,f=p.clipShadows,m=i.get(p);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{let M=r?0:n,E=M*4,v=m.clippingState||null;l.value=v,v=h(_,u,E,d);for(let w=0;w!==E;++w)v[w]=e[w];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(p,u,d,_){let b=p!==null?p.length:0,f=null;if(b!==0){if(f=l.value,_!==!0||f===null){let m=d+b*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<m)&&(f=new Float32Array(m));for(let E=0,v=d;E!==b;++E,v+=4)a.copy(p[E]).applyMatrix4(M,o),a.normal.toArray(f,v),f[v+3]=a.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,f}}var Hs=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ls(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:ii});r.uniforms.tEquirect.value=e;let a=new Ve(s,r),o=e.minFilter;return e.minFilter===wn&&(e.minFilter=Be),new Ui(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ih=256,Op=3,Bp=20,Ah=256,wh=16,zp=3,kp=new D,Gp=new te,Xa=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ui(1,10,null),this._boxMesh=new Ve(new Ri(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=kp}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,_=l.autoClearStencil,b=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(t.background=l.getClearColor(Gp));let f=new Ui(n,s,h);return f.position.copy(o),f.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=_,t.background=b,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ih,Zc(t))}_fromTexture(t,e){t.mapping===ri||t.mapping===Bi?this._setSize(t.image.length===0?ih:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=sh(t,!1,!1),n=Math.log2(t)-Op;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=sh(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ri||t.mapping===Bi?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rh()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Vp(),this._integrationMaterial=Hp());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/wh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-zp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Ah*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Wp());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function sh(i,t,e){return new Hs(i,{minFilter:wn,generateMipmaps:t,type:rn,colorSpace:ji,depthBuffer:e})}function Ws(i,t,e){return new dn({name:i,uniforms:t,vertexShader:ee.cube_vert,fragmentShader:e,side:ze,blending:ii,depthTest:!1,depthWrite:!1})}function Vp(){return Ws("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ah}u

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
	`)}function Hp(){return Ws("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:wh}},`

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
	`)}function Wp(){return Ws("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Bp}
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
	`)}function rh(){return Ws("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ah(){return Ws("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===ia||d===sa)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let b=new Hs(_.height);return b.fromEquirectangularTexture(i,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,_=d===ia||d===sa,b=d===ri||d===Bi;if(_||b){let f=e.get(u),m=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Xa(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{let M=u.image;return _&&M&&M.height>0||b&&M&&l(M)?(n===null&&(n=new Xa(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function o(u,d){return d===ia?u.mapping=ri:d===sa&&(u.mapping=Bi),u}function l(u){let d=0,_=6;for(let b=0;b<_;b++)u[b]!==void 0&&d++;return d===_}function c(u){let d=u.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function qp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ji("WebGLRenderer: "+n+" extension not supported."),s}}}function Yp(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let f in _.attributes)t.remove(_.attributes[f]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let b=r.get(_);b&&(t.remove(b),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(_,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),a.register(b,b.id,b),e.memory.geometries++),b}function h(_){let b=_.attributes;for(let f in b)t.update(b[f],i.ARRAY_BUFFER)}function p(_){let b=_.index,f=_.attributes.position,m=0;if(f===void 0)return;let M=b!==null?b.array.length:f.array.length/3-1,E=f.count>=65535?os:as,v=new E(Math.ceil(M/3)*6,1),w=v.array;if(b!==null){let g=b.array;m=b.version;for(let S=0,U=0;S<M;S+=3){let R=g[S+0],N=g[S+1],O=g[S+2];w[U++]=R,w[U++]=N,w[U++]=N,w[U++]=O,w[U++]=O,w[U++]=R}}else{m=f.version;for(let g=0,S=0;g<M;g+=3){let U=g+0,R=g+1,N=g+2;w[S++]=U,w[S++]=R,w[S++]=R,w[S++]=N,w[S++]=N,w[S++]=U}}v.version=m;let A=r.get(_);A&&t.remove(A),r.set(_,v)}function u(_){let b=r.get(_);if(b){let f=_.index;f!==null&&b.version<f.version&&p(_)}else p(_);return r.get(_)}function d(){for(let _ in s){let b=s[_].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Zp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function c(p,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,p*a,d),e.update(u,n,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,d);let b=0;for(let f=0;f<d;f++)b+=u[f];e.update(b,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Jp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $p(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==p){let U=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;d===!0&&(E=1),_===!0&&(E=2),b===!0&&(E=3);let v=o.attributes.position.count*E,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*w*4*p),g=new ns(A,v,w,p);g.type=sn,g.needsUpdate=!0;let S=E*4;for(let R=0;R<p;R++){let N=f[R],O=m[R],W=M[R],I=v*w*4*R;for(let H=0;H<N.count;H++){let Z=H*S;d===!0&&(s.fromBufferAttribute(N,H),A[I+Z+0]=s.x,A[I+Z+1]=s.y,A[I+Z+2]=s.z,A[I+Z+3]=0),_===!0&&(s.fromBufferAttribute(O,H),A[I+Z+4]=s.x,A[I+Z+5]=s.y,A[I+Z+6]=s.z,A[I+Z+7]=0),b===!0&&(s.fromBufferAttribute(W,H),A[I+Z+8]=s.x,A[I+Z+9]=s.y,A[I+Z+10]=s.z,A[I+Z+11]=W.itemSize===4?s.w:1)}}u={count:p,texture:g,size:new _t(v,w)},n.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Kp(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Qp={[ko]:"LINEAR_TONE_MAPPING",[Go]:"REINHARD_TONE_MAPPING",[Vo]:"CINEON_TONE_MAPPING",[Ds]:"ACES_FILMIC_TONE_MAPPING",[Wo]:"AGX_TONE_MAPPING",[Xo]:"NEUTRAL_TONE_MAPPING",[Ho]:"CUSTOM_TONE_MAPPING"};function jp(i,t,e,n,s,r){let a=new qe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ge;h.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new he([0,2,0,0,2,0],2));let p=new kr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ve(h,p),d=new Ps(-1,1,1,-1,0,1),_=null,b=null,f=!1,m,M=null,E=[],v=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let g=0;g<E.length;g++){let S=E[g];S.setSize&&S.setSize(w,A)}},this.setEffects=function(w){E=w,v=E.length>0&&E[0].isRenderPass===!0;let A=a.width,g=a.height;E.length>0&&o===null&&(o=new qe(A,g,{type:rn,depthBuffer:!1,stencilBuffer:!1}),l=new qe(A,g,{type:rn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&E.some(U=>U.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new An(A,g),r===!0&&(c.format=Rn,c.type=ai)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let U=0;U<E.length;U++){let R=E[U];R.setSize&&R.setSize(A,g),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,A){if(f||w.toneMapping===pn&&E.length===0)return!1;if(M=A,A!==null){let g=A.width,S=A.height;(a.width!==g||a.height!==S)&&this.setSize(g,S)}return v===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=pn,!0},this.hasRenderPass=function(){return v},this.end=function(w,A){w.toneMapping=m,f=!0;let g=a,S=o;for(let U=0;U<E.length;U++){let R=E[U];R.enabled!==!1&&(R.render(w,S,g,A),R.needsSwap!==!1&&(g=S,S=S===o?l:o))}if(_!==w.outputColorSpace||b!==w.toneMapping){_=w.outputColorSpace,b=w.toneMapping,p.defines={},re.getTransfer(_)===le&&(p.defines.SRGB_TRANSFER="");let U=Qp[b];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(M),w.render(u,d),M=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var Rh=new ke,Ch=new An(1,1),Ih=new cs(1),Ph=new ns,Lh=new Ir,Dh=new ls,oh=[],lh=[],ch=new Float32Array(16),hh=new Float32Array(9),uh=new Float32Array(4);function Vi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=oh[s];if(r===void 0&&(r=new Float32Array(s),oh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ya(i,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function sm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;uh.set(n),i.uniformMatrix2fv(this.addr,!1,uh),Se(e,n)}}function rm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;hh.set(n),i.uniformMatrix3fv(this.addr,!1,hh),Se(e,n)}}function am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;ch.set(n),i.uniformMatrix4fv(this.addr,!1,ch),Se(e,n)}}function om(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function um(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Za(i){return i.version===0&&(i.compareFunction=nl,i.needsUpdate=!0),i}function mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Za(Ch):r=Rh,e.setTexture2D(t||r,s)}function gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lh,s)}function _m(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Za(Ih):r=Dh,e.setTextureCube(t||r,s)}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ph,s)}function vm(i){switch(i){case 5126:return tm;case 35664:return em;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return rm;case 35676:return am;case 5124:case 35670:return om;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return hm;case 5125:return um;case 36294:return dm;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return xm}}function ym(i,t){i.uniform1fv(this.addr,t)}function Mm(i,t){let e=Vi(t,this.size,2);i.uniform2fv(this.addr,e)}function Sm(i,t){let e=Vi(t,this.size,3);i.uniform3fv(this.addr,e)}function bm(i,t){let e=Vi(t,this.size,4);i.uniform4fv(this.addr,e)}function Em(i,t){let e=Vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tm(i,t){let e=Vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Am(i,t){let e=Vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wm(i,t){i.uniform1iv(this.addr,t)}function Rm(i,t){i.uniform2iv(this.addr,t)}function Cm(i,t){i.uniform3iv(this.addr,t)}function Im(i,t){i.uniform4iv(this.addr,t)}function Pm(i,t){i.uniform1uiv(this.addr,t)}function Lm(i,t){i.uniform2uiv(this.addr,t)}function Dm(i,t){i.uniform3uiv(this.addr,t)}function Nm(i,t){i.uniform4uiv(this.addr,t)}function Um(i,t,e){let n=this.cache,s=t.length,r=Ya(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Za(Ch):a=Rh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Fm(i,t,e){let n=this.cache,s=t.length,r=Ya(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Lh,r[a])}function Om(i,t,e){let n=this.cache,s=t.length,r=Ya(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Za(Ih):a=Dh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Bm(i,t,e){let n=this.cache,s=t.length,r=Ya(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ph,r[a])}function zm(i){switch(i){case 5126:return ym;case 35664:return Mm;case 35665:return Sm;case 35666:return bm;case 35674:return Em;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return wm;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Im;case 5125:return Pm;case 36294:return Lm;case 36295:return Dm;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}var xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vm(e.type)}},vl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zm(e.type)}},yl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function dh(i,t){i.seq.push(t),i.map[t.id]=t}function km(i,t,e){let n=i.name,s=n.length;for(gl.lastIndex=0;;){let r=gl.exec(n),a=gl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){dh(e,c===void 0?new xl(o,i,t):new vl(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new yl(o),dh(e,p)),e=p}}}var Gi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);km(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function fh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Gm=37297,Vm=0;function Hm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ph=new Zt;function Wm(i){re._getMatrix(ph,re.workingColorSpace,i);let t=`mat3( ${ph.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case ts:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hm(i.getShaderSource(t),o)}else return r}function Xm(i,t){let e=Wm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var qm={[ko]:"Linear",[Go]:"Reinhard",[Vo]:"Cineon",[Ds]:"ACESFilmic",[Wo]:"AgX",[Xo]:"Neutral",[Ho]:"Custom"};function Ym(i,t){let e=qm[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wa=new D;function Zm(){re.getLuminanceCoefficients(Wa);let i=Wa.x.toFixed(4),t=Wa.y.toFixed(4),e=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function $m(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Km(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vs(i){return i!==""}function gh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function _h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(Qm,jm)}function jm(i,t){let e=ee[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ml(e)}var tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(i){return i.replace(tg,eg)}function eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var ng={[Ls]:"SHADOWMAP_TYPE_PCF",[Fi]:"SHADOWMAP_TYPE_VSM"};function ig(i){return ng[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sg={[Bi]:"ENVMAP_MODE_REFRACTION"};function rg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ag={[zo]:"ENVMAP_BLENDING_MULTIPLY",[Lc]:"ENVMAP_BLENDING_MIX",[Dc]:"ENVMAP_BLENDING_ADD"};function og(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ag[i.combine]||"ENVMAP_BLENDING_NONE"}function lg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ig(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=rg(e),p=og(e),u=Jm(e),d=$m(r),_=s.createProgram(),b,f,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Vs).join(`
`),b.length>0&&(b+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Vs).join(`
`),f.length>0&&(f+=`
`)):(b=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),f=[vh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?ee.tonemapping_pars_fragment:"",e.toneMapping!==pn?Ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Xm("linearToOutputTexel",e.outputColorSpace),Zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),a=Ml(a),a=gh(a,e),a=_h(a,e),o=Ml(o),o=gh(o,e),o=_h(o,e),a=xh(a),o=xh(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,f=["#define varying in",e.glslVersion===il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=m+b+a,E=m+f+o,v=fh(s,s.VERTEX_SHADER,M),w=fh(s,s.FRAGMENT_SHADER,E);s.attachShader(_,v),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(v)||"",W=s.getShaderInfoLog(w)||"",I=N.trim(),H=O.trim(),Z=W.trim(),V=!0,lt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,w);else{let Y=mh(s,v,"vertex"),st=mh(s,w,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+Y+`
`+st)}else I!==""?Xt("WebGLProgram: Program Info Log:",I):(H===""||Z==="")&&(lt=!1);lt&&(R.diagnostics={runnable:V,programLog:I,vertexShader:{log:H,prefix:b},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(v),s.deleteShader(w),g=new Gi(s,_),S=Km(s,_)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(_,Gm)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=w,this}var cg=0,Sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bl(t),e.set(t,n)),n}},bl=class{constructor(t){this.id=cg++,this.code=t,this.usedTimes=0}};function hg(i){return i===qn||i===zs||i===ks}function ug(i,t,e,n,s,r){let a=new is,o=new Sl,l=new Set,c=[],h=new Map,p=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,S,U,R,N,O){let W=R.fog,I=N.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=t.get(g.envMap||H,Z),lt=u[g.type],Y=n.precision;g.precision!==null&&(Y=n.getMaxPrecision(g.precision),Y!==g.precision&&Xt("WebGLProgram.getParameters:",g.precision,"not supported, using",Y,"instead."));let st=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,rt=st!==void 0?st.length:0,At=0;I.morphAttributes.position!==void 0&&(At=1),I.morphAttributes.normal!==void 0&&(At=2),I.morphAttributes.color!==void 0&&(At=3);let Vt,K,Mt,Rt;if(lt){let Et=gn[lt];Vt=Et.vertexShader,K=Et.fragmentShader}else{Vt=g.vertexShader,K=g.fragmentShader;let Et=o.getVertexShaderStage(g),ce=o.getFragmentShaderStage(g);o.update(g,Et,ce),Mt=Et.id,Rt=ce.id}let zt=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),kt=N.isInstancedMesh===!0,ue=N.isBatchedMesh===!0,Wt=!!g.map,Kt=!!g.matcap,Q=!!V,z=Q&&V.isPMREMTexture===!0,tt=!!g.aoMap,X=!!g.lightMap,F=!!g.bumpMap&&g.wireframe===!1,j=!!g.normalMap,bt=!!g.displacementMap,dt=!!g.emissiveMap,Ut=!!g.metalnessMap,It=!!g.roughnessMap,Ot=g.anisotropy>0,P=g.clearcoat>0,Yt=g.diffuseRoughness>0,Dt=g.dispersion>0,Ft=g.retroreflectivity>0,at=g.iridescence>0,$t=g.sheen>0,vt=g.transmission>0,Gt=Ot&&!!g.anisotropyMap,T=P&&!!g.clearcoatMap,x=P&&!!g.clearcoatNormalMap,B=P&&!!g.clearcoatRoughnessMap,ot=Yt&&!!g.diffuseRoughnessMap,nt=at&&!!g.iridescenceMap,ht=at&&!!g.iridescenceThicknessMap,ft=$t&&!!g.sheenColorMap,$=$t&&!!g.sheenRoughnessMap,et=!!g.specularMap,mt=!!g.specularColorMap,C=!!g.specularIntensityMap,it=vt&&!!g.transmissionMap,J=vt&&!!g.thicknessMap,gt=!!g.gradientMap,ut=!!g.alphaMap,pt=g.alphaTest>0,Bt=!!g.alphaHash,jt=!!g.extensions,ct=pn;g.toneMapped&&(zt===null||zt.isXRRenderTarget===!0)&&(ct=i.toneMapping);let Ht=z?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Qt={shaderID:lt,shaderType:g.type,shaderName:g.name,vertexShader:Vt,fragmentShader:K,defines:g.defines,customVertexShaderID:Mt,customFragmentShaderID:Rt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:Y,batching:ue,batchingColor:ue&&N._colorsTexture!==null,instancing:kt,instancingColor:kt&&N.instanceColor!==null,instancingMorph:kt&&N.morphTexture!==null,outputColorSpace:zt===null?i.outputColorSpace:zt.isXRRenderTarget===!0?zt.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Wt,matcap:Kt,envMap:Q,envMapMode:Q&&V.mapping,envMapPMREM:z,envMapMaxLod:z?Ht.length-1:null,envMapSize:z?Ht[0].width:null,aoMap:tt,lightMap:X,bumpMap:F,normalMap:j,displacementMap:bt,emissiveMap:dt,normalMapObjectSpace:j&&g.normalMapType===Fc,normalMapTangentSpace:j&&g.normalMapType===Va,packedNormalMap:j&&g.normalMapType===Va&&hg(g.normalMap.format),metalnessMap:Ut,roughnessMap:It,anisotropy:Ot,anisotropyMap:Gt,clearcoat:P,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:Yt,diffuseRoughnessMap:ot,dispersion:Dt,retroreflection:Ft,iridescence:at,iridescenceMap:nt,iridescenceThicknessMap:ht,sheen:$t,sheenColorMap:ft,sheenRoughnessMap:$,specularMap:et,specularColorMap:mt,specularIntensityMap:C,transmission:vt,transmissionMap:it,thicknessMap:J,gradientMap:gt,opaque:g.transparent===!1&&g.blending===Oi&&g.alphaToCoverage===!1,alphaMap:ut,alphaTest:pt,alphaHash:Bt,combine:g.combine,mapUv:Wt&&d(g.map.channel),aoMapUv:tt&&d(g.aoMap.channel),lightMapUv:X&&d(g.lightMap.channel),bumpMapUv:F&&d(g.bumpMap.channel),normalMapUv:j&&d(g.normalMap.channel),displacementMapUv:bt&&d(g.displacementMap.channel),emissiveMapUv:dt&&d(g.emissiveMap.channel),metalnessMapUv:Ut&&d(g.metalnessMap.channel),roughnessMapUv:It&&d(g.roughnessMap.channel),anisotropyMapUv:Gt&&d(g.anisotropyMap.channel),clearcoatMapUv:T&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:$&&d(g.sheenRoughnessMap.channel),specularMapUv:et&&d(g.specularMap.channel),specularColorMapUv:mt&&d(g.specularColorMap.channel),specularIntensityMapUv:C&&d(g.specularIntensityMap.channel),transmissionMapUv:it&&d(g.transmissionMap.channel),thicknessMapUv:J&&d(g.thicknessMap.channel),alphaMapUv:ut&&d(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(j||Ot),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Wt||ut),fog:!!W,useFog:g.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&j===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:St,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:At,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(Et=>Et.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Wt&&g.map.isVideoTexture===!0&&re.getTransfer(g.map.colorSpace)===le,decodeVideoTextureEmissive:dt&&g.emissiveMap.isVideoTexture===!0&&re.getTransfer(g.emissiveMap.colorSpace)===le,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===fn,flipSided:g.side===ze,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:jt&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&g.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function b(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let U in g.defines)S.push(U),S.push(g.defines[U]);return g.isRawShaderMaterial===!1&&(f(S,g),m(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function f(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapPMREM),g.push(S.envMapMaxLod),g.push(S.envMapSize),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.diffuseRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.numSunLights),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numSunLightShadows),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.numLightProbeGrids),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function m(g,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){let S=u[g.type],U;if(S){let R=gn[S];U=th.clone(R.uniforms)}else U=g.uniforms;return U}function E(g,S){let U=h.get(S);return U!==void 0?++U.usedTimes:(U=new lg(i,S,g,s),c.push(U),h.set(S,U)),U}function v(g){if(--g.usedTimes===0){let S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:M,acquireProgram:E,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:A}}function dg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,b,f,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:_,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:f,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=_,M.materialVariant=a(u),M.groupOrder=b,M.renderOrder=u.renderOrder,M.z=f,M.group=m),t++,M}function l(u,d,_,b,f,m,M){M.reversedDepth===!0&&(f=-f);let E=o(u,d,_,b,f,m);_.transmission>0?n.push(E):_.transparent===!0?s.push(E):e.push(E)}function c(u,d,_,b,f,m){let M=o(u,d,_,b,f,m);_.transmission>0?n.unshift(M):_.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||fg),n.length>1&&n.sort(d||yh),s.length>1&&s.sort(d||yh)}function p(){for(let u=t,d=i.length;u<d;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function pg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Mh,i.set(n,[a])):s>=r.length?(a=new Mh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new te};break;case"SpotLight":e={position:new D,direction:new D,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function gg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _g=0;function xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vg(i){let t=new mg,e=gg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new me,a=new me;function o(c){let h=0,p=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,_=0,b=0,f=0,m=0,M=0,E=0,v=0,w=0,A=0,g=0,S=0,U=0,R=0;c.sort(xg);for(let O=0,W=c.length;O<W;O++){let I=c[O],H=I.color,Z=I.intensity,V=I.distance,lt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===qn?lt=I.shadow.map.texture:lt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*Z,p+=H.g*Z,u+=H.b*Z;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],Z);R++}else if(I.isSunLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let st=I.shadow,rt=e.get(I);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[_]=rt,n.sunShadowMap[_]=lt;let At=st.getViewportCount();for(let Vt=0;Vt<At;Vt++)n.sunShadowMatrix[b+Vt]=st.getMatrix(Vt),n.sunShadowCascade[b+Vt]=st._cascadeData[Vt];b+=At,_++}n.sun[d]=Y,d++}else if(I.isDirectionalLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let st=I.shadow,rt=e.get(I);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,n.directionalShadow[f]=rt,n.directionalShadowMap[f]=lt,n.directionalShadowMatrix[f]=I.shadow.matrix,w++}n.directional[f]=Y,f++}else if(I.isSpotLight){let Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(H).multiplyScalar(Z),Y.distance=V,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[M]=Y;let st=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,st.updateMatrices(I),I.castShadow&&U++),n.spotLightMatrix[M]=st.matrix,I.castShadow){let rt=e.get(I);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,n.spotShadow[M]=rt,n.spotShadowMap[M]=lt,g++}M++}else if(I.isRectAreaLight){let Y=t.get(I);Y.color.copy(H).multiplyScalar(Z),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=Y,E++}else if(I.isPointLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let st=I.shadow,rt=e.get(I);rt.shadowIntensity=st.intensity,rt.shadowBias=st.bias,rt.shadowNormalBias=st.normalBias,rt.shadowRadius=st.radius,rt.shadowMapSize=st.mapSize,rt.shadowCameraNear=st.camera.near,rt.shadowCameraFar=st.camera.far,n.pointShadow[m]=rt,n.pointShadowMap[m]=lt,n.pointShadowMatrix[m]=I.shadow.matrix,A++}n.point[m]=Y,m++}else if(I.isHemisphereLight){let Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(Z),Y.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[v]=Y,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;let N=n.hash;(N.sunLength!==d||N.directionalLength!==f||N.pointLength!==m||N.spotLength!==M||N.rectAreaLength!==E||N.hemiLength!==v||N.numSunShadows!==_||N.numDirectionalShadows!==w||N.numPointShadows!==A||N.numSpotShadows!==g||N.numSpotMaps!==S||N.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=f,n.spot.length=M,n.rectArea.length=E,n.point.length=m,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+S-U,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=R,N.sunLength=d,N.directionalLength=f,N.pointLength=m,N.spotLength=M,N.rectAreaLength=E,N.hemiLength=v,N.numSunShadows=_,N.numDirectionalShadows=w,N.numPointShadows=A,N.numSpotShadows=g,N.numSpotMaps=S,N.numLightProbes=R,n.version=_g++)}function l(c,h){let p=0,u=0,d=0,_=0,b=0,f=0,m=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let v=c[M];if(v.isSunLight){let w=n.sun[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),p++}else if(v.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(v.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),_++}else if(v.isRectAreaLight){let w=n.rectArea[b];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),b++}else if(v.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let w=n.hemi[f];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),f++}}}return{setup:o,setupView:l,state:n}}function Sh(i){let t=new vg(i),e=[],n=[],s=[];function r(p){h.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function l(){t.setup(e),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(e,p)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Sh(i),t.set(s,[o])):r>=a.length?(o=new Sh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
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
}`,bg=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Eg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],bh=new me,Gs=new D,_l=new D;function Tg(i,t,e){let n=new kn,s=new _t,r=new _t,a=new ge,o=new Gr,l=new Vr,c={},h=e.maxTextureSize,p={[Xn]:ze,[ze]:Xn,[fn]:fn},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Mg,fragmentShader:Sg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new Ge;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ve(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ls;let m=this.type;this.render=function(A,g,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;this.type===na&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ls);let U=i.getRenderTarget(),R=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ii),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let W=m!==this.type;W&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=A.length;I<H;I++){let Z=A[I],V=Z.shadow;if(V===void 0){Xt("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let lt=V.getFrameExtents();s.multiply(lt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,V.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||W===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Fi){if(Z.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new qe(s.x,s.y,{format:qn,type:rn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new An(s.x,s.y,sn),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=En,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=we,V.map.depthTexture.magFilter=we}else Z.isPointLight?(V.map=new Hs(s.x),V.map.depthTexture=new cs(s.x,nn)):(V.map=new qe(s.x,s.y),V.map.depthTexture=new An(s.x,s.y,nn)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=En,this.type===Ls?(V.map.depthTexture.compareFunction=Y?el:tl,V.map.depthTexture.minFilter=Be,V.map.depthTexture.magFilter=Be):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=we,V.map.depthTexture.magFilter=we);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let st=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Z.isPointLight!==!0&&V.updateMatrices(Z,S);let rt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:S.layers;for(let At=0;At<st;At++){let Vt=V.getCamera(At);if(Z.isPointLight){let K=V.camera,Mt=V.matrix,Rt=Z.distance||K.far;Rt!==K.far&&(K.far=Rt,K.updateProjectionMatrix()),Gs.setFromMatrixPosition(Z.matrixWorld),K.position.copy(Gs),_l.copy(K.position),_l.add(bg[At]),K.up.copy(Eg[At]),K.lookAt(_l),K.updateMatrixWorld(),Mt.makeTranslation(-Gs.x,-Gs.y,-Gs.z),bh.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),V._frustum.setFromProjectionMatrix(bh,K.coordinateSystem,K.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,At),i.clear();else{At===0&&(i.setRenderTarget(V.map),i.clear());let K=V.getViewport(At);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),O.viewport(a)}n=V.getFrustum(At),v(g,S,Vt,Z,rt,this.type)}V.isPointLightShadow!==!0&&this.type===Fi&&M(V,S),V.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(U,R,N)};function M(A,g){let S=t.update(b);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new qe(s.x,s.y,{format:qn,type:rn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(g,null,S,u,b,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(g,null,S,d,b,null)}function E(A,g,S,U){let R=null,N=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)R=N;else if(R=S.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let O=R.uuid,W=g.uuid,I=c[O];I===void 0&&(I={},c[O]=I);let H=I[W];H===void 0&&(H=R.clone(),I[W]=H,g.addEventListener("dispose",w)),R=H}if(R.visible=g.visible,R.wireframe=g.wireframe,U===Fi?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:p[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=S}return R}function v(A,g,S,U,R,N){if(A.visible===!1)return;if(A.layers.test(R)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Fi)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let I=t.update(A),H=A.material;if(Array.isArray(H)){let Z=I.groups;for(let V=0,lt=Z.length;V<lt;V++){let Y=Z[V],st=H[Y.materialIndex];if(st&&st.visible){let rt=E(A,st,U,N);A.onBeforeShadow(i,A,g,S,I,rt,Y),i.renderBufferDirect(S,null,I,rt,A,Y),A.onAfterShadow(i,A,g,S,I,rt,Y)}}}else if(H.visible){let Z=E(A,H,U,N);A.onBeforeShadow(i,A,g,S,I,Z,null),i.renderBufferDirect(S,null,I,Z,A,null),A.onAfterShadow(i,A,g,S,I,Z,null)}}let W=A.children;for(let I=0,H=W.length;I<H;I++)v(W[I],g,S,U,R,N)}function w(A){A.target.removeEventListener("dispose",w);for(let S in c){let U=c[S],R=A.target.uuid;R in U&&(U[R].dispose(),delete U[R])}}}function Ag(i,t){function e(){let C=!1,it=new ge,J=null,gt=new ge(0,0,0,0);return{setMask:function(ut){J!==ut&&!C&&(i.colorMask(ut,ut,ut,ut),J=ut)},setLocked:function(ut){C=ut},setClear:function(ut,pt,Bt,jt,ct){ct===!0&&(ut*=jt,pt*=jt,Bt*=jt),it.set(ut,pt,Bt,jt),gt.equals(it)===!1&&(i.clearColor(ut,pt,Bt,jt),gt.copy(it))},reset:function(){C=!1,J=null,gt.set(-1,0,0,0)}}}function n(){let C=!1,it=!1,J=null,gt=null,ut=null;return{setReversed:function(pt){if(it!==pt){let Bt=t.get("EXT_clip_control");pt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),it=pt;let jt=ut;ut=null,this.setClear(jt)}},getReversed:function(){return it},setTest:function(pt){pt?St(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(pt){J!==pt&&!C&&(i.depthMask(pt),J=pt)},setFunc:function(pt){if(it&&(pt=Yc[pt]),gt!==pt){switch(pt){case _r:i.depthFunc(i.NEVER);break;case xr:i.depthFunc(i.ALWAYS);break;case vr:i.depthFunc(i.LESS);break;case Si:i.depthFunc(i.LEQUAL);break;case yr:i.depthFunc(i.EQUAL);break;case Mr:i.depthFunc(i.GEQUAL);break;case Sr:i.depthFunc(i.GREATER);break;case br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=pt}},setLocked:function(pt){C=pt},setClear:function(pt){ut!==pt&&(ut=pt,it&&(pt=1-pt),i.clearDepth(pt))},reset:function(){C=!1,J=null,gt=null,ut=null,it=!1}}}function s(){let C=!1,it=null,J=null,gt=null,ut=null,pt=null,Bt=null,jt=null,ct=null;return{setTest:function(Ht){C||(Ht?St(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(Ht){it!==Ht&&!C&&(i.stencilMask(Ht),it=Ht)},setFunc:function(Ht,Qt,Et){(J!==Ht||gt!==Qt||ut!==Et)&&(i.stencilFunc(Ht,Qt,Et),J=Ht,gt=Qt,ut=Et)},setOp:function(Ht,Qt,Et){(pt!==Ht||Bt!==Qt||jt!==Et)&&(i.stencilOp(Ht,Qt,Et),pt=Ht,Bt=Qt,jt=Et)},setLocked:function(Ht){C=Ht},setClear:function(Ht){ct!==Ht&&(i.clearStencil(Ht),ct=Ht)},reset:function(){C=!1,it=null,J=null,gt=null,ut=null,pt=null,Bt=null,jt=null,ct=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},p={},u={},d=new WeakMap,_=[],b=null,f=!1,m=null,M=null,E=null,v=null,w=null,A=null,g=null,S=new te(0,0,0),U=0,R=!1,N=null,O=null,W=null,I=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,lt=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=lt>=1):Y.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=lt>=2);let st=null,rt={},At=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),K=new ge().fromArray(At),Mt=new ge().fromArray(Vt);function Rt(C,it,J,gt){let ut=new Uint8Array(4),pt=i.createTexture();i.bindTexture(C,pt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<J;Bt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(it+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return pt}let zt={};zt[i.TEXTURE_2D]=Rt(i.TEXTURE_2D,i.TEXTURE_2D,1),zt[i.TEXTURE_CUBE_MAP]=Rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),zt[i.TEXTURE_2D_ARRAY]=Rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),zt[i.TEXTURE_3D]=Rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(i.DEPTH_TEST),a.setFunc(Si),F(!1),j(Do),St(i.CULL_FACE),tt(ii);function St(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function kt(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function ue(C,it){return u[C]!==it?(i.bindFramebuffer(C,it),u[C]=it,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Wt(C,it){let J=_,gt=!1;if(C){J=d.get(it),J===void 0&&(J=[],d.set(it,J));let ut=C.textures;if(J.length!==ut.length||J[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Bt=ut.length;pt<Bt;pt++)J[pt]=i.COLOR_ATTACHMENT0+pt;J.length=ut.length,gt=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,gt=!0);gt&&i.drawBuffers(J)}function Kt(C){return b!==C?(i.useProgram(C),b=C,!0):!1}let Q={[si]:i.FUNC_ADD,[mc]:i.FUNC_SUBTRACT,[gc]:i.FUNC_REVERSE_SUBTRACT};Q[_c]=i.MIN,Q[xc]=i.MAX;let z={[vc]:i.ZERO,[yc]:i.ONE,[Mc]:i.SRC_COLOR,[Oo]:i.SRC_ALPHA,[wc]:i.SRC_ALPHA_SATURATE,[Tc]:i.DST_COLOR,[bc]:i.DST_ALPHA,[Sc]:i.ONE_MINUS_SRC_COLOR,[Bo]:i.ONE_MINUS_SRC_ALPHA,[Ac]:i.ONE_MINUS_DST_COLOR,[Ec]:i.ONE_MINUS_DST_ALPHA,[Rc]:i.CONSTANT_COLOR,[Cc]:i.ONE_MINUS_CONSTANT_COLOR,[Ic]:i.CONSTANT_ALPHA,[Pc]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(C,it,J,gt,ut,pt,Bt,jt,ct,Ht){if(C===ii){f===!0&&(kt(i.BLEND),f=!1);return}if(f===!1&&(St(i.BLEND),f=!0),C!==pc){if(C!==m||Ht!==R){if((M!==si||w!==si)&&(i.blendEquation(i.FUNC_ADD),M=si,w=si),Ht)switch(C){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case No:i.blendFunc(i.ONE,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",C);break}else switch(C){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case No:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uo:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fo:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",C);break}E=null,v=null,A=null,g=null,S.set(0,0,0),U=0,m=C,R=Ht}return}ut=ut||it,pt=pt||J,Bt=Bt||gt,(it!==M||ut!==w)&&(i.blendEquationSeparate(Q[it],Q[ut]),M=it,w=ut),(J!==E||gt!==v||pt!==A||Bt!==g)&&(i.blendFuncSeparate(z[J],z[gt],z[pt],z[Bt]),E=J,v=gt,A=pt,g=Bt),(jt.equals(S)===!1||ct!==U)&&(i.blendColor(jt.r,jt.g,jt.b,ct),S.copy(jt),U=ct),m=C,R=!1}function X(C,it){C.side===fn?kt(i.CULL_FACE):St(i.CULL_FACE);let J=C.side===ze;it&&(J=!J),F(J),C.blending===Oi&&C.transparent===!1?tt(ii):tt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let gt=C.stencilWrite;o.setTest(gt),gt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),dt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function F(C){N!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),N=C)}function j(C){C!==dc?(St(i.CULL_FACE),C!==O&&(C===Do?i.cullFace(i.BACK):C===fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),O=C}function bt(C){C!==W&&(V&&i.lineWidth(C),W=C)}function dt(C,it,J){C?(St(i.POLYGON_OFFSET_FILL),(I!==it||H!==J)&&(I=it,H=J,a.getReversed()&&(it=-it,J=-J),i.polygonOffset(it,J))):kt(i.POLYGON_OFFSET_FILL)}function Ut(C){C?St(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function It(C){C===void 0&&(C=i.TEXTURE0+Z-1),st!==C&&(i.activeTexture(C),st=C)}function Ot(C,it,J){J===void 0&&(st===null?J=i.TEXTURE0+Z-1:J=st);let gt=rt[J];gt===void 0&&(gt={type:void 0,texture:void 0},rt[J]=gt),(gt.type!==C||gt.texture!==it)&&(st!==J&&(i.activeTexture(J),st=J),i.bindTexture(C,it||zt[C]),gt.type=C,gt.texture=it)}function P(){let C=rt[st];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(C){qt("WebGLState:",C)}}function Dt(){try{i.compressedTexImage3D(...arguments)}catch(C){qt("WebGLState:",C)}}function Ft(){try{i.texSubImage2D(...arguments)}catch(C){qt("WebGLState:",C)}}function at(){try{i.texSubImage3D(...arguments)}catch(C){qt("WebGLState:",C)}}function $t(){try{i.compressedTexSubImage2D(...arguments)}catch(C){qt("WebGLState:",C)}}function vt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){qt("WebGLState:",C)}}function Gt(){try{i.texStorage2D(...arguments)}catch(C){qt("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){qt("WebGLState:",C)}}function x(){try{i.texImage2D(...arguments)}catch(C){qt("WebGLState:",C)}}function B(){try{i.texImage3D(...arguments)}catch(C){qt("WebGLState:",C)}}function ot(C){return p[C]!==void 0?p[C]:i.getParameter(C)}function nt(C,it){p[C]!==it&&(i.pixelStorei(C,it),p[C]=it)}function ht(C){K.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function ft(C){Mt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Mt.copy(C))}function $(C,it){let J=c.get(it);J===void 0&&(J=new WeakMap,c.set(it,J));let gt=J.get(C);gt===void 0&&(gt=i.getUniformBlockIndex(it,C.name),i.uniformBlockBinding(it,gt,gt),J.set(C,gt))}function et(C,it,J){let ut=c.get(it).get(C);l[ut]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,ut,J),l[ut]=J)}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},st=null,rt={},u={},l={},d=new WeakMap,_=[],b=null,f=!1,m=null,M=null,E=null,v=null,w=null,A=null,g=null,S=new te(0,0,0),U=0,R=!1,N=null,O=null,W=null,I=null,H=null,K.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:St,disable:kt,bindFramebuffer:ue,drawBuffers:Wt,useProgram:Kt,setBlending:tt,setMaterial:X,setFlipSided:F,setCullFace:j,setLineWidth:bt,setPolygonOffset:dt,setScissorTest:Ut,activeTexture:It,bindTexture:Ot,unbindTexture:P,compressedTexImage2D:Yt,compressedTexImage3D:Dt,texImage2D:x,texImage3D:B,pixelStorei:nt,getParameter:ot,updateUBOMapping:$,uniformBlockBinding:et,texStorage2D:Gt,texStorage3D:T,texSubImage2D:Ft,texSubImage3D:at,compressedTexSubImage2D:$t,compressedTexSubImage3D:vt,scissor:ht,viewport:ft,reset:mt}}function wg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,p=new Set,u,d=new WeakMap,_=new Set,b=new FinalizationRegistry(T=>_.delete(T)),f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,x){return f?new OffscreenCanvas(T,x):es("canvas")}function M(T,x,B){let ot=1,nt=Gt(T);if((nt.width>B||nt.height>B)&&(ot=B/Math.max(nt.width,nt.height)),ot<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ht=Math.floor(ot*nt.width),ft=Math.floor(ot*nt.height);u===void 0&&(u=m(ht,ft));let $=x?m(ht,ft):u;return $.width=ht,$.height=ft,$.getContext("2d").drawImage(T,0,0,ht,ft),Xt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ht+"x"+ft+")."),$}else return"data"in T&&Xt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function E(T){return T.generateMipmaps}function v(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,x,B,ot,nt,ht=!1){if(T!==null){if(i[T]!==void 0)return i[T];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ft;ot&&(ft=t.get("EXT_texture_norm16"),ft||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===i.RED&&(B===i.FLOAT&&($=i.R32F),B===i.HALF_FLOAT&&($=i.R16F),B===i.UNSIGNED_BYTE&&($=i.R8),B===i.UNSIGNED_SHORT&&ft&&($=ft.R16_EXT),B===i.SHORT&&ft&&($=ft.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.R8UI),B===i.UNSIGNED_SHORT&&($=i.R16UI),B===i.UNSIGNED_INT&&($=i.R32UI),B===i.BYTE&&($=i.R8I),B===i.SHORT&&($=i.R16I),B===i.INT&&($=i.R32I)),x===i.RG&&(B===i.FLOAT&&($=i.RG32F),B===i.HALF_FLOAT&&($=i.RG16F),B===i.UNSIGNED_BYTE&&($=i.RG8),B===i.UNSIGNED_SHORT&&ft&&($=ft.RG16_EXT),B===i.SHORT&&ft&&($=ft.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RG8UI),B===i.UNSIGNED_SHORT&&($=i.RG16UI),B===i.UNSIGNED_INT&&($=i.RG32UI),B===i.BYTE&&($=i.RG8I),B===i.SHORT&&($=i.RG16I),B===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGB8UI),B===i.UNSIGNED_SHORT&&($=i.RGB16UI),B===i.UNSIGNED_INT&&($=i.RGB32UI),B===i.BYTE&&($=i.RGB8I),B===i.SHORT&&($=i.RGB16I),B===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&($=i.RGBA8UI),B===i.UNSIGNED_SHORT&&($=i.RGBA16UI),B===i.UNSIGNED_INT&&($=i.RGBA32UI),B===i.BYTE&&($=i.RGBA8I),B===i.SHORT&&($=i.RGBA16I),B===i.INT&&($=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&ft&&($=ft.RGB16_EXT),B===i.SHORT&&ft&&($=ft.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){let et=ht?ts:re.getTransfer(nt);B===i.FLOAT&&($=i.RGBA32F),B===i.HALF_FLOAT&&($=i.RGBA16F),B===i.UNSIGNED_BYTE&&($=et===le?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ft&&($=ft.RGBA16_EXT),B===i.SHORT&&ft&&($=ft.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function g(T,x){let B;return T?x===null||x===nn||x===ai?B=i.DEPTH24_STENCIL8:x===sn?B=i.DEPTH32F_STENCIL8:x===zi&&(B=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===nn||x===ai?B=i.DEPTH_COMPONENT24:x===sn?B=i.DEPTH_COMPONENT32F:x===zi&&(B=i.DEPTH_COMPONENT16),B}function S(T,x){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==we&&T.minFilter!==Be?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function U(T){let x=new WeakRef(T);n.get(T).__ref=x,_.add(x),b.register(T,x,x)}function R(T){let x=n.get(T).__ref;x!==void 0&&(_.delete(x),b.unregister(x))}function N(T){W(T.target)}function O(T){I(T.target)}function W(T){T.removeEventListener("dispose",N),R(T),Z(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&p.delete(T)}function I(T){T.removeEventListener("dispose",O),R(T),lt(T)}function H(){for(let T of _){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):W(x))}_.clear(),p.clear()}function Z(T){let x=n.get(T);if(x.__webglInit===void 0)return;let B=T.source,ot=d.get(B);if(ot){let nt=ot[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&V(T),Object.keys(ot).length===0&&d.delete(B)}n.remove(T)}function V(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let B=T.source,ot=d.get(B);delete ot[x.__cacheKey],a.memory.textures--}function lt(T){let x=n.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=T.depthTexture;if(B&&B.renderTarget===T&&W(B),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(x.__webglFramebuffer[nt]))for(let ht=0;ht<x.__webglFramebuffer[nt].length;ht++)i.deleteFramebuffer(x.__webglFramebuffer[nt][ht]);else i.deleteFramebuffer(x.__webglFramebuffer[nt]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[nt])}else{if(Array.isArray(x.__webglFramebuffer))for(let nt=0;nt<x.__webglFramebuffer.length;nt++)i.deleteFramebuffer(x.__webglFramebuffer[nt]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let nt=0;nt<x.__webglColorRenderbuffer.length;nt++)x.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[nt]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ot=T.textures;for(let nt=0,ht=ot.length;nt<ht;nt++){let ft=n.get(ot[nt]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(ot[nt])}n.remove(T)}let Y=0;function st(){Y=0}function rt(){return Y}function At(T){Y=T}function Vt(){let T=Y;return T>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,T}function K(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Mt(T,x){let B=n.get(T);if(T.isVideoTexture&&$t(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let ot=T.image;if(ot===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Rt(T,x){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){X(B,T,x);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function zt(T,x){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){X(B,T,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function St(T,x){let B=n.get(T);if(T.version>0&&B.__version!==T.version){F(B,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let kt={[Er]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},ue={[we]:i.NEAREST,[Nc]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[ra]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},Wt={[Bc]:i.NEVER,[nl]:i.ALWAYS,[zc]:i.LESS,[tl]:i.LEQUAL,[kc]:i.EQUAL,[el]:i.GEQUAL,[Gc]:i.GREATER,[Vc]:i.NOTEQUAL};function Kt(T,x){if(x.type===sn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Be||x.magFilter===ra||x.magFilter===Ns||x.magFilter===wn||x.minFilter===Be||x.minFilter===ra||x.minFilter===Ns||x.minFilter===wn)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,kt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,kt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,kt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ue[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Wt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===we||x.minFilter!==Ns&&x.minFilter!==wn||x.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Q(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",N),U(x));let ot=x.source,nt=d.get(ot);nt===void 0&&(nt={},d.set(ot,nt));let ht=K(x);if(ht!==T.__cacheKey){nt[ht]===void 0&&(nt[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),nt[ht].usedTimes++;let ft=nt[T.__cacheKey];ft!==void 0&&(nt[T.__cacheKey].usedTimes--,ft.usedTimes===0&&V(x)),T.__cacheKey=ht,T.__webglTexture=nt[ht].texture}return B}function z(T,x,B){return Math.floor(Math.floor(T/B)/x)}function tt(T,x,B,ot){let ht=T.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,ot,x.data);else{ht.sort((C,it)=>C.start-it.start);let ft=0;for(let C=1;C<ht.length;C++){let it=ht[ft],J=ht[C],gt=it.start+it.count,ut=z(J.start,x.width,4),pt=z(it.start,x.width,4);J.start<=gt+1&&ut===pt&&z(J.start+J.count-1,x.width,4)===ut?it.count=Math.max(it.count,J.start+J.count-it.start):(++ft,ht[ft]=J)}ht.length=ft+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let C=0,it=ht.length;C<it;C++){let J=ht[C],gt=Math.floor(J.start/4),ut=Math.ceil(J.count/4),pt=gt%x.width,Bt=Math.floor(gt/x.width),jt=ut,ct=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Bt),e.texSubImage2D(i.TEXTURE_2D,0,pt,Bt,jt,ct,B,ot,x.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function X(T,x,B){let ot=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ot=i.TEXTURE_3D);let nt=Q(T,x),ht=x.source;e.bindTexture(ot,T.__webglTexture,i.TEXTURE0+B);let ft=n.get(ht);if(ht.version!==ft.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ct=re.getPrimaries(re.workingColorSpace),Ht=x.colorSpace===Cn?null:re.getPrimaries(x.colorSpace),Qt=x.colorSpace===Cn||ct===Ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let et=M(x.image,!1,s.maxTextureSize);et=vt(x,et);let mt=r.convert(x.format,x.colorSpace),C=r.convert(x.type),it=A(x.internalFormat,mt,C,x.normalized,x.colorSpace,x.isVideoTexture);Kt(ot,x);let J,gt=x.mipmaps,ut=x.isVideoTexture!==!0,pt=ft.__version===void 0||nt===!0,Bt=ht.dataReady,jt=S(x,et);if(x.isDepthTexture)it=g(x.format===Rn,x.type),pt&&(ut?e.texStorage2D(i.TEXTURE_2D,1,it,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,it,et.width,et.height,0,mt,C,null));else if(x.isDataTexture)if(gt.length>0){ut&&pt&&e.texStorage2D(i.TEXTURE_2D,jt,it,gt[0].width,gt[0].height);for(let ct=0,Ht=gt.length;ct<Ht;ct++)J=gt[ct],ut?Bt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,J.width,J.height,mt,C,J.data):e.texImage2D(i.TEXTURE_2D,ct,it,J.width,J.height,0,mt,C,J.data);x.generateMipmaps=!1}else ut?(pt&&e.texStorage2D(i.TEXTURE_2D,jt,it,et.width,et.height),Bt&&tt(x,et,mt,C)):e.texImage2D(i.TEXTURE_2D,0,it,et.width,et.height,0,mt,C,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ut&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,it,gt[0].width,gt[0].height,et.depth);for(let ct=0,Ht=gt.length;ct<Ht;ct++)if(J=gt[ct],x.format!==an)if(mt!==null)if(ut){if(Bt)if(x.layerUpdates.size>0){let Qt=hl(J.width,J.height,x.format,x.type);for(let Et of x.layerUpdates){let ce=J.data.subarray(Et*Qt/J.data.BYTES_PER_ELEMENT,(Et+1)*Qt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Et,J.width,J.height,1,mt,ce)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,J.width,J.height,et.depth,mt,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,it,J.width,J.height,et.depth,0,J.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?Bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,J.width,J.height,et.depth,mt,C,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,it,J.width,J.height,et.depth,0,mt,C,J.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ut&&pt&&e.texStorage2D(i.TEXTURE_2D,jt,it,gt[0].width,gt[0].height);for(let ct=0,Ht=gt.length;ct<Ht;ct++)J=gt[ct],x.format!==an?mt!==null?ut?Bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,J.width,J.height,mt,J.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,it,J.width,J.height,0,J.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?Bt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,J.width,J.height,mt,C,J.data):e.texImage2D(i.TEXTURE_2D,ct,it,J.width,J.height,0,mt,C,J.data)}else if(x.isDataArrayTexture)if(ut){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,it,et.width,et.height,et.depth),Bt)if(x.layerUpdates.size>0){let ct=hl(et.width,et.height,x.format,x.type);for(let Ht of x.layerUpdates){let Qt=et.data.subarray(Ht*ct/et.data.BYTES_PER_ELEMENT,(Ht+1)*ct/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ht,et.width,et.height,1,mt,C,Qt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,C,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,it,et.width,et.height,et.depth,0,mt,C,et.data);else if(x.isData3DTexture)ut?(pt&&e.texStorage3D(i.TEXTURE_3D,jt,it,et.width,et.height,et.depth),Bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,C,et.data)):e.texImage3D(i.TEXTURE_3D,0,it,et.width,et.height,et.depth,0,mt,C,et.data);else if(x.isFramebufferTexture){if(pt)if(ut)e.texStorage2D(i.TEXTURE_2D,jt,it,et.width,et.height);else{let ct=et.width,Ht=et.height;for(let Qt=0;Qt<jt;Qt++)e.texImage2D(i.TEXTURE_2D,Qt,it,ct,Ht,0,mt,C,null),ct>>=1,Ht>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ct=i.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),et.parentNode!==ct){ct.appendChild(et),p.add(x),ct.onpaint=Ht=>{let Qt=Ht.changedElements;for(let Et of p)Qt.includes(Et.image)&&(Et.needsUpdate=!0)},ct.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let Qt=i.RGBA,Et=i.RGBA,ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qt,Et,ce,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ut&&pt){let ct=Gt(gt[0]);e.texStorage2D(i.TEXTURE_2D,jt,it,ct.width,ct.height)}for(let ct=0,Ht=gt.length;ct<Ht;ct++)J=gt[ct],ut?Bt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,mt,C,J):e.texImage2D(i.TEXTURE_2D,ct,it,mt,C,J);x.generateMipmaps=!1}else if(ut){if(pt){let ct=Gt(et);e.texStorage2D(i.TEXTURE_2D,jt,it,ct.width,ct.height)}Bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,C,et)}else e.texImage2D(i.TEXTURE_2D,0,it,mt,C,et);E(x)&&x.mipmapsAutoUpdate===!0&&v(ot),ft.__version=ht.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function F(T,x,B){if(x.image.length!==6)return;let ot=Q(T,x),nt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let ht=n.get(nt);if(nt.version!==ht.__version||ot===!0){e.activeTexture(i.TEXTURE0+B);let ft=re.getPrimaries(re.workingColorSpace),$=x.colorSpace===Cn?null:re.getPrimaries(x.colorSpace),et=x.colorSpace===Cn||ft===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let mt=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,it=[];for(let Et=0;Et<6;Et++)!mt&&!C?it[Et]=M(x.image[Et],!0,s.maxCubemapSize):it[Et]=C?x.image[Et].image:x.image[Et],it[Et]=vt(x,it[Et]);let J=it[0],gt=r.convert(x.format,x.colorSpace),ut=r.convert(x.type),pt=A(x.internalFormat,gt,ut,x.normalized,x.colorSpace),Bt=x.isVideoTexture!==!0,jt=ht.__version===void 0||ot===!0,ct=nt.dataReady,Ht=S(x,J);Kt(i.TEXTURE_CUBE_MAP,x);let Qt;if(x.isDepthTexture){if(pt=g(x.format===Rn,x.type),jt)if(Bt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,pt,J.width,J.height);else for(let Et=0;Et<6;Et++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,pt,J.width,J.height,0,gt,ut,null)}else if(mt){Bt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,pt,J.width,J.height);for(let Et=0;Et<6;Et++){Qt=it[Et].mipmaps;for(let ce=0;ce<Qt.length;ce++){let be=Qt[ce];x.format!==an?gt!==null?Bt?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,0,0,be.width,be.height,gt,be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,pt,be.width,be.height,0,be.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,0,0,be.width,be.height,gt,ut,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce,pt,be.width,be.height,0,gt,ut,be.data)}}}else{if(Qt=x.mipmaps,Bt&&jt){Qt.length>0&&Ht++;let Et=Gt(it[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ht,pt,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(C){Bt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,it[Et].width,it[Et].height,gt,ut,it[Et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,pt,it[Et].width,it[Et].height,0,gt,ut,it[Et].data);for(let ce=0;ce<Qt.length;ce++){let In=Qt[ce].image[Et].image;Bt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,0,0,In.width,In.height,gt,ut,In.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,pt,In.width,In.height,0,gt,ut,In.data)}}else{Bt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,gt,ut,it[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,pt,gt,ut,it[Et]);for(let ce=0;ce<Qt.length;ce++){let be=Qt[ce];Bt?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,0,0,gt,ut,be.image[Et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,ce+1,pt,gt,ut,be.image[Et])}}}E(x)&&x.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),ht.__version=nt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function j(T,x,B,ot,nt,ht){let ft=r.convert(B.format,B.colorSpace),$=r.convert(B.type),et=A(B.internalFormat,ft,$,B.normalized,B.colorSpace),mt=n.get(x),C=n.get(B);if(C.__renderTarget=x,!mt.__hasExternalTextures){let it=Math.max(1,x.width>>ht),J=Math.max(1,x.height>>ht);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,ht,et,it,J,x.depth,0,ft,$,null):e.texImage2D(nt,ht,et,it,J,0,ft,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),at(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,nt,C.__webglTexture,0,Ft(x)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,nt,C.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let ot=x.depthTexture,nt=ot&&ot.isDepthTexture?ot.type:null,ht=g(x.stencilBuffer,nt),ft=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;at(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(x),ht,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(x),ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,T)}else{let ot=x.textures;for(let nt=0;nt<ot.length;nt++){let ht=ot[nt],ft=r.convert(ht.format,ht.colorSpace),$=r.convert(ht.type),et=A(ht.internalFormat,ft,$,ht.normalized,ht.colorSpace);at(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(x),et,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(x),et,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,et,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(T,x,B){let ot=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(x.depthTexture);nt.__renderTarget=x;let ht=ot?x.depthTexture.image[0]:x.depthTexture.image;(!nt.__webglTexture||ht.width!==x.width||ht.height!==x.height)&&(ht.width=x.width,ht.height=x.height,x.depthTexture.needsUpdate=!0),ot?St(x.depthTexture,0):Mt(x.depthTexture,0);let ft=nt.__webglTexture,$=Ft(x),et=ot?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,mt=x.depthTexture.format===Rn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===En)at(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,et,ft,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,mt,et,ft,0);else if(x.depthTexture.format===Rn)at(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,mt,et,ft,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,mt,et,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(T){let x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let ot=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ot){let nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ot.removeEventListener("dispose",nt)};ot.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=ot}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let ot=0;ot<6;ot++)dt(x.__webglFramebuffer[ot],T,ot);else T.texture.mipmaps.length>0?dt(x.__webglFramebuffer[0],T,0):dt(x.__webglFramebuffer,T,0);else if(B){x.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[ot]),x.__webglDepthbuffer[ot]===void 0)x.__webglDepthbuffer[ot]=i.createRenderbuffer(),bt(x.__webglDepthbuffer[ot],T,!1);else{let nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ht)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),bt(x.__webglDepthbuffer,T,!1);else{let nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(T,x,B){let ot=n.get(T);x!==void 0&&j(ot.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ut(T)}function Ot(T){let x=T.texture,B=n.get(T),ot=n.get(x);T.addEventListener("dispose",O),U(T);let nt=T.textures,ht=T.isWebGLCubeRenderTarget===!0,ft=nt.length>1;if(ft||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=x.version,a.memory.textures++),ht){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let et=0;et<x.mipmaps.length;et++)B.__webglFramebuffer[$][et]=i.createFramebuffer()}else B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ft)for(let $=0,et=nt.length;$<et;$++){let mt=n.get(nt[$]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&at(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<nt.length;$++){let et=nt[$];B.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let mt=r.convert(et.format,et.colorSpace),C=r.convert(et.type),it=A(et.internalFormat,mt,C,et.normalized,et.colorSpace,T.isXRRenderTarget===!0),J=Ft(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,it,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,B.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)j(B.__webglFramebuffer[$][et],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,et);else j(B.__webglFramebuffer[$],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);E(x)?v(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(ft){for(let $=0,et=nt.length;$<et;$++){let mt=nt[$],C=n.get(mt),it=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(it=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,C.__webglTexture),Kt(it,mt),j(B.__webglFramebuffer,T,mt,i.COLOR_ATTACHMENT0+$,it,0),E(mt)&&v(it)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,ot.__webglTexture),Kt($,x),x.mipmaps.length>0)for(let et=0;et<x.mipmaps.length;et++)j(B.__webglFramebuffer[et],T,x,i.COLOR_ATTACHMENT0,$,et);else j(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,$,0);E(x)?v($):x.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Ut(T)}function P(T){let x=T.textures;for(let B=0,ot=x.length;B<ot;B++){let nt=x[B];if(E(nt)&&nt.mipmapsAutoUpdate===!0){let ht=w(T),ft=n.get(nt).__webglTexture;e.bindTexture(ht,ft),v(ht),e.unbindTexture()}}}let Yt=[];function Dt(T){if(T.samples>0){if(at(T)===!1){let x=T.textures,B=T.width,ot=T.height,nt=i.COLOR_BUFFER_BIT,ht=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(T),$=x.length>1;if($)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let C=n.get(x[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,B,ot,0,0,B,ot,nt,i.NEAREST),l===!0&&(Yt.length=0,Yt.push(i.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Yt.push(ht),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let C=n.get(x[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ft(T){return Math.min(s.maxSamples,T.samples)}function at(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function $t(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function vt(T,x){let B=T.colorSpace,ot=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==ji&&B!==Cn&&(re.getTransfer(B)===le?(ot!==an||nt!==He)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",B)),x}function Gt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Vt,this.resetTextureUnits=st,this.getTextureUnits=rt,this.setTextureUnits=At,this.setTexture2D=Mt,this.setTexture2DArray=Rt,this.setTexture3D=zt,this.setTextureCube=St,this.rebindTextures=It,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=j,this.useMultisampledRTT=at,this.dispose=H}function Rg(i,t){function e(n,s=Cn){let r,a=re.getTransfer(s);if(n===He)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$o)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yo)return i.BYTE;if(n===Zo)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===aa)return i.INT;if(n===nn)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===Ko)return i.ALPHA;if(n===Qo)return i.RGB;if(n===an)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===Rn)return i.DEPTH_STENCIL;if(n===jo)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===qn)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===ua)return i.RGBA_INTEGER;if(n===Us||n===Fs||n===Os||n===Bs)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ga||n===_a||n===xa||n===va||n===ya||n===zs||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ga||n===_a)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===va)return r.COMPRESSED_R11_EAC;if(n===ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zs)return r.COMPRESSED_RG11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sa||n===ba||n===Ea||n===Ta||n===Aa||n===wa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Na||n===Ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ba)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ta)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fa||n===Oa||n===Ba)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fa)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===ka||n===ks||n===Ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
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

}`,El=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new dn({vertexShader:Cg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tl=class extends hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,_=null,b=typeof XRWebGLBinding<"u",f=new El,m={},M=e.getContextAttributes(),E=null,v=null,w=[],A=[],g=new _t,S=null,U=null,R=new Oe;R.viewport=new ge;let N=new Oe;N.viewport=new ge;let O=[R,N],W=new ta,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Mt=w[K];return Mt===void 0&&(Mt=new Ai,w[K]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(K){let Mt=w[K];return Mt===void 0&&(Mt=new Ai,w[K]=Mt),Mt.getGripSpace()},this.getHand=function(K){let Mt=w[K];return Mt===void 0&&(Mt=new Ai,w[K]=Mt),Mt.getHandSpace()};function Z(K){let Mt=A.indexOf(K.inputSource);if(Mt===-1)return;let Rt=w[Mt];Rt!==void 0&&(Rt.update(K.inputSource,K.frame,c||a),Rt.dispatchEvent({type:K.type,data:K.inputSource}))}function V(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",lt);for(let K=0;K<w.length;K++){let Mt=A[K];Mt!==null&&(A[K]=null,w[K].disconnect(Mt))}I=null,H=null,f.reset();for(let K in m)delete m[K];if(t.setRenderTarget(E),d=null,u=null,p=null,s=null,v=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(g.width,g.height,!1),U!==null){let K=U.camera;K.fov=U.fov,K.zoom=U.zoom,K.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",lt),M.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(g),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,zt=null,St=null;M.depth&&(St=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=M.stencil?Rn:En,zt=M.stencil?ai:nn);let kt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new qe(u.textureWidth,u.textureHeight,{format:an,type:He,depthTexture:new An(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Rt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new qe(d.framebufferWidth,d.framebufferHeight,{format:an,type:He,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function lt(K){for(let Mt=0;Mt<K.removed.length;Mt++){let Rt=K.removed[Mt],zt=A.indexOf(Rt);zt>=0&&(A[zt]=null,w[zt].disconnect(Rt))}for(let Mt=0;Mt<K.added.length;Mt++){let Rt=K.added[Mt],zt=A.indexOf(Rt);if(zt===-1){for(let kt=0;kt<w.length;kt++)if(kt>=A.length){A.push(Rt),zt=kt;break}else if(A[kt]===null){A[kt]=Rt,zt=kt;break}if(zt===-1)break}let St=w[zt];St&&St.connect(Rt)}}function Y(K,Mt){Mt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Mt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Mt=K.near,Rt=K.far;f.texture!==null&&(f.depthNear>0&&(Mt=f.depthNear),f.depthFar>0&&(Rt=f.depthFar)),W.near=N.near=R.near=Mt,W.far=N.far=R.far=Rt,(I!==W.near||H!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),I=W.near,H=W.far),W.layers.mask=K.layers.mask|6,R.layers.mask=W.layers.mask&-5,N.layers.mask=W.layers.mask&-3;let zt=K.parent,St=W.cameras;Y(W,zt);for(let kt=0;kt<St.length;kt++)Y(St[kt],zt);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),U===null&&K.isPerspectiveCamera&&(U={camera:K,fov:K.fov,zoom:K.zoom}),st(K,W,zt)};function st(K,Mt,Rt){Rt===null?K.matrix.copy(Mt.matrixWorld):(K.matrix.copy(Rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(Mt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Mt.projectionMatrix),K.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=wr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(W)},this.getCameraTexture=function(K){return m[K]};let rt=null;function At(K,Mt){if(h=Mt.getViewerPose(c||a),_=Mt,h!==null){let Rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let zt=!1;Rt.length!==W.cameras.length&&(W.cameras.length=0,zt=!0);for(let Wt=0;Wt<Rt.length;Wt++){let Kt=Rt[Wt],Q=null;if(d!==null)Q=d.getViewport(Kt);else{let tt=p.getViewSubImage(u,Kt);Q=tt.viewport,Wt===0&&(t.setRenderTargetTextures(v,tt.colorTexture,tt.depthStencilTexture),t.setRenderTarget(v))}let z=O[Wt];z===void 0&&(z=new Oe,z.layers.enable(Wt),z.viewport=new ge,O[Wt]=z),z.matrix.fromArray(Kt.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Kt.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Q.x,Q.y,Q.width,Q.height),Wt===0&&(W.matrix.copy(z.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),zt===!0&&W.cameras.push(z)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let Wt=p.getDepthInformation(Rt[0]);Wt&&Wt.isValid&&Wt.texture&&f.init(Wt,s.renderState)}if(St&&St.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let Wt=0;Wt<Rt.length;Wt++){let Kt=Rt[Wt].camera;if(Kt){let Q=m[Kt];Q||(Q=new hs,m[Kt]=Q);let z=p.getCameraImage(Kt);Q.sourceTexture=z}}}}for(let Rt=0;Rt<w.length;Rt++){let zt=A[Rt],St=w[Rt];zt!==null&&St!==void 0&&St.update(zt,Mt,c||a)}rt&&rt(K,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),_=null}let Vt=new Eh;Vt.setAnimationLoop(At),this.setAnimationLoop=function(K){rt=K},this.dispose=function(){}}},Pg=new me,Nh=new Zt;Nh.set(-1,0,0,0,1,0,0,0,1);function Lg(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,ol(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,M,E,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(f,m):m.isMeshLambertMaterial?(r(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(f,m),p(f,m)):m.isMeshPhongMaterial?(r(f,m),h(f,m),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(f,m),u(f,m),m.isMeshPhysicalMaterial&&d(f,m,v)):m.isMeshMatcapMaterial?(r(f,m),_(f,m)):m.isMeshDepthMaterial?r(f,m):m.isMeshDistanceMaterial?(r(f,m),b(f,m)):m.isMeshNormalMaterial?r(f,m):m.isLineBasicMaterial?(a(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?l(f,m,M,E):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===ze&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===ze&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let M=t.get(m),E=M.envMap,v=M.envMapRotation;E&&(f.envMap.value=E,f.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Nh),f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function a(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function l(f,m,M,E){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*M,f.scale.value=E*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function p(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function d(f,m,M){f.ior.value=m.ior,m.diffuseRoughness>0&&(f.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ze&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.retroreflectivity>0&&(f.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,m){m.matcap&&(f.matcap.value=m.matcap)}function b(f,m){let M=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dg(i,t,e,n){let s={},r={};function a(M,E){let v=E.program;n.uniformBlockBinding(M,v,s[M.id])}function o(M,E){let v=s[M.id];v===void 0&&(_(M),v=l(M),s[M.id]=v,M.addEventListener("dispose",f));let w=E.program;n.updateUBOMapping(M,w);let A=t.render.frame;r[M.id]!==A&&(c(M),r[M.id]=A)}function l(M){let E=i.createBuffer(),v=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,v,w),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(M){let E=s[M.id],v=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,g=v.length;A<g;A++){let S=v[A];if(Array.isArray(S))for(let U=0,R=S.length;U<R;U++)h(S[U],A,U,w);else h(S,A,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,E,v,w){if(u(M,E,v,w)===!0){let A=M.__offset,g=M.value;if(Array.isArray(g)){let S=0;for(let U=0;U<g.length;U++){let R=g[U],N=b(R,!0);p(R,M.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else p(g,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function p(M,E,v){typeof M=="number"||typeof M=="boolean"?E[v]=M:M.isMatrix3?(E[v]=M.elements[0],E[v+1]=M.elements[1],E[v+2]=M.elements[2],E[v+3]=0,E[v+4]=M.elements[3],E[v+5]=M.elements[4],E[v+6]=M.elements[5],E[v+7]=0,E[v+8]=M.elements[6],E[v+9]=M.elements[7],E[v+10]=M.elements[8],E[v+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-v),v):M.toArray(E,v)}function u(M,E,v,w){let A=M.value,g=E+"_"+v;if(Array.isArray(A)){w[g]===void 0&&(w[g]=[]);let S=w[g],U=!1;for(let R=0;R<A.length;R++)d(A[R],S,R)===!0&&(U=!0);return U}return d(A,w,g)}function d(M,E,v){if(E[v]===void 0)return typeof M=="number"||typeof M=="boolean"?E[v]=M:ArrayBuffer.isView(M)?E[v]=M.slice():E[v]=M.clone(),!0;{let w=E[v];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return E[v]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function _(M){let E=M.uniforms,v=0,w=16;for(let g=0,S=E.length;g<S;g++){let U=Array.isArray(E[g])?E[g]:[E[g]];for(let R=0,N=U.length;R<N;R++){let O=U[R],W=Array.isArray(O.value)?O.value:[O.value],I=Array.isArray(E[g])||Array.isArray(O.value),H=v;for(let V=0,lt=W.length;V<lt;V++){let Y=W[V],st=b(Y,I),rt=v%w,At=rt%st.boundary,Vt=rt+At;v+=At,Vt!==0&&w-Vt<st.storage&&(v+=w-Vt),V===0&&(H=v),v+=st.storage}let Z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Z((v-H)/Float32Array.BYTES_PER_ELEMENT),O.__offset=H}}let A=v%w;return A>0&&(v+=w-A),M.__size=v,M.__cache={},this}function b(M,E){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=16,v.storage=48):M.isMatrix4?(v.boundary=16,v.storage=64):M.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function f(M){let E=M.target;E.removeEventListener("dispose",f),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var Ng=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mn=null;function Ug(){return mn===null&&(mn=new Lr(Ng,16,16,qn,rn),mn.name="DFG_LUT",mn.minFilter=Be,mn.magFilter=Be,mn.wrapS=ln,mn.wrapT=ln,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}var qa=class{constructor(t={}){let{canvas:e=Wc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=He}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let b=d,f=new Set([ua,ha,ca]),m=new Set([He,nn,zi,ai,oa,la]),M=new Uint32Array(4),E=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},w=null,A=null,g=[],S=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,O=null,W=null,I=null,H=null;this._outputColorSpace=Fe;let Z=0,V=0,lt=null,Y=-1,st=null,rt=new ge,At=new ge,Vt=null,K=new te(0),Mt=0,Rt=e.width,zt=e.height,St=1,kt=null,ue=null,Wt=new ge(0,0,Rt,zt),Kt=new ge(0,0,Rt,zt),Q=!1,z=new kn,tt=new Dr,X=!1,F=!1,j=new me,bt=new D,dt=new ge,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function Ot(){return lt===null?St:1}let P=n;function Yt(y,L){return e.getContext(y,L)}let Dt,Ft,at,$t,vt,Gt,T,x,B,ot,nt,ht,ft,$,et,mt,C,it,J,gt,ut,pt,Bt;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),P===null){let L="webgl2";if(P=Yt(L,y),P===null)throw Yt(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(y){throw e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),qt("WebGLRenderer: "+y.message),y}function jt(){Dt=new qp(P),Dt.init(),ut=new Rg(P,Dt),Ft=new Up(P,Dt,t,ut),at=new Ag(P,Dt),Ft.reversedDepthBuffer&&u&&at.buffers.depth.setReversed(!0),W=P.createFramebuffer(),I=P.createFramebuffer(),H=P.createFramebuffer(),$t=new Jp(P),vt=new dg,Gt=new wg(P,Dt,at,vt,Ft,ut,$t),T=new Xp(R),x=new $u(P),pt=new Dp(P,x),B=new Yp(P,x,$t,pt),ot=new Kp(P,B,x,pt,$t),it=new $p(P,Ft,Gt),et=new Fp(vt),nt=new ug(R,T,Dt,Ft,pt,et),ht=new Lg(R,vt),ft=new pg,$=new yg(Dt),C=new Lp(R,T,at,ot,_,l),mt=new Tg(R,ot,Ft),Bt=new Dg(P,$t,Ft,at),J=new Np(P,Dt,$t),gt=new Zp(P,Dt,$t),$t.programs=nt.programs,R.capabilities=Ft,R.extensions=Dt,R.properties=vt,R.renderLists=ft,R.shadowMap=mt,R.state=at,R.info=$t}b!==He&&(U=new jp(b,e.width,e.height,o,s,r));let ct=new Tl(R,P);this.xr=ct,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=Dt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Dt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(y){y!==void 0&&(St=y,this.setSize(Rt,zt,!1))},this.getSize=function(y){return y.set(Rt,zt)},this.setSize=function(y,L,q=!0){if(ct.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=y,zt=L,e.width=Math.floor(y*St),e.height=Math.floor(L*St),q===!0&&(e.style.width=y+"px",e.style.height=L+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,y,L)},this.getDrawingBufferSize=function(y){return y.set(Rt*St,zt*St).floor()},this.setDrawingBufferSize=function(y,L,q){Rt=y,zt=L,St=q,e.width=Math.floor(y*q),e.height=Math.floor(L*q),this.setViewport(0,0,y,L)},this.setEffects=function(y){if(b===He){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let L=0;L<y.length;L++)if(y[L].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(rt)},this.getViewport=function(y){return y.copy(Wt)},this.setViewport=function(y,L,q,k){y.isVector4?Wt.set(y.x,y.y,y.z,y.w):Wt.set(y,L,q,k),at.viewport(rt.copy(Wt).multiplyScalar(Ot()).round())},this.getScissor=function(y){return y.copy(Kt)},this.setScissor=function(y,L,q,k){y.isVector4?Kt.set(y.x,y.y,y.z,y.w):Kt.set(y,L,q,k),at.scissor(At.copy(Kt).multiplyScalar(Ot()).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(y){at.setScissorTest(Q=y)},this.setOpaqueSort=function(y){kt=y},this.setTransparentSort=function(y){ue=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,L=!0,q=!0){let k=0;if(y){let G=!1;if(lt!==null){let yt=lt.texture.format;G=f.has(yt)}if(G){let yt=lt.texture.type,Ct=m.has(yt),xt=C.getClearColor(),wt=C.getClearAlpha(),Nt=xt.r,Jt=xt.g,ie=xt.b;Ct?(M[0]=Nt,M[1]=Jt,M[2]=ie,M[3]=wt,P.clearBufferuiv(P.COLOR,0,M)):(E[0]=Nt,E[1]=Jt,E[2]=ie,E[3]=wt,P.clearBufferiv(P.COLOR,0,E))}else k|=P.COLOR_BUFFER_BIT}L&&(k|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),C.dispose(),ft.dispose(),$.dispose(),Gt.dispose(),vt.dispose(),T.dispose(),ot.dispose(),B.dispose(),pt.dispose(),Bt.dispose(),nt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",wl),ct.removeEventListener("sessionend",Rl),Yn.stop()};function Ht(y){y.preventDefault(),sl("WebGLRenderer: Context Lost."),N=!0}function Qt(){sl("WebGLRenderer: Context Restored."),N=!1;let y=$t.autoReset,L=mt.enabled,q=mt.autoUpdate,k=mt.needsUpdate,G=mt.type;jt(),$t.autoReset=y,mt.enabled=L,mt.autoUpdate=q,mt.needsUpdate=k,mt.type=G}function Et(y){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ce(y){let L=y.target;L.removeEventListener("dispose",ce),be(L)}function be(y){In(y),vt.remove(y)}function In(y){let L=vt.get(y).programs;L!==void 0&&(L.forEach(function(q){nt.releaseProgram(q)}),y.isShaderMaterial&&nt.releaseShaderCache(y))}this.renderBufferDirect=function(y,L,q,k,G,yt){L===null&&(L=Ut);let Ct=G.isMesh&&G.matrixWorld.determinantAffine()<0,xt=Oh(y,L,q,k,G);at.setMaterial(k,Ct);let wt=q.index,Nt=1;if(k.wireframe===!0){if(wt=B.getWireframeAttribute(q),wt===void 0)return;Nt=2}let Jt=q.drawRange,ie=q.attributes.position,Pt=Jt.start*Nt,se=(Jt.start+Jt.count)*Nt;yt!==null&&(Pt=Math.max(Pt,yt.start*Nt),se=Math.min(se,(yt.start+yt.count)*Nt)),wt!==null?(Pt=Math.max(Pt,0),se=Math.min(se,wt.count)):ie!=null&&(Pt=Math.max(Pt,0),se=Math.min(se,ie.count));let ve=se-Pt;if(ve<0||ve===1/0)return;pt.setup(G,k,xt,q,wt);let fe,de=J;if(wt!==null&&(fe=x.get(wt),de=gt,de.setIndex(fe)),G.isMesh)k.wireframe===!0?(at.setLineWidth(k.wireframeLinewidth*Ot()),de.setMode(P.LINES)):de.setMode(P.TRIANGLES);else if(G.isLine){let Ce=k.linewidth;Ce===void 0&&(Ce=1),at.setLineWidth(Ce*Ot()),G.isLineSegments?de.setMode(P.LINES):G.isLineLoop?de.setMode(P.LINE_LOOP):de.setMode(P.LINE_STRIP)}else G.isPoints?de.setMode(P.POINTS):G.isSprite&&de.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ce=G._multiDrawStarts,Lt=G._multiDrawCounts,Ue=G._multiDrawCount,oe=wt?x.get(wt).bytesPerElement:1,Zn=vt.get(k).currentProgram.getUniforms();for(let Ie=0;Ie<Ue;Ie++)Zn.setValue(P,"_gl_DrawID",Ie),de.render(Ce[Ie]/oe,Lt[Ie])}else if(G.isInstancedMesh)de.renderInstances(Pt,ve,G.count);else if(q.isInstancedBufferGeometry){let Ce=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Lt=Math.min(q.instanceCount,Ce);de.renderInstances(Pt,ve,Lt)}else de.render(Pt,ve)};function Al(y,L,q,k){O!==null&&y.isNodeMaterial&&O.setObject(k,y),X===!0&&et.setState(y,q,!1),y.transparent===!0&&y.side===fn&&y.forceSinglePass===!1?(y.side=ze,y.needsUpdate=!0,Hi(y,L,k),y.side=Xn,y.needsUpdate=!0,Hi(y,L,k),y.side=fn):Hi(y,L,k)}this.compile=function(y,L,q=null){q===null&&(q=y),O!==null&&O.renderStart(y,L,q),A=$.get(q),A.init(L),S.push(A),q.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),y!==q&&y.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),F=this.localClippingEnabled,X=et.init(this.clippingPlanes,F),X===!0&&et.setGlobalState(this.clippingPlanes,L),O!==null&&mt.render(A.state.shadowsArray,q,L);let k=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let yt=G.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){let xt=yt[Ct];Al(xt,q,L,G),k.add(xt)}else Al(yt,q,L,G),k.add(yt)}),A=S.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(y,L,q=null){let k=this.compile(y,L,q);return new Promise(G=>{function yt(){if(k.forEach(function(Ct){let wt=vt.get(Ct).currentProgram;(wt===void 0||wt.isReady())&&k.delete(Ct)}),k.size===0){G(y);return}setTimeout(yt,10)}Dt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ja=null;function Uh(y){Ja&&Ja(y)}function wl(){Yn.stop()}function Rl(){Yn.start()}let Yn=new Eh;Yn.setAnimationLoop(Uh),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(y){Ja=y,ct.setAnimationLoop(y),y===null?Yn.stop():Yn.start()},ct.addEventListener("sessionstart",wl),ct.addEventListener("sessionend",Rl),this.render=function(y,L){if(L!==void 0&&L.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(y,L);let q=ct.enabled===!0&&ct.isPresenting===!0,k=U!==null&&(lt===null||q)&&U.begin(R,lt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(L),L=ct.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,L,lt),A=$.get(y,S.length),A.init(L),A.state.textureUnits=Gt.getTextureUnits(),S.push(A),j.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?tt.setFromArrayCamera(L):z.setFromProjectionMatrix(j,$e,L.reversedDepth),F=this.localClippingEnabled,X=et.init(this.clippingPlanes,F),w=ft.get(y,g.length),w.init(),g.push(w),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let Ct=R.xr.getDepthSensingMesh();Ct!==null&&$a(Ct,L,-1/0,R.sortObjects)}$a(y,L,0,R.sortObjects),w.finish(),O!==null&&O.updateLights(A.state.lightsArray),R.sortObjects===!0&&w.sort(kt,ue),It=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,It&&C.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),X===!0&&et.beginShadows();let G=A.state.shadowsArray;if(mt.render(G,y,L),X===!0&&et.endShadows(),(k&&U.hasRenderPass())===!1){let Ct=w.opaque,xt=w.transmissive;if(A.setupLights(),L.isArrayCamera){let wt=L.cameras;if(xt.length>0)for(let Nt=0,Jt=wt.length;Nt<Jt;Nt++){let ie=wt[Nt];Il(Ct,xt,y,ie)}It&&C.render(y);for(let Nt=0,Jt=wt.length;Nt<Jt;Nt++){let ie=wt[Nt];Cl(w,y,ie,ie.viewport)}}else xt.length>0&&Il(Ct,xt,y,L),It&&C.render(y),Cl(w,y,L)}lt!==null&&V===0&&(Gt.updateMultisampleRenderTarget(lt),Gt.updateRenderTargetMipmap(lt)),k&&U.end(R),y.isScene===!0&&y.onAfterRender(R,y,L),pt.resetDefaultState(),Y=-1,st=null,S.pop(),S.length>0?(A=S[S.length-1],Gt.setTextureUnits(A.state.textureUnits),X===!0&&et.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,O!==null&&O.renderEnd()};function $a(y,L,q,k){if(y.visible===!1)return;if(y.layers.test(L.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(L);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){let Ct=L.isArrayCamera?tt:z;if(!y.frustumCulled||y.intersectsFrustum(Ct)){k&&dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(j);let xt=ot.update(y),wt=y.material;wt.visible&&w.push(y,xt,wt,q,dt.z,null,L)}}else if(y.isMesh||y.isLine||y.isPoints){let Ct=L.isArrayCamera?tt:z;if(!y.frustumCulled||y.intersectsFrustum(Ct)){let xt=ot.update(y),wt=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),dt.copy(y.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),dt.copy(xt.boundingSphere.center)),dt.applyMatrix4(y.matrixWorld).applyMatrix4(j)),Array.isArray(wt)){let Nt=xt.groups;for(let Jt=0,ie=Nt.length;Jt<ie;Jt++){let Pt=Nt[Jt],se=wt[Pt.materialIndex];se&&se.visible&&w.push(y,xt,se,q,dt.z,Pt,L)}}else wt.visible&&w.push(y,xt,wt,q,dt.z,null,L)}}}let yt=y.children;for(let Ct=0,xt=yt.length;Ct<xt;Ct++)$a(yt[Ct],L,q,k)}function Cl(y,L,q,k){let{opaque:G,transmissive:yt,transparent:Ct}=y;A.setupLightsView(q),X===!0&&et.setGlobalState(R.clippingPlanes,q),k&&at.viewport(rt.copy(k)),G.length>0&&Xs(G,L,q),yt.length>0&&Xs(yt,L,q),Ct.length>0&&Xs(Ct,L,q),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Il(y,L,q,k){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){let Pt=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new qe(1,1,{generateMipmaps:!0,type:Pt?rn:He,minFilter:wn,samples:Math.max(4,Ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let yt=A.state.transmissionRenderTarget[k.id],Ct=k.viewport||rt;yt.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);let xt=R.getRenderTarget(),wt=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(yt),R.getClearColor(K),Mt=R.getClearAlpha(),Mt<1&&R.setClearColor(16777215,.5),R.clear(),It&&C.render(q);let Jt=R.toneMapping;R.toneMapping=pn;let ie=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),X===!0&&et.setGlobalState(R.clippingPlanes,k),Xs(y,q,k),Gt.updateMultisampleRenderTarget(yt),Gt.updateRenderTargetMipmap(yt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let se=0,ve=L.length;se<ve;se++){let fe=L[se],{object:de,geometry:Ce,material:Lt,group:Ue}=fe;if(Lt.side===fn&&de.layers.test(k.layers)){let oe=Lt.side;Lt.side=ze,Lt.needsUpdate=!0,Pl(de,q,k,Ce,Lt,Ue),Lt.side=oe,Lt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Gt.updateMultisampleRenderTarget(yt),Gt.updateRenderTargetMipmap(yt))}R.setRenderTarget(xt,wt,Nt),R.setClearColor(K,Mt),ie!==void 0&&(k.viewport=ie),R.toneMapping=Jt}function Xs(y,L,q){let k=L.isScene===!0?L.overrideMaterial:null;for(let G=0,yt=y.length;G<yt;G++){let Ct=y[G],{object:xt,geometry:wt,group:Nt}=Ct,Jt=Ct.material;Jt.allowOverride===!0&&k!==null&&(Jt=k),xt.layers.test(q.layers)&&Pl(xt,L,q,wt,Jt,Nt)}}function Pl(y,L,q,k,G,yt){O!==null&&G.isNodeMaterial&&O.setObject(y,G),y.onBeforeRender(R,L,q,k,G,yt),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(R,L,q,k,y,yt),G.transparent===!0&&G.side===fn&&G.forceSinglePass===!1?(G.side=ze,G.needsUpdate=!0,R.renderBufferDirect(q,L,k,G,y,yt),G.side=Xn,G.needsUpdate=!0,R.renderBufferDirect(q,L,k,G,y,yt),G.side=fn):R.renderBufferDirect(q,L,k,G,y,yt),y.onAfterRender(R,L,q,k,G,yt)}function Ll(y){let L=0;for(let q of y)q.texture!==null&&L++;return L}function Hi(y,L,q){L.isScene!==!0&&(L=Ut);let k=vt.get(y),G=A.state.lights,yt=A.state.shadowsArray,Ct=G.state.version,xt=nt.getParameters(y,G.state,yt,L,q,A.state.lightProbeGridArray),wt=nt.getProgramCacheKey(xt),Nt=k.programs;k.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,k.fog=L.fog;let Jt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;k.envMap=T.get(y.envMap||k.environment,Jt),k.envMapRotation=k.environment!==null&&y.envMap===null?L.environmentRotation:y.envMapRotation,Nt===void 0&&(y.addEventListener("dispose",ce),Nt=new Map,k.programs=Nt,k.programVariants=new Map);let ie=Nt.get(wt);if(ie!==void 0){if(k.currentProgram===ie&&k.lightsStateVersion===Ct)return Nl(y,xt),ie}else xt.uniforms=nt.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,q,xt),y.onBeforeCompile(xt,R),ie=nt.acquireProgram(xt,wt),Nt.set(wt,ie),k.uniforms=xt.uniforms;let Pt=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pt.clippingPlanes=et.uniform),Nl(y,xt),k.needsLights=zh(y),k.lightsStateVersion=Ct,k.needsLights&&(Pt.ambientLightColor.value=G.state.ambient,Pt.lightProbe.value=G.state.probe,Pt.sunLights.value=G.state.sun,Pt.sunLightShadows.value=G.state.sunShadow,Pt.directionalLights.value=G.state.directional,Pt.directionalLightShadows.value=G.state.directionalShadow,Pt.spotLights.value=G.state.spot,Pt.spotLightShadows.value=G.state.spotShadow,Pt.rectAreaLights.value=G.state.rectArea,Pt.ltc_1.value=G.state.rectAreaLTC1,Pt.ltc_2.value=G.state.rectAreaLTC2,Pt.pointLights.value=G.state.point,Pt.pointLightShadows.value=G.state.pointShadow,Pt.hemisphereLights.value=G.state.hemi,Pt.sunShadowMatrix.value=G.state.sunShadowMatrix,Pt.sunShadowCascade.value=G.state.sunShadowCascade,Pt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pt.spotLightMatrix.value=G.state.spotLightMatrix,Pt.spotLightMap.value=G.state.spotLightMap,Pt.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=Ll(A.state.lightProbeGridArray),k.currentProgram=ie,k.uniformsList=null,ie}function Fh(y,L,q,k,G){let yt=vt.get(y),Ct=yt.currentProgram.id+","+k+","+G,xt=yt.programVariants.get(Ct);return xt===void 0?(xt=Hi(y,L,q),yt.programVariants.set(Ct,xt)):(yt.currentProgram=xt,yt.uniformsList=null,yt.outputColorSpace=k,yt.toneMapping=G),xt}function Dl(y){if(y.uniformsList===null){let L=y.currentProgram.getUniforms();y.uniformsList=Gi.seqWithValue(L.seq,y.uniforms)}return y.uniformsList}function Nl(y,L){let q=vt.get(y);q.outputColorSpace=L.outputColorSpace,q.batching=L.batching,q.batchingColor=L.batchingColor,q.instancing=L.instancing,q.instancingColor=L.instancingColor,q.instancingMorph=L.instancingMorph,q.skinning=L.skinning,q.morphTargets=L.morphTargets,q.morphNormals=L.morphNormals,q.morphColors=L.morphColors,q.morphTargetsCount=L.morphTargetsCount,q.numClippingPlanes=L.numClippingPlanes,q.numIntersection=L.numClipIntersection,q.vertexAlphas=L.vertexAlphas,q.vertexTangents=L.vertexTangents,q.toneMapping=L.toneMapping}function Oh(y,L,q,k,G){L.isScene!==!0&&(L=Ut),Gt.resetTextureUnits();let yt=L.fog,Ct=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?L.environment:null,xt=lt===null?R.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:re.workingColorSpace,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Nt=T.get(k.envMap||Ct,wt),Jt=k.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ie=!!q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pt=!!q.morphAttributes.position,se=!!q.morphAttributes.normal,ve=!!q.morphAttributes.color,fe=pn;k.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(fe=R.toneMapping);let de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ce=de!==void 0?de.length:0,Lt=vt.get(k),Ue=A.state.lights;if(X===!0&&(F===!0||y!==st)){let _e=y===st&&k.id===Y;et.setState(k,y,_e)}let oe=!1,Zn=!1;k.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==Ue.state.version||G.isBatchedMesh&&Lt.batching===!1||!G.isBatchedMesh&&Lt.batching===!0||G.isBatchedMesh&&Lt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Lt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Lt.instancing===!1||!G.isInstancedMesh&&Lt.instancing===!0||G.isSkinnedMesh&&Lt.skinning===!1||!G.isSkinnedMesh&&Lt.skinning===!0||G.isInstancedMesh&&Lt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Lt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Lt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Lt.instancingMorph===!1&&G.morphTexture!==null||Lt.envMap!==Nt||k.fog===!0&&Lt.fog!==yt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==et.numPlanes||Lt.numIntersection!==et.numIntersection)||Lt.vertexAlphas!==Jt||Lt.vertexTangents!==ie||Lt.morphTargets!==Pt||Lt.morphNormals!==se||Lt.morphColors!==ve||Lt.morphTargetsCount!==Ce||Lt.numLightProbeGrids!==Ll(A.state.lightProbeGridArray)?oe=!0:(Lt.outputColorSpace!==xt||Lt.toneMapping!==fe)&&(Zn=!0):(oe=!0,Lt.__version=k.version);let Ie=Lt.currentProgram;(oe===!0||Zn===!0)&&(Ie=Zn===!0?Fh(k,L,G,xt,fe):Hi(k,L,G),O&&k.isNodeMaterial&&O.onUpdateProgram(k,Ie,Lt));let qs=!1,Pn=!1,Jn=!1,ae=Ie.getUniforms(),Re=Lt.uniforms;if(at.useProgram(Ie.program)&&(qs=!0,Pn=!0,Jn=!0),k.id!==Y&&(Y=k.id,Pn=!0),qs||st!==y){at.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ae.setValue(P,"projectionMatrix",y.projectionMatrix),ae.setValue(P,"viewMatrix",y.matrixWorldInverse);let Ee=ae.map.cameraPosition;Ee!==void 0&&Ee.setValue(P,bt.setFromMatrixPosition(y.matrixWorld)),Ft.logarithmicDepthBuffer&&ae.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ae.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),st!==y&&(st=y,Pn=!0,Jn=!0)}if(Lt.needsLights&&(Ue.state.sunShadowMap.length>0&&ae.setValue(P,"sunShadowMap",Ue.state.sunShadowMap,Gt),Ue.state.directionalShadowMap.length>0&&ae.setValue(P,"directionalShadowMap",Ue.state.directionalShadowMap,Gt),Ue.state.spotShadowMap.length>0&&ae.setValue(P,"spotShadowMap",Ue.state.spotShadowMap,Gt),Ue.state.pointShadowMap.length>0&&ae.setValue(P,"pointShadowMap",Ue.state.pointShadowMap,Gt)),G.isSkinnedMesh){ae.setOptional(P,G,"bindMatrix"),ae.setOptional(P,G,"bindMatrixInverse");let _e=G.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),ae.setValue(P,"boneTexture",_e.boneTexture,Gt))}G.isBatchedMesh&&(ae.setOptional(P,G,"batchingTexture"),ae.setValue(P,"batchingTexture",G._matricesTexture,Gt),ae.setOptional(P,G,"batchingIdTexture"),ae.setValue(P,"batchingIdTexture",G._indirectTexture,Gt),ae.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&ae.setValue(P,"batchingColorTexture",G._colorsTexture,Gt));let Ke=q.morphAttributes;if((Ke.position!==void 0||Ke.normal!==void 0||Ke.color!==void 0)&&it.update(G,q,Ie),(Pn||Lt.receiveShadow!==G.receiveShadow)&&(Lt.receiveShadow=G.receiveShadow,ae.setValue(P,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&L.environment!==null&&(Re.envMapIntensity.value=L.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Ug()),Pn){if(ae.setValue(P,"toneMappingExposure",R.toneMappingExposure),Lt.needsLights&&Bh(Re,Jn),yt&&k.fog===!0&&ht.refreshFogUniforms(Re,yt),ht.refreshMaterialUniforms(Re,k,St,zt,A.state.transmissionRenderTarget[y.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let _e=v,Ee=0;for(let _n of A.state.lightProbeGridArray)_n.texture!==null&&(_e.textures[Ee]=_n.texture,_e.min[Ee]=_n.boundingBox.min,_e.max[Ee]=_n.boundingBox.max,_e.resolution[Ee]=_n.resolution,Ee++);for(let _n in _e)_e[_n].length=Ee;Re.probesSH.value=_e.textures,Re.probesMin.value=_e.min,Re.probesMax.value=_e.max,Re.probesResolution.value=_e.resolution}Gi.upload(P,Dl(Lt),Re,Gt)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Gi.upload(P,Dl(Lt),Re,Gt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ae.setValue(P,"center",G.center),ae.setValue(P,"modelViewMatrix",G.modelViewMatrix),ae.setValue(P,"normalMatrix",G.normalMatrix),ae.setValue(P,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let _e=k.uniformsGroups;for(let Ee=0,_n=_e.length;Ee<_n;Ee++){let Fl=_e[Ee];Bt.update(Fl,Ie),Bt.bind(Fl,Ie)}}return Ie}function Bh(y,L){y.ambientLightColor.needsUpdate=L,y.lightProbe.needsUpdate=L,y.sunLights.needsUpdate=L,y.sunLightShadows.needsUpdate=L,y.directionalLights.needsUpdate=L,y.directionalLightShadows.needsUpdate=L,y.pointLights.needsUpdate=L,y.pointLightShadows.needsUpdate=L,y.spotLights.needsUpdate=L,y.spotLightShadows.needsUpdate=L,y.rectAreaLights.needsUpdate=L,y.hemisphereLights.needsUpdate=L}function zh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(y,L,q){let k=vt.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),vt.get(y.texture).__webglTexture=L,vt.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:q,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,L){let q=vt.get(y);q.__webglFramebuffer=L,q.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(y,L=0,q=0){lt=y,Z=L,V=q;let k=null,G=!1,yt=!1;if(y){let xt=vt.get(y);if(xt.__useDefaultFramebuffer!==void 0){at.bindFramebuffer(P.FRAMEBUFFER,xt.__webglFramebuffer),rt.copy(y.viewport),At.copy(y.scissor),Vt=y.scissorTest,at.viewport(rt),at.scissor(At),at.setScissorTest(Vt),Y=-1;return}else if(xt.__webglFramebuffer===void 0)Gt.setupRenderTarget(y);else if(xt.__hasExternalTextures)Gt.rebindTextures(y,vt.get(y.texture).__webglTexture,vt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Jt=y.depthTexture;if(xt.__boundDepthTexture!==Jt){if(Jt!==null&&vt.has(Jt)&&(y.width!==Jt.image.width||y.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(y)}}let wt=y.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(yt=!0);let Nt=vt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Nt[L])?k=Nt[L][q]:k=Nt[L],G=!0):y.samples>0&&Gt.useMultisampledRTT(y)===!1?k=vt.get(y).__webglMultisampledFramebuffer:Array.isArray(Nt)?k=Nt[q]:k=Nt,rt.copy(y.viewport),At.copy(y.scissor),Vt=y.scissorTest}else rt.copy(Wt).multiplyScalar(St).floor(),At.copy(Kt).multiplyScalar(St).floor(),Vt=Q;if(q!==0&&(k=W),at.bindFramebuffer(P.FRAMEBUFFER,k)&&at.drawBuffers(y,k),at.viewport(rt),at.scissor(At),at.setScissorTest(Vt),G){let xt=vt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,xt.__webglTexture,q)}else if(yt){let xt=L;for(let wt=0;wt<y.textures.length;wt++){let Nt=vt.get(y.textures[wt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+wt,Nt.__webglTexture,q,xt)}}else if(y!==null&&q!==0){let xt=vt.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xt.__webglTexture,q)}Y=-1};function Ul(y){let L=vt.get(y);return(L.__readFormat!==y.format||L.__readType!==y.type)&&(L.__readFormat=y.format,L.__readType=y.type,L.__formatReadable=Ft.textureFormatReadable(y.format),L.__typeReadable=Ft.textureTypeReadable(y.type)),L}this.readRenderTargetPixels=function(y,L,q,k,G,yt,Ct,xt=0){if(!(y&&y.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=vt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt){at.bindFramebuffer(P.FRAMEBUFFER,wt);try{let Nt=y.textures[xt],Jt=Nt.format,ie=Nt.type;y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt);let Pt=Ul(Nt);if(Pt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=y.width-k&&q>=0&&q<=y.height-G&&P.readPixels(L,q,k,G,ut.convert(Jt),ut.convert(ie),yt)}finally{let Nt=lt!==null?vt.get(lt).__webglFramebuffer:null;at.bindFramebuffer(P.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(y,L,q,k,G,yt,Ct,xt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=vt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct],Array.isArray(wt)&&(wt=wt[0])),wt)if(L>=0&&L<=y.width-k&&q>=0&&q<=y.height-G){at.bindFramebuffer(P.FRAMEBUFFER,wt);let Nt=y.textures[xt],Jt=Nt.format,ie=Nt.type;y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+xt);let Pt=Ul(Nt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,se),P.bufferData(P.PIXEL_PACK_BUFFER,yt.byteLength,P.STREAM_READ),P.readPixels(L,q,k,G,ut.convert(Jt),ut.convert(ie),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let ve=lt!==null?vt.get(lt).__webglFramebuffer:null;at.bindFramebuffer(P.FRAMEBUFFER,ve);let fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await qc(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,yt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(se),P.deleteSync(fe),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,L=null,q=0){let k=Math.pow(2,-q),G=Math.floor(y.image.width*k),yt=Math.floor(y.image.height*k),Ct=L!==null?L.x:0,xt=L!==null?L.y:0;Gt.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,Ct,xt,G,yt),at.unbindTexture()},this.copyTextureToTexture=function(y,L,q=null,k=null,G=0,yt=0){let Ct,xt,wt,Nt,Jt,ie,Pt,se,ve,fe=y.isCompressedTexture?y.mipmaps[yt]:y.image;if(q!==null)Ct=q.max.x-q.min.x,xt=q.max.y-q.min.y,wt=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,Jt=q.min.y,ie=q.isBox3?q.min.z:0;else{let ae=Math.pow(2,-G);Ct=Math.floor(fe.width*ae),xt=Math.floor(fe.height*ae),y.isDataArrayTexture?wt=fe.depth:y.isData3DTexture?wt=Math.floor(fe.depth*ae):wt=1,Nt=0,Jt=0,ie=0}k!==null?(Pt=k.x,se=k.y,ve=k.z):(Pt=0,se=0,ve=0);let de=ut.convert(L.format),Ce=ut.convert(L.type),Lt;L.isData3DTexture?(Gt.setTexture3D(L,0),Lt=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Gt.setTexture2DArray(L,0),Lt=P.TEXTURE_2D_ARRAY):(Gt.setTexture2D(L,0),Lt=P.TEXTURE_2D),at.activeTexture(P.TEXTURE0),at.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),at.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),at.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);let Ue=at.getParameter(P.UNPACK_ROW_LENGTH),oe=at.getParameter(P.UNPACK_IMAGE_HEIGHT),Zn=at.getParameter(P.UNPACK_SKIP_PIXELS),Ie=at.getParameter(P.UNPACK_SKIP_ROWS),qs=at.getParameter(P.UNPACK_SKIP_IMAGES);at.pixelStorei(P.UNPACK_ROW_LENGTH,fe.width),at.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe.height),at.pixelStorei(P.UNPACK_SKIP_PIXELS,Nt),at.pixelStorei(P.UNPACK_SKIP_ROWS,Jt),at.pixelStorei(P.UNPACK_SKIP_IMAGES,ie);let Pn=y.isDataArrayTexture||y.isData3DTexture,Jn=L.isDataArrayTexture||L.isData3DTexture;if(y.isDepthTexture){let ae=vt.get(y),Re=vt.get(L),Ke=vt.get(ae.__renderTarget),_e=vt.get(Re.__renderTarget);at.bindFramebuffer(P.READ_FRAMEBUFFER,Ke.__webglFramebuffer),at.bindFramebuffer(P.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ee=0;Ee<wt;Ee++)Pn&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(y).__webglTexture,G,ie+Ee),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(L).__webglTexture,yt,ve+Ee)),P.blitFramebuffer(Nt,Jt,Nt+Ct,Jt+xt,Pt,se,Pt+Ct,se+xt,P.DEPTH_BUFFER_BIT,P.NEAREST);at.bindFramebuffer(P.READ_FRAMEBUFFER,null),at.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||vt.has(y)){let ae=vt.get(y),Re=vt.get(L);at.bindFramebuffer(P.READ_FRAMEBUFFER,I),at.bindFramebuffer(P.DRAW_FRAMEBUFFER,H);for(let Ke=0;Ke<wt;Ke++)Pn?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ae.__webglTexture,G,ie+Ke):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ae.__webglTexture,G),Jn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.__webglTexture,yt,ve+Ke):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Re.__webglTexture,yt),G!==0?P.blitFramebuffer(Nt,Jt,Nt+Ct,Jt+xt,Pt,se,Pt+Ct,se+xt,P.COLOR_BUFFER_BIT,P.NEAREST):Jn?P.copyTexSubImage3D(Lt,yt,Pt,se,ve+Ke,Nt,Jt,Ct,xt):P.copyTexSubImage2D(Lt,yt,Pt,se,Nt,Jt,Ct,xt);at.bindFramebuffer(P.READ_FRAMEBUFFER,null),at.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Jn?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Lt,yt,Pt,se,ve,Ct,xt,wt,de,Ce,fe.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(Lt,yt,Pt,se,ve,Ct,xt,wt,de,fe.data):P.texSubImage3D(Lt,yt,Pt,se,ve,Ct,xt,wt,de,Ce,fe):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,yt,Pt,se,Ct,xt,de,Ce,fe.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,yt,Pt,se,fe.width,fe.height,de,fe.data):P.texSubImage2D(P.TEXTURE_2D,yt,Pt,se,Ct,xt,de,Ce,fe);at.pixelStorei(P.UNPACK_ROW_LENGTH,Ue),at.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),at.pixelStorei(P.UNPACK_SKIP_PIXELS,Zn),at.pixelStorei(P.UNPACK_SKIP_ROWS,Ie),at.pixelStorei(P.UNPACK_SKIP_IMAGES,qs),yt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&P.generateMipmap(Lt),at.unbindTexture()},this.initRenderTarget=function(y){vt.get(y).__webglFramebuffer===void 0&&Gt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Gt.setTextureCube(y,0):y.isData3DTexture?Gt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Gt.setTexture2DArray(y,0):Gt.setTexture2D(y,0),at.unbindTexture()},this.resetState=function(){Z=0,V=0,lt=null,at.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $e}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};function Og(i,t={}){let e=t.mode==="profile",n=t.theme==="afterglow",s=window.matchMedia("(prefers-reduced-motion: reduce)"),r;try{r=new qa({antialias:!0,alpha:e})}catch{return i.innerHTML=e?'<div style="height:100%;display:grid;place-items:center;text-align:center;padding:24px"><p>3D is unavailable on this device.<br>Your pet\u2019s profile and upgrades still work.</p></div>':'<div style="height:100%;display:grid;place-items:center;text-align:center;padding:24px"><div><strong>Battle arena</strong><p>3D is unavailable on this device.<br>The battle controls and HP still work.</p></div></div>',i.dataset.renderer="fallback",{play:()=>Promise.resolve(),dispose(){}}}i.dataset.renderer="webgl",i.replaceChildren(r.domElement),r.domElement.style.cssText="width:100%;height:100%;display:block;touch-action:pan-y",r.domElement.setAttribute("role","img"),r.domElement.setAttribute("aria-label",e?"Animated 3D pet companion with expressive eyes, ears, paws and tail":"Animated 3D pet battle arena with two original companions"),r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.shadowMap.enabled=!0,r.shadowMap.type=na,r.outputColorSpace=Fe,r.toneMapping=Ds,r.toneMappingExposure=n?1.45:1.2;let a=new rs;a.background=new te(n?"#172237":"#dce9d0"),a.fog=new ss(a.background,13,31);let o=new Oe(37,1,.1,60),l=e?new D(2.2,2.6,6.4):new D(7,5.6,10);o.position.copy(l);let c=new D(0,e?1.25:.65,0);o.lookAt(c),a.add(new Cs(n?"#c2cbff":"#fff9dc",n?"#344957":"#789263",2.6));let h=new Ni(n?"#cfcaff":"#fff3cc",3.1);h.position.set(-3,8,5),h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.camera.left=h.shadow.camera.bottom=-9,h.shadow.camera.right=h.shadow.camera.top=9,h.shadow.normalBias=.035,a.add(h);let p=new Ni(n?"#a6ffce":"#e7ffd6",1.9);p.position.set(4,4,-6),a.add(p);let u=new Es(1,40,28),d=new Set([u]),_=(Q,z={})=>{let tt=new As({color:Q,roughness:.76,...z});return d.add(tt),tt};function b(Q,z,tt,X,F=[1,1,1]){d.add(z);let j=new Ve(z,tt);return j.position.set(...X),j.scale.set(...F),j.castShadow=!0,j.receiveShadow=!0,Q.add(j),j}let f=(Q,z,tt,X)=>b(Q,u,z,tt,X);function m(Q,z,tt,X=.025){let F=new Ii(tt.map(j=>new D(...j)));return b(Q,new Ts(F,20,X,8,!1),z,[0,0,0])}let M=new Pi;M.moveTo(-.25,0),M.quadraticCurveTo(-.34,.08,-.25,.3),M.quadraticCurveTo(-.09,.78,0,.8),M.quadraticCurveTo(.09,.78,.25,.3),M.quadraticCurveTo(.34,.08,.25,0),M.quadraticCurveTo(0,-.1,-.25,0);let E=new Ms(M,{depth:.12,bevelEnabled:!0,bevelSegments:5,steps:1,bevelSize:.075,bevelThickness:.075,curveSegments:16});d.add(E);let v=b(a,new Gn(15,15,.3,64),_(n?"#243f42":"#a7c18a"),[0,-.3,0]);v.castShadow=!1;let w=_(n?"#4d6961":"#c4d7a5"),A=_(n?"#a6e3c5":"#e9ecc5",{emissive:n?"#3e765e":"#000000",emissiveIntensity:.3}),g={player:new D(-2.3,0,1.3),opponent:new D(2.3,0,-1.3)};e&&g.player.set(0,0,0);for(let Q of e?[g.player]:Object.values(g)){b(a,new Gn(1.7,1.82,.15,64),w,[Q.x,-.065,Q.z]);let z=b(a,new Di(1.65,.035,8,80),A,[Q.x,.025,Q.z]);z.rotation.x=Math.PI/2}let S=_(n?"#4d566d":"#bdc5a8"),U=["#698e62","#8fa66b","#658575"].map(Q=>_(n?"#3b6060":Q)),R=_(n?"#57556a":"#8c7959");for(let Q=0;Q<15;Q++){let z=Q*.39+.2,tt=Math.cos(z)*9,X=Math.sin(z)*7-3;if(X>2)continue;let F=1.8+Q%3*.5;b(a,new Gn(.12,.2,F,8),R,[tt,F/2,X]),f(a,U[Q%3],[tt,F+.5,X],[.9,1.4,.9]),f(a,S,[tt+1.3,.15,X+1],[.6,.32,.45])}let N=_(n?"#d5f7a6":"#fff0ae",{emissive:n?"#99d45a":"#000000",emissiveIntensity:.5});for(let Q=0;Q<26;Q++){let z=Math.sin(Q*2.4)*7,tt=Math.cos(Q*1.7)*5;Math.abs(z)<4&&Math.abs(tt)<2.5||f(a,N,[z,.12,tt],[.09,.1,.09])}function O(Q,z,tt){let X=new Ae,F=new Ae;X.add(F);let j=_(z,{roughness:.48}),bt=_(Q==="cat"?"#dfd7ff":"#fff2d6"),dt=_("#e6a3ab"),Ut=_("#26303e",{roughness:.18}),It=_("#ffffff",{roughness:.25}),Ot=_(tt);f(F,j,[0,.77,-.15],[.62,.7,.75]),f(F,bt,[0,.73,.47],[.43,.5,.17]);let P=[];for(let B of[-.4,.4])P.push(f(F,j,[B,.24,-.44],[.23,.28,.3])),P.push(f(F,bt,[B,.19,.4],[.24,.23,.3]));let Yt=new Ae;Yt.position.set(0,1.52,.23),F.add(Yt),f(Yt,j,[0,0,0],[.78,.67,.63]);let Dt=[],Ft=[],at=[];for(let B of[-1,1]){let ot=new Ae;ot.position.set(B*.48,.4,-.04),Yt.add(ot),ot.rotation.z=-B*.2,b(ot,E,j,[0,0,0],[1,Q==="rabbit"?1.65:Q==="cat"?.9:1,1]),b(ot,E,dt,[0,.1,.17],[.57,.65,.25]),Dt.push(ot);let nt=new Ae;nt.position.set(B*.3,.07,.565),Yt.add(nt);let ht=new Ae;nt.add(ht),f(ht,Ut,[0,0,0],[.12,.175,.078]),f(ht,It,[-.032,.06,.066],[.036,.049,.02]),f(ht,It,[.04,-.05,.071],[.016,.02,.01]);let ft=m(nt,Ut,[[-.12,0,.04],[0,.055,.065],[.12,0,.04]]);ft.visible=!1,Ft.push({pupil:ht,lid:ft});let $=new Ae;$.position.set(B*.3,.33,.56),Yt.add($),m($,j,[[-.11,0,0],[0,.025,.02],[.11,0,0]],.038),at.push($),f(Yt,bt,[B*.16,-.2,.54],[.25,.2,.18]),f(Yt,dt,[B*.48,-.16,.5],[.12,.05,.027])}Q==="corgi"&&f(Yt,bt,[0,.24,.54],[.16,.4,.07]),f(Yt,Ut,[0,-.13,.733],[.12,.078,.065]);let $t=new Ae;$t.position.set(0,-.34,.67),Yt.add($t),f($t,Ut,[0,0,0],[.13,.09,.035]);let vt=f($t,dt,[0,-.038,.032],[.075,.055,.018]);m(Yt,Ut,[[-.2,-.25,.685],[-.12,-.285,.725],[0,-.235,.737],[.12,-.285,.725],[.2,-.25,.685]],.017);let Gt=b(F,new Di(.44,.12,16,48),Ot,[0,1.12,.16]);Gt.rotation.x=Math.PI/2;let T=b(F,new us(.24,.43,3),Ot,[.12,.89,.65],[1,1,.25]);T.rotation.z=Math.PI;let x=new Ae;return x.position.set(0,.77,-.7),F.add(x),Q==="cat"?(m(x,j,[[0,0,0],[.12,.22,-.35],[.3,.6,-.42],[.52,.74,-.35],[.68,.56,-.3]],.14),f(x,j,[.68,.56,-.3],[.14,.14,.14])):(f(x,j,[0,.15,-.18],[.28,.3,.48]),f(x,bt,[0,.29,-.45],[.21,.23,.23])),a.add(X),{root:X,body:F,head:Yt,tail:x,legs:P,ears:Dt,eyes:Ft,brows:at,mouth:$t,tongue:vt,fur:j,action:null,fainted:!1,won:!1}}let W={player:O(t.playerKind||"corgi",t.playerColor||(n?"#b8a2ee":"#dfa65e"),t.playerAccent||(n?"#d7ff78":"#6d9859")),...!e&&{opponent:O(t.opponentKind||"cat",n?"#e3a268":"#aaa5d1",n?"#8bcddc":"#9bbcca")}};function I(Q,z,tt=1,X=0,F=0){let j=z==="happy"||z==="heal",bt=z==="attack"||z==="special"||z==="guard",dt=z==="hurt"||z==="faint";Q.eyes.forEach(({pupil:Ut,lid:It},Ot)=>{let P=X>.8||dt||j;Ut.visible=!P,It.visible=P,Ut.scale.y=Math.max(.08,(1-X)*(bt?.72:1)),Ut.position.x=F*.035,It.rotation.z=dt?Ot?-.25:.25:0,It.scale.y=dt?-.65:1,Q.brows[Ot].rotation.z=(Ot?1:-1)*(bt?-.28:dt?.28:.05),Q.brows[Ot].position.y=j?.36:.33,Q.ears[Ot].rotation.x+=dt?-.65*tt:bt?-.18*tt:j?.12:0,Q.ears[Ot].rotation.z+=(Ot?1:-1)*(dt?.45:j?.12:0)*tt}),Q.mouth.scale.set(j?1.3:dt?.65:1,j?1.35:bt?.25:dt?1.5:.85,1),Q.tongue.visible=!bt&&!dt}for(let[Q,z]of Object.entries(W)){z.root.position.copy(g[Q]);let tt=g[Q==="player"?"opponent":"player"];z.facing=e?.3:Math.atan2(tt.x-g[Q].x,tt.z-g[Q].z),z.root.rotation.y=z.facing}let H=new Ae;a.add(H);let Z=new Ss(.12);d.add(Z);let V=[];function lt(){for(let Q of V)H.remove(Q),Q.material.dispose();V=[]}function Y(Q,z,tt){lt();let X=Q==="heal"?"#9dffbc":Q==="guard"?"#a2daff":n?"#d9a6ff":"#e9ee73";for(let F=0;F<18;F++){let j=new ei({color:X,transparent:!0,opacity:.9}),bt=new Ve(Z,j);bt.userData={i:F,origin:z.clone(),destination:tt.clone(),move:Q},H.add(bt),V.push(bt)}if(Q==="guard"){let F=new Ve(u,new ei({color:X,transparent:!0,opacity:.18,wireframe:!0}));F.position.copy(z).add(new D(0,1.1,0)),F.scale.set(1.05,1.4,1.05),F.userData.shield=!0,H.add(F),V.push(F)}}let st=!1,rt=0,At=null,Vt=performance.now();function K(Q){if(st)return Promise.resolve();let z=!e&&Q.actor==="opponent"?"opponent":"player",tt=W[z];tt.action&&tt.action.resolve();let X=["attack","special","guard","heal","faint","victory","wave","play"].includes(Q.move)?Q.move:"attack",F=s.matches?80:X==="attack"?1350:X==="special"?1400:X==="faint"?900:1e3,j=e?g.player:g[z==="player"?"opponent":"player"];return At={move:X,start:performance.now(),duration:F,actor:z},lt(),!s.matches&&!["faint","victory","wave","play"].includes(X)&&Y(X,g[z],j),new Promise(bt=>{tt.action={move:X,start:performance.now(),duration:F,resolve:bt}})}function Mt(){if(st)return;let Q=Math.max(1,i.clientWidth),z=Math.max(1,i.clientHeight);r.setSize(Q,z,!1),o.aspect=Q/z,o.fov=e?34:Q<500?48:37,o.updateProjectionMatrix()}let Rt=new ResizeObserver(Mt);Rt.observe(i),Mt();function zt(Q){Q.preventDefault(),kt(),i.dataset.renderer="fallback",i.innerHTML='<p style="padding:30px;text-align:center">3D paused. Battle controls remain available.</p>'}r.domElement.addEventListener("webglcontextlost",zt);function St(Q){if(st)return;let z=(Q-Vt)/1e3,tt=!s.matches&&!document.hidden;o.position.copy(l),tt&&(o.position.x+=Math.sin(z*.25)*.14,o.position.y+=Math.sin(z*.4)*.06);for(let[X,F]of Object.entries(W)){let j=z+(X==="opponent"?2.13:0),bt=tt&&!F.action&&!F.fainted,dt=j%9,Ut=bt&&dt>2&&dt<4?Math.sin((dt-2)/2*Math.PI)**2:0,It=bt&&dt>6.2&&dt<7.4?Math.sin((dt-6.2)/1.2*Math.PI)**2:0,Ot=j%4.7,P=tt&&Ot<.22?Math.sin(Ot/.22*Math.PI):0;F.root.position.copy(g[X]),F.root.rotation.set(0,F.facing,0),F.body.rotation.set(0,0,bt?Math.sin(j*1.9)*.02:0),F.head.rotation.set(bt?Math.sin(j*2.1)*.025:0,e?Ut*.25:(.28+Ut*.35)*(X==="player"?-1:1),Ut*.13),F.legs.forEach(($t,vt)=>{$t.rotation.x=0,$t.position.x=vt<2?-.4:.4,$t.position.z=vt%2?.4:-.44,$t.position.y=vt%2?.19:.24,vt===1&&($t.position.y+=It*.18,$t.position.z+=It*.1,$t.rotation.x=-It*.35)}),F.ears.forEach(($t,vt)=>{let Gt=(j+vt*.27)%6.3,T=bt&&Gt<.5?Math.sin(Gt*Math.PI*4)*.13:0;$t.rotation.set(T,0,(vt?-1:1)*.2+T*.5)}),F.body.scale.setScalar(F.fainted?.6:1),bt&&(F.body.scale.y+=Math.sin(j*2.8)*.018),F.body.position.y=tt&&!F.fainted?Math.sin(j*2.8)*.035:0;let Yt=F.won?13:F.action?9:5;F.tail.rotation.y=tt&&!F.fainted?Math.sin(j*Yt)*(F.won?.6:.32):0,F.tail.rotation.x=tt&&!F.fainted?Math.sin(j*3)*.1:-.15,I(F,F.fainted?"faint":F.won?"happy":F.mood||"idle",1,P,Ut),bt&&(F.tongue.position.y=-.038+Math.sin(j*4)*.009),F.fur.emissive.setHex(0),F.fainted&&(F.root.rotation.z=X==="player"?-.8:.8),F.won&&tt&&(F.root.position.y=Math.abs(Math.sin(z*3))*.25);let Dt=F.action;if(!Dt)continue;let Ft=Math.min(1,(Q-Dt.start)/Dt.duration),at=Math.sin(Ft*Math.PI);if(I(F,["victory","wave","play"].includes(Dt.move)?"happy":Dt.move,at),tt)if(Dt.move==="wave")F.head.rotation.z=at*.16,F.legs[3].position.y+=at*.65,F.legs[3].position.z+=at*.12,F.legs[3].rotation.x=-at*.8,F.legs[3].position.x=.4+Math.sin(Ft*Math.PI*6)*at*.12;else if(Dt.move==="play")F.root.position.y=Math.abs(Math.sin(Ft*Math.PI*2))*.5,F.root.rotation.y+=Math.sin(Ft*Math.PI*2)*.6,F.head.rotation.z=Math.sin(Ft*Math.PI*2)*.2,F.legs[1].rotation.x=-at*.7,F.legs[3].rotation.x=-at*.7;else if(Dt.move==="attack"){let $t=g[X==="player"?"opponent":"player"].clone().sub(g[X]);if(Ft<.18){let vt=Math.sin(Ft/.18*Math.PI/2);F.body.scale.set(1+vt*.12,1-vt*.25,1+vt*.12),F.head.rotation.x=vt*.16,F.root.position.addScaledVector($t,-vt*.035)}else if(Ft<.58){let vt=(Ft-.18)/.4;F.root.position.addScaledVector($t,vt*.7),F.root.position.y=Math.sin(vt*Math.PI)*1.25,F.body.rotation.x=-.25+vt*.55,F.legs.forEach((Gt,T)=>{Gt.rotation.x=T%2?-.9:.65,Gt.position.z+=T%2?.25:-.2})}else if(Ft<.9){let vt=(Ft-.58)/.32;F.root.position.addScaledVector($t,(1-vt)*.7),F.root.position.y=Math.sin(vt*Math.PI)*.55,F.body.rotation.x=-.18*Math.sin(vt*Math.PI)}else{let vt=Math.sin((Ft-.9)/.1*Math.PI);F.body.scale.set(1+vt*.1,1-vt*.2,1+vt*.1)}}else Dt.move==="special"?(F.root.position.y=at*.55,F.root.rotation.y+=Math.sin(Ft*Math.PI*2)*.4,F.head.rotation.x=-at*.18,F.legs[1].position.y+=at*.28,F.legs[3].position.y+=at*.28,F.fur.emissive.set(n?"#433061":"#4a5120").multiplyScalar(at)):Dt.move==="guard"?(F.head.rotation.x=at*.2,F.legs[1].position.z-=at*.12,F.legs[3].position.z-=at*.12,F.body.scale.set(1+at*.1,1-at*.16,1+at*.1)):Dt.move==="heal"?(F.root.position.y=at*.3,F.head.rotation.z=Math.sin(Ft*Math.PI*2)*.16,F.head.rotation.x=-at*.12):Dt.move==="faint"?(F.root.rotation.z=Ft*(X==="player"?-.8:.8),F.body.scale.setScalar(1-Ft*.4)):Dt.move==="victory"&&(F.root.position.y=Math.abs(Math.sin(Ft*Math.PI*3))*.6,F.root.rotation.y+=Ft*Math.PI*2,F.legs[1].rotation.x=-at*.8,F.legs[3].rotation.x=-at*.8);Ft===1&&(Dt.move==="faint"&&(F.fainted=!0),Dt.move==="victory"&&(F.won=!0),F.body.rotation.x=0,F.action=null,Dt.resolve())}if(At){let X=Math.min(1,(Q-At.start)/At.duration);if(tt&&!e&&["attack","special"].includes(At.move)&&X>.5&&X<.86){let F=W[At.actor==="player"?"opponent":"player"];F.root.position.x+=Math.sin(X*70)*.1,F.head.rotation.x=-Math.sin((X-.5)/.36*Math.PI)*.24,I(F,"hurt"),F.fur.emissive.set("#ffb8a8").multiplyScalar(Math.max(0,Math.sin(X*50))*.45),o.position.x+=Math.sin(X*70)*.035}for(let F of V){if(F.userData.shield){F.material.opacity=Math.sin(X*Math.PI)*.25;continue}let{i:j,origin:bt,destination:dt,move:Ut}=F.userData,It=j*2.4;if(Ut==="guard"||Ut==="heal")F.position.copy(bt).add(new D(Math.cos(It+X*4)*.8,.4+X*2+j%3*.15,Math.sin(It+X*4)*.8));else if(Ut==="attack"){let Ot=Math.max(0,(X-.54)/.46);F.position.copy(Ot?dt:bt).add(new D(Math.cos(It)*Ot*2,Ot?.8+Math.sin(It)*Ot:.1,Math.sin(It)*Ot*2)),F.visible=X>.54}else{let Ot=Math.max(0,Math.min(1,(X-.25)/.35));F.position.lerpVectors(bt,dt,Ot).add(new D(Math.cos(It+X*5)*.22,1.2+Math.sin(Ot*Math.PI)*.4,Math.sin(It+X*5)*.22)),X>.6&&F.position.add(new D(Math.cos(It)*(X-.6)*4,Math.sin(It)*(X-.6)*3,Math.sin(It*2)*(X-.6)*4))}F.rotation.set(X*8+j,X*4,0),F.material.opacity=Math.sin(X*Math.PI),F.scale.setScalar(At.move==="special"?1.2:.7)}X===1&&(lt(),At=null)}o.lookAt(c),r.render(a,o),rt=requestAnimationFrame(St)}rt=requestAnimationFrame(St);function kt(){if(!st){st=!0,cancelAnimationFrame(rt),Rt.disconnect();for(let Q of Object.values(W))Q.action?.resolve(),Q.action=null;lt(),d.forEach(Q=>Q.dispose()),r.domElement.removeEventListener("webglcontextlost",zt),r.dispose(),r.forceContextLoss()}}function ue(Q){e&&(W.player.facing=.33+Q*Math.PI/180)}function Wt(Q){e&&(W.player.mood=Q)}function Kt(){if(!e||st)return null;let Q=W.player,z=r.getSize(new _t),tt=r.getPixelRatio(),X=a.background,F=a.fog,j=a.children.filter(Yt=>Yt!==Q.root&&!Yt.isLight&&Yt.visible),bt=Q.root.rotation.clone(),dt=Q.head.rotation.clone(),Ut=Q.facing,It=document.createElement("canvas");It.width=2048,It.height=1024;let Ot=It.getContext("2d"),P;try{return j.forEach(Yt=>{Yt.visible=!1}),a.background=null,a.fog=null,r.setClearColor(0,0),r.setPixelRatio(1),r.setSize(256,256,!1),o.aspect=1,o.position.copy(l),o.lookAt(c),o.updateProjectionMatrix(),Q.head.rotation.set(0,0,0),["idle","happy","guard","hurt"].forEach((Yt,Dt)=>{Q.ears.forEach((Ft,at)=>Ft.rotation.set(0,0,(at?-1:1)*.2)),I(Q,Yt);for(let Ft=0;Ft<8;Ft++)Q.root.rotation.set(0,.33+Ft*Math.PI/4,0),r.render(a,o),Ot.drawImage(r.domElement,Ft*256,Dt*256,256,256),!Dt&&!Ft&&(P=r.domElement.toDataURL("image/png"))}),{sheet:It.toDataURL("image/png"),thumbnail:P}}finally{j.forEach(Yt=>{Yt.visible=!0}),a.background=X,a.fog=F,Q.root.rotation.copy(bt),Q.head.rotation.copy(dt),Q.facing=Ut,r.setPixelRatio(tt),r.setSize(z.x,z.y,!1),o.aspect=z.x/z.y,o.updateProjectionMatrix(),I(Q,Q.mood||"idle"),r.render(a,o)}}return{play:K,dispose:kt,setAngle:ue,setMood:Wt,captureSprites:Kt}}window.PokepetArena={mount:Og};})();
