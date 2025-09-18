import{c as G,i as C,r as H,j as e,H as L,D as J,aA as z,V as E,I as j,e as N,L as h,B as O,aB as W,aa as Y,aw as Q,aK as X,A as Z,aL as ee,as as te,au as p,P as re,h as ne}from"./iframe-BdgFb11-.js";import{a as ae}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as ie,a as se,N as w,o as V}from"./style-DtFXmyP6.js";import{S as le}from"./PlusCircle-DvfKjEaW.js";import{M as d}from"./message-BEJaPLUf.js";import{E as A}from"./ExpansionCard-NtFu0FRO.js";import{L as ue}from"./Link-CIJYVY6S.js";import{T as i}from"./Table-sfm6HVNE.js";import"./preload-helper-D9Z9MdNV.js";const ke="_addCircleIcon_1pxx3_1",de="_addPeriode_1pxx3_7",oe="_textfield_1pxx3_12",I={addCircleIcon:ke,addPeriode:de,textfield:oe},U=se(3),ve=V(4e3),ge=[U,w],me=[ie,U,w],F=({name:r,readOnly:a,fritekstPakrevet:t,maximumLength:n})=>{const u=G(),{watch:o,control:s}=C(),v=o(r)===void 0,[k,g]=H.useState(v&&!t),m=t?me:ge;return m.push(n?V(n):ve),e.jsxs(e.Fragment,{children:[k&&!a&&e.jsx("div",{onClick:l=>{l.preventDefault(),g(!1)},onKeyDown:l=>{l.preventDefault(),g(!1)},className:I.addPeriode,role:"button",tabIndex:0,children:e.jsxs(L,{gap:"space-8",align:"center",children:[e.jsx(le,{className:I.addCircleIcon,title:u.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})}),e.jsx(J,{as:"span",children:e.jsx(d,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})]})}),!k&&e.jsx(z,{className:I.textfield,name:r,control:s,label:e.jsx(d,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:m,maxLength:n||4e3,readOnly:a})]})};F.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakUtdypendeTekstPanel",props:{name:{required:!0,tsType:{name:"FieldPath",elements:[{name:"intersection",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
} & { [key in AvsnittType]?: string }`,elements:[{name:"signature",type:"object",raw:`{
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
}`,signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:`{
  [key in UnderavsnittType]?: string;
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]}],raw:"FieldPath<FormValues>"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fritekstPakrevet:{required:!1,tsType:{name:"boolean"},description:""},maximumLength:{required:!1,tsType:{name:"number"},description:""}}};const pe="_gulmarkering_xswfh_1",ye="_paddingTop_xswfh_6",S={gulmarkering:pe,paddingTop:ye},R=({intl:r,vedtaksbrevAvsnitt:a,readOnly:t,perioderSomIkkeHarUtfyltObligatoriskVerdi:n,fritekstOppsummeringPakrevdMenIkkeUtfylt:u=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:o})=>e.jsxs(E,{gap:"space-16",children:[e.jsx(j,{size:"small",level:"2",children:e.jsx(d,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),a.map(s=>{const v=s.underavsnittsliste,k=`${s.fom}_${s.tom}`,g=n.some(l=>l===k),m=s.avsnittstype==="OPPSUMMERING"&&u;return e.jsx(N.Fragment,{children:e.jsxs(A,{size:"small","aria-label":k,defaultOpen:g||m,className:g||m?S.gulmarkering:"",children:[e.jsx(A.Header,{children:e.jsx(A.Title,{size:"small",children:s.overskrift?s.overskrift:r.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),e.jsx(A.Content,{children:e.jsx(E,{gap:"space-8",children:v.map(l=>e.jsxs(N.Fragment,{children:[l.overskrift&&e.jsx(h,{className:S.paddingTop,children:l.overskrift}),l.brødtekst&&e.jsx(O,{children:l.brødtekst}),l.fritekstTillatt&&e.jsx(F,{name:l.underavsnittstype?`${k}.${l.underavsnittstype}`:s.avsnittstype,readOnly:t,fritekstPakrevet:l.fritekstPåkrevet,maximumLength:o?1e4:void 0})]},(l.underavsnittstype??"")+l.overskrift+l.brødtekst))})})]})},s.avsnittstype+s.fom)})]});R.buildInitialValues=r=>r.filter(a=>a.underavsnittsliste.some(t=>t.fritekst)).reduce((a,t)=>{const u=t.underavsnittsliste.filter(s=>s.fritekst).reduce((s,v)=>({...s,[v.underavsnittstype?v.underavsnittstype:t.avsnittstype]:W(v.fritekst)}),{}),o=t.fom?{[`${t.fom}_${t.tom}`]:u}:u;return{...a,...o}},{});R.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"vedtaksbrevAvsnitt",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},perioderSomIkkeHarUtfyltObligatoriskVerdi:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},fritekstOppsummeringPakrevdMenIkkeUtfylt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""}}};var M=(r=>(r.FORESLA_VEDTAK="5004",r))(M||{});const B=r=>({oppsummeringstekst:r.OPPSUMMERING,perioderMedTekst:Object.entries(ee(r,"OPPSUMMERING")).map(([a,t])=>({fom:a.split("_")[0],tom:a.split("_")[1],faktaAvsnitt:t.FAKTA,foreldelseAvsnitt:t.FORELDELSE,vilkaarAvsnitt:t.VILKÅR,saerligeGrunnerAvsnitt:t.SÆRLIGEGRUNNER,saerligeGrunnerAnnetAvsnitt:t.SÆRLIGEGRUNNER_ANNET}))}),fe=(r,a)=>r.some(t=>t.avsnittstype==="OPPSUMMERING"&&t.underavsnittsliste.some(n=>n.fritekstPåkrevet)&&!a.OPPSUMMERING),Te=r=>({kode:M.FORESLA_VEDTAK,...B(r)}),be=(r,a)=>r.reduce((t,n)=>{const u=`${n.fom}_${n.tom}`,o=a[u];return n.underavsnittsliste.some(k=>k.fritekstPåkrevet&&k.underavsnittstype==="FAKTA")&&!o?.FAKTA||n.underavsnittsliste.some(k=>k.fritekstPåkrevet&&k.underavsnittstype==="SÆRLIGEGRUNNER_ANNET")&&!o?.SÆRLIGEGRUNNER_ANNET?t.concat(u):t},[]),P=(r,a,t)=>n=>{r({uuid:a,...B(t)}),n.preventDefault()},x=({submitCallback:r,readOnly:a,fetchPreviewVedtaksbrev:t,avsnittsliste:n,behandlingUuid:u,erRevurderingTilbakekrevingKlage:o,erRevurderingTilbakekrevingFeilBeløpBortfalt:s,formData:v,setFormData:k})=>{const g=n,m=v||R.buildInitialValues(g),l=G(),y=Y({defaultValues:m}),f=y.watch(),q=fe(g,f),T=be(g,f),$=q||T.length>0;return e.jsx(Q,{formMethods:y,onSubmit:b=>r(Te(b)),setDataOnUnmount:k,children:e.jsxs(E,{gap:"space-16",children:[e.jsx(R,{intl:l,vedtaksbrevAvsnitt:g,readOnly:a,perioderSomIkkeHarUtfyltObligatoriskVerdi:T,fritekstOppsummeringPakrevdMenIkkeUtfylt:q,erRevurderingTilbakekrevingFeilBeløpBortfalt:s}),e.jsxs(L,{gap:"space-16",align:"center",children:[e.jsx(X,{text:l.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:a,isSubmittable:T.length===0&&!q,isSubmitting:y.formState.isSubmitting,hasErrors:$}),T.length===0&&e.jsx(ue,{href:"",onClick:P(t,u,f),onKeyDown:b=>b.key==="Enter"?P(t,u,f)(b):null,children:e.jsx(d,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})]}),o&&e.jsx(Z,{inline:!0,variant:"warning",contentMaxWidth:!1,children:e.jsx(d,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})})]})})};x.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakForm",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`HentForhåndvisningVedtaksbrevPdf &
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
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]},name:"data"}],return:{name:"void"}}},description:""}}};const K=({perioder:r,kodeverkSamlingFpTilbake:a})=>e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsxs(i.Row,{children:[e.jsx(i.HeaderCell,{scope:"col",children:e.jsx(d,{id:"TilbakekrevingVedtakPeriodeTabell.Periode"})}),e.jsx(i.HeaderCell,{scope:"col",align:"right",children:e.jsx(d,{id:"TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop"})}),e.jsx(i.HeaderCell,{scope:"col",children:e.jsx(d,{id:"TilbakekrevingVedtakPeriodeTabell.Vurdering"})}),e.jsx(i.HeaderCell,{scope:"col",align:"right",children:e.jsx(d,{id:"TilbakekrevingVedtakPeriodeTabell.AndelAvBelop"})}),e.jsx(i.HeaderCell,{scope:"col",align:"right",children:e.jsx(d,{id:"TilbakekrevingVedtakPeriodeTabell.Renter"})}),e.jsx(i.HeaderCell,{scope:"col",align:"right",children:e.jsx(d,{id:"TilbakekrevingVedtakPeriodeTabell.ForSkatt"})}),e.jsx(i.HeaderCell,{scope:"col",align:"right",children:e.jsx(d,{id:"TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"})})]})}),e.jsxs(i.Body,{children:[r.map(t=>e.jsxs(i.Row,{children:[e.jsx(i.DataCell,{children:e.jsx(te,{dateStringFom:t.periode.fom,dateStringTom:t.periode.tom})}),e.jsx(i.DataCell,{align:"right",children:e.jsx(p,{beløp:t.feilutbetaltBeløp})}),e.jsx(i.DataCell,{children:a.Aktsomhet.find(n=>n.kode===t.vurdering)?.navn}),e.jsx(i.DataCell,{align:"right",children:t.andelAvBeløp!==void 0&&t.andelAvBeløp!==null?`${t.andelAvBeløp}%`:""}),e.jsx(i.DataCell,{align:"right",children:t.renterProsent?`${t.renterProsent}%`:""}),e.jsx(i.DataCell,{align:"right",children:e.jsx(p,{beløp:t.tilbakekrevingBeløp})}),e.jsx(i.DataCell,{align:"right",children:e.jsx(p,{beløp:t.tilbakekrevingBeløpEtterSkatt})})]},t.periode.fom)),e.jsxs(i.Row,{children:[e.jsx(i.HeaderCell,{children:e.jsx(d,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})}),e.jsx(i.HeaderCell,{align:"right",children:e.jsx(p,{beløp:r.reduce((t,n)=>t+n.feilutbetaltBeløp,0)})}),e.jsx(i.DataCell,{}),e.jsx(i.DataCell,{}),e.jsx(i.DataCell,{}),e.jsx(i.HeaderCell,{align:"right",children:e.jsx(p,{beløp:r.reduce((t,n)=>t+n.tilbakekrevingBeløp,0)})}),e.jsx(i.HeaderCell,{align:"right",children:e.jsx(p,{beløp:r.reduce((t,n)=>t+n.tilbakekrevingBeløpEtterSkatt,0)})})]},"sum")]})]});K.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakPeriodeTabell",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const _=({submitCallback:r,readOnly:a,resultat:t,perioder:n,kodeverkSamlingFpTilbake:u,behandlingUuid:o,avsnittsliste:s,fetchPreviewVedtaksbrev:v,erRevurderingTilbakekrevingKlage:k,erRevurderingTilbakekrevingFeilBeløpBortfalt:g,formData:m,setFormData:l})=>e.jsxs(E,{gap:"space-24",maxWidth:"1200px",children:[e.jsx(j,{size:"small",level:"2",children:e.jsx(d,{id:"TilbakekrevingVedtak.Vedtak"})}),e.jsxs("div",{children:[e.jsx(h,{children:e.jsx(d,{id:"TilbakekrevingVedtak.Resultat"})}),e.jsx(O,{children:u.VedtakResultatType.find(y=>y.kode===t)?.navn})]}),e.jsx(K,{perioder:n,kodeverkSamlingFpTilbake:u}),e.jsx(x,{submitCallback:r,readOnly:a,behandlingUuid:o,avsnittsliste:s,fetchPreviewVedtaksbrev:v,erRevurderingTilbakekrevingKlage:k,erRevurderingTilbakekrevingFeilBeløpBortfalt:g,formData:m,setFormData:l})]});_.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtak",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`HentForhåndvisningVedtaksbrevPdf &
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
}`,signature:{properties:[{key:{name:"union",raw:"'FAKTA' | 'FORELDELSE' | 'VILKÅR' | 'SÆRLIGEGRUNNER' | 'SÆRLIGEGRUNNER_ANNET'",elements:[{name:"literal",value:"'FAKTA'"},{name:"literal",value:"'FORELDELSE'"},{name:"literal",value:"'VILKÅR'"},{name:"literal",value:"'SÆRLIGEGRUNNER'"},{name:"literal",value:"'SÆRLIGEGRUNNER_ANNET'"}],required:!1},value:{name:"string"}}]},required:!0}}]}},{name:"signature",type:"object",raw:"{ [key in AvsnittType]?: string }",signature:{properties:[{key:{name:"union",raw:"'OPPSUMMERING' | 'PERIODE' | 'TILLEGGSINFORMASJON'",elements:[{name:"literal",value:"'OPPSUMMERING'"},{name:"literal",value:"'PERIODE'"},{name:"literal",value:"'TILLEGGSINFORMASJON'"}],required:!1},value:{name:"string"}}]}}]},name:"data"}],return:{name:"void"}}},description:""}}};const Ae={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},ce=ne(Ae),D=({behandlingUuid:r,beregningsresultat:a,isReadOnly:t,submitCallback:n,kodeverkSamlingFpTilbake:u,formData:o,setFormData:s,vedtaksbrev:v,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:g,erRevurderingTilbakekrevingFeilBeløpBortfalt:m})=>e.jsx(re,{value:ce,children:e.jsx(_,{behandlingUuid:r,perioder:a.beregningResultatPerioder,resultat:a.vedtakResultatType,avsnittsliste:v.avsnittsliste,submitCallback:n,readOnly:t,kodeverkSamlingFpTilbake:u,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:g,erRevurderingTilbakekrevingFeilBeløpBortfalt:m,formData:o,setFormData:s})});D.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessIndex",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregningsresultat:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}}]},name:"param"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!0,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:Ee}=__STORYBOOK_MODULE_ACTIONS__,Re={avsnittsliste:[{overskrift:"Du må betale tilbake foreldrepenger",underavsnittsliste:[{brødtekst:"Vi varslet deg 31. oktober 2019 om at du har fått 49863 kroner for mye. Du må betale tilbake 22950 kroner, som er deler av det feilutbetalte beløpet.",fritekstTillatt:!0,fritekstPåkrevet:!1}],avsnittstype:"OPPSUMMERING"},{overskrift:"Gjelder perioden fra og med 16. mars 2016 til og med 26. mai 2016",underavsnittsliste:[{brødtekst:"Du er ikke medlem av folketrygden. Fordi du ikke har jobbet eller hatt familie som forsørget deg i Norge, har du ikke rett til opphold etter EØS avtalen. Derfor har du ikke rett til foreldrepenger.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"FAKTA"},{brødtekst:"Derfor har du fått 51000 kroner for mye utbetalt i denne perioden.",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"FAKTA"},{overskrift:"Hvordan har vi kommet fram til at du må betale tilbake?",brødtekst:"Du har fått vite om du har rett til foreldrepenger og hvor mye du har rett til. Selv om du har meldt fra til oss, kan vi kreve tilbake det du har fått for mye dersom du må ha forstått at beløpet var feil.",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{brødtekst:"Ut fra informasjonen du har fått, må du etter vår vurdering ha forstått at du fikk for mye utbetalt. Derfor kan vi kreve tilbake.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{overskrift:"Er det særlige grunner til å redusere beløpet?",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER"},{brødtekst:"Vi har lagt vekt på at du må ha forstått at du fikk penger du ikke har rett til. Vi vurderer likevel at uaktsomheten din har vært så liten at vi har redusert beløpet du må betale tilbake. Det er i vurderingen også lagt vekt på ",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"},{brødtekst:"Du må betale 22950 kroner.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"}],avsnittstype:"PERIODE",fom:"2016-03-16",tom:"2016-05-26"},{underavsnittsliste:[{brødtekst:"Vedtaket er gjort etter folketrygdloven § 22-15 og foreldelsesloven §§ 2 og 3.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Skatt",brødtekst:"Nav gir opplysninger til skatteetaten når det feilutbetalte beløpet er tilbakebetalt. Skatteetaten vil da vurdere om det er grunnlag for å endre tidligere skatteoppgjør.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Hvordan betale tilbake pengene du skylder",brødtekst:"Vi har overført beløpet du skylder til Nav Innkreving, som vil sende deg et krav om å betale tilbake det feilutbetalte beløpet. Har du spørsmål om dette, kan du kontakte Nav Innkreving på telefon 21 05 11 00.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til å klage",brødtekst:"Du kan klage innen 6 uker fra den datoen du mottok vedtaket. Du finner skjema og informasjon på nav.no/klage.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Du må som hovedregel begynne å betale beløpet tilbake, selv om du klager på dette vedtaket. Dette følger av forvaltningsloven § 42. Hvis du får vedtak om at du ikke trengte å betale tilbake hele eller deler av beløpet du skyldte, betaler vi pengene tilbake til deg.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til innsyn",brødtekst:"På nav.no/dittnav kan du se dokumentene i saken din.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Har du spørsmål?",brødtekst:"Du finner nyttig informasjon på nav.no/familie. Du kan også kontakte oss på telefon 55 55 33 33.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Med vennlig hilsen",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Nav familie- og pensjonsytelser",fritekstTillatt:!1,fritekstPåkrevet:!1}],avsnittstype:"TILLEGGSINFORMASJON"}]},qe={beregningResultatPerioder:[{periode:{fom:"2018-10-01",tom:"2019-01-01"},feilutbetaltBeløp:1e4,vurdering:"FORSETT",andelAvBeløp:50,renterProsent:0,tilbakekrevingBeløp:5e3,tilbakekrevingBeløpEtterSkatt:4e3},{periode:{fom:"2018-01-01",tom:"2019-01-01"},feilutbetaltBeløp:1e3,vurdering:"FORSETT",andelAvBeløp:50,renterProsent:80,tilbakekrevingBeløp:500,tilbakekrevingBeløpEtterSkatt:400}],vedtakResultatType:"DELVIS_TILBAKEBETALING"},Ie=ae,Ve={component:D,args:{submitCallback:Ee("button-click"),behandlingUuid:"1",vedtaksbrev:Re,fetchPreviewVedtaksbrev:()=>Promise.resolve(),kodeverkSamlingFpTilbake:Ie,isReadOnly:!1,setFormData:()=>{},beregningsresultat:qe,erRevurderingTilbakekrevingKlage:!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:!0}},c={};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};const Ue=["Default"];export{c as Default,Ue as __namedExportsOrder,Ve as default};
