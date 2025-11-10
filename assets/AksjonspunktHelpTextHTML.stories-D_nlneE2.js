import{r as d,j as r,W as i,V as m,B as k}from"./iframe-CXmb7qQq.js";import"./preload-helper-PPVm8Dsz.js";const p=({children:e})=>{const c=d.Children.toArray(e);return c.length===0?null:r.jsx(i,{variant:"warning",size:"small",children:r.jsx(m,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:c.map(l=>r.jsx(k,{size:"small",children:l},u(l)))})})},u=e=>{if(d.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`};p.__docgenInfo={description:`AksjonspunktHelpTextHTML

Viser hjelpetekster som forteller Nav-ansatt hva som må gjøres for
å avklare en eller flere aksjonspunkter.`,methods:[],displayName:"AksjonspunktHelpTextHTML",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}};const h={component:p},n={args:{children:["Dette er en aksjonspunktmelding","Dette er en annen aksjonspunktmelding"]}},s={args:{children:[]}},t={args:{children:[null,"andre element",r.jsx("span",{children:"tredje element"},"1")]}},a={args:{children:"en tekst"}},o={args:{children:r.jsx("span",{children:"en react node"})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: ['Dette er en aksjonspunktmelding', 'Dette er en annen aksjonspunktmelding']
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: []
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: [null, 'andre element', <span key="1">tredje element</span>]
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'en tekst'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span>en react node</span>
  }
}`,...o.parameters?.docs?.source}}};const x=["Default","SkalIkkeVisesNårDetIkkeErAksjonspunkter","FlereSammensatteChildren","EnStringTekst","EnReactNodeTekst"];export{n as Default,o as EnReactNodeTekst,a as EnStringTekst,t as FlereSammensatteChildren,s as SkalIkkeVisesNårDetIkkeErAksjonspunkter,x as __namedExportsOrder,h as default};
