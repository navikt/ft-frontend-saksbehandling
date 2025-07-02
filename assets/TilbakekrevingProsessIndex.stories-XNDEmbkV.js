import{h as Pe,aa as mt,j as i,as as gt,M as Sr,N as Br,V as I,L as Oe,B as H,q as N,v as Qe,aQ as Ra,G as ft,F as z,t as Oa,r as W,H as ie,aR as kt,aS as ct,ak as Da,aT as Pa,ad as Xe,m as Sn,aV as Ge,aP as De,D as Yr,ap as pt,aW as gn,aX as Aa,at as Fa,aw as gr,E as Ba,ax as Dr,al as ht,aY as Zn,aZ as Ya,au as Na,ar as Va,I as Ia,aI as Ua,aU as Nr,P as Ea,l as Ga}from"./iframe-_utZp_mc.js";import{g as La}from"./withIntl-CZK4fC_Y.js";import{a as Wa}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as V,O as Ha,J as Ca,V as $a,l as yt,i as za,a as qn,o as jn,N as Vr,b as dr,$ as fn,Z as Ka,y as vt}from"./style-GWYTQS5k.js";import{M as c}from"./message-BJhH8nhq.js";import{S as Jn,T as sn,a as Za,b as Ja,c as Qa,d as Xa,e as es,f as rs}from"./Timeline-CWQ9T9Lu.js";import{S as ns}from"./Scissors-x3Q5pOQv.js";import{T as fe}from"./Table-DE2N3EYs.js";import{T as ts,m as bt}from"./nb_NO-Aotan59s.js";import{a as as,S as ss}from"./SilhouetteFill-chrlfcVd.js";//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Tt;function m(){return Tt.apply(null,arguments)}function is(e){Tt=e}function ee(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ee(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function _(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function Mn(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var r;for(r in e)if(_(e,r))return!1;return!0}function L(e){return e===void 0}function be(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function yr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function _t(e,r){var n=[],t,a=e.length;for(t=0;t<a;++t)n.push(r(e[t],t));return n}function Me(e,r){for(var n in r)_(r,n)&&(e[n]=r[n]);return _(r,"toString")&&(e.toString=r.toString),_(r,"valueOf")&&(e.valueOf=r.valueOf),e}function oe(e,r,n,t){return Ht(e,r,n,t,!0).utc()}function ls(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function v(e){return e._pf==null&&(e._pf=ls()),e._pf}var kn;Array.prototype.some?kn=Array.prototype.some:kn=function(e){var r=Object(this),n=r.length>>>0,t;for(t=0;t<n;t++)if(t in r&&e.call(this,r[t],t,r))return!0;return!1};function xn(e){var r=null,n=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(r=v(e),n=kn.call(r.parsedDateParts,function(a){return a!=null}),t=r.overflow<0&&!r.empty&&!r.invalidEra&&!r.invalidMonth&&!r.invalidWeekday&&!r.weekdayMismatch&&!r.nullInput&&!r.invalidFormat&&!r.userInvalidated&&(!r.meridiem||r.meridiem&&n),e._strict&&(t=t&&r.charsLeftOver===0&&r.unusedTokens.length===0&&r.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function Wr(e){var r=oe(NaN);return e!=null?Me(v(r),e):v(r).userInvalidated=!0,r}var Qn=m.momentProperties=[],ln=!1;function Rn(e,r){var n,t,a,s=Qn.length;if(L(r._isAMomentObject)||(e._isAMomentObject=r._isAMomentObject),L(r._i)||(e._i=r._i),L(r._f)||(e._f=r._f),L(r._l)||(e._l=r._l),L(r._strict)||(e._strict=r._strict),L(r._tzm)||(e._tzm=r._tzm),L(r._isUTC)||(e._isUTC=r._isUTC),L(r._offset)||(e._offset=r._offset),L(r._pf)||(e._pf=v(r)),L(r._locale)||(e._locale=r._locale),s>0)for(n=0;n<s;n++)t=Qn[n],a=r[t],L(a)||(e[t]=a);return e}function vr(e){Rn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ln===!1&&(ln=!0,m.updateOffset(this),ln=!1)}function re(e){return e instanceof vr||e!=null&&e._isAMomentObject!=null}function wt(e){m.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function K(e,r){var n=!0;return Me(function(){if(m.deprecationHandler!=null&&m.deprecationHandler(null,e),n){var t=[],a,s,l,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(l in arguments[0])_(arguments[0],l)&&(a+=l+": "+arguments[0][l]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}wt(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),n=!1}return r.apply(this,arguments)},r)}var Xn={};function St(e,r){m.deprecationHandler!=null&&m.deprecationHandler(e,r),Xn[e]||(wt(r),Xn[e]=!0)}m.suppressDeprecationWarnings=!1;m.deprecationHandler=null;function ue(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function os(e){var r,n;for(n in e)_(e,n)&&(r=e[n],ue(r)?this[n]=r:this["_"+n]=r);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function cn(e,r){var n=Me({},e),t;for(t in r)_(r,t)&&(Ee(e[t])&&Ee(r[t])?(n[t]={},Me(n[t],e[t]),Me(n[t],r[t])):r[t]!=null?n[t]=r[t]:delete n[t]);for(t in e)_(e,t)&&!_(r,t)&&Ee(e[t])&&(n[t]=Me({},n[t]));return n}function On(e){e!=null&&this.set(e)}var pn;Object.keys?pn=Object.keys:pn=function(e){var r,n=[];for(r in e)_(e,r)&&n.push(r);return n};var us={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function ds(e,r,n){var t=this._calendar[e]||this._calendar.sameElse;return ue(t)?t.call(r,n):t}function le(e,r,n){var t=""+Math.abs(e),a=r-t.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var Dn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,qr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,on={},Ke={};function p(e,r,n,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(Ke[e]=a),r&&(Ke[r[0]]=function(){return le(a.apply(this,arguments),r[1],r[2])}),n&&(Ke[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function ms(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function gs(e){var r=e.match(Dn),n,t;for(n=0,t=r.length;n<t;n++)Ke[r[n]]?r[n]=Ke[r[n]]:r[n]=ms(r[n]);return function(a){var s="",l;for(l=0;l<t;l++)s+=ue(r[l])?r[l].call(a,e):r[l];return s}}function Pr(e,r){return e.isValid()?(r=qt(r,e.localeData()),on[r]=on[r]||gs(r),on[r](e)):e.localeData().invalidDate()}function qt(e,r){var n=5;function t(a){return r.longDateFormat(a)||a}for(qr.lastIndex=0;n>=0&&qr.test(e);)e=e.replace(qr,t),qr.lastIndex=0,n-=1;return e}var fs={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function ks(e){var r=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return r||!n?r:(this._longDateFormat[e]=n.match(Dn).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var cs="Invalid date";function ps(){return this._invalidDate}var hs="%d",ys=/\d{1,2}/;function vs(e){return this._ordinal.replace("%d",e)}var bs={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ts(e,r,n,t){var a=this._relativeTime[n];return ue(a)?a(e,r,n,t):a.replace(/%d/i,e)}function _s(e,r){var n=this._relativeTime[e>0?"future":"past"];return ue(n)?n(r):n.replace(/%s/i,r)}var et={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Z(e){return typeof e=="string"?et[e]||et[e.toLowerCase()]:void 0}function Pn(e){var r={},n,t;for(t in e)_(e,t)&&(n=Z(t),n&&(r[n]=e[t]));return r}var ws={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Ss(e){var r=[],n;for(n in e)_(e,n)&&r.push({unit:n,priority:ws[n]});return r.sort(function(t,a){return t.priority-a.priority}),r}var jt=/\d/,C=/\d\d/,Mt=/\d{3}/,An=/\d{4}/,Hr=/[+-]?\d{6}/,R=/\d\d?/,xt=/\d\d\d\d?/,Rt=/\d\d\d\d\d\d?/,Cr=/\d{1,3}/,Fn=/\d{1,4}/,$r=/[+-]?\d{1,6}/,er=/\d+/,zr=/[+-]?\d+/,qs=/Z|[+-]\d\d:?\d\d/gi,Kr=/Z|[+-]\d\d(?::?\d\d)?/gi,js=/[+-]?\d+(\.\d{1,3})?/,br=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,rr=/^[1-9]\d?/,Bn=/^([1-9]\d|\d)/,Ir;Ir={};function f(e,r,n){Ir[e]=ue(r)?r:function(t,a){return t&&n?n:r}}function Ms(e,r){return _(Ir,e)?Ir[e](r._strict,r._locale):new RegExp(xs(e))}function xs(e){return ye(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(r,n,t,a,s){return n||t||a||s}))}function ye(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function $(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function b(e){var r=+e,n=0;return r!==0&&isFinite(r)&&(n=$(r)),n}var hn={};function q(e,r){var n,t=r,a;for(typeof e=="string"&&(e=[e]),be(r)&&(t=function(s,l){l[r]=b(s)}),a=e.length,n=0;n<a;n++)hn[e[n]]=t}function Tr(e,r){q(e,function(n,t,a,s){a._w=a._w||{},r(n,a._w,a,s)})}function Rs(e,r,n){r!=null&&_(hn,e)&&hn[e](r,n._a,n,e)}function Zr(e){return e%4===0&&e%100!==0||e%400===0}var U=0,pe=1,se=2,B=3,X=4,he=5,Ue=6,Os=7,Ds=8;p("Y",0,0,function(){var e=this.year();return e<=9999?le(e,4):"+"+e});p(0,["YY",2],0,function(){return this.year()%100});p(0,["YYYY",4],0,"year");p(0,["YYYYY",5],0,"year");p(0,["YYYYYY",6,!0],0,"year");f("Y",zr);f("YY",R,C);f("YYYY",Fn,An);f("YYYYY",$r,Hr);f("YYYYYY",$r,Hr);q(["YYYYY","YYYYYY"],U);q("YYYY",function(e,r){r[U]=e.length===2?m.parseTwoDigitYear(e):b(e)});q("YY",function(e,r){r[U]=m.parseTwoDigitYear(e)});q("Y",function(e,r){r[U]=parseInt(e,10)});function mr(e){return Zr(e)?366:365}m.parseTwoDigitYear=function(e){return b(e)+(b(e)>68?1900:2e3)};var Ot=nr("FullYear",!0);function Ps(){return Zr(this.year())}function nr(e,r){return function(n){return n!=null?(Dt(this,e,n),m.updateOffset(this,r),this):fr(this,e)}}function fr(e,r){if(!e.isValid())return NaN;var n=e._d,t=e._isUTC;switch(r){case"Milliseconds":return t?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return t?n.getUTCSeconds():n.getSeconds();case"Minutes":return t?n.getUTCMinutes():n.getMinutes();case"Hours":return t?n.getUTCHours():n.getHours();case"Date":return t?n.getUTCDate():n.getDate();case"Day":return t?n.getUTCDay():n.getDay();case"Month":return t?n.getUTCMonth():n.getMonth();case"FullYear":return t?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Dt(e,r,n){var t,a,s,l,o;if(!(!e.isValid()||isNaN(n))){switch(t=e._d,a=e._isUTC,r){case"Milliseconds":return void(a?t.setUTCMilliseconds(n):t.setMilliseconds(n));case"Seconds":return void(a?t.setUTCSeconds(n):t.setSeconds(n));case"Minutes":return void(a?t.setUTCMinutes(n):t.setMinutes(n));case"Hours":return void(a?t.setUTCHours(n):t.setHours(n));case"Date":return void(a?t.setUTCDate(n):t.setDate(n));case"FullYear":break;default:return}s=n,l=e.month(),o=e.date(),o=o===29&&l===1&&!Zr(s)?28:o,a?t.setUTCFullYear(s,l,o):t.setFullYear(s,l,o)}}function As(e){return e=Z(e),ue(this[e])?this[e]():this}function Fs(e,r){if(typeof e=="object"){e=Pn(e);var n=Ss(e),t,a=n.length;for(t=0;t<a;t++)this[n[t].unit](e[n[t].unit])}else if(e=Z(e),ue(this[e]))return this[e](r);return this}function Bs(e,r){return(e%r+r)%r}var A;Array.prototype.indexOf?A=Array.prototype.indexOf:A=function(e){var r;for(r=0;r<this.length;++r)if(this[r]===e)return r;return-1};function Yn(e,r){if(isNaN(e)||isNaN(r))return NaN;var n=Bs(r,12);return e+=(r-n)/12,n===1?Zr(e)?29:28:31-n%7%2}p("M",["MM",2],"Mo",function(){return this.month()+1});p("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});p("MMMM",0,0,function(e){return this.localeData().months(this,e)});f("M",R,rr);f("MM",R,C);f("MMM",function(e,r){return r.monthsShortRegex(e)});f("MMMM",function(e,r){return r.monthsRegex(e)});q(["M","MM"],function(e,r){r[pe]=b(e)-1});q(["MMM","MMMM"],function(e,r,n,t){var a=n._locale.monthsParse(e,t,n._strict);a!=null?r[pe]=a:v(n).invalidMonth=e});var Ys="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Pt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),At=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ns=br,Vs=br;function Is(e,r){return e?ee(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||At).test(r)?"format":"standalone"][e.month()]:ee(this._months)?this._months:this._months.standalone}function Us(e,r){return e?ee(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[At.test(r)?"format":"standalone"][e.month()]:ee(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Es(e,r,n){var t,a,s,l=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=oe([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return n?r==="MMM"?(a=A.call(this._shortMonthsParse,l),a!==-1?a:null):(a=A.call(this._longMonthsParse,l),a!==-1?a:null):r==="MMM"?(a=A.call(this._shortMonthsParse,l),a!==-1?a:(a=A.call(this._longMonthsParse,l),a!==-1?a:null)):(a=A.call(this._longMonthsParse,l),a!==-1?a:(a=A.call(this._shortMonthsParse,l),a!==-1?a:null))}function Gs(e,r,n){var t,a,s;if(this._monthsParseExact)return Es.call(this,e,r,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=oe([2e3,t]),n&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(n&&r==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!n&&this._monthsParse[t].test(e))return t}}function Ft(e,r){if(!e.isValid())return e;if(typeof r=="string"){if(/^\d+$/.test(r))r=b(r);else if(r=e.localeData().monthsParse(r),!be(r))return e}var n=r,t=e.date();return t=t<29?t:Math.min(t,Yn(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,t):e._d.setMonth(n,t),e}function Bt(e){return e!=null?(Ft(this,e),m.updateOffset(this,!0),this):fr(this,"Month")}function Ls(){return Yn(this.year(),this.month())}function Ws(e){return this._monthsParseExact?(_(this,"_monthsRegex")||Yt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(_(this,"_monthsShortRegex")||(this._monthsShortRegex=Ns),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Hs(e){return this._monthsParseExact?(_(this,"_monthsRegex")||Yt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(_(this,"_monthsRegex")||(this._monthsRegex=Vs),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Yt(){function e(u,g){return g.length-u.length}var r=[],n=[],t=[],a,s,l,o;for(a=0;a<12;a++)s=oe([2e3,a]),l=ye(this.monthsShort(s,"")),o=ye(this.months(s,"")),r.push(l),n.push(o),t.push(o),t.push(l);r.sort(e),n.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Cs(e,r,n,t,a,s,l){var o;return e<100&&e>=0?(o=new Date(e+400,r,n,t,a,s,l),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,r,n,t,a,s,l),o}function kr(e){var r,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,r=new Date(Date.UTC.apply(null,n)),isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e)):r=new Date(Date.UTC.apply(null,arguments)),r}function Ur(e,r,n){var t=7+r-n,a=(7+kr(e,0,t).getUTCDay()-r)%7;return-a+t-1}function Nt(e,r,n,t,a){var s=(7+n-t)%7,l=Ur(e,t,a),o=1+7*(r-1)+s+l,u,g;return o<=0?(u=e-1,g=mr(u)+o):o>mr(e)?(u=e+1,g=o-mr(e)):(u=e,g=o),{year:u,dayOfYear:g}}function cr(e,r,n){var t=Ur(e.year(),r,n),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,l;return a<1?(l=e.year()-1,s=a+ve(l,r,n)):a>ve(e.year(),r,n)?(s=a-ve(e.year(),r,n),l=e.year()+1):(l=e.year(),s=a),{week:s,year:l}}function ve(e,r,n){var t=Ur(e,r,n),a=Ur(e+1,r,n);return(mr(e)-t+a)/7}p("w",["ww",2],"wo","week");p("W",["WW",2],"Wo","isoWeek");f("w",R,rr);f("ww",R,C);f("W",R,rr);f("WW",R,C);Tr(["w","ww","W","WW"],function(e,r,n,t){r[t.substr(0,1)]=b(e)});function $s(e){return cr(e,this._week.dow,this._week.doy).week}var zs={dow:0,doy:6};function Ks(){return this._week.dow}function Zs(){return this._week.doy}function Js(e){var r=this.localeData().week(this);return e==null?r:this.add((e-r)*7,"d")}function Qs(e){var r=cr(this,1,4).week;return e==null?r:this.add((e-r)*7,"d")}p("d",0,"do","day");p("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});p("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});p("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});p("e",0,0,"weekday");p("E",0,0,"isoWeekday");f("d",R);f("e",R);f("E",R);f("dd",function(e,r){return r.weekdaysMinRegex(e)});f("ddd",function(e,r){return r.weekdaysShortRegex(e)});f("dddd",function(e,r){return r.weekdaysRegex(e)});Tr(["dd","ddd","dddd"],function(e,r,n,t){var a=n._locale.weekdaysParse(e,t,n._strict);a!=null?r.d=a:v(n).invalidWeekday=e});Tr(["d","e","E"],function(e,r,n,t){r[t]=b(e)});function Xs(e,r){return typeof e!="string"?e:isNaN(e)?(e=r.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ei(e,r){return typeof e=="string"?r.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Nn(e,r){return e.slice(r,7).concat(e.slice(0,r))}var ri="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Vt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ni="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ti=br,ai=br,si=br;function ii(e,r){var n=ee(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(r)?"format":"standalone"];return e===!0?Nn(n,this._week.dow):e?n[e.day()]:n}function li(e){return e===!0?Nn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function oi(e){return e===!0?Nn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function ui(e,r,n){var t,a,s,l=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=oe([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return n?r==="dddd"?(a=A.call(this._weekdaysParse,l),a!==-1?a:null):r==="ddd"?(a=A.call(this._shortWeekdaysParse,l),a!==-1?a:null):(a=A.call(this._minWeekdaysParse,l),a!==-1?a:null):r==="dddd"?(a=A.call(this._weekdaysParse,l),a!==-1||(a=A.call(this._shortWeekdaysParse,l),a!==-1)?a:(a=A.call(this._minWeekdaysParse,l),a!==-1?a:null)):r==="ddd"?(a=A.call(this._shortWeekdaysParse,l),a!==-1||(a=A.call(this._weekdaysParse,l),a!==-1)?a:(a=A.call(this._minWeekdaysParse,l),a!==-1?a:null)):(a=A.call(this._minWeekdaysParse,l),a!==-1||(a=A.call(this._weekdaysParse,l),a!==-1)?a:(a=A.call(this._shortWeekdaysParse,l),a!==-1?a:null))}function di(e,r,n){var t,a,s;if(this._weekdaysParseExact)return ui.call(this,e,r,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=oe([2e3,1]).day(t),n&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(n&&r==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(n&&r==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!n&&this._weekdaysParse[t].test(e))return t}}function mi(e){if(!this.isValid())return e!=null?this:NaN;var r=fr(this,"Day");return e!=null?(e=Xs(e,this.localeData()),this.add(e-r,"d")):r}function gi(e){if(!this.isValid())return e!=null?this:NaN;var r=(this.day()+7-this.localeData()._week.dow)%7;return e==null?r:this.add(e-r,"d")}function fi(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var r=ei(e,this.localeData());return this.day(this.day()%7?r:r-7)}else return this.day()||7}function ki(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(_(this,"_weekdaysRegex")||(this._weekdaysRegex=ti),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function ci(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(_(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ai),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function pi(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(_(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=si),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Vn(){function e(k,h){return h.length-k.length}var r=[],n=[],t=[],a=[],s,l,o,u,g;for(s=0;s<7;s++)l=oe([2e3,1]).day(s),o=ye(this.weekdaysMin(l,"")),u=ye(this.weekdaysShort(l,"")),g=ye(this.weekdays(l,"")),r.push(o),n.push(u),t.push(g),a.push(o),a.push(u),a.push(g);r.sort(e),n.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function In(){return this.hours()%12||12}function hi(){return this.hours()||24}p("H",["HH",2],0,"hour");p("h",["hh",2],0,In);p("k",["kk",2],0,hi);p("hmm",0,0,function(){return""+In.apply(this)+le(this.minutes(),2)});p("hmmss",0,0,function(){return""+In.apply(this)+le(this.minutes(),2)+le(this.seconds(),2)});p("Hmm",0,0,function(){return""+this.hours()+le(this.minutes(),2)});p("Hmmss",0,0,function(){return""+this.hours()+le(this.minutes(),2)+le(this.seconds(),2)});function It(e,r){p(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),r)})}It("a",!0);It("A",!1);function Ut(e,r){return r._meridiemParse}f("a",Ut);f("A",Ut);f("H",R,Bn);f("h",R,rr);f("k",R,rr);f("HH",R,C);f("hh",R,C);f("kk",R,C);f("hmm",xt);f("hmmss",Rt);f("Hmm",xt);f("Hmmss",Rt);q(["H","HH"],B);q(["k","kk"],function(e,r,n){var t=b(e);r[B]=t===24?0:t});q(["a","A"],function(e,r,n){n._isPm=n._locale.isPM(e),n._meridiem=e});q(["h","hh"],function(e,r,n){r[B]=b(e),v(n).bigHour=!0});q("hmm",function(e,r,n){var t=e.length-2;r[B]=b(e.substr(0,t)),r[X]=b(e.substr(t)),v(n).bigHour=!0});q("hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[B]=b(e.substr(0,t)),r[X]=b(e.substr(t,2)),r[he]=b(e.substr(a)),v(n).bigHour=!0});q("Hmm",function(e,r,n){var t=e.length-2;r[B]=b(e.substr(0,t)),r[X]=b(e.substr(t))});q("Hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[B]=b(e.substr(0,t)),r[X]=b(e.substr(t,2)),r[he]=b(e.substr(a))});function yi(e){return(e+"").toLowerCase().charAt(0)==="p"}var vi=/[ap]\.?m?\.?/i,bi=nr("Hours",!0);function Ti(e,r,n){return e>11?n?"pm":"PM":n?"am":"AM"}var Et={calendar:us,longDateFormat:fs,invalidDate:cs,ordinal:hs,dayOfMonthOrdinalParse:ys,relativeTime:bs,months:Ys,monthsShort:Pt,week:zs,weekdays:ri,weekdaysMin:ni,weekdaysShort:Vt,meridiemParse:vi},P={},lr={},pr;function _i(e,r){var n,t=Math.min(e.length,r.length);for(n=0;n<t;n+=1)if(e[n]!==r[n])return n;return t}function rt(e){return e&&e.toLowerCase().replace("_","-")}function wi(e){for(var r=0,n,t,a,s;r<e.length;){for(s=rt(e[r]).split("-"),n=s.length,t=rt(e[r+1]),t=t?t.split("-"):null;n>0;){if(a=Jr(s.slice(0,n).join("-")),a)return a;if(t&&t.length>=n&&_i(s,t)>=n-1)break;n--}r++}return pr}function Si(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Jr(e){var r=null,n;if(P[e]===void 0&&typeof module<"u"&&module&&module.exports&&Si(e))try{r=pr._abbr,n=require,n("./locale/"+e),Re(r)}catch{P[e]=null}return P[e]}function Re(e,r){var n;return e&&(L(r)?n=Te(e):n=Un(e,r),n?pr=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),pr._abbr}function Un(e,r){if(r!==null){var n,t=Et;if(r.abbr=e,P[e]!=null)St("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=P[e]._config;else if(r.parentLocale!=null)if(P[r.parentLocale]!=null)t=P[r.parentLocale]._config;else if(n=Jr(r.parentLocale),n!=null)t=n._config;else return lr[r.parentLocale]||(lr[r.parentLocale]=[]),lr[r.parentLocale].push({name:e,config:r}),null;return P[e]=new On(cn(t,r)),lr[e]&&lr[e].forEach(function(a){Un(a.name,a.config)}),Re(e),P[e]}else return delete P[e],null}function qi(e,r){if(r!=null){var n,t,a=Et;P[e]!=null&&P[e].parentLocale!=null?P[e].set(cn(P[e]._config,r)):(t=Jr(e),t!=null&&(a=t._config),r=cn(a,r),t==null&&(r.abbr=e),n=new On(r),n.parentLocale=P[e],P[e]=n),Re(e)}else P[e]!=null&&(P[e].parentLocale!=null?(P[e]=P[e].parentLocale,e===Re()&&Re(e)):P[e]!=null&&delete P[e]);return P[e]}function Te(e){var r;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return pr;if(!ee(e)){if(r=Jr(e),r)return r;e=[e]}return wi(e)}function ji(){return pn(P)}function En(e){var r,n=e._a;return n&&v(e).overflow===-2&&(r=n[pe]<0||n[pe]>11?pe:n[se]<1||n[se]>Yn(n[U],n[pe])?se:n[B]<0||n[B]>24||n[B]===24&&(n[X]!==0||n[he]!==0||n[Ue]!==0)?B:n[X]<0||n[X]>59?X:n[he]<0||n[he]>59?he:n[Ue]<0||n[Ue]>999?Ue:-1,v(e)._overflowDayOfYear&&(r<U||r>se)&&(r=se),v(e)._overflowWeeks&&r===-1&&(r=Os),v(e)._overflowWeekday&&r===-1&&(r=Ds),v(e).overflow=r),e}var Mi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,xi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ri=/Z|[+-]\d\d(?::?\d\d)?/,jr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],un=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Oi=/^\/?Date\((-?\d+)/i,Di=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Pi={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Gt(e){var r,n,t=e._i,a=Mi.exec(t)||xi.exec(t),s,l,o,u,g=jr.length,k=un.length;if(a){for(v(e).iso=!0,r=0,n=g;r<n;r++)if(jr[r][1].exec(a[1])){l=jr[r][0],s=jr[r][2]!==!1;break}if(l==null){e._isValid=!1;return}if(a[3]){for(r=0,n=k;r<n;r++)if(un[r][1].exec(a[3])){o=(a[2]||" ")+un[r][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Ri.exec(a[4]))u="Z";else{e._isValid=!1;return}e._f=l+(o||"")+(u||""),Ln(e)}else e._isValid=!1}function Ai(e,r,n,t,a,s){var l=[Fi(e),Pt.indexOf(r),parseInt(n,10),parseInt(t,10),parseInt(a,10)];return s&&l.push(parseInt(s,10)),l}function Fi(e){var r=parseInt(e,10);return r<=49?2e3+r:r<=999?1900+r:r}function Bi(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Yi(e,r,n){if(e){var t=Vt.indexOf(e),a=new Date(r[0],r[1],r[2]).getDay();if(t!==a)return v(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Ni(e,r,n){if(e)return Pi[e];if(r)return 0;var t=parseInt(n,10),a=t%100,s=(t-a)/100;return s*60+a}function Lt(e){var r=Di.exec(Bi(e._i)),n;if(r){if(n=Ai(r[4],r[3],r[2],r[5],r[6],r[7]),!Yi(r[1],n,e))return;e._a=n,e._tzm=Ni(r[8],r[9],r[10]),e._d=kr.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),v(e).rfc2822=!0}else e._isValid=!1}function Vi(e){var r=Oi.exec(e._i);if(r!==null){e._d=new Date(+r[1]);return}if(Gt(e),e._isValid===!1)delete e._isValid;else return;if(Lt(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:m.createFromInputFallback(e)}m.createFromInputFallback=K("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function $e(e,r,n){return e??r??n}function Ii(e){var r=new Date(m.now());return e._useUTC?[r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()]:[r.getFullYear(),r.getMonth(),r.getDate()]}function Gn(e){var r,n,t=[],a,s,l;if(!e._d){for(a=Ii(e),e._w&&e._a[se]==null&&e._a[pe]==null&&Ui(e),e._dayOfYear!=null&&(l=$e(e._a[U],a[U]),(e._dayOfYear>mr(l)||e._dayOfYear===0)&&(v(e)._overflowDayOfYear=!0),n=kr(l,0,e._dayOfYear),e._a[pe]=n.getUTCMonth(),e._a[se]=n.getUTCDate()),r=0;r<3&&e._a[r]==null;++r)e._a[r]=t[r]=a[r];for(;r<7;r++)e._a[r]=t[r]=e._a[r]==null?r===2?1:0:e._a[r];e._a[B]===24&&e._a[X]===0&&e._a[he]===0&&e._a[Ue]===0&&(e._nextDay=!0,e._a[B]=0),e._d=(e._useUTC?kr:Cs).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[B]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(v(e).weekdayMismatch=!0)}}function Ui(e){var r,n,t,a,s,l,o,u,g;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(s=1,l=4,n=$e(r.GG,e._a[U],cr(x(),1,4).year),t=$e(r.W,1),a=$e(r.E,1),(a<1||a>7)&&(u=!0)):(s=e._locale._week.dow,l=e._locale._week.doy,g=cr(x(),s,l),n=$e(r.gg,e._a[U],g.year),t=$e(r.w,g.week),r.d!=null?(a=r.d,(a<0||a>6)&&(u=!0)):r.e!=null?(a=r.e+s,(r.e<0||r.e>6)&&(u=!0)):a=s),t<1||t>ve(n,s,l)?v(e)._overflowWeeks=!0:u!=null?v(e)._overflowWeekday=!0:(o=Nt(n,t,a,s,l),e._a[U]=o.year,e._dayOfYear=o.dayOfYear)}m.ISO_8601=function(){};m.RFC_2822=function(){};function Ln(e){if(e._f===m.ISO_8601){Gt(e);return}if(e._f===m.RFC_2822){Lt(e);return}e._a=[],v(e).empty=!0;var r=""+e._i,n,t,a,s,l,o=r.length,u=0,g,k;for(a=qt(e._f,e._locale).match(Dn)||[],k=a.length,n=0;n<k;n++)s=a[n],t=(r.match(Ms(s,e))||[])[0],t&&(l=r.substr(0,r.indexOf(t)),l.length>0&&v(e).unusedInput.push(l),r=r.slice(r.indexOf(t)+t.length),u+=t.length),Ke[s]?(t?v(e).empty=!1:v(e).unusedTokens.push(s),Rs(s,t,e)):e._strict&&!t&&v(e).unusedTokens.push(s);v(e).charsLeftOver=o-u,r.length>0&&v(e).unusedInput.push(r),e._a[B]<=12&&v(e).bigHour===!0&&e._a[B]>0&&(v(e).bigHour=void 0),v(e).parsedDateParts=e._a.slice(0),v(e).meridiem=e._meridiem,e._a[B]=Ei(e._locale,e._a[B],e._meridiem),g=v(e).era,g!==null&&(e._a[U]=e._locale.erasConvertYear(g,e._a[U])),Gn(e),En(e)}function Ei(e,r,n){var t;return n==null?r:e.meridiemHour!=null?e.meridiemHour(r,n):(e.isPM!=null&&(t=e.isPM(n),t&&r<12&&(r+=12),!t&&r===12&&(r=0)),r)}function Gi(e){var r,n,t,a,s,l,o=!1,u=e._f.length;if(u===0){v(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<u;a++)s=0,l=!1,r=Rn({},e),e._useUTC!=null&&(r._useUTC=e._useUTC),r._f=e._f[a],Ln(r),xn(r)&&(l=!0),s+=v(r).charsLeftOver,s+=v(r).unusedTokens.length*10,v(r).score=s,o?s<t&&(t=s,n=r):(t==null||s<t||l)&&(t=s,n=r,l&&(o=!0));Me(e,n||r)}function Li(e){if(!e._d){var r=Pn(e._i),n=r.day===void 0?r.date:r.day;e._a=_t([r.year,r.month,n,r.hour,r.minute,r.second,r.millisecond],function(t){return t&&parseInt(t,10)}),Gn(e)}}function Wi(e){var r=new vr(En(Wt(e)));return r._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Wt(e){var r=e._i,n=e._f;return e._locale=e._locale||Te(e._l),r===null||n===void 0&&r===""?Wr({nullInput:!0}):(typeof r=="string"&&(e._i=r=e._locale.preparse(r)),re(r)?new vr(En(r)):(yr(r)?e._d=r:ee(n)?Gi(e):n?Ln(e):Hi(e),xn(e)||(e._d=null),e))}function Hi(e){var r=e._i;L(r)?e._d=new Date(m.now()):yr(r)?e._d=new Date(r.valueOf()):typeof r=="string"?Vi(e):ee(r)?(e._a=_t(r.slice(0),function(n){return parseInt(n,10)}),Gn(e)):Ee(r)?Li(e):be(r)?e._d=new Date(r):m.createFromInputFallback(e)}function Ht(e,r,n,t,a){var s={};return(r===!0||r===!1)&&(t=r,r=void 0),(n===!0||n===!1)&&(t=n,n=void 0),(Ee(e)&&Mn(e)||ee(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=r,s._strict=t,Wi(s)}function x(e,r,n,t){return Ht(e,r,n,t,!1)}var Ci=K("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=x.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Wr()}),$i=K("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=x.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Wr()});function Ct(e,r){var n,t;if(r.length===1&&ee(r[0])&&(r=r[0]),!r.length)return x();for(n=r[0],t=1;t<r.length;++t)(!r[t].isValid()||r[t][e](n))&&(n=r[t]);return n}function zi(){var e=[].slice.call(arguments,0);return Ct("isBefore",e)}function Ki(){var e=[].slice.call(arguments,0);return Ct("isAfter",e)}var Zi=function(){return Date.now?Date.now():+new Date},or=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ji(e){var r,n=!1,t,a=or.length;for(r in e)if(_(e,r)&&!(A.call(or,r)!==-1&&(e[r]==null||!isNaN(e[r]))))return!1;for(t=0;t<a;++t)if(e[or[t]]){if(n)return!1;parseFloat(e[or[t]])!==b(e[or[t]])&&(n=!0)}return!0}function Qi(){return this._isValid}function Xi(){return ne(NaN)}function Qr(e){var r=Pn(e),n=r.year||0,t=r.quarter||0,a=r.month||0,s=r.week||r.isoWeek||0,l=r.day||0,o=r.hour||0,u=r.minute||0,g=r.second||0,k=r.millisecond||0;this._isValid=Ji(r),this._milliseconds=+k+g*1e3+u*6e4+o*1e3*60*60,this._days=+l+s*7,this._months=+a+t*3+n*12,this._data={},this._locale=Te(),this._bubble()}function Ar(e){return e instanceof Qr}function yn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function el(e,r,n){var t=Math.min(e.length,r.length),a=Math.abs(e.length-r.length),s=0,l;for(l=0;l<t;l++)b(e[l])!==b(r[l])&&s++;return s+a}function $t(e,r){p(e,0,0,function(){var n=this.utcOffset(),t="+";return n<0&&(n=-n,t="-"),t+le(~~(n/60),2)+r+le(~~n%60,2)})}$t("Z",":");$t("ZZ","");f("Z",Kr);f("ZZ",Kr);q(["Z","ZZ"],function(e,r,n){n._useUTC=!0,n._tzm=Wn(Kr,e)});var rl=/([\+\-]|\d\d)/gi;function Wn(e,r){var n=(r||"").match(e),t,a,s;return n===null?null:(t=n[n.length-1]||[],a=(t+"").match(rl)||["-",0,0],s=+(a[1]*60)+b(a[2]),s===0?0:a[0]==="+"?s:-s)}function Hn(e,r){var n,t;return r._isUTC?(n=r.clone(),t=(re(e)||yr(e)?e.valueOf():x(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+t),m.updateOffset(n,!1),n):x(e).local()}function vn(e){return-Math.round(e._d.getTimezoneOffset())}m.updateOffset=function(){};function nl(e,r,n){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Wn(Kr,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&r&&(a=vn(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!r||this._changeInProgress?Zt(this,ne(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,m.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:vn(this)}function tl(e,r){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,r),this):-this.utcOffset()}function al(e){return this.utcOffset(0,e)}function sl(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(vn(this),"m")),this}function il(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Wn(qs,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function ll(e){return this.isValid()?(e=e?x(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function ol(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function ul(){if(!L(this._isDSTShifted))return this._isDSTShifted;var e={},r;return Rn(e,this),e=Wt(e),e._a?(r=e._isUTC?oe(e._a):x(e._a),this._isDSTShifted=this.isValid()&&el(e._a,r.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function dl(){return this.isValid()?!this._isUTC:!1}function ml(){return this.isValid()?this._isUTC:!1}function zt(){return this.isValid()?this._isUTC&&this._offset===0:!1}var gl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,fl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ne(e,r){var n=e,t=null,a,s,l;return Ar(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:be(e)||!isNaN(+e)?(n={},r?n[r]=+e:n.milliseconds=+e):(t=gl.exec(e))?(a=t[1]==="-"?-1:1,n={y:0,d:b(t[se])*a,h:b(t[B])*a,m:b(t[X])*a,s:b(t[he])*a,ms:b(yn(t[Ue]*1e3))*a}):(t=fl.exec(e))?(a=t[1]==="-"?-1:1,n={y:Ie(t[2],a),M:Ie(t[3],a),w:Ie(t[4],a),d:Ie(t[5],a),h:Ie(t[6],a),m:Ie(t[7],a),s:Ie(t[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(l=kl(x(n.from),x(n.to)),n={},n.ms=l.milliseconds,n.M=l.months),s=new Qr(n),Ar(e)&&_(e,"_locale")&&(s._locale=e._locale),Ar(e)&&_(e,"_isValid")&&(s._isValid=e._isValid),s}ne.fn=Qr.prototype;ne.invalid=Xi;function Ie(e,r){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*r}function nt(e,r){var n={};return n.months=r.month()-e.month()+(r.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(r)&&--n.months,n.milliseconds=+r-+e.clone().add(n.months,"M"),n}function kl(e,r){var n;return e.isValid()&&r.isValid()?(r=Hn(r,e),e.isBefore(r)?n=nt(e,r):(n=nt(r,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Kt(e,r){return function(n,t){var a,s;return t!==null&&!isNaN(+t)&&(St(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=t,t=s),a=ne(n,t),Zt(this,a,e),this}}function Zt(e,r,n,t){var a=r._milliseconds,s=yn(r._days),l=yn(r._months);e.isValid()&&(t=t??!0,l&&Ft(e,fr(e,"Month")+l*n),s&&Dt(e,"Date",fr(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),t&&m.updateOffset(e,s||l))}var cl=Kt(1,"add"),pl=Kt(-1,"subtract");function Jt(e){return typeof e=="string"||e instanceof String}function hl(e){return re(e)||yr(e)||Jt(e)||be(e)||vl(e)||yl(e)||e===null||e===void 0}function yl(e){var r=Ee(e)&&!Mn(e),n=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,l=t.length;for(a=0;a<l;a+=1)s=t[a],n=n||_(e,s);return r&&n}function vl(e){var r=ee(e),n=!1;return r&&(n=e.filter(function(t){return!be(t)&&Jt(e)}).length===0),r&&n}function bl(e){var r=Ee(e)&&!Mn(e),n=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],n=n||_(e,s);return r&&n}function Tl(e,r){var n=e.diff(r,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function _l(e,r){arguments.length===1&&(arguments[0]?hl(arguments[0])?(e=arguments[0],r=void 0):bl(arguments[0])&&(r=arguments[0],e=void 0):(e=void 0,r=void 0));var n=e||x(),t=Hn(n,this).startOf("day"),a=m.calendarFormat(this,t)||"sameElse",s=r&&(ue(r[a])?r[a].call(this,n):r[a]);return this.format(s||this.localeData().calendar(a,this,x(n)))}function wl(){return new vr(this)}function Sl(e,r){var n=re(e)?e:x(e);return this.isValid()&&n.isValid()?(r=Z(r)||"millisecond",r==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(r).valueOf()):!1}function ql(e,r){var n=re(e)?e:x(e);return this.isValid()&&n.isValid()?(r=Z(r)||"millisecond",r==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(r).valueOf()<n.valueOf()):!1}function jl(e,r,n,t){var a=re(e)?e:x(e),s=re(r)?r:x(r);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(t[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function Ml(e,r){var n=re(e)?e:x(e),t;return this.isValid()&&n.isValid()?(r=Z(r)||"millisecond",r==="millisecond"?this.valueOf()===n.valueOf():(t=n.valueOf(),this.clone().startOf(r).valueOf()<=t&&t<=this.clone().endOf(r).valueOf())):!1}function xl(e,r){return this.isSame(e,r)||this.isAfter(e,r)}function Rl(e,r){return this.isSame(e,r)||this.isBefore(e,r)}function Ol(e,r,n){var t,a,s;if(!this.isValid())return NaN;if(t=Hn(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,r=Z(r),r){case"year":s=Fr(this,t)/12;break;case"month":s=Fr(this,t);break;case"quarter":s=Fr(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return n?s:$(s)}function Fr(e,r){if(e.date()<r.date())return-Fr(r,e);var n=(r.year()-e.year())*12+(r.month()-e.month()),t=e.clone().add(n,"months"),a,s;return r-t<0?(a=e.clone().add(n-1,"months"),s=(r-t)/(t-a)):(a=e.clone().add(n+1,"months"),s=(r-t)/(a-t)),-(n+s)||0}m.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";m.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Dl(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Pl(e){if(!this.isValid())return null;var r=e!==!0,n=r?this.clone().utc():this;return n.year()<0||n.year()>9999?Pr(n,r?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ue(Date.prototype.toISOString)?r?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Pr(n,"Z")):Pr(n,r?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Al(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",r="",n,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",r="Z"),n="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=r+'[")]',this.format(n+t+a+s)}function Fl(e){e||(e=this.isUtc()?m.defaultFormatUtc:m.defaultFormat);var r=Pr(this,e);return this.localeData().postformat(r)}function Bl(e,r){return this.isValid()&&(re(e)&&e.isValid()||x(e).isValid())?ne({to:this,from:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Yl(e){return this.from(x(),e)}function Nl(e,r){return this.isValid()&&(re(e)&&e.isValid()||x(e).isValid())?ne({from:this,to:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Vl(e){return this.to(x(),e)}function Qt(e){var r;return e===void 0?this._locale._abbr:(r=Te(e),r!=null&&(this._locale=r),this)}var Xt=K("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ea(){return this._locale}var Er=1e3,Ze=60*Er,Gr=60*Ze,ra=(365*400+97)*24*Gr;function Je(e,r){return(e%r+r)%r}function na(e,r,n){return e<100&&e>=0?new Date(e+400,r,n)-ra:new Date(e,r,n).valueOf()}function ta(e,r,n){return e<100&&e>=0?Date.UTC(e+400,r,n)-ra:Date.UTC(e,r,n)}function Il(e){var r,n;if(e=Z(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?ta:na,e){case"year":r=n(this.year(),0,1);break;case"quarter":r=n(this.year(),this.month()-this.month()%3,1);break;case"month":r=n(this.year(),this.month(),1);break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=n(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=Je(r+(this._isUTC?0:this.utcOffset()*Ze),Gr);break;case"minute":r=this._d.valueOf(),r-=Je(r,Ze);break;case"second":r=this._d.valueOf(),r-=Je(r,Er);break}return this._d.setTime(r),m.updateOffset(this,!0),this}function Ul(e){var r,n;if(e=Z(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?ta:na,e){case"year":r=n(this.year()+1,0,1)-1;break;case"quarter":r=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=n(this.year(),this.month()+1,1)-1;break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=Gr-Je(r+(this._isUTC?0:this.utcOffset()*Ze),Gr)-1;break;case"minute":r=this._d.valueOf(),r+=Ze-Je(r,Ze)-1;break;case"second":r=this._d.valueOf(),r+=Er-Je(r,Er)-1;break}return this._d.setTime(r),m.updateOffset(this,!0),this}function El(){return this._d.valueOf()-(this._offset||0)*6e4}function Gl(){return Math.floor(this.valueOf()/1e3)}function Ll(){return new Date(this.valueOf())}function Wl(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Hl(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Cl(){return this.isValid()?this.toISOString():null}function $l(){return xn(this)}function zl(){return Me({},v(this))}function Kl(){return v(this).overflow}function Zl(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}p("N",0,0,"eraAbbr");p("NN",0,0,"eraAbbr");p("NNN",0,0,"eraAbbr");p("NNNN",0,0,"eraName");p("NNNNN",0,0,"eraNarrow");p("y",["y",1],"yo","eraYear");p("y",["yy",2],0,"eraYear");p("y",["yyy",3],0,"eraYear");p("y",["yyyy",4],0,"eraYear");f("N",Cn);f("NN",Cn);f("NNN",Cn);f("NNNN",lo);f("NNNNN",oo);q(["N","NN","NNN","NNNN","NNNNN"],function(e,r,n,t){var a=n._locale.erasParse(e,t,n._strict);a?v(n).era=a:v(n).invalidEra=e});f("y",er);f("yy",er);f("yyy",er);f("yyyy",er);f("yo",uo);q(["y","yy","yyy","yyyy"],U);q(["yo"],function(e,r,n,t){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?r[U]=n._locale.eraYearOrdinalParse(e,a):r[U]=parseInt(e,10)});function Jl(e,r){var n,t,a,s=this._eras||Te("en")._eras;for(n=0,t=s.length;n<t;++n){switch(typeof s[n].since){case"string":a=m(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=m(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function Ql(e,r,n){var t,a,s=this.eras(),l,o,u;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(l=s[t].name.toUpperCase(),o=s[t].abbr.toUpperCase(),u=s[t].narrow.toUpperCase(),n)switch(r){case"N":case"NN":case"NNN":if(o===e)return s[t];break;case"NNNN":if(l===e)return s[t];break;case"NNNNN":if(u===e)return s[t];break}else if([l,o,u].indexOf(e)>=0)return s[t]}function Xl(e,r){var n=e.since<=e.until?1:-1;return r===void 0?m(e.since).year():m(e.since).year()+(r-e.offset)*n}function eo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].name;return""}function ro(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].narrow;return""}function no(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].abbr;return""}function to(){var e,r,n,t,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(n=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-m(a[e].since).year())*n+a[e].offset;return this.year()}function ao(e){return _(this,"_erasNameRegex")||$n.call(this),e?this._erasNameRegex:this._erasRegex}function so(e){return _(this,"_erasAbbrRegex")||$n.call(this),e?this._erasAbbrRegex:this._erasRegex}function io(e){return _(this,"_erasNarrowRegex")||$n.call(this),e?this._erasNarrowRegex:this._erasRegex}function Cn(e,r){return r.erasAbbrRegex(e)}function lo(e,r){return r.erasNameRegex(e)}function oo(e,r){return r.erasNarrowRegex(e)}function uo(e,r){return r._eraYearOrdinalRegex||er}function $n(){var e=[],r=[],n=[],t=[],a,s,l,o,u,g=this.eras();for(a=0,s=g.length;a<s;++a)l=ye(g[a].name),o=ye(g[a].abbr),u=ye(g[a].narrow),r.push(l),e.push(o),n.push(u),t.push(l),t.push(o),t.push(u);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}p(0,["gg",2],0,function(){return this.weekYear()%100});p(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Xr(e,r){p(0,[e,e.length],0,r)}Xr("gggg","weekYear");Xr("ggggg","weekYear");Xr("GGGG","isoWeekYear");Xr("GGGGG","isoWeekYear");f("G",zr);f("g",zr);f("GG",R,C);f("gg",R,C);f("GGGG",Fn,An);f("gggg",Fn,An);f("GGGGG",$r,Hr);f("ggggg",$r,Hr);Tr(["gggg","ggggg","GGGG","GGGGG"],function(e,r,n,t){r[t.substr(0,2)]=b(e)});Tr(["gg","GG"],function(e,r,n,t){r[t]=m.parseTwoDigitYear(e)});function mo(e){return aa.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function go(e){return aa.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function fo(){return ve(this.year(),1,4)}function ko(){return ve(this.isoWeekYear(),1,4)}function co(){var e=this.localeData()._week;return ve(this.year(),e.dow,e.doy)}function po(){var e=this.localeData()._week;return ve(this.weekYear(),e.dow,e.doy)}function aa(e,r,n,t,a){var s;return e==null?cr(this,t,a).year:(s=ve(e,t,a),r>s&&(r=s),ho.call(this,e,r,n,t,a))}function ho(e,r,n,t,a){var s=Nt(e,r,n,t,a),l=kr(s.year,0,s.dayOfYear);return this.year(l.getUTCFullYear()),this.month(l.getUTCMonth()),this.date(l.getUTCDate()),this}p("Q",0,"Qo","quarter");f("Q",jt);q("Q",function(e,r){r[pe]=(b(e)-1)*3});function yo(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}p("D",["DD",2],"Do","date");f("D",R,rr);f("DD",R,C);f("Do",function(e,r){return e?r._dayOfMonthOrdinalParse||r._ordinalParse:r._dayOfMonthOrdinalParseLenient});q(["D","DD"],se);q("Do",function(e,r){r[se]=b(e.match(R)[0])});var sa=nr("Date",!0);p("DDD",["DDDD",3],"DDDo","dayOfYear");f("DDD",Cr);f("DDDD",Mt);q(["DDD","DDDD"],function(e,r,n){n._dayOfYear=b(e)});function vo(e){var r=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?r:this.add(e-r,"d")}p("m",["mm",2],0,"minute");f("m",R,Bn);f("mm",R,C);q(["m","mm"],X);var bo=nr("Minutes",!1);p("s",["ss",2],0,"second");f("s",R,Bn);f("ss",R,C);q(["s","ss"],he);var To=nr("Seconds",!1);p("S",0,0,function(){return~~(this.millisecond()/100)});p(0,["SS",2],0,function(){return~~(this.millisecond()/10)});p(0,["SSS",3],0,"millisecond");p(0,["SSSS",4],0,function(){return this.millisecond()*10});p(0,["SSSSS",5],0,function(){return this.millisecond()*100});p(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});p(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});p(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});p(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});f("S",Cr,jt);f("SS",Cr,C);f("SSS",Cr,Mt);var xe,ia;for(xe="SSSS";xe.length<=9;xe+="S")f(xe,er);function _o(e,r){r[Ue]=b(("0."+e)*1e3)}for(xe="S";xe.length<=9;xe+="S")q(xe,_o);ia=nr("Milliseconds",!1);p("z",0,0,"zoneAbbr");p("zz",0,0,"zoneName");function wo(){return this._isUTC?"UTC":""}function So(){return this._isUTC?"Coordinated Universal Time":""}var d=vr.prototype;d.add=cl;d.calendar=_l;d.clone=wl;d.diff=Ol;d.endOf=Ul;d.format=Fl;d.from=Bl;d.fromNow=Yl;d.to=Nl;d.toNow=Vl;d.get=As;d.invalidAt=Kl;d.isAfter=Sl;d.isBefore=ql;d.isBetween=jl;d.isSame=Ml;d.isSameOrAfter=xl;d.isSameOrBefore=Rl;d.isValid=$l;d.lang=Xt;d.locale=Qt;d.localeData=ea;d.max=$i;d.min=Ci;d.parsingFlags=zl;d.set=Fs;d.startOf=Il;d.subtract=pl;d.toArray=Wl;d.toObject=Hl;d.toDate=Ll;d.toISOString=Pl;d.inspect=Al;typeof Symbol<"u"&&Symbol.for!=null&&(d[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});d.toJSON=Cl;d.toString=Dl;d.unix=Gl;d.valueOf=El;d.creationData=Zl;d.eraName=eo;d.eraNarrow=ro;d.eraAbbr=no;d.eraYear=to;d.year=Ot;d.isLeapYear=Ps;d.weekYear=mo;d.isoWeekYear=go;d.quarter=d.quarters=yo;d.month=Bt;d.daysInMonth=Ls;d.week=d.weeks=Js;d.isoWeek=d.isoWeeks=Qs;d.weeksInYear=co;d.weeksInWeekYear=po;d.isoWeeksInYear=fo;d.isoWeeksInISOWeekYear=ko;d.date=sa;d.day=d.days=mi;d.weekday=gi;d.isoWeekday=fi;d.dayOfYear=vo;d.hour=d.hours=bi;d.minute=d.minutes=bo;d.second=d.seconds=To;d.millisecond=d.milliseconds=ia;d.utcOffset=nl;d.utc=al;d.local=sl;d.parseZone=il;d.hasAlignedHourOffset=ll;d.isDST=ol;d.isLocal=dl;d.isUtcOffset=ml;d.isUtc=zt;d.isUTC=zt;d.zoneAbbr=wo;d.zoneName=So;d.dates=K("dates accessor is deprecated. Use date instead.",sa);d.months=K("months accessor is deprecated. Use month instead",Bt);d.years=K("years accessor is deprecated. Use year instead",Ot);d.zone=K("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",tl);d.isDSTShifted=K("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",ul);function qo(e){return x(e*1e3)}function jo(){return x.apply(null,arguments).parseZone()}function la(e){return e}var w=On.prototype;w.calendar=ds;w.longDateFormat=ks;w.invalidDate=ps;w.ordinal=vs;w.preparse=la;w.postformat=la;w.relativeTime=Ts;w.pastFuture=_s;w.set=os;w.eras=Jl;w.erasParse=Ql;w.erasConvertYear=Xl;w.erasAbbrRegex=so;w.erasNameRegex=ao;w.erasNarrowRegex=io;w.months=Is;w.monthsShort=Us;w.monthsParse=Gs;w.monthsRegex=Hs;w.monthsShortRegex=Ws;w.week=$s;w.firstDayOfYear=Zs;w.firstDayOfWeek=Ks;w.weekdays=ii;w.weekdaysMin=oi;w.weekdaysShort=li;w.weekdaysParse=di;w.weekdaysRegex=ki;w.weekdaysShortRegex=ci;w.weekdaysMinRegex=pi;w.isPM=yi;w.meridiem=Ti;function Lr(e,r,n,t){var a=Te(),s=oe().set(t,r);return a[n](s,e)}function oa(e,r,n){if(be(e)&&(r=e,e=void 0),e=e||"",r!=null)return Lr(e,r,n,"month");var t,a=[];for(t=0;t<12;t++)a[t]=Lr(e,t,n,"month");return a}function zn(e,r,n,t){typeof e=="boolean"?(be(r)&&(n=r,r=void 0),r=r||""):(r=e,n=r,e=!1,be(r)&&(n=r,r=void 0),r=r||"");var a=Te(),s=e?a._week.dow:0,l,o=[];if(n!=null)return Lr(r,(n+s)%7,t,"day");for(l=0;l<7;l++)o[l]=Lr(r,(l+s)%7,t,"day");return o}function Mo(e,r){return oa(e,r,"months")}function xo(e,r){return oa(e,r,"monthsShort")}function Ro(e,r,n){return zn(e,r,n,"weekdays")}function Oo(e,r,n){return zn(e,r,n,"weekdaysShort")}function Do(e,r,n){return zn(e,r,n,"weekdaysMin")}Re("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var r=e%10,n=b(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th";return e+n}});m.lang=K("moment.lang is deprecated. Use moment.locale instead.",Re);m.langData=K("moment.langData is deprecated. Use moment.localeData instead.",Te);var ke=Math.abs;function Po(){var e=this._data;return this._milliseconds=ke(this._milliseconds),this._days=ke(this._days),this._months=ke(this._months),e.milliseconds=ke(e.milliseconds),e.seconds=ke(e.seconds),e.minutes=ke(e.minutes),e.hours=ke(e.hours),e.months=ke(e.months),e.years=ke(e.years),this}function ua(e,r,n,t){var a=ne(r,n);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function Ao(e,r){return ua(this,e,r,1)}function Fo(e,r){return ua(this,e,r,-1)}function tt(e){return e<0?Math.floor(e):Math.ceil(e)}function Bo(){var e=this._milliseconds,r=this._days,n=this._months,t=this._data,a,s,l,o,u;return e>=0&&r>=0&&n>=0||e<=0&&r<=0&&n<=0||(e+=tt(bn(n)+r)*864e5,r=0,n=0),t.milliseconds=e%1e3,a=$(e/1e3),t.seconds=a%60,s=$(a/60),t.minutes=s%60,l=$(s/60),t.hours=l%24,r+=$(l/24),u=$(da(r)),n+=u,r-=tt(bn(u)),o=$(n/12),n%=12,t.days=r,t.months=n,t.years=o,this}function da(e){return e*4800/146097}function bn(e){return e*146097/4800}function Yo(e){if(!this.isValid())return NaN;var r,n,t=this._milliseconds;if(e=Z(e),e==="month"||e==="quarter"||e==="year")switch(r=this._days+t/864e5,n=this._months+da(r),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(r=this._days+Math.round(bn(this._months)),e){case"week":return r/7+t/6048e5;case"day":return r+t/864e5;case"hour":return r*24+t/36e5;case"minute":return r*1440+t/6e4;case"second":return r*86400+t/1e3;case"millisecond":return Math.floor(r*864e5)+t;default:throw new Error("Unknown unit "+e)}}function _e(e){return function(){return this.as(e)}}var ma=_e("ms"),No=_e("s"),Vo=_e("m"),Io=_e("h"),Uo=_e("d"),Eo=_e("w"),Go=_e("M"),Lo=_e("Q"),Wo=_e("y"),Ho=ma;function Co(){return ne(this)}function $o(e){return e=Z(e),this.isValid()?this[e+"s"]():NaN}function Le(e){return function(){return this.isValid()?this._data[e]:NaN}}var zo=Le("milliseconds"),Ko=Le("seconds"),Zo=Le("minutes"),Jo=Le("hours"),Qo=Le("days"),Xo=Le("months"),eu=Le("years");function ru(){return $(this.days()/7)}var ce=Math.round,ze={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function nu(e,r,n,t,a){return a.relativeTime(r||1,!!n,e,t)}function tu(e,r,n,t){var a=ne(e).abs(),s=ce(a.as("s")),l=ce(a.as("m")),o=ce(a.as("h")),u=ce(a.as("d")),g=ce(a.as("M")),k=ce(a.as("w")),h=ce(a.as("y")),y=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||l<=1&&["m"]||l<n.m&&["mm",l]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(y=y||k<=1&&["w"]||k<n.w&&["ww",k]),y=y||g<=1&&["M"]||g<n.M&&["MM",g]||h<=1&&["y"]||["yy",h],y[2]=r,y[3]=+e>0,y[4]=t,nu.apply(null,y)}function au(e){return e===void 0?ce:typeof e=="function"?(ce=e,!0):!1}function su(e,r){return ze[e]===void 0?!1:r===void 0?ze[e]:(ze[e]=r,e==="s"&&(ze.ss=r-1),!0)}function iu(e,r){if(!this.isValid())return this.localeData().invalidDate();var n=!1,t=ze,a,s;return typeof e=="object"&&(r=e,e=!1),typeof e=="boolean"&&(n=e),typeof r=="object"&&(t=Object.assign({},ze,r),r.s!=null&&r.ss==null&&(t.ss=r.s-1)),a=this.localeData(),s=tu(this,!n,t,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var dn=Math.abs;function He(e){return(e>0)-(e<0)||+e}function en(){if(!this.isValid())return this.localeData().invalidDate();var e=dn(this._milliseconds)/1e3,r=dn(this._days),n=dn(this._months),t,a,s,l,o=this.asSeconds(),u,g,k,h;return o?(t=$(e/60),a=$(t/60),e%=60,t%=60,s=$(n/12),n%=12,l=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=o<0?"-":"",g=He(this._months)!==He(o)?"-":"",k=He(this._days)!==He(o)?"-":"",h=He(this._milliseconds)!==He(o)?"-":"",u+"P"+(s?g+s+"Y":"")+(n?g+n+"M":"")+(r?k+r+"D":"")+(a||t||e?"T":"")+(a?h+a+"H":"")+(t?h+t+"M":"")+(e?h+l+"S":"")):"P0D"}var T=Qr.prototype;T.isValid=Qi;T.abs=Po;T.add=Ao;T.subtract=Fo;T.as=Yo;T.asMilliseconds=ma;T.asSeconds=No;T.asMinutes=Vo;T.asHours=Io;T.asDays=Uo;T.asWeeks=Eo;T.asMonths=Go;T.asQuarters=Lo;T.asYears=Wo;T.valueOf=Ho;T._bubble=Bo;T.clone=Co;T.get=$o;T.milliseconds=zo;T.seconds=Ko;T.minutes=Zo;T.hours=Jo;T.days=Qo;T.weeks=ru;T.months=Xo;T.years=eu;T.humanize=iu;T.toISOString=en;T.toString=en;T.toJSON=en;T.locale=Qt;T.localeData=ea;T.toIsoString=K("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",en);T.lang=Xt;p("X",0,0,"unix");p("x",0,0,"valueOf");f("x",zr);f("X",js);q("X",function(e,r,n){n._d=new Date(parseFloat(e)*1e3)});q("x",function(e,r,n){n._d=new Date(b(e))});//! moment.js
m.version="2.30.1";is(x);m.fn=d;m.min=zi;m.max=Ki;m.now=Zi;m.utc=oe;m.unix=qo;m.months=Mo;m.isDate=yr;m.locale=Re;m.invalid=Wr;m.duration=ne;m.isMoment=re;m.weekdays=Ro;m.parseZone=jo;m.localeData=Te;m.isDuration=Ar;m.monthsShort=xo;m.weekdaysMin=Do;m.defineLocale=Un;m.updateLocale=qi;m.locales=ji;m.weekdaysShort=Oo;m.normalizeUnits=Z;m.relativeTimeRounding=au;m.relativeTimeThreshold=su;m.calendarFormat=Tl;m.prototype=d;m.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var Q=(e=>(e.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",e.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",e.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",e.GOD_TRO="GOD_TRO",e))(Q||{}),Kn=(e=>(e.VURDER_TILBAKEKREVING="5002",e))(Kn||{});const lu="_button_8q57x_1",ou="_cancelButton_8q57x_5",at={button:lu,cancelButton:ou},uu=(e,r)=>n=>n&&(Ca(n)(N(e.tom.toString()).subtract(1,"day"))||$a(n)(e.fom))?r.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,du=(e,r)=>{const n=N(e.forstePeriodeTomDato).add(1,"days"),t={fom:r.fom,tom:e.forstePeriodeTomDato},a={fom:n.format(Oa),tom:r.tom};return{forstePeriode:t,andrePeriode:a}},ga=({periodeData:e,showModal:r,cancelEvent:n,finnesBelopMed0Verdi:t,splitPeriod:a})=>{const s=Pe(),l=mt();return i.jsx(gt,{formMethods:l,onSubmit:o=>a(du(o,e)),children:i.jsxs(Sr,{open:r,"aria-label":s.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[i.jsx(Sr.Header,{children:i.jsx(Br,{size:"small",children:i.jsx(c,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),i.jsx(Sr.Body,{children:i.jsxs(I,{gap:"4",children:[i.jsxs("div",{children:[i.jsx(Oe,{size:"small",children:i.jsx(c,{id:"DelOppPeriodeModalImpl.Periode"})}),i.jsx(H,{size:"small",children:`${N(e.fom.toString()).format(Qe)} - ${N(e.tom.toString()).format(Qe)}`})]}),i.jsx(Ra,{name:"forstePeriodeTomDato",control:l.control,label:i.jsx(c,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[V,Ha,uu(e,s)],fromDate:N(e.fom).toDate(),toDate:N(e.tom).toDate()}),t&&i.jsx(ft,{variant:"error",children:i.jsx(c,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),i.jsxs(Sr.Footer,{children:[i.jsx(z,{size:"small",variant:"primary",className:at.button,disabled:!l.formState.isDirty,children:i.jsx(c,{id:"DelOppPeriodeModalImpl.Ok"})}),i.jsx(z,{size:"small",variant:"secondary",onClick:n,className:at.cancelButton,type:"button",children:i.jsx(c,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};ga.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const mu="_margin_wnej3_37",mn={margin:mu},gu=!1,fa=({setNestePeriode:e,setForrigePeriode:r,readOnly:n,lukkPeriode:t,periode:a,beregnBelop:s,behandlingUuid:l,oppdaterSplittedePerioder:o})=>{const u=Pe(),[g,k]=W.useState(!1),[h,y]=W.useState(!1),O=S=>{k(!0),S.preventDefault()},G=()=>{k(!1)},we=S=>{y(!1);const te={belop:a.feilutbetaling,fom:S.forstePeriode.fom,tom:S.forstePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "},F={belop:a.feilutbetaling,fom:S.andrePeriode.fom,tom:S.andrePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "};s({behandlingUuid:l,perioder:[te,F]}).then(M=>{const{perioder:Se}=M;if(Se.some(Ae=>Ae.belop===0))y(!0);else{const Ae={fom:te.fom,tom:te.tom,feilutbetaling:Se[0].belop},Fe={fom:F.fom,tom:F.tom,feilutbetaling:Se[1].belop};G(),o([Ae,Fe])}})};return i.jsxs(ie,{children:[i.jsxs(Oe,{size:"small",children:[i.jsx(c,{id:"PeriodeController.Detaljer"}),gu]}),!n&&i.jsxs(i.Fragment,{children:[i.jsx(Jn,{}),i.jsx(z,{className:mn.margin,size:"xsmall",icon:i.jsx(ns,{"aria-hidden":!0}),onClick:O,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:i.jsx(c,{id:"PeriodeController.DelOppPerioden"})})]}),g&&i.jsx(ga,{cancelEvent:G,showModal:g,periodeData:a,splitPeriod:we,finnesBelopMed0Verdi:h}),i.jsx(Jn,{}),i.jsx(z,{className:mn.margin,size:"xsmall",icon:i.jsx(kt,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.prevPeriod"}),children:i.jsx(c,{id:"PeriodeController.prevPeriodShort"})}),i.jsx(z,{className:mn.margin,size:"xsmall",icon:i.jsx(ct,{"aria-hidden":!0}),onClick:e,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:i.jsx(c,{id:"PeriodeController.nextPeriodShort"})}),i.jsx(z,{size:"xsmall",icon:i.jsx(Da,{"aria-hidden":!0}),onClick:t,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};fa.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const fu="_infoSummary_14r2l_1",ku="_positivNumber_14r2l_8",cu="_redNumber_14r2l_12",pu="_resultName_14r2l_17",ur={infoSummary:fu,positivNumber:ku,redNumber:cu,resultName:pu},ka=({fom:e,tom:r,feilutbetaling:n,arsakHendelseNavn:t})=>{const a=Pa(e,r);return i.jsxs(I,{gap:"2",className:ur.infoSummary,children:[i.jsxs(ie,{justify:"space-between",children:[i.jsx(Oe,{size:"small",children:`${N(e).format(Qe)} - ${N(r).format(Qe)}`}),i.jsx(H,{size:"small",children:a.formattedString})]}),i.jsxs(ie,{gap:"4",children:[i.jsxs(H,{size:"small",className:ur.resultName,children:[i.jsx(c,{id:"PeriodeInformasjon.Feilutbetaling"}),":",i.jsx("span",{className:n?ur.redNumber:ur.positivNumber,children:Xe(n)})]}),t&&i.jsx(H,{size:"small",className:ur.resultName,children:t})]})]})};ka.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var E=(e=>(e.FORSETT="FORSETT",e.GROVT_UAKTSOM="GROVT_UAKTSOM",e.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",e))(E||{});const hu=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var ca=(e=>(e.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",e.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",e.STOERRELSE_BELOEP="STOERRELSE_BELOEP",e.TID_FRA_UTBETALING="TID_FRA_UTBETALING",e.ANNET="ANNET",e))(ca||{});const pa=({name:e,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const t=Sn(),a=`${e}.skalDetTilleggesRenter`;return W.useEffect(()=>{t.getValues(a)===void 0&&t.setValue(a,!1)},[]),i.jsx("div",{children:i.jsxs(Ge,{alignOffset:n?320:360,children:[n&&i.jsxs(I,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(c,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx(H,{size:"small",children:"100 %"}),i.jsx(De,{name:`${e}.skalDetTilleggesRenter`,control:t.control,label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[V],radios:[{label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:r,parse:s=>s==="true",isHorizontal:!0})]}),!n&&i.jsxs(I,{gap:"2",children:[i.jsxs("div",{children:[i.jsx(Yr,{children:i.jsx(c,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx(H,{size:"small",children:"100 %"})]}),i.jsx(H,{size:"small",children:i.jsx(c,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})};pa.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const hr="Egendefinert",Tn=["30","50","70",hr],yu="_suffix_cawxu_1",vu="_suffixGrovText_cawxu_4",bu="_labelPadding_cawxu_8",Tu="_inputFelt_cawxu_12",Ce={suffix:yu,suffixGrovText:vu,labelPadding:bu,inputFelt:Tu},st=yt(0),_u=za(99.99),wu=e=>{const r=e.toString().replace(/\s/g,""),n=parseInt(r,10);return Number.isNaN(n)?"":n},Su=(e,r)=>n=>{if((typeof n=="string"?Number(n):n)>=r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},ha=({name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,harMerEnnEnYtelse:a,feilutbetalingBelop:s,andelSomTilbakekreves:l})=>{const o=Pe(),u=Sn(),g=`${e}.skalDetTilleggesRenter`;return W.useEffect(()=>{u.getValues(g)===void 0&&u.setValue(g,!1)},[]),i.jsxs(I,{gap:"4",children:[i.jsx(De,{name:`${e}.harGrunnerTilReduksjon`,control:u.control,label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[V],radios:[{label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0}),r&&i.jsx(Ge,{alignOffset:24,children:i.jsxs(ie,{gap:"4",children:[!a&&l!==hr&&i.jsxs(i.Fragment,{children:[i.jsx(Oe,{size:"small",children:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(ie,{gap:"2",children:[i.jsx(pt,{name:`${e}.andelSomTilbakekreves`,control:u.control,label:"",validate:[V],selectValues:Tn.map(k=>i.jsx("option",{value:k,children:k},k))}),i.jsx("div",{className:Ce.suffix,children:"%"})]})]}),!a&&l===hr&&i.jsxs(i.Fragment,{children:[i.jsx(Oe,{size:"small",children:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(ie,{gap:"4",children:[i.jsx(gn,{name:`${e}.andelSomTilbakekrevesManuell`,control:u.control,className:Ce.inputFelt,readOnly:n,validate:[V,st,_u],normalizeOnBlur:k=>Number.isNaN(k)?k:parseFloat(k.toString()).toFixed(2),format:k=>k.toString().replace(".",","),parse:k=>k.toString().replace(",",".")}),i.jsx("div",{className:t===E.GROVT_UAKTSOM?Ce.suffixGrovText:Ce.suffix,children:"%"})]})]}),a&&i.jsx(gn,{name:`${e}.belopSomSkalTilbakekreves`,control:u.control,label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[V,st,Su(o,s)],readOnly:n,format:Xe,parse:wu}),t===E.GROVT_UAKTSOM&&i.jsxs("div",{children:[i.jsx(Yr,{children:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),i.jsx(H,{size:"small",className:Ce.labelPadding,children:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),r===!1&&i.jsxs(Ge,{alignOffset:90,children:[i.jsx(Yr,{children:i.jsx(c,{id:a?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),i.jsxs(I,{gap:"4",children:[i.jsx(H,{size:"small",className:Ce.labelPadding,children:a?Xe(s):"100%"}),t===E.GROVT_UAKTSOM&&i.jsx(De,{name:g,control:u.control,label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[V],radios:[{label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})]})};ha.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const qu=qn(3),ju=jn(1500),_n=({name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:u})=>{const g=Pe(),{watch:k,control:h}=Sn(),y=!s.some(G=>!!k(`${e}.${G.kode}`)),O=Aa(e,y?g.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return i.jsxs(I,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(c,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),i.jsx("div",{children:s.map(G=>i.jsx(Fa,{name:`${e}.${G.kode}`,control:h,label:G.navn,readOnly:n},G.kode))}),a&&i.jsx(gr,{name:`${e}.annetBegrunnelse`,control:h,label:"",validate:[V,qu,ju,Vr],maxLength:1500,readOnly:n}),O&&i.jsx(Ba,{children:O}),i.jsx(ha,{name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:u})]})};_n.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Mu="_explanationTextarea_1kabz_1",xu="_panelWidth_1kabz_5",ya={explanationTextarea:Mu,panelWidth:xu},Ru=qn(3),Ou=jn(1500),it=(e,r,n)=>i.jsxs(I,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(c,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),i.jsx(gr,{name:`${e}.sarligGrunnerBegrunnelse`,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[V,Ru,Ou,Vr],maxLength:1500,readOnly:r,className:ya.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]}),va=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:u,erValgtResultatTypeForstoBurdeForstaatt:g,name:k})=>{const h=Pe(),y=g?180:200;return i.jsx(Ge,{alignOffset:n===E.GROVT_UAKTSOM?y:20,children:i.jsxs("div",{className:ya.panelWidth,children:[n===E.SIMPEL_UAKTSOM&&o&&i.jsx(De,{name:`${k}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:i.jsx(c,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[V],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:r,radios:[{label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:i.jsxs("div",{style:{marginTop:"10px"},children:[it(k,r,h),i.jsx(_n,{name:k,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:n,andelSomTilbakekreves:u})]})},{label:i.jsx(c,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:i.jsx("div",{style:{marginTop:"10px"},children:i.jsx(Ge,{alignOffset:55,children:i.jsx(c,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})})}]}),(n!==E.SIMPEL_UAKTSOM||!o)&&i.jsxs(i.Fragment,{children:[it(k,r,h),i.jsx(_n,{name:k,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:n,andelSomTilbakekreves:u})]})]})})};va.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const ba=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,erValgtResultatTypeForstoBurdeForstaatt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:g,name:k})=>i.jsxs(i.Fragment,{children:[n===E.FORSETT&&i.jsx(pa,{name:k,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:a}),n!==E.FORSETT&&i.jsx(va,{name:k,harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:a})]});ba.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Du=[E.GROVT_UAKTSOM,E.SIMPEL_UAKTSOM,E.FORSETT],Pu={[E.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[E.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[E.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},tr=({readOnly:e,resetFields:r,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:t,erSerligGrunnAnnetValgt:a=!1,erValgtResultatTypeForstoBurdeForstaatt:s=!1,aktsomhetTyper:l,sarligGrunnTyper:o,antallYtelser:u,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:k,andelSomTilbakekreves:h,name:y})=>i.jsxs(i.Fragment,{children:[i.jsx(De,{name:`${y}.handletUaktsomhetGrad`,label:i.jsx(c,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[V],radios:l.map(O=>({label:s?i.jsx(c,{id:Pu[O.kode]}):O.navn,value:O.kode})),isReadOnly:e,onChange:r,isHorizontal:!0}),Du.some(O=>O===n)&&i.jsx(ba,{name:`${y}.${n}`,harGrunnerTilReduksjon:t,readOnly:e,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:o,harMerEnnEnYtelse:u>1,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:k,andelSomTilbakekreves:h})]}),Au=(e,r)=>{const n=parseInt(e,10);return!r||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Fu=(e,r)=>{const n=parseFloat(e);return!r||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Bu=(e,r)=>{if(e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=r.reduce((s,l)=>e[l.kode]?s.concat(l.kode):s,[]),{harGrunnerTilReduksjon:t}=e,a=e.andelSomTilbakekreves===hr?Fu(e.andelSomTilbakekrevesManuell,t):Au(e.andelSomTilbakekreves,t);return{harGrunnerTilReduksjon:t,ileggRenter:t?void 0:e.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:e.harGrunnerTilReduksjon?ht(e.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:e.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...a}};tr.transformValues=(e,r,n)=>{const t=e[e.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:e.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:t?Bu(t,r):null}};const Yu=(e,r)=>({andelSomTilbakekreves:r===void 0||Tn.includes(r)?r:hr,andelSomTilbakekrevesManuell:r&&Tn.includes(r)?void 0:e.andelTilbakekreves,harGrunnerTilReduksjon:e.harGrunnerTilReduksjon,skalDetTilleggesRenter:e.ileggRenter,belopSomSkalTilbakekreves:e.tilbakekrevesBelop,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:Dr(e.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...e.sarligGrunner?e.sarligGrunner.reduce((n,t)=>({...n,[t.kode??t]:!0}),{}):{}});tr.buildInitalValues=e=>{const{aktsomhet:r,aktsomhetInfo:n}=e,t=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,a=n?{[r.kode&&"kode"in r?r.kode:r]:Yu(n,t)}:{};return{handletUaktsomhetGrad:r&&r.kode&&"kode"in r?r.kode:r,...a}};tr.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Ta=()=>i.jsxs(ie,{gap:"4",children:[i.jsx(gr,{name:"foreldetBegrunnelse",label:i.jsx(c,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),i.jsx(De,{name:"periodenErForeldet",label:i.jsx(Yr,{children:i.jsx(c,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:i.jsx(c,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]});Ta.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const Nu="_arrowbox_ych2z_1",Vu="_tilbakekrevdBelopInput_ych2z_4",lt={arrowbox:Nu,tilbakekrevdBelopInput:Vu},Iu=yt(1),Uu=e=>{const r=e.toString().replace(/\s/g,""),n=parseInt(r,10);return Number.isNaN(n)?"":n},Eu=(e,r)=>n=>{if((typeof n=="string"?Number(n):n)>r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ar=({name:e,readOnly:r,erBelopetIBehold:n,feilutbetalingBelop:t})=>{const a=Pe();return i.jsxs(I,{gap:"2",children:[i.jsx(De,{name:`${e}.erBelopetIBehold`,label:i.jsx(c,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[V],radios:[{label:i.jsx(c,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:i.jsx(c,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0}),i.jsxs("div",{className:lt.arrowbox,children:[n===!0&&i.jsx(Ge,{alignOffset:25,children:i.jsx(gn,{name:`${e}.tilbakekrevdBelop`,label:i.jsx(c,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[V,Iu,Eu(a,t)],readOnly:r,className:lt.tilbakekrevdBelopInput,format:Xe,parse:Uu})}),n===!1&&i.jsx(Ge,{alignOffset:90,children:i.jsx(H,{size:"small",children:i.jsx(c,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ar.transformValues=(e,r)=>({"@type":"godTro",begrunnelse:r,erBelopetIBehold:e.erBelopetIBehold,tilbakekrevesBelop:e.erBelopetIBehold?ht(e.tilbakekrevdBelop):void 0});ar.buildIntialValues=e=>({erBelopetIBehold:e.erBelopetIBehold,tilbakekrevdBelop:e.tilbakekrevesBelop});ar.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Gu="_feilutbetalingTable_1fsd2_1",Lu={feilutbetalingTable:Gu},_a=({ytelser:e})=>{if(e.length===0)return null;let r=0;return i.jsxs(fe,{className:Lu.feilutbetalingTable,children:[i.jsx(fe.Header,{children:i.jsxs(fe.Row,{children:[i.jsx(fe.HeaderCell,{scope:"col",children:i.jsx(c,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),i.jsx(fe.HeaderCell,{scope:"col",children:i.jsx(c,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),i.jsx(fe.Body,{children:e.map(n=>(r+=1,i.jsxs(fe.Row,{children:[i.jsx(fe.DataCell,{children:i.jsx(H,{size:"small",children:n.aktivitet})}),i.jsx(fe.DataCell,{children:i.jsx(H,{size:"small",children:Xe(n.belop)})})]},n.aktivitet+n.belop+r)))})]})};_a.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Wu="_explanationTextarea_1udkt_1",Hu="_leftColumn_1udkt_5",Cu="_rightColumn_1udkt_9",$u="_selectWidth_1udkt_12",Mr={explanationTextarea:Wu,leftColumn:Hu,rightColumn:Cu,selectWidth:$u},ot=qn(3),ut=jn(1500),wa=({data:e,periode:r,skjulPeriode:n,readOnly:t,oppdaterPeriode:a,vilkarsVurdertePerioder:s,kodeverkSamlingFpTilbake:l,antallPerioderMedAksjonspunkt:o})=>{const u=Pe(),[g,k]=W.useState(!1),h=mt({defaultValues:r}),y=h.watch("valgtVilkarResultatType"),O=h.watch(`${y}.handletUaktsomhetGrad`),G=h.watch(`${y}.${O}.harGrunnerTilReduksjon`),we=h.watch(`${y}.${O}.andelSomTilbakekreves`),S=h.watch(`${y}.${O}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),te=h.watch(`${y}.${O}.${ca.ANNET}`),F=h.watch(`${y}.erBelopetIBehold`),de=Zn(y),M=Zn(O),Se=e.redusertBeloper,_r=l.SærligGrunn,Ae=l.VilkårResultat,Fe=hu.map(j=>l.Aktsomhet.find(ae=>ae.kode===j)),rn=(j,ae)=>{const J=j.target.value.split("_"),qe=ae.find(me=>me.fom===J[0]&&me.tom===J[1]),je=qe?.valgtVilkarResultatType,We=qe&&je?qe[je]:void 0,Ye=JSON.parse(JSON.stringify(We));if(je!==Q.GOD_TRO){const{handletUaktsomhetGrad:me}=Ye;me!==E.FORSETT&&r?.harMerEnnEnYtelse!==qe?.harMerEnnEnYtelse&&(Ye[me].andelSomTilbakekreves=null,Ye[me].andelSomTilbakekrevesManuell=null,Ye[me].belopSomSkalTilbakekreves=null)}h.setValue("valgtVilkarResultatType",je,{shouldDirty:!0}),h.setValue("begrunnelse",qe?.begrunnelse,{shouldDirty:!0}),h.setValue("vurderingBegrunnelse",qe?.vurderingBegrunnelse,{shouldDirty:!0}),je&&h.setValue(je,Ye,{shouldDirty:!0}),j.preventDefault()},sr=()=>{k(!g),a(h.getValues())},nn=j=>{o>1&&e.erTotalBelopUnder4Rettsgebyr&&S===!1?k(!g):a(j)},tn=()=>{de&&h.resetField(de)},an=()=>{M&&h.resetField(`${y}.${M}`)},Be=s.filter(j=>!j.erForeldet&&j.valgtVilkarResultatType!=null);return i.jsx(gt,{formMethods:h,onSubmit:nn,children:i.jsxs(I,{gap:"4",children:[i.jsx(I,{gap:"2",children:Se&&Se.map(j=>i.jsx(H,{size:"small",children:i.jsx(c,{id:j.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:Xe(j.belop),b:Ya}})},j.belop))}),i.jsx(_a,{ytelser:e.ytelser}),!t&&!e.erForeldet&&Be.length>0&&i.jsx(pt,{name:"perioderForKopi",control:h.control,selectValues:Be.map(j=>{const ae=`${j.fom}_${j.tom}`,J=`${N(j.fom).format(Qe)} - ${N(j.tom).format(Qe)}`;return i.jsx("option",{value:ae,children:J},ae)}),onChange:j=>rn(j,Be),className:Mr.selectWidth,label:i.jsx(c,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),i.jsxs(ie,{gap:"4",wrap:!0,children:[i.jsxs("div",{className:Mr.leftColumn,children:[e.erForeldet&&i.jsx(Ta,{}),!e.erForeldet&&i.jsxs(I,{gap:"2",children:[i.jsx(Br,{size:"small",children:i.jsx(c,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),i.jsx(gr,{name:"begrunnelse",control:h.control,label:u.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[V,ot,ut,Vr],maxLength:1500,readOnly:t,className:Mr.explanationTextarea,description:u.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),i.jsx(De,{name:"valgtVilkarResultatType",control:h.control,label:i.jsx(c,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[V],radios:Ae.map(j=>({label:j.navn,value:j.kode})),isReadOnly:t,onChange:tn})]})]}),i.jsx("div",{className:Mr.rightColumn,children:y&&i.jsxs(I,{gap:"2",children:[i.jsx(Br,{size:"small",children:i.jsx(c,{id:y===Q.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),i.jsx(gr,{name:"vurderingBegrunnelse",control:h.control,label:u.formatMessage({id:y===Q.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[V,ot,ut,Vr],maxLength:1500,readOnly:t}),y===Q.GOD_TRO&&i.jsx(ar,{name:y,readOnly:t,erBelopetIBehold:F,feilutbetalingBelop:e.feilutbetaling}),y!==Q.GOD_TRO&&i.jsx(tr,{name:y,harGrunnerTilReduksjon:G,readOnly:t,handletUaktsomhetGrad:O,resetFields:an,erSerligGrunnAnnetValgt:te,erValgtResultatTypeForstoBurdeForstaatt:y===Q.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:Fe,sarligGrunnTyper:_r,antallYtelser:e.ytelser.length,feilutbetalingBelop:e.feilutbetaling,erTotalBelopUnder4Rettsgebyr:e.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:we},y)]})})]}),i.jsxs(ie,{gap:"4",children:[i.jsx(z,{size:"small",variant:"primary",disabled:!h.formState.isDirty||t,children:i.jsx(c,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),i.jsx(z,{size:"small",variant:"secondary",onClick:n,type:"button",children:i.jsx(c,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),g&&i.jsx(ts,{showModal:!0,submit:sr})]})})};wa.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const zu="_margin_1wl4t_1",xr={margin:zu},Ku={danger:i.jsx(rs,{}),success:i.jsx(es,{}),warning:i.jsx(Xa,{})},Zu=(e,r)=>e.fom<r.fom?-1:e.fom>r.fom?1:0,Ju=e=>{const r=e.isGodkjent?"success":"danger";return e.isAksjonspunktOpen?"warning":r},Qu=(e=[])=>[...e].sort(Zu).map(r=>({...r,status:Ju(r)})),Xu=e=>e===dr.MOR||e===dr.MEDMOR?i.jsx(as,{width:20,height:20,color:"var(--a-red-200)"}):e===dr.FAR?i.jsx(ss,{width:20,height:20,color:"var(--a-blue-600)"}):i.jsx(Qa,{width:20,height:20}),Sa=({perioder:e,valgtPeriode:r,setPeriode:n,relasjonsRolleType:t,relasjonsRolleTypeKodeverk:a})=>{const s=Pe(),l=Qu(e),o=F=>{const de=e.find(M=>M.id===F);de&&n(de)},u=N(l[0].fom),g=N(l[l.length-1].tom),[k,h]=W.useState(u),[y,O]=W.useState(g),G=()=>{k.subtract(1,"month").isBefore(u)||(h(k.subtract(1,"month")),O(y.subtract(1,"month")))},we=()=>{y.add(1,"month").isAfter(g)||(h(k.add(1,"month")),O(y.add(1,"month")))},S=()=>{k.add(3,"month").isAfter(y)||(h(k.add(1,"month")),O(y.subtract(1,"month")))},te=()=>{y.add(1,"month").diff(k.subtract(1,"month"),"months")<36&&(h(k.subtract(1,"month")),O(y.add(1,"month")))};return i.jsxs(I,{gap:"4",children:[i.jsx(sn,{startDate:N(k).toDate(),endDate:N(y).add(1,"days").toDate(),children:i.jsx(sn.Row,{label:a.find(F=>F.kode===t)?.navn||"-",icon:Xu(t),children:l.map(F=>i.jsx(sn.Period,{start:N(F.fom).toDate(),end:N(F.tom).toDate(),status:F.status,icon:Ku[F.status],onSelectPeriod:()=>o(F.id),isActive:r?.id===F.id,"aria-controls":"panel-tilbakekreving",id:F.id.toString()},F.id))})}),i.jsxs(ie,{justify:"end",children:[i.jsx(z,{className:xr.margin,size:"small",icon:i.jsx(Za,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),i.jsx(z,{className:xr.margin,size:"small",icon:i.jsx(Ja,{"aria-hidden":!0}),onClick:te,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),i.jsx(z,{className:xr.margin,size:"small",icon:i.jsx(kt,{"aria-hidden":!0}),onClick:G,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),i.jsx(z,{className:xr.margin,size:"small",icon:i.jsx(ct,{"aria-hidden":!0}),onClick:we,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};Sa.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const wn=(e,r)=>m(e.fom).diff(m(r.fom)),dt=e=>!e.erForeldet&&(e.begrunnelse===void 0||e.erSplittet),ed=e=>{const r=e[e.valgtVilkarResultatType],n=r[r.handletUaktsomhetGrad];return r.tilbakekrevdBelop?{...e,[e.valgtVilkarResultatType]:{...Nr(r,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...e,[e.valgtVilkarResultatType]:{...r,[r.handletUaktsomhetGrad]:{...Nr(n,"belopSomSkalTilbakekreves")}}}:e},rd=(e,r=[])=>r.map((n,t)=>{const a=e.find(o=>o.fom===n.fom&&o.tom===n.tom),s=a&&a[a.valgtVilkarResultatType]?a[a.valgtVilkarResultatType].erBelopetIBehold:void 0,l=a?!!a.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&(a?.begrunnelse===void 0||l),isGodkjent:!(n.erForeldet||s===!1),id:t}}),qa=(e,r)=>r.find(n=>!m(e.fom).isBefore(m(n.fom))&&!m(e.tom).isAfter(m(n.tom))),nd=(e,r)=>r.every(n=>!(m(e.fom).isSameOrBefore(m(n.tom))&&m(n.fom).isSameOrBefore(m(e.tom)))),td=(e,r,n)=>{const a=e.reduce((u,g)=>u+g.feilutbetaling,0)<n*4,l=r.vilkarsVurdertePerioder.map(u=>{const g=qa(u,e);return{...g,harMerEnnEnYtelse:g&&g.ytelser.length>1,...Nr(u,"feilutbetalingBelop"),feilutbetaling:u.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:a}});return{perioder:e.filter(u=>nd(u,l)).map(u=>({...u,harMerEnnEnYtelse:u.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:a})).concat(l)}},ad=(e,r)=>{if(!(!e||!r))return r.map(n=>{const t=qa(n,e.perioder),a=t.foreldelseVurderingType?t.foreldelseVurderingType===fn.FORELDET:t.foreldet;return{redusertBeloper:t.redusertBeloper,ytelser:t.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:t.feilutbetaling,erTotalBelopUnder4Rettsgebyr:t.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:t.årsak,begrunnelse:t.begrunnelse,erForeldet:a||!1}})},sd=(e,r)=>{const{vilkarResultat:n,begrunnelse:t,vilkarResultatInfo:a}=e,s=n?.kode??n;let l;const o=e.erForeldet??e.foreldet;if(o){const h=r.perioder.find(y=>y.fom===e.fom&&y.tom===e.tom);l={erForeldet:o,periodenErForeldet:!0,foreldetBegrunnelse:h?Dr(h.begrunnelse):void 0}}else l={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const u={valgtVilkarResultatType:s,begrunnelse:Dr(t),harMerEnnEnYtelse:e.ytelser.length>1,...l},g=s===Q.GOD_TRO?ar.buildIntialValues(a):{},k=s!==void 0&&s!==Q.GOD_TRO?tr.buildInitalValues(a):{};return{...u,vurderingBegrunnelse:a?Dr(a.begrunnelse):void 0,[u.valgtVilkarResultatType]:{...g,...k}}},id=(e,r)=>{const{valgtVilkarResultatType:n,begrunnelse:t,vurderingBegrunnelse:a}=e,s=e[n],l=n===Q.GOD_TRO?ar.transformValues(s,a):{},o=n!==Q.GOD_TRO?tr.transformValues(s,r,a):{};return{begrunnelse:t,fom:e.fom,tom:e.tom,vilkarResultat:n,vilkarResultatInfo:{...l,...o}}},ld=(e,r)=>e.perioder.map(n=>({...sd(n,r),fom:n.fom,tom:n.tom})).sort(wn),od=(e,r)=>({kode:Kn.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:e.filter(n=>!n.erForeldet).map(n=>id(n,r))}),ud=e=>{if(!e||e.reduce((t,a)=>a.erForeldet?t:t+1,0)<2)return;const n=e.reduce((t,a)=>{const{valgtVilkarResultatType:s}=a,l=a[s],{handletUaktsomhetGrad:o}=l,u=l[o];return u&&u.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?t+1:t},0);if(n>0&&n!==e.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},ja=({perioderForeldelse:e,kodeverkSamlingFpTilbake:r,vilkarvurderingsperioder:n,submitCallback:t,isReadOnly:a,alleMerknaderFraBeslutter:s,vilkarvurdering:l,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:u,beregnBelop:g,behandling:k,formData:h,setFormData:y})=>{const O=n.perioder,G=n.rettsgebyr,we=td(O,l,G),[S,te]=W.useState(h||ld(we,e)),[F,de]=W.useState(!!h),[M,Se]=W.useState(S?.find(dt)),[_r,Ae]=W.useState(!1),[Fe,rn]=W.useState();W.useEffect(()=>{rn(ud(S))},[S]);const sr=ad(we,S),nn=S.reduce((D,Y)=>Y.erForeldet?D:D+1,0),tn=s[Kn.VURDER_TILBAKEKREVING],an=()=>{Ae(!0),t(od(S,r.SærligGrunn))},Be=rd(S,sr),j=Be.some(D=>D.isAksjonspunktOpen),ae=M?Be.find(D=>D.fom===M.fom&&D.tom===M.tom):void 0,J=D=>{const Y=D?S.find(ge=>ge.fom===D.fom&&ge.tom===D.tom):void 0;Se(Y)},qe=()=>{const D=S.findIndex(Y=>Y.fom===M?.fom&&Y.tom===M?.tom);J(S[D+1])},je=()=>{const D=S.findIndex(Y=>Y.fom===M?.fom&&Y.tom===M?.tom);J(S[D-1])},We=()=>{J(void 0)},Ye=D=>{const Y=Nr(D,"erSplittet"),wr=S.filter(Ve=>Ve.fom!==Y.fom&&Ve.tom!==Y.tom).concat(Y).sort(wn);te(wr),y(wr),de(!0),We();const ir=wr.find(dt);ir&&J(ir)},me=D=>{const Y=S.find(ge=>ge.fom===M?.fom&&ge.tom===M?.tom);if(Y){const ge=D.map(Ve=>({...ed(Y),...Ve,erSplittet:!0})),ir=S.filter(Ve=>Ve.fom!==M?.fom&&Ve.tom!==M?.tom).concat(ge).sort(wn);We(),de(!0),te(ir),y(ir),J(ge[0])}},Ne=sr?sr.find(D=>D.fom===M?.fom&&D.tom===M?.tom):void 0;return i.jsx(Na,{merknaderFraBeslutter:tn,withoutBorder:!0,children:i.jsxs(I,{gap:"4",children:[i.jsx(Br,{size:"small",children:i.jsx(c,{id:"Behandlingspunkt.Tilbakekreving"})}),j&&i.jsx(Va,{children:i.jsx(c,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),S&&i.jsxs(i.Fragment,{children:[i.jsx(Sa,{perioder:Be,valgtPeriode:ae,setPeriode:J,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:u}),M&&Ne&&i.jsx("div",{id:"panel-tilbakekreving","aria-controls":ae?.id.toString(),children:i.jsx(Ia,{borderWidth:"1",padding:"4",children:i.jsxs(I,{gap:"4",children:[i.jsx(fa,{setNestePeriode:qe,setForrigePeriode:je,periode:Ne,readOnly:a,oppdaterSplittedePerioder:me,behandlingUuid:k.uuid,beregnBelop:g,lukkPeriode:We}),i.jsx(ka,{feilutbetaling:Ne.feilutbetaling,fom:Ne.fom,tom:Ne.tom,arsakHendelseNavn:r.HendelseType.find(D=>D.kode===Ne.årsak?.hendelseType)?.navn}),i.jsx(wa,{periode:M,data:Ne,antallPerioderMedAksjonspunkt:nn,readOnly:a||M?.erForeldet===!0,skjulPeriode:We,oppdaterPeriode:Ye,kodeverkSamlingFpTilbake:r,vilkarsVurdertePerioder:S},ae?.id)]})})})]}),Fe&&i.jsx(ft,{variant:"error",children:i.jsx(c,{id:Fe})}),i.jsx("div",{children:i.jsx(Ua,{isReadOnly:a||M?.erForeldet===!0,isDirty:F,isSubmittable:!j&&!M&&!Fe,onClick:an,isSubmitting:_r})})]})})};ja.__docgenInfo={description:`TilbakekrevingForm

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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:md}=__STORYBOOK_MODULE_ACTIONS__,gd=La(bt),fd={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:fn.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:fn.FORELDET}]},xa={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:vt.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},Sd={component:Ma,decorators:[gd],args:{submitCallback:md("button-click"),behandling:{uuid:"1",versjon:1,status:Ka.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:Wa,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:fd,vilkarvurdering:{vilkarsVurdertePerioder:[]},beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleType:dr.MOR,relasjonsRolleTypeKodeverk:[{kode:dr.MOR,kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},Rr={args:{vilkarvurderingsperioder:xa}},Or={args:{vilkarvurderingsperioder:{perioder:[xa.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:vt.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};Rr.parameters={...Rr.parameters,docs:{...Rr.parameters?.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...Rr.parameters?.docs?.source}}};Or.parameters={...Or.parameters,docs:{...Or.parameters?.docs,source:{originalSource:`{
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
}`,...Or.parameters?.docs?.source}}};const qd=["Default","MedToPerioder"];export{Rr as Default,Or as MedToPerioder,qd as __namedExportsOrder,Sd as default};
