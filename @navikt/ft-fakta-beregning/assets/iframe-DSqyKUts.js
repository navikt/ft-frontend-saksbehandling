const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BeregningFaktaIndex.stories-CW4Ynjpc.js","./jsx-runtime-QvZ8i92b.js","./index-uubelm5h.js","./index-C4_kIme7.js","./v4-CQkTLCs1.js","./BeregningFaktaIndex-66Di6jJM.css","./entry-preview-DvU8-Hm-.js","./chunk-H6MOWX77-DTQOW814.js","./entry-preview-docs-DV-Dfvcb.js","./index-DmeKSGxc.js","./index-DrFu-skq.js","./preview-BhhEZcNS.js","./index-D-8MO0q_.js","./preview-D0N1Y6iQ.js","./preview-D77C14du.js","./preview-BWzBA1C2.js","./preview-ogkHsH9P.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const R="modulepreload",T=function(t,n){return new URL(t,n).href},f={},_=function(n,a,l){let e=Promise.resolve();if(a&&a.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.allSettled(a.map(s=>{if(s=T(s,l),s in f)return;f[s]=!0;const u=s.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!l)for(let O=i.length-1;O>=0;O--){const m=i[O];if(m.href===s&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":R,u||(c.as="script"),c.crossOrigin="",c.href=s,d&&c.setAttribute("nonce",d),document.head.appendChild(c),u)return new Promise((O,m)=>{c.addEventListener("load",O),c.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return e.then(i=>{for(const o of i||[])o.status==="rejected"&&r(o.reason);return n().catch(r)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,E=L({page:"preview"});S.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const P={"./src/BeregningFaktaIndex.stories.tsx":async()=>_(()=>import("./BeregningFaktaIndex.stories-CW4Ynjpc.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)};async function y(t){return P[t]()}const{composeConfigs:I,PreviewWeb:g,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,w=async(t=[])=>{const n=await Promise.all([t.at(0)??_(()=>import("./entry-preview-DvU8-Hm-.js"),__vite__mapDeps([6,7,2,3]),import.meta.url),t.at(1)??_(()=>import("./entry-preview-docs-DV-Dfvcb.js"),__vite__mapDeps([8,7,9,2,10]),import.meta.url),t.at(2)??_(()=>import("./preview-BhhEZcNS.js"),__vite__mapDeps([11,12]),import.meta.url),t.at(3)??_(()=>import("./preview-EL98uPU3.js"),[],import.meta.url),t.at(4)??_(()=>import("./preview-D0N1Y6iQ.js"),__vite__mapDeps([13,4]),import.meta.url),t.at(5)??_(()=>import("./preview-D77C14du.js"),__vite__mapDeps([14,10]),import.meta.url),t.at(6)??_(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),t.at(7)??_(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),t.at(8)??_(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([15,10]),import.meta.url),t.at(9)??_(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),t.at(10)??_(()=>import("./preview-ogkHsH9P.js"),__vite__mapDeps([16,1,2]),import.meta.url)]);return I(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new g(y,w);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{_};