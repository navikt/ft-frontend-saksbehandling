import{j as e,B as b,D as h,r as v,H as M,A as y}from"./iframe-C7Bd7qJ1.js";const L="_menuLink__button_uuvnc_1",j="_menuLink__button__active_uuvnc_19",d={menuLink__button:L,menuLink__button__active:j},g=({label:a,active:n,onClick:s,icon:t})=>{const r=c=>{c.preventDefault(),s()},o=n?`${d.menuLink__button} ${d.menuLink__button__active}`:d.menuLink__button;return e.jsx("li",{"aria-current":n?!0:void 0,children:e.jsxs("button",{className:o,onClick:r,"data-testid":n?"activeMenuItemButton":void 0,children:[e.jsx(b,{size:"small",as:"span",children:a}),t]})})};g.__docgenInfo={description:"",methods:[],displayName:"MenuLink",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const f="_sideMenu__container_ioruc_1",S="_sideMenu__heading_ioruc_10",C="_sideMenu__linkList_ioruc_14",l={sideMenu__container:f,sideMenu__heading:S,sideMenu__linkList:C},_=({links:a,heading:n,onClick:s})=>e.jsxs("nav",{className:l.sideMenu__container,children:[n&&e.jsx(h,{uppercase:!0,className:l.sideMenu__heading,children:n}),e.jsx("ul",{className:l.sideMenu__linkList,children:a.map(({label:t,active:r,icon:o},c)=>e.jsx(g,{label:t,active:r,onClick:()=>s(c),icon:o},t))})]});_.__docgenInfo={description:"",methods:[],displayName:"SideMenu",props:{heading:{required:!1,tsType:{name:"string"},description:""},links:{required:!0,tsType:{name:"Array",elements:[{name:"Link"}],raw:"Link[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const w={component:_,render:({heading:a,links:n,onClick:s})=>{const[t,r]=v.useState(n.findIndex(({active:i})=>i)??0),o=i=>{r(i),s(i)},c=n.map((i,x)=>({...i,active:t===x}));return e.jsx("div",{style:{width:"400px",border:"1px dotted black"},children:e.jsxs(M,{children:[e.jsx(_,{heading:a,links:c,onClick:o}),e.jsx("div",{style:{width:"200px",height:"800px",padding:"24px"},children:"annet innhold"})]})})}},u={args:{heading:"Fakta om",links:[{label:"Saken"},{label:"Medlemskap"},{icon:e.jsx(y,{fontSize:"1rem",color:"var(--a-icon-warning)"}),label:"Opptjening",active:!0},{label:"Arbeid og inntekt"}],onClick:()=>null}};var m,p,k;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(k=(p=u.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const N=["Default"];export{u as Default,N as __namedExportsOrder,w as default};
