import{af as s,ag as l,ah as u,ai as y,aj as S,r as O}from"./iframe-D7mg31af.js";import{a as v}from"./index-BcU8xA9T.js";import{r as b}from"./formUtils-BorEHVlI.js";import{R as D}from"./RhfTextField-Bl86gWsH.js";import"./preload-helper-PPVm8Dsz.js";import"./ReadOnlyField-CzBqqu6R.js";function T(e){const t=v({...e,addons:[l,u,y,...e.addons??[]]}),r=t.meta.bind(t);return t.meta=n=>{const o=r(n),p=o.story.bind(o);return o.story=g=>{const m=p(g);return m.Component=m.__compose(),m},o},t}s(T,"__definePreview");const{global:A}=__STORYBOOK_MODULE_GLOBAL__;var{window:d}=A;d&&(d.STORYBOOK_ENV="react");const{composeConfigs:E,composeStories:P,composeStory:R,setProjectAnnotations:w,setDefaultProjectAnnotations:x}=__STORYBOOK_MODULE_PREVIEW_API__;function C(e){return x(_),w(e)}s(C,"setProjectAnnotations");var _=E([l,u,{renderToCanvas:s(async(e,t)=>{if(e.storyContext.testingLibraryRender==null)return S(e,t);const{storyContext:{context:r,unboundStoryFn:n,testingLibraryRender:o}}=e,{unmount:p}=o(O.createElement(n,{...r}),{container:r.canvasElement});return p},"renderToCanvas")}]);function f(e,t,r,n){return R(e,t,r,globalThis.globalProjectAnnotations??_,n)}s(f,"composeStory");function L(e,t){return P(e,t,f)}s(L,"composeStories");const V={component:D,tags:["autodocs"],decorators:b({testinputpre:"Hei hei"}),args:{control:void 0}},a={args:{label:"Dette er et inputfelt",name:"testinput"}},i={args:{label:"Dette er et inputfelt der verdi er valgt",name:"testinputpre"}},c={args:{label:"Dette er et inputfelt som er readonly",name:"testinputpre",readOnly:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt',
    name: 'testinput'
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt der verdi er valgt',
    name: 'testinputpre'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Dette er et inputfelt som er readonly',
    name: 'testinputpre',
    readOnly: true
  }
}`,...c.parameters?.docs?.source}}};const F=["Default","MedVerdi","ReadOnly"];export{a as Default,i as MedVerdi,c as ReadOnly,F as __namedExportsOrder,V as default};
