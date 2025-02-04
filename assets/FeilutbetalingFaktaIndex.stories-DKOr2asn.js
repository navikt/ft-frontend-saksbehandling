import{a as W}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{j as e}from"./jsx-runtime-CLpGMVip.js";import{Q as K,r as Q,B as X,e as J}from"./index.es-THaQLCbj.js";import{a as Z}from"./alleKodeverk-LoqTPBoT.js";import{a as ee}from"./alleTilbakekrevingKodeverk-dIUSSyeF.js";import{I as j,e as _,N as ne,a as re,l as te,X as ae,W as ie,$ as U,u as se,z as $}from"./style-D_LpA0NF.js";import{u as le,P as oe}from"./index-D9DDUrbY.js";import{P as E,a as de,n as ue}from"./index.es-Dh3mAfPy.js";import{u as ge,d as pe,c as me}from"./ReadOnlyIcon-3mCRcvzc.js";import{h as P}from"./moment-C5S46NFB.js";import{H as ke,c as ye,C as R,N as be,d as v,W as ve}from"./index.es-B_RouKJz.js";import{M as m}from"./message-BcVJpMje.js";import{H as B}from"./VStack-BtUbcfLF.js";import"./index-B5OHeJSP.js";import{L as V,D as T,a as F}from"./Label-ZYbyet41.js";import{B as he}from"./Button-C4dKKha_.js";/* empty css              */import"./v4-CtRu48qb.js";import"./Checkbox-CHErwGPi.js";import"./clsx-B-dksMZM.js";import"./omit-B7stZg_p.js";import"./useId-e75EoDiw.js";import"./useFormField-BKpVC0Pg.js";import"./Fieldset-Cs108nF-.js";import"./Tag-DqR_3-Kz.js";import"./Textarea-DQ7w4yc6.js";import"./index-sT6466e8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./useClientLayoutEffect-DnVV5Q77.js";import"./create-context-BlrHNsQj.js";import"./Loader-CoAqN6Lw.js";import"./Provider-B_QIWjIe.js";import"./useDatepicker-oJRfFMcH.js";import"./useDateTranslationContext-DuYWebvA.js";import"./DatePicker-DoJN_gWH.js";import"./useId-B9OmVTHV.js";import"./Modal-C6iE4cX-.js";import"./floating-ui.react-FIE1On8Y.js";import"./XMark-BWJopseo.js";import"./Popover-CgZ7HliT.js";import"./Theme-6IdwQf2V.js";import"./Checkmark-uHeVskEM.js";import"./Select-wYL7g-5T.js";import"./ChevronDown-Bw2TG6jd.js";import"./Radio-BIYAymoT.js";import"./TextField-DEo8zdDE.js";import"./Alert-Pz1mMbfe.js";import"./XMarkOctagonFill-BUHxl6gj.js";import"./ExclamationmarkTriangleFill-Ck4a0gXp.js";import"./PersonPencilFill-DS1qmMzQ.js";import"./KeyVerticalFill-CH0oXMyL.js";import"./Panel-BzsK_xG0.js";var N=(t=>(t.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",t))(N||{});const ce="_feilutbetalingTable_1bepb_1",fe="_redText_1bepb_8",D={feilutbetalingTable:ce,redText:fe},x="perioder",Te=["FeilutbetalingInfoPanel.Period","FeilutbetalingInfoPanel.Hendelse","FeilutbetalingInfoPanel.Beløp"],Fe=(t,o)=>{const r=t.find(a=>a.hendelseType===o);return r!=null&&r.hendelseUndertyper&&r.hendelseUndertyper.length>0?r.hendelseUndertyper:void 0},H=({perioder:t,årsaker:o,readOnly:r,behandlePerioderSamlet:a,kodeverkSamlingFpTilbake:s})=>{const{control:u,watch:l,setValue:g,getValues:y}=ge(),{fields:h}=pe({control:u,name:x}),b=(n,p,d)=>{a&&h.forEach((A,i)=>{p!==i&&(d?y(`${x}.${i}.årsak`)===d&&g(`${x}.${i}.${d}.underÅrsak`,n):g(`${x}.${i}.årsak`,n))})};return e.jsx("div",{className:D.feilutbetalingTable,children:e.jsx(ke,{headerTextCodes:Te,noHover:!0,children:h.map((n,p)=>{const d=l(`${x}.${p}.årsak`),A=Fe(o,d);return e.jsxs(ye,{children:[e.jsx(R,{children:`${P(n.fom).format(E)} - ${P(n.tom).format(E)}`}),e.jsxs(R,{children:[e.jsx(K,{name:`${x}.${p}.årsak`,selectValues:o.map(i=>{var c;return e.jsx("option",{value:i.hendelseType,children:(c=s[j.HENDELSE_TYPE].find(q=>q.kode===i.hendelseType))==null?void 0:c.navn},i.hendelseType)}),validate:[_],disabled:r,onChange:i=>b(i.target.value,p),label:""}),A&&e.jsx(K,{name:`${x}.${p}.${d}.underÅrsak`,selectValues:A.map(i=>{var c;return e.jsx("option",{value:i,children:(c=s[j.HENDELSE_UNDERTYPE].find(q=>q.kode===i))==null?void 0:c.navn},i)}),validate:[_],disabled:r,onChange:i=>b(i.target.value,p,d),label:""})]}),e.jsx(R,{className:D.redText,children:t?t[p].belop:null})]},n.id)})})})};H.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingPerioderFieldArray",props:{perioder:{required:!0,tsType:{name:"signature['perioder']",raw:"FeilutbetalingFakta['behandlingFakta']['perioder']"},description:""},årsaker:{required:!0,tsType:{name:"Array",raw:"FeilutbetalingÅrsak['hendelseTyper']"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlePerioderSamlet:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""}}};const je="_textarea_14pq5_1",xe="_textPadding_14pq5_4",Pe="_redText_14pq5_7",L={textarea:je,textPadding:xe,redText:Pe},qe=re(3),Y=4e3,Ae=te(Y),G=t=>t.behandlingFakta.perioder?[...t.behandlingFakta.perioder].sort((o,r)=>P(o.fom).diff(P(r.fom))):[],Ee=t=>{const{behandlingFakta:{begrunnelse:o}}=t;return{begrunnelse:de(o),perioder:G(t).map(r=>{const{fom:a,tom:s,feilutbetalingÅrsakDto:u}=r,l={fom:a,tom:s};if(!u)return l;const{hendelseType:g,hendelseUndertype:y}=u;return{...l,årsak:g,[g]:{underÅrsak:y||null}}})}},we=(t,o)=>{const r=t.perioder.map(a=>{const s=o.find(l=>l.hendelseType===a.årsak),u=s!=null&&s.hendelseUndertyper?s.hendelseUndertyper.find(l=>{var g;return l===((g=a[a.årsak])==null?void 0:g.underÅrsak)}):void 0;return{fom:a.fom,tom:a.tom,årsak:{hendelseType:s==null?void 0:s.hendelseType,hendelseUndertype:u}}});return{kode:N.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:t.begrunnelse,feilutbetalingFakta:r}},Ie=(t,o)=>{const{hendelseTyper:r}=t;return r.sort((a,s)=>{var n,p;const u=((n=o[j.HENDELSE_TYPE].find(d=>d.kode===a.hendelseType))==null?void 0:n.navn)||"",l=((p=o[j.HENDELSE_TYPE].find(d=>d.kode===s.hendelseType))==null?void 0:p.navn)||"",g=u.startsWith("§"),y=l.startsWith("§"),h=g?u.replace(/\D/g,""):u,b=y?l.replace(/\D/g,""):l;return g&&y?h-b:h.localeCompare(b)})},z=({hasOpenAksjonspunkter:t,feilutbetalingAarsak:o,feilutbetalingFakta:r,readOnly:a,alleMerknaderFraBeslutter:s,kodeverkSamlingFpTilbake:u,kodeverkSamlingFpsak:l,formData:g,setFormData:y,submitCallback:h})=>{var c,q;const b=le(),n=r.behandlingFakta,p=Ee(r),d=me({defaultValues:g||p}),A=d.watch("behandlePerioderSamlet")||!1,i=Ie(o,u);return e.jsxs(e.Fragment,{children:[t&&e.jsx(be,{children:e.jsx(m,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"})}),e.jsx(v,{sixteenPx:!0}),e.jsxs(Q,{formMethods:d,onSubmit:f=>h(we(f,i)),setDataOnUnmount:y,children:[e.jsxs(B,{gap:"10",wrap:!0,children:[e.jsxs("div",{children:[e.jsx(V,{size:"small",children:e.jsx(m,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),e.jsx(v,{sixteenPx:!0}),e.jsxs(B,{justify:"space-between",children:[e.jsxs("div",{children:[e.jsx(T,{children:e.jsx(m,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),e.jsx(F,{size:"small",children:`${P(n.totalPeriodeFom).format(E)} - ${P(n.totalPeriodeTom).format(E)}`})]}),e.jsxs("div",{children:[e.jsx(T,{children:e.jsx(m,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),e.jsx(F,{size:"small",className:L.redText,children:n.aktuellFeilUtbetaltBeløp})]}),e.jsxs("div",{children:[e.jsx(T,{children:e.jsx(m,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),e.jsx(F,{size:"small",children:n.tidligereVarseltBeløp?n.tidligereVarseltBeløp:e.jsx(m,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),e.jsx(v,{sixteenPx:!0}),e.jsx(X,{name:"behandlePerioderSamlet",label:b.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:a}),e.jsx(v,{sixteenPx:!0}),e.jsx(ve,{merknaderFraBeslutter:s[N.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:e.jsx(H,{perioder:G(r),behandlePerioderSamlet:A,årsaker:i,readOnly:a,kodeverkSamlingFpTilbake:u})})]}),e.jsxs("div",{children:[e.jsx(V,{size:"small",children:e.jsx(m,{id:"FeilutbetalingInfoPanel.Revurdering"})}),e.jsx(v,{sixteenPx:!0}),e.jsxs(B,{gap:"4",children:[e.jsxs("div",{children:[e.jsx(T,{children:e.jsx(m,{id:"FeilutbetalingInfoPanel.Årsaker"})}),n.behandlingÅrsaker&&e.jsx(F,{size:"small",children:n.behandlingÅrsaker.map(f=>{var k;return(k=l[j.BEHANDLING_AARSAK].find(I=>I.kode===f.behandlingArsakType))==null?void 0:k.navn}).join(", ")})]}),n.datoForRevurderingsvedtak&&e.jsxs("div",{children:[e.jsx(T,{children:e.jsx(m,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),e.jsx(F,{size:"small",children:P(n.datoForRevurderingsvedtak).format(E)})]})]}),e.jsx(v,{sixteenPx:!0}),e.jsx(T,{children:e.jsx(m,{id:"FeilutbetalingInfoPanel.Resultat"})}),n.behandlingsresultat&&e.jsx(F,{size:"small",children:(c=l[j.BEHANDLING_AARSAK].find(f=>{var k;return f.kode===((k=n.behandlingsresultat)==null?void 0:k.type)}))==null?void 0:c.navn}),e.jsx(v,{sixteenPx:!0}),e.jsx(T,{children:e.jsx(m,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),n.behandlingsresultat&&e.jsx(F,{size:"small",children:n.behandlingsresultat.konsekvenserForYtelsen.map(f=>{var k;return(k=l[j.KONSEKVENS_FOR_YTELSEN].find(I=>I.kode===f))==null?void 0:k.navn}).join(", ")}),e.jsx(v,{sixteenPx:!0}),e.jsx(T,{children:e.jsx(m,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),n.tilbakekrevingValg&&e.jsx(F,{size:"small",children:(q=u[j.TILBAKEKR_VIDERE_BEH].find(f=>{var k;return f.kode===((k=n.tilbakekrevingValg)==null?void 0:k.videreBehandling)}))==null?void 0:q.navn})]})]}),e.jsx(v,{sixteenPx:!0}),e.jsx("div",{className:L.textarea,children:e.jsx(J,{name:"begrunnelse",label:b.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[_,qe,Ae,ne],maxLength:Y,readOnly:a})}),e.jsx(v,{sixteenPx:!0}),e.jsx(he,{variant:"primary",size:"small",disabled:a||!d.formState.isDirty||d.formState.isSubmitting,loading:d.formState.isSubmitting,children:e.jsx(m,{id:"FeilutbetalingInfoPanel.Confirm"})})]})]})};z.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingInfoPanel",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlePerioderSamlet",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]},name:"data"}],return:{name:"void"}}},description:""}}};const Re={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},Be=ue(Re),C=({feilutbetalingFakta:t,feilutbetalingAarsak:o,fagsakYtelseTypeKode:r,isAksjonspunktOpen:a,isReadOnly:s,kodeverkSamlingFpsak:u,kodeverkSamlingFpTilbake:l,alleMerknaderFraBeslutter:g,submitCallback:y,formData:h,setFormData:b})=>{const n=o.find(p=>p.ytelseType===r);if(!n)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${r}`);return e.jsx(oe,{value:Be,children:e.jsx(z,{feilutbetalingFakta:t,feilutbetalingAarsak:n,alleMerknaderFraBeslutter:g,kodeverkSamlingFpTilbake:l,kodeverkSamlingFpsak:u,submitCallback:y,readOnly:s,hasOpenAksjonspunkter:a,formData:h,setFormData:b})})};C.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingFaktaIndex",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const _e={behandlingFakta:{perioder:[{fom:"2018-01-01",tom:"2018-01-31",belop:1e3},{fom:"2018-02-01",tom:"2018-02-28",belop:5e3},{fom:"2018-03-01",tom:"2018-03-15",belop:100}],totalPeriodeFom:"2019-01-01",totalPeriodeTom:"2019-01-02",aktuellFeilUtbetaltBeløp:1e4,tidligereVarseltBeløp:5e3,behandlingÅrsaker:[{behandlingArsakType:ae.FEIL_I_LOVANDVENDELSE}],behandlingsresultat:{type:ie.INNVILGET,konsekvenserForYtelsen:[U.FORELDREPENGER_OPPHØRER,U.ENDRING_I_BEREGNING]},tilbakekrevingValg:{videreBehandling:se.TILBAKEKR_INNTREKK},datoForRevurderingsvedtak:"2019-01-01"}},Ne=[{ytelseType:$.FORELDREPENGER,hendelseTyper:[{hendelseType:"MEDLEMSKAP",hendelseUndertyper:[]},{hendelseType:"OKONOMI_FEIL",hendelseUndertyper:["OKONOMI_FEIL_TREKK"]},{hendelseType:"BEREGNING_TYPE",hendelseUndertyper:["IKKE_BOSATT"]}]}],Ke=ee,Ue=Z,Vn={title:"fakta-tilbakekreving-feilutbetaling/FeilutbetalingFaktaIndex",component:C,args:{submitCallback:W("button-click"),isReadOnly:!1,setFormData:()=>{},feilutbetalingFakta:_e,feilutbetalingAarsak:Ne,kodeverkSamlingFpsak:Ue,kodeverkSamlingFpTilbake:Ke,fagsakYtelseTypeKode:$.FORELDREPENGER,alleMerknaderFraBeslutter:{},isAksjonspunktOpen:!0}},w={};var S,M,O;w.parameters={...w.parameters,docs:{...(S=w.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(O=(M=w.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const Dn=["Default"];export{w as Default,Dn as __namedExportsOrder,Vn as default};
