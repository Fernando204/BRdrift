(()=>{var Jc="170";var _d=0,nh=1,vd=2;var Mu=1,Zc=2,wn=3,dn=0,It=1,_t=2,Zn=0,Yi=1,kr=2,ih=3,sh=4,yd=5,bi=100,Md=101,Sd=102,wd=103,Ad=104,Td=200,Ed=201,Rd=202,Cd=203,Fo=204,ko=205,Pd=206,Id=207,Ld=208,Dd=209,Nd=210,Ud=211,Od=212,Fd=213,kd=214,Bo=0,zo=1,Vo=2,Zi=3,Ho=4,Go=5,Wo=6,Xo=7,Su=0,Bd=1,zd=2,Qn=0,Vd=1,Hd=2,Gd=3,Qc=4,Wd=5,Xd=6,qd=7,rh="attached",Yd="detached",wu=300,Qi=301,$i=302,qo=303,Yo=304,da=306,Cn=1e3,Tn=1001,Fs=1002,Lt=1003,$c=1004;var Xi=1005;var Bt=1006,Ds=1007;var un=1008;var Pn=1009,Au=1010,Tu=1011,ks=1012,el=1013,_i=1014,an=1015,Ks=1016,tl=1017,nl=1018,es=1020,Eu=35902,Ru=1021,Cu=1022,jt=1023,Pu=1024,Iu=1025,ji=1026,ts=1027,il=1028,sl=1029,Lu=1030,rl=1031;var al=1033,Dr=33776,Nr=33777,Ur=33778,Or=33779,jo=35840,Ko=35841,Jo=35842,Zo=35843,Qo=36196,$o=37492,ec=37496,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,ac=37813,oc=37814,cc=37815,lc=37816,hc=37817,uc=37818,dc=37819,fc=37820,pc=37821,Fr=36492,mc=36494,gc=36495,Du=36283,bc=36284,xc=36285,_c=36286;var ns=2300,is=2301,eo=2302,ah=2400,oh=2401,ch=2402,jd=2500;var Nu=0,fa=1,Js=2,Kd=3200,Jd=3201;var Uu=0,Zd=1,jn="",xt="srgb",Dt="srgb-linear",pa="linear",nt="srgb";var Ti=7680;var lh=519,Qd=512,$d=513,ef=514,Ou=515,tf=516,nf=517,sf=518,rf=519,vc=35044,ol=35048;var hh="300 es",En=2e3,Br=2001,$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uh=1234567,Ns=Math.PI/180,ss=180/Math.PI;function on(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function cl(r,e){return(r%e+e)%e}function af(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function of(r,e,t){return r!==e?(t-r)/(e-r):0}function Us(r,e,t){return(1-t)*r+t*e}function cf(r,e,t,n){return Us(r,e,1-Math.exp(-t*n))}function lf(r,e=1){return e-Math.abs(cl(r,e*2)-e)}function hf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function uf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function df(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ff(r,e){return r+Math.random()*(e-r)}function pf(r){return r*(.5-Math.random())}function mf(r){r!==void 0&&(uh=r);let e=uh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gf(r){return r*Ns}function bf(r){return r*ss}function xf(r){return(r&r-1)===0&&r!==0}function _f(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function vf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yf(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ma={DEG2RAD:Ns,RAD2DEG:ss,generateUUID:on,clamp:At,euclideanModulo:cl,mapLinear:af,inverseLerp:of,lerp:Us,damp:cf,pingpong:lf,smoothstep:hf,smootherstep:uf,randInt:df,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:bf,isPowerOfTwo:xf,ceilPowerOfTwo:_f,floorPowerOfTwo:vf,setQuaternionFromProperEuler:yf,normalize:et,denormalize:rn},Ie=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],_=i[1],v=i[4],x=i[7],C=i[2],A=i[5],E=i[8];return s[0]=a*b+o*_+c*C,s[3]=a*m+o*v+c*A,s[6]=a*p+o*x+c*E,s[1]=l*b+h*_+u*C,s[4]=l*m+h*v+u*A,s[7]=l*p+h*x+u*E,s[2]=d*b+f*_+g*C,s[5]=d*m+f*v+g*A,s[8]=d*p+f*x+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},to=new Ue;function Fu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Bs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mf(){let r=Bs("canvas");return r.style.display="block",r}var dh={};function Is(r){r in dh||(dh[r]=!0,console.warn(r))}function Sf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function wf(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Af(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Xe={enabled:!0,workingColorSpace:Dt,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===nt&&(r.r=Rn(r.r),r.g=Rn(r.g),r.b=Rn(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?pa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Rn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ki(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var fh=[.64,.33,.3,.6,.15,.06],ph=[.2126,.7152,.0722],mh=[.3127,.329],gh=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[Dt]:{primaries:fh,whitePoint:mh,transfer:pa,toXYZ:gh,fromXYZ:bh,luminanceCoefficients:ph,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:fh,whitePoint:mh,transfer:nt,toXYZ:gh,fromXYZ:bh,luminanceCoefficients:ph,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}});var Ei,yc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ei===void 0&&(Ei=Bs("canvas")),Ei.width=e.width,Ei.height=e.height;let n=Ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Rn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tf=0,zr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(no(i[a].image)):s.push(no(i[a]))}else s=no(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function no(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ef=0,Tt=class r extends $n{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Tn,i=Tn,s=Bt,a=un,o=jt,c=Pn,l=r.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=on(),this.name="",this.source=new zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=wu;Tt.DEFAULT_ANISOTROPY=1;var je=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,x=(f+1)/2,C=(p+1)/2,A=(h+d)/4,E=(u+b)/4,R=(g+m)/4;return v>x&&v>C?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=E/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=R/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends $n{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vr=class extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sc=class extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],g=s[a+2],b=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*b,_=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),A=Math.atan2(C,p*_);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}let x=o*_;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+b*x,m===1-o){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},io=new P,xh=new mt,Kt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,tn):tn.fromBufferAttribute(s,a),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(e.matrixWorld),this.union(nr)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),ir.subVectors(this.max,vs),Ri.subVectors(e.a,vs),Ci.subVectors(e.b,vs),Pi.subVectors(e.c,vs),Hn.subVectors(Ci,Ri),Gn.subVectors(Pi,Ci),hi.subVectors(Ri,Pi);let t=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-hi.z,hi.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,hi.z,0,-hi.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-hi.y,hi.x,0];return!so(t,Ri,Ci,Pi,ir)||(t=[1,0,0,0,1,0,0,0,1],!so(t,Ri,Ci,Pi,ir))?!1:(sr.crossVectors(Hn,Gn),t=[sr.x,sr.y,sr.z],so(t,Ri,Ci,Pi,ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xn=[new P,new P,new P,new P,new P,new P,new P,new P],tn=new P,nr=new Kt,Ri=new P,Ci=new P,Pi=new P,Hn=new P,Gn=new P,hi=new P,vs=new P,ir=new P,sr=new P,ui=new P;function so(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ui.fromArray(r,s);let o=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),c=e.dot(ui),l=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Rf=new Kt,ys=new P,ro=new P,Wt=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);let t=ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(ro)),this.expandByPoint(ys.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_n=new P,ao=new P,rr=new P,Wn=new P,oo=new P,ar=new P,co=new P,rs=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ao.copy(e).add(t).multiplyScalar(.5),rr.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(ao);let s=e.distanceTo(t)*.5,a=-this.direction.dot(rr),o=Wn.dot(this.direction),c=-Wn.dot(rr),l=Wn.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ao).addScaledVector(rr,d),f}intersectSphere(e,t){_n.subVectors(e.center,this.origin);let n=_n.dot(this.direction),i=_n.dot(_n)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,i,s){oo.subVectors(t,e),ar.subVectors(n,e),co.crossVectors(oo,ar);let a=this.direction.dot(co),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);let c=o*this.direction.dot(ar.crossVectors(Wn,ar));if(c<0)return null;let l=o*this.direction.dot(oo.cross(Wn));if(l<0||c+l>a)return null;let h=-o*Wn.dot(co);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class r{constructor(e,t,n,i,s,a,o,c,l,h,u,d,f,g,b,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,b,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,b,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ii.setFromMatrixColumn(e,0).length(),s=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cf,e,Pf)}lookAt(e,t,n){let i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Xn.crossVectors(n,Ht),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Xn.crossVectors(n,Ht)),Xn.normalize(),or.crossVectors(Ht,Xn),i[0]=Xn.x,i[4]=or.x,i[8]=Ht.x,i[1]=Xn.y,i[5]=or.y,i[9]=Ht.y,i[2]=Xn.z,i[6]=or.z,i[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],_=n[3],v=n[7],x=n[11],C=n[15],A=i[0],E=i[4],R=i[8],S=i[12],M=i[1],I=i[5],k=i[9],F=i[13],G=i[2],j=i[6],V=i[10],Z=i[14],W=i[3],ae=i[7],oe=i[11],ve=i[15];return s[0]=a*A+o*M+c*G+l*W,s[4]=a*E+o*I+c*j+l*ae,s[8]=a*R+o*k+c*V+l*oe,s[12]=a*S+o*F+c*Z+l*ve,s[1]=h*A+u*M+d*G+f*W,s[5]=h*E+u*I+d*j+f*ae,s[9]=h*R+u*k+d*V+f*oe,s[13]=h*S+u*F+d*Z+f*ve,s[2]=g*A+b*M+m*G+p*W,s[6]=g*E+b*I+m*j+p*ae,s[10]=g*R+b*k+m*V+p*oe,s[14]=g*S+b*F+m*Z+p*ve,s[3]=_*A+v*M+x*G+C*W,s[7]=_*E+v*I+x*j+C*ae,s[11]=_*R+v*k+x*V+C*oe,s[15]=_*S+v*F+x*Z+C*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+s*a*d-i*a*f+i*l*h-s*c*h)+m*(+t*l*u-t*o*f-s*a*u+n*a*f+s*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],_=u*m*l-b*d*l+b*c*f-o*m*f-u*c*p+o*d*p,v=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,x=h*b*l-g*u*l+g*o*f-a*b*f-h*o*p+a*u*p,C=g*u*c-h*b*c-g*o*d+a*b*d+h*o*m-a*u*m,A=t*_+n*v+i*x+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return e[0]=_*E,e[1]=(b*d*s-u*m*s-b*i*f+n*m*f+u*i*p-n*d*p)*E,e[2]=(o*m*s-b*c*s+b*i*l-n*m*l-o*i*p+n*c*p)*E,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*f-n*c*f)*E,e[4]=v*E,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*E,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*E,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*f+t*c*f)*E,e[8]=x*E,e[9]=(g*u*s-h*b*s-g*n*f+t*b*f+h*n*p-t*u*p)*E,e[10]=(a*b*s-g*o*s+g*n*l-t*b*l-a*n*p+t*o*p)*E,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*f-t*o*f)*E,e[12]=C*E,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*E,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*E,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,b=a*h,m=a*u,p=o*u,_=c*l,v=c*h,x=c*u,C=n.x,A=n.y,E=n.z;return i[0]=(1-(b+p))*C,i[1]=(f+x)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+_)*A,i[7]=0,i[8]=(g+v)*E,i[9]=(m-_)*E,i[10]=(1-(d+b))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Ii.set(i[0],i[1],i[2]).length(),a=Ii.set(i[4],i[5],i[6]).length(),o=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],nn.copy(this);let l=1/s,h=1/a,u=1/o;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=En){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,g;if(o===En)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Br)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=En){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*l,f=(n+i)*h,g,b;if(o===En)g=(a+s)*u,b=-2*u;else if(o===Br)g=s*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ii=new P,nn=new Ce,Cf=new P(0,0,0),Pf=new P(1,1,1),Xn=new P,or=new P,Ht=new P,_h=new Ce,vh=new mt,fn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vh.setFromEuler(this),this.setFromQuaternion(vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},If=0,yh=new P,Li=new mt,vn=new Ce,cr=new P,Ms=new P,Lf=new P,Df=new mt,Mh=new P(1,0,0),Sh=new P(0,1,0),wh=new P(0,0,1),Ah={type:"added"},Nf={type:"removed"},Di={type:"childadded",child:null},lo={type:"childremoved",child:null},gt=class r extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new P,t=new fn,n=new mt,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Ue}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cr.copy(e):cr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Ms,cr,this.up):vn.lookAt(cr,Ms,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(vn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ah),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nf),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ah),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,Lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};gt.DEFAULT_UP=new P(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=new P,yn=new P,ho=new P,Mn=new P,Ni=new P,Ui=new P,Th=new P,uo=new P,fo=new P,po=new P,mo=new je,go=new je,bo=new je,Kn=class r{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),sn.subVectors(e,t),i.cross(sn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){sn.subVectors(i,t),yn.subVectors(n,t),ho.subVectors(e,t);let a=sn.dot(sn),o=sn.dot(yn),c=sn.dot(ho),l=yn.dot(yn),h=yn.dot(ho),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(o,Mn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return mo.setScalar(0),go.setScalar(0),bo.setScalar(0),mo.fromBufferAttribute(e,t),go.fromBufferAttribute(e,n),bo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(mo,s.x),a.addScaledVector(go,s.y),a.addScaledVector(bo,s.z),a}static isFrontFacing(e,t,n,i){return sn.subVectors(n,t),yn.subVectors(e,t),sn.cross(yn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),sn.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Ni.subVectors(i,n),Ui.subVectors(s,n),uo.subVectors(e,n);let c=Ni.dot(uo),l=Ui.dot(uo);if(c<=0&&l<=0)return t.copy(n);fo.subVectors(e,i);let h=Ni.dot(fo),u=Ui.dot(fo);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ni,a);po.subVectors(e,s);let f=Ni.dot(po),g=Ui.dot(po);if(g>=0&&f<=g)return t.copy(s);let b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ui,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Th.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Th,o);let p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Ni,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function xo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=cl(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=xo(a,s,e+1/3),this.g=xo(a,s,e),this.b=xo(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Xe.fromWorkingColorSpace(Pt.copy(this),e),Math.round(At(Pt.r*255,0,255))*65536+Math.round(At(Pt.g*255,0,255))*256+Math.round(At(Pt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Pt.copy(this),t);let n=Pt.r,i=Pt.g,s=Pt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=xt){Xe.fromWorkingColorSpace(Pt.copy(this),e);let t=Pt.r,n=Pt.g,i=Pt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(lr);let n=Us(qn.h,lr.h,t),i=Us(qn.s,lr.s,t),s=Us(qn.l,lr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new fe;fe.NAMES=ku;var Uf=0,zt=class extends $n{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=on(),this.name="",this.blending=Yi,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=ko,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yt=class extends zt{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new P,hr=new Ie,it=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXY(t,hr.x,hr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}};var Gr=class extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wr=class extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}},Of=0,Yt=new Ce,_o=new gt,Oi=new P,Gt=new Kt,Ss=new Kt,wt=new P,pt=class r extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fu(e)?Wr:Gr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ue().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yt.makeRotationFromQuaternion(e),this.applyMatrix4(Yt),this}rotateX(e){return Yt.makeRotationX(e),this.applyMatrix4(Yt),this}rotateY(e){return Yt.makeRotationY(e),this.applyMatrix4(Yt),this}rotateZ(e){return Yt.makeRotationZ(e),this.applyMatrix4(Yt),this}translate(e,t,n){return Yt.makeTranslation(e,t,n),this.applyMatrix4(Yt),this}scale(e,t,n){return Yt.makeScale(e,t,n),this.applyMatrix4(Yt),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ss.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Gt.min,Ss.min),Gt.expandByPoint(wt),wt.addVectors(Gt.max,Ss.max),Gt.expandByPoint(wt)):(Gt.expandByPoint(Ss.min),Gt.expandByPoint(Ss.max))}Gt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)wt.fromBufferAttribute(o,l),c&&(Oi.fromBufferAttribute(e,l),wt.add(Oi)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new P,c[R]=new P;let l=new P,h=new P,u=new P,d=new Ie,f=new Ie,g=new Ie,b=new P,m=new P;function p(R,S,M){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[R].add(b),o[S].add(b),o[M].add(b),c[R].add(m),c[S].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,S=_.length;R<S;++R){let M=_[R],I=M.start,k=M.count;for(let F=I,G=I+k;F<G;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new P,x=new P,C=new P,A=new P;function E(R){C.fromBufferAttribute(i,R),A.copy(C);let S=o[R];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),x.crossVectors(A,S);let I=x.dot(c[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,I)}for(let R=0,S=_.length;R<S;++R){let M=_[R],I=M.start,k=M.count;for(let F=I,G=I+k;F<G;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new P,s=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new it(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eh=new Ce,di=new rs,ur=new Wt,Rh=new P,dr=new P,fr=new P,pr=new P,vo=new P,mr=new P,Ch=new P,gr=new P,ke=class extends gt{constructor(e=new pt,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){mr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(vo.fromBufferAttribute(u,e),a?mr.addScaledVector(vo,h):mr.addScaledVector(vo.sub(t),h))}t.add(mr)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(ur.containsPoint(di.origin)===!1&&(di.intersectSphere(ur,Rh)===null||di.origin.distanceToSquared(Rh)>(e.far-e.near)**2))&&(Eh.copy(s).invert(),di.copy(e.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,C=v;x<C;x+=3){let A=o.getX(x),E=o.getX(x+1),R=o.getX(x+2);i=br(this,p,e,n,l,h,u,A,E,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let _=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);i=br(this,a,e,n,l,h,u,_,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,C=v;x<C;x+=3){let A=x,E=x+1,R=x+2;i=br(this,p,e,n,l,h,u,A,E,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let _=m,v=m+1,x=m+2;i=br(this,a,e,n,l,h,u,_,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Ff(r,e,t,n,i,s,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===dn,o),c===null)return null;gr.copy(o),gr.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(gr);return l<t.near||l>t.far?null:{distance:l,point:gr.clone(),object:r}}function br(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,dr),r.getVertexPosition(c,fr),r.getVertexPosition(l,pr);let h=Ff(r,e,t,n,dr,fr,pr,Ch);if(h){let u=new P;Kn.getBarycoord(Ch,dr,fr,pr,u),i&&(h.uv=Kn.getInterpolatedAttribute(i,o,c,l,u,new Ie)),s&&(h.uv1=Kn.getInterpolatedAttribute(s,o,c,l,u,new Ie)),a&&(h.normal=Kn.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new P,materialIndex:0};Kn.getNormal(dr,fr,pr,d.normal),h.face=d,h.barycoord=u}return h}var Jt=class r extends pt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(b,m,p,_,v,x,C,A,E,R,S){let M=x/E,I=C/R,k=x/2,F=C/2,G=A/2,j=E+1,V=R+1,Z=0,W=0,ae=new P;for(let oe=0;oe<V;oe++){let ve=oe*I-F;for(let De=0;De<j;De++){let qe=De*M-k;ae[b]=qe*_,ae[m]=ve*v,ae[p]=G,l.push(ae.x,ae.y,ae.z),ae[b]=0,ae[m]=0,ae[p]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(De/E),u.push(1-oe/R),Z+=1}}for(let oe=0;oe<R;oe++)for(let ve=0;ve<E;ve++){let De=d+ve+j*oe,qe=d+ve+j*(oe+1),q=d+(ve+1)+j*(oe+1),$=d+(ve+1)+j*oe;c.push(De,qe,$),c.push(qe,q,$),W+=6}o.addGroup(f,W,S),f+=W,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function as(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(r){let e={};for(let t=0;t<r.length;t++){let n=as(r[t]);for(let i in n)e[i]=n[i]}return e}function kf(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Bu(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var Bf={clone:as,merge:Ot},zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pn=class extends zt{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zf,this.fragmentShader=Vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xr=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=En}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yn=new P,Ph=new Ie,Ih=new Ie,vt=class extends Xr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ss*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,Ph,Ih),t.subVectors(Ih,Ph)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fi=-90,ki=1,wc=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new vt(Fi,ki,e,t);i.layers=this.layers,this.add(i);let s=new vt(Fi,ki,e,t);s.layers=this.layers,this.add(s);let a=new vt(Fi,ki,e,t);a.layers=this.layers,this.add(a);let o=new vt(Fi,ki,e,t);o.layers=this.layers,this.add(o);let c=new vt(Fi,ki,e,t);c.layers=this.layers,this.add(c);let l=new vt(Fi,ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Br)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qr=class extends Tt{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ac=class extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jt(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Zn});s.uniforms.tEquirect.value=t;let a=new ke(i,s),o=t.minFilter;return t.minFilter===un&&(t.minFilter=Bt),new wc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},yo=new P,Hf=new P,Gf=new Ue,An=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=yo.subVectors(n,t).cross(Hf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(yo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gf.getNormalMatrix(e),i=this.coplanarPoint(yo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new Wt,xr=new P,zs=class{constructor(e=new An,t=new An,n=new An,i=new An,s=new An,a=new An){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],_=i[13],v=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,m-f,x-p).normalize(),n[1].setComponents(c+s,d+l,m+f,x+p).normalize(),n[2].setComponents(c+a,d+h,m+g,x+_).normalize(),n[3].setComponents(c-a,d-h,m-g,x-_).normalize(),n[4].setComponents(c-o,d-u,m-b,x-v).normalize(),t===En)n[5].setComponents(c+o,d+u,m+b,x+v).normalize();else if(t===Br)n[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(xr.x=i.normal.x>0?e.max.x:e.min.x,xr.y=i.normal.y>0?e.max.y:e.min.y,xr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Wf(r){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],b=u[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let b=u[f];r.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var os=class r extends pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let v=0;v<l;v++){let x=v*u-s;g.push(x,-_,0),b.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let v=_+l*p,x=_+l*(p+1),C=_+1+l*(p+1),A=_+1+l*p;f.push(v,x,A),f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(b,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,np=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ip=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,rp=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pp=`#define PI 3.141592653589793
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
} // validated`,mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gp=`vec3 transformedNormal = objectNormal;
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
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lp=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
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
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hp=`PhysicalMaterial material;
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
#endif`,Gp=`struct PhysicalMaterial {
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
}`,Wp=`
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
#endif`,Xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,em=`#if defined( USE_POINTS_UV )
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
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,im=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
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
#endif`,pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cm=`float getShadowMask() {
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
}`,Pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xm=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Qm=`#define DISTANCE
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
}`,$m=`#define DISTANCE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`uniform float scale;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#define LAMBERT
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
}`,og=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,lg=`#define MATCAP
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
}`,hg=`#define NORMAL
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
}`,ug=`#define NORMAL
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
}`,dg=`#define PHONG
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
}`,fg=`#define PHONG
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
}`,pg=`#define STANDARD
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
}`,mg=`#define STANDARD
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
}`,gg=`#define TOON
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
}`,bg=`#define TOON
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
}`,xg=`uniform float size;
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
}`,_g=`uniform vec3 diffuse;
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
}`,vg=`#include <common>
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
}`,yg=`uniform vec3 color;
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
}`,Mg=`uniform float rotation;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Xf,alphahash_pars_fragment:qf,alphamap_fragment:Yf,alphamap_pars_fragment:jf,alphatest_fragment:Kf,alphatest_pars_fragment:Jf,aomap_fragment:Zf,aomap_pars_fragment:Qf,batching_pars_vertex:$f,batching_vertex:ep,begin_vertex:tp,beginnormal_vertex:np,bsdfs:ip,iridescence_fragment:sp,bumpmap_pars_fragment:rp,clipping_planes_fragment:ap,clipping_planes_pars_fragment:op,clipping_planes_pars_vertex:cp,clipping_planes_vertex:lp,color_fragment:hp,color_pars_fragment:up,color_pars_vertex:dp,color_vertex:fp,common:pp,cube_uv_reflection_fragment:mp,defaultnormal_vertex:gp,displacementmap_pars_vertex:bp,displacementmap_vertex:xp,emissivemap_fragment:_p,emissivemap_pars_fragment:vp,colorspace_fragment:yp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Ap,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Fp,envmap_vertex:Ep,fog_vertex:Rp,fog_pars_vertex:Cp,fog_fragment:Pp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Lp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Up,lights_pars_begin:Op,lights_toon_fragment:kp,lights_toon_pars_fragment:Bp,lights_phong_fragment:zp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Hp,lights_physical_pars_fragment:Gp,lights_fragment_begin:Wp,lights_fragment_maps:Xp,lights_fragment_end:qp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:Jp,map_fragment:Zp,map_pars_fragment:Qp,map_particle_fragment:$p,map_particle_pars_fragment:em,metalnessmap_fragment:tm,metalnessmap_pars_fragment:nm,morphinstance_vertex:im,morphcolor_vertex:sm,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:om,normal_fragment_begin:cm,normal_fragment_maps:lm,normal_pars_fragment:hm,normal_pars_vertex:um,normal_vertex:dm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:pm,clearcoat_normal_fragment_maps:mm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:bm,opaque_fragment:xm,packing:_m,premultiplied_alpha_fragment:vm,project_vertex:ym,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Em,shadowmap_vertex:Rm,shadowmask_pars_fragment:Cm,skinbase_vertex:Pm,skinning_pars_vertex:Im,skinning_vertex:Lm,skinnormal_vertex:Dm,specularmap_fragment:Nm,specularmap_pars_fragment:Um,tonemapping_fragment:Om,tonemapping_pars_fragment:Fm,transmission_fragment:km,transmission_pars_fragment:Bm,uv_pars_fragment:zm,uv_pars_vertex:Vm,uv_vertex:Hm,worldpos_vertex:Gm,background_vert:Wm,background_frag:Xm,backgroundCube_vert:qm,backgroundCube_frag:Ym,cube_vert:jm,cube_frag:Km,depth_vert:Jm,depth_frag:Zm,distanceRGBA_vert:Qm,distanceRGBA_frag:$m,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ng,linedashed_frag:ig,meshbasic_vert:sg,meshbasic_frag:rg,meshlambert_vert:ag,meshlambert_frag:og,meshmatcap_vert:cg,meshmatcap_frag:lg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:fg,meshphysical_vert:pg,meshphysical_frag:mg,meshtoon_vert:gg,meshtoon_frag:bg,points_vert:xg,points_frag:_g,shadow_vert:vg,shadow_frag:yg,sprite_vert:Mg,sprite_frag:Sg},re={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},hn={basic:{uniforms:Ot([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ot([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new fe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ot([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ot([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ot([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new fe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ot([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ot([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ot([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ot([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ot([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ot([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ot([re.common,re.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ot([re.lights,re.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};hn.physical={uniforms:Ot([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var _r={r:0,b:0,g:0},pi=new fn,wg=new Ce;function Ag(r,e,t,n,i,s,a){let o=new fe(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function b(_){let v=!1,x=g(_);x===null?p(o,c):x&&x.isColor&&(p(x,1),v=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,v){let x=g(v);x&&(x.isCubeTexture||x.mapping===da)?(h===void 0&&(h=new ke(new Jt(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:as(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),pi.copy(v.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(pi)),h.material.toneMapped=Xe.getTransfer(x.colorSpace)!==nt,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ke(new os(2,2),new pn({name:"BackgroundMaterial",uniforms:as(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(_r,Bu(r)),n.buffers.color.setClear(_r.r,_r.g,_r.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:b,addToRenderList:m}}function Tg(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(M,I,k,F,G){let j=!1,V=u(F,k,I);s!==V&&(s=V,l(s.object)),j=f(M,F,k,G),j&&g(M,F,k,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(M,I,k,F),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,I,k){let F=k.wireframe===!0,G=n[M.id];G===void 0&&(G={},n[M.id]=G);let j=G[I.id];j===void 0&&(j={},G[I.id]=j);let V=j[F];return V===void 0&&(V=d(c()),j[F]=V),V}function d(M){let I=[],k=[],F=[];for(let G=0;G<t;G++)I[G]=0,k[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,I,k,F){let G=s.attributes,j=I.attributes,V=0,Z=k.getAttributes();for(let W in Z)if(Z[W].location>=0){let oe=G[W],ve=j[W];if(ve===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),oe===void 0||oe.attribute!==ve||ve&&oe.data!==ve.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(M,I,k,F){let G={},j=I.attributes,V=0,Z=k.getAttributes();for(let W in Z)if(Z[W].location>=0){let oe=j[W];oe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor));let ve={};ve.attribute=oe,oe&&oe.data&&(ve.data=oe.data),G[W]=ve,V++}s.attributes=G,s.attributesNum=V,s.index=F}function b(){let M=s.newAttributes;for(let I=0,k=M.length;I<k;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let k=s.newAttributes,F=s.enabledAttributes,G=s.attributeDivisors;k[M]=1,F[M]===0&&(r.enableVertexAttribArray(M),F[M]=1),G[M]!==I&&(r.vertexAttribDivisor(M,I),G[M]=I)}function _(){let M=s.newAttributes,I=s.enabledAttributes;for(let k=0,F=I.length;k<F;k++)I[k]!==M[k]&&(r.disableVertexAttribArray(k),I[k]=0)}function v(M,I,k,F,G,j,V){V===!0?r.vertexAttribIPointer(M,I,k,G,j):r.vertexAttribPointer(M,I,k,F,G,j)}function x(M,I,k,F){b();let G=F.attributes,j=k.getAttributes(),V=I.defaultAttributeValues;for(let Z in j){let W=j[Z];if(W.location>=0){let ae=G[Z];if(ae===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){let oe=ae.normalized,ve=ae.itemSize,De=e.get(ae);if(De===void 0)continue;let qe=De.buffer,q=De.type,$=De.bytesPerElement,pe=q===r.INT||q===r.UNSIGNED_INT||ae.gpuType===el;if(ae.isInterleavedBufferAttribute){let ce=ae.data,Te=ce.stride,we=ae.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)p(W.location+Fe,ce.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)m(W.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let Fe=0;Fe<W.locationSize;Fe++)v(W.location+Fe,ve/W.locationSize,q,oe,Te*$,(we+ve/W.locationSize*Fe)*$,pe)}else{if(ae.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)p(W.location+ce,ae.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ce=0;ce<W.locationSize;ce++)m(W.location+ce);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let ce=0;ce<W.locationSize;ce++)v(W.location+ce,ve/W.locationSize,q,oe,ve*$,ve/W.locationSize*ce*$,pe)}}else if(V!==void 0){let oe=V[Z];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(W.location,oe);break;case 3:r.vertexAttrib3fv(W.location,oe);break;case 4:r.vertexAttrib4fv(W.location,oe);break;default:r.vertexAttrib1fv(W.location,oe)}}}}_()}function C(){R();for(let M in n){let I=n[M];for(let k in I){let F=I[k];for(let G in F)h(F[G].object),delete F[G];delete I[k]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let k in I){let F=I[k];for(let G in F)h(F[G].object),delete F[G];delete I[k]}delete n[M.id]}function E(M){for(let I in n){let k=n[I];if(k[M.id]===void 0)continue;let F=k[M.id];for(let G in F)h(F[G].object),delete F[G];delete k[M.id]}}function R(){S(),a=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function Eg(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*d[b];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Rg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==jt&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let R=E===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Pn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==an&&!R)}function c(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function Cg(r){let e=this,t=null,n=0,i=!1,s=!1,a=new An,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{let _=s?0:n,v=_*4,x=p.clippingState||null;c.value=x,x=h(g,d,v,f);for(let C=0;C!==v;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let p=f+b*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==b;++v,x+=4)a.copy(u[v]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Pg(r){let e=new WeakMap;function t(a,o){return o===qo?a.mapping=Qi:o===Yo&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===qo||o===Yo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ac(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var cs=class extends Xr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qi=4,Lh=[.125,.215,.35,.446,.526,.582],xi=20,Mo=new cs,Dh=new fe,So=null,wo=0,Ao=0,To=!1,gi=(1+Math.sqrt(5))/2,Bi=1/gi,Nh=[new P(-gi,Bi,0),new P(gi,Bi,0),new P(-Bi,0,gi),new P(Bi,0,gi),new P(0,gi,-Bi),new P(0,gi,Bi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ls=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){So=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(So,wo,Ao),this._renderer.xr.enabled=To,e.scissorTest=!1,vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===$i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),So=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),To=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Ks,format:jt,colorSpace:Dt,depthBuffer:!1},i=Uh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uh(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(s)),this._blurMaterial=Lg(s,e,t)}return i}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,Mo)}_sceneToCubeUV(e,t,n,i){let o=new vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dh),h.toneMapping=Qn,h.autoClear=!1;let f=new yt({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new ke(new Jt,f),b=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(Dh),b=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let v=this._cubeSize;vr(i,_*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Qi||e.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;vr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Mo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nh[(i-s-1)%Nh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ke(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*xi-1),b=s/g,m=isFinite(s)?1+Math.floor(h*b):xi;m>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);let p=[],_=0;for(let E=0;E<xi;++E){let R=E/b,S=Math.exp(-R*R/2);p.push(S),E===0?_+=S:E<m&&(_+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let x=this._sizeLods[i],C=3*x*(i>v-qi?i-v+qi:0),A=4*(this._cubeSize-x);vr(t,C,A,3*x,2*x),c.setRenderTarget(t),c.render(u,Mo)}};function Ig(r){let e=[],t=[],n=[],i=r,s=r-qi+1+Lh.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>r-qi?c=Lh[a-r+qi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,b=3,m=2,p=1,_=new Float32Array(b*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){let E=A%3*2/3-1,R=A>2?0:-1,S=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];_.set(S,b*g*A),v.set(d,m*g*A);let M=[A,A,A,A,A,A];x.set(M,p*g*A)}let C=new pt;C.setAttribute("position",new it(_,b)),C.setAttribute("uv",new it(v,m)),C.setAttribute("faceIndex",new it(x,p)),e.push(C),i>qi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uh(r,e,t){let n=new In(r,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Lg(r,e,t){let n=new Float32Array(xi),i=new P(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Oh(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Fh(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}function Dg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===qo||c===Yo,h=c===Qi||c===$i;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ls(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new ls(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ng(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Is("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ug(r,e,t,n){let i={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],r.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,b=0;if(f!==null){let _=f.array;b=f.version;for(let v=0,x=_.length;v<x;v+=3){let C=_[v+0],A=_[v+1],E=_[v+2];d.push(C,A,A,E,E,C)}}else if(g!==void 0){let _=g.array;b=g.version;for(let v=0,x=_.length/3-1;v<x;v+=3){let C=v+0,A=v+1,E=v+2;d.push(C,A,A,E,E,C)}}else return;let m=new(Fu(d)?Wr:Gr)(d,1);m.version=b;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Og(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,b){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,b,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*b[_];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Fg(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kg(r,e,t){let n=new WeakMap,i=new je;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),b===!0&&(v=3);let x=o.attributes.position.count*v,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*C*4*u),E=new Vr(A,x,C,u);E.type=an,E.needsUpdate=!0;let R=v*4;for(let M=0;M<u;M++){let I=m[M],k=p[M],F=_[M],G=x*C*4*M;for(let j=0;j<I.count;j++){let V=j*R;f===!0&&(i.fromBufferAttribute(I,j),A[G+V+0]=i.x,A[G+V+1]=i.y,A[G+V+2]=i.z,A[G+V+3]=0),g===!0&&(i.fromBufferAttribute(k,j),A[G+V+4]=i.x,A[G+V+5]=i.y,A[G+V+6]=i.z,A[G+V+7]=0),b===!0&&(i.fromBufferAttribute(F,j),A[G+V+8]=i.x,A[G+V+9]=i.y,A[G+V+10]=i.z,A[G+V+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new Ie(x,C)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Bg(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var Yr=class extends Tt{constructor(e,t,n,i,s,a,o,c,l,h=ji){if(h!==ji&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=_i),n===void 0&&h===ts&&(n=es),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vu=new Tt,kh=new Yr(1,1),Hu=new Vr,Gu=new Sc,Wu=new qr,Bh=[],zh=[],Vh=new Float32Array(16),Hh=new Float32Array(9),Gh=new Float32Array(4);function ps(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Bh[i];if(s===void 0&&(s=new Float32Array(i),Bh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Mt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function St(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ga(r,e){let t=zh[e];t===void 0&&(t=new Int32Array(e),zh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function zg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Vg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2fv(this.addr,e),St(t,e)}}function Hg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;r.uniform3fv(this.addr,e),St(t,e)}}function Gg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4fv(this.addr,e),St(t,e)}}function Wg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Gh.set(n),r.uniformMatrix2fv(this.addr,!1,Gh),St(t,n)}}function Xg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Hh.set(n),r.uniformMatrix3fv(this.addr,!1,Hh),St(t,n)}}function qg(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;Vh.set(n),r.uniformMatrix4fv(this.addr,!1,Vh),St(t,n)}}function Yg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function jg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2iv(this.addr,e),St(t,e)}}function Kg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3iv(this.addr,e),St(t,e)}}function Jg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4iv(this.addr,e),St(t,e)}}function Zg(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qg(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;r.uniform2uiv(this.addr,e),St(t,e)}}function $g(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;r.uniform3uiv(this.addr,e),St(t,e)}}function e0(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;r.uniform4uiv(this.addr,e),St(t,e)}}function t0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(kh.compareFunction=Ou,s=kh):s=Vu,t.setTexture2D(e||s,i)}function n0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gu,i)}function i0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wu,i)}function s0(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hu,i)}function r0(r){switch(r){case 5126:return zg;case 35664:return Vg;case 35665:return Hg;case 35666:return Gg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return Zg;case 36294:return Qg;case 36295:return $g;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function a0(r,e){r.uniform1fv(this.addr,e)}function o0(r,e){let t=ps(e,this.size,2);r.uniform2fv(this.addr,t)}function c0(r,e){let t=ps(e,this.size,3);r.uniform3fv(this.addr,t)}function l0(r,e){let t=ps(e,this.size,4);r.uniform4fv(this.addr,t)}function h0(r,e){let t=ps(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function u0(r,e){let t=ps(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function d0(r,e){let t=ps(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function f0(r,e){r.uniform1iv(this.addr,e)}function p0(r,e){r.uniform2iv(this.addr,e)}function m0(r,e){r.uniform3iv(this.addr,e)}function g0(r,e){r.uniform4iv(this.addr,e)}function b0(r,e){r.uniform1uiv(this.addr,e)}function x0(r,e){r.uniform2uiv(this.addr,e)}function _0(r,e){r.uniform3uiv(this.addr,e)}function v0(r,e){r.uniform4uiv(this.addr,e)}function y0(r,e,t){let n=this.cache,i=e.length,s=ga(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Vu,s[a])}function M0(r,e,t){let n=this.cache,i=e.length,s=ga(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Gu,s[a])}function S0(r,e,t){let n=this.cache,i=e.length,s=ga(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Wu,s[a])}function w0(r,e,t){let n=this.cache,i=e.length,s=ga(t,i);Mt(n,s)||(r.uniform1iv(this.addr,s),St(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hu,s[a])}function A0(r){switch(r){case 5126:return a0;case 35664:return o0;case 35665:return c0;case 35666:return l0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return b0;case 36294:return x0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return w0}}var Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=r0(t.type)}},Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A0(t.type)}},Rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Eo=/(\w+)(\])?(\[|\.)?/g;function Wh(r,e){r.seq.push(e),r.map[e.id]=e}function T0(r,e,t){let n=r.name,i=n.length;for(Eo.lastIndex=0;;){let s=Eo.exec(n),a=Eo.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Wh(t,l===void 0?new Tc(o,r,e):new Ec(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Rc(o),Wh(t,u)),t=u}}}var Ji=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);T0(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Xh(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var E0=37297,R0=0;function C0(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var qh=new Ue;function P0(r){Xe._getMatrix(qh,Xe.workingColorSpace,r);let e=`mat3( ${qh.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case pa:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Yh(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+C0(r.getShaderSource(e),a)}else return i}function I0(r,e){let t=P0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function L0(r,e){let t;switch(e){case Vd:t="Linear";break;case Hd:t="Reinhard";break;case Gd:t="Cineon";break;case Qc:t="ACESFilmic";break;case Xd:t="AgX";break;case qd:t="Neutral";break;case Wd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yr=new P;function D0(){Xe.getLuminanceCoefficients(yr);let r=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function U0(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function O0(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ls(r){return r!==""}function jh(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var F0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(r){return r.replace(F0,B0)}var k0=new Map;function B0(r,e){let t=Oe[e];if(t===void 0){let n=k0.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cc(t)}var z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(r){return r.replace(z0,V0)}function V0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zh(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function H0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zc?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function G0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qi:case $i:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case $i:e="ENVMAP_MODE_REFRACTION";break}return e}function X0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Su:e="ENVMAP_BLENDING_MULTIPLY";break;case Bd:e="ENVMAP_BLENDING_MIX";break;case zd:e="ENVMAP_BLENDING_ADD";break}return e}function q0(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Y0(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=H0(t),l=G0(t),h=W0(t),u=X0(t),d=q0(t),f=N0(t),g=U0(s),b=i.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`)):(m=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),p=[Zh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Qn?L0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),D0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=Cc(a),a=jh(a,t),a=Kh(a,t),o=Cc(o),o=jh(o,t),o=Kh(o,t),a=Jh(a),o=Jh(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=_+m+a,x=_+p+o,C=Xh(i,i.VERTEX_SHADER,v),A=Xh(i,i.FRAGMENT_SHADER,x);i.attachShader(b,C),i.attachShader(b,A),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function E(I){if(r.debug.checkShaderErrors){let k=i.getProgramInfoLog(b).trim(),F=i.getShaderInfoLog(C).trim(),G=i.getShaderInfoLog(A).trim(),j=!0,V=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,C,A);else{let Z=Yh(i,C,"vertex"),W=Yh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+Z+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||G==="")&&(V=!1);V&&(I.diagnostics={runnable:j,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(C),i.deleteShader(A),R=new Ji(i,b),S=O0(i,b)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(b,E0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R0++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=A,this}var j0=0,Pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ic(e),t.set(e,n)),n}},Ic=class{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}};function K0(r,e,t,n,i,s,a){let o=new Hr,c=new Pc,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,I,k,F){let G=k.fog,j=F.geometry,V=S.isMeshStandardMaterial?k.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),W=Z&&Z.mapping===da?Z.image.height:null,ae=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let oe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ve=oe!==void 0?oe.length:0,De=0;j.morphAttributes.position!==void 0&&(De=1),j.morphAttributes.normal!==void 0&&(De=2),j.morphAttributes.color!==void 0&&(De=3);let qe,q,$,pe;if(ae){let $e=hn[ae];qe=$e.vertexShader,q=$e.fragmentShader}else qe=S.vertexShader,q=S.fragmentShader,c.update(S),$=c.getVertexShaderID(S),pe=c.getFragmentShaderID(S);let ce=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,lt=!!S.map,We=!!S.matcap,ht=!!Z,D=!!S.aoMap,Et=!!S.lightMap,Be=!!S.bumpMap,ze=!!S.normalMap,Se=!!S.displacementMap,tt=!!S.emissiveMap,Me=!!S.metalnessMap,T=!!S.roughnessMap,y=S.anisotropy>0,O=S.clearcoat>0,K=S.dispersion>0,J=S.iridescence>0,Y=S.sheen>0,me=S.transmission>0,se=y&&!!S.anisotropyMap,he=O&&!!S.clearcoatMap,Ve=O&&!!S.clearcoatNormalMap,Q=O&&!!S.clearcoatRoughnessMap,ue=J&&!!S.iridescenceMap,Ae=J&&!!S.iridescenceThicknessMap,Ee=Y&&!!S.sheenColorMap,de=Y&&!!S.sheenRoughnessMap,He=!!S.specularMap,Le=!!S.specularColorMap,Qe=!!S.specularIntensityMap,L=me&&!!S.transmissionMap,ne=me&&!!S.thicknessMap,H=!!S.gradientMap,X=!!S.alphaMap,te=S.alphaTest>0,ie=!!S.alphaHash,Re=!!S.extensions,rt=Qn;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(rt=r.toneMapping);let Rt={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:q,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Dt,alphaToCoverage:!!S.alphaToCoverage,map:lt,matcap:We,envMap:ht,envMapMode:ht&&Z.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:Et,bumpMap:Be,normalMap:ze,displacementMap:d&&Se,emissiveMap:tt,normalMapObjectSpace:ze&&S.normalMapType===Zd,normalMapTangentSpace:ze&&S.normalMapType===Uu,metalnessMap:Me,roughnessMap:T,anisotropy:y,anisotropyMap:se,clearcoat:O,clearcoatMap:he,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Q,dispersion:K,iridescence:J,iridescenceMap:ue,iridescenceThicknessMap:Ae,sheen:Y,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:He,specularColorMap:Le,specularIntensityMap:Qe,transmission:me,transmissionMap:L,thicknessMap:ne,gradientMap:H,opaque:S.transparent===!1&&S.blending===Yi&&S.alphaToCoverage===!1,alphaMap:X,alphaTest:te,alphaHash:ie,combine:S.combine,mapUv:lt&&b(S.map.channel),aoMapUv:D&&b(S.aoMap.channel),lightMapUv:Et&&b(S.lightMap.channel),bumpMapUv:Be&&b(S.bumpMap.channel),normalMapUv:ze&&b(S.normalMap.channel),displacementMapUv:Se&&b(S.displacementMap.channel),emissiveMapUv:tt&&b(S.emissiveMap.channel),metalnessMapUv:Me&&b(S.metalnessMap.channel),roughnessMapUv:T&&b(S.roughnessMap.channel),anisotropyMapUv:se&&b(S.anisotropyMap.channel),clearcoatMapUv:he&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&b(S.sheenRoughnessMap.channel),specularMapUv:He&&b(S.specularMap.channel),specularColorMapUv:Le&&b(S.specularColorMap.channel),specularIntensityMapUv:Qe&&b(S.specularIntensityMap.channel),transmissionMapUv:L&&b(S.transmissionMap.channel),thicknessMapUv:ne&&b(S.thicknessMap.channel),alphaMapUv:X&&b(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ze||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(lt||X),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Te,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:lt&&S.map.isVideoTexture===!0&&Xe.getTransfer(S.map.colorSpace)===nt,decodeVideoTextureEmissive:tt&&S.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(S.emissiveMap.colorSpace)===nt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_t,flipSided:S.side===It,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Re&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&S.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(_(M,S),v(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){let M=g[S.type],I;if(M){let k=hn[M];I=Bf.clone(k.uniforms)}else I=S.uniforms;return I}function C(S,M){let I;for(let k=0,F=h.length;k<F;k++){let G=h[k];if(G.cacheKey===M){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Y0(r,M,S,s),h.push(I)),I}function A(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function E(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:R}}function J0(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Z0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $h(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,b,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=b,p.group=m),e++,p}function o(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,b,m){let p=a(u,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Z0),n.length>1&&n.sort(d||Qh),i.length>1&&i.sort(d||Qh)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Q0(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new $h,r.set(n,[a])):i>=s.length?(a=new $h,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function $0(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new fe};break;case"SpotLight":t={position:new P,direction:new P,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function eb(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var tb=0;function nb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ib(r){let e=new $0,t=eb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let i=new P,s=new Ce,a=new Ce;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,_=0,v=0,x=0,C=0,A=0,E=0;l.sort(nb);for(let S=0,M=l.length;S<M;S++){let I=l[S],k=I.color,F=I.intensity,G=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*F,u+=k.g*F,d+=k.b*F;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],F);E++}else if(I.isDirectionalLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,W=t.get(I);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=V,f++}else if(I.isSpotLight){let V=e.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(k).multiplyScalar(F),V.distance=G,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[b]=V;let Z=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,Z.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[b]=Z.matrix,I.castShadow){let W=t.get(I);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[b]=W,n.spotShadowMap[b]=j,x++}b++}else if(I.isRectAreaLight){let V=e.get(I);V.color.copy(k).multiplyScalar(F),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){let V=e.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let Z=I.shadow,W=t.get(I);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=V,g++}else if(I.isHemisphereLight){let V=e.get(I);V.skyColor.copy(I.color).multiplyScalar(F),V.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==b||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==_||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,R.directionalLength=f,R.pointLength=g,R.spotLength=b,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=_,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=E,n.version=tb++)}function c(l,h){let u=0,d=0,f=0,g=0,b=0,m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let v=l[p];if(v.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[b];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function eu(r){let e=new ib(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function sb(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new eu(r),e.set(i,[o])):s>=a.length?(o=new eu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Lc=class extends zt{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dc=class extends zt{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
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
}`;function ob(r,e,t){let n=new zs,i=new Ie,s=new Ie,a=new je,o=new Lc({depthPacking:Jd}),c=new Dc,l={},h=t.maxTextureSize,u={[dn]:It,[It]:dn,[_t]:_t},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:rb,fragmentShader:ab}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new pt;g.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let p=this.type;this.render=function(A,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=r.getRenderTarget(),M=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Zn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let F=p!==wn&&this.type===wn,G=p===wn&&this.type!==wn;for(let j=0,V=A.length;j<V;j++){let Z=A[j],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let ae=W.getFrameExtents();if(i.multiply(ae),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ae.x),i.x=s.x*ae.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ae.y),i.y=s.y*ae.y,W.mapSize.y=s.y)),W.map===null||F===!0||G===!0){let ve=this.type!==wn?{minFilter:Lt,magFilter:Lt}:{};W.map!==null&&W.map.dispose(),W.map=new In(i.x,i.y,ve),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();let oe=W.getViewportCount();for(let ve=0;ve<oe;ve++){let De=W.getViewport(ve);a.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),k.viewport(a),W.updateMatrices(Z,ve),n=W.getFrustum(),x(E,R,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===wn&&_(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,M,I)};function _(A,E){let R=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new In(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,R,d,b,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,R,f,b,null)}function v(A,E,R,S){let M=null,I=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)M=I;else if(M=R.isPointLight===!0?c:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let k=M.uuid,F=E.uuid,G=l[k];G===void 0&&(G={},l[k]=G);let j=G[F];j===void 0&&(j=M.clone(),G[F]=j,E.addEventListener("dispose",C)),M=j}if(M.visible=E.visible,M.wireframe=E.wireframe,S===wn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=r.properties.get(M);k.light=R}return M}function x(A,E,R,S,M){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let F=e.update(A),G=A.material;if(Array.isArray(G)){let j=F.groups;for(let V=0,Z=j.length;V<Z;V++){let W=j[V],ae=G[W.materialIndex];if(ae&&ae.visible){let oe=v(A,ae,S,M);A.onBeforeShadow(r,A,E,R,F,oe,W),r.renderBufferDirect(R,null,F,oe,A,W),A.onAfterShadow(r,A,E,R,F,oe,W)}}}else if(G.visible){let j=v(A,G,S,M);A.onBeforeShadow(r,A,E,R,F,j,null),r.renderBufferDirect(R,null,F,j,A,null),A.onAfterShadow(r,A,E,R,F,j,null)}}let k=A.children;for(let F=0,G=k.length;F<G;F++)x(k[F],E,R,S,M)}function C(A){A.target.removeEventListener("dispose",C);for(let R in l){let S=l[R],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var cb={[Bo]:zo,[Vo]:Wo,[Ho]:Xo,[Zi]:Go,[zo]:Bo,[Wo]:Vo,[Xo]:Ho,[Go]:Zi};function lb(r,e){function t(){let L=!1,ne=new je,H=null,X=new je(0,0,0,0);return{setMask:function(te){H!==te&&!L&&(r.colorMask(te,te,te,te),H=te)},setLocked:function(te){L=te},setClear:function(te,ie,Re,rt,Rt){Rt===!0&&(te*=rt,ie*=rt,Re*=rt),ne.set(te,ie,Re,rt),X.equals(ne)===!1&&(r.clearColor(te,ie,Re,rt),X.copy(ne))},reset:function(){L=!1,H=null,X.set(-1,0,0,0)}}}function n(){let L=!1,ne=!1,H=null,X=null,te=null;return{setReversed:function(ie){if(ne!==ie){let Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT);let rt=te;te=null,this.setClear(rt)}ne=ie},getReversed:function(){return ne},setTest:function(ie){ie?ce(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(ie){H!==ie&&!L&&(r.depthMask(ie),H=ie)},setFunc:function(ie){if(ne&&(ie=cb[ie]),X!==ie){switch(ie){case Bo:r.depthFunc(r.NEVER);break;case zo:r.depthFunc(r.ALWAYS);break;case Vo:r.depthFunc(r.LESS);break;case Zi:r.depthFunc(r.LEQUAL);break;case Ho:r.depthFunc(r.EQUAL);break;case Go:r.depthFunc(r.GEQUAL);break;case Wo:r.depthFunc(r.GREATER);break;case Xo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}X=ie}},setLocked:function(ie){L=ie},setClear:function(ie){te!==ie&&(ne&&(ie=1-ie),r.clearDepth(ie),te=ie)},reset:function(){L=!1,H=null,X=null,te=null,ne=!1}}}function i(){let L=!1,ne=null,H=null,X=null,te=null,ie=null,Re=null,rt=null,Rt=null;return{setTest:function($e){L||($e?ce(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function($e){ne!==$e&&!L&&(r.stencilMask($e),ne=$e)},setFunc:function($e,$t,gn){(H!==$e||X!==$t||te!==gn)&&(r.stencilFunc($e,$t,gn),H=$e,X=$t,te=gn)},setOp:function($e,$t,gn){(ie!==$e||Re!==$t||rt!==gn)&&(r.stencilOp($e,$t,gn),ie=$e,Re=$t,rt=gn)},setLocked:function($e){L=$e},setClear:function($e){Rt!==$e&&(r.clearStencil($e),Rt=$e)},reset:function(){L=!1,ne=null,H=null,X=null,te=null,ie=null,Re=null,rt=null,Rt=null}}}let s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,_=null,v=null,x=null,C=null,A=null,E=new fe(0,0,0),R=0,S=!1,M=null,I=null,k=null,F=null,G=null,j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Z=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=Z>=2);let ae=null,oe={},ve=r.getParameter(r.SCISSOR_BOX),De=r.getParameter(r.VIEWPORT),qe=new je().fromArray(ve),q=new je().fromArray(De);function $(L,ne,H,X){let te=new Uint8Array(4),ie=r.createTexture();r.bindTexture(L,ie),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<H;Re++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ne,0,r.RGBA,1,1,X,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ne+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return ie}let pe={};pe[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(r.DEPTH_TEST),a.setFunc(Zi),Be(!1),ze(nh),ce(r.CULL_FACE),D(Zn);function ce(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function Te(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function we(L,ne){return u[L]!==ne?(r.bindFramebuffer(L,ne),u[L]=ne,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ne),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ne),!0):!1}function Fe(L,ne){let H=f,X=!1;if(L){H=d.get(ne),H===void 0&&(H=[],d.set(ne,H));let te=L.textures;if(H.length!==te.length||H[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,Re=te.length;ie<Re;ie++)H[ie]=r.COLOR_ATTACHMENT0+ie;H.length=te.length,X=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,X=!0);X&&r.drawBuffers(H)}function lt(L){return g!==L?(r.useProgram(L),g=L,!0):!1}let We={[bi]:r.FUNC_ADD,[Md]:r.FUNC_SUBTRACT,[Sd]:r.FUNC_REVERSE_SUBTRACT};We[wd]=r.MIN,We[Ad]=r.MAX;let ht={[Td]:r.ZERO,[Ed]:r.ONE,[Rd]:r.SRC_COLOR,[Fo]:r.SRC_ALPHA,[Nd]:r.SRC_ALPHA_SATURATE,[Ld]:r.DST_COLOR,[Pd]:r.DST_ALPHA,[Cd]:r.ONE_MINUS_SRC_COLOR,[ko]:r.ONE_MINUS_SRC_ALPHA,[Dd]:r.ONE_MINUS_DST_COLOR,[Id]:r.ONE_MINUS_DST_ALPHA,[Ud]:r.CONSTANT_COLOR,[Od]:r.ONE_MINUS_CONSTANT_COLOR,[Fd]:r.CONSTANT_ALPHA,[kd]:r.ONE_MINUS_CONSTANT_ALPHA};function D(L,ne,H,X,te,ie,Re,rt,Rt,$e){if(L===Zn){b===!0&&(Te(r.BLEND),b=!1);return}if(b===!1&&(ce(r.BLEND),b=!0),L!==yd){if(L!==m||$e!==S){if((p!==bi||x!==bi)&&(r.blendEquation(r.FUNC_ADD),p=bi,x=bi),$e)switch(L){case Yi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kr:r.blendFunc(r.ONE,r.ONE);break;case ih:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Yi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case kr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ih:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case sh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}_=null,v=null,C=null,A=null,E.set(0,0,0),R=0,m=L,S=$e}return}te=te||ne,ie=ie||H,Re=Re||X,(ne!==p||te!==x)&&(r.blendEquationSeparate(We[ne],We[te]),p=ne,x=te),(H!==_||X!==v||ie!==C||Re!==A)&&(r.blendFuncSeparate(ht[H],ht[X],ht[ie],ht[Re]),_=H,v=X,C=ie,A=Re),(rt.equals(E)===!1||Rt!==R)&&(r.blendColor(rt.r,rt.g,rt.b,Rt),E.copy(rt),R=Rt),m=L,S=!1}function Et(L,ne){L.side===_t?Te(r.CULL_FACE):ce(r.CULL_FACE);let H=L.side===It;ne&&(H=!H),Be(H),L.blending===Yi&&L.transparent===!1?D(Zn):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);let X=L.stencilWrite;o.setTest(X),X&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),tt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function ze(L){L!==_d?(ce(r.CULL_FACE),L!==I&&(L===nh?r.cullFace(r.BACK):L===vd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),I=L}function Se(L){L!==k&&(V&&r.lineWidth(L),k=L)}function tt(L,ne,H){L?(ce(r.POLYGON_OFFSET_FILL),(F!==ne||G!==H)&&(r.polygonOffset(ne,H),F=ne,G=H)):Te(r.POLYGON_OFFSET_FILL)}function Me(L){L?ce(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function T(L){L===void 0&&(L=r.TEXTURE0+j-1),ae!==L&&(r.activeTexture(L),ae=L)}function y(L,ne,H){H===void 0&&(ae===null?H=r.TEXTURE0+j-1:H=ae);let X=oe[H];X===void 0&&(X={type:void 0,texture:void 0},oe[H]=X),(X.type!==L||X.texture!==ne)&&(ae!==H&&(r.activeTexture(H),ae=H),r.bindTexture(L,ne||pe[L]),X.type=L,X.texture=ne)}function O(){let L=oe[ae];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){qe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),qe.copy(L))}function de(L){q.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function He(L,ne){let H=l.get(ne);H===void 0&&(H=new WeakMap,l.set(ne,H));let X=H.get(L);X===void 0&&(X=r.getUniformBlockIndex(ne,L.name),H.set(L,X))}function Le(L,ne){let X=l.get(ne).get(L);c.get(ne)!==X&&(r.uniformBlockBinding(ne,X,L.__bindingPointIndex),c.set(ne,X))}function Qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ae=null,oe={},u={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,_=null,v=null,x=null,C=null,A=null,E=new fe(0,0,0),R=0,S=!1,M=null,I=null,k=null,F=null,G=null,qe.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ce,disable:Te,bindFramebuffer:we,drawBuffers:Fe,useProgram:lt,setBlending:D,setMaterial:Et,setFlipSided:Be,setCullFace:ze,setLineWidth:Se,setPolygonOffset:tt,setScissorTest:Me,activeTexture:T,bindTexture:y,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ue,texImage3D:Ae,updateUBOMapping:He,uniformBlockBinding:Le,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:he,scissor:Ee,viewport:de,reset:Qe}}function tu(r,e,t,n){let i=hb(n);switch(t){case Ru:return r*e;case Pu:return r*e;case Iu:return r*e*2;case il:return r*e/i.components*i.byteLength;case sl:return r*e/i.components*i.byteLength;case Lu:return r*e*2/i.components*i.byteLength;case rl:return r*e*2/i.components*i.byteLength;case Cu:return r*e*3/i.components*i.byteLength;case jt:return r*e*4/i.components*i.byteLength;case al:return r*e*4/i.components*i.byteLength;case Dr:case Nr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Or:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ko:case Zo:return Math.max(r,16)*Math.max(e,8)/4;case jo:case Jo:return Math.max(r,8)*Math.max(e,8)/2;case Qo:case $o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case oc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case lc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case uc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fr:case mc:case gc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Du:case bc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xc:case _c:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hb(r){switch(r){case Pn:case Au:return{byteLength:1,components:1};case ks:case Tu:case Ks:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case _i:case el:case an:return{byteLength:4,components:1};case Eu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ub(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):Bs("canvas")}function b(T,y,O){let K=1,J=Me(T);if((J.width>O||J.height>O)&&(K=O/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Y=Math.floor(K*J.width),me=Math.floor(K*J.height);u===void 0&&(u=g(Y,me));let se=y?g(Y,me):u;return se.width=Y,se.height=me,se.getContext("2d").drawImage(T,0,0,Y,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+me+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){r.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(T,y,O,K,J=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=y;if(y===r.RED&&(O===r.FLOAT&&(Y=r.R32F),O===r.HALF_FLOAT&&(Y=r.R16F),O===r.UNSIGNED_BYTE&&(Y=r.R8)),y===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.R8UI),O===r.UNSIGNED_SHORT&&(Y=r.R16UI),O===r.UNSIGNED_INT&&(Y=r.R32UI),O===r.BYTE&&(Y=r.R8I),O===r.SHORT&&(Y=r.R16I),O===r.INT&&(Y=r.R32I)),y===r.RG&&(O===r.FLOAT&&(Y=r.RG32F),O===r.HALF_FLOAT&&(Y=r.RG16F),O===r.UNSIGNED_BYTE&&(Y=r.RG8)),y===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RG8UI),O===r.UNSIGNED_SHORT&&(Y=r.RG16UI),O===r.UNSIGNED_INT&&(Y=r.RG32UI),O===r.BYTE&&(Y=r.RG8I),O===r.SHORT&&(Y=r.RG16I),O===r.INT&&(Y=r.RG32I)),y===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),O===r.UNSIGNED_INT&&(Y=r.RGB32UI),O===r.BYTE&&(Y=r.RGB8I),O===r.SHORT&&(Y=r.RGB16I),O===r.INT&&(Y=r.RGB32I)),y===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),O===r.UNSIGNED_INT&&(Y=r.RGBA32UI),O===r.BYTE&&(Y=r.RGBA8I),O===r.SHORT&&(Y=r.RGBA16I),O===r.INT&&(Y=r.RGBA32I)),y===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),y===r.RGBA){let me=J?pa:Xe.getTransfer(K);O===r.FLOAT&&(Y=r.RGBA32F),O===r.HALF_FLOAT&&(Y=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Y=me===nt?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(T,y){let O;return T?y===null||y===_i||y===es?O=r.DEPTH24_STENCIL8:y===an?O=r.DEPTH32F_STENCIL8:y===ks&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===_i||y===es?O=r.DEPTH_COMPONENT24:y===an?O=r.DEPTH_COMPONENT32F:y===ks&&(O=r.DEPTH_COMPONENT16),O}function C(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Lt&&T.minFilter!==Bt?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){let y=T.target;y.removeEventListener("dispose",A),R(y),y.isVideoTexture&&h.delete(y)}function E(T){let y=T.target;y.removeEventListener("dispose",E),M(y)}function R(T){let y=n.get(T);if(y.__webglInit===void 0)return;let O=T.source,K=d.get(O);if(K){let J=K[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(T),Object.keys(K).length===0&&d.delete(O)}n.remove(T)}function S(T){let y=n.get(T);r.deleteTexture(y.__webglTexture);let O=T.source,K=d.get(O);delete K[y.__cacheKey],a.memory.textures--}function M(T){let y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let J=0;J<y.__webglFramebuffer[K].length;J++)r.deleteFramebuffer(y.__webglFramebuffer[K][J]);else r.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)r.deleteFramebuffer(y.__webglFramebuffer[K]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=T.textures;for(let K=0,J=O.length;K<J;K++){let Y=n.get(O[K]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(T)}let I=0;function k(){I=0}function F(){let T=I;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),I+=1,T}function G(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function j(T,y){let O=n.get(T);if(T.isVideoTexture&&Se(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,T,y);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+y)}function V(T,y){let O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+y)}function Z(T,y){let O=n.get(T);if(T.version>0&&O.__version!==T.version){q(O,T,y);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+y)}function W(T,y){let O=n.get(T);if(T.version>0&&O.__version!==T.version){$(O,T,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+y)}let ae={[Cn]:r.REPEAT,[Tn]:r.CLAMP_TO_EDGE,[Fs]:r.MIRRORED_REPEAT},oe={[Lt]:r.NEAREST,[$c]:r.NEAREST_MIPMAP_NEAREST,[Xi]:r.NEAREST_MIPMAP_LINEAR,[Bt]:r.LINEAR,[Ds]:r.LINEAR_MIPMAP_NEAREST,[un]:r.LINEAR_MIPMAP_LINEAR},ve={[Qd]:r.NEVER,[rf]:r.ALWAYS,[$d]:r.LESS,[Ou]:r.LEQUAL,[ef]:r.EQUAL,[sf]:r.GEQUAL,[tf]:r.GREATER,[nf]:r.NOTEQUAL};function De(T,y){if(y.type===an&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Bt||y.magFilter===Ds||y.magFilter===Xi||y.magFilter===un||y.minFilter===Bt||y.minFilter===Ds||y.minFilter===Xi||y.minFilter===un)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,ae[y.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,ae[y.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,ae[y.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,oe[y.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Lt||y.minFilter!==Xi&&y.minFilter!==un||y.type===an&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function qe(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));let K=y.source,J=d.get(K);J===void 0&&(J={},d.set(K,J));let Y=G(y);if(Y!==T.__cacheKey){J[Y]===void 0&&(J[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[Y].usedTimes++;let me=J[T.__cacheKey];me!==void 0&&(J[T.__cacheKey].usedTimes--,me.usedTimes===0&&S(y)),T.__cacheKey=Y,T.__webglTexture=J[Y].texture}return O}function q(T,y,O){let K=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=r.TEXTURE_3D);let J=qe(T,y),Y=y.source;t.bindTexture(K,T.__webglTexture,r.TEXTURE0+O);let me=n.get(Y);if(Y.version!==me.__version||J===!0){t.activeTexture(r.TEXTURE0+O);let se=Xe.getPrimaries(Xe.workingColorSpace),he=y.colorSpace===jn?null:Xe.getPrimaries(y.colorSpace),Ve=y.colorSpace===jn||se===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=b(y.image,!1,i.maxTextureSize);Q=tt(y,Q);let ue=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type),Ee=v(y.internalFormat,ue,Ae,y.colorSpace,y.isVideoTexture);De(K,y);let de,He=y.mipmaps,Le=y.isVideoTexture!==!0,Qe=me.__version===void 0||J===!0,L=Y.dataReady,ne=C(y,Q);if(y.isDepthTexture)Ee=x(y.format===ts,y.type),Qe&&(Le?t.texStorage2D(r.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,Ee,Q.width,Q.height,0,ue,Ae,null));else if(y.isDataTexture)if(He.length>0){Le&&Qe&&t.texStorage2D(r.TEXTURE_2D,ne,Ee,He[0].width,He[0].height);for(let H=0,X=He.length;H<X;H++)de=He[H],Le?L&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,de.width,de.height,ue,Ae,de.data):t.texImage2D(r.TEXTURE_2D,H,Ee,de.width,de.height,0,ue,Ae,de.data);y.generateMipmaps=!1}else Le?(Qe&&t.texStorage2D(r.TEXTURE_2D,ne,Ee,Q.width,Q.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,ue,Ae,Q.data)):t.texImage2D(r.TEXTURE_2D,0,Ee,Q.width,Q.height,0,ue,Ae,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Ee,He[0].width,He[0].height,Q.depth);for(let H=0,X=He.length;H<X;H++)if(de=He[H],y.format!==jt)if(ue!==null)if(Le){if(L)if(y.layerUpdates.size>0){let te=tu(de.width,de.height,y.format,y.type);for(let ie of y.layerUpdates){let Re=de.data.subarray(ie*te/de.data.BYTES_PER_ELEMENT,(ie+1)*te/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,ie,de.width,de.height,1,ue,Re)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,de.width,de.height,Q.depth,ue,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,Ee,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,de.width,de.height,Q.depth,ue,Ae,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,Ee,de.width,de.height,Q.depth,0,ue,Ae,de.data)}else{Le&&Qe&&t.texStorage2D(r.TEXTURE_2D,ne,Ee,He[0].width,He[0].height);for(let H=0,X=He.length;H<X;H++)de=He[H],y.format!==jt?ue!==null?Le?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(r.TEXTURE_2D,H,Ee,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?L&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,de.width,de.height,ue,Ae,de.data):t.texImage2D(r.TEXTURE_2D,H,Ee,de.width,de.height,0,ue,Ae,de.data)}else if(y.isDataArrayTexture)if(Le){if(Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ne,Ee,Q.width,Q.height,Q.depth),L)if(y.layerUpdates.size>0){let H=tu(Q.width,Q.height,y.format,y.type);for(let X of y.layerUpdates){let te=Q.data.subarray(X*H/Q.data.BYTES_PER_ELEMENT,(X+1)*H/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,X,Q.width,Q.height,1,ue,Ae,te)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ue,Ae,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,ue,Ae,Q.data);else if(y.isData3DTexture)Le?(Qe&&t.texStorage3D(r.TEXTURE_3D,ne,Ee,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ue,Ae,Q.data)):t.texImage3D(r.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,ue,Ae,Q.data);else if(y.isFramebufferTexture){if(Qe)if(Le)t.texStorage2D(r.TEXTURE_2D,ne,Ee,Q.width,Q.height);else{let H=Q.width,X=Q.height;for(let te=0;te<ne;te++)t.texImage2D(r.TEXTURE_2D,te,Ee,H,X,0,ue,Ae,null),H>>=1,X>>=1}}else if(He.length>0){if(Le&&Qe){let H=Me(He[0]);t.texStorage2D(r.TEXTURE_2D,ne,Ee,H.width,H.height)}for(let H=0,X=He.length;H<X;H++)de=He[H],Le?L&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,ue,Ae,de):t.texImage2D(r.TEXTURE_2D,H,Ee,ue,Ae,de);y.generateMipmaps=!1}else if(Le){if(Qe){let H=Me(Q);t.texStorage2D(r.TEXTURE_2D,ne,Ee,H.width,H.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Ae,Q)}else t.texImage2D(r.TEXTURE_2D,0,Ee,ue,Ae,Q);m(y)&&p(K),me.__version=Y.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function $(T,y,O){if(y.image.length!==6)return;let K=qe(T,y),J=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+O);let Y=n.get(J);if(J.version!==Y.__version||K===!0){t.activeTexture(r.TEXTURE0+O);let me=Xe.getPrimaries(Xe.workingColorSpace),se=y.colorSpace===jn?null:Xe.getPrimaries(y.colorSpace),he=y.colorSpace===jn||me===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Ve=y.isCompressedTexture||y.image[0].isCompressedTexture,Q=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let X=0;X<6;X++)!Ve&&!Q?ue[X]=b(y.image[X],!0,i.maxCubemapSize):ue[X]=Q?y.image[X].image:y.image[X],ue[X]=tt(y,ue[X]);let Ae=ue[0],Ee=s.convert(y.format,y.colorSpace),de=s.convert(y.type),He=v(y.internalFormat,Ee,de,y.colorSpace),Le=y.isVideoTexture!==!0,Qe=Y.__version===void 0||K===!0,L=J.dataReady,ne=C(y,Ae);De(r.TEXTURE_CUBE_MAP,y);let H;if(Ve){Le&&Qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,He,Ae.width,Ae.height);for(let X=0;X<6;X++){H=ue[X].mipmaps;for(let te=0;te<H.length;te++){let ie=H[te];y.format!==jt?Ee!==null?Le?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,0,0,ie.width,ie.height,Ee,ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,He,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,0,0,ie.width,ie.height,Ee,de,ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,te,He,ie.width,ie.height,0,Ee,de,ie.data)}}}else{if(H=y.mipmaps,Le&&Qe){H.length>0&&ne++;let X=Me(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,He,X.width,X.height)}for(let X=0;X<6;X++)if(Q){Le?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ue[X].width,ue[X].height,Ee,de,ue[X].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,He,ue[X].width,ue[X].height,0,Ee,de,ue[X].data);for(let te=0;te<H.length;te++){let Re=H[te].image[X].image;Le?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,0,0,Re.width,Re.height,Ee,de,Re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,He,Re.width,Re.height,0,Ee,de,Re.data)}}else{Le?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Ee,de,ue[X]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,He,Ee,de,ue[X]);for(let te=0;te<H.length;te++){let ie=H[te];Le?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,0,0,Ee,de,ie.image[X]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,te+1,He,Ee,de,ie.image[X])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),Y.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function pe(T,y,O,K,J,Y){let me=s.convert(O.format,O.colorSpace),se=s.convert(O.type),he=v(O.internalFormat,me,se,O.colorSpace),Ve=n.get(y),Q=n.get(O);if(Q.__renderTarget=y,!Ve.__hasExternalTextures){let ue=Math.max(1,y.width>>Y),Ae=Math.max(1,y.height>>Y);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,he,ue,Ae,y.depth,0,me,se,null):t.texImage2D(J,Y,he,ue,Ae,0,me,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),ze(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,J,Q.__webglTexture,0,Be(y)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,J,Q.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ce(T,y,O){if(r.bindRenderbuffer(r.RENDERBUFFER,T),y.depthBuffer){let K=y.depthTexture,J=K&&K.isDepthTexture?K.type:null,Y=x(y.stencilBuffer,J),me=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=Be(y);ze(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,Y,y.width,y.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,Y,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Y,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,T)}else{let K=y.textures;for(let J=0;J<K.length;J++){let Y=K[J],me=s.convert(Y.format,Y.colorSpace),se=s.convert(Y.type),he=v(Y.internalFormat,me,se,Y.colorSpace),Ve=Be(y);O&&ze(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ve,he,y.width,y.height):ze(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ve,he,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,he,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);let J=K.__webglTexture,Y=Be(y);if(y.depthTexture.format===ji)ze(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(y.depthTexture.format===ts)ze(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function we(T){let y=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let K=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=K}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Te(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=r.createRenderbuffer(),ce(y.__webglDepthbuffer[K],T,!1);else{let J=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),ce(y.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Fe(T,y,O){let K=n.get(T);y!==void 0&&pe(K.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&we(T)}function lt(T){let y=T.texture,O=n.get(T),K=n.get(y);T.addEventListener("dispose",E);let J=T.textures,Y=T.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=y.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let he=0;he<y.mipmaps.length;he++)O.__webglFramebuffer[se][he]=r.createFramebuffer()}else O.__webglFramebuffer[se]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)O.__webglFramebuffer[se]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(me)for(let se=0,he=J.length;se<he;se++){let Ve=n.get(J[se]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&ze(T)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){let he=J[se];O.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[se]);let Ve=s.convert(he.format,he.colorSpace),Q=s.convert(he.type),ue=v(he.internalFormat,Ve,Q,he.colorSpace,T.isXRRenderTarget===!0),Ae=Be(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,ue,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,O.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ce(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),De(r.TEXTURE_CUBE_MAP,y);for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)pe(O.__webglFramebuffer[se][he],T,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,he);else pe(O.__webglFramebuffer[se],T,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let se=0,he=J.length;se<he;se++){let Ve=J[se],Q=n.get(Ve);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),De(r.TEXTURE_2D,Ve),pe(O.__webglFramebuffer,T,Ve,r.COLOR_ATTACHMENT0+se,r.TEXTURE_2D,0),m(Ve)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,K.__webglTexture),De(se,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)pe(O.__webglFramebuffer[he],T,y,r.COLOR_ATTACHMENT0,se,he);else pe(O.__webglFramebuffer,T,y,r.COLOR_ATTACHMENT0,se,0);m(y)&&p(se),t.unbindTexture()}T.depthBuffer&&we(T)}function We(T){let y=T.textures;for(let O=0,K=y.length;O<K;O++){let J=y[O];if(m(J)){let Y=_(T),me=n.get(J).__webglTexture;t.bindTexture(Y,me),p(Y),t.unbindTexture()}}}let ht=[],D=[];function Et(T){if(T.samples>0){if(ze(T)===!1){let y=T.textures,O=T.width,K=T.height,J=r.COLOR_BUFFER_BIT,Y=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=n.get(T),se=y.length>1;if(se)for(let he=0;he<y.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let he=0;he<y.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,me.__webglColorRenderbuffer[he]);let Ve=n.get(y[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,O,K,0,0,O,K,J,r.NEAREST),c===!0&&(ht.length=0,D.length=0,ht.push(r.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ht.push(Y),D.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let he=0;he<y.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,me.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,me.__webglColorRenderbuffer[he]);let Ve=n.get(y[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,me.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,Ve,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let y=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Be(T){return Math.min(i.maxSamples,T.samples)}function ze(T){let y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Se(T){let y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function tt(T,y){let O=T.colorSpace,K=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Dt&&O!==jn&&(Xe.getTransfer(O)===nt?(K!==jt||J!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Fe,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ze}function db(r,e){function t(n,i=jn){let s,a=Xe.getTransfer(i);if(n===Pn)return r.UNSIGNED_BYTE;if(n===tl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Eu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return r.BYTE;if(n===Tu)return r.SHORT;if(n===ks)return r.UNSIGNED_SHORT;if(n===el)return r.INT;if(n===_i)return r.UNSIGNED_INT;if(n===an)return r.FLOAT;if(n===Ks)return r.HALF_FLOAT;if(n===Ru)return r.ALPHA;if(n===Cu)return r.RGB;if(n===jt)return r.RGBA;if(n===Pu)return r.LUMINANCE;if(n===Iu)return r.LUMINANCE_ALPHA;if(n===ji)return r.DEPTH_COMPONENT;if(n===ts)return r.DEPTH_STENCIL;if(n===il)return r.RED;if(n===sl)return r.RED_INTEGER;if(n===Lu)return r.RG;if(n===rl)return r.RG_INTEGER;if(n===al)return r.RGBA_INTEGER;if(n===Dr||n===Nr||n===Ur||n===Or)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===Ko||n===Jo||n===Zo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===$o||n===ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qo||n===$o)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ec)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===tc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ic)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pc)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===mc||n===gc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Fr)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Du||n===bc||n===xc||n===_c)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Fr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var Nc=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ft=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},fb={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`,Uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Tt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new pn({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oc=class extends $n{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,b=new Uc,m=t.getContextAttributes(),p=null,_=null,v=[],x=[],C=new Ie,A=null,E=new vt;E.viewport=new je;let R=new vt;R.viewport=new je;let S=[E,R],M=new Nc,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=v[q];return $===void 0&&($=new Os,v[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=v[q];return $===void 0&&($=new Os,v[q]=$),$.getGripSpace()},this.getHand=function(q){let $=v[q];return $===void 0&&($=new Os,v[q]=$),$.getHandSpace()};function F(q){let $=x.indexOf(q.inputSource);if($===-1)return;let pe=v[$];pe!==void 0&&(pe.update(q.inputSource,q.frame,l||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",j);for(let q=0;q<v.length;q++){let $=x[q];$!==null&&(x[q]=null,v[q].disconnect($))}I=null,k=null,b.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){let $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new In(f.framebufferWidth,f.framebufferHeight,{format:jt,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,pe=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?ts:ji,pe=m.stencil?es:_i);let Te={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Te),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new In(d.textureWidth,d.textureHeight,{format:jt,type:Pn,depthTexture:new Yr(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function j(q){for(let $=0;$<q.removed.length;$++){let pe=q.removed[$],ce=x.indexOf(pe);ce>=0&&(x[ce]=null,v[ce].disconnect(pe))}for(let $=0;$<q.added.length;$++){let pe=q.added[$],ce=x.indexOf(pe);if(ce===-1){for(let we=0;we<v.length;we++)if(we>=x.length){x.push(pe),ce=we;break}else if(x[we]===null){x[we]=pe,ce=we;break}if(ce===-1)break}let Te=v[ce];Te&&Te.connect(pe)}}let V=new P,Z=new P;function W(q,$,pe){V.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);let ce=V.distanceTo(Z),Te=$.projectionMatrix.elements,we=pe.projectionMatrix.elements,Fe=Te[14]/(Te[10]-1),lt=Te[14]/(Te[10]+1),We=(Te[9]+1)/Te[5],ht=(Te[9]-1)/Te[5],D=(Te[8]-1)/Te[0],Et=(we[8]+1)/we[0],Be=Fe*D,ze=Fe*Et,Se=ce/(-D+Et),tt=Se*-D;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(tt),q.translateZ(Se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Me=Fe+Se,T=lt+Se,y=Be-tt,O=ze+(ce-tt),K=We*lt/T*Me,J=ht*lt/T*Me;q.projectionMatrix.makePerspective(y,O,K,J,Me,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let $=q.near,pe=q.far;b.texture!==null&&(b.depthNear>0&&($=b.depthNear),b.depthFar>0&&(pe=b.depthFar)),M.near=R.near=E.near=$,M.far=R.far=E.far=pe,(I!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,k=M.far),E.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,M.layers.mask=E.layers.mask|R.layers.mask;let ce=q.parent,Te=M.cameras;ae(M,ce);for(let we=0;we<Te.length;we++)ae(Te[we],ce);Te.length===2?W(M,E,R):M.projectionMatrix.copy(E.projectionMatrix),oe(q,M,ce)};function oe(q,$,pe){pe===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ss*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(M)};let ve=null;function De(q,$){if(h=$.getViewerPose(l||a),g=$,h!==null){let pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ce=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let we=0;we<pe.length;we++){let Fe=pe[we],lt=null;if(f!==null)lt=f.getViewport(Fe);else{let ht=u.getViewSubImage(d,Fe);lt=ht.viewport,we===0&&(e.setRenderTargetTextures(_,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(_))}let We=S[we];We===void 0&&(We=new vt,We.layers.enable(we),We.viewport=new je,S[we]=We),We.matrix.fromArray(Fe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Fe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(lt.x,lt.y,lt.width,lt.height),we===0&&(M.matrix.copy(We.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(We)}let Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let we=u.getDepthInformation(pe[0]);we&&we.isValid&&we.texture&&b.init(e,we,i.renderState)}}for(let pe=0;pe<v.length;pe++){let ce=x[pe],Te=v[pe];ce!==null&&Te!==void 0&&Te.update(ce,$,l||a)}ve&&ve(q,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let qe=new zu;qe.setAnimationLoop(De),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}},mi=new fn,gb=new Ce;function bb(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===It&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===It&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),v=_.envMap,x=_.envMapRotation;v&&(m.envMap.value=v,mi.copy(x),mi.x*=-1,mi.y*=-1,mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(gb.makeRotationFromEuler(mi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xb(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let x=v.program;n.uniformBlockBinding(_,x)}function l(_,v){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));let C=v.program;n.updateUBOMapping(_,C);let A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function h(_){let v=u();_.__bindingPointIndex=v;let x=r.createBuffer(),C=_.__size,A=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let v=i[_.id],x=_.uniforms,C=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,E=x.length;A<E;A++){let R=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,M=R.length;S<M;S++){let I=R[S];if(f(I,A,S,C)===!0){let k=I.__offset,F=Array.isArray(I.value)?I.value:[I.value],G=0;for(let j=0;j<F.length;j++){let V=F[j],Z=b(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,k+G,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,v,x,C){let A=_.value,E=v+"_"+x;if(C[E]===void 0)return typeof A=="number"||typeof A=="boolean"?C[E]=A:C[E]=A.clone(),!0;{let R=C[E];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[E]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(_){let v=_.uniforms,x=0,C=16;for(let E=0,R=v.length;E<R;E++){let S=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,I=S.length;M<I;M++){let k=S[M],F=Array.isArray(k.value)?k.value:[k.value];for(let G=0,j=F.length;G<j;G++){let V=F[G],Z=b(V),W=x%C,ae=W%Z.boundary,oe=W+ae;x+=ae,oe!==0&&C-oe<Z.storage&&(x+=C-oe),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=Z.storage}}}let A=x%C;return A>0&&(x+=C-A),_.__size=x,_.__cache={},this}function b(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){let v=_.target;v.removeEventListener("dispose",m);let x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(let _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}var jr=class{constructor(e={}){let{canvas:t=Mf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,p=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=Qn,this.toneMappingExposure=1;let x=this,C=!1,A=0,E=0,R=null,S=-1,M=null,I=new je,k=new je,F=null,G=new fe(0),j=0,V=t.width,Z=t.height,W=1,ae=null,oe=null,ve=new je(0,0,V,Z),De=new je(0,0,V,Z),qe=!1,q=new zs,$=!1,pe=!1,ce=new Ce,Te=new Ce,we=new P,Fe=new je,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function ht(){return R===null?W:1}let D=n;function Et(w,N){return t.getContext(w,N)}try{let w={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jc}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",ie,!1),D===null){let N="webgl2";if(D=Et(N,w),D===null)throw Et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,ze,Se,tt,Me,T,y,O,K,J,Y,me,se,he,Ve,Q,ue,Ae,Ee,de,He,Le,Qe,L;function ne(){Be=new Ng(D),Be.init(),Le=new db(D,Be),ze=new Rg(D,Be,e,Le),Se=new lb(D,Be),ze.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),tt=new Fg(D),Me=new J0,T=new ub(D,Be,Se,Me,ze,Le,tt),y=new Pg(x),O=new Dg(x),K=new Wf(D),Qe=new Tg(D,K),J=new Ug(D,K,tt,Qe),Y=new Bg(D,J,K,tt),Ee=new kg(D,ze,T),Q=new Cg(Me),me=new K0(x,y,O,Be,ze,Qe,Q),se=new bb(x,Me),he=new Q0,Ve=new sb(Be),Ae=new Ag(x,y,O,Se,Y,f,c),ue=new ob(x,Y,ze),L=new xb(D,tt,ze,Se),de=new Eg(D,Be,tt),He=new Og(D,Be,tt),tt.programs=me.programs,x.capabilities=ze,x.extensions=Be,x.properties=Me,x.renderLists=he,x.shadowMap=ue,x.state=Se,x.info=tt}ne();let H=new Oc(x,D);this.xr=H,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(V,Z,!1))},this.getSize=function(w){return w.set(V,Z)},this.setSize=function(w,N,B=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,Z=N,t.width=Math.floor(w*W),t.height=Math.floor(N*W),B===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(V*W,Z*W).floor()},this.setDrawingBufferSize=function(w,N,B){V=w,Z=N,W=B,t.width=Math.floor(w*B),t.height=Math.floor(N*B),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(ve)},this.setViewport=function(w,N,B,z){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,N,B,z),Se.viewport(I.copy(ve).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(De)},this.setScissor=function(w,N,B,z){w.isVector4?De.set(w.x,w.y,w.z,w.w):De.set(w,N,B,z),Se.scissor(k.copy(De).multiplyScalar(W).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(w){Se.setScissorTest(qe=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){oe=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(w=!0,N=!0,B=!0){let z=0;if(w){let U=!1;if(R!==null){let ee=R.texture.format;U=ee===al||ee===rl||ee===sl}if(U){let ee=R.texture.type,le=ee===Pn||ee===_i||ee===ks||ee===es||ee===tl||ee===nl,be=Ae.getClearColor(),xe=Ae.getClearAlpha(),Pe=be.r,Ne=be.g,_e=be.b;le?(g[0]=Pe,g[1]=Ne,g[2]=_e,g[3]=xe,D.clearBufferuiv(D.COLOR,0,g)):(b[0]=Pe,b[1]=Ne,b[2]=_e,b[3]=xe,D.clearBufferiv(D.COLOR,0,b))}else z|=D.COLOR_BUFFER_BIT}N&&(z|=D.DEPTH_BUFFER_BIT),B&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),he.dispose(),Ve.dispose(),Me.dispose(),y.dispose(),O.dispose(),Y.dispose(),Qe.dispose(),L.dispose(),me.dispose(),H.dispose(),H.removeEventListener("sessionstart",jl),H.removeEventListener("sessionend",Kl),li.stop()};function X(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=tt.autoReset,N=ue.enabled,B=ue.autoUpdate,z=ue.needsUpdate,U=ue.type;ne(),tt.autoReset=w,ue.enabled=N,ue.autoUpdate=B,ue.needsUpdate=z,ue.type=U}function ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){let N=w.target;N.removeEventListener("dispose",Re),rt(N)}function rt(w){Rt(w),Me.remove(w)}function Rt(w){let N=Me.get(w).programs;N!==void 0&&(N.forEach(function(B){me.releaseProgram(B)}),w.isShaderMaterial&&me.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,B,z,U,ee){N===null&&(N=lt);let le=U.isMesh&&U.matrixWorld.determinant()<0,be=gd(w,N,B,z,U);Se.setMaterial(z,le);let xe=B.index,Pe=1;if(z.wireframe===!0){if(xe=J.getWireframeAttribute(B),xe===void 0)return;Pe=2}let Ne=B.drawRange,_e=B.attributes.position,Ye=Ne.start*Pe,ot=(Ne.start+Ne.count)*Pe;ee!==null&&(Ye=Math.max(Ye,ee.start*Pe),ot=Math.min(ot,(ee.start+ee.count)*Pe)),xe!==null?(Ye=Math.max(Ye,0),ot=Math.min(ot,xe.count)):_e!=null&&(Ye=Math.max(Ye,0),ot=Math.min(ot,_e.count));let ut=ot-Ye;if(ut<0||ut===1/0)return;Qe.setup(U,z,be,B,xe);let kt,Je=de;if(xe!==null&&(kt=K.get(xe),Je=He,Je.setIndex(kt)),U.isMesh)z.wireframe===!0?(Se.setLineWidth(z.wireframeLinewidth*ht()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(U.isLine){let ye=z.linewidth;ye===void 0&&(ye=1),Se.setLineWidth(ye*ht()),U.isLineSegments?Je.setMode(D.LINES):U.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else U.isPoints?Je.setMode(D.POINTS):U.isSprite&&Je.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let ye=U._multiDrawStarts,bn=U._multiDrawCounts,Ze=U._multiDrawCount,en=xe?K.get(xe).bytesPerElement:1,Ai=Me.get(z).currentProgram.getUniforms();for(let Vt=0;Vt<Ze;Vt++)Ai.setValue(D,"_gl_DrawID",Vt),Je.render(ye[Vt]/en,bn[Vt])}else if(U.isInstancedMesh)Je.renderInstances(Ye,ut,U.count);else if(B.isInstancedBufferGeometry){let ye=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,bn=Math.min(B.instanceCount,ye);Je.renderInstances(Ye,ut,bn)}else Je.render(Ye,ut)};function $e(w,N,B){w.transparent===!0&&w.side===_t&&w.forceSinglePass===!1?(w.side=It,w.needsUpdate=!0,tr(w,N,B),w.side=dn,w.needsUpdate=!0,tr(w,N,B),w.side=_t):tr(w,N,B)}this.compile=function(w,N,B=null){B===null&&(B=w),p=Ve.get(B),p.init(N),v.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==B&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();let z=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ee=U.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){let be=ee[le];$e(be,B,U),z.add(be)}else $e(ee,B,U),z.add(ee)}),v.pop(),p=null,z},this.compileAsync=function(w,N,B=null){let z=this.compile(w,N,B);return new Promise(U=>{function ee(){if(z.forEach(function(le){Me.get(le).currentProgram.isReady()&&z.delete(le)}),z.size===0){U(w);return}setTimeout(ee,10)}Be.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let $t=null;function gn(w){$t&&$t(w)}function jl(){li.stop()}function Kl(){li.start()}let li=new zu;li.setAnimationLoop(gn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(w){$t=w,H.setAnimationLoop(w),w===null?li.stop():li.start()},H.addEventListener("sessionstart",jl),H.addEventListener("sessionend",Kl),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(N),N=H.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,R),p=Ve.get(w,v.length),p.init(N),v.push(p),Te.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(Te),pe=this.localClippingEnabled,$=Q.init(this.clippingPlanes,pe),m=he.get(w,_.length),m.init(),_.push(m),H.enabled===!0&&H.isPresenting===!0){let ee=x.xr.getDepthSensingMesh();ee!==null&&$a(ee,N,-1/0,x.sortObjects)}$a(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ae,oe),We=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,We&&Ae.addToRenderList(m,w),this.info.render.frame++,$===!0&&Q.beginShadows();let B=p.state.shadowsArray;ue.render(B,w,N),$===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,U=m.transmissive;if(p.setupLights(),N.isArrayCamera){let ee=N.cameras;if(U.length>0)for(let le=0,be=ee.length;le<be;le++){let xe=ee[le];Zl(z,U,w,xe)}We&&Ae.render(w);for(let le=0,be=ee.length;le<be;le++){let xe=ee[le];Jl(m,w,xe,xe.viewport)}}else U.length>0&&Zl(z,U,w,N),We&&Ae.render(w),Jl(m,w,N);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,N),Qe.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],$===!0&&Q.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function $a(w,N,B,z){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){z&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);let le=Y.update(w),be=w.material;be.visible&&m.push(w,le,be,B,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let le=Y.update(w),be=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Fe.copy(le.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(be)){let xe=le.groups;for(let Pe=0,Ne=xe.length;Pe<Ne;Pe++){let _e=xe[Pe],Ye=be[_e.materialIndex];Ye&&Ye.visible&&m.push(w,le,Ye,B,Fe.z,_e)}}else be.visible&&m.push(w,le,be,B,Fe.z,null)}}let ee=w.children;for(let le=0,be=ee.length;le<be;le++)$a(ee[le],N,B,z)}function Jl(w,N,B,z){let U=w.opaque,ee=w.transmissive,le=w.transparent;p.setupLightsView(B),$===!0&&Q.setGlobalState(x.clippingPlanes,B),z&&Se.viewport(I.copy(z)),U.length>0&&er(U,N,B),ee.length>0&&er(ee,N,B),le.length>0&&er(le,N,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Zl(w,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new In(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Ks:Pn,minFilter:un,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));let ee=p.state.transmissionRenderTarget[z.id],le=z.viewport||I;ee.setSize(le.z,le.w);let be=x.getRenderTarget();x.setRenderTarget(ee),x.getClearColor(G),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),We&&Ae.render(B);let xe=x.toneMapping;x.toneMapping=Qn;let Pe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),$===!0&&Q.setGlobalState(x.clippingPlanes,z),er(w,B,z),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let _e=0,Ye=N.length;_e<Ye;_e++){let ot=N[_e],ut=ot.object,kt=ot.geometry,Je=ot.material,ye=ot.group;if(Je.side===_t&&ut.layers.test(z.layers)){let bn=Je.side;Je.side=It,Je.needsUpdate=!0,Ql(ut,B,z,kt,Je,ye),Je.side=bn,Je.needsUpdate=!0,Ne=!0}}Ne===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}x.setRenderTarget(be),x.setClearColor(G,j),Pe!==void 0&&(z.viewport=Pe),x.toneMapping=xe}function er(w,N,B){let z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ee=w.length;U<ee;U++){let le=w[U],be=le.object,xe=le.geometry,Pe=z===null?le.material:z,Ne=le.group;be.layers.test(B.layers)&&Ql(be,N,B,xe,Pe,Ne)}}function Ql(w,N,B,z,U,ee){w.onBeforeRender(x,N,B,z,U,ee),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,N,B,z,w,ee),U.transparent===!0&&U.side===_t&&U.forceSinglePass===!1?(U.side=It,U.needsUpdate=!0,x.renderBufferDirect(B,N,z,U,w,ee),U.side=dn,U.needsUpdate=!0,x.renderBufferDirect(B,N,z,U,w,ee),U.side=_t):x.renderBufferDirect(B,N,z,U,w,ee),w.onAfterRender(x,N,B,z,U,ee)}function tr(w,N,B){N.isScene!==!0&&(N=lt);let z=Me.get(w),U=p.state.lights,ee=p.state.shadowsArray,le=U.state.version,be=me.getParameters(w,U.state,ee,N,B),xe=me.getProgramCacheKey(be),Pe=z.programs;z.environment=w.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(w.isMeshStandardMaterial?O:y).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",Re),Pe=new Map,z.programs=Pe);let Ne=Pe.get(xe);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===le)return eh(w,be),Ne}else be.uniforms=me.getUniforms(w),w.onBeforeCompile(be,x),Ne=me.acquireProgram(be,xe),Pe.set(xe,Ne),z.uniforms=be.uniforms;let _e=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(_e.clippingPlanes=Q.uniform),eh(w,be),z.needsLights=xd(w),z.lightsStateVersion=le,z.needsLights&&(_e.ambientLightColor.value=U.state.ambient,_e.lightProbe.value=U.state.probe,_e.directionalLights.value=U.state.directional,_e.directionalLightShadows.value=U.state.directionalShadow,_e.spotLights.value=U.state.spot,_e.spotLightShadows.value=U.state.spotShadow,_e.rectAreaLights.value=U.state.rectArea,_e.ltc_1.value=U.state.rectAreaLTC1,_e.ltc_2.value=U.state.rectAreaLTC2,_e.pointLights.value=U.state.point,_e.pointLightShadows.value=U.state.pointShadow,_e.hemisphereLights.value=U.state.hemi,_e.directionalShadowMap.value=U.state.directionalShadowMap,_e.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_e.spotShadowMap.value=U.state.spotShadowMap,_e.spotLightMatrix.value=U.state.spotLightMatrix,_e.spotLightMap.value=U.state.spotLightMap,_e.pointShadowMap.value=U.state.pointShadowMap,_e.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ne,z.uniformsList=null,Ne}function $l(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Ji.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function eh(w,N){let B=Me.get(w);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function gd(w,N,B,z,U){N.isScene!==!0&&(N=lt),T.resetTextureUnits();let ee=N.fog,le=z.isMeshStandardMaterial?N.environment:null,be=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Dt,xe=(z.isMeshStandardMaterial?O:y).get(z.envMap||le),Pe=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ne=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_e=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,ot=!!B.morphAttributes.color,ut=Qn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ut=x.toneMapping);let kt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=kt!==void 0?kt.length:0,ye=Me.get(z),bn=p.state.lights;if($===!0&&(pe===!0||w!==M)){let qt=w===M&&z.id===S;Q.setState(z,w,qt)}let Ze=!1;z.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==bn.state.version||ye.outputColorSpace!==be||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==xe||z.fog===!0&&ye.fog!==ee||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Q.numPlanes||ye.numIntersection!==Q.numIntersection)||ye.vertexAlphas!==Pe||ye.vertexTangents!==Ne||ye.morphTargets!==_e||ye.morphNormals!==Ye||ye.morphColors!==ot||ye.toneMapping!==ut||ye.morphTargetsCount!==Je)&&(Ze=!0):(Ze=!0,ye.__version=z.version);let en=ye.currentProgram;Ze===!0&&(en=tr(z,N,U));let Ai=!1,Vt=!1,xs=!1,dt=en.getUniforms(),ln=ye.uniforms;if(Se.useProgram(en.program)&&(Ai=!0,Vt=!0,xs=!0),z.id!==S&&(S=z.id,Vt=!0),Ai||M!==w){Se.buffers.depth.getReversed()?(ce.copy(w.projectionMatrix),wf(ce),Af(ce),dt.setValue(D,"projectionMatrix",ce)):dt.setValue(D,"projectionMatrix",w.projectionMatrix),dt.setValue(D,"viewMatrix",w.matrixWorldInverse);let zn=dt.map.cameraPosition;zn!==void 0&&zn.setValue(D,we.setFromMatrixPosition(w.matrixWorld)),ze.logarithmicDepthBuffer&&dt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&dt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Vt=!0,xs=!0)}if(U.isSkinnedMesh){dt.setOptional(D,U,"bindMatrix"),dt.setOptional(D,U,"bindMatrixInverse");let qt=U.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),dt.setValue(D,"boneTexture",qt.boneTexture,T))}U.isBatchedMesh&&(dt.setOptional(D,U,"batchingTexture"),dt.setValue(D,"batchingTexture",U._matricesTexture,T),dt.setOptional(D,U,"batchingIdTexture"),dt.setValue(D,"batchingIdTexture",U._indirectTexture,T),dt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&dt.setValue(D,"batchingColorTexture",U._colorsTexture,T));let _s=B.morphAttributes;if((_s.position!==void 0||_s.normal!==void 0||_s.color!==void 0)&&Ee.update(U,B,en),(Vt||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,dt.setValue(D,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ln.envMap.value=xe,ln.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(ln.envMapIntensity.value=N.environmentIntensity),Vt&&(dt.setValue(D,"toneMappingExposure",x.toneMappingExposure),ye.needsLights&&bd(ln,xs),ee&&z.fog===!0&&se.refreshFogUniforms(ln,ee),se.refreshMaterialUniforms(ln,z,W,Z,p.state.transmissionRenderTarget[w.id]),Ji.upload(D,$l(ye),ln,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ji.upload(D,$l(ye),ln,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&dt.setValue(D,"center",U.center),dt.setValue(D,"modelViewMatrix",U.modelViewMatrix),dt.setValue(D,"normalMatrix",U.normalMatrix),dt.setValue(D,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let qt=z.uniformsGroups;for(let zn=0,Vn=qt.length;zn<Vn;zn++){let th=qt[zn];L.update(th,en),L.bind(th,en)}}return en}function bd(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function xd(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,B){Me.get(w.texture).__webglTexture=N,Me.get(w.depthTexture).__webglTexture=B;let z=Me.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){let B=Me.get(w);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,B=0){R=w,A=N,E=B;let z=!0,U=null,ee=!1,le=!1;if(w){let xe=Me.get(w);if(xe.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(xe.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(xe.__hasExternalTextures)T.rebindTextures(w,Me.get(w.texture).__webglTexture,Me.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let _e=w.depthTexture;if(xe.__boundDepthTexture!==_e){if(_e!==null&&Me.has(_e)&&(w.width!==_e.image.width||w.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(le=!0);let Ne=Me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?U=Ne[N][B]:U=Ne[N],ee=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?U=Me.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[B]:U=Ne,I.copy(w.viewport),k.copy(w.scissor),F=w.scissorTest}else I.copy(ve).multiplyScalar(W).floor(),k.copy(De).multiplyScalar(W).floor(),F=qe;if(Se.bindFramebuffer(D.FRAMEBUFFER,U)&&z&&Se.drawBuffers(w,U),Se.viewport(I),Se.scissor(k),Se.setScissorTest(F),ee){let xe=Me.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,B)}else if(le){let xe=Me.get(w.texture),Pe=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xe.__webglTexture,B||0,Pe)}S=-1},this.readRenderTargetPixels=function(w,N,B,z,U,ee,le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&le!==void 0&&(be=be[le]),be){Se.bindFramebuffer(D.FRAMEBUFFER,be);try{let xe=w.texture,Pe=xe.format,Ne=xe.type;if(!ze.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-z&&B>=0&&B<=w.height-U&&D.readPixels(N,B,z,U,Le.convert(Pe),Le.convert(Ne),ee)}finally{let xe=R!==null?Me.get(R).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,N,B,z,U,ee,le){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&le!==void 0&&(be=be[le]),be){let xe=w.texture,Pe=xe.format,Ne=xe.type;if(!ze.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-z&&B>=0&&B<=w.height-U){Se.bindFramebuffer(D.FRAMEBUFFER,be);let _e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.bufferData(D.PIXEL_PACK_BUFFER,ee.byteLength,D.STREAM_READ),D.readPixels(N,B,z,U,Le.convert(Pe),Le.convert(Ne),0);let Ye=R!==null?Me.get(R).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Ye);let ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sf(D,ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ee),D.deleteBuffer(_e),D.deleteSync(ot),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,B=0){w.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);let z=Math.pow(2,-B),U=Math.floor(w.image.width*z),ee=Math.floor(w.image.height*z),le=N!==null?N.x:0,be=N!==null?N.y:0;T.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,le,be,U,ee),Se.unbindTexture()},this.copyTextureToTexture=function(w,N,B=null,z=null,U=0){w.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],N=arguments[2],U=arguments[3]||0,B=null);let ee,le,be,xe,Pe,Ne,_e,Ye,ot,ut=w.isCompressedTexture?w.mipmaps[U]:w.image;B!==null?(ee=B.max.x-B.min.x,le=B.max.y-B.min.y,be=B.isBox3?B.max.z-B.min.z:1,xe=B.min.x,Pe=B.min.y,Ne=B.isBox3?B.min.z:0):(ee=ut.width,le=ut.height,be=ut.depth||1,xe=0,Pe=0,Ne=0),z!==null?(_e=z.x,Ye=z.y,ot=z.z):(_e=0,Ye=0,ot=0);let kt=Le.convert(N.format),Je=Le.convert(N.type),ye;N.isData3DTexture?(T.setTexture3D(N,0),ye=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),ye=D.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),ye=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let bn=D.getParameter(D.UNPACK_ROW_LENGTH),Ze=D.getParameter(D.UNPACK_IMAGE_HEIGHT),en=D.getParameter(D.UNPACK_SKIP_PIXELS),Ai=D.getParameter(D.UNPACK_SKIP_ROWS),Vt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne);let xs=w.isDataArrayTexture||w.isData3DTexture,dt=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let ln=Me.get(w),_s=Me.get(N),qt=Me.get(ln.__renderTarget),zn=Me.get(_s.__renderTarget);Se.bindFramebuffer(D.READ_FRAMEBUFFER,qt.__webglFramebuffer),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Vn=0;Vn<be;Vn++)xs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(w).__webglTexture,U,Ne+Vn),w.isDepthTexture?(dt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(N).__webglTexture,U,ot+Vn),D.blitFramebuffer(xe,Pe,ee,le,_e,Ye,ee,le,D.DEPTH_BUFFER_BIT,D.NEAREST)):dt?D.copyTexSubImage3D(ye,U,_e,Ye,ot+Vn,xe,Pe,ee,le):D.copyTexSubImage2D(ye,U,_e,Ye,ot+Vn,xe,Pe,ee,le);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else dt?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(ye,U,_e,Ye,ot,ee,le,be,kt,Je,ut.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(ye,U,_e,Ye,ot,ee,le,be,kt,ut.data):D.texSubImage3D(ye,U,_e,Ye,ot,ee,le,be,kt,Je,ut):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,_e,Ye,ee,le,kt,Je,ut.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,_e,Ye,ut.width,ut.height,kt,ut.data):D.texSubImage2D(D.TEXTURE_2D,U,_e,Ye,ee,le,kt,Je,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,bn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ze),D.pixelStorei(D.UNPACK_SKIP_PIXELS,en),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ai),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt),U===0&&N.generateMipmaps&&D.generateMipmap(ye),Se.unbindTexture()},this.copyTextureToTexture3D=function(w,N,B=null,z=null,U=0){return w.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,B,z,U)},this.initRenderTarget=function(w){Me.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){A=0,E=0,R=null,Se.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var Kr=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vs=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=vc,this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ut=new P,vi=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new it(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hs=class extends zt{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zi,ws=new P,Vi=new P,Hi=new P,Gi=new Ie,As=new Ie,Xu=new Ce,Mr=new P,Ts=new P,Sr=new P,nu=new Ie,Ro=new Ie,iu=new Ie,Jr=class extends gt{constructor(e=new Hs){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hs(t,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new vi(n,3,0,!1)),zi.setAttribute("uv",new vi(n,2,3,!1))}this.geometry=zi,this.material=e,this.center=new Ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),Xu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Hi.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;wr(Mr.set(-.5,-.5,0),Hi,a,Vi,i,s),wr(Ts.set(.5,-.5,0),Hi,a,Vi,i,s),wr(Sr.set(.5,.5,0),Hi,a,Vi,i,s),nu.set(0,0),Ro.set(1,0),iu.set(1,1);let o=e.ray.intersectTriangle(Mr,Ts,Sr,!1,ws);if(o===null&&(wr(Ts.set(-.5,.5,0),Hi,a,Vi,i,s),Ro.set(0,1),o=e.ray.intersectTriangle(Mr,Sr,Ts,!1,ws),o===null))return;let c=e.ray.origin.distanceTo(ws);c<e.near||c>e.far||t.push({distance:c,point:ws.clone(),uv:Kn.getInterpolation(ws,Mr,Ts,Sr,nu,Ro,iu,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wr(r,e,t,n,i,s){Gi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(As.x=s*Gi.x-i*Gi.y,As.y=i*Gi.x+s*Gi.y):As.copy(Gi),r.copy(e),r.x+=As.x,r.y+=As.y,r.applyMatrix4(Xu)}var su=new P,ru=new je,au=new je,_b=new P,ou=new Ce,Ar=new P,Co=new Wt,cu=new Ce,Po=new rs,Zr=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rh,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ar),this.boundingBox.expandByPoint(Ar)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ar),this.boundingSphere.expandByPoint(Ar)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(i),e.ray.intersectsSphere(Co)!==!1&&(cu.copy(i).invert(),Po.copy(e.ray).applyMatrix4(cu),!(this.boundingBox!==null&&Po.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Po)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Yd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ru.fromBufferAttribute(i.attributes.skinIndex,e),au.fromBufferAttribute(i.attributes.skinWeight,e),su.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=au.getComponent(s);if(a!==0){let o=ru.getComponent(s);ou.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(_b.copy(su).applyMatrix4(ou),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Gs=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Qr=class extends Tt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Lt,h=Lt,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lu=new Ce,vb=new Ce,$r=class r{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:vb;lu.multiplyMatrices(o,t[s]),lu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Qr(t,e,e,jt,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Gs),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},yi=class extends it{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Wi=new Ce,hu=new Ce,Tr=[],uu=new Kt,yb=new Ce,Es=new ke,Rs=new Wt,Ln=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,yb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),uu.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(uu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Rs.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),e.ray.intersectsSphere(Rs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Wi),hu.multiplyMatrices(n,Wi),Es.matrixWorld=hu,Es.raycast(e,Tr);for(let a=0,o=Tr.length;a<o;a++){let c=Tr[a];c.instanceId=s,c.object=this,t.push(c)}Tr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qr(new Float32Array(i*this.count),i,this.count,il,an));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ws=class extends zt{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ea=new P,ta=new P,du=new Ce,Cs=new rs,Er=new Wt,Io=new P,fu=new P,us=class extends gt{constructor(e=new pt,t=new Ws){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ea.fromBufferAttribute(t,i-1),ta.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Er.radius+=s,e.ray.intersectsSphere(Er)===!1)return;du.copy(i).invert(),Cs.copy(e.ray).applyMatrix4(du);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=h.getX(b),_=h.getX(b+1),v=Rr(this,e,Cs,c,p,_);v&&t.push(v)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(f),p=Rr(this,e,Cs,c,b,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){let p=Rr(this,e,Cs,c,b,b+1);p&&t.push(p)}if(this.isLineLoop){let b=Rr(this,e,Cs,c,g-1,f);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Rr(r,e,t,n,i,s){let a=r.geometry.attributes.position;if(ea.fromBufferAttribute(a,i),ta.fromBufferAttribute(a,s),t.distanceSqToSegment(ea,ta,Io,fu)>n)return;Io.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Io);if(!(c<e.near||c>e.far))return{distance:c,point:fu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var pu=new P,mu=new P,na=class extends us{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)pu.fromBufferAttribute(t,i),mu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pu.distanceTo(mu);e.setAttribute("lineDistance",new Ke(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ia=class extends us{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Xs=class extends zt{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gu=new Ce,Fc=new rs,Cr=new Wt,Pr=new P,sa=class extends gt{constructor(e=new pt,t=new Xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Cr.radius+=s,e.ray.intersectsSphere(Cr)===!1)return;gu.copy(i).invert(),Fc.copy(e.ray).applyMatrix4(gu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){let m=l.getX(g);Pr.fromBufferAttribute(u,m),bu(Pr,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,b=f;g<b;g++)Pr.fromBufferAttribute(u,g),bu(Pr,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function bu(r,e,t,n,i,s,a){let o=Fc.distanceSqToPoint(r);if(o<t){let c=new P;Fc.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ra=class extends Tt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},kc=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new Ie:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,i=[],s=[],a=[],o=new P,c=new Ce;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(At(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(At(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function hl(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var Ir=new P,Lo=new hl,Do=new hl,No=new hl,aa=class extends kc{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(Ir.subVectors(i[0],i[1]).add(i[0]),l=Ir);let u=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(Ir.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Lo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),Do.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),No.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Do.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),No.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Lo.calc(c),Do.calc(c),No.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var cn=class r extends pt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,b=[],m=n/2,p=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(d,3)),this.setAttribute("uv",new Ke(f,2));function _(){let x=new P,C=new P,A=0,E=(t-e)/n;for(let R=0;R<=s;R++){let S=[],M=R/s,I=M*(t-e)+e;for(let k=0;k<=i;k++){let F=k/i,G=F*c+o,j=Math.sin(G),V=Math.cos(G);C.x=I*j,C.y=-M*n+m,C.z=I*V,u.push(C.x,C.y,C.z),x.set(j,E,V).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-M),S.push(g++)}b.push(S)}for(let R=0;R<i;R++)for(let S=0;S<s;S++){let M=b[S][R],I=b[S+1][R],k=b[S+1][R+1],F=b[S][R+1];(e>0||S!==0)&&(h.push(M,I,F),A+=3),(t>0||S!==s-1)&&(h.push(I,k,F),A+=3)}l.addGroup(p,A,0),p+=A}function v(x){let C=g,A=new Ie,E=new P,R=0,S=x===!0?e:t,M=x===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let I=g;for(let k=0;k<=i;k++){let G=k/i*c+o,j=Math.cos(G),V=Math.sin(G);E.x=S*V,E.y=m*M,E.z=S*j,u.push(E.x,E.y,E.z),d.push(0,M,0),A.x=j*.5+.5,A.y=V*.5*M+.5,f.push(A.x,A.y),g++}for(let k=0;k<i;k++){let F=C+k,G=I+k;x===!0?h.push(G,G+1,F):h.push(G+1,G,F),R+=3}l.addGroup(p,R,x===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mi=class r extends cn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ei=class r extends pt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new P,d=new P,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let _=[],v=p/n,x=0;p===0&&a===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){let A=C/t;u.x=-e*Math.cos(i+A*s)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+A*s)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(A+x,1-v),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let v=h[p][_+1],x=h[p][_],C=h[p+1][_],A=h[p+1][_+1];(p!==0||a>0)&&f.push(v,x,A),(p!==n-1||c<Math.PI)&&f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(b,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var at=class extends zt{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xt=class extends at{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Lr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Mb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Sb(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function xu(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function qu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var ti=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bc=class extends ti{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case oh:s=e,o=2*t-n;break;case ch:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case oh:a=e,c=2*n-t;break;case ch:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,_=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*b+.5*g,x=f*m-f*b;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+_*a[l+C]+v*a[c+C]+x*a[u+C];return s}},zc=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Vc=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lr(t,this.TimeBufferType),this.values=Lr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lr(e.times,Array),values:Lr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ns:t=this.InterpolantFactoryMethodDiscrete;break;case is:t=this.InterpolantFactoryMethodLinear;break;case eo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ns;case this.InterpolantFactoryMethodLinear:return is;case this.InterpolantFactoryMethodSmooth:return eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Mb(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===eo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=is;var ni=class extends Zt{constructor(e,t,n){super(e,t,n)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=ns;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends Zt{};oa.prototype.ValueTypeName="color";var Dn=class extends Zt{};Dn.prototype.ValueTypeName="number";var Hc=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)mt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Nn=class extends Zt{InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}};Nn.prototype.ValueTypeName="quaternion";Nn.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Zt{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=ns;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Un=class extends Zt{};Un.prototype.ValueTypeName="vector";var ca=class{constructor(e="",t=-1,n=[],i=jd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ab(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Zt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=Sb(c);c=xu(c,1,h),l=xu(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Dn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,b){if(f.length!==0){let m=[],p=[];qu(f,m,p,g),m.length!==0&&b.push(new u(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(let b in f){let m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){let v=d[g];m.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new Dn(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(Un,f+".position",d,"pos",i),n(Nn,f+".quaternion",d,"rot",i),n(Un,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function wb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dn;case"vector":case"vector2":case"vector3":case"vector4":return Un;case"color":return oa;case"quaternion":return Nn;case"bool":case"boolean":return ni;case"string":return ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ab(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=wb(r.type);if(r.times===void 0){let t=[],n=[];qu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Jn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Gc=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Tb=new Gc,On=class{constructor(e){this.manager=e!==void 0?e:Tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};On.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sn={},Wc=class extends Error{constructor(e,t){super(e),this.response=t}},qs=class extends On{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Jn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Sn[e]!==void 0){Sn[e].push({onLoad:t,onProgress:n,onError:i});return}Sn[e]=[],Sn[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Sn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,b=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{b+=x.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let A=0,E=h.length;A<E;A++){let R=h[A];R.onProgress&&R.onProgress(C)}p.enqueue(x),_()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Wc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Jn.add(e,l);let h=Sn[e];delete Sn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Sn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Sn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Xc=class extends On{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Jn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;let o=Bs("img");function c(){h(),Jn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var la=class extends On{constructor(e){super(e)}load(e,t,n,i){let s=new Tt,a=new Xc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Ys=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Uo=new Ce,_u=new P,vu=new P,js=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;_u.setFromMatrixPosition(e.matrixWorld),t.position.copy(_u),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),Uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qc=class extends js{constructor(){super(new vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=ss*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ds=class extends Ys{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new qc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},yu=new Ce,Ps=new P,Oo=new P,Yc=class extends js{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ps),Oo.copy(n.position),Oo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oo),n.updateMatrixWorld(),i.makeTranslation(-Ps.x,-Ps.y,-Ps.z),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}},ha=class extends Ys{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},jc=class extends js{constructor(){super(new cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends Ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var si=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ua=class extends On{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Jn.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Jn.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Jn.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Jn.add(e,c),s.manager.itemStart(e)}};var ul="\\[\\]\\.:\\/",Eb=new RegExp("["+ul+"]","g"),dl="[^"+ul+"]",Rb="[^"+ul.replace("\\.","")+"]",Cb=/((?:WC+[\/:])*)/.source.replace("WC",dl),Pb=/(WCOD+)?/.source.replace("WCOD",Rb),Ib=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dl),Lb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dl),Db=new RegExp("^"+Cb+Pb+Ib+Lb+"$"),Nb=["material","materials","bones","map"],Kc=class{constructor(e,t,n){let i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Eb,"")}static parseTrackName(e){let t=Db.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Nb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=Kc;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _x=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);function ju(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new pt,l=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}c.setIndex(u)}for(let h in s){let u=Yu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let g=Yu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Yu(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new it(a,t,n),c=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let b=h.getComponent(d,g);o.setComponent(d+u,g,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function fl(r,e){if(e===Nu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Js||e===fa){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Js)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var ba=class extends On{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vl(t)}),this.register(function(t){return new yl(t)}),this.register(function(t){return new Pl(t)}),this.register(function(t){return new Il(t)}),this.register(function(t){return new Ll(t)}),this.register(function(t){return new Sl(t)}),this.register(function(t){return new wl(t)}),this.register(function(t){return new Al(t)}),this.register(function(t){return new Tl(t)}),this.register(function(t){return new _l(t)}),this.register(function(t){return new El(t)}),this.register(function(t){return new Ml(t)}),this.register(function(t){return new Cl(t)}),this.register(function(t){return new Rl(t)}),this.register(function(t){return new bl(t)}),this.register(function(t){return new Dl(t)}),this.register(function(t){return new Nl(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=si.extractUrlBase(e);a=si.resolveURL(l,this.path)}else a=si.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new qs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$u){try{a[Ge.KHR_BINARY_GLTF]=new Ul(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Hl(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:a[u]=new xl;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ol(s,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[u]=new Fl;break;case Ge.KHR_MESH_QUANTIZATION:a[u]=new kl;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function Ub(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bl=class{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Dt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ha(h),l.distance=u;break;case"spot":l=new ds(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Fn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},xl=class{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return yt}extendParams(e,t,n){let i=[];e.color=new fe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Dt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,xt))}return Promise.all(i)}},_l=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},vl=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(o,o)}return Promise.all(s)}},yl=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Ml=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},Sl=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Dt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,xt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},wl=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},Al=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(o[0],o[1],o[2],Dt),Promise.all(s)}},Tl=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},El=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(o[0],o[1],o[2],Dt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,xt)),Promise.all(s)}},Rl=class{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},Cl=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Xt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},Pl=class{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Il=class{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ll=class{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Dl=class{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Nl=class{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Qt.TRIANGLES&&l.mode!==Qt.TRIANGLE_STRIP&&l.mode!==Qt.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let b=new Ce,m=new P,p=new mt,_=new P(1,1,1),v=new Ln(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&_.fromBufferAttribute(c.SCALE,x),v.setMatrixAt(x,b.compose(m,p,_));for(let x in c)if(x==="_COLOR_0"){let C=c[x];v.instanceColor=new yi(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);gt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},$u="glTF",Zs=12,Ku={JSON:1313821514,BIN:5130562},Ul=class{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$u)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Zs,s=new DataView(e,Zs),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Ku.JSON){let l=new Uint8Array(e,Zs+a,o);this.content=n.decode(l)}else if(c===Ku.BIN){let l=Zs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ol=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=zl[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=zl[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ms[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let g in f.attributes){let b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(f)},o,l,Dt,d)})})}},Fl=class{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},kl=class{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}},xa=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,_=1-m,v=p-d+u;for(let x=0;x!==o;x++){let C=a[b+x+o],A=a[b+x+c]*h,E=a[g+x+o],R=a[g+x]*h;s[x]=_*C+v*A+m*E+p*R}return s}},Ob=new mt,Bl=class extends xa{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Ob.fromArray(s).normalize().toArray(s),s}},Qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ju={9728:Lt,9729:Bt,9984:$c,9985:Ds,9986:Xi,9987:un},Zu={33071:Tn,33648:Fs,10497:Cn},pl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fb={CUBICSPLINE:void 0,LINEAR:is,STEP:ns},ml={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function kb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new at({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:dn})),r.DefaultMaterial}function Si(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Bb(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function zb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vb(r){let e,t=r.extensions&&r.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gl(t.attributes):e=r.indices+":"+gl(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+gl(r.targets[n]);return e}function gl(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Vl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hb(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Gb=new Ce,Hl=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ub,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new la(this.options.manager):this.textureLoader=new ua(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Si(s,o,i),Fn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(si.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=pl[i.type],o=ms[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new it(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=pl[i.type],l=ms[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,v=t.cache.get(_);v||(b=new l(o,p*f,i.count*f/h),v=new hs(b,f/h),t.cache.add(_,v)),m=new vi(v,c,d%f/h,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new it(b,c,g);if(i.sparse!==void 0){let p=pl.SCALAR,_=ms[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,C=new _(a[1],v,i.sparse.count*p),A=new l(a[2],x,i.sparse.count*c);o!==null&&(m=new it(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,R=C.length;E<R;E++){let S=C[E];if(m.setX(S,A[E*c]),c>=2&&m.setY(S,A[E*c+1]),c>=3&&m.setZ(S,A[E*c+2]),c>=4&&m.setW(S,A[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Ju[d.magFilter]||Bt,h.minFilter=Ju[d.minFilter]||un,h.wrapS=Zu[d.wrapS]||Cn,h.wrapT=Zu[d.wrapT]||Cn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Lt&&h.minFilter!==Bt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Tt(b);m.needsUpdate=!0,d(m)}),t.load(si.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Fn(u,a),u.userData.mimeType=a.mimeType||Hb(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Xs,zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ws,zt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return at}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[Ge.KHR_MATERIALS_UNLIT]){let u=i[Ge.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Dt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=_t);let h=s.alphaMode||ml.OPAQUE;if(h===ml.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ml.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==yt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ie(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==yt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==yt){let u=s.emissiveFactor;o.emissive=new fe().setRGB(u[0],u[1],u[2],Dt)}return s.emissiveTexture!==void 0&&a!==yt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,xt)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),Fn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Si(i,u,s),u})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Qu(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Vb(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Qu(new pt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?kb(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let b=h[f],m=a[f],p,_=l[f];if(m.mode===Qt.TRIANGLES||m.mode===Qt.TRIANGLE_STRIP||m.mode===Qt.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Zr(b,_):new ke(b,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Qt.TRIANGLE_STRIP?p.geometry=fl(p.geometry,fa):m.mode===Qt.TRIANGLE_FAN&&(p.geometry=fl(p.geometry,Js));else if(m.mode===Qt.LINES)p=new na(b,_);else if(m.mode===Qt.LINE_STRIP)p=new us(b,_);else if(m.mode===Qt.LINE_LOOP)p=new ia(b,_);else if(m.mode===Qt.POINTS)p=new sa(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&zb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Fn(p,s),m.extensions&&Si(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Si(i,u[0],s),u[0];let d=new ft;s.extensions&&Si(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vt(ma.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new cs(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ce;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new $r(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],b=u[3],m=u[4],p=[];for(let _=0,v=d.length;_<v;_++){let x=d[_],C=f[_],A=g[_],E=b[_],R=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let S=n._createAnimationTracks(x,C,A,E,R);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new ca(s,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Gb)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new Gs:l.length>1?h=new ft:l.length===1?h=l[0]:h=new gt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),Fn(h,s),s.extensions&&Si(n,h,s),s.matrix!==void 0){let u=new Ce;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new ft;n.name&&(s.name=i.createUniqueName(n.name)),Fn(s,n),n.extensions&&Si(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof zt||d instanceof Tt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,c=[];ri[s.path]===ri.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ri[s.path]){case ri.weights:l=Dn;break;case ri.rotation:l=Nn;break;case ri.position:case ri.scale:l=Un;break;default:switch(n.itemSize){case 1:l=Dn;break;case 2:case 3:default:l=Un;break}break}let h=i.interpolation!==void 0?Fb[i.interpolation]:is,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+ri[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Vl(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Nn?Bl:xa;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Wb(r,e,t){let n=e.attributes,i=new Kt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=Vl(ms[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new P,c=new P;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let b=Vl(ms[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new Wt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Qu(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=zl[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Xe.workingColorSpace!==Dt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Fn(r,e),Wb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Bb(r,e.targets,t):r})}var ed=function(){"use strict";var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),v=0;v<p.length;++v){var x=p.charCodeAt(v);_[v]=x>96?x-97:x>64?x-39:x+4}for(var C=0,v=0;v<p.length;++v)_[C++]=_[v]<60?n[_[v]]:(_[v]-60)*64+_[++v];return _.buffer.slice(0,C)}function c(p,_,v,x,C,A){var E=s.exports.sbrk,R=v+3&-4,S=E(R*x),M=E(C.length),I=new Uint8Array(s.exports.memory.buffer);I.set(C,M);var k=p(S,v,x,M,C.length);if(k==0&&A&&A(S,R,x),_.set(I.subarray(S,S+v*x)),E(S-E(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(v){var x=v.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function g(p){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(v),C=0;C<p;++C)u[C]=f(x);URL.revokeObjectURL(x)}function b(p,_,v,x,C){for(var A=u[0],E=1;E<u.length;++E)u[E].pending<A.pending&&(A=u[E]);return new Promise(function(R,S){var M=new Uint8Array(v),I=d++;A.pending+=p,A.requests[I]={resolve:R,reject:S},A.object.postMessage({id:I,count:p,size:_,source:M,mode:x,filter:C},[M.buffer])})}function m(p){a.then(function(){var _=p.data;try{var v=new Uint8Array(_.count*_.size);c(s.exports[_.mode],v,_.count,_.size,_.source,s.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(x){self.postMessage({id:_.id,count:_.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,v,x,C){c(s.exports.meshopt_decodeVertexBuffer,p,_,v,x,s.exports[l[C]])},decodeIndexBuffer:function(p,_,v,x){c(s.exports.meshopt_decodeIndexBuffer,p,_,v,x)},decodeIndexSequence:function(p,_,v,x){c(s.exports.meshopt_decodeIndexSequence,p,_,v,x)},decodeGltfBuffer:function(p,_,v,x,C,A){c(s.exports[h[C]],p,_,v,x,s.exports[l[A]])},decodeGltfBufferAsync:function(p,_,v,x,C){return u.length>0?b(p,_,v,h[x],l[C]):a.then(function(){var A=new Uint8Array(p*_);return c(s.exports[h[x]],A,p,_,v,s.exports[l[C]]),A})}}}();var ge=r=>document.getElementById(r),kn={get(r,e=null){try{let t=localStorage.getItem(r);return t==null?e:JSON.parse(t)}catch{return e}},set(r,e){try{localStorage.setItem(r,JSON.stringify(e))}catch{}}};function ai(r){let e=new Set;r.traverse(t=>{t.geometry&&t.geometry.dispose(),(Array.isArray(t.material)?t.material:t.material?[t.material]:[]).forEach(i=>e.add(i))});for(let t of e){for(let n of Object.values(t))n&&n.isTexture&&n.dispose();t.dispose()}r.removeFromParent()}var Xb="__GAME_ASSETS__",_a=class{constructor(){this.cache=new Map,this.gltfLoader=new ba().setMeshoptDecoder(ed)}get isFileProtocol(){return location.protocol==="file:"}loadGLTF(e){return this.#e(e,async()=>{let t=await this.#t(e);return new Promise((n,i)=>this.gltfLoader.parse(t,"",n,i))})}loadJSON(e){return this.#e(e,async()=>{if(this.isFileProtocol)return(await this.#n(e)).data;let t=await fetch(e);if(!t.ok)throw new Error(`Falha ao carregar ${e}: ${t.status} ${t.statusText}`);return t.json()})}async release(e){let t=this.cache.get(e);if(!t)return;this.cache.delete(e);let n=await t.catch(()=>null);n&&n.scene&&ai(n.scene)}#e(e,t){if(!this.cache.has(e)){let n=t();n.catch(()=>this.cache.delete(e)),this.cache.set(e,n)}return this.cache.get(e)}async#t(e){if(!this.isFileProtocol){let n=await fetch(e);if(!n.ok)throw new Error(`Falha ao carregar ${e}: ${n.status} ${n.statusText}`);return n.arrayBuffer()}let t=await this.#n(e);return qb(t.data)}#n(e){return new Promise((t,n)=>{let i=document.createElement("script");i.src=e+".js",i.onload=()=>{let s=window[Xb]||{},a=s[e];delete s[e],i.remove(),a?t(a):n(new Error(`${e}.js n\xE3o registrou o asset`))},i.onerror=()=>{i.remove(),n(new Error(`N\xE3o foi poss\xEDvel ler ${e}.js (rode: python tools/embed_assets.py)`))},document.head.appendChild(i)})}};function qb(r){let e=atob(r),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}var va=class{constructor(e=document.body){this.renderer=new jr({antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zc,this.renderer.toneMapping=Qc,this.renderer.toneMappingExposure=1.05,e.prepend(this.renderer.domElement)}get canvas(){return this.renderer.domElement}setSize(e,t){this.renderer.setSize(e,t)}enableLowPower(){this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5))}render(e,t){this.renderer.render(e,t)}};var oi={physicsStep:.0085,maxFrameTime:.05,defaultVehicle:"chevette",defaultMap:"circuito"},Bn={options:"opts",bindings:"binds",bestLap:"best"},td=[.5,.75,.4],ya=9.81;var Ma=class{constructor(e){this.onFrame=e,this.last=performance.now(),this.running=!1,this.tick=this.tick.bind(this)}start(){this.running||(this.running=!0,this.last=performance.now(),requestAnimationFrame(this.tick))}resetClock(){this.last=performance.now()}tick(e){if(!this.running)return;requestAnimationFrame(this.tick);let t=Math.min((e-this.last)/1e3,oi.maxFrameTime);this.last=e,this.onFrame(t,e)}};var st=ma.clamp,Sa=(r,e)=>Math.atan2(Math.sin(r-e),Math.cos(r-e));function nd(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Qs=r=>(r/6e4|0)+":"+(r/1e3%60).toFixed(3).padStart(6,"0"),id=r=>r<1e3?Math.round(r/10)*10+" m":(r/1e3).toFixed(1).replace(".",",")+" km";var wa=class{constructor(e){let t=kn.get(Bn.options,{})||{};this.manualGearbox=!!t.manual,this.night=!!t.night,this.colorIndex=Number.isInteger(t.pi)&&t.pi>=0&&t.pi<e?t.pi:0,this.volume=typeof t.vol=="number"?st(t.vol,0,1):.7,this.mapId=t.mapa?"salto":"circuito",this.driftMode=!!t.drift}save(){kn.set(Bn.options,{manual:this.manualGearbox,night:this.night,pi:this.colorIndex,vol:this.volume,mapa:this.mapId==="salto"?1:0,drift:this.driftMode?1:0})}};var gs={CHASE:0,COCKPIT:1},Yb=new P,sd=new mt,jb=new mt,Kb=new mt,Jb=new mt().setFromAxisAngle(new P(0,1,0),Math.PI),Zb=new P(1,0,0),Qb=new P(0,1,0),Aa=class{constructor(e){this.camera=new vt(62,1,.1,1200),this.mode=gs.CHASE,this.heading=0,this.lookYaw=0,this.lookPitch=0,this.zoom=1,this.dragging=!1,this.idleTime=0,this.menuAngle=0,this.#e(e)}#e(e){let t=-1,n=0,i=0;e.style.cursor="grab",e.addEventListener("pointerdown",s=>{t>=0||(t=s.pointerId,n=s.clientX,i=s.clientY,this.dragging=!0,e.setPointerCapture(s.pointerId),e.style.cursor="grabbing")}),e.addEventListener("pointermove",s=>{s.pointerId===t&&(this.lookYaw+=(s.clientX-n)*.006,this.lookPitch=st(this.lookPitch+(s.clientY-i)*.004,-.35,.9),n=s.clientX,i=s.clientY,this.idleTime=0)});for(let s of["pointerup","pointercancel"])e.addEventListener(s,a=>{a.pointerId===t&&(t=-1,this.dragging=!1,e.style.cursor="grab")});e.addEventListener("wheel",s=>{this.zoom=st(this.zoom*(1+s.deltaY*.001),.5,2.5),s.preventDefault()},{passive:!1})}toggleMode(){this.mode^=1}reset(e){this.heading=e,this.lookYaw=this.lookPitch=0}setAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}update(e,t){let n=this.camera,i=t.vehicleState,s=Math.hypot(i.vx,i.vz);if(t.menuOpen&&innerWidth>=900?n.setViewOffset(innerWidth,innerHeight,-innerWidth*.2,0,innerWidth,innerHeight):n.view&&n.view.enabled&&n.clearViewOffset(),!this.dragging&&(this.idleTime+=e)>1.2){let a=Math.exp(-e*3);this.lookYaw*=a,this.lookPitch*=a}if(t.menuOpen)this.menuAngle+=e*.25,n.position.set(i.x+Math.sin(this.menuAngle)*7.5,2.3,i.z+Math.cos(this.menuAngle)*7.5),n.lookAt(i.x,.8,i.z),n.fov=45;else if(t.onFoot){let a=t.playerBody;this.heading+=Sa(a.h,this.heading)*Math.min(1,e*4);let o=4.3*this.zoom,c=this.heading-this.lookYaw,l=st(.3+this.lookPitch,.05,1.3),h=Math.cos(l);n.position.set(a.x-Math.sin(c)*h*o,1.25+Math.sin(l)*o,a.z-Math.cos(c)*h*o),n.lookAt(a.x,1.4,a.z),n.fov=60}else if(this.mode===gs.CHASE){let a=s>8?i.h+Sa(Math.atan2(i.vx,i.vz),i.h)*.35:i.h;this.heading+=Sa(a,this.heading)*Math.min(1,e*3.5);let o=(6.8+s*.03)*this.zoom,c=this.heading-this.lookYaw,l=st(.2+this.lookPitch+s*.0015,.02,1.3),h=Math.cos(l),u=Math.max(0,1-Math.abs(this.lookYaw)*1.5)*3;n.position.set(i.x-Math.sin(c)*h*o,1.1+Math.sin(l)*o,i.z-Math.cos(c)*h*o),n.lookAt(i.x+Math.sin(this.heading)*u,1.1,i.z+Math.cos(this.heading)*u),n.fov=62+Math.min(s,50)*.4}else{let a=t.vehicleModel;n.position.copy(Yb.fromArray(t.cockpitOffset).applyMatrix4(a.matrixWorld)),a.getWorldQuaternion(sd),n.quaternion.copy(sd).multiply(Jb).multiply(jb.setFromAxisAngle(Qb,this.lookYaw)).multiply(Kb.setFromAxisAngle(Zb,this.lookPitch)),n.fov=72}n.updateProjectionMatrix()}};function Ft(r,e,t,n=1,i=1){let s=document.createElement("canvas");s.width=r,s.height=e,t(s.getContext("2d"),r,e);let a=new ra(s);return a.colorSpace=xt,a.wrapS=a.wrapT=Cn,a.repeat.set(n,i),a.anisotropy=8,a}function Ta(r,e,t,n,i,s){r.fillStyle=n,r.fillRect(0,0,e,t);for(let a=0;a<i;a++){let o=Math.random()*255|0;r.fillStyle=`rgba(${o},${o},${o},${s})`,r.fillRect(Math.random()*e,Math.random()*t,2,2)}}var Ea={fog:13229292,fogNear:150,envIntensity:.9,sky:1},rd={fog:659488,fogNear:40,fogFar:320,envIntensity:.18,sky:.06},Ra=class{constructor(e){this.scene=new Vs,this.scene.fog=new Kr(Ea.fog,Ea.fogNear,700),this.sunDirection=new P(...td).normalize(),this.sky=ad(900,this.sunDirection,!1),this.scene.add(this.sky);let t=new Vs,n=ad(50,this.sunDirection,!0);t.add(n);let i=new ls(e);this.scene.environment=i.fromScene(t,.02).texture,this.scene.environmentIntensity=Ea.envIntensity,i.dispose(),n.traverse(s=>{s.geometry?.dispose(),s.material?.dispose()}),this.groundTexture=Ft(256,256,(s,a,o)=>{s.fillStyle="#4f7d3a",s.fillRect(0,0,a,o);for(let c=0;c<2500;c++)s.fillStyle=`hsl(${85+Math.random()*30},${35+Math.random()*20}%,${25+Math.random()*18}%)`,s.fillRect(Math.random()*a,Math.random()*o,2,2+Math.random()*3)},400,400),this.ground=new ke(new os(2e3,2e3),new at({map:this.groundTexture,roughness:1})),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.night=!1,this.mapFogFar=700}setGroundScale(e){this.ground.scale.setScalar(e),this.groundTexture.repeat.set(400*e,400*e)}setMapFogFar(e){this.mapFogFar=e,this.#e()}setNight(e){this.night=e;let t=e?rd:Ea;this.scene.environmentIntensity=t.envIntensity,this.scene.fog.color.set(t.fog),this.scene.fog.near=t.fogNear,this.sky.material.color.setScalar(t.sky),this.#e()}followCamera(e){this.sky.position.copy(e.position)}#e(){this.scene.fog.far=this.night?rd.fogFar:this.mapFogFar}};function ad(r,e,t){let n=new ei(r,32,16),i=n.attributes.position,s=new fe(13624306),a=new fe(3108804),o=new fe(7176034),c=new fe,l=[];for(let u=0;u<i.count;u++){let d=i.getY(u)/r;d<0?c.copy(o):c.lerpColors(s,a,Math.pow(d,.5)),l.push(c.r,c.g,c.b)}n.setAttribute("color",new Ke(l,3));let h=new ke(n,new yt({vertexColors:!0,side:It,fog:!1,depthWrite:!1}));if(t){let u=new ke(new ei(r*.08,16,8),new yt({color:new fe(14,12,9)}));u.position.copy(e).multiplyScalar(r*.9),h.add(u)}return h}var Ca=class{constructor(e,t){this.sunDirection=t,this.sun=new fs(16773596,2.6),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-35,right:35,top:35,bottom:-35,near:1,far:260}),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.03,e.add(this.sun,this.sun.target)}setNight(e){this.sun.intensity=e?.15:2.6,this.sun.color.set(e?9086207:16773596)}follow(e,t){let n=this.sunDirection;this.sun.position.set(e+n.x*120,n.y*120,t+n.z*120),this.sun.target.position.set(e,0,t)}reduceShadowQuality(){this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)}};var $b=[[0,-170],[95,-175],[175,-115],[185,-25],[120,35],[135,115],[65,180],[-45,150],[-75,80],[-155,60],[-195,-30],[-135,-120],[-60,-105]],Nt=700,od=8.2,Gl=420,Pa=class r{static async create(){return new r}constructor(){this.id="circuito",this.fogFar=700,this.groundScale=1,this.bodyClass="",this.group=new ft;let e=new aa($b.map(t=>new P(t[0],0,t[1])),!0,"centripetal");this.length=e.getLength(),this.points=e.getSpacedPoints(Nt).slice(0,Nt),this.tangents=this.points.map((t,n)=>e.getTangentAt(n/Nt)),this.normals=this.tangents.map(t=>new P(t.z,0,-t.x)),this.index=0,this.#t(),this.#n(),this.#i(),this.#s(),this.best=+kn.get(Bn.bestLap,0)||0,this.resetLaps(),this.onLap=null}#e(e,t,n,i,s){let a=[],o=[],c=[];for(let u=0;u<=Nt;u++){let d=this.points[u%Nt],f=this.normals[u%Nt];if(a.push(d.x+f.x*e,n,d.z+f.z*e,d.x+f.x*t,n,d.z+f.z*t),o.push(0,u/Nt,1,u/Nt),u<Nt){let g=u*2;c.push(g,g+1,g+2,g+1,g+3,g+2)}}let l=new pt;l.setAttribute("position",new Ke(a,3)),l.setAttribute("uv",new Ke(o,2)),l.setIndex(c),l.computeVertexNormals(),l.attributes.normal.getY(0)<0&&(l.setIndex(c.reverse()),l.computeVertexNormals());let h=new ke(l,new at({map:i,roughness:.9,polygonOffset:!0,polygonOffsetFactor:s,polygonOffsetUnits:s}));h.receiveShadow=!0,this.group.add(h)}#t(){let e=Ft(256,256,(n,i,s)=>{n.fillStyle="#3b3e43",n.fillRect(0,0,i,s);for(let a=0;a<5e3;a++){let o=Math.random()*255|0;n.fillStyle=`rgba(${o},${o},${o},.12)`,n.fillRect(Math.random()*i,Math.random()*s,2,2)}n.fillStyle="#e8e8e8",n.fillRect(i*.035,0,7,s),n.fillRect(i*.965-7,0,7,s),n.fillRect(i/2-3,0,6,s*.5)},1,this.length/12),t=Ft(64,64,(n,i,s)=>{n.fillStyle="#dcdcdc",n.fillRect(0,0,i,s),n.fillStyle="#c8191f",n.fillRect(0,0,i,s/2)},1,this.length/2.6);this.#e(-7,7,.02,e,-2),this.#e(7,8.3,.03,t,-3),this.#e(-8.3,-7,.03,t,-3)}#n(){let e=new ft,t=new at({color:14540253,metalness:.6,roughness:.4}),n=new cn(.25,.25,7);for(let a of[-8.8,8.8]){let o=new ke(n,t);o.position.set(a,3.5,0),o.castShadow=!0,e.add(o)}let i=Ft(256,32,a=>{for(let o=0;o<32;o++)for(let c=0;c<4;c++)a.fillStyle=(o+c)%2?"#fff":"#111",a.fillRect(o*8,c*8,8,8)}),s=new ke(new Jt(18,1.4,.3),new at({map:i}));s.position.y=6.6,s.castShadow=!0,e.add(s),e.position.copy(this.points[0]),e.rotation.y=Math.atan2(this.tangents[0].x,this.tangents[0].z),this.group.add(e)}#i(){this.trees=[];let e=new Ln(new cn(.25,.35,3,6),new at({color:5913378,roughness:1}),Gl),t=new Ln(new Mi(2.2,7,8),new at({color:16777215,roughness:.9}),Gl),n=new Ce,i=new mt,s=new P,a=new P,o=new fe;for(let c=0;c<Gl;){let l=(Math.random()-.5)*840,h=(Math.random()-.5)*840;if(this.index=0,this.distanceToTrack(l,h)<18)continue;let u=.8+Math.random()*.8;a.set(u,u,u),e.setMatrixAt(c,n.compose(s.set(l,1.5*u,h),i,a)),t.setMatrixAt(c,n.compose(s.set(l,5.5*u,h),i,a)),t.setColorAt(c,o.setHSL(.27+Math.random()*.08,.45,.18+Math.random()*.12)),this.trees.push([l,h,.4*u]),c++}this.index=0,e.castShadow=t.castShadow=!0,this.group.add(e,t)}#s(){let e=1e9,t=1e9,n=-1e9,i=-1e9;for(let s of this.points)e=Math.min(e,s.x),n=Math.max(n,s.x),t=Math.min(t,s.z),i=Math.max(i,s.z);this.mini={minX:e,minZ:t,scale:0,path:null,size:0},this.miniBounds={minX:e,minZ:t,maxX:n,maxZ:i}}distanceToTrack(e,t){let n=1e9,i=this.index,s=a=>{let o=this.points[a],c=(o.x-e)**2+(o.z-t)**2;c<n&&(n=c,i=a)};for(let a=-25;a<=25;a++)s((this.index+a+Nt)%Nt);if(n>900)for(let a=0;a<Nt;a++)s(a);return this.index=i,Math.sqrt(n)}#r(e,t){let n=1e9;for(let i=-25;i<=25;i++){let s=this.points[(this.index+i+Nt)%Nt],a=(s.x-e)**2+(s.z-t)**2;a<n&&(n=a)}return Math.sqrt(n)}isOnRoad(e,t){return this.#r(e,t)<od}surfaceUnder(e,t){return t.distance=this.distanceToTrack(e.x,e.z),t.onRoad=t.distance<od,t}forEachObstacleNear(e,t,n){for(let i of this.trees)n(i)}collideVehicle(e,t){if(t.distance<=160)return;let n=this.points[this.index],i=n.x-e.x,s=n.z-e.z,a=Math.hypot(i,s);e.x+=i/a*(t.distance-160),e.z+=s/a*(t.distance-160),e.vx*=.5,e.vz*=.5}collideBody(){}spawn(e,t){let n=t?this.index:Nt-6,i=this.points[n],s=this.tangents[n];e.x=i.x,e.z=i.z,e.h=Math.atan2(s.x,s.z),this.index=n}resetLaps(){this.sectors=7,this.lapRunning=!1,this.lapStart=0,this.lapsDone=0}shiftTimers(e){this.lapRunning&&(this.lapStart+=e)}updateProgress(e){let t=this.index,n=Nt;this.distanceToTrack(e.x,e.z);let i=this.index;if(i>n*.25&&i<n*.5&&(this.sectors|=1),i>n*.5&&i<n*.75&&(this.sectors|=2),i>n*.75&&i<n*.95&&(this.sectors|=4),!(t>n*.9&&i<n*.1&&this.sectors===7))return;let s=performance.now();if(this.lapRunning){let a=s-this.lapStart;this.lapsDone++;let o="Volta "+this.lapsDone+": "+Qs(a);(!this.best||a<this.best)&&(this.best=a,kn.set(Bn.bestLap,a),o+=" \u2013 novo recorde!"),this.onLap?.(o)}this.lapRunning=!0,this.lapStart=s,this.sectors=0}get currentLap(){return this.lapsDone+1}timerText(e){return this.lapRunning?Qs(e-this.lapStart):"0:00.000"}drawMinimap(e,t,n){let i=t.width;if(this.mini.size!==i){let o=this.miniBounds,c=(i-20)/Math.max(o.maxX-o.minX,o.maxZ-o.minZ),l=new Path2D;this.points.forEach((h,u)=>{let d=(h.x-o.minX)*c+10,f=(h.z-o.minZ)*c+10;u?l.lineTo(d,f):l.moveTo(d,f)}),l.closePath(),this.mini={scale:c,path:l,size:i}}let s=this.miniBounds,a=this.mini.scale;e.clearRect(0,0,i,t.height),e.lineWidth=5,e.strokeStyle="rgba(255,255,255,.75)",e.stroke(this.mini.path),e.fillStyle="#ff4d3a",e.beginPath(),e.arc((n.x-s.minX)*a+10,(n.z-s.minZ)*a+10,4.5,0,7),e.fill()}setNight(){}dispose(){ai(this.group),this.trees=this.points=this.tangents=this.normals=null}};var cd=(r,e)=>r*100003+e,Ia=class{constructor(e,t){this.roads=e,this.halfWidths=t,this.#e(),this.#t()}#e(){let e=new Map;this.nodeXY=[],this.edges=[],this.adjacency=[];let t=(n,i)=>{let s=Math.round(n*10)+","+Math.round(i*10),a=e.get(s);return a===void 0&&(a=this.nodeXY.length/2,e.set(s,a),this.nodeXY.push(n,i),this.adjacency.push([])),a};for(let n of this.roads){let i=n.P,s=t(i[0],i[1]),a=t(i[i.length-2],i[i.length-1]),o=[0],c=0;for(let l=0;l<i.length/2-1;l++)c+=Math.hypot(i[l*2+2]-i[l*2],i[l*2+3]-i[l*2+1]),o.push(c);n.e=this.edges.length,this.edges.push({a:s,b:a,L:c,P:i,acc:o,n:n.n}),this.adjacency[s].push(n.e),this.adjacency[a].push(n.e)}}#t(){this.grid=new Map,this.segments=[];for(let e of this.roads){let t=this.halfWidths[e.c];for(let n=0;n<e.P.length/2-1;n++){let i=[e.P[n*2],e.P[n*2+1],e.P[n*2+2],e.P[n*2+3],t,e.n,e.c,e.e,n],s=this.segments.length;this.segments.push(i);for(let a=Math.floor((Math.min(i[0],i[2])-t-30)/16);a<=Math.floor((Math.max(i[0],i[2])+t+30)/16);a++)for(let o=Math.floor((Math.min(i[1],i[3])-t-30)/16);o<=Math.floor((Math.max(i[1],i[3])+t+30)/16);o++){let c=cd(a,o);this.grid.has(c)?this.grid.get(c).push(s):this.grid.set(c,[s])}}}}#n(e,t){return this.grid.get(cd(Math.floor(e/16),Math.floor(t/16)))||ex}nearest(e,t){let n=null;for(let i of this.#n(e,t)){let s=this.segments[i],a=s[2]-s[0],o=s[3]-s[1],c=a*a+o*o,l=c?Math.max(0,Math.min(1,((e-s[0])*a+(t-s[1])*o)/c)):0,h=Math.hypot(e-s[0]-a*l,t-s[1]-o*l);(!n||h-s[4]<n[0]-n[2][4])&&(n=[h,l,s])}return n}isOnRoad(e,t){let n=this.nearest(e,t);return!!n&&n[0]<n[2][4]+.4}project(e,t){let n=null,i=s=>{let a=s[2]-s[0],o=s[3]-s[1],c=a*a+o*o,l=c?Math.max(0,Math.min(1,((e-s[0])*a+(t-s[1])*o)/c)):0,h=s[0]+a*l,u=s[1]+o*l,d=Math.hypot(e-h,t-u);(!n||d<n.d)&&(n={d,e:s[7],pos:this.edges[s[7]].acc[s[8]]+l*Math.sqrt(c),x:h,z:u})};for(let s of this.#n(e,t))i(this.segments[s]);if(!n||n.d>25)for(let s of this.segments)i(s);return n}nearestDrivable(e,t){let n=null;for(let c of this.segments){if(c[6]===7)continue;let l=c[2]-c[0],h=c[3]-c[1],u=l*l+h*h,d=u?Math.max(0,Math.min(1,((e-c[0])*l+(t-c[1])*h)/u)):0,f=Math.hypot(e-c[0]-l*d,t-c[1]-h*d);(!n||f<n[0])&&(n=[f,c,d])}let[,i,s]=n,a=i[2]-i[0],o=i[3]-i[1];return{x:i[0]+a*s,z:i[1]+o*s,heading:Math.atan2(a,o)}}#i(e,t,n,i){let s=this.edges[e],a=s.P,o=s.acc,c=o.length,l=h=>{let u=0;for(;u<c-2&&o[u+1]<h;u++);let d=o[u+1]-o[u]||1,f=Math.max(0,Math.min(1,(h-o[u])/d));i.push(a[u*2]+(a[u*2+2]-a[u*2])*f,a[u*2+1]+(a[u*2+3]-a[u*2+1])*f)};if(l(t),t<=n)for(let h=1;h<c-1;h++)o[h]>t&&o[h]<n&&i.push(a[h*2],a[h*2+1]);else for(let h=c-2;h>0;h--)o[h]<t&&o[h]>n&&i.push(a[h*2],a[h*2+1]);l(n)}route(e,t){let n=[];if(e.e===t.e)return this.#i(e.e,e.pos,t.pos,n),{pts:n,L:Math.abs(t.pos-e.pos)};let i=this.adjacency.length,s=new Float64Array(i).fill(1/0),a=new Int32Array(i).fill(-1),o=new Uint8Array(i),c=new Wl,l=m=>Math.hypot(this.nodeXY[m*2]-t.x,this.nodeXY[m*2+1]-t.z),h=this.edges[e.e],u=this.edges[t.e];s[h.a]=e.pos,s[h.b]=Math.min(s[h.b],h.L-e.pos),c.push(s[h.a]+l(h.a),h.a),c.push(s[h.b]+l(h.b),h.b);let d=1/0,f=-1;for(;c.size;){let[m,p]=c.pop();if(!o[p]){if(m>=d)break;o[p]=1,p===u.a&&s[p]+t.pos<d&&(d=s[p]+t.pos,f=p),p===u.b&&s[p]+u.L-t.pos<d&&(d=s[p]+u.L-t.pos,f=p);for(let _ of this.adjacency[p]){let v=this.edges[_],x=v.a===p?v.b:v.a,C=s[p]+v.L;C<s[x]&&(s[x]=C,a[x]=_,c.push(C+l(x),x))}}}if(f<0)return null;let g=[];for(let m=f;a[m]>=0;){let p=a[m],_=this.edges[p];g.push([p,m]),m=_.a===m?_.b:_.a}let b=f;for(let[m]of g){let p=this.edges[m];b=p.a===b?p.b:p.a}this.#i(e.e,e.pos,b===h.a?0:h.L,n);for(let m=g.length-1;m>=0;m--){let[p,_]=g[m],v=this.edges[p];_===v.b?this.#i(p,0,v.L,n):this.#i(p,v.L,0,n)}return this.#i(t.e,f===u.a?0:u.L,t.pos,n),{pts:n,L:d}}},ex=[],Wl=class{constructor(){this.items=[]}get size(){return this.items.length}push(e,t){let n=this.items;n.push([e,t]);for(let i=n.length-1;i>0;){let s=i-1>>1;if(n[s][0]<=n[i][0])break;[n[s],n[i]]=[n[i],n[s]],i=s}}pop(){let e=this.items,t=e[0],n=e.pop();if(e.length){e[0]=n;for(let i=0;;){let s=i*2+1,a=s+1,o=i;if(s<e.length&&e[s][0]<e[o][0]&&(o=s),a<e.length&&e[a][0]<e[o][0]&&(o=a),o===i)break;[e[o],e[i]]=[e[i],e[o]],i=o}}return t}};var tx="#b44dff",nx=.6,La=class{constructor(e,t,n){this.network=e,this.names=t,this.destination=null,this.route=null,this.timer=0,this.label="",this.onArrive=null,this.arrowTexture=Ft(64,64,(s,a,o)=>{s.clearRect(0,0,a,o),s.fillStyle="rgba(190,80,255,.55)",s.fillRect(0,0,a,o),s.strokeStyle="#f4dcff",s.lineWidth=9,s.lineJoin="round",s.beginPath(),s.moveTo(12,44),s.lineTo(32,20),s.lineTo(52,44),s.stroke()}),this.line=new ke(new pt,new yt({map:this.arrowTexture,transparent:!0,depthWrite:!1,side:_t,polygonOffset:!0,polygonOffsetFactor:-8,polygonOffsetUnits:-8})),this.line.frustumCulled=!1,this.line.renderOrder=3,this.line.visible=!1,this.beam=new ke(new cn(2.2,2.2,90,24,1,!0),new yt({color:12603135,transparent:!0,opacity:.28,depthWrite:!1,side:_t,blending:kr})),this.beam.position.y=45,this.beam.renderOrder=4;let i=new ke(new cn(4.5,4.5,.12,32),new yt({color:12603135,transparent:!0,opacity:.6,depthWrite:!1}));this.marker=new ft,this.marker.add(this.beam,i),this.marker.visible=!1,n.add(this.line,this.marker)}get hasDestination(){return!!this.destination}setDestination(e,t){let n=this.network.project(e,t);return!n||n.d>60?!1:(this.destination=n,this.marker.position.set(n.x,0,n.z),this.marker.visible=!0,this.timer=0,!0)}clear(){this.destination=this.route=null,this.line.visible=this.marker.visible=!1,this.label=""}update(e,t){if(!this.destination||(this.arrowTexture.offset.y-=t*1.4,this.beam.rotation.y+=t,(this.timer-=t)>0))return;this.timer=nx;let n=this.network.project(e.x,e.z);if(!n)return;let i=this.network.route(n,this.destination);if(!i){this.label="Sem caminho at\xE9 o destino",this.routeFound=!1;return}this.route=i,this.routeFound=!0,this.#e(i.pts);let s=this.names[this.network.edges[this.destination.e].n]||"Destino";this.label=s+" \xB7 "+id(i.L+n.d),i.L<14&&n.d<12&&(this.clear(),this.onArrive?.())}#e(e){let t=[],n=[],i=[],a=0;for(let c=0;c<e.length/2;c++){let l=Math.max(0,c-1),h=Math.min(e.length/2-1,c+1),u=e[h*2]-e[l*2],d=e[h*2+1]-e[l*2+1],f=Math.hypot(u,d)||1;u/=f,d/=f,c&&(a+=Math.hypot(e[c*2]-e[c*2-2],e[c*2+1]-e[c*2-1])),t.push(e[c*2]-d*.75,.08,e[c*2+1]+u*.75,e[c*2]+d*.75,.08,e[c*2+1]-u*.75),n.push(0,a/2.6,1,a/2.6),c&&i.push(c*2-2,c*2-1,c*2,c*2-1,c*2+1,c*2)}let o=new pt;o.setAttribute("position",new Ke(t,3)),o.setAttribute("uv",new Ke(n,2)),o.setIndex(i),this.line.geometry.dispose(),this.line.geometry=o,this.line.visible=e.length>=4}drawOn(e,t,n){if(this.route){let i=this.route.pts;e.strokeStyle=tx,e.lineWidth=n,e.lineCap=e.lineJoin="round",e.beginPath();for(let s=0;s<i.length;s+=2){let[a,o]=t(i[s],i[s+1]);s?e.lineTo(a,o):e.moveTo(a,o)}e.stroke()}}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.arrowTexture.dispose(),this.marker.traverse(e=>{e.geometry?.dispose(),e.material?.dispose()})}};var ix=[["#efe4cf","#f3d9b8","#e6ecef","#f2e6a8","#d9e8cf","#f0d0c8","#e2d4ef","#fafafa"],["#c9c2b6","#d8b28a","#b9c9d6","#e8e0d0","#a9b8a0","#e0c090","#d0a8a0","#bfbfbf"],["#d8d8d4","#c4ccd4","#e6dccb","#b8c0c8","#d4c4b0","#a8b4bc","#e4e4e0","#c8bca8"]],sx=["#9c3d2b","#a84a32","#8a3426","#7a4a3a","#6b6b6b","#9a5a3a","#b05a3a","#5e4a42"],ld=800,mn=32,Xl=2048,$s=(r,e)=>r*100003+e,Da=class r{static async create(e,t){let n=await e.loadJSON(t.data);return new r(n,t)}constructor(e,t){this.id=t.id,this.dataUrl=t.data,this.fogFar=620,this.groundScale=4.2,this.bodyClass="cidade",this.half=e.meia,this.names=e.nomes,this.start=e.inicio,this.group=new ft,this.rand=nd(20240611);let n=e.ruas.map(i=>({c:i[0],n:i[1],P:i.slice(2).map(s=>s/10)}));this.network=new Ia(n,e.larguras),this.#e(n,e),this.#n(e),this.#i(n,e.larguras),this.gps=new La(this.network,this.names,this.group),this.streetLabel="",this.streetTimer=0}#e(e,t){let n=Ft(256,256,(u,d,f)=>Ta(u,d,f,"#4a4c51",7e3,.1)),i=Ft(256,256,(u,d,f)=>Ta(u,d,f,"#8a6a45",6e3,.12)),s=Ft(256,256,(u,d,f)=>{Ta(u,d,f,"#b8b4ab",4e3,.08),u.strokeStyle="rgba(0,0,0,.16)",u.lineWidth=2;for(let g=0;g<=4;g++)u.beginPath(),u.moveTo(g*64,0),u.lineTo(g*64,f),u.moveTo(0,g*64),u.lineTo(d,g*64),u.stroke()}),a=Ft(8,64,(u,d,f)=>{u.clearRect(0,0,d,f),u.fillStyle="#f0c22e",u.fillRect(0,0,d,f*.55)}),o={},c=u=>o[u]||(o[u]={p:[],i:[]}),l={p:[],uv:[],i:[]};for(let u of e){let d=t.larguras[u.c];if(u.c===7){ql(c("dirt"),u.P,d,.035);continue}ql(c("sidewalk"),u.P,d+t.calcada,.018),ql(c("asphalt"),u.P,d,.04),u.c<=2&&rx(l,u.P)}for(let u of t.pracas){let d=c("sidewalk"),f=d.p.length/3;for(let g=0;g<u.length;g+=2)d.p.push(u[g]/10,.045,u[g+1]/10),d.i.push(f+g/2)}let h=(u,d,f)=>new at(Object.assign({map:u,roughness:.92,side:_t,polygonOffset:!0,polygonOffsetFactor:d,polygonOffsetUnits:d},f||{}));o.sidewalk&&this.#t(o.sidewalk,h(s,-1),4),o.asphalt&&this.#t(o.asphalt,h(n,-2),6),o.dirt&&this.#t(o.dirt,h(i,-2),6),l.p.length&&this.#t(l,h(a,-3,{transparent:!0,alphaTest:.5,roughness:.6}),1)}#t(e,t,n){let i=new pt,s=e.p.length/3,a=new Float32Array(s*2),o=new Float32Array(s*3);for(let l=0;l<s;l++)a[l*2]=e.p[l*3]/n,a[l*2+1]=e.p[l*3+2]/n,o[l*3+1]=1;i.setAttribute("position",new Ke(e.p,3)),i.setAttribute("normal",new it(o,3)),i.setAttribute("uv",e.uv?new Ke(e.uv,2):new it(a,2)),i.setIndex(e.i);let c=new ke(i,t);c.receiveShadow=!0,this.group.add(c)}#n(e){let t=new Jt(1,1,1);t.translate(0,.5,0);let n=new Mi(Math.SQRT1_2,1,4);n.rotateY(Math.PI/4),n.translate(0,.5,0);let i=new Jt(1,1,1);i.translate(0,.5,0);let s=new cn(.25,.35,3,6),a=new Mi(2.2,7,8);this.windowUniform={value:0};let o={body:[t,ax(this.windowUniform)],roof:[n,new at({roughness:.8,flatShading:!0})],slab:[i,new at({color:9211016,roughness:.95})],trunk:[s,new at({color:5913378,roughness:1})],crown:[a,new at({color:16777215,roughness:.9})]},c=new Map,l=(v,x)=>{let C=$s(Math.floor(v/ld),Math.floor(x/ld));return c.has(C)||c.set(C,{body:[],roof:[],slab:[],trunk:[],crown:[]}),c.get(C)},h=new Ce,u=new mt,d=new P(0,1,0),f=new P,g=new P,b=new fe,m=new mt;this.buildingGrid=new Map;let p=e.construcoes;for(let v=0;v<p.length;v+=8){let x=p[v]/10,C=p[v+1]/10,A=p[v+2]/10*Math.PI/180,E=p[v+3]/10,R=p[v+4]/10,S=p[v+5]/10,M=p[v+6],I=p[v+7],k=l(x,C);u.setFromAxisAngle(d,-A),k.body.push([h.compose(f.set(x,0,C),u,g.set(E,S,R)).clone(),ix[M][I]]),M===0?k.roof.push([h.compose(f.set(x,S,C),u,g.set(E*1.1,1.5+this.rand()*.8,R*1.1)).clone(),sx[I]]):k.slab.push([h.compose(f.set(x,S,C),u,g.set(E+.3,.35,R+.3)).clone(),null]);let F=[x,C,Math.cos(A),Math.sin(A),E/2,R/2],G=Math.hypot(E,R)/2+2;for(let j=Math.floor((x-G)/mn);j<=Math.floor((x+G)/mn);j++)for(let V=Math.floor((C-G)/mn);V<=Math.floor((C+G)/mn);V++){let Z=$s(j,V);this.buildingGrid.has(Z)?this.buildingGrid.get(Z).push(F):this.buildingGrid.set(Z,[F])}}this.treeGrid=new Map;let _=e.arvores;for(let v=0;v<_.length;v+=3){let x=_[v]/10,C=_[v+1]/10,A=_[v+2]/100,E=l(x,C);g.set(A,A,A),E.trunk.push([h.compose(f.set(x,1.5*A,C),m,g).clone(),null]),E.crown.push([h.compose(f.set(x,5.5*A,C),m,g).clone(),b.setHSL(.27+this.rand()*.08,.45,.18+this.rand()*.12).getHex()]);let R=$s(Math.floor(x/mn),Math.floor(C/mn)),S=[x,C,.4*A];this.treeGrid.has(R)?this.treeGrid.get(R).push(S):this.treeGrid.set(R,[S])}for(let v of c.values())for(let[x,[C,A]]of Object.entries(o)){let E=v[x];if(!E.length)continue;let R=new Ln(C,A,E.length);E.forEach(([S,M],I)=>{R.setMatrixAt(I,S),M!=null&&R.setColorAt(I,b.set(M))}),R.castShadow=!0,R.receiveShadow=x!=="trunk",R.instanceMatrix.needsUpdate=!0,R.instanceColor&&(R.instanceColor.needsUpdate=!0),R.computeBoundingSphere(),this.group.add(R)}}#i(e,t){let n=this.half,i=Xl;this.miniScale=i/(2*n+200);let s=this.miniScale,a=c=>(c+n+100)*s;this.miniCanvas=document.createElement("canvas"),this.miniCanvas.width=this.miniCanvas.height=i;let o=this.miniCanvas.getContext("2d");o.fillStyle="rgba(20,32,20,.55)",o.fillRect(0,0,i,i),o.lineCap=o.lineJoin="round";for(let c of e.slice().sort((l,h)=>h.c-l.c)){o.strokeStyle=c.c===7?"rgba(190,150,100,.8)":c.c<=1?"#ffd84a":c.c===2?"#ffffff":"rgba(255,255,255,.75)",o.lineWidth=Math.max(1.2,t[c.c]*2*s*1.6),o.beginPath();for(let l=0;l<c.P.length;l+=2)l?o.lineTo(a(c.P[l]),a(c.P[l+1])):o.moveTo(a(c.P[l]),a(c.P[l+1]));o.stroke()}}isOnRoad(e,t){return this.network.isOnRoad(e,t)}surfaceUnder(e,t){return t.distance=0,t.onRoad=this.network.isOnRoad(e.x,e.z),t}forEachObstacleNear(e,t,n){let i=Math.floor(e/mn),s=Math.floor(t/mn);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let c=this.treeGrid.get($s(i+a,s+o));if(c)for(let l of c)n(l)}}collideBody(e){let n=this.buildingGrid.get($s(Math.floor(e.x/mn),Math.floor(e.z/mn)));if(n){for(let i of n){let s=e.x-i[0],a=e.z-i[1],o=s*i[2]+a*i[3],c=-s*i[3]+a*i[2];if(Math.abs(o)>i[4]+1.05||Math.abs(c)>i[5]+1.05)continue;let l=Math.max(-i[4],Math.min(i[4],o)),h=Math.max(-i[5],Math.min(i[5],c)),u=o-l,d=c-h,f,g=Math.hypot(u,d);if(g>1e-4){if(g>=1.05)continue;u/=g,d/=g,f=1.05-g}else{let _=i[4]-Math.abs(o),v=i[5]-Math.abs(c);_<v?(u=Math.sign(o)||1,d=0,f=_+1.05):(u=0,d=Math.sign(c)||1,f=v+1.05)}let b=u*i[2]-d*i[3],m=u*i[3]+d*i[2];e.x+=b*f,e.z+=m*f;let p=e.vx*b+e.vz*m;p<0&&(e.vx=(e.vx-1.3*p*b)*.8,e.vz=(e.vz-1.3*p*m)*.8,e.r*=.6)}this.limit(e)}}collideVehicle(e){this.collideBody(e)}limit(e){let t=this.half-8;Math.abs(e.x)>t&&(e.x=Math.sign(e.x)*t,e.vx*=-.3),Math.abs(e.z)>t&&(e.z=Math.sign(e.z)*t,e.vz*=-.3)}spawn(e,t){if(!t){e.x=this.start[0],e.z=this.start[1],e.h=this.start[2];return}let n=this.network.nearestDrivable(e.x,e.z);e.x=n.x,e.z=n.z,e.h=Math.cos(n.heading-e.h)>=0?n.heading:n.heading+Math.PI}updateProgress(){}shiftTimers(){}resetLaps(){}streetName(e,t){if((this.streetTimer-=1)>0)return this.streetLabel;this.streetTimer=15;let n=this.network.nearest(e,t);return this.streetLabel=n&&n[0]<n[2][4]+12&&this.names[n[2][5]]||"Salto de Pirapora",this.streetLabel}timerText(e,t){return this.streetName(t.x,t.z)}drawMinimap(e,t,n){let i=t.width,s=this.miniScale,a=i/520/s,o=i/520,c=this.half;e.clearRect(0,0,i,i),e.save(),e.beginPath(),e.arc(i/2,i/2,i/2-2,0,7),e.clip(),e.translate(i/2,i/2),e.rotate(-Math.PI/2-Math.atan2(Math.cos(n.h),Math.sin(n.h))),e.drawImage(this.miniCanvas,-(n.x+c+100)*s*a,-(n.z+c+100)*s*a,Xl*a,Xl*a);let l=[0,0];this.gps.drawOn(e,(u,d)=>(l[0]=(u-n.x)*o,l[1]=(d-n.z)*o,l),4);let h=this.gps.destination;if(h){let u=(h.x-n.x)*o,d=(h.z-n.z)*o,f=Math.hypot(u,d),g=i/2-9;f>g&&(u*=g/f,d*=g/f),e.fillStyle="#b44dff",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.arc(u,d,6,0,7),e.fill(),e.stroke()}e.restore(),e.fillStyle="#ff4d3a",e.beginPath(),e.moveTo(i/2,i/2-8),e.lineTo(i/2+5.5,i/2+6),e.lineTo(i/2-5.5,i/2+6),e.closePath(),e.fill()}drawFullMap(e,t,n,i){let s=[0,0],a=(d,f)=>t(d,f,s);e.lineCap=e.lineJoin="round";for(let d of this.network.roads.slice().sort((f,g)=>g.c-f.c)){e.strokeStyle=d.c===7?"#8a7458":d.c<=1?"#f2c94c":d.c===2?"#ffffff":"#c9cdd2",e.lineWidth=Math.max(d.c<=2?2:1,this.network.halfWidths[d.c]*2*n),e.beginPath();for(let f=0;f<d.P.length;f+=2){let[g,b]=a(d.P[f],d.P[f+1]);f?e.lineTo(g,b):e.moveTo(g,b)}e.stroke()}this.gps.drawOn(e,a,Math.max(4,3*n));let o=this.gps.destination;if(o){let[d,f]=a(o.x,o.z);e.fillStyle="#b44dff",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.arc(d,f-16,9,Math.PI*.85,Math.PI*.15),e.lineTo(d,f),e.closePath(),e.fill(),e.stroke(),e.fillStyle="#fff",e.beginPath(),e.arc(d,f-16,3.5,0,7),e.fill()}let[c,l]=a(i.x,i.z),h=Math.sin(i.h),u=Math.cos(i.h);e.fillStyle="#ff4d3a",e.strokeStyle="#fff",e.lineWidth=2,e.beginPath(),e.moveTo(c+h*11,l+u*11),e.lineTo(c-h*7+u*7,l-u*7-h*7),e.lineTo(c-h*3,l-u*3),e.lineTo(c-h*7-u*7,l-u*7+h*7),e.closePath(),e.fill(),e.stroke()}setNight(e){this.windowUniform.value=e?1:0}dispose(){this.gps.dispose(),ai(this.group),this.miniCanvas.width=this.miniCanvas.height=0,this.network=this.buildingGrid=this.treeGrid=this.miniCanvas=null}};function ql(r,e,t,n){let i=e.length/2,s=-1;for(let a=0;a<i;a++){let o=e[a*2],c=e[a*2+1],l=a>0?a-1:0,h=a<i-1?a+1:i-1,u=o-e[l*2],d=c-e[l*2+1],f=e[h*2]-o,g=e[h*2+1]-c,b=Math.hypot(u,d)||1,m=Math.hypot(f,g)||1;u/=b,d/=b,f/=m,g/=m,a===0&&(u=f,d=g),a===i-1&&(f=u,g=d);let p=u+f,_=d+g,v=Math.hypot(p,_);v<1e-6?(p=f,_=g):(p/=v,_/=v);let x=Math.min(2.5,1/Math.max(.4,p*f+_*g)),C=r.p.length/3;r.p.push(o-_*t*x,n,c+p*t*x,o+_*t*x,n,c-p*t*x),s>=0&&r.i.push(s,s+1,C,s+1,C+1,C),s=C;let A=a>0&&a<i-1&&u*f+d*g<.985;if(a===0||a===i-1||A){let E=r.p.length/3,R=12;r.p.push(o,n,c);for(let S=0;S<=R;S++){let M=S/R*Math.PI*2;r.p.push(o+Math.cos(M)*t,n,c+Math.sin(M)*t)}for(let S=0;S<R;S++)r.i.push(E,E+1+S,E+2+S)}}}function rx(r,e){let t=0;for(let n=0;n<e.length/2-1;n++){let i=e[n*2],s=e[n*2+1],a=e[n*2+2],o=e[n*2+3],c=Math.hypot(a-i,o-s);if(c<.01)continue;let l=-(o-s)/c*.07,h=(a-i)/c*.07,u=r.p.length/3;r.p.push(i+l,.052,s+h,i-l,.052,s-h,a+l,.052,o+h,a-l,.052,o-h),r.uv.push(0,t/6,1,t/6,0,(t+c)/6,1,(t+c)/6),r.i.push(u,u+1,u+2,u+1,u+3,u+2),t+=c}}function ax(r){let e=new at({roughness:.88});return e.onBeforeCompile=t=>{t.uniforms.uNoite=r,t.vertexShader=`varying vec3 vWP; varying vec3 vWN;
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
      totalEmissiveRadiance += gLuz * uNoite * vec3(1.0, 0.78, 0.45) * 1.6;`)},e}var hd={circuito:{id:"circuito",name:"Circuito",create:()=>Pa.create()},salto:{id:"salto",name:"Salto de Pirapora",data:"assets/maps/salto_de_pirapora/salto_de_pirapora.json",attribution:"\xA9 colaboradores do OpenStreetMap",create:(r,e)=>Da.create(r,e)}};var Na=class{constructor(e,t){this.environment=e,this.assets=t,this.map=null,this.loading=null}get mapId(){return this.map?this.map.id:null}async setMap(e){if(this.map&&this.map.id===e)return this.map;let t=hd[e];if(!t)throw new Error(`Mapa desconhecido: ${e}`);let n=await t.create(this.assets,t),i=this.map;return i&&(this.environment.scene.remove(i.group),i.dispose(),i.dataUrl&&this.assets.release(i.dataUrl)),this.map=n,this.environment.scene.add(n.group),this.environment.setGroundScale(n.groundScale),this.environment.setMapFogFar(n.fogFar),n.setNight(this.environment.night),n}};var Ua=class{constructor(e,t,n){this.capacity=t,this.color=n,this.next=0,this.positions=new Float32Array(t*12),this.colors=new Float32Array(t*16);let i=[];for(let s=0;s<t;s++){let a=s*4;i.push(a,a+1,a+2,a+1,a+3,a+2)}this.geometry=new pt,this.geometry.setAttribute("position",new it(this.positions,3).setUsage(ol)),this.geometry.setAttribute("color",new it(this.colors,4).setUsage(ol)),this.geometry.setIndex(i),this.mesh=new ke(this.geometry,new yt({vertexColors:!0,transparent:!0,depthWrite:!1,side:_t,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,e.add(this.mesh)}addQuad(e,t,n,i,s,a,o,c,l,h){let u=this.next++%this.capacity,d=u*12,f=u*16,[g,b,m]=this.color,p=this.positions,_=this.colors;p[d]=e,p[d+1]=.04,p[d+2]=t,p[d+3]=n,p[d+4]=.04,p[d+5]=i,p[d+6]=s,p[d+7]=.04,p[d+8]=a,p[d+9]=o,p[d+10]=.04,p[d+11]=c,_[f]=g,_[f+1]=b,_[f+2]=m,_[f+3]=l,_[f+4]=g,_[f+5]=b,_[f+6]=m,_[f+7]=l,_[f+8]=g,_[f+9]=b,_[f+10]=m,_[f+11]=h,_[f+12]=g,_[f+13]=b,_[f+14]=m,_[f+15]=h,this.geometry.attributes.position.needsUpdate=this.geometry.attributes.color.needsUpdate=!0}clear(){this.positions.fill(0),this.geometry.attributes.position.needsUpdate=!0}},Oa=class{constructor(e,t,n){this.asphalt=new Ua(e,3e3,[.02,.02,.025]),this.dirt=new Ua(e,2e3,[.17,.115,.06]),this.wheelPoints=t,this.smoke=n,this.trails=t.map(()=>({on:!1,buffer:null,lx:0,lz:0,rx:0,rz:0,alpha:0,x:0,z:0})),this.intensity=0}update(e,t){let n=Math.sin(e.h),i=Math.cos(e.h),s=i,a=-n,o=0;for(let c=0;c<this.wheelPoints.length;c++){let l=this.wheelPoints[c],h=this.trails[c],u=l[2]?e.slipRear:e.slipFront,d=e.x+n*l[1]+s*l[0],f=e.z+i*l[1]+a*l[0],g=t.isOnRoad(d,f),b=g?this.asphalt:this.dirt,m=g?.1:.14,p=u*(g?.85:.6);o=Math.max(o,u);let _=d+s*m,v=f+a*m,x=d-s*m,C=f-a*m;u>.05?h.on&&h.buffer===b?Math.hypot(d-h.x,f-h.z)>.3&&(b.addQuad(h.lx,h.lz,h.rx,h.rz,_,v,x,C,h.alpha,p),Object.assign(h,{lx:_,lz:v,rx:x,rz:C,alpha:p,x:d,z:f})):Object.assign(h,{on:!0,buffer:b,lx:_,lz:v,rx:x,rz:C,alpha:0,x:d,z:f}):h.on&&(h.buffer.addQuad(h.lx,h.lz,h.rx,h.rz,_,v,x,C,h.alpha,0),h.on=!1),u>.2&&Math.random()<u*.5&&this.smoke.emit(d,f,g,u,e)}this.intensity=o*6}clear(){this.asphalt.clear(),this.dirt.clear();for(let e of this.trails)e.on=!1}};var ud=90,Fa=class{constructor(e){this.texture=Ft(64,64,t=>{let n=t.createRadialGradient(32,32,2,32,32,32);n.addColorStop(0,"rgba(255,255,255,.9)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64)}),this.sprites=[],this.next=0;for(let t=0;t<ud;t++){let n=new Jr(new Hs({map:this.texture,transparent:!0,depthWrite:!1,opacity:0,color:14540253}));n.visible=!1,n.userData={life:0,alpha:0,vx:0,vy:0,vz:0},e.add(n),this.sprites.push(n)}}emit(e,t,n,i,s){let a=this.sprites[this.next++%ud],o=a.userData;a.visible=!0,a.material.color.set(n?15132390:8084795),a.position.set(e,.25,t),o.life=1,o.alpha=i,o.vx=s.vx*.15+Math.random()-.5,o.vy=(n?.8:1.5)+Math.random(),o.vz=s.vz*.15+Math.random()-.5,a.scale.setScalar(n?1:.8)}update(e){for(let t of this.sprites){let n=t.userData;if(n.life<=0){t.visible=!1;continue}n.life-=e*.7,t.position.x+=n.vx*e,t.position.y+=n.vy*e*.5,t.position.z+=n.vz*e,t.scale.setScalar(1+(1-n.life)*4),t.material.opacity=Math.max(0,n.life)*.35*(n.alpha||1)}}};var bs=[["accel","Acelerar",["KeyW","ArrowUp"]],["brake","Frear / r\xE9",["KeyS","ArrowDown"]],["left","Virar \xE0 esquerda",["KeyA","ArrowLeft"]],["right","Virar \xE0 direita",["KeyD","ArrowRight"]],["hb","Freio de m\xE3o",["Space",""]],["sigL","Seta esquerda",["KeyQ",""]],["sigR","Seta direita",["KeyE",""]],["hazard","Pisca-alerta",["KeyH",""]],["lights","Far\xF3is",["KeyL",""]],["night","Dia / noite",["KeyN",""]],["cam","Trocar c\xE2mera",["KeyC",""]],["reset","Voltar \xE0 pista",["KeyR",""]],["map","Mapa / GPS",["KeyM",""]],["paint","Trocar pintura",["KeyP",""]],["up","Subir marcha",["ShiftLeft","KeyF"]],["dn","Descer marcha",["ControlLeft","KeyV"]],["man","Manual / autom\xE1tico",["KeyT",""]],["acao","Porta / entrar / sair",["KeyG",""]],["partida","Dar partida / desligar",["KeyI",""]],["modo","Modo normal / drift",["KeyB",""]]],ox={ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Space:"Espa\xE7o",ShiftLeft:"Shift",ControlLeft:"Ctrl",AltLeft:"Alt",Enter:"Enter",Tab:"Tab",Backquote:"`",Minus:"-",Equal:"=",Comma:",",Period:".",Slash:"/",Semicolon:";",BracketLeft:"[",BracketRight:"]",Backslash:"\\"},cx=["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"],dd=r=>r==="ShiftRight"?"ShiftLeft":r==="ControlRight"?"ControlLeft":r,ka=class{constructor(){this.down={},this.defaults=Object.fromEntries(bs.map(t=>[t[0],t[2]])),this.bindings=Object.fromEntries(bs.map(t=>[t[0],t[2].slice()]));let e=kn.get(Bn.bindings,null);if(e)for(let t in this.defaults)Array.isArray(e[t])&&e[t].length===2&&(this.bindings[t]=e[t].map(String));this.handlers={},this.interceptor=null,this.onEscape=null,this.isPlaying=()=>!1,this.releaseAll=this.releaseAll.bind(this),addEventListener("keydown",this.#e),addEventListener("keyup",this.#t),addEventListener("blur",this.releaseAll)}isDown(e){return this.bindings[e].some(t=>t&&this.down[t])||!!this.down["@"+e]}on(e,t){this.handlers[e]=t}releaseAll(){for(let e in this.down)this.down[e]=0}bindHoldButton(e,t){let n="@"+t;e.addEventListener("pointerdown",i=>{this.down[n]=1,i.preventDefault()});for(let i of["pointerup","pointerleave","pointercancel"])e.addEventListener(i,()=>{this.down[n]=0})}keyName(e){return e?ox[e]||e.replace(/^Key|^Digit/,"").replace(/^Numpad/,"Num "):"\u2014"}label(e){return this.keyName(this.bindings[e].find(t=>t)||"")}rebind(e,t,n){let i="";if(n==="Delete"||n==="Backspace")this.bindings[e][t]="";else{for(let[s,a]of bs)this.bindings[s].forEach((o,c)=>{o===n&&!(s===e&&c===t)&&(this.bindings[s][c]="",s!==e&&(i=this.keyName(n)+" foi movida de \u201C"+a+"\u201D."))});this.bindings[e][t]=n}return this.save(),i}resetBindings(){for(let[e,,t]of bs)this.bindings[e]=t.slice();this.save()}save(){kn.set(Bn.bindings,this.bindings)}#e=e=>{let t=dd(e.code);if(this.interceptor&&this.interceptor(t,e))return;if(t==="Escape"){e.repeat||this.onEscape?.();return}this.down[t]=1;let n=this.isPlaying();if(n&&!e.repeat)for(let i in this.handlers)this.bindings[i].includes(t)&&this.handlers[i]();n&&cx.includes(t)&&e.preventDefault()};#t=e=>{this.down[dd(e.code)]=0};dispose(){removeEventListener("keydown",this.#e),removeEventListener("keyup",this.#t),removeEventListener("blur",this.releaseAll)}};var Ba=class{constructor(e=.7){this.volume=e,this.ctx=null}init(){if(!this.ctx)try{let e=this.ctx=new(window.AudioContext||window.webkitAudioContext);e.resume?.(),this.master=e.createGain(),this.master.gain.value=this.volume,this.master.connect(e.destination);let t=e.createBiquadFilter();t.type="lowpass",t.frequency.value=900,this.engineGain=e.createGain(),this.engineGain.gain.value=0,this.engineOscA=e.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscB=e.createOscillator(),this.engineOscB.type="square",this.engineOscA.connect(t),this.engineOscB.connect(t),t.connect(this.engineGain),this.engineGain.connect(this.master),this.engineOscA.start(),this.engineOscB.start();let n=e.createBuffer(1,e.sampleRate,e.sampleRate),i=n.getChannelData(0);for(let o=0;o<i.length;o++)i[o]=Math.random()*2-1;let s=e.createBufferSource();s.buffer=n,s.loop=!0;let a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=1800,a.Q.value=2,this.tireGain=e.createGain(),this.tireGain.gain.value=0,s.connect(a),a.connect(this.tireGain),this.tireGain.connect(this.master),s.start()}catch{this.ctx=null}}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}suspend(){this.ctx?.suspend?.()}resume(){this.ctx?.resume?.()}update({engineLevel:e,throttle:t,engineOn:n,skid:i,sound:s}){if(!this.ctx)return;let a=this.ctx.currentTime,o=s.baseFrequency+e*s.frequencyRange;this.engineOscA.frequency.setTargetAtTime(o,a,.05),this.engineOscB.frequency.setTargetAtTime(o*.5,a,.05),this.engineGain.gain.setTargetAtTime(n?.05+t*.06:0,a,.08),this.tireGain.gain.setTargetAtTime(Math.min(i/6,1)*.06,a,.05)}playBlink(e){if(!this.ctx)return;let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.value=e?1500:1100,n.gain.value=.03,t.connect(n),n.connect(this.master||this.ctx.destination),t.start(),t.stop(this.ctx.currentTime+.025)}playStarter(){let e=this.ctx;if(!e)return;e.state==="suspended"&&e.resume();let t=e.currentTime,n=.95,i=e.createGain();i.gain.value=1,i.connect(this.master||e.destination);let s=e.createOscillator(),a=e.createBiquadFilter(),o=e.createGain();s.type="sawtooth",s.frequency.setValueAtTime(95,t),s.frequency.linearRampToValueAtTime(140,t+n),a.type="lowpass",a.frequency.value=1400,o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.2,t+.05),o.gain.setValueAtTime(.2,t+n-.12),o.gain.linearRampToValueAtTime(0,t+n);let c=e.createOscillator(),l=e.createGain();c.type="square",c.frequency.value=10.5,l.gain.value=.09,c.connect(l),l.connect(o.gain),s.connect(a),a.connect(o),o.connect(i);let h=e.createBuffer(1,Math.ceil(e.sampleRate*n),e.sampleRate),u=h.getChannelData(0);for(let m=0;m<u.length;m++)u[m]=Math.random()*2-1;let d=e.createBufferSource(),f=e.createBiquadFilter(),g=e.createGain();d.buffer=h,f.type="bandpass",f.frequency.value=1500,f.Q.value=1.1,g.gain.setValueAtTime(.12,t),g.gain.linearRampToValueAtTime(0,t+n),l.connect(g.gain),d.connect(f),f.connect(g),g.connect(i);let b=t+n+.05;s.start(t),c.start(t),d.start(t),s.stop(b),c.stop(b),d.stop(b),s.onended=()=>i.disconnect()}dispose(){this.ctx?.close(),this.ctx=null}};var wi=class{static vehicleVsObstacles(e,t){t.forEachObstacleNear(e.x,e.z,n=>{let i=e.x-n[0],s=e.z-n[1],a=i*i+s*s,o=n[2]+1;if(a>=o*o)return;let c=Math.sqrt(a)||.01,l=i/c,h=s/c;e.x=n[0]+l*o,e.z=n[1]+h*o;let u=e.vx*l+e.vz*h;u<0&&(e.vx=(e.vx-1.3*u*l)*.8,e.vz=(e.vz-1.3*u*h)*.8,e.r*=.6)})}static circleVsObstacles(e,t,n){n.forEachObstacleNear(e.x,e.z,i=>{let s=e.x-i[0],a=e.z-i[1],o=i[2]+t,c=Math.hypot(s,a);c<o&&c>1e-4&&(e.x=i[0]+s/c*o,e.z=i[1]+a/c*o)})}static circleVsVehicle(e,t,n,i){let s=Math.cos(n.h),a=Math.sin(n.h),o=e.x-n.x,c=e.z-n.z,l=o*s-c*a,h=o*a+c*s,[u,d]=i;if(Math.abs(l)>u+t||Math.abs(h)>d+t)return;let f=Math.max(-u,Math.min(u,l)),g=Math.max(-d,Math.min(d,h)),b=l-f,m=h-g,p,_=Math.hypot(b,m);if(_>1e-4){if(_>=t)return;b/=_,m/=_,p=t-_}else{let v=u-Math.abs(l),x=d-Math.abs(h);v<x?(b=Math.sign(l)||1,m=0,p=v+t):(b=0,m=Math.sign(h)||1,p=x+t)}e.x+=(b*s+m*a)*p,e.z+=(-b*a+m*s)*p}};var fd=(r,e,t)=>-r*Math.sin(e*Math.atan(11*t)),za={onRoad:!0,distance:0},Va=class{static step(e,t,n,i){let s=e.state,a=e.physics,o=e.driftMode,c=a.mass,l=a.wheelbase,h=a.cgToFront,u=a.cgToRear,d=a.wheelRadius,f=a.gearRatios,g=c*ya*u/l,b=c*ya*h/l,m=(X,te)=>Math.abs(te)/d*Math.abs(f[X+1])*9.549,p=t.accel,_=t.brake,v=t.handbrake;e.steerInput+=(t.steer-e.steerInput)*Math.min(1,i*(t.steer?6:10)),e.shiftTimer=Math.max(0,e.shiftTimer-i),e.autoShiftTimer=Math.max(0,e.autoShiftTimer-i);let x=Math.sin(s.h),C=Math.cos(s.h),A=s.vx*x+s.vz*C,E=s.vx*C-s.vz*x,R=s.r,S=Math.hypot(A,E);n.surfaceUnder(s,za);let M=za.onRoad?1.15:.7,I=A>=0?1:-1,k=Math.abs(A),F=Math.min(1,S/1.5),G=Math.min(1,k/.5),j=v?1:0;if(!e.manual&&(e.gear<1&&p&&A>-1.5?e.setGear(1):_&&!p&&A<1.5&&e.gear!==-1&&e.setGear(-1),e.gear>=1&&e.autoShiftTimer<=0)){let X=m(e.gear,S);e.gear<5&&X>6300?(e.setGear(e.gear+1),e.autoShiftTimer=.5):e.gear>1&&(X<2e3||p&&X<3200&&m(e.gear-1,S)<6e3)&&(e.setGear(e.gear-1),e.autoShiftTimer=.5)}let V=0,Z=0;e.manual?(V=p?1:0,Z=_?1:0):e.gear===-1?(V=_?1:0,Z=p&&A<-1?1:0):(V=p?1:0,Z=_?1:0,p&&A<-1&&(V=0,Z=1));let W=Math.max(k,1.5),ae=st(Math.atan2(E,Math.max(k,2)),-.8,.8),oe=-e.steerInput*Math.min(.6,.17+28/(S*S+30))*(v?.65:1);A>3&&(oe+=(o?.9:.3)*ae*Math.min(1,A/8)),oe=st(oe,-.55,.55),s.steer=-oe;let ve=st(c*s.ax*.35/l,-2e3,2e3),De=g-ve,qe=b+ve,q=f[e.gear+1],$=m(e.gear,A),pe=e.gear===0?900+V*6100:Math.max($,900+V*2600),ce=st((7200-pe)/400,0,1),Te=Math.max(.25,1-((pe-4800)/4200)**2),we=q===0||e.shiftTimer>0?0:Math.sign(q)*a.maxTorque*Te*V*Math.abs(q)*.9/d*ce;if(e.gear===-1&&(we*=.6,A<-12&&(we=0)),s.tc=!1,!o&&we>0&&!v){let X=Math.sqrt(Math.max(0,(1.2*M*qe)**2-(s.fyRear||0)**2)),te=s.escCut||1,ie=Math.abs(s.slipAngleRear||0);ie>.12&&(te*=st(1-(ie-.12)/.1,.25,1));let Re=Math.min(we*te,Math.max(X,350));Re<we-1&&(s.tc=!0),we=Re}let Fe=q===0?0:-I*G*((1-V)*(150+$*.12)+Math.max(0,$-7200)*1.5);e.rpm+=(pe-e.rpm)*Math.min(1,i*10);let lt=-I*G*(150+.42*A*A+(za.onRoad?0:900)),We=-I*G*Z*11e3,ht=1.3*M*De,D=1.3*M*qe,Et=st(We*.6,-.9*ht,.9*ht),Be=st(we+We*.4-I*G*j*1500,-.9*D,.9*D),ze=1-.25*st((Math.abs(ae)-.1)/.4,0,1),Se=Math.max(.25*M*De,M*De*Math.sqrt(Math.max(0,1-(Et/ht)**2)))*ze,tt=Math.max(.2*M*qe,M*qe*Math.sqrt(Math.max(0,1-(Be/D)**2)))*(j?o?.6:.75:1)*ze,Me=Math.atan((E+h*R)/W)-I*oe,T=Math.atan((E-u*R)/W),y=Math.min(1,S*i/.35+.02),O=o?Me:s.slipAngleFront+=(Me-s.slipAngleFront)*y,K=o?T:s.slipAngleRear+=(T-s.slipAngleRear)*y,J=(o?fd(Se,1.4,O):-Se*Math.sin(1.3*Math.atan(9.5*O)))*F,Y=(o?fd(tt,1.45,K):-tt*1.06*Math.sin(1.22*Math.atan(10*K)))*F,me=Math.cos(oe),se=Math.sin(oe),he=(Et*me-J*se+Be+lt+Fe)/c,Ve=(J*me+Et*se+Y)/c,Q=A+he*i,ue=E+Ve*i,Ae=Math.cos(R*i),Ee=Math.sin(R*i);if(R+=(h*(J*me+Et*se)-u*Y)/a.yawInertia*i,A=Q*Ae+ue*Ee,E=ue*Ae-Q*Ee,s.fyRear=Y,s.esc=!1,s.escCut=1,!o&&!j&&A>3){let X=1.2*ya*M/Math.max(A,3),te=st(A*oe/(l*(1+A*A/420)),-X,X),ie=Math.abs(R)-Math.abs(te)-.06,Re=Math.sign(R)!==Math.sign(te)&&Math.abs(R)>.08;if(ie>0||Re){let rt=st((Re?Math.abs(R):ie)/.15,0,1);R-=(R-te)*Math.min(1,i*6)*rt,A-=Math.min(Math.max(A,0),1.4*rt*i),E*=Math.exp(-1.5*rt*i),s.esc=!0,s.escCut=st(1-rt*.6,.3,1)}}let de=j&&S<14;de&&(R-=e.steerInput*(V?4:1.6)*(o?1:.5)*i),R*=Math.exp(-(de?1.2:.3)*i);let He=j&&V?0:Math.max(0,1-S/2.5);E*=Math.exp(-8*He*i),R*=Math.exp(-6*He*i),!V&&!Z&&S<.3&&(A*=Math.exp(-4*i),E*=Math.exp(-4*i)),R=st(R,-7,7),s.r=R,s.h+=R*i;let Le=Math.sin(s.h),Qe=Math.cos(s.h);s.vx=Le*A+Qe*E,s.vz=Qe*A-Le*E,s.x+=s.vx*i,s.z+=s.vz*i,wi.vehicleVsObstacles(s,n),n.collideVehicle(s,za),s.ax=he,s.ay=Ve,s.vf=A,s.pitch+=(st(-he*.004,-.05,.05)-s.pitch)*Math.min(1,i*6),s.roll+=(st(Ve*.0025,-.07,.07)-s.roll)*Math.min(1,i*6),e.throttle=V,s.brake=!!_,s.reverse=A<-.5;let L=X=>st((Math.abs(X)-.13)/.14,0,1)*F,ne=L(Me),H=L(T);j&&S>2&&(H=1),V>0&&Math.abs(we)>.88*D&&k<14&&(H=Math.max(H,.6)),Z&&k>18&&(ne=Math.max(ne,.35),H=Math.max(H,.5)),s.slipFront=ne,s.slipRear=H,n.updateProgress(s),e.engineSound=.25+.75*st(e.rpm/7e3,0,1.05)}};var ci={chevette:{name:"Chevette SL",model:"assets/models/vehicles/chevette/chevette.glb",paintMaterial:"Pintura_Branca",colors:["#e7e7e3","#c4161c","#1f4fb5","#f2b705","#1b1b1d","#2e8b57"],wheels:{fl:"Roda_Dianteira_Esquerda",fr:"Roda_Dianteira_Direita",rl:"Roda_Traseira_Esquerda",rr:"Roda_Traseira_Direita"},steeringWheel:"Volante",door:{hinge:[.765,0,.862],openAngle:-1.12,standPoint:[1.3,.15],parts:["Porta_Esquerda","Vidro_Porta_Esquerdo","Vidro_Quebra_Vento_Esquerdo","Borracha_Janela_Porta_Esquerdo_mesh","Divisor_Quebra_Vento_Esquerdo_mesh","Macaneta_Esquerda","Macaneta_Esquerda_Base","Friso_Porta_Esquerdo","Forro_Porta_Esquerdo","Forro_Porta_Esquerdo_Tecido","Apoio_Braco_Esquerdo","Retrovisor_Esquerdo_Base","Retrovisor_Esquerdo_Carcaca","Retrovisor_Esquerdo_Espelho","Emblema_Lateral_Esquerdo_mesh"]},lights:{head:"Lente_Farol",tail:"Lente_Vermelha",reverse:"Lente_Re_Branca",indicator:"Lente_Ambar",headlightOffset:[.5,.62,1.9]},cockpitCamera:[.37,1.13,-.24],driverSeat:{position:[.37,-.36,-.12],tilt:-.2,scale:.92},bodyHalfSize:[.82,2.12],tireContacts:[[.655,1.385,0],[-.655,1.385,0],[.685,-1.005,1],[-.685,-1.005,1]],physics:{mass:1e3,yawInertia:1300,wheelbase:2.39,cgToFront:1.15,cgToRear:1.24,wheelRadius:.289,gearRatios:[-9.5,0,12.5,7.6,5.2,3.9,3.1],maxTorque:170,idleRpm:900,redlineRpm:7200},sound:{baseFrequency:38,frequencyRange:120}}};var pd=["position","normal","uv"],lx=new P(0,1,0),hx=new mt,ux=new P,Ha=class{constructor(e,t){this.config=t,this.root=new ft,this.model=e.scene,this.root.add(this.model),this.#e(),this.#t(),this.#n(),this.doorAngle=0,this.doorTarget=0,this.wheelSpin=0,this.steeringAngle=0,this.steeringVelocity=0}#e(){let e=this.model,t=this.config;this.wheels={};for(let[n,i]of Object.entries(t.wheels)){let s=e.getObjectByName(i),a=new ft;a.position.copy(s.position),s.position.set(0,0,0),e.add(a),a.add(s),this.wheels[n]={pivot:a,wheel:s,front:n[0]==="f"}}this.steeringWheel=e.getObjectByName(t.steeringWheel),this.steeringRest=this.steeringWheel.quaternion.clone(),e.updateMatrixWorld(!0),this.door=new ft,this.door.position.fromArray(t.door.hinge),e.add(this.door),e.updateMatrixWorld(!0);for(let n of t.door.parts){let i=e.getObjectByName(n);i&&this.door.attach(i)}this.door.traverse(n=>{n.isMesh&&(n.castShadow=n.receiveShadow=!0,n.material&&/Vidro/.test(n.material.name)&&(n.renderOrder=2))}),e.updateMatrixWorld(!0),this.movingParts=new Set([this.steeringWheel,this.door,...Object.values(this.wheels).map(n=>n.pivot)])}#t(){let e=this.model,t=this.config.lights,n=o=>{for(;o;o=o.parent)if(this.movingParts.has(o))return!0;return!1},i=new Map,s=[],a={};e.traverse(o=>{if(!o.isMesh||n(o))return;let c=dx(o.geometry);c.applyMatrix4(o.matrixWorld),o.matrixWorld.determinant()<0&&fx(c);let l=o.material;if(l.name===t.indicator){c.computeBoundingBox();let h=c.boundingBox.getCenter(ux).x>0?"L":"R";l=a[h]||(a[h]=l.clone())}i.has(l)||i.set(l,[]),i.get(l).push(c),s.push(o)}),s.forEach(o=>{o.removeFromParent(),o.geometry.dispose()}),this.materials={indicators:a};for(let[o,c]of i){let l=new ke(ju(c,!1),o);c.forEach(u=>u.dispose()),l.castShadow=l.receiveShadow=!0,e.add(l);let h=o.name;/Vidro/.test(h)&&(Object.assign(o,{transparent:!0,opacity:.3,depthWrite:!1,side:_t,roughness:.04,metalness:.2}),o.color.set(726560),l.renderOrder=2),h===t.tail&&(o.emissive=new fe(16718352),o.emissiveIntensity=.15,this.materials.tail=o),h===t.reverse&&(o.emissive=new fe(16777215),o.emissiveIntensity=0,this.materials.reverse=o),h===t.head&&(o.emissive=new fe(16773846),o.emissiveIntensity=.05,this.materials.head=o),h===t.indicator&&(o.emissive=new fe(16742912),o.emissiveIntensity=0),h===this.config.paintMaterial&&(this.materials.paint=o)}}#n(){let[e,t,n]=this.config.lights.headlightOffset;this.headlights=[];for(let i of[-1,1]){let s=new ds(16773846,0,70,.5,.7,2);s.userData.side=i,s.position.set(i*e,t,n),this.model.add(s,s.target),this.headlights.push(s)}}setColor(e){this.materials.paint?.color.set(e)}update(e,t){let n=t.state;this.doorAngle+=(this.doorTarget-this.doorAngle)*Math.min(1,e*5),this.door.rotation.y=this.config.door.openAngle*this.doorAngle,this.root.position.set(n.x,0,n.z),this.root.rotation.y=n.h,this.model.rotation.set(n.pitch,0,n.roll),this.wheelSpin+=n.vf*e/this.config.physics.wheelRadius;for(let l of Object.values(this.wheels))l.wheel.rotation.x=this.wheelSpin,l.front&&(l.pivot.rotation.y=-n.steer*1.2);let i=-n.steer/.45*2.8,s=.02;for(let l=0;l<e;l+=s)this.steeringVelocity+=((i-this.steeringAngle)*140-this.steeringVelocity*15)*s,this.steeringAngle+=this.steeringVelocity*s;this.steeringWheel.quaternion.copy(this.steeringRest).multiply(hx.setFromAxisAngle(lx,this.steeringAngle));let a=t.lightsMode,o=a===2,c=this.materials;c.tail.emissiveIntensity=n.brake?3:a?.7:.15,c.head.emissiveIntensity=[.05,2.5,4][a];for(let l of this.headlights){let h=l.userData.side;l.intensity+=([0,3e3,7e3][a]-l.intensity)*Math.min(1,e*12),l.angle=o?.33:.5,l.distance=o?140:70,l.target.position.set(h*(o?.35:.5),o?.5:0,o?45:14)}c.reverse.emissiveIntensity=n.reverse?2:0,c.indicators.L&&(c.indicators.L.emissiveIntensity=t.indicatorLeftOn?4:0),c.indicators.R&&(c.indicators.R.emissiveIntensity=t.indicatorRightOn?4:0),this.root.updateMatrixWorld(!0)}dispose(){ai(this.root)}};function dx(r){let e=r.clone();for(let t of Object.keys(e.attributes))pd.includes(t)||e.deleteAttribute(t);for(let t of pd){let n=e.getAttribute(t);if(!n||n.array instanceof Float32Array&&!n.normalized&&!n.isInterleavedBufferAttribute)continue;let i=n.itemSize,s=new Float32Array(n.count*i);for(let a=0;a<n.count;a++)s[a*i]=n.getX(a),i>1&&(s[a*i+1]=n.getY(a)),i>2&&(s[a*i+2]=n.getZ(a)),i>3&&(s[a*i+3]=n.getW(a));e.setAttribute(t,new it(s,i))}return e.attributes.uv||e.setAttribute("uv",new Ke(new Float32Array(e.attributes.position.count*2),2)),e.index||e.setIndex([...Array(e.attributes.position.count).keys()]),e}function fx(r){let e=r.index.array.slice();for(let t=0;t<e.length;t+=3){let n=e[t];e[t]=e[t+2],e[t+2]=n}r.setIndex(Array.from(e))}var Ga=class{constructor(e){this.config=e,this.physics=e.physics,this.state={x:0,z:0,h:0,vx:0,vz:0,r:0,vf:0,ax:0,ay:0,steer:0,pitch:0,roll:0,slipFront:0,slipRear:0,brake:!1,reverse:!1,tc:!1,esc:!1,escCut:1,fyRear:0,slipAngleFront:0,slipAngleRear:0},this.gear=1,this.manual=!1,this.rpm=900,this.throttle=0,this.engineSound=.25,this.steerInput=0,this.shiftTimer=0,this.autoShiftTimer=0,this.engineOn=!1,this.startTimer=0,this.driftMode=!1,this.lightsMode=0,this.indicators=0,this.blinkTime=0,this.blinkOn=!1,this.onMessage=null,this.onBlink=null,this.onEngineStart=null}get speedMs(){return Math.hypot(this.state.vx,this.state.vz)}get indicatorLeftOn(){return this.blinkOn&&(this.indicators&1)!==0}get indicatorRightOn(){return this.blinkOn&&(this.indicators&2)!==0}resetMotion(){let e=this.state;e.vx=e.vz=e.steer=e.vf=e.r=e.ax=e.ay=0,this.gear=1,this.shiftTimer=0,this.rpm=900}setGear(e){e!==this.gear&&(this.gear=e,this.shiftTimer=.15)}#e(){this.manual||(this.manual=!0,this.onMessage?.("C\xE2mbio manual (T volta ao autom\xE1tico)",2))}shiftUp(){this.#e(),this.gear<5&&this.setGear(this.gear+1)}shiftDown(){if(this.#e(),this.gear===0&&Math.abs(this.state.vf)>3){this.onMessage?.("Pare o carro para engatar a r\xE9",1.5);return}this.gear>-1&&this.setGear(this.gear-1)}toggleGearbox(){this.manual=!this.manual,this.onMessage?.(this.manual?"C\xE2mbio manual":"C\xE2mbio autom\xE1tico",1.8)}toggleIgnition(){return this.engineOn?(this.engineOn=!1,this.onMessage?.("Motor desligado",1.2),!1):this.startTimer>0?!1:(this.startTimer=.9,this.setGear(0),!0)}stopEngine(){this.engineOn=!1,this.startTimer=0}updateEngine(e){this.startTimer>0&&(this.startTimer-=e)<=0&&(this.engineOn=!0,this.rpm=2600,this.onMessage?.("Motor ligado",1.2),this.onEngineStart?.()),this.engineOn||(this.rpm=this.startTimer>0?250+Math.random()*120:0)}cycleLights(){this.lightsMode=(this.lightsMode+1)%3}toggleIndicator(e){this.indicators=this.indicators===e?0:e,this.blinkTime=0}updateIndicators(e){this.blinkTime+=e;let t=this.indicators>0&&this.blinkTime%.66<.33;t!==this.blinkOn&&(this.blinkOn=t,this.indicators&&this.onBlink?.(t))}setDriftMode(e){this.driftMode=e,this.state.slipAngleFront=this.state.slipAngleRear=0}};var Wa=class{constructor(e,t){this.scene=e,this.assets=t,this.id=null,this.vehicle=null,this.controller=null}get available(){return Object.entries(ci).map(([e,t])=>({id:e,name:t.name}))}get config(){return ci[this.id]}async spawn(e){if(this.id===e&&this.vehicle)return this.vehicle;let t=ci[e];if(!t)throw new Error(`Ve\xEDculo desconhecido: ${e}`);let n=await this.assets.loadGLTF(t.model);return this.despawn(),this.id=e,this.vehicle=new Ha(n,t),this.controller=new Ga(t),this.scene.add(this.vehicle.root),this.vehicle}despawn(){if(!this.vehicle)return;let e=this.config.model;this.vehicle.dispose(),this.assets.release(e),this.vehicle=this.controller=null,this.id=null}};var Xa=class{constructor(){let e=new at({color:14196858,roughness:.7}),t=new at({color:3108789,roughness:.85}),n=new at({color:2764603,roughness:.9}),i=new at({color:2759698,roughness:.9}),s=new at({color:1381653,roughness:.6}),a=(u,d,f,g,b,m,p)=>{let _=new ke(new Jt(u,d,f),g);return _.position.set(b,m,p),_.castShadow=!0,_},o=u=>{let d=new ft;return d.position.set(u*.105,.92,0),d.add(a(.15,.84,.17,n,0,-.42,0),a(.15,.08,.27,s,0,-.88,.05)),d},c=u=>{let d=new ft;return d.position.set(u*.275,1.47,0),d.add(a(.11,.58,.12,t,0,-.29,0),a(.09,.1,.1,e,0,-.63,0)),d},l=new ke(new ei(.125,16,12),e),h=new ke(new ei(.132,16,8,0,Math.PI*2,0,Math.PI*.55),i);l.position.y=1.67,h.position.set(0,1.685,-.008),l.castShadow=!0,this.legL=o(1),this.legR=o(-1),this.armL=c(1),this.armR=c(-1),this.root=new ft,this.root.add(a(.42,.58,.24,t,0,1.2,0),a(.4,.12,.23,n,0,.93,0),a(.08,.08,.08,e,0,1.53,0),l,h,a(.03,.02,.02,i,-.045,1.7,.118),a(.03,.02,.02,i,.045,1.7,.118),this.legL,this.legR,this.armL,this.armR)}sitIn(e,t){e.add(this.root),this.root.position.fromArray(t.position),this.root.rotation.set(t.tilt,0,0),this.root.scale.setScalar(t.scale),this.legL.rotation.x=this.legR.rotation.x=-1.3,this.armL.rotation.x=this.armR.rotation.x=-1.05,this.armL.rotation.z=-.15,this.armR.rotation.z=.15}standIn(e,t,n,i){e.add(this.root),this.root.rotation.set(0,i,0),this.root.scale.setScalar(1),this.root.position.set(t,0,n),this.armL.rotation.z=this.armR.rotation.z=0}animateWalk(e,t,n,i,s){let a=Math.sin(e)*Math.min(.7,Math.abs(t)*.3);this.legL.rotation.x=a,this.legR.rotation.x=-a,this.armL.rotation.x=-a*.8,this.armR.rotation.x=a*.8,this.root.position.set(n,Math.abs(Math.cos(e))*Math.min(.05,Math.abs(t)*.012),i),this.root.rotation.y=s}};var px=1.8,mx=5.2,gx=2.6,md=.32,bx=1.8,qa=class{constructor(e){this.scene=e,this.inVehicle=!0,this.body={x:0,z:0,h:0,vx:0,vz:0,r:0,speed:0,phase:0},this.character=new Xa,this.onMessage=null}focus(e){return this.inVehicle?e:this.body}#e(e,t){let[n,i]=t.door.standPoint,s=Math.cos(e.h),a=Math.sin(e.h);return{x:e.x+n*s+i*a,z:e.z-n*a+i*s}}sitIn(e){this.character.sitIn(e.model,e.config.driverSeat)}enter(e,t){this.inVehicle=!0,e.doorTarget=0,t.stopEngine(),this.body.speed=0,this.sitIn(e)}exit(e,t){if(t.speedMs>1.2)return this.onMessage?.("Pare o carro para sair",1.5),!1;t.stopEngine(),this.inVehicle=!1,e.doorTarget=1;let n=this.#e(t.state,e.config);return Object.assign(this.body,{x:n.x,z:n.z,h:t.state.h,speed:0}),this.character.standIn(this.scene,n.x,n.z,this.body.h),!0}availableActions(e,t,n){if(this.inVehicle){let s=[];return t.startTimer>0?s.push(["","Dando partida\u2026",""]):s.push(["partida",t.engineOn?"Desligar motor":"Dar partida",n("partida")]),t.speedMs<1.2&&s.push(["sair","Sair do carro",n("acao")]),s}let i=this.#e(t.state,e.config);return Math.hypot(this.body.x-i.x,this.body.z-i.z)>bx?[]:e.doorTarget?[["entrar","Entrar no carro",n("acao")],["fechar","Fechar porta",""]]:[["abrir","Abrir porta",n("acao")]]}update(e,t,n,i,s){let a=this.body,o=t.isDown("accel")?1:0,c=t.isDown("brake")?1:0;a.h+=((t.isDown("left")?1:0)-(t.isDown("right")?1:0))*gx*e,a.speed+=((o-c*.6)*(t.isDown("hb")?mx:px)-a.speed)*Math.min(1,e*8),a.vx=Math.sin(a.h)*a.speed,a.vz=Math.cos(a.h)*a.speed,a.x+=a.vx*e,a.z+=a.vz*e,wi.circleVsVehicle(a,md,i,s.bodyHalfSize),wi.circleVsObstacles(a,md,n),n.collideBody(a),a.phase+=a.speed*e*3.4,this.character.animateWalk(a.phase,a.speed,a.x,a.z,a.h)}setVisible(e){this.character.root.visible=e}};var Ya=class{constructor(e){this.canvas=e,this.g=e.getContext("2d"),this.ratio=Math.min(devicePixelRatio,2),e.width=340*this.ratio,e.height=170*this.ratio}#e(e,t,n,i,s,a,o,c,l,h){let u=this.g,d=Math.PI*.75,f=b=>d+Math.PI*1.5*b;u.save(),u.translate(e,t),u.lineWidth=6,u.strokeStyle="rgba(255,255,255,.2)",u.beginPath(),u.arc(0,0,n-5,f(0),f(1)),u.stroke(),c&&(u.strokeStyle="#ff3b30",u.beginPath(),u.arc(0,0,n-5,f(c/s),f(1)),u.stroke()),u.strokeStyle=u.fillStyle="#fff",u.font="600 10px system-ui,sans-serif",u.textAlign="center",u.textBaseline="middle";for(let b=0;b<=s/a;b++){let m=f(b*a/s),p=Math.cos(m),_=Math.sin(m),v=b%o===0;u.lineWidth=v?2:1,u.beginPath(),u.moveTo(p*(n-12),_*(n-12)),u.lineTo(p*(n-(v?20:17)),_*(n-(v?20:17))),u.stroke(),v&&u.fillText(b*a,p*(n-31),_*(n-31))}let g=f(Math.min(i/s,1.04));u.strokeStyle="#ff4d3a",u.lineWidth=3,u.beginPath(),u.moveTo(-Math.cos(g)*8,-Math.sin(g)*8),u.lineTo(Math.cos(g)*(n-14),Math.sin(g)*(n-14)),u.stroke(),u.fillStyle="#ff4d3a",u.beginPath(),u.arc(0,0,5,0,7),u.fill(),u.fillStyle="#fff",u.font="700 16px system-ui,sans-serif",u.fillText(l,0,n*.5),u.font="500 10px system-ui,sans-serif",u.fillText(h,0,n*.5+14),u.restore()}draw(e){let t=this.g,n=e.speedMs*3.6,i=e.rpm,s=e.state;t.setTransform(this.ratio,0,0,this.ratio,0,0),t.clearRect(0,0,340,170),this.#e(80,86,74,i/1e3,8,1,1,7,(i/1e3).toFixed(1),"x1000 rpm"),this.#e(260,86,74,n,240,20,2,0,Math.round(n),"km/h"),t.textAlign="center",t.textBaseline="middle",t.fillStyle="#fff",t.font="700 40px system-ui,sans-serif",t.fillText(e.gear<0?"R":e.gear===0?"N":e.gear,170,78),t.font="600 11px system-ui,sans-serif",t.fillStyle=e.manual?"#ffb020":"#9fe870",t.fillText(e.manual?"MANUAL":"AUTO",170,106),(s.esc||s.tc)&&(t.fillStyle="#ffb020",t.font="700 11px system-ui,sans-serif",t.fillText(s.esc?"ESC":"TC",170,124)),t.fillStyle=e.driftMode?"#ff6b4a":"#8fd3ff",t.font="600 10px system-ui,sans-serif",t.fillText(e.driftMode?"DRIFT":"NORMAL",170,142),i>6400&&Math.floor(performance.now()/90)%2&&(t.fillStyle="#ff3b30",t.beginPath(),t.arc(170,30,8,0,7),t.fill())}};var ja=class{constructor(){this.root=ge("hud"),this.gauges=new Ya(ge("gg")),this.minimap=ge("mini"),this.minimapCtx=this.minimap.getContext("2d"),this.messageTimer=0,this.actionsSignature="",this.onAction=null,ge("acao").addEventListener("pointerdown",e=>{let t=e.target.closest("button");t&&t.dataset.acao&&(e.preventDefault(),this.onAction?.(t.dataset.acao))})}show(){this.root.style.display="block"}message(e,t=3){let n=ge("msg");n.textContent=e,n.style.opacity=1,this.messageTimer=t}tick(e){this.messageTimer>0&&(this.messageTimer-=e)<=0&&(ge("msg").style.opacity=0)}setMapMode(e){document.body.classList.toggle("cidade",e.bodyClass==="cidade")}setLap(e){ge("lap").textContent=e}setBest(e){ge("best").textContent=e?Qs(e):"\u2013"}setTimerText(e){let t=ge("time");t.textContent!==e&&(t.textContent=e)}setHelp(e){ge("help").textContent=e}fadeHelpLater(){setTimeout(()=>ge("help").style.opacity=0,9e3)}setDriveModeButton(e){ge("bmodo").textContent=e?"\u{1F4A8} Modo drift":"\u{1F697} Modo normal"}setDestination(e){let t=ge("dest");if(!e||!e.hasDestination||!e.label){t.hidden=!0;return}t.hidden=!1;let n=e.routeFound?"<span style='color:#d48cff'>\u25C6</span> "+e.label:e.label;t.innerHTML!==n&&(t.innerHTML=n)}setSignals(e){ge("sl").classList.toggle("on",e.indicatorLeftOn),ge("sr").classList.toggle("on",e.indicatorRightOn),ge("hl").className=e.lightsMode===2?"hi":e.lightsMode?"lo":"",ge("gm").textContent=e.manual?"M":"A"}setActions(e){let t=e.map(n=>n[0]+n[1]).join("|");t!==this.actionsSignature&&(this.actionsSignature=t,ge("acao").innerHTML=e.map(([n,i,s])=>"<button data-acao='"+n+"'"+(n?"":" disabled")+">"+i+(s&&s!=="\u2014"?" <kbd>"+s+"</kbd>":"")+"</button>").join(""))}draw(e,t,n){this.gauges.draw(e),t.drawMinimap(this.minimapCtx,this.minimap,n)}};var Ka=class{constructor(e,t){this.game=e,this.actions=t,this.screen="main",this.capture=null,document.querySelectorAll("[data-scr]").forEach(n=>n.onclick=()=>this.showScreen(n.dataset.scr)),ge("go").onclick=()=>e.started?t.resume():t.start(),ge("rs").onclick=()=>t.restart(),ge("pbtn").onpointerdown=n=>{n.preventDefault(),e.started&&!e.paused&&t.pause()},ge("o-gb").onclick=this.#e(n=>t.setGearbox(n===1)),ge("o-dm").onclick=this.#e(n=>t.setDriveMode(n===1)),ge("o-nt").onclick=this.#e(n=>t.setNight(n===1)),ge("o-map").onclick=this.#e(n=>t.selectMap(n===1?"salto":"circuito")),ge("o-vol").oninput=n=>t.setVolume(n.target.value/100),ge("ctlList").onclick=n=>{let i=n.target.closest(".kbtn");i&&(this.capture={action:i.dataset.act,slot:+i.dataset.idx},ge("ctlmsg").textContent="",this.renderControls())},ge("ctlreset").onclick=()=>{e.input.resetBindings(),e.updateHelp(),ge("ctlmsg").textContent="Controles restaurados.",this.renderControls()}}#e(e){return t=>{let n=t.target.closest("button");n&&e(+n.dataset.v)}}get isOpen(){return ge("intro").style.display!=="none"}open(){this.showScreen("main"),ge("go").textContent="Continuar",ge("rs").style.display="block",ge("intro").style.display="flex"}close(){ge("intro").style.display="none"}setLoading(e){ge("ld").textContent=e}enableStart(){ge("go").disabled=!1,ge("go").textContent="Jogar"}showScreen(e){this.screen=e,document.querySelectorAll(".scr").forEach(t=>t.hidden=t.id!=="scr-"+e),e==="ctl"&&this.renderControls(),e==="opt"&&this.refresh()}handleEscape(){return this.capture?(this.capture=null,this.renderControls(),!0):this.screen!=="main"?(this.showScreen("main"),!0):!1}captureKey(e){if(!this.capture)return!1;let{action:t,slot:n}=this.capture;return this.capture=null,e!=="Escape"&&(ge("ctlmsg").textContent=this.game.input.rebind(t,n,e),this.game.updateHelp()),this.renderControls(),!0}renderControls(){let e=this.game.input;ge("ctlList").innerHTML=bs.map(([t,n])=>"<span>"+n+"</span>"+[0,1].map(i=>{let s=this.capture&&this.capture.action===t&&this.capture.slot===i;return'<button class="kbtn'+(s?" cap":"")+'" data-act="'+t+'" data-idx="'+i+'">'+(s?"Pressione\u2026":e.keyName(e.bindings[t][i]))+"</button>"}).join("")).join("")}refresh(){let e=this.game.settings,t=(s,a)=>document.querySelectorAll(`#${s} button`).forEach(o=>o.classList.toggle("on",a(+o.dataset.v)));t("o-map",s=>s===1==(e.mapId==="salto")),ge("osm").hidden=e.mapId!=="salto",t("o-dm",s=>s===1===e.driftMode),t("o-gb",s=>s===1===e.manualGearbox),t("o-nt",s=>s===1===e.night);let n=this.game.vehicleColors,i=ge("o-col");i.children.length||n.forEach((s,a)=>{let o=document.createElement("button");o.style.background=s,o.onclick=()=>this.actions.setColor(a),i.appendChild(o)}),[...i.children].forEach((s,a)=>s.classList.toggle("on",a===e.colorIndex)),ge("o-vol").value=Math.round(e.volume*100)}};var Ja=class{constructor(e){this.game=e,this.open=!1,this.view={x:0,z:0,s:.3},this.pointers=new Map,this.dragged=!1,this.canvas=ge("gpscv"),this.ctx=this.canvas.getContext("2d"),this.#n()}get gps(){return this.game.world.map?.gps}show(e){if(!this.gps){this.game.hud.message("O mapa com GPS est\xE1 dispon\xEDvel em Salto de Pirapora",2.5);return}this.open=!0,this.game.input.releaseAll(),Object.assign(this.view,{x:e.x,z:e.z,s:Math.min(innerWidth,innerHeight)/1400}),ge("gps").hidden=!1,this.#e()}hide(){this.open=!1,ge("gps").hidden=!0,this.pointers.clear(),this.game.loop.resetClock()}#e(){let e=Math.min(devicePixelRatio,2);this.canvas.width=innerWidth*e,this.canvas.height=innerHeight*e,this.draw()}draw(){if(!this.open)return;let e=this.ctx,t=this.canvas.width/innerWidth,n=innerWidth,i=innerHeight,s=this.view;e.setTransform(t,0,0,t,0,0),e.fillStyle="#1d2a1f",e.fillRect(0,0,n,i),this.game.world.map.drawFullMap(e,(a,o,c)=>(c[0]=n/2+(a-s.x)*s.s,c[1]=i/2+(o-s.z)*s.s,c),s.s,this.game.focus)}#t(e,t,n){let i=innerWidth,s=innerHeight,a=this.view,o=a.x+(t-i/2)/a.s,c=a.z+(n-s/2)/a.s;a.s=st(a.s*e,.06,5);let l=this.game.world.map.half;a.x=st(o-(t-i/2)/a.s,-l,l),a.z=st(c-(n-s/2)/a.s,-l,l),this.draw()}#n(){let e=this.canvas;e.addEventListener("contextmenu",n=>n.preventDefault()),e.addEventListener("pointerdown",n=>{e.setPointerCapture(n.pointerId),this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY,x0:n.clientX,y0:n.clientY,button:n.button}),this.dragged=this.pointers.size>1}),e.addEventListener("pointermove",n=>{let i=this.pointers.get(n.pointerId);if(!i)return;if(this.pointers.size===2){let[o,c]=[...this.pointers.values()],l=Math.hypot(o.x-c.x,o.y-c.y);i.x=n.clientX,i.y=n.clientY;let h=Math.hypot(o.x-c.x,o.y-c.y);l>0&&this.#t(h/l,(o.x+c.x)/2,(o.y+c.y)/2),this.dragged=!0;return}let s=n.clientX-i.x,a=n.clientY-i.y;i.x=n.clientX,i.y=n.clientY,Math.hypot(n.clientX-i.x0,n.clientY-i.y0)>5&&(this.dragged=!0),this.dragged&&(this.view.x-=s/this.view.s,this.view.z-=a/this.view.s,this.draw())});let t=n=>{let i=this.pointers.get(n.pointerId);if(!i)return;if(this.pointers.delete(n.pointerId),this.dragged||n.type==="pointercancel"){this.pointers.size||(this.dragged=!1);return}if(i.button===2){this.gps.clear(),this.draw();return}let s=this.view.x+(n.clientX-innerWidth/2)/this.view.s,a=this.view.z+(n.clientY-innerHeight/2)/this.view.s;this.gps.setDestination(s,a)?(this.gps.update(this.game.focus,1),this.draw()):ge("gpsinfo").textContent="Clique mais perto de uma rua para marcar o destino."};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("wheel",n=>{n.preventDefault(),this.#t(Math.exp(-n.deltaY*.0015),n.clientX,n.clientY)},{passive:!1}),ge("gpsfecha").onclick=()=>this.hide(),ge("gpslimpa").onclick=()=>{this.gps.clear(),this.draw()},ge("gpsmais").onclick=()=>this.#t(1.4,innerWidth/2,innerHeight/2),ge("gpsmenos").onclick=()=>this.#t(1/1.4,innerWidth/2,innerHeight/2),addEventListener("resize",()=>this.open&&this.#e())}};var Za=class{constructor(e){this.game=e,document.querySelectorAll(".tb[data-k]").forEach(i=>e.input.bindHoldButton(i,i.dataset.k));let t=(i,s)=>document.querySelectorAll(i).forEach(a=>a.addEventListener("pointerdown",o=>{o.preventDefault(),s(a)}));t("[data-s]",i=>e.started&&e.vehicleReady&&e.controller.toggleIndicator(+i.dataset.s)),t("[data-f]",i=>e.started&&e.vehicleReady&&(i.dataset.f==="L"?e.controller.cycleLights():e.toggleNight())),t("[data-g]",i=>{let s=i.dataset.g;!e.started||!e.vehicleReady||(s==="up"?e.controller.shiftUp():s==="dn"?e.controller.shiftDown():e.controller.toggleGearbox())}),t("[data-a]",i=>e.started&&e.vehicleReady&&e.runAction(i.dataset.a)),(navigator.maxTouchPoints>0||"ontouchstart"in window||matchMedia("(pointer:coarse)").matches)&&!matchMedia("(hover:hover) and (pointer:fine)").matches&&this.enable(),addEventListener("touchstart",()=>this.enable(),{once:!0,passive:!0}),addEventListener("contextmenu",i=>document.body.classList.contains("touch")&&i.preventDefault())}enable(){document.body.classList.contains("touch")||(document.body.classList.add("touch"),ge("touch").style.display="block",this.game.renderer.enableLowPower(),this.game.lighting.reduceShadowQuality(),this.game.resize())}};var Qa=class{constructor(){this.started=!1,this.paused=!1,this.pausedAt=0,this.vehicleId=oi.defaultVehicle,this.physicsInput={accel:!1,brake:!1,handbrake:!1,steer:0},this.shownLap=0,this.cameraContext={menuOpen:!0,vehicleState:Yl,vehicleModel:null,cockpitOffset:null,onFoot:!1,playerBody:null},this.audioContext={engineLevel:0,throttle:0,engineOn:!1,skid:0,sound:null},this.settings=new wa(this.vehicleColors.length),this.assets=new _a,this.renderer=new va,this.environment=new Ra(this.renderer.renderer),this.scene=this.environment.scene,this.lighting=new Ca(this.scene,this.environment.sunDirection),this.cameraController=new Aa(this.renderer.canvas),this.world=new Na(this.environment,this.assets),this.vehicles=new Wa(this.scene,this.assets),this.player=new qa(this.scene),this.smoke=new Fa(this.scene),this.skidMarks=new Oa(this.scene,ci[this.vehicleId].tireContacts,this.smoke),this.input=new ka,this.audio=new Ba(this.settings.volume),this.hud=new ja,this.loop=new Ma((t,n)=>this.frame(t,n));let e=(t,n)=>this.hud.message(t,n);this.player.onMessage=e,this.hud.onAction=t=>this.runAction(t),this.menu=new Ka(this,{start:()=>this.start(),resume:()=>this.resume(),restart:()=>this.restart(),pause:()=>this.pause(),selectMap:t=>this.selectMap(t),setGearbox:t=>{this.settings.manualGearbox=t,this.controller&&(this.controller.manual=t),this.saveSettings()},setDriveMode:t=>this.setDriveMode(t,!1),setNight:t=>{this.setNight(t),this.saveSettings()},setColor:t=>{this.setColor(t),this.saveSettings()},setVolume:t=>{this.settings.volume=t,this.audio.setVolume(t),this.saveSettings()}}),this.gpsMap=new Ja(this),this.#e(),this.touch=new Za(this),ge("bmodo").addEventListener("pointerdown",t=>{t.preventDefault(),this.setDriveMode(!this.settings.driftMode,!0)}),addEventListener("resize",()=>this.resize()),this.resize()}get vehicle(){return this.vehicles.vehicle}get controller(){return this.vehicles.controller}get vehicleReady(){return!!this.vehicles.vehicle}get vehicleColors(){return ci[this.vehicleId].colors}get playing(){return this.started&&this.vehicleReady&&!this.paused}get focus(){return this.player.focus(this.controller?this.controller.state:Yl)}async load(){this.hud.setDriveModeButton(this.settings.driftMode),this.setNight(this.settings.night);try{await this.selectMap(this.settings.mapId,{initial:!0})}catch(t){console.error(t),this.settings.mapId!==oi.defaultMap&&(this.menu.setLoading("N\xE3o foi poss\xEDvel carregar o mapa da cidade."),this.settings.mapId=oi.defaultMap,await this.selectMap(oi.defaultMap,{initial:!0}))}this.menu.refresh(),this.loop.start();try{await this.vehicles.spawn(this.vehicleId)}catch(t){this.menu.setLoading("Erro ao carregar o modelo 3D."),console.error(t);return}let e=this.controller;e.manual=this.settings.manualGearbox,e.onMessage=(t,n)=>this.hud.message(t,n),e.onBlink=t=>this.audio.playBlink(t),e.setDriftMode(this.settings.driftMode),this.environment.night&&!e.lightsMode&&(e.lightsMode=1),this.setColor(this.settings.colorIndex),this.#t(!1),this.player.sitIn(this.vehicle),this.menu.enableStart(),this.menu.setLoading("Modelo carregado.")}#e(){let e=this.input;e.isPlaying=()=>this.playing,e.interceptor=(n,i)=>this.gpsMap.open?((n==="Escape"||e.bindings.map.includes(n))&&(i.preventDefault(),this.gpsMap.hide()),!0):this.menu.capture?(i.preventDefault(),this.menu.captureKey(n),!0):!1,e.onEscape=()=>{this.menu.handleEscape()||!this.started||(this.paused?this.resume():this.pause())};let t=()=>this.controller;e.on("sigL",()=>t().toggleIndicator(1)),e.on("sigR",()=>t().toggleIndicator(2)),e.on("hazard",()=>t().toggleIndicator(3)),e.on("lights",()=>t().cycleLights()),e.on("night",()=>this.toggleNight()),e.on("cam",()=>this.cameraController.toggleMode()),e.on("reset",()=>this.#t(!0)),e.on("map",()=>this.gpsMap.show(this.focus)),e.on("paint",()=>this.setColor(this.settings.colorIndex+1)),e.on("up",()=>t().shiftUp()),e.on("dn",()=>t().shiftDown()),e.on("man",()=>t().toggleGearbox()),e.on("acao",()=>this.primaryAction()),e.on("partida",()=>this.toggleIgnition()),e.on("modo",()=>this.setDriveMode(!this.settings.driftMode,!0))}start(){if(document.body.classList.contains("touch"))try{document.documentElement.requestFullscreen?.()?.then(()=>screen.orientation?.lock?.("landscape")).catch(()=>{})}catch{}this.started=!0,this.menu.close(),this.hud.show(),this.audio.init(),this.cameraController.heading=this.controller.state.h,this.cameraController.mode=gs.COCKPIT,this.updateHelp(),this.hud.message("Pressione "+this.input.label("partida")+" para dar partida",4),this.hud.fadeHelpLater()}pause(){this.paused=!0,this.pausedAt=performance.now(),this.input.releaseAll(),this.saveSettings(),this.menu.open(),this.audio.suspend()}resume(){this.paused=!1,this.world.map.shiftTimers(performance.now()-this.pausedAt),this.menu.close(),this.audio.resume(),this.loop.resetClock()}restart(){this.#t(!1),this.player.inVehicle||this.enterVehicle(),this.#n("0:00.000"),this.resume()}#t(e){let t=this.controller;t&&(this.world.map.spawn(t.state,e),t.resetMotion(),this.cameraController.heading=t.state.h)}#n(e){this.world.map.resetLaps(),this.shownLap=1,this.hud.setLap(1),this.hud.setTimerText(e)}async selectMap(e,{initial:t=!1}={}){if(this.world.mapId===e||this.loadingMap)return;this.loadingMap=!0;let n=ge("ld").textContent;t||this.menu.setLoading("Montando o mapa\u2026");try{let i=await this.world.setMap(e);this.settings.mapId=e,i.onLap=s=>{this.hud.message(s),this.hud.setBest(i.best)},i.gps&&(i.gps.onArrive=()=>this.hud.message("Voc\xEA chegou ao destino!",3)),this.hud.setMapMode(i),this.hud.setDestination(i.gps),this.hud.setBest(i.best),this.skidMarks.clear(),this.#n(i.gps?"":"0:00.000"),this.#t(!1),this.updateHelp(),t||(this.saveSettings(),this.menu.refresh())}finally{this.loadingMap=!1,t||this.menu.setLoading(n)}}setDriveMode(e,t){this.settings.driftMode=e,this.controller?.setDriftMode(e),this.hud.setDriveModeButton(e),t&&this.hud.message(e?"Modo drift: tra\xE7\xE3o livre, carro solto":"Modo normal: controle de tra\xE7\xE3o e estabilidade ligados",2.2),this.saveSettings(),this.menu.refresh()}setNight(e){this.settings.night=e,this.environment.setNight(e),this.lighting.setNight(e),this.world.map?.setNight(e),e&&this.controller&&!this.controller.lightsMode&&(this.controller.lightsMode=1)}toggleNight(){this.setNight(!this.settings.night)}setColor(e){let t=this.vehicleColors.length;this.settings.colorIndex=(e%t+t)%t,this.vehicle?.setColor(this.vehicleColors[this.settings.colorIndex])}saveSettings(){this.controller&&(this.settings.manualGearbox=this.controller.manual),this.settings.save()}updateHelp(){let e=n=>this.input.label(n),t=!!this.world.map?.gps;this.hud.setHelp(e("cam")+" c\xE2mera \xB7 "+e("reset")+(t?" voltar \xE0 rua \xB7 ":" voltar \xE0 pista \xB7 ")+e("lights")+" far\xF3is \xB7 "+e("man")+" manual \xB7 "+e("acao")+" porta/entrar/sair \xB7 "+e("partida")+" partida \xB7 "+(t?e("map")+" mapa/GPS \xB7 ":"")+"Esc menu")}toggleIgnition(){!this.player.inVehicle||!this.vehicleReady||this.controller.toggleIgnition()&&this.audio.playStarter()}enterVehicle(){this.player.enter(this.vehicle,this.controller),this.cameraController.mode=gs.COCKPIT,this.cameraController.reset(this.controller.state.h),this.hud.message("Pressione "+this.input.label("partida")+" (ou \u{1F511}) para dar partida",3)}exitVehicle(){this.player.exit(this.vehicle,this.controller)&&this.cameraController.reset(this.player.body.h)}runAction(e){this.playing&&(e==="abrir"?this.vehicle.doorTarget=1:e==="fechar"?this.vehicle.doorTarget=0:e==="entrar"?this.enterVehicle():e==="sair"?this.exitVehicle():e==="partida"?this.toggleIgnition():e==="map"?this.gpsMap.show(this.focus):e==="cam"?this.cameraController.toggleMode():e==="reset"?this.#t(!0):e==="paint"?this.setColor(this.settings.colorIndex+1):e==="acao"&&this.primaryAction())}primaryAction(){let e=this.#i().find(t=>t[0]&&t[0]!=="partida");e&&this.runAction(e[0])}#i(){return this.player.availableActions(this.vehicle,this.controller,e=>this.input.label(e))}resize(){this.renderer.setSize(innerWidth,innerHeight),this.cameraController.setAspect(innerWidth/innerHeight)}frame(e,t){let n=this.world.map,i=this.controller,s=this.vehicle;if(!n)return;if(this.playing&&!this.gpsMap.open){this.#s(e,n),this.player.inVehicle||this.player.update(e,this.input,n,i.state,this.vehicles.config),i.updateEngine(e),this.hud.setActions(this.#i());let c=this.focus;n.gps&&(n.gps.update(c,e),this.hud.setDestination(n.gps)),this.skidMarks.update(i.state,n),this.hud.setTimerText(n.timerText(t,c)),n.currentLap!==void 0&&n.currentLap!==this.shownLap&&(this.shownLap=n.currentLap,this.hud.setLap(this.shownLap)),this.hud.draw(i,n,c);let l=this.audioContext;l.engineLevel=i.engineSound,l.throttle=i.throttle,l.engineOn=i.engineOn,l.skid=this.skidMarks.intensity,l.sound=this.vehicles.config.sound,this.audio.update(l),this.hud.tick(e)}s&&(s.update(e,i),this.player.setVisible(!(this.player.inVehicle&&this.cameraController.mode===gs.COCKPIT&&this.started&&!this.paused)),i.updateIndicators(e),this.hud.setSignals(i)),this.smoke.update(e);let a=this.cameraContext;a.menuOpen=!this.playing,a.vehicleState=i?i.state:Yl,a.vehicleModel=s?s.model:null,a.cockpitOffset=ci[this.vehicleId].cockpitCamera,a.onFoot=!this.player.inVehicle,a.playerBody=this.player.body,this.cameraController.update(e,a);let o=this.focus;this.environment.followCamera(this.cameraController.camera),this.lighting.follow(o.x,o.z),this.renderer.render(this.scene,this.cameraController.camera)}#s(e,t){let n=this.controller,i=this.input,s=this.player.inVehicle,a=this.physicsInput;a.accel=s&&n.engineOn&&i.isDown("accel"),a.brake=s&&i.isDown("brake"),a.handbrake=!s||i.isDown("hb"),a.steer=s?(i.isDown("right")?1:0)-(i.isDown("left")?1:0):0;let o=Math.ceil(e/oi.physicsStep);for(let c=0;c<o;c++)Va.step(n,a,t,e/o)}},Yl={x:0,z:0,h:0,vx:0,vz:0};var xx=new Qa;xx.load();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=game.js.map
