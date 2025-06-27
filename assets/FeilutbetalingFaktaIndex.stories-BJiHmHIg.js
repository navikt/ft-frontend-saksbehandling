import{m as $,an as G,j as e,ao as D,ap as K,aq as U,h as z,aa as W,V as y,ar as X,as as Q,H as x,L as V,D as F,B as j,at as J,au as Z,av as ee,aw as ne,F as re,ax as ae,ay as te,P as ie,l as se}from"./iframe-DQj-1hI0.js";import{a as le}from"./alleKodeverk-_5zJmStD.js";import{a as de}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as R,a as oe,o as ue,N as ge,x as O,X as pe,W as E,z as ke,C as ye}from"./style-BbH34Im7.js";import{T as b}from"./Table-Ceuot7E6.js";import{M as u}from"./message-Y2g9lHpZ.js";var I=(r=>(r.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",r))(I||{});const q="perioder",me=(r,g)=>{const a=r.find(t=>t.hendelseType===g);return a!=null&&a.hendelseUndertyper&&a.hendelseUndertyper.length>0?a.hendelseUndertyper:void 0},S=({perioder:r,årsaker:g,readOnly:a,behandlePerioderSamlet:t,kodeverkSamlingFpTilbake:l})=>{const{control:d,watch:o,setValue:p,getValues:v}=$(),{fields:T}=G({control:d,name:q}),h=(n,k,i)=>{t&&T.forEach((A,s)=>{k!==s&&(i?v(`${q}.${s}.årsak`)===i&&p(`${q}.${s}.${i}.underÅrsak`,n):p(`${q}.${s}.årsak`,n))})};return e.jsxs(b,{children:[e.jsx(b.Header,{children:e.jsxs(b.Row,{children:[e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Period"})}),e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Hendelse"})}),e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Beløp"})})]})}),e.jsx(b.Body,{children:T.map((n,k)=>{const i=o(`${q}.${k}.årsak`),A=me(g,i);return e.jsxs(b.Row,{children:[e.jsx(b.DataCell,{children:e.jsx(D,{dateStringFom:n.fom,dateStringTom:n.tom})}),e.jsxs(b.DataCell,{children:[e.jsx(K,{name:`${q}.${k}.årsak`,control:d,selectValues:g.map(s=>{var c;return e.jsx("option",{value:s.hendelseType,children:(c=l.HendelseType.find(B=>B.kode===s.hendelseType))==null?void 0:c.navn},s.hendelseType)}),validate:[R],disabled:a,onChange:s=>h(s.target.value,k),label:""}),A&&e.jsx(K,{name:`${q}.${k}.${i}.underÅrsak`,control:d,selectValues:A.map(s=>{var c;return e.jsx("option",{value:s,children:(c=l.HendelseUnderType.find(B=>B.kode===s))==null?void 0:c.navn},s)}),validate:[R],disabled:a,onChange:s=>h(s.target.value,k,i),label:""})]}),e.jsx(b.DataCell,{align:"right",children:r?e.jsx(U,{rød:!0,beløp:r[k].belop}):null})]},n.id)})})]})};S.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingPerioderFieldArray",props:{perioder:{required:!0,tsType:{name:"signature['perioder']",raw:"FeilutbetalingFakta['behandlingFakta']['perioder']"},description:""},årsaker:{required:!0,tsType:{name:"Array",raw:"FeilutbetalingÅrsak['hendelseTyper']"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlePerioderSamlet:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const be="_textarea_1pt2d_1",ve={textarea:be},he=oe(3),L=4e3,Te=ue(L),M=r=>r.behandlingFakta.perioder?[...r.behandlingFakta.perioder].sort(te):[],ce=r=>{const{behandlingFakta:{begrunnelse:g}}=r;return{begrunnelse:ae(g),perioder:M(r).map(a=>{const{fom:t,tom:l,feilutbetalingÅrsakDto:d}=a,o={fom:t,tom:l};if(!d)return o;const{hendelseType:p,hendelseUndertype:v}=d;return{...o,årsak:p,[p]:{underÅrsak:v||null}}})}},fe=(r,g)=>{const a=r.perioder.map(t=>{const l=g.find(o=>o.hendelseType===t.årsak),d=l!=null&&l.hendelseUndertyper?l.hendelseUndertyper.find(o=>{var p;return o===((p=t[t.årsak])==null?void 0:p.underÅrsak)}):void 0;return{fom:t.fom,tom:t.tom,årsak:{hendelseType:l==null?void 0:l.hendelseType,hendelseUndertype:d}}});return{kode:I.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:r.begrunnelse,feilutbetalingFakta:a}},Fe=(r,g)=>{const{hendelseTyper:a}=r;return a.sort((t,l)=>{var n,k;const d=((n=g.HendelseType.find(i=>i.kode===t.hendelseType))==null?void 0:n.navn)||"",o=((k=g.HendelseType.find(i=>i.kode===l.hendelseType))==null?void 0:k.navn)||"",p=d.startsWith("§"),v=o.startsWith("§"),T=p?d.replace(/\D/g,""):d,h=v?o.replace(/\D/g,""):o;return p&&v?T-h:T.localeCompare(h)})},Y=({hasOpenAksjonspunkter:r,feilutbetalingAarsak:g,feilutbetalingFakta:a,readOnly:t,alleMerknaderFraBeslutter:l,kodeverkSamlingFpTilbake:d,kodeverkSamlingFpsak:o,formData:p,setFormData:v,submitCallback:T})=>{var c,B;const h=z(),n=a.behandlingFakta,k=ce(a),i=W({defaultValues:p||k}),A=i.watch("behandlePerioderSamlet")||!1,s=Fe(g,d);return e.jsxs(y,{gap:"4",children:[r&&e.jsx(X,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"})}),e.jsx(Q,{formMethods:i,onSubmit:f=>T(fe(f,s)),setDataOnUnmount:v,children:e.jsxs(y,{gap:"4",children:[e.jsxs(x,{gap:"10",wrap:!0,children:[e.jsxs(y,{gap:"4",children:[e.jsx(V,{size:"small",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),e.jsxs(x,{justify:"space-between",children:[e.jsxs(y,{gap:"1",children:[e.jsx(F,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),e.jsx(j,{size:"small",children:e.jsx(D,{dateStringFom:n.totalPeriodeFom,dateStringTom:n.totalPeriodeTom})})]}),e.jsxs(y,{gap:"1",children:[e.jsx(F,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),e.jsx(j,{size:"small",children:e.jsx(U,{rød:!0,beløp:n.aktuellFeilUtbetaltBeløp})})]}),e.jsxs(y,{gap:"1",children:[e.jsx(F,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),e.jsx(j,{size:"small",children:n.tidligereVarseltBeløp?e.jsx(U,{beløp:n.tidligereVarseltBeløp}):e.jsx(u,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),e.jsx(J,{name:"behandlePerioderSamlet",control:i.control,label:h.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:t}),e.jsx(Z,{merknaderFraBeslutter:l[I.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:e.jsx(S,{perioder:M(a),behandlePerioderSamlet:A,årsaker:s,readOnly:t,kodeverkSamlingFpTilbake:d})})]}),e.jsxs(y,{gap:"4",children:[e.jsx(V,{size:"small",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Revurdering"})}),e.jsxs(x,{gap:"4",children:[e.jsxs(y,{gap:"1",children:[e.jsx(F,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Årsaker"})}),n.behandlingÅrsaker&&e.jsx(j,{size:"small",children:n.behandlingÅrsaker.map(f=>{var m;return(m=o.BehandlingÅrsakType.find(P=>P.kode===f.behandlingArsakType))==null?void 0:m.navn}).join(", ")})]}),n.datoForRevurderingsvedtak&&e.jsxs(y,{gap:"1",children:[e.jsx(F,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),e.jsx(j,{size:"small",children:e.jsx(ee,{dateString:n.datoForRevurderingsvedtak})})]})]}),e.jsxs(y,{gap:"1",children:[e.jsx(F,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Resultat"})}),n.behandlingsresultat&&e.jsx(j,{size:"small",children:(c=o.BehandlingResultatType.find(f=>{var m;return f.kode===((m=n.behandlingsresultat)==null?void 0:m.type)}))==null?void 0:c.navn})]}),e.jsxs(y,{gap:"1",children:[e.jsx(F,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),n.behandlingsresultat&&e.jsx(j,{size:"small",children:n.behandlingsresultat.konsekvenserForYtelsen.map(f=>{var m;return(m=o.KonsekvensForYtelsen.find(P=>P.kode===f))==null?void 0:m.navn}).join(", ")})]}),e.jsxs(y,{gap:"1",children:[e.jsx(F,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),n.tilbakekrevingValg&&e.jsx(j,{size:"small",children:(B=d.VidereBehandling.find(f=>{var m;return f.kode===((m=n.tilbakekrevingValg)==null?void 0:m.videreBehandling)}))==null?void 0:B.navn})]})]})]}),e.jsx("div",{className:ve.textarea,children:e.jsx(ne,{name:"begrunnelse",control:i.control,label:h.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[R,he,Te,ge],maxLength:L,readOnly:t})}),e.jsx("div",{children:e.jsx(re,{variant:"primary",size:"small",disabled:t||!i.formState.isDirty||i.formState.isSubmitting,loading:i.formState.isSubmitting,children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Confirm"})})})]})})]})};Y.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingInfoPanel",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
      konsekvenserForYtelsen: string[];
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
    konsekvenserForYtelsen: string[];
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
  konsekvenserForYtelsen: string[];
}`,signature:{properties:[{key:"type",value:{name:"BehandlingResultatType",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"tilbakekrevingValg",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlePerioderSamlet",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]},name:"data"}],return:{name:"void"}}},description:""}}};const je={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},qe=se(je),C=({feilutbetalingFakta:r,feilutbetalingAarsak:g,fagsakYtelseTypeKode:a,isAksjonspunktOpen:t,isReadOnly:l,kodeverkSamlingFpsak:d,kodeverkSamlingFpTilbake:o,alleMerknaderFraBeslutter:p,submitCallback:v,formData:T,setFormData:h})=>{const n=g.find(k=>k.ytelseType===a);if(!n)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${a}`);return e.jsx(ie,{value:qe,children:e.jsx(Y,{feilutbetalingFakta:r,feilutbetalingAarsak:n,alleMerknaderFraBeslutter:p,kodeverkSamlingFpTilbake:o,kodeverkSamlingFpsak:d,submitCallback:v,readOnly:l,hasOpenAksjonspunkter:t,formData:T,setFormData:h})})};C.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingFaktaIndex",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
      konsekvenserForYtelsen: string[];
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
    konsekvenserForYtelsen: string[];
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
  konsekvenserForYtelsen: string[];
}`,signature:{properties:[{key:"type",value:{name:"BehandlingResultatType",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"tilbakekrevingValg",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const{action:Be}=__STORYBOOK_MODULE_ACTIONS__,Ae={behandlingFakta:{perioder:[{fom:"2018-01-01",tom:"2018-01-31",belop:1e3},{fom:"2018-02-01",tom:"2018-02-28",belop:5e3},{fom:"2018-03-01",tom:"2018-03-15",belop:100}],totalPeriodeFom:"2019-01-01",totalPeriodeTom:"2019-01-02",aktuellFeilUtbetaltBeløp:1e4,tidligereVarseltBeløp:5e3,behandlingÅrsaker:[{behandlingArsakType:ye.FEIL_I_LOVANDVENDELSE}],behandlingsresultat:{type:ke.INNVILGET,konsekvenserForYtelsen:[E.FORELDREPENGER_OPPHØRER,E.ENDRING_I_BEREGNING]},tilbakekrevingValg:{videreBehandling:pe.TILBAKEKR_INNTREKK},datoForRevurderingsvedtak:"2019-01-01"}},we=[{ytelseType:O.FORELDREPENGER,hendelseTyper:[{hendelseType:"MEDLEMSKAP",hendelseUndertyper:[]},{hendelseType:"OKONOMI_FEIL",hendelseUndertyper:["OKONOMI_FEIL_TREKK"]},{hendelseType:"BEREGNING_TYPE",hendelseUndertyper:["IKKE_BOSATT"]}]}],Pe=de,xe=le,He={component:C,args:{submitCallback:Be("button-click"),isReadOnly:!1,setFormData:()=>{},feilutbetalingFakta:Ae,feilutbetalingAarsak:we,kodeverkSamlingFpsak:xe,kodeverkSamlingFpTilbake:Pe,fagsakYtelseTypeKode:O.FORELDREPENGER,alleMerknaderFraBeslutter:{},isAksjonspunktOpen:!0}},w={};var H,_,N;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:"{}",...(N=(_=w.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const _e=["Default"];export{w as Default,_e as __namedExportsOrder,He as default};
