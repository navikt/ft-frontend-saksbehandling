import{j as t}from"./iframe-B0hEvG41.js";import"./preload-helper-PPVm8Dsz.js";const d="var(--ax-bg-neutral-strong)",i=4,m=(e,o,r)=>`
  .arrowBoxTop${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${d};
    border-radius: ${i}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: var(--ax-bg-default);
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
`,u=(e,o,r)=>`
  .arrowBoxLeft${e} {
    background: var(--ax-bg-default);
    border: 1px solid ${d};
    border-radius: ${i}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: var(--ax-bg-default);
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
`,c=(e,o,r,s)=>o?u(e,r,s):m(e,r,s),x=(e,o,r)=>r?"":o?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,n=({children:e,alignOffset:o=0,alignLeft:r=!1,marginTop:s=0,marginLeft:p=0,hideBorder:l=!1})=>t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:c(o,r,s,p)}}),t.jsx("div",{className:x(o,r,l),children:e})]});n.__docgenInfo={description:"",methods:[],displayName:"ArrowBox",props:{alignOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},alignLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hideBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},marginTop:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},marginLeft:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const g={component:n},a=()=>t.jsx("div",{style:{width:"200px"},children:t.jsx(n,{children:"Dette er en tekst"})});a.__docgenInfo={description:"",methods:[],displayName:"MedPilPåToppen"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <div style={{
  width: '200px'
}}>
    <ArrowBox>Dette er en tekst</ArrowBox>
  </div>`,...a.parameters?.docs?.source}}};const w=["MedPilPåToppen"];export{a as MedPilPåToppen,w as __namedExportsOrder,g as default};
