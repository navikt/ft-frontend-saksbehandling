import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const f="modulepreload",p=function(r,_){return new URL(r,_).href},a={},o=function(_,s,c){if(!s||s.length===0)return _();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=p(e,c),e in a)return;a[e]=!0;const n=e.endsWith(".css"),d=n?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const O=t[l];if(O.href===e&&(!n||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":f,n||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),n)return new Promise((l,O)=>{i.addEventListener("load",l),i.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>_())},{createChannel:R}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:P}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:u}=__STORYBOOK_MODULE_PREVIEW_API__,E=R({page:"preview"});u.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;if(window.CONFIG_TYPE==="DEVELOPMENT"){const r=P({});u.setServerChannel(r),window.__STORYBOOK_SERVER_CHANNEL__=r}const T={"./src/BeregningsgrunnlagProsessIndex.stories.tsx":async()=>o(()=>import("./BeregningsgrunnlagProsessIndex.stories-4c6de69b.js"),["./BeregningsgrunnlagProsessIndex.stories-4c6de69b.js","./jsx-runtime-5926aa06.js","./index-ebeaab24.js","./chunk-OPEUWD42-a3b45fd8.js","./index-9c09ad76.js","./index-f50b85d6.js","./BeregningsgrunnlagProsessIndex.stories-a8187f64.css"],import.meta.url)};async function m(r){return T[r]()}m.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:S,PreviewWeb:w,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,h=async()=>{const r=await Promise.all([o(()=>import("./config-545aaf88.js"),["./config-545aaf88.js","./index-d475d2ea.js","./index-ebeaab24.js","./_getPrototype-18404d63.js","./index-9c09ad76.js","./index-f50b85d6.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-18a5ea3e.js"),[],import.meta.url),o(()=>import("./preview-2e3527f6.js"),["./preview-2e3527f6.js","./chunk-OPEUWD42-a3b45fd8.js"],import.meta.url),o(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-2cd4e1a1.js"),["./preview-2cd4e1a1.js","./index-d475d2ea.js"],import.meta.url),o(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),o(()=>import("./preview-aabc39de.js"),["./preview-aabc39de.js","./jsx-runtime-5926aa06.js","./index-ebeaab24.js","./preview-40884bf9.css"],import.meta.url)]);return S(r)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:m,getProjectAnnotations:h});export{o as _};
//# sourceMappingURL=iframe-9a58d8fa.js.map
