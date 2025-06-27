import{h as Pe,aa as yt,j as i,as as vt,M as Sr,O as Br,V as U,L as Oe,B as $,q as V,v as Qe,aQ as Ya,G as bt,F as Z,t as Na,r as C,H as ue,aR as Tt,aS as _t,ak as Va,aT as Ia,ad as Xe,m as Sn,aV as Ge,aP as De,D as Yr,ap as wt,aW as gn,aX as Ua,at as Ea,aw as gr,E as Ga,ax as Dr,al as St,aY as Jn,aZ as La,au as Wa,ar as Ha,J as Ca,aI as $a,aU as Nr,P as za,l as Ka}from"./iframe-DeOT1OL9.js";import{g as Za}from"./withIntl-DpZK4o3Z.js";import{a as Ja}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as I,O as Qa,J as Xa,V as es,l as qt,i as rs,a as qn,o as jn,N as Vr,b as dr,$ as fn,Z as ns,y as jt}from"./style-B0ILdz1S.js";import{M as k}from"./message-DjT7rAaz.js";import{S as Qn,T as sn,a as ts,b as as,c as ss,d as is,e as ls,f as os}from"./Timeline-D9qvK9Uf.js";import{S as us}from"./Scissors-yOxhoPpK.js";import{T as ke}from"./Table-CHFNoY51.js";import{T as ds,m as Mt}from"./nb_NO-Pmmu86nv.js";import{a as ms,S as gs}from"./SilhouetteFill-60wYhSYX.js";//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var xt;function m(){return xt.apply(null,arguments)}function fs(e){xt=e}function ne(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ee(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function w(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function Mn(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var r;for(r in e)if(w(e,r))return!1;return!0}function H(e){return e===void 0}function _e(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function yr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Rt(e,r){var n=[],t,a=e.length;for(t=0;t<a;++t)n.push(r(e[t],t));return n}function Me(e,r){for(var n in r)w(r,n)&&(e[n]=r[n]);return w(r,"toString")&&(e.toString=r.toString),w(r,"valueOf")&&(e.valueOf=r.valueOf),e}function me(e,r,n,t){return Qt(e,r,n,t,!0).utc()}function cs(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function b(e){return e._pf==null&&(e._pf=cs()),e._pf}var cn;Array.prototype.some?cn=Array.prototype.some:cn=function(e){var r=Object(this),n=r.length>>>0,t;for(t=0;t<n;t++)if(t in r&&e.call(this,r[t],t,r))return!0;return!1};function xn(e){var r=null,n=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(r=b(e),n=cn.call(r.parsedDateParts,function(a){return a!=null}),t=r.overflow<0&&!r.empty&&!r.invalidEra&&!r.invalidMonth&&!r.invalidWeekday&&!r.weekdayMismatch&&!r.nullInput&&!r.invalidFormat&&!r.userInvalidated&&(!r.meridiem||r.meridiem&&n),e._strict&&(t=t&&r.charsLeftOver===0&&r.unusedTokens.length===0&&r.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function Wr(e){var r=me(NaN);return e!=null?Me(b(r),e):b(r).userInvalidated=!0,r}var Xn=m.momentProperties=[],ln=!1;function Rn(e,r){var n,t,a,s=Xn.length;if(H(r._isAMomentObject)||(e._isAMomentObject=r._isAMomentObject),H(r._i)||(e._i=r._i),H(r._f)||(e._f=r._f),H(r._l)||(e._l=r._l),H(r._strict)||(e._strict=r._strict),H(r._tzm)||(e._tzm=r._tzm),H(r._isUTC)||(e._isUTC=r._isUTC),H(r._offset)||(e._offset=r._offset),H(r._pf)||(e._pf=b(r)),H(r._locale)||(e._locale=r._locale),s>0)for(n=0;n<s;n++)t=Xn[n],a=r[t],H(a)||(e[t]=a);return e}function vr(e){Rn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ln===!1&&(ln=!0,m.updateOffset(this),ln=!1)}function te(e){return e instanceof vr||e!=null&&e._isAMomentObject!=null}function Ot(e){m.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function J(e,r){var n=!0;return Me(function(){if(m.deprecationHandler!=null&&m.deprecationHandler(null,e),n){var t=[],a,s,l,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(l in arguments[0])w(arguments[0],l)&&(a+=l+": "+arguments[0][l]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}Ot(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),n=!1}return r.apply(this,arguments)},r)}var et={};function Dt(e,r){m.deprecationHandler!=null&&m.deprecationHandler(e,r),et[e]||(Ot(r),et[e]=!0)}m.suppressDeprecationWarnings=!1;m.deprecationHandler=null;function ge(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function ks(e){var r,n;for(n in e)w(e,n)&&(r=e[n],ge(r)?this[n]=r:this["_"+n]=r);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function kn(e,r){var n=Me({},e),t;for(t in r)w(r,t)&&(Ee(e[t])&&Ee(r[t])?(n[t]={},Me(n[t],e[t]),Me(n[t],r[t])):r[t]!=null?n[t]=r[t]:delete n[t]);for(t in e)w(e,t)&&!w(r,t)&&Ee(e[t])&&(n[t]=Me({},n[t]));return n}function On(e){e!=null&&this.set(e)}var pn;Object.keys?pn=Object.keys:pn=function(e){var r,n=[];for(r in e)w(e,r)&&n.push(r);return n};var ps={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function hs(e,r,n){var t=this._calendar[e]||this._calendar.sameElse;return ge(t)?t.call(r,n):t}function de(e,r,n){var t=""+Math.abs(e),a=r-t.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var Dn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,qr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,on={},Ke={};function p(e,r,n,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(Ke[e]=a),r&&(Ke[r[0]]=function(){return de(a.apply(this,arguments),r[1],r[2])}),n&&(Ke[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function ys(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function vs(e){var r=e.match(Dn),n,t;for(n=0,t=r.length;n<t;n++)Ke[r[n]]?r[n]=Ke[r[n]]:r[n]=ys(r[n]);return function(a){var s="",l;for(l=0;l<t;l++)s+=ge(r[l])?r[l].call(a,e):r[l];return s}}function Pr(e,r){return e.isValid()?(r=Pt(r,e.localeData()),on[r]=on[r]||vs(r),on[r](e)):e.localeData().invalidDate()}function Pt(e,r){var n=5;function t(a){return r.longDateFormat(a)||a}for(qr.lastIndex=0;n>=0&&qr.test(e);)e=e.replace(qr,t),qr.lastIndex=0,n-=1;return e}var bs={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ts(e){var r=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return r||!n?r:(this._longDateFormat[e]=n.match(Dn).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var _s="Invalid date";function ws(){return this._invalidDate}var Ss="%d",qs=/\d{1,2}/;function js(e){return this._ordinal.replace("%d",e)}var Ms={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function xs(e,r,n,t){var a=this._relativeTime[n];return ge(a)?a(e,r,n,t):a.replace(/%d/i,e)}function Rs(e,r){var n=this._relativeTime[e>0?"future":"past"];return ge(n)?n(r):n.replace(/%s/i,r)}var rt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Q(e){return typeof e=="string"?rt[e]||rt[e.toLowerCase()]:void 0}function Pn(e){var r={},n,t;for(t in e)w(e,t)&&(n=Q(t),n&&(r[n]=e[t]));return r}var Os={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Ds(e){var r=[],n;for(n in e)w(e,n)&&r.push({unit:n,priority:Os[n]});return r.sort(function(t,a){return t.priority-a.priority}),r}var At=/\d/,z=/\d\d/,Ft=/\d{3}/,An=/\d{4}/,Hr=/[+-]?\d{6}/,R=/\d\d?/,Bt=/\d\d\d\d?/,Yt=/\d\d\d\d\d\d?/,Cr=/\d{1,3}/,Fn=/\d{1,4}/,$r=/[+-]?\d{1,6}/,er=/\d+/,zr=/[+-]?\d+/,Ps=/Z|[+-]\d\d:?\d\d/gi,Kr=/Z|[+-]\d\d(?::?\d\d)?/gi,As=/[+-]?\d+(\.\d{1,3})?/,br=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,rr=/^[1-9]\d?/,Bn=/^([1-9]\d|\d)/,Ir;Ir={};function f(e,r,n){Ir[e]=ge(r)?r:function(t,a){return t&&n?n:r}}function Fs(e,r){return w(Ir,e)?Ir[e](r._strict,r._locale):new RegExp(Bs(e))}function Bs(e){return be(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(r,n,t,a,s){return n||t||a||s}))}function be(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function K(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function T(e){var r=+e,n=0;return r!==0&&isFinite(r)&&(n=K(r)),n}var hn={};function j(e,r){var n,t=r,a;for(typeof e=="string"&&(e=[e]),_e(r)&&(t=function(s,l){l[r]=T(s)}),a=e.length,n=0;n<a;n++)hn[e[n]]=t}function Tr(e,r){j(e,function(n,t,a,s){a._w=a._w||{},r(n,a._w,a,s)})}function Ys(e,r,n){r!=null&&w(hn,e)&&hn[e](r,n._a,n,e)}function Zr(e){return e%4===0&&e%100!==0||e%400===0}var E=0,ye=1,oe=2,Y=3,re=4,ve=5,Ue=6,Ns=7,Vs=8;p("Y",0,0,function(){var e=this.year();return e<=9999?de(e,4):"+"+e});p(0,["YY",2],0,function(){return this.year()%100});p(0,["YYYY",4],0,"year");p(0,["YYYYY",5],0,"year");p(0,["YYYYYY",6,!0],0,"year");f("Y",zr);f("YY",R,z);f("YYYY",Fn,An);f("YYYYY",$r,Hr);f("YYYYYY",$r,Hr);j(["YYYYY","YYYYYY"],E);j("YYYY",function(e,r){r[E]=e.length===2?m.parseTwoDigitYear(e):T(e)});j("YY",function(e,r){r[E]=m.parseTwoDigitYear(e)});j("Y",function(e,r){r[E]=parseInt(e,10)});function mr(e){return Zr(e)?366:365}m.parseTwoDigitYear=function(e){return T(e)+(T(e)>68?1900:2e3)};var Nt=nr("FullYear",!0);function Is(){return Zr(this.year())}function nr(e,r){return function(n){return n!=null?(Vt(this,e,n),m.updateOffset(this,r),this):fr(this,e)}}function fr(e,r){if(!e.isValid())return NaN;var n=e._d,t=e._isUTC;switch(r){case"Milliseconds":return t?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return t?n.getUTCSeconds():n.getSeconds();case"Minutes":return t?n.getUTCMinutes():n.getMinutes();case"Hours":return t?n.getUTCHours():n.getHours();case"Date":return t?n.getUTCDate():n.getDate();case"Day":return t?n.getUTCDay():n.getDay();case"Month":return t?n.getUTCMonth():n.getMonth();case"FullYear":return t?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Vt(e,r,n){var t,a,s,l,o;if(!(!e.isValid()||isNaN(n))){switch(t=e._d,a=e._isUTC,r){case"Milliseconds":return void(a?t.setUTCMilliseconds(n):t.setMilliseconds(n));case"Seconds":return void(a?t.setUTCSeconds(n):t.setSeconds(n));case"Minutes":return void(a?t.setUTCMinutes(n):t.setMinutes(n));case"Hours":return void(a?t.setUTCHours(n):t.setHours(n));case"Date":return void(a?t.setUTCDate(n):t.setDate(n));case"FullYear":break;default:return}s=n,l=e.month(),o=e.date(),o=o===29&&l===1&&!Zr(s)?28:o,a?t.setUTCFullYear(s,l,o):t.setFullYear(s,l,o)}}function Us(e){return e=Q(e),ge(this[e])?this[e]():this}function Es(e,r){if(typeof e=="object"){e=Pn(e);var n=Ds(e),t,a=n.length;for(t=0;t<a;t++)this[n[t].unit](e[n[t].unit])}else if(e=Q(e),ge(this[e]))return this[e](r);return this}function Gs(e,r){return(e%r+r)%r}var A;Array.prototype.indexOf?A=Array.prototype.indexOf:A=function(e){var r;for(r=0;r<this.length;++r)if(this[r]===e)return r;return-1};function Yn(e,r){if(isNaN(e)||isNaN(r))return NaN;var n=Gs(r,12);return e+=(r-n)/12,n===1?Zr(e)?29:28:31-n%7%2}p("M",["MM",2],"Mo",function(){return this.month()+1});p("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});p("MMMM",0,0,function(e){return this.localeData().months(this,e)});f("M",R,rr);f("MM",R,z);f("MMM",function(e,r){return r.monthsShortRegex(e)});f("MMMM",function(e,r){return r.monthsRegex(e)});j(["M","MM"],function(e,r){r[ye]=T(e)-1});j(["MMM","MMMM"],function(e,r,n,t){var a=n._locale.monthsParse(e,t,n._strict);a!=null?r[ye]=a:b(n).invalidMonth=e});var Ls="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),It="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ut=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ws=br,Hs=br;function Cs(e,r){return e?ne(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Ut).test(r)?"format":"standalone"][e.month()]:ne(this._months)?this._months:this._months.standalone}function $s(e,r){return e?ne(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ut.test(r)?"format":"standalone"][e.month()]:ne(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function zs(e,r,n){var t,a,s,l=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=me([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return n?r==="MMM"?(a=A.call(this._shortMonthsParse,l),a!==-1?a:null):(a=A.call(this._longMonthsParse,l),a!==-1?a:null):r==="MMM"?(a=A.call(this._shortMonthsParse,l),a!==-1?a:(a=A.call(this._longMonthsParse,l),a!==-1?a:null)):(a=A.call(this._longMonthsParse,l),a!==-1?a:(a=A.call(this._shortMonthsParse,l),a!==-1?a:null))}function Ks(e,r,n){var t,a,s;if(this._monthsParseExact)return zs.call(this,e,r,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=me([2e3,t]),n&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(n&&r==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!n&&this._monthsParse[t].test(e))return t}}function Et(e,r){if(!e.isValid())return e;if(typeof r=="string"){if(/^\d+$/.test(r))r=T(r);else if(r=e.localeData().monthsParse(r),!_e(r))return e}var n=r,t=e.date();return t=t<29?t:Math.min(t,Yn(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,t):e._d.setMonth(n,t),e}function Gt(e){return e!=null?(Et(this,e),m.updateOffset(this,!0),this):fr(this,"Month")}function Zs(){return Yn(this.year(),this.month())}function Js(e){return this._monthsParseExact?(w(this,"_monthsRegex")||Lt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(w(this,"_monthsShortRegex")||(this._monthsShortRegex=Ws),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Qs(e){return this._monthsParseExact?(w(this,"_monthsRegex")||Lt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(w(this,"_monthsRegex")||(this._monthsRegex=Hs),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Lt(){function e(u,g){return g.length-u.length}var r=[],n=[],t=[],a,s,l,o;for(a=0;a<12;a++)s=me([2e3,a]),l=be(this.monthsShort(s,"")),o=be(this.months(s,"")),r.push(l),n.push(o),t.push(o),t.push(l);r.sort(e),n.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Xs(e,r,n,t,a,s,l){var o;return e<100&&e>=0?(o=new Date(e+400,r,n,t,a,s,l),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,r,n,t,a,s,l),o}function cr(e){var r,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,r=new Date(Date.UTC.apply(null,n)),isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e)):r=new Date(Date.UTC.apply(null,arguments)),r}function Ur(e,r,n){var t=7+r-n,a=(7+cr(e,0,t).getUTCDay()-r)%7;return-a+t-1}function Wt(e,r,n,t,a){var s=(7+n-t)%7,l=Ur(e,t,a),o=1+7*(r-1)+s+l,u,g;return o<=0?(u=e-1,g=mr(u)+o):o>mr(e)?(u=e+1,g=o-mr(e)):(u=e,g=o),{year:u,dayOfYear:g}}function kr(e,r,n){var t=Ur(e.year(),r,n),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,l;return a<1?(l=e.year()-1,s=a+Te(l,r,n)):a>Te(e.year(),r,n)?(s=a-Te(e.year(),r,n),l=e.year()+1):(l=e.year(),s=a),{week:s,year:l}}function Te(e,r,n){var t=Ur(e,r,n),a=Ur(e+1,r,n);return(mr(e)-t+a)/7}p("w",["ww",2],"wo","week");p("W",["WW",2],"Wo","isoWeek");f("w",R,rr);f("ww",R,z);f("W",R,rr);f("WW",R,z);Tr(["w","ww","W","WW"],function(e,r,n,t){r[t.substr(0,1)]=T(e)});function ei(e){return kr(e,this._week.dow,this._week.doy).week}var ri={dow:0,doy:6};function ni(){return this._week.dow}function ti(){return this._week.doy}function ai(e){var r=this.localeData().week(this);return e==null?r:this.add((e-r)*7,"d")}function si(e){var r=kr(this,1,4).week;return e==null?r:this.add((e-r)*7,"d")}p("d",0,"do","day");p("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});p("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});p("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});p("e",0,0,"weekday");p("E",0,0,"isoWeekday");f("d",R);f("e",R);f("E",R);f("dd",function(e,r){return r.weekdaysMinRegex(e)});f("ddd",function(e,r){return r.weekdaysShortRegex(e)});f("dddd",function(e,r){return r.weekdaysRegex(e)});Tr(["dd","ddd","dddd"],function(e,r,n,t){var a=n._locale.weekdaysParse(e,t,n._strict);a!=null?r.d=a:b(n).invalidWeekday=e});Tr(["d","e","E"],function(e,r,n,t){r[t]=T(e)});function ii(e,r){return typeof e!="string"?e:isNaN(e)?(e=r.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function li(e,r){return typeof e=="string"?r.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Nn(e,r){return e.slice(r,7).concat(e.slice(0,r))}var oi="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ht="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ui="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),di=br,mi=br,gi=br;function fi(e,r){var n=ne(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(r)?"format":"standalone"];return e===!0?Nn(n,this._week.dow):e?n[e.day()]:n}function ci(e){return e===!0?Nn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function ki(e){return e===!0?Nn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function pi(e,r,n){var t,a,s,l=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=me([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return n?r==="dddd"?(a=A.call(this._weekdaysParse,l),a!==-1?a:null):r==="ddd"?(a=A.call(this._shortWeekdaysParse,l),a!==-1?a:null):(a=A.call(this._minWeekdaysParse,l),a!==-1?a:null):r==="dddd"?(a=A.call(this._weekdaysParse,l),a!==-1||(a=A.call(this._shortWeekdaysParse,l),a!==-1)?a:(a=A.call(this._minWeekdaysParse,l),a!==-1?a:null)):r==="ddd"?(a=A.call(this._shortWeekdaysParse,l),a!==-1||(a=A.call(this._weekdaysParse,l),a!==-1)?a:(a=A.call(this._minWeekdaysParse,l),a!==-1?a:null)):(a=A.call(this._minWeekdaysParse,l),a!==-1||(a=A.call(this._weekdaysParse,l),a!==-1)?a:(a=A.call(this._shortWeekdaysParse,l),a!==-1?a:null))}function hi(e,r,n){var t,a,s;if(this._weekdaysParseExact)return pi.call(this,e,r,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=me([2e3,1]).day(t),n&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(n&&r==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(n&&r==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!n&&this._weekdaysParse[t].test(e))return t}}function yi(e){if(!this.isValid())return e!=null?this:NaN;var r=fr(this,"Day");return e!=null?(e=ii(e,this.localeData()),this.add(e-r,"d")):r}function vi(e){if(!this.isValid())return e!=null?this:NaN;var r=(this.day()+7-this.localeData()._week.dow)%7;return e==null?r:this.add(e-r,"d")}function bi(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var r=li(e,this.localeData());return this.day(this.day()%7?r:r-7)}else return this.day()||7}function Ti(e){return this._weekdaysParseExact?(w(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(w(this,"_weekdaysRegex")||(this._weekdaysRegex=di),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function _i(e){return this._weekdaysParseExact?(w(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(w(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=mi),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function wi(e){return this._weekdaysParseExact?(w(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(w(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=gi),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Vn(){function e(c,h){return h.length-c.length}var r=[],n=[],t=[],a=[],s,l,o,u,g;for(s=0;s<7;s++)l=me([2e3,1]).day(s),o=be(this.weekdaysMin(l,"")),u=be(this.weekdaysShort(l,"")),g=be(this.weekdays(l,"")),r.push(o),n.push(u),t.push(g),a.push(o),a.push(u),a.push(g);r.sort(e),n.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function In(){return this.hours()%12||12}function Si(){return this.hours()||24}p("H",["HH",2],0,"hour");p("h",["hh",2],0,In);p("k",["kk",2],0,Si);p("hmm",0,0,function(){return""+In.apply(this)+de(this.minutes(),2)});p("hmmss",0,0,function(){return""+In.apply(this)+de(this.minutes(),2)+de(this.seconds(),2)});p("Hmm",0,0,function(){return""+this.hours()+de(this.minutes(),2)});p("Hmmss",0,0,function(){return""+this.hours()+de(this.minutes(),2)+de(this.seconds(),2)});function Ct(e,r){p(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),r)})}Ct("a",!0);Ct("A",!1);function $t(e,r){return r._meridiemParse}f("a",$t);f("A",$t);f("H",R,Bn);f("h",R,rr);f("k",R,rr);f("HH",R,z);f("hh",R,z);f("kk",R,z);f("hmm",Bt);f("hmmss",Yt);f("Hmm",Bt);f("Hmmss",Yt);j(["H","HH"],Y);j(["k","kk"],function(e,r,n){var t=T(e);r[Y]=t===24?0:t});j(["a","A"],function(e,r,n){n._isPm=n._locale.isPM(e),n._meridiem=e});j(["h","hh"],function(e,r,n){r[Y]=T(e),b(n).bigHour=!0});j("hmm",function(e,r,n){var t=e.length-2;r[Y]=T(e.substr(0,t)),r[re]=T(e.substr(t)),b(n).bigHour=!0});j("hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Y]=T(e.substr(0,t)),r[re]=T(e.substr(t,2)),r[ve]=T(e.substr(a)),b(n).bigHour=!0});j("Hmm",function(e,r,n){var t=e.length-2;r[Y]=T(e.substr(0,t)),r[re]=T(e.substr(t))});j("Hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Y]=T(e.substr(0,t)),r[re]=T(e.substr(t,2)),r[ve]=T(e.substr(a))});function qi(e){return(e+"").toLowerCase().charAt(0)==="p"}var ji=/[ap]\.?m?\.?/i,Mi=nr("Hours",!0);function xi(e,r,n){return e>11?n?"pm":"PM":n?"am":"AM"}var zt={calendar:ps,longDateFormat:bs,invalidDate:_s,ordinal:Ss,dayOfMonthOrdinalParse:qs,relativeTime:Ms,months:Ls,monthsShort:It,week:ri,weekdays:oi,weekdaysMin:ui,weekdaysShort:Ht,meridiemParse:ji},P={},lr={},pr;function Ri(e,r){var n,t=Math.min(e.length,r.length);for(n=0;n<t;n+=1)if(e[n]!==r[n])return n;return t}function nt(e){return e&&e.toLowerCase().replace("_","-")}function Oi(e){for(var r=0,n,t,a,s;r<e.length;){for(s=nt(e[r]).split("-"),n=s.length,t=nt(e[r+1]),t=t?t.split("-"):null;n>0;){if(a=Jr(s.slice(0,n).join("-")),a)return a;if(t&&t.length>=n&&Ri(s,t)>=n-1)break;n--}r++}return pr}function Di(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Jr(e){var r=null,n;if(P[e]===void 0&&typeof module<"u"&&module&&module.exports&&Di(e))try{r=pr._abbr,n=require,n("./locale/"+e),Re(r)}catch{P[e]=null}return P[e]}function Re(e,r){var n;return e&&(H(r)?n=we(e):n=Un(e,r),n?pr=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),pr._abbr}function Un(e,r){if(r!==null){var n,t=zt;if(r.abbr=e,P[e]!=null)Dt("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=P[e]._config;else if(r.parentLocale!=null)if(P[r.parentLocale]!=null)t=P[r.parentLocale]._config;else if(n=Jr(r.parentLocale),n!=null)t=n._config;else return lr[r.parentLocale]||(lr[r.parentLocale]=[]),lr[r.parentLocale].push({name:e,config:r}),null;return P[e]=new On(kn(t,r)),lr[e]&&lr[e].forEach(function(a){Un(a.name,a.config)}),Re(e),P[e]}else return delete P[e],null}function Pi(e,r){if(r!=null){var n,t,a=zt;P[e]!=null&&P[e].parentLocale!=null?P[e].set(kn(P[e]._config,r)):(t=Jr(e),t!=null&&(a=t._config),r=kn(a,r),t==null&&(r.abbr=e),n=new On(r),n.parentLocale=P[e],P[e]=n),Re(e)}else P[e]!=null&&(P[e].parentLocale!=null?(P[e]=P[e].parentLocale,e===Re()&&Re(e)):P[e]!=null&&delete P[e]);return P[e]}function we(e){var r;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return pr;if(!ne(e)){if(r=Jr(e),r)return r;e=[e]}return Oi(e)}function Ai(){return pn(P)}function En(e){var r,n=e._a;return n&&b(e).overflow===-2&&(r=n[ye]<0||n[ye]>11?ye:n[oe]<1||n[oe]>Yn(n[E],n[ye])?oe:n[Y]<0||n[Y]>24||n[Y]===24&&(n[re]!==0||n[ve]!==0||n[Ue]!==0)?Y:n[re]<0||n[re]>59?re:n[ve]<0||n[ve]>59?ve:n[Ue]<0||n[Ue]>999?Ue:-1,b(e)._overflowDayOfYear&&(r<E||r>oe)&&(r=oe),b(e)._overflowWeeks&&r===-1&&(r=Ns),b(e)._overflowWeekday&&r===-1&&(r=Vs),b(e).overflow=r),e}var Fi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Yi=/Z|[+-]\d\d(?::?\d\d)?/,jr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],un=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ni=/^\/?Date\((-?\d+)/i,Vi=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Ii={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Kt(e){var r,n,t=e._i,a=Fi.exec(t)||Bi.exec(t),s,l,o,u,g=jr.length,c=un.length;if(a){for(b(e).iso=!0,r=0,n=g;r<n;r++)if(jr[r][1].exec(a[1])){l=jr[r][0],s=jr[r][2]!==!1;break}if(l==null){e._isValid=!1;return}if(a[3]){for(r=0,n=c;r<n;r++)if(un[r][1].exec(a[3])){o=(a[2]||" ")+un[r][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Yi.exec(a[4]))u="Z";else{e._isValid=!1;return}e._f=l+(o||"")+(u||""),Ln(e)}else e._isValid=!1}function Ui(e,r,n,t,a,s){var l=[Ei(e),It.indexOf(r),parseInt(n,10),parseInt(t,10),parseInt(a,10)];return s&&l.push(parseInt(s,10)),l}function Ei(e){var r=parseInt(e,10);return r<=49?2e3+r:r<=999?1900+r:r}function Gi(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Li(e,r,n){if(e){var t=Ht.indexOf(e),a=new Date(r[0],r[1],r[2]).getDay();if(t!==a)return b(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Wi(e,r,n){if(e)return Ii[e];if(r)return 0;var t=parseInt(n,10),a=t%100,s=(t-a)/100;return s*60+a}function Zt(e){var r=Vi.exec(Gi(e._i)),n;if(r){if(n=Ui(r[4],r[3],r[2],r[5],r[6],r[7]),!Li(r[1],n,e))return;e._a=n,e._tzm=Wi(r[8],r[9],r[10]),e._d=cr.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),b(e).rfc2822=!0}else e._isValid=!1}function Hi(e){var r=Ni.exec(e._i);if(r!==null){e._d=new Date(+r[1]);return}if(Kt(e),e._isValid===!1)delete e._isValid;else return;if(Zt(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:m.createFromInputFallback(e)}m.createFromInputFallback=J("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function $e(e,r,n){return e??r??n}function Ci(e){var r=new Date(m.now());return e._useUTC?[r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()]:[r.getFullYear(),r.getMonth(),r.getDate()]}function Gn(e){var r,n,t=[],a,s,l;if(!e._d){for(a=Ci(e),e._w&&e._a[oe]==null&&e._a[ye]==null&&$i(e),e._dayOfYear!=null&&(l=$e(e._a[E],a[E]),(e._dayOfYear>mr(l)||e._dayOfYear===0)&&(b(e)._overflowDayOfYear=!0),n=cr(l,0,e._dayOfYear),e._a[ye]=n.getUTCMonth(),e._a[oe]=n.getUTCDate()),r=0;r<3&&e._a[r]==null;++r)e._a[r]=t[r]=a[r];for(;r<7;r++)e._a[r]=t[r]=e._a[r]==null?r===2?1:0:e._a[r];e._a[Y]===24&&e._a[re]===0&&e._a[ve]===0&&e._a[Ue]===0&&(e._nextDay=!0,e._a[Y]=0),e._d=(e._useUTC?cr:Xs).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Y]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(b(e).weekdayMismatch=!0)}}function $i(e){var r,n,t,a,s,l,o,u,g;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(s=1,l=4,n=$e(r.GG,e._a[E],kr(x(),1,4).year),t=$e(r.W,1),a=$e(r.E,1),(a<1||a>7)&&(u=!0)):(s=e._locale._week.dow,l=e._locale._week.doy,g=kr(x(),s,l),n=$e(r.gg,e._a[E],g.year),t=$e(r.w,g.week),r.d!=null?(a=r.d,(a<0||a>6)&&(u=!0)):r.e!=null?(a=r.e+s,(r.e<0||r.e>6)&&(u=!0)):a=s),t<1||t>Te(n,s,l)?b(e)._overflowWeeks=!0:u!=null?b(e)._overflowWeekday=!0:(o=Wt(n,t,a,s,l),e._a[E]=o.year,e._dayOfYear=o.dayOfYear)}m.ISO_8601=function(){};m.RFC_2822=function(){};function Ln(e){if(e._f===m.ISO_8601){Kt(e);return}if(e._f===m.RFC_2822){Zt(e);return}e._a=[],b(e).empty=!0;var r=""+e._i,n,t,a,s,l,o=r.length,u=0,g,c;for(a=Pt(e._f,e._locale).match(Dn)||[],c=a.length,n=0;n<c;n++)s=a[n],t=(r.match(Fs(s,e))||[])[0],t&&(l=r.substr(0,r.indexOf(t)),l.length>0&&b(e).unusedInput.push(l),r=r.slice(r.indexOf(t)+t.length),u+=t.length),Ke[s]?(t?b(e).empty=!1:b(e).unusedTokens.push(s),Ys(s,t,e)):e._strict&&!t&&b(e).unusedTokens.push(s);b(e).charsLeftOver=o-u,r.length>0&&b(e).unusedInput.push(r),e._a[Y]<=12&&b(e).bigHour===!0&&e._a[Y]>0&&(b(e).bigHour=void 0),b(e).parsedDateParts=e._a.slice(0),b(e).meridiem=e._meridiem,e._a[Y]=zi(e._locale,e._a[Y],e._meridiem),g=b(e).era,g!==null&&(e._a[E]=e._locale.erasConvertYear(g,e._a[E])),Gn(e),En(e)}function zi(e,r,n){var t;return n==null?r:e.meridiemHour!=null?e.meridiemHour(r,n):(e.isPM!=null&&(t=e.isPM(n),t&&r<12&&(r+=12),!t&&r===12&&(r=0)),r)}function Ki(e){var r,n,t,a,s,l,o=!1,u=e._f.length;if(u===0){b(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<u;a++)s=0,l=!1,r=Rn({},e),e._useUTC!=null&&(r._useUTC=e._useUTC),r._f=e._f[a],Ln(r),xn(r)&&(l=!0),s+=b(r).charsLeftOver,s+=b(r).unusedTokens.length*10,b(r).score=s,o?s<t&&(t=s,n=r):(t==null||s<t||l)&&(t=s,n=r,l&&(o=!0));Me(e,n||r)}function Zi(e){if(!e._d){var r=Pn(e._i),n=r.day===void 0?r.date:r.day;e._a=Rt([r.year,r.month,n,r.hour,r.minute,r.second,r.millisecond],function(t){return t&&parseInt(t,10)}),Gn(e)}}function Ji(e){var r=new vr(En(Jt(e)));return r._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Jt(e){var r=e._i,n=e._f;return e._locale=e._locale||we(e._l),r===null||n===void 0&&r===""?Wr({nullInput:!0}):(typeof r=="string"&&(e._i=r=e._locale.preparse(r)),te(r)?new vr(En(r)):(yr(r)?e._d=r:ne(n)?Ki(e):n?Ln(e):Qi(e),xn(e)||(e._d=null),e))}function Qi(e){var r=e._i;H(r)?e._d=new Date(m.now()):yr(r)?e._d=new Date(r.valueOf()):typeof r=="string"?Hi(e):ne(r)?(e._a=Rt(r.slice(0),function(n){return parseInt(n,10)}),Gn(e)):Ee(r)?Zi(e):_e(r)?e._d=new Date(r):m.createFromInputFallback(e)}function Qt(e,r,n,t,a){var s={};return(r===!0||r===!1)&&(t=r,r=void 0),(n===!0||n===!1)&&(t=n,n=void 0),(Ee(e)&&Mn(e)||ne(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=r,s._strict=t,Ji(s)}function x(e,r,n,t){return Qt(e,r,n,t,!1)}var Xi=J("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=x.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Wr()}),el=J("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=x.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Wr()});function Xt(e,r){var n,t;if(r.length===1&&ne(r[0])&&(r=r[0]),!r.length)return x();for(n=r[0],t=1;t<r.length;++t)(!r[t].isValid()||r[t][e](n))&&(n=r[t]);return n}function rl(){var e=[].slice.call(arguments,0);return Xt("isBefore",e)}function nl(){var e=[].slice.call(arguments,0);return Xt("isAfter",e)}var tl=function(){return Date.now?Date.now():+new Date},or=["year","quarter","month","week","day","hour","minute","second","millisecond"];function al(e){var r,n=!1,t,a=or.length;for(r in e)if(w(e,r)&&!(A.call(or,r)!==-1&&(e[r]==null||!isNaN(e[r]))))return!1;for(t=0;t<a;++t)if(e[or[t]]){if(n)return!1;parseFloat(e[or[t]])!==T(e[or[t]])&&(n=!0)}return!0}function sl(){return this._isValid}function il(){return ae(NaN)}function Qr(e){var r=Pn(e),n=r.year||0,t=r.quarter||0,a=r.month||0,s=r.week||r.isoWeek||0,l=r.day||0,o=r.hour||0,u=r.minute||0,g=r.second||0,c=r.millisecond||0;this._isValid=al(r),this._milliseconds=+c+g*1e3+u*6e4+o*1e3*60*60,this._days=+l+s*7,this._months=+a+t*3+n*12,this._data={},this._locale=we(),this._bubble()}function Ar(e){return e instanceof Qr}function yn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function ll(e,r,n){var t=Math.min(e.length,r.length),a=Math.abs(e.length-r.length),s=0,l;for(l=0;l<t;l++)T(e[l])!==T(r[l])&&s++;return s+a}function ea(e,r){p(e,0,0,function(){var n=this.utcOffset(),t="+";return n<0&&(n=-n,t="-"),t+de(~~(n/60),2)+r+de(~~n%60,2)})}ea("Z",":");ea("ZZ","");f("Z",Kr);f("ZZ",Kr);j(["Z","ZZ"],function(e,r,n){n._useUTC=!0,n._tzm=Wn(Kr,e)});var ol=/([\+\-]|\d\d)/gi;function Wn(e,r){var n=(r||"").match(e),t,a,s;return n===null?null:(t=n[n.length-1]||[],a=(t+"").match(ol)||["-",0,0],s=+(a[1]*60)+T(a[2]),s===0?0:a[0]==="+"?s:-s)}function Hn(e,r){var n,t;return r._isUTC?(n=r.clone(),t=(te(e)||yr(e)?e.valueOf():x(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+t),m.updateOffset(n,!1),n):x(e).local()}function vn(e){return-Math.round(e._d.getTimezoneOffset())}m.updateOffset=function(){};function ul(e,r,n){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Wn(Kr,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&r&&(a=vn(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!r||this._changeInProgress?ta(this,ae(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,m.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:vn(this)}function dl(e,r){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,r),this):-this.utcOffset()}function ml(e){return this.utcOffset(0,e)}function gl(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(vn(this),"m")),this}function fl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Wn(Ps,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function cl(e){return this.isValid()?(e=e?x(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function kl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function pl(){if(!H(this._isDSTShifted))return this._isDSTShifted;var e={},r;return Rn(e,this),e=Jt(e),e._a?(r=e._isUTC?me(e._a):x(e._a),this._isDSTShifted=this.isValid()&&ll(e._a,r.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function hl(){return this.isValid()?!this._isUTC:!1}function yl(){return this.isValid()?this._isUTC:!1}function ra(){return this.isValid()?this._isUTC&&this._offset===0:!1}var vl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,bl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ae(e,r){var n=e,t=null,a,s,l;return Ar(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:_e(e)||!isNaN(+e)?(n={},r?n[r]=+e:n.milliseconds=+e):(t=vl.exec(e))?(a=t[1]==="-"?-1:1,n={y:0,d:T(t[oe])*a,h:T(t[Y])*a,m:T(t[re])*a,s:T(t[ve])*a,ms:T(yn(t[Ue]*1e3))*a}):(t=bl.exec(e))?(a=t[1]==="-"?-1:1,n={y:Ie(t[2],a),M:Ie(t[3],a),w:Ie(t[4],a),d:Ie(t[5],a),h:Ie(t[6],a),m:Ie(t[7],a),s:Ie(t[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(l=Tl(x(n.from),x(n.to)),n={},n.ms=l.milliseconds,n.M=l.months),s=new Qr(n),Ar(e)&&w(e,"_locale")&&(s._locale=e._locale),Ar(e)&&w(e,"_isValid")&&(s._isValid=e._isValid),s}ae.fn=Qr.prototype;ae.invalid=il;function Ie(e,r){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*r}function tt(e,r){var n={};return n.months=r.month()-e.month()+(r.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(r)&&--n.months,n.milliseconds=+r-+e.clone().add(n.months,"M"),n}function Tl(e,r){var n;return e.isValid()&&r.isValid()?(r=Hn(r,e),e.isBefore(r)?n=tt(e,r):(n=tt(r,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function na(e,r){return function(n,t){var a,s;return t!==null&&!isNaN(+t)&&(Dt(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=t,t=s),a=ae(n,t),ta(this,a,e),this}}function ta(e,r,n,t){var a=r._milliseconds,s=yn(r._days),l=yn(r._months);e.isValid()&&(t=t??!0,l&&Et(e,fr(e,"Month")+l*n),s&&Vt(e,"Date",fr(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),t&&m.updateOffset(e,s||l))}var _l=na(1,"add"),wl=na(-1,"subtract");function aa(e){return typeof e=="string"||e instanceof String}function Sl(e){return te(e)||yr(e)||aa(e)||_e(e)||jl(e)||ql(e)||e===null||e===void 0}function ql(e){var r=Ee(e)&&!Mn(e),n=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,l=t.length;for(a=0;a<l;a+=1)s=t[a],n=n||w(e,s);return r&&n}function jl(e){var r=ne(e),n=!1;return r&&(n=e.filter(function(t){return!_e(t)&&aa(e)}).length===0),r&&n}function Ml(e){var r=Ee(e)&&!Mn(e),n=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],n=n||w(e,s);return r&&n}function xl(e,r){var n=e.diff(r,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Rl(e,r){arguments.length===1&&(arguments[0]?Sl(arguments[0])?(e=arguments[0],r=void 0):Ml(arguments[0])&&(r=arguments[0],e=void 0):(e=void 0,r=void 0));var n=e||x(),t=Hn(n,this).startOf("day"),a=m.calendarFormat(this,t)||"sameElse",s=r&&(ge(r[a])?r[a].call(this,n):r[a]);return this.format(s||this.localeData().calendar(a,this,x(n)))}function Ol(){return new vr(this)}function Dl(e,r){var n=te(e)?e:x(e);return this.isValid()&&n.isValid()?(r=Q(r)||"millisecond",r==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(r).valueOf()):!1}function Pl(e,r){var n=te(e)?e:x(e);return this.isValid()&&n.isValid()?(r=Q(r)||"millisecond",r==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(r).valueOf()<n.valueOf()):!1}function Al(e,r,n,t){var a=te(e)?e:x(e),s=te(r)?r:x(r);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(t[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function Fl(e,r){var n=te(e)?e:x(e),t;return this.isValid()&&n.isValid()?(r=Q(r)||"millisecond",r==="millisecond"?this.valueOf()===n.valueOf():(t=n.valueOf(),this.clone().startOf(r).valueOf()<=t&&t<=this.clone().endOf(r).valueOf())):!1}function Bl(e,r){return this.isSame(e,r)||this.isAfter(e,r)}function Yl(e,r){return this.isSame(e,r)||this.isBefore(e,r)}function Nl(e,r,n){var t,a,s;if(!this.isValid())return NaN;if(t=Hn(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,r=Q(r),r){case"year":s=Fr(this,t)/12;break;case"month":s=Fr(this,t);break;case"quarter":s=Fr(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return n?s:K(s)}function Fr(e,r){if(e.date()<r.date())return-Fr(r,e);var n=(r.year()-e.year())*12+(r.month()-e.month()),t=e.clone().add(n,"months"),a,s;return r-t<0?(a=e.clone().add(n-1,"months"),s=(r-t)/(t-a)):(a=e.clone().add(n+1,"months"),s=(r-t)/(a-t)),-(n+s)||0}m.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";m.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Vl(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Il(e){if(!this.isValid())return null;var r=e!==!0,n=r?this.clone().utc():this;return n.year()<0||n.year()>9999?Pr(n,r?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ge(Date.prototype.toISOString)?r?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Pr(n,"Z")):Pr(n,r?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Ul(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",r="",n,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",r="Z"),n="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=r+'[")]',this.format(n+t+a+s)}function El(e){e||(e=this.isUtc()?m.defaultFormatUtc:m.defaultFormat);var r=Pr(this,e);return this.localeData().postformat(r)}function Gl(e,r){return this.isValid()&&(te(e)&&e.isValid()||x(e).isValid())?ae({to:this,from:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Ll(e){return this.from(x(),e)}function Wl(e,r){return this.isValid()&&(te(e)&&e.isValid()||x(e).isValid())?ae({from:this,to:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Hl(e){return this.to(x(),e)}function sa(e){var r;return e===void 0?this._locale._abbr:(r=we(e),r!=null&&(this._locale=r),this)}var ia=J("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function la(){return this._locale}var Er=1e3,Ze=60*Er,Gr=60*Ze,oa=(365*400+97)*24*Gr;function Je(e,r){return(e%r+r)%r}function ua(e,r,n){return e<100&&e>=0?new Date(e+400,r,n)-oa:new Date(e,r,n).valueOf()}function da(e,r,n){return e<100&&e>=0?Date.UTC(e+400,r,n)-oa:Date.UTC(e,r,n)}function Cl(e){var r,n;if(e=Q(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?da:ua,e){case"year":r=n(this.year(),0,1);break;case"quarter":r=n(this.year(),this.month()-this.month()%3,1);break;case"month":r=n(this.year(),this.month(),1);break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=n(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=Je(r+(this._isUTC?0:this.utcOffset()*Ze),Gr);break;case"minute":r=this._d.valueOf(),r-=Je(r,Ze);break;case"second":r=this._d.valueOf(),r-=Je(r,Er);break}return this._d.setTime(r),m.updateOffset(this,!0),this}function $l(e){var r,n;if(e=Q(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?da:ua,e){case"year":r=n(this.year()+1,0,1)-1;break;case"quarter":r=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=n(this.year(),this.month()+1,1)-1;break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=Gr-Je(r+(this._isUTC?0:this.utcOffset()*Ze),Gr)-1;break;case"minute":r=this._d.valueOf(),r+=Ze-Je(r,Ze)-1;break;case"second":r=this._d.valueOf(),r+=Er-Je(r,Er)-1;break}return this._d.setTime(r),m.updateOffset(this,!0),this}function zl(){return this._d.valueOf()-(this._offset||0)*6e4}function Kl(){return Math.floor(this.valueOf()/1e3)}function Zl(){return new Date(this.valueOf())}function Jl(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Ql(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Xl(){return this.isValid()?this.toISOString():null}function eo(){return xn(this)}function ro(){return Me({},b(this))}function no(){return b(this).overflow}function to(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}p("N",0,0,"eraAbbr");p("NN",0,0,"eraAbbr");p("NNN",0,0,"eraAbbr");p("NNNN",0,0,"eraName");p("NNNNN",0,0,"eraNarrow");p("y",["y",1],"yo","eraYear");p("y",["yy",2],0,"eraYear");p("y",["yyy",3],0,"eraYear");p("y",["yyyy",4],0,"eraYear");f("N",Cn);f("NN",Cn);f("NNN",Cn);f("NNNN",ko);f("NNNNN",po);j(["N","NN","NNN","NNNN","NNNNN"],function(e,r,n,t){var a=n._locale.erasParse(e,t,n._strict);a?b(n).era=a:b(n).invalidEra=e});f("y",er);f("yy",er);f("yyy",er);f("yyyy",er);f("yo",ho);j(["y","yy","yyy","yyyy"],E);j(["yo"],function(e,r,n,t){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?r[E]=n._locale.eraYearOrdinalParse(e,a):r[E]=parseInt(e,10)});function ao(e,r){var n,t,a,s=this._eras||we("en")._eras;for(n=0,t=s.length;n<t;++n){switch(typeof s[n].since){case"string":a=m(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=m(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function so(e,r,n){var t,a,s=this.eras(),l,o,u;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(l=s[t].name.toUpperCase(),o=s[t].abbr.toUpperCase(),u=s[t].narrow.toUpperCase(),n)switch(r){case"N":case"NN":case"NNN":if(o===e)return s[t];break;case"NNNN":if(l===e)return s[t];break;case"NNNNN":if(u===e)return s[t];break}else if([l,o,u].indexOf(e)>=0)return s[t]}function io(e,r){var n=e.since<=e.until?1:-1;return r===void 0?m(e.since).year():m(e.since).year()+(r-e.offset)*n}function lo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].name;return""}function oo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].narrow;return""}function uo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].abbr;return""}function mo(){var e,r,n,t,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(n=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-m(a[e].since).year())*n+a[e].offset;return this.year()}function go(e){return w(this,"_erasNameRegex")||$n.call(this),e?this._erasNameRegex:this._erasRegex}function fo(e){return w(this,"_erasAbbrRegex")||$n.call(this),e?this._erasAbbrRegex:this._erasRegex}function co(e){return w(this,"_erasNarrowRegex")||$n.call(this),e?this._erasNarrowRegex:this._erasRegex}function Cn(e,r){return r.erasAbbrRegex(e)}function ko(e,r){return r.erasNameRegex(e)}function po(e,r){return r.erasNarrowRegex(e)}function ho(e,r){return r._eraYearOrdinalRegex||er}function $n(){var e=[],r=[],n=[],t=[],a,s,l,o,u,g=this.eras();for(a=0,s=g.length;a<s;++a)l=be(g[a].name),o=be(g[a].abbr),u=be(g[a].narrow),r.push(l),e.push(o),n.push(u),t.push(l),t.push(o),t.push(u);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}p(0,["gg",2],0,function(){return this.weekYear()%100});p(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Xr(e,r){p(0,[e,e.length],0,r)}Xr("gggg","weekYear");Xr("ggggg","weekYear");Xr("GGGG","isoWeekYear");Xr("GGGGG","isoWeekYear");f("G",zr);f("g",zr);f("GG",R,z);f("gg",R,z);f("GGGG",Fn,An);f("gggg",Fn,An);f("GGGGG",$r,Hr);f("ggggg",$r,Hr);Tr(["gggg","ggggg","GGGG","GGGGG"],function(e,r,n,t){r[t.substr(0,2)]=T(e)});Tr(["gg","GG"],function(e,r,n,t){r[t]=m.parseTwoDigitYear(e)});function yo(e){return ma.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function vo(e){return ma.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function bo(){return Te(this.year(),1,4)}function To(){return Te(this.isoWeekYear(),1,4)}function _o(){var e=this.localeData()._week;return Te(this.year(),e.dow,e.doy)}function wo(){var e=this.localeData()._week;return Te(this.weekYear(),e.dow,e.doy)}function ma(e,r,n,t,a){var s;return e==null?kr(this,t,a).year:(s=Te(e,t,a),r>s&&(r=s),So.call(this,e,r,n,t,a))}function So(e,r,n,t,a){var s=Wt(e,r,n,t,a),l=cr(s.year,0,s.dayOfYear);return this.year(l.getUTCFullYear()),this.month(l.getUTCMonth()),this.date(l.getUTCDate()),this}p("Q",0,"Qo","quarter");f("Q",At);j("Q",function(e,r){r[ye]=(T(e)-1)*3});function qo(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}p("D",["DD",2],"Do","date");f("D",R,rr);f("DD",R,z);f("Do",function(e,r){return e?r._dayOfMonthOrdinalParse||r._ordinalParse:r._dayOfMonthOrdinalParseLenient});j(["D","DD"],oe);j("Do",function(e,r){r[oe]=T(e.match(R)[0])});var ga=nr("Date",!0);p("DDD",["DDDD",3],"DDDo","dayOfYear");f("DDD",Cr);f("DDDD",Ft);j(["DDD","DDDD"],function(e,r,n){n._dayOfYear=T(e)});function jo(e){var r=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?r:this.add(e-r,"d")}p("m",["mm",2],0,"minute");f("m",R,Bn);f("mm",R,z);j(["m","mm"],re);var Mo=nr("Minutes",!1);p("s",["ss",2],0,"second");f("s",R,Bn);f("ss",R,z);j(["s","ss"],ve);var xo=nr("Seconds",!1);p("S",0,0,function(){return~~(this.millisecond()/100)});p(0,["SS",2],0,function(){return~~(this.millisecond()/10)});p(0,["SSS",3],0,"millisecond");p(0,["SSSS",4],0,function(){return this.millisecond()*10});p(0,["SSSSS",5],0,function(){return this.millisecond()*100});p(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});p(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});p(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});p(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});f("S",Cr,At);f("SS",Cr,z);f("SSS",Cr,Ft);var xe,fa;for(xe="SSSS";xe.length<=9;xe+="S")f(xe,er);function Ro(e,r){r[Ue]=T(("0."+e)*1e3)}for(xe="S";xe.length<=9;xe+="S")j(xe,Ro);fa=nr("Milliseconds",!1);p("z",0,0,"zoneAbbr");p("zz",0,0,"zoneName");function Oo(){return this._isUTC?"UTC":""}function Do(){return this._isUTC?"Coordinated Universal Time":""}var d=vr.prototype;d.add=_l;d.calendar=Rl;d.clone=Ol;d.diff=Nl;d.endOf=$l;d.format=El;d.from=Gl;d.fromNow=Ll;d.to=Wl;d.toNow=Hl;d.get=Us;d.invalidAt=no;d.isAfter=Dl;d.isBefore=Pl;d.isBetween=Al;d.isSame=Fl;d.isSameOrAfter=Bl;d.isSameOrBefore=Yl;d.isValid=eo;d.lang=ia;d.locale=sa;d.localeData=la;d.max=el;d.min=Xi;d.parsingFlags=ro;d.set=Es;d.startOf=Cl;d.subtract=wl;d.toArray=Jl;d.toObject=Ql;d.toDate=Zl;d.toISOString=Il;d.inspect=Ul;typeof Symbol<"u"&&Symbol.for!=null&&(d[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});d.toJSON=Xl;d.toString=Vl;d.unix=Kl;d.valueOf=zl;d.creationData=to;d.eraName=lo;d.eraNarrow=oo;d.eraAbbr=uo;d.eraYear=mo;d.year=Nt;d.isLeapYear=Is;d.weekYear=yo;d.isoWeekYear=vo;d.quarter=d.quarters=qo;d.month=Gt;d.daysInMonth=Zs;d.week=d.weeks=ai;d.isoWeek=d.isoWeeks=si;d.weeksInYear=_o;d.weeksInWeekYear=wo;d.isoWeeksInYear=bo;d.isoWeeksInISOWeekYear=To;d.date=ga;d.day=d.days=yi;d.weekday=vi;d.isoWeekday=bi;d.dayOfYear=jo;d.hour=d.hours=Mi;d.minute=d.minutes=Mo;d.second=d.seconds=xo;d.millisecond=d.milliseconds=fa;d.utcOffset=ul;d.utc=ml;d.local=gl;d.parseZone=fl;d.hasAlignedHourOffset=cl;d.isDST=kl;d.isLocal=hl;d.isUtcOffset=yl;d.isUtc=ra;d.isUTC=ra;d.zoneAbbr=Oo;d.zoneName=Do;d.dates=J("dates accessor is deprecated. Use date instead.",ga);d.months=J("months accessor is deprecated. Use month instead",Gt);d.years=J("years accessor is deprecated. Use year instead",Nt);d.zone=J("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",dl);d.isDSTShifted=J("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",pl);function Po(e){return x(e*1e3)}function Ao(){return x.apply(null,arguments).parseZone()}function ca(e){return e}var S=On.prototype;S.calendar=hs;S.longDateFormat=Ts;S.invalidDate=ws;S.ordinal=js;S.preparse=ca;S.postformat=ca;S.relativeTime=xs;S.pastFuture=Rs;S.set=ks;S.eras=ao;S.erasParse=so;S.erasConvertYear=io;S.erasAbbrRegex=fo;S.erasNameRegex=go;S.erasNarrowRegex=co;S.months=Cs;S.monthsShort=$s;S.monthsParse=Ks;S.monthsRegex=Qs;S.monthsShortRegex=Js;S.week=ei;S.firstDayOfYear=ti;S.firstDayOfWeek=ni;S.weekdays=fi;S.weekdaysMin=ki;S.weekdaysShort=ci;S.weekdaysParse=hi;S.weekdaysRegex=Ti;S.weekdaysShortRegex=_i;S.weekdaysMinRegex=wi;S.isPM=qi;S.meridiem=xi;function Lr(e,r,n,t){var a=we(),s=me().set(t,r);return a[n](s,e)}function ka(e,r,n){if(_e(e)&&(r=e,e=void 0),e=e||"",r!=null)return Lr(e,r,n,"month");var t,a=[];for(t=0;t<12;t++)a[t]=Lr(e,t,n,"month");return a}function zn(e,r,n,t){typeof e=="boolean"?(_e(r)&&(n=r,r=void 0),r=r||""):(r=e,n=r,e=!1,_e(r)&&(n=r,r=void 0),r=r||"");var a=we(),s=e?a._week.dow:0,l,o=[];if(n!=null)return Lr(r,(n+s)%7,t,"day");for(l=0;l<7;l++)o[l]=Lr(r,(l+s)%7,t,"day");return o}function Fo(e,r){return ka(e,r,"months")}function Bo(e,r){return ka(e,r,"monthsShort")}function Yo(e,r,n){return zn(e,r,n,"weekdays")}function No(e,r,n){return zn(e,r,n,"weekdaysShort")}function Vo(e,r,n){return zn(e,r,n,"weekdaysMin")}Re("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var r=e%10,n=T(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th";return e+n}});m.lang=J("moment.lang is deprecated. Use moment.locale instead.",Re);m.langData=J("moment.langData is deprecated. Use moment.localeData instead.",we);var pe=Math.abs;function Io(){var e=this._data;return this._milliseconds=pe(this._milliseconds),this._days=pe(this._days),this._months=pe(this._months),e.milliseconds=pe(e.milliseconds),e.seconds=pe(e.seconds),e.minutes=pe(e.minutes),e.hours=pe(e.hours),e.months=pe(e.months),e.years=pe(e.years),this}function pa(e,r,n,t){var a=ae(r,n);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function Uo(e,r){return pa(this,e,r,1)}function Eo(e,r){return pa(this,e,r,-1)}function at(e){return e<0?Math.floor(e):Math.ceil(e)}function Go(){var e=this._milliseconds,r=this._days,n=this._months,t=this._data,a,s,l,o,u;return e>=0&&r>=0&&n>=0||e<=0&&r<=0&&n<=0||(e+=at(bn(n)+r)*864e5,r=0,n=0),t.milliseconds=e%1e3,a=K(e/1e3),t.seconds=a%60,s=K(a/60),t.minutes=s%60,l=K(s/60),t.hours=l%24,r+=K(l/24),u=K(ha(r)),n+=u,r-=at(bn(u)),o=K(n/12),n%=12,t.days=r,t.months=n,t.years=o,this}function ha(e){return e*4800/146097}function bn(e){return e*146097/4800}function Lo(e){if(!this.isValid())return NaN;var r,n,t=this._milliseconds;if(e=Q(e),e==="month"||e==="quarter"||e==="year")switch(r=this._days+t/864e5,n=this._months+ha(r),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(r=this._days+Math.round(bn(this._months)),e){case"week":return r/7+t/6048e5;case"day":return r+t/864e5;case"hour":return r*24+t/36e5;case"minute":return r*1440+t/6e4;case"second":return r*86400+t/1e3;case"millisecond":return Math.floor(r*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Se(e){return function(){return this.as(e)}}var ya=Se("ms"),Wo=Se("s"),Ho=Se("m"),Co=Se("h"),$o=Se("d"),zo=Se("w"),Ko=Se("M"),Zo=Se("Q"),Jo=Se("y"),Qo=ya;function Xo(){return ae(this)}function eu(e){return e=Q(e),this.isValid()?this[e+"s"]():NaN}function Le(e){return function(){return this.isValid()?this._data[e]:NaN}}var ru=Le("milliseconds"),nu=Le("seconds"),tu=Le("minutes"),au=Le("hours"),su=Le("days"),iu=Le("months"),lu=Le("years");function ou(){return K(this.days()/7)}var he=Math.round,ze={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function uu(e,r,n,t,a){return a.relativeTime(r||1,!!n,e,t)}function du(e,r,n,t){var a=ae(e).abs(),s=he(a.as("s")),l=he(a.as("m")),o=he(a.as("h")),u=he(a.as("d")),g=he(a.as("M")),c=he(a.as("w")),h=he(a.as("y")),y=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||l<=1&&["m"]||l<n.m&&["mm",l]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(y=y||c<=1&&["w"]||c<n.w&&["ww",c]),y=y||g<=1&&["M"]||g<n.M&&["MM",g]||h<=1&&["y"]||["yy",h],y[2]=r,y[3]=+e>0,y[4]=t,uu.apply(null,y)}function mu(e){return e===void 0?he:typeof e=="function"?(he=e,!0):!1}function gu(e,r){return ze[e]===void 0?!1:r===void 0?ze[e]:(ze[e]=r,e==="s"&&(ze.ss=r-1),!0)}function fu(e,r){if(!this.isValid())return this.localeData().invalidDate();var n=!1,t=ze,a,s;return typeof e=="object"&&(r=e,e=!1),typeof e=="boolean"&&(n=e),typeof r=="object"&&(t=Object.assign({},ze,r),r.s!=null&&r.ss==null&&(t.ss=r.s-1)),a=this.localeData(),s=du(this,!n,t,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var dn=Math.abs;function He(e){return(e>0)-(e<0)||+e}function en(){if(!this.isValid())return this.localeData().invalidDate();var e=dn(this._milliseconds)/1e3,r=dn(this._days),n=dn(this._months),t,a,s,l,o=this.asSeconds(),u,g,c,h;return o?(t=K(e/60),a=K(t/60),e%=60,t%=60,s=K(n/12),n%=12,l=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=o<0?"-":"",g=He(this._months)!==He(o)?"-":"",c=He(this._days)!==He(o)?"-":"",h=He(this._milliseconds)!==He(o)?"-":"",u+"P"+(s?g+s+"Y":"")+(n?g+n+"M":"")+(r?c+r+"D":"")+(a||t||e?"T":"")+(a?h+a+"H":"")+(t?h+t+"M":"")+(e?h+l+"S":"")):"P0D"}var _=Qr.prototype;_.isValid=sl;_.abs=Io;_.add=Uo;_.subtract=Eo;_.as=Lo;_.asMilliseconds=ya;_.asSeconds=Wo;_.asMinutes=Ho;_.asHours=Co;_.asDays=$o;_.asWeeks=zo;_.asMonths=Ko;_.asQuarters=Zo;_.asYears=Jo;_.valueOf=Qo;_._bubble=Go;_.clone=Xo;_.get=eu;_.milliseconds=ru;_.seconds=nu;_.minutes=tu;_.hours=au;_.days=su;_.weeks=ou;_.months=iu;_.years=lu;_.humanize=fu;_.toISOString=en;_.toString=en;_.toJSON=en;_.locale=sa;_.localeData=la;_.toIsoString=J("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",en);_.lang=ia;p("X",0,0,"unix");p("x",0,0,"valueOf");f("x",zr);f("X",As);j("X",function(e,r,n){n._d=new Date(parseFloat(e)*1e3)});j("x",function(e,r,n){n._d=new Date(T(e))});//! moment.js
m.version="2.30.1";fs(x);m.fn=d;m.min=rl;m.max=nl;m.now=tl;m.utc=me;m.unix=Po;m.months=Fo;m.isDate=yr;m.locale=Re;m.invalid=Wr;m.duration=ae;m.isMoment=te;m.weekdays=Yo;m.parseZone=Ao;m.localeData=we;m.isDuration=Ar;m.monthsShort=Bo;m.weekdaysMin=Vo;m.defineLocale=Un;m.updateLocale=Pi;m.locales=Ai;m.weekdaysShort=No;m.normalizeUnits=Q;m.relativeTimeRounding=mu;m.relativeTimeThreshold=gu;m.calendarFormat=xl;m.prototype=d;m.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var ee=(e=>(e.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",e.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",e.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",e.GOD_TRO="GOD_TRO",e))(ee||{}),Kn=(e=>(e.VURDER_TILBAKEKREVING="5002",e))(Kn||{});const cu="_button_8q57x_1",ku="_cancelButton_8q57x_5",st={button:cu,cancelButton:ku},pu=(e,r)=>n=>n&&(Xa(n)(V(e.tom.toString()).subtract(1,"day"))||es(n)(e.fom))?r.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,hu=(e,r)=>{const n=V(e.forstePeriodeTomDato).add(1,"days"),t={fom:r.fom,tom:e.forstePeriodeTomDato},a={fom:n.format(Na),tom:r.tom};return{forstePeriode:t,andrePeriode:a}},va=({periodeData:e,showModal:r,cancelEvent:n,finnesBelopMed0Verdi:t,splitPeriod:a})=>{const s=Pe(),l=yt();return i.jsx(vt,{formMethods:l,onSubmit:o=>a(hu(o,e)),children:i.jsxs(Sr,{open:r,"aria-label":s.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[i.jsx(Sr.Header,{children:i.jsx(Br,{size:"small",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),i.jsx(Sr.Body,{children:i.jsxs(U,{gap:"4",children:[i.jsxs("div",{children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.Periode"})}),i.jsx($,{size:"small",children:`${V(e.fom.toString()).format(Qe)} - ${V(e.tom.toString()).format(Qe)}`})]}),i.jsx(Ya,{name:"forstePeriodeTomDato",control:l.control,label:i.jsx(k,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[I,Qa,pu(e,s)],fromDate:V(e.fom).toDate(),toDate:V(e.tom).toDate()}),t&&i.jsx(bt,{variant:"error",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),i.jsxs(Sr.Footer,{children:[i.jsx(Z,{size:"small",variant:"primary",className:st.button,disabled:!l.formState.isDirty,children:i.jsx(k,{id:"DelOppPeriodeModalImpl.Ok"})}),i.jsx(Z,{size:"small",variant:"secondary",onClick:n,className:st.cancelButton,type:"button",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};va.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const yu="_margin_wnej3_37",mn={margin:yu},vu=!1,ba=({setNestePeriode:e,setForrigePeriode:r,readOnly:n,lukkPeriode:t,periode:a,beregnBelop:s,behandlingUuid:l,oppdaterSplittedePerioder:o})=>{const u=Pe(),[g,c]=C.useState(!1),[h,y]=C.useState(!1),O=q=>{c(!0),q.preventDefault()},L=()=>{c(!1)},qe=q=>{y(!1);const se={belop:a.feilutbetaling,fom:q.forstePeriode.fom,tom:q.forstePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "},ie={belop:a.feilutbetaling,fom:q.andrePeriode.fom,tom:q.andrePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "};s({behandlingUuid:l,perioder:[se,ie]}).then(v=>{const{perioder:le}=v;if(le.some(Ae=>Ae.belop===0))y(!0);else{const Ae={fom:se.fom,tom:se.tom,feilutbetaling:le[0].belop},Fe={fom:ie.fom,tom:ie.tom,feilutbetaling:le[1].belop};L(),o([Ae,Fe])}})};return i.jsxs(ue,{children:[i.jsxs(Oe,{size:"small",children:[i.jsx(k,{id:"PeriodeController.Detaljer"}),vu]}),!n&&i.jsxs(i.Fragment,{children:[i.jsx(Qn,{}),i.jsx(Z,{className:mn.margin,size:"xsmall",icon:i.jsx(us,{"aria-hidden":!0}),onClick:O,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:i.jsx(k,{id:"PeriodeController.DelOppPerioden"})})]}),g&&i.jsx(va,{cancelEvent:L,showModal:g,periodeData:a,splitPeriod:qe,finnesBelopMed0Verdi:h}),i.jsx(Qn,{}),i.jsx(Z,{className:mn.margin,size:"xsmall",icon:i.jsx(Tt,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.prevPeriod"}),children:i.jsx(k,{id:"PeriodeController.prevPeriodShort"})}),i.jsx(Z,{className:mn.margin,size:"xsmall",icon:i.jsx(_t,{"aria-hidden":!0}),onClick:e,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:i.jsx(k,{id:"PeriodeController.nextPeriodShort"})}),i.jsx(Z,{size:"xsmall",icon:i.jsx(Va,{"aria-hidden":!0}),onClick:t,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};ba.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const bu="_infoSummary_14r2l_1",Tu="_positivNumber_14r2l_8",_u="_redNumber_14r2l_12",wu="_resultName_14r2l_17",ur={infoSummary:bu,positivNumber:Tu,redNumber:_u,resultName:wu},Ta=({fom:e,tom:r,feilutbetaling:n,arsakHendelseNavn:t})=>{const a=Ia(e,r);return i.jsxs(U,{gap:"2",className:ur.infoSummary,children:[i.jsxs(ue,{justify:"space-between",children:[i.jsx(Oe,{size:"small",children:`${V(e).format(Qe)} - ${V(r).format(Qe)}`}),i.jsx($,{size:"small",children:a.formattedString})]}),i.jsxs(ue,{gap:"4",children:[i.jsxs($,{size:"small",className:ur.resultName,children:[i.jsx(k,{id:"PeriodeInformasjon.Feilutbetaling"}),":",i.jsx("span",{className:n?ur.redNumber:ur.positivNumber,children:Xe(n)})]}),t&&i.jsx($,{size:"small",className:ur.resultName,children:t})]})]})};Ta.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var G=(e=>(e.FORSETT="FORSETT",e.GROVT_UAKTSOM="GROVT_UAKTSOM",e.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",e))(G||{});const Su=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var _a=(e=>(e.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",e.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",e.STOERRELSE_BELOEP="STOERRELSE_BELOEP",e.TID_FRA_UTBETALING="TID_FRA_UTBETALING",e.ANNET="ANNET",e))(_a||{});const wa=({name:e,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const t=Sn(),a=`${e}.skalDetTilleggesRenter`;return C.useEffect(()=>{t.getValues(a)===void 0&&t.setValue(a,!1)},[]),i.jsx("div",{children:i.jsxs(Ge,{alignOffset:n?320:360,children:[n&&i.jsxs(U,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx($,{size:"small",children:"100 %"}),i.jsx(De,{name:`${e}.skalDetTilleggesRenter`,control:t.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[I],radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:r,parse:s=>s==="true",isHorizontal:!0})]}),!n&&i.jsxs(U,{gap:"2",children:[i.jsxs("div",{children:[i.jsx(Yr,{children:i.jsx(k,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx($,{size:"small",children:"100 %"})]}),i.jsx($,{size:"small",children:i.jsx(k,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})};wa.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const hr="Egendefinert",Tn=["30","50","70",hr],qu="_suffix_cawxu_1",ju="_suffixGrovText_cawxu_4",Mu="_labelPadding_cawxu_8",xu="_inputFelt_cawxu_12",Ce={suffix:qu,suffixGrovText:ju,labelPadding:Mu,inputFelt:xu},it=qt(0),Ru=rs(99.99),Ou=e=>{const r=e.toString().replace(/\s/g,""),n=parseInt(r,10);return Number.isNaN(n)?"":n},Du=(e,r)=>n=>{if((typeof n=="string"?Number(n):n)>=r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},Sa=({name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,harMerEnnEnYtelse:a,feilutbetalingBelop:s,andelSomTilbakekreves:l})=>{const o=Pe(),u=Sn(),g=`${e}.skalDetTilleggesRenter`;return C.useEffect(()=>{u.getValues(g)===void 0&&u.setValue(g,!1)},[]),i.jsxs(U,{gap:"4",children:[i.jsx(De,{name:`${e}.harGrunnerTilReduksjon`,control:u.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[I],radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0}),r&&i.jsx(Ge,{alignOffset:24,children:i.jsxs(ue,{gap:"4",children:[!a&&l!==hr&&i.jsxs(i.Fragment,{children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(ue,{gap:"2",children:[i.jsx(wt,{name:`${e}.andelSomTilbakekreves`,control:u.control,label:"",validate:[I],selectValues:Tn.map(c=>i.jsx("option",{value:c,children:c},c))}),i.jsx("div",{className:Ce.suffix,children:"%"})]})]}),!a&&l===hr&&i.jsxs(i.Fragment,{children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(ue,{gap:"4",children:[i.jsx(gn,{name:`${e}.andelSomTilbakekrevesManuell`,control:u.control,className:Ce.inputFelt,readOnly:n,validate:[I,it,Ru],normalizeOnBlur:c=>Number.isNaN(c)?c:parseFloat(c.toString()).toFixed(2),format:c=>c.toString().replace(".",","),parse:c=>c.toString().replace(",",".")}),i.jsx("div",{className:t===G.GROVT_UAKTSOM?Ce.suffixGrovText:Ce.suffix,children:"%"})]})]}),a&&i.jsx(gn,{name:`${e}.belopSomSkalTilbakekreves`,control:u.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[I,it,Du(o,s)],readOnly:n,format:Xe,parse:Ou}),t===G.GROVT_UAKTSOM&&i.jsxs("div",{children:[i.jsx(Yr,{children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),i.jsx($,{size:"small",className:Ce.labelPadding,children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),r===!1&&i.jsxs(Ge,{alignOffset:90,children:[i.jsx(Yr,{children:i.jsx(k,{id:a?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),i.jsxs(U,{gap:"4",children:[i.jsx($,{size:"small",className:Ce.labelPadding,children:a?Xe(s):"100%"}),t===G.GROVT_UAKTSOM&&i.jsx(De,{name:g,control:u.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[I],radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})]})};Sa.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const Pu=qn(3),Au=jn(1500),_n=({name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:u})=>{const g=Pe(),{watch:c,control:h}=Sn(),y=!s.some(L=>!!c(`${e}.${L.kode}`)),O=Ua(e,y?g.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return i.jsxs(U,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),i.jsx("div",{children:s.map(L=>i.jsx(Ea,{name:`${e}.${L.kode}`,control:h,label:L.navn,readOnly:n},L.kode))}),a&&i.jsx(gr,{name:`${e}.annetBegrunnelse`,control:h,label:"",validate:[I,Pu,Au,Vr],maxLength:1500,readOnly:n}),O&&i.jsx(Ga,{children:O}),i.jsx(Sa,{name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:u})]})};_n.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Fu="_explanationTextarea_1kabz_1",Bu="_panelWidth_1kabz_5",qa={explanationTextarea:Fu,panelWidth:Bu},Yu=qn(3),Nu=jn(1500),lt=(e,r,n)=>i.jsxs(U,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),i.jsx(gr,{name:`${e}.sarligGrunnerBegrunnelse`,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[I,Yu,Nu,Vr],maxLength:1500,readOnly:r,className:qa.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]}),ja=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:u,erValgtResultatTypeForstoBurdeForstaatt:g,name:c})=>{const h=Pe(),y=g?180:200;return i.jsx(Ge,{alignOffset:n===G.GROVT_UAKTSOM?y:20,children:i.jsxs("div",{className:qa.panelWidth,children:[n===G.SIMPEL_UAKTSOM&&o&&i.jsx(De,{name:`${c}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:i.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[I],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:r,radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:i.jsxs("div",{style:{marginTop:"10px"},children:[lt(c,r,h),i.jsx(_n,{name:c,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:n,andelSomTilbakekreves:u})]})},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:i.jsx("div",{style:{marginTop:"10px"},children:i.jsx(Ge,{alignOffset:55,children:i.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})})}]}),(n!==G.SIMPEL_UAKTSOM||!o)&&i.jsxs(i.Fragment,{children:[lt(c,r,h),i.jsx(_n,{name:c,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:n,andelSomTilbakekreves:u})]})]})})};ja.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Ma=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,erValgtResultatTypeForstoBurdeForstaatt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:g,name:c})=>i.jsxs(i.Fragment,{children:[n===G.FORSETT&&i.jsx(wa,{name:c,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:a}),n!==G.FORSETT&&i.jsx(ja,{name:c,harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:a})]});Ma.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Vu=[G.GROVT_UAKTSOM,G.SIMPEL_UAKTSOM,G.FORSETT],Iu={[G.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[G.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[G.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},tr=({readOnly:e,resetFields:r,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:t,erSerligGrunnAnnetValgt:a=!1,erValgtResultatTypeForstoBurdeForstaatt:s=!1,aktsomhetTyper:l,sarligGrunnTyper:o,antallYtelser:u,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:c,andelSomTilbakekreves:h,name:y})=>i.jsxs(i.Fragment,{children:[i.jsx(De,{name:`${y}.handletUaktsomhetGrad`,label:i.jsx(k,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[I],radios:l.map(O=>({label:s?i.jsx(k,{id:Iu[O.kode]}):O.navn,value:O.kode})),isReadOnly:e,onChange:r,isHorizontal:!0}),Vu.some(O=>O===n)&&i.jsx(Ma,{name:`${y}.${n}`,harGrunnerTilReduksjon:t,readOnly:e,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:o,harMerEnnEnYtelse:u>1,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:c,andelSomTilbakekreves:h})]}),Uu=(e,r)=>{const n=parseInt(e,10);return!r||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Eu=(e,r)=>{const n=parseFloat(e);return!r||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Gu=(e,r)=>{if(e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=r.reduce((s,l)=>e[l.kode]?s.concat(l.kode):s,[]),{harGrunnerTilReduksjon:t}=e,a=e.andelSomTilbakekreves===hr?Eu(e.andelSomTilbakekrevesManuell,t):Uu(e.andelSomTilbakekreves,t);return{harGrunnerTilReduksjon:t,ileggRenter:t?void 0:e.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:e.harGrunnerTilReduksjon?St(e.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:e.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...a}};tr.transformValues=(e,r,n)=>{const t=e[e.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:e.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:t?Gu(t,r):null}};const Lu=(e,r)=>({andelSomTilbakekreves:r===void 0||Tn.includes(r)?r:hr,andelSomTilbakekrevesManuell:r&&Tn.includes(r)?void 0:e.andelTilbakekreves,harGrunnerTilReduksjon:e.harGrunnerTilReduksjon,skalDetTilleggesRenter:e.ileggRenter,belopSomSkalTilbakekreves:e.tilbakekrevesBelop,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:Dr(e.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...e.sarligGrunner?e.sarligGrunner.reduce((n,t)=>({...n,[t.kode??t]:!0}),{}):{}});tr.buildInitalValues=e=>{const{aktsomhet:r,aktsomhetInfo:n}=e,t=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,a=n?{[r.kode&&"kode"in r?r.kode:r]:Lu(n,t)}:{};return{handletUaktsomhetGrad:r&&r.kode&&"kode"in r?r.kode:r,...a}};tr.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const xa=()=>i.jsxs(ue,{gap:"4",children:[i.jsx(gr,{name:"foreldetBegrunnelse",label:i.jsx(k,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),i.jsx(De,{name:"periodenErForeldet",label:i.jsx(Yr,{children:i.jsx(k,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:i.jsx(k,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]});xa.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const Wu="_arrowbox_ych2z_1",Hu="_tilbakekrevdBelopInput_ych2z_4",ot={arrowbox:Wu,tilbakekrevdBelopInput:Hu},Cu=qt(1),$u=e=>{const r=e.toString().replace(/\s/g,""),n=parseInt(r,10);return Number.isNaN(n)?"":n},zu=(e,r)=>n=>{if((typeof n=="string"?Number(n):n)>r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ar=({name:e,readOnly:r,erBelopetIBehold:n,feilutbetalingBelop:t})=>{const a=Pe();return i.jsxs(U,{gap:"2",children:[i.jsx(De,{name:`${e}.erBelopetIBehold`,label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[I],radios:[{label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0}),i.jsxs("div",{className:ot.arrowbox,children:[n===!0&&i.jsx(Ge,{alignOffset:25,children:i.jsx(gn,{name:`${e}.tilbakekrevdBelop`,label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[I,Cu,zu(a,t)],readOnly:r,className:ot.tilbakekrevdBelopInput,format:Xe,parse:$u})}),n===!1&&i.jsx(Ge,{alignOffset:90,children:i.jsx($,{size:"small",children:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ar.transformValues=(e,r)=>({"@type":"godTro",begrunnelse:r,erBelopetIBehold:e.erBelopetIBehold,tilbakekrevesBelop:e.erBelopetIBehold?St(e.tilbakekrevdBelop):void 0});ar.buildIntialValues=e=>({erBelopetIBehold:e.erBelopetIBehold,tilbakekrevdBelop:e.tilbakekrevesBelop});ar.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Ku="_feilutbetalingTable_1fsd2_1",Zu={feilutbetalingTable:Ku},Ra=({ytelser:e})=>{if(e.length===0)return null;let r=0;return i.jsxs(ke,{className:Zu.feilutbetalingTable,children:[i.jsx(ke.Header,{children:i.jsxs(ke.Row,{children:[i.jsx(ke.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),i.jsx(ke.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),i.jsx(ke.Body,{children:e.map(n=>(r+=1,i.jsxs(ke.Row,{children:[i.jsx(ke.DataCell,{children:i.jsx($,{size:"small",children:n.aktivitet})}),i.jsx(ke.DataCell,{children:i.jsx($,{size:"small",children:Xe(n.belop)})})]},n.aktivitet+n.belop+r)))})]})};Ra.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Ju="_explanationTextarea_1udkt_1",Qu="_leftColumn_1udkt_5",Xu="_rightColumn_1udkt_9",ed="_selectWidth_1udkt_12",Mr={explanationTextarea:Ju,leftColumn:Qu,rightColumn:Xu,selectWidth:ed},ut=qn(3),dt=jn(1500),Oa=({data:e,periode:r,skjulPeriode:n,readOnly:t,oppdaterPeriode:a,vilkarsVurdertePerioder:s,kodeverkSamlingFpTilbake:l,antallPerioderMedAksjonspunkt:o})=>{const u=Pe(),[g,c]=C.useState(!1),h=yt({defaultValues:r}),y=h.watch("valgtVilkarResultatType"),O=h.watch(`${y}.handletUaktsomhetGrad`),L=h.watch(`${y}.${O}.harGrunnerTilReduksjon`),qe=h.watch(`${y}.${O}.andelSomTilbakekreves`),q=h.watch(`${y}.${O}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),se=h.watch(`${y}.${O}.${_a.ANNET}`),ie=h.watch(`${y}.erBelopetIBehold`),F=Jn(y),v=Jn(O),le=e.redusertBeloper,_r=l.SærligGrunn,Ae=l.VilkårResultat,Fe=Su.map(M=>l.Aktsomhet.find(W=>W.kode===M)),rn=(M,W)=>{const X=M.target.value.split("_"),N=W.find(fe=>fe.fom===X[0]&&fe.tom===X[1]),je=N==null?void 0:N.valgtVilkarResultatType,We=N&&je?N[je]:void 0,Ye=JSON.parse(JSON.stringify(We));if(je!==ee.GOD_TRO){const{handletUaktsomhetGrad:fe}=Ye;fe!==G.FORSETT&&(r==null?void 0:r.harMerEnnEnYtelse)!==(N==null?void 0:N.harMerEnnEnYtelse)&&(Ye[fe].andelSomTilbakekreves=null,Ye[fe].andelSomTilbakekrevesManuell=null,Ye[fe].belopSomSkalTilbakekreves=null)}h.setValue("valgtVilkarResultatType",je,{shouldDirty:!0}),h.setValue("begrunnelse",N==null?void 0:N.begrunnelse,{shouldDirty:!0}),h.setValue("vurderingBegrunnelse",N==null?void 0:N.vurderingBegrunnelse,{shouldDirty:!0}),je&&h.setValue(je,Ye,{shouldDirty:!0}),M.preventDefault()},sr=()=>{c(!g),a(h.getValues())},nn=M=>{o>1&&e.erTotalBelopUnder4Rettsgebyr&&q===!1?c(!g):a(M)},tn=()=>{F&&h.resetField(F)},an=()=>{v&&h.resetField(`${y}.${v}`)},Be=s.filter(M=>!M.erForeldet&&M.valgtVilkarResultatType!=null);return i.jsx(vt,{formMethods:h,onSubmit:nn,children:i.jsxs(U,{gap:"4",children:[i.jsx(U,{gap:"2",children:le&&le.map(M=>i.jsx($,{size:"small",children:i.jsx(k,{id:M.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:Xe(M.belop),b:La}})},M.belop))}),i.jsx(Ra,{ytelser:e.ytelser}),!t&&!e.erForeldet&&Be.length>0&&i.jsx(wt,{name:"perioderForKopi",control:h.control,selectValues:Be.map(M=>{const W=`${M.fom}_${M.tom}`,X=`${V(M.fom).format(Qe)} - ${V(M.tom).format(Qe)}`;return i.jsx("option",{value:W,children:X},W)}),onChange:M=>rn(M,Be),className:Mr.selectWidth,label:i.jsx(k,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),i.jsxs(ue,{gap:"4",wrap:!0,children:[i.jsxs("div",{className:Mr.leftColumn,children:[e.erForeldet&&i.jsx(xa,{}),!e.erForeldet&&i.jsxs(U,{gap:"2",children:[i.jsx(Br,{size:"small",children:i.jsx(k,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),i.jsx(gr,{name:"begrunnelse",control:h.control,label:u.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[I,ut,dt,Vr],maxLength:1500,readOnly:t,className:Mr.explanationTextarea,description:u.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),i.jsx(De,{name:"valgtVilkarResultatType",control:h.control,label:i.jsx(k,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[I],radios:Ae.map(M=>({label:M.navn,value:M.kode})),isReadOnly:t,onChange:tn})]})]}),i.jsx("div",{className:Mr.rightColumn,children:y&&i.jsxs(U,{gap:"2",children:[i.jsx(Br,{size:"small",children:i.jsx(k,{id:y===ee.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),i.jsx(gr,{name:"vurderingBegrunnelse",control:h.control,label:u.formatMessage({id:y===ee.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[I,ut,dt,Vr],maxLength:1500,readOnly:t}),y===ee.GOD_TRO&&i.jsx(ar,{name:y,readOnly:t,erBelopetIBehold:ie,feilutbetalingBelop:e.feilutbetaling}),y!==ee.GOD_TRO&&i.jsx(tr,{name:y,harGrunnerTilReduksjon:L,readOnly:t,handletUaktsomhetGrad:O,resetFields:an,erSerligGrunnAnnetValgt:se,erValgtResultatTypeForstoBurdeForstaatt:y===ee.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:Fe,sarligGrunnTyper:_r,antallYtelser:e.ytelser.length,feilutbetalingBelop:e.feilutbetaling,erTotalBelopUnder4Rettsgebyr:e.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:qe},y)]})})]}),i.jsxs(ue,{gap:"4",children:[i.jsx(Z,{size:"small",variant:"primary",disabled:!h.formState.isDirty||t,children:i.jsx(k,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),i.jsx(Z,{size:"small",variant:"secondary",onClick:n,type:"button",children:i.jsx(k,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),g&&i.jsx(ds,{showModal:!0,submit:sr})]})})};Oa.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const rd="_margin_1wl4t_1",xr={margin:rd},nd={danger:i.jsx(os,{}),success:i.jsx(ls,{}),warning:i.jsx(is,{})},td=(e,r)=>e.fom<r.fom?-1:e.fom>r.fom?1:0,ad=e=>{const r=e.isGodkjent?"success":"danger";return e.isAksjonspunktOpen?"warning":r},sd=(e=[])=>[...e].sort(td).map(r=>({...r,status:ad(r)})),id=e=>e===dr.MOR||e===dr.MEDMOR?i.jsx(ms,{width:20,height:20,color:"var(--a-red-200)"}):e===dr.FAR?i.jsx(gs,{width:20,height:20,color:"var(--a-blue-600)"}):i.jsx(ss,{width:20,height:20}),Da=({perioder:e,valgtPeriode:r,setPeriode:n,relasjonsRolleType:t,relasjonsRolleTypeKodeverk:a})=>{var ie;const s=Pe(),l=sd(e),o=F=>{const v=e.find(le=>le.id===F);v&&n(v)},u=V(l[0].fom),g=V(l[l.length-1].tom),[c,h]=C.useState(u),[y,O]=C.useState(g),L=()=>{c.subtract(1,"month").isBefore(u)||(h(c.subtract(1,"month")),O(y.subtract(1,"month")))},qe=()=>{y.add(1,"month").isAfter(g)||(h(c.add(1,"month")),O(y.add(1,"month")))},q=()=>{c.add(3,"month").isAfter(y)||(h(c.add(1,"month")),O(y.subtract(1,"month")))},se=()=>{y.add(1,"month").diff(c.subtract(1,"month"),"months")<36&&(h(c.subtract(1,"month")),O(y.add(1,"month")))};return i.jsxs(U,{gap:"4",children:[i.jsx(sn,{startDate:V(c).toDate(),endDate:V(y).add(1,"days").toDate(),children:i.jsx(sn.Row,{label:((ie=a.find(F=>F.kode===t))==null?void 0:ie.navn)||"-",icon:id(t),children:l.map(F=>i.jsx(sn.Period,{start:V(F.fom).toDate(),end:V(F.tom).toDate(),status:F.status,icon:nd[F.status],onSelectPeriod:()=>o(F.id),isActive:(r==null?void 0:r.id)===F.id,"aria-controls":"panel-tilbakekreving",id:F.id.toString()},F.id))})}),i.jsxs(ue,{justify:"end",children:[i.jsx(Z,{className:xr.margin,size:"small",icon:i.jsx(ts,{"aria-hidden":!0}),onClick:q,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),i.jsx(Z,{className:xr.margin,size:"small",icon:i.jsx(as,{"aria-hidden":!0}),onClick:se,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),i.jsx(Z,{className:xr.margin,size:"small",icon:i.jsx(Tt,{"aria-hidden":!0}),onClick:L,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),i.jsx(Z,{className:xr.margin,size:"small",icon:i.jsx(_t,{"aria-hidden":!0}),onClick:qe,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};Da.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const wn=(e,r)=>m(e.fom).diff(m(r.fom)),mt=e=>!e.erForeldet&&(e.begrunnelse===void 0||e.erSplittet),ld=e=>{const r=e[e.valgtVilkarResultatType],n=r[r.handletUaktsomhetGrad];return r.tilbakekrevdBelop?{...e,[e.valgtVilkarResultatType]:{...Nr(r,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...e,[e.valgtVilkarResultatType]:{...r,[r.handletUaktsomhetGrad]:{...Nr(n,"belopSomSkalTilbakekreves")}}}:e},od=(e,r=[])=>r.map((n,t)=>{const a=e.find(o=>o.fom===n.fom&&o.tom===n.tom),s=a&&a[a.valgtVilkarResultatType]?a[a.valgtVilkarResultatType].erBelopetIBehold:void 0,l=a?!!a.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&((a==null?void 0:a.begrunnelse)===void 0||l),isGodkjent:!(n.erForeldet||s===!1),id:t}}),Pa=(e,r)=>r.find(n=>!m(e.fom).isBefore(m(n.fom))&&!m(e.tom).isAfter(m(n.tom))),ud=(e,r)=>r.every(n=>!(m(e.fom).isSameOrBefore(m(n.tom))&&m(n.fom).isSameOrBefore(m(e.tom)))),dd=(e,r,n)=>{const a=e.reduce((u,g)=>u+g.feilutbetaling,0)<n*4,l=r.vilkarsVurdertePerioder.map(u=>{const g=Pa(u,e);return{...g,harMerEnnEnYtelse:g&&g.ytelser.length>1,...Nr(u,"feilutbetalingBelop"),feilutbetaling:u.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:a}});return{perioder:e.filter(u=>ud(u,l)).map(u=>({...u,harMerEnnEnYtelse:u.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:a})).concat(l)}},md=(e,r)=>{if(!(!e||!r))return r.map(n=>{const t=Pa(n,e.perioder),a=t.foreldelseVurderingType?t.foreldelseVurderingType===fn.FORELDET:t.foreldet;return{redusertBeloper:t.redusertBeloper,ytelser:t.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:t.feilutbetaling,erTotalBelopUnder4Rettsgebyr:t.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:t.årsak,begrunnelse:t.begrunnelse,erForeldet:a||!1}})},gd=(e,r)=>{const{vilkarResultat:n,begrunnelse:t,vilkarResultatInfo:a}=e,s=(n==null?void 0:n.kode)??n;let l;const o=e.erForeldet??e.foreldet;if(o){const h=r.perioder.find(y=>y.fom===e.fom&&y.tom===e.tom);l={erForeldet:o,periodenErForeldet:!0,foreldetBegrunnelse:h?Dr(h.begrunnelse):void 0}}else l={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const u={valgtVilkarResultatType:s,begrunnelse:Dr(t),harMerEnnEnYtelse:e.ytelser.length>1,...l},g=s===ee.GOD_TRO?ar.buildIntialValues(a):{},c=s!==void 0&&s!==ee.GOD_TRO?tr.buildInitalValues(a):{};return{...u,vurderingBegrunnelse:a?Dr(a.begrunnelse):void 0,[u.valgtVilkarResultatType]:{...g,...c}}},fd=(e,r)=>{const{valgtVilkarResultatType:n,begrunnelse:t,vurderingBegrunnelse:a}=e,s=e[n],l=n===ee.GOD_TRO?ar.transformValues(s,a):{},o=n!==ee.GOD_TRO?tr.transformValues(s,r,a):{};return{begrunnelse:t,fom:e.fom,tom:e.tom,vilkarResultat:n,vilkarResultatInfo:{...l,...o}}},cd=(e,r)=>e.perioder.map(n=>({...gd(n,r),fom:n.fom,tom:n.tom})).sort(wn),kd=(e,r)=>({kode:Kn.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:e.filter(n=>!n.erForeldet).map(n=>fd(n,r))}),pd=e=>{if(!e||e.reduce((t,a)=>a.erForeldet?t:t+1,0)<2)return;const n=e.reduce((t,a)=>{const{valgtVilkarResultatType:s}=a,l=a[s],{handletUaktsomhetGrad:o}=l,u=l[o];return u&&u.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?t+1:t},0);if(n>0&&n!==e.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Aa=({perioderForeldelse:e,kodeverkSamlingFpTilbake:r,vilkarvurderingsperioder:n,submitCallback:t,isReadOnly:a,alleMerknaderFraBeslutter:s,vilkarvurdering:l,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:u,beregnBelop:g,behandling:c,formData:h,setFormData:y})=>{var Zn;const O=n.perioder,L=n.rettsgebyr,qe=dd(O,l,L),[q,se]=C.useState(h||cd(qe,e)),[ie,F]=C.useState(!!h),[v,le]=C.useState(q==null?void 0:q.find(mt)),[_r,Ae]=C.useState(!1),[Fe,rn]=C.useState();C.useEffect(()=>{rn(pd(q))},[q]);const sr=md(qe,q),nn=q.reduce((D,B)=>B.erForeldet?D:D+1,0),tn=s[Kn.VURDER_TILBAKEKREVING],an=()=>{Ae(!0),t(kd(q,r.SærligGrunn))},Be=od(q,sr),M=Be.some(D=>D.isAksjonspunktOpen),W=v?Be.find(D=>D.fom===v.fom&&D.tom===v.tom):void 0,X=D=>{const B=D?q.find(ce=>ce.fom===D.fom&&ce.tom===D.tom):void 0;le(B)},N=()=>{const D=q.findIndex(B=>B.fom===(v==null?void 0:v.fom)&&B.tom===(v==null?void 0:v.tom));X(q[D+1])},je=()=>{const D=q.findIndex(B=>B.fom===(v==null?void 0:v.fom)&&B.tom===(v==null?void 0:v.tom));X(q[D-1])},We=()=>{X(void 0)},Ye=D=>{const B=Nr(D,"erSplittet"),wr=q.filter(Ve=>Ve.fom!==B.fom&&Ve.tom!==B.tom).concat(B).sort(wn);se(wr),y(wr),F(!0),We();const ir=wr.find(mt);ir&&X(ir)},fe=D=>{const B=q.find(ce=>ce.fom===(v==null?void 0:v.fom)&&ce.tom===(v==null?void 0:v.tom));if(B){const ce=D.map(Ve=>({...ld(B),...Ve,erSplittet:!0})),ir=q.filter(Ve=>Ve.fom!==(v==null?void 0:v.fom)&&Ve.tom!==(v==null?void 0:v.tom)).concat(ce).sort(wn);We(),F(!0),se(ir),y(ir),X(ce[0])}},Ne=sr?sr.find(D=>D.fom===(v==null?void 0:v.fom)&&D.tom===(v==null?void 0:v.tom)):void 0;return i.jsx(Wa,{merknaderFraBeslutter:tn,withoutBorder:!0,children:i.jsxs(U,{gap:"4",children:[i.jsx(Br,{size:"small",children:i.jsx(k,{id:"Behandlingspunkt.Tilbakekreving"})}),M&&i.jsx(Ha,{children:i.jsx(k,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),q&&i.jsxs(i.Fragment,{children:[i.jsx(Da,{perioder:Be,valgtPeriode:W,setPeriode:X,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:u}),v&&Ne&&i.jsx("div",{id:"panel-tilbakekreving","aria-controls":W==null?void 0:W.id.toString(),children:i.jsx(Ca,{borderWidth:"1",padding:"4",children:i.jsxs(U,{gap:"4",children:[i.jsx(ba,{setNestePeriode:N,setForrigePeriode:je,periode:Ne,readOnly:a,oppdaterSplittedePerioder:fe,behandlingUuid:c.uuid,beregnBelop:g,lukkPeriode:We}),i.jsx(Ta,{feilutbetaling:Ne.feilutbetaling,fom:Ne.fom,tom:Ne.tom,arsakHendelseNavn:(Zn=r.HendelseType.find(D=>{var B;return D.kode===((B=Ne.årsak)==null?void 0:B.hendelseType)}))==null?void 0:Zn.navn}),i.jsx(Oa,{periode:v,data:Ne,antallPerioderMedAksjonspunkt:nn,readOnly:a||(v==null?void 0:v.erForeldet)===!0,skjulPeriode:We,oppdaterPeriode:Ye,kodeverkSamlingFpTilbake:r,vilkarsVurdertePerioder:q},W==null?void 0:W.id)]})})})]}),Fe&&i.jsx(bt,{variant:"error",children:i.jsx(k,{id:Fe})}),i.jsx("div",{children:i.jsx($a,{isReadOnly:a||(v==null?void 0:v.erForeldet)===!0,isDirty:ie,isSubmittable:!M&&!v&&!Fe,onClick:an,isSubmitting:_r})})]})})};Aa.__docgenInfo={description:`TilbakekrevingForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const hd=Ka(Mt),Fa=e=>i.jsx(za,{value:hd,children:i.jsx(Aa,{...e})});Fa.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:yd}=__STORYBOOK_MODULE_ACTIONS__,vd=Za(Mt),bd={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:fn.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:fn.FORELDET}]},Ba={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:jt.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},Dd={component:Fa,decorators:[vd],args:{submitCallback:yd("button-click"),behandling:{uuid:"1",versjon:1,status:ns.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:Ja,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:bd,vilkarvurdering:{vilkarsVurdertePerioder:[]},beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleType:dr.MOR,relasjonsRolleTypeKodeverk:[{kode:dr.MOR,kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},Rr={args:{vilkarvurderingsperioder:Ba}},Or={args:{vilkarvurderingsperioder:{perioder:[Ba.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:jt.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};var gt,ft,ct;Rr.parameters={...Rr.parameters,docs:{...(gt=Rr.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...(ct=(ft=Rr.parameters)==null?void 0:ft.docs)==null?void 0:ct.source}}};var kt,pt,ht;Or.parameters={...Or.parameters,docs:{...(kt=Or.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(ht=(pt=Or.parameters)==null?void 0:pt.docs)==null?void 0:ht.source}}};const Pd=["Default","MedToPerioder"];export{Rr as Default,Or as MedToPerioder,Pd as __namedExportsOrder,Dd as default};
