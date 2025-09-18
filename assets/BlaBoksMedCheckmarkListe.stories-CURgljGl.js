import{j as e}from"./iframe-DzXUO6GT.js";import{g as c}from"./withIntl-BPCaRs10.js";import"./index-DfaBx6Pe.js";import{R as m}from"./ReadMore-BBeWwL2Z.js";import{M as a}from"./message-37ZvHjur.js";import{S as l}from"./Checkmark-BDWqRyCz.js";import{B as p}from"./Label-BptAkRyu.js";import"./preload-helper-PPVm8Dsz.js";import"./composeEventHandlers-krbYd5LM.js";import"./useControllableState-DmC_MG6f.js";import"./ChevronDown-DkSCMhYg.js";import"./useId-DZKQXQUP.js";const h="_checkBlaIkon_1dac3_1",k="_container_1dac3_5",x="_rad_1dac3_11",o={checkBlaIkon:h,container:k,rad:x},s=({saksopplysninger:d})=>e.jsx("div",{className:o.container,children:d.map((t,i)=>e.jsxs("div",{className:o.rad,children:[t.readMoreContent&&e.jsx(m,{size:"small",header:e.jsx(a,{id:t.textId}),children:t.readMoreContent}),!t.readMoreContent&&e.jsxs(e.Fragment,{children:[e.jsx(l,{className:o.checkBlaIkon,height:35,width:35}),e.jsx(p,{size:"small",children:e.jsx(a,{id:t.textId})})]})]},`BlaBoksMedCheckmarkListe-${t.textId}-${i}`))});s.__docgenInfo={description:"",methods:[],displayName:"BlaBoksMedCheckmarkListe",props:{saksopplysninger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  textId: string;
  readMoreContent: ReactNode | ReactNode[] | string;
}`,signature:{properties:[{key:"textId",value:{name:"string",required:!0}},{key:"readMoreContent",value:{name:"union",raw:"ReactNode | ReactNode[] | string",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},{name:"string"}],required:!0}}]}}],raw:"Saksopplysning[]"},description:""}}};const u=c({"tittel.1":"Tittel 1","tittel.2":"Tittel 2"}),w={component:s,decorators:[u]},r={args:{saksopplysninger:[{textId:"tittel.1",readMoreContent:e.jsx("div",{children:"test test test test"})},{textId:"tittel.2",readMoreContent:e.jsx("div",{children:"innhold innhold innhold innhold"})}]}},n={args:{saksopplysninger:[{textId:"tittel.1",readMoreContent:void 0}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    saksopplysninger: [{
      textId: 'tittel.1',
      readMoreContent: <div>test test test test</div>
    }, {
      textId: 'tittel.2',
      readMoreContent: <div>innhold innhold innhold innhold</div>
    }]
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    saksopplysninger: [{
      textId: 'tittel.1',
      readMoreContent: undefined
    }]
  }
}`,...n.parameters?.docs?.source}}};const S=["Default","UtenContent"];export{r as Default,n as UtenContent,S as __namedExportsOrder,w as default};
