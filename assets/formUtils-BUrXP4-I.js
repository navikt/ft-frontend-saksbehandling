import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{F as d,c}from"./ReadOnlyIcon-DuqD_nIQ.js";import{a as p}from"./chunk-D5ZWXAHU-Dm3eDOzv.js";import{r as l}from"./index-Dxs5m6lS.js";import{V as f}from"./VStack-Vgssv_xf.js";import{B as g}from"./Button-D0flVHf8.js";const n=({formMethods:r,onSubmit:t,children:e,className:s,setDataOnUnmount:o})=>{const{handleSubmit:i,getValues:m}=r;return l.useEffect(()=>()=>{o&&o(m())},[]),a.jsx(d,{...r,children:a.jsx("form",{className:s,onSubmit:t?i(u=>t(u)):void 0,children:e})})};n.__docgenInfo={description:"",methods:[],displayName:"Form",props:{formMethods:{required:!0,tsType:{name:"UseFormReturn",elements:[{name:"FormValues"}],raw:"UseFormReturn<FormValues>"},description:""},onSubmit:{required:!1,tsType:{name:"SubmitHandler",elements:[{name:"FormValues"}],raw:"SubmitHandler<FormValues>"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},setDataOnUnmount:{required:!1,tsType:{name:"signature",type:"function",raw:"(data?: any) => void",signature:{arguments:[{type:{name:"any"},name:"data"}],return:{name:"void"}}},description:""}}};const V=r=>t=>{const e=c({defaultValues:r});return a.jsx(n,{formMethods:e,onSubmit:p("button-click"),children:a.jsxs(f,{gap:"4",children:[a.jsx(t,{}),a.jsx("div",{children:a.jsx(g,{size:"small",type:"submit",children:"Submit"})})]})})},S=r=>r.reduce((t,e,s)=>({...t,[s]:o=>e(o)||!0}),{}),v=(r,t)=>{const e=t.split(".").reduce((s,o)=>s!==void 0?s[o]:s,r);return e==null?void 0:e.message};export{v as a,S as g,V as r};
