import{j as r}from"./jsx-runtime-9c4ae004.js";import{r as p,R as C}from"./index-1b03fe98.js";import{m as y}from"./index.es-469db50a.js";import{c as b}from"./index-91038615.js";import{L as j}from"./Label-845e62a7.js";import{B as x}from"./BodyShort-469443d1.js";import{u as I}from"./useId-49f44336.js";import"./clsx.m-1229b3e0.js";import"./util-5af9592f.js";var A=globalThis&&globalThis.__rest||function(n,t){var l={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(l[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,e=Object.getOwnPropertySymbols(n);i<e.length;i++)t.indexOf(e[i])<0&&Object.prototype.propertyIsEnumerable.call(n,e[i])&&(l[e[i]]=n[e[i]]);return l};const N=p.forwardRef((n,t)=>{var{title:l,titleId:e}=n,i=A(n,["title","titleId"]);let a=I();return a=l?e||"title-"+a:void 0,p.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:t,"aria-labelledby":a},i),l?p.createElement("title",{id:a},l):null,p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25ZM12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75Zm-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",fill:"currentColor"}))}),q=N,O="_menuLink__button_18c28_1",V="_menu-link__button_18c28_65",E="_menu-link__button--active_18c28_65",R="_menuLink__label_18c28_43",B="_menuLink__label_18c28_43",T="_menuLink__label--active_18c28_53",$="_menuLink__label--with-icon_18c28_58",D="_menuLink__icon_18c28_62",W="_menuLink__icon_18c28_62",z="_menuLink--withArrows_18c28_65",F="_menuLink__arrow-right_18c28_74",s={menuLink__button:O,menuLinkButton:V,"menuLink__button--active":"_menuLink__button--active_18c28_19",menuLinkButtonActive:E,menuLink__label:R,menuLinkLabel:B,"menuLink__label--active":"_menuLink__label--active_18c28_53",menuLinkLabelActive:T,"menuLink__label--with-icon":"_menuLink__label--with-icon_18c28_58",menuLinkLabelWithIcon:$,menuLink__icon:D,menuLinkIcon:W,"menuLink--withArrows":"_menuLink--withArrows_18c28_65",menuLinkWithArrows:z,"menu-link__button--active":"_menu-link__button--active_18c28_65","menu-link__button":"_menu-link__button_18c28_65","menu-link__arrow-right":"_menu-link__arrow-right_18c28_68",menuLinkArrowRight:F,"menuLink__arrow-right":"_menuLink__arrow-right_18c28_74"},u=y("menuLink"),g=({label:n,active:t,onClick:l,icon:e,theme:i})=>{const a=i==="arrow",c=L=>{L.preventDefault(),l()},_=b(t?`${s[u.element("label")]} ${s["menuLink__label--active"]}`:s[u.element("label")],{[s["menuLink__label--with-icon"]]:!!e}),o=b(s[u.block],{[s[u.modifier("withArrows")]]:a});return r.jsx("li",{className:o,"aria-current":t?!0:void 0,children:r.jsxs("button",{className:t?`${s[u.element("button")]} ${s["menuLink__button--active"]}`:s[u.element("button")],onClick:c,type:"button","data-testid":t?"activeMenuItemButton":void 0,children:[a&&t?r.jsxs(j,{size:"small",as:"span",className:_,children:[n,e]}):r.jsxs(x,{size:"small",as:"span",className:_,children:[n,e]}),a&&t&&r.jsx("span",{className:s[u.element("arrow-right")]})]})})};try{g.displayName="MenuLink",g.__docgenInfo={description:"",displayName:"MenuLink",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"string"}}}}}catch{}const H="_sideMenu_2s0gl_1",P="_sideMenu__container_2s0gl_5",Z="_side-menu__container_2s0gl_28",G="_sideMenu__link-list_2s0gl_13",J="_sideMenu__heading_2s0gl_18",K="_side-menu__heading_2s0gl_32",Q="_sideMenu--arrow_2s0gl_28",m={sideMenu:H,sideMenu__container:P,sideMenuContainer:Z,"sideMenu__link-list":"_sideMenu__link-list_2s0gl_13",sideMenuLinkList:G,sideMenu__heading:J,sideMenuHeading:K,"sideMenu--arrow":"_sideMenu--arrow_2s0gl_28",sideMenuArrow:Q,"side-menu__container":"_side-menu__container_2s0gl_28","side-menu__heading":"_side-menu__heading_2s0gl_32"},d=y("sideMenu"),f=({links:n,heading:t,onClick:l,theme:e})=>{const i=b(m[d.block],e?{[m[d.modifier(e)]]:e}:{});return r.jsx("div",{className:i,children:r.jsxs("nav",{className:m[d.element("container")],children:[t&&r.jsx(x,{size:"small",className:m[d.element("heading")],children:t}),r.jsx("ul",{className:m[d.element("link-list")],children:n.map(({label:a,active:c,icon:_},o)=>r.jsx(g,{label:a,active:c,onClick:()=>l(o),icon:_,theme:e},a.split(" ").join("")))})]})})};try{f.displayName="SideMenu",f.__docgenInfo={description:"",displayName:"SideMenu",props:{heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"Link[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(index: number) => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"arrow"'}]}}}}}catch{}const h=({heading:n,links:t,onClick:l,theme:e})=>{const[i,a]=C.useState(0),c=o=>{a(o),l(o)},_=()=>t.map((o,L)=>({...o,active:i===L}));return r.jsx(f,{heading:n,links:_(),onClick:c,theme:e})},S=h;try{h.displayName="StatefulSideMenu",h.__docgenInfo={description:"",displayName:"StatefulSideMenu",props:{heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"string"}},links:{defaultValue:null,description:"",name:"links",required:!0,type:{name:"Link[]"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(index: number) => void"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"arrow"'}]}}}}}catch{}const se={title:"Side menu",component:S},U=()=>r.jsx(S,{heading:"Dette er en test",links:[{label:"en link"},{label:"en link til"},{icon:r.jsx(q,{title:"Dette er en ikontittel",style:{color:"orange"}}),label:"en link med ikon",active:!0}],onClick:()=>null}),k=U.bind({});k.args={};var M,v,w;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`() => <StatefulSideMenuComponent heading="Dette er en test" links={[{
  label: 'en link'
}, {
  label: 'en link til'
}, {
  icon: <ExclamationmarkTriangleFillIcon title="Dette er en ikontittel" style={{
    color: 'orange'
  }} />,
  label: 'en link med ikon',
  active: true
}]} onClick={() => null} />`,...(w=(v=k.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const oe=["StatefulSideMenu"];export{k as StatefulSideMenu,oe as __namedExportsOrder,se as default};
//# sourceMappingURL=SideMenu.stories-a6725c62.js.map