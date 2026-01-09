import{u as x,M as L,j as e,aF as j,aG as B,an as F,i as V,al as S,X as y,aH as M,aI as Y,H as R,Y as O,h,B as I,aJ as H,aK as C,aL as $,aM as z,J as X,aN as J,aO as W,P as Q,p as Z}from"./iframe-CV4PufWi.js";import{a as ee}from"./alleKodeverk-BqlsAwOV.js";import{a as ne}from"./alleTilbakekrevingKodeverk-BIIVe2EV.js";import{I as G,K as re,S as ae,G as te}from"./index.es-BDctT3QU.js";import{t as f,a as le,o as ie,N as se}from"./style-D7EH5Eer.js";import{T}from"./Table-CwVBr0LB.js";import{M as d}from"./message-I4fBysJT.js";import"./preload-helper-PPVm8Dsz.js";var A=(r=>(r.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",r))(A||{});const N="perioder",de=(r,u)=>{const t=r.find(a=>a.hendelseType===u);return t?.hendelseUndertyper&&t.hendelseUndertyper.length>0?t.hendelseUndertyper:void 0},P=({perioder:r,årsaker:u,readOnly:t,behandlePerioderSamlet:a,kodeverkSamlingFpTilbake:g})=>{const{control:i,watch:s,setValue:m,getValues:v}=x(),{fields:b}=L({control:i,name:N}),E=(n,k,o)=>{a&&b.forEach((c,l)=>{k!==l&&(o?v(`${N}.${l}.årsak`)===o&&m(`${N}.${l}.${o}.underÅrsak`,n):m(`${N}.${l}.årsak`,n))})};return e.jsxs(T,{children:[e.jsx(T.Header,{children:e.jsxs(T.Row,{children:[e.jsx(T.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Period"})}),e.jsx(T.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Hendelse"})}),e.jsx(T.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Beløp"})})]})}),e.jsx(T.Body,{children:b.map((n,k)=>{const o=s(`${N}.${k}.årsak`),c=de(u,o);return e.jsxs(T.Row,{children:[e.jsx(T.DataCell,{children:e.jsx(j,{dateStringFom:n.fom,dateStringTom:n.tom})}),e.jsxs(T.DataCell,{children:[e.jsx(B,{name:`${N}.${k}.årsak`,control:i,selectValues:u.map(l=>e.jsx("option",{value:l.hendelseType,children:g.HendelseType.find(p=>p.kode===l.hendelseType)?.navn},l.hendelseType)),validate:[f],disabled:t,onChange:l=>E(l.target.value,k),label:""}),c&&e.jsx(B,{name:`${N}.${k}.${o}.underÅrsak`,control:i,selectValues:c.map(l=>e.jsx("option",{value:l,children:g.HendelseUnderType.find(p=>p.kode===l)?.navn},l)),validate:[f],disabled:t,onChange:l=>E(l.target.value,k,o),label:""})]}),e.jsx(T.DataCell,{align:"right",children:r?e.jsx(F,{rød:!0,beløp:r[k].belop}):null})]},n.id)})})]})};P.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingPerioderFieldArray",props:{perioder:{required:!0,tsType:{name:"signature['perioder']",raw:"FeilutbetalingFakta['behandlingFakta']['perioder']"},description:""},årsaker:{required:!0,tsType:{name:"Array",raw:"FeilutbetalingÅrsak['hendelseTyper']"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlePerioderSamlet:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  HendelseType: HendelseType;
  HendelseUnderType: HendelseUnderType;
  VidereBehandling: TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"HendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"HendelseUnderType",value:{name:"union",raw:"'IKKE_INNTEKT' | 'IKKE_YRKESAKTIV' | 'OKONOMI_FEIL_TREKK' | 'IKKE_BOSATT'",elements:[{name:"literal",value:"'IKKE_INNTEKT'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'OKONOMI_FEIL_TREKK'"},{name:"literal",value:"'IKKE_BOSATT'"}],required:!0}},{key:"VidereBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const ue="_textarea_1pt2d_1",oe={textarea:ue},ge=le(3),q=4e3,pe=ie(q),w=r=>r.behandlingFakta.perioder?[...r.behandlingFakta.perioder].sort(W):[],me=r=>{const{behandlingFakta:{begrunnelse:u}}=r;return{begrunnelse:J(u),perioder:w(r).map(t=>{const{fom:a,tom:g,feilutbetalingÅrsakDto:i}=t,s={fom:a,tom:g};if(!i)return s;const{hendelseType:m,hendelseUndertype:v}=i;return{...s,årsak:m,[m]:{underÅrsak:v||null}}})}},ke=(r,u)=>{const t=r.perioder.map(a=>{const g=u.find(s=>s.hendelseType===a.årsak),i=g?.hendelseUndertyper?g.hendelseUndertyper.find(s=>s===a[a.årsak]?.underÅrsak):void 0;return{fom:a.fom,tom:a.tom,årsak:{hendelseType:g?.hendelseType,hendelseUndertype:i}}});return{kode:A.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:r.begrunnelse,feilutbetalingFakta:t}},ye=(r,u)=>{const{hendelseTyper:t}=r;return t.sort((a,g)=>{const i=u.HendelseType.find(n=>n.kode===a.hendelseType)?.navn||"",s=u.HendelseType.find(n=>n.kode===g.hendelseType)?.navn||"",m=i.startsWith("§"),v=s.startsWith("§"),b=m?i.replace(/\D/g,""):i,E=v?s.replace(/\D/g,""):s;return m&&v?b-E:b.localeCompare(E)})},D=({hasOpenAksjonspunkter:r,feilutbetalingAarsak:u,feilutbetalingFakta:t,readOnly:a,alleMerknaderFraBeslutter:g,kodeverkSamlingFpTilbake:i,kodeverkSamlingFpsak:s,formData:m,setFormData:v,submitCallback:b})=>{const E=V(),n=t.behandlingFakta,k=me(t),o=S({defaultValues:m||k}),c=o.watch("behandlePerioderSamlet")||!1,l=ye(u,i);return e.jsxs(y,{gap:"space-16",children:[r&&e.jsx(M,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"})}),e.jsx(Y,{formMethods:o,onSubmit:p=>b(ke(p,l)),setDataOnUnmount:v,children:e.jsxs(y,{gap:"space-16",children:[e.jsxs(R,{gap:"space-40",wrap:!0,children:[e.jsxs(y,{gap:"space-16",children:[e.jsx(O,{size:"small",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),e.jsxs(R,{justify:"space-between",children:[e.jsxs(y,{gap:"space-4",children:[e.jsx(h,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),e.jsx(I,{size:"small",children:e.jsx(j,{dateStringFom:n.totalPeriodeFom,dateStringTom:n.totalPeriodeTom})})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(h,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),e.jsx(I,{size:"small",children:e.jsx(F,{rød:!0,beløp:n.aktuellFeilUtbetaltBeløp})})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(h,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),e.jsx(I,{size:"small",children:n.tidligereVarseltBeløp?e.jsx(F,{beløp:n.tidligereVarseltBeløp}):e.jsx(d,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),e.jsx(H,{name:"behandlePerioderSamlet",control:o.control,label:E.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:a}),e.jsx(C,{merknaderFraBeslutter:g[A.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:e.jsx(P,{perioder:w(t),behandlePerioderSamlet:c,årsaker:l,readOnly:a,kodeverkSamlingFpTilbake:i})})]}),e.jsxs(y,{gap:"space-16",children:[e.jsx(O,{size:"small",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Revurdering"})}),e.jsxs(R,{gap:"space-16",children:[e.jsxs(y,{gap:"space-4",children:[e.jsx(h,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Årsaker"})}),n.behandlingÅrsaker&&e.jsx(I,{size:"small",children:n.behandlingÅrsaker.map(p=>s.BehandlingÅrsakType.find(_=>_.kode===p.behandlingArsakType)?.navn).join(", ")})]}),n.datoForRevurderingsvedtak&&e.jsxs(y,{gap:"space-4",children:[e.jsx(h,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),e.jsx(I,{size:"small",children:e.jsx($,{dateString:n.datoForRevurderingsvedtak})})]})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(h,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Resultat"})}),n.behandlingsresultat&&e.jsx(I,{size:"small",children:s.BehandlingResultatType.find(p=>p.kode===n.behandlingsresultat?.type)?.navn})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(h,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),n.behandlingsresultat&&e.jsx(I,{size:"small",children:n.behandlingsresultat.konsekvenserForYtelsen.map(p=>s.KonsekvensForYtelsen.find(_=>_.kode===p)?.navn).join(", ")})]}),e.jsxs(y,{gap:"space-4",children:[e.jsx(h,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),n.tilbakekrevingValg&&e.jsx(I,{size:"small",children:i.VidereBehandling.find(p=>p.kode===n.tilbakekrevingValg?.videreBehandling)?.navn})]})]})]}),e.jsx("div",{className:oe.textarea,children:e.jsx(z,{name:"begrunnelse",control:o.control,label:E.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[f,ge,pe,se],maxLength:q,readOnly:a})}),e.jsx("div",{children:e.jsx(X,{variant:"primary",size:"small",disabled:a||!o.formState.isDirty||o.formState.isSubmitting,loading:o.formState.isSubmitting,children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Confirm"})})})]})})]})};D.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingInfoPanel",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"hendelseUndertyper",value:{name:"Array",elements:[{name:"union",raw:"'IKKE_INNTEKT' | 'IKKE_YRKESAKTIV' | 'OKONOMI_FEIL_TREKK' | 'IKKE_BOSATT'",elements:[{name:"literal",value:"'IKKE_INNTEKT'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'OKONOMI_FEIL_TREKK'"},{name:"literal",value:"'IKKE_BOSATT'"}]}],raw:"HendelseUnderType[]",required:!1}}]}}],raw:`{
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
}`,signature:{properties:[{key:"HendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"HendelseUnderType",value:{name:"union",raw:"'IKKE_INNTEKT' | 'IKKE_YRKESAKTIV' | 'OKONOMI_FEIL_TREKK' | 'IKKE_BOSATT'",elements:[{name:"literal",value:"'IKKE_INNTEKT'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'OKONOMI_FEIL_TREKK'"},{name:"literal",value:"'IKKE_BOSATT'"}],required:!0}},{key:"VidereBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlePerioderSamlet",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]},name:"data"}],return:{name:"void"}}},description:""}}};const Te={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},ve=Z(Te),U=({feilutbetalingFakta:r,feilutbetalingAarsak:u,fagsakYtelseTypeKode:t,isAksjonspunktOpen:a,isReadOnly:g,kodeverkSamlingFpsak:i,kodeverkSamlingFpTilbake:s,alleMerknaderFraBeslutter:m,submitCallback:v,formData:b,setFormData:E})=>{const n=u.find(k=>k.ytelseType===t);if(!n)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${t}`);return e.jsx(Q,{value:ve,children:e.jsx(D,{feilutbetalingFakta:r,feilutbetalingAarsak:n,alleMerknaderFraBeslutter:m,kodeverkSamlingFpTilbake:s,kodeverkSamlingFpsak:i,submitCallback:v,readOnly:g,hasOpenAksjonspunkter:a,formData:b,setFormData:E})})};U.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingFaktaIndex",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"hendelseUndertyper",value:{name:"Array",elements:[{name:"union",raw:"'IKKE_INNTEKT' | 'IKKE_YRKESAKTIV' | 'OKONOMI_FEIL_TREKK' | 'IKKE_BOSATT'",elements:[{name:"literal",value:"'IKKE_INNTEKT'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'OKONOMI_FEIL_TREKK'"},{name:"literal",value:"'IKKE_BOSATT'"}]}],raw:"HendelseUnderType[]",required:!1}}]}}],raw:`{
  hendelseType: HendelseType;
  hendelseUndertyper?: HendelseUnderType[];
}[]`,required:!0}},{key:"ytelseType",value:{name:"string",required:!0}}]}}],raw:"FeilutbetalingÅrsak[]"},description:""},fagsakYtelseTypeKode:{required:!0,tsType:{name:"string"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  HendelseType: HendelseType;
  HendelseUnderType: HendelseUnderType;
  VidereBehandling: TilbakekrevingVidereBehandling;
}`,signature:{properties:[{key:"HendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"HendelseUnderType",value:{name:"union",raw:"'IKKE_INNTEKT' | 'IKKE_YRKESAKTIV' | 'OKONOMI_FEIL_TREKK' | 'IKKE_BOSATT'",elements:[{name:"literal",value:"'IKKE_INNTEKT'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'OKONOMI_FEIL_TREKK'"},{name:"literal",value:"'IKKE_BOSATT'"}],required:!0}},{key:"VidereBehandling",value:{name:"TilbakekrevingVidereBehandling",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const{action:Ee}=__STORYBOOK_MODULE_ACTIONS__,be={behandlingFakta:{perioder:[{fom:"2018-01-01",tom:"2018-01-31",belop:1e3},{fom:"2018-02-01",tom:"2018-02-28",belop:5e3},{fom:"2018-03-01",tom:"2018-03-15",belop:100}],totalPeriodeFom:"2019-01-01",totalPeriodeTom:"2019-01-02",aktuellFeilUtbetaltBeløp:1e4,tidligereVarseltBeløp:5e3,behandlingÅrsaker:[{behandlingArsakType:te.FEIL_I_LOVANDVENDELSE}],behandlingsresultat:{type:ae.INNVILGET,konsekvenserForYtelsen:["FORELDREPENGER_OPPHØRER","ENDRING_I_BEREGNING"]},tilbakekrevingValg:{videreBehandling:re.TILBAKEKR_INNTREKK},datoForRevurderingsvedtak:"2019-01-01"}},he=[{ytelseType:G.FORELDREPENGER,hendelseTyper:[{hendelseType:"MEDLEMSKAP",hendelseUndertyper:[]},{hendelseType:"OKONOMI_FEIL",hendelseUndertyper:["OKONOMI_FEIL_TREKK"]},{hendelseType:"BEREGNING_TYPE",hendelseUndertyper:["IKKE_BOSATT"]}]}],Ie=ne,Ne=ee,Oe={component:U,args:{submitCallback:Ee("submit"),isReadOnly:!1,setFormData:()=>{},feilutbetalingFakta:be,feilutbetalingAarsak:he,kodeverkSamlingFpsak:Ne,kodeverkSamlingFpTilbake:Ie,fagsakYtelseTypeKode:G.FORELDREPENGER,alleMerknaderFraBeslutter:{},isAksjonspunktOpen:!0}},K={};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:"{}",...K.parameters?.docs?.source}}};const je=["Default"];export{K as Default,je as __namedExportsOrder,Oe as default};
