!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o;var r="undefined"==typeof document?void 0:document,i=!!r&&"content"in r.createElement("template"),l=!!r&&r.createRange&&"createContextualFragment"in r.createRange();function a(e){return e=e.trim(),i?function(e){var t=r.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(e):l?function(e){return o||(o=r.createRange()).selectNode(r.body),o.createContextualFragment(e).childNodes[0]}(e):function(e){var t=r.createElement("body");return t.innerHTML=e,t.childNodes[0]}(e)}function c(e,t){var n,o,r=e.nodeName,i=t.nodeName;return r===i||(n=r.charCodeAt(0),o=i.charCodeAt(0),n<=90&&o>=97?r===i.toUpperCase():o<=90&&n>=97&&i===r.toUpperCase())}function u(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var d={OPTION:function(e,t){var n=e.parentNode;if(n){var o=n.nodeName.toUpperCase();"OPTGROUP"===o&&(o=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==o||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}u(e,t,"selected")},INPUT:function(e,t){u(e,t,"checked"),u(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var o=e.firstChild;if(o){var r=o.nodeValue;if(r==n||!n&&r==e.placeholder)return;o.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,o,r=-1,i=0,l=e.firstChild;l;)if("OPTGROUP"===(o=l.nodeName&&l.nodeName.toUpperCase()))l=(n=l).firstChild;else{if("OPTION"===o){if(l.hasAttribute("selected")){r=i;break}i++}!(l=l.nextSibling)&&n&&(l=n.nextSibling,n=null)}e.selectedIndex=r}}};function s(){}function f(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}var p=function(e){return function(t,n,o){if(o||(o={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName||"BODY"===t.nodeName){var i=n;(n=r.createElement("html")).innerHTML=i}else n=a(n);var l=o.getNodeKey||f,u=o.onBeforeNodeAdded||s,p=o.onNodeAdded||s,h=o.onBeforeElUpdated||s,m=o.onElUpdated||s,g=o.onBeforeNodeDiscarded||s,v=o.onNodeDiscarded||s,b=o.onBeforeElChildrenUpdated||s,N=!0===o.childrenOnly,y=Object.create(null),w=[];function x(e){w.push(e)}function E(e,t,n){!1!==g(e)&&(t&&t.removeChild(e),v(e),function e(t,n){if(1===t.nodeType)for(var o=t.firstChild;o;){var r=void 0;n&&(r=l(o))?x(r):(v(o),o.firstChild&&e(o,n)),o=o.nextSibling}}(e,n))}function S(e){p(e);for(var t=e.firstChild;t;){var n=t.nextSibling,o=l(t);if(o){var r=y[o];r&&c(t,r)?(t.parentNode.replaceChild(r,t),T(r,t)):S(t)}else S(t);t=n}}function T(t,n,o){var i=l(n);if(i&&delete y[i],!o){if(!1===h(t,n))return;if(e(t,n),m(t),!1===b(t,n))return}"TEXTAREA"!==t.nodeName?function(e,t){var n,o,i,a,s,f=t.firstChild,p=e.firstChild;e:for(;f;){for(a=f.nextSibling,n=l(f);p;){if(i=p.nextSibling,f.isSameNode&&f.isSameNode(p)){f=a,p=i;continue e}o=l(p);var h=p.nodeType,m=void 0;if(h===f.nodeType&&(1===h?(n?n!==o&&((s=y[n])?i===s?m=!1:(e.insertBefore(s,p),o?x(o):E(p,e,!0),p=s):m=!1):o&&(m=!1),(m=!1!==m&&c(p,f))&&T(p,f)):3!==h&&8!=h||(m=!0,p.nodeValue!==f.nodeValue&&(p.nodeValue=f.nodeValue))),m){f=a,p=i;continue e}o?x(o):E(p,e,!0),p=i}if(n&&(s=y[n])&&c(s,f))e.appendChild(s),T(s,f);else{var g=u(f);!1!==g&&(g&&(f=g),f.actualize&&(f=f.actualize(e.ownerDocument||r)),e.appendChild(f),S(f))}f=a,p=i}!function(e,t,n){for(;t;){var o=t.nextSibling;(n=l(t))?x(n):E(t,e,!0),t=o}}(e,p,o);var v=d[e.nodeName];v&&v(e,t)}(t,n):d.TEXTAREA(t,n)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var n=t.firstChild;n;){var o=l(n);o&&(y[o]=n),e(n),n=n.nextSibling}}(t);var A,C,O=t,j=O.nodeType,F=n.nodeType;if(!N)if(1===j)1===F?c(t,n)||(v(t),O=function(e,t){for(var n=e.firstChild;n;){var o=n.nextSibling;t.appendChild(n),n=o}return t}(t,(A=n.nodeName,(C=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==C?r.createElementNS(C,A):r.createElement(A)))):O=n;else if(3===j||8===j){if(F===j)return O.nodeValue!==n.nodeValue&&(O.nodeValue=n.nodeValue),O;O=n}if(O===n)v(t);else{if(n.isSameNode&&n.isSameNode(O))return;if(T(O,n,N),w)for(var L=0,P=w.length;L<P;L++){var I=y[w[L]];I&&E(I,I.parentNode,!1)}}return!N&&O!==t&&t.parentNode&&(O.actualize&&(O=O.actualize(t.ownerDocument||r)),t.parentNode.replaceChild(O,t)),O}}((function(e,t){var n,o,r,i,l=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var a=l.length-1;a>=0;a--)o=(n=l[a]).name,r=n.namespaceURI,i=n.value,r?(o=n.localName||o,e.getAttributeNS(r,o)!==i&&("xmlns"===n.prefix&&(o=n.name),e.setAttributeNS(r,o,i))):e.getAttribute(o)!==i&&e.setAttribute(o,i);for(var c=e.attributes,u=c.length-1;u>=0;u--)o=(n=c[u]).name,(r=n.namespaceURI)?(o=n.localName||o,t.hasAttributeNS(r,o)||e.removeAttributeNS(r,o)):t.hasAttribute(o)||e.removeAttribute(o)}}));function h(e,t,n,o,r,i,l,a){let c={timeLoad:i,timeComplete:l,isCacheHit:a},u=function(){var e=null,t=null;"connection"in navigator&&(e=navigator.connection.effectiveType,"rtt"in navigator.connection&&(t=navigator.connection.rtt));return{connectionType:e,rtt:t}}(),d=void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile");fetch("https://peaceful-journey-43374.herokuapp.com/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({urlBase:n,urlCurrent:o,urlTarget:r,performance:c,connection:u,isMobile:d,sessionKey:e,country:t})}).then(e=>e.json()).catch(e=>console.log("postDataAnalytics: "+e))}function m(){let e=window.location.port?":"+window.location.port:"";return window.location.protocol+"//"+window.location.hostname+e}function g(e){if(!e)return null;let t=m(),n=e.indexOf(t)>=0?e.substring(t.length):e;return"/"===n.substring(0,1)?n:"/"+n}const v=(e,t)=>new RegExp("^"+t.split("*").join(".*")+"$").test(e),b=(e,t,n,o,r)=>{N(t,n).then(t=>{t&&(e=function(e,t){if(!e||!t)return[];return e.filter(e=>{if(!e)return!1;let n=!0;return t.forEach(t=>{v(e,t)&&(n=!1)}),n})}(e=t.urlTargetList,r))&&function(e,t,n=!0){t.forEach(t=>{if(function(e){if(!e)return;let t=['a[href="'+e+'"]'],n=[];0===n.length&&e.startsWith("/")&&t.push('a[href="'+e.substring(1)+'"]'),n=document.querySelectorAll(t),n.forEach(e=>e.classList.add("faster-link"))}(t),!e[t])return console.log("Prefetching: "+t),fetch(t).then((function(e){if(!e.ok)throw Error(e.statusText);return e})).then(e=>e.text()).then(n=>e[t]=n).catch(e=>console.log(e))})}(o,e,!0)})};const N=async function(e,t){let n=fetch("https://peaceful-journey-43374.herokuapp.com/getPrefetch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({urlBase:e,urlCurrent:t})}).then(e=>e.json()).catch(e=>console.log("getPrefetchUrlList: "+e));return await n};function y(e,t,n){"function"==typeof e&&e(t,n)}const w=(e,t=!0)=>{window.isFasterRunning=!0;const n=function(){let e=localStorage.getItem("FasterWebSessionKey");if(e)return e;e=(new Date).getTime(),localStorage.setItem("FasterWebSessionKey",e)}(),o=function(){var e=localStorage.getItem("FasterWebSessionCountry");if(e)return e;fetch("https://ssl.geoplugin.net/json.gp?k=51410a5ca2ccee41").then((function(e){if(!e.ok)throw new Error("HTTP error, status = "+e.status);return e.json()})).then((function(t){e=t.geoplugin_countryName,localStorage.setItem("FasterWebSessionCountry",e)}))}();console.log("%c FasterWeb.io","font-family: Roboto, serif; font-size: 25px; color: #ec7a16e0; font-weight: bold; font-style: italic"),console.log("%c Making the web faster, friendlier - v0.594","font-family: Roboto, serif;font-size: 16px; color: #777"),e.urlInclude=e.urlInclude?e.urlInclude:[],e.urlExclude=e.urlExclude?e.urlExclude:[],e.urlDoNotFetch=e.urlDoNotFetch?e.urlDoNotFetch:[];let r=e.elementSelector;r=null==r||""===r?null:r;let i,l,a,c,u=[],d=[],s=m(),f=g(window.location.href);function N(n){n=window.e||n;console.log(" "),i=performance.now();let o=null==(c=n.target)?null:"A"===c.tagName?c.href:"A"===c.parentNode.tagName?c.parentNode.href:"A"===c.parentNode.parentNode.tagName?c.parentNode.parentNode.href:"a"===c.tagName?c.href.baseVal:"a"===c.parentNode.tagName?c.parentNode.href.baseVal:"a"===c.parentNode.parentNode.tagName?c.parentNode.parentNode.href.baseVal:null;var c;let d=g(window.location.href);var s=g(o);if(console.log("1. Click: "+d+" -> "+s),((e,t,n,o,r)=>{if(!e)return!1;if(null===n||""===n||"#"===n||t+"#"===n)return!1;if(n.indexOf("http")>=0)return!1;if(t===n)return!1;if([".txt",".doc",".docx",".pdf",".ppt",".pptx",".mp3",".mp4",".avi",".jpeg",".jpg",".png",".svg",".xls",".xlsx",".zip"].forEach(e=>{if(n.endsWith(e))return!1}),o.length>0){let e=!1;if(o.forEach(t=>{v(n,t)&&(e=!0)}),!1===e)return console.log("URL "+n+" is NOT in the include List"),!1}if(r.length>0){let e=!0;if(r.forEach(t=>{v(n,t)&&(e=!1)}),!1===e)return console.log("URL "+n+" is in exclude List"),!1}return!0})(t,d,s,e.urlInclude,e.urlExclude)){(null===r?document.body:document.querySelector(r)).classList.add("faster-hidden"),l=performance.now(),u[s]?(console.log("Found prefetch for: "+s),a=performance.now(),w(u[s],d,s,!0)):fetch(s).then((function(e){if(a=performance.now(),!e.ok)throw Error(e.statusText);return e})).then(e=>e.text()).then(e=>w(e,d,s,!1)).catch(e=>{console.log("Error fetch: "+e),window.history.pushState("","",s),location.reload()}),n.preventDefault()}}function w(t,f,m,g=!1){window.history.pushState("","",m);var v=(new DOMParser).parseFromString(t,"text/html");if(null===r)var N=document.body,w=v.body;else N=document.querySelector(r),w=v.querySelector(r);let x=document.getElementById("temp_element");x&&x.remove(),e.url[m]&&e.url[m].cssfile&&function(e,t){if("js"==t)(n=document.createElement("script")).setAttribute("type","text/javascript"),n.setAttribute("src",e),n.setAttribute("id","temp_element");else if("css"==t){var n;(n=document.createElement("link")).setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",e),n.setAttribute("id","temp_element")}void 0!==n&&document.getElementsByTagName("head")[0].appendChild(n)}(e.url[m].cssfile,"css"),console.log(document.querySelector("body")),console.log(document.getElementsByTagName("body")[0]),console.log(N),p(N,w),b(d,s,m,u,e.urlDoNotFetch),e.url[m]&&y(e.url[m].pageFunction,m,e.externalScriptObject),e.url.all&&y(e.url.all.pageFunction,m,e.externalScriptObject),document.title=v.title,document.body.scrollTop=0,document.documentElement.scrollTop=0,c=performance.now();let E=(a-l).toFixed(2),S=(c-i).toFixed(2);console.log("Load page in "+E+" ms."),console.log("Completed in "+S+" ms."),h(n,o,s,f,m,E,S,g)}(e=>{let t=g(window.location.href);if(e.length>0){let n=!0;return e.forEach(e=>{v(t,e)&&(n=!1)}),!1!==n||(console.log("URL "+t+" is in exclude List"),!1)}})(e.urlExclude)&&(console.log("Add Click Event"),b(d,s,f,u,e.urlDoNotFetch),document.addEventListener?document.addEventListener("click",N):document.attachEvent("onclick",N),window.addEventListener("popstate",e=>{let t=g(window.location.href);console.log("Go back to: "+t),"#"!==t[t.length-1]?(console.log("Faster: BACK button pressed: reload: "+t),location.reload()):console.log("Faster: No reload with # in url")},!1))};t.default=w;window.faster=w}]);