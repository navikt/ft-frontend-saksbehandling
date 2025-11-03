import{r as G,e as $,R as f,u as C,j as e,A as H,aL as J,V as R,$ as L,N as h,B as j,aM as z,i as W,an as Y,aH as Q,H as X,aS as Z,W as ee,aT as te,aD as re,aF as p,P as ne,n as ae}from"./iframe-DFzxB8HW.js";import{a as ie}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as se,a as le,N as O,o as w}from"./style-CgIDSyD2.js";import{M as v}from"./message-Dsio0ww4.js";import{E as c}from"./ExpansionCard-DKxoBqlN.js";import{L as ue}from"./Link-BYpkNi0j.js";import{T as s}from"./Table-BCS-LOvZ.js";import"./preload-helper-PPVm8Dsz.js";var ke=function(n,a){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&a.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)a.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t};const oe=G.forwardRef((n,a)=>{var{title:t,titleId:r}=n,i=ke(n,["title","titleId"]);let k=$();return k=t?r||"title-"+k:void 0,f.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":k},i),t?f.createElement("title",{id:k},t):null,f.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))}),de="_addPeriodeButton_zdgvo_2",ve={addPeriodeButton:de},V=le(3),ge=w(4e3),me=[V,O],pe=[se,V,O],U=({name:n,readOnly:a,fritekstPakrevet:t,maximumLength:r})=>{const{watch:i,control:k}=C(),l=i(n)===void 0,[d,o]=G.useState(l&&!t),g=t?pe:me;g.push(r?w(r):ge);const m=u=>{u.preventDefault(),o(!1)};return e.jsxs(e.Fragment,{children:[d&&!a&&e.jsx("div",{children:e.jsx(H,{icon:e.jsx(oe,{"aria-hidden":!0}),variant:"tertiary",type:"button",size:"xsmall",onClick:m,className:ve.addPeriodeButton,children:e.jsx(v,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})}),!d&&e.jsx(J,{name:n,control:k,label:e.jsx(v,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:g,maxLength:r||4e3,readOnly:a})]})};U.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakUtdypendeTekstPanel",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"intersection",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
} & { [key in AvsnittType]?: string }`,elements:[{name:"signature",type:"object",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  [key in UnderavsnittType]?: string;
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]}],raw:"FieldPath<FormValues>"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fritekstPakrevet:{required:!1,tsType:{name:"boolean"},description:""},maximumLength:{required:!1,tsType:{name:"number"},description:""}}};const ye="_gulmarkering_xswfh_1",fe="_paddingTop_xswfh_6",N={gulmarkering:ye,paddingTop:fe},q=({intl:n,vedtaksbrevAvsnitt:a,readOnly:t,perioderSomIkkeHarUtfyltObligatoriskVerdi:r,fritekstOppsummeringPakrevdMenIkkeUtfylt:i=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:k})=>e.jsxs(R,{gap:"space-16",children:[e.jsx(L,{size:"small",level:"2",children:e.jsx(v,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),a.map(l=>{const d=l.underavsnittsliste,o=`${l.fom}_${l.tom}`,g=r.some(u=>u===o),m=l.avsnittstype==="OPPSUMMERING"&&i;return e.jsx(f.Fragment,{children:e.jsxs(c,{size:"small","aria-label":o,defaultOpen:g||m,className:g||m?N.gulmarkering:"",children:[e.jsx(c.Header,{children:e.jsx(c.Title,{size:"small",children:l.overskrift?l.overskrift:n.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),e.jsx(c.Content,{children:e.jsx(R,{gap:"space-8",children:d.map(u=>e.jsxs(f.Fragment,{children:[u.overskrift&&e.jsx(h,{className:N.paddingTop,children:u.overskrift}),u.brødtekst&&e.jsx(j,{children:u.brødtekst}),u.fritekstTillatt&&e.jsx(U,{name:u.underavsnittstype?`${o}.${u.underavsnittstype}`:l.avsnittstype,readOnly:t,fritekstPakrevet:u.fritekstPåkrevet,maximumLength:k?1e4:void 0})]},(u.underavsnittstype??"")+u.overskrift+u.brødtekst))})})]})},l.avsnittstype+l.fom)})]});q.buildInitialValues=n=>n.filter(a=>a.underavsnittsliste.some(t=>t.fritekst)).reduce((a,t)=>{const i=t.underavsnittsliste.filter(l=>l.fritekst).reduce((l,d)=>({...l,[d.underavsnittstype?d.underavsnittstype:t.avsnittstype]:z(d.fritekst)}),{}),k=t.fom?{[`${t.fom}_${t.tom}`]:i}:i;return{...a,...k}},{});q.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"vedtaksbrevAvsnitt",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: \`\${AvsnittType}\`;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: \`\${UnderavsnittType}\`;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"literal",value:"`${AvsnittType}`",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: \`\${UnderavsnittType}\`;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"literal",value:"`${UnderavsnittType}`",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: \`\${UnderavsnittType}\`;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"}}],returns:{type:{name:"intersection",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
} & { [key in AvsnittType]?: string }`,elements:[{name:"signature",type:"object",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  [key in UnderavsnittType]?: string;
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]}}}],displayName:"TilbakekrevingEditerVedtaksbrevPanel",props:{intl:{required:!0,tsType:{name:"IntlShape"},description:""},vedtaksbrevAvsnitt:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: \`\${AvsnittType}\`;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: \`\${UnderavsnittType}\`;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"literal",value:"`${AvsnittType}`",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: \`\${UnderavsnittType}\`;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"literal",value:"`${UnderavsnittType}`",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: \`\${UnderavsnittType}\`;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},perioderSomIkkeHarUtfyltObligatoriskVerdi:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},fritekstOppsummeringPakrevdMenIkkeUtfylt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""}}};var B=(n=>(n.FORESLA_VEDTAK="5004",n))(B||{});const F=n=>({oppsummeringstekst:n.OPPSUMMERING,perioderMedTekst:Object.entries(te(n,"OPPSUMMERING")).map(([a,t])=>({fom:a.split("_")[0],tom:a.split("_")[1],faktaAvsnitt:t.FAKTA,foreldelseAvsnitt:t.FORELDELSE,vilkaarAvsnitt:t.VILKÅR,saerligeGrunnerAvsnitt:t.SÆRLIGEGRUNNER,saerligeGrunnerAnnetAvsnitt:t.SÆRLIGEGRUNNER_ANNET}))}),Te=(n,a)=>n.some(t=>t.avsnittstype==="OPPSUMMERING"&&t.underavsnittsliste.some(r=>r.fritekstPåkrevet)&&!a.OPPSUMMERING),be=n=>({kode:B.FORESLA_VEDTAK,...F(n)}),Ae=(n,a)=>n.reduce((t,r)=>{const i=`${r.fom}_${r.tom}`,k=a[i];return r.underavsnittsliste.some(o=>o.fritekstPåkrevet&&o.underavsnittstype==="FAKTA")&&!k?.FAKTA||r.underavsnittsliste.some(o=>o.fritekstPåkrevet&&o.underavsnittstype==="SÆRLIGEGRUNNER_ANNET")&&!k?.SÆRLIGEGRUNNER_ANNET?t.concat(i):t},[]),S=(n,a,t)=>r=>{n({uuid:a,...F(t)}),r.preventDefault()},M=({submitCallback:n,readOnly:a,fetchPreviewVedtaksbrev:t,avsnittsliste:r,behandlingUuid:i,erRevurderingTilbakekrevingKlage:k,erRevurderingTilbakekrevingFeilBeløpBortfalt:l,formData:d,setFormData:o})=>{const g=r,m=d||q.buildInitialValues(g),u=W(),y=Y({defaultValues:m}),T=y.watch(),I=Te(g,T),b=Ae(g,T),D=I||b.length>0;return e.jsx(Q,{formMethods:y,onSubmit:A=>n(be(A)),setDataOnUnmount:o,children:e.jsxs(R,{gap:"space-16",children:[e.jsx(q,{intl:u,vedtaksbrevAvsnitt:g,readOnly:a,perioderSomIkkeHarUtfyltObligatoriskVerdi:b,fritekstOppsummeringPakrevdMenIkkeUtfylt:I,erRevurderingTilbakekrevingFeilBeløpBortfalt:l}),e.jsxs(X,{gap:"space-16",align:"center",children:[e.jsx(Z,{text:u.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:a,isSubmittable:b.length===0&&!I,isSubmitting:y.formState.isSubmitting,hasErrors:D}),b.length===0&&e.jsx(ue,{href:"",onClick:S(t,i,T),onKeyDown:A=>A.key==="Enter"?S(t,i,T)(A):null,children:e.jsx(v,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})]}),k&&e.jsx(ee,{inline:!0,variant:"warning",contentMaxWidth:!1,children:e.jsx(v,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})})]})})};M.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakForm",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`HentForhåndvisningVedtaksbrevPdf &
AksjonspunktTilBekreftelse<VedtakAksjonspunktCode.FORESLA_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
  oppsummeringstekst?: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt?: string;
    foreldelseAvsnitt?: string;
    vilkaarAvsnitt?: string;
    saerligeGrunnerAvsnitt?: string;
    saerligeGrunnerAnnetAvsnitt?: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!1}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt?: string;
  foreldelseAvsnitt?: string;
  vilkaarAvsnitt?: string;
  saerligeGrunnerAvsnitt?: string;
  saerligeGrunnerAnnetAvsnitt?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!1}},{key:"foreldelseAvsnitt",value:{name:"string",required:!1}},{key:"vilkaarAvsnitt",value:{name:"string",required:!1}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!1}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!1}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt?: string;
  foreldelseAvsnitt?: string;
  vilkaarAvsnitt?: string;
  saerligeGrunnerAvsnitt?: string;
  saerligeGrunnerAnnetAvsnitt?: string;
}[]`,required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},avsnittsliste:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: \`\${AvsnittType}\`;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: \`\${UnderavsnittType}\`;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"literal",value:"`${AvsnittType}`",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: \`\${UnderavsnittType}\`;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"literal",value:"`${UnderavsnittType}`",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: \`\${UnderavsnittType}\`;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<Blob>",signature:{arguments:[{type:{name:"intersection",raw:`{
  uuid: string;
} & HentForhåndvisningVedtaksbrevPdf`,elements:[{name:"signature",type:"object",raw:`{
  uuid: string;
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  oppsummeringstekst?: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt?: string;
    foreldelseAvsnitt?: string;
    vilkaarAvsnitt?: string;
    saerligeGrunnerAvsnitt?: string;
    saerligeGrunnerAnnetAvsnitt?: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!1}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt?: string;
  foreldelseAvsnitt?: string;
  vilkaarAvsnitt?: string;
  saerligeGrunnerAvsnitt?: string;
  saerligeGrunnerAnnetAvsnitt?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!1}},{key:"foreldelseAvsnitt",value:{name:"string",required:!1}},{key:"vilkaarAvsnitt",value:{name:"string",required:!1}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!1}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!1}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt?: string;
  foreldelseAvsnitt?: string;
  vilkaarAvsnitt?: string;
  saerligeGrunnerAvsnitt?: string;
  saerligeGrunnerAnnetAvsnitt?: string;
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"Blob"}],raw:"Promise<Blob>"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"intersection",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
} & { [key in AvsnittType]?: string }`,elements:[{name:"signature",type:"object",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  [key in UnderavsnittType]?: string;
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
} & { [key in AvsnittType]?: string }`,elements:[{name:"signature",type:"object",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  [key in UnderavsnittType]?: string;
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]},name:"data"}],return:{name:"void"}}},description:""}}};const K=({perioder:n,kodeverkSamlingFpTilbake:a})=>e.jsxs(s,{children:[e.jsx(s.Header,{children:e.jsxs(s.Row,{children:[e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(v,{id:"TilbakekrevingVedtakPeriodeTabell.Periode"})}),e.jsx(s.HeaderCell,{scope:"col",align:"right",children:e.jsx(v,{id:"TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(v,{id:"TilbakekrevingVedtakPeriodeTabell.Vurdering"})}),e.jsx(s.HeaderCell,{scope:"col",align:"right",children:e.jsx(v,{id:"TilbakekrevingVedtakPeriodeTabell.AndelAvBelop"})}),e.jsx(s.HeaderCell,{scope:"col",align:"right",children:e.jsx(v,{id:"TilbakekrevingVedtakPeriodeTabell.Renter"})}),e.jsx(s.HeaderCell,{scope:"col",align:"right",children:e.jsx(v,{id:"TilbakekrevingVedtakPeriodeTabell.ForSkatt"})}),e.jsx(s.HeaderCell,{scope:"col",align:"right",children:e.jsx(v,{id:"TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"})})]})}),e.jsxs(s.Body,{children:[n.map(t=>e.jsxs(s.Row,{children:[e.jsx(s.DataCell,{children:e.jsx(re,{dateStringFom:t.periode.fom,dateStringTom:t.periode.tom})}),e.jsx(s.DataCell,{align:"right",children:e.jsx(p,{beløp:t.feilutbetaltBeløp})}),e.jsx(s.DataCell,{children:a.Aktsomhet.find(r=>r.kode===t.vurdering)?.navn}),e.jsx(s.DataCell,{align:"right",children:t.andelAvBeløp!==void 0&&t.andelAvBeløp!==null?`${t.andelAvBeløp}%`:""}),e.jsx(s.DataCell,{align:"right",children:t.renterProsent?`${t.renterProsent}%`:""}),e.jsx(s.DataCell,{align:"right",children:e.jsx(p,{beløp:t.tilbakekrevingBeløp})}),e.jsx(s.DataCell,{align:"right",children:e.jsx(p,{beløp:t.tilbakekrevingBeløpEtterSkatt})})]},t.periode.fom)),e.jsxs(s.Row,{children:[e.jsx(s.HeaderCell,{children:e.jsx(v,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})}),e.jsx(s.HeaderCell,{align:"right",children:e.jsx(p,{beløp:n.reduce((t,r)=>t+r.feilutbetaltBeløp,0)})}),e.jsx(s.DataCell,{}),e.jsx(s.DataCell,{}),e.jsx(s.DataCell,{}),e.jsx(s.HeaderCell,{align:"right",children:e.jsx(p,{beløp:n.reduce((t,r)=>t+r.tilbakekrevingBeløp,0)})}),e.jsx(s.HeaderCell,{align:"right",children:e.jsx(p,{beløp:n.reduce((t,r)=>t+r.tilbakekrevingBeløpEtterSkatt,0)})})]},"sum")]})]});K.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakPeriodeTabell",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  vurdering: Aktsomhet;
  feilutbetaltBeløp: number;
  andelAvBeløp: number;
  renterProsent: number;
  tilbakekrevingBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  VedtakResultatType: VedtakResultatType;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}},{key:"VedtakResultatType",value:{name:"union",raw:"'INGEN_TILBAKEBETALING' | 'DELVIS_TILBAKEBETALING'",elements:[{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const x=({submitCallback:n,readOnly:a,resultat:t,perioder:r,kodeverkSamlingFpTilbake:i,behandlingUuid:k,avsnittsliste:l,fetchPreviewVedtaksbrev:d,erRevurderingTilbakekrevingKlage:o,erRevurderingTilbakekrevingFeilBeløpBortfalt:g,formData:m,setFormData:u})=>e.jsxs(R,{gap:"space-24",maxWidth:"1200px",children:[e.jsx(L,{size:"small",level:"2",children:e.jsx(v,{id:"TilbakekrevingVedtak.Vedtak"})}),e.jsxs("div",{children:[e.jsx(h,{children:e.jsx(v,{id:"TilbakekrevingVedtak.Resultat"})}),e.jsx(j,{children:i.VedtakResultatType.find(y=>y.kode===t)?.navn})]}),e.jsx(K,{perioder:r,kodeverkSamlingFpTilbake:i}),e.jsx(M,{submitCallback:n,readOnly:a,behandlingUuid:k,avsnittsliste:l,fetchPreviewVedtaksbrev:d,erRevurderingTilbakekrevingKlage:o,erRevurderingTilbakekrevingFeilBeløpBortfalt:g,formData:m,setFormData:u})]});x.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtak",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`HentForhåndvisningVedtaksbrevPdf &
AksjonspunktTilBekreftelse<VedtakAksjonspunktCode.FORESLA_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
  oppsummeringstekst?: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt?: string;
    foreldelseAvsnitt?: string;
    vilkaarAvsnitt?: string;
    saerligeGrunnerAvsnitt?: string;
    saerligeGrunnerAnnetAvsnitt?: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!1}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt?: string;
  foreldelseAvsnitt?: string;
  vilkaarAvsnitt?: string;
  saerligeGrunnerAvsnitt?: string;
  saerligeGrunnerAnnetAvsnitt?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!1}},{key:"foreldelseAvsnitt",value:{name:"string",required:!1}},{key:"vilkaarAvsnitt",value:{name:"string",required:!1}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!1}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!1}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt?: string;
  foreldelseAvsnitt?: string;
  vilkaarAvsnitt?: string;
  saerligeGrunnerAvsnitt?: string;
  saerligeGrunnerAnnetAvsnitt?: string;
}[]`,required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},resultat:{required:!0,tsType:{name:"union",raw:"'INGEN_TILBAKEBETALING' | 'DELVIS_TILBAKEBETALING'",elements:[{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"}]},description:""},perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  vurdering: Aktsomhet;
  feilutbetaltBeløp: number;
  andelAvBeløp: number;
  renterProsent: number;
  tilbakekrevingBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  VedtakResultatType: VedtakResultatType;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}},{key:"VedtakResultatType",value:{name:"union",raw:"'INGEN_TILBAKEBETALING' | 'DELVIS_TILBAKEBETALING'",elements:[{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},avsnittsliste:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: \`\${AvsnittType}\`;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: \`\${UnderavsnittType}\`;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"literal",value:"`${AvsnittType}`",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: \`\${UnderavsnittType}\`;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"literal",value:"`${UnderavsnittType}`",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: \`\${UnderavsnittType}\`;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<Blob>",signature:{arguments:[{type:{name:"intersection",raw:`{
  uuid: string;
} & HentForhåndvisningVedtaksbrevPdf`,elements:[{name:"signature",type:"object",raw:`{
  uuid: string;
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  oppsummeringstekst?: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt?: string;
    foreldelseAvsnitt?: string;
    vilkaarAvsnitt?: string;
    saerligeGrunnerAvsnitt?: string;
    saerligeGrunnerAnnetAvsnitt?: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!1}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt?: string;
  foreldelseAvsnitt?: string;
  vilkaarAvsnitt?: string;
  saerligeGrunnerAvsnitt?: string;
  saerligeGrunnerAnnetAvsnitt?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!1}},{key:"foreldelseAvsnitt",value:{name:"string",required:!1}},{key:"vilkaarAvsnitt",value:{name:"string",required:!1}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!1}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!1}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt?: string;
  foreldelseAvsnitt?: string;
  vilkaarAvsnitt?: string;
  saerligeGrunnerAvsnitt?: string;
  saerligeGrunnerAnnetAvsnitt?: string;
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"Blob"}],raw:"Promise<Blob>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"intersection",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
} & { [key in AvsnittType]?: string }`,elements:[{name:"signature",type:"object",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  [key in UnderavsnittType]?: string;
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
} & { [key in AvsnittType]?: string }`,elements:[{name:"signature",type:"object",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  [key in UnderavsnittType]?: string;
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]},name:"data"}],return:{name:"void"}}},description:""}}};const ce={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},Ee=ae(ce),_=({behandlingUuid:n,beregningsresultat:a,isReadOnly:t,submitCallback:r,kodeverkSamlingFpTilbake:i,formData:k,setFormData:l,vedtaksbrev:d,fetchPreviewVedtaksbrev:o,erRevurderingTilbakekrevingKlage:g,erRevurderingTilbakekrevingFeilBeløpBortfalt:m})=>e.jsx(ne,{value:Ee,children:e.jsx(x,{behandlingUuid:n,perioder:a.beregningResultatPerioder,resultat:a.vedtakResultatType,avsnittsliste:d.avsnittsliste,submitCallback:r,readOnly:t,kodeverkSamlingFpTilbake:i,fetchPreviewVedtaksbrev:o,erRevurderingTilbakekrevingKlage:g,erRevurderingTilbakekrevingFeilBeløpBortfalt:m,formData:k,setFormData:l})});_.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessIndex",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregningsresultat:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  beregningResultatPerioder: BeregningResultatPeriode[];
  vedtakResultatType: VedtakResultatType;
}`,signature:{properties:[{key:"beregningResultatPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  vurdering: Aktsomhet;
  feilutbetaltBeløp: number;
  andelAvBeløp: number;
  renterProsent: number;
  tilbakekrevingBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]",required:!0}},{key:"vedtakResultatType",value:{name:"union",raw:"'INGEN_TILBAKEBETALING' | 'DELVIS_TILBAKEBETALING'",elements:[{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"}],required:!0}}]}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  VedtakResultatType: VedtakResultatType;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}},{key:"VedtakResultatType",value:{name:"union",raw:"'INGEN_TILBAKEBETALING' | 'DELVIS_TILBAKEBETALING'",elements:[{name:"literal",value:"'INGEN_TILBAKEBETALING'"},{name:"literal",value:"'DELVIS_TILBAKEBETALING'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},vedtaksbrev:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  avsnittsliste: VedtaksbrevAvsnitt[];
}`,signature:{properties:[{key:"avsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: \`\${AvsnittType}\`;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: \`\${UnderavsnittType}\`;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"literal",value:"`${AvsnittType}`",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: \`\${UnderavsnittType}\`;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"literal",value:"`${UnderavsnittType}`",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: \`\${UnderavsnittType}\`;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]",required:!0}}]}},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(param: ForhandsvisData) => Promise<Blob>",signature:{arguments:[{type:{name:"intersection",raw:`{
  uuid: string;
} & HentForhåndvisningVedtaksbrevPdf`,elements:[{name:"signature",type:"object",raw:`{
  uuid: string;
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  oppsummeringstekst?: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt?: string;
    foreldelseAvsnitt?: string;
    vilkaarAvsnitt?: string;
    saerligeGrunnerAvsnitt?: string;
    saerligeGrunnerAnnetAvsnitt?: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!1}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt?: string;
  foreldelseAvsnitt?: string;
  vilkaarAvsnitt?: string;
  saerligeGrunnerAvsnitt?: string;
  saerligeGrunnerAnnetAvsnitt?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!1}},{key:"foreldelseAvsnitt",value:{name:"string",required:!1}},{key:"vilkaarAvsnitt",value:{name:"string",required:!1}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!1}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!1}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt?: string;
  foreldelseAvsnitt?: string;
  vilkaarAvsnitt?: string;
  saerligeGrunnerAvsnitt?: string;
  saerligeGrunnerAnnetAvsnitt?: string;
}[]`,required:!0}}]}}]},name:"param"}],return:{name:"Promise",elements:[{name:"Blob"}],raw:"Promise<Blob>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!0,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:P}=__STORYBOOK_MODULE_ACTIONS__,Re={avsnittsliste:[{overskrift:"Du må betale tilbake foreldrepenger",underavsnittsliste:[{brødtekst:"Vi varslet deg 31. oktober 2019 om at du har fått 49863 kroner for mye. Du må betale tilbake 22950 kroner, som er deler av det feilutbetalte beløpet.",fritekstTillatt:!0,fritekstPåkrevet:!1}],avsnittstype:"OPPSUMMERING"},{overskrift:"Gjelder perioden fra og med 16. mars 2016 til og med 26. mai 2016",underavsnittsliste:[{brødtekst:"Du er ikke medlem av folketrygden. Fordi du ikke har jobbet eller hatt familie som forsørget deg i Norge, har du ikke rett til opphold etter EØS avtalen. Derfor har du ikke rett til foreldrepenger.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"FAKTA"},{brødtekst:"Derfor har du fått 51000 kroner for mye utbetalt i denne perioden.",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"FAKTA"},{overskrift:"Hvordan har vi kommet fram til at du må betale tilbake?",brødtekst:"Du har fått vite om du har rett til foreldrepenger og hvor mye du har rett til. Selv om du har meldt fra til oss, kan vi kreve tilbake det du har fått for mye dersom du må ha forstått at beløpet var feil.",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{brødtekst:"Ut fra informasjonen du har fått, må du etter vår vurdering ha forstått at du fikk for mye utbetalt. Derfor kan vi kreve tilbake.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{overskrift:"Er det særlige grunner til å redusere beløpet?",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER"},{brødtekst:"Vi har lagt vekt på at du må ha forstått at du fikk penger du ikke har rett til. Vi vurderer likevel at uaktsomheten din har vært så liten at vi har redusert beløpet du må betale tilbake. Det er i vurderingen også lagt vekt på ",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"},{brødtekst:"Du må betale 22950 kroner.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"}],avsnittstype:"PERIODE",fom:"2016-03-16",tom:"2016-05-26"},{underavsnittsliste:[{brødtekst:"Vedtaket er gjort etter folketrygdloven § 22-15 og foreldelsesloven §§ 2 og 3.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Skatt",brødtekst:"Nav gir opplysninger til skatteetaten når det feilutbetalte beløpet er tilbakebetalt. Skatteetaten vil da vurdere om det er grunnlag for å endre tidligere skatteoppgjør.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Hvordan betale tilbake pengene du skylder",brødtekst:"Vi har overført beløpet du skylder til Nav Innkreving, som vil sende deg et krav om å betale tilbake det feilutbetalte beløpet. Har du spørsmål om dette, kan du kontakte Nav Innkreving på telefon 21 05 11 00.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til å klage",brødtekst:"Du kan klage innen 6 uker fra den datoen du mottok vedtaket. Du finner skjema og informasjon på nav.no/klage.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Du må som hovedregel begynne å betale beløpet tilbake, selv om du klager på dette vedtaket. Dette følger av forvaltningsloven § 42. Hvis du får vedtak om at du ikke trengte å betale tilbake hele eller deler av beløpet du skyldte, betaler vi pengene tilbake til deg.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til innsyn",brødtekst:"På nav.no/dittnav kan du se dokumentene i saken din.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Har du spørsmål?",brødtekst:"Du finner nyttig informasjon på nav.no/familie. Du kan også kontakte oss på telefon 55 55 33 33.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Med vennlig hilsen",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Nav familie- og pensjonsytelser",fritekstTillatt:!1,fritekstPåkrevet:!1}],avsnittstype:"TILLEGGSINFORMASJON"}]},qe={beregningResultatPerioder:[{periode:{fom:"2018-10-01",tom:"2019-01-01"},feilutbetaltBeløp:1e4,vurdering:"FORSETT",andelAvBeløp:50,renterProsent:0,tilbakekrevingBeløp:5e3,tilbakekrevingBeløpEtterSkatt:4e3},{periode:{fom:"2018-01-01",tom:"2019-01-01"},feilutbetaltBeløp:1e3,vurdering:"FORSETT",andelAvBeløp:50,renterProsent:80,tilbakekrevingBeløp:500,tilbakekrevingBeløpEtterSkatt:400}],vedtakResultatType:"DELVIS_TILBAKEBETALING"},Ie=ie,we={component:_,args:{submitCallback:P("submit"),fetchPreviewVedtaksbrev:P("preview"),behandlingUuid:"1",vedtaksbrev:Re,kodeverkSamlingFpTilbake:Ie,isReadOnly:!1,setFormData:()=>{},beregningsresultat:qe,erRevurderingTilbakekrevingKlage:!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:!0}},E={};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"{}",...E.parameters?.docs?.source}}};const Ve=["Default"];export{E as Default,Ve as __namedExportsOrder,we as default};
