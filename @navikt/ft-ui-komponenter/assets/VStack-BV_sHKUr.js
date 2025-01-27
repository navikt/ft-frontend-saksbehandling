import{r as p,R as O}from"./index-CYQpqK1Q.js";import{u as M}from"./useId-qXXRNB6N.js";import{c as w}from"./clsx-B-dksMZM.js";import{m as F,a as W}from"./Button-CrwUjO4x.js";import{o as Z}from"./Loader-ByyM_uPu.js";function q(t,r){const a=Object.assign({},r);for(const e in r){const n=t[e],s=r[e];/^on[A-Z]/.test(e)?n&&s?a[e]=(...f)=>{s(...f),n(...f)}:n&&(a[e]=n):e==="style"?a[e]=Object.assign(Object.assign({},n),s):e==="className"&&(a[e]=[n,s].filter(Boolean).join(" "))}return Object.assign(Object.assign({},t),a)}var z=function(t,r){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const y=p.forwardRef((t,r)=>{var a;const{children:e}=t,n=z(t,["children"]);if(p.isValidElement(e)){const s=Object.prototype.propertyIsEnumerable.call(e.props,"ref")?e.props.ref:e.ref;return p.cloneElement(e,Object.assign(Object.assign({},q(n,e.props)),{ref:r?F([r,s]):s}))}if(p.Children.count(e)>1){const s=new Error("Aksel: Components using 'asChild' expects to recieve a single React element child.");throw s.name="SlotError",(a=Error.captureStackTrace)===null||a===void 0||a.call(Error,s,y),s}return null}),[D,_]=W({hookName:"useTheme",name:"ThemeProvider",providerName:"ThemeProvider"});p.forwardRef((t,r)=>{var a;const e=_(!1),{children:n,className:s,asChild:i=!1,theme:f=(a=e==null?void 0:e.theme)!==null&&a!==void 0?a:"light",hasBackground:d=!0}=t,l=d??(e===void 0&&t.theme!==void 0),u=i?y:"div";return O.createElement(D,{theme:f},O.createElement(u,{ref:r,className:w("navds-theme",s,f),"data-background":l},n))});var G=function(t,r){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const re=p.forwardRef((t,r)=>{var{title:a,titleId:e}=t,n=G(t,["title","titleId"]);let s=M();return s=a?e||"title-"+s:void 0,p.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},n),a?p.createElement("title",{id:s},a):null,p.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});function o(t,r,a,e){return e?typeof e=="string"?{[`--__${t}c-${r}-${a}-xs`]:e}:Object.fromEntries(Object.entries(e).map(([n,s])=>[`--__${t}c-${r}-${a}-${n}`,s])):{}}const J={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},B=(t,r,a,e,n,s)=>r.split(" ").map((i,f,d)=>{var m;if(t==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(t==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(t)&&i==="auto")return"auto";let l=`var(--${s}-${a}-${i})`;if(e.includes(i))l=i==="px"?"1px":i;else if(i.startsWith("space"))l=`var(--${s}-${i})`;else{const u=`--${s}-spacing-${i}`;l=`var(${(m=J[u])!==null&&m!==void 0?m:u})`}return n?i==="0"?"0":`calc(-1 * ${l})`:l}).join(" ");function g(t,r,a,e,n,s=!1,i=[]){if(!n)return{};if(typeof n=="string")return{[`--__${t}c-${r}-${a}-xs`]:B(a,n,e,i,s,t)};const f={};return Object.entries(n).forEach(([d,m])=>{f[`--__${t}c-${r}-${a}-${d}`]=B(a,m,e,i,s,t)}),f}const K=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Q=({children:t,className:r,padding:a,paddingInline:e,paddingBlock:n,margin:s,marginInline:i,marginBlock:f,width:d,minWidth:m,maxWidth:l,height:u,minHeight:v,maxHeight:h,position:b,inset:x,top:j,right:$,left:k,bottom:E,overflow:S,overflowX:R,overflowY:P,flexBasis:C,flexGrow:I,flexShrink:T,gridColumn:N})=>{const c=_(!1)?"ax":"a",A=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},g(c,"r","p","spacing",a)),g(c,"r","pi","spacing",e)),g(c,"r","pb","spacing",n)),g(c,"r","m","spacing",s)),g(c,"r","mi","spacing",i)),g(c,"r","mb","spacing",f)),o(c,"r","w",d)),o(c,"r","minw",m)),o(c,"r","maxw",l)),o(c,"r","h",u)),o(c,"r","minh",v)),o(c,"r","maxh",h)),o(c,"r","position",b)),g(c,"r","inset","spacing",x)),g(c,"r","top","spacing",j)),g(c,"r","right","spacing",$)),g(c,"r","bottom","spacing",E)),g(c,"r","left","spacing",k)),o(c,"r","overflow",S)),o(c,"r","overflowx",R)),o(c,"r","overflowy",P)),o(c,"r","flex-basis",C)),o(c,"r","flex-grow",I)),o(c,"r","flex-shrink",T)),o(c,"r","grid-column",N));return O.createElement(y,{className:w({className:r,"navds-r-p":a,"navds-r-pi":e,"navds-r-pb":n,"navds-r-m":s,"navds-r-mi":i,"navds-r-mb":f,"navds-r-w":d,"navds-r-minw":m,"navds-r-maxw":l,"navds-r-h":u,"navds-r-minh":v,"navds-r-maxh":h,"navds-r-position":b,"navds-r-inset":x,"navds-r-top":j,"navds-r-right":$,"navds-r-bottom":E,"navds-r-left":k,"navds-r-overflow":S,"navds-r-overflowx":R,"navds-r-overflowy":P,"navds-r-flex-basis":C,"navds-r-flex-grow":I,"navds-r-flex-shrink":T,"navds-r-grid-column":N}),style:A},t)};var U=function(t,r){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const H=p.forwardRef((t,r)=>{var{children:a,className:e,as:n="div",align:s,justify:i,wrap:f=!0,gap:d,style:m,direction:l="row",asChild:u}=t,v=U(t,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const b=_(!1)?"ax":"a",x=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},m),g(b,"stack","gap","spacing",d)),o(b,"stack","direction",l)),o(b,"stack","align",s)),o(b,"stack","justify",i)),j=u?y:n;return O.createElement(Q,Object.assign({},v),O.createElement(j,Object.assign({},Z(v,K),{ref:r,style:x,className:w("navds-stack",e,{"navds-vstack":l==="column","navds-hstack":l==="row","navds-stack-gap":d,"navds-stack-align":s,"navds-stack-justify":i,"navds-stack-direction":l,"navds-stack-wrap":f})}),a))});var X=function(t,r){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const se=p.forwardRef((t,r)=>{var{as:a="div"}=t,e=X(t,["as"]);return O.createElement(H,Object.assign({as:a},e,{ref:r,direction:"row"}))});var Y=function(t,r){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(a[e[n]]=t[e[n]]);return a};const ce=p.forwardRef((t,r)=>{var{as:a="div"}=t,e=Y(t,["as"]);return O.createElement(H,Object.assign({as:a},e,{ref:r,direction:"column",wrap:!1}))});export{se as H,re as S,ce as V};
