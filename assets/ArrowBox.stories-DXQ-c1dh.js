import{j as t}from"./iframe-BXXXxsZ-.js";const d="#B7B1A9",m=4,u=(e,o,r)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${d};
    border-radius: ${m}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${d};
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
`,x=(e,o,r)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${d};
    border-radius: ${m}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${d};
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
`,b=(e,o,r,s)=>o?x(e,r,s):u(e,r,s),g=(e,o,r)=>r?"":o?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,n=({children:e,alignOffset:o=0,alignLeft:r=!1,marginTop:s=0,marginLeft:f=0,hideBorder:c=!1})=>t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:b(o,r,s,f)}}),t.jsx("div",{className:g(o,r,c),children:e})]});n.__docgenInfo={description:"",methods:[],displayName:"ArrowBox",props:{alignOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},alignLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},marginTop:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},marginLeft:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const h={component:n},a=()=>t.jsx("div",{style:{width:"200px"},children:t.jsx(n,{children:"Dette er en tekst"})});a.__docgenInfo={description:"",methods:[],displayName:"MedPilPåToppen"};var i,p,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => <div style={{
  width: '200px'
}}>
    <ArrowBox>Dette er en tekst</ArrowBox>
  </div>`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const $=["MedPilPåToppen"];export{a as MedPilPåToppen,$ as __namedExportsOrder,h as default};
