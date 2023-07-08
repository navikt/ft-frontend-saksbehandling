import{j as i}from"./jsx-runtime-5926aa06.js";import{D as _}from"./DetailView-9600297b.js";import"./index-ebeaab24.js";import"./index-631dc947.js";import"./Heading-93de9cf8.js";import"./clsx.m-1229b3e0.js";const v="_navigationWithDetailView_16bhk_1",d="_navigationWithDetailView__navigationSection_16bhk_5",h="_navigationWithDetailView__navigationSection_16bhk_5",D="_navigationWithDetailView__detailSection_16bhk_11",p="_navigationWithDetailView__detailSection_16bhk_11",o={navigationWithDetailView:v,navigationWithDetailView__navigationSection:d,navigationWithDetailViewNavigationSection:h,navigationWithDetailView__detailSection:D,navigationWithDetailViewDetailSection:p},l=({navigationSection:e,detailSection:a,showDetailSection:n})=>i.jsxs("div",{className:o.navigationWithDetailView,children:[i.jsx("div",{className:`${o.navigationWithDetailView__navigationSection} navigationWithDetailView__navigationSection`,children:e()}),n&&i.jsx("div",{className:`${o.navigationWithDetailView__detailSection} navigationWithDetailView__detailSection`,children:a()})]}),g=l;try{l.displayName="NavigationWithDetailView",l.__docgenInfo={description:"",displayName:"NavigationWithDetailView",props:{navigationSection:{defaultValue:null,description:"",name:"navigationSection",required:!0,type:{name:"() => ReactNode"}},detailSection:{defaultValue:null,description:"",name:"detailSection",required:!0,type:{name:"() => ReactNode"}},showDetailSection:{defaultValue:null,description:"",name:"showDetailSection",required:!0,type:{name:"boolean"}}}}}catch{}const j={title:"Navigation with detail",component:g},w=e=>{const a=()=>i.jsx("p",{children:"Navigasjon"}),n=()=>i.jsx(_,{title:"Tittel",children:i.jsx("p",{children:"Detaljer"})});return i.jsx(g,{...e,navigationSection:a,showDetailSection:!0,detailSection:n})},t=w.bind({});t.args={};var c,s,r;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const navigationSection = () => <p>Navigasjon</p>;
  const detailSection = () => <DetailView title="Tittel">
      <p>Detaljer</p>
    </DetailView>;
  return <NavigationWithDetailView {...args} navigationSection={navigationSection} showDetailSection detailSection={detailSection} />;
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const x=["NavigationWithDetail"];export{t as NavigationWithDetail,x as __namedExportsOrder,j as default};
//# sourceMappingURL=NavigationWithDetailView.stories-a74236b1.js.map
