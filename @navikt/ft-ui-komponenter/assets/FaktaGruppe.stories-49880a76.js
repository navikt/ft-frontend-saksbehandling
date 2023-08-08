import{j as e}from"./jsx-runtime-69eee039.js";import{B as _}from"./BorderBox-a9f12f40.js";import{V as y}from"./VerticalSpacer-f4961904.js";import{L as M}from"./Label-798a9410.js";import"./index-7c191284.js";import"./bind-55992fd8.js";import"./clsx.m-1229b3e0.js";const b=({withoutBorder:t,error:a,children:s,className:u})=>t?s:e.jsx(_,{error:a,className:u,children:s}),l=({merknaderFraBeslutter:t,title:a,children:s,withoutBorder:u=!1,className:v=""})=>{const c=!!(t&&t.notAccepted);return e.jsxs(b,{withoutBorder:u&&!c,error:c,className:v,children:[a&&e.jsxs(e.Fragment,{children:[e.jsx(M,{size:"small",children:a}),e.jsx(y,{twentyPx:!0})]}),s]})},r=l;try{l.displayName="FaktaGruppe",l.__docgenInfo={description:`FaktaGruppe

Presentasjonskomponent. Grupperingsboks til bruk i faktapaneler, med eller uten ramme. Man kan også spesifisere hvilket aksjonspunkt
gruppen hører til, slik at gruppen får rød ramme hvis beslutter har lagt inn merknader.`,displayName:"FaktaGruppe",props:{merknaderFraBeslutter:{defaultValue:null,description:"",name:"merknaderFraBeslutter",required:!1,type:{name:"{ notAccepted?: boolean; }"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},withoutBorder:{defaultValue:{value:"false"},description:"",name:"withoutBorder",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const K={title:"FaktaGruppe",component:r},n=()=>e.jsx(r,{children:"Dette er en tekst"}),p=()=>e.jsx(r,{title:"Dette er en tittel",children:"Dette er en tekst"}),o=()=>e.jsx(r,{title:"Dette er en tittel",withoutBorder:!0,children:"Dette er en tekst"}),i=()=>e.jsx(r,{title:"Dette er en tittel",merknaderFraBeslutter:{notAccepted:!0},children:"Dette er en tekst"});var d,m,k;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"() => <FaktaGruppe>Dette er en tekst</FaktaGruppe>",...(k=(m=n.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var F,f,g;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:'() => <FaktaGruppe title="Dette er en tittel">Dette er en tekst</FaktaGruppe>',...(g=(f=p.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,D,G;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`() => <FaktaGruppe title="Dette er en tittel" withoutBorder>
    Dette er en tekst
  </FaktaGruppe>`,...(G=(D=o.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var j,x,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`() => <FaktaGruppe title="Dette er en tittel" merknaderFraBeslutter={{
  notAccepted: true
}}>
    Dette er en tekst
  </FaktaGruppe>`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const L=["visDefaultFaktagruppe","visFaktagruppeMedTittel","visFaktagruppeUtenKantlinje","visFaktagruppeMedMerknadFraBeslutter"];export{L as __namedExportsOrder,K as default,n as visDefaultFaktagruppe,i as visFaktagruppeMedMerknadFraBeslutter,p as visFaktagruppeMedTittel,o as visFaktagruppeUtenKantlinje};
//# sourceMappingURL=FaktaGruppe.stories-49880a76.js.map
