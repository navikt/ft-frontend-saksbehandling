const __vite__fileDeps=["./AssessedBy.stories-BoLckrVq.js","./jsx-runtime-_e34SzbC.js","./index-DVXBtNgz.js","./index.es-DyUVmyLI.js","./tslib.es6-pJfR_DrR.js","./useId-Bn1dgn6J.js","./AssessedBy-lyrBFjxM.css","./Autocomplete.stories-bzM9GIxG.js","./Label--N9K7HfV.js","./Button-DodJf6BP.js","./Autocomplete-C0-BPx16.css","./BasicList.stories-D-CstWmt.js","./BasicList-Ch8NI6s0.css","./Box.stories-CFpw2EaM.js","./Box--t6ncgY4.js","./index--IHLcpuH.js","./Box-DQk3iu93.css","./ContentWithTooltip.stories-D-i4i5uv.js","./ContentWithTooltip-Bbtf7f8z.css","./DetailView.stories-CJB2S_wG.js","./DetailView-CyO7NEEc.js","./DetailView-CbybXs4q.css","./Header.stories-C4GDvq-K.js","./Header-CkSXwwuq.css","./InfoPanel.stories-BmfWB2uq.js","./InfoPanel-VALBfkZV.css","./LabelledContent.stories-xBMhGusu.js","./LabelledContent-DeD10gbt.css","./LinkButton.stories-DZ81mcUw.js","./LinkButton-CQbPZTUq.css","./NavigationWithDetailView.stories-D7gLVk0N.js","./NavigationWithDetailView-C38fNn_6.css","./PeriodList.stories-D4bfDghd.js","./PeriodList-CoCR0wc6.css","./PersonCard.stories-C2vLD3XZ.js","./index-Cbx7Fas8.js","./PersonCard-C_lB4s_x.css","./ProcessMenu.stories-zM2eCLsQ.js","./ProcessMenu--82YId9a.css","./SideMenu.stories-B55uiSRu.js","./SideMenu-5QjWOJF5.css","./SystemButton.stories-DGfx_H6p.js","./SystemButton-CTTPupiB.css","./TitleWithUnderline.stories-CX-r_g2K.js","./TitleWithUnderline-DmKbz_0V.css","./UserPanel.stories-BaagTiDA.js","./UserPanel-D6aofXLz.css","./entry-preview-D5o9XUf4.js","./client-DWUO8fVt.js","./entry-preview-docs-CRwesYin.js","./_getPrototype-Ba2tldbE.js","./index-DrFu-skq.js","./preview-6uLYm2Ic.js","./index-DYADbu9O.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-DgB_7K7_.js","./preview-Dp5KGMGn.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const R="modulepreload",f=function(r,s){return new URL(r,s).href},d={},t=function(s,c,a){let e=Promise.resolve();if(c&&c.length>0){const o=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),E=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=Promise.all(c.map(_=>{if(_=f(_,a),_ in d)return;d[_]=!0;const l=_.endsWith(".css"),O=l?'[rel="stylesheet"]':"";if(!!a)for(let m=o.length-1;m>=0;m--){const u=o[m];if(u.href===_&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${O}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":R,l||(n.as="script",n.crossOrigin=""),n.href=_,E&&n.setAttribute("nonce",E),document.head.appendChild(n),l)return new Promise((m,u)=>{n.addEventListener("load",m),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${_}`)))})}))}return e.then(()=>s()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:T}=__STORYBOOK_MODULE_PREVIEW_API__,p=L({page:"preview"});T.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const P={"./src/assessed-by/AssessedBy.stories.tsx":async()=>t(()=>import("./AssessedBy.stories-BoLckrVq.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"./src/autocomplete/Autocomplete.stories.tsx":async()=>t(()=>import("./Autocomplete.stories-bzM9GIxG.js"),__vite__mapDeps([7,1,2,8,9,5,10]),import.meta.url),"./src/basic-list/BasicList.stories.tsx":async()=>t(()=>import("./BasicList.stories-D-CstWmt.js"),__vite__mapDeps([11,1,2,12]),import.meta.url),"./src/box/Box.stories.tsx":async()=>t(()=>import("./Box.stories-CFpw2EaM.js"),__vite__mapDeps([13,1,2,14,15,16]),import.meta.url),"./src/content-with-tooltip/ContentWithTooltip.stories.tsx":async()=>t(()=>import("./ContentWithTooltip.stories-D-i4i5uv.js"),__vite__mapDeps([17,1,2,15,18]),import.meta.url),"./src/detail-view/DetailView.stories.tsx":async()=>t(()=>import("./DetailView.stories-CJB2S_wG.js"),__vite__mapDeps([19,1,2,20,15,8,21]),import.meta.url),"./src/header/Header.stories.tsx":async()=>t(()=>import("./Header.stories-C4GDvq-K.js"),__vite__mapDeps([22,1,2,3,4,23]),import.meta.url),"./src/info-panel/InfoPanel.stories.tsx":async()=>t(()=>import("./InfoPanel.stories-BmfWB2uq.js"),__vite__mapDeps([24,1,2,15,25]),import.meta.url),"./src/labelled-content/LabelledContent.stories.tsx":async()=>t(()=>import("./LabelledContent.stories-xBMhGusu.js"),__vite__mapDeps([26,1,2,15,8,27]),import.meta.url),"./src/link-button/LinkButton.stories.tsx":async()=>t(()=>import("./LinkButton.stories-DZ81mcUw.js"),__vite__mapDeps([28,1,2,29]),import.meta.url),"./src/navigation-with-detail-view/NavigationWithDetailView.stories.tsx":async()=>t(()=>import("./NavigationWithDetailView.stories-D7gLVk0N.js"),__vite__mapDeps([30,1,2,20,15,8,21,31]),import.meta.url),"./src/period-list/PeriodList.stories.tsx":async()=>t(()=>import("./PeriodList.stories-D4bfDghd.js"),__vite__mapDeps([32,1,2,3,4,8,33]),import.meta.url),"./src/person-card/PersonCard.stories.tsx":async()=>t(()=>import("./PersonCard.stories-C2vLD3XZ.js"),__vite__mapDeps([34,1,2,14,15,16,3,4,8,35,36]),import.meta.url),"./src/process-menu/ProcessMenu.stories.tsx":async()=>t(()=>import("./ProcessMenu.stories-zM2eCLsQ.js"),__vite__mapDeps([37,1,2,3,4,15,8,38]),import.meta.url),"./src/side-menu/SideMenu.stories.tsx":async()=>t(()=>import("./SideMenu.stories-B55uiSRu.js"),__vite__mapDeps([39,1,2,5,3,4,15,8,40]),import.meta.url),"./src/system-button/SystemButton.stories.tsx":async()=>t(()=>import("./SystemButton.stories-DGfx_H6p.js"),__vite__mapDeps([41,1,2,3,4,9,8,5,42]),import.meta.url),"./src/title-with-underline/TitleWithUnderline.stories.tsx":async()=>t(()=>import("./TitleWithUnderline.stories-CX-r_g2K.js"),__vite__mapDeps([43,1,2,8,44]),import.meta.url),"./src/user-panel/UserPanel.stories.tsx":async()=>t(()=>import("./UserPanel.stories-BaagTiDA.js"),__vite__mapDeps([45,1,2,3,4,8,5,46]),import.meta.url)};async function y(r){return P[r]()}const{composeConfigs:I,PreviewWeb:V,ClientApi:w}=__STORYBOOK_MODULE_PREVIEW_API__,v=async(r=[])=>{const s=await Promise.all([r.at(0)??t(()=>import("./entry-preview-D5o9XUf4.js"),__vite__mapDeps([47,2,48,35]),import.meta.url),r.at(1)??t(()=>import("./entry-preview-docs-CRwesYin.js"),__vite__mapDeps([49,50,2,51]),import.meta.url),r.at(2)??t(()=>import("./preview-6uLYm2Ic.js"),__vite__mapDeps([52,53]),import.meta.url),r.at(3)??t(()=>import("./preview-Dfzc6gvT.js"),[],import.meta.url),r.at(4)??t(()=>import("./preview-BZMhGFoR.js"),[],import.meta.url),r.at(5)??t(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([54,51]),import.meta.url),r.at(6)??t(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),r.at(7)??t(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),r.at(8)??t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([55,51]),import.meta.url),r.at(9)??t(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),r.at(10)??t(()=>import("./preview-DgB_7K7_.js"),__vite__mapDeps([56,1,2,57]),import.meta.url)]);return I(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(y,v);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
