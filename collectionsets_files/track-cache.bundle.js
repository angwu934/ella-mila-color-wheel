(()=>{var e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(867),o=r(26),i=r(372),s=r(327),a=r(97),c=r(109),u=r(985),l=r(61),p=r(874),d=r(263);e.exports=function(e){return new Promise((function(t,r){var f,h=e.data,m=e.headers,y=e.responseType;function g(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}n.isFormData(h)&&delete m["Content-Type"];var w=new XMLHttpRequest;if(e.auth){var v=e.auth.username||"",_=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(v+":"+_)}var x=a(e.baseURL,e.url);function k(){if(w){var n="getAllResponseHeaders"in w?c(w.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:n,config:e,request:w};o((function(e){t(e),g()}),(function(e){r(e),g()}),i),w=null}}if(w.open(e.method.toUpperCase(),s(x,e.params,e.paramsSerializer),!0),w.timeout=e.timeout,"onloadend"in w?w.onloadend=k:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(k)},w.onabort=function(){w&&(r(l("Request aborted",e,"ECONNABORTED",w)),w=null)},w.onerror=function(){r(l("Network Error",e,null,w)),w=null},w.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||p;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",w)),w=null},n.isStandardBrowserEnv()){var b=(e.withCredentials||u(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;b&&(m[e.xsrfHeaderName]=b)}"setRequestHeader"in w&&n.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:w.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(w.withCredentials=!!e.withCredentials),y&&"json"!==y&&(w.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&w.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){w&&(r(!e||e&&e.type?new d("canceled"):e),w.abort(),w=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),h||(h=null),w.send(h)}))}},609:(e,t,r)=>{"use strict";var n=r(867),o=r(849),i=r(321),s=r(185);var a=function e(t){var r=new i(t),a=o(i.prototype.request,r);return n.extend(a,i.prototype,r),n.extend(a,r),a.create=function(r){return e(s(t,r))},a}(r(546));a.Axios=i,a.Cancel=r(263),a.CancelToken=r(972),a.isCancel=r(502),a.VERSION=r(288).version,a.all=function(e){return Promise.all(e)},a.spread=r(713),a.isAxiosError=r(268),e.exports=a,e.exports.default=a},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(867),o=r(327),i=r(782),s=r(572),a=r(185),c=r(875),u=c.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,l=[];if(this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)})),!o){var p=[s,void 0];for(Array.prototype.unshift.apply(p,n),p=p.concat(l),i=Promise.resolve(t);p.length;)i=i.then(p.shift(),p.shift());return i}for(var d=t;n.length;){var f=n.shift(),h=n.shift();try{d=f(d)}catch(e){h(e);break}}try{i=s(d)}catch(e){return Promise.reject(e)}for(;l.length;)i=i.then(l.shift(),l.shift());return i},l.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=l},782:(e,t,r)=>{"use strict";var n=r(867);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,r)=>{"use strict";var n=r(793),o=r(303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},572:(e,t,r)=>{"use strict";var n=r(867),o=r(527),i=r(502),s=r(546),a=r(263);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={};function o(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function i(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return o(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(void 0,t[r])}function c(r){return r in t?o(e[r],t[r]):r in e?o(void 0,e[r]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||i,o=t(e);n.isUndefined(o)&&t!==c||(r[e]=o)})),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(867),o=r(546);e.exports=function(e,t,r){var i=this||o;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},546:(e,t,r)=>{"use strict";var n=r(867),o=r(16),i=r(481),s=r(874),a={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,l={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=r(448)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){l.headers[e]=n.merge(a)})),e.exports=l},874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:e=>{e.exports={version:"0.26.1"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,r)=>{"use strict";var n=r(288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,s){if(!1===e)throw new Error(o(n," has been removed"+(t?" in "+t:"")));return t&&!i[n]&&(i[n]=!0,console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,s)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],s=t[i];if(s){var a=e[i],c=void 0===a||s(a,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:o}},867:(e,t,r)=>{"use strict";var n=r(849),o=Object.prototype.toString;function i(e){return Array.isArray(e)}function s(e){return void 0===e}function a(e){return"[object ArrayBuffer]"===o.call(e)}function c(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function p(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:a,isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&a(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return c(e)&&l(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:p,merge:function e(){var t={};function r(r,n){u(t[n])&&u(r)?t[n]=e(t[n],r):u(r)?t[n]=e({},r):i(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)p(arguments[n],r);return t},extend:function(e,t,r){return p(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=(e,t,r)=>{let n;return function(){const o=this,i=arguments;clearTimeout(n),n=setTimeout((function(){n=null,r||e.apply(o,i)}),t),r&&!n&&e.apply(o,i)}},t=(e,t,r)=>{const n=r=>String.prototype.split.call(t,r).filter(Boolean).reduce(((e,t)=>null!=e?e[t]:e),e),o=n(/[,[\]]+?/)||n(/[,[\].]+?/);return void 0===o||o===e?r:o},n=e=>!(!e||"string"!=typeof e)&&(-1!==e.indexOf("cart/add.js")||-1!==e.indexOf("cart/change.js")),o=()=>"/cart"===t(window,"location.pathname",""),i={deserialize(e){const t={};return e.replace(/([^=]*)=([^&]*)&*/g,((e,r,n)=>{t[r]=encodeURIComponent(n)})),t}};function s(e){const t=("https:"==document.location.protocol?"https://":"http://")+"pixel.sitescout.com/iap/"+e;(new Image).src=t,function(e){var t=("https:"==document.location.protocol?"https://":"http://")+"pixel.sitescout.com/dmp/asyncPixelSync",r=e.createElement("iframe");(r.frameElement||r).style.cssText="width: 0; height: 0; border: 0; display:none;",r.src="javascript:false",e.body.appendChild(r);var n=r.contentWindow.document;n.open().write("<body onload=\"window.location.href='"+t+"'\">"),n.close()}(document)}const{SCRIPT_TAG_GTM_ID:a}={NODE_ENV:"production",TRACK_URL:"https://track.klickly.com",TRACK_API_URL:"https://track-api.klickly.com",EXTERNAL_CHECKOUT_API:"https://external-checkout-api.klickly.com",PIXEL_SCRIPT_URL:"https://analytics.klickly.com/pixel.js?v=1.3.0",SCRIPT_TAG_DOMAIN_FILTER_LIST:"310-nutrition.myshopify.com",LIVERAMP_PIXEL_ID:"711880",SCRIPT_TAG_GTM_ID:"GTM-NMDRPTH"};if(a){const e=document.createElement("script");e.type="text/javascript",e.async=!0,e.text=`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','${a}');`,document.head.appendChild(e),window.dataLayer=window.dataLayer||[]}var c=r(669),u=r.n(c);const{TRACK_API_URL:l,EXTERNAL_CHECKOUT_API:p}={NODE_ENV:"production",TRACK_URL:"https://track.klickly.com",TRACK_API_URL:"https://track-api.klickly.com",EXTERNAL_CHECKOUT_API:"https://external-checkout-api.klickly.com",PIXEL_SCRIPT_URL:"https://analytics.klickly.com/pixel.js?v=1.3.0",SCRIPT_TAG_DOMAIN_FILTER_LIST:"310-nutrition.myshopify.com",LIVERAMP_PIXEL_ID:"711880",SCRIPT_TAG_GTM_ID:"GTM-NMDRPTH"},d=u().create({withCredentials:!0,baseURL:l}),f=u().create({withCredentials:!0,baseURL:p}),h=u().create({withCredentials:!0});class m{static get(e){let t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}static set(e,t,r={}){if((r={path:"/",secure:!0,sameSite:"none",...r}).expires)r.expires instanceof Date&&(r.expires=r.expires.toUTCString());else{const e=new Date;e.setDate(e.getDate()+365),r.expires=e.toUTCString()}let n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(let e in r){n+="; "+e;let t=r[e];!0!==t&&(n+="="+t)}document.cookie=n}static remove(e){m.set(e,"",{expires:new Date(0)})}}class y{static get(e){try{return localStorage.getItem(e)}catch(e){return}}static set(e,t){try{return localStorage.setItem(e,t),y.get(e)===t}catch(e){return!1}}static remove(e){try{localStorage.removeItem(e)}catch(e){return!1}}}class g{static get(e){try{return sessionStorage.getItem(e)}catch(e){return}}static set(e,t){try{return sessionStorage.setItem(e,t),g.get(e)===t}catch(e){return!1}}static remove(e){try{sessionStorage.removeItem(e)}catch(e){return!1}}}const w=[m,y,g];class v{static get(e){let t;for(let r=0;r<w.length&&(t=w[r].get(e),!t);r++);return t}static set(e,t){for(let r=0;r<w.length;r++)w[r].set(e,t)}static remove(e){for(let t=0;t<w.length;t++)w[t].remove(e)}}const _=document.currentScript?document.currentScript.src:"",x=_&&"string"==typeof _?i.deserialize(_.slice(_.indexOf("?")+1)):{},{SCRIPT_TAG_DOMAIN_FILTER_LIST:k}={NODE_ENV:"production",TRACK_URL:"https://track.klickly.com",TRACK_API_URL:"https://track-api.klickly.com",EXTERNAL_CHECKOUT_API:"https://external-checkout-api.klickly.com",PIXEL_SCRIPT_URL:"https://analytics.klickly.com/pixel.js?v=1.3.0",SCRIPT_TAG_DOMAIN_FILTER_LIST:"310-nutrition.myshopify.com",LIVERAMP_PIXEL_ID:"711880",SCRIPT_TAG_GTM_ID:"GTM-NMDRPTH"},b=k?k.split(","):[],E=(()=>{let e=t(window,"Shopify.shop")||t(window,"CHDataObject.store_urls.store_url")||t(window,"Klickly_BoldCommerce.shop");if(!e&&document.currentScript.src){e=new URL(document.currentScript.src).searchParams.get("shop")}return e})(),T=b.includes(E),R={shopDomain:E,externalId:t(window,"meta.product.id"),checkout:(()=>{let e;return window.chData&&window.chData.order?(e={order_id:Number(window.chData.order.order_id)||null},e.referrer=document.location.host||""):window.Klickly_BoldCommerce&&window.Klickly_BoldCommerce.order_name?e={order_name:window.Klickly_BoldCommerce.order_name}:window.Klickly_Zipify&&window.Klickly_Zipify.order_id?e={order_id:Number(window.Klickly_Zipify.order_id)}:window.Klickly_Recharge&&window.Klickly_Recharge.order_id?e={order_id:Number(window.Klickly_Recharge.order_id)}:window.Shopify&&window.Shopify.checkout&&(e=t(window,"Shopify.checkout",{}),e.referrer=t(document,"location.host",""),e.customer=t(window,"Shopify.Checkout.customer"),e.geolocatedAddress=t(window,"Shopify.Checkout.geolocatedAddress",""),"string"==typeof e.order_id&&(e.order_id=Number(e.order_id))),e})(),userGaId:(()=>{const e=("; "+document.cookie).split("; _ga=");if(2===e.length){const t=e.pop().split(";").shift();return t.slice(6,t.length)}})()},C="externalClicks",S="externalViews",A="externalCartAdds";function I(e,t=!0){return Promise.resolve().then((()=>{if(e.checkout){const t=[],r=v.get("_klpixel_cid"),n=v.get("_klpixel_hash"),o=v.get("_klpixel_token");return r&&t.push("cid="+r),n&&t.push("hash="+n),o&&t.push("token="+o),f.post("/receiver?"+t.join("&"),e)}if(!T)return d.post("/events/shop",e)})).finally((()=>{if(E&&!T&&t){let e="visit";o()&&(e="cart"),R.checkout&&(e="checkout"),function(e,t){const r=(x[`b_type_${t}`]||"").split(",").filter((e=>!!e));if(!r.length)return d.post("/ads/tags",{shopDomain:e,audienceAction:t}).then((({data:e=[]})=>{e.forEach((e=>{s(e)}))}));r.forEach((e=>{s(e)}))}(E,e),(e=>{!!a&&window.dataLayer.push(e)})({event:"klicklyDataPush",klickly_event_name:e,klickly_cid:v.get("_klpixel_cid"),klickly_shop:E.replace(".myshopify.com",""),klickly_product:R.externalId||null})}}))}function L(e=!1,t=!1){if(!T)return h.get("/cart.js").then((({data:r})=>{if(window.klpixel&&e&&window.klpixel("event","cartChanged",{cart:r}),r&&r.items&&r.items.length){I({...R,eventName:A,cart:r},t)}}))}if(E){!function(e){((e,t,r,n)=>{if(e[n])return;const o=e[n]=function(){o.track&&o.ready?o.track.apply(o,arguments):o.queue.push(arguments)};o.queue=[];const i=t.createElement("script");i.id="klpixel-script",i.async=!0,i.src=r;const s=t.getElementsByTagName("script")[0];s.parentNode.insertBefore(i,s)})(window,document,"https://analytics.klickly.com/pixel.js?v=1.3.0","klpixel"),window.klpixel("init","shopify.shop"),window.klpixel("config","listeners",{change:!1,click:Boolean(e.externalId),scroll:!1,popstate:!1,mouseover:!1,visibilitychange:!1}),window.klpixel("meta","shop",e),e.checkout?window.klpixel("event","purchase"):window.klpixel("event","pageView")}({...R,eventName:void 0}),o()?L(!1,!0):(R.eventName=S,I(R)),R.checkout||!R.externalId||T||document.body&&document.body.addEventListener&&document.body.addEventListener("click",e((function(){I({...R,eventName:C},!1)}),2e3));const t=XMLHttpRequest.prototype.open,r=window.fetch;window.fetch=function(){return r.apply(this,arguments).then((e=>(e.ok&&n(arguments[0])&&L(!0),e)))},XMLHttpRequest.prototype.open=function(){this.addEventListener("load",(function(){200===this.status&&n(this.responseURL)&&L(!0)})),t.apply(this,arguments)}}T||s("357c6e9d4d9b263b")})()})();