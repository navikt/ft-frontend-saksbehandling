import{a as ge,b as ie,g as le,V as Pe,L as je,H as Ne,d as re,r as Me}from"./decorators-CsUnBlMd.js";import{j as C}from"./jsx-runtime-DR9Q75dM.js";import{r as p}from"./index-DRjF_FHU.js";import{d as S,i as N,a as W,p as z,c as Ee,b as h,A as I,R as E}from"./index.es-6Aam7IZi.js";import{f as b,i as w,g as xe,c as Ce,D as Z}from"./customParseFormat-BQB70gsG.js";import{R as We}from"./ReadOnlyField-D8hLTj43.js";import"./v4-CQkTLCs1.js";import"./index-rX-Bn4lm.js";import"./Select-DwrWk4ly.js";const oe=(t={},a={})=>({from:Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},t),to:Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isBeforeFrom:!1,isValidDate:!0},a)}),g={FROM:"FROM",TO:"TO"},we=(t,a)=>{const s=(a==null?void 0:a.fromDate)&&t&&S(a==null?void 0:a.fromDate,t)>0,d=(a==null?void 0:a.toDate)&&t&&S(t,a==null?void 0:a.toDate)>0;if(N(t)&&!(a!=null&&a.disableWeekends&&w(t))&&!(a!=null&&a.disabled&&W(t,a.disabled)))return{isValidDate:!1,isInvalid:!N(t),isWeekend:(a==null?void 0:a.disableWeekends)&&w(t),isDisabled:(a==null?void 0:a.disabled)&&W(t,a.disabled),isBefore:s,isAfter:d};if(s||d)return{isValidDate:!1,isBefore:s,isAfter:d}},qe=(t,a,s)=>{var d;const V=(s==null?void 0:s.fromDate)&&t&&S(s==null?void 0:s.fromDate,t)>0,F=(s==null?void 0:s.toDate)&&t&&S(t,s==null?void 0:s.toDate)>0,u=(d=a&&S(a,t)>0)!==null&&d!==void 0?d:!1;if(N(t)&&!(s!=null&&s.disableWeekends&&w(t))&&!(s!=null&&s.disabled&&W(t,s.disabled)))return{isValidDate:!1,isInvalid:!N(t),isWeekend:(s==null?void 0:s.disableWeekends)&&w(t),isDisabled:(s==null?void 0:s.disabled)&&W(t,s.disabled),isBefore:V,isAfter:F,isBeforeFrom:u};if(V||F||u)return{isValidDate:!1,isBefore:V,isAfter:F,isBeforeFrom:u}},ee=(t,a)=>{if(!t||!(t!=null&&t.from))return oe({isEmpty:!0,isValidDate:!1},{isEmpty:!0,isValidDate:!1});const s=we(t.from,a),d=t.to?qe(t.to,t.from,a):{isEmpty:!0,isValidDate:!1};return oe(Object.assign({},s),Object.assign({},d))},Be=(t={})=>{const{locale:a="nb",defaultSelected:s,today:d=new Date,fromDate:V,toDate:F,disabled:u,disableWeekends:q,onRangeChange:_,inputFormat:c,onValidate:B,defaultMonth:v,allowTwoDigitYear:O=!0}=t,[M,y]=p.useState(null),m=xe(a),[l,J]=p.useState(s),[A,P]=p.useState(l?l==null?void 0:l.from:v??d),[o,K]=p.useState(l??{from:void 0,to:void 0}),[Q,j]=p.useState(l!=null&&l.from?b(l.from,m,"date",c):""),[L,r]=p.useState(l!=null&&l.to?b(l.to,m,"date",c):""),[f,D]=p.useState(ee(o,t)),[Re,U]=p.useState(!1),k=e=>{_==null||_(e),K(e)},T=(e={},i={})=>{const n=oe(e,i);D(n),B==null||B(n)},Fe=()=>{k(l??{from:void 0,to:void 0}),P(l?l==null?void 0:l.from:v??d),D(ee(l??{from:void 0,to:void 0},t)),j(l!=null&&l.from?b(l.from,m,"date",c):""),r(l!=null&&l.to?b(l.to,m,"date",c):""),J(s)},he=e=>{k(e),j(e!=null&&e.from?b(e.from,m,"date",c):""),r(e!=null&&e.to?b(e==null?void 0:e.to,m,"date",c):""),D(ee(e,t))},te=(e,i)=>{if(e.target.readOnly)return;const n=z(e.target.value,d,m,"date",O);if(N(n)){i===g.FROM?j(b(n,m,"date",c)):r(b(n,m,"date",c));const R=V&&n&&S(V,n)>0,x=F&&n&&S(n,F)>0;!R&&!x&&P(n)}},ae=(e,i)=>{const n=z(e.target.value,d,m,"date",O);N(n)&&(i===g.FROM?j(b(n,m,"date",c)):i===g.TO&&r(b(n,m,"date",c)))},X=e=>N(e)&&!(q&&w(e))&&!(u&&W(e,u)),Se=e=>{e!=null&&e.from&&(e!=null&&e.to)&&(U(!1),M==null||M.focus());const i=!(o!=null&&o.from)&&(o!=null&&o.to)?o==null?void 0:o.to:e==null?void 0:e.to,n=Ee(i,e==null?void 0:e.from);e!=null&&e.from?j(b(e==null?void 0:e.from,m,"date",c)):j(""),r(i&&!n?b(i,m,"date",c):""),k({from:e==null?void 0:e.from,to:n?void 0:i}),T({isValidDate:!!(e!=null&&e.from),isEmpty:!(e!=null&&e.from)},{isValidDate:!!(e!=null&&e.to),isEmpty:!i||n})},Te=(e="",i,n=!1,R=!1)=>{if(j(e),!X(i)){k(Object.assign(Object.assign({},o),{from:void 0})),T({isEmpty:!e,isValidDate:!1,isInvalid:!N(i),isWeekend:q&&w(i),isDisabled:u&&W(i,u),isBefore:n,isAfter:R},f.to);return}if(n||R){k(Object.assign(Object.assign({},o),{from:void 0})),T({isValidDate:!1,isBefore:n,isAfter:R},f.to);return}if(o!=null&&o.to&&S(i,o==null?void 0:o.to)>0){k({to:i,from:i}),r(b(i,m,"date",c)),P(i),T();return}if(L&&!(o!=null&&o.to)){const x=z(L,d,m,"date",O);if(X(x)){k({from:i,to:x}),P(i),T();return}}k(Object.assign(Object.assign({},o),{from:i})),T({},f.to),P(i)},Ie=(e="",i,n=!1,R=!1)=>{if(r(e),!X(i)){k({from:o==null?void 0:o.from,to:void 0}),T(f.from,{isEmpty:!e,isValidDate:!1,isInvalid:!N(i),isWeekend:q&&w(i),isDisabled:u&&W(i,u),isBefore:n,isAfter:R});return}if(n||R){k({from:o==null?void 0:o.from,to:void 0}),T(f.from,{isValidDate:!1,isBefore:n,isAfter:R});return}if(o!=null&&o.from&&S(o==null?void 0:o.from,i)>0){k({from:o==null?void 0:o.from,to:void 0}),T(f.from,{isValidDate:!1,isBeforeFrom:!0});return}k({from:o==null?void 0:o.from,to:i}),T(f.from,{}),P(i)},se=(e,i)=>{const n=z(e.target.value,d,m,"date",O),R=V&&S(V,n)>0,x=F&&S(n,F)>0;return i===g.FROM?Te(e.target.value,n,R,x):Ie(e.target.value,n,R,x)};return{datepickerProps:{month:A,onMonthChange:P,onSelect:Se,selected:o,locale:a,fromDate:V,toDate:F,today:d,mode:"range",open:Re,onOpenToggle:()=>U(e=>!e),onClose:()=>{U(!1),M==null||M.focus()},disabled:u,disableWeekends:q},fromInputProps:{onChange:e=>se(e,g.FROM),onFocus:e=>te(e,g.FROM),onBlur:e=>ae(e,g.FROM),value:Q,setAnchorRef:y},toInputProps:{onChange:e=>se(e,g.TO),onFocus:e=>te(e,g.TO),onBlur:e=>ae(e,g.TO),value:L,setAnchorRef:y},reset:Fe,selectedRange:o,setSelected:he}};h.extend(Ce);const ke=({fomName:t,tomName:a,label:s,validate:d=[],disabled:V=!1,isReadOnly:F=!1,onChange:u,fromDate:q,toDate:_,isEdited:c})=>{const{formState:{errors:B}}=ge(),{field:v}=ie({name:t,rules:{validate:p.useMemo(()=>le(d),[d])}}),{field:O}=ie({name:a,rules:{validate:p.useMemo(()=>le(d),[d])}}),M=v.value?h(v.value,I,!0).format(E):"",[y,m]=p.useState(M),l=O.value?h(O.value,I,!0).format(E):"",[J,A]=p.useState(l),{datepickerProps:P,toInputProps:o,fromInputProps:K}=Be({onRangeChange:r=>{const f=r!=null&&r.from?h(r==null?void 0:r.from).format(I):void 0;u&&u(f),v.onChange(f),m(h(f,I,!0).format(E));const D=r!=null&&r.to?h(r==null?void 0:r.to).format(I):void 0;u&&u(D),O.onChange(D),A(D?h(D,I,!0).format(E):"")}}),Q=p.useCallback(r=>{const f=h(r.target.value,E,!0).format(I),D=f!=="Invalid Date";m(r.target.value),u&&u(D?f:r.target.value),v.onChange(D?f:r.target.value)},[m,u,v]),j=p.useCallback(r=>{const f=h(r.target.value,E,!0).format(I),D=f!=="Invalid Date";A(r.target.value),u&&u(D?f:r.target.value),O.onChange(D?f:r.target.value)},[A,u,O]);if(F){const r=v.value?h(v.value,I,!0).format(E):void 0,f=O.value?h(O.value,I,!0).format(E):void 0;return C.jsx(We,{label:s,value:`${r} - ${f||""}`,isEdited:c})}const L={...P,fromDate:q,toDate:_};return C.jsx(Z,{...L,children:C.jsxs(Pe,{gap:"2",children:[C.jsx(je,{size:"small",children:s}),C.jsxs(Ne,{gap:"4",children:[C.jsx(Z.Input,{...K,onChange:Q,value:y,size:"small",hideLabel:!0,label:"","aria-label":"Fra dato",disabled:V,error:re(B,t)}),C.jsx(Z.Input,{...o,onChange:j,value:J,size:"small",label:"","aria-label":"Til dato",hideLabel:!0,disabled:V,error:re(B,a)})]})]})})};ke.__docgenInfo={description:"",methods:[],displayName:"Rangepicker",props:{fomName:{required:!0,tsType:{name:"string"},description:""},tomName:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""}}};const Ue={component:ke,tags:["autodocs"],decorators:Me({fomPre:"2022-10-22",tomPre:"2022-10-27"})},H={args:{fomName:"fom",tomName:"tom",label:"Dette er en rangepicker"}},$={args:{fomName:"fom",tomName:"tom",label:"Dette er en rangepicker med disabled datoer",fromDate:new Date("2022-10-10"),toDate:new Date("2022-10-14")}},G={args:{label:"Dette er en rangepicker der verdi er valgt",fomName:"fomPre",tomName:"tomPre"}},Y={args:{label:"Dette er en rangepicker som er readonly",fomName:"fomPre",tomName:"tomPre",isReadOnly:!0,isEdited:!0}};var ne,de,ue;H.parameters={...H.parameters,docs:{...(ne=H.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    fomName: 'fom',
    tomName: 'tom',
    label: 'Dette er en rangepicker'
  }
}`,...(ue=(de=H.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,fe,ce;$.parameters={...$.parameters,docs:{...(me=$.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    fomName: 'fom',
    tomName: 'tom',
    label: 'Dette er en rangepicker med disabled datoer',
    fromDate: new Date('2022-10-10'),
    toDate: new Date('2022-10-14')
  }
}`,...(ce=(fe=$.parameters)==null?void 0:fe.docs)==null?void 0:ce.source}}};var ve,De,pe;G.parameters={...G.parameters,docs:{...(ve=G.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en rangepicker der verdi er valgt',
    fomName: 'fomPre',
    tomName: 'tomPre'
  }
}`,...(pe=(De=G.parameters)==null?void 0:De.docs)==null?void 0:pe.source}}};var be,Ve,Oe;Y.parameters={...Y.parameters,docs:{...(be=Y.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en rangepicker som er readonly',
    fomName: 'fomPre',
    tomName: 'tomPre',
    isReadOnly: true,
    isEdited: true
  }
}`,...(Oe=(Ve=Y.parameters)==null?void 0:Ve.docs)==null?void 0:Oe.source}}};const Xe=["Default","MedDisabledDatoer","MedVerdi","ReadOnly"];export{H as Default,$ as MedDisabledDatoer,G as MedVerdi,Y as ReadOnly,Xe as __namedExportsOrder,Ue as default};
