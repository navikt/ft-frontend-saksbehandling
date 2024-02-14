import{j as t}from"./jsx-runtime-Du8NFWEI.js";import"./index-Dl6G-zuu.js";const s="#B7B1A9",m=4,u=(e,o,r)=>`
  .arrowBoxTop${e} {
    background: #ffffff;
    border: 1px solid ${s};
    border-radius: ${m}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${r}px;
    position: relative;

  }
  .arrowBoxTop${e}:before {
    background-color: #ffffff;
    border: 1px solid ${s};
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
`,g=(e,o,r)=>`
  .arrowBoxLeft${e} {
    background: #ffffff;
    border: 1px solid ${s};
    border-radius: ${m}px;
    padding: 15px;
    margin-bottom: 10px;
    margin-top: ${o}px;
    margin-left: ${r}px;
    position: relative;
  }

  .arrowBoxLeft${e}:before {
    background-color: #ffffff;
    border: 1px solid ${s};
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
`,b=(e,o,r,a)=>o?g(e,r,a):u(e,r,a),w=(e,o,r)=>r?"":o?`arrowBoxLeft${e}`:`arrowBoxTop${e}`,i=({children:e,alignOffset:o=0,alignLeft:r=!1,marginTop:a=0,marginLeft:x=0,hideBorder:c=!1})=>t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:b(o,r,a,x)}}),t.jsx("div",{className:w(o,r,c),children:e})]}),f=i;try{i.displayName="ArrowBox",i.__docgenInfo={description:"",displayName:"ArrowBox",props:{alignOffset:{defaultValue:{value:"0"},description:"",name:"alignOffset",required:!1,type:{name:"number"}},alignLeft:{defaultValue:{value:"false"},description:"",name:"alignLeft",required:!1,type:{name:"boolean"}},hideBorder:{defaultValue:{value:"false"},description:"",name:"hideBorder",required:!1,type:{name:"boolean"}},marginTop:{defaultValue:{value:"0"},description:"",name:"marginTop",required:!1,type:{name:"number"}},marginLeft:{defaultValue:{value:"0"},description:"",name:"marginLeft",required:!1,type:{name:"number"}}}}}catch{}const $={title:"ArrowBox",component:f},n=()=>t.jsx("div",{style:{width:"200px"},children:t.jsx(f,{children:"Dette er en tekst"})});var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div style={{
  width: '200px'
}}>
    <ArrowBox>Dette er en tekst</ArrowBox>
  </div>`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const y=["MedPilPåToppen"];export{n as MedPilPåToppen,y as __namedExportsOrder,$ as default};
