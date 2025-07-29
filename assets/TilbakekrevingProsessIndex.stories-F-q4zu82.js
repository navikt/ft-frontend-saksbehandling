import{i as Pe,aa as mt,j as i,av as gt,M as qr,N as Yr,V as U,L as Oe,B as H,d as V,v as Xe,aT as Ra,G as ct,F as z,t as Oa,r as W,H as ie,aU as ft,aV as kt,an as Da,aW as Pa,ad as er,n as Ae,aY as Le,aS as De,D as Nr,as as pt,aZ as cn,a_ as Aa,aw as Fa,az as cr,E as Ba,aA as Pr,ao as ht,a$ as Zn,b0 as Ya,ax as Na,au as Va,I as Ia,aL as Ua,aX as Vr,P as Ea,m as Ga}from"./iframe-CI2doaeG.js";import{g as La}from"./withIntl-BeZpvz32.js";import{a as Wa}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as I,O as Ha,J as Ca,R as $a,l as yt,i as za,a as qn,o as jn,M as Ir,b as mr,$ as fn,Z as Ka,y as vt}from"./style-CKoygZ4L.js";import{M as k}from"./message-ViDC9aKh.js";import{S as Jn,T as ln,a as Za,b as Ja,c as Qa,d as Xa,e as es,f as rs}from"./Timeline-DnlYdtkn.js";import{S as ns}from"./Scissors-NhGwL8hE.js";import{T as ce}from"./Table-WZk0M2tm.js";import{T as ts,m as bt}from"./nb_NO-D1wVU4-3.js";import{a as as,S as ss}from"./SilhouetteFill-Cp0U9Rtd.js";const is="_button_8q57x_1",ls="_cancelButton_8q57x_5",Qn={button:is,cancelButton:ls},os=(e,r)=>n=>n&&(Ca(n)(V(e.tom.toString()).subtract(1,"day"))||$a(n)(e.fom))?r.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,us=(e,r)=>{const n=V(e.forstePeriodeTomDato).add(1,"days"),t={fom:r.fom,tom:e.forstePeriodeTomDato},a={fom:n.format(Oa),tom:r.tom};return{forstePeriode:t,andrePeriode:a}},Tt=({periodeData:e,showModal:r,cancelEvent:n,finnesBelopMed0Verdi:t,splitPeriod:a})=>{const s=Pe(),l=mt();return i.jsx(gt,{formMethods:l,onSubmit:o=>a(us(o,e)),children:i.jsxs(qr,{open:r,"aria-label":s.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[i.jsx(qr.Header,{children:i.jsx(Yr,{size:"small",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),i.jsx(qr.Body,{children:i.jsxs(U,{gap:"4",children:[i.jsxs("div",{children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.Periode"})}),i.jsx(H,{size:"small",children:`${V(e.fom.toString()).format(Xe)} - ${V(e.tom.toString()).format(Xe)}`})]}),i.jsx(Ra,{name:"forstePeriodeTomDato",control:l.control,label:i.jsx(k,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[I,Ha,os(e,s)],fromDate:V(e.fom).toDate(),toDate:V(e.tom).toDate()}),t&&i.jsx(ct,{variant:"error",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),i.jsxs(qr.Footer,{children:[i.jsx(z,{size:"small",variant:"primary",className:Qn.button,disabled:!l.formState.isDirty,children:i.jsx(k,{id:"DelOppPeriodeModalImpl.Ok"})}),i.jsx(z,{size:"small",variant:"secondary",onClick:n,className:Qn.cancelButton,type:"button",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};Tt.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const ds="_margin_wnej3_37",on={margin:ds},ms=!1,_t=({setNestePeriode:e,setForrigePeriode:r,readOnly:n,lukkPeriode:t,periode:a,beregnBelop:s,behandlingUuid:l,oppdaterSplittedePerioder:o})=>{const u=Pe(),[g,f]=W.useState(!1),[y,h]=W.useState(!1),A=S=>{f(!0),S.preventDefault()},F=()=>{f(!1)},we=S=>{h(!1);const te={belop:a.feilutbetaling,fom:S.forstePeriode.fom,tom:S.forstePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "},B={belop:a.feilutbetaling,fom:S.andrePeriode.fom,tom:S.andrePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "};s({behandlingUuid:l,perioder:[te,B]}).then(M=>{const{perioder:Se}=M;if(Se.some(Fe=>Fe.belop===0))h(!0);else{const Fe={fom:te.fom,tom:te.tom,feilutbetaling:Se[0].belop},Be={fom:B.fom,tom:B.tom,feilutbetaling:Se[1].belop};F(),o([Fe,Be])}})};return i.jsxs(ie,{children:[i.jsxs(Oe,{size:"small",children:[i.jsx(k,{id:"PeriodeController.Detaljer"}),ms]}),!n&&i.jsxs(i.Fragment,{children:[i.jsx(Jn,{}),i.jsx(z,{className:on.margin,size:"xsmall",icon:i.jsx(ns,{"aria-hidden":!0}),onClick:A,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:i.jsx(k,{id:"PeriodeController.DelOppPerioden"})})]}),g&&i.jsx(Tt,{cancelEvent:F,showModal:g,periodeData:a,splitPeriod:we,finnesBelopMed0Verdi:y}),i.jsx(Jn,{}),i.jsx(z,{className:on.margin,size:"xsmall",icon:i.jsx(ft,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.prevPeriod"}),children:i.jsx(k,{id:"PeriodeController.prevPeriodShort"})}),i.jsx(z,{className:on.margin,size:"xsmall",icon:i.jsx(kt,{"aria-hidden":!0}),onClick:e,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:i.jsx(k,{id:"PeriodeController.nextPeriodShort"})}),i.jsx(z,{size:"xsmall",icon:i.jsx(Da,{"aria-hidden":!0}),onClick:t,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};_t.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
var wt;function m(){return wt.apply(null,arguments)}function gs(e){wt=e}function ee(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ge(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function _(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function Mn(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var r;for(r in e)if(_(e,r))return!1;return!0}function L(e){return e===void 0}function be(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function vr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function St(e,r){var n=[],t,a=e.length;for(t=0;t<a;++t)n.push(r(e[t],t));return n}function Me(e,r){for(var n in r)_(r,n)&&(e[n]=r[n]);return _(r,"toString")&&(e.toString=r.toString),_(r,"valueOf")&&(e.valueOf=r.valueOf),e}function oe(e,r,n,t){return $t(e,r,n,t,!0).utc()}function cs(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function v(e){return e._pf==null&&(e._pf=cs()),e._pf}var kn;Array.prototype.some?kn=Array.prototype.some:kn=function(e){var r=Object(this),n=r.length>>>0,t;for(t=0;t<n;t++)if(t in r&&e.call(this,r[t],t,r))return!0;return!1};function xn(e){var r=null,n=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(r=v(e),n=kn.call(r.parsedDateParts,function(a){return a!=null}),t=r.overflow<0&&!r.empty&&!r.invalidEra&&!r.invalidMonth&&!r.invalidWeekday&&!r.weekdayMismatch&&!r.nullInput&&!r.invalidFormat&&!r.userInvalidated&&(!r.meridiem||r.meridiem&&n),e._strict&&(t=t&&r.charsLeftOver===0&&r.unusedTokens.length===0&&r.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function Hr(e){var r=oe(NaN);return e!=null?Me(v(r),e):v(r).userInvalidated=!0,r}var Xn=m.momentProperties=[],un=!1;function Rn(e,r){var n,t,a,s=Xn.length;if(L(r._isAMomentObject)||(e._isAMomentObject=r._isAMomentObject),L(r._i)||(e._i=r._i),L(r._f)||(e._f=r._f),L(r._l)||(e._l=r._l),L(r._strict)||(e._strict=r._strict),L(r._tzm)||(e._tzm=r._tzm),L(r._isUTC)||(e._isUTC=r._isUTC),L(r._offset)||(e._offset=r._offset),L(r._pf)||(e._pf=v(r)),L(r._locale)||(e._locale=r._locale),s>0)for(n=0;n<s;n++)t=Xn[n],a=r[t],L(a)||(e[t]=a);return e}function br(e){Rn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),un===!1&&(un=!0,m.updateOffset(this),un=!1)}function re(e){return e instanceof br||e!=null&&e._isAMomentObject!=null}function qt(e){m.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function K(e,r){var n=!0;return Me(function(){if(m.deprecationHandler!=null&&m.deprecationHandler(null,e),n){var t=[],a,s,l,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(l in arguments[0])_(arguments[0],l)&&(a+=l+": "+arguments[0][l]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}qt(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),n=!1}return r.apply(this,arguments)},r)}var et={};function jt(e,r){m.deprecationHandler!=null&&m.deprecationHandler(e,r),et[e]||(qt(r),et[e]=!0)}m.suppressDeprecationWarnings=!1;m.deprecationHandler=null;function ue(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function fs(e){var r,n;for(n in e)_(e,n)&&(r=e[n],ue(r)?this[n]=r:this["_"+n]=r);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function pn(e,r){var n=Me({},e),t;for(t in r)_(r,t)&&(Ge(e[t])&&Ge(r[t])?(n[t]={},Me(n[t],e[t]),Me(n[t],r[t])):r[t]!=null?n[t]=r[t]:delete n[t]);for(t in e)_(e,t)&&!_(r,t)&&Ge(e[t])&&(n[t]=Me({},n[t]));return n}function On(e){e!=null&&this.set(e)}var hn;Object.keys?hn=Object.keys:hn=function(e){var r,n=[];for(r in e)_(e,r)&&n.push(r);return n};var ks={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function ps(e,r,n){var t=this._calendar[e]||this._calendar.sameElse;return ue(t)?t.call(r,n):t}function le(e,r,n){var t=""+Math.abs(e),a=r-t.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var Dn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,jr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,dn={},Ze={};function p(e,r,n,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(Ze[e]=a),r&&(Ze[r[0]]=function(){return le(a.apply(this,arguments),r[1],r[2])}),n&&(Ze[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function hs(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function ys(e){var r=e.match(Dn),n,t;for(n=0,t=r.length;n<t;n++)Ze[r[n]]?r[n]=Ze[r[n]]:r[n]=hs(r[n]);return function(a){var s="",l;for(l=0;l<t;l++)s+=ue(r[l])?r[l].call(a,e):r[l];return s}}function Ar(e,r){return e.isValid()?(r=Mt(r,e.localeData()),dn[r]=dn[r]||ys(r),dn[r](e)):e.localeData().invalidDate()}function Mt(e,r){var n=5;function t(a){return r.longDateFormat(a)||a}for(jr.lastIndex=0;n>=0&&jr.test(e);)e=e.replace(jr,t),jr.lastIndex=0,n-=1;return e}var vs={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function bs(e){var r=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return r||!n?r:(this._longDateFormat[e]=n.match(Dn).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var Ts="Invalid date";function _s(){return this._invalidDate}var ws="%d",Ss=/\d{1,2}/;function qs(e){return this._ordinal.replace("%d",e)}var js={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ms(e,r,n,t){var a=this._relativeTime[n];return ue(a)?a(e,r,n,t):a.replace(/%d/i,e)}function xs(e,r){var n=this._relativeTime[e>0?"future":"past"];return ue(n)?n(r):n.replace(/%s/i,r)}var rt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Z(e){return typeof e=="string"?rt[e]||rt[e.toLowerCase()]:void 0}function Pn(e){var r={},n,t;for(t in e)_(e,t)&&(n=Z(t),n&&(r[n]=e[t]));return r}var Rs={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Os(e){var r=[],n;for(n in e)_(e,n)&&r.push({unit:n,priority:Rs[n]});return r.sort(function(t,a){return t.priority-a.priority}),r}var xt=/\d/,C=/\d\d/,Rt=/\d{3}/,An=/\d{4}/,Cr=/[+-]?\d{6}/,R=/\d\d?/,Ot=/\d\d\d\d?/,Dt=/\d\d\d\d\d\d?/,$r=/\d{1,3}/,Fn=/\d{1,4}/,zr=/[+-]?\d{1,6}/,rr=/\d+/,Kr=/[+-]?\d+/,Ds=/Z|[+-]\d\d:?\d\d/gi,Zr=/Z|[+-]\d\d(?::?\d\d)?/gi,Ps=/[+-]?\d+(\.\d{1,3})?/,Tr=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,nr=/^[1-9]\d?/,Bn=/^([1-9]\d|\d)/,Ur;Ur={};function c(e,r,n){Ur[e]=ue(r)?r:function(t,a){return t&&n?n:r}}function As(e,r){return _(Ur,e)?Ur[e](r._strict,r._locale):new RegExp(Fs(e))}function Fs(e){return ye(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(r,n,t,a,s){return n||t||a||s}))}function ye(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function $(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function b(e){var r=+e,n=0;return r!==0&&isFinite(r)&&(n=$(r)),n}var yn={};function q(e,r){var n,t=r,a;for(typeof e=="string"&&(e=[e]),be(r)&&(t=function(s,l){l[r]=b(s)}),a=e.length,n=0;n<a;n++)yn[e[n]]=t}function _r(e,r){q(e,function(n,t,a,s){a._w=a._w||{},r(n,a._w,a,s)})}function Bs(e,r,n){r!=null&&_(yn,e)&&yn[e](r,n._a,n,e)}function Jr(e){return e%4===0&&e%100!==0||e%400===0}var E=0,pe=1,se=2,Y=3,X=4,he=5,Ee=6,Ys=7,Ns=8;p("Y",0,0,function(){var e=this.year();return e<=9999?le(e,4):"+"+e});p(0,["YY",2],0,function(){return this.year()%100});p(0,["YYYY",4],0,"year");p(0,["YYYYY",5],0,"year");p(0,["YYYYYY",6,!0],0,"year");c("Y",Kr);c("YY",R,C);c("YYYY",Fn,An);c("YYYYY",zr,Cr);c("YYYYYY",zr,Cr);q(["YYYYY","YYYYYY"],E);q("YYYY",function(e,r){r[E]=e.length===2?m.parseTwoDigitYear(e):b(e)});q("YY",function(e,r){r[E]=m.parseTwoDigitYear(e)});q("Y",function(e,r){r[E]=parseInt(e,10)});function gr(e){return Jr(e)?366:365}m.parseTwoDigitYear=function(e){return b(e)+(b(e)>68?1900:2e3)};var Pt=tr("FullYear",!0);function Vs(){return Jr(this.year())}function tr(e,r){return function(n){return n!=null?(At(this,e,n),m.updateOffset(this,r),this):fr(this,e)}}function fr(e,r){if(!e.isValid())return NaN;var n=e._d,t=e._isUTC;switch(r){case"Milliseconds":return t?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return t?n.getUTCSeconds():n.getSeconds();case"Minutes":return t?n.getUTCMinutes():n.getMinutes();case"Hours":return t?n.getUTCHours():n.getHours();case"Date":return t?n.getUTCDate():n.getDate();case"Day":return t?n.getUTCDay():n.getDay();case"Month":return t?n.getUTCMonth():n.getMonth();case"FullYear":return t?n.getUTCFullYear():n.getFullYear();default:return NaN}}function At(e,r,n){var t,a,s,l,o;if(!(!e.isValid()||isNaN(n))){switch(t=e._d,a=e._isUTC,r){case"Milliseconds":return void(a?t.setUTCMilliseconds(n):t.setMilliseconds(n));case"Seconds":return void(a?t.setUTCSeconds(n):t.setSeconds(n));case"Minutes":return void(a?t.setUTCMinutes(n):t.setMinutes(n));case"Hours":return void(a?t.setUTCHours(n):t.setHours(n));case"Date":return void(a?t.setUTCDate(n):t.setDate(n));case"FullYear":break;default:return}s=n,l=e.month(),o=e.date(),o=o===29&&l===1&&!Jr(s)?28:o,a?t.setUTCFullYear(s,l,o):t.setFullYear(s,l,o)}}function Is(e){return e=Z(e),ue(this[e])?this[e]():this}function Us(e,r){if(typeof e=="object"){e=Pn(e);var n=Os(e),t,a=n.length;for(t=0;t<a;t++)this[n[t].unit](e[n[t].unit])}else if(e=Z(e),ue(this[e]))return this[e](r);return this}function Es(e,r){return(e%r+r)%r}var P;Array.prototype.indexOf?P=Array.prototype.indexOf:P=function(e){var r;for(r=0;r<this.length;++r)if(this[r]===e)return r;return-1};function Yn(e,r){if(isNaN(e)||isNaN(r))return NaN;var n=Es(r,12);return e+=(r-n)/12,n===1?Jr(e)?29:28:31-n%7%2}p("M",["MM",2],"Mo",function(){return this.month()+1});p("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});p("MMMM",0,0,function(e){return this.localeData().months(this,e)});c("M",R,nr);c("MM",R,C);c("MMM",function(e,r){return r.monthsShortRegex(e)});c("MMMM",function(e,r){return r.monthsRegex(e)});q(["M","MM"],function(e,r){r[pe]=b(e)-1});q(["MMM","MMMM"],function(e,r,n,t){var a=n._locale.monthsParse(e,t,n._strict);a!=null?r[pe]=a:v(n).invalidMonth=e});var Gs="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ft="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Bt=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ls=Tr,Ws=Tr;function Hs(e,r){return e?ee(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Bt).test(r)?"format":"standalone"][e.month()]:ee(this._months)?this._months:this._months.standalone}function Cs(e,r){return e?ee(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Bt.test(r)?"format":"standalone"][e.month()]:ee(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function $s(e,r,n){var t,a,s,l=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=oe([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return n?r==="MMM"?(a=P.call(this._shortMonthsParse,l),a!==-1?a:null):(a=P.call(this._longMonthsParse,l),a!==-1?a:null):r==="MMM"?(a=P.call(this._shortMonthsParse,l),a!==-1?a:(a=P.call(this._longMonthsParse,l),a!==-1?a:null)):(a=P.call(this._longMonthsParse,l),a!==-1?a:(a=P.call(this._shortMonthsParse,l),a!==-1?a:null))}function zs(e,r,n){var t,a,s;if(this._monthsParseExact)return $s.call(this,e,r,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=oe([2e3,t]),n&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(n&&r==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!n&&this._monthsParse[t].test(e))return t}}function Yt(e,r){if(!e.isValid())return e;if(typeof r=="string"){if(/^\d+$/.test(r))r=b(r);else if(r=e.localeData().monthsParse(r),!be(r))return e}var n=r,t=e.date();return t=t<29?t:Math.min(t,Yn(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,t):e._d.setMonth(n,t),e}function Nt(e){return e!=null?(Yt(this,e),m.updateOffset(this,!0),this):fr(this,"Month")}function Ks(){return Yn(this.year(),this.month())}function Zs(e){return this._monthsParseExact?(_(this,"_monthsRegex")||Vt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(_(this,"_monthsShortRegex")||(this._monthsShortRegex=Ls),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Js(e){return this._monthsParseExact?(_(this,"_monthsRegex")||Vt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(_(this,"_monthsRegex")||(this._monthsRegex=Ws),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Vt(){function e(u,g){return g.length-u.length}var r=[],n=[],t=[],a,s,l,o;for(a=0;a<12;a++)s=oe([2e3,a]),l=ye(this.monthsShort(s,"")),o=ye(this.months(s,"")),r.push(l),n.push(o),t.push(o),t.push(l);r.sort(e),n.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Qs(e,r,n,t,a,s,l){var o;return e<100&&e>=0?(o=new Date(e+400,r,n,t,a,s,l),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,r,n,t,a,s,l),o}function kr(e){var r,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,r=new Date(Date.UTC.apply(null,n)),isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e)):r=new Date(Date.UTC.apply(null,arguments)),r}function Er(e,r,n){var t=7+r-n,a=(7+kr(e,0,t).getUTCDay()-r)%7;return-a+t-1}function It(e,r,n,t,a){var s=(7+n-t)%7,l=Er(e,t,a),o=1+7*(r-1)+s+l,u,g;return o<=0?(u=e-1,g=gr(u)+o):o>gr(e)?(u=e+1,g=o-gr(e)):(u=e,g=o),{year:u,dayOfYear:g}}function pr(e,r,n){var t=Er(e.year(),r,n),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,l;return a<1?(l=e.year()-1,s=a+ve(l,r,n)):a>ve(e.year(),r,n)?(s=a-ve(e.year(),r,n),l=e.year()+1):(l=e.year(),s=a),{week:s,year:l}}function ve(e,r,n){var t=Er(e,r,n),a=Er(e+1,r,n);return(gr(e)-t+a)/7}p("w",["ww",2],"wo","week");p("W",["WW",2],"Wo","isoWeek");c("w",R,nr);c("ww",R,C);c("W",R,nr);c("WW",R,C);_r(["w","ww","W","WW"],function(e,r,n,t){r[t.substr(0,1)]=b(e)});function Xs(e){return pr(e,this._week.dow,this._week.doy).week}var ei={dow:0,doy:6};function ri(){return this._week.dow}function ni(){return this._week.doy}function ti(e){var r=this.localeData().week(this);return e==null?r:this.add((e-r)*7,"d")}function ai(e){var r=pr(this,1,4).week;return e==null?r:this.add((e-r)*7,"d")}p("d",0,"do","day");p("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});p("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});p("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});p("e",0,0,"weekday");p("E",0,0,"isoWeekday");c("d",R);c("e",R);c("E",R);c("dd",function(e,r){return r.weekdaysMinRegex(e)});c("ddd",function(e,r){return r.weekdaysShortRegex(e)});c("dddd",function(e,r){return r.weekdaysRegex(e)});_r(["dd","ddd","dddd"],function(e,r,n,t){var a=n._locale.weekdaysParse(e,t,n._strict);a!=null?r.d=a:v(n).invalidWeekday=e});_r(["d","e","E"],function(e,r,n,t){r[t]=b(e)});function si(e,r){return typeof e!="string"?e:isNaN(e)?(e=r.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ii(e,r){return typeof e=="string"?r.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Nn(e,r){return e.slice(r,7).concat(e.slice(0,r))}var li="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ut="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oi="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ui=Tr,di=Tr,mi=Tr;function gi(e,r){var n=ee(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(r)?"format":"standalone"];return e===!0?Nn(n,this._week.dow):e?n[e.day()]:n}function ci(e){return e===!0?Nn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function fi(e){return e===!0?Nn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function ki(e,r,n){var t,a,s,l=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=oe([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return n?r==="dddd"?(a=P.call(this._weekdaysParse,l),a!==-1?a:null):r==="ddd"?(a=P.call(this._shortWeekdaysParse,l),a!==-1?a:null):(a=P.call(this._minWeekdaysParse,l),a!==-1?a:null):r==="dddd"?(a=P.call(this._weekdaysParse,l),a!==-1||(a=P.call(this._shortWeekdaysParse,l),a!==-1)?a:(a=P.call(this._minWeekdaysParse,l),a!==-1?a:null)):r==="ddd"?(a=P.call(this._shortWeekdaysParse,l),a!==-1||(a=P.call(this._weekdaysParse,l),a!==-1)?a:(a=P.call(this._minWeekdaysParse,l),a!==-1?a:null)):(a=P.call(this._minWeekdaysParse,l),a!==-1||(a=P.call(this._weekdaysParse,l),a!==-1)?a:(a=P.call(this._shortWeekdaysParse,l),a!==-1?a:null))}function pi(e,r,n){var t,a,s;if(this._weekdaysParseExact)return ki.call(this,e,r,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=oe([2e3,1]).day(t),n&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(n&&r==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(n&&r==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!n&&this._weekdaysParse[t].test(e))return t}}function hi(e){if(!this.isValid())return e!=null?this:NaN;var r=fr(this,"Day");return e!=null?(e=si(e,this.localeData()),this.add(e-r,"d")):r}function yi(e){if(!this.isValid())return e!=null?this:NaN;var r=(this.day()+7-this.localeData()._week.dow)%7;return e==null?r:this.add(e-r,"d")}function vi(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var r=ii(e,this.localeData());return this.day(this.day()%7?r:r-7)}else return this.day()||7}function bi(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(_(this,"_weekdaysRegex")||(this._weekdaysRegex=ui),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ti(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(_(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=di),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function _i(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(_(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=mi),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Vn(){function e(f,y){return y.length-f.length}var r=[],n=[],t=[],a=[],s,l,o,u,g;for(s=0;s<7;s++)l=oe([2e3,1]).day(s),o=ye(this.weekdaysMin(l,"")),u=ye(this.weekdaysShort(l,"")),g=ye(this.weekdays(l,"")),r.push(o),n.push(u),t.push(g),a.push(o),a.push(u),a.push(g);r.sort(e),n.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function In(){return this.hours()%12||12}function wi(){return this.hours()||24}p("H",["HH",2],0,"hour");p("h",["hh",2],0,In);p("k",["kk",2],0,wi);p("hmm",0,0,function(){return""+In.apply(this)+le(this.minutes(),2)});p("hmmss",0,0,function(){return""+In.apply(this)+le(this.minutes(),2)+le(this.seconds(),2)});p("Hmm",0,0,function(){return""+this.hours()+le(this.minutes(),2)});p("Hmmss",0,0,function(){return""+this.hours()+le(this.minutes(),2)+le(this.seconds(),2)});function Et(e,r){p(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),r)})}Et("a",!0);Et("A",!1);function Gt(e,r){return r._meridiemParse}c("a",Gt);c("A",Gt);c("H",R,Bn);c("h",R,nr);c("k",R,nr);c("HH",R,C);c("hh",R,C);c("kk",R,C);c("hmm",Ot);c("hmmss",Dt);c("Hmm",Ot);c("Hmmss",Dt);q(["H","HH"],Y);q(["k","kk"],function(e,r,n){var t=b(e);r[Y]=t===24?0:t});q(["a","A"],function(e,r,n){n._isPm=n._locale.isPM(e),n._meridiem=e});q(["h","hh"],function(e,r,n){r[Y]=b(e),v(n).bigHour=!0});q("hmm",function(e,r,n){var t=e.length-2;r[Y]=b(e.substr(0,t)),r[X]=b(e.substr(t)),v(n).bigHour=!0});q("hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Y]=b(e.substr(0,t)),r[X]=b(e.substr(t,2)),r[he]=b(e.substr(a)),v(n).bigHour=!0});q("Hmm",function(e,r,n){var t=e.length-2;r[Y]=b(e.substr(0,t)),r[X]=b(e.substr(t))});q("Hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Y]=b(e.substr(0,t)),r[X]=b(e.substr(t,2)),r[he]=b(e.substr(a))});function Si(e){return(e+"").toLowerCase().charAt(0)==="p"}var qi=/[ap]\.?m?\.?/i,ji=tr("Hours",!0);function Mi(e,r,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Lt={calendar:ks,longDateFormat:vs,invalidDate:Ts,ordinal:ws,dayOfMonthOrdinalParse:Ss,relativeTime:js,months:Gs,monthsShort:Ft,week:ei,weekdays:li,weekdaysMin:oi,weekdaysShort:Ut,meridiemParse:qi},D={},or={},hr;function xi(e,r){var n,t=Math.min(e.length,r.length);for(n=0;n<t;n+=1)if(e[n]!==r[n])return n;return t}function nt(e){return e&&e.toLowerCase().replace("_","-")}function Ri(e){for(var r=0,n,t,a,s;r<e.length;){for(s=nt(e[r]).split("-"),n=s.length,t=nt(e[r+1]),t=t?t.split("-"):null;n>0;){if(a=Qr(s.slice(0,n).join("-")),a)return a;if(t&&t.length>=n&&xi(s,t)>=n-1)break;n--}r++}return hr}function Oi(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Qr(e){var r=null,n;if(D[e]===void 0&&typeof module<"u"&&module&&module.exports&&Oi(e))try{r=hr._abbr,n=require,n("./locale/"+e),Re(r)}catch{D[e]=null}return D[e]}function Re(e,r){var n;return e&&(L(r)?n=Te(e):n=Un(e,r),n?hr=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),hr._abbr}function Un(e,r){if(r!==null){var n,t=Lt;if(r.abbr=e,D[e]!=null)jt("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=D[e]._config;else if(r.parentLocale!=null)if(D[r.parentLocale]!=null)t=D[r.parentLocale]._config;else if(n=Qr(r.parentLocale),n!=null)t=n._config;else return or[r.parentLocale]||(or[r.parentLocale]=[]),or[r.parentLocale].push({name:e,config:r}),null;return D[e]=new On(pn(t,r)),or[e]&&or[e].forEach(function(a){Un(a.name,a.config)}),Re(e),D[e]}else return delete D[e],null}function Di(e,r){if(r!=null){var n,t,a=Lt;D[e]!=null&&D[e].parentLocale!=null?D[e].set(pn(D[e]._config,r)):(t=Qr(e),t!=null&&(a=t._config),r=pn(a,r),t==null&&(r.abbr=e),n=new On(r),n.parentLocale=D[e],D[e]=n),Re(e)}else D[e]!=null&&(D[e].parentLocale!=null?(D[e]=D[e].parentLocale,e===Re()&&Re(e)):D[e]!=null&&delete D[e]);return D[e]}function Te(e){var r;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return hr;if(!ee(e)){if(r=Qr(e),r)return r;e=[e]}return Ri(e)}function Pi(){return hn(D)}function En(e){var r,n=e._a;return n&&v(e).overflow===-2&&(r=n[pe]<0||n[pe]>11?pe:n[se]<1||n[se]>Yn(n[E],n[pe])?se:n[Y]<0||n[Y]>24||n[Y]===24&&(n[X]!==0||n[he]!==0||n[Ee]!==0)?Y:n[X]<0||n[X]>59?X:n[he]<0||n[he]>59?he:n[Ee]<0||n[Ee]>999?Ee:-1,v(e)._overflowDayOfYear&&(r<E||r>se)&&(r=se),v(e)._overflowWeeks&&r===-1&&(r=Ys),v(e)._overflowWeekday&&r===-1&&(r=Ns),v(e).overflow=r),e}var Ai=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bi=/Z|[+-]\d\d(?::?\d\d)?/,Mr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],mn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Yi=/^\/?Date\((-?\d+)/i,Ni=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Vi={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Wt(e){var r,n,t=e._i,a=Ai.exec(t)||Fi.exec(t),s,l,o,u,g=Mr.length,f=mn.length;if(a){for(v(e).iso=!0,r=0,n=g;r<n;r++)if(Mr[r][1].exec(a[1])){l=Mr[r][0],s=Mr[r][2]!==!1;break}if(l==null){e._isValid=!1;return}if(a[3]){for(r=0,n=f;r<n;r++)if(mn[r][1].exec(a[3])){o=(a[2]||" ")+mn[r][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Bi.exec(a[4]))u="Z";else{e._isValid=!1;return}e._f=l+(o||"")+(u||""),Ln(e)}else e._isValid=!1}function Ii(e,r,n,t,a,s){var l=[Ui(e),Ft.indexOf(r),parseInt(n,10),parseInt(t,10),parseInt(a,10)];return s&&l.push(parseInt(s,10)),l}function Ui(e){var r=parseInt(e,10);return r<=49?2e3+r:r<=999?1900+r:r}function Ei(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Gi(e,r,n){if(e){var t=Ut.indexOf(e),a=new Date(r[0],r[1],r[2]).getDay();if(t!==a)return v(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Li(e,r,n){if(e)return Vi[e];if(r)return 0;var t=parseInt(n,10),a=t%100,s=(t-a)/100;return s*60+a}function Ht(e){var r=Ni.exec(Ei(e._i)),n;if(r){if(n=Ii(r[4],r[3],r[2],r[5],r[6],r[7]),!Gi(r[1],n,e))return;e._a=n,e._tzm=Li(r[8],r[9],r[10]),e._d=kr.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),v(e).rfc2822=!0}else e._isValid=!1}function Wi(e){var r=Yi.exec(e._i);if(r!==null){e._d=new Date(+r[1]);return}if(Wt(e),e._isValid===!1)delete e._isValid;else return;if(Ht(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:m.createFromInputFallback(e)}m.createFromInputFallback=K("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function ze(e,r,n){return e??r??n}function Hi(e){var r=new Date(m.now());return e._useUTC?[r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()]:[r.getFullYear(),r.getMonth(),r.getDate()]}function Gn(e){var r,n,t=[],a,s,l;if(!e._d){for(a=Hi(e),e._w&&e._a[se]==null&&e._a[pe]==null&&Ci(e),e._dayOfYear!=null&&(l=ze(e._a[E],a[E]),(e._dayOfYear>gr(l)||e._dayOfYear===0)&&(v(e)._overflowDayOfYear=!0),n=kr(l,0,e._dayOfYear),e._a[pe]=n.getUTCMonth(),e._a[se]=n.getUTCDate()),r=0;r<3&&e._a[r]==null;++r)e._a[r]=t[r]=a[r];for(;r<7;r++)e._a[r]=t[r]=e._a[r]==null?r===2?1:0:e._a[r];e._a[Y]===24&&e._a[X]===0&&e._a[he]===0&&e._a[Ee]===0&&(e._nextDay=!0,e._a[Y]=0),e._d=(e._useUTC?kr:Qs).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Y]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(v(e).weekdayMismatch=!0)}}function Ci(e){var r,n,t,a,s,l,o,u,g;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(s=1,l=4,n=ze(r.GG,e._a[E],pr(x(),1,4).year),t=ze(r.W,1),a=ze(r.E,1),(a<1||a>7)&&(u=!0)):(s=e._locale._week.dow,l=e._locale._week.doy,g=pr(x(),s,l),n=ze(r.gg,e._a[E],g.year),t=ze(r.w,g.week),r.d!=null?(a=r.d,(a<0||a>6)&&(u=!0)):r.e!=null?(a=r.e+s,(r.e<0||r.e>6)&&(u=!0)):a=s),t<1||t>ve(n,s,l)?v(e)._overflowWeeks=!0:u!=null?v(e)._overflowWeekday=!0:(o=It(n,t,a,s,l),e._a[E]=o.year,e._dayOfYear=o.dayOfYear)}m.ISO_8601=function(){};m.RFC_2822=function(){};function Ln(e){if(e._f===m.ISO_8601){Wt(e);return}if(e._f===m.RFC_2822){Ht(e);return}e._a=[],v(e).empty=!0;var r=""+e._i,n,t,a,s,l,o=r.length,u=0,g,f;for(a=Mt(e._f,e._locale).match(Dn)||[],f=a.length,n=0;n<f;n++)s=a[n],t=(r.match(As(s,e))||[])[0],t&&(l=r.substr(0,r.indexOf(t)),l.length>0&&v(e).unusedInput.push(l),r=r.slice(r.indexOf(t)+t.length),u+=t.length),Ze[s]?(t?v(e).empty=!1:v(e).unusedTokens.push(s),Bs(s,t,e)):e._strict&&!t&&v(e).unusedTokens.push(s);v(e).charsLeftOver=o-u,r.length>0&&v(e).unusedInput.push(r),e._a[Y]<=12&&v(e).bigHour===!0&&e._a[Y]>0&&(v(e).bigHour=void 0),v(e).parsedDateParts=e._a.slice(0),v(e).meridiem=e._meridiem,e._a[Y]=$i(e._locale,e._a[Y],e._meridiem),g=v(e).era,g!==null&&(e._a[E]=e._locale.erasConvertYear(g,e._a[E])),Gn(e),En(e)}function $i(e,r,n){var t;return n==null?r:e.meridiemHour!=null?e.meridiemHour(r,n):(e.isPM!=null&&(t=e.isPM(n),t&&r<12&&(r+=12),!t&&r===12&&(r=0)),r)}function zi(e){var r,n,t,a,s,l,o=!1,u=e._f.length;if(u===0){v(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<u;a++)s=0,l=!1,r=Rn({},e),e._useUTC!=null&&(r._useUTC=e._useUTC),r._f=e._f[a],Ln(r),xn(r)&&(l=!0),s+=v(r).charsLeftOver,s+=v(r).unusedTokens.length*10,v(r).score=s,o?s<t&&(t=s,n=r):(t==null||s<t||l)&&(t=s,n=r,l&&(o=!0));Me(e,n||r)}function Ki(e){if(!e._d){var r=Pn(e._i),n=r.day===void 0?r.date:r.day;e._a=St([r.year,r.month,n,r.hour,r.minute,r.second,r.millisecond],function(t){return t&&parseInt(t,10)}),Gn(e)}}function Zi(e){var r=new br(En(Ct(e)));return r._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Ct(e){var r=e._i,n=e._f;return e._locale=e._locale||Te(e._l),r===null||n===void 0&&r===""?Hr({nullInput:!0}):(typeof r=="string"&&(e._i=r=e._locale.preparse(r)),re(r)?new br(En(r)):(vr(r)?e._d=r:ee(n)?zi(e):n?Ln(e):Ji(e),xn(e)||(e._d=null),e))}function Ji(e){var r=e._i;L(r)?e._d=new Date(m.now()):vr(r)?e._d=new Date(r.valueOf()):typeof r=="string"?Wi(e):ee(r)?(e._a=St(r.slice(0),function(n){return parseInt(n,10)}),Gn(e)):Ge(r)?Ki(e):be(r)?e._d=new Date(r):m.createFromInputFallback(e)}function $t(e,r,n,t,a){var s={};return(r===!0||r===!1)&&(t=r,r=void 0),(n===!0||n===!1)&&(t=n,n=void 0),(Ge(e)&&Mn(e)||ee(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=r,s._strict=t,Zi(s)}function x(e,r,n,t){return $t(e,r,n,t,!1)}var Qi=K("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=x.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Hr()}),Xi=K("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=x.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Hr()});function zt(e,r){var n,t;if(r.length===1&&ee(r[0])&&(r=r[0]),!r.length)return x();for(n=r[0],t=1;t<r.length;++t)(!r[t].isValid()||r[t][e](n))&&(n=r[t]);return n}function el(){var e=[].slice.call(arguments,0);return zt("isBefore",e)}function rl(){var e=[].slice.call(arguments,0);return zt("isAfter",e)}var nl=function(){return Date.now?Date.now():+new Date},ur=["year","quarter","month","week","day","hour","minute","second","millisecond"];function tl(e){var r,n=!1,t,a=ur.length;for(r in e)if(_(e,r)&&!(P.call(ur,r)!==-1&&(e[r]==null||!isNaN(e[r]))))return!1;for(t=0;t<a;++t)if(e[ur[t]]){if(n)return!1;parseFloat(e[ur[t]])!==b(e[ur[t]])&&(n=!0)}return!0}function al(){return this._isValid}function sl(){return ne(NaN)}function Xr(e){var r=Pn(e),n=r.year||0,t=r.quarter||0,a=r.month||0,s=r.week||r.isoWeek||0,l=r.day||0,o=r.hour||0,u=r.minute||0,g=r.second||0,f=r.millisecond||0;this._isValid=tl(r),this._milliseconds=+f+g*1e3+u*6e4+o*1e3*60*60,this._days=+l+s*7,this._months=+a+t*3+n*12,this._data={},this._locale=Te(),this._bubble()}function Fr(e){return e instanceof Xr}function vn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function il(e,r,n){var t=Math.min(e.length,r.length),a=Math.abs(e.length-r.length),s=0,l;for(l=0;l<t;l++)b(e[l])!==b(r[l])&&s++;return s+a}function Kt(e,r){p(e,0,0,function(){var n=this.utcOffset(),t="+";return n<0&&(n=-n,t="-"),t+le(~~(n/60),2)+r+le(~~n%60,2)})}Kt("Z",":");Kt("ZZ","");c("Z",Zr);c("ZZ",Zr);q(["Z","ZZ"],function(e,r,n){n._useUTC=!0,n._tzm=Wn(Zr,e)});var ll=/([\+\-]|\d\d)/gi;function Wn(e,r){var n=(r||"").match(e),t,a,s;return n===null?null:(t=n[n.length-1]||[],a=(t+"").match(ll)||["-",0,0],s=+(a[1]*60)+b(a[2]),s===0?0:a[0]==="+"?s:-s)}function Hn(e,r){var n,t;return r._isUTC?(n=r.clone(),t=(re(e)||vr(e)?e.valueOf():x(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+t),m.updateOffset(n,!1),n):x(e).local()}function bn(e){return-Math.round(e._d.getTimezoneOffset())}m.updateOffset=function(){};function ol(e,r,n){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Wn(Zr,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&r&&(a=bn(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!r||this._changeInProgress?Qt(this,ne(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,m.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:bn(this)}function ul(e,r){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,r),this):-this.utcOffset()}function dl(e){return this.utcOffset(0,e)}function ml(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(bn(this),"m")),this}function gl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Wn(Ds,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function cl(e){return this.isValid()?(e=e?x(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function fl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function kl(){if(!L(this._isDSTShifted))return this._isDSTShifted;var e={},r;return Rn(e,this),e=Ct(e),e._a?(r=e._isUTC?oe(e._a):x(e._a),this._isDSTShifted=this.isValid()&&il(e._a,r.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function pl(){return this.isValid()?!this._isUTC:!1}function hl(){return this.isValid()?this._isUTC:!1}function Zt(){return this.isValid()?this._isUTC&&this._offset===0:!1}var yl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,vl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ne(e,r){var n=e,t=null,a,s,l;return Fr(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:be(e)||!isNaN(+e)?(n={},r?n[r]=+e:n.milliseconds=+e):(t=yl.exec(e))?(a=t[1]==="-"?-1:1,n={y:0,d:b(t[se])*a,h:b(t[Y])*a,m:b(t[X])*a,s:b(t[he])*a,ms:b(vn(t[Ee]*1e3))*a}):(t=vl.exec(e))?(a=t[1]==="-"?-1:1,n={y:Ue(t[2],a),M:Ue(t[3],a),w:Ue(t[4],a),d:Ue(t[5],a),h:Ue(t[6],a),m:Ue(t[7],a),s:Ue(t[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(l=bl(x(n.from),x(n.to)),n={},n.ms=l.milliseconds,n.M=l.months),s=new Xr(n),Fr(e)&&_(e,"_locale")&&(s._locale=e._locale),Fr(e)&&_(e,"_isValid")&&(s._isValid=e._isValid),s}ne.fn=Xr.prototype;ne.invalid=sl;function Ue(e,r){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*r}function tt(e,r){var n={};return n.months=r.month()-e.month()+(r.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(r)&&--n.months,n.milliseconds=+r-+e.clone().add(n.months,"M"),n}function bl(e,r){var n;return e.isValid()&&r.isValid()?(r=Hn(r,e),e.isBefore(r)?n=tt(e,r):(n=tt(r,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Jt(e,r){return function(n,t){var a,s;return t!==null&&!isNaN(+t)&&(jt(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=t,t=s),a=ne(n,t),Qt(this,a,e),this}}function Qt(e,r,n,t){var a=r._milliseconds,s=vn(r._days),l=vn(r._months);e.isValid()&&(t=t??!0,l&&Yt(e,fr(e,"Month")+l*n),s&&At(e,"Date",fr(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),t&&m.updateOffset(e,s||l))}var Tl=Jt(1,"add"),_l=Jt(-1,"subtract");function Xt(e){return typeof e=="string"||e instanceof String}function wl(e){return re(e)||vr(e)||Xt(e)||be(e)||ql(e)||Sl(e)||e===null||e===void 0}function Sl(e){var r=Ge(e)&&!Mn(e),n=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,l=t.length;for(a=0;a<l;a+=1)s=t[a],n=n||_(e,s);return r&&n}function ql(e){var r=ee(e),n=!1;return r&&(n=e.filter(function(t){return!be(t)&&Xt(e)}).length===0),r&&n}function jl(e){var r=Ge(e)&&!Mn(e),n=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],n=n||_(e,s);return r&&n}function Ml(e,r){var n=e.diff(r,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function xl(e,r){arguments.length===1&&(arguments[0]?wl(arguments[0])?(e=arguments[0],r=void 0):jl(arguments[0])&&(r=arguments[0],e=void 0):(e=void 0,r=void 0));var n=e||x(),t=Hn(n,this).startOf("day"),a=m.calendarFormat(this,t)||"sameElse",s=r&&(ue(r[a])?r[a].call(this,n):r[a]);return this.format(s||this.localeData().calendar(a,this,x(n)))}function Rl(){return new br(this)}function Ol(e,r){var n=re(e)?e:x(e);return this.isValid()&&n.isValid()?(r=Z(r)||"millisecond",r==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(r).valueOf()):!1}function Dl(e,r){var n=re(e)?e:x(e);return this.isValid()&&n.isValid()?(r=Z(r)||"millisecond",r==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(r).valueOf()<n.valueOf()):!1}function Pl(e,r,n,t){var a=re(e)?e:x(e),s=re(r)?r:x(r);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(t[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function Al(e,r){var n=re(e)?e:x(e),t;return this.isValid()&&n.isValid()?(r=Z(r)||"millisecond",r==="millisecond"?this.valueOf()===n.valueOf():(t=n.valueOf(),this.clone().startOf(r).valueOf()<=t&&t<=this.clone().endOf(r).valueOf())):!1}function Fl(e,r){return this.isSame(e,r)||this.isAfter(e,r)}function Bl(e,r){return this.isSame(e,r)||this.isBefore(e,r)}function Yl(e,r,n){var t,a,s;if(!this.isValid())return NaN;if(t=Hn(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,r=Z(r),r){case"year":s=Br(this,t)/12;break;case"month":s=Br(this,t);break;case"quarter":s=Br(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return n?s:$(s)}function Br(e,r){if(e.date()<r.date())return-Br(r,e);var n=(r.year()-e.year())*12+(r.month()-e.month()),t=e.clone().add(n,"months"),a,s;return r-t<0?(a=e.clone().add(n-1,"months"),s=(r-t)/(t-a)):(a=e.clone().add(n+1,"months"),s=(r-t)/(a-t)),-(n+s)||0}m.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";m.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Nl(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Vl(e){if(!this.isValid())return null;var r=e!==!0,n=r?this.clone().utc():this;return n.year()<0||n.year()>9999?Ar(n,r?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ue(Date.prototype.toISOString)?r?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ar(n,"Z")):Ar(n,r?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Il(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",r="",n,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",r="Z"),n="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=r+'[")]',this.format(n+t+a+s)}function Ul(e){e||(e=this.isUtc()?m.defaultFormatUtc:m.defaultFormat);var r=Ar(this,e);return this.localeData().postformat(r)}function El(e,r){return this.isValid()&&(re(e)&&e.isValid()||x(e).isValid())?ne({to:this,from:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Gl(e){return this.from(x(),e)}function Ll(e,r){return this.isValid()&&(re(e)&&e.isValid()||x(e).isValid())?ne({from:this,to:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Wl(e){return this.to(x(),e)}function ea(e){var r;return e===void 0?this._locale._abbr:(r=Te(e),r!=null&&(this._locale=r),this)}var ra=K("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function na(){return this._locale}var Gr=1e3,Je=60*Gr,Lr=60*Je,ta=(365*400+97)*24*Lr;function Qe(e,r){return(e%r+r)%r}function aa(e,r,n){return e<100&&e>=0?new Date(e+400,r,n)-ta:new Date(e,r,n).valueOf()}function sa(e,r,n){return e<100&&e>=0?Date.UTC(e+400,r,n)-ta:Date.UTC(e,r,n)}function Hl(e){var r,n;if(e=Z(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?sa:aa,e){case"year":r=n(this.year(),0,1);break;case"quarter":r=n(this.year(),this.month()-this.month()%3,1);break;case"month":r=n(this.year(),this.month(),1);break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=n(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=Qe(r+(this._isUTC?0:this.utcOffset()*Je),Lr);break;case"minute":r=this._d.valueOf(),r-=Qe(r,Je);break;case"second":r=this._d.valueOf(),r-=Qe(r,Gr);break}return this._d.setTime(r),m.updateOffset(this,!0),this}function Cl(e){var r,n;if(e=Z(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?sa:aa,e){case"year":r=n(this.year()+1,0,1)-1;break;case"quarter":r=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=n(this.year(),this.month()+1,1)-1;break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=Lr-Qe(r+(this._isUTC?0:this.utcOffset()*Je),Lr)-1;break;case"minute":r=this._d.valueOf(),r+=Je-Qe(r,Je)-1;break;case"second":r=this._d.valueOf(),r+=Gr-Qe(r,Gr)-1;break}return this._d.setTime(r),m.updateOffset(this,!0),this}function $l(){return this._d.valueOf()-(this._offset||0)*6e4}function zl(){return Math.floor(this.valueOf()/1e3)}function Kl(){return new Date(this.valueOf())}function Zl(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Jl(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Ql(){return this.isValid()?this.toISOString():null}function Xl(){return xn(this)}function eo(){return Me({},v(this))}function ro(){return v(this).overflow}function no(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}p("N",0,0,"eraAbbr");p("NN",0,0,"eraAbbr");p("NNN",0,0,"eraAbbr");p("NNNN",0,0,"eraName");p("NNNNN",0,0,"eraNarrow");p("y",["y",1],"yo","eraYear");p("y",["yy",2],0,"eraYear");p("y",["yyy",3],0,"eraYear");p("y",["yyyy",4],0,"eraYear");c("N",Cn);c("NN",Cn);c("NNN",Cn);c("NNNN",fo);c("NNNNN",ko);q(["N","NN","NNN","NNNN","NNNNN"],function(e,r,n,t){var a=n._locale.erasParse(e,t,n._strict);a?v(n).era=a:v(n).invalidEra=e});c("y",rr);c("yy",rr);c("yyy",rr);c("yyyy",rr);c("yo",po);q(["y","yy","yyy","yyyy"],E);q(["yo"],function(e,r,n,t){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?r[E]=n._locale.eraYearOrdinalParse(e,a):r[E]=parseInt(e,10)});function to(e,r){var n,t,a,s=this._eras||Te("en")._eras;for(n=0,t=s.length;n<t;++n){switch(typeof s[n].since){case"string":a=m(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=m(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function ao(e,r,n){var t,a,s=this.eras(),l,o,u;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(l=s[t].name.toUpperCase(),o=s[t].abbr.toUpperCase(),u=s[t].narrow.toUpperCase(),n)switch(r){case"N":case"NN":case"NNN":if(o===e)return s[t];break;case"NNNN":if(l===e)return s[t];break;case"NNNNN":if(u===e)return s[t];break}else if([l,o,u].indexOf(e)>=0)return s[t]}function so(e,r){var n=e.since<=e.until?1:-1;return r===void 0?m(e.since).year():m(e.since).year()+(r-e.offset)*n}function io(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].name;return""}function lo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].narrow;return""}function oo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].abbr;return""}function uo(){var e,r,n,t,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(n=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-m(a[e].since).year())*n+a[e].offset;return this.year()}function mo(e){return _(this,"_erasNameRegex")||$n.call(this),e?this._erasNameRegex:this._erasRegex}function go(e){return _(this,"_erasAbbrRegex")||$n.call(this),e?this._erasAbbrRegex:this._erasRegex}function co(e){return _(this,"_erasNarrowRegex")||$n.call(this),e?this._erasNarrowRegex:this._erasRegex}function Cn(e,r){return r.erasAbbrRegex(e)}function fo(e,r){return r.erasNameRegex(e)}function ko(e,r){return r.erasNarrowRegex(e)}function po(e,r){return r._eraYearOrdinalRegex||rr}function $n(){var e=[],r=[],n=[],t=[],a,s,l,o,u,g=this.eras();for(a=0,s=g.length;a<s;++a)l=ye(g[a].name),o=ye(g[a].abbr),u=ye(g[a].narrow),r.push(l),e.push(o),n.push(u),t.push(l),t.push(o),t.push(u);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}p(0,["gg",2],0,function(){return this.weekYear()%100});p(0,["GG",2],0,function(){return this.isoWeekYear()%100});function en(e,r){p(0,[e,e.length],0,r)}en("gggg","weekYear");en("ggggg","weekYear");en("GGGG","isoWeekYear");en("GGGGG","isoWeekYear");c("G",Kr);c("g",Kr);c("GG",R,C);c("gg",R,C);c("GGGG",Fn,An);c("gggg",Fn,An);c("GGGGG",zr,Cr);c("ggggg",zr,Cr);_r(["gggg","ggggg","GGGG","GGGGG"],function(e,r,n,t){r[t.substr(0,2)]=b(e)});_r(["gg","GG"],function(e,r,n,t){r[t]=m.parseTwoDigitYear(e)});function ho(e){return ia.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function yo(e){return ia.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function vo(){return ve(this.year(),1,4)}function bo(){return ve(this.isoWeekYear(),1,4)}function To(){var e=this.localeData()._week;return ve(this.year(),e.dow,e.doy)}function _o(){var e=this.localeData()._week;return ve(this.weekYear(),e.dow,e.doy)}function ia(e,r,n,t,a){var s;return e==null?pr(this,t,a).year:(s=ve(e,t,a),r>s&&(r=s),wo.call(this,e,r,n,t,a))}function wo(e,r,n,t,a){var s=It(e,r,n,t,a),l=kr(s.year,0,s.dayOfYear);return this.year(l.getUTCFullYear()),this.month(l.getUTCMonth()),this.date(l.getUTCDate()),this}p("Q",0,"Qo","quarter");c("Q",xt);q("Q",function(e,r){r[pe]=(b(e)-1)*3});function So(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}p("D",["DD",2],"Do","date");c("D",R,nr);c("DD",R,C);c("Do",function(e,r){return e?r._dayOfMonthOrdinalParse||r._ordinalParse:r._dayOfMonthOrdinalParseLenient});q(["D","DD"],se);q("Do",function(e,r){r[se]=b(e.match(R)[0])});var la=tr("Date",!0);p("DDD",["DDDD",3],"DDDo","dayOfYear");c("DDD",$r);c("DDDD",Rt);q(["DDD","DDDD"],function(e,r,n){n._dayOfYear=b(e)});function qo(e){var r=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?r:this.add(e-r,"d")}p("m",["mm",2],0,"minute");c("m",R,Bn);c("mm",R,C);q(["m","mm"],X);var jo=tr("Minutes",!1);p("s",["ss",2],0,"second");c("s",R,Bn);c("ss",R,C);q(["s","ss"],he);var Mo=tr("Seconds",!1);p("S",0,0,function(){return~~(this.millisecond()/100)});p(0,["SS",2],0,function(){return~~(this.millisecond()/10)});p(0,["SSS",3],0,"millisecond");p(0,["SSSS",4],0,function(){return this.millisecond()*10});p(0,["SSSSS",5],0,function(){return this.millisecond()*100});p(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});p(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});p(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});p(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});c("S",$r,xt);c("SS",$r,C);c("SSS",$r,Rt);var xe,oa;for(xe="SSSS";xe.length<=9;xe+="S")c(xe,rr);function xo(e,r){r[Ee]=b(("0."+e)*1e3)}for(xe="S";xe.length<=9;xe+="S")q(xe,xo);oa=tr("Milliseconds",!1);p("z",0,0,"zoneAbbr");p("zz",0,0,"zoneName");function Ro(){return this._isUTC?"UTC":""}function Oo(){return this._isUTC?"Coordinated Universal Time":""}var d=br.prototype;d.add=Tl;d.calendar=xl;d.clone=Rl;d.diff=Yl;d.endOf=Cl;d.format=Ul;d.from=El;d.fromNow=Gl;d.to=Ll;d.toNow=Wl;d.get=Is;d.invalidAt=ro;d.isAfter=Ol;d.isBefore=Dl;d.isBetween=Pl;d.isSame=Al;d.isSameOrAfter=Fl;d.isSameOrBefore=Bl;d.isValid=Xl;d.lang=ra;d.locale=ea;d.localeData=na;d.max=Xi;d.min=Qi;d.parsingFlags=eo;d.set=Us;d.startOf=Hl;d.subtract=_l;d.toArray=Zl;d.toObject=Jl;d.toDate=Kl;d.toISOString=Vl;d.inspect=Il;typeof Symbol<"u"&&Symbol.for!=null&&(d[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});d.toJSON=Ql;d.toString=Nl;d.unix=zl;d.valueOf=$l;d.creationData=no;d.eraName=io;d.eraNarrow=lo;d.eraAbbr=oo;d.eraYear=uo;d.year=Pt;d.isLeapYear=Vs;d.weekYear=ho;d.isoWeekYear=yo;d.quarter=d.quarters=So;d.month=Nt;d.daysInMonth=Ks;d.week=d.weeks=ti;d.isoWeek=d.isoWeeks=ai;d.weeksInYear=To;d.weeksInWeekYear=_o;d.isoWeeksInYear=vo;d.isoWeeksInISOWeekYear=bo;d.date=la;d.day=d.days=hi;d.weekday=yi;d.isoWeekday=vi;d.dayOfYear=qo;d.hour=d.hours=ji;d.minute=d.minutes=jo;d.second=d.seconds=Mo;d.millisecond=d.milliseconds=oa;d.utcOffset=ol;d.utc=dl;d.local=ml;d.parseZone=gl;d.hasAlignedHourOffset=cl;d.isDST=fl;d.isLocal=pl;d.isUtcOffset=hl;d.isUtc=Zt;d.isUTC=Zt;d.zoneAbbr=Ro;d.zoneName=Oo;d.dates=K("dates accessor is deprecated. Use date instead.",la);d.months=K("months accessor is deprecated. Use month instead",Nt);d.years=K("years accessor is deprecated. Use year instead",Pt);d.zone=K("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ul);d.isDSTShifted=K("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",kl);function Do(e){return x(e*1e3)}function Po(){return x.apply(null,arguments).parseZone()}function ua(e){return e}var w=On.prototype;w.calendar=ps;w.longDateFormat=bs;w.invalidDate=_s;w.ordinal=qs;w.preparse=ua;w.postformat=ua;w.relativeTime=Ms;w.pastFuture=xs;w.set=fs;w.eras=to;w.erasParse=ao;w.erasConvertYear=so;w.erasAbbrRegex=go;w.erasNameRegex=mo;w.erasNarrowRegex=co;w.months=Hs;w.monthsShort=Cs;w.monthsParse=zs;w.monthsRegex=Js;w.monthsShortRegex=Zs;w.week=Xs;w.firstDayOfYear=ni;w.firstDayOfWeek=ri;w.weekdays=gi;w.weekdaysMin=fi;w.weekdaysShort=ci;w.weekdaysParse=pi;w.weekdaysRegex=bi;w.weekdaysShortRegex=Ti;w.weekdaysMinRegex=_i;w.isPM=Si;w.meridiem=Mi;function Wr(e,r,n,t){var a=Te(),s=oe().set(t,r);return a[n](s,e)}function da(e,r,n){if(be(e)&&(r=e,e=void 0),e=e||"",r!=null)return Wr(e,r,n,"month");var t,a=[];for(t=0;t<12;t++)a[t]=Wr(e,t,n,"month");return a}function zn(e,r,n,t){typeof e=="boolean"?(be(r)&&(n=r,r=void 0),r=r||""):(r=e,n=r,e=!1,be(r)&&(n=r,r=void 0),r=r||"");var a=Te(),s=e?a._week.dow:0,l,o=[];if(n!=null)return Wr(r,(n+s)%7,t,"day");for(l=0;l<7;l++)o[l]=Wr(r,(l+s)%7,t,"day");return o}function Ao(e,r){return da(e,r,"months")}function Fo(e,r){return da(e,r,"monthsShort")}function Bo(e,r,n){return zn(e,r,n,"weekdays")}function Yo(e,r,n){return zn(e,r,n,"weekdaysShort")}function No(e,r,n){return zn(e,r,n,"weekdaysMin")}Re("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var r=e%10,n=b(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th";return e+n}});m.lang=K("moment.lang is deprecated. Use moment.locale instead.",Re);m.langData=K("moment.langData is deprecated. Use moment.localeData instead.",Te);var fe=Math.abs;function Vo(){var e=this._data;return this._milliseconds=fe(this._milliseconds),this._days=fe(this._days),this._months=fe(this._months),e.milliseconds=fe(e.milliseconds),e.seconds=fe(e.seconds),e.minutes=fe(e.minutes),e.hours=fe(e.hours),e.months=fe(e.months),e.years=fe(e.years),this}function ma(e,r,n,t){var a=ne(r,n);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function Io(e,r){return ma(this,e,r,1)}function Uo(e,r){return ma(this,e,r,-1)}function at(e){return e<0?Math.floor(e):Math.ceil(e)}function Eo(){var e=this._milliseconds,r=this._days,n=this._months,t=this._data,a,s,l,o,u;return e>=0&&r>=0&&n>=0||e<=0&&r<=0&&n<=0||(e+=at(Tn(n)+r)*864e5,r=0,n=0),t.milliseconds=e%1e3,a=$(e/1e3),t.seconds=a%60,s=$(a/60),t.minutes=s%60,l=$(s/60),t.hours=l%24,r+=$(l/24),u=$(ga(r)),n+=u,r-=at(Tn(u)),o=$(n/12),n%=12,t.days=r,t.months=n,t.years=o,this}function ga(e){return e*4800/146097}function Tn(e){return e*146097/4800}function Go(e){if(!this.isValid())return NaN;var r,n,t=this._milliseconds;if(e=Z(e),e==="month"||e==="quarter"||e==="year")switch(r=this._days+t/864e5,n=this._months+ga(r),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(r=this._days+Math.round(Tn(this._months)),e){case"week":return r/7+t/6048e5;case"day":return r+t/864e5;case"hour":return r*24+t/36e5;case"minute":return r*1440+t/6e4;case"second":return r*86400+t/1e3;case"millisecond":return Math.floor(r*864e5)+t;default:throw new Error("Unknown unit "+e)}}function _e(e){return function(){return this.as(e)}}var ca=_e("ms"),Lo=_e("s"),Wo=_e("m"),Ho=_e("h"),Co=_e("d"),$o=_e("w"),zo=_e("M"),Ko=_e("Q"),Zo=_e("y"),Jo=ca;function Qo(){return ne(this)}function Xo(e){return e=Z(e),this.isValid()?this[e+"s"]():NaN}function We(e){return function(){return this.isValid()?this._data[e]:NaN}}var eu=We("milliseconds"),ru=We("seconds"),nu=We("minutes"),tu=We("hours"),au=We("days"),su=We("months"),iu=We("years");function lu(){return $(this.days()/7)}var ke=Math.round,Ke={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function ou(e,r,n,t,a){return a.relativeTime(r||1,!!n,e,t)}function uu(e,r,n,t){var a=ne(e).abs(),s=ke(a.as("s")),l=ke(a.as("m")),o=ke(a.as("h")),u=ke(a.as("d")),g=ke(a.as("M")),f=ke(a.as("w")),y=ke(a.as("y")),h=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||l<=1&&["m"]||l<n.m&&["mm",l]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(h=h||f<=1&&["w"]||f<n.w&&["ww",f]),h=h||g<=1&&["M"]||g<n.M&&["MM",g]||y<=1&&["y"]||["yy",y],h[2]=r,h[3]=+e>0,h[4]=t,ou.apply(null,h)}function du(e){return e===void 0?ke:typeof e=="function"?(ke=e,!0):!1}function mu(e,r){return Ke[e]===void 0?!1:r===void 0?Ke[e]:(Ke[e]=r,e==="s"&&(Ke.ss=r-1),!0)}function gu(e,r){if(!this.isValid())return this.localeData().invalidDate();var n=!1,t=Ke,a,s;return typeof e=="object"&&(r=e,e=!1),typeof e=="boolean"&&(n=e),typeof r=="object"&&(t=Object.assign({},Ke,r),r.s!=null&&r.ss==null&&(t.ss=r.s-1)),a=this.localeData(),s=uu(this,!n,t,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var gn=Math.abs;function Ce(e){return(e>0)-(e<0)||+e}function rn(){if(!this.isValid())return this.localeData().invalidDate();var e=gn(this._milliseconds)/1e3,r=gn(this._days),n=gn(this._months),t,a,s,l,o=this.asSeconds(),u,g,f,y;return o?(t=$(e/60),a=$(t/60),e%=60,t%=60,s=$(n/12),n%=12,l=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=o<0?"-":"",g=Ce(this._months)!==Ce(o)?"-":"",f=Ce(this._days)!==Ce(o)?"-":"",y=Ce(this._milliseconds)!==Ce(o)?"-":"",u+"P"+(s?g+s+"Y":"")+(n?g+n+"M":"")+(r?f+r+"D":"")+(a||t||e?"T":"")+(a?y+a+"H":"")+(t?y+t+"M":"")+(e?y+l+"S":"")):"P0D"}var T=Xr.prototype;T.isValid=al;T.abs=Vo;T.add=Io;T.subtract=Uo;T.as=Go;T.asMilliseconds=ca;T.asSeconds=Lo;T.asMinutes=Wo;T.asHours=Ho;T.asDays=Co;T.asWeeks=$o;T.asMonths=zo;T.asQuarters=Ko;T.asYears=Zo;T.valueOf=Jo;T._bubble=Eo;T.clone=Qo;T.get=Xo;T.milliseconds=eu;T.seconds=ru;T.minutes=nu;T.hours=tu;T.days=au;T.weeks=lu;T.months=su;T.years=iu;T.humanize=gu;T.toISOString=rn;T.toString=rn;T.toJSON=rn;T.locale=ea;T.localeData=na;T.toIsoString=K("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rn);T.lang=ra;p("X",0,0,"unix");p("x",0,0,"valueOf");c("x",Kr);c("X",Ps);q("X",function(e,r,n){n._d=new Date(parseFloat(e)*1e3)});q("x",function(e,r,n){n._d=new Date(b(e))});//! moment.js
m.version="2.30.1";gs(x);m.fn=d;m.min=el;m.max=rl;m.now=nl;m.utc=oe;m.unix=Do;m.months=Ao;m.isDate=vr;m.locale=Re;m.invalid=Hr;m.duration=ne;m.isMoment=re;m.weekdays=Bo;m.parseZone=Po;m.localeData=Te;m.isDuration=Fr;m.monthsShort=Fo;m.weekdaysMin=No;m.defineLocale=Un;m.updateLocale=Di;m.locales=Pi;m.weekdaysShort=Yo;m.normalizeUnits=Z;m.relativeTimeRounding=du;m.relativeTimeThreshold=mu;m.calendarFormat=Ml;m.prototype=d;m.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var Q=(e=>(e.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",e.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",e.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",e.GOD_TRO="GOD_TRO",e))(Q||{}),Kn=(e=>(e.VURDER_TILBAKEKREVING="5002",e))(Kn||{});const cu="_infoSummary_14r2l_1",fu="_positivNumber_14r2l_8",ku="_redNumber_14r2l_12",pu="_resultName_14r2l_17",dr={infoSummary:cu,positivNumber:fu,redNumber:ku,resultName:pu},fa=({fom:e,tom:r,feilutbetaling:n,arsakHendelseNavn:t})=>{const a=Pa(e,r);return i.jsxs(U,{gap:"2",className:dr.infoSummary,children:[i.jsxs(ie,{justify:"space-between",children:[i.jsx(Oe,{size:"small",children:`${V(e).format(Xe)} - ${V(r).format(Xe)}`}),i.jsx(H,{size:"small",children:a.formattedString})]}),i.jsxs(ie,{gap:"4",children:[i.jsxs(H,{size:"small",className:dr.resultName,children:[i.jsx(k,{id:"PeriodeInformasjon.Feilutbetaling"}),":",i.jsx("span",{className:n?dr.redNumber:dr.positivNumber,children:er(n)})]}),t&&i.jsx(H,{size:"small",className:dr.resultName,children:t})]})]})};fa.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var G=(e=>(e.FORSETT="FORSETT",e.GROVT_UAKTSOM="GROVT_UAKTSOM",e.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",e))(G||{});const hu=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var ka=(e=>(e.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",e.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",e.STOERRELSE_BELOEP="STOERRELSE_BELOEP",e.TID_FRA_UTBETALING="TID_FRA_UTBETALING",e.ANNET="ANNET",e))(ka||{});const pa=({name:e,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const t=Ae(),a=`${e}.skalDetTilleggesRenter`;return W.useEffect(()=>{t.getValues(a)===void 0&&t.setValue(a,!1)},[]),i.jsx("div",{children:i.jsxs(Le,{alignOffset:n?320:360,children:[n&&i.jsxs(U,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx(H,{size:"small",children:"100 %"}),i.jsx(De,{name:`${e}.skalDetTilleggesRenter`,control:t.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[I],radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:r,parse:s=>s==="true",isHorizontal:!0})]}),!n&&i.jsxs(U,{gap:"2",children:[i.jsxs("div",{children:[i.jsx(Nr,{children:i.jsx(k,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx(H,{size:"small",children:"100 %"})]}),i.jsx(H,{size:"small",children:i.jsx(k,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})};pa.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const yr="Egendefinert",_n=["30","50","70",yr],yu="_suffix_cawxu_1",vu="_suffixGrovText_cawxu_4",bu="_labelPadding_cawxu_8",Tu="_inputFelt_cawxu_12",$e={suffix:yu,suffixGrovText:vu,labelPadding:bu,inputFelt:Tu},st=yt(0),_u=za(99.99),wu=e=>{const r=e.toString().replace(/\s/g,""),n=parseInt(r,10);return Number.isNaN(n)?"":n},Su=(e,r)=>n=>{if((typeof n=="string"?Number(n):n)>=r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},ha=({name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,harMerEnnEnYtelse:a,feilutbetalingBelop:s,andelSomTilbakekreves:l})=>{const o=Pe(),u=Ae(),g=`${e}.skalDetTilleggesRenter`;return W.useEffect(()=>{u.getValues(g)===void 0&&u.setValue(g,!1)},[]),i.jsxs(U,{gap:"4",children:[i.jsx(De,{name:`${e}.harGrunnerTilReduksjon`,control:u.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[I],radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0}),r&&i.jsx(Le,{alignOffset:24,children:i.jsxs(ie,{gap:"4",children:[!a&&l!==yr&&i.jsxs(i.Fragment,{children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(ie,{gap:"2",children:[i.jsx(pt,{name:`${e}.andelSomTilbakekreves`,control:u.control,label:"",validate:[I],selectValues:_n.map(f=>i.jsx("option",{value:f,children:f},f))}),i.jsx("div",{className:$e.suffix,children:"%"})]})]}),!a&&l===yr&&i.jsxs(i.Fragment,{children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(ie,{gap:"4",children:[i.jsx(cn,{name:`${e}.andelSomTilbakekrevesManuell`,control:u.control,className:$e.inputFelt,readOnly:n,validate:[I,st,_u],normalizeOnBlur:f=>Number.isNaN(f)?f:parseFloat(f.toString()).toFixed(2),format:f=>f.toString().replace(".",","),parse:f=>f.toString().replace(",",".")}),i.jsx("div",{className:t===G.GROVT_UAKTSOM?$e.suffixGrovText:$e.suffix,children:"%"})]})]}),a&&i.jsx(cn,{name:`${e}.belopSomSkalTilbakekreves`,control:u.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[I,st,Su(o,s)],readOnly:n,format:er,parse:wu}),t===G.GROVT_UAKTSOM&&i.jsxs("div",{children:[i.jsx(Nr,{children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),i.jsx(H,{size:"small",className:$e.labelPadding,children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),r===!1&&i.jsxs(Le,{alignOffset:90,children:[i.jsx(Nr,{children:i.jsx(k,{id:a?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),i.jsxs(U,{gap:"4",children:[i.jsx(H,{size:"small",className:$e.labelPadding,children:a?er(s):"100%"}),t===G.GROVT_UAKTSOM&&i.jsx(De,{name:g,control:u.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[I],radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})]})};ha.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const qu=qn(3),ju=jn(1500),wn=({name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:u})=>{const g=Pe(),{watch:f,control:y}=Ae(),h=!s.some(F=>!!f(`${e}.${F.kode}`)),A=Aa(e,h?g.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return i.jsxs(U,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),i.jsx("div",{children:s.map(F=>i.jsx(Fa,{name:`${e}.${F.kode}`,control:y,label:F.navn,readOnly:n},F.kode))}),a&&i.jsx(cr,{name:`${e}.annetBegrunnelse`,control:y,label:"",validate:[I,qu,ju,Ir],maxLength:1500,readOnly:n}),A&&i.jsx(Ba,{children:A}),i.jsx(ha,{name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:u})]})};wn.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Mu="_explanationTextarea_1kabz_1",xu="_panelWidth_1kabz_5",ya={explanationTextarea:Mu,panelWidth:xu},Ru=qn(3),Ou=jn(1500),it=({name:e,readOnly:r})=>{const n=Pe(),{control:t}=Ae();return i.jsxs(U,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),i.jsx(cr,{name:`${e}.sarligGrunnerBegrunnelse`,control:t,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[I,Ru,Ou,Ir],maxLength:1500,readOnly:r,className:ya.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]})},va=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:u,erValgtResultatTypeForstoBurdeForstaatt:g,name:f})=>{const{control:y}=Ae(),h=g?180:200;return i.jsx(Le,{alignOffset:n===G.GROVT_UAKTSOM?h:20,children:i.jsxs("div",{className:ya.panelWidth,children:[n===G.SIMPEL_UAKTSOM&&o&&i.jsx(De,{name:`${f}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,control:y,label:i.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[I],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:r,radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:i.jsxs("div",{style:{marginTop:"10px"},children:[i.jsx(it,{name:f,readOnly:r}),i.jsx(wn,{name:f,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:n,andelSomTilbakekreves:u})]})},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:i.jsx("div",{style:{marginTop:"10px"},children:i.jsx(Le,{alignOffset:55,children:i.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})})}]}),(n!==G.SIMPEL_UAKTSOM||!o)&&i.jsxs(i.Fragment,{children:[i.jsx(it,{name:f,readOnly:r}),i.jsx(wn,{name:f,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:n,andelSomTilbakekreves:u})]})]})})};va.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const ba=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,erValgtResultatTypeForstoBurdeForstaatt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:g,name:f})=>i.jsxs(i.Fragment,{children:[n===G.FORSETT&&i.jsx(pa,{name:f,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:a}),n!==G.FORSETT&&i.jsx(va,{name:f,harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:a})]});ba.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Du=[G.GROVT_UAKTSOM,G.SIMPEL_UAKTSOM,G.FORSETT],Pu={[G.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[G.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[G.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},ar=({readOnly:e,resetFields:r,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:t,erSerligGrunnAnnetValgt:a=!1,erValgtResultatTypeForstoBurdeForstaatt:s=!1,aktsomhetTyper:l,sarligGrunnTyper:o,antallYtelser:u,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:f,andelSomTilbakekreves:y,name:h})=>{const{control:A}=Ae();return i.jsxs(i.Fragment,{children:[i.jsx(De,{name:`${h}.handletUaktsomhetGrad`,control:A,label:i.jsx(k,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[I],radios:l.map(F=>({label:s?i.jsx(k,{id:Pu[F.kode]}):F.navn,value:F.kode})),isReadOnly:e,onChange:r,isHorizontal:!0}),Du.some(F=>F===n)&&i.jsx(ba,{name:`${h}.${n}`,harGrunnerTilReduksjon:t,readOnly:e,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:o,harMerEnnEnYtelse:u>1,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:f,andelSomTilbakekreves:y})]})},Au=(e,r)=>{const n=parseInt(e,10);return!r||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Fu=(e,r)=>{const n=parseFloat(e);return!r||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Bu=(e,r)=>{if(e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=r.reduce((s,l)=>e[l.kode]?s.concat(l.kode):s,[]),{harGrunnerTilReduksjon:t}=e,a=e.andelSomTilbakekreves===yr?Fu(e.andelSomTilbakekrevesManuell,t):Au(e.andelSomTilbakekreves,t);return{harGrunnerTilReduksjon:t,ileggRenter:t?void 0:e.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:e.harGrunnerTilReduksjon?ht(e.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:e.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...a}};ar.transformValues=(e,r,n)=>{const t=e[e.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:e.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:t?Bu(t,r):null}};const Yu=(e,r)=>({andelSomTilbakekreves:r===void 0||_n.includes(r)?r:yr,andelSomTilbakekrevesManuell:r&&_n.includes(r)?void 0:e.andelTilbakekreves,harGrunnerTilReduksjon:e.harGrunnerTilReduksjon,skalDetTilleggesRenter:e.ileggRenter,belopSomSkalTilbakekreves:e.tilbakekrevesBelop,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:Pr(e.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...e.sarligGrunner?e.sarligGrunner.reduce((n,t)=>({...n,[t.kode??t]:!0}),{}):{}});ar.buildInitalValues=e=>{const{aktsomhet:r,aktsomhetInfo:n}=e,t=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,a=n?{[r.kode&&"kode"in r?r.kode:r]:Yu(n,t)}:{};return{handletUaktsomhetGrad:r&&r.kode&&"kode"in r?r.kode:r,...a}};ar.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Ta=()=>{const{control:e}=Ae();return i.jsxs(ie,{gap:"4",children:[i.jsx(cr,{name:"foreldetBegrunnelse",control:e,label:i.jsx(k,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),i.jsx(De,{name:"periodenErForeldet",control:e,label:i.jsx(Nr,{children:i.jsx(k,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:i.jsx(k,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]})};Ta.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const Nu="_arrowbox_ych2z_1",Vu="_tilbakekrevdBelopInput_ych2z_4",lt={arrowbox:Nu,tilbakekrevdBelopInput:Vu},Iu=yt(1),Uu=e=>{const r=e.toString().replace(/\s/g,""),n=parseInt(r,10);return Number.isNaN(n)?"":n},Eu=(e,r)=>n=>{if((typeof n=="string"?Number(n):n)>r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},sr=({name:e,readOnly:r,erBelopetIBehold:n,feilutbetalingBelop:t})=>{const a=Pe(),{control:s}=Ae();return i.jsxs(U,{gap:"2",children:[i.jsx(De,{name:`${e}.erBelopetIBehold`,control:s,label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[I],radios:[{label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0}),i.jsxs("div",{className:lt.arrowbox,children:[n===!0&&i.jsx(Le,{alignOffset:25,children:i.jsx(cn,{name:`${e}.tilbakekrevdBelop`,label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[I,Iu,Eu(a,t)],readOnly:r,className:lt.tilbakekrevdBelopInput,format:er,parse:Uu})}),n===!1&&i.jsx(Le,{alignOffset:90,children:i.jsx(H,{size:"small",children:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};sr.transformValues=(e,r)=>({"@type":"godTro",begrunnelse:r,erBelopetIBehold:e.erBelopetIBehold,tilbakekrevesBelop:e.erBelopetIBehold?ht(e.tilbakekrevdBelop):void 0});sr.buildIntialValues=e=>({erBelopetIBehold:e.erBelopetIBehold,tilbakekrevdBelop:e.tilbakekrevesBelop});sr.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Gu="_feilutbetalingTable_1fsd2_1",Lu={feilutbetalingTable:Gu},_a=({ytelser:e})=>{if(e.length===0)return null;let r=0;return i.jsxs(ce,{className:Lu.feilutbetalingTable,children:[i.jsx(ce.Header,{children:i.jsxs(ce.Row,{children:[i.jsx(ce.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),i.jsx(ce.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),i.jsx(ce.Body,{children:e.map(n=>(r+=1,i.jsxs(ce.Row,{children:[i.jsx(ce.DataCell,{children:i.jsx(H,{size:"small",children:n.aktivitet})}),i.jsx(ce.DataCell,{children:i.jsx(H,{size:"small",children:er(n.belop)})})]},n.aktivitet+n.belop+r)))})]})};_a.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Wu="_explanationTextarea_1udkt_1",Hu="_leftColumn_1udkt_5",Cu="_rightColumn_1udkt_9",$u="_selectWidth_1udkt_12",xr={explanationTextarea:Wu,leftColumn:Hu,rightColumn:Cu,selectWidth:$u},ot=qn(3),ut=jn(1500),wa=({data:e,periode:r,skjulPeriode:n,readOnly:t,oppdaterPeriode:a,vilkarsVurdertePerioder:s,kodeverkSamlingFpTilbake:l,antallPerioderMedAksjonspunkt:o})=>{const u=Pe(),[g,f]=W.useState(!1),y=mt({defaultValues:r}),h=y.watch("valgtVilkarResultatType"),A=y.watch(`${h}.handletUaktsomhetGrad`),F=y.watch(`${h}.${A}.harGrunnerTilReduksjon`),we=y.watch(`${h}.${A}.andelSomTilbakekreves`),S=y.watch(`${h}.${A}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),te=y.watch(`${h}.${A}.${ka.ANNET}`),B=y.watch(`${h}.erBelopetIBehold`),de=Zn(h),M=Zn(A),Se=e.redusertBeloper,wr=l.SærligGrunn,Fe=l.VilkårResultat,Be=hu.map(j=>l.Aktsomhet.find(ae=>ae.kode===j)),nn=(j,ae)=>{const J=j.target.value.split("_"),qe=ae.find(me=>me.fom===J[0]&&me.tom===J[1]),je=qe?.valgtVilkarResultatType,He=qe&&je?qe[je]:void 0,Ne=JSON.parse(JSON.stringify(He));if(je!==Q.GOD_TRO){const{handletUaktsomhetGrad:me}=Ne;me!==G.FORSETT&&r?.harMerEnnEnYtelse!==qe?.harMerEnnEnYtelse&&(Ne[me].andelSomTilbakekreves=null,Ne[me].andelSomTilbakekrevesManuell=null,Ne[me].belopSomSkalTilbakekreves=null)}y.setValue("valgtVilkarResultatType",je,{shouldDirty:!0}),y.setValue("begrunnelse",qe?.begrunnelse,{shouldDirty:!0}),y.setValue("vurderingBegrunnelse",qe?.vurderingBegrunnelse,{shouldDirty:!0}),je&&y.setValue(je,Ne,{shouldDirty:!0}),j.preventDefault()},ir=()=>{f(!g),a(y.getValues())},tn=j=>{o>1&&e.erTotalBelopUnder4Rettsgebyr&&S===!1?f(!g):a(j)},an=()=>{de&&y.resetField(de)},sn=()=>{M&&y.resetField(`${h}.${M}`)},Ye=s.filter(j=>!j.erForeldet&&j.valgtVilkarResultatType!=null);return i.jsx(gt,{formMethods:y,onSubmit:tn,children:i.jsxs(U,{gap:"4",children:[i.jsx(U,{gap:"2",children:Se&&Se.map(j=>i.jsx(H,{size:"small",children:i.jsx(k,{id:j.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:er(j.belop),b:Ya}})},j.belop))}),i.jsx(_a,{ytelser:e.ytelser}),!t&&!e.erForeldet&&Ye.length>0&&i.jsx(pt,{name:"perioderForKopi",control:y.control,selectValues:Ye.map(j=>{const ae=`${j.fom}_${j.tom}`,J=`${V(j.fom).format(Xe)} - ${V(j.tom).format(Xe)}`;return i.jsx("option",{value:ae,children:J},ae)}),onChange:j=>nn(j,Ye),className:xr.selectWidth,label:i.jsx(k,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),i.jsxs(ie,{gap:"4",wrap:!0,children:[i.jsxs("div",{className:xr.leftColumn,children:[e.erForeldet&&i.jsx(Ta,{}),!e.erForeldet&&i.jsxs(U,{gap:"2",children:[i.jsx(Yr,{size:"small",children:i.jsx(k,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),i.jsx(cr,{name:"begrunnelse",control:y.control,label:u.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[I,ot,ut,Ir],maxLength:1500,readOnly:t,className:xr.explanationTextarea,description:u.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),i.jsx(De,{name:"valgtVilkarResultatType",control:y.control,label:i.jsx(k,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[I],radios:Fe.map(j=>({label:j.navn,value:j.kode})),isReadOnly:t,onChange:an})]})]}),i.jsx("div",{className:xr.rightColumn,children:h&&i.jsxs(U,{gap:"2",children:[i.jsx(Yr,{size:"small",children:i.jsx(k,{id:h===Q.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),i.jsx(cr,{name:"vurderingBegrunnelse",control:y.control,label:u.formatMessage({id:h===Q.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[I,ot,ut,Ir],maxLength:1500,readOnly:t}),h===Q.GOD_TRO&&i.jsx(sr,{name:h,readOnly:t,erBelopetIBehold:B,feilutbetalingBelop:e.feilutbetaling}),h!==Q.GOD_TRO&&i.jsx(ar,{name:h,harGrunnerTilReduksjon:F,readOnly:t,handletUaktsomhetGrad:A,resetFields:sn,erSerligGrunnAnnetValgt:te,erValgtResultatTypeForstoBurdeForstaatt:h===Q.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:Be,sarligGrunnTyper:wr,antallYtelser:e.ytelser.length,feilutbetalingBelop:e.feilutbetaling,erTotalBelopUnder4Rettsgebyr:e.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:we},h)]})})]}),i.jsxs(ie,{gap:"4",children:[i.jsx(z,{size:"small",variant:"primary",disabled:!y.formState.isDirty||t,children:i.jsx(k,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),i.jsx(z,{size:"small",variant:"secondary",onClick:n,type:"button",children:i.jsx(k,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),g&&i.jsx(ts,{showModal:!0,submit:ir})]})})};wa.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const zu="_margin_1wl4t_1",Rr={margin:zu},Ku={danger:i.jsx(rs,{}),success:i.jsx(es,{}),warning:i.jsx(Xa,{})},Zu=(e,r)=>e.fom<r.fom?-1:e.fom>r.fom?1:0,Ju=e=>{const r=e.isGodkjent?"success":"danger";return e.isAksjonspunktOpen?"warning":r},Qu=(e=[])=>[...e].sort(Zu).map(r=>({...r,status:Ju(r)})),Xu=e=>e===mr.MOR||e===mr.MEDMOR?i.jsx(as,{width:20,height:20,color:"var(--a-red-200)"}):e===mr.FAR?i.jsx(ss,{width:20,height:20,color:"var(--a-blue-600)"}):i.jsx(Qa,{width:20,height:20}),Sa=({perioder:e,valgtPeriode:r,setPeriode:n,relasjonsRolleType:t,relasjonsRolleTypeKodeverk:a})=>{const s=Pe(),l=Qu(e),o=B=>{const de=e.find(M=>M.id===B);de&&n(de)},u=V(l[0].fom),g=V(l[l.length-1].tom),[f,y]=W.useState(u),[h,A]=W.useState(g),F=()=>{f.subtract(1,"month").isBefore(u)||(y(f.subtract(1,"month")),A(h.subtract(1,"month")))},we=()=>{h.add(1,"month").isAfter(g)||(y(f.add(1,"month")),A(h.add(1,"month")))},S=()=>{f.add(3,"month").isAfter(h)||(y(f.add(1,"month")),A(h.subtract(1,"month")))},te=()=>{h.add(1,"month").diff(f.subtract(1,"month"),"months")<36&&(y(f.subtract(1,"month")),A(h.add(1,"month")))};return i.jsxs(U,{gap:"4",children:[i.jsx(ln,{startDate:V(f).toDate(),endDate:V(h).add(1,"days").toDate(),children:i.jsx(ln.Row,{label:a.find(B=>B.kode===t)?.navn||"-",icon:Xu(t),children:l.map(B=>i.jsx(ln.Period,{start:V(B.fom).toDate(),end:V(B.tom).toDate(),status:B.status,icon:Ku[B.status],onSelectPeriod:()=>o(B.id),isActive:r?.id===B.id,"aria-controls":"panel-tilbakekreving",id:B.id.toString()},B.id))})}),i.jsxs(ie,{justify:"end",children:[i.jsx(z,{className:Rr.margin,size:"small",icon:i.jsx(Za,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),i.jsx(z,{className:Rr.margin,size:"small",icon:i.jsx(Ja,{"aria-hidden":!0}),onClick:te,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),i.jsx(z,{className:Rr.margin,size:"small",icon:i.jsx(ft,{"aria-hidden":!0}),onClick:F,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),i.jsx(z,{className:Rr.margin,size:"small",icon:i.jsx(kt,{"aria-hidden":!0}),onClick:we,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};Sa.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const Sn=(e,r)=>m(e.fom).diff(m(r.fom)),dt=e=>!e.erForeldet&&(e.begrunnelse===void 0||e.erSplittet),ed=e=>{const r=e[e.valgtVilkarResultatType],n=r[r.handletUaktsomhetGrad];return r.tilbakekrevdBelop?{...e,[e.valgtVilkarResultatType]:{...Vr(r,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...e,[e.valgtVilkarResultatType]:{...r,[r.handletUaktsomhetGrad]:{...Vr(n,"belopSomSkalTilbakekreves")}}}:e},rd=(e,r=[])=>r.map((n,t)=>{const a=e.find(o=>o.fom===n.fom&&o.tom===n.tom),s=a&&a[a.valgtVilkarResultatType]?a[a.valgtVilkarResultatType].erBelopetIBehold:void 0,l=a?!!a.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&(a?.begrunnelse===void 0||l),isGodkjent:!(n.erForeldet||s===!1),id:t}}),qa=(e,r)=>r.find(n=>!m(e.fom).isBefore(m(n.fom))&&!m(e.tom).isAfter(m(n.tom))),nd=(e,r)=>r.every(n=>!(m(e.fom).isSameOrBefore(m(n.tom))&&m(n.fom).isSameOrBefore(m(e.tom)))),td=(e,r,n)=>{const a=e.reduce((u,g)=>u+g.feilutbetaling,0)<n*4,l=r.vilkarsVurdertePerioder.map(u=>{const g=qa(u,e);return{...g,harMerEnnEnYtelse:g&&g.ytelser.length>1,...Vr(u,"feilutbetalingBelop"),feilutbetaling:u.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:a}});return{perioder:e.filter(u=>nd(u,l)).map(u=>({...u,harMerEnnEnYtelse:u.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:a})).concat(l)}},ad=(e,r)=>{if(!(!e||!r))return r.map(n=>{const t=qa(n,e.perioder),a=t.foreldelseVurderingType?t.foreldelseVurderingType===fn.FORELDET:t.foreldet;return{redusertBeloper:t.redusertBeloper,ytelser:t.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:t.feilutbetaling,erTotalBelopUnder4Rettsgebyr:t.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:t.årsak,begrunnelse:t.begrunnelse,erForeldet:a||!1}})},sd=(e,r)=>{const{vilkarResultat:n,begrunnelse:t,vilkarResultatInfo:a}=e,s=n?.kode??n;let l;const o=e.erForeldet??e.foreldet;if(o){const y=r.perioder.find(h=>h.fom===e.fom&&h.tom===e.tom);l={erForeldet:o,periodenErForeldet:!0,foreldetBegrunnelse:y?Pr(y.begrunnelse):void 0}}else l={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const u={valgtVilkarResultatType:s,begrunnelse:Pr(t),harMerEnnEnYtelse:e.ytelser.length>1,...l},g=s===Q.GOD_TRO?sr.buildIntialValues(a):{},f=s!==void 0&&s!==Q.GOD_TRO?ar.buildInitalValues(a):{};return{...u,vurderingBegrunnelse:a?Pr(a.begrunnelse):void 0,[u.valgtVilkarResultatType]:{...g,...f}}},id=(e,r)=>{const{valgtVilkarResultatType:n,begrunnelse:t,vurderingBegrunnelse:a}=e,s=e[n],l=n===Q.GOD_TRO?sr.transformValues(s,a):{},o=n!==Q.GOD_TRO?ar.transformValues(s,r,a):{};return{begrunnelse:t,fom:e.fom,tom:e.tom,vilkarResultat:n,vilkarResultatInfo:{...l,...o}}},ld=(e,r)=>e.perioder.map(n=>({...sd(n,r),fom:n.fom,tom:n.tom})).sort(Sn),od=(e,r)=>({kode:Kn.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:e.filter(n=>!n.erForeldet).map(n=>id(n,r))}),ud=e=>{if(!e||e.reduce((t,a)=>a.erForeldet?t:t+1,0)<2)return;const n=e.reduce((t,a)=>{const{valgtVilkarResultatType:s}=a,l=a[s],{handletUaktsomhetGrad:o}=l,u=l[o];return u&&u.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?t+1:t},0);if(n>0&&n!==e.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},ja=({perioderForeldelse:e,kodeverkSamlingFpTilbake:r,vilkarvurderingsperioder:n,submitCallback:t,isReadOnly:a,alleMerknaderFraBeslutter:s,vilkarvurdering:l,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:u,beregnBelop:g,behandling:f,formData:y,setFormData:h})=>{const A=n.perioder,F=n.rettsgebyr,we=td(A,l,F),[S,te]=W.useState(y||ld(we,e)),[B,de]=W.useState(!!y),[M,Se]=W.useState(S?.find(dt)),[wr,Fe]=W.useState(!1),[Be,nn]=W.useState();W.useEffect(()=>{nn(ud(S))},[S]);const ir=ad(we,S),tn=S.reduce((O,N)=>N.erForeldet?O:O+1,0),an=s[Kn.VURDER_TILBAKEKREVING],sn=()=>{Fe(!0),t(od(S,r.SærligGrunn))},Ye=rd(S,ir),j=Ye.some(O=>O.isAksjonspunktOpen),ae=M?Ye.find(O=>O.fom===M.fom&&O.tom===M.tom):void 0,J=O=>{const N=O?S.find(ge=>ge.fom===O.fom&&ge.tom===O.tom):void 0;Se(N)},qe=()=>{const O=S.findIndex(N=>N.fom===M?.fom&&N.tom===M?.tom);J(S[O+1])},je=()=>{const O=S.findIndex(N=>N.fom===M?.fom&&N.tom===M?.tom);J(S[O-1])},He=()=>{J(void 0)},Ne=O=>{const N=Vr(O,"erSplittet"),Sr=S.filter(Ie=>Ie.fom!==N.fom&&Ie.tom!==N.tom).concat(N).sort(Sn);te(Sr),h(Sr),de(!0),He();const lr=Sr.find(dt);lr&&J(lr)},me=O=>{const N=S.find(ge=>ge.fom===M?.fom&&ge.tom===M?.tom);if(N){const ge=O.map(Ie=>({...ed(N),...Ie,erSplittet:!0})),lr=S.filter(Ie=>Ie.fom!==M?.fom&&Ie.tom!==M?.tom).concat(ge).sort(Sn);He(),de(!0),te(lr),h(lr),J(ge[0])}},Ve=ir?ir.find(O=>O.fom===M?.fom&&O.tom===M?.tom):void 0;return i.jsx(Na,{merknaderFraBeslutter:an,withoutBorder:!0,children:i.jsxs(U,{gap:"4",children:[i.jsx(Yr,{size:"small",children:i.jsx(k,{id:"Behandlingspunkt.Tilbakekreving"})}),j&&i.jsx(Va,{children:i.jsx(k,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),S&&i.jsxs(i.Fragment,{children:[i.jsx(Sa,{perioder:Ye,valgtPeriode:ae,setPeriode:J,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:u}),M&&Ve&&i.jsx("div",{id:"panel-tilbakekreving","aria-controls":ae?.id.toString(),children:i.jsx(Ia,{borderWidth:"1",padding:"4",children:i.jsxs(U,{gap:"4",children:[i.jsx(_t,{setNestePeriode:qe,setForrigePeriode:je,periode:Ve,readOnly:a,oppdaterSplittedePerioder:me,behandlingUuid:f.uuid,beregnBelop:g,lukkPeriode:He}),i.jsx(fa,{feilutbetaling:Ve.feilutbetaling,fom:Ve.fom,tom:Ve.tom,arsakHendelseNavn:r.HendelseType.find(O=>O.kode===Ve.årsak?.hendelseType)?.navn}),i.jsx(wa,{periode:M,data:Ve,antallPerioderMedAksjonspunkt:tn,readOnly:a||M?.erForeldet===!0,skjulPeriode:He,oppdaterPeriode:Ne,kodeverkSamlingFpTilbake:r,vilkarsVurdertePerioder:S},ae?.id)]})})})]}),Be&&i.jsx(ct,{variant:"error",children:i.jsx(k,{id:Be})}),i.jsx("div",{children:i.jsx(Ua,{isReadOnly:a||M?.erForeldet===!0,isDirty:B,isSubmittable:!j&&!M&&!Be,onClick:sn,isSubmitting:wr})})]})})};ja.__docgenInfo={description:`TilbakekrevingForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const dd=Ga(bt),Ma=e=>i.jsx(Ea,{value:dd,children:i.jsx(ja,{...e})});Ma.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:md}=__STORYBOOK_MODULE_ACTIONS__,gd=La(bt),cd={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:fn.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:fn.FORELDET}]},xa={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:vt.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},Sd={component:Ma,decorators:[gd],args:{submitCallback:md("button-click"),behandling:{uuid:"1",versjon:1,status:Ka.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:Wa,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:cd,vilkarvurdering:{vilkarsVurdertePerioder:[]},beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleType:mr.MOR,relasjonsRolleTypeKodeverk:[{kode:mr.MOR,kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},Or={args:{vilkarvurderingsperioder:xa}},Dr={args:{vilkarvurderingsperioder:{perioder:[xa.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:vt.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};Or.parameters={...Or.parameters,docs:{...Or.parameters?.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...Or.parameters?.docs?.source}}};Dr.parameters={...Dr.parameters,docs:{...Dr.parameters?.docs,source:{originalSource:`{
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
}`,...Dr.parameters?.docs?.source}}};const qd=["Default","MedToPerioder"];export{Or as Default,Dr as MedToPerioder,qd as __namedExportsOrder,Sd as default};
