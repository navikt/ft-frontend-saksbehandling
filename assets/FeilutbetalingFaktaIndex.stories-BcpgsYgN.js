import{u as L,y as V,j as e,au as q,av as G,aw as f,k as H,ae as M,V as y,ax as S,ay as Y,H as _,L as A,g as E,B as c,az as C,aA as $,aB as z,aC as J,t as W,aD as X,aE as Q,P as Z,o as ee}from"./iframe-DvV4wlhN.js";import{a as ne}from"./alleKodeverk-DFOs3jtJ.js";import{a as re}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{S as K,Y as P,P as ae,D as te,A as le}from"./index.es-DELgJj0W.js";import{t as B,a as ie,o as se,N as de}from"./style-DyUWtcoA.js";import{T as v}from"./Table-BTBvFAm3.js";import{M as d}from"./message-CKkzLSHc.js";import"./preload-helper-PPVm8Dsz.js";var j=(r=>(r.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",r))(j||{});const N="perioder",ue=(r,u)=>{const t=r.find(a=>a.hendelseType===u);return t?.hendelseUndertyper&&t.hendelseUndertyper.length>0?t.hendelseUndertyper:void 0},w=({perioder:r,årsaker:u,readOnly:t,behandlePerioderSamlet:a,kodeverkSamlingFpTilbake:g})=>{const{control:i,watch:s,setValue:k,getValues:b}=L(),{fields:h}=V({control:i,name:N}),T=(n,m,o)=>{a&&h.forEach((I,l)=>{m!==l&&(o?b(`${N}.${l}.årsak`)===o&&k(`${N}.${l}.${o}.underÅrsak`,n):k(`${N}.${l}.årsak`,n))})};return e.jsxs(v,{children:[e.jsx(v.Header,{children:e.jsxs(v.Row,{children:[e.jsx(v.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Period"})}),e.jsx(v.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Hendelse"})}),e.jsx(v.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Beløp"})})]})}),e.jsx(v.Body,{children:h.map((n,m)=>{const o=s(`${N}.${m}.årsak`),I=ue(u,o);return e.jsxs(v.Row,{children:[e.jsx(v.DataCell,{children:e.jsx(q,{dateStringFom:n.fom,dateStringTom:n.tom})}),e.jsxs(v.DataCell,{children:[e.jsx(G,{name:`${N}.${m}.årsak`,control:i,selectValues:u.map(l=>e.jsx("option",{value:l.hendelseType,children:g.HendelseType.find(p=>p.kode===l.hendelseType)?.navn},l.hendelseType)),validate:[B],disabled:t,onChange:l=>T(l.target.value,m),label:""}),I&&e.jsx(G,{name:`${N}.${m}.${o}.underÅrsak`,control:i,selectValues:I.map(l=>e.jsx("option",{value:l,children:g.HendelseUnderType.find(p=>p.kode===l)?.navn},l)),validate:[B],disabled:t,onChange:l=>T(l.target.value,m,o),label:""})]}),e.jsx(v.DataCell,{align:"right",children:r?e.jsx(f,{rød:!0,beløp:r[m].belop}):null})]},n.id)})})]})};w.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingPerioderFieldArray",props:{perioder:{required:!0,tsType:{name:"signature['perioder']",raw:"FeilutbetalingFakta['behandlingFakta']['perioder']"},description:""},årsaker:{required:!0,tsType:{name:"Array",raw:"FeilutbetalingÅrsak['hendelseTyper']"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlePerioderSamlet:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  HendelseType: HendelseType;
  HendelseUnderType: HendelseUnderType;
  VidereBehandling: TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"HendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"HendelseUnderType",value:{name:"HendelseUnderType",required:!0}},{key:"VidereBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const oe="_textarea_1pt2d_1",ge={textarea:oe},pe=ie(3),D=4e3,ke=se(D),U=r=>r.behandlingFakta.perioder?[...r.behandlingFakta.perioder].sort(Q):[],me=r=>{const{behandlingFakta:{begrunnelse:u}}=r;return{begrunnelse:X(u),perioder:U(r).map(t=>{const{fom:a,tom:g,feilutbetalingÅrsakDto:i}=t,s={fom:a,tom:g};if(!i)return s;const{hendelseType:k,hendelseUndertype:b}=i;return{...s,årsak:k,[k]:{underÅrsak:b||null}}})}},ye=(r,u)=>{const t=r.perioder.map(a=>{const g=u.find(s=>s.hendelseType===a.årsak),i=g?.hendelseUndertyper?g.hendelseUndertyper.find(s=>s===a[a.årsak]?.underÅrsak):void 0;return{fom:a.fom,tom:a.tom,årsak:{hendelseType:g?.hendelseType,hendelseUndertype:i}}});return{kode:j.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:r.begrunnelse,feilutbetalingFakta:t}},ve=(r,u)=>{const{hendelseTyper:t}=r;return t.sort((a,g)=>{const i=u.HendelseType.find(n=>n.kode===a.hendelseType)?.navn||"",s=u.HendelseType.find(n=>n.kode===g.hendelseType)?.navn||"",k=i.startsWith("§"),b=s.startsWith("§"),h=k?i.replace(/\D/g,""):i,T=b?s.replace(/\D/g,""):s;return k&&b?h-T:h.localeCompare(T)})},O=({hasOpenAksjonspunkter:r,feilutbetalingAarsak:u,feilutbetalingFakta:t,readOnly:a,alleMerknaderFraBeslutter:g,kodeverkSamlingFpTilbake:i,kodeverkSamlingFpsak:s,formData:k,setFormData:b,submitCallback:h})=>{const T=H(),n=t.behandlingFakta,m=me(t),o=M({defaultValues:k||m}),I=o.watch("behandlePerioderSamlet")||!1,l=ve(u,i);return e.jsxs(y,{gap:"space-16",children:[r&&e.jsx(S,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"})}),e.jsx(Y,{formMethods:o,onSubmit:p=>h(ye(p,l)),setDataOnUnmount:b,children:e.jsxs(y,{gap:"space-16",children:[e.jsxs(_,{gap:"space-40",wrap:!0,children:[e.jsxs(y,{gap:"space-16",children:[e.jsx(A,{size:"small",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),e.jsxs(_,{justify:"space-between",children:[e.jsxs(y,{gap:"space-4",children:[e.jsx(E,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),e.jsx(c,{size:"small",children:e.jsx(q,{dateStringFom:n.totalPeriodeFom,dateStringTom:n.totalPeriodeTom})})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(E,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),e.jsx(c,{size:"small",children:e.jsx(f,{rød:!0,beløp:n.aktuellFeilUtbetaltBeløp})})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(E,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),e.jsx(c,{size:"small",children:n.tidligereVarseltBeløp?e.jsx(f,{beløp:n.tidligereVarseltBeløp}):e.jsx(d,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),e.jsx(C,{name:"behandlePerioderSamlet",control:o.control,label:T.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:a}),e.jsx($,{merknaderFraBeslutter:g[j.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:e.jsx(w,{perioder:U(t),behandlePerioderSamlet:I,årsaker:l,readOnly:a,kodeverkSamlingFpTilbake:i})})]}),e.jsxs(y,{gap:"space-16",children:[e.jsx(A,{size:"small",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Revurdering"})}),e.jsxs(_,{gap:"space-16",children:[e.jsxs(y,{gap:"space-4",children:[e.jsx(E,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Årsaker"})}),n.behandlingÅrsaker&&e.jsx(c,{size:"small",children:n.behandlingÅrsaker.map(p=>s.BehandlingÅrsakType.find(R=>R.kode===p.behandlingArsakType)?.navn).join(", ")})]}),n.datoForRevurderingsvedtak&&e.jsxs(y,{gap:"space-4",children:[e.jsx(E,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),e.jsx(c,{size:"small",children:e.jsx(z,{dateString:n.datoForRevurderingsvedtak})})]})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(E,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Resultat"})}),n.behandlingsresultat&&e.jsx(c,{size:"small",children:s.BehandlingResultatType.find(p=>p.kode===n.behandlingsresultat?.type)?.navn})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(E,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),n.behandlingsresultat&&e.jsx(c,{size:"small",children:n.behandlingsresultat.konsekvenserForYtelsen.map(p=>s.KonsekvensForYtelsen.find(R=>R.kode===p)?.navn).join(", ")})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(E,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),n.tilbakekrevingValg&&e.jsx(c,{size:"small",children:i.VidereBehandling.find(p=>p.kode===n.tilbakekrevingValg?.videreBehandling)?.navn})]})]})]}),e.jsx("div",{className:ge.textarea,children:e.jsx(J,{name:"begrunnelse",control:o.control,label:T.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[B,pe,ke,de],maxLength:D,readOnly:a})}),e.jsx("div",{children:e.jsx(W,{variant:"primary",size:"small",disabled:a||!o.formState.isDirty||o.formState.isSubmitting,loading:o.formState.isSubmitting,children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Confirm"})})})]})})]})};O.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingInfoPanel",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
      behandlingArsakType: BehandlingArsakType;
    }[];
    behandlingsresultat?: {
      type: BehandlingResultatType;
      konsekvenserForYtelsen: KonsekvensForYtelsen[];
    };
    tilbakekrevingValg?: {
      videreBehandling: TilbakekrevingVidereBehandling;
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
    behandlingArsakType: BehandlingArsakType;
  }[];
  behandlingsresultat?: {
    type: BehandlingResultatType;
    konsekvenserForYtelsen: KonsekvensForYtelsen[];
  };
  tilbakekrevingValg?: {
    videreBehandling: TilbakekrevingVidereBehandling;
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
  behandlingArsakType: BehandlingArsakType;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}}]}}],raw:`{
  behandlingArsakType: BehandlingArsakType;
}[]`,required:!1}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  type: BehandlingResultatType;
  konsekvenserForYtelsen: KonsekvensForYtelsen[];
}`,signature:{properties:[{key:"type",value:{name:"BehandlingResultatType",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| 'ENDRING_I_BEREGNING_OG_UTTAK'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'ENDRING_I_BEREGNING_OG_UTTAK'"},{name:"literal",value:"'-'"}]}],raw:"KonsekvensForYtelsen[]",required:!0}}]},required:!1}},{key:"tilbakekrevingValg",value:{name:"signature",type:"object",raw:`{
  videreBehandling: TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"videreBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!1}},{key:"datoForRevurderingsvedtak",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]},required:!0}}]}},description:""},feilutbetalingAarsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  hendelseTyper: {
    hendelseType: HendelseType;
    hendelseUndertyper?: HendelseUnderType[];
  }[];
  ytelseType: string;
}`,signature:{properties:[{key:"hendelseTyper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: HendelseType;
  hendelseUndertyper?: HendelseUnderType[];
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"hendelseUndertyper",value:{name:"Array",elements:[{name:"HendelseUnderType"}],raw:"HendelseUnderType[]",required:!1}}]}}],raw:`{
  hendelseType: HendelseType;
  hendelseUndertyper?: HendelseUnderType[];
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},hasOpenAksjonspunkter:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  HendelseType: HendelseType;
  HendelseUnderType: HendelseUnderType;
  VidereBehandling: TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"HendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"HendelseUnderType",value:{name:"HendelseUnderType",required:!0}},{key:"VidereBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},kodeverkSamlingFpsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  BehandlingÅrsakType: BehandlingArsakType;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  BehandlingResultatType: BehandlingResultatType;
}`,signature:{properties:[{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| 'ENDRING_I_BEREGNING_OG_UTTAK'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'ENDRING_I_BEREGNING_OG_UTTAK'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},formData:{required:!1,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlePerioderSamlet",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]},name:"data"}],return:{name:"void"}}},description:""}}};const be={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},Te=ee(be),x=({feilutbetalingFakta:r,feilutbetalingAarsak:u,fagsakYtelseTypeKode:t,isAksjonspunktOpen:a,isReadOnly:g,kodeverkSamlingFpsak:i,kodeverkSamlingFpTilbake:s,alleMerknaderFraBeslutter:k,submitCallback:b,formData:h,setFormData:T})=>{const n=u.find(m=>m.ytelseType===t);if(!n)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${t}`);return e.jsx(Z,{value:Te,children:e.jsx(O,{feilutbetalingFakta:r,feilutbetalingAarsak:n,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:s,kodeverkSamlingFpsak:i,submitCallback:b,readOnly:g,hasOpenAksjonspunkter:a,formData:h,setFormData:T})})};x.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingFaktaIndex",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
      behandlingArsakType: BehandlingArsakType;
    }[];
    behandlingsresultat?: {
      type: BehandlingResultatType;
      konsekvenserForYtelsen: KonsekvensForYtelsen[];
    };
    tilbakekrevingValg?: {
      videreBehandling: TilbakekrevingVidereBehandling;
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
    behandlingArsakType: BehandlingArsakType;
  }[];
  behandlingsresultat?: {
    type: BehandlingResultatType;
    konsekvenserForYtelsen: KonsekvensForYtelsen[];
  };
  tilbakekrevingValg?: {
    videreBehandling: TilbakekrevingVidereBehandling;
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
  behandlingArsakType: BehandlingArsakType;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"BehandlingArsakType",required:!0}}]}}],raw:`{
  behandlingArsakType: BehandlingArsakType;
}[]`,required:!1}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  type: BehandlingResultatType;
  konsekvenserForYtelsen: KonsekvensForYtelsen[];
}`,signature:{properties:[{key:"type",value:{name:"BehandlingResultatType",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| 'ENDRING_I_BEREGNING_OG_UTTAK'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'ENDRING_I_BEREGNING_OG_UTTAK'"},{name:"literal",value:"'-'"}]}],raw:"KonsekvensForYtelsen[]",required:!0}}]},required:!1}},{key:"tilbakekrevingValg",value:{name:"signature",type:"object",raw:`{
  videreBehandling: TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"videreBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!1}},{key:"datoForRevurderingsvedtak",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]},required:!0}}]}},description:""},feilutbetalingAarsak:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  hendelseTyper: {
    hendelseType: HendelseType;
    hendelseUndertyper?: HendelseUnderType[];
  }[];
  ytelseType: string;
}`,signature:{properties:[{key:"hendelseTyper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: HendelseType;
  hendelseUndertyper?: HendelseUnderType[];
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"hendelseUndertyper",value:{name:"Array",elements:[{name:"HendelseUnderType"}],raw:"HendelseUnderType[]",required:!1}}]}}],raw:`{
  hendelseType: HendelseType;
  hendelseUndertyper?: HendelseUnderType[];
}[]`,required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}}],raw:"FeilutbetalingÅrsak[]"},description:""},fagsakYtelseTypeKode:{required:!0,tsType:{name:"string"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  HendelseType: HendelseType;
  HendelseUnderType: HendelseUnderType;
  VidereBehandling: TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"HendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"HendelseUnderType",value:{name:"HendelseUnderType",required:!0}},{key:"VidereBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},kodeverkSamlingFpsak:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavn<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  BehandlingÅrsakType: BehandlingArsakType;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  BehandlingResultatType: BehandlingResultatType;
}`,signature:{properties:[{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| 'ENDRING_I_BEREGNING_OG_UTTAK'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'ENDRING_I_BEREGNING_OG_UTTAK'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const{action:he}=__STORYBOOK_MODULE_ACTIONS__,Ee={behandlingFakta:{perioder:[{fom:"2018-01-01",tom:"2018-01-31",belop:1e3},{fom:"2018-02-01",tom:"2018-02-28",belop:5e3},{fom:"2018-03-01",tom:"2018-03-15",belop:100}],totalPeriodeFom:"2019-01-01",totalPeriodeTom:"2019-01-02",aktuellFeilUtbetaltBeløp:1e4,tidligereVarseltBeløp:5e3,behandlingÅrsaker:[{behandlingArsakType:le.FEIL_I_LOVANDVENDELSE}],behandlingsresultat:{type:te.INNVILGET,konsekvenserForYtelsen:["FORELDREPENGER_OPPHØRER","ENDRING_I_BEREGNING"]},tilbakekrevingValg:{videreBehandling:ae.TILBAKEKR_INNTREKK},datoForRevurderingsvedtak:"2019-01-01"}},ce=[{ytelseType:K.FORELDREPENGER,hendelseTyper:[{hendelseType:"MEDLEMSKAP",hendelseUndertyper:[]},{hendelseType:"OKONOMI_FEIL",hendelseUndertyper:[P.OKONOMI_FEIL_TREKK]},{hendelseType:"BEREGNING_TYPE",hendelseUndertyper:[P.IKKE_BOSATT]}]}],Ne=re,Ie=ne,Pe={component:x,args:{submitCallback:he("submit"),isReadOnly:!1,setFormData:()=>{},feilutbetalingFakta:Ee,feilutbetalingAarsak:ce,kodeverkSamlingFpsak:Ie,kodeverkSamlingFpTilbake:Ne,fagsakYtelseTypeKode:K.FORELDREPENGER,alleMerknaderFraBeslutter:{},isAksjonspunktOpen:!0}},F={};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:"{}",...F.parameters?.docs?.source}}};const qe=["Default"];export{F as Default,qe as __namedExportsOrder,Pe as default};
