import{a as Pr}from"./index-B-lxVbXh.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{K as nr,U as Fr,H as C,J as tr,G as we,r as Sr,q as wr,Q as ue,Z as Vr}from"./index.es-KtlCSRvp.js";import{g as Or}from"./withIntl-B2ydjJXZ.js";import{a as _r}from"./alleTilbakekrevingKodeverk-dIUSSyeF.js";import{e as x,O as Er,H as Ir,D as Mr,l as ar,i as Gr,a as Ie,o as Me,N as je,S as fe,h as Te,I as Dr,m as Ve,d as Nr}from"./style-BP6S_DKM.js";import{u as H,Q as re,G as Ur,t as Lr,g as ne,e as he,J as sr,h as Kr,N as qe,P as $r,f as Cr}from"./index.es-CsyRfoMR.js";import{r as T}from"./index-DASCADcX.js";import{h as I}from"./moment-C5S46NFB.js";import{M as i,p as Z,O as Ue,A as zr,b as Hr}from"./index.es-Dj5uEi4r.js";import{b as ir,u as Ge}from"./index.esm-s_KxdRQ_.js";import{d as q}from"./dayjs.min-Cke173X9.js";import{M as ke}from"./Modal-Cf6h8GUk.js";import{H as xe,L as z,a as F,D as Re,E as Yr}from"./Label-CfBdhDeq.js";import{V as R,H as _}from"./VStack-CfnCueE0.js";import"./Theme-Bqc_BD0M.js";import{A as lr}from"./Alert-vBIWixRy.js";import{B as S}from"./Button-D87Irl5r.js";import{S as Le,T as Fe,a as Jr,b as Wr,c as Qr,d as Zr,e as Xr,f as en}from"./Timeline-BnB9uLs-.js";import{S as rn}from"./Scissors-DzHI4ozx.js";import{S as or,g as ur}from"./DatePicker-DURjvdAA.js";import{S as nn}from"./XMark-KAXZPgUH.js";import{T as K}from"./Table-CMFYEO3g.js";import{T as tn,m as dr}from"./nb_NO-CJOcVZ-C.js";import{a as an,S as sn}from"./SilhouetteFill-Dse_AnU7.js";import{B as ln}from"./Box-t-YAJNpB.js";/* empty css              */import"./v4-CtRu48qb.js";import"./Checkbox-9OjO7dif.js";import"./omit-B7stZg_p.js";import"./useId-BiFzyKmP.js";import"./ReadOnlyIcon-fpBUgZkh.js";import"./Loader-C31s9nuZ.js";import"./Provider-ChnEfPss.js";import"./useId-sDoo_C8F.js";import"./useFormField-BZtIeUXv.js";import"./Fieldset-DZVRdKGd.js";import"./Tag-BWaKO8vm.js";import"./Textarea-CArg_PMq.js";import"./index-CRSK7kgn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BxWMR1Ay.js";import"./useClientLayoutEffect-Dt_TuINI.js";import"./Select-BQ6tobI2.js";import"./ChevronDown-DKSW_DmS.js";import"./Radio-QYcOLfdt.js";import"./useDatepicker-CPQkP5dz.js";import"./Date.Input-DmVXlpzX.js";import"./TextField-1A0BebA6.js";import"./PersonPencilFill-CoF6qBVB.js";import"./KeyVerticalFill-m_CavoP-.js";import"./Checkmark-abnGd_Ay.js";import"./floating-ui.react-CkbDYyWV.js";import"./BasePrimitive-eMFBMVLd.js";import"./ExclamationmarkTriangleFill-BFbmXhrr.js";import"./XMarkOctagonFill-Cj0h8cZo.js";import"./Popover-NZlUk6zR.js";var De=(r=>(r.VURDER_TILBAKEKREVING="5002",r))(De||{});const on="_button_8q57x_1",un="_cancelButton_8q57x_5",Ke={button:on,cancelButton:un},dn=(r,t)=>n=>n&&(Ir(n)(q(r.tom.toString()).subtract(1,"day"))||Mr(n)(r.fom))?t.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,mn=(r,t)=>{const n=q(r.forstePeriodeTomDato).add(1,"days"),a={fom:t.fom,tom:r.forstePeriodeTomDato},s={fom:n.format(Ur),tom:t.tom};return{forstePeriode:a,andrePeriode:s}},mr=({periodeData:r,showModal:t,cancelEvent:n,finnesBelopMed0Verdi:a,splitPeriod:s})=>{const d=H(),m=ir();return e.jsx(nr,{formMethods:m,onSubmit:k=>s(mn(k,r)),children:e.jsxs(ke,{open:t,"aria-label":d.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[e.jsx(ke.Header,{children:e.jsx(xe,{size:"small",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(ke.Body,{children:e.jsxs(R,{gap:"4",children:[e.jsxs("div",{children:[e.jsx(z,{size:"small",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(F,{size:"small",children:`${q(r.fom.toString()).format(re)} - ${q(r.tom.toString()).format(re)}`})]}),e.jsx(Fr,{name:"forstePeriodeTomDato",label:e.jsx(i,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[x,Er,dn(r,d)],fromDate:q(r.fom).toDate(),toDate:q(r.tom).toDate()}),a&&e.jsx(lr,{variant:"error",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(ke.Footer,{children:[e.jsx(S,{size:"small",variant:"primary",className:Ke.button,disabled:!m.formState.isDirty,children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(S,{size:"small",variant:"secondary",onClick:n,className:Ke.cancelButton,type:"button",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};mr.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}},description:""},cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showModal:{required:!0,tsType:{name:"boolean"},description:""},finnesBelopMed0Verdi:{required:!0,tsType:{name:"boolean"},description:""},splitPeriod:{required:!0,tsType:{name:"signature",type:"function",raw:"(perioder: PerioderData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  forstePeriode: Periode;
  andrePeriode: Periode;
}`,signature:{properties:[{key:"forstePeriode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"andrePeriode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const gn="_margin_wnej3_37",Se={margin:gn},pn=!1,gr=({setNestePeriode:r,setForrigePeriode:t,readOnly:n,lukkPeriode:a,periode:s,beregnBelop:d,behandlingUuid:m,oppdaterSplittedePerioder:k})=>{const g=H(),[b,o]=T.useState(!1),[p,u]=T.useState(!1),y=T.useCallback(P=>{o(!0),P.preventDefault()},[o]),M=T.useCallback(()=>{o(!1)},[]),v=P=>{u(!1);const G={belop:s.feilutbetaling,fom:P.forstePeriode.fom,tom:P.forstePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "},w={belop:s.feilutbetaling,fom:P.andrePeriode.fom,tom:P.andrePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "};d({behandlingUuid:m,perioder:[G,w]}).then(D=>{const{perioder:E}=D;if(E.some(N=>N.belop===0))u(!0);else{const N={fom:G.fom,tom:G.tom,feilutbetaling:E[0].belop},se={fom:w.fom,tom:w.tom,feilutbetaling:E[1].belop};M(),k([N,se])}})};return e.jsxs(_,{children:[e.jsxs(z,{size:"small",children:[e.jsx(i,{id:"PeriodeController.Detaljer"}),pn]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),e.jsx(S,{className:Se.margin,size:"xsmall",icon:e.jsx(rn,{"aria-hidden":!0}),onClick:y,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(i,{id:"PeriodeController.DelOppPerioden"})})]}),b&&e.jsx(mr,{cancelEvent:M,showModal:b,periodeData:s,splitPeriod:v,finnesBelopMed0Verdi:p}),e.jsx(Le,{}),e.jsx(S,{className:Se.margin,size:"xsmall",icon:e.jsx(or,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(i,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(S,{className:Se.margin,size:"xsmall",icon:e.jsx(ur,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(i,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(S,{size:"xsmall",icon:e.jsx(nn,{"aria-hidden":!0}),onClick:a,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};gr.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params?: any, keepData?: boolean) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},oppdaterSplittedePerioder:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppdatertePerioder: SplittetPeriode[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  feilutbetaling: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}}]}}],raw:"SplittetPeriode[]"},name:"oppdatertePerioder"}],return:{name:"void"}}},description:""},setNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},setForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},periode:{required:!0,tsType:{name:"intersection",raw:`{
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
} & DetaljertFeilutbetalingPeriode`,elements:[{name:"signature",type:"object",raw:`{
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
}`,signature:{properties:[{key:"erTotalBelopUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"erForeldet",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: string;
    hendelseUndertype?: string;
  };
  feilutbetaling: number;
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  redusertBeloper?: {
    erTrekk: boolean;
    belop: number;
  }[];
  oppfyltValg?: string;
  foreldet?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`,required:!0}},{key:"redusertBeloper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erTrekk: boolean;
  belop: number;
}`,signature:{properties:[{key:"erTrekk",value:{name:"boolean",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  erTrekk: boolean;
  belop: number;
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const kn="_infoSummary_14r2l_1",bn="_positivNumber_14r2l_8",yn="_redNumber_14r2l_12",vn="_resultName_14r2l_17",oe={infoSummary:kn,positivNumber:bn,redNumber:yn,resultName:vn},pr=({fom:r,tom:t,feilutbetaling:n,arsakHendelseNavn:a})=>{const s=Lr(r,t);return e.jsxs(R,{gap:"2",className:oe.infoSummary,children:[e.jsxs(_,{justify:"space-between",children:[e.jsx(z,{size:"small",children:`${q(r).format(re)} - ${q(t).format(re)}`}),e.jsx(F,{size:"small",children:s.formattedString})]}),e.jsxs(_,{gap:"4",children:[e.jsxs(F,{size:"small",className:oe.resultName,children:[e.jsx(i,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:n?oe.redNumber:oe.positivNumber,children:ne(n)})]}),a&&e.jsx(F,{size:"small",className:oe.resultName,children:a})]})]})};pr.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var B=(r=>(r.FORSETT="FORSETT",r.GROVT_UAKTSOM="GROVT_UAKTSOM",r.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",r))(B||{});const cn=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var kr=(r=>(r.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",r.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",r.STOERRELSE_BELOEP="STOERRELSE_BELOEP",r.TID_FRA_UTBETALING="TID_FRA_UTBETALING",r.ANNET="ANNET",r))(kr||{}),O=(r=>(r.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",r.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",r.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",r.GOD_TRO="GOD_TRO",r))(O||{});const br=({name:r,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const a=Ge(),s=`${r}.skalDetTilleggesRenter`;return T.useEffect(()=>{a.getValues(s)===void 0&&a.setValue(s,!1)},[]),e.jsx("div",{children:e.jsxs(Z,{alignOffset:n?320:360,children:[n&&e.jsxs(R,{gap:"4",children:[e.jsx(z,{size:"small",children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(F,{size:"small",children:"100 %"}),e.jsx(C,{name:`${r}.skalDetTilleggesRenter`,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[x],radios:[{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:t,parse:d=>d==="true",isHorizontal:!0})]}),!n&&e.jsxs(R,{gap:"2",children:[e.jsxs("div",{children:[e.jsx(Re,{children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(F,{size:"small",children:"100 %"})]}),e.jsx(F,{size:"small",children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})};br.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const fn="_suffix_cawxu_1",Tn="_suffixGrovText_cawxu_4",hn="_labelPadding_cawxu_8",jn="_inputFelt_cawxu_12",ee={suffix:fn,suffixGrovText:Tn,labelPadding:hn,inputFelt:jn},$e=ar(0),qn=Gr(99.99),xn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},Rn=(r,t)=>n=>{if(n>=t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},de="Egendefinert",Oe=["30","50","70",de],yr=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:s,feilutbetalingBelop:d,andelSomTilbakekreves:m})=>{const k=H(),g=Ge(),b=`${r}.skalDetTilleggesRenter`;return T.useEffect(()=>{g.getValues(b)===void 0&&g.setValue(b,!1)},[]),e.jsxs(R,{gap:"4",children:[e.jsx(C,{name:`${r}.harGrunnerTilReduksjon`,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[x],radios:[{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0}),t&&e.jsx(Z,{alignOffset:24,children:e.jsxs(_,{gap:"4",children:[!s&&m!==de&&e.jsxs(e.Fragment,{children:[e.jsx(z,{size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(_,{gap:"2",children:[e.jsx(tr,{name:`${r}.andelSomTilbakekreves`,label:"",validate:[x],selectValues:Oe.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx("div",{className:ee.suffix,children:"%"})]})]}),!s&&m===de&&e.jsxs(e.Fragment,{children:[e.jsx(z,{size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(_,{gap:"4",children:[e.jsx(we,{className:ee.inputFelt,name:`${r}.andelSomTilbakekrevesManuell`,readOnly:n,validate:[x,$e,qn],normalizeOnBlur:o=>Number.isNaN(o)?o:parseFloat(o.toString()).toFixed(2),format:o=>o.toString().replace(".",","),parse:o=>o.toString().replace(",",".")}),e.jsx("div",{className:a===B.GROVT_UAKTSOM?ee.suffixGrovText:ee.suffix,children:"%"})]})]}),s&&e.jsx(we,{name:`${r}.belopSomSkalTilbakekreves`,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[x,$e,Rn(k,d)],readOnly:n,format:ne,parse:xn}),a===B.GROVT_UAKTSOM&&e.jsxs("div",{children:[e.jsx(Re,{children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),e.jsx(F,{size:"small",className:ee.labelPadding,children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),t===!1&&e.jsxs(Z,{alignOffset:90,children:[e.jsx(Re,{children:e.jsx(i,{id:s?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),e.jsxs(R,{gap:"4",children:[e.jsx(F,{size:"small",className:ee.labelPadding,children:s?ne(d):"100%"}),a===B.GROVT_UAKTSOM&&e.jsx(C,{name:b,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[x],radios:[{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})]})};yr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const Bn=Ie(3),An=Me(1500),_e=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:s,sarligGrunnTyper:d,harMerEnnEnYtelse:m,feilutbetalingBelop:k,andelSomTilbakekreves:g})=>{const b=H(),{watch:o}=Ge(),p=!d.some(y=>!!o(`${r}.${y.kode}`)),u=Sr(r,p?b.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return e.jsxs(R,{gap:"4",children:[e.jsx(z,{size:"small",children:e.jsx(i,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),e.jsx("div",{children:d.map(y=>e.jsx(wr,{name:`${r}.${y.kode}`,label:y.navn,readOnly:n},y.kode))}),s&&e.jsx(ue,{name:`${r}.annetBegrunnelse`,label:"",validate:[x,Bn,An,je],maxLength:1500,readOnly:n}),u&&e.jsx(Yr,{children:u}),e.jsx(yr,{name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:m,feilutbetalingBelop:k,andelSomTilbakekreves:g})]})};_e.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Pn="_explanationTextarea_1kabz_1",Fn="_panelWidth_1kabz_5",vr={explanationTextarea:Pn,panelWidth:Fn},Sn=Ie(3),wn=Me(1500),Ce=(r,t,n)=>e.jsxs(R,{gap:"4",children:[e.jsx(z,{size:"small",children:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),e.jsx(ue,{name:`${r}.sarligGrunnerBegrunnelse`,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[x,Sn,wn,je],maxLength:1500,readOnly:t,className:vr.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]}),cr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:d,feilutbetalingBelop:m,erTotalBelopUnder4Rettsgebyr:k,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:b,name:o})=>{const p=H(),u=b?180:200;return e.jsx(Z,{alignOffset:n===B.GROVT_UAKTSOM?u:20,children:e.jsxs("div",{className:vr.panelWidth,children:[n===B.SIMPEL_UAKTSOM&&k&&e.jsx(C,{name:`${o}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[x],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:t,radios:[{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:e.jsxs("div",{style:{marginTop:"10px"},children:[Ce(o,t,p),e.jsx(_e,{name:o,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:d,feilutbetalingBelop:m,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:g})]})},{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:e.jsx("div",{style:{marginTop:"10px"},children:e.jsx(Z,{alignOffset:55,children:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})})}]}),(n!==B.SIMPEL_UAKTSOM||!k)&&e.jsxs(e.Fragment,{children:[Ce(o,t,p),e.jsx(_e,{name:o,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:d,feilutbetalingBelop:m,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:g})]})]})})};cr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const fr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:d,harMerEnnEnYtelse:m,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:b,name:o})=>e.jsxs(e.Fragment,{children:[n===B.FORSETT&&e.jsx(br,{name:o,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:s}),n!==B.FORSETT&&e.jsx(cr,{name:o,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:d,harMerEnnEnYtelse:m,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:b,erValgtResultatTypeForstoBurdeForstaatt:s})]});fr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Vn=[B.GROVT_UAKTSOM,B.SIMPEL_UAKTSOM,B.FORSETT],On={[B.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[B.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[B.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},te=({readOnly:r,resetFields:t,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:s=!1,erValgtResultatTypeForstoBurdeForstaatt:d=!1,aktsomhetTyper:m,sarligGrunnTyper:k,antallYtelser:g,feilutbetalingBelop:b,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:p,name:u})=>e.jsxs(e.Fragment,{children:[e.jsx(C,{name:`${u}.handletUaktsomhetGrad`,label:e.jsx(i,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[x],radios:m.map(y=>({label:d?e.jsx(i,{id:On[y.kode]}):y.navn,value:y.kode})),isReadOnly:r,onChange:t,isHorizontal:!0}),Vn.some(y=>y===n)&&e.jsx(fr,{name:`${u}.${n}`,harGrunnerTilReduksjon:a,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:s,erValgtResultatTypeForstoBurdeForstaatt:d,sarligGrunnTyper:k,harMerEnnEnYtelse:g>1,feilutbetalingBelop:b,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:p})]}),_n=(r,t)=>{const n=parseInt(r,10);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},En=(r,t)=>{const n=parseFloat(r);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},In=(r,t)=>{if(r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=t.reduce((d,m)=>r[m.kode]?d.concat(m.kode):d,[]),{harGrunnerTilReduksjon:a}=r,s=r.andelSomTilbakekreves===de?En(r.andelSomTilbakekrevesManuell,a):_n(r.andelSomTilbakekreves,a);return{harGrunnerTilReduksjon:a,ileggRenter:a?void 0:r.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:r.harGrunnerTilReduksjon?sr(r.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:r.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...s}};te.transformValues=(r,t,n)=>{const a=r[r.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:r.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:a?In(a,t):null}};const Mn=(r,t)=>({andelSomTilbakekreves:t===void 0||Oe.includes(t)?t:de,andelSomTilbakekrevesManuell:t&&Oe.includes(t)?void 0:r.andelTilbakekreves,harGrunnerTilReduksjon:r.harGrunnerTilReduksjon,skalDetTilleggesRenter:r.ileggRenter,belopSomSkalTilbakekreves:r.tilbakekrevesBelop,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:he(r.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...r.sarligGrunner?r.sarligGrunner.reduce((n,a)=>({...n,[a.kode?a.kode:a]:!0}),{}):{}});te.buildInitalValues=r=>{const{aktsomhet:t,aktsomhetInfo:n}=r,a=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,s=n?{[t.kode&&"kode"in t?t.kode:t]:Mn(n,a)}:{};return{handletUaktsomhetGrad:t&&t.kode&&"kode"in t?t.kode:t,...s}};te.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildInitalValues",docblock:null,modifiers:["static"],params:[{name:"vilkarResultatInfo",optional:!1,type:{name:"signature",type:"object",raw:`{
  aktsomhet: string | any;
  aktsomhetInfo?: AktsomhetInfo;
}`,signature:{properties:[{key:"aktsomhet",value:{name:"union",raw:"string | any",elements:[{name:"string"},{name:"any"}],required:!0}},{key:"aktsomhetInfo",value:{name:"signature",type:"object",raw:`{
  sarligGrunner: string[];
  harGrunnerTilReduksjon: boolean;
  andelTilbakekreves: number;
  ileggRenter: boolean;
  tilbakekrevesBelop: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}}],returns:null}],displayName:"AktsomhetFormPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},resetFields:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},antallYtelser:{required:!0,tsType:{name:"number"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},aktsomhetTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Tr=()=>e.jsxs(_,{gap:"4",children:[e.jsx(ue,{name:"foreldetBegrunnelse",label:e.jsx(i,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),e.jsx(C,{name:"periodenErForeldet",label:e.jsx(Re,{children:e.jsx(i,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:e.jsx(i,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]});Tr.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const Gn="_arrowbox_ych2z_1",Dn="_tilbakekrevdBelopInput_ych2z_4",ze={arrowbox:Gn,tilbakekrevdBelopInput:Dn},Nn=ar(1),Un=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},Ln=(r,t)=>n=>{if(n>t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ae=({name:r,readOnly:t,erBelopetIBehold:n,feilutbetalingBelop:a})=>{const s=H();return e.jsxs(R,{gap:"2",children:[e.jsx(C,{name:`${r}.erBelopetIBehold`,label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[x],radios:[{label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:t,isTrueOrFalseSelection:!0,isHorizontal:!0}),e.jsxs("div",{className:ze.arrowbox,children:[n===!0&&e.jsx(Z,{alignOffset:25,children:e.jsx(we,{name:`${r}.tilbakekrevdBelop`,label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[x,Nn,Ln(s,a)],readOnly:t,className:ze.tilbakekrevdBelopInput,format:ne,parse:Un})}),n===!1&&e.jsx(Z,{alignOffset:90,children:e.jsx(F,{size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ae.transformValues=(r,t)=>({"@type":"godTro",begrunnelse:t,erBelopetIBehold:r.erBelopetIBehold,tilbakekrevesBelop:r.erBelopetIBehold?sr(r.tilbakekrevdBelop):void 0});ae.buildIntialValues=r=>({erBelopetIBehold:r.erBelopetIBehold,tilbakekrevdBelop:r.tilbakekrevesBelop});ae.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Kn="_feilutbetalingTable_1fsd2_1",$n={feilutbetalingTable:Kn},hr=({ytelser:r})=>{if(r.length===0)return null;let t=0;return e.jsxs(K,{className:$n.feilutbetalingTable,children:[e.jsx(K.Header,{children:e.jsxs(K.Row,{children:[e.jsx(K.HeaderCell,{scope:"col",children:e.jsx(i,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),e.jsx(K.HeaderCell,{scope:"col",children:e.jsx(i,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),e.jsx(K.Body,{children:r.map(n=>(t+=1,e.jsxs(K.Row,{children:[e.jsx(K.DataCell,{children:e.jsx(F,{size:"small",children:n.aktivitet})}),e.jsx(K.DataCell,{children:e.jsx(F,{size:"small",children:ne(n.belop)})})]},n.aktivitet+n.belop+t)))})]})};hr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Cn="_explanationTextarea_1udkt_1",zn="_leftColumn_1udkt_5",Hn="_rightColumn_1udkt_9",Yn="_selectWidth_1udkt_12",be={explanationTextarea:Cn,leftColumn:zn,rightColumn:Hn,selectWidth:Yn},He=Ie(3),Ye=Me(1500),jr=({data:r,periode:t,skjulPeriode:n,readOnly:a,oppdaterPeriode:s,vilkarsVurdertePerioder:d,kodeverkSamlingFpTilbake:m,antallPerioderMedAksjonspunkt:k})=>{const g=H(),[b,o]=T.useState(!1),p=ir({defaultValues:t}),u=p.watch("valgtVilkarResultatType"),y=p.watch(`${u}.handletUaktsomhetGrad`),M=p.watch(`${u}.${y}.harGrunnerTilReduksjon`),v=p.watch(`${u}.${y}.andelSomTilbakekreves`),P=p.watch(`${u}.${y}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),G=p.watch(`${u}.${y}.${kr.ANNET}`),w=p.watch(`${u}.erBelopetIBehold`),l=Ue(u),D=Ue(y),E=r.redusertBeloper,me=m[fe.SARLIG_GRUNN],N=m[fe.VILKAR_RESULTAT],se=cn.map(c=>m[fe.AKTSOMHET].find(A=>A.kode===c)),ie=(c,A)=>{const V=c.target.value.split("_"),j=A.find(U=>U.fom===V[0]&&U.tom===V[1]),$=j==null?void 0:j.valgtVilkarResultatType,X=j&&$?j[$]:void 0,J=JSON.parse(JSON.stringify(X));if($!==O.GOD_TRO){const{handletUaktsomhetGrad:U}=J;U!==B.FORSETT&&(t==null?void 0:t.harMerEnnEnYtelse)!==(j==null?void 0:j.harMerEnnEnYtelse)&&(J[U].andelSomTilbakekreves=null,J[U].andelSomTilbakekrevesManuell=null,J[U].belopSomSkalTilbakekreves=null)}p.setValue("valgtVilkarResultatType",$,{shouldDirty:!0}),p.setValue("begrunnelse",j==null?void 0:j.begrunnelse,{shouldDirty:!0}),p.setValue("vurderingBegrunnelse",j==null?void 0:j.vurderingBegrunnelse,{shouldDirty:!0}),$&&p.setValue($,J,{shouldDirty:!0}),c.preventDefault()},ge=()=>{o(!b),s(p.getValues())},Be=c=>{k>1&&r.erTotalBelopUnder4Rettsgebyr&&P===!1?o(!b):s(c)},Ae=()=>{l&&p.resetField(l)},Pe=()=>{D&&p.resetField(`${u}.${D}`)},Y=d.filter(c=>!c.erForeldet&&c.valgtVilkarResultatType!=null);return e.jsx(nr,{formMethods:p,onSubmit:Be,children:e.jsxs(R,{gap:"4",children:[e.jsx(R,{gap:"2",children:E&&E.map(c=>e.jsx(F,{size:"small",children:e.jsx(i,{id:c.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:ne(c.belop),b:Kr}})},c.belop))}),e.jsx(hr,{ytelser:r.ytelser}),!a&&!r.erForeldet&&Y.length>0&&e.jsx(tr,{name:"perioderForKopi",selectValues:Y.map(c=>{const A=`${c.fom}_${c.tom}`,V=`${q(c.fom).format(re)} - ${q(c.tom).format(re)}`;return e.jsx("option",{value:A,children:V},A)}),onChange:c=>ie(c,Y),className:be.selectWidth,label:e.jsx(i,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),e.jsxs(_,{gap:"4",wrap:!0,children:[e.jsxs("div",{className:be.leftColumn,children:[r.erForeldet&&e.jsx(Tr,{}),!r.erForeldet&&e.jsxs(R,{gap:"2",children:[e.jsx(xe,{size:"small",children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),e.jsx(ue,{name:"begrunnelse",label:g.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[x,He,Ye,je],maxLength:1500,readOnly:a,className:be.explanationTextarea,description:g.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),e.jsx(C,{name:"valgtVilkarResultatType",label:e.jsx(i,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[x],radios:N.map(c=>({label:c.navn,value:c.kode})),isReadOnly:a,onChange:Ae})]})]}),e.jsx("div",{className:be.rightColumn,children:u&&e.jsxs(R,{gap:"2",children:[e.jsx(xe,{size:"small",children:e.jsx(i,{id:u===O.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),e.jsx(ue,{name:"vurderingBegrunnelse",label:g.formatMessage({id:u===O.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[x,He,Ye,je],maxLength:1500,readOnly:a}),u===O.GOD_TRO&&e.jsx(ae,{name:u,readOnly:a,erBelopetIBehold:w,feilutbetalingBelop:r.feilutbetaling}),u!==O.GOD_TRO&&e.jsx(te,{name:u,harGrunnerTilReduksjon:M,readOnly:a,handletUaktsomhetGrad:y,resetFields:Pe,erSerligGrunnAnnetValgt:G,erValgtResultatTypeForstoBurdeForstaatt:u===O.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:se,sarligGrunnTyper:me,antallYtelser:r.ytelser.length,feilutbetalingBelop:r.feilutbetaling,erTotalBelopUnder4Rettsgebyr:r.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:v},u)]})})]}),e.jsxs(_,{gap:"4",children:[e.jsx(S,{size:"small",variant:"primary",disabled:!p.formState.isDirty||a,children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),e.jsx(S,{size:"small",variant:"secondary",onClick:n,type:"button",children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),b&&e.jsx(tn,{showModal:!0,submit:ge})]})})},Jn=(r,t)=>{const{vilkarResultat:n,begrunnelse:a,vilkarResultatInfo:s}=r,d=n&&n.kode?n.kode:n;let m;const k=r.erForeldet?r.erForeldet:r.foreldet;if(k){const p=t.perioder.find(u=>u.fom===r.fom&&u.tom===r.tom);m={erForeldet:k,periodenErForeldet:!0,foreldetBegrunnelse:p?he(p.begrunnelse):void 0}}else m={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const g={valgtVilkarResultatType:d,begrunnelse:he(a),harMerEnnEnYtelse:r.ytelser.length>1,...m},b=d===O.GOD_TRO?ae.buildIntialValues(s):{},o=d!==void 0&&d!==O.GOD_TRO?te.buildInitalValues(s):{};return{...g,vurderingBegrunnelse:s?he(s.begrunnelse):void 0,[g.valgtVilkarResultatType]:{...b,...o}}},Wn=(r,t)=>{const{valgtVilkarResultatType:n,begrunnelse:a,vurderingBegrunnelse:s}=r,d=r[n],m=n===O.GOD_TRO?ae.transformValues(d,s):{},k=n!==O.GOD_TRO?te.transformValues(d,t,s):{};return{begrunnelse:a,fom:r.fom,tom:r.tom,vilkarResultat:n,vilkarResultatInfo:{...m,...k}}};jr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
} & DetaljertFeilutbetalingPeriode`,elements:[{name:"signature",type:"object",raw:`{
  erTotalBelopUnder4Rettsgebyr: boolean;
  begrunnelse?: string;
  erForeldet: boolean;
}`,signature:{properties:[{key:"erTotalBelopUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"erForeldet",value:{name:"boolean",required:!0}}]}},{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: string;
    hendelseUndertype?: string;
  };
  feilutbetaling: number;
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  redusertBeloper?: {
    erTrekk: boolean;
    belop: number;
  }[];
  oppfyltValg?: string;
  foreldet?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`,required:!0}},{key:"redusertBeloper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erTrekk: boolean;
  belop: number;
}`,signature:{properties:[{key:"erTrekk",value:{name:"boolean",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  erTrekk: boolean;
  belop: number;
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},periode:{required:!1,tsType:{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]},description:""},skjulPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},vilkarsVurdertePerioder:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const Qn="_margin_1wl4t_1",ye={margin:Qn},Zn={danger:e.jsx(en,{}),success:e.jsx(Xr,{}),warning:e.jsx(Zr,{})},Xn=(r,t)=>r.fom<t.fom?-1:r.fom>t.fom?1:0,et=r=>{const t=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":t},rt=(r=[])=>[...r].sort(Xn).map(t=>({...t,status:et(t)})),nt=r=>r===Te.MOR||r===Te.MEDMOR?e.jsx(an,{width:20,height:20,color:"var(--a-red-200)"}):r===Te.FAR?e.jsx(sn,{width:20,height:20,color:"var(--a-blue-600)"}):e.jsx(Qr,{width:20,height:20}),qr=({perioder:r,valgtPeriode:t,setPeriode:n,relasjonsRolleType:a,relasjonsRolleTypeKodeverk:s})=>{var w;const d=H(),m=rt(r),k=T.useCallback(l=>{const D=r.find(E=>E.id===l);D&&n(D)},[r,n]),g=q(m[0].fom),b=q(m[m.length-1].tom),[o,p]=T.useState(g),[u,y]=T.useState(b),M=T.useCallback(()=>{o.subtract(1,"month").isBefore(g)||(p(o.subtract(1,"month")),y(u.subtract(1,"month")))},[o,u,g]),v=T.useCallback(()=>{u.add(1,"month").isAfter(b)||(p(o.add(1,"month")),y(u.add(1,"month")))},[o,u,g]),P=T.useCallback(()=>{o.add(3,"month").isAfter(u)||(p(o.add(1,"month")),y(u.subtract(1,"month")))},[o,u]),G=T.useCallback(()=>{u.add(1,"month").diff(o.subtract(1,"month"),"months")<36&&(p(o.subtract(1,"month")),y(u.add(1,"month")))},[o,u]);return e.jsxs(R,{gap:"4",children:[e.jsx(Fe,{startDate:q(o).toDate(),endDate:q(u).add(1,"days").toDate(),children:e.jsx(Fe.Row,{label:((w=s.find(l=>l.kode===a))==null?void 0:w.navn)||"-",icon:nt(a),children:m.map(l=>e.jsx(Fe.Period,{start:q(l.fom).toDate(),end:q(l.tom).toDate(),status:l.status,icon:Zn[l.status],onSelectPeriod:()=>k(l.id),isActive:(t==null?void 0:t.id)===l.id,"aria-controls":"panel-tilbakekreving",id:l.id.toString()},l.id))})}),e.jsxs(_,{justify:"end",children:[e.jsx(S,{className:ye.margin,size:"small",icon:e.jsx(Jr,{"aria-hidden":!0}),onClick:P,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(S,{className:ye.margin,size:"small",icon:e.jsx(Wr,{"aria-hidden":!0}),onClick:G,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(S,{className:ye.margin,size:"small",icon:e.jsx(or,{"aria-hidden":!0}),onClick:M,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(S,{className:ye.margin,size:"small",icon:e.jsx(ur,{"aria-hidden":!0}),onClick:v,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};qr.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`},description:""},setPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(periode?: TidslinjePeriode) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"periode"}],return:{name:"void"}}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Ee=(r,t)=>I(r.fom).diff(I(t.fom)),Je=r=>!r.erForeldet&&(r.begrunnelse===void 0||r.erSplittet),tt=r=>{const t=r[r.valgtVilkarResultatType],n=t[t.handletUaktsomhetGrad];return t.tilbakekrevdBelop?{...r,[r.valgtVilkarResultatType]:{...qe(t,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...r,[r.valgtVilkarResultatType]:{...t,[t.handletUaktsomhetGrad]:{...qe(n,"belopSomSkalTilbakekreves")}}}:r},at=(r,t=[])=>t.map((n,a)=>{const s=r.find(k=>k.fom===n.fom&&k.tom===n.tom),d=s&&s[s.valgtVilkarResultatType]?s[s.valgtVilkarResultatType].erBelopetIBehold:void 0,m=s?!!s.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&((s==null?void 0:s.begrunnelse)===void 0||m),isGodkjent:!(n.erForeldet||d===!1),id:a}}),xr=(r,t)=>t.find(n=>!I(r.fom).isBefore(I(n.fom))&&!I(r.tom).isAfter(I(n.tom))),st=(r,t)=>t.every(n=>!(I(r.fom).isSameOrBefore(I(n.tom))&&I(n.fom).isSameOrBefore(I(r.tom)))),it=(r,t,n)=>{const s=r.reduce((g,b)=>g+b.feilutbetaling,0)<n*4,m=t.vilkarsVurdertePerioder.map(g=>{const b=xr(g,r);return{...b,harMerEnnEnYtelse:b&&b.ytelser.length>1,...qe(g,"feilutbetalingBelop"),feilutbetaling:g.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:s}});return{perioder:r.filter(g=>st(g,m)).map(g=>({...g,harMerEnnEnYtelse:g.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:s})).concat(m)}},lt=(r,t)=>{if(!(!r||!t))return t.map(n=>{const a=xr(n,r.perioder),s=a.foreldelseVurderingType?a.foreldelseVurderingType===Ve.FORELDET:a.foreldet;return{redusertBeloper:a.redusertBeloper,ytelser:a.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:a.årsak,begrunnelse:a.begrunnelse,erForeldet:s||!1}})},ot=(r,t)=>r.perioder.map(n=>({...Jn(n,t),fom:n.fom,tom:n.tom})).sort(Ee),ut=(r,t)=>({kode:De.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:r.filter(n=>!n.erForeldet).map(n=>Wn(n,t))}),dt=r=>{if(!r||r.reduce((a,s)=>s.erForeldet?a:a+1,0)<2)return;const n=r.reduce((a,s)=>{const{valgtVilkarResultatType:d}=s,m=s[d],{handletUaktsomhetGrad:k}=m,g=m[k];return g&&g.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?a+1:a},0);if(n>0&&n!==r.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Rr=({perioderForeldelse:r,kodeverkSamlingFpTilbake:t,submitCallback:n,readOnly:a,alleMerknaderFraBeslutter:s,perioder:d,vilkarvurdering:m,rettsgebyr:k,relasjonsRolleType:g,relasjonsRolleTypeKodeverk:b,beregnBelop:o,behandlingUuid:p,formData:u,setFormData:y})=>{var Ne;const M=it(d,m,k),[v,P]=T.useState(u||ot(M,r)),[G,w]=T.useState(!!u),[l,D]=T.useState(v==null?void 0:v.find(Je)),[E,me]=T.useState(!1),[N,se]=T.useState();T.useEffect(()=>{se(dt(v))},[v]);const ie=lt(M,v),ge=a||(l==null?void 0:l.erForeldet)===!0,Be=v.reduce((f,h)=>h.erForeldet?f:f+1,0),Ae=s[De.VURDER_TILBAKEKREVING],Pe=T.useCallback(()=>{me(!0),n(ut(v,t[fe.SARLIG_GRUNN]))},[v]),Y=at(v,ie),c=Y.some(f=>f.isAksjonspunktOpen),A=l?Y.find(f=>f.fom===l.fom&&f.tom===l.tom):void 0,V=f=>{const h=f?v.find(L=>L.fom===f.fom&&L.tom===f.tom):void 0;D(h)},j=()=>{const f=v.findIndex(h=>h.fom===(l==null?void 0:l.fom)&&h.tom===(l==null?void 0:l.tom));V(v[f+1])},$=()=>{const f=v.findIndex(h=>h.fom===(l==null?void 0:l.fom)&&h.tom===(l==null?void 0:l.tom));V(v[f-1])},X=()=>{V(void 0)},J=f=>{const h=qe(f,"erSplittet"),pe=v.filter(Q=>Q.fom!==h.fom&&Q.tom!==h.tom).concat(h).sort(Ee);P(pe),y(pe),w(!0),X();const le=pe.find(Je);le&&V(le)},U=f=>{const h=v.find(L=>L.fom===(l==null?void 0:l.fom)&&L.tom===(l==null?void 0:l.tom));if(h){const L=f.map(Q=>({...tt(h),...Q,erSplittet:!0})),le=v.filter(Q=>Q.fom!==(l==null?void 0:l.fom)&&Q.tom!==(l==null?void 0:l.tom)).concat(L).sort(Ee);X(),w(!0),P(le),y(le),V(L[0])}},W=ie?ie.find(f=>f.fom===(l==null?void 0:l.fom)&&f.tom===(l==null?void 0:l.tom)):void 0;return e.jsx(zr,{merknaderFraBeslutter:Ae,withoutBorder:!0,children:e.jsxs(R,{gap:"4",children:[e.jsx(xe,{size:"small",children:e.jsx(i,{id:"Behandlingspunkt.Tilbakekreving"})}),c&&e.jsx(Hr,{children:e.jsx(i,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),v&&e.jsxs(e.Fragment,{children:[e.jsx(qr,{perioder:Y,valgtPeriode:A,setPeriode:V,relasjonsRolleType:g,relasjonsRolleTypeKodeverk:b}),l&&W&&e.jsx("div",{id:"panel-tilbakekreving","aria-controls":A==null?void 0:A.id.toString(),children:e.jsx(ln,{borderWidth:"1",padding:"4",children:e.jsxs(R,{gap:"4",children:[e.jsx(gr,{setNestePeriode:j,setForrigePeriode:$,periode:W,readOnly:a,oppdaterSplittedePerioder:U,behandlingUuid:p,beregnBelop:o,lukkPeriode:X}),e.jsx(pr,{feilutbetaling:W.feilutbetaling,fom:W.fom,tom:W.tom,arsakHendelseNavn:(Ne=t[Dr.HENDELSE_TYPE].find(f=>{var h;return f.kode===((h=W.årsak)==null?void 0:h.hendelseType)}))==null?void 0:Ne.navn}),e.jsx(jr,{periode:l,data:W,antallPerioderMedAksjonspunkt:Be,readOnly:ge,skjulPeriode:X,oppdaterPeriode:J,kodeverkSamlingFpTilbake:t,vilkarsVurdertePerioder:v},A==null?void 0:A.id)]})})})]}),N&&e.jsx(lr,{variant:"error",children:e.jsx(i,{id:N})}),e.jsx(_,{children:e.jsx(Vr,{isReadOnly:ge,isDirty:G,isSubmittable:!c&&!l&&!N,onClick:Pe,isSubmitting:E})})]})})};Rr.__docgenInfo={description:`TilbakekrevingForm

Behandlingspunkt Tilbakekreving. Setter opp en tidslinje som lar en velge periode. Ved valg blir et detaljevindu vist.`,methods:[],displayName:"TilbakekrevingForm",props:{perioderForeldelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: VilkårsvurderingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  vilkarsVurdertePerioder: {
    fom: string;
    tom: string;
    vilkarResultat: string;
    begrunnelse?: string;
    vilkarResultatInfo: {
      begrunnelse?: string;
    } & (VilkårResultatAnnet | VilkårResultatGodTro);
    feilutbetalingBelop?: number;
  }[];
} & AksjonspunktTilBekreftelse<TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING>`,elements:[{name:"signature",type:"object",raw:`{
  vilkarsVurdertePerioder: {
    fom: string;
    tom: string;
    vilkarResultat: string;
    begrunnelse?: string;
    vilkarResultatInfo: {
      begrunnelse?: string;
    } & (VilkårResultatAnnet | VilkårResultatGodTro);
    feilutbetalingBelop?: number;
  }[];
}`,signature:{properties:[{key:"vilkarsVurdertePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  vilkarResultat: string;
  begrunnelse?: string;
  vilkarResultatInfo: {
    begrunnelse?: string;
  } & (VilkårResultatAnnet | VilkårResultatGodTro);
  feilutbetalingBelop?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"vilkarResultat",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarResultatInfo",value:{name:"intersection",raw:`{
  begrunnelse?: string;
} & (VilkårResultatAnnet | VilkårResultatGodTro)`,elements:[{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]}},{name:"unknown"}],required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:`{
  fom: string;
  tom: string;
  vilkarResultat: string;
  begrunnelse?: string;
  vilkarResultatInfo: {
    begrunnelse?: string;
  } & (VilkårResultatAnnet | VilkårResultatGodTro);
  feilutbetalingBelop?: number;
}[]`,required:!0}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: string;
    hendelseUndertype?: string;
  };
  feilutbetaling: number;
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  redusertBeloper?: {
    erTrekk: boolean;
    belop: number;
  }[];
  oppfyltValg?: string;
  foreldet?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`,required:!0}},{key:"redusertBeloper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erTrekk: boolean;
  belop: number;
}`,signature:{properties:[{key:"erTrekk",value:{name:"boolean",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  erTrekk: boolean;
  belop: number;
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}],raw:"DetaljertFeilutbetalingPeriode[]"},description:""},vilkarvurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  vilkarsVurdertePerioder: VilkårsvurdertPeriode[];
}`,signature:{properties:[{key:"vilkarsVurdertePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  vilkarResultat: string;
  begrunnelse: string;
  vilkarResultatInfo: VilkarResultatInfo;
  feilutbetalingBelop?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"vilkarResultat",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"vilkarResultatInfo",value:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
  aktsomhet?: string;
  aktsomhetInfo?: AktsomhetInfo;
  erBelopetIBehold?: boolean;
  tilbakekrevesBelop?: number;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktsomhet",value:{name:"string",required:!1}},{key:"aktsomhetInfo",value:{name:"signature",type:"object",raw:`{
  sarligGrunner: string[];
  harGrunnerTilReduksjon: boolean;
  andelTilbakekreves: number;
  ileggRenter: boolean;
  tilbakekrevesBelop: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:"VilkårsvurdertPeriode[]",required:!0}}]}},description:""},rettsgebyr:{required:!0,tsType:{name:"number",raw:"DetaljerteFeilutbetalingsperioder['rettsgebyr']"},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params?: any, keepData?: boolean) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},formData:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: CustomVilkarsVurdertePeriode[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const mt=Cr(dr),Br=({behandling:r,perioderForeldelse:t,vilkarvurderingsperioder:n,vilkarvurdering:a,beregnBelop:s,kodeverkSamlingFpTilbake:d,submitCallback:m,alleMerknaderFraBeslutter:k,isReadOnly:g,formData:b,setFormData:o,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:u})=>e.jsx($r,{value:mt,children:e.jsx(Rr,{behandlingUuid:r.uuid,perioderForeldelse:t,perioder:n.perioder,rettsgebyr:n.rettsgebyr,vilkarvurdering:a,submitCallback:m,readOnly:g,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:u,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:d,beregnBelop:s,formData:b,setFormData:o})});Br.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`},description:""},vilkarvurderingsperioder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  perioder: DetaljertFeilutbetalingPeriode[];
  rettsgebyr: number;
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: string;
    hendelseUndertype?: string;
  };
  feilutbetaling: number;
  ytelser: {
    aktivitet: string;
    belop: number;
  }[];
  redusertBeloper?: {
    erTrekk: boolean;
    belop: number;
  }[];
  oppfyltValg?: string;
  foreldet?: boolean;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseUndertype?: string;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseUndertype",value:{name:"string",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`,required:!0}},{key:"redusertBeloper",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erTrekk: boolean;
  belop: number;
}`,signature:{properties:[{key:"erTrekk",value:{name:"boolean",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  erTrekk: boolean;
  belop: number;
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}],raw:"DetaljertFeilutbetalingPeriode[]",required:!0}},{key:"rettsgebyr",value:{name:"number",required:!0}}]}},description:""},vilkarvurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  vilkarsVurdertePerioder: VilkårsvurdertPeriode[];
}`,signature:{properties:[{key:"vilkarsVurdertePerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  vilkarResultat: string;
  begrunnelse: string;
  vilkarResultatInfo: VilkarResultatInfo;
  feilutbetalingBelop?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"vilkarResultat",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"vilkarResultatInfo",value:{name:"signature",type:"object",raw:`{
  begrunnelse: string;
  aktsomhet?: string;
  aktsomhetInfo?: AktsomhetInfo;
  erBelopetIBehold?: boolean;
  tilbakekrevesBelop?: number;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!0}},{key:"aktsomhet",value:{name:"string",required:!1}},{key:"aktsomhetInfo",value:{name:"signature",type:"object",raw:`{
  sarligGrunner: string[];
  harGrunnerTilReduksjon: boolean;
  andelTilbakekreves: number;
  ileggRenter: boolean;
  tilbakekrevesBelop: number;
  tilbakekrevSelvOmBeloepErUnder4Rettsgebyr: boolean;
  annetBegrunnelse: string;
  sarligGrunnerBegrunnelse: string;
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:"VilkårsvurdertPeriode[]",required:!0}}]}},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params?: any, keepData?: boolean) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const gt=Or(dr),pt={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:Ve.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:Ve.FORELDET}]},Ar={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:"MEDLEMSKAP"},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},kt={vilkarsVurdertePerioder:[]},bt=_r,fa={component:Br,decorators:[gt],args:{submitCallback:Pr("button-click"),behandling:{uuid:"1",versjon:1,status:Nr.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:bt,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:pt,vilkarvurdering:kt,beregnBelop:r=>Promise.resolve(r),alleMerknaderFraBeslutter:{},relasjonsRolleType:Te.MOR,relasjonsRolleTypeKodeverk:[{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},ve={args:{vilkarvurderingsperioder:Ar}},ce={args:{vilkarvurderingsperioder:{perioder:[Ar.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:{kode:"MEDLEM",kodeverk:"",navn:"§22 Medlemskap"}},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};var We,Qe,Ze;ve.parameters={...ve.parameters,docs:{...(We=ve.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...(Ze=(Qe=ve.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var Xe,er,rr;ce.parameters={...ce.parameters,docs:{...(Xe=ce.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: {
      perioder: [defaultVilkarvurderingsperioder.perioder[0], {
        fom: '2019-04-01',
        tom: '2019-10-01',
        foreldet: false,
        feilutbetaling: 100,
        årsak: {
          hendelseType: {
            kode: 'MEDLEM',
            kodeverk: '',
            navn: '§22 Medlemskap'
          }
        },
        redusertBeloper: [],
        ytelser: [{
          aktivitet: 'Arbeidstaker',
          belop: 2050
        }]
      }],
      rettsgebyr: 1000
    } as DetaljerteFeilutbetalingsperioder
  }
}`,...(rr=(er=ce.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};const Ta=["Default","MedToPerioder"];export{ve as Default,ce as MedToPerioder,Ta as __namedExportsOrder,fa as default};
