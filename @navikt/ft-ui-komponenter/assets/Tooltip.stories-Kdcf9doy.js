import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{c as E}from"./bind-FPnycuZc.js";import"./index-OjgoNOWw.js";const H="_tooltip_h8akz_1",D="_tooltiptext_h8akz_5",z="_left_h8akz_22",V="_top_h8akz_27",N="_right_h8akz_30",q="_bottom_h8akz_34",R="_showTooltip_h8akz_1",i={tooltip:H,tooltiptext:D,left:z,top:V,right:N,bottom:q,showTooltip:R},S=E.bind(i),o=({children:l,content:j,alignRight:y=!1,alignLeft:p=!1,alignTop:a=!1,alignBottom:d=!1})=>e.jsxs("div",{className:i.tooltip,children:[e.jsx("span",{className:S(i.tooltiptext,{right:y||!p&&!a&&!d,left:p,top:a,bottom:d}),children:j}),l]});try{o.displayName="Tooltip",o.__docgenInfo={description:"Tooltip",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},alignLeft:{defaultValue:{value:"false"},description:"",name:"alignLeft",required:!1,type:{name:"boolean"}},alignRight:{defaultValue:{value:"false"},description:"",name:"alignRight",required:!1,type:{name:"boolean"}},alignTop:{defaultValue:{value:"false"},description:"",name:"alignTop",required:!1,type:{name:"boolean"}},alignBottom:{defaultValue:{value:"false"},description:"",name:"alignBottom",required:!1,type:{name:"boolean"}}}}}catch{}const O={title:"Tooltip"},t=()=>e.jsx(o,{content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"}),n=()=>e.jsx(o,{alignLeft:!0,content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"}),r=()=>e.jsx(o,{alignTop:!0,content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"}),s=()=>e.jsx(o,{alignBottom:!0,content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"});var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Tooltip content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,v,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Tooltip alignLeft content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,_,h;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`() => <Tooltip alignTop content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var b,g,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Tooltip alignBottom content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const U=["visTooltipTilHøyre","visTooltipTilVenstre","visTooltipOver","visTooltipUnder"];export{U as __namedExportsOrder,O as default,r as visTooltipOver,t as visTooltipTilHøyre,n as visTooltipTilVenstre,s as visTooltipUnder};
