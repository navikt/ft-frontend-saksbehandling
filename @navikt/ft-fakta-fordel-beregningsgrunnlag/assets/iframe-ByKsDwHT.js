const __vite__fileDeps=["./FordelBeregningsgrunnlagFaktaIndex.stories-BBH3pkpL.js","./jsx-runtime-_e34SzbC.js","./index-DVXBtNgz.js","./v4-D8aEg3BZ.js","./tslib.es6-CMwweBXX.js","./index-Cbx7Fas8.js","./FordelBeregningsgrunnlagFaktaIndex-DmWX-Xbq.css","./entry-preview-D5o9XUf4.js","./client-DWUO8fVt.js","./entry-preview-docs-CRwesYin.js","./_getPrototype-Ba2tldbE.js","./index-DrFu-skq.js","./preview-6uLYm2Ic.js","./index-DYADbu9O.js","./preview-DJ7cregD.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-wkbLUj9-.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const f="modulepreload",R=function(t,i){return new URL(t,i).href},d={},_=function(i,c,l){let e=Promise.resolve();if(c&&c.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),E=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(c.map(n=>{if(n=R(n,l),n in d)return;d[n]=!0;const a=n.endsWith(".css"),p=a?'[rel="stylesheet"]':"";if(!!l)for(let u=r.length-1;u>=0;u--){const O=r[u];if(O.href===n&&(!a||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${p}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":f,a||(s.as="script",s.crossOrigin=""),s.href=n,E&&s.setAttribute("nonce",E),document.head.appendChild(s),a)return new Promise((u,O)=>{s.addEventListener("load",u),s.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${n}`)))})}))}return e.then(()=>i()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:L}=__STORYBOOK_MODULE_PREVIEW_API__,m=T({page:"preview"});L.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const S={"./src/FordelBeregningsgrunnlagFaktaIndex.stories.tsx":async()=>_(()=>import("./FordelBeregningsgrunnlagFaktaIndex.stories-BBH3pkpL.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)};async function P(t){return S[t]()}const{composeConfigs:g,PreviewWeb:y,ClientApi:D}=__STORYBOOK_MODULE_PREVIEW_API__,I=async(t=[])=>{const i=await Promise.all([t.at(0)??_(()=>import("./entry-preview-D5o9XUf4.js"),__vite__mapDeps([7,2,8,5]),import.meta.url),t.at(1)??_(()=>import("./entry-preview-docs-CRwesYin.js"),__vite__mapDeps([9,10,2,11]),import.meta.url),t.at(2)??_(()=>import("./preview-6uLYm2Ic.js"),__vite__mapDeps([12,13]),import.meta.url),t.at(3)??_(()=>import("./preview-riGG5dBm.js"),[],import.meta.url),t.at(4)??_(()=>import("./preview-DJ7cregD.js"),__vite__mapDeps([14,3]),import.meta.url),t.at(5)??_(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([15,11]),import.meta.url),t.at(6)??_(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),t.at(7)??_(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),t.at(8)??_(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([16,11]),import.meta.url),t.at(9)??_(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),t.at(10)??_(()=>import("./preview-wkbLUj9-.js"),__vite__mapDeps([17,1,2]),import.meta.url)]);return g(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new y(P,I);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{_};
