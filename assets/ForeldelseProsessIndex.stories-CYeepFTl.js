import{a as Me}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{m as b,S as pe,e as _,N as Oe,O as ee,b as Ie,a as _e,l as Ve,H as Be,D as Ne,h as Z,c as ke,d as Le}from"./style-D_LpA0NF.js";import{j as e}from"./jsx-runtime-CLpGMVip.js";import{u as X,P as Ue}from"./index-D9DDUrbY.js";import{d as y,P as B,A as Ce,e as Ke,g as Ge,j as ze,a as He,n as $e}from"./index.es-Dh3mAfPy.js";import{r as l}from"./index-B5OHeJSP.js";import{r as ye,e as Ze,Z as Xe,X as re,K as We}from"./index.es-THaQLCbj.js";import{d as q,X as Ye,W as Je,N as Qe}from"./index.es-B_RouKJz.js";import{c as fe}from"./ReadOnlyIcon-3mCRcvzc.js";import{H as N,V as er}from"./VStack-BtUbcfLF.js";import{M as p}from"./message-BcVJpMje.js";import{B as x}from"./Button-C4dKKha_.js";import{M as K}from"./Modal-C6iE4cX-.js";import{H as be,L as te,a as L}from"./Label-ZYbyet41.js";import{A as rr}from"./Alert-Pz1mMbfe.js";import{S as ne,T as J,a as nr,b as tr,c as ar,d as ir,e as sr,f as or}from"./Timeline-Dqkdb2KD.js";import{S as lr}from"./Scissors-DZqh_mpJ.js";import{S as ve,a as ce}from"./DatePicker-DoJN_gWH.js";import{S as dr}from"./XMark-BWJopseo.js";import{a as ur,S as mr}from"./SilhouetteFill-DMHyitGq.js";import{P as gr}from"./Panel-BzsK_xG0.js";/* empty css              */import"./v4-CtRu48qb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Checkbox-CHErwGPi.js";import"./clsx-B-dksMZM.js";import"./omit-B7stZg_p.js";import"./useId-e75EoDiw.js";import"./useFormField-BKpVC0Pg.js";import"./Fieldset-Cs108nF-.js";import"./Tag-DqR_3-Kz.js";import"./Textarea-DQ7w4yc6.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./useClientLayoutEffect-DnVV5Q77.js";import"./create-context-BlrHNsQj.js";import"./Loader-CoAqN6Lw.js";import"./Provider-B_QIWjIe.js";import"./useDatepicker-oJRfFMcH.js";import"./useDateTranslationContext-DuYWebvA.js";import"./Radio-BIYAymoT.js";import"./Select-wYL7g-5T.js";import"./ChevronDown-Bw2TG6jd.js";import"./useId-B9OmVTHV.js";import"./TextField-DEo8zdDE.js";import"./PersonPencilFill-DS1qmMzQ.js";import"./KeyVerticalFill-CH0oXMyL.js";import"./Checkmark-uHeVskEM.js";import"./Theme-6IdwQf2V.js";import"./floating-ui.react-FIE1On8Y.js";import"./XMarkOctagonFill-BUHxl6gj.js";import"./ExclamationmarkTriangleFill-Ck4a0gXp.js";import"./Popover-CgZ7HliT.js";var W=(r=>(r.VURDER_FORELDELSE="5003",r))(W||{});const pr=_e(3),kr=Ve(1500),yr=r=>r!==b.UDEFINERT?r:void 0,fr=r=>r.foreldet?r.foreldet:yr(r.foreldelseVurderingType),br=r=>({...r,foreldet:fr(r)}),qe=({skjulPeriode:r,readOnly:n,periode:a,oppdaterPeriode:d,kodeverkSamlingFpTilbake:j})=>{const m=X(),o=fe({defaultValues:br(a)}),v=o.watch("foreldet"),c=v&&v===b.FORELDET,T=v&&v===b.TILLEGGSFRIST,s=j[pe.FORELDELSE_VURDERING].filter(g=>g.kode!==b.IKKE_VURDERT);return e.jsxs(ye,{formMethods:o,onSubmit:g=>d(g),children:[e.jsx(q,{twentyPx:!0}),e.jsx(Ze,{name:"begrunnelse",label:m.formatMessage({id:"ForeldelsePeriodeForm.Vurdering"}),validate:[_,pr,kr,Oe],maxLength:1500,readOnly:n}),e.jsx(q,{twentyPx:!0}),e.jsxs(N,{gap:"10",children:[e.jsx(Xe,{name:"foreldet",label:e.jsx(p,{id:"ForeldelsePeriodeForm.RadioGroup.Foreldet"}),validate:[_],radios:s.map(g=>({label:g.navn,value:g.kode})),isReadOnly:n}),e.jsxs(er,{gap:"5",children:[(c||T)&&e.jsx(re,{name:"foreldelsesfrist",label:m.formatMessage({id:"ForeldelsePeriodeForm.Foreldelsesfrist"}),validate:[_,ee],isReadOnly:n}),T&&e.jsx(re,{name:"oppdagelsesDato",label:m.formatMessage({id:"ForeldelsePeriodeForm.OppdagelsesDato"}),validate:[_,ee,Ie],isReadOnly:n,fromDate:y("1970-01-01").toDate(),toDate:y().toDate()})]})]}),e.jsx(q,{twentyPx:!0}),e.jsxs(N,{gap:"4",children:[e.jsx(x,{size:"small",variant:"primary",disabled:!o.formState.isDirty||o.formState.isSubmitting||n,loading:o.formState.isSubmitting,children:e.jsx(p,{id:"ForeldelsePeriodeForm.Oppdater"})}),e.jsx(x,{size:"small",variant:"secondary",onClick:r,type:"button",children:e.jsx(p,{id:"ForeldelsePeriodeForm.Avbryt"})})]})]})};qe.__docgenInfo={description:"",methods:[],displayName:"ForeldelsePeriodeForm",props:{periode:{required:!0,tsType:{name:"intersection",raw:`Readonly<{
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
}>`}]},name:"values"}],return:{name:"void"}}},description:""},skjulPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const vr="_button_8q57x_1",cr="_cancelButton_8q57x_5",ie={button:vr,cancelButton:cr},qr=(r,n)=>a=>a&&(Be(a)(y(r.tom.toString()).subtract(1,"day"))||Ne(a)(r.fom))?n.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,jr=(r,n)=>{const a=y(r.forstePeriodeTomDato).add(1,"days"),d={fom:n.fom,tom:r.forstePeriodeTomDato},j={fom:a.format(Ce),tom:n.tom};return{forstePeriode:d,andrePeriode:j}},je=({periodeData:r,showModal:n,cancelEvent:a,finnesBelopMed0Verdi:d,splitPeriod:j})=>{const m=X(),o=fe();return e.jsx(ye,{formMethods:o,onSubmit:v=>j(jr(v,r)),children:e.jsxs(K,{width:"medium",open:n,"aria-label":m.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:a,children:[e.jsx(K.Header,{children:e.jsx(be,{size:"small",children:e.jsx(p,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsxs(K.Body,{children:[e.jsx(te,{size:"small",children:e.jsx(p,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(L,{size:"small",children:`${y(r.fom.toString()).format(B)} - ${y(r.tom.toString()).format(B)}`}),e.jsx(q,{sixteenPx:!0}),e.jsx(re,{name:"forstePeriodeTomDato",label:e.jsx(p,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[_,ee,qr(r,m)],fromDate:y(r.fom).toDate(),toDate:y(r.tom).toDate()}),d&&e.jsx(rr,{variant:"error",children:e.jsx(p,{id:"DelOppPeriodeModalImpl.BelopEr0"})}),e.jsx(q,{sixteenPx:!0})]}),e.jsxs(K.Footer,{children:[e.jsx(x,{size:"small",variant:"primary",className:ie.button,disabled:!o.formState.isDirty,children:e.jsx(p,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(x,{size:"small",variant:"secondary",onClick:a,className:ie.cancelButton,type:"button",children:e.jsx(p,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};je.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Tr="_timeLineButton_wnej3_1",Pr="_splitPeriodImage_wnej3_24",hr="_splitPeriodPosition_wnej3_30",Dr="_leftMargin_wnej3_33",xr="_margin_wnej3_37",wr="_fix_wnej3_41",Q={timeLineButton:Tr,splitPeriodImage:Pr,splitPeriodPosition:hr,leftMargin:Dr,margin:xr,fix:wr},Rr=!1,Te=({valgtPeriode:r,beregnBelop:n,behandlingUuid:a,oppdaterSplittedePerioder:d,setNestePeriode:j,setForrigePeriode:m,readOnly:o,lukkPeriode:v})=>{const c=X(),[T,s]=l.useState(!1),[g,k]=l.useState(!1),i=w=>{s(!0),w.preventDefault()},E=()=>{s(!1)},t=w=>{k(!1);const A={belop:r.feilutbetaling,fom:w.forstePeriode.fom,tom:w.forstePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "},F={belop:r.feilutbetaling,fom:w.andrePeriode.fom,tom:w.andrePeriode.tom,begrunnelse:r.begrunnelse?r.begrunnelse:" "};n({behandlingUuid:a,perioder:[A,F]}).then(M=>{const{perioder:P}=M;if(P.some(O=>O.belop===0))k(!0);else{const O={fom:A.fom,tom:A.tom,feilutbetaling:P[0].belop},S={fom:F.fom,tom:F.tom,feilutbetaling:P[1].belop};E(),d([O,S])}})};return e.jsxs(N,{children:[e.jsxs(te,{size:"small",children:[e.jsx(p,{id:"PeriodeController.Detaljer"}),Rr]}),!o&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{}),e.jsx(x,{className:Q.margin,size:"xsmall",icon:e.jsx(lr,{"aria-hidden":!0}),onClick:i,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(p,{id:"PeriodeController.DelOppPerioden"})})]}),T&&e.jsx(je,{cancelEvent:E,showModal:T,periodeData:r,splitPeriod:t,finnesBelopMed0Verdi:g}),e.jsx(ne,{}),e.jsx(x,{className:Q.margin,size:"xsmall",icon:e.jsx(ve,{"aria-hidden":!0}),onClick:m,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(p,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(x,{className:Q.margin,size:"xsmall",icon:e.jsx(ce,{"aria-hidden":!0}),onClick:j,variant:"secondary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(p,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(x,{size:"xsmall",icon:e.jsx(dr,{"aria-hidden":!0}),onClick:v,variant:"tertiary-neutral",type:"button",title:c.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};Te.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: { behandlingUuid: string; perioder: PeriodeMedBelop[] }) => Promise<any>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ behandlingUuid: string; perioder: PeriodeMedBelop[] }",signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Fr="_infoSummary_99bx4_1",Sr="_positivNumber_99bx4_8",Er="_redNumber_99bx4_12",Ar="_resultName_99bx4_17",G={infoSummary:Fr,positivNumber:Sr,redNumber:Er,resultName:Ar},Pe=({fom:r,tom:n,feilutbetaling:a})=>{const d=Ke(r,n);return e.jsxs("div",{className:G.infoSummary,children:[e.jsxs(N,{children:[e.jsx(te,{size:"small",children:`${y(r).format(B)} - ${y(n).format(B)}`}),e.jsx(ne,{}),e.jsx(L,{size:"small",children:d.formattedString})]}),e.jsx(q,{sixteenPx:!0}),e.jsx(N,{gap:"4",children:e.jsxs(L,{size:"small",className:G.resultName,children:[e.jsx(p,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:a?G.redNumber:G.positivNumber,children:Ge(a)})]})})]})};Pe.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""}}};const Mr="_margin_1wl4t_1",z={margin:Mr},Or=r=>{const n=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":n},Ir=(r=[])=>r.map(n=>({id:n.id,fom:n.fom,tom:n.tom,status:Or(n)})),_r=r=>r===Z.MOR||r===Z.MEDMOR?e.jsx(ur,{width:20,height:20,color:"var(--a-red-200)"}):r===Z.FAR?e.jsx(mr,{width:20,height:20,color:"var(--a-blue-600)"}):e.jsx(ar,{width:20,height:20}),Vr={danger:e.jsx(ir,{}),success:e.jsx(sr,{}),warning:e.jsx(or,{})},he=({perioder:r,setPeriode:n,valgtPeriode:a,relasjonsRolleType:d,relasjonsRolleTypeKodeverk:j})=>{var F;const m=X(),o=l.useMemo(()=>Ir(r),[r]),v=l.useCallback(f=>{const M=r.find(P=>P.id===f);M&&n(M)},[r,n]),c=y(o[0].fom),T=y(o[o.length-1].tom),[s,g]=l.useState(c),[k,i]=l.useState(T),E=l.useCallback(()=>{s.subtract(1,"month").isBefore(c)||(g(s.subtract(1,"month")),i(k.subtract(1,"month")))},[s,k,c]),t=l.useCallback(()=>{k.add(1,"month").isAfter(T)||(g(s.add(1,"month")),i(k.add(1,"month")))},[s,k,T]),w=l.useCallback(()=>{s.add(3,"month").isAfter(k)||(g(s.add(1,"month")),i(k.subtract(1,"month")))},[s,k]),A=l.useCallback(()=>{k.add(1,"month").diff(s.subtract(1,"month"),"months")<36&&(g(s.subtract(1,"month")),i(k.add(1,"month")))},[s,k]);return e.jsxs(e.Fragment,{children:[e.jsx(q,{fourtyPx:!0}),e.jsx(J,{startDate:s.toDate(),endDate:k.add(1,"days").toDate(),children:e.jsx(J.Row,{label:((F=j.find(f=>f.kode===d))==null?void 0:F.navn)||"-",icon:_r(d),children:o.map(f=>e.jsx(J.Period,{start:y(f.fom).toDate(),end:y(f.tom).toDate(),status:f.status,onSelectPeriod:()=>v(f.id),isActive:(a==null?void 0:a.id)===f.id,icon:Vr[f.status],"aria-controls":"panel-tilbakekreving-foreldelse",id:f.id.toString()},f.id))})}),e.jsx(q,{twentyPx:!0}),e.jsxs(Ye,{children:[e.jsx(x,{className:z.margin,size:"small",icon:e.jsx(nr,{"aria-hidden":!0}),onClick:w,variant:"primary-neutral",type:"button",title:m.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(x,{className:z.margin,size:"small",icon:e.jsx(tr,{"aria-hidden":!0}),onClick:A,variant:"primary-neutral",type:"button",title:m.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(x,{className:z.margin,size:"small",icon:e.jsx(ve,{"aria-hidden":!0}),onClick:E,variant:"primary-neutral",type:"button",title:m.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(x,{className:z.margin,size:"small",icon:e.jsx(ce,{"aria-hidden":!0}),onClick:t,variant:"primary-neutral",type:"button",title:m.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};he.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Br="_container_wdk2x_1",Nr="_fadein_wdk2x_1",Lr="_space_wdk2x_11",Ur={container:Br,fadein:Nr,space:Lr},se=(r,n)=>y(r.fom).diff(y(n.fom)),Cr=()=>y().subtract(30,"months").format(B),Kr=r=>r?[e.jsx(p,{id:`ForeldelseForm.AksjonspunktHelpText.${r.definisjon}`,values:{dato:Cr()}},"vurderForeldelse")]:[],V=r=>(!r.foreldelseVurderingType||r.foreldelseVurderingType===b.UDEFINERT)&&(!r.begrunnelse||!!r.erSplittet),Gr=(r=[])=>r.map((n,a)=>({fom:n.fom,tom:n.tom,isAksjonspunktOpen:V(n),isGodkjent:b.FORELDET!==n.foreldet&&b.UDEFINERT!==n.foreldet,id:a})),zr=r=>({foreldelsePerioder:r.map(a=>({fraDato:a.fom,tilDato:a.tom,begrunnelse:a.begrunnelse,foreldelseVurderingType:a.foreldet,foreldelsesfrist:a.foreldelsesfrist,oppdagelsesDato:a.oppdagelsesDato})),kode:W.VURDER_FORELDELSE}),Hr=(r,n)=>r.fom<n.fom?-1:r.fom>n.fom?1:0,$r=r=>[...r].sort(Hr).map(n=>({...n,feilutbetaling:n.belop,foreldet:n.foreldelseVurderingType===b.UDEFINERT?void 0:n.foreldelseVurderingType,begrunnelse:He(n.begrunnelse)})),De=({submitCallback:r,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:a,aksjonspunkt:d,alleMerknaderFraBeslutter:j,perioderForeldelse:m,readOnly:o,kodeverkSamlingFpTilbake:v,beregnBelop:c,behandlingUuid:T,formData:s,setFormData:g})=>{const k=l.useMemo(()=>$r(m.perioder),[m.perioder]),[i,E]=l.useState(s||k),[t,w]=l.useState(i==null?void 0:i.find(V)),[A,F]=l.useState(!1),[f,M]=l.useState(!!s),P=u=>{const h=u?i.find(D=>D.fom===u.fom&&D.tom===u.tom):void 0;w(h)},ae=l.useCallback(()=>{const u=i.findIndex(D=>D.fom===(t==null?void 0:t.fom)&&D.tom===(t==null?void 0:t.tom)),h=u===i.length-1?u:u+1;P(i[h])},[i,t]),O=l.useCallback(()=>{const u=i.findIndex(D=>D.fom===(t==null?void 0:t.fom)&&D.tom===(t==null?void 0:t.tom)),h=u===0?u:u-1;P(i[h])},[i,t]),S=l.useCallback(()=>{P(void 0)},[t,i]),we=l.useCallback(u=>{const h=ze(u,"erSplittet"),C=i.filter(R=>R.fom!==h.fom&&R.tom!==h.tom).concat(h).sort(se);E(C),g(C),M(!0),S();const I=C.find(V);I&&P(I)},[i,S,V]),Re=l.useCallback(u=>{const h=i.find(R=>R.fom===(t==null?void 0:t.fom)&&R.tom===(t==null?void 0:t.tom));if(h===void 0)throw new TypeError(`Periode skal alltid finnes. Fom: ${t==null?void 0:t.fom} Tom: ${t==null?void 0:t.tom}`);const D=u.map(R=>({...h,...R,erSplittet:!0})),I=i.filter(R=>R.fom!==(t==null?void 0:t.fom)&&R.tom!==(t==null?void 0:t.tom)).concat(D).sort(se);E(I),g(I),M(!0),S(),P(D[0])},[i,t,S,V]),Fe=l.useCallback(()=>{F(!0),r(zr(i))},[i]),Se=j[W.VURDER_FORELDELSE],Y=Gr(i),Ee=d&&d.status===ke.OPPRETTET,Ae=Y.every(u=>!u.isAksjonspunktOpen),U=t?Y.find(u=>u.fom===t.fom&&u.tom===t.tom):void 0;return e.jsxs(Je,{merknaderFraBeslutter:Se,withoutBorder:!0,children:[e.jsx(be,{size:"small",children:e.jsx(p,{id:"ForeldelseForm.Foreldelse"})}),e.jsx(q,{twentyPx:!0}),!d&&e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsx(p,{id:"ForeldelseForm.Foreldelsesloven"})}),e.jsx(q,{eightPx:!0}),e.jsx(L,{children:e.jsx(p,{id:"ForeldelseForm.AutomatiskVurdert"})}),e.jsx(q,{sixteenPx:!0})]}),i&&d&&e.jsxs(e.Fragment,{children:[Ee&&e.jsx(Qe,{children:Kr(d)}),e.jsx(q,{twentyPx:!0}),e.jsx(he,{perioder:Y,valgtPeriode:U,setPeriode:P,relasjonsRolleType:n,relasjonsRolleTypeKodeverk:a}),t&&e.jsxs("div",{id:"panel-tilbakekreving-foreldelse","aria-controls":U==null?void 0:U.id.toString(),children:[e.jsx("div",{className:Ur.space}),e.jsxs(gr,{border:!0,children:[e.jsx(Te,{setNestePeriode:ae,setForrigePeriode:O,valgtPeriode:t,readOnly:o,oppdaterSplittedePerioder:Re,behandlingUuid:T,beregnBelop:c,lukkPeriode:S}),e.jsx(q,{sixteenPx:!0}),e.jsx(Pe,{feilutbetaling:t.feilutbetaling,fom:t.fom,tom:t.tom}),e.jsx(qe,{periode:t,oppdaterPeriode:we,skjulPeriode:S,readOnly:o,kodeverkSamlingFpTilbake:v},t.fom)]})]}),e.jsx(q,{twentyPx:!0}),e.jsx(We,{isReadOnly:o,isDirty:f,isSubmittable:!t&&Ae,onClick:Fe,isSubmitting:A})]})]})};De.__docgenInfo={description:"",methods:[],displayName:"ForeldelseForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},aksjonspunkt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}]}],raw:"ForeldelsesresultatActivity[]"},name:"data"}],return:{name:"void"}}},description:""}}};const Zr={"ForeldelsePeriodeForm.Vurdering":"Vurdering","ForeldelsePeriodeForm.RadioGroup.Foreldet":"Vurder om perioden er foreldet","ForeldelsePeriodeForm.Oppdater":"Oppdater","ForeldelsePeriodeForm.Avbryt":"Avbryt","ForeldelsePeriodeForm.Foreldelsesfrist":"Foreldelsesfrist","ForeldelsePeriodeForm.OppdagelsesDato":"Dato for når feilutbetaling ble oppdaget","ForeldelseForm.Foreldelsesloven":"Foreldelsesloven §§ 2 og 3","ForeldelseForm.AutomatiskVurdert":"Automatisk vurdert","ForeldelseForm.AksjonspunktHelpText.5003":"Perioden før {dato} kan være foreldet. Del opp perioden ved behov og fastsett foreldelse","ForeldelseForm.Foreldelse":"Foreldelse","PeriodeController.Detaljer":"Detaljer for valgt periode","PeriodeController.DelOppPerioden":"Del opp perioden","PeriodeController.ForrigePeriode":"Forrige periode","PeriodeController.NestePeriode":"Neste periode","PeriodeInformasjon.Feilutbetaling":"Feilutbetaling","SubmitButton.ConfirmInformation":"Bekreft og fortsett","DelOppPeriodeModalImpl.Periode":"Periode","DelOppPeriodeModalImpl.AngiTomDato":"Angi t.o.m. dato for første periode","DelOppPeriodeModalImpl.ModalDescription":"Periode er splittet","DelOppPeriodeModalImpl.DelOppPerioden":"Del opp perioden","DelOppPeriodeModalImpl.Ok":"Ok","DelOppPeriodeModalImpl.Avbryt":"Avbryt","DelOppPeriodeModalImpl.DatoUtenforPeriode":"Dato må være innenfor perioden","DelOppPeriodeModalImpl.BelopEr0":"Periode har 0 virkedager","TilbakekrevingTimeline.ImageText":"Personinformasjon","TilbakekrevingTimeline.Woman":"Kvinne","TilbakekrevingTimeline.Man":"Mann","TilbakekrevingTimeline.ZoomInn":"Zoom inn","TilbakekrevingTimeline.ZoomUt":"Zoom ut","TilbakekrevingTimeline.ScrollTilVenstre":"Scroll til venstre","TilbakekrevingTimeline.ScrollTilHogre":"Scroll til høyre","PeriodeController.nextPeriod":"Neste periode","PeriodeController.nextPeriodShort":"Neste","PeriodeController.prevPeriod":"Forrige periode","PeriodeController.prevPeriodShort":"Forrige","PeriodeController.LukkPeriode":"Lukk periode","UttakInfoPanel.IngenPerioder":"Det må være minst én periode i uttaket.","UttakInfoPanel.PeriodenSlettes":"Perioden {fom} - {tom} {uttakPeriodeType} slettes","UttakInfoPanel.Frilans":"Frilanser","UttakInfoPanel.Selvstendignæringsdrivende":"Selvstendig næringsdrivende","Malform.Beskrivelse":"Foretrukket språk","Timeline.scrollLeft":"Scrolle venstre","Timeline.scrollRight":"Scrolle høyre","Timeline.zoomIn":"Zoom inn","Timeline.zoomOut":"Zoom ut","Timeline.openData":"Åpne info om første periode","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Scroll til høyre","Timeline.prevPeriod":"Scroll til venstre","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Xr=$e(Zr),xe=({perioderForeldelse:r,relasjonsRolleType:n,beregnBelop:a,behandling:d,aksjonspunkter:j,isReadOnly:m,kodeverkSamlingFpTilbake:o,submitCallback:v,alleMerknaderFraBeslutter:c,formData:T,setFormData:s,relasjonsRolleTypeKodeverk:g})=>e.jsx(Ue,{value:Xr,children:e.jsx(De,{behandlingUuid:d.uuid,perioderForeldelse:r,submitCallback:v,readOnly:m,aksjonspunkt:j[0],relasjonsRolleType:n,relasjonsRolleTypeKodeverk:g,alleMerknaderFraBeslutter:c,kodeverkSamlingFpTilbake:o,beregnBelop:a,formData:T,setFormData:s})});xe.__docgenInfo={description:"",methods:[],displayName:"ForeldelseProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Wr={perioder:[{fom:"2019-01-01",tom:"2019-01-31",belop:1e3,begrunnelse:"Foreldet",foreldelseVurderingType:b.FORELDET,foreldelsesfrist:"2020-04-01"},{fom:"2019-03-01",tom:"2019-03-31",belop:3e3,foreldelseVurderingType:b.UDEFINERT},{fom:"2019-02-01",tom:"2019-02-28",belop:3e3,begrunnelse:"Over foreldelsesfrist, med tillegsfrist brukes",foreldelseVurderingType:b.TILLEGGSFRIST,foreldelsesfrist:"2020-04-01",oppdagelsesDato:"2019-11-01"},{fom:"2019-04-01",tom:"2019-04-30",belop:4e3,foreldelseVurderingType:b.UDEFINERT}]},Yr={[pe.FORELDELSE_VURDERING]:[{kode:b.FORELDET,navn:"Foreldet",kodeverk:"FORELDELSE_VURDERING"},{kode:b.TILLEGGSFRIST,navn:"Ikke foreldet, med tilleggsfrist",kodeverk:"FORELDELSE_VURDERING"},{kode:b.IKKE_FORELDET,navn:"Ikke foreldet",kodeverk:"FORELDELSE_VURDERING"}]},Jn={title:"prosess-tilbakekreving-foreldelse/ForeldelseProsessIndex",component:xe,args:{submitCallback:Me("button-click"),behandling:{uuid:"1",versjon:1,status:Le.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:Yr,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:Wr,relasjonsRolleType:Z.MOR,beregnBelop:r=>Promise.resolve(r),alleMerknaderFraBeslutter:{},relasjonsRolleTypeKodeverk:[{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},H={args:{aksjonspunkter:[{definisjon:W.VURDER_FORELDELSE,status:ke.OPPRETTET,begrunnelse:void 0,kanLoses:!0}]}},$={args:{aksjonspunkter:[]}};var oe,le,de;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ge=(me=$.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};const Qn=["Default","UtenAksjonspunkt"];export{H as Default,$ as UtenAksjonspunkt,Qn as __namedExportsOrder,Jn as default};
