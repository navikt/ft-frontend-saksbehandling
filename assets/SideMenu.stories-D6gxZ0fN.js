import{j as e,B as k,f as x,r as g,H as b,$ as h}from"./iframe-AHoChqZU.js";import"./preload-helper-PPVm8Dsz.js";const v="_menuLink__button_12sod_1",M="_menuLink__button__active_12sod_19",l={menuLink__button:v,menuLink__button__active:M},m=({label:a,active:n,onClick:s,icon:t})=>{const r=d=>{d.preventDefault(),s()},o=n?`${l.menuLink__button} ${l.menuLink__button__active}`:l.menuLink__button;return e.jsx("li",{"aria-current":n?!0:void 0,children:e.jsxs("button",{className:o,onClick:r,"data-testid":n?"activeMenuItemButton":void 0,children:[e.jsx(k,{size:"small",as:"span",children:a}),t]})})};m.__docgenInfo={description:"",methods:[],displayName:"MenuLink",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const y="_sideMenu__container_d7a08_1",L="_sideMenu__heading_d7a08_10",f="_sideMenu__linkList_d7a08_14",u={sideMenu__container:y,sideMenu__heading:L,sideMenu__linkList:f},_=({links:a,heading:n,onClick:s})=>e.jsxs("nav",{className:u.sideMenu__container,children:[n&&e.jsx(x,{uppercase:!0,className:u.sideMenu__heading,children:n}),e.jsx("ul",{className:u.sideMenu__linkList,children:a.map(({label:t,active:r,icon:o},d)=>e.jsx(m,{label:t,active:r,onClick:()=>s(d),icon:o},t))})]});_.__docgenInfo={description:"",methods:[],displayName:"SideMenu",props:{heading:{required:!1,tsType:{name:"string"},description:""},links:{required:!0,tsType:{name:"Array",elements:[{name:"Link"}],raw:"Link[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const C={component:_,render:({heading:a,links:n,onClick:s})=>{const[t,r]=g.useState(n.findIndex(({active:i})=>i)??0),o=i=>{r(i),s(i)},d=n.map((i,p)=>({...i,active:t===p}));return e.jsx("div",{style:{width:"400px",border:"1px dotted black"},children:e.jsxs(b,{children:[e.jsx(_,{heading:a,links:d,onClick:o}),e.jsx("div",{style:{width:"200px",height:"800px",padding:"24px"},children:"annet innhold"})]})})}},c={args:{heading:"Fakta om",links:[{label:"Saken"},{label:"Medlemskap"},{icon:e.jsx(h,{fontSize:"1rem",color:"var(--ax-text-warning-decoration)"}),label:"Opptjening",active:!0},{label:"Arbeid og inntekt"}],onClick:()=>null}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    heading: 'Fakta om',
    links: [{
      label: 'Saken'
    }, {
      label: 'Medlemskap'
    }, {
      icon: <ExclamationmarkTriangleFillIcon fontSize="1rem" color={'var(--ax-text-warning-decoration)'} />,
      label: 'Opptjening',
      active: true
    }, {
      label: 'Arbeid og inntekt'
    }],
    onClick: () => null
  }
}`,...c.parameters?.docs?.source}}};const T=["Default"];export{c as Default,T as __namedExportsOrder,C as default};
