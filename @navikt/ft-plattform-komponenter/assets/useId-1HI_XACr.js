import{R as c,r as u}from"./index-C7aUCl1g.js";let a=0;function f(t){const[e,n]=u.useState(t),l=t||e;return u.useEffect(()=>{e==null&&(a+=1,n(`aksel-id-${a}`))},[e]),l}const s=c.useId;function d(t){var e;if(s!==void 0){const n=s();return t??n.replace(/(:)/g,"")}return(e=f(t))!==null&&e!==void 0?e:""}export{d as u};
