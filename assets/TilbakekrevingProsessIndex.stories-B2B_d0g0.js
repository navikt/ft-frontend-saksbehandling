import{a as Pr}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as nr,X as Fr,Z as $,Q as tr,H as we,n as Sr,B as wr,e as oe,K as _r}from"./index.es-kUJJLXnO.js";import{g as Vr}from"./withIntl-BiZIRch7.js";import{a as Or}from"./alleTilbakekrevingKodeverk-dIUSSyeF.js";import{e as x,O as Ir,H as Mr,D as Er,o as ar,i as Gr,N as he,a as Me,l as Ee,S as ve,h as fe,I as Dr,m as _e,d as Nr}from"./style-BR8WP_Fa.js";import{u as z,P as Ur}from"./index-D9DDUrbY.js";import{d as q,P as Q,A as Lr,e as Kr,g as ee,K as sr,a as Te,j as je,n as $r}from"./index.es-Dh3mAfPy.js";import{r as T}from"./index-B5OHeJSP.js";import{h as E}from"./moment-C5S46NFB.js";import{A as W,J as Ue,W as Cr,N as zr}from"./index.es-BdLW2Tvk.js";import{c as ir,u as Ge}from"./ReadOnlyIcon-3mCRcvzc.js";import{M as pe}from"./Modal-C6iE4cX-.js";import{H as qe,L as C,a as S,D as xe,E as Hr}from"./Label-ZYbyet41.js";import{M as i}from"./message-BcVJpMje.js";import{V as R,H as I}from"./VStack-DrfGxCua.js";import{A as lr}from"./Alert-Pz1mMbfe.js";import{B as w}from"./Button-C4dKKha_.js";import{S as Le,T as Fe,a as Yr,b as Wr,d as Jr,e as Xr,f as Zr,c as Qr}from"./Timeline-Dqkdb2KD.js";import{S as en}from"./Scissors-DZqh_mpJ.js";import{S as or,a as ur}from"./DatePicker-DoJN_gWH.js";import{S as rn}from"./XMark-BWJopseo.js";import{T as K}from"./Table-C_9PXju-.js";import{T as nn,m as dr}from"./nb_NO-Bjwgdzy4.js";import{a as tn,S as an}from"./SilhouetteFill-DMHyitGq.js";import{B as sn}from"./Box-B_1ucAEI.js";/* empty css              */import"./v4-CtRu48qb.js";import"./Checkbox-CHErwGPi.js";import"./clsx-B-dksMZM.js";import"./omit-B7stZg_p.js";import"./useId-e75EoDiw.js";import"./useFormField-BKpVC0Pg.js";import"./Fieldset-Cs108nF-.js";import"./Tag-DqR_3-Kz.js";import"./Textarea-DQ7w4yc6.js";import"./index-sT6466e8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./useClientLayoutEffect-DnVV5Q77.js";import"./create-context-BlrHNsQj.js";import"./Loader-CoAqN6Lw.js";import"./Provider-B_QIWjIe.js";import"./useDatepicker-oJRfFMcH.js";import"./useDateTranslationContext-DuYWebvA.js";import"./Radio-BIYAymoT.js";import"./Select-wYL7g-5T.js";import"./ChevronDown-Bw2TG6jd.js";import"./useId-B9OmVTHV.js";import"./TextField-DEo8zdDE.js";import"./PersonPencilFill-DS1qmMzQ.js";import"./KeyVerticalFill-CH0oXMyL.js";import"./Checkmark-uHeVskEM.js";import"./floating-ui.react-FIE1On8Y.js";import"./Theme-6IdwQf2V.js";import"./BasePrimitive-B7qNT1W_.js";import"./XMarkOctagonFill-BUHxl6gj.js";import"./ExclamationmarkTriangleFill-Ck4a0gXp.js";import"./Popover-CgZ7HliT.js";var De=(r=>(r.VURDER_TILBAKEKREVING="5002",r))(De||{});const ln="_button_8q57x_1",on="_cancelButton_8q57x_5",Ke={button:ln,cancelButton:on},un=(r,t)=>n=>n&&(Mr(n)(q(r.tom.toString()).subtract(1,"day"))||Er(n)(r.fom))?t.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,dn=(r,t)=>{const n=q(r.forstePeriodeTomDato).add(1,"days"),a={fom:t.fom,tom:r.forstePeriodeTomDato},s={fom:n.format(Lr),tom:t.tom};return{forstePeriode:a,andrePeriode:s}},mr=({periodeData:r,showModal:t,cancelEvent:n,finnesBelopMed0Verdi:a,splitPeriod:s})=>{const d=z(),m=ir();return e.jsx(nr,{formMethods:m,onSubmit:k=>s(dn(k,r)),children:e.jsxs(pe,{open:t,"aria-label":d.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[e.jsx(pe.Header,{children:e.jsx(qe,{size:"small",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(pe.Body,{children:e.jsxs(R,{gap:"4",children:[e.jsxs("div",{children:[e.jsx(C,{size:"small",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(S,{size:"small",children:`${q(r.fom.toString()).format(Q)} - ${q(r.tom.toString()).format(Q)}`})]}),e.jsx(Fr,{name:"forstePeriodeTomDato",label:e.jsx(i,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[x,Ir,un(r,d)],fromDate:q(r.fom).toDate(),toDate:q(r.tom).toDate()}),a&&e.jsx(lr,{variant:"error",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(pe.Footer,{children:[e.jsx(w,{size:"small",variant:"primary",className:Ke.button,disabled:!m.formState.isDirty,children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(w,{size:"small",variant:"secondary",onClick:n,className:Ke.cancelButton,type:"button",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};mr.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const mn="_timeLineButton_wnej3_1",gn="_splitPeriodImage_wnej3_24",pn="_splitPeriodPosition_wnej3_30",kn="_leftMargin_wnej3_33",bn="_margin_wnej3_37",yn="_fix_wnej3_41",Se={timeLineButton:mn,splitPeriodImage:gn,splitPeriodPosition:pn,leftMargin:kn,margin:bn,fix:yn},cn=!1,gr=({setNestePeriode:r,setForrigePeriode:t,readOnly:n,lukkPeriode:a,periode:s,beregnBelop:d,behandlingUuid:m,oppdaterSplittedePerioder:k})=>{const g=z(),[b,o]=T.useState(!1),[p,u]=T.useState(!1),c=T.useCallback(P=>{o(!0),P.preventDefault()},[o]),G=T.useCallback(()=>{o(!1)},[]),v=P=>{u(!1);const D={belop:s.feilutbetaling,fom:P.forstePeriode.fom,tom:P.forstePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "},_={belop:s.feilutbetaling,fom:P.andrePeriode.fom,tom:P.andrePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "};d({behandlingUuid:m,perioder:[D,_]}).then(N=>{const{perioder:M}=N;if(M.some(U=>U.belop===0))u(!0);else{const U={fom:D.fom,tom:D.tom,feilutbetaling:M[0].belop},te={fom:_.fom,tom:_.tom,feilutbetaling:M[1].belop};G(),k([U,te])}})};return e.jsxs(I,{children:[e.jsxs(C,{size:"small",children:[e.jsx(i,{id:"PeriodeController.Detaljer"}),cn]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),e.jsx(w,{className:Se.margin,size:"xsmall",icon:e.jsx(en,{"aria-hidden":!0}),onClick:c,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(i,{id:"PeriodeController.DelOppPerioden"})})]}),b&&e.jsx(mr,{cancelEvent:G,showModal:b,periodeData:s,splitPeriod:v,finnesBelopMed0Verdi:p}),e.jsx(Le,{}),e.jsx(w,{className:Se.margin,size:"xsmall",icon:e.jsx(or,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(i,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(w,{className:Se.margin,size:"xsmall",icon:e.jsx(ur,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(i,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(w,{size:"xsmall",icon:e.jsx(rn,{"aria-hidden":!0}),onClick:a,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};gr.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params?: any, keepData?: boolean) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},oppdaterSplittedePerioder:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppdatertePerioder: SplittetPeriode[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const vn="_infoSummary_14r2l_1",fn="_positivNumber_14r2l_8",Tn="_redNumber_14r2l_12",hn="_resultName_14r2l_17",le={infoSummary:vn,positivNumber:fn,redNumber:Tn,resultName:hn},pr=({fom:r,tom:t,feilutbetaling:n,arsakHendelseNavn:a})=>{const s=Kr(r,t);return e.jsxs(R,{gap:"2",className:le.infoSummary,children:[e.jsxs(I,{justify:"space-between",children:[e.jsx(C,{size:"small",children:`${q(r).format(Q)} - ${q(t).format(Q)}`}),e.jsx(S,{size:"small",children:s.formattedString})]}),e.jsxs(I,{gap:"4",children:[e.jsxs(S,{size:"small",className:le.resultName,children:[e.jsx(i,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:n?le.redNumber:le.positivNumber,children:ee(n)})]}),a&&e.jsx(S,{size:"small",className:le.resultName,children:a})]})]})};pr.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var B=(r=>(r.FORSETT="FORSETT",r.GROVT_UAKTSOM="GROVT_UAKTSOM",r.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",r))(B||{});const jn=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var kr=(r=>(r.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",r.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",r.STOERRELSE_BELOEP="STOERRELSE_BELOEP",r.TID_FRA_UTBETALING="TID_FRA_UTBETALING",r.ANNET="ANNET",r))(kr||{}),O=(r=>(r.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",r.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",r.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",r.GOD_TRO="GOD_TRO",r))(O||{});const br=({name:r,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const a=Ge(),s=`${r}.skalDetTilleggesRenter`;return T.useEffect(()=>{a.getValues(s)===void 0&&a.setValue(s,!1)},[]),e.jsx("div",{children:e.jsxs(W,{alignOffset:n?320:360,children:[n&&e.jsxs(R,{gap:"4",children:[e.jsx(C,{size:"small",children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(S,{size:"small",children:"100 %"}),e.jsx($,{name:`${r}.skalDetTilleggesRenter`,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[x],radios:[{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:t,parse:d=>d==="true",isHorizontal:!0})]}),!n&&e.jsxs(R,{gap:"2",children:[e.jsxs("div",{children:[e.jsx(xe,{children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(S,{size:"small",children:"100 %"})]}),e.jsx(S,{size:"small",children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})};br.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const qn="_suffix_cawxu_1",xn="_suffixGrovText_cawxu_4",Rn="_labelPadding_cawxu_8",Bn="_inputFelt_cawxu_12",Z={suffix:qn,suffixGrovText:xn,labelPadding:Rn,inputFelt:Bn},$e=ar(0),An=Gr(99.99),Pn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},Fn=(r,t)=>n=>{if(n>=t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},ue="Egendefinert",Ve=["30","50","70",ue],yr=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:s,feilutbetalingBelop:d,andelSomTilbakekreves:m})=>{const k=z(),g=Ge(),b=`${r}.skalDetTilleggesRenter`;return T.useEffect(()=>{g.getValues(b)===void 0&&g.setValue(b,!1)},[]),e.jsxs(R,{gap:"4",children:[e.jsx($,{name:`${r}.harGrunnerTilReduksjon`,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[x],radios:[{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0}),t&&e.jsx(W,{alignOffset:24,children:e.jsxs(I,{gap:"4",children:[!s&&m!==ue&&e.jsxs(e.Fragment,{children:[e.jsx(C,{size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(I,{gap:"2",children:[e.jsx(tr,{name:`${r}.andelSomTilbakekreves`,label:"",validate:[x],selectValues:Ve.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx("div",{className:Z.suffix,children:"%"})]})]}),!s&&m===ue&&e.jsxs(e.Fragment,{children:[e.jsx(C,{size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(I,{gap:"4",children:[e.jsx(we,{className:Z.inputFelt,name:`${r}.andelSomTilbakekrevesManuell`,readOnly:n,validate:[x,$e,An],normalizeOnBlur:o=>Number.isNaN(o)?o:parseFloat(o.toString()).toFixed(2),format:o=>o.toString().replace(".",","),parse:o=>o.toString().replace(",",".")}),e.jsx("div",{className:a===B.GROVT_UAKTSOM?Z.suffixGrovText:Z.suffix,children:"%"})]})]}),s&&e.jsx(we,{name:`${r}.belopSomSkalTilbakekreves`,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[x,$e,Fn(k,d)],readOnly:n,format:ee,parse:Pn}),a===B.GROVT_UAKTSOM&&e.jsxs("div",{children:[e.jsx(xe,{children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),e.jsx(S,{size:"small",className:Z.labelPadding,children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),t===!1&&e.jsxs(W,{alignOffset:90,children:[e.jsx(xe,{children:e.jsx(i,{id:s?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),e.jsxs(R,{gap:"4",children:[e.jsx(S,{size:"small",className:Z.labelPadding,children:s?ee(d):"100%"}),a===B.GROVT_UAKTSOM&&e.jsx($,{name:b,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[x],radios:[{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})]})};yr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const Sn=Me(3),wn=Ee(1500),Oe=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:s,sarligGrunnTyper:d,harMerEnnEnYtelse:m,feilutbetalingBelop:k,andelSomTilbakekreves:g})=>{const b=z(),{watch:o}=Ge(),p=!d.some(c=>!!o(`${r}.${c.kode}`)),u=Sr(r,p?b.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return e.jsxs(R,{gap:"4",children:[e.jsx(C,{size:"small",children:e.jsx(i,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),e.jsx("div",{children:d.map(c=>e.jsx(wr,{name:`${r}.${c.kode}`,label:c.navn,readOnly:n},c.kode))}),s&&e.jsx(oe,{name:`${r}.annetBegrunnelse`,label:"",validate:[x,Sn,wn,he],maxLength:1500,readOnly:n}),u&&e.jsx(Hr,{children:u}),e.jsx(yr,{name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:m,feilutbetalingBelop:k,andelSomTilbakekreves:g})]})};Oe.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const _n="_explanationTextarea_1kabz_1",Vn="_panelWidth_1kabz_5",cr={explanationTextarea:_n,panelWidth:Vn},On=Me(3),In=Ee(1500),Ce=(r,t,n)=>e.jsxs(R,{gap:"4",children:[e.jsx(C,{size:"small",children:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),e.jsx(oe,{name:`${r}.sarligGrunnerBegrunnelse`,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[x,On,In,he],maxLength:1500,readOnly:t,className:cr.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]}),vr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:d,feilutbetalingBelop:m,erTotalBelopUnder4Rettsgebyr:k,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:b,name:o})=>{const p=z(),u=b?180:200;return e.jsx(W,{alignOffset:n===B.GROVT_UAKTSOM?u:20,children:e.jsxs("div",{className:cr.panelWidth,children:[n===B.SIMPEL_UAKTSOM&&k&&e.jsx($,{name:`${o}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[x],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:t,radios:[{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:e.jsxs("div",{style:{marginTop:"10px"},children:[Ce(o,t,p),e.jsx(Oe,{name:o,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:d,feilutbetalingBelop:m,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:g})]})},{label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:e.jsx("div",{style:{marginTop:"10px"},children:e.jsx(W,{alignOffset:55,children:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})})}]}),(n!==B.SIMPEL_UAKTSOM||!k)&&e.jsxs(e.Fragment,{children:[Ce(o,t,p),e.jsx(Oe,{name:o,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:d,feilutbetalingBelop:m,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:g})]})]})})};vr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const fr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:d,harMerEnnEnYtelse:m,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:b,name:o})=>e.jsxs(e.Fragment,{children:[n===B.FORSETT&&e.jsx(br,{name:o,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:s}),n!==B.FORSETT&&e.jsx(vr,{name:o,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:d,harMerEnnEnYtelse:m,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:b,erValgtResultatTypeForstoBurdeForstaatt:s})]});fr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Mn=[B.GROVT_UAKTSOM,B.SIMPEL_UAKTSOM,B.FORSETT],En={[B.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[B.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[B.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},re=({readOnly:r,resetFields:t,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:s=!1,erValgtResultatTypeForstoBurdeForstaatt:d=!1,aktsomhetTyper:m,sarligGrunnTyper:k,antallYtelser:g,feilutbetalingBelop:b,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:p,name:u})=>e.jsxs(e.Fragment,{children:[e.jsx($,{name:`${u}.handletUaktsomhetGrad`,label:e.jsx(i,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[x],radios:m.map(c=>({label:d?e.jsx(i,{id:En[c.kode]}):c.navn,value:c.kode})),isReadOnly:r,onChange:t,isHorizontal:!0}),Mn.some(c=>c===n)&&e.jsx(fr,{name:`${u}.${n}`,harGrunnerTilReduksjon:a,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:s,erValgtResultatTypeForstoBurdeForstaatt:d,sarligGrunnTyper:k,harMerEnnEnYtelse:g>1,feilutbetalingBelop:b,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:p})]}),Gn=(r,t)=>{const n=parseInt(r,10);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Dn=(r,t)=>{const n=parseFloat(r);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Nn=(r,t)=>{if(r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=t.reduce((d,m)=>r[m.kode]?d.concat(m.kode):d,[]),{harGrunnerTilReduksjon:a}=r,s=r.andelSomTilbakekreves===ue?Dn(r.andelSomTilbakekrevesManuell,a):Gn(r.andelSomTilbakekreves,a);return{harGrunnerTilReduksjon:a,ileggRenter:a?void 0:r.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:r.harGrunnerTilReduksjon?sr(r.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:r.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...s}};re.transformValues=(r,t,n)=>{const a=r[r.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:r.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:a?Nn(a,t):null}};const Un=(r,t)=>({andelSomTilbakekreves:t===void 0||Ve.includes(t)?t:ue,andelSomTilbakekrevesManuell:t&&Ve.includes(t)?void 0:r.andelTilbakekreves,harGrunnerTilReduksjon:r.harGrunnerTilReduksjon,skalDetTilleggesRenter:r.ileggRenter,belopSomSkalTilbakekreves:r.tilbakekrevesBelop,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:Te(r.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...r.sarligGrunner?r.sarligGrunner.reduce((n,a)=>({...n,[a.kode?a.kode:a]:!0}),{}):{}});re.buildInitalValues=r=>{const{aktsomhet:t,aktsomhetInfo:n}=r,a=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,s=n?{[t.kode&&"kode"in t?t.kode:t]:Un(n,a)}:{};return{handletUaktsomhetGrad:t&&t.kode&&"kode"in t?t.kode:t,...s}};re.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Tr=()=>e.jsxs(I,{gap:"4",children:[e.jsx(oe,{name:"foreldetBegrunnelse",label:e.jsx(i,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),e.jsx($,{name:"periodenErForeldet",label:e.jsx(xe,{children:e.jsx(i,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:e.jsx(i,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]});Tr.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const Ln="_arrowbox_ych2z_1",Kn="_tilbakekrevdBelopInput_ych2z_4",ze={arrowbox:Ln,tilbakekrevdBelopInput:Kn},$n=ar(1),Cn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},zn=(r,t)=>n=>{if(n>t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ne=({name:r,readOnly:t,erBelopetIBehold:n,feilutbetalingBelop:a})=>{const s=z();return e.jsxs(R,{gap:"2",children:[e.jsx($,{name:`${r}.erBelopetIBehold`,label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[x],radios:[{label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:t,isTrueOrFalseSelection:!0,isHorizontal:!0}),e.jsxs("div",{className:ze.arrowbox,children:[n===!0&&e.jsx(W,{alignOffset:25,children:e.jsx(we,{name:`${r}.tilbakekrevdBelop`,label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[x,$n,zn(s,a)],readOnly:t,className:ze.tilbakekrevdBelopInput,format:ee,parse:Cn})}),n===!1&&e.jsx(W,{alignOffset:90,children:e.jsx(S,{size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ne.transformValues=(r,t)=>({"@type":"godTro",begrunnelse:t,erBelopetIBehold:r.erBelopetIBehold,tilbakekrevesBelop:r.erBelopetIBehold?sr(r.tilbakekrevdBelop):void 0});ne.buildIntialValues=r=>({erBelopetIBehold:r.erBelopetIBehold,tilbakekrevdBelop:r.tilbakekrevesBelop});ne.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Hn="_feilutbetalingTable_1fsd2_1",Yn={feilutbetalingTable:Hn},hr=({ytelser:r})=>{if(r.length===0)return null;let t=0;return e.jsxs(K,{className:Yn.feilutbetalingTable,children:[e.jsx(K.Header,{children:e.jsxs(K.Row,{children:[e.jsx(K.HeaderCell,{scope:"col",children:e.jsx(i,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),e.jsx(K.HeaderCell,{scope:"col",children:e.jsx(i,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),e.jsx(K.Body,{children:r.map(n=>(t+=1,e.jsxs(K.Row,{children:[e.jsx(K.DataCell,{children:e.jsx(S,{size:"small",children:n.aktivitet})}),e.jsx(K.DataCell,{children:e.jsx(S,{size:"small",children:ee(n.belop)})})]},n.aktivitet+n.belop+t)))})]})};hr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Wn="_explanationTextarea_1udkt_1",Jn="_leftColumn_1udkt_5",Xn="_rightColumn_1udkt_9",Zn="_selectWidth_1udkt_12",ke={explanationTextarea:Wn,leftColumn:Jn,rightColumn:Xn,selectWidth:Zn},He=Me(3),Ye=Ee(1500),jr=({data:r,periode:t,skjulPeriode:n,readOnly:a,oppdaterPeriode:s,vilkarsVurdertePerioder:d,kodeverkSamlingFpTilbake:m,antallPerioderMedAksjonspunkt:k})=>{const g=z(),[b,o]=T.useState(!1),p=ir({defaultValues:t}),u=p.watch("valgtVilkarResultatType"),c=p.watch(`${u}.handletUaktsomhetGrad`),G=p.watch(`${u}.${c}.harGrunnerTilReduksjon`),v=p.watch(`${u}.${c}.andelSomTilbakekreves`),P=p.watch(`${u}.${c}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),D=p.watch(`${u}.${c}.${kr.ANNET}`),_=p.watch(`${u}.erBelopetIBehold`),l=Ue(u),N=Ue(c),M=r.redusertBeloper,de=m[ve.SARLIG_GRUNN],U=m[ve.VILKAR_RESULTAT],te=jn.map(y=>m[ve.AKTSOMHET].find(F=>F.kode===y)),ae=(y,F)=>{const X=y.target.value.split("_"),j=F.find(A=>A.fom===X[0]&&A.tom===X[1]),V=j==null?void 0:j.valgtVilkarResultatType,Pe=j&&V?j[V]:void 0,H=JSON.parse(JSON.stringify(Pe));if(V!==O.GOD_TRO){const{handletUaktsomhetGrad:A}=H;A!==B.FORSETT&&(t==null?void 0:t.harMerEnnEnYtelse)!==(j==null?void 0:j.harMerEnnEnYtelse)&&(H[A].andelSomTilbakekreves=null,H[A].andelSomTilbakekrevesManuell=null,H[A].belopSomSkalTilbakekreves=null)}p.setValue("valgtVilkarResultatType",V,{shouldDirty:!0}),p.setValue("begrunnelse",j==null?void 0:j.begrunnelse,{shouldDirty:!0}),p.setValue("vurderingBegrunnelse",j==null?void 0:j.vurderingBegrunnelse,{shouldDirty:!0}),V&&p.setValue(V,H,{shouldDirty:!0}),y.preventDefault()},me=()=>{o(!b),s(p.getValues())},Re=y=>{k>1&&r.erTotalBelopUnder4Rettsgebyr&&P===!1?o(!b):s(y)},Be=()=>{l&&p.resetField(l)},Ae=()=>{N&&p.resetField(`${u}.${N}`)},se=T.useCallback(y=>e.jsx("b",{children:y}),[]),J=d.filter(y=>!y.erForeldet&&y.valgtVilkarResultatType!=null);return e.jsx(nr,{formMethods:p,onSubmit:Re,children:e.jsxs(R,{gap:"4",children:[e.jsx(R,{gap:"2",children:M&&M.map(y=>e.jsx(S,{size:"small",children:e.jsx(i,{id:y.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:ee(y.belop),b:se}})},y.belop))}),e.jsx(hr,{ytelser:r.ytelser}),!a&&!r.erForeldet&&J.length>0&&e.jsx(tr,{name:"perioderForKopi",selectValues:J.map(y=>{const F=`${y.fom}_${y.tom}`,X=`${q(y.fom).format(Q)} - ${q(y.tom).format(Q)}`;return e.jsx("option",{value:F,children:X},F)}),onChange:y=>ae(y,J),className:ke.selectWidth,label:e.jsx(i,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),e.jsxs(I,{gap:"4",wrap:!0,children:[e.jsxs("div",{className:ke.leftColumn,children:[r.erForeldet&&e.jsx(Tr,{}),!r.erForeldet&&e.jsxs(R,{gap:"2",children:[e.jsx(qe,{size:"small",children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),e.jsx(oe,{name:"begrunnelse",label:g.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[x,He,Ye,he],maxLength:1500,readOnly:a,className:ke.explanationTextarea,description:g.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),e.jsx($,{name:"valgtVilkarResultatType",label:e.jsx(i,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[x],radios:U.map(y=>({label:y.navn,value:y.kode})),isReadOnly:a,onChange:Be})]})]}),e.jsx("div",{className:ke.rightColumn,children:u&&e.jsxs(R,{gap:"2",children:[e.jsx(qe,{size:"small",children:e.jsx(i,{id:u===O.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),e.jsx(oe,{name:"vurderingBegrunnelse",label:g.formatMessage({id:u===O.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[x,He,Ye,he],maxLength:1500,readOnly:a}),u===O.GOD_TRO&&e.jsx(ne,{name:u,readOnly:a,erBelopetIBehold:_,feilutbetalingBelop:r.feilutbetaling}),u!==O.GOD_TRO&&e.jsx(re,{name:u,harGrunnerTilReduksjon:G,readOnly:a,handletUaktsomhetGrad:c,resetFields:Ae,erSerligGrunnAnnetValgt:D,erValgtResultatTypeForstoBurdeForstaatt:u===O.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:te,sarligGrunnTyper:de,antallYtelser:r.ytelser.length,feilutbetalingBelop:r.feilutbetaling,erTotalBelopUnder4Rettsgebyr:r.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:v},u)]})})]}),e.jsxs(I,{gap:"4",children:[e.jsx(w,{size:"small",variant:"primary",disabled:!p.formState.isDirty||a,children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),e.jsx(w,{size:"small",variant:"secondary",onClick:n,type:"button",children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),b&&e.jsx(nn,{showModal:!0,submit:me})]})})},Qn=(r,t)=>{const{vilkarResultat:n,begrunnelse:a,vilkarResultatInfo:s}=r,d=n&&n.kode?n.kode:n;let m;const k=r.erForeldet?r.erForeldet:r.foreldet;if(k){const p=t.perioder.find(u=>u.fom===r.fom&&u.tom===r.tom);m={erForeldet:k,periodenErForeldet:!0,foreldetBegrunnelse:p?Te(p.begrunnelse):void 0}}else m={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const g={valgtVilkarResultatType:d,begrunnelse:Te(a),harMerEnnEnYtelse:r.ytelser.length>1,...m},b=d===O.GOD_TRO?ne.buildIntialValues(s):{},o=d!==void 0&&d!==O.GOD_TRO?re.buildInitalValues(s):{};return{...g,vurderingBegrunnelse:s?Te(s.begrunnelse):void 0,[g.valgtVilkarResultatType]:{...b,...o}}},et=(r,t)=>{const{valgtVilkarResultatType:n,begrunnelse:a,vurderingBegrunnelse:s}=r,d=r[n],m=n===O.GOD_TRO?ne.transformValues(d,s):{},k=n!==O.GOD_TRO?re.transformValues(d,t,s):{};return{begrunnelse:a,fom:r.fom,tom:r.tom,vilkarResultat:n,vilkarResultatInfo:{...m,...k}}};jr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const rt="_margin_1wl4t_1",be={margin:rt},nt={danger:e.jsx(Jr,{}),success:e.jsx(Xr,{}),warning:e.jsx(Zr,{})},tt=(r,t)=>r.fom<t.fom?-1:r.fom>t.fom?1:0,at=r=>{const t=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":t},st=(r=[])=>[...r].sort(tt).map(t=>({...t,status:at(t)})),it=r=>r===fe.MOR||r===fe.MEDMOR?e.jsx(tn,{width:20,height:20,color:"var(--a-red-200)"}):r===fe.FAR?e.jsx(an,{width:20,height:20,color:"var(--a-blue-600)"}):e.jsx(Qr,{width:20,height:20}),qr=({perioder:r,valgtPeriode:t,setPeriode:n,relasjonsRolleType:a,relasjonsRolleTypeKodeverk:s})=>{var _;const d=z(),m=st(r),k=T.useCallback(l=>{const N=r.find(M=>M.id===l);N&&n(N)},[r,n]),g=q(m[0].fom),b=q(m[m.length-1].tom),[o,p]=T.useState(g),[u,c]=T.useState(b),G=T.useCallback(()=>{o.subtract(1,"month").isBefore(g)||(p(o.subtract(1,"month")),c(u.subtract(1,"month")))},[o,u,g]),v=T.useCallback(()=>{u.add(1,"month").isAfter(b)||(p(o.add(1,"month")),c(u.add(1,"month")))},[o,u,g]),P=T.useCallback(()=>{o.add(3,"month").isAfter(u)||(p(o.add(1,"month")),c(u.subtract(1,"month")))},[o,u]),D=T.useCallback(()=>{u.add(1,"month").diff(o.subtract(1,"month"),"months")<36&&(p(o.subtract(1,"month")),c(u.add(1,"month")))},[o,u]);return e.jsxs(R,{gap:"4",children:[e.jsx(Fe,{startDate:q(o).toDate(),endDate:q(u).add(1,"days").toDate(),children:e.jsx(Fe.Row,{label:((_=s.find(l=>l.kode===a))==null?void 0:_.navn)||"-",icon:it(a),children:m.map(l=>e.jsx(Fe.Period,{start:q(l.fom).toDate(),end:q(l.tom).toDate(),status:l.status,icon:nt[l.status],onSelectPeriod:()=>k(l.id),isActive:(t==null?void 0:t.id)===l.id,"aria-controls":"panel-tilbakekreving",id:l.id.toString()},l.id))})}),e.jsxs(I,{justify:"end",children:[e.jsx(w,{className:be.margin,size:"small",icon:e.jsx(Yr,{"aria-hidden":!0}),onClick:P,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(w,{className:be.margin,size:"small",icon:e.jsx(Wr,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(w,{className:be.margin,size:"small",icon:e.jsx(or,{"aria-hidden":!0}),onClick:G,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(w,{className:be.margin,size:"small",icon:e.jsx(ur,{"aria-hidden":!0}),onClick:v,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};qr.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Ie=(r,t)=>E(r.fom).diff(E(t.fom)),We=r=>!r.erForeldet&&(r.begrunnelse===void 0||r.erSplittet),lt=r=>{const t=r[r.valgtVilkarResultatType],n=t[t.handletUaktsomhetGrad];return t.tilbakekrevdBelop?{...r,[r.valgtVilkarResultatType]:{...je(t,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...r,[r.valgtVilkarResultatType]:{...t,[t.handletUaktsomhetGrad]:{...je(n,"belopSomSkalTilbakekreves")}}}:r},ot=(r,t=[])=>t.map((n,a)=>{const s=r.find(k=>k.fom===n.fom&&k.tom===n.tom),d=s&&s[s.valgtVilkarResultatType]?s[s.valgtVilkarResultatType].erBelopetIBehold:void 0,m=s?!!s.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&((s==null?void 0:s.begrunnelse)===void 0||m),isGodkjent:!(n.erForeldet||d===!1),id:a}}),xr=(r,t)=>t.find(n=>!E(r.fom).isBefore(E(n.fom))&&!E(r.tom).isAfter(E(n.tom))),ut=(r,t)=>t.every(n=>!(E(r.fom).isSameOrBefore(E(n.tom))&&E(n.fom).isSameOrBefore(E(r.tom)))),dt=(r,t,n)=>{const s=r.reduce((g,b)=>g+b.feilutbetaling,0)<n*4,m=t.vilkarsVurdertePerioder.map(g=>{const b=xr(g,r);return{...b,harMerEnnEnYtelse:b&&b.ytelser.length>1,...je(g,"feilutbetalingBelop"),feilutbetaling:g.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:s}});return{perioder:r.filter(g=>ut(g,m)).map(g=>({...g,harMerEnnEnYtelse:g.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:s})).concat(m)}},mt=(r,t)=>{if(!(!r||!t))return t.map(n=>{const a=xr(n,r.perioder),s=a.foreldelseVurderingType?a.foreldelseVurderingType===_e.FORELDET:a.foreldet;return{redusertBeloper:a.redusertBeloper,ytelser:a.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:a.årsak,begrunnelse:a.begrunnelse,erForeldet:s||!1}})},gt=(r,t)=>r.perioder.map(n=>({...Qn(n,t),fom:n.fom,tom:n.tom})).sort(Ie),pt=(r,t)=>({kode:De.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:r.filter(n=>!n.erForeldet).map(n=>et(n,t))}),kt=r=>{if(!r||r.reduce((a,s)=>s.erForeldet?a:a+1,0)<2)return;const n=r.reduce((a,s)=>{const{valgtVilkarResultatType:d}=s,m=s[d],{handletUaktsomhetGrad:k}=m,g=m[k];return g&&g.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?a+1:a},0);if(n>0&&n!==r.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Rr=({perioderForeldelse:r,kodeverkSamlingFpTilbake:t,submitCallback:n,readOnly:a,alleMerknaderFraBeslutter:s,perioder:d,vilkarvurdering:m,rettsgebyr:k,relasjonsRolleType:g,relasjonsRolleTypeKodeverk:b,beregnBelop:o,behandlingUuid:p,formData:u,setFormData:c})=>{var Ne;const G=dt(d,m,k),[v,P]=T.useState(u||gt(G,r)),[D,_]=T.useState(!!u),[l,N]=T.useState(v==null?void 0:v.find(We)),[M,de]=T.useState(!1),[U,te]=T.useState();T.useEffect(()=>{te(kt(v))},[v]);const ae=mt(G,v),me=a||(l==null?void 0:l.erForeldet)===!0,Re=v.reduce((f,h)=>h.erForeldet?f:f+1,0),Be=s[De.VURDER_TILBAKEKREVING],Ae=T.useCallback(()=>{de(!0),n(pt(v,t[ve.SARLIG_GRUNN]))},[v]),se=ot(v,ae),J=se.some(f=>f.isAksjonspunktOpen),y=l?se.find(f=>f.fom===l.fom&&f.tom===l.tom):void 0,F=f=>{const h=f?v.find(L=>L.fom===f.fom&&L.tom===f.tom):void 0;N(h)},X=()=>{const f=v.findIndex(h=>h.fom===(l==null?void 0:l.fom)&&h.tom===(l==null?void 0:l.tom));F(v[f+1])},j=()=>{const f=v.findIndex(h=>h.fom===(l==null?void 0:l.fom)&&h.tom===(l==null?void 0:l.tom));F(v[f-1])},V=()=>{F(void 0)},Pe=f=>{const h=je(f,"erSplittet"),ge=v.filter(Y=>Y.fom!==h.fom&&Y.tom!==h.tom).concat(h).sort(Ie);P(ge),c(ge),_(!0),V();const ie=ge.find(We);ie&&F(ie)},H=f=>{const h=v.find(L=>L.fom===(l==null?void 0:l.fom)&&L.tom===(l==null?void 0:l.tom));if(h){const L=f.map(Y=>({...lt(h),...Y,erSplittet:!0})),ie=v.filter(Y=>Y.fom!==(l==null?void 0:l.fom)&&Y.tom!==(l==null?void 0:l.tom)).concat(L).sort(Ie);V(),_(!0),P(ie),c(ie),F(L[0])}},A=ae?ae.find(f=>f.fom===(l==null?void 0:l.fom)&&f.tom===(l==null?void 0:l.tom)):void 0;return e.jsx(Cr,{merknaderFraBeslutter:Be,withoutBorder:!0,children:e.jsxs(R,{gap:"4",children:[e.jsx(qe,{size:"small",children:e.jsx(i,{id:"Behandlingspunkt.Tilbakekreving"})}),J&&e.jsx(zr,{children:e.jsx(i,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),v&&e.jsxs(e.Fragment,{children:[e.jsx(qr,{perioder:se,valgtPeriode:y,setPeriode:F,relasjonsRolleType:g,relasjonsRolleTypeKodeverk:b}),l&&A&&e.jsx("div",{id:"panel-tilbakekreving","aria-controls":y==null?void 0:y.id.toString(),children:e.jsx(sn,{borderWidth:"1",padding:"4",children:e.jsxs(R,{gap:"4",children:[e.jsx(gr,{setNestePeriode:X,setForrigePeriode:j,periode:A,readOnly:a,oppdaterSplittedePerioder:H,behandlingUuid:p,beregnBelop:o,lukkPeriode:V}),e.jsx(pr,{feilutbetaling:A.feilutbetaling,fom:A.fom,tom:A.tom,arsakHendelseNavn:(Ne=t[Dr.HENDELSE_TYPE].find(f=>{var h;return f.kode===((h=A.årsak)==null?void 0:h.hendelseType)}))==null?void 0:Ne.navn}),e.jsx(jr,{periode:l,data:A,antallPerioderMedAksjonspunkt:Re,readOnly:me,skjulPeriode:V,oppdaterPeriode:Pe,kodeverkSamlingFpTilbake:t,vilkarsVurdertePerioder:v},y==null?void 0:y.id)]})})})]}),U&&e.jsx(lr,{variant:"error",children:e.jsx(i,{id:U})}),e.jsx(I,{children:e.jsx(_r,{isReadOnly:me,isDirty:D,isSubmittable:!J&&!l&&!U,onClick:Ae,isSubmitting:M})})]})})};Rr.__docgenInfo={description:`TilbakekrevingForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const bt=$r(dr),Br=({behandling:r,perioderForeldelse:t,vilkarvurderingsperioder:n,vilkarvurdering:a,beregnBelop:s,kodeverkSamlingFpTilbake:d,submitCallback:m,alleMerknaderFraBeslutter:k,isReadOnly:g,formData:b,setFormData:o,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:u})=>e.jsx(Ur,{value:bt,children:e.jsx(Rr,{behandlingUuid:r.uuid,perioderForeldelse:t,perioder:n.perioder,rettsgebyr:n.rettsgebyr,vilkarvurdering:a,submitCallback:m,readOnly:g,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:u,alleMerknaderFraBeslutter:k,kodeverkSamlingFpTilbake:d,beregnBelop:s,formData:b,setFormData:o})});Br.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const yt=Vr(dr),ct={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:_e.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:_e.FORELDET}]},Ar={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:"MEDLEMSKAP"},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},vt={vilkarsVurdertePerioder:[]},ft=Or,Ra={title:"prosess-tilbakekreving/TilbakekrevingProsessIndex",component:Br,decorators:[yt],args:{submitCallback:Pr("button-click"),behandling:{uuid:"1",versjon:1,status:Nr.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:ft,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:ct,vilkarvurdering:vt,beregnBelop:r=>Promise.resolve(r),alleMerknaderFraBeslutter:{},relasjonsRolleType:fe.MOR,relasjonsRolleTypeKodeverk:[{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},ye={args:{vilkarvurderingsperioder:Ar}},ce={args:{vilkarvurderingsperioder:{perioder:[Ar.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:{kode:"MEDLEM",kodeverk:"",navn:"§22 Medlemskap"}},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};var Je,Xe,Ze;ye.parameters={...ye.parameters,docs:{...(Je=ye.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...(Ze=(Xe=ye.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var Qe,er,rr;ce.parameters={...ce.parameters,docs:{...(Qe=ce.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(rr=(er=ce.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};const Ba=["Default","MedToPerioder"];export{ye as Default,ce as MedToPerioder,Ba as __namedExportsOrder,Ra as default};
