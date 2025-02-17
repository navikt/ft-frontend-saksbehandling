import{c as m}from"./clsx-B-dksMZM.js";import{r as v,R as f}from"./index-Dxs5m6lS.js";import{o as y}from"./omit-B7stZg_p.js";import{u as b}from"./useId-BdcioVLy.js";import{u as p}from"./Provider-B4A31v_2.js";const u=/(\w+)/g;function w(t,o){const r=Array.isArray(t)?t:x(t);for(const e of o){if(!e)continue;let n=e;for(let l=0;l<r.length;l++){const s=n[r[l]];s!==void 0&&(n=s)}if(typeof n=="string")return n}throw new Error(`Error translating key. Keypath '${t}' does not resolve to a string.`)}function x(t){const o=[];let r=u.exec(t);for(;r;){const[,e,n]=r;o.push(e||n),r=u.exec(t)}return o}const E=/{[^}]*}/g;function O(t,...o){const r=p(),e=r.translations||[],n=[...o,...Array.isArray(e)?e.map(s=>s[t]):[e[t]],r.locale[t]];return(s,a)=>{const d=w(s,n);return a?d.replace(E,c=>{const i=c.substring(1,c.length-1);if(a[i]===void 0){const g=JSON.stringify(a);throw new Error(`Error translating key '${s}'. No replacement syntax ({}) found for key '${i}'. The following replacements were passed: '${g}'`)}return a[i]}):d}}function N(){const t=p(),o=t.translations||[],r=Array.isArray(o)?o.map(e=>e.global):[o.global];r.push(t.locale.global);for(const e of r)if(e!=null&&e.dateLocale)return e.dateLocale;throw new Error("dateLocale not found.")}var h=function(t,o){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(r[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)o.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(r[e[n]]=t[e[n]]);return r};const R=v.forwardRef((t,o)=>{var{className:r,size:e="medium",title:n,transparent:l=!1,variant:s="neutral",id:a}=t,d=h(t,["className","size","title","transparent","variant","id"]);const c=b(),i=O("Loader");return f.createElement("svg",Object.assign({"aria-labelledby":a??`loader-${c}`,ref:o,className:m("navds-loader",r,`navds-loader--${e}`,`navds-loader--${s}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid"},y(d,["children"])),f.createElement("title",{id:a??`loader-${c}`},n||i("title")),f.createElement("circle",{className:"navds-loader__background",xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),f.createElement("circle",{className:"navds-loader__foreground",cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});export{R as L,O as a,N as u};
