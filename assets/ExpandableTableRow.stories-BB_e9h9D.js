import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as i}from"./index-B5OHeJSP.js";import{c as h}from"./bind-oYjWB_aQ.js";import{n as _}from"./index.es-Dh3mAfPy.js";import{F as R}from"./FloatRight-bavPnO-e.js";import{a as l,b as o,T as c}from"./Table-DmHMRR_8.js";import{m as T}from"./nb_NO-7Llcbk-T.js";import{S as j}from"./ChevronUp-Ccwg1nee.js";import{S as N}from"./ChevronDown-Bw2TG6jd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D9DDUrbY.js";import"./message-BcVJpMje.js";import"./useId-B9OmVTHV.js";const k="_hidden_1pb4f_1",y="_active_1pb4f_8",E="_activeRow_1pb4f_15 _active_1pb4f_8",S="_toggleIcon_1pb4f_19",w="_colTopPadding_1pb4f_22",r={hidden:k,active:y,activeRow:E,toggleIcon:S,colTopPadding:w},A=h.bind(r),m=_(T),g=({showContent:a,content:s,toggleContent:t,children:b,isApLeftBorder:d=!1,alignWithColumn:v=0})=>e.jsxs(e.Fragment,{children:[e.jsxs(l,{onMouseDown:t,onKeyDown:t,hasNoBottomBorder:a,isApLeftBorder:d,noHover:a,isSelected:a,children:[b,e.jsx(o,{className:A("toggleIcon",a?"colTopPadding":void 0),children:e.jsxs(R,{children:[a&&e.jsx(j,{title:m.formatMessage({id:"ExpandableTableRow.Lukke"}),fontSize:"1.5rem"}),!a&&e.jsx(N,{title:m.formatMessage({id:"ExpandableTableRow.Apne"}),fontSize:"1.5rem"})]})})]}),e.jsxs(l,{noHover:!0,isApLeftBorder:d,className:a?r.activeRow:r.hidden,isSelected:a,children:[[...Array(v)].map((q,x)=>e.jsx(o,{className:a?r.active:r.hidden},x)),e.jsx(o,{colspanAll:!0,className:a?r.active:r.hidden,children:e.jsx("div",{className:a?r.active:r.hidden,children:s})})]})]});g.__docgenInfo={description:"@deprecated Bruk heller tabellkomponent fra https://aksel.nav.no/komponenter/core/table",methods:[],displayName:"ExpandableTableRow",props:{showContent:{required:!0,tsType:{name:"boolean"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},toggleContent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},isApLeftBorder:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alignWithColumn:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const K={title:"ui-komponenter/TableMedEkspanderbarRad",component:c,args:{children:e.jsx(e.Fragment,{})},render:()=>{const[a,s]=i.useState(!1),t=i.useCallback(()=>s(!a),[a]);return e.jsx(c,{headerColumnContent:[e.jsx("div",{children:"Navn"},"1"),e.jsx("div",{children:"Alder"},"2")],noHover:!0,children:e.jsxs(g,{isApLeftBorder:!0,showContent:a,toggleContent:t,content:e.jsx("div",{children:"Innhold i rad"}),alignWithColumn:0,children:[e.jsx(o,{children:"Auto Joakim"}),e.jsx(o,{children:"35"})]})})}},n={};var p,u,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const O=["TabellMedEkspanderbarRad"];export{n as TabellMedEkspanderbarRad,O as __namedExportsOrder,K as default};
