import{c as St,g as wt,r as Ot}from"./index-Dl6G-zuu.js";import{i as Et,T as _t,b as k,M as kt,c as st,I as Ft,d as U,f as J,g as ot,e as tt,E as et,h as It,D as Lt,j as Yt,k as lt,_ as Nt,l as xt,m as jt,n as Pt,o as At,p as Ct}from"./index-Bqcuc3cK.js";var ht={exports:{}};(function(e,f){(function(r,t){e.exports=t()})(St,function(){var r=1e3,t=6e4,a=36e5,n="millisecond",o="second",m="minute",d="hour",D="day",$="week",w="month",F="quarter",L="year",N="date",c="Invalid Date",I=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,C={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(h){var u=["th","st","nd","rd"],s=h%100;return"["+h+(u[(s-20)%10]||u[s]||u[0])+"]"}},E=function(h,u,s){var g=String(h);return!g||g.length>=u?h:""+Array(u+1-g.length).join(s)+h},G={s:E,z:function(h){var u=-h.utcOffset(),s=Math.abs(u),g=Math.floor(s/60),i=s%60;return(u<=0?"+":"-")+E(g,2,"0")+":"+E(i,2,"0")},m:function h(u,s){if(u.date()<s.date())return-h(s,u);var g=12*(s.year()-u.year())+(s.month()-u.month()),i=u.clone().add(g,w),p=s-i<0,M=u.clone().add(g+(p?-1:1),w);return+(-(g+(s-i)/(p?i-M:M-i))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:w,y:L,w:$,d:D,D:N,h:d,m,s:o,ms:n,Q:F}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},R="en",b={};b[R]=C;var v="$isDayjsObject",l=function(h){return h instanceof x||!(!h||!h[v])},S=function h(u,s,g){var i;if(!u)return R;if(typeof u=="string"){var p=u.toLowerCase();b[p]&&(i=p),s&&(b[p]=s,i=p);var M=u.split("-");if(!i&&M.length>1)return h(M[0])}else{var _=u.name;b[_]=u,i=_}return!g&&i&&(R=i),i||!g&&R},T=function(h,u){if(l(h))return h.clone();var s=typeof u=="object"?u:{};return s.date=h,s.args=arguments,new x(s)},y=G;y.l=S,y.i=l,y.w=function(h,u){return T(h,{locale:u.$L,utc:u.$u,x:u.$x,$offset:u.$offset})};var x=function(){function h(s){this.$L=S(s.locale,null,!0),this.parse(s),this.$x=this.$x||s.x||{},this[v]=!0}var u=h.prototype;return u.parse=function(s){this.$d=function(g){var i=g.date,p=g.utc;if(i===null)return new Date(NaN);if(y.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var M=i.match(I);if(M){var _=M[2]-1||0,Y=(M[7]||"0").substring(0,3);return p?new Date(Date.UTC(M[1],_,M[3]||1,M[4]||0,M[5]||0,M[6]||0,Y)):new Date(M[1],_,M[3]||1,M[4]||0,M[5]||0,M[6]||0,Y)}}return new Date(i)}(s),this.init()},u.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},u.$utils=function(){return y},u.isValid=function(){return this.$d.toString()!==c},u.isSame=function(s,g){var i=T(s);return this.startOf(g)<=i&&i<=this.endOf(g)},u.isAfter=function(s,g){return T(s)<this.startOf(g)},u.isBefore=function(s,g){return this.endOf(g)<T(s)},u.$g=function(s,g,i){return y.u(s)?this[g]:this.set(i,s)},u.unix=function(){return Math.floor(this.valueOf()/1e3)},u.valueOf=function(){return this.$d.getTime()},u.startOf=function(s,g){var i=this,p=!!y.u(g)||g,M=y.p(s),_=function(q,H){var Z=y.w(i.$u?Date.UTC(i.$y,H,q):new Date(i.$y,H,q),i);return p?Z:Z.endOf(D)},Y=function(q,H){return y.w(i.toDate()[q].apply(i.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(H)),i)},j=this.$W,A=this.$M,W=this.$D,B="set"+(this.$u?"UTC":"");switch(M){case L:return p?_(1,0):_(31,11);case w:return p?_(1,A):_(0,A+1);case $:var z=this.$locale().weekStart||0,V=(j<z?j+7:j)-z;return _(p?W-V:W+(6-V),A);case D:case N:return Y(B+"Hours",0);case d:return Y(B+"Minutes",1);case m:return Y(B+"Seconds",2);case o:return Y(B+"Milliseconds",3);default:return this.clone()}},u.endOf=function(s){return this.startOf(s,!1)},u.$set=function(s,g){var i,p=y.p(s),M="set"+(this.$u?"UTC":""),_=(i={},i[D]=M+"Date",i[N]=M+"Date",i[w]=M+"Month",i[L]=M+"FullYear",i[d]=M+"Hours",i[m]=M+"Minutes",i[o]=M+"Seconds",i[n]=M+"Milliseconds",i)[p],Y=p===D?this.$D+(g-this.$W):g;if(p===w||p===L){var j=this.clone().set(N,1);j.$d[_](Y),j.init(),this.$d=j.set(N,Math.min(this.$D,j.daysInMonth())).$d}else _&&this.$d[_](Y);return this.init(),this},u.set=function(s,g){return this.clone().$set(s,g)},u.get=function(s){return this[y.p(s)]()},u.add=function(s,g){var i,p=this;s=Number(s);var M=y.p(g),_=function(A){var W=T(p);return y.w(W.date(W.date()+Math.round(A*s)),p)};if(M===w)return this.set(w,this.$M+s);if(M===L)return this.set(L,this.$y+s);if(M===D)return _(1);if(M===$)return _(7);var Y=(i={},i[m]=t,i[d]=a,i[o]=r,i)[M]||1,j=this.$d.getTime()+s*Y;return y.w(j,this)},u.subtract=function(s,g){return this.add(-1*s,g)},u.format=function(s){var g=this,i=this.$locale();if(!this.isValid())return i.invalidDate||c;var p=s||"YYYY-MM-DDTHH:mm:ssZ",M=y.z(this),_=this.$H,Y=this.$m,j=this.$M,A=i.weekdays,W=i.months,B=i.meridiem,z=function(H,Z,X,K){return H&&(H[Z]||H(g,p))||X[Z].slice(0,K)},V=function(H){return y.s(_%12||12,H,"0")},q=B||function(H,Z,X){var K=H<12?"AM":"PM";return X?K.toLowerCase():K};return p.replace(O,function(H,Z){return Z||function(X){switch(X){case"YY":return String(g.$y).slice(-2);case"YYYY":return y.s(g.$y,4,"0");case"M":return j+1;case"MM":return y.s(j+1,2,"0");case"MMM":return z(i.monthsShort,j,W,3);case"MMMM":return z(W,j);case"D":return g.$D;case"DD":return y.s(g.$D,2,"0");case"d":return String(g.$W);case"dd":return z(i.weekdaysMin,g.$W,A,2);case"ddd":return z(i.weekdaysShort,g.$W,A,3);case"dddd":return A[g.$W];case"H":return String(_);case"HH":return y.s(_,2,"0");case"h":return V(1);case"hh":return V(2);case"a":return q(_,Y,!0);case"A":return q(_,Y,!1);case"m":return String(Y);case"mm":return y.s(Y,2,"0");case"s":return String(g.$s);case"ss":return y.s(g.$s,2,"0");case"SSS":return y.s(g.$ms,3,"0");case"Z":return M}return null}(H)||M.replace(":","")})},u.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},u.diff=function(s,g,i){var p,M=this,_=y.p(g),Y=T(s),j=(Y.utcOffset()-this.utcOffset())*t,A=this-Y,W=function(){return y.m(M,Y)};switch(_){case L:p=W()/12;break;case w:p=W();break;case F:p=W()/3;break;case $:p=(A-j)/6048e5;break;case D:p=(A-j)/864e5;break;case d:p=A/a;break;case m:p=A/t;break;case o:p=A/r;break;default:p=A}return i?p:y.a(p)},u.daysInMonth=function(){return this.endOf(w).$D},u.$locale=function(){return b[this.$L]},u.locale=function(s,g){if(!s)return this.$L;var i=this.clone(),p=S(s,g,!0);return p&&(i.$L=p),i},u.clone=function(){return y.w(this.$d,this)},u.toDate=function(){return new Date(this.valueOf())},u.toJSON=function(){return this.isValid()?this.toISOString():null},u.toISOString=function(){return this.$d.toISOString()},u.toString=function(){return this.$d.toUTCString()},h}(),P=x.prototype;return T.prototype=P,[["$ms",n],["$s",o],["$m",m],["$H",d],["$W",D],["$M",w],["$y",L],["$D",N]].forEach(function(h){P[h[1]]=function(u){return this.$g(u,h[0],h[1])}}),T.extend=function(h,u){return h.$i||(h(u,x,T),h.$i=!0),T},T.locale=S,T.isDayjs=l,T.unix=function(h){return T(1e3*h)},T.en=b[R],T.Ls=b,T.p={},T})})(ht);var Ht=ht.exports;const rt=wt(Ht);function Q(e,f){return Object.keys(e).reduce(function(r,t){return r[t]=k({timeZone:f},e[t]),r},{})}function ft(e,f){var r=Object.keys(k(k({},e),f));return r.reduce(function(t,a){return t[a]=k(k({},e[a]||{}),f[a]||{}),t},{})}function ct(e,f){if(!f)return e;var r=Ft.formats;return k(k(k({},r),e),{date:ft(Q(r.date,f),Q(e.date||{},f)),time:ft(Q(r.time,f),Q(e.time||{},f))})}var it=function(e,f,r,t,a){var n=e.locale,o=e.formats,m=e.messages,d=e.defaultLocale,D=e.defaultFormats,$=e.fallbackOnEmptyString,w=e.onError,F=e.timeZone,L=e.defaultRichTextElements;r===void 0&&(r={id:""});var N=r.id,c=r.defaultMessage;Et(!!N,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var I=String(N),O=m&&Object.prototype.hasOwnProperty.call(m,I)&&m[I];if(Array.isArray(O)&&O.length===1&&O[0].type===_t.literal)return O[0].value;if(!t&&O&&typeof O=="string"&&!L)return O.replace(/'\{(.*?)\}'/gi,"{$1}");if(t=k(k({},L),t||{}),o=ct(o,F),D=ct(D,F),!O){if($===!1&&O==="")return O;if((!c||n&&n.toLowerCase()!==d.toLowerCase())&&w(new kt(r,n)),c)try{var C=f.getMessageFormat(c,d,D,a);return C.format(t)}catch(E){return w(new st('Error formatting default message for: "'.concat(I,'", rendering default message verbatim'),n,r,E)),typeof c=="string"?c:I}return I}try{var C=f.getMessageFormat(O,n,o,k({formatters:f},a||{}));return C.format(t)}catch(E){w(new st('Error formatting message: "'.concat(I,'", using ').concat(c?"default message":"id"," as fallback."),n,r,E))}if(c)try{var C=f.getMessageFormat(c,d,D,a);return C.format(t)}catch(E){w(new st('Error formatting the default message for: "'.concat(I,'", rendering message verbatim'),n,r,E))}return typeof O=="string"?O:typeof c=="string"?c:I},gt=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function nt(e,f,r,t){var a=e.locale,n=e.formats,o=e.onError,m=e.timeZone;t===void 0&&(t={});var d=t.format,D=k(k({},m&&{timeZone:m}),d&&ot(n,f,d,o)),$=J(t,gt,D);return f==="time"&&!$.hour&&!$.minute&&!$.second&&!$.timeStyle&&!$.dateStyle&&($=k(k({},$),{hour:"numeric",minute:"numeric"})),r(a,$)}function Rt(e,f){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],n=r[1],o=n===void 0?{}:n,m=typeof a=="string"?new Date(a||0):a;try{return nt(e,"date",f,o).format(m)}catch(d){e.onError(new U("Error formatting date.",e.locale,d))}return String(m)}function Wt(e,f){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],n=r[1],o=n===void 0?{}:n,m=typeof a=="string"?new Date(a||0):a;try{return nt(e,"time",f,o).format(m)}catch(d){e.onError(new U("Error formatting time.",e.locale,d))}return String(m)}function Ut(e,f){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],n=r[1],o=r[2],m=o===void 0?{}:o,d=e.timeZone,D=e.locale,$=e.onError,w=J(m,gt,d?{timeZone:d}:{});try{return f(D,w).formatRange(a,n)}catch(F){$(new U("Error formatting date time range.",e.locale,F))}return String(a)}function Zt(e,f){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],n=r[1],o=n===void 0?{}:n,m=typeof a=="string"?new Date(a||0):a;try{return nt(e,"date",f,o).formatToParts(m)}catch(d){e.onError(new U("Error formatting date.",e.locale,d))}return[]}function Gt(e,f){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=r[0],n=r[1],o=n===void 0?{}:n,m=typeof a=="string"?new Date(a||0):a;try{return nt(e,"time",f,o).formatToParts(m)}catch(d){e.onError(new U("Error formatting time.",e.locale,d))}return[]}var zt=["style","type","fallback","languageDisplay"];function qt(e,f,r,t){var a=e.locale,n=e.onError,o=Intl.DisplayNames;o||n(new tt(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,et.MISSING_INTL_API));var m=J(t,zt);try{return f(a,m).of(r)}catch(d){n(new U("Error formatting display name.",a,d))}}var Jt=["type","style"],mt=Date.now();function Bt(e){return"".concat(mt,"_").concat(e,"_").concat(mt)}function Vt(e,f,r,t){t===void 0&&(t={});var a=vt(e,f,r,t).reduce(function(n,o){var m=o.value;return typeof m!="string"?n.push(m):typeof n[n.length-1]=="string"?n[n.length-1]+=m:n.push(m),n},[]);return a.length===1?a[0]:a.length===0?"":a}function vt(e,f,r,t){var a=e.locale,n=e.onError;t===void 0&&(t={});var o=Intl.ListFormat;o||n(new tt(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,et.MISSING_INTL_API));var m=J(t,Jt);try{var d={},D=r.map(function($,w){if(typeof $=="object"){var F=Bt(w);return d[F]=$,F}return String($)});return f(a,m).formatToParts(D).map(function($){return $.type==="literal"?$:k(k({},$),{value:d[$.value]||$.value})})}catch($){n(new U("Error formatting list.",a,$))}return r}var Xt=["type"];function Kt(e,f,r,t){var a=e.locale,n=e.onError;t===void 0&&(t={}),Intl.PluralRules||n(new tt(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,et.MISSING_INTL_API));var o=J(t,Xt);try{return f(a,o).select(r)}catch(m){n(new U("Error formatting plural.",a,m))}return"other"}var Qt=["numeric","style"];function te(e,f,r){var t=e.locale,a=e.formats,n=e.onError;r===void 0&&(r={});var o=r.format,m=!!o&&ot(a,"relative",o,n)||{},d=J(r,Qt,m);return f(t,d)}function ee(e,f,r,t,a){a===void 0&&(a={}),t||(t="second");var n=Intl.RelativeTimeFormat;n||e.onError(new tt(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,et.MISSING_INTL_API));try{return te(e,f,a).format(r,t)}catch(o){e.onError(new U("Error formatting relative time.",e.locale,o))}return String(r)}var re=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function yt(e,f,r){var t=e.locale,a=e.formats,n=e.onError;r===void 0&&(r={});var o=r.format,m=o&&ot(a,"number",o,n)||{},d=J(r,re,m);return f(t,d)}function ne(e,f,r,t){t===void 0&&(t={});try{return yt(e,f,t).format(r)}catch(a){e.onError(new U("Error formatting number.",e.locale,a))}return String(r)}function ae(e,f,r,t){t===void 0&&(t={});try{return yt(e,f,t).formatToParts(r)}catch(a){e.onError(new U("Error formatting number.",e.locale,a))}return[]}function se(e){var f=e?e[Object.keys(e)[0]]:void 0;return typeof f=="string"}function ie(e){e.onWarn&&e.defaultRichTextElements&&se(e.messages||{})&&e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function oe(e,f){var r=It(f),t=k(k({},Lt),e),a=t.locale,n=t.defaultLocale,o=t.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&o?o(new lt('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(n,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&o&&o(new lt('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(n,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(o&&o(new Yt('"locale" was not configured, using "'.concat(n,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),t.locale=t.defaultLocale||"en"),ie(t),k(k({},t),{formatters:r,formatNumber:ne.bind(null,t,r.getNumberFormat),formatNumberToParts:ae.bind(null,t,r.getNumberFormat),formatRelativeTime:ee.bind(null,t,r.getRelativeTimeFormat),formatDate:Rt.bind(null,t,r.getDateTimeFormat),formatDateToParts:Zt.bind(null,t,r.getDateTimeFormat),formatTime:Wt.bind(null,t,r.getDateTimeFormat),formatDateTimeRange:Ut.bind(null,t,r.getDateTimeFormat),formatTimeToParts:Gt.bind(null,t,r.getDateTimeFormat),formatPlural:Kt.bind(null,t,r.getPluralRules),formatMessage:it.bind(null,t,r),$t:it.bind(null,t,r),formatList:Vt.bind(null,t,r.getListFormat),formatListToParts:vt.bind(null,t,r.getListFormat),formatDisplayName:qt.bind(null,t,r.getDisplayNames)})}function $t(e){return e&&Object.keys(e).reduce(function(f,r){var t=e[r];return f[r]=jt(t)?Pt(t):t,f},{})}var dt=function(e,f,r,t){for(var a=[],n=4;n<arguments.length;n++)a[n-4]=arguments[n];var o=$t(t),m=it.apply(void 0,At([e,f,r,o],a,!1));return Array.isArray(m)?Ot.Children.toArray(m):m},ue=function(e,f){var r=e.defaultRichTextElements,t=Nt(e,["defaultRichTextElements"]),a=$t(r),n=oe(k(k(k({},xt),t),{defaultRichTextElements:a}),f),o={locale:n.locale,timeZone:n.timeZone,fallbackOnEmptyString:n.fallbackOnEmptyString,formats:n.formats,defaultLocale:n.defaultLocale,defaultFormats:n.defaultFormats,messages:n.messages,onError:n.onError,defaultRichTextElements:a};return k(k({},n),{formatMessage:dt.bind(null,o,n.formatters),$t:dt.bind(null,o,n.formatters)})},at=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ut(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pt={exports:{}};(function(e,f){(function(r,t){e.exports=t()})(at,function(){var r="minute",t=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(n,o,m){var d=o.prototype;m.utc=function(c){var I={date:c,utc:!0,args:arguments};return new o(I)},d.utc=function(c){var I=m(this.toDate(),{locale:this.$L,utc:!0});return c?I.add(this.utcOffset(),r):I},d.local=function(){return m(this.toDate(),{locale:this.$L,utc:!1})};var D=d.parse;d.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),D.call(this,c)};var $=d.init;d.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else $.call(this)};var w=d.utcOffset;d.utcOffset=function(c,I){var O=this.$utils().u;if(O(c))return this.$u?0:O(this.$offset)?w.call(this):this.$offset;if(typeof c=="string"&&(c=function(R){R===void 0&&(R="");var b=R.match(t);if(!b)return null;var v=(""+b[0]).match(a)||["-",0,0],l=v[0],S=60*+v[1]+ +v[2];return S===0?0:l==="+"?S:-S}(c),c===null))return this;var C=Math.abs(c)<=16?60*c:c,E=this;if(I)return E.$offset=C,E.$u=c===0,E;if(c!==0){var G=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(E=this.local().add(C+G,r)).$offset=C,E.$x.$localOffset=G}else E=this.utc();return E};var F=d.format;d.format=function(c){var I=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return F.call(this,I)},d.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},d.isUTC=function(){return!!this.$u},d.toISOString=function(){return this.toDate().toISOString()},d.toString=function(){return this.toDate().toUTCString()};var L=d.toDate;d.toDate=function(c){return c==="s"&&this.$offset?m(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():L.call(this)};var N=d.diff;d.diff=function(c,I,O){if(c&&this.$u===c.$u)return N.call(this,c,I,O);var C=this.local(),E=m(c).local();return N.call(C,E,I,O)}}})})(pt);var le=pt.exports;const fe=ut(le);var Mt={exports:{}};(function(e,f){(function(r,t){e.exports=t()})(at,function(){var r,t,a=1e3,n=6e4,o=36e5,m=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,D=31536e6,$=2628e6,w=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,F={years:D,months:$,days:m,hours:o,minutes:n,seconds:a,milliseconds:1,weeks:6048e5},L=function(b){return b instanceof G},N=function(b,v,l){return new G(b,l,v.$l)},c=function(b){return t.p(b)+"s"},I=function(b){return b<0},O=function(b){return I(b)?Math.ceil(b):Math.floor(b)},C=function(b){return Math.abs(b)},E=function(b,v){return b?I(b)?{negative:!0,format:""+C(b)+v}:{negative:!1,format:""+b+v}:{negative:!1,format:""}},G=function(){function b(l,S,T){var y=this;if(this.$d={},this.$l=T,l===void 0&&(this.$ms=0,this.parseFromMilliseconds()),S)return N(l*F[c(S)],this);if(typeof l=="number")return this.$ms=l,this.parseFromMilliseconds(),this;if(typeof l=="object")return Object.keys(l).forEach(function(h){y.$d[c(h)]=l[h]}),this.calMilliseconds(),this;if(typeof l=="string"){var x=l.match(w);if(x){var P=x.slice(2).map(function(h){return h!=null?Number(h):0});return this.$d.years=P[0],this.$d.months=P[1],this.$d.weeks=P[2],this.$d.days=P[3],this.$d.hours=P[4],this.$d.minutes=P[5],this.$d.seconds=P[6],this.calMilliseconds(),this}}return this}var v=b.prototype;return v.calMilliseconds=function(){var l=this;this.$ms=Object.keys(this.$d).reduce(function(S,T){return S+(l.$d[T]||0)*F[T]},0)},v.parseFromMilliseconds=function(){var l=this.$ms;this.$d.years=O(l/D),l%=D,this.$d.months=O(l/$),l%=$,this.$d.days=O(l/m),l%=m,this.$d.hours=O(l/o),l%=o,this.$d.minutes=O(l/n),l%=n,this.$d.seconds=O(l/a),l%=a,this.$d.milliseconds=l},v.toISOString=function(){var l=E(this.$d.years,"Y"),S=E(this.$d.months,"M"),T=+this.$d.days||0;this.$d.weeks&&(T+=7*this.$d.weeks);var y=E(T,"D"),x=E(this.$d.hours,"H"),P=E(this.$d.minutes,"M"),h=this.$d.seconds||0;this.$d.milliseconds&&(h+=this.$d.milliseconds/1e3,h=Math.round(1e3*h)/1e3);var u=E(h,"S"),s=l.negative||S.negative||y.negative||x.negative||P.negative||u.negative,g=x.format||P.format||u.format?"T":"",i=(s?"-":"")+"P"+l.format+S.format+y.format+g+x.format+P.format+u.format;return i==="P"||i==="-P"?"P0D":i},v.toJSON=function(){return this.toISOString()},v.format=function(l){var S=l||"YYYY-MM-DDTHH:mm:ss",T={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return S.replace(d,function(y,x){return x||String(T[y])})},v.as=function(l){return this.$ms/F[c(l)]},v.get=function(l){var S=this.$ms,T=c(l);return T==="milliseconds"?S%=1e3:S=T==="weeks"?O(S/F[T]):this.$d[T],S||0},v.add=function(l,S,T){var y;return y=S?l*F[c(S)]:L(l)?l.$ms:N(l,this).$ms,N(this.$ms+y*(T?-1:1),this)},v.subtract=function(l,S){return this.add(l,S,!0)},v.locale=function(l){var S=this.clone();return S.$l=l,S},v.clone=function(){return N(this.$ms,this)},v.humanize=function(l){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!l)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},b}(),R=function(b,v,l){return b.add(v.years()*l,"y").add(v.months()*l,"M").add(v.days()*l,"d").add(v.hours()*l,"h").add(v.minutes()*l,"m").add(v.seconds()*l,"s").add(v.milliseconds()*l,"ms")};return function(b,v,l){r=l,t=l().$utils(),l.duration=function(y,x){var P=l.locale();return N(y,{$l:P},x)},l.isDuration=L;var S=v.prototype.add,T=v.prototype.subtract;v.prototype.add=function(y,x){return L(y)?R(this,y,1):S.bind(this)(y,x)},v.prototype.subtract=function(y,x){return L(y)?R(this,y,-1):T.bind(this)(y,x)}}})})(Mt);var ce=Mt.exports;const me=ut(ce);var Dt={exports:{}};(function(e,f){(function(r,t){e.exports=t()})(at,function(){var r="day";return function(t,a,n){var o=function(D){return D.add(4-D.isoWeekday(),r)},m=a.prototype;m.isoWeekYear=function(){return o(this).year()},m.isoWeek=function(D){if(!this.$utils().u(D))return this.add(7*(D-this.isoWeek()),r);var $,w,F,L,N=o(this),c=($=this.isoWeekYear(),w=this.$u,F=(w?n.utc:n)().year($).startOf("year"),L=4-F.isoWeekday(),F.isoWeekday()>4&&(L+=7),F.add(L,r));return N.diff(c,"week")+1},m.isoWeekday=function(D){return this.$utils().u(D)?this.day()||7:this.day(this.day()%7?D:D-7)};var d=m.startOf;m.startOf=function(D,$){var w=this.$utils(),F=!!w.u($)||$;return w.p(D)==="isoweek"?F?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(D,$)}}})})(Dt);var de=Dt.exports;const he=ut(de);var ge={exports:{}};(function(e,f){(function(r,t){e.exports=t(rt)})(at,function(r){function t(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=t(r),n={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(o){return o+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(n,null,!0),n})})(ge);const ve=Ct(),Tt=e=>ue({locale:"nb-NO",messages:e},ve),bt={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","Dato.AntallDagerOgUker":"{weeks, plural, =0 {} one {# uke}  other {# uker}}{seperator}{days, plural,=0 {} one {# dag} other {# dager}}","Dato.TidenesEnde":"Antall uker og dager -"};rt.extend(fe);rt.extend(he);rt.extend(me);Tt(bt);Tt(bt);const pe=e=>e!=null&&e.constructor===Object;export{pe as i,Tt as t};
