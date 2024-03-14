import{j as l}from"./jsx-runtime-DRTy3Uxn.js";import{r as a}from"./index-BBkUAzwr.js";import{f as h}from"./index.es-iErfyhIX.js";import{B as d}from"./Label-C8ffuebw.js";import{u as _}from"./useId-4vqqPgaI.js";var b=function(t,s){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&s.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)s.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(n[e[r]]=t[e[r]]);return n};const y=a.forwardRef((t,s)=>{var{title:n,titleId:e}=t,r=b(t,["title","titleId"]);let o=_();return o=n?e||"title-"+o:void 0,a.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:s,"aria-labelledby":o},r),n?a.createElement("title",{id:o},n):null,a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06Z",fill:"currentColor"}))}),x=y;var w=function(t,s){var n={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&s.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,e=Object.getOwnPropertySymbols(t);r<e.length;r++)s.indexOf(e[r])<0&&Object.prototype.propertyIsEnumerable.call(t,e[r])&&(n[e[r]]=t[e[r]]);return n};const j=a.forwardRef((t,s)=>{var{title:n,titleId:e}=t,r=w(t,["title","titleId"]);let o=_();return o=n?e||"title-"+o:void 0,a.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:s,"aria-labelledby":o},r),n?a.createElement("title",{id:o},n):null,a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06l5.5-5.5Z",fill:"currentColor"}))}),O=j,E="_user_13aps_1",T="_user__chevron_13aps_25",I="_user__chevron_13aps_25",C="_user__name_13aps_39",P="_user__name_13aps_39",N="_user__unit_13aps_44",R="_user__unit_13aps_44",i={user:E,user__chevron:T,userChevron:I,user__name:C,userName:P,user__unit:N,userUnit:R},c=h("user"),g=({name:t,unit:s,onClick:n,isToggled:e})=>n?l.jsxs("button",{onClick:n,type:"button",className:i[c.block],"aria-haspopup":"dialog","aria-expanded":e,children:[l.jsxs("span",{children:[l.jsx(d,{size:"small",as:"span",className:i[c.element("name")],children:t}),s&&l.jsx(d,{size:"small",as:"span",className:i[c.element("unit")],children:s})]}),e?l.jsx(O,{className:i[c.element("chevron")]}):l.jsx(x,{className:i[c.element("chevron")]})]}):l.jsxs("div",{className:i[c.block],children:[l.jsx(d,{size:"small",className:i[c.element("name")],children:t}),s&&l.jsx(d,{size:"small",className:i[c.element("unit")],children:s})]}),v=g;g.__docgenInfo={description:"",methods:[],displayName:"UserPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},unit:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},isToggled:{required:!1,tsType:{name:"boolean"},description:""}}};const q={title:"UserPanel",component:v},S=()=>{const[t,s]=a.useState(!1),n=()=>{s(!t)};return l.jsx("div",{style:{backgroundColor:"black",width:"100px"},children:l.jsx(v,{name:"navn",onClick:n,isToggled:t})})},u=S.bind({});var m,p,f;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [isToggled, toggle] = useState(false);
  const doToggle = () => {
    toggle(!isToggled);
  };
  return <div style={{
    backgroundColor: 'black',
    width: '100px'
  }}>
      <UserPanel name="navn" onClick={doToggle} isToggled={isToggled} />
    </div>;
}`,...(f=(p=u.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const z=["Default"];export{u as Default,z as __namedExportsOrder,q as default};
