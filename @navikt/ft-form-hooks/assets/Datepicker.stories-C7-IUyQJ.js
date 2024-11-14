import{j as G}from"./jsx-runtime-DR9Q75dM.js";import{r as u}from"./index-DRjF_FHU.js";import{p as H,i as _,d as x,a as J,b,A as V,R as E}from"./index.es-CozyhWN0.js";import{f as T,i as K,g as ce,c as pe,D as Q}from"./customParseFormat-cMN4WONo.js";import{a as me,b as fe,g as De,d as ve,r as ge}from"./decorators-CsUnBlMd.js";import{R as ye}from"./ReadOnlyField-DD_db2iy.js";import"./index-rX-Bn4lm.js";import"./Select-DwrWk4ly.js";import"./v4-CQkTLCs1.js";const ke=(h={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},h),be=(h={})=>{var w;const{locale:q="nb",required:M,defaultSelected:I,today:o=new Date,fromDate:i,toDate:v,disabled:g,disableWeekends:F,onDateChange:P,inputFormat:c,onValidate:S,defaultMonth:d,allowTwoDigitYear:r=!0}=h,[D,W]=u.useState(null),l=ce(q),[s,L]=u.useState(I),[Y,p]=u.useState((w=s??d)!==null&&w!==void 0?w:o),[t,m]=u.useState(s),[C,de]=u.useState(!1),O=s?T(s,l,"date",c):"",[ue,y]=u.useState(O),z=u.useCallback(a=>{var e,n;de(a),a&&p((n=(e=t??s)!==null&&e!==void 0?e:d)!==null&&n!==void 0?n:o)},[d,s,t,o]),k=a=>{P==null||P(a),m(a)},R=(a={})=>S==null?void 0:S(ke(a));return{datepickerProps:{month:Y,onMonthChange:p,onDayClick:(a,{selected:e})=>{if(!(e&&M)){if(a&&!e&&(z(!1),D==null||D.focus()),e){k(void 0),y(""),R({isValidDate:!1,isEmpty:!0});return}k(a),R(),p(a),y(a?T(a,l,"date",c):"")}},selected:t??new Date("Invalid date"),locale:q,fromDate:i,toDate:v,today:o,open:C,onClose:()=>{z(!1),D==null||D.focus()},onOpenToggle:()=>z(!C),disabled:g,disableWeekends:F},inputProps:{onChange:a=>{y(a.target.value);const e=H(a.target.value,o,l,"date",r),n=i&&e&&x(i,e)>0,f=v&&e&&x(e,v)>0;if(!_(e)||F&&K(e)||g&&J(e,g)){k(void 0),R({isInvalid:!_(e),isWeekend:F&&K(e),isDisabled:g&&J(e,g),isValidDate:!1,isEmpty:!a.target.value,isBefore:n??!1,isAfter:f??!1});return}if(n||f){k(void 0),R({isValidDate:!1,isBefore:n??!1,isAfter:f??!1});return}k(e),R(),p(d??e)},onFocus:a=>{if(a.target.readOnly)return;const e=H(a.target.value,o,l,"date",r);if(_(e)){y(T(e,l,"date",c));const n=i&&e&&x(i,e)>0,f=v&&e&&x(e,v)>0;!n&&!f&&p(e)}},onBlur:a=>{const e=H(a.target.value,o,l,"date",r);_(e)&&y(T(e,l,"date",c))},value:ue,setAnchorRef:W},reset:()=>{var a;k(s),p((a=s??d)!==null&&a!==void 0?a:o),y(O??""),L(I)},selectedDay:t,setSelected:a=>{var e;k(a),p((e=a??d)!==null&&e!==void 0?e:o),y(a?T(a,l,"date",c):"")}}};b.extend(pe);const ie=({name:h,label:w,description:q,validate:M=[],disabled:I=!1,isReadOnly:o=!1,onChange:i,disabledDays:v,isEdited:g,defaultMonth:F,fromDate:P,toDate:c,size:S="small"})=>{const{formState:{errors:d}}=me(),{field:r}=fe({name:h,rules:{validate:u.useMemo(()=>De(M),[M])}}),D=r.value?b(r.value,V,!0).format(E):"",[W,l]=u.useState(D),{datepickerProps:s,inputProps:L}=be({onDateChange:t=>{if(t!==void 0){const m=b(t).format(V);i&&i(m),r.onChange(m),l(b(m,V,!0).format(E))}},defaultSelected:r.value?b(r.value,V,!0).toDate():void 0,defaultMonth:F||(!r.value&&c?c:void 0),disabled:v}),Y=u.useCallback(t=>{const m=b(t.target.value,E,!0).format(V),C=m!=="Invalid Date";l(t.target.value),i&&i(C?m:t.target.value),r.onChange(C?m:t.target.value)},[l,i,r]);if(o)return G.jsx(ye,{label:w,value:r.value?b(r.value,V,!0).format(E):void 0,isEdited:g,size:S});const p={...s,fromDate:P,toDate:c,dropdownCaption:!0};return G.jsx(Q,{...p,children:G.jsx(Q.Input,{...L,onChange:Y,value:W,size:S,label:w,description:q,disabled:I,error:ve(d,h)})})};ie.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},validate:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"((value: string) => any)[]"},description:"",defaultValue:{value:"[]",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},disabledDays:{required:!1,tsType:{name:"DatePickerProps['disabled']",raw:"DatePickerProps['disabled']"},description:""},isEdited:{required:!1,tsType:{name:"boolean"},description:""},defaultMonth:{required:!1,tsType:{name:"Date"},description:""},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'small'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},fromDate:{required:!1,tsType:{name:"Date"},description:""},toDate:{required:!1,tsType:{name:"Date"},description:""}}};const Be={component:ie,tags:["autodocs"],decorators:ge({datepickerFieldPre:"2022-10-11"})},A={args:{name:"datepickerField",label:"Dette er en datepicker",description:"Dette er en nærmere beskrivelse"}},B={args:{name:"datepickerField",label:"Dette er en datepicker med disabled datoer",fromDate:new Date("2024-10-12"),toDate:new Date("2025-02-24"),defaultMonth:new Date("2024-11-11")}},j={args:{label:"Dette er en datepicker der verdi er valgt",name:"datepickerFieldPre",fromDate:new Date("2022-10-02"),toDate:new Date("2022-10-24")}},N={args:{label:"Dette er en datepicker som er readonly",name:"datepickerFieldPre",isReadOnly:!0,isEdited:!0}};var U,X,Z;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker',
    description: 'Dette er en nærmere beskrivelse'
  }
}`,...(Z=(X=A.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,ae;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: 'datepickerField',
    label: 'Dette er en datepicker med disabled datoer',
    fromDate: new Date('2024-10-12'),
    toDate: new Date('2025-02-24'),
    defaultMonth: new Date('2024-11-11')
  }
}`,...(ae=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en datepicker der verdi er valgt',
    name: 'datepickerFieldPre',
    fromDate: new Date('2022-10-02'),
    toDate: new Date('2022-10-24')
  }
}`,...(se=(re=j.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,le,oe;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Dette er en datepicker som er readonly',
    name: 'datepickerFieldPre',
    isReadOnly: true,
    isEdited: true
  }
}`,...(oe=(le=N.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};const je=["Default","MedDisabledDatoer","MedVerdi","ReadOnly"];export{A as Default,B as MedDisabledDatoer,j as MedVerdi,N as ReadOnly,je as __namedExportsOrder,Be as default};
