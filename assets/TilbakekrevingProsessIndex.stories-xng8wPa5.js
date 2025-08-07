import{c as Ae,aa as gt,j as s,av as ct,M as jr,O as Nr,V as U,L as De,B as z,d as V,v as er,aT as Oa,I as ft,G as Z,t as Da,r as C,H as L,aU as kt,aV as pt,an as Pa,aW as Aa,ad as rr,n as Fe,aY as We,aS as Pe,z as H,D as Vr,as as ht,aZ as fn,a_ as Fa,aw as Ba,az as fr,E as Ya,aA as Ar,ao as yt,a$ as Jn,b0 as Na,ax as Va,au as Ia,J as Ua,aL as Ea,aX as Ir,P as Ga,m as La}from"./iframe-hgKr8Fs4.js";import{g as Wa}from"./withIntl--OwYRWZW.js";import{a as Ca}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as I,O as Ha,J as za,R as $a,l as vt,i as Ka,a as jn,o as xn,M as Ur,b as gr,$ as kn,Z as Za,y as bt}from"./style-B9-SG_ZG.js";import{M as k}from"./message-fSjWzu5a.js";import{S as Qn,T as on,a as Ja,b as Qa,c as Xa,d as es,e as rs,f as ns}from"./Timeline-Cegt_7_o.js";import{S as ts}from"./Scissors-DecNjYhc.js";import{T as fe}from"./Table-CqPVgM60.js";import{T as as,m as Tt}from"./nb_NO-BT0iIQWp.js";import{a as ss,S as is}from"./SilhouetteFill-BSlXWNmZ.js";const ls="_button_8q57x_1",os="_cancelButton_8q57x_5",Xn={button:ls,cancelButton:os},us=(e,r)=>n=>n&&(za(n)(V(e.tom.toString()).subtract(1,"day"))||$a(n)(e.fom))?r.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,ds=(e,r)=>{const n=V(e.forstePeriodeTomDato).add(1,"days"),t={fom:r.fom,tom:e.forstePeriodeTomDato},a={fom:n.format(Da),tom:r.tom};return{forstePeriode:t,andrePeriode:a}},_t=({periodeData:e,showModal:r,cancelEvent:n,finnesBelopMed0Verdi:t,splitPeriod:a})=>{const i=Ae(),l=gt();return s.jsx(ct,{formMethods:l,onSubmit:o=>a(ds(o,e)),children:s.jsxs(jr,{open:r,"aria-label":i.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[s.jsx(jr.Header,{children:s.jsx(Nr,{size:"small",level:"2",children:s.jsx(k,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),s.jsx(jr.Body,{children:s.jsxs(U,{gap:"space-16",children:[s.jsxs("div",{children:[s.jsx(De,{size:"small",children:s.jsx(k,{id:"DelOppPeriodeModalImpl.Periode"})}),s.jsx(z,{size:"small",children:`${V(e.fom.toString()).format(er)} - ${V(e.tom.toString()).format(er)}`})]}),s.jsx(Oa,{name:"forstePeriodeTomDato",control:l.control,label:s.jsx(k,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[I,Ha,us(e,i)],fromDate:V(e.fom).toDate(),toDate:V(e.tom).toDate()}),t&&s.jsx(ft,{variant:"error",children:s.jsx(k,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),s.jsxs(jr.Footer,{children:[s.jsx(Z,{size:"small",variant:"primary",className:Xn.button,disabled:!l.formState.isDirty,children:s.jsx(k,{id:"DelOppPeriodeModalImpl.Ok"})}),s.jsx(Z,{size:"small",variant:"secondary",onClick:n,className:Xn.cancelButton,type:"button",children:s.jsx(k,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};_t.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},finnesBelopMed0Verdi:{required:!0,tsType:{name:"boolean"},description:""},splitPeriod:{required:!0,tsType:{name:"signature",type:"function",raw:"(perioder: PerioderData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  forstePeriode: Periode;
  andrePeriode: Periode;
}`,signature:{properties:[{key:"forstePeriode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"andrePeriode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const ms="_margin_1dkor_37",un={margin:ms},gs=!1,wt=({setNestePeriode:e,setForrigePeriode:r,readOnly:n,lukkPeriode:t,periode:a,beregnBelop:i,behandlingUuid:l,oppdaterSplittedePerioder:o})=>{const u=Ae(),[g,f]=C.useState(!1),[y,h]=C.useState(!1),P=S=>{f(!0),S.preventDefault()},A=()=>{f(!1)},Se=S=>{h(!1);const se={belop:a.feilutbetaling,fom:S.forstePeriode.fom,tom:S.forstePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "},B={belop:a.feilutbetaling,fom:S.andrePeriode.fom,tom:S.andrePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "};i({behandlingUuid:l,perioder:[se,B]}).then(x=>{const{perioder:qe}=x;if(qe.some(Be=>Be.belop===0))h(!0);else{const Be={fom:se.fom,tom:se.tom,feilutbetaling:qe[0].belop},Ye={fom:B.fom,tom:B.tom,feilutbetaling:qe[1].belop};A(),o([Be,Ye])}})};return s.jsxs(L,{children:[s.jsxs(De,{size:"small",children:[s.jsx(k,{id:"PeriodeController.Detaljer"}),gs]}),!n&&s.jsxs(s.Fragment,{children:[s.jsx(Qn,{}),s.jsx(Z,{className:un.margin,size:"xsmall",icon:s.jsx(ts,{"aria-hidden":!0}),onClick:P,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:s.jsx(k,{id:"PeriodeController.DelOppPerioden"})})]}),g&&s.jsx(_t,{cancelEvent:A,showModal:g,periodeData:a,splitPeriod:Se,finnesBelopMed0Verdi:y}),s.jsx(Qn,{}),s.jsx(Z,{className:un.margin,size:"xsmall",icon:s.jsx(kt,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.prevPeriod"}),children:s.jsx(k,{id:"PeriodeController.prevPeriodShort"})}),s.jsx(Z,{className:un.margin,size:"xsmall",icon:s.jsx(pt,{"aria-hidden":!0}),onClick:e,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:s.jsx(k,{id:"PeriodeController.nextPeriodShort"})}),s.jsx(Z,{size:"xsmall",icon:s.jsx(Pa,{"aria-hidden":!0}),onClick:t,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};wt.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  perioder: {
    belop: number;
    fom: string;
    tom: string;
    begrunnelse: string;
  }[];
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"belop",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}[]`,required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<{ perioder: { belop: number }[] }>"}}},description:""},oppdaterSplittedePerioder:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppdatertePerioder: SplittetPeriode[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  feilutbetaling: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}}]}}],raw:"SplittetPeriode[]"},name:"oppdatertePerioder"}],return:{name:"void"}}},description:""},setNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},setForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},periode:{required:!0,tsType:{name:"intersection",raw:`{
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
} & DetaljertFeilutbetalingPeriode`,elements:[{name:"signature",type:"object",raw:`{
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
}`,signature:{properties:[{key:"erTotalBelopUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"erForeldet",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: HendelseType;
    hendelseUndertype?: HendelseUnderType;
  };
  feilutbetaling: number;
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  redusertBeloper?: {
    erTrekk: boolean;
    belop: number;
  }[];
  oppfyltValg?: string;
  foreldet?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"signature",type:"object",raw:`{
  hendelseType: HendelseType;
  hendelseUndertype?: HendelseUnderType;
}`,signature:{properties:[{key:"hendelseType",value:{name:"HendelseType",required:!0}},{key:"hendelseUndertype",value:{name:"HendelseUnderType",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`,required:!0}},{key:"redusertBeloper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erTrekk: boolean;
  belop: number;
}`,signature:{properties:[{key:"erTrekk",value:{name:"boolean",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  erTrekk: boolean;
  belop: number;
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var St;function m(){return St.apply(null,arguments)}function cs(e){St=e}function ne(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Le(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function _(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function Mn(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var r;for(r in e)if(_(e,r))return!1;return!0}function W(e){return e===void 0}function Te(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function br(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function qt(e,r){var n=[],t,a=e.length;for(t=0;t<a;++t)n.push(r(e[t],t));return n}function Me(e,r){for(var n in r)_(r,n)&&(e[n]=r[n]);return _(r,"toString")&&(e.toString=r.toString),_(r,"valueOf")&&(e.valueOf=r.valueOf),e}function ue(e,r,n,t){return $t(e,r,n,t,!0).utc()}function fs(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function v(e){return e._pf==null&&(e._pf=fs()),e._pf}var pn;Array.prototype.some?pn=Array.prototype.some:pn=function(e){var r=Object(this),n=r.length>>>0,t;for(t=0;t<n;t++)if(t in r&&e.call(this,r[t],t,r))return!0;return!1};function Rn(e){var r=null,n=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(r=v(e),n=pn.call(r.parsedDateParts,function(a){return a!=null}),t=r.overflow<0&&!r.empty&&!r.invalidEra&&!r.invalidMonth&&!r.invalidWeekday&&!r.weekdayMismatch&&!r.nullInput&&!r.invalidFormat&&!r.userInvalidated&&(!r.meridiem||r.meridiem&&n),e._strict&&(t=t&&r.charsLeftOver===0&&r.unusedTokens.length===0&&r.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function Hr(e){var r=ue(NaN);return e!=null?Me(v(r),e):v(r).userInvalidated=!0,r}var et=m.momentProperties=[],dn=!1;function On(e,r){var n,t,a,i=et.length;if(W(r._isAMomentObject)||(e._isAMomentObject=r._isAMomentObject),W(r._i)||(e._i=r._i),W(r._f)||(e._f=r._f),W(r._l)||(e._l=r._l),W(r._strict)||(e._strict=r._strict),W(r._tzm)||(e._tzm=r._tzm),W(r._isUTC)||(e._isUTC=r._isUTC),W(r._offset)||(e._offset=r._offset),W(r._pf)||(e._pf=v(r)),W(r._locale)||(e._locale=r._locale),i>0)for(n=0;n<i;n++)t=et[n],a=r[t],W(a)||(e[t]=a);return e}function Tr(e){On(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),dn===!1&&(dn=!0,m.updateOffset(this),dn=!1)}function te(e){return e instanceof Tr||e!=null&&e._isAMomentObject!=null}function jt(e){m.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function J(e,r){var n=!0;return Me(function(){if(m.deprecationHandler!=null&&m.deprecationHandler(null,e),n){var t=[],a,i,l,o=arguments.length;for(i=0;i<o;i++){if(a="",typeof arguments[i]=="object"){a+=`
[`+i+"] ";for(l in arguments[0])_(arguments[0],l)&&(a+=l+": "+arguments[0][l]+", ");a=a.slice(0,-2)}else a=arguments[i];t.push(a)}jt(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),n=!1}return r.apply(this,arguments)},r)}var rt={};function xt(e,r){m.deprecationHandler!=null&&m.deprecationHandler(e,r),rt[e]||(jt(r),rt[e]=!0)}m.suppressDeprecationWarnings=!1;m.deprecationHandler=null;function de(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function ks(e){var r,n;for(n in e)_(e,n)&&(r=e[n],de(r)?this[n]=r:this["_"+n]=r);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function hn(e,r){var n=Me({},e),t;for(t in r)_(r,t)&&(Le(e[t])&&Le(r[t])?(n[t]={},Me(n[t],e[t]),Me(n[t],r[t])):r[t]!=null?n[t]=r[t]:delete n[t]);for(t in e)_(e,t)&&!_(r,t)&&Le(e[t])&&(n[t]=Me({},n[t]));return n}function Dn(e){e!=null&&this.set(e)}var yn;Object.keys?yn=Object.keys:yn=function(e){var r,n=[];for(r in e)_(e,r)&&n.push(r);return n};var ps={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function hs(e,r,n){var t=this._calendar[e]||this._calendar.sameElse;return de(t)?t.call(r,n):t}function oe(e,r,n){var t=""+Math.abs(e),a=r-t.length,i=e>=0;return(i?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var Pn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,xr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,mn={},Je={};function p(e,r,n,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(Je[e]=a),r&&(Je[r[0]]=function(){return oe(a.apply(this,arguments),r[1],r[2])}),n&&(Je[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function ys(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function vs(e){var r=e.match(Pn),n,t;for(n=0,t=r.length;n<t;n++)Je[r[n]]?r[n]=Je[r[n]]:r[n]=ys(r[n]);return function(a){var i="",l;for(l=0;l<t;l++)i+=de(r[l])?r[l].call(a,e):r[l];return i}}function Fr(e,r){return e.isValid()?(r=Mt(r,e.localeData()),mn[r]=mn[r]||vs(r),mn[r](e)):e.localeData().invalidDate()}function Mt(e,r){var n=5;function t(a){return r.longDateFormat(a)||a}for(xr.lastIndex=0;n>=0&&xr.test(e);)e=e.replace(xr,t),xr.lastIndex=0,n-=1;return e}var bs={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ts(e){var r=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return r||!n?r:(this._longDateFormat[e]=n.match(Pn).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var _s="Invalid date";function ws(){return this._invalidDate}var Ss="%d",qs=/\d{1,2}/;function js(e){return this._ordinal.replace("%d",e)}var xs={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ms(e,r,n,t){var a=this._relativeTime[n];return de(a)?a(e,r,n,t):a.replace(/%d/i,e)}function Rs(e,r){var n=this._relativeTime[e>0?"future":"past"];return de(n)?n(r):n.replace(/%s/i,r)}var nt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Q(e){return typeof e=="string"?nt[e]||nt[e.toLowerCase()]:void 0}function An(e){var r={},n,t;for(t in e)_(e,t)&&(n=Q(t),n&&(r[n]=e[t]));return r}var Os={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Ds(e){var r=[],n;for(n in e)_(e,n)&&r.push({unit:n,priority:Os[n]});return r.sort(function(t,a){return t.priority-a.priority}),r}var Rt=/\d/,$=/\d\d/,Ot=/\d{3}/,Fn=/\d{4}/,zr=/[+-]?\d{6}/,R=/\d\d?/,Dt=/\d\d\d\d?/,Pt=/\d\d\d\d\d\d?/,$r=/\d{1,3}/,Bn=/\d{1,4}/,Kr=/[+-]?\d{1,6}/,nr=/\d+/,Zr=/[+-]?\d+/,Ps=/Z|[+-]\d\d:?\d\d/gi,Jr=/Z|[+-]\d\d(?::?\d\d)?/gi,As=/[+-]?\d+(\.\d{1,3})?/,_r=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,tr=/^[1-9]\d?/,Yn=/^([1-9]\d|\d)/,Er;Er={};function c(e,r,n){Er[e]=de(r)?r:function(t,a){return t&&n?n:r}}function Fs(e,r){return _(Er,e)?Er[e](r._strict,r._locale):new RegExp(Bs(e))}function Bs(e){return ve(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(r,n,t,a,i){return n||t||a||i}))}function ve(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function K(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function b(e){var r=+e,n=0;return r!==0&&isFinite(r)&&(n=K(r)),n}var vn={};function q(e,r){var n,t=r,a;for(typeof e=="string"&&(e=[e]),Te(r)&&(t=function(i,l){l[r]=b(i)}),a=e.length,n=0;n<a;n++)vn[e[n]]=t}function wr(e,r){q(e,function(n,t,a,i){a._w=a._w||{},r(n,a._w,a,i)})}function Ys(e,r,n){r!=null&&_(vn,e)&&vn[e](r,n._a,n,e)}function Qr(e){return e%4===0&&e%100!==0||e%400===0}var E=0,he=1,le=2,Y=3,re=4,ye=5,Ge=6,Ns=7,Vs=8;p("Y",0,0,function(){var e=this.year();return e<=9999?oe(e,4):"+"+e});p(0,["YY",2],0,function(){return this.year()%100});p(0,["YYYY",4],0,"year");p(0,["YYYYY",5],0,"year");p(0,["YYYYYY",6,!0],0,"year");c("Y",Zr);c("YY",R,$);c("YYYY",Bn,Fn);c("YYYYY",Kr,zr);c("YYYYYY",Kr,zr);q(["YYYYY","YYYYYY"],E);q("YYYY",function(e,r){r[E]=e.length===2?m.parseTwoDigitYear(e):b(e)});q("YY",function(e,r){r[E]=m.parseTwoDigitYear(e)});q("Y",function(e,r){r[E]=parseInt(e,10)});function cr(e){return Qr(e)?366:365}m.parseTwoDigitYear=function(e){return b(e)+(b(e)>68?1900:2e3)};var At=ar("FullYear",!0);function Is(){return Qr(this.year())}function ar(e,r){return function(n){return n!=null?(Ft(this,e,n),m.updateOffset(this,r),this):kr(this,e)}}function kr(e,r){if(!e.isValid())return NaN;var n=e._d,t=e._isUTC;switch(r){case"Milliseconds":return t?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return t?n.getUTCSeconds():n.getSeconds();case"Minutes":return t?n.getUTCMinutes():n.getMinutes();case"Hours":return t?n.getUTCHours():n.getHours();case"Date":return t?n.getUTCDate():n.getDate();case"Day":return t?n.getUTCDay():n.getDay();case"Month":return t?n.getUTCMonth():n.getMonth();case"FullYear":return t?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Ft(e,r,n){var t,a,i,l,o;if(!(!e.isValid()||isNaN(n))){switch(t=e._d,a=e._isUTC,r){case"Milliseconds":return void(a?t.setUTCMilliseconds(n):t.setMilliseconds(n));case"Seconds":return void(a?t.setUTCSeconds(n):t.setSeconds(n));case"Minutes":return void(a?t.setUTCMinutes(n):t.setMinutes(n));case"Hours":return void(a?t.setUTCHours(n):t.setHours(n));case"Date":return void(a?t.setUTCDate(n):t.setDate(n));case"FullYear":break;default:return}i=n,l=e.month(),o=e.date(),o=o===29&&l===1&&!Qr(i)?28:o,a?t.setUTCFullYear(i,l,o):t.setFullYear(i,l,o)}}function Us(e){return e=Q(e),de(this[e])?this[e]():this}function Es(e,r){if(typeof e=="object"){e=An(e);var n=Ds(e),t,a=n.length;for(t=0;t<a;t++)this[n[t].unit](e[n[t].unit])}else if(e=Q(e),de(this[e]))return this[e](r);return this}function Gs(e,r){return(e%r+r)%r}var F;Array.prototype.indexOf?F=Array.prototype.indexOf:F=function(e){var r;for(r=0;r<this.length;++r)if(this[r]===e)return r;return-1};function Nn(e,r){if(isNaN(e)||isNaN(r))return NaN;var n=Gs(r,12);return e+=(r-n)/12,n===1?Qr(e)?29:28:31-n%7%2}p("M",["MM",2],"Mo",function(){return this.month()+1});p("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});p("MMMM",0,0,function(e){return this.localeData().months(this,e)});c("M",R,tr);c("MM",R,$);c("MMM",function(e,r){return r.monthsShortRegex(e)});c("MMMM",function(e,r){return r.monthsRegex(e)});q(["M","MM"],function(e,r){r[he]=b(e)-1});q(["MMM","MMMM"],function(e,r,n,t){var a=n._locale.monthsParse(e,t,n._strict);a!=null?r[he]=a:v(n).invalidMonth=e});var Ls="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Bt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Yt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ws=_r,Cs=_r;function Hs(e,r){return e?ne(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Yt).test(r)?"format":"standalone"][e.month()]:ne(this._months)?this._months:this._months.standalone}function zs(e,r){return e?ne(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Yt.test(r)?"format":"standalone"][e.month()]:ne(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function $s(e,r,n){var t,a,i,l=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)i=ue([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(i,"").toLocaleLowerCase();return n?r==="MMM"?(a=F.call(this._shortMonthsParse,l),a!==-1?a:null):(a=F.call(this._longMonthsParse,l),a!==-1?a:null):r==="MMM"?(a=F.call(this._shortMonthsParse,l),a!==-1?a:(a=F.call(this._longMonthsParse,l),a!==-1?a:null)):(a=F.call(this._longMonthsParse,l),a!==-1?a:(a=F.call(this._shortMonthsParse,l),a!==-1?a:null))}function Ks(e,r,n){var t,a,i;if(this._monthsParseExact)return $s.call(this,e,r,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=ue([2e3,t]),n&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[t]&&(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(i.replace(".",""),"i")),n&&r==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(n&&r==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!n&&this._monthsParse[t].test(e))return t}}function Nt(e,r){if(!e.isValid())return e;if(typeof r=="string"){if(/^\d+$/.test(r))r=b(r);else if(r=e.localeData().monthsParse(r),!Te(r))return e}var n=r,t=e.date();return t=t<29?t:Math.min(t,Nn(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,t):e._d.setMonth(n,t),e}function Vt(e){return e!=null?(Nt(this,e),m.updateOffset(this,!0),this):kr(this,"Month")}function Zs(){return Nn(this.year(),this.month())}function Js(e){return this._monthsParseExact?(_(this,"_monthsRegex")||It.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(_(this,"_monthsShortRegex")||(this._monthsShortRegex=Ws),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Qs(e){return this._monthsParseExact?(_(this,"_monthsRegex")||It.call(this),e?this._monthsStrictRegex:this._monthsRegex):(_(this,"_monthsRegex")||(this._monthsRegex=Cs),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function It(){function e(u,g){return g.length-u.length}var r=[],n=[],t=[],a,i,l,o;for(a=0;a<12;a++)i=ue([2e3,a]),l=ve(this.monthsShort(i,"")),o=ve(this.months(i,"")),r.push(l),n.push(o),t.push(o),t.push(l);r.sort(e),n.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Xs(e,r,n,t,a,i,l){var o;return e<100&&e>=0?(o=new Date(e+400,r,n,t,a,i,l),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,r,n,t,a,i,l),o}function pr(e){var r,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,r=new Date(Date.UTC.apply(null,n)),isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e)):r=new Date(Date.UTC.apply(null,arguments)),r}function Gr(e,r,n){var t=7+r-n,a=(7+pr(e,0,t).getUTCDay()-r)%7;return-a+t-1}function Ut(e,r,n,t,a){var i=(7+n-t)%7,l=Gr(e,t,a),o=1+7*(r-1)+i+l,u,g;return o<=0?(u=e-1,g=cr(u)+o):o>cr(e)?(u=e+1,g=o-cr(e)):(u=e,g=o),{year:u,dayOfYear:g}}function hr(e,r,n){var t=Gr(e.year(),r,n),a=Math.floor((e.dayOfYear()-t-1)/7)+1,i,l;return a<1?(l=e.year()-1,i=a+be(l,r,n)):a>be(e.year(),r,n)?(i=a-be(e.year(),r,n),l=e.year()+1):(l=e.year(),i=a),{week:i,year:l}}function be(e,r,n){var t=Gr(e,r,n),a=Gr(e+1,r,n);return(cr(e)-t+a)/7}p("w",["ww",2],"wo","week");p("W",["WW",2],"Wo","isoWeek");c("w",R,tr);c("ww",R,$);c("W",R,tr);c("WW",R,$);wr(["w","ww","W","WW"],function(e,r,n,t){r[t.substr(0,1)]=b(e)});function ei(e){return hr(e,this._week.dow,this._week.doy).week}var ri={dow:0,doy:6};function ni(){return this._week.dow}function ti(){return this._week.doy}function ai(e){var r=this.localeData().week(this);return e==null?r:this.add((e-r)*7,"d")}function si(e){var r=hr(this,1,4).week;return e==null?r:this.add((e-r)*7,"d")}p("d",0,"do","day");p("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});p("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});p("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});p("e",0,0,"weekday");p("E",0,0,"isoWeekday");c("d",R);c("e",R);c("E",R);c("dd",function(e,r){return r.weekdaysMinRegex(e)});c("ddd",function(e,r){return r.weekdaysShortRegex(e)});c("dddd",function(e,r){return r.weekdaysRegex(e)});wr(["dd","ddd","dddd"],function(e,r,n,t){var a=n._locale.weekdaysParse(e,t,n._strict);a!=null?r.d=a:v(n).invalidWeekday=e});wr(["d","e","E"],function(e,r,n,t){r[t]=b(e)});function ii(e,r){return typeof e!="string"?e:isNaN(e)?(e=r.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function li(e,r){return typeof e=="string"?r.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Vn(e,r){return e.slice(r,7).concat(e.slice(0,r))}var oi="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Et="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ui="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),di=_r,mi=_r,gi=_r;function ci(e,r){var n=ne(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(r)?"format":"standalone"];return e===!0?Vn(n,this._week.dow):e?n[e.day()]:n}function fi(e){return e===!0?Vn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function ki(e){return e===!0?Vn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function pi(e,r,n){var t,a,i,l=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)i=ue([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(i,"").toLocaleLowerCase();return n?r==="dddd"?(a=F.call(this._weekdaysParse,l),a!==-1?a:null):r==="ddd"?(a=F.call(this._shortWeekdaysParse,l),a!==-1?a:null):(a=F.call(this._minWeekdaysParse,l),a!==-1?a:null):r==="dddd"?(a=F.call(this._weekdaysParse,l),a!==-1||(a=F.call(this._shortWeekdaysParse,l),a!==-1)?a:(a=F.call(this._minWeekdaysParse,l),a!==-1?a:null)):r==="ddd"?(a=F.call(this._shortWeekdaysParse,l),a!==-1||(a=F.call(this._weekdaysParse,l),a!==-1)?a:(a=F.call(this._minWeekdaysParse,l),a!==-1?a:null)):(a=F.call(this._minWeekdaysParse,l),a!==-1||(a=F.call(this._weekdaysParse,l),a!==-1)?a:(a=F.call(this._shortWeekdaysParse,l),a!==-1?a:null))}function hi(e,r,n){var t,a,i;if(this._weekdaysParseExact)return pi.call(this,e,r,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=ue([2e3,1]).day(t),n&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(i="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(i.replace(".",""),"i")),n&&r==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(n&&r==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(n&&r==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!n&&this._weekdaysParse[t].test(e))return t}}function yi(e){if(!this.isValid())return e!=null?this:NaN;var r=kr(this,"Day");return e!=null?(e=ii(e,this.localeData()),this.add(e-r,"d")):r}function vi(e){if(!this.isValid())return e!=null?this:NaN;var r=(this.day()+7-this.localeData()._week.dow)%7;return e==null?r:this.add(e-r,"d")}function bi(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var r=li(e,this.localeData());return this.day(this.day()%7?r:r-7)}else return this.day()||7}function Ti(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||In.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(_(this,"_weekdaysRegex")||(this._weekdaysRegex=di),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function _i(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||In.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(_(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=mi),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function wi(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||In.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(_(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=gi),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function In(){function e(f,y){return y.length-f.length}var r=[],n=[],t=[],a=[],i,l,o,u,g;for(i=0;i<7;i++)l=ue([2e3,1]).day(i),o=ve(this.weekdaysMin(l,"")),u=ve(this.weekdaysShort(l,"")),g=ve(this.weekdays(l,"")),r.push(o),n.push(u),t.push(g),a.push(o),a.push(u),a.push(g);r.sort(e),n.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Un(){return this.hours()%12||12}function Si(){return this.hours()||24}p("H",["HH",2],0,"hour");p("h",["hh",2],0,Un);p("k",["kk",2],0,Si);p("hmm",0,0,function(){return""+Un.apply(this)+oe(this.minutes(),2)});p("hmmss",0,0,function(){return""+Un.apply(this)+oe(this.minutes(),2)+oe(this.seconds(),2)});p("Hmm",0,0,function(){return""+this.hours()+oe(this.minutes(),2)});p("Hmmss",0,0,function(){return""+this.hours()+oe(this.minutes(),2)+oe(this.seconds(),2)});function Gt(e,r){p(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),r)})}Gt("a",!0);Gt("A",!1);function Lt(e,r){return r._meridiemParse}c("a",Lt);c("A",Lt);c("H",R,Yn);c("h",R,tr);c("k",R,tr);c("HH",R,$);c("hh",R,$);c("kk",R,$);c("hmm",Dt);c("hmmss",Pt);c("Hmm",Dt);c("Hmmss",Pt);q(["H","HH"],Y);q(["k","kk"],function(e,r,n){var t=b(e);r[Y]=t===24?0:t});q(["a","A"],function(e,r,n){n._isPm=n._locale.isPM(e),n._meridiem=e});q(["h","hh"],function(e,r,n){r[Y]=b(e),v(n).bigHour=!0});q("hmm",function(e,r,n){var t=e.length-2;r[Y]=b(e.substr(0,t)),r[re]=b(e.substr(t)),v(n).bigHour=!0});q("hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Y]=b(e.substr(0,t)),r[re]=b(e.substr(t,2)),r[ye]=b(e.substr(a)),v(n).bigHour=!0});q("Hmm",function(e,r,n){var t=e.length-2;r[Y]=b(e.substr(0,t)),r[re]=b(e.substr(t))});q("Hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Y]=b(e.substr(0,t)),r[re]=b(e.substr(t,2)),r[ye]=b(e.substr(a))});function qi(e){return(e+"").toLowerCase().charAt(0)==="p"}var ji=/[ap]\.?m?\.?/i,xi=ar("Hours",!0);function Mi(e,r,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Wt={calendar:ps,longDateFormat:bs,invalidDate:_s,ordinal:Ss,dayOfMonthOrdinalParse:qs,relativeTime:xs,months:Ls,monthsShort:Bt,week:ri,weekdays:oi,weekdaysMin:ui,weekdaysShort:Et,meridiemParse:ji},D={},ur={},yr;function Ri(e,r){var n,t=Math.min(e.length,r.length);for(n=0;n<t;n+=1)if(e[n]!==r[n])return n;return t}function tt(e){return e&&e.toLowerCase().replace("_","-")}function Oi(e){for(var r=0,n,t,a,i;r<e.length;){for(i=tt(e[r]).split("-"),n=i.length,t=tt(e[r+1]),t=t?t.split("-"):null;n>0;){if(a=Xr(i.slice(0,n).join("-")),a)return a;if(t&&t.length>=n&&Ri(i,t)>=n-1)break;n--}r++}return yr}function Di(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Xr(e){var r=null,n;if(D[e]===void 0&&typeof module<"u"&&module&&module.exports&&Di(e))try{r=yr._abbr,n=require,n("./locale/"+e),Oe(r)}catch{D[e]=null}return D[e]}function Oe(e,r){var n;return e&&(W(r)?n=_e(e):n=En(e,r),n?yr=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),yr._abbr}function En(e,r){if(r!==null){var n,t=Wt;if(r.abbr=e,D[e]!=null)xt("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=D[e]._config;else if(r.parentLocale!=null)if(D[r.parentLocale]!=null)t=D[r.parentLocale]._config;else if(n=Xr(r.parentLocale),n!=null)t=n._config;else return ur[r.parentLocale]||(ur[r.parentLocale]=[]),ur[r.parentLocale].push({name:e,config:r}),null;return D[e]=new Dn(hn(t,r)),ur[e]&&ur[e].forEach(function(a){En(a.name,a.config)}),Oe(e),D[e]}else return delete D[e],null}function Pi(e,r){if(r!=null){var n,t,a=Wt;D[e]!=null&&D[e].parentLocale!=null?D[e].set(hn(D[e]._config,r)):(t=Xr(e),t!=null&&(a=t._config),r=hn(a,r),t==null&&(r.abbr=e),n=new Dn(r),n.parentLocale=D[e],D[e]=n),Oe(e)}else D[e]!=null&&(D[e].parentLocale!=null?(D[e]=D[e].parentLocale,e===Oe()&&Oe(e)):D[e]!=null&&delete D[e]);return D[e]}function _e(e){var r;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return yr;if(!ne(e)){if(r=Xr(e),r)return r;e=[e]}return Oi(e)}function Ai(){return yn(D)}function Gn(e){var r,n=e._a;return n&&v(e).overflow===-2&&(r=n[he]<0||n[he]>11?he:n[le]<1||n[le]>Nn(n[E],n[he])?le:n[Y]<0||n[Y]>24||n[Y]===24&&(n[re]!==0||n[ye]!==0||n[Ge]!==0)?Y:n[re]<0||n[re]>59?re:n[ye]<0||n[ye]>59?ye:n[Ge]<0||n[Ge]>999?Ge:-1,v(e)._overflowDayOfYear&&(r<E||r>le)&&(r=le),v(e)._overflowWeeks&&r===-1&&(r=Ns),v(e)._overflowWeekday&&r===-1&&(r=Vs),v(e).overflow=r),e}var Fi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Yi=/Z|[+-]\d\d(?::?\d\d)?/,Mr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],gn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ni=/^\/?Date\((-?\d+)/i,Vi=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Ii={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Ct(e){var r,n,t=e._i,a=Fi.exec(t)||Bi.exec(t),i,l,o,u,g=Mr.length,f=gn.length;if(a){for(v(e).iso=!0,r=0,n=g;r<n;r++)if(Mr[r][1].exec(a[1])){l=Mr[r][0],i=Mr[r][2]!==!1;break}if(l==null){e._isValid=!1;return}if(a[3]){for(r=0,n=f;r<n;r++)if(gn[r][1].exec(a[3])){o=(a[2]||" ")+gn[r][0];break}if(o==null){e._isValid=!1;return}}if(!i&&o!=null){e._isValid=!1;return}if(a[4])if(Yi.exec(a[4]))u="Z";else{e._isValid=!1;return}e._f=l+(o||"")+(u||""),Wn(e)}else e._isValid=!1}function Ui(e,r,n,t,a,i){var l=[Ei(e),Bt.indexOf(r),parseInt(n,10),parseInt(t,10),parseInt(a,10)];return i&&l.push(parseInt(i,10)),l}function Ei(e){var r=parseInt(e,10);return r<=49?2e3+r:r<=999?1900+r:r}function Gi(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Li(e,r,n){if(e){var t=Et.indexOf(e),a=new Date(r[0],r[1],r[2]).getDay();if(t!==a)return v(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Wi(e,r,n){if(e)return Ii[e];if(r)return 0;var t=parseInt(n,10),a=t%100,i=(t-a)/100;return i*60+a}function Ht(e){var r=Vi.exec(Gi(e._i)),n;if(r){if(n=Ui(r[4],r[3],r[2],r[5],r[6],r[7]),!Li(r[1],n,e))return;e._a=n,e._tzm=Wi(r[8],r[9],r[10]),e._d=pr.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),v(e).rfc2822=!0}else e._isValid=!1}function Ci(e){var r=Ni.exec(e._i);if(r!==null){e._d=new Date(+r[1]);return}if(Ct(e),e._isValid===!1)delete e._isValid;else return;if(Ht(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:m.createFromInputFallback(e)}m.createFromInputFallback=J("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function Ke(e,r,n){return e??r??n}function Hi(e){var r=new Date(m.now());return e._useUTC?[r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()]:[r.getFullYear(),r.getMonth(),r.getDate()]}function Ln(e){var r,n,t=[],a,i,l;if(!e._d){for(a=Hi(e),e._w&&e._a[le]==null&&e._a[he]==null&&zi(e),e._dayOfYear!=null&&(l=Ke(e._a[E],a[E]),(e._dayOfYear>cr(l)||e._dayOfYear===0)&&(v(e)._overflowDayOfYear=!0),n=pr(l,0,e._dayOfYear),e._a[he]=n.getUTCMonth(),e._a[le]=n.getUTCDate()),r=0;r<3&&e._a[r]==null;++r)e._a[r]=t[r]=a[r];for(;r<7;r++)e._a[r]=t[r]=e._a[r]==null?r===2?1:0:e._a[r];e._a[Y]===24&&e._a[re]===0&&e._a[ye]===0&&e._a[Ge]===0&&(e._nextDay=!0,e._a[Y]=0),e._d=(e._useUTC?pr:Xs).apply(null,t),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Y]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==i&&(v(e).weekdayMismatch=!0)}}function zi(e){var r,n,t,a,i,l,o,u,g;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(i=1,l=4,n=Ke(r.GG,e._a[E],hr(M(),1,4).year),t=Ke(r.W,1),a=Ke(r.E,1),(a<1||a>7)&&(u=!0)):(i=e._locale._week.dow,l=e._locale._week.doy,g=hr(M(),i,l),n=Ke(r.gg,e._a[E],g.year),t=Ke(r.w,g.week),r.d!=null?(a=r.d,(a<0||a>6)&&(u=!0)):r.e!=null?(a=r.e+i,(r.e<0||r.e>6)&&(u=!0)):a=i),t<1||t>be(n,i,l)?v(e)._overflowWeeks=!0:u!=null?v(e)._overflowWeekday=!0:(o=Ut(n,t,a,i,l),e._a[E]=o.year,e._dayOfYear=o.dayOfYear)}m.ISO_8601=function(){};m.RFC_2822=function(){};function Wn(e){if(e._f===m.ISO_8601){Ct(e);return}if(e._f===m.RFC_2822){Ht(e);return}e._a=[],v(e).empty=!0;var r=""+e._i,n,t,a,i,l,o=r.length,u=0,g,f;for(a=Mt(e._f,e._locale).match(Pn)||[],f=a.length,n=0;n<f;n++)i=a[n],t=(r.match(Fs(i,e))||[])[0],t&&(l=r.substr(0,r.indexOf(t)),l.length>0&&v(e).unusedInput.push(l),r=r.slice(r.indexOf(t)+t.length),u+=t.length),Je[i]?(t?v(e).empty=!1:v(e).unusedTokens.push(i),Ys(i,t,e)):e._strict&&!t&&v(e).unusedTokens.push(i);v(e).charsLeftOver=o-u,r.length>0&&v(e).unusedInput.push(r),e._a[Y]<=12&&v(e).bigHour===!0&&e._a[Y]>0&&(v(e).bigHour=void 0),v(e).parsedDateParts=e._a.slice(0),v(e).meridiem=e._meridiem,e._a[Y]=$i(e._locale,e._a[Y],e._meridiem),g=v(e).era,g!==null&&(e._a[E]=e._locale.erasConvertYear(g,e._a[E])),Ln(e),Gn(e)}function $i(e,r,n){var t;return n==null?r:e.meridiemHour!=null?e.meridiemHour(r,n):(e.isPM!=null&&(t=e.isPM(n),t&&r<12&&(r+=12),!t&&r===12&&(r=0)),r)}function Ki(e){var r,n,t,a,i,l,o=!1,u=e._f.length;if(u===0){v(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<u;a++)i=0,l=!1,r=On({},e),e._useUTC!=null&&(r._useUTC=e._useUTC),r._f=e._f[a],Wn(r),Rn(r)&&(l=!0),i+=v(r).charsLeftOver,i+=v(r).unusedTokens.length*10,v(r).score=i,o?i<t&&(t=i,n=r):(t==null||i<t||l)&&(t=i,n=r,l&&(o=!0));Me(e,n||r)}function Zi(e){if(!e._d){var r=An(e._i),n=r.day===void 0?r.date:r.day;e._a=qt([r.year,r.month,n,r.hour,r.minute,r.second,r.millisecond],function(t){return t&&parseInt(t,10)}),Ln(e)}}function Ji(e){var r=new Tr(Gn(zt(e)));return r._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function zt(e){var r=e._i,n=e._f;return e._locale=e._locale||_e(e._l),r===null||n===void 0&&r===""?Hr({nullInput:!0}):(typeof r=="string"&&(e._i=r=e._locale.preparse(r)),te(r)?new Tr(Gn(r)):(br(r)?e._d=r:ne(n)?Ki(e):n?Wn(e):Qi(e),Rn(e)||(e._d=null),e))}function Qi(e){var r=e._i;W(r)?e._d=new Date(m.now()):br(r)?e._d=new Date(r.valueOf()):typeof r=="string"?Ci(e):ne(r)?(e._a=qt(r.slice(0),function(n){return parseInt(n,10)}),Ln(e)):Le(r)?Zi(e):Te(r)?e._d=new Date(r):m.createFromInputFallback(e)}function $t(e,r,n,t,a){var i={};return(r===!0||r===!1)&&(t=r,r=void 0),(n===!0||n===!1)&&(t=n,n=void 0),(Le(e)&&Mn(e)||ne(e)&&e.length===0)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=a,i._l=n,i._i=e,i._f=r,i._strict=t,Ji(i)}function M(e,r,n,t){return $t(e,r,n,t,!1)}var Xi=J("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=M.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Hr()}),el=J("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=M.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Hr()});function Kt(e,r){var n,t;if(r.length===1&&ne(r[0])&&(r=r[0]),!r.length)return M();for(n=r[0],t=1;t<r.length;++t)(!r[t].isValid()||r[t][e](n))&&(n=r[t]);return n}function rl(){var e=[].slice.call(arguments,0);return Kt("isBefore",e)}function nl(){var e=[].slice.call(arguments,0);return Kt("isAfter",e)}var tl=function(){return Date.now?Date.now():+new Date},dr=["year","quarter","month","week","day","hour","minute","second","millisecond"];function al(e){var r,n=!1,t,a=dr.length;for(r in e)if(_(e,r)&&!(F.call(dr,r)!==-1&&(e[r]==null||!isNaN(e[r]))))return!1;for(t=0;t<a;++t)if(e[dr[t]]){if(n)return!1;parseFloat(e[dr[t]])!==b(e[dr[t]])&&(n=!0)}return!0}function sl(){return this._isValid}function il(){return ae(NaN)}function en(e){var r=An(e),n=r.year||0,t=r.quarter||0,a=r.month||0,i=r.week||r.isoWeek||0,l=r.day||0,o=r.hour||0,u=r.minute||0,g=r.second||0,f=r.millisecond||0;this._isValid=al(r),this._milliseconds=+f+g*1e3+u*6e4+o*1e3*60*60,this._days=+l+i*7,this._months=+a+t*3+n*12,this._data={},this._locale=_e(),this._bubble()}function Br(e){return e instanceof en}function bn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function ll(e,r,n){var t=Math.min(e.length,r.length),a=Math.abs(e.length-r.length),i=0,l;for(l=0;l<t;l++)b(e[l])!==b(r[l])&&i++;return i+a}function Zt(e,r){p(e,0,0,function(){var n=this.utcOffset(),t="+";return n<0&&(n=-n,t="-"),t+oe(~~(n/60),2)+r+oe(~~n%60,2)})}Zt("Z",":");Zt("ZZ","");c("Z",Jr);c("ZZ",Jr);q(["Z","ZZ"],function(e,r,n){n._useUTC=!0,n._tzm=Cn(Jr,e)});var ol=/([\+\-]|\d\d)/gi;function Cn(e,r){var n=(r||"").match(e),t,a,i;return n===null?null:(t=n[n.length-1]||[],a=(t+"").match(ol)||["-",0,0],i=+(a[1]*60)+b(a[2]),i===0?0:a[0]==="+"?i:-i)}function Hn(e,r){var n,t;return r._isUTC?(n=r.clone(),t=(te(e)||br(e)?e.valueOf():M(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+t),m.updateOffset(n,!1),n):M(e).local()}function Tn(e){return-Math.round(e._d.getTimezoneOffset())}m.updateOffset=function(){};function ul(e,r,n){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Cn(Jr,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&r&&(a=Tn(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!r||this._changeInProgress?Xt(this,ae(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,m.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:Tn(this)}function dl(e,r){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,r),this):-this.utcOffset()}function ml(e){return this.utcOffset(0,e)}function gl(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Tn(this),"m")),this}function cl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Cn(Ps,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function fl(e){return this.isValid()?(e=e?M(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function kl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function pl(){if(!W(this._isDSTShifted))return this._isDSTShifted;var e={},r;return On(e,this),e=zt(e),e._a?(r=e._isUTC?ue(e._a):M(e._a),this._isDSTShifted=this.isValid()&&ll(e._a,r.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function hl(){return this.isValid()?!this._isUTC:!1}function yl(){return this.isValid()?this._isUTC:!1}function Jt(){return this.isValid()?this._isUTC&&this._offset===0:!1}var vl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,bl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ae(e,r){var n=e,t=null,a,i,l;return Br(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Te(e)||!isNaN(+e)?(n={},r?n[r]=+e:n.milliseconds=+e):(t=vl.exec(e))?(a=t[1]==="-"?-1:1,n={y:0,d:b(t[le])*a,h:b(t[Y])*a,m:b(t[re])*a,s:b(t[ye])*a,ms:b(bn(t[Ge]*1e3))*a}):(t=bl.exec(e))?(a=t[1]==="-"?-1:1,n={y:Ee(t[2],a),M:Ee(t[3],a),w:Ee(t[4],a),d:Ee(t[5],a),h:Ee(t[6],a),m:Ee(t[7],a),s:Ee(t[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(l=Tl(M(n.from),M(n.to)),n={},n.ms=l.milliseconds,n.M=l.months),i=new en(n),Br(e)&&_(e,"_locale")&&(i._locale=e._locale),Br(e)&&_(e,"_isValid")&&(i._isValid=e._isValid),i}ae.fn=en.prototype;ae.invalid=il;function Ee(e,r){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*r}function at(e,r){var n={};return n.months=r.month()-e.month()+(r.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(r)&&--n.months,n.milliseconds=+r-+e.clone().add(n.months,"M"),n}function Tl(e,r){var n;return e.isValid()&&r.isValid()?(r=Hn(r,e),e.isBefore(r)?n=at(e,r):(n=at(r,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Qt(e,r){return function(n,t){var a,i;return t!==null&&!isNaN(+t)&&(xt(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=t,t=i),a=ae(n,t),Xt(this,a,e),this}}function Xt(e,r,n,t){var a=r._milliseconds,i=bn(r._days),l=bn(r._months);e.isValid()&&(t=t??!0,l&&Nt(e,kr(e,"Month")+l*n),i&&Ft(e,"Date",kr(e,"Date")+i*n),a&&e._d.setTime(e._d.valueOf()+a*n),t&&m.updateOffset(e,i||l))}var _l=Qt(1,"add"),wl=Qt(-1,"subtract");function ea(e){return typeof e=="string"||e instanceof String}function Sl(e){return te(e)||br(e)||ea(e)||Te(e)||jl(e)||ql(e)||e===null||e===void 0}function ql(e){var r=Le(e)&&!Mn(e),n=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,i,l=t.length;for(a=0;a<l;a+=1)i=t[a],n=n||_(e,i);return r&&n}function jl(e){var r=ne(e),n=!1;return r&&(n=e.filter(function(t){return!Te(t)&&ea(e)}).length===0),r&&n}function xl(e){var r=Le(e)&&!Mn(e),n=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,i;for(a=0;a<t.length;a+=1)i=t[a],n=n||_(e,i);return r&&n}function Ml(e,r){var n=e.diff(r,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Rl(e,r){arguments.length===1&&(arguments[0]?Sl(arguments[0])?(e=arguments[0],r=void 0):xl(arguments[0])&&(r=arguments[0],e=void 0):(e=void 0,r=void 0));var n=e||M(),t=Hn(n,this).startOf("day"),a=m.calendarFormat(this,t)||"sameElse",i=r&&(de(r[a])?r[a].call(this,n):r[a]);return this.format(i||this.localeData().calendar(a,this,M(n)))}function Ol(){return new Tr(this)}function Dl(e,r){var n=te(e)?e:M(e);return this.isValid()&&n.isValid()?(r=Q(r)||"millisecond",r==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(r).valueOf()):!1}function Pl(e,r){var n=te(e)?e:M(e);return this.isValid()&&n.isValid()?(r=Q(r)||"millisecond",r==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(r).valueOf()<n.valueOf()):!1}function Al(e,r,n,t){var a=te(e)?e:M(e),i=te(r)?r:M(r);return this.isValid()&&a.isValid()&&i.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(t[1]===")"?this.isBefore(i,n):!this.isAfter(i,n))):!1}function Fl(e,r){var n=te(e)?e:M(e),t;return this.isValid()&&n.isValid()?(r=Q(r)||"millisecond",r==="millisecond"?this.valueOf()===n.valueOf():(t=n.valueOf(),this.clone().startOf(r).valueOf()<=t&&t<=this.clone().endOf(r).valueOf())):!1}function Bl(e,r){return this.isSame(e,r)||this.isAfter(e,r)}function Yl(e,r){return this.isSame(e,r)||this.isBefore(e,r)}function Nl(e,r,n){var t,a,i;if(!this.isValid())return NaN;if(t=Hn(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,r=Q(r),r){case"year":i=Yr(this,t)/12;break;case"month":i=Yr(this,t);break;case"quarter":i=Yr(this,t)/3;break;case"second":i=(this-t)/1e3;break;case"minute":i=(this-t)/6e4;break;case"hour":i=(this-t)/36e5;break;case"day":i=(this-t-a)/864e5;break;case"week":i=(this-t-a)/6048e5;break;default:i=this-t}return n?i:K(i)}function Yr(e,r){if(e.date()<r.date())return-Yr(r,e);var n=(r.year()-e.year())*12+(r.month()-e.month()),t=e.clone().add(n,"months"),a,i;return r-t<0?(a=e.clone().add(n-1,"months"),i=(r-t)/(t-a)):(a=e.clone().add(n+1,"months"),i=(r-t)/(a-t)),-(n+i)||0}m.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";m.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Vl(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Il(e){if(!this.isValid())return null;var r=e!==!0,n=r?this.clone().utc():this;return n.year()<0||n.year()>9999?Fr(n,r?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):de(Date.prototype.toISOString)?r?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Fr(n,"Z")):Fr(n,r?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Ul(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",r="",n,t,a,i;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",r="Z"),n="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",i=r+'[")]',this.format(n+t+a+i)}function El(e){e||(e=this.isUtc()?m.defaultFormatUtc:m.defaultFormat);var r=Fr(this,e);return this.localeData().postformat(r)}function Gl(e,r){return this.isValid()&&(te(e)&&e.isValid()||M(e).isValid())?ae({to:this,from:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Ll(e){return this.from(M(),e)}function Wl(e,r){return this.isValid()&&(te(e)&&e.isValid()||M(e).isValid())?ae({from:this,to:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Cl(e){return this.to(M(),e)}function ra(e){var r;return e===void 0?this._locale._abbr:(r=_e(e),r!=null&&(this._locale=r),this)}var na=J("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ta(){return this._locale}var Lr=1e3,Qe=60*Lr,Wr=60*Qe,aa=(365*400+97)*24*Wr;function Xe(e,r){return(e%r+r)%r}function sa(e,r,n){return e<100&&e>=0?new Date(e+400,r,n)-aa:new Date(e,r,n).valueOf()}function ia(e,r,n){return e<100&&e>=0?Date.UTC(e+400,r,n)-aa:Date.UTC(e,r,n)}function Hl(e){var r,n;if(e=Q(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?ia:sa,e){case"year":r=n(this.year(),0,1);break;case"quarter":r=n(this.year(),this.month()-this.month()%3,1);break;case"month":r=n(this.year(),this.month(),1);break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=n(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=Xe(r+(this._isUTC?0:this.utcOffset()*Qe),Wr);break;case"minute":r=this._d.valueOf(),r-=Xe(r,Qe);break;case"second":r=this._d.valueOf(),r-=Xe(r,Lr);break}return this._d.setTime(r),m.updateOffset(this,!0),this}function zl(e){var r,n;if(e=Q(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?ia:sa,e){case"year":r=n(this.year()+1,0,1)-1;break;case"quarter":r=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=n(this.year(),this.month()+1,1)-1;break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=Wr-Xe(r+(this._isUTC?0:this.utcOffset()*Qe),Wr)-1;break;case"minute":r=this._d.valueOf(),r+=Qe-Xe(r,Qe)-1;break;case"second":r=this._d.valueOf(),r+=Lr-Xe(r,Lr)-1;break}return this._d.setTime(r),m.updateOffset(this,!0),this}function $l(){return this._d.valueOf()-(this._offset||0)*6e4}function Kl(){return Math.floor(this.valueOf()/1e3)}function Zl(){return new Date(this.valueOf())}function Jl(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Ql(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Xl(){return this.isValid()?this.toISOString():null}function eo(){return Rn(this)}function ro(){return Me({},v(this))}function no(){return v(this).overflow}function to(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}p("N",0,0,"eraAbbr");p("NN",0,0,"eraAbbr");p("NNN",0,0,"eraAbbr");p("NNNN",0,0,"eraName");p("NNNNN",0,0,"eraNarrow");p("y",["y",1],"yo","eraYear");p("y",["yy",2],0,"eraYear");p("y",["yyy",3],0,"eraYear");p("y",["yyyy",4],0,"eraYear");c("N",zn);c("NN",zn);c("NNN",zn);c("NNNN",ko);c("NNNNN",po);q(["N","NN","NNN","NNNN","NNNNN"],function(e,r,n,t){var a=n._locale.erasParse(e,t,n._strict);a?v(n).era=a:v(n).invalidEra=e});c("y",nr);c("yy",nr);c("yyy",nr);c("yyyy",nr);c("yo",ho);q(["y","yy","yyy","yyyy"],E);q(["yo"],function(e,r,n,t){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?r[E]=n._locale.eraYearOrdinalParse(e,a):r[E]=parseInt(e,10)});function ao(e,r){var n,t,a,i=this._eras||_e("en")._eras;for(n=0,t=i.length;n<t;++n){switch(typeof i[n].since){case"string":a=m(i[n].since).startOf("day"),i[n].since=a.valueOf();break}switch(typeof i[n].until){case"undefined":i[n].until=1/0;break;case"string":a=m(i[n].until).startOf("day").valueOf(),i[n].until=a.valueOf();break}}return i}function so(e,r,n){var t,a,i=this.eras(),l,o,u;for(e=e.toUpperCase(),t=0,a=i.length;t<a;++t)if(l=i[t].name.toUpperCase(),o=i[t].abbr.toUpperCase(),u=i[t].narrow.toUpperCase(),n)switch(r){case"N":case"NN":case"NNN":if(o===e)return i[t];break;case"NNNN":if(l===e)return i[t];break;case"NNNNN":if(u===e)return i[t];break}else if([l,o,u].indexOf(e)>=0)return i[t]}function io(e,r){var n=e.since<=e.until?1:-1;return r===void 0?m(e.since).year():m(e.since).year()+(r-e.offset)*n}function lo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].name;return""}function oo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].narrow;return""}function uo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].abbr;return""}function mo(){var e,r,n,t,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(n=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-m(a[e].since).year())*n+a[e].offset;return this.year()}function go(e){return _(this,"_erasNameRegex")||$n.call(this),e?this._erasNameRegex:this._erasRegex}function co(e){return _(this,"_erasAbbrRegex")||$n.call(this),e?this._erasAbbrRegex:this._erasRegex}function fo(e){return _(this,"_erasNarrowRegex")||$n.call(this),e?this._erasNarrowRegex:this._erasRegex}function zn(e,r){return r.erasAbbrRegex(e)}function ko(e,r){return r.erasNameRegex(e)}function po(e,r){return r.erasNarrowRegex(e)}function ho(e,r){return r._eraYearOrdinalRegex||nr}function $n(){var e=[],r=[],n=[],t=[],a,i,l,o,u,g=this.eras();for(a=0,i=g.length;a<i;++a)l=ve(g[a].name),o=ve(g[a].abbr),u=ve(g[a].narrow),r.push(l),e.push(o),n.push(u),t.push(l),t.push(o),t.push(u);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}p(0,["gg",2],0,function(){return this.weekYear()%100});p(0,["GG",2],0,function(){return this.isoWeekYear()%100});function rn(e,r){p(0,[e,e.length],0,r)}rn("gggg","weekYear");rn("ggggg","weekYear");rn("GGGG","isoWeekYear");rn("GGGGG","isoWeekYear");c("G",Zr);c("g",Zr);c("GG",R,$);c("gg",R,$);c("GGGG",Bn,Fn);c("gggg",Bn,Fn);c("GGGGG",Kr,zr);c("ggggg",Kr,zr);wr(["gggg","ggggg","GGGG","GGGGG"],function(e,r,n,t){r[t.substr(0,2)]=b(e)});wr(["gg","GG"],function(e,r,n,t){r[t]=m.parseTwoDigitYear(e)});function yo(e){return la.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function vo(e){return la.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function bo(){return be(this.year(),1,4)}function To(){return be(this.isoWeekYear(),1,4)}function _o(){var e=this.localeData()._week;return be(this.year(),e.dow,e.doy)}function wo(){var e=this.localeData()._week;return be(this.weekYear(),e.dow,e.doy)}function la(e,r,n,t,a){var i;return e==null?hr(this,t,a).year:(i=be(e,t,a),r>i&&(r=i),So.call(this,e,r,n,t,a))}function So(e,r,n,t,a){var i=Ut(e,r,n,t,a),l=pr(i.year,0,i.dayOfYear);return this.year(l.getUTCFullYear()),this.month(l.getUTCMonth()),this.date(l.getUTCDate()),this}p("Q",0,"Qo","quarter");c("Q",Rt);q("Q",function(e,r){r[he]=(b(e)-1)*3});function qo(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}p("D",["DD",2],"Do","date");c("D",R,tr);c("DD",R,$);c("Do",function(e,r){return e?r._dayOfMonthOrdinalParse||r._ordinalParse:r._dayOfMonthOrdinalParseLenient});q(["D","DD"],le);q("Do",function(e,r){r[le]=b(e.match(R)[0])});var oa=ar("Date",!0);p("DDD",["DDDD",3],"DDDo","dayOfYear");c("DDD",$r);c("DDDD",Ot);q(["DDD","DDDD"],function(e,r,n){n._dayOfYear=b(e)});function jo(e){var r=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?r:this.add(e-r,"d")}p("m",["mm",2],0,"minute");c("m",R,Yn);c("mm",R,$);q(["m","mm"],re);var xo=ar("Minutes",!1);p("s",["ss",2],0,"second");c("s",R,Yn);c("ss",R,$);q(["s","ss"],ye);var Mo=ar("Seconds",!1);p("S",0,0,function(){return~~(this.millisecond()/100)});p(0,["SS",2],0,function(){return~~(this.millisecond()/10)});p(0,["SSS",3],0,"millisecond");p(0,["SSSS",4],0,function(){return this.millisecond()*10});p(0,["SSSSS",5],0,function(){return this.millisecond()*100});p(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});p(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});p(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});p(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});c("S",$r,Rt);c("SS",$r,$);c("SSS",$r,Ot);var Re,ua;for(Re="SSSS";Re.length<=9;Re+="S")c(Re,nr);function Ro(e,r){r[Ge]=b(("0."+e)*1e3)}for(Re="S";Re.length<=9;Re+="S")q(Re,Ro);ua=ar("Milliseconds",!1);p("z",0,0,"zoneAbbr");p("zz",0,0,"zoneName");function Oo(){return this._isUTC?"UTC":""}function Do(){return this._isUTC?"Coordinated Universal Time":""}var d=Tr.prototype;d.add=_l;d.calendar=Rl;d.clone=Ol;d.diff=Nl;d.endOf=zl;d.format=El;d.from=Gl;d.fromNow=Ll;d.to=Wl;d.toNow=Cl;d.get=Us;d.invalidAt=no;d.isAfter=Dl;d.isBefore=Pl;d.isBetween=Al;d.isSame=Fl;d.isSameOrAfter=Bl;d.isSameOrBefore=Yl;d.isValid=eo;d.lang=na;d.locale=ra;d.localeData=ta;d.max=el;d.min=Xi;d.parsingFlags=ro;d.set=Es;d.startOf=Hl;d.subtract=wl;d.toArray=Jl;d.toObject=Ql;d.toDate=Zl;d.toISOString=Il;d.inspect=Ul;typeof Symbol<"u"&&Symbol.for!=null&&(d[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});d.toJSON=Xl;d.toString=Vl;d.unix=Kl;d.valueOf=$l;d.creationData=to;d.eraName=lo;d.eraNarrow=oo;d.eraAbbr=uo;d.eraYear=mo;d.year=At;d.isLeapYear=Is;d.weekYear=yo;d.isoWeekYear=vo;d.quarter=d.quarters=qo;d.month=Vt;d.daysInMonth=Zs;d.week=d.weeks=ai;d.isoWeek=d.isoWeeks=si;d.weeksInYear=_o;d.weeksInWeekYear=wo;d.isoWeeksInYear=bo;d.isoWeeksInISOWeekYear=To;d.date=oa;d.day=d.days=yi;d.weekday=vi;d.isoWeekday=bi;d.dayOfYear=jo;d.hour=d.hours=xi;d.minute=d.minutes=xo;d.second=d.seconds=Mo;d.millisecond=d.milliseconds=ua;d.utcOffset=ul;d.utc=ml;d.local=gl;d.parseZone=cl;d.hasAlignedHourOffset=fl;d.isDST=kl;d.isLocal=hl;d.isUtcOffset=yl;d.isUtc=Jt;d.isUTC=Jt;d.zoneAbbr=Oo;d.zoneName=Do;d.dates=J("dates accessor is deprecated. Use date instead.",oa);d.months=J("months accessor is deprecated. Use month instead",Vt);d.years=J("years accessor is deprecated. Use year instead",At);d.zone=J("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",dl);d.isDSTShifted=J("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",pl);function Po(e){return M(e*1e3)}function Ao(){return M.apply(null,arguments).parseZone()}function da(e){return e}var w=Dn.prototype;w.calendar=hs;w.longDateFormat=Ts;w.invalidDate=ws;w.ordinal=js;w.preparse=da;w.postformat=da;w.relativeTime=Ms;w.pastFuture=Rs;w.set=ks;w.eras=ao;w.erasParse=so;w.erasConvertYear=io;w.erasAbbrRegex=co;w.erasNameRegex=go;w.erasNarrowRegex=fo;w.months=Hs;w.monthsShort=zs;w.monthsParse=Ks;w.monthsRegex=Qs;w.monthsShortRegex=Js;w.week=ei;w.firstDayOfYear=ti;w.firstDayOfWeek=ni;w.weekdays=ci;w.weekdaysMin=ki;w.weekdaysShort=fi;w.weekdaysParse=hi;w.weekdaysRegex=Ti;w.weekdaysShortRegex=_i;w.weekdaysMinRegex=wi;w.isPM=qi;w.meridiem=Mi;function Cr(e,r,n,t){var a=_e(),i=ue().set(t,r);return a[n](i,e)}function ma(e,r,n){if(Te(e)&&(r=e,e=void 0),e=e||"",r!=null)return Cr(e,r,n,"month");var t,a=[];for(t=0;t<12;t++)a[t]=Cr(e,t,n,"month");return a}function Kn(e,r,n,t){typeof e=="boolean"?(Te(r)&&(n=r,r=void 0),r=r||""):(r=e,n=r,e=!1,Te(r)&&(n=r,r=void 0),r=r||"");var a=_e(),i=e?a._week.dow:0,l,o=[];if(n!=null)return Cr(r,(n+i)%7,t,"day");for(l=0;l<7;l++)o[l]=Cr(r,(l+i)%7,t,"day");return o}function Fo(e,r){return ma(e,r,"months")}function Bo(e,r){return ma(e,r,"monthsShort")}function Yo(e,r,n){return Kn(e,r,n,"weekdays")}function No(e,r,n){return Kn(e,r,n,"weekdaysShort")}function Vo(e,r,n){return Kn(e,r,n,"weekdaysMin")}Oe("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var r=e%10,n=b(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th";return e+n}});m.lang=J("moment.lang is deprecated. Use moment.locale instead.",Oe);m.langData=J("moment.langData is deprecated. Use moment.localeData instead.",_e);var ke=Math.abs;function Io(){var e=this._data;return this._milliseconds=ke(this._milliseconds),this._days=ke(this._days),this._months=ke(this._months),e.milliseconds=ke(e.milliseconds),e.seconds=ke(e.seconds),e.minutes=ke(e.minutes),e.hours=ke(e.hours),e.months=ke(e.months),e.years=ke(e.years),this}function ga(e,r,n,t){var a=ae(r,n);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function Uo(e,r){return ga(this,e,r,1)}function Eo(e,r){return ga(this,e,r,-1)}function st(e){return e<0?Math.floor(e):Math.ceil(e)}function Go(){var e=this._milliseconds,r=this._days,n=this._months,t=this._data,a,i,l,o,u;return e>=0&&r>=0&&n>=0||e<=0&&r<=0&&n<=0||(e+=st(_n(n)+r)*864e5,r=0,n=0),t.milliseconds=e%1e3,a=K(e/1e3),t.seconds=a%60,i=K(a/60),t.minutes=i%60,l=K(i/60),t.hours=l%24,r+=K(l/24),u=K(ca(r)),n+=u,r-=st(_n(u)),o=K(n/12),n%=12,t.days=r,t.months=n,t.years=o,this}function ca(e){return e*4800/146097}function _n(e){return e*146097/4800}function Lo(e){if(!this.isValid())return NaN;var r,n,t=this._milliseconds;if(e=Q(e),e==="month"||e==="quarter"||e==="year")switch(r=this._days+t/864e5,n=this._months+ca(r),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(r=this._days+Math.round(_n(this._months)),e){case"week":return r/7+t/6048e5;case"day":return r+t/864e5;case"hour":return r*24+t/36e5;case"minute":return r*1440+t/6e4;case"second":return r*86400+t/1e3;case"millisecond":return Math.floor(r*864e5)+t;default:throw new Error("Unknown unit "+e)}}function we(e){return function(){return this.as(e)}}var fa=we("ms"),Wo=we("s"),Co=we("m"),Ho=we("h"),zo=we("d"),$o=we("w"),Ko=we("M"),Zo=we("Q"),Jo=we("y"),Qo=fa;function Xo(){return ae(this)}function eu(e){return e=Q(e),this.isValid()?this[e+"s"]():NaN}function Ce(e){return function(){return this.isValid()?this._data[e]:NaN}}var ru=Ce("milliseconds"),nu=Ce("seconds"),tu=Ce("minutes"),au=Ce("hours"),su=Ce("days"),iu=Ce("months"),lu=Ce("years");function ou(){return K(this.days()/7)}var pe=Math.round,Ze={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function uu(e,r,n,t,a){return a.relativeTime(r||1,!!n,e,t)}function du(e,r,n,t){var a=ae(e).abs(),i=pe(a.as("s")),l=pe(a.as("m")),o=pe(a.as("h")),u=pe(a.as("d")),g=pe(a.as("M")),f=pe(a.as("w")),y=pe(a.as("y")),h=i<=n.ss&&["s",i]||i<n.s&&["ss",i]||l<=1&&["m"]||l<n.m&&["mm",l]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(h=h||f<=1&&["w"]||f<n.w&&["ww",f]),h=h||g<=1&&["M"]||g<n.M&&["MM",g]||y<=1&&["y"]||["yy",y],h[2]=r,h[3]=+e>0,h[4]=t,uu.apply(null,h)}function mu(e){return e===void 0?pe:typeof e=="function"?(pe=e,!0):!1}function gu(e,r){return Ze[e]===void 0?!1:r===void 0?Ze[e]:(Ze[e]=r,e==="s"&&(Ze.ss=r-1),!0)}function cu(e,r){if(!this.isValid())return this.localeData().invalidDate();var n=!1,t=Ze,a,i;return typeof e=="object"&&(r=e,e=!1),typeof e=="boolean"&&(n=e),typeof r=="object"&&(t=Object.assign({},Ze,r),r.s!=null&&r.ss==null&&(t.ss=r.s-1)),a=this.localeData(),i=du(this,!n,t,a),n&&(i=a.pastFuture(+this,i)),a.postformat(i)}var cn=Math.abs;function ze(e){return(e>0)-(e<0)||+e}function nn(){if(!this.isValid())return this.localeData().invalidDate();var e=cn(this._milliseconds)/1e3,r=cn(this._days),n=cn(this._months),t,a,i,l,o=this.asSeconds(),u,g,f,y;return o?(t=K(e/60),a=K(t/60),e%=60,t%=60,i=K(n/12),n%=12,l=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=o<0?"-":"",g=ze(this._months)!==ze(o)?"-":"",f=ze(this._days)!==ze(o)?"-":"",y=ze(this._milliseconds)!==ze(o)?"-":"",u+"P"+(i?g+i+"Y":"")+(n?g+n+"M":"")+(r?f+r+"D":"")+(a||t||e?"T":"")+(a?y+a+"H":"")+(t?y+t+"M":"")+(e?y+l+"S":"")):"P0D"}var T=en.prototype;T.isValid=sl;T.abs=Io;T.add=Uo;T.subtract=Eo;T.as=Lo;T.asMilliseconds=fa;T.asSeconds=Wo;T.asMinutes=Co;T.asHours=Ho;T.asDays=zo;T.asWeeks=$o;T.asMonths=Ko;T.asQuarters=Zo;T.asYears=Jo;T.valueOf=Qo;T._bubble=Go;T.clone=Xo;T.get=eu;T.milliseconds=ru;T.seconds=nu;T.minutes=tu;T.hours=au;T.days=su;T.weeks=ou;T.months=iu;T.years=lu;T.humanize=cu;T.toISOString=nn;T.toString=nn;T.toJSON=nn;T.locale=ra;T.localeData=ta;T.toIsoString=J("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",nn);T.lang=na;p("X",0,0,"unix");p("x",0,0,"valueOf");c("x",Zr);c("X",As);q("X",function(e,r,n){n._d=new Date(parseFloat(e)*1e3)});q("x",function(e,r,n){n._d=new Date(b(e))});//! moment.js
m.version="2.30.1";cs(M);m.fn=d;m.min=rl;m.max=nl;m.now=tl;m.utc=ue;m.unix=Po;m.months=Fo;m.isDate=br;m.locale=Oe;m.invalid=Hr;m.duration=ae;m.isMoment=te;m.weekdays=Yo;m.parseZone=Ao;m.localeData=_e;m.isDuration=Br;m.monthsShort=Bo;m.weekdaysMin=Vo;m.defineLocale=En;m.updateLocale=Pi;m.locales=Ai;m.weekdaysShort=No;m.normalizeUnits=Q;m.relativeTimeRounding=mu;m.relativeTimeThreshold=gu;m.calendarFormat=Ml;m.prototype=d;m.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var ee=(e=>(e.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",e.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",e.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",e.GOD_TRO="GOD_TRO",e))(ee||{}),Zn=(e=>(e.VURDER_TILBAKEKREVING="5002",e))(Zn||{});const fu="_infoSummary_14z0n_1",ku="_positivNumber_14z0n_8",pu="_redNumber_14z0n_12",hu="_resultName_14z0n_17",mr={infoSummary:fu,positivNumber:ku,redNumber:pu,resultName:hu},ka=({fom:e,tom:r,feilutbetaling:n,arsakHendelseNavn:t})=>{const a=Aa(e,r);return s.jsxs(U,{gap:"space-8",className:mr.infoSummary,children:[s.jsxs(L,{justify:"space-between",children:[s.jsx(De,{size:"small",children:`${V(e).format(er)} - ${V(r).format(er)}`}),s.jsx(z,{size:"small",children:a.formattedString})]}),s.jsxs(L,{gap:"space-16",children:[s.jsxs(z,{size:"small",className:mr.resultName,children:[s.jsx(k,{id:"PeriodeInformasjon.Feilutbetaling"}),":",s.jsx("span",{className:n?mr.redNumber:mr.positivNumber,children:rr(n)})]}),t&&s.jsx(z,{size:"small",className:mr.resultName,children:t})]})]})};ka.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var G=(e=>(e.FORSETT="FORSETT",e.GROVT_UAKTSOM="GROVT_UAKTSOM",e.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",e))(G||{});const yu=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var pa=(e=>(e.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",e.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",e.STOERRELSE_BELOEP="STOERRELSE_BELOEP",e.TID_FRA_UTBETALING="TID_FRA_UTBETALING",e.ANNET="ANNET",e))(pa||{});const ha=({name:e,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const t=Fe(),a=`${e}.skalDetTilleggesRenter`;return C.useEffect(()=>{t.getValues(a)===void 0&&t.setValue(a,!1)},[]),s.jsx("div",{children:s.jsxs(We,{alignOffset:n?320:360,children:[n&&s.jsxs(U,{gap:"space-16",children:[s.jsx(De,{size:"small",children:s.jsx(k,{id:"AktsomhetGradForsettFormPanel.Andel"})}),s.jsx(z,{size:"small",children:"100 %"}),s.jsxs(Pe,{name:`${e}.skalDetTilleggesRenter`,control:t.control,label:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[I],isReadOnly:r,children:[s.jsx(H,{value:!0,size:"small",children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),s.jsx(H,{value:!1,size:"small",children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]}),!n&&s.jsxs(U,{gap:"space-8",children:[s.jsxs("div",{children:[s.jsx(Vr,{children:s.jsx(k,{id:"AktsomhetGradForsettFormPanel.Andel"})}),s.jsx(z,{size:"small",children:"100 %"})]}),s.jsx(z,{size:"small",children:s.jsx(k,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})};ha.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const vr="Egendefinert",wn=["30","50","70",vr],vu="_suffix_cawxu_1",bu="_suffixGrovText_cawxu_4",Tu="_labelPadding_cawxu_8",_u="_inputFelt_cawxu_12",$e={suffix:vu,suffixGrovText:bu,labelPadding:Tu,inputFelt:_u},it=vt(0),wu=Ka(99.99),Su=e=>{const r=e.toString().replace(/\s/g,""),n=parseInt(r,10);return Number.isNaN(n)?"":n},qu=(e,r)=>n=>{if((typeof n=="string"?Number(n):n)>=r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},ya=({name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,harMerEnnEnYtelse:a,feilutbetalingBelop:i,andelSomTilbakekreves:l})=>{const o=Ae(),u=Fe(),g=`${e}.skalDetTilleggesRenter`;return C.useEffect(()=>{u.getValues(g)===void 0&&u.setValue(g,!1)},[]),s.jsxs(U,{gap:"space-16",children:[s.jsx(Pe,{name:`${e}.harGrunnerTilReduksjon`,control:u.control,label:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[I],isReadOnly:n,children:s.jsxs(L,{gap:"space-20",children:[s.jsx(H,{value:!0,size:"small",children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),s.jsx(H,{value:!1,size:"small",children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})}),r&&s.jsx(We,{alignOffset:24,children:s.jsxs(L,{gap:"space-16",children:[!a&&l!==vr&&s.jsxs(s.Fragment,{children:[s.jsx(De,{size:"small",children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),s.jsxs(L,{gap:"space-8",children:[s.jsx(ht,{name:`${e}.andelSomTilbakekreves`,control:u.control,label:"",validate:[I],selectValues:wn.map(f=>s.jsx("option",{value:f,children:f},f))}),s.jsx("div",{className:$e.suffix,children:"%"})]})]}),!a&&l===vr&&s.jsxs(s.Fragment,{children:[s.jsx(De,{size:"small",children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),s.jsxs(L,{gap:"space-16",children:[s.jsx(fn,{name:`${e}.andelSomTilbakekrevesManuell`,control:u.control,className:$e.inputFelt,readOnly:n,validate:[I,it,wu],normalizeOnBlur:f=>Number.isNaN(f)?f:parseFloat(f.toString()).toFixed(2),format:f=>f.toString().replace(".",","),parse:f=>f.toString().replace(",",".")}),s.jsx("div",{className:t===G.GROVT_UAKTSOM?$e.suffixGrovText:$e.suffix,children:"%"})]})]}),a&&s.jsx(fn,{name:`${e}.belopSomSkalTilbakekreves`,control:u.control,label:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[I,it,qu(o,i)],readOnly:n,format:rr,parse:Su}),t===G.GROVT_UAKTSOM&&s.jsxs("div",{children:[s.jsx(Vr,{children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),s.jsx(z,{size:"small",className:$e.labelPadding,children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),r===!1&&s.jsxs(We,{alignOffset:90,children:[s.jsx(Vr,{children:s.jsx(k,{id:a?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),s.jsxs(U,{gap:"space-16",children:[s.jsx(z,{size:"small",className:$e.labelPadding,children:a?rr(i):"100%"}),t===G.GROVT_UAKTSOM&&s.jsx(Pe,{name:g,control:u.control,label:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[I],isReadOnly:n,children:s.jsxs(L,{gap:"space-20",children:[s.jsx(H,{value:!0,size:"small",children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),s.jsx(H,{value:!1,size:"small",children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})})]})]})]})};ya.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const ju=jn(3),xu=xn(1500),Sn=({name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:i,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:u})=>{const g=Ae(),{watch:f,control:y}=Fe(),h=!i.some(A=>!!f(`${e}.${A.kode}`)),P=Fa(e,h?g.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return s.jsxs(U,{gap:"space-16",children:[s.jsx(De,{size:"small",children:s.jsx(k,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),s.jsx("div",{children:i.map(A=>s.jsx(Ba,{name:`${e}.${A.kode}`,control:y,label:A.navn,readOnly:n},A.kode))}),a&&s.jsx(fr,{name:`${e}.annetBegrunnelse`,control:y,label:"",validate:[I,ju,xu,Ur],maxLength:1500,readOnly:n}),P&&s.jsx(Ya,{children:P}),s.jsx(ya,{name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:u})]})};Sn.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Mu="_explanationTextarea_1kabz_1",Ru="_panelWidth_1kabz_5",va={explanationTextarea:Mu,panelWidth:Ru},Ou=jn(3),Du=xn(1500),lt=({name:e,readOnly:r})=>{const n=Ae(),{control:t}=Fe();return s.jsxs(U,{gap:"space-16",children:[s.jsx(De,{size:"small",children:s.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),s.jsx(fr,{name:`${e}.sarligGrunnerBegrunnelse`,control:t,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[I,Ou,Du,Ur],maxLength:1500,readOnly:r,className:va.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]})},ba=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:i,feilutbetalingBelop:l,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:u,erValgtResultatTypeForstoBurdeForstaatt:g,name:f})=>{const{control:y,watch:h}=Fe(),P=h(`${f}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),A=g?180:200;return s.jsx(We,{alignOffset:n===G.GROVT_UAKTSOM?A:20,children:s.jsxs("div",{className:va.panelWidth,children:[n===G.SIMPEL_UAKTSOM&&o&&s.jsxs(s.Fragment,{children:[s.jsx(Pe,{name:`${f}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,control:y,label:s.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[I],isReadOnly:r,children:s.jsxs(L,{gap:"space-16",children:[s.jsx(H,{value:!0,size:"small",children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),s.jsx(H,{value:!1,size:"small",children:s.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})}),P&&s.jsxs("div",{style:{marginTop:"10px"},children:[s.jsx(lt,{name:f,readOnly:r}),s.jsx(Sn,{name:f,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:i,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:n,andelSomTilbakekreves:u})]}),P===!1&&s.jsx("div",{style:{marginTop:"10px"},children:s.jsx(We,{alignOffset:55,children:s.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})})]}),(n!==G.SIMPEL_UAKTSOM||!o)&&s.jsxs(s.Fragment,{children:[s.jsx(lt,{name:f,readOnly:r}),s.jsx(Sn,{name:f,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:i,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:n,andelSomTilbakekreves:u})]})]})})};ba.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Ta=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,erValgtResultatTypeForstoBurdeForstaatt:a,sarligGrunnTyper:i,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:g,name:f})=>s.jsxs(s.Fragment,{children:[n===G.FORSETT&&s.jsx(ha,{name:f,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:a}),n!==G.FORSETT&&s.jsx(ba,{name:f,harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:i,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:a})]});Ta.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Pu=[G.GROVT_UAKTSOM,G.SIMPEL_UAKTSOM,G.FORSETT],Au={[G.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[G.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[G.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},sr=({readOnly:e,resetFields:r,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:t,erSerligGrunnAnnetValgt:a=!1,erValgtResultatTypeForstoBurdeForstaatt:i=!1,aktsomhetTyper:l,sarligGrunnTyper:o,antallYtelser:u,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:f,andelSomTilbakekreves:y,name:h})=>{const{control:P}=Fe();return s.jsxs(s.Fragment,{children:[s.jsx(Pe,{name:`${h}.handletUaktsomhetGrad`,control:P,label:s.jsx(k,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[I],isReadOnly:e,onChange:r,children:s.jsx(L,{gap:"space-20",children:l.map(A=>s.jsx(H,{value:A.kode,size:"small",children:i?s.jsx(k,{id:Au[A.kode]}):A.navn},A.kode))})}),Pu.some(A=>A===n)&&s.jsx(Ta,{name:`${h}.${n}`,harGrunnerTilReduksjon:t,readOnly:e,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:i,sarligGrunnTyper:o,harMerEnnEnYtelse:u>1,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:f,andelSomTilbakekreves:y})]})},Fu=(e,r)=>{const n=parseInt(e,10);return!r||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Bu=(e,r)=>{const n=parseFloat(e);return!r||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Yu=(e,r)=>{if(e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=r.reduce((i,l)=>e[l.kode]?i.concat(l.kode):i,[]),{harGrunnerTilReduksjon:t}=e,a=e.andelSomTilbakekreves===vr?Bu(e.andelSomTilbakekrevesManuell,t):Fu(e.andelSomTilbakekreves,t);return{harGrunnerTilReduksjon:t,ileggRenter:t?void 0:e.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:e.harGrunnerTilReduksjon?yt(e.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:e.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...a}};sr.transformValues=(e,r,n)=>{const t=e[e.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:e.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:t?Yu(t,r):null}};const Nu=(e,r)=>({andelSomTilbakekreves:r===void 0||wn.includes(r)?r:vr,andelSomTilbakekrevesManuell:r&&wn.includes(r)?void 0:e.andelTilbakekreves,harGrunnerTilReduksjon:e.harGrunnerTilReduksjon,skalDetTilleggesRenter:e.ileggRenter,belopSomSkalTilbakekreves:e.tilbakekrevesBelop,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:Ar(e.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...e.sarligGrunner?e.sarligGrunner.reduce((n,t)=>({...n,[t.kode??t]:!0}),{}):{}});sr.buildInitalValues=e=>{const{aktsomhet:r,aktsomhetInfo:n}=e,t=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,a=n?{[r.kode&&"kode"in r?r.kode:r]:Nu(n,t)}:{};return{handletUaktsomhetGrad:r&&r.kode&&"kode"in r?r.kode:r,...a}};sr.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildInitalValues",docblock:null,modifiers:["static"],params:[{name:"vilkarResultatInfo",optional:!1,type:{name:"signature",type:"object",raw:`{
  aktsomhet: string | any;
  aktsomhetInfo?: AktsomhetInfo;
}`,signature:{properties:[{key:"aktsomhet",value:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}],required:!0}},{key:"aktsomhetInfo",value:{name:"signature",type:"object",raw:`{
  sarligGrunner: string[];
  harGrunnerTilReduksjon: boolean;
  andelTilbakekreves: number;
  ileggRenter: boolean;
  tilbakekrevesBelop: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}}],returns:null}],displayName:"AktsomhetFormPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},resetFields:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},antallYtelser:{required:!0,tsType:{name:"number"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},aktsomhetTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Aktsomhet'>[]"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const _a=()=>{const{control:e}=Fe();return s.jsxs(L,{gap:"space-16",children:[s.jsx(fr,{name:"foreldetBegrunnelse",control:e,label:s.jsx(k,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),s.jsx(Pe,{name:"periodenErForeldet",control:e,label:s.jsx(Vr,{children:s.jsx(k,{id:"ForeldetFormPanel.VurderOmPeriodenErForeldet"})}),children:s.jsx(H,{value:"true",size:"small",children:s.jsx(k,{id:"ForeldetFormPanel.PeriodenErForeldet"})})})]})};_a.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const Vu="_arrowbox_ych2z_1",Iu="_tilbakekrevdBelopInput_ych2z_4",ot={arrowbox:Vu,tilbakekrevdBelopInput:Iu},Uu=vt(1),Eu=e=>{const r=e.toString().replace(/\s/g,""),n=parseInt(r,10);return Number.isNaN(n)?"":n},Gu=(e,r)=>n=>{if((typeof n=="string"?Number(n):n)>r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ir=({name:e,readOnly:r,erBelopetIBehold:n,feilutbetalingBelop:t})=>{const a=Ae(),{control:i}=Fe();return s.jsxs(U,{gap:"space-8",children:[s.jsx(Pe,{name:`${e}.erBelopetIBehold`,control:i,label:s.jsx(k,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[I],isReadOnly:r,children:s.jsxs(L,{gap:"space-20",children:[s.jsx(H,{value:!0,size:"small",children:s.jsx(k,{id:"BelopetMottattIGodTroFormPanel.Ja"})}),s.jsx(H,{value:!1,size:"small",children:s.jsx(k,{id:"BelopetMottattIGodTroFormPanel.Nei"})})]})}),s.jsxs("div",{className:ot.arrowbox,children:[n===!0&&s.jsx(We,{alignOffset:25,children:s.jsx(fn,{name:`${e}.tilbakekrevdBelop`,label:s.jsx(k,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[I,Uu,Gu(a,t)],readOnly:r,className:ot.tilbakekrevdBelopInput,format:rr,parse:Eu})}),n===!1&&s.jsx(We,{alignOffset:90,children:s.jsx(z,{size:"small",children:s.jsx(k,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ir.transformValues=(e,r)=>({"@type":"godTro",begrunnelse:r,erBelopetIBehold:e.erBelopetIBehold,tilbakekrevesBelop:e.erBelopetIBehold?yt(e.tilbakekrevdBelop):void 0});ir.buildIntialValues=e=>({erBelopetIBehold:e.erBelopetIBehold,tilbakekrevdBelop:e.tilbakekrevesBelop});ir.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Lu="_feilutbetalingTable_1fsd2_1",Wu={feilutbetalingTable:Lu},wa=({ytelser:e})=>{if(e.length===0)return null;let r=0;return s.jsxs(fe,{className:Wu.feilutbetalingTable,children:[s.jsx(fe.Header,{children:s.jsxs(fe.Row,{children:[s.jsx(fe.HeaderCell,{scope:"col",children:s.jsx(k,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),s.jsx(fe.HeaderCell,{scope:"col",children:s.jsx(k,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),s.jsx(fe.Body,{children:e.map(n=>(r+=1,s.jsxs(fe.Row,{children:[s.jsx(fe.DataCell,{children:s.jsx(z,{size:"small",children:n.aktivitet})}),s.jsx(fe.DataCell,{children:s.jsx(z,{size:"small",children:rr(n.belop)})})]},n.aktivitet+n.belop+r)))})]})};wa.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Cu="_explanationTextarea_1udkt_1",Hu="_leftColumn_1udkt_5",zu="_rightColumn_1udkt_9",$u="_selectWidth_1udkt_12",Rr={explanationTextarea:Cu,leftColumn:Hu,rightColumn:zu,selectWidth:$u},ut=jn(3),dt=xn(1500),Sa=({data:e,periode:r,skjulPeriode:n,readOnly:t,oppdaterPeriode:a,vilkarsVurdertePerioder:i,kodeverkSamlingFpTilbake:l,antallPerioderMedAksjonspunkt:o})=>{const u=Ae(),[g,f]=C.useState(!1),y=gt({defaultValues:r}),h=y.watch("valgtVilkarResultatType"),P=y.watch(`${h}.handletUaktsomhetGrad`),A=y.watch(`${h}.${P}.harGrunnerTilReduksjon`),Se=y.watch(`${h}.${P}.andelSomTilbakekreves`),S=y.watch(`${h}.${P}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),se=y.watch(`${h}.${P}.${pa.ANNET}`),B=y.watch(`${h}.erBelopetIBehold`),me=Jn(h),x=Jn(P),qe=e.redusertBeloper,Sr=l.SærligGrunn,Be=l.VilkårResultat,Ye=yu.map(j=>l.Aktsomhet.find(ie=>ie.kode===j)),tn=(j,ie)=>{const X=j.target.value.split("_"),je=ie.find(ge=>ge.fom===X[0]&&ge.tom===X[1]),xe=je?.valgtVilkarResultatType,He=je&&xe?je[xe]:void 0,Ve=JSON.parse(JSON.stringify(He));if(xe!==ee.GOD_TRO){const{handletUaktsomhetGrad:ge}=Ve;ge!==G.FORSETT&&r?.harMerEnnEnYtelse!==je?.harMerEnnEnYtelse&&(Ve[ge].andelSomTilbakekreves=null,Ve[ge].andelSomTilbakekrevesManuell=null,Ve[ge].belopSomSkalTilbakekreves=null)}y.setValue("valgtVilkarResultatType",xe,{shouldDirty:!0}),y.setValue("begrunnelse",je?.begrunnelse,{shouldDirty:!0}),y.setValue("vurderingBegrunnelse",je?.vurderingBegrunnelse,{shouldDirty:!0}),xe&&y.setValue(xe,Ve,{shouldDirty:!0}),j.preventDefault()},lr=()=>{f(!g),a(y.getValues())},an=j=>{o>1&&e.erTotalBelopUnder4Rettsgebyr&&S===!1?f(!g):a(j)},sn=()=>{me&&y.resetField(me)},ln=()=>{x&&y.resetField(`${h}.${x}`)},Ne=i.filter(j=>!j.erForeldet&&j.valgtVilkarResultatType!=null);return s.jsx(ct,{formMethods:y,onSubmit:an,children:s.jsxs(U,{gap:"space-16",children:[s.jsx(U,{gap:"space-8",children:qe&&qe.map(j=>s.jsx(z,{size:"small",children:s.jsx(k,{id:j.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:rr(j.belop),b:Na}})},j.belop))}),s.jsx(wa,{ytelser:e.ytelser}),!t&&!e.erForeldet&&Ne.length>0&&s.jsx(ht,{name:"perioderForKopi",control:y.control,selectValues:Ne.map(j=>{const ie=`${j.fom}_${j.tom}`,X=`${V(j.fom).format(er)} - ${V(j.tom).format(er)}`;return s.jsx("option",{value:ie,children:X},ie)}),onChange:j=>tn(j,Ne),className:Rr.selectWidth,label:s.jsx(k,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),s.jsxs(L,{gap:"space-16",wrap:!0,children:[s.jsxs("div",{className:Rr.leftColumn,children:[e.erForeldet&&s.jsx(_a,{}),!e.erForeldet&&s.jsxs(U,{gap:"space-8",children:[s.jsx(Nr,{size:"small",level:"3",children:s.jsx(k,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),s.jsx(fr,{name:"begrunnelse",control:y.control,label:u.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[I,ut,dt,Ur],maxLength:1500,readOnly:t,className:Rr.explanationTextarea,description:u.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),s.jsx(Pe,{name:"valgtVilkarResultatType",control:y.control,label:s.jsx(k,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[I],isReadOnly:t,onChange:sn,children:Be.map(j=>s.jsx(H,{value:j.kode,size:"small",children:j.navn},j.kode))})]})]}),s.jsx("div",{className:Rr.rightColumn,children:h&&s.jsxs(U,{gap:"space-8",children:[s.jsx(Nr,{size:"small",level:"3",children:s.jsx(k,{id:h===ee.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),s.jsx(fr,{name:"vurderingBegrunnelse",control:y.control,label:u.formatMessage({id:h===ee.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[I,ut,dt,Ur],maxLength:1500,readOnly:t}),h===ee.GOD_TRO&&s.jsx(ir,{name:h,readOnly:t,erBelopetIBehold:B,feilutbetalingBelop:e.feilutbetaling}),h!==ee.GOD_TRO&&s.jsx(sr,{name:h,harGrunnerTilReduksjon:A,readOnly:t,handletUaktsomhetGrad:P,resetFields:ln,erSerligGrunnAnnetValgt:se,erValgtResultatTypeForstoBurdeForstaatt:h===ee.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:Ye,sarligGrunnTyper:Sr,antallYtelser:e.ytelser.length,feilutbetalingBelop:e.feilutbetaling,erTotalBelopUnder4Rettsgebyr:e.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:Se},h)]})})]}),s.jsxs(L,{gap:"space-16",children:[s.jsx(Z,{size:"small",variant:"primary",disabled:!y.formState.isDirty||t,children:s.jsx(k,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),s.jsx(Z,{size:"small",variant:"secondary",onClick:n,type:"button",children:s.jsx(k,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),g&&s.jsx(as,{showModal:!0,submit:lr})]})})};Sa.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
} & DetaljertFeilutbetalingPeriode`,elements:[{name:"signature",type:"object",raw:`{
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
}`,signature:{properties:[{key:"erTotalBelopUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"erForeldet",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: HendelseType;
    hendelseUndertype?: HendelseUnderType;
  };
  feilutbetaling: number;
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  redusertBeloper?: {
    erTrekk: boolean;
    belop: number;
  }[];
  oppfyltValg?: string;
  foreldet?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"signature",type:"object",raw:`{
  hendelseType: HendelseType;
  hendelseUndertype?: HendelseUnderType;
}`,signature:{properties:[{key:"hendelseType",value:{name:"HendelseType",required:!0}},{key:"hendelseUndertype",value:{name:"HendelseUnderType",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`,required:!0}},{key:"redusertBeloper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erTrekk: boolean;
  belop: number;
}`,signature:{properties:[{key:"erTrekk",value:{name:"boolean",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  erTrekk: boolean;
  belop: number;
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},periode:{required:!1,tsType:{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]},description:""},skjulPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: CustomVilkarsVurdertePeriode) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]},name:"values"}],return:{name:"void"}}},description:""},vilkarsVurdertePerioder:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  HendelseType: HendelseType;
  SærligGrunn: SærligGrunn;
  VilkårResultat: VilkarResultatInfo;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"Aktsomhet",required:!0}},{key:"HendelseType",value:{name:"HendelseType",required:!0}},{key:"SærligGrunn",value:{name:"SærligGrunn",required:!0}},{key:"VilkårResultat",value:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
  aktsomhet?: string;
  aktsomhetInfo?: AktsomhetInfo;
  erBelopetIBehold?: boolean;
  tilbakekrevesBelop?: number;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktsomhet",value:{name:"string",required:!1}},{key:"aktsomhetInfo",value:{name:"signature",type:"object",raw:`{
  sarligGrunner: string[];
  harGrunnerTilReduksjon: boolean;
  andelTilbakekreves: number;
  ileggRenter: boolean;
  tilbakekrevesBelop: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const Ku="_margin_1wl4t_1",Or={margin:Ku},Zu={danger:s.jsx(ns,{}),success:s.jsx(rs,{}),warning:s.jsx(es,{})},Ju=(e,r)=>e.fom<r.fom?-1:e.fom>r.fom?1:0,Qu=e=>{const r=e.isGodkjent?"success":"danger";return e.isAksjonspunktOpen?"warning":r},Xu=(e=[])=>[...e].sort(Ju).map(r=>({...r,status:Qu(r)})),ed=e=>e===gr.MOR||e===gr.MEDMOR?s.jsx(ss,{width:20,height:20,color:"var(--ax-danger-300)"}):e===gr.FAR?s.jsx(is,{width:20,height:20,color:"var(--ax-accent-700)"}):s.jsx(Xa,{width:20,height:20}),qa=({perioder:e,valgtPeriode:r,setPeriode:n,relasjonsRolleType:t,relasjonsRolleTypeKodeverk:a})=>{const i=Ae(),l=Xu(e),o=B=>{const me=e.find(x=>x.id===B);me&&n(me)},u=V(l[0].fom),g=V(l[l.length-1].tom),[f,y]=C.useState(u),[h,P]=C.useState(g),A=()=>{f.subtract(1,"month").isBefore(u)||(y(f.subtract(1,"month")),P(h.subtract(1,"month")))},Se=()=>{h.add(1,"month").isAfter(g)||(y(f.add(1,"month")),P(h.add(1,"month")))},S=()=>{f.add(3,"month").isAfter(h)||(y(f.add(1,"month")),P(h.subtract(1,"month")))},se=()=>{h.add(1,"month").diff(f.subtract(1,"month"),"months")<36&&(y(f.subtract(1,"month")),P(h.add(1,"month")))};return s.jsxs(U,{gap:"space-16",children:[s.jsx(on,{startDate:V(f).toDate(),endDate:V(h).add(1,"days").toDate(),children:s.jsx(on.Row,{label:a.find(B=>B.kode===t)?.navn||"-",icon:ed(t),children:l.map(B=>s.jsx(on.Period,{start:V(B.fom).toDate(),end:V(B.tom).toDate(),status:B.status,icon:Zu[B.status],onSelectPeriod:()=>o(B.id),isActive:r?.id===B.id,"aria-controls":"panel-tilbakekreving",id:B.id.toString()},B.id))})}),s.jsxs(L,{justify:"end",children:[s.jsx(Z,{className:Or.margin,size:"small",icon:s.jsx(Ja,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),s.jsx(Z,{className:Or.margin,size:"small",icon:s.jsx(Qa,{"aria-hidden":!0}),onClick:se,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),s.jsx(Z,{className:Or.margin,size:"small",icon:s.jsx(kt,{"aria-hidden":!0}),onClick:A,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),s.jsx(Z,{className:Or.margin,size:"small",icon:s.jsx(pt,{"aria-hidden":!0}),onClick:Se,variant:"primary-neutral",type:"button",title:i.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};qa.__docgenInfo={description:`TilbakekrevingTimeLine

Masserer data og populerer felten samt formatterar tidslinjen for tilbakekreving`,methods:[],displayName:"TilbakekrevingTimeline",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"isAksjonspunktOpen",value:{name:"boolean",required:!0}},{key:"isGodkjent",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}>`}],raw:"TidslinjePeriode[]"},description:""},valgtPeriode:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"isAksjonspunktOpen",value:{name:"boolean",required:!0}},{key:"isGodkjent",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}>`},description:""},setPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(periode?: TidslinjePeriode) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"isAksjonspunktOpen",value:{name:"boolean",required:!0}},{key:"isGodkjent",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}>`},name:"periode"}],return:{name:"void"}}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"RelasjonsRolleType"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const qn=(e,r)=>m(e.fom).diff(m(r.fom)),mt=e=>!e.erForeldet&&(e.begrunnelse===void 0||e.erSplittet),rd=e=>{const r=e[e.valgtVilkarResultatType],n=r[r.handletUaktsomhetGrad];return r.tilbakekrevdBelop?{...e,[e.valgtVilkarResultatType]:{...Ir(r,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...e,[e.valgtVilkarResultatType]:{...r,[r.handletUaktsomhetGrad]:{...Ir(n,"belopSomSkalTilbakekreves")}}}:e},nd=(e,r=[])=>r.map((n,t)=>{const a=e.find(o=>o.fom===n.fom&&o.tom===n.tom),i=a&&a[a.valgtVilkarResultatType]?a[a.valgtVilkarResultatType].erBelopetIBehold:void 0,l=a?!!a.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&(a?.begrunnelse===void 0||l),isGodkjent:!(n.erForeldet||i===!1),id:t}}),ja=(e,r)=>r.find(n=>!m(e.fom).isBefore(m(n.fom))&&!m(e.tom).isAfter(m(n.tom))),td=(e,r)=>r.every(n=>!(m(e.fom).isSameOrBefore(m(n.tom))&&m(n.fom).isSameOrBefore(m(e.tom)))),ad=(e,r,n)=>{const a=e.reduce((u,g)=>u+g.feilutbetaling,0)<n*4,l=r.vilkarsVurdertePerioder.map(u=>{const g=ja(u,e);return{...g,harMerEnnEnYtelse:g&&g.ytelser.length>1,...Ir(u,"feilutbetalingBelop"),feilutbetaling:u.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:a}});return{perioder:e.filter(u=>td(u,l)).map(u=>({...u,harMerEnnEnYtelse:u.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:a})).concat(l)}},sd=(e,r)=>{if(!(!e||!r))return r.map(n=>{const t=ja(n,e.perioder),a=t.foreldelseVurderingType?t.foreldelseVurderingType===kn.FORELDET:t.foreldet;return{redusertBeloper:t.redusertBeloper,ytelser:t.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:t.feilutbetaling,erTotalBelopUnder4Rettsgebyr:t.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:t.årsak,begrunnelse:t.begrunnelse,erForeldet:a||!1}})},id=(e,r)=>{const{vilkarResultat:n,begrunnelse:t,vilkarResultatInfo:a}=e,i=n?.kode??n;let l;const o=e.erForeldet??e.foreldet;if(o){const y=r.perioder.find(h=>h.fom===e.fom&&h.tom===e.tom);l={erForeldet:o,periodenErForeldet:!0,foreldetBegrunnelse:y?Ar(y.begrunnelse):void 0}}else l={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const u={valgtVilkarResultatType:i,begrunnelse:Ar(t),harMerEnnEnYtelse:e.ytelser.length>1,...l},g=i===ee.GOD_TRO?ir.buildIntialValues(a):{},f=i!==void 0&&i!==ee.GOD_TRO?sr.buildInitalValues(a):{};return{...u,vurderingBegrunnelse:a?Ar(a.begrunnelse):void 0,[u.valgtVilkarResultatType]:{...g,...f}}},ld=(e,r)=>{const{valgtVilkarResultatType:n,begrunnelse:t,vurderingBegrunnelse:a}=e,i=e[n],l=n===ee.GOD_TRO?ir.transformValues(i,a):{},o=n!==ee.GOD_TRO?sr.transformValues(i,r,a):{};return{begrunnelse:t,fom:e.fom,tom:e.tom,vilkarResultat:n,vilkarResultatInfo:{...l,...o}}},od=(e,r)=>e.perioder.map(n=>({...id(n,r),fom:n.fom,tom:n.tom})).sort(qn),ud=(e,r)=>({kode:Zn.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:e.filter(n=>!n.erForeldet).map(n=>ld(n,r))}),dd=e=>{if(!e||e.reduce((t,a)=>a.erForeldet?t:t+1,0)<2)return;const n=e.reduce((t,a)=>{const{valgtVilkarResultatType:i}=a,l=a[i],{handletUaktsomhetGrad:o}=l,u=l[o];return u&&u.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?t+1:t},0);if(n>0&&n!==e.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},xa=({perioderForeldelse:e,kodeverkSamlingFpTilbake:r,vilkarvurderingsperioder:n,submitCallback:t,isReadOnly:a,alleMerknaderFraBeslutter:i,vilkarvurdering:l,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:u,beregnBelop:g,behandling:f,formData:y,setFormData:h})=>{const P=n.perioder,A=n.rettsgebyr,Se=ad(P,l,A),[S,se]=C.useState(y||od(Se,e)),[B,me]=C.useState(!!y),[x,qe]=C.useState(S?.find(mt)),[Sr,Be]=C.useState(!1),[Ye,tn]=C.useState();C.useEffect(()=>{tn(dd(S))},[S]);const lr=sd(Se,S),an=S.reduce((O,N)=>N.erForeldet?O:O+1,0),sn=i[Zn.VURDER_TILBAKEKREVING],ln=()=>{Be(!0),t(ud(S,r.SærligGrunn))},Ne=nd(S,lr),j=Ne.some(O=>O.isAksjonspunktOpen),ie=x?Ne.find(O=>O.fom===x.fom&&O.tom===x.tom):void 0,X=O=>{const N=O?S.find(ce=>ce.fom===O.fom&&ce.tom===O.tom):void 0;qe(N)},je=()=>{const O=S.findIndex(N=>N.fom===x?.fom&&N.tom===x?.tom);X(S[O+1])},xe=()=>{const O=S.findIndex(N=>N.fom===x?.fom&&N.tom===x?.tom);X(S[O-1])},He=()=>{X(void 0)},Ve=O=>{const N=Ir(O,"erSplittet"),qr=S.filter(Ue=>Ue.fom!==N.fom&&Ue.tom!==N.tom).concat(N).sort(qn);se(qr),h(qr),me(!0),He();const or=qr.find(mt);or&&X(or)},ge=O=>{const N=S.find(ce=>ce.fom===x?.fom&&ce.tom===x?.tom);if(N){const ce=O.map(Ue=>({...rd(N),...Ue,erSplittet:!0})),or=S.filter(Ue=>Ue.fom!==x?.fom&&Ue.tom!==x?.tom).concat(ce).sort(qn);He(),me(!0),se(or),h(or),X(ce[0])}},Ie=lr?lr.find(O=>O.fom===x?.fom&&O.tom===x?.tom):void 0;return s.jsx(Va,{merknaderFraBeslutter:sn,withoutBorder:!0,children:s.jsxs(U,{gap:"space-16",children:[s.jsx(Nr,{size:"small",level:"2",children:s.jsx(k,{id:"Behandlingspunkt.Tilbakekreving"})}),j&&s.jsx(Ia,{children:s.jsx(k,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),S&&s.jsxs(s.Fragment,{children:[s.jsx(qa,{perioder:Ne,valgtPeriode:ie,setPeriode:X,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:u}),x&&Ie&&s.jsx("div",{id:"panel-tilbakekreving","aria-controls":ie?.id.toString(),children:s.jsx(Ua.New,{borderWidth:"1",padding:"4",children:s.jsxs(U,{gap:"space-16",children:[s.jsx(wt,{setNestePeriode:je,setForrigePeriode:xe,periode:Ie,readOnly:a,oppdaterSplittedePerioder:ge,behandlingUuid:f.uuid,beregnBelop:g,lukkPeriode:He}),s.jsx(ka,{feilutbetaling:Ie.feilutbetaling,fom:Ie.fom,tom:Ie.tom,arsakHendelseNavn:r.HendelseType.find(O=>O.kode===Ie.årsak?.hendelseType)?.navn}),s.jsx(Sa,{periode:x,data:Ie,antallPerioderMedAksjonspunkt:an,readOnly:a||x?.erForeldet===!0,skjulPeriode:He,oppdaterPeriode:Ve,kodeverkSamlingFpTilbake:r,vilkarsVurdertePerioder:S},ie?.id)]})})})]}),Ye&&s.jsx(ft,{variant:"error",children:s.jsx(k,{id:Ye})}),s.jsx("div",{children:s.jsx(Ea,{isReadOnly:a||x?.erForeldet===!0,isDirty:B,isSubmittable:!j&&!x&&!Ye,onClick:ln,isSubmitting:Sr})})]})})};xa.__docgenInfo={description:`TilbakekrevingForm

Behandlingspunkt Tilbakekreving. Setter opp en tidslinje som lar en velge periode. Ved valg blir et detaljevindu vist.`,methods:[],displayName:"TilbakekrevingForm",props:{perioderForeldelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder: FeilutbetalingPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"foreldelseVurderingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"foreldelsesfrist",value:{name:"Date",required:!1}},{key:"oppdagelsesDato",value:{name:"Date",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}>`}],raw:"FeilutbetalingPeriode[]",required:!0}}]}}],raw:`Readonly<{
  perioder: FeilutbetalingPeriode[];
}>`},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  HendelseType: HendelseType;
  SærligGrunn: SærligGrunn;
  VilkårResultat: VilkarResultatInfo;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"Aktsomhet",required:!0}},{key:"HendelseType",value:{name:"HendelseType",required:!0}},{key:"SærligGrunn",value:{name:"SærligGrunn",required:!0}},{key:"VilkårResultat",value:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
  aktsomhet?: string;
  aktsomhetInfo?: AktsomhetInfo;
  erBelopetIBehold?: boolean;
  tilbakekrevesBelop?: number;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktsomhet",value:{name:"string",required:!1}},{key:"aktsomhetInfo",value:{name:"signature",type:"object",raw:`{
  sarligGrunner: string[];
  harGrunnerTilReduksjon: boolean;
  andelTilbakekreves: number;
  ileggRenter: boolean;
  tilbakekrevesBelop: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},vilkarvurderingsperioder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  perioder: DetaljertFeilutbetalingPeriode[];
  rettsgebyr: number;
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: HendelseType;
    hendelseUndertype?: HendelseUnderType;
  };
  feilutbetaling: number;
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  redusertBeloper?: {
    erTrekk: boolean;
    belop: number;
  }[];
  oppfyltValg?: string;
  foreldet?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"signature",type:"object",raw:`{
  hendelseType: HendelseType;
  hendelseUndertype?: HendelseUnderType;
}`,signature:{properties:[{key:"hendelseType",value:{name:"HendelseType",required:!0}},{key:"hendelseUndertype",value:{name:"HendelseUnderType",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`,required:!0}},{key:"redusertBeloper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erTrekk: boolean;
  belop: number;
}`,signature:{properties:[{key:"erTrekk",value:{name:"boolean",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  erTrekk: boolean;
  belop: number;
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}],raw:"DetaljertFeilutbetalingPeriode[]",required:!0}},{key:"rettsgebyr",value:{name:"number",required:!0}}]}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: VilkårsvurderingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  vilkarsVurdertePerioder: {
    fom: string;
    tom: string;
    vilkarResultat: string;
    begrunnelse?: string;
    vilkarResultatInfo: {
      begrunnelse?: string;
    } & (VilkårResultatAnnet | VilkårResultatGodTro);
    feilutbetalingBelop?: number;
  }[];
} & AksjonspunktTilBekreftelse<TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING>`,elements:[{name:"signature",type:"object",raw:`{
  vilkarsVurdertePerioder: {
    fom: string;
    tom: string;
    vilkarResultat: string;
    begrunnelse?: string;
    vilkarResultatInfo: {
      begrunnelse?: string;
    } & (VilkårResultatAnnet | VilkårResultatGodTro);
    feilutbetalingBelop?: number;
  }[];
}`,signature:{properties:[{key:"vilkarsVurdertePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  vilkarResultat: string;
  begrunnelse?: string;
  vilkarResultatInfo: {
    begrunnelse?: string;
  } & (VilkårResultatAnnet | VilkårResultatGodTro);
  feilutbetalingBelop?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"vilkarResultat",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarResultatInfo",value:{name:"intersection",raw:`{
  begrunnelse?: string;
} & (VilkårResultatAnnet | VilkårResultatGodTro)`,elements:[{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]}},{name:"unknown"}],required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:`{
  fom: string;
  tom: string;
  vilkarResultat: string;
  begrunnelse?: string;
  vilkarResultatInfo: {
    begrunnelse?: string;
  } & (VilkårResultatAnnet | VilkårResultatGodTro);
  feilutbetalingBelop?: number;
}[]`,required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},vilkarvurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  vilkarsVurdertePerioder: VilkårsvurdertPeriode[];
}`,signature:{properties:[{key:"vilkarsVurdertePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  vilkarResultat: string;
  begrunnelse: string;
  vilkarResultatInfo: VilkarResultatInfo;
  feilutbetalingBelop?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"vilkarResultat",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"vilkarResultatInfo",value:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
  aktsomhet?: string;
  aktsomhetInfo?: AktsomhetInfo;
  erBelopetIBehold?: boolean;
  tilbakekrevesBelop?: number;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktsomhet",value:{name:"string",required:!1}},{key:"aktsomhetInfo",value:{name:"signature",type:"object",raw:`{
  sarligGrunner: string[];
  harGrunnerTilReduksjon: boolean;
  andelTilbakekreves: number;
  ileggRenter: boolean;
  tilbakekrevesBelop: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:"VilkårsvurdertPeriode[]",required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"RelasjonsRolleType"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  perioder: {
    belop: number;
    fom: string;
    tom: string;
    begrunnelse: string;
  }[];
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"belop",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}[]`,required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<{ perioder: { belop: number }[] }>"}}},description:""},behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  fristBehandlingPaaVent?: string;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}}]}},description:""},formData:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: CustomVilkarsVurdertePeriode[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const md=La(Tt),Ma=e=>s.jsx(Ga,{value:md,children:s.jsx(xa,{...e})});Ma.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  fristBehandlingPaaVent?: string;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}}]}},description:""},perioderForeldelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder: FeilutbetalingPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"foreldelseVurderingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"foreldelsesfrist",value:{name:"Date",required:!1}},{key:"oppdagelsesDato",value:{name:"Date",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}>`}],raw:"FeilutbetalingPeriode[]",required:!0}}]}}],raw:`Readonly<{
  perioder: FeilutbetalingPeriode[];
}>`},description:""},vilkarvurderingsperioder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  perioder: DetaljertFeilutbetalingPeriode[];
  rettsgebyr: number;
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: HendelseType;
    hendelseUndertype?: HendelseUnderType;
  };
  feilutbetaling: number;
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  redusertBeloper?: {
    erTrekk: boolean;
    belop: number;
  }[];
  oppfyltValg?: string;
  foreldet?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"signature",type:"object",raw:`{
  hendelseType: HendelseType;
  hendelseUndertype?: HendelseUnderType;
}`,signature:{properties:[{key:"hendelseType",value:{name:"HendelseType",required:!0}},{key:"hendelseUndertype",value:{name:"HendelseUnderType",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`,required:!0}},{key:"redusertBeloper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erTrekk: boolean;
  belop: number;
}`,signature:{properties:[{key:"erTrekk",value:{name:"boolean",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  erTrekk: boolean;
  belop: number;
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}],raw:"DetaljertFeilutbetalingPeriode[]",required:!0}},{key:"rettsgebyr",value:{name:"number",required:!0}}]}},description:""},vilkarvurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  vilkarsVurdertePerioder: VilkårsvurdertPeriode[];
}`,signature:{properties:[{key:"vilkarsVurdertePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  vilkarResultat: string;
  begrunnelse: string;
  vilkarResultatInfo: VilkarResultatInfo;
  feilutbetalingBelop?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"vilkarResultat",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"vilkarResultatInfo",value:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
  aktsomhet?: string;
  aktsomhetInfo?: AktsomhetInfo;
  erBelopetIBehold?: boolean;
  tilbakekrevesBelop?: number;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktsomhet",value:{name:"string",required:!1}},{key:"aktsomhetInfo",value:{name:"signature",type:"object",raw:`{
  sarligGrunner: string[];
  harGrunnerTilReduksjon: boolean;
  andelTilbakekreves: number;
  ileggRenter: boolean;
  tilbakekrevesBelop: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:"VilkårsvurdertPeriode[]",required:!0}}]}},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  perioder: {
    belop: number;
    fom: string;
    tom: string;
    begrunnelse: string;
  }[];
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"belop",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}[]`,required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<{ perioder: { belop: number }[] }>"}}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  HendelseType: HendelseType;
  SærligGrunn: SærligGrunn;
  VilkårResultat: VilkarResultatInfo;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"Aktsomhet",required:!0}},{key:"HendelseType",value:{name:"HendelseType",required:!0}},{key:"SærligGrunn",value:{name:"SærligGrunn",required:!0}},{key:"VilkårResultat",value:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
  aktsomhet?: string;
  aktsomhetInfo?: AktsomhetInfo;
  erBelopetIBehold?: boolean;
  tilbakekrevesBelop?: number;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktsomhet",value:{name:"string",required:!1}},{key:"aktsomhetInfo",value:{name:"signature",type:"object",raw:`{
  sarligGrunner: string[];
  harGrunnerTilReduksjon: boolean;
  andelTilbakekreves: number;
  ileggRenter: boolean;
  tilbakekrevesBelop: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"RelasjonsRolleType"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:gd}=__STORYBOOK_MODULE_ACTIONS__,cd=Wa(Tt),fd={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:kn.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:kn.FORELDET}]},Ra={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:bt.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},qd={component:Ma,decorators:[cd],args:{submitCallback:gd("button-click"),behandling:{uuid:"1",versjon:1,status:Za.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:Ca,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:fd,vilkarvurdering:{vilkarsVurdertePerioder:[]},beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleType:gr.MOR,relasjonsRolleTypeKodeverk:[{kode:gr.MOR,kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},Dr={args:{vilkarvurderingsperioder:Ra}},Pr={args:{vilkarvurderingsperioder:{perioder:[Ra.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:bt.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};Dr.parameters={...Dr.parameters,docs:{...Dr.parameters?.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...Dr.parameters?.docs?.source}}};Pr.parameters={...Pr.parameters,docs:{...Pr.parameters?.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: {
      perioder: [defaultVilkarvurderingsperioder.perioder[0], {
        fom: '2019-04-01',
        tom: '2019-10-01',
        foreldet: false,
        feilutbetaling: 100,
        årsak: {
          hendelseType: HendelseType.MEDLEMSKAP
        },
        redusertBeloper: [],
        ytelser: [{
          aktivitet: 'Arbeidstaker',
          belop: 2050
        }]
      }],
      rettsgebyr: 1000
    }
  }
}`,...Pr.parameters?.docs?.source}}};const jd=["Default","MedToPerioder"];export{Dr as Default,Pr as MedToPerioder,jd as __namedExportsOrder,qd as default};
