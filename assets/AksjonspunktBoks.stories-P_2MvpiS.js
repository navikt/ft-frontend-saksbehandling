import{j as e,a1 as p,H as f,a2 as P,h as R,a0 as v,X as B,T as c}from"./iframe-BHy-O-gO.js";import"./preload-helper-PPVm8Dsz.js";const m=({tittel:i,beskrivelse:u,aksjonspunkt:s,children:j})=>{const k=!s||Array.isArray(s)?s:[s],{headerBackground:g,bodyBackground:l,icon:d}=x(k),A=k?.map(O=>`AksjonspunktBoks-${O.definisjon}`).join(",");return e.jsxs(p.New,{borderRadius:"medium",background:l,"data-testid":A??"AksjonspunktBoks","data-color":l,children:[e.jsx(p.New,{paddingInline:d?"4":"12",paddingBlock:"4",borderRadius:"medium medium 0 0",background:g,children:e.jsxs(f,{gap:"2",wrap:!1,children:[d&&e.jsx("span",{children:d}),e.jsxs("div",{children:[e.jsx(P,{as:"span",size:"small",level:"3",children:i}),u&&e.jsx(R,{children:u})]})]})}),e.jsx(p.New,{paddingInline:"12",paddingBlock:"6",children:j})]})},x=i=>i?.some(s=>s.status==="OPPR")?{bodyBackground:"warning-soft",headerBackground:"warning-moderateA",icon:e.jsx(v,{"aria-hidden":!0,color:"var(--ax-text-warning-subtle)",fontSize:"1.5rem"})}:{bodyBackground:"neutral-soft",headerBackground:"neutral-moderateA",icon:null};m.__docgenInfo={description:"",methods:[],displayName:"AksjonspunktBoks",props:{tittel:{required:!0,tsType:{name:"ReactNode"},description:""},beskrivelse:{required:!1,tsType:{name:"ReactNode"},description:""},aksjonspunkt:{required:!0,tsType:{name:"union",raw:"Aksjonspunkt | Aksjonspunkt[] | undefined",elements:[{name:"signature",type:"object",raw:`{
  status: 'OPPR' | 'UTFO' | 'AVBR';
  definisjon: string;
}`,signature:{properties:[{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"definisjon",value:{name:"string",required:!0}}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  status: 'OPPR' | 'UTFO' | 'AVBR';
  definisjon: string;
}`,signature:{properties:[{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"definisjon",value:{name:"string",required:!0}}]}}],raw:"Aksjonspunkt[]"},{name:"undefined"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const y={title:"AksjonspunktBoks",component:m,args:{tittel:"Dette er en tittel på aksjonspunktboksen",children:e.jsxs(B,{gap:"4",children:[e.jsx(c,{label:"Fødselsdato",htmlSize:20}),e.jsx(c,{label:"Begrunnelse",htmlSize:50})]})}},n={args:{aksjonspunkt:{definisjon:"1234",status:"OPPR"}}},t={args:{aksjonspunkt:{definisjon:"1234",status:"OPPR"},beskrivelse:"Dette er en beskrivelse av aksjonspunktet"}},r={args:{aksjonspunkt:{definisjon:"1234",status:"UTFO"}}},a={args:{aksjonspunkt:{definisjon:"1234",status:"OPPR"}}},o={args:{aksjonspunkt:void 0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'OPPR'
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'OPPR'
    },
    beskrivelse: 'Dette er en beskrivelse av aksjonspunktet'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'UTFO'
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'OPPR'
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: undefined
  }
}`,...o.parameters?.docs?.source}}};const T=["OpprettetAksjonspunkt","OpprettetAksjonspunktMedBeskrivelse","UtførtAksjonspunkt","ReturnertAksjonspunkt","UtenAksjonspunkt"];export{n as OpprettetAksjonspunkt,t as OpprettetAksjonspunktMedBeskrivelse,a as ReturnertAksjonspunkt,o as UtenAksjonspunkt,r as UtførtAksjonspunkt,T as __namedExportsOrder,y as default};
