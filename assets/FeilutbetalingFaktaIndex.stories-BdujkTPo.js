import{m as L,aq as M,j as e,ar as E,as as R,at as P,h as Y,aa as C,V as m,au as $,av as G,H as A,L as I,D as c,B as f,aw as z,ax as W,ay as X,az as Q,F as J,aA as Z,aB as ee,P as ne,l as re}from"./iframe-CEg6Ggk6.js";import{a as ae}from"./alleKodeverk-DFOs3jtJ.js";import{a as te}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as x,a as ie,o as se,M as le,x as H,y as w,g as K,X as de,W as V,z as oe,C as ue}from"./style-BabIMYgd.js";import{T as b}from"./Table-DfCLcuY0.js";import{M as d}from"./message-Dq9EG46j.js";var U=(r=>(r.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",r))(U||{});const F="perioder",ge=(r,o)=>{const t=r.find(a=>a.hendelseType===o);return t?.hendelseUndertyper&&t.hendelseUndertyper.length>0?t.hendelseUndertyper:void 0},_=({perioder:r,årsaker:o,readOnly:t,behandlePerioderSamlet:a,kodeverkSamlingFpTilbake:g})=>{const{control:s,watch:l,setValue:k,getValues:v}=L(),{fields:T}=M({control:s,name:F}),h=(n,y,u)=>{a&&T.forEach((j,i)=>{y!==i&&(u?v(`${F}.${i}.årsak`)===u&&k(`${F}.${i}.${u}.underÅrsak`,n):k(`${F}.${i}.årsak`,n))})};return e.jsxs(b,{children:[e.jsx(b.Header,{children:e.jsxs(b.Row,{children:[e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Period"})}),e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Hendelse"})}),e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Beløp"})})]})}),e.jsx(b.Body,{children:T.map((n,y)=>{const u=l(`${F}.${y}.årsak`),j=ge(o,u);return e.jsxs(b.Row,{children:[e.jsx(b.DataCell,{children:e.jsx(E,{dateStringFom:n.fom,dateStringTom:n.tom})}),e.jsxs(b.DataCell,{children:[e.jsx(R,{name:`${F}.${y}.årsak`,control:s,selectValues:o.map(i=>e.jsx("option",{value:i.hendelseType,children:g.HendelseType.find(p=>p.kode===i.hendelseType)?.navn},i.hendelseType)),validate:[x],disabled:t,onChange:i=>h(i.target.value,y),label:""}),j&&e.jsx(R,{name:`${F}.${y}.${u}.underÅrsak`,control:s,selectValues:j.map(i=>e.jsx("option",{value:i,children:g.HendelseUnderType.find(p=>p.kode===i)?.navn},i)),validate:[x],disabled:t,onChange:i=>h(i.target.value,y,u),label:""})]}),e.jsx(b.DataCell,{align:"right",children:r?e.jsx(P,{rød:!0,beløp:r[y].belop}):null})]},n.id)})})]})};_.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingPerioderFieldArray",props:{perioder:{required:!0,tsType:{name:"signature['perioder']",raw:"FeilutbetalingFakta['behandlingFakta']['perioder']"},description:""},årsaker:{required:!0,tsType:{name:"Array",raw:"FeilutbetalingÅrsak['hendelseTyper']"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlePerioderSamlet:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""}}};const pe="_textarea_1pt2d_1",ke={textarea:pe},ye=ie(3),D=4e3,me=se(D),N=r=>r.behandlingFakta.perioder?[...r.behandlingFakta.perioder].sort(ee):[],be=r=>{const{behandlingFakta:{begrunnelse:o}}=r;return{begrunnelse:Z(o),perioder:N(r).map(t=>{const{fom:a,tom:g,feilutbetalingÅrsakDto:s}=t,l={fom:a,tom:g};if(!s)return l;const{hendelseType:k,hendelseUndertype:v}=s;return{...l,årsak:k,[k]:{underÅrsak:v||null}}})}},ve=(r,o)=>{const t=r.perioder.map(a=>{const g=o.find(l=>l.hendelseType===a.årsak),s=g?.hendelseUndertyper?g.hendelseUndertyper.find(l=>l===a[a.årsak]?.underÅrsak):void 0;return{fom:a.fom,tom:a.tom,årsak:{hendelseType:g?.hendelseType,hendelseUndertype:s}}});return{kode:U.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:r.begrunnelse,feilutbetalingFakta:t}},he=(r,o)=>{const{hendelseTyper:t}=r;return t.sort((a,g)=>{const s=o.HendelseType.find(n=>n.kode===a.hendelseType)?.navn||"",l=o.HendelseType.find(n=>n.kode===g.hendelseType)?.navn||"",k=s.startsWith("§"),v=l.startsWith("§"),T=k?s.replace(/\D/g,""):s,h=v?l.replace(/\D/g,""):l;return k&&v?T-h:T.localeCompare(h)})},O=({hasOpenAksjonspunkter:r,feilutbetalingAarsak:o,feilutbetalingFakta:t,readOnly:a,alleMerknaderFraBeslutter:g,kodeverkSamlingFpTilbake:s,kodeverkSamlingFpsak:l,formData:k,setFormData:v,submitCallback:T})=>{const h=Y(),n=t.behandlingFakta,y=be(t),u=C({defaultValues:k||y}),j=u.watch("behandlePerioderSamlet")||!1,i=he(o,s);return e.jsxs(m,{gap:"4",children:[r&&e.jsx($,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"})}),e.jsx(G,{formMethods:u,onSubmit:p=>T(ve(p,i)),setDataOnUnmount:v,children:e.jsxs(m,{gap:"4",children:[e.jsxs(A,{gap:"10",wrap:!0,children:[e.jsxs(m,{gap:"4",children:[e.jsx(I,{size:"small",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),e.jsxs(A,{justify:"space-between",children:[e.jsxs(m,{gap:"1",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),e.jsx(f,{size:"small",children:e.jsx(E,{dateStringFom:n.totalPeriodeFom,dateStringTom:n.totalPeriodeTom})})]}),e.jsxs(m,{gap:"1",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),e.jsx(f,{size:"small",children:e.jsx(P,{rød:!0,beløp:n.aktuellFeilUtbetaltBeløp})})]}),e.jsxs(m,{gap:"1",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),e.jsx(f,{size:"small",children:n.tidligereVarseltBeløp?e.jsx(P,{beløp:n.tidligereVarseltBeløp}):e.jsx(d,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),e.jsx(z,{name:"behandlePerioderSamlet",control:u.control,label:h.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:a}),e.jsx(W,{merknaderFraBeslutter:g[U.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:e.jsx(_,{perioder:N(t),behandlePerioderSamlet:j,årsaker:i,readOnly:a,kodeverkSamlingFpTilbake:s})})]}),e.jsxs(m,{gap:"4",children:[e.jsx(I,{size:"small",children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Revurdering"})}),e.jsxs(A,{gap:"4",children:[e.jsxs(m,{gap:"1",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Årsaker"})}),n.behandlingÅrsaker&&e.jsx(f,{size:"small",children:n.behandlingÅrsaker.map(p=>l.BehandlingÅrsakType.find(B=>B.kode===p.behandlingArsakType)?.navn).join(", ")})]}),n.datoForRevurderingsvedtak&&e.jsxs(m,{gap:"1",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),e.jsx(f,{size:"small",children:e.jsx(X,{dateString:n.datoForRevurderingsvedtak})})]})]}),e.jsxs(m,{gap:"1",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Resultat"})}),n.behandlingsresultat&&e.jsx(f,{size:"small",children:l.BehandlingResultatType.find(p=>p.kode===n.behandlingsresultat?.type)?.navn})]}),e.jsxs(m,{gap:"1",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),n.behandlingsresultat&&e.jsx(f,{size:"small",children:n.behandlingsresultat.konsekvenserForYtelsen.map(p=>l.KonsekvensForYtelsen.find(B=>B.kode===p)?.navn).join(", ")})]}),e.jsxs(m,{gap:"1",children:[e.jsx(c,{children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),n.tilbakekrevingValg&&e.jsx(f,{size:"small",children:s.VidereBehandling.find(p=>p.kode===n.tilbakekrevingValg?.videreBehandling)?.navn})]})]})]}),e.jsx("div",{className:ke.textarea,children:e.jsx(Q,{name:"begrunnelse",control:u.control,label:h.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[x,ye,me,le],maxLength:D,readOnly:a})}),e.jsx("div",{children:e.jsx(J,{variant:"primary",size:"small",disabled:a||!u.formState.isDirty||u.formState.isSubmitting,loading:u.formState.isSubmitting,children:e.jsx(d,{id:"FeilutbetalingInfoPanel.Confirm"})})})]})})]})};O.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingInfoPanel",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlePerioderSamlet",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]},name:"data"}],return:{name:"void"}}},description:""}}};const Te={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},ce=re(Te),S=({feilutbetalingFakta:r,feilutbetalingAarsak:o,fagsakYtelseTypeKode:t,isAksjonspunktOpen:a,isReadOnly:g,kodeverkSamlingFpsak:s,kodeverkSamlingFpTilbake:l,alleMerknaderFraBeslutter:k,submitCallback:v,formData:T,setFormData:h})=>{const n=o.find(y=>y.ytelseType===t);if(!n)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${t}`);return e.jsx(ne,{value:ce,children:e.jsx(O,{feilutbetalingFakta:r,feilutbetalingAarsak:n,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:l,kodeverkSamlingFpsak:s,submitCallback:v,readOnly:g,hasOpenAksjonspunkter:a,formData:T,setFormData:h})})};S.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingFaktaIndex",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<K>[]"}}]}},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const{action:fe}=__STORYBOOK_MODULE_ACTIONS__,Fe={behandlingFakta:{perioder:[{fom:"2018-01-01",tom:"2018-01-31",belop:1e3},{fom:"2018-02-01",tom:"2018-02-28",belop:5e3},{fom:"2018-03-01",tom:"2018-03-15",belop:100}],totalPeriodeFom:"2019-01-01",totalPeriodeTom:"2019-01-02",aktuellFeilUtbetaltBeløp:1e4,tidligereVarseltBeløp:5e3,behandlingÅrsaker:[{behandlingArsakType:ue.FEIL_I_LOVANDVENDELSE}],behandlingsresultat:{type:oe.INNVILGET,konsekvenserForYtelsen:[V.FORELDREPENGER_OPPHØRER,V.ENDRING_I_BEREGNING]},tilbakekrevingValg:{videreBehandling:de.TILBAKEKR_INNTREKK},datoForRevurderingsvedtak:"2019-01-01"}},je=[{ytelseType:H.FORELDREPENGER,hendelseTyper:[{hendelseType:w.MEDLEMSKAP,hendelseUndertyper:[]},{hendelseType:w.OKONOMI_FEIL,hendelseUndertyper:[K.OKONOMI_FEIL_TREKK]},{hendelseType:w.FP_BEREGNING_TYPE,hendelseUndertyper:[K.IKKE_BOSATT]}]}],qe=te,Be=ae,Ie={component:S,args:{submitCallback:fe("button-click"),isReadOnly:!1,setFormData:()=>{},feilutbetalingFakta:Fe,feilutbetalingAarsak:je,kodeverkSamlingFpsak:Be,kodeverkSamlingFpTilbake:qe,fagsakYtelseTypeKode:H.FORELDREPENGER,alleMerknaderFraBeslutter:{},isAksjonspunktOpen:!0}},q={};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:"{}",...q.parameters?.docs?.source}}};const Ke=["Default"];export{q as Default,Ke as __namedExportsOrder,Ie as default};
