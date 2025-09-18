import{j as e,Y as G,V as H,L,G as S}from"./iframe-DzXUO6GT.js";import{a as Y}from"./alleKodeverk-DFOs3jtJ.js";import{a as M}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{S as U,Y as I,B as q,P as C,D as $,A as z}from"./index.es-y3XBOrzW.js";import{u as W,P as X}from"./index-DfaBx6Pe.js";import{R as J,G as Q,r as Z}from"./index.es-yTIDcLWJ.js";import{u as ee,c as ne,b as re}from"./index.esm-nh5QY85X.js";import{t as j,a as ae,o as te,N as le}from"./style-D06noVnx.js";import{r as w,f as B,W as ie,n as se,G as de}from"./index.es-CkQmGgSL.js";import{T as v}from"./Table-CYBH2SUB.js";import{M as d}from"./message-37ZvHjur.js";import{V as y,H as _}from"./VStack-vldtWtPo.js";import{L as P,D as c,B as E}from"./Label-BptAkRyu.js";import{B as oe}from"./Button-af7718Cc.js";import"./preload-helper-PPVm8Dsz.js";import"./dayjs.min-BFUBMDMt.js";import"./PersonPencilFill-DyJneeHY.js";import"./useId-DZKQXQUP.js";import"./Alert-DFJmKH85.js";import"./Loader-IncALmTQ.js";import"./omit-B7stZg_p.js";import"./useId-BTmGetX7.js";import"./Provider-CLScYENo.js";import"./ExclamationmarkTriangleFill-DDAH-o0u.js";import"./XMarkOctagonFill-CoZ8IwgD.js";import"./XMark-CpZNF069.js";import"./Tooltip-B3LKtxru.js";import"./floating-ui.react-ChwVIx_A.js";import"./index-C9-rAhI6.js";import"./index-Byb5gg4O.js";import"./useControllableState-DmC_MG6f.js";import"./Box-DL9bOJYF.js";import"./BasePrimitive-DGW3gu2x.js";import"./KeyVerticalFill-DFYvwClO.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-DkSCMhYg.js";var A=(r=>(r.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",r))(A||{});const N="perioder",ue=(r,o)=>{const t=r.find(a=>a.hendelseType===o);return t?.hendelseUndertyper&&t.hendelseUndertyper.length>0?t.hendelseUndertyper:void 0},D=({perioder:r,årsaker:o,readOnly:t,behandlePerioderSamlet:a,kodeverkSamlingFpTilbake:g})=>{const{control:i,watch:s,setValue:k,getValues:b}=ee(),{fields:h}=ne({control:i,name:N}),T=(n,m,u)=>{a&&h.forEach((F,l)=>{m!==l&&(u?b(`${N}.${l}.årsak`)===u&&k(`${N}.${l}.${u}.underÅrsak`,n):k(`${N}.${l}.årsak`,n))})};return e.jsxs(v,{children:[e.jsx(v.Header,{children:e.jsxs(v.Row,{children:[e.jsx(v.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Period"})}),e.jsx(v.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Hendelse"})}),e.jsx(v.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Beløp"})})]})}),e.jsx(v.Body,{children:h.map((n,m)=>{const u=s(`${N}.${m}.årsak`),F=ue(o,u);return e.jsxs(v.Row,{children:[e.jsx(v.DataCell,{children:e.jsx(w,{dateStringFom:n.fom,dateStringTom:n.tom})}),e.jsxs(v.DataCell,{children:[e.jsx(G,{name:`${N}.${m}.årsak`,control:i,selectValues:o.map(l=>e.jsx("option",{value:l.hendelseType,children:g.HendelseType.find(p=>p.kode===l.hendelseType)?.navn},l.hendelseType)),validate:[j],disabled:t,onChange:l=>T(l.target.value,m),label:""}),F&&e.jsx(G,{name:`${N}.${m}.${u}.underÅrsak`,control:i,selectValues:F.map(l=>e.jsx("option",{value:l,children:g.HendelseUnderType.find(p=>p.kode===l)?.navn},l)),validate:[j],disabled:t,onChange:l=>T(l.target.value,m,u),label:""})]}),e.jsx(v.DataCell,{align:"right",children:r?e.jsx(B,{rød:!0,beløp:r[m].belop}):null})]},n.id)})})]})};D.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingPerioderFieldArray",props:{perioder:{required:!0,tsType:{name:"signature['perioder']",raw:"FeilutbetalingFakta['behandlingFakta']['perioder']"},description:""},årsaker:{required:!0,tsType:{name:"Array",raw:"FeilutbetalingÅrsak['hendelseTyper']"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlePerioderSamlet:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  HendelseType: HendelseType;
  HendelseUnderType: HendelseUnderType;
  VidereBehandling: TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"HendelseType",value:{name:"HendelseType",required:!0}},{key:"HendelseUnderType",value:{name:"HendelseUnderType",required:!0}},{key:"VidereBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const ge="_textarea_1pt2d_1",pe={textarea:ge},ke=ae(3),K=4e3,me=te(K),x=r=>r.behandlingFakta.perioder?[...r.behandlingFakta.perioder].sort(Q):[],ye=r=>{const{behandlingFakta:{begrunnelse:o}}=r;return{begrunnelse:J(o),perioder:x(r).map(t=>{const{fom:a,tom:g,feilutbetalingÅrsakDto:i}=t,s={fom:a,tom:g};if(!i)return s;const{hendelseType:k,hendelseUndertype:b}=i;return{...s,årsak:k,[k]:{underÅrsak:b||null}}})}},ve=(r,o)=>{const t=r.perioder.map(a=>{const g=o.find(s=>s.hendelseType===a.årsak),i=g?.hendelseUndertyper?g.hendelseUndertyper.find(s=>s===a[a.årsak]?.underÅrsak):void 0;return{fom:a.fom,tom:a.tom,årsak:{hendelseType:g?.hendelseType,hendelseUndertype:i}}});return{kode:A.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:r.begrunnelse,feilutbetalingFakta:t}},be=(r,o)=>{const{hendelseTyper:t}=r;return t.sort((a,g)=>{const i=o.HendelseType.find(n=>n.kode===a.hendelseType)?.navn||"",s=o.HendelseType.find(n=>n.kode===g.hendelseType)?.navn||"",k=i.startsWith("§"),b=s.startsWith("§"),h=k?i.replace(/\D/g,""):i,T=b?s.replace(/\D/g,""):s;return k&&b?h-T:h.localeCompare(T)})},V=({hasOpenAksjonspunkter:r,feilutbetalingAarsak:o,feilutbetalingFakta:t,readOnly:a,alleMerknaderFraBeslutter:g,kodeverkSamlingFpTilbake:i,kodeverkSamlingFpsak:s,formData:k,setFormData:b,submitCallback:h})=>{const T=W(),n=t.behandlingFakta,m=ye(t),u=re({defaultValues:k||m}),F=u.watch("behandlePerioderSamlet")||!1,l=be(o,i);return e.jsxs(y,{gap:"space-16",children:[r&&e.jsx(ie,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"})}),e.jsx(H,{formMethods:u,onSubmit:p=>h(ve(p,l)),setDataOnUnmount:b,children:e.jsxs(y,{gap:"space-16",children:[e.jsxs(_,{gap:"space-40",wrap:!0,children:[e.jsxs(y,{gap:"space-16",children:[e.jsx(P,{size:"small",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),e.jsxs(_,{justify:"space-between",children:[e.jsxs(y,{gap:"space-4",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),e.jsx(E,{size:"small",children:e.jsx(w,{dateStringFom:n.totalPeriodeFom,dateStringTom:n.totalPeriodeTom})})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),e.jsx(E,{size:"small",children:e.jsx(B,{rød:!0,beløp:n.aktuellFeilUtbetaltBeløp})})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),e.jsx(E,{size:"small",children:n.tidligereVarseltBeløp?e.jsx(B,{beløp:n.tidligereVarseltBeløp}):e.jsx(d,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),e.jsx(L,{name:"behandlePerioderSamlet",control:u.control,label:T.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:a}),e.jsx(se,{merknaderFraBeslutter:g[A.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:e.jsx(D,{perioder:x(t),behandlePerioderSamlet:F,årsaker:l,readOnly:a,kodeverkSamlingFpTilbake:i})})]}),e.jsxs(y,{gap:"space-16",children:[e.jsx(P,{size:"small",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Revurdering"})}),e.jsxs(_,{gap:"space-16",children:[e.jsxs(y,{gap:"space-4",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Årsaker"})}),n.behandlingÅrsaker&&e.jsx(E,{size:"small",children:n.behandlingÅrsaker.map(p=>s.BehandlingÅrsakType.find(f=>f.kode===p.behandlingArsakType)?.navn).join(", ")})]}),n.datoForRevurderingsvedtak&&e.jsxs(y,{gap:"space-4",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),e.jsx(E,{size:"small",children:e.jsx(de,{dateString:n.datoForRevurderingsvedtak})})]})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Resultat"})}),n.behandlingsresultat&&e.jsx(E,{size:"small",children:s.BehandlingResultatType.find(p=>p.kode===n.behandlingsresultat?.type)?.navn})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),n.behandlingsresultat&&e.jsx(E,{size:"small",children:n.behandlingsresultat.konsekvenserForYtelsen.map(p=>s.KonsekvensForYtelsen.find(f=>f.kode===p)?.navn).join(", ")})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),n.tilbakekrevingValg&&e.jsx(E,{size:"small",children:i.VidereBehandling.find(p=>p.kode===n.tilbakekrevingValg?.videreBehandling)?.navn})]})]})]}),e.jsx("div",{className:pe.textarea,children:e.jsx(S,{name:"begrunnelse",control:u.control,label:T.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[j,ke,me,le],maxLength:K,readOnly:a})}),e.jsx("div",{children:e.jsx(oe,{variant:"primary",size:"small",disabled:a||!u.formState.isDirty||u.formState.isSubmitting,loading:u.formState.isSubmitting,children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Confirm"})})})]})})]})};V.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingInfoPanel",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"hendelseType",value:{name:"HendelseType",required:!0}},{key:"hendelseUndertyper",value:{name:"Array",elements:[{name:"HendelseUnderType"}],raw:"HendelseUnderType[]",required:!1}}]}}],raw:`{
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
}`,signature:{properties:[{key:"HendelseType",value:{name:"HendelseType",required:!0}},{key:"HendelseUnderType",value:{name:"HendelseUnderType",required:!0}},{key:"VidereBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlePerioderSamlet",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]},name:"data"}],return:{name:"void"}}},description:""}}};const Te={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},he=Z(Te),O=({feilutbetalingFakta:r,feilutbetalingAarsak:o,fagsakYtelseTypeKode:t,isAksjonspunktOpen:a,isReadOnly:g,kodeverkSamlingFpsak:i,kodeverkSamlingFpTilbake:s,alleMerknaderFraBeslutter:k,submitCallback:b,formData:h,setFormData:T})=>{const n=o.find(m=>m.ytelseType===t);if(!n)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${t}`);return e.jsx(X,{value:he,children:e.jsx(V,{feilutbetalingFakta:r,feilutbetalingAarsak:n,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:s,kodeverkSamlingFpsak:i,submitCallback:b,readOnly:g,hasOpenAksjonspunkter:a,formData:h,setFormData:T})})};O.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingFaktaIndex",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"hendelseType",value:{name:"HendelseType",required:!0}},{key:"hendelseUndertyper",value:{name:"Array",elements:[{name:"HendelseUnderType"}],raw:"HendelseUnderType[]",required:!1}}]}}],raw:`{
  hendelseType: HendelseType;
  hendelseUndertyper?: HendelseUnderType[];
}[]`,required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}}],raw:"FeilutbetalingÅrsak[]"},description:""},fagsakYtelseTypeKode:{required:!0,tsType:{name:"string"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  HendelseType: HendelseType;
  HendelseUnderType: HendelseUnderType;
  VidereBehandling: TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"HendelseType",value:{name:"HendelseType",required:!0}},{key:"HendelseUnderType",value:{name:"HendelseUnderType",required:!0}},{key:"VidereBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const{action:ce}=__STORYBOOK_MODULE_ACTIONS__,Ee={behandlingFakta:{perioder:[{fom:"2018-01-01",tom:"2018-01-31",belop:1e3},{fom:"2018-02-01",tom:"2018-02-28",belop:5e3},{fom:"2018-03-01",tom:"2018-03-15",belop:100}],totalPeriodeFom:"2019-01-01",totalPeriodeTom:"2019-01-02",aktuellFeilUtbetaltBeløp:1e4,tidligereVarseltBeløp:5e3,behandlingÅrsaker:[{behandlingArsakType:z.FEIL_I_LOVANDVENDELSE}],behandlingsresultat:{type:$.INNVILGET,konsekvenserForYtelsen:["FORELDREPENGER_OPPHØRER","ENDRING_I_BEREGNING"]},tilbakekrevingValg:{videreBehandling:C.TILBAKEKR_INNTREKK},datoForRevurderingsvedtak:"2019-01-01"}},Ne=[{ytelseType:U.FORELDREPENGER,hendelseTyper:[{hendelseType:I.MEDLEMSKAP,hendelseUndertyper:[]},{hendelseType:I.OKONOMI_FEIL,hendelseUndertyper:[q.OKONOMI_FEIL_TREKK]},{hendelseType:I.FP_BEREGNING_TYPE,hendelseUndertyper:[q.IKKE_BOSATT]}]}],Fe=M,Re=Y,dn={component:O,args:{submitCallback:ce("button-click"),isReadOnly:!1,setFormData:()=>{},feilutbetalingFakta:Ee,feilutbetalingAarsak:Ne,kodeverkSamlingFpsak:Re,kodeverkSamlingFpTilbake:Fe,fagsakYtelseTypeKode:U.FORELDREPENGER,alleMerknaderFraBeslutter:{},isAksjonspunktOpen:!0}},R={};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"{}",...R.parameters?.docs?.source}}};const on=["Default"];export{R as Default,on as __namedExportsOrder,dn as default};
