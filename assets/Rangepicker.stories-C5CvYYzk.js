import{g as le,a as re,r as ge}from"./formUtils-BUrXP4-I.js";import{j as C}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./index-Dxs5m6lS.js";import{u as je,a as ne}from"./ReadOnlyIcon-DuqD_nIQ.js";import{d as h,A as I,P as E}from"./index.es-DIQk1_2L.js";import{c as Ne}from"./customParseFormat-zfDQtV6X.js";import{R as Me}from"./ReadOnlyField-Bpuw-EuI.js";import{p as z,i as N,d as S,b as Ee,a as W}from"./useDateTranslationContext-BEjj1I9s.js";import{u as xe}from"./Loader-BHKWc60O.js";import{f as b,i as w,g as Ce,D as ee}from"./DatePicker-7k2LUc-P.js";import"./Provider-B4A31v_2.js";import{V as We,H as we}from"./VStack-Vgssv_xf.js";import{L as qe}from"./Label-g0SsZd4P.js";import"./chunk-D5ZWXAHU-Dm3eDOzv.js";import"./v4-CtRu48qb.js";import"./Button-D0flVHf8.js";import"./clsx-B-dksMZM.js";import"./omit-B7stZg_p.js";import"./useId-BdcioVLy.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useId-B9cQ8Pho.js";import"./index.es-Cx4R7XRv.js";import"./Alert-BC6DEIhx.js";import"./ExclamationmarkTriangleFill-DkXWnTRW.js";import"./XMarkOctagonFill-Ct54z8PV.js";import"./XMark-HQCrC0kG.js";import"./PersonPencilFill-DeEWAwj3.js";import"./Box-B-JCHjPf.js";import"./Theme-D6t0sq75.js";import"./create-context-B5rPGqtO.js";import"./BasePrimitive-CCRtmZcj.js";import"./KeyVerticalFill-DGPAogWB.js";import"./Checkmark-ARqG-vXH.js";import"./ChevronDown-TCQpyZRB.js";import"./Modal-B1D1msXx.js";import"./floating-ui.react-BIOaLlQ7.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";import"./useFormField-CUgZtuoq.js";import"./Popover-D50D0eUh.js";import"./useClientLayoutEffect-BVjwYvME.js";import"./Select-gs1Ydqxl.js";const te=(t={},i={})=>({from:Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},t),to:Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isBeforeFrom:!1,isValidDate:!0},i)}),P={FROM:"FROM",TO:"TO"},Be=(t,i)=>{const a=(i==null?void 0:i.fromDate)&&t&&S(i==null?void 0:i.fromDate,t)>0,d=(i==null?void 0:i.toDate)&&t&&S(t,i==null?void 0:i.toDate)>0;if(N(t)&&!(i!=null&&i.disableWeekends&&w(t))&&!(i!=null&&i.disabled&&W(t,i.disabled)))return{isValidDate:!1,isInvalid:!N(t),isWeekend:(i==null?void 0:i.disableWeekends)&&w(t),isDisabled:(i==null?void 0:i.disabled)&&W(t,i.disabled),isBefore:a,isAfter:d};if(a||d)return{isValidDate:!1,isBefore:a,isAfter:d}},_e=(t,i,a)=>{var d;const V=(a==null?void 0:a.fromDate)&&t&&S(a==null?void 0:a.fromDate,t)>0,F=(a==null?void 0:a.toDate)&&t&&S(t,a==null?void 0:a.toDate)>0,m=(d=i&&S(i,t)>0)!==null&&d!==void 0?d:!1;if(N(t)&&!(a!=null&&a.disableWeekends&&w(t))&&!(a!=null&&a.disabled&&W(t,a.disabled)))return{isValidDate:!1,isInvalid:!N(t),isWeekend:(a==null?void 0:a.disableWeekends)&&w(t),isDisabled:(a==null?void 0:a.disabled)&&W(t,a.disabled),isBefore:V,isAfter:F,isBeforeFrom:m};if(V||F||m)return{isValidDate:!1,isBefore:V,isAfter:F,isBeforeFrom:m}},oe=(t,i)=>{if(!t||!(t!=null&&t.from))return te({isEmpty:!0,isValidDate:!1},{isEmpty:!0,isValidDate:!1});const a=Be(t.from,i),d=t.to?_e(t.to,t.from,i):{isEmpty:!0,isValidDate:!1};return te(Object.assign({},a),Object.assign({},d))},Ae=(t={})=>{const{locale:i,defaultSelected:a,today:d=new Date,fromDate:V,toDate:F,disabled:m,disableWeekends:q,onRangeChange:_,inputFormat:v,onValidate:B,defaultMonth:p,allowTwoDigitYear:k=!0}=t,[M,y]=D.useState(null),A=xe(),f=i?Ce(i):A,[l,L]=D.useState(a),[J,g]=D.useState(l?l==null?void 0:l.from:p??d),[o,K]=D.useState(l??{from:void 0,to:void 0}),[Q,j]=D.useState(l!=null&&l.from?b(l.from,f,"date",v):""),[n,u]=D.useState(l!=null&&l.to?b(l.to,f,"date",v):""),[c,U]=D.useState(oe(o,t)),[Fe,X]=D.useState(!1),O=e=>{_==null||_(e),K(e)},T=(e={},s={})=>{const r=te(e,s);U(r),B==null||B(r)},he=()=>{O(l??{from:void 0,to:void 0}),g(l?l==null?void 0:l.from:p??d),U(oe(l??{from:void 0,to:void 0},t)),j(l!=null&&l.from?b(l.from,f,"date",v):""),u(l!=null&&l.to?b(l.to,f,"date",v):""),L(a)},Se=e=>{O(e),j(e!=null&&e.from?b(e.from,f,"date",v):""),u(e!=null&&e.to?b(e==null?void 0:e.to,f,"date",v):""),U(oe(e,t))},ie=(e,s)=>{if(e.target.readOnly)return;const r=z(e.target.value,d,f,"date",k);if(N(r)){s===P.FROM?j(b(r,f,"date",v)):u(b(r,f,"date",v));const R=V&&r&&S(V,r)>0,x=F&&r&&S(r,F)>0;!R&&!x&&g(r)}},ae=(e,s)=>{const r=z(e.target.value,d,f,"date",k);N(r)&&(s===P.FROM?j(b(r,f,"date",v)):s===P.TO&&u(b(r,f,"date",v)))},Z=e=>N(e)&&!(q&&w(e))&&!(m&&W(e,m)),Te=e=>{e!=null&&e.from&&(e!=null&&e.to)&&(X(!1),M==null||M.focus());const s=!(o!=null&&o.from)&&(o!=null&&o.to)?o==null?void 0:o.to:e==null?void 0:e.to,r=Ee(s,e==null?void 0:e.from);e!=null&&e.from?j(b(e==null?void 0:e.from,f,"date",v)):j(""),u(s&&!r?b(s,f,"date",v):""),O({from:e==null?void 0:e.from,to:r?void 0:s}),T({isValidDate:!!(e!=null&&e.from),isEmpty:!(e!=null&&e.from)},{isValidDate:!!(e!=null&&e.to),isEmpty:!s||r})},Ie=(e="",s,r=!1,R=!1)=>{if(j(e),!Z(s)){O(Object.assign(Object.assign({},o),{from:void 0})),T({isEmpty:!e,isValidDate:!1,isInvalid:!N(s),isWeekend:q&&w(s),isDisabled:m&&W(s,m),isBefore:r,isAfter:R},c.to);return}if(r||R){O(Object.assign(Object.assign({},o),{from:void 0})),T({isValidDate:!1,isBefore:r,isAfter:R},c.to);return}if(o!=null&&o.to&&S(s,o==null?void 0:o.to)>0){O({to:s,from:s}),u(b(s,f,"date",v)),g(s),T();return}if(n&&!(o!=null&&o.to)){const x=z(n,d,f,"date",k);if(Z(x)){O({from:s,to:x}),g(s),T();return}}O(Object.assign(Object.assign({},o),{from:s})),T({},c.to),g(s)},Pe=(e="",s,r=!1,R=!1)=>{if(u(e),!Z(s)){O({from:o==null?void 0:o.from,to:void 0}),T(c.from,{isEmpty:!e,isValidDate:!1,isInvalid:!N(s),isWeekend:q&&w(s),isDisabled:m&&W(s,m),isBefore:r,isAfter:R});return}if(r||R){O({from:o==null?void 0:o.from,to:void 0}),T(c.from,{isValidDate:!1,isBefore:r,isAfter:R});return}if(o!=null&&o.from&&S(o==null?void 0:o.from,s)>0){O({from:o==null?void 0:o.from,to:void 0}),T(c.from,{isValidDate:!1,isBeforeFrom:!0});return}O({from:o==null?void 0:o.from,to:s}),T(c.from,{}),g(s)},se=(e,s)=>{const r=z(e.target.value,d,f,"date",k),R=V&&S(V,r)>0,x=F&&S(r,F)>0;return s===P.FROM?Ie(e.target.value,r,R,x):Pe(e.target.value,r,R,x)};return{datepickerProps:{month:J,onMonthChange:g,onSelect:Te,selected:o,locale:i,fromDate:V,toDate:F,today:d,mode:"range",open:Fe,onOpenToggle:()=>X(e=>!e),onClose:()=>{X(!1),M==null||M.focus()},disabled:m,disableWeekends:q},fromInputProps:{onChange:e=>se(e,P.FROM),onFocus:e=>ie(e,P.FROM),onBlur:e=>ae(e,P.FROM),value:Q,setAnchorRef:y},toInputProps:{onChange:e=>se(e,P.TO),onFocus:e=>ie(e,P.TO),onBlur:e=>ae(e,P.TO),value:n,setAnchorRef:y},reset:he,selectedRange:o,setSelected:Se}};h.extend(Ne);const Re=({fomName:t,tomName:i,label:a,validate:d=[],disabled:V=!1,isReadOnly:F=!1,onChange:m,fromDate:q,toDate:_,isEdited:v})=>{const{formState:{errors:B}}=je(),{field:p}=ne({name:t,rules:{validate:D.useMemo(()=>le(d),[d])}}),{field:k}=ne({name:i,rules:{validate:D.useMemo(()=>le(d),[d])}}),M=p.value?h(p.value,I,!0).format(E):"",[y,A]=D.useState(M),f=k.value?h(k.value,I,!0).format(E):"",[l,L]=D.useState(f),{datepickerProps:J,toInputProps:g,fromInputProps:o}=Ae({onRangeChange:n=>{const u=n!=null&&n.from?h(n==null?void 0:n.from).format(I):void 0;m&&m(u),p.onChange(u),A(h(u,I,!0).format(E));const c=n!=null&&n.to?h(n==null?void 0:n.to).format(I):void 0;m&&m(c),k.onChange(c),L(c?h(c,I,!0).format(E):"")}}),K=D.useCallback(n=>{const u=h(n.target.value,E,!0).format(I),c=u!=="Invalid Date";A(n.target.value),m&&m(c?u:n.target.value),p.onChange(c?u:n.target.value)},[A,m,p]),Q=D.useCallback(n=>{const u=h(n.target.value,E,!0).format(I),c=u!=="Invalid Date";L(n.target.value),m&&m(c?u:n.target.value),k.onChange(c?u:n.target.value)},[L,m,k]);if(F){const n=p.value?h(p.value,I,!0).format(E):void 0,u=k.value?h(k.value,I,!0).format(E):void 0;return C.jsx(Me,{label:a,value:`${n} - ${u||""}`,isEdited:v})}const j={...J,fromDate:q,toDate:_};return C.jsx(ee,{...j,children:C.jsxs(We,{gap:"2",children:[C.jsx(qe,{size:"small",children:a}),C.jsxs(we,{gap:"4",children:[C.jsx(ee.Input,{...o,onChange:K,value:y,size:"small",hideLabel:!0,label:"","aria-label":"Fra dato",disabled:V,error:re(B,t)}),C.jsx(ee.Input,{...g,onChange:Q,value:l,size:"small",label:"","aria-label":"Til dato",hideLabel:!0,disabled:V,error:re(B,i)})]})]})})};Re.__docgenInfo={description:"",methods:[],displayName:"Rangepicker",props:{fomName:{required:!0,tsType:{name:"string"},description:""},tomName:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""}}};const xo={title:"form-hooks/Rangepicker",component:Re,tags:["autodocs"],decorators:ge({fomPre:"2022-10-22",tomPre:"2022-10-27"})},H={args:{fomName:"fom",tomName:"tom",label:"Dette er en rangepicker"}},$={args:{fomName:"fom",tomName:"tom",label:"Dette er en rangepicker med disabled datoer",fromDate:new Date("2022-10-10"),toDate:new Date("2022-10-14")}},G={args:{label:"Dette er en rangepicker der verdi er valgt",fomName:"fomPre",tomName:"tomPre"}},Y={args:{label:"Dette er en rangepicker som er readonly",fomName:"fomPre",tomName:"tomPre",isReadOnly:!0,isEdited:!0}};var de,me,ue;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    fomName: 'fom',
    tomName: 'tom',
    label: 'Dette er en rangepicker'
  }
}`,...(ue=(me=H.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var fe,ce,ve;$.parameters={...$.parameters,docs:{...(fe=$.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    fomName: 'fom',
    tomName: 'tom',
    label: 'Dette er en rangepicker med disabled datoer',
    fromDate: new Date('2022-10-10'),
    toDate: new Date('2022-10-14')
  }
}`,...(ve=(ce=$.parameters)==null?void 0:ce.docs)==null?void 0:ve.source}}};var pe,De,be;G.parameters={...G.parameters,docs:{...(pe=G.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en rangepicker der verdi er valgt',
    fomName: 'fomPre',
    tomName: 'tomPre'
  }
}`,...(be=(De=G.parameters)==null?void 0:De.docs)==null?void 0:be.source}}};var Ve,ke,Oe;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en rangepicker som er readonly',
    fomName: 'fomPre',
    tomName: 'tomPre',
    isReadOnly: true,
    isEdited: true
  }
}`,...(Oe=(ke=Y.parameters)==null?void 0:ke.docs)==null?void 0:Oe.source}}};const Co=["Default","MedDisabledDatoer","MedVerdi","ReadOnly"];export{H as Default,$ as MedDisabledDatoer,G as MedVerdi,Y as ReadOnly,Co as __namedExportsOrder,xo as default};
