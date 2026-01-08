import{A as k}from"./index.es-BDctT3QU.js";import{i as H,al as oe,j as e,aF as le,X as R,aJ as Fe,H as S,b2 as we,O as he,b3 as Y,d as y,J as P,$ as L,a2 as de,Y as ne,B as _,b as U,a3 as Re,x as xe,r as h,b4 as ue,b5 as me,K as Ae,b6 as Se,aq as Ee,L as Me,aN as Oe,aH as Ve,aE as Be,a1 as Ie,aZ as Ne,aK as _e,a_ as Ue,P as Ke,p as Le}from"./iframe-DhpJkxJ1.js";import{t as N,a as Ce,o as Ge,N as ze,O as Q,F as $e,J as He,R as Ze}from"./style-FMu579HS.js";import{M as g}from"./message-CkDnx30t.js";import{S as ee}from"./Spacer-Cds6m8nG.js";import{S as Je,T as W,a as We,b as Xe,c as Ye,d as Qe,e as er}from"./Timeline-S3RRLltk.js";import{a as rr,S as nr}from"./SilhouetteFill-zUpLqNL1.js";import"./preload-helper-PPVm8Dsz.js";var Z=(r=>(r.VURDER_FORELDELSE="5003",r))(Z||{});const tr=Ce(3),ir=Ge(1500),ar=r=>r!==k.UDEFINERT?r:void 0,sr=r=>r.foreldet?r.foreldet:ar(r.foreldelseVurderingType),or=r=>({...r,foreldet:sr(r)}),ge=({skjulPeriode:r,readOnly:n,periode:t,oppdaterPeriode:d,kodeverkSamlingFpTilbake:b})=>{const p=H(),i=oe({defaultValues:or(t)}),f=i.watch("foreldet"),c=f&&f===k.FORELDET,T=f&&f===k.TILLEGGSFRIST,u=b.ForeldelseVurderingType.filter(s=>s.kode!==k.IKKE_VURDERT&&s.kode!==k.UDEFINERT);return e.jsx(le,{formMethods:i,onSubmit:s=>d(s),children:e.jsxs(R,{gap:"space-16",children:[e.jsx(Fe,{name:"begrunnelse",control:i.control,label:p.formatMessage({id:"ForeldelsePeriodeForm.Vurdering"}),validate:[N,tr,ir,ze],maxLength:1500,readOnly:n}),e.jsxs(S,{gap:"space-40",children:[e.jsx(we,{name:"foreldet",control:i.control,legend:e.jsx(g,{id:"ForeldelsePeriodeForm.RadioGroup.Foreldet"}),validate:[N],readOnly:n,children:u.map(s=>e.jsx(he,{value:s.kode,size:"small",children:s.navn},s.kode))}),e.jsxs(R,{gap:"space-20",children:[(c||T)&&e.jsx(Y,{name:"foreldelsesfrist",control:i.control,label:p.formatMessage({id:"ForeldelsePeriodeForm.Foreldelsesfrist"}),validate:[N,Q],readOnly:n}),T&&e.jsx(Y,{name:"oppdagelsesDato",control:i.control,label:p.formatMessage({id:"ForeldelsePeriodeForm.OppdagelsesDato"}),validate:[N,Q,$e],readOnly:n,fromDate:y("1970-01-01").toDate(),toDate:y().toDate()})]})]}),e.jsxs(S,{gap:"space-16",children:[e.jsx(P,{size:"small",variant:"primary",disabled:!i.formState.isDirty||i.formState.isSubmitting||n,loading:i.formState.isSubmitting,children:e.jsx(g,{id:"ForeldelsePeriodeForm.Oppdater"})}),e.jsx(P,{size:"small",variant:"secondary",onClick:r,type:"button",children:e.jsx(g,{id:"ForeldelsePeriodeForm.Avbryt"})})]})]})})};ge.__docgenInfo={description:"",methods:[],displayName:"ForeldelsePeriodeForm",props:{periode:{required:!0,tsType:{name:"intersection",raw:`Readonly<{
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
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
}>`}]},name:"values"}],return:{name:"void"}}},description:""},skjulPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const lr="_button_8q57x_1",dr="_cancelButton_8q57x_5",ae={button:lr,cancelButton:dr},ur=(r,n)=>t=>t&&(He(t)(y(r.tom.toString()).subtract(1,"day"))||Ze(t)(r.fom))?n.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,mr=(r,n)=>{const t=y(r.forstePeriodeTomDato).add(1,"days"),d={fom:n.fom,tom:r.forstePeriodeTomDato},b={fom:t.format(xe),tom:n.tom};return{forstePeriode:d,andrePeriode:b}},pe=({periodeData:r,showModal:n,cancelEvent:t,finnesBelopMed0Verdi:d,splitPeriod:b})=>{const p=H(),i=oe();return e.jsx(le,{formMethods:i,onSubmit:f=>b(mr(f,r)),children:e.jsxs(L,{width:"medium",open:n,"aria-label":p.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:t,children:[e.jsx(L.Header,{children:e.jsx(de,{size:"small",level:"2",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(L.Body,{children:e.jsxs(R,{gap:"space-16",children:[e.jsxs("div",{children:[e.jsx(ne,{size:"small",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(_,{size:"small",children:`${y(r.fom.toString()).format(U)} - ${y(r.tom.toString()).format(U)}`})]}),e.jsx(Y,{name:"forstePeriodeTomDato",control:i.control,label:e.jsx(g,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[N,Q,ur(r,p)],fromDate:y(r.fom).toDate(),toDate:y(r.tom).toDate()}),d&&e.jsx(Re,{variant:"error",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(L.Footer,{children:[e.jsx(P,{size:"small",variant:"primary",className:ae.button,disabled:!i.formState.isDirty,children:e.jsx(g,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(P,{size:"small",variant:"secondary",onClick:t,className:ae.cancelButton,type:"button",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};pe.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const gr="_margin_1dkor_37",X={margin:gr},pr=!1,ye=({valgtPeriode:r,beregnBelop:n,behandlingUuid:t,oppdaterSplittedePerioder:d,setNestePeriode:b,setForrigePeriode:p,readOnly:i,lukkPeriode:f})=>{const c=H(),[T,u]=h.useState(!1),[s,v]=h.useState(!1),o=D=>{u(!0),D.preventDefault()},x=()=>{u(!1)},a=D=>{v(!1);const A={belop:r.feilutbetaling,fom:D.forstePeriode.fom,tom:D.forstePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "},m={belop:r.feilutbetaling,fom:D.andrePeriode.fom,tom:D.andrePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "};n({behandlingUuid:t,perioder:[A,m]}).then(E=>{const{perioder:F}=E;if(F.some(B=>B.belop===0))v(!0);else{const B={fom:A.fom,tom:A.tom,feilutbetaling:F[0].belop},M={fom:m.fom,tom:m.tom,feilutbetaling:F[1].belop};x(),d([B,M])}})};return e.jsxs(S,{children:[e.jsxs(ne,{size:"small",children:[e.jsx(g,{id:"PeriodeController.Detaljer"}),pr]}),!i&&e.jsxs(e.Fragment,{children:[e.jsx(ee,{}),e.jsx(P,{className:X.margin,size:"xsmall",icon:e.jsx(Je,{"aria-hidden":!0}),onClick:o,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(g,{id:"PeriodeController.DelOppPerioden"})})]}),T&&e.jsx(pe,{cancelEvent:x,showModal:T,periodeData:r,splitPeriod:a,finnesBelopMed0Verdi:s}),e.jsx(ee,{}),e.jsx(P,{className:X.margin,size:"xsmall",icon:e.jsx(ue,{"aria-hidden":!0}),onClick:p,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(g,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(P,{className:X.margin,size:"xsmall",icon:e.jsx(me,{"aria-hidden":!0}),onClick:b,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(g,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(P,{size:"xsmall",icon:e.jsx(Ae,{"aria-hidden":!0}),onClick:f,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};ye.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BeregnBeløpParams) => Promise<BeregnBeløpResultat>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const yr="_infoSummary_112tw_1",kr="_positivNumber_112tw_7",fr="_redNumber_112tw_11",br="_resultName_112tw_16",C={infoSummary:yr,positivNumber:kr,redNumber:fr,resultName:br},ke=({fom:r,tom:n,feilutbetaling:t})=>{const d=Se(r,n);return e.jsxs(R,{gap:"space-8",className:C.infoSummary,children:[e.jsxs(S,{children:[e.jsx(ne,{size:"small",children:`${y(r).format(U)} - ${y(n).format(U)}`}),e.jsx(ee,{}),e.jsx(_,{size:"small",children:d.formattedString})]}),e.jsx(S,{gap:"space-16",children:e.jsxs(_,{size:"small",className:C.resultName,children:[e.jsx(g,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:t?C.redNumber:C.positivNumber,children:Ee(t)})]})})]})};ke.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""}}};var O=(r=>(r.MOR="MORA",r.FAR="FARA",r.MEDMOR="MMOR",r.DELTAKER="DELTAKER",r.EKTE="EKTE",r.BARN="BARN",r.REPA="REPA",r.ANPA="ANPA",r.UDEFINERT="-",r))(O||{});const cr="_margin_1wl4t_1",G={margin:cr},vr=r=>{const n=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":n},Tr=(r=[])=>r.map(n=>({id:n.id,fom:n.fom,tom:n.tom,status:vr(n)})),jr=r=>r===O.MOR||r===O.MEDMOR?e.jsx(rr,{width:20,height:20,color:"var(--ax-danger-500)"}):r===O.FAR?e.jsx(nr,{width:20,height:20,color:"var(--ax-accent-700)"}):e.jsx(Xe,{width:20,height:20}),qr={danger:e.jsx(er,{}),success:e.jsx(Qe,{}),warning:e.jsx(Ye,{})},fe=({perioder:r,setPeriode:n,valgtPeriode:t,relasjonsRolleType:d,relasjonsRolleTypeKodeverk:b})=>{const p=H(),i=Tr(r),f=m=>{const V=r.find(E=>E.id===m);V&&n(V)},c=y(i[0].fom),T=y(i[i.length-1].tom),[u,s]=h.useState(c),[v,o]=h.useState(T),x=()=>{u.subtract(1,"month").isBefore(c)||(s(u.subtract(1,"month")),o(v.subtract(1,"month")))},a=()=>{v.add(1,"month").isAfter(T)||(s(u.add(1,"month")),o(v.add(1,"month")))},D=()=>{u.add(3,"month").isAfter(v)||(s(u.add(1,"month")),o(v.subtract(1,"month")))},A=()=>{v.add(1,"month").diff(u.subtract(1,"month"),"months")<36&&(s(u.subtract(1,"month")),o(v.add(1,"month")))};return e.jsxs(R,{gap:"space-16",children:[e.jsx(W,{startDate:u.toDate(),endDate:v.add(1,"days").toDate(),children:e.jsx(W.Row,{label:b.find(m=>m.kode===d)?.navn||"-",icon:jr(d),children:i.map(m=>e.jsx(W.Period,{start:y(m.fom).toDate(),end:y(m.tom).toDate(),status:m.status,onSelectPeriod:()=>f(m.id),isActive:t?.id===m.id,icon:qr[m.status],"aria-controls":"panel-tilbakekreving-foreldelse",id:m.id.toString()},m.id))})}),e.jsxs(S,{justify:"end",children:[e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(Me,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(We,{"aria-hidden":!0}),onClick:A,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(ue,{"aria-hidden":!0}),onClick:x,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(me,{"aria-hidden":!0}),onClick:a,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};fe.__docgenInfo={description:`TilbakekrevingTimeLine

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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const se=(r,n)=>y(r.fom).diff(y(n.fom)),Pr=()=>y().subtract(30,"months").format(U),Dr=r=>r?[e.jsx(g,{id:`ForeldelseForm.AksjonspunktHelpText.${r.definisjon}`,values:{dato:Pr()}},"vurderForeldelse")]:[],re=r=>(!r.foreldelseVurderingType||r.foreldelseVurderingType===k.UDEFINERT)&&(!r.begrunnelse||!!r.erSplittet),Fr=(r=[])=>r.map((n,t)=>({fom:n.fom,tom:n.tom,isAksjonspunktOpen:re(n),isGodkjent:k.FORELDET!==n.foreldet&&k.UDEFINERT!==n.foreldet,id:t})),wr=r=>({foreldelsePerioder:r.map(t=>({fraDato:t.fom,tilDato:t.tom,begrunnelse:t.begrunnelse,foreldelseVurderingType:t.foreldet,foreldelsesfrist:t.foreldelsesfrist,oppdagelsesDato:t.oppdagelsesDato})),kode:Z.VURDER_FORELDELSE}),hr=(r,n)=>r.fom<n.fom?-1:r.fom>n.fom?1:0,Rr=r=>[...r].sort(hr).map(n=>({...n,feilutbetaling:n.belop,foreldet:n.foreldelseVurderingType===k.UDEFINERT?void 0:n.foreldelseVurderingType,begrunnelse:_e(n.begrunnelse)})),be=({submitCallback:r,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:t,aksjonspunkt:d,alleMerknaderFraBeslutter:b,perioderForeldelse:p,readOnly:i,kodeverkSamlingFpTilbake:f,beregnBelop:c,behandlingUuid:T,formData:u,setFormData:s})=>{const v=Rr(p.perioder),[o,x]=h.useState(u||v),[a,D]=h.useState(o?.find(re)),[A,m]=h.useState(!1),[V,E]=h.useState(!!u),F=l=>{const j=l?o.find(q=>q.fom===l.fom&&q.tom===l.tom):void 0;D(j)},te=()=>{const l=o.findIndex(q=>q.fom===a?.fom&&q.tom===a?.tom),j=l===o.length-1?l:l+1;F(o[j])},B=()=>{const l=o.findIndex(q=>q.fom===a?.fom&&q.tom===a?.tom),j=l===0?l:l-1;F(o[j])},M=()=>{F(void 0)},ve=l=>{const j=Ue(l,"erSplittet"),K=o.filter(w=>w.fom!==j.fom&&w.tom!==j.tom).concat(j).sort(se);x(K),s(K),E(!0),M();const I=K.find(re);I&&F(I)},Te=l=>{const j=o.find(w=>w.fom===a?.fom&&w.tom===a?.tom);if(j===void 0)throw new TypeError(`Periode skal alltid finnes. Fom: ${a?.fom} Tom: ${a?.tom}`);const q=l.map(w=>({...j,...w,erSplittet:!0})),I=o.filter(w=>w.fom!==a?.fom&&w.tom!==a?.tom).concat(q).sort(se);x(I),s(I),E(!0),M(),F(q[0])},je=()=>{m(!0),r(wr(o))},qe=b[Z.VURDER_FORELDELSE],J=Fr(o),Pe=Oe(d),De=J.every(l=>!l.isAksjonspunktOpen),ie=a?J.find(l=>l.fom===a.fom&&l.tom===a.tom):void 0;return e.jsx(Ve,{merknaderFraBeslutter:qe,withoutBorder:!0,children:e.jsxs(R,{gap:"space-16",children:[e.jsx(de,{size:"small",level:"2",children:e.jsx(g,{id:"ForeldelseForm.Foreldelse"})}),!d&&e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(g,{id:"ForeldelseForm.Foreldelsesloven"})}),e.jsx(_,{children:e.jsx(g,{id:"ForeldelseForm.AutomatiskVurdert"})})]}),o&&d&&e.jsxs(R,{gap:"space-16",children:[Pe&&e.jsx(Be,{children:Dr(d)}),e.jsx(fe,{perioder:J,valgtPeriode:ie,setPeriode:F,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:t}),a&&e.jsx("div",{id:"panel-tilbakekreving-foreldelse","aria-controls":ie?.id.toString(),children:e.jsx(Ie.New,{borderWidth:"1",padding:"4",children:e.jsxs(R,{gap:"space-16",children:[e.jsx(ye,{setNestePeriode:te,setForrigePeriode:B,valgtPeriode:a,readOnly:i,oppdaterSplittedePerioder:Te,behandlingUuid:T,beregnBelop:c,lukkPeriode:M}),e.jsx(ke,{feilutbetaling:a.feilutbetaling,fom:a.fom,tom:a.tom}),e.jsx(ge,{periode:a,oppdaterPeriode:ve,skjulPeriode:M,readOnly:i,kodeverkSamlingFpTilbake:f},a.fom)]})})}),e.jsx(S,{children:e.jsx(Ne,{isReadOnly:i,isDirty:V,isSubmittable:!a&&De,onClick:je,isSubmitting:A})})]})]})})};be.__docgenInfo={description:"",methods:[],displayName:"ForeldelseForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: AksjonspunktStatus;
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
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"RelasjonsRolleType"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
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
}>`}]}],raw:"ForeldelsesresultatActivity[]"},name:"data"}],return:{name:"void"}}},description:""}}};const xr={"ForeldelsePeriodeForm.Vurdering":"Vurdering","ForeldelsePeriodeForm.RadioGroup.Foreldet":"Vurder om perioden er foreldet","ForeldelsePeriodeForm.Oppdater":"Oppdater","ForeldelsePeriodeForm.Avbryt":"Avbryt","ForeldelsePeriodeForm.Foreldelsesfrist":"Foreldelsesfrist","ForeldelsePeriodeForm.OppdagelsesDato":"Dato for når feilutbetaling ble oppdaget","ForeldelseForm.Foreldelsesloven":"Foreldelsesloven §§ 2 og 3","ForeldelseForm.AutomatiskVurdert":"Automatisk vurdert","ForeldelseForm.AksjonspunktHelpText.5003":"Perioden før {dato} kan være foreldet. Del opp perioden ved behov og fastsett foreldelse","ForeldelseForm.Foreldelse":"Foreldelse","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","SubmitButton.ConfirmInformation":"Bekreft og fortsett","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Ar=Le(xr),ce=({perioderForeldelse:r,relasjonsRolleType:n,beregnBelop:t,behandlingUuid:d,aksjonspunkter:b,isReadOnly:p,kodeverkSamlingFpTilbake:i,submitCallback:f,alleMerknaderFraBeslutter:c,formData:T,setFormData:u,relasjonsRolleTypeKodeverk:s})=>e.jsx(Ke,{value:Ar,children:e.jsx(be,{behandlingUuid:d,perioderForeldelse:r,submitCallback:f,readOnly:p,aksjonspunkt:b[0],relasjonsRolleType:n,relasjonsRolleTypeKodeverk:s,alleMerknaderFraBeslutter:c,kodeverkSamlingFpTilbake:i,beregnBelop:t,formData:T,setFormData:u})});ce.__docgenInfo={description:"",methods:[],displayName:"ForeldelseProsessIndex",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},perioderForeldelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
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
  status: AksjonspunktStatus;
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
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"union",raw:"'OPPR' | 'UTFO' | 'AVBR'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"},{name:"literal",value:"'AVBR'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: AksjonspunktStatus;
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:Sr}=__STORYBOOK_MODULE_ACTIONS__,Er={perioder:[{fom:"2019-01-01",tom:"2019-01-31",belop:1e3,begrunnelse:"Foreldet",foreldelseVurderingType:k.FORELDET,foreldelsesfrist:"2020-04-01"},{fom:"2019-03-01",tom:"2019-03-31",belop:3e3,foreldelseVurderingType:k.UDEFINERT},{fom:"2019-02-01",tom:"2019-02-28",belop:3e3,begrunnelse:"Over foreldelsesfrist, med tillegsfrist brukes",foreldelseVurderingType:k.TILLEGGSFRIST,foreldelsesfrist:"2020-04-01",oppdagelsesDato:"2019-11-01"},{fom:"2019-04-01",tom:"2019-04-30",belop:4e3,foreldelseVurderingType:k.UDEFINERT}]},Mr={ForeldelseVurderingType:[{kode:k.FORELDET,navn:"Foreldet"},{kode:k.TILLEGGSFRIST,navn:"Ikke foreldet, med tilleggsfrist"},{kode:k.IKKE_FORELDET,navn:"Ikke foreldet"}]},Lr={component:ce,args:{submitCallback:Sr("submit"),behandlingUuid:"1",kodeverkSamlingFpTilbake:Mr,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:Er,relasjonsRolleType:O.MOR,beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleTypeKodeverk:[{kode:O.MOR,navn:"Mor"}]}},z={args:{aksjonspunkter:[{definisjon:Z.VURDER_FORELDELSE,status:"OPPR",begrunnelse:void 0,kanLoses:!0}]}},$={args:{aksjonspunkter:[]}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [{
      definisjon: ForeldelseAksjonspunktCodes.VURDER_FORELDELSE,
      status: 'OPPR',
      begrunnelse: undefined,
      kanLoses: true
    }]
  }
}`,...z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: []
  }
}`,...$.parameters?.docs?.source}}};const Cr=["Default","UtenAksjonspunkt"];export{z as Default,$ as UtenAksjonspunkt,Cr as __namedExportsOrder,Lr as default};
