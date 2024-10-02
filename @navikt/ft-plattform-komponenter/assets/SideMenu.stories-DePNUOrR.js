import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as p,R as S}from"./index-RYns6xqu.js";import{u as C}from"./useId-BGrbKP6u.js";import{h as v}from"./index.es-B4W6ZbkF.js";import{c as L}from"./index-Dejnh_W_.js";import{L as I,B as y}from"./Label-BJOKyx8Q.js";var A=function(n,i){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&i.indexOf(e)<0&&(r[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(r[e[t]]=n[e[t]]);return r};const T=p.forwardRef((n,i)=>{var{title:r,titleId:e}=n,t=A(n,["title","titleId"]);let a=C();return a=r?e||"title-"+a:void 0,p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:i,"aria-labelledby":a},t),r?p.createElement("title",{id:a},r):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))}),M=({alt:n})=>s.jsx(T,{title:n,fontSize:"1.5rem",style:{color:"var(--ac-alert-icon-warning-color,var(--a-icon-warning))"}});M.__docgenInfo={description:"",methods:[],displayName:"WarningIcon",props:{alt:{required:!1,tsType:{name:"string"},description:""}}};const N="_menuLink__button_18c28_1",q="_menu-link__button_18c28_65",O="_menu-link__button--active_18c28_65",R="_menuLink__label_18c28_43",B="_menuLink__label_18c28_43",E="_menuLink__label--active_18c28_53",W="_menuLink__label--with-icon_18c28_58",$="_menuLink__icon_18c28_62",z="_menuLink__icon_18c28_62",D="_menuLink--withArrows_18c28_65",H="_menuLink__arrow-right_18c28_74",o={menuLink__button:N,menuLinkButton:q,"menuLink__button--active":"_menuLink__button--active_18c28_19",menuLinkButtonActive:O,menuLink__label:R,menuLinkLabel:B,"menuLink__label--active":"_menuLink__label--active_18c28_53",menuLinkLabelActive:E,"menuLink__label--with-icon":"_menuLink__label--with-icon_18c28_58",menuLinkLabelWithIcon:W,menuLink__icon:$,menuLinkIcon:z,"menuLink--withArrows":"_menuLink--withArrows_18c28_65",menuLinkWithArrows:D,"menu-link__button--active":"_menu-link__button--active_18c28_65","menu-link__button":"_menu-link__button_18c28_65","menu-link__arrow-right":"_menu-link__arrow-right_18c28_68",menuLinkArrowRight:H,"menuLink__arrow-right":"_menuLink__arrow-right_18c28_74"},_=v("menuLink"),x=({label:n,active:i,onClick:r,icon:e,theme:t})=>{const a=t==="arrow",c=g=>{g.preventDefault(),r()},u=L(i?`${o[_.element("label")]} ${o["menuLink__label--active"]}`:o[_.element("label")],{[o["menuLink__label--with-icon"]]:!!e}),l=L(o[_.block],{[o[_.modifier("withArrows")]]:a});return s.jsx("li",{className:l,"aria-current":i?!0:void 0,children:s.jsxs("button",{className:i?`${o[_.element("button")]} ${o["menuLink__button--active"]}`:o[_.element("button")],onClick:c,type:"button","data-testid":i?"activeMenuItemButton":void 0,children:[a&&i?s.jsxs(I,{size:"small",as:"span",className:u,children:[n,e]}):s.jsxs(y,{size:"small",as:"span",className:u,children:[n,e]}),a&&i&&s.jsx("span",{className:o[_.element("arrow-right")]})]})})};x.__docgenInfo={description:"",methods:[],displayName:"MenuLink",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},theme:{required:!1,tsType:{name:"string"},description:""}}};const P="_sideMenu_2s0gl_1",F="_sideMenu__container_2s0gl_5",G="_side-menu__container_2s0gl_28",J="_sideMenu__link-list_2s0gl_13",K="_sideMenu__heading_2s0gl_18",Q="_side-menu__heading_2s0gl_32",U="_sideMenu--arrow_2s0gl_28",m={sideMenu:P,sideMenu__container:F,sideMenuContainer:G,"sideMenu__link-list":"_sideMenu__link-list_2s0gl_13",sideMenuLinkList:J,sideMenu__heading:K,sideMenuHeading:Q,"sideMenu--arrow":"_sideMenu--arrow_2s0gl_28",sideMenuArrow:U,"side-menu__container":"_side-menu__container_2s0gl_28","side-menu__heading":"_side-menu__heading_2s0gl_32"},d=v("sideMenu"),j=({links:n,heading:i,onClick:r,theme:e})=>{const t=L(m[d.block],e?{[m[d.modifier(e)]]:e}:{});return s.jsx("div",{className:t,children:s.jsxs("nav",{className:m[d.element("container")],children:[i&&s.jsx(y,{size:"small",className:m[d.element("heading")],children:i}),s.jsx("ul",{className:m[d.element("link-list")],children:n.map(({label:a,active:c,icon:u},l)=>s.jsx(x,{label:a,active:c,onClick:()=>r(l),icon:u,theme:e},a.split(" ").join("")))})]})})};j.__docgenInfo={description:"",methods:[],displayName:"SideMenu",props:{heading:{required:!1,tsType:{name:"string"},description:""},links:{required:!0,tsType:{name:"Array",elements:[{name:"Link"}],raw:"Link[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},theme:{required:!1,tsType:{name:"literal",value:"'arrow'"},description:""}}};const b=({heading:n,links:i,onClick:r,theme:e})=>{const[t,a]=S.useState(0),c=l=>{a(l),r(l)},u=()=>i.map((l,g)=>({...l,active:t===g}));return s.jsx(j,{heading:n,links:u(),onClick:c,theme:e})};b.__docgenInfo={description:"",methods:[],displayName:"StatefulSideMenu",props:{heading:{required:!1,tsType:{name:"string"},description:""},links:{required:!0,tsType:{name:"Array",elements:[{name:"Link"}],raw:"Link[]"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},theme:{required:!1,tsType:{name:"literal",value:"'arrow'"},description:""}}};const te={title:"Side menu",component:b},V=()=>s.jsx(b,{heading:"Dette er en test",links:[{label:"en link"},{label:"en link til"},{icon:s.jsx(M,{}),label:"en link med ikon",active:!0}],onClick:()=>null}),k=V.bind({});k.args={};var h,f,w;k.parameters={...k.parameters,docs:{...(h=k.parameters)==null?void 0:h.docs,source:{originalSource:`() => <StatefulSideMenuComponent heading="Dette er en test" links={[{
  label: 'en link'
}, {
  label: 'en link til'
}, {
  icon: <WarningIcon />,
  label: 'en link med ikon',
  active: true
}]} onClick={() => null} />`,...(w=(f=k.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const se=["StatefulSideMenu"];export{k as StatefulSideMenu,se as __namedExportsOrder,te as default};
