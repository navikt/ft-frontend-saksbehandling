import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{c as N}from"./bind-VyHFSqyC.js";import"./index-CTjT7uj6.js";const H="_tooltip_h8akz_1",D="_tooltiptext_h8akz_5",z="_left_h8akz_22",R="_top_h8akz_27",V="_right_h8akz_30",q="_bottom_h8akz_34",w="_showTooltip_h8akz_1",i={tooltip:H,tooltiptext:D,left:z,top:R,right:V,bottom:q,showTooltip:w},I=N.bind(i),r=({children:g,content:j,alignRight:y=!1,alignLeft:l=!1,alignTop:p=!1,alignBottom:a=!1})=>e.jsxs("div",{className:i.tooltip,children:[e.jsx("span",{className:I(i.tooltiptext,{right:y||!l&&!p&&!a,left:l,top:p,bottom:a}),children:j}),g]});r.__docgenInfo={description:`Tooltip

@deprecated Bruk heller komponentar fra https://aksel.nav.no. Tooltip eller evt ReadMore/Popover for rikt innhold.`,methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},content:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},alignLeft:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alignRight:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alignTop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alignBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const U={title:"Tooltip"},o=()=>e.jsx(r,{content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"}),t=()=>e.jsx(r,{alignLeft:!0,content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"}),s=()=>e.jsx(r,{alignTop:!0,content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"}),n=()=>e.jsx(r,{alignBottom:!0,content:e.jsxs("div",{children:[e.jsx("b",{children:"Dette er en tooltip"}),e.jsx("br",{}),"..."]}),children:"Hold muspeker over denne teksten for å få opp tooltip"});o.__docgenInfo={description:"",methods:[],displayName:"visTooltipTilHøyre"};t.__docgenInfo={description:"",methods:[],displayName:"visTooltipTilVenstre"};s.__docgenInfo={description:"",methods:[],displayName:"visTooltipOver"};n.__docgenInfo={description:"",methods:[],displayName:"visTooltipUnder"};var d,c,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => <Tooltip content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var f,u,v;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Tooltip alignLeft content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var T,h,_;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`() => <Tooltip alignTop content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(_=(h=s.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var b,k,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`() => <Tooltip alignBottom content={<div>
        <b>Dette er en tooltip</b>
        <br />
        ...
      </div>}>
    Hold muspeker over denne teksten for å få opp tooltip
  </Tooltip>`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const E=["visTooltipTilHøyre","visTooltipTilVenstre","visTooltipOver","visTooltipUnder"];export{E as __namedExportsOrder,U as default,s as visTooltipOver,o as visTooltipTilHøyre,t as visTooltipTilVenstre,n as visTooltipUnder};
