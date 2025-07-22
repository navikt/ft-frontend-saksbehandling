import{j as e,B as k,D as g,r as x,H as b,A as h}from"./iframe-Da_Jc-u7.js";const v="_menuLink__button_uuvnc_1",M="_menuLink__button__active_uuvnc_19",d={menuLink__button:v,menuLink__button__active:M},m=({label:a,active:n,onClick:s,icon:t})=>{const r=c=>{c.preventDefault(),s()},o=n?`${d.menuLink__button} ${d.menuLink__button__active}`:d.menuLink__button;return e.jsx("li",{"aria-current":n?!0:void 0,children:e.jsxs("button",{className:o,onClick:r,"data-testid":n?"activeMenuItemButton":void 0,children:[e.jsx(k,{size:"small",as:"span",children:a}),t]})})};m.__docgenInfo={description:"",methods:[],displayName:"MenuLink",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const y="_sideMenu__container_ioruc_1",L="_sideMenu__heading_ioruc_10",j="_sideMenu__linkList_ioruc_14",l={sideMenu__container:y,sideMenu__heading:L,sideMenu__linkList:j},_=({links:a,heading:n,onClick:s})=>e.jsxs("nav",{className:l.sideMenu__container,children:[n&&e.jsx(g,{uppercase:!0,className:l.sideMenu__heading,children:n}),e.jsx("ul",{className:l.sideMenu__linkList,children:a.map(({label:t,active:r,icon:o},c)=>e.jsx(m,{label:t,active:r,onClick:()=>s(c),icon:o},t))})]});_.__docgenInfo={description:"",methods:[],displayName:"SideMenu",props:{heading:{required:!1,tsType:{name:"string"},description:""},links:{required:!0,tsType:{name:"Array",elements:[{name:"Link"}],raw:"Link[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const S={component:_,render:({heading:a,links:n,onClick:s})=>{const[t,r]=x.useState(n.findIndex(({active:i})=>i)??0),o=i=>{r(i),s(i)},c=n.map((i,p)=>({...i,active:t===p}));return e.jsx("div",{style:{width:"400px",border:"1px dotted black"},children:e.jsxs(b,{children:[e.jsx(_,{heading:a,links:c,onClick:o}),e.jsx("div",{style:{width:"200px",height:"800px",padding:"24px"},children:"annet innhold"})]})})}},u={args:{heading:"Fakta om",links:[{label:"Saken"},{label:"Medlemskap"},{icon:e.jsx(h,{fontSize:"1rem",color:"var(--a-icon-warning)"}),label:"Opptjening",active:!0},{label:"Arbeid og inntekt"}],onClick:()=>null}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Fakta om',
    links: [{
      label: 'Saken'
    }, {
      label: 'Medlemskap'
    }, {
      icon: <ExclamationmarkTriangleFillIcon fontSize="1rem" color={'var(--a-icon-warning)'} />,
      label: 'Opptjening',
      active: true
    }, {
      label: 'Arbeid og inntekt'
    }],
    onClick: () => null
  }
}`,...u.parameters?.docs?.source}}};const C=["Default"];export{u as Default,C as __namedExportsOrder,S as default};
