import{a as Q}from"./index-B-lxVbXh.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{J as N,K as W,q as J,Q as X}from"./index.es-CaXV8qL4.js";import{a as Z}from"./alleKodeverk-LoqTPBoT.js";import{a as ee}from"./alleTilbakekrevingKodeverk-dIUSSyeF.js";import{e as _,I as q,a as ne,o as re,N as te,z as $,u as ae,$ as U,W as ie,X as se}from"./style-F7OxOadN.js";import{Q as E,u as le,e as oe,P as de,f as ue}from"./index.es-C5jiSLgv.js";import{u as ge,c as pe,b as me}from"./index.esm-Dx4UTPJw.js";import{h as P}from"./moment-C5S46NFB.js";import{M as g,b as ke,A as ye}from"./index.es-d-wk20q8.js";import{T as b}from"./Table-CMFYEO3g.js";import{V as k,H as B}from"./VStack-CfnCueE0.js";import"./index-DASCADcX.js";import"./Theme-Bqc_BD0M.js";import{L as D,D as F,a as j}from"./Label-CfBdhDeq.js";import{B as be}from"./Button-D87Irl5r.js";/* empty css              */import"./v4-CtRu48qb.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Checkbox-9OjO7dif.js";import"./omit-B7stZg_p.js";import"./useId-BiFzyKmP.js";import"./ReadOnlyIcon-fpBUgZkh.js";import"./Loader-C31s9nuZ.js";import"./Provider-ChnEfPss.js";import"./useId-sDoo_C8F.js";import"./useFormField-BZtIeUXv.js";import"./Fieldset-DZVRdKGd.js";import"./Tag-BWaKO8vm.js";import"./Textarea-CArg_PMq.js";import"./index-CRSK7kgn.js";import"./index-BxWMR1Ay.js";import"./useClientLayoutEffect-Dt_TuINI.js";import"./Select-BQ6tobI2.js";import"./ChevronDown-DKSW_DmS.js";import"./Radio-QYcOLfdt.js";import"./useDatepicker-DHK8Po1m.js";import"./Date.Input-DmVXlpzX.js";import"./DatePicker-BmHvJ_4K.js";import"./Checkmark-abnGd_Ay.js";import"./Modal-DWcCyhkO.js";import"./floating-ui.react-DDTh10wr.js";import"./XMark-KAXZPgUH.js";import"./Popover-D1XpjwK6.js";import"./TextField-1A0BebA6.js";import"./Alert-vBIWixRy.js";import"./ExclamationmarkTriangleFill-BFbmXhrr.js";import"./XMarkOctagonFill-Cj0h8cZo.js";import"./PersonPencilFill-CoF6qBVB.js";import"./Box-t-YAJNpB.js";import"./BasePrimitive-eMFBMVLd.js";import"./KeyVerticalFill-m_CavoP-.js";var K=(t=>(t.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",t))(K||{});const ve="_feilutbetalingTable_1bepb_1",ce="_redText_1bepb_8",V={feilutbetalingTable:ve,redText:ce},A="perioder",he=(t,o)=>{const r=t.find(a=>a.hendelseType===o);return r!=null&&r.hendelseUndertyper&&r.hendelseUndertyper.length>0?r.hendelseUndertyper:void 0},H=({perioder:t,årsaker:o,readOnly:r,behandlePerioderSamlet:a,kodeverkSamlingFpTilbake:s})=>{const{control:u,watch:l,setValue:p,getValues:v}=ge(),{fields:h}=pe({control:u,name:A}),c=(n,m,d)=>{a&&h.forEach((w,i)=>{m!==i&&(d?v(`${A}.${i}.årsak`)===d&&p(`${A}.${i}.${d}.underÅrsak`,n):p(`${A}.${i}.årsak`,n))})};return e.jsx("div",{className:V.feilutbetalingTable,children:e.jsxs(b,{children:[e.jsx(b.Header,{children:e.jsxs(b.Row,{children:[e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Period"})}),e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Hendelse"})}),e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Beløp"})})]})}),e.jsx(b.Body,{children:h.map((n,m)=>{const d=l(`${A}.${m}.årsak`),w=he(o,d);return e.jsxs(b.Row,{children:[e.jsx(b.DataCell,{children:`${P(n.fom).format(E)} - ${P(n.tom).format(E)}`}),e.jsxs(b.DataCell,{children:[e.jsx(N,{name:`${A}.${m}.årsak`,selectValues:o.map(i=>{var f;return e.jsx("option",{value:i.hendelseType,children:(f=s[q.HENDELSE_TYPE].find(x=>x.kode===i.hendelseType))==null?void 0:f.navn},i.hendelseType)}),validate:[_],disabled:r,onChange:i=>c(i.target.value,m),label:""}),w&&e.jsx(N,{name:`${A}.${m}.${d}.underÅrsak`,selectValues:w.map(i=>{var f;return e.jsx("option",{value:i,children:(f=s[q.HENDELSE_UNDERTYPE].find(x=>x.kode===i))==null?void 0:f.navn},i)}),validate:[_],disabled:r,onChange:i=>c(i.target.value,m,d),label:""})]}),e.jsxs(b.DataCell,{className:V.redText,children:[t?t[m].belop:null," "]})]},n.id)})})]})})};H.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingPerioderFieldArray",props:{perioder:{required:!0,tsType:{name:"signature['perioder']",raw:"FeilutbetalingFakta['behandlingFakta']['perioder']"},description:""},årsaker:{required:!0,tsType:{name:"Array",raw:"FeilutbetalingÅrsak['hendelseTyper']"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlePerioderSamlet:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""}}};const fe="_textarea_14pq5_1",Te="_redText_14pq5_7",L={textarea:fe,redText:Te},Fe=ne(3),Y=4e3,je=re(Y),G=t=>t.behandlingFakta.perioder?[...t.behandlingFakta.perioder].sort((o,r)=>P(o.fom).diff(P(r.fom))):[],qe=t=>{const{behandlingFakta:{begrunnelse:o}}=t;return{begrunnelse:oe(o),perioder:G(t).map(r=>{const{fom:a,tom:s,feilutbetalingÅrsakDto:u}=r,l={fom:a,tom:s};if(!u)return l;const{hendelseType:p,hendelseUndertype:v}=u;return{...l,årsak:p,[p]:{underÅrsak:v||null}}})}},Ae=(t,o)=>{const r=t.perioder.map(a=>{const s=o.find(l=>l.hendelseType===a.årsak),u=s!=null&&s.hendelseUndertyper?s.hendelseUndertyper.find(l=>{var p;return l===((p=a[a.årsak])==null?void 0:p.underÅrsak)}):void 0;return{fom:a.fom,tom:a.tom,årsak:{hendelseType:s==null?void 0:s.hendelseType,hendelseUndertype:u}}});return{kode:K.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:t.begrunnelse,feilutbetalingFakta:r}},Pe=(t,o)=>{const{hendelseTyper:r}=t;return r.sort((a,s)=>{var n,m;const u=((n=o[q.HENDELSE_TYPE].find(d=>d.kode===a.hendelseType))==null?void 0:n.navn)||"",l=((m=o[q.HENDELSE_TYPE].find(d=>d.kode===s.hendelseType))==null?void 0:m.navn)||"",p=u.startsWith("§"),v=l.startsWith("§"),h=p?u.replace(/\D/g,""):u,c=v?l.replace(/\D/g,""):l;return p&&v?h-c:h.localeCompare(c)})},C=({hasOpenAksjonspunkter:t,feilutbetalingAarsak:o,feilutbetalingFakta:r,readOnly:a,alleMerknaderFraBeslutter:s,kodeverkSamlingFpTilbake:u,kodeverkSamlingFpsak:l,formData:p,setFormData:v,submitCallback:h})=>{var f,x;const c=le(),n=r.behandlingFakta,m=qe(r),d=me({defaultValues:p||m}),w=d.watch("behandlePerioderSamlet")||!1,i=Pe(o,u);return e.jsxs(k,{gap:"4",children:[t&&e.jsx(ke,{children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"})}),e.jsx(W,{formMethods:d,onSubmit:T=>h(Ae(T,i)),setDataOnUnmount:v,children:e.jsxs(k,{gap:"4",children:[e.jsxs(B,{gap:"10",wrap:!0,children:[e.jsxs(k,{gap:"4",children:[e.jsx(D,{size:"small",children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),e.jsxs(B,{justify:"space-between",children:[e.jsxs(k,{gap:"1",children:[e.jsx(F,{children:e.jsx(g,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),e.jsx(j,{size:"small",children:`${P(n.totalPeriodeFom).format(E)} - ${P(n.totalPeriodeTom).format(E)}`})]}),e.jsxs(k,{gap:"1",children:[e.jsx(F,{children:e.jsx(g,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),e.jsx(j,{size:"small",className:L.redText,children:n.aktuellFeilUtbetaltBeløp})]}),e.jsxs(k,{gap:"1",children:[e.jsx(F,{children:e.jsx(g,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),e.jsx(j,{size:"small",children:n.tidligereVarseltBeløp?n.tidligereVarseltBeløp:e.jsx(g,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),e.jsx(J,{name:"behandlePerioderSamlet",label:c.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:a}),e.jsx(ye,{merknaderFraBeslutter:s[K.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:e.jsx(H,{perioder:G(r),behandlePerioderSamlet:w,årsaker:i,readOnly:a,kodeverkSamlingFpTilbake:u})})]}),e.jsxs(k,{gap:"4",children:[e.jsx(D,{size:"small",children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Revurdering"})}),e.jsxs(B,{gap:"4",children:[e.jsxs(k,{gap:"1",children:[e.jsx(F,{children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Årsaker"})}),n.behandlingÅrsaker&&e.jsx(j,{size:"small",children:n.behandlingÅrsaker.map(T=>{var y;return(y=l[q.BEHANDLING_AARSAK].find(R=>R.kode===T.behandlingArsakType))==null?void 0:y.navn}).join(", ")})]}),n.datoForRevurderingsvedtak&&e.jsxs(k,{gap:"1",children:[e.jsx(F,{children:e.jsx(g,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),e.jsx(j,{size:"small",children:P(n.datoForRevurderingsvedtak).format(E)})]})]}),e.jsxs(k,{gap:"1",children:[e.jsx(F,{children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Resultat"})}),n.behandlingsresultat&&e.jsx(j,{size:"small",children:(f=l[q.BEHANDLING_AARSAK].find(T=>{var y;return T.kode===((y=n.behandlingsresultat)==null?void 0:y.type)}))==null?void 0:f.navn})]}),e.jsxs(k,{gap:"1",children:[e.jsx(F,{children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),n.behandlingsresultat&&e.jsx(j,{size:"small",children:n.behandlingsresultat.konsekvenserForYtelsen.map(T=>{var y;return(y=l[q.KONSEKVENS_FOR_YTELSEN].find(R=>R.kode===T))==null?void 0:y.navn}).join(", ")})]}),e.jsxs(k,{gap:"1",children:[e.jsx(F,{children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),n.tilbakekrevingValg&&e.jsx(j,{size:"small",children:(x=u[q.TILBAKEKR_VIDERE_BEH].find(T=>{var y;return T.kode===((y=n.tilbakekrevingValg)==null?void 0:y.videreBehandling)}))==null?void 0:x.navn})]})]})]}),e.jsx("div",{className:L.textarea,children:e.jsx(X,{name:"begrunnelse",label:c.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[_,Fe,je,te],maxLength:Y,readOnly:a})}),e.jsx("div",{children:e.jsx(be,{variant:"primary",size:"small",disabled:a||!d.formState.isDirty||d.formState.isSubmitting,loading:d.formState.isSubmitting,children:e.jsx(g,{id:"FeilutbetalingInfoPanel.Confirm"})})})]})})]})};C.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingInfoPanel",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlePerioderSamlet",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]},name:"data"}],return:{name:"void"}}},description:""}}};const xe={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},we=ue(xe),z=({feilutbetalingFakta:t,feilutbetalingAarsak:o,fagsakYtelseTypeKode:r,isAksjonspunktOpen:a,isReadOnly:s,kodeverkSamlingFpsak:u,kodeverkSamlingFpTilbake:l,alleMerknaderFraBeslutter:p,submitCallback:v,formData:h,setFormData:c})=>{const n=o.find(m=>m.ytelseType===r);if(!n)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${r}`);return e.jsx(de,{value:we,children:e.jsx(C,{feilutbetalingFakta:t,feilutbetalingAarsak:n,alleMerknaderFraBeslutter:p,kodeverkSamlingFpTilbake:l,kodeverkSamlingFpsak:u,submitCallback:v,readOnly:s,hasOpenAksjonspunkter:a,formData:h,setFormData:c})})};z.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingFaktaIndex",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const Ee={behandlingFakta:{perioder:[{fom:"2018-01-01",tom:"2018-01-31",belop:1e3},{fom:"2018-02-01",tom:"2018-02-28",belop:5e3},{fom:"2018-03-01",tom:"2018-03-15",belop:100}],totalPeriodeFom:"2019-01-01",totalPeriodeTom:"2019-01-02",aktuellFeilUtbetaltBeløp:1e4,tidligereVarseltBeløp:5e3,behandlingÅrsaker:[{behandlingArsakType:se.FEIL_I_LOVANDVENDELSE}],behandlingsresultat:{type:ie.INNVILGET,konsekvenserForYtelsen:[U.FORELDREPENGER_OPPHØRER,U.ENDRING_I_BEREGNING]},tilbakekrevingValg:{videreBehandling:ae.TILBAKEKR_INNTREKK},datoForRevurderingsvedtak:"2019-01-01"}},Ie=[{ytelseType:$.FORELDREPENGER,hendelseTyper:[{hendelseType:"MEDLEMSKAP",hendelseUndertyper:[]},{hendelseType:"OKONOMI_FEIL",hendelseUndertyper:["OKONOMI_FEIL_TREKK"]},{hendelseType:"BEREGNING_TYPE",hendelseUndertyper:["IKKE_BOSATT"]}]}],Re=ee,Be=Z,_n={component:z,args:{submitCallback:Q("button-click"),isReadOnly:!1,setFormData:()=>{},feilutbetalingFakta:Ee,feilutbetalingAarsak:Ie,kodeverkSamlingFpsak:Be,kodeverkSamlingFpTilbake:Re,fagsakYtelseTypeKode:$.FORELDREPENGER,alleMerknaderFraBeslutter:{},isAksjonspunktOpen:!0}},I={};var S,M,O;I.parameters={...I.parameters,docs:{...(S=I.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(O=(M=I.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const Kn=["Default"];export{I as Default,Kn as __namedExportsOrder,_n as default};
