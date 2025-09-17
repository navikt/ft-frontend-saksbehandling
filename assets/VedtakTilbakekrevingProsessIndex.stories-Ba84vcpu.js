import{c as w,i as z,r as J,j as e,H as G,D as W,aA as Y,V as R,I as N,e as S,L as B,B as L,aB as Q,aa as X,aw as Z,aL as ee,A as te,aM as re,as as ne,au as f,P as ie,h as ae}from"./iframe-DHH12Eb6.js";import{a as se}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as le,a as ue,N as x,o as O}from"./style-DW8x5fzL.js";import{S as de}from"./PlusCircle-EpObrRZO.js";import{M as k}from"./message-gFJE5mef.js";import{E as q}from"./ExpansionCard-CtriD2IG.js";import{L as oe}from"./Link-BeBjzVNH.js";import{T as a}from"./Table-BY1TqKmU.js";import"./preload-helper-D9Z9MdNV.js";var y=(r=>(r.OPPSUMMERING="OPPSUMMERING",r.PERIODE="PERIODE",r.TILLEGGSINFORMASJON="TILLEGGSINFORMASJON",r))(y||{}),p=(r=>(r.FAKTA="FAKTA",r.FORELDELSE="FORELDELSE",r.VILKÅR="VILKÅR",r.SÆRLIGEGRUNNER="SÆRLIGEGRUNNER",r.SÆRLIGEGRUNNER_ANNET="SÆRLIGEGRUNNER_ANNET",r))(p||{});const ke="_addCircleIcon_1pxx3_1",ge="_addPeriode_1pxx3_7",ve="_textfield_1pxx3_12",j={addCircleIcon:ke,addPeriode:ge,textfield:ve},_=ue(3),me=O(4e3),pe=[_,x],fe=[le,_,x],K=({type:r,readOnly:n,fritekstPakrevet:t,maximumLength:i})=>{const u=w(),{watch:o,control:s}=z(),g=o(r)===void 0,[d,v]=J.useState(g&&!t),m=t?fe:pe;return m.push(i?O(i):me),e.jsxs(e.Fragment,{children:[d&&!n&&e.jsx("div",{onClick:l=>{l.preventDefault(),v(!1)},onKeyDown:l=>{l.preventDefault(),v(!1)},className:j.addPeriode,role:"button",tabIndex:0,children:e.jsxs(G,{gap:"space-8",align:"center",children:[e.jsx(de,{className:j.addCircleIcon,title:u.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})}),e.jsx(W,{as:"span",children:e.jsx(k,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})]})}),!d&&e.jsx(Y,{className:j.textfield,name:r,control:s,label:e.jsx(k,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:m,maxLength:i||4e3,readOnly:n})]})};K.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakUtdypendeTekstPanel",props:{type:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fritekstPakrevet:{required:!1,tsType:{name:"boolean"},description:""},maximumLength:{required:!1,tsType:{name:"number"},description:""}}};const ye="_gulmarkering_xswfh_1",be="_paddingTop_xswfh_6",I={gulmarkering:ye,paddingTop:be},P=({intl:r,vedtaksbrevAvsnitt:n,readOnly:t,perioderSomIkkeHarUtfyltObligatoriskVerdi:i,fritekstOppsummeringPakrevdMenIkkeUtfylt:u=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:o})=>e.jsxs(R,{gap:"space-16",children:[e.jsx(N,{size:"small",level:"2",children:e.jsx(k,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),n.map(s=>{const g=s.underavsnittsliste,d=`${s.fom}_${s.tom}`,v=i.some(l=>l===d),m=s.avsnittstype===y.OPPSUMMERING&&u;return e.jsx(S.Fragment,{children:e.jsxs(q,{size:"small","aria-label":d,defaultOpen:v||m,className:v||m?I.gulmarkering:"",children:[e.jsx(q.Header,{children:e.jsx(q.Title,{size:"small",children:s.overskrift?s.overskrift:r.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),e.jsx(q.Content,{children:e.jsx(R,{gap:"space-8",children:g.map(l=>e.jsxs(S.Fragment,{children:[l.overskrift&&e.jsx(B,{className:I.paddingTop,children:l.overskrift}),l.brødtekst&&e.jsx(L,{children:l.brødtekst}),l.fritekstTillatt&&e.jsx(K,{type:l.underavsnittstype?`${d}.${l.underavsnittstype}`:s.avsnittstype,readOnly:t,fritekstPakrevet:l.fritekstPåkrevet,maximumLength:o?1e4:void 0})]},(l.underavsnittstype??"")+l.overskrift+l.brødtekst))})})]})},s.avsnittstype+s.fom)})]});P.buildInitialValues=r=>r.filter(n=>n.underavsnittsliste.some(t=>t.fritekst)).reduce((n,t)=>{const u=t.underavsnittsliste.filter(s=>s.fritekst).reduce((s,g)=>({...s,[g.underavsnittstype?g.underavsnittstype:t.avsnittstype]:Q(g.fritekst)}),{}),o=t.fom?{[`${t.fom}_${t.tom}`]:u}:u;return{...n,...o}},{});P.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"vedtaksbrevAvsnitt",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"}}],returns:{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"}}}],displayName:"TilbakekrevingEditerVedtaksbrevPanel",props:{intl:{required:!0,tsType:{name:"IntlShape"},description:""},vedtaksbrevAvsnitt:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},perioderSomIkkeHarUtfyltObligatoriskVerdi:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},fritekstOppsummeringPakrevdMenIkkeUtfylt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""}}};var U=(r=>(r.FORESLA_VEDTAK="5004",r))(U||{});const M=r=>{const n=re(r,y.OPPSUMMERING);return{oppsummeringstekst:r[y.OPPSUMMERING],perioderMedTekst:Object.keys(n).map(t=>({fom:t.split("_")[0],tom:t.split("_")[1],faktaAvsnitt:n[t][p.FAKTA],foreldelseAvsnitt:n[t][p.FORELDELSE],vilkaarAvsnitt:n[t][p.VILKÅR],saerligeGrunnerAvsnitt:n[t][p.SÆRLIGEGRUNNER],saerligeGrunnerAnnetAvsnitt:n[t][p.SÆRLIGEGRUNNER_ANNET]}))}},Te=(r,n)=>r.some(t=>t.avsnittstype===y.OPPSUMMERING&&t.underavsnittsliste.some(i=>i.fritekstPåkrevet)&&!n[y.OPPSUMMERING]),ce=r=>({kode:U.FORESLA_VEDTAK,...M(r)}),Ae=(r,n)=>r.reduce((t,i)=>{const u=`${i.fom}_${i.tom}`,o=n[u];return i.underavsnittsliste.some(d=>d.fritekstPåkrevet&&d.underavsnittstype===p.FAKTA)&&(!o||!o[p.FAKTA])||i.underavsnittsliste.some(d=>d.fritekstPåkrevet&&d.underavsnittstype===p.SÆRLIGEGRUNNER_ANNET)&&(!o||!o[p.SÆRLIGEGRUNNER_ANNET])?t.concat(u):t},[]),V=(r,n,t)=>i=>{r({uuid:n,...M(t)}),i.preventDefault()},F=({submitCallback:r,readOnly:n,fetchPreviewVedtaksbrev:t,avsnittsliste:i,behandlingUuid:u,erRevurderingTilbakekrevingKlage:o,erRevurderingTilbakekrevingFeilBeløpBortfalt:s,formData:g,setFormData:d})=>{const v=i,m=g||P.buildInitialValues(v),l=w(),b=X({defaultValues:m}),T=b.watch(),h=Te(v,T),c=Ae(v,T),H=h||c.length>0;return e.jsx(Z,{formMethods:b,onSubmit:A=>r(ce(A)),setDataOnUnmount:d,children:e.jsxs(R,{gap:"space-16",children:[e.jsx(P,{intl:l,vedtaksbrevAvsnitt:v,readOnly:n,perioderSomIkkeHarUtfyltObligatoriskVerdi:c,fritekstOppsummeringPakrevdMenIkkeUtfylt:h,erRevurderingTilbakekrevingFeilBeløpBortfalt:s}),e.jsxs(G,{gap:"space-16",align:"center",children:[e.jsx(ee,{text:l.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:n,isSubmittable:c.length===0&&!h,isSubmitting:b.formState.isSubmitting,hasErrors:H}),c.length===0&&e.jsx(oe,{href:"",onClick:V(t,u,T),onKeyDown:A=>A.key==="Enter"?V(t,u,T)(A):null,children:e.jsx(k,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})]}),o&&e.jsx(te,{inline:!0,variant:"warning",contentMaxWidth:!1,children:e.jsx(k,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})})]})})};F.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakForm",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
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
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},name:"data"}],return:{name:"void"}}},description:""}}};const D=({perioder:r,kodeverkSamlingFpTilbake:n})=>e.jsxs(a,{children:[e.jsx(a.Header,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{scope:"col",children:e.jsx(k,{id:"TilbakekrevingVedtakPeriodeTabell.Periode"})}),e.jsx(a.HeaderCell,{scope:"col",align:"right",children:e.jsx(k,{id:"TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop"})}),e.jsx(a.HeaderCell,{scope:"col",children:e.jsx(k,{id:"TilbakekrevingVedtakPeriodeTabell.Vurdering"})}),e.jsx(a.HeaderCell,{scope:"col",align:"right",children:e.jsx(k,{id:"TilbakekrevingVedtakPeriodeTabell.AndelAvBelop"})}),e.jsx(a.HeaderCell,{scope:"col",align:"right",children:e.jsx(k,{id:"TilbakekrevingVedtakPeriodeTabell.Renter"})}),e.jsx(a.HeaderCell,{scope:"col",align:"right",children:e.jsx(k,{id:"TilbakekrevingVedtakPeriodeTabell.ForSkatt"})}),e.jsx(a.HeaderCell,{scope:"col",align:"right",children:e.jsx(k,{id:"TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"})})]})}),e.jsxs(a.Body,{children:[r.map(t=>e.jsxs(a.Row,{children:[e.jsx(a.DataCell,{children:e.jsx(ne,{dateStringFom:t.periode.fom,dateStringTom:t.periode.tom})}),e.jsx(a.DataCell,{align:"right",children:e.jsx(f,{beløp:t.feilutbetaltBeløp})}),e.jsx(a.DataCell,{children:n.Aktsomhet.find(i=>i.kode===t.vurdering)?.navn}),e.jsx(a.DataCell,{align:"right",children:t.andelAvBeløp!==void 0&&t.andelAvBeløp!==null?`${t.andelAvBeløp}%`:""}),e.jsx(a.DataCell,{align:"right",children:t.renterProsent?`${t.renterProsent}%`:""}),e.jsx(a.DataCell,{align:"right",children:e.jsx(f,{beløp:t.tilbakekrevingBeløp})}),e.jsx(a.DataCell,{align:"right",children:e.jsx(f,{beløp:t.tilbakekrevingBeløpEtterSkatt})})]},t.periode.fom)),e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:e.jsx(k,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})}),e.jsx(a.HeaderCell,{align:"right",children:e.jsx(f,{beløp:r.reduce((t,i)=>t+i.feilutbetaltBeløp,0)})}),e.jsx(a.DataCell,{}),e.jsx(a.DataCell,{}),e.jsx(a.DataCell,{}),e.jsx(a.HeaderCell,{align:"right",children:e.jsx(f,{beløp:r.reduce((t,i)=>t+i.tilbakekrevingBeløp,0)})}),e.jsx(a.HeaderCell,{align:"right",children:e.jsx(f,{beløp:r.reduce((t,i)=>t+i.tilbakekrevingBeløpEtterSkatt,0)})})]},"sum")]})]});D.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakPeriodeTabell",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const $=({submitCallback:r,readOnly:n,resultat:t,perioder:i,kodeverkSamlingFpTilbake:u,behandlingUuid:o,avsnittsliste:s,fetchPreviewVedtaksbrev:g,erRevurderingTilbakekrevingKlage:d,erRevurderingTilbakekrevingFeilBeløpBortfalt:v,formData:m,setFormData:l})=>e.jsxs(R,{gap:"space-24",maxWidth:"1200px",children:[e.jsx(N,{size:"small",level:"2",children:e.jsx(k,{id:"TilbakekrevingVedtak.Vedtak"})}),e.jsxs("div",{children:[e.jsx(B,{children:e.jsx(k,{id:"TilbakekrevingVedtak.Resultat"})}),e.jsx(L,{children:u.VedtakResultatType.find(b=>b.kode===t)?.navn})]}),e.jsx(D,{perioder:i,kodeverkSamlingFpTilbake:u}),e.jsx(F,{submitCallback:r,readOnly:n,behandlingUuid:o,avsnittsliste:s,fetchPreviewVedtaksbrev:g,erRevurderingTilbakekrevingKlage:d,erRevurderingTilbakekrevingFeilBeløpBortfalt:v,formData:m,setFormData:l})]});$.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtak",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
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
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},name:"data"}],return:{name:"void"}}},description:""}}};const qe={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},Ee=ae(qe),C=({behandlingUuid:r,beregningsresultat:n,isReadOnly:t,submitCallback:i,kodeverkSamlingFpTilbake:u,formData:o,setFormData:s,vedtaksbrev:g,fetchPreviewVedtaksbrev:d,erRevurderingTilbakekrevingKlage:v,erRevurderingTilbakekrevingFeilBeløpBortfalt:m})=>e.jsx(ie,{value:Ee,children:e.jsx($,{behandlingUuid:r,perioder:n.beregningResultatPerioder,resultat:n.vedtakResultatType,avsnittsliste:g.avsnittsliste,submitCallback:i,readOnly:t,kodeverkSamlingFpTilbake:u,fetchPreviewVedtaksbrev:d,erRevurderingTilbakekrevingKlage:v,erRevurderingTilbakekrevingFeilBeløpBortfalt:m,formData:o,setFormData:s})});C.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessIndex",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregningsresultat:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}}]},name:"param"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!0,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:Re}=__STORYBOOK_MODULE_ACTIONS__,Pe={avsnittsliste:[{overskrift:"Du må betale tilbake foreldrepenger",underavsnittsliste:[{brødtekst:"Vi varslet deg 31. oktober 2019 om at du har fått 49863 kroner for mye. Du må betale tilbake 22950 kroner, som er deler av det feilutbetalte beløpet.",fritekstTillatt:!0,fritekstPåkrevet:!1}],avsnittstype:"OPPSUMMERING"},{overskrift:"Gjelder perioden fra og med 16. mars 2016 til og med 26. mai 2016",underavsnittsliste:[{brødtekst:"Du er ikke medlem av folketrygden. Fordi du ikke har jobbet eller hatt familie som forsørget deg i Norge, har du ikke rett til opphold etter EØS avtalen. Derfor har du ikke rett til foreldrepenger.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"FAKTA"},{brødtekst:"Derfor har du fått 51000 kroner for mye utbetalt i denne perioden.",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"FAKTA"},{overskrift:"Hvordan har vi kommet fram til at du må betale tilbake?",brødtekst:"Du har fått vite om du har rett til foreldrepenger og hvor mye du har rett til. Selv om du har meldt fra til oss, kan vi kreve tilbake det du har fått for mye dersom du må ha forstått at beløpet var feil.",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{brødtekst:"Ut fra informasjonen du har fått, må du etter vår vurdering ha forstått at du fikk for mye utbetalt. Derfor kan vi kreve tilbake.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{overskrift:"Er det særlige grunner til å redusere beløpet?",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER"},{brødtekst:"Vi har lagt vekt på at du må ha forstått at du fikk penger du ikke har rett til. Vi vurderer likevel at uaktsomheten din har vært så liten at vi har redusert beløpet du må betale tilbake. Det er i vurderingen også lagt vekt på ",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"},{brødtekst:"Du må betale 22950 kroner.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"}],avsnittstype:"PERIODE",fom:"2016-03-16",tom:"2016-05-26"},{underavsnittsliste:[{brødtekst:"Vedtaket er gjort etter folketrygdloven § 22-15 og foreldelsesloven §§ 2 og 3.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Skatt",brødtekst:"Nav gir opplysninger til skatteetaten når det feilutbetalte beløpet er tilbakebetalt. Skatteetaten vil da vurdere om det er grunnlag for å endre tidligere skatteoppgjør.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Hvordan betale tilbake pengene du skylder",brødtekst:"Vi har overført beløpet du skylder til Nav Innkreving, som vil sende deg et krav om å betale tilbake det feilutbetalte beløpet. Har du spørsmål om dette, kan du kontakte Nav Innkreving på telefon 21 05 11 00.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til å klage",brødtekst:"Du kan klage innen 6 uker fra den datoen du mottok vedtaket. Du finner skjema og informasjon på nav.no/klage.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Du må som hovedregel begynne å betale beløpet tilbake, selv om du klager på dette vedtaket. Dette følger av forvaltningsloven § 42. Hvis du får vedtak om at du ikke trengte å betale tilbake hele eller deler av beløpet du skyldte, betaler vi pengene tilbake til deg.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til innsyn",brødtekst:"På nav.no/dittnav kan du se dokumentene i saken din.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Har du spørsmål?",brødtekst:"Du finner nyttig informasjon på nav.no/familie. Du kan også kontakte oss på telefon 55 55 33 33.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Med vennlig hilsen",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Nav familie- og pensjonsytelser",fritekstTillatt:!1,fritekstPåkrevet:!1}],avsnittstype:"TILLEGGSINFORMASJON"}]},he={beregningResultatPerioder:[{periode:{fom:"2018-10-01",tom:"2019-01-01"},feilutbetaltBeløp:1e4,vurdering:"FORSETT",andelAvBeløp:50,renterProsent:0,tilbakekrevingBeløp:5e3,tilbakekrevingBeløpEtterSkatt:4e3},{periode:{fom:"2018-01-01",tom:"2019-01-01"},feilutbetaltBeløp:1e3,vurdering:"FORSETT",andelAvBeløp:50,renterProsent:80,tilbakekrevingBeløp:500,tilbakekrevingBeløpEtterSkatt:400}],vedtakResultatType:"DELVIS_TILBAKEBETALING"},je=se,Oe={component:C,args:{submitCallback:Re("button-click"),behandlingUuid:"1",vedtaksbrev:Pe,fetchPreviewVedtaksbrev:()=>Promise.resolve(),kodeverkSamlingFpTilbake:je,isReadOnly:!1,setFormData:()=>{},beregningsresultat:he,erRevurderingTilbakekrevingKlage:!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:!0}},E={};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"{}",...E.parameters?.docs?.source}}};const _e=["Default"];export{E as Default,_e as __namedExportsOrder,Oe as default};
