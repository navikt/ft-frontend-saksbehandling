const __vite__fileDeps=["./AksjonspunktBox.stories-G4brHiPw.js","./jsx-runtime-_e34SzbC.js","./index-DVXBtNgz.js","./bind-Dx2DsUka.js","./AksjonspunktBox-C7kLr1UX.css","./AksjonspunktHelpTextHTML.stories-CvURld9A.js","./AksjonspunktHelpTextHTML-BhynfdJL.js","./index.es-Be9oOq7l.js","./index-DehekKaw.js","./tslib.es6-BntfKcQG.js","./clsx-B-dksMZM.js","./Button-TtxQnaqu.js","./useId-Bn1dgn6J.js","./Loader-BJVHNarm.js","./Label-DRDoq8-c.js","./composeEventHandlers-DeH74NdU.js","./ExclamationmarkTriangleFill-BusUUoib.js","./VStack-C7FK5vZs.js","./AksjonspunktHelpTextTemp.stories-Cpf7fWTt.js","./nb_NO-RinjUwPG.js","./AksjonspunktHelpTextTemp-Fpu5xL9M.css","./ArrowBox.stories-8YrRiCmo.js","./AvsnittSkiller.stories-Dr_6o9Aa.js","./VerticalSpacer-BrPp9xsh.js","./VerticalSpacer-CyBPVF2O.css","./AvsnittSkiller-BQ9iXZtX.css","./BorderBox.stories-DFXoXfAF.js","./BorderBox-DIADtxE_.js","./BorderBox-gjILekHP.css","./DataFetchPendingModal.stories-DRqp1s3y.js","./Modal-CX9HjZh6.js","./index-Cbx7Fas8.js","./DataFetchPendingModal-BvUTCPKC.css","./DateLabel.stories-x-uyBXfK.js","./DateTimeLabel.stories-B7Dfeyui.js","./EditedIcon.stories-CG4phJ9H.js","./EditedIcon-CXJr72tM.css","./FadingPanel.stories-B8Bx-Oly.js","./FadingPanel-BEB3i2Vn.css","./FaktaGruppe.stories-BLlfWwYV.js","./FloatRight.stories-C6ME90_A.js","./FloatRight-DKKsVu08.js","./FloatRight-BhH6De2z.css","./LabelWithHeader.stories-21g5nda4.js","./LabelWithHeader-D68D4IoL.css","./LoadingPanel.stories-BUtkDJBk.js","./LoadingPanel-CMaQhXpm.css","./OkAvbrytModal.stories-CFWUbepm.js","./chunk-MZXVCX43-DWuJqIWT.js","./v4-D8aEg3BZ.js","./OverstyringKnapp.stories-DgAv35aV.js","./OverstyringKnapp-C-LZ_7Ho.css","./PeriodLabel.stories-DhVmoLhC.js","./TimeLabel.stories-C6UBDTzq.js","./Tooltip.stories-BeVxCTlt.js","./Tooltip-BVonU2iy.css","./VerticalSpacer.stories-CwVbYF79.js","./WarningModal.stories-DhZ3wFZu.js","./WarningModal-CIXT0L5f.css","./BlaBoksMedCheckmarkListe.stories-D0XEdfNd.js","./ChevronDown-CWRK_qRI.js","./message-Pfrm_Caz.js","./BlaBoksMedCheckmarkListe--lp7DQv4.css","./FlexContainer.stories-BnXQJmEW.js","./FlexContainer-ClPn7rU6.css","./ExpandableTableRow.stories-lrTs4NHc.js","./Table-cArweofq.js","./Table-Dz5BKJ4D.css","./ExpandableTableRow-CgafC-xx.css","./Table.stories-DkDvhKMu.js","./entry-preview-D5o9XUf4.js","./client-DWUO8fVt.js","./entry-preview-docs-CRwesYin.js","./_getPrototype-Ba2tldbE.js","./index-DrFu-skq.js","./preview-6uLYm2Ic.js","./index-DYADbu9O.js","./preview-DJ7cregD.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-BXf3Znk3.js","./preview-CBMslX2x.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const _ of o.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const R="modulepreload",T=function(e,s){return new URL(e,s).href},d={},t=function(s,n,c){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),E=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));r=Promise.all(n.map(i=>{if(i=T(i,c),i in d)return;d[i]=!0;const m=i.endsWith(".css"),O=m?'[rel="stylesheet"]':"";if(!!c)for(let l=o.length-1;l>=0;l--){const u=o[l];if(u.href===i&&(!m||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${O}`))return;const a=document.createElement("link");if(a.rel=m?"stylesheet":R,m||(a.as="script",a.crossOrigin=""),a.href=i,E&&a.setAttribute("nonce",E),document.head.appendChild(a),m)return new Promise((l,u)=>{a.addEventListener("load",l),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>s()).catch(o=>{const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=o,window.dispatchEvent(_),!_.defaultPrevented)throw o})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,p=L({page:"preview"});P.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const y={"./src/AksjonspunktBox.stories.tsx":async()=>t(()=>import("./AksjonspunktBox.stories-G4brHiPw.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./src/AksjonspunktHelpTextHTML.stories.tsx":async()=>t(()=>import("./AksjonspunktHelpTextHTML.stories-CvURld9A.js"),__vite__mapDeps([5,1,2,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url),"./src/AksjonspunktHelpTextTemp.stories.tsx":async()=>t(()=>import("./AksjonspunktHelpTextTemp.stories-Cpf7fWTt.js"),__vite__mapDeps([18,1,2,7,8,9,6,10,11,12,13,14,15,16,17,19,20]),import.meta.url),"./src/ArrowBox.stories.tsx":async()=>t(()=>import("./ArrowBox.stories-8YrRiCmo.js"),__vite__mapDeps([21,1,2]),import.meta.url),"./src/AvsnittSkiller.stories.tsx":async()=>t(()=>import("./AvsnittSkiller.stories-Dr_6o9Aa.js"),__vite__mapDeps([22,1,2,3,23,24,25]),import.meta.url),"./src/BorderBox.stories.tsx":async()=>t(()=>import("./BorderBox.stories-DFXoXfAF.js"),__vite__mapDeps([26,1,2,27,3,10,28]),import.meta.url),"./src/DataFetchPendingModal.stories.tsx":async()=>t(()=>import("./DataFetchPendingModal.stories-DRqp1s3y.js"),__vite__mapDeps([29,1,2,8,9,7,19,30,31,10,14,15,11,12,13,17,32]),import.meta.url),"./src/DateLabel.stories.tsx":async()=>t(()=>import("./DateLabel.stories-x-uyBXfK.js"),__vite__mapDeps([33,1,2,8,9,7]),import.meta.url),"./src/DateTimeLabel.stories.tsx":async()=>t(()=>import("./DateTimeLabel.stories-B7Dfeyui.js"),__vite__mapDeps([34,1,2,8,9,7,19]),import.meta.url),"./src/EditedIcon.stories.tsx":async()=>t(()=>import("./EditedIcon.stories-CG4phJ9H.js"),__vite__mapDeps([35,1,2,3,12,36]),import.meta.url),"./src/FadingPanel.stories.tsx":async()=>t(()=>import("./FadingPanel.stories-B8Bx-Oly.js"),__vite__mapDeps([37,1,2,38]),import.meta.url),"./src/FaktaGruppe.stories.tsx":async()=>t(()=>import("./FaktaGruppe.stories-BLlfWwYV.js"),__vite__mapDeps([39,1,2,27,3,10,28,23,24,14]),import.meta.url),"./src/FloatRight.stories.tsx":async()=>t(()=>import("./FloatRight.stories-C6ME90_A.js"),__vite__mapDeps([40,1,2,41,42]),import.meta.url),"./src/LabelWithHeader.stories.tsx":async()=>t(()=>import("./LabelWithHeader.stories-21g5nda4.js"),__vite__mapDeps([43,1,2,14,10,44]),import.meta.url),"./src/LoadingPanel.stories.tsx":async()=>t(()=>import("./LoadingPanel.stories-BUtkDJBk.js"),__vite__mapDeps([45,1,2,13,10,46]),import.meta.url),"./src/OkAvbrytModal.stories.tsx":async()=>t(()=>import("./OkAvbrytModal.stories-CFWUbepm.js"),__vite__mapDeps([47,1,2,48,49,7,8,9,19,30,31,10,14,15,11,12,13]),import.meta.url),"./src/OverstyringKnapp.stories.tsx":async()=>t(()=>import("./OverstyringKnapp.stories-DgAv35aV.js"),__vite__mapDeps([50,1,2,7,8,9,19,12,51]),import.meta.url),"./src/PeriodLabel.stories.tsx":async()=>t(()=>import("./PeriodLabel.stories-DhVmoLhC.js"),__vite__mapDeps([52,1,2,8,9,7,19,14,10]),import.meta.url),"./src/TimeLabel.stories.tsx":async()=>t(()=>import("./TimeLabel.stories-C6UBDTzq.js"),__vite__mapDeps([53,1,2,8,9,7]),import.meta.url),"./src/Tooltip.stories.tsx":async()=>t(()=>import("./Tooltip.stories-BeVxCTlt.js"),__vite__mapDeps([54,1,2,3,55]),import.meta.url),"./src/VerticalSpacer.stories.tsx":async()=>t(()=>import("./VerticalSpacer.stories-CwVbYF79.js"),__vite__mapDeps([56,1,2,23,3,24]),import.meta.url),"./src/WarningModal.stories.tsx":async()=>t(()=>import("./WarningModal.stories-DhZ3wFZu.js"),__vite__mapDeps([57,1,2,48,49,30,31,10,14,15,11,12,13,17,16,58]),import.meta.url),"./src/blaBoksMedCheckmarkListe/BlaBoksMedCheckmarkListe.stories.tsx":async()=>t(()=>import("./BlaBoksMedCheckmarkListe.stories-D0XEdfNd.js"),__vite__mapDeps([59,1,2,8,9,7,12,14,10,15,60,61,62]),import.meta.url),"./src/flexGrid/FlexContainer.stories.tsx":async()=>t(()=>import("./FlexContainer.stories-BnXQJmEW.js"),__vite__mapDeps([63,1,2,3,64]),import.meta.url),"./src/table/ExpandableTableRow.stories.tsx":async()=>t(()=>import("./ExpandableTableRow.stories-lrTs4NHc.js"),__vite__mapDeps([65,1,2,66,8,9,3,61,67,7,19,41,42,12,60,68]),import.meta.url),"./src/table/Table.stories.tsx":async()=>t(()=>import("./Table.stories-DkDvhKMu.js"),__vite__mapDeps([69,1,2,66,8,9,3,61,67]),import.meta.url)};async function f(e){return y[e]()}const{composeConfigs:I,PreviewWeb:D,ClientApi:x}=__STORYBOOK_MODULE_PREVIEW_API__,V=async(e=[])=>{const s=await Promise.all([e.at(0)??t(()=>import("./entry-preview-D5o9XUf4.js"),__vite__mapDeps([70,2,71,31]),import.meta.url),e.at(1)??t(()=>import("./entry-preview-docs-CRwesYin.js"),__vite__mapDeps([72,73,2,74]),import.meta.url),e.at(2)??t(()=>import("./preview-6uLYm2Ic.js"),__vite__mapDeps([75,76]),import.meta.url),e.at(3)??t(()=>import("./preview-CLFUP3Pi.js"),[],import.meta.url),e.at(4)??t(()=>import("./preview-DJ7cregD.js"),__vite__mapDeps([77,49]),import.meta.url),e.at(5)??t(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([78,74]),import.meta.url),e.at(6)??t(()=>import("./preview-B4GcaC1c.js"),[],import.meta.url),e.at(7)??t(()=>import("./preview-Db4Idchh.js"),[],import.meta.url),e.at(8)??t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([79,74]),import.meta.url),e.at(9)??t(()=>import("./preview-BpcF_O6y.js"),[],import.meta.url),e.at(10)??t(()=>import("./preview-BXf3Znk3.js"),__vite__mapDeps([80,1,2,81]),import.meta.url)]);return I(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new D(f,V);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
