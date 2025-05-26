import{a as C}from"./index-B-lxVbXh.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{Y as U,N as z,y as W,D as X}from"./index.es-C30MP-Vj.js";import{a as J}from"./alleKodeverk-LoqTPBoT.js";import{a as Q}from"./alleTilbakekrevingKodeverk-dIUSSyeF.js";import{e as R,I as q,r as Z,a as ee,y as ne,z as L,u as re,$ as N,W as te,X as ae}from"./style-B1grEWaQ.js";import{u as ie,j as se,K as le,b as oe,r as de}from"./index.es-Bs6SSTCM.js";import{u as ue,c as ge,b as pe}from"./index.esm-CkkEN1rj.js";import{o as M,x as B,G as me,l as ke,e as ye}from"./index.es-lC3nHLK-.js";import{T as b}from"./Table-B96Zr42l.js";import{M as u}from"./message-B4eBuUqZ.js";import{V as k,H as I}from"./VStack-xkjQwvKn.js";import"./index-DNHX5htx.js";import"./Theme-C_brBVJK.js";import{L as D,D as T,a as j}from"./Label-CYbek38p.js";import{B as be}from"./Button-Cc809GDC.js";/* empty css              */import"./v4-CtRu48qb.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Checkbox-BaSR81FM.js";import"./omit-B7stZg_p.js";import"./useId-CsAOvYkp.js";import"./ReadOnlyIcon-BUzfiMc5.js";import"./Loader-42dkOmtz.js";import"./Provider-BZs7ODlm.js";import"./useId-SP_zdaIa.js";import"./useFormField-Bu2NUIkp.js";import"./Fieldset-B4jGbpi0.js";import"./Tag-ntoonGP8.js";import"./Textarea-BjE6whUD.js";import"./index-DU09BupE.js";import"./index-7Fg4giie.js";import"./useClientLayoutEffect-pkze6c0k.js";import"./Select-CvyZY3UD.js";import"./ChevronDown-6T9JsqER.js";import"./Radio-Pmn7OwXu.js";import"./useDatepicker-ZRZWX1l5.js";import"./Date.Input-D651xWgA.js";import"./DatePicker-CqOjkUCb.js";import"./Tooltip-BnLM-CWP.js";import"./floating-ui.react-D9M9yXN8.js";import"./Modal-DdoS0OAm.js";import"./XMark-6H9iuGiv.js";import"./Popover-Cvnh_fPv.js";import"./TextField-DY81zaLa.js";import"./Alert-Ja4tf6sE.js";import"./ExclamationmarkTriangleFill-DrBUO71d.js";import"./XMarkOctagonFill-Dr7RQDrl.js";import"./PersonPencilFill-DqunLdn1.js";import"./Box-C3b4VC_S.js";import"./BasePrimitive-gBgyIEwX.js";import"./KeyVerticalFill-DmgzHF4Z.js";var K=(r=>(r.AVKLAR_FAKTA_FOR_FEILUTBETALING="7003",r))(K||{});const A="perioder",ve=(r,g)=>{const t=r.find(a=>a.hendelseType===g);return t!=null&&t.hendelseUndertyper&&t.hendelseUndertyper.length>0?t.hendelseUndertyper:void 0},O=({perioder:r,årsaker:g,readOnly:t,behandlePerioderSamlet:a,kodeverkSamlingFpTilbake:s})=>{const{control:d,watch:l,setValue:p,getValues:v}=ue(),{fields:c}=ge({control:d,name:A}),h=(n,m,o)=>{a&&c.forEach((x,i)=>{m!==i&&(o?v(`${A}.${i}.årsak`)===o&&p(`${A}.${i}.${o}.underÅrsak`,n):p(`${A}.${i}.årsak`,n))})};return e.jsxs(b,{children:[e.jsx(b.Header,{children:e.jsxs(b.Row,{children:[e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Period"})}),e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Hendelse"})}),e.jsx(b.HeaderCell,{scope:"col",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Beløp"})})]})}),e.jsx(b.Body,{children:c.map((n,m)=>{const o=l(`${A}.${m}.årsak`),x=ve(g,o);return e.jsxs(b.Row,{children:[e.jsx(b.DataCell,{children:e.jsx(M,{dateStringFom:n.fom,dateStringTom:n.tom})}),e.jsxs(b.DataCell,{children:[e.jsx(U,{name:`${A}.${m}.årsak`,selectValues:g.map(i=>{var f;return e.jsx("option",{value:i.hendelseType,children:(f=s[q.HENDELSE_TYPE].find(P=>P.kode===i.hendelseType))==null?void 0:f.navn},i.hendelseType)}),validate:[R],disabled:t,onChange:i=>h(i.target.value,m),label:""}),x&&e.jsx(U,{name:`${A}.${m}.${o}.underÅrsak`,selectValues:x.map(i=>{var f;return e.jsx("option",{value:i,children:(f=s[q.HENDELSE_UNDERTYPE].find(P=>P.kode===i))==null?void 0:f.navn},i)}),validate:[R],disabled:t,onChange:i=>h(i.target.value,m,o),label:""})]}),e.jsx(b.DataCell,{align:"right",children:r?e.jsx(B,{rød:!0,beløp:r[m].belop}):null})]},n.id)})})]})};O.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingPerioderFieldArray",props:{perioder:{required:!0,tsType:{name:"signature['perioder']",raw:"FeilutbetalingFakta['behandlingFakta']['perioder']"},description:""},årsaker:{required:!0,tsType:{name:"Array",raw:"FeilutbetalingÅrsak['hendelseTyper']"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},behandlePerioderSamlet:{required:!0,tsType:{name:"boolean"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""}}};const he="_textarea_1pt2d_1",ce={textarea:he},fe=Z(3),Y=4e3,Fe=ee(Y),H=r=>r.behandlingFakta.perioder?[...r.behandlingFakta.perioder].sort(le):[],Te=r=>{const{behandlingFakta:{begrunnelse:g}}=r;return{begrunnelse:se(g),perioder:H(r).map(t=>{const{fom:a,tom:s,feilutbetalingÅrsakDto:d}=t,l={fom:a,tom:s};if(!d)return l;const{hendelseType:p,hendelseUndertype:v}=d;return{...l,årsak:p,[p]:{underÅrsak:v||null}}})}},je=(r,g)=>{const t=r.perioder.map(a=>{const s=g.find(l=>l.hendelseType===a.årsak),d=s!=null&&s.hendelseUndertyper?s.hendelseUndertyper.find(l=>{var p;return l===((p=a[a.årsak])==null?void 0:p.underÅrsak)}):void 0;return{fom:a.fom,tom:a.tom,årsak:{hendelseType:s==null?void 0:s.hendelseType,hendelseUndertype:d}}});return{kode:K.AVKLAR_FAKTA_FOR_FEILUTBETALING,begrunnelse:r.begrunnelse,feilutbetalingFakta:t}},qe=(r,g)=>{const{hendelseTyper:t}=r;return t.sort((a,s)=>{var n,m;const d=((n=g[q.HENDELSE_TYPE].find(o=>o.kode===a.hendelseType))==null?void 0:n.navn)||"",l=((m=g[q.HENDELSE_TYPE].find(o=>o.kode===s.hendelseType))==null?void 0:m.navn)||"",p=d.startsWith("§"),v=l.startsWith("§"),c=p?d.replace(/\D/g,""):d,h=v?l.replace(/\D/g,""):l;return p&&v?c-h:c.localeCompare(h)})},G=({hasOpenAksjonspunkter:r,feilutbetalingAarsak:g,feilutbetalingFakta:t,readOnly:a,alleMerknaderFraBeslutter:s,kodeverkSamlingFpTilbake:d,kodeverkSamlingFpsak:l,formData:p,setFormData:v,submitCallback:c})=>{var f,P;const h=ie(),n=t.behandlingFakta,m=Te(t),o=pe({defaultValues:p||m}),x=o.watch("behandlePerioderSamlet")||!1,i=qe(g,d);return e.jsxs(k,{gap:"4",children:[r&&e.jsx(me,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Aksjonspunkt"})}),e.jsx(z,{formMethods:o,onSubmit:F=>c(je(F,i)),setDataOnUnmount:v,children:e.jsxs(k,{gap:"4",children:[e.jsxs(I,{gap:"10",wrap:!0,children:[e.jsxs(k,{gap:"4",children:[e.jsx(D,{size:"small",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Feilutbetaling"})}),e.jsxs(I,{justify:"space-between",children:[e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling"})}),e.jsx(j,{size:"small",children:e.jsx(M,{dateStringFom:n.totalPeriodeFom,dateStringTom:n.totalPeriodeTom})})]}),e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.FeilutbetaltBeløp"})}),e.jsx(j,{size:"small",children:e.jsx(B,{rød:!0,beløp:n.aktuellFeilUtbetaltBeløp})})]}),e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.TidligereVarseltBeløp"})}),e.jsx(j,{size:"small",children:n.tidligereVarseltBeløp?e.jsx(B,{beløp:n.tidligereVarseltBeløp}):e.jsx(u,{id:"FeilutbetalingInfoPanel.IkkeVarslet"})})]})]}),e.jsx(W,{name:"behandlePerioderSamlet",label:h.formatMessage({id:"FeilutbetalingInfoPanel.BehandlePerioderSamlet"}),readOnly:a}),e.jsx(ke,{merknaderFraBeslutter:s[K.AVKLAR_FAKTA_FOR_FEILUTBETALING],withoutBorder:!0,children:e.jsx(O,{perioder:H(t),behandlePerioderSamlet:x,årsaker:i,readOnly:a,kodeverkSamlingFpTilbake:d})})]}),e.jsxs(k,{gap:"4",children:[e.jsx(D,{size:"small",children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Revurdering"})}),e.jsxs(I,{gap:"4",children:[e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Årsaker"})}),n.behandlingÅrsaker&&e.jsx(j,{size:"small",children:n.behandlingÅrsaker.map(F=>{var y;return(y=l[q.BEHANDLING_AARSAK].find(E=>E.kode===F.behandlingArsakType))==null?void 0:y.navn}).join(", ")})]}),n.datoForRevurderingsvedtak&&e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.DatoForRevurdering"})}),e.jsx(j,{size:"small",children:e.jsx(ye,{dateString:n.datoForRevurderingsvedtak})})]})]}),e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Resultat"})}),n.behandlingsresultat&&e.jsx(j,{size:"small",children:(f=l[q.BEHANDLING_AARSAK].find(F=>{var y;return F.kode===((y=n.behandlingsresultat)==null?void 0:y.type)}))==null?void 0:f.navn})]}),e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Konsekvens"})}),n.behandlingsresultat&&e.jsx(j,{size:"small",children:n.behandlingsresultat.konsekvenserForYtelsen.map(F=>{var y;return(y=l[q.KONSEKVENS_FOR_YTELSEN].find(E=>E.kode===F))==null?void 0:y.navn}).join(", ")})]}),e.jsxs(k,{gap:"1",children:[e.jsx(T,{children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Tilbakekrevingsvalg"})}),n.tilbakekrevingValg&&e.jsx(j,{size:"small",children:(P=d[q.TILBAKEKR_VIDERE_BEH].find(F=>{var y;return F.kode===((y=n.tilbakekrevingValg)==null?void 0:y.videreBehandling)}))==null?void 0:P.navn})]})]})]}),e.jsx("div",{className:ce.textarea,children:e.jsx(X,{name:"begrunnelse",label:h.formatMessage({id:"FeilutbetalingInfoPanel.Begrunnelse"}),validate:[R,fe,Fe,ne],maxLength:Y,readOnly:a})}),e.jsx("div",{children:e.jsx(be,{variant:"primary",size:"small",disabled:a||!o.formState.isDirty||o.formState.isSubmitting,loading:o.formState.isSubmitting,children:e.jsx(u,{id:"FeilutbetalingInfoPanel.Confirm"})})})]})})]})};G.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingInfoPanel",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlePerioderSamlet",value:{name:"boolean",required:!1}}]}},{name:"FormValues"}]},name:"data"}],return:{name:"void"}}},description:""}}};const Ae={"FeilutbetalingInfoPanel.Revurdering":"Revurdering","FeilutbetalingInfoPanel.Feilutbetaling":"Feilutbetaling","FeilutbetalingInfoPanel.Årsaker":"Årsak(er) til revurdering","FeilutbetalingInfoPanel.DatoForRevurdering":"Dato for revurderingsvedtak","FeilutbetalingInfoPanel.Konsekvens":"Konsekvens","FeilutbetalingInfoPanel.Tilbakekrevingsvalg":"Tilbakekrevingsvalg","FeilutbetalingInfoPanel.PeriodeMedFeilutbetaling":"Periode med feilutbetaling","FeilutbetalingInfoPanel.FeilutbetaltBeløp":"Feilutbetalt beløp totalt","FeilutbetalingInfoPanel.TidligereVarseltBeløp":"Tidligere varslet beløp","FeilutbetalingInfoPanel.Period":"Period","FeilutbetalingInfoPanel.Hendelse":"Hendelse","FeilutbetalingInfoPanel.Beløp":"Feilutbetalt beløp","FeilutbetalingInfoPanel.Resultat":"Resultat","FeilutbetalingInfoPanel.Begrunnelse":"Forklar årsaken(e) til feilutbetalingen","FeilutbetalingInfoPanel.Aksjonspunkt":"Kontroller at korrekt hendelse er satt","FeilutbetalingInfoPanel.Confirm":"Bekreft og fortsett","FeilutbetalingInfoPanel.IkkeVarslet":"Ikke varslet","FeilutbetalingInfoPanel.BehandlePerioderSamlet":"Behandle alle perioder samlet"},Pe=de(Ae),$=({feilutbetalingFakta:r,feilutbetalingAarsak:g,fagsakYtelseTypeKode:t,isAksjonspunktOpen:a,isReadOnly:s,kodeverkSamlingFpsak:d,kodeverkSamlingFpTilbake:l,alleMerknaderFraBeslutter:p,submitCallback:v,formData:c,setFormData:h})=>{const n=g.find(m=>m.ytelseType===t);if(!n)throw Error(`Mangler feilutbetalingsårsak for ytelsetype ${t}`);return e.jsx(oe,{value:Pe,children:e.jsx(G,{feilutbetalingFakta:r,feilutbetalingAarsak:n,alleMerknaderFraBeslutter:p,kodeverkSamlingFpTilbake:l,kodeverkSamlingFpsak:d,submitCallback:v,readOnly:s,hasOpenAksjonspunkter:a,formData:c,setFormData:h})})};$.__docgenInfo={description:"",methods:[],displayName:"FeilutbetalingFaktaIndex",props:{feilutbetalingFakta:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},isAksjonspunktOpen:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""}}};const xe={behandlingFakta:{perioder:[{fom:"2018-01-01",tom:"2018-01-31",belop:1e3},{fom:"2018-02-01",tom:"2018-02-28",belop:5e3},{fom:"2018-03-01",tom:"2018-03-15",belop:100}],totalPeriodeFom:"2019-01-01",totalPeriodeTom:"2019-01-02",aktuellFeilUtbetaltBeløp:1e4,tidligereVarseltBeløp:5e3,behandlingÅrsaker:[{behandlingArsakType:ae.FEIL_I_LOVANDVENDELSE}],behandlingsresultat:{type:te.INNVILGET,konsekvenserForYtelsen:[N.FORELDREPENGER_OPPHØRER,N.ENDRING_I_BEREGNING]},tilbakekrevingValg:{videreBehandling:re.TILBAKEKR_INNTREKK},datoForRevurderingsvedtak:"2019-01-01"}},we=[{ytelseType:L.FORELDREPENGER,hendelseTyper:[{hendelseType:"MEDLEMSKAP",hendelseUndertyper:[]},{hendelseType:"OKONOMI_FEIL",hendelseUndertyper:["OKONOMI_FEIL_TREKK"]},{hendelseType:"BEREGNING_TYPE",hendelseUndertyper:["IKKE_BOSATT"]}]}],Ee=Q,Ie=J,Rn={component:$,args:{submitCallback:C("button-click"),isReadOnly:!1,setFormData:()=>{},feilutbetalingFakta:xe,feilutbetalingAarsak:we,kodeverkSamlingFpsak:Ie,kodeverkSamlingFpTilbake:Ee,fagsakYtelseTypeKode:L.FORELDREPENGER,alleMerknaderFraBeslutter:{},isAksjonspunktOpen:!0}},w={};var _,V,S;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:"{}",...(S=(V=w.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};const Bn=["Default"];export{w as Default,Bn as __namedExportsOrder,Rn as default};
