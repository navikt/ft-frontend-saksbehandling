import{A as l,G as m,I as d,r as u}from"./iframe-BmpCVi_B.js";import{r as _}from"./formUtils-BtzhobGF.js";import{R as g}from"./RhfTextField-DuejhbmS.js";import"./preload-helper-PPVm8Dsz.js";import"./ReadOnlyField-BymwU2PL.js";const{global:y}=__STORYBOOK_MODULE_GLOBAL__,{composeConfigs:f,setDefaultProjectAnnotations:R,setProjectAnnotations:E,composeStory:x,composeStories:A}=__STORYBOOK_MODULE_PREVIEW_API__;var{window:n}=y;n&&(n.STORYBOOK_ENV="react");f([l,m,{renderToCanvas:async(o,s)=>{if(o.storyContext.testingLibraryRender==null)return d(o,s);let{storyContext:{context:a,unboundStoryFn:p,testingLibraryRender:i}}=o,{unmount:c}=i(u.createElement(p,{...a}),{container:a.canvasElement});return c}}]);const L={component:g,tags:["autodocs"],decorators:_({testinputpre:"Hei hei"}),args:{control:void 0}},e={args:{label:"Dette er et inputfelt",name:"testinput"}},t={args:{label:"Dette er et inputfelt der verdi er valgt",name:"testinputpre"}},r={args:{label:"Dette er et inputfelt som er readonly",name:"testinputpre",readOnly:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt',
    name: 'testinput'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt der verdi er valgt',
    name: 'testinputpre'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt som er readonly',
    name: 'testinputpre',
    readOnly: true
  }
}`,...r.parameters?.docs?.source}}};const T=["Default","MedVerdi","ReadOnly"];export{e as Default,t as MedVerdi,r as ReadOnly,T as __namedExportsOrder,L as default};
