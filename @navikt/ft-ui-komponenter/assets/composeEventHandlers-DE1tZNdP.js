import{R as o}from"./index-DRjF_FHU.js";function c(u){return n=>{u.forEach(e=>{typeof e=="function"?e(n):e!=null&&(e.current=n)})}}function i(...u){return o.useCallback(c(u),u)}function d(u,n,{checkForDefaultPrevented:e=!0}={}){return function(t){if(u==null||u(t),e===!1||!t.defaultPrevented)return n==null?void 0:n(t)}}export{d as c,c as m,i as u};