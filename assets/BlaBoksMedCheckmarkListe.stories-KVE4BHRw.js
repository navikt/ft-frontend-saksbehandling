import{j as e,B as c}from"./iframe-Ckqcpi8y.js";import{g as l}from"./withIntl-CPY9gvBR.js";import{R as m}from"./ReadMore-De1IE4bT.js";import{M as s}from"./message-y5xFzrvw.js";import{S as h}from"./Checkmark-BwegTzMX.js";import"./preload-helper-D9Z9MdNV.js";const p="_checkBlaIkon_1dac3_1",k="_container_1dac3_5",x="_rad_1dac3_11",a={checkBlaIkon:p,container:k,rad:x},o=({saksopplysninger:d})=>e.jsx("div",{className:a.container,children:d.map((t,i)=>e.jsxs("div",{className:a.rad,children:[t.readMoreContent&&e.jsx(m,{size:"small",header:e.jsx(s,{id:t.textId}),children:t.readMoreContent}),!t.readMoreContent&&e.jsxs(e.Fragment,{children:[e.jsx(h,{className:a.checkBlaIkon,height:35,width:35}),e.jsx(c,{size:"small",children:e.jsx(s,{id:t.textId})})]})]},`BlaBoksMedCheckmarkListe-${t.textId}-${i}`))});o.__docgenInfo={description:"",methods:[],displayName:"BlaBoksMedCheckmarkListe",props:{saksopplysninger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  textId: string;
  readMoreContent: ReactNode | ReactNode[] | string;
}`,signature:{properties:[{key:"textId",value:{name:"string",required:!0}},{key:"readMoreContent",value:{name:"union",raw:"ReactNode | ReactNode[] | string",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},{name:"string"}],required:!0}}]}}],raw:"Saksopplysning[]"},description:""}}};const u=l({"tittel.1":"Tittel 1","tittel.2":"Tittel 2"}),_={component:o,decorators:[u]},n={args:{saksopplysninger:[{textId:"tittel.1",readMoreContent:e.jsx("div",{children:"test test test test"})},{textId:"tittel.2",readMoreContent:e.jsx("div",{children:"innhold innhold innhold innhold"})}]}},r={args:{saksopplysninger:[{textId:"tittel.1",readMoreContent:void 0}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    saksopplysninger: [{
      textId: 'tittel.1',
      readMoreContent: <div>test test test test</div>
    }, {
      textId: 'tittel.2',
      readMoreContent: <div>innhold innhold innhold innhold</div>
    }]
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    saksopplysninger: [{
      textId: 'tittel.1',
      readMoreContent: undefined
    }]
  }
}`,...r.parameters?.docs?.source}}};const B=["Default","UtenContent"];export{n as Default,r as UtenContent,B as __namedExportsOrder,_ as default};
