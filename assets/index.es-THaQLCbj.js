import{r as w}from"./index-B5OHeJSP.js";import{u as $,a as Z,F as Le}from"./ReadOnlyIcon-3mCRcvzc.js";import{q as ge}from"./index.es-B_RouKJz.js";import{d as F,A as H,P as V}from"./index.es-Dh3mAfPy.js";import{C as De}from"./Checkbox-CHErwGPi.js";import{E as je,L as ke,B as Se}from"./Label-ZYbyet41.js";import{B as Ye}from"./Button-C4dKKha_.js";import{T as we}from"./Tag-DqR_3-Kz.js";import{T as Oe}from"./Textarea-DQ7w4yc6.js";import{u as ze}from"./useDatepicker-oJRfFMcH.js";import"./useDateTranslationContext-DuYWebvA.js";import"./Provider-B_QIWjIe.js";import{D as ue}from"./DatePicker-DoJN_gWH.js";import{R as _e,a as ce}from"./Radio-BIYAymoT.js";import{H as Te}from"./VStack-BtUbcfLF.js";import{S as Ee}from"./Select-wYL7g-5T.js";import{T as Ne}from"./TextField-DEo8zdDE.js";function Be(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fe={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me;function Fe(){if(me)return W;me=1;var t=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function l(d,n,i){var s=null;if(i!==void 0&&(s=""+i),n.key!==void 0&&(s=""+n.key),"key"in n){i={};for(var f in n)f!=="key"&&(i[f]=n[f])}else i=n;return n=i.ref,{$$typeof:t,type:d,key:s,ref:n!==void 0?n:null,props:i}}return W.Fragment=o,W.jsx=l,W.jsxs=l,W}var he;function Re(){return he||(he=1,fe.exports=Fe()),fe.exports}var u=Re();const U=t=>t.reduce((o,l,d)=>({...o,[d]:n=>l(n)||!0}),{}),R=(t,o)=>{const l=o.split(".").reduce((d,n)=>d!==void 0?d[n]:d,t);return l==null?void 0:l.message},ga=({name:t,label:o,validate:l=[],readOnly:d=!1,onChange:n,onClick:i,className:s,disabled:f})=>{const{formState:{errors:v}}=$(),{field:y}=Z({name:t,rules:{validate:w.useMemo(()=>U(l),[l])}}),c=R(v,t);return u.jsxs(u.Fragment,{children:[u.jsx(De,{size:"small",disabled:f||d,checked:y.value===!0,className:s,error:!!c,...y,onChange:b=>{y.onChange(b),n&&n(b.currentTarget.checked)},onClick:()=>{i&&i()},children:o}),c&&u.jsx(je,{children:R(v,t)})]})};var ie={exports:{}},$e=ie.exports,pe;function Pe(){return pe||(pe=1,function(t,o){(function(l,d){t.exports=d()})($e,function(){var l={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},d=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,i=/\d\d/,s=/\d\d?/,f=/\d*[^-_:/,()\s\d]+/,v={},y=function(e){return(e=+e)+(e>68?1900:2e3)},c=function(e){return function(r){this[e]=+r}},b=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(r){if(!r||r==="Z")return 0;var a=r.match(/([+-]|\d\d)/g),m=60*a[1]+(+a[2]||0);return m===0?0:a[0]==="+"?-m:m}(e)}],x=function(e){var r=v[e];return r&&(r.indexOf?r:r.s.concat(r.f))},L=function(e,r){var a,m=v.meridiem;if(m){for(var M=1;M<=24;M+=1)if(e.indexOf(m(M,0,r))>-1){a=M>12;break}}else a=e===(r?"pm":"PM");return a},p={A:[f,function(e){this.afternoon=L(e,!1)}],a:[f,function(e){this.afternoon=L(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*+e}],SS:[i,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[s,c("seconds")],ss:[s,c("seconds")],m:[s,c("minutes")],mm:[s,c("minutes")],H:[s,c("hours")],h:[s,c("hours")],HH:[s,c("hours")],hh:[s,c("hours")],D:[s,c("day")],DD:[i,c("day")],Do:[f,function(e){var r=v.ordinal,a=e.match(/\d+/);if(this.day=a[0],r)for(var m=1;m<=31;m+=1)r(m).replace(/\[|\]/g,"")===e&&(this.day=m)}],w:[s,c("week")],ww:[i,c("week")],M:[s,c("month")],MM:[i,c("month")],MMM:[f,function(e){var r=x("months"),a=(x("monthsShort")||r.map(function(m){return m.slice(0,3)})).indexOf(e)+1;if(a<1)throw new Error;this.month=a%12||a}],MMMM:[f,function(e){var r=x("months").indexOf(e)+1;if(r<1)throw new Error;this.month=r%12||r}],Y:[/[+-]?\d+/,c("year")],YY:[i,function(e){this.year=y(e)}],YYYY:[/\d{4}/,c("year")],Z:b,ZZ:b};function D(e){var r,a;r=e,a=v&&v.formats;for(var m=(e=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(_,O,S){var z=S&&S.toUpperCase();return O||a[S]||l[S]||a[z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(T,E,N){return E||N.slice(1)})})).match(d),M=m.length,j=0;j<M;j+=1){var g=m[j],h=p[g],C=h&&h[0],k=h&&h[1];m[j]=k?{regex:C,parser:k}:g.replace(/^\[|\]$/g,"")}return function(_){for(var O={},S=0,z=0;S<M;S+=1){var T=m[S];if(typeof T=="string")z+=T.length;else{var E=T.regex,N=T.parser,A=_.slice(z),P=E.exec(A)[0];N.call(O,P),_=_.replace(P,"")}}return function(B){var I=B.afternoon;if(I!==void 0){var Y=B.hours;I?Y<12&&(B.hours+=12):Y===12&&(B.hours=0),delete B.afternoon}}(O),O}}return function(e,r,a){a.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(y=e.parseTwoDigitYear);var m=r.prototype,M=m.parse;m.parse=function(j){var g=j.date,h=j.utc,C=j.args;this.$u=h;var k=C[1];if(typeof k=="string"){var _=C[2]===!0,O=C[3]===!0,S=_||O,z=C[2];O&&(z=C[2]),v=this.$locale(),!_&&z&&(v=a.Ls[z]),this.$d=function(A,P,B,I){try{if(["x","X"].indexOf(P)>-1)return new Date((P==="X"?1e3:1)*A);var Y=D(P)(A),J=Y.year,Q=Y.month,be=Y.day,xe=Y.hours,ye=Y.minutes,Ce=Y.seconds,Me=Y.milliseconds,oe=Y.zone,de=Y.week,ee=new Date,ae=be||(J||Q?1:ee.getDate()),te=J||ee.getFullYear(),q=0;J&&!Q||(q=Q>0?Q-1:ee.getMonth());var K,re=xe||0,ne=ye||0,se=Ce||0,le=Me||0;return oe?new Date(Date.UTC(te,q,ae,re,ne,se,le+60*oe.offset*1e3)):B?new Date(Date.UTC(te,q,ae,re,ne,se,le)):(K=new Date(te,q,ae,re,ne,se,le),de&&(K=I(K).week(de).toDate()),K)}catch{return new Date("")}}(g,k,h,a),this.init(),z&&z!==!0&&(this.$L=this.locale(z).$L),S&&g!=this.format(k)&&(this.$d=new Date("")),v={}}else if(k instanceof Array)for(var T=k.length,E=1;E<=T;E+=1){C[1]=k[E-1];var N=a.apply(this,C);if(N.isValid()){this.$d=N.$d,this.$L=N.$L,this.init();break}E===T&&(this.$d=new Date(""))}else M.call(this,j)}}})}(ie)),ie.exports}var He=Pe();const Ze=Be(He),Ue="_readOnlyContainer_v0eco_1",We="_readOnlyContent_v0eco_4",Ae="_readOnlyContentCenter_v0eco_7",Ie="_textarea_v0eco_11",Qe="_space_v0eco_15",G={readOnlyContainer:Ue,readOnlyContent:We,readOnlyContentCenter:Ae,textarea:Ie,space:Qe},qe=t=>t!=null&&t!=="",X=({label:t,value:o,isEdited:l=!1,type:d,hideLabel:n,size:i})=>qe(o)?u.jsxs("div",{className:G.readOnlyContainer,children:[t&&!n&&u.jsx(ke,{size:"small",children:t}),u.jsx("div",{className:d==="textarea"?G.textarea:"",children:u.jsxs(Se,{className:G.readOnlyContent,size:i,children:[o,l&&u.jsx(ge,{className:G.space})]})})]}):null;F.extend(Ze);const ba=({name:t,label:o,description:l,validate:d=[],disabled:n=!1,isReadOnly:i=!1,onChange:s,disabledDays:f,isEdited:v,defaultMonth:y,fromDate:c,toDate:b,size:x="small"})=>{const{formState:{errors:L}}=$(),{field:p}=Z({name:t,rules:{validate:w.useMemo(()=>U(d),[d])}}),D=p.value?F(p.value,H,!0).format(V):"",[e,r]=w.useState(D),{datepickerProps:a,inputProps:m}=ze({onDateChange:g=>{if(g!==void 0){const h=F(g).format(H);s&&s(h),p.onChange(h),r(F(h,H,!0).format(V))}},defaultSelected:p.value?F(p.value,H,!0).toDate():void 0,defaultMonth:y||(!p.value&&b?b:void 0),disabled:f}),M=w.useCallback(g=>{const h=F(g.target.value,V,!0).format(H),C=h!=="Invalid Date";r(g.target.value),s&&s(C?h:g.target.value),p.onChange(C?h:g.target.value)},[r,s,p]);if(i)return u.jsx(X,{label:o,value:p.value?F(p.value,H,!0).format(V):void 0,isEdited:v,size:x});const j={...a,fromDate:c,toDate:b,dropdownCaption:c&&b?!0:void 0};return u.jsx(ue,{...j,children:u.jsx(ue.Input,{...m,onChange:M,value:e,size:x,label:o,description:l,disabled:n,error:R(L,t)})})},xa=({name:t,label:o,validate:l=[],readOnly:d=!1,type:n,shouldValidateOnBlur:i=!1,onBlur:s,onChange:f,description:v,autoFocus:y,parse:c=M=>M,format:b=M=>M,normalizeOnBlur:x,isEdited:L,maxLength:p,autoComplete:D=!1,disabled:e,className:r,hideLabel:a,...m})=>{const{formState:{errors:M},trigger:j}=$(),{field:g}=Z({name:t,rules:{validate:w.useMemo(()=>U(l),[l])}});return d?u.jsx(X,{label:o,value:g.value,isEdited:L,hideLabel:a,size:m.size}):u.jsx(Ne,{size:"small",hideLabel:a,description:v,label:o,error:R(M,t),...g,value:g.value?b(g.value):"",autoFocus:y,autoComplete:D?void 0:"off",maxLength:p,disabled:e,type:n,className:r,onChange:h=>{const C=h.currentTarget.value?c(h.currentTarget.value):null;return f&&f(C),g.onChange(C)},onBlur:async h=>{var C,k,_,O;if(g.onBlur(),i){const S=await j();s&&S&&s((C=h==null?void 0:h.target)==null?void 0:C.value)}else s&&s((k=h==null?void 0:h.target)==null?void 0:k.value);x&&g.onChange((_=h==null?void 0:h.target)!=null&&_.value?x(c((O=h==null?void 0:h.target)==null?void 0:O.value)):null)},...m})},Ke="_hideRadioLabels_1u3xf_1",Ve={hideRadioLabels:Ke},ya=({label:t,description:o,name:l,validate:d=[],radios:n,onChange:i,disabled:s=!1,isReadOnly:f=!1,isHorizontal:v=!1,parse:y=p=>p,isTrueOrFalseSelection:c=!1,hideLegend:b=!1,hideRadioLabels:x=!1,isEdited:L=!1})=>{const{formState:{errors:p}}=$(),{field:D}=Z({name:l,rules:{validate:w.useMemo(()=>U(d),[d])}}),e=c?a=>a==="true":y,r=u.jsxs(u.Fragment,{children:[t,f&&L&&u.jsx(ge,{})]});return u.jsxs(_e,{name:l,value:D.value!==void 0?D.value:null,onChange:a=>{i&&i(a),D.onChange(a)},size:"small",legend:r,description:o,error:R(p,l),className:x?Ve.hideRadioLabels:"",hideLegend:b,children:[!v&&n.map(a=>u.jsxs(w.Fragment,{children:[u.jsx(ce,{value:e(a.value),disabled:a.disabled||s||f,children:a.label}),D.value===e(a.value)&&a.element]},a.value)),v&&u.jsxs(u.Fragment,{children:[u.jsx(Te,{gap:"4",children:n.map(a=>u.jsx(ce,{value:e(a.value),disabled:a.disabled||s||f,children:a.label},a.value))}),n.filter(a=>D.value===e(a.value)).map(a=>u.jsx(w.Fragment,{children:a.element},a.value))]})]})},Ca=({name:t,label:o,selectValues:l,validate:d=[],readOnly:n=!1,description:i,hideValueOnDisable:s=!1,onChange:f,disabled:v,className:y,hideLabel:c,isEdited:b,size:x})=>{const{formState:{errors:L}}=$(),{field:p}=Z({name:t,rules:{validate:w.useMemo(()=>U(d),[d])}});if(n){const r=l.map(m=>m.props).find(m=>m.value===p.value),a=r?r.children:void 0;return u.jsx(X,{value:a,label:o,hideLabel:c,isEdited:b,size:x})}const D=p.value||"",e=!l.map(r=>r.props.value).includes(D)&&D!=="";return e&&console.warn(`No corresponding option found for value '${D}'`),u.jsxs(Ee,{size:"small",className:y,error:R(L,t),label:o,description:i,value:s&&v||e?"":p.value,disabled:v,onChange:r=>{f&&f(r),p.onChange(r)},hideLabel:c,children:[u.jsx("option",{style:{display:"none"}}),",",l]})},Ge=(t,o,l,d)=>!l||o||!t?!0:!!d,Ma=({isReadOnly:t,isSubmittable:o,isSubmitting:l,isDirty:d,text:n,onClick:i,hasErrors:s})=>t?null:u.jsx(Ye,{variant:"primary",size:"small",loading:l,disabled:Ge(d,l,o,s),onClick:i,type:i?"button":"submit",children:n||"Bekreft og fortsett"}),Xe="_textAreaFieldWithBadges_bdz0b_1",Je="_etikettWrapper_bdz0b_4",ve={textAreaFieldWithBadges:Xe,etikettWrapper:Je},La=({name:t,label:o,readOnly:l,maxLength:d,badges:n,validate:i=[],parse:s=b=>b,className:f,description:v,isEdited:y,...c})=>{const{formState:{errors:b}}=$(),{field:x}=Z({name:t,rules:{validate:w.useMemo(()=>U(i),[i])}});return l?u.jsx(X,{label:o,value:x.value,type:"textarea",isEdited:y,hideLabel:c.hideLabel}):u.jsxs("div",{className:n?ve.textAreaFieldWithBadges:null,children:[n&&u.jsx("div",{className:ve.etikettWrapper,children:n.map(({type:L,titleText:p})=>u.jsx(we,{variant:L,size:"small",children:p},p))}),u.jsx(Oe,{size:"small",label:o,description:v,className:f,autoComplete:"off",...x,onChange:L=>x.onChange(L.currentTarget.value!==""?s(L.currentTarget.value):null),value:x.value?x.value:"",error:R(b,t),maxLength:d,...c})]})},Da=({formMethods:t,onSubmit:o,children:l,className:d,setDataOnUnmount:n})=>{const{handleSubmit:i,getValues:s}=t;return w.useEffect(()=>()=>{n&&n(s())},[]),u.jsx(Le,{...t,children:u.jsx("form",{className:d,onSubmit:o?i(f=>o(f)):void 0,children:l})})},ja=(t,o)=>{var l;const{setError:d,clearErrors:n,formState:i}=$(),s=!!o;if(w.useEffect(()=>{s&&d(`${t}.notRegisteredInput`,{type:"custom",message:o}),s||n(`${t}.notRegisteredInput`)},[o]),!i.isSubmitted)return;const f=t.split(".").reduce((v,y)=>v[y]||{},i.errors);return(l=f==null?void 0:f.notRegisteredInput)==null?void 0:l.message};export{ga as B,xa as H,Ma as K,Ca as Q,ba as X,ya as Z,X as _,La as e,ja as n,Da as r};
