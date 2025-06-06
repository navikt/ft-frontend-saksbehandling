import{g as O,l as Q,r as W,j as e,D as I,av as X,V as T,N as _,e as ee,L as B,B as b,aw as te,a7 as re,ar as ne,H as E,aR as ie,z as ae,aT as se,an as le,a9 as c,P as ue,k as de}from"./iframe-DWs0UOT4.js";import{a as ke}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{e as oe,r as ge,y as U,a as M,m as me,Z as ve}from"./style-Ce8LrJC4.js";import{c as pe}from"./index-BIafK1G8.js";import{S as be}from"./PlusCircle-kIAoziyZ.js";import{M as m}from"./message-TYX53gpY.js";import{E as h}from"./ExpansionCard-DuuaqDgD.js";import{T as s}from"./Table-CFTCGXca.js";var x=(n=>(n.FORSETT="FORSETT",n.GROVT_UAKTSOM="GROVT_UAKTSOM",n.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",n))(x||{});const v={OPPSUMMERING:"OPPSUMMERING",FAKTA:"FAKTA",FORELDELSE:"FORELDELSE",VILKAR:"VILKÅR",SARLIGEGRUNNER:"SÆRLIGEGRUNNER",SARLIGEGRUNNER_ANNET:"SÆRLIGEGRUNNER_ANNET"};var K=(n=>(n.FORESLA_VEDTAK="5004",n))(K||{});const ye="_addCircleIcon_84ecs_1",fe="_imageText_84ecs_7",ce="_addPeriode_84ecs_12",w={addCircleIcon:ye,imageText:fe,addPeriode:ce},L=ge(3),Te=M(4e3),qe=[L,U],Ae=[oe,L,U],C=({type:n,readOnly:i,fritekstPakrevet:r,maximumLength:t})=>{const a=O(),{watch:u}=Q(),l=u(n)===void 0,[o,k]=W.useState(l&&!r),g=r?Ae:qe;return g.push(t?M(t):Te),e.jsxs(e.Fragment,{children:[o&&!i&&e.jsx(e.Fragment,{children:e.jsxs("div",{onClick:p=>{p.preventDefault(),k(!1)},onKeyDown:p=>{p.preventDefault(),k(!1)},className:w.addPeriode,role:"button",tabIndex:0,children:[e.jsx(be,{className:w.addCircleIcon,title:a.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})}),e.jsx(I,{size:"small",className:w.imageText,children:e.jsx(m,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})]})}),!o&&e.jsx(X,{name:n,label:a.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:g,maxLength:t||4e3,readOnly:i})]})};C.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakUtdypendeTekstPanel",props:{type:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fritekstPakrevet:{required:!1,tsType:{name:"boolean"},description:""},maximumLength:{required:!1,tsType:{name:"number"},description:""}}};const he="_container_aetpe_1",je="_gulmarkering_aetpe_4",S={container:he,gulmarkering:je},R=({intl:n,vedtaksbrevAvsnitt:i,readOnly:r,perioderSomIkkeHarUtfyltObligatoriskVerdi:t,fritekstOppsummeringPakrevdMenIkkeUtfylt:a=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:u})=>e.jsxs(T,{gap:"2",className:S.container,children:[e.jsx(_,{size:"small",children:e.jsx(m,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),i.map(l=>{const o=l.underavsnittsliste,k=`${l.fom}_${l.tom}`,g=t.some(d=>d===k),p=l.avsnittstype===v.OPPSUMMERING&&a;return e.jsx(ee.Fragment,{children:e.jsxs(h,{"aria-label":"periode",defaultOpen:g||p,className:g||p?S.gulmarkering:"",children:[e.jsx(h.Header,{children:e.jsx(h.Title,{size:"small",children:l.overskrift?l.overskrift:n.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),e.jsx(h.Content,{children:e.jsx(T,{gap:"2",children:o.map(d=>e.jsxs(T,{gap:"2",children:[d.overskrift&&e.jsx(B,{size:"small",children:d.overskrift}),d.brødtekst&&e.jsx(b,{size:"small",children:d.brødtekst}),d.fritekstTillatt&&e.jsx(e.Fragment,{children:e.jsx(C,{type:d.underavsnittstype?`${k}.${d.underavsnittstype}`:l.avsnittstype,readOnly:r,fritekstPakrevet:d.fritekstPåkrevet,maximumLength:u?1e4:void 0})})]},(d.underavsnittstype||"")+d.overskrift+d.brødtekst))})})]})},l.avsnittstype+l.fom)})]});R.buildInitialValues=n=>n.filter(i=>i.underavsnittsliste.some(r=>r.fritekst)).reduce((i,r)=>{const a=r.underavsnittsliste.filter(l=>l.fritekst).reduce((l,o)=>({...l,[o.underavsnittstype?o.underavsnittstype:r.avsnittstype]:te(o.fritekst)}),{}),u=r.fom?{[`${r.fom}_${r.tom}`]:a}:a;return{...i,...u}},{});R.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"vedtaksbrevAvsnitt",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},perioderSomIkkeHarUtfyltObligatoriskVerdi:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},fritekstOppsummeringPakrevdMenIkkeUtfylt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""}}};const Re="_buttonLink_sudxz_1",Pe="_padding_sudxz_8",we="_infoTextIcon_sudxz_14",V={buttonLink:Re,padding:Pe,infoTextIcon:we},H=n=>{const i=se(n,v.OPPSUMMERING);return{oppsummeringstekst:n[v.OPPSUMMERING],perioderMedTekst:Object.keys(i).map(r=>({fom:r.split("_")[0],tom:r.split("_")[1],faktaAvsnitt:i[r][v.FAKTA],foreldelseAvsnitt:i[r][v.FORELDELSE],vilkaarAvsnitt:i[r][v.VILKAR],saerligeGrunnerAvsnitt:i[r][v.SARLIGEGRUNNER],saerligeGrunnerAnnetAvsnitt:i[r][v.SARLIGEGRUNNER_ANNET]}))}},Ve=(n,i)=>n.some(r=>r.avsnittstype===v.OPPSUMMERING&&r.underavsnittsliste.some(t=>t.fritekstPåkrevet)&&!i[v.OPPSUMMERING]),Be=n=>({kode:K.FORESLA_VEDTAK,...H(n)}),xe=(n,i)=>n.reduce((r,t)=>{const a=`${t.fom}_${t.tom}`,u=i[a];return t.underavsnittsliste.some(k=>k.fritekstPåkrevet&&k.underavsnittstype===v.FAKTA)&&(!u||!u[v.FAKTA])||t.underavsnittsliste.some(k=>k.fritekstPåkrevet&&k.underavsnittstype===v.SARLIGEGRUNNER_ANNET)&&(!u||!u[v.SARLIGEGRUNNER_ANNET])?r.concat(a):r},[]),G=(n,i,r)=>t=>{n({uuid:i,...H(r)}),t.preventDefault()},z=({submitCallback:n,readOnly:i,fetchPreviewVedtaksbrev:r,avsnittsliste:t,behandlingUuid:a,erRevurderingTilbakekrevingKlage:u,erRevurderingTilbakekrevingFeilBeløpBortfalt:l,formData:o,setFormData:k})=>{const g=t,p=o||R.buildInitialValues(g),d=O(),y=re({defaultValues:p}),f=y.watch(),P=Ve(g,f),q=xe(g,f),Z=P||q.length>0;return e.jsx(ne,{formMethods:y,onSubmit:A=>n(Be(A)),setDataOnUnmount:k,children:e.jsxs(T,{gap:"4",children:[e.jsx(R,{intl:d,vedtaksbrevAvsnitt:g,readOnly:i,perioderSomIkkeHarUtfyltObligatoriskVerdi:q,fritekstOppsummeringPakrevdMenIkkeUtfylt:P,erRevurderingTilbakekrevingFeilBeløpBortfalt:l}),e.jsxs(E,{gap:"10",children:[e.jsx(ie,{text:d.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:i,isSubmittable:q.length===0&&!P,isSubmitting:y.formState.isSubmitting,isDirty:y.formState.isDirty,hasErrors:Z}),q.length===0&&e.jsx("div",{className:V.padding,children:e.jsx("a",{href:"",onClick:G(r,a,f),onKeyDown:A=>A.key==="Enter"?G(r,a,f)(A):null,className:pe(V.buttonLink,"lenke lenke--frittstaende"),children:e.jsx(m,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})})]}),u&&e.jsxs(E,{children:[e.jsx(ae,{className:V.infoTextIcon}),e.jsx(m,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})]})]})})};z.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakForm",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
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
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},name:"data"}],return:{name:"void"}}},description:""}}};const Ee="_table_gko8z_1",Se={table:Ee},Y=({perioder:n,kodeverkSamlingFpTilbake:i})=>{const r=n.map(t=>{var a;return e.jsxs(s.Row,{children:[e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:e.jsx(le,{dateStringFom:t.periode.fom,dateStringTom:t.periode.tom})})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:c(t.feilutbetaltBeløp)})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:(a=i.Aktsomhet.find(u=>u.kode===t.vurdering))==null?void 0:a.navn})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:t.andelAvBeløp!==void 0&&t.andelAvBeløp!==null?`${t.andelAvBeløp}%`:""})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:t.renterProsent?`${t.renterProsent}%`:""})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:c(t.tilbakekrevingBeløp)})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:c(t.tilbakekrevingBeløpEtterSkatt)})})]},t.periode.fom)}).concat(e.jsxs(s.Row,{children:[e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:c(n.reduce((t,a)=>t+a.feilutbetaltBeløp,0))})}),e.jsx(s.DataCell,{}),e.jsx(s.DataCell,{}),e.jsx(s.DataCell,{}),e.jsx(s.DataCell,{children:e.jsx(B,{size:"small",children:c(n.reduce((t,a)=>t+a.tilbakekrevingBeløp,0))})}),e.jsx(s.DataCell,{children:e.jsx(B,{size:"small",children:c(n.reduce((t,a)=>t+a.tilbakekrevingBeløpEtterSkatt,0))})})]},"sum"));return e.jsx("div",{className:Se.table,children:e.jsxs(s,{children:[e.jsx(s.Header,{children:e.jsxs(s.Row,{children:[e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.Periode"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.Vurdering"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.AndelAvBelop"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.Renter"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.ForSkatt"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"})})]})}),e.jsx(s.Body,{children:r})]})})};Y.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakPeriodeTabell",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  vurdering: Aktsomhet;
  feilutbetaltBeløp: number;
  andelAvBeløp: number;
  renterProsent: number;
  manueltSattTilbakekrevingsbeløp: number;
  tilbakekrevingBeløpUtenRenter: number;
  renteBeløp: number;
  tilbakekrevingBeløp: number;
  skattBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
  utbetaltYtelseBeløp: number;
  riktigYtelseBeløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"Aktsomhet",required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"manueltSattTilbakekrevingsbeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpUtenRenter",value:{name:"number",required:!0}},{key:"renteBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"skattBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}},{key:"utbetaltYtelseBeløp",value:{name:"number",required:!0}},{key:"riktigYtelseBeløp",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const $=({submitCallback:n,readOnly:i,resultat:r,perioder:t,kodeverkSamlingFpTilbake:a,behandlingUuid:u,avsnittsliste:l,fetchPreviewVedtaksbrev:o,erRevurderingTilbakekrevingKlage:k,erRevurderingTilbakekrevingFeilBeløpBortfalt:g,formData:p,setFormData:d})=>{var y;return e.jsxs(T,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(m,{id:"TilbakekrevingVedtak.Vedtak"})}),e.jsxs("div",{children:[e.jsx(I,{children:e.jsx(m,{id:"TilbakekrevingVedtak.Resultat"})}),e.jsx(b,{size:"small",children:(y=a.VedtakResultatType.find(f=>f.kode===r))==null?void 0:y.navn})]}),e.jsx(Y,{perioder:t,kodeverkSamlingFpTilbake:a}),e.jsx(z,{submitCallback:n,readOnly:i,behandlingUuid:u,avsnittsliste:l,fetchPreviewVedtaksbrev:o,erRevurderingTilbakekrevingKlage:k,erRevurderingTilbakekrevingFeilBeløpBortfalt:g,formData:p,setFormData:d})]})};$.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtak",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
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
  manueltSattTilbakekrevingsbeløp: number;
  tilbakekrevingBeløpUtenRenter: number;
  renteBeløp: number;
  tilbakekrevingBeløp: number;
  skattBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
  utbetaltYtelseBeløp: number;
  riktigYtelseBeløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"Aktsomhet",required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"manueltSattTilbakekrevingsbeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpUtenRenter",value:{name:"number",required:!0}},{key:"renteBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"skattBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}},{key:"utbetaltYtelseBeløp",value:{name:"number",required:!0}},{key:"riktigYtelseBeløp",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},name:"data"}],return:{name:"void"}}},description:""}}};const Ge={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},Ne=de(Ge),J=({behandling:n,beregningsresultat:i,isReadOnly:r,submitCallback:t,kodeverkSamlingFpTilbake:a,formData:u,setFormData:l,vedtaksbrev:o,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:g,erRevurderingTilbakekrevingFeilBeløpBortfalt:p})=>e.jsx(ue,{value:Ne,children:e.jsx($,{behandlingUuid:n.uuid,perioder:i.beregningResultatPerioder,resultat:i.vedtakResultatType,avsnittsliste:o.avsnittsliste,submitCallback:t,readOnly:r,kodeverkSamlingFpTilbake:a,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:g,erRevurderingTilbakekrevingFeilBeløpBortfalt:p,formData:u,setFormData:l})});J.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
  fristBehandlingPåVent?: string;
  venteArsakKode?: string;
  behandlingPaaVent: boolean;
  behandlingHenlagt: boolean;
  behandlingsresultat?: Behandlingsresultat;
  links: {
    href: string;
    rel: string;
    requestPayload?: any;
    type: string;
  }[];
  opprettet: string;
  avsluttet?: string;
  erAktivPapirsoknad: boolean;
  gjeldendeVedtak: boolean;
  sprakkode: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingKoet: boolean;
  toTrinnsBehandling: boolean;
  behandlingÅrsaker: BehandlingÅrsak[];
  ansvarligSaksbehandler?: string;
  kanHenleggeBehandling?: boolean;
  fristBehandlingPaaVent?: string;
  harVerge?: boolean;
  førsteÅrsak?: BehandlingÅrsak;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"avslagsarsak",value:{name:"string",required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"string",required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"vedtaksbrev",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato: string;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  id: number;
  type: string;
  avslagsarsak?: string;
  avslagsarsakFritekst?: string;
  rettenTil?: string;
  konsekvenserForYtelsen?: string[];
  vedtaksbrev?: string;
  overskrift?: string;
  fritekstbrev?: string;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: {
    dato: string;
  };
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"any",required:!1}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`{
  href: string;
  rel: string;
  requestPayload?: any;
  type: string;
}[]`,required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"sprakkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}],raw:"BehandlingÅrsak[]",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"kanHenleggeBehandling",value:{name:"boolean",required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}},{key:"harVerge",value:{name:"boolean",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
  manueltOpprettet: boolean;
  erAutomatiskRevurdering: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}}]},required:!1}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  message: string;
  pending: boolean;
  status: string;
  readOnly: boolean;
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}}]}},description:""},beregningsresultat:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
  manueltSattTilbakekrevingsbeløp: number;
  tilbakekrevingBeløpUtenRenter: number;
  renteBeløp: number;
  tilbakekrevingBeløp: number;
  skattBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
  utbetaltYtelseBeløp: number;
  riktigYtelseBeløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"Aktsomhet",required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"manueltSattTilbakekrevingsbeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpUtenRenter",value:{name:"number",required:!0}},{key:"renteBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"skattBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}},{key:"utbetaltYtelseBeløp",value:{name:"number",required:!0}},{key:"riktigYtelseBeløp",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]",required:!0}},{key:"vedtakResultatType",value:{name:"VedtakResultatType",required:!0}}]}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}}]},name:"param"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!0,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:Fe}=__STORYBOOK_MODULE_ACTIONS__,De={avsnittsliste:[{overskrift:"Du må betale tilbake foreldrepenger",underavsnittsliste:[{brødtekst:"Vi varslet deg 31. oktober 2019 om at du har fått 49863 kroner for mye. Du må betale tilbake 22950 kroner, som er deler av det feilutbetalte beløpet.",fritekstTillatt:!0,fritekstPåkrevet:!1}],avsnittstype:"OPPSUMMERING"},{overskrift:"Gjelder perioden fra og med 16. mars 2016 til og med 26. mai 2016",underavsnittsliste:[{brødtekst:"Du er ikke medlem av folketrygden. Fordi du ikke har jobbet eller hatt familie som forsørget deg i Norge, har du ikke rett til opphold etter EØS avtalen. Derfor har du ikke rett til foreldrepenger.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"FAKTA"},{brødtekst:"Derfor har du fått 51000 kroner for mye utbetalt i denne perioden.",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"FAKTA"},{overskrift:"Hvordan har vi kommet fram til at du må betale tilbake?",brødtekst:"Du har fått vite om du har rett til foreldrepenger og hvor mye du har rett til. Selv om du har meldt fra til oss, kan vi kreve tilbake det du har fått for mye dersom du må ha forstått at beløpet var feil.",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{brødtekst:"Ut fra informasjonen du har fått, må du etter vår vurdering ha forstått at du fikk for mye utbetalt. Derfor kan vi kreve tilbake.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{overskrift:"Er det særlige grunner til å redusere beløpet?",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER"},{brødtekst:"Vi har lagt vekt på at du må ha forstått at du fikk penger du ikke har rett til. Vi vurderer likevel at uaktsomheten din har vært så liten at vi har redusert beløpet du må betale tilbake. Det er i vurderingen også lagt vekt på ",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"},{brødtekst:"Du må betale 22950 kroner.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"}],avsnittstype:"PERIODE",fom:"2016-03-16",tom:"2016-05-26"},{underavsnittsliste:[{brødtekst:"Vedtaket er gjort etter folketrygdloven § 22-15 og foreldelsesloven §§ 2 og 3.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Skatt",brødtekst:"Nav gir opplysninger til skatteetaten når det feilutbetalte beløpet er tilbakebetalt. Skatteetaten vil da vurdere om det er grunnlag for å endre tidligere skatteoppgjør.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Hvordan betale tilbake pengene du skylder",brødtekst:"Vi har overført beløpet du skylder til Nav Innkreving, som vil sende deg et krav om å betale tilbake det feilutbetalte beløpet. Har du spørsmål om dette, kan du kontakte Nav Innkreving på telefon 21 05 11 00.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til å klage",brødtekst:"Du kan klage innen 6 uker fra den datoen du mottok vedtaket. Du finner skjema og informasjon på nav.no/klage.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Du må som hovedregel begynne å betale beløpet tilbake, selv om du klager på dette vedtaket. Dette følger av forvaltningsloven § 42. Hvis du får vedtak om at du ikke trengte å betale tilbake hele eller deler av beløpet du skyldte, betaler vi pengene tilbake til deg.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til innsyn",brødtekst:"På nav.no/dittnav kan du se dokumentene i saken din.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Har du spørsmål?",brødtekst:"Du finner nyttig informasjon på nav.no/familie. Du kan også kontakte oss på telefon 55 55 33 33.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Med vennlig hilsen",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Nav familie- og pensjonsytelser",fritekstTillatt:!1,fritekstPåkrevet:!1}],avsnittstype:"TILLEGGSINFORMASJON"}]},Oe={beregningResultatPerioder:[{periode:{fom:"2018-10-01",tom:"2019-01-01"},feilutbetaltBeløp:1e4,vurdering:x.FORSETT,andelAvBeløp:50,renterProsent:0,tilbakekrevingBeløp:5e3,tilbakekrevingBeløpEtterSkatt:4e3},{periode:{fom:"2018-01-01",tom:"2019-01-01"},feilutbetaltBeløp:1e3,vurdering:x.FORSETT,andelAvBeløp:50,renterProsent:80,tilbakekrevingBeløp:500,tilbakekrevingBeløpEtterSkatt:400}],vedtakResultatType:me.DELVIS_TILBAKEBETALING},Ie=ke,Ye={component:J,args:{submitCallback:Fe("button-click"),behandling:{uuid:"1",versjon:1,status:ve.BEHANDLING_UTREDES},vedtaksbrev:De,fetchPreviewVedtaksbrev:()=>Promise.resolve(),kodeverkSamlingFpTilbake:Ie,isReadOnly:!1,setFormData:()=>{},beregningsresultat:Oe,erRevurderingTilbakekrevingKlage:!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:!0}},j={};var N,F,D;j.parameters={...j.parameters,docs:{...(N=j.parameters)==null?void 0:N.docs,source:{originalSource:"{}",...(D=(F=j.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const $e=["Default"];export{j as Default,$e as __namedExportsOrder,Ye as default};
