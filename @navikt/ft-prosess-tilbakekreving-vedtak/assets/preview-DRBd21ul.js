const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DocsRenderer-CFRXHY34-w17BvT_Q.js","./iframe-B1h7AgMm.js","./index-uubelm5h.js","./jsx-runtime-QvZ8i92b.js","./index-CfOt2XX2.js","./index-D-8MO0q_.js","./index-DmeKSGxc.js","./index-DrFu-skq.js","./client-krOXZPYQ.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./iframe-B1h7AgMm.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-CFRXHY34-w17BvT_Q.js").then(r=>r.ak),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
