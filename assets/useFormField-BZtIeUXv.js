import{c as O}from"./Theme-Bqc_BD0M.js";import{r as y}from"./index-DASCADcX.js";import{u as $}from"./useId-BiFzyKmP.js";const x=y.createContext(null),z=(o,e)=>{var n,r,l;const{size:t,error:s,errorId:a}=o,i=y.useContext(x),v=$(),f=(n=o.id)!==null&&n!==void 0?n:`${e}-${v}`,b=a??`${e}-error-${v}`,m=`${e}-description-${v}`,d=(i==null?void 0:i.disabled)||o.disabled,c=((i==null?void 0:i.readOnly)||o.readOnly)&&!d||void 0,u=!d&&!c&&!!(s||i!=null&&i.error),I=!d&&!c&&!!s&&typeof s!="boolean",g=Object.assign({},u?{"aria-invalid":!0}:{});return o!=null&&o.required,{showErrorMsg:I,hasError:u,errorId:b,inputDescriptionId:m,size:(r=t??(i==null?void 0:i.size))!==null&&r!==void 0?r:"medium",readOnly:c,inputProps:Object.assign(Object.assign({id:f},g),{"aria-describedby":O(o["aria-describedby"],{[m]:!!(o!=null&&o.description)&&typeof(o==null?void 0:o.description)=="string",[b]:I,[(l=i==null?void 0:i.errorId)!==null&&l!==void 0?l:""]:u&&!!(i!=null&&i.error)})||void 0,disabled:d})}};export{x as F,z as u};
