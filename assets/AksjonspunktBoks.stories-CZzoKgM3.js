import{j as e,a0 as d,H as A,a1 as f,$ as O,W as R,T as l}from"./iframe-Xc9xpN8R.js";import"./preload-helper-PPVm8Dsz.js";const c=({tittel:o,aksjonspunkt:n,children:i})=>{const p=!n||Array.isArray(n)?n:[n],{headerBackground:m,bodyBackground:k,icon:u}=P(p),j=p?.map(g=>`AksjonspunktBoks-${g.definisjon}`).join(",");return e.jsxs(d.New,{borderRadius:"medium",background:k,"data-testid":j??"AksjonspunktBoks","data-color":k,children:[e.jsx(d.New,{paddingInline:u?"4":"12",paddingBlock:"4",borderRadius:"medium medium 0 0",background:m,children:e.jsxs(A,{gap:"2",wrap:!1,children:[u&&e.jsx("span",{children:u}),e.jsx(f,{as:"span",size:"small",level:"3",children:o})]})}),e.jsx(d.New,{paddingInline:"12",paddingBlock:"6",children:i})]})},P=o=>o?.some(i=>i.status==="OPPR")?{bodyBackground:"warning-soft",headerBackground:"warning-moderateA",icon:e.jsx(O,{"aria-hidden":!0,color:"var(--ax-text-warning-subtle)",fontSize:"1.5rem"})}:{bodyBackground:"neutral-soft",headerBackground:"neutral-moderateA",icon:null};c.__docgenInfo={description:"",methods:[],displayName:"AksjonspunktBoks",props:{tittel:{required:!0,tsType:{name:"ReactNode"},description:""},aksjonspunkt:{required:!0,tsType:{name:"union",raw:"Aksjonspunkt | Aksjonspunkt[] | undefined",elements:[{name:"signature",type:"object",raw:`{
  status: 'OPPR' | 'UTFO' | 'AVBR';
  definisjon: string;
}`,signature:{properties:[{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"definisjon",value:{name:"string",required:!0}}]}},{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  status: 'OPPR' | 'UTFO' | 'AVBR';
  definisjon: string;
}`,signature:{properties:[{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"definisjon",value:{name:"string",required:!0}}]}}],raw:"Aksjonspunkt[]"},{name:"undefined"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const y={title:"AksjonspunktBoks",component:c,args:{tittel:"Dette er en tittel på aksjonspunktboksen",children:e.jsxs(R,{gap:"4",children:[e.jsx(l,{label:"Fødselsdato",htmlSize:20}),e.jsx(l,{label:"Begrunnelse",htmlSize:50})]})}},s={args:{aksjonspunkt:{definisjon:"1234",status:"OPPR"}}},t={args:{aksjonspunkt:{definisjon:"1234",status:"UTFO"}}},r={args:{aksjonspunkt:{definisjon:"1234",status:"OPPR"}}},a={args:{aksjonspunkt:void 0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'OPPR'
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'UTFO'
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: {
      definisjon: '1234',
      status: 'OPPR'
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkt: undefined
  }
}`,...a.parameters?.docs?.source}}};const h=["OpprettetAksjonspunkt","UtførtAksjonspunkt","ReturnertAksjonspunkt","UtenAksjonspunkt"];export{s as OpprettetAksjonspunkt,r as ReturnertAksjonspunkt,a as UtenAksjonspunkt,t as UtførtAksjonspunkt,h as __namedExportsOrder,y as default};
