import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const p="modulepreload",f=function(o,_){return new URL(o,_).href},O={},r=function(_,s,c){if(!s||s.length===0)return _();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=f(e,c),e in O)return;O[e]=!0;const n=e.endsWith(".css"),m=n?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!n||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":p,n||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),n)return new Promise((l,a)=>{i.addEventListener("load",l),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>_())},{createChannel:R}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:u}=__STORYBOOK_MODULE_PREVIEW_API__,E=R({page:"preview"});u.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;if(window.CONFIG_TYPE==="DEVELOPMENT"){const o=T({});u.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const P={"./src/endreEnhet/MenyEndreBehandlendeEnhetIndex.stories.tsx":async()=>r(()=>import("./MenyEndreBehandlendeEnhetIndex.stories-311043a4.js"),["./MenyEndreBehandlendeEnhetIndex.stories-311043a4.js","./jsx-runtime-5926aa06.js","./index-ebeaab24.js","./chunk-OPEUWD42-a3b45fd8.js","./nb_NO-71c8b51e.js","./index-9c09ad76.js","./index-f50b85d6.js","./MenyEndreBehandlendeEnhetIndex.stories-ea5ee434.css","./index-3071a07c.css"],import.meta.url),"./src/taAvVent/MenyTaAvVentIndex.stories.tsx":async()=>r(()=>import("./MenyTaAvVentIndex.stories-3ba329c2.js"),["./MenyTaAvVentIndex.stories-3ba329c2.js","./jsx-runtime-5926aa06.js","./index-ebeaab24.js","./chunk-OPEUWD42-a3b45fd8.js","./nb_NO-71c8b51e.js","./index-9c09ad76.js","./index-f50b85d6.js"],import.meta.url),"./src/verge/MenyVergeIndex.stories.tsx":async()=>r(()=>import("./MenyVergeIndex.stories-28d268d5.js"),["./MenyVergeIndex.stories-28d268d5.js","./jsx-runtime-5926aa06.js","./index-ebeaab24.js","./chunk-OPEUWD42-a3b45fd8.js","./nb_NO-71c8b51e.js","./index-9c09ad76.js","./index-f50b85d6.js"],import.meta.url)};async function d(o){return P[o]()}d.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:S,PreviewWeb:w,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,L=async()=>{const o=await Promise.all([r(()=>import("./config-545aaf88.js"),["./config-545aaf88.js","./index-d475d2ea.js","./index-ebeaab24.js","./_getPrototype-18404d63.js","./index-9c09ad76.js","./index-f50b85d6.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-0ecc5631.js"),[],import.meta.url),r(()=>import("./preview-2e3527f6.js"),["./preview-2e3527f6.js","./chunk-OPEUWD42-a3b45fd8.js"],import.meta.url),r(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-2cd4e1a1.js"),["./preview-2cd4e1a1.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-d99436c5.js"),["./preview-d99436c5.js","./jsx-runtime-5926aa06.js","./index-ebeaab24.js","./preview-40884bf9.css","./index-3071a07c.css"],import.meta.url)]);return S(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:d,getProjectAnnotations:L});export{r as _};
//# sourceMappingURL=iframe-a9d4d7d4.js.map
