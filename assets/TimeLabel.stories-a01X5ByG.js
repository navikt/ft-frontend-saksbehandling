import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{e as o,a as m,n as d}from"./index.es-DIQk1_2L.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dxs5m6lS.js";const i=({dateTimeString:a})=>t.jsx(o,{value:new Date(a),hour:"numeric",minute:"numeric",second:"numeric"});i.__docgenInfo={description:`TimeLabel

Presentasjonskomponent. Formaterer tidspunkt til formatet hh:mm:ss.

Eksempel:
\`\`\`html
<DateTimeLabel dateTimeString="2017-08-02T00:54:25.455" />
\`\`\``,methods:[],displayName:"TimeLabel",props:{dateTimeString:{required:!0,tsType:{name:"string"},description:""}}};const l=d({}),b={title:"ui-komponenter/TimeLabel",component:i},e=()=>t.jsx(m,{value:l,children:t.jsx(i,{dateTimeString:"2020-08-02T00:54:25.455"})});e.__docgenInfo={description:"",methods:[],displayName:"visTidslabel"};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => <RawIntlProvider value={intl}>
    <TimeLabel dateTimeString="2020-08-02T00:54:25.455" />
  </RawIntlProvider>`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const v=["visTidslabel"];export{v as __namedExportsOrder,b as default,e as visTidslabel};
