import{h as Pe,aa as yt,j as i,as as vt,M as Sr,O as Br,V as E,L as Oe,B as $,q as V,v as Qe,aO as Ba,G as bt,F as Z,t as Ya,r as C,H as ue,aP as Tt,aQ as _t,ak as Na,aR as Va,ad as Xe,m as Sn,aV as Ge,aN as De,D as Yr,ap as wt,aW as gn,aX as Ia,at as Ea,aw as gr,E as Ua,ax as Dr,al as St,aY as Jn,aZ as Ga,au as La,ar as Wa,J as Ha,aS as Ca,aT as Nr,P as $a,l as za}from"./iframe-DQj-1hI0.js";import{g as Ka}from"./withIntl-BSSE_hOJ.js";import{a as Za}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as I,O as Ja,J as Qa,V as Xa,l as qt,i as es,a as qn,o as jn,N as Vr,b as dr,$ as fn,Z as rs}from"./style-BbH34Im7.js";import{M as k}from"./message-Y2g9lHpZ.js";import{S as Qn,T as sn,a as ns,b as ts,c as as,d as ss,e as is,f as ls}from"./Timeline-BppvazUD.js";import{S as os}from"./Scissors-DhoggEEO.js";import{T as ke}from"./Table-Ceuot7E6.js";import{T as us,m as jt}from"./nb_NO-CqtIr_hQ.js";import{a as ds,S as ms}from"./SilhouetteFill-B34OLEaG.js";//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Mt;function m(){return Mt.apply(null,arguments)}function gs(e){Mt=e}function ne(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ue(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function w(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function Mn(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var r;for(r in e)if(w(e,r))return!1;return!0}function H(e){return e===void 0}function _e(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function yr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function xt(e,r){var n=[],t,a=e.length;for(t=0;t<a;++t)n.push(r(e[t],t));return n}function Me(e,r){for(var n in r)w(r,n)&&(e[n]=r[n]);return w(r,"toString")&&(e.toString=r.toString),w(r,"valueOf")&&(e.valueOf=r.valueOf),e}function me(e,r,n,t){return Jt(e,r,n,t,!0).utc()}function fs(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function b(e){return e._pf==null&&(e._pf=fs()),e._pf}var cn;Array.prototype.some?cn=Array.prototype.some:cn=function(e){var r=Object(this),n=r.length>>>0,t;for(t=0;t<n;t++)if(t in r&&e.call(this,r[t],t,r))return!0;return!1};function xn(e){var r=null,n=!1,t=e._d&&!isNaN(e._d.getTime());if(t&&(r=b(e),n=cn.call(r.parsedDateParts,function(a){return a!=null}),t=r.overflow<0&&!r.empty&&!r.invalidEra&&!r.invalidMonth&&!r.invalidWeekday&&!r.weekdayMismatch&&!r.nullInput&&!r.invalidFormat&&!r.userInvalidated&&(!r.meridiem||r.meridiem&&n),e._strict&&(t=t&&r.charsLeftOver===0&&r.unusedTokens.length===0&&r.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=t;else return t;return e._isValid}function Wr(e){var r=me(NaN);return e!=null?Me(b(r),e):b(r).userInvalidated=!0,r}var Xn=m.momentProperties=[],ln=!1;function Rn(e,r){var n,t,a,s=Xn.length;if(H(r._isAMomentObject)||(e._isAMomentObject=r._isAMomentObject),H(r._i)||(e._i=r._i),H(r._f)||(e._f=r._f),H(r._l)||(e._l=r._l),H(r._strict)||(e._strict=r._strict),H(r._tzm)||(e._tzm=r._tzm),H(r._isUTC)||(e._isUTC=r._isUTC),H(r._offset)||(e._offset=r._offset),H(r._pf)||(e._pf=b(r)),H(r._locale)||(e._locale=r._locale),s>0)for(n=0;n<s;n++)t=Xn[n],a=r[t],H(a)||(e[t]=a);return e}function vr(e){Rn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ln===!1&&(ln=!0,m.updateOffset(this),ln=!1)}function te(e){return e instanceof vr||e!=null&&e._isAMomentObject!=null}function Rt(e){m.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function J(e,r){var n=!0;return Me(function(){if(m.deprecationHandler!=null&&m.deprecationHandler(null,e),n){var t=[],a,s,l,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(l in arguments[0])w(arguments[0],l)&&(a+=l+": "+arguments[0][l]+", ");a=a.slice(0,-2)}else a=arguments[s];t.push(a)}Rt(e+`
Arguments: `+Array.prototype.slice.call(t).join("")+`
`+new Error().stack),n=!1}return r.apply(this,arguments)},r)}var et={};function Ot(e,r){m.deprecationHandler!=null&&m.deprecationHandler(e,r),et[e]||(Rt(r),et[e]=!0)}m.suppressDeprecationWarnings=!1;m.deprecationHandler=null;function ge(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function cs(e){var r,n;for(n in e)w(e,n)&&(r=e[n],ge(r)?this[n]=r:this["_"+n]=r);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function kn(e,r){var n=Me({},e),t;for(t in r)w(r,t)&&(Ue(e[t])&&Ue(r[t])?(n[t]={},Me(n[t],e[t]),Me(n[t],r[t])):r[t]!=null?n[t]=r[t]:delete n[t]);for(t in e)w(e,t)&&!w(r,t)&&Ue(e[t])&&(n[t]=Me({},n[t]));return n}function On(e){e!=null&&this.set(e)}var pn;Object.keys?pn=Object.keys:pn=function(e){var r,n=[];for(r in e)w(e,r)&&n.push(r);return n};var ks={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function ps(e,r,n){var t=this._calendar[e]||this._calendar.sameElse;return ge(t)?t.call(r,n):t}function de(e,r,n){var t=""+Math.abs(e),a=r-t.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+t}var Dn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,qr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,on={},Ke={};function p(e,r,n,t){var a=t;typeof t=="string"&&(a=function(){return this[t]()}),e&&(Ke[e]=a),r&&(Ke[r[0]]=function(){return de(a.apply(this,arguments),r[1],r[2])}),n&&(Ke[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function hs(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function ys(e){var r=e.match(Dn),n,t;for(n=0,t=r.length;n<t;n++)Ke[r[n]]?r[n]=Ke[r[n]]:r[n]=hs(r[n]);return function(a){var s="",l;for(l=0;l<t;l++)s+=ge(r[l])?r[l].call(a,e):r[l];return s}}function Pr(e,r){return e.isValid()?(r=Dt(r,e.localeData()),on[r]=on[r]||ys(r),on[r](e)):e.localeData().invalidDate()}function Dt(e,r){var n=5;function t(a){return r.longDateFormat(a)||a}for(qr.lastIndex=0;n>=0&&qr.test(e);)e=e.replace(qr,t),qr.lastIndex=0,n-=1;return e}var vs={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function bs(e){var r=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return r||!n?r:(this._longDateFormat[e]=n.match(Dn).map(function(t){return t==="MMMM"||t==="MM"||t==="DD"||t==="dddd"?t.slice(1):t}).join(""),this._longDateFormat[e])}var Ts="Invalid date";function _s(){return this._invalidDate}var ws="%d",Ss=/\d{1,2}/;function qs(e){return this._ordinal.replace("%d",e)}var js={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Ms(e,r,n,t){var a=this._relativeTime[n];return ge(a)?a(e,r,n,t):a.replace(/%d/i,e)}function xs(e,r){var n=this._relativeTime[e>0?"future":"past"];return ge(n)?n(r):n.replace(/%s/i,r)}var rt={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function Q(e){return typeof e=="string"?rt[e]||rt[e.toLowerCase()]:void 0}function Pn(e){var r={},n,t;for(t in e)w(e,t)&&(n=Q(t),n&&(r[n]=e[t]));return r}var Rs={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Os(e){var r=[],n;for(n in e)w(e,n)&&r.push({unit:n,priority:Rs[n]});return r.sort(function(t,a){return t.priority-a.priority}),r}var Pt=/\d/,z=/\d\d/,At=/\d{3}/,An=/\d{4}/,Hr=/[+-]?\d{6}/,R=/\d\d?/,Ft=/\d\d\d\d?/,Bt=/\d\d\d\d\d\d?/,Cr=/\d{1,3}/,Fn=/\d{1,4}/,$r=/[+-]?\d{1,6}/,er=/\d+/,zr=/[+-]?\d+/,Ds=/Z|[+-]\d\d:?\d\d/gi,Kr=/Z|[+-]\d\d(?::?\d\d)?/gi,Ps=/[+-]?\d+(\.\d{1,3})?/,br=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,rr=/^[1-9]\d?/,Bn=/^([1-9]\d|\d)/,Ir;Ir={};function f(e,r,n){Ir[e]=ge(r)?r:function(t,a){return t&&n?n:r}}function As(e,r){return w(Ir,e)?Ir[e](r._strict,r._locale):new RegExp(Fs(e))}function Fs(e){return be(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(r,n,t,a,s){return n||t||a||s}))}function be(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function K(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function T(e){var r=+e,n=0;return r!==0&&isFinite(r)&&(n=K(r)),n}var hn={};function j(e,r){var n,t=r,a;for(typeof e=="string"&&(e=[e]),_e(r)&&(t=function(s,l){l[r]=T(s)}),a=e.length,n=0;n<a;n++)hn[e[n]]=t}function Tr(e,r){j(e,function(n,t,a,s){a._w=a._w||{},r(n,a._w,a,s)})}function Bs(e,r,n){r!=null&&w(hn,e)&&hn[e](r,n._a,n,e)}function Zr(e){return e%4===0&&e%100!==0||e%400===0}var U=0,ye=1,oe=2,Y=3,re=4,ve=5,Ee=6,Ys=7,Ns=8;p("Y",0,0,function(){var e=this.year();return e<=9999?de(e,4):"+"+e});p(0,["YY",2],0,function(){return this.year()%100});p(0,["YYYY",4],0,"year");p(0,["YYYYY",5],0,"year");p(0,["YYYYYY",6,!0],0,"year");f("Y",zr);f("YY",R,z);f("YYYY",Fn,An);f("YYYYY",$r,Hr);f("YYYYYY",$r,Hr);j(["YYYYY","YYYYYY"],U);j("YYYY",function(e,r){r[U]=e.length===2?m.parseTwoDigitYear(e):T(e)});j("YY",function(e,r){r[U]=m.parseTwoDigitYear(e)});j("Y",function(e,r){r[U]=parseInt(e,10)});function mr(e){return Zr(e)?366:365}m.parseTwoDigitYear=function(e){return T(e)+(T(e)>68?1900:2e3)};var Yt=nr("FullYear",!0);function Vs(){return Zr(this.year())}function nr(e,r){return function(n){return n!=null?(Nt(this,e,n),m.updateOffset(this,r),this):fr(this,e)}}function fr(e,r){if(!e.isValid())return NaN;var n=e._d,t=e._isUTC;switch(r){case"Milliseconds":return t?n.getUTCMilliseconds():n.getMilliseconds();case"Seconds":return t?n.getUTCSeconds():n.getSeconds();case"Minutes":return t?n.getUTCMinutes():n.getMinutes();case"Hours":return t?n.getUTCHours():n.getHours();case"Date":return t?n.getUTCDate():n.getDate();case"Day":return t?n.getUTCDay():n.getDay();case"Month":return t?n.getUTCMonth():n.getMonth();case"FullYear":return t?n.getUTCFullYear():n.getFullYear();default:return NaN}}function Nt(e,r,n){var t,a,s,l,o;if(!(!e.isValid()||isNaN(n))){switch(t=e._d,a=e._isUTC,r){case"Milliseconds":return void(a?t.setUTCMilliseconds(n):t.setMilliseconds(n));case"Seconds":return void(a?t.setUTCSeconds(n):t.setSeconds(n));case"Minutes":return void(a?t.setUTCMinutes(n):t.setMinutes(n));case"Hours":return void(a?t.setUTCHours(n):t.setHours(n));case"Date":return void(a?t.setUTCDate(n):t.setDate(n));case"FullYear":break;default:return}s=n,l=e.month(),o=e.date(),o=o===29&&l===1&&!Zr(s)?28:o,a?t.setUTCFullYear(s,l,o):t.setFullYear(s,l,o)}}function Is(e){return e=Q(e),ge(this[e])?this[e]():this}function Es(e,r){if(typeof e=="object"){e=Pn(e);var n=Os(e),t,a=n.length;for(t=0;t<a;t++)this[n[t].unit](e[n[t].unit])}else if(e=Q(e),ge(this[e]))return this[e](r);return this}function Us(e,r){return(e%r+r)%r}var A;Array.prototype.indexOf?A=Array.prototype.indexOf:A=function(e){var r;for(r=0;r<this.length;++r)if(this[r]===e)return r;return-1};function Yn(e,r){if(isNaN(e)||isNaN(r))return NaN;var n=Us(r,12);return e+=(r-n)/12,n===1?Zr(e)?29:28:31-n%7%2}p("M",["MM",2],"Mo",function(){return this.month()+1});p("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});p("MMMM",0,0,function(e){return this.localeData().months(this,e)});f("M",R,rr);f("MM",R,z);f("MMM",function(e,r){return r.monthsShortRegex(e)});f("MMMM",function(e,r){return r.monthsRegex(e)});j(["M","MM"],function(e,r){r[ye]=T(e)-1});j(["MMM","MMMM"],function(e,r,n,t){var a=n._locale.monthsParse(e,t,n._strict);a!=null?r[ye]=a:b(n).invalidMonth=e});var Gs="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Vt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),It=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ls=br,Ws=br;function Hs(e,r){return e?ne(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||It).test(r)?"format":"standalone"][e.month()]:ne(this._months)?this._months:this._months.standalone}function Cs(e,r){return e?ne(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[It.test(r)?"format":"standalone"][e.month()]:ne(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function $s(e,r,n){var t,a,s,l=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],t=0;t<12;++t)s=me([2e3,t]),this._shortMonthsParse[t]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[t]=this.months(s,"").toLocaleLowerCase();return n?r==="MMM"?(a=A.call(this._shortMonthsParse,l),a!==-1?a:null):(a=A.call(this._longMonthsParse,l),a!==-1?a:null):r==="MMM"?(a=A.call(this._shortMonthsParse,l),a!==-1?a:(a=A.call(this._longMonthsParse,l),a!==-1?a:null)):(a=A.call(this._longMonthsParse,l),a!==-1?a:(a=A.call(this._shortMonthsParse,l),a!==-1?a:null))}function zs(e,r,n){var t,a,s;if(this._monthsParseExact)return $s.call(this,e,r,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),t=0;t<12;t++){if(a=me([2e3,t]),n&&!this._longMonthsParse[t]&&(this._longMonthsParse[t]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[t]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!n&&!this._monthsParse[t]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="MMMM"&&this._longMonthsParse[t].test(e))return t;if(n&&r==="MMM"&&this._shortMonthsParse[t].test(e))return t;if(!n&&this._monthsParse[t].test(e))return t}}function Et(e,r){if(!e.isValid())return e;if(typeof r=="string"){if(/^\d+$/.test(r))r=T(r);else if(r=e.localeData().monthsParse(r),!_e(r))return e}var n=r,t=e.date();return t=t<29?t:Math.min(t,Yn(e.year(),n)),e._isUTC?e._d.setUTCMonth(n,t):e._d.setMonth(n,t),e}function Ut(e){return e!=null?(Et(this,e),m.updateOffset(this,!0),this):fr(this,"Month")}function Ks(){return Yn(this.year(),this.month())}function Zs(e){return this._monthsParseExact?(w(this,"_monthsRegex")||Gt.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(w(this,"_monthsShortRegex")||(this._monthsShortRegex=Ls),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function Js(e){return this._monthsParseExact?(w(this,"_monthsRegex")||Gt.call(this),e?this._monthsStrictRegex:this._monthsRegex):(w(this,"_monthsRegex")||(this._monthsRegex=Ws),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Gt(){function e(u,g){return g.length-u.length}var r=[],n=[],t=[],a,s,l,o;for(a=0;a<12;a++)s=me([2e3,a]),l=be(this.monthsShort(s,"")),o=be(this.months(s,"")),r.push(l),n.push(o),t.push(o),t.push(l);r.sort(e),n.sort(e),t.sort(e),this._monthsRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Qs(e,r,n,t,a,s,l){var o;return e<100&&e>=0?(o=new Date(e+400,r,n,t,a,s,l),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,r,n,t,a,s,l),o}function cr(e){var r,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,r=new Date(Date.UTC.apply(null,n)),isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e)):r=new Date(Date.UTC.apply(null,arguments)),r}function Er(e,r,n){var t=7+r-n,a=(7+cr(e,0,t).getUTCDay()-r)%7;return-a+t-1}function Lt(e,r,n,t,a){var s=(7+n-t)%7,l=Er(e,t,a),o=1+7*(r-1)+s+l,u,g;return o<=0?(u=e-1,g=mr(u)+o):o>mr(e)?(u=e+1,g=o-mr(e)):(u=e,g=o),{year:u,dayOfYear:g}}function kr(e,r,n){var t=Er(e.year(),r,n),a=Math.floor((e.dayOfYear()-t-1)/7)+1,s,l;return a<1?(l=e.year()-1,s=a+Te(l,r,n)):a>Te(e.year(),r,n)?(s=a-Te(e.year(),r,n),l=e.year()+1):(l=e.year(),s=a),{week:s,year:l}}function Te(e,r,n){var t=Er(e,r,n),a=Er(e+1,r,n);return(mr(e)-t+a)/7}p("w",["ww",2],"wo","week");p("W",["WW",2],"Wo","isoWeek");f("w",R,rr);f("ww",R,z);f("W",R,rr);f("WW",R,z);Tr(["w","ww","W","WW"],function(e,r,n,t){r[t.substr(0,1)]=T(e)});function Xs(e){return kr(e,this._week.dow,this._week.doy).week}var ei={dow:0,doy:6};function ri(){return this._week.dow}function ni(){return this._week.doy}function ti(e){var r=this.localeData().week(this);return e==null?r:this.add((e-r)*7,"d")}function ai(e){var r=kr(this,1,4).week;return e==null?r:this.add((e-r)*7,"d")}p("d",0,"do","day");p("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});p("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});p("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});p("e",0,0,"weekday");p("E",0,0,"isoWeekday");f("d",R);f("e",R);f("E",R);f("dd",function(e,r){return r.weekdaysMinRegex(e)});f("ddd",function(e,r){return r.weekdaysShortRegex(e)});f("dddd",function(e,r){return r.weekdaysRegex(e)});Tr(["dd","ddd","dddd"],function(e,r,n,t){var a=n._locale.weekdaysParse(e,t,n._strict);a!=null?r.d=a:b(n).invalidWeekday=e});Tr(["d","e","E"],function(e,r,n,t){r[t]=T(e)});function si(e,r){return typeof e!="string"?e:isNaN(e)?(e=r.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ii(e,r){return typeof e=="string"?r.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Nn(e,r){return e.slice(r,7).concat(e.slice(0,r))}var li="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Wt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),oi="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ui=br,di=br,mi=br;function gi(e,r){var n=ne(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(r)?"format":"standalone"];return e===!0?Nn(n,this._week.dow):e?n[e.day()]:n}function fi(e){return e===!0?Nn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function ci(e){return e===!0?Nn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function ki(e,r,n){var t,a,s,l=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],t=0;t<7;++t)s=me([2e3,1]).day(t),this._minWeekdaysParse[t]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[t]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[t]=this.weekdays(s,"").toLocaleLowerCase();return n?r==="dddd"?(a=A.call(this._weekdaysParse,l),a!==-1?a:null):r==="ddd"?(a=A.call(this._shortWeekdaysParse,l),a!==-1?a:null):(a=A.call(this._minWeekdaysParse,l),a!==-1?a:null):r==="dddd"?(a=A.call(this._weekdaysParse,l),a!==-1||(a=A.call(this._shortWeekdaysParse,l),a!==-1)?a:(a=A.call(this._minWeekdaysParse,l),a!==-1?a:null)):r==="ddd"?(a=A.call(this._shortWeekdaysParse,l),a!==-1||(a=A.call(this._weekdaysParse,l),a!==-1)?a:(a=A.call(this._minWeekdaysParse,l),a!==-1?a:null)):(a=A.call(this._minWeekdaysParse,l),a!==-1||(a=A.call(this._weekdaysParse,l),a!==-1)?a:(a=A.call(this._shortWeekdaysParse,l),a!==-1?a:null))}function pi(e,r,n){var t,a,s;if(this._weekdaysParseExact)return ki.call(this,e,r,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),t=0;t<7;t++){if(a=me([2e3,1]).day(t),n&&!this._fullWeekdaysParse[t]&&(this._fullWeekdaysParse[t]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[t]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[t]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[t]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[t]=new RegExp(s.replace(".",""),"i")),n&&r==="dddd"&&this._fullWeekdaysParse[t].test(e))return t;if(n&&r==="ddd"&&this._shortWeekdaysParse[t].test(e))return t;if(n&&r==="dd"&&this._minWeekdaysParse[t].test(e))return t;if(!n&&this._weekdaysParse[t].test(e))return t}}function hi(e){if(!this.isValid())return e!=null?this:NaN;var r=fr(this,"Day");return e!=null?(e=si(e,this.localeData()),this.add(e-r,"d")):r}function yi(e){if(!this.isValid())return e!=null?this:NaN;var r=(this.day()+7-this.localeData()._week.dow)%7;return e==null?r:this.add(e-r,"d")}function vi(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var r=ii(e,this.localeData());return this.day(this.day()%7?r:r-7)}else return this.day()||7}function bi(e){return this._weekdaysParseExact?(w(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(w(this,"_weekdaysRegex")||(this._weekdaysRegex=ui),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ti(e){return this._weekdaysParseExact?(w(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(w(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=di),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function _i(e){return this._weekdaysParseExact?(w(this,"_weekdaysRegex")||Vn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(w(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=mi),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Vn(){function e(c,h){return h.length-c.length}var r=[],n=[],t=[],a=[],s,l,o,u,g;for(s=0;s<7;s++)l=me([2e3,1]).day(s),o=be(this.weekdaysMin(l,"")),u=be(this.weekdaysShort(l,"")),g=be(this.weekdays(l,"")),r.push(o),n.push(u),t.push(g),a.push(o),a.push(u),a.push(g);r.sort(e),n.sort(e),t.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function In(){return this.hours()%12||12}function wi(){return this.hours()||24}p("H",["HH",2],0,"hour");p("h",["hh",2],0,In);p("k",["kk",2],0,wi);p("hmm",0,0,function(){return""+In.apply(this)+de(this.minutes(),2)});p("hmmss",0,0,function(){return""+In.apply(this)+de(this.minutes(),2)+de(this.seconds(),2)});p("Hmm",0,0,function(){return""+this.hours()+de(this.minutes(),2)});p("Hmmss",0,0,function(){return""+this.hours()+de(this.minutes(),2)+de(this.seconds(),2)});function Ht(e,r){p(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),r)})}Ht("a",!0);Ht("A",!1);function Ct(e,r){return r._meridiemParse}f("a",Ct);f("A",Ct);f("H",R,Bn);f("h",R,rr);f("k",R,rr);f("HH",R,z);f("hh",R,z);f("kk",R,z);f("hmm",Ft);f("hmmss",Bt);f("Hmm",Ft);f("Hmmss",Bt);j(["H","HH"],Y);j(["k","kk"],function(e,r,n){var t=T(e);r[Y]=t===24?0:t});j(["a","A"],function(e,r,n){n._isPm=n._locale.isPM(e),n._meridiem=e});j(["h","hh"],function(e,r,n){r[Y]=T(e),b(n).bigHour=!0});j("hmm",function(e,r,n){var t=e.length-2;r[Y]=T(e.substr(0,t)),r[re]=T(e.substr(t)),b(n).bigHour=!0});j("hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Y]=T(e.substr(0,t)),r[re]=T(e.substr(t,2)),r[ve]=T(e.substr(a)),b(n).bigHour=!0});j("Hmm",function(e,r,n){var t=e.length-2;r[Y]=T(e.substr(0,t)),r[re]=T(e.substr(t))});j("Hmmss",function(e,r,n){var t=e.length-4,a=e.length-2;r[Y]=T(e.substr(0,t)),r[re]=T(e.substr(t,2)),r[ve]=T(e.substr(a))});function Si(e){return(e+"").toLowerCase().charAt(0)==="p"}var qi=/[ap]\.?m?\.?/i,ji=nr("Hours",!0);function Mi(e,r,n){return e>11?n?"pm":"PM":n?"am":"AM"}var $t={calendar:ks,longDateFormat:vs,invalidDate:Ts,ordinal:ws,dayOfMonthOrdinalParse:Ss,relativeTime:js,months:Gs,monthsShort:Vt,week:ei,weekdays:li,weekdaysMin:oi,weekdaysShort:Wt,meridiemParse:qi},P={},lr={},pr;function xi(e,r){var n,t=Math.min(e.length,r.length);for(n=0;n<t;n+=1)if(e[n]!==r[n])return n;return t}function nt(e){return e&&e.toLowerCase().replace("_","-")}function Ri(e){for(var r=0,n,t,a,s;r<e.length;){for(s=nt(e[r]).split("-"),n=s.length,t=nt(e[r+1]),t=t?t.split("-"):null;n>0;){if(a=Jr(s.slice(0,n).join("-")),a)return a;if(t&&t.length>=n&&xi(s,t)>=n-1)break;n--}r++}return pr}function Oi(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Jr(e){var r=null,n;if(P[e]===void 0&&typeof module<"u"&&module&&module.exports&&Oi(e))try{r=pr._abbr,n=require,n("./locale/"+e),Re(r)}catch{P[e]=null}return P[e]}function Re(e,r){var n;return e&&(H(r)?n=we(e):n=En(e,r),n?pr=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),pr._abbr}function En(e,r){if(r!==null){var n,t=$t;if(r.abbr=e,P[e]!=null)Ot("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=P[e]._config;else if(r.parentLocale!=null)if(P[r.parentLocale]!=null)t=P[r.parentLocale]._config;else if(n=Jr(r.parentLocale),n!=null)t=n._config;else return lr[r.parentLocale]||(lr[r.parentLocale]=[]),lr[r.parentLocale].push({name:e,config:r}),null;return P[e]=new On(kn(t,r)),lr[e]&&lr[e].forEach(function(a){En(a.name,a.config)}),Re(e),P[e]}else return delete P[e],null}function Di(e,r){if(r!=null){var n,t,a=$t;P[e]!=null&&P[e].parentLocale!=null?P[e].set(kn(P[e]._config,r)):(t=Jr(e),t!=null&&(a=t._config),r=kn(a,r),t==null&&(r.abbr=e),n=new On(r),n.parentLocale=P[e],P[e]=n),Re(e)}else P[e]!=null&&(P[e].parentLocale!=null?(P[e]=P[e].parentLocale,e===Re()&&Re(e)):P[e]!=null&&delete P[e]);return P[e]}function we(e){var r;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return pr;if(!ne(e)){if(r=Jr(e),r)return r;e=[e]}return Ri(e)}function Pi(){return pn(P)}function Un(e){var r,n=e._a;return n&&b(e).overflow===-2&&(r=n[ye]<0||n[ye]>11?ye:n[oe]<1||n[oe]>Yn(n[U],n[ye])?oe:n[Y]<0||n[Y]>24||n[Y]===24&&(n[re]!==0||n[ve]!==0||n[Ee]!==0)?Y:n[re]<0||n[re]>59?re:n[ve]<0||n[ve]>59?ve:n[Ee]<0||n[Ee]>999?Ee:-1,b(e)._overflowDayOfYear&&(r<U||r>oe)&&(r=oe),b(e)._overflowWeeks&&r===-1&&(r=Ys),b(e)._overflowWeekday&&r===-1&&(r=Ns),b(e).overflow=r),e}var Ai=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Fi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bi=/Z|[+-]\d\d(?::?\d\d)?/,jr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],un=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Yi=/^\/?Date\((-?\d+)/i,Ni=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Vi={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function zt(e){var r,n,t=e._i,a=Ai.exec(t)||Fi.exec(t),s,l,o,u,g=jr.length,c=un.length;if(a){for(b(e).iso=!0,r=0,n=g;r<n;r++)if(jr[r][1].exec(a[1])){l=jr[r][0],s=jr[r][2]!==!1;break}if(l==null){e._isValid=!1;return}if(a[3]){for(r=0,n=c;r<n;r++)if(un[r][1].exec(a[3])){o=(a[2]||" ")+un[r][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Bi.exec(a[4]))u="Z";else{e._isValid=!1;return}e._f=l+(o||"")+(u||""),Ln(e)}else e._isValid=!1}function Ii(e,r,n,t,a,s){var l=[Ei(e),Vt.indexOf(r),parseInt(n,10),parseInt(t,10),parseInt(a,10)];return s&&l.push(parseInt(s,10)),l}function Ei(e){var r=parseInt(e,10);return r<=49?2e3+r:r<=999?1900+r:r}function Ui(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Gi(e,r,n){if(e){var t=Wt.indexOf(e),a=new Date(r[0],r[1],r[2]).getDay();if(t!==a)return b(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Li(e,r,n){if(e)return Vi[e];if(r)return 0;var t=parseInt(n,10),a=t%100,s=(t-a)/100;return s*60+a}function Kt(e){var r=Ni.exec(Ui(e._i)),n;if(r){if(n=Ii(r[4],r[3],r[2],r[5],r[6],r[7]),!Gi(r[1],n,e))return;e._a=n,e._tzm=Li(r[8],r[9],r[10]),e._d=cr.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),b(e).rfc2822=!0}else e._isValid=!1}function Wi(e){var r=Yi.exec(e._i);if(r!==null){e._d=new Date(+r[1]);return}if(zt(e),e._isValid===!1)delete e._isValid;else return;if(Kt(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:m.createFromInputFallback(e)}m.createFromInputFallback=J("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function $e(e,r,n){return e??r??n}function Hi(e){var r=new Date(m.now());return e._useUTC?[r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()]:[r.getFullYear(),r.getMonth(),r.getDate()]}function Gn(e){var r,n,t=[],a,s,l;if(!e._d){for(a=Hi(e),e._w&&e._a[oe]==null&&e._a[ye]==null&&Ci(e),e._dayOfYear!=null&&(l=$e(e._a[U],a[U]),(e._dayOfYear>mr(l)||e._dayOfYear===0)&&(b(e)._overflowDayOfYear=!0),n=cr(l,0,e._dayOfYear),e._a[ye]=n.getUTCMonth(),e._a[oe]=n.getUTCDate()),r=0;r<3&&e._a[r]==null;++r)e._a[r]=t[r]=a[r];for(;r<7;r++)e._a[r]=t[r]=e._a[r]==null?r===2?1:0:e._a[r];e._a[Y]===24&&e._a[re]===0&&e._a[ve]===0&&e._a[Ee]===0&&(e._nextDay=!0,e._a[Y]=0),e._d=(e._useUTC?cr:Qs).apply(null,t),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Y]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(b(e).weekdayMismatch=!0)}}function Ci(e){var r,n,t,a,s,l,o,u,g;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(s=1,l=4,n=$e(r.GG,e._a[U],kr(x(),1,4).year),t=$e(r.W,1),a=$e(r.E,1),(a<1||a>7)&&(u=!0)):(s=e._locale._week.dow,l=e._locale._week.doy,g=kr(x(),s,l),n=$e(r.gg,e._a[U],g.year),t=$e(r.w,g.week),r.d!=null?(a=r.d,(a<0||a>6)&&(u=!0)):r.e!=null?(a=r.e+s,(r.e<0||r.e>6)&&(u=!0)):a=s),t<1||t>Te(n,s,l)?b(e)._overflowWeeks=!0:u!=null?b(e)._overflowWeekday=!0:(o=Lt(n,t,a,s,l),e._a[U]=o.year,e._dayOfYear=o.dayOfYear)}m.ISO_8601=function(){};m.RFC_2822=function(){};function Ln(e){if(e._f===m.ISO_8601){zt(e);return}if(e._f===m.RFC_2822){Kt(e);return}e._a=[],b(e).empty=!0;var r=""+e._i,n,t,a,s,l,o=r.length,u=0,g,c;for(a=Dt(e._f,e._locale).match(Dn)||[],c=a.length,n=0;n<c;n++)s=a[n],t=(r.match(As(s,e))||[])[0],t&&(l=r.substr(0,r.indexOf(t)),l.length>0&&b(e).unusedInput.push(l),r=r.slice(r.indexOf(t)+t.length),u+=t.length),Ke[s]?(t?b(e).empty=!1:b(e).unusedTokens.push(s),Bs(s,t,e)):e._strict&&!t&&b(e).unusedTokens.push(s);b(e).charsLeftOver=o-u,r.length>0&&b(e).unusedInput.push(r),e._a[Y]<=12&&b(e).bigHour===!0&&e._a[Y]>0&&(b(e).bigHour=void 0),b(e).parsedDateParts=e._a.slice(0),b(e).meridiem=e._meridiem,e._a[Y]=$i(e._locale,e._a[Y],e._meridiem),g=b(e).era,g!==null&&(e._a[U]=e._locale.erasConvertYear(g,e._a[U])),Gn(e),Un(e)}function $i(e,r,n){var t;return n==null?r:e.meridiemHour!=null?e.meridiemHour(r,n):(e.isPM!=null&&(t=e.isPM(n),t&&r<12&&(r+=12),!t&&r===12&&(r=0)),r)}function zi(e){var r,n,t,a,s,l,o=!1,u=e._f.length;if(u===0){b(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<u;a++)s=0,l=!1,r=Rn({},e),e._useUTC!=null&&(r._useUTC=e._useUTC),r._f=e._f[a],Ln(r),xn(r)&&(l=!0),s+=b(r).charsLeftOver,s+=b(r).unusedTokens.length*10,b(r).score=s,o?s<t&&(t=s,n=r):(t==null||s<t||l)&&(t=s,n=r,l&&(o=!0));Me(e,n||r)}function Ki(e){if(!e._d){var r=Pn(e._i),n=r.day===void 0?r.date:r.day;e._a=xt([r.year,r.month,n,r.hour,r.minute,r.second,r.millisecond],function(t){return t&&parseInt(t,10)}),Gn(e)}}function Zi(e){var r=new vr(Un(Zt(e)));return r._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Zt(e){var r=e._i,n=e._f;return e._locale=e._locale||we(e._l),r===null||n===void 0&&r===""?Wr({nullInput:!0}):(typeof r=="string"&&(e._i=r=e._locale.preparse(r)),te(r)?new vr(Un(r)):(yr(r)?e._d=r:ne(n)?zi(e):n?Ln(e):Ji(e),xn(e)||(e._d=null),e))}function Ji(e){var r=e._i;H(r)?e._d=new Date(m.now()):yr(r)?e._d=new Date(r.valueOf()):typeof r=="string"?Wi(e):ne(r)?(e._a=xt(r.slice(0),function(n){return parseInt(n,10)}),Gn(e)):Ue(r)?Ki(e):_e(r)?e._d=new Date(r):m.createFromInputFallback(e)}function Jt(e,r,n,t,a){var s={};return(r===!0||r===!1)&&(t=r,r=void 0),(n===!0||n===!1)&&(t=n,n=void 0),(Ue(e)&&Mn(e)||ne(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=n,s._i=e,s._f=r,s._strict=t,Zi(s)}function x(e,r,n,t){return Jt(e,r,n,t,!1)}var Qi=J("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=x.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Wr()}),Xi=J("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=x.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Wr()});function Qt(e,r){var n,t;if(r.length===1&&ne(r[0])&&(r=r[0]),!r.length)return x();for(n=r[0],t=1;t<r.length;++t)(!r[t].isValid()||r[t][e](n))&&(n=r[t]);return n}function el(){var e=[].slice.call(arguments,0);return Qt("isBefore",e)}function rl(){var e=[].slice.call(arguments,0);return Qt("isAfter",e)}var nl=function(){return Date.now?Date.now():+new Date},or=["year","quarter","month","week","day","hour","minute","second","millisecond"];function tl(e){var r,n=!1,t,a=or.length;for(r in e)if(w(e,r)&&!(A.call(or,r)!==-1&&(e[r]==null||!isNaN(e[r]))))return!1;for(t=0;t<a;++t)if(e[or[t]]){if(n)return!1;parseFloat(e[or[t]])!==T(e[or[t]])&&(n=!0)}return!0}function al(){return this._isValid}function sl(){return ae(NaN)}function Qr(e){var r=Pn(e),n=r.year||0,t=r.quarter||0,a=r.month||0,s=r.week||r.isoWeek||0,l=r.day||0,o=r.hour||0,u=r.minute||0,g=r.second||0,c=r.millisecond||0;this._isValid=tl(r),this._milliseconds=+c+g*1e3+u*6e4+o*1e3*60*60,this._days=+l+s*7,this._months=+a+t*3+n*12,this._data={},this._locale=we(),this._bubble()}function Ar(e){return e instanceof Qr}function yn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function il(e,r,n){var t=Math.min(e.length,r.length),a=Math.abs(e.length-r.length),s=0,l;for(l=0;l<t;l++)T(e[l])!==T(r[l])&&s++;return s+a}function Xt(e,r){p(e,0,0,function(){var n=this.utcOffset(),t="+";return n<0&&(n=-n,t="-"),t+de(~~(n/60),2)+r+de(~~n%60,2)})}Xt("Z",":");Xt("ZZ","");f("Z",Kr);f("ZZ",Kr);j(["Z","ZZ"],function(e,r,n){n._useUTC=!0,n._tzm=Wn(Kr,e)});var ll=/([\+\-]|\d\d)/gi;function Wn(e,r){var n=(r||"").match(e),t,a,s;return n===null?null:(t=n[n.length-1]||[],a=(t+"").match(ll)||["-",0,0],s=+(a[1]*60)+T(a[2]),s===0?0:a[0]==="+"?s:-s)}function Hn(e,r){var n,t;return r._isUTC?(n=r.clone(),t=(te(e)||yr(e)?e.valueOf():x(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+t),m.updateOffset(n,!1),n):x(e).local()}function vn(e){return-Math.round(e._d.getTimezoneOffset())}m.updateOffset=function(){};function ol(e,r,n){var t=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Wn(Kr,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&r&&(a=vn(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),t!==e&&(!r||this._changeInProgress?na(this,ae(e-t,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,m.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?t:vn(this)}function ul(e,r){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,r),this):-this.utcOffset()}function dl(e){return this.utcOffset(0,e)}function ml(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(vn(this),"m")),this}function gl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Wn(Ds,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function fl(e){return this.isValid()?(e=e?x(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function cl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function kl(){if(!H(this._isDSTShifted))return this._isDSTShifted;var e={},r;return Rn(e,this),e=Zt(e),e._a?(r=e._isUTC?me(e._a):x(e._a),this._isDSTShifted=this.isValid()&&il(e._a,r.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function pl(){return this.isValid()?!this._isUTC:!1}function hl(){return this.isValid()?this._isUTC:!1}function ea(){return this.isValid()?this._isUTC&&this._offset===0:!1}var yl=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,vl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ae(e,r){var n=e,t=null,a,s,l;return Ar(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:_e(e)||!isNaN(+e)?(n={},r?n[r]=+e:n.milliseconds=+e):(t=yl.exec(e))?(a=t[1]==="-"?-1:1,n={y:0,d:T(t[oe])*a,h:T(t[Y])*a,m:T(t[re])*a,s:T(t[ve])*a,ms:T(yn(t[Ee]*1e3))*a}):(t=vl.exec(e))?(a=t[1]==="-"?-1:1,n={y:Ie(t[2],a),M:Ie(t[3],a),w:Ie(t[4],a),d:Ie(t[5],a),h:Ie(t[6],a),m:Ie(t[7],a),s:Ie(t[8],a)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(l=bl(x(n.from),x(n.to)),n={},n.ms=l.milliseconds,n.M=l.months),s=new Qr(n),Ar(e)&&w(e,"_locale")&&(s._locale=e._locale),Ar(e)&&w(e,"_isValid")&&(s._isValid=e._isValid),s}ae.fn=Qr.prototype;ae.invalid=sl;function Ie(e,r){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*r}function tt(e,r){var n={};return n.months=r.month()-e.month()+(r.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(r)&&--n.months,n.milliseconds=+r-+e.clone().add(n.months,"M"),n}function bl(e,r){var n;return e.isValid()&&r.isValid()?(r=Hn(r,e),e.isBefore(r)?n=tt(e,r):(n=tt(r,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function ra(e,r){return function(n,t){var a,s;return t!==null&&!isNaN(+t)&&(Ot(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=t,t=s),a=ae(n,t),na(this,a,e),this}}function na(e,r,n,t){var a=r._milliseconds,s=yn(r._days),l=yn(r._months);e.isValid()&&(t=t??!0,l&&Et(e,fr(e,"Month")+l*n),s&&Nt(e,"Date",fr(e,"Date")+s*n),a&&e._d.setTime(e._d.valueOf()+a*n),t&&m.updateOffset(e,s||l))}var Tl=ra(1,"add"),_l=ra(-1,"subtract");function ta(e){return typeof e=="string"||e instanceof String}function wl(e){return te(e)||yr(e)||ta(e)||_e(e)||ql(e)||Sl(e)||e===null||e===void 0}function Sl(e){var r=Ue(e)&&!Mn(e),n=!1,t=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,l=t.length;for(a=0;a<l;a+=1)s=t[a],n=n||w(e,s);return r&&n}function ql(e){var r=ne(e),n=!1;return r&&(n=e.filter(function(t){return!_e(t)&&ta(e)}).length===0),r&&n}function jl(e){var r=Ue(e)&&!Mn(e),n=!1,t=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<t.length;a+=1)s=t[a],n=n||w(e,s);return r&&n}function Ml(e,r){var n=e.diff(r,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function xl(e,r){arguments.length===1&&(arguments[0]?wl(arguments[0])?(e=arguments[0],r=void 0):jl(arguments[0])&&(r=arguments[0],e=void 0):(e=void 0,r=void 0));var n=e||x(),t=Hn(n,this).startOf("day"),a=m.calendarFormat(this,t)||"sameElse",s=r&&(ge(r[a])?r[a].call(this,n):r[a]);return this.format(s||this.localeData().calendar(a,this,x(n)))}function Rl(){return new vr(this)}function Ol(e,r){var n=te(e)?e:x(e);return this.isValid()&&n.isValid()?(r=Q(r)||"millisecond",r==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(r).valueOf()):!1}function Dl(e,r){var n=te(e)?e:x(e);return this.isValid()&&n.isValid()?(r=Q(r)||"millisecond",r==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(r).valueOf()<n.valueOf()):!1}function Pl(e,r,n,t){var a=te(e)?e:x(e),s=te(r)?r:x(r);return this.isValid()&&a.isValid()&&s.isValid()?(t=t||"()",(t[0]==="("?this.isAfter(a,n):!this.isBefore(a,n))&&(t[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function Al(e,r){var n=te(e)?e:x(e),t;return this.isValid()&&n.isValid()?(r=Q(r)||"millisecond",r==="millisecond"?this.valueOf()===n.valueOf():(t=n.valueOf(),this.clone().startOf(r).valueOf()<=t&&t<=this.clone().endOf(r).valueOf())):!1}function Fl(e,r){return this.isSame(e,r)||this.isAfter(e,r)}function Bl(e,r){return this.isSame(e,r)||this.isBefore(e,r)}function Yl(e,r,n){var t,a,s;if(!this.isValid())return NaN;if(t=Hn(e,this),!t.isValid())return NaN;switch(a=(t.utcOffset()-this.utcOffset())*6e4,r=Q(r),r){case"year":s=Fr(this,t)/12;break;case"month":s=Fr(this,t);break;case"quarter":s=Fr(this,t)/3;break;case"second":s=(this-t)/1e3;break;case"minute":s=(this-t)/6e4;break;case"hour":s=(this-t)/36e5;break;case"day":s=(this-t-a)/864e5;break;case"week":s=(this-t-a)/6048e5;break;default:s=this-t}return n?s:K(s)}function Fr(e,r){if(e.date()<r.date())return-Fr(r,e);var n=(r.year()-e.year())*12+(r.month()-e.month()),t=e.clone().add(n,"months"),a,s;return r-t<0?(a=e.clone().add(n-1,"months"),s=(r-t)/(t-a)):(a=e.clone().add(n+1,"months"),s=(r-t)/(a-t)),-(n+s)||0}m.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";m.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Nl(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Vl(e){if(!this.isValid())return null;var r=e!==!0,n=r?this.clone().utc():this;return n.year()<0||n.year()>9999?Pr(n,r?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):ge(Date.prototype.toISOString)?r?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Pr(n,"Z")):Pr(n,r?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Il(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",r="",n,t,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",r="Z"),n="["+e+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=r+'[")]',this.format(n+t+a+s)}function El(e){e||(e=this.isUtc()?m.defaultFormatUtc:m.defaultFormat);var r=Pr(this,e);return this.localeData().postformat(r)}function Ul(e,r){return this.isValid()&&(te(e)&&e.isValid()||x(e).isValid())?ae({to:this,from:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Gl(e){return this.from(x(),e)}function Ll(e,r){return this.isValid()&&(te(e)&&e.isValid()||x(e).isValid())?ae({from:this,to:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Wl(e){return this.to(x(),e)}function aa(e){var r;return e===void 0?this._locale._abbr:(r=we(e),r!=null&&(this._locale=r),this)}var sa=J("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function ia(){return this._locale}var Ur=1e3,Ze=60*Ur,Gr=60*Ze,la=(365*400+97)*24*Gr;function Je(e,r){return(e%r+r)%r}function oa(e,r,n){return e<100&&e>=0?new Date(e+400,r,n)-la:new Date(e,r,n).valueOf()}function ua(e,r,n){return e<100&&e>=0?Date.UTC(e+400,r,n)-la:Date.UTC(e,r,n)}function Hl(e){var r,n;if(e=Q(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?ua:oa,e){case"year":r=n(this.year(),0,1);break;case"quarter":r=n(this.year(),this.month()-this.month()%3,1);break;case"month":r=n(this.year(),this.month(),1);break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=n(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=Je(r+(this._isUTC?0:this.utcOffset()*Ze),Gr);break;case"minute":r=this._d.valueOf(),r-=Je(r,Ze);break;case"second":r=this._d.valueOf(),r-=Je(r,Ur);break}return this._d.setTime(r),m.updateOffset(this,!0),this}function Cl(e){var r,n;if(e=Q(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?ua:oa,e){case"year":r=n(this.year()+1,0,1)-1;break;case"quarter":r=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=n(this.year(),this.month()+1,1)-1;break;case"week":r=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=Gr-Je(r+(this._isUTC?0:this.utcOffset()*Ze),Gr)-1;break;case"minute":r=this._d.valueOf(),r+=Ze-Je(r,Ze)-1;break;case"second":r=this._d.valueOf(),r+=Ur-Je(r,Ur)-1;break}return this._d.setTime(r),m.updateOffset(this,!0),this}function $l(){return this._d.valueOf()-(this._offset||0)*6e4}function zl(){return Math.floor(this.valueOf()/1e3)}function Kl(){return new Date(this.valueOf())}function Zl(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Jl(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Ql(){return this.isValid()?this.toISOString():null}function Xl(){return xn(this)}function eo(){return Me({},b(this))}function ro(){return b(this).overflow}function no(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}p("N",0,0,"eraAbbr");p("NN",0,0,"eraAbbr");p("NNN",0,0,"eraAbbr");p("NNNN",0,0,"eraName");p("NNNNN",0,0,"eraNarrow");p("y",["y",1],"yo","eraYear");p("y",["yy",2],0,"eraYear");p("y",["yyy",3],0,"eraYear");p("y",["yyyy",4],0,"eraYear");f("N",Cn);f("NN",Cn);f("NNN",Cn);f("NNNN",co);f("NNNNN",ko);j(["N","NN","NNN","NNNN","NNNNN"],function(e,r,n,t){var a=n._locale.erasParse(e,t,n._strict);a?b(n).era=a:b(n).invalidEra=e});f("y",er);f("yy",er);f("yyy",er);f("yyyy",er);f("yo",po);j(["y","yy","yyy","yyyy"],U);j(["yo"],function(e,r,n,t){var a;n._locale._eraYearOrdinalRegex&&(a=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?r[U]=n._locale.eraYearOrdinalParse(e,a):r[U]=parseInt(e,10)});function to(e,r){var n,t,a,s=this._eras||we("en")._eras;for(n=0,t=s.length;n<t;++n){switch(typeof s[n].since){case"string":a=m(s[n].since).startOf("day"),s[n].since=a.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":a=m(s[n].until).startOf("day").valueOf(),s[n].until=a.valueOf();break}}return s}function ao(e,r,n){var t,a,s=this.eras(),l,o,u;for(e=e.toUpperCase(),t=0,a=s.length;t<a;++t)if(l=s[t].name.toUpperCase(),o=s[t].abbr.toUpperCase(),u=s[t].narrow.toUpperCase(),n)switch(r){case"N":case"NN":case"NNN":if(o===e)return s[t];break;case"NNNN":if(l===e)return s[t];break;case"NNNNN":if(u===e)return s[t];break}else if([l,o,u].indexOf(e)>=0)return s[t]}function so(e,r){var n=e.since<=e.until?1:-1;return r===void 0?m(e.since).year():m(e.since).year()+(r-e.offset)*n}function io(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].name;return""}function lo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].narrow;return""}function oo(){var e,r,n,t=this.localeData().eras();for(e=0,r=t.length;e<r;++e)if(n=this.clone().startOf("day").valueOf(),t[e].since<=n&&n<=t[e].until||t[e].until<=n&&n<=t[e].since)return t[e].abbr;return""}function uo(){var e,r,n,t,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(n=a[e].since<=a[e].until?1:-1,t=this.clone().startOf("day").valueOf(),a[e].since<=t&&t<=a[e].until||a[e].until<=t&&t<=a[e].since)return(this.year()-m(a[e].since).year())*n+a[e].offset;return this.year()}function mo(e){return w(this,"_erasNameRegex")||$n.call(this),e?this._erasNameRegex:this._erasRegex}function go(e){return w(this,"_erasAbbrRegex")||$n.call(this),e?this._erasAbbrRegex:this._erasRegex}function fo(e){return w(this,"_erasNarrowRegex")||$n.call(this),e?this._erasNarrowRegex:this._erasRegex}function Cn(e,r){return r.erasAbbrRegex(e)}function co(e,r){return r.erasNameRegex(e)}function ko(e,r){return r.erasNarrowRegex(e)}function po(e,r){return r._eraYearOrdinalRegex||er}function $n(){var e=[],r=[],n=[],t=[],a,s,l,o,u,g=this.eras();for(a=0,s=g.length;a<s;++a)l=be(g[a].name),o=be(g[a].abbr),u=be(g[a].narrow),r.push(l),e.push(o),n.push(u),t.push(l),t.push(o),t.push(u);this._erasRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}p(0,["gg",2],0,function(){return this.weekYear()%100});p(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Xr(e,r){p(0,[e,e.length],0,r)}Xr("gggg","weekYear");Xr("ggggg","weekYear");Xr("GGGG","isoWeekYear");Xr("GGGGG","isoWeekYear");f("G",zr);f("g",zr);f("GG",R,z);f("gg",R,z);f("GGGG",Fn,An);f("gggg",Fn,An);f("GGGGG",$r,Hr);f("ggggg",$r,Hr);Tr(["gggg","ggggg","GGGG","GGGGG"],function(e,r,n,t){r[t.substr(0,2)]=T(e)});Tr(["gg","GG"],function(e,r,n,t){r[t]=m.parseTwoDigitYear(e)});function ho(e){return da.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function yo(e){return da.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function vo(){return Te(this.year(),1,4)}function bo(){return Te(this.isoWeekYear(),1,4)}function To(){var e=this.localeData()._week;return Te(this.year(),e.dow,e.doy)}function _o(){var e=this.localeData()._week;return Te(this.weekYear(),e.dow,e.doy)}function da(e,r,n,t,a){var s;return e==null?kr(this,t,a).year:(s=Te(e,t,a),r>s&&(r=s),wo.call(this,e,r,n,t,a))}function wo(e,r,n,t,a){var s=Lt(e,r,n,t,a),l=cr(s.year,0,s.dayOfYear);return this.year(l.getUTCFullYear()),this.month(l.getUTCMonth()),this.date(l.getUTCDate()),this}p("Q",0,"Qo","quarter");f("Q",Pt);j("Q",function(e,r){r[ye]=(T(e)-1)*3});function So(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}p("D",["DD",2],"Do","date");f("D",R,rr);f("DD",R,z);f("Do",function(e,r){return e?r._dayOfMonthOrdinalParse||r._ordinalParse:r._dayOfMonthOrdinalParseLenient});j(["D","DD"],oe);j("Do",function(e,r){r[oe]=T(e.match(R)[0])});var ma=nr("Date",!0);p("DDD",["DDDD",3],"DDDo","dayOfYear");f("DDD",Cr);f("DDDD",At);j(["DDD","DDDD"],function(e,r,n){n._dayOfYear=T(e)});function qo(e){var r=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?r:this.add(e-r,"d")}p("m",["mm",2],0,"minute");f("m",R,Bn);f("mm",R,z);j(["m","mm"],re);var jo=nr("Minutes",!1);p("s",["ss",2],0,"second");f("s",R,Bn);f("ss",R,z);j(["s","ss"],ve);var Mo=nr("Seconds",!1);p("S",0,0,function(){return~~(this.millisecond()/100)});p(0,["SS",2],0,function(){return~~(this.millisecond()/10)});p(0,["SSS",3],0,"millisecond");p(0,["SSSS",4],0,function(){return this.millisecond()*10});p(0,["SSSSS",5],0,function(){return this.millisecond()*100});p(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});p(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});p(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});p(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});f("S",Cr,Pt);f("SS",Cr,z);f("SSS",Cr,At);var xe,ga;for(xe="SSSS";xe.length<=9;xe+="S")f(xe,er);function xo(e,r){r[Ee]=T(("0."+e)*1e3)}for(xe="S";xe.length<=9;xe+="S")j(xe,xo);ga=nr("Milliseconds",!1);p("z",0,0,"zoneAbbr");p("zz",0,0,"zoneName");function Ro(){return this._isUTC?"UTC":""}function Oo(){return this._isUTC?"Coordinated Universal Time":""}var d=vr.prototype;d.add=Tl;d.calendar=xl;d.clone=Rl;d.diff=Yl;d.endOf=Cl;d.format=El;d.from=Ul;d.fromNow=Gl;d.to=Ll;d.toNow=Wl;d.get=Is;d.invalidAt=ro;d.isAfter=Ol;d.isBefore=Dl;d.isBetween=Pl;d.isSame=Al;d.isSameOrAfter=Fl;d.isSameOrBefore=Bl;d.isValid=Xl;d.lang=sa;d.locale=aa;d.localeData=ia;d.max=Xi;d.min=Qi;d.parsingFlags=eo;d.set=Es;d.startOf=Hl;d.subtract=_l;d.toArray=Zl;d.toObject=Jl;d.toDate=Kl;d.toISOString=Vl;d.inspect=Il;typeof Symbol<"u"&&Symbol.for!=null&&(d[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});d.toJSON=Ql;d.toString=Nl;d.unix=zl;d.valueOf=$l;d.creationData=no;d.eraName=io;d.eraNarrow=lo;d.eraAbbr=oo;d.eraYear=uo;d.year=Yt;d.isLeapYear=Vs;d.weekYear=ho;d.isoWeekYear=yo;d.quarter=d.quarters=So;d.month=Ut;d.daysInMonth=Ks;d.week=d.weeks=ti;d.isoWeek=d.isoWeeks=ai;d.weeksInYear=To;d.weeksInWeekYear=_o;d.isoWeeksInYear=vo;d.isoWeeksInISOWeekYear=bo;d.date=ma;d.day=d.days=hi;d.weekday=yi;d.isoWeekday=vi;d.dayOfYear=qo;d.hour=d.hours=ji;d.minute=d.minutes=jo;d.second=d.seconds=Mo;d.millisecond=d.milliseconds=ga;d.utcOffset=ol;d.utc=dl;d.local=ml;d.parseZone=gl;d.hasAlignedHourOffset=fl;d.isDST=cl;d.isLocal=pl;d.isUtcOffset=hl;d.isUtc=ea;d.isUTC=ea;d.zoneAbbr=Ro;d.zoneName=Oo;d.dates=J("dates accessor is deprecated. Use date instead.",ma);d.months=J("months accessor is deprecated. Use month instead",Ut);d.years=J("years accessor is deprecated. Use year instead",Yt);d.zone=J("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",ul);d.isDSTShifted=J("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",kl);function Do(e){return x(e*1e3)}function Po(){return x.apply(null,arguments).parseZone()}function fa(e){return e}var S=On.prototype;S.calendar=ps;S.longDateFormat=bs;S.invalidDate=_s;S.ordinal=qs;S.preparse=fa;S.postformat=fa;S.relativeTime=Ms;S.pastFuture=xs;S.set=cs;S.eras=to;S.erasParse=ao;S.erasConvertYear=so;S.erasAbbrRegex=go;S.erasNameRegex=mo;S.erasNarrowRegex=fo;S.months=Hs;S.monthsShort=Cs;S.monthsParse=zs;S.monthsRegex=Js;S.monthsShortRegex=Zs;S.week=Xs;S.firstDayOfYear=ni;S.firstDayOfWeek=ri;S.weekdays=gi;S.weekdaysMin=ci;S.weekdaysShort=fi;S.weekdaysParse=pi;S.weekdaysRegex=bi;S.weekdaysShortRegex=Ti;S.weekdaysMinRegex=_i;S.isPM=Si;S.meridiem=Mi;function Lr(e,r,n,t){var a=we(),s=me().set(t,r);return a[n](s,e)}function ca(e,r,n){if(_e(e)&&(r=e,e=void 0),e=e||"",r!=null)return Lr(e,r,n,"month");var t,a=[];for(t=0;t<12;t++)a[t]=Lr(e,t,n,"month");return a}function zn(e,r,n,t){typeof e=="boolean"?(_e(r)&&(n=r,r=void 0),r=r||""):(r=e,n=r,e=!1,_e(r)&&(n=r,r=void 0),r=r||"");var a=we(),s=e?a._week.dow:0,l,o=[];if(n!=null)return Lr(r,(n+s)%7,t,"day");for(l=0;l<7;l++)o[l]=Lr(r,(l+s)%7,t,"day");return o}function Ao(e,r){return ca(e,r,"months")}function Fo(e,r){return ca(e,r,"monthsShort")}function Bo(e,r,n){return zn(e,r,n,"weekdays")}function Yo(e,r,n){return zn(e,r,n,"weekdaysShort")}function No(e,r,n){return zn(e,r,n,"weekdaysMin")}Re("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var r=e%10,n=T(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th";return e+n}});m.lang=J("moment.lang is deprecated. Use moment.locale instead.",Re);m.langData=J("moment.langData is deprecated. Use moment.localeData instead.",we);var pe=Math.abs;function Vo(){var e=this._data;return this._milliseconds=pe(this._milliseconds),this._days=pe(this._days),this._months=pe(this._months),e.milliseconds=pe(e.milliseconds),e.seconds=pe(e.seconds),e.minutes=pe(e.minutes),e.hours=pe(e.hours),e.months=pe(e.months),e.years=pe(e.years),this}function ka(e,r,n,t){var a=ae(r,n);return e._milliseconds+=t*a._milliseconds,e._days+=t*a._days,e._months+=t*a._months,e._bubble()}function Io(e,r){return ka(this,e,r,1)}function Eo(e,r){return ka(this,e,r,-1)}function at(e){return e<0?Math.floor(e):Math.ceil(e)}function Uo(){var e=this._milliseconds,r=this._days,n=this._months,t=this._data,a,s,l,o,u;return e>=0&&r>=0&&n>=0||e<=0&&r<=0&&n<=0||(e+=at(bn(n)+r)*864e5,r=0,n=0),t.milliseconds=e%1e3,a=K(e/1e3),t.seconds=a%60,s=K(a/60),t.minutes=s%60,l=K(s/60),t.hours=l%24,r+=K(l/24),u=K(pa(r)),n+=u,r-=at(bn(u)),o=K(n/12),n%=12,t.days=r,t.months=n,t.years=o,this}function pa(e){return e*4800/146097}function bn(e){return e*146097/4800}function Go(e){if(!this.isValid())return NaN;var r,n,t=this._milliseconds;if(e=Q(e),e==="month"||e==="quarter"||e==="year")switch(r=this._days+t/864e5,n=this._months+pa(r),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(r=this._days+Math.round(bn(this._months)),e){case"week":return r/7+t/6048e5;case"day":return r+t/864e5;case"hour":return r*24+t/36e5;case"minute":return r*1440+t/6e4;case"second":return r*86400+t/1e3;case"millisecond":return Math.floor(r*864e5)+t;default:throw new Error("Unknown unit "+e)}}function Se(e){return function(){return this.as(e)}}var ha=Se("ms"),Lo=Se("s"),Wo=Se("m"),Ho=Se("h"),Co=Se("d"),$o=Se("w"),zo=Se("M"),Ko=Se("Q"),Zo=Se("y"),Jo=ha;function Qo(){return ae(this)}function Xo(e){return e=Q(e),this.isValid()?this[e+"s"]():NaN}function Le(e){return function(){return this.isValid()?this._data[e]:NaN}}var eu=Le("milliseconds"),ru=Le("seconds"),nu=Le("minutes"),tu=Le("hours"),au=Le("days"),su=Le("months"),iu=Le("years");function lu(){return K(this.days()/7)}var he=Math.round,ze={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function ou(e,r,n,t,a){return a.relativeTime(r||1,!!n,e,t)}function uu(e,r,n,t){var a=ae(e).abs(),s=he(a.as("s")),l=he(a.as("m")),o=he(a.as("h")),u=he(a.as("d")),g=he(a.as("M")),c=he(a.as("w")),h=he(a.as("y")),y=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||l<=1&&["m"]||l<n.m&&["mm",l]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return n.w!=null&&(y=y||c<=1&&["w"]||c<n.w&&["ww",c]),y=y||g<=1&&["M"]||g<n.M&&["MM",g]||h<=1&&["y"]||["yy",h],y[2]=r,y[3]=+e>0,y[4]=t,ou.apply(null,y)}function du(e){return e===void 0?he:typeof e=="function"?(he=e,!0):!1}function mu(e,r){return ze[e]===void 0?!1:r===void 0?ze[e]:(ze[e]=r,e==="s"&&(ze.ss=r-1),!0)}function gu(e,r){if(!this.isValid())return this.localeData().invalidDate();var n=!1,t=ze,a,s;return typeof e=="object"&&(r=e,e=!1),typeof e=="boolean"&&(n=e),typeof r=="object"&&(t=Object.assign({},ze,r),r.s!=null&&r.ss==null&&(t.ss=r.s-1)),a=this.localeData(),s=uu(this,!n,t,a),n&&(s=a.pastFuture(+this,s)),a.postformat(s)}var dn=Math.abs;function He(e){return(e>0)-(e<0)||+e}function en(){if(!this.isValid())return this.localeData().invalidDate();var e=dn(this._milliseconds)/1e3,r=dn(this._days),n=dn(this._months),t,a,s,l,o=this.asSeconds(),u,g,c,h;return o?(t=K(e/60),a=K(t/60),e%=60,t%=60,s=K(n/12),n%=12,l=e?e.toFixed(3).replace(/\.?0+$/,""):"",u=o<0?"-":"",g=He(this._months)!==He(o)?"-":"",c=He(this._days)!==He(o)?"-":"",h=He(this._milliseconds)!==He(o)?"-":"",u+"P"+(s?g+s+"Y":"")+(n?g+n+"M":"")+(r?c+r+"D":"")+(a||t||e?"T":"")+(a?h+a+"H":"")+(t?h+t+"M":"")+(e?h+l+"S":"")):"P0D"}var _=Qr.prototype;_.isValid=al;_.abs=Vo;_.add=Io;_.subtract=Eo;_.as=Go;_.asMilliseconds=ha;_.asSeconds=Lo;_.asMinutes=Wo;_.asHours=Ho;_.asDays=Co;_.asWeeks=$o;_.asMonths=zo;_.asQuarters=Ko;_.asYears=Zo;_.valueOf=Jo;_._bubble=Uo;_.clone=Qo;_.get=Xo;_.milliseconds=eu;_.seconds=ru;_.minutes=nu;_.hours=tu;_.days=au;_.weeks=lu;_.months=su;_.years=iu;_.humanize=gu;_.toISOString=en;_.toString=en;_.toJSON=en;_.locale=aa;_.localeData=ia;_.toIsoString=J("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",en);_.lang=sa;p("X",0,0,"unix");p("x",0,0,"valueOf");f("x",zr);f("X",Ps);j("X",function(e,r,n){n._d=new Date(parseFloat(e)*1e3)});j("x",function(e,r,n){n._d=new Date(T(e))});//! moment.js
m.version="2.30.1";gs(x);m.fn=d;m.min=el;m.max=rl;m.now=nl;m.utc=me;m.unix=Do;m.months=Ao;m.isDate=yr;m.locale=Re;m.invalid=Wr;m.duration=ae;m.isMoment=te;m.weekdays=Bo;m.parseZone=Po;m.localeData=we;m.isDuration=Ar;m.monthsShort=Fo;m.weekdaysMin=No;m.defineLocale=En;m.updateLocale=Di;m.locales=Pi;m.weekdaysShort=Yo;m.normalizeUnits=Q;m.relativeTimeRounding=du;m.relativeTimeThreshold=mu;m.calendarFormat=Ml;m.prototype=d;m.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var ee=(e=>(e.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",e.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",e.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",e.GOD_TRO="GOD_TRO",e))(ee||{}),Kn=(e=>(e.VURDER_TILBAKEKREVING="5002",e))(Kn||{});const fu="_button_8q57x_1",cu="_cancelButton_8q57x_5",st={button:fu,cancelButton:cu},ku=(e,r)=>n=>n&&(Qa(n)(V(e.tom.toString()).subtract(1,"day"))||Xa(n)(e.fom))?r.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,pu=(e,r)=>{const n=V(e.forstePeriodeTomDato).add(1,"days"),t={fom:r.fom,tom:e.forstePeriodeTomDato},a={fom:n.format(Ya),tom:r.tom};return{forstePeriode:t,andrePeriode:a}},ya=({periodeData:e,showModal:r,cancelEvent:n,finnesBelopMed0Verdi:t,splitPeriod:a})=>{const s=Pe(),l=yt();return i.jsx(vt,{formMethods:l,onSubmit:o=>a(pu(o,e)),children:i.jsxs(Sr,{open:r,"aria-label":s.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[i.jsx(Sr.Header,{children:i.jsx(Br,{size:"small",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),i.jsx(Sr.Body,{children:i.jsxs(E,{gap:"4",children:[i.jsxs("div",{children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.Periode"})}),i.jsx($,{size:"small",children:`${V(e.fom.toString()).format(Qe)} - ${V(e.tom.toString()).format(Qe)}`})]}),i.jsx(Ba,{name:"forstePeriodeTomDato",control:l.control,label:i.jsx(k,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[I,Ja,ku(e,s)],fromDate:V(e.fom).toDate(),toDate:V(e.tom).toDate()}),t&&i.jsx(bt,{variant:"error",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),i.jsxs(Sr.Footer,{children:[i.jsx(Z,{size:"small",variant:"primary",className:st.button,disabled:!l.formState.isDirty,children:i.jsx(k,{id:"DelOppPeriodeModalImpl.Ok"})}),i.jsx(Z,{size:"small",variant:"secondary",onClick:n,className:st.cancelButton,type:"button",children:i.jsx(k,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};ya.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const hu="_margin_wnej3_37",mn={margin:hu},yu=!1,va=({setNestePeriode:e,setForrigePeriode:r,readOnly:n,lukkPeriode:t,periode:a,beregnBelop:s,behandlingUuid:l,oppdaterSplittedePerioder:o})=>{const u=Pe(),[g,c]=C.useState(!1),[h,y]=C.useState(!1),O=q=>{c(!0),q.preventDefault()},L=()=>{c(!1)},qe=q=>{y(!1);const se={belop:a.feilutbetaling,fom:q.forstePeriode.fom,tom:q.forstePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "},ie={belop:a.feilutbetaling,fom:q.andrePeriode.fom,tom:q.andrePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "};s({behandlingUuid:l,perioder:[se,ie]}).then(v=>{const{perioder:le}=v;if(le.some(Ae=>Ae.belop===0))y(!0);else{const Ae={fom:se.fom,tom:se.tom,feilutbetaling:le[0].belop},Fe={fom:ie.fom,tom:ie.tom,feilutbetaling:le[1].belop};L(),o([Ae,Fe])}})};return i.jsxs(ue,{children:[i.jsxs(Oe,{size:"small",children:[i.jsx(k,{id:"PeriodeController.Detaljer"}),yu]}),!n&&i.jsxs(i.Fragment,{children:[i.jsx(Qn,{}),i.jsx(Z,{className:mn.margin,size:"xsmall",icon:i.jsx(os,{"aria-hidden":!0}),onClick:O,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:i.jsx(k,{id:"PeriodeController.DelOppPerioden"})})]}),g&&i.jsx(ya,{cancelEvent:L,showModal:g,periodeData:a,splitPeriod:qe,finnesBelopMed0Verdi:h}),i.jsx(Qn,{}),i.jsx(Z,{className:mn.margin,size:"xsmall",icon:i.jsx(Tt,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.prevPeriod"}),children:i.jsx(k,{id:"PeriodeController.prevPeriodShort"})}),i.jsx(Z,{className:mn.margin,size:"xsmall",icon:i.jsx(_t,{"aria-hidden":!0}),onClick:e,variant:"secondary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:i.jsx(k,{id:"PeriodeController.nextPeriodShort"})}),i.jsx(Z,{size:"xsmall",icon:i.jsx(Na,{"aria-hidden":!0}),onClick:t,variant:"tertiary-neutral",type:"button",title:u.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};va.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const vu="_infoSummary_14r2l_1",bu="_positivNumber_14r2l_8",Tu="_redNumber_14r2l_12",_u="_resultName_14r2l_17",ur={infoSummary:vu,positivNumber:bu,redNumber:Tu,resultName:_u},ba=({fom:e,tom:r,feilutbetaling:n,arsakHendelseNavn:t})=>{const a=Va(e,r);return i.jsxs(E,{gap:"2",className:ur.infoSummary,children:[i.jsxs(ue,{justify:"space-between",children:[i.jsx(Oe,{size:"small",children:`${V(e).format(Qe)} - ${V(r).format(Qe)}`}),i.jsx($,{size:"small",children:a.formattedString})]}),i.jsxs(ue,{gap:"4",children:[i.jsxs($,{size:"small",className:ur.resultName,children:[i.jsx(k,{id:"PeriodeInformasjon.Feilutbetaling"}),":",i.jsx("span",{className:n?ur.redNumber:ur.positivNumber,children:Xe(n)})]}),t&&i.jsx($,{size:"small",className:ur.resultName,children:t})]})]})};ba.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var G=(e=>(e.FORSETT="FORSETT",e.GROVT_UAKTSOM="GROVT_UAKTSOM",e.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",e))(G||{});const wu=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var Ta=(e=>(e.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",e.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",e.STOERRELSE_BELOEP="STOERRELSE_BELOEP",e.TID_FRA_UTBETALING="TID_FRA_UTBETALING",e.ANNET="ANNET",e))(Ta||{});const _a=({name:e,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const t=Sn(),a=`${e}.skalDetTilleggesRenter`;return C.useEffect(()=>{t.getValues(a)===void 0&&t.setValue(a,!1)},[]),i.jsx("div",{children:i.jsxs(Ge,{alignOffset:n?320:360,children:[n&&i.jsxs(E,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx($,{size:"small",children:"100 %"}),i.jsx(De,{name:`${e}.skalDetTilleggesRenter`,control:t.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[I],radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:r,parse:s=>s==="true",isHorizontal:!0})]}),!n&&i.jsxs(E,{gap:"2",children:[i.jsxs("div",{children:[i.jsx(Yr,{children:i.jsx(k,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx($,{size:"small",children:"100 %"})]}),i.jsx($,{size:"small",children:i.jsx(k,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})};_a.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const hr="Egendefinert",Tn=["30","50","70",hr],Su="_suffix_cawxu_1",qu="_suffixGrovText_cawxu_4",ju="_labelPadding_cawxu_8",Mu="_inputFelt_cawxu_12",Ce={suffix:Su,suffixGrovText:qu,labelPadding:ju,inputFelt:Mu},it=qt(0),xu=es(99.99),Ru=e=>{const r=e.toString().replace(/\s/g,""),n=parseInt(r,10);return Number.isNaN(n)?"":n},Ou=(e,r)=>n=>{if((typeof n=="string"?Number(n):n)>=r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},wa=({name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,harMerEnnEnYtelse:a,feilutbetalingBelop:s,andelSomTilbakekreves:l})=>{const o=Pe(),u=Sn(),g=`${e}.skalDetTilleggesRenter`;return C.useEffect(()=>{u.getValues(g)===void 0&&u.setValue(g,!1)},[]),i.jsxs(E,{gap:"4",children:[i.jsx(De,{name:`${e}.harGrunnerTilReduksjon`,control:u.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[I],radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0}),r&&i.jsx(Ge,{alignOffset:24,children:i.jsxs(ue,{gap:"4",children:[!a&&l!==hr&&i.jsxs(i.Fragment,{children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(ue,{gap:"2",children:[i.jsx(wt,{name:`${e}.andelSomTilbakekreves`,control:u.control,label:"",validate:[I],selectValues:Tn.map(c=>i.jsx("option",{value:c,children:c},c))}),i.jsx("div",{className:Ce.suffix,children:"%"})]})]}),!a&&l===hr&&i.jsxs(i.Fragment,{children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(ue,{gap:"4",children:[i.jsx(gn,{name:`${e}.andelSomTilbakekrevesManuell`,control:u.control,className:Ce.inputFelt,readOnly:n,validate:[I,it,xu],normalizeOnBlur:c=>Number.isNaN(c)?c:parseFloat(c.toString()).toFixed(2),format:c=>c.toString().replace(".",","),parse:c=>c.toString().replace(",",".")}),i.jsx("div",{className:t===G.GROVT_UAKTSOM?Ce.suffixGrovText:Ce.suffix,children:"%"})]})]}),a&&i.jsx(gn,{name:`${e}.belopSomSkalTilbakekreves`,control:u.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[I,it,Ou(o,s)],readOnly:n,format:Xe,parse:Ru}),t===G.GROVT_UAKTSOM&&i.jsxs("div",{children:[i.jsx(Yr,{children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),i.jsx($,{size:"small",className:Ce.labelPadding,children:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),r===!1&&i.jsxs(Ge,{alignOffset:90,children:[i.jsx(Yr,{children:i.jsx(k,{id:a?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),i.jsxs(E,{gap:"4",children:[i.jsx($,{size:"small",className:Ce.labelPadding,children:a?Xe(s):"100%"}),t===G.GROVT_UAKTSOM&&i.jsx(De,{name:g,control:u.control,label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[I],radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})]})};wa.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const Du=qn(3),Pu=jn(1500),_n=({name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:u})=>{const g=Pe(),{watch:c,control:h}=Sn(),y=!s.some(L=>!!c(`${e}.${L.kode}`)),O=Ia(e,y?g.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return i.jsxs(E,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),i.jsx("div",{children:s.map(L=>i.jsx(Ea,{name:`${e}.${L.kode}`,control:h,label:L.navn,readOnly:n},L.kode))}),a&&i.jsx(gr,{name:`${e}.annetBegrunnelse`,control:h,label:"",validate:[I,Du,Pu,Vr],maxLength:1500,readOnly:n}),O&&i.jsx(Ua,{children:O}),i.jsx(wa,{name:e,harGrunnerTilReduksjon:r,readOnly:n,handletUaktsomhetGrad:t,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:u})]})};_n.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Au="_explanationTextarea_1kabz_1",Fu="_panelWidth_1kabz_5",Sa={explanationTextarea:Au,panelWidth:Fu},Bu=qn(3),Yu=jn(1500),lt=(e,r,n)=>i.jsxs(E,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),i.jsx(gr,{name:`${e}.sarligGrunnerBegrunnelse`,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[I,Bu,Yu,Vr],maxLength:1500,readOnly:r,className:Sa.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]}),qa=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:u,erValgtResultatTypeForstoBurdeForstaatt:g,name:c})=>{const h=Pe(),y=g?180:200;return i.jsx(Ge,{alignOffset:n===G.GROVT_UAKTSOM?y:20,children:i.jsxs("div",{className:Sa.panelWidth,children:[n===G.SIMPEL_UAKTSOM&&o&&i.jsx(De,{name:`${c}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:i.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[I],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:r,radios:[{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:i.jsxs("div",{style:{marginTop:"10px"},children:[lt(c,r,h),i.jsx(_n,{name:c,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:n,andelSomTilbakekreves:u})]})},{label:i.jsx(k,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:i.jsx("div",{style:{marginTop:"10px"},children:i.jsx(Ge,{alignOffset:55,children:i.jsx(k,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})})}]}),(n!==G.SIMPEL_UAKTSOM||!o)&&i.jsxs(i.Fragment,{children:[lt(c,r,h),i.jsx(_n,{name:c,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:n,andelSomTilbakekreves:u})]})]})})};qa.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const ja=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,erValgtResultatTypeForstoBurdeForstaatt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:g,name:c})=>i.jsxs(i.Fragment,{children:[n===G.FORSETT&&i.jsx(_a,{name:c,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:a}),n!==G.FORSETT&&i.jsx(qa,{name:c,harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:t,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:u,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:a})]});ja.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Nu=[G.GROVT_UAKTSOM,G.SIMPEL_UAKTSOM,G.FORSETT],Vu={[G.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[G.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[G.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},tr=({readOnly:e,resetFields:r,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:t,erSerligGrunnAnnetValgt:a=!1,erValgtResultatTypeForstoBurdeForstaatt:s=!1,aktsomhetTyper:l,sarligGrunnTyper:o,antallYtelser:u,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:c,andelSomTilbakekreves:h,name:y})=>i.jsxs(i.Fragment,{children:[i.jsx(De,{name:`${y}.handletUaktsomhetGrad`,label:i.jsx(k,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[I],radios:l.map(O=>({label:s?i.jsx(k,{id:Vu[O.kode]}):O.navn,value:O.kode})),isReadOnly:e,onChange:r,isHorizontal:!0}),Nu.some(O=>O===n)&&i.jsx(ja,{name:`${y}.${n}`,harGrunnerTilReduksjon:t,readOnly:e,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:o,harMerEnnEnYtelse:u>1,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:c,andelSomTilbakekreves:h})]}),Iu=(e,r)=>{const n=parseInt(e,10);return!r||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Eu=(e,r)=>{const n=parseFloat(e);return!r||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Uu=(e,r)=>{if(e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=r.reduce((s,l)=>e[l.kode]?s.concat(l.kode):s,[]),{harGrunnerTilReduksjon:t}=e,a=e.andelSomTilbakekreves===hr?Eu(e.andelSomTilbakekrevesManuell,t):Iu(e.andelSomTilbakekreves,t);return{harGrunnerTilReduksjon:t,ileggRenter:t?void 0:e.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:e.harGrunnerTilReduksjon?St(e.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:e.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...a}};tr.transformValues=(e,r,n)=>{const t=e[e.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:e.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:t?Uu(t,r):null}};const Gu=(e,r)=>({andelSomTilbakekreves:r===void 0||Tn.includes(r)?r:hr,andelSomTilbakekrevesManuell:r&&Tn.includes(r)?void 0:e.andelTilbakekreves,harGrunnerTilReduksjon:e.harGrunnerTilReduksjon,skalDetTilleggesRenter:e.ileggRenter,belopSomSkalTilbakekreves:e.tilbakekrevesBelop,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:Dr(e.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...e.sarligGrunner?e.sarligGrunner.reduce((n,t)=>({...n,[t.kode??t]:!0}),{}):{}});tr.buildInitalValues=e=>{const{aktsomhet:r,aktsomhetInfo:n}=e,t=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,a=n?{[r.kode&&"kode"in r?r.kode:r]:Gu(n,t)}:{};return{handletUaktsomhetGrad:r&&r.kode&&"kode"in r?r.kode:r,...a}};tr.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Ma=()=>i.jsxs(ue,{gap:"4",children:[i.jsx(gr,{name:"foreldetBegrunnelse",label:i.jsx(k,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),i.jsx(De,{name:"periodenErForeldet",label:i.jsx(Yr,{children:i.jsx(k,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:i.jsx(k,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]});Ma.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const Lu="_arrowbox_ych2z_1",Wu="_tilbakekrevdBelopInput_ych2z_4",ot={arrowbox:Lu,tilbakekrevdBelopInput:Wu},Hu=qt(1),Cu=e=>{const r=e.toString().replace(/\s/g,""),n=parseInt(r,10);return Number.isNaN(n)?"":n},$u=(e,r)=>n=>{if((typeof n=="string"?Number(n):n)>r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ar=({name:e,readOnly:r,erBelopetIBehold:n,feilutbetalingBelop:t})=>{const a=Pe();return i.jsxs(E,{gap:"2",children:[i.jsx(De,{name:`${e}.erBelopetIBehold`,label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[I],radios:[{label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0}),i.jsxs("div",{className:ot.arrowbox,children:[n===!0&&i.jsx(Ge,{alignOffset:25,children:i.jsx(gn,{name:`${e}.tilbakekrevdBelop`,label:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[I,Hu,$u(a,t)],readOnly:r,className:ot.tilbakekrevdBelopInput,format:Xe,parse:Cu})}),n===!1&&i.jsx(Ge,{alignOffset:90,children:i.jsx($,{size:"small",children:i.jsx(k,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ar.transformValues=(e,r)=>({"@type":"godTro",begrunnelse:r,erBelopetIBehold:e.erBelopetIBehold,tilbakekrevesBelop:e.erBelopetIBehold?St(e.tilbakekrevdBelop):void 0});ar.buildIntialValues=e=>({erBelopetIBehold:e.erBelopetIBehold,tilbakekrevdBelop:e.tilbakekrevesBelop});ar.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const zu="_feilutbetalingTable_1fsd2_1",Ku={feilutbetalingTable:zu},xa=({ytelser:e})=>{if(e.length===0)return null;let r=0;return i.jsxs(ke,{className:Ku.feilutbetalingTable,children:[i.jsx(ke.Header,{children:i.jsxs(ke.Row,{children:[i.jsx(ke.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),i.jsx(ke.HeaderCell,{scope:"col",children:i.jsx(k,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),i.jsx(ke.Body,{children:e.map(n=>(r+=1,i.jsxs(ke.Row,{children:[i.jsx(ke.DataCell,{children:i.jsx($,{size:"small",children:n.aktivitet})}),i.jsx(ke.DataCell,{children:i.jsx($,{size:"small",children:Xe(n.belop)})})]},n.aktivitet+n.belop+r)))})]})};xa.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Zu="_explanationTextarea_1udkt_1",Ju="_leftColumn_1udkt_5",Qu="_rightColumn_1udkt_9",Xu="_selectWidth_1udkt_12",Mr={explanationTextarea:Zu,leftColumn:Ju,rightColumn:Qu,selectWidth:Xu},ut=qn(3),dt=jn(1500),Ra=({data:e,periode:r,skjulPeriode:n,readOnly:t,oppdaterPeriode:a,vilkarsVurdertePerioder:s,kodeverkSamlingFpTilbake:l,antallPerioderMedAksjonspunkt:o})=>{const u=Pe(),[g,c]=C.useState(!1),h=yt({defaultValues:r}),y=h.watch("valgtVilkarResultatType"),O=h.watch(`${y}.handletUaktsomhetGrad`),L=h.watch(`${y}.${O}.harGrunnerTilReduksjon`),qe=h.watch(`${y}.${O}.andelSomTilbakekreves`),q=h.watch(`${y}.${O}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),se=h.watch(`${y}.${O}.${Ta.ANNET}`),ie=h.watch(`${y}.erBelopetIBehold`),F=Jn(y),v=Jn(O),le=e.redusertBeloper,_r=l.SærligGrunn,Ae=l.VilkårResultat,Fe=wu.map(M=>l.Aktsomhet.find(W=>W.kode===M)),rn=(M,W)=>{const X=M.target.value.split("_"),N=W.find(fe=>fe.fom===X[0]&&fe.tom===X[1]),je=N==null?void 0:N.valgtVilkarResultatType,We=N&&je?N[je]:void 0,Ye=JSON.parse(JSON.stringify(We));if(je!==ee.GOD_TRO){const{handletUaktsomhetGrad:fe}=Ye;fe!==G.FORSETT&&(r==null?void 0:r.harMerEnnEnYtelse)!==(N==null?void 0:N.harMerEnnEnYtelse)&&(Ye[fe].andelSomTilbakekreves=null,Ye[fe].andelSomTilbakekrevesManuell=null,Ye[fe].belopSomSkalTilbakekreves=null)}h.setValue("valgtVilkarResultatType",je,{shouldDirty:!0}),h.setValue("begrunnelse",N==null?void 0:N.begrunnelse,{shouldDirty:!0}),h.setValue("vurderingBegrunnelse",N==null?void 0:N.vurderingBegrunnelse,{shouldDirty:!0}),je&&h.setValue(je,Ye,{shouldDirty:!0}),M.preventDefault()},sr=()=>{c(!g),a(h.getValues())},nn=M=>{o>1&&e.erTotalBelopUnder4Rettsgebyr&&q===!1?c(!g):a(M)},tn=()=>{F&&h.resetField(F)},an=()=>{v&&h.resetField(`${y}.${v}`)},Be=s.filter(M=>!M.erForeldet&&M.valgtVilkarResultatType!=null);return i.jsx(vt,{formMethods:h,onSubmit:nn,children:i.jsxs(E,{gap:"4",children:[i.jsx(E,{gap:"2",children:le&&le.map(M=>i.jsx($,{size:"small",children:i.jsx(k,{id:M.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:Xe(M.belop),b:Ga}})},M.belop))}),i.jsx(xa,{ytelser:e.ytelser}),!t&&!e.erForeldet&&Be.length>0&&i.jsx(wt,{name:"perioderForKopi",control:h.control,selectValues:Be.map(M=>{const W=`${M.fom}_${M.tom}`,X=`${V(M.fom).format(Qe)} - ${V(M.tom).format(Qe)}`;return i.jsx("option",{value:W,children:X},W)}),onChange:M=>rn(M,Be),className:Mr.selectWidth,label:i.jsx(k,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),i.jsxs(ue,{gap:"4",wrap:!0,children:[i.jsxs("div",{className:Mr.leftColumn,children:[e.erForeldet&&i.jsx(Ma,{}),!e.erForeldet&&i.jsxs(E,{gap:"2",children:[i.jsx(Br,{size:"small",children:i.jsx(k,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),i.jsx(gr,{name:"begrunnelse",control:h.control,label:u.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[I,ut,dt,Vr],maxLength:1500,readOnly:t,className:Mr.explanationTextarea,description:u.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),i.jsx(De,{name:"valgtVilkarResultatType",control:h.control,label:i.jsx(k,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[I],radios:Ae.map(M=>({label:M.navn,value:M.kode})),isReadOnly:t,onChange:tn})]})]}),i.jsx("div",{className:Mr.rightColumn,children:y&&i.jsxs(E,{gap:"2",children:[i.jsx(Br,{size:"small",children:i.jsx(k,{id:y===ee.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),i.jsx(gr,{name:"vurderingBegrunnelse",control:h.control,label:u.formatMessage({id:y===ee.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[I,ut,dt,Vr],maxLength:1500,readOnly:t}),y===ee.GOD_TRO&&i.jsx(ar,{name:y,readOnly:t,erBelopetIBehold:ie,feilutbetalingBelop:e.feilutbetaling}),y!==ee.GOD_TRO&&i.jsx(tr,{name:y,harGrunnerTilReduksjon:L,readOnly:t,handletUaktsomhetGrad:O,resetFields:an,erSerligGrunnAnnetValgt:se,erValgtResultatTypeForstoBurdeForstaatt:y===ee.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:Fe,sarligGrunnTyper:_r,antallYtelser:e.ytelser.length,feilutbetalingBelop:e.feilutbetaling,erTotalBelopUnder4Rettsgebyr:e.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:qe},y)]})})]}),i.jsxs(ue,{gap:"4",children:[i.jsx(Z,{size:"small",variant:"primary",disabled:!h.formState.isDirty||t,children:i.jsx(k,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),i.jsx(Z,{size:"small",variant:"secondary",onClick:n,type:"button",children:i.jsx(k,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),g&&i.jsx(us,{showModal:!0,submit:sr})]})})};Ra.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const ed="_margin_1wl4t_1",xr={margin:ed},rd={danger:i.jsx(ls,{}),success:i.jsx(is,{}),warning:i.jsx(ss,{})},nd=(e,r)=>e.fom<r.fom?-1:e.fom>r.fom?1:0,td=e=>{const r=e.isGodkjent?"success":"danger";return e.isAksjonspunktOpen?"warning":r},ad=(e=[])=>[...e].sort(nd).map(r=>({...r,status:td(r)})),sd=e=>e===dr.MOR||e===dr.MEDMOR?i.jsx(ds,{width:20,height:20,color:"var(--a-red-200)"}):e===dr.FAR?i.jsx(ms,{width:20,height:20,color:"var(--a-blue-600)"}):i.jsx(as,{width:20,height:20}),Oa=({perioder:e,valgtPeriode:r,setPeriode:n,relasjonsRolleType:t,relasjonsRolleTypeKodeverk:a})=>{var ie;const s=Pe(),l=ad(e),o=F=>{const v=e.find(le=>le.id===F);v&&n(v)},u=V(l[0].fom),g=V(l[l.length-1].tom),[c,h]=C.useState(u),[y,O]=C.useState(g),L=()=>{c.subtract(1,"month").isBefore(u)||(h(c.subtract(1,"month")),O(y.subtract(1,"month")))},qe=()=>{y.add(1,"month").isAfter(g)||(h(c.add(1,"month")),O(y.add(1,"month")))},q=()=>{c.add(3,"month").isAfter(y)||(h(c.add(1,"month")),O(y.subtract(1,"month")))},se=()=>{y.add(1,"month").diff(c.subtract(1,"month"),"months")<36&&(h(c.subtract(1,"month")),O(y.add(1,"month")))};return i.jsxs(E,{gap:"4",children:[i.jsx(sn,{startDate:V(c).toDate(),endDate:V(y).add(1,"days").toDate(),children:i.jsx(sn.Row,{label:((ie=a.find(F=>F.kode===t))==null?void 0:ie.navn)||"-",icon:sd(t),children:l.map(F=>i.jsx(sn.Period,{start:V(F.fom).toDate(),end:V(F.tom).toDate(),status:F.status,icon:rd[F.status],onSelectPeriod:()=>o(F.id),isActive:(r==null?void 0:r.id)===F.id,"aria-controls":"panel-tilbakekreving",id:F.id.toString()},F.id))})}),i.jsxs(ue,{justify:"end",children:[i.jsx(Z,{className:xr.margin,size:"small",icon:i.jsx(ns,{"aria-hidden":!0}),onClick:q,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),i.jsx(Z,{className:xr.margin,size:"small",icon:i.jsx(ts,{"aria-hidden":!0}),onClick:se,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),i.jsx(Z,{className:xr.margin,size:"small",icon:i.jsx(Tt,{"aria-hidden":!0}),onClick:L,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),i.jsx(Z,{className:xr.margin,size:"small",icon:i.jsx(_t,{"aria-hidden":!0}),onClick:qe,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};Oa.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const wn=(e,r)=>m(e.fom).diff(m(r.fom)),mt=e=>!e.erForeldet&&(e.begrunnelse===void 0||e.erSplittet),id=e=>{const r=e[e.valgtVilkarResultatType],n=r[r.handletUaktsomhetGrad];return r.tilbakekrevdBelop?{...e,[e.valgtVilkarResultatType]:{...Nr(r,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...e,[e.valgtVilkarResultatType]:{...r,[r.handletUaktsomhetGrad]:{...Nr(n,"belopSomSkalTilbakekreves")}}}:e},ld=(e,r=[])=>r.map((n,t)=>{const a=e.find(o=>o.fom===n.fom&&o.tom===n.tom),s=a&&a[a.valgtVilkarResultatType]?a[a.valgtVilkarResultatType].erBelopetIBehold:void 0,l=a?!!a.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&((a==null?void 0:a.begrunnelse)===void 0||l),isGodkjent:!(n.erForeldet||s===!1),id:t}}),Da=(e,r)=>r.find(n=>!m(e.fom).isBefore(m(n.fom))&&!m(e.tom).isAfter(m(n.tom))),od=(e,r)=>r.every(n=>!(m(e.fom).isSameOrBefore(m(n.tom))&&m(n.fom).isSameOrBefore(m(e.tom)))),ud=(e,r,n)=>{const a=e.reduce((u,g)=>u+g.feilutbetaling,0)<n*4,l=r.vilkarsVurdertePerioder.map(u=>{const g=Da(u,e);return{...g,harMerEnnEnYtelse:g&&g.ytelser.length>1,...Nr(u,"feilutbetalingBelop"),feilutbetaling:u.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:a}});return{perioder:e.filter(u=>od(u,l)).map(u=>({...u,harMerEnnEnYtelse:u.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:a})).concat(l)}},dd=(e,r)=>{if(!(!e||!r))return r.map(n=>{const t=Da(n,e.perioder),a=t.foreldelseVurderingType?t.foreldelseVurderingType===fn.FORELDET:t.foreldet;return{redusertBeloper:t.redusertBeloper,ytelser:t.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:t.feilutbetaling,erTotalBelopUnder4Rettsgebyr:t.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:t.årsak,begrunnelse:t.begrunnelse,erForeldet:a||!1}})},md=(e,r)=>{const{vilkarResultat:n,begrunnelse:t,vilkarResultatInfo:a}=e,s=(n==null?void 0:n.kode)??n;let l;const o=e.erForeldet??e.foreldet;if(o){const h=r.perioder.find(y=>y.fom===e.fom&&y.tom===e.tom);l={erForeldet:o,periodenErForeldet:!0,foreldetBegrunnelse:h?Dr(h.begrunnelse):void 0}}else l={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const u={valgtVilkarResultatType:s,begrunnelse:Dr(t),harMerEnnEnYtelse:e.ytelser.length>1,...l},g=s===ee.GOD_TRO?ar.buildIntialValues(a):{},c=s!==void 0&&s!==ee.GOD_TRO?tr.buildInitalValues(a):{};return{...u,vurderingBegrunnelse:a?Dr(a.begrunnelse):void 0,[u.valgtVilkarResultatType]:{...g,...c}}},gd=(e,r)=>{const{valgtVilkarResultatType:n,begrunnelse:t,vurderingBegrunnelse:a}=e,s=e[n],l=n===ee.GOD_TRO?ar.transformValues(s,a):{},o=n!==ee.GOD_TRO?tr.transformValues(s,r,a):{};return{begrunnelse:t,fom:e.fom,tom:e.tom,vilkarResultat:n,vilkarResultatInfo:{...l,...o}}},fd=(e,r)=>e.perioder.map(n=>({...md(n,r),fom:n.fom,tom:n.tom})).sort(wn),cd=(e,r)=>({kode:Kn.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:e.filter(n=>!n.erForeldet).map(n=>gd(n,r))}),kd=e=>{if(!e||e.reduce((t,a)=>a.erForeldet?t:t+1,0)<2)return;const n=e.reduce((t,a)=>{const{valgtVilkarResultatType:s}=a,l=a[s],{handletUaktsomhetGrad:o}=l,u=l[o];return u&&u.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?t+1:t},0);if(n>0&&n!==e.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Pa=({perioderForeldelse:e,kodeverkSamlingFpTilbake:r,vilkarvurderingsperioder:n,submitCallback:t,isReadOnly:a,alleMerknaderFraBeslutter:s,vilkarvurdering:l,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:u,beregnBelop:g,behandling:c,formData:h,setFormData:y})=>{var Zn;const O=n.perioder,L=n.rettsgebyr,qe=ud(O,l,L),[q,se]=C.useState(h||fd(qe,e)),[ie,F]=C.useState(!!h),[v,le]=C.useState(q==null?void 0:q.find(mt)),[_r,Ae]=C.useState(!1),[Fe,rn]=C.useState();C.useEffect(()=>{rn(kd(q))},[q]);const sr=dd(qe,q),nn=q.reduce((D,B)=>B.erForeldet?D:D+1,0),tn=s[Kn.VURDER_TILBAKEKREVING],an=()=>{Ae(!0),t(cd(q,r.SærligGrunn))},Be=ld(q,sr),M=Be.some(D=>D.isAksjonspunktOpen),W=v?Be.find(D=>D.fom===v.fom&&D.tom===v.tom):void 0,X=D=>{const B=D?q.find(ce=>ce.fom===D.fom&&ce.tom===D.tom):void 0;le(B)},N=()=>{const D=q.findIndex(B=>B.fom===(v==null?void 0:v.fom)&&B.tom===(v==null?void 0:v.tom));X(q[D+1])},je=()=>{const D=q.findIndex(B=>B.fom===(v==null?void 0:v.fom)&&B.tom===(v==null?void 0:v.tom));X(q[D-1])},We=()=>{X(void 0)},Ye=D=>{const B=Nr(D,"erSplittet"),wr=q.filter(Ve=>Ve.fom!==B.fom&&Ve.tom!==B.tom).concat(B).sort(wn);se(wr),y(wr),F(!0),We();const ir=wr.find(mt);ir&&X(ir)},fe=D=>{const B=q.find(ce=>ce.fom===(v==null?void 0:v.fom)&&ce.tom===(v==null?void 0:v.tom));if(B){const ce=D.map(Ve=>({...id(B),...Ve,erSplittet:!0})),ir=q.filter(Ve=>Ve.fom!==(v==null?void 0:v.fom)&&Ve.tom!==(v==null?void 0:v.tom)).concat(ce).sort(wn);We(),F(!0),se(ir),y(ir),X(ce[0])}},Ne=sr?sr.find(D=>D.fom===(v==null?void 0:v.fom)&&D.tom===(v==null?void 0:v.tom)):void 0;return i.jsx(La,{merknaderFraBeslutter:tn,withoutBorder:!0,children:i.jsxs(E,{gap:"4",children:[i.jsx(Br,{size:"small",children:i.jsx(k,{id:"Behandlingspunkt.Tilbakekreving"})}),M&&i.jsx(Wa,{children:i.jsx(k,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),q&&i.jsxs(i.Fragment,{children:[i.jsx(Oa,{perioder:Be,valgtPeriode:W,setPeriode:X,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:u}),v&&Ne&&i.jsx("div",{id:"panel-tilbakekreving","aria-controls":W==null?void 0:W.id.toString(),children:i.jsx(Ha,{borderWidth:"1",padding:"4",children:i.jsxs(E,{gap:"4",children:[i.jsx(va,{setNestePeriode:N,setForrigePeriode:je,periode:Ne,readOnly:a,oppdaterSplittedePerioder:fe,behandlingUuid:c.uuid,beregnBelop:g,lukkPeriode:We}),i.jsx(ba,{feilutbetaling:Ne.feilutbetaling,fom:Ne.fom,tom:Ne.tom,arsakHendelseNavn:(Zn=r.HendelseType.find(D=>{var B;return D.kode===((B=Ne.årsak)==null?void 0:B.hendelseType)}))==null?void 0:Zn.navn}),i.jsx(Ra,{periode:v,data:Ne,antallPerioderMedAksjonspunkt:nn,readOnly:a||(v==null?void 0:v.erForeldet)===!0,skjulPeriode:We,oppdaterPeriode:Ye,kodeverkSamlingFpTilbake:r,vilkarsVurdertePerioder:q},W==null?void 0:W.id)]})})})]}),Fe&&i.jsx(bt,{variant:"error",children:i.jsx(k,{id:Fe})}),i.jsx("div",{children:i.jsx(Ca,{isReadOnly:a||(v==null?void 0:v.erForeldet)===!0,isDirty:ie,isSubmittable:!M&&!v&&!Fe,onClick:an,isSubmitting:_r})})]})})};Pa.__docgenInfo={description:`TilbakekrevingForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const pd=za(jt),Aa=e=>i.jsx($a,{value:pd,children:i.jsx(Pa,{...e})});Aa.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:hd}=__STORYBOOK_MODULE_ACTIONS__,yd=Ka(jt),vd={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:fn.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:fn.FORELDET}]},Fa={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:"MEDLEMSKAP"},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},bd={vilkarsVurdertePerioder:[]},Dd={component:Aa,decorators:[yd],args:{submitCallback:hd("button-click"),behandling:{uuid:"1",versjon:1,status:rs.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:Za,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:vd,vilkarvurdering:bd,beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleType:dr.MOR,relasjonsRolleTypeKodeverk:[{kode:dr.MOR,kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},Rr={args:{vilkarvurderingsperioder:Fa}},Or={args:{vilkarvurderingsperioder:{perioder:[Fa.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:{kode:"MEDLEM",kodeverk:"",navn:"§22 Medlemskap"}},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};var gt,ft,ct;Rr.parameters={...Rr.parameters,docs:{...(gt=Rr.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
          hendelseType: {
            kode: 'MEDLEM',
            kodeverk: '',
            navn: '§22 Medlemskap'
          }
        },
        redusertBeloper: [],
        ytelser: [{
          aktivitet: 'Arbeidstaker',
          belop: 2050
        }]
      }],
      rettsgebyr: 1000
    } as DetaljerteFeilutbetalingsperioder
  }
}`,...(ht=(pt=Or.parameters)==null?void 0:pt.docs)==null?void 0:ht.source}}};const Pd=["Default","MedToPerioder"];export{Rr as Default,Or as MedToPerioder,Pd as __namedExportsOrder,Dd as default};
