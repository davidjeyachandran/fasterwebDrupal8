!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o;var r="undefined"==typeof document?void 0:document,i=!!r&&"content"in r.createElement("template"),l=!!r&&r.createRange&&"createContextualFragment"in r.createRange();function a(e){return e=e.trim(),i?function(e){var t=r.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(e):l?function(e){return o||(o=r.createRange()).selectNode(r.body),o.createContextualFragment(e).childNodes[0]}(e):function(e){var t=r.createElement("body");return t.innerHTML=e,t.childNodes[0]}(e)}function c(e,t){var n,o,r=e.nodeName,i=t.nodeName;return r===i||(n=r.charCodeAt(0),o=i.charCodeAt(0),n<=90&&o>=97?r===i.toUpperCase():o<=90&&n>=97&&i===r.toUpperCase())}function u(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var d={OPTION:function(e,t){var n=e.parentNode;if(n){var o=n.nodeName.toUpperCase();"OPTGROUP"===o&&(o=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==o||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}u(e,t,"selected")},INPUT:function(e,t){u(e,t,"checked"),u(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var o=e.firstChild;if(o){var r=o.nodeValue;if(r==n||!n&&r==e.placeholder)return;o.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,o,r=-1,i=0,l=e.firstChild;l;)if("OPTGROUP"===(o=l.nodeName&&l.nodeName.toUpperCase()))l=(n=l).firstChild;else{if("OPTION"===o){if(l.hasAttribute("selected")){r=i;break}i++}!(l=l.nextSibling)&&n&&(l=n.nextSibling,n=null)}e.selectedIndex=r}}};function s(){}function f(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}var p=function(e){return function(t,n,o){if(o||(o={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName||"BODY"===t.nodeName){var i=n;(n=r.createElement("html")).innerHTML=i}else n=a(n);var l=o.getNodeKey||f,u=o.onBeforeNodeAdded||s,p=o.onNodeAdded||s,h=o.onBeforeElUpdated||s,m=o.onElUpdated||s,g=o.onBeforeNodeDiscarded||s,b=o.onNodeDiscarded||s,v=o.onBeforeElChildrenUpdated||s,N=!0===o.childrenOnly,y=Object.create(null),w=[];function S(e){w.push(e)}function x(e,t,n){!1!==g(e)&&(t&&t.removeChild(e),b(e),function e(t,n){if(1===t.nodeType)for(var o=t.firstChild;o;){var r=void 0;n&&(r=l(o))?S(r):(b(o),o.firstChild&&e(o,n)),o=o.nextSibling}}(e,n))}function T(e){p(e);for(var t=e.firstChild;t;){var n=t.nextSibling,o=l(t);if(o){var r=y[o];r&&c(t,r)?(t.parentNode.replaceChild(r,t),A(r,t)):T(t)}else T(t);t=n}}function A(t,n,o){var i=l(n);if(i&&delete y[i],!o){if(!1===h(t,n))return;if(e(t,n),m(t),!1===v(t,n))return}"TEXTAREA"!==t.nodeName?function(e,t){var n,o,i,a,s,f=t.firstChild,p=e.firstChild;e:for(;f;){for(a=f.nextSibling,n=l(f);p;){if(i=p.nextSibling,f.isSameNode&&f.isSameNode(p)){f=a,p=i;continue e}o=l(p);var h=p.nodeType,m=void 0;if(h===f.nodeType&&(1===h?(n?n!==o&&((s=y[n])?i===s?m=!1:(e.insertBefore(s,p),o?S(o):x(p,e,!0),p=s):m=!1):o&&(m=!1),(m=!1!==m&&c(p,f))&&A(p,f)):3!==h&&8!=h||(m=!0,p.nodeValue!==f.nodeValue&&(p.nodeValue=f.nodeValue))),m){f=a,p=i;continue e}o?S(o):x(p,e,!0),p=i}if(n&&(s=y[n])&&c(s,f))e.appendChild(s),A(s,f);else{var g=u(f);!1!==g&&(g&&(f=g),f.actualize&&(f=f.actualize(e.ownerDocument||r)),e.appendChild(f),T(f))}f=a,p=i}!function(e,t,n){for(;t;){var o=t.nextSibling;(n=l(t))?S(n):x(t,e,!0),t=o}}(e,p,o);var b=d[e.nodeName];b&&b(e,t)}(t,n):d.TEXTAREA(t,n)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var n=t.firstChild;n;){var o=l(n);o&&(y[o]=n),e(n),n=n.nextSibling}}(t);var E,C,O=t,j=O.nodeType,L=n.nodeType;if(!N)if(1===j)1===L?c(t,n)||(b(t),O=function(e,t){for(var n=e.firstChild;n;){var o=n.nextSibling;t.appendChild(n),n=o}return t}(t,(E=n.nodeName,(C=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==C?r.createElementNS(C,E):r.createElement(E)))):O=n;else if(3===j||8===j){if(L===j)return O.nodeValue!==n.nodeValue&&(O.nodeValue=n.nodeValue),O;O=n}if(O===n)b(t);else{if(n.isSameNode&&n.isSameNode(O))return;if(A(O,n,N),w)for(var F=0,P=w.length;F<P;F++){var U=y[w[F]];U&&x(U,U.parentNode,!1)}}return!N&&O!==t&&t.parentNode&&(O.actualize&&(O=O.actualize(t.ownerDocument||r)),t.parentNode.replaceChild(O,t)),O}}((function(e,t){var n,o,r,i,l=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var a=l.length-1;a>=0;a--)o=(n=l[a]).name,r=n.namespaceURI,i=n.value,r?(o=n.localName||o,e.getAttributeNS(r,o)!==i&&("xmlns"===n.prefix&&(o=n.name),e.setAttributeNS(r,o,i))):e.getAttribute(o)!==i&&e.setAttribute(o,i);for(var c=e.attributes,u=c.length-1;u>=0;u--)o=(n=c[u]).name,(r=n.namespaceURI)?(o=n.localName||o,t.hasAttributeNS(r,o)||e.removeAttributeNS(r,o)):t.hasAttribute(o)||e.removeAttribute(o)}}));function h(e,t,n,o,r,i,l,a){let c={timeLoad:i,timeComplete:l,isCacheHit:a},u=function(){var e=null,t=null;"connection"in navigator&&(e=navigator.connection.effectiveType,"rtt"in navigator.connection&&(t=navigator.connection.rtt));return{connectionType:e,rtt:t}}(),d=void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile");fetch("https://peaceful-journey-43374.herokuapp.com/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({urlBase:n,urlCurrent:o,urlTarget:r,performance:c,connection:u,isMobile:d,sessionKey:e,country:t})}).then(e=>e.json()).catch(e=>console.log("postDataAnalytics: "+e))}function m(){let e=window.location.port?":"+window.location.port:"";return window.location.protocol+"//"+window.location.hostname+e}function g(e){if(!e)return null;let t=m(),n=e.indexOf(t)>=0?e.substring(t.length):e;return"/"===n.substring(0,1)?n:"/"+n}const b=(e,t)=>new RegExp("^"+t.split("*").join(".*")+"$").test(e),v=(e,t,n,o,r,i)=>{N(t,n).then(t=>{t&&(e=function(e,t){if(!e||!t)return[];return e.filter(e=>{if(!e)return!1;let n=!0;return t.forEach(t=>{b(e,t)&&(n=!1)}),n})}(e=t.urlTargetList,r))&&function(e,t,n=!0,o=!0){t.forEach(t=>{if(function(e){if(!e)return;let t=['a[href="'+e+'"]'],n=[];0===n.length&&e.startsWith("/")&&t.push('a[href="'+e.substring(1)+'"]'),n=document.querySelectorAll(t),n.forEach(e=>e.classList.add("faster-link"))}(t),!e[t])return o&&console.log("Prefetching: "+t),fetch(t).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then(e=>e.text()).then(n=>e[t]=n).catch(e=>console.log(e))})}(o,e,!0,i)})};const N=async function(e,t){let n=fetch("https://peaceful-journey-43374.herokuapp.com/getPrefetch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({urlBase:e,urlCurrent:t})}).then(e=>e.json()).catch(e=>console.log("getPrefetchUrlList: "+e));return await n};function y(e,t,n){"function"==typeof e&&e(t,n)}const w=(e,t=!0)=>{const n=function(){let e=localStorage.getItem("FasterWebSessionKey");if(e)return e;e=(new Date).getTime(),localStorage.setItem("FasterWebSessionKey",e)}(),o=function(){var e=localStorage.getItem("FasterWebSessionCountry");if(e)return e;fetch("https://ssl.geoplugin.net/json.gp?k=69954820a5c412dd").then((function(e){if(!e.ok)throw new Error("HTTP error, status = "+e.status);return e.json()})).then((function(t){e=t.geoplugin_countryName,localStorage.setItem("FasterWebSessionCountry",e)}))}(),r=(e=function(e){return e.debug=e.debug||!1,e.urlInclude=e.urlInclude||[],e.urlExclude=e.urlExclude||[],e.urlDoNotFetch=e.urlDoNotFetch||[],e.elementSelector=e.elementSelector||null,e}(e)).debug;if(r){const e="font-family: Roboto, serif; font-size: 25px; color: #ec7a16e0; font-weight: bold; font-style: italic",t="font-family: Roboto, serif;font-size: 16px; color: #777";console.log("%c FasterWeb.io",e),console.log("%c Making the web faster, friendlier - v0.599",t)}const i=[],l=[],a=m();let c,u,d,s,f=g(window.location.href);function N(n){n=window.e||n,r&&console.log(" "),c=performance.now();const o=null==(l=n.target)?null:"A"===l.tagName?l.href:"A"===l.parentNode.tagName?l.parentNode.href:"A"===l.parentNode.parentNode.tagName?l.parentNode.parentNode.href:"a"===l.tagName?l.href.baseVal:"a"===l.parentNode.tagName?l.parentNode.href.baseVal:"a"===l.parentNode.parentNode.tagName?l.parentNode.parentNode.href.baseVal:null;var l;f=g(window.location.href);const a=g(o);if(r&&console.log("1. Click: "+f+" -> "+a),((e,t,n,o,r)=>{if(!e)return!1;if(null===n||""===n||"#"===n||t+"#"===n)return!1;if(n.indexOf("http")>=0)return!1;if(t===n)return!1;if(void 0!==[".txt",".doc",".docx",".pdf",".ppt",".pptx",".pps",".ppsx",".mp3",".mp4",".avi",".jpeg",".jpg",".png",".svg",".xls",".xlsx",".zip",".csv",".wav",".wma","*.zip","*.epub","*.mobi"].find(e=>n.toLowerCase().endsWith(e)))return!1;if(o.length>0){let e=!1;if(o.forEach(t=>{b(n,t)&&(e=!0)}),!1===e)return console.log("URL "+n+" is NOT in the include List"),!1}if(r.length>0){let e=!0;if(r.forEach(t=>{b(n,t)&&(e=!1)}),!1===e)return!1}return!0})(t,f,a,e.urlInclude,e.urlExclude)){(null===e.elementSelector?document.body:document.querySelector(e.elementSelector)).classList.add("faster-hidden"),n.preventDefault(),u=performance.now(),i[a]?(r&&console.log("Found prefetch for: "+a),d=performance.now(),w(i[a],f,a,!0)):fetch(a).then((function(e){if(d=performance.now(),!e.ok)throw Error(e.statusText);return e})).then(e=>e.text()).then(e=>w(e,f,a,!1)).catch(e=>{console.log("Error fetch: "+e),window.history.pushState("","",a),location.reload()}),n.preventDefault()}}function w(t,f,m,g=!1){window.history.pushState("","",m);const b=(new DOMParser).parseFromString(t,"text/html");let N=document.body,w=b.body;document.title=b.title,null!==e.elementSelector&&(N=document.querySelector(e.elementSelector),w=b.querySelector(e.elementSelector)),e.url[m]&&e.url[m].cssfile&&function(e,t){if("js"==t)(n=document.createElement("script")).setAttribute("type","text/javascript"),n.setAttribute("src",e),n.setAttribute("id","temp_element");else if("css"==t){var n;(n=document.createElement("link")).setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),n.setAttribute("id","temp_element")}void 0!==n&&document.getElementsByTagName("head")[0].appendChild(n)}(e.url[m].cssfile,"css"),p(N,w),v(l,a,m,i,e.urlDoNotFetch,r),e.url[m]&&y(e.url[m].pageFunction,m,e.externalScriptObject),e.url.all&&y(e.url.all.pageFunction,m,e.externalScriptObject),document.body.scrollTop=0,document.documentElement.scrollTop=0,s=performance.now();let S=(d-u).toFixed(2),x=(s-c).toFixed(2);r&&console.log("Load page in "+S+" ms."),r&&console.log("Completed in "+x+" ms."),h(n,o,a,f,m,S,x,g)}((e,t)=>{let n=g(window.location.href);if(e.length>0){let o=!0;return e.forEach(e=>{b(n,e)&&(o=!1)}),!1!==o||(t&&console.log("URL "+n+" is in exclude List"),!1)}})(e.urlExclude,r)&&(v(l,a,f,i,e.urlDoNotFetch,r),document.addEventListener?document.addEventListener("click",N):document.attachEvent("onclick",N),window.addEventListener("popstate",e=>{const t=g(window.location.href);r&&console.log("Go back to: "+t),"#"!==t[t.length-1]?(r&&console.log("Faster: BACK button pressed: reload: "+t),location.reload()):r&&console.log("Faster: No reload with # in url")},!1))};t.default=w;window.faster=w}]);