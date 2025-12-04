import{Q as c,U as m,V as d,r as u}from"./iframe-B0_JiVPH.js";import{r as g}from"./formUtils-D-MxTPPP.js";import{R as _}from"./RhfTextField-DCFvC0Z4.js";import"./preload-helper-PPVm8Dsz.js";import"./ReadOnlyField-B6XJked4.js";const{global:y}=__STORYBOOK_MODULE_GLOBAL__;var{window:n}=y;n&&(n.STORYBOOK_ENV="react");const{composeConfigs:f,composeStories:R,composeStory:E,setProjectAnnotations:x,setDefaultProjectAnnotations:L}=__STORYBOOK_MODULE_PREVIEW_API__;f([c,m,{renderToCanvas:async(o,s)=>{if(o.storyContext.testingLibraryRender==null)return d(o,s);let{storyContext:{context:a,unboundStoryFn:i,testingLibraryRender:p}}=o,{unmount:l}=p(u.createElement(i,{...a}),{container:a.canvasElement});return l}}]);const T={component:_,tags:["autodocs"],decorators:g({testinputpre:"Hei hei"}),args:{control:void 0}},e={args:{label:"Dette er et inputfelt",name:"testinput"}},t={args:{label:"Dette er et inputfelt der verdi er valgt",name:"testinputpre"}},r={args:{label:"Dette er et inputfelt som er readonly",name:"testinputpre",readOnly:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const w=["Default","MedVerdi","ReadOnly"];export{e as Default,t as MedVerdi,r as ReadOnly,w as __namedExportsOrder,T as default};
