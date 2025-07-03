import{j as e,B as c}from"./iframe-CjXhahqQ.js";import{g as l}from"./withIntl-DHmwpGJ-.js";import{R as m}from"./ReadMore-C-1geQ4U.js";import{M as o}from"./message-D-xhteeh.js";import{S as h}from"./Checkmark-Chqa7h3x.js";const p="_checkBlaIkon_e3roh_1",k="_container_e3roh_5",x="_rad_e3roh_11",a={checkBlaIkon:p,container:k,rad:x},s=({saksopplysninger:d})=>e.jsx("div",{className:a.container,children:d.map((t,i)=>e.jsxs("div",{className:a.rad,children:[t.readMoreContent&&e.jsx(m,{size:"small",header:e.jsx(o,{id:t.textId}),children:t.readMoreContent}),!t.readMoreContent&&e.jsxs(e.Fragment,{children:[e.jsx(h,{className:a.checkBlaIkon,height:35,width:35}),e.jsx(c,{size:"small",children:e.jsx(o,{id:t.textId})})]})]},`BlaBoksMedCheckmarkListe-${t.textId}-${i}`))});s.__docgenInfo={description:"",methods:[],displayName:"BlaBoksMedCheckmarkListe",props:{saksopplysninger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  textId: string;
  readMoreContent: ReactNode | ReactNode[] | string;
}`,signature:{properties:[{key:"textId",value:{name:"string",required:!0}},{key:"readMoreContent",value:{name:"union",raw:"ReactNode | ReactNode[] | string",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},{name:"string"}],required:!0}}]}}],raw:"Saksopplysning[]"},description:""}}};const u=l({"tittel.1":"Tittel 1","tittel.2":"Tittel 2"}),v={component:s,decorators:[u]},r={args:{saksopplysninger:[{textId:"tittel.1",readMoreContent:e.jsx("div",{children:"test test test test"})},{textId:"tittel.2",readMoreContent:e.jsx("div",{children:"innhold innhold innhold innhold"})}]}},n={args:{saksopplysninger:[{textId:"tittel.1",readMoreContent:void 0}]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const _=["Default","UtenContent"];export{r as Default,n as UtenContent,_ as __namedExportsOrder,v as default};
