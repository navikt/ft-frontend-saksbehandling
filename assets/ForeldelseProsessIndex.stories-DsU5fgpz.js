import{$ as y,t as N,a as we,o as Fe,N as Re,O as X,F as xe,J as Se,R as Ae,V as oe,Z as Ee}from"./style-D4sqhCBK.js";import{c as H,a9 as le,j as e,av as de,V as R,az as Me,H as A,aR as Oe,v as Ve,aS as Q,d as k,z as P,M as K,J as ue,L as ne,B as _,n as U,A as Be,m as Ie,r as F,aT as me,aU as ge,al as Ne,aV as _e,ac as Ue,ax as Le,au as Ke,F as Ce,aK as Ge,aA as ze,aW as $e,P as He,h as Ze}from"./iframe--L4EydvC.js";import{M as g}from"./message-Dn93kpGC.js";import{S as ee,T as Y,a as We,b as Ye,c as Je,d as Xe,e as Qe,f as er}from"./Timeline-BW3b3qUu.js";import{S as rr}from"./Scissors-BmHUAotO.js";import{a as nr,S as tr}from"./SilhouetteFill-Cv4aker_.js";import"./preload-helper-D9Z9MdNV.js";var Z=(r=>(r.VURDER_FORELDELSE="5003",r))(Z||{});const ar=we(3),ir=Fe(1500),sr=r=>r!==y.UDEFINERT?r:void 0,or=r=>r.foreldet?r.foreldet:sr(r.foreldelseVurderingType),lr=r=>({...r,foreldet:or(r)}),pe=({skjulPeriode:r,readOnly:n,periode:t,oppdaterPeriode:s,kodeverkSamlingFpTilbake:v})=>{const p=H(),a=le({defaultValues:lr(t)}),b=a.watch("foreldet"),f=b&&b===y.FORELDET,T=b&&b===y.TILLEGGSFRIST,u=v.ForeldelseVurderingType.filter(o=>o.kode!==y.IKKE_VURDERT&&o.kode!==y.UDEFINERT);return e.jsx(de,{formMethods:a,onSubmit:o=>s(o),children:e.jsxs(R,{gap:"space-16",children:[e.jsx(Me,{name:"begrunnelse",control:a.control,label:p.formatMessage({id:"ForeldelsePeriodeForm.Vurdering"}),validate:[N,ar,ir,Re],maxLength:1500,readOnly:n}),e.jsxs(A,{gap:"space-40",children:[e.jsx(Oe,{name:"foreldet",control:a.control,label:e.jsx(g,{id:"ForeldelsePeriodeForm.RadioGroup.Foreldet"}),validate:[N],isReadOnly:n,children:u.map(o=>e.jsx(Ve,{value:o.kode,size:"small",children:o.navn},o.kode))}),e.jsxs(R,{gap:"space-20",children:[(f||T)&&e.jsx(Q,{name:"foreldelsesfrist",control:a.control,label:p.formatMessage({id:"ForeldelsePeriodeForm.Foreldelsesfrist"}),validate:[N,X],isReadOnly:n}),T&&e.jsx(Q,{name:"oppdagelsesDato",control:a.control,label:p.formatMessage({id:"ForeldelsePeriodeForm.OppdagelsesDato"}),validate:[N,X,xe],isReadOnly:n,fromDate:k("1970-01-01").toDate(),toDate:k().toDate()})]})]}),e.jsxs(A,{gap:"space-16",children:[e.jsx(P,{size:"small",variant:"primary",disabled:!a.formState.isDirty||a.formState.isSubmitting||n,loading:a.formState.isSubmitting,children:e.jsx(g,{id:"ForeldelsePeriodeForm.Oppdater"})}),e.jsx(P,{size:"small",variant:"secondary",onClick:r,type:"button",children:e.jsx(g,{id:"ForeldelsePeriodeForm.Avbryt"})})]})]})})};pe.__docgenInfo={description:"",methods:[],displayName:"ForeldelsePeriodeForm",props:{periode:{required:!0,tsType:{name:"intersection",raw:`Readonly<{
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
}>`}]},name:"values"}],return:{name:"void"}}},description:""},skjulPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const dr="_button_8q57x_1",ur="_cancelButton_8q57x_5",ie={button:dr,cancelButton:ur},mr=(r,n)=>t=>t&&(Se(t)(k(r.tom.toString()).subtract(1,"day"))||Ae(t)(r.fom))?n.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,gr=(r,n)=>{const t=k(r.forstePeriodeTomDato).add(1,"days"),s={fom:n.fom,tom:r.forstePeriodeTomDato},v={fom:t.format(Ie),tom:n.tom};return{forstePeriode:s,andrePeriode:v}},ke=({periodeData:r,showModal:n,cancelEvent:t,finnesBelopMed0Verdi:s,splitPeriod:v})=>{const p=H(),a=le();return e.jsx(de,{formMethods:a,onSubmit:b=>v(gr(b,r)),children:e.jsxs(K,{width:"medium",open:n,"aria-label":p.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:t,children:[e.jsx(K.Header,{children:e.jsx(ue,{size:"small",level:"2",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(K.Body,{children:e.jsxs(R,{gap:"space-16",children:[e.jsxs("div",{children:[e.jsx(ne,{size:"small",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(_,{size:"small",children:`${k(r.fom.toString()).format(U)} - ${k(r.tom.toString()).format(U)}`})]}),e.jsx(Q,{name:"forstePeriodeTomDato",control:a.control,label:e.jsx(g,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[N,X,mr(r,p)],fromDate:k(r.fom).toDate(),toDate:k(r.tom).toDate()}),s&&e.jsx(Be,{variant:"error",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(K.Footer,{children:[e.jsx(P,{size:"small",variant:"primary",className:ie.button,disabled:!a.formState.isDirty,children:e.jsx(g,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(P,{size:"small",variant:"secondary",onClick:t,className:ie.cancelButton,type:"button",children:e.jsx(g,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};ke.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const pr="_margin_1dkor_37",J={margin:pr},kr=!1,ye=({valgtPeriode:r,beregnBelop:n,behandlingUuid:t,oppdaterSplittedePerioder:s,setNestePeriode:v,setForrigePeriode:p,readOnly:a,lukkPeriode:b})=>{const f=H(),[T,u]=F.useState(!1),[o,c]=F.useState(!1),l=h=>{u(!0),h.preventDefault()},x=()=>{u(!1)},i=h=>{c(!1);const S={belop:r.feilutbetaling,fom:h.forstePeriode.fom,tom:h.forstePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "},m={belop:r.feilutbetaling,fom:h.andrePeriode.fom,tom:h.andrePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "};n({behandlingUuid:t,perioder:[S,m]}).then(E=>{const{perioder:D}=E;if(D.some(B=>B.belop===0))c(!0);else{const B={fom:S.fom,tom:S.tom,feilutbetaling:D[0].belop},M={fom:m.fom,tom:m.tom,feilutbetaling:D[1].belop};x(),s([B,M])}})};return e.jsxs(A,{children:[e.jsxs(ne,{size:"small",children:[e.jsx(g,{id:"PeriodeController.Detaljer"}),kr]}),!a&&e.jsxs(e.Fragment,{children:[e.jsx(ee,{}),e.jsx(P,{className:J.margin,size:"xsmall",icon:e.jsx(rr,{"aria-hidden":!0}),onClick:l,variant:"tertiary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(g,{id:"PeriodeController.DelOppPerioden"})})]}),T&&e.jsx(ke,{cancelEvent:x,showModal:T,periodeData:r,splitPeriod:i,finnesBelopMed0Verdi:o}),e.jsx(ee,{}),e.jsx(P,{className:J.margin,size:"xsmall",icon:e.jsx(me,{"aria-hidden":!0}),onClick:p,variant:"secondary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(g,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(P,{className:J.margin,size:"xsmall",icon:e.jsx(ge,{"aria-hidden":!0}),onClick:v,variant:"secondary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(g,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(P,{size:"xsmall",icon:e.jsx(Ne,{"aria-hidden":!0}),onClick:b,variant:"tertiary-neutral",type:"button",title:f.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};ye.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BeregnBeløpParams) => Promise<BeregnBeløpResultat>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const yr="_infoSummary_112tw_1",br="_positivNumber_112tw_7",vr="_redNumber_112tw_11",fr="_resultName_112tw_16",C={infoSummary:yr,positivNumber:br,redNumber:vr,resultName:fr},be=({fom:r,tom:n,feilutbetaling:t})=>{const s=_e(r,n);return e.jsxs(R,{gap:"space-8",className:C.infoSummary,children:[e.jsxs(A,{children:[e.jsx(ne,{size:"small",children:`${k(r).format(U)} - ${k(n).format(U)}`}),e.jsx(ee,{}),e.jsx(_,{size:"small",children:s.formattedString})]}),e.jsx(A,{gap:"space-16",children:e.jsxs(_,{size:"small",className:C.resultName,children:[e.jsx(g,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:t?C.redNumber:C.positivNumber,children:Ue(t)})]})})]})};be.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""}}};var O=(r=>(r.MOR="MORA",r.FAR="FARA",r.MEDMOR="MMOR",r.DELTAKER="DELTAKER",r))(O||{});const cr="_margin_1wl4t_1",G={margin:cr},Tr=r=>{const n=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":n},qr=(r=[])=>r.map(n=>({id:n.id,fom:n.fom,tom:n.tom,status:Tr(n)})),jr=r=>r===O.MOR||r===O.MEDMOR?e.jsx(nr,{width:20,height:20,color:"var(--ax-danger-500)"}):r===O.FAR?e.jsx(tr,{width:20,height:20,color:"var(--ax-accent-700)"}):e.jsx(Je,{width:20,height:20}),Pr={danger:e.jsx(er,{}),success:e.jsx(Qe,{}),warning:e.jsx(Xe,{})},ve=({perioder:r,setPeriode:n,valgtPeriode:t,relasjonsRolleType:s,relasjonsRolleTypeKodeverk:v})=>{const p=H(),a=qr(r),b=m=>{const V=r.find(E=>E.id===m);V&&n(V)},f=k(a[0].fom),T=k(a[a.length-1].tom),[u,o]=F.useState(f),[c,l]=F.useState(T),x=()=>{u.subtract(1,"month").isBefore(f)||(o(u.subtract(1,"month")),l(c.subtract(1,"month")))},i=()=>{c.add(1,"month").isAfter(T)||(o(u.add(1,"month")),l(c.add(1,"month")))},h=()=>{u.add(3,"month").isAfter(c)||(o(u.add(1,"month")),l(c.subtract(1,"month")))},S=()=>{c.add(1,"month").diff(u.subtract(1,"month"),"months")<36&&(o(u.subtract(1,"month")),l(c.add(1,"month")))};return e.jsxs(R,{gap:"space-16",children:[e.jsx(Y,{startDate:u.toDate(),endDate:c.add(1,"days").toDate(),children:e.jsx(Y.Row,{label:v.find(m=>m.kode===s)?.navn||"-",icon:jr(s),children:a.map(m=>e.jsx(Y.Period,{start:k(m.fom).toDate(),end:k(m.tom).toDate(),status:m.status,onSelectPeriod:()=>b(m.id),isActive:t?.id===m.id,icon:Pr[m.status],"aria-controls":"panel-tilbakekreving-foreldelse",id:m.id.toString()},m.id))})}),e.jsxs(A,{justify:"end",children:[e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(We,{"aria-hidden":!0}),onClick:h,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(Ye,{"aria-hidden":!0}),onClick:S,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(me,{"aria-hidden":!0}),onClick:x,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(P,{className:G.margin,size:"small",icon:e.jsx(ge,{"aria-hidden":!0}),onClick:i,variant:"primary-neutral",type:"button",title:p.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};ve.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const se=(r,n)=>k(r.fom).diff(k(n.fom)),hr=()=>k().subtract(30,"months").format(U),Dr=r=>r?[e.jsx(g,{id:`ForeldelseForm.AksjonspunktHelpText.${r.definisjon}`,values:{dato:hr()}},"vurderForeldelse")]:[],re=r=>(!r.foreldelseVurderingType||r.foreldelseVurderingType===y.UDEFINERT)&&(!r.begrunnelse||!!r.erSplittet),wr=(r=[])=>r.map((n,t)=>({fom:n.fom,tom:n.tom,isAksjonspunktOpen:re(n),isGodkjent:y.FORELDET!==n.foreldet&&y.UDEFINERT!==n.foreldet,id:t})),Fr=r=>({foreldelsePerioder:r.map(t=>({fraDato:t.fom,tilDato:t.tom,begrunnelse:t.begrunnelse,foreldelseVurderingType:t.foreldet,foreldelsesfrist:t.foreldelsesfrist,oppdagelsesDato:t.oppdagelsesDato})),kode:Z.VURDER_FORELDELSE}),Rr=(r,n)=>r.fom<n.fom?-1:r.fom>n.fom?1:0,xr=r=>[...r].sort(Rr).map(n=>({...n,feilutbetaling:n.belop,foreldet:n.foreldelseVurderingType===y.UDEFINERT?void 0:n.foreldelseVurderingType,begrunnelse:ze(n.begrunnelse)})),fe=({submitCallback:r,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:t,aksjonspunkt:s,alleMerknaderFraBeslutter:v,perioderForeldelse:p,readOnly:a,kodeverkSamlingFpTilbake:b,beregnBelop:f,behandlingUuid:T,formData:u,setFormData:o})=>{const c=xr(p.perioder),[l,x]=F.useState(u||c),[i,h]=F.useState(l?.find(re)),[S,m]=F.useState(!1),[V,E]=F.useState(!!u),D=d=>{const q=d?l.find(j=>j.fom===d.fom&&j.tom===d.tom):void 0;h(q)},te=()=>{const d=l.findIndex(j=>j.fom===i?.fom&&j.tom===i?.tom),q=d===l.length-1?d:d+1;D(l[q])},B=()=>{const d=l.findIndex(j=>j.fom===i?.fom&&j.tom===i?.tom),q=d===0?d:d-1;D(l[q])},M=()=>{D(void 0)},Te=d=>{const q=$e(d,"erSplittet"),L=l.filter(w=>w.fom!==q.fom&&w.tom!==q.tom).concat(q).sort(se);x(L),o(L),E(!0),M();const I=L.find(re);I&&D(I)},qe=d=>{const q=l.find(w=>w.fom===i?.fom&&w.tom===i?.tom);if(q===void 0)throw new TypeError(`Periode skal alltid finnes. Fom: ${i?.fom} Tom: ${i?.tom}`);const j=d.map(w=>({...q,...w,erSplittet:!0})),I=l.filter(w=>w.fom!==i?.fom&&w.tom!==i?.tom).concat(j).sort(se);x(I),o(I),E(!0),M(),D(j[0])},je=()=>{m(!0),r(Fr(l))},Pe=v[Z.VURDER_FORELDELSE],W=wr(l),he=s&&s.status===oe.OPPRETTET,De=W.every(d=>!d.isAksjonspunktOpen),ae=i?W.find(d=>d.fom===i.fom&&d.tom===i.tom):void 0;return e.jsx(Le,{merknaderFraBeslutter:Pe,withoutBorder:!0,children:e.jsxs(R,{gap:"space-16",children:[e.jsx(ue,{size:"small",level:"2",children:e.jsx(g,{id:"ForeldelseForm.Foreldelse"})}),!s&&e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx(g,{id:"ForeldelseForm.Foreldelsesloven"})}),e.jsx(_,{children:e.jsx(g,{id:"ForeldelseForm.AutomatiskVurdert"})})]}),l&&s&&e.jsxs(R,{gap:"space-16",children:[he&&e.jsx(Ke,{children:Dr(s)}),e.jsx(ve,{perioder:W,valgtPeriode:ae,setPeriode:D,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:t}),i&&e.jsx("div",{id:"panel-tilbakekreving-foreldelse","aria-controls":ae?.id.toString(),children:e.jsx(Ce.New,{borderWidth:"1",padding:"4",children:e.jsxs(R,{gap:"space-16",children:[e.jsx(ye,{setNestePeriode:te,setForrigePeriode:B,valgtPeriode:i,readOnly:a,oppdaterSplittedePerioder:qe,behandlingUuid:T,beregnBelop:f,lukkPeriode:M}),e.jsx(be,{feilutbetaling:i.feilutbetaling,fom:i.fom,tom:i.tom}),e.jsx(pe,{periode:i,oppdaterPeriode:Te,skjulPeriode:M,readOnly:a,kodeverkSamlingFpTilbake:b},i.fom)]})})}),e.jsx(A,{children:e.jsx(Ge,{isReadOnly:a,isDirty:V,isSubmittable:!i&&De,onClick:je,isSubmitting:S})})]})]})})};fe.__docgenInfo={description:"",methods:[],displayName:"ForeldelseForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"ForeldelsesresultatActivity[]"},name:"data"}],return:{name:"void"}}},description:""}}};const Sr={"ForeldelsePeriodeForm.Vurdering":"Vurdering","ForeldelsePeriodeForm.RadioGroup.Foreldet":"Vurder om perioden er foreldet","ForeldelsePeriodeForm.Oppdater":"Oppdater","ForeldelsePeriodeForm.Avbryt":"Avbryt","ForeldelsePeriodeForm.Foreldelsesfrist":"Foreldelsesfrist","ForeldelsePeriodeForm.OppdagelsesDato":"Dato for når feilutbetaling ble oppdaget","ForeldelseForm.Foreldelsesloven":"Foreldelsesloven §§ 2 og 3","ForeldelseForm.AutomatiskVurdert":"Automatisk vurdert","ForeldelseForm.AksjonspunktHelpText.5003":"Perioden før {dato} kan være foreldet. Del opp perioden ved behov og fastsett foreldelse","ForeldelseForm.Foreldelse":"Foreldelse","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","SubmitButton.ConfirmInformation":"Bekreft og fortsett","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Ar=Ze(Sr),ce=({perioderForeldelse:r,relasjonsRolleType:n,beregnBelop:t,behandling:s,aksjonspunkter:v,isReadOnly:p,kodeverkSamlingFpTilbake:a,submitCallback:b,alleMerknaderFraBeslutter:f,formData:T,setFormData:u,relasjonsRolleTypeKodeverk:o})=>e.jsx(He,{value:Ar,children:e.jsx(fe,{behandlingUuid:s.uuid,perioderForeldelse:r,submitCallback:b,readOnly:p,aksjonspunkt:v[0],relasjonsRolleType:n,relasjonsRolleTypeKodeverk:o,alleMerknaderFraBeslutter:f,kodeverkSamlingFpTilbake:a,beregnBelop:t,formData:T,setFormData:u})});ce.__docgenInfo={description:"",methods:[],displayName:"ForeldelseProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:Er}=__STORYBOOK_MODULE_ACTIONS__,Mr={perioder:[{fom:"2019-01-01",tom:"2019-01-31",belop:1e3,begrunnelse:"Foreldet",foreldelseVurderingType:y.FORELDET,foreldelsesfrist:"2020-04-01"},{fom:"2019-03-01",tom:"2019-03-31",belop:3e3,foreldelseVurderingType:y.UDEFINERT},{fom:"2019-02-01",tom:"2019-02-28",belop:3e3,begrunnelse:"Over foreldelsesfrist, med tillegsfrist brukes",foreldelseVurderingType:y.TILLEGGSFRIST,foreldelsesfrist:"2020-04-01",oppdagelsesDato:"2019-11-01"},{fom:"2019-04-01",tom:"2019-04-30",belop:4e3,foreldelseVurderingType:y.UDEFINERT}]},Or={ForeldelseVurderingType:[{kode:y.FORELDET,navn:"Foreldet",kodeverk:"FORELDELSE_VURDERING"},{kode:y.TILLEGGSFRIST,navn:"Ikke foreldet, med tilleggsfrist",kodeverk:"FORELDELSE_VURDERING"},{kode:y.IKKE_FORELDET,navn:"Ikke foreldet",kodeverk:"FORELDELSE_VURDERING"}]},Kr={component:ce,args:{submitCallback:Er("button-click"),behandling:{uuid:"1",versjon:1,status:Ee.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:Or,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:Mr,relasjonsRolleType:O.MOR,beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleTypeKodeverk:[{kode:O.MOR,kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},z={args:{aksjonspunkter:[{definisjon:Z.VURDER_FORELDELSE,status:oe.OPPRETTET,begrunnelse:void 0,kanLoses:!0}]}},$={args:{aksjonspunkter:[]}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};const Cr=["Default","UtenAksjonspunkt"];export{z as Default,$ as UtenAksjonspunkt,Cr as __namedExportsOrder,Kr as default};
