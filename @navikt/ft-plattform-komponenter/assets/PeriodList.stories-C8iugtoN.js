import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{_ as C,S as b}from"./index.es-PiPCWU1f.js";import{H as y,L as _,B as k}from"./Label-1o6TJYyt.js";import"./index-C9rmetsa.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C7aUCl1g.js";const g=({size:r,children:i})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i});g.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!0,tsType:{name:"number"},description:""}}};const v=()=>e.jsx(g,{size:24,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.75 5.54167V3.95833H1.58333L1.58333 7.91667H17.4167V3.95833H14.25V5.54167C14.25 5.97889 13.8956 6.33333 13.4583 6.33333C13.0211 6.33333 12.6667 5.97889 12.6667 5.54167V3.95833H6.33333V5.54167C6.33333 5.97889 5.97889 6.33333 5.54167 6.33333C5.10444 6.33333 4.75 5.97889 4.75 5.54167ZM12.6667 2.375H6.33333V0.791667C6.33333 0.354441 5.97889 0 5.54167 0C5.10444 0 4.75 0.354441 4.75 0.791667V2.375H1.58333C0.708883 2.375 0 3.08388 0 3.95833V17.4167C0 18.2911 0.708882 19 1.58333 19H17.4167C18.2911 19 19 18.2911 19 17.4167V3.95833C19 3.08388 18.2911 2.375 17.4167 2.375H14.25V0.791667C14.25 0.354441 13.8956 0 13.4583 0C13.0211 0 12.6667 0.354441 12.6667 0.791667V2.375ZM1.58333 9.5L1.58333 17.4167H17.4167V9.5H1.58333ZM6.33333 11.875C6.33333 11.4378 5.97889 11.0833 5.54167 11.0833H3.95833C3.52111 11.0833 3.16667 11.4378 3.16667 11.875C3.16667 12.3122 3.52111 12.6667 3.95833 12.6667H5.54167C5.97889 12.6667 6.33333 12.3122 6.33333 11.875ZM5.54167 14.25C5.97889 14.25 6.33333 14.6044 6.33333 15.0417C6.33333 15.4789 5.97889 15.8333 5.54167 15.8333H3.95833C3.52111 15.8333 3.16667 15.4789 3.16667 15.0417C3.16667 14.6044 3.52111 14.25 3.95833 14.25H5.54167ZM10.2917 11.0833H8.70833C8.27111 11.0833 7.91667 11.4378 7.91667 11.875C7.91667 12.3122 8.27111 12.6667 8.70833 12.6667H10.2917C10.7289 12.6667 11.0833 12.3122 11.0833 11.875C11.0833 11.4378 10.7289 11.0833 10.2917 11.0833ZM8.70833 14.25H10.2917C10.7289 14.25 11.0833 14.6044 11.0833 15.0417C11.0833 15.4789 10.7289 15.8333 10.2917 15.8333H8.70833C8.27111 15.8333 7.91667 15.4789 7.91667 15.0417C7.91667 14.6044 8.27111 14.25 8.70833 14.25ZM15.8333 11.875C15.8333 11.4378 15.4789 11.0833 15.0417 11.0833H13.4583C13.0211 11.0833 12.6667 11.4378 12.6667 11.875C12.6667 12.3122 13.0211 12.6667 13.4583 12.6667H15.0417C15.4789 12.6667 15.8333 12.3122 15.8333 11.875ZM12.6667 15.0417C12.6667 14.6044 13.0211 14.25 13.4583 14.25H15.0417C15.4789 14.25 15.8333 14.6044 15.8333 15.0417C15.8333 15.4789 15.4789 15.8333 15.0417 15.8333H13.4583C13.0211 15.8333 12.6667 15.4789 12.6667 15.0417Z",fill:"#3E3832"})});v.__docgenInfo={description:"",methods:[],displayName:"CalendarIcon"};const f="_periodList_p4azb_1",j="_element_p4azb_6",H="_title_p4azb_13",h="_period_p4azb_1",x="_content_p4azb_21",L="_item_p4azb_33",a={periodList:f,element:j,title:H,period:h,content:x,item:L},o=({perioder:r,tittel:i,customRenderFunc:m})=>!r||!Array.isArray(r)?null:e.jsxs(e.Fragment,{children:[i&&e.jsx(y,{spacing:!0,size:"xsmall",level:"4",children:i}),e.jsx("ul",{className:a.periodList,children:r.map(t=>({period:new C(t.fom,t.tom),items:t.items})).sort((t,n)=>b(t.period,n.period)).map(t=>{const{period:n,items:d=[]}=t;return e.jsxs("li",{className:a.element,children:[e.jsxs("div",{className:a.title,children:[e.jsx(v,{}),e.jsx("span",{className:a.period,children:n.prettifyPeriod()})]}),m?m(d):e.jsx("div",{className:a.content,children:d.map(l=>e.jsxs("div",{className:a.item,children:[e.jsx(_,{size:"small",children:l.label}),e.jsx(k,{size:"small",children:l.value})]},l.label))})]},n.fom)})})]});o.__docgenInfo={description:"",methods:[],displayName:"PeriodList",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  items: Item[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Item[]",required:!0}}]}}],raw:"Periode[]"},description:""},tittel:{required:!0,tsType:{name:"string"},description:""},customRenderFunc:{required:!1,tsType:{name:"signature",type:"function",raw:"(items: { label: string; value: string }[]) => JSX.Element | null",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{ label: string; value: string }[]"},name:"items"}],return:{name:"union",raw:"JSX.Element | null",elements:[{name:"JSX.Element"},{name:"null"}]}}},description:""}}};const I={title:"Period list",component:o},w=[{fom:"2022-02-16",tom:"2022-02-23",items:[{label:"Land",value:"Luxemburg"},{label:"EØS",value:"Ja"},{label:"Årsak",value:"Ukjent årsak"}]},{fom:"2022-02-08",tom:"2022-02-15",items:[{label:"Land",value:"Kina"},{label:"EØS",value:"Nei"},{label:"Årsak",value:"Ingen, telles i 8 uker."}]},{fom:"2022-02-01",tom:"2022-02-07",items:[{label:"Land",value:"Mosambik"},{label:"EØS",value:"Nei"},{label:"Årsak",value:"Barnet er innlagt i helseinstitusjon dekket etter avtale med annet land om trygd (mottar pleiepenger som i Norge, telles ikke i 8 uker)"}]},{fom:"2022-01-24",tom:"2022-01-31",items:[{label:"Land",value:"Finland"},{label:"EØS",value:"Ja"},{label:"Årsak",value:"Ukjent årsak"}]},{fom:"2022-01-16",tom:"2022-01-23",items:[{label:"Land",value:"Tyrkia"},{label:"EØS",value:"Nei"},{label:"Årsak",value:"Barnet er innlagt i helseinstitusjon for norsk offentlig regning (mottar pleiepenger som i Norge, telles ikke i 8 uker)"}]}],N=()=>e.jsx(o,{perioder:w,tittel:"Perioder"}),s=N.bind({});var u,p,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:'() => <PeriodList perioder={perioder} tittel="Perioder" />',...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const M=["Perioder"];export{s as Perioder,M as __namedExportsOrder,I as default};
