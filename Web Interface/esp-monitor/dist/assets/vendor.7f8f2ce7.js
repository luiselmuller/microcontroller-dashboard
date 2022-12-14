function PI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var U6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function BS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Xg(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var I={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vu=Symbol.for("react.element"),OI=Symbol.for("react.portal"),RI=Symbol.for("react.fragment"),AI=Symbol.for("react.strict_mode"),NI=Symbol.for("react.profiler"),UI=Symbol.for("react.provider"),$I=Symbol.for("react.context"),DI=Symbol.for("react.forward_ref"),MI=Symbol.for("react.suspense"),LI=Symbol.for("react.memo"),jI=Symbol.for("react.lazy"),Jv=Symbol.iterator;function FI(t){return t===null||typeof t!="object"?null:(t=Jv&&t[Jv]||t["@@iterator"],typeof t=="function"?t:null)}var VS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},WS=Object.assign,HS={};function ba(t,e,n){this.props=t,this.context=e,this.refs=HS,this.updater=n||VS}ba.prototype.isReactComponent={};ba.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ba.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qS(){}qS.prototype=ba.prototype;function Yg(t,e,n){this.props=t,this.context=e,this.refs=HS,this.updater=n||VS}var Qg=Yg.prototype=new qS;Qg.constructor=Yg;WS(Qg,ba.prototype);Qg.isPureReactComponent=!0;var Zv=Array.isArray,KS=Object.prototype.hasOwnProperty,Jg={current:null},GS={key:!0,ref:!0,__self:!0,__source:!0};function XS(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)KS.call(e,r)&&!GS.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vu,type:t,key:o,ref:s,props:i,_owner:Jg.current}}function BI(t,e){return{$$typeof:vu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zg(t){return typeof t=="object"&&t!==null&&t.$$typeof===vu}function VI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var e1=/\/+/g;function Jh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?VI(""+t.key):e.toString(36)}function Lc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case vu:case OI:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Jh(s,0):r,Zv(i)?(n="",t!=null&&(n=t.replace(e1,"$&/")+"/"),Lc(i,e,n,"",function(u){return u})):i!=null&&(Zg(i)&&(i=BI(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(e1,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Zv(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Jh(o,a);s+=Lc(o,e,n,l,i)}else if(l=FI(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Jh(o,a++),s+=Lc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function lc(t,e,n){if(t==null)return t;var r=[],i=0;return Lc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function WI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},jc={transition:null},HI={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:jc,ReactCurrentOwner:Jg};ce.Children={map:lc,forEach:function(t,e,n){lc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lc(t,function(){e++}),e},toArray:function(t){return lc(t,function(e){return e})||[]},only:function(t){if(!Zg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=ba;ce.Fragment=RI;ce.Profiler=NI;ce.PureComponent=Yg;ce.StrictMode=AI;ce.Suspense=MI;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HI;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=WS({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Jg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)KS.call(e,l)&&!GS.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:vu,type:t.type,key:i,ref:o,props:r,_owner:s}};ce.createContext=function(t){return t={$$typeof:$I,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:UI,_context:t},t.Consumer=t};ce.createElement=XS;ce.createFactory=function(t){var e=XS.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:DI,render:t}};ce.isValidElement=Zg;ce.lazy=function(t){return{$$typeof:jI,_payload:{_status:-1,_result:t},_init:WI}};ce.memo=function(t,e){return{$$typeof:LI,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=jc.transition;jc.transition={};try{t()}finally{jc.transition=e}};ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ce.useCallback=function(t,e){return Xt.current.useCallback(t,e)};ce.useContext=function(t){return Xt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Xt.current.useEffect(t,e)};ce.useId=function(){return Xt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Xt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};ce.useRef=function(t){return Xt.current.useRef(t)};ce.useState=function(t){return Xt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Xt.current.useTransition()};ce.version="18.2.0";(function(t){t.exports=ce})(I);const _i=BS(I.exports),Hs=PI({__proto__:null,default:_i},[I.exports]);var t1={},dd={exports:{}},Cn={},YS={exports:{}},QS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,A){var F=P.length;P.push(A);e:for(;0<F;){var Q=F-1>>>1,le=P[Q];if(0<i(le,A))P[Q]=A,P[F]=le,F=Q;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],F=P.pop();if(F!==A){P[0]=F;e:for(var Q=0,le=P.length,Ge=le>>>1;Q<Ge;){var it=2*(Q+1)-1,Me=P[it],Le=it+1,We=P[Le];if(0>i(Me,F))Le<le&&0>i(We,Me)?(P[Q]=We,P[Le]=F,Q=Le):(P[Q]=Me,P[it]=F,Q=it);else if(Le<le&&0>i(We,F))P[Q]=We,P[Le]=F,Q=Le;else break e}}return A}function i(P,A){var F=P.sortIndex-A.sortIndex;return F!==0?F:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,p=3,y=!1,w=!1,v=!1,c=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function b(P){if(v=!1,g(P),!w)if(n(l)!==null)w=!0,U(S);else{var A=n(u);A!==null&&j(b,A.startTime-P)}}function S(P,A){w=!1,v&&(v=!1,d(_),_=-1),y=!0;var F=p;try{for(g(A),h=n(l);h!==null&&(!(h.expirationTime>A)||P&&!T());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,p=h.priorityLevel;var le=Q(h.expirationTime<=A);A=t.unstable_now(),typeof le=="function"?h.callback=le:h===n(l)&&r(l),g(A)}else r(l);h=n(l)}if(h!==null)var Ge=!0;else{var it=n(u);it!==null&&j(b,it.startTime-A),Ge=!1}return Ge}finally{h=null,p=F,y=!1}}var E=!1,k=null,_=-1,C=5,x=-1;function T(){return!(t.unstable_now()-x<C)}function R(){if(k!==null){var P=t.unstable_now();x=P;var A=!0;try{A=k(!0,P)}finally{A?N():(E=!1,k=null)}}else E=!1}var N;if(typeof m=="function")N=function(){m(R)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,O=V.port2;V.port1.onmessage=R,N=function(){O.postMessage(null)}}else N=function(){c(R,0)};function U(P){k=P,E||(E=!0,N())}function j(P,A){_=c(function(){P(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,U(S))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var F=p;p=A;try{return P()}finally{p=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=p;p=P;try{return A()}finally{p=F}},t.unstable_scheduleCallback=function(P,A,F){var Q=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Q+F:Q):F=Q,P){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=F+le,P={id:f++,callback:A,priorityLevel:P,startTime:F,expirationTime:le,sortIndex:-1},F>Q?(P.sortIndex=F,e(u,P),n(l)===null&&P===n(u)&&(v?(d(_),_=-1):v=!0,j(b,F-Q))):(P.sortIndex=le,e(l,P),w||y||(w=!0,U(S))),P},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(P){var A=p;return function(){var F=p;p=A;try{return P.apply(this,arguments)}finally{p=F}}}})(QS);(function(t){t.exports=QS})(YS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JS=I.exports,xn=YS.exports;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ZS=new Set,Ol={};function Vo(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(Ol[t]=e,t=0;t<e.length;t++)ZS.add(e[t])}var Wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),om=Object.prototype.hasOwnProperty,qI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,n1={},r1={};function KI(t){return om.call(r1,t)?!0:om.call(n1,t)?!1:qI.test(t)?r1[t]=!0:(n1[t]=!0,!1)}function GI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XI(t,e,n,r){if(e===null||typeof e>"u"||GI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var e0=/[\-:]([a-z])/g;function t0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(e0,t0);_t[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(e0,t0);_t[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(e0,t0);_t[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function n0(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XI(e,n,i,r)&&(n=null),r||i===null?KI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ri=JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uc=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),sm=Symbol.for("react.profiler"),eE=Symbol.for("react.provider"),tE=Symbol.for("react.context"),i0=Symbol.for("react.forward_ref"),am=Symbol.for("react.suspense"),lm=Symbol.for("react.suspense_list"),o0=Symbol.for("react.memo"),hi=Symbol.for("react.lazy"),nE=Symbol.for("react.offscreen"),i1=Symbol.iterator;function Fa(t){return t===null||typeof t!="object"?null:(t=i1&&t[i1]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,Zh;function el(t){if(Zh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zh=e&&e[1]||""}return`
`+Zh+t}var ep=!1;function tp(t,e){if(!t||ep)return"";ep=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ep=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?el(t):""}function YI(t){switch(t.tag){case 5:return el(t.type);case 16:return el("Lazy");case 13:return el("Suspense");case 19:return el("SuspenseList");case 0:case 2:case 15:return t=tp(t.type,!1),t;case 11:return t=tp(t.type.render,!1),t;case 1:return t=tp(t.type,!0),t;default:return""}}function um(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case sm:return"Profiler";case r0:return"StrictMode";case am:return"Suspense";case lm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tE:return(t.displayName||"Context")+".Consumer";case eE:return(t._context.displayName||"Context")+".Provider";case i0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case o0:return e=t.displayName||null,e!==null?e:um(t.type)||"Memo";case hi:e=t._payload,t=t._init;try{return um(t(e))}catch{}}return null}function QI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return um(e);case 8:return e===r0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JI(t){var e=rE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cc(t){t._valueTracker||(t._valueTracker=JI(t))}function iE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ff(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cm(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function o1(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function oE(t,e){e=e.checked,e!=null&&n0(t,"checked",e,!1)}function fm(t,e){oE(t,e);var n=ji(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dm(t,e.type,n):e.hasOwnProperty("defaultValue")&&dm(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function s1(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dm(t,e,n){(e!=="number"||ff(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var tl=Array.isArray;function Os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function a1(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(tl(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function sE(t,e){var n=ji(e.value),r=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function l1(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function aE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?aE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fc,lE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fc=fc||document.createElement("div"),fc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Rl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var dl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZI=["Webkit","ms","Moz","O"];Object.keys(dl).forEach(function(t){ZI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),dl[e]=dl[t]})});function uE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||dl.hasOwnProperty(t)&&dl[t]?(""+e).trim():e+"px"}function cE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=uE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var ez=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mm(t,e){if(e){if(ez[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function gm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ym=null;function s0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vm=null,Rs=null,As=null;function u1(t){if(t=Su(t)){if(typeof vm!="function")throw Error($(280));var e=t.stateNode;e&&(e=yd(e),vm(t.stateNode,t.type,e))}}function fE(t){Rs?As?As.push(t):As=[t]:Rs=t}function dE(){if(Rs){var t=Rs,e=As;if(As=Rs=null,u1(t),e)for(t=0;t<e.length;t++)u1(e[t])}}function hE(t,e){return t(e)}function pE(){}var np=!1;function mE(t,e,n){if(np)return t(e,n);np=!0;try{return hE(t,e,n)}finally{np=!1,(Rs!==null||As!==null)&&(pE(),dE())}}function Al(t,e){var n=t.stateNode;if(n===null)return null;var r=yd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var wm=!1;if(Wr)try{var Ba={};Object.defineProperty(Ba,"passive",{get:function(){wm=!0}}),window.addEventListener("test",Ba,Ba),window.removeEventListener("test",Ba,Ba)}catch{wm=!1}function tz(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var hl=!1,df=null,hf=!1,bm=null,nz={onError:function(t){hl=!0,df=t}};function rz(t,e,n,r,i,o,s,a,l){hl=!1,df=null,tz.apply(nz,arguments)}function iz(t,e,n,r,i,o,s,a,l){if(rz.apply(this,arguments),hl){if(hl){var u=df;hl=!1,df=null}else throw Error($(198));hf||(hf=!0,bm=u)}}function Wo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function c1(t){if(Wo(t)!==t)throw Error($(188))}function oz(t){var e=t.alternate;if(!e){if(e=Wo(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return c1(i),t;if(o===r)return c1(i),e;o=o.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function yE(t){return t=oz(t),t!==null?vE(t):null}function vE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vE(t);if(e!==null)return e;t=t.sibling}return null}var wE=xn.unstable_scheduleCallback,f1=xn.unstable_cancelCallback,sz=xn.unstable_shouldYield,az=xn.unstable_requestPaint,Qe=xn.unstable_now,lz=xn.unstable_getCurrentPriorityLevel,a0=xn.unstable_ImmediatePriority,bE=xn.unstable_UserBlockingPriority,pf=xn.unstable_NormalPriority,uz=xn.unstable_LowPriority,SE=xn.unstable_IdlePriority,hd=null,hr=null;function cz(t){if(hr&&typeof hr.onCommitFiberRoot=="function")try{hr.onCommitFiberRoot(hd,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:hz,fz=Math.log,dz=Math.LN2;function hz(t){return t>>>=0,t===0?32:31-(fz(t)/dz|0)|0}var dc=64,hc=4194304;function nl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mf(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=nl(a):(o&=s,o!==0&&(r=nl(o)))}else s=n&~i,s!==0?r=nl(s):o!==0&&(r=nl(o));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yn(e),i=1<<n,r|=t[n],e&=~i;return r}function pz(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mz(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Yn(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=pz(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Sm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function EE(){var t=dc;return dc<<=1,(dc&4194240)===0&&(dc=64),t}function rp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function gz(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function l0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ke=0;function kE(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var xE,u0,_E,CE,TE,Em=!1,pc=[],Ci=null,Ti=null,Ii=null,Nl=new Map,Ul=new Map,mi=[],yz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d1(t,e){switch(t){case"focusin":case"focusout":Ci=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":Nl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ul.delete(e.pointerId)}}function Va(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Su(e),e!==null&&u0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vz(t,e,n,r,i){switch(e){case"focusin":return Ci=Va(Ci,t,e,n,r,i),!0;case"dragenter":return Ti=Va(Ti,t,e,n,r,i),!0;case"mouseover":return Ii=Va(Ii,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Nl.set(o,Va(Nl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ul.set(o,Va(Ul.get(o)||null,t,e,n,r,i)),!0}return!1}function IE(t){var e=go(t.target);if(e!==null){var n=Wo(e);if(n!==null){if(e=n.tag,e===13){if(e=gE(n),e!==null){t.blockedOn=e,TE(t.priority,function(){_E(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=km(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ym=r,n.target.dispatchEvent(r),ym=null}else return e=Su(n),e!==null&&u0(e),t.blockedOn=n,!1;e.shift()}return!0}function h1(t,e,n){Fc(t)&&n.delete(e)}function wz(){Em=!1,Ci!==null&&Fc(Ci)&&(Ci=null),Ti!==null&&Fc(Ti)&&(Ti=null),Ii!==null&&Fc(Ii)&&(Ii=null),Nl.forEach(h1),Ul.forEach(h1)}function Wa(t,e){t.blockedOn===e&&(t.blockedOn=null,Em||(Em=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,wz)))}function $l(t){function e(i){return Wa(i,t)}if(0<pc.length){Wa(pc[0],t);for(var n=1;n<pc.length;n++){var r=pc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ci!==null&&Wa(Ci,t),Ti!==null&&Wa(Ti,t),Ii!==null&&Wa(Ii,t),Nl.forEach(e),Ul.forEach(e),n=0;n<mi.length;n++)r=mi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mi.length&&(n=mi[0],n.blockedOn===null);)IE(n),n.blockedOn===null&&mi.shift()}var Ns=ri.ReactCurrentBatchConfig,gf=!0;function bz(t,e,n,r){var i=ke,o=Ns.transition;Ns.transition=null;try{ke=1,c0(t,e,n,r)}finally{ke=i,Ns.transition=o}}function Sz(t,e,n,r){var i=ke,o=Ns.transition;Ns.transition=null;try{ke=4,c0(t,e,n,r)}finally{ke=i,Ns.transition=o}}function c0(t,e,n,r){if(gf){var i=km(t,e,n,r);if(i===null)hp(t,e,r,yf,n),d1(t,r);else if(vz(i,t,e,n,r))r.stopPropagation();else if(d1(t,r),e&4&&-1<yz.indexOf(t)){for(;i!==null;){var o=Su(i);if(o!==null&&xE(o),o=km(t,e,n,r),o===null&&hp(t,e,r,yf,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else hp(t,e,r,null,n)}}var yf=null;function km(t,e,n,r){if(yf=null,t=s0(r),t=go(t),t!==null)if(e=Wo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yf=t,null}function zE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lz()){case a0:return 1;case bE:return 4;case pf:case uz:return 16;case SE:return 536870912;default:return 16}default:return 16}}var Si=null,f0=null,Bc=null;function PE(){if(Bc)return Bc;var t,e=f0,n=e.length,r,i="value"in Si?Si.value:Si.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Bc=i.slice(t,1<r?1-r:void 0)}function Vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function mc(){return!0}function p1(){return!1}function Tn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mc:p1,this.isPropagationStopped=p1,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mc)},persist:function(){},isPersistent:mc}),e}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},d0=Tn(Sa),bu=Ve({},Sa,{view:0,detail:0}),Ez=Tn(bu),ip,op,Ha,pd=Ve({},bu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:h0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ha&&(Ha&&t.type==="mousemove"?(ip=t.screenX-Ha.screenX,op=t.screenY-Ha.screenY):op=ip=0,Ha=t),ip)},movementY:function(t){return"movementY"in t?t.movementY:op}}),m1=Tn(pd),kz=Ve({},pd,{dataTransfer:0}),xz=Tn(kz),_z=Ve({},bu,{relatedTarget:0}),sp=Tn(_z),Cz=Ve({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),Tz=Tn(Cz),Iz=Ve({},Sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zz=Tn(Iz),Pz=Ve({},Sa,{data:0}),g1=Tn(Pz),Oz={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rz={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Az={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nz(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Az[t])?!!e[t]:!1}function h0(){return Nz}var Uz=Ve({},bu,{key:function(t){if(t.key){var e=Oz[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rz[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:h0,charCode:function(t){return t.type==="keypress"?Vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$z=Tn(Uz),Dz=Ve({},pd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),y1=Tn(Dz),Mz=Ve({},bu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:h0}),Lz=Tn(Mz),jz=Ve({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fz=Tn(jz),Bz=Ve({},pd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vz=Tn(Bz),Wz=[9,13,27,32],p0=Wr&&"CompositionEvent"in window,pl=null;Wr&&"documentMode"in document&&(pl=document.documentMode);var Hz=Wr&&"TextEvent"in window&&!pl,OE=Wr&&(!p0||pl&&8<pl&&11>=pl),v1=String.fromCharCode(32),w1=!1;function RE(t,e){switch(t){case"keyup":return Wz.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function AE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function qz(t,e){switch(t){case"compositionend":return AE(e);case"keypress":return e.which!==32?null:(w1=!0,v1);case"textInput":return t=e.data,t===v1&&w1?null:t;default:return null}}function Kz(t,e){if(ys)return t==="compositionend"||!p0&&RE(t,e)?(t=PE(),Bc=f0=Si=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return OE&&e.locale!=="ko"?null:e.data;default:return null}}var Gz={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b1(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Gz[t.type]:e==="textarea"}function NE(t,e,n,r){fE(r),e=vf(e,"onChange"),0<e.length&&(n=new d0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ml=null,Dl=null;function Xz(t){HE(t,0)}function md(t){var e=bs(t);if(iE(e))return t}function Yz(t,e){if(t==="change")return e}var UE=!1;if(Wr){var ap;if(Wr){var lp="oninput"in document;if(!lp){var S1=document.createElement("div");S1.setAttribute("oninput","return;"),lp=typeof S1.oninput=="function"}ap=lp}else ap=!1;UE=ap&&(!document.documentMode||9<document.documentMode)}function E1(){ml&&(ml.detachEvent("onpropertychange",$E),Dl=ml=null)}function $E(t){if(t.propertyName==="value"&&md(Dl)){var e=[];NE(e,Dl,t,s0(t)),mE(Xz,e)}}function Qz(t,e,n){t==="focusin"?(E1(),ml=e,Dl=n,ml.attachEvent("onpropertychange",$E)):t==="focusout"&&E1()}function Jz(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return md(Dl)}function Zz(t,e){if(t==="click")return md(e)}function eP(t,e){if(t==="input"||t==="change")return md(e)}function tP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:tP;function Ml(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!om.call(e,i)||!Zn(t[i],e[i]))return!1}return!0}function k1(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function x1(t,e){var n=k1(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=k1(n)}}function DE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?DE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ME(){for(var t=window,e=ff();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ff(t.document)}return e}function m0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nP(t){var e=ME(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&DE(n.ownerDocument.documentElement,n)){if(r!==null&&m0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=x1(n,o);var s=x1(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rP=Wr&&"documentMode"in document&&11>=document.documentMode,vs=null,xm=null,gl=null,_m=!1;function _1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_m||vs==null||vs!==ff(r)||(r=vs,"selectionStart"in r&&m0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gl&&Ml(gl,r)||(gl=r,r=vf(xm,"onSelect"),0<r.length&&(e=new d0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function gc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:gc("Animation","AnimationEnd"),animationiteration:gc("Animation","AnimationIteration"),animationstart:gc("Animation","AnimationStart"),transitionend:gc("Transition","TransitionEnd")},up={},LE={};Wr&&(LE=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function gd(t){if(up[t])return up[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in LE)return up[t]=e[n];return t}var jE=gd("animationend"),FE=gd("animationiteration"),BE=gd("animationstart"),VE=gd("transitionend"),WE=new Map,C1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){WE.set(t,e),Vo(e,[t])}for(var cp=0;cp<C1.length;cp++){var fp=C1[cp],iP=fp.toLowerCase(),oP=fp[0].toUpperCase()+fp.slice(1);Ki(iP,"on"+oP)}Ki(jE,"onAnimationEnd");Ki(FE,"onAnimationIteration");Ki(BE,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(VE,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);Vo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sP=new Set("cancel close invalid load scroll toggle".split(" ").concat(rl));function T1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,iz(r,e,void 0,t),t.currentTarget=null}function HE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;T1(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;T1(i,a,u),o=l}}}if(hf)throw t=bm,hf=!1,bm=null,t}function Re(t,e){var n=e[Pm];n===void 0&&(n=e[Pm]=new Set);var r=t+"__bubble";n.has(r)||(qE(e,t,2,!1),n.add(r))}function dp(t,e,n){var r=0;e&&(r|=4),qE(n,t,r,e)}var yc="_reactListening"+Math.random().toString(36).slice(2);function Ll(t){if(!t[yc]){t[yc]=!0,ZS.forEach(function(n){n!=="selectionchange"&&(sP.has(n)||dp(n,!1,t),dp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yc]||(e[yc]=!0,dp("selectionchange",!1,e))}}function qE(t,e,n,r){switch(zE(e)){case 1:var i=bz;break;case 4:i=Sz;break;default:i=c0}n=i.bind(null,e,n,t),i=void 0,!wm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hp(t,e,n,r,i){var o=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=go(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}mE(function(){var u=o,f=s0(n),h=[];e:{var p=WE.get(t);if(p!==void 0){var y=d0,w=t;switch(t){case"keypress":if(Vc(n)===0)break e;case"keydown":case"keyup":y=$z;break;case"focusin":w="focus",y=sp;break;case"focusout":w="blur",y=sp;break;case"beforeblur":case"afterblur":y=sp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=m1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=xz;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Lz;break;case jE:case FE:case BE:y=Tz;break;case VE:y=Fz;break;case"scroll":y=Ez;break;case"wheel":y=Vz;break;case"copy":case"cut":case"paste":y=zz;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=y1}var v=(e&4)!==0,c=!v&&t==="scroll",d=v?p!==null?p+"Capture":null:p;v=[];for(var m=u,g;m!==null;){g=m;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,d!==null&&(b=Al(m,d),b!=null&&v.push(jl(m,b,g)))),c)break;m=m.return}0<v.length&&(p=new y(p,w,null,n,f),h.push({event:p,listeners:v}))}}if((e&7)===0){e:{if(p=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",p&&n!==ym&&(w=n.relatedTarget||n.fromElement)&&(go(w)||w[Hr]))break e;if((y||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?go(w):null,w!==null&&(c=Wo(w),w!==c||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(v=m1,b="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=y1,b="onPointerLeave",d="onPointerEnter",m="pointer"),c=y==null?p:bs(y),g=w==null?p:bs(w),p=new v(b,m+"leave",y,n,f),p.target=c,p.relatedTarget=g,b=null,go(f)===u&&(v=new v(d,m+"enter",w,n,f),v.target=g,v.relatedTarget=c,b=v),c=b,y&&w)t:{for(v=y,d=w,m=0,g=v;g;g=ss(g))m++;for(g=0,b=d;b;b=ss(b))g++;for(;0<m-g;)v=ss(v),m--;for(;0<g-m;)d=ss(d),g--;for(;m--;){if(v===d||d!==null&&v===d.alternate)break t;v=ss(v),d=ss(d)}v=null}else v=null;y!==null&&I1(h,p,y,v,!1),w!==null&&c!==null&&I1(h,c,w,v,!0)}}e:{if(p=u?bs(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Yz;else if(b1(p))if(UE)S=eP;else{S=Jz;var E=Qz}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Zz);if(S&&(S=S(t,u))){NE(h,S,n,f);break e}E&&E(t,p,u),t==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&dm(p,"number",p.value)}switch(E=u?bs(u):window,t){case"focusin":(b1(E)||E.contentEditable==="true")&&(vs=E,xm=u,gl=null);break;case"focusout":gl=xm=vs=null;break;case"mousedown":_m=!0;break;case"contextmenu":case"mouseup":case"dragend":_m=!1,_1(h,n,f);break;case"selectionchange":if(rP)break;case"keydown":case"keyup":_1(h,n,f)}var k;if(p0)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ys?RE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(OE&&n.locale!=="ko"&&(ys||_!=="onCompositionStart"?_==="onCompositionEnd"&&ys&&(k=PE()):(Si=f,f0="value"in Si?Si.value:Si.textContent,ys=!0)),E=vf(u,_),0<E.length&&(_=new g1(_,t,null,n,f),h.push({event:_,listeners:E}),k?_.data=k:(k=AE(n),k!==null&&(_.data=k)))),(k=Hz?qz(t,n):Kz(t,n))&&(u=vf(u,"onBeforeInput"),0<u.length&&(f=new g1("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=k))}HE(h,e)})}function jl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vf(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Al(t,n),o!=null&&r.unshift(jl(t,o,i)),o=Al(t,e),o!=null&&r.push(jl(t,o,i))),t=t.return}return r}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function I1(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Al(n,o),l!=null&&s.unshift(jl(n,l,a))):i||(l=Al(n,o),l!=null&&s.push(jl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var aP=/\r\n?/g,lP=/\u0000|\uFFFD/g;function z1(t){return(typeof t=="string"?t:""+t).replace(aP,`
`).replace(lP,"")}function vc(t,e,n){if(e=z1(e),z1(t)!==e&&n)throw Error($(425))}function wf(){}var Cm=null,Tm=null;function Im(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zm=typeof setTimeout=="function"?setTimeout:void 0,uP=typeof clearTimeout=="function"?clearTimeout:void 0,P1=typeof Promise=="function"?Promise:void 0,cP=typeof queueMicrotask=="function"?queueMicrotask:typeof P1<"u"?function(t){return P1.resolve(null).then(t).catch(fP)}:zm;function fP(t){setTimeout(function(){throw t})}function pp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$l(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$l(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function O1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ea=Math.random().toString(36).slice(2),cr="__reactFiber$"+Ea,Fl="__reactProps$"+Ea,Hr="__reactContainer$"+Ea,Pm="__reactEvents$"+Ea,dP="__reactListeners$"+Ea,hP="__reactHandles$"+Ea;function go(t){var e=t[cr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hr]||n[cr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=O1(t);t!==null;){if(n=t[cr])return n;t=O1(t)}return e}t=n,n=t.parentNode}return null}function Su(t){return t=t[cr]||t[Hr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function yd(t){return t[Fl]||null}var Om=[],Ss=-1;function Gi(t){return{current:t}}function Ae(t){0>Ss||(t.current=Om[Ss],Om[Ss]=null,Ss--)}function ze(t,e){Ss++,Om[Ss]=t.current,t.current=e}var Fi={},Mt=Gi(Fi),an=Gi(!1),Io=Fi;function Ks(t,e){var n=t.type.contextTypes;if(!n)return Fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ln(t){return t=t.childContextTypes,t!=null}function bf(){Ae(an),Ae(Mt)}function R1(t,e,n){if(Mt.current!==Fi)throw Error($(168));ze(Mt,e),ze(an,n)}function KE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,QI(t)||"Unknown",i));return Ve({},n,r)}function Sf(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fi,Io=Mt.current,ze(Mt,t),ze(an,an.current),!0}function A1(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=KE(t,e,Io),r.__reactInternalMemoizedMergedChildContext=t,Ae(an),Ae(Mt),ze(Mt,t)):Ae(an),ze(an,n)}var Ar=null,vd=!1,mp=!1;function GE(t){Ar===null?Ar=[t]:Ar.push(t)}function pP(t){vd=!0,GE(t)}function Xi(){if(!mp&&Ar!==null){mp=!0;var t=0,e=ke;try{var n=Ar;for(ke=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ar=null,vd=!1}catch(i){throw Ar!==null&&(Ar=Ar.slice(t+1)),wE(a0,Xi),i}finally{ke=e,mp=!1}}return null}var Es=[],ks=0,Ef=null,kf=0,Nn=[],Un=0,zo=null,Nr=1,Ur="";function co(t,e){Es[ks++]=kf,Es[ks++]=Ef,Ef=t,kf=e}function XE(t,e,n){Nn[Un++]=Nr,Nn[Un++]=Ur,Nn[Un++]=zo,zo=t;var r=Nr;t=Ur;var i=32-Yn(r)-1;r&=~(1<<i),n+=1;var o=32-Yn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Nr=1<<32-Yn(e)+i|n<<i|r,Ur=o+t}else Nr=1<<o|n<<i|r,Ur=t}function g0(t){t.return!==null&&(co(t,1),XE(t,1,0))}function y0(t){for(;t===Ef;)Ef=Es[--ks],Es[ks]=null,kf=Es[--ks],Es[ks]=null;for(;t===zo;)zo=Nn[--Un],Nn[Un]=null,Ur=Nn[--Un],Nn[Un]=null,Nr=Nn[--Un],Nn[Un]=null}var En=null,Sn=null,Ue=!1,Xn=null;function YE(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function N1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Sn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zo!==null?{id:Nr,overflow:Ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Sn=null,!0):!1;default:return!1}}function Rm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Am(t){if(Ue){var e=Sn;if(e){var n=e;if(!N1(t,e)){if(Rm(t))throw Error($(418));e=zi(n.nextSibling);var r=En;e&&N1(t,e)?YE(r,n):(t.flags=t.flags&-4097|2,Ue=!1,En=t)}}else{if(Rm(t))throw Error($(418));t.flags=t.flags&-4097|2,Ue=!1,En=t}}}function U1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function wc(t){if(t!==En)return!1;if(!Ue)return U1(t),Ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Im(t.type,t.memoizedProps)),e&&(e=Sn)){if(Rm(t))throw QE(),Error($(418));for(;e;)YE(t,e),e=zi(e.nextSibling)}if(U1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=En?zi(t.stateNode.nextSibling):null;return!0}function QE(){for(var t=Sn;t;)t=zi(t.nextSibling)}function Gs(){Sn=En=null,Ue=!1}function v0(t){Xn===null?Xn=[t]:Xn.push(t)}var mP=ri.ReactCurrentBatchConfig;function Kn(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var xf=Gi(null),_f=null,xs=null,w0=null;function b0(){w0=xs=_f=null}function S0(t){var e=xf.current;Ae(xf),t._currentValue=e}function Nm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){_f=t,w0=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(on=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(w0!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(_f===null)throw Error($(308));xs=t,_f.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var yo=null;function E0(t){yo===null?yo=[t]:yo.push(t)}function JE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,E0(e)):(n.next=i.next,i.next=n),e.interleaved=n,qr(t,r)}function qr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pi=!1;function k0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ZE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ge&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qr(t,n)}return i=r.interleaved,i===null?(e.next=e,E0(r)):(e.next=i.next,i.next=e),r.interleaved=e,qr(t,n)}function Wc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,l0(t,n)}}function $1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cf(t,e,n,r){var i=t.updateQueue;pi=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=i.baseState;s=0,f=u=l=null,a=o;do{var p=a.lane,y=a.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,v=a;switch(p=e,y=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){h=w.call(y,h,p);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,p=typeof w=="function"?w.call(y,h,p):w,p==null)break e;h=Ve({},h,p);break e;case 2:pi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=y,l=h):f=f.next=y,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(f===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Oo|=s,t.lanes=s,t.memoizedState=h}}function D1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var ek=new JS.Component().refs;function Um(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wd={isMounted:function(t){return(t=t._reactInternals)?Wo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=Ri(t),o=jr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Pi(t,o,i),e!==null&&(Qn(e,t,i,r),Wc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Kt(),i=Ri(t),o=jr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Pi(t,o,i),e!==null&&(Qn(e,t,i,r),Wc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),r=Ri(t),i=jr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Pi(t,i,r),e!==null&&(Qn(e,t,r,n),Wc(e,t,r))}};function M1(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ml(n,r)||!Ml(i,o):!0}function tk(t,e,n){var r=!1,i=Fi,o=e.contextType;return typeof o=="object"&&o!==null?o=Ln(o):(i=ln(e)?Io:Mt.current,r=e.contextTypes,o=(r=r!=null)?Ks(t,i):Fi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function L1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wd.enqueueReplaceState(e,e.state,null)}function $m(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ek,k0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Ln(o):(o=ln(e)?Io:Mt.current,i.context=Ks(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Um(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wd.enqueueReplaceState(i,i.state,null),Cf(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===ek&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function bc(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function j1(t){var e=t._init;return e(t._payload)}function nk(t){function e(d,m){if(t){var g=d.deletions;g===null?(d.deletions=[m],d.flags|=16):g.push(m)}}function n(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function r(d,m){for(d=new Map;m!==null;)m.key!==null?d.set(m.key,m):d.set(m.index,m),m=m.sibling;return d}function i(d,m){return d=Ai(d,m),d.index=0,d.sibling=null,d}function o(d,m,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<m?(d.flags|=2,m):g):(d.flags|=2,m)):(d.flags|=1048576,m)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,m,g,b){return m===null||m.tag!==6?(m=Ep(g,d.mode,b),m.return=d,m):(m=i(m,g),m.return=d,m)}function l(d,m,g,b){var S=g.type;return S===gs?f(d,m,g.props.children,b,g.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===hi&&j1(S)===m.type)?(b=i(m,g.props),b.ref=qa(d,m,g),b.return=d,b):(b=Yc(g.type,g.key,g.props,null,d.mode,b),b.ref=qa(d,m,g),b.return=d,b)}function u(d,m,g,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=kp(g,d.mode,b),m.return=d,m):(m=i(m,g.children||[]),m.return=d,m)}function f(d,m,g,b,S){return m===null||m.tag!==7?(m=ko(g,d.mode,b,S),m.return=d,m):(m=i(m,g),m.return=d,m)}function h(d,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Ep(""+m,d.mode,g),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case uc:return g=Yc(m.type,m.key,m.props,null,d.mode,g),g.ref=qa(d,null,m),g.return=d,g;case ms:return m=kp(m,d.mode,g),m.return=d,m;case hi:var b=m._init;return h(d,b(m._payload),g)}if(tl(m)||Fa(m))return m=ko(m,d.mode,g,null),m.return=d,m;bc(d,m)}return null}function p(d,m,g,b){var S=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(d,m,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case uc:return g.key===S?l(d,m,g,b):null;case ms:return g.key===S?u(d,m,g,b):null;case hi:return S=g._init,p(d,m,S(g._payload),b)}if(tl(g)||Fa(g))return S!==null?null:f(d,m,g,b,null);bc(d,g)}return null}function y(d,m,g,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return d=d.get(g)||null,a(m,d,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case uc:return d=d.get(b.key===null?g:b.key)||null,l(m,d,b,S);case ms:return d=d.get(b.key===null?g:b.key)||null,u(m,d,b,S);case hi:var E=b._init;return y(d,m,g,E(b._payload),S)}if(tl(b)||Fa(b))return d=d.get(g)||null,f(m,d,b,S,null);bc(m,b)}return null}function w(d,m,g,b){for(var S=null,E=null,k=m,_=m=0,C=null;k!==null&&_<g.length;_++){k.index>_?(C=k,k=null):C=k.sibling;var x=p(d,k,g[_],b);if(x===null){k===null&&(k=C);break}t&&k&&x.alternate===null&&e(d,k),m=o(x,m,_),E===null?S=x:E.sibling=x,E=x,k=C}if(_===g.length)return n(d,k),Ue&&co(d,_),S;if(k===null){for(;_<g.length;_++)k=h(d,g[_],b),k!==null&&(m=o(k,m,_),E===null?S=k:E.sibling=k,E=k);return Ue&&co(d,_),S}for(k=r(d,k);_<g.length;_++)C=y(k,d,_,g[_],b),C!==null&&(t&&C.alternate!==null&&k.delete(C.key===null?_:C.key),m=o(C,m,_),E===null?S=C:E.sibling=C,E=C);return t&&k.forEach(function(T){return e(d,T)}),Ue&&co(d,_),S}function v(d,m,g,b){var S=Fa(g);if(typeof S!="function")throw Error($(150));if(g=S.call(g),g==null)throw Error($(151));for(var E=S=null,k=m,_=m=0,C=null,x=g.next();k!==null&&!x.done;_++,x=g.next()){k.index>_?(C=k,k=null):C=k.sibling;var T=p(d,k,x.value,b);if(T===null){k===null&&(k=C);break}t&&k&&T.alternate===null&&e(d,k),m=o(T,m,_),E===null?S=T:E.sibling=T,E=T,k=C}if(x.done)return n(d,k),Ue&&co(d,_),S;if(k===null){for(;!x.done;_++,x=g.next())x=h(d,x.value,b),x!==null&&(m=o(x,m,_),E===null?S=x:E.sibling=x,E=x);return Ue&&co(d,_),S}for(k=r(d,k);!x.done;_++,x=g.next())x=y(k,d,_,x.value,b),x!==null&&(t&&x.alternate!==null&&k.delete(x.key===null?_:x.key),m=o(x,m,_),E===null?S=x:E.sibling=x,E=x);return t&&k.forEach(function(R){return e(d,R)}),Ue&&co(d,_),S}function c(d,m,g,b){if(typeof g=="object"&&g!==null&&g.type===gs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case uc:e:{for(var S=g.key,E=m;E!==null;){if(E.key===S){if(S=g.type,S===gs){if(E.tag===7){n(d,E.sibling),m=i(E,g.props.children),m.return=d,d=m;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===hi&&j1(S)===E.type){n(d,E.sibling),m=i(E,g.props),m.ref=qa(d,E,g),m.return=d,d=m;break e}n(d,E);break}else e(d,E);E=E.sibling}g.type===gs?(m=ko(g.props.children,d.mode,b,g.key),m.return=d,d=m):(b=Yc(g.type,g.key,g.props,null,d.mode,b),b.ref=qa(d,m,g),b.return=d,d=b)}return s(d);case ms:e:{for(E=g.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){n(d,m.sibling),m=i(m,g.children||[]),m.return=d,d=m;break e}else{n(d,m);break}else e(d,m);m=m.sibling}m=kp(g,d.mode,b),m.return=d,d=m}return s(d);case hi:return E=g._init,c(d,m,E(g._payload),b)}if(tl(g))return w(d,m,g,b);if(Fa(g))return v(d,m,g,b);bc(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(n(d,m.sibling),m=i(m,g),m.return=d,d=m):(n(d,m),m=Ep(g,d.mode,b),m.return=d,d=m),s(d)):n(d,m)}return c}var Xs=nk(!0),rk=nk(!1),Eu={},pr=Gi(Eu),Bl=Gi(Eu),Vl=Gi(Eu);function vo(t){if(t===Eu)throw Error($(174));return t}function x0(t,e){switch(ze(Vl,e),ze(Bl,t),ze(pr,Eu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pm(e,t)}Ae(pr),ze(pr,e)}function Ys(){Ae(pr),Ae(Bl),Ae(Vl)}function ik(t){vo(Vl.current);var e=vo(pr.current),n=pm(e,t.type);e!==n&&(ze(Bl,t),ze(pr,n))}function _0(t){Bl.current===t&&(Ae(pr),Ae(Bl))}var Fe=Gi(0);function Tf(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gp=[];function C0(){for(var t=0;t<gp.length;t++)gp[t]._workInProgressVersionPrimary=null;gp.length=0}var Hc=ri.ReactCurrentDispatcher,yp=ri.ReactCurrentBatchConfig,Po=0,Be=null,st=null,dt=null,If=!1,yl=!1,Wl=0,gP=0;function Pt(){throw Error($(321))}function T0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function I0(t,e,n,r,i,o){if(Po=o,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hc.current=t===null||t.memoizedState===null?bP:SP,t=n(r,i),yl){o=0;do{if(yl=!1,Wl=0,25<=o)throw Error($(301));o+=1,dt=st=null,e.updateQueue=null,Hc.current=EP,t=n(r,i)}while(yl)}if(Hc.current=zf,e=st!==null&&st.next!==null,Po=0,dt=st=Be=null,If=!1,e)throw Error($(300));return t}function z0(){var t=Wl!==0;return Wl=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Be.memoizedState=dt=t:dt=dt.next=t,dt}function jn(){if(st===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var e=dt===null?Be.memoizedState:dt.next;if(e!==null)dt=e,st=t;else{if(t===null)throw Error($(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},dt===null?Be.memoizedState=dt=t:dt=dt.next=t}return dt}function Hl(t,e){return typeof e=="function"?e(t):e}function vp(t){var e=jn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=st,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Po&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=r):l=l.next=h,Be.lanes|=f,Oo|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Zn(r,e.memoizedState)||(on=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Be.lanes|=o,Oo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wp(t){var e=jn(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Zn(o,e.memoizedState)||(on=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function ok(){}function sk(t,e){var n=Be,r=jn(),i=e(),o=!Zn(r.memoizedState,i);if(o&&(r.memoizedState=i,on=!0),r=r.queue,P0(uk.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,ql(9,lk.bind(null,n,r,i,e),void 0,null),ht===null)throw Error($(349));(Po&30)!==0||ak(n,e,i)}return i}function ak(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lk(t,e,n,r){e.value=n,e.getSnapshot=r,ck(e)&&fk(t)}function uk(t,e,n){return n(function(){ck(e)&&fk(t)})}function ck(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function fk(t){var e=qr(t,1);e!==null&&Qn(e,t,1,-1)}function F1(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hl,lastRenderedState:t},e.queue=t,t=t.dispatch=wP.bind(null,Be,t),[e.memoizedState,t]}function ql(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dk(){return jn().memoizedState}function qc(t,e,n,r){var i=sr();Be.flags|=t,i.memoizedState=ql(1|e,n,void 0,r===void 0?null:r)}function bd(t,e,n,r){var i=jn();r=r===void 0?null:r;var o=void 0;if(st!==null){var s=st.memoizedState;if(o=s.destroy,r!==null&&T0(r,s.deps)){i.memoizedState=ql(e,n,o,r);return}}Be.flags|=t,i.memoizedState=ql(1|e,n,o,r)}function B1(t,e){return qc(8390656,8,t,e)}function P0(t,e){return bd(2048,8,t,e)}function hk(t,e){return bd(4,2,t,e)}function pk(t,e){return bd(4,4,t,e)}function mk(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gk(t,e,n){return n=n!=null?n.concat([t]):null,bd(4,4,mk.bind(null,e,t),n)}function O0(){}function yk(t,e){var n=jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&T0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function vk(t,e){var n=jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&T0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wk(t,e,n){return(Po&21)===0?(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n):(Zn(n,e)||(n=EE(),Be.lanes|=n,Oo|=n,t.baseState=!0),e)}function yP(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var r=yp.transition;yp.transition={};try{t(!1),e()}finally{ke=n,yp.transition=r}}function bk(){return jn().memoizedState}function vP(t,e,n){var r=Ri(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sk(t))Ek(e,n);else if(n=JE(t,e,n,r),n!==null){var i=Kt();Qn(n,t,r,i),kk(n,e,r)}}function wP(t,e,n){var r=Ri(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sk(t))Ek(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Zn(a,s)){var l=e.interleaved;l===null?(i.next=i,E0(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=JE(t,e,i,r),n!==null&&(i=Kt(),Qn(n,t,r,i),kk(n,e,r))}}function Sk(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function Ek(t,e){yl=If=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kk(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,l0(t,n)}}var zf={readContext:Ln,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},bP={readContext:Ln,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:B1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qc(4194308,4,mk.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qc(4194308,4,t,e)},useInsertionEffect:function(t,e){return qc(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vP.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:F1,useDebugValue:O0,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=F1(!1),e=t[0];return t=yP.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,i=sr();if(Ue){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),ht===null)throw Error($(349));(Po&30)!==0||ak(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,B1(uk.bind(null,r,o,t),[t]),r.flags|=2048,ql(9,lk.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=sr(),e=ht.identifierPrefix;if(Ue){var n=Ur,r=Nr;n=(r&~(1<<32-Yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SP={readContext:Ln,useCallback:yk,useContext:Ln,useEffect:P0,useImperativeHandle:gk,useInsertionEffect:hk,useLayoutEffect:pk,useMemo:vk,useReducer:vp,useRef:dk,useState:function(){return vp(Hl)},useDebugValue:O0,useDeferredValue:function(t){var e=jn();return wk(e,st.memoizedState,t)},useTransition:function(){var t=vp(Hl)[0],e=jn().memoizedState;return[t,e]},useMutableSource:ok,useSyncExternalStore:sk,useId:bk,unstable_isNewReconciler:!1},EP={readContext:Ln,useCallback:yk,useContext:Ln,useEffect:P0,useImperativeHandle:gk,useInsertionEffect:hk,useLayoutEffect:pk,useMemo:vk,useReducer:wp,useRef:dk,useState:function(){return wp(Hl)},useDebugValue:O0,useDeferredValue:function(t){var e=jn();return st===null?e.memoizedState=t:wk(e,st.memoizedState,t)},useTransition:function(){var t=wp(Hl)[0],e=jn().memoizedState;return[t,e]},useMutableSource:ok,useSyncExternalStore:sk,useId:bk,unstable_isNewReconciler:!1};function Qs(t,e){try{var n="",r=e;do n+=YI(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function bp(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Dm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kP=typeof WeakMap=="function"?WeakMap:Map;function xk(t,e,n){n=jr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Of||(Of=!0,Km=r),Dm(t,e)},n}function _k(t,e,n){n=jr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Dm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Dm(t,e),typeof r!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function V1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DP.bind(null,t,e,n),e.then(t,t))}function W1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function H1(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jr(-1,1),e.tag=2,Pi(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var xP=ri.ReactCurrentOwner,on=!1;function Ht(t,e,n,r){e.child=t===null?rk(e,null,n,r):Xs(e,t.child,n,r)}function q1(t,e,n,r,i){n=n.render;var o=e.ref;return Us(e,i),r=I0(t,e,n,r,o,i),n=z0(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kr(t,e,i)):(Ue&&n&&g0(e),e.flags|=1,Ht(t,e,r,i),e.child)}function K1(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!L0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Ck(t,e,o,r,i)):(t=Yc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,(t.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ml,n(s,r)&&t.ref===e.ref)return Kr(t,e,i)}return e.flags|=1,t=Ai(o,r),t.ref=e.ref,t.return=e,e.child=t}function Ck(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ml(o,r)&&t.ref===e.ref)if(on=!1,e.pendingProps=r=o,(t.lanes&i)!==0)(t.flags&131072)!==0&&(on=!0);else return e.lanes=t.lanes,Kr(t,e,i)}return Mm(t,e,n,r,i)}function Tk(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(Cs,wn),wn|=n;else{if((n&1073741824)===0)return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ze(Cs,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ze(Cs,wn),wn|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,ze(Cs,wn),wn|=r;return Ht(t,e,i,n),e.child}function Ik(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mm(t,e,n,r,i){var o=ln(n)?Io:Mt.current;return o=Ks(e,o),Us(e,i),n=I0(t,e,n,r,o,i),r=z0(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kr(t,e,i)):(Ue&&r&&g0(e),e.flags|=1,Ht(t,e,n,i),e.child)}function G1(t,e,n,r,i){if(ln(n)){var o=!0;Sf(e)}else o=!1;if(Us(e,i),e.stateNode===null)Kc(t,e),tk(e,n,r),$m(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=ln(n)?Io:Mt.current,u=Ks(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&L1(e,s,r,u),pi=!1;var p=e.memoizedState;s.state=p,Cf(e,r,s,i),l=e.memoizedState,a!==r||p!==l||an.current||pi?(typeof f=="function"&&(Um(e,n,f,r),l=e.memoizedState),(a=pi||M1(e,n,a,r,p,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,ZE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Kn(e.type,a),s.props=u,h=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=ln(n)?Io:Mt.current,l=Ks(e,l));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||p!==l)&&L1(e,s,r,l),pi=!1,p=e.memoizedState,s.state=p,Cf(e,r,s,i);var w=e.memoizedState;a!==h||p!==w||an.current||pi?(typeof y=="function"&&(Um(e,n,y,r),w=e.memoizedState),(u=pi||M1(e,n,u,r,p,w,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Lm(t,e,n,r,o,i)}function Lm(t,e,n,r,i,o){Ik(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&A1(e,n,!1),Kr(t,e,o);r=e.stateNode,xP.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Xs(e,t.child,null,o),e.child=Xs(e,null,a,o)):Ht(t,e,a,o),e.memoizedState=r.state,i&&A1(e,n,!0),e.child}function zk(t){var e=t.stateNode;e.pendingContext?R1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&R1(t,e.context,!1),x0(t,e.containerInfo)}function X1(t,e,n,r,i){return Gs(),v0(i),e.flags|=256,Ht(t,e,n,r),e.child}var jm={dehydrated:null,treeContext:null,retryLane:0};function Fm(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pk(t,e,n){var r=e.pendingProps,i=Fe.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ze(Fe,i&1),t===null)return Am(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=kd(s,r,0,null),t=ko(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Fm(n),e.memoizedState=jm,t):R0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _P(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ai(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ai(a,o):(o=ko(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Fm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=jm,r}return o=t.child,t=o.sibling,r=Ai(o,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function R0(t,e){return e=kd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sc(t,e,n,r){return r!==null&&v0(r),Xs(e,t.child,null,n),t=R0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _P(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=bp(Error($(422))),Sc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=kd({mode:"visible",children:r.children},i,0,null),o=ko(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,(e.mode&1)!==0&&Xs(e,t.child,null,s),e.child.memoizedState=Fm(s),e.memoizedState=jm,o);if((e.mode&1)===0)return Sc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error($(419)),r=bp(o,r,void 0),Sc(t,e,s,r)}if(a=(s&t.childLanes)!==0,on||a){if(r=ht,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,qr(t,i),Qn(r,t,i,-1))}return M0(),r=bp(Error($(421))),Sc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=MP.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Sn=zi(i.nextSibling),En=e,Ue=!0,Xn=null,t!==null&&(Nn[Un++]=Nr,Nn[Un++]=Ur,Nn[Un++]=zo,Nr=t.id,Ur=t.overflow,zo=e),e=R0(e,r.children),e.flags|=4096,e)}function Y1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nm(t.return,e,n)}function Sp(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ok(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Ht(t,e,r.children,n),r=Fe.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Y1(t,n,e);else if(t.tag===19)Y1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ze(Fe,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tf(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sp(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tf(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sp(e,!0,n,null,o);break;case"together":Sp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Oo|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CP(t,e,n){switch(e.tag){case 3:zk(e),Gs();break;case 5:ik(e);break;case 1:ln(e.type)&&Sf(e);break;case 4:x0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ze(xf,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ze(Fe,Fe.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Pk(t,e,n):(ze(Fe,Fe.current&1),t=Kr(t,e,n),t!==null?t.sibling:null);ze(Fe,Fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Ok(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ze(Fe,Fe.current),r)break;return null;case 22:case 23:return e.lanes=0,Tk(t,e,n)}return Kr(t,e,n)}var Rk,Bm,Ak,Nk;Rk=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bm=function(){};Ak=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,vo(pr.current);var o=null;switch(n){case"input":i=cm(t,i),r=cm(t,r),o=[];break;case"select":i=Ve({},i,{value:void 0}),r=Ve({},r,{value:void 0}),o=[];break;case"textarea":i=hm(t,i),r=hm(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wf)}mm(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ol.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ol.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Re("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Nk=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ka(t,e){if(!Ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function TP(t,e,n){var r=e.pendingProps;switch(y0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return ln(e.type)&&bf(),Ot(e),null;case 3:return r=e.stateNode,Ys(),Ae(an),Ae(Mt),C0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Xn!==null&&(Ym(Xn),Xn=null))),Bm(t,e),Ot(e),null;case 5:_0(e);var i=vo(Vl.current);if(n=e.type,t!==null&&e.stateNode!=null)Ak(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return Ot(e),null}if(t=vo(pr.current),wc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[cr]=e,r[Fl]=o,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(i=0;i<rl.length;i++)Re(rl[i],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":o1(r,o),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Re("invalid",r);break;case"textarea":a1(r,o),Re("invalid",r)}mm(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&vc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&vc(r.textContent,a,t),i=["children",""+a]):Ol.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Re("scroll",r)}switch(n){case"input":cc(r),s1(r,o,!0);break;case"textarea":cc(r),l1(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wf)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=aE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[cr]=e,t[Fl]=r,Rk(t,e,!1,!1),e.stateNode=t;e:{switch(s=gm(n,r),n){case"dialog":Re("cancel",t),Re("close",t),i=r;break;case"iframe":case"object":case"embed":Re("load",t),i=r;break;case"video":case"audio":for(i=0;i<rl.length;i++)Re(rl[i],t);i=r;break;case"source":Re("error",t),i=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),i=r;break;case"details":Re("toggle",t),i=r;break;case"input":o1(t,r),i=cm(t,r),Re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ve({},r,{value:void 0}),Re("invalid",t);break;case"textarea":a1(t,r),i=hm(t,r),Re("invalid",t);break;default:i=r}mm(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?cE(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&lE(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rl(t,l):typeof l=="number"&&Rl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ol.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Re("scroll",t):l!=null&&n0(t,o,l,s))}switch(n){case"input":cc(t),s1(t,r,!1);break;case"textarea":cc(t),l1(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ji(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Os(t,!!r.multiple,o,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wf)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)Nk(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=vo(Vl.current),vo(pr.current),wc(e)){if(r=e.stateNode,n=e.memoizedProps,r[cr]=e,(o=r.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:vc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cr]=e,e.stateNode=r}return Ot(e),null;case 13:if(Ae(Fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ue&&Sn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)QE(),Gs(),e.flags|=98560,o=!1;else if(o=wc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error($(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[cr]=e}else Gs(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ot(e),o=!1}else Xn!==null&&(Ym(Xn),Xn=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Fe.current&1)!==0?at===0&&(at=3):M0())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Ys(),Bm(t,e),t===null&&Ll(e.stateNode.containerInfo),Ot(e),null;case 10:return S0(e.type._context),Ot(e),null;case 17:return ln(e.type)&&bf(),Ot(e),null;case 19:if(Ae(Fe),o=e.memoizedState,o===null)return Ot(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ka(o,!1);else{if(at!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Tf(t),s!==null){for(e.flags|=128,Ka(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ze(Fe,Fe.current&1|2),e.child}t=t.sibling}o.tail!==null&&Qe()>Js&&(e.flags|=128,r=!0,Ka(o,!1),e.lanes=4194304)}else{if(!r)if(t=Tf(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ka(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ue)return Ot(e),null}else 2*Qe()-o.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,Ka(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Qe(),e.sibling=null,n=Fe.current,ze(Fe,r?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return D0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(wn&1073741824)!==0&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function IP(t,e){switch(y0(e),e.tag){case 1:return ln(e.type)&&bf(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),Ae(an),Ae(Mt),C0(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return _0(e),null;case 13:if(Ae(Fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Fe),null;case 4:return Ys(),null;case 10:return S0(e.type._context),null;case 22:case 23:return D0(),null;case 24:return null;default:return null}}var Ec=!1,Nt=!1,zP=typeof WeakSet=="function"?WeakSet:Set,q=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function Vm(t,e,n){try{n()}catch(r){qe(t,e,r)}}var Q1=!1;function PP(t,e){if(Cm=gf,t=ME(),m0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=t,p=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=s+i),h!==o||r!==0&&h.nodeType!==3||(l=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===t)break t;if(p===n&&++u===i&&(a=s),p===o&&++f===r&&(l=s),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tm={focusedElem:t,selectionRange:n},gf=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var w=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,c=w.memoizedState,d=e.stateNode,m=d.getSnapshotBeforeUpdate(e.elementType===e.type?v:Kn(e.type,v),c);d.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(b){qe(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return w=Q1,Q1=!1,w}function vl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Vm(e,n,o)}i=i.next}while(i!==r)}}function Sd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Wm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Uk(t){var e=t.alternate;e!==null&&(t.alternate=null,Uk(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cr],delete e[Fl],delete e[Pm],delete e[dP],delete e[hP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $k(t){return t.tag===5||t.tag===3||t.tag===4}function J1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$k(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wf));else if(r!==4&&(t=t.child,t!==null))for(Hm(t,e,n),t=t.sibling;t!==null;)Hm(t,e,n),t=t.sibling}function qm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qm(t,e,n),t=t.sibling;t!==null;)qm(t,e,n),t=t.sibling}var wt=null,Gn=!1;function ui(t,e,n){for(n=n.child;n!==null;)Dk(t,e,n),n=n.sibling}function Dk(t,e,n){if(hr&&typeof hr.onCommitFiberUnmount=="function")try{hr.onCommitFiberUnmount(hd,n)}catch{}switch(n.tag){case 5:Nt||_s(n,e);case 6:var r=wt,i=Gn;wt=null,ui(t,e,n),wt=r,Gn=i,wt!==null&&(Gn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Gn?(t=wt,n=n.stateNode,t.nodeType===8?pp(t.parentNode,n):t.nodeType===1&&pp(t,n),$l(t)):pp(wt,n.stateNode));break;case 4:r=wt,i=Gn,wt=n.stateNode.containerInfo,Gn=!0,ui(t,e,n),wt=r,Gn=i;break;case 0:case 11:case 14:case 15:if(!Nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Vm(n,e,s),i=i.next}while(i!==r)}ui(t,e,n);break;case 1:if(!Nt&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}ui(t,e,n);break;case 21:ui(t,e,n);break;case 22:n.mode&1?(Nt=(r=Nt)||n.memoizedState!==null,ui(t,e,n),Nt=r):ui(t,e,n);break;default:ui(t,e,n)}}function Z1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zP),e.forEach(function(r){var i=LP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:wt=a.stateNode,Gn=!1;break e;case 3:wt=a.stateNode.containerInfo,Gn=!0;break e;case 4:wt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(wt===null)throw Error($(160));Dk(o,s,i),wt=null,Gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){qe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mk(e,t),e=e.sibling}function Mk(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),or(t),r&4){try{vl(3,t,t.return),Sd(3,t)}catch(v){qe(t,t.return,v)}try{vl(5,t,t.return)}catch(v){qe(t,t.return,v)}}break;case 1:qn(e,t),or(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(qn(e,t),or(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{Rl(i,"")}catch(v){qe(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&oE(i,o),gm(a,s);var u=gm(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?cE(i,h):f==="dangerouslySetInnerHTML"?lE(i,h):f==="children"?Rl(i,h):n0(i,f,h,u)}switch(a){case"input":fm(i,o);break;case"textarea":sE(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Os(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Os(i,!!o.multiple,o.defaultValue,!0):Os(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fl]=o}catch(v){qe(t,t.return,v)}}break;case 6:if(qn(e,t),or(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){qe(t,t.return,v)}}break;case 3:if(qn(e,t),or(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$l(e.containerInfo)}catch(v){qe(t,t.return,v)}break;case 4:qn(e,t),or(t);break;case 13:qn(e,t),or(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(U0=Qe())),r&4&&Z1(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Nt=(u=Nt)||f,qn(e,t),Nt=u):qn(e,t),or(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&(t.mode&1)!==0)for(q=t,f=t.child;f!==null;){for(h=q=f;q!==null;){switch(p=q,y=p.child,p.tag){case 0:case 11:case 14:case 15:vl(4,p,p.return);break;case 1:_s(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(v){qe(r,n,v)}}break;case 5:_s(p,p.return);break;case 22:if(p.memoizedState!==null){tw(h);continue}}y!==null?(y.return=p,q=y):tw(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=uE("display",s))}catch(v){qe(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){qe(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qn(e,t),or(t),r&4&&Z1(t);break;case 21:break;default:qn(e,t),or(t)}}function or(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($k(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rl(i,""),r.flags&=-33);var o=J1(t);qm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=J1(t);Hm(t,a,s);break;default:throw Error($(161))}}catch(l){qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OP(t,e,n){q=t,Lk(t)}function Lk(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ec;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Nt;a=Ec;var u=Nt;if(Ec=s,(Nt=l)&&!u)for(q=i;q!==null;)s=q,l=s.child,s.tag===22&&s.memoizedState!==null?nw(i):l!==null?(l.return=s,q=l):nw(i);for(;o!==null;)q=o,Lk(o),o=o.sibling;q=i,Ec=a,Nt=u}ew(t)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,q=o):ew(t)}}function ew(t){for(;q!==null;){var e=q;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Nt||Sd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&D1(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}D1(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&$l(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Nt||e.flags&512&&Wm(e)}catch(p){qe(e,e.return,p)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function tw(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function nw(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sd(4,e)}catch(l){qe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){qe(e,i,l)}}var o=e.return;try{Wm(e)}catch(l){qe(e,o,l)}break;case 5:var s=e.return;try{Wm(e)}catch(l){qe(e,s,l)}}}catch(l){qe(e,e.return,l)}if(e===t){q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,q=a;break}q=e.return}}var RP=Math.ceil,Pf=ri.ReactCurrentDispatcher,A0=ri.ReactCurrentOwner,Dn=ri.ReactCurrentBatchConfig,ge=0,ht=null,rt=null,kt=0,wn=0,Cs=Gi(0),at=0,Kl=null,Oo=0,Ed=0,N0=0,wl=null,rn=null,U0=0,Js=1/0,Rr=null,Of=!1,Km=null,Oi=null,kc=!1,Ei=null,Rf=0,bl=0,Gm=null,Gc=-1,Xc=0;function Kt(){return(ge&6)!==0?Qe():Gc!==-1?Gc:Gc=Qe()}function Ri(t){return(t.mode&1)===0?1:(ge&2)!==0&&kt!==0?kt&-kt:mP.transition!==null?(Xc===0&&(Xc=EE()),Xc):(t=ke,t!==0||(t=window.event,t=t===void 0?16:zE(t.type)),t)}function Qn(t,e,n,r){if(50<bl)throw bl=0,Gm=null,Error($(185));wu(t,n,r),((ge&2)===0||t!==ht)&&(t===ht&&((ge&2)===0&&(Ed|=n),at===4&&gi(t,kt)),un(t,r),n===1&&ge===0&&(e.mode&1)===0&&(Js=Qe()+500,vd&&Xi()))}function un(t,e){var n=t.callbackNode;mz(t,e);var r=mf(t,t===ht?kt:0);if(r===0)n!==null&&f1(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&f1(n),e===1)t.tag===0?pP(rw.bind(null,t)):GE(rw.bind(null,t)),cP(function(){(ge&6)===0&&Xi()}),n=null;else{switch(kE(r)){case 1:n=a0;break;case 4:n=bE;break;case 16:n=pf;break;case 536870912:n=SE;break;default:n=pf}n=Kk(n,jk.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jk(t,e){if(Gc=-1,Xc=0,(ge&6)!==0)throw Error($(327));var n=t.callbackNode;if($s()&&t.callbackNode!==n)return null;var r=mf(t,t===ht?kt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Af(t,r);else{e=r;var i=ge;ge|=2;var o=Bk();(ht!==t||kt!==e)&&(Rr=null,Js=Qe()+500,Eo(t,e));do try{UP();break}catch(a){Fk(t,a)}while(1);b0(),Pf.current=o,ge=i,rt!==null?e=0:(ht=null,kt=0,e=at)}if(e!==0){if(e===2&&(i=Sm(t),i!==0&&(r=i,e=Xm(t,i))),e===1)throw n=Kl,Eo(t,0),gi(t,r),un(t,Qe()),n;if(e===6)gi(t,r);else{if(i=t.current.alternate,(r&30)===0&&!AP(i)&&(e=Af(t,r),e===2&&(o=Sm(t),o!==0&&(r=o,e=Xm(t,o))),e===1))throw n=Kl,Eo(t,0),gi(t,r),un(t,Qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:fo(t,rn,Rr);break;case 3:if(gi(t,r),(r&130023424)===r&&(e=U0+500-Qe(),10<e)){if(mf(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zm(fo.bind(null,t,rn,Rr),e);break}fo(t,rn,Rr);break;case 4:if(gi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Yn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RP(r/1960))-r,10<r){t.timeoutHandle=zm(fo.bind(null,t,rn,Rr),r);break}fo(t,rn,Rr);break;case 5:fo(t,rn,Rr);break;default:throw Error($(329))}}}return un(t,Qe()),t.callbackNode===n?jk.bind(null,t):null}function Xm(t,e){var n=wl;return t.current.memoizedState.isDehydrated&&(Eo(t,e).flags|=256),t=Af(t,e),t!==2&&(e=rn,rn=n,e!==null&&Ym(e)),t}function Ym(t){rn===null?rn=t:rn.push.apply(rn,t)}function AP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Zn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gi(t,e){for(e&=~N0,e&=~Ed,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),r=1<<n;t[n]=-1,e&=~r}}function rw(t){if((ge&6)!==0)throw Error($(327));$s();var e=mf(t,0);if((e&1)===0)return un(t,Qe()),null;var n=Af(t,e);if(t.tag!==0&&n===2){var r=Sm(t);r!==0&&(e=r,n=Xm(t,r))}if(n===1)throw n=Kl,Eo(t,0),gi(t,e),un(t,Qe()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fo(t,rn,Rr),un(t,Qe()),null}function $0(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(Js=Qe()+500,vd&&Xi())}}function Ro(t){Ei!==null&&Ei.tag===0&&(ge&6)===0&&$s();var e=ge;ge|=1;var n=Dn.transition,r=ke;try{if(Dn.transition=null,ke=1,t)return t()}finally{ke=r,Dn.transition=n,ge=e,(ge&6)===0&&Xi()}}function D0(){wn=Cs.current,Ae(Cs)}function Eo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uP(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(y0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bf();break;case 3:Ys(),Ae(an),Ae(Mt),C0();break;case 5:_0(r);break;case 4:Ys();break;case 13:Ae(Fe);break;case 19:Ae(Fe);break;case 10:S0(r.type._context);break;case 22:case 23:D0()}n=n.return}if(ht=t,rt=t=Ai(t.current,null),kt=wn=e,at=0,Kl=null,N0=Ed=Oo=0,rn=wl=null,yo!==null){for(e=0;e<yo.length;e++)if(n=yo[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}yo=null}return t}function Fk(t,e){do{var n=rt;try{if(b0(),Hc.current=zf,If){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}If=!1}if(Po=0,dt=st=Be=null,yl=!1,Wl=0,A0.current=null,n===null||n.return===null){at=1,Kl=e,rt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if((f.mode&1)===0&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=W1(s);if(y!==null){y.flags&=-257,H1(y,s,a,o,e),y.mode&1&&V1(o,u,e),e=y,l=u;var w=e.updateQueue;if(w===null){var v=new Set;v.add(l),e.updateQueue=v}else w.add(l);break e}else{if((e&1)===0){V1(o,u,e),M0();break e}l=Error($(426))}}else if(Ue&&a.mode&1){var c=W1(s);if(c!==null){(c.flags&65536)===0&&(c.flags|=256),H1(c,s,a,o,e),v0(Qs(l,a));break e}}o=l=Qs(l,a),at!==4&&(at=2),wl===null?wl=[o]:wl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=xk(o,l,e);$1(o,d);break e;case 1:a=l;var m=o.type,g=o.stateNode;if((o.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Oi===null||!Oi.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var b=_k(o,a,e);$1(o,b);break e}}o=o.return}while(o!==null)}Wk(n)}catch(S){e=S,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(1)}function Bk(){var t=Pf.current;return Pf.current=zf,t===null?zf:t}function M0(){(at===0||at===3||at===2)&&(at=4),ht===null||(Oo&268435455)===0&&(Ed&268435455)===0||gi(ht,kt)}function Af(t,e){var n=ge;ge|=2;var r=Bk();(ht!==t||kt!==e)&&(Rr=null,Eo(t,e));do try{NP();break}catch(i){Fk(t,i)}while(1);if(b0(),ge=n,Pf.current=r,rt!==null)throw Error($(261));return ht=null,kt=0,at}function NP(){for(;rt!==null;)Vk(rt)}function UP(){for(;rt!==null&&!sz();)Vk(rt)}function Vk(t){var e=qk(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?Wk(t):rt=e,A0.current=null}function Wk(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=TP(n,e,wn),n!==null){rt=n;return}}else{if(n=IP(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,rt=null;return}}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);at===0&&(at=5)}function fo(t,e,n){var r=ke,i=Dn.transition;try{Dn.transition=null,ke=1,$P(t,e,n,r)}finally{Dn.transition=i,ke=r}return null}function $P(t,e,n,r){do $s();while(Ei!==null);if((ge&6)!==0)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(gz(t,o),t===ht&&(rt=ht=null,kt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||kc||(kc=!0,Kk(pf,function(){return $s(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Dn.transition,Dn.transition=null;var s=ke;ke=1;var a=ge;ge|=4,A0.current=null,PP(t,n),Mk(n,t),nP(Tm),gf=!!Cm,Tm=Cm=null,t.current=n,OP(n),az(),ge=a,ke=s,Dn.transition=o}else t.current=n;if(kc&&(kc=!1,Ei=t,Rf=i),o=t.pendingLanes,o===0&&(Oi=null),cz(n.stateNode),un(t,Qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Of)throw Of=!1,t=Km,Km=null,t;return(Rf&1)!==0&&t.tag!==0&&$s(),o=t.pendingLanes,(o&1)!==0?t===Gm?bl++:(bl=0,Gm=t):bl=0,Xi(),null}function $s(){if(Ei!==null){var t=kE(Rf),e=Dn.transition,n=ke;try{if(Dn.transition=null,ke=16>t?16:t,Ei===null)var r=!1;else{if(t=Ei,Ei=null,Rf=0,(ge&6)!==0)throw Error($(331));var i=ge;for(ge|=4,q=t.current;q!==null;){var o=q,s=o.child;if((q.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(q=u;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:vl(8,f,o)}var h=f.child;if(h!==null)h.return=f,q=h;else for(;q!==null;){f=q;var p=f.sibling,y=f.return;if(Uk(f),f===u){q=null;break}if(p!==null){p.return=y,q=p;break}q=y}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var c=v.sibling;v.sibling=null,v=c}while(v!==null)}}q=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,q=s;else e:for(;q!==null;){if(o=q,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:vl(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,q=d;break e}q=o.return}}var m=t.current;for(q=m;q!==null;){s=q;var g=s.child;if((s.subtreeFlags&2064)!==0&&g!==null)g.return=s,q=g;else e:for(s=m;q!==null;){if(a=q,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Sd(9,a)}}catch(S){qe(a,a.return,S)}if(a===s){q=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,q=b;break e}q=a.return}}if(ge=i,Xi(),hr&&typeof hr.onPostCommitFiberRoot=="function")try{hr.onPostCommitFiberRoot(hd,t)}catch{}r=!0}return r}finally{ke=n,Dn.transition=e}}return!1}function iw(t,e,n){e=Qs(n,e),e=xk(t,e,1),t=Pi(t,e,1),e=Kt(),t!==null&&(wu(t,1,e),un(t,e))}function qe(t,e,n){if(t.tag===3)iw(t,t,n);else for(;e!==null;){if(e.tag===3){iw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Oi===null||!Oi.has(r))){t=Qs(n,t),t=_k(e,t,1),e=Pi(e,t,1),t=Kt(),e!==null&&(wu(e,1,t),un(e,t));break}}e=e.return}}function DP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(kt&n)===n&&(at===4||at===3&&(kt&130023424)===kt&&500>Qe()-U0?Eo(t,0):N0|=n),un(t,e)}function Hk(t,e){e===0&&((t.mode&1)===0?e=1:(e=hc,hc<<=1,(hc&130023424)===0&&(hc=4194304)));var n=Kt();t=qr(t,e),t!==null&&(wu(t,e,n),un(t,n))}function MP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hk(t,n)}function LP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),Hk(t,n)}var qk;qk=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return on=!1,CP(t,e,n);on=(t.flags&131072)!==0}else on=!1,Ue&&(e.flags&1048576)!==0&&XE(e,kf,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Kc(t,e),t=e.pendingProps;var i=Ks(e,Mt.current);Us(e,n),i=I0(null,e,r,t,i,n);var o=z0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(r)?(o=!0,Sf(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,k0(e),i.updater=wd,e.stateNode=i,i._reactInternals=e,$m(e,r,t,n),e=Lm(null,e,r,!0,o,n)):(e.tag=0,Ue&&o&&g0(e),Ht(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Kc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=FP(r),t=Kn(r,t),i){case 0:e=Mm(null,e,r,t,n);break e;case 1:e=G1(null,e,r,t,n);break e;case 11:e=q1(null,e,r,t,n);break e;case 14:e=K1(null,e,r,Kn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Mm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),G1(t,e,r,i,n);case 3:e:{if(zk(e),t===null)throw Error($(387));r=e.pendingProps,o=e.memoizedState,i=o.element,ZE(t,e),Cf(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Qs(Error($(423)),e),e=X1(t,e,r,n,i);break e}else if(r!==i){i=Qs(Error($(424)),e),e=X1(t,e,r,n,i);break e}else for(Sn=zi(e.stateNode.containerInfo.firstChild),En=e,Ue=!0,Xn=null,n=rk(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),r===i){e=Kr(t,e,n);break e}Ht(t,e,r,n)}e=e.child}return e;case 5:return ik(e),t===null&&Am(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Im(r,i)?s=null:o!==null&&Im(r,o)&&(e.flags|=32),Ik(t,e),Ht(t,e,s,n),e.child;case 6:return t===null&&Am(e),null;case 13:return Pk(t,e,n);case 4:return x0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xs(e,null,r,n):Ht(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),q1(t,e,r,i,n);case 7:return Ht(t,e,e.pendingProps,n),e.child;case 8:return Ht(t,e,e.pendingProps.children,n),e.child;case 12:return Ht(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,ze(xf,r._currentValue),r._currentValue=s,o!==null)if(Zn(o.value,s)){if(o.children===i.children&&!an.current){e=Kr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=jr(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Nm(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error($(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Nm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ht(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Us(e,n),i=Ln(i),r=r(i),e.flags|=1,Ht(t,e,r,n),e.child;case 14:return r=e.type,i=Kn(r,e.pendingProps),i=Kn(r.type,i),K1(t,e,r,i,n);case 15:return Ck(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Kn(r,i),Kc(t,e),e.tag=1,ln(r)?(t=!0,Sf(e)):t=!1,Us(e,n),tk(e,r,i),$m(e,r,i,n),Lm(null,e,r,!0,t,n);case 19:return Ok(t,e,n);case 22:return Tk(t,e,n)}throw Error($(156,e.tag))};function Kk(t,e){return wE(t,e)}function jP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,r){return new jP(t,e,n,r)}function L0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FP(t){if(typeof t=="function")return L0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===i0)return 11;if(t===o0)return 14}return 2}function Ai(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")L0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case gs:return ko(n.children,i,o,e);case r0:s=8,i|=8;break;case sm:return t=$n(12,n,e,i|2),t.elementType=sm,t.lanes=o,t;case am:return t=$n(13,n,e,i),t.elementType=am,t.lanes=o,t;case lm:return t=$n(19,n,e,i),t.elementType=lm,t.lanes=o,t;case nE:return kd(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eE:s=10;break e;case tE:s=9;break e;case i0:s=11;break e;case o0:s=14;break e;case hi:s=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=$n(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ko(t,e,n,r){return t=$n(7,t,r,e),t.lanes=n,t}function kd(t,e,n,r){return t=$n(22,t,r,e),t.elementType=nE,t.lanes=n,t.stateNode={isHidden:!1},t}function Ep(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function kp(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rp(0),this.expirationTimes=rp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function j0(t,e,n,r,i,o,s,a,l){return t=new BP(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=$n(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},k0(o),t}function VP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gk(t){if(!t)return Fi;t=t._reactInternals;e:{if(Wo(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(ln(n))return KE(t,n,e)}return e}function Xk(t,e,n,r,i,o,s,a,l){return t=j0(n,r,!0,t,i,o,s,a,l),t.context=Gk(null),n=t.current,r=Kt(),i=Ri(n),o=jr(r,i),o.callback=e!=null?e:null,Pi(n,o,i),t.current.lanes=i,wu(t,i,r),un(t,r),t}function xd(t,e,n,r){var i=e.current,o=Kt(),s=Ri(i);return n=Gk(n),e.context===null?e.context=n:e.pendingContext=n,e=jr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pi(i,e,s),t!==null&&(Qn(t,i,s,o),Wc(t,i,s)),s}function Nf(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ow(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function F0(t,e){ow(t,e),(t=t.alternate)&&ow(t,e)}function WP(){return null}var Yk=typeof reportError=="function"?reportError:function(t){console.error(t)};function B0(t){this._internalRoot=t}_d.prototype.render=B0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));xd(t,e,null,null)};_d.prototype.unmount=B0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ro(function(){xd(null,t,null,null)}),e[Hr]=null}};function _d(t){this._internalRoot=t}_d.prototype.unstable_scheduleHydration=function(t){if(t){var e=CE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mi.length&&e!==0&&e<mi[n].priority;n++);mi.splice(n,0,t),n===0&&IE(t)}};function V0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sw(){}function HP(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Nf(s);o.call(u)}}var s=Xk(e,r,t,0,null,!1,!1,"",sw);return t._reactRootContainer=s,t[Hr]=s.current,Ll(t.nodeType===8?t.parentNode:t),Ro(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Nf(l);a.call(u)}}var l=j0(t,0,!1,null,null,!1,!1,"",sw);return t._reactRootContainer=l,t[Hr]=l.current,Ll(t.nodeType===8?t.parentNode:t),Ro(function(){xd(e,l,n,r)}),l}function Td(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Nf(s);a.call(l)}}xd(e,s,t,i)}else s=HP(n,e,t,i,r);return Nf(s)}xE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=nl(e.pendingLanes);n!==0&&(l0(e,n|1),un(e,Qe()),(ge&6)===0&&(Js=Qe()+500,Xi()))}break;case 13:Ro(function(){var r=qr(t,1);if(r!==null){var i=Kt();Qn(r,t,1,i)}}),F0(t,1)}};u0=function(t){if(t.tag===13){var e=qr(t,134217728);if(e!==null){var n=Kt();Qn(e,t,134217728,n)}F0(t,134217728)}};_E=function(t){if(t.tag===13){var e=Ri(t),n=qr(t,e);if(n!==null){var r=Kt();Qn(n,t,e,r)}F0(t,e)}};CE=function(){return ke};TE=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};vm=function(t,e,n){switch(e){case"input":if(fm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yd(r);if(!i)throw Error($(90));iE(r),fm(r,i)}}}break;case"textarea":sE(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};hE=$0;pE=Ro;var qP={usingClientEntryPoint:!1,Events:[Su,bs,yd,fE,dE,$0]},Ga={findFiberByHostInstance:go,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},KP={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ri.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||WP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{hd=xc.inject(KP),hr=xc}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qP;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!V0(e))throw Error($(200));return VP(t,e,null,n)};Cn.createRoot=function(t,e){if(!V0(t))throw Error($(299));var n=!1,r="",i=Yk;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=j0(t,1,!1,null,null,n,!1,r,i),t[Hr]=e.current,Ll(t.nodeType===8?t.parentNode:t),new B0(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=yE(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Ro(t)};Cn.hydrate=function(t,e,n){if(!Cd(e))throw Error($(200));return Td(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!V0(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Yk;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Xk(e,null,t,1,n!=null?n:null,i,!1,o,s),t[Hr]=e.current,Ll(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _d(e)};Cn.render=function(t,e,n){if(!Cd(e))throw Error($(200));return Td(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Cd(t))throw Error($(40));return t._reactRootContainer?(Ro(function(){Td(null,null,t,!1,function(){t._reactRootContainer=null,t[Hr]=null})}),!0):!1};Cn.unstable_batchedUpdates=$0;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cd(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return Td(t,e,n,!1,r)};Cn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Cn})(dd);const _c=BS(dd.exports);var aw=dd.exports;t1.createRoot=aw.createRoot,t1.hydrateRoot=aw.hydrateRoot;/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gl(){return Gl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gl.apply(this,arguments)}var ki;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ki||(ki={}));const lw="popstate";function GP(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Qm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xl(i)}return QP(e,n,null,t)}function XP(){return Math.random().toString(36).substr(2,8)}function uw(t){return{usr:t.state,key:t.key}}function Qm(t,e,n,r){return n===void 0&&(n=null),Gl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ka(e):e,{state:n,key:e&&e.key||r||XP()})}function Xl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ka(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function YP(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:"unknown://unknown",n=typeof t=="string"?t:Xl(t);return new URL(n,e)}function QP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ki.Pop,l=null;function u(){a=ki.Pop,l&&l({action:a,location:p.location})}function f(y,w){a=ki.Push;let v=Qm(p.location,y,w);n&&n(v,y);let c=uw(v),d=p.createHref(v);try{s.pushState(c,"",d)}catch{i.location.assign(d)}o&&l&&l({action:a,location:p.location})}function h(y,w){a=ki.Replace;let v=Qm(p.location,y,w);n&&n(v,y);let c=uw(v),d=p.createHref(v);s.replaceState(c,"",d),o&&l&&l({action:a,location:p.location})}let p={get action(){return a},get location(){return t(i,s)},listen(y){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lw,u),l=y,()=>{i.removeEventListener(lw,u),l=null}},createHref(y){return e(i,y)},encodeLocation(y){let w=YP(Xl(y));return Gl({},y,{pathname:w.pathname,search:w.search,hash:w.hash})},push:f,replace:h,go(y){return s.go(y)}};return p}var cw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(cw||(cw={}));function JP(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ka(e):e,i=Jk(r.pathname||"/",n);if(i==null)return null;let o=Qk(t);ZP(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=lO(o[a],fO(i));return s}function Qk(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(pt(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let a=Ni([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(pt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),Qk(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:sO(a,i.index),routesMeta:l})}),e}function ZP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:aO(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const eO=/^:\w+$/,tO=3,nO=2,rO=1,iO=10,oO=-2,fw=t=>t==="*";function sO(t,e){let n=t.split("/"),r=n.length;return n.some(fw)&&(r+=oO),e&&(r+=nO),n.filter(i=>!fw(i)).reduce((i,o)=>i+(eO.test(o)?tO:o===""?rO:iO),r)}function aO(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function lO(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",f=uO({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!f)return null;Object.assign(r,f.params);let h=a.route;o.push({params:r,pathname:Ni([i,f.pathname]),pathnameBase:mO(Ni([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Ni([i,f.pathnameBase]))}return o}function uO(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=cO(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,h)=>{if(f==="*"){let p=a[h]||"";s=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[f]=dO(a[h]||"",f),u},{}),pathname:o,pathnameBase:s,pattern:t}}function cO(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),W0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function fO(t){try{return decodeURI(t)}catch(e){return W0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function dO(t,e){try{return decodeURIComponent(t)}catch(n){return W0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Jk(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function W0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hO(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ka(t):t;return{pathname:n?n.startsWith("/")?n:pO(n,e):e,search:gO(r),hash:yO(i)}}function pO(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ex(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ka(t):(i=Gl({},t),pt(!i.pathname||!i.pathname.includes("?"),xp("?","pathname","search",i)),pt(!i.pathname||!i.pathname.includes("#"),xp("#","pathname","hash",i)),pt(!i.search||!i.search.includes("#"),xp("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let h=e.length-1;if(s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=hO(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const Ni=t=>t.join("/").replace(/\/\/+/g,"/"),mO=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),gO=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,yO=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class vO{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function wO(t){return t instanceof vO}const bO=new Set(["POST","PUT","PATCH","DELETE"]);[...bO];var Id={exports:{}},zd={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SO=I.exports,EO=Symbol.for("react.element"),kO=Symbol.for("react.fragment"),xO=Object.prototype.hasOwnProperty,_O=SO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CO={key:!0,ref:!0,__self:!0,__source:!0};function tx(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)xO.call(e,r)&&!CO.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:EO,type:t,key:o,ref:s,props:i,_owner:_O.current}}zd.Fragment=kO;zd.jsx=tx;zd.jsxs=tx;(function(t){t.exports=zd})(Id);const nx=Id.exports.Fragment,ee=Id.exports.jsx,Ao=Id.exports.jsxs,TO=Object.freeze(Object.defineProperty({__proto__:null,Fragment:nx,jsx:ee,jsxs:Ao},Symbol.toStringTag,{value:"Module"}));/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jm(){return Jm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jm.apply(this,arguments)}function IO(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const zO=typeof Object.is=="function"?Object.is:IO,{useState:PO,useEffect:OO,useLayoutEffect:RO,useDebugValue:AO}=Hs;function NO(t,e,n){const r=e(),[{inst:i},o]=PO({inst:{value:r,getSnapshot:e}});return RO(()=>{i.value=r,i.getSnapshot=e,_p(i)&&o({inst:i})},[t,r,e]),OO(()=>(_p(i)&&o({inst:i}),t(()=>{_p(i)&&o({inst:i})})),[t]),AO(r),r}function _p(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!zO(n,r)}catch{return!0}}function UO(t,e,n){return e()}const $O=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DO=!$O,MO=DO?UO:NO;"useSyncExternalStore"in Hs&&(t=>t.useSyncExternalStore)(Hs);const LO=I.exports.createContext(null),jO=I.exports.createContext(null),H0=I.exports.createContext(null),q0=I.exports.createContext(null),Pd=I.exports.createContext(null),ku=I.exports.createContext({outlet:null,matches:[]}),rx=I.exports.createContext(null);function FO(t,e){let{relative:n}=e===void 0?{}:e;xu()||pt(!1);let{basename:r,navigator:i}=I.exports.useContext(q0),{hash:o,pathname:s,search:a}=K0(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Ni([r,s])),i.createHref({pathname:l,search:a,hash:o})}function xu(){return I.exports.useContext(Pd)!=null}function _u(){return xu()||pt(!1),I.exports.useContext(Pd).location}function BO(){xu()||pt(!1);let{basename:t,navigator:e}=I.exports.useContext(q0),{matches:n}=I.exports.useContext(ku),{pathname:r}=_u(),i=JSON.stringify(Zk(n).map(a=>a.pathnameBase)),o=I.exports.useRef(!1);return I.exports.useEffect(()=>{o.current=!0}),I.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=ex(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Ni([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function K0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.exports.useContext(ku),{pathname:i}=_u(),o=JSON.stringify(Zk(r).map(s=>s.pathnameBase));return I.exports.useMemo(()=>ex(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function VO(t,e){xu()||pt(!1);let n=I.exports.useContext(H0),{matches:r}=I.exports.useContext(ku),i=r[r.length-1],o=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let a=_u(),l;if(e){var u;let w=typeof e=="string"?ka(e):e;s==="/"||((u=w.pathname)==null?void 0:u.startsWith(s))||pt(!1),l=w}else l=a;let f=l.pathname||"/",h=s==="/"?f:f.slice(s.length)||"/",p=JP(t,{pathname:h}),y=KO(p&&p.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Ni([s,w.pathname]),pathnameBase:w.pathnameBase==="/"?s:Ni([s,w.pathnameBase])})),r,n||void 0);return e&&y?ee(Pd.Provider,{value:{location:Jm({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:ki.Pop},children:y}):y}function WO(){let t=XO(),e=wO(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return Ao(nx,{children:[ee("h2",{children:"Unhandled Thrown Error!"}),ee("h3",{style:{fontStyle:"italic"},children:e}),n?ee("pre",{style:i,children:n}):null,ee("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),Ao("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",ee("code",{style:o,children:"errorElement"})," props on\xA0",ee("code",{style:o,children:"<Route>"})]})]})}class HO extends I.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ee(rx.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function qO(t){let{routeContext:e,match:n,children:r}=t,i=I.exports.useContext(LO);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),ee(ku.Provider,{value:e,children:r})}function KO(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||pt(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||ee(WO,{}):null,f=()=>ee(qO,{match:s,routeContext:{outlet:o,matches:e.concat(r.slice(0,a+1))},children:l?u:s.route.element!==void 0?s.route.element:o});return n&&(s.route.errorElement||a===0)?ee(HO,{location:n.location,component:u,error:l,children:f()}):f()},null)}var dw;(function(t){t.UseRevalidator="useRevalidator"})(dw||(dw={}));var Zm;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Zm||(Zm={}));function GO(t){let e=I.exports.useContext(H0);return e||pt(!1),e}function XO(){var t;let e=I.exports.useContext(rx),n=GO(Zm.UseRouteError),r=I.exports.useContext(ku),i=r.matches[r.matches.length-1];return e||(r||pt(!1),i.route.id||pt(!1),(t=n.errors)==null?void 0:t[i.route.id])}function YO(t){pt(!1)}function QO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ki.Pop,navigator:o,static:s=!1}=t;xu()&&pt(!1);let a=e.replace(/^\/*/,"/"),l=I.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=ka(r));let{pathname:u="/",search:f="",hash:h="",state:p=null,key:y="default"}=r,w=I.exports.useMemo(()=>{let v=Jk(u,a);return v==null?null:{pathname:v,search:f,hash:h,state:p,key:y}},[a,u,f,h,p,y]);return w==null?null:ee(q0.Provider,{value:l,children:ee(Pd.Provider,{children:n,value:{location:w,navigationType:i}})})}function $6(t){let{children:e,location:n}=t,r=I.exports.useContext(jO),i=r&&!e?r.router.routes:eg(e);return VO(i,n)}var hw;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(hw||(hw={}));new Promise(()=>{});function eg(t,e){e===void 0&&(e=[]);let n=[];return I.exports.Children.forEach(t,(r,i)=>{if(!I.exports.isValidElement(r))return;if(r.type===I.exports.Fragment){n.push.apply(n,eg(r.props.children,e));return}r.type!==YO&&pt(!1),!r.props.index||!r.props.children||pt(!1);let o=[...e,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=eg(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ix(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function JO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ZO(t,e){return t.button===0&&(!e||e==="_self")&&!JO(t)}const eR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],tR=["aria-current","caseSensitive","className","end","style","to","children"];function D6(t){let{basename:e,children:n,window:r}=t,i=I.exports.useRef();i.current==null&&(i.current=GP({window:r,v5Compat:!0}));let o=i.current,[s,a]=I.exports.useState({action:o.action,location:o.location});return I.exports.useLayoutEffect(()=>o.listen(a),[o]),ee(QO,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o})}const nR=I.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:f}=e,h=ix(e,eR),p=FO(u,{relative:i}),y=rR(u,{replace:s,state:a,target:l,preventScrollReset:f,relative:i});function w(v){r&&r(v),v.defaultPrevented||y(v)}return ee("a",{...h,href:p,onClick:o?r:w,ref:n,target:l})}),M6=I.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=e,f=ix(e,tR),h=K0(l,{relative:f.relative}),p=_u(),y=I.exports.useContext(H0),w=h.pathname,v=p.pathname,c=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(v=v.toLowerCase(),c=c?c.toLowerCase():null,w=w.toLowerCase());let d=v===w||!s&&v.startsWith(w)&&v.charAt(w.length)==="/",m=c!=null&&(c===w||!s&&c.startsWith(w)&&c.charAt(w.length)==="/"),g=d?r:void 0,b;typeof o=="function"?b=o({isActive:d,isPending:m}):b=[o,d?"active":null,m?"pending":null].filter(Boolean).join(" ");let S=typeof a=="function"?a({isActive:d,isPending:m}):a;return ee(nR,{...f,"aria-current":g,className:b,ref:n,style:S,to:l,children:typeof u=="function"?u({isActive:d,isPending:m}):u})});var pw;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(pw||(pw={}));var mw;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mw||(mw={}));function rR(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=BO(),l=_u(),u=K0(t,{relative:s});return I.exports.useCallback(f=>{if(ZO(f,n)){f.preventDefault();let h=r!==void 0?r:Xl(l)===Xl(u);a(t,{replace:h,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}var iR={},Cp={exports:{}},Tp,gw;function oR(){if(gw)return Tp;gw=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Tp=t,Tp}var Ip,yw;function sR(){if(yw)return Ip;yw=1;var t=oR();function e(){}function n(){}return n.resetWarningCache=e,Ip=function(){function r(s,a,l,u,f,h){if(h!==t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},Ip}var vw;function ox(){return vw||(vw=1,Cp.exports=sR()()),Cp.exports}var sx={exports:{}};(function(t,e){(function(n){t.exports=n(null)})(function n(r){var i=/^\0+/g,o=/[\0\r\f]/g,s=/: */g,a=/zoo|gra/,l=/([,: ])(transform)/g,u=/,+\s*(?![^(]*[)])/g,f=/ +\s*(?![^(]*[)])/g,h=/ *[\0] */g,p=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,w=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,v=/\W+/g,c=/@(k\w+)\s*(\S*)\s*/,d=/::(place)/g,m=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,b=/([[}=:>])\s+/g,S=/(\{[^{]+?);(?=\})/g,E=/\s{2,}/g,k=/([^\(])(:+) */g,_=/[svh]\w+-[tblr]{2}/,C=/\(\s*(.*)\s*\)/g,x=/([\s\S]*?);/g,T=/-self|flex-/g,R=/[^]*?(:[rp][el]a[\w-]+)[^]*/,N=/stretch|:\s*\w+\-(?:conte|avail)/,V=/([^-])(image-set\()/,O="-webkit-",U="-moz-",j="-ms-",P=59,A=125,F=123,Q=40,le=41,Ge=91,it=93,Me=10,Le=13,We=9,Xe=64,je=32,er=38,He=45,Ra=95,Qt=42,mn=44,Ft=58,Cr=39,gn=34,Tt=47,tr=62,Jt=43,Zt=126,Wn=0,nr=12,rr=11,Bt=107,Tr=109,no=115,si=112,Pn=111,Aa=105,ro=99,io=100,tc=112,Vt=1,On=1,Hn=0,yn=1,vn=1,Na=1,nc=0,Ua=0,Qo=0,Jo=[],Zo=[],Rn=0,es=null,Wh=-2,Hh=-1,qh=0,oo=1,$a=2,Kh=3,ai=0,Ir=1,It="",en="",so="";function zr(B,H,X,se,W){for(var be,z,me=0,fe=0,Ze=0,de=0,ot=0,Ce=0,he=0,Wt=0,tn=0,rs=0,nn=0,Pr=0,ic=0,ir=0,ye=0,An=0,is=0,La=0,Te=0,uo=X.length,ja=uo-1,zt="",ie="",Oe="",Ye="",oc="",Xh="";ye<uo;){if(he=X.charCodeAt(ye),ye===ja&&fe+de+Ze+me!==0&&(fe!==0&&(he=fe===Tt?Me:Tt),de=Ze=me=0,uo++,ja++),fe+de+Ze+me===0){if(ye===ja&&(An>0&&(ie=ie.replace(o,"")),ie.trim().length>0)){switch(he){case je:case We:case P:case Le:case Me:break;default:ie+=X.charAt(ye)}he=P}if(is===1)switch(he){case F:case A:case P:case gn:case Cr:case Q:case le:case mn:is=0;case We:case Le:case Me:case je:break;default:for(is=0,Te=ye,ot=he,ye--,he=P;Te<uo;)switch(X.charCodeAt(Te++)){case Me:case Le:case P:++ye,he=ot,Te=uo;break;case Ft:An>0&&(++ye,he=ot);case F:Te=uo}}switch(he){case F:for(ot=(ie=ie.trim()).charCodeAt(0),nn=1,Te=++ye;ye<uo;){switch(he=X.charCodeAt(ye)){case F:nn++;break;case A:nn--;break;case Tt:switch(Ce=X.charCodeAt(ye+1)){case Qt:case Tt:ye=Gh(Ce,ye,ja,X)}break;case Ge:he++;case Q:he++;case gn:case Cr:for(;ye++<ja&&X.charCodeAt(ye)!==he;);}if(nn===0)break;ye++}switch(Oe=X.substring(Te,ye),ot===Wn&&(ot=(ie=ie.replace(i,"").trim()).charCodeAt(0)),ot){case Xe:switch(An>0&&(ie=ie.replace(o,"")),Ce=ie.charCodeAt(1)){case io:case Tr:case no:case He:be=H;break;default:be=Jo}if(Te=(Oe=zr(H,be,Oe,Ce,W+1)).length,Qo>0&&Te===0&&(Te=ie.length),Rn>0&&(be=ts(Jo,ie,La),z=li(Kh,Oe,be,H,On,Vt,Te,Ce,W,se),ie=be.join(""),z!==void 0&&(Te=(Oe=z.trim()).length)===0&&(Ce=0,Oe="")),Te>0)switch(Ce){case no:ie=ie.replace(C,rc);case io:case Tr:case He:Oe=ie+"{"+Oe+"}";break;case Bt:Oe=(ie=ie.replace(c,"$1 $2"+(Ir>0?It:"")))+"{"+Oe+"}",vn===1||vn===2&&ao("@"+Oe,3)?Oe="@"+O+Oe+"@"+Oe:Oe="@"+Oe;break;default:Oe=ie+Oe,se===tc&&(Ye+=Oe,Oe="")}else Oe="";break;default:Oe=zr(H,ts(H,ie,La),Oe,se,W+1)}oc+=Oe,Pr=0,is=0,ir=0,An=0,La=0,ic=0,ie="",Oe="",he=X.charCodeAt(++ye);break;case A:case P:if((Te=(ie=(An>0?ie.replace(o,""):ie).trim()).length)>1)switch(ir===0&&((ot=ie.charCodeAt(0))===He||ot>96&&ot<123)&&(Te=(ie=ie.replace(" ",":")).length),Rn>0&&(z=li(oo,ie,H,B,On,Vt,Ye.length,se,W,se))!==void 0&&(Te=(ie=z.trim()).length)===0&&(ie="\0\0"),ot=ie.charCodeAt(0),Ce=ie.charCodeAt(1),ot){case Wn:break;case Xe:if(Ce===Aa||Ce===ro){Xh+=ie+X.charAt(ye);break}default:if(ie.charCodeAt(Te-1)===Ft)break;Ye+=ns(ie,ot,Ce,ie.charCodeAt(2))}Pr=0,is=0,ir=0,An=0,La=0,ie="",he=X.charCodeAt(++ye)}}switch(he){case Le:case Me:if(fe+de+Ze+me+Ua===0)switch(rs){case le:case Cr:case gn:case Xe:case Zt:case tr:case Qt:case Jt:case Tt:case He:case Ft:case mn:case P:case F:case A:break;default:ir>0&&(is=1)}fe===Tt?fe=0:yn+Pr===0&&se!==Bt&&ie.length>0&&(An=1,ie+="\0"),Rn*ai>0&&li(qh,ie,H,B,On,Vt,Ye.length,se,W,se),Vt=1,On++;break;case P:case A:if(fe+de+Ze+me===0){Vt++;break}default:switch(Vt++,zt=X.charAt(ye),he){case We:case je:if(de+me+fe===0)switch(Wt){case mn:case Ft:case We:case je:zt="";break;default:he!==je&&(zt=" ")}break;case Wn:zt="\\0";break;case nr:zt="\\f";break;case rr:zt="\\v";break;case er:de+fe+me===0&&yn>0&&(La=1,An=1,zt="\f"+zt);break;case 108:if(de+fe+me+Hn===0&&ir>0)switch(ye-ir){case 2:Wt===si&&X.charCodeAt(ye-3)===Ft&&(Hn=Wt);case 8:tn===Pn&&(Hn=tn)}break;case Ft:de+fe+me===0&&(ir=ye);break;case mn:fe+Ze+de+me===0&&(An=1,zt+="\r");break;case gn:case Cr:fe===0&&(de=de===he?0:de===0?he:de);break;case Ge:de+fe+Ze===0&&me++;break;case it:de+fe+Ze===0&&me--;break;case le:de+fe+me===0&&Ze--;break;case Q:if(de+fe+me===0){if(Pr===0)switch(2*Wt+3*tn){case 533:break;default:nn=0,Pr=1}Ze++}break;case Xe:fe+Ze+de+me+ir+ic===0&&(ic=1);break;case Qt:case Tt:if(de+me+Ze>0)break;switch(fe){case 0:switch(2*he+3*X.charCodeAt(ye+1)){case 235:fe=Tt;break;case 220:Te=ye,fe=Qt}break;case Qt:he===Tt&&Wt===Qt&&Te+2!==ye&&(X.charCodeAt(Te+2)===33&&(Ye+=X.substring(Te,ye+1)),zt="",fe=0)}}if(fe===0){if(yn+de+me+ic===0&&se!==Bt&&he!==P)switch(he){case mn:case Zt:case tr:case Jt:case le:case Q:if(Pr===0){switch(Wt){case We:case je:case Me:case Le:zt+="\0";break;default:zt="\0"+zt+(he===mn?"":"\0")}An=1}else switch(he){case Q:ir+7===ye&&Wt===108&&(ir=0),Pr=++nn;break;case le:(Pr=--nn)==0&&(An=1,zt+="\0")}break;case We:case je:switch(Wt){case Wn:case F:case A:case P:case mn:case nr:case We:case je:case Me:case Le:break;default:Pr===0&&(An=1,zt+="\0")}}ie+=zt,he!==je&&he!==We&&(rs=he)}}tn=Wt,Wt=he,ye++}if(Te=Ye.length,Qo>0&&Te===0&&oc.length===0&&H[0].length!==0&&(se!==Tr||H.length===1&&(yn>0?en:so)===H[0])&&(Te=H.join(",").length+2),Te>0){if(be=yn===0&&se!==Bt?function(qv){for(var Or,vt,sc=0,Kv=qv.length,Gv=Array(Kv);sc<Kv;++sc){for(var Yh=qv[sc].split(h),ac="",os=0,Qh=0,Xv=0,Yv=0,Qv=Yh.length;os<Qv;++os)if(!((Qh=(vt=Yh[os]).length)===0&&Qv>1)){if(Xv=ac.charCodeAt(ac.length-1),Yv=vt.charCodeAt(0),Or="",os!==0)switch(Xv){case Qt:case Zt:case tr:case Jt:case je:case Q:break;default:Or=" "}switch(Yv){case er:vt=Or+en;case Zt:case tr:case Jt:case je:case le:case Q:break;case Ge:vt=Or+vt+en;break;case Ft:switch(2*vt.charCodeAt(1)+3*vt.charCodeAt(2)){case 530:if(Na>0){vt=Or+vt.substring(8,Qh-1);break}default:(os<1||Yh[os-1].length<1)&&(vt=Or+en+vt)}break;case mn:Or="";default:Qh>1&&vt.indexOf(":")>0?vt=Or+vt.replace(k,"$1"+en+"$2"):vt=Or+vt+en}ac+=vt}Gv[sc]=ac.replace(o,"").trim()}return Gv}(H):H,Rn>0&&(z=li($a,Ye,be,B,On,Vt,Te,se,W,se))!==void 0&&(Ye=z).length===0)return Xh+Ye+oc;if(Ye=be.join(",")+"{"+Ye+"}",vn*Hn!=0){switch(vn===2&&!ao(Ye,2)&&(Hn=0),Hn){case Pn:Ye=Ye.replace(m,":"+U+"$1")+Ye;break;case si:Ye=Ye.replace(d,"::"+O+"input-$1")+Ye.replace(d,"::"+U+"$1")+Ye.replace(d,":"+j+"input-$1")+Ye}Hn=0}}return Xh+Ye+oc}function ts(B,H,X){var se=H.trim().split(p),W=se,be=se.length,z=B.length;switch(z){case 0:case 1:for(var me=0,fe=z===0?"":B[0]+" ";me<be;++me)W[me]=Da(fe,W[me],X,z).trim();break;default:me=0;var Ze=0;for(W=[];me<be;++me)for(var de=0;de<z;++de)W[Ze++]=Da(B[de]+" ",se[me],X,z).trim()}return W}function Da(B,H,X,se){var W=H,be=W.charCodeAt(0);switch(be<33&&(be=(W=W.trim()).charCodeAt(0)),be){case er:switch(yn+se){case 0:case 1:if(B.trim().length===0)break;default:return W.replace(y,"$1"+B.trim())}break;case Ft:switch(W.charCodeAt(1)){case 103:if(Na>0&&yn>0)return W.replace(w,"$1").replace(y,"$1"+so);break;default:return B.trim()+W.replace(y,"$1"+B.trim())}default:if(X*yn>0&&W.indexOf("\f")>0)return W.replace(y,(B.charCodeAt(0)===Ft?"":"$1")+B.trim())}return B+W}function ns(B,H,X,se){var W,be=0,z=B+";",me=2*H+3*X+4*se;if(me===944)return function(fe){var Ze=fe.length,de=fe.indexOf(":",9)+1,ot=fe.substring(0,de).trim(),Ce=fe.substring(de,Ze-1).trim();switch(fe.charCodeAt(9)*Ir){case 0:break;case He:if(fe.charCodeAt(10)!==110)break;default:for(var he=Ce.split((Ce="",u)),Wt=0,de=0,Ze=he.length;Wt<Ze;de=0,++Wt){for(var tn=he[Wt],rs=tn.split(f);tn=rs[de];){var nn=tn.charCodeAt(0);if(Ir===1&&(nn>Xe&&nn<90||nn>96&&nn<123||nn===Ra||nn===He&&tn.charCodeAt(1)!==He))switch(isNaN(parseFloat(tn))+(tn.indexOf("(")!==-1)){case 1:switch(tn){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:tn+=It}}rs[de++]=tn}Ce+=(Wt===0?"":",")+rs.join(" ")}}return Ce=ot+Ce+";",vn===1||vn===2&&ao(Ce,1)?O+Ce+Ce:Ce}(z);if(vn===0||vn===2&&!ao(z,1))return z;switch(me){case 1015:return z.charCodeAt(10)===97?O+z+z:z;case 951:return z.charCodeAt(3)===116?O+z+z:z;case 963:return z.charCodeAt(5)===110?O+z+z:z;case 1009:if(z.charCodeAt(4)!==100)break;case 969:case 942:return O+z+z;case 978:return O+z+U+z+z;case 1019:case 983:return O+z+U+z+j+z+z;case 883:return z.charCodeAt(8)===He?O+z+z:z.indexOf("image-set(",11)>0?z.replace(V,"$1"+O+"$2")+z:z;case 932:if(z.charCodeAt(4)===He)switch(z.charCodeAt(5)){case 103:return O+"box-"+z.replace("-grow","")+O+z+j+z.replace("grow","positive")+z;case 115:return O+z+j+z.replace("shrink","negative")+z;case 98:return O+z+j+z.replace("basis","preferred-size")+z}return O+z+j+z+z;case 964:return O+z+j+"flex-"+z+z;case 1023:if(z.charCodeAt(8)!==99)break;return W=z.substring(z.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),O+"box-pack"+W+O+z+j+"flex-pack"+W+z;case 1005:return a.test(z)?z.replace(s,":"+O)+z.replace(s,":"+U)+z:z;case 1e3:switch(be=(W=z.substring(13).trim()).indexOf("-")+1,W.charCodeAt(0)+W.charCodeAt(be)){case 226:W=z.replace(_,"tb");break;case 232:W=z.replace(_,"tb-rl");break;case 220:W=z.replace(_,"lr");break;default:return z}return O+z+j+W+z;case 1017:if(z.indexOf("sticky",9)===-1)return z;case 975:switch(be=(z=B).length-10,me=(W=(z.charCodeAt(be)===33?z.substring(0,be):z).substring(B.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|W.charCodeAt(7))){case 203:if(W.charCodeAt(8)<111)break;case 115:z=z.replace(W,O+W)+";"+z;break;case 207:case 102:z=z.replace(W,O+(me>102?"inline-":"")+"box")+";"+z.replace(W,O+W)+";"+z.replace(W,j+W+"box")+";"+z}return z+";";case 938:if(z.charCodeAt(5)===He)switch(z.charCodeAt(6)){case 105:return W=z.replace("-items",""),O+z+O+"box-"+W+j+"flex-"+W+z;case 115:return O+z+j+"flex-item-"+z.replace(T,"")+z;default:return O+z+j+"flex-line-pack"+z.replace("align-content","").replace(T,"")+z}break;case 973:case 989:if(z.charCodeAt(3)!==He||z.charCodeAt(4)===122)break;case 931:case 953:if(N.test(B)===!0)return(W=B.substring(B.indexOf(":")+1)).charCodeAt(0)===115?ns(B.replace("stretch","fill-available"),H,X,se).replace(":fill-available",":stretch"):z.replace(W,O+W)+z.replace(W,U+W.replace("fill-",""))+z;break;case 962:if(z=O+z+(z.charCodeAt(5)===102?j+z:"")+z,X+se===211&&z.charCodeAt(13)===105&&z.indexOf("transform",10)>0)return z.substring(0,z.indexOf(";",27)+1).replace(l,"$1"+O+"$2")+z}return z}function ao(B,H){var X=B.indexOf(H===1?":":"{"),se=B.substring(0,H!==3?X:10),W=B.substring(X+1,B.length-1);return es(H!==2?se:se.replace(R,"$1"),W,H)}function rc(B,H){var X=ns(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return X!==H+";"?X.replace(x," or ($1)").substring(4):"("+H+")"}function li(B,H,X,se,W,be,z,me,fe,Ze){for(var de,ot=0,Ce=H;ot<Rn;++ot)switch(de=Zo[ot].call(lo,B,Ce,X,se,W,be,z,me,fe,Ze)){case void 0:case!1:case!0:case null:break;default:Ce=de}if(Ce!==H)return Ce}function Gh(B,H,X,se){for(var W=H+1;W<X;++W)switch(se.charCodeAt(W)){case Tt:if(B===Qt&&se.charCodeAt(W-1)===Qt&&H+2!==W)return W+1;break;case Me:if(B===Tt)return W+1}return W}function Ma(B){for(var H in B){var X=B[H];switch(H){case"keyframe":Ir=0|X;break;case"global":Na=0|X;break;case"cascade":yn=0|X;break;case"compress":nc=0|X;break;case"semicolon":Ua=0|X;break;case"preserve":Qo=0|X;break;case"prefix":es=null,X?typeof X!="function"?vn=1:(vn=2,es=X):vn=0}}return Ma}function lo(B,H){if(this!==void 0&&this.constructor===lo)return n(B);var X=B,se=X.charCodeAt(0);se<33&&(se=(X=X.trim()).charCodeAt(0)),Ir>0&&(It=X.replace(v,se===Ge?"":"-")),se=1,yn===1?so=X:en=X;var W,be=[so];Rn>0&&(W=li(Hh,H,be,be,On,Vt,0,0,0,0))!==void 0&&typeof W=="string"&&(H=W);var z=zr(Jo,be,H,0,0);return Rn>0&&(W=li(Wh,z,be,be,On,Vt,z.length,0,0,0))!==void 0&&typeof(z=W)!="string"&&(se=0),It="",so="",en="",Hn=0,On=1,Vt=1,nc*se==0?z:z.replace(o,"").replace(g,"").replace(b,"$1").replace(S,"$1").replace(E," ")}return lo.use=function B(H){switch(H){case void 0:case null:Rn=Zo.length=0;break;default:if(typeof H=="function")Zo[Rn++]=H;else if(typeof H=="object")for(var X=0,se=H.length;X<se;++X)B(H[X]);else ai=0|!!H}return B},lo.set=Ma,r!==void 0&&Ma(r),lo})})(sx);const ax=sx.exports;var lx={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){return function(n){var r="/*|*/",i=r+"}";function o(s){if(s)try{n(s+"}")}catch{}}return function(a,l,u,f,h,p,y,w,v,c){switch(a){case 1:if(v===0&&l.charCodeAt(0)===64)return n(l+";"),"";break;case 2:if(w===0)return l+r;break;case 3:switch(w){case 102:case 112:return n(u[0]+l),"";default:return l+(c===0?r:"")}case-2:l.split(i).forEach(o)}}}})})(lx);const aR=lx.exports;var lR={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},G0={exports:{}},xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gt=typeof Symbol=="function"&&Symbol.for,X0=gt?Symbol.for("react.element"):60103,Y0=gt?Symbol.for("react.portal"):60106,Od=gt?Symbol.for("react.fragment"):60107,Rd=gt?Symbol.for("react.strict_mode"):60108,Ad=gt?Symbol.for("react.profiler"):60114,Nd=gt?Symbol.for("react.provider"):60109,Ud=gt?Symbol.for("react.context"):60110,Q0=gt?Symbol.for("react.async_mode"):60111,$d=gt?Symbol.for("react.concurrent_mode"):60111,Dd=gt?Symbol.for("react.forward_ref"):60112,Md=gt?Symbol.for("react.suspense"):60113,uR=gt?Symbol.for("react.suspense_list"):60120,Ld=gt?Symbol.for("react.memo"):60115,jd=gt?Symbol.for("react.lazy"):60116,cR=gt?Symbol.for("react.block"):60121,fR=gt?Symbol.for("react.fundamental"):60117,dR=gt?Symbol.for("react.responder"):60118,hR=gt?Symbol.for("react.scope"):60119;function In(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case X0:switch(t=t.type,t){case Q0:case $d:case Od:case Ad:case Rd:case Md:return t;default:switch(t=t&&t.$$typeof,t){case Ud:case Dd:case jd:case Ld:case Nd:return t;default:return e}}case Y0:return e}}}function ux(t){return In(t)===$d}xe.AsyncMode=Q0;xe.ConcurrentMode=$d;xe.ContextConsumer=Ud;xe.ContextProvider=Nd;xe.Element=X0;xe.ForwardRef=Dd;xe.Fragment=Od;xe.Lazy=jd;xe.Memo=Ld;xe.Portal=Y0;xe.Profiler=Ad;xe.StrictMode=Rd;xe.Suspense=Md;xe.isAsyncMode=function(t){return ux(t)||In(t)===Q0};xe.isConcurrentMode=ux;xe.isContextConsumer=function(t){return In(t)===Ud};xe.isContextProvider=function(t){return In(t)===Nd};xe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===X0};xe.isForwardRef=function(t){return In(t)===Dd};xe.isFragment=function(t){return In(t)===Od};xe.isLazy=function(t){return In(t)===jd};xe.isMemo=function(t){return In(t)===Ld};xe.isPortal=function(t){return In(t)===Y0};xe.isProfiler=function(t){return In(t)===Ad};xe.isStrictMode=function(t){return In(t)===Rd};xe.isSuspense=function(t){return In(t)===Md};xe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Od||t===$d||t===Ad||t===Rd||t===Md||t===uR||typeof t=="object"&&t!==null&&(t.$$typeof===jd||t.$$typeof===Ld||t.$$typeof===Nd||t.$$typeof===Ud||t.$$typeof===Dd||t.$$typeof===fR||t.$$typeof===dR||t.$$typeof===hR||t.$$typeof===cR)};xe.typeOf=In;(function(t){t.exports=xe})(G0);var ww=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function pR(t,e){return!!(t===e||ww(t)&&ww(e))}function mR(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!pR(t[n],e[n]))return!1;return!0}function cx(t,e){e===void 0&&(e=mR);var n,r=[],i,o=!1;function s(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return o&&n===this&&e(a,r)||(i=t.apply(this,a),o=!0,n=this,r=a),i}return s}var L6=ox();function gR(t){var e={};return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var yR=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,vR=gR(function(t){return yR.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function J0(t){return Object.prototype.toString.call(t).slice(8,-1)}function il(t){return J0(t)!=="Object"?!1:t.constructor===Object&&Object.getPrototypeOf(t)===Object.prototype}function bw(t){return J0(t)==="Array"}function Sw(t){return J0(t)==="Symbol"}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Ew(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;for(var r=Array(t),i=0,e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function kw(t,e,n,r){var i=r.propertyIsEnumerable(e)?"enumerable":"nonenumerable";i==="enumerable"&&(t[e]=n),i==="nonenumerable"&&Object.defineProperty(t,e,{value:n,enumerable:!1,writable:!0,configurable:!0})}function fx(t,e,n){if(!il(e))return n&&bw(n)&&n.forEach(function(u){e=u(t,e)}),e;var r={};if(il(t)){var i=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);r=Ew(i,o).reduce(function(u,f){var h=t[f];return(!Sw(f)&&!Object.getOwnPropertyNames(e).includes(f)||Sw(f)&&!Object.getOwnPropertySymbols(e).includes(f))&&kw(u,f,h,t),u},{})}var s=Object.getOwnPropertyNames(e),a=Object.getOwnPropertySymbols(e),l=Ew(s,a).reduce(function(u,f){var h=e[f],p=il(t)?t[f]:void 0;return n&&bw(n)&&n.forEach(function(y){h=y(p,h)}),p!==void 0&&il(h)&&(h=fx(p,h,n)),kw(u,f,h,e),u},r);return l}function wR(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=null,i=t;return il(t)&&t.extensions&&Object.keys(t).length===1&&(i={},r=t.extensions),e.reduce(function(o,s){return fx(o,s,r)},i)}var xw=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},dx=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xr=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},bR=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Jn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cu=function(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},SR=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(t,r)||(n[r]=t[r]);return n},Zs=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t},Z0=function(t){return(typeof t>"u"?"undefined":dx(t))==="object"&&t.constructor===Object},Uf=Object.freeze([]),Sl=Object.freeze({});function Gr(t){return typeof t=="function"}function ey(t){return t.displayName||t.name||"Component"}function ER(t){return typeof t=="function"&&!(t.prototype&&t.prototype.isReactComponent)}function Tu(t){return t&&typeof t.styledComponentId=="string"}var Yl=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Fd="data-styled-version",kR="data-styled-streamed",No=typeof window<"u"&&"HTMLElement"in window,hx=typeof SC_DISABLE_SPEEDY=="boolean"&&SC_DISABLE_SPEEDY||typeof process<"u"&&({}.REACT_APP_SC_DISABLE_SPEEDY||{}.SC_DISABLE_SPEEDY)||!1,xR={},Sr=function(t){Cu(e,t);function e(n){xr(this,e);for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var s,s=Zs(this,t.call(this,"An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#"+n+" for more information."+(i.length>0?" Additional arguments: "+i.join(", "):"")));return Zs(s)}return e}(Error),_R=/^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,CR=function(t){var e=""+(t||""),n=[];return e.replace(_R,function(r,i,o){return n.push({componentId:i,matchIndex:o}),r}),n.map(function(r,i){var o=r.componentId,s=r.matchIndex,a=n[i+1],l=a?e.slice(s,a.matchIndex):e.slice(s);return{componentId:o,cssFromDOM:l}})},TR=/^\s*\/\/.*$/gm,px=new ax({global:!1,cascade:!0,keyframe:!1,prefix:!1,compress:!1,semicolon:!0}),mx=new ax({global:!1,cascade:!0,keyframe:!1,prefix:!0,compress:!1,semicolon:!1}),tg=[],gx=function(e){if(e===-2){var n=tg;return tg=[],n}},yx=aR(function(t){tg.push(t)}),vx=void 0,Ds=void 0,wx=void 0,IR=function(e,n,r){return n>0&&r.slice(0,n).indexOf(Ds)!==-1&&r.slice(n-Ds.length,n)!==Ds?"."+vx:e},zR=function(e,n,r){e===2&&r.length&&r[0].lastIndexOf(Ds)>0&&(r[0]=r[0].replace(wx,IR))};mx.use([zR,yx,gx]);px.use([yx,gx]);var PR=function(e){return px("",e)};function ty(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"&",i=t.join("").replace(TR,""),o=e&&n?n+" "+e+" { "+i+" }":i;return vx=r,Ds=e,wx=new RegExp("\\"+Ds+"\\b","g"),mx(n||!e?"":e,o)}var ny=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ry=function(e,n,r){if(r){var i=e[n]||(e[n]=Object.create(null));i[r]=!0}},$f=function(e,n){e[n]=Object.create(null)},iy=function(e){return function(n,r){return e[n]!==void 0&&e[n][r]}},bx=function(e){var n="";for(var r in e)n+=Object.keys(e[r]).join(" ")+" ";return n.trim()},OR=function(e){var n=Object.create(null);for(var r in e)n[r]=Jn({},e[r]);return n},zp=function(e){if(e.sheet)return e.sheet;for(var n=e.ownerDocument.styleSheets.length,r=0;r<n;r+=1){var i=e.ownerDocument.styleSheets[r];if(i.ownerNode===e)return i}throw new Sr(10)},RR=function(e,n,r){if(!n)return!1;var i=e.cssRules.length;try{e.insertRule(n,r<=i?r:i)}catch{return!1}return!0},AR=function(e,n,r){for(var i=n-r,o=n;o>i;o-=1)e.deleteRule(o)},oy=function(e){return`
/* sc-component-id: `+e+` */
`},Pp=function(e,n){for(var r=0,i=0;i<=n;i+=1)r+=e[i];return r},NR=function(e,n,r){var i=document;e?i=e.ownerDocument:n&&(i=n.ownerDocument);var o=i.createElement("style");o.setAttribute(Yl,""),o.setAttribute(Fd,"4.4.1");var s=ny();if(s&&o.setAttribute("nonce",s),o.appendChild(i.createTextNode("")),e&&!n)e.appendChild(o);else{if(!n||!e||!n.parentNode)throw new Sr(6);n.parentNode.insertBefore(o,r?n:n.nextSibling)}return o},sy=function(e,n){return function(r){var i=ny(),o=[i&&'nonce="'+i+'"',Yl+'="'+bx(n)+'"',Fd+'="4.4.1"',r],s=o.filter(Boolean).join(" ");return"<style "+s+">"+e()+"</style>"}},ay=function(e,n){return function(){var r,i=(r={},r[Yl]=bx(n),r[Fd]="4.4.1",r),o=ny();return o&&(i.nonce=o),ee("style",{...i,dangerouslySetInnerHTML:{__html:e()}})}},ly=function(e){return function(){return Object.keys(e)}},UR=function(e,n){var r=Object.create(null),i=Object.create(null),o=[],s=n!==void 0,a=!1,l=function(y){var w=i[y];return w!==void 0?w:(i[y]=o.length,o.push(0),$f(r,y),i[y])},u=function(y,w,v){for(var c=l(y),d=zp(e),m=Pp(o,c),g=0,b=[],S=w.length,E=0;E<S;E+=1){var k=w[E],_=s;_&&k.indexOf("@import")!==-1?b.push(k):RR(d,k,m+g)&&(_=!1,g+=1)}s&&b.length>0&&(a=!0,n().insertRules(y+"-import",b)),o[c]+=g,ry(r,y,v)},f=function(y){var w=i[y];if(w!==void 0&&e.isConnected!==!1){var v=o[w],c=zp(e),d=Pp(o,w)-1;AR(c,d,v),o[w]=0,$f(r,y),s&&a&&n().removeRules(y+"-import")}},h=function(){var y=zp(e),w=y.cssRules,v="";for(var c in i){v+=oy(c);for(var d=i[c],m=Pp(o,d),g=o[d],b=m-g;b<m;b+=1){var S=w[b];S!==void 0&&(v+=S.cssText)}}return v};return{clone:function(){throw new Sr(5)},css:h,getIds:ly(i),hasNameForId:iy(r),insertMarker:l,insertRules:u,removeRules:f,sealed:!1,styleTag:e,toElement:ay(h,r),toHTML:sy(h,r)}},_w=function(e,n){return e.createTextNode(oy(n))},$R=function(e,n){var r=Object.create(null),i=Object.create(null),o=n!==void 0,s=!1,a=function(p){var y=i[p];return y!==void 0?y:(i[p]=_w(e.ownerDocument,p),e.appendChild(i[p]),r[p]=Object.create(null),i[p])},l=function(p,y,w){for(var v=a(p),c=[],d=y.length,m=0;m<d;m+=1){var g=y[m],b=o;if(b&&g.indexOf("@import")!==-1)c.push(g);else{b=!1;var S=m===d-1?"":" ";v.appendData(""+g+S)}}ry(r,p,w),o&&c.length>0&&(s=!0,n().insertRules(p+"-import",c))},u=function(p){var y=i[p];if(y!==void 0){var w=_w(e.ownerDocument,p);e.replaceChild(w,y),i[p]=w,$f(r,p),o&&s&&n().removeRules(p+"-import")}},f=function(){var p="";for(var y in i)p+=i[y].data;return p};return{clone:function(){throw new Sr(5)},css:f,getIds:ly(i),hasNameForId:iy(r),insertMarker:a,insertRules:l,removeRules:u,sealed:!1,styleTag:e,toElement:ay(f,r),toHTML:sy(f,r)}},DR=function t(e,n){var r=e===void 0?Object.create(null):e,i=n===void 0?Object.create(null):n,o=function(p){var y=i[p];return y!==void 0?y:i[p]=[""]},s=function(p,y,w){var v=o(p);v[0]+=y.join(" "),ry(r,p,w)},a=function(p){var y=i[p];y!==void 0&&(y[0]="",$f(r,p))},l=function(){var p="";for(var y in i){var w=i[y][0];w&&(p+=oy(y)+w)}return p},u=function(){var p=OR(r),y=Object.create(null);for(var w in i)y[w]=[i[w][0]];return t(p,y)},f={clone:u,css:l,getIds:ly(i),hasNameForId:iy(r),insertMarker:o,insertRules:s,removeRules:a,sealed:!1,styleTag:null,toElement:ay(l,r),toHTML:sy(l,r)};return f},Cw=function(e,n,r,i,o){if(No&&!r){var s=NR(e,n,i);return hx?$R(s,o):UR(s,o)}return DR()},MR=function(e,n,r){for(var i=0,o=r.length;i<o;i+=1){var s=r[i],a=s.componentId,l=s.cssFromDOM,u=PR(l);e.insertRules(a,u)}for(var f=0,h=n.length;f<h;f+=1){var p=n[f];p.parentNode&&p.parentNode.removeChild(p)}},LR=/\s+/,Df=void 0;No?Df=hx?40:1e3:Df=-1;var Tw=0,Op=void 0,Xr=function(){function t(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:No?document.head:null,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;xr(this,t),this.getImportRuleTag=function(){var i=e.importRuleTag;if(i!==void 0)return i;var o=e.tags[0],s=!0;return e.importRuleTag=Cw(e.target,o?o.styleTag:null,e.forceServer,s)},Tw+=1,this.id=Tw,this.forceServer=r,this.target=r?null:n,this.tagMap={},this.deferred={},this.rehydratedNames={},this.ignoreRehydratedNames={},this.tags=[],this.capacity=1,this.clones=[]}return t.prototype.rehydrate=function(){if(!No||this.forceServer)return this;var n=[],r=[],i=!1,o=document.querySelectorAll("style["+Yl+"]["+Fd+'="4.4.1"]'),s=o.length;if(!s)return this;for(var a=0;a<s;a+=1){var l=o[a];i||(i=!!l.getAttribute(kR));for(var u=(l.getAttribute(Yl)||"").trim().split(LR),f=u.length,h=0,p;h<f;h+=1)p=u[h],this.rehydratedNames[p]=!0;r.push.apply(r,CR(l.textContent)),n.push(l)}var y=r.length;if(!y)return this;var w=this.makeTag(null);MR(w,n,r),this.capacity=Math.max(1,Df-y),this.tags.push(w);for(var v=0;v<y;v+=1)this.tagMap[r[v].componentId]=w;return this},t.reset=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;Op=new t(void 0,n).rehydrate()},t.prototype.clone=function(){var n=new t(this.target,this.forceServer);return this.clones.push(n),n.tags=this.tags.map(function(r){for(var i=r.getIds(),o=r.clone(),s=0;s<i.length;s+=1)n.tagMap[i[s]]=o;return o}),n.rehydratedNames=Jn({},this.rehydratedNames),n.deferred=Jn({},this.deferred),n},t.prototype.sealAllTags=function(){this.capacity=1,this.tags.forEach(function(n){n.sealed=!0})},t.prototype.makeTag=function(n){var r=n?n.styleTag:null,i=!1;return Cw(this.target,r,this.forceServer,i,this.getImportRuleTag)},t.prototype.getTagForId=function(n){var r=this.tagMap[n];if(r!==void 0&&!r.sealed)return r;var i=this.tags[this.tags.length-1];return this.capacity-=1,this.capacity===0&&(this.capacity=Df,i=this.makeTag(i),this.tags.push(i)),this.tagMap[n]=i},t.prototype.hasId=function(n){return this.tagMap[n]!==void 0},t.prototype.hasNameForId=function(n,r){if(this.ignoreRehydratedNames[n]===void 0&&this.rehydratedNames[r])return!0;var i=this.tagMap[n];return i!==void 0&&i.hasNameForId(n,r)},t.prototype.deferredInject=function(n,r){if(this.tagMap[n]===void 0){for(var i=this.clones,o=0;o<i.length;o+=1)i[o].deferredInject(n,r);this.getTagForId(n).insertMarker(n),this.deferred[n]=r}},t.prototype.inject=function(n,r,i){for(var o=this.clones,s=0;s<o.length;s+=1)o[s].inject(n,r,i);var a=this.getTagForId(n);if(this.deferred[n]!==void 0){var l=this.deferred[n].concat(r);a.insertRules(n,l,i),this.deferred[n]=void 0}else a.insertRules(n,r,i)},t.prototype.remove=function(n){var r=this.tagMap[n];if(r!==void 0){for(var i=this.clones,o=0;o<i.length;o+=1)i[o].remove(n);r.removeRules(n),this.ignoreRehydratedNames[n]=!0,this.deferred[n]=void 0}},t.prototype.toHTML=function(){return this.tags.map(function(n){return n.toHTML()}).join("")},t.prototype.toReactElements=function(){var n=this.id;return this.tags.map(function(r,i){var o="sc-"+n+"-"+i;return I.exports.cloneElement(r.toElement(),{key:o})})},bR(t,null,[{key:"master",get:function(){return Op||(Op=new t().rehydrate())}},{key:"instance",get:function(){return t.master}}]),t}(),Sx=function(){function t(e,n){var r=this;xr(this,t),this.inject=function(i){i.hasNameForId(r.id,r.name)||i.inject(r.id,r.rules,r.name)},this.toString=function(){throw new Sr(12,String(r.name))},this.name=e,this.rules=n,this.id="sc-keyframes-"+e}return t.prototype.getName=function(){return this.name},t}(),jR=/([A-Z])/g,FR=/^ms-/;function Iw(t){return t.replace(jR,"-$1").toLowerCase().replace(FR,"-ms-")}function BR(t,e){return e==null||typeof e=="boolean"||e===""?"":typeof e=="number"&&e!==0&&!(t in lR)?e+"px":String(e).trim()}var Ex=function(e){return e==null||e===!1||e===""},VR=function t(e,n){var r=[],i=Object.keys(e);return i.forEach(function(o){if(!Ex(e[o])){if(Z0(e[o]))return r.push.apply(r,t(e[o],o)),r;if(Gr(e[o]))return r.push(Iw(o)+":",e[o],";"),r;r.push(Iw(o)+": "+BR(o,e[o])+";")}return r}),n?[n+" {"].concat(r,["}"]):r};function ea(t,e,n){if(Array.isArray(t)){for(var r=[],i=0,o=t.length,s;i<o;i+=1)s=ea(t[i],e,n),s!==null&&(Array.isArray(s)?r.push.apply(r,s):r.push(s));return r}if(Ex(t))return null;if(Tu(t))return"."+t.styledComponentId;if(Gr(t))if(ER(t)&&e){var a=t(e);return ea(a,e,n)}else return t;return t instanceof Sx?n?(t.inject(n),t.getName()):t:Z0(t)?VR(t):t.toString()}function Bd(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Gr(t)||Z0(t)?ea(xw(Uf,[t].concat(n))):ea(xw(t,n))}function ng(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Sl;if(!G0.exports.isValidElementType(e))throw new Sr(1,String(e));var r=function(){return t(e,n,Bd.apply(void 0,arguments))};return r.withConfig=function(i){return ng(t,e,Jn({},n,i))},r.attrs=function(i){return ng(t,e,Jn({},n,{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r}function uy(t){for(var e=t.length|0,n=e|0,r=0,i;e>=4;)i=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),i^=i>>>24,i=1540483477*(i&65535)+((1540483477*(i>>>16)&65535)<<16),n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)^i,e-=4,++r;switch(e){case 3:n^=(t.charCodeAt(r+2)&255)<<16;case 2:n^=(t.charCodeAt(r+1)&255)<<8;case 1:n^=t.charCodeAt(r)&255,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16)}return n^=n>>>13,n=1540483477*(n&65535)+((1540483477*(n>>>16)&65535)<<16),(n^n>>>15)>>>0}var Cc=52,zw=function(e){return String.fromCharCode(e+(e>25?39:97))};function kx(t){var e="",n=void 0;for(n=t;n>Cc;n=Math.floor(n/Cc))e=zw(n%Cc)+e;return zw(n%Cc)+e}function WR(t){for(var e in t)if(Gr(t[e]))return!0;return!1}function cy(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(Array.isArray(r)&&!cy(r,e))return!1;if(Gr(r)&&!Tu(r))return!1}return!e.some(function(i){return Gr(i)||WR(i)})}var Pw=function(e){return kx(uy(e))},Ow=function(){function t(e,n,r){xr(this,t),this.rules=e,this.isStatic=cy(e,n),this.componentId=r,Xr.master.hasId(r)||Xr.master.deferredInject(r,[])}return t.prototype.generateAndInjectStyles=function(n,r){var i=this.isStatic,o=this.componentId,s=this.lastClassName;if(No&&i&&typeof s=="string"&&r.hasNameForId(o,s))return s;var a=ea(this.rules,n,r),l=Pw(this.componentId+a.join(""));return r.hasNameForId(o,l)||r.inject(this.componentId,ty(a,"."+l,void 0,o),l),this.lastClassName=l,l},t.generateName=function(n){return Pw(n)},t}(),fy=function(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Sl,r=n?t.theme===n.theme:!1,i=t.theme&&!r?t.theme:e||n.theme;return i},HR=/[[\].#*$><+~=|^:(),"'`-]+/g,qR=/(^-|-$)/g;function rg(t){return t.replace(HR,"-").replace(qR,"")}function Mf(t){return typeof t=="string"&&!0}function KR(t){return Mf(t)?"styled."+t:"Styled("+ey(t)+")"}var Rp,Rw={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},GR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Aw=(Rp={},Rp[G0.exports.ForwardRef]={$$typeof:!0,render:!0},Rp),XR=Object.defineProperty,YR=Object.getOwnPropertyNames,Nw=Object.getOwnPropertySymbols,QR=Nw===void 0?function(){return[]}:Nw,JR=Object.getOwnPropertyDescriptor,ZR=Object.getPrototypeOf,e2=Object.prototype,t2=Array.prototype;function dy(t,e,n){if(typeof e!="string"){var r=ZR(e);r&&r!==e2&&dy(t,r,n);for(var i=t2.concat(YR(e),QR(e)),o=Aw[t.$$typeof]||Rw,s=Aw[e.$$typeof]||Rw,a=i.length,l=void 0,u=void 0;a--;)if(u=i[a],!GR[u]&&!(n&&n[u])&&!(s&&s[u])&&!(o&&o[u])&&(l=JR(e,u),l))try{XR(t,u,l)}catch{}return t}return t}function n2(t){return!!(t&&t.prototype&&t.prototype.isReactComponent)}var Lf=I.exports.createContext(),Vd=Lf.Consumer,r2=function(t){Cu(e,t);function e(n){xr(this,e);var r=Zs(this,t.call(this,n));return r.getContext=cx(r.getContext.bind(r)),r.renderInner=r.renderInner.bind(r),r}return e.prototype.render=function(){return this.props.children?ee(Lf.Consumer,{children:this.renderInner}):null},e.prototype.renderInner=function(r){var i=this.getContext(this.props.theme,r);return ee(Lf.Provider,{value:i,children:this.props.children})},e.prototype.getTheme=function(r,i){if(Gr(r)){var o=r(i);return o}if(r===null||Array.isArray(r)||(typeof r>"u"?"undefined":dx(r))!=="object")throw new Sr(8);return Jn({},i,r)},e.prototype.getContext=function(r,i){return this.getTheme(r,i)},e}(I.exports.Component),i2=function(){function t(){xr(this,t),this.masterSheet=Xr.master,this.instance=this.masterSheet.clone(),this.sealed=!1}return t.prototype.seal=function(){if(!this.sealed){var n=this.masterSheet.clones.indexOf(this.instance);this.masterSheet.clones.splice(n,1),this.sealed=!0}},t.prototype.collectStyles=function(n){if(this.sealed)throw new Sr(2);return ee(xx,{sheet:this.instance,children:n})},t.prototype.getStyleTags=function(){return this.seal(),this.instance.toHTML()},t.prototype.getStyleElement=function(){return this.seal(),this.instance.toReactElements()},t.prototype.interleaveWithNodeStream=function(n){throw new Sr(3)},t}(),hy=I.exports.createContext(),py=hy.Consumer,xx=function(t){Cu(e,t);function e(n){xr(this,e);var r=Zs(this,t.call(this,n));return r.getContext=cx(r.getContext),r}return e.prototype.getContext=function(r,i){if(r)return r;if(i)return new Xr(i);throw new Sr(4)},e.prototype.render=function(){var r=this.props,i=r.children,o=r.sheet,s=r.target;return ee(hy.Provider,{value:this.getContext(o,s),children:i})},e}(I.exports.Component),Uw={};function o2(t,e,n){var r=typeof e!="string"?"sc":rg(e),i=(Uw[r]||0)+1;Uw[r]=i;var o=r+"-"+t.generateName(r+i);return n?n+"-"+o:o}var s2=function(t){Cu(e,t);function e(){xr(this,e);var n=Zs(this,t.call(this));return n.attrs={},n.renderOuter=n.renderOuter.bind(n),n.renderInner=n.renderInner.bind(n),n}return e.prototype.render=function(){return ee(py,{children:this.renderOuter})},e.prototype.renderOuter=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Xr.master;return this.styleSheet=r,this.props.forwardedComponent.componentStyle.isStatic?this.renderInner():ee(Vd,{children:this.renderInner})},e.prototype.renderInner=function(r){var i=this.props.forwardedComponent,o=i.componentStyle,s=i.defaultProps;i.displayName;var a=i.foldedComponentIds,l=i.styledComponentId,u=i.target,f=void 0;o.isStatic?f=this.generateAndInjectStyles(Sl,this.props):f=this.generateAndInjectStyles(fy(this.props,r,s)||Sl,this.props);var h=this.props.as||this.attrs.as||u,p=Mf(h),y={},w=Jn({},this.props,this.attrs),v=void 0;for(v in w)v==="forwardedComponent"||v==="as"||(v==="forwardedRef"?y.ref=w[v]:v==="forwardedAs"?y.as=w[v]:(!p||vR(v))&&(y[v]=w[v]));return this.props.style&&this.attrs.style&&(y.style=Jn({},this.attrs.style,this.props.style)),y.className=Array.prototype.concat(a,l,f!==l?f:null,this.props.className,this.attrs.className).filter(Boolean).join(" "),I.exports.createElement(h,y)},e.prototype.buildExecutionContext=function(r,i,o){var s=this,a=Jn({},i,{theme:r});return o.length&&(this.attrs={},o.forEach(function(l){var u=l,f=!1,h=void 0,p=void 0;Gr(u)&&(u=u(a),f=!0);for(p in u)h=u[p],f||Gr(h)&&!n2(h)&&!Tu(h)&&(h=h(a)),s.attrs[p]=h,a[p]=h})),a},e.prototype.generateAndInjectStyles=function(r,i){var o=i.forwardedComponent,s=o.attrs,a=o.componentStyle;if(o.warnTooManyClasses,a.isStatic&&!s.length)return a.generateAndInjectStyles(Sl,this.styleSheet);var l=a.generateAndInjectStyles(this.buildExecutionContext(r,i,s),this.styleSheet);return l},e}(I.exports.Component);function _x(t,e,n){var r=Tu(t),i=!Mf(t),o=e.displayName,s=o===void 0?KR(t):o,a=e.componentId,l=a===void 0?o2(Ow,e.displayName,e.parentComponentId):a,u=e.ParentComponent,f=u===void 0?s2:u,h=e.attrs,p=h===void 0?Uf:h,y=e.displayName&&e.componentId?rg(e.displayName)+"-"+e.componentId:e.componentId||l,w=r&&t.attrs?Array.prototype.concat(t.attrs,p).filter(Boolean):p,v=new Ow(r?t.componentStyle.rules.concat(n):n,w,y),c=void 0,d=function(g,b){return ee(f,{...g,forwardedComponent:c,forwardedRef:b})};return d.displayName=s,c=_i.forwardRef(d),c.displayName=s,c.attrs=w,c.componentStyle=v,c.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Uf,c.styledComponentId=y,c.target=r?t.target:t,c.withComponent=function(g){var b=e.componentId,S=SR(e,["componentId"]),E=b&&b+"-"+(Mf(g)?g:rg(ey(g))),k=Jn({},S,{attrs:w,componentId:E,ParentComponent:f});return _x(g,k,n)},Object.defineProperty(c,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?wR(t.defaultProps,g):g}}),c.toString=function(){return"."+c.styledComponentId},i&&dy(c,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,styledComponentId:!0,target:!0,withComponent:!0}),c}var a2=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ig=function(e){return ng(_x,e)};a2.forEach(function(t){ig[t]=ig(t)});var l2=function(){function t(e,n){xr(this,t),this.rules=e,this.componentId=n,this.isStatic=cy(e,Uf),Xr.master.hasId(n)||Xr.master.deferredInject(n,[])}return t.prototype.createStyles=function(n,r){var i=ea(this.rules,n,r),o=ty(i,"");r.inject(this.componentId,o)},t.prototype.removeStyles=function(n){var r=this.componentId;n.hasId(r)&&n.remove(r)},t.prototype.renderStyles=function(n,r){this.removeStyles(r),this.createStyles(n,r)},t}();No&&(window.scCGSHMRCache={});function u2(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Bd.apply(void 0,[t].concat(n)),o="sc-global-"+uy(JSON.stringify(i)),s=new l2(i,o),a=function(l){Cu(u,l);function u(f){xr(this,u);var h=Zs(this,l.call(this,f)),p=h.constructor,y=p.globalStyle,w=p.styledComponentId;return No&&(window.scCGSHMRCache[w]=(window.scCGSHMRCache[w]||0)+1),h.state={globalStyle:y,styledComponentId:w},h}return u.prototype.componentWillUnmount=function(){window.scCGSHMRCache[this.state.styledComponentId]&&(window.scCGSHMRCache[this.state.styledComponentId]-=1),window.scCGSHMRCache[this.state.styledComponentId]===0&&this.state.globalStyle.removeStyles(this.styleSheet)},u.prototype.render=function(){var h=this;return ee(py,{children:function(p){h.styleSheet=p||Xr.master;var y=h.state.globalStyle;return y.isStatic?(y.renderStyles(xR,h.styleSheet),null):ee(Vd,{children:function(w){var v=h.constructor.defaultProps,c=Jn({},h.props);return typeof w<"u"&&(c.theme=fy(h.props,w,v)),y.renderStyles(c,h.styleSheet),null}})}})},u}(_i.Component);return a.globalStyle=s,a.styledComponentId=o,a}var c2=function(e){return e.replace(/\s|\\n/g,"")};function f2(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Bd.apply(void 0,[t].concat(n)),o=kx(uy(c2(JSON.stringify(i))));return new Sx(o,ty(i,o,"@keyframes"))}var d2=function(t){var e=_i.forwardRef(function(n,r){return ee(Vd,{children:function(i){var o=t.defaultProps,s=fy(n,i,o);return ee(t,{...n,theme:s,ref:r})}})});return dy(e,t),e.displayName="WithTheme("+ey(t)+")",e},h2={StyleSheet:Xr};const p2=Object.freeze(Object.defineProperty({__proto__:null,default:ig,createGlobalStyle:u2,css:Bd,isStyledComponent:Tu,keyframes:f2,ServerStyleSheet:i2,StyleSheetConsumer:py,StyleSheetContext:hy,StyleSheetManager:xx,ThemeConsumer:Vd,ThemeContext:Lf,ThemeProvider:r2,withTheme:d2,__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS:h2},Symbol.toStringTag,{value:"Module"})),m2=Xg(p2);(function(t){(function(e,n){for(var r in n)e[r]=n[r]})(t,function(e){var n={};function r(i){if(n[i])return n[i].exports;var o=n[i]={i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=n,r.d=function(i,o,s){r.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:s})},r.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,o){if(1&o&&(i=r(i)),8&o||4&o&&typeof i=="object"&&i&&i.__esModule)return i;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&o&&typeof i!="string")for(var a in i)r.d(s,a,function(l){return i[l]}.bind(null,a));return s},r.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return r.d(o,"a",o),o},r.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},r.p="",r(r.s=3)}([function(e,n){e.exports=I.exports},function(e,n){e.exports=ox()},function(e,n){e.exports=m2},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=n.WhisperSpinner=n.ClassicSpinner=n.TraceSpinner=n.JellyfishSpinner=n.MagicSpinner=n.FlapperSpinner=n.HoopSpinner=n.RingSpinner=n.RainbowSpinner=n.PongSpinner=n.CombSpinner=n.GooSpinner=n.SwishSpinner=n.RotateSpinner=n.ClapSpinner=n.FlagSpinner=n.SphereSpinner=n.FillSpinner=n.CubeSpinner=n.ImpulseSpinner=n.DominoSpinner=n.SequenceSpinner=n.PulseSpinner=n.SpiralSpinner=n.CircleSpinner=n.GuardSpinner=n.HeartSpinner=n.StageSpinner=n.FireworkSpinner=n.PushSpinner=n.WaveSpinner=n.BarsSpinner=n.SwapSpinner=n.GridSpinner=n.BallSpinner=void 0;var i=r(4),o=r(5),s=r(6),a=r(7),l=r(8),u=r(9),f=r(10),h=r(11),p=r(12),y=r(13),w=r(14),v=r(15),c=r(16),d=r(17),m=r(18),g=r(19),b=r(20),S=r(21),E=r(22),k=r(23),_=r(24),C=r(25),x=r(26),T=r(27),R=r(28),N=r(29),V=r(30),O=r(31),U=r(32),j=r(33),P=r(34),A=r(35),F=r(36),Q=r(37),le=r(38),Ge=r(39);n.BallSpinner=i.BallSpinner,n.GridSpinner=o.GridSpinner,n.SwapSpinner=s.SwapSpinner,n.BarsSpinner=a.BarsSpinner,n.WaveSpinner=l.WaveSpinner,n.PushSpinner=u.PushSpinner,n.FireworkSpinner=f.FireworkSpinner,n.StageSpinner=h.StageSpinner,n.HeartSpinner=p.HeartSpinner,n.GuardSpinner=y.GuardSpinner,n.CircleSpinner=w.CircleSpinner,n.SpiralSpinner=v.SpiralSpinner,n.PulseSpinner=c.PulseSpinner,n.SequenceSpinner=d.SequenceSpinner,n.DominoSpinner=m.DominoSpinner,n.ImpulseSpinner=g.ImpulseSpinner,n.CubeSpinner=b.CubeSpinner,n.FillSpinner=S.FillSpinner,n.SphereSpinner=E.SphereSpinner,n.FlagSpinner=k.FlagSpinner,n.ClapSpinner=_.ClapSpinner,n.RotateSpinner=C.RotateSpinner,n.SwishSpinner=x.SwishSpinner,n.GooSpinner=T.GooSpinner,n.CombSpinner=R.CombSpinner,n.PongSpinner=N.PongSpinner,n.RainbowSpinner=V.RainbowSpinner,n.RingSpinner=O.RingSpinner,n.HoopSpinner=U.HoopSpinner,n.FlapperSpinner=j.FlapperSpinner,n.MagicSpinner=P.MagicSpinner,n.JellyfishSpinner=A.JellyfishSpinner,n.TraceSpinner=F.TraceSpinner,n.ClassicSpinner=Q.ClassicSpinner,n.WhisperSpinner=le.WhisperSpinner,n.MetroSpinner=Ge.MetroSpinner},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BallSpinner=void 0;var i=p([`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(`,"",`) scale(0.25);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(`,"",`) scale(0.25);
    }
    100% {
        transform: translateX(0) scale(1);

    }
`],[`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(`,"",`) scale(0.25);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(`,"",`) scale(0.25);
    }
    100% {
        transform: translateX(0) scale(1);

    }
`]),o=p([`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.BallSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:d},a.default.createElement(v,{color:m,size:d,sizeUnit:b})," ")},w=f.default.div.withConfig({displayName:"ball__Wrapper",componentId:"sc-1edcqkl-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit}),v=f.default.div.withConfig({displayName:"ball__Ball",componentId:"sc-1edcqkl-1"})(s,function(c){return""+c.size/3+c.sizeUnit},function(c){return""+c.size/3+c.sizeUnit},function(c){return c.color},function(c){return function(d){return(0,u.keyframes)(i,d.size/2,d.sizeUnit,-d.size/2,d.sizeUnit)}(c)});y.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GridSpinner=void 0;var i=p([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    50% {
        width: `,"",`;
        height: `,"",`;
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    50% {
        width: `,"",`;
        height: `,"",`;
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.GridSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:d,sizeUnit:b},function(S){for(var E=S.countBallsInLine,k=S.color,_=S.size,C=S.sizeUnit,x=[],T=0,R=0;R<E;R++)for(var N=0;N<E;N++)x.push(a.default.createElement(v,{color:k,size:_,x:R*(_/3+_/12),y:N*(_/3+_/12),key:T.toString(),sizeUnit:C})),T++;return x}({countBallsInLine:3,color:m,size:d,sizeUnit:b}))},w=f.default.div.withConfig({displayName:"grid__Wrapper",componentId:"sc-11vno70-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=f.default.div.withConfig({displayName:"grid__Ball",componentId:"sc-11vno70-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/6+c.sizeUnit},function(c){return""+c.size/6+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.y,c.sizeUnit,c.x,c.sizeUnit,c.size/4,c.sizeUnit,c.size/4,c.sizeUnit,c.size/2-c.size/8,c.sizeUnit,c.size/2-c.size/8,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit)});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwapSpinner=void 0;var i=p([`
    0% {
        top: `,`px;
        left: `,`px;
    }
    50%{
        top: `,`px;
        left: `,`px;
    }
    100% {
        top: `,`px;
        left: `,`px;
    }
`],[`
    0% {
        top: `,`px;
        left: `,`px;
    }
    50%{
        top: `,`px;
        left: `,`px;
    }
    100% {
        top: `,`px;
        left: `,`px;
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:nth-child(2) {
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-duration: 1.5s;
    }
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    &:nth-child(2) {
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-duration: 1.5s;
    }
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(d){return d&&d.__esModule?d:{default:d}}function p(d,m){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(m)}}))}var y=function(d){switch(d.index){case 0:return{x:d.size-d.size/4,y:d.y};case 1:return{x:d.x,y:d.y-d.size/2+d.size/8};case 2:return{x:0,y:d.y}}},w=n.SwapSpinner=function(d){var m=d.size,g=d.color,b=d.loading,S=d.sizeUnit;return b&&a.default.createElement(v,{size:m,sizeUnit:S},function(E){for(var k=E.countBalls,_=E.color,C=E.size,x=E.sizeUnit,T=[],R=0;R<k;R++)T.push(a.default.createElement(c,{color:_,size:C,x:R*(C/4+C/8),y:C/2-C/8,key:R.toString(),index:R,sizeUnit:x}));return T}({countBalls:3,color:g,size:m,sizeUnit:S}))},v=f.default.div.withConfig({displayName:"swap__Wrapper",componentId:"sc-1a8o1b-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+(d.size/2+d.size/8)+d.sizeUnit}),c=f.default.div.withConfig({displayName:"swap__Ball",componentId:"sc-1a8o1b-1"})(s,function(d){return""+d.y+d.sizeUnit},function(d){return""+d.x+d.sizeUnit},function(d){return""+d.size/4+d.sizeUnit},function(d){return""+d.size/4+d.sizeUnit},function(d){return d.color},function(d){return(0,u.keyframes)(i,d.y,d.x,y(d).y,y(d).x,d.y,d.x)});w.defaultProps={loading:!0,size:40,color:"#4b4c56",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.BarsSpinner=void 0;var i=p([`
    0% {
        width: `,"",`
    }
    50% {
        width: `,"",`
    }
    100% {
        width: `,"",`
    }
`],[`
    0% {
        width: `,"",`
    }
    50% {
        width: `,"",`
    }
    100% {
        width: `,"",`
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.BarsSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:d,sizeUnit:b},function(S,E,k,_){for(var C=[],x=0;x<S;x++)C.push(a.default.createElement(v,{color:E,size:k,sizeUnit:_,x:x*(k/5+k/25)-k/12,key:x.toString(),index:x}));return C}(5,m,d,b))},w=f.default.div.withConfig({displayName:"bars__Wrapper",componentId:"sc-1sb659-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=f.default.div.withConfig({displayName:"bars__Bar",componentId:"sc-1sb659-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/20+c.sizeUnit},function(c){return""+c.size+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.size/20,c.sizeUnit,c.size/6,c.sizeUnit,c.size/20,c.sizeUnit)},function(c){return .15*c.index});y.defaultProps={loading:!0,size:40,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WaveSpinner=void 0;var i=p([`
    25% {
        transform: skewY(25deg);
    }
    50% {
        height: 100%;
        margin-top: 0;
    }
    75% {
        transform: skewY(-25deg);
    }
`],[`
    25% {
        transform: skewY(25deg);
    }
    50% {
        height: 100%;
        margin-top: 0;
    }
    75% {
        transform: skewY(-25deg);
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=p([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    margin-top: `,`;
    transform: skewY(0deg);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    margin-top: `,`;
    transform: skewY(0deg);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(d){return d&&d.__esModule?d:{default:d}}function p(d,m){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(m)}}))}var y=(0,u.keyframes)(i),w=n.WaveSpinner=function(d){var m=d.size,g=d.color,b=d.loading,S=d.sizeUnit;return b&&a.default.createElement(v,{size:m,sizeUnit:S},function(E){for(var k=E.countBars,_=E.color,C=E.size,x=E.sizeUnit,T=[],R=0;R<k;R++)T.push(a.default.createElement(c,{color:_,size:C,x:R*(C/5+(C/15-C/100)),y:0,key:R.toString(),index:R,sizeUnit:x}));return T}({countBars:10,color:g,size:m,sizeUnit:S}))},v=f.default.div.withConfig({displayName:"wave__Wrapper",componentId:"sc-8a0z7x-0"})(o,function(d){return""+2.5*d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),c=f.default.div.withConfig({displayName:"wave__Bar",componentId:"sc-8a0z7x-1"})(s,function(d){return""+(d.y+d.size/10)+d.sizeUnit},function(d){return""+d.x+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return""+d.size/10+d.sizeUnit},function(d){return""+(d.size-d.size/10)+d.sizeUnit},function(d){return d.color},y,function(d){return .15*d.index});w.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PushSpinner=void 0;var i=p([`
    15% {
        transform: scaleY(1) translateX(10`,`);
    }
    90% {
        transform: scaleY(0.05) translateX(-5`,`);
    }
    100%{
        transform: scaleY(0.05) translateX(-5`,`);
    }
`],[`
    15% {
        transform: scaleY(1) translateX(10`,`);
    }
    90% {
        transform: scaleY(0.05) translateX(-5`,`);
    }
    100%{
        transform: scaleY(0.05) translateX(-5`,`);
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=p([`
    position: absolute;
    top: 0;
    left: `,`;
    width: `,`;
    height: 100%;
    transform: scaleY(0.05) translateX(-5px);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: 0;
    left: `,`;
    width: `,`;
    height: 100%;
    transform: scaleY(0.05) translateX(-5px);
    background-color: `,`;
    animation: `,` 1.25s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.PushSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:d,sizeUnit:b},function(S){for(var E=S.countBars,k=S.color,_=S.size,C=S.sizeUnit,x=[],T=0;T<E;T++)x.push(a.default.createElement(v,{color:k,size:_,x:T*(_/5+(_/15-_/100)),y:0,key:T.toString(),index:T,sizeUnit:C}));return x}({countBars:10,color:m,size:d,sizeUnit:b}))},w=f.default.div.withConfig({displayName:"push__Wrapper",componentId:"ypksxs-0"})(o,function(c){return""+2.5*c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=f.default.div.withConfig({displayName:"push__Bar",componentId:"ypksxs-1"})(s,function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.sizeUnit,c.sizeUnit,c.sizeUnit)},function(c){return .15*c.index});y.defaultProps={loading:!0,size:30,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FireworkSpinner=void 0;var i=h([`
    0% {
        opacity: 1;
        transform: scale(0.1);
    }
    25% {
        opacity: 0.85;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`],[`
    0% {
        opacity: 1;
        transform: scale(0.1);
    }
    25% {
        opacity: 0.85;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`]),o=h([`
    border: `," dotted ",`;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    animation: `,` 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    border: `," dotted ",`;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    animation: `,` 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),s=f(r(0)),a=f(r(1)),l=r(2),u=f(l);function f(v){return v&&v.__esModule?v:{default:v}}function h(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var p=(0,l.keyframes)(i),y=n.FireworkSpinner=function(v){var c=v.size,d=v.color,m=v.loading,g=v.sizeUnit;return m&&s.default.createElement(w,{size:c,color:d,sizeUnit:g})},w=u.default.div.withConfig({displayName:"firework__Wrapper",componentId:"sc-1bn5a2-0"})(o,function(v){return""+v.size/10+v.sizeUnit},function(v){return v.color},function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit},p);y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.StageSpinner=void 0;var i=p([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    50% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
        opacity: 1;
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    50% {
        top: `,"",`;
        left: `,"",`;
        opacity: 0;
    }
    100% {
        top: `,"",`;
        left: `,"",`;
        opacity: 1;
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1s ease-in-out infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1s ease-in-out infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.StageSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:d,sizeUnit:b},function(S){for(var E=S.countBalls,k=S.color,_=S.size,C=S.sizeUnit,x=[],T=0,R=0;R<E;R++)x.push(a.default.createElement(v,{color:k,size:_,index:R,x:R*(_/2.5),y:_/2-_/10,key:T.toString(),sizeUnit:C})),T++;return x}({countBalls:3,color:m,size:d,sizeUnit:b}))},w=f.default.div.withConfig({displayName:"stage__Wrapper",componentId:"sc-161krao-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=f.default.div.withConfig({displayName:"stage__Ball",componentId:"sc-161krao-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.y,c.sizeUnit,c.x,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit,c.y+c.size/2,c.sizeUnit,c.x,c.sizeUnit,c.y,c.sizeUnit,c.x,c.sizeUnit)},function(c){return .2*c.index});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HeartSpinner=void 0;var i=h([`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(1);
    }
    65% {
        transform: scale(1);
    }
    80% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
`],[`
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(1);
    }
    65% {
        transform: scale(1);
    }
    80% {
        transform: scale(0.75);
    }
    100% {
        transform: scale(1);
    }
`]),o=h([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1s ease-in-out infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: `,`;
        left: `,`;
        width: `,`;
        height: `,`;
        background-color: `,`;
        border-radius: `,`
            `,` 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1s ease-in-out infinite;
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: `,`;
        left: `,`;
        width: `,`;
        height: `,`;
        background-color: `,`;
        border-radius: `,`
            `,` 0 0;
        transform: rotate(-45deg);
        transform-origin: 0 100%;
    }
    &::after {
        left: 0;
        transform: rotate(45deg);
        transform-origin: 100% 100%;
    }
`]),s=f(r(0)),a=f(r(1)),l=r(2),u=f(l);function f(v){return v&&v.__esModule?v:{default:v}}function h(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var p=(0,l.keyframes)(i),y=n.HeartSpinner=function(v){var c=v.size,d=v.color,m=v.loading,g=v.sizeUnit;return m&&s.default.createElement(w,{size:c,color:d,sizeUnit:g})},w=u.default.div.withConfig({displayName:"heart__Wrapper",componentId:"sc-12jb06u-0"})(o,function(v){return""+v.size+v.sizeUnit},function(v){return""+(v.size-v.size/10)+v.sizeUnit},p,function(v){return""+v.size/20+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+(v.size-v.size/5)+v.sizeUnit},function(v){return v.color},function(v){return""+v.size/2+v.sizeUnit},function(v){return""+v.size/2+v.sizeUnit});y.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GuardSpinner=void 0;var i=w([`
    0% {
        transform: rotateY(90deg);
    }
    50% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(90deg);
    }
`],[`
    0% {
        transform: rotateY(90deg);
    }
    50% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(90deg);
    }
`]),o=w([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),s=w([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
`]),a=w([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation-delay: `,`s;
`]),l=w([`
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`],[`
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`]),u=y(r(0)),f=y(r(1)),h=r(2),p=y(h);function y(S){return S&&S.__esModule?S:{default:S}}function w(S,E){return Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(E)}}))}var v=(0,h.keyframes)(i),c=n.GuardSpinner=function(S){var E=S.size,k=S.backColor,_=S.frontColor,C=S.loading,x=S.sizeUnit;return C&&u.default.createElement(d,{size:E,sizeUnit:x},function(T){for(var R=T.countCubesInLine,N=T.backColor,V=T.frontColor,O=T.size,U=T.sizeUnit,j=[],P=0,A=0;A<R;A++)for(var F=0;F<R;F++)j.push(u.default.createElement(m,{size:O,x:A*(O/4+O/8),y:F*(O/4+O/8),key:P.toString(),sizeUnit:U},u.default.createElement(g,{size:O,index:P,sizeUnit:U},u.default.createElement(b,{front:!0,size:O,color:V,sizeUnit:U}),u.default.createElement(b,{left:!0,size:O,color:N,sizeUnit:U})))),P++;return j}({countCubesInLine:3,backColor:k,frontColor:_,size:E,sizeUnit:x}))},d=p.default.div.withConfig({displayName:"guard__Wrapper",componentId:"sc-13axfn9-0"})(o,function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size+S.sizeUnit},function(S){return""+3*S.size+S.sizeUnit}),m=p.default.div.withConfig({displayName:"guard__CubeWrapper",componentId:"sc-13axfn9-1"})(s,function(S){return""+S.y+S.sizeUnit},function(S){return""+S.x+S.sizeUnit},function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size+S.sizeUnit}),g=p.default.div.withConfig({displayName:"guard__Cube",componentId:"sc-13axfn9-2"})(a,function(S){return""+S.size/4+S.sizeUnit},function(S){return""+S.size/4+S.sizeUnit},v,function(S){return .125*S.index}),b=p.default.div.withConfig({displayName:"guard__Side",componentId:"sc-13axfn9-3"})(l,function(S){return S.color},function(S){return S.front?0:-90},function(S){return""+S.size/8+S.sizeUnit});c.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#373846",sizeUnit:"px"},c.propTypes={loading:f.default.bool,size:f.default.number,frontColor:f.default.string,backColor:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CircleSpinner=void 0;var i=h([`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`]),o=h([`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-right-color: transparent;
    border-radius: 50%;
    animation: `,` 0.75s linear infinite;
`],[`
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-right-color: transparent;
    border-radius: 50%;
    animation: `,` 0.75s linear infinite;
`]),s=f(r(0)),a=f(r(1)),l=r(2),u=f(l);function f(v){return v&&v.__esModule?v:{default:v}}function h(v,c){return Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(c)}}))}var p=(0,l.keyframes)(i),y=n.CircleSpinner=function(v){var c=v.size,d=v.color,m=v.loading,g=v.sizeUnit;return m&&s.default.createElement(w,{size:c,color:d,sizeUnit:g})},w=u.default.div.withConfig({displayName:"circle__Wrapper",componentId:"sc-16bbsoy-0"})(o,function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size+v.sizeUnit},function(v){return""+v.size/5+v.sizeUnit},function(v){return v.color},p);y.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},y.propTypes={loading:a.default.bool,size:a.default.number,color:a.default.string,sizeUnit:a.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SpiralSpinner=void 0;var i=w([`
    0% {
        transform: rotateX(0deg);
    }
    25% {
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-180deg);
    }
    75% {
        transform: rotateX(-270deg);
    }
    100% {
        transform: rotateX(-360deg);
    }
`],[`
    0% {
        transform: rotateX(0deg);
    }
    25% {
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-180deg);
    }
    75% {
        transform: rotateX(-270deg);
    }
    100% {
        transform: rotateX(-360deg);
    }
`]),o=w([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),s=w([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=w([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=w([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`]),u=y(r(0)),f=y(r(1)),h=r(2),p=y(h);function y(S){return S&&S.__esModule?S:{default:S}}function w(S,E){return Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(E)}}))}var v=(0,h.keyframes)(i),c=n.SpiralSpinner=function(S){var E=S.size,k=S.backColor,_=S.frontColor,C=S.loading,x=S.sizeUnit;return C&&u.default.createElement(d,{size:E,sizeUnit:x},function(T){for(var R=T.countCubesInLine,N=T.backColor,V=T.frontColor,O=T.size,U=T.sizeUnit,j=[],P=0,A=0;A<R;A++)j.push(u.default.createElement(m,{x:A*(O/4),y:0,key:P.toString(),sizeUnit:U},u.default.createElement(g,{size:O,index:P,sizeUnit:U},u.default.createElement(b,{front:!0,size:O,color:V,sizeUnit:U}),u.default.createElement(b,{back:!0,size:O,color:V,sizeUnit:U}),u.default.createElement(b,{bottom:!0,size:O,color:N,sizeUnit:U}),u.default.createElement(b,{top:!0,size:O,color:N,sizeUnit:U})))),P++;return j}({countCubesInLine:4,backColor:k,frontColor:_,size:E,sizeUnit:x}))},d=p.default.div.withConfig({displayName:"spiral__Wrapper",componentId:"sc-1898s0q-0"})(o,function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size/4+S.sizeUnit},function(S){return""+3*S.size+S.sizeUnit}),m=p.default.div.withConfig({displayName:"spiral__CubeWrapper",componentId:"sc-1898s0q-1"})(s,function(S){return""+S.y+S.sizeUnit},function(S){return""+S.x+S.sizeUnit}),g=p.default.div.withConfig({displayName:"spiral__Cube",componentId:"sc-1898s0q-2"})(a,function(S){return""+S.size/4+S.sizeUnit},function(S){return""+S.size/4+S.sizeUnit},v,function(S){return .15*S.index}),b=p.default.div.withConfig({displayName:"spiral__Side",componentId:"sc-1898s0q-3"})(l,function(S){return S.color},function(S){return function(E){return E.top?90:E.bottom?-90:0}(S)},function(S){return S.back?180:0},function(S){return""+S.size/8+S.sizeUnit});c.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:f.default.bool,size:f.default.number,frontColor:f.default.string,backColor:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PulseSpinner=void 0;var i=p([`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`],[`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
    animation: `,` 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(d){return d&&d.__esModule?d:{default:d}}function p(d,m){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(m)}}))}var y=(0,u.keyframes)(i),w=n.PulseSpinner=function(d){var m=d.size,g=d.color,b=d.loading,S=d.sizeUnit;return b&&a.default.createElement(v,{size:m,sizeUnit:S},function(E){for(var k=E.countCubeInLine,_=E.color,C=E.size,x=E.sizeUnit,T=[],R=0,N=0;N<k;N++)T.push(a.default.createElement(c,{color:_,size:C,x:N*(C/3+C/15),y:0,key:R.toString(),index:N,sizeUnit:x})),R++;return T}({countCubeInLine:3,color:g,size:m,sizeUnit:S}))},v=f.default.div.withConfig({displayName:"pulse__Wrapper",componentId:"sc-1yr0qmr-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size/2.5+d.sizeUnit}),c=f.default.div.withConfig({displayName:"pulse__Cube",componentId:"sc-1yr0qmr-1"})(s,function(d){return""+d.y+d.sizeUnit},function(d){return""+d.x+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return""+d.size/2.5+d.sizeUnit},function(d){return d.color},y,function(d){return .15*d.index});w.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SequenceSpinner=void 0;var i=w([`
    0% {
        top: `,"",`;
        transform: rotateY(0deg);
    }
    30%{
        top: 0;
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(0deg);
        top: -`,"",`;
    }
`],[`
    0% {
        top: `,"",`;
        transform: rotateY(0deg);
    }
    30%{
        top: 0;
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(0deg);
        top: -`,"",`;
    }
`]),o=w([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
    overflow: hidden;
    transform: rotateY(20deg);
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
    overflow: hidden;
    transform: rotateY(20deg);
`]),s=w([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=w([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=w([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateY(`,`deg)
        translateZ(`,`);
`]),u=y(r(0)),f=y(r(1)),h=r(2),p=y(h);function y(b){return b&&b.__esModule?b:{default:b}}function w(b,S){return Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(S)}}))}var v=n.SequenceSpinner=function(b){var S=b.size,E=b.backColor,k=b.frontColor,_=b.loading,C=b.sizeUnit;return _&&u.default.createElement(c,{size:S,sizeUnit:C},function(x){for(var T=x.countCubesInLine,R=x.backColor,N=x.frontColor,V=x.size,O=x.sizeUnit,U=[],j=0,P=0;P<T;P++)U.push(u.default.createElement(d,{x:P*(V/8+V/11),y:0,key:j.toString(),sizeUnit:O},u.default.createElement(m,{size:V,index:j,sizeUnit:O},u.default.createElement(g,{front:!0,size:V,color:N,sizeUnit:O}),u.default.createElement(g,{left:!0,size:V,color:R,sizeUnit:O})))),j++;return U}({countCubesInLine:5,backColor:E,frontColor:k,size:S,sizeUnit:C}))},c=p.default.div.withConfig({displayName:"sequence__Wrapper",componentId:"sc-61fmm1-0"})(o,function(b){return""+b.size+b.sizeUnit},function(b){return""+b.size/1.75+b.sizeUnit},function(b){return""+3*b.size+b.sizeUnit}),d=p.default.div.withConfig({displayName:"sequence__CubeWrapper",componentId:"sc-61fmm1-1"})(s,function(b){return""+b.y+b.sizeUnit},function(b){return""+b.x+b.sizeUnit}),m=p.default.div.withConfig({displayName:"sequence__Cube",componentId:"sc-61fmm1-2"})(a,function(b){return""+b.size/8+b.sizeUnit},function(b){return""+b.size/1.75+b.sizeUnit},function(b){return(0,h.keyframes)(i,b.size,b.sizeUnit,b.size,b.sizeUnit)},function(b){return .1*b.index}),g=p.default.div.withConfig({displayName:"sequence__Side",componentId:"sc-61fmm1-3"})(l,function(b){return b.color},function(b){return b.front?0:-90},function(b){return""+b.size/16+b.sizeUnit});v.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},v.propTypes={loading:f.default.bool,size:f.default.number,frontColor:f.default.string,backColor:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.DominoSpinner=void 0;var i=p([`
    0% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 0;
    }
    14.28% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    28.56% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    37.12% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    42.84% {
        transform: translateX(`,"",`) rotate(10deg);
        opacity: 1;
    }
    57.12% {
        transform: translateX(`,"",`) rotate(40deg);
        opacity: 1;
    }
    71.4% {
        transform: translateX(`,"",`) rotate(62deg);
        opacity: 1;
    }
    85.68% {
        transform: translateX(`,"",`) rotate(72deg);
        opacity: 1;
    }
    100% {
        transform: translateX(`,"",`) rotate(74deg);
        opacity: 0;
    }
`],[`
    0% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 0;
    }
    14.28% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    28.56% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    37.12% {
        transform: translateX(`,"",`) rotate(0deg);
        opacity: 1;
    }
    42.84% {
        transform: translateX(`,"",`) rotate(10deg);
        opacity: 1;
    }
    57.12% {
        transform: translateX(`,"",`) rotate(40deg);
        opacity: 1;
    }
    71.4% {
        transform: translateX(`,"",`) rotate(62deg);
        opacity: 1;
    }
    85.68% {
        transform: translateX(`,"",`) rotate(72deg);
        opacity: 1;
    }
    100% {
        transform: translateX(`,"",`) rotate(74deg);
        opacity: 0;
    }
`]),o=p([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    right: 0;
    width: `,`;
    height: `,`;
    transform-origin: 50% 100%;
    background-color: `,`;
    animation: `,` 3s linear infinite;
    animation-delay: `,`s;
    transform: translateX(`,`)
        rotate(`,`deg);
    &:nth-child(1) {
        opacity: 0.22;
    }
`],[`
    position: absolute;
    right: 0;
    width: `,`;
    height: `,`;
    transform-origin: 50% 100%;
    background-color: `,`;
    animation: `,` 3s linear infinite;
    animation-delay: `,`s;
    transform: translateX(`,`)
        rotate(`,`deg);
    &:nth-child(1) {
        opacity: 0.22;
    }
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.DominoSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit,S=function(E,k){for(var _=[],C=0;C<=E+1;C++)_.push(k/8*-C);return _}(7,d);return g&&a.default.createElement(w,{size:d,sizeUnit:b},function(E){for(var k=E.countBars,_=E.rotatesPoints,C=E.translatesPoints,x=E.color,T=E.size,R=E.sizeUnit,N=[],V=0;V<k;V++)N.push(a.default.createElement(v,{color:x,size:T,translatesPoints:C,rotate:_[V],key:V.toString(),index:V,sizeUnit:R}));return N}({countBars:7,rotatesPoints:[0,0,0,10,40,60,70],translatesPoints:S,color:m,size:d,sizeUnit:b}))},w=f.default.div.withConfig({displayName:"domino__Wrapper",componentId:"sc-81zu9-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=f.default.div.withConfig({displayName:"domino__Bar",componentId:"sc-81zu9-1"})(s,function(c){return""+c.size/30+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.translatesPoints[0],c.sizeUnit,c.translatesPoints[1],c.sizeUnit,c.translatesPoints[2],c.sizeUnit,c.translatesPoints[3],c.sizeUnit,c.translatesPoints[4],c.sizeUnit,c.translatesPoints[5],c.sizeUnit,c.translatesPoints[6],c.sizeUnit,c.translatesPoints[7],c.sizeUnit,c.translatesPoints[8],c.sizeUnit)},function(c){return-.42*c.index},function(c){return""+(c.size-15*c.index)+c.sizeUnit},function(c){return c.rotate});y.defaultProps={loading:!0,size:100,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ImpulseSpinner=void 0;var i=p([`
    0% {
        background: `,`;
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: `,`;
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:`,`;
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: `,`;
        transform: scale(1);
    }
`],[`
    0% {
        background: `,`;
        transform: scale(1);
        animation-timing-function: cubic-bezier(1,0,0.7,1);
    }
    40% {
        background: `,`;
        transform: scale(1.5);
        animation-timing-function: cubic-bezier(0.3,0,0,1);
    }
    72.5% {
        background:`,`;
        transform: scale(1);
        animation-timing-function: linear;
    }
    100% {
        background: `,`;
        transform: scale(1);
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.25s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.25s linear infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.ImpulseSpinner=function(c){var d=c.size,m=c.frontColor,g=c.backColor,b=c.loading,S=c.sizeUnit;return b&&a.default.createElement(w,{size:d,sizeUnit:S},function(E){for(var k=E.countBalls,_=E.frontColor,C=E.backColor,x=E.size,T=E.sizeUnit,R=[],N=0;N<k;N++)R.push(a.default.createElement(v,{frontColor:_,backColor:C,size:x,x:N*(x/5+x/5),y:0,key:N.toString(),index:N,sizeUnit:T}));return R}({countBalls:3,frontColor:m,backColor:g,size:d,sizeUnit:S}))},w=f.default.div.withConfig({displayName:"impulse__Wrapper",componentId:"sc-1eafdhu-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=f.default.div.withConfig({displayName:"impulse__Ball",componentId:"sc-1eafdhu-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.frontColor},function(c){return(0,u.keyframes)(i,c.backColor,c.frontColor,c.backColor,c.backColor)},function(c){return .125*c.index});y.defaultProps={loading:!0,size:40,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CubeSpinner=void 0;var i=w([`
    from { transform: rotateX(0) rotateY(0); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
`],[`
    from { transform: rotateX(0) rotateY(0); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
`]),o=w([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: `,`;
`]),s=w([`
    sposition: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`],[`
    sposition: absolute;
    top: `,`;
    left: `,`;
    width: inherit;
    height: inherit;
`]),a=w([`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    transform-style: preserve-3d;
    animation: `,` 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`]),l=w([`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`],[`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: `,`;
    transform: rotateX(`,"deg) rotateY(",`deg)
        translateZ(`,`);
`]),u=y(r(0)),f=y(r(1)),h=r(2),p=y(h);function y(S){return S&&S.__esModule?S:{default:S}}function w(S,E){return Object.freeze(Object.defineProperties(S,{raw:{value:Object.freeze(E)}}))}var v=(0,h.keyframes)(i),c=n.CubeSpinner=function(S){var E=S.size,k=S.backColor,_=S.frontColor,C=S.loading,x=S.sizeUnit;return C&&u.default.createElement(d,{size:E,sizeUnit:x},u.default.createElement(m,{x:0,y:0,sizeUnit:x},u.default.createElement(g,{size:E,sizeUnit:x},u.default.createElement(b,{front:!0,size:E,color:_,sizeUnit:x}),u.default.createElement(b,{back:!0,size:E,color:_,sizeUnit:x}),u.default.createElement(b,{bottom:!0,size:E,color:k,sizeUnit:x}),u.default.createElement(b,{top:!0,size:E,color:k,sizeUnit:x}),u.default.createElement(b,{left:!0,size:E,color:k,sizeUnit:x}),u.default.createElement(b,{right:!0,size:E,color:k,sizeUnit:x}))))},d=p.default.div.withConfig({displayName:"cube__Wrapper",componentId:"sc-1iks05k-0"})(o,function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size+S.sizeUnit},function(S){return""+4*S.size+S.sizeUnit}),m=p.default.div.withConfig({displayName:"cube__CubeWrapper",componentId:"sc-1iks05k-1"})(s,function(S){return""+S.y+S.sizeUnit},function(S){return""+S.x+S.sizeUnit}),g=p.default.div.withConfig({displayName:"cube__Cube",componentId:"sc-1iks05k-2"})(a,function(S){return""+S.size+S.sizeUnit},function(S){return""+S.size+S.sizeUnit},v),b=p.default.div.withConfig({displayName:"cube__Side",componentId:"sc-1iks05k-3"})(l,function(S){return S.color},function(S){return function(E){return E.top?90:E.bottom?-90:0}(S)},function(S){return function(E){return E.left?90:E.right?-90:E.back?180:0}(S)},function(S){return""+S.size/2+S.sizeUnit});c.defaultProps={loading:!0,size:25,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:f.default.bool,size:f.default.number,frontColor:f.default.string,backColor:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FillSpinner=void 0;var i=y([`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),o=y([`
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
`],[`
    0% {
        height: 0%;
    }
    25% {
        height: 0%;
    }
    50% {
        height: 100%;
    }
    75% {
        height: 100%;
    }
    100% {
        height: 0%;
    }
`]),s=y([`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    animation: `,` 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`],[`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    animation: `,` 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;
`]),a=y([`
    width: 100%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`],[`
    width: 100%;
    background-color: `,`;
    animation: `,` 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`]),l=p(r(0)),u=p(r(1)),f=r(2),h=p(f);function p(g){return g&&g.__esModule?g:{default:g}}function y(g,b){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(b)}}))}var w=(0,f.keyframes)(i),v=(0,f.keyframes)(o),c=n.FillSpinner=function(g){var b=g.size,S=g.color,E=g.loading,k=g.sizeUnit;return E&&l.default.createElement(d,{size:b,color:S,sizeUnit:k},l.default.createElement(m,{color:S,size:b,sizeUnit:k}))},d=h.default.div.withConfig({displayName:"fill__Wrapper",componentId:"ehv7z4-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size/8+g.sizeUnit},function(g){return g.color},w),m=h.default.div.withConfig({displayName:"fill__Plane",componentId:"ehv7z4-1"})(a,function(g){return g.color},v);c.defaultProps={loading:!0,size:20,color:"#4b4c56",sizeUnit:"px"},c.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SphereSpinner=void 0;var i=y([`
    to{
        transform: rotate(360deg);
    }
`],[`
    to{
        transform: rotate(360deg);
    }
`]),o=y([`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
    5% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    50% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    55% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`],[`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
    5% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    50% {
        transform: translateX(-`,"",") translateY(-","",`) scale(0);
    }
    55% {
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`]),s=y([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 8s linear infinite;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 8s linear infinite;
`]),a=y([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: `,`s;
`]),l=p(r(0)),u=p(r(1)),f=r(2),h=p(f);function p(m){return m&&m.__esModule?m:{default:m}}function y(m,g){return Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(g)}}))}var w=(0,f.keyframes)(i),v=n.SphereSpinner=function(m){var g=m.size,b=m.color,S=m.loading,E=m.sizeUnit,k=g/2,_=g/5;return S&&l.default.createElement(c,{size:g,sizeUnit:E},function(C){for(var x=C.countBalls,T=C.radius,R=C.angle,N=C.color,V=C.size,O=C.ballSize,U=C.sizeUnit,j=[],P=O/2,A=0;A<x;A++){var F=Math.sin(R*A*(Math.PI/180))*T-P,Q=Math.cos(R*A*(Math.PI/180))*T-P;j.push(l.default.createElement(d,{color:N,ballSize:O,size:V,x:F,y:Q,key:A.toString(),index:A,sizeUnit:U}))}return j}({countBalls:7,radius:k,angle:360/7,color:b,size:g,ballSize:_,sizeUnit:E}))},c=h.default.div.withConfig({displayName:"sphere__Wrapper",componentId:"sc-1t5xu9p-0"})(s,function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size+m.sizeUnit},w),d=h.default.div.withConfig({displayName:"sphere__Ball",componentId:"sc-1t5xu9p-1"})(a,function(m){return""+m.size/2+m.sizeUnit},function(m){return""+m.size/2+m.sizeUnit},function(m){return""+m.ballSize+m.sizeUnit},function(m){return""+m.ballSize+m.sizeUnit},function(m){return m.color},function(m){return""+m.x+m.sizeUnit},function(m){return""+m.y+m.sizeUnit},function(m){return function(g){return(0,f.keyframes)(o,g.x,g.sizeUnit,g.y,g.sizeUnit,g.size/12,g.sizeUnit,g.size/12,g.sizeUnit,g.size/12,g.sizeUnit,g.size/12,g.sizeUnit,g.x,g.sizeUnit,g.y,g.sizeUnit)}(m)},function(m){return .3*m.index});v.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlagSpinner=void 0;var i=y([`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(`,"",`);
        opacity: 0.25;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`],[`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(`,"",`);
        opacity: 0.25;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`]),o=y([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=y([`
    position: absolute;
    left: 0;
    top: 0;
    animation: `,` 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    left: 0;
    top: 0;
    animation: `,` 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
    animation-delay: `,`s;
`]),a=y([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    background-color: `,`;
`]),l=p(r(0)),u=p(r(1)),f=r(2),h=p(f);function p(m){return m&&m.__esModule?m:{default:m}}function y(m,g){return Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(g)}}))}var w=n.FlagSpinner=function(m){var g=m.size,b=m.color,S=m.loading,E=m.sizeUnit;return S&&l.default.createElement(v,{size:g,sizeUnit:E},function(k){for(var _=k.countPlaneInLine,C=k.color,x=k.size,T=k.sizeUnit,R=[],N=[],V=0,O=0;O<_;O++){for(var U=0;U<_;U++)N.push(l.default.createElement(d,{color:C,size:x,x:O*(x/6+x/9),y:U*(x/6+x/9)+x/10,key:O+U.toString(),index:V,sizeUnit:T})),V++;R.push(l.default.createElement(c,{index:V,key:V.toString(),size:x,sizeUnit:T},[].concat(N))),N.length=0}return R}({countPlaneInLine:4,color:b,size:g,sizeUnit:E}))},v=h.default.div.withConfig({displayName:"flag__Wrapper",componentId:"sc-3eh05c-0"})(o,function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size+m.sizeUnit}),c=h.default.div.withConfig({displayName:"flag__Line",componentId:"sc-3eh05c-1"})(s,function(m){return(0,f.keyframes)(i,-m.size/5,m.sizeUnit)},function(m){return .05*m.index}),d=h.default.div.withConfig({displayName:"flag__Plane",componentId:"sc-3eh05c-2"})(a,function(m){return""+m.y+m.sizeUnit},function(m){return""+m.x+m.sizeUnit},function(m){return""+m.size/6+m.sizeUnit},function(m){return""+m.size/6+m.sizeUnit},function(m){return m.color});w.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClapSpinner=void 0;var i=y([`
    50% {
        transform: rotate(180deg) scale(1.125);
    }
    100%{
        transform: rotate(360deg);
    }
`],[`
    50% {
        transform: rotate(180deg) scale(1.125);
    }
    100%{
        transform: rotate(360deg);
    }
`]),o=y([`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1.25) ;
    }
    5% {
        transform: translateX(`,"",") translateY(","",`) scale(1.75);
    }
    50% {
        transform: translateX(`,"",") translateY(","",`) scale(.25);
    }
    55% {
        background-color: `,`;
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`],[`
    0% {
        transform: translateX(`,"",") translateY(","",`) scale(1.25) ;
    }
    5% {
        transform: translateX(`,"",") translateY(","",`) scale(1.75);
    }
    50% {
        transform: translateX(`,"",") translateY(","",`) scale(.25);
    }
    55% {
        background-color: `,`;
        transform: translateX(`,"",") translateY(","",`) scale(1) ;
    }
`]),s=y([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 1.5s linear infinite;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 1.5s linear infinite;
`]),a=y([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`);
    animation: `,` 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
    animation-delay: `,`s;
`]),l=p(r(0)),u=p(r(1)),f=r(2),h=p(f);function p(m){return m&&m.__esModule?m:{default:m}}function y(m,g){return Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(g)}}))}var w=(0,f.keyframes)(i),v=n.ClapSpinner=function(m){var g=m.size,b=m.frontColor,S=m.backColor,E=m.loading,k=m.sizeUnit,_=g/2,C=g/5;return E&&l.default.createElement(c,{size:g,sizeUnit:k},function(x){for(var T=x.countBalls,R=x.radius,N=x.angle,V=x.frontColor,O=x.backColor,U=x.size,j=x.ballSize,P=x.sizeUnit,A=[],F=j/2,Q=0;Q<T;Q++){var le=Math.sin(N*Q*(Math.PI/180))*R-F,Ge=Math.cos(N*Q*(Math.PI/180))*R-F;A.push(l.default.createElement(d,{frontColor:V,backColor:O,ballSize:j,size:U,sizeUnit:P,x:le,y:Ge,key:Q.toString(),index:Q}))}return A}({countBalls:7,radius:_,angle:360/7,frontColor:b,backColor:S,size:g,ballSize:C,sizeUnit:k}))},c=h.default.div.withConfig({displayName:"clap__Wrapper",componentId:"sc-12p9tb5-0"})(s,function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size+m.sizeUnit},w),d=h.default.div.withConfig({displayName:"clap__Ball",componentId:"sc-12p9tb5-1"})(a,function(m){return""+m.size/2+m.sizeUnit},function(m){return""+m.size/2+m.sizeUnit},function(m){return""+m.ballSize+m.sizeUnit},function(m){return""+m.ballSize+m.sizeUnit},function(m){return m.frontColor},function(m){return""+m.x+m.sizeUnit},function(m){return""+m.y+m.sizeUnit},function(m){return function(g){return(0,f.keyframes)(o,g.x,g.sizeUnit,g.y,g.sizeUnit,g.x,g.sizeUnit,g.y,g.sizeUnit,g.x,g.sizeUnit,g.y,g.sizeUnit,g.backColor,g.x,g.sizeUnit,g.y,g.sizeUnit)}(m)},function(m){return .2*m.index});v.defaultProps={loading:!0,size:30,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,frontColor:u.default.string,backColor:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RotateSpinner=void 0;var i=p([`
    0% {
        transform: rotate(0deg);
    }
    100% { 
        transform: rotate(1440deg); 
        opacity: 0.05;
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100% { 
        transform: rotate(1440deg); 
        opacity: 0.05;
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    left: 50%;
    top: 0%;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(-50%) translateY(100%);
    transform-origin: 0 250% 0;
    animation: `,` 4s both infinite;
    animation-timing-function: cubic-bezier(0.5, `,`, 0.9, 0.9);
`],[`
    position: absolute;
    left: 50%;
    top: 0%;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(-50%) translateY(100%);
    transform-origin: 0 250% 0;
    animation: `,` 4s both infinite;
    animation-timing-function: cubic-bezier(0.5, `,`, 0.9, 0.9);
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(d){return d&&d.__esModule?d:{default:d}}function p(d,m){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(m)}}))}var y=(0,u.keyframes)(i),w=n.RotateSpinner=function(d){var m=d.size,g=d.color,b=d.loading,S=d.sizeUnit,E=m/2,k=m/5;return b&&a.default.createElement(v,{size:m,sizeUnit:S},function(_){for(var C=_.countBalls,x=_.radius,T=_.angle,R=_.color,N=_.size,V=_.ballSize,O=_.sizeUnit,U=[],j=V/2,P=0;P<C;P++){var A=Math.sin(T*P*(Math.PI/180))*x-j,F=Math.cos(T*P*(Math.PI/180))*x-j;U.push(a.default.createElement(c,{color:R,ballSize:V,size:N,x:A,y:F,key:P.toString(),index:P,sizeUnit:O}))}return U}({countBalls:8,radius:E,angle:45,color:g,size:m,ballSize:k,sizeUnit:S}))},v=f.default.div.withConfig({displayName:"rotate__Wrapper",componentId:"sc-1b62bh9-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),c=f.default.div.withConfig({displayName:"rotate__Ball",componentId:"sc-1b62bh9-1"})(s,function(d){return""+d.ballSize+d.sizeUnit},function(d){return""+d.ballSize+d.sizeUnit},function(d){return d.color},y,function(d){return .3*d.index});w.defaultProps={loading:!0,size:45,color:"#00ff89",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.SwishSpinner=void 0;var i=p([`
    50% {
        transform: scale(0);
        background-color: `,`;
    }
`],[`
    50% {
        transform: scale(0);
        background-color: `,`;
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 3px;
    background-color: `,`;
    animation: `,` 0.9s ease infinite;
    transition: all 0.3s ease;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 3px;
    background-color: `,`;
    animation: `,` 0.9s ease infinite;
    transition: all 0.3s ease;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.SwishSpinner=function(c){var d=c.size,m=c.frontColor,g=c.backColor,b=c.loading,S=c.sizeUnit;return b&&a.default.createElement(w,{size:d,sizeUnit:S},function(E){for(var k=E.countBallsInLine,_=E.frontColor,C=E.backColor,x=E.size,T=E.sizeUnit,R=[],N=0,V=0;V<k;V++)for(var O=0;O<k;O++)R.push(a.default.createElement(v,{frontColor:_,backColor:C,size:x,x:V*(x/3+x/15),y:O*(x/3+x/15),key:N.toString(),index:N,sizeUnit:T})),N++;return R}({countBallsInLine:3,frontColor:m,backColor:g,size:d,sizeUnit:S}))},w=f.default.div.withConfig({displayName:"swish__Wrapper",componentId:"e0szto-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=f.default.div.withConfig({displayName:"swish__Ball",componentId:"e0szto-1"})(s,function(c){return""+c.y+c.sizeUnit},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.frontColor},function(c){return(0,u.keyframes)(i,c.backColor)},function(c){return .1*c.index});y.defaultProps={loading:!0,size:40,frontColor:"#4b4c56",backColor:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,frontColor:l.default.string,backColor:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.GooSpinner=void 0;var i=w([`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),o=w([`
    0%{
        transform: translateY(0) scale(1);
    }
    50%{
        transform: translateY(`,"",`) scale(0.8);
    }
    100%{
        transform: translateY(0) scale(1);
    }
`],[`
    0%{
        transform: translateY(0) scale(1);
    }
    50%{
        transform: translateY(`,"",`) scale(0.8);
    }
    100%{
        transform: translateY(0) scale(1);
    }
`]),s=w([`
    width: `,`;
    height: `,`;
    filter: url("#goo");
`],[`
    width: `,`;
    height: `,`;
    filter: url("#goo");
`]),a=w([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1.7s linear infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 1.7s linear infinite;
`]),l=w([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s ease-in-out infinite;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 1.5s ease-in-out infinite;
`]),u=y(r(0)),f=y(r(1)),h=r(2),p=y(h);function y(g){return g&&g.__esModule?g:{default:g}}function w(g,b){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(b)}}))}var v=n.GooSpinner=function(g){var b=g.size,S=g.color,E=g.loading,k=g.sizeUnit;return E&&u.default.createElement(c,{size:b,sizeUnit:k},u.default.createElement(d,{size:b,sizeUnit:k},function(_){for(var C=_.countBalls,x=_.color,T=_.size,R=_.sizeUnit,N=[],V=T/4,O=[-V,V],U=0;U<C;U++)N.push(u.default.createElement(m,{color:x,size:T,x:T/2-T/6,y:T/2-T/6,key:U.toString(),translateTo:O[U],index:U,sizeUnit:R}));return N}({countBalls:2,color:S,size:b,sizeUnit:k})),u.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1"},u.default.createElement("defs",null,u.default.createElement("filter",{id:"goo"},u.default.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),u.default.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -5",result:"goo"}),u.default.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},c=p.default.div.withConfig({displayName:"goo__Wrapper",componentId:"sc-12keask-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit}),d=p.default.div.withConfig({displayName:"goo__BallsWrapper",componentId:"sc-12keask-1"})(a,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit},function(){return(0,h.keyframes)(i)}),m=p.default.div.withConfig({displayName:"goo__Ball",componentId:"sc-12keask-2"})(l,function(g){return""+g.y+g.sizeUnit},function(g){return""+g.x+g.sizeUnit},function(g){return""+g.size/3+g.sizeUnit},function(g){return""+g.size/3+g.sizeUnit},function(g){return g.color},function(g){return(0,h.keyframes)(o,g.translateTo,g.sizeUnit)});v.defaultProps={loading:!0,size:55,color:"#fff",sizeUnit:"px"},v.propTypes={loading:f.default.bool,size:f.default.number,color:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.CombSpinner=void 0;var i=p([`
    to {
        transform: rotate(450deg);
    }
`],[`
    to {
        transform: rotate(450deg);
    }
`]),o=p([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    left: 0;
    width: `,`;
    height: `,`;
    left: `,`;
    transform-origin: center bottom;
    transform: rotate(-90deg);
    background-color: `,`;
    animation: `,` 3s ease infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    left: 0;
    width: `,`;
    height: `,`;
    left: `,`;
    transform-origin: center bottom;
    transform: rotate(-90deg);
    background-color: `,`;
    animation: `,` 3s ease infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.CombSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit,S=d/9;return g&&a.default.createElement(w,{size:d,sizeUnit:b},function(E){for(var k=E.countBars,_=E.color,C=E.size,x=E.sizeUnit,T=[],R=0;R<k;R++)T.push(a.default.createElement(v,{color:_,size:C,key:R.toString(),sizeUnit:x,index:R}));return T}({countBars:S,color:m,size:d,sizeUnit:b}))},w=f.default.div.withConfig({displayName:"comb__Wrapper",componentId:"x9t4ur-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit}),v=f.default.div.withConfig({displayName:"comb__Bar",componentId:"x9t4ur-1"})(s,function(c){return""+c.size/60+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return""+9*c.index+c.sizeUnit},function(c){return c.color},function(){return(0,u.keyframes)(i)},function(c){return .05*c.index});y.defaultProps={loading:!0,size:100,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.PongSpinner=void 0;var i=w([`
    0% {
        top: `,"",`;
    }
    50% {
        top: `,"",`;
    }
    100% {
        top: `,"",`;
    }
`],[`
    0% {
        top: `,"",`;
    }
    50% {
        top: `,"",`;
    }
    100% {
        top: `,"",`;
    }
`]),o=w([`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`; 
    }
    50% {
        top: `,"",`;
        left: `,"",`; 
    }
    75% {
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`; 
    }
`],[`
    0% {
        top: `,"",`;
        left: `,"",`;
    }
    25% {
        top: `,"",`;
        left: `,"",`; 
    }
    50% {
        top: `,"",`;
        left: `,"",`; 
    }
    75% {
        top: `,"",`;
        left: `,"",`;
    }
    100% {
        top: `,"",`;
        left: `,"",`; 
    }
`]),s=w([`
    position: relative;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
`]),a=w([`
    position: absolute;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 2s linear infinite;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    animation: `,` 2s linear infinite;
`]),l=w([`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    left: `,`;
    right: `,`;
    border-radius: 4px;
    animation: `,` 2s linear infinite;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    left: `,`;
    right: `,`;
    border-radius: 4px;
    animation: `,` 2s linear infinite;
`]),u=y(r(0)),f=y(r(1)),h=r(2),p=y(h);function y(g){return g&&g.__esModule?g:{default:g}}function w(g,b){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(b)}}))}var v=n.PongSpinner=function(g){var b=g.size,S=g.color,E=g.loading,k=g.sizeUnit;return E&&u.default.createElement(c,{size:b,sizeUnit:k},u.default.createElement(m,{left:!0,color:S,size:b,sizeUnit:k}),u.default.createElement(d,{color:S,size:b,sizeUnit:k}),u.default.createElement(m,{right:!0,color:S,size:b,sizeUnit:k}))},c=p.default.div.withConfig({displayName:"pong__Wrapper",componentId:"sc-1lbqo08-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size/1.75+g.sizeUnit}),d=p.default.div.withConfig({displayName:"pong__Ball",componentId:"sc-1lbqo08-1"})(a,function(g){return""+g.size/8+g.sizeUnit},function(g){return""+g.size/8+g.sizeUnit},function(g){return g.color},function(g){return function(b){return(0,h.keyframes)(o,b.size/3.5-b.size/8,b.sizeUnit,b.size/12,b.sizeUnit,b.size/3.5,b.sizeUnit,b.size-b.size/8,b.sizeUnit,b.size/1.75-b.size/8,b.sizeUnit,b.size/12,b.sizeUnit,b.size/3.5,b.sizeUnit,b.size-b.size/8,b.sizeUnit,b.size/3.5-b.size/8,b.sizeUnit,b.size/12,b.sizeUnit)}(g)}),m=p.default.div.withConfig({displayName:"pong__Player",componentId:"sc-1lbqo08-2"})(l,function(g){return""+g.size/12+g.sizeUnit},function(g){return""+g.size/3+g.sizeUnit},function(g){return g.color},function(g){return g.left?0:g.size},function(g){return g.right?0:g.size},function(g){return function(b){return(0,h.keyframes)(i,b.left?0:b.size/3.5,b.sizeUnit,b.left?b.size/3.5:0,b.sizeUnit,b.left?0:b.size/3.5,b.sizeUnit)}(g)});v.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:f.default.bool,size:f.default.number,color:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RainbowSpinner=void 0;var i=p([`
    0% {
        border-width: 10`,`; 
    }
    25% {
        border-width: 3`,`; 
    }
    50% {
        transform: rotate(115deg); 
        border-width: 10`,`;
    }
    75% {
        border-width: 3`,`;
    }
    100% {
        border-width: 10`,`;
    }
`],[`
    0% {
        border-width: 10`,`; 
    }
    25% {
        border-width: 3`,`; 
    }
    50% {
        transform: rotate(115deg); 
        border-width: 10`,`;
    }
    75% {
        border-width: 3`,`;
    }
    100% {
        border-width: 10`,`;
    }
`]),o=p([`
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=p([`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    border-style: solid;
    border-top-color: `,`;
    border-right-color: `,`;
    border-left-color: transparent;
    border-bottom-color: transparent;
    box-sizing: border-box;
    transform: rotate(-200deg);
    animation: `,` 3s ease-in-out infinite;
`],[`
    width: `,`;
    height: `,`;
    border-radius: 50%;
    border-style: solid;
    border-top-color: `,`;
    border-right-color: `,`;
    border-left-color: transparent;
    border-bottom-color: transparent;
    box-sizing: border-box;
    transform: rotate(-200deg);
    animation: `,` 3s ease-in-out infinite;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.RainbowSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:d,sizeUnit:b},a.default.createElement(v,{size:d,color:m,sizeUnit:b}))},w=f.default.div.withConfig({displayName:"rainbow__Wrapper",componentId:"sc-1ugdhww-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit}),v=f.default.div.withConfig({displayName:"rainbow__Line",componentId:"sc-1ugdhww-1"})(s,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit},function(c){return c.color},function(c){return c.color},function(c){return(0,u.keyframes)(i,c.sizeUnit,c.sizeUnit,c.sizeUnit,c.sizeUnit,c.sizeUnit)});y.defaultProps={loading:!0,size:50,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.RingSpinner=void 0;var i=y([`
    0% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
    50%, 100% {
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
`],[`
    0% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
    50%, 100% {
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
`]),o=y([`
    0%, 50% { 
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
    100% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
`],[`
    0%, 50% { 
        box-shadow: inset 0 0 0 0 `,`;
        opacity: 0;
    }
    100% { 
        box-shadow: inset 0 0 0 `,""," ",`;
        opacity: 1;
    }
`]),s=y([`
    width: `,`;
    height: `,`;
`],[`
    width: `,`;
    height: `,`;
`]),a=y([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    &:before,
    &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        border-radius: 50%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    &:before {
        box-shadow: `,`;
        animation-name: `,`;
    }
    &:after {
        box-shadow: 0 0 0 0 `,`;
        animation-name: `,`;
    }
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
    &:before,
    &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        border-radius: 50%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }
    &:before {
        box-shadow: `,`;
        animation-name: `,`;
    }
    &:after {
        box-shadow: 0 0 0 0 `,`;
        animation-name: `,`;
    }
`]),l=p(r(0)),u=p(r(1)),f=r(2),h=p(f);function p(d){return d&&d.__esModule?d:{default:d}}function y(d,m){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(m)}}))}var w=n.RingSpinner=function(d){var m=d.size,g=d.color,b=d.loading,S=d.sizeUnit;return b&&l.default.createElement(v,{size:m,sizeUnit:S},l.default.createElement(c,{size:m,color:g,sizeUnit:S}))},v=h.default.div.withConfig({displayName:"ring__Wrapper",componentId:"sc-1ki0q4s-0"})(s,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),c=h.default.div.withConfig({displayName:"ring__Circle",componentId:"sc-1ki0q4s-1"})(a,function(d){return"inset 0 0 0 "+d.size/10+d.sizeUnit+" "+d.color},function(d){return(0,f.keyframes)(i,d.size/10,d.sizeUnit,d.color,d.color)},function(d){return d.color},function(d){return(0,f.keyframes)(o,d.color,d.size/10,d.sizeUnit,d.color)});w.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.HoopSpinner=void 0;var i=p([`
    0% {
        opacity: 0;
        border-color: `,`;
        transform: `,`;
    }
    40% {
        opacity: 1;
        transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: `,`;
    }
`],[`
    0% {
        opacity: 0;
        border-color: `,`;
        transform: `,`;
    }
    40% {
        opacity: 1;
        transform: rotateX(0deg) rotateY(20deg) translateZ(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: `,`;
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: 600px;
    transform-style: perserve-3d;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    perspective: 600px;
    transform-style: perserve-3d;
`]),s=p([`
    position: absolute;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-radius: 50%;
    background-color: transparent;
    transform-style: perserve-3d;
    transform: scale(0) rotateX(60deg);
    opacity: `,`;
    animation: `,` 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite;
    animation-delay: `,`ms;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border: `," solid ",`;
    border-radius: 50%;
    background-color: transparent;
    transform-style: perserve-3d;
    transform: scale(0) rotateX(60deg);
    opacity: `,`;
    animation: `,` 3s cubic-bezier(0.67, 0.08, 0.46, 1.5) infinite;
    animation-delay: `,`ms;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.HoopSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:d,sizeUnit:b},function(S){for(var E=S.countBallsInLine,k=S.color,_=S.size,C=S.sizeUnit,x=[],T=0,R=0;R<E;R++)x.push(a.default.createElement(v,{color:k,size:_,key:T.toString(),index:R,sizeUnit:C})),T++;return x}({countBallsInLine:6,color:m,size:d,sizeUnit:b}))},w=f.default.div.withConfig({displayName:"hoop__Wrapper",componentId:"sc-6dao9o-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=f.default.div.withConfig({displayName:"hoop__Ball",componentId:"sc-6dao9o-1"})(s,function(c){return""+c.size/1.5+c.sizeUnit},function(c){return""+c.size/1.5+c.sizeUnit},function(c){return""+c.size/5+c.sizeUnit},function(c){return c.color},function(c){return 1-.2*c.index},function(c){return(0,u.keyframes)(i,c.color,"rotateX(65deg) rotateY(45deg) translateZ(-"+1.5*c.size+c.sizeUnit+") scale(0.1)","rotateX(65deg) rotateY(-45deg) translateZ(-"+1.5*c.size+c.sizeUnit+") scale(0.1)")},function(c){return 200*c.index});y.defaultProps={loading:!0,size:45,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FlapperSpinner=void 0;var i=p([`
    100% {
        opacity: 0;
        transform: translateX(`,"",`)
        translateY(`,"",`) scale(1);
   }
`],[`
    100% {
        opacity: 0;
        transform: translateX(`,"",`)
        translateY(`,"",`) scale(1);
   }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`) scale(0);
    animation: `,` 0.8s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: `,`;
    transform: translateX(`,`)
        translateY(`,`) scale(0);
    animation: `,` 0.8s linear infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.FlapperSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit,S=d/2,E=d/1.5;return g&&a.default.createElement(w,{size:d,sizeUnit:b},function(k){for(var _=k.countBalls,C=k.radius,x=k.angle,T=k.color,R=k.size,N=k.ballSize,V=k.sizeUnit,O=[],U=N/2,j=0;j<_;j++){var P=Math.sin(x*j*(Math.PI/180))*C-U,A=Math.cos(x*j*(Math.PI/180))*C-U;O.push(a.default.createElement(v,{color:T,ballSize:N,size:R,x:P,y:A,key:j.toString(),index:j,sizeUnit:V}))}return O}({countBalls:7,radius:S,angle:360/7,color:m,size:d,ballSize:E,sizeUnit:b}))},w=f.default.div.withConfig({displayName:"flapper__Wrapper",componentId:"kzbmuk-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=f.default.div.withConfig({displayName:"flapper__Ball",componentId:"kzbmuk-1"})(s,function(c){return""+c.size/2+c.sizeUnit},function(c){return""+c.size/2+c.sizeUnit},function(c){return""+c.ballSize+c.sizeUnit},function(c){return""+c.ballSize+c.sizeUnit},function(c){return c.color},function(c){return""+c.x+c.sizeUnit},function(c){return""+c.y+c.sizeUnit},function(c){return function(d){return(0,u.keyframes)(i,d.x,d.sizeUnit,d.y,d.sizeUnit)}(c)},function(c){return .1*c.index});y.defaultProps={loading:!0,size:30,color:"#00ff89",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MagicSpinner=void 0;var i=p([`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`],[`
    100% {
        transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    overflow: hidden;
`]),s=p([`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid transparent;
    border-top-color: `,`;
    animation: `,` 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid transparent;
    border-top-color: `,`;
    animation: `,` 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.MagicSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit,S=d/12;return g&&a.default.createElement(w,{size:d,sizeUnit:b},function(E){for(var k=E.countBalls,_=E.color,C=E.size,x=E.sizeUnit,T=[],R=0;R<k;R++)T.push(a.default.createElement(v,{color:_,countBalls:k,size:C,key:R.toString(),index:R,sizeUnit:x}));return T}({countBalls:S,color:m,size:d,sizeUnit:b}))},w=f.default.div.withConfig({displayName:"magic__Wrapper",componentId:"dtlj8d-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=f.default.div.withConfig({displayName:"magic__Ball",componentId:"dtlj8d-1"})(s,function(c){return""+c.index*(c.size/c.countBalls)+c.sizeUnit},function(c){return""+c.index*(c.size/c.countBalls)+c.sizeUnit},function(c){return c.color},function(){return(0,u.keyframes)(i)},function(c){return .05*c.index});y.defaultProps={loading:!0,size:70,color:"#fff",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.JellyfishSpinner=void 0;var i=p([`
    0% {
        transform: `,`;
    }
    50% {
        transform: `,`;
    }
    100% {
        transform: `,`;
    }
`],[`
    0% {
        transform: `,`;
    }
    50% {
        transform: `,`;
    }
    100% {
        transform: `,`;
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    width: `,`;
    height: `,`;
    border: 2px solid `,`;
    border-radius: 50%;
    background-color: transparent;
    animation: `,` 2.5s ease infinite;
    animation-delay: `,`ms;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    border: 2px solid `,`;
    border-radius: 50%;
    background-color: transparent;
    animation: `,` 2.5s ease infinite;
    animation-delay: `,`ms;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(c){return c&&c.__esModule?c:{default:c}}function p(c,d){return Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(d)}}))}var y=n.JellyfishSpinner=function(c){var d=c.size,m=c.color,g=c.loading,b=c.sizeUnit;return g&&a.default.createElement(w,{size:d,sizeUnit:b},function(S){for(var E=S.countBalls,k=S.color,_=S.size,C=S.sizeUnit,x=[],T=0,R=0;R<E;R++)x.push(a.default.createElement(v,{color:k,size:_,countRings:E,key:T.toString(),index:R,sizeUnit:C})),T++;return x}({countBalls:6,color:m,size:d,sizeUnit:b}))},w=f.default.div.withConfig({displayName:"jellyfish__Wrapper",componentId:"qquojd-0"})(o,function(c){return""+c.size+c.sizeUnit},function(c){return""+c.size+c.sizeUnit}),v=f.default.div.withConfig({displayName:"jellyfish__Ring",componentId:"qquojd-1"})(s,function(c){return""+c.index*(c.size/c.countRings)+c.sizeUnit},function(c){return""+c.index*(c.size/c.countRings)/2+c.sizeUnit},function(c){return c.color},function(c){return(0,u.keyframes)(i,"translateY("+-c.size/5+c.sizeUnit+");","translateY("+c.size/4+c.sizeUnit+")","translateY("+-c.size/5+c.sizeUnit+")")},function(c){return 100*c.index});y.defaultProps={loading:!0,size:60,color:"#4b4c56",sizeUnit:"px"},y.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TraceSpinner=void 0;var i=w([`
    0% {
        border: `,""," solid ",`;
    }
    25% {
        border: `,""," solid ",`;
    }
    50% {
        border: `,""," solid ",`;
    }
    100% {
        border: `,""," solid ",`;
    }
`],[`
    0% {
        border: `,""," solid ",`;
    }
    25% {
        border: `,""," solid ",`;
    }
    50% {
        border: `,""," solid ",`;
    }
    100% {
        border: `,""," solid ",`;
    }
`]),o=w([`
    25% {
        transform: translate(`,"",`, 0);
    }
    50% {
        transform: translate(`,"",", ","",`);
    }
    75% {
        transform: translate(0, `,"",`);
    }
    100% {
        transform: translate(0, 0);
    }
`],[`
    25% {
        transform: translate(`,"",`, 0);
    }
    50% {
        transform: translate(`,"",", ","",`);
    }
    75% {
        transform: translate(0, `,"",`);
    }
    100% {
        transform: translate(0, 0);
    }
`]),s=w([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    transform: rotate(45deg);
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    transform: rotate(45deg);
`]),a=w([`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: `," solid ",`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    animation-delay: `,`s;
`],[`
    position: absolute;
    top: `,`;
    left: `,`;
    width: `,`;
    height: `,`;
    border-radius: 50%;
    background-color: transparent;
    border: `," solid ",`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;
    animation-delay: `,`s;
`]),l=w([`
    top: 0;
    left: 0;
    border-color: `,`;
    background-color: `,`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    z-index: 10;
`],[`
    top: 0;
    left: 0;
    border-color: `,`;
    background-color: `,`;
    animation: `,` 4s cubic-bezier(0.75, 0, 0.5, 1) infinite;
    z-index: 10;
`]),u=y(r(0)),f=y(r(1)),h=r(2),p=y(h);function y(g){return g&&g.__esModule?g:{default:g}}function w(g,b){return Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(b)}}))}var v=n.TraceSpinner=function(g){var b=g.size,S=g.frontColor,E=g.backColor,k=g.loading,_=g.sizeUnit;return k&&u.default.createElement(c,{size:b,sizeUnit:_},function(C){for(var x=C.countBalls,T=C.frontColor,R=C.backColor,N=C.size,V=C.sizeUnit,O=[],U=[0,1,3,2],j=0,P=0;P<x/2;P++)for(var A=0;A<x/2;A++)O.push(u.default.createElement(d,{frontColor:T,backColor:R,size:N,x:A*(N/2+N/10),y:P*(N/2+N/10),key:U[j].toString(),index:U[j],sizeUnit:V})),j++;return O}({countBalls:4,frontColor:S,backColor:E,size:b,sizeUnit:_}),u.default.createElement(m,{frontColor:S,size:b,sizeUnit:_}))},c=p.default.div.withConfig({displayName:"trace__Wrapper",componentId:"k17r81-0"})(s,function(g){return""+g.size+g.sizeUnit},function(g){return""+g.size+g.sizeUnit}),d=p.default.div.withConfig({displayName:"trace__Ball",componentId:"k17r81-1"})(a,function(g){return""+g.y+g.sizeUnit},function(g){return""+g.x+g.sizeUnit},function(g){return""+g.size/5+g.sizeUnit},function(g){return""+g.size/5+g.sizeUnit},function(g){return""+g.size/10+g.sizeUnit},function(g){return g.backColor},function(g){return(0,h.keyframes)(i,g.size/10,g.sizeUnit,g.backColor,g.size/10,g.sizeUnit,g.frontColor,g.size/10,g.sizeUnit,g.backColor,g.size/10,g.sizeUnit,g.backColor)},function(g){return 1*g.index}),m=(0,p.default)(d)(l,function(g){return g.frontColor},function(g){return g.frontColor},function(g){return(0,h.keyframes)(o,g.size/2+g.size/10,g.sizeUnit,g.size/2+g.size/10,g.sizeUnit,g.size/2+g.size/10,g.sizeUnit,g.size/2+g.size/10,g.sizeUnit)});v.defaultProps={loading:!0,size:35,frontColor:"#00ff89",backColor:"#4b4c56",sizeUnit:"px"},v.propTypes={loading:f.default.bool,size:f.default.number,frontColor:f.default.string,backColor:f.default.string,sizeUnit:f.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ClassicSpinner=void 0;var i=p([`
    0% {
        opacity: 1
    }
    100% { 
        opacity: 0;
    }
`],[`
    0% {
        opacity: 1
    }
    100% { 
        opacity: 0;
    }
`]),o=p([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
`]),s=p([`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    opacity: 0.05;
    transform: `,`
        `,`;
    animation: `," ",`s linear infinite;
    animation-delay: `,`s;
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    background-color: `,`;
    opacity: 0.05;
    transform: `,`
        `,`;
    animation: `," ",`s linear infinite;
    animation-delay: `,`s;
`]),a=h(r(0)),l=h(r(1)),u=r(2),f=h(u);function h(d){return d&&d.__esModule?d:{default:d}}function p(d,m){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(m)}}))}var y=(0,u.keyframes)(i),w=n.ClassicSpinner=function(d){var m=d.size,g=d.color,b=d.loading,S=d.sizeUnit,E=m/2;return b&&a.default.createElement(v,{size:m,sizeUnit:S},function(k){for(var _=k.countBars,C=k.color,x=k.size,T=k.barSize,R=k.sizeUnit,N=[],V=0;V<_;V++){var O=360/_*V,U=-x/2;N.push(a.default.createElement(c,{countBars:_,color:C,barSize:T,size:x,rotate:O,translate:U,key:V.toString(),index:V,sizeUnit:R}))}return N}({countBars:16,radius:E,color:g,size:m,sizeUnit:S}))},v=f.default.div.withConfig({displayName:"classic__Wrapper",componentId:"sc-1ycp7u6-0"})(o,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit}),c=f.default.div.withConfig({displayName:"classic__Bar",componentId:"sc-1ycp7u6-1"})(s,function(d){return""+d.size/10+d.sizeUnit},function(d){return""+d.size/4+d.sizeUnit},function(d){return d.color},function(d){return"rotate("+d.rotate+"deg)"},function(d){return"translate(0, "+d.translate+d.sizeUnit+")"},y,function(d){return .06*d.countBars},function(d){return .06*d.index});w.defaultProps={loading:!0,size:30,color:"#fff",sizeUnit:"px"},w.propTypes={loading:l.default.bool,size:l.default.number,color:l.default.string,sizeUnit:l.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.WhisperSpinner=void 0;var i=y([`
    0% {
        transform: scale(1, 1);
        opacity: 1;
        background-color: `,`;
    }
    100% {
        transform: scale(0, 0);
        opacity: 0;
        background-color: `,`;
    }
`],[`
    0% {
        transform: scale(1, 1);
        opacity: 1;
        background-color: `,`;
    }
    100% {
        transform: scale(0, 0);
        opacity: 0;
        background-color: `,`;
    }
`]),o=y([`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
`]),s=y([`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 10s infinite;
`],[`
    position: relative;
    width: `,`;
    height: `,`;
    animation: `,` 10s infinite;
`]),a=y([`
    float: left;
    clear: right;
    margin: `,`;
    width: `,`;
    height: `,`;
    border-radius: 2px;
    background-color: `,`;
    animation-name: `,`;
    animation-direction: alternate;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    &:nth-child(1) {
        animation-delay: 200ms;
    }
    &:nth-child(2) {
        animation-delay: 400ms;
    }
    &:nth-child(3) {
        animation-delay: 600ms;
    }
    &:nth-child(4) {
        animation-delay: 400ms;
    }
    &:nth-child(5) {
        animation-delay: 600ms;
    }
    &:nth-child(6) {
        animation-delay: 800ms;
    }
    &:nth-child(7) {
        animation-delay: 600ms;
    }
    &:nth-child(8) {
        animation-delay: 800ms;
    }
    &:nth-child(9) {
        animation-delay: 1s;
    }
`],[`
    float: left;
    clear: right;
    margin: `,`;
    width: `,`;
    height: `,`;
    border-radius: 2px;
    background-color: `,`;
    animation-name: `,`;
    animation-direction: alternate;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    &:nth-child(1) {
        animation-delay: 200ms;
    }
    &:nth-child(2) {
        animation-delay: 400ms;
    }
    &:nth-child(3) {
        animation-delay: 600ms;
    }
    &:nth-child(4) {
        animation-delay: 400ms;
    }
    &:nth-child(5) {
        animation-delay: 600ms;
    }
    &:nth-child(6) {
        animation-delay: 800ms;
    }
    &:nth-child(7) {
        animation-delay: 600ms;
    }
    &:nth-child(8) {
        animation-delay: 800ms;
    }
    &:nth-child(9) {
        animation-delay: 1s;
    }
`]),l=p(r(0)),u=p(r(1)),f=r(2),h=p(f);function p(d){return d&&d.__esModule?d:{default:d}}function y(d,m){return Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(m)}}))}var w=n.WhisperSpinner=function(d){var m=d.size,g=d.frontColor,b=d.backColor,S=d.loading,E=d.sizeUnit;return S&&l.default.createElement(v,{size:m,sizeUnit:E},function(k){for(var _=k.countBallsInLine,C=k.frontColor,x=k.backColor,T=k.size,R=k.sizeUnit,N=[],V=0,O=0;O<_;O++)for(var U=0;U<_;U++)N.push(l.default.createElement(c,{frontColor:C,backColor:x,size:T,key:V.toString(),index:V,sizeUnit:R})),V++;return N}({countBallsInLine:3,frontColor:g,backColor:b,size:m,sizeUnit:E}))},v=h.default.div.withConfig({displayName:"whisper__Wrapper",componentId:"k8uff3-0"})(s,function(d){return""+d.size+d.sizeUnit},function(d){return""+d.size+d.sizeUnit},function(){return(0,f.keyframes)(o)}),c=h.default.div.withConfig({displayName:"whisper__Ball",componentId:"k8uff3-1"})(a,function(d){return""+d.size/15+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return""+d.size/5+d.sizeUnit},function(d){return d.frontColor},function(d){return(0,f.keyframes)(i,d.backColor,d.frontColor)});w.defaultProps={loading:!0,size:50,frontColor:"#4b4c56",backColor:"#00ff89",sizeUnit:"px"},w.propTypes={loading:u.default.bool,size:u.default.number,frontColor:u.default.string,backColor:u.default.string,sizeUnit:u.default.string}},function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MetroSpinner=void 0;var i=y([`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
`],[`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
`]),o=y([`
    `,`% {
        opacity: 0;
    }
    `,`% {
        opacity: 1;
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    100% {
        transform: `,`;
        opacity: 1;
    }
`],[`
    `,`% {
        opacity: 0;
    }
    `,`% {
        opacity: 1;
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    `,`% {
        transform: `,`;
    }
    100% {
        transform: `,`;
        opacity: 1;
    }
`]),s=y([`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 3s infinite ease-in;
`],[`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: `,`;
    height: `,`;
    animation: `,` 3s infinite ease-in;
`]),a=y([`
    position: absolute;
    width: `,`;
    height: `,`;
    animation: `,` 2s infinite linear;
    transform: `,`;
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0%;
        width: `,`;
        height: `,`;
        background-color: `,`;
        transform: translateX(-50%);
        border-radius: 50%;
    }
`],[`
    position: absolute;
    width: `,`;
    height: `,`;
    animation: `,` 2s infinite linear;
    transform: `,`;
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0%;
        width: `,`;
        height: `,`;
        background-color: `,`;
        transform: translateX(-50%);
        border-radius: 50%;
    }
`]),l=p(r(0)),u=p(r(1)),f=r(2),h=p(f);function p(m){return m&&m.__esModule?m:{default:m}}function y(m,g){return Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(g)}}))}var w=(0,f.keyframes)(i),v=n.MetroSpinner=function(m){var g=m.size,b=m.color,S=m.loading,E=m.sizeUnit,k=g/2,_=g/8;return S&&l.default.createElement(c,{size:g,sizeUnit:E},function(C){for(var x=C.countBalls,T=C.radius,R=C.angle,N=C.color,V=C.size,O=C.ballSize,U=C.sizeUnit,j=[],P=O/2,A=0;A<x;A++){var F=Math.sin(R*A*(Math.PI/180))*T-P,Q=Math.cos(R*A*(Math.PI/180))*T-P;j.push(l.default.createElement(d,{countBalls:x,color:N,ballSize:O,size:V,sizeUnit:U,x:F,y:Q,key:A.toString(),index:A+1}))}return j}({countBalls:9,radius:k,angle:40,color:b,size:g,ballSize:_,sizeUnit:E}))},c=h.default.div.withConfig({displayName:"metro__Wrapper",componentId:"sc-2iqssn-0"})(s,function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size+m.sizeUnit},w),d=h.default.div.withConfig({displayName:"metro__Ball",componentId:"sc-2iqssn-1"})(a,function(m){return""+m.size+m.sizeUnit},function(m){return""+m.size+m.sizeUnit},function(m){return(0,f.keyframes)(o,m.size/2/m.countBalls*(m.index-1)/m.size*100,(m.size/2/m.countBalls+1e-4)*(m.index-1)/m.size*100,"rotate("+(0-360/m.countBalls*(m.index-2))+"deg)",(m.size/2/m.countBalls*(m.index-0)+2)/m.size*100,"rotate("+(0-360/m.countBalls*(m.index-1))+"deg)",(m.size/2+m.size/2/m.countBalls*(m.index-0)+2)/m.size*100,"rotate("+(0-360/m.countBalls*(m.index-1))+"deg)","rotate("+(0-360/m.countBalls*(m.countBalls-1))+"deg)")},function(m){return"rotate("+360/m.countBalls*m.index+"deg)"},function(m){return""+m.ballSize+m.sizeUnit},function(m){return""+m.ballSize+m.sizeUnit},function(m){return""+m.color});v.defaultProps={loading:!0,size:40,color:"#fff",sizeUnit:"px"},v.propTypes={loading:u.default.bool,size:u.default.number,color:u.default.string,sizeUnit:u.default.string}}]))})(iR);function Je(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function L(){return L=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},L.apply(this,arguments)}function Cx(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=Cx(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function dr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=Cx(t))&&(r&&(r+=" "),r+=e);return r}function Tc(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function Fr(t,e,n={clone:!0}){const r=n.clone?L({},t):t;return Tc(t)&&Tc(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(Tc(e[i])&&i in t&&Tc(t[i])?r[i]=Fr(t[i],e[i],n):r[i]=e[i])}),r}function ta(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function Ie(t){if(typeof t!="string")throw new Error(ta(7));return t.charAt(0).toUpperCase()+t.slice(1)}function g2(...t){return t.reduce((e,n)=>n==null?e:function(...i){e.apply(this,i),n.apply(this,i)},()=>{})}function y2(t,e=166){let n;function r(...i){const o=()=>{t.apply(this,i)};clearTimeout(n),n=setTimeout(o,e)}return r.clear=()=>{clearTimeout(n)},r}function v2(t,e){return()=>null}function w2(t,e){return I.exports.isValidElement(t)&&e.indexOf(t.type.muiName)!==-1}function Ms(t){return t&&t.ownerDocument||document}function b2(t){return Ms(t).defaultView||window}function S2(t,e){return()=>null}function jf(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const E2=typeof window<"u"?I.exports.useLayoutEffect:I.exports.useEffect,na=E2;let $w=0;function k2(t){const[e,n]=I.exports.useState(t),r=t||e;return I.exports.useEffect(()=>{e==null&&($w+=1,n(`mui-${$w}`))},[e]),r}const Dw=Hs["useId"];function Tx(t){if(Dw!==void 0){const e=Dw();return t!=null?t:e}return k2(t)}function x2(t,e,n,r,i){return null}function Ix({controlled:t,default:e,name:n,state:r="value"}){const{current:i}=I.exports.useRef(t!==void 0),[o,s]=I.exports.useState(e),a=i?t:o,l=I.exports.useCallback(u=>{i||s(u)},[]);return[a,l]}function my(t){const e=I.exports.useRef(t);return na(()=>{e.current=t}),I.exports.useCallback((...n)=>(0,e.current)(...n),[])}function Bi(...t){return I.exports.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{jf(n,e)})},t)}let Wd=!0,og=!1,Mw;const _2={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function C2(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&_2[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function T2(t){t.metaKey||t.altKey||t.ctrlKey||(Wd=!0)}function Ap(){Wd=!1}function I2(){this.visibilityState==="hidden"&&og&&(Wd=!0)}function z2(t){t.addEventListener("keydown",T2,!0),t.addEventListener("mousedown",Ap,!0),t.addEventListener("pointerdown",Ap,!0),t.addEventListener("touchstart",Ap,!0),t.addEventListener("visibilitychange",I2,!0)}function P2(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return Wd||C2(e)}function zx(){const t=I.exports.useCallback(i=>{i!=null&&z2(i.ownerDocument)},[]),e=I.exports.useRef(!1);function n(){return e.current?(og=!0,window.clearTimeout(Mw),Mw=window.setTimeout(()=>{og=!1},100),e.current=!1,!0):!1}function r(i){return P2(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:r,onBlur:n,ref:t}}const O2=t=>{const e=I.exports.useRef({});return I.exports.useEffect(()=>{e.current=t}),e.current},Px=O2;function R2(t,e){const n=L({},e);return Object.keys(t).forEach(r=>{n[r]===void 0&&(n[r]=t[r])}),n}function xa(t,e,n){const r={};return Object.keys(t).forEach(i=>{r[i]=t[i].reduce((o,s)=>(s&&(o.push(e(s)),n&&n[s]&&o.push(n[s])),o),[]).join(" ")}),r}const Lw=t=>t,A2=()=>{let t=Lw;return{configure(e){t=e},generate(e){return t(e)},reset(){t=Lw}}},N2=A2(),Ox=N2,U2={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Ho(t,e,n="Mui"){const r=U2[e];return r?`${n}-${r}`:`${Ox.generate(t)}-${e}`}function _a(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=Ho(t,i,n)}),r}function Rx(t){return typeof t=="string"}function ol(t,e,n){return Rx(t)?e:L({},e,{ownerState:L({},e.ownerState,n)})}function $2(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(r=>r.match(/^on[A-Z]/)&&typeof t[r]=="function"&&!e.includes(r)).forEach(r=>{n[r]=t[r]}),n}function D2(t,e){return typeof t=="function"?t(e):t}function jw(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function M2(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:o}=t;if(!e){const y=dr(i==null?void 0:i.className,r==null?void 0:r.className,o,n==null?void 0:n.className),w=L({},n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),v=L({},n,i,r);return y.length>0&&(v.className=y),Object.keys(w).length>0&&(v.style=w),{props:v,internalRef:void 0}}const s=$2(L({},i,r)),a=jw(r),l=jw(i),u=e(s),f=dr(u==null?void 0:u.className,n==null?void 0:n.className,o,i==null?void 0:i.className,r==null?void 0:r.className),h=L({},u==null?void 0:u.style,n==null?void 0:n.style,i==null?void 0:i.style,r==null?void 0:r.style),p=L({},u,n,l,a);return f.length>0&&(p.className=f),Object.keys(h).length>0&&(p.style=h),{props:p,internalRef:u.ref}}const L2=["elementType","externalSlotProps","ownerState"];function sg(t){var e;const{elementType:n,externalSlotProps:r,ownerState:i}=t,o=Je(t,L2),s=D2(r,i),{props:a,internalRef:l}=M2(L({},o,{externalSlotProps:s})),u=Bi(l,s==null?void 0:s.ref,(e=t.additionalProps)==null?void 0:e.ref);return ol(n,L({},a,{ref:u}),i)}function j2(t){const{badgeContent:e,invisible:n=!1,max:r=99,showZero:i=!1}=t,o=Px({badgeContent:e,max:r});let s=n;n===!1&&e===0&&!i&&(s=!0);const{badgeContent:a,max:l=r}=s?o:t,u=a&&Number(a)>l?`${l}+`:a;return{badgeContent:a,invisible:s,max:l,displayValue:u}}function F2(t){return Ho("MuiBadge",t)}_a("MuiBadge",["root","badge","invisible"]);const B2=["badgeContent","component","children","invisible","max","slotProps","slots","showZero"],V2=t=>{const{invisible:e}=t;return xa({root:["root"],badge:["badge",e&&"invisible"]},F2,void 0)},W2=I.exports.forwardRef(function(e,n){const{component:r,children:i,max:o=99,slotProps:s={},slots:a={},showZero:l=!1}=e,u=Je(e,B2),{badgeContent:f,max:h,displayValue:p,invisible:y}=j2(L({},e,{max:o})),w=L({},e,{badgeContent:f,invisible:y,max:h,showZero:l}),v=V2(w),c=r||a.root||"span",d=sg({elementType:c,externalSlotProps:s.root,externalForwardedProps:u,additionalProps:{ref:n},ownerState:w,className:v.root}),m=a.badge||"span",g=sg({elementType:m,externalSlotProps:s.badge,ownerState:w,className:v.badge});return Ao(c,L({},d,{children:[i,ee(m,L({},g,{children:p}))]}))}),H2=W2;function Fw(t){return t.substring(2).toLowerCase()}function q2(t,e){return e.documentElement.clientWidth<t.clientX||e.documentElement.clientHeight<t.clientY}function j6(t){const{children:e,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:i,touchEvent:o="onTouchEnd"}=t,s=I.exports.useRef(!1),a=I.exports.useRef(null),l=I.exports.useRef(!1),u=I.exports.useRef(!1);I.exports.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const f=Bi(e.ref,a),h=my(w=>{const v=u.current;u.current=!1;const c=Ms(a.current);if(!l.current||!a.current||"clientX"in w&&q2(w,c))return;if(s.current){s.current=!1;return}let d;w.composedPath?d=w.composedPath().indexOf(a.current)>-1:d=!c.documentElement.contains(w.target)||a.current.contains(w.target),!d&&(n||!v)&&i(w)}),p=w=>v=>{u.current=!0;const c=e.props[w];c&&c(v)},y={ref:f};return o!==!1&&(y[o]=p(o)),I.exports.useEffect(()=>{if(o!==!1){const w=Fw(o),v=Ms(a.current),c=()=>{s.current=!0};return v.addEventListener(w,h),v.addEventListener("touchmove",c),()=>{v.removeEventListener(w,h),v.removeEventListener("touchmove",c)}}},[h,o]),r!==!1&&(y[r]=p(r)),I.exports.useEffect(()=>{if(r!==!1){const w=Fw(r),v=Ms(a.current);return v.addEventListener(w,h),()=>{v.removeEventListener(w,h)}}},[h,r]),ee(I.exports.Fragment,{children:I.exports.cloneElement(e,y)})}var cn="top",Fn="bottom",Bn="right",fn="left",gy="auto",Iu=[cn,Fn,Bn,fn],ra="start",Ql="end",K2="clippingParents",Ax="viewport",Xa="popper",G2="reference",Bw=Iu.reduce(function(t,e){return t.concat([e+"-"+ra,e+"-"+Ql])},[]),Nx=[].concat(Iu,[gy]).reduce(function(t,e){return t.concat([e,e+"-"+ra,e+"-"+Ql])},[]),X2="beforeRead",Y2="read",Q2="afterRead",J2="beforeMain",Z2="main",eA="afterMain",tA="beforeWrite",nA="write",rA="afterWrite",iA=[X2,Y2,Q2,J2,Z2,eA,tA,nA,rA];function Er(t){return t?(t.nodeName||"").toLowerCase():null}function Vn(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Uo(t){var e=Vn(t).Element;return t instanceof e||t instanceof Element}function Mn(t){var e=Vn(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function yy(t){if(typeof ShadowRoot>"u")return!1;var e=Vn(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function oA(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},i=e.attributes[n]||{},o=e.elements[n];!Mn(o)||!Er(o)||(Object.assign(o.style,r),Object.keys(i).forEach(function(s){var a=i[s];a===!1?o.removeAttribute(s):o.setAttribute(s,a===!0?"":a)}))})}function sA(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var i=e.elements[r],o=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!Mn(i)||!Er(i)||(Object.assign(i.style,a),Object.keys(o).forEach(function(l){i.removeAttribute(l)}))})}}const aA={name:"applyStyles",enabled:!0,phase:"write",fn:oA,effect:sA,requires:["computeStyles"]};function mr(t){return t.split("-")[0]}var xo=Math.max,Ff=Math.min,ia=Math.round;function ag(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Ux(){return!/^((?!chrome|android).)*safari/i.test(ag())}function oa(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var r=t.getBoundingClientRect(),i=1,o=1;e&&Mn(t)&&(i=t.offsetWidth>0&&ia(r.width)/t.offsetWidth||1,o=t.offsetHeight>0&&ia(r.height)/t.offsetHeight||1);var s=Uo(t)?Vn(t):window,a=s.visualViewport,l=!Ux()&&n,u=(r.left+(l&&a?a.offsetLeft:0))/i,f=(r.top+(l&&a?a.offsetTop:0))/o,h=r.width/i,p=r.height/o;return{width:h,height:p,top:f,right:u+h,bottom:f+p,left:u,x:u,y:f}}function vy(t){var e=oa(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function $x(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&yy(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Yr(t){return Vn(t).getComputedStyle(t)}function lA(t){return["table","td","th"].indexOf(Er(t))>=0}function Yi(t){return((Uo(t)?t.ownerDocument:t.document)||window.document).documentElement}function Hd(t){return Er(t)==="html"?t:t.assignedSlot||t.parentNode||(yy(t)?t.host:null)||Yi(t)}function Vw(t){return!Mn(t)||Yr(t).position==="fixed"?null:t.offsetParent}function uA(t){var e=/firefox/i.test(ag()),n=/Trident/i.test(ag());if(n&&Mn(t)){var r=Yr(t);if(r.position==="fixed")return null}var i=Hd(t);for(yy(i)&&(i=i.host);Mn(i)&&["html","body"].indexOf(Er(i))<0;){var o=Yr(i);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||e&&o.willChange==="filter"||e&&o.filter&&o.filter!=="none")return i;i=i.parentNode}return null}function zu(t){for(var e=Vn(t),n=Vw(t);n&&lA(n)&&Yr(n).position==="static";)n=Vw(n);return n&&(Er(n)==="html"||Er(n)==="body"&&Yr(n).position==="static")?e:n||uA(t)||e}function wy(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function El(t,e,n){return xo(t,Ff(e,n))}function cA(t,e,n){var r=El(t,e,n);return r>n?n:r}function Dx(){return{top:0,right:0,bottom:0,left:0}}function Mx(t){return Object.assign({},Dx(),t)}function Lx(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var fA=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,Mx(typeof e!="number"?e:Lx(e,Iu))};function dA(t){var e,n=t.state,r=t.name,i=t.options,o=n.elements.arrow,s=n.modifiersData.popperOffsets,a=mr(n.placement),l=wy(a),u=[fn,Bn].indexOf(a)>=0,f=u?"height":"width";if(!(!o||!s)){var h=fA(i.padding,n),p=vy(o),y=l==="y"?cn:fn,w=l==="y"?Fn:Bn,v=n.rects.reference[f]+n.rects.reference[l]-s[l]-n.rects.popper[f],c=s[l]-n.rects.reference[l],d=zu(o),m=d?l==="y"?d.clientHeight||0:d.clientWidth||0:0,g=v/2-c/2,b=h[y],S=m-p[f]-h[w],E=m/2-p[f]/2+g,k=El(b,E,S),_=l;n.modifiersData[r]=(e={},e[_]=k,e.centerOffset=k-E,e)}}function hA(t){var e=t.state,n=t.options,r=n.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||!$x(e.elements.popper,i)||(e.elements.arrow=i))}const pA={name:"arrow",enabled:!0,phase:"main",fn:dA,effect:hA,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function sa(t){return t.split("-")[1]}var mA={top:"auto",right:"auto",bottom:"auto",left:"auto"};function gA(t){var e=t.x,n=t.y,r=window,i=r.devicePixelRatio||1;return{x:ia(e*i)/i||0,y:ia(n*i)/i||0}}function Ww(t){var e,n=t.popper,r=t.popperRect,i=t.placement,o=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,f=t.roundOffsets,h=t.isFixed,p=s.x,y=p===void 0?0:p,w=s.y,v=w===void 0?0:w,c=typeof f=="function"?f({x:y,y:v}):{x:y,y:v};y=c.x,v=c.y;var d=s.hasOwnProperty("x"),m=s.hasOwnProperty("y"),g=fn,b=cn,S=window;if(u){var E=zu(n),k="clientHeight",_="clientWidth";if(E===Vn(n)&&(E=Yi(n),Yr(E).position!=="static"&&a==="absolute"&&(k="scrollHeight",_="scrollWidth")),E=E,i===cn||(i===fn||i===Bn)&&o===Ql){b=Fn;var C=h&&E===S&&S.visualViewport?S.visualViewport.height:E[k];v-=C-r.height,v*=l?1:-1}if(i===fn||(i===cn||i===Fn)&&o===Ql){g=Bn;var x=h&&E===S&&S.visualViewport?S.visualViewport.width:E[_];y-=x-r.width,y*=l?1:-1}}var T=Object.assign({position:a},u&&mA),R=f===!0?gA({x:y,y:v}):{x:y,y:v};if(y=R.x,v=R.y,l){var N;return Object.assign({},T,(N={},N[b]=m?"0":"",N[g]=d?"0":"",N.transform=(S.devicePixelRatio||1)<=1?"translate("+y+"px, "+v+"px)":"translate3d("+y+"px, "+v+"px, 0)",N))}return Object.assign({},T,(e={},e[b]=m?v+"px":"",e[g]=d?y+"px":"",e.transform="",e))}function yA(t){var e=t.state,n=t.options,r=n.gpuAcceleration,i=r===void 0?!0:r,o=n.adaptive,s=o===void 0?!0:o,a=n.roundOffsets,l=a===void 0?!0:a,u={placement:mr(e.placement),variation:sa(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Ww(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Ww(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const vA={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:yA,data:{}};var Ic={passive:!0};function wA(t){var e=t.state,n=t.instance,r=t.options,i=r.scroll,o=i===void 0?!0:i,s=r.resize,a=s===void 0?!0:s,l=Vn(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&u.forEach(function(f){f.addEventListener("scroll",n.update,Ic)}),a&&l.addEventListener("resize",n.update,Ic),function(){o&&u.forEach(function(f){f.removeEventListener("scroll",n.update,Ic)}),a&&l.removeEventListener("resize",n.update,Ic)}}const bA={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:wA,data:{}};var SA={left:"right",right:"left",bottom:"top",top:"bottom"};function Qc(t){return t.replace(/left|right|bottom|top/g,function(e){return SA[e]})}var EA={start:"end",end:"start"};function Hw(t){return t.replace(/start|end/g,function(e){return EA[e]})}function by(t){var e=Vn(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Sy(t){return oa(Yi(t)).left+by(t).scrollLeft}function kA(t,e){var n=Vn(t),r=Yi(t),i=n.visualViewport,o=r.clientWidth,s=r.clientHeight,a=0,l=0;if(i){o=i.width,s=i.height;var u=Ux();(u||!u&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:a+Sy(t),y:l}}function xA(t){var e,n=Yi(t),r=by(t),i=(e=t.ownerDocument)==null?void 0:e.body,o=xo(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=xo(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+Sy(t),l=-r.scrollTop;return Yr(i||n).direction==="rtl"&&(a+=xo(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:l}}function Ey(t){var e=Yr(t),n=e.overflow,r=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function jx(t){return["html","body","#document"].indexOf(Er(t))>=0?t.ownerDocument.body:Mn(t)&&Ey(t)?t:jx(Hd(t))}function kl(t,e){var n;e===void 0&&(e=[]);var r=jx(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),o=Vn(r),s=i?[o].concat(o.visualViewport||[],Ey(r)?r:[]):r,a=e.concat(s);return i?a:a.concat(kl(Hd(s)))}function lg(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function _A(t,e){var n=oa(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function qw(t,e,n){return e===Ax?lg(kA(t,n)):Uo(e)?_A(e,n):lg(xA(Yi(t)))}function CA(t){var e=kl(Hd(t)),n=["absolute","fixed"].indexOf(Yr(t).position)>=0,r=n&&Mn(t)?zu(t):t;return Uo(r)?e.filter(function(i){return Uo(i)&&$x(i,r)&&Er(i)!=="body"}):[]}function TA(t,e,n,r){var i=e==="clippingParents"?CA(t):[].concat(e),o=[].concat(i,[n]),s=o[0],a=o.reduce(function(l,u){var f=qw(t,u,r);return l.top=xo(f.top,l.top),l.right=Ff(f.right,l.right),l.bottom=Ff(f.bottom,l.bottom),l.left=xo(f.left,l.left),l},qw(t,s,r));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Fx(t){var e=t.reference,n=t.element,r=t.placement,i=r?mr(r):null,o=r?sa(r):null,s=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case cn:l={x:s,y:e.y-n.height};break;case Fn:l={x:s,y:e.y+e.height};break;case Bn:l={x:e.x+e.width,y:a};break;case fn:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var u=i?wy(i):null;if(u!=null){var f=u==="y"?"height":"width";switch(o){case ra:l[u]=l[u]-(e[f]/2-n[f]/2);break;case Ql:l[u]=l[u]+(e[f]/2-n[f]/2);break}}return l}function Jl(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=r===void 0?t.placement:r,o=n.strategy,s=o===void 0?t.strategy:o,a=n.boundary,l=a===void 0?K2:a,u=n.rootBoundary,f=u===void 0?Ax:u,h=n.elementContext,p=h===void 0?Xa:h,y=n.altBoundary,w=y===void 0?!1:y,v=n.padding,c=v===void 0?0:v,d=Mx(typeof c!="number"?c:Lx(c,Iu)),m=p===Xa?G2:Xa,g=t.rects.popper,b=t.elements[w?m:p],S=TA(Uo(b)?b:b.contextElement||Yi(t.elements.popper),l,f,s),E=oa(t.elements.reference),k=Fx({reference:E,element:g,strategy:"absolute",placement:i}),_=lg(Object.assign({},g,k)),C=p===Xa?_:E,x={top:S.top-C.top+d.top,bottom:C.bottom-S.bottom+d.bottom,left:S.left-C.left+d.left,right:C.right-S.right+d.right},T=t.modifiersData.offset;if(p===Xa&&T){var R=T[i];Object.keys(x).forEach(function(N){var V=[Bn,Fn].indexOf(N)>=0?1:-1,O=[cn,Fn].indexOf(N)>=0?"y":"x";x[N]+=R[O]*V})}return x}function IA(t,e){e===void 0&&(e={});var n=e,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?Nx:l,f=sa(r),h=f?a?Bw:Bw.filter(function(w){return sa(w)===f}):Iu,p=h.filter(function(w){return u.indexOf(w)>=0});p.length===0&&(p=h);var y=p.reduce(function(w,v){return w[v]=Jl(t,{placement:v,boundary:i,rootBoundary:o,padding:s})[mr(v)],w},{});return Object.keys(y).sort(function(w,v){return y[w]-y[v]})}function zA(t){if(mr(t)===gy)return[];var e=Qc(t);return[Hw(t),e,Hw(e)]}function PA(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!0:s,l=n.fallbackPlacements,u=n.padding,f=n.boundary,h=n.rootBoundary,p=n.altBoundary,y=n.flipVariations,w=y===void 0?!0:y,v=n.allowedAutoPlacements,c=e.options.placement,d=mr(c),m=d===c,g=l||(m||!w?[Qc(c)]:zA(c)),b=[c].concat(g).reduce(function(it,Me){return it.concat(mr(Me)===gy?IA(e,{placement:Me,boundary:f,rootBoundary:h,padding:u,flipVariations:w,allowedAutoPlacements:v}):Me)},[]),S=e.rects.reference,E=e.rects.popper,k=new Map,_=!0,C=b[0],x=0;x<b.length;x++){var T=b[x],R=mr(T),N=sa(T)===ra,V=[cn,Fn].indexOf(R)>=0,O=V?"width":"height",U=Jl(e,{placement:T,boundary:f,rootBoundary:h,altBoundary:p,padding:u}),j=V?N?Bn:fn:N?Fn:cn;S[O]>E[O]&&(j=Qc(j));var P=Qc(j),A=[];if(o&&A.push(U[R]<=0),a&&A.push(U[j]<=0,U[P]<=0),A.every(function(it){return it})){C=T,_=!1;break}k.set(T,A)}if(_)for(var F=w?3:1,Q=function(Me){var Le=b.find(function(We){var Xe=k.get(We);if(Xe)return Xe.slice(0,Me).every(function(je){return je})});if(Le)return C=Le,"break"},le=F;le>0;le--){var Ge=Q(le);if(Ge==="break")break}e.placement!==C&&(e.modifiersData[r]._skip=!0,e.placement=C,e.reset=!0)}}const OA={name:"flip",enabled:!0,phase:"main",fn:PA,requiresIfExists:["offset"],data:{_skip:!1}};function Kw(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Gw(t){return[cn,Bn,Fn,fn].some(function(e){return t[e]>=0})}function RA(t){var e=t.state,n=t.name,r=e.rects.reference,i=e.rects.popper,o=e.modifiersData.preventOverflow,s=Jl(e,{elementContext:"reference"}),a=Jl(e,{altBoundary:!0}),l=Kw(s,r),u=Kw(a,i,o),f=Gw(l),h=Gw(u);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}const AA={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:RA};function NA(t,e,n){var r=mr(t),i=[fn,cn].indexOf(r)>=0?-1:1,o=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,s=o[0],a=o[1];return s=s||0,a=(a||0)*i,[fn,Bn].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function UA(t){var e=t.state,n=t.options,r=t.name,i=n.offset,o=i===void 0?[0,0]:i,s=Nx.reduce(function(f,h){return f[h]=NA(h,e.rects,o),f},{}),a=s[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=s}const $A={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:UA};function DA(t){var e=t.state,n=t.name;e.modifiersData[n]=Fx({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const MA={name:"popperOffsets",enabled:!0,phase:"read",fn:DA,data:{}};function LA(t){return t==="x"?"y":"x"}function jA(t){var e=t.state,n=t.options,r=t.name,i=n.mainAxis,o=i===void 0?!0:i,s=n.altAxis,a=s===void 0?!1:s,l=n.boundary,u=n.rootBoundary,f=n.altBoundary,h=n.padding,p=n.tether,y=p===void 0?!0:p,w=n.tetherOffset,v=w===void 0?0:w,c=Jl(e,{boundary:l,rootBoundary:u,padding:h,altBoundary:f}),d=mr(e.placement),m=sa(e.placement),g=!m,b=wy(d),S=LA(b),E=e.modifiersData.popperOffsets,k=e.rects.reference,_=e.rects.popper,C=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,x=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),T=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,R={x:0,y:0};if(!!E){if(o){var N,V=b==="y"?cn:fn,O=b==="y"?Fn:Bn,U=b==="y"?"height":"width",j=E[b],P=j+c[V],A=j-c[O],F=y?-_[U]/2:0,Q=m===ra?k[U]:_[U],le=m===ra?-_[U]:-k[U],Ge=e.elements.arrow,it=y&&Ge?vy(Ge):{width:0,height:0},Me=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Dx(),Le=Me[V],We=Me[O],Xe=El(0,k[U],it[U]),je=g?k[U]/2-F-Xe-Le-x.mainAxis:Q-Xe-Le-x.mainAxis,er=g?-k[U]/2+F+Xe+We+x.mainAxis:le+Xe+We+x.mainAxis,He=e.elements.arrow&&zu(e.elements.arrow),Ra=He?b==="y"?He.clientTop||0:He.clientLeft||0:0,Qt=(N=T==null?void 0:T[b])!=null?N:0,mn=j+je-Qt-Ra,Ft=j+er-Qt,Cr=El(y?Ff(P,mn):P,j,y?xo(A,Ft):A);E[b]=Cr,R[b]=Cr-j}if(a){var gn,Tt=b==="x"?cn:fn,tr=b==="x"?Fn:Bn,Jt=E[S],Zt=S==="y"?"height":"width",Wn=Jt+c[Tt],nr=Jt-c[tr],rr=[cn,fn].indexOf(d)!==-1,Bt=(gn=T==null?void 0:T[S])!=null?gn:0,Tr=rr?Wn:Jt-k[Zt]-_[Zt]-Bt+x.altAxis,no=rr?Jt+k[Zt]+_[Zt]-Bt-x.altAxis:nr,si=y&&rr?cA(Tr,Jt,no):El(y?Tr:Wn,Jt,y?no:nr);E[S]=si,R[S]=si-Jt}e.modifiersData[r]=R}}const FA={name:"preventOverflow",enabled:!0,phase:"main",fn:jA,requiresIfExists:["offset"]};function BA(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function VA(t){return t===Vn(t)||!Mn(t)?by(t):BA(t)}function WA(t){var e=t.getBoundingClientRect(),n=ia(e.width)/t.offsetWidth||1,r=ia(e.height)/t.offsetHeight||1;return n!==1||r!==1}function HA(t,e,n){n===void 0&&(n=!1);var r=Mn(e),i=Mn(e)&&WA(e),o=Yi(e),s=oa(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((Er(e)!=="body"||Ey(o))&&(a=VA(e)),Mn(e)?(l=oa(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):o&&(l.x=Sy(o))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function qA(t){var e=new Map,n=new Set,r=[];t.forEach(function(o){e.set(o.name,o)});function i(o){n.add(o.name);var s=[].concat(o.requires||[],o.requiresIfExists||[]);s.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),r.push(o)}return t.forEach(function(o){n.has(o.name)||i(o)}),r}function KA(t){var e=qA(t);return iA.reduce(function(n,r){return n.concat(e.filter(function(i){return i.phase===r}))},[])}function GA(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function XA(t){var e=t.reduce(function(n,r){var i=n[r.name];return n[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var Xw={placement:"bottom",modifiers:[],strategy:"absolute"};function Yw(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function YA(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,i=e.defaultOptions,o=i===void 0?Xw:i;return function(a,l,u){u===void 0&&(u=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xw,o),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],p=!1,y={state:f,setOptions:function(d){var m=typeof d=="function"?d(f.options):d;v(),f.options=Object.assign({},o,f.options,m),f.scrollParents={reference:Uo(a)?kl(a):a.contextElement?kl(a.contextElement):[],popper:kl(l)};var g=KA(XA([].concat(r,f.options.modifiers)));return f.orderedModifiers=g.filter(function(b){return b.enabled}),w(),y.update()},forceUpdate:function(){if(!p){var d=f.elements,m=d.reference,g=d.popper;if(!!Yw(m,g)){f.rects={reference:HA(m,zu(g),f.options.strategy==="fixed"),popper:vy(g)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(x){return f.modifiersData[x.name]=Object.assign({},x.data)});for(var b=0;b<f.orderedModifiers.length;b++){if(f.reset===!0){f.reset=!1,b=-1;continue}var S=f.orderedModifiers[b],E=S.fn,k=S.options,_=k===void 0?{}:k,C=S.name;typeof E=="function"&&(f=E({state:f,options:_,name:C,instance:y})||f)}}}},update:GA(function(){return new Promise(function(c){y.forceUpdate(),c(f)})}),destroy:function(){v(),p=!0}};if(!Yw(a,l))return y;y.setOptions(u).then(function(c){!p&&u.onFirstUpdate&&u.onFirstUpdate(c)});function w(){f.orderedModifiers.forEach(function(c){var d=c.name,m=c.options,g=m===void 0?{}:m,b=c.effect;if(typeof b=="function"){var S=b({state:f,name:d,instance:y,options:g}),E=function(){};h.push(S||E)}})}function v(){h.forEach(function(c){return c()}),h=[]}return y}}var QA=[bA,MA,vA,aA,$A,OA,FA,pA,AA],JA=YA({defaultModifiers:QA});function ZA(t){return typeof t=="function"?t():t}const eN=I.exports.forwardRef(function(e,n){const{children:r,container:i,disablePortal:o=!1}=e,[s,a]=I.exports.useState(null),l=Bi(I.exports.isValidElement(r)?r.ref:null,n);return na(()=>{o||a(ZA(i)||document.body)},[i,o]),na(()=>{if(s&&!o)return jf(n,s),()=>{jf(n,null)}},[n,s,o]),o?I.exports.isValidElement(r)?I.exports.cloneElement(r,{ref:l}):r:ee(I.exports.Fragment,{children:s&&dd.exports.createPortal(r,s)})}),tN=eN;function nN(t){return Ho("MuiPopperUnstyled",t)}_a("MuiPopperUnstyled",["root"]);const rN=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],iN=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function oN(t,e){if(e==="ltr")return t;switch(t){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return t}}function ug(t){return typeof t=="function"?t():t}const sN=()=>xa({root:["root"]},nN,{}),aN={},lN=I.exports.forwardRef(function(e,n){var r;const{anchorEl:i,children:o,component:s,direction:a,disablePortal:l,modifiers:u,open:f,ownerState:h,placement:p,popperOptions:y,popperRef:w,slotProps:v={},slots:c={},TransitionProps:d}=e,m=Je(e,rN),g=I.exports.useRef(null),b=Bi(g,n),S=I.exports.useRef(null),E=Bi(S,w),k=I.exports.useRef(E);na(()=>{k.current=E},[E]),I.exports.useImperativeHandle(w,()=>S.current,[]);const _=oN(p,a),[C,x]=I.exports.useState(_);I.exports.useEffect(()=>{S.current&&S.current.forceUpdate()}),na(()=>{if(!i||!f)return;const O=P=>{x(P.placement)};ug(i);let U=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:P})=>{O(P)}}];u!=null&&(U=U.concat(u)),y&&y.modifiers!=null&&(U=U.concat(y.modifiers));const j=JA(ug(i),g.current,L({placement:_},y,{modifiers:U}));return k.current(j),()=>{j.destroy(),k.current(null)}},[i,l,u,f,y,_]);const T={placement:C};d!==null&&(T.TransitionProps=d);const R=sN(),N=(r=s!=null?s:c.root)!=null?r:"div",V=sg({elementType:N,externalSlotProps:v.root,externalForwardedProps:m,additionalProps:{role:"tooltip",ref:b},ownerState:L({},e,h),className:R.root});return ee(N,L({},V,{children:typeof o=="function"?o(T):o}))}),uN=I.exports.forwardRef(function(e,n){const{anchorEl:r,children:i,container:o,direction:s="ltr",disablePortal:a=!1,keepMounted:l=!1,modifiers:u,open:f,placement:h="bottom",popperOptions:p=aN,popperRef:y,style:w,transition:v=!1}=e,c=Je(e,iN),[d,m]=I.exports.useState(!0),g=()=>{m(!1)},b=()=>{m(!0)};if(!l&&!f&&(!v||d))return null;const S=o||(r?Ms(ug(r)).body:void 0);return ee(tN,{disablePortal:a,container:S,children:ee(lN,L({anchorEl:r,direction:s,disablePortal:a,modifiers:u,ref:n,open:v?!d:f,placement:h,popperOptions:p,popperRef:y},c,{style:L({position:"fixed",top:0,left:0,display:!f&&l&&(!v||d)?"none":null},w),TransitionProps:v?{in:f,onEnter:g,onExited:b}:null,children:i}))})}),cN=uN;function Bx(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var fN=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,dN=Bx(function(t){return fN.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function hN(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function pN(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var mN=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(pN(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=hN(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Rt="-ms-",Bf="-moz-",ve="-webkit-",Vx="comm",ky="rule",xy="decl",gN="@import",Wx="@keyframes",yN=Math.abs,qd=String.fromCharCode,vN=Object.assign;function wN(t,e){return St(t,0)^45?(((e<<2^St(t,0))<<2^St(t,1))<<2^St(t,2))<<2^St(t,3):0}function Hx(t){return t.trim()}function bN(t,e){return(t=e.exec(t))?t[0]:t}function Se(t,e,n){return t.replace(e,n)}function cg(t,e){return t.indexOf(e)}function St(t,e){return t.charCodeAt(e)|0}function Zl(t,e,n){return t.slice(e,n)}function lr(t){return t.length}function _y(t){return t.length}function zc(t,e){return e.push(t),t}function SN(t,e){return t.map(e).join("")}var Kd=1,aa=1,qx=0,pn=0,nt=0,Ca="";function Gd(t,e,n,r,i,o,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Kd,column:aa,length:s,return:""}}function Ya(t,e){return vN(Gd("",null,null,"",null,null,0),t,{length:-t.length},e)}function EN(){return nt}function kN(){return nt=pn>0?St(Ca,--pn):0,aa--,nt===10&&(aa=1,Kd--),nt}function kn(){return nt=pn<qx?St(Ca,pn++):0,aa++,nt===10&&(aa=1,Kd++),nt}function gr(){return St(Ca,pn)}function Jc(){return pn}function Pu(t,e){return Zl(Ca,t,e)}function eu(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kx(t){return Kd=aa=1,qx=lr(Ca=t),pn=0,[]}function Gx(t){return Ca="",t}function Zc(t){return Hx(Pu(pn-1,fg(t===91?t+2:t===40?t+1:t)))}function xN(t){for(;(nt=gr())&&nt<33;)kn();return eu(t)>2||eu(nt)>3?"":" "}function _N(t,e){for(;--e&&kn()&&!(nt<48||nt>102||nt>57&&nt<65||nt>70&&nt<97););return Pu(t,Jc()+(e<6&&gr()==32&&kn()==32))}function fg(t){for(;kn();)switch(nt){case t:return pn;case 34:case 39:t!==34&&t!==39&&fg(nt);break;case 40:t===41&&fg(t);break;case 92:kn();break}return pn}function CN(t,e){for(;kn()&&t+nt!==47+10;)if(t+nt===42+42&&gr()===47)break;return"/*"+Pu(e,pn-1)+"*"+qd(t===47?t:kn())}function TN(t){for(;!eu(gr());)kn();return Pu(t,pn)}function IN(t){return Gx(ef("",null,null,null,[""],t=Kx(t),0,[0],t))}function ef(t,e,n,r,i,o,s,a,l){for(var u=0,f=0,h=s,p=0,y=0,w=0,v=1,c=1,d=1,m=0,g="",b=i,S=o,E=r,k=g;c;)switch(w=m,m=kn()){case 40:if(w!=108&&St(k,h-1)==58){cg(k+=Se(Zc(m),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:k+=Zc(m);break;case 9:case 10:case 13:case 32:k+=xN(w);break;case 92:k+=_N(Jc()-1,7);continue;case 47:switch(gr()){case 42:case 47:zc(zN(CN(kn(),Jc()),e,n),l);break;default:k+="/"}break;case 123*v:a[u++]=lr(k)*d;case 125*v:case 59:case 0:switch(m){case 0:case 125:c=0;case 59+f:y>0&&lr(k)-h&&zc(y>32?Jw(k+";",r,n,h-1):Jw(Se(k," ","")+";",r,n,h-2),l);break;case 59:k+=";";default:if(zc(E=Qw(k,e,n,u,f,i,a,g,b=[],S=[],h),o),m===123)if(f===0)ef(k,e,E,E,b,o,h,a,S);else switch(p===99&&St(k,3)===110?100:p){case 100:case 109:case 115:ef(t,E,E,r&&zc(Qw(t,E,E,0,0,i,a,g,i,b=[],h),S),i,S,h,a,r?b:S);break;default:ef(k,E,E,E,[""],S,0,a,S)}}u=f=y=0,v=d=1,g=k="",h=s;break;case 58:h=1+lr(k),y=w;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&kN()==125)continue}switch(k+=qd(m),m*v){case 38:d=f>0?1:(k+="\f",-1);break;case 44:a[u++]=(lr(k)-1)*d,d=1;break;case 64:gr()===45&&(k+=Zc(kn())),p=gr(),f=h=lr(g=k+=TN(Jc())),m++;break;case 45:w===45&&lr(k)==2&&(v=0)}}return o}function Qw(t,e,n,r,i,o,s,a,l,u,f){for(var h=i-1,p=i===0?o:[""],y=_y(p),w=0,v=0,c=0;w<r;++w)for(var d=0,m=Zl(t,h+1,h=yN(v=s[w])),g=t;d<y;++d)(g=Hx(v>0?p[d]+" "+m:Se(m,/&\f/g,p[d])))&&(l[c++]=g);return Gd(t,e,n,i===0?ky:a,l,u,f)}function zN(t,e,n){return Gd(t,e,n,Vx,qd(EN()),Zl(t,2,-2),0)}function Jw(t,e,n,r){return Gd(t,e,n,xy,Zl(t,0,r),Zl(t,r+1,-1),r)}function Ls(t,e){for(var n="",r=_y(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function PN(t,e,n,r){switch(t.type){case gN:case xy:return t.return=t.return||t.value;case Vx:return"";case Wx:return t.return=t.value+"{"+Ls(t.children,r)+"}";case ky:t.value=t.props.join(",")}return lr(n=Ls(t.children,r))?t.return=t.value+"{"+n+"}":""}function ON(t){var e=_y(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function RN(t){return function(e){e.root||(e=e.return)&&t(e)}}var AN=function(e,n,r){for(var i=0,o=0;i=o,o=gr(),i===38&&o===12&&(n[r]=1),!eu(o);)kn();return Pu(e,pn)},NN=function(e,n){var r=-1,i=44;do switch(eu(i)){case 0:i===38&&gr()===12&&(n[r]=1),e[r]+=AN(pn-1,n,r);break;case 2:e[r]+=Zc(i);break;case 4:if(i===44){e[++r]=gr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=qd(i)}while(i=kn());return e},UN=function(e,n){return Gx(NN(Kx(e),n))},Zw=new WeakMap,$N=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Zw.get(r))&&!i){Zw.set(e,!0);for(var o=[],s=UN(n,o),a=r.props,l=0,u=0;l<s.length;l++)for(var f=0;f<a.length;f++,u++)e.props[u]=o[l]?s[l].replace(/&\f/g,a[f]):a[f]+" "+s[l]}}},DN=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Xx(t,e){switch(wN(t,e)){case 5103:return ve+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+t+Bf+t+Rt+t+t;case 6828:case 4268:return ve+t+Rt+t+t;case 6165:return ve+t+Rt+"flex-"+t+t;case 5187:return ve+t+Se(t,/(\w+).+(:[^]+)/,ve+"box-$1$2"+Rt+"flex-$1$2")+t;case 5443:return ve+t+Rt+"flex-item-"+Se(t,/flex-|-self/,"")+t;case 4675:return ve+t+Rt+"flex-line-pack"+Se(t,/align-content|flex-|-self/,"")+t;case 5548:return ve+t+Rt+Se(t,"shrink","negative")+t;case 5292:return ve+t+Rt+Se(t,"basis","preferred-size")+t;case 6060:return ve+"box-"+Se(t,"-grow","")+ve+t+Rt+Se(t,"grow","positive")+t;case 4554:return ve+Se(t,/([^-])(transform)/g,"$1"+ve+"$2")+t;case 6187:return Se(Se(Se(t,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),t,"")+t;case 5495:case 3959:return Se(t,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return Se(Se(t,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+t+t;case 4095:case 3583:case 4068:case 2532:return Se(t,/(.+)-inline(.+)/,ve+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lr(t)-1-e>6)switch(St(t,e+1)){case 109:if(St(t,e+4)!==45)break;case 102:return Se(t,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+Bf+(St(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~cg(t,"stretch")?Xx(Se(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(St(t,e+1)!==115)break;case 6444:switch(St(t,lr(t)-3-(~cg(t,"!important")&&10))){case 107:return Se(t,":",":"+ve)+t;case 101:return Se(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ve+(St(t,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+Rt+"$2box$3")+t}break;case 5936:switch(St(t,e+11)){case 114:return ve+t+Rt+Se(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ve+t+Rt+Se(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ve+t+Rt+Se(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ve+t+Rt+t+t}return t}var MN=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case xy:e.return=Xx(e.value,e.length);break;case Wx:return Ls([Ya(e,{value:Se(e.value,"@","@"+ve)})],i);case ky:if(e.length)return SN(e.props,function(o){switch(bN(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ls([Ya(e,{props:[Se(o,/:(read-\w+)/,":"+Bf+"$1")]})],i);case"::placeholder":return Ls([Ya(e,{props:[Se(o,/:(plac\w+)/,":"+ve+"input-$1")]}),Ya(e,{props:[Se(o,/:(plac\w+)/,":"+Bf+"$1")]}),Ya(e,{props:[Se(o,/:(plac\w+)/,Rt+"input-$1")]})],i)}return""})}},LN=[MN],jN=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var c=v.getAttribute("data-emotion");c.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=e.stylisPlugins||LN,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var c=v.getAttribute("data-emotion").split(" "),d=1;d<c.length;d++)o[c[d]]=!0;a.push(v)});var l,u=[$N,DN];{var f,h=[PN,RN(function(v){f.insert(v)})],p=ON(u.concat(i,h)),y=function(c){return Ls(IN(c),p)};l=function(c,d,m,g){f=m,y(c?c+"{"+d.styles+"}":d.styles),g&&(w.inserted[d.name]=!0)}}var w={key:n,sheet:new mN({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return w.sheet.hydrate(a),w},Yx={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yt=typeof Symbol=="function"&&Symbol.for,Cy=yt?Symbol.for("react.element"):60103,Ty=yt?Symbol.for("react.portal"):60106,Xd=yt?Symbol.for("react.fragment"):60107,Yd=yt?Symbol.for("react.strict_mode"):60108,Qd=yt?Symbol.for("react.profiler"):60114,Jd=yt?Symbol.for("react.provider"):60109,Zd=yt?Symbol.for("react.context"):60110,Iy=yt?Symbol.for("react.async_mode"):60111,eh=yt?Symbol.for("react.concurrent_mode"):60111,th=yt?Symbol.for("react.forward_ref"):60112,nh=yt?Symbol.for("react.suspense"):60113,FN=yt?Symbol.for("react.suspense_list"):60120,rh=yt?Symbol.for("react.memo"):60115,ih=yt?Symbol.for("react.lazy"):60116,BN=yt?Symbol.for("react.block"):60121,VN=yt?Symbol.for("react.fundamental"):60117,WN=yt?Symbol.for("react.responder"):60118,HN=yt?Symbol.for("react.scope"):60119;function zn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Cy:switch(t=t.type,t){case Iy:case eh:case Xd:case Qd:case Yd:case nh:return t;default:switch(t=t&&t.$$typeof,t){case Zd:case th:case ih:case rh:case Jd:return t;default:return e}}case Ty:return e}}}function Qx(t){return zn(t)===eh}_e.AsyncMode=Iy;_e.ConcurrentMode=eh;_e.ContextConsumer=Zd;_e.ContextProvider=Jd;_e.Element=Cy;_e.ForwardRef=th;_e.Fragment=Xd;_e.Lazy=ih;_e.Memo=rh;_e.Portal=Ty;_e.Profiler=Qd;_e.StrictMode=Yd;_e.Suspense=nh;_e.isAsyncMode=function(t){return Qx(t)||zn(t)===Iy};_e.isConcurrentMode=Qx;_e.isContextConsumer=function(t){return zn(t)===Zd};_e.isContextProvider=function(t){return zn(t)===Jd};_e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cy};_e.isForwardRef=function(t){return zn(t)===th};_e.isFragment=function(t){return zn(t)===Xd};_e.isLazy=function(t){return zn(t)===ih};_e.isMemo=function(t){return zn(t)===rh};_e.isPortal=function(t){return zn(t)===Ty};_e.isProfiler=function(t){return zn(t)===Qd};_e.isStrictMode=function(t){return zn(t)===Yd};_e.isSuspense=function(t){return zn(t)===nh};_e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Xd||t===eh||t===Qd||t===Yd||t===nh||t===FN||typeof t=="object"&&t!==null&&(t.$$typeof===ih||t.$$typeof===rh||t.$$typeof===Jd||t.$$typeof===Zd||t.$$typeof===th||t.$$typeof===VN||t.$$typeof===WN||t.$$typeof===HN||t.$$typeof===BN)};_e.typeOf=zn;(function(t){t.exports=_e})(Yx);var Jx=Yx.exports,qN={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},KN={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Zx={};Zx[Jx.ForwardRef]=qN;Zx[Jx.Memo]=KN;var GN=!0;function XN(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var e_=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||GN===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},YN=function(e,n,r){e_(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function QN(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var JN={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ZN=/[A-Z]|^ms/g,eU=/_EMO_([^_]+?)_([^]*?)_EMO_/g,t_=function(e){return e.charCodeAt(1)===45},eb=function(e){return e!=null&&typeof e!="boolean"},Np=Bx(function(t){return t_(t)?t:t.replace(ZN,"-$&").toLowerCase()}),tb=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(eU,function(r,i,o){return ur={name:i,styles:o,next:ur},i})}return JN[e]!==1&&!t_(e)&&typeof n=="number"&&n!==0?n+"px":n};function tu(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ur={name:n.name,styles:n.styles,next:ur},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ur={name:r.name,styles:r.styles,next:ur},r=r.next;var i=n.styles+";";return i}return tU(t,e,n)}case"function":{if(t!==void 0){var o=ur,s=n(t);return ur=o,tu(t,e,s)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function tU(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=tu(t,e,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=o+"{"+e[s]+"}":eb(s)&&(r+=Np(o)+":"+tb(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var a=0;a<s.length;a++)eb(s[a])&&(r+=Np(o)+":"+tb(o,s[a])+";");else{var l=tu(t,e,s);switch(o){case"animation":case"animationName":{r+=Np(o)+":"+l+";";break}default:r+=o+"{"+l+"}"}}}return r}var nb=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ur,n_=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";ur=void 0;var s=e[0];s==null||s.raw===void 0?(i=!1,o+=tu(r,n,s)):o+=s[0];for(var a=1;a<e.length;a++)o+=tu(r,n,e[a]),i&&(o+=s[a]);nb.lastIndex=0;for(var l="",u;(u=nb.exec(o))!==null;)l+="-"+u[1];var f=QN(o)+l;return{name:f,styles:o,next:ur}},nU=function(e){return e()},rU=Hs["useInsertionEffect"]?Hs["useInsertionEffect"]:!1,iU=rU||nU,r_=I.exports.createContext(typeof HTMLElement<"u"?jN({key:"css"}):null);r_.Provider;var oU=function(e){return I.exports.forwardRef(function(n,r){var i=I.exports.useContext(r_);return e(n,i,r)})},sU=I.exports.createContext({});function zy(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return n_(e)}var i_=function(){var e=zy.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},aU=dN,lU=function(e){return e!=="theme"},rb=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?aU:lU},ib=function(e,n,r){var i;if(n){var o=n.shouldForwardProp;i=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},uU=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return e_(n,r,i),iU(function(){return YN(n,r,i)}),null},cU=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=ib(e,n,r),l=a||rb(i),u=!l("as");return function(){var f=arguments,h=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&h.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)h.push.apply(h,f);else{h.push(f[0][0]);for(var p=f.length,y=1;y<p;y++)h.push(f[y],f[0][y])}var w=oU(function(v,c,d){var m=u&&v.as||i,g="",b=[],S=v;if(v.theme==null){S={};for(var E in v)S[E]=v[E];S.theme=I.exports.useContext(sU)}typeof v.className=="string"?g=XN(c.registered,b,v.className):v.className!=null&&(g=v.className+" ");var k=n_(h.concat(b),c.registered,S);g+=c.key+"-"+k.name,s!==void 0&&(g+=" "+s);var _=u&&a===void 0?rb(m):l,C={};for(var x in v)u&&x==="as"||_(x)&&(C[x]=v[x]);return C.className=g,C.ref=d,I.exports.createElement(I.exports.Fragment,null,I.exports.createElement(uU,{cache:c,serialized:k,isStringTag:typeof m=="string"}),I.exports.createElement(m,C))});return w.displayName=o!==void 0?o:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",w.defaultProps=e.defaultProps,w.__emotion_real=w,w.__emotion_base=i,w.__emotion_styles=h,w.__emotion_forwardProp=a,Object.defineProperty(w,"toString",{value:function(){return"."+s}}),w.withComponent=function(v,c){return t(v,L({},n,c,{shouldForwardProp:ib(w,c,!0)})).apply(void 0,h)},w}},fU=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],dg=cU.bind();fU.forEach(function(t){dg[t]=dg(t)});const dU=dg;/** @license MUI v5.10.8
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function hU(t,e){return dU(t,e)}const pU=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))};function xl(t,e){return e?Fr(t,e,{clone:!1}):t}const Py={xs:0,sm:600,md:900,lg:1200,xl:1536},ob={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Py[t]}px)`};function Qi(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const o=r.breakpoints||ob;return e.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const o=r.breakpoints||ob;return Object.keys(e).reduce((s,a)=>{if(Object.keys(o.values||Py).indexOf(a)!==-1){const l=o.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function mU(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((r,i)=>{const o=t.up(i);return r[o]={},r},{}))||{}}function gU(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function Oy(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,o)=>i&&i[o]?i[o]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function sb(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Oy(t,n)||r,e&&(i=e(i,r)),i}function K(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,o=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,u=Oy(l,r)||{};return Qi(s,a,h=>{let p=sb(u,i,h);return h===p&&typeof h=="string"&&(p=sb(u,i,`${e}${h==="default"?"":Ie(h)}`,h)),n===!1?p:{[n]:p}})};return o.propTypes={},o.filterProps=[e],o}function Ji(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(o=>{r[o]=i}),r),{}),n=r=>Object.keys(r).reduce((i,o)=>e[o]?xl(i,e[o](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function yU(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const vU={m:"margin",p:"padding"},wU={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},ab={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},bU=yU(t=>{if(t.length>2)if(ab[t])t=ab[t];else return[t];const[e,n]=t.split(""),r=vU[e],i=wU[n]||"";return Array.isArray(i)?i.map(o=>r+o):[r+i]}),SU=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],EU=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],o_=[...SU,...EU];function Ou(t,e,n,r){var i;const o=(i=Oy(t,e,!1))!=null?i:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function s_(t){return Ou(t,"spacing",8)}function Ru(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),r=t(n);return e>=0?r:typeof r=="number"?-r:`-${r}`}function kU(t,e){return n=>t.reduce((r,i)=>(r[i]=Ru(e,n),r),{})}function xU(t,e,n,r){if(e.indexOf(n)===-1)return null;const i=bU(n),o=kU(i,r),s=t[n];return Qi(t,s,o)}function _U(t,e){const n=s_(t.theme);return Object.keys(t).map(r=>xU(t,e,r,n)).reduce(xl,{})}function oh(t){return _U(t,o_)}oh.propTypes={};oh.filterProps=o_;function Au(t){return typeof t!="number"?t:`${t}px solid`}const CU=K({prop:"border",themeKey:"borders",transform:Au}),TU=K({prop:"borderTop",themeKey:"borders",transform:Au}),IU=K({prop:"borderRight",themeKey:"borders",transform:Au}),zU=K({prop:"borderBottom",themeKey:"borders",transform:Au}),PU=K({prop:"borderLeft",themeKey:"borders",transform:Au}),OU=K({prop:"borderColor",themeKey:"palette"}),RU=K({prop:"borderTopColor",themeKey:"palette"}),AU=K({prop:"borderRightColor",themeKey:"palette"}),NU=K({prop:"borderBottomColor",themeKey:"palette"}),UU=K({prop:"borderLeftColor",themeKey:"palette"}),Ry=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Ou(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Ru(e,r)});return Qi(t,t.borderRadius,n)}return null};Ry.propTypes={};Ry.filterProps=["borderRadius"];const $U=Ji(CU,TU,IU,zU,PU,OU,RU,AU,NU,UU,Ry),a_=$U,DU=K({prop:"displayPrint",cssProperty:!1,transform:t=>({"@media print":{display:t}})}),MU=K({prop:"display"}),LU=K({prop:"overflow"}),jU=K({prop:"textOverflow"}),FU=K({prop:"visibility"}),BU=K({prop:"whiteSpace"}),l_=Ji(DU,MU,LU,jU,FU,BU),VU=K({prop:"flexBasis"}),WU=K({prop:"flexDirection"}),HU=K({prop:"flexWrap"}),qU=K({prop:"justifyContent"}),KU=K({prop:"alignItems"}),GU=K({prop:"alignContent"}),XU=K({prop:"order"}),YU=K({prop:"flex"}),QU=K({prop:"flexGrow"}),JU=K({prop:"flexShrink"}),ZU=K({prop:"alignSelf"}),e$=K({prop:"justifyItems"}),t$=K({prop:"justifySelf"}),n$=Ji(VU,WU,HU,qU,KU,GU,XU,YU,QU,JU,ZU,e$,t$),u_=n$,Ay=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Ou(t.theme,"spacing",8),n=r=>({gap:Ru(e,r)});return Qi(t,t.gap,n)}return null};Ay.propTypes={};Ay.filterProps=["gap"];const Ny=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Ou(t.theme,"spacing",8),n=r=>({columnGap:Ru(e,r)});return Qi(t,t.columnGap,n)}return null};Ny.propTypes={};Ny.filterProps=["columnGap"];const Uy=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Ou(t.theme,"spacing",8),n=r=>({rowGap:Ru(e,r)});return Qi(t,t.rowGap,n)}return null};Uy.propTypes={};Uy.filterProps=["rowGap"];const r$=K({prop:"gridColumn"}),i$=K({prop:"gridRow"}),o$=K({prop:"gridAutoFlow"}),s$=K({prop:"gridAutoColumns"}),a$=K({prop:"gridAutoRows"}),l$=K({prop:"gridTemplateColumns"}),u$=K({prop:"gridTemplateRows"}),c$=K({prop:"gridTemplateAreas"}),f$=K({prop:"gridArea"}),d$=Ji(Ay,Ny,Uy,r$,i$,o$,s$,a$,l$,u$,c$,f$),c_=d$;function $y(t,e){return e==="grey"?e:t}const h$=K({prop:"color",themeKey:"palette",transform:$y}),p$=K({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:$y}),m$=K({prop:"backgroundColor",themeKey:"palette",transform:$y}),g$=Ji(h$,p$,m$),f_=g$,y$=K({prop:"position"}),v$=K({prop:"zIndex",themeKey:"zIndex"}),w$=K({prop:"top"}),b$=K({prop:"right"}),S$=K({prop:"bottom"}),E$=K({prop:"left"}),d_=Ji(y$,v$,w$,b$,S$,E$),k$=K({prop:"boxShadow",themeKey:"shadows"}),h_=k$;function Zi(t){return t<=1&&t!==0?`${t*100}%`:t}const x$=K({prop:"width",transform:Zi}),p_=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var r,i,o;return{maxWidth:((r=t.theme)==null||(i=r.breakpoints)==null||(o=i.values)==null?void 0:o[n])||Py[n]||Zi(n)}};return Qi(t,t.maxWidth,e)}return null};p_.filterProps=["maxWidth"];const _$=K({prop:"minWidth",transform:Zi}),C$=K({prop:"height",transform:Zi}),T$=K({prop:"maxHeight",transform:Zi}),I$=K({prop:"minHeight",transform:Zi});K({prop:"size",cssProperty:"width",transform:Zi});K({prop:"size",cssProperty:"height",transform:Zi});const z$=K({prop:"boxSizing"}),P$=Ji(x$,p_,_$,C$,T$,I$,z$),m_=P$,O$=K({prop:"fontFamily",themeKey:"typography"}),R$=K({prop:"fontSize",themeKey:"typography"}),A$=K({prop:"fontStyle",themeKey:"typography"}),N$=K({prop:"fontWeight",themeKey:"typography"}),U$=K({prop:"letterSpacing"}),$$=K({prop:"textTransform"}),D$=K({prop:"lineHeight"}),M$=K({prop:"textAlign"}),L$=K({prop:"typography",cssProperty:!1,themeKey:"typography"}),j$=Ji(L$,O$,R$,A$,N$,U$,D$,M$,$$),g_=j$,lb={borders:a_.filterProps,display:l_.filterProps,flexbox:u_.filterProps,grid:c_.filterProps,positions:d_.filterProps,palette:f_.filterProps,shadows:h_.filterProps,sizing:m_.filterProps,spacing:oh.filterProps,typography:g_.filterProps},y_={borders:a_,display:l_,flexbox:u_,grid:c_,positions:d_,palette:f_,shadows:h_,sizing:m_,spacing:oh,typography:g_};Object.keys(lb).reduce((t,e)=>(lb[e].forEach(n=>{t[n]=y_[e]}),t),{});function F$(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function B$(t,e){return typeof t=="function"?t(e):t}function V$(t=y_){const e=Object.keys(t).reduce((i,o)=>(t[o].filterProps.forEach(s=>{i[s]=t[o]}),i),{});function n(i,o,s){const a={[i]:o,theme:s},l=e[i];return l?l(a):{[i]:o}}function r(i){const{sx:o,theme:s={}}=i||{};if(!o)return null;function a(l){let u=l;if(typeof l=="function")u=l(s);else if(typeof l!="object")return l;if(!u)return null;const f=mU(s.breakpoints),h=Object.keys(f);let p=f;return Object.keys(u).forEach(y=>{const w=B$(u[y],s);if(w!=null)if(typeof w=="object")if(e[y])p=xl(p,n(y,w,s));else{const v=Qi({theme:s},w,c=>({[y]:c}));F$(v,w)?p[y]=r({sx:w,theme:s}):p=xl(p,v)}else p=xl(p,n(y,w,s))}),gU(h,p)}return Array.isArray(o)?o.map(a):a(o)}return r}const v_=V$();v_.filterProps=["sx"];const W$=v_,H$=["values","unit","step"],q$=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>L({},n,{[r.key]:r.val}),{})};function K$(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=t,i=Je(t,H$),o=q$(e),s=Object.keys(o);function a(p){return`@media (min-width:${typeof e[p]=="number"?e[p]:p}${n})`}function l(p){return`@media (max-width:${(typeof e[p]=="number"?e[p]:p)-r/100}${n})`}function u(p,y){const w=s.indexOf(y);return`@media (min-width:${typeof e[p]=="number"?e[p]:p}${n}) and (max-width:${(w!==-1&&typeof e[s[w]]=="number"?e[s[w]]:y)-r/100}${n})`}function f(p){return s.indexOf(p)+1<s.length?u(p,s[s.indexOf(p)+1]):a(p)}function h(p){const y=s.indexOf(p);return y===0?a(s[1]):y===s.length-1?l(s[y]):u(p,s[s.indexOf(p)+1]).replace("@media","@media not all and")}return L({keys:s,values:o,up:a,down:l,between:u,only:f,not:h,unit:n},i)}const G$={borderRadius:4},X$=G$;function Y$(t=8){if(t.mui)return t;const e=s_({spacing:t}),n=(...r)=>(r.length===0?[1]:r).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}const Q$=["breakpoints","palette","spacing","shape"];function Dy(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:o={}}=t,s=Je(t,Q$),a=K$(n),l=Y$(i);let u=Fr({breakpoints:a,direction:"ltr",components:{},palette:L({mode:"light"},r),spacing:l,shape:L({},X$,o)},s);return u=e.reduce((f,h)=>Fr(f,h),u),u}const J$=I.exports.createContext(null),Z$=J$;function eD(){return I.exports.useContext(Z$)}function tD(t){return Object.keys(t).length===0}function w_(t=null){const e=eD();return!e||tD(e)?t:e}const nD=Dy();function b_(t=nD){return w_(t)}const rD=["variant"];function ub(t){return t.length===0}function S_(t){const{variant:e}=t,n=Je(t,rD);let r=e||"";return Object.keys(n).sort().forEach(i=>{i==="color"?r+=ub(r)?t[i]:Ie(t[i]):r+=`${ub(r)?i:Ie(i)}${Ie(t[i].toString())}`}),r}const iD=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],oD=["theme"],sD=["theme"];function Qa(t){return Object.keys(t).length===0}function aD(t){return typeof t=="string"&&t.charCodeAt(0)>96}const lD=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,uD=(t,e)=>{let n=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(n=e.components[t].variants);const r={};return n.forEach(i=>{const o=S_(i.props);r[o]=i.style}),r},cD=(t,e,n,r)=>{var i,o;const{ownerState:s={}}=t,a=[],l=n==null||(i=n.components)==null||(o=i[r])==null?void 0:o.variants;return l&&l.forEach(u=>{let f=!0;Object.keys(u.props).forEach(h=>{s[h]!==u.props[h]&&t[h]!==u.props[h]&&(f=!1)}),f&&a.push(e[S_(u.props)])}),a};function tf(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const fD=Dy();function dD(t={}){const{defaultTheme:e=fD,rootShouldForwardProp:n=tf,slotShouldForwardProp:r=tf,styleFunctionSx:i=W$}=t,o=s=>{const a=Qa(s.theme)?e:s.theme;return i(L({},s,{theme:a}))};return o.__mui_systemSx=!0,(s,a={})=>{pU(s,b=>b.filter(S=>!(S!=null&&S.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:f,skipSx:h,overridesResolver:p}=a,y=Je(a,iD),w=f!==void 0?f:u&&u!=="Root"||!1,v=h||!1;let c,d=tf;u==="Root"?d=n:u?d=r:aD(s)&&(d=void 0);const m=hU(s,L({shouldForwardProp:d,label:c},y)),g=(b,...S)=>{const E=S?S.map(x=>typeof x=="function"&&x.__emotion_real!==x?T=>{let{theme:R}=T,N=Je(T,oD);return x(L({theme:Qa(R)?e:R},N))}:x):[];let k=b;l&&p&&E.push(x=>{const T=Qa(x.theme)?e:x.theme,R=lD(l,T);if(R){const N={};return Object.entries(R).forEach(([V,O])=>{N[V]=typeof O=="function"?O(L({},x,{theme:T})):O}),p(x,N)}return null}),l&&!w&&E.push(x=>{const T=Qa(x.theme)?e:x.theme;return cD(x,uD(l,T),T,l)}),v||E.push(o);const _=E.length-S.length;if(Array.isArray(b)&&_>0){const x=new Array(_).fill("");k=[...b,...x],k.raw=[...b.raw,...x]}else typeof b=="function"&&b.__emotion_real!==b&&(k=x=>{let{theme:T}=x,R=Je(x,sD);return b(L({theme:Qa(T)?e:T},R))});return m(k,...E)};return m.withConfig&&(g.withConfig=m.withConfig),g}}function hD(t){const{theme:e,name:n,props:r}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?r:R2(e.components[n].defaultProps,r)}function pD({props:t,name:e,defaultTheme:n}){const r=b_(n);return hD({theme:r,name:e,props:t})}function My(t,e=0,n=1){return Math.min(Math.max(e,t),n)}function mD(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function $o(t){if(t.type)return t;if(t.charAt(0)==="#")return $o(mD(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error(ta(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(ta(10,i))}else r=r.split(",");return r=r.map(o=>parseFloat(o)),{type:n,values:r,colorSpace:i}}function sh(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.indexOf("rgb")!==-1?r=r.map((i,o)=>o<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function gD(t){t=$o(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,o=r*Math.min(i,1-i),s=(u,f=(u+n/30)%12)=>i-o*Math.max(Math.min(f-3,9-f,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),sh({type:a,values:l})}function cb(t){t=$o(t);let e=t.type==="hsl"||t.type==="hsla"?$o(gD(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function yD(t,e){const n=cb(t),r=cb(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function E_(t,e){return t=$o(t),e=My(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,sh(t)}function vD(t,e){if(t=$o(t),e=My(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return sh(t)}function wD(t,e){if(t=$o(t),e=My(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return sh(t)}function bD(t,e){return L({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const SD={black:"#000",white:"#fff"},nu=SD,ED={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},kD=ED,xD={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},as=xD,_D={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},ls=_D,CD={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Ja=CD,TD={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},us=TD,ID={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},cs=ID,zD={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},fs=zD,PD=["mode","contrastThreshold","tonalOffset"],fb={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:nu.white,default:nu.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Up={text:{primary:nu.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:nu.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function db(t,e,n,r){const i=r.light||r,o=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=wD(t.main,i):e==="dark"&&(t.dark=vD(t.main,o)))}function OD(t="light"){return t==="dark"?{main:us[200],light:us[50],dark:us[400]}:{main:us[700],light:us[400],dark:us[800]}}function RD(t="light"){return t==="dark"?{main:as[200],light:as[50],dark:as[400]}:{main:as[500],light:as[300],dark:as[700]}}function AD(t="light"){return t==="dark"?{main:ls[500],light:ls[300],dark:ls[700]}:{main:ls[700],light:ls[400],dark:ls[800]}}function ND(t="light"){return t==="dark"?{main:cs[400],light:cs[300],dark:cs[700]}:{main:cs[700],light:cs[500],dark:cs[900]}}function UD(t="light"){return t==="dark"?{main:fs[400],light:fs[300],dark:fs[700]}:{main:fs[800],light:fs[500],dark:fs[900]}}function $D(t="light"){return t==="dark"?{main:Ja[400],light:Ja[300],dark:Ja[700]}:{main:"#ed6c02",light:Ja[500],dark:Ja[900]}}function DD(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2}=t,i=Je(t,PD),o=t.primary||OD(e),s=t.secondary||RD(e),a=t.error||AD(e),l=t.info||ND(e),u=t.success||UD(e),f=t.warning||$D(e);function h(v){return yD(v,Up.text.primary)>=n?Up.text.primary:fb.text.primary}const p=({color:v,name:c,mainShade:d=500,lightShade:m=300,darkShade:g=700})=>{if(v=L({},v),!v.main&&v[d]&&(v.main=v[d]),!v.hasOwnProperty("main"))throw new Error(ta(11,c?` (${c})`:"",d));if(typeof v.main!="string")throw new Error(ta(12,c?` (${c})`:"",JSON.stringify(v.main)));return db(v,"light",m,r),db(v,"dark",g,r),v.contrastText||(v.contrastText=h(v.main)),v},y={dark:Up,light:fb};return Fr(L({common:L({},nu),mode:e,primary:p({color:o,name:"primary"}),secondary:p({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:a,name:"error"}),warning:p({color:f,name:"warning"}),info:p({color:l,name:"info"}),success:p({color:u,name:"success"}),grey:kD,contrastThreshold:n,getContrastText:h,augmentColor:p,tonalOffset:r},y[e]),i)}const MD=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function LD(t){return Math.round(t*1e5)/1e5}const hb={textTransform:"uppercase"},pb='"Roboto", "Helvetica", "Arial", sans-serif';function jD(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:r=pb,fontSize:i=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:f,pxToRem:h}=n,p=Je(n,MD),y=i/14,w=h||(d=>`${d/u*y}rem`),v=(d,m,g,b,S)=>L({fontFamily:r,fontWeight:d,fontSize:w(m),lineHeight:g},r===pb?{letterSpacing:`${LD(b/m)}em`}:{},S,f),c={h1:v(o,96,1.167,-1.5),h2:v(o,60,1.2,-.5),h3:v(s,48,1.167,0),h4:v(s,34,1.235,.25),h5:v(s,24,1.334,0),h6:v(a,20,1.6,.15),subtitle1:v(s,16,1.75,.15),subtitle2:v(a,14,1.57,.1),body1:v(s,16,1.5,.15),body2:v(s,14,1.43,.15),button:v(a,14,1.75,.4,hb),caption:v(s,12,1.66,.4),overline:v(s,12,2.66,1,hb)};return Fr(L({htmlFontSize:u,pxToRem:w,fontFamily:r,fontSize:i,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},c),p,{clone:!1})}const FD=.2,BD=.14,VD=.12;function Ne(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${FD})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${BD})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${VD})`].join(",")}const WD=["none",Ne(0,2,1,-1,0,1,1,0,0,1,3,0),Ne(0,3,1,-2,0,2,2,0,0,1,5,0),Ne(0,3,3,-2,0,3,4,0,0,1,8,0),Ne(0,2,4,-1,0,4,5,0,0,1,10,0),Ne(0,3,5,-1,0,5,8,0,0,1,14,0),Ne(0,3,5,-1,0,6,10,0,0,1,18,0),Ne(0,4,5,-2,0,7,10,1,0,2,16,1),Ne(0,5,5,-3,0,8,10,1,0,3,14,2),Ne(0,5,6,-3,0,9,12,1,0,3,16,2),Ne(0,6,6,-3,0,10,14,1,0,4,18,3),Ne(0,6,7,-4,0,11,15,1,0,4,20,3),Ne(0,7,8,-4,0,12,17,2,0,5,22,4),Ne(0,7,8,-4,0,13,19,2,0,5,24,4),Ne(0,7,9,-4,0,14,21,2,0,5,26,4),Ne(0,8,9,-5,0,15,22,2,0,6,28,5),Ne(0,8,10,-5,0,16,24,2,0,6,30,5),Ne(0,8,11,-5,0,17,26,2,0,6,32,5),Ne(0,9,11,-5,0,18,28,2,0,7,34,6),Ne(0,9,12,-6,0,19,29,2,0,7,36,6),Ne(0,10,13,-6,0,20,31,3,0,8,38,7),Ne(0,10,13,-6,0,21,33,3,0,8,40,7),Ne(0,10,14,-6,0,22,35,3,0,8,42,7),Ne(0,11,14,-7,0,23,36,3,0,9,44,8),Ne(0,11,15,-7,0,24,38,3,0,9,46,8)],HD=WD,qD=["duration","easing","delay"],KD={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},GD={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function mb(t){return`${Math.round(t)}ms`}function XD(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function YD(t){const e=L({},KD,t.easing),n=L({},GD,t.duration);return L({getAutoHeightDuration:XD,create:(i=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0}=o;return Je(o,qD),(Array.isArray(i)?i:[i]).map(u=>`${u} ${typeof s=="string"?s:mb(s)} ${a} ${typeof l=="string"?l:mb(l)}`).join(",")}},t,{easing:e,duration:n})}const QD={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},JD=QD,ZD=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function eM(t={},...e){const{mixins:n={},palette:r={},transitions:i={},typography:o={}}=t,s=Je(t,ZD);if(t.vars)throw new Error(ta(18));const a=DD(r),l=Dy(t);let u=Fr(l,{mixins:bD(l.breakpoints,n),palette:a,shadows:HD.slice(),typography:jD(a,o),transitions:YD(i),zIndex:L({},JD)});return u=Fr(u,s),u=e.reduce((f,h)=>Fr(f,h),u),u}const tM=eM(),Ly=tM,nM=t=>tf(t)&&t!=="classes",rM=dD({defaultTheme:Ly,rootShouldForwardProp:nM}),_r=rM;function k_(){return b_(Ly)}function Nu({props:t,name:e}){return pD({props:t,name:e,defaultTheme:Ly})}function hg(t,e){return hg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},hg(t,e)}function iM(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,hg(t,e)}const gb={disabled:!1},x_=_i.createContext(null);var oM=function(e){return e.scrollTop},sl="unmounted",ho="exited",po="entering",ps="entered",pg="exiting",ii=function(t){iM(e,t);function e(r,i){var o;o=t.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?a?(l=ho,o.appearStatus=po):l=ps:r.unmountOnExit||r.mountOnEnter?l=sl:l=ho,o.state={status:l},o.nextCallback=null,o}e.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===sl?{status:ho}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==po&&s!==ps&&(o=po):(s===po||s===ps)&&(o=pg)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===po){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:_c.findDOMNode(this);s&&oM(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ho&&this.setState({status:sl})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[_c.findDOMNode(this),a],u=l[0],f=l[1],h=this.getTimeouts(),p=a?h.appear:h.enter;if(!i&&!s||gb.disabled){this.safeSetState({status:ps},function(){o.props.onEntered(u)});return}this.props.onEnter(u,f),this.safeSetState({status:po},function(){o.props.onEntering(u,f),o.onTransitionEnd(p,function(){o.safeSetState({status:ps},function(){o.props.onEntered(u,f)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:_c.findDOMNode(this);if(!o||gb.disabled){this.safeSetState({status:ho},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:pg},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:ho},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:_c.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=l[0],f=l[1];this.props.addEndListener(u,f)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===sl)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=Je(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ee(x_.Provider,{value:null,children:typeof s=="function"?s(i,a):_i.cloneElement(_i.Children.only(s),a)})},e}(_i.Component);ii.contextType=x_;ii.propTypes={};function ds(){}ii.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ds,onEntering:ds,onEntered:ds,onExit:ds,onExiting:ds,onExited:ds};ii.UNMOUNTED=sl;ii.EXITED=ho;ii.ENTERING=po;ii.ENTERED=ps;ii.EXITING=pg;const sM=ii,aM=t=>t.scrollTop;function yb(t,e){var n,r;const{timeout:i,easing:o,style:s={}}=t;return{duration:(n=s.transitionDuration)!=null?n:typeof i=="number"?i:i[e.mode]||0,easing:(r=s.transitionTimingFunction)!=null?r:typeof o=="object"?o[e.mode]:o,delay:s.transitionDelay}}const lM=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function mg(t){return`scale(${t}, ${t**2})`}const uM={entering:{opacity:1,transform:mg(1)},entered:{opacity:1,transform:"none"}},$p=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),__=I.exports.forwardRef(function(e,n){const{addEndListener:r,appear:i=!0,children:o,easing:s,in:a,onEnter:l,onEntered:u,onEntering:f,onExit:h,onExited:p,onExiting:y,style:w,timeout:v="auto",TransitionComponent:c=sM}=e,d=Je(e,lM),m=I.exports.useRef(),g=I.exports.useRef(),b=k_(),S=I.exports.useRef(null),E=Bi(S,o.ref,n),k=O=>U=>{if(O){const j=S.current;U===void 0?O(j):O(j,U)}},_=k(f),C=k((O,U)=>{aM(O);const{duration:j,delay:P,easing:A}=yb({style:w,timeout:v,easing:s},{mode:"enter"});let F;v==="auto"?(F=b.transitions.getAutoHeightDuration(O.clientHeight),g.current=F):F=j,O.style.transition=[b.transitions.create("opacity",{duration:F,delay:P}),b.transitions.create("transform",{duration:$p?F:F*.666,delay:P,easing:A})].join(","),l&&l(O,U)}),x=k(u),T=k(y),R=k(O=>{const{duration:U,delay:j,easing:P}=yb({style:w,timeout:v,easing:s},{mode:"exit"});let A;v==="auto"?(A=b.transitions.getAutoHeightDuration(O.clientHeight),g.current=A):A=U,O.style.transition=[b.transitions.create("opacity",{duration:A,delay:j}),b.transitions.create("transform",{duration:$p?A:A*.666,delay:$p?j:j||A*.333,easing:P})].join(","),O.style.opacity=0,O.style.transform=mg(.75),h&&h(O)}),N=k(p),V=O=>{v==="auto"&&(m.current=setTimeout(O,g.current||0)),r&&r(S.current,O)};return I.exports.useEffect(()=>()=>{clearTimeout(m.current)},[]),ee(c,L({appear:i,in:a,nodeRef:S,onEnter:C,onEntered:x,onEntering:_,onExit:R,onExited:N,onExiting:T,addEndListener:V,timeout:v==="auto"?null:v},d,{children:(O,U)=>I.exports.cloneElement(o,L({style:L({opacity:0,transform:mg(.75),visibility:O==="exited"&&!a?"hidden":void 0},uM[O],w,o.props.style),ref:E},U))}))});__.muiSupportAuto=!0;const vb=__,cM=["components","componentsProps","slots","slotProps"],fM=_r(cN,{name:"MuiPopper",slot:"Root",overridesResolver:(t,e)=>e.root})({}),dM=I.exports.forwardRef(function(e,n){var r;const i=w_(),o=Nu({props:e,name:"MuiPopper"}),{components:s,componentsProps:a,slots:l,slotProps:u}=o,f=Je(o,cM),h=(r=l==null?void 0:l.root)!=null?r:s==null?void 0:s.Root;return ee(fM,L({direction:i==null?void 0:i.direction,slots:{root:h},slotProps:u!=null?u:a},f,{ref:n}))}),C_=dM;function hM(t){return Ho("MuiTooltip",t)}const pM=_a("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),xi=pM,mM=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function gM(t){return Math.round(t*1e5)/1e5}const yM=t=>{const{classes:e,disableInteractive:n,arrow:r,touch:i,placement:o}=t,s={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",i&&"touch",`tooltipPlacement${Ie(o.split("-")[0])}`],arrow:["arrow"]};return xa(s,hM,e)},vM=_r(C_,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.popper,!n.disableInteractive&&e.popperInteractive,n.arrow&&e.popperArrow,!n.open&&e.popperClose]}})(({theme:t,ownerState:e,open:n})=>L({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!e.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},e.arrow&&{[`&[data-popper-placement*="bottom"] .${xi.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${xi.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${xi.arrow}`]:L({},e.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${xi.arrow}`]:L({},e.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),wM=_r("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.tooltip,n.touch&&e.touch,n.arrow&&e.tooltipArrow,e[`tooltipPlacement${Ie(n.placement.split("-")[0])}`]]}})(({theme:t,ownerState:e})=>L({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:E_(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},e.arrow&&{position:"relative",margin:0},e.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${gM(16/14)}em`,fontWeight:t.typography.fontWeightRegular},{[`.${xi.popper}[data-popper-placement*="left"] &`]:L({transformOrigin:"right center"},e.isRtl?L({marginLeft:"14px"},e.touch&&{marginLeft:"24px"}):L({marginRight:"14px"},e.touch&&{marginRight:"24px"})),[`.${xi.popper}[data-popper-placement*="right"] &`]:L({transformOrigin:"left center"},e.isRtl?L({marginRight:"14px"},e.touch&&{marginRight:"24px"}):L({marginLeft:"14px"},e.touch&&{marginLeft:"24px"})),[`.${xi.popper}[data-popper-placement*="top"] &`]:L({transformOrigin:"center bottom",marginBottom:"14px"},e.touch&&{marginBottom:"24px"}),[`.${xi.popper}[data-popper-placement*="bottom"] &`]:L({transformOrigin:"center top",marginTop:"14px"},e.touch&&{marginTop:"24px"})})),bM=_r("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:E_(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Pc=!1,Dp=null;function Oc(t,e){return n=>{e&&e(n),t(n)}}const SM=I.exports.forwardRef(function(e,n){var r,i,o,s,a,l,u,f,h,p,y,w,v,c,d,m,g,b,S;const E=Nu({props:e,name:"MuiTooltip"}),{arrow:k=!1,children:_,components:C={},componentsProps:x={},describeChild:T=!1,disableFocusListener:R=!1,disableHoverListener:N=!1,disableInteractive:V=!1,disableTouchListener:O=!1,enterDelay:U=100,enterNextDelay:j=0,enterTouchDelay:P=700,followCursor:A=!1,id:F,leaveDelay:Q=0,leaveTouchDelay:le=1500,onClose:Ge,onOpen:it,open:Me,placement:Le="bottom",PopperComponent:We,PopperProps:Xe={},slotProps:je={},slots:er={},title:He,TransitionComponent:Ra=vb,TransitionProps:Qt}=E,mn=Je(E,mM),Ft=k_(),Cr=Ft.direction==="rtl",[gn,Tt]=I.exports.useState(),[tr,Jt]=I.exports.useState(null),Zt=I.exports.useRef(!1),Wn=V||A,nr=I.exports.useRef(),rr=I.exports.useRef(),Bt=I.exports.useRef(),Tr=I.exports.useRef(),[no,si]=Ix({controlled:Me,default:!1,name:"Tooltip",state:"open"});let Pn=no;const Aa=Tx(F),ro=I.exports.useRef(),io=I.exports.useCallback(()=>{ro.current!==void 0&&(document.body.style.WebkitUserSelect=ro.current,ro.current=void 0),clearTimeout(Tr.current)},[]);I.exports.useEffect(()=>()=>{clearTimeout(nr.current),clearTimeout(rr.current),clearTimeout(Bt.current),io()},[io]);const tc=B=>{clearTimeout(Dp),Pc=!0,si(!0),it&&!Pn&&it(B)},Vt=my(B=>{clearTimeout(Dp),Dp=setTimeout(()=>{Pc=!1},800+Q),si(!1),Ge&&Pn&&Ge(B),clearTimeout(nr.current),nr.current=setTimeout(()=>{Zt.current=!1},Ft.transitions.duration.shortest)}),On=B=>{Zt.current&&B.type!=="touchstart"||(gn&&gn.removeAttribute("title"),clearTimeout(rr.current),clearTimeout(Bt.current),U||Pc&&j?rr.current=setTimeout(()=>{tc(B)},Pc?j:U):tc(B))},Hn=B=>{clearTimeout(rr.current),clearTimeout(Bt.current),Bt.current=setTimeout(()=>{Vt(B)},Q)},{isFocusVisibleRef:yn,onBlur:vn,onFocus:Na,ref:nc}=zx(),[,Ua]=I.exports.useState(!1),Qo=B=>{vn(B),yn.current===!1&&(Ua(!1),Hn(B))},Jo=B=>{gn||Tt(B.currentTarget),Na(B),yn.current===!0&&(Ua(!0),On(B))},Zo=B=>{Zt.current=!0;const H=_.props;H.onTouchStart&&H.onTouchStart(B)},Rn=On,es=Hn,Wh=B=>{Zo(B),clearTimeout(Bt.current),clearTimeout(nr.current),io(),ro.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Tr.current=setTimeout(()=>{document.body.style.WebkitUserSelect=ro.current,On(B)},P)},Hh=B=>{_.props.onTouchEnd&&_.props.onTouchEnd(B),io(),clearTimeout(Bt.current),Bt.current=setTimeout(()=>{Vt(B)},le)};I.exports.useEffect(()=>{if(!Pn)return;function B(H){(H.key==="Escape"||H.key==="Esc")&&Vt(H)}return document.addEventListener("keydown",B),()=>{document.removeEventListener("keydown",B)}},[Vt,Pn]);const qh=Bi(_.ref,nc,Tt,n);!He&&He!==0&&(Pn=!1);const oo=I.exports.useRef({x:0,y:0}),$a=I.exports.useRef(),Kh=B=>{const H=_.props;H.onMouseMove&&H.onMouseMove(B),oo.current={x:B.clientX,y:B.clientY},$a.current&&$a.current.update()},ai={},Ir=typeof He=="string";T?(ai.title=!Pn&&Ir&&!N?He:null,ai["aria-describedby"]=Pn?Aa:null):(ai["aria-label"]=Ir?He:null,ai["aria-labelledby"]=Pn&&!Ir?Aa:null);const It=L({},ai,mn,_.props,{className:dr(mn.className,_.props.className),onTouchStart:Zo,ref:qh},A?{onMouseMove:Kh}:{}),en={};O||(It.onTouchStart=Wh,It.onTouchEnd=Hh),N||(It.onMouseOver=Oc(Rn,It.onMouseOver),It.onMouseLeave=Oc(es,It.onMouseLeave),Wn||(en.onMouseOver=Rn,en.onMouseLeave=es)),R||(It.onFocus=Oc(Jo,It.onFocus),It.onBlur=Oc(Qo,It.onBlur),Wn||(en.onFocus=Jo,en.onBlur=Qo));const so=I.exports.useMemo(()=>{var B;let H=[{name:"arrow",enabled:Boolean(tr),options:{element:tr,padding:4}}];return(B=Xe.popperOptions)!=null&&B.modifiers&&(H=H.concat(Xe.popperOptions.modifiers)),L({},Xe.popperOptions,{modifiers:H})},[tr,Xe]),zr=L({},E,{isRtl:Cr,arrow:k,disableInteractive:Wn,placement:Le,PopperComponentProp:We,touch:Zt.current}),ts=yM(zr),Da=(r=(i=er.popper)!=null?i:C.Popper)!=null?r:vM,ns=(o=(s=(a=er.transition)!=null?a:C.Transition)!=null?s:Ra)!=null?o:vb,ao=(l=(u=er.tooltip)!=null?u:C.Tooltip)!=null?l:wM,rc=(f=(h=er.arrow)!=null?h:C.Arrow)!=null?f:bM,li=ol(Da,L({},Xe,(p=je.popper)!=null?p:x.popper,{className:dr(ts.popper,Xe==null?void 0:Xe.className,(y=(w=je.popper)!=null?w:x.popper)==null?void 0:y.className)}),zr),Gh=ol(ns,L({},Qt,(v=je.transition)!=null?v:x.transition),zr),Ma=ol(ao,L({},(c=je.tooltip)!=null?c:x.tooltip,{className:dr(ts.tooltip,(d=(m=je.tooltip)!=null?m:x.tooltip)==null?void 0:d.className)}),zr),lo=ol(rc,L({},(g=je.arrow)!=null?g:x.arrow,{className:dr(ts.arrow,(b=(S=je.arrow)!=null?S:x.arrow)==null?void 0:b.className)}),zr);return Ao(I.exports.Fragment,{children:[I.exports.cloneElement(_,It),ee(Da,L({as:We!=null?We:C_,placement:Le,anchorEl:A?{getBoundingClientRect:()=>({top:oo.current.y,left:oo.current.x,right:oo.current.x,bottom:oo.current.y,width:0,height:0})}:gn,popperRef:$a,open:gn?Pn:!1,id:Aa,transition:!0},en,li,{popperOptions:so,children:({TransitionProps:B})=>ee(ns,L({timeout:Ft.transitions.duration.shorter},B,Gh,{"data-foo":"bar",children:Ao(ao,L({},Ma,{children:[He,k?ee(rc,L({},lo,{ref:Jt})):null]}))}))}))]})}),F6=SM;function EM(t){return Ho("MuiSvgIcon",t)}_a("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const kM=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],xM=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${Ie(e)}`,`fontSize${Ie(n)}`]};return xa(i,EM,r)},_M=_r("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${Ie(n.color)}`],e[`fontSize${Ie(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,r,i,o,s,a,l,u,f,h,p,y,w,v,c,d,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(i=t.transitions)==null||(o=i.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((s=t.typography)==null||(a=s.pxToRem)==null?void 0:a.call(s,20))||"1.25rem",medium:((l=t.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,24))||"1.5rem",large:((f=t.typography)==null||(h=f.pxToRem)==null?void 0:h.call(f,35))||"2.1875rem"}[e.fontSize],color:(p=(y=(t.vars||t).palette)==null||(w=y[e.color])==null?void 0:w.main)!=null?p:{action:(v=(t.vars||t).palette)==null||(c=v.action)==null?void 0:c.active,disabled:(d=(t.vars||t).palette)==null||(m=d.action)==null?void 0:m.disabled,inherit:void 0}[e.color]}}),T_=I.exports.forwardRef(function(e,n){const r=Nu({props:e,name:"MuiSvgIcon"}),{children:i,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:f=!1,titleAccess:h,viewBox:p="0 0 24 24"}=r,y=Je(r,kM),w=L({},r,{color:s,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:p}),v={};f||(v.viewBox=p);const c=xM(w);return Ao(_M,L({as:a,className:dr(c.root,o),focusable:"false",color:u,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},v,y,{ownerState:w,children:[i,h?ee("title",{children:h}):null]}))});T_.muiName="SvgIcon";const wb=T_;function CM(t,e){function n(r,i){return ee(wb,L({"data-testid":`${e}Icon`,ref:i},r,{children:t}))}return n.muiName=wb.muiName,I.exports.memo(I.exports.forwardRef(n))}const TM={configure:t=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),Ox.configure(t)}},IM=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:TM,capitalize:Ie,createChainedFunction:g2,createSvgIcon:CM,debounce:y2,deprecatedPropType:v2,isMuiElement:w2,ownerDocument:Ms,ownerWindow:b2,requirePropFactory:S2,setRef:jf,unstable_useEnhancedEffect:na,unstable_useId:Tx,unsupportedProp:x2,useControlled:Ix,useEventCallback:my,useForkRef:Bi,useIsFocusVisible:zx},Symbol.toStringTag,{value:"Module"})),zM=t=>!t||!Rx(t),bb=zM;function PM(t){return Ho("MuiBadge",t)}const OM=_a("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),ci=OM,RM=["anchorOrigin","className","component","components","componentsProps","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],Mp=10,Lp=4,AM=t=>{const{color:e,anchorOrigin:n,invisible:r,overlap:i,variant:o,classes:s={}}=t,a={root:["root"],badge:["badge",o,r&&"invisible",`anchorOrigin${Ie(n.vertical)}${Ie(n.horizontal)}`,`anchorOrigin${Ie(n.vertical)}${Ie(n.horizontal)}${Ie(i)}`,`overlap${Ie(i)}`,e!=="default"&&`color${Ie(e)}`]};return xa(a,PM,s)},NM=_r("span",{name:"MuiBadge",slot:"Root",overridesResolver:(t,e)=>e.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),UM=_r("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.badge,e[n.variant],e[`anchorOrigin${Ie(n.anchorOrigin.vertical)}${Ie(n.anchorOrigin.horizontal)}${Ie(n.overlap)}`],n.color!=="default"&&e[`color${Ie(n.color)}`],n.invisible&&e.invisible]}})(({theme:t,ownerState:e})=>L({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:Mp*2,lineHeight:1,padding:"0 6px",height:Mp*2,borderRadius:Mp,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen})},e.color!=="default"&&{backgroundColor:(t.vars||t).palette[e.color].main,color:(t.vars||t).palette[e.color].contrastText},e.variant==="dot"&&{borderRadius:Lp,height:Lp*2,minWidth:Lp*2,padding:0},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${ci.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${ci.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${ci.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${ci.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${ci.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="right"&&e.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${ci.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},e.anchorOrigin.vertical==="top"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${ci.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},e.anchorOrigin.vertical==="bottom"&&e.anchorOrigin.horizontal==="left"&&e.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${ci.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},e.invisible&&{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})})),$M=I.exports.forwardRef(function(e,n){var r,i,o,s,a,l;const u=Nu({props:e,name:"MuiBadge"}),{anchorOrigin:f={vertical:"top",horizontal:"right"},className:h,component:p="span",components:y={},componentsProps:w={},overlap:v="rectangular",color:c="default",invisible:d=!1,max:m,badgeContent:g,slots:b,slotProps:S,showZero:E=!1,variant:k="standard"}=u,_=Je(u,RM),C=Px({anchorOrigin:f,color:c,overlap:v,variant:k});let x=d;d===!1&&(g===0&&!E||g==null&&k!=="dot")&&(x=!0);const{color:T=c,overlap:R=v,anchorOrigin:N=f,variant:V=k}=x?C:u,O=L({},u,{anchorOrigin:N,invisible:x,color:T,overlap:R,variant:V}),U=AM(O);let j;V!=="dot"&&(j=g&&Number(g)>m?`${m}+`:g);const P=(r=(i=b==null?void 0:b.root)!=null?i:y.Root)!=null?r:NM,A=(o=(s=b==null?void 0:b.badge)!=null?s:y.Badge)!=null?o:UM,F=(a=S==null?void 0:S.root)!=null?a:w.root,Q=(l=S==null?void 0:S.badge)!=null?l:w.badge;return ee(H2,L({invisible:d,badgeContent:j,showZero:E,max:m},_,{slots:{root:P,badge:A},className:dr(F==null?void 0:F.className,U.root,h),slotProps:{root:L({},F,bb(P)&&{as:p,ownerState:L({},F==null?void 0:F.ownerState,{anchorOrigin:N,color:T,overlap:R,variant:V})}),badge:L({},Q,{className:dr(U.badge,Q==null?void 0:Q.className)},bb(A)&&{ownerState:L({},Q==null?void 0:Q.ownerState,{anchorOrigin:N,color:T,overlap:R,variant:V})})},ref:n}))}),B6=$M;function DM(t){return Ho("MuiCircularProgress",t)}_a("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const MM=["className","color","disableShrink","size","style","thickness","value","variant"];let ah=t=>t,Sb,Eb,kb,xb;const fi=44,LM=i_(Sb||(Sb=ah`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),jM=i_(Eb||(Eb=ah`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),FM=t=>{const{classes:e,variant:n,color:r,disableShrink:i}=t,o={root:["root",n,`color${Ie(r)}`],svg:["svg"],circle:["circle",`circle${Ie(n)}`,i&&"circleDisableShrink"]};return xa(o,DM,e)},BM=_r("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[n.variant],e[`color${Ie(n.color)}`]]}})(({ownerState:t,theme:e})=>L({display:"inline-block"},t.variant==="determinate"&&{transition:e.transitions.create("transform")},t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&zy(kb||(kb=ah`
      animation: ${0} 1.4s linear infinite;
    `),LM)),VM=_r("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),WM=_r("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.circle,e[`circle${Ie(n.variant)}`],n.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>L({stroke:"currentColor"},t.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&zy(xb||(xb=ah`
      animation: ${0} 1.4s ease-in-out infinite;
    `),jM)),HM=I.exports.forwardRef(function(e,n){const r=Nu({props:e,name:"MuiCircularProgress"}),{className:i,color:o="primary",disableShrink:s=!1,size:a=40,style:l,thickness:u=3.6,value:f=0,variant:h="indeterminate"}=r,p=Je(r,MM),y=L({},r,{color:o,disableShrink:s,size:a,thickness:u,value:f,variant:h}),w=FM(y),v={},c={},d={};if(h==="determinate"){const m=2*Math.PI*((fi-u)/2);v.strokeDasharray=m.toFixed(3),d["aria-valuenow"]=Math.round(f),v.strokeDashoffset=`${((100-f)/100*m).toFixed(3)}px`,c.transform="rotate(-90deg)"}return ee(BM,L({className:dr(w.root,i),style:L({width:a,height:a},c,l),ownerState:y,ref:n,role:"progressbar"},d,p,{children:ee(VM,{className:w.svg,ownerState:y,viewBox:`${fi/2} ${fi/2} ${fi} ${fi}`,children:ee(WM,{className:w.circle,style:v,ownerState:y,cx:fi,cy:fi,r:(fi-u)/2,fill:"none",strokeWidth:u})})}))}),V6=HM;var jy={},I_={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(I_);var jp={};const qM=Xg(IM);var _b;function KM(){return _b||(_b=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=qM}(jp)),jp}const GM=Xg(TO);var XM=I_.exports;Object.defineProperty(jy,"__esModule",{value:!0});var YM=jy.default=void 0,QM=XM(KM()),JM=GM,ZM=(0,QM.default)((0,JM.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"}),"CheckBoxOutlined");YM=jy.default=ZM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},e5=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},P_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(p=64)),r.push(n[f],n[h],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(z_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e5(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||h==null)throw Error();const p=o<<2|a>>4;if(r.push(p),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},t5=function(t){const e=z_(t);return P_.encodeByteArray(e,!0)},Vf=function(t){return t5(t).replace(/\./g,"")},O_=function(t){try{return P_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function n5(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function r5(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function i5(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o5(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function s5(){return typeof indexedDB=="object"}function a5(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function l5(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u5=()=>l5().__FIREBASE_DEFAULTS__,c5=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},f5=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&O_(t[1]);return e&&JSON.parse(e)},Fy=()=>{try{return u5()||c5()||f5()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},R_=t=>{var e,n;return(n=(e=Fy())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},d5=t=>{const e=R_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h5=()=>{var t;return(t=Fy())===null||t===void 0?void 0:t.config},A_=t=>{var e;return(e=Fy())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m5(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Vf(JSON.stringify(n)),Vf(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g5="FirebaseError";class oi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=g5,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uu.prototype.create)}}class Uu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?y5(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new oi(i,a,r)}}function y5(t,e){return t.replace(v5,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const v5=/\{\$([^}]+)}/g;function w5(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Cb(o)&&Cb(s)){if(!Wf(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cb(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function b5(t,e){const n=new S5(t,e);return n.subscribe.bind(n)}class S5{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");E5(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fp),i.error===void 0&&(i.error=Fp),i.complete===void 0&&(i.complete=Fp);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E5(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t){return t&&t._delegate?t._delegate:t}class Do{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new p5;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_5(e))try{this.getOrInitializeService({instanceIdentifier:mo})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=mo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mo){return this.instances.has(e)}getOptions(e=mo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:x5(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mo){return this.component?this.component.multipleInstances?e:mo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function x5(t){return t===mo?void 0:t}function _5(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C5{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new k5(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const T5={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},I5=we.INFO,z5={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},P5=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=z5[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class By{constructor(e){this.name=e,this._logLevel=I5,this._logHandler=P5,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?T5[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const O5=(t,e)=>e.some(n=>t instanceof n);let Tb,Ib;function R5(){return Tb||(Tb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A5(){return Ib||(Ib=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N_=new WeakMap,gg=new WeakMap,U_=new WeakMap,Bp=new WeakMap,Vy=new WeakMap;function N5(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ui(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&N_.set(n,t)}).catch(()=>{}),Vy.set(e,t),e}function U5(t){if(gg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});gg.set(t,e)}let yg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||U_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $5(t){yg=t(yg)}function D5(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vp(this),e,...n);return U_.set(r,e.sort?e.sort():[e]),Ui(r)}:A5().includes(t)?function(...e){return t.apply(Vp(this),e),Ui(N_.get(this))}:function(...e){return Ui(t.apply(Vp(this),e))}}function M5(t){return typeof t=="function"?D5(t):(t instanceof IDBTransaction&&U5(t),O5(t,R5())?new Proxy(t,yg):t)}function Ui(t){if(t instanceof IDBRequest)return N5(t);if(Bp.has(t))return Bp.get(t);const e=M5(t);return e!==t&&(Bp.set(t,e),Vy.set(e,t)),e}const Vp=t=>Vy.get(t);function L5(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ui(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ui(s.result),l.oldVersion,l.newVersion,Ui(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const j5=["get","getKey","getAll","getAllKeys","count"],F5=["put","add","delete","clear"],Wp=new Map;function zb(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wp.get(e))return Wp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=F5.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||j5.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Wp.set(e,o),o}$5(t=>({...t,get:(e,n,r)=>zb(e,n)||t.get(e,n,r),has:(e,n)=>!!zb(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V5(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function V5(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vg="@firebase/app",Pb="0.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new By("@firebase/app"),W5="@firebase/app-compat",H5="@firebase/analytics-compat",q5="@firebase/analytics",K5="@firebase/app-check-compat",G5="@firebase/app-check",X5="@firebase/auth",Y5="@firebase/auth-compat",Q5="@firebase/database",J5="@firebase/database-compat",Z5="@firebase/functions",eL="@firebase/functions-compat",tL="@firebase/installations",nL="@firebase/installations-compat",rL="@firebase/messaging",iL="@firebase/messaging-compat",oL="@firebase/performance",sL="@firebase/performance-compat",aL="@firebase/remote-config",lL="@firebase/remote-config-compat",uL="@firebase/storage",cL="@firebase/storage-compat",fL="@firebase/firestore",dL="@firebase/firestore-compat",hL="firebase",pL="9.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="[DEFAULT]",mL={[vg]:"fire-core",[W5]:"fire-core-compat",[q5]:"fire-analytics",[H5]:"fire-analytics-compat",[G5]:"fire-app-check",[K5]:"fire-app-check-compat",[X5]:"fire-auth",[Y5]:"fire-auth-compat",[Q5]:"fire-rtdb",[J5]:"fire-rtdb-compat",[Z5]:"fire-fn",[eL]:"fire-fn-compat",[tL]:"fire-iid",[nL]:"fire-iid-compat",[rL]:"fire-fcm",[iL]:"fire-fcm-compat",[oL]:"fire-perf",[sL]:"fire-perf-compat",[aL]:"fire-rc",[lL]:"fire-rc-compat",[uL]:"fire-gcs",[cL]:"fire-gcs-compat",[fL]:"fire-fst",[dL]:"fire-fst-compat","fire-js":"fire-js",[hL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new Map,bg=new Map;function gL(t,e){try{t.container.addComponent(e)}catch(n){Mo.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function la(t){const e=t.name;if(bg.has(e))return Mo.debug(`There were multiple attempts to register component ${e}.`),!1;bg.set(e,t);for(const n of Hf.values())gL(n,t);return!0}function Wy(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yL={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$i=new Uu("app","Firebase",yL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Do("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $i.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=pL;function wL(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $i.create("bad-app-name",{appName:String(i)});if(n||(n=h5()),!n)throw $i.create("no-options");const o=Hf.get(i);if(o){if(Wf(n,o.options)&&Wf(r,o.config))return o;throw $i.create("duplicate-app",{appName:i})}const s=new C5(i);for(const l of bg.values())s.addComponent(l);const a=new vL(n,r,s);return Hf.set(i,a),a}function $_(t=wg){const e=Hf.get(t);if(!e&&t===wg)return wL();if(!e)throw $i.create("no-app",{appName:t});return e}function Di(t,e,n){var r;let i=(r=mL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mo.warn(a.join(" "));return}la(new Do(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bL="firebase-heartbeat-database",SL=1,ru="firebase-heartbeat-store";let Hp=null;function D_(){return Hp||(Hp=L5(bL,SL,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ru)}}}).catch(t=>{throw $i.create("idb-open",{originalErrorMessage:t.message})})),Hp}async function EL(t){var e;try{return(await D_()).transaction(ru).objectStore(ru).get(M_(t))}catch(n){if(n instanceof oi)Mo.warn(n.message);else{const r=$i.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Mo.warn(r.message)}}}async function Ob(t,e){var n;try{const i=(await D_()).transaction(ru,"readwrite");return await i.objectStore(ru).put(e,M_(t)),i.done}catch(r){if(r instanceof oi)Mo.warn(r.message);else{const i=$i.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Mo.warn(i.message)}}}function M_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=1024,xL=30*24*60*60*1e3;class _L{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rb();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=xL}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Rb(),{heartbeatsToSend:n,unsentEntries:r}=CL(this._heartbeatsCache.heartbeats),i=Vf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Rb(){return new Date().toISOString().substring(0,10)}function CL(t,e=kL){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Ab(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ab(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s5()?a5().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await EL(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ob(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ob(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ab(t){return Vf(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(t){la(new Do("platform-logger",e=>new B5(e),"PRIVATE")),la(new Do("heartbeat",e=>new _L(e),"PRIVATE")),Di(vg,Pb,t),Di(vg,Pb,"esm2017"),Di("fire-js","")}IL("");var zL="firebase",PL="9.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Di(zL,PL,"app");var OL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},G,Hy=Hy||{},ne=OL||self;function qf(){}function lh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function RL(t){return Object.prototype.hasOwnProperty.call(t,qp)&&t[qp]||(t[qp]=++AL)}var qp="closure_uid_"+(1e9*Math.random()>>>0),AL=0;function NL(t,e,n){return t.call.apply(t.bind,arguments)}function UL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function $t(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$t=NL:$t=UL,$t.apply(null,arguments)}function Rc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ct(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return e.prototype[i].apply(r,s)}}function eo(){this.s=this.s,this.o=this.o}var $L=0;eo.prototype.s=!1;eo.prototype.na=function(){!this.s&&(this.s=!0,this.M(),$L!=0)&&RL(this)};eo.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const L_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Nb(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(lh(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function Dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var DL=function(){if(!ne.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ne.addEventListener("test",qf,e),ne.removeEventListener("test",qf,e)}catch{}return t}();function Kf(t){return/^[\s\xa0]*$/.test(t)}var Ub=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Kp(t,e){return t<e?-1:t>e?1:0}function uh(){var t=ne.navigator;return t&&(t=t.userAgent)?t:""}function fr(t){return uh().indexOf(t)!=-1}function Ky(t){return Ky[" "](t),t}Ky[" "]=qf;function ML(t){var e=FL;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var LL=fr("Opera"),ua=fr("Trident")||fr("MSIE"),j_=fr("Edge"),Sg=j_||ua,F_=fr("Gecko")&&!(uh().toLowerCase().indexOf("webkit")!=-1&&!fr("Edge"))&&!(fr("Trident")||fr("MSIE"))&&!fr("Edge"),jL=uh().toLowerCase().indexOf("webkit")!=-1&&!fr("Edge");function B_(){var t=ne.document;return t?t.documentMode:void 0}var Gf;e:{var Gp="",Xp=function(){var t=uh();if(F_)return/rv:([^\);]+)(\)|;)/.exec(t);if(j_)return/Edge\/([\d\.]+)/.exec(t);if(ua)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(jL)return/WebKit\/(\S+)/.exec(t);if(LL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xp&&(Gp=Xp?Xp[1]:""),ua){var Yp=B_();if(Yp!=null&&Yp>parseFloat(Gp)){Gf=String(Yp);break e}}Gf=Gp}var FL={};function BL(){return ML(function(){let t=0;const e=Ub(String(Gf)).split("."),n=Ub("9").split("."),r=Math.max(e.length,n.length);for(let s=0;t==0&&s<r;s++){var i=e[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;t=Kp(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||Kp(i[2].length==0,o[2].length==0)||Kp(i[2],o[2]),i=i[3],o=o[3]}while(t==0)}return 0<=t})}var Eg;if(ne.document&&ua){var $b=B_();Eg=$b||parseInt(Gf,10)||void 0}else Eg=void 0;var VL=Eg;function iu(t,e){if(Dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(F_){e:{try{Ky(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:WL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&iu.X.h.call(this)}}Ct(iu,Dt);var WL={2:"touch",3:"pen",4:"mouse"};iu.prototype.h=function(){iu.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Lu="closure_listenable_"+(1e6*Math.random()|0),HL=0;function qL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++HL,this.ba=this.ea=!1}function ch(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Gy(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function V_(t){const e={};for(const n in t)e[n]=t[n];return e}const Db="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function W_(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<Db.length;o++)n=Db[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fh(t){this.src=t,this.g={},this.h=0}fh.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=xg(t,e,r,i);return-1<s?(e=t[s],n||(e.ea=!1)):(e=new qL(e,this.src,o,!!r,i),e.ea=n,t.push(e)),e};function kg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=L_(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(ch(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xg(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ba&&o.listener==e&&o.capture==!!n&&o.ha==r)return i}return-1}var Xy="closure_lm_"+(1e6*Math.random()|0),Qp={};function H_(t,e,n,r,i){if(r&&r.once)return K_(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)H_(t,e[o],n,r,i);return null}return n=Jy(n),t&&t[Lu]?t.N(e,n,Mu(r)?!!r.capture:!!r,i):q_(t,e,n,!1,r,i)}function q_(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=Mu(i)?!!i.capture:!!i,a=Qy(t);if(a||(t[Xy]=a=new fh(t)),n=a.add(e,n,r,s,o),n.proxy)return n;if(r=KL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)DL||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(X_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function KL(){function t(n){return e.call(t.src,t.listener,n)}const e=GL;return t}function K_(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)K_(t,e[o],n,r,i);return null}return n=Jy(n),t&&t[Lu]?t.O(e,n,Mu(r)?!!r.capture:!!r,i):q_(t,e,n,!0,r,i)}function G_(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)G_(t,e[o],n,r,i);else r=Mu(r)?!!r.capture:!!r,n=Jy(n),t&&t[Lu]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=xg(o,n,r,i),-1<n&&(ch(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=Qy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xg(e,n,r,i)),(n=-1<t?e[t]:null)&&Yy(n))}function Yy(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Lu])kg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(X_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Qy(e))?(kg(n,t),n.h==0&&(n.src=null,e[Xy]=null)):ch(t)}}}function X_(t){return t in Qp?Qp[t]:Qp[t]="on"+t}function GL(t,e){if(t.ba)t=!0;else{e=new iu(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Yy(t),t=n.call(r,e)}return t}function Qy(t){return t=t[Xy],t instanceof fh?t:null}var Jp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jy(t){return typeof t=="function"?t:(t[Jp]||(t[Jp]=function(e){return t.handleEvent(e)}),t[Jp])}function mt(){eo.call(this),this.i=new fh(this),this.P=this,this.I=null}Ct(mt,eo);mt.prototype[Lu]=!0;mt.prototype.removeEventListener=function(t,e,n,r){G_(this,t,e,n,r)};function xt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Dt(e,t);else if(e instanceof Dt)e.target=e.target||t;else{var i=e;e=new Dt(r,t),W_(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=Ac(s,r,!0,e)&&i}if(s=e.g=t,i=Ac(s,r,!0,e)&&i,i=Ac(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=Ac(s,r,!1,e)&&i}mt.prototype.M=function(){if(mt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ch(n[r]);delete t.g[e],t.h--}}this.I=null};mt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};mt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ac(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&kg(t.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zy=ne.JSON.stringify;function XL(){var t=J_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class YL{constructor(){this.h=this.g=null}add(e,n){const r=Y_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Y_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new QL,t=>t.reset());class QL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function JL(t){ne.setTimeout(()=>{throw t},0)}function Q_(t,e){_g||ZL(),Cg||(_g(),Cg=!0),J_.add(t,e)}var _g;function ZL(){var t=ne.Promise.resolve(void 0);_g=function(){t.then(e3)}}var Cg=!1,J_=new YL;function e3(){for(var t;t=XL();){try{t.h.call(t.g)}catch(n){JL(n)}var e=Y_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Cg=!1}function dh(t,e){mt.call(this),this.h=t||1,this.g=e||ne,this.j=$t(this.lb,this),this.l=Date.now()}Ct(dh,mt);G=dh.prototype;G.ca=!1;G.R=null;G.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),xt(this,"tick"),this.ca&&(ev(this),this.start()))}};G.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ev(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}G.M=function(){dh.X.M.call(this),ev(this),delete this.g};function tv(t,e,n){if(typeof t=="function")n&&(t=$t(t,n));else if(t&&typeof t.handleEvent=="function")t=$t(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ne.setTimeout(t,e||0)}function Z_(t){t.g=tv(()=>{t.g=null,t.i&&(t.i=!1,Z_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class t3 extends eo{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Z_(this)}M(){super.M(),this.g&&(ne.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ou(t){eo.call(this),this.h=t,this.g={}}Ct(ou,eo);var Mb=[];function eC(t,e,n,r){Array.isArray(n)||(n&&(Mb[0]=n.toString()),n=Mb);for(var i=0;i<n.length;i++){var o=H_(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function tC(t){Gy(t.g,function(e,n){this.g.hasOwnProperty(n)&&Yy(e)},t),t.g={}}ou.prototype.M=function(){ou.X.M.call(this),tC(this)};ou.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hh(){this.g=!0}hh.prototype.Aa=function(){this.g=!1};function n3(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var f=u[0];u=u[1];var h=f.split("_");s=2<=h.length&&h[1]=="type"?s+(f+"="+u+"&"):s+(f+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function r3(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function Ts(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+o3(t,n)+(r?" "+r:"")})}function i3(t,e){t.info(function(){return"TIMEOUT: "+e})}hh.prototype.info=function(){};function o3(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Zy(n)}catch{return e}}var qo={},Lb=null;function ph(){return Lb=Lb||new mt}qo.Pa="serverreachability";function nC(t){Dt.call(this,qo.Pa,t)}Ct(nC,Dt);function su(t){const e=ph();xt(e,new nC(e))}qo.STAT_EVENT="statevent";function rC(t,e){Dt.call(this,qo.STAT_EVENT,t),this.stat=e}Ct(rC,Dt);function qt(t){const e=ph();xt(e,new rC(e,t))}qo.Qa="timingevent";function iC(t,e){Dt.call(this,qo.Qa,t),this.size=e}Ct(iC,Dt);function ju(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ne.setTimeout(function(){t()},e)}var mh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},oC={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function nv(){}nv.prototype.h=null;function jb(t){return t.h||(t.h=t.i())}function sC(){}var Fu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function rv(){Dt.call(this,"d")}Ct(rv,Dt);function iv(){Dt.call(this,"c")}Ct(iv,Dt);var Tg;function gh(){}Ct(gh,nv);gh.prototype.g=function(){return new XMLHttpRequest};gh.prototype.i=function(){return{}};Tg=new gh;function Bu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ou(this),this.O=s3,t=Sg?125:void 0,this.T=new dh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new aC}function aC(){this.i=null,this.g="",this.h=!1}var s3=45e3,Ig={},Xf={};G=Bu.prototype;G.setTimeout=function(t){this.O=t};function zg(t,e,n){t.K=1,t.v=vh(Qr(e)),t.s=n,t.P=!0,lC(t,null)}function lC(t,e){t.F=Date.now(),Vu(t),t.A=Qr(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),gC(n.i,"t",r),t.C=0,n=t.l.H,t.h=new aC,t.g=DC(t.l,n?e:null,!t.s),0<t.N&&(t.L=new t3($t(t.La,t,t.g),t.N)),eC(t.S,t.g,"readystatechange",t.ib),e=t.H?V_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),su(),n3(t.j,t.u,t.A,t.m,t.U,t.s)}G.ib=function(t){t=t.target;const e=this.L;e&&$r(t)==3?e.l():this.La(t)};G.La=function(t){try{if(t==this.g)e:{const f=$r(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>f)&&(f!=3||Sg||this.g&&(this.h.h||this.g.fa()||Wb(this.g)))){this.I||f!=4||e==7||(e==8||0>=h?su(3):su(2)),yh(this);var n=this.g.aa();this.Y=n;t:if(uC(this)){var r=Wb(this.g);t="";var i=r.length,o=$r(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wo(this),_l(this);var s="";break t}this.h.i=new ne.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=n==200,r3(this.j,this.u,this.A,this.m,this.U,f,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Kf(a)){var u=a;break t}}u=null}if(n=u)Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Pg(this,n);else{this.i=!1,this.o=3,qt(12),wo(this),_l(this);break e}}this.P?(cC(this,f,s),Sg&&this.i&&f==3&&(eC(this.S,this.T,"tick",this.hb),this.T.start())):(Ts(this.j,this.m,s,null),Pg(this,s)),f==4&&wo(this),this.i&&!this.I&&(f==4?AC(this.l,this):(this.i=!1,Vu(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,qt(12)):(this.o=0,qt(13)),wo(this),_l(this)}}}catch{}finally{}};function uC(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function cC(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=a3(t,n),i==Xf){e==4&&(t.o=4,qt(14),r=!1),Ts(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ig){t.o=4,qt(15),Ts(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ts(t.j,t.m,i,null),Pg(t,i);uC(t)&&i!=Xf&&i!=Ig&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,qt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),fv(e),e.K=!0,qt(11))):(Ts(t.j,t.m,n,"[Invalid Chunked Response]"),wo(t),_l(t))}G.hb=function(){if(this.g){var t=$r(this.g),e=this.g.fa();this.C<e.length&&(yh(this),cC(this,t,e),this.i&&t!=4&&Vu(this))}};function a3(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Xf:(n=Number(e.substring(n,r)),isNaN(n)?Ig:(r+=1,r+n>e.length?Xf:(e=e.substr(r,n),t.C=r+n,e)))}G.cancel=function(){this.I=!0,wo(this)};function Vu(t){t.V=Date.now()+t.O,fC(t,t.O)}function fC(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ju($t(t.gb,t),e)}function yh(t){t.B&&(ne.clearTimeout(t.B),t.B=null)}G.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(i3(this.j,this.A),this.K!=2&&(su(),qt(17)),wo(this),this.o=2,_l(this)):fC(this,this.V-t)};function _l(t){t.l.G==0||t.I||AC(t.l,t)}function wo(t){yh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ev(t.T),tC(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Pg(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Og(n.h,t))){if(!t.J&&Og(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Jf(n),Sh(n);else break e;cv(n),qt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ju($t(n.cb,n),6e3));if(1>=wC(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else bo(n,11)}else if((t.J||n.g==t)&&Jf(n),!Kf(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const f=u[3];f!=null&&(n.ma=f,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const w=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var o=r.h;o.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(ov(o,o.h),o.h=null))}if(r.D){const v=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,$e(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=t;if(r.sa=$C(r,r.H?r.ka:null,r.V),s.J){bC(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(yh(a),Vu(a)),r.g=s}else OC(r);0<n.i.length&&Eh(n)}else u[0]!="stop"&&u[0]!="close"||bo(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?bo(n,7):uv(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}su(4)}catch{}}function l3(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(lh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function u3(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(lh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function dC(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(lh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=u3(t),r=l3(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var hC=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function c3(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _o(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof _o){this.h=e!==void 0?e:t.h,Yf(this,t.j),this.s=t.s,this.g=t.g,Qf(this,t.m),this.l=t.l,e=t.i;var n=new au;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fb(this,n),this.o=t.o}else t&&(n=String(t).match(hC))?(this.h=!!e,Yf(this,n[1]||"",!0),this.s=al(n[2]||""),this.g=al(n[3]||"",!0),Qf(this,n[4]),this.l=al(n[5]||"",!0),Fb(this,n[6]||"",!0),this.o=al(n[7]||"")):(this.h=!!e,this.i=new au(null,this.h))}_o.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ll(e,Bb,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ll(e,Bb,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ll(n,n.charAt(0)=="/"?h3:d3,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ll(n,m3)),t.join("")};function Qr(t){return new _o(t)}function Yf(t,e,n){t.j=n?al(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qf(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fb(t,e,n){e instanceof au?(t.i=e,g3(t.i,t.h)):(n||(e=ll(e,p3)),t.i=new au(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function vh(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function al(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ll(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,f3),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function f3(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bb=/[#\/\?@]/g,d3=/[#\?:]/g,h3=/[#\?]/g,p3=/[#\?@]/g,m3=/#/g;function au(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function to(t){t.g||(t.g=new Map,t.h=0,t.i&&c3(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}G=au.prototype;G.add=function(t,e){to(this),this.i=null,t=Ta(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function pC(t,e){to(t),e=Ta(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function mC(t,e){return to(t),e=Ta(t,e),t.g.has(e)}G.forEach=function(t,e){to(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};G.oa=function(){to(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};G.W=function(t){to(this);let e=[];if(typeof t=="string")mC(this,t)&&(e=e.concat(this.g.get(Ta(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};G.set=function(t,e){return to(this),this.i=null,t=Ta(this,t),mC(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};G.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function gC(t,e,n){pC(t,e),0<n.length&&(t.i=null,t.g.set(Ta(t,e),qy(n)),t.h+=n.length)}G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function Ta(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function g3(t,e){e&&!t.j&&(to(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(pC(this,r),gC(this,i,n))},t)),t.j=e}var y3=class{constructor(t,e){this.h=t,this.g=e}};function yC(t){this.l=t||v3,ne.PerformanceNavigationTiming?(t=ne.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ne.g&&ne.g.Ga&&ne.g.Ga()&&ne.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var v3=10;function vC(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wC(t){return t.h?1:t.g?t.g.size:0}function Og(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ov(t,e){t.g?t.g.add(e):t.h=e}function bC(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}yC.prototype.cancel=function(){if(this.i=SC(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function SC(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return qy(t.i)}function sv(){}sv.prototype.stringify=function(t){return ne.JSON.stringify(t,void 0)};sv.prototype.parse=function(t){return ne.JSON.parse(t,void 0)};function w3(){this.g=new sv}function b3(t,e,n){const r=n||"";try{dC(t,function(i,o){let s=i;Mu(i)&&(s=Zy(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function S3(t,e){const n=new hh;if(ne.Image){const r=new Image;r.onload=Rc(Nc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Rc(Nc,n,r,"TestLoadImage: error",!1,e),r.onabort=Rc(Nc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Rc(Nc,n,r,"TestLoadImage: timeout",!1,e),ne.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Nc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Wu(t){this.l=t.ac||null,this.j=t.jb||!1}Ct(Wu,nv);Wu.prototype.g=function(){return new wh(this.l,this.j)};Wu.prototype.i=function(t){return function(){return t}}({});function wh(t,e){mt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=av,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ct(wh,mt);var av=0;G=wh.prototype;G.open=function(t,e){if(this.readyState!=av)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,lu(this)};G.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ne).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hu(this)),this.readyState=av};G.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,lu(this)),this.g&&(this.readyState=3,lu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ne.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;EC(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function EC(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}G.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hu(this):lu(this),this.readyState==3&&EC(this)}};G.Va=function(t){this.g&&(this.response=this.responseText=t,Hu(this))};G.Ua=function(t){this.g&&(this.response=t,Hu(this))};G.ga=function(){this.g&&Hu(this)};function Hu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,lu(t)}G.setRequestHeader=function(t,e){this.v.append(t,e)};G.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};G.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function lu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var E3=ne.JSON.parse;function Ke(t){mt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=kC,this.K=this.L=!1}Ct(Ke,mt);var kC="",k3=/^https?$/i,x3=["POST","PUT"];G=Ke.prototype;G.Ka=function(t){this.L=t};G.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Tg.g(),this.C=this.u?jb(this.u):jb(Tg),this.g.onreadystatechange=$t(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){Vb(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=ne.FormData&&t instanceof ne.FormData,!(0<=L_(x3,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{CC(this),0<this.B&&((this.K=_3(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$t(this.qa,this)):this.A=tv(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){Vb(this,o)}};function _3(t){return ua&&BL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}G.qa=function(){typeof Hy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))};function Vb(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,xC(t),bh(t)}function xC(t){t.D||(t.D=!0,xt(t,"complete"),xt(t,"error"))}G.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xt(this,"complete"),xt(this,"abort"),bh(this))};G.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),bh(this,!0)),Ke.X.M.call(this)};G.Ha=function(){this.s||(this.F||this.v||this.l?_C(this):this.fb())};G.fb=function(){_C(this)};function _C(t){if(t.h&&typeof Hy<"u"&&(!t.C[1]||$r(t)!=4||t.aa()!=2)){if(t.v&&$r(t)==4)tv(t.Ha,0,t);else if(xt(t,"readystatechange"),$r(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(hC)[1]||null;if(!i&&ne.self&&ne.self.location){var o=ne.self.location.protocol;i=o.substr(0,o.length-1)}r=!k3.test(i?i.toLowerCase():"")}n=r}if(n)xt(t,"complete"),xt(t,"success");else{t.m=6;try{var s=2<$r(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.aa()+"]",xC(t)}}finally{bh(t)}}}}function bh(t,e){if(t.g){CC(t);const n=t.g,r=t.C[0]?qf:null;t.g=null,t.C=null,e||xt(t,"ready");try{n.onreadystatechange=r}catch{}}}function CC(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ne.clearTimeout(t.A),t.A=null)}function $r(t){return t.g?t.g.readyState:0}G.aa=function(){try{return 2<$r(this)?this.g.status:-1}catch{return-1}};G.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};G.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),E3(e)}};function Wb(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case kC:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}G.Ea=function(){return this.m};G.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function TC(t){let e="";return Gy(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function lv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=TC(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):$e(t,e,n))}function Za(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function IC(t){this.Ca=0,this.i=[],this.j=new hh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Za("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Za("baseRetryDelayMs",5e3,t),this.bb=Za("retryDelaySeedMs",1e4,t),this.$a=Za("forwardChannelMaxRetries",2,t),this.ta=Za("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new yC(t&&t.concurrentRequestLimit),this.Fa=new w3,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}G=IC.prototype;G.ma=8;G.G=1;function uv(t){if(zC(t),t.G==3){var e=t.U++,n=Qr(t.F);$e(n,"SID",t.I),$e(n,"RID",e),$e(n,"TYPE","terminate"),qu(t,n),e=new Bu(t,t.j,e,void 0),e.K=2,e.v=vh(Qr(n)),n=!1,ne.navigator&&ne.navigator.sendBeacon&&(n=ne.navigator.sendBeacon(e.v.toString(),"")),!n&&ne.Image&&(new Image().src=e.v,n=!0),n||(e.g=DC(e.l,null),e.g.da(e.v)),e.F=Date.now(),Vu(e)}UC(t)}function Sh(t){t.g&&(fv(t),t.g.cancel(),t.g=null)}function zC(t){Sh(t),t.u&&(ne.clearTimeout(t.u),t.u=null),Jf(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ne.clearTimeout(t.m),t.m=null)}function Eh(t){vC(t.h)||t.m||(t.m=!0,Q_(t.Ja,t),t.C=0)}function C3(t,e){return wC(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ju($t(t.Ja,t,e),NC(t,t.C)),t.C++,!0)}G.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Bu(this,this.j,t,void 0);let o=this.s;if(this.S&&(o?(o=V_(o),W_(o,this.S)):o=this.S),this.o!==null||this.N||(i.H=o,o=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=PC(this,i,e),n=Qr(this.F),$e(n,"RID",t),$e(n,"CVER",22),this.D&&$e(n,"X-HTTP-Session-Id",this.D),qu(this,n),o&&(this.N?e="headers="+encodeURIComponent(String(TC(o)))+"&"+e:this.o&&lv(n,this.o,o)),ov(this.h,i),this.Ya&&$e(n,"TYPE","init"),this.O?($e(n,"$req",e),$e(n,"SID","null"),i.Z=!0,zg(i,n,null)):zg(i,n,e),this.G=2}}else this.G==3&&(t?Hb(this,t):this.i.length==0||vC(this.h)||Hb(this))};function Hb(t,e){var n;e?n=e.m:n=t.U++;const r=Qr(t.F);$e(r,"SID",t.I),$e(r,"RID",n),$e(r,"AID",t.T),qu(t,r),t.o&&t.s&&lv(r,t.o,t.s),n=new Bu(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=PC(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ov(t.h,n),zg(n,r,e)}function qu(t,e){t.ia&&Gy(t.ia,function(n,r){$e(e,r,n)}),t.l&&dC({},function(n,r){$e(e,r,n)})}function PC(t,e,n){n=Math.min(t.i.length,n);var r=t.l?$t(t.l.Ra,t.l,t):null;e:{var i=t.i;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const f=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{b3(f,s,"req"+u+"_")}catch{r&&r(f)}}if(a){r=s.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function OC(t){t.g||t.u||(t.Z=1,Q_(t.Ia,t),t.A=0)}function cv(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ju($t(t.Ia,t),NC(t,t.A)),t.A++,!0)}G.Ia=function(){if(this.u=null,RC(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ju($t(this.eb,this),t)}};G.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,qt(10),Sh(this),RC(this))};function fv(t){t.B!=null&&(ne.clearTimeout(t.B),t.B=null)}function RC(t){t.g=new Bu(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Qr(t.sa);$e(e,"RID","rpc"),$e(e,"SID",t.I),$e(e,"CI",t.L?"0":"1"),$e(e,"AID",t.T),$e(e,"TYPE","xmlhttp"),qu(t,e),t.o&&t.s&&lv(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=vh(Qr(e)),n.s=null,n.P=!0,lC(n,t)}G.cb=function(){this.v!=null&&(this.v=null,Sh(this),cv(this),qt(19))};function Jf(t){t.v!=null&&(ne.clearTimeout(t.v),t.v=null)}function AC(t,e){var n=null;if(t.g==e){Jf(t),fv(t),t.g=null;var r=2}else if(Og(t.h,e))n=e.D,bC(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ph(),xt(r,new iC(r,n)),Eh(t)}else OC(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&C3(t,e)||r==2&&cv(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:bo(t,5);break;case 4:bo(t,10);break;case 3:bo(t,6);break;default:bo(t,2)}}}function NC(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function bo(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=$t(t.kb,t);n||(n=new _o("//www.google.com/images/cleardot.gif"),ne.location&&ne.location.protocol=="http"||Yf(n,"https"),vh(n)),S3(n.toString(),r)}else qt(2);t.G=0,t.l&&t.l.va(e),UC(t),zC(t)}G.kb=function(t){t?(this.j.info("Successfully pinged google.com"),qt(2)):(this.j.info("Failed to ping google.com"),qt(1))};function UC(t){if(t.G=0,t.la=[],t.l){const e=SC(t.h);(e.length!=0||t.i.length!=0)&&(Nb(t.la,e),Nb(t.la,t.i),t.h.i.length=0,qy(t.i),t.i.length=0),t.l.ua()}}function $C(t,e,n){var r=n instanceof _o?Qr(n):new _o(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Qf(r,r.m);else{var i=ne.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new _o(null,void 0);r&&Yf(o,r),e&&(o.g=e),i&&Qf(o,i),n&&(o.l=n),r=o}return n=t.D,e=t.za,n&&e&&$e(r,n,e),$e(r,"VER",t.ma),qu(t,r),r}function DC(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ke(new Wu({jb:!0})):new Ke(t.ra),e.Ka(t.H),e}function MC(){}G=MC.prototype;G.xa=function(){};G.wa=function(){};G.va=function(){};G.ua=function(){};G.Ra=function(){};function Zf(){if(ua&&!(10<=Number(VL)))throw Error("Environmental error: no available transport.")}Zf.prototype.g=function(t,e){return new _n(t,e)};function _n(t,e){mt.call(this),this.g=new IC(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Kf(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Kf(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ia(this)}Ct(_n,mt);_n.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;qt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=$C(t,null,t.V),Eh(t)};_n.prototype.close=function(){uv(this.g)};_n.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zy(t),t=n);e.i.push(new y3(e.ab++,t)),e.G==3&&Eh(e)};_n.prototype.M=function(){this.g.l=null,delete this.j,uv(this.g),delete this.g,_n.X.M.call(this)};function LC(t){rv.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ct(LC,rv);function jC(){iv.call(this),this.status=1}Ct(jC,iv);function Ia(t){this.g=t}Ct(Ia,MC);Ia.prototype.xa=function(){xt(this.g,"a")};Ia.prototype.wa=function(t){xt(this.g,new LC(t))};Ia.prototype.va=function(t){xt(this.g,new jC)};Ia.prototype.ua=function(){xt(this.g,"b")};Zf.prototype.createWebChannel=Zf.prototype.g;_n.prototype.send=_n.prototype.u;_n.prototype.open=_n.prototype.m;_n.prototype.close=_n.prototype.close;mh.NO_ERROR=0;mh.TIMEOUT=8;mh.HTTP_ERROR=6;oC.COMPLETE="complete";sC.EventType=Fu;Fu.OPEN="a";Fu.CLOSE="b";Fu.ERROR="c";Fu.MESSAGE="d";mt.prototype.listen=mt.prototype.N;Ke.prototype.listenOnce=Ke.prototype.O;Ke.prototype.getLastError=Ke.prototype.Oa;Ke.prototype.getLastErrorCode=Ke.prototype.Ea;Ke.prototype.getStatus=Ke.prototype.aa;Ke.prototype.getResponseJson=Ke.prototype.Sa;Ke.prototype.getResponseText=Ke.prototype.fa;Ke.prototype.send=Ke.prototype.da;Ke.prototype.setWithCredentials=Ke.prototype.Ka;var T3=function(){return new Zf},I3=function(){return ph()},Zp=mh,z3=oC,P3=qo,qb={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},O3=Wu,Uc=sC,R3=Ke;const Kb="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za="9.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new By("@firebase/firestore");function Gb(){return Lo.logLevel}function Y(t,...e){if(Lo.logLevel<=we.DEBUG){const n=e.map(dv);Lo.debug(`Firestore (${za}): ${t}`,...n)}}function Jr(t,...e){if(Lo.logLevel<=we.ERROR){const n=e.map(dv);Lo.error(`Firestore (${za}): ${t}`,...n)}}function Rg(t,...e){if(Lo.logLevel<=we.WARN){const n=e.map(dv);Lo.warn(`Firestore (${za}): ${t}`,...n)}}function dv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t="Unexpected state"){const e=`FIRESTORE (${za}) INTERNAL ASSERTION FAILED: `+t;throw Jr(e),new Error(e)}function Pe(t,e){t||re()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends oi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class N3{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class U3{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Mi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Mi,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Mi)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string"),new FC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new At(e)}}class $3{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=At.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Pe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class D3{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new $3(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class M3{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class L3{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=o=>{o.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.A;return this.A=o.token,Y("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.T.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.T.getImmediate({optional:!0});o?i(o):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.A=n.token,new M3(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j3(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=j3(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function ca(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lt.fromMillis(Date.now())}static fromDate(e){return lt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new lt(0,0))}static max(){return new ae(new lt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return uu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof uu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends uu{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const F3=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends uu{construct(e,n,r){return new Ut(e,n,r)}static isValidIdentifier(e){return F3.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Z(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(n)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(De.fromString(e))}static fromName(e){return new J(De.fromString(e).popFirst(5))}static empty(){return new J(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new De(e.slice()))}}function B3(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new Vi(i,J.empty(),e)}function V3(t){return new Vi(t.readTime,t.key,-1)}class Vi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vi(ae.min(),J.empty(),-1)}static max(){return new Vi(ae.max(),J.empty(),-1)}}function W3(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H3="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q3{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ku(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==H3)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const u=l;n(e[u]).next(f=>{s[u]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Gu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ko(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hv.at=-1;class ct{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $c(this.root,e,this.comparator,!1)}getReverseIterator(){return new $c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $c(this.root,e,this.comparator,!0)}}class $c{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:bt.RED,this.left=i!=null?i:bt.EMPTY,this.right=o!=null?o:bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new bt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(t,e,n,r,i){return this}insert(t,e,n){return new bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yb(this.data.getIterator())}getIteratorFrom(e){return new Yb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class Yb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new yr([])}unionWith(e){let n=new ut(Ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ca(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new jt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const K3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wi(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=K3.exec(t);if(Pe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(t.seconds),nanos:tt(t.nanos)}}function tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fa(t){return typeof t=="string"?jt.fromBase64String(t):jt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function HC(t){const e=t.mapValue.fields.__previous_value__;return WC(e)?HC(e):e}function cu(t){const e=Wi(t.mapValue.fields.__local_write_time__.timestampValue);return new lt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G3{constructor(e,n,r,i,o,s,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class fu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fu&&e.projectId===this.projectId&&e.database===this.database}}function kh(t){return t==null}function ed(t){return t===0&&1/t==-1/0}function X3(t){return typeof t=="number"&&Number.isInteger(t)&&!ed(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?WC(t)?4:Y3(t)?9007199254740991:10:re()}function kr(t,e){if(t===e)return!0;const n=jo(t);if(n!==jo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cu(t).isEqual(cu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Wi(r.timestampValue),s=Wi(i.timestampValue);return o.seconds===s.seconds&&o.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return fa(r.bytesValue).isEqual(fa(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return tt(r.geoPointValue.latitude)===tt(i.geoPointValue.latitude)&&tt(r.geoPointValue.longitude)===tt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return tt(r.integerValue)===tt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=tt(r.doubleValue),s=tt(i.doubleValue);return o===s?ed(o)===ed(s):isNaN(o)&&isNaN(s)}return!1}(t,e);case 9:return ca(t.arrayValue.values||[],e.arrayValue.values||[],kr);case 10:return function(r,i){const o=r.mapValue.fields||{},s=i.mapValue.fields||{};if(Xb(o)!==Xb(s))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(s[a]===void 0||!kr(o[a],s[a])))return!1;return!0}(t,e);default:return re()}}function du(t,e){return(t.values||[]).find(n=>kr(n,e))!==void 0}function da(t,e){if(t===e)return 0;const n=jo(t),r=jo(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,o){const s=tt(i.integerValue||i.doubleValue),a=tt(o.integerValue||o.doubleValue);return s<a?-1:s>a?1:s===a?0:isNaN(s)?isNaN(a)?0:-1:1}(t,e);case 3:return Qb(t.timestampValue,e.timestampValue);case 4:return Qb(cu(t),cu(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(i,o){const s=fa(i),a=fa(o);return s.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const s=i.split("/"),a=o.split("/");for(let l=0;l<s.length&&l<a.length;l++){const u=Ee(s[l],a[l]);if(u!==0)return u}return Ee(s.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const s=Ee(tt(i.latitude),tt(o.latitude));return s!==0?s:Ee(tt(i.longitude),tt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const s=i.values||[],a=o.values||[];for(let l=0;l<s.length&&l<a.length;++l){const u=da(s[l],a[l]);if(u)return u}return Ee(s.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Dc.mapValue&&o===Dc.mapValue)return 0;if(i===Dc.mapValue)return 1;if(o===Dc.mapValue)return-1;const s=i.fields||{},a=Object.keys(s),l=o.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let f=0;f<a.length&&f<u.length;++f){const h=Ee(a[f],u[f]);if(h!==0)return h;const p=da(s[a[f]],l[u[f]]);if(p!==0)return p}return Ee(a.length,u.length)}(t.mapValue,e.mapValue);default:throw re()}}function Qb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Wi(t),r=Wi(e),i=Ee(n.seconds,r.seconds);return i!==0?i:Ee(n.nanos,r.nanos)}function js(t){return Ag(t)}function Ag(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Wi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fa(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,J.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",o=!0;for(const s of r.values||[])o?o=!1:i+=",",i+=Ag(s);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let o="{",s=!0;for(const a of i)s?s=!1:o+=",",o+=`${a}:${Ag(r.fields[a])}`;return o+"}"}(t.mapValue):re();var e,n}function Ng(t){return!!t&&"integerValue"in t}function pv(t){return!!t&&"arrayValue"in t}function Jb(t){return!!t&&"nullValue"in t}function Zb(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nf(t){return!!t&&"mapValue"in t}function Cl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ko(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Cl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Cl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Y3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cl(n)}setAll(e){let n=Ut.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Cl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());nf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ko(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new bn(Cl(this.value))}}function qC(t){const e=[];return Ko(t.fields,(n,r)=>{const i=new Ut([n]);if(nf(r)){const o=qC(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new yr(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,o,s){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=o,this.documentState=s}static newInvalidDocument(e){return new Et(e,0,ae.min(),ae.min(),bn.empty(),0)}static newFoundDocument(e,n,r){return new Et(e,1,n,ae.min(),r,0)}static newNoDocument(e,n){return new Et(e,2,n,ae.min(),bn.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ae.min(),bn.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ht=null}}function eS(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Q3(t,e,n,r,i,o,s)}function mv(t){const e=oe(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+js(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),kh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>js(r)).join(",")),e.ht=n}return e.ht}function J3(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${js(r.value)}`;var r}).join(", ")}]`),kh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>js(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>js(n)).join(",")),`Target(${e})`}function gv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!s4(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!kr(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nS(t.startAt,e.startAt)&&nS(t.endAt,e.endAt)}function Ug(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class sn extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new Z3(e,n,r):n==="array-contains"?new n4(e,r):n==="in"?new r4(e,r):n==="not-in"?new i4(e,r):n==="array-contains-any"?new o4(e,r):new sn(e,n,r)}static lt(e,n,r){return n==="in"?new e4(e,r):new t4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(da(n,this.value)):n!==null&&jo(this.value)===jo(n)&&this.ft(da(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Z3 extends sn{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.ft(n)}}class e4 extends sn{constructor(e,n){super(e,"in",n),this.keys=KC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class t4 extends sn{constructor(e,n){super(e,"not-in",n),this.keys=KC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class n4 extends sn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pv(n)&&du(n.arrayValue,this.value)}}class r4 extends sn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&du(this.value.arrayValue,n)}}class i4 extends sn{constructor(e,n){super(e,"not-in",n)}matches(e){if(du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!du(this.value.arrayValue,n)}}class o4 extends sn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>du(this.value.arrayValue,r))}}class td{constructor(e,n){this.position=e,this.inclusive=n}}class Tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function s4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function tS(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=J.comparator(J.fromName(s.referenceValue),n.key):r=da(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function nS(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function a4(t,e,n,r,i,o,s,a){return new xh(t,e,n,r,i,o,s,a)}function _h(t){return new xh(t)}function rS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function l4(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function u4(t){for(const e of t.filters)if(e.dt())return e.field;return null}function c4(t){return t.collectionGroup!==null}function hu(t){const e=oe(t);if(e._t===null){e._t=[];const n=u4(e),r=l4(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Tl(n)),e._t.push(new Tl(Ut.keyField(),"asc"));else{let i=!1;for(const o of e.explicitOrderBy)e._t.push(o),o.field.isKeyField()&&(i=!0);if(!i){const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Tl(Ut.keyField(),o))}}}return e._t}function Zr(t){const e=oe(t);if(!e.wt)if(e.limitType==="F")e.wt=eS(e.path,e.collectionGroup,hu(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const o of hu(e)){const s=o.dir==="desc"?"asc":"desc";n.push(new Tl(o.field,s))}const r=e.endAt?new td(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new td(e.startAt.position,e.startAt.inclusive):null;e.wt=eS(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function $g(t,e,n){return new xh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ch(t,e){return gv(Zr(t),Zr(e))&&t.limitType===e.limitType}function GC(t){return`${mv(Zr(t))}|lt:${t.limitType}`}function Dg(t){return`Query(target=${J3(Zr(t))}; limitType=${t.limitType})`}function yv(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):J.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,o,s){const a=tS(i,o,s);return i.inclusive?a<=0:a<0}(n.startAt,hu(n),r)||n.endAt&&!function(i,o,s){const a=tS(i,o,s);return i.inclusive?a>=0:a>0}(n.endAt,hu(n),r))}(t,e)}function f4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XC(t){return(e,n)=>{let r=!1;for(const i of hu(t)){const o=d4(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function d4(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(i,o,s){const a=o.data.field(i),l=s.data.field(i);return a!==null&&l!==null?da(a,l):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ed(e)?"-0":e}}function QC(t){return{integerValue:""+t}}function h4(t,e){return X3(e)?QC(e):YC(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this._=void 0}}function p4(t,e,n){return t instanceof nd?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof pu?ZC(t,e):t instanceof mu?eT(t,e):function(r,i){const o=JC(r,i),s=iS(o)+iS(r.yt);return Ng(o)&&Ng(r.yt)?QC(s):YC(r.It,s)}(t,e)}function m4(t,e,n){return t instanceof pu?ZC(t,e):t instanceof mu?eT(t,e):n}function JC(t,e){return t instanceof rd?Ng(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class nd extends Th{}class pu extends Th{constructor(e){super(),this.elements=e}}function ZC(t,e){const n=tT(e);for(const r of t.elements)n.some(i=>kr(i,r))||n.push(r);return{arrayValue:{values:n}}}class mu extends Th{constructor(e){super(),this.elements=e}}function eT(t,e){let n=tT(e);for(const r of t.elements)n=n.filter(i=>!kr(i,r));return{arrayValue:{values:n}}}class rd extends Th{constructor(e,n){super(),this.It=e,this.yt=n}}function iS(t){return tt(t.integerValue||t.doubleValue)}function tT(t){return pv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function g4(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof pu&&r instanceof pu||n instanceof mu&&r instanceof mu?ca(n.elements,r.elements,kr):n instanceof rd&&r instanceof rd?kr(n.yt,r.yt):n instanceof nd&&r instanceof nd}(t.transform,e.transform)}class y4{constructor(e,n){this.version=e,this.transformResults=n}}class vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ih{}function nT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vv(t.key,vr.none()):new zh(t.key,t.data,vr.none());{const n=t.data,r=bn.empty();let i=new ut(Ut.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Go(t.key,r,new yr(i.toArray()),vr.none())}}function v4(t,e,n){t instanceof zh?function(r,i,o){const s=r.value.clone(),a=sS(r.fieldTransforms,i,o.transformResults);s.setAll(a),i.convertToFoundDocument(o.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Go?function(r,i,o){if(!rf(r.precondition,i))return void i.convertToUnknownDocument(o.version);const s=sS(r.fieldTransforms,i,o.transformResults),a=i.data;a.setAll(rT(r)),a.setAll(s),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Il(t,e,n,r){return t instanceof zh?function(i,o,s,a){if(!rf(i.precondition,o))return s;const l=i.value.clone(),u=aS(i.fieldTransforms,a,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Go?function(i,o,s,a){if(!rf(i.precondition,o))return s;const l=aS(i.fieldTransforms,a,o),u=o.data;return u.setAll(rT(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),s===null?null:s.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,s){return rf(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):s}(t,e,n)}function w4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=JC(r.transform,i||null);o!=null&&(n===null&&(n=bn.empty()),n.set(r.field,o))}return n||null}function oS(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ca(n,r,(i,o)=>g4(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zh extends Ih{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Go extends Ih{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function rT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sS(t,e,n){const r=new Map;Pe(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,m4(s,a,n[i]))}return r}function aS(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,p4(o,s,e))}return r}class vv extends Ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b4 extends Ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,pe;function E4(t){switch(t){default:return re();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function iT(t){if(t===void 0)return Jr("GRPC error has no .code"),D.UNKNOWN;switch(t){case et.OK:return D.OK;case et.CANCELLED:return D.CANCELLED;case et.UNKNOWN:return D.UNKNOWN;case et.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case et.INTERNAL:return D.INTERNAL;case et.UNAVAILABLE:return D.UNAVAILABLE;case et.UNAUTHENTICATED:return D.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case et.NOT_FOUND:return D.NOT_FOUND;case et.ALREADY_EXISTS:return D.ALREADY_EXISTS;case et.PERMISSION_DENIED:return D.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case et.ABORTED:return D.ABORTED;case et.OUT_OF_RANGE:return D.OUT_OF_RANGE;case et.UNIMPLEMENTED:return D.UNIMPLEMENTED;case et.DATA_LOSS:return D.DATA_LOSS;default:return re()}}(pe=et||(et={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ko(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return VC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4=new ct(J.comparator);function ei(){return k4}const oT=new ct(J.comparator);function ul(...t){let e=oT;for(const n of t)e=e.insert(n.key,n);return e}function sT(t){let e=oT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function So(){return zl()}function aT(){return zl()}function zl(){return new Pa(t=>t.toString(),(t,e)=>t.isEqual(e))}const x4=new ct(J.comparator),_4=new ut(J.comparator);function ue(...t){let e=_4;for(const n of t)e=e.add(n);return e}const C4=new ut(Ee);function lT(){return C4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ph(ae.min(),i,lT(),ei(),ue())}}class Xu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xu(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class uT{constructor(e,n){this.targetId=e,this.At=n}}class cT{constructor(e,n,r=jt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class lS{constructor(){this.Rt=0,this.bt=cS(),this.Pt=jt.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=ue(),n=ue(),r=ue();return this.bt.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new Xu(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=cS()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class T4{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ei(),this.qt=uS(),this.Kt=new ut(Ee)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const o=i.target;if(Ug(o))if(r===0){const s=new J(o.path);this.jt(n,s,Et.newNoDocument(s,ae.min()))}else Pe(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((o,s)=>{const a=this.Xt(s);if(a){if(o.current&&Ug(a.target)){const l=new J(a.target.path);this.Ut.get(l)!==null||this.ee(s,l)||this.jt(s,l,Et.newNoDocument(l,e))}o.Dt&&(n.set(s,o.xt()),o.Nt())}});let r=ue();this.qt.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(o))}),this.Ut.forEach((o,s)=>s.setReadTime(e));const i=new Ph(e,n,this.Kt,this.Ut,r);return this.Ut=ei(),this.qt=uS(),this.Kt=new ut(Ee),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new lS,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ut(Ee),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new lS),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function uS(){return new ct(J.comparator)}function cS(){return new ct(J.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),z4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class P4{constructor(e,n){this.databaseId=e,this.gt=n}}function id(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fT(t,e){return t.gt?e.toBase64():e.toUint8Array()}function O4(t,e){return id(t,e.toTimestamp())}function Br(t){return Pe(!!t),ae.fromTimestamp(function(e){const n=Wi(e);return new lt(n.seconds,n.nanos)}(t))}function wv(t,e){return function(n){return new De(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dT(t){const e=De.fromString(t);return Pe(mT(e)),e}function Mg(t,e){return wv(t.databaseId,e.path)}function em(t,e){const n=dT(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(hT(n))}function Lg(t,e){return wv(t.databaseId,e)}function R4(t){const e=dT(t);return e.length===4?De.emptyPath():hT(e)}function jg(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function hT(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fS(t,e,n){return{name:Mg(t,e),fields:n.value.mapValue.fields}}function A4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(l,u){return l.gt?(Pe(u===void 0||typeof u=="string"),jt.fromBase64String(u||"")):(Pe(u===void 0||u instanceof Uint8Array),jt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(l){const u=l.code===void 0?D.UNKNOWN:iT(l.code);return new Z(u,l.message||"")}(s);n=new cT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=em(t,r.document.name),o=Br(r.document.updateTime),s=new bn({mapValue:{fields:r.document.fields}}),a=Et.newFoundDocument(i,o,s),l=r.targetIds||[],u=r.removedTargetIds||[];n=new of(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=em(t,r.document),o=r.readTime?Br(r.readTime):ae.min(),s=Et.newNoDocument(i,o),a=r.removedTargetIds||[];n=new of([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=em(t,r.document),o=r.removedTargetIds||[];n=new of([],o,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,o=new S4(i),s=r.targetId;n=new uT(s,o)}}return n}function N4(t,e){let n;if(e instanceof zh)n={update:fS(t,e.key,e.value)};else if(e instanceof vv)n={delete:Mg(t,e.key)};else if(e instanceof Go)n={update:fS(t,e.key,e.data),updateMask:W4(e.fieldMask)};else{if(!(e instanceof b4))return re();n={verify:Mg(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const s=o.transform;if(s instanceof nd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof pu)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof mu)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof rd)return{fieldPath:o.field.canonicalString(),increment:s.yt};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:O4(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function U4(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?Br(r.updateTime):Br(i);return o.isEqual(ae.min())&&(o=Br(i)),new y4(o,r.transformResults||[])}(n,e))):[]}function $4(t,e){return{documents:[Lg(t,e.path)]}}function D4(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Lg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Lg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(f=>function(h){if(h.op==="=="){if(Zb(h.value))return{unaryFilter:{field:hs(h.field),op:"IS_NAN"}};if(Jb(h.value))return{unaryFilter:{field:hs(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Zb(h.value))return{unaryFilter:{field:hs(h.field),op:"IS_NOT_NAN"}};if(Jb(h.value))return{unaryFilter:{field:hs(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(h.field),op:F4(h.op),value:h.value}}}(f));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:hs(f.field),direction:j4(f.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(l,u){return l.gt||kh(u)?u:{value:u}}(t,e.limit);var a;return s!==null&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function M4(t){let e=R4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Pe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=pT(n.where));let s=[];n.orderBy&&(s=n.orderBy.map(f=>function(h){return new Tl(Is(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(f)));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,kh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,p=f.values||[];return new td(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,p=f.values||[];return new td(p,h)}(n.endAt)),a4(e,i,s,o,a,"F",l,u)}function L4(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return re()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function pT(t){return t?t.unaryFilter!==void 0?[V4(t)]:t.fieldFilter!==void 0?[B4(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>pT(e)).reduce((e,n)=>e.concat(n)):re():[]}function j4(t){return I4[t]}function F4(t){return z4[t]}function hs(t){return{fieldPath:t.canonicalString()}}function Is(t){return Ut.fromServerFormat(t.fieldPath)}function B4(t){return sn.create(Is(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(t.fieldFilter.op),t.fieldFilter.value)}function V4(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Is(t.unaryFilter.field);return sn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Is(t.unaryFilter.field);return sn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Is(t.unaryFilter.field);return sn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Is(t.unaryFilter.field);return sn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return re()}}function W4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&v4(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Il(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Il(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=nT(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&ca(this.mutations,e.mutations,(n,r)=>oS(n,r))&&ca(this.baseMutations,e.baseMutations,(n,r)=>oS(n,r))}}class bv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Pe(e.mutations.length===r.length);let i=x4;const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new bv(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,r,i,o=ae.min(),s=ae.min(),a=jt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a}withSequenceNumber(e){return new Co(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Co(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Co(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(e){this.re=e}}function G4(t){const e=M4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$g(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(){this.Ye=new Y4}addToCollectionParentIndex(e,n){return this.Ye.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Vi.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Vi.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Y4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(De.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ha(0)}static vn(){return new ha(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(){this.changes=new Pa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Il(r.mutation,i,yr.empty(),lt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=So();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=ul();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=So();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=ei();const s=zl(),a=zl();return n.forEach((l,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Go)?o=o.insert(u.key,u):f!==void 0&&(s.set(u.key,f.mutation.getFieldMask()),Il(f.mutation,u,f.mutation.getFieldMask(),lt.now()))}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((u,f)=>s.set(u,f)),n.forEach((u,f)=>{var h;return a.set(u,new J4(f,(h=s.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=zl();let i=new ct((s,a)=>s-a),o=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||yr.empty();f=a.applyToLocalView(u,f),r.set(l,f);const h=(i.get(a.batchId)||ue()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,f=l.value,h=aT();f.forEach(p=>{if(!o.has(p)){const y=nT(n.get(p),r.get(p));y!==null&&h.set(p,y),o=o.add(p)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,h))}return M.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return J.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):c4(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):M.resolve(So());let a=-1,l=o;return s.next(u=>M.forEach(u,(f,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),o.get(f)?M.resolve():this.getBaseDocument(e,f,h).next(p=>{l=l.insert(f,p)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,l,u,ue())).next(f=>({batchId:a,changes:sT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=ul();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let o=ul();return this.indexManager.getCollectionParents(e,i).next(s=>M.forEach(s,a=>{const l=function(u,f){return new xh(f,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(o=>(i=o,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(o=>{o.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Et.newInvalidDocument(u)))});let s=ul();return i.forEach((a,l)=>{const u=o.get(a);u!==void 0&&Il(u.mutation,l,yr.empty(),lt.now()),yv(n,l)&&(s=s.insert(a,l))}),s})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):M.resolve(Et.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return M.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Br(r.createTime)}),M.resolve()}getNamedQuery(e,n){return M.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:G4(r.bundledQuery),readTime:Br(r.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(){this.overlays=new ct(J.comparator),this.es=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=So();return M.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ue(e,n,o)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.es.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=So(),o=n.length+1,s=new J(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new ct((u,f)=>u-f);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=o.get(u.largestBatchId);f===null&&(f=So(),o=o.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const a=So(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>a.set(u,f)),!(a.size()>=i)););return M.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new q4(n,r));let o=this.es.get(n);o===void 0&&(o=ue(),this.es.set(n,o)),this.es.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.ns=new ut(ft.ss),this.rs=new ut(ft.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new ft(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new ft(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new J(new De([])),r=new ft(n,e),i=new ft(n,e+1),o=[];return this.rs.forEachInRange([r,i],s=>{this.cs(s),o.push(s.key)}),o}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new J(new De([])),r=new ft(n,e),i=new ft(n,e+1);let o=ue();return this.rs.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ft(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return J.comparator(e.key,n.key)||Ee(e._s,n._s)}static os(e,n){return Ee(e._s,n._s)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ut(ft.ss)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new H4(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.gs=this.gs.add(new ft(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(s)}lookupMutationBatch(e,n){return M.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),o=i<0?0:i;return M.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),i=new ft(n,Number.POSITIVE_INFINITY),o=[];return this.gs.forEachInRange([r,i],s=>{const a=this.ys(s._s);o.push(a)}),M.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Ee);return n.forEach(i=>{const o=new ft(i,0),s=new ft(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([o,s],a=>{r=r.add(a._s)})}),M.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;J.isDocumentKey(o)||(o=o.child(""));const s=new ft(new J(o),0);let a=new ut(Ee);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},s),M.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Pe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return M.forEach(n.mutations,i=>{const o=new ft(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new ft(n,0),i=this.gs.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e){this.Es=e,this.docs=new ct(J.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=ei();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),M.resolve(r)}getAllFromCollection(e,n,r){let i=ei();const o=new J(n.child("")),s=this.docs.getIteratorFrom(o);for(;s.hasNext();){const{key:a,value:{document:l}}=s.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||W3(V3(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,i){re()}As(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ij(this)}getSize(e){return M.resolve(this.size)}}class ij extends Q4{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(e){this.persistence=e,this.Rs=new Pa(n=>mv(n),gv),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Sv,this.targetCount=0,this.vs=ha.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),M.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ha(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Dn(n),M.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Rs.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),M.waitFor(o).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),M.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new hv(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new oj(this),this.indexManager=new X4,this.remoteDocumentCache=function(r){return new rj(r)}(r=>this.referenceDelegate.xs(r)),this.It=new K4(n),this.Ns=new ej(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new nj(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new aj(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(o=>this.referenceDelegate.Os(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ms(e,n){return M.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class aj extends q3{constructor(e){super(),this.currentSequenceNumber=e}}class Ev{constructor(e){this.persistence=e,this.Fs=new Sv,this.$s=null}static Bs(e){return new Ev(e)}get Ls(){if(this.$s)return this.$s;throw re()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),M.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Ls.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Ls,r=>{const i=J.fromPath(r);return this.Us(e,i).next(o=>{o||n.removeEntry(i,ae.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return M.or([()=>M.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=ue(),i=ue();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new kv(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(o=>o||this.Oi(e,n,i,r)).next(o=>o||this.Mi(e,n))}ki(e,n){if(rS(n))return M.resolve(null);let r=Zr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$g(n,null,"F"),r=Zr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=ue(...o);return this.Ni.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,s,l.readTime)?this.ki(e,$g(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return rS(n)||i.isEqual(ae.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(o=>{const s=this.Fi(n,o);return this.$i(n,s,r,i)?this.Mi(e,n):(Gb()<=we.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Dg(n)),this.Bi(e,s,n,B3(i,-1)))})}Fi(e,n){let r=new ut(XC(e));return n.forEach((i,o)=>{yv(e,o)&&(r=r.add(o))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Mi(e,n){return Gb()<=we.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Dg(n)),this.Ni.getDocumentsMatchingQuery(e,n,Vi.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new ct(Ee),this.qi=new Pa(o=>mv(o),gv),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Z4(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function cj(t,e,n,r){return new uj(t,e,n,r)}async function gT(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=ue();for(const u of i){s.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of o){a.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:s,addedBatchIds:a}))})})}function fj(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.Gi.newChangeBuffer({trackRemovals:!0});return function(s,a,l,u){const f=l.batch,h=f.keys();let p=M.resolve();return h.forEach(y=>{p=p.next(()=>u.getEntry(a,y)).next(w=>{const v=l.docVersions.get(y);Pe(v!==null),w.version.compareTo(v)<0&&(f.applyToRemoteDocument(w,l),w.isValidDocument()&&(w.setReadTime(l.commitVersion),u.addEntry(w)))})}),p.next(()=>s.mutationQueue.removeMutationBatch(a,f))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(s){let a=ue();for(let l=0;l<s.mutationResults.length;++l)s.mutationResults[l].transformResults.length>0&&(a=a.add(s.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yT(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function dj(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((f,h)=>{const p=i.get(h);if(!p)return;a.push(n.Cs.removeMatchingKeys(o,f.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(o,f.addedDocuments,h)));let y=p.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.has(h)?y=y.withResumeToken(jt.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),i=i.insert(h,y),function(w,v,c){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:c.addedDocuments.size+c.modifiedDocuments.size+c.removedDocuments.size>0}(p,y,f)&&a.push(n.Cs.updateTargetData(o,y))});let l=ei(),u=ue();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(hj(o,s,e.documentUpdates).next(f=>{l=f.Wi,u=f.zi})),!r.isEqual(ae.min())){const f=n.Cs.getLastRemoteSnapshotVersion(o).next(h=>n.Cs.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return M.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,u)).next(()=>l)}).then(o=>(n.Ui=i,o))}function hj(t,e,n){let r=ue(),i=ue();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=ei();return n.forEach((a,l)=>{const u=o.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ae.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:s,zi:i}})}function pj(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mj(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(o=>o?(i=o,M.resolve(i)):n.Cs.allocateTargetId(r).next(s=>(i=new Co(e,s,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Fg(t,e,n){const r=oe(t),i=r.Ui.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Gu(s))throw s;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function dS(t,e,n){const r=oe(t);let i=ae.min(),o=ue();return r.persistence.runTransaction("Execute query","readonly",s=>function(a,l,u){const f=oe(a),h=f.qi.get(u);return h!==void 0?M.resolve(f.Ui.get(h)):f.Cs.getTargetData(l,u)}(r,s,Zr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.Li.getDocumentsMatchingQuery(s,e,n?i:ae.min(),n?o:ue())).next(a=>(gj(r,f4(e),a),{documents:a,Hi:o})))}function gj(t,e,n){let r=t.Ki.get(e)||ae.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.Ki.set(e,r)}class hS{constructor(){this.activeTargetIds=lT()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yj{constructor(){this.Lr=new hS,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new hS,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vj{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bj{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,o){const s=this.ho(e,n);Y("RestConnection","Sending: ",s,r);const a={};return this.lo(a,i,o),this.fo(e,s,a,r).then(l=>(Y("RestConnection","Received: ",l),l),l=>{throw Rg("RestConnection",`${e} failed with error: `,l,"url: ",s,"request:",r),l})}_o(e,n,r,i,o,s){return this.ao(e,n,r,i,o)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+za,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}ho(e,n){const r=wj[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((o,s)=>{const a=new R3;a.setWithCredentials(!0),a.listenOnce(z3.COMPLETE,()=>{var u;try{switch(a.getLastErrorCode()){case Zp.NO_ERROR:const f=a.getResponseJson();Y("Connection","XHR received:",JSON.stringify(f)),o(f);break;case Zp.TIMEOUT:Y("Connection",'RPC "'+e+'" timed out'),s(new Z(D.DEADLINE_EXCEEDED,"Request time out"));break;case Zp.HTTP_ERROR:const h=a.getStatus();if(Y("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let p=a.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=(u=p)===null||u===void 0?void 0:u.error;if(y&&y.status&&y.message){const w=function(v){const c=v.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(c)>=0?c:D.UNKNOWN}(y.status);s(new Z(w,y.message))}else s(new Z(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new Z(D.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Y("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=T3(),s=I3(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new O3({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");Y("Connection","Creating WebChannel: "+l,a);const u=o.createWebChannel(l,a);let f=!1,h=!1;const p=new bj({Hr:w=>{h?Y("Connection","Not sending because WebChannel is closed:",w):(f||(Y("Connection","Opening WebChannel transport."),u.open(),f=!0),Y("Connection","WebChannel sending:",w),u.send(w))},Jr:()=>u.close()}),y=(w,v,c)=>{w.listen(v,d=>{try{c(d)}catch(m){setTimeout(()=>{throw m},0)}})};return y(u,Uc.EventType.OPEN,()=>{h||Y("Connection","WebChannel transport opened.")}),y(u,Uc.EventType.CLOSE,()=>{h||(h=!0,Y("Connection","WebChannel transport closed"),p.io())}),y(u,Uc.EventType.ERROR,w=>{h||(h=!0,Rg("Connection","WebChannel transport errored:",w),p.io(new Z(D.UNAVAILABLE,"The operation could not be completed")))}),y(u,Uc.EventType.MESSAGE,w=>{var v;if(!h){const c=w.data[0];Pe(!!c);const d=c,m=d.error||((v=d[0])===null||v===void 0?void 0:v.error);if(m){Y("Connection","WebChannel received error:",m);const g=m.status;let b=function(E){const k=et[E];if(k!==void 0)return iT(k)}(g),S=m.message;b===void 0&&(b=D.INTERNAL,S="Unknown error status: "+g+" with message "+m.message),h=!0,p.io(new Z(b,S)),u.close()}else Y("Connection","WebChannel received:",c),p.ro(c)}}),y(s,P3.STAT_EVENT,w=>{w.stat===qb.PROXY?Y("Connection","Detected buffering proxy"):w.stat===qb.NOPROXY&&Y("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function tm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){return new P4(t,!0)}class vT{constructor(e,n,r=1e3,i=1.5,o=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,r,i,o,s,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new vT(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Jr(n.toString()),Jr("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new Z(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ej extends wT{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.It=o}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=A4(this.It,e),r=function(i){if(!("targetChange"in i))return ae.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ae.min():o.readTime?Br(o.readTime):ae.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=jg(this.It),n.addTarget=function(i,o){let s;const a=o.target;return s=Ug(a)?{documents:$4(i,a)}:{query:D4(i,a)},s.targetId=o.targetId,o.resumeToken.approximateByteSize()>0?s.resumeToken=fT(i,o.resumeToken):o.snapshotVersion.compareTo(ae.min())>0&&(s.readTime=id(i,o.snapshotVersion.toTimestamp())),s}(this.It,e);const r=L4(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=jg(this.It),n.removeTarget=e,this.Bo(n)}}class kj extends wT{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.It=o,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=U4(e.writeResults,e.commitTime),r=Br(e.commitTime);return this.listener.Zo(r,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=jg(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>N4(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new Z(D.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.ao(e,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(D.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection._o(e,n,r,o,s,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(D.UNKNOWN,o.toString())})}terminate(){this.nu=!0}}class _j{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Jr(n),this.ou=!1):Y("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=o,this.mu.qr(s=>{r.enqueueAndForget(async()=>{Xo(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=oe(a);l._u.add(4),await Yu(l),l.gu.set("Unknown"),l._u.delete(4),await Rh(l)}(this))})}),this.gu=new _j(r,i)}}async function Rh(t){if(Xo(t))for(const e of t.wu)await e(!0)}async function Yu(t){for(const e of t.wu)await e(!1)}function bT(t,e){const n=oe(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Cv(n)?_v(n):Oa(n).ko()&&xv(n,e))}function ST(t,e){const n=oe(t),r=Oa(n);n.du.delete(e),r.ko()&&ET(n,e),n.du.size===0&&(r.ko()?r.Fo():Xo(n)&&n.gu.set("Unknown"))}function xv(t,e){t.yu.Mt(e.targetId),Oa(t).zo(e)}function ET(t,e){t.yu.Mt(e),Oa(t).Ho(e)}function _v(t){t.yu=new T4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Oa(t).start(),t.gu.uu()}function Cv(t){return Xo(t)&&!Oa(t).No()&&t.du.size>0}function Xo(t){return oe(t)._u.size===0}function kT(t){t.yu=void 0}async function Tj(t){t.du.forEach((e,n)=>{xv(t,e)})}async function Ij(t,e){kT(t),Cv(t)?(t.gu.hu(e),_v(t)):t.gu.set("Unknown")}async function zj(t,e,n){if(t.gu.set("Online"),e instanceof cT&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const s of i.targetIds)r.du.has(s)&&(await r.remoteSyncer.rejectListen(s,o),r.du.delete(s),r.yu.removeTarget(s))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await od(t,r)}else if(e instanceof of?t.yu.Gt(e):e instanceof uT?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(ae.min()))try{const r=await yT(t.localStore);n.compareTo(r)>=0&&await function(i,o){const s=i.yu.te(o);return s.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,o))}}),s.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(jt.EMPTY_BYTE_STRING,l.snapshotVersion)),ET(i,a);const u=new Co(l.target,a,1,l.sequenceNumber);xv(i,u)}),i.remoteSyncer.applyRemoteEvent(s)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await od(t,r)}}async function od(t,e,n){if(!Gu(e))throw e;t._u.add(1),await Yu(t),t.gu.set("Offline"),n||(n=()=>yT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Rh(t)})}function xT(t,e){return e().catch(n=>od(t,n,e))}async function Ah(t){const e=oe(t),n=Hi(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Pj(e);)try{const i=await pj(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,Oj(e,i)}catch(i){await od(e,i)}_T(e)&&CT(e)}function Pj(t){return Xo(t)&&t.fu.length<10}function Oj(t,e){t.fu.push(e);const n=Hi(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function _T(t){return Xo(t)&&!Hi(t).No()&&t.fu.length>0}function CT(t){Hi(t).start()}async function Rj(t){Hi(t).eu()}async function Aj(t){const e=Hi(t);for(const n of t.fu)e.Xo(n.mutations)}async function Nj(t,e,n){const r=t.fu.shift(),i=bv.from(r,e,n);await xT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ah(t)}async function Uj(t,e){e&&Hi(t).Yo&&await async function(n,r){if(i=r.code,E4(i)&&i!==D.ABORTED){const o=n.fu.shift();Hi(n).Mo(),await xT(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,r)),await Ah(n)}var i}(t,e),_T(t)&&CT(t)}async function mS(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=Xo(n);n._u.add(3),await Yu(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Rh(n)}async function $j(t,e){const n=oe(t);e?(n._u.delete(2),await Rh(n)):e||(n._u.add(2),await Yu(n),n.gu.set("Unknown"))}function Oa(t){return t.pu||(t.pu=function(e,n,r){const i=oe(e);return i.su(),new Ej(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:Tj.bind(null,t),Zr:Ij.bind(null,t),Wo:zj.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Cv(t)?_v(t):t.gu.set("Unknown")):(await t.pu.stop(),kT(t))})),t.pu}function Hi(t){return t.Iu||(t.Iu=function(e,n,r){const i=oe(e);return i.su(),new kj(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:Rj.bind(null,t),Zr:Uj.bind(null,t),tu:Aj.bind(null,t),Zo:Nj.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Ah(t)):(await t.Iu.stop(),t.fu.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Mi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new Tv(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iv(t,e){if(Jr("AsyncQueue",`${e}: ${t}`),Gu(t))return new Z(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=ul(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new Fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(){this.Tu=new ct(J.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):re():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class pa{constructor(e,n,r,i,o,s,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new pa(e,n,Fs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ch(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(){this.Au=void 0,this.listeners=[]}}class Mj{constructor(){this.queries=new Pa(e=>GC(e),Ch),this.onlineState="Unknown",this.Ru=new Set}}async function TT(t,e){const n=oe(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new Dj),i)try{o.Au=await n.onListen(r)}catch(s){const a=Iv(s,`Initialization of query '${Dg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,o),o.listeners.push(e),e.bu(n.onlineState),o.Au&&e.Pu(o.Au)&&zv(n)}async function IT(t,e){const n=oe(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const s=o.listeners.indexOf(e);s>=0&&(o.listeners.splice(s,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Lj(t,e){const n=oe(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.listeners)a.Pu(i)&&(r=!0);s.Au=i}}r&&zv(n)}function jj(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function zv(t){t.Ru.forEach(e=>{e.next()})}class zT{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new pa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=pa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e){this.key=e}}class OT{constructor(e){this.key=e}}class Fj{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ue(),this.mutatedKeys=ue(),this.Gu=XC(e),this.Qu=new Fs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new gS,i=n?n.Qu:this.Qu;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,h)=>{const p=i.get(f),y=yv(this.query,h)?h:null,w=!!p&&this.mutatedKeys.has(p.key),v=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let c=!1;p&&y?p.data.isEqual(y.data)?w!==v&&(r.track({type:3,doc:y}),c=!0):this.Hu(p,y)||(r.track({type:2,doc:y}),c=!0,(l&&this.Gu(y,l)>0||u&&this.Gu(y,u)<0)&&(a=!0)):!p&&y?(r.track({type:0,doc:y}),c=!0):p&&!y&&(r.track({type:1,doc:p}),c=!0,(l||u)&&(a=!0)),c&&(y?(s=s.add(y),o=v?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Qu:s,zu:r,$i:a,mutatedKeys:o}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const o=e.zu.Eu();o.sort((u,f)=>function(h,p){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return y(h)-y(p)}(u.type,f.type)||this.Gu(u.doc,f.doc)),this.Ju(r);const s=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,o.length!==0||l?{snapshot:new pa(this.query,e.Qu,i,o,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new gS,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ue(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new OT(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new PT(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=ue();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return pa.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Bj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Vj{constructor(e){this.key=e,this.nc=!1}}class Wj{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new Pa(a=>GC(a),Ch),this.rc=new Map,this.oc=new Set,this.uc=new ct(J.comparator),this.cc=new Map,this.ac=new Sv,this.hc={},this.lc=new Map,this.fc=ha.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Hj(t,e){const n=tF(t);let r,i;const o=n.ic.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.ec();else{const s=await mj(n.localStore,Zr(e));n.isPrimaryClient&&bT(n.remoteStore,s);const a=n.sharedClientState.addLocalQueryTarget(s.targetId);r=s.targetId,i=await qj(n,e,r,a==="current",s.resumeToken)}return i}async function qj(t,e,n,r,i){t._c=(h,p,y)=>async function(w,v,c,d){let m=v.view.Wu(c);m.$i&&(m=await dS(w.localStore,v.query,!1).then(({documents:S})=>v.view.Wu(S,m)));const g=d&&d.targetChanges.get(v.targetId),b=v.view.applyChanges(m,w.isPrimaryClient,g);return vS(w,v.targetId,b.Xu),b.snapshot}(t,h,p,y);const o=await dS(t.localStore,e,!0),s=new Fj(e,o.Hi),a=s.Wu(o.documents),l=Xu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=s.applyChanges(a,t.isPrimaryClient,l);vS(t,n,u.Xu);const f=new Bj(e,n,s);return t.ic.set(e,f),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Kj(t,e){const n=oe(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(o=>!Ch(o,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fg(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ST(n.remoteStore,r.targetId),Bg(n,r.targetId)}).catch(Ku)):(Bg(n,r.targetId),await Fg(n.localStore,r.targetId,!0))}async function Gj(t,e,n){const r=nF(t);try{const i=await function(o,s){const a=oe(o),l=lt.now(),u=s.reduce((p,y)=>p.add(y.key),ue());let f,h;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=ei(),w=ue();return a.Gi.getEntries(p,u).next(v=>{y=v,y.forEach((c,d)=>{d.isValidDocument()||(w=w.add(c))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,y)).next(v=>{f=v;const c=[];for(const d of s){const m=w4(d,f.get(d.key).overlayedDocument);m!=null&&c.push(new Go(d.key,m,qC(m.value.mapValue),vr.exists(!0)))}return a.mutationQueue.addMutationBatch(p,l,c,s)}).next(v=>{h=v;const c=v.applyToLocalDocumentSet(f,w);return a.documentOverlayCache.saveOverlays(p,v.batchId,c)})}).then(()=>({batchId:h.batchId,changes:sT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,s,a){let l=o.hc[o.currentUser.toKey()];l||(l=new ct(Ee)),l=l.insert(s,a),o.hc[o.currentUser.toKey()]=l}(r,i.batchId,n),await Qu(r,i.changes),await Ah(r.remoteStore)}catch(i){const o=Iv(i,"Failed to persist write");n.reject(o)}}async function RT(t,e){const n=oe(t);try{const r=await dj(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.cc.get(o);s&&(Pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.nc=!0:i.modifiedDocuments.size>0?Pe(s.nc):i.removedDocuments.size>0&&(Pe(s.nc),s.nc=!1))}),await Qu(n,r,e)}catch(r){await Ku(r)}}function yS(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((o,s)=>{const a=s.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(o,s){const a=oe(o);a.onlineState=s;let l=!1;a.queries.forEach((u,f)=>{for(const h of f.listeners)h.bu(s)&&(l=!0)}),l&&zv(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Xj(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),o=i&&i.key;if(o){let s=new ct(J.comparator);s=s.insert(o,Et.newNoDocument(o,ae.min()));const a=ue().add(o),l=new Ph(ae.min(),new Map,new ut(Ee),s,a);await RT(r,l),r.uc=r.uc.remove(o),r.cc.delete(e),Pv(r)}else await Fg(r.localStore,e,!1).then(()=>Bg(r,e,n)).catch(Ku)}async function Yj(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await fj(n.localStore,e);NT(n,r,null),AT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qu(n,i)}catch(i){await Ku(i)}}async function Qj(t,e,n){const r=oe(t);try{const i=await function(o,s){const a=oe(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,s).next(f=>(Pe(f!==null),u=f.keys(),a.mutationQueue.removeMutationBatch(l,f))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,s)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);NT(r,e,n),AT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qu(r,i)}catch(i){await Ku(i)}}function AT(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function NT(t,e,n){const r=oe(t);let i=r.hc[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Bg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||UT(t,r)})}function UT(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(ST(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Pv(t))}function vS(t,e,n){for(const r of n)r instanceof PT?(t.ac.addReference(r.key,e),Jj(t,r)):r instanceof OT?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||UT(t,r.key)):re()}function Jj(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.oc.add(r),Pv(t))}function Pv(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new J(De.fromString(e)),r=t.fc.next();t.cc.set(r,new Vj(n)),t.uc=t.uc.insert(n,r),bT(t.remoteStore,new Co(Zr(_h(n.path)),r,2,hv.at))}}async function Qu(t,e,n){const r=oe(t),i=[],o=[],s=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{s.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const f=kv.Ci(l.targetId,u);o.push(f)}}))}),await Promise.all(s),r.sc.Wo(i),await async function(a,l){const u=oe(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(l,h=>M.forEach(h.Si,p=>u.persistence.referenceDelegate.addReference(f,h.targetId,p)).next(()=>M.forEach(h.Di,p=>u.persistence.referenceDelegate.removeReference(f,h.targetId,p)))))}catch(f){if(!Gu(f))throw f;Y("LocalStore","Failed to update sequence numbers: "+f)}for(const f of l){const h=f.targetId;if(!f.fromCache){const p=u.Ui.get(h),y=p.snapshotVersion,w=p.withLastLimboFreeSnapshotVersion(y);u.Ui=u.Ui.insert(h,w)}}}(r.localStore,o))}async function Zj(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await gT(n.localStore,e);n.currentUser=e,function(i,o){i.lc.forEach(s=>{s.forEach(a=>{a.reject(new Z(D.CANCELLED,o))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qu(n,r.ji)}}function eF(t,e){const n=oe(t),r=n.cc.get(e);if(r&&r.nc)return ue().add(r.key);{let i=ue();const o=n.rc.get(e);if(!o)return i;for(const s of o){const a=n.ic.get(s);i=i.unionWith(a.view.ju)}return i}}function tF(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Xj.bind(null,e),e.sc.Wo=Lj.bind(null,e.eventManager),e.sc.wc=jj.bind(null,e.eventManager),e}function nF(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qj.bind(null,e),e}class rF{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Oh(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return cj(this.persistence,new lj,e.initialUser,this.It)}yc(e){return new sj(Ev.Bs,this.It)}gc(e){return new yj}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zj.bind(null,this.syncEngine),await $j(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Mj}createDatastore(e){const n=Oh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Sj(i));var i;return function(o,s,a,l){return new xj(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,o=a=>yS(this.syncEngine,a,0),s=pS.C()?new pS:new vj,new Cj(n,r,i,o,s);var n,r,i,o,s}createSyncEngine(e,n){return function(r,i,o,s,a,l,u){const f=new Wj(r,i,o,s,a,l);return u&&(f.dc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);Y("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Yu(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t,e,n){if(!n)throw new Z(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oF(t,e,n,r){if(e===!0&&r===!0)throw new Z(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wS(t){if(!J.isDocumentKey(t))throw new Z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bS(t){if(J.isDocumentKey(t))throw new Z(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ov(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function Vr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ov(t);throw new Z(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new Map;class ES{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,oF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ES({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ES(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new A3;switch(n.type){case"gapi":const r=n.client;return new D3(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=SS.get(e);n&&(Y("ComponentProvider","Removing Datastore"),SS.delete(e),n.terminate())}(this),Promise.resolve()}}function sF(t,e,n,r={}){var i;const o=(t=Vr(t,Nh))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==e&&Rg("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},o),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=At.MOCK_USER;else{s=m5(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Z(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new At(l)}t._authCredentials=new N3(new FC(s,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dn(this.firestore,e,this._key)}}class Uh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Uh(this.firestore,e,this._query)}}class Li extends Uh{constructor(e,n,r){super(e,n,_h(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dn(this.firestore,null,new J(e))}withConverter(e){return new Li(this.firestore,e,this._path)}}function W6(t,e,...n){if(t=Gt(t),$T("collection","path",e),t instanceof Nh){const r=De.fromString(e,...n);return bS(r),new Li(t,null,r)}{if(!(t instanceof dn||t instanceof Li))throw new Z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return bS(r),new Li(t.firestore,null,r)}}function H6(t,e,...n){if(t=Gt(t),arguments.length===1&&(e=BC.R()),$T("doc","path",e),t instanceof Nh){const r=De.fromString(e,...n);return wS(r),new dn(t,null,new J(r))}{if(!(t instanceof dn||t instanceof Li))throw new Z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return wS(r),new dn(t.firestore,t instanceof Li?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Jr("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=At.UNAUTHENTICATED,this.clientId=BC.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Iv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lF(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function uF(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cF(t);Y("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>mS(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,o)=>mS(e.remoteStore,o)),t.onlineComponents=e}async function cF(t){return t.offlineComponents||(Y("FirestoreClient","Using default OfflineComponentProvider"),await lF(t,new rF)),t.offlineComponents}async function MT(t){return t.onlineComponents||(Y("FirestoreClient","Using default OnlineComponentProvider"),await uF(t,new iF)),t.onlineComponents}function fF(t){return MT(t).then(e=>e.syncEngine)}async function Vg(t){const e=await MT(t),n=e.eventManager;return n.onListen=Hj.bind(null,e.syncEngine),n.onUnlisten=Kj.bind(null,e.syncEngine),n}function dF(t,e,n={}){const r=new Mi;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,s,a,l){const u=new DT({next:h=>{o.enqueueAndForget(()=>IT(i,f));const p=h.docs.has(s);!p&&h.fromCache?l.reject(new Z(D.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&h.fromCache&&a&&a.source==="server"?l.reject(new Z(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),f=new zT(_h(s.path),u,{includeMetadataChanges:!0,Nu:!0});return TT(i,f)}(await Vg(t),t.asyncQueue,e,n,r)),r.promise}class hF{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new vT(this,"async_queue_retry"),this.Wc=()=>{const n=tm();n&&Y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=tm();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=tm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Mi;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Gu(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw Jr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Tv.createAndSchedule(this,e,n,r,o=>this.Yc(o));return this.qc.push(i),i}zc(){this.Kc&&re()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function kS(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class ma extends Nh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new hF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||LT(this),this._firestoreClient.terminate()}}function q6(t,e){const n=typeof t=="object"?t:$_(),r=typeof t=="string"?t:e||"(default)",i=Wy(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=d5("firestore");o&&sF(i,...o)}return i}function Rv(t){return t._firestoreClient||LT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function LT(t){var e;const n=t._freezeSettings(),r=function(i,o,s,a){return new G3(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new aF(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ga(jt.fromBase64String(e))}catch(n){throw new Z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ga(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pF=/^__.*__$/;class jT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Go(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function FT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Uv{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,o===void 0&&this.na(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Uv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return sd(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(FT(this.sa)&&pF.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class mF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Oh(e)}da(e,n,r,i=!1){return new Uv({sa:e,methodName:n,fa:r,path:Ut.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function gF(t){const e=t._freezeSettings(),n=Oh(t._databaseId);return new mF(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Dh extends Av{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dh}}function yF(t,e,n,r){const i=t.da(1,e,n);VT("Data must be an object, but it was:",i,r);const o=[],s=bn.empty();Ko(r,(l,u)=>{const f=$v(e,l,n);u=Gt(u);const h=i.ca(f);if(u instanceof Dh)o.push(f);else{const p=Mh(u,h);p!=null&&(o.push(f),s.set(f,p))}});const a=new yr(o);return new jT(s,a,i.fieldTransforms)}function vF(t,e,n,r,i,o){const s=t.da(1,e,n),a=[xS(e,r,n)],l=[i];if(o.length%2!=0)throw new Z(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<o.length;p+=2)a.push(xS(e,o[p])),l.push(o[p+1]);const u=[],f=bn.empty();for(let p=a.length-1;p>=0;--p)if(!SF(u,a[p])){const y=a[p];let w=l[p];w=Gt(w);const v=s.ca(y);if(w instanceof Dh)u.push(y);else{const c=Mh(w,v);c!=null&&(u.push(y),f.set(y,c))}}const h=new yr(u);return new jT(f,h,s.fieldTransforms)}function Mh(t,e){if(BT(t=Gt(t)))return VT("Unsupported field value:",e,t),wF(t,e);if(t instanceof Av)return function(n,r){if(!FT(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let o=0;for(const s of n){let a=Mh(s,r.aa(o));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),o++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return h4(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=lt.fromDate(n);return{timestampValue:id(r.It,i)}}if(n instanceof lt){const i=new lt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:id(r.It,i)}}if(n instanceof Nv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ga)return{bytesValue:fT(r.It,n._byteString)};if(n instanceof dn){const i=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw r.ha(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:wv(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Ov(n)}`)}(t,e)}function wF(t,e){const n={};return VC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ko(t,(r,i)=>{const o=Mh(i,e.ra(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function BT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof lt||t instanceof Nv||t instanceof ga||t instanceof dn||t instanceof Av)}function VT(t,e,n){if(!BT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ov(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function xS(t,e,n){if((e=Gt(e))instanceof $h)return e._internalPath;if(typeof e=="string")return $v(t,e);throw sd("Field path arguments must be of type string or ",t,!1,void 0,n)}const bF=new RegExp("[~\\*/\\[\\]]");function $v(t,e,n){if(e.search(bF)>=0)throw sd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $h(...e.split("."))._internalPath}catch{throw sd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sd(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new Z(D.INVALID_ARGUMENT,a+t+l)}function SF(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new dn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(HT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EF extends WT{data(){return super.data()}}function HT(t,e){return typeof e=="string"?$v(t,e):e instanceof $h?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kF(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xF{convertValue(e,n="none"){switch(jo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw re()}}convertObject(e,n){const r={};return Ko(e.fields,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new Nv(tt(e.latitude),tt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=HC(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cu(e));default:return null}}convertTimestamp(e){const n=Wi(e);return new lt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Pe(mT(r));const i=new fu(r.get(1),r.get(3)),o=new J(r.popFirst(5));return i.isEqual(n)||Jr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qT extends WT{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(HT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sf extends qT{data(e={}){return super.data(e)}}class _F{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sf(this._firestore,this._userDataWriter,r.key,r,new cl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(s=>{const a=new sf(r._firestore,r._userDataWriter,s.doc.key,s.doc,new cl(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);return s.doc,{type:"added",doc:a,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(s=>i||s.type!==3).map(s=>{const a=new sf(r._firestore,r._userDataWriter,s.doc.key,s.doc,new cl(r._snapshot.mutatedKeys.has(s.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return s.type!==0&&(l=o.indexOf(s.doc.key),o=o.delete(s.doc.key)),s.type!==1&&(o=o.add(s.doc),u=o.indexOf(s.doc.key)),{type:CF(s.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K6(t){t=Vr(t,dn);const e=Vr(t.firestore,ma);return dF(Rv(e),t._key).then(n=>XT(e,t,n))}class KT extends xF{constructor(e){super(),this.firestore=e}convertBytes(e){return new ga(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dn(this.firestore,null,n)}}function G6(t,e,n,...r){t=Vr(t,dn);const i=Vr(t.firestore,ma),o=gF(i);let s;return s=typeof(e=Gt(e))=="string"||e instanceof $h?vF(o,"updateDoc",t._key,e,n,r):yF(o,"updateDoc",t._key,e),GT(i,[s.toMutation(t._key,vr.exists(!0))])}function X6(t){return GT(Vr(t.firestore,ma),[new vv(t._key,vr.none())])}function Y6(t,...e){var n,r,i;t=Gt(t);let o={includeMetadataChanges:!1},s=0;typeof e[s]!="object"||kS(e[s])||(o=e[s],s++);const a={includeMetadataChanges:o.includeMetadataChanges};if(kS(e[s])){const h=e[s];e[s]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[s+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[s+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,f;if(t instanceof dn)u=Vr(t.firestore,ma),f=_h(t._key.path),l={next:h=>{e[s]&&e[s](XT(u,t,h))},error:e[s+1],complete:e[s+2]};else{const h=Vr(t,Uh);u=Vr(h.firestore,ma),f=h._query;const p=new KT(u);l={next:y=>{e[s]&&e[s](new _F(u,p,h,y))},error:e[s+1],complete:e[s+2]},kF(t._query)}return function(h,p,y,w){const v=new DT(w),c=new zT(p,v,y);return h.asyncQueue.enqueueAndForget(async()=>TT(await Vg(h),c)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>IT(await Vg(h),c))}}(Rv(u),f,a,l)}function GT(t,e){return function(n,r){const i=new Mi;return n.asyncQueue.enqueueAndForget(async()=>Gj(await fF(n),r,i)),i.promise}(Rv(t),e)}function XT(t,e,n){const r=n.docs.get(e._key),i=new KT(t);return new qT(t,i,e._key,r,new cl(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){za=n})(Du),la(new Do("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),s=new ma(new U3(n.getProvider("auth-internal")),new L3(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fu(a.options.projectId,l)}(o,r),o);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),Di(Kb,"3.7.3",t),Di(Kb,"3.7.3","esm2017")})();function Dv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function YT(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TF=YT,QT=new Uu("auth","Firebase",YT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=new By("@firebase/auth");function af(t,...e){_S.logLevel<=we.ERROR&&_S.error(`Auth (${Du}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t,...e){throw Mv(t,...e)}function wr(t,...e){return Mv(t,...e)}function IF(t,e,n){const r=Object.assign(Object.assign({},TF()),{[e]:n});return new Uu("auth","Firebase",r).create(e,{appName:t.name})}function Mv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return QT.create(t,...e)}function te(t,e,...n){if(!t)throw Mv(e,...n)}function Dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw af(e),new Error(e)}function ni(t,e){t||Dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=new Map;function Mr(t){ni(t instanceof Function,"Expected a class definition");let e=CS.get(t);return e?(ni(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,CS.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(t,e){const n=Wy(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Wf(o,e!=null?e:{}))return i;ti(i,"already-initialized")}return n.initialize({options:e})}function PF(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OF(){return TS()==="http:"||TS()==="https:"}function TS(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OF()||r5()||"connection"in navigator)?navigator.onLine:!0}function AF(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n){this.shortDelay=e,this.longDelay=n,ni(n>e,"Short delay should be less than long delay!"),this.isMobile=n5()||i5()}get(){return RF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e){ni(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UF=new Ju(3e4,6e4);function $F(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lh(t,e,n,r,i={}){return ZT(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=$u(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),JT.fetch()(eI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function ZT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NF),e);try{const i=new MF(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Mc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mc(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Mc(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Mc(t,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw IF(t,f,u);ti(t,f)}}catch(i){if(i instanceof oi)throw i;ti(t,"network-request-failed")}}async function DF(t,e,n,r,i={}){const o=await Lh(t,e,n,r,i);return"mfaPendingCredential"in o&&ti(t,"multi-factor-auth-required",{_serverResponse:o}),o}function eI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lv(t.config,i):`${t.config.apiScheme}://${i}`}class MF{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wr(this.auth,"network-request-failed")),UF.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wr(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LF(t,e){return Lh(t,"POST","/v1/accounts:delete",e)}async function jF(t,e){return Lh(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FF(t,e=!1){const n=Gt(t),r=await n.getIdToken(e),i=jv(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Pl(nm(i.auth_time)),issuedAtTime:Pl(nm(i.iat)),expirationTime:Pl(nm(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function nm(t){return Number(t)*1e3}function jv(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return af("JWT malformed, contained fewer than 3 sections"),null;try{const o=O_(r);return o?JSON.parse(o):(af("Failed to decode base64 JWT payload"),null)}catch(o){return af("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function BF(t){const e=jv(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof oi&&VF(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function VF({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pl(this.lastLoginAt),this.creationTime=Pl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(t){var e;const n=t.auth,r=await t.getIdToken(),i=await gu(t,jF(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?KF(o.providerUserInfo):[],a=qF(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new tI(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function HF(t){const e=Gt(t);await ad(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qF(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function KF(t){return t.map(e=>{var{providerId:n}=e,r=Dv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GF(t,e){const n=await ZT(t,{},async()=>{const r=$u({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=eI(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",JT.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):BF(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return te(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await GF(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new yu;return r&&(te(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yu,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class To{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Dv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new tI(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await gu(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FF(this,e)}reload(){return HF(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new To(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ad(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gu(this,LF(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,c=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:g,emailVerified:b,isAnonymous:S,providerData:E,stsTokenManager:k}=n;te(g&&k,e,"internal-error");const _=yu.fromJSON(this.name,k);te(typeof g=="string",e,"internal-error"),di(h,e.name),di(p,e.name),te(typeof b=="boolean",e,"internal-error"),te(typeof S=="boolean",e,"internal-error"),di(y,e.name),di(w,e.name),di(v,e.name),di(c,e.name),di(d,e.name),di(m,e.name);const C=new To({uid:g,auth:e,email:p,emailVerified:b,displayName:h,isAnonymous:S,photoURL:w,phoneNumber:y,tenantId:v,stsTokenManager:_,createdAt:d,lastLoginAt:m});return E&&Array.isArray(E)&&(C.providerData=E.map(x=>Object.assign({},x))),c&&(C._redirectEventId=c),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new yu;i.updateFromServerResponse(n);const o=new To({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ad(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nI.type="NONE";const IS=nI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=lf(this.userKey,i.apiKey,o),this.fullPersistenceKey=lf("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?To._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs(Mr(IS),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Mr(IS);const s=lf(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const h=To._fromJSON(e,f);u!==o&&(a=h),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Bs(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Bs(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(aI(e))return"Blackberry";if(lI(e))return"Webos";if(Fv(e))return"Safari";if((e.includes("chrome/")||iI(e))&&!e.includes("edge/"))return"Chrome";if(sI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function rI(t=Lt()){return/firefox\//i.test(t)}function Fv(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function iI(t=Lt()){return/crios\//i.test(t)}function oI(t=Lt()){return/iemobile/i.test(t)}function sI(t=Lt()){return/android/i.test(t)}function aI(t=Lt()){return/blackberry/i.test(t)}function lI(t=Lt()){return/webos/i.test(t)}function jh(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XF(t=Lt()){var e;return jh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YF(){return o5()&&document.documentMode===10}function uI(t=Lt()){return jh(t)||sI(t)||lI(t)||aI(t)||/windows phone/i.test(t)||oI(t)}function QF(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t,e=[]){let n;switch(t){case"Browser":n=zS(Lt());break;case"Worker":n=`${zS(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Du}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JF{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new PS(this),this.idTokenSubscription=new PS(this),this.beforeStateQueue=new JF(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=QT,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ad(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AF()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Gt(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Uu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mr(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Mr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return te(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Bv(t){return Gt(t)}class PS{constructor(e){this.auth=e,this.observer=null,this.addObserver=b5(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eB(t,e,n){const r=Bv(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=fI(e),{host:s,port:a}=tB(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nB()}function fI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tB(t){const e=fI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:OS(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:OS(s)}}}function OS(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nB(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,n){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t,e){return DF(t,"POST","/v1/accounts:signInWithIdp",$F(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rB="http://localhost";class Fo extends dI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ti("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Dv(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Fo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:rB,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$u(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends hI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Zu{constructor(){super("facebook.com")}static credential(e){return Fo._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yi.credential(e.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Zu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fo._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vi.credential(n,r)}catch{return null}}}vi.GOOGLE_SIGN_IN_METHOD="google.com";vi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Zu{constructor(){super("github.com")}static credential(e){return Fo._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wi.credential(e.oauthAccessToken)}catch{return null}}}wi.GITHUB_SIGN_IN_METHOD="github.com";wi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends Zu{constructor(){super("twitter.com")}static credential(e,n){return Fo._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bi.credential(n,r)}catch{return null}}}bi.TWITTER_SIGN_IN_METHOD="twitter.com";bi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await To._fromIdTokenResponse(e,r,i),s=RS(r);return new ya({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=RS(r);return new ya({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function RS(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends oi{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ld.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ld(e,n,r,i)}}function pI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ld._fromErrorAndOperation(t,o,e,r):o})}async function iB(t,e,n=!1){const r=await gu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ya._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oB(t,e,n=!1){var r;const{auth:i}=t,o="reauthenticate";try{const s=await gu(t,pI(i,o,e,t),n);te(s.idToken,i,"internal-error");const a=jv(s.idToken);te(a,i,"internal-error");const{sub:l}=a;return te(t.uid===l,i,"user-mismatch"),ya._forOperation(t,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&ti(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sB(t,e,n=!1){const r="signIn",i=await pI(t,r,e),o=await ya._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function aB(t,e,n,r){return Gt(t).onIdTokenChanged(e,n,r)}function lB(t,e,n){return Gt(t).beforeAuthStateChanged(e,n)}const ud="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ud,"1"),this.storage.removeItem(ud),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uB(){const t=Lt();return Fv(t)||jh(t)}const cB=1e3,fB=10;class gI extends mI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=uB()&&QF(),this.fallbackToPolling=uI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);YF()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,fB):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gI.type="LOCAL";const dB=gI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI extends mI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yI.type="SESSION";const vI=yI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hB(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await hB(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pB{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Vv("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(){return window}function mB(t){br().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){return typeof br().WorkerGlobalScope<"u"&&typeof br().importScripts=="function"}async function gB(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yB(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vB(){return wI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="firebaseLocalStorageDb",wB=1,cd="firebaseLocalStorage",SI="fbase_key";class ec{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bh(t,e){return t.transaction([cd],e?"readwrite":"readonly").objectStore(cd)}function bB(){const t=indexedDB.deleteDatabase(bI);return new ec(t).toPromise()}function Hg(){const t=indexedDB.open(bI,wB);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cd,{keyPath:SI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cd)?e(r):(r.close(),await bB(),e(await Hg()))})})}async function AS(t,e,n){const r=Bh(t,!0).put({[SI]:e,value:n});return new ec(r).toPromise()}async function SB(t,e){const n=Bh(t,!1).get(e),r=await new ec(n).toPromise();return r===void 0?null:r.value}function NS(t,e){const n=Bh(t,!0).delete(e);return new ec(n).toPromise()}const EB=800,kB=3;class EI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kB)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fh._getInstance(vB()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gB(),!this.activeServiceWorker)return;this.sender=new pB(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yB()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hg();return await AS(e,ud,"1"),await NS(e,ud),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>AS(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SB(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>NS(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Bh(i,!1).getAll();return new ec(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EB)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}EI.type="LOCAL";const xB=EI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _B(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function CB(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=wr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",_B().appendChild(r)})}function TB(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ju(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IB(t,e){return e?Mr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv extends dI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zB(t){return sB(t.auth,new Wv(t),t.bypassAuthState)}function PB(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),oB(n,new Wv(t),t.bypassAuthState)}async function OB(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),iB(n,new Wv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zB;case"linkViaPopup":case"linkViaRedirect":return OB;case"reauthViaPopup":case"reauthViaRedirect":return PB;default:ti(this.auth,"internal-error")}}resolve(e){ni(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ni(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RB=new Ju(2e3,1e4);class zs extends kI{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){ni(this.filter.length===1,"Popup operations only handle one event");const e=Vv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wr(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,RB.get())};e()}}zs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AB="pendingRedirect",uf=new Map;class NB extends kI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=uf.get(this.auth._key());if(!e){try{const r=await UB(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}uf.set(this.auth._key(),e)}return this.bypassAuthState||uf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UB(t,e){const n=MB(e),r=DB(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function $B(t,e){uf.set(t._key(),e)}function DB(t){return Mr(t._redirectPersistence)}function MB(t){return lf(AB,t.config.apiKey,t.name)}async function LB(t,e,n=!1){const r=Bv(t),i=IB(r,e),s=await new NB(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jB=10*60*1e3;class FB{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BB(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jB&&this.cachedEventUids.clear(),this.cachedEventUids.has(US(e))}saveEventToCache(e){this.cachedEventUids.add(US(e)),this.lastProcessedEventTime=Date.now()}}function US(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function BB(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VB(t,e={}){return Lh(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HB=/^https?/;async function qB(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VB(t);for(const n of e)try{if(KB(n))return}catch{}ti(t,"unauthorized-domain")}function KB(t){const e=Wg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!HB.test(n))return!1;if(WB.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GB=new Ju(3e4,6e4);function $S(){const t=br().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function XB(t){return new Promise((e,n)=>{var r,i,o;function s(){$S(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$S(),n(wr(t,"network-request-failed"))},timeout:GB.get()})}if(!((i=(r=br().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=br().gapi)===null||o===void 0)&&o.load)s();else{const a=TB("iframefcb");return br()[a]=()=>{gapi.load?s():n(wr(t,"network-request-failed"))},CB(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw cf=null,e})}let cf=null;function YB(t){return cf=cf||XB(t),cf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QB=new Ju(5e3,15e3),JB="__/auth/iframe",ZB="emulator/auth/iframe",e6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},t6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function n6(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lv(e,ZB):`https://${t.config.authDomain}/${JB}`,r={apiKey:e.apiKey,appName:t.name,v:Du},i=t6.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${$u(r).slice(1)}`}async function r6(t){const e=await YB(t),n=br().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:n6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:e6,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=wr(t,"network-request-failed"),a=br().setTimeout(()=>{o(s)},QB.get());function l(){br().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},o6=500,s6=600,a6="_blank",l6="http://localhost";class DS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function u6(t,e,n,r=o6,i=s6){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},i6),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Lt().toLowerCase();n&&(a=iI(u)?a6:n),rI(u)&&(e=e||l6,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[y,w])=>`${p}${y}=${w},`,"");if(XF(u)&&a!=="_self")return c6(e||"",a),new DS(null);const h=window.open(e||"",a,f);te(h,t,"popup-blocked");try{h.focus()}catch{}return new DS(h)}function c6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f6="__/auth/handler",d6="emulator/auth/handler";function MS(t,e,n,r,i,o){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Du,eventId:i};if(e instanceof hI){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",w5(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(e instanceof Zu){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${h6(t)}?${$u(a).slice(1)}`}function h6({config:t}){return t.emulator?Lv(t,d6):`https://${t.authDomain}/${f6}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="webStorageSupport";class p6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vI,this._completeRedirectFn=LB,this._overrideRedirectResult=$B}async _openPopup(e,n,r,i){var o;ni((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=MS(e,n,r,Wg(),i);return u6(e,s,Vv())}async _openRedirect(e,n,r,i){return await this._originValidation(e),mB(MS(e,n,r,Wg(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(ni(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await r6(e),r=new FB(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rm,{type:rm},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[rm];s!==void 0&&n(!!s),ti(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qB(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return uI()||Fv()||jh()}}const m6=p6;var LS="@firebase/auth",jS="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function v6(t){la(new Do("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{te(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),te(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cI(t)},f=new ZF(a,l,u);return PF(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),la(new Do("auth-internal",e=>{const n=Bv(e.getProvider("auth").getImmediate());return(r=>new g6(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Di(LS,jS,y6(t)),Di(LS,jS,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w6=5*60,b6=A_("authIdTokenMaxAge")||w6;let FS=null;const S6=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>b6)return;const i=n==null?void 0:n.token;FS!==i&&(FS=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Q6(t=$_()){const e=Wy(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zF(t,{popupRedirectResolver:m6,persistence:[xB,dB,vI]}),r=A_("authTokenSyncURL");if(r){const o=S6(r);lB(n,o,()=>o(n.currentUser)),aB(n,s=>o(s))}const i=R_("auth");return i&&eB(n,`http://${i}`),n}v6("Browser");const _I=new Set,hn=new WeakMap,Ws=new WeakMap,Bo=new WeakMap,qg=new WeakMap,E6=new WeakMap,va=new WeakMap,fd=new WeakMap,fl=new WeakSet;let qi;const Lr="__aa_tgt",Kg="__aa_del",k6=t=>{const e=I6(t);e&&e.forEach(n=>z6(n))},x6=t=>{t.forEach(e=>{e.target===qi&&C6(),hn.has(e.target)&&Yo(e.target)})};function _6(t){const e=qg.get(t);e==null||e.disconnect();let n=hn.get(t),r=0;const i=5;n||(n=wa(t),hn.set(t,n));const{offsetWidth:o,offsetHeight:s}=qi,l=[n.top-i,o-(n.left+i+n.width),s-(n.top+i+n.height),n.left-i].map(f=>`${-1*Math.floor(f)}px`).join(" "),u=new IntersectionObserver(()=>{++r>1&&Yo(t)},{root:qi,threshold:1,rootMargin:l});u.observe(t),qg.set(t,u)}function Yo(t){clearTimeout(fd.get(t));const e=Vh(t),n=typeof e=="function"?500:e.duration;fd.set(t,setTimeout(async()=>{const r=Bo.get(t);(!r||await r.finished)&&(hn.set(t,wa(t)),_6(t))},n))}function C6(){clearTimeout(fd.get(qi)),fd.set(qi,setTimeout(()=>{_I.forEach(t=>zI(t,e=>CI(()=>Yo(e))))},100))}function T6(t){setTimeout(()=>{E6.set(t,setInterval(()=>CI(Yo.bind(null,t)),2e3))},Math.round(2e3*Math.random()))}function CI(t){typeof requestIdleCallback=="function"?requestIdleCallback(()=>t()):requestAnimationFrame(()=>t())}let Gg,Ps;typeof window<"u"&&(qi=document.documentElement,Gg=new MutationObserver(k6),Ps=new ResizeObserver(x6),Ps.observe(qi));function I6(t){return t.reduce((r,i)=>[...r,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:t.reduce((r,i)=>{if(r===!1)return!1;if(i.target instanceof Element){if(im(i.target),!r.has(i.target)){r.add(i.target);for(let o=0;o<i.target.children.length;o++){const s=i.target.children.item(o);if(!!s){if(Kg in s)return!1;im(i.target,s),r.add(s)}}}if(i.removedNodes.length)for(let o=0;o<i.removedNodes.length;o++){const s=i.removedNodes[o];if(Kg in s)return!1;s instanceof Element&&(r.add(s),im(i.target,s),Ws.set(s,[i.previousSibling,i.nextSibling]))}}return r},new Set)}function im(t,e){!e&&!(Lr in t)?Object.defineProperty(t,Lr,{value:t}):e&&!(Lr in e)&&Object.defineProperty(e,Lr,{value:t})}function z6(t){var e;const n=qi.contains(t),r=hn.has(t);n&&Ws.has(t)&&Ws.delete(t),Bo.has(t)&&((e=Bo.get(t))===null||e===void 0||e.cancel()),r&&n?P6(t):r&&!n?R6(t):O6(t)}function ar(t){return Number(t.replace(/[^0-9.\-]/g,""))}function wa(t){const e=t.getBoundingClientRect();return{top:e.top+window.scrollY,left:e.left+window.scrollX,width:e.width,height:e.height}}function TI(t,e,n){let r=e.width,i=e.height,o=n.width,s=n.height;const a=getComputedStyle(t);if(a.getPropertyValue("box-sizing")==="content-box"){const u=ar(a.paddingTop)+ar(a.paddingBottom)+ar(a.borderTopWidth)+ar(a.borderBottomWidth),f=ar(a.paddingLeft)+ar(a.paddingRight)+ar(a.borderRightWidth)+ar(a.borderLeftWidth);r-=f,o-=f,i-=u,s-=u}return[r,o,i,s].map(Math.round)}function Vh(t){return Lr in t&&va.has(t[Lr])?va.get(t[Lr]):{duration:250,easing:"ease-in-out"}}function II(t){if(Lr in t)return t[Lr]}function Hv(t){const e=II(t);return e?fl.has(e):!1}function zI(t,...e){e.forEach(n=>n(t,va.has(t)));for(let n=0;n<t.children.length;n++){const r=t.children.item(n);r&&e.forEach(i=>i(r,va.has(r)))}}function P6(t){const e=hn.get(t),n=wa(t);if(!Hv(t))return hn.set(t,n);let r;if(!e)return;const i=Vh(t);if(typeof i!="function"){const o=e.left-n.left,s=e.top-n.top,[a,l,u,f]=TI(t,e,n),h={transform:`translate(${o}px, ${s}px)`},p={transform:"translate(0, 0)"};a!==l&&(h.width=`${a}px`,p.width=`${l}px`),u!==f&&(h.height=`${u}px`,p.height=`${f}px`),r=t.animate([h,p],{duration:i.duration,easing:i.easing})}else r=new Animation(i(t,"remain",e,n)),r.play();Bo.set(t,r),hn.set(t,n),r.addEventListener("finish",Yo.bind(null,t))}function O6(t){const e=wa(t);hn.set(t,e);const n=Vh(t);if(!Hv(t))return;let r;typeof n!="function"?r=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(r=new Animation(n(t,"add",e)),r.play()),Bo.set(t,r),r.addEventListener("finish",Yo.bind(null,t))}function R6(t){var e;if(!Ws.has(t)||!hn.has(t))return;const[n,r]=Ws.get(t);Object.defineProperty(t,Kg,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(t,r):n&&n.parentNode?n.parentNode.appendChild(t):(e=II(t))===null||e===void 0||e.appendChild(t);function i(){var p;t.remove(),hn.delete(t),Ws.delete(t),Bo.delete(t),(p=qg.get(t))===null||p===void 0||p.disconnect()}if(!Hv(t))return i();const[o,s,a,l]=A6(t),u=Vh(t),f=hn.get(t);let h;Object.assign(t.style,{position:"absolute",top:`${o}px`,left:`${s}px`,width:`${a}px`,height:`${l}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof u!="function"?h=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"}):(h=new Animation(u(t,"remove",f)),h.play()),Bo.set(t,h),h.addEventListener("finish",i)}function A6(t){const e=hn.get(t),[n,,r]=TI(t,e,wa(t));let i=t.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);const o=getComputedStyle(i),s=hn.get(i)||wa(i),a=Math.round(e.top-s.top)-ar(o.borderTopWidth),l=Math.round(e.left-s.left)-ar(o.borderLeftWidth);return[a,l,n,r]}function N6(t,e={}){return Gg&&Ps&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof e!="function"&&!e.disrespectUserMotionPreference||(fl.add(t),getComputedStyle(t).position==="static"&&Object.assign(t.style,{position:"relative"}),zI(t,Yo,T6,i=>Ps==null?void 0:Ps.observe(i)),typeof e=="function"?va.set(t,e):va.set(t,{duration:250,easing:"ease-in-out",...e}),Gg.observe(t,{childList:!0}),_I.add(t))),Object.freeze({parent:t,enable:()=>{fl.add(t)},disable:()=>{fl.delete(t)},isEnabled:()=>fl.has(t)})}function J6(t){const e=I.exports.useRef(null),[n,r]=I.exports.useState(),i=o=>{n&&(o?n.enable():n.disable())};return I.exports.useEffect(()=>{e.current instanceof HTMLElement&&r(N6(e.current,t||{}))},[]),[e,i]}export{B6 as B,j6 as C,nx as F,Y6 as I,q6 as L,M6 as N,$6 as R,F6 as T,Ao as a,V6 as b,G6 as c,YM as d,W6 as e,D6 as f,Q6 as g,YO as h,wL as i,ee as j,K6 as k,iR as l,t1 as m,_i as n,KM as o,I_ as p,GM as q,I as r,H6 as s,U6 as t,J6 as u,L6 as v,dd as w,BS as x,X6 as y,G0 as z};
