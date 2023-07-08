import{c as wt,g as It,r as it}from"./index-ebeaab24.js";import{i as _t,T as Ft,b as w,M as Lt,c as at,I as Pt,d as R,f as z,g as lt,e as Q,E as tt,h as Yt,D as xt,j as Nt,k as ct,_ as Ct,l as vt,m as jt,n as At,o as Ut,p as Ht,q as yt,s as Rt,r as Wt,P as Zt}from"./index-3e88b910.js";var $t={exports:{}};(function(t,u){(function(r,e){t.exports=e()})(wt,function(){var r=1e3,e=6e4,a=36e5,n="millisecond",i="second",m="minute",d="hour",b="day",M="week",T="month",I="quarter",L="year",Y="date",c="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,O=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,j={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(h){var o=["th","st","nd","rd"],s=h%100;return"["+h+(o[(s-20)%10]||o[s]||o[0])+"]"}},k=function(h,o,s){var v=String(h);return!v||v.length>=o?h:""+Array(o+1-v.length).join(s)+h},Z={s:k,z:function(h){var o=-h.utcOffset(),s=Math.abs(o),v=Math.floor(s/60),f=s%60;return(o<=0?"+":"-")+k(v,2,"0")+":"+k(f,2,"0")},m:function h(o,s){if(o.date()<s.date())return-h(s,o);var v=12*(s.year()-o.year())+(s.month()-o.month()),f=o.clone().add(v,T),p=s-f<0,D=o.clone().add(v+(p?-1:1),T);return+(-(v+(s-f)/(p?f-D:D-f))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:T,y:L,w:M,d:b,D:Y,h:d,m,s:i,ms:n,Q:I}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},U="en",S={};S[U]=j;var g=function(h){return h instanceof F},l=function h(o,s,v){var f;if(!o)return U;if(typeof o=="string"){var p=o.toLowerCase();S[p]&&(f=p),s&&(S[p]=s,f=p);var D=o.split("-");if(!f&&D.length>1)return h(D[0])}else{var E=o.name;S[E]=o,f=E}return!v&&f&&(U=f),f||!v&&U},y=function(h,o){if(g(h))return h.clone();var s=typeof o=="object"?o:{};return s.date=h,s.args=arguments,new F(s)},$=Z;$.l=l,$.i=g,$.w=function(h,o){return y(h,{locale:o.$L,utc:o.$u,x:o.$x,$offset:o.$offset})};var F=function(){function h(s){this.$L=l(s.locale,null,!0),this.parse(s)}var o=h.prototype;return o.parse=function(s){this.$d=function(v){var f=v.date,p=v.utc;if(f===null)return new Date(NaN);if($.u(f))return new Date;if(f instanceof Date)return new Date(f);if(typeof f=="string"&&!/Z$/i.test(f)){var D=f.match(_);if(D){var E=D[2]-1||0,P=(D[7]||"0").substring(0,3);return p?new Date(Date.UTC(D[1],E,D[3]||1,D[4]||0,D[5]||0,D[6]||0,P)):new Date(D[1],E,D[3]||1,D[4]||0,D[5]||0,D[6]||0,P)}}return new Date(f)}(s),this.$x=s.x||{},this.init()},o.init=function(){var s=this.$d;this.$y=s.getFullYear(),this.$M=s.getMonth(),this.$D=s.getDate(),this.$W=s.getDay(),this.$H=s.getHours(),this.$m=s.getMinutes(),this.$s=s.getSeconds(),this.$ms=s.getMilliseconds()},o.$utils=function(){return $},o.isValid=function(){return this.$d.toString()!==c},o.isSame=function(s,v){var f=y(s);return this.startOf(v)<=f&&f<=this.endOf(v)},o.isAfter=function(s,v){return y(s)<this.startOf(v)},o.isBefore=function(s,v){return this.endOf(v)<y(s)},o.$g=function(s,v,f){return $.u(s)?this[v]:this.set(f,s)},o.unix=function(){return Math.floor(this.valueOf()/1e3)},o.valueOf=function(){return this.$d.getTime()},o.startOf=function(s,v){var f=this,p=!!$.u(v)||v,D=$.p(s),E=function(q,A){var W=$.w(f.$u?Date.UTC(f.$y,A,q):new Date(f.$y,A,q),f);return p?W:W.endOf(b)},P=function(q,A){return $.w(f.toDate()[q].apply(f.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(A)),f)},x=this.$W,C=this.$M,H=this.$D,J="set"+(this.$u?"UTC":"");switch(D){case L:return p?E(1,0):E(31,11);case T:return p?E(1,C):E(0,C+1);case M:var G=this.$locale().weekStart||0,B=(x<G?x+7:x)-G;return E(p?H-B:H+(6-B),C);case b:case Y:return P(J+"Hours",0);case d:return P(J+"Minutes",1);case m:return P(J+"Seconds",2);case i:return P(J+"Milliseconds",3);default:return this.clone()}},o.endOf=function(s){return this.startOf(s,!1)},o.$set=function(s,v){var f,p=$.p(s),D="set"+(this.$u?"UTC":""),E=(f={},f[b]=D+"Date",f[Y]=D+"Date",f[T]=D+"Month",f[L]=D+"FullYear",f[d]=D+"Hours",f[m]=D+"Minutes",f[i]=D+"Seconds",f[n]=D+"Milliseconds",f)[p],P=p===b?this.$D+(v-this.$W):v;if(p===T||p===L){var x=this.clone().set(Y,1);x.$d[E](P),x.init(),this.$d=x.set(Y,Math.min(this.$D,x.daysInMonth())).$d}else E&&this.$d[E](P);return this.init(),this},o.set=function(s,v){return this.clone().$set(s,v)},o.get=function(s){return this[$.p(s)]()},o.add=function(s,v){var f,p=this;s=Number(s);var D=$.p(v),E=function(C){var H=y(p);return $.w(H.date(H.date()+Math.round(C*s)),p)};if(D===T)return this.set(T,this.$M+s);if(D===L)return this.set(L,this.$y+s);if(D===b)return E(1);if(D===M)return E(7);var P=(f={},f[m]=e,f[d]=a,f[i]=r,f)[D]||1,x=this.$d.getTime()+s*P;return $.w(x,this)},o.subtract=function(s,v){return this.add(-1*s,v)},o.format=function(s){var v=this,f=this.$locale();if(!this.isValid())return f.invalidDate||c;var p=s||"YYYY-MM-DDTHH:mm:ssZ",D=$.z(this),E=this.$H,P=this.$m,x=this.$M,C=f.weekdays,H=f.months,J=f.meridiem,G=function(A,W,V,X){return A&&(A[W]||A(v,p))||V[W].slice(0,X)},B=function(A){return $.s(E%12||12,A,"0")},q=J||function(A,W,V){var X=A<12?"AM":"PM";return V?X.toLowerCase():X};return p.replace(O,function(A,W){return W||function(V){switch(V){case"YY":return String(v.$y).slice(-2);case"YYYY":return $.s(v.$y,4,"0");case"M":return x+1;case"MM":return $.s(x+1,2,"0");case"MMM":return G(f.monthsShort,x,H,3);case"MMMM":return G(H,x);case"D":return v.$D;case"DD":return $.s(v.$D,2,"0");case"d":return String(v.$W);case"dd":return G(f.weekdaysMin,v.$W,C,2);case"ddd":return G(f.weekdaysShort,v.$W,C,3);case"dddd":return C[v.$W];case"H":return String(E);case"HH":return $.s(E,2,"0");case"h":return B(1);case"hh":return B(2);case"a":return q(E,P,!0);case"A":return q(E,P,!1);case"m":return String(P);case"mm":return $.s(P,2,"0");case"s":return String(v.$s);case"ss":return $.s(v.$s,2,"0");case"SSS":return $.s(v.$ms,3,"0");case"Z":return D}return null}(A)||D.replace(":","")})},o.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},o.diff=function(s,v,f){var p,D=this,E=$.p(v),P=y(s),x=(P.utcOffset()-this.utcOffset())*e,C=this-P,H=function(){return $.m(D,P)};switch(E){case L:p=H()/12;break;case T:p=H();break;case I:p=H()/3;break;case M:p=(C-x)/6048e5;break;case b:p=(C-x)/864e5;break;case d:p=C/a;break;case m:p=C/e;break;case i:p=C/r;break;default:p=C}return f?p:$.a(p)},o.daysInMonth=function(){return this.endOf(T).$D},o.$locale=function(){return S[this.$L]},o.locale=function(s,v){if(!s)return this.$L;var f=this.clone(),p=l(s,v,!0);return p&&(f.$L=p),f},o.clone=function(){return $.w(this.$d,this)},o.toDate=function(){return new Date(this.valueOf())},o.toJSON=function(){return this.isValid()?this.toISOString():null},o.toISOString=function(){return this.$d.toISOString()},o.toString=function(){return this.$d.toUTCString()},h}(),N=F.prototype;return y.prototype=N,[["$ms",n],["$s",i],["$m",m],["$H",d],["$W",b],["$M",T],["$y",L],["$D",Y]].forEach(function(h){N[h[1]]=function(o){return this.$g(o,h[0],h[1])}}),y.extend=function(h,o){return h.$i||(h(o,F,y),h.$i=!0),y},y.locale=l,y.isDayjs=g,y.unix=function(h){return y(1e3*h)},y.en=S[U],y.Ls=S,y.p={},y})})($t);var Gt=$t.exports;const et=It(Gt);function K(t,u){return Object.keys(t).reduce(function(r,e){return r[e]=w({timeZone:u},t[e]),r},{})}function mt(t,u){var r=Object.keys(w(w({},t),u));return r.reduce(function(e,a){return e[a]=w(w({},t[a]||{}),u[a]||{}),e},{})}function dt(t,u){if(!u)return t;var r=Pt.formats;return w(w(w({},r),t),{date:mt(K(r.date,u),K(t.date||{},u)),time:mt(K(r.time,u),K(t.time||{},u))})}var ot=function(t,u,r,e,a){var n=t.locale,i=t.formats,m=t.messages,d=t.defaultLocale,b=t.defaultFormats,M=t.fallbackOnEmptyString,T=t.onError,I=t.timeZone,L=t.defaultRichTextElements;r===void 0&&(r={id:""});var Y=r.id,c=r.defaultMessage;_t(!!Y,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var _=String(Y),O=m&&Object.prototype.hasOwnProperty.call(m,_)&&m[_];if(Array.isArray(O)&&O.length===1&&O[0].type===Ft.literal)return O[0].value;if(!e&&O&&typeof O=="string"&&!L)return O.replace(/'\{(.*?)\}'/gi,"{$1}");if(e=w(w({},L),e||{}),i=dt(i,I),b=dt(b,I),!O){if(M===!1&&O==="")return O;if((!c||n&&n.toLowerCase()!==d.toLowerCase())&&T(new Lt(r,n)),c)try{var j=u.getMessageFormat(c,d,b,a);return j.format(e)}catch(k){return T(new at('Error formatting default message for: "'.concat(_,'", rendering default message verbatim'),n,r,k)),typeof c=="string"?c:_}return _}try{var j=u.getMessageFormat(O,n,i,w({formatters:u},a||{}));return j.format(e)}catch(k){T(new at('Error formatting message: "'.concat(_,'", using ').concat(c?"default message":"id"," as fallback."),n,r,k))}if(c)try{var j=u.getMessageFormat(c,d,b,a);return j.format(e)}catch(k){T(new at('Error formatting the default message for: "'.concat(_,'", rendering message verbatim'),n,r,k))}return typeof O=="string"?O:typeof c=="string"?c:_},pt=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function rt(t,u,r,e){var a=t.locale,n=t.formats,i=t.onError,m=t.timeZone;e===void 0&&(e={});var d=e.format,b=w(w({},m&&{timeZone:m}),d&&lt(n,u,d,i)),M=z(e,pt,b);return u==="time"&&!M.hour&&!M.minute&&!M.second&&!M.timeStyle&&!M.dateStyle&&(M=w(w({},M),{hour:"numeric",minute:"numeric"})),r(a,M)}function qt(t,u){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var a=r[0],n=r[1],i=n===void 0?{}:n,m=typeof a=="string"?new Date(a||0):a;try{return rt(t,"date",u,i).format(m)}catch(d){t.onError(new R("Error formatting date.",t.locale,d))}return String(m)}function zt(t,u){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var a=r[0],n=r[1],i=n===void 0?{}:n,m=typeof a=="string"?new Date(a||0):a;try{return rt(t,"time",u,i).format(m)}catch(d){t.onError(new R("Error formatting time.",t.locale,d))}return String(m)}function Jt(t,u){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var a=r[0],n=r[1],i=r[2],m=i===void 0?{}:i,d=t.timeZone,b=t.locale,M=t.onError,T=z(m,pt,d?{timeZone:d}:{});try{return u(b,T).formatRange(a,n)}catch(I){M(new R("Error formatting date time range.",t.locale,I))}return String(a)}function Bt(t,u){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var a=r[0],n=r[1],i=n===void 0?{}:n,m=typeof a=="string"?new Date(a||0):a;try{return rt(t,"date",u,i).formatToParts(m)}catch(d){t.onError(new R("Error formatting date.",t.locale,d))}return[]}function Vt(t,u){for(var r=[],e=2;e<arguments.length;e++)r[e-2]=arguments[e];var a=r[0],n=r[1],i=n===void 0?{}:n,m=typeof a=="string"?new Date(a||0):a;try{return rt(t,"time",u,i).formatToParts(m)}catch(d){t.onError(new R("Error formatting time.",t.locale,d))}return[]}var Xt=["style","type","fallback","languageDisplay"];function Kt(t,u,r,e){var a=t.locale,n=t.onError,i=Intl.DisplayNames;i||n(new Q(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,tt.MISSING_INTL_API));var m=z(e,Xt);try{return u(a,m).of(r)}catch(d){n(new R("Error formatting display name.",a,d))}}var Qt=["type","style"],ht=Date.now();function te(t){return"".concat(ht,"_").concat(t,"_").concat(ht)}function ee(t,u,r,e){e===void 0&&(e={});var a=Mt(t,u,r,e).reduce(function(n,i){var m=i.value;return typeof m!="string"?n.push(m):typeof n[n.length-1]=="string"?n[n.length-1]+=m:n.push(m),n},[]);return a.length===1?a[0]:a.length===0?"":a}function Mt(t,u,r,e){var a=t.locale,n=t.onError;e===void 0&&(e={});var i=Intl.ListFormat;i||n(new Q(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,tt.MISSING_INTL_API));var m=z(e,Qt);try{var d={},b=r.map(function(M,T){if(typeof M=="object"){var I=te(T);return d[I]=M,I}return String(M)});return u(a,m).formatToParts(b).map(function(M){return M.type==="literal"?M:w(w({},M),{value:d[M.value]||M.value})})}catch(M){n(new R("Error formatting list.",a,M))}return r}var re=["type"];function ne(t,u,r,e){var a=t.locale,n=t.onError;e===void 0&&(e={}),Intl.PluralRules||n(new Q(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,tt.MISSING_INTL_API));var i=z(e,re);try{return u(a,i).select(r)}catch(m){n(new R("Error formatting plural.",a,m))}return"other"}var ae=["numeric","style"];function se(t,u,r){var e=t.locale,a=t.formats,n=t.onError;r===void 0&&(r={});var i=r.format,m=!!i&&lt(a,"relative",i,n)||{},d=z(r,ae,m);return u(e,d)}function ie(t,u,r,e,a){a===void 0&&(a={}),e||(e="second");var n=Intl.RelativeTimeFormat;n||t.onError(new Q(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,tt.MISSING_INTL_API));try{return se(t,u,a).format(r,e)}catch(i){t.onError(new R("Error formatting relative time.",t.locale,i))}return String(r)}var oe=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function Dt(t,u,r){var e=t.locale,a=t.formats,n=t.onError;r===void 0&&(r={});var i=r.format,m=i&&lt(a,"number",i,n)||{},d=z(r,oe,m);return u(e,d)}function ue(t,u,r,e){e===void 0&&(e={});try{return Dt(t,u,e).format(r)}catch(a){t.onError(new R("Error formatting number.",t.locale,a))}return String(r)}function le(t,u,r,e){e===void 0&&(e={});try{return Dt(t,u,e).formatToParts(r)}catch(a){t.onError(new R("Error formatting number.",t.locale,a))}return[]}function fe(t){var u=t?t[Object.keys(t)[0]]:void 0;return typeof u=="string"}function ce(t){t.onWarn&&t.defaultRichTextElements&&fe(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function me(t,u){var r=Yt(u),e=w(w({},xt),t),a=e.locale,n=e.defaultLocale,i=e.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new ct('Missing locale data for locale: "'.concat(a,'" in Intl.NumberFormat. Using default locale: "').concat(n,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new ct('Missing locale data for locale: "'.concat(a,'" in Intl.DateTimeFormat. Using default locale: "').concat(n,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(i&&i(new Nt('"locale" was not configured, using "'.concat(n,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),e.locale=e.defaultLocale||"en"),ce(e),w(w({},e),{formatters:r,formatNumber:ue.bind(null,e,r.getNumberFormat),formatNumberToParts:le.bind(null,e,r.getNumberFormat),formatRelativeTime:ie.bind(null,e,r.getRelativeTimeFormat),formatDate:qt.bind(null,e,r.getDateTimeFormat),formatDateToParts:Bt.bind(null,e,r.getDateTimeFormat),formatTime:zt.bind(null,e,r.getDateTimeFormat),formatDateTimeRange:Jt.bind(null,e,r.getDateTimeFormat),formatTimeToParts:Vt.bind(null,e,r.getDateTimeFormat),formatPlural:ne.bind(null,e,r.getPluralRules),formatMessage:ot.bind(null,e,r),$t:ot.bind(null,e,r),formatList:ee.bind(null,e,r.getListFormat),formatListToParts:Mt.bind(null,e,r.getListFormat),formatDisplayName:Kt.bind(null,e,r.getDisplayNames)})}function st(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function bt(t){return t&&Object.keys(t).reduce(function(u,r){var e=t[r];return u[r]=At(e)?Ut(e):e,u},{})}var gt=function(t,u,r,e){for(var a=[],n=4;n<arguments.length;n++)a[n-4]=arguments[n];var i=bt(e),m=ot.apply(void 0,Ht([t,u,r,i],a,!1));return Array.isArray(m)?it.Children.toArray(m):m},ut=function(t,u){var r=t.defaultRichTextElements,e=Ct(t,["defaultRichTextElements"]),a=bt(r),n=me(w(w(w({},vt),e),{defaultRichTextElements:a}),u),i={locale:n.locale,timeZone:n.timeZone,fallbackOnEmptyString:n.fallbackOnEmptyString,formats:n.formats,defaultLocale:n.defaultLocale,defaultFormats:n.defaultFormats,messages:n.messages,onError:n.onError,defaultRichTextElements:a};return w(w({},n),{formatMessage:gt.bind(null,i,n.formatters),$t:gt.bind(null,i,n.formatters)})};(function(t){jt(u,t);function u(){var r=t!==null&&t.apply(this,arguments)||this;return r.cache=yt(),r.state={cache:r.cache,intl:ut(st(r.props),r.cache),prevConfig:st(r.props)},r}return u.getDerivedStateFromProps=function(r,e){var a=e.prevConfig,n=e.cache,i=st(r);return Rt(a,i)?null:{intl:ut(i,n),prevConfig:i}},u.prototype.render=function(){return Wt(this.state.intl),it.createElement(Zt,{value:this.state.intl},this.props.children)},u.displayName="IntlProvider",u.defaultProps=vt,u})(it.PureComponent);var nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ft(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var St={exports:{}};(function(t,u){(function(r,e){t.exports=e()})(nt,function(){var r="minute",e=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(n,i,m){var d=i.prototype;m.utc=function(c){var _={date:c,utc:!0,args:arguments};return new i(_)},d.utc=function(c){var _=m(this.toDate(),{locale:this.$L,utc:!0});return c?_.add(this.utcOffset(),r):_},d.local=function(){return m(this.toDate(),{locale:this.$L,utc:!1})};var b=d.parse;d.parse=function(c){c.utc&&(this.$u=!0),this.$utils().u(c.$offset)||(this.$offset=c.$offset),b.call(this,c)};var M=d.init;d.init=function(){if(this.$u){var c=this.$d;this.$y=c.getUTCFullYear(),this.$M=c.getUTCMonth(),this.$D=c.getUTCDate(),this.$W=c.getUTCDay(),this.$H=c.getUTCHours(),this.$m=c.getUTCMinutes(),this.$s=c.getUTCSeconds(),this.$ms=c.getUTCMilliseconds()}else M.call(this)};var T=d.utcOffset;d.utcOffset=function(c,_){var O=this.$utils().u;if(O(c))return this.$u?0:O(this.$offset)?T.call(this):this.$offset;if(typeof c=="string"&&(c=function(U){U===void 0&&(U="");var S=U.match(e);if(!S)return null;var g=(""+S[0]).match(a)||["-",0,0],l=g[0],y=60*+g[1]+ +g[2];return y===0?0:l==="+"?y:-y}(c),c===null))return this;var j=Math.abs(c)<=16?60*c:c,k=this;if(_)return k.$offset=j,k.$u=c===0,k;if(c!==0){var Z=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(k=this.local().add(j+Z,r)).$offset=j,k.$x.$localOffset=Z}else k=this.utc();return k};var I=d.format;d.format=function(c){var _=c||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return I.call(this,_)},d.valueOf=function(){var c=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*c},d.isUTC=function(){return!!this.$u},d.toISOString=function(){return this.toDate().toISOString()},d.toString=function(){return this.toDate().toUTCString()};var L=d.toDate;d.toDate=function(c){return c==="s"&&this.$offset?m(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():L.call(this)};var Y=d.diff;d.diff=function(c,_,O){if(c&&this.$u===c.$u)return Y.call(this,c,_,O);var j=this.local(),k=m(c).local();return Y.call(j,k,_,O)}}})})(St);var de=St.exports;const he=ft(de);var Tt={exports:{}};(function(t,u){(function(r,e){t.exports=e()})(nt,function(){var r,e,a=1e3,n=6e4,i=36e5,m=864e5,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b=31536e6,M=2592e6,T=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,I={years:b,months:M,days:m,hours:i,minutes:n,seconds:a,milliseconds:1,weeks:6048e5},L=function(S){return S instanceof Z},Y=function(S,g,l){return new Z(S,l,g.$l)},c=function(S){return e.p(S)+"s"},_=function(S){return S<0},O=function(S){return _(S)?Math.ceil(S):Math.floor(S)},j=function(S){return Math.abs(S)},k=function(S,g){return S?_(S)?{negative:!0,format:""+j(S)+g}:{negative:!1,format:""+S+g}:{negative:!1,format:""}},Z=function(){function S(l,y,$){var F=this;if(this.$d={},this.$l=$,l===void 0&&(this.$ms=0,this.parseFromMilliseconds()),y)return Y(l*I[c(y)],this);if(typeof l=="number")return this.$ms=l,this.parseFromMilliseconds(),this;if(typeof l=="object")return Object.keys(l).forEach(function(o){F.$d[c(o)]=l[o]}),this.calMilliseconds(),this;if(typeof l=="string"){var N=l.match(T);if(N){var h=N.slice(2).map(function(o){return o!=null?Number(o):0});return this.$d.years=h[0],this.$d.months=h[1],this.$d.weeks=h[2],this.$d.days=h[3],this.$d.hours=h[4],this.$d.minutes=h[5],this.$d.seconds=h[6],this.calMilliseconds(),this}}return this}var g=S.prototype;return g.calMilliseconds=function(){var l=this;this.$ms=Object.keys(this.$d).reduce(function(y,$){return y+(l.$d[$]||0)*I[$]},0)},g.parseFromMilliseconds=function(){var l=this.$ms;this.$d.years=O(l/b),l%=b,this.$d.months=O(l/M),l%=M,this.$d.days=O(l/m),l%=m,this.$d.hours=O(l/i),l%=i,this.$d.minutes=O(l/n),l%=n,this.$d.seconds=O(l/a),l%=a,this.$d.milliseconds=l},g.toISOString=function(){var l=k(this.$d.years,"Y"),y=k(this.$d.months,"M"),$=+this.$d.days||0;this.$d.weeks&&($+=7*this.$d.weeks);var F=k($,"D"),N=k(this.$d.hours,"H"),h=k(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var s=k(o,"S"),v=l.negative||y.negative||F.negative||N.negative||h.negative||s.negative,f=N.format||h.format||s.format?"T":"",p=(v?"-":"")+"P"+l.format+y.format+F.format+f+N.format+h.format+s.format;return p==="P"||p==="-P"?"P0D":p},g.toJSON=function(){return this.toISOString()},g.format=function(l){var y=l||"YYYY-MM-DDTHH:mm:ss",$={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return y.replace(d,function(F,N){return N||String($[F])})},g.as=function(l){return this.$ms/I[c(l)]},g.get=function(l){var y=this.$ms,$=c(l);return $==="milliseconds"?y%=1e3:y=$==="weeks"?O(y/I[$]):this.$d[$],y===0?0:y},g.add=function(l,y,$){var F;return F=y?l*I[c(y)]:L(l)?l.$ms:Y(l,this).$ms,Y(this.$ms+F*($?-1:1),this)},g.subtract=function(l,y){return this.add(l,y,!0)},g.locale=function(l){var y=this.clone();return y.$l=l,y},g.clone=function(){return Y(this.$ms,this)},g.humanize=function(l){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!l)},g.valueOf=function(){return this.asMilliseconds()},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},S}(),U=function(S,g,l){return S.add(g.years()*l,"y").add(g.months()*l,"M").add(g.days()*l,"d").add(g.hours()*l,"h").add(g.minutes()*l,"m").add(g.seconds()*l,"s").add(g.milliseconds()*l,"ms")};return function(S,g,l){r=l,e=l().$utils(),l.duration=function(F,N){var h=l.locale();return Y(F,{$l:h},N)},l.isDuration=L;var y=g.prototype.add,$=g.prototype.subtract;g.prototype.add=function(F,N){return L(F)?U(this,F,1):y.bind(this)(F,N)},g.prototype.subtract=function(F,N){return L(F)?U(this,F,-1):$.bind(this)(F,N)}}})})(Tt);var ge=Tt.exports;const ve=ft(ge);var Ot={exports:{}};(function(t,u){(function(r,e){t.exports=e()})(nt,function(){var r="day";return function(e,a,n){var i=function(b){return b.add(4-b.isoWeekday(),r)},m=a.prototype;m.isoWeekYear=function(){return i(this).year()},m.isoWeek=function(b){if(!this.$utils().u(b))return this.add(7*(b-this.isoWeek()),r);var M,T,I,L,Y=i(this),c=(M=this.isoWeekYear(),T=this.$u,I=(T?n.utc:n)().year(M).startOf("year"),L=4-I.isoWeekday(),I.isoWeekday()>4&&(L+=7),I.add(L,r));return Y.diff(c,"week")+1},m.isoWeekday=function(b){return this.$utils().u(b)?this.day()||7:this.day(this.day()%7?b:b-7)};var d=m.startOf;m.startOf=function(b,M){var T=this.$utils(),I=!!T.u(M)||M;return T.p(b)==="isoweek"?I?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(b,M)}}})})(Ot);var ye=Ot.exports;const $e=ft(ye);var pe={exports:{}};(function(t,u){(function(r,e){t.exports=e(et)})(nt,function(r){function e(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var a=e(r),n={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(i){return i+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};return a.default.locale(n,null,!0),n})})(pe);const Me=yt(),kt=t=>ut({locale:"nb-NO",messages:t},Me),Et={"Malform.Bokmal":"Bokmål","Malform.Nynorsk":"Nynorsk","Malform.Engelsk":"Engelsk","UttakInfoPanel.AntallEnDagOgEnUke":"{weeks} uke {days} dag","UttakInfoPanel.AntallEnDagOgFlereUker":"{weeks} uker {days} dag","UttakInfoPanel.AntallFlereDagerOgEnUke":"{weeks} uke {days} dager","UttakInfoPanel.AntallFlereDagerOgFlereUker":"{weeks} uker {days} dager","UttakInfoPanel.AntallFlereDagerOgNullUker":"{days} dager","UttakInfoPanel.AntallEnDagOgNullUker":"{days} dag","UttakInfoPanel.AntallNullDagerOgFlereUker":"{weeks} uker","UttakInfoPanel.AntallNullDagerOgEnUke":"{weeks} uke","UttakInfoPanel.TidenesEnde":"Antall uker og dager -"};et.extend(he);et.extend($e);et.extend(ve);kt(Et);kt(Et);const Se=t=>t!=null&&t.constructor===Object;export{Se as i,kt as t};
//# sourceMappingURL=index.es-80b5b3a1.js.map
