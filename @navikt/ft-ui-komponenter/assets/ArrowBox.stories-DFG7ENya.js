import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import"./index-CTjT7uj6.js";const n="#B7B1A9",l=4,x=(e,o,r)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${n};
    border-radius: ${l}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${n};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    top: 0;
    margin-top: -1px;
    position: absolute;
    left: ${e}px;
    transform: rotate(45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,b=(e,o,r)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${n};
    border-radius: ${l}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${n};
    border-bottom-width: 0;
    border-right-width: 0;
    content: '';
    height: 1rem;
    left: 0;
    margin-left: -1px;
    position: absolute;
    top: ${e}px;
    transform: rotate(-45deg) translateY(-100%) translateZ(0);
    transform-origin: 0 0;
    width: 1rem;
  }
`,w=(e,o,r,s)=>o?b(e,r,s):x(e,r,s),g=(e,o,r)=>r?"":o?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,m=({children:e,alignOffset:o=0,alignLeft:r=!1,marginTop:s=0,marginLeft:f=0,hideBorder:u=!1})=>t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:w(o,r,s,f)}}),t.jsx("div",{className:g(o,r,u),children:e})]}),c=m;m.__docgenInfo={description:"",methods:[],displayName:"ArrowBox",props:{alignOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},alignLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},marginTop:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},marginLeft:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const $={title:"ArrowBox",component:c},a=()=>t.jsx("div",{style:{width:"200px"},children:t.jsx(c,{children:"Dette er en tekst"})});a.__docgenInfo={description:"",methods:[],displayName:"MedPilPåToppen"};var d,i,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div style={{
  width: '200px'
}}>
    <ArrowBox>Dette er en tekst</ArrowBox>
  </div>`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const T=["MedPilPåToppen"];export{a as MedPilPåToppen,T as __namedExportsOrder,$ as default};
