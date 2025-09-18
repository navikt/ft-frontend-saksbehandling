import{j as e}from"./iframe-DzXUO6GT.js";import{c as m}from"./index-50MxYUEY.js";import{S as l}from"./ChevronRight-DwaK_uWQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DZKQXQUP.js";const _="_interactiveList_xgz5w_1",v="_interactiveListElement_xgz5w_6",u="_interactiveListElement__chevron_xgz5w_16",p="_interactiveListElement__button_xgz5w_43",L="_interactiveListElement__button__contentContainer_xgz5w_56",t={interactiveList:_,interactiveListElement:v,interactiveListElement__chevron:u,"interactiveListElement--inactive":"_interactiveListElement--inactive_xgz5w_20","interactiveListElement--active":"_interactiveListElement--active_xgz5w_23",interactiveListElement__button:p,interactiveListElement__button__contentContainer:L},E=s=>{const{content:a,active:n,onClick:r}=s,c=m(t.interactiveListElement,{[t["interactiveListElement--active"]]:n,[t["interactiveListElement--inactive"]]:!n});return e.jsx("li",{className:c,children:e.jsx("button",{className:t.interactiveListElement__button,type:"button",onClick:r,children:e.jsxs("span",{className:t.interactiveListElement__button__contentContainer,children:[a,e.jsx("span",{className:t.interactiveListElement__chevron,children:n?e.jsx(l,{"aria-disabled":!0,fontSize:"1.5rem"}):e.jsx(l,{"aria-disabled":!0,fontSize:"1.5rem",color:"var(--ax-neutral-400)"})})]})})})},o=({elements:s})=>e.jsx("ul",{className:t.interactiveList,children:s.map((a,n)=>{const{key:r,...c}=a;return e.jsx(E,{...c},r??n)})});o.__docgenInfo={description:"",methods:[],displayName:"InteractiveList",props:{elements:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"InteractiveListElement & { key?: string }",elements:[{name:"InteractiveListElement"},{name:"signature",type:"object",raw:"{ key?: string }",signature:{properties:[{key:"key",value:{name:"string",required:!1}}]}}]}],raw:"Array<InteractiveListElement & { key?: string }>"},description:""}}};const b={component:o},i={args:{elements:[{content:"Saken",onClick:()=>null,active:!1},{content:"Medlemskap",onClick:()=>null,active:!1},{content:"Opptjening",onClick:()=>null,active:!0},{content:"Arbeid og inntekt",onClick:()=>null,active:!1}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const C=["Default"];export{i as Default,C as __namedExportsOrder,b as default};
