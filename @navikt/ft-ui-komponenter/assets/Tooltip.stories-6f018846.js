import{j as e}from"./jsx-runtime-d079401a.js";import{c as H}from"./bind-00d0877e.js";import"./index-f1f2c4b1.js";const D="_tooltip_h8akz_1",z="_tooltiptext_h8akz_5",V="_left_h8akz_22",N="_top_h8akz_27",q="_right_h8akz_30",R="_bottom_h8akz_34",S="_showTooltip_h8akz_1",i={tooltip:D,tooltiptext:z,left:V,top:N,right:q,bottom:R,showTooltip:S},w=H.bind(i),o=({children:l,content:j,alignRight:y=!1,alignLeft:p=!1,alignTop:a=!1,alignBottom:d=!1})=>e.jsxs("div",{className:i.tooltip,children:[e.jsx("span",{className:w(i.tooltiptext,{right:y||!p&&!a&&!d,left:p,top:a,bottom:d}),children:j}),l]});try{o.displayName="Tooltip",o.__docgenInfo={description:"Tooltip",displayName:"Tooltip",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},alignLeft:{defaultValue:{value:"false"},description:"",name:"alignLeft",required:!1,type:{name:"boolean"}},alignRight:{defaultValue:{value:"false"},description:"",name:"alignRight",required:!1,type:{name:"boolean"}},alignTop:{defaultValue:{value:"false"},description:"",name:"alignTop",required:!1,type:{name:"boolean"}},alignBottom:{defaultValue:{value:"false"},description:"",name:"alignBottom",required:!1,type:{name:"boolean"}}}}}catch{}const E={title:"Tooltip"},t=()=>e.jsx(o,{content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"}),n=()=>e.jsx(o,{alignLeft:!0,content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"}),r=()=>e.jsx(o,{alignTop:!0,content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"}),s=()=>e.jsx(o,{alignBottom:!0,content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"});var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => <Tooltip content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,v,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Tooltip alignLeft content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var _,h,b;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Tooltip alignTop content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,g,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Tooltip alignBottom content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(k=(g=s.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const U=["visTooltipTilHøyre","visTooltipTilVenstre","visTooltipOver","visTooltipUnder"];export{U as __namedExportsOrder,E as default,r as visTooltipOver,t as visTooltipTilHøyre,n as visTooltipTilVenstre,s as visTooltipUnder};
//# sourceMappingURL=Tooltip.stories-6f018846.js.map
