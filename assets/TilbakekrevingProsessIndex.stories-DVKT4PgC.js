import{a as Na}from"./index-B-lxVbXh.js";import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{N as vn,P as Ba,M as Re,Y as bn,A as gt,L as Va,y as Ia,D as mr,O as Ea}from"./index.es-C30MP-Vj.js";import{g as Ua}from"./withIntl-CkfziLYs.js";import{a as Ga}from"./alleTilbakekrevingKodeverk-dIUSSyeF.js";import{e as I,p as La,H as Wa,D as Ca,o as _n,l as Ha,r as St,a as jt,y as Nr,S as Rr,h as Or,I as $a,m as ft,d as za}from"./style-BwvLpsjO.js";import{u as Pe,n as Qe,P as Ka,Y as Za,a as Xe,j as Pr,M as Tn,Q as Ja,f as Br,b as Qa,r as Xa}from"./index.es-Bs6SSTCM.js";import{r as C}from"./index-DNHX5htx.js";import{Z as Ge,f as Jt,l as es,G as rs}from"./index.es-lC3nHLK-.js";import{b as wn,u as qt}from"./index.esm-CkkEN1rj.js";import{d as V}from"./dayjs.min-Cke173X9.js";import{M as wr}from"./Modal-DdoS0OAm.js";import{H as Vr,L as Oe,a as H,D as Ir,E as ts}from"./Label-CYbek38p.js";import{M as p}from"./message-B4eBuUqZ.js";import{V as E,H as oe}from"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import{A as Sn}from"./Alert-Ja4tf6sE.js";import{B as K}from"./Button-Cc809GDC.js";import{S as Qt,T as it,a as ns,b as as,c as ss,d as is,e as ls,f as os}from"./Timeline-DTUheA4y.js";import{S as us}from"./Scissors-slXG3Pr9.js";import{S as jn,e as qn}from"./DatePicker-CqOjkUCb.js";import{S as ds}from"./XMark-6H9iuGiv.js";import{T as ce}from"./Table-B96Zr42l.js";import{T as ms,m as Mn}from"./nb_NO-RExXq8G0.js";import{a as gs,S as fs}from"./SilhouetteFill-BavFPiUa.js";import{B as cs}from"./Box-C3b4VC_S.js";/* empty css              */import"./v4-CtRu48qb.js";import"./Checkbox-BaSR81FM.js";import"./omit-B7stZg_p.js";import"./useId-CsAOvYkp.js";import"./ReadOnlyIcon-BUzfiMc5.js";import"./Loader-42dkOmtz.js";import"./Provider-BZs7ODlm.js";import"./useId-SP_zdaIa.js";import"./useFormField-Bu2NUIkp.js";import"./Fieldset-B4jGbpi0.js";import"./Tag-ntoonGP8.js";import"./Textarea-BjE6whUD.js";import"./index-DU09BupE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-7Fg4giie.js";import"./useClientLayoutEffect-pkze6c0k.js";import"./Select-CvyZY3UD.js";import"./ChevronDown-6T9JsqER.js";import"./Radio-Pmn7OwXu.js";import"./useDatepicker-ZRZWX1l5.js";import"./Date.Input-D651xWgA.js";import"./TextField-DY81zaLa.js";import"./PersonPencilFill-DqunLdn1.js";import"./Tooltip-BnLM-CWP.js";import"./floating-ui.react-D9M9yXN8.js";import"./KeyVerticalFill-DmgzHF4Z.js";import"./BasePrimitive-gBgyIEwX.js";import"./ExclamationmarkTriangleFill-DrBUO71d.js";import"./XMarkOctagonFill-Dr7RQDrl.js";import"./Popover-Cvnh_fPv.js";//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var xn;function m(){return xn.apply(null,arguments)}function ps(e){xn=e}function re(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ue(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function w(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function Mt(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var r;for(r in e)if(w(e,r))return!1;return!0}function W(e){return e===void 0}function _e(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function hr(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Dn(e,r){var t=[],n,a=e.length;for(n=0;n<a;++n)t.push(r(e[n],n));return t}function Me(e,r){for(var t in r)w(r,t)&&(e[t]=r[t]);return w(r,"toString")&&(e.toString=r.toString),w(r,"valueOf")&&(e.valueOf=r.valueOf),e}function de(e,r,t,n){return Qn(e,r,t,n,!0).utc()}function ks(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function b(e){return e._pf==null&&(e._pf=ks()),e._pf}var ct;Array.prototype.some?ct=Array.prototype.some:ct=function(e){var r=Object(this),t=r.length>>>0,n;for(n=0;n<t;n++)if(n in r&&e.call(this,r[n],n,r))return!0;return!1};function xt(e){var r=null,t=!1,n=e._d&&!isNaN(e._d.getTime());if(n&&(r=b(e),t=ct.call(r.parsedDateParts,function(a){return a!=null}),n=r.overflow<0&&!r.empty&&!r.invalidEra&&!r.invalidMonth&&!r.invalidWeekday&&!r.weekdayMismatch&&!r.nullInput&&!r.invalidFormat&&!r.userInvalidated&&(!r.meridiem||r.meridiem&&t),e._strict&&(n=n&&r.charsLeftOver===0&&r.unusedTokens.length===0&&r.bigHour===void 0)),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=n;else return n;return e._isValid}function Cr(e){var r=de(NaN);return e!=null?Me(b(r),e):b(r).userInvalidated=!0,r}var Xt=m.momentProperties=[],lt=!1;function Dt(e,r){var t,n,a,s=Xt.length;if(W(r._isAMomentObject)||(e._isAMomentObject=r._isAMomentObject),W(r._i)||(e._i=r._i),W(r._f)||(e._f=r._f),W(r._l)||(e._l=r._l),W(r._strict)||(e._strict=r._strict),W(r._tzm)||(e._tzm=r._tzm),W(r._isUTC)||(e._isUTC=r._isUTC),W(r._offset)||(e._offset=r._offset),W(r._pf)||(e._pf=b(r)),W(r._locale)||(e._locale=r._locale),s>0)for(t=0;t<s;t++)n=Xt[t],a=r[n],W(a)||(e[n]=a);return e}function yr(e){Dt(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),lt===!1&&(lt=!0,m.updateOffset(this),lt=!1)}function te(e){return e instanceof yr||e!=null&&e._isAMomentObject!=null}function Rn(e){m.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function Z(e,r){var t=!0;return Me(function(){if(m.deprecationHandler!=null&&m.deprecationHandler(null,e),t){var n=[],a,s,l,o=arguments.length;for(s=0;s<o;s++){if(a="",typeof arguments[s]=="object"){a+=`
[`+s+"] ";for(l in arguments[0])w(arguments[0],l)&&(a+=l+": "+arguments[0][l]+", ");a=a.slice(0,-2)}else a=arguments[s];n.push(a)}Rn(e+`
Arguments: `+Array.prototype.slice.call(n).join("")+`
`+new Error().stack),t=!1}return r.apply(this,arguments)},r)}var en={};function On(e,r){m.deprecationHandler!=null&&m.deprecationHandler(e,r),en[e]||(Rn(r),en[e]=!0)}m.suppressDeprecationWarnings=!1;m.deprecationHandler=null;function me(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function hs(e){var r,t;for(t in e)w(e,t)&&(r=e[t],me(r)?this[t]=r:this["_"+t]=r);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function pt(e,r){var t=Me({},e),n;for(n in r)w(r,n)&&(Ue(e[n])&&Ue(r[n])?(t[n]={},Me(t[n],e[n]),Me(t[n],r[n])):r[n]!=null?t[n]=r[n]:delete t[n]);for(n in e)w(e,n)&&!w(r,n)&&Ue(e[n])&&(t[n]=Me({},t[n]));return t}function Rt(e){e!=null&&this.set(e)}var kt;Object.keys?kt=Object.keys:kt=function(e){var r,t=[];for(r in e)w(e,r)&&t.push(r);return t};var ys={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function vs(e,r,t){var n=this._calendar[e]||this._calendar.sameElse;return me(n)?n.call(r,t):n}function ue(e,r,t){var n=""+Math.abs(e),a=r-n.length,s=e>=0;return(s?t?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+n}var Ot=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Sr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,ot={},Ke={};function k(e,r,t,n){var a=n;typeof n=="string"&&(a=function(){return this[n]()}),e&&(Ke[e]=a),r&&(Ke[r[0]]=function(){return ue(a.apply(this,arguments),r[1],r[2])}),t&&(Ke[t]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function bs(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function _s(e){var r=e.match(Ot),t,n;for(t=0,n=r.length;t<n;t++)Ke[r[t]]?r[t]=Ke[r[t]]:r[t]=bs(r[t]);return function(a){var s="",l;for(l=0;l<n;l++)s+=me(r[l])?r[l].call(a,e):r[l];return s}}function Fr(e,r){return e.isValid()?(r=Pn(r,e.localeData()),ot[r]=ot[r]||_s(r),ot[r](e)):e.localeData().invalidDate()}function Pn(e,r){var t=5;function n(a){return r.longDateFormat(a)||a}for(Sr.lastIndex=0;t>=0&&Sr.test(e);)e=e.replace(Sr,n),Sr.lastIndex=0,t-=1;return e}var Ts={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function ws(e){var r=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return r||!t?r:(this._longDateFormat[e]=t.match(Ot).map(function(n){return n==="MMMM"||n==="MM"||n==="DD"||n==="dddd"?n.slice(1):n}).join(""),this._longDateFormat[e])}var Ss="Invalid date";function js(){return this._invalidDate}var qs="%d",Ms=/\d{1,2}/;function xs(e){return this._ordinal.replace("%d",e)}var Ds={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Rs(e,r,t,n){var a=this._relativeTime[t];return me(a)?a(e,r,t,n):a.replace(/%d/i,e)}function Os(e,r){var t=this._relativeTime[e>0?"future":"past"];return me(t)?t(r):t.replace(/%s/i,r)}var rn={D:"date",dates:"date",date:"date",d:"day",days:"day",day:"day",e:"weekday",weekdays:"weekday",weekday:"weekday",E:"isoWeekday",isoweekdays:"isoWeekday",isoweekday:"isoWeekday",DDD:"dayOfYear",dayofyears:"dayOfYear",dayofyear:"dayOfYear",h:"hour",hours:"hour",hour:"hour",ms:"millisecond",milliseconds:"millisecond",millisecond:"millisecond",m:"minute",minutes:"minute",minute:"minute",M:"month",months:"month",month:"month",Q:"quarter",quarters:"quarter",quarter:"quarter",s:"second",seconds:"second",second:"second",gg:"weekYear",weekyears:"weekYear",weekyear:"weekYear",GG:"isoWeekYear",isoweekyears:"isoWeekYear",isoweekyear:"isoWeekYear",w:"week",weeks:"week",week:"week",W:"isoWeek",isoweeks:"isoWeek",isoweek:"isoWeek",y:"year",years:"year",year:"year"};function J(e){return typeof e=="string"?rn[e]||rn[e.toLowerCase()]:void 0}function Pt(e){var r={},t,n;for(n in e)w(e,n)&&(t=J(n),t&&(r[t]=e[n]));return r}var Ps={date:9,day:11,weekday:11,isoWeekday:11,dayOfYear:4,hour:13,millisecond:16,minute:14,month:8,quarter:7,second:15,weekYear:1,isoWeekYear:1,week:5,isoWeek:5,year:1};function Fs(e){var r=[],t;for(t in e)w(e,t)&&r.push({unit:t,priority:Ps[t]});return r.sort(function(n,a){return n.priority-a.priority}),r}var Fn=/\d/,$=/\d\d/,An=/\d{3}/,Ft=/\d{4}/,Hr=/[+-]?\d{6}/,R=/\d\d?/,Yn=/\d\d\d\d?/,Nn=/\d\d\d\d\d\d?/,$r=/\d{1,3}/,At=/\d{1,4}/,zr=/[+-]?\d{1,6}/,er=/\d+/,Kr=/[+-]?\d+/,As=/Z|[+-]\d\d:?\d\d/gi,Zr=/Z|[+-]\d\d(?::?\d\d)?/gi,Ys=/[+-]?\d+(\.\d{1,3})?/,vr=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,rr=/^[1-9]\d?/,Yt=/^([1-9]\d|\d)/,Er;Er={};function f(e,r,t){Er[e]=me(r)?r:function(n,a){return n&&t?t:r}}function Ns(e,r){return w(Er,e)?Er[e](r._strict,r._locale):new RegExp(Bs(e))}function Bs(e){return ve(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(r,t,n,a,s){return t||n||a||s}))}function ve(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function z(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function _(e){var r=+e,t=0;return r!==0&&isFinite(r)&&(t=z(r)),t}var ht={};function q(e,r){var t,n=r,a;for(typeof e=="string"&&(e=[e]),_e(r)&&(n=function(s,l){l[r]=_(s)}),a=e.length,t=0;t<a;t++)ht[e[t]]=n}function br(e,r){q(e,function(t,n,a,s){a._w=a._w||{},r(t,a._w,a,s)})}function Vs(e,r,t){r!=null&&w(ht,e)&&ht[e](r,t._a,t,e)}function Jr(e){return e%4===0&&e%100!==0||e%400===0}var U=0,he=1,le=2,N=3,ee=4,ye=5,Ee=6,Is=7,Es=8;k("Y",0,0,function(){var e=this.year();return e<=9999?ue(e,4):"+"+e});k(0,["YY",2],0,function(){return this.year()%100});k(0,["YYYY",4],0,"year");k(0,["YYYYY",5],0,"year");k(0,["YYYYYY",6,!0],0,"year");f("Y",Kr);f("YY",R,$);f("YYYY",At,Ft);f("YYYYY",zr,Hr);f("YYYYYY",zr,Hr);q(["YYYYY","YYYYYY"],U);q("YYYY",function(e,r){r[U]=e.length===2?m.parseTwoDigitYear(e):_(e)});q("YY",function(e,r){r[U]=m.parseTwoDigitYear(e)});q("Y",function(e,r){r[U]=parseInt(e,10)});function dr(e){return Jr(e)?366:365}m.parseTwoDigitYear=function(e){return _(e)+(_(e)>68?1900:2e3)};var Bn=tr("FullYear",!0);function Us(){return Jr(this.year())}function tr(e,r){return function(t){return t!=null?(Vn(this,e,t),m.updateOffset(this,r),this):gr(this,e)}}function gr(e,r){if(!e.isValid())return NaN;var t=e._d,n=e._isUTC;switch(r){case"Milliseconds":return n?t.getUTCMilliseconds():t.getMilliseconds();case"Seconds":return n?t.getUTCSeconds():t.getSeconds();case"Minutes":return n?t.getUTCMinutes():t.getMinutes();case"Hours":return n?t.getUTCHours():t.getHours();case"Date":return n?t.getUTCDate():t.getDate();case"Day":return n?t.getUTCDay():t.getDay();case"Month":return n?t.getUTCMonth():t.getMonth();case"FullYear":return n?t.getUTCFullYear():t.getFullYear();default:return NaN}}function Vn(e,r,t){var n,a,s,l,o;if(!(!e.isValid()||isNaN(t))){switch(n=e._d,a=e._isUTC,r){case"Milliseconds":return void(a?n.setUTCMilliseconds(t):n.setMilliseconds(t));case"Seconds":return void(a?n.setUTCSeconds(t):n.setSeconds(t));case"Minutes":return void(a?n.setUTCMinutes(t):n.setMinutes(t));case"Hours":return void(a?n.setUTCHours(t):n.setHours(t));case"Date":return void(a?n.setUTCDate(t):n.setDate(t));case"FullYear":break;default:return}s=t,l=e.month(),o=e.date(),o=o===29&&l===1&&!Jr(s)?28:o,a?n.setUTCFullYear(s,l,o):n.setFullYear(s,l,o)}}function Gs(e){return e=J(e),me(this[e])?this[e]():this}function Ls(e,r){if(typeof e=="object"){e=Pt(e);var t=Fs(e),n,a=t.length;for(n=0;n<a;n++)this[t[n].unit](e[t[n].unit])}else if(e=J(e),me(this[e]))return this[e](r);return this}function Ws(e,r){return(e%r+r)%r}var F;Array.prototype.indexOf?F=Array.prototype.indexOf:F=function(e){var r;for(r=0;r<this.length;++r)if(this[r]===e)return r;return-1};function Nt(e,r){if(isNaN(e)||isNaN(r))return NaN;var t=Ws(r,12);return e+=(r-t)/12,t===1?Jr(e)?29:28:31-t%7%2}k("M",["MM",2],"Mo",function(){return this.month()+1});k("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});k("MMMM",0,0,function(e){return this.localeData().months(this,e)});f("M",R,rr);f("MM",R,$);f("MMM",function(e,r){return r.monthsShortRegex(e)});f("MMMM",function(e,r){return r.monthsRegex(e)});q(["M","MM"],function(e,r){r[he]=_(e)-1});q(["MMM","MMMM"],function(e,r,t,n){var a=t._locale.monthsParse(e,n,t._strict);a!=null?r[he]=a:b(t).invalidMonth=e});var Cs="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),In="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),En=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Hs=vr,$s=vr;function zs(e,r){return e?re(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||En).test(r)?"format":"standalone"][e.month()]:re(this._months)?this._months:this._months.standalone}function Ks(e,r){return e?re(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[En.test(r)?"format":"standalone"][e.month()]:re(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Zs(e,r,t){var n,a,s,l=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)s=de([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(s,"").toLocaleLowerCase();return t?r==="MMM"?(a=F.call(this._shortMonthsParse,l),a!==-1?a:null):(a=F.call(this._longMonthsParse,l),a!==-1?a:null):r==="MMM"?(a=F.call(this._shortMonthsParse,l),a!==-1?a:(a=F.call(this._longMonthsParse,l),a!==-1?a:null)):(a=F.call(this._longMonthsParse,l),a!==-1?a:(a=F.call(this._shortMonthsParse,l),a!==-1?a:null))}function Js(e,r,t){var n,a,s;if(this._monthsParseExact)return Zs.call(this,e,r,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(a=de([2e3,n]),t&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),!t&&!this._monthsParse[n]&&(s="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[n]=new RegExp(s.replace(".",""),"i")),t&&r==="MMMM"&&this._longMonthsParse[n].test(e))return n;if(t&&r==="MMM"&&this._shortMonthsParse[n].test(e))return n;if(!t&&this._monthsParse[n].test(e))return n}}function Un(e,r){if(!e.isValid())return e;if(typeof r=="string"){if(/^\d+$/.test(r))r=_(r);else if(r=e.localeData().monthsParse(r),!_e(r))return e}var t=r,n=e.date();return n=n<29?n:Math.min(n,Nt(e.year(),t)),e._isUTC?e._d.setUTCMonth(t,n):e._d.setMonth(t,n),e}function Gn(e){return e!=null?(Un(this,e),m.updateOffset(this,!0),this):gr(this,"Month")}function Qs(){return Nt(this.year(),this.month())}function Xs(e){return this._monthsParseExact?(w(this,"_monthsRegex")||Ln.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(w(this,"_monthsShortRegex")||(this._monthsShortRegex=Hs),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ei(e){return this._monthsParseExact?(w(this,"_monthsRegex")||Ln.call(this),e?this._monthsStrictRegex:this._monthsRegex):(w(this,"_monthsRegex")||(this._monthsRegex=$s),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function Ln(){function e(d,g){return g.length-d.length}var r=[],t=[],n=[],a,s,l,o;for(a=0;a<12;a++)s=de([2e3,a]),l=ve(this.monthsShort(s,"")),o=ve(this.months(s,"")),r.push(l),t.push(o),n.push(o),n.push(l);r.sort(e),t.sort(e),n.sort(e),this._monthsRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function ri(e,r,t,n,a,s,l){var o;return e<100&&e>=0?(o=new Date(e+400,r,t,n,a,s,l),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,r,t,n,a,s,l),o}function fr(e){var r,t;return e<100&&e>=0?(t=Array.prototype.slice.call(arguments),t[0]=e+400,r=new Date(Date.UTC.apply(null,t)),isFinite(r.getUTCFullYear())&&r.setUTCFullYear(e)):r=new Date(Date.UTC.apply(null,arguments)),r}function Ur(e,r,t){var n=7+r-t,a=(7+fr(e,0,n).getUTCDay()-r)%7;return-a+n-1}function Wn(e,r,t,n,a){var s=(7+t-n)%7,l=Ur(e,n,a),o=1+7*(r-1)+s+l,d,g;return o<=0?(d=e-1,g=dr(d)+o):o>dr(e)?(d=e+1,g=o-dr(e)):(d=e,g=o),{year:d,dayOfYear:g}}function cr(e,r,t){var n=Ur(e.year(),r,t),a=Math.floor((e.dayOfYear()-n-1)/7)+1,s,l;return a<1?(l=e.year()-1,s=a+be(l,r,t)):a>be(e.year(),r,t)?(s=a-be(e.year(),r,t),l=e.year()+1):(l=e.year(),s=a),{week:s,year:l}}function be(e,r,t){var n=Ur(e,r,t),a=Ur(e+1,r,t);return(dr(e)-n+a)/7}k("w",["ww",2],"wo","week");k("W",["WW",2],"Wo","isoWeek");f("w",R,rr);f("ww",R,$);f("W",R,rr);f("WW",R,$);br(["w","ww","W","WW"],function(e,r,t,n){r[n.substr(0,1)]=_(e)});function ti(e){return cr(e,this._week.dow,this._week.doy).week}var ni={dow:0,doy:6};function ai(){return this._week.dow}function si(){return this._week.doy}function ii(e){var r=this.localeData().week(this);return e==null?r:this.add((e-r)*7,"d")}function li(e){var r=cr(this,1,4).week;return e==null?r:this.add((e-r)*7,"d")}k("d",0,"do","day");k("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});k("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});k("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});k("e",0,0,"weekday");k("E",0,0,"isoWeekday");f("d",R);f("e",R);f("E",R);f("dd",function(e,r){return r.weekdaysMinRegex(e)});f("ddd",function(e,r){return r.weekdaysShortRegex(e)});f("dddd",function(e,r){return r.weekdaysRegex(e)});br(["dd","ddd","dddd"],function(e,r,t,n){var a=t._locale.weekdaysParse(e,n,t._strict);a!=null?r.d=a:b(t).invalidWeekday=e});br(["d","e","E"],function(e,r,t,n){r[n]=_(e)});function oi(e,r){return typeof e!="string"?e:isNaN(e)?(e=r.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function ui(e,r){return typeof e=="string"?r.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Bt(e,r){return e.slice(r,7).concat(e.slice(0,r))}var di="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Cn="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),mi="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),gi=vr,fi=vr,ci=vr;function pi(e,r){var t=re(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(r)?"format":"standalone"];return e===!0?Bt(t,this._week.dow):e?t[e.day()]:t}function ki(e){return e===!0?Bt(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function hi(e){return e===!0?Bt(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function yi(e,r,t){var n,a,s,l=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)s=de([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(s,"").toLocaleLowerCase();return t?r==="dddd"?(a=F.call(this._weekdaysParse,l),a!==-1?a:null):r==="ddd"?(a=F.call(this._shortWeekdaysParse,l),a!==-1?a:null):(a=F.call(this._minWeekdaysParse,l),a!==-1?a:null):r==="dddd"?(a=F.call(this._weekdaysParse,l),a!==-1||(a=F.call(this._shortWeekdaysParse,l),a!==-1)?a:(a=F.call(this._minWeekdaysParse,l),a!==-1?a:null)):r==="ddd"?(a=F.call(this._shortWeekdaysParse,l),a!==-1||(a=F.call(this._weekdaysParse,l),a!==-1)?a:(a=F.call(this._minWeekdaysParse,l),a!==-1?a:null)):(a=F.call(this._minWeekdaysParse,l),a!==-1||(a=F.call(this._weekdaysParse,l),a!==-1)?a:(a=F.call(this._shortWeekdaysParse,l),a!==-1?a:null))}function vi(e,r,t){var n,a,s;if(this._weekdaysParseExact)return yi.call(this,e,r,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(a=de([2e3,1]).day(n),t&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[n]||(s="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[n]=new RegExp(s.replace(".",""),"i")),t&&r==="dddd"&&this._fullWeekdaysParse[n].test(e))return n;if(t&&r==="ddd"&&this._shortWeekdaysParse[n].test(e))return n;if(t&&r==="dd"&&this._minWeekdaysParse[n].test(e))return n;if(!t&&this._weekdaysParse[n].test(e))return n}}function bi(e){if(!this.isValid())return e!=null?this:NaN;var r=gr(this,"Day");return e!=null?(e=oi(e,this.localeData()),this.add(e-r,"d")):r}function _i(e){if(!this.isValid())return e!=null?this:NaN;var r=(this.day()+7-this.localeData()._week.dow)%7;return e==null?r:this.add(e-r,"d")}function Ti(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var r=ui(e,this.localeData());return this.day(this.day()%7?r:r-7)}else return this.day()||7}function wi(e){return this._weekdaysParseExact?(w(this,"_weekdaysRegex")||Vt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(w(this,"_weekdaysRegex")||(this._weekdaysRegex=gi),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Si(e){return this._weekdaysParseExact?(w(this,"_weekdaysRegex")||Vt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(w(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=fi),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function ji(e){return this._weekdaysParseExact?(w(this,"_weekdaysRegex")||Vt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(w(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ci),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Vt(){function e(c,v){return v.length-c.length}var r=[],t=[],n=[],a=[],s,l,o,d,g;for(s=0;s<7;s++)l=de([2e3,1]).day(s),o=ve(this.weekdaysMin(l,"")),d=ve(this.weekdaysShort(l,"")),g=ve(this.weekdays(l,"")),r.push(o),t.push(d),n.push(g),a.push(o),a.push(d),a.push(g);r.sort(e),t.sort(e),n.sort(e),a.sort(e),this._weekdaysRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+t.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function It(){return this.hours()%12||12}function qi(){return this.hours()||24}k("H",["HH",2],0,"hour");k("h",["hh",2],0,It);k("k",["kk",2],0,qi);k("hmm",0,0,function(){return""+It.apply(this)+ue(this.minutes(),2)});k("hmmss",0,0,function(){return""+It.apply(this)+ue(this.minutes(),2)+ue(this.seconds(),2)});k("Hmm",0,0,function(){return""+this.hours()+ue(this.minutes(),2)});k("Hmmss",0,0,function(){return""+this.hours()+ue(this.minutes(),2)+ue(this.seconds(),2)});function Hn(e,r){k(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),r)})}Hn("a",!0);Hn("A",!1);function $n(e,r){return r._meridiemParse}f("a",$n);f("A",$n);f("H",R,Yt);f("h",R,rr);f("k",R,rr);f("HH",R,$);f("hh",R,$);f("kk",R,$);f("hmm",Yn);f("hmmss",Nn);f("Hmm",Yn);f("Hmmss",Nn);q(["H","HH"],N);q(["k","kk"],function(e,r,t){var n=_(e);r[N]=n===24?0:n});q(["a","A"],function(e,r,t){t._isPm=t._locale.isPM(e),t._meridiem=e});q(["h","hh"],function(e,r,t){r[N]=_(e),b(t).bigHour=!0});q("hmm",function(e,r,t){var n=e.length-2;r[N]=_(e.substr(0,n)),r[ee]=_(e.substr(n)),b(t).bigHour=!0});q("hmmss",function(e,r,t){var n=e.length-4,a=e.length-2;r[N]=_(e.substr(0,n)),r[ee]=_(e.substr(n,2)),r[ye]=_(e.substr(a)),b(t).bigHour=!0});q("Hmm",function(e,r,t){var n=e.length-2;r[N]=_(e.substr(0,n)),r[ee]=_(e.substr(n))});q("Hmmss",function(e,r,t){var n=e.length-4,a=e.length-2;r[N]=_(e.substr(0,n)),r[ee]=_(e.substr(n,2)),r[ye]=_(e.substr(a))});function Mi(e){return(e+"").toLowerCase().charAt(0)==="p"}var xi=/[ap]\.?m?\.?/i,Di=tr("Hours",!0);function Ri(e,r,t){return e>11?t?"pm":"PM":t?"am":"AM"}var zn={calendar:ys,longDateFormat:Ts,invalidDate:Ss,ordinal:qs,dayOfMonthOrdinalParse:Ms,relativeTime:Ds,months:Cs,monthsShort:In,week:ni,weekdays:di,weekdaysMin:mi,weekdaysShort:Cn,meridiemParse:xi},P={},lr={},pr;function Oi(e,r){var t,n=Math.min(e.length,r.length);for(t=0;t<n;t+=1)if(e[t]!==r[t])return t;return n}function tn(e){return e&&e.toLowerCase().replace("_","-")}function Pi(e){for(var r=0,t,n,a,s;r<e.length;){for(s=tn(e[r]).split("-"),t=s.length,n=tn(e[r+1]),n=n?n.split("-"):null;t>0;){if(a=Qr(s.slice(0,t).join("-")),a)return a;if(n&&n.length>=t&&Oi(s,n)>=t-1)break;t--}r++}return pr}function Fi(e){return!!(e&&e.match("^[^/\\\\]*$"))}function Qr(e){var r=null,t;if(P[e]===void 0&&typeof module<"u"&&module&&module.exports&&Fi(e))try{r=pr._abbr,t=require,t("./locale/"+e),De(r)}catch{P[e]=null}return P[e]}function De(e,r){var t;return e&&(W(r)?t=Te(e):t=Et(e,r),t?pr=t:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),pr._abbr}function Et(e,r){if(r!==null){var t,n=zn;if(r.abbr=e,P[e]!=null)On("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=P[e]._config;else if(r.parentLocale!=null)if(P[r.parentLocale]!=null)n=P[r.parentLocale]._config;else if(t=Qr(r.parentLocale),t!=null)n=t._config;else return lr[r.parentLocale]||(lr[r.parentLocale]=[]),lr[r.parentLocale].push({name:e,config:r}),null;return P[e]=new Rt(pt(n,r)),lr[e]&&lr[e].forEach(function(a){Et(a.name,a.config)}),De(e),P[e]}else return delete P[e],null}function Ai(e,r){if(r!=null){var t,n,a=zn;P[e]!=null&&P[e].parentLocale!=null?P[e].set(pt(P[e]._config,r)):(n=Qr(e),n!=null&&(a=n._config),r=pt(a,r),n==null&&(r.abbr=e),t=new Rt(r),t.parentLocale=P[e],P[e]=t),De(e)}else P[e]!=null&&(P[e].parentLocale!=null?(P[e]=P[e].parentLocale,e===De()&&De(e)):P[e]!=null&&delete P[e]);return P[e]}function Te(e){var r;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return pr;if(!re(e)){if(r=Qr(e),r)return r;e=[e]}return Pi(e)}function Yi(){return kt(P)}function Ut(e){var r,t=e._a;return t&&b(e).overflow===-2&&(r=t[he]<0||t[he]>11?he:t[le]<1||t[le]>Nt(t[U],t[he])?le:t[N]<0||t[N]>24||t[N]===24&&(t[ee]!==0||t[ye]!==0||t[Ee]!==0)?N:t[ee]<0||t[ee]>59?ee:t[ye]<0||t[ye]>59?ye:t[Ee]<0||t[Ee]>999?Ee:-1,b(e)._overflowDayOfYear&&(r<U||r>le)&&(r=le),b(e)._overflowWeeks&&r===-1&&(r=Is),b(e)._overflowWeekday&&r===-1&&(r=Es),b(e).overflow=r),e}var Ni=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Bi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Vi=/Z|[+-]\d\d(?::?\d\d)?/,jr=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],ut=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ii=/^\/?Date\((-?\d+)/i,Ei=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Ui={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Kn(e){var r,t,n=e._i,a=Ni.exec(n)||Bi.exec(n),s,l,o,d,g=jr.length,c=ut.length;if(a){for(b(e).iso=!0,r=0,t=g;r<t;r++)if(jr[r][1].exec(a[1])){l=jr[r][0],s=jr[r][2]!==!1;break}if(l==null){e._isValid=!1;return}if(a[3]){for(r=0,t=c;r<t;r++)if(ut[r][1].exec(a[3])){o=(a[2]||" ")+ut[r][0];break}if(o==null){e._isValid=!1;return}}if(!s&&o!=null){e._isValid=!1;return}if(a[4])if(Vi.exec(a[4]))d="Z";else{e._isValid=!1;return}e._f=l+(o||"")+(d||""),Lt(e)}else e._isValid=!1}function Gi(e,r,t,n,a,s){var l=[Li(e),In.indexOf(r),parseInt(t,10),parseInt(n,10),parseInt(a,10)];return s&&l.push(parseInt(s,10)),l}function Li(e){var r=parseInt(e,10);return r<=49?2e3+r:r<=999?1900+r:r}function Wi(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Ci(e,r,t){if(e){var n=Cn.indexOf(e),a=new Date(r[0],r[1],r[2]).getDay();if(n!==a)return b(t).weekdayMismatch=!0,t._isValid=!1,!1}return!0}function Hi(e,r,t){if(e)return Ui[e];if(r)return 0;var n=parseInt(t,10),a=n%100,s=(n-a)/100;return s*60+a}function Zn(e){var r=Ei.exec(Wi(e._i)),t;if(r){if(t=Gi(r[4],r[3],r[2],r[5],r[6],r[7]),!Ci(r[1],t,e))return;e._a=t,e._tzm=Hi(r[8],r[9],r[10]),e._d=fr.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),b(e).rfc2822=!0}else e._isValid=!1}function $i(e){var r=Ii.exec(e._i);if(r!==null){e._d=new Date(+r[1]);return}if(Kn(e),e._isValid===!1)delete e._isValid;else return;if(Zn(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:m.createFromInputFallback(e)}m.createFromInputFallback=Z("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function $e(e,r,t){return e??r??t}function zi(e){var r=new Date(m.now());return e._useUTC?[r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate()]:[r.getFullYear(),r.getMonth(),r.getDate()]}function Gt(e){var r,t,n=[],a,s,l;if(!e._d){for(a=zi(e),e._w&&e._a[le]==null&&e._a[he]==null&&Ki(e),e._dayOfYear!=null&&(l=$e(e._a[U],a[U]),(e._dayOfYear>dr(l)||e._dayOfYear===0)&&(b(e)._overflowDayOfYear=!0),t=fr(l,0,e._dayOfYear),e._a[he]=t.getUTCMonth(),e._a[le]=t.getUTCDate()),r=0;r<3&&e._a[r]==null;++r)e._a[r]=n[r]=a[r];for(;r<7;r++)e._a[r]=n[r]=e._a[r]==null?r===2?1:0:e._a[r];e._a[N]===24&&e._a[ee]===0&&e._a[ye]===0&&e._a[Ee]===0&&(e._nextDay=!0,e._a[N]=0),e._d=(e._useUTC?fr:ri).apply(null,n),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[N]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(b(e).weekdayMismatch=!0)}}function Ki(e){var r,t,n,a,s,l,o,d,g;r=e._w,r.GG!=null||r.W!=null||r.E!=null?(s=1,l=4,t=$e(r.GG,e._a[U],cr(D(),1,4).year),n=$e(r.W,1),a=$e(r.E,1),(a<1||a>7)&&(d=!0)):(s=e._locale._week.dow,l=e._locale._week.doy,g=cr(D(),s,l),t=$e(r.gg,e._a[U],g.year),n=$e(r.w,g.week),r.d!=null?(a=r.d,(a<0||a>6)&&(d=!0)):r.e!=null?(a=r.e+s,(r.e<0||r.e>6)&&(d=!0)):a=s),n<1||n>be(t,s,l)?b(e)._overflowWeeks=!0:d!=null?b(e)._overflowWeekday=!0:(o=Wn(t,n,a,s,l),e._a[U]=o.year,e._dayOfYear=o.dayOfYear)}m.ISO_8601=function(){};m.RFC_2822=function(){};function Lt(e){if(e._f===m.ISO_8601){Kn(e);return}if(e._f===m.RFC_2822){Zn(e);return}e._a=[],b(e).empty=!0;var r=""+e._i,t,n,a,s,l,o=r.length,d=0,g,c;for(a=Pn(e._f,e._locale).match(Ot)||[],c=a.length,t=0;t<c;t++)s=a[t],n=(r.match(Ns(s,e))||[])[0],n&&(l=r.substr(0,r.indexOf(n)),l.length>0&&b(e).unusedInput.push(l),r=r.slice(r.indexOf(n)+n.length),d+=n.length),Ke[s]?(n?b(e).empty=!1:b(e).unusedTokens.push(s),Vs(s,n,e)):e._strict&&!n&&b(e).unusedTokens.push(s);b(e).charsLeftOver=o-d,r.length>0&&b(e).unusedInput.push(r),e._a[N]<=12&&b(e).bigHour===!0&&e._a[N]>0&&(b(e).bigHour=void 0),b(e).parsedDateParts=e._a.slice(0),b(e).meridiem=e._meridiem,e._a[N]=Zi(e._locale,e._a[N],e._meridiem),g=b(e).era,g!==null&&(e._a[U]=e._locale.erasConvertYear(g,e._a[U])),Gt(e),Ut(e)}function Zi(e,r,t){var n;return t==null?r:e.meridiemHour!=null?e.meridiemHour(r,t):(e.isPM!=null&&(n=e.isPM(t),n&&r<12&&(r+=12),!n&&r===12&&(r=0)),r)}function Ji(e){var r,t,n,a,s,l,o=!1,d=e._f.length;if(d===0){b(e).invalidFormat=!0,e._d=new Date(NaN);return}for(a=0;a<d;a++)s=0,l=!1,r=Dt({},e),e._useUTC!=null&&(r._useUTC=e._useUTC),r._f=e._f[a],Lt(r),xt(r)&&(l=!0),s+=b(r).charsLeftOver,s+=b(r).unusedTokens.length*10,b(r).score=s,o?s<n&&(n=s,t=r):(n==null||s<n||l)&&(n=s,t=r,l&&(o=!0));Me(e,t||r)}function Qi(e){if(!e._d){var r=Pt(e._i),t=r.day===void 0?r.date:r.day;e._a=Dn([r.year,r.month,t,r.hour,r.minute,r.second,r.millisecond],function(n){return n&&parseInt(n,10)}),Gt(e)}}function Xi(e){var r=new yr(Ut(Jn(e)));return r._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Jn(e){var r=e._i,t=e._f;return e._locale=e._locale||Te(e._l),r===null||t===void 0&&r===""?Cr({nullInput:!0}):(typeof r=="string"&&(e._i=r=e._locale.preparse(r)),te(r)?new yr(Ut(r)):(hr(r)?e._d=r:re(t)?Ji(e):t?Lt(e):el(e),xt(e)||(e._d=null),e))}function el(e){var r=e._i;W(r)?e._d=new Date(m.now()):hr(r)?e._d=new Date(r.valueOf()):typeof r=="string"?$i(e):re(r)?(e._a=Dn(r.slice(0),function(t){return parseInt(t,10)}),Gt(e)):Ue(r)?Qi(e):_e(r)?e._d=new Date(r):m.createFromInputFallback(e)}function Qn(e,r,t,n,a){var s={};return(r===!0||r===!1)&&(n=r,r=void 0),(t===!0||t===!1)&&(n=t,t=void 0),(Ue(e)&&Mt(e)||re(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=a,s._l=t,s._i=e,s._f=r,s._strict=n,Xi(s)}function D(e,r,t,n){return Qn(e,r,t,n,!1)}var rl=Z("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=D.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Cr()}),tl=Z("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=D.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Cr()});function Xn(e,r){var t,n;if(r.length===1&&re(r[0])&&(r=r[0]),!r.length)return D();for(t=r[0],n=1;n<r.length;++n)(!r[n].isValid()||r[n][e](t))&&(t=r[n]);return t}function nl(){var e=[].slice.call(arguments,0);return Xn("isBefore",e)}function al(){var e=[].slice.call(arguments,0);return Xn("isAfter",e)}var sl=function(){return Date.now?Date.now():+new Date},or=["year","quarter","month","week","day","hour","minute","second","millisecond"];function il(e){var r,t=!1,n,a=or.length;for(r in e)if(w(e,r)&&!(F.call(or,r)!==-1&&(e[r]==null||!isNaN(e[r]))))return!1;for(n=0;n<a;++n)if(e[or[n]]){if(t)return!1;parseFloat(e[or[n]])!==_(e[or[n]])&&(t=!0)}return!0}function ll(){return this._isValid}function ol(){return ne(NaN)}function Xr(e){var r=Pt(e),t=r.year||0,n=r.quarter||0,a=r.month||0,s=r.week||r.isoWeek||0,l=r.day||0,o=r.hour||0,d=r.minute||0,g=r.second||0,c=r.millisecond||0;this._isValid=il(r),this._milliseconds=+c+g*1e3+d*6e4+o*1e3*60*60,this._days=+l+s*7,this._months=+a+n*3+t*12,this._data={},this._locale=Te(),this._bubble()}function Ar(e){return e instanceof Xr}function yt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function ul(e,r,t){var n=Math.min(e.length,r.length),a=Math.abs(e.length-r.length),s=0,l;for(l=0;l<n;l++)_(e[l])!==_(r[l])&&s++;return s+a}function ea(e,r){k(e,0,0,function(){var t=this.utcOffset(),n="+";return t<0&&(t=-t,n="-"),n+ue(~~(t/60),2)+r+ue(~~t%60,2)})}ea("Z",":");ea("ZZ","");f("Z",Zr);f("ZZ",Zr);q(["Z","ZZ"],function(e,r,t){t._useUTC=!0,t._tzm=Wt(Zr,e)});var dl=/([\+\-]|\d\d)/gi;function Wt(e,r){var t=(r||"").match(e),n,a,s;return t===null?null:(n=t[t.length-1]||[],a=(n+"").match(dl)||["-",0,0],s=+(a[1]*60)+_(a[2]),s===0?0:a[0]==="+"?s:-s)}function Ct(e,r){var t,n;return r._isUTC?(t=r.clone(),n=(te(e)||hr(e)?e.valueOf():D(e).valueOf())-t.valueOf(),t._d.setTime(t._d.valueOf()+n),m.updateOffset(t,!1),t):D(e).local()}function vt(e){return-Math.round(e._d.getTimezoneOffset())}m.updateOffset=function(){};function ml(e,r,t){var n=this._offset||0,a;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Wt(Zr,e),e===null)return this}else Math.abs(e)<16&&!t&&(e=e*60);return!this._isUTC&&r&&(a=vt(this)),this._offset=e,this._isUTC=!0,a!=null&&this.add(a,"m"),n!==e&&(!r||this._changeInProgress?na(this,ne(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,m.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?n:vt(this)}function gl(e,r){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,r),this):-this.utcOffset()}function fl(e){return this.utcOffset(0,e)}function cl(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(vt(this),"m")),this}function pl(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Wt(As,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function kl(e){return this.isValid()?(e=e?D(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function hl(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function yl(){if(!W(this._isDSTShifted))return this._isDSTShifted;var e={},r;return Dt(e,this),e=Jn(e),e._a?(r=e._isUTC?de(e._a):D(e._a),this._isDSTShifted=this.isValid()&&ul(e._a,r.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function vl(){return this.isValid()?!this._isUTC:!1}function bl(){return this.isValid()?this._isUTC:!1}function ra(){return this.isValid()?this._isUTC&&this._offset===0:!1}var _l=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Tl=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function ne(e,r){var t=e,n=null,a,s,l;return Ar(e)?t={ms:e._milliseconds,d:e._days,M:e._months}:_e(e)||!isNaN(+e)?(t={},r?t[r]=+e:t.milliseconds=+e):(n=_l.exec(e))?(a=n[1]==="-"?-1:1,t={y:0,d:_(n[le])*a,h:_(n[N])*a,m:_(n[ee])*a,s:_(n[ye])*a,ms:_(yt(n[Ee]*1e3))*a}):(n=Tl.exec(e))?(a=n[1]==="-"?-1:1,t={y:Ie(n[2],a),M:Ie(n[3],a),w:Ie(n[4],a),d:Ie(n[5],a),h:Ie(n[6],a),m:Ie(n[7],a),s:Ie(n[8],a)}):t==null?t={}:typeof t=="object"&&("from"in t||"to"in t)&&(l=wl(D(t.from),D(t.to)),t={},t.ms=l.milliseconds,t.M=l.months),s=new Xr(t),Ar(e)&&w(e,"_locale")&&(s._locale=e._locale),Ar(e)&&w(e,"_isValid")&&(s._isValid=e._isValid),s}ne.fn=Xr.prototype;ne.invalid=ol;function Ie(e,r){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*r}function nn(e,r){var t={};return t.months=r.month()-e.month()+(r.year()-e.year())*12,e.clone().add(t.months,"M").isAfter(r)&&--t.months,t.milliseconds=+r-+e.clone().add(t.months,"M"),t}function wl(e,r){var t;return e.isValid()&&r.isValid()?(r=Ct(r,e),e.isBefore(r)?t=nn(e,r):(t=nn(r,e),t.milliseconds=-t.milliseconds,t.months=-t.months),t):{milliseconds:0,months:0}}function ta(e,r){return function(t,n){var a,s;return n!==null&&!isNaN(+n)&&(On(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=t,t=n,n=s),a=ne(t,n),na(this,a,e),this}}function na(e,r,t,n){var a=r._milliseconds,s=yt(r._days),l=yt(r._months);e.isValid()&&(n=n??!0,l&&Un(e,gr(e,"Month")+l*t),s&&Vn(e,"Date",gr(e,"Date")+s*t),a&&e._d.setTime(e._d.valueOf()+a*t),n&&m.updateOffset(e,s||l))}var Sl=ta(1,"add"),jl=ta(-1,"subtract");function aa(e){return typeof e=="string"||e instanceof String}function ql(e){return te(e)||hr(e)||aa(e)||_e(e)||xl(e)||Ml(e)||e===null||e===void 0}function Ml(e){var r=Ue(e)&&!Mt(e),t=!1,n=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],a,s,l=n.length;for(a=0;a<l;a+=1)s=n[a],t=t||w(e,s);return r&&t}function xl(e){var r=re(e),t=!1;return r&&(t=e.filter(function(n){return!_e(n)&&aa(e)}).length===0),r&&t}function Dl(e){var r=Ue(e)&&!Mt(e),t=!1,n=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],a,s;for(a=0;a<n.length;a+=1)s=n[a],t=t||w(e,s);return r&&t}function Rl(e,r){var t=e.diff(r,"days",!0);return t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"}function Ol(e,r){arguments.length===1&&(arguments[0]?ql(arguments[0])?(e=arguments[0],r=void 0):Dl(arguments[0])&&(r=arguments[0],e=void 0):(e=void 0,r=void 0));var t=e||D(),n=Ct(t,this).startOf("day"),a=m.calendarFormat(this,n)||"sameElse",s=r&&(me(r[a])?r[a].call(this,t):r[a]);return this.format(s||this.localeData().calendar(a,this,D(t)))}function Pl(){return new yr(this)}function Fl(e,r){var t=te(e)?e:D(e);return this.isValid()&&t.isValid()?(r=J(r)||"millisecond",r==="millisecond"?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(r).valueOf()):!1}function Al(e,r){var t=te(e)?e:D(e);return this.isValid()&&t.isValid()?(r=J(r)||"millisecond",r==="millisecond"?this.valueOf()<t.valueOf():this.clone().endOf(r).valueOf()<t.valueOf()):!1}function Yl(e,r,t,n){var a=te(e)?e:D(e),s=te(r)?r:D(r);return this.isValid()&&a.isValid()&&s.isValid()?(n=n||"()",(n[0]==="("?this.isAfter(a,t):!this.isBefore(a,t))&&(n[1]===")"?this.isBefore(s,t):!this.isAfter(s,t))):!1}function Nl(e,r){var t=te(e)?e:D(e),n;return this.isValid()&&t.isValid()?(r=J(r)||"millisecond",r==="millisecond"?this.valueOf()===t.valueOf():(n=t.valueOf(),this.clone().startOf(r).valueOf()<=n&&n<=this.clone().endOf(r).valueOf())):!1}function Bl(e,r){return this.isSame(e,r)||this.isAfter(e,r)}function Vl(e,r){return this.isSame(e,r)||this.isBefore(e,r)}function Il(e,r,t){var n,a,s;if(!this.isValid())return NaN;if(n=Ct(e,this),!n.isValid())return NaN;switch(a=(n.utcOffset()-this.utcOffset())*6e4,r=J(r),r){case"year":s=Yr(this,n)/12;break;case"month":s=Yr(this,n);break;case"quarter":s=Yr(this,n)/3;break;case"second":s=(this-n)/1e3;break;case"minute":s=(this-n)/6e4;break;case"hour":s=(this-n)/36e5;break;case"day":s=(this-n-a)/864e5;break;case"week":s=(this-n-a)/6048e5;break;default:s=this-n}return t?s:z(s)}function Yr(e,r){if(e.date()<r.date())return-Yr(r,e);var t=(r.year()-e.year())*12+(r.month()-e.month()),n=e.clone().add(t,"months"),a,s;return r-n<0?(a=e.clone().add(t-1,"months"),s=(r-n)/(n-a)):(a=e.clone().add(t+1,"months"),s=(r-n)/(a-n)),-(t+s)||0}m.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";m.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function El(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Ul(e){if(!this.isValid())return null;var r=e!==!0,t=r?this.clone().utc():this;return t.year()<0||t.year()>9999?Fr(t,r?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):me(Date.prototype.toISOString)?r?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Fr(t,"Z")):Fr(t,r?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Gl(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",r="",t,n,a,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",r="Z"),t="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a="-MM-DD[T]HH:mm:ss.SSS",s=r+'[")]',this.format(t+n+a+s)}function Ll(e){e||(e=this.isUtc()?m.defaultFormatUtc:m.defaultFormat);var r=Fr(this,e);return this.localeData().postformat(r)}function Wl(e,r){return this.isValid()&&(te(e)&&e.isValid()||D(e).isValid())?ne({to:this,from:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function Cl(e){return this.from(D(),e)}function Hl(e,r){return this.isValid()&&(te(e)&&e.isValid()||D(e).isValid())?ne({from:this,to:e}).locale(this.locale()).humanize(!r):this.localeData().invalidDate()}function $l(e){return this.to(D(),e)}function sa(e){var r;return e===void 0?this._locale._abbr:(r=Te(e),r!=null&&(this._locale=r),this)}var ia=Z("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function la(){return this._locale}var Gr=1e3,Ze=60*Gr,Lr=60*Ze,oa=(365*400+97)*24*Lr;function Je(e,r){return(e%r+r)%r}function ua(e,r,t){return e<100&&e>=0?new Date(e+400,r,t)-oa:new Date(e,r,t).valueOf()}function da(e,r,t){return e<100&&e>=0?Date.UTC(e+400,r,t)-oa:Date.UTC(e,r,t)}function zl(e){var r,t;if(e=J(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(t=this._isUTC?da:ua,e){case"year":r=t(this.year(),0,1);break;case"quarter":r=t(this.year(),this.month()-this.month()%3,1);break;case"month":r=t(this.year(),this.month(),1);break;case"week":r=t(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":r=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":r=t(this.year(),this.month(),this.date());break;case"hour":r=this._d.valueOf(),r-=Je(r+(this._isUTC?0:this.utcOffset()*Ze),Lr);break;case"minute":r=this._d.valueOf(),r-=Je(r,Ze);break;case"second":r=this._d.valueOf(),r-=Je(r,Gr);break}return this._d.setTime(r),m.updateOffset(this,!0),this}function Kl(e){var r,t;if(e=J(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(t=this._isUTC?da:ua,e){case"year":r=t(this.year()+1,0,1)-1;break;case"quarter":r=t(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":r=t(this.year(),this.month()+1,1)-1;break;case"week":r=t(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":r=t(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":r=t(this.year(),this.month(),this.date()+1)-1;break;case"hour":r=this._d.valueOf(),r+=Lr-Je(r+(this._isUTC?0:this.utcOffset()*Ze),Lr)-1;break;case"minute":r=this._d.valueOf(),r+=Ze-Je(r,Ze)-1;break;case"second":r=this._d.valueOf(),r+=Gr-Je(r,Gr)-1;break}return this._d.setTime(r),m.updateOffset(this,!0),this}function Zl(){return this._d.valueOf()-(this._offset||0)*6e4}function Jl(){return Math.floor(this.valueOf()/1e3)}function Ql(){return new Date(this.valueOf())}function Xl(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function eo(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function ro(){return this.isValid()?this.toISOString():null}function to(){return xt(this)}function no(){return Me({},b(this))}function ao(){return b(this).overflow}function so(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}k("N",0,0,"eraAbbr");k("NN",0,0,"eraAbbr");k("NNN",0,0,"eraAbbr");k("NNNN",0,0,"eraName");k("NNNNN",0,0,"eraNarrow");k("y",["y",1],"yo","eraYear");k("y",["yy",2],0,"eraYear");k("y",["yyy",3],0,"eraYear");k("y",["yyyy",4],0,"eraYear");f("N",Ht);f("NN",Ht);f("NNN",Ht);f("NNNN",ho);f("NNNNN",yo);q(["N","NN","NNN","NNNN","NNNNN"],function(e,r,t,n){var a=t._locale.erasParse(e,n,t._strict);a?b(t).era=a:b(t).invalidEra=e});f("y",er);f("yy",er);f("yyy",er);f("yyyy",er);f("yo",vo);q(["y","yy","yyy","yyyy"],U);q(["yo"],function(e,r,t,n){var a;t._locale._eraYearOrdinalRegex&&(a=e.match(t._locale._eraYearOrdinalRegex)),t._locale.eraYearOrdinalParse?r[U]=t._locale.eraYearOrdinalParse(e,a):r[U]=parseInt(e,10)});function io(e,r){var t,n,a,s=this._eras||Te("en")._eras;for(t=0,n=s.length;t<n;++t){switch(typeof s[t].since){case"string":a=m(s[t].since).startOf("day"),s[t].since=a.valueOf();break}switch(typeof s[t].until){case"undefined":s[t].until=1/0;break;case"string":a=m(s[t].until).startOf("day").valueOf(),s[t].until=a.valueOf();break}}return s}function lo(e,r,t){var n,a,s=this.eras(),l,o,d;for(e=e.toUpperCase(),n=0,a=s.length;n<a;++n)if(l=s[n].name.toUpperCase(),o=s[n].abbr.toUpperCase(),d=s[n].narrow.toUpperCase(),t)switch(r){case"N":case"NN":case"NNN":if(o===e)return s[n];break;case"NNNN":if(l===e)return s[n];break;case"NNNNN":if(d===e)return s[n];break}else if([l,o,d].indexOf(e)>=0)return s[n]}function oo(e,r){var t=e.since<=e.until?1:-1;return r===void 0?m(e.since).year():m(e.since).year()+(r-e.offset)*t}function uo(){var e,r,t,n=this.localeData().eras();for(e=0,r=n.length;e<r;++e)if(t=this.clone().startOf("day").valueOf(),n[e].since<=t&&t<=n[e].until||n[e].until<=t&&t<=n[e].since)return n[e].name;return""}function mo(){var e,r,t,n=this.localeData().eras();for(e=0,r=n.length;e<r;++e)if(t=this.clone().startOf("day").valueOf(),n[e].since<=t&&t<=n[e].until||n[e].until<=t&&t<=n[e].since)return n[e].narrow;return""}function go(){var e,r,t,n=this.localeData().eras();for(e=0,r=n.length;e<r;++e)if(t=this.clone().startOf("day").valueOf(),n[e].since<=t&&t<=n[e].until||n[e].until<=t&&t<=n[e].since)return n[e].abbr;return""}function fo(){var e,r,t,n,a=this.localeData().eras();for(e=0,r=a.length;e<r;++e)if(t=a[e].since<=a[e].until?1:-1,n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return(this.year()-m(a[e].since).year())*t+a[e].offset;return this.year()}function co(e){return w(this,"_erasNameRegex")||$t.call(this),e?this._erasNameRegex:this._erasRegex}function po(e){return w(this,"_erasAbbrRegex")||$t.call(this),e?this._erasAbbrRegex:this._erasRegex}function ko(e){return w(this,"_erasNarrowRegex")||$t.call(this),e?this._erasNarrowRegex:this._erasRegex}function Ht(e,r){return r.erasAbbrRegex(e)}function ho(e,r){return r.erasNameRegex(e)}function yo(e,r){return r.erasNarrowRegex(e)}function vo(e,r){return r._eraYearOrdinalRegex||er}function $t(){var e=[],r=[],t=[],n=[],a,s,l,o,d,g=this.eras();for(a=0,s=g.length;a<s;++a)l=ve(g[a].name),o=ve(g[a].abbr),d=ve(g[a].narrow),r.push(l),e.push(o),t.push(d),n.push(l),n.push(o),n.push(d);this._erasRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+r.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+t.join("|")+")","i")}k(0,["gg",2],0,function(){return this.weekYear()%100});k(0,["GG",2],0,function(){return this.isoWeekYear()%100});function et(e,r){k(0,[e,e.length],0,r)}et("gggg","weekYear");et("ggggg","weekYear");et("GGGG","isoWeekYear");et("GGGGG","isoWeekYear");f("G",Kr);f("g",Kr);f("GG",R,$);f("gg",R,$);f("GGGG",At,Ft);f("gggg",At,Ft);f("GGGGG",zr,Hr);f("ggggg",zr,Hr);br(["gggg","ggggg","GGGG","GGGGG"],function(e,r,t,n){r[n.substr(0,2)]=_(e)});br(["gg","GG"],function(e,r,t,n){r[n]=m.parseTwoDigitYear(e)});function bo(e){return ma.call(this,e,this.week(),this.weekday()+this.localeData()._week.dow,this.localeData()._week.dow,this.localeData()._week.doy)}function _o(e){return ma.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function To(){return be(this.year(),1,4)}function wo(){return be(this.isoWeekYear(),1,4)}function So(){var e=this.localeData()._week;return be(this.year(),e.dow,e.doy)}function jo(){var e=this.localeData()._week;return be(this.weekYear(),e.dow,e.doy)}function ma(e,r,t,n,a){var s;return e==null?cr(this,n,a).year:(s=be(e,n,a),r>s&&(r=s),qo.call(this,e,r,t,n,a))}function qo(e,r,t,n,a){var s=Wn(e,r,t,n,a),l=fr(s.year,0,s.dayOfYear);return this.year(l.getUTCFullYear()),this.month(l.getUTCMonth()),this.date(l.getUTCDate()),this}k("Q",0,"Qo","quarter");f("Q",Fn);q("Q",function(e,r){r[he]=(_(e)-1)*3});function Mo(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}k("D",["DD",2],"Do","date");f("D",R,rr);f("DD",R,$);f("Do",function(e,r){return e?r._dayOfMonthOrdinalParse||r._ordinalParse:r._dayOfMonthOrdinalParseLenient});q(["D","DD"],le);q("Do",function(e,r){r[le]=_(e.match(R)[0])});var ga=tr("Date",!0);k("DDD",["DDDD",3],"DDDo","dayOfYear");f("DDD",$r);f("DDDD",An);q(["DDD","DDDD"],function(e,r,t){t._dayOfYear=_(e)});function xo(e){var r=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?r:this.add(e-r,"d")}k("m",["mm",2],0,"minute");f("m",R,Yt);f("mm",R,$);q(["m","mm"],ee);var Do=tr("Minutes",!1);k("s",["ss",2],0,"second");f("s",R,Yt);f("ss",R,$);q(["s","ss"],ye);var Ro=tr("Seconds",!1);k("S",0,0,function(){return~~(this.millisecond()/100)});k(0,["SS",2],0,function(){return~~(this.millisecond()/10)});k(0,["SSS",3],0,"millisecond");k(0,["SSSS",4],0,function(){return this.millisecond()*10});k(0,["SSSSS",5],0,function(){return this.millisecond()*100});k(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});k(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});k(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});k(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});f("S",$r,Fn);f("SS",$r,$);f("SSS",$r,An);var xe,fa;for(xe="SSSS";xe.length<=9;xe+="S")f(xe,er);function Oo(e,r){r[Ee]=_(("0."+e)*1e3)}for(xe="S";xe.length<=9;xe+="S")q(xe,Oo);fa=tr("Milliseconds",!1);k("z",0,0,"zoneAbbr");k("zz",0,0,"zoneName");function Po(){return this._isUTC?"UTC":""}function Fo(){return this._isUTC?"Coordinated Universal Time":""}var u=yr.prototype;u.add=Sl;u.calendar=Ol;u.clone=Pl;u.diff=Il;u.endOf=Kl;u.format=Ll;u.from=Wl;u.fromNow=Cl;u.to=Hl;u.toNow=$l;u.get=Gs;u.invalidAt=ao;u.isAfter=Fl;u.isBefore=Al;u.isBetween=Yl;u.isSame=Nl;u.isSameOrAfter=Bl;u.isSameOrBefore=Vl;u.isValid=to;u.lang=ia;u.locale=sa;u.localeData=la;u.max=tl;u.min=rl;u.parsingFlags=no;u.set=Ls;u.startOf=zl;u.subtract=jl;u.toArray=Xl;u.toObject=eo;u.toDate=Ql;u.toISOString=Ul;u.inspect=Gl;typeof Symbol<"u"&&Symbol.for!=null&&(u[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});u.toJSON=ro;u.toString=El;u.unix=Jl;u.valueOf=Zl;u.creationData=so;u.eraName=uo;u.eraNarrow=mo;u.eraAbbr=go;u.eraYear=fo;u.year=Bn;u.isLeapYear=Us;u.weekYear=bo;u.isoWeekYear=_o;u.quarter=u.quarters=Mo;u.month=Gn;u.daysInMonth=Qs;u.week=u.weeks=ii;u.isoWeek=u.isoWeeks=li;u.weeksInYear=So;u.weeksInWeekYear=jo;u.isoWeeksInYear=To;u.isoWeeksInISOWeekYear=wo;u.date=ga;u.day=u.days=bi;u.weekday=_i;u.isoWeekday=Ti;u.dayOfYear=xo;u.hour=u.hours=Di;u.minute=u.minutes=Do;u.second=u.seconds=Ro;u.millisecond=u.milliseconds=fa;u.utcOffset=ml;u.utc=fl;u.local=cl;u.parseZone=pl;u.hasAlignedHourOffset=kl;u.isDST=hl;u.isLocal=vl;u.isUtcOffset=bl;u.isUtc=ra;u.isUTC=ra;u.zoneAbbr=Po;u.zoneName=Fo;u.dates=Z("dates accessor is deprecated. Use date instead.",ga);u.months=Z("months accessor is deprecated. Use month instead",Gn);u.years=Z("years accessor is deprecated. Use year instead",Bn);u.zone=Z("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",gl);u.isDSTShifted=Z("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",yl);function Ao(e){return D(e*1e3)}function Yo(){return D.apply(null,arguments).parseZone()}function ca(e){return e}var S=Rt.prototype;S.calendar=vs;S.longDateFormat=ws;S.invalidDate=js;S.ordinal=xs;S.preparse=ca;S.postformat=ca;S.relativeTime=Rs;S.pastFuture=Os;S.set=hs;S.eras=io;S.erasParse=lo;S.erasConvertYear=oo;S.erasAbbrRegex=po;S.erasNameRegex=co;S.erasNarrowRegex=ko;S.months=zs;S.monthsShort=Ks;S.monthsParse=Js;S.monthsRegex=ei;S.monthsShortRegex=Xs;S.week=ti;S.firstDayOfYear=si;S.firstDayOfWeek=ai;S.weekdays=pi;S.weekdaysMin=hi;S.weekdaysShort=ki;S.weekdaysParse=vi;S.weekdaysRegex=wi;S.weekdaysShortRegex=Si;S.weekdaysMinRegex=ji;S.isPM=Mi;S.meridiem=Ri;function Wr(e,r,t,n){var a=Te(),s=de().set(n,r);return a[t](s,e)}function pa(e,r,t){if(_e(e)&&(r=e,e=void 0),e=e||"",r!=null)return Wr(e,r,t,"month");var n,a=[];for(n=0;n<12;n++)a[n]=Wr(e,n,t,"month");return a}function zt(e,r,t,n){typeof e=="boolean"?(_e(r)&&(t=r,r=void 0),r=r||""):(r=e,t=r,e=!1,_e(r)&&(t=r,r=void 0),r=r||"");var a=Te(),s=e?a._week.dow:0,l,o=[];if(t!=null)return Wr(r,(t+s)%7,n,"day");for(l=0;l<7;l++)o[l]=Wr(r,(l+s)%7,n,"day");return o}function No(e,r){return pa(e,r,"months")}function Bo(e,r){return pa(e,r,"monthsShort")}function Vo(e,r,t){return zt(e,r,t,"weekdays")}function Io(e,r,t){return zt(e,r,t,"weekdaysShort")}function Eo(e,r,t){return zt(e,r,t,"weekdaysMin")}De("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var r=e%10,t=_(e%100/10)===1?"th":r===1?"st":r===2?"nd":r===3?"rd":"th";return e+t}});m.lang=Z("moment.lang is deprecated. Use moment.locale instead.",De);m.langData=Z("moment.langData is deprecated. Use moment.localeData instead.",Te);var pe=Math.abs;function Uo(){var e=this._data;return this._milliseconds=pe(this._milliseconds),this._days=pe(this._days),this._months=pe(this._months),e.milliseconds=pe(e.milliseconds),e.seconds=pe(e.seconds),e.minutes=pe(e.minutes),e.hours=pe(e.hours),e.months=pe(e.months),e.years=pe(e.years),this}function ka(e,r,t,n){var a=ne(r,t);return e._milliseconds+=n*a._milliseconds,e._days+=n*a._days,e._months+=n*a._months,e._bubble()}function Go(e,r){return ka(this,e,r,1)}function Lo(e,r){return ka(this,e,r,-1)}function an(e){return e<0?Math.floor(e):Math.ceil(e)}function Wo(){var e=this._milliseconds,r=this._days,t=this._months,n=this._data,a,s,l,o,d;return e>=0&&r>=0&&t>=0||e<=0&&r<=0&&t<=0||(e+=an(bt(t)+r)*864e5,r=0,t=0),n.milliseconds=e%1e3,a=z(e/1e3),n.seconds=a%60,s=z(a/60),n.minutes=s%60,l=z(s/60),n.hours=l%24,r+=z(l/24),d=z(ha(r)),t+=d,r-=an(bt(d)),o=z(t/12),t%=12,n.days=r,n.months=t,n.years=o,this}function ha(e){return e*4800/146097}function bt(e){return e*146097/4800}function Co(e){if(!this.isValid())return NaN;var r,t,n=this._milliseconds;if(e=J(e),e==="month"||e==="quarter"||e==="year")switch(r=this._days+n/864e5,t=this._months+ha(r),e){case"month":return t;case"quarter":return t/3;case"year":return t/12}else switch(r=this._days+Math.round(bt(this._months)),e){case"week":return r/7+n/6048e5;case"day":return r+n/864e5;case"hour":return r*24+n/36e5;case"minute":return r*1440+n/6e4;case"second":return r*86400+n/1e3;case"millisecond":return Math.floor(r*864e5)+n;default:throw new Error("Unknown unit "+e)}}function we(e){return function(){return this.as(e)}}var ya=we("ms"),Ho=we("s"),$o=we("m"),zo=we("h"),Ko=we("d"),Zo=we("w"),Jo=we("M"),Qo=we("Q"),Xo=we("y"),eu=ya;function ru(){return ne(this)}function tu(e){return e=J(e),this.isValid()?this[e+"s"]():NaN}function Le(e){return function(){return this.isValid()?this._data[e]:NaN}}var nu=Le("milliseconds"),au=Le("seconds"),su=Le("minutes"),iu=Le("hours"),lu=Le("days"),ou=Le("months"),uu=Le("years");function du(){return z(this.days()/7)}var ke=Math.round,ze={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function mu(e,r,t,n,a){return a.relativeTime(r||1,!!t,e,n)}function gu(e,r,t,n){var a=ne(e).abs(),s=ke(a.as("s")),l=ke(a.as("m")),o=ke(a.as("h")),d=ke(a.as("d")),g=ke(a.as("M")),c=ke(a.as("w")),v=ke(a.as("y")),h=s<=t.ss&&["s",s]||s<t.s&&["ss",s]||l<=1&&["m"]||l<t.m&&["mm",l]||o<=1&&["h"]||o<t.h&&["hh",o]||d<=1&&["d"]||d<t.d&&["dd",d];return t.w!=null&&(h=h||c<=1&&["w"]||c<t.w&&["ww",c]),h=h||g<=1&&["M"]||g<t.M&&["MM",g]||v<=1&&["y"]||["yy",v],h[2]=r,h[3]=+e>0,h[4]=n,mu.apply(null,h)}function fu(e){return e===void 0?ke:typeof e=="function"?(ke=e,!0):!1}function cu(e,r){return ze[e]===void 0?!1:r===void 0?ze[e]:(ze[e]=r,e==="s"&&(ze.ss=r-1),!0)}function pu(e,r){if(!this.isValid())return this.localeData().invalidDate();var t=!1,n=ze,a,s;return typeof e=="object"&&(r=e,e=!1),typeof e=="boolean"&&(t=e),typeof r=="object"&&(n=Object.assign({},ze,r),r.s!=null&&r.ss==null&&(n.ss=r.s-1)),a=this.localeData(),s=gu(this,!t,n,a),t&&(s=a.pastFuture(+this,s)),a.postformat(s)}var dt=Math.abs;function Ce(e){return(e>0)-(e<0)||+e}function rt(){if(!this.isValid())return this.localeData().invalidDate();var e=dt(this._milliseconds)/1e3,r=dt(this._days),t=dt(this._months),n,a,s,l,o=this.asSeconds(),d,g,c,v;return o?(n=z(e/60),a=z(n/60),e%=60,n%=60,s=z(t/12),t%=12,l=e?e.toFixed(3).replace(/\.?0+$/,""):"",d=o<0?"-":"",g=Ce(this._months)!==Ce(o)?"-":"",c=Ce(this._days)!==Ce(o)?"-":"",v=Ce(this._milliseconds)!==Ce(o)?"-":"",d+"P"+(s?g+s+"Y":"")+(t?g+t+"M":"")+(r?c+r+"D":"")+(a||n||e?"T":"")+(a?v+a+"H":"")+(n?v+n+"M":"")+(e?v+l+"S":"")):"P0D"}var T=Xr.prototype;T.isValid=ll;T.abs=Uo;T.add=Go;T.subtract=Lo;T.as=Co;T.asMilliseconds=ya;T.asSeconds=Ho;T.asMinutes=$o;T.asHours=zo;T.asDays=Ko;T.asWeeks=Zo;T.asMonths=Jo;T.asQuarters=Qo;T.asYears=Xo;T.valueOf=eu;T._bubble=Wo;T.clone=ru;T.get=tu;T.milliseconds=nu;T.seconds=au;T.minutes=su;T.hours=iu;T.days=lu;T.weeks=du;T.months=ou;T.years=uu;T.humanize=pu;T.toISOString=rt;T.toString=rt;T.toJSON=rt;T.locale=sa;T.localeData=la;T.toIsoString=Z("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rt);T.lang=ia;k("X",0,0,"unix");k("x",0,0,"valueOf");f("x",Kr);f("X",Ys);q("X",function(e,r,t){t._d=new Date(parseFloat(e)*1e3)});q("x",function(e,r,t){t._d=new Date(_(e))});//! moment.js
m.version="2.30.1";ps(D);m.fn=u;m.min=nl;m.max=al;m.now=sl;m.utc=de;m.unix=Ao;m.months=No;m.isDate=hr;m.locale=De;m.invalid=Cr;m.duration=ne;m.isMoment=te;m.weekdays=Vo;m.parseZone=Yo;m.localeData=Te;m.isDuration=Ar;m.monthsShort=Bo;m.weekdaysMin=Eo;m.defineLocale=Et;m.updateLocale=Ai;m.locales=Yi;m.weekdaysShort=Io;m.normalizeUnits=J;m.relativeTimeRounding=fu;m.relativeTimeThreshold=cu;m.calendarFormat=Rl;m.prototype=u;m.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};var X=(e=>(e.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",e.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",e.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",e.GOD_TRO="GOD_TRO",e))(X||{}),Kt=(e=>(e.VURDER_TILBAKEKREVING="5002",e))(Kt||{});const ku="_button_8q57x_1",hu="_cancelButton_8q57x_5",sn={button:ku,cancelButton:hu},yu=(e,r)=>t=>t&&(Wa(t)(V(e.tom.toString()).subtract(1,"day"))||Ca(t)(e.fom))?r.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,vu=(e,r)=>{const t=V(e.forstePeriodeTomDato).add(1,"days"),n={fom:r.fom,tom:e.forstePeriodeTomDato},a={fom:t.format(Ka),tom:r.tom};return{forstePeriode:n,andrePeriode:a}},va=({periodeData:e,showModal:r,cancelEvent:t,finnesBelopMed0Verdi:n,splitPeriod:a})=>{const s=Pe(),l=wn();return i.jsx(vn,{formMethods:l,onSubmit:o=>a(vu(o,e)),children:i.jsxs(wr,{open:r,"aria-label":s.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:t,width:"medium",children:[i.jsx(wr.Header,{children:i.jsx(Vr,{size:"small",children:i.jsx(p,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),i.jsx(wr.Body,{children:i.jsxs(E,{gap:"4",children:[i.jsxs("div",{children:[i.jsx(Oe,{size:"small",children:i.jsx(p,{id:"DelOppPeriodeModalImpl.Periode"})}),i.jsx(H,{size:"small",children:`${V(e.fom.toString()).format(Qe)} - ${V(e.tom.toString()).format(Qe)}`})]}),i.jsx(Ba,{name:"forstePeriodeTomDato",label:i.jsx(p,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[I,La,yu(e,s)],fromDate:V(e.fom).toDate(),toDate:V(e.tom).toDate()}),n&&i.jsx(Sn,{variant:"error",children:i.jsx(p,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),i.jsxs(wr.Footer,{children:[i.jsx(K,{size:"small",variant:"primary",className:sn.button,disabled:!l.formState.isDirty,children:i.jsx(p,{id:"DelOppPeriodeModalImpl.Ok"})}),i.jsx(K,{size:"small",variant:"secondary",onClick:t,className:sn.cancelButton,type:"button",children:i.jsx(p,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};va.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const bu="_margin_wnej3_37",mt={margin:bu},_u=!1,ba=({setNestePeriode:e,setForrigePeriode:r,readOnly:t,lukkPeriode:n,periode:a,beregnBelop:s,behandlingUuid:l,oppdaterSplittedePerioder:o})=>{const d=Pe(),[g,c]=C.useState(!1),[v,h]=C.useState(!1),M=j=>{c(!0),j.preventDefault()},Se=()=>{c(!1)},je=j=>{h(!1);const ae={belop:a.feilutbetaling,fom:j.forstePeriode.fom,tom:j.forstePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "},se={belop:a.feilutbetaling,fom:j.andrePeriode.fom,tom:j.andrePeriode.tom,begrunnelse:a.begrunnelse?a.begrunnelse:" "};s({behandlingUuid:l,perioder:[ae,se]}).then(y=>{const{perioder:ie}=y;if(ie.some(Fe=>Fe.belop===0))h(!0);else{const Fe={fom:ae.fom,tom:ae.tom,feilutbetaling:ie[0].belop},Ae={fom:se.fom,tom:se.tom,feilutbetaling:ie[1].belop};Se(),o([Fe,Ae])}})};return i.jsxs(oe,{children:[i.jsxs(Oe,{size:"small",children:[i.jsx(p,{id:"PeriodeController.Detaljer"}),_u]}),!t&&i.jsxs(i.Fragment,{children:[i.jsx(Qt,{}),i.jsx(K,{className:mt.margin,size:"xsmall",icon:i.jsx(us,{"aria-hidden":!0}),onClick:M,variant:"tertiary-neutral",type:"button",title:d.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:i.jsx(p,{id:"PeriodeController.DelOppPerioden"})})]}),g&&i.jsx(va,{cancelEvent:Se,showModal:g,periodeData:a,splitPeriod:je,finnesBelopMed0Verdi:v}),i.jsx(Qt,{}),i.jsx(K,{className:mt.margin,size:"xsmall",icon:i.jsx(jn,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:d.formatMessage({id:"PeriodeController.prevPeriod"}),children:i.jsx(p,{id:"PeriodeController.prevPeriodShort"})}),i.jsx(K,{className:mt.margin,size:"xsmall",icon:i.jsx(qn,{"aria-hidden":!0}),onClick:e,variant:"secondary-neutral",type:"button",title:d.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:i.jsx(p,{id:"PeriodeController.nextPeriodShort"})}),i.jsx(K,{size:"xsmall",icon:i.jsx(ds,{"aria-hidden":!0}),onClick:n,variant:"tertiary-neutral",type:"button",title:d.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};ba.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
    hendelseType: string;
    hendelseUndertype?: string;
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
  hendelseType: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Tu="_infoSummary_14r2l_1",wu="_positivNumber_14r2l_8",Su="_redNumber_14r2l_12",ju="_resultName_14r2l_17",ur={infoSummary:Tu,positivNumber:wu,redNumber:Su,resultName:ju},_a=({fom:e,tom:r,feilutbetaling:t,arsakHendelseNavn:n})=>{const a=Za(e,r);return i.jsxs(E,{gap:"2",className:ur.infoSummary,children:[i.jsxs(oe,{justify:"space-between",children:[i.jsx(Oe,{size:"small",children:`${V(e).format(Qe)} - ${V(r).format(Qe)}`}),i.jsx(H,{size:"small",children:a.formattedString})]}),i.jsxs(oe,{gap:"4",children:[i.jsxs(H,{size:"small",className:ur.resultName,children:[i.jsx(p,{id:"PeriodeInformasjon.Feilutbetaling"}),":",i.jsx("span",{className:t?ur.redNumber:ur.positivNumber,children:Xe(t)})]}),n&&i.jsx(H,{size:"small",className:ur.resultName,children:n})]})]})};_a.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var G=(e=>(e.FORSETT="FORSETT",e.GROVT_UAKTSOM="GROVT_UAKTSOM",e.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",e))(G||{});const qu=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var Ta=(e=>(e.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",e.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",e.STOERRELSE_BELOEP="STOERRELSE_BELOEP",e.TID_FRA_UTBETALING="TID_FRA_UTBETALING",e.ANNET="ANNET",e))(Ta||{});const wa=({name:e,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:t})=>{const n=qt(),a=`${e}.skalDetTilleggesRenter`;return C.useEffect(()=>{n.getValues(a)===void 0&&n.setValue(a,!1)},[]),i.jsx("div",{children:i.jsxs(Ge,{alignOffset:t?320:360,children:[t&&i.jsxs(E,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(p,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx(H,{size:"small",children:"100 %"}),i.jsx(Re,{name:`${e}.skalDetTilleggesRenter`,label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[I],radios:[{label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:r,parse:s=>s==="true",isHorizontal:!0})]}),!t&&i.jsxs(E,{gap:"2",children:[i.jsxs("div",{children:[i.jsx(Ir,{children:i.jsx(p,{id:"AktsomhetGradForsettFormPanel.Andel"})}),i.jsx(H,{size:"small",children:"100 %"})]}),i.jsx(H,{size:"small",children:i.jsx(p,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})};wa.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const kr="Egendefinert",_t=["30","50","70",kr],Mu="_suffix_cawxu_1",xu="_suffixGrovText_cawxu_4",Du="_labelPadding_cawxu_8",Ru="_inputFelt_cawxu_12",He={suffix:Mu,suffixGrovText:xu,labelPadding:Du,inputFelt:Ru},ln=_n(0),Ou=Ha(99.99),Pu=e=>{const r=e.toString().replace(/\s/g,""),t=parseInt(r,10);return Number.isNaN(t)?"":t},Fu=(e,r)=>t=>{if(t>=r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},Sa=({name:e,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,harMerEnnEnYtelse:a,feilutbetalingBelop:s,andelSomTilbakekreves:l})=>{const o=Pe(),d=qt(),g=`${e}.skalDetTilleggesRenter`;return C.useEffect(()=>{d.getValues(g)===void 0&&d.setValue(g,!1)},[]),i.jsxs(E,{gap:"4",children:[i.jsx(Re,{name:`${e}.harGrunnerTilReduksjon`,label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[I],radios:[{label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:t,isTrueOrFalseSelection:!0,isHorizontal:!0}),r&&i.jsx(Ge,{alignOffset:24,children:i.jsxs(oe,{gap:"4",children:[!a&&l!==kr&&i.jsxs(i.Fragment,{children:[i.jsx(Oe,{size:"small",children:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(oe,{gap:"2",children:[i.jsx(bn,{name:`${e}.andelSomTilbakekreves`,label:"",validate:[I],selectValues:_t.map(c=>i.jsx("option",{value:c,children:c},c))}),i.jsx("div",{className:He.suffix,children:"%"})]})]}),!a&&l===kr&&i.jsxs(i.Fragment,{children:[i.jsx(Oe,{size:"small",children:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),i.jsxs(oe,{gap:"4",children:[i.jsx(gt,{className:He.inputFelt,name:`${e}.andelSomTilbakekrevesManuell`,readOnly:t,validate:[I,ln,Ou],normalizeOnBlur:c=>Number.isNaN(c)?c:parseFloat(c.toString()).toFixed(2),format:c=>c.toString().replace(".",","),parse:c=>c.toString().replace(",",".")}),i.jsx("div",{className:n===G.GROVT_UAKTSOM?He.suffixGrovText:He.suffix,children:"%"})]})]}),a&&i.jsx(gt,{name:`${e}.belopSomSkalTilbakekreves`,label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[I,ln,Fu(o,s)],readOnly:t,format:Xe,parse:Pu}),n===G.GROVT_UAKTSOM&&i.jsxs("div",{children:[i.jsx(Ir,{children:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),i.jsx(H,{size:"small",className:He.labelPadding,children:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),r===!1&&i.jsxs(Ge,{alignOffset:90,children:[i.jsx(Ir,{children:i.jsx(p,{id:a?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),i.jsxs(E,{gap:"4",children:[i.jsx(H,{size:"small",className:He.labelPadding,children:a?Xe(s):"100%"}),n===G.GROVT_UAKTSOM&&i.jsx(Re,{name:g,label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[I],radios:[{label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:t,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})]})};Sa.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const Au=St(3),Yu=jt(1500),Tt=({name:e,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:d})=>{const g=Pe(),{watch:c}=qt(),v=!s.some(M=>!!c(`${e}.${M.kode}`)),h=Va(e,v?g.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return i.jsxs(E,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(p,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),i.jsx("div",{children:s.map(M=>i.jsx(Ia,{name:`${e}.${M.kode}`,label:M.navn,readOnly:t},M.kode))}),a&&i.jsx(mr,{name:`${e}.annetBegrunnelse`,label:"",validate:[I,Au,Yu,Nr],maxLength:1500,readOnly:t}),h&&i.jsx(ts,{children:h}),i.jsx(Sa,{name:e,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,harMerEnnEnYtelse:l,feilutbetalingBelop:o,andelSomTilbakekreves:d})]})};Tt.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Nu="_explanationTextarea_1kabz_1",Bu="_panelWidth_1kabz_5",ja={explanationTextarea:Nu,panelWidth:Bu},Vu=St(3),Iu=jt(1500),on=(e,r,t)=>i.jsxs(E,{gap:"4",children:[i.jsx(Oe,{size:"small",children:i.jsx(p,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),i.jsx(mr,{name:`${e}.sarligGrunnerBegrunnelse`,label:t.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[I,Vu,Iu,Nr],maxLength:1500,readOnly:r,className:ja.explanationTextarea,description:t.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]}),qa=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:t,erSerligGrunnAnnetValgt:n,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:d,erValgtResultatTypeForstoBurdeForstaatt:g,name:c})=>{const v=Pe(),h=g?180:200;return i.jsx(Ge,{alignOffset:t===G.GROVT_UAKTSOM?h:20,children:i.jsxs("div",{className:ja.panelWidth,children:[t===G.SIMPEL_UAKTSOM&&o&&i.jsx(Re,{name:`${c}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:i.jsx(p,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[I],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:r,radios:[{label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:i.jsxs("div",{style:{marginTop:"10px"},children:[on(c,r,v),i.jsx(Tt,{name:c,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:n,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:t,andelSomTilbakekreves:d})]})},{label:i.jsx(p,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:i.jsx("div",{style:{marginTop:"10px"},children:i.jsx(Ge,{alignOffset:55,children:i.jsx(p,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})})}]}),(t!==G.SIMPEL_UAKTSOM||!o)&&i.jsxs(i.Fragment,{children:[on(c,r,v),i.jsx(Tt,{name:c,harGrunnerTilReduksjon:e,erSerligGrunnAnnetValgt:n,sarligGrunnTyper:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,readOnly:r,handletUaktsomhetGrad:t,andelSomTilbakekreves:d})]})]})})};qa.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Ma=({harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:t,erSerligGrunnAnnetValgt:n,erValgtResultatTypeForstoBurdeForstaatt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:d,andelSomTilbakekreves:g,name:c})=>i.jsxs(i.Fragment,{children:[t===G.FORSETT&&i.jsx(wa,{name:c,readOnly:r,erValgtResultatTypeForstoBurdeForstaatt:a}),t!==G.FORSETT&&i.jsx(qa,{name:c,harGrunnerTilReduksjon:e,readOnly:r,handletUaktsomhetGrad:t,erSerligGrunnAnnetValgt:n,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:o,erTotalBelopUnder4Rettsgebyr:d,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:a})]});Ma.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Eu=[G.GROVT_UAKTSOM,G.SIMPEL_UAKTSOM,G.FORSETT],Uu={[G.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[G.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[G.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},nr=({readOnly:e,resetFields:r,handletUaktsomhetGrad:t,harGrunnerTilReduksjon:n,erSerligGrunnAnnetValgt:a=!1,erValgtResultatTypeForstoBurdeForstaatt:s=!1,aktsomhetTyper:l,sarligGrunnTyper:o,antallYtelser:d,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:c,andelSomTilbakekreves:v,name:h})=>i.jsxs(i.Fragment,{children:[i.jsx(Re,{name:`${h}.handletUaktsomhetGrad`,label:i.jsx(p,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[I],radios:l.map(M=>({label:s?i.jsx(p,{id:Uu[M.kode]}):M.navn,value:M.kode})),isReadOnly:e,onChange:r,isHorizontal:!0}),Eu.some(M=>M===t)&&i.jsx(Ma,{name:`${h}.${t}`,harGrunnerTilReduksjon:n,readOnly:e,handletUaktsomhetGrad:t,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:o,harMerEnnEnYtelse:d>1,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:c,andelSomTilbakekreves:v})]}),Gu=(e,r)=>{const t=parseInt(e,10);return!r||Number.isNaN(t)?{}:{andelTilbakekreves:t}},Lu=(e,r)=>{const t=parseFloat(e);return!r||Number.isNaN(t)?{}:{andelTilbakekreves:t}},Wu=(e,r)=>{if(e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const t=r.reduce((s,l)=>e[l.kode]?s.concat(l.kode):s,[]),{harGrunnerTilReduksjon:n}=e,a=e.andelSomTilbakekreves===kr?Lu(e.andelSomTilbakekrevesManuell,n):Gu(e.andelSomTilbakekreves,n);return{harGrunnerTilReduksjon:n,ileggRenter:n?void 0:e.skalDetTilleggesRenter,sarligGrunner:t.length>0?t:void 0,tilbakekrevesBelop:e.harGrunnerTilReduksjon?Tn(e.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:e.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...a}};nr.transformValues=(e,r,t)=>{const n=e[e.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:e.handletUaktsomhetGrad,begrunnelse:t,aktsomhetInfo:n?Wu(n,r):null}};const Cu=(e,r)=>({andelSomTilbakekreves:r===void 0||_t.includes(r)?r:kr,andelSomTilbakekrevesManuell:r&&_t.includes(r)?void 0:e.andelTilbakekreves,harGrunnerTilReduksjon:e.harGrunnerTilReduksjon,skalDetTilleggesRenter:e.ileggRenter,belopSomSkalTilbakekreves:e.tilbakekrevesBelop,annetBegrunnelse:e.annetBegrunnelse,sarligGrunnerBegrunnelse:Pr(e.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:e.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...e.sarligGrunner?e.sarligGrunner.reduce((t,n)=>({...t,[n.kode??n]:!0}),{}):{}});nr.buildInitalValues=e=>{const{aktsomhet:r,aktsomhetInfo:t}=e,n=t&&t.andelTilbakekreves!==void 0?`${t.andelTilbakekreves}`:void 0,a=t?{[r.kode&&"kode"in r?r.kode:r]:Cu(t,n)}:{};return{handletUaktsomhetGrad:r&&r.kode&&"kode"in r?r.kode:r,...a}};nr.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildInitalValues",docblock:null,modifiers:["static"],params:[{name:"vilkarResultatInfo",optional:!1,type:{name:"signature",type:"object",raw:`{
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
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const xa=()=>i.jsxs(oe,{gap:"4",children:[i.jsx(mr,{name:"foreldetBegrunnelse",label:i.jsx(p,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),i.jsx(Re,{name:"periodenErForeldet",label:i.jsx(Ir,{children:i.jsx(p,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:i.jsx(p,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]});xa.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const Hu="_arrowbox_ych2z_1",$u="_tilbakekrevdBelopInput_ych2z_4",un={arrowbox:Hu,tilbakekrevdBelopInput:$u},zu=_n(1),Ku=e=>{const r=e.toString().replace(/\s/g,""),t=parseInt(r,10);return Number.isNaN(t)?"":t},Zu=(e,r)=>t=>{if(t>r)return e.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ar=({name:e,readOnly:r,erBelopetIBehold:t,feilutbetalingBelop:n})=>{const a=Pe();return i.jsxs(E,{gap:"2",children:[i.jsx(Re,{name:`${e}.erBelopetIBehold`,label:i.jsx(p,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[I],radios:[{label:i.jsx(p,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:i.jsx(p,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0}),i.jsxs("div",{className:un.arrowbox,children:[t===!0&&i.jsx(Ge,{alignOffset:25,children:i.jsx(gt,{name:`${e}.tilbakekrevdBelop`,label:i.jsx(p,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[I,zu,Zu(a,n)],readOnly:r,className:un.tilbakekrevdBelopInput,format:Xe,parse:Ku})}),t===!1&&i.jsx(Ge,{alignOffset:90,children:i.jsx(H,{size:"small",children:i.jsx(p,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ar.transformValues=(e,r)=>({"@type":"godTro",begrunnelse:r,erBelopetIBehold:e.erBelopetIBehold,tilbakekrevesBelop:e.erBelopetIBehold?Tn(e.tilbakekrevdBelop):void 0});ar.buildIntialValues=e=>({erBelopetIBehold:e.erBelopetIBehold,tilbakekrevdBelop:e.tilbakekrevesBelop});ar.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Ju="_feilutbetalingTable_1fsd2_1",Qu={feilutbetalingTable:Ju},Da=({ytelser:e})=>{if(e.length===0)return null;let r=0;return i.jsxs(ce,{className:Qu.feilutbetalingTable,children:[i.jsx(ce.Header,{children:i.jsxs(ce.Row,{children:[i.jsx(ce.HeaderCell,{scope:"col",children:i.jsx(p,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),i.jsx(ce.HeaderCell,{scope:"col",children:i.jsx(p,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),i.jsx(ce.Body,{children:e.map(t=>(r+=1,i.jsxs(ce.Row,{children:[i.jsx(ce.DataCell,{children:i.jsx(H,{size:"small",children:t.aktivitet})}),i.jsx(ce.DataCell,{children:i.jsx(H,{size:"small",children:Xe(t.belop)})})]},t.aktivitet+t.belop+r)))})]})};Da.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Xu="_explanationTextarea_1udkt_1",ed="_leftColumn_1udkt_5",rd="_rightColumn_1udkt_9",td="_selectWidth_1udkt_12",qr={explanationTextarea:Xu,leftColumn:ed,rightColumn:rd,selectWidth:td},dn=St(3),mn=jt(1500),Ra=({data:e,periode:r,skjulPeriode:t,readOnly:n,oppdaterPeriode:a,vilkarsVurdertePerioder:s,kodeverkSamlingFpTilbake:l,antallPerioderMedAksjonspunkt:o})=>{const d=Pe(),[g,c]=C.useState(!1),v=wn({defaultValues:r}),h=v.watch("valgtVilkarResultatType"),M=v.watch(`${h}.handletUaktsomhetGrad`),Se=v.watch(`${h}.${M}.harGrunnerTilReduksjon`),je=v.watch(`${h}.${M}.andelSomTilbakekreves`),j=v.watch(`${h}.${M}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),ae=v.watch(`${h}.${M}.${Ta.ANNET}`),se=v.watch(`${h}.erBelopetIBehold`),A=Jt(h),y=Jt(M),ie=e.redusertBeloper,_r=l[Rr.SARLIG_GRUNN],Fe=l[Rr.VILKAR_RESULTAT],Ae=qu.map(x=>l[Rr.AKTSOMHET].find(L=>L.kode===x)),tt=(x,L)=>{const Q=x.target.value.split("_"),B=L.find(ge=>ge.fom===Q[0]&&ge.tom===Q[1]),qe=B==null?void 0:B.valgtVilkarResultatType,We=B&&qe?B[qe]:void 0,Ne=JSON.parse(JSON.stringify(We));if(qe!==X.GOD_TRO){const{handletUaktsomhetGrad:ge}=Ne;ge!==G.FORSETT&&(r==null?void 0:r.harMerEnnEnYtelse)!==(B==null?void 0:B.harMerEnnEnYtelse)&&(Ne[ge].andelSomTilbakekreves=null,Ne[ge].andelSomTilbakekrevesManuell=null,Ne[ge].belopSomSkalTilbakekreves=null)}v.setValue("valgtVilkarResultatType",qe,{shouldDirty:!0}),v.setValue("begrunnelse",B==null?void 0:B.begrunnelse,{shouldDirty:!0}),v.setValue("vurderingBegrunnelse",B==null?void 0:B.vurderingBegrunnelse,{shouldDirty:!0}),qe&&v.setValue(qe,Ne,{shouldDirty:!0}),x.preventDefault()},sr=()=>{c(!g),a(v.getValues())},nt=x=>{o>1&&e.erTotalBelopUnder4Rettsgebyr&&j===!1?c(!g):a(x)},at=()=>{A&&v.resetField(A)},st=()=>{y&&v.resetField(`${h}.${y}`)},Ye=s.filter(x=>!x.erForeldet&&x.valgtVilkarResultatType!=null);return i.jsx(vn,{formMethods:v,onSubmit:nt,children:i.jsxs(E,{gap:"4",children:[i.jsx(E,{gap:"2",children:ie&&ie.map(x=>i.jsx(H,{size:"small",children:i.jsx(p,{id:x.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:Xe(x.belop),b:Ja}})},x.belop))}),i.jsx(Da,{ytelser:e.ytelser}),!n&&!e.erForeldet&&Ye.length>0&&i.jsx(bn,{name:"perioderForKopi",selectValues:Ye.map(x=>{const L=`${x.fom}_${x.tom}`,Q=`${V(x.fom).format(Qe)} - ${V(x.tom).format(Qe)}`;return i.jsx("option",{value:L,children:Q},L)}),onChange:x=>tt(x,Ye),className:qr.selectWidth,label:i.jsx(p,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),i.jsxs(oe,{gap:"4",wrap:!0,children:[i.jsxs("div",{className:qr.leftColumn,children:[e.erForeldet&&i.jsx(xa,{}),!e.erForeldet&&i.jsxs(E,{gap:"2",children:[i.jsx(Vr,{size:"small",children:i.jsx(p,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),i.jsx(mr,{name:"begrunnelse",label:d.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[I,dn,mn,Nr],maxLength:1500,readOnly:n,className:qr.explanationTextarea,description:d.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),i.jsx(Re,{name:"valgtVilkarResultatType",label:i.jsx(p,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[I],radios:Fe.map(x=>({label:x.navn,value:x.kode})),isReadOnly:n,onChange:at})]})]}),i.jsx("div",{className:qr.rightColumn,children:h&&i.jsxs(E,{gap:"2",children:[i.jsx(Vr,{size:"small",children:i.jsx(p,{id:h===X.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),i.jsx(mr,{name:"vurderingBegrunnelse",label:d.formatMessage({id:h===X.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[I,dn,mn,Nr],maxLength:1500,readOnly:n}),h===X.GOD_TRO&&i.jsx(ar,{name:h,readOnly:n,erBelopetIBehold:se,feilutbetalingBelop:e.feilutbetaling}),h!==X.GOD_TRO&&i.jsx(nr,{name:h,harGrunnerTilReduksjon:Se,readOnly:n,handletUaktsomhetGrad:M,resetFields:st,erSerligGrunnAnnetValgt:ae,erValgtResultatTypeForstoBurdeForstaatt:h===X.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:Ae,sarligGrunnTyper:_r,antallYtelser:e.ytelser.length,feilutbetalingBelop:e.feilutbetaling,erTotalBelopUnder4Rettsgebyr:e.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:je},h)]})})]}),i.jsxs(oe,{gap:"4",children:[i.jsx(K,{size:"small",variant:"primary",disabled:!v.formState.isDirty||n,children:i.jsx(p,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),i.jsx(K,{size:"small",variant:"secondary",onClick:t,type:"button",children:i.jsx(p,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),g&&i.jsx(ms,{showModal:!0,submit:sr})]})})};Ra.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
    hendelseType: string;
    hendelseUndertype?: string;
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
  hendelseType: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const nd="_margin_1wl4t_1",Mr={margin:nd},ad={danger:i.jsx(os,{}),success:i.jsx(ls,{}),warning:i.jsx(is,{})},sd=(e,r)=>e.fom<r.fom?-1:e.fom>r.fom?1:0,id=e=>{const r=e.isGodkjent?"success":"danger";return e.isAksjonspunktOpen?"warning":r},ld=(e=[])=>[...e].sort(sd).map(r=>({...r,status:id(r)})),od=e=>e===Or.MOR||e===Or.MEDMOR?i.jsx(gs,{width:20,height:20,color:"var(--a-red-200)"}):e===Or.FAR?i.jsx(fs,{width:20,height:20,color:"var(--a-blue-600)"}):i.jsx(ss,{width:20,height:20}),Oa=({perioder:e,valgtPeriode:r,setPeriode:t,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:a})=>{var se;const s=Pe(),l=ld(e),o=A=>{const y=e.find(ie=>ie.id===A);y&&t(y)},d=V(l[0].fom),g=V(l[l.length-1].tom),[c,v]=C.useState(d),[h,M]=C.useState(g),Se=()=>{c.subtract(1,"month").isBefore(d)||(v(c.subtract(1,"month")),M(h.subtract(1,"month")))},je=()=>{h.add(1,"month").isAfter(g)||(v(c.add(1,"month")),M(h.add(1,"month")))},j=()=>{c.add(3,"month").isAfter(h)||(v(c.add(1,"month")),M(h.subtract(1,"month")))},ae=()=>{h.add(1,"month").diff(c.subtract(1,"month"),"months")<36&&(v(c.subtract(1,"month")),M(h.add(1,"month")))};return i.jsxs(E,{gap:"4",children:[i.jsx(it,{startDate:V(c).toDate(),endDate:V(h).add(1,"days").toDate(),children:i.jsx(it.Row,{label:((se=a.find(A=>A.kode===n))==null?void 0:se.navn)||"-",icon:od(n),children:l.map(A=>i.jsx(it.Period,{start:V(A.fom).toDate(),end:V(A.tom).toDate(),status:A.status,icon:ad[A.status],onSelectPeriod:()=>o(A.id),isActive:(r==null?void 0:r.id)===A.id,"aria-controls":"panel-tilbakekreving",id:A.id.toString()},A.id))})}),i.jsxs(oe,{justify:"end",children:[i.jsx(K,{className:Mr.margin,size:"small",icon:i.jsx(ns,{"aria-hidden":!0}),onClick:j,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),i.jsx(K,{className:Mr.margin,size:"small",icon:i.jsx(as,{"aria-hidden":!0}),onClick:ae,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),i.jsx(K,{className:Mr.margin,size:"small",icon:i.jsx(jn,{"aria-hidden":!0}),onClick:Se,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),i.jsx(K,{className:Mr.margin,size:"small",icon:i.jsx(qn,{"aria-hidden":!0}),onClick:je,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};Oa.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`},name:"periode"}],return:{name:"void"}}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const wt=(e,r)=>m(e.fom).diff(m(r.fom)),gn=e=>!e.erForeldet&&(e.begrunnelse===void 0||e.erSplittet),ud=e=>{const r=e[e.valgtVilkarResultatType],t=r[r.handletUaktsomhetGrad];return r.tilbakekrevdBelop?{...e,[e.valgtVilkarResultatType]:{...Br(r,"tilbakekrevdBelop")}}:t&&t.belopSomSkalTilbakekreves?{...e,[e.valgtVilkarResultatType]:{...r,[r.handletUaktsomhetGrad]:{...Br(t,"belopSomSkalTilbakekreves")}}}:e},dd=(e,r=[])=>r.map((t,n)=>{const a=e.find(o=>o.fom===t.fom&&o.tom===t.tom),s=a&&a[a.valgtVilkarResultatType]?a[a.valgtVilkarResultatType].erBelopetIBehold:void 0,l=a?!!a.erSplittet:!1;return{fom:t.fom,tom:t.tom,isAksjonspunktOpen:!t.erForeldet&&((a==null?void 0:a.begrunnelse)===void 0||l),isGodkjent:!(t.erForeldet||s===!1),id:n}}),Pa=(e,r)=>r.find(t=>!m(e.fom).isBefore(m(t.fom))&&!m(e.tom).isAfter(m(t.tom))),md=(e,r)=>r.every(t=>!(m(e.fom).isSameOrBefore(m(t.tom))&&m(t.fom).isSameOrBefore(m(e.tom)))),gd=(e,r,t)=>{const a=e.reduce((d,g)=>d+g.feilutbetaling,0)<t*4,l=r.vilkarsVurdertePerioder.map(d=>{const g=Pa(d,e);return{...g,harMerEnnEnYtelse:g&&g.ytelser.length>1,...Br(d,"feilutbetalingBelop"),feilutbetaling:d.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:a}});return{perioder:e.filter(d=>md(d,l)).map(d=>({...d,harMerEnnEnYtelse:d.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:a})).concat(l)}},fd=(e,r)=>{if(!(!e||!r))return r.map(t=>{const n=Pa(t,e.perioder),a=n.foreldelseVurderingType?n.foreldelseVurderingType===ft.FORELDET:n.foreldet;return{redusertBeloper:n.redusertBeloper,ytelser:n.ytelser,feilutbetaling:t.feilutbetaling?t.feilutbetaling:n.feilutbetaling,erTotalBelopUnder4Rettsgebyr:n.erTotalBelopUnder4Rettsgebyr,fom:t.fom,tom:t.tom,årsak:n.årsak,begrunnelse:n.begrunnelse,erForeldet:a||!1}})},cd=(e,r)=>{const{vilkarResultat:t,begrunnelse:n,vilkarResultatInfo:a}=e,s=(t==null?void 0:t.kode)??t;let l;const o=e.erForeldet??e.foreldet;if(o){const v=r.perioder.find(h=>h.fom===e.fom&&h.tom===e.tom);l={erForeldet:o,periodenErForeldet:!0,foreldetBegrunnelse:v?Pr(v.begrunnelse):void 0}}else l={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const d={valgtVilkarResultatType:s,begrunnelse:Pr(n),harMerEnnEnYtelse:e.ytelser.length>1,...l},g=s===X.GOD_TRO?ar.buildIntialValues(a):{},c=s!==void 0&&s!==X.GOD_TRO?nr.buildInitalValues(a):{};return{...d,vurderingBegrunnelse:a?Pr(a.begrunnelse):void 0,[d.valgtVilkarResultatType]:{...g,...c}}},pd=(e,r)=>{const{valgtVilkarResultatType:t,begrunnelse:n,vurderingBegrunnelse:a}=e,s=e[t],l=t===X.GOD_TRO?ar.transformValues(s,a):{},o=t!==X.GOD_TRO?nr.transformValues(s,r,a):{};return{begrunnelse:n,fom:e.fom,tom:e.tom,vilkarResultat:t,vilkarResultatInfo:{...l,...o}}},kd=(e,r)=>e.perioder.map(t=>({...cd(t,r),fom:t.fom,tom:t.tom})).sort(wt),hd=(e,r)=>({kode:Kt.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:e.filter(t=>!t.erForeldet).map(t=>pd(t,r))}),yd=e=>{if(!e||e.reduce((n,a)=>a.erForeldet?n:n+1,0)<2)return;const t=e.reduce((n,a)=>{const{valgtVilkarResultatType:s}=a,l=a[s],{handletUaktsomhetGrad:o}=l,d=l[o];return d&&d.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?n+1:n},0);if(t>0&&t!==e.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Fa=({perioderForeldelse:e,kodeverkSamlingFpTilbake:r,vilkarvurderingsperioder:t,submitCallback:n,isReadOnly:a,alleMerknaderFraBeslutter:s,vilkarvurdering:l,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:d,beregnBelop:g,behandling:c,formData:v,setFormData:h})=>{var Zt;const M=t.perioder,Se=t.rettsgebyr,je=gd(M,l,Se),[j,ae]=C.useState(v||kd(je,e)),[se,A]=C.useState(!!v),[y,ie]=C.useState(j==null?void 0:j.find(gn)),[_r,Fe]=C.useState(!1),[Ae,tt]=C.useState();C.useEffect(()=>{tt(yd(j))},[j]);const sr=fd(je,j),nt=j.reduce((O,Y)=>Y.erForeldet?O:O+1,0),at=s[Kt.VURDER_TILBAKEKREVING],st=()=>{Fe(!0),n(hd(j,r[Rr.SARLIG_GRUNN]))},Ye=dd(j,sr),x=Ye.some(O=>O.isAksjonspunktOpen),L=y?Ye.find(O=>O.fom===y.fom&&O.tom===y.tom):void 0,Q=O=>{const Y=O?j.find(fe=>fe.fom===O.fom&&fe.tom===O.tom):void 0;ie(Y)},B=()=>{const O=j.findIndex(Y=>Y.fom===(y==null?void 0:y.fom)&&Y.tom===(y==null?void 0:y.tom));Q(j[O+1])},qe=()=>{const O=j.findIndex(Y=>Y.fom===(y==null?void 0:y.fom)&&Y.tom===(y==null?void 0:y.tom));Q(j[O-1])},We=()=>{Q(void 0)},Ne=O=>{const Y=Br(O,"erSplittet"),Tr=j.filter(Ve=>Ve.fom!==Y.fom&&Ve.tom!==Y.tom).concat(Y).sort(wt);ae(Tr),h(Tr),A(!0),We();const ir=Tr.find(gn);ir&&Q(ir)},ge=O=>{const Y=j.find(fe=>fe.fom===(y==null?void 0:y.fom)&&fe.tom===(y==null?void 0:y.tom));if(Y){const fe=O.map(Ve=>({...ud(Y),...Ve,erSplittet:!0})),ir=j.filter(Ve=>Ve.fom!==(y==null?void 0:y.fom)&&Ve.tom!==(y==null?void 0:y.tom)).concat(fe).sort(wt);We(),A(!0),ae(ir),h(ir),Q(fe[0])}},Be=sr?sr.find(O=>O.fom===(y==null?void 0:y.fom)&&O.tom===(y==null?void 0:y.tom)):void 0;return i.jsx(es,{merknaderFraBeslutter:at,withoutBorder:!0,children:i.jsxs(E,{gap:"4",children:[i.jsx(Vr,{size:"small",children:i.jsx(p,{id:"Behandlingspunkt.Tilbakekreving"})}),x&&i.jsx(rs,{children:i.jsx(p,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),j&&i.jsxs(i.Fragment,{children:[i.jsx(Oa,{perioder:Ye,valgtPeriode:L,setPeriode:Q,relasjonsRolleType:o,relasjonsRolleTypeKodeverk:d}),y&&Be&&i.jsx("div",{id:"panel-tilbakekreving","aria-controls":L==null?void 0:L.id.toString(),children:i.jsx(cs,{borderWidth:"1",padding:"4",children:i.jsxs(E,{gap:"4",children:[i.jsx(ba,{setNestePeriode:B,setForrigePeriode:qe,periode:Be,readOnly:a,oppdaterSplittedePerioder:ge,behandlingUuid:c.uuid,beregnBelop:g,lukkPeriode:We}),i.jsx(_a,{feilutbetaling:Be.feilutbetaling,fom:Be.fom,tom:Be.tom,arsakHendelseNavn:(Zt=r[$a.HENDELSE_TYPE].find(O=>{var Y;return O.kode===((Y=Be.årsak)==null?void 0:Y.hendelseType)}))==null?void 0:Zt.navn}),i.jsx(Ra,{periode:y,data:Be,antallPerioderMedAksjonspunkt:nt,readOnly:a||(y==null?void 0:y.erForeldet)===!0,skjulPeriode:We,oppdaterPeriode:Ne,kodeverkSamlingFpTilbake:r,vilkarsVurdertePerioder:j},L==null?void 0:L.id)]})})})]}),Ae&&i.jsx(Sn,{variant:"error",children:i.jsx(p,{id:Ae})}),i.jsx("div",{children:i.jsx(Ea,{isReadOnly:a||(y==null?void 0:y.erForeldet)===!0,isDirty:se,isSubmittable:!x&&!y&&!Ae,onClick:st,isSubmitting:_r})})]})})};Fa.__docgenInfo={description:`TilbakekrevingForm

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
}>`},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},vilkarvurderingsperioder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  perioder: DetaljertFeilutbetalingPeriode[];
  rettsgebyr: number;
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: string;
    hendelseUndertype?: string;
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
  hendelseType: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:"VilkårsvurdertPeriode[]",required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
  status: string;
  type: string;
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
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const vd=Xa(Mn),Aa=e=>i.jsx(Qa,{value:vd,children:i.jsx(Fa,{...e})});Aa.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
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
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
    hendelseType: string;
    hendelseUndertype?: string;
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
  hendelseType: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<{ perioder: { belop: number }[] }>"}}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const bd=Ua(Mn),_d={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:ft.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:ft.FORELDET}]},Ya={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:"MEDLEMSKAP"},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},Td={vilkarsVurdertePerioder:[]},wd=Ga,Mm={component:Aa,decorators:[bd],args:{submitCallback:Na("button-click"),behandling:{uuid:"1",versjon:1,status:za.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:wd,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:_d,vilkarvurdering:Td,beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleType:Or.MOR,relasjonsRolleTypeKodeverk:[{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},xr={args:{vilkarvurderingsperioder:Ya}},Dr={args:{vilkarvurderingsperioder:{perioder:[Ya.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:{kode:"MEDLEM",kodeverk:"",navn:"§22 Medlemskap"}},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};var fn,cn,pn;xr.parameters={...xr.parameters,docs:{...(fn=xr.parameters)==null?void 0:fn.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...(pn=(cn=xr.parameters)==null?void 0:cn.docs)==null?void 0:pn.source}}};var kn,hn,yn;Dr.parameters={...Dr.parameters,docs:{...(kn=Dr.parameters)==null?void 0:kn.docs,source:{originalSource:`{
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
}`,...(yn=(hn=Dr.parameters)==null?void 0:hn.docs)==null?void 0:yn.source}}};const xm=["Default","MedToPerioder"];export{xr as Default,Dr as MedToPerioder,xm as __namedExportsOrder,Mm as default};
