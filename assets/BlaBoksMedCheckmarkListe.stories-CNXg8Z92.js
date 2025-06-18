import{j as e,B as x}from"./iframe-fAeK6XRM.js";import{g as u}from"./withIntl-CRSOLGDU.js";import{R as g}from"./ReadMore-C0m_H6AP.js";import{M as o}from"./message-PVkR8jAL.js";import{S as I}from"./Checkmark-BrDqqkJR.js";const M="_checkBlaIkon_e3roh_1",C="_container_e3roh_5",j="_rad_e3roh_11",a={checkBlaIkon:M,container:C,rad:j},h=({saksopplysninger:p})=>e.jsx("div",{className:a.container,children:p.map((t,k)=>e.jsxs("div",{className:a.rad,children:[t.readMoreContent&&e.jsx(g,{size:"small",header:e.jsx(o,{id:t.textId}),children:t.readMoreContent}),!t.readMoreContent&&e.jsxs(e.Fragment,{children:[e.jsx(I,{className:a.checkBlaIkon,height:35,width:35}),e.jsx(x,{size:"small",children:e.jsx(o,{id:t.textId})})]})]},`BlaBoksMedCheckmarkListe-${t.textId}-${k}`))});h.__docgenInfo={description:"",methods:[],displayName:"BlaBoksMedCheckmarkListe",props:{saksopplysninger:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  textId: string;
  readMoreContent: ReactNode | ReactNode[] | string;
}`,signature:{properties:[{key:"textId",value:{name:"string",required:!0}},{key:"readMoreContent",value:{name:"union",raw:"ReactNode | ReactNode[] | string",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},{name:"string"}],required:!0}}]}}],raw:"Saksopplysning[]"},description:""}}};const v=u({"tittel.1":"Tittel 1","tittel.2":"Tittel 2"}),R={component:h,decorators:[v]},r={args:{saksopplysninger:[{textId:"tittel.1",readMoreContent:e.jsx("div",{children:"test test test test"})},{textId:"tittel.2",readMoreContent:e.jsx("div",{children:"innhold innhold innhold innhold"})}]}},n={args:{saksopplysninger:[{textId:"tittel.1",readMoreContent:void 0}]}};var s,d,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    saksopplysninger: [{
      textId: 'tittel.1',
      readMoreContent: <div>test test test test</div>
    }, {
      textId: 'tittel.2',
      readMoreContent: <div>innhold innhold innhold innhold</div>
    }]
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    saksopplysninger: [{
      textId: 'tittel.1',
      readMoreContent: undefined
    }]
  }
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const w=["Default","UtenContent"];export{r as Default,n as UtenContent,w as __namedExportsOrder,R as default};
