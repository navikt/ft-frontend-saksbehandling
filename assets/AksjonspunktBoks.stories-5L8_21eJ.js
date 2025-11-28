import{j as n,W as l,H as h,X as f,U as p,V as T,T as c}from"./iframe-CcPU-1-g.js";import"./preload-helper-PPVm8Dsz.js";const g=({tittel:t,aksjonspunkt:s,children:r})=>{const e=!s||Array.isArray(s)?s:[s],{headerBackground:k,bodyBackground:j,icon:u}=A(e),m=e?.map(B=>`AksjonspunktBoks-${B.definisjon}`).join(",");return n.jsxs(l.New,{borderRadius:"medium",background:k,"data-testid":m??"AksjonspunktBoks","data-color":k,children:[n.jsx(l.New,{paddingInline:u?"4":"12",paddingBlock:"4",borderRadius:"medium medium 0 0",background:j,children:n.jsxs(h,{gap:"2",wrap:!1,children:[u&&n.jsx("span",{children:u}),n.jsx(f,{as:"span",size:"small",level:"3",children:t})]})}),n.jsx(l.New,{paddingInline:"12",paddingBlock:"6",children:r})]})},A=t=>{const s=t?.some(e=>e.toTrinnsBehandling&&e.toTrinnsBehandlingGodkjent===!1),r=t?.some(e=>e.status==="OPPR");return r&&s?{headerBackground:"danger-soft",bodyBackground:"danger-moderateA",icon:n.jsx(p,{"aria-hidden":!0,color:"var(--ax-text-danger-subtle)",fontSize:"1.5rem"})}:r?{headerBackground:"warning-soft",bodyBackground:"warning-moderateA",icon:n.jsx(p,{"aria-hidden":!0,color:"var(--ax-text-warning-subtle)",fontSize:"1.5rem"})}:{headerBackground:"neutral-soft",bodyBackground:"neutral-moderateA",icon:null}};g.__docgenInfo={description:"",methods:[],displayName:"AksjonspunktBoks",props:{tittel:{required:!0,tsType:{name:"ReactNode"},description:""},aksjonspunkt:{required:!0,tsType:{name:"union",raw:"Aksjonspunkt | Aksjonspunkt[] | undefined",elements:[{name:"signature",type:"object",raw:`{
  status: string;
  definisjon: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
}`,signature:{properties:[{key:"status",value:{name:"string",required:!0}},{key:"definisjon",value:{name:"string",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  status: string;
  definisjon: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
}`,signature:{properties:[{key:"status",value:{name:"string",required:!0}},{key:"definisjon",value:{name:"string",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}}]}}],raw:"Aksjonspunkt[]"},{name:"undefined"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const y={title:"AksjonspunktBoks",component:g,args:{tittel:"Dette er en tittel på aksjonspunktboksen",children:n.jsxs(T,{gap:"4",children:[n.jsx(c,{label:"Fødselsdato",htmlSize:20}),n.jsx(c,{label:"Begrunnelse",htmlSize:50})]})}},a={args:{aksjonspunkt:{definisjon:"1234",status:"OPPR",toTrinnsBehandling:void 0,toTrinnsBehandlingGodkjent:void 0}}},o={args:{aksjonspunkt:{definisjon:"1234",status:"UTFO",toTrinnsBehandling:void 0,toTrinnsBehandlingGodkjent:void 0}}},i={args:{aksjonspunkt:{definisjon:"1234",status:"OPPR",toTrinnsBehandling:!0,toTrinnsBehandlingGodkjent:!1}}},d={args:{aksjonspunkt:void 0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'OPPR',
      toTrinnsBehandling: undefined,
      toTrinnsBehandlingGodkjent: undefined
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'UTFO',
      toTrinnsBehandling: undefined,
      toTrinnsBehandlingGodkjent: undefined
    }
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'OPPR',
      toTrinnsBehandling: true,
      toTrinnsBehandlingGodkjent: false
    }
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: undefined
  }
}`,...d.parameters?.docs?.source}}};const v=["OpprettetAksjonspunkt","UtførtAksjonspunkt","ReturnertAksjonspunkt","UtenAksjonspunkt"];export{a as OpprettetAksjonspunkt,i as ReturnertAksjonspunkt,d as UtenAksjonspunkt,o as UtførtAksjonspunkt,v as __namedExportsOrder,y as default};
