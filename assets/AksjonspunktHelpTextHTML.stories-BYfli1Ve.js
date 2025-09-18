import{r as i,j as r}from"./iframe-DzXUO6GT.js";import{A as l}from"./Alert-DFJmKH85.js";import{V as d}from"./VStack-vldtWtPo.js";import{B as k}from"./Label-BptAkRyu.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-af7718Cc.js";import"./Loader-IncALmTQ.js";import"./omit-B7stZg_p.js";import"./useId-BTmGetX7.js";import"./Provider-CLScYENo.js";import"./composeEventHandlers-krbYd5LM.js";import"./useId-DZKQXQUP.js";import"./ExclamationmarkTriangleFill-DDAH-o0u.js";import"./XMarkOctagonFill-CoZ8IwgD.js";import"./XMark-CpZNF069.js";import"./BasePrimitive-DGW3gu2x.js";const c=({children:e})=>{const m=i.Children.toArray(e);return m.length===0?null:r.jsx(l,{variant:"warning",size:"small",children:r.jsx(d,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:m.map(p=>r.jsx(k,{size:"small",children:p},u(p)))})})},u=e=>{if(i.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`};c.__docgenInfo={description:`AksjonspunktHelpTextHTML

Viser hjelpetekster som forteller Nav-ansatt hva som må gjøres for
å avklare en eller flere aksjonspunkter.`,methods:[],displayName:"AksjonspunktHelpTextHTML",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const I={component:c},n={args:{children:["Dette er en aksjonspunktmelding","Dette er en annen aksjonspunktmelding"]}},t={args:{children:[]}},s={args:{children:[null,"andre element",r.jsx("span",{children:"tredje element"},"1")]}},a={args:{children:"en tekst"}},o={args:{children:r.jsx("span",{children:"en react node"})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: ['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: []
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: [null, 'andre element', <span key="1">tredje element</span>]
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'en tekst'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span>en react node</span>
  }
}`,...o.parameters?.docs?.source}}};const C=["Default","SkalIkkeVisesNårDetIkkeErAksjonspunkter","FlereSammensatteChildren","EnStringTekst","EnReactNodeTekst"];export{n as Default,o as EnReactNodeTekst,a as EnStringTekst,s as FlereSammensatteChildren,t as SkalIkkeVisesNårDetIkkeErAksjonspunkter,C as __namedExportsOrder,I as default};
