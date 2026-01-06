import{j as e,A as m}from"./iframe-CjQwzbid.js";import{S as l}from"./ChevronRight-CiU9d0Xm.js";import"./preload-helper-PPVm8Dsz.js";const _="_interactiveList_xgz5w_1",v="_interactiveListElement_xgz5w_6",u="_interactiveListElement__chevron_xgz5w_16",L="_interactiveListElement__button_xgz5w_43",p="_interactiveListElement__button__contentContainer_xgz5w_56",t={interactiveList:_,interactiveListElement:v,interactiveListElement__chevron:u,"interactiveListElement--inactive":"_interactiveListElement--inactive_xgz5w_20","interactiveListElement--active":"_interactiveListElement--active_xgz5w_23",interactiveListElement__button:L,interactiveListElement__button__contentContainer:p},E=s=>{const{content:a,active:n,onClick:c}=s,r=m(t.interactiveListElement,{[t["interactiveListElement--active"]]:n,[t["interactiveListElement--inactive"]]:!n});return e.jsx("li",{className:r,children:e.jsx("button",{className:t.interactiveListElement__button,type:"button",onClick:c,children:e.jsxs("span",{className:t.interactiveListElement__button__contentContainer,children:[a,e.jsx("span",{className:t.interactiveListElement__chevron,children:n?e.jsx(l,{"aria-disabled":!0,fontSize:"1.5rem"}):e.jsx(l,{"aria-disabled":!0,fontSize:"1.5rem",color:"var(--ax-neutral-400)"})})]})})})},o=({elements:s})=>e.jsx("ul",{className:t.interactiveList,children:s.map((a,n)=>{const{key:c,...r}=a;return e.jsx(E,{...r},c??n)})});o.__docgenInfo={description:"",methods:[],displayName:"InteractiveList",props:{elements:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"InteractiveListElement & { key?: string }",elements:[{name:"InteractiveListElement"},{name:"signature",type:"object",raw:"{ key?: string }",signature:{properties:[{key:"key",value:{name:"string",required:!1}}]}}]}],raw:"Array<InteractiveListElement & { key?: string }>"},description:""}}};const x={component:o},i={args:{elements:[{content:"Saken",onClick:()=>null,active:!1},{content:"Medlemskap",onClick:()=>null,active:!1},{content:"Opptjening",onClick:()=>null,active:!0},{content:"Arbeid og inntekt",onClick:()=>null,active:!1}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    elements: [{
      content: 'Saken',
      onClick: () => null,
      active: false
    }, {
      content: 'Medlemskap',
      onClick: () => null,
      active: false
    }, {
      content: 'Opptjening',
      onClick: () => null,
      active: true
    }, {
      content: 'Arbeid og inntekt',
      onClick: () => null,
      active: false
    }]
  }
}`,...i.parameters?.docs?.source}}};const b=["Default"];export{i as Default,b as __namedExportsOrder,x as default};
