const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DokumenterSakIndex.stories-DbMOiiaH.js","./jsx-runtime-QvZ8i92b.js","./index-uubelm5h.js","./v4-CQkTLCs1.js","./index-C4_kIme7.js","./DokumenterSakIndex-BY6bRAMI.css","./entry-preview-C1yO2yFf.js","./chunk-H6MOWX77-DTQOW814.js","./entry-preview-docs-DV-Dfvcb.js","./index-DmeKSGxc.js","./index-DrFu-skq.js","./preview-BhhEZcNS.js","./index-D-8MO0q_.js","./preview-D0N1Y6iQ.js","./preview-D77C14du.js","./preview-BWzBA1C2.js","./preview-oHjmhWNN.js","./preview-Bl8J_wJG.css"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const R="modulepreload",T=function(t,n){return new URL(t,n).href},f={},_=function(n,l,a){let e=Promise.resolve();if(l&&l.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.allSettled(l.map(s=>{if(s=T(s,a),s in f)return;f[s]=!0;const u=s.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(!!a)for(let m=i.length-1;m>=0;m--){const O=i[m];if(O.href===s&&(!u||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${p}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":R,u||(c.as="script"),c.crossOrigin="",c.href=s,d&&c.setAttribute("nonce",d),document.head.appendChild(c),u)return new Promise((m,O)=>{c.addEventListener("load",m),c.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(i){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i}return e.then(i=>{for(const o of i||[])o.status==="rejected"&&r(o.reason);return n().catch(r)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,E=L({page:"preview"});S.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const P={"./src/DokumenterSakIndex.stories.tsx":async()=>_(()=>import("./DokumenterSakIndex.stories-DbMOiiaH.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)};async function y(t){return P[t]()}const{composeConfigs:I,PreviewWeb:w,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,D=async(t=[])=>{const n=await Promise.all([t.at(0)??_(()=>import("./entry-preview-C1yO2yFf.js"),__vite__mapDeps([6,7,2,4]),import.meta.url),t.at(1)??_(()=>import("./entry-preview-docs-DV-Dfvcb.js"),__vite__mapDeps([8,7,9,2,10]),import.meta.url),t.at(2)??_(()=>import("./preview-BhhEZcNS.js"),__vite__mapDeps([11,12]),import.meta.url),t.at(3)??_(()=>import("./preview-DWla-bMd.js"),[],import.meta.url),t.at(4)??_(()=>import("./preview-D0N1Y6iQ.js"),__vite__mapDeps([13,3]),import.meta.url),t.at(5)??_(()=>import("./preview-D77C14du.js"),__vite__mapDeps([14,10]),import.meta.url),t.at(6)??_(()=>import("./preview-DFmD0pui.js"),[],import.meta.url),t.at(7)??_(()=>import("./preview-CFgKly6U.js"),[],import.meta.url),t.at(8)??_(()=>import("./preview-BWzBA1C2.js"),__vite__mapDeps([15,10]),import.meta.url),t.at(9)??_(()=>import("./preview-DGUiP6tS.js"),[],import.meta.url),t.at(10)??_(()=>import("./preview-oHjmhWNN.js"),__vite__mapDeps([16,1,2,17]),import.meta.url)]);return I(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w(y,D);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{_};