import{v as D}from"./v4-CtRu48qb.js";import{j as n}from"./jsx-runtime-CLpGMVip.js";import{n as k}from"./index.es-BpqXpD3L.js";import{m as T}from"./nb_NO-7Llcbk-T.js";import{M as c}from"./Modal-DCYGPGIE.js";import{H as x}from"./Label-DiqJXlxg.js";import{B as y}from"./Button-CrwUjO4x.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CH5l-kYE.js";import"./index-CYQpqK1Q.js";import"./index-4Uuc9FQs.js";import"./index-CjktTq3Q.js";import"./clsx-B-dksMZM.js";import"./Loader-ByyM_uPu.js";import"./useId-qXXRNB6N.js";const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:I}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:O}=__STORYBOOK_MODULE_GLOBAL__;var B="storybook/actions",P=`${B}/action-event`,V={depth:10,clearOnStoryChange:!0,limit:50},v=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:v(r,e)},z=t=>!!(typeof t=="object"&&t&&v(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),C=t=>{if(z(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),o=r==null?void 0:r.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(o.constructor.prototype)}),e}return t},K=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?D():Date.now().toString(36)+Math.random().toString(36).substring(2);function g(t,e={}){let r={...V,...e},o=function(...s){var p,d;if(e.implicit){let m=(p="__STORYBOOK_PREVIEW__"in O?O.__STORYBOOK_PREVIEW__:void 0)==null?void 0:p.storyRenders.find(i=>i.phase==="playing"||i.phase==="rendering");if(m){let i=!((d=window==null?void 0:window.FEATURES)!=null&&d.disallowImplicitActionsInRenderV8),u=new I({phase:m.phase,name:t,deprecated:i});if(i)console.warn(u);else throw u}}let R=S.getChannel(),w=K(),A=5,l=s.map(C),M=s.length>1?l:l[0],j={id:w,count:0,data:{name:t,args:M},options:{...r,maxDepth:A+(r.depth||3),allowFunction:r.allowFunction||!1}};R.emit(P,j)};return o.isAction=!0,o.implicit=e.implicit,o}const _=k(T),E=({text:t,okButtonText:e,showModal:r,cancel:o,submit:s})=>n.jsxs(c,{width:"small",open:r,"aria-label":t,onClose:o,children:[n.jsx(c.Body,{children:n.jsx(x,{size:"small",children:t})}),n.jsxs(c.Footer,{children:[n.jsx(y,{variant:"primary",size:"small",onClick:s,autoFocus:!0,type:"button",children:e||_.formatMessage({id:"OkAvbrytModal.Ok"})}),n.jsx(y,{variant:"secondary",size:"small",onClick:o,type:"button",children:_.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]});E.__docgenInfo={description:`OkAvbrytModal

Modal som viser en valgfri tekst i tillegg til knappene OK og Avbryt.`,methods:[],displayName:"OkAvbrytModal",props:{text:{required:!0,tsType:{name:"string"},description:""},okButtonText:{required:!1,tsType:{name:"string"},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},submit:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},cancel:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const et={title:"OkAvbrytModal",component:E},a={args:{text:"Dette er ein test",showModal:!0,submit:g("button-click"),cancel:g("button-click")}};var f,b,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'Dette er ein test',
    showModal: true,
    submit: action('button-click'),
    cancel: action('button-click')
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const rt=["Default"];export{a as Default,rt as __namedExportsOrder,et as default};
