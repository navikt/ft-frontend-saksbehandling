import{j as a}from"./jsx-runtime-_e34SzbC.js";import{t as j,P as x,$ as y,m as v,a as s}from"./nb_NO-BJaGct68.js";import{r as I}from"./index-DVXBtNgz.js";import"./v4-D8aEg3BZ.js";import"./tslib.es6-pJfR_DrR.js";import"./index-Cbx7Fas8.js";const p=j(v),V=({fjernVerge:n,opprettVerge:e,lukkModal:o})=>{const M=I.useCallback(()=>{o();const i=e||n;if(i)return i();throw Error("Skal alltid ha enten opprettVerge eller fjernVerge")},[e,n]);return a.jsx(x,{value:p,children:a.jsx(y,{text:p.formatMessage({id:e?"MenyVergeIndex.OpprettVergeSporsmal":"MenyVergeIndex.FjernVergeSporsmal"}),showModal:!0,submit:M,cancel:o})})},k=V;V.__docgenInfo={description:"",methods:[],displayName:"MenyVergeIndex",props:{fjernVerge:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},opprettVerge:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Promise<void>",signature:{arguments:[],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _={title:"sak/sak-meny-verge",component:k},f=({opprettVerge:n,fjernVerge:e,lukkModal:o})=>a.jsx(k,{opprettVerge:n,fjernVerge:e,lukkModal:o}),r=f.bind({});r.args={opprettVerge:s("button-click"),lukkModal:s("button-click")};const t=f.bind({});t.args={fjernVerge:s("button-click"),lukkModal:s("button-click")};var d,g,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`({
  opprettVerge,
  fjernVerge,
  lukkModal
}) => <MenyVergeIndex opprettVerge={opprettVerge} fjernVerge={fjernVerge} lukkModal={lukkModal} />`,...(m=(g=r.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var l,c,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`({
  opprettVerge,
  fjernVerge,
  lukkModal
}) => <MenyVergeIndex opprettVerge={opprettVerge} fjernVerge={fjernVerge} lukkModal={lukkModal} />`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const E=["LeggeTilVerge","FjerneVerge"];export{t as FjerneVerge,r as LeggeTilVerge,E as __namedExportsOrder,_ as default};
