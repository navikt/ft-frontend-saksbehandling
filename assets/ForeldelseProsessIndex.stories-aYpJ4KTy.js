import{a as Me}from"./index-B-lxVbXh.js";import{m as b,S as pe,e as B,a as Oe,o as Ie,N as Ve,O as ee,b as Be,H as Ne,D as Le,h as Z,c as ke,d as _e}from"./style-CDo75Bwh.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as W,E as L,L as Ue,S as Ce,C as Ke,d as Ge,b as ze,P as He,r as $e}from"./index.es-DlflYTfv.js";import{r as l}from"./index-DNHX5htx.js";import{d as y}from"./dayjs.min-Cke173X9.js";import{$ as ye,N as Ze,M as We,A as re,D as Ye}from"./index.es-By6D3vxG.js";import{M as p,a as Xe,W as Je}from"./index.es-EHDFgqo0.js";import{b as fe}from"./index.esm-FZjZzVNN.js";import{V as x,H as O}from"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import{B as D}from"./Button-Cc809GDC.js";import{M as K}from"./Modal-OqvqWSjt.js";import{H as be,L as te,a as _}from"./Label-CYbek38p.js";import{A as Qe}from"./Alert-Ja4tf6sE.js";import{S as ne,T as J,a as er,b as rr,c as nr,d as tr,e as ar,f as ir}from"./Timeline-BxrrVreS.js";import{S as sr}from"./Scissors-slXG3Pr9.js";import{S as ve,e as ce}from"./DatePicker-CrEkBviX.js";import{S as or}from"./XMark-6H9iuGiv.js";import{a as lr,S as dr}from"./SilhouetteFill-BavFPiUa.js";import{B as ur}from"./Box-C3b4VC_S.js";/* empty css              */import"./v4-CtRu48qb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Checkbox-BaSR81FM.js";import"./omit-B7stZg_p.js";import"./useId-CsAOvYkp.js";import"./ReadOnlyIcon-BUzfiMc5.js";import"./Loader-42dkOmtz.js";import"./Provider-BZs7ODlm.js";import"./useId-SP_zdaIa.js";import"./useFormField-Bu2NUIkp.js";import"./Fieldset-B4jGbpi0.js";import"./Tag-ntoonGP8.js";import"./Textarea-BjE6whUD.js";import"./index-DU09BupE.js";import"./index-7Fg4giie.js";import"./useClientLayoutEffect-pkze6c0k.js";import"./Select-CvyZY3UD.js";import"./ChevronDown-6T9JsqER.js";import"./Radio-Pmn7OwXu.js";import"./useDatepicker-Bm8fLnqa.js";import"./Date.Input-D651xWgA.js";import"./TextField-DY81zaLa.js";import"./PersonPencilFill-DqunLdn1.js";import"./KeyVerticalFill-DmgzHF4Z.js";import"./Checkmark-DkINtRdf.js";import"./BasePrimitive-gBgyIEwX.js";import"./floating-ui.react-CQaPAoM5.js";import"./ExclamationmarkTriangleFill-DrBUO71d.js";import"./XMarkOctagonFill-Dr7RQDrl.js";import"./Popover-D6iHV8xT.js";var Y=(r=>(r.VURDER_FORELDELSE="5003",r))(Y||{});const mr=Oe(3),gr=Ie(1500),pr=r=>r!==b.UDEFINERT?r:void 0,kr=r=>r.foreldet?r.foreldet:pr(r.foreldelseVurderingType),yr=r=>({...r,foreldet:kr(r)}),qe=({skjulPeriode:r,readOnly:n,periode:a,oppdaterPeriode:d,kodeverkSamlingFpTilbake:q})=>{const m=W(),o=fe({defaultValues:yr(a)}),v=o.watch("foreldet"),c=v&&v===b.FORELDET,T=v&&v===b.TILLEGGSFRIST,s=q[pe.FORELDELSE_VURDERING].filter(g=>g.kode!==b.IKKE_VURDERT);return e.jsx(ye,{formMethods:o,onSubmit:g=>d(g),children:e.jsxs(x,{gap:"4",children:[e.jsx(Ze,{name:"begrunnelse",label:m.formatMessage({id:"ForeldelsePeriodeForm.Vurdering"}),validate:[B,mr,gr,Ve],maxLength:1500,readOnly:n}),e.jsxs(O,{gap:"10",children:[e.jsx(We,{name:"foreldet",label:e.jsx(p,{id:"ForeldelsePeriodeForm.RadioGroup.Foreldet"}),validate:[B],radios:s.map(g=>({label:g.navn,value:g.kode})),isReadOnly:n}),e.jsxs(x,{gap:"5",children:[(c||T)&&e.jsx(re,{name:"foreldelsesfrist",label:m.formatMessage({id:"ForeldelsePeriodeForm.Foreldelsesfrist"}),validate:[B,ee],isReadOnly:n}),T&&e.jsx(re,{name:"oppdagelsesDato",label:m.formatMessage({id:"ForeldelsePeriodeForm.OppdagelsesDato"}),validate:[B,ee,Be],isReadOnly:n,fromDate:y("1970-01-01").toDate(),toDate:y().toDate()})]})]}),e.jsxs(O,{gap:"4",children:[e.jsx(D,{size:"small",variant:"primary",disabled:!o.formState.isDirty||o.formState.isSubmitting||n,loading:o.formState.isSubmitting,children:e.jsx(p,{id:"ForeldelsePeriodeForm.Oppdater"})}),e.jsx(D,{size:"small",variant:"secondary",onClick:r,type:"button",children:e.jsx(p,{id:"ForeldelsePeriodeForm.Avbryt"})})]})]})})};qe.__docgenInfo={description:"",methods:[],displayName:"ForeldelsePeriodeForm",props:{periode:{required:!0,tsType:{name:"intersection",raw:`Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}> &
  FeilutbetalingPeriode`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}`,signature:{properties:[{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"foreldet",value:{name:"string",required:!1}},{key:"erSplittet",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"foreldelseVurderingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"foreldelsesfrist",value:{name:"Date",required:!1}},{key:"oppdagelsesDato",value:{name:"Date",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}>`}]},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},oppdaterPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"intersection",raw:`Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}> &
  FeilutbetalingPeriode`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}`,signature:{properties:[{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"foreldet",value:{name:"string",required:!1}},{key:"erSplittet",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"foreldelseVurderingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"foreldelsesfrist",value:{name:"Date",required:!1}},{key:"oppdagelsesDato",value:{name:"Date",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}>`}]},name:"values"}],return:{name:"void"}}},description:""},skjulPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const fr="_button_8q57x_1",br="_cancelButton_8q57x_5",ie={button:fr,cancelButton:br},vr=(r,n)=>a=>a&&(Ne(a)(y(r.tom.toString()).subtract(1,"day"))||Le(a)(r.fom))?n.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,cr=(r,n)=>{const a=y(r.forstePeriodeTomDato).add(1,"days"),d={fom:n.fom,tom:r.forstePeriodeTomDato},q={fom:a.format(Ue),tom:n.tom};return{forstePeriode:d,andrePeriode:q}},Te=({periodeData:r,showModal:n,cancelEvent:a,finnesBelopMed0Verdi:d,splitPeriod:q})=>{const m=W(),o=fe();return e.jsx(ye,{formMethods:o,onSubmit:v=>q(cr(v,r)),children:e.jsxs(K,{width:"medium",open:n,"aria-label":m.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:a,children:[e.jsx(K.Header,{children:e.jsx(be,{size:"small",children:e.jsx(p,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(K.Body,{children:e.jsxs(x,{gap:"4",children:[e.jsxs("div",{children:[e.jsx(te,{size:"small",children:e.jsx(p,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(_,{size:"small",children:`${y(r.fom.toString()).format(L)} - ${y(r.tom.toString()).format(L)}`})]}),e.jsx(re,{name:"forstePeriodeTomDato",label:e.jsx(p,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[B,ee,vr(r,m)],fromDate:y(r.fom).toDate(),toDate:y(r.tom).toDate()}),d&&e.jsx(Qe,{variant:"error",children:e.jsx(p,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(K.Footer,{children:[e.jsx(D,{size:"small",variant:"primary",className:ie.button,disabled:!o.formState.isDirty,children:e.jsx(p,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(D,{size:"small",variant:"secondary",onClick:a,className:ie.cancelButton,type:"button",children:e.jsx(p,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};Te.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},finnesBelopMed0Verdi:{required:!0,tsType:{name:"boolean"},description:""},splitPeriod:{required:!0,tsType:{name:"signature",type:"function",raw:"(perioder: PerioderData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  forstePeriode: Periode;
  andrePeriode: Periode;
}`,signature:{properties:[{key:"forstePeriode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"andrePeriode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const qr="_margin_wnej3_37",Q={margin:qr},Tr=!1,je=({valgtPeriode:r,beregnBelop:n,behandlingUuid:a,oppdaterSplittedePerioder:d,setNestePeriode:q,setForrigePeriode:m,readOnly:o,lukkPeriode:v})=>{const c=W(),[T,s]=l.useState(!1),[g,k]=l.useState(!1),i=R=>{s(!0),R.preventDefault()},E=()=>{s(!1)},t=R=>{k(!1);const A={belop:r.feilutbetaling,fom:R.forstePeriode.fom,tom:R.forstePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "},w={belop:r.feilutbetaling,fom:R.andrePeriode.fom,tom:R.andrePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "};n({behandlingUuid:a,perioder:[A,w]}).then(M=>{const{perioder:j}=M;if(j.some(I=>I.belop===0))k(!0);else{const I={fom:A.fom,tom:A.tom,feilutbetaling:j[0].belop},S={fom:w.fom,tom:w.tom,feilutbetaling:j[1].belop};E(),d([I,S])}})};return e.jsxs(O,{children:[e.jsxs(te,{size:"small",children:[e.jsx(p,{id:"PeriodeController.Detaljer"}),Tr]}),!o&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),e.jsx(D,{className:Q.margin,size:"xsmall",icon:e.jsx(sr,{"aria-hidden":!0}),onClick:i,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(p,{id:"PeriodeController.DelOppPerioden"})})]}),T&&e.jsx(Te,{cancelEvent:E,showModal:T,periodeData:r,splitPeriod:t,finnesBelopMed0Verdi:g}),e.jsx(ne,{}),e.jsx(D,{className:Q.margin,size:"xsmall",icon:e.jsx(ve,{"aria-hidden":!0}),onClick:m,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(p,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(D,{className:Q.margin,size:"xsmall",icon:e.jsx(ce,{"aria-hidden":!0}),onClick:q,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(p,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(D,{size:"xsmall",icon:e.jsx(or,{"aria-hidden":!0}),onClick:v,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};je.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: { behandlingUuid: string; perioder: PeriodeMedBelop[] }) => Promise<any>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ behandlingUuid: string; perioder: PeriodeMedBelop[] }",signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"belop",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"PeriodeMedBelop[]",required:!0}}]}},name:"data"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},oppdaterSplittedePerioder:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PeriodeMedFeilutbetaling[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  feilutbetaling: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}}]}}],raw:"PeriodeMedFeilutbetaling[]"},name:"data"}],return:{name:"void"}}},description:""},setNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent | React.MouseEvent) => void",signature:{arguments:[{type:{name:"union",raw:"React.KeyboardEvent | React.MouseEvent",elements:[{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"},{name:"ReactMouseEvent",raw:"React.MouseEvent"}]},name:"event"}],return:{name:"void"}}},description:""},setForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent | React.MouseEvent) => void",signature:{arguments:[{type:{name:"union",raw:"React.KeyboardEvent | React.MouseEvent",elements:[{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"},{name:"ReactMouseEvent",raw:"React.MouseEvent"}]},name:"event"}],return:{name:"void"}}},description:""},valgtPeriode:{required:!0,tsType:{name:"intersection",raw:`Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}> &
  FeilutbetalingPeriode`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}`,signature:{properties:[{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"foreldet",value:{name:"string",required:!1}},{key:"erSplittet",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"foreldelseVurderingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"foreldelsesfrist",value:{name:"Date",required:!1}},{key:"oppdagelsesDato",value:{name:"Date",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}>`}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const jr="_infoSummary_ythle_1",hr="_positivNumber_ythle_7",Pr="_redNumber_ythle_11",Dr="_resultName_ythle_16",G={infoSummary:jr,positivNumber:hr,redNumber:Pr,resultName:Dr},he=({fom:r,tom:n,feilutbetaling:a})=>{const d=Ce(r,n);return e.jsxs(x,{gap:"2",className:G.infoSummary,children:[e.jsxs(O,{children:[e.jsx(te,{size:"small",children:`${y(r).format(L)} - ${y(n).format(L)}`}),e.jsx(ne,{}),e.jsx(_,{size:"small",children:d.formattedString})]}),e.jsx(O,{gap:"4",children:e.jsxs(_,{size:"small",className:G.resultName,children:[e.jsx(p,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:a?G.redNumber:G.positivNumber,children:Ke(a)})]})})]})};he.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""}}};const Rr="_margin_1wl4t_1",z={margin:Rr},Fr=r=>{const n=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":n},wr=(r=[])=>r.map(n=>({id:n.id,fom:n.fom,tom:n.tom,status:Fr(n)})),Sr=r=>r===Z.MOR||r===Z.MEDMOR?e.jsx(lr,{width:20,height:20,color:"var(--a-red-200)"}):r===Z.FAR?e.jsx(dr,{width:20,height:20,color:"var(--a-blue-600)"}):e.jsx(nr,{width:20,height:20}),xr={danger:e.jsx(ir,{}),success:e.jsx(ar,{}),warning:e.jsx(tr,{})},Pe=({perioder:r,setPeriode:n,valgtPeriode:a,relasjonsRolleType:d,relasjonsRolleTypeKodeverk:q})=>{var w;const m=W(),o=l.useMemo(()=>wr(r),[r]),v=l.useCallback(f=>{const M=r.find(j=>j.id===f);M&&n(M)},[r,n]),c=y(o[0].fom),T=y(o[o.length-1].tom),[s,g]=l.useState(c),[k,i]=l.useState(T),E=l.useCallback(()=>{s.subtract(1,"month").isBefore(c)||(g(s.subtract(1,"month")),i(k.subtract(1,"month")))},[s,k,c]),t=l.useCallback(()=>{k.add(1,"month").isAfter(T)||(g(s.add(1,"month")),i(k.add(1,"month")))},[s,k,T]),R=l.useCallback(()=>{s.add(3,"month").isAfter(k)||(g(s.add(1,"month")),i(k.subtract(1,"month")))},[s,k]),A=l.useCallback(()=>{k.add(1,"month").diff(s.subtract(1,"month"),"months")<36&&(g(s.subtract(1,"month")),i(k.add(1,"month")))},[s,k]);return e.jsxs(x,{gap:"4",children:[e.jsx(J,{startDate:s.toDate(),endDate:k.add(1,"days").toDate(),children:e.jsx(J.Row,{label:((w=q.find(f=>f.kode===d))==null?void 0:w.navn)||"-",icon:Sr(d),children:o.map(f=>e.jsx(J.Period,{start:y(f.fom).toDate(),end:y(f.tom).toDate(),status:f.status,onSelectPeriod:()=>v(f.id),isActive:(a==null?void 0:a.id)===f.id,icon:xr[f.status],"aria-controls":"panel-tilbakekreving-foreldelse",id:f.id.toString()},f.id))})}),e.jsxs(O,{justify:"end",children:[e.jsx(D,{className:z.margin,size:"small",icon:e.jsx(er,{"aria-hidden":!0}),onClick:R,variant:"primary-neutral",type:"button",title:m.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(D,{className:z.margin,size:"small",icon:e.jsx(rr,{"aria-hidden":!0}),onClick:A,variant:"primary-neutral",type:"button",title:m.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(D,{className:z.margin,size:"small",icon:e.jsx(ve,{"aria-hidden":!0}),onClick:E,variant:"primary-neutral",type:"button",title:m.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(D,{className:z.margin,size:"small",icon:e.jsx(ce,{"aria-hidden":!0}),onClick:t,variant:"primary-neutral",type:"button",title:m.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};Pe.__docgenInfo={description:`TilbakekrevingTimeLine

Masserer data og populerer felten samt formatterar tidslinjen for tilbakekreving`,methods:[],displayName:"TilbakekrevingTimeline",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"isAksjonspunktOpen",value:{name:"boolean",required:!0}},{key:"isGodkjent",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}>`}],raw:"TidslinjePeriode[]"},description:""},valgtPeriode:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"isAksjonspunktOpen",value:{name:"boolean",required:!0}},{key:"isGodkjent",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}>`},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},setPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(periode?: TidslinjePeriode) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"isAksjonspunktOpen",value:{name:"boolean",required:!0}},{key:"isGodkjent",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  id: number;
  fom: string;
  tom: string;
  isAksjonspunktOpen: boolean;
  isGodkjent: boolean;
}>`},name:"periode"}],return:{name:"void"}}},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const se=(r,n)=>y(r.fom).diff(y(n.fom)),Er=()=>y().subtract(30,"months").format(L),Ar=r=>r?[e.jsx(p,{id:`ForeldelseForm.AksjonspunktHelpText.${r.definisjon}`,values:{dato:Er()}},"vurderForeldelse")]:[],N=r=>(!r.foreldelseVurderingType||r.foreldelseVurderingType===b.UDEFINERT)&&(!r.begrunnelse||!!r.erSplittet),Mr=(r=[])=>r.map((n,a)=>({fom:n.fom,tom:n.tom,isAksjonspunktOpen:N(n),isGodkjent:b.FORELDET!==n.foreldet&&b.UDEFINERT!==n.foreldet,id:a})),Or=r=>({foreldelsePerioder:r.map(a=>({fraDato:a.fom,tilDato:a.tom,begrunnelse:a.begrunnelse,foreldelseVurderingType:a.foreldet,foreldelsesfrist:a.foreldelsesfrist,oppdagelsesDato:a.oppdagelsesDato})),kode:Y.VURDER_FORELDELSE}),Ir=(r,n)=>r.fom<n.fom?-1:r.fom>n.fom?1:0,Vr=r=>[...r].sort(Ir).map(n=>({...n,feilutbetaling:n.belop,foreldet:n.foreldelseVurderingType===b.UDEFINERT?void 0:n.foreldelseVurderingType,begrunnelse:ze(n.begrunnelse)})),De=({submitCallback:r,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:a,aksjonspunkt:d,alleMerknaderFraBeslutter:q,perioderForeldelse:m,readOnly:o,kodeverkSamlingFpTilbake:v,beregnBelop:c,behandlingUuid:T,formData:s,setFormData:g})=>{const k=l.useMemo(()=>Vr(m.perioder),[m.perioder]),[i,E]=l.useState(s||k),[t,R]=l.useState(i==null?void 0:i.find(N)),[A,w]=l.useState(!1),[f,M]=l.useState(!!s),j=u=>{const h=u?i.find(P=>P.fom===u.fom&&P.tom===u.tom):void 0;R(h)},ae=l.useCallback(()=>{const u=i.findIndex(P=>P.fom===(t==null?void 0:t.fom)&&P.tom===(t==null?void 0:t.tom)),h=u===i.length-1?u:u+1;j(i[h])},[i,t]),I=l.useCallback(()=>{const u=i.findIndex(P=>P.fom===(t==null?void 0:t.fom)&&P.tom===(t==null?void 0:t.tom)),h=u===0?u:u-1;j(i[h])},[i,t]),S=l.useCallback(()=>{j(void 0)},[t,i]),Fe=l.useCallback(u=>{const h=Ge(u,"erSplittet"),C=i.filter(F=>F.fom!==h.fom&&F.tom!==h.tom).concat(h).sort(se);E(C),g(C),M(!0),S();const V=C.find(N);V&&j(V)},[i,S,N]),we=l.useCallback(u=>{const h=i.find(F=>F.fom===(t==null?void 0:t.fom)&&F.tom===(t==null?void 0:t.tom));if(h===void 0)throw new TypeError(`Periode skal alltid finnes. Fom: ${t==null?void 0:t.fom} Tom: ${t==null?void 0:t.tom}`);const P=u.map(F=>({...h,...F,erSplittet:!0})),V=i.filter(F=>F.fom!==(t==null?void 0:t.fom)&&F.tom!==(t==null?void 0:t.tom)).concat(P).sort(se);E(V),g(V),M(!0),S(),j(P[0])},[i,t,S,N]),Se=l.useCallback(()=>{w(!0),r(Or(i))},[i]),xe=q[Y.VURDER_FORELDELSE],X=Mr(i),Ee=d&&d.status===ke.OPPRETTET,Ae=X.every(u=>!u.isAksjonspunktOpen),U=t?X.find(u=>u.fom===t.fom&&u.tom===t.tom):void 0;return e.jsx(Xe,{merknaderFraBeslutter:xe,withoutBorder:!0,children:e.jsxs(x,{gap:"4",children:[e.jsx(be,{size:"small",children:e.jsx(p,{id:"ForeldelseForm.Foreldelse"})}),!d&&e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(p,{id:"ForeldelseForm.Foreldelsesloven"})}),e.jsx(_,{children:e.jsx(p,{id:"ForeldelseForm.AutomatiskVurdert"})})]}),i&&d&&e.jsxs(x,{gap:"4",children:[Ee&&e.jsx(Je,{children:Ar(d)}),e.jsx(Pe,{perioder:X,valgtPeriode:U,setPeriode:j,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:a}),t&&e.jsx("div",{id:"panel-tilbakekreving-foreldelse","aria-controls":U==null?void 0:U.id.toString(),children:e.jsx(ur,{borderWidth:"1",padding:"4",children:e.jsxs(x,{gap:"4",children:[e.jsx(je,{setNestePeriode:ae,setForrigePeriode:I,valgtPeriode:t,readOnly:o,oppdaterSplittedePerioder:we,behandlingUuid:T,beregnBelop:c,lukkPeriode:S}),e.jsx(he,{feilutbetaling:t.feilutbetaling,fom:t.fom,tom:t.tom}),e.jsx(qe,{periode:t,oppdaterPeriode:Fe,skjulPeriode:S,readOnly:o,kodeverkSamlingFpTilbake:v},t.fom)]})})}),e.jsx(O,{children:e.jsx(Ye,{isReadOnly:o,isDirty:f,isSubmittable:!t&&Ae,onClick:Se,isSubmitting:A})})]})]})})};De.__docgenInfo={description:"",methods:[],displayName:"ForeldelseForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`},description:""},perioderForeldelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder: FeilutbetalingPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"foreldelseVurderingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"foreldelsesfrist",value:{name:"Date",required:!1}},{key:"oppdagelsesDato",value:{name:"Date",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}>`}],raw:"FeilutbetalingPeriode[]",required:!0}}]}}],raw:`Readonly<{
  perioder: FeilutbetalingPeriode[];
}>`},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: VurderForeldelseAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  foreldelsePerioder: {
    fraDato: string;
    tilDato: string;
    foreldelseVurderingType?: string;
    begrunnelse?: string;
  }[];
} & AksjonspunktTilBekreftelse<ForeldelseAksjonspunktCodes.VURDER_FORELDELSE>`,elements:[{name:"signature",type:"object",raw:`{
  foreldelsePerioder: {
    fraDato: string;
    tilDato: string;
    foreldelseVurderingType?: string;
    begrunnelse?: string;
  }[];
}`,signature:{properties:[{key:"foreldelsePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fraDato: string;
  tilDato: string;
  foreldelseVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"fraDato",value:{name:"string",required:!0}},{key:"tilDato",value:{name:"string",required:!0}},{key:"foreldelseVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`{
  fraDato: string;
  tilDato: string;
  foreldelseVurderingType?: string;
  begrunnelse?: string;
}[]`,required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: { behandlingUuid: string; perioder: PeriodeMedBelop[] }) => Promise<any>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ behandlingUuid: string; perioder: PeriodeMedBelop[] }",signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"belop",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:"PeriodeMedBelop[]",required:!0}}]}},name:"data"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},formData:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}> &
  FeilutbetalingPeriode`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}`,signature:{properties:[{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"foreldet",value:{name:"string",required:!1}},{key:"erSplittet",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"foreldelseVurderingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"foreldelsesfrist",value:{name:"Date",required:!1}},{key:"oppdagelsesDato",value:{name:"Date",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}>`}]}],raw:"ForeldelsesresultatActivity[]"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForeldelsesresultatActivity[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}> &
  FeilutbetalingPeriode`,elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}`,signature:{properties:[{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"foreldet",value:{name:"string",required:!1}},{key:"erSplittet",value:{name:"boolean",required:!1}}]}}],raw:`Readonly<{
  feilutbetaling: number;
  foreldet?: string;
  erSplittet?: boolean;
}>`},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"foreldelseVurderingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"foreldelsesfrist",value:{name:"Date",required:!1}},{key:"oppdagelsesDato",value:{name:"Date",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}>`}]}],raw:"ForeldelsesresultatActivity[]"},name:"data"}],return:{name:"void"}}},description:""}}};const Br={"ForeldelsePeriodeForm.Vurdering":"Vurdering","ForeldelsePeriodeForm.RadioGroup.Foreldet":"Vurder om perioden er foreldet","ForeldelsePeriodeForm.Oppdater":"Oppdater","ForeldelsePeriodeForm.Avbryt":"Avbryt","ForeldelsePeriodeForm.Foreldelsesfrist":"Foreldelsesfrist","ForeldelsePeriodeForm.OppdagelsesDato":"Dato for når feilutbetaling ble oppdaget","ForeldelseForm.Foreldelsesloven":"Foreldelsesloven §§ 2 og 3","ForeldelseForm.AutomatiskVurdert":"Automatisk vurdert","ForeldelseForm.AksjonspunktHelpText.5003":"Perioden før {dato} kan være foreldet. Del opp perioden ved behov og fastsett foreldelse","ForeldelseForm.Foreldelse":"Foreldelse","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","SubmitButton.ConfirmInformation":"Bekreft og fortsett","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Nr=$e(Br),Re=({perioderForeldelse:r,relasjonsRolleType:n,beregnBelop:a,behandling:d,aksjonspunkter:q,isReadOnly:m,kodeverkSamlingFpTilbake:o,submitCallback:v,alleMerknaderFraBeslutter:c,formData:T,setFormData:s,relasjonsRolleTypeKodeverk:g})=>e.jsx(He,{value:Nr,children:e.jsx(De,{behandlingUuid:d.uuid,perioderForeldelse:r,submitCallback:v,readOnly:m,aksjonspunkt:q[0],relasjonsRolleType:n,relasjonsRolleTypeKodeverk:g,alleMerknaderFraBeslutter:c,kodeverkSamlingFpTilbake:o,beregnBelop:a,formData:T,setFormData:s})});Re.__docgenInfo={description:"",methods:[],displayName:"ForeldelseProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: string;
  type: string;
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
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}}]}},description:""},perioderForeldelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder: FeilutbetalingPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}},{key:"foreldelseVurderingType",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"foreldelsesfrist",value:{name:"Date",required:!1}},{key:"oppdagelsesDato",value:{name:"Date",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  belop: number;
  foreldelseVurderingType: string;
  begrunnelse?: string;
  foreldelsesfrist?: Date;
  oppdagelsesDato?: Date;
}>`}],raw:"FeilutbetalingPeriode[]",required:!0}}]}}],raw:`Readonly<{
  perioder: FeilutbetalingPeriode[];
}>`},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params?: any, keepData?: boolean) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Lr={perioder:[{fom:"2019-01-01",tom:"2019-01-31",belop:1e3,begrunnelse:"Foreldet",foreldelseVurderingType:b.FORELDET,foreldelsesfrist:"2020-04-01"},{fom:"2019-03-01",tom:"2019-03-31",belop:3e3,foreldelseVurderingType:b.UDEFINERT},{fom:"2019-02-01",tom:"2019-02-28",belop:3e3,begrunnelse:"Over foreldelsesfrist, med tillegsfrist brukes",foreldelseVurderingType:b.TILLEGGSFRIST,foreldelsesfrist:"2020-04-01",oppdagelsesDato:"2019-11-01"},{fom:"2019-04-01",tom:"2019-04-30",belop:4e3,foreldelseVurderingType:b.UDEFINERT}]},_r={[pe.FORELDELSE_VURDERING]:[{kode:b.FORELDET,navn:"Foreldet",kodeverk:"FORELDELSE_VURDERING"},{kode:b.TILLEGGSFRIST,navn:"Ikke foreldet, med tilleggsfrist",kodeverk:"FORELDELSE_VURDERING"},{kode:b.IKKE_FORELDET,navn:"Ikke foreldet",kodeverk:"FORELDELSE_VURDERING"}]},_n={component:Re,args:{submitCallback:Me("button-click"),behandling:{uuid:"1",versjon:1,status:_e.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:_r,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:Lr,relasjonsRolleType:Z.MOR,beregnBelop:r=>Promise.resolve(r),alleMerknaderFraBeslutter:{},relasjonsRolleTypeKodeverk:[{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},H={args:{aksjonspunkter:[{definisjon:Y.VURDER_FORELDELSE,status:ke.OPPRETTET,begrunnelse:void 0,kanLoses:!0}]}},$={args:{aksjonspunkter:[]}};var oe,le,de;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [{
      definisjon: ForeldelseAksjonspunktCodes.VURDER_FORELDELSE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true
    }]
  }
}`,...(de=(le=H.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,ge;$.parameters={...$.parameters,docs:{...(ue=$.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: []
  }
}`,...(ge=(me=$.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};const Un=["Default","UtenAksjonspunkt"];export{H as Default,$ as UtenAksjonspunkt,Un as __namedExportsOrder,_n as default};
