import{l as G,am as z,j as e,an as L,ao as U,ap as R,g as W,a7 as X,V as k,aq as J,ar as Q,H as I,L as _,D as T,B as j,as as Z,at as ee,au as ne,av as re,A as te,aw as ae,ax as se,P as ie,k as le}from"./iframe-OxSZAl-5.js";import{a as de}from"./alleKodeverk-Cfm8hgD4.js";import{a as oe}from"./alleTilbakekrevingKodeverk-dIUSSyeF.js";import{e as B,I as q,r as ue,a as ge,y as pe,z as M,u as me,$ as N,W as ke,X as ye}from"./style-B_7UbdVQ.js";import{T as b}from"./Table-goZjhLpK.js";import{M as u}from"./message-Di_ea_bB.js";var K=(r=>(r.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",r))(K||{});const A="perioder",be=(r,g)=>{const t=r.find(a=>a.hendelseType===g);return t!=null&&t.hendelseUndertyper&&t.hendelseUndertyper.length>0?t.hendelseUndertyper:void 0},O=({perioder:r,årsaker:g,readOnly:t,behandlePerioderSamlet:a,kodeverkSamlingFpTilbake:i})=>{const{control:o,watch:l,setValue:p,getValues:v}=G(),{fields:c}=z({control:o,name:A}),h=(n,m,d)=>{a&&c.forEach((x,s)=>{m!==s&&(d?v(`${A}.${s}.årsak`)===d&&p(`${A}.${s}.${d}.underÅrsak`,n):p(`${A}.${s}.årsak`,n))})};return e.jsxs(b,{children:[e.jsx(b.Header,{children:e.jsxs(b.Row,{children:[e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Period"})}),e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Hendelse"})}),e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Beløp"})})]})}),e.jsx(b.Body,{children:c.map((n,m)=>{const d=l(`${A}.${m}.årsak`),x=be(g,d);return e.jsxs(b.Row,{children:[e.jsx(b.DataCell,{children:e.jsx(L,{dateStringFom:n.fom,dateStringTom:n.tom})}),e.jsxs(b.DataCell,{children:[e.jsx(U,{name:`${A}.${m}.årsak`,selectValues:g.map(s=>{var f;return e.jsx("option",{value:s.hendelseType,children:(f=i[q.HENDELSE_TYPE].find(P=>P.kode===s.hendelseType))==null?void 0:f.navn},s.hendelseType)}),validate:[B],disabled:t,onChange:s=>h(s.target.value,m),label:""}),x&&e.jsx(U,{name:`${A}.${m}.${d}.underÅrsak`,selectValues:x.map(s=>{var f;return e.jsx("option",{value:s,children:(f=i[q.HENDELSE_UNDERTYPE].find(P=>P.kode===s))==null?void 0:f.navn},s)}),validate:[B],disabled:t,onChange:s=>h(s.target.value,m,d),label:""})]}),e.jsx(b.DataCell,{align:"right",children:r?e.jsx(R,{rød:!0,beløp:r[m].belop}):null})]},n.id)})})]})};O.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingPerioderFieldArray",props:{perioder:{required:!0,tsType:{name:"signature['perioder']",raw:"FeilutbetalingFakta['behandlingFakta']['perioder']"},description:""},årsaker:{required:!0,tsType:{name:"Array",raw:"FeilutbetalingÅrsak['hendelseTyper']"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlePerioderSamlet:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""}}};const ve="_textarea_1pt2d_1",he={textarea:ve},ce=ue(3),Y=4e3,fe=ge(Y),H=r=>r.behandlingFakta.perioder?[...r.behandlingFakta.perioder].sort(se):[],Fe=r=>{const{behandlingFakta:{begrunnelse:g}}=r;return{begrunnelse:ae(g),perioder:H(r).map(t=>{const{fom:a,tom:i,feilutbetalingÅrsakDto:o}=t,l={fom:a,tom:i};if(!o)return l;const{hendelseType:p,hendelseUndertype:v}=o;return{...l,årsak:p,[p]:{underÅrsak:v||null}}})}},Te=(r,g)=>{const t=r.perioder.map(a=>{const i=g.find(l=>l.hendelseType===a.årsak),o=i!=null&&i.hendelseUndertyper?i.hendelseUndertyper.find(l=>{var p;return l===((p=a[a.årsak])==null?void 0:p.underÅrsak)}):void 0;return{fom:a.fom,tom:a.tom,årsak:{hendelseType:i==null?void 0:i.hendelseType,hendelseUndertype:o}}});return{kode:K.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:r.begrunnelse,feilutbetalingFakta:t}},je=(r,g)=>{const{hendelseTyper:t}=r;return t.sort((a,i)=>{var n,m;const o=((n=g[q.HENDELSE_TYPE].find(d=>d.kode===a.hendelseType))==null?void 0:n.navn)||"",l=((m=g[q.HENDELSE_TYPE].find(d=>d.kode===i.hendelseType))==null?void 0:m.navn)||"",p=o.startsWith("§"),v=l.startsWith("§"),c=p?o.replace(/\D/g,""):o,h=v?l.replace(/\D/g,""):l;return p&&v?c-h:c.localeCompare(h)})},$=({hasOpenAksjonspunkter:r,feilutbetalingAarsak:g,feilutbetalingFakta:t,readOnly:a,alleMerknaderFraBeslutter:i,kodeverkSamlingFpTilbake:o,kodeverkSamlingFpsak:l,formData:p,setFormData:v,submitCallback:c})=>{var f,P;const h=W(),n=t.behandlingFakta,m=Fe(t),d=X({defaultValues:p||m}),x=d.watch("behandlePerioderSamlet")||!1,s=je(g,o);return e.jsxs(k,{gap:"4",children:[r&&e.jsx(J,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"})}),e.jsx(Q,{formMethods:d,onSubmit:F=>c(Te(F,s)),setDataOnUnmount:v,children:e.jsxs(k,{gap:"4",children:[e.jsxs(I,{gap:"10",wrap:!0,children:[e.jsxs(k,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),e.jsxs(I,{justify:"space-between",children:[e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),e.jsx(j,{size:"small",children:e.jsx(L,{dateStringFom:n.totalPeriodeFom,dateStringTom:n.totalPeriodeTom})})]}),e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),e.jsx(j,{size:"small",children:e.jsx(R,{rød:!0,beløp:n.aktuellFeilUtbetaltBeløp})})]}),e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),e.jsx(j,{size:"small",children:n.tidligereVarseltBeløp?e.jsx(R,{beløp:n.tidligereVarseltBeløp}):e.jsx(u,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),e.jsx(Z,{name:"behandlePerioderSamlet",label:h.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:a}),e.jsx(ee,{merknaderFraBeslutter:i[K.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:e.jsx(O,{perioder:H(t),behandlePerioderSamlet:x,årsaker:s,readOnly:a,kodeverkSamlingFpTilbake:o})})]}),e.jsxs(k,{gap:"4",children:[e.jsx(_,{size:"small",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Revurdering"})}),e.jsxs(I,{gap:"4",children:[e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Årsaker"})}),n.behandlingÅrsaker&&e.jsx(j,{size:"small",children:n.behandlingÅrsaker.map(F=>{var y;return(y=l[q.BEHANDLING_AARSAK].find(E=>E.kode===F.behandlingArsakType))==null?void 0:y.navn}).join(", ")})]}),n.datoForRevurderingsvedtak&&e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),e.jsx(j,{size:"small",children:e.jsx(ne,{dateString:n.datoForRevurderingsvedtak})})]})]}),e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Resultat"})}),n.behandlingsresultat&&e.jsx(j,{size:"small",children:(f=l[q.BEHANDLING_AARSAK].find(F=>{var y;return F.kode===((y=n.behandlingsresultat)==null?void 0:y.type)}))==null?void 0:f.navn})]}),e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),n.behandlingsresultat&&e.jsx(j,{size:"small",children:n.behandlingsresultat.konsekvenserForYtelsen.map(F=>{var y;return(y=l[q.KONSEKVENS_FOR_YTELSEN].find(E=>E.kode===F))==null?void 0:y.navn}).join(", ")})]}),e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),n.tilbakekrevingValg&&e.jsx(j,{size:"small",children:(P=o[q.TILBAKEKR_VIDERE_BEH].find(F=>{var y;return F.kode===((y=n.tilbakekrevingValg)==null?void 0:y.videreBehandling)}))==null?void 0:P.navn})]})]})]}),e.jsx("div",{className:he.textarea,children:e.jsx(re,{name:"begrunnelse",label:h.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[B,ce,fe,pe],maxLength:Y,readOnly:a})}),e.jsx("div",{children:e.jsx(te,{variant:"primary",size:"small",disabled:a||!d.formState.isDirty||d.formState.isSubmitting,loading:d.formState.isSubmitting,children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Confirm"})})})]})})]})};$.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingInfoPanel",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  behandlingFakta: {
    perioder?: {
      fom: string;
      tom: string;
      belop: number;
      feilutbetalingÅrsakDto?: {
        hendelseType: string;
        hendelseUndertype?: string;
      };
    }[];
    totalPeriodeFom: string;
    totalPeriodeTom: string;
    aktuellFeilUtbetaltBeløp: number;
    tidligereVarseltBeløp?: number;
    behandlingÅrsaker?: {
      behandlingArsakType: string;
    }[];
    behandlingsresultat?: {
      type: string;
      konsekvenserForYtelsen: string[];
    };
    tilbakekrevingValg?: {
      videreBehandling: string;
    };
    datoForRevurderingsvedtak: string;
    begrunnelse?: string;
  };
}`,signature:{properties:[{key:"behandlingFakta",value:{name:"signature",type:"object",raw:`{
  perioder?: {
    fom: string;
    tom: string;
    belop: number;
    feilutbetalingÅrsakDto?: {
      hendelseType: string;
      hendelseUndertype?: string;
    };
  }[];
  totalPeriodeFom: string;
  totalPeriodeTom: string;
  aktuellFeilUtbetaltBeløp: number;
  tidligereVarseltBeløp?: number;
  behandlingÅrsaker?: {
    behandlingArsakType: string;
  }[];
  behandlingsresultat?: {
    type: string;
    konsekvenserForYtelsen: string[];
  };
  tilbakekrevingValg?: {
    videreBehandling: string;
  };
  datoForRevurderingsvedtak: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  feilutbetalingÅrsakDto?: {
    hendelseType: string;
    hendelseUndertype?: string;
  };
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"feilutbetalingÅrsakDto",value:{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:`{
  fom: string;
  tom: string;
  belop: number;
  feilutbetalingÅrsakDto?: {
    hendelseType: string;
    hendelseUndertype?: string;
  };
}[]`,required:!1}},{key:"totalPeriodeFom",value:{name:"string",required:!0}},{key:"totalPeriodeTom",value:{name:"string",required:!0}},{key:"aktuellFeilUtbetaltBeløp",value:{name:"number",required:!0}},{key:"tidligereVarseltBeløp",value:{name:"number",required:!1}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}}]}}],raw:`{
  behandlingArsakType: string;
}[]`,required:!1}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  type: string;
  konsekvenserForYtelsen: string[];
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"tilbakekrevingValg",value:{name:"signature",type:"object",raw:`{
  videreBehandling: string;
}`,signature:{properties:[{key:"videreBehandling",value:{name:"string",required:!0}}]},required:!1}},{key:"datoForRevurderingsvedtak",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]},required:!0}}]}},description:""},feilutbetalingAarsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  hendelseTyper: {
    hendelseType: string;
    hendelseUndertyper?: string[];
  }[];
  ytelseType: string;
}`,signature:{properties:[{key:"hendelseTyper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseUndertyper?: string[];
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:`{
  hendelseType: string;
  hendelseUndertyper?: string[];
}[]`,required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: AvklartFaktaFeilutbetalingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  feilutbetalingFakta: {
    fom: string;
    tom: string;
    årsak: {
      hendelseType?: string;
      hendelseUndertype?: string;
    };
  }[];
} & AksjonspunktTilBekreftelse<FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING>`,elements:[{name:"signature",type:"object",raw:`{
  feilutbetalingFakta: {
    fom: string;
    tom: string;
    årsak: {
      hendelseType?: string;
      hendelseUndertype?: string;
    };
  }[];
}`,signature:{properties:[{key:"feilutbetalingFakta",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType?: string;
    hendelseUndertype?: string;
  };
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"signature",type:"object",raw:`{
  hendelseType?: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!1}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType?: string;
    hendelseUndertype?: string;
  };
}[]`,required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},hasOpenAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},kodeverkSamlingFpsak:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},formData:{required:!1,tsType:{name:"intersection",raw:`{
  begrunnelse?: string;
  behandlePerioderSamlet?: boolean;
} & PeriodeFormValues`,elements:[{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  behandlePerioderSamlet?: boolean;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlePerioderSamlet",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  begrunnelse?: string;
  behandlePerioderSamlet?: boolean;
} & PeriodeFormValues`,elements:[{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  behandlePerioderSamlet?: boolean;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlePerioderSamlet",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]},name:"data"}],return:{name:"void"}}},description:""}}};const qe={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},Ae=le(qe),C=({feilutbetalingFakta:r,feilutbetalingAarsak:g,fagsakYtelseTypeKode:t,isAksjonspunktOpen:a,isReadOnly:i,kodeverkSamlingFpsak:o,kodeverkSamlingFpTilbake:l,alleMerknaderFraBeslutter:p,submitCallback:v,formData:c,setFormData:h})=>{const n=g.find(m=>m.ytelseType===t);if(!n)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${t}`);return e.jsx(ie,{value:Ae,children:e.jsx($,{feilutbetalingFakta:r,feilutbetalingAarsak:n,alleMerknaderFraBeslutter:p,kodeverkSamlingFpTilbake:l,kodeverkSamlingFpsak:o,submitCallback:v,readOnly:i,hasOpenAksjonspunkter:a,formData:c,setFormData:h})})};C.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingFaktaIndex",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  behandlingFakta: {
    perioder?: {
      fom: string;
      tom: string;
      belop: number;
      feilutbetalingÅrsakDto?: {
        hendelseType: string;
        hendelseUndertype?: string;
      };
    }[];
    totalPeriodeFom: string;
    totalPeriodeTom: string;
    aktuellFeilUtbetaltBeløp: number;
    tidligereVarseltBeløp?: number;
    behandlingÅrsaker?: {
      behandlingArsakType: string;
    }[];
    behandlingsresultat?: {
      type: string;
      konsekvenserForYtelsen: string[];
    };
    tilbakekrevingValg?: {
      videreBehandling: string;
    };
    datoForRevurderingsvedtak: string;
    begrunnelse?: string;
  };
}`,signature:{properties:[{key:"behandlingFakta",value:{name:"signature",type:"object",raw:`{
  perioder?: {
    fom: string;
    tom: string;
    belop: number;
    feilutbetalingÅrsakDto?: {
      hendelseType: string;
      hendelseUndertype?: string;
    };
  }[];
  totalPeriodeFom: string;
  totalPeriodeTom: string;
  aktuellFeilUtbetaltBeløp: number;
  tidligereVarseltBeløp?: number;
  behandlingÅrsaker?: {
    behandlingArsakType: string;
  }[];
  behandlingsresultat?: {
    type: string;
    konsekvenserForYtelsen: string[];
  };
  tilbakekrevingValg?: {
    videreBehandling: string;
  };
  datoForRevurderingsvedtak: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  feilutbetalingÅrsakDto?: {
    hendelseType: string;
    hendelseUndertype?: string;
  };
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"feilutbetalingÅrsakDto",value:{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:`{
  fom: string;
  tom: string;
  belop: number;
  feilutbetalingÅrsakDto?: {
    hendelseType: string;
    hendelseUndertype?: string;
  };
}[]`,required:!1}},{key:"totalPeriodeFom",value:{name:"string",required:!0}},{key:"totalPeriodeTom",value:{name:"string",required:!0}},{key:"aktuellFeilUtbetaltBeløp",value:{name:"number",required:!0}},{key:"tidligereVarseltBeløp",value:{name:"number",required:!1}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: string;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"string",required:!0}}]}}],raw:`{
  behandlingArsakType: string;
}[]`,required:!1}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  type: string;
  konsekvenserForYtelsen: string[];
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"tilbakekrevingValg",value:{name:"signature",type:"object",raw:`{
  videreBehandling: string;
}`,signature:{properties:[{key:"videreBehandling",value:{name:"string",required:!0}}]},required:!1}},{key:"datoForRevurderingsvedtak",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]},required:!0}}]}},description:""},feilutbetalingAarsak:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  hendelseTyper: {
    hendelseType: string;
    hendelseUndertyper?: string[];
  }[];
  ytelseType: string;
}`,signature:{properties:[{key:"hendelseTyper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseUndertyper?: string[];
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}],raw:`{
  hendelseType: string;
  hendelseUndertyper?: string[];
}[]`,required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}}],raw:"FeilutbetalingÅrsak[]"},description:""},fagsakYtelseTypeKode:{required:!0,tsType:{name:"string"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},kodeverkSamlingFpsak:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const{action:Pe}=__STORYBOOK_MODULE_ACTIONS__,xe={behandlingFakta:{perioder:[{fom:"2018-01-01",tom:"2018-01-31",belop:1e3},{fom:"2018-02-01",tom:"2018-02-28",belop:5e3},{fom:"2018-03-01",tom:"2018-03-15",belop:100}],totalPeriodeFom:"2019-01-01",totalPeriodeTom:"2019-01-02",aktuellFeilUtbetaltBeløp:1e4,tidligereVarseltBeløp:5e3,behandlingÅrsaker:[{behandlingArsakType:ye.FEIL_I_LOVANDVENDELSE}],behandlingsresultat:{type:ke.INNVILGET,konsekvenserForYtelsen:[N.FORELDREPENGER_OPPHØRER,N.ENDRING_I_BEREGNING]},tilbakekrevingValg:{videreBehandling:me.TILBAKEKR_INNTREKK},datoForRevurderingsvedtak:"2019-01-01"}},we=[{ytelseType:M.FORELDREPENGER,hendelseTyper:[{hendelseType:"MEDLEMSKAP",hendelseUndertyper:[]},{hendelseType:"OKONOMI_FEIL",hendelseUndertyper:["OKONOMI_FEIL_TREKK"]},{hendelseType:"BEREGNING_TYPE",hendelseUndertyper:["IKKE_BOSATT"]}]}],Ee=oe,Ie=de,De={component:C,args:{submitCallback:Pe("button-click"),isReadOnly:!1,setFormData:()=>{},feilutbetalingFakta:xe,feilutbetalingAarsak:we,kodeverkSamlingFpsak:Ie,kodeverkSamlingFpTilbake:Ee,fagsakYtelseTypeKode:M.FORELDREPENGER,alleMerknaderFraBeslutter:{},isAksjonspunktOpen:!0}},w={};var D,V,S;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(S=(V=w.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const Ve=["Default"];export{w as Default,Ve as __namedExportsOrder,De as default};
