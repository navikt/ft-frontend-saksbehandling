import{m as b,S as pe,e as V,r as Me,a as Oe,y as Be,p as Q,b as Ie,H as Ve,D as Ne,h as $,c as ke,d as _e}from"./style-DwqxuKU5.js";import{g as Z,a7 as ye,j as e,ar as be,V as S,av as Le,H as M,aM as Ue,aN as ee,p as k,A as D,M as C,N as fe,L as te,B as N,t as _,F as Ce,q as Ke,r as c,aO as ve,aP as ce,aj as Ge,aQ as ze,a9 as He,at as $e,aq as Ze,I as Ye,aR as We,aw as Xe,aS as Je,P as Qe,k as er}from"./iframe-BXXXxsZ-.js";import{M as m}from"./message-l41z7YxF.js";import{S as re,T as X,a as rr,b as nr,c as tr,d as ar,e as sr,f as ir}from"./Timeline-Ar2ripfD.js";import{S as or}from"./Scissors-BO041Ysw.js";import{a as lr,S as dr}from"./SilhouetteFill-DLx2ycvQ.js";var Y=(r=>(r.VURDER_FORELDELSE="5003",r))(Y||{});const ur=Me(3),mr=Oe(1500),gr=r=>r!==b.UDEFINERT?r:void 0,pr=r=>r.foreldet?r.foreldet:gr(r.foreldelseVurderingType),kr=r=>({...r,foreldet:pr(r)}),qe=({skjulPeriode:r,readOnly:n,periode:a,oppdaterPeriode:l,kodeverkSamlingFpTilbake:q})=>{const g=Z(),o=ye({defaultValues:kr(a)}),f=o.watch("foreldet"),v=f&&f===b.FORELDET,T=f&&f===b.TILLEGGSFRIST,s=q[pe.FORELDELSE_VURDERING].filter(u=>u.kode!==b.IKKE_VURDERT);return e.jsx(be,{formMethods:o,onSubmit:u=>l(u),children:e.jsxs(S,{gap:"4",children:[e.jsx(Le,{name:"begrunnelse",label:g.formatMessage({id:"ForeldelsePeriodeForm.Vurdering"}),validate:[V,ur,mr,Be],maxLength:1500,readOnly:n}),e.jsxs(M,{gap:"10",children:[e.jsx(Ue,{name:"foreldet",label:e.jsx(m,{id:"ForeldelsePeriodeForm.RadioGroup.Foreldet"}),validate:[V],radios:s.map(u=>({label:u.navn,value:u.kode})),isReadOnly:n}),e.jsxs(S,{gap:"5",children:[(v||T)&&e.jsx(ee,{name:"foreldelsesfrist",label:g.formatMessage({id:"ForeldelsePeriodeForm.Foreldelsesfrist"}),validate:[V,Q],isReadOnly:n}),T&&e.jsx(ee,{name:"oppdagelsesDato",label:g.formatMessage({id:"ForeldelsePeriodeForm.OppdagelsesDato"}),validate:[V,Q,Ie],isReadOnly:n,fromDate:k("1970-01-01").toDate(),toDate:k().toDate()})]})]}),e.jsxs(M,{gap:"4",children:[e.jsx(D,{size:"small",variant:"primary",disabled:!o.formState.isDirty||o.formState.isSubmitting||n,loading:o.formState.isSubmitting,children:e.jsx(m,{id:"ForeldelsePeriodeForm.Oppdater"})}),e.jsx(D,{size:"small",variant:"secondary",onClick:r,type:"button",children:e.jsx(m,{id:"ForeldelsePeriodeForm.Avbryt"})})]})]})})};qe.__docgenInfo={description:"",methods:[],displayName:"ForeldelsePeriodeForm",props:{periode:{required:!0,tsType:{name:"intersection",raw:`Readonly<{
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
}>`}]},name:"values"}],return:{name:"void"}}},description:""},skjulPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const yr="_button_8q57x_1",br="_cancelButton_8q57x_5",se={button:yr,cancelButton:br},fr=(r,n)=>a=>a&&(Ve(a)(k(r.tom.toString()).subtract(1,"day"))||Ne(a)(r.fom))?n.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,vr=(r,n)=>{const a=k(r.forstePeriodeTomDato).add(1,"days"),l={fom:n.fom,tom:r.forstePeriodeTomDato},q={fom:a.format(Ke),tom:n.tom};return{forstePeriode:l,andrePeriode:q}},Te=({periodeData:r,showModal:n,cancelEvent:a,finnesBelopMed0Verdi:l,splitPeriod:q})=>{const g=Z(),o=ye();return e.jsx(be,{formMethods:o,onSubmit:f=>q(vr(f,r)),children:e.jsxs(C,{width:"medium",open:n,"aria-label":g.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:a,children:[e.jsx(C.Header,{children:e.jsx(fe,{size:"small",children:e.jsx(m,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(C.Body,{children:e.jsxs(S,{gap:"4",children:[e.jsxs("div",{children:[e.jsx(te,{size:"small",children:e.jsx(m,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(N,{size:"small",children:`${k(r.fom.toString()).format(_)} - ${k(r.tom.toString()).format(_)}`})]}),e.jsx(ee,{name:"forstePeriodeTomDato",label:e.jsx(m,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[V,Q,fr(r,g)],fromDate:k(r.fom).toDate(),toDate:k(r.tom).toDate()}),l&&e.jsx(Ce,{variant:"error",children:e.jsx(m,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(C.Footer,{children:[e.jsx(D,{size:"small",variant:"primary",className:se.button,disabled:!o.formState.isDirty,children:e.jsx(m,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(D,{size:"small",variant:"secondary",onClick:a,className:se.cancelButton,type:"button",children:e.jsx(m,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};Te.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const cr="_margin_wnej3_37",J={margin:cr},qr=!1,je=({valgtPeriode:r,beregnBelop:n,behandlingUuid:a,oppdaterSplittedePerioder:l,setNestePeriode:q,setForrigePeriode:g,readOnly:o,lukkPeriode:f})=>{const v=Z(),[T,s]=c.useState(!1),[u,p]=c.useState(!1),i=R=>{s(!0),R.preventDefault()},x=()=>{s(!1)},t=R=>{p(!1);const A={belop:r.feilutbetaling,fom:R.forstePeriode.fom,tom:R.forstePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "},F={belop:r.feilutbetaling,fom:R.andrePeriode.fom,tom:R.andrePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "};n({behandlingUuid:a,perioder:[A,F]}).then(E=>{const{perioder:j}=E;if(j.some(B=>B.belop===0))p(!0);else{const B={fom:A.fom,tom:A.tom,feilutbetaling:j[0].belop},O={fom:F.fom,tom:F.tom,feilutbetaling:j[1].belop};x(),l([B,O])}})};return e.jsxs(M,{children:[e.jsxs(te,{size:"small",children:[e.jsx(m,{id:"PeriodeController.Detaljer"}),qr]}),!o&&e.jsxs(e.Fragment,{children:[e.jsx(re,{}),e.jsx(D,{className:J.margin,size:"xsmall",icon:e.jsx(or,{"aria-hidden":!0}),onClick:i,variant:"tertiary-neutral",type:"button",title:v.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(m,{id:"PeriodeController.DelOppPerioden"})})]}),T&&e.jsx(Te,{cancelEvent:x,showModal:T,periodeData:r,splitPeriod:t,finnesBelopMed0Verdi:u}),e.jsx(re,{}),e.jsx(D,{className:J.margin,size:"xsmall",icon:e.jsx(ve,{"aria-hidden":!0}),onClick:g,variant:"secondary-neutral",type:"button",title:v.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(m,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(D,{className:J.margin,size:"xsmall",icon:e.jsx(ce,{"aria-hidden":!0}),onClick:q,variant:"secondary-neutral",type:"button",title:v.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(m,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(D,{size:"xsmall",icon:e.jsx(Ge,{"aria-hidden":!0}),onClick:f,variant:"tertiary-neutral",type:"button",title:v.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};je.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BeregnBeløpParams) => Promise<BeregnBeløpResultat>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Tr="_infoSummary_ythle_1",jr="_positivNumber_ythle_7",hr="_redNumber_ythle_11",Pr="_resultName_ythle_16",K={infoSummary:Tr,positivNumber:jr,redNumber:hr,resultName:Pr},he=({fom:r,tom:n,feilutbetaling:a})=>{const l=ze(r,n);return e.jsxs(S,{gap:"2",className:K.infoSummary,children:[e.jsxs(M,{children:[e.jsx(te,{size:"small",children:`${k(r).format(_)} - ${k(n).format(_)}`}),e.jsx(re,{}),e.jsx(N,{size:"small",children:l.formattedString})]}),e.jsx(M,{gap:"4",children:e.jsxs(N,{size:"small",className:K.resultName,children:[e.jsx(m,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:a?K.redNumber:K.positivNumber,children:He(a)})]})})]})};he.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""}}};const Dr="_margin_1wl4t_1",G={margin:Dr},Rr=r=>{const n=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":n},wr=(r=[])=>r.map(n=>({id:n.id,fom:n.fom,tom:n.tom,status:Rr(n)})),Fr=r=>r===$.MOR||r===$.MEDMOR?e.jsx(lr,{width:20,height:20,color:"var(--a-red-200)"}):r===$.FAR?e.jsx(dr,{width:20,height:20,color:"var(--a-blue-600)"}):e.jsx(tr,{width:20,height:20}),Sr={danger:e.jsx(ir,{}),success:e.jsx(sr,{}),warning:e.jsx(ar,{})},Pe=({perioder:r,setPeriode:n,valgtPeriode:a,relasjonsRolleType:l,relasjonsRolleTypeKodeverk:q})=>{var F;const g=Z(),o=c.useMemo(()=>wr(r),[r]),f=c.useCallback(y=>{const E=r.find(j=>j.id===y);E&&n(E)},[r,n]),v=k(o[0].fom),T=k(o[o.length-1].tom),[s,u]=c.useState(v),[p,i]=c.useState(T),x=c.useCallback(()=>{s.subtract(1,"month").isBefore(v)||(u(s.subtract(1,"month")),i(p.subtract(1,"month")))},[s,p,v]),t=c.useCallback(()=>{p.add(1,"month").isAfter(T)||(u(s.add(1,"month")),i(p.add(1,"month")))},[s,p,T]),R=c.useCallback(()=>{s.add(3,"month").isAfter(p)||(u(s.add(1,"month")),i(p.subtract(1,"month")))},[s,p]),A=c.useCallback(()=>{p.add(1,"month").diff(s.subtract(1,"month"),"months")<36&&(u(s.subtract(1,"month")),i(p.add(1,"month")))},[s,p]);return e.jsxs(S,{gap:"4",children:[e.jsx(X,{startDate:s.toDate(),endDate:p.add(1,"days").toDate(),children:e.jsx(X.Row,{label:((F=q.find(y=>y.kode===l))==null?void 0:F.navn)||"-",icon:Fr(l),children:o.map(y=>e.jsx(X.Period,{start:k(y.fom).toDate(),end:k(y.tom).toDate(),status:y.status,onSelectPeriod:()=>f(y.id),isActive:(a==null?void 0:a.id)===y.id,icon:Sr[y.status],"aria-controls":"panel-tilbakekreving-foreldelse",id:y.id.toString()},y.id))})}),e.jsxs(M,{justify:"end",children:[e.jsx(D,{className:G.margin,size:"small",icon:e.jsx(rr,{"aria-hidden":!0}),onClick:R,variant:"primary-neutral",type:"button",title:g.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(D,{className:G.margin,size:"small",icon:e.jsx(nr,{"aria-hidden":!0}),onClick:A,variant:"primary-neutral",type:"button",title:g.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(D,{className:G.margin,size:"small",icon:e.jsx(ve,{"aria-hidden":!0}),onClick:x,variant:"primary-neutral",type:"button",title:g.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(D,{className:G.margin,size:"small",icon:e.jsx(ce,{"aria-hidden":!0}),onClick:t,variant:"primary-neutral",type:"button",title:g.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};Pe.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const ie=(r,n)=>k(r.fom).diff(k(n.fom)),xr=()=>k().subtract(30,"months").format(_),Ar=r=>r?[e.jsx(m,{id:`ForeldelseForm.AksjonspunktHelpText.${r.definisjon}`,values:{dato:xr()}},"vurderForeldelse")]:[],ne=r=>(!r.foreldelseVurderingType||r.foreldelseVurderingType===b.UDEFINERT)&&(!r.begrunnelse||!!r.erSplittet),Er=(r=[])=>r.map((n,a)=>({fom:n.fom,tom:n.tom,isAksjonspunktOpen:ne(n),isGodkjent:b.FORELDET!==n.foreldet&&b.UDEFINERT!==n.foreldet,id:a})),Mr=r=>({foreldelsePerioder:r.map(a=>({fraDato:a.fom,tilDato:a.tom,begrunnelse:a.begrunnelse,foreldelseVurderingType:a.foreldet,foreldelsesfrist:a.foreldelsesfrist,oppdagelsesDato:a.oppdagelsesDato})),kode:Y.VURDER_FORELDELSE}),Or=(r,n)=>r.fom<n.fom?-1:r.fom>n.fom?1:0,Br=r=>[...r].sort(Or).map(n=>({...n,feilutbetaling:n.belop,foreldet:n.foreldelseVurderingType===b.UDEFINERT?void 0:n.foreldelseVurderingType,begrunnelse:Xe(n.begrunnelse)})),De=({submitCallback:r,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:a,aksjonspunkt:l,alleMerknaderFraBeslutter:q,perioderForeldelse:g,readOnly:o,kodeverkSamlingFpTilbake:f,beregnBelop:v,behandlingUuid:T,formData:s,setFormData:u})=>{const p=Br(g.perioder),[i,x]=c.useState(s||p),[t,R]=c.useState(i==null?void 0:i.find(ne)),[A,F]=c.useState(!1),[y,E]=c.useState(!!s),j=d=>{const h=d?i.find(P=>P.fom===d.fom&&P.tom===d.tom):void 0;R(h)},ae=()=>{const d=i.findIndex(P=>P.fom===(t==null?void 0:t.fom)&&P.tom===(t==null?void 0:t.tom)),h=d===i.length-1?d:d+1;j(i[h])},B=()=>{const d=i.findIndex(P=>P.fom===(t==null?void 0:t.fom)&&P.tom===(t==null?void 0:t.tom)),h=d===0?d:d-1;j(i[h])},O=()=>{j(void 0)},we=d=>{const h=Je(d,"erSplittet"),U=i.filter(w=>w.fom!==h.fom&&w.tom!==h.tom).concat(h).sort(ie);x(U),u(U),E(!0),O();const I=U.find(ne);I&&j(I)},Fe=d=>{const h=i.find(w=>w.fom===(t==null?void 0:t.fom)&&w.tom===(t==null?void 0:t.tom));if(h===void 0)throw new TypeError(`Periode skal alltid finnes. Fom: ${t==null?void 0:t.fom} Tom: ${t==null?void 0:t.tom}`);const P=d.map(w=>({...h,...w,erSplittet:!0})),I=i.filter(w=>w.fom!==(t==null?void 0:t.fom)&&w.tom!==(t==null?void 0:t.tom)).concat(P).sort(ie);x(I),u(I),E(!0),O(),j(P[0])},Se=()=>{F(!0),r(Mr(i))},xe=q[Y.VURDER_FORELDELSE],W=Er(i),Ae=l&&l.status===ke.OPPRETTET,Ee=W.every(d=>!d.isAksjonspunktOpen),L=t?W.find(d=>d.fom===t.fom&&d.tom===t.tom):void 0;return e.jsx($e,{merknaderFraBeslutter:xe,withoutBorder:!0,children:e.jsxs(S,{gap:"4",children:[e.jsx(fe,{size:"small",children:e.jsx(m,{id:"ForeldelseForm.Foreldelse"})}),!l&&e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx(m,{id:"ForeldelseForm.Foreldelsesloven"})}),e.jsx(N,{children:e.jsx(m,{id:"ForeldelseForm.AutomatiskVurdert"})})]}),i&&l&&e.jsxs(S,{gap:"4",children:[Ae&&e.jsx(Ze,{children:Ar(l)}),e.jsx(Pe,{perioder:W,valgtPeriode:L,setPeriode:j,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:a}),t&&e.jsx("div",{id:"panel-tilbakekreving-foreldelse","aria-controls":L==null?void 0:L.id.toString(),children:e.jsx(Ye,{borderWidth:"1",padding:"4",children:e.jsxs(S,{gap:"4",children:[e.jsx(je,{setNestePeriode:ae,setForrigePeriode:B,valgtPeriode:t,readOnly:o,oppdaterSplittedePerioder:Fe,behandlingUuid:T,beregnBelop:v,lukkPeriode:O}),e.jsx(he,{feilutbetaling:t.feilutbetaling,fom:t.fom,tom:t.tom}),e.jsx(qe,{periode:t,oppdaterPeriode:we,skjulPeriode:O,readOnly:o,kodeverkSamlingFpTilbake:f},t.fom)]})})}),e.jsx(M,{children:e.jsx(We,{isReadOnly:o,isDirty:y,isSubmittable:!t&&Ee,onClick:Se,isSubmitting:A})})]})]})})};De.__docgenInfo={description:"",methods:[],displayName:"ForeldelseForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: BeregnBeløpParams) => Promise<BeregnBeløpResultat>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"ForeldelsesresultatActivity[]"},name:"data"}],return:{name:"void"}}},description:""}}};const Ir={"ForeldelsePeriodeForm.Vurdering":"Vurdering","ForeldelsePeriodeForm.RadioGroup.Foreldet":"Vurder om perioden er foreldet","ForeldelsePeriodeForm.Oppdater":"Oppdater","ForeldelsePeriodeForm.Avbryt":"Avbryt","ForeldelsePeriodeForm.Foreldelsesfrist":"Foreldelsesfrist","ForeldelsePeriodeForm.OppdagelsesDato":"Dato for når feilutbetaling ble oppdaget","ForeldelseForm.Foreldelsesloven":"Foreldelsesloven §§ 2 og 3","ForeldelseForm.AutomatiskVurdert":"Automatisk vurdert","ForeldelseForm.AksjonspunktHelpText.5003":"Perioden før {dato} kan være foreldet. Del opp perioden ved behov og fastsett foreldelse","ForeldelseForm.Foreldelse":"Foreldelse","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","SubmitButton.ConfirmInformation":"Bekreft og fortsett","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Vr=er(Ir),Re=({perioderForeldelse:r,relasjonsRolleType:n,beregnBelop:a,behandling:l,aksjonspunkter:q,isReadOnly:g,kodeverkSamlingFpTilbake:o,submitCallback:f,alleMerknaderFraBeslutter:v,formData:T,setFormData:s,relasjonsRolleTypeKodeverk:u})=>e.jsx(Qe,{value:Vr,children:e.jsx(De,{behandlingUuid:l.uuid,perioderForeldelse:r,submitCallback:f,readOnly:g,aksjonspunkt:q[0],relasjonsRolleType:n,relasjonsRolleTypeKodeverk:u,alleMerknaderFraBeslutter:v,kodeverkSamlingFpTilbake:o,beregnBelop:a,formData:T,setFormData:s})});Re.__docgenInfo={description:"",methods:[],displayName:"ForeldelseProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<BeregnBeløpResultat>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Aksjonspunkt[]"},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const{action:Nr}=__STORYBOOK_MODULE_ACTIONS__,_r={perioder:[{fom:"2019-01-01",tom:"2019-01-31",belop:1e3,begrunnelse:"Foreldet",foreldelseVurderingType:b.FORELDET,foreldelsesfrist:"2020-04-01"},{fom:"2019-03-01",tom:"2019-03-31",belop:3e3,foreldelseVurderingType:b.UDEFINERT},{fom:"2019-02-01",tom:"2019-02-28",belop:3e3,begrunnelse:"Over foreldelsesfrist, med tillegsfrist brukes",foreldelseVurderingType:b.TILLEGGSFRIST,foreldelsesfrist:"2020-04-01",oppdagelsesDato:"2019-11-01"},{fom:"2019-04-01",tom:"2019-04-30",belop:4e3,foreldelseVurderingType:b.UDEFINERT}]},Lr={[pe.FORELDELSE_VURDERING]:[{kode:b.FORELDET,navn:"Foreldet",kodeverk:"FORELDELSE_VURDERING"},{kode:b.TILLEGGSFRIST,navn:"Ikke foreldet, med tilleggsfrist",kodeverk:"FORELDELSE_VURDERING"},{kode:b.IKKE_FORELDET,navn:"Ikke foreldet",kodeverk:"FORELDELSE_VURDERING"}]},$r={component:Re,args:{submitCallback:Nr("button-click"),behandling:{uuid:"1",versjon:1,status:_e.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:Lr,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:_r,relasjonsRolleType:$.MOR,beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleTypeKodeverk:[{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},z={args:{aksjonspunkter:[{definisjon:Y.VURDER_FORELDELSE,status:ke.OPPRETTET,begrunnelse:void 0,kanLoses:!0}]}},H={args:{aksjonspunkter:[]}};var oe,le,de;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: [{
      definisjon: ForeldelseAksjonspunktCodes.VURDER_FORELDELSE,
      status: AksjonspunktStatus.OPPRETTET,
      begrunnelse: undefined,
      kanLoses: true
    }]
  }
}`,...(de=(le=z.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,ge;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    aksjonspunkter: []
  }
}`,...(ge=(me=H.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};const Zr=["Default","UtenAksjonspunkt"];export{z as Default,H as UtenAksjonspunkt,Zr as __namedExportsOrder,$r as default};
