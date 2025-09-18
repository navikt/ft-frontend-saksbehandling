import{i as _,r as D,j as e,y as $,aA as C,V as c,I as G,e as N,L as P,B as L,aB as H,c as J,aa as z,aw as W,H as Y,aK as Q,A as X,aL as Z,as as ee,au as p,P as te,h as re}from"./iframe-BGl84s7Q.js";import{a as ne}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as ae,a as ie,N as j,o as h}from"./style-M176kH7R.js";import{M as o}from"./message-BmxmIm54.js";import{S as se}from"./PlusCircle-DhFNzwQz.js";import{E as A}from"./ExpansionCard-kh_g90jO.js";import{L as le}from"./Link-DBO_e7fr.js";import{T as i}from"./Table-cm1QAHQZ.js";import"./preload-helper-D9Z9MdNV.js";const ue="_addPeriodeButton_zdgvo_2",ke={addPeriodeButton:ue},O=ie(3),de=h(4e3),oe=[O,j],ve=[ae,O,j],w=({name:r,readOnly:a,fritekstPakrevet:t,maximumLength:n})=>{const{watch:u,control:v}=_(),s=u(r)===void 0,[d,k]=D.useState(s&&!t),g=t?ve:oe;g.push(n?h(n):de);const m=l=>{l.preventDefault(),k(!1)};return e.jsxs(e.Fragment,{children:[d&&!a&&e.jsx("div",{children:e.jsx($,{icon:e.jsx(se,{"aria-hidden":!0}),variant:"tertiary",type:"button",size:"xsmall",onClick:m,className:ke.addPeriodeButton,children:e.jsx(o,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})}),!d&&e.jsx(C,{name:r,control:v,label:e.jsx(o,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:g,maxLength:n||4e3,readOnly:a})]})};w.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakUtdypendeTekstPanel",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"intersection",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
} & { [key in AvsnittType]?: string }`,elements:[{name:"signature",type:"object",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  [key in UnderavsnittType]?: string;
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]}],raw:"FieldPath<FormValues>"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fritekstPakrevet:{required:!1,tsType:{name:"boolean"},description:""},maximumLength:{required:!1,tsType:{name:"number"},description:""}}};const ge="_gulmarkering_xswfh_1",me="_paddingTop_xswfh_6",I={gulmarkering:ge,paddingTop:me},R=({intl:r,vedtaksbrevAvsnitt:a,readOnly:t,perioderSomIkkeHarUtfyltObligatoriskVerdi:n,fritekstOppsummeringPakrevdMenIkkeUtfylt:u=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:v})=>e.jsxs(c,{gap:"space-16",children:[e.jsx(G,{size:"small",level:"2",children:e.jsx(o,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),a.map(s=>{const d=s.underavsnittsliste,k=`${s.fom}_${s.tom}`,g=n.some(l=>l===k),m=s.avsnittstype==="OPPSUMMERING"&&u;return e.jsx(N.Fragment,{children:e.jsxs(A,{size:"small","aria-label":k,defaultOpen:g||m,className:g||m?I.gulmarkering:"",children:[e.jsx(A.Header,{children:e.jsx(A.Title,{size:"small",children:s.overskrift?s.overskrift:r.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),e.jsx(A.Content,{children:e.jsx(c,{gap:"space-8",children:d.map(l=>e.jsxs(N.Fragment,{children:[l.overskrift&&e.jsx(P,{className:I.paddingTop,children:l.overskrift}),l.brødtekst&&e.jsx(L,{children:l.brødtekst}),l.fritekstTillatt&&e.jsx(w,{name:l.underavsnittstype?`${k}.${l.underavsnittstype}`:s.avsnittstype,readOnly:t,fritekstPakrevet:l.fritekstPåkrevet,maximumLength:v?1e4:void 0})]},(l.underavsnittstype??"")+l.overskrift+l.brødtekst))})})]})},s.avsnittstype+s.fom)})]});R.buildInitialValues=r=>r.filter(a=>a.underavsnittsliste.some(t=>t.fritekst)).reduce((a,t)=>{const u=t.underavsnittsliste.filter(s=>s.fritekst).reduce((s,d)=>({...s,[d.underavsnittstype?d.underavsnittstype:t.avsnittstype]:H(d.fritekst)}),{}),v=t.fom?{[`${t.fom}_${t.tom}`]:u}:u;return{...a,...v}},{});R.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"vedtaksbrevAvsnitt",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},perioderSomIkkeHarUtfyltObligatoriskVerdi:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},fritekstOppsummeringPakrevdMenIkkeUtfylt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""}}};var V=(r=>(r.FORESLA_VEDTAK="5004",r))(V||{});const U=r=>({oppsummeringstekst:r.OPPSUMMERING,perioderMedTekst:Object.entries(Z(r,"OPPSUMMERING")).map(([a,t])=>({fom:a.split("_")[0],tom:a.split("_")[1],faktaAvsnitt:t.FAKTA,foreldelseAvsnitt:t.FORELDELSE,vilkaarAvsnitt:t.VILKÅR,saerligeGrunnerAvsnitt:t.SÆRLIGEGRUNNER,saerligeGrunnerAnnetAvsnitt:t.SÆRLIGEGRUNNER_ANNET}))}),pe=(r,a)=>r.some(t=>t.avsnittstype==="OPPSUMMERING"&&t.underavsnittsliste.some(n=>n.fritekstPåkrevet)&&!a.OPPSUMMERING),ye=r=>({kode:V.FORESLA_VEDTAK,...U(r)}),fe=(r,a)=>r.reduce((t,n)=>{const u=`${n.fom}_${n.tom}`,v=a[u];return n.underavsnittsliste.some(k=>k.fritekstPåkrevet&&k.underavsnittstype==="FAKTA")&&!v?.FAKTA||n.underavsnittsliste.some(k=>k.fritekstPåkrevet&&k.underavsnittstype==="SÆRLIGEGRUNNER_ANNET")&&!v?.SÆRLIGEGRUNNER_ANNET?t.concat(u):t},[]),S=(r,a,t)=>n=>{r({uuid:a,...U(t)}),n.preventDefault()},F=({submitCallback:r,readOnly:a,fetchPreviewVedtaksbrev:t,avsnittsliste:n,behandlingUuid:u,erRevurderingTilbakekrevingKlage:v,erRevurderingTilbakekrevingFeilBeløpBortfalt:s,formData:d,setFormData:k})=>{const g=n,m=d||R.buildInitialValues(g),l=J(),y=z({defaultValues:m}),f=y.watch(),q=pe(g,f),T=fe(g,f),x=q||T.length>0;return e.jsx(W,{formMethods:y,onSubmit:b=>r(ye(b)),setDataOnUnmount:k,children:e.jsxs(c,{gap:"space-16",children:[e.jsx(R,{intl:l,vedtaksbrevAvsnitt:g,readOnly:a,perioderSomIkkeHarUtfyltObligatoriskVerdi:T,fritekstOppsummeringPakrevdMenIkkeUtfylt:q,erRevurderingTilbakekrevingFeilBeløpBortfalt:s}),e.jsxs(Y,{gap:"space-16",align:"center",children:[e.jsx(Q,{text:l.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:a,isSubmittable:T.length===0&&!q,isSubmitting:y.formState.isSubmitting,hasErrors:x}),T.length===0&&e.jsx(le,{href:"",onClick:S(t,u,f),onKeyDown:b=>b.key==="Enter"?S(t,u,f)(b):null,children:e.jsx(o,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})]}),v&&e.jsx(X,{inline:!0,variant:"warning",contentMaxWidth:!1,children:e.jsx(o,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})})]})})};F.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakForm",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`HentForhåndvisningVedtaksbrevPdf &
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
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
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
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]},name:"data"}],return:{name:"void"}}},description:""}}};const B=({perioder:r,kodeverkSamlingFpTilbake:a})=>e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsxs(i.Row,{children:[e.jsx(i.HeaderCell,{scope:"col",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.Periode"})}),e.jsx(i.HeaderCell,{scope:"col",align:"right",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop"})}),e.jsx(i.HeaderCell,{scope:"col",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.Vurdering"})}),e.jsx(i.HeaderCell,{scope:"col",align:"right",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.AndelAvBelop"})}),e.jsx(i.HeaderCell,{scope:"col",align:"right",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.Renter"})}),e.jsx(i.HeaderCell,{scope:"col",align:"right",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.ForSkatt"})}),e.jsx(i.HeaderCell,{scope:"col",align:"right",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"})})]})}),e.jsxs(i.Body,{children:[r.map(t=>e.jsxs(i.Row,{children:[e.jsx(i.DataCell,{children:e.jsx(ee,{dateStringFom:t.periode.fom,dateStringTom:t.periode.tom})}),e.jsx(i.DataCell,{align:"right",children:e.jsx(p,{beløp:t.feilutbetaltBeløp})}),e.jsx(i.DataCell,{children:a.Aktsomhet.find(n=>n.kode===t.vurdering)?.navn}),e.jsx(i.DataCell,{align:"right",children:t.andelAvBeløp!==void 0&&t.andelAvBeløp!==null?`${t.andelAvBeløp}%`:""}),e.jsx(i.DataCell,{align:"right",children:t.renterProsent?`${t.renterProsent}%`:""}),e.jsx(i.DataCell,{align:"right",children:e.jsx(p,{beløp:t.tilbakekrevingBeløp})}),e.jsx(i.DataCell,{align:"right",children:e.jsx(p,{beløp:t.tilbakekrevingBeløpEtterSkatt})})]},t.periode.fom)),e.jsxs(i.Row,{children:[e.jsx(i.HeaderCell,{children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})}),e.jsx(i.HeaderCell,{align:"right",children:e.jsx(p,{beløp:r.reduce((t,n)=>t+n.feilutbetaltBeløp,0)})}),e.jsx(i.DataCell,{}),e.jsx(i.DataCell,{}),e.jsx(i.DataCell,{}),e.jsx(i.HeaderCell,{align:"right",children:e.jsx(p,{beløp:r.reduce((t,n)=>t+n.tilbakekrevingBeløp,0)})}),e.jsx(i.HeaderCell,{align:"right",children:e.jsx(p,{beløp:r.reduce((t,n)=>t+n.tilbakekrevingBeløpEtterSkatt,0)})})]},"sum")]})]});B.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakPeriodeTabell",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const M=({submitCallback:r,readOnly:a,resultat:t,perioder:n,kodeverkSamlingFpTilbake:u,behandlingUuid:v,avsnittsliste:s,fetchPreviewVedtaksbrev:d,erRevurderingTilbakekrevingKlage:k,erRevurderingTilbakekrevingFeilBeløpBortfalt:g,formData:m,setFormData:l})=>e.jsxs(c,{gap:"space-24",maxWidth:"1200px",children:[e.jsx(G,{size:"small",level:"2",children:e.jsx(o,{id:"TilbakekrevingVedtak.Vedtak"})}),e.jsxs("div",{children:[e.jsx(P,{children:e.jsx(o,{id:"TilbakekrevingVedtak.Resultat"})}),e.jsx(L,{children:u.VedtakResultatType.find(y=>y.kode===t)?.navn})]}),e.jsx(B,{perioder:n,kodeverkSamlingFpTilbake:u}),e.jsx(F,{submitCallback:r,readOnly:a,behandlingUuid:v,avsnittsliste:s,fetchPreviewVedtaksbrev:d,erRevurderingTilbakekrevingKlage:k,erRevurderingTilbakekrevingFeilBeløpBortfalt:g,formData:m,setFormData:l})]});M.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtak",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`HentForhåndvisningVedtaksbrevPdf &
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
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
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
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]},name:"data"}],return:{name:"void"}}},description:""}}};const Te={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},be=re(Te),K=({behandlingUuid:r,beregningsresultat:a,isReadOnly:t,submitCallback:n,kodeverkSamlingFpTilbake:u,formData:v,setFormData:s,vedtaksbrev:d,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:g,erRevurderingTilbakekrevingFeilBeløpBortfalt:m})=>e.jsx(te,{value:be,children:e.jsx(M,{behandlingUuid:r,perioder:a.beregningResultatPerioder,resultat:a.vedtakResultatType,avsnittsliste:d.avsnittsliste,submitCallback:n,readOnly:t,kodeverkSamlingFpTilbake:u,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:g,erRevurderingTilbakekrevingFeilBeløpBortfalt:m,formData:v,setFormData:s})});K.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessIndex",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregningsresultat:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]",required:!0}}]}},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(param: ForhandsvisData) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
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
}[]`,required:!0}}]}}]},name:"param"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!0,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:Ae}=__STORYBOOK_MODULE_ACTIONS__,Ee={avsnittsliste:[{overskrift:"Du må betale tilbake foreldrepenger",underavsnittsliste:[{brødtekst:"Vi varslet deg 31. oktober 2019 om at du har fått 49863 kroner for mye. Du må betale tilbake 22950 kroner, som er deler av det feilutbetalte beløpet.",fritekstTillatt:!0,fritekstPåkrevet:!1}],avsnittstype:"OPPSUMMERING"},{overskrift:"Gjelder perioden fra og med 16. mars 2016 til og med 26. mai 2016",underavsnittsliste:[{brødtekst:"Du er ikke medlem av folketrygden. Fordi du ikke har jobbet eller hatt familie som forsørget deg i Norge, har du ikke rett til opphold etter EØS avtalen. Derfor har du ikke rett til foreldrepenger.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"FAKTA"},{brødtekst:"Derfor har du fått 51000 kroner for mye utbetalt i denne perioden.",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"FAKTA"},{overskrift:"Hvordan har vi kommet fram til at du må betale tilbake?",brødtekst:"Du har fått vite om du har rett til foreldrepenger og hvor mye du har rett til. Selv om du har meldt fra til oss, kan vi kreve tilbake det du har fått for mye dersom du må ha forstått at beløpet var feil.",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{brødtekst:"Ut fra informasjonen du har fått, må du etter vår vurdering ha forstått at du fikk for mye utbetalt. Derfor kan vi kreve tilbake.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{overskrift:"Er det særlige grunner til å redusere beløpet?",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER"},{brødtekst:"Vi har lagt vekt på at du må ha forstått at du fikk penger du ikke har rett til. Vi vurderer likevel at uaktsomheten din har vært så liten at vi har redusert beløpet du må betale tilbake. Det er i vurderingen også lagt vekt på ",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"},{brødtekst:"Du må betale 22950 kroner.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"}],avsnittstype:"PERIODE",fom:"2016-03-16",tom:"2016-05-26"},{underavsnittsliste:[{brødtekst:"Vedtaket er gjort etter folketrygdloven § 22-15 og foreldelsesloven §§ 2 og 3.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Skatt",brødtekst:"Nav gir opplysninger til skatteetaten når det feilutbetalte beløpet er tilbakebetalt. Skatteetaten vil da vurdere om det er grunnlag for å endre tidligere skatteoppgjør.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Hvordan betale tilbake pengene du skylder",brødtekst:"Vi har overført beløpet du skylder til Nav Innkreving, som vil sende deg et krav om å betale tilbake det feilutbetalte beløpet. Har du spørsmål om dette, kan du kontakte Nav Innkreving på telefon 21 05 11 00.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til å klage",brødtekst:"Du kan klage innen 6 uker fra den datoen du mottok vedtaket. Du finner skjema og informasjon på nav.no/klage.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Du må som hovedregel begynne å betale beløpet tilbake, selv om du klager på dette vedtaket. Dette følger av forvaltningsloven § 42. Hvis du får vedtak om at du ikke trengte å betale tilbake hele eller deler av beløpet du skyldte, betaler vi pengene tilbake til deg.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til innsyn",brødtekst:"På nav.no/dittnav kan du se dokumentene i saken din.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Har du spørsmål?",brødtekst:"Du finner nyttig informasjon på nav.no/familie. Du kan også kontakte oss på telefon 55 55 33 33.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Med vennlig hilsen",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Nav familie- og pensjonsytelser",fritekstTillatt:!1,fritekstPåkrevet:!1}],avsnittstype:"TILLEGGSINFORMASJON"}]},ce={beregningResultatPerioder:[{periode:{fom:"2018-10-01",tom:"2019-01-01"},feilutbetaltBeløp:1e4,vurdering:"FORSETT",andelAvBeløp:50,renterProsent:0,tilbakekrevingBeløp:5e3,tilbakekrevingBeløpEtterSkatt:4e3},{periode:{fom:"2018-01-01",tom:"2019-01-01"},feilutbetaltBeløp:1e3,vurdering:"FORSETT",andelAvBeløp:50,renterProsent:80,tilbakekrevingBeløp:500,tilbakekrevingBeløpEtterSkatt:400}],vedtakResultatType:"DELVIS_TILBAKEBETALING"},Re=ne,Oe={component:K,args:{submitCallback:Ae("button-click"),behandlingUuid:"1",vedtaksbrev:Ee,fetchPreviewVedtaksbrev:()=>Promise.resolve(),kodeverkSamlingFpTilbake:Re,isReadOnly:!1,setFormData:()=>{},beregningsresultat:ce,erRevurderingTilbakekrevingKlage:!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:!0}},E={};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"{}",...E.parameters?.docs?.source}}};const we=["Default"];export{E as Default,we as __namedExportsOrder,Oe as default};
