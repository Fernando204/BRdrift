(()=>{var Tl="170";var rf=0,Dh=1,af=2;var td=1,Rl=2,Dn=3,_n=0,Nt=1,Mt=2,ai=0,ns=1,$r=2,Nh=3,Uh=4,of=5,Ai=100,cf=101,lf=102,hf=103,uf=104,df=200,ff=201,pf=202,mf=203,fc=204,pc=205,gf=206,bf=207,xf=208,_f=209,vf=210,yf=211,Mf=212,Sf=213,wf=214,mc=0,gc=1,bc=2,as=3,xc=4,_c=5,vc=6,yc=7,nd=0,Af=1,Ef=2,oi=0,Tf=1,Rf=2,Cf=3,Cl=4,Pf=5,If=6,Lf=7,Oh="attached",Df="detached",id=300,os=301,cs=302,Mc=303,Sc=304,Ea=306,kn=1e3,Un=1001,Zs=1002,Ut=1003,Pl=1004;var es=1005;var Gt=1006,js=1007;var xn=1008;var Bn=1009,sd=1010,rd=1011,$s=1012,Il=1013,Ti=1014,un=1015,lr=1016,Ll=1017,Dl=1018,ls=1020,ad=35902,od=1021,cd=1022,$t=1023,ld=1024,hd=1025,is=1026,hs=1027,Nl=1028,Ul=1029,ud=1030,Ol=1031;var Fl=1033,jr=33776,Yr=33777,Kr=33778,Jr=33779,wc=35840,Ac=35841,Ec=35842,Tc=35843,Rc=36196,Cc=37492,Pc=37496,Ic=37808,Lc=37809,Dc=37810,Nc=37811,Uc=37812,Oc=37813,Fc=37814,kc=37815,Bc=37816,zc=37817,Hc=37818,Vc=37819,Gc=37820,Wc=37821,Zr=36492,qc=36494,Xc=36495,dd=36283,jc=36284,Yc=36285,Kc=36286;var us=2300,ds=2301,Io=2302,Fh=2400,kh=2401,Bh=2402,Nf=2500;var fd=0,Ta=1,hr=2,Uf=3200,Of=3201;var pd=0,Ff=1,ii="",yt="srgb",Ot="srgb-linear",Ra="linear",at="srgb";var Ui=7680;var zh=519,kf=512,Bf=513,zf=514,md=515,Hf=516,Vf=517,Gf=518,Wf=519,Jc=35044,ur=35048;var Hh="300 es",On=2e3,Qr=2001,ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vh=1234567,Ys=Math.PI/180,fs=180/Math.PI;function dn(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[r&255]+Lt[r>>8&255]+Lt[r>>16&255]+Lt[r>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Ct(r,e,t){return Math.max(e,Math.min(t,r))}function kl(r,e){return(r%e+e)%e}function qf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Xf(r,e,t){return r!==e?(t-r)/(e-r):0}function Ks(r,e,t){return(1-t)*r+t*e}function jf(r,e,t,n){return Ks(r,e,1-Math.exp(-t*n))}function Yf(r,e=1){return e-Math.abs(kl(r,e*2)-e)}function Kf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Jf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Zf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function $f(r,e){return r+Math.random()*(e-r)}function Qf(r){return r*(.5-Math.random())}function ep(r){r!==void 0&&(Vh=r);let e=Vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tp(r){return r*Ys}function np(r){return r*fs}function ip(r){return(r&r-1)===0&&r!==0}function sp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ap(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function it(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ca={DEG2RAD:Ys,RAD2DEG:fs,generateUUID:dn,clamp:Ct,euclideanModulo:kl,mapLinear:qf,inverseLerp:Xf,lerp:Ks,damp:jf,pingpong:Yf,smoothstep:Kf,smootherstep:Jf,randInt:Zf,randFloat:$f,randFloatSpread:Qf,seededRandom:ep,degToRad:tp,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:sp,floorPowerOfTwo:rp,setQuaternionFromProperEuler:ap,normalize:it,denormalize:hn},Ce=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Oe=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],_=i[1],v=i[4],x=i[7],R=i[2],A=i[5],T=i[8];return s[0]=a*b+o*_+c*R,s[3]=a*m+o*v+c*A,s[6]=a*p+o*x+c*T,s[1]=l*b+h*_+u*R,s[4]=l*m+h*v+u*A,s[7]=l*p+h*x+u*T,s[2]=d*b+f*_+g*R,s[5]=d*m+f*v+g*A,s[8]=d*p+f*x+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lo=new Oe;function gd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function op(){let r=Qs("canvas");return r.style.display="block",r}var Gh={};function qs(r){r in Gh||(Gh[r]=!0,console.warn(r))}function cp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function lp(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function hp(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var We={enabled:!0,workingColorSpace:Ot,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===at&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===at&&(r.r=ss(r.r),r.g=ss(r.g),r.b=ss(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ii?Ra:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Fn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ss(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Wh=[.64,.33,.3,.6,.15,.06],qh=[.2126,.7152,.0722],Xh=[.3127,.329],jh=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We.define({[Ot]:{primaries:Wh,whitePoint:Xh,transfer:Ra,toXYZ:jh,fromXYZ:Yh,luminanceCoefficients:qh,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:Wh,whitePoint:Xh,transfer:at,toXYZ:jh,fromXYZ:Yh,luminanceCoefficients:qh,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});var Oi,Zc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=Qs("canvas")),Oi.width=e.width,Oi.height=e.height;let n=Oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Fn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},up=0,ea=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=dn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Do(i[a].image)):s.push(Do(i[a]))}else s=Do(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Do(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dp=0,Pt=class r extends ci{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Un,i=Un,s=Gt,a=xn,o=$t,c=Bn,l=r.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=dn(),this.name="",this.source=new ea(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case Zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case Zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=id;Pt.DEFAULT_ANISOTROPY=1;var Ke=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,x=(f+1)/2,R=(p+1)/2,A=(h+d)/4,T=(u+b)/4,C=(g+m)/4;return v>x&&v>R?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=T/n):x>R?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=T/s,i=C/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$c=class extends ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ea(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends $c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ta=class extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qc=class extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],g=s[a+2],b=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*b,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let R=Math.sqrt(v),A=Math.atan2(R,p*_);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let x=o*_;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+b*x,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},No=new I,Kh=new xt,Qt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(s,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),br.subVectors(this.max,Ns),Fi.subVectors(e.a,Ns),ki.subVectors(e.b,Ns),Bi.subVectors(e.c,Ns),Zn.subVectors(ki,Fi),$n.subVectors(Bi,ki),xi.subVectors(Fi,Bi);let t=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-xi.z,xi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,xi.z,0,-xi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-xi.y,xi.x,0];return!Uo(t,Fi,ki,Bi,br)||(t=[1,0,0,0,1,0,0,0,1],!Uo(t,Fi,ki,Bi,br))?!1:(xr.crossVectors(Zn,$n),t=[xr.x,xr.y,xr.z],Uo(t,Fi,ki,Bi,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Tn=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,gr=new Qt,Fi=new I,ki=new I,Bi=new I,Zn=new I,$n=new I,xi=new I,Ns=new I,br=new I,xr=new I,_i=new I;function Uo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){_i.fromArray(r,s);let o=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var fp=new Qt,Us=new I,Oo=new I,Yt=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);let t=Us.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Oo)),this.expandByPoint(Us.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new I,Fo=new I,_r=new I,Qn=new I,ko=new I,vr=new I,Bo=new I,Ri=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fo.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Fo);let s=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=Qn.dot(this.direction),c=-Qn.dot(_r),l=Qn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fo).addScaledVector(_r,d),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);let n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,i,s){ko.subVectors(t,e),vr.subVectors(n,e),Bo.crossVectors(ko,vr);let a=this.direction.dot(Bo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qn.subVectors(this.origin,e);let c=o*this.direction.dot(vr.crossVectors(Qn,vr));if(c<0)return null;let l=o*this.direction.dot(ko.cross(Qn));if(l<0||c+l>a)return null;let h=-o*Qn.dot(Bo);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Re=class r{constructor(e,t,n,i,s,a,o,c,l,h,u,d,f,g,b,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,b,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/zi.setFromMatrixColumn(e,0).length(),s=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pp,e,mp)}lookAt(e,t,n){let i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),ei.crossVectors(n,Xt),ei.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),ei.crossVectors(n,Xt)),ei.normalize(),yr.crossVectors(Xt,ei),i[0]=ei.x,i[4]=yr.x,i[8]=Xt.x,i[1]=ei.y,i[5]=yr.y,i[9]=Xt.y,i[2]=ei.z,i[6]=yr.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],_=n[3],v=n[7],x=n[11],R=n[15],A=i[0],T=i[4],C=i[8],S=i[12],y=i[1],P=i[5],F=i[9],k=i[13],G=i[2],Y=i[6],W=i[10],$=i[14],z=i[3],ne=i[7],ue=i[11],ye=i[15];return s[0]=a*A+o*y+c*G+l*z,s[4]=a*T+o*P+c*Y+l*ne,s[8]=a*C+o*F+c*W+l*ue,s[12]=a*S+o*k+c*$+l*ye,s[1]=h*A+u*y+d*G+f*z,s[5]=h*T+u*P+d*Y+f*ne,s[9]=h*C+u*F+d*W+f*ue,s[13]=h*S+u*k+d*$+f*ye,s[2]=g*A+b*y+m*G+p*z,s[6]=g*T+b*P+m*Y+p*ne,s[10]=g*C+b*F+m*W+p*ue,s[14]=g*S+b*k+m*$+p*ye,s[3]=_*A+v*y+x*G+R*z,s[7]=_*T+v*P+x*Y+R*ne,s[11]=_*C+v*F+x*W+R*ue,s[15]=_*S+v*k+x*$+R*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+s*a*d-i*a*f+i*l*h-s*c*h)+m*(+t*l*u-t*o*f-s*a*u+n*a*f+s*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],_=u*m*l-b*d*l+b*c*f-o*m*f-u*c*p+o*d*p,v=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,x=h*b*l-g*u*l+g*o*f-a*b*f-h*o*p+a*u*p,R=g*u*c-h*b*c-g*o*d+a*b*d+h*o*m-a*u*m,A=t*_+n*v+i*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=_*T,e[1]=(b*d*s-u*m*s-b*i*f+n*m*f+u*i*p-n*d*p)*T,e[2]=(o*m*s-b*c*s+b*i*l-n*m*l-o*i*p+n*c*p)*T,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*f-n*c*f)*T,e[4]=v*T,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*T,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*T,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*f+t*c*f)*T,e[8]=x*T,e[9]=(g*u*s-h*b*s-g*n*f+t*b*f+h*n*p-t*u*p)*T,e[10]=(a*b*s-g*o*s+g*n*l-t*b*l-a*n*p+t*o*p)*T,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*f-t*o*f)*T,e[12]=R*T,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*T,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*T,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,b=a*h,m=a*u,p=o*u,_=c*l,v=c*h,x=c*u,R=n.x,A=n.y,T=n.z;return i[0]=(1-(b+p))*R,i[1]=(f+x)*R,i[2]=(g-v)*R,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(g+v)*T,i[9]=(m-_)*T,i[10]=(1-(d+b))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=zi.set(i[0],i[1],i[2]).length(),a=zi.set(i[4],i[5],i[6]).length(),o=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);let l=1/s,h=1/a,u=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=On){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(o===On)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Qr)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=On){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*l,f=(n+i)*h,g,b;if(o===On)g=(a+s)*u,b=-2*u;else if(o===Qr)g=s*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zi=new I,cn=new Re,pp=new I(0,0,0),mp=new I(1,1,1),ei=new I,yr=new I,Xt=new I,Jh=new Re,Zh=new xt,vn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gp=0,$h=new I,Hi=new xt,Cn=new Re,Mr=new I,Os=new I,bp=new I,xp=new xt,Qh=new I(1,0,0),eu=new I(0,1,0),tu=new I(0,0,1),nu={type:"added"},_p={type:"removed"},Vi={type:"childadded",child:null},zo={type:"childremoved",child:null},gt=class r extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new I,t=new vn,n=new xt,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Oe}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(eu,e)}rotateZ(e){return this.rotateOnAxis(tu,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(eu,e)}translateZ(e){return this.translateOnAxis(tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mr.copy(e):Mr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Os,Mr,this.up):Cn.lookAt(Mr,Os,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nu),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p),zo.child=e,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nu),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,xp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};gt.DEFAULT_UP=new I(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new I,Pn=new I,Ho=new I,In=new I,Gi=new I,Wi=new I,iu=new I,Vo=new I,Go=new I,Wo=new I,qo=new Ke,Xo=new Ke,jo=new Ke,si=class r{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ln.subVectors(i,t),Pn.subVectors(n,t),Ho.subVectors(e,t);let a=ln.dot(ln),o=ln.dot(Pn),c=ln.dot(Ho),l=Pn.dot(Pn),h=Pn.dot(Ho),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,In.x),c.addScaledVector(a,In.y),c.addScaledVector(o,In.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return qo.setScalar(0),Xo.setScalar(0),jo.setScalar(0),qo.fromBufferAttribute(e,t),Xo.fromBufferAttribute(e,n),jo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(qo,s.x),a.addScaledVector(Xo,s.y),a.addScaledVector(jo,s.z),a}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Pn.subVectors(e,t),ln.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Gi.subVectors(i,n),Wi.subVectors(s,n),Vo.subVectors(e,n);let c=Gi.dot(Vo),l=Wi.dot(Vo);if(c<=0&&l<=0)return t.copy(n);Go.subVectors(e,i);let h=Gi.dot(Go),u=Wi.dot(Go);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Gi,a);Wo.subVectors(e,s);let f=Gi.dot(Wo),g=Wi.dot(Wo);if(g>=0&&f<=g)return t.copy(s);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Wi,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return iu.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(iu,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Gi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Yo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=kl(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Yo(a,s,e+1/3),this.g=Yo(a,s,e),this.b=Yo(a,s,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=ss(e.r),this.g=ss(e.g),this.b=ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return We.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ct(Dt.r*255,0,255))*65536+Math.round(Ct(Dt.g*255,0,255))*256+Math.round(Ct(Dt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(Dt.copy(this),t);let n=Dt.r,i=Dt.g,s=Dt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=yt){We.fromWorkingColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,i=Dt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Sr);let n=Ks(ti.h,Sr.h,t),i=Ks(ti.s,Sr.s,t),s=Ks(ti.l,Sr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new pe;pe.NAMES=bd;var vp=0,Wt=class extends ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=dn(),this.name="",this.blending=ns,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_t=class extends Wt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new I,wr=new Ce,ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}};var na=class extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ia=class extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xe=class extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},yp=0,Zt=new Re,Ko=new gt,qi=new I,jt=new Qt,Fs=new Qt,Rt=new I,dt=class r extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?ia:na)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(jt.min,Fs.min),jt.expandByPoint(Rt),Rt.addVectors(jt.max,Fs.max),jt.expandByPoint(Rt)):(jt.expandByPoint(Fs.min),jt.expandByPoint(Fs.max))}jt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Rt.fromBufferAttribute(o,l),c&&(qi.fromBufferAttribute(e,l),Rt.add(qi)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new I,c[C]=new I;let l=new I,h=new I,u=new I,d=new Ce,f=new Ce,g=new Ce,b=new I,m=new I;function p(C,S,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(b),o[S].add(b),o[y].add(b),c[C].add(m),c[S].add(m),c[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,S=_.length;C<S;++C){let y=_[C],P=y.start,F=y.count;for(let k=P,G=P+F;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new I,x=new I,R=new I,A=new I;function T(C){R.fromBufferAttribute(i,C),A.copy(R);let S=o[C];v.copy(S),v.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(A,S);let P=x.dot(c[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,P)}for(let C=0,S=_.length;C<S;++C){let y=_[C],P=y.start,F=y.count;for(let k=P,G=P+F;k<G;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,s=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},su=new Re,vi=new Ri,Ar=new Yt,ru=new I,Er=new I,Tr=new I,Rr=new I,Jo=new I,Cr=new I,au=new I,Pr=new I,Fe=class extends gt{constructor(e=new dt,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Cr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Jo.fromBufferAttribute(u,e),a?Cr.addScaledVector(Jo,h):Cr.addScaledVector(Jo.sub(t),h))}t.add(Cr)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(Ar.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Ar,ru)===null||vi.origin.distanceToSquared(ru)>(e.far-e.near)**2))&&(su.copy(s).invert(),vi.copy(e.ray).applyMatrix4(su),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,R=v;x<R;x+=3){let A=o.getX(x),T=o.getX(x+1),C=o.getX(x+2);i=Ir(this,p,e,n,l,h,u,A,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let _=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);i=Ir(this,a,e,n,l,h,u,_,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,R=v;x<R;x+=3){let A=x,T=x+1,C=x+2;i=Ir(this,p,e,n,l,h,u,A,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let _=m,v=m+1,x=m+2;i=Ir(this,a,e,n,l,h,u,_,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Mp(r,e,t,n,i,s,a,o){let c;if(e.side===Nt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===_n,o),c===null)return null;Pr.copy(o),Pr.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(Pr);return l<t.near||l>t.far?null:{distance:l,point:Pr.clone(),object:r}}function Ir(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Er),r.getVertexPosition(c,Tr),r.getVertexPosition(l,Rr);let h=Mp(r,e,t,n,Er,Tr,Rr,au);if(h){let u=new I;si.getBarycoord(au,Er,Tr,Rr,u),i&&(h.uv=si.getInterpolatedAttribute(i,o,c,l,u,new Ce)),s&&(h.uv1=si.getInterpolatedAttribute(s,o,c,l,u,new Ce)),a&&(h.normal=si.getInterpolatedAttribute(a,o,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};si.getNormal(Er,Tr,Rr,d.normal),h.face=d,h.barycoord=u}return h}var en=class r extends dt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function g(b,m,p,_,v,x,R,A,T,C,S){let y=x/T,P=R/C,F=x/2,k=R/2,G=A/2,Y=T+1,W=C+1,$=0,z=0,ne=new I;for(let ue=0;ue<W;ue++){let ye=ue*P-k;for(let De=0;De<Y;De++){let Ze=De*y-F;ne[b]=Ze*_,ne[m]=ye*v,ne[p]=G,l.push(ne.x,ne.y,ne.z),ne[b]=0,ne[m]=0,ne[p]=A>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(De/T),u.push(1-ue/C),$+=1}}for(let ue=0;ue<C;ue++)for(let ye=0;ye<T;ye++){let De=d+ye+Y*ue,Ze=d+ye+Y*(ue+1),j=d+(ye+1)+Y*(ue+1),ee=d+(ye+1)+Y*ue;c.push(De,Ze,ee),c.push(Ze,j,ee),z+=6}o.addGroup(f,z,S),f+=z,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ps(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(r){let e={};for(let t=0;t<r.length;t++){let n=ps(r[t]);for(let i in n)e[i]=n[i]}return e}function Sp(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function xd(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var wp={clone:ps,merge:Bt},Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends Wt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},sa=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new I,ou=new Ce,cu=new Ce,bt=class extends sa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,ou,cu),t.subVectors(cu,ou)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xi=-90,ji=1,el=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new bt(Xi,ji,e,t);i.layers=this.layers,this.add(i);let s=new bt(Xi,ji,e,t);s.layers=this.layers,this.add(s);let a=new bt(Xi,ji,e,t);a.layers=this.layers,this.add(a);let o=new bt(Xi,ji,e,t);o.layers=this.layers,this.add(o);let c=new bt(Xi,ji,e,t);c.layers=this.layers,this.add(c);let l=new bt(Xi,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ra=class extends Pt{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:os,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tl=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ra(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new en(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:ai});s.uniforms.tEquirect.value=t;let a=new Fe(i,s),o=t.minFilter;return t.minFilter===xn&&(t.minFilter=Gt),new el(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Zo=new I,Tp=new I,Rp=new Oe,Nn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Zo.subVectors(n,t).cross(Tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rp.getNormalMatrix(e),i=this.coplanarPoint(Zo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Yt,Lr=new I,tr=class{constructor(e=new Nn,t=new Nn,n=new Nn,i=new Nn,s=new Nn,a=new Nn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],_=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,m-f,x-p).normalize(),n[1].setComponents(c+s,d+l,m+f,x+p).normalize(),n[2].setComponents(c+a,d+h,m+g,x+_).normalize(),n[3].setComponents(c-a,d-h,m-g,x-_).normalize(),n[4].setComponents(c-o,d-u,m-b,x-v).normalize(),t===On)n[5].setComponents(c+o,d+u,m+b,x+v).normalize();else if(t===Qr)n[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Lr.x=i.normal.x>0?e.max.x:e.min.x,Lr.y=i.normal.y>0?e.max.y:e.min.y,Lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function _d(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Cp(r){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];r.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var ms=class r extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let v=0;v<l;v++){let x=v*u-s;g.push(x,-_,0),b.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let v=_+l*p,x=_+l*(p+1),R=_+1+l*(p+1),A=_+1+l*p;f.push(v,x,A),f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ip=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Up=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qp=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,em=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Mm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bm=`#if defined( USE_POINTS_UV )
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
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$m=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fg=`#define DISTANCE
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
}`,kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`uniform float scale;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Gg=`#include <common>
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
}`,Wg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,jg=`#define MATCAP
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
}`,Yg=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,Jg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zg=`#define PHONG
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
}`,$g=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qg=`#define STANDARD
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
}`,e0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,t0=`#define TOON
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
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,i0=`uniform float size;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,a0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,o0=`uniform float rotation;
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
}`,c0=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Pp,alphahash_pars_fragment:Ip,alphamap_fragment:Lp,alphamap_pars_fragment:Dp,alphatest_fragment:Np,alphatest_pars_fragment:Up,aomap_fragment:Op,aomap_pars_fragment:Fp,batching_pars_vertex:kp,batching_vertex:Bp,begin_vertex:zp,beginnormal_vertex:Hp,bsdfs:Vp,iridescence_fragment:Gp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:qp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Yp,color_fragment:Kp,color_pars_fragment:Jp,color_pars_vertex:Zp,color_vertex:$p,common:Qp,cube_uv_reflection_fragment:em,defaultnormal_vertex:tm,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:sm,emissivemap_pars_fragment:rm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:cm,envmap_common_pars_fragment:lm,envmap_pars_fragment:hm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Mm,envmap_vertex:dm,fog_vertex:fm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:bm,lightmap_pars_fragment:xm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:vm,lights_pars_begin:ym,lights_toon_fragment:Sm,lights_toon_pars_fragment:wm,lights_phong_fragment:Am,lights_phong_pars_fragment:Em,lights_physical_fragment:Tm,lights_physical_pars_fragment:Rm,lights_fragment_begin:Cm,lights_fragment_maps:Pm,lights_fragment_end:Im,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Dm,logdepthbuf_pars_vertex:Nm,logdepthbuf_vertex:Um,map_fragment:Om,map_pars_fragment:Fm,map_particle_fragment:km,map_particle_pars_fragment:Bm,metalnessmap_fragment:zm,metalnessmap_pars_fragment:Hm,morphinstance_vertex:Vm,morphcolor_vertex:Gm,morphnormal_vertex:Wm,morphtarget_pars_vertex:qm,morphtarget_vertex:Xm,normal_fragment_begin:jm,normal_fragment_maps:Ym,normal_pars_fragment:Km,normal_pars_vertex:Jm,normal_vertex:Zm,normalmap_pars_fragment:$m,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:eg,clearcoat_pars_fragment:tg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:sg,premultiplied_alpha_fragment:rg,project_vertex:ag,dithering_fragment:og,dithering_pars_fragment:cg,roughnessmap_fragment:lg,roughnessmap_pars_fragment:hg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:dg,shadowmap_vertex:fg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:bg,skinnormal_vertex:xg,specularmap_fragment:_g,specularmap_pars_fragment:vg,tonemapping_fragment:yg,tonemapping_pars_fragment:Mg,transmission_fragment:Sg,transmission_pars_fragment:wg,uv_pars_fragment:Ag,uv_pars_vertex:Eg,uv_vertex:Tg,worldpos_vertex:Rg,background_vert:Cg,background_frag:Pg,backgroundCube_vert:Ig,backgroundCube_frag:Lg,cube_vert:Dg,cube_frag:Ng,depth_vert:Ug,depth_frag:Og,distanceRGBA_vert:Fg,distanceRGBA_frag:kg,equirect_vert:Bg,equirect_frag:zg,linedashed_vert:Hg,linedashed_frag:Vg,meshbasic_vert:Gg,meshbasic_frag:Wg,meshlambert_vert:qg,meshlambert_frag:Xg,meshmatcap_vert:jg,meshmatcap_frag:Yg,meshnormal_vert:Kg,meshnormal_frag:Jg,meshphong_vert:Zg,meshphong_frag:$g,meshphysical_vert:Qg,meshphysical_frag:e0,meshtoon_vert:t0,meshtoon_frag:n0,points_vert:i0,points_frag:s0,shadow_vert:r0,shadow_frag:a0,sprite_vert:o0,sprite_frag:c0},re={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},bn={basic:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new pe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Bt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Bt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new pe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Bt([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Bt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Bt([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Bt([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Bt([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Bt([re.lights,re.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};bn.physical={uniforms:Bt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var Dr={r:0,b:0,g:0},Mi=new vn,l0=new Re;function h0(r,e,t,n,i,s,a){let o=new pe(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function b(_){let v=!1,x=g(_);x===null?p(o,c):x&&x.isColor&&(p(x,1),v=!0);let R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===Ea)?(h===void 0&&(h=new Fe(new en(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ps(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Mi.copy(v.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(Mi)),h.material.toneMapped=We.getTransfer(x.colorSpace)!==at,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Fe(new ms(2,2),new yn({name:"BackgroundMaterial",uniforms:ps(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=We.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(Dr,xd(r)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:b,addToRenderList:m}}function u0(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(y,P,F,k,G){let Y=!1,W=u(k,F,P);s!==W&&(s=W,l(s.object)),Y=f(y,k,F,G),Y&&g(y,k,F,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(y,P,F,k),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return r.createVertexArray()}function l(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,P,F){let k=F.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let Y=G[P.id];Y===void 0&&(Y={},G[P.id]=Y);let W=Y[k];return W===void 0&&(W=d(c()),Y[k]=W),W}function d(y){let P=[],F=[],k=[];for(let G=0;G<t;G++)P[G]=0,F[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,P,F,k){let G=s.attributes,Y=P.attributes,W=0,$=F.getAttributes();for(let z in $)if($[z].location>=0){let ue=G[z],ye=Y[z];if(ye===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),ue===void 0||ue.attribute!==ye||ye&&ue.data!==ye.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function g(y,P,F,k){let G={},Y=P.attributes,W=0,$=F.getAttributes();for(let z in $)if($[z].location>=0){let ue=Y[z];ue===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor));let ye={};ye.attribute=ue,ue&&ue.data&&(ye.data=ue.data),G[z]=ye,W++}s.attributes=G,s.attributesNum=W,s.index=k}function b(){let y=s.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){let F=s.newAttributes,k=s.enabledAttributes,G=s.attributeDivisors;F[y]=1,k[y]===0&&(r.enableVertexAttribArray(y),k[y]=1),G[y]!==P&&(r.vertexAttribDivisor(y,P),G[y]=P)}function _(){let y=s.newAttributes,P=s.enabledAttributes;for(let F=0,k=P.length;F<k;F++)P[F]!==y[F]&&(r.disableVertexAttribArray(F),P[F]=0)}function v(y,P,F,k,G,Y,W){W===!0?r.vertexAttribIPointer(y,P,F,G,Y):r.vertexAttribPointer(y,P,F,k,G,Y)}function x(y,P,F,k){b();let G=k.attributes,Y=F.getAttributes(),W=P.defaultAttributeValues;for(let $ in Y){let z=Y[$];if(z.location>=0){let ne=G[$];if(ne===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ne!==void 0){let ue=ne.normalized,ye=ne.itemSize,De=e.get(ne);if(De===void 0)continue;let Ze=De.buffer,j=De.type,ee=De.bytesPerElement,me=j===r.INT||j===r.UNSIGNED_INT||ne.gpuType===Il;if(ne.isInterleavedBufferAttribute){let ae=ne.data,we=ae.stride,Pe=ne.offset;if(ae.isInstancedInterleavedBuffer){for(let Ne=0;Ne<z.locationSize;Ne++)p(z.location+Ne,ae.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ne=0;Ne<z.locationSize;Ne++)m(z.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Ne=0;Ne<z.locationSize;Ne++)v(z.location+Ne,ye/z.locationSize,j,ue,we*ee,(Pe+ye/z.locationSize*Ne)*ee,me)}else{if(ne.isInstancedBufferAttribute){for(let ae=0;ae<z.locationSize;ae++)p(z.location+ae,ne.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ae=0;ae<z.locationSize;ae++)m(z.location+ae);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let ae=0;ae<z.locationSize;ae++)v(z.location+ae,ye/z.locationSize,j,ue,ye*ee,ye/z.locationSize*ae*ee,me)}}else if(W!==void 0){let ue=W[$];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(z.location,ue);break;case 3:r.vertexAttrib3fv(z.location,ue);break;case 4:r.vertexAttrib4fv(z.location,ue);break;default:r.vertexAttrib1fv(z.location,ue)}}}}_()}function R(){C();for(let y in n){let P=n[y];for(let F in P){let k=P[F];for(let G in k)h(k[G].object),delete k[G];delete P[F]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let F in P){let k=P[F];for(let G in k)h(k[G].object),delete k[G];delete P[F]}delete n[y.id]}function T(y){for(let P in n){let F=n[P];if(F[y.id]===void 0)continue;let k=F[y.id];for(let G in k)h(k[G].object),delete k[G];delete F[y.id]}}function C(){S(),a=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function d0(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*d[b];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function f0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==$t&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let C=T===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Bn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==un&&!C)}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function p0(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Nn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{let _=s?0:n,v=_*4,x=p.clippingState||null;c.value=x,x=h(g,d,v,f);for(let R=0;R!==v;++R)x[R]=t[R];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==b;++v,x+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function m0(r){let e=new WeakMap;function t(a,o){return o===Mc?a.mapping=os:o===Sc&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Mc||o===Sc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new tl(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var gs=class extends sa{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ts=4,lu=[.125,.215,.35,.446,.526,.582],Ei=20,$o=new gs,hu=new pe,Qo=null,ec=0,tc=0,nc=!1,wi=(1+Math.sqrt(5))/2,Yi=1/wi,uu=[new I(-wi,Yi,0),new I(wi,Yi,0),new I(-Yi,0,wi),new I(Yi,0,wi),new I(0,wi,-Yi),new I(0,wi,Yi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Qo=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,ec,tc),this._renderer.xr.enabled=nc,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),ec=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:lr,format:$t,colorSpace:Ot,depthBuffer:!1},i=du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(s)),this._blurMaterial=b0(s,e,t)}return i}_compileMaterial(e){let t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,i){let o=new bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(hu),h.toneMapping=oi,h.autoClear=!1;let f=new _t({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new Fe(new en,f),b=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(hu),b=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let v=this._cubeSize;Nr(i,_*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===os||e.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Nr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=uu[(i-s-1)%uu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Fe(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),b=s/g,m=isFinite(s)?1+Math.floor(h*b):Ei;m>Ei&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);let p=[],_=0;for(let T=0;T<Ei;++T){let C=T/b,S=Math.exp(-C*C/2);p.push(S),T===0?_+=S:T<m&&(_+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let x=this._sizeLods[i],R=3*x*(i>v-ts?i-v+ts:0),A=4*(this._cubeSize-x);Nr(t,R,A,3*x,2*x),c.setRenderTarget(t),c.render(u,$o)}};function g0(r){let e=[],t=[],n=[],i=r,s=r-ts+1+lu.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>r-ts?c=lu[a-r+ts-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,m=2,p=1,_=new Float32Array(b*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){let T=A%3*2/3-1,C=A>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];_.set(S,b*g*A),v.set(d,m*g*A);let y=[A,A,A,A,A,A];x.set(y,p*g*A)}let R=new dt;R.setAttribute("position",new ot(_,b)),R.setAttribute("uv",new ot(v,m)),R.setAttribute("faceIndex",new ot(x,p)),e.push(R),i>ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function du(r,e,t){let n=new zn(r,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function b0(r,e,t){let n=new Float32Array(Ei),i=new I(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function fu(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function pu(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Bl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function x0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Mc||c===Sc,h=c===os||c===cs;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new bs(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new bs(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _0(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&qs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function v0(r,e,t,n){let i={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],r.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(f!==null){let _=f.array;b=f.version;for(let v=0,x=_.length;v<x;v+=3){let R=_[v+0],A=_[v+1],T=_[v+2];d.push(R,A,A,T,T,R)}}else if(g!==void 0){let _=g.array;b=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){let R=v+0,A=v+1,T=v+2;d.push(R,A,A,T,T,R)}}else return;let m=new(gd(d)?ia:na)(d,1);m.version=b;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function y0(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,b){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,b,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*b[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function M0(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function S0(r,e,t){let n=new WeakMap,i=new Ke;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),b===!0&&(v=3);let x=o.attributes.position.count*v,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*R*4*u),T=new ta(A,x,R,u);T.type=un,T.needsUpdate=!0;let C=v*4;for(let y=0;y<u;y++){let P=m[y],F=p[y],k=_[y],G=x*R*4*y;for(let Y=0;Y<P.count;Y++){let W=Y*C;f===!0&&(i.fromBufferAttribute(P,Y),A[G+W+0]=i.x,A[G+W+1]=i.y,A[G+W+2]=i.z,A[G+W+3]=0),g===!0&&(i.fromBufferAttribute(F,Y),A[G+W+4]=i.x,A[G+W+5]=i.y,A[G+W+6]=i.z,A[G+W+7]=0),b===!0&&(i.fromBufferAttribute(k,Y),A[G+W+8]=i.x,A[G+W+9]=i.y,A[G+W+10]=i.z,A[G+W+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new Ce(x,R)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function w0(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var aa=class extends Pt{constructor(e,t,n,i,s,a,o,c,l,h=is){if(h!==is&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=Ti),n===void 0&&h===hs&&(n=ls),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ut,this.minFilter=c!==void 0?c:Ut,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vd=new Pt,mu=new aa(1,1),yd=new ta,Md=new Qc,Sd=new ra,gu=[],bu=[],xu=new Float32Array(16),_u=new Float32Array(9),vu=new Float32Array(4);function Ss(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=gu[i];if(s===void 0&&(s=new Float32Array(i),gu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Pa(r,e){let t=bu[e];t===void 0&&(t=new Int32Array(e),bu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function A0(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function E0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function T0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function R0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function C0(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;vu.set(n),r.uniformMatrix2fv(this.addr,!1,vu),At(t,n)}}function P0(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;_u.set(n),r.uniformMatrix3fv(this.addr,!1,_u),At(t,n)}}function I0(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;xu.set(n),r.uniformMatrix4fv(this.addr,!1,xu),At(t,n)}}function L0(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function D0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function N0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function U0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function O0(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function F0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function k0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function B0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function z0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mu.compareFunction=md,s=mu):s=vd,t.setTexture2D(e||s,i)}function H0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Md,i)}function V0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sd,i)}function G0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yd,i)}function W0(r){switch(r){case 5126:return A0;case 35664:return E0;case 35665:return T0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return I0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return N0;case 35669:case 35673:return U0;case 5125:return O0;case 36294:return F0;case 36295:return k0;case 36296:return B0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}function q0(r,e){r.uniform1fv(this.addr,e)}function X0(r,e){let t=Ss(e,this.size,2);r.uniform2fv(this.addr,t)}function j0(r,e){let t=Ss(e,this.size,3);r.uniform3fv(this.addr,t)}function Y0(r,e){let t=Ss(e,this.size,4);r.uniform4fv(this.addr,t)}function K0(r,e){let t=Ss(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function J0(r,e){let t=Ss(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Z0(r,e){let t=Ss(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $0(r,e){r.uniform1iv(this.addr,e)}function Q0(r,e){r.uniform2iv(this.addr,e)}function eb(r,e){r.uniform3iv(this.addr,e)}function tb(r,e){r.uniform4iv(this.addr,e)}function nb(r,e){r.uniform1uiv(this.addr,e)}function ib(r,e){r.uniform2uiv(this.addr,e)}function sb(r,e){r.uniform3uiv(this.addr,e)}function rb(r,e){r.uniform4uiv(this.addr,e)}function ab(r,e,t){let n=this.cache,i=e.length,s=Pa(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||vd,s[a])}function ob(r,e,t){let n=this.cache,i=e.length,s=Pa(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Md,s[a])}function cb(r,e,t){let n=this.cache,i=e.length,s=Pa(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Sd,s[a])}function lb(r,e,t){let n=this.cache,i=e.length,s=Pa(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||yd,s[a])}function hb(r){switch(r){case 5126:return q0;case 35664:return X0;case 35665:return j0;case 35666:return Y0;case 35674:return K0;case 35675:return J0;case 35676:return Z0;case 5124:case 35670:return $0;case 35667:case 35671:return Q0;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return sb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return cb;case 36289:case 36303:case 36311:case 36292:return lb}}var nl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}},il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hb(t.type)}},sl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},ic=/(\w+)(\])?(\[|\.)?/g;function yu(r,e){r.seq.push(e),r.map[e.id]=e}function ub(r,e,t){let n=r.name,i=n.length;for(ic.lastIndex=0;;){let s=ic.exec(n),a=ic.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){yu(t,l===void 0?new nl(o,r,e):new il(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new sl(o),yu(t,u)),t=u}}}var rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);ub(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Mu(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var db=37297,fb=0;function pb(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Su=new Oe;function mb(r){We._getMatrix(Su,We.workingColorSpace,r);let e=`mat3( ${Su.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(r)){case Ra:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function wu(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+pb(r.getShaderSource(e),a)}else return i}function gb(r,e){let t=mb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bb(r,e){let t;switch(e){case Tf:t="Linear";break;case Rf:t="Reinhard";break;case Cf:t="Cineon";break;case Cl:t="ACESFilmic";break;case If:t="AgX";break;case Lf:t="Neutral";break;case Pf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ur=new I;function xb(){We.getLuminanceCoefficients(Ur);let r=Ur.x.toFixed(4),e=Ur.y.toFixed(4),t=Ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function vb(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yb(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Xs(r){return r!==""}function Au(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(r){return r.replace(Mb,wb)}var Sb=new Map;function wb(r,e){let t=ke[e];if(t===void 0){let n=Sb.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return rl(t)}var Ab=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(r){return r.replace(Ab,Eb)}function Eb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ru(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===td?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case os:case cs:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Pb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case nd:e="ENVMAP_BLENDING_MULTIPLY";break;case Af:e="ENVMAP_BLENDING_MIX";break;case Ef:e="ENVMAP_BLENDING_ADD";break}return e}function Ib(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lb(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Tb(t),l=Rb(t),h=Cb(t),u=Pb(t),d=Ib(t),f=_b(t),g=vb(s),b=i.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[Ru(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?ke.tonemapping_pars_fragment:"",t.toneMapping!==oi?bb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,gb("linearToOutputTexel",t.outputColorSpace),xb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=rl(a),a=Au(a,t),a=Eu(a,t),o=rl(o),o=Au(o,t),o=Eu(o,t),a=Tu(a),o=Tu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+m+a,x=_+p+o,R=Mu(i,i.VERTEX_SHADER,v),A=Mu(i,i.FRAGMENT_SHADER,x);i.attachShader(b,R),i.attachShader(b,A),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function T(P){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(b).trim(),k=i.getShaderInfoLog(R).trim(),G=i.getShaderInfoLog(A).trim(),Y=!0,W=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,R,A);else{let $=wu(i,R,"vertex"),z=wu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+$+`
`+z)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||G==="")&&(W=!1);W&&(P.diagnostics={runnable:Y,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(R),i.deleteShader(A),C=new rs(i,b),S=yb(i,b)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(b,db)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=A,this}var Db=0,al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ol(e),t.set(e,n)),n}},ol=class{constructor(e){this.id=Db++,this.code=e,this.usedTimes=0}};function Nb(r,e,t,n,i,s,a){let o=new er,c=new al,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,F,k){let G=F.fog,Y=k.geometry,W=S.isMeshStandardMaterial?F.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),z=$&&$.mapping===Ea?$.image.height:null,ne=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ye=ue!==void 0?ue.length:0,De=0;Y.morphAttributes.position!==void 0&&(De=1),Y.morphAttributes.normal!==void 0&&(De=2),Y.morphAttributes.color!==void 0&&(De=3);let Ze,j,ee,me;if(ne){let je=bn[ne];Ze=je.vertexShader,j=je.fragmentShader}else Ze=S.vertexShader,j=S.fragmentShader,c.update(S),ee=c.getVertexShaderID(S),me=c.getFragmentShaderID(S);let ae=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Pe=k.isInstancedMesh===!0,Ne=k.isBatchedMesh===!0,ft=!!S.map,qe=!!S.matcap,$e=!!$,O=!!S.aoMap,Ht=!!S.lightMap,ze=!!S.bumpMap,Be=!!S.normalMap,Me=!!S.displacementMap,Qe=!!S.emissiveMap,Se=!!S.metalnessMap,E=!!S.roughnessMap,M=S.anisotropy>0,B=S.clearcoat>0,K=S.dispersion>0,Z=S.iridescence>0,X=S.sheen>0,ge=S.transmission>0,oe=M&&!!S.anisotropyMap,he=B&&!!S.clearcoatMap,He=B&&!!S.clearcoatNormalMap,Q=B&&!!S.clearcoatRoughnessMap,de=Z&&!!S.iridescenceMap,Ae=Z&&!!S.iridescenceThicknessMap,Te=X&&!!S.sheenColorMap,fe=X&&!!S.sheenRoughnessMap,Ve=!!S.specularMap,Le=!!S.specularColorMap,nt=!!S.specularIntensityMap,L=ge&&!!S.transmissionMap,se=ge&&!!S.thicknessMap,q=!!S.gradientMap,J=!!S.alphaMap,ce=S.alphaTest>0,ie=!!S.alphaHash,Ee=!!S.extensions,ct=oi;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ct=r.toneMapping);let St={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Ze,fragmentShader:j,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ot,alphaToCoverage:!!S.alphaToCoverage,map:ft,matcap:qe,envMap:$e,envMapMode:$e&&$.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:Ht,bumpMap:ze,normalMap:Be,displacementMap:d&&Me,emissiveMap:Qe,normalMapObjectSpace:Be&&S.normalMapType===Ff,normalMapTangentSpace:Be&&S.normalMapType===pd,metalnessMap:Se,roughnessMap:E,anisotropy:M,anisotropyMap:oe,clearcoat:B,clearcoatMap:he,clearcoatNormalMap:He,clearcoatRoughnessMap:Q,dispersion:K,iridescence:Z,iridescenceMap:de,iridescenceThicknessMap:Ae,sheen:X,sheenColorMap:Te,sheenRoughnessMap:fe,specularMap:Ve,specularColorMap:Le,specularIntensityMap:nt,transmission:ge,transmissionMap:L,thicknessMap:se,gradientMap:q,opaque:S.transparent===!1&&S.blending===ns&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:ce,alphaHash:ie,combine:S.combine,mapUv:ft&&b(S.map.channel),aoMapUv:O&&b(S.aoMap.channel),lightMapUv:Ht&&b(S.lightMap.channel),bumpMapUv:ze&&b(S.bumpMap.channel),normalMapUv:Be&&b(S.normalMap.channel),displacementMapUv:Me&&b(S.displacementMap.channel),emissiveMapUv:Qe&&b(S.emissiveMap.channel),metalnessMapUv:Se&&b(S.metalnessMap.channel),roughnessMapUv:E&&b(S.roughnessMap.channel),anisotropyMapUv:oe&&b(S.anisotropyMap.channel),clearcoatMapUv:he&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:He&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:fe&&b(S.sheenRoughnessMap.channel),specularMapUv:Ve&&b(S.specularMap.channel),specularColorMapUv:Le&&b(S.specularColorMap.channel),specularIntensityMapUv:nt&&b(S.specularIntensityMap.channel),transmissionMapUv:L&&b(S.transmissionMap.channel),thicknessMapUv:se&&b(S.thicknessMap.channel),alphaMapUv:J&&b(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Be||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(ft||J),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:we,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:De,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:ft&&S.map.isVideoTexture===!0&&We.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:Qe&&S.emissiveMap.isVideoTexture===!0&&We.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mt,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(_(y,S),v(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function _(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let y=g[S.type],P;if(y){let F=bn[y];P=wp.clone(F.uniforms)}else P=S.uniforms;return P}function R(S,y){let P;for(let F=0,k=h.length;F<k;F++){let G=h[F];if(G.cacheKey===y){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Lb(r,y,S,s),h.push(P)),P}function A(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function Ub(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Ob(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Cu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Pu(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,b,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function o(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Ob),n.length>1&&n.sort(d||Cu),i.length>1&&i.sort(d||Cu)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Fb(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Pu,r.set(n,[a])):i>=s.length?(a=new Pu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function kb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new pe};break;case"SpotLight":t={position:new I,direction:new I,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Bb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var zb=0;function Hb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Vb(r){let e=new kb,t=Bb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,s=new Re,a=new Re;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,_=0,v=0,x=0,R=0,A=0,T=0;l.sort(Hb);for(let S=0,y=l.length;S<y;S++){let P=l[S],F=P.color,k=P.intensity,G=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*k,u+=F.g*k,d+=F.b*k;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],k);T++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,z=t.get(P);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=P.shadow.matrix,_++}n.directional[f]=W,f++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(k),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[b]=W;let $=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,$.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[b]=$.matrix,P.castShadow){let z=t.get(P);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.spotShadow[b]=z,n.spotShadowMap[b]=Y,x++}b++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(F).multiplyScalar(k),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let $=P.shadow,z=t.get(P);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,z.shadowCameraNear=$.camera.near,z.shadowCameraFar=$.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(k),W.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==b||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==_||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=b,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=_,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=T,n.version=zb++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0,m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let v=l[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[b];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function Iu(r){let e=new Vb(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Gb(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new Iu(r),e.set(i,[o])):s>=a.length?(o=new Iu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var cl=class extends Wt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends Wt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xb(r,e,t){let n=new tr,i=new Ce,s=new Ce,a=new Ke,o=new cl({depthPacking:Of}),c=new ll,l={},h=t.maxTextureSize,u={[_n]:Nt,[Nt]:_n,[Mt]:Mt},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Wb,fragmentShader:qb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new dt;g.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Fe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let p=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=r.getRenderTarget(),y=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),F=r.state;F.setBlending(ai),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==Dn&&this.type===Dn,G=p===Dn&&this.type!==Dn;for(let Y=0,W=A.length;Y<W;Y++){let $=A[Y],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let ne=z.getFrameExtents();if(i.multiply(ne),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,z.mapSize.y=s.y)),z.map===null||k===!0||G===!0){let ye=this.type!==Dn?{minFilter:Ut,magFilter:Ut}:{};z.map!==null&&z.map.dispose(),z.map=new zn(i.x,i.y,ye),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();let ue=z.getViewportCount();for(let ye=0;ye<ue;ye++){let De=z.getViewport(ye);a.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),F.viewport(a),z.updateMatrices($,ye),n=z.getFrustum(),x(T,C,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===Dn&&_(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,y,P)};function _(A,T){let C=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,C,d,b,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,C,f,b,null)}function v(A,T,C,S){let y=null,P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let F=y.uuid,k=T.uuid,G=l[F];G===void 0&&(G={},l[F]=G);let Y=G[k];Y===void 0&&(Y=y.clone(),G[k]=Y,T.addEventListener("dispose",R)),y=Y}if(y.visible=T.visible,y.wireframe=T.wireframe,S===Dn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let F=r.properties.get(y);F.light=C}return y}function x(A,T,C,S,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let k=e.update(A),G=A.material;if(Array.isArray(G)){let Y=k.groups;for(let W=0,$=Y.length;W<$;W++){let z=Y[W],ne=G[z.materialIndex];if(ne&&ne.visible){let ue=v(A,ne,S,y);A.onBeforeShadow(r,A,T,C,k,ue,z),r.renderBufferDirect(C,null,k,ue,A,z),A.onAfterShadow(r,A,T,C,k,ue,z)}}}else if(G.visible){let Y=v(A,G,S,y);A.onBeforeShadow(r,A,T,C,k,Y,null),r.renderBufferDirect(C,null,k,Y,A,null),A.onAfterShadow(r,A,T,C,k,Y,null)}}let F=A.children;for(let k=0,G=F.length;k<G;k++)x(F[k],T,C,S,y)}function R(A){A.target.removeEventListener("dispose",R);for(let C in l){let S=l[C],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}var jb={[mc]:gc,[bc]:vc,[xc]:yc,[as]:_c,[gc]:mc,[vc]:bc,[yc]:xc,[_c]:as};function Yb(r,e){function t(){let L=!1,se=new Ke,q=null,J=new Ke(0,0,0,0);return{setMask:function(ce){q!==ce&&!L&&(r.colorMask(ce,ce,ce,ce),q=ce)},setLocked:function(ce){L=ce},setClear:function(ce,ie,Ee,ct,St){St===!0&&(ce*=ct,ie*=ct,Ee*=ct),se.set(ce,ie,Ee,ct),J.equals(se)===!1&&(r.clearColor(ce,ie,Ee,ct),J.copy(se))},reset:function(){L=!1,q=null,J.set(-1,0,0,0)}}}function n(){let L=!1,se=!1,q=null,J=null,ce=null;return{setReversed:function(ie){if(se!==ie){let Ee=e.get("EXT_clip_control");se?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT);let ct=ce;ce=null,this.setClear(ct)}se=ie},getReversed:function(){return se},setTest:function(ie){ie?ae(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(ie){q!==ie&&!L&&(r.depthMask(ie),q=ie)},setFunc:function(ie){if(se&&(ie=jb[ie]),J!==ie){switch(ie){case mc:r.depthFunc(r.NEVER);break;case gc:r.depthFunc(r.ALWAYS);break;case bc:r.depthFunc(r.LESS);break;case as:r.depthFunc(r.LEQUAL);break;case xc:r.depthFunc(r.EQUAL);break;case _c:r.depthFunc(r.GEQUAL);break;case vc:r.depthFunc(r.GREATER);break;case yc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ie}},setLocked:function(ie){L=ie},setClear:function(ie){ce!==ie&&(se&&(ie=1-ie),r.clearDepth(ie),ce=ie)},reset:function(){L=!1,q=null,J=null,ce=null,se=!1}}}function i(){let L=!1,se=null,q=null,J=null,ce=null,ie=null,Ee=null,ct=null,St=null;return{setTest:function(je){L||(je?ae(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(je){se!==je&&!L&&(r.stencilMask(je),se=je)},setFunc:function(je,rn,An){(q!==je||J!==rn||ce!==An)&&(r.stencilFunc(je,rn,An),q=je,J=rn,ce=An)},setOp:function(je,rn,An){(ie!==je||Ee!==rn||ct!==An)&&(r.stencilOp(je,rn,An),ie=je,Ee=rn,ct=An)},setLocked:function(je){L=je},setClear:function(je){St!==je&&(r.clearStencil(je),St=je)},reset:function(){L=!1,se=null,q=null,J=null,ce=null,ie=null,Ee=null,ct=null,St=null}}}let s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,_=null,v=null,x=null,R=null,A=null,T=new pe(0,0,0),C=0,S=!1,y=null,P=null,F=null,k=null,G=null,Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,$=0,z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=$>=2);let ne=null,ue={},ye=r.getParameter(r.SCISSOR_BOX),De=r.getParameter(r.VIEWPORT),Ze=new Ke().fromArray(ye),j=new Ke().fromArray(De);function ee(L,se,q,J){let ce=new Uint8Array(4),ie=r.createTexture();r.bindTexture(L,ie),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ee=0;Ee<q;Ee++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(se+Ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return ie}let me={};me[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(r.DEPTH_TEST),a.setFunc(as),ze(!1),Be(Dh),ae(r.CULL_FACE),O(ai);function ae(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function we(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function Pe(L,se){return u[L]!==se?(r.bindFramebuffer(L,se),u[L]=se,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=se),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=se),!0):!1}function Ne(L,se){let q=f,J=!1;if(L){q=d.get(se),q===void 0&&(q=[],d.set(se,q));let ce=L.textures;if(q.length!==ce.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,Ee=ce.length;ie<Ee;ie++)q[ie]=r.COLOR_ATTACHMENT0+ie;q.length=ce.length,J=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,J=!0);J&&r.drawBuffers(q)}function ft(L){return g!==L?(r.useProgram(L),g=L,!0):!1}let qe={[Ai]:r.FUNC_ADD,[cf]:r.FUNC_SUBTRACT,[lf]:r.FUNC_REVERSE_SUBTRACT};qe[hf]=r.MIN,qe[uf]=r.MAX;let $e={[df]:r.ZERO,[ff]:r.ONE,[pf]:r.SRC_COLOR,[fc]:r.SRC_ALPHA,[vf]:r.SRC_ALPHA_SATURATE,[xf]:r.DST_COLOR,[gf]:r.DST_ALPHA,[mf]:r.ONE_MINUS_SRC_COLOR,[pc]:r.ONE_MINUS_SRC_ALPHA,[_f]:r.ONE_MINUS_DST_COLOR,[bf]:r.ONE_MINUS_DST_ALPHA,[yf]:r.CONSTANT_COLOR,[Mf]:r.ONE_MINUS_CONSTANT_COLOR,[Sf]:r.CONSTANT_ALPHA,[wf]:r.ONE_MINUS_CONSTANT_ALPHA};function O(L,se,q,J,ce,ie,Ee,ct,St,je){if(L===ai){b===!0&&(we(r.BLEND),b=!1);return}if(b===!1&&(ae(r.BLEND),b=!0),L!==of){if(L!==m||je!==S){if((p!==Ai||x!==Ai)&&(r.blendEquation(r.FUNC_ADD),p=Ai,x=Ai),je)switch(L){case ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $r:r.blendFunc(r.ONE,r.ONE);break;case Nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $r:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Nh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,v=null,R=null,A=null,T.set(0,0,0),C=0,m=L,S=je}return}ce=ce||se,ie=ie||q,Ee=Ee||J,(se!==p||ce!==x)&&(r.blendEquationSeparate(qe[se],qe[ce]),p=se,x=ce),(q!==_||J!==v||ie!==R||Ee!==A)&&(r.blendFuncSeparate($e[q],$e[J],$e[ie],$e[Ee]),_=q,v=J,R=ie,A=Ee),(ct.equals(T)===!1||St!==C)&&(r.blendColor(ct.r,ct.g,ct.b,St),T.copy(ct),C=St),m=L,S=!1}function Ht(L,se){L.side===Mt?we(r.CULL_FACE):ae(r.CULL_FACE);let q=L.side===Nt;se&&(q=!q),ze(q),L.blending===ns&&L.transparent===!1?O(ai):O(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let J=L.stencilWrite;o.setTest(J),J&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Qe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function ze(L){y!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),y=L)}function Be(L){L!==rf?(ae(r.CULL_FACE),L!==P&&(L===Dh?r.cullFace(r.BACK):L===af?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),P=L}function Me(L){L!==F&&(W&&r.lineWidth(L),F=L)}function Qe(L,se,q){L?(ae(r.POLYGON_OFFSET_FILL),(k!==se||G!==q)&&(r.polygonOffset(se,q),k=se,G=q)):we(r.POLYGON_OFFSET_FILL)}function Se(L){L?ae(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function E(L){L===void 0&&(L=r.TEXTURE0+Y-1),ne!==L&&(r.activeTexture(L),ne=L)}function M(L,se,q){q===void 0&&(ne===null?q=r.TEXTURE0+Y-1:q=ne);let J=ue[q];J===void 0&&(J={type:void 0,texture:void 0},ue[q]=J),(J.type!==L||J.texture!==se)&&(ne!==q&&(r.activeTexture(q),ne=q),r.bindTexture(L,se||me[L]),J.type=L,J.texture=se)}function B(){let L=ue[ne];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(L){Ze.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function fe(L){j.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function Ve(L,se){let q=l.get(se);q===void 0&&(q=new WeakMap,l.set(se,q));let J=q.get(L);J===void 0&&(J=r.getUniformBlockIndex(se,L.name),q.set(L,J))}function Le(L,se){let J=l.get(se).get(L);c.get(se)!==J&&(r.uniformBlockBinding(se,J,L.__bindingPointIndex),c.set(se,J))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,ue={},u={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,_=null,v=null,x=null,R=null,A=null,T=new pe(0,0,0),C=0,S=!1,y=null,P=null,F=null,k=null,G=null,Ze.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:we,bindFramebuffer:Pe,drawBuffers:Ne,useProgram:ft,setBlending:O,setMaterial:Ht,setFlipSided:ze,setCullFace:Be,setLineWidth:Me,setPolygonOffset:Qe,setScissorTest:Se,activeTexture:E,bindTexture:M,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:de,texImage3D:Ae,updateUBOMapping:Ve,uniformBlockBinding:Le,texStorage2D:He,texStorage3D:Q,texSubImage2D:X,texSubImage3D:ge,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Te,viewport:fe,reset:nt}}function Lu(r,e,t,n){let i=Kb(n);switch(t){case od:return r*e;case ld:return r*e;case hd:return r*e*2;case Nl:return r*e/i.components*i.byteLength;case Ul:return r*e/i.components*i.byteLength;case ud:return r*e*2/i.components*i.byteLength;case Ol:return r*e*2/i.components*i.byteLength;case cd:return r*e*3/i.components*i.byteLength;case $t:return r*e*4/i.components*i.byteLength;case Fl:return r*e*4/i.components*i.byteLength;case jr:case Yr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Jr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Tc:return Math.max(r,16)*Math.max(e,8)/4;case wc:case Ec:return Math.max(r,8)*Math.max(e,8)/2;case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Bc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Zr:case qc:case Xc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case dd:case jc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Yc:case Kc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kb(r){switch(r){case Bn:case sd:return{byteLength:1,components:1};case $s:case rd:case lr:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case Ti:case Il:case un:return{byteLength:4,components:1};case ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Jb(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ce,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return f?new OffscreenCanvas(E,M):Qs("canvas")}function b(E,M,B){let K=1,Z=Se(E);if((Z.width>B||Z.height>B)&&(K=B/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let X=Math.floor(K*Z.width),ge=Math.floor(K*Z.height);u===void 0&&(u=g(X,ge));let oe=M?g(X,ge):u;return oe.width=X,oe.height=ge,oe.getContext("2d").drawImage(E,0,0,X,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+ge+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){r.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?r.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(E,M,B,K,Z=!1){if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=M;if(M===r.RED&&(B===r.FLOAT&&(X=r.R32F),B===r.HALF_FLOAT&&(X=r.R16F),B===r.UNSIGNED_BYTE&&(X=r.R8)),M===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.R8UI),B===r.UNSIGNED_SHORT&&(X=r.R16UI),B===r.UNSIGNED_INT&&(X=r.R32UI),B===r.BYTE&&(X=r.R8I),B===r.SHORT&&(X=r.R16I),B===r.INT&&(X=r.R32I)),M===r.RG&&(B===r.FLOAT&&(X=r.RG32F),B===r.HALF_FLOAT&&(X=r.RG16F),B===r.UNSIGNED_BYTE&&(X=r.RG8)),M===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RG8UI),B===r.UNSIGNED_SHORT&&(X=r.RG16UI),B===r.UNSIGNED_INT&&(X=r.RG32UI),B===r.BYTE&&(X=r.RG8I),B===r.SHORT&&(X=r.RG16I),B===r.INT&&(X=r.RG32I)),M===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RGB8UI),B===r.UNSIGNED_SHORT&&(X=r.RGB16UI),B===r.UNSIGNED_INT&&(X=r.RGB32UI),B===r.BYTE&&(X=r.RGB8I),B===r.SHORT&&(X=r.RGB16I),B===r.INT&&(X=r.RGB32I)),M===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),B===r.UNSIGNED_INT&&(X=r.RGBA32UI),B===r.BYTE&&(X=r.RGBA8I),B===r.SHORT&&(X=r.RGBA16I),B===r.INT&&(X=r.RGBA32I)),M===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),M===r.RGBA){let ge=Z?Ra:We.getTransfer(K);B===r.FLOAT&&(X=r.RGBA32F),B===r.HALF_FLOAT&&(X=r.RGBA16F),B===r.UNSIGNED_BYTE&&(X=ge===at?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(E,M){let B;return E?M===null||M===Ti||M===ls?B=r.DEPTH24_STENCIL8:M===un?B=r.DEPTH32F_STENCIL8:M===$s&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ti||M===ls?B=r.DEPTH_COMPONENT24:M===un?B=r.DEPTH_COMPONENT32F:M===$s&&(B=r.DEPTH_COMPONENT16),B}function R(E,M){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ut&&E.minFilter!==Gt?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){let M=E.target;M.removeEventListener("dispose",A),C(M),M.isVideoTexture&&h.delete(M)}function T(E){let M=E.target;M.removeEventListener("dispose",T),y(M)}function C(E){let M=n.get(E);if(M.__webglInit===void 0)return;let B=E.source,K=d.get(B);if(K){let Z=K[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(E),Object.keys(K).length===0&&d.delete(B)}n.remove(E)}function S(E){let M=n.get(E);r.deleteTexture(M.__webglTexture);let B=E.source,K=d.get(B);delete K[M.__cacheKey],a.memory.textures--}function y(E){let M=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let Z=0;Z<M.__webglFramebuffer[K].length;Z++)r.deleteFramebuffer(M.__webglFramebuffer[K][Z]);else r.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)r.deleteFramebuffer(M.__webglFramebuffer[K]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let B=E.textures;for(let K=0,Z=B.length;K<Z;K++){let X=n.get(B[K]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(E)}let P=0;function F(){P=0}function k(){let E=P;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),P+=1,E}function G(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function Y(E,M){let B=n.get(E);if(E.isVideoTexture&&Me(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,E,M);return}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+M)}function W(E,M){let B=n.get(E);if(E.version>0&&B.__version!==E.version){j(B,E,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+M)}function $(E,M){let B=n.get(E);if(E.version>0&&B.__version!==E.version){j(B,E,M);return}t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+M)}function z(E,M){let B=n.get(E);if(E.version>0&&B.__version!==E.version){ee(B,E,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+M)}let ne={[kn]:r.REPEAT,[Un]:r.CLAMP_TO_EDGE,[Zs]:r.MIRRORED_REPEAT},ue={[Ut]:r.NEAREST,[Pl]:r.NEAREST_MIPMAP_NEAREST,[es]:r.NEAREST_MIPMAP_LINEAR,[Gt]:r.LINEAR,[js]:r.LINEAR_MIPMAP_NEAREST,[xn]:r.LINEAR_MIPMAP_LINEAR},ye={[kf]:r.NEVER,[Wf]:r.ALWAYS,[Bf]:r.LESS,[md]:r.LEQUAL,[zf]:r.EQUAL,[Gf]:r.GEQUAL,[Hf]:r.GREATER,[Vf]:r.NOTEQUAL};function De(E,M){if(M.type===un&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gt||M.magFilter===js||M.magFilter===es||M.magFilter===xn||M.minFilter===Gt||M.minFilter===js||M.minFilter===es||M.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(E,r.TEXTURE_WRAP_S,ne[M.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,ne[M.wrapT]),(E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY)&&r.texParameteri(E,r.TEXTURE_WRAP_R,ne[M.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,ue[M.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,ue[M.minFilter]),M.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ut||M.minFilter!==es&&M.minFilter!==xn||M.type===un&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ze(E,M){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",A));let K=M.source,Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));let X=G(M);if(X!==E.__cacheKey){Z[X]===void 0&&(Z[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[X].usedTimes++;let ge=Z[E.__cacheKey];ge!==void 0&&(Z[E.__cacheKey].usedTimes--,ge.usedTimes===0&&S(M)),E.__cacheKey=X,E.__webglTexture=Z[X].texture}return B}function j(E,M,B){let K=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=r.TEXTURE_3D);let Z=Ze(E,M),X=M.source;t.bindTexture(K,E.__webglTexture,r.TEXTURE0+B);let ge=n.get(X);if(X.version!==ge.__version||Z===!0){t.activeTexture(r.TEXTURE0+B);let oe=We.getPrimaries(We.workingColorSpace),he=M.colorSpace===ii?null:We.getPrimaries(M.colorSpace),He=M.colorSpace===ii||oe===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Q=b(M.image,!1,i.maxTextureSize);Q=Qe(M,Q);let de=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type),Te=v(M.internalFormat,de,Ae,M.colorSpace,M.isVideoTexture);De(K,M);let fe,Ve=M.mipmaps,Le=M.isVideoTexture!==!0,nt=ge.__version===void 0||Z===!0,L=X.dataReady,se=R(M,Q);if(M.isDepthTexture)Te=x(M.format===hs,M.type),nt&&(Le?t.texStorage2D(r.TEXTURE_2D,1,Te,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Te,Q.width,Q.height,0,de,Ae,null));else if(M.isDataTexture)if(Ve.length>0){Le&&nt&&t.texStorage2D(r.TEXTURE_2D,se,Te,Ve[0].width,Ve[0].height);for(let q=0,J=Ve.length;q<J;q++)fe=Ve[q],Le?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,fe.width,fe.height,de,Ae,fe.data):t.texImage2D(r.TEXTURE_2D,q,Te,fe.width,fe.height,0,de,Ae,fe.data);M.generateMipmaps=!1}else Le?(nt&&t.texStorage2D(r.TEXTURE_2D,se,Te,Q.width,Q.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,de,Ae,Q.data)):t.texImage2D(r.TEXTURE_2D,0,Te,Q.width,Q.height,0,de,Ae,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Le&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,Te,Ve[0].width,Ve[0].height,Q.depth);for(let q=0,J=Ve.length;q<J;q++)if(fe=Ve[q],M.format!==$t)if(de!==null)if(Le){if(L)if(M.layerUpdates.size>0){let ce=Lu(fe.width,fe.height,M.format,M.type);for(let ie of M.layerUpdates){let Ee=fe.data.subarray(ie*ce/fe.data.BYTES_PER_ELEMENT,(ie+1)*ce/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ie,fe.width,fe.height,1,de,Ee)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,fe.width,fe.height,Q.depth,de,fe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Te,fe.width,fe.height,Q.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,fe.width,fe.height,Q.depth,de,Ae,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,q,Te,fe.width,fe.height,Q.depth,0,de,Ae,fe.data)}else{Le&&nt&&t.texStorage2D(r.TEXTURE_2D,se,Te,Ve[0].width,Ve[0].height);for(let q=0,J=Ve.length;q<J;q++)fe=Ve[q],M.format!==$t?de!==null?Le?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,q,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,fe.width,fe.height,de,Ae,fe.data):t.texImage2D(r.TEXTURE_2D,q,Te,fe.width,fe.height,0,de,Ae,fe.data)}else if(M.isDataArrayTexture)if(Le){if(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,Te,Q.width,Q.height,Q.depth),L)if(M.layerUpdates.size>0){let q=Lu(Q.width,Q.height,M.format,M.type);for(let J of M.layerUpdates){let ce=Q.data.subarray(J*q/Q.data.BYTES_PER_ELEMENT,(J+1)*q/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,de,Ae,ce)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,Ae,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,Q.width,Q.height,Q.depth,0,de,Ae,Q.data);else if(M.isData3DTexture)Le?(nt&&t.texStorage3D(r.TEXTURE_3D,se,Te,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,Ae,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Te,Q.width,Q.height,Q.depth,0,de,Ae,Q.data);else if(M.isFramebufferTexture){if(nt)if(Le)t.texStorage2D(r.TEXTURE_2D,se,Te,Q.width,Q.height);else{let q=Q.width,J=Q.height;for(let ce=0;ce<se;ce++)t.texImage2D(r.TEXTURE_2D,ce,Te,q,J,0,de,Ae,null),q>>=1,J>>=1}}else if(Ve.length>0){if(Le&&nt){let q=Se(Ve[0]);t.texStorage2D(r.TEXTURE_2D,se,Te,q.width,q.height)}for(let q=0,J=Ve.length;q<J;q++)fe=Ve[q],Le?L&&t.texSubImage2D(r.TEXTURE_2D,q,0,0,de,Ae,fe):t.texImage2D(r.TEXTURE_2D,q,Te,de,Ae,fe);M.generateMipmaps=!1}else if(Le){if(nt){let q=Se(Q);t.texStorage2D(r.TEXTURE_2D,se,Te,q.width,q.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Ae,Q)}else t.texImage2D(r.TEXTURE_2D,0,Te,de,Ae,Q);m(M)&&p(K),ge.__version=X.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ee(E,M,B){if(M.image.length!==6)return;let K=Ze(E,M),Z=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,E.__webglTexture,r.TEXTURE0+B);let X=n.get(Z);if(Z.version!==X.__version||K===!0){t.activeTexture(r.TEXTURE0+B);let ge=We.getPrimaries(We.workingColorSpace),oe=M.colorSpace===ii?null:We.getPrimaries(M.colorSpace),he=M.colorSpace===ii||ge===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let He=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!He&&!Q?de[J]=b(M.image[J],!0,i.maxCubemapSize):de[J]=Q?M.image[J].image:M.image[J],de[J]=Qe(M,de[J]);let Ae=de[0],Te=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),Ve=v(M.internalFormat,Te,fe,M.colorSpace),Le=M.isVideoTexture!==!0,nt=X.__version===void 0||K===!0,L=Z.dataReady,se=R(M,Ae);De(r.TEXTURE_CUBE_MAP,M);let q;if(He){Le&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,se,Ve,Ae.width,Ae.height);for(let J=0;J<6;J++){q=de[J].mipmaps;for(let ce=0;ce<q.length;ce++){let ie=q[ce];M.format!==$t?Te!==null?Le?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,ie.width,ie.height,Te,ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,Ve,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,0,0,ie.width,ie.height,Te,fe,ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce,Ve,ie.width,ie.height,0,Te,fe,ie.data)}}}else{if(q=M.mipmaps,Le&&nt){q.length>0&&se++;let J=Se(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,se,Ve,J.width,J.height)}for(let J=0;J<6;J++)if(Q){Le?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,Te,fe,de[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,de[J].width,de[J].height,0,Te,fe,de[J].data);for(let ce=0;ce<q.length;ce++){let Ee=q[ce].image[J].image;Le?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,Ee.width,Ee.height,Te,fe,Ee.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,Ve,Ee.width,Ee.height,0,Te,fe,Ee.data)}}else{Le?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te,fe,de[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ve,Te,fe,de[J]);for(let ce=0;ce<q.length;ce++){let ie=q[ce];Le?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,0,0,Te,fe,ie.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,ce+1,Ve,Te,fe,ie.image[J])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),X.__version=Z.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function me(E,M,B,K,Z,X){let ge=s.convert(B.format,B.colorSpace),oe=s.convert(B.type),he=v(B.internalFormat,ge,oe,B.colorSpace),He=n.get(M),Q=n.get(B);if(Q.__renderTarget=M,!He.__hasExternalTextures){let de=Math.max(1,M.width>>X),Ae=Math.max(1,M.height>>X);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,he,de,Ae,M.depth,0,ge,oe,null):t.texImage2D(Z,X,he,de,Ae,0,ge,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),Be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Z,Q.__webglTexture,0,ze(M)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Z,Q.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ae(E,M,B){if(r.bindRenderbuffer(r.RENDERBUFFER,E),M.depthBuffer){let K=M.depthTexture,Z=K&&K.isDepthTexture?K.type:null,X=x(M.stencilBuffer,Z),ge=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=ze(M);Be(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,X,M.width,M.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,X,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,X,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,E)}else{let K=M.textures;for(let Z=0;Z<K.length;Z++){let X=K[Z],ge=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),he=v(X.internalFormat,ge,oe,X.colorSpace),He=ze(M);B&&Be(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,he,M.width,M.height):Be(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,he,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,he,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function we(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);let Z=K.__webglTexture,X=ze(M);if(M.depthTexture.format===is)Be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(M.depthTexture.format===hs)Be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Pe(E){let M=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==E.depthTexture){let K=E.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=K}if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");we(M.__webglFramebuffer,E)}else if(B){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=r.createRenderbuffer(),ae(M.__webglDepthbuffer[K],E,!1);else{let Z=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,X)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ae(M.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Z)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(E,M,B){let K=n.get(E);M!==void 0&&me(K.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&Pe(E)}function ft(E){let M=E.texture,B=n.get(E),K=n.get(M);E.addEventListener("dispose",T);let Z=E.textures,X=E.isWebGLCubeRenderTarget===!0,ge=Z.length>1;if(ge||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=M.version,a.memory.textures++),X){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let he=0;he<M.mipmaps.length;he++)B.__webglFramebuffer[oe][he]=r.createFramebuffer()}else B.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)B.__webglFramebuffer[oe]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(ge)for(let oe=0,he=Z.length;oe<he;oe++){let He=n.get(Z[oe]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),a.memory.textures++)}if(E.samples>0&&Be(E)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){let he=Z[oe];B.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);let He=s.convert(he.format,he.colorSpace),Q=s.convert(he.type),de=v(he.internalFormat,He,Q,he.colorSpace,E.isXRRenderTarget===!0),Ae=ze(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,de,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),ae(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),De(r.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)me(B.__webglFramebuffer[oe][he],E,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else me(B.__webglFramebuffer[oe],E,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let oe=0,he=Z.length;oe<he;oe++){let He=Z[oe],Q=n.get(He);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),De(r.TEXTURE_2D,He),me(B.__webglFramebuffer,E,He,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(He)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),De(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)me(B.__webglFramebuffer[he],E,M,r.COLOR_ATTACHMENT0,oe,he);else me(B.__webglFramebuffer,E,M,r.COLOR_ATTACHMENT0,oe,0);m(M)&&p(oe),t.unbindTexture()}E.depthBuffer&&Pe(E)}function qe(E){let M=E.textures;for(let B=0,K=M.length;B<K;B++){let Z=M[B];if(m(Z)){let X=_(E),ge=n.get(Z).__webglTexture;t.bindTexture(X,ge),p(X),t.unbindTexture()}}}let $e=[],O=[];function Ht(E){if(E.samples>0){if(Be(E)===!1){let M=E.textures,B=E.width,K=E.height,Z=r.COLOR_BUFFER_BIT,X=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(E),oe=M.length>1;if(oe)for(let he=0;he<M.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<M.length;he++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);let He=n.get(M[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,He,0)}r.blitFramebuffer(0,0,B,K,0,0,B,K,Z,r.NEAREST),c===!0&&($e.length=0,O.length=0,$e.push(r.COLOR_ATTACHMENT0+he),E.depthBuffer&&E.resolveDepthBuffer===!1&&($e.push(X),O.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<M.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);let He=n.get(M[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let M=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function ze(E){return Math.min(i.maxSamples,E.samples)}function Be(E){let M=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Me(E){let M=a.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function Qe(E,M){let B=E.colorSpace,K=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==Ot&&B!==ii&&(We.getTransfer(B)===at?(K!==$t||Z!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function Se(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=z,this.rebindTextures=Ne,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Be}function Zb(r,e){function t(n,i=ii){let s,a=We.getTransfer(i);if(n===Bn)return r.UNSIGNED_BYTE;if(n===Ll)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ad)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===sd)return r.BYTE;if(n===rd)return r.SHORT;if(n===$s)return r.UNSIGNED_SHORT;if(n===Il)return r.INT;if(n===Ti)return r.UNSIGNED_INT;if(n===un)return r.FLOAT;if(n===lr)return r.HALF_FLOAT;if(n===od)return r.ALPHA;if(n===cd)return r.RGB;if(n===$t)return r.RGBA;if(n===ld)return r.LUMINANCE;if(n===hd)return r.LUMINANCE_ALPHA;if(n===is)return r.DEPTH_COMPONENT;if(n===hs)return r.DEPTH_STENCIL;if(n===Nl)return r.RED;if(n===Ul)return r.RED_INTEGER;if(n===ud)return r.RG;if(n===Ol)return r.RG_INTEGER;if(n===Fl)return r.RGBA_INTEGER;if(n===jr||n===Yr||n===Kr||n===Jr)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wc||n===Ac||n===Ec||n===Tc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===wc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Cc||n===Pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rc||n===Cc)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Oc||n===Fc||n===kc||n===Bc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ic)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr||n===qc||n===Xc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zr)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dd||n===jc||n===Yc||n===Kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var hl=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$b={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($b)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
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

}`,ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Pt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yn({vertexShader:Qb,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dl=class extends ci{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=new ul,m=t.getContextAttributes(),p=null,_=null,v=[],x=[],R=new Ce,A=null,T=new bt;T.viewport=new Ke;let C=new bt;C.viewport=new Ke;let S=[T,C],y=new hl,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=v[j];return ee===void 0&&(ee=new Js,v[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=v[j];return ee===void 0&&(ee=new Js,v[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=v[j];return ee===void 0&&(ee=new Js,v[j]=ee),ee.getHandSpace()};function k(j){let ee=x.indexOf(j.inputSource);if(ee===-1)return;let me=v[ee];me!==void 0&&(me.update(j.inputSource,j.frame,l||a),me.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Y);for(let j=0;j<v.length;j++){let ee=x[j];ee!==null&&(x[j]=null,v[j].disconnect(ee))}P=null,F=null,b.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new zn(f.framebufferWidth,f.framebufferHeight,{format:$t,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,me=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?hs:is,me=m.stencil?ls:Ti);let we={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(we),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new zn(d.textureWidth,d.textureHeight,{format:$t,type:Bn,depthTexture:new aa(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ze.setContext(i),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Y(j){for(let ee=0;ee<j.removed.length;ee++){let me=j.removed[ee],ae=x.indexOf(me);ae>=0&&(x[ae]=null,v[ae].disconnect(me))}for(let ee=0;ee<j.added.length;ee++){let me=j.added[ee],ae=x.indexOf(me);if(ae===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=x.length){x.push(me),ae=Pe;break}else if(x[Pe]===null){x[Pe]=me,ae=Pe;break}if(ae===-1)break}let we=v[ae];we&&we.connect(me)}}let W=new I,$=new I;function z(j,ee,me){W.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(me.matrixWorld);let ae=W.distanceTo($),we=ee.projectionMatrix.elements,Pe=me.projectionMatrix.elements,Ne=we[14]/(we[10]-1),ft=we[14]/(we[10]+1),qe=(we[9]+1)/we[5],$e=(we[9]-1)/we[5],O=(we[8]-1)/we[0],Ht=(Pe[8]+1)/Pe[0],ze=Ne*O,Be=Ne*Ht,Me=ae/(-O+Ht),Qe=Me*-O;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Qe),j.translateZ(Me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Se=Ne+Me,E=ft+Me,M=ze-Qe,B=Be+(ae-Qe),K=qe*ft/E*Se,Z=$e*ft/E*Se;j.projectionMatrix.makePerspective(M,B,K,Z,Se,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ne(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ee=j.near,me=j.far;b.texture!==null&&(b.depthNear>0&&(ee=b.depthNear),b.depthFar>0&&(me=b.depthFar)),y.near=C.near=T.near=ee,y.far=C.far=T.far=me,(P!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,F=y.far),T.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;let ae=j.parent,we=y.cameras;ne(y,ae);for(let Pe=0;Pe<we.length;Pe++)ne(we[Pe],ae);we.length===2?z(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),ue(j,y,ae)};function ue(j,ee,me){me===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let ye=null;function De(j,ee){if(h=ee.getViewerPose(l||a),g=ee,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ae=!1;me.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Pe=0;Pe<me.length;Pe++){let Ne=me[Pe],ft=null;if(f!==null)ft=f.getViewport(Ne);else{let $e=u.getViewSubImage(d,Ne);ft=$e.viewport,Pe===0&&(e.setRenderTargetTextures(_,$e.colorTexture,d.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(_))}let qe=S[Pe];qe===void 0&&(qe=new bt,qe.layers.enable(Pe),qe.viewport=new Ke,S[Pe]=qe),qe.matrix.fromArray(Ne.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ne.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ft.x,ft.y,ft.width,ft.height),Pe===0&&(y.matrix.copy(qe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(qe)}let we=i.enabledFeatures;if(we&&we.includes("depth-sensing")){let Pe=u.getDepthInformation(me[0]);Pe&&Pe.isValid&&Pe.texture&&b.init(e,Pe,i.renderState)}}for(let me=0;me<v.length;me++){let ae=x[me],we=v[me];ae!==null&&we!==void 0&&we.update(ae,ee,l||a)}ye&&ye(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let Ze=new _d;Ze.setAnimationLoop(De),this.setAnimationLoop=function(j){ye=j},this.dispose=function(){}}},Si=new vn,tx=new Re;function nx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xd(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,Si.copy(x),Si.x*=-1,Si.y*=-1,Si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(Si)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ix(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let x=v.program;n.uniformBlockBinding(_,x)}function l(_,v){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));let R=v.program;n.updateUBOMapping(_,R);let A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function h(_){let v=u();_.__bindingPointIndex=v;let x=r.createBuffer(),R=_.__size,A=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=i[_.id],x=_.uniforms,R=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,T=x.length;A<T;A++){let C=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,y=C.length;S<y;S++){let P=C[S];if(f(P,A,S,R)===!0){let F=P.__offset,k=Array.isArray(P.value)?P.value:[P.value],G=0;for(let Y=0;Y<k.length;Y++){let W=k[Y],$=b(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,F+G,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,v,x,R){let A=_.value,T=v+"_"+x;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{let C=R[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(_){let v=_.uniforms,x=0,R=16;for(let T=0,C=v.length;T<C;T++){let S=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,P=S.length;y<P;y++){let F=S[y],k=Array.isArray(F.value)?F.value:[F.value];for(let G=0,Y=k.length;G<Y;G++){let W=k[G],$=b(W),z=x%R,ne=z%$.boundary,ue=z+ne;x+=ne,ue!==0&&R-ue<$.storage&&(x+=R-ue),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=$.storage}}}let A=x%R;return A>0&&(x+=R-A),_.__size=x,_.__cache={},this}function b(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(let _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}var oa=class{constructor(e={}){let{canvas:t=op(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,p=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=oi,this.toneMappingExposure=1;let x=this,R=!1,A=0,T=0,C=null,S=-1,y=null,P=new Ke,F=new Ke,k=null,G=new pe(0),Y=0,W=t.width,$=t.height,z=1,ne=null,ue=null,ye=new Ke(0,0,W,$),De=new Ke(0,0,W,$),Ze=!1,j=new tr,ee=!1,me=!1,ae=new Re,we=new Re,Pe=new I,Ne=new Ke,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function $e(){return C===null?z:1}let O=n;function Ht(w,N){return t.getContext(w,N)}try{let w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",ie,!1),O===null){let N="webgl2";if(O=Ht(N,w),O===null)throw Ht(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ze,Be,Me,Qe,Se,E,M,B,K,Z,X,ge,oe,he,He,Q,de,Ae,Te,fe,Ve,Le,nt,L;function se(){ze=new _0(O),ze.init(),Le=new Zb(O,ze),Be=new f0(O,ze,e,Le),Me=new Yb(O,ze),Be.reverseDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),Qe=new M0(O),Se=new Ub,E=new Jb(O,ze,Me,Se,Be,Le,Qe),M=new m0(x),B=new x0(x),K=new Cp(O),nt=new u0(O,K),Z=new v0(O,K,Qe,nt),X=new w0(O,Z,K,Qe),Te=new S0(O,Be,E),Q=new p0(Se),ge=new Nb(x,M,B,ze,Be,nt,Q),oe=new nx(x,Se),he=new Fb,He=new Gb(ze),Ae=new h0(x,M,B,Me,X,f,c),de=new Xb(x,X,Be),L=new ix(O,Qe,Be,Me),fe=new d0(O,ze,Qe),Ve=new y0(O,ze,Qe),Qe.programs=ge.programs,x.capabilities=Be,x.extensions=ze,x.properties=Se,x.renderLists=he,x.shadowMap=de,x.state=Me,x.info=Qe}se();let q=new dl(x,O);this.xr=q,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let w=ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(W,$,!1))},this.getSize=function(w){return w.set(W,$)},this.setSize=function(w,N,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,$=N,t.width=Math.floor(w*z),t.height=Math.floor(N*z),H===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(W*z,$*z).floor()},this.setDrawingBufferSize=function(w,N,H){W=w,$=N,z=H,t.width=Math.floor(w*H),t.height=Math.floor(N*H),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ye)},this.setViewport=function(w,N,H,V){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,N,H,V),Me.viewport(P.copy(ye).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(De)},this.setScissor=function(w,N,H,V){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,N,H,V),Me.scissor(F.copy(De).multiplyScalar(z).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(w){Me.setScissorTest(Ze=w)},this.setOpaqueSort=function(w){ne=w},this.setTransparentSort=function(w){ue=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(w=!0,N=!0,H=!0){let V=0;if(w){let U=!1;if(C!==null){let te=C.texture.format;U=te===Fl||te===Ol||te===Ul}if(U){let te=C.texture.type,le=te===Bn||te===Ti||te===$s||te===ls||te===Ll||te===Dl,be=Ae.getClearColor(),xe=Ae.getClearAlpha(),Ie=be.r,Ue=be.g,_e=be.b;le?(g[0]=Ie,g[1]=Ue,g[2]=_e,g[3]=xe,O.clearBufferuiv(O.COLOR,0,g)):(b[0]=Ie,b[1]=Ue,b[2]=_e,b[3]=xe,O.clearBufferiv(O.COLOR,0,b))}else V|=O.COLOR_BUFFER_BIT}N&&(V|=O.DEPTH_BUFFER_BIT),H&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),he.dispose(),He.dispose(),Se.dispose(),M.dispose(),B.dispose(),X.dispose(),nt.dispose(),L.dispose(),ge.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ah),q.removeEventListener("sessionend",Eh),bi.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let w=Qe.autoReset,N=de.enabled,H=de.autoUpdate,V=de.needsUpdate,U=de.type;se(),Qe.autoReset=w,de.enabled=N,de.autoUpdate=H,de.needsUpdate=V,de.type=U}function ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ee(w){let N=w.target;N.removeEventListener("dispose",Ee),ct(N)}function ct(w){St(w),Se.remove(w)}function St(w){let N=Se.get(w).programs;N!==void 0&&(N.forEach(function(H){ge.releaseProgram(H)}),w.isShaderMaterial&&ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,H,V,U,te){N===null&&(N=ft);let le=U.isMesh&&U.matrixWorld.determinant()<0,be=tf(w,N,H,V,U);Me.setMaterial(V,le);let xe=H.index,Ie=1;if(V.wireframe===!0){if(xe=Z.getWireframeAttribute(H),xe===void 0)return;Ie=2}let Ue=H.drawRange,_e=H.attributes.position,Ye=Ue.start*Ie,ht=(Ue.start+Ue.count)*Ie;te!==null&&(Ye=Math.max(Ye,te.start*Ie),ht=Math.min(ht,(te.start+te.count)*Ie)),xe!==null?(Ye=Math.max(Ye,0),ht=Math.min(ht,xe.count)):_e!=null&&(Ye=Math.max(Ye,0),ht=Math.min(ht,_e.count));let pt=ht-Ye;if(pt<0||pt===1/0)return;nt.setup(U,V,be,H,xe);let Vt,et=fe;if(xe!==null&&(Vt=K.get(xe),et=Ve,et.setIndex(Vt)),U.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*$e()),et.setMode(O.LINES)):et.setMode(O.TRIANGLES);else if(U.isLine){let ve=V.linewidth;ve===void 0&&(ve=1),Me.setLineWidth(ve*$e()),U.isLineSegments?et.setMode(O.LINES):U.isLineLoop?et.setMode(O.LINE_LOOP):et.setMode(O.LINE_STRIP)}else U.isPoints?et.setMode(O.POINTS):U.isSprite&&et.setMode(O.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)et.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))et.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let ve=U._multiDrawStarts,En=U._multiDrawCounts,tt=U._multiDrawCount,an=xe?K.get(xe).bytesPerElement:1,Ni=Se.get(V).currentProgram.getUniforms();for(let qt=0;qt<tt;qt++)Ni.setValue(O,"_gl_DrawID",qt),et.render(ve[qt]/an,En[qt])}else if(U.isInstancedMesh)et.renderInstances(Ye,pt,U.count);else if(H.isInstancedBufferGeometry){let ve=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,En=Math.min(H.instanceCount,ve);et.renderInstances(Ye,pt,En)}else et.render(Ye,pt)};function je(w,N,H){w.transparent===!0&&w.side===Mt&&w.forceSinglePass===!1?(w.side=Nt,w.needsUpdate=!0,mr(w,N,H),w.side=_n,w.needsUpdate=!0,mr(w,N,H),w.side=Mt):mr(w,N,H)}this.compile=function(w,N,H=null){H===null&&(H=w),p=He.get(H),p.init(N),v.push(p),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==H&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let te=U.material;if(te)if(Array.isArray(te))for(let le=0;le<te.length;le++){let be=te[le];je(be,H,U),V.add(be)}else je(te,H,U),V.add(te)}),v.pop(),p=null,V},this.compileAsync=function(w,N,H=null){let V=this.compile(w,N,H);return new Promise(U=>{function te(){if(V.forEach(function(le){Se.get(le).currentProgram.isReady()&&V.delete(le)}),V.size===0){U(w);return}setTimeout(te,10)}ze.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let rn=null;function An(w){rn&&rn(w)}function Ah(){bi.stop()}function Eh(){bi.start()}let bi=new _d;bi.setAnimationLoop(An),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(w){rn=w,q.setAnimationLoop(w),w===null?bi.stop():bi.start()},q.addEventListener("sessionstart",Ah),q.addEventListener("sessionend",Eh),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,C),p=He.get(w,v.length),p.init(N),v.push(p),we.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(we),me=this.localClippingEnabled,ee=Q.init(this.clippingPlanes,me),m=he.get(w,_.length),m.init(),_.push(m),q.enabled===!0&&q.isPresenting===!0){let te=x.xr.getDepthSensingMesh();te!==null&&Po(te,N,-1/0,x.sortObjects)}Po(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,ue),qe=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,qe&&Ae.addToRenderList(m,w),this.info.render.frame++,ee===!0&&Q.beginShadows();let H=p.state.shadowsArray;de.render(H,w,N),ee===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){let te=N.cameras;if(U.length>0)for(let le=0,be=te.length;le<be;le++){let xe=te[le];Rh(V,U,w,xe)}qe&&Ae.render(w);for(let le=0,be=te.length;le<be;le++){let xe=te[le];Th(m,w,xe,xe.viewport)}}else U.length>0&&Rh(V,U,w,N),qe&&Ae.render(w),Th(m,w,N);C!==null&&(E.updateMultisampleRenderTarget(C),E.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,N),nt.resetDefaultState(),S=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],ee===!0&&Q.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Po(w,N,H,V){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){V&&Ne.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);let le=X.update(w),be=w.material;be.visible&&m.push(w,le,be,H,Ne.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){let le=X.update(w),be=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ne.copy(w.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ne.copy(le.boundingSphere.center)),Ne.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(be)){let xe=le.groups;for(let Ie=0,Ue=xe.length;Ie<Ue;Ie++){let _e=xe[Ie],Ye=be[_e.materialIndex];Ye&&Ye.visible&&m.push(w,le,Ye,H,Ne.z,_e)}}else be.visible&&m.push(w,le,be,H,Ne.z,null)}}let te=w.children;for(let le=0,be=te.length;le<be;le++)Po(te[le],N,H,V)}function Th(w,N,H,V){let U=w.opaque,te=w.transmissive,le=w.transparent;p.setupLightsView(H),ee===!0&&Q.setGlobalState(x.clippingPlanes,H),V&&Me.viewport(P.copy(V)),U.length>0&&pr(U,N,H),te.length>0&&pr(te,N,H),le.length>0&&pr(le,N,H),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Rh(w,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new zn(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?lr:Bn,minFilter:xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace}));let te=p.state.transmissionRenderTarget[V.id],le=V.viewport||P;te.setSize(le.z,le.w);let be=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(G),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),qe&&Ae.render(H);let xe=x.toneMapping;x.toneMapping=oi;let Ie=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ee===!0&&Q.setGlobalState(x.clippingPlanes,V),pr(w,H,V),E.updateMultisampleRenderTarget(te),E.updateRenderTargetMipmap(te),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let _e=0,Ye=N.length;_e<Ye;_e++){let ht=N[_e],pt=ht.object,Vt=ht.geometry,et=ht.material,ve=ht.group;if(et.side===Mt&&pt.layers.test(V.layers)){let En=et.side;et.side=Nt,et.needsUpdate=!0,Ch(pt,H,V,Vt,et,ve),et.side=En,et.needsUpdate=!0,Ue=!0}}Ue===!0&&(E.updateMultisampleRenderTarget(te),E.updateRenderTargetMipmap(te))}x.setRenderTarget(be),x.setClearColor(G,Y),Ie!==void 0&&(V.viewport=Ie),x.toneMapping=xe}function pr(w,N,H){let V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,te=w.length;U<te;U++){let le=w[U],be=le.object,xe=le.geometry,Ie=V===null?le.material:V,Ue=le.group;be.layers.test(H.layers)&&Ch(be,N,H,xe,Ie,Ue)}}function Ch(w,N,H,V,U,te){w.onBeforeRender(x,N,H,V,U,te),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,N,H,V,w,te),U.transparent===!0&&U.side===Mt&&U.forceSinglePass===!1?(U.side=Nt,U.needsUpdate=!0,x.renderBufferDirect(H,N,V,U,w,te),U.side=_n,U.needsUpdate=!0,x.renderBufferDirect(H,N,V,U,w,te),U.side=Mt):x.renderBufferDirect(H,N,V,U,w,te),w.onAfterRender(x,N,H,V,U,te)}function mr(w,N,H){N.isScene!==!0&&(N=ft);let V=Se.get(w),U=p.state.lights,te=p.state.shadowsArray,le=U.state.version,be=ge.getParameters(w,U.state,te,N,H),xe=ge.getProgramCacheKey(be),Ie=V.programs;V.environment=w.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(w.isMeshStandardMaterial?B:M).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",Ee),Ie=new Map,V.programs=Ie);let Ue=Ie.get(xe);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===le)return Ih(w,be),Ue}else be.uniforms=ge.getUniforms(w),w.onBeforeCompile(be,x),Ue=ge.acquireProgram(be,xe),Ie.set(xe,Ue),V.uniforms=be.uniforms;let _e=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(_e.clippingPlanes=Q.uniform),Ih(w,be),V.needsLights=sf(w),V.lightsStateVersion=le,V.needsLights&&(_e.ambientLightColor.value=U.state.ambient,_e.lightProbe.value=U.state.probe,_e.directionalLights.value=U.state.directional,_e.directionalLightShadows.value=U.state.directionalShadow,_e.spotLights.value=U.state.spot,_e.spotLightShadows.value=U.state.spotShadow,_e.rectAreaLights.value=U.state.rectArea,_e.ltc_1.value=U.state.rectAreaLTC1,_e.ltc_2.value=U.state.rectAreaLTC2,_e.pointLights.value=U.state.point,_e.pointLightShadows.value=U.state.pointShadow,_e.hemisphereLights.value=U.state.hemi,_e.directionalShadowMap.value=U.state.directionalShadowMap,_e.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_e.spotShadowMap.value=U.state.spotShadowMap,_e.spotLightMatrix.value=U.state.spotLightMatrix,_e.spotLightMap.value=U.state.spotLightMap,_e.pointShadowMap.value=U.state.pointShadowMap,_e.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function Ph(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=rs.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Ih(w,N){let H=Se.get(w);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function tf(w,N,H,V,U){N.isScene!==!0&&(N=ft),E.resetTextureUnits();let te=N.fog,le=V.isMeshStandardMaterial?N.environment:null,be=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ot,xe=(V.isMeshStandardMaterial?B:M).get(V.envMap||le),Ie=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),_e=!!H.morphAttributes.position,Ye=!!H.morphAttributes.normal,ht=!!H.morphAttributes.color,pt=oi;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=x.toneMapping);let Vt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,et=Vt!==void 0?Vt.length:0,ve=Se.get(V),En=p.state.lights;if(ee===!0&&(me===!0||w!==y)){let Jt=w===y&&V.id===S;Q.setState(V,w,Jt)}let tt=!1;V.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==En.state.version||ve.outputColorSpace!==be||U.isBatchedMesh&&ve.batching===!1||!U.isBatchedMesh&&ve.batching===!0||U.isBatchedMesh&&ve.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ve.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ve.instancing===!1||!U.isInstancedMesh&&ve.instancing===!0||U.isSkinnedMesh&&ve.skinning===!1||!U.isSkinnedMesh&&ve.skinning===!0||U.isInstancedMesh&&ve.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ve.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ve.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ve.instancingMorph===!1&&U.morphTexture!==null||ve.envMap!==xe||V.fog===!0&&ve.fog!==te||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Q.numPlanes||ve.numIntersection!==Q.numIntersection)||ve.vertexAlphas!==Ie||ve.vertexTangents!==Ue||ve.morphTargets!==_e||ve.morphNormals!==Ye||ve.morphColors!==ht||ve.toneMapping!==pt||ve.morphTargetsCount!==et)&&(tt=!0):(tt=!0,ve.__version=V.version);let an=ve.currentProgram;tt===!0&&(an=mr(V,N,U));let Ni=!1,qt=!1,Ls=!1,mt=an.getUniforms(),gn=ve.uniforms;if(Me.useProgram(an.program)&&(Ni=!0,qt=!0,Ls=!0),V.id!==S&&(S=V.id,qt=!0),Ni||y!==w){Me.buffers.depth.getReversed()?(ae.copy(w.projectionMatrix),lp(ae),hp(ae),mt.setValue(O,"projectionMatrix",ae)):mt.setValue(O,"projectionMatrix",w.projectionMatrix),mt.setValue(O,"viewMatrix",w.matrixWorldInverse);let Kn=mt.map.cameraPosition;Kn!==void 0&&Kn.setValue(O,Pe.setFromMatrixPosition(w.matrixWorld)),Be.logarithmicDepthBuffer&&mt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&mt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,qt=!0,Ls=!0)}if(U.isSkinnedMesh){mt.setOptional(O,U,"bindMatrix"),mt.setOptional(O,U,"bindMatrixInverse");let Jt=U.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),mt.setValue(O,"boneTexture",Jt.boneTexture,E))}U.isBatchedMesh&&(mt.setOptional(O,U,"batchingTexture"),mt.setValue(O,"batchingTexture",U._matricesTexture,E),mt.setOptional(O,U,"batchingIdTexture"),mt.setValue(O,"batchingIdTexture",U._indirectTexture,E),mt.setOptional(O,U,"batchingColorTexture"),U._colorsTexture!==null&&mt.setValue(O,"batchingColorTexture",U._colorsTexture,E));let Ds=H.morphAttributes;if((Ds.position!==void 0||Ds.normal!==void 0||Ds.color!==void 0)&&Te.update(U,H,an),(qt||ve.receiveShadow!==U.receiveShadow)&&(ve.receiveShadow=U.receiveShadow,mt.setValue(O,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(gn.envMap.value=xe,gn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(gn.envMapIntensity.value=N.environmentIntensity),qt&&(mt.setValue(O,"toneMappingExposure",x.toneMappingExposure),ve.needsLights&&nf(gn,Ls),te&&V.fog===!0&&oe.refreshFogUniforms(gn,te),oe.refreshMaterialUniforms(gn,V,z,$,p.state.transmissionRenderTarget[w.id]),rs.upload(O,Ph(ve),gn,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rs.upload(O,Ph(ve),gn,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&mt.setValue(O,"center",U.center),mt.setValue(O,"modelViewMatrix",U.modelViewMatrix),mt.setValue(O,"normalMatrix",U.normalMatrix),mt.setValue(O,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Jt=V.uniformsGroups;for(let Kn=0,Jn=Jt.length;Kn<Jn;Kn++){let Lh=Jt[Kn];L.update(Lh,an),L.bind(Lh,an)}}return an}function nf(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function sf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,N,H){Se.get(w.texture).__webglTexture=N,Se.get(w.depthTexture).__webglTexture=H;let V=Se.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let H=Se.get(w);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,H=0){C=w,A=N,T=H;let V=!0,U=null,te=!1,le=!1;if(w){let xe=Se.get(w);if(xe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(O.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(xe.__hasExternalTextures)E.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let _e=w.depthTexture;if(xe.__boundDepthTexture!==_e){if(_e!==null&&Se.has(_e)&&(w.width!==_e.image.width||w.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}let Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(le=!0);let Ue=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?U=Ue[N][H]:U=Ue[N],te=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?U=Se.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?U=Ue[H]:U=Ue,P.copy(w.viewport),F.copy(w.scissor),k=w.scissorTest}else P.copy(ye).multiplyScalar(z).floor(),F.copy(De).multiplyScalar(z).floor(),k=Ze;if(Me.bindFramebuffer(O.FRAMEBUFFER,U)&&V&&Me.drawBuffers(w,U),Me.viewport(P),Me.scissor(F),Me.setScissorTest(k),te){let xe=Se.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,H)}else if(le){let xe=Se.get(w.texture),Ie=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,xe.__webglTexture,H||0,Ie)}S=-1},this.readRenderTargetPixels=function(w,N,H,V,U,te,le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&le!==void 0&&(be=be[le]),be){Me.bindFramebuffer(O.FRAMEBUFFER,be);try{let xe=w.texture,Ie=xe.format,Ue=xe.type;if(!Be.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-V&&H>=0&&H<=w.height-U&&O.readPixels(N,H,V,U,Le.convert(Ie),Le.convert(Ue),te)}finally{let xe=C!==null?Se.get(C).__webglFramebuffer:null;Me.bindFramebuffer(O.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,N,H,V,U,te,le){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&le!==void 0&&(be=be[le]),be){let xe=w.texture,Ie=xe.format,Ue=xe.type;if(!Be.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-V&&H>=0&&H<=w.height-U){Me.bindFramebuffer(O.FRAMEBUFFER,be);let _e=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,_e),O.bufferData(O.PIXEL_PACK_BUFFER,te.byteLength,O.STREAM_READ),O.readPixels(N,H,V,U,Le.convert(Ie),Le.convert(Ue),0);let Ye=C!==null?Se.get(C).__webglFramebuffer:null;Me.bindFramebuffer(O.FRAMEBUFFER,Ye);let ht=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await cp(O,ht,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,_e),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,te),O.deleteBuffer(_e),O.deleteSync(ht),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,H=0){w.isTexture!==!0&&(qs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-H),U=Math.floor(w.image.width*V),te=Math.floor(w.image.height*V),le=N!==null?N.x:0,be=N!==null?N.y:0;E.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,le,be,U,te),Me.unbindTexture()},this.copyTextureToTexture=function(w,N,H=null,V=null,U=0){w.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,H=null);let te,le,be,xe,Ie,Ue,_e,Ye,ht,pt=w.isCompressedTexture?w.mipmaps[U]:w.image;H!==null?(te=H.max.x-H.min.x,le=H.max.y-H.min.y,be=H.isBox3?H.max.z-H.min.z:1,xe=H.min.x,Ie=H.min.y,Ue=H.isBox3?H.min.z:0):(te=pt.width,le=pt.height,be=pt.depth||1,xe=0,Ie=0,Ue=0),V!==null?(_e=V.x,Ye=V.y,ht=V.z):(_e=0,Ye=0,ht=0);let Vt=Le.convert(N.format),et=Le.convert(N.type),ve;N.isData3DTexture?(E.setTexture3D(N,0),ve=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(E.setTexture2DArray(N,0),ve=O.TEXTURE_2D_ARRAY):(E.setTexture2D(N,0),ve=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let En=O.getParameter(O.UNPACK_ROW_LENGTH),tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),an=O.getParameter(O.UNPACK_SKIP_PIXELS),Ni=O.getParameter(O.UNPACK_SKIP_ROWS),qt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ie),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ue);let Ls=w.isDataArrayTexture||w.isData3DTexture,mt=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let gn=Se.get(w),Ds=Se.get(N),Jt=Se.get(gn.__renderTarget),Kn=Se.get(Ds.__renderTarget);Me.bindFramebuffer(O.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Jn=0;Jn<be;Jn++)Ls&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Se.get(w).__webglTexture,U,Ue+Jn),w.isDepthTexture?(mt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Se.get(N).__webglTexture,U,ht+Jn),O.blitFramebuffer(xe,Ie,te,le,_e,Ye,te,le,O.DEPTH_BUFFER_BIT,O.NEAREST)):mt?O.copyTexSubImage3D(ve,U,_e,Ye,ht+Jn,xe,Ie,te,le):O.copyTexSubImage2D(ve,U,_e,Ye,ht+Jn,xe,Ie,te,le);Me.bindFramebuffer(O.READ_FRAMEBUFFER,null),Me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else mt?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(ve,U,_e,Ye,ht,te,le,be,Vt,et,pt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(ve,U,_e,Ye,ht,te,le,be,Vt,pt.data):O.texSubImage3D(ve,U,_e,Ye,ht,te,le,be,Vt,et,pt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,U,_e,Ye,te,le,Vt,et,pt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,U,_e,Ye,pt.width,pt.height,Vt,pt.data):O.texSubImage2D(O.TEXTURE_2D,U,_e,Ye,te,le,Vt,et,pt);O.pixelStorei(O.UNPACK_ROW_LENGTH,En),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,an),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ni),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qt),U===0&&N.generateMipmaps&&O.generateMipmap(ve),Me.unbindTexture()},this.copyTextureToTexture3D=function(w,N,H=null,V=null,U=0){return w.isTexture!==!0&&(qs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0),qs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,H,V,U)},this.initRenderTarget=function(w){Se.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,Me.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var ca=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ci=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kt=new I,Pi=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nr=class extends Wt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ki,ks=new I,Ji=new I,Zi=new I,$i=new Ce,Bs=new Ce,wd=new Re,Or=new I,zs=new I,Fr=new I,Du=new Ce,sc=new Ce,Nu=new Ce,la=class extends gt{constructor(e=new nr){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xs(t,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new Pi(n,3,0,!1)),Ki.setAttribute("uv",new Pi(n,2,3,!1))}this.geometry=Ki,this.material=e,this.center=new Ce(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ji.setFromMatrixScale(this.matrixWorld),wd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ji.multiplyScalar(-Zi.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;kr(Or.set(-.5,-.5,0),Zi,a,Ji,i,s),kr(zs.set(.5,-.5,0),Zi,a,Ji,i,s),kr(Fr.set(.5,.5,0),Zi,a,Ji,i,s),Du.set(0,0),sc.set(1,0),Nu.set(1,1);let o=e.ray.intersectTriangle(Or,zs,Fr,!1,ks);if(o===null&&(kr(zs.set(-.5,.5,0),Zi,a,Ji,i,s),sc.set(0,1),o=e.ray.intersectTriangle(Or,Fr,zs,!1,ks),o===null))return;let c=e.ray.origin.distanceTo(ks);c<e.near||c>e.far||t.push({distance:c,point:ks.clone(),uv:si.getInterpolation(ks,Or,zs,Fr,Du,sc,Nu,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function kr(r,e,t,n,i,s){$i.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Bs.x=s*$i.x-i*$i.y,Bs.y=i*$i.x+s*$i.y):Bs.copy($i),r.copy(e),r.x+=Bs.x,r.y+=Bs.y,r.applyMatrix4(wd)}var Uu=new I,Ou=new Ke,Fu=new Ke,sx=new I,ku=new Re,Br=new I,rc=new Yt,Bu=new Re,ac=new Ri,ha=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oh,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Br),this.boundingBox.expandByPoint(Br)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Br),this.boundingSphere.expandByPoint(Br)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rc.copy(this.boundingSphere),rc.applyMatrix4(i),e.ray.intersectsSphere(rc)!==!1&&(Bu.copy(i).invert(),ac.copy(e.ray).applyMatrix4(Bu),!(this.boundingBox!==null&&ac.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ac)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Df?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Ou.fromBufferAttribute(i.attributes.skinIndex,e),Fu.fromBufferAttribute(i.attributes.skinWeight,e),Uu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=Fu.getComponent(s);if(a!==0){let o=Ou.getComponent(s);ku.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(sx.copy(Uu).applyMatrix4(ku),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},ir=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ua=class extends Pt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Ut,h=Ut,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},zu=new Re,rx=new Re,da=class r{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:rx;zu.multiplyMatrices(o,t[s]),zu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ua(t,e,e,$t,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new ir),this.bones.push(a),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ii=class extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qi=new Re,Hu=new Re,zr=[],Vu=new Qt,ax=new Re,Hs=new Fe,Vs=new Yt,fn=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ax)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Vu.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(Vu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Vs.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Qi),Hu.multiplyMatrices(n,Qi),Hs.matrixWorld=Hu,Hs.raycast(e,zr);for(let a=0,o=zr.length;a<o;a++){let c=zr[a];c.instanceId=s,c.object=this,t.push(c)}zr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ua(new Float32Array(i*this.count),i,this.count,Nl,un));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var sr=class extends Wt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fa=new I,pa=new I,Gu=new Re,Gs=new Ri,Hr=new Yt,oc=new I,Wu=new I,_s=class extends gt{constructor(e=new dt,t=new sr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)fa.fromBufferAttribute(t,i-1),pa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fa.distanceTo(pa);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Hr.radius+=s,e.ray.intersectsSphere(Hr)===!1)return;Gu.copy(i).invert(),Gs.copy(e.ray).applyMatrix4(Gu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=h.getX(b),_=h.getX(b+1),v=Vr(this,e,Gs,c,p,_);v&&t.push(v)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(f),p=Vr(this,e,Gs,c,b,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=Vr(this,e,Gs,c,b,b+1);p&&t.push(p)}if(this.isLineLoop){let b=Vr(this,e,Gs,c,g-1,f);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Vr(r,e,t,n,i,s){let a=r.geometry.attributes.position;if(fa.fromBufferAttribute(a,i),pa.fromBufferAttribute(a,s),t.distanceSqToSegment(fa,pa,oc,Wu)>n)return;oc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(oc);if(!(c<e.near||c>e.far))return{distance:c,point:Wu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var qu=new I,Xu=new I,ma=class extends _s{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)qu.fromBufferAttribute(t,i),Xu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qu.distanceTo(Xu);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ga=class extends _s{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},rr=class extends Wt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ju=new Re,fl=new Ri,Gr=new Yt,Wr=new I,ba=class extends gt{constructor(e=new dt,t=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Gr.radius+=s,e.ray.intersectsSphere(Gr)===!1)return;ju.copy(i).invert(),fl.copy(e.ray).applyMatrix4(ju);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=l.getX(g);Wr.fromBufferAttribute(u,m),Yu(Wr,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)Wr.fromBufferAttribute(u,g),Yu(Wr,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Yu(r,e,t,n,i,s,a){let o=fl.distanceSqToPoint(r);if(o<t){let c=new I;fl.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var vs=class extends Pt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},pl=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Ce:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new I,i=[],s=[],a=[],o=new I,c=new Re;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new I)}s[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ct(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(Ct(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function zl(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var qr=new I,cc=new zl,lc=new zl,hc=new zl,xa=class extends pl{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(qr.subVectors(i[0],i[1]).add(i[0]),l=qr);let u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(qr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),cc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),lc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),hc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),lc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),hc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(cc.calc(c),lc.calc(c),hc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ar=class r extends dt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new I,h=new Ce;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(o,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pn=class r extends dt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,b=[],m=n/2,p=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(d,3)),this.setAttribute("uv",new Xe(f,2));function _(){let x=new I,R=new I,A=0,T=(t-e)/n;for(let C=0;C<=s;C++){let S=[],y=C/s,P=y*(t-e)+e;for(let F=0;F<=i;F++){let k=F/i,G=k*c+o,Y=Math.sin(G),W=Math.cos(G);R.x=P*Y,R.y=-y*n+m,R.z=P*W,u.push(R.x,R.y,R.z),x.set(Y,T,W).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-y),S.push(g++)}b.push(S)}for(let C=0;C<i;C++)for(let S=0;S<s;S++){let y=b[S][C],P=b[S+1][C],F=b[S+1][C+1],k=b[S][C+1];(e>0||S!==0)&&(h.push(y,P,k),A+=3),(t>0||S!==s-1)&&(h.push(P,F,k),A+=3)}l.addGroup(p,A,0),p+=A}function v(x){let R=g,A=new Ce,T=new I,C=0,S=x===!0?e:t,y=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let P=g;for(let F=0;F<=i;F++){let G=F/i*c+o,Y=Math.cos(G),W=Math.sin(G);T.x=S*W,T.y=m*y,T.z=S*Y,u.push(T.x,T.y,T.z),d.push(0,y,0),A.x=Y*.5+.5,A.y=W*.5*y+.5,f.push(A.x,A.y),g++}for(let F=0;F<i;F++){let k=R+F,G=P+F;x===!0?h.push(G,G+1,k):h.push(G+1,G,k),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Li=class r extends pn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var li=class r extends dt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new I,d=new I,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let _=[],v=p/n,x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){let A=R/t;u.x=-e*Math.cos(i+A*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+A*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(A+x,1-v),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let v=h[p][_+1],x=h[p][_],R=h[p+1][_],A=h[p+1][_+1];(p!==0||a>0)&&f.push(v,x,A),(p!==n-1||c<Math.PI)&&f.push(x,R,A)}this.setIndex(f),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(b,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var st=class extends Wt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pd,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kt=class extends st{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Xr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ox(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function cx(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ku(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Ad(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var hi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ml=class extends hi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fh,endingEnd:Fh}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case kh:s=e,o=2*t-n;break;case Bh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kh:a=e,c=2*n-t;break;case Bh:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,_=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*b+.5*g,x=f*m-f*b;for(let R=0;R!==o;++R)s[R]=p*a[h+R]+_*a[l+R]+v*a[c+R]+x*a[u+R];return s}},gl=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},bl=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},tn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xr(t,this.TimeBufferType),this.values=Xr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xr(e.times,Array),values:Xr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ml(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case us:t=this.InterpolantFactoryMethodDiscrete;break;case ds:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return ds;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&ox(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Io,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=ds;var ui=class extends tn{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=us;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends tn{};_a.prototype.ValueTypeName="color";var Hn=class extends tn{};Hn.prototype.ValueTypeName="number";var xl=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)xt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Vn=class extends tn{InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}};Vn.prototype.ValueTypeName="quaternion";Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends tn{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=us;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends tn{};Gn.prototype.ValueTypeName="vector";var va=class{constructor(e="",t=-1,n=[],i=Nf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(hx(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(tn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=cx(c);c=Ku(c,1,h),l=Ku(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Hn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,b){if(f.length!==0){let m=[],p=[];Ad(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){let v=d[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new Hn(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Gn,f+".position",d,"pos",i),n(Vn,f+".quaternion",d,"rot",i),n(Gn,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function lx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hn;case"vector":case"vector2":case"vector3":case"vector4":return Gn;case"color":return _a;case"quaternion":return Vn;case"bool":case"boolean":return ui;case"string":return di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function hx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=lx(r.type);if(r.times===void 0){let t=[],n=[];Ad(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var ri={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},_l=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},ux=new _l,Wn=class{constructor(e){this.manager=e!==void 0?e:ux,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ln={},vl=class extends Error{constructor(e,t){super(e),this.response=t}},or=class extends Wn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ri.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:n,onError:i});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ln[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{b+=x.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let A=0,T=h.length;A<T;A++){let C=h[A];C.onProgress&&C.onProgress(R)}p.enqueue(x),_()}},v=>{p.error(v)})}}});return new Response(m)}else throw new vl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ri.add(e,l);let h=Ln[e];delete Ln[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ln[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ln[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var yl=class extends Wn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ri.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=Qs("img");function c(){h(),ri.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var ya=class extends Wn{constructor(e){super(e)}load(e,t,n,i){let s=new Pt,a=new yl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},ys=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ma=class extends ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},uc=new Re,Ju=new I,Zu=new I,cr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ml=class extends cr{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=fs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ms=class extends ys{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Ml}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},$u=new Re,Ws=new I,dc=new I,Sl=class extends cr{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ws.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ws),dc.copy(n.position),dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dc),n.updateMatrixWorld(),i.makeTranslation(-Ws.x,-Ws.y,-Ws.z),$u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u)}},Sa=class extends ys{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},wl=class extends cr{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qn=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new wl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wa=class extends Wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ri.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ri.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ri.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ri.add(e,c),s.manager.itemStart(e)}};var Hl="\\[\\]\\.:\\/",dx=new RegExp("["+Hl+"]","g"),Vl="[^"+Hl+"]",fx="[^"+Hl.replace("\\.","")+"]",px=/((?:WC+[\/:])*)/.source.replace("WC",Vl),mx=/(WCOD+)?/.source.replace("WCOD",fx),gx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vl),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vl),xx=new RegExp("^"+px+mx+gx+bx+"$"),_x=["material","materials","bones","map"],Al=class{constructor(e,t,n){let i=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dx,"")}static parseTrackName(e){let t=xx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);_x.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Al;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m_=new Float32Array(1);var Qu=new Re,Aa=class{constructor(e,t,n=0,i=1/0){this.ray=new Ri(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qu),this}intersectObject(e,t=!0,n=[]){return El(e,this,n,t),n.sort(ed),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)El(e[i],this,n,t);return n.sort(ed),n}};function ed(r,e){return r.distance-e.distance}function El(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)El(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tl);function Td(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new dt,l=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}c.setIndex(u)}for(let h in s){let u=Ed(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let g=Ed(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Ed(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new ot(a,t,n),c=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let b=h.getComponent(d,g);o.setComponent(d+u,g,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Gl(r,e){if(e===fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===hr||e===Ta){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===hr)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var Ia=class extends Wn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jl(t)}),this.register(function(t){return new Zl(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new Ql(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new Kl(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new $l(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new jl(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new hh(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=fi.extractUrlBase(e);a=fi.resolveURL(l,this.path)}else a=fi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new or(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ld){try{a[Ge.KHR_BINARY_GLTF]=new uh(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new xh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:a[u]=new Yl;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[u]=new dh(s,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[u]=new fh;break;case Ge.KHR_MESH_QUANTIZATION:a[u]=new ph;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function vx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},jl=class{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ot);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new qn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Sa(h),l.distance=u;break;case"spot":l=new Ms(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Xn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Yl=class{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return _t}extendParams(e,t,n){let i=[];e.color=new pe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ot),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,yt))}return Promise.all(i)}},Kl=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},Jl=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ce(o,o)}return Promise.all(s)}},Zl=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},$l=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},Ql=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ot)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,yt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},eh=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},th=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(o[0],o[1],o[2],Ot),Promise.all(s)}},nh=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},ih=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(o[0],o[1],o[2],Ot),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,yt)),Promise.all(s)}},sh=class{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},rh=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},ah=class{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},oh=class{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ch=class{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},lh=class{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},hh=class{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==nn.TRIANGLES&&l.mode!==nn.TRIANGLE_STRIP&&l.mode!==nn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new Re,m=new I,p=new xt,_=new I(1,1,1),v=new fn(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,b.compose(m,p,_));for(let x in c)if(x==="_COLOR_0"){let R=c[x];v.instanceColor=new Ii(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);gt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Ld="glTF",dr=12,Rd={JSON:1313821514,BIN:5130562},uh=class{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,dr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ld)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-dr,s=new DataView(e,dr),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Rd.JSON){let l=new Uint8Array(e,dr+a,o);this.content=n.decode(l)}else if(c===Rd.BIN){let l=dr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},dh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=gh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=gh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ws[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,Ot,d)})})}},fh=class{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ph=class{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}},La=class extends hi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,_=1-m,v=p-d+u;for(let x=0;x!==o;x++){let R=a[b+x+o],A=a[b+x+c]*h,T=a[g+x+o],C=a[g+x]*h;s[x]=_*R+v*A+m*T+p*C}return s}},yx=new xt,mh=class extends La{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return yx.fromArray(s).normalize().toArray(s),s}},nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ws={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cd={9728:Ut,9729:Gt,9984:Pl,9985:js,9986:es,9987:xn},Pd={33071:Un,33648:Zs,10497:kn},Wl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},pi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mx={CUBICSPLINE:void 0,LINEAR:ds,STEP:us},ql={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Sx(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new st({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_n})),r.DefaultMaterial}function Di(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wx(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Ax(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ex(r){let e,t=r.extensions&&r.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xl(t.attributes):e=r.indices+":"+Xl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Xl(r.targets[n]);return e}function Xl(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function bh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tx(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Rx=new Re,xh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new ya(this.options.manager):this.textureLoader=new wa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Di(s,o,i),Xn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(fi.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Wl[i.type],o=ws[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new ot(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Wl[i.type],l=ws[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,v=t.cache.get(_);v||(b=new l(o,p*f,i.count*f/h),v=new xs(b,f/h),t.cache.add(_,v)),m=new Pi(v,c,d%f/h,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new ot(b,c,g);if(i.sparse!==void 0){let p=Wl.SCALAR,_=ws[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,R=new _(a[1],v,i.sparse.count*p),A=new l(a[2],x,i.sparse.count*c);o!==null&&(m=new ot(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=R.length;T<C;T++){let S=R[T];if(m.setX(S,A[T*c]),c>=2&&m.setY(S,A[T*c+1]),c>=3&&m.setZ(S,A[T*c+2]),c>=4&&m.setW(S,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Cd[d.magFilter]||Gt,h.minFilter=Cd[d.minFilter]||xn,h.wrapS=Pd[d.wrapS]||kn,h.wrapT=Pd[d.wrapT]||kn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ut&&h.minFilter!==Gt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Pt(b);m.needsUpdate=!0,d(m)}),t.load(fi.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Xn(u,a),u.userData.mimeType=a.mimeType||Tx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new rr,Wt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new sr,Wt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return st}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[Ge.KHR_MATERIALS_UNLIT]){let u=i[Ge.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ot),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,yt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Mt);let h=s.alphaMode||ql.OPAQUE;if(h===ql.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ql.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==_t&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ce(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==_t&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==_t){let u=s.emissiveFactor;o.emissive=new pe().setRGB(u[0],u[1],u[2],Ot)}return s.emissiveTexture!==void 0&&a!==_t&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,yt)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Xn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Di(i,u,s),u})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Id(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Ex(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Id(new dt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Sx(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,_=l[f];if(m.mode===nn.TRIANGLES||m.mode===nn.TRIANGLE_STRIP||m.mode===nn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new ha(b,_):new Fe(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===nn.TRIANGLE_STRIP?p.geometry=Gl(p.geometry,Ta):m.mode===nn.TRIANGLE_FAN&&(p.geometry=Gl(p.geometry,hr));else if(m.mode===nn.LINES)p=new ma(b,_);else if(m.mode===nn.LINE_STRIP)p=new _s(b,_);else if(m.mode===nn.LINE_LOOP)p=new ga(b,_);else if(m.mode===nn.POINTS)p=new ba(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Ax(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Xn(p,s),m.extensions&&Di(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Di(i,u[0],s),u[0];let d=new lt;s.extensions&&Di(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bt(Ca.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new gs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Re;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new da(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let _=0,v=d.length;_<v;_++){let x=d[_],R=f[_],A=g[_],T=b[_],C=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let S=n._createAnimationTracks(x,R,A,T,C);if(S)for(let y=0;y<S.length;y++)p.push(S[y])}return new va(s,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Rx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new ir:l.length>1?h=new lt:l.length===1?h=l[0]:h=new gt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Xn(h,s),s.extensions&&Di(n,h,s),s.matrix!==void 0){let u=new Re;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new lt;n.name&&(s.name=i.createUniqueName(n.name)),Xn(s,n),n.extensions&&Di(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Wt||d instanceof Pt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,c=[];pi[s.path]===pi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(pi[s.path]){case pi.weights:l=Hn;break;case pi.rotation:l=Vn;break;case pi.position:case pi.scale:l=Gn;break;default:switch(n.itemSize){case 1:l=Hn;break;case 2:case 3:default:l=Gn;break}break}let h=i.interpolation!==void 0?Mx[i.interpolation]:ds,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+pi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bh(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Vn?mh:La;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Cx(r,e,t){let n=e.attributes,i=new Qt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){let h=bh(ws[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new I,c=new I;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=bh(ws[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Yt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Id(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=gh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return We.workingColorSpace!==Ot&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),Xn(r,e),Cx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wx(r,e.targets,t):r})}var Dd=function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),v=0;v<p.length;++v){var x=p.charCodeAt(v);_[v]=x>96?x-97:x>64?x-39:x+4}for(var R=0,v=0;v<p.length;++v)_[R++]=_[v]<60?n[_[v]]:(_[v]-60)*64+_[++v];return _.buffer.slice(0,R)}function c(p,_,v,x,R,A){var T=s.exports.sbrk,C=v+3&-4,S=T(C*x),y=T(R.length),P=new Uint8Array(s.exports.memory.buffer);P.set(R,y);var F=p(S,v,x,y,R.length);if(F==0&&A&&A(S,C,x),_.set(P.subarray(S,S+v*x)),T(S-T(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(v){var x=v.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function g(p){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(v),R=0;R<p;++R)u[R]=f(x);URL.revokeObjectURL(x)}function b(p,_,v,x,R){for(var A=u[0],T=1;T<u.length;++T)u[T].pending<A.pending&&(A=u[T]);return new Promise(function(C,S){var y=new Uint8Array(v),P=d++;A.pending+=p,A.requests[P]={resolve:C,reject:S},A.object.postMessage({id:P,count:p,size:_,source:y,mode:x,filter:R},[y.buffer])})}function m(p){a.then(function(){var _=p.data;try{var v=new Uint8Array(_.count*_.size);c(s.exports[_.mode],v,_.count,_.size,_.source,s.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(x){self.postMessage({id:_.id,count:_.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,v,x,R){c(s.exports.meshopt_decodeVertexBuffer,p,_,v,x,s.exports[l[R]])},decodeIndexBuffer:function(p,_,v,x){c(s.exports.meshopt_decodeIndexBuffer,p,_,v,x)},decodeIndexSequence:function(p,_,v,x){c(s.exports.meshopt_decodeIndexSequence,p,_,v,x)},decodeGltfBuffer:function(p,_,v,x,R,A){c(s.exports[h[R]],p,_,v,x,s.exports[l[A]])},decodeGltfBufferAsync:function(p,_,v,x,R){return u.length>0?b(p,_,v,h[x],l[R]):a.then(function(){var A=new Uint8Array(p*_);return c(s.exports[h[x]],A,p,_,v,s.exports[l[R]]),A})}}}();var D=r=>document.getElementById(r),jn={get(r,e=null){try{let t=localStorage.getItem(r);return t==null?e:JSON.parse(t)}catch{return e}},set(r,e){try{localStorage.setItem(r,JSON.stringify(e))}catch{}}};function As(r){let e=new Set;r.traverse(t=>{t.geometry&&t.geometry.dispose(),(Array.isArray(t.material)?t.material:t.material?[t.material]:[]).forEach(i=>e.add(i))});for(let t of e){for(let n of Object.values(t))n&&n.isTexture&&n.dispose();t.dispose()}r.removeFromParent()}function Da(r){r.updateMatrixWorld(!0),r.traverse(e=>{e!==r&&(e.matrixAutoUpdate=!1,e.matrixWorldAutoUpdate=!1)})}var Px="__GAME_ASSETS__",Na=class{constructor(){this.cache=new Map,this.gltfLoader=new Ia().setMeshoptDecoder(Dd)}get isFileProtocol(){return location.protocol==="file:"}loadGLTF(e){return this.#e(e,async()=>{let t=await this.#t(e);return new Promise((n,i)=>this.gltfLoader.parse(t,"",n,i))})}loadJSON(e){return this.#e(e,async()=>{if(this.isFileProtocol)return(await this.#n(e)).data;let t=await fetch(e);if(!t.ok)throw new Error(`Falha ao carregar ${e}: ${t.status} ${t.statusText}`);return t.json()})}async release(e){let t=this.cache.get(e);if(!t)return;this.cache.delete(e);let n=await t.catch(()=>null);n&&n.scene&&As(n.scene)}#e(e,t){if(!this.cache.has(e)){let n=t();n.catch(()=>this.cache.delete(e)),this.cache.set(e,n)}return this.cache.get(e)}async#t(e){if(!this.isFileProtocol){let n=await fetch(e);if(!n.ok)throw new Error(`Falha ao carregar ${e}: ${n.status} ${n.statusText}`);return n.arrayBuffer()}let t=await this.#n(e);return Ix(t.data)}#n(e){return new Promise((t,n)=>{let i=document.createElement("script");i.src=e+".js",i.onload=()=>{let s=window[Px]||{},a=s[e];delete s[e],i.remove(),a?t(a):n(new Error(`${e}.js n\xE3o registrou o asset`))},i.onerror=()=>{i.remove(),n(new Error(`N\xE3o foi poss\xEDvel ler ${e}.js (rode: python tools/embed_assets.py)`))},document.head.appendChild(i)})}};function Ix(r){let e=atob(r),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}var Mn={physicsStep:.0085,maxFrameTime:.05,defaultVehicle:"chevette",defaultMap:"circuito"},Yn={options:"opts",bindings:"binds",bestLap:"best"},Nd=[.5,.75,.4],Es=9.81,Et={WORLD:0,SHADOW_ONLY:1,VEHICLE:2},mi={low:{pixelRatio:.75,shadowMapSize:512,lodDistance:220,farDensity:.5,renderDistance:450},medium:{pixelRatio:1.25,shadowMapSize:1024,lodDistance:320,farDensity:1,renderDistance:700},high:{pixelRatio:2,shadowMapSize:2048,lodDistance:480,farDensity:1,renderDistance:1e3}};var Ua=class{constructor(e=document.body){this.renderer=new oa({antialias:!0}),this.quality="medium",this.lowPower=!1,this.resolutionScale=1,this.setQuality(this.quality),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Rl,this.renderer.toneMapping=Cl,this.renderer.toneMappingExposure=1.05,this.renderer.info.autoReset=!1,e.prepend(this.renderer.domElement),this.shadowProbe=new bt(1,1,.1,1),this.shadowProbe.position.set(0,-1e6,0),this.shadowProbe.lookAt(0,-2e6,0),this.shadowProbe.updateMatrixWorld(),this.shadowProbe.layers.disableAll();for(let t of Object.values(Et))this.shadowProbe.layers.enable(t)}get canvas(){return this.renderer.domElement}setSize(e,t){this.renderer.setSize(e,t)}enableLowPower(){this.lowPower=!0,this.#e()}setQuality(e){this.quality=e,this.#e()}setResolutionScale(e){this.resolutionScale=e,this.#e()}#e(){let e=mi[this.quality].pixelRatio;this.renderer.setPixelRatio(Math.min(devicePixelRatio,e,this.lowPower?1.5:1/0)*this.resolutionScale)}render(e,t){let n=this.renderer,i=n.shadowMap,s=n.autoClear,a=i.autoUpdate,o=e.matrixWorldAutoUpdate;n.info.reset(),e.updateMatrixWorld(),e.matrixWorldAutoUpdate=!1,i.enabled&&(n.autoClear=!1,i.autoUpdate=!0,n.render(e,this.shadowProbe)),i.autoUpdate=!1,n.autoClear=s,t.layers.set(Et.WORLD),n.render(e,t),n.autoClear=!1,t.layers.set(Et.VEHICLE),n.render(e,t),t.layers.set(Et.WORLD),n.autoClear=s,i.autoUpdate=a,e.matrixWorldAutoUpdate=o}};var Oa=class{constructor(e){this.onFrame=e,this.last=performance.now(),this.running=!1,this.tick=this.tick.bind(this)}start(){this.running||(this.running=!0,this.last=performance.now(),requestAnimationFrame(this.tick))}resetClock(){this.last=performance.now()}tick(e){if(!this.running)return;requestAnimationFrame(this.tick);let t=Math.min((e-this.last)/1e3,Mn.maxFrameTime);this.last=e,this.onFrame(t,e)}};var Je=Ca.clamp,Ts=(r,e)=>Math.atan2(Math.sin(r-e),Math.cos(r-e));function Ud(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var fr=r=>(r/6e4|0)+":"+(r/1e3%60).toFixed(3).padStart(6,"0"),Od=r=>r<1e3?Math.round(r/10)*10+" m":(r/1e3).toFixed(1).replace(".",",")+" km";var Fa=class{constructor(e){let t=jn.get(Yn.options,{})||{};if(this.manualGearbox=!!t.manual,this.night=!!t.night,this.colorIndex=Number.isInteger(t.pi)&&t.pi>=0&&t.pi<e?t.pi:0,this.volume=typeof t.vol=="number"?Je(t.vol,0,1):.7,this.mapId=t.mapa?"salto":"circuito",this.vehicleId=typeof t.car=="string"?t.car:null,this.lowering={},t.low&&typeof t.low=="object")for(let[n,i]of Object.entries(t.low))typeof i=="number"&&(this.lowering[n]=Je(i,0,1));this.driftMode=!!t.drift,this.graphicsQuality=["low","medium","high"].includes(t.gfx)?t.gfx:"medium",this.shadowQuality=["off","low","medium","high"].includes(t.shadowQ)?t.shadowQ:t.shadow===!1?"off":this.graphicsQuality,this.resolutionScale=typeof t.res=="number"?Je(t.res,.5,1):1,this.diagnostics=!!t.diag,this.renderDistance=typeof t.renderDistance=="number"?Je(t.renderDistance,250,1200):700}get shadows(){return this.shadowQuality!=="off"}save(){jn.set(Yn.options,{manual:this.manualGearbox,night:this.night,pi:this.colorIndex,vol:this.volume,mapa:this.mapId==="salto"?1:0,car:this.vehicleId,low:this.lowering,drift:this.driftMode?1:0,gfx:this.graphicsQuality,shadow:this.shadows,shadowQ:this.shadowQuality,res:this.resolutionScale,renderDistance:this.renderDistance,diag:this.diagnostics})}};var gi={CHASE:0,COCKPIT:1},Lx=new I,Fd=new xt,Dx=new xt,Nx=new xt,Ux=new xt().setFromAxisAngle(new I(0,1,0),Math.PI),Ox=new I(1,0,0),Fx=new I(0,1,0),kx=1e3,ka=class{constructor(e){this.camera=new bt(62,1,.1,1200),this.mode=gi.CHASE,this.heading=0,this.lookYaw=0,this.lookPitch=0,this.zoom=1,this.dragging=!1,this.idleTime=0,this.menuAngle=0,this.#e(e)}#e(e){let t=-1,n=0,i=0;e.style.cursor="grab",e.addEventListener("pointerdown",s=>{t>=0||(t=s.pointerId,n=s.clientX,i=s.clientY,this.dragging=!0,e.setPointerCapture(s.pointerId),e.style.cursor="grabbing")}),e.addEventListener("pointermove",s=>{s.pointerId===t&&(this.lookYaw+=(s.clientX-n)*.006,this.lookPitch=Je(this.lookPitch+(s.clientY-i)*.004,-.35,.9),n=s.clientX,i=s.clientY,this.idleTime=0)});for(let s of["pointerup","pointercancel"])e.addEventListener(s,a=>{a.pointerId===t&&(t=-1,this.dragging=!1,e.style.cursor="grab")});e.addEventListener("wheel",s=>{this.zoom=Je(this.zoom*(1+s.deltaY*.001),.5,2.5),s.preventDefault()},{passive:!1})}toggleMode(){this.mode^=1}reset(e){this.heading=e,this.lookYaw=this.lookPitch=0}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setRenderDistance(e){this.camera.far=Math.max(e,kx),this.camera.updateProjectionMatrix()}update(e,t){let n=this.camera,i=t.vehicleState,s=Math.hypot(i.vx,i.vz);if(t.menuOpen&&innerWidth>=900?n.setViewOffset(innerWidth,innerHeight,-innerWidth*.2,0,innerWidth,innerHeight):n.view&&n.view.enabled&&n.clearViewOffset(),!t.onFoot&&!this.dragging&&(this.idleTime+=e)>1.2){let a=Math.exp(-e*3);this.lookYaw*=a,this.lookPitch*=a}if(t.menuOpen)this.menuAngle+=e*.25,n.position.set(i.x+Math.sin(this.menuAngle)*7.5,2.3,i.z+Math.cos(this.menuAngle)*7.5),n.lookAt(i.x,.8,i.z),n.fov=45;else if(t.onFoot){let a=t.playerBody;if(this.heading+=Ts(a.h,this.heading)*Math.min(1,e*4),this.mode===gi.COCKPIT){let o=t.fpsYaw===void 0?null:t,c=o?t.fpsYaw:a.h+this.lookYaw,l=o?t.fpsPitch:this.lookPitch;n.position.set(t.fpsEye?.x??a.x,t.fpsEye?.y??a.y+1.67,t.fpsEye?.z??a.z),n.lookAt(a.x+Math.sin(c),(t.fpsEye?.y??a.y+1.67)+Math.sin(l),a.z+Math.cos(c)),n.fov=72}else{let o=4.3*this.zoom,c=this.heading-this.lookYaw,l=Je(.3+this.lookPitch,.05,1.3),h=Math.cos(l);n.position.set(a.x-Math.sin(c)*h*o,1.25+Math.sin(l)*o,a.z-Math.cos(c)*h*o),n.lookAt(a.x,1.4,a.z),n.fov=60}}else if(this.mode===gi.CHASE){let a=s>8?i.h+Ts(Math.atan2(i.vx,i.vz),i.h)*.35:i.h;this.heading+=Ts(a,this.heading)*Math.min(1,e*3.5);let o=(6.8+s*.03)*this.zoom,c=this.heading-this.lookYaw,l=Je(.2+this.lookPitch+s*.0015,.02,1.3),h=Math.cos(l),u=Math.max(0,1-Math.abs(this.lookYaw)*1.5)*3;n.position.set(i.x-Math.sin(c)*h*o,1.1+Math.sin(l)*o,i.z-Math.cos(c)*h*o),n.lookAt(i.x+Math.sin(this.heading)*u,1.1,i.z+Math.cos(this.heading)*u),n.fov=62+Math.min(s,50)*.4}else{let a=t.vehicleModel;n.position.copy(Lx.fromArray(t.cockpitOffset).applyMatrix4(a.matrixWorld)),a.getWorldQuaternion(Fd),n.quaternion.copy(Fd).multiply(Ux).multiply(Dx.setFromAxisAngle(Fx,this.lookYaw)).multiply(Nx.setFromAxisAngle(Ox,this.lookPitch)),n.fov=72}n.updateProjectionMatrix()}};function zt(r,e,t,n=1,i=1){let s=document.createElement("canvas");s.width=r,s.height=e,t(s.getContext("2d"),r,e);let a=new vs(s);return a.colorSpace=yt,a.wrapS=a.wrapT=kn,a.repeat.set(n,i),a.anisotropy=8,a}function Ba(r,e,t,n,i,s){r.fillStyle=n,r.fillRect(0,0,e,t);for(let a=0;a<i;a++){let o=Math.random()*255|0;r.fillStyle=`rgba(${o},${o},${o},${s})`,r.fillRect(Math.random()*e,Math.random()*t,2,2)}}var za={fog:13229292,fogNear:150,envIntensity:.9,sky:1},kd={fog:659488,fogNear:40,fogFar:320,envIntensity:.18,sky:.06},Ha=class{constructor(e){this.scene=new Ci,this.scene.fog=new ca(za.fog,za.fogNear,700),this.sunDirection=new I(...Nd).normalize(),this.sky=Bd(900,this.sunDirection,!1),this.sky.renderOrder=2,this.scene.add(this.sky);let t=new Ci,n=Bd(50,this.sunDirection,!0);t.add(n);let i=new bs(e);this.scene.environment=i.fromScene(t,.02).texture,this.scene.environmentIntensity=za.envIntensity,i.dispose(),n.traverse(s=>{s.geometry?.dispose(),s.material?.dispose()}),this.groundTexture=zt(256,256,(s,a,o)=>{s.fillStyle="#4f7d3a",s.fillRect(0,0,a,o);for(let c=0;c<2500;c++)s.fillStyle=`hsl(${85+Math.random()*30},${35+Math.random()*20}%,${25+Math.random()*18}%)`,s.fillRect(Math.random()*a,Math.random()*o,2,2+Math.random()*3)},400,400),this.ground=new Fe(new ms(2e3,2e3),new st({map:this.groundTexture,roughness:1})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.ground.renderOrder=1,this.scene.add(this.ground),this.night=!1,this.mapFogFar=700,this.renderDistance=null}setGroundScale(e){this.ground.scale.setScalar(e),this.groundTexture.repeat.set(400*e,400*e)}setMapFogFar(e){this.mapFogFar=e,this.#e()}setRenderDistance(e){this.renderDistance=e,this.#e()}setNight(e){this.night=e;let t=e?kd:za;this.scene.environmentIntensity=t.envIntensity,this.scene.fog.color.set(t.fog),this.scene.fog.near=t.fogNear,this.sky.material.color.setScalar(t.sky),this.#e()}followCamera(e){this.sky.position.copy(e.position)}#e(){this.scene.fog.far=this.renderDistance??(this.night?kd.fogFar:this.mapFogFar)}};function Bd(r,e,t){let n=new li(r,32,16),i=n.attributes.position,s=new pe(13624306),a=new pe(3108804),o=new pe(7176034),c=new pe,l=[];for(let u=0;u<i.count;u++){let d=i.getY(u)/r;d<0?c.copy(o):c.lerpColors(s,a,Math.pow(d,.5)),l.push(c.r,c.g,c.b)}n.setAttribute("color",new Xe(l,3));let h=new Fe(n,new _t({vertexColors:!0,side:Nt,fog:!1,depthWrite:!1}));if(t){let u=new Fe(new li(r*.08,16,8),new _t({color:new pe(14,12,9)}));u.position.copy(e).multiplyScalar(r*.9),h.add(u)}return h}var Va=class{constructor(e,t){this.sunDirection=t,this.sun=new qn(16773596,2.6),this.sun.castShadow=!0,this.quality="medium",this.setShadowQuality(this.quality),Object.assign(this.sun.shadow.camera,{left:-35,right:35,top:35,bottom:-35,near:1,far:260}),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,this.sun.layers.enable(Et.VEHICLE),e.add(this.sun,this.sun.target)}setNight(e){this.sun.intensity=e?.15:2.6,this.sun.color.set(e?9086207:16773596)}setShadowQuality(e){this.quality=e;let t=e!=="off";if(this.sun.castShadow=t,!t){this.#e();return}let n=mi[e].shadowMapSize;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.#e())}follow(e,t){let n=this.sunDirection;this.sun.position.set(e+n.x*120,n.y*120,t+n.z*120),this.sun.target.position.set(e,0,t)}#e(){this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)}};var Bx=[[0,-170],[95,-175],[175,-115],[185,-25],[120,35],[135,115],[65,180],[-45,150],[-75,80],[-155,60],[-195,-30],[-135,-120],[-60,-105]],Ft=700,zd=8.2,_h=420,Ga=class r{static async create(){return new r}constructor(){this.id="circuito",this.fogFar=700,this.groundScale=1,this.bodyClass="",this.group=new lt;let e=new xa(Bx.map(t=>new I(t[0],0,t[1])),!0,"centripetal");this.length=e.getLength(),this.points=e.getSpacedPoints(Ft).slice(0,Ft),this.tangents=this.points.map((t,n)=>e.getTangentAt(n/Ft)),this.normals=this.tangents.map(t=>new I(t.z,0,-t.x)),this.index=0,this.#t(),this.#n(),this.#i(),this.#s(),Da(this.group),this.best=+jn.get(Yn.bestLap,0)||0,this.resetLaps(),this.onLap=null}#e(e,t,n,i,s){let a=[],o=[],c=[];for(let u=0;u<=Ft;u++){let d=this.points[u%Ft],f=this.normals[u%Ft];if(a.push(d.x+f.x*e,n,d.z+f.z*e,d.x+f.x*t,n,d.z+f.z*t),o.push(0,u/Ft,1,u/Ft),u<Ft){let g=u*2;c.push(g,g+1,g+2,g+1,g+3,g+2)}}let l=new dt;l.setAttribute("position",new Xe(a,3)),l.setAttribute("uv",new Xe(o,2)),l.setIndex(c),l.computeVertexNormals(),l.attributes.normal.getY(0)<0&&(l.setIndex(c.reverse()),l.computeVertexNormals());let h=new Fe(l,new st({map:i,roughness:.9,polygonOffset:!0,polygonOffsetFactor:s,polygonOffsetUnits:s}));h.receiveShadow=!0,this.group.add(h)}#t(){let e=zt(256,256,(n,i,s)=>{n.fillStyle="#3b3e43",n.fillRect(0,0,i,s);for(let a=0;a<5e3;a++){let o=Math.random()*255|0;n.fillStyle=`rgba(${o},${o},${o},.12)`,n.fillRect(Math.random()*i,Math.random()*s,2,2)}n.fillStyle="#e8e8e8",n.fillRect(i*.035,0,7,s),n.fillRect(i*.965-7,0,7,s),n.fillRect(i/2-3,0,6,s*.5)},1,this.length/12),t=zt(64,64,(n,i,s)=>{n.fillStyle="#dcdcdc",n.fillRect(0,0,i,s),n.fillStyle="#c8191f",n.fillRect(0,0,i,s/2)},1,this.length/2.6);this.#e(-7,7,.02,e,-2),this.#e(7,8.3,.03,t,-3),this.#e(-8.3,-7,.03,t,-3)}#n(){let e=new lt,t=new st({color:14540253,metalness:.6,roughness:.4}),n=new pn(.25,.25,7);for(let a of[-8.8,8.8]){let o=new Fe(n,t);o.position.set(a,3.5,0),o.castShadow=!0,e.add(o)}let i=zt(256,32,a=>{for(let o=0;o<32;o++)for(let c=0;c<4;c++)a.fillStyle=(o+c)%2?"#fff":"#111",a.fillRect(o*8,c*8,8,8)}),s=new Fe(new en(18,1.4,.3),new st({map:i}));s.position.y=6.6,s.castShadow=!0,e.add(s),e.position.copy(this.points[0]),e.rotation.y=Math.atan2(this.tangents[0].x,this.tangents[0].z),this.group.add(e)}#i(){this.trees=[];let e=new fn(new pn(.25,.35,3,6,1,!0),new st({color:5913378,roughness:1}),_h),t=new fn(new Li(2.2,7,8),new st({color:16777215,roughness:.9}),_h),n=new Re,i=new xt,s=new I,a=new I,o=new pe;for(let c=0;c<_h;){let l=(Math.random()-.5)*840,h=(Math.random()-.5)*840;if(this.index=0,this.distanceToTrack(l,h)<18)continue;let u=.8+Math.random()*.8;a.set(u,u,u),e.setMatrixAt(c,n.compose(s.set(l,1.5*u,h),i,a)),t.setMatrixAt(c,n.compose(s.set(l,5.5*u,h),i,a)),t.setColorAt(c,o.setHSL(.27+Math.random()*.08,.45,.18+Math.random()*.12)),this.trees.push([l,h,.4*u]),c++}this.index=0,e.castShadow=t.castShadow=!0,this.group.add(e,t)}#s(){let e=1e9,t=1e9,n=-1e9,i=-1e9;for(let s of this.points)e=Math.min(e,s.x),n=Math.max(n,s.x),t=Math.min(t,s.z),i=Math.max(i,s.z);this.mini={minX:e,minZ:t,scale:0,path:null,size:0},this.miniBounds={minX:e,minZ:t,maxX:n,maxZ:i}}distanceToTrack(e,t){let n=1e9,i=this.index,s=a=>{let o=this.points[a],c=(o.x-e)**2+(o.z-t)**2;c<n&&(n=c,i=a)};for(let a=-25;a<=25;a++)s((this.index+a+Ft)%Ft);if(n>900)for(let a=0;a<Ft;a++)s(a);return this.index=i,Math.sqrt(n)}#r(e,t){let n=1e9;for(let i=-25;i<=25;i++){let s=this.points[(this.index+i+Ft)%Ft],a=(s.x-e)**2+(s.z-t)**2;a<n&&(n=a)}return Math.sqrt(n)}isOnRoad(e,t){return this.#r(e,t)<zd}surfaceUnder(e,t){return t.distance=this.distanceToTrack(e.x,e.z),t.onRoad=t.distance<zd,t}forEachObstacleNear(e,t,n){for(let i of this.trees)n(i)}collideVehicle(e,t){if(t.distance<=160)return;let n=this.points[this.index],i=n.x-e.x,s=n.z-e.z,a=Math.hypot(i,s);e.x+=i/a*(t.distance-160),e.z+=s/a*(t.distance-160),e.vx*=.5,e.vz*=.5}collideBody(){}spawn(e,t){let n=t?this.index:Ft-6,i=this.points[n],s=this.tangents[n];e.x=i.x,e.z=i.z,e.h=Math.atan2(s.x,s.z),this.index=n}resetLaps(){this.sectors=7,this.lapRunning=!1,this.lapStart=0,this.lapsDone=0}shiftTimers(e){this.lapRunning&&(this.lapStart+=e)}updateProgress(e){let t=this.index,n=Ft;this.distanceToTrack(e.x,e.z);let i=this.index;if(i>n*.25&&i<n*.5&&(this.sectors|=1),i>n*.5&&i<n*.75&&(this.sectors|=2),i>n*.75&&i<n*.95&&(this.sectors|=4),!(t>n*.9&&i<n*.1&&this.sectors===7))return;let s=performance.now();if(this.lapRunning){let a=s-this.lapStart;this.lapsDone++;let o="Volta "+this.lapsDone+": "+fr(a);(!this.best||a<this.best)&&(this.best=a,jn.set(Yn.bestLap,a),o+=" \u2013 novo recorde!"),this.onLap?.(o)}this.lapRunning=!0,this.lapStart=s,this.sectors=0}get currentLap(){return this.lapsDone+1}timerText(e){return this.lapRunning?fr(e-this.lapStart):"0:00.000"}drawMinimap(e,t,n){let i=t.width;if(this.mini.size!==i){let o=this.miniBounds,c=(i-20)/Math.max(o.maxX-o.minX,o.maxZ-o.minZ),l=new Path2D;this.points.forEach((h,u)=>{let d=(h.x-o.minX)*c+10,f=(h.z-o.minZ)*c+10;u?l.lineTo(d,f):l.moveTo(d,f)}),l.closePath(),this.mini={scale:c,path:l,size:i}}let s=this.miniBounds,a=this.mini.scale;e.clearRect(0,0,i,t.height),e.lineWidth=5,e.strokeStyle="rgba(255,255,255,.75)",e.stroke(this.mini.path),e.fillStyle="#ff4d3a",e.beginPath(),e.arc((n.x-s.minX)*a+10,(n.z-s.minZ)*a+10,4.5,0,7),e.fill()}setNight(){}dispose(){As(this.group),this.trees=this.points=this.tangents=this.normals=null}};var Hd=(r,e)=>r*100003+e,Wa=class{constructor(e,t){this.roads=e,this.halfWidths=t,this.#e(),this.#t()}#e(){let e=new Map;this.nodeXY=[],this.edges=[],this.adjacency=[];let t=(n,i)=>{let s=Math.round(n*10)+","+Math.round(i*10),a=e.get(s);return a===void 0&&(a=this.nodeXY.length/2,e.set(s,a),this.nodeXY.push(n,i),this.adjacency.push([])),a};for(let n of this.roads){let i=n.P,s=t(i[0],i[1]),a=t(i[i.length-2],i[i.length-1]),o=[0],c=0;for(let l=0;l<i.length/2-1;l++)c+=Math.hypot(i[l*2+2]-i[l*2],i[l*2+3]-i[l*2+1]),o.push(c);n.e=this.edges.length,this.edges.push({a:s,b:a,L:c,P:i,acc:o,n:n.n}),this.adjacency[s].push(n.e),this.adjacency[a].push(n.e)}}#t(){this.grid=new Map,this.segments=[];for(let e of this.roads){let t=this.halfWidths[e.c];for(let n=0;n<e.P.length/2-1;n++){let i=[e.P[n*2],e.P[n*2+1],e.P[n*2+2],e.P[n*2+3],t,e.n,e.c,e.e,n],s=this.segments.length;this.segments.push(i);for(let a=Math.floor((Math.min(i[0],i[2])-t-30)/16);a<=Math.floor((Math.max(i[0],i[2])+t+30)/16);a++)for(let o=Math.floor((Math.min(i[1],i[3])-t-30)/16);o<=Math.floor((Math.max(i[1],i[3])+t+30)/16);o++){let c=Hd(a,o);this.grid.has(c)?this.grid.get(c).push(s):this.grid.set(c,[s])}}}}#n(e,t){return this.grid.get(Hd(Math.floor(e/16),Math.floor(t/16)))||zx}nearest(e,t){let n=null;for(let i of this.#n(e,t)){let s=this.segments[i],a=s[2]-s[0],o=s[3]-s[1],c=a*a+o*o,l=c?Math.max(0,Math.min(1,((e-s[0])*a+(t-s[1])*o)/c)):0,h=Math.hypot(e-s[0]-a*l,t-s[1]-o*l);(!n||h-s[4]<n[0]-n[2][4])&&(n=[h,l,s])}return n}isOnRoad(e,t){let n=this.nearest(e,t);return!!n&&n[0]<n[2][4]+.4}project(e,t){let n=null,i=s=>{let a=s[2]-s[0],o=s[3]-s[1],c=a*a+o*o,l=c?Math.max(0,Math.min(1,((e-s[0])*a+(t-s[1])*o)/c)):0,h=s[0]+a*l,u=s[1]+o*l,d=Math.hypot(e-h,t-u);(!n||d<n.d)&&(n={d,e:s[7],pos:this.edges[s[7]].acc[s[8]]+l*Math.sqrt(c),x:h,z:u})};for(let s of this.#n(e,t))i(this.segments[s]);if(!n||n.d>25)for(let s of this.segments)i(s);return n}nearestDrivable(e,t){let n=null;for(let c of this.segments){if(c[6]===7)continue;let l=c[2]-c[0],h=c[3]-c[1],u=l*l+h*h,d=u?Math.max(0,Math.min(1,((e-c[0])*l+(t-c[1])*h)/u)):0,f=Math.hypot(e-c[0]-l*d,t-c[1]-h*d);(!n||f<n[0])&&(n=[f,c,d])}let[,i,s]=n,a=i[2]-i[0],o=i[3]-i[1];return{x:i[0]+a*s,z:i[1]+o*s,heading:Math.atan2(a,o)}}#i(e,t,n,i){let s=this.edges[e],a=s.P,o=s.acc,c=o.length,l=h=>{let u=0;for(;u<c-2&&o[u+1]<h;u++);let d=o[u+1]-o[u]||1,f=Math.max(0,Math.min(1,(h-o[u])/d));i.push(a[u*2]+(a[u*2+2]-a[u*2])*f,a[u*2+1]+(a[u*2+3]-a[u*2+1])*f)};if(l(t),t<=n)for(let h=1;h<c-1;h++)o[h]>t&&o[h]<n&&i.push(a[h*2],a[h*2+1]);else for(let h=c-2;h>0;h--)o[h]<t&&o[h]>n&&i.push(a[h*2],a[h*2+1]);l(n)}route(e,t){let n=[];if(e.e===t.e)return this.#i(e.e,e.pos,t.pos,n),{pts:n,L:Math.abs(t.pos-e.pos)};let i=this.adjacency.length;(!this.search||this.search.g.length!==i)&&(this.search={g:new Float64Array(i),via:new Int32Array(i),closed:new Uint8Array(i),heap:new vh});let{g:s,via:a,closed:o,heap:c}=this.search;s.fill(1/0),a.fill(-1),o.fill(0),c.clear();let l=m=>Math.hypot(this.nodeXY[m*2]-t.x,this.nodeXY[m*2+1]-t.z),h=this.edges[e.e],u=this.edges[t.e];s[h.a]=e.pos,s[h.b]=Math.min(s[h.b],h.L-e.pos),c.push(s[h.a]+l(h.a),h.a),c.push(s[h.b]+l(h.b),h.b);let d=1/0,f=-1;for(;c.size;){let m=c.topKey,p=c.pop();if(!o[p]){if(m>=d)break;o[p]=1,p===u.a&&s[p]+t.pos<d&&(d=s[p]+t.pos,f=p),p===u.b&&s[p]+u.L-t.pos<d&&(d=s[p]+u.L-t.pos,f=p);for(let _ of this.adjacency[p]){let v=this.edges[_],x=v.a===p?v.b:v.a,R=s[p]+v.L;R<s[x]&&(s[x]=R,a[x]=_,c.push(R+l(x),x))}}}if(f<0)return null;let g=[];for(let m=f;a[m]>=0;){let p=a[m],_=this.edges[p];g.push([p,m]),m=_.a===m?_.b:_.a}let b=f;for(let[m]of g){let p=this.edges[m];b=p.a===b?p.b:p.a}this.#i(e.e,e.pos,b===h.a?0:h.L,n);for(let m=g.length-1;m>=0;m--){let[p,_]=g[m],v=this.edges[p];_===v.b?this.#i(p,0,v.L,n):this.#i(p,v.L,0,n)}return this.#i(t.e,f===u.a?0:u.L,t.pos,n),{pts:n,L:d}}},zx=[],vh=class{constructor(){this.keys=new Float64Array(256),this.values=new Int32Array(256),this.size=0}clear(){this.size=0}get topKey(){return this.keys[0]}push(e,t){if(this.size===this.keys.length){let a=new Float64Array(this.size*2),o=new Int32Array(this.size*2);a.set(this.keys),o.set(this.values),this.keys=a,this.values=o}let n=this.keys,i=this.values,s=this.size++;for(;s>0;){let a=s-1>>1;if(n[a]<=e)break;n[s]=n[a],i[s]=i[a],s=a}n[s]=e,i[s]=t}pop(){let e=this.keys,t=this.values,n=t[0],i=--this.size;if(i>0){let s=e[i],a=t[i],o=0;for(;;){let c=o*2+1,l=c+1,h=-1,u=s;if(c<i&&e[c]<u&&(h=c,u=e[c]),l<i&&e[l]<u&&(h=l),h<0)break;e[o]=e[h],t[o]=t[h],o=h}e[o]=s,t[o]=a}return n}};var Hx="#b44dff",Vx=.6,qa=class{constructor(e,t,n){this.network=e,this.names=t,this.destination=null,this.route=null,this.timer=0,this.label="",this.onArrive=null,this.arrowTexture=zt(64,64,(s,a,o)=>{s.clearRect(0,0,a,o),s.fillStyle="rgba(190,80,255,.55)",s.fillRect(0,0,a,o),s.strokeStyle="#f4dcff",s.lineWidth=9,s.lineJoin="round",s.beginPath(),s.moveTo(12,44),s.lineTo(32,20),s.lineTo(52,44),s.stroke()}),this.line=new Fe(new dt,new _t({map:this.arrowTexture,transparent:!0,depthWrite:!1,side:Mt,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8})),this.line.frustumCulled=!1,this.line.renderOrder=3,this.line.visible=!1,this.beam=new Fe(new pn(2.2,2.2,90,24,1,!0),new _t({color:12603135,transparent:!0,opacity:.28,depthWrite:!1,side:Mt,blending:$r})),this.beam.position.y=45,this.beam.renderOrder=4;let i=new Fe(new pn(4.5,4.5,.12,32),new _t({color:12603135,transparent:!0,opacity:.6,depthWrite:!1}));this.marker=new lt,this.marker.add(this.beam,i),this.marker.visible=!1,this.line.layers.set(Et.VEHICLE),this.marker.traverse(s=>s.layers.set(Et.VEHICLE)),n.add(this.line,this.marker)}unfreeze(){for(let e of[this.line,this.marker])e.traverse(t=>{t.matrixAutoUpdate=t.matrixWorldAutoUpdate=!0})}get hasDestination(){return!!this.destination}setDestination(e,t){let n=this.network.project(e,t);return!n||n.d>60?!1:(this.destination=n,this.marker.position.set(n.x,0,n.z),this.marker.visible=!0,this.timer=0,!0)}clear(){this.destination=this.route=null,this.line.visible=this.marker.visible=!1,this.label=""}update(e,t){if(!this.destination||(this.arrowTexture.offset.y-=t*1.4,this.beam.rotation.y+=t,(this.timer-=t)>0))return;this.timer=Vx;let n=this.network.project(e.x,e.z);if(!n)return;let i=this.network.route(n,this.destination);if(!i){this.label="Sem caminho at\xE9 o destino",this.routeFound=!1;return}this.route=i,this.routeFound=!0,this.#e(i.pts);let s=this.names[this.network.edges[this.destination.e].n]||"Destino";this.label=s+" \xB7 "+Od(i.L+n.d),i.L<14&&n.d<12&&(this.clear(),this.onArrive?.())}#e(e){let t=[],n=[],i=[],a=0;for(let c=0;c<e.length/2;c++){let l=Math.max(0,c-1),h=Math.min(e.length/2-1,c+1),u=e[h*2]-e[l*2],d=e[h*2+1]-e[l*2+1],f=Math.hypot(u,d)||1;u/=f,d/=f,c&&(a+=Math.hypot(e[c*2]-e[c*2-2],e[c*2+1]-e[c*2-1])),t.push(e[c*2]-d*.75,.08,e[c*2+1]+u*.75,e[c*2]+d*.75,.08,e[c*2+1]-u*.75),n.push(0,a/2.6,1,a/2.6),c&&i.push(c*2-2,c*2-1,c*2,c*2-1,c*2+1,c*2)}let o=new dt;o.setAttribute("position",new Xe(t,3)),o.setAttribute("uv",new Xe(n,2)),o.setIndex(i),this.line.geometry.dispose(),this.line.geometry=o,this.line.visible=e.length>=4}drawOn(e,t,n){if(this.route){let i=this.route.pts;e.strokeStyle=Hx,e.lineWidth=n,e.lineCap=e.lineJoin="round",e.beginPath();for(let s=0;s<i.length;s+=2){let[a,o]=t(i[s],i[s+1]);s?e.lineTo(a,o):e.moveTo(a,o)}e.stroke()}}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.arrowTexture.dispose(),this.marker.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})}};var Xa=class{constructor(e,t){this.size=e,this.parent=t,this.chunks=new Map,this.list=[],this.lastX=1/0,this.lastZ=1/0,this.viewDistance=1/0,this.lodDistance=1/0,this.farDensity=1,this.dirty=!0}keyOf(e,t){return Math.floor(e/this.size)*100003+Math.floor(t/this.size)}at(e,t){let n=this.keyOf(e,t),i=this.chunks.get(n);if(!i){let s=Math.floor(e/this.size),a=Math.floor(t/this.size);i={group:new lt,minX:s*this.size,minZ:a*this.size,maxX:(s+1)*this.size,maxZ:(a+1)*this.size,detail:[],thinned:[],near:null},this.chunks.set(n,i),this.list.push(i),this.parent.add(i.group)}return i}configure({viewDistance:e,lodDistance:t,farDensity:n}){e!==void 0&&(this.viewDistance=e),t!==void 0&&(this.lodDistance=t),n!==void 0&&(this.farDensity=n),this.dirty=!0}update(e,t){if(!(!this.dirty&&Math.abs(e-this.lastX)<20&&Math.abs(t-this.lastZ)<20)){this.dirty=!1,this.lastX=e,this.lastZ=t;for(let n of this.list){let i=Math.max(n.minX-e,0,e-n.maxX),s=Math.max(n.minZ-t,0,t-n.maxZ),a=Math.hypot(i,s);if(n.group.visible=a<=this.viewDistance,!n.group.visible)continue;let o=a<=this.lodDistance;if(o!==n.near){n.near=o;for(let c of n.detail)c.visible=o;for(let[c,l]of n.thinned)c.count=o?l:Math.ceil(l*this.farDensity)}}}}};var Rs=50,ja=class{constructor(e,t,n){this.radius=n,this.lastX=1/0,this.lastZ=1/0,this.enabled=!0,this.pools=[];for(let i of Object.values(e)){let s=i.x.length;if(!s)continue;let a=new Map;for(let l=0;l<s;l++){let h=Math.floor(i.x[l]/Rs)*100003+Math.floor(i.z[l]/Rs),u=a.get(h);u?u.push(l):a.set(h,[l])}let o=Math.min(s,2048),c=new fn(i.geometry,i.material,o);c.instanceMatrix.setUsage(ur),c.count=0,c.castShadow=!0,c.receiveShadow=!1,c.frustumCulled=!1,c.layers.set(Et.SHADOW_ONLY),t.add(c),this.pools.push({kind:i,cells:a,mesh:c,capacity:o})}}setEnabled(e){this.enabled=e;for(let t of this.pools)t.mesh.visible=e;this.lastX=1/0}update(e,t){if(!this.enabled||Math.abs(e-this.lastX)<10&&Math.abs(t-this.lastZ)<10)return;this.lastX=e,this.lastZ=t;let n=this.radius,i=n*n,s=Math.floor((e-n)/Rs),a=Math.floor((e+n)/Rs),o=Math.floor((t-n)/Rs),c=Math.floor((t+n)/Rs);for(let l of this.pools){let{kind:h,cells:u,mesh:d,capacity:f}=l,g=h.matrices,b=d.instanceMatrix.array,m=0;for(let p=s;p<=a&&m<f;p++)for(let _=o;_<=c&&m<f;_++){let v=u.get(p*100003+_);if(v)for(let x of v){let R=h.x[x]-e,A=h.z[x]-t;if(!(R*R+A*A>i)&&(b.set(g.subarray(x*16,x*16+16),m*16),++m===f))break}}d.count=m,d.instanceMatrix.clearUpdateRanges(),d.instanceMatrix.addUpdateRange(0,m*16),d.instanceMatrix.needsUpdate=!0}}};var Gx=[["#efe4cf","#f3d9b8","#e6ecef","#f2e6a8","#d9e8cf","#f0d0c8","#e2d4ef","#fafafa"],["#c9c2b6","#d8b28a","#b9c9d6","#e8e0d0","#a9b8a0","#e0c090","#d0a8a0","#bfbfbf"],["#d8d8d4","#c4ccd4","#e6dccb","#b8c0c8","#d4c4b0","#a8b4bc","#e4e4e0","#c8bca8"]],Wx=["#9c3d2b","#a84a32","#8a3426","#7a4a3a","#6b6b6b","#9a5a3a","#b05a3a","#5e4a42"],qx=400,Xx=100,Sn=32,yh=2048,Ya=(r,e)=>r*100003+e,Ka=class r{static async create(e,t){let n=await e.loadJSON(t.data);return new r(n,t)}constructor(e,t){this.id=t.id,this.dataUrl=t.data,this.fogFar=620,this.groundScale=4.2,this.bodyClass="cidade",this.half=e.meia,this.names=e.nomes,this.start=e.inicio,this.group=new lt,this.rand=Ud(20240611),this.chunks=new Xa(qx,this.group);let n=e.ruas.map(i=>({c:i[0],n:i[1],P:i.slice(2).map(s=>s/10)}));this.network=new Wa(n,e.larguras),this.#e(n,e),this.#n(e),this.#i(n,e.larguras),this.gps=new qa(this.network,this.names,this.group),this.streetLabel="",this.streetTimer=0,Da(this.group),this.gps.unfreeze()}#e(e,t){let n=zt(256,256,(u,d,f)=>Ba(u,d,f,"#4a4c51",7e3,.1)),i=zt(256,256,(u,d,f)=>Ba(u,d,f,"#8a6a45",6e3,.12)),s=zt(256,256,(u,d,f)=>{Ba(u,d,f,"#b8b4ab",4e3,.08),u.strokeStyle="rgba(0,0,0,.16)",u.lineWidth=2;for(let g=0;g<=4;g++)u.beginPath(),u.moveTo(g*64,0),u.lineTo(g*64,f),u.moveTo(0,g*64),u.lineTo(d,g*64),u.stroke()}),a=zt(8,64,(u,d,f)=>{u.clearRect(0,0,d,f),u.fillStyle="#f0c22e",u.fillRect(0,0,d,f*.55)}),o={},c=u=>o[u]||(o[u]={p:[],i:[]}),l={p:[],uv:[],i:[]};for(let u of e){let d=t.larguras[u.c];if(u.c===7){Mh(c("dirt"),u.P,d,.035);continue}Mh(c("sidewalk"),u.P,d+t.calcada,.018),Mh(c("asphalt"),u.P,d,.04),u.c<=2&&jx(l,u.P)}for(let u of t.pracas){let d=c("sidewalk"),f=d.p.length/3;for(let g=0;g<u.length;g+=2)d.p.push(u[g]/10,.045,u[g+1]/10),d.i.push(f+g/2)}let h=(u,d,f)=>new st(Object.assign({map:u,roughness:.92,side:Mt,polygonOffset:!0,polygonOffsetFactor:d,polygonOffsetUnits:d},f||{}));o.sidewalk&&this.#t(o.sidewalk,h(s,-1),4),o.asphalt&&this.#t(o.asphalt,h(n,-2),6),o.dirt&&this.#t(o.dirt,h(i,-2),6),l.p.length&&this.#t(l,h(a,-3,{transparent:!0,alphaTest:.5,roughness:.6}),1,!0)}#t(e,t,n,i=!1){let s=e.p,a=e.i,o=s.length/3,c=new Map;for(let d=0;d<a.length;d+=3){let f=a[d]*3,g=a[d+1]*3,b=a[d+2]*3,m=this.chunks.at((s[f]+s[g]+s[b])/3,(s[f+2]+s[g+2]+s[b+2])/3),p=c.get(m);p?p.push(a[d],a[d+1],a[d+2]):c.set(m,[a[d],a[d+1],a[d+2]])}let l=new Int32Array(o),h=new Int32Array(o).fill(-1),u=0;for(let[d,f]of c){u++;let g=[],b=[],m=new Uint32Array(f.length);for(let R=0;R<f.length;R++){let A=f[R];h[A]!==u&&(h[A]=u,l[A]=g.length/3,g.push(s[A*3],s[A*3+1],s[A*3+2]),e.uv?b.push(e.uv[A*2],e.uv[A*2+1]):b.push(s[A*3]/n,s[A*3+2]/n)),m[R]=l[A]}let p=g.length/3,_=new Float32Array(p*3);for(let R=0;R<p;R++)_[R*3+1]=1;let v=new dt;v.setAttribute("position",new Xe(g,3)),v.setAttribute("normal",new ot(_,3)),v.setAttribute("uv",new Xe(b,2)),v.setIndex(new ot(p>65535?m:Uint16Array.from(m),1)),v.computeBoundingSphere();let x=new Fe(v,t);x.receiveShadow=!0,d.group.add(x),i&&d.detail.push(x)}}#n(e){let t=new en(1,1,1);t.translate(0,.5,0);let n=new Li(Math.SQRT1_2,1,4);n.rotateY(Math.PI/4),n.translate(0,.5,0);let i=new en(1,1,1);i.translate(0,.5,0);let s=new pn(.25,.35,3,6,1,!0),a=new Li(2.2,7,8);this.windowUniform={value:0};let o={body:[t,Yx(this.windowUniform)],roof:[n,new st({roughness:.8,flatShading:!0})],slab:[i,new st({color:9211016,roughness:.95})],trunk:[s,new st({color:5913378,roughness:1})],crown:[a,new st({color:16777215,roughness:.9})]},c=new Map,l=(R,A)=>{let T=this.chunks.at(R,A);return c.has(T)||c.set(T,{body:[],roof:[],slab:[],trunk:[],crown:[],trees:[]}),c.get(T)},h=new Re,u=new xt,d=new I(0,1,0),f=new I,g=new I,b=new pe,m=new xt;this.buildingGrid=new Map;let p=e.construcoes;for(let R=0;R<p.length;R+=8){let A=p[R]/10,T=p[R+1]/10,C=p[R+2]/10*Math.PI/180,S=p[R+3]/10,y=p[R+4]/10,P=p[R+5]/10,F=p[R+6],k=p[R+7],G=l(A,T);u.setFromAxisAngle(d,-C),G.body.push([h.compose(f.set(A,0,T),u,g.set(S,P,y)).clone(),Gx[F][k]]),F===0?G.roof.push([h.compose(f.set(A,P,T),u,g.set(S*1.1,1.5+this.rand()*.8,y*1.1)).clone(),Wx[k]]):G.slab.push([h.compose(f.set(A,P,T),u,g.set(S+.3,.35,y+.3)).clone(),null]);let Y=[A,T,Math.cos(C),Math.sin(C),S/2,y/2],W=Math.hypot(S,y)/2+2;for(let $=Math.floor((A-W)/Sn);$<=Math.floor((A+W)/Sn);$++)for(let z=Math.floor((T-W)/Sn);z<=Math.floor((T+W)/Sn);z++){let ne=Ya($,z);this.buildingGrid.has(ne)?this.buildingGrid.get(ne).push(Y):this.buildingGrid.set(ne,[Y])}}this.treeGrid=new Map;let _=e.arvores;for(let R=0;R<_.length;R+=3){let A=_[R]/10,T=_[R+1]/10,C=_[R+2]/100;g.set(C,C,C);let S=h.compose(f.set(A,1.5*C,T),m,g).clone(),y=h.compose(f.set(A,5.5*C,T),m,g).clone();l(A,T).trees.push([S,y,b.setHSL(.27+this.rand()*.08,.45,.18+this.rand()*.12).getHex()]);let P=Ya(Math.floor(A/Sn),Math.floor(T/Sn)),F=[A,T,.4*C];this.treeGrid.has(P)?this.treeGrid.get(P).push(F):this.treeGrid.set(P,[F])}let v=Object.fromEntries(Object.keys(o).map(R=>[R,{matrices:[],x:[],z:[]}]));for(let[R,A]of c){let T=A.trees;for(let C=T.length-1;C>0;C--){let S=Math.floor(this.rand()*(C+1));[T[C],T[S]]=[T[S],T[C]]}for(let[C,S,y]of T)A.trunk.push([C,null]),A.crown.push([S,y]);for(let[C,[S,y]]of Object.entries(o)){let P=A[C];if(!P.length)continue;let F=new fn(S,y,P.length),k=v[C];P.forEach(([G,Y],W)=>{F.setMatrixAt(W,G),Y!=null&&F.setColorAt(W,b.set(Y));for(let $=0;$<16;$++)k.matrices.push(G.elements[$]);k.x.push(G.elements[12]),k.z.push(G.elements[14])}),F.castShadow=!1,F.receiveShadow=C!=="trunk",F.instanceMatrix.needsUpdate=!0,F.instanceColor&&(F.instanceColor.needsUpdate=!0),F.computeBoundingSphere(),R.group.add(F),C==="trunk"&&R.detail.push(F),C==="crown"&&R.thinned.push([F,P.length])}}let x={};for(let[R,[A,T]]of Object.entries(o)){let C=v[R];x[R]={geometry:A,material:T,matrices:new Float32Array(C.matrices),x:new Float32Array(C.x),z:new Float32Array(C.z)}}this.shadowCasters=new ja(x,this.group,Xx)}updateView(e,t){this.chunks.update(e.position.x,e.position.z),this.shadowCasters.update(t.x,t.z)}setDetail({viewDistance:e,lodDistance:t,farDensity:n,shadows:i}){this.chunks.configure({viewDistance:e,lodDistance:t,farDensity:n}),i!==void 0&&this.shadowCasters.setEnabled(i)}#i(e,t){let n=this.half,i=yh;this.miniScale=i/(2*n+200);let s=this.miniScale,a=c=>(c+n+100)*s;this.miniCanvas=document.createElement("canvas"),this.miniCanvas.width=this.miniCanvas.height=i;let o=this.miniCanvas.getContext("2d");o.fillStyle="rgba(20,32,20,.55)",o.fillRect(0,0,i,i),o.lineCap=o.lineJoin="round";for(let c of e.slice().sort((l,h)=>h.c-l.c)){o.strokeStyle=c.c===7?"rgba(190,150,100,.8)":c.c<=1?"#ffd84a":c.c===2?"#ffffff":"rgba(255,255,255,.75)",o.lineWidth=Math.max(1.2,t[c.c]*2*s*1.6),o.beginPath();for(let l=0;l<c.P.length;l+=2)l?o.lineTo(a(c.P[l]),a(c.P[l+1])):o.moveTo(a(c.P[l]),a(c.P[l+1]));o.stroke()}}isOnRoad(e,t){return this.network.isOnRoad(e,t)}surfaceUnder(e,t){return t.distance=0,t.onRoad=this.network.isOnRoad(e.x,e.z),t}forEachObstacleNear(e,t,n){let i=Math.floor(e/Sn),s=Math.floor(t/Sn);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let c=this.treeGrid.get(Ya(i+a,s+o));if(c)for(let l of c)n(l)}}collideBody(e){let n=this.buildingGrid.get(Ya(Math.floor(e.x/Sn),Math.floor(e.z/Sn)));if(n){for(let i of n){let s=e.x-i[0],a=e.z-i[1],o=s*i[2]+a*i[3],c=-s*i[3]+a*i[2];if(Math.abs(o)>i[4]+1.05||Math.abs(c)>i[5]+1.05)continue;let l=Math.max(-i[4],Math.min(i[4],o)),h=Math.max(-i[5],Math.min(i[5],c)),u=o-l,d=c-h,f,g=Math.hypot(u,d);if(g>1e-4){if(g>=1.05)continue;u/=g,d/=g,f=1.05-g}else{let _=i[4]-Math.abs(o),v=i[5]-Math.abs(c);_<v?(u=Math.sign(o)||1,d=0,f=_+1.05):(u=0,d=Math.sign(c)||1,f=v+1.05)}let b=u*i[2]-d*i[3],m=u*i[3]+d*i[2];e.x+=b*f,e.z+=m*f;let p=e.vx*b+e.vz*m;p<0&&(e.vx=(e.vx-1.3*p*b)*.8,e.vz=(e.vz-1.3*p*m)*.8,e.r*=.6)}this.limit(e)}}collideVehicle(e){this.collideBody(e)}limit(e){let t=this.half-8;Math.abs(e.x)>t&&(e.x=Math.sign(e.x)*t,e.vx*=-.3),Math.abs(e.z)>t&&(e.z=Math.sign(e.z)*t,e.vz*=-.3)}spawn(e,t){if(!t){e.x=this.start[0],e.z=this.start[1],e.h=this.start[2];return}let n=this.network.nearestDrivable(e.x,e.z);e.x=n.x,e.z=n.z,e.h=Math.cos(n.heading-e.h)>=0?n.heading:n.heading+Math.PI}updateProgress(){}shiftTimers(){}resetLaps(){}streetName(e,t){if((this.streetTimer-=1)>0)return this.streetLabel;this.streetTimer=15;let n=this.network.nearest(e,t);return this.streetLabel=n&&n[0]<n[2][4]+12&&this.names[n[2][5]]||"Salto de Pirapora",this.streetLabel}timerText(e,t){return this.streetName(t.x,t.z)}drawMinimap(e,t,n){let i=t.width,s=this.miniScale,a=i/520/s,o=i/520,c=this.half;e.clearRect(0,0,i,i),e.save(),e.beginPath(),e.arc(i/2,i/2,i/2-2,0,7),e.clip(),e.translate(i/2,i/2),e.rotate(-Math.PI/2-Math.atan2(Math.cos(n.h),Math.sin(n.h))),e.drawImage(this.miniCanvas,-(n.x+c+100)*s*a,-(n.z+c+100)*s*a,yh*a,yh*a);let l=this.miniProjector||(this.miniProjector={out:[0,0],x:0,z:0,s:1,fn:null});l.x=n.x,l.z=n.z,l.s=o,l.fn||=(u,d)=>(l.out[0]=(u-l.x)*l.s,l.out[1]=(d-l.z)*l.s,l.out),this.gps.drawOn(e,l.fn,4);let h=this.gps.destination;if(h){let u=(h.x-n.x)*o,d=(h.z-n.z)*o,f=Math.hypot(u,d),g=i/2-9;f>g&&(u*=g/f,d*=g/f),e.fillStyle="#b44dff",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.arc(u,d,6,0,7),e.fill(),e.stroke()}e.restore(),e.fillStyle="#ff4d3a",e.beginPath(),e.moveTo(i/2,i/2-8),e.lineTo(i/2+5.5,i/2+6),e.lineTo(i/2-5.5,i/2+6),e.closePath(),e.fill()}drawFullMap(e,t,n,i){let s=[0,0],a=(d,f)=>t(d,f,s);e.lineCap=e.lineJoin="round";for(let d of this.network.roads.slice().sort((f,g)=>g.c-f.c)){e.strokeStyle=d.c===7?"#8a7458":d.c<=1?"#f2c94c":d.c===2?"#ffffff":"#c9cdd2",e.lineWidth=Math.max(d.c<=2?2:1,this.network.halfWidths[d.c]*2*n),e.beginPath();for(let f=0;f<d.P.length;f+=2){let[g,b]=a(d.P[f],d.P[f+1]);f?e.lineTo(g,b):e.moveTo(g,b)}e.stroke()}this.gps.drawOn(e,a,Math.max(4,3*n));let o=this.gps.destination;if(o){let[d,f]=a(o.x,o.z);e.fillStyle="#b44dff",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.arc(d,f-16,9,Math.PI*.85,Math.PI*.15),e.lineTo(d,f),e.closePath(),e.fill(),e.stroke(),e.fillStyle="#fff",e.beginPath(),e.arc(d,f-16,3.5,0,7),e.fill()}let[c,l]=a(i.x,i.z),h=Math.sin(i.h),u=Math.cos(i.h);e.fillStyle="#ff4d3a",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.moveTo(c+h*11,l+u*11),e.lineTo(c-h*7+u*7,l-u*7-h*7),e.lineTo(c-h*3,l-u*3),e.lineTo(c-h*7-u*7,l-u*7+h*7),e.closePath(),e.fill(),e.stroke()}setNight(e){this.windowUniform.value=e?1:0}dispose(){this.gps.dispose(),As(this.group),this.miniCanvas.width=this.miniCanvas.height=0,this.network=this.buildingGrid=this.treeGrid=this.miniCanvas=null}};function Mh(r,e,t,n){let i=e.length/2,s=-1;for(let a=0;a<i;a++){let o=e[a*2],c=e[a*2+1],l=a>0?a-1:0,h=a<i-1?a+1:i-1,u=o-e[l*2],d=c-e[l*2+1],f=e[h*2]-o,g=e[h*2+1]-c,b=Math.hypot(u,d)||1,m=Math.hypot(f,g)||1;u/=b,d/=b,f/=m,g/=m,a===0&&(u=f,d=g),a===i-1&&(f=u,g=d);let p=u+f,_=d+g,v=Math.hypot(p,_);v<1e-6?(p=f,_=g):(p/=v,_/=v);let x=Math.min(2.5,1/Math.max(.4,p*f+_*g)),R=r.p.length/3;r.p.push(o-_*t*x,n,c+p*t*x,o+_*t*x,n,c-p*t*x),s>=0&&r.i.push(s,s+1,R,s+1,R+1,R),s=R;let A=a>0&&a<i-1&&u*f+d*g<.985;if(a===0||a===i-1||A){let T=r.p.length/3,C=12;r.p.push(o,n,c);for(let S=0;S<=C;S++){let y=S/C*Math.PI*2;r.p.push(o+Math.cos(y)*t,n,c+Math.sin(y)*t)}for(let S=0;S<C;S++)r.i.push(T,T+1+S,T+2+S)}}}function jx(r,e){let t=0;for(let n=0;n<e.length/2-1;n++){let i=e[n*2],s=e[n*2+1],a=e[n*2+2],o=e[n*2+3],c=Math.hypot(a-i,o-s);if(c<.01)continue;let l=-(o-s)/c*.07,h=(a-i)/c*.07,u=r.p.length/3;r.p.push(i+l,.052,s+h,i-l,.052,s-h,a+l,.052,o+h,a-l,.052,o-h),r.uv.push(0,t/6,1,t/6,0,(t+c)/6,1,(t+c)/6),r.i.push(u,u+1,u+2,u+1,u+3,u+2),t+=c}}function Yx(r){let e=new st({roughness:.88});return e.onBeforeCompile=t=>{t.uniforms.uNoite=r,t.vertexShader=`varying vec3 vWP; varying vec3 vWN;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
      vec4 wp4 = vec4(transformed, 1.0);
      mat3 nm3 = mat3(modelMatrix);
      #ifdef USE_INSTANCING
        wp4 = instanceMatrix * wp4; nm3 = nm3 * mat3(instanceMatrix);
      #endif
      vWP = (modelMatrix * wp4).xyz; vWN = normalize(nm3 * objectNormal);`),t.fragmentShader=`uniform float uNoite; varying vec3 vWP; varying vec3 vWN; float gJan = 0.0; float gLuz = 0.0;
`+t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      if (abs(vWN.y) < 0.5) {
        vec3 tg = normalize(cross(vec3(0.0, 1.0, 0.0), vWN));
        float hu = dot(vWP, tg) / 3.1, hv = (vWP.y - 0.15) / 3.0;
        float fu = fract(hu), fv = fract(hv);
        gJan = step(0.24, fu) * step(fu, 0.76) * step(0.34, fv) * step(fv, 0.8) * step(0.0, hv);
        float cel = fract(sin(dot(floor(vec2(hu, hv)) + floor(vWP.xz * 0.05), vec2(12.9898, 78.233))) * 43758.5453);
        gLuz = gJan * step(0.45, cel);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.07, 0.09, 0.12), gJan * 0.92);
        diffuseColor.rgb *= 1.0 - 0.35 * (1.0 - smoothstep(0.0, 0.7, vWP.y));
      }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance += gLuz * uNoite * vec3(1.0, 0.78, 0.45) * 1.6;`)},e}var Vd={circuito:{id:"circuito",name:"Circuito",create:()=>Ga.create()},salto:{id:"salto",name:"Salto de Pirapora",data:"assets/maps/salto_de_pirapora/salto_de_pirapora.json",attribution:"\xA9 colaboradores do OpenStreetMap",create:(r,e)=>Ka.create(r,e)}};var Ja=class{constructor(e,t){this.environment=e,this.assets=t,this.map=null,this.loading=null}get mapId(){return this.map?this.map.id:null}async setMap(e){if(this.map&&this.map.id===e)return this.map;let t=Vd[e];if(!t)throw new Error(`Mapa desconhecido: ${e}`);let n=await t.create(this.assets,t),i=this.map;return i&&(this.environment.scene.remove(i.group),i.dispose(),i.dataUrl&&this.assets.release(i.dataUrl)),this.map=n,this.environment.scene.add(n.group),this.environment.setGroundScale(n.groundScale),this.environment.setMapFogFar(n.fogFar),n.setNight(this.environment.night),n}};var Za=class{constructor(e,t,n){this.capacity=t,this.color=n,this.next=0,this.positions=new Float32Array(t*12),this.colors=new Float32Array(t*16);let i=[];for(let s=0;s<t;s++){let a=s*4;i.push(a,a+1,a+2,a+1,a+3,a+2)}this.geometry=new dt,this.geometry.setAttribute("position",new ot(this.positions,3).setUsage(ur)),this.geometry.setAttribute("color",new ot(this.colors,4).setUsage(ur)),this.geometry.setIndex(i),this.mesh=new Fe(this.geometry,new _t({vertexColors:!0,transparent:!0,depthWrite:!1,side:Mt,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,e.add(this.mesh)}addQuad(e,t,n,i,s,a,o,c,l,h){let u=this.next++%this.capacity,d=u*12,f=u*16,[g,b,m]=this.color,p=this.positions,_=this.colors;p[d]=e,p[d+1]=.04,p[d+2]=t,p[d+3]=n,p[d+4]=.04,p[d+5]=i,p[d+6]=s,p[d+7]=.04,p[d+8]=a,p[d+9]=o,p[d+10]=.04,p[d+11]=c,_[f]=g,_[f+1]=b,_[f+2]=m,_[f+3]=l,_[f+4]=g,_[f+5]=b,_[f+6]=m,_[f+7]=l,_[f+8]=g,_[f+9]=b,_[f+10]=m,_[f+11]=h,_[f+12]=g,_[f+13]=b,_[f+14]=m,_[f+15]=h;let v=this.geometry.attributes.position,x=this.geometry.attributes.color;v.addUpdateRange(d,12),x.addUpdateRange(f,16),v.needsUpdate=x.needsUpdate=!0}clear(){this.positions.fill(0);let e=this.geometry.attributes.position;e.clearUpdateRanges(),e.needsUpdate=!0}},$a=class{constructor(e,t,n){this.asphalt=new Za(e,3e3,[.02,.02,.025]),this.dirt=new Za(e,2e3,[.17,.115,.06]),this.smoke=n,this.setWheelPoints(t),this.intensity=0}setWheelPoints(e){this.wheelPoints=e,this.trails=e.map(()=>({on:!1,buffer:null,lx:0,lz:0,rx:0,rz:0,alpha:0,x:0,z:0}))}update(e,t){let n=Math.sin(e.h),i=Math.cos(e.h),s=i,a=-n,o=0;for(let c=0;c<this.wheelPoints.length;c++){let l=this.wheelPoints[c],h=this.trails[c],u=l[2]?e.slipRear:e.slipFront,d=e.x+n*l[1]+s*l[0],f=e.z+i*l[1]+a*l[0],g=t.isOnRoad(d,f),b=g?this.asphalt:this.dirt,m=g?.1:.14,p=u*(g?.85:.6);o=Math.max(o,u);let _=d+s*m,v=f+a*m,x=d-s*m,R=f-a*m;u>.05?h.on&&h.buffer===b?Math.hypot(d-h.x,f-h.z)>.3&&(b.addQuad(h.lx,h.lz,h.rx,h.rz,_,v,x,R,h.alpha,p),Object.assign(h,{lx:_,lz:v,rx:x,rz:R,alpha:p,x:d,z:f})):Object.assign(h,{on:!0,buffer:b,lx:_,lz:v,rx:x,rz:R,alpha:0,x:d,z:f}):h.on&&(h.buffer.addQuad(h.lx,h.lz,h.rx,h.rz,_,v,x,R,h.alpha,0),h.on=!1),u>.2&&Math.random()<u*.5&&this.smoke.emit(d,f,g,u,e)}this.intensity=o*6}clear(){this.asphalt.clear(),this.dirt.clear();for(let e of this.trails)e.on=!1}};var Gd=90,Qa=class{constructor(e){this.texture=zt(64,64,t=>{let n=t.createRadialGradient(32,32,2,32,32,32);n.addColorStop(0,"rgba(255,255,255,.9)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64)}),this.sprites=[],this.next=0;for(let t=0;t<Gd;t++){let n=new la(new nr({map:this.texture,transparent:!0,depthWrite:!1,opacity:0,color:14540253}));n.visible=!1,n.userData={life:0,alpha:0,vx:0,vy:0,vz:0},n.layers.set(Et.VEHICLE),e.add(n),this.sprites.push(n)}}emit(e,t,n,i,s){let a=this.sprites[this.next++%Gd],o=a.userData;a.visible=!0,a.material.color.set(n?15132390:8084795),a.position.set(e,.25,t),o.life=1,o.alpha=i,o.vx=s.vx*.15+Math.random()-.5,o.vy=(n?.8:1.5)+Math.random(),o.vz=s.vz*.15+Math.random()-.5,a.scale.setScalar(n?1:.8)}update(e){for(let t of this.sprites){let n=t.userData;if(n.life<=0){t.visible=!1;continue}n.life-=e*.7,t.position.x+=n.vx*e,t.position.y+=n.vy*e*.5,t.position.z+=n.vz*e,t.scale.setScalar(1+(1-n.life)*4),t.material.opacity=Math.max(0,n.life)*.35*(n.alpha||1)}}};var Cs=[["accel","Acelerar",["KeyW","ArrowUp"]],["brake","Frear / r\xE9",["KeyS","ArrowDown"]],["left","Virar \xE0 esquerda",["KeyA","ArrowLeft"]],["right","Virar \xE0 direita",["KeyD","ArrowRight"]],["run","Correr",["ShiftLeft",""]],["hb","Freio de m\xE3o",["Space",""]],["sigL","Seta esquerda",["KeyQ",""]],["sigR","Seta direita",["KeyE",""]],["hazard","Pisca-alerta",["KeyH",""]],["lights","Far\xF3is",["KeyL",""]],["night","Dia / noite",["KeyN",""]],["cam","Trocar c\xE2mera",["KeyC",""]],["reset","Voltar \xE0 pista",["KeyR",""]],["map","Mapa / GPS",["KeyM",""]],["paint","Trocar pintura",["KeyP",""]],["up","Subir marcha",["ShiftLeft","KeyF"]],["dn","Descer marcha",["ControlLeft","KeyV"]],["man","Manual / autom\xE1tico",["KeyT",""]],["edit","Modo de edi\xE7\xE3o",["KeyX",""]],["acao","Porta / entrar / sair",["KeyG",""]],["partida","Dar partida / desligar",["KeyI",""]],["modo","Modo normal / drift",["KeyB",""]],["diag","Painel de desempenho",["F3",""]]],Kx={ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Space:"Espa\xE7o",ShiftLeft:"Shift",ControlLeft:"Ctrl",AltLeft:"Alt",Enter:"Enter",Tab:"Tab",Backquote:"`",Minus:"-",Equal:"=",Comma:",",Period:".",Slash:"/",Semicolon:";",BracketLeft:"[",BracketRight:"]",Backslash:"\\"},Jx=["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab","F3"],Wd=r=>r==="ShiftRight"?"ShiftLeft":r==="ControlRight"?"ControlLeft":r,eo=class{constructor(){this.down={},this.defaults=Object.fromEntries(Cs.map(t=>[t[0],t[2]])),this.bindings=Object.fromEntries(Cs.map(t=>[t[0],t[2].slice()]));let e=jn.get(Yn.bindings,null);if(e)for(let t in this.defaults)Array.isArray(e[t])&&e[t].length===2&&(this.bindings[t]=e[t].map(String));this.handlers={},this.interceptor=null,this.onEscape=null,this.isPlaying=()=>!1,this.releaseAll=this.releaseAll.bind(this),addEventListener("keydown",this.#e),addEventListener("keyup",this.#t),addEventListener("blur",this.releaseAll)}isDown(e){return this.bindings[e].some(t=>t&&this.down[t])||!!this.down["@"+e]}on(e,t){this.handlers[e]=t}releaseAll(){for(let e in this.down)this.down[e]=0}bindHoldButton(e,t){let n="@"+t;e.addEventListener("pointerdown",i=>{this.down[n]=1,i.preventDefault()});for(let i of["pointerup","pointerleave","pointercancel"])e.addEventListener(i,()=>{this.down[n]=0})}keyName(e){return e?Kx[e]||e.replace(/^Key|^Digit/,"").replace(/^Numpad/,"Num "):"\u2014"}label(e){return this.keyName(this.bindings[e].find(t=>t)||"")}rebind(e,t,n){let i="";if(n==="Delete"||n==="Backspace")this.bindings[e][t]="";else{for(let[s,a]of Cs)this.bindings[s].forEach((o,c)=>{o===n&&!(s===e&&c===t)&&(this.bindings[s][c]="",s!==e&&(i=this.keyName(n)+" foi movida de \u201C"+a+"\u201D."))});this.bindings[e][t]=n}return this.save(),i}resetBindings(){for(let[e,,t]of Cs)this.bindings[e]=t.slice();this.save()}save(){jn.set(Yn.bindings,this.bindings)}#e=e=>{let t=Wd(e.code);if(this.interceptor&&this.interceptor(t,e))return;if(t==="Escape"){e.repeat||this.onEscape?.();return}this.down[t]=1;let n=this.isPlaying();if(n&&!e.repeat)for(let i in this.handlers)this.bindings[i].includes(t)&&this.handlers[i]();n&&Jx.includes(t)&&e.preventDefault()};#t=e=>{this.down[Wd(e.code)]=0};dispose(){removeEventListener("keydown",this.#e),removeEventListener("keyup",this.#t),removeEventListener("blur",this.releaseAll)}};var to=class{constructor(e=.7){this.volume=e,this.ctx=null}init(){if(!this.ctx)try{let e=this.ctx=new(window.AudioContext||window.webkitAudioContext);e.resume?.(),this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(e.destination);let t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=900,this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineOscA=e.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscB=e.createOscillator(),this.engineOscB.type="square",this.engineOscA.connect(t),this.engineOscB.connect(t),t.connect(this.engineGain),this.engineGain.connect(this.master),this.engineOscA.start(),this.engineOscB.start();let n=e.createBuffer(1,e.sampleRate,e.sampleRate),i=n.getChannelData(0);for(let o=0;o<i.length;o++)i[o]=Math.random()*2-1;let s=e.createBufferSource();s.buffer=n,s.loop=!0;let a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=1800,a.Q.value=2,this.tireGain=e.createGain(),this.tireGain.gain.value=0,s.connect(a),a.connect(this.tireGain),this.tireGain.connect(this.master),s.start()}catch{this.ctx=null}}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}suspend(){this.ctx?.suspend?.()}resume(){this.ctx?.resume?.()}update({engineLevel:e,throttle:t,engineOn:n,skid:i,sound:s}){if(!this.ctx)return;let a=this.ctx.currentTime,o=s.baseFrequency+e*s.frequencyRange,c=n?.05+t*.06:0,l=Math.min(i/6,1)*.06,h=this.lastTargets||(this.lastTargets={f:-1,engine:-1,tire:-1});Math.abs(o-h.f)>.05&&(this.engineOscA.frequency.setTargetAtTime(o,a,.05),this.engineOscB.frequency.setTargetAtTime(o*.5,a,.05),h.f=o),Math.abs(c-h.engine)>1e-4&&(this.engineGain.gain.setTargetAtTime(c,a,.08),h.engine=c),Math.abs(l-h.tire)>1e-4&&(this.tireGain.gain.setTargetAtTime(l,a,.05),h.tire=l)}playBlink(e){if(!this.ctx)return;let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.value=e?1500:1100,n.gain.value=.03,t.connect(n),n.connect(this.master||this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.025)}playStarter(){let e=this.ctx;if(!e)return;e.state==="suspended"&&e.resume();let t=e.currentTime,n=.95,i=e.createGain();i.gain.value=1,i.connect(this.master||e.destination);let s=e.createOscillator(),a=e.createBiquadFilter(),o=e.createGain();s.type="sawtooth",s.frequency.setValueAtTime(95,t),s.frequency.linearRampToValueAtTime(140,t+n),a.type="lowpass",a.frequency.value=1400,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.2,t+.05),o.gain.setValueAtTime(.2,t+n-.12),o.gain.linearRampToValueAtTime(0,t+n);let c=e.createOscillator(),l=e.createGain();c.type="square",c.frequency.value=10.5,l.gain.value=.09,c.connect(l),l.connect(o.gain),s.connect(a),a.connect(o),o.connect(i);let h=e.createBuffer(1,Math.ceil(e.sampleRate*n),e.sampleRate),u=h.getChannelData(0);for(let m=0;m<u.length;m++)u[m]=Math.random()*2-1;let d=e.createBufferSource(),f=e.createBiquadFilter(),g=e.createGain();d.buffer=h,f.type="bandpass",f.frequency.value=1500,f.Q.value=1.1,g.gain.setValueAtTime(.12,t),g.gain.linearRampToValueAtTime(0,t+n),l.connect(g.gain),d.connect(f),f.connect(g),g.connect(i);let b=t+n+.05;s.start(t),c.start(t),d.start(t),s.stop(b),c.stop(b),d.stop(b),s.onended=()=>i.disconnect()}dispose(){this.ctx?.close(),this.ctx=null}};var mn=class{static vehicleVsObstacles(e,t){t.forEachObstacleNear(e.x,e.z,n=>{let i=e.x-n[0],s=e.z-n[1],a=i*i+s*s,o=n[2]+1;if(a>=o*o)return;let c=Math.sqrt(a)||.01,l=i/c,h=s/c;e.x=n[0]+l*o,e.z=n[1]+h*o;let u=e.vx*l+e.vz*h;u<0&&(e.vx=(e.vx-1.3*u*l)*.8,e.vz=(e.vz-1.3*u*h)*.8,e.r*=.6)})}static circleVsObstacles(e,t,n){n.forEachObstacleNear(e.x,e.z,i=>{let s=e.x-i[0],a=e.z-i[1],o=i[2]+t,c=Math.hypot(s,a);c<o&&c>1e-4&&(e.x=i[0]+s/c*o,e.z=i[1]+a/c*o)})}static circleVsVehicle(e,t,n,i){let s=Math.cos(n.h),a=Math.sin(n.h),o=e.x-n.x,c=e.z-n.z,l=o*s-c*a,h=o*a+c*s,[u,d]=i;if(Math.abs(l)>u+t||Math.abs(h)>d+t)return;let f=Math.max(-u,Math.min(u,l)),g=Math.max(-d,Math.min(d,h)),b=l-f,m=h-g,p,_=Math.hypot(b,m);if(_>1e-4){if(_>=t)return;b/=_,m/=_,p=t-_}else{let v=u-Math.abs(l),x=d-Math.abs(h);v<x?(b=Math.sign(l)||1,m=0,p=v+t):(b=0,m=Math.sign(h)||1,p=x+t)}e.x+=(b*s+m*a)*p,e.z+=(-b*a+m*s)*p}};var qd=(r,e,t)=>-r*Math.tanh(e*t),no={onRoad:!0,distance:0},io=class{static step(e,t,n,i){let s=e.state,a=e.physics,o=e.driftMode,c=a.mass,l=a.wheelbase,h=a.cgToFront,u=a.cgToRear,d=a.wheelRadius,f=a.gearRatios,g=c*Es*u/l,b=c*Es*h/l,m=a.cgHeight||.52,p=a.trackWidth||1.45,_=(Ee,ct)=>Math.abs(ct)/d*Math.abs(f[Ee+1])*9.549,v=t.accel,x=t.brake,R=t.handbrake;e.steerInput+=(t.steer-e.steerInput)*Math.min(1,i*(t.steer?6:10)),e.shiftTimer=Math.max(0,e.shiftTimer-i),e.autoShiftTimer=Math.max(0,e.autoShiftTimer-i);let A=Math.sin(s.h),T=Math.cos(s.h),C=s.vx*A+s.vz*T,S=s.vx*T-s.vz*A,y=s.r,P=Math.hypot(C,S);n.surfaceUnder(s,no);let F=no.onRoad?1.15:.7,k=C>=0?1:-1,G=Math.abs(C),Y=Math.min(1,P/1.5),W=Math.min(1,G/.5),$=R?1:0;if(!e.manual&&(e.gear<1&&v&&C>-1.5?e.setGear(1):x&&!v&&C<1.5&&e.gear!==-1&&e.setGear(-1),e.gear>=1&&e.autoShiftTimer<=0)){let Ee=_(e.gear,P);e.gear<5&&Ee>6300?(e.setGear(e.gear+1),e.autoShiftTimer=.5):e.gear>1&&(Ee<2e3||v&&Ee<3200&&_(e.gear-1,P)<6e3)&&(e.setGear(e.gear-1),e.autoShiftTimer=.5)}let z=0,ne=0;e.manual?(z=v?1:0,ne=x?1:0):e.gear===-1?(z=x?1:0,ne=v&&C<-1?1:0):(z=v?1:0,ne=x?1:0,v&&C<-1&&(z=0,ne=1));let ue=Math.max(G,1.5),ye=Math.min(.6,.17+28/(P*P+30)),De=Je(e.steerInput*ye*(R?.65:1),-.55,.55);s.steer=De;let Ze=Je(c*s.ax*m/l,-.35*c*Es,.35*c*Es),j=Math.max(g*.15,g-Ze),ee=Math.max(b*.15,b+Ze),ae=1-.22*Je(Math.abs(s.ay)*m/(p*Es),0,.45),we=f[e.gear+1],Pe=_(e.gear,C),Ne=e.gear===0?900+z*6100:Math.max(Pe,900+z*2600),ft=Je((7200-Ne)/400,0,1),qe=Math.max(.25,1-((Ne-4800)/4200)**2),$e=we===0||e.shiftTimer>0?0:Math.sign(we)*a.maxTorque*qe*z*Math.abs(we)*.9/d*ft;if(e.gear===-1&&($e*=.6,C<-12&&($e=0)),s.tc=!1,!o&&$e>0&&!R){let Ee=Math.sqrt(Math.max(0,(1.2*F*ee)**2-(s.fyRear||0)**2)),ct=s.escCut||1,St=Math.abs(s.slipAngleRear||0);St>.12&&(ct*=Je(1-(St-.12)/.1,.25,1));let je=Math.min($e*ct,Math.max(Ee,350));je<$e-1&&(s.tc=!0),$e=je}let O=we===0?0:-k*W*((1-z)*(150+Pe*.12)+Math.max(0,Pe-7200)*1.5);e.rpm+=(Ne-e.rpm)*Math.min(1,i*10);let Ht=-k*W*(150+.42*C*C+(no.onRoad?0:900)),ze=-k*W*ne*11e3,Be=1.3*F*j,Me=1.3*F*ee,Qe=Je(ze*.6,-.9*Be,.9*Be),Se=Je($e+ze*.4-k*W*$*1500,-.9*Me,.9*Me),E=F*j*ae*Math.sqrt(Math.max(0,1-(Qe/Be)**2)),M=1-z*(o?.2:.08),B=F*ee*ae*Math.sqrt(Math.max(0,1-(Se/Me)**2))*($?o?.58:.72:1)*M,K=Math.atan((S+h*y)/ue)-k*De,Z=Math.atan((S-u*y)/ue),X=Math.min(1,i*Math.max(8,P/.35));s.slipAngleFront+=(K-s.slipAngleFront)*X,s.slipAngleRear+=(Z-s.slipAngleRear)*X;let ge=s.slipAngleFront,oe=s.slipAngleRear,he=qd(E,o?7:8,ge)*Y,He=qd(B,o?3.8:6.5,oe)*Y,Q=Math.cos(De),de=Math.sin(De),Ae=(Qe*Q-he*de+Se+Ht+O)/c,Te=(he*Q+Qe*de+He)/c,fe=C+Ae*i,Ve=S+Te*i,Le=Math.cos(y*i),nt=Math.sin(y*i);y+=(h*(he*Q+Qe*de)-u*He)/a.yawInertia*i,C=fe*Le+Ve*nt,S=Ve*Le-fe*nt,s.fyRear=He,s.esc=!1,s.escCut=1,y*=Math.exp(-.08*i);let L=$&&z?0:Math.max(0,1-P/2.5);S*=Math.exp(-8*L*i),y*=Math.exp(-6*L*i),!z&&!ne&&P<.3&&(C*=Math.exp(-4*i),S*=Math.exp(-4*i)),y=Je(y,-7,7),s.r=y,s.h+=y*i;let se=Math.sin(s.h),q=Math.cos(s.h);s.vx=se*C+q*S,s.vz=q*C-se*S,s.x+=s.vx*i,s.z+=s.vz*i,mn.vehicleVsObstacles(s,n),n.collideVehicle(s,no),s.ax=Ae,s.ay=Te,s.vf=C,s.pitch+=(Je(-Ae*.004,-.05,.05)-s.pitch)*Math.min(1,i*6),s.roll+=(Je(Te*.0025,-.07,.07)-s.roll)*Math.min(1,i*6),e.throttle=z,s.brake=!!x,s.reverse=C<-.5;let J=Ee=>Je((Math.abs(Ee)-.13)/.14,0,1)*Y,ce=J(K),ie=J(Z);$&&P>2&&(ie=1),z>0&&Math.abs($e)>.88*Me&&G<14&&(ie=Math.max(ie,.6)),ne&&G>18&&(ce=Math.max(ce,.35),ie=Math.max(ie,.5)),s.slipFront=ce,s.slipRear=ie,n.updateProgress(s),e.engineSound=.25+.75*Je(e.rpm/7e3,0,1.05)}};var rt={chevette:{name:"Chevette SL",model:"assets/models/vehicles/chevette/chevette.glb",paintMaterial:"Pintura_Branca",colors:["#e7e7e3","#c4161c","#1f4fb5","#f2b705","#1b1b1d","#2e8b57"],customizableParts:[{objectName:"Capo",name:"Cap\xF4",materialName:"Pintura_Branca",originalColor:"#e7e7e3",categories:["paint"]},{objectName:"Cabine",name:"Teto e cabine",materialName:"Pintura_Branca",originalColor:"#e7e7e3",categories:["paint"]},{objectName:"Carroceria",name:"Carroceria",materialName:"Pintura_Branca",originalColor:"#e7e7e3",categories:["paint"]},{objectName:"Porta_Esquerda",name:"Porta do motorista",materialName:"Pintura_Branca",originalColor:"#e7e7e3",categories:["paint"]},{objectName:"Porta_Direita",name:"Porta do passageiro",materialName:"Pintura_Branca",originalColor:"#e7e7e3",categories:["paint"]},{objectName:"Paralama_Ponta_Esquerda",name:"Para-lama dianteiro esquerdo",materialName:"Pintura_Branca",originalColor:"#e7e7e3",categories:["paint"]},{objectName:"Paralama_Ponta_Direita",name:"Para-lama dianteiro direito",materialName:"Pintura_Branca",originalColor:"#e7e7e3",categories:["paint"]},{objectName:"Tampa_Porta_Malas",name:"Tampa do porta-malas",materialName:"Pintura_Branca",originalColor:"#e7e7e3",categories:["paint"]},{objectName:"Saia_Dianteira",name:"Saia dianteira",materialName:"Pintura_Branca",originalColor:"#e7e7e3",categories:["paint"]},{objectName:"Para_Choque_Dianteiro",name:"Para-choque dianteiro",materialName:"Borracha_Preta",originalColor:"#242424",categories:["trim"]},{objectName:"Para_Choque_Traseiro",name:"Para-choque traseiro",materialName:"Borracha_Preta",originalColor:"#242424",categories:["trim"]}],wheels:{fl:"Roda_Dianteira_Esquerda",fr:"Roda_Dianteira_Direita",rl:"Roda_Traseira_Esquerda",rr:"Roda_Traseira_Direita"},steeringWheel:"Volante",door:{hinge:[.765,0,.862],openAngle:-1.12,interactionAction:"toggleDoor",standPoint:[1.3,.15],parts:["Porta_Esquerda","Vidro_Porta_Esquerdo","Vidro_Quebra_Vento_Esquerdo","Borracha_Janela_Porta_Esquerdo_mesh","Divisor_Quebra_Vento_Esquerdo_mesh","Macaneta_Esquerda","Macaneta_Esquerda_Base","Friso_Porta_Esquerdo","Forro_Porta_Esquerdo","Forro_Porta_Esquerdo_Tecido","Apoio_Braco_Esquerdo","Retrovisor_Esquerdo_Base","Retrovisor_Esquerdo_Carcaca","Retrovisor_Esquerdo_Espelho","Emblema_Lateral_Esquerdo_mesh"]},lights:{head:"Lente_Farol",tail:"Lente_Vermelha",reverse:"Lente_Re_Branca",indicator:"Lente_Ambar",headlightOffset:[.5,.62,1.9]},cockpitCamera:[.37,1.13,-.24],driverSeat:{position:[.37,-.36,-.12],tilt:-.2,scale:.92},bodyHalfSize:[.82,2.12],tireContacts:[[.655,1.385,0],[-.655,1.385,0],[.685,-1.005,1],[-.685,-1.005,1]],physics:{mass:1e3,yawInertia:1300,wheelbase:2.39,cgToFront:1.15,cgToRear:1.24,cgHeight:.52,trackWidth:1.42,wheelRadius:.289,gearRatios:[-9.5,0,12.5,7.6,5.2,3.9,3.1],maxTorque:170,idleRpm:900,redlineRpm:7200},sound:{baseFrequency:38,frequencyRange:120},suspension:{maxDrop:.09}},saveiro:{name:"Saveiro Robust",model:"assets/models/vehicles/saveiro/saveiro.glb",paintMaterial:"Pintura_Branca",colors:["#e9e9e6","#b01522","#a7abae","#151618","#6b6e72","#1f4fb5"],customizableParts:[{objectName:"Capo",name:"Cap\xF4",materialName:"Pintura_Branca",originalColor:"#e9e9e6",categories:["paint"]},{objectName:"Cabine",name:"Teto e cabine",materialName:"Pintura_Branca",originalColor:"#e9e9e6",categories:["paint"]},{objectName:"Carroceria",name:"Carroceria e ca\xE7amba",materialName:"Pintura_Branca",originalColor:"#e9e9e6",categories:["paint"]},{objectName:"Porta_Esquerda",name:"Porta do motorista",materialName:"Pintura_Branca",originalColor:"#e9e9e6",categories:["paint"]},{objectName:"Porta_Direita",name:"Porta do passageiro",materialName:"Pintura_Branca",originalColor:"#e9e9e6",categories:["paint"]},{objectName:"Tampa_Cacamba",name:"Tampa da ca\xE7amba",materialName:"Pintura_Branca",originalColor:"#e9e9e6",categories:["paint"]},{objectName:"Para_Choque_Dianteiro",name:"Para-choque dianteiro",materialName:"Pintura_Branca",originalColor:"#e9e9e6",categories:["paint"]},{objectName:"Para_Choque_Traseiro",name:"Para-choque traseiro",materialName:"Pintura_Branca",originalColor:"#e9e9e6",categories:["paint"]},{objectName:"Retrovisor_Esquerdo_Carcaca",name:"Retrovisor esquerdo",materialName:"Pintura_Branca",originalColor:"#e9e9e6",categories:["paint"]},{objectName:"Retrovisor_Direito_Carcaca",name:"Retrovisor direito",materialName:"Pintura_Branca",originalColor:"#e9e9e6",categories:["paint"]}],wheels:{fl:"Roda_Dianteira_Esquerda",fr:"Roda_Dianteira_Direita",rl:"Roda_Traseira_Esquerda",rr:"Roda_Traseira_Direita"},steeringWheel:"Volante",door:{hinge:[.85,0,.766],openAngle:-1.12,interactionAction:"toggleDoor",standPoint:[1.35,.2],parts:["Porta_Esquerda","Vidro_Porta_Esquerda","Macaneta_Esquerdo","Friso_Janela_Esquerdo","Retrovisor_Esquerdo_Base","Retrovisor_Esquerdo_Carcaca","Retrovisor_Esquerdo_Espelho","Forro_Porta_Esquerda_Apoio","Forro_Porta_Esquerda_Macaneta"]},lights:{head:"Lente_Farol",tail:"Lente_Vermelha",reverse:"Lente_Re_Branca",indicator:"Lente_Ambar",headlightOffset:[.55,.79,2.12]},cockpitCamera:[.37,1.24,-.29],driverSeat:{position:[.37,-.28,-.152],tilt:-.12,scale:.92},bodyHalfSize:[.86,2.25],tireContacts:[[.715,1.4465,0],[-.715,1.4465,0],[.71,-1.3035,1],[-.71,-1.3035,1]],physics:{mass:1130,yawInertia:1700,wheelbase:2.75,cgToFront:1.12,cgToRear:1.63,cgHeight:.62,trackWidth:1.48,wheelRadius:.3,gearRatios:[-10.6,0,13.4,8.1,5.5,4.1,3.25],maxTorque:180,idleRpm:850,redlineRpm:6500},sound:{baseFrequency:34,frequencyRange:112},suspension:{maxDrop:.17}}};var Xd=["position","normal","uv"],Zx=new I(0,1,0),$x=new xt,Qx=new I,Ps=class{constructor(e,t,{remote:n=!1}={}){this.config=t,this.remote=n,this.root=new lt,this.model=e.scene.clone(!0),this.ownedGeometries=new Set;let i=new Map;this.model.traverse(s=>{s.isMesh&&(s.material=Array.isArray(s.material)?s.material.map(a=>i.get(a)||i.set(a,a.clone()).get(a)):i.get(s.material)||i.set(s.material,s.material.clone()).get(s.material))}),this.root.add(this.model),this.#e(),this.#t(),this.#n(),this.#i(),this.root.traverse(s=>s.layers.set(Et.VEHICLE));for(let s of this.headlights)s.layers.enable(Et.WORLD);this.doorAngle=0,this.doorTarget=0,this.wheelSpin=0,this.steeringAngle=0,this.steeringVelocity=0}#e(){let e=this.model,t=this.config;this.wheels={};for(let[n,i]of Object.entries(t.wheels)){let s=e.getObjectByName(i),a=new lt;a.position.copy(s.position),a.userData.baseY=s.position.y,s.position.set(0,0,0),e.add(a),a.add(s),this.wheels[n]={pivot:a,wheel:s,front:n[0]==="f"}}this.steeringWheel=e.getObjectByName(t.steeringWheel),this.steeringRest=this.steeringWheel.quaternion.clone(),e.updateMatrixWorld(!0),this.door=new lt,this.door.position.fromArray(t.door.hinge),e.add(this.door),e.updateMatrixWorld(!0);for(let n of t.door.parts){let i=e.getObjectByName(n);i&&this.door.attach(i)}this.door.traverse(n=>{n.userData.vehicleInteraction=t.door.interactionAction}),this.door.traverse(n=>{n.isMesh&&(n.castShadow=n.receiveShadow=!0,n.material&&/Vidro/.test(n.material.name)&&(n.renderOrder=2))}),e.updateMatrixWorld(!0),this.movingParts=new Set([this.steeringWheel,this.door,...Object.values(this.wheels).map(n=>n.pivot)])}#t(){let e=new Map((this.config.customizableParts||[]).map(n=>[n.objectName,n])),t=new Set;this.customizableParts=[],this.paintMaterials=[],this.model.traverse(n=>{let i=e.get(n.name);if(!i)return;t.add(i.objectName);let s=[];n.isMesh?s.push(n):n.traverse(h=>{h.isMesh&&s.push(h)});let a=[],o=[],c=[];for(let h of s){let d=(Array.isArray(h.material)?h.material:[h.material]).map(f=>f.clone());c.push([h,d]),a.push(...d),o.push(...d.filter(f=>f.name===i.materialName))}if(!o.length){console.warn(`A pe\xE7a "${i.objectName}" n\xE3o possui o material "${i.materialName}".`),a.forEach(h=>h.dispose());return}for(let[h,u]of c)h.material=Array.isArray(h.material)?u:u[0];let l={...i,object:n,meshes:s,materials:a,paintMaterials:o,originalColor:i.originalColor||"#"+o[0].color.getHexString()};n.userData.customizablePart=l;for(let h of s)h.userData.customizablePart=l;this.customizableParts.push(l),i.materialName===this.config.paintMaterial&&this.paintMaterials.push(...o)});for(let n of e.values())t.has(n.objectName)||console.warn(`Pe\xE7a personaliz\xE1vel n\xE3o encontrada no modelo: "${n.objectName}".`)}#n(){let e=this.model,t=this.config.lights,n=o=>{for(;o;o=o.parent)if(this.movingParts.has(o))return!0;return!1},i=new Map,s=[],a={};e.traverse(o=>{if(!o.isMesh||n(o)||o.userData.customizablePart)return;let c=e_(o.geometry);c.applyMatrix4(o.matrixWorld),o.matrixWorld.determinant()<0&&t_(c);let l=o.material;if(l.name===t.indicator){c.computeBoundingBox();let h=c.boundingBox.getCenter(Qx).x>0?"L":"R";l=a[h]||(a[h]=l.clone())}i.has(l)||i.set(l,[]),i.get(l).push(c),s.push(o)}),s.forEach(o=>o.removeFromParent()),this.materials={indicators:a};for(let[o,c]of i){let l=new Fe(Td(c,!1),o);this.ownedGeometries.add(l.geometry),c.forEach(u=>u.dispose()),l.castShadow=l.receiveShadow=!0,e.add(l);let h=o.name;/Vidro/.test(h)&&(Object.assign(o,{transparent:!0,opacity:.3,depthWrite:!1,side:Mt,roughness:.04,metalness:.2}),o.color.set(726560),l.renderOrder=2),h===t.tail&&(o.emissive=new pe(16718352),o.emissiveIntensity=.15,this.materials.tail=o),h===t.reverse&&(o.emissive=new pe(16777215),o.emissiveIntensity=0,this.materials.reverse=o),h===t.head&&(o.emissive=new pe(16773846),o.emissiveIntensity=.05,this.materials.head=o),h===t.indicator&&(o.emissive=new pe(16742912),o.emissiveIntensity=0),h===this.config.paintMaterial&&(this.materials.paint=o)}this.materials.paint&&this.paintMaterials.push(this.materials.paint)}#i(){let[e,t,n]=this.config.lights.headlightOffset;this.headlights=[];for(let i of[-1,1]){let s=new Ms(16773846,0,70,.5,.7,2);s.userData.side=i,s.position.set(i*e,t,n),this.model.add(s,s.target),this.headlights.push(s)}}setRideHeight(e){let t=this.config.suspension?.maxDrop??0;this.rideDrop=Math.min(Math.max(e,0),t),this.model.position.y=-this.rideDrop;for(let n of Object.values(this.wheels))n.pivot.position.y=n.pivot.userData.baseY+this.rideDrop;this.root.updateMatrixWorld(!0)}setColor(e){for(let t of this.paintMaterials)t.color.set(e)}applyLook(e){let t=e?.colors||{};for(let n of this.customizableParts){let i=t[n.objectName]||n.originalColor;for(let s of n.paintMaterials)s.color.set(i)}this.setRideHeight((e?.lowering||0)*(this.config.suspension?.maxDrop??0))}partColor(e){let t=this.customizableParts.find(n=>n.objectName===e);return t?"#"+t.paintMaterials[0].color.getHexString():null}update(e,t){let n=t.state;this.doorAngle+=(this.doorTarget-this.doorAngle)*Math.min(1,e*5),this.door.rotation.y=this.config.door.openAngle*this.doorAngle,this.root.position.set(n.x,0,n.z),this.root.rotation.y=n.h,this.model.rotation.set(n.pitch,0,n.roll),this.wheelSpin+=n.vf*e/this.config.physics.wheelRadius;for(let l of Object.values(this.wheels))l.wheel.rotation.x=this.wheelSpin,l.front&&(l.pivot.rotation.y=-n.steer*1.2);let i=-n.steer/.45*2.8,s=.02;for(let l=0;l<e;l+=s)this.steeringVelocity+=((i-this.steeringAngle)*140-this.steeringVelocity*15)*s,this.steeringAngle+=this.steeringVelocity*s;this.steeringWheel.quaternion.copy(this.steeringRest).multiply($x.setFromAxisAngle(Zx,this.steeringAngle));let a=t.lightsMode,o=a===2,c=this.materials;c.tail.emissiveIntensity=n.brake?3:a?.7:.15,c.head.emissiveIntensity=[.05,2.5,4][a];for(let l of this.headlights){if(this.remote){l.visible=!1;continue}let h=l.userData.side;l.intensity+=([0,3e3,7e3][a]-l.intensity)*Math.min(1,e*12),l.visible=a>0||l.intensity>1,l.angle=o?.33:.5,l.distance=o?140:70,l.target.position.set(h*(o?.35:.5),o?.5:0,o?45:14)}c.reverse.emissiveIntensity=n.reverse?2:0,c.indicators.L&&(c.indicators.L.emissiveIntensity=t.indicatorLeftOn?4:0),c.indicators.R&&(c.indicators.R.emissiveIntensity=t.indicatorRightOn?4:0),this.root.updateMatrixWorld(!0)}dispose(){let e=new Set;this.root.traverse(t=>{if(t.material)for(let n of[].concat(t.material))e.add(n)});for(let t of e)t.dispose();for(let t of this.ownedGeometries)t.dispose();this.root.removeFromParent()}};function e_(r){let e=r.clone();for(let t of Object.keys(e.attributes))Xd.includes(t)||e.deleteAttribute(t);for(let t of Xd){let n=e.getAttribute(t);if(!n||n.array instanceof Float32Array&&!n.normalized&&!n.isInterleavedBufferAttribute)continue;let i=n.itemSize,s=new Float32Array(n.count*i);for(let a=0;a<n.count;a++)s[a*i]=n.getX(a),i>1&&(s[a*i+1]=n.getY(a)),i>2&&(s[a*i+2]=n.getZ(a)),i>3&&(s[a*i+3]=n.getW(a));e.setAttribute(t,new ot(s,i))}return e.attributes.uv||e.setAttribute("uv",new Xe(new Float32Array(e.attributes.position.count*2),2)),e.index||e.setIndex([...Array(e.attributes.position.count).keys()]),e}function t_(r){let e=r.index.array.slice();for(let t=0;t<e.length;t+=3){let n=e[t];e[t]=e[t+2],e[t+2]=n}r.setIndex(Array.from(e))}var so=class{constructor(e){this.config=e,this.physics=e.physics,this.state={x:0,z:0,h:0,vx:0,vz:0,r:0,vf:0,ax:0,ay:0,steer:0,pitch:0,roll:0,slipFront:0,slipRear:0,brake:!1,reverse:!1,tc:!1,esc:!1,escCut:1,fyRear:0,slipAngleFront:0,slipAngleRear:0},this.gear=1,this.manual=!1,this.rpm=900,this.throttle=0,this.engineSound=.25,this.steerInput=0,this.shiftTimer=0,this.autoShiftTimer=0,this.engineOn=!1,this.startTimer=0,this.driftMode=!1,this.lightsMode=0,this.indicators=0,this.blinkTime=0,this.blinkOn=!1,this.onMessage=null,this.onBlink=null,this.onEngineStart=null}get speedMs(){return Math.hypot(this.state.vx,this.state.vz)}get indicatorLeftOn(){return this.blinkOn&&(this.indicators&1)!==0}get indicatorRightOn(){return this.blinkOn&&(this.indicators&2)!==0}resetMotion(){let e=this.state;e.vx=e.vz=e.steer=e.vf=e.r=e.ax=e.ay=0,this.gear=1,this.shiftTimer=0,this.rpm=900}setGear(e){e!==this.gear&&(this.gear=e,this.shiftTimer=.15)}#e(){this.manual||(this.manual=!0,this.onMessage?.("C\xE2mbio manual (T volta ao autom\xE1tico)",2))}shiftUp(){this.#e(),this.gear<5&&this.setGear(this.gear+1)}shiftDown(){if(this.#e(),this.gear===0&&Math.abs(this.state.vf)>3){this.onMessage?.("Pare o carro para engatar a r\xE9",1.5);return}this.gear>-1&&this.setGear(this.gear-1)}toggleGearbox(){this.manual=!this.manual,this.onMessage?.(this.manual?"C\xE2mbio manual":"C\xE2mbio autom\xE1tico",1.8)}toggleIgnition(){return this.engineOn?(this.engineOn=!1,this.onMessage?.("Motor desligado",1.2),!1):this.startTimer>0?!1:(this.startTimer=.9,this.setGear(0),!0)}stopEngine(){this.engineOn=!1,this.startTimer=0}updateEngine(e){this.startTimer>0&&(this.startTimer-=e)<=0&&(this.engineOn=!0,this.rpm=2600,this.onMessage?.("Motor ligado",1.2),this.onEngineStart?.()),this.engineOn||(this.rpm=this.startTimer>0?250+Math.random()*120:0)}cycleLights(){this.lightsMode=(this.lightsMode+1)%3}toggleIndicator(e){this.indicators=this.indicators===e?0:e,this.blinkTime=0}updateIndicators(e){this.blinkTime+=e;let t=this.indicators>0&&this.blinkTime%.66<.33;t!==this.blinkOn&&(this.blinkOn=t,this.indicators&&this.onBlink?.(t))}setDriftMode(e){this.driftMode=e,this.state.slipAngleFront=this.state.slipAngleRear=0}};var ro=class{constructor(e,t){this.scene=e,this.assets=t,this.id=null,this.vehicle=null,this.controller=null,this.modelUsers=new Map}async acquireModel(e){let t=rt[e];if(!t)throw new Error(`Ve\xEDculo desconhecido: ${e}`);let n=await this.assets.loadGLTF(t.model);return this.modelUsers.set(e,(this.modelUsers.get(e)||0)+1),n}releaseModel(e){let t=(this.modelUsers.get(e)||0)-1;if(t>0)return void this.modelUsers.set(e,t);this.modelUsers.delete(e),this.assets.release(rt[e].model)}get available(){return Object.entries(rt).map(([e,t])=>({id:e,name:t.name}))}get config(){return rt[this.id]}async spawn(e){if(this.id===e&&this.vehicle)return this.vehicle;let t=rt[e],n=await this.acquireModel(e);return this.despawn(),this.id=e,this.vehicle=new Ps(n,t),this.controller=new so(t),this.scene.add(this.vehicle.root),this.vehicle}despawn(){this.vehicle&&(this.vehicle.dispose(),this.releaseModel(this.id),this.vehicle=this.controller=null,this.id=null)}};var ao=class{constructor(){let e=new st({color:14196858,roughness:.7}),t=new st({color:3108789,roughness:.85}),n=new st({color:2764603,roughness:.9}),i=new st({color:2759698,roughness:.9}),s=new st({color:1381653,roughness:.6}),a=(u,d,f,g,b,m,p)=>{let _=new Fe(new en(u,d,f),g);return _.position.set(b,m,p),_.castShadow=!0,_},o=u=>{let d=new lt;return d.position.set(u*.105,.92,0),d.add(a(.15,.84,.17,n,0,-.42,0),a(.15,.08,.27,s,0,-.88,.05)),d},c=u=>{let d=new lt;return d.position.set(u*.275,1.47,0),d.add(a(.11,.58,.12,t,0,-.29,0),a(.09,.1,.1,e,0,-.63,0)),d},l=new Fe(new li(.125,16,12),e),h=new Fe(new li(.132,16,8,0,Math.PI*2,0,Math.PI*.55),i);l.position.y=1.67,h.position.set(0,1.685,-.008),l.castShadow=!0,this.legL=o(1),this.legR=o(-1),this.armL=c(1),this.armR=c(-1),this.root=new lt,this.root.add(a(.42,.58,.24,t,0,1.2,0),a(.4,.12,.23,n,0,.93,0),a(.08,.08,.08,e,0,1.53,0),l,h,a(.03,.02,.02,i,-.045,1.7,.118),a(.03,.02,.02,i,.045,1.7,.118),this.legL,this.legR,this.armL,this.armR)}sitIn(e,t){e.add(this.root),this.root.position.fromArray(t.position),this.root.rotation.set(t.tilt,0,0),this.root.scale.setScalar(t.scale),this.legL.rotation.x=this.legR.rotation.x=-1.3,this.armL.rotation.x=this.armR.rotation.x=-1.05,this.armL.rotation.z=-.15,this.armR.rotation.z=.15}standIn(e,t,n,i){e.add(this.root),this.root.rotation.set(0,i,0),this.root.scale.setScalar(1),this.root.position.set(t,0,n),this.armL.rotation.z=this.armR.rotation.z=0}animateWalk(e,t,n,i,s){let a=Math.sin(e)*Math.min(.7,Math.abs(t)*.3);this.legL.rotation.x=a,this.legR.rotation.x=-a,this.armL.rotation.x=-a*.8,this.armR.rotation.x=a*.8,this.root.position.set(n,Math.abs(Math.cos(e))*Math.min(.05,Math.abs(t)*.012),i),this.root.rotation.y=s}};var Tt=Object.freeze({walkSpeed:4.4,runSpeed:5.8,acceleration:14,deceleration:16,gravity:20,jumpSpeed:7.2,eyeHeight:1.67,bodyRadius:.32,mouseSensitivity:.0022,pitchLimit:Math.PI/2-.01,bobWalk:.035,bobRun:.055}),oo=class{constructor(e){this.canvas=e,this.enabled=!1,this.yaw=0,this.pitch=0,this.jumpHeld=!1,this.bobPhase=0,this.bobAmount=0,e.addEventListener("click",()=>{this.enabled&&!document.pointerLockElement&&this.canvas.requestPointerLock&&this.canvas.requestPointerLock()?.catch?.(n=>console.warn("N\xE3o foi poss\xEDvel capturar o mouse:",n))})}get pointerLocked(){return document.pointerLockElement===this.canvas}setEnabled(e){this.enabled=e,!e&&this.pointerLocked&&this.exitPointerLock()}exitPointerLock(){this.pointerLocked&&document.exitPointerLock()}bindMouse(){document.removeEventListener("mousemove",this.#e),document.addEventListener("mousemove",this.#e)}#e=e=>{!this.enabled||!this.pointerLocked||(this.yaw-=e.movementX*Tt.mouseSensitivity,this.pitch-=e.movementY*Tt.mouseSensitivity,this.pitch=Je(this.pitch,-Tt.pitchLimit,Tt.pitchLimit))};reset(e){this.yaw=e,this.pitch=0}update(e,t,n,i,s,a){if(!this.enabled){this.jumpHeld=t.isDown("hb");return}let o=(t.isDown("accel")?1:0)-(t.isDown("brake")?1:0),c=(t.isDown("right")?1:0)-(t.isDown("left")?1:0),l=Math.sin(this.yaw),h=Math.cos(this.yaw),u=-Math.cos(this.yaw),d=Math.sin(this.yaw),f=l*o+u*c,g=h*o+d*c,b=Math.hypot(f,g);b>1&&(f/=b,g/=b);let m=t.isDown("run")&&o>0,p=(m?Tt.runSpeed:Tt.walkSpeed)*(o<0?.75:1),_=f*p,v=g*p,x=Math.min(1,e*(b>0?Tt.acceleration:Tt.deceleration));if(a.vx+=(_-a.vx)*x,a.vz+=(v-a.vz)*x,b===0&&Math.hypot(a.vx,a.vz)<.02&&(a.vx=a.vz=0),a.x+=a.vx*e,mn.circleVsVehicle(a,Tt.bodyRadius,i,s.bodyHalfSize),mn.circleVsObstacles(a,Tt.bodyRadius,n),n.collideBody(a),a.z+=a.vz*e,mn.circleVsVehicle(a,Tt.bodyRadius,i,s.bodyHalfSize),mn.circleVsObstacles(a,Tt.bodyRadius,n),n.collideBody(a),n.half){let A=n.half-8;a.x=Je(a.x,-A,A),a.z=Je(a.z,-A,A)}else if(n.distanceToTrack&&n.distanceToTrack(a.x,a.z)>160&&n.points?.[n.index]){let T=n.points[n.index],C=T.x-a.x,S=T.z-a.z,y=Math.hypot(C,S)||1;a.x=T.x-C/y*20,a.z=T.z-S/y*20}a.y??=0,a.vy??=0,t.isDown("hb")&&!this.jumpHeld&&a.grounded&&(a.vy=Tt.jumpSpeed,a.grounded=!1),this.jumpHeld=t.isDown("hb"),a.vy-=Tt.gravity*e,a.y+=a.vy*e,a.y<=0&&(a.y=0,a.vy=0,a.grounded=!0),a.h=this.yaw,a.speed=Math.hypot(a.vx,a.vz),a.speed>.05&&a.grounded?(this.bobPhase+=a.speed*e*(m?1.75:1.35),this.bobAmount+=((m?Tt.bobRun:Tt.bobWalk)-this.bobAmount)*Math.min(1,e*8)):this.bobAmount*=Math.exp(-e*8)}getCameraPosition(e){let t=Math.sin(this.bobPhase)*this.bobAmount,n=this.eye||(this.eye={x:0,y:0,z:0});return n.x=e.x,n.y=e.y+Tt.eyeHeight+t,n.z=e.z,n}resolveSafeSpawnPoint(e,t,n,i,s){let a=[{x:t.x,z:t.z}];for(let o=.55;o<=1.8;o+=.55)for(let c=0;c<16;c++){let l=c*Math.PI/8;a.push({x:t.x+Math.cos(l)*o,z:t.z+Math.sin(l)*o})}for(let o of a){let c={x:o.x,z:o.z,vx:0,vz:0,r:0};if(mn.circleVsVehicle(c,Tt.bodyRadius,i,s.bodyHalfSize),mn.circleVsObstacles(c,Tt.bodyRadius,n),n.collideBody(c),Math.hypot(c.x-o.x,c.z-o.z)<.02){e.x=o.x,e.z=o.z,e.vx=e.vz=e.vy=0,e.y=0,e.grounded=!0;return}}}};var jd=1.8,co=class{constructor(e,t){this.scene=e,this.inVehicle=!0,this.body={x:0,y:0,z:0,h:0,vx:0,vz:0,vy:0,r:0,speed:0,phase:0,grounded:!0},this.character=new ao,this.firstPerson=new oo(t),this.firstPerson.bindMouse(),this.onMessage=null}focus(e){return this.inVehicle?e:this.body}#e(e,t){let[n,i]=t.door.standPoint,s=Math.cos(e.h),a=Math.sin(e.h);return{x:e.x+n*s+i*a,z:e.z-n*a+i*s}}sitIn(e){this.character.sitIn(e.model,e.config.driverSeat)}enter(e,t){this.inVehicle=!0,e.doorTarget=0,t.stopEngine(),this.body.speed=0,this.sitIn(e)}exit(e,t,n){if(t.speedMs>1.2)return this.onMessage?.("Pare o carro para sair",1.5),!1;t.stopEngine(),this.inVehicle=!1,e.doorTarget=1;let i=this.#e(t.state,e.config);return Object.assign(this.body,{x:i.x,z:i.z,h:t.state.h,y:0,vy:0,grounded:!0,speed:0}),this.firstPerson.resolveSafeSpawnPoint(this.body,i,n,t.state,e.config),this.character.standIn(this.scene,this.body.x,this.body.z,this.body.h),!0}actionsKey(e,t){if(this.inVehicle)return 1|(t.startTimer>0?2:0)|(t.engineOn?4:0)|(t.speedMs<1.2?8:0);let n=this.#e(t.state,e.config);return Math.hypot(this.body.x-n.x,this.body.z-n.z)>jd?16:32|(e.doorTarget?64:0)}availableActions(e,t,n){if(this.inVehicle){let s=[];return t.startTimer>0?s.push(["","Dando partida\u2026",""]):s.push(["partida",t.engineOn?"Desligar motor":"Dar partida",n("partida")]),t.speedMs<1.2&&s.push(["sair","Sair do carro",n("acao")]),s}let i=this.#e(t.state,e.config);return Math.hypot(this.body.x-i.x,this.body.z-i.z)>jd?[]:e.doorTarget?[["entrar","Entrar no carro",n("acao")],["fechar","Fechar porta",""]]:[["abrir","Abrir porta",n("acao")]]}update(e,t,n,i,s){this.firstPerson.update(e,t,n,i,s,this.body);let a=this.body;a.phase+=a.speed*e*3.4,this.character.animateWalk(a.phase,a.speed,a.x,a.z,a.h)}setVisible(e){this.character.root.visible=e}};var lo=class{constructor(e){this.canvas=e,this.g=e.getContext("2d"),this.ratio=Math.min(devicePixelRatio,2),e.width=340*this.ratio,e.height=170*this.ratio}#e(e,t,n,i,s,a,o,c,l,h){let u=this.g,d=Math.PI*.75,f=b=>d+Math.PI*1.5*b;u.save(),u.translate(e,t),u.lineWidth=6,u.strokeStyle="rgba(255,255,255,.2)",u.beginPath(),u.arc(0,0,n-5,f(0),f(1)),u.stroke(),c&&(u.strokeStyle="#ff3b30",u.beginPath(),u.arc(0,0,n-5,f(c/s),f(1)),u.stroke()),u.strokeStyle=u.fillStyle="#fff",u.font="600 10px system-ui,sans-serif",u.textAlign="center",u.textBaseline="middle";for(let b=0;b<=s/a;b++){let m=f(b*a/s),p=Math.cos(m),_=Math.sin(m),v=b%o===0;u.lineWidth=v?2:1,u.beginPath(),u.moveTo(p*(n-12),_*(n-12)),u.lineTo(p*(n-(v?20:17)),_*(n-(v?20:17))),u.stroke(),v&&u.fillText(b*a,p*(n-31),_*(n-31))}let g=f(Math.min(i/s,1.04));u.strokeStyle="#ff4d3a",u.lineWidth=3,u.beginPath(),u.moveTo(-Math.cos(g)*8,-Math.sin(g)*8),u.lineTo(Math.cos(g)*(n-14),Math.sin(g)*(n-14)),u.stroke(),u.fillStyle="#ff4d3a",u.beginPath(),u.arc(0,0,5,0,7),u.fill(),u.fillStyle="#fff",u.font="700 16px system-ui,sans-serif",u.fillText(l,0,n*.5),u.font="500 10px system-ui,sans-serif",u.fillText(h,0,n*.5+14),u.restore()}draw(e){let t=this.g,n=e.speedMs*3.6,i=e.rpm,s=e.state;t.setTransform(this.ratio,0,0,this.ratio,0,0),t.clearRect(0,0,340,170),this.#e(80,86,74,i/1e3,8,1,1,7,(i/1e3).toFixed(1),"x1000 rpm"),this.#e(260,86,74,n,240,20,2,0,Math.round(n),"km/h"),t.textAlign="center",t.textBaseline="middle",t.fillStyle="#fff",t.font="700 40px system-ui,sans-serif",t.fillText(e.gear<0?"R":e.gear===0?"N":e.gear,170,78),t.font="600 11px system-ui,sans-serif",t.fillStyle=e.manual?"#ffb020":"#9fe870",t.fillText(e.manual?"MANUAL":"AUTO",170,106),(s.esc||s.tc)&&(t.fillStyle="#ffb020",t.font="700 11px system-ui,sans-serif",t.fillText(s.esc?"ESC":"TC",170,124)),t.fillStyle=e.driftMode?"#ff6b4a":"#8fd3ff",t.font="600 10px system-ui,sans-serif",t.fillText(e.driftMode?"DRIFT":"NORMAL",170,142),i>6400&&Math.floor(performance.now()/90)%2&&(t.fillStyle="#ff3b30",t.beginPath(),t.arc(170,30,8,0,7),t.fill())}};var ho=class{constructor(){this.root=D("hud"),this.gauges=new lo(D("gg")),this.minimap=D("mini"),this.minimapCtx=this.minimap.getContext("2d"),this.messageTimer=0,this.actionsSignature="",this.onAction=null,D("acao").addEventListener("pointerdown",e=>{let t=e.target.closest("button");t&&t.dataset.acao&&(e.preventDefault(),this.onAction?.(t.dataset.acao))})}show(){this.root.style.display="block"}hide(){this.root.style.display="none",D("drift").hidden=!0,D("hud-coins").hidden=!0}setDrift(e){if(this.driftHold>0)return;let t=this.driftEl??={root:D("drift"),points:D("drift-points"),combo:D("drift-combo"),bar:D("drift-bar")};if(!e.active){t.root.hidden||(t.root.hidden=!0);return}t.root.hidden&&(t.root.hidden=!1,t.root.classList.remove("fail","banked"));let n=Math.round(e.points);n!==this.driftShown&&(t.points.textContent=(this.driftShown=n).toLocaleString("pt-BR"));let i="x"+e.combo.toFixed(1).replace(".0","");i!==this.comboShown&&(t.combo.textContent=this.comboShown=i),t.bar.style.width=Math.round(e.comboProgress*100)+"%"}#e(e,t){let n=D("drift");n.hidden=!1,n.classList.remove("fail","banked"),n.classList.add(e),t!=null&&(D("drift-points").textContent=t),this.driftShown=-1,this.driftHold=1.4}driftBanked(e){this.#e("banked",e.toLocaleString("pt-BR"))}driftFail(){this.#e("fail")}showCoins(e){D("hud-coins").hidden=e==null,e!=null&&this.setCoins(e)}setCoins(e){D("hud-coins").textContent=e.toLocaleString("pt-BR")}message(e,t=3){let n=D("msg");n.textContent=e,n.style.opacity=1,this.messageTimer=t}tick(e){this.messageTimer>0&&(this.messageTimer-=e)<=0&&(D("msg").style.opacity=0),this.driftHold>0&&(this.driftHold-=e)<=0&&(D("drift").hidden=!0)}updateActions(e,t){e!==this.actionsKey&&(this.actionsKey=e,this.setActions(t()))}setMapMode(e){document.body.classList.toggle("cidade",e.bodyClass==="cidade")}setLap(e){D("lap").textContent=e}setBest(e){D("best").textContent=e?fr(e):"\u2013"}setTimerText(e){e!==this.timerText&&(this.timerText=e,(this.timeEl||(this.timeEl=D("time"))).textContent=e)}setHelp(e){D("help").textContent=e}fadeHelpLater(){setTimeout(()=>D("help").style.opacity=0,9e3)}setDriveModeButton(e){D("bmodo").textContent=e?"\u{1F4A8} Modo drift":"\u{1F697} Modo normal"}setDestination(e){let t=D("dest");if(!e||!e.hasDestination||!e.label){t.hidden=!0;return}t.hidden=!1;let n=e.routeFound?"<span style='color:#d48cff'>\u25C6</span> "+e.label:e.label;t.innerHTML!==n&&(t.innerHTML=n)}setSignals(e){let t=(e.indicatorLeftOn?1:0)|(e.indicatorRightOn?2:0)|e.lightsMode<<2|(e.manual?16:0);if(t===this.signalsKey)return;this.signalsKey=t;let n=this.signalEls||(this.signalEls={sl:D("sl"),sr:D("sr"),hl:D("hl"),gm:D("gm")});n.sl.classList.toggle("on",e.indicatorLeftOn),n.sr.classList.toggle("on",e.indicatorRightOn),n.hl.className=e.lightsMode===2?"hi":e.lightsMode?"lo":"",n.gm.textContent=e.manual?"M":"A"}setActions(e){let t=e.map(n=>n[0]+n[1]).join("|");t!==this.actionsSignature&&(this.actionsSignature=t,D("acao").innerHTML=e.map(([n,i,s])=>"<button data-acao='"+n+"'"+(n?"":" disabled")+">"+i+(s&&s!=="\u2014"?" <kbd>"+s+"</kbd>":"")+"</button>").join(""))}draw(e,t,n){this.gauges.draw(e),t.drawMinimap(this.minimapCtx,this.minimap,n)}};var Yd=["off","low","medium","high"],uo=class{constructor(e,t){this.game=e,this.actions=t,this.capture=null,D("pbtn").onpointerdown=n=>{n.preventDefault(),e.started&&!e.paused&&t.pause()},D("o-gb").onclick=this.#e(n=>t.setGearbox(n===1)),D("o-dm").onclick=this.#e(n=>t.setDriveMode(n===1)),D("o-nt").onclick=this.#e(n=>t.setNight(n===1)),D("o-quality").onclick=this.#e(n=>t.setGraphicsQuality(["low","medium","high"][n])),D("o-diag").onclick=this.#e(n=>t.setDiagnostics(n===1)),D("o-shadow").onclick=this.#e(n=>t.setShadowQuality(Yd[n])),D("o-res").oninput=n=>t.setResolutionScale(+n.target.value/100),D("o-distance").oninput=n=>t.setRenderDistance(+n.target.value),D("o-vol").oninput=n=>t.setVolume(n.target.value/100),D("o-low").oninput=n=>t.setLowering(n.target.value/100),D("ctlList").onclick=n=>{let i=n.target.closest(".kbtn");i&&(this.capture={action:i.dataset.act,slot:+i.dataset.idx},D("ctlmsg").textContent="",this.renderControls())},D("ctlreset").onclick=()=>{e.input.resetBindings(),e.updateHelp(),D("ctlmsg").textContent="Controles restaurados.",this.renderControls()}}#e(e){return t=>{let n=t.target.closest("button");n&&e(+n.dataset.v)}}handleEscape(){return this.capture?(this.capture=null,this.renderControls(),!0):!1}captureKey(e){if(!this.capture)return!1;let{action:t,slot:n}=this.capture;return this.capture=null,e!=="Escape"&&(D("ctlmsg").textContent=this.game.input.rebind(t,n,e),this.game.updateHelp()),this.renderControls(),!0}renderControls(){let e=this.game.input;D("ctlList").innerHTML=Cs.map(([t,n])=>"<span>"+n+"</span>"+[0,1].map(i=>{let s=this.capture&&this.capture.action===t&&this.capture.slot===i;return'<button class="kbtn'+(s?" cap":"")+'" data-act="'+t+'" data-idx="'+i+'">'+(s?"Pressione\u2026":e.keyName(e.bindings[t][i]))+"</button>"}).join("")).join("")}refreshLowering(){let e=this.game;D("o-low").value=Math.round((e.settings.lowering[e.vehicleId]??0)*100),D("o-low-value").value=e.loweringCm?"\u2212"+e.loweringCm+" cm":"Original"}refresh(){let e=this.game.settings,t=(s,a)=>document.querySelectorAll(`#${s} button`).forEach(o=>o.classList.toggle("on",a(+o.dataset.v)));t("o-dm",s=>s===1===e.driftMode),t("o-gb",s=>s===1===e.manualGearbox),t("o-nt",s=>s===1===e.night),t("o-quality",s=>s===["low","medium","high"].indexOf(e.graphicsQuality)),t("o-diag",s=>s===1===e.diagnostics),t("o-shadow",s=>Yd[s]===e.shadowQuality),D("o-res").value=Math.round(e.resolutionScale*100),D("o-res-value").value=Math.round(e.resolutionScale*100)+"%",D("o-distance").value=e.renderDistance,D("o-distance-value").value=e.renderDistance+" m";let n=this.game.vehicleColors,i=D("o-col");i.dataset.vehicle!==this.game.vehicleId&&(i.replaceChildren(),i.dataset.vehicle=this.game.vehicleId,n.forEach((s,a)=>{let o=document.createElement("button");o.style.background=s,o.onclick=()=>this.actions.setColor(a),i.appendChild(o)})),[...i.children].forEach((s,a)=>s.classList.toggle("on",a===e.colorIndex)),D("o-vol").value=Math.round(e.volume*100),this.refreshLowering()}};var fo=class{constructor(e){this.game=e,this.open=!1,this.view={x:0,z:0,s:.3},this.pointers=new Map,this.dragged=!1,this.canvas=D("gpscv"),this.ctx=this.canvas.getContext("2d"),this.#n()}get gps(){return this.game.world.map?.gps}show(e){if(!this.gps){this.game.hud.message("O mapa com GPS est\xE1 dispon\xEDvel em Salto de Pirapora",2.5);return}this.open=!0,this.game.input.releaseAll(),Object.assign(this.view,{x:e.x,z:e.z,s:Math.min(innerWidth,innerHeight)/1400}),D("gps").hidden=!1,this.#e()}hide(){this.open=!1,D("gps").hidden=!0,this.pointers.clear(),this.game.loop.resetClock()}#e(){let e=Math.min(devicePixelRatio,2);this.canvas.width=innerWidth*e,this.canvas.height=innerHeight*e,this.draw()}draw(){if(!this.open)return;let e=this.ctx,t=this.canvas.width/innerWidth,n=innerWidth,i=innerHeight,s=this.view;e.setTransform(t,0,0,t,0,0),e.fillStyle="#1d2a1f",e.fillRect(0,0,n,i),this.game.world.map.drawFullMap(e,(a,o,c)=>(c[0]=n/2+(a-s.x)*s.s,c[1]=i/2+(o-s.z)*s.s,c),s.s,this.game.focus)}#t(e,t,n){let i=innerWidth,s=innerHeight,a=this.view,o=a.x+(t-i/2)/a.s,c=a.z+(n-s/2)/a.s;a.s=Je(a.s*e,.06,5);let l=this.game.world.map.half;a.x=Je(o-(t-i/2)/a.s,-l,l),a.z=Je(c-(n-s/2)/a.s,-l,l),this.draw()}#n(){let e=this.canvas;e.addEventListener("contextmenu",n=>n.preventDefault()),e.addEventListener("pointerdown",n=>{e.setPointerCapture(n.pointerId),this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY,x0:n.clientX,y0:n.clientY,button:n.button}),this.dragged=this.pointers.size>1}),e.addEventListener("pointermove",n=>{let i=this.pointers.get(n.pointerId);if(!i)return;if(this.pointers.size===2){let[o,c]=[...this.pointers.values()],l=Math.hypot(o.x-c.x,o.y-c.y);i.x=n.clientX,i.y=n.clientY;let h=Math.hypot(o.x-c.x,o.y-c.y);l>0&&this.#t(h/l,(o.x+c.x)/2,(o.y+c.y)/2),this.dragged=!0;return}let s=n.clientX-i.x,a=n.clientY-i.y;i.x=n.clientX,i.y=n.clientY,Math.hypot(n.clientX-i.x0,n.clientY-i.y0)>5&&(this.dragged=!0),this.dragged&&(this.view.x-=s/this.view.s,this.view.z-=a/this.view.s,this.draw())});let t=n=>{let i=this.pointers.get(n.pointerId);if(!i)return;if(this.pointers.delete(n.pointerId),this.dragged||n.type==="pointercancel"){this.pointers.size||(this.dragged=!1);return}if(i.button===2){this.gps.clear(),this.draw();return}let s=this.view.x+(n.clientX-innerWidth/2)/this.view.s,a=this.view.z+(n.clientY-innerHeight/2)/this.view.s;this.gps.setDestination(s,a)?(this.gps.update(this.game.focus,1),this.draw()):D("gpsinfo").textContent="Clique mais perto de uma rua para marcar o destino."};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("wheel",n=>{n.preventDefault(),this.#t(Math.exp(-n.deltaY*.0015),n.clientX,n.clientY)},{passive:!1}),D("gpsfecha").onclick=()=>this.hide(),D("gpslimpa").onclick=()=>{this.gps.clear(),this.draw()},D("gpsmais").onclick=()=>this.#t(1.4,innerWidth/2,innerHeight/2),D("gpsmenos").onclick=()=>this.#t(1/1.4,innerWidth/2,innerHeight/2),addEventListener("resize",()=>this.open&&this.#e())}};var po=class{constructor(e){this.game=e,document.querySelectorAll(".tb[data-k]").forEach(i=>e.input.bindHoldButton(i,i.dataset.k));let t=(i,s)=>document.querySelectorAll(i).forEach(a=>a.addEventListener("pointerdown",o=>{o.preventDefault(),s(a)}));t("[data-s]",i=>e.started&&e.vehicleReady&&e.controller.toggleIndicator(+i.dataset.s)),t("[data-f]",i=>e.started&&e.vehicleReady&&(i.dataset.f==="L"?e.controller.cycleLights():e.toggleNight())),t("[data-g]",i=>{let s=i.dataset.g;!e.started||!e.vehicleReady||(s==="up"?e.controller.shiftUp():s==="dn"?e.controller.shiftDown():e.controller.toggleGearbox())}),t("[data-a]",i=>e.started&&e.vehicleReady&&e.runAction(i.dataset.a)),(navigator.maxTouchPoints>0||"ontouchstart"in window||matchMedia("(pointer:coarse)").matches)&&!matchMedia("(hover:hover) and (pointer:fine)").matches&&this.enable(),addEventListener("touchstart",()=>this.enable(),{once:!0,passive:!0}),addEventListener("contextmenu",i=>document.body.classList.contains("touch")&&i.preventDefault())}enable(){document.body.classList.contains("touch")||(document.body.classList.add("touch"),D("touch").style.display="block",this.game.renderer.enableLowPower(),this.game.resize())}};var n_=new Ce(0,0),Sh=7,i_=.08,s_=["#e7e7e3","#c4161c","#1f4fb5","#f2b705","#1b1b1d","#2e8b57","#f28c28","#8e44ad","#ffffff","#777777"],r_=4352913,mo=class{constructor({canvas:e,getCamera:t,getVehicle:n,getPlayerBody:i,onOpenChange:s,onInteract:a}){this.canvas=e,this.getCamera=t,this.getVehicle=n,this.getPlayerBody=i,this.onOpenChange=s,this.onInteract=a,this.raycaster=new Aa,this.raycaster.layers.enableAll(),this.active=!1,this.editMode=!0,this.open=!1,this.elapsed=0,this.hovered=null,this.selected=null,this.vehicle=null,this.panel=D("customPanel"),this.colorInput=D("customColor"),this.hexInput=D("customHex"),this.#e()}#e(){this.canvas.addEventListener("pointerdown",this.#t,!0),this.colorInput.addEventListener("input",()=>this.#a(this.colorInput.value)),this.hexInput.addEventListener("change",()=>{let e=this.hexInput.value.trim();if(!/^#[\da-f]{6}$/i.test(e)){this.hexInput.setCustomValidity("Use um hexadecimal no formato #RRGGBB."),this.hexInput.reportValidity();return}this.hexInput.setCustomValidity(""),this.#a(e)}),D("customPalette").addEventListener("click",e=>{let t=e.target.closest("button[data-color]");t&&this.#a(t.dataset.color)}),D("customReset").addEventListener("click",()=>{this.selected&&this.#a(this.selected.originalColor)}),D("customClose").addEventListener("click",()=>this.close(!0)),D("customDone").addEventListener("click",()=>this.close(!0))}#t=e=>{if(!this.active||this.open||e.button!==0)return;let t=this.#n();this.editMode&&t?.part?(e.preventDefault(),e.stopImmediatePropagation(),this.#r(t.part)):!this.editMode&&t?.action&&(e.preventDefault(),e.stopImmediatePropagation(),this.onInteract?.(t.action,t))};setEditMode(e){this.editMode!==e&&(this.editMode=e,this.#i(null),this.elapsed=0)}setActive(e){this.active=e,D("aim").hidden=!e||this.open,!e&&!this.open&&this.#i(null)}update(e){let t=this.getVehicle();if(t!==this.vehicle&&(this.#i(null),this.vehicle=t,this.elapsed=0),!(!this.active||this.open||!t)&&(this.elapsed-=e,this.elapsed<=0)){this.elapsed=i_;let n=this.#n();this.#i(n&&(this.editMode||n.action==="toggleDoor")?n.part:null)}}#n(){let e=this.getVehicle(),t=this.getCamera(),n=this.getPlayerBody();if(!e||!t||!n||Math.hypot(n.x-e.root.position.x,n.z-e.root.position.z)>Sh+2.5)return null;t.updateMatrixWorld(!0),e.model.updateMatrixWorld(!0),this.raycaster.setFromCamera(n_,t),this.raycaster.far=Sh;let s=this.raycaster.intersectObject(e.model,!0)[0];if(!s||s.distance>Sh)return null;let a=null,o=null;for(let c=s.object;c&&(a||=c.userData.customizablePart,o||=c.userData.vehicleInteraction,c!==e.model);c=c.parent);return{part:a,action:o,object:s.object,distance:s.distance}}#i(e){e===this.hovered||this.open||(this.#s(this.hovered,!1),this.hovered=e,this.#s(e,!0))}#s(e,t){if(e)if(t){if(e.highlightState)return;e.highlightState=e.materials.map(n=>({material:n,emissive:n.emissive?.clone(),intensity:n.emissiveIntensity}));for(let n of e.highlightState)n.emissive&&(n.material.emissive.setHex(r_),n.material.emissiveIntensity=Math.max(n.intensity,.45))}else{for(let n of e.highlightState||[])n.emissive&&(n.material.emissive.copy(n.emissive),n.material.emissiveIntensity=n.intensity);delete e.highlightState}}#r(e){this.#i(null),this.selected=e,this.#s(e,!0),this.open=!0,this.panel.hidden=!1,D("customTitle").textContent=e.name,this.#o(e.colors||s_),this.#a("#"+e.paintMaterials[0].color.getHexString()),D("aim").hidden=!0,this.onOpenChange(!0)}#o(e){let t=D("customPalette");t.replaceChildren();for(let n of e){if(!/^#[\da-f]{6}$/i.test(n))continue;let i=document.createElement("button");i.type="button",i.dataset.color=n,i.title=n,i.setAttribute("aria-label",`Selecionar cor ${n}`),i.style.backgroundColor=n,t.appendChild(i)}}#a(e){if(!(!this.selected||!/^#[\da-f]{6}$/i.test(e))){for(let t of this.selected.paintMaterials)t.color.set(e);this.colorInput.value=e,this.hexInput.value=e.toUpperCase(),this.hexInput.setCustomValidity("")}}close(e=!1){this.open&&(this.#s(this.selected,!1),this.selected=null,this.open=!1,this.panel.hidden=!0,this.onOpenChange(!1),this.elapsed=0,D("aim").hidden=!this.active,e&&this.canvas.requestPointerLock&&this.canvas.requestPointerLock()?.catch?.(n=>console.warn("N\xE3o foi poss\xEDvel capturar o mouse:",n)))}};var a_=["physics","world","render"];var go=class{constructor(e){this.renderer=e,this.gl=e.getContext(),this.timerExt=this.gl.getExtension?.("EXT_disjoint_timer_query_webgl2")||null,this.queries=[],this.pendingQueries=[],this.activeQuery=null,this.sectionStart=Object.fromEntries(a_.map(n=>[n,0])),this.window=this.#e(),this.lastFrameAt=0,this.frameStartAt=0,this.stats=null,this.onStats=null,this.windowSeconds=.5,this.windowStart=performance.now(),this.recording=null;let t=this.gl.getExtension?.("WEBGL_debug_renderer_info");this.gpuName=t?this.gl.getParameter(t.UNMASKED_RENDERER_WEBGL):"desconhecida"}#e(){return{frames:0,frameMs:0,maxFrameMs:0,cpuMs:0,physics:0,world:0,render:0,gpuMs:0,gpuSamples:0,calls:0,triangles:0}}frameStart(e){if(this.frameStartAt=performance.now(),this.lastFrameAt){let t=e-this.lastFrameAt;this.window.frameMs+=t,t>this.window.maxFrameMs&&(this.window.maxFrameMs=t),this.recording&&this.recording.frameTimes.push(t)}this.lastFrameAt=e,this.#t()}begin(e){this.sectionStart[e]=performance.now()}end(e){let t=performance.now()-this.sectionStart[e];this.window[e]+=t,this.recording&&(this.recording[e]+=t)}beginGpu(){if(!this.timerExt)return;let e=this.queries.pop()||this.gl.createQuery();this.gl.beginQuery(this.timerExt.TIME_ELAPSED_EXT,e),this.activeQuery=e}endGpu(){this.activeQuery&&(this.gl.endQuery(this.timerExt.TIME_ELAPSED_EXT),this.pendingQueries.length<6?this.pendingQueries.push(this.activeQuery):this.gl.deleteQuery(this.activeQuery),this.activeQuery=null)}#t(){let e=this.gl;if(!this.timerExt||!this.pendingQueries.length)return;let t=e.getParameter(this.timerExt.GPU_DISJOINT_EXT);for(;this.pendingQueries.length;){let n=this.pendingQueries[0];if(!e.getQueryParameter(n,e.QUERY_RESULT_AVAILABLE))break;if(this.pendingQueries.shift(),!t){let i=e.getQueryParameter(n,e.QUERY_RESULT)/1e6;this.window.gpuMs+=i,this.window.gpuSamples++,this.recording&&(this.recording.gpuMs+=i,this.recording.gpuSamples++)}this.queries.push(n)}}frameEnd(){let e=this.window,t=this.renderer.info.render,n=performance.now()-this.frameStartAt;if(e.cpuMs+=n,e.calls+=t.calls,e.triangles+=t.triangles,e.frames++,this.recording){let s=this.recording;s.frames++,s.cpuMs+=n,s.calls+=t.calls,s.triangles+=t.triangles,s.cpuTimes.push(n)}let i=performance.now();i-this.windowStart>=this.windowSeconds*1e3&&(this.stats=this.#n(e,(i-this.windowStart)/1e3),this.window=this.#e(),this.windowStart=i,this.onStats?.(this.stats))}#n(e,t){let n=Math.max(1,e.frames),i=this.renderer.info.memory,s=performance.memory,a={fps:e.frames/t,frameMs:e.frameMs/n,maxFrameMs:e.maxFrameMs,cpuMs:e.cpuMs/n,physicsMs:e.physics/n,worldMs:e.world/n,renderMs:e.render/n,gpuMs:e.gpuSamples?e.gpuMs/e.gpuSamples:null,calls:Math.round(e.calls/n),triangles:Math.round(e.triangles/n),geometries:i.geometries,textures:i.textures,programs:this.renderer.info.programs?.length??0,heapMB:s?s.usedJSHeapSize/1048576:null};return a.bottleneck=o_(a),a}startRecording(){this.recording={frames:0,cpuMs:0,physics:0,world:0,render:0,gpuMs:0,gpuSamples:0,calls:0,triangles:0,frameTimes:[],cpuTimes:[]}}stopRecording(){let e=this.recording;if(this.recording=null,!e)return null;let t=Math.max(1,e.frames),n=e.cpuTimes.slice().sort((c,l)=>c-l),i=e.frameTimes.slice().sort((c,l)=>c-l),s=(c,l)=>c.length?c[Math.min(c.length-1,Math.floor(c.length*l))]:0,a=this.renderer.info.memory,o=performance.memory;return{frames:e.frames,cpuMs:e.cpuMs/t,cpuP95Ms:s(n,.95),physicsMs:e.physics/t,worldMs:e.world/t,renderMs:e.render/t,gpuMs:e.gpuSamples?e.gpuMs/e.gpuSamples:null,frameMs:i.length?i.reduce((c,l)=>c+l,0)/i.length:0,frameP95Ms:s(i,.95),calls:Math.round(e.calls/t),triangles:Math.round(e.triangles/t),geometries:a.geometries,textures:a.textures,heapMB:o?o.usedJSHeapSize/1048576:null,gpu:this.gpuName}}};function o_(r){return r.gpuMs!=null&&r.gpuMs>r.cpuMs&&r.gpuMs>16.7*.8?"GPU":r.cpuMs>16.7*.8?"CPU":r.frameMs>16.7*1.2?r.gpuMs==null?"GPU?":"sincroniza\xE7\xE3o":"ok"}var Kd=[1400,900],bo=class r{static fromUrl(){let e=new URLSearchParams(location.search),t=e.get("bench");return t?new r({mapId:t,night:e.get("noite")==="1",frames:Math.max(60,+e.get("quadros")||600)}):null}constructor({mapId:e,night:t,frames:n}){this.mapId=e,this.night=t,this.frames=n,this.frame=0,this.running=!1,this.path=null,this.cumulative=null,this.fixedDt=1/60}async start(e){await e.selectMap(this.mapId),e.setNight(this.night),e.start(),e.enterVehicle(),e.cameraController.mode=0;let t=e.controller;if(t.engineOn=!0,this.night&&(t.lightsMode=1),this.path=c_(e.world.map),e.world.map.gps){let i=this.path.length;e.world.map.gps.setDestination(this.path[i-2],this.path[i-1])}let n=0;this.cumulative=[0];for(let i=2;i<this.path.length;i+=2)n+=Math.hypot(this.path[i]-this.path[i-2],this.path[i+1]-this.path[i-1]),this.cumulative.push(n);this.length=n,this.game=e,this.running=!0,this.frame=0,this.#e()}#e(){let e=Math.min(this.length-.1,this.frame*this.fixedDt*15),t=1;for(;t<this.cumulative.length-1&&this.cumulative[t]<e;)t++;let n=this.path,i=(e-this.cumulative[t-1])/Math.max(1e-6,this.cumulative[t]-this.cumulative[t-1]),s=n[(t-1)*2],a=n[(t-1)*2+1],o=n[t*2],c=n[t*2+1],l=this.game.controller.state,h=Math.atan2(o-s,c-a);l.x=s+(o-s)*i,l.z=a+(c-a)*i,l.h=h,l.vx=Math.sin(h)*15,l.vz=Math.cos(h)*15,l.r=l.ax=l.ay=l.pitch=l.roll=0,l.vf=15}afterPhysics(){this.#e()}endFrame(){if(!this.running)return;this.frame++;let e=this.game.monitor;if(this.frame===60&&e.startRecording(),this.frame===60+this.frames){this.running=!1;let t={cenario:this.mapId+(this.night?" (noite)":""),...e.stopRecording()};window.__benchResult=t,console.log("[benchmark]",JSON.stringify(t)),console.table(t),this.game.diagnostics.showBenchmark(t)}}};function c_(r){if(r.network){let t=r.network,n=t.project(r.start[0],r.start[1]),i=t.project(Kd[0],Kd[1]),s=n&&i&&t.route(n,i);if(s&&s.pts.length>=4)return Array.from(s.pts)}let e=[];for(let t of r.points)e.push(t.x,t.z);return e.push(r.points[0].x,r.points[0].z),e}var It=(r,e=1)=>r==null?"\u2013":r.toFixed(e),Jd=r=>r>=1e6?(r/1e6).toFixed(2)+" M":r>=1e3?(r/1e3).toFixed(1)+" k":String(r),xo=class{constructor(e){this.monitor=e,this.el=D("diag"),this.visible=!1,e.onStats=t=>this.visible&&this.#e(t)}setVisible(e){this.visible=e,this.el.hidden=!e,e&&this.monitor.stats&&this.#e(this.monitor.stats)}toggle(){return this.setVisible(!this.visible),this.visible}showBenchmark(e){this.monitor.onStats=null,this.setVisible(!0),this.el.textContent=`BENCHMARK ${e.cenario} \xB7 ${e.frames} quadros
quadro ${It(e.frameMs,2)} ms (p95 ${It(e.frameP95Ms,1)}) \xB7 CPU ${It(e.cpuMs,2)} ms (p95 ${It(e.cpuP95Ms,2)})
f\xEDsica ${It(e.physicsMs,3)} \xB7 mundo ${It(e.worldMs,3)} \xB7 render ${It(e.renderMs,3)} \xB7 GPU ${e.gpuMs==null?"n/d":It(e.gpuMs,2)}
${e.calls} draw calls \xB7 ${Jd(e.triangles)} tri\xE2ngulos \xB7 ${e.geometries} geometrias \xB7 ${e.textures} texturas`}#e(e){this.el.textContent=`${It(e.fps,0)} FPS \xB7 ${It(e.frameMs)} ms (pior ${It(e.maxFrameMs,0)})
CPU ${It(e.cpuMs,2)} ms  f\xEDsica ${It(e.physicsMs,2)} \xB7 mundo ${It(e.worldMs,2)} \xB7 render ${It(e.renderMs,2)}
GPU ${e.gpuMs==null?"n/d":It(e.gpuMs,2)+" ms"} \xB7 gargalo: ${e.bottleneck}
${e.calls} draw calls \xB7 ${Jd(e.triangles)} tri\xE2ngulos
${e.geometries} geometrias \xB7 ${e.textures} texturas \xB7 ${e.programs} shaders`+(e.heapMB==null?"":` \xB7 JS ${It(e.heapMB,0)} MB`)}};var _o=class extends Error{constructor(e,t,n){super(n),this.status=e,this.code=t}},vo=class{get available(){return location.protocol==="http:"||location.protocol==="https:"}async request(e,t,n){let i;try{i=await fetch("api"+t,{method:e,credentials:"same-origin",headers:n===void 0?{}:{"Content-Type":"application/json"},body:n===void 0?void 0:JSON.stringify(n)})}catch{throw new _o(0,"offline","Servidor indispon\xEDvel.")}if(i.status===204)return null;let s=await i.json().catch(()=>null);if(!i.ok)throw new _o(i.status,s?.error||"error",s?.message||`Erro ${i.status}`);return s}me(){return this.request("GET","/me")}register(e,t){return this.request("POST","/auth/register",{username:e,password:t})}login(e,t){return this.request("POST","/auth/login",{username:e,password:t})}logout(){return this.request("POST","/auth/logout")}catalog(){return this.request("GET","/catalog")}chooseStarter(e){return this.request("POST","/garage/starter",{carId:e})}selectCar(e){return this.request("POST","/garage/select",{carId:e})}buyCar(e){return this.request("POST","/shop/buy",{carId:e})}paint(e,t,n){return this.request("POST","/garage/paint",{carId:e,colors:t,fullColor:n})}suspension(e,t){return this.request("POST","/garage/suspension",{carId:e,lowering:t})}bankDrift(e,t){return this.request("POST","/score/drift",{points:e,durationMs:t})}leaderboard(){return this.request("GET","/leaderboard")}rooms(){return this.request("GET","/rooms")}createRoom(e,t,n){return this.request("POST","/rooms",{name:e,password:t,map:n})}};var yo=class{constructor(e){this.api=e,this.profile=null,this.catalog=null,this.offline=!1,this.listeners=new Set}get loggedIn(){return!!this.profile}get coins(){return this.profile?.coins??0}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}set(e){this.profile=e;for(let t of this.listeners)t(e)}setCoins(e){this.profile&&this.set({...this.profile,coins:e})}owns(e){return!!this.profile?.cars.some(t=>t.carId===e)}look(e){return this.profile?.cars.find(t=>t.carId===e)||{carId:e,colors:{},lowering:0}}carInfo(e){return this.catalog?.cars.find(t=>t.id===e)}paintCost(e,t,n,i){let s=this.carInfo(e),a=this.catalog?.paintPartPrice??0;if(!s)return 0;if(i)return Math.round(s.parts.length*a*(1-this.catalog.fullPaintDiscount));let o=0;for(let[c,l]of Object.entries(n)){let h=s.parts.find(d=>d.id===c),u=t[c]||h?.defaultColor||s.defaultColor;l.toLowerCase()!==u.toLowerCase()&&o++}return o*a}suspensionCost(e,t,n){let i=this.carInfo(e);return i?Math.ceil(Math.abs(n-t)*i.maxDropCm-1e-9)*this.catalog.suspensionPricePerCm:0}};var l_=83.33333333333333,Mo=class{constructor(){this.ws=null,this.room=null,this.you=null,this.lastSent=0,this.pending=null,this.state=[],this.onPlayerJoin=null,this.onPlayerLeave=null,this.onState=null,this.onLook=null,this.onDisconnect=null}get connected(){return this.ws?.readyState===WebSocket.OPEN}get inRoom(){return this.connected&&!!this.room}connect(){return this.connected?Promise.resolve():new Promise((e,t)=>{let n=(location.protocol==="https:"?"wss://":"ws://")+location.host+location.pathname.replace(/[^/]*$/,"")+"ws",i=new WebSocket(n);this.ws=i,i.onopen=()=>{this.ping=setInterval(()=>this.#e({t:"ping"}),2e4),e()},i.onerror=()=>t(new Error("N\xE3o foi poss\xEDvel conectar ao servidor multiplayer.")),i.onclose=()=>{clearInterval(this.ping);let s=!!this.room;this.room=null,this.ws=null,this.pending?.reject(new Error("Conex\xE3o encerrada.")),this.pending=null,s&&this.onDisconnect?.(this.kickedMessage||"Conex\xE3o com o servidor perdida."),this.kickedMessage=null},i.onmessage=s=>this.#t(s.data)})}async join(e,t){return await this.connect(),new Promise((n,i)=>{this.pending={resolve:n,reject:i},this.#e({t:"join",room:e,password:t})})}leave(){this.connected&&this.room&&this.#e({t:"leave"}),this.room=null}disconnect(){this.leave(),this.ws?.close()}announceLook(){this.connected&&this.#e({t:"look"})}sendState(e,t,n){if(!this.inRoom||e-this.lastSent<l_)return;this.lastSent=e;let i=this.state;i[0]=t.x,i[1]=t.z,i[2]=t.h,i[3]=t.vx,i[4]=t.vz,i[5]=t.steer,i[6]=t.pitch,i[7]=t.roll,i[8]=t.vf,this.ws.send(JSON.stringify({t:"s",p:i,f:n}))}#e(e){this.connected&&this.ws.send(JSON.stringify(e))}#t(e){let t;try{t=JSON.parse(e)}catch{return}switch(t.t){case"welcome":this.room=t.room,this.you=t.you,this.pending?.resolve(t),this.pending=null;break;case"error":this.pending&&(this.pending.reject(new Error(t.message)),this.pending=null);break;case"join":this.onPlayerJoin?.(t.player);break;case"leave":this.onPlayerLeave?.(t.id);break;case"s":this.onState?.(t.id,t.p,t.f);break;case"look":this.onLook?.(t.id,t.look);break;case"kicked":this.kickedMessage=t.message;break;default:break}}};var h_=120,Zd=160,u_=1,So=1.05,Is=new I,sn={BRAKE:1,REVERSE:2,LIGHTS_SHIFT:2,IND_L:16,IND_R:32,ENGINE:64},wo=class{constructor(e,t,n,i){this.scene=e,this.vehicles=t,this.camera=n,this.labelLayer=i,this.players=new Map}get count(){return this.players.size}async add({id:e,name:t,look:n}){if(this.players.has(e))return;let i={id:e,name:t,look:n,vehicle:null,carId:null,loading:null,snapshots:[],proxy:{state:{x:0,z:0,h:0,vf:0,steer:0,pitch:0,roll:0,brake:!1,reverse:!1},lightsMode:0,indicatorLeftOn:!1,indicatorRightOn:!1},label:document.createElement("div")};i.label.className="player-tag",i.label.textContent=t,this.labelLayer.appendChild(i.label),this.players.set(e,i),await this.#e(i)}remove(e){let t=this.players.get(e);t&&(this.players.delete(e),t.label.remove(),this.#t(t))}clear(){for(let e of[...this.players.keys()])this.remove(e)}setLook(e,t){let n=this.players.get(e);n&&(n.look=t,t.carId!==n.carId?this.#e(n):n.vehicle?.applyLook(t))}pushState(e,t,n){let i=this.players.get(e);!i||t.length<9||(i.snapshots.push({t:performance.now(),v:t,f:n}),i.snapshots.length>20&&i.snapshots.shift())}async#e(e){let t=rt[e.look?.carId]?e.look.carId:"chevette",n=e.loading={},i=await this.vehicles.acquireModel(t);if(e.loading!==n||!this.players.has(e.id)){this.vehicles.releaseModel(t);return}this.#t(e),e.vehicle=new Ps(i,rt[t],{remote:!0}),e.carId=t,e.vehicle.applyLook(e.look),this.scene.add(e.vehicle.root)}#t(e){e.vehicle&&(e.vehicle.dispose(),this.vehicles.releaseModel(e.carId),e.vehicle=null,e.carId=null)}update(e){let t=performance.now()-h_;for(let n of this.players.values()){let i=n.snapshots;if(!n.vehicle||!i.length)continue;for(;i.length>2&&i[1].t<=t;)i.shift();let s=i[0],a=i[1]||s,o=a.t-s.t,c=o>0?Math.min(1,Math.max(0,(t-s.t)/o)):1,l=n.proxy.state,h=s.v,u=a.v;l.x=h[0]+(u[0]-h[0])*c,l.z=h[1]+(u[1]-h[1])*c,l.h=h[2]+Ts(u[2],h[2])*c,l.steer=h[5]+(u[5]-h[5])*c,l.pitch=h[6]+(u[6]-h[6])*c,l.roll=h[7]+(u[7]-h[7])*c,l.vf=h[8]+(u[8]-h[8])*c;let d=a.f;l.brake=!!(d&sn.BRAKE),l.reverse=!!(d&sn.REVERSE),n.proxy.lightsMode=d>>sn.LIGHTS_SHIFT&3;let f=performance.now()%660<330;n.proxy.indicatorLeftOn=f&&!!(d&sn.IND_L),n.proxy.indicatorRightOn=f&&!!(d&sn.IND_R),n.vehicle.update(e,n.proxy)}}updateLabels(e){let t=this.camera,n=innerWidth,i=innerHeight;for(let s of this.players.values()){let a=s.proxy.state,o=s.label;Is.set(a.x,2,a.z);let c=Is.distanceTo(t.position);if(Is.project(t),!(e&&s.vehicle&&s.snapshots.length&&Is.z<1&&c<Zd)){o.style.display!=="none"&&(o.style.display="none");continue}o.style.display="",o.style.transform=`translate(${((Is.x+1)/2*n).toFixed(1)}px, ${((1-Is.y)/2*i).toFixed(1)}px) translate(-50%, -100%)`,o.style.opacity=String(Math.max(.35,1-c/Zd))}}collideLocal(e){for(let t of this.players.values()){if(!t.vehicle||!t.snapshots.length)continue;let n=t.proxy.state;for(let i of[-1,1])for(let s of[-1,1]){let a=e.x+Math.sin(e.h)*So*i,o=e.z+Math.cos(e.h)*So*i,c=n.x+Math.sin(n.h)*So*s,l=n.z+Math.cos(n.h)*So*s,h=a-c,u=o-l,d=Math.hypot(h,u),f=u_*2;if(d>=f||d<1e-4)continue;h/=d,u/=d,e.x+=h*(f-d),e.z+=u*(f-d);let g=e.vx*h+e.vz*u;g<0&&(e.vx-=1.4*g*h,e.vz-=1.4*g*u,e.vx*=.85,e.vz*=.85)}}}};var Ao=class{constructor(){this.active=!1,this.points=0,this.combo=1,this.time=0,this.grace=0,this.startedAt=0,this.angle=0,this.prevSpeed=0,this.onBank=null,this.onFail=null}reset(){this.active=!1,this.points=0,this.combo=1,this.time=0,this.grace=0}update(e,t,n){let i=t.state,s=Math.hypot(i.vx,i.vz),a=Math.sin(i.h),o=Math.cos(i.h),c=i.vx*a+i.vz*o,l=i.vx*o-i.vz*a;this.angle=Math.atan2(Math.abs(l),Math.max(Math.abs(c),.01));let h=this.prevSpeed-s>4;if(this.prevSpeed=s,this.active&&h){this.reset(),this.onFail?.();return}if(n&&s>7&&c>0&&this.angle>.26&&this.angle<1.75)this.active||(this.active=!0,this.points=0,this.time=0,this.startedAt=performance.now()),this.time+=e,this.combo=1+Math.min(3,Math.floor(this.time/2)*.5),this.points+=e*Math.min(1400,s*(this.angle*180/Math.PI)*.35*this.combo),this.grace=1.2;else if(this.active&&(this.grace-=e)<=0){let d=Math.round(this.points),f=performance.now()-this.startedAt;this.reset(),d>=150&&this.onBank?.(d,Math.round(f))}}get comboProgress(){return this.combo>=4?1:this.time%2/2}};var Eo=class{constructor(e){this.scene=new Ci,this.scene.background=new pe(724759),this.scene.environment=e,this.scene.environmentIntensity=.85,this.camera=new bt(32,1,.1,100),this.camera.layers.enableAll(),this.angle=.9,this.focusRight=.17,this.car=null;let t=new qn(16773600,2.4);t.position.set(-4,6,3);let n=new qn(10274047,1.6);n.position.set(4,3,-5);let i=new Ma(12571903,1711914,.55);for(let o of[t,n,i])o.layers.enableAll(),this.scene.add(o);let s=new Fe(new ar(9,64),new st({color:1317414,roughness:.35,metalness:.2}));s.rotation.x=-Math.PI/2;let a=new Fe(new ar(3.2,48),new _t({map:d_(),transparent:!0,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.005,a.scale.set(.75,1.45,1);for(let o of[s,a])o.layers.enableAll(),this.scene.add(o)}show(e){this.car=e,e&&(e.root.removeFromParent(),e.root.position.set(0,0,0),e.root.rotation.set(0,0,0),e.model.rotation.set(0,0,0),e.root.traverse(t=>t.layers.enable(Et.VEHICLE)),this.scene.add(e.root))}release(e){this.car&&(e.add(this.car.root),this.car=null)}setAspect(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.width=e,this.height=t}update(e){this.angle+=e*.18;let t=10,n=this.camera;n.position.set(Math.sin(this.angle)*t,2.1,Math.cos(this.angle)*t),n.lookAt(0,.55,0),this.width&&n.setViewOffset(this.width,this.height,-this.width*this.focusRight,0,this.width,this.height),this.car&&this.car.root.updateMatrixWorld(!0)}render(e){e.info.reset(),e.render(this.scene,this.camera)}};function d_(){let r=document.createElement("canvas");r.width=r.height=128;let e=r.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,64);return t.addColorStop(0,"rgba(0,0,0,0.85)"),t.addColorStop(.55,"rgba(0,0,0,0.45)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new vs(r)}var $d=["#e9e9e6","#151618","#a7abae","#6b6e72","#b01522","#f28c28","#f2b705","#2e8b57","#1f4fb5","#5b2a86","#00a3a3","#ff4fa3"],To=class{constructor(e,t){this.game=e,this.iface=t,this.color=$d[4],this.pending={},this.full=!1,this.lowering=0;let n=D("garage-palette");for(let s of $d){let a=document.createElement("button");a.style.background=s,a.dataset.color=s,a.title=s,a.type="button",n.appendChild(a)}let i=document.createElement("input");i.type="color",i.title="Outra cor",i.setAttribute("aria-label","Escolher outra cor"),n.appendChild(i),n.addEventListener("click",s=>{let a=s.target.closest("button[data-color]");a&&this.#e(a.dataset.color)}),i.addEventListener("input",()=>this.#e(i.value)),D("garage-parts").addEventListener("click",s=>{let a=s.target.closest(".part");if(!a)return;let o=a.dataset.part;this.pending[o]?.toLowerCase()===this.color.toLowerCase()?delete this.pending[o]:this.pending[o]=this.color,this.full=!1,this.#n()}),D("full-paint").addEventListener("change",s=>{this.full=s.target.checked,this.#n()}),D("garage-height").addEventListener("input",s=>{this.lowering=+s.target.value/100,this.#n()}),D("garage-undo").addEventListener("click",()=>this.reset()),D("garage-confirm").addEventListener("click",()=>this.#o()),D("garage-cars").addEventListener("click",s=>{let a=s.target.closest("button[data-car]");a&&this.game.setActiveCar(a.dataset.car)})}get session(){return this.game.session}get carId(){return this.game.vehicleId}get look(){return this.session.look(this.carId)}open(){this.pending={},this.full=!1,this.lowering=this.look.lowering||0,this.render()}reset(){this.open(),this.game.vehicle?.applyLook(this.look)}#e(e){this.color=e,this.full&&this.#n(),this.#s()}#t(){let e=this.session.carInfo(this.carId);return e?this.full?Object.fromEntries(e.parts.map(t=>[t.id,this.color])):this.pending:{}}#n(){let e=this.look;this.game.vehicle?.applyLook({colors:{...e.colors,...this.#t()},lowering:this.lowering}),this.render()}#i(){let e=this.session,t=this.look,n=e.paintCost(this.carId,t.colors,this.full?{}:this.pending,this.full?this.color:null),i=e.suspensionCost(this.carId,t.lowering||0,this.lowering);return{paint:n,height:i,total:n+i}}#s(){for(let e of D("garage-palette").querySelectorAll("button"))e.classList.toggle("on",e.dataset.color.toLowerCase()===this.color.toLowerCase())}render(){let e=this.session,t=e.carInfo(this.carId),n=rt[this.carId];if(!t||!e.profile)return;let i=this.look,s=e.catalog.paintPartPrice;D("garage-cars").innerHTML=e.profile.cars.map(f=>`<button type="button" data-car="${f.carId}" class="${f.carId===this.carId?"on":""}">${rt[f.carId]?.name||f.carId}</button>`).join(""),D("part-price").textContent=s,D("cm-price").textContent=e.catalog.suspensionPricePerCm,D("paint-note").textContent=this.full?"carro inteiro":"",D("full-paint").checked=this.full,this.#s();let a=this.#t();D("garage-parts").innerHTML=t.parts.map(f=>{let g=i.colors[f.id]||f.defaultColor||t.defaultColor,b=a[f.id],m=b&&b.toLowerCase()!==g.toLowerCase();return`<button type="button" class="part${m?" changed":""}" data-part="${f.id}"><span class="dot" style="background:${b||g}"></span><span class="pname">${f.name}</span>`+(m&&!this.full?`<span class="pcost">${s}</span>`:"")+"</button>"}).join("");let o=t.maxDropCm,c=Math.round(this.lowering*o);D("garage-height").value=Math.round(this.lowering*100),D("garage-height-value").value=c?`\u2212${c} cm`:"Original",D("garage-height").title=`At\xE9 \u2212${o} cm`;let{paint:l,height:h,total:u}=this.#i(),d=[];l&&d.push([this.full?"Pintura completa (\u221210%)":`Pintura (${Object.keys(this.pending).length} pe\xE7a(s))`,l]),h&&d.push([`Suspens\xE3o (${c?"\u2212"+c+" cm":"original"})`,h]),D("cart-lines").innerHTML=d.map(([f,g])=>`<div><span>${f}</span><span>${g}</span></div>`).join("")||"<div><span>Nenhuma altera\xE7\xE3o</span></div>",D("garage-total").textContent=u,D("garage-confirm").disabled=!l&&!h&&!this.#r()||u>e.coins,D("garage-error").textContent=u>e.coins?`Faltam ${u-e.coins} moedas.`:"",this.iface.setCaption(n?.name)}#r(){return Math.abs((this.look.lowering||0)-this.lowering)>1e-6}async#o(){let e=this.game.api,t=this.carId,{paint:n,height:i}=this.#i();D("garage-confirm").disabled=!0;try{let s=0;if(n){let a=this.full?await e.paint(t,null,this.color):await e.paint(t,this.pending,null);this.session.set(a.profile),s+=a.cost}if(i||this.#r()){let a=await e.suspension(t,this.lowering);this.session.set(a.profile),s+=a.cost}this.iface.toast(s?`Servi\xE7o feito: \u2212${s} moedas`:"Altera\xE7\xF5es salvas","ok"),this.game.onLookChanged(),this.open()}catch(s){D("garage-error").textContent=s.message,this.render()}}};var f_={circuito:"Circuito",salto:"Salto de Pirapora"},wn=r=>String(r).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ro=class{constructor(e){this.game=e,this.root=D("ui"),this.screen=null,this.tab="play",this.authMode="login",this.soloMap="circuito",this.garage=new To(e,this),this.#e(),this.#s(),this.#u(),e.session.onChange(t=>this.#h(t))}show(e){this.screen=e,this.root.hidden=e===null;for(let t of["auth","starter","hub","pause"])D("screen-"+t).hidden=t!==e;D("topbar").hidden=e!=="hub",this.root.classList.toggle("solid",e==="pause"),e==="hub"&&this.showTab(this.tab),e==="starter"&&this.#n()}hide(){this.screen==="hub"&&this.tab==="garage"&&this.garage.reset(),this.show(null)}get open(){return this.screen!==null}setOffline(e){this.root.classList.toggle("offline",e)}loading(e){D("loading").hidden=!e,e&&(D("loading-text").textContent=e)}toast(e,t=""){let n=document.createElement("div");n.className="toast "+t,n.textContent=e,D("toasts").appendChild(n),setTimeout(()=>n.classList.add("out"),3200),setTimeout(()=>n.remove(),3600)}setCaption(e){D("car-caption").innerHTML=e?`<small>Seu carro</small><b>${wn(e)}</b>`:""}#e(){D("auth-tabs").addEventListener("click",e=>{let t=e.target.closest("button[data-mode]");t&&this.#t(t.dataset.mode)}),D("auth-form").addEventListener("submit",async e=>{e.preventDefault();let t=D("auth-user").value.trim(),n=D("auth-pass").value;if(D("auth-error").textContent="",!t||!n)return void(D("auth-error").textContent="Preencha usu\xE1rio e senha.");D("auth-submit").disabled=!0;try{await this.game.authenticate(this.authMode,t,n),D("auth-pass").value=""}catch(i){D("auth-error").textContent=i.message}finally{D("auth-submit").disabled=!1}}),D("auth-offline").addEventListener("click",()=>this.game.enterOffline())}#t(e){this.authMode=e;for(let t of D("auth-tabs").children)t.classList.toggle("on",t.dataset.mode===e);D("auth-submit").textContent=e==="login"?"Entrar":"Criar conta",D("auth-pass").autocomplete=e==="login"?"current-password":"new-password",D("auth-hint").hidden=e==="login",D("auth-error").textContent=""}showAuth(e="",t=!1){D("auth-status").textContent=e,D("auth-offline").hidden=!t,this.#t(this.authMode),this.show("auth"),setTimeout(()=>D("auth-user").focus(),50)}#n(){let e=Object.entries(rt).map(([t,n])=>this.#i(t,n,`<button class="btn-primary wide" data-starter="${t}">Escolher ${wn(n.name)}</button>`));D("starter-cards").innerHTML=e.join(""),D("starter-cards").onclick=async t=>{let n=t.target.closest("button[data-starter]");if(n){n.disabled=!0;try{await this.game.chooseStarter(n.dataset.starter)}catch(i){this.toast(i.message),n.disabled=!1}}}}#i(e,t,n,i=""){let s=t.physics,a=e==="saveiro"?"pickup":"sedan";return`<div class="car-card ${i}"><h3>${wn(t.name)}</h3><div class="car-art ${a}" style="--car-color:${t.colors[0]}"></div><div class="specs"><div class="spec"><b>${s.mass} kg</b><span>peso</span></div><div class="spec"><b>${s.maxTorque} N\xB7m</b><span>torque</span></div><div class="spec"><b>${s.wheelbase.toFixed(2)} m</b><span>entre-eixos</span></div></div>${n}</div>`}#s(){D("tabs").addEventListener("click",e=>{let t=e.target.closest("button[data-tab]");t&&this.showTab(t.dataset.tab)}),D("logout").addEventListener("click",()=>this.game.logout()),D("play-global").addEventListener("click",()=>this.#r(()=>this.game.playRoom("global"))),D("play-solo").addEventListener("click",()=>this.#r(()=>this.game.playSolo(this.soloMap))),D("solo-map").addEventListener("click",e=>{let t=e.target.closest("button[data-map]");if(t){this.soloMap=t.dataset.map;for(let n of D("solo-map").children)n.classList.toggle("on",n===t)}}),D("offline-cars").addEventListener("click",e=>{let t=e.target.closest("button[data-car]");t&&this.game.selectVehicle(t.dataset.car).then(()=>this.#o())}),D("rooms-refresh").addEventListener("click",()=>this.#a()),D("room-list").addEventListener("click",e=>{let t=e.target.closest("button[data-room]");if(!t)return;let n=t.closest(".room").querySelector("input")?.value||"";if(!n)return void(D("play-error").textContent="Digite a senha da sala.");this.#r(()=>this.game.playRoom(t.dataset.room,n))}),D("create-room").addEventListener("submit",e=>{e.preventDefault();let t=D("room-name").value.trim(),n=D("room-pass").value,i=D("room-map").value;this.#r(async()=>{let s=await this.game.api.createRoom(t,n,i);await this.game.playRoom(s.id,n)})}),D("shop-cards").addEventListener("click",async e=>{let t=e.target.closest("button[data-buy], button[data-use]");if(t){D("shop-error").textContent="",t.disabled=!0;try{t.dataset.buy?(this.game.session.set(await this.game.api.buyCar(t.dataset.buy)),this.toast(`${rt[t.dataset.buy].name} comprado!`,"gold")):await this.game.setActiveCar(t.dataset.use),this.#l()}catch(n){D("shop-error").textContent=n.message,t.disabled=!1}}})}async#r(e){D("play-error").textContent="";try{await e()}catch(t){D("play-error").textContent=t.message,this.loading(!1)}}showTab(e){this.tab==="garage"&&e!=="garage"&&this.garage.reset(),this.tab=e;for(let t of D("tabs").children)t.classList.toggle("on",t.dataset.tab===e);for(let t of["play","garage","shop","ranking","options","controls"])D("tab-"+t).hidden=t!==e;this.setCaption(rt[this.game.vehicleId]?.name),e==="play"&&(D("resume-card").hidden=!this.game.started,D("resume-info").textContent=this.game.matchDescription(),this.#a(),this.#o()),e==="garage"&&this.garage.open(),e==="shop"&&this.#l(),e==="ranking"&&this.#c(),e==="options"&&this.game.menu.refresh(),e==="controls"&&this.game.menu.renderControls()}#o(){D("offline-cars").innerHTML=Object.entries(rt).map(([e,t])=>`<button data-car="${e}" class="${e===this.game.vehicleId?"on":""}">${wn(t.name)}</button>`).join("")}async#a(){if(this.game.session.loggedIn)try{let e=await this.game.api.rooms(),t=e.find(i=>i.id==="global");D("global-count").textContent=t?t.players:0;let n=e.filter(i=>i.isPrivate);D("room-list").innerHTML=n.length?n.map(i=>`<div class="room"><div class="room-main"><div class="room-name">${wn(i.name)}<span class="lock">senha</span></div><div class="room-meta">${f_[i.map]||i.map} \xB7 ${i.players}/${i.maxPlayers} jogadores${i.mine?" \xB7 sua sala":""}</div></div><input type="password" placeholder="Senha" maxlength="32" aria-label="Senha da sala ${wn(i.name)}"><button class="btn" data-room="${wn(i.id)}">Entrar</button></div>`).join(""):'<p class="muted small">Nenhuma sala aberta. Crie uma abaixo e chame os amigos.</p>'}catch(e){D("room-list").innerHTML=`<p class="muted small">${wn(e.message)}</p>`}}#l(){let e=this.game.session;!e.profile||!e.catalog||(D("shop-cards").innerHTML=e.catalog.cars.map(t=>{let n=rt[t.id],i=e.owns(t.id),s=e.profile.selectedCar===t.id,a=i?s?'<div class="price"><span class="muted">Em uso</span></div>':`<div class="price"><span class="muted">Na sua garagem</span><button class="btn" data-use="${t.id}">Usar</button></div>`:`<div class="price"><span class="coins">${t.price}</span><button class="btn-primary" data-buy="${t.id}" ${e.coins<t.price?"disabled":""}>Comprar</button></div>`;return this.#i(t.id,n,a,s?"active":"").replace("<h3>",i?'<span class="tag">SEU</span><h3>':"<h3>")}).join(""))}async#c(){let e=this.game.session,t=e.profile;t&&(D("my-stats").innerHTML=`<div class="stat"><b>${t.bestDrift.toLocaleString("pt-BR")}</b><span>seu melhor drift</span></div><div class="stat"><b>${t.totalDriftPoints.toLocaleString("pt-BR")}</b><span>pontos no total</span></div><div class="stat"><b class="coins">${t.coins.toLocaleString("pt-BR")}</b><span>moedas</span></div>`);try{let n=await this.game.api.leaderboard();D("ranking-body").innerHTML=n.length?n.map((i,s)=>`<tr class="${t&&i.username===t.username?"me":""}"><td>${s+1}</td><td>${wn(i.username)}</td><td>${i.bestDrift.toLocaleString("pt-BR")}</td><td>${i.totalDriftPoints.toLocaleString("pt-BR")}</td></tr>`).join(""):'<tr><td colspan="4" class="muted">Ningu\xE9m pontuou ainda. Seja o primeiro!</td></tr>'}catch(n){D("ranking-body").innerHTML=`<tr><td colspan="4" class="muted">${wn(n.message)}</td></tr>`}}#h(e){e&&(D("chip-name").textContent=e.username,D("chip-avatar").textContent=e.username[0].toUpperCase(),D("chip-coins").textContent=e.coins.toLocaleString("pt-BR"),this.screen==="hub"&&this.tab==="shop"&&this.#l())}#u(){D("pause-resume").addEventListener("click",()=>this.game.resume()),D("pause-restart").addEventListener("click",()=>this.game.restart()),D("pause-exit").addEventListener("click",()=>this.game.exitToMenu()),D("pause-options").addEventListener("click",()=>{this.tab="options",this.show("hub")}),D("resume-play").addEventListener("click",()=>this.game.resume()),D("resume-exit").addEventListener("click",()=>this.game.exitToMenu())}showPause(e){D("pause-info").textContent=e,this.show("pause")}};var p_={circuito:"Circuito",salto:"Salto de Pirapora"},Co=class{constructor(){this.started=!1,this.paused=!1,this.editMode=!0,this.pausedAt=0,this.vehicleId=Mn.defaultVehicle,this.physicsInput={accel:!1,brake:!1,handbrake:!1,steer:0},this.physicsAccumulator=0,this.shownLap=0,this.exploringShown=null,this.keyLabelsVersion=0,this.availableActionsBuilder=()=>this.#d(),this.cameraContext={menuOpen:!0,vehicleState:wh,vehicleModel:null,cockpitOffset:null,onFoot:!1,playerBody:null},this.audioContext={engineLevel:0,throttle:0,engineOn:!1,skid:0,sound:null},this.settings=new Fa(Math.min(...Object.values(rt).map(t=>t.colors.length))),rt[this.settings.vehicleId]&&(this.vehicleId=this.settings.vehicleId),this.settings.vehicleId=this.vehicleId,this.assets=new Na,this.renderer=new Ua,this.environment=new Ha(this.renderer.renderer),this.scene=this.environment.scene,this.lighting=new Va(this.scene,this.environment.sunDirection),this.cameraController=new ka(this.renderer.canvas),this.applyGraphics(),this.world=new Ja(this.environment,this.assets),this.vehicles=new ro(this.scene,this.assets),this.player=new co(this.scene,this.renderer.canvas),this.smoke=new Qa(this.scene),this.skidMarks=new $a(this.scene,rt[this.vehicleId].tireContacts,this.smoke),this.input=new eo,this.audio=new to(this.settings.volume),this.hud=new ho,this.editModeButton=D("editMode"),this.monitor=new go(this.renderer.renderer),this.diagnostics=new xo(this.monitor),this.diagnostics.setVisible(this.settings.diagnostics),this.benchmark=bo.fromUrl(),this.loop=new Oa((t,n)=>this.frame(t,n)),this.api=new vo,this.session=new yo(this.api),this.mp=new Mo,this.drift=new Ao,this.showroom=new Eo(this.scene.environment),this.showroom.setAspect(innerWidth,innerHeight),this.remote=new wo(this.scene,this.vehicles,this.cameraController.camera,D("tags")),this.matchRoom=null,this.drift.onBank=(t,n)=>this.#r(t,n),this.drift.onFail=()=>this.hud.driftFail(),this.mp.onPlayerJoin=t=>{this.remote.add(t),this.iface.toast(`${t.name} entrou na sala`)},this.mp.onPlayerLeave=t=>{let n=this.remote.players.get(t)?.name;this.remote.remove(t),n&&this.iface.toast(`${n} saiu da sala`)},this.mp.onState=(t,n,i)=>this.remote.pushState(t,n,i),this.mp.onLook=(t,n)=>this.remote.setLook(t,n),this.mp.onDisconnect=t=>{this.iface.toast(t),this.started&&this.exitToMenu()};let e=(t,n)=>this.hud.message(t,n);this.player.onMessage=e,this.hud.onAction=t=>this.runAction(t),this.menu=new uo(this,{start:()=>this.start(),resume:()=>this.resume(),restart:()=>this.restart(),pause:()=>this.pause(),selectMap:t=>this.selectMap(t),selectVehicle:t=>this.selectVehicle(t),setGearbox:t=>{this.settings.manualGearbox=t,this.controller&&(this.controller.manual=t),this.menu.refresh(),this.saveSettings()},setDriveMode:t=>this.setDriveMode(t,!1),setNight:t=>{this.setNight(t),this.menu.refresh(),this.saveSettings()},setColor:t=>{this.setColor(t),this.menu.refresh(),this.saveSettings()},setVolume:t=>{this.settings.volume=t,this.audio.setVolume(t),this.saveSettings()},setGraphicsQuality:t=>this.setGraphicsPreset(t),setShadowQuality:t=>this.updateGraphics({shadowQuality:t}),setResolutionScale:t=>this.updateGraphics({resolutionScale:t}),setLowering:t=>{this.setLowering(t),this.saveSettings()},setDiagnostics:t=>{this.settings.diagnostics=t,this.diagnostics.setVisible(t),this.menu.refresh(),this.saveSettings()},setRenderDistance:t=>this.updateGraphics({renderDistance:t})}),this.iface=new Ro(this),this.gpsMap=new fo(this),this.vehicleCustomization=new mo({canvas:this.renderer.canvas,getCamera:()=>this.cameraController.camera,getVehicle:()=>this.vehicle,getPlayerBody:()=>this.player.body,onInteract:t=>{t==="toggleDoor"&&this.vehicle&&(this.vehicle.doorTarget=this.vehicle.doorTarget?0:1)},onOpenChange:t=>{this.input.releaseAll(),this.player.firstPerson.setEnabled(!t&&this.playing&&!this.player.inVehicle&&!this.paused&&!this.gpsMap.open)}}),this.#l(),this.touch=new po(this),D("bmodo").addEventListener("pointerdown",t=>{t.preventDefault(),this.setDriveMode(!this.settings.driftMode,!0)}),D("editMode").addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),this.player.inVehicle||this.setEditMode(!this.editMode)}),addEventListener("resize",()=>this.resize()),this.resize()}get vehicle(){return this.vehicles.vehicle}get controller(){return this.vehicles.controller}get vehicleReady(){return!!this.vehicles.vehicle}get vehicleColors(){return rt[this.vehicleId].colors}get playing(){return this.started&&this.vehicleReady&&!this.paused}get focus(){return this.player.focus(this.controller?this.controller.state:wh)}async load(){this.hud.setDriveModeButton(this.settings.driftMode),this.setNight(this.settings.night),this.iface.loading("Carregando\u2026");try{await this.selectMap(this.settings.mapId,{initial:!0})}catch(e){console.error(e),this.settings.mapId!==Mn.defaultMap&&(this.settings.mapId=Mn.defaultMap,await this.selectMap(Mn.defaultMap,{initial:!0}))}this.menu.refresh(),this.loop.start();try{await this.vehicles.spawn(this.vehicleId)}catch(e){this.iface.loading("Erro ao carregar o modelo 3D."),console.error(e);return}if(this.#a(null),this.showroom.show(this.vehicle),this.iface.loading(!1),this.benchmark){this.session.offline=!0,await this.benchmark.start(this);return}await this.#e()}async#e(){if(!this.api.available)return this.enterOffline();try{await this.#t(await this.api.me())}catch(e){e.status===401?this.iface.showAuth("",!1):this.iface.showAuth("Servidor indispon\xEDvel. Voc\xEA pode jogar offline, sem salvar progresso.",!0)}}async authenticate(e,t,n){let i=e==="login"?await this.api.login(t,n):await this.api.register(t,n);await this.#t(i)}async#t(e){if(this.session.offline=!1,this.iface.setOffline(!1),this.session.catalog||(this.session.catalog=await this.api.catalog()),this.session.set(e),this.setEditMode(!1,!0),e.needsStarter)return this.iface.show("starter");await this.#n(),this.iface.show("hub")}async chooseStarter(e){this.session.set(await this.api.chooseStarter(e)),await this.#n(),this.iface.show("hub"),this.iface.toast(`Bem-vindo! O ${rt[e].name} agora \xE9 seu.`,"ok")}async#n(){let e=this.session.profile.selectedCar;e&&e!==this.vehicleId?await this.selectVehicle(e):this.applyProfileLook()}applyProfileLook(){this.session.loggedIn&&this.vehicle&&this.vehicle.applyLook(this.session.look(this.vehicleId))}async setActiveCar(e){this.session.set(await this.api.selectCar(e)),await this.selectVehicle(e),this.onLookChanged(),this.iface.screen==="hub"&&this.iface.showTab(this.iface.tab)}onLookChanged(){this.applyProfileLook(),this.mp.announceLook()}enterOffline(){this.session.offline=!0,this.iface.setOffline(!0),D("chip-name").textContent="Modo offline",D("chip-avatar").textContent="?",this.iface.show("hub")}async logout(){this.started&&this.exitToMenu(),this.mp.disconnect();try{await this.api.logout()}catch{}this.session.profile=null,this.iface.showAuth("",!1)}async playSolo(e){await this.#i(e,null)}async playRoom(e,t){if(!this.session.loggedIn)throw new Error("Entre na sua conta para jogar online.");this.iface.loading("Conectando\u2026");let n;try{n=await this.mp.join(e,t)}catch(i){throw this.iface.loading(!1),i}this.remote.clear();try{await this.#i(n.room.map,n.room)}catch(i){throw this.mp.leave(),i}for(let i of n.players)this.remote.add(i)}async#i(e,t){this.started&&this.#s(),this.iface.loading("Montando o mapa\u2026");try{await this.selectMap(e)}finally{this.iface.loading(!1)}this.matchRoom=t,this.showroom.release(this.scene),this.#c(!1),this.start()}matchDescription(){let e=p_[this.world.mapId]||"";return this.matchRoom?`${this.matchRoom.isPrivate?`Sala "${this.matchRoom.name}"`:"Sala global"} \xB7 ${e} \xB7 ${this.remote.count+1} jogador(es)`:`Treino solo \xB7 ${e}`}#s(){this.mp.leave(),this.remote.clear(),this.matchRoom=null,this.started=!1,this.paused=!1,this.drift.reset(),this.hud.hide(),this.gpsMap.open&&this.gpsMap.hide(),this.input.releaseAll(),this.audio.suspend(),this.vehicleCustomization.close(),this.player.firstPerson.pointerLocked&&this.player.firstPerson.exitPointerLock(),this.player.inVehicle||this.player.enter(this.vehicle,this.controller),this.controller.stopEngine(),this.controller.resetMotion(),this.vehicle.doorTarget=0}exitToMenu(){this.#s(),this.showroom.show(this.vehicle),this.iface.tab="play",this.iface.show("hub")}async#r(e,t){if(this.hud.driftBanked(e),!!this.session.loggedIn)try{let n=await this.api.bankDrift(e,t);this.session.setCoins(n.coins),this.hud.setCoins(n.coins),this.iface.toast(`Drift de ${e.toLocaleString("pt-BR")} pts: +${n.coinsEarned} moedas${n.newRecord?" \xB7 novo recorde!":""}`,"gold")}catch(n){this.iface.toast("Drift n\xE3o registrado: "+n.message)}}#o(e){let t=e.state;return(t.brake?sn.BRAKE:0)|(t.reverse?sn.REVERSE:0)|e.lightsMode<<sn.LIGHTS_SHIFT|(e.indicators&1?sn.IND_L:0)|(e.indicators&2?sn.IND_R:0)|(e.engineOn?sn.ENGINE:0)}#a(e){let t=this.controller,n=this.vehicles.config;t.manual=this.settings.manualGearbox,t.onMessage=(i,s)=>this.hud.message(i,s),t.onBlink=i=>this.audio.playBlink(i),t.setDriftMode(this.settings.driftMode),this.environment.night&&!t.lightsMode&&(t.lightsMode=1),this.session?.loggedIn?this.applyProfileLook():(this.setColor(this.settings.colorIndex),this.setLowering(this.settings.lowering[this.vehicleId]??0)),this.skidMarks.setWheelPoints(n.tireContacts),e?(Object.assign(t.state,e),t.resetMotion(),this.cameraController.heading=e.h):this.#c(!1),this.player.inVehicle&&this.player.sitIn(this.vehicle),this.prewarmShaders()}async selectVehicle(e){if(!rt[e]||e===this.vehicleId&&this.vehicle||this.loadingVehicle)return;this.loadingVehicle=!0;let t=this.controller?.state,n=t?{x:t.x,z:t.z,h:t.h}:null;this.iface.loading("Carregando "+rt[e].name+"\u2026");try{this.player.character.root.removeFromParent(),await this.vehicles.spawn(e),this.vehicleId=e,this.settings.vehicleId=e,this.#a(n),this.player.inVehicle||this.player.character.standIn(this.scene,this.player.body.x,this.player.body.z,this.player.body.h),this.started||this.showroom.show(this.vehicle),this.saveSettings(),this.menu.refresh()}catch(i){console.error(i),this.iface.toast("Erro ao carregar o modelo 3D."),this.vehicle&&this.player.inVehicle&&this.player.sitIn(this.vehicle)}finally{this.loadingVehicle=!1,this.iface.loading(!1)}}#l(){let e=this.input;e.isPlaying=()=>this.playing,e.interceptor=(n,i)=>this.gpsMap.open?((n==="Escape"||e.bindings.map.includes(n))&&(i.preventDefault(),this.gpsMap.hide()),!0):this.menu.capture?(i.preventDefault(),this.menu.captureKey(n),!0):!1,e.onEscape=()=>{if(this.vehicleCustomization.open){this.vehicleCustomization.close();return}if(!this.player.inVehicle&&this.player.firstPerson.pointerLocked){this.player.firstPerson.exitPointerLock();return}this.menu.handleEscape()||!this.started||(this.paused?this.iface.screen==="hub"?this.iface.showPause(this.matchDescription()):this.resume():this.pause())};let t=()=>this.controller;e.on("sigL",()=>t().toggleIndicator(1)),e.on("sigR",()=>t().toggleIndicator(2)),e.on("hazard",()=>t().toggleIndicator(3)),e.on("lights",()=>t().cycleLights()),e.on("night",()=>this.toggleNight()),e.on("cam",()=>this.cameraController.toggleMode()),e.on("reset",()=>this.#c(!0)),e.on("map",()=>{this.vehicleCustomization.open||this.gpsMap.show(this.focus)}),e.on("paint",()=>this.#u()),e.on("up",()=>{this.player.inVehicle&&t().shiftUp()}),e.on("dn",()=>{this.player.inVehicle&&t().shiftDown()}),e.on("man",()=>t().toggleGearbox()),e.on("acao",()=>this.primaryAction()),e.on("partida",()=>this.toggleIgnition()),e.on("diag",()=>{this.settings.diagnostics=this.diagnostics.toggle(),this.saveSettings()}),e.on("modo",()=>this.setDriveMode(!this.settings.driftMode,!0)),e.on("edit",()=>{!this.player.inVehicle&&!this.session.loggedIn&&this.setEditMode(!this.editMode)})}start(){if(document.body.classList.contains("touch"))try{document.documentElement.requestFullscreen?.()?.then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}catch{}this.started=!0,this.paused=!1,this.iface.hide(),this.hud.show(),this.hud.showCoins(this.session.loggedIn?this.session.coins:null),this.drift.reset(),this.audio.init(),this.player.exit(this.vehicle,this.controller,this.world.map),this.player.firstPerson.reset(this.player.body.h),this.player.firstPerson.setEnabled(!0),this.cameraController.heading=this.player.body.h,this.cameraController.mode=gi.COCKPIT,this.updateHelp(),this.hud.message("Pressione "+this.input.label("partida")+" para dar partida",4),this.hud.fadeHelpLater()}pause(){this.paused=!0,this.vehicleCustomization.close(),this.pausedAt=performance.now(),this.input.releaseAll(),this.saveSettings(),this.iface.showPause(this.matchDescription()),this.audio.suspend()}resume(){this.paused=!1,this.world.map.shiftTimers(performance.now()-this.pausedAt),this.iface.hide(),this.audio.resume(),this.loop.resetClock()}restart(){this.#c(!1),this.player.inVehicle||this.enterVehicle(),this.#h("0:00.000"),this.resume()}#c(e){let t=this.controller;t&&(this.world.map.spawn(t.state,e),t.resetMotion(),this.cameraController.heading=t.state.h)}#h(e){this.world.map.resetLaps(),this.shownLap=1,this.hud.setLap(1),this.hud.setTimerText(e)}async selectMap(e,{initial:t=!1}={}){if(!(this.world.mapId===e||this.loadingMap)){this.loadingMap=!0;try{let n=await this.world.setMap(e);this.environment.setRenderDistance(this.settings.renderDistance),this.applyWorldDetail(),this.settings.mapId=e,n.onLap=i=>{this.hud.message(i),this.hud.setBest(n.best)},n.gps&&(n.gps.onArrive=()=>this.hud.message("Voc\xEA chegou ao destino!",3)),this.hud.setMapMode(n),this.hud.setDestination(n.gps),this.hud.setBest(n.best),this.skidMarks.clear(),this.#h(n.gps?"":"0:00.000"),this.#c(!1),this.updateHelp(),this.prewarmShaders(),t||(this.saveSettings(),this.menu.refresh())}finally{this.loadingMap=!1}}}setDriveMode(e,t){this.settings.driftMode=e,this.controller?.setDriftMode(e),this.hud.setDriveModeButton(e),t&&this.hud.message(e?"Modo drift: tra\xE7\xE3o livre, carro solto":"Modo normal: controle de tra\xE7\xE3o e estabilidade ligados",2.2),this.saveSettings(),this.menu.refresh()}setNight(e){this.settings.night=e,this.environment.setNight(e),this.lighting.setNight(e),this.world.map?.setNight(e),this.applyWorldDetail(),e&&this.controller&&!this.controller.lightsMode&&(this.controller.lightsMode=1)}toggleNight(){this.setNight(!this.settings.night)}setLowering(e){this.settings.lowering[this.vehicleId]=Math.min(Math.max(e,0),1);let t=rt[this.vehicleId].suspension?.maxDrop??0;this.vehicle?.setRideHeight(this.settings.lowering[this.vehicleId]*t),this.menu?.refreshLowering?.()}get loweringCm(){let e=rt[this.vehicleId].suspension?.maxDrop??0;return Math.round((this.settings.lowering[this.vehicleId]??0)*e*100)}#u(){if(this.session.loggedIn)return this.hud.message("Pinte o carro na Oficina (menu principal)",2);this.setColor(this.settings.colorIndex+1)}setColor(e){let t=this.vehicleColors.length;this.settings.colorIndex=(e%t+t)%t,this.vehicle?.setColor(this.vehicleColors[this.settings.colorIndex])}setGraphicsPreset(e){let t=mi[e];this.updateGraphics({graphicsQuality:e,shadowQuality:e,renderDistance:t.renderDistance,resolutionScale:1})}updateGraphics(e){Object.assign(this.settings,e),this.applyGraphics(),this.menu.refresh(),this.saveSettings()}applyGraphics(){let e=this.settings,t=this.renderer.renderer;this.renderer.setQuality(e.graphicsQuality),this.renderer.setResolutionScale(e.resolutionScale),this.lighting.setShadowQuality(e.shadowQuality),t.shadowMap.enabled!==e.shadows&&(t.shadowMap.enabled=e.shadows,this.scene.traverse(n=>{if(n.material)for(let i of[].concat(n.material))i.needsUpdate=!0}),this.started!==void 0&&queueMicrotask(()=>this.prewarmShaders())),this.environment.setRenderDistance(e.renderDistance),this.cameraController.setRenderDistance(e.renderDistance),this.resize(),this.applyWorldDetail()}prewarmShaders(){let e=this.vehicle;if(!e)return;let t=this.cameraController.camera,n=e.headlights,i=n.map(s=>s.visible);for(let s of[!0,!1]){for(let a of n)a.visible=s;this.renderer.render(this.scene,t)}n.forEach((s,a)=>s.visible=i[a])}applyWorldDetail(){let e=mi[this.settings.graphicsQuality]||mi.medium;this.world?.map?.setDetail?.({viewDistance:this.environment.scene.fog.far,lodDistance:e.lodDistance,farDensity:e.farDensity,shadows:this.settings.shadows})}saveSettings(){this.benchmark||(this.controller&&(this.settings.manualGearbox=this.controller.manual),this.settings.save())}updateHelp(){this.keyLabelsVersion=this.keyLabelsVersion+1&65535;let e=i=>this.input.label(i),t=!!this.world.map?.gps,n=this.player&&!this.player.inVehicle?this.editMode?" \xB7 Mire numa pe\xE7a e clique para personalizar":" \xB7 Clique na porta para abrir/fechar":"";this.hud.setHelp(e("cam")+" c\xE2mera \xB7 "+e("reset")+(t?" voltar \xE0 rua \xB7 ":" voltar \xE0 pista \xB7 ")+e("lights")+" far\xF3is \xB7 "+e("man")+" manual \xB7 "+e("acao")+" porta/entrar/sair \xB7 "+e("partida")+" partida \xB7 "+(this.player&&!this.player.inVehicle?e("edit")+" edi\xE7\xE3o \xB7 ":"")+(t?e("map")+" mapa/GPS \xB7 ":"")+n+" \xB7 Esc menu")}setEditMode(e,t=!1){this.vehicleCustomization.open&&this.vehicleCustomization.close(),this.editMode=e,this.vehicleCustomization.setEditMode(e);let n=D("editMode");n.textContent=e?"\u270E Edi\xE7\xE3o: ligada":"\u270E Edi\xE7\xE3o: desligada",n.setAttribute("aria-pressed",String(e)),this.updateHelp(),t||this.hud.message(e?"Modo edi\xE7\xE3o ativado":"Modo edi\xE7\xE3o desativado",1.5)}toggleIgnition(){!this.player.inVehicle||!this.vehicleReady||this.controller.toggleIgnition()&&this.audio.playStarter()}enterVehicle(){this.vehicleCustomization.close(),this.player.enter(this.vehicle,this.controller),this.player.firstPerson.setEnabled(!1),this.cameraController.mode=gi.COCKPIT,this.cameraController.reset(this.controller.state.h),this.updateHelp(),this.hud.message("Pressione "+this.input.label("partida")+" (ou \u{1F511}) para dar partida",3)}exitVehicle(){this.player.exit(this.vehicle,this.controller,this.world.map)&&(this.player.firstPerson.reset(this.player.body.h),this.player.firstPerson.setEnabled(!0),this.cameraController.mode=gi.COCKPIT,this.cameraController.reset(this.player.body.h),this.updateHelp())}runAction(e){this.playing&&(e==="abrir"?this.vehicle.doorTarget=1:e==="fechar"?this.vehicle.doorTarget=0:e==="entrar"?this.enterVehicle():e==="sair"?this.exitVehicle():e==="partida"?this.toggleIgnition():e==="map"?this.gpsMap.show(this.focus):e==="cam"?this.cameraController.toggleMode():e==="reset"?this.#c(!0):e==="paint"?this.#u():e==="acao"&&this.primaryAction())}primaryAction(){let e=this.#d().find(t=>t[0]&&t[0]!=="partida");e&&this.runAction(e[0])}#d(){return this.player.availableActions(this.vehicle,this.controller,e=>this.input.label(e))}resize(){this.renderer.setSize(innerWidth,innerHeight),this.cameraController.setAspect(innerWidth/innerHeight),this.showroom?.setAspect(innerWidth,innerHeight)}frame(e,t){let n=this.world.map,i=this.controller,s=this.vehicle,a=this.monitor,o=this.benchmark;if(!n)return;if(o?.running&&(e=o.fixedDt),a.frameStart(t),!this.started){this.showroom.update(e),a.begin("render"),this.showroom.render(this.renderer.renderer),a.end("render"),a.frameEnd();return}let c=!this.player.inVehicle&&this.started&&!this.paused&&!this.gpsMap.open;this.vehicleCustomization.setActive(c),this.player.firstPerson.setEnabled(c&&!this.vehicleCustomization.open);let l=c&&!this.session.loggedIn;if(l!==this.exploringShown&&(this.exploringShown=l,this.editModeButton.hidden=!l),this.playing&&!this.gpsMap.open){a.begin("physics"),this.#f(e,n),o?.running&&o.afterPhysics(),this.remote.count&&this.remote.collideLocal(i.state),this.drift.update(e,i,this.player.inVehicle),a.end("physics"),a.begin("world"),this.player.inVehicle||this.player.update(e,this.input,n,i.state,this.vehicles.config),i.updateEngine(e),this.hud.updateActions(this.player.actionsKey(s,i)|this.keyLabelsVersion<<8,this.availableActionsBuilder);let d=this.focus;n.gps&&(n.gps.update(d,e),this.hud.setDestination(n.gps)),this.skidMarks.update(i.state,n),this.hud.setTimerText(n.timerText(t,d)),n.currentLap!==void 0&&n.currentLap!==this.shownLap&&(this.shownLap=n.currentLap,this.hud.setLap(this.shownLap)),this.hud.draw(i,n,d),this.hud.setDrift(this.drift);let f=this.audioContext;f.engineLevel=i.engineSound,f.throttle=i.throttle,f.engineOn=i.engineOn,f.skid=this.skidMarks.intensity,f.sound=this.vehicles.config.sound,this.audio.update(f),this.hud.tick(e)}s&&(s.update(e,i),this.player.setVisible(!(this.cameraController.mode===gi.COCKPIT&&this.started&&!this.paused)),i.updateIndicators(e),this.hud.setSignals(i)),this.smoke.update(e),this.remote.update(e),this.mp.inRoom&&i&&this.mp.sendState(t,i.state,this.#o(i));let h=this.cameraContext;h.menuOpen=!this.playing,h.vehicleState=i?i.state:wh,h.vehicleModel=s?s.model:null,h.cockpitOffset=rt[this.vehicleId].cockpitCamera,h.onFoot=!this.player.inVehicle,h.playerBody=this.player.body,h.fpsYaw=this.player.firstPerson.yaw,h.fpsPitch=this.player.firstPerson.pitch,h.fpsEye=this.player.firstPerson.getCameraPosition(this.player.body),this.cameraController.update(e,h),this.vehicleCustomization.update(e);let u=this.focus;this.environment.followCamera(this.cameraController.camera),n.updateView?.(this.cameraController.camera,u),this.lighting.follow(u.x,u.z),this.remote.updateLabels(this.playing&&!this.gpsMap.open),this.playing&&!this.gpsMap.open&&a.end("world"),a.begin("render"),a.beginGpu(),this.renderer.render(this.scene,this.cameraController.camera),a.endGpu(),a.end("render"),a.frameEnd(),o?.endFrame()}#f(e,t){let n=this.controller,i=this.input,s=this.player.inVehicle,a=this.physicsInput;for(a.accel=s&&n.engineOn&&i.isDown("accel"),a.brake=s&&i.isDown("brake"),a.handbrake=!s||i.isDown("hb"),a.steer=s?(i.isDown("right")?1:0)-(i.isDown("left")?1:0):0,this.physicsAccumulator+=e;this.physicsAccumulator>=Mn.physicsStep;)io.step(n,a,t,Mn.physicsStep),this.physicsAccumulator-=Mn.physicsStep}},wh={x:0,z:0,h:0,vx:0,vz:0};var ef=new Co;ef.load();var Qd=new URLSearchParams(location.search);(Qd.has("bench")||Qd.has("debug"))&&(window.__game=ef);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
