import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as a}from"./index-RYns6xqu.js";import{f as h}from"./index.es-Bzvrl8hr.js";import{B as d}from"./Label-0oPSAAna.js";import{u as _}from"./useId-BokJARe0.js";var b=function(t,s){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&s.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)s.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(r[e[n]]=t[e[n]]);return r};const y=a.forwardRef((t,s)=>{var{title:r,titleId:e}=t,n=b(t,["title","titleId"]);let l=_();return l=r?e||"title-"+l:void 0,a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))}),x=y;var w=function(t,s){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&s.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)s.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(r[e[n]]=t[e[n]]);return r};const j=a.forwardRef((t,s)=>{var{title:r,titleId:e}=t,n=w(t,["title","titleId"]);let l=_();return l=r?e||"title-"+l:void 0,a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":l},n),r?a.createElement("title",{id:l},r):null,a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))}),O=j,E="_user_13aps_1",T="_user__chevron_13aps_25",I="_user__chevron_13aps_25",C="_user__name_13aps_39",P="_user__name_13aps_39",N="_user__unit_13aps_44",R="_user__unit_13aps_44",i={user:E,user__chevron:T,userChevron:I,user__name:C,userName:P,user__unit:N,userUnit:R},c=h("user"),g=({name:t,unit:s,onClick:r,isToggled:e})=>r?o.jsxs("button",{onClick:r,type:"button",className:i[c.block],"aria-haspopup":"dialog","aria-expanded":e,children:[o.jsxs("span",{children:[o.jsx(d,{size:"small",as:"span",className:i[c.element("name")],children:t}),s&&o.jsx(d,{size:"small",as:"span",className:i[c.element("unit")],children:s})]}),e?o.jsx(O,{className:i[c.element("chevron")]}):o.jsx(x,{className:i[c.element("chevron")]})]}):o.jsxs("div",{className:i[c.block],children:[o.jsx(d,{size:"small",className:i[c.element("name")],children:t}),s&&o.jsx(d,{size:"small",className:i[c.element("unit")],children:s})]}),v=g;g.__docgenInfo={description:"",methods:[],displayName:"UserPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},unit:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FormEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},isToggled:{required:!1,tsType:{name:"boolean"},description:""}}};const M={title:"UserPanel",component:v},S=()=>{const[t,s]=a.useState(!1),r=()=>{s(!t)};return o.jsx("div",{style:{backgroundColor:"black",width:"100px"},children:o.jsx(v,{name:"navn",onClick:r,isToggled:t})})},u=S.bind({});var m,p,f;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(f=(p=u.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const q=["Default"];export{u as Default,q as __namedExportsOrder,M as default};