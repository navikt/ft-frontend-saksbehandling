import{c as S,i as z,r as W,j as e,H as G,D as J,aA as Q,V as h,I as B,e as V,L as N,B as F,aB as Y,aa as X,aw as Z,aQ as ee,A as te,aR as re,as as ne,au as f,P as ie,h as se}from"./iframe-Ij6u3qkZ.js";import{a as ae}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as le,a as ue,N as D,o as O,m as de}from"./style-idQLgP5J.js";import{S as ke}from"./PlusCircle-DxTYHg5S.js";import{M as o}from"./message-BGJyuEPI.js";import{E as A}from"./ExpansionCard-C4qa0oCB.js";import{L as oe}from"./Link-d8_myRvz.js";import{T as s}from"./Table-24vFMoGj.js";import"./preload-helper-D9Z9MdNV.js";var w=(r=>(r.FORSETT="FORSETT",r.GROVT_UAKTSOM="GROVT_UAKTSOM",r.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",r))(w||{});const m={OPPSUMMERING:"OPPSUMMERING",FAKTA:"FAKTA",FORELDELSE:"FORELDELSE",VILKAR:"VILKÅR",SARLIGEGRUNNER:"SÆRLIGEGRUNNER",SARLIGEGRUNNER_ANNET:"SÆRLIGEGRUNNER_ANNET"},ge="_addCircleIcon_1pxx3_1",ve="_addPeriode_1pxx3_7",me="_textfield_1pxx3_12",P={addCircleIcon:ge,addPeriode:ve,textfield:me},I=ue(3),pe=O(4e3),fe=[I,D],ye=[le,I,D],M=({type:r,readOnly:n,fritekstPakrevet:t,maximumLength:i})=>{const u=S(),{watch:k,control:a}=z(),g=k(r)===void 0,[d,v]=W.useState(g&&!t),p=t?ye:fe;return p.push(i?O(i):pe),e.jsxs(e.Fragment,{children:[d&&!n&&e.jsx("div",{onClick:l=>{l.preventDefault(),v(!1)},onKeyDown:l=>{l.preventDefault(),v(!1)},className:P.addPeriode,role:"button",tabIndex:0,children:e.jsxs(G,{gap:"space-8",align:"center",children:[e.jsx(ke,{className:P.addCircleIcon,title:u.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})}),e.jsx(J,{as:"span",children:e.jsx(o,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})]})}),!d&&e.jsx(Q,{className:P.textfield,name:r,control:a,label:e.jsx(o,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:p,maxLength:i||4e3,readOnly:n})]})};M.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakUtdypendeTekstPanel",props:{type:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fritekstPakrevet:{required:!1,tsType:{name:"boolean"},description:""},maximumLength:{required:!1,tsType:{name:"number"},description:""}}};const be="_gulmarkering_xswfh_1",ce="_paddingTop_xswfh_6",x={gulmarkering:be,paddingTop:ce},j=({intl:r,vedtaksbrevAvsnitt:n,readOnly:t,perioderSomIkkeHarUtfyltObligatoriskVerdi:i,fritekstOppsummeringPakrevdMenIkkeUtfylt:u=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:k})=>e.jsxs(h,{gap:"space-16",children:[e.jsx(B,{size:"small",level:"2",children:e.jsx(o,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),n.map(a=>{const g=a.underavsnittsliste,d=`${a.fom}_${a.tom}`,v=i.some(l=>l===d),p=a.avsnittstype===m.OPPSUMMERING&&u;return e.jsx(V.Fragment,{children:e.jsxs(A,{size:"small","aria-label":d,defaultOpen:v||p,className:v||p?x.gulmarkering:"",children:[e.jsx(A.Header,{children:e.jsx(A.Title,{size:"small",children:a.overskrift?a.overskrift:r.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),e.jsx(A.Content,{children:e.jsx(h,{gap:"space-8",children:g.map(l=>e.jsxs(V.Fragment,{children:[l.overskrift&&e.jsx(N,{className:x.paddingTop,children:l.overskrift}),l.brødtekst&&e.jsx(F,{children:l.brødtekst}),l.fritekstTillatt&&e.jsx(M,{type:l.underavsnittstype?`${d}.${l.underavsnittstype}`:a.avsnittstype,readOnly:t,fritekstPakrevet:l.fritekstPåkrevet,maximumLength:k?1e4:void 0})]},(l.underavsnittstype??"")+l.overskrift+l.brødtekst))})})]})},a.avsnittstype+a.fom)})]});j.buildInitialValues=r=>r.filter(n=>n.underavsnittsliste.some(t=>t.fritekst)).reduce((n,t)=>{const u=t.underavsnittsliste.filter(a=>a.fritekst).reduce((a,g)=>({...a,[g.underavsnittstype?g.underavsnittstype:t.avsnittstype]:Y(g.fritekst)}),{}),k=t.fom?{[`${t.fom}_${t.tom}`]:u}:u;return{...n,...k}},{});j.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"vedtaksbrevAvsnitt",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"string",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"}}],returns:{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"}}}],displayName:"TilbakekrevingEditerVedtaksbrevPanel",props:{intl:{required:!0,tsType:{name:"IntlShape"},description:""},vedtaksbrevAvsnitt:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"string",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},perioderSomIkkeHarUtfyltObligatoriskVerdi:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},fritekstOppsummeringPakrevdMenIkkeUtfylt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""}}};var U=(r=>(r.FORESLA_VEDTAK="5004",r))(U||{});const _=r=>{const n=re(r,m.OPPSUMMERING);return{oppsummeringstekst:r[m.OPPSUMMERING],perioderMedTekst:Object.keys(n).map(t=>({fom:t.split("_")[0],tom:t.split("_")[1],faktaAvsnitt:n[t][m.FAKTA],foreldelseAvsnitt:n[t][m.FORELDELSE],vilkaarAvsnitt:n[t][m.VILKAR],saerligeGrunnerAvsnitt:n[t][m.SARLIGEGRUNNER],saerligeGrunnerAnnetAvsnitt:n[t][m.SARLIGEGRUNNER_ANNET]}))}},Te=(r,n)=>r.some(t=>t.avsnittstype===m.OPPSUMMERING&&t.underavsnittsliste.some(i=>i.fritekstPåkrevet)&&!n[m.OPPSUMMERING]),Ae=r=>({kode:U.FORESLA_VEDTAK,..._(r)}),qe=(r,n)=>r.reduce((t,i)=>{const u=`${i.fom}_${i.tom}`,k=n[u];return i.underavsnittsliste.some(d=>d.fritekstPåkrevet&&d.underavsnittstype===m.FAKTA)&&(!k||!k[m.FAKTA])||i.underavsnittsliste.some(d=>d.fritekstPåkrevet&&d.underavsnittstype===m.SARLIGEGRUNNER_ANNET)&&(!k||!k[m.SARLIGEGRUNNER_ANNET])?t.concat(u):t},[]),E=(r,n,t)=>i=>{r({uuid:n,..._(t)}),i.preventDefault()},K=({submitCallback:r,readOnly:n,fetchPreviewVedtaksbrev:t,avsnittsliste:i,behandlingUuid:u,erRevurderingTilbakekrevingKlage:k,erRevurderingTilbakekrevingFeilBeløpBortfalt:a,formData:g,setFormData:d})=>{const v=i,p=g||j.buildInitialValues(v),l=S(),y=X({defaultValues:p}),b=y.watch(),R=Te(v,b),c=qe(v,b),$=R||c.length>0;return e.jsx(Z,{formMethods:y,onSubmit:T=>r(Ae(T)),setDataOnUnmount:d,children:e.jsxs(h,{gap:"space-16",children:[e.jsx(j,{intl:l,vedtaksbrevAvsnitt:v,readOnly:n,perioderSomIkkeHarUtfyltObligatoriskVerdi:c,fritekstOppsummeringPakrevdMenIkkeUtfylt:R,erRevurderingTilbakekrevingFeilBeløpBortfalt:a}),e.jsxs(G,{gap:"space-16",align:"center",children:[e.jsx(ee,{text:l.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:n,isSubmittable:c.length===0&&!R,isSubmitting:y.formState.isSubmitting,hasErrors:$}),c.length===0&&e.jsx(oe,{href:"",onClick:E(t,u,b),onKeyDown:T=>T.key==="Enter"?E(t,u,b)(T):null,children:e.jsx(o,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})]}),k&&e.jsx(te,{inline:!0,variant:"warning",contentMaxWidth:!1,children:e.jsx(o,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})})]})})};K.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakForm",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
  oppsummeringstekst?: string;
} & AksjonspunktTilBekreftelse<VedtakAksjonspunktCode.FORESLA_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
  oppsummeringstekst?: string;
}`,signature:{properties:[{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!0}},{key:"vilkaarAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}[]`,required:!0}},{key:"oppsummeringstekst",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},avsnittsliste:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"string",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  uuid: string;
} & VedtakData`,elements:[{name:"signature",type:"object",raw:`{
  uuid: string;
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  oppsummeringstekst: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    foreldelseAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!0}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!0}},{key:"foreldelseAvsnitt",value:{name:"string",required:!0}},{key:"vilkaarAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},name:"data"}],return:{name:"void"}}},description:""}}};const L=({perioder:r,kodeverkSamlingFpTilbake:n})=>e.jsxs(s,{children:[e.jsx(s.Header,{children:e.jsxs(s.Row,{children:[e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.Periode"})}),e.jsx(s.HeaderCell,{scope:"col",align:"right",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.Vurdering"})}),e.jsx(s.HeaderCell,{scope:"col",align:"right",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.AndelAvBelop"})}),e.jsx(s.HeaderCell,{scope:"col",align:"right",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.Renter"})}),e.jsx(s.HeaderCell,{scope:"col",align:"right",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.ForSkatt"})}),e.jsx(s.HeaderCell,{scope:"col",align:"right",children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"})})]})}),e.jsxs(s.Body,{children:[r.map(t=>e.jsxs(s.Row,{children:[e.jsx(s.DataCell,{children:e.jsx(ne,{dateStringFom:t.periode.fom,dateStringTom:t.periode.tom})}),e.jsx(s.DataCell,{align:"right",children:e.jsx(f,{beløp:t.feilutbetaltBeløp})}),e.jsx(s.DataCell,{children:n.Aktsomhet.find(i=>i.kode===t.vurdering)?.navn}),e.jsx(s.DataCell,{align:"right",children:t.andelAvBeløp!==void 0&&t.andelAvBeløp!==null?`${t.andelAvBeløp}%`:""}),e.jsx(s.DataCell,{align:"right",children:t.renterProsent?`${t.renterProsent}%`:""}),e.jsx(s.DataCell,{align:"right",children:e.jsx(f,{beløp:t.tilbakekrevingBeløp})}),e.jsx(s.DataCell,{align:"right",children:e.jsx(f,{beløp:t.tilbakekrevingBeløpEtterSkatt})})]},t.periode.fom)),e.jsxs(s.Row,{children:[e.jsx(s.HeaderCell,{children:e.jsx(o,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})}),e.jsx(s.HeaderCell,{align:"right",children:e.jsx(f,{beløp:r.reduce((t,i)=>t+i.feilutbetaltBeløp,0)})}),e.jsx(s.DataCell,{}),e.jsx(s.DataCell,{}),e.jsx(s.DataCell,{}),e.jsx(s.HeaderCell,{align:"right",children:e.jsx(f,{beløp:r.reduce((t,i)=>t+i.tilbakekrevingBeløp,0)})}),e.jsx(s.HeaderCell,{align:"right",children:e.jsx(f,{beløp:r.reduce((t,i)=>t+i.tilbakekrevingBeløpEtterSkatt,0)})})]},"sum")]})]});L.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakPeriodeTabell",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"Aktsomhet",required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  VedtakResultatType: VedtakResultatType;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"Aktsomhet",required:!0}},{key:"VedtakResultatType",value:{name:"VedtakResultatType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const C=({submitCallback:r,readOnly:n,resultat:t,perioder:i,kodeverkSamlingFpTilbake:u,behandlingUuid:k,avsnittsliste:a,fetchPreviewVedtaksbrev:g,erRevurderingTilbakekrevingKlage:d,erRevurderingTilbakekrevingFeilBeløpBortfalt:v,formData:p,setFormData:l})=>e.jsxs(h,{gap:"space-24",maxWidth:"1200px",children:[e.jsx(B,{size:"small",level:"2",children:e.jsx(o,{id:"TilbakekrevingVedtak.Vedtak"})}),e.jsxs("div",{children:[e.jsx(N,{children:e.jsx(o,{id:"TilbakekrevingVedtak.Resultat"})}),e.jsx(F,{children:u.VedtakResultatType.find(y=>y.kode===t)?.navn})]}),e.jsx(L,{perioder:i,kodeverkSamlingFpTilbake:u}),e.jsx(K,{submitCallback:r,readOnly:n,behandlingUuid:k,avsnittsliste:a,fetchPreviewVedtaksbrev:g,erRevurderingTilbakekrevingKlage:d,erRevurderingTilbakekrevingFeilBeløpBortfalt:v,formData:p,setFormData:l})]});C.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtak",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
  oppsummeringstekst?: string;
} & AksjonspunktTilBekreftelse<VedtakAksjonspunktCode.FORESLA_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
  oppsummeringstekst?: string;
}`,signature:{properties:[{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!0}},{key:"vilkaarAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}[]`,required:!0}},{key:"oppsummeringstekst",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},resultat:{required:!0,tsType:{name:"VedtakResultatType"},description:""},perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"Aktsomhet",required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  VedtakResultatType: VedtakResultatType;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"Aktsomhet",required:!0}},{key:"VedtakResultatType",value:{name:"VedtakResultatType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},avsnittsliste:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"string",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  uuid: string;
} & VedtakData`,elements:[{name:"signature",type:"object",raw:`{
  uuid: string;
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  oppsummeringstekst: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    foreldelseAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!0}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!0}},{key:"foreldelseAvsnitt",value:{name:"string",required:!0}},{key:"vilkaarAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},name:"data"}],return:{name:"void"}}},description:""}}};const he={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},je=se(he),H=({behandlingUuid:r,beregningsresultat:n,isReadOnly:t,submitCallback:i,kodeverkSamlingFpTilbake:u,formData:k,setFormData:a,vedtaksbrev:g,fetchPreviewVedtaksbrev:d,erRevurderingTilbakekrevingKlage:v,erRevurderingTilbakekrevingFeilBeløpBortfalt:p})=>e.jsx(ie,{value:je,children:e.jsx(C,{behandlingUuid:r,perioder:n.beregningResultatPerioder,resultat:n.vedtakResultatType,avsnittsliste:g.avsnittsliste,submitCallback:i,readOnly:t,kodeverkSamlingFpTilbake:u,fetchPreviewVedtaksbrev:d,erRevurderingTilbakekrevingKlage:v,erRevurderingTilbakekrevingFeilBeløpBortfalt:p,formData:k,setFormData:a})});H.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessIndex",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregningsresultat:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"Aktsomhet",required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]",required:!0}},{key:"vedtakResultatType",value:{name:"VedtakResultatType",required:!0}}]}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  VedtakResultatType: VedtakResultatType;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"Aktsomhet",required:!0}},{key:"VedtakResultatType",value:{name:"VedtakResultatType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"string",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]",required:!0}}]}},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(param: ForhandsvisData) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  uuid: string;
} & VedtakData`,elements:[{name:"signature",type:"object",raw:`{
  uuid: string;
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  oppsummeringstekst: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    foreldelseAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!0}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!0}},{key:"foreldelseAvsnitt",value:{name:"string",required:!0}},{key:"vilkaarAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}[]`,required:!0}}]}}]},name:"param"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!0,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:Re}=__STORYBOOK_MODULE_ACTIONS__,Pe={avsnittsliste:[{overskrift:"Du må betale tilbake foreldrepenger",underavsnittsliste:[{brødtekst:"Vi varslet deg 31. oktober 2019 om at du har fått 49863 kroner for mye. Du må betale tilbake 22950 kroner, som er deler av det feilutbetalte beløpet.",fritekstTillatt:!0,fritekstPåkrevet:!1}],avsnittstype:"OPPSUMMERING"},{overskrift:"Gjelder perioden fra og med 16. mars 2016 til og med 26. mai 2016",underavsnittsliste:[{brødtekst:"Du er ikke medlem av folketrygden. Fordi du ikke har jobbet eller hatt familie som forsørget deg i Norge, har du ikke rett til opphold etter EØS avtalen. Derfor har du ikke rett til foreldrepenger.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"FAKTA"},{brødtekst:"Derfor har du fått 51000 kroner for mye utbetalt i denne perioden.",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"FAKTA"},{overskrift:"Hvordan har vi kommet fram til at du må betale tilbake?",brødtekst:"Du har fått vite om du har rett til foreldrepenger og hvor mye du har rett til. Selv om du har meldt fra til oss, kan vi kreve tilbake det du har fått for mye dersom du må ha forstått at beløpet var feil.",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{brødtekst:"Ut fra informasjonen du har fått, må du etter vår vurdering ha forstått at du fikk for mye utbetalt. Derfor kan vi kreve tilbake.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{overskrift:"Er det særlige grunner til å redusere beløpet?",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER"},{brødtekst:"Vi har lagt vekt på at du må ha forstått at du fikk penger du ikke har rett til. Vi vurderer likevel at uaktsomheten din har vært så liten at vi har redusert beløpet du må betale tilbake. Det er i vurderingen også lagt vekt på ",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"},{brødtekst:"Du må betale 22950 kroner.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"}],avsnittstype:"PERIODE",fom:"2016-03-16",tom:"2016-05-26"},{underavsnittsliste:[{brødtekst:"Vedtaket er gjort etter folketrygdloven § 22-15 og foreldelsesloven §§ 2 og 3.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Skatt",brødtekst:"Nav gir opplysninger til skatteetaten når det feilutbetalte beløpet er tilbakebetalt. Skatteetaten vil da vurdere om det er grunnlag for å endre tidligere skatteoppgjør.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Hvordan betale tilbake pengene du skylder",brødtekst:"Vi har overført beløpet du skylder til Nav Innkreving, som vil sende deg et krav om å betale tilbake det feilutbetalte beløpet. Har du spørsmål om dette, kan du kontakte Nav Innkreving på telefon 21 05 11 00.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til å klage",brødtekst:"Du kan klage innen 6 uker fra den datoen du mottok vedtaket. Du finner skjema og informasjon på nav.no/klage.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Du må som hovedregel begynne å betale beløpet tilbake, selv om du klager på dette vedtaket. Dette følger av forvaltningsloven § 42. Hvis du får vedtak om at du ikke trengte å betale tilbake hele eller deler av beløpet du skyldte, betaler vi pengene tilbake til deg.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til innsyn",brødtekst:"På nav.no/dittnav kan du se dokumentene i saken din.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Har du spørsmål?",brødtekst:"Du finner nyttig informasjon på nav.no/familie. Du kan også kontakte oss på telefon 55 55 33 33.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Med vennlig hilsen",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Nav familie- og pensjonsytelser",fritekstTillatt:!1,fritekstPåkrevet:!1}],avsnittstype:"TILLEGGSINFORMASJON"}]},we={beregningResultatPerioder:[{periode:{fom:"2018-10-01",tom:"2019-01-01"},feilutbetaltBeløp:1e4,vurdering:w.FORSETT,andelAvBeløp:50,renterProsent:0,tilbakekrevingBeløp:5e3,tilbakekrevingBeløpEtterSkatt:4e3},{periode:{fom:"2018-01-01",tom:"2019-01-01"},feilutbetaltBeløp:1e3,vurdering:w.FORSETT,andelAvBeløp:50,renterProsent:80,tilbakekrevingBeløp:500,tilbakekrevingBeløpEtterSkatt:400}],vedtakResultatType:de.DELVIS_TILBAKEBETALING},Ve=ae,Ie={component:H,args:{submitCallback:Re("button-click"),behandlingUuid:"1",vedtaksbrev:Pe,fetchPreviewVedtaksbrev:()=>Promise.resolve(),kodeverkSamlingFpTilbake:Ve,isReadOnly:!1,setFormData:()=>{},beregningsresultat:we,erRevurderingTilbakekrevingKlage:!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:!0}},q={};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:"{}",...q.parameters?.docs?.source}}};const Me=["Default"];export{q as Default,Me as __namedExportsOrder,Ie as default};
