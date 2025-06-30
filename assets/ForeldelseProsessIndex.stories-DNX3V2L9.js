import{$ as y,t as I,a as we,o as Fe,N as Re,O as X,k as Se,J as xe,V as Ae,b as N,c as oe,Z as Ee}from"./style-BsWUKooX.js";import{h as H,aa as le,j as e,as as de,V as R,aw as Me,H as A,aP as Oe,aQ as Q,q as k,F as P,M as K,N as ue,L as ne,B as _,v as U,G as Ve,t as Be,r as F,aR as me,aS as ge,ak as Ie,aT as Ne,ad as _e,au as Ue,ar as Le,I as Ke,aI as Ce,ax as Ge,aU as ze,P as $e,l as He}from"./iframe-DlPxsZDl.js";import{M as g}from"./message-63az3Z_B.js";import{S as ee,T as J,a as Ze,b as Ye,c as Je,d as We,e as Xe,f as Qe}from"./Timeline-ZMHmDgzv.js";import{S as er}from"./Scissors-TjiIQciS.js";import{a as rr,S as nr}from"./SilhouetteFill-DDOiVzGy.js";var Z=(r=>(r.VURDER_FORELDELSE="5003",r))(Z||{});const tr=we(3),ar=Fe(1500),ir=r=>r!==y.UDEFINERT?r:void 0,sr=r=>r.foreldet?r.foreldet:ir(r.foreldelseVurderingType),or=r=>({...r,foreldet:sr(r)}),pe=({skjulPeriode:r,readOnly:n,periode:t,oppdaterPeriode:s,kodeverkSamlingFpTilbake:f})=>{const p=H(),a=le({defaultValues:or(t)}),b=a.watch("foreldet"),v=b&&b===y.FORELDET,T=b&&b===y.TILLEGGSFRIST,d=f.ForeldelseVurderingType.filter(u=>u.kode!==y.IKKE_VURDERT);return e.jsx(de,{formMethods:a,onSubmit:u=>s(u),children:e.jsxs(R,{gap:"4",children:[e.jsx(Me,{name:"begrunnelse",control:a.control,label:p.formatMessage({id:"ForeldelsePeriodeForm.Vurdering"}),validate:[I,tr,ar,Re],maxLength:1500,readOnly:n}),e.jsxs(A,{gap:"10",children:[e.jsx(Oe,{name:"foreldet",control:a.control,label:e.jsx(g,{id:"ForeldelsePeriodeForm.RadioGroup.Foreldet"}),validate:[I],radios:d.map(u=>({label:u.navn,value:u.kode})),isReadOnly:n}),e.jsxs(R,{gap:"5",children:[(v||T)&&e.jsx(Q,{name:"foreldelsesfrist",control:a.control,label:p.formatMessage({id:"ForeldelsePeriodeForm.Foreldelsesfrist"}),validate:[I,X],isReadOnly:n}),T&&e.jsx(Q,{name:"oppdagelsesDato",control:a.control,label:p.formatMessage({id:"ForeldelsePeriodeForm.OppdagelsesDato"}),validate:[I,X,Se],isReadOnly:n,fromDate:k("1970-01-01").toDate(),toDate:k().toDate()})]})]}),e.jsxs(A,{gap:"4",children:[e.jsx(P,{size:"small",variant:"primary",disabled:!a.formState.isDirty||a.formState.isSubmitting||n,loading:a.formState.isSubmitting,children:e.jsx(g,{id:"ForeldelsePeriodeForm.Oppdater"})}),e.jsx(P,{size:"small",variant:"secondary",onClick:r,type:"button",children:e.jsx(g,{id:"ForeldelsePeriodeForm.Avbryt"})})]})]})})};pe.__docgenInfo={description:"",methods:[],displayName:"ForeldelsePeriodeForm",props:{periode:{required:!0,tsType:{name:"intersection",raw:`Readonly<{
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
}>`}]},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  ForeldelseVurderingType: ForeldelseVurderingType;
}`,signature:{properties:[{key:"ForeldelseVurderingType",value:{name:"ForeldelseVurderingType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},oppdaterPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: FormValues) => void",signature:{arguments:[{type:{name:"intersection",raw:`Readonly<{
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
}>`}]},name:"values"}],return:{name:"void"}}},description:""},skjulPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const lr="_button_8q57x_1",dr="_cancelButton_8q57x_5",ie={button:lr,cancelButton:dr},ur=(r,n)=>t=>t&&(xe(t)(k(r.tom.toString()).subtract(1,"day"))||Ae(t)(r.fom))?n.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,mr=(r,n)=>{const t=k(r.forstePeriodeTomDato).add(1,"days"),s={fom:n.fom,tom:r.forstePeriodeTomDato},f={fom:t.format(Be),tom:n.tom};return{forstePeriode:s,andrePeriode:f}},ke=({periodeData:r,showModal:n,cancelEvent:t,finnesBelopMed0Verdi:s,splitPeriod:f})=>{const p=H(),a=le();return e.jsx(de,{formMethods:a,onSubmit:b=>f(mr(b,r)),children:e.jsxs(K,{width:"medium",open:n,"aria-label":p.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:t,children:[e.jsx(K.Header,{children:e.jsx(ue,{size:"small",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(K.Body,{children:e.jsxs(R,{gap:"4",children:[e.jsxs("div",{children:[e.jsx(ne,{size:"small",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(_,{size:"small",children:`${k(r.fom.toString()).format(U)} - ${k(r.tom.toString()).format(U)}`})]}),e.jsx(Q,{name:"forstePeriodeTomDato",control:a.control,label:e.jsx(g,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[I,X,ur(r,p)],fromDate:k(r.fom).toDate(),toDate:k(r.tom).toDate()}),s&&e.jsx(Ve,{variant:"error",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(K.Footer,{children:[e.jsx(P,{size:"small",variant:"primary",className:ie.button,disabled:!a.formState.isDirty,children:e.jsx(g,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(P,{size:"small",variant:"secondary",onClick:t,className:ie.cancelButton,type:"button",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};ke.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const gr="_margin_wnej3_37",W={margin:gr},pr=!1,ye=({valgtPeriode:r,beregnBelop:n,behandlingUuid:t,oppdaterSplittedePerioder:s,setNestePeriode:f,setForrigePeriode:p,readOnly:a,lukkPeriode:b})=>{const v=H(),[T,d]=F.useState(!1),[u,c]=F.useState(!1),o=h=>{d(!0),h.preventDefault()},S=()=>{d(!1)},i=h=>{c(!1);const x={belop:r.feilutbetaling,fom:h.forstePeriode.fom,tom:h.forstePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "},m={belop:r.feilutbetaling,fom:h.andrePeriode.fom,tom:h.andrePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "};n({behandlingUuid:t,perioder:[x,m]}).then(E=>{const{perioder:D}=E;if(D.some(V=>V.belop===0))c(!0);else{const V={fom:x.fom,tom:x.tom,feilutbetaling:D[0].belop},M={fom:m.fom,tom:m.tom,feilutbetaling:D[1].belop};S(),s([V,M])}})};return e.jsxs(A,{children:[e.jsxs(ne,{size:"small",children:[e.jsx(g,{id:"PeriodeController.Detaljer"}),pr]}),!a&&e.jsxs(e.Fragment,{children:[e.jsx(ee,{}),e.jsx(P,{className:W.margin,size:"xsmall",icon:e.jsx(er,{"aria-hidden":!0}),onClick:o,variant:"tertiary-neutral",type:"button",title:v.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(g,{id:"PeriodeController.DelOppPerioden"})})]}),T&&e.jsx(ke,{cancelEvent:S,showModal:T,periodeData:r,splitPeriod:i,finnesBelopMed0Verdi:u}),e.jsx(ee,{}),e.jsx(P,{className:W.margin,size:"xsmall",icon:e.jsx(me,{"aria-hidden":!0}),onClick:p,variant:"secondary-neutral",type:"button",title:v.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(g,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(P,{className:W.margin,size:"xsmall",icon:e.jsx(ge,{"aria-hidden":!0}),onClick:f,variant:"secondary-neutral",type:"button",title:v.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(g,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(P,{size:"xsmall",icon:e.jsx(Ie,{"aria-hidden":!0}),onClick:b,variant:"tertiary-neutral",type:"button",title:v.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};ye.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BeregnBeløpParams) => Promise<BeregnBeløpResultat>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  perioder: {
    belop: number;
    fom: string;
    tom: string;
    begrunnelse: string;
  }[];
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"belop",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}[]`,required:!0}}]}},name:"data"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<BeregnBeløpResultat>"}}},description:""},oppdaterSplittedePerioder:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: PeriodeMedFeilutbetaling[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const kr="_infoSummary_ythle_1",yr="_positivNumber_ythle_7",br="_redNumber_ythle_11",fr="_resultName_ythle_16",C={infoSummary:kr,positivNumber:yr,redNumber:br,resultName:fr},be=({fom:r,tom:n,feilutbetaling:t})=>{const s=Ne(r,n);return e.jsxs(R,{gap:"2",className:C.infoSummary,children:[e.jsxs(A,{children:[e.jsx(ne,{size:"small",children:`${k(r).format(U)} - ${k(n).format(U)}`}),e.jsx(ee,{}),e.jsx(_,{size:"small",children:s.formattedString})]}),e.jsx(A,{gap:"4",children:e.jsxs(_,{size:"small",className:C.resultName,children:[e.jsx(g,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:t?C.redNumber:C.positivNumber,children:_e(t)})]})})]})};be.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""}}};const vr="_margin_1wl4t_1",G={margin:vr},cr=r=>{const n=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":n},Tr=(r=[])=>r.map(n=>({id:n.id,fom:n.fom,tom:n.tom,status:cr(n)})),qr=r=>r===N.MOR||r===N.MEDMOR?e.jsx(rr,{width:20,height:20,color:"var(--a-red-200)"}):r===N.FAR?e.jsx(nr,{width:20,height:20,color:"var(--a-blue-600)"}):e.jsx(Je,{width:20,height:20}),jr={danger:e.jsx(Qe,{}),success:e.jsx(Xe,{}),warning:e.jsx(We,{})},fe=({perioder:r,setPeriode:n,valgtPeriode:t,relasjonsRolleType:s,relasjonsRolleTypeKodeverk:f})=>{const p=H(),a=Tr(r),b=m=>{const O=r.find(E=>E.id===m);O&&n(O)},v=k(a[0].fom),T=k(a[a.length-1].tom),[d,u]=F.useState(v),[c,o]=F.useState(T),S=()=>{d.subtract(1,"month").isBefore(v)||(u(d.subtract(1,"month")),o(c.subtract(1,"month")))},i=()=>{c.add(1,"month").isAfter(T)||(u(d.add(1,"month")),o(c.add(1,"month")))},h=()=>{d.add(3,"month").isAfter(c)||(u(d.add(1,"month")),o(c.subtract(1,"month")))},x=()=>{c.add(1,"month").diff(d.subtract(1,"month"),"months")<36&&(u(d.subtract(1,"month")),o(c.add(1,"month")))};return e.jsxs(R,{gap:"4",children:[e.jsx(J,{startDate:d.toDate(),endDate:c.add(1,"days").toDate(),children:e.jsx(J.Row,{label:f.find(m=>m.kode===s)?.navn||"-",icon:qr(s),children:a.map(m=>e.jsx(J.Period,{start:k(m.fom).toDate(),end:k(m.tom).toDate(),status:m.status,onSelectPeriod:()=>b(m.id),isActive:t?.id===m.id,icon:jr[m.status],"aria-controls":"panel-tilbakekreving-foreldelse",id:m.id.toString()},m.id))})}),e.jsxs(A,{justify:"end",children:[e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(Ze,{"aria-hidden":!0}),onClick:h,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(Ye,{"aria-hidden":!0}),onClick:x,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(me,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(ge,{"aria-hidden":!0}),onClick:i,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};fe.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`},description:""},relasjonsRolleType:{required:!0,tsType:{name:"RelasjonsRolleType"},description:""},setPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(periode?: TidslinjePeriode) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const se=(r,n)=>k(r.fom).diff(k(n.fom)),Pr=()=>k().subtract(30,"months").format(U),hr=r=>r?[e.jsx(g,{id:`ForeldelseForm.AksjonspunktHelpText.${r.definisjon}`,values:{dato:Pr()}},"vurderForeldelse")]:[],re=r=>(!r.foreldelseVurderingType||r.foreldelseVurderingType===y.UDEFINERT)&&(!r.begrunnelse||!!r.erSplittet),Dr=(r=[])=>r.map((n,t)=>({fom:n.fom,tom:n.tom,isAksjonspunktOpen:re(n),isGodkjent:y.FORELDET!==n.foreldet&&y.UDEFINERT!==n.foreldet,id:t})),wr=r=>({foreldelsePerioder:r.map(t=>({fraDato:t.fom,tilDato:t.tom,begrunnelse:t.begrunnelse,foreldelseVurderingType:t.foreldet,foreldelsesfrist:t.foreldelsesfrist,oppdagelsesDato:t.oppdagelsesDato})),kode:Z.VURDER_FORELDELSE}),Fr=(r,n)=>r.fom<n.fom?-1:r.fom>n.fom?1:0,Rr=r=>[...r].sort(Fr).map(n=>({...n,feilutbetaling:n.belop,foreldet:n.foreldelseVurderingType===y.UDEFINERT?void 0:n.foreldelseVurderingType,begrunnelse:Ge(n.begrunnelse)})),ve=({submitCallback:r,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:t,aksjonspunkt:s,alleMerknaderFraBeslutter:f,perioderForeldelse:p,readOnly:a,kodeverkSamlingFpTilbake:b,beregnBelop:v,behandlingUuid:T,formData:d,setFormData:u})=>{const c=Rr(p.perioder),[o,S]=F.useState(d||c),[i,h]=F.useState(o?.find(re)),[x,m]=F.useState(!1),[O,E]=F.useState(!!d),D=l=>{const q=l?o.find(j=>j.fom===l.fom&&j.tom===l.tom):void 0;h(q)},te=()=>{const l=o.findIndex(j=>j.fom===i?.fom&&j.tom===i?.tom),q=l===o.length-1?l:l+1;D(o[q])},V=()=>{const l=o.findIndex(j=>j.fom===i?.fom&&j.tom===i?.tom),q=l===0?l:l-1;D(o[q])},M=()=>{D(void 0)},Te=l=>{const q=ze(l,"erSplittet"),L=o.filter(w=>w.fom!==q.fom&&w.tom!==q.tom).concat(q).sort(se);S(L),u(L),E(!0),M();const B=L.find(re);B&&D(B)},qe=l=>{const q=o.find(w=>w.fom===i?.fom&&w.tom===i?.tom);if(q===void 0)throw new TypeError(`Periode skal alltid finnes. Fom: ${i?.fom} Tom: ${i?.tom}`);const j=l.map(w=>({...q,...w,erSplittet:!0})),B=o.filter(w=>w.fom!==i?.fom&&w.tom!==i?.tom).concat(j).sort(se);S(B),u(B),E(!0),M(),D(j[0])},je=()=>{m(!0),r(wr(o))},Pe=f[Z.VURDER_FORELDELSE],Y=Dr(o),he=s&&s.status===oe.OPPRETTET,De=Y.every(l=>!l.isAksjonspunktOpen),ae=i?Y.find(l=>l.fom===i.fom&&l.tom===i.tom):void 0;return e.jsx(Ue,{merknaderFraBeslutter:Pe,withoutBorder:!0,children:e.jsxs(R,{gap:"4",children:[e.jsx(ue,{size:"small",children:e.jsx(g,{id:"ForeldelseForm.Foreldelse"})}),!s&&e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(g,{id:"ForeldelseForm.Foreldelsesloven"})}),e.jsx(_,{children:e.jsx(g,{id:"ForeldelseForm.AutomatiskVurdert"})})]}),o&&s&&e.jsxs(R,{gap:"4",children:[he&&e.jsx(Le,{children:hr(s)}),e.jsx(fe,{perioder:Y,valgtPeriode:ae,setPeriode:D,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:t}),i&&e.jsx("div",{id:"panel-tilbakekreving-foreldelse","aria-controls":ae?.id.toString(),children:e.jsx(Ke,{borderWidth:"1",padding:"4",children:e.jsxs(R,{gap:"4",children:[e.jsx(ye,{setNestePeriode:te,setForrigePeriode:V,valgtPeriode:i,readOnly:a,oppdaterSplittedePerioder:qe,behandlingUuid:T,beregnBelop:v,lukkPeriode:M}),e.jsx(be,{feilutbetaling:i.feilutbetaling,fom:i.fom,tom:i.tom}),e.jsx(pe,{periode:i,oppdaterPeriode:Te,skjulPeriode:M,readOnly:a,kodeverkSamlingFpTilbake:b},i.fom)]})})}),e.jsx(A,{children:e.jsx(Ce,{isReadOnly:a,isDirty:O,isSubmittable:!i&&De,onClick:je,isSubmitting:x})})]})]})})};ve.__docgenInfo={description:"",methods:[],displayName:"ForeldelseForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  ForeldelseVurderingType: ForeldelseVurderingType;
}`,signature:{properties:[{key:"ForeldelseVurderingType",value:{name:"ForeldelseVurderingType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"RelasjonsRolleType"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BeregnBeløpParams) => Promise<BeregnBeløpResultat>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  perioder: {
    belop: number;
    fom: string;
    tom: string;
    begrunnelse: string;
  }[];
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"belop",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}[]`,required:!0}}]}},name:"data"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<BeregnBeløpResultat>"}}},description:""},formData:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`Readonly<{
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
}>`}]}],raw:"ForeldelsesresultatActivity[]"},name:"data"}],return:{name:"void"}}},description:""}}};const Sr={"ForeldelsePeriodeForm.Vurdering":"Vurdering","ForeldelsePeriodeForm.RadioGroup.Foreldet":"Vurder om perioden er foreldet","ForeldelsePeriodeForm.Oppdater":"Oppdater","ForeldelsePeriodeForm.Avbryt":"Avbryt","ForeldelsePeriodeForm.Foreldelsesfrist":"Foreldelsesfrist","ForeldelsePeriodeForm.OppdagelsesDato":"Dato for når feilutbetaling ble oppdaget","ForeldelseForm.Foreldelsesloven":"Foreldelsesloven §§ 2 og 3","ForeldelseForm.AutomatiskVurdert":"Automatisk vurdert","ForeldelseForm.AksjonspunktHelpText.5003":"Perioden før {dato} kan være foreldet. Del opp perioden ved behov og fastsett foreldelse","ForeldelseForm.Foreldelse":"Foreldelse","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","SubmitButton.ConfirmInformation":"Bekreft og fortsett","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},xr=He(Sr),ce=({perioderForeldelse:r,relasjonsRolleType:n,beregnBelop:t,behandling:s,aksjonspunkter:f,isReadOnly:p,kodeverkSamlingFpTilbake:a,submitCallback:b,alleMerknaderFraBeslutter:v,formData:T,setFormData:d,relasjonsRolleTypeKodeverk:u})=>e.jsx($e,{value:xr,children:e.jsx(ve,{behandlingUuid:s.uuid,perioderForeldelse:r,submitCallback:b,readOnly:p,aksjonspunkt:f[0],relasjonsRolleType:n,relasjonsRolleTypeKodeverk:u,alleMerknaderFraBeslutter:v,kodeverkSamlingFpTilbake:a,beregnBelop:t,formData:T,setFormData:d})});ce.__docgenInfo={description:"",methods:[],displayName:"ForeldelseProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  versjon: number;
  uuid: string;
  status: BehandlingStatus;
  type: BehandlingType;
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
}`,signature:{properties:[{key:"versjon",value:{name:"number",required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"status",value:{name:"BehandlingStatus",required:!0}},{key:"type",value:{name:"BehandlingType",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"behandlingPaaVent",value:{name:"boolean",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  ForeldelseVurderingType: ForeldelseVurderingType;
}`,signature:{properties:[{key:"ForeldelseVurderingType",value:{name:"ForeldelseVurderingType",required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<BeregnBeløpResultat>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  perioder: {
    belop: number;
    fom: string;
    tom: string;
    begrunnelse: string;
  }[];
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"belop",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}}],raw:`{
  belop: number;
  fom: string;
  tom: string;
  begrunnelse: string;
}[]`,required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<BeregnBeløpResultat>"}}},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},relasjonsRolleType:{required:!0,tsType:{name:"RelasjonsRolleType"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:Ar}=__STORYBOOK_MODULE_ACTIONS__,Er={perioder:[{fom:"2019-01-01",tom:"2019-01-31",belop:1e3,begrunnelse:"Foreldet",foreldelseVurderingType:y.FORELDET,foreldelsesfrist:"2020-04-01"},{fom:"2019-03-01",tom:"2019-03-31",belop:3e3,foreldelseVurderingType:y.UDEFINERT},{fom:"2019-02-01",tom:"2019-02-28",belop:3e3,begrunnelse:"Over foreldelsesfrist, med tillegsfrist brukes",foreldelseVurderingType:y.TILLEGGSFRIST,foreldelsesfrist:"2020-04-01",oppdagelsesDato:"2019-11-01"},{fom:"2019-04-01",tom:"2019-04-30",belop:4e3,foreldelseVurderingType:y.UDEFINERT}]},Mr={ForeldelseVurderingType:[{kode:y.FORELDET,navn:"Foreldet",kodeverk:"FORELDELSE_VURDERING"},{kode:y.TILLEGGSFRIST,navn:"Ikke foreldet, med tilleggsfrist",kodeverk:"FORELDELSE_VURDERING"},{kode:y.IKKE_FORELDET,navn:"Ikke foreldet",kodeverk:"FORELDELSE_VURDERING"}]},Ur={component:ce,args:{submitCallback:Ar("button-click"),behandling:{uuid:"1",versjon:1,status:Ee.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:Mr,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:Er,relasjonsRolleType:N.MOR,beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleTypeKodeverk:[{kode:N.MOR,kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},z={args:{aksjonspunkter:[{definisjon:Z.VURDER_FORELDELSE,status:oe.OPPRETTET,begrunnelse:void 0,kanLoses:!0}]}},$={args:{aksjonspunkter:[]}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [{
      definisjon: ForeldelseAksjonspunktCodes.VURDER_FORELDELSE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true
    }]
  }
}`,...z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: []
  }
}`,...$.parameters?.docs?.source}}};const Lr=["Default","UtenAksjonspunkt"];export{z as Default,$ as UtenAksjonspunkt,Lr as __namedExportsOrder,Ur as default};
