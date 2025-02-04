import{a as Fr}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as nr,X as wr,Z as K,Q as tr,H as we,n as Sr,B as _r,e as le,K as Vr}from"./index.es-THaQLCbj.js";import{g as Or}from"./withIntl-BiZIRch7.js";import{a as Ir}from"./alleTilbakekrevingKodeverk-dIUSSyeF.js";import{e as R,O as Mr,H as Er,D as Gr,o as ar,i as Nr,N as Te,a as Me,l as Ee,S as ce,h as ve,I as Dr,m as Se,d as Ur}from"./style-D_LpA0NF.js";import{u as C,P as Lr}from"./index-D9DDUrbY.js";import{d as x,P as Z,A as Kr,e as $r,g as Q,K as sr,a as fe,j as je,n as Cr}from"./index.es-Dh3mAfPy.js";import{r as j,R as ir}from"./index-B5OHeJSP.js";import{h as M}from"./moment-C5S46NFB.js";import{d as k,A as Y,H as zr,c as Hr,C as Ue,J as Le,X as Yr,W as Wr,N as Jr}from"./index.es-B_RouKJz.js";import{c as lr,u as Ge}from"./ReadOnlyIcon-3mCRcvzc.js";import{M as ge}from"./Modal-C6iE4cX-.js";import{H as he,L as $,a as w,D as qe,E as Xr}from"./Label-ZYbyet41.js";import{M as l}from"./message-BcVJpMje.js";import{A as or}from"./Alert-Pz1mMbfe.js";import{B as S}from"./Button-C4dKKha_.js";import{H as L}from"./VStack-BtUbcfLF.js";import{S as _e,T as Ae,a as Zr,b as Qr,d as en,e as rn,f as nn,c as tn}from"./Timeline-Dqkdb2KD.js";import{S as an}from"./Scissors-DZqh_mpJ.js";import{S as ur,a as dr}from"./DatePicker-DoJN_gWH.js";import{S as sn}from"./XMark-BWJopseo.js";import{T as ln,m as mr}from"./nb_NO-B8qA1Tt8.js";import{a as on,S as un}from"./SilhouetteFill-DMHyitGq.js";import{P as dn}from"./Panel-BzsK_xG0.js";/* empty css              */import"./v4-CtRu48qb.js";import"./Checkbox-CHErwGPi.js";import"./clsx-B-dksMZM.js";import"./omit-B7stZg_p.js";import"./useId-e75EoDiw.js";import"./useFormField-BKpVC0Pg.js";import"./Fieldset-Cs108nF-.js";import"./Tag-DqR_3-Kz.js";import"./Textarea-DQ7w4yc6.js";import"./index-sT6466e8.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DYwZEShM.js";import"./useClientLayoutEffect-DnVV5Q77.js";import"./create-context-BlrHNsQj.js";import"./Loader-CoAqN6Lw.js";import"./Provider-B_QIWjIe.js";import"./useDatepicker-oJRfFMcH.js";import"./useDateTranslationContext-DuYWebvA.js";import"./Radio-BIYAymoT.js";import"./Select-wYL7g-5T.js";import"./ChevronDown-Bw2TG6jd.js";import"./useId-B9OmVTHV.js";import"./TextField-DEo8zdDE.js";import"./PersonPencilFill-DS1qmMzQ.js";import"./KeyVerticalFill-CH0oXMyL.js";import"./Checkmark-uHeVskEM.js";import"./floating-ui.react-FIE1On8Y.js";import"./XMarkOctagonFill-BUHxl6gj.js";import"./ExclamationmarkTriangleFill-Ck4a0gXp.js";import"./Theme-6IdwQf2V.js";import"./Popover-CgZ7HliT.js";var Ne=(r=>(r.VURDER_TILBAKEKREVING="5002",r))(Ne||{});const mn="_button_8q57x_1",gn="_cancelButton_8q57x_5",Ke={button:mn,cancelButton:gn},pn=(r,t)=>n=>n&&(Er(n)(x(r.tom.toString()).subtract(1,"day"))||Gr(n)(r.fom))?t.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,kn=(r,t)=>{const n=x(r.forstePeriodeTomDato).add(1,"days"),a={fom:t.fom,tom:r.forstePeriodeTomDato},s={fom:n.format(Kr),tom:t.tom};return{forstePeriode:a,andrePeriode:s}},gr=({periodeData:r,showModal:t,cancelEvent:n,finnesBelopMed0Verdi:a,splitPeriod:s})=>{const d=C(),m=lr();return e.jsx(nr,{formMethods:m,onSubmit:b=>s(kn(b,r)),children:e.jsxs(ge,{open:t,"aria-label":d.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[e.jsx(ge.Header,{children:e.jsx(he,{size:"small",children:e.jsx(l,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsxs(ge.Body,{children:[e.jsx($,{size:"small",children:e.jsx(l,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(w,{size:"small",children:`${x(r.fom.toString()).format(Z)} - ${x(r.tom.toString()).format(Z)}`}),e.jsx(k,{sixteenPx:!0}),e.jsx(wr,{name:"forstePeriodeTomDato",label:e.jsx(l,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[R,Mr,pn(r,d)],fromDate:x(r.fom).toDate(),toDate:x(r.tom).toDate()}),a&&e.jsx(or,{variant:"error",children:e.jsx(l,{id:"DelOppPeriodeModalImpl.BelopEr0"})}),e.jsx(k,{sixteenPx:!0})]}),e.jsxs(ge.Footer,{children:[e.jsx(S,{size:"small",variant:"primary",className:Ke.button,disabled:!m.formState.isDirty,children:e.jsx(l,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(S,{size:"small",variant:"secondary",onClick:n,className:Ke.cancelButton,type:"button",children:e.jsx(l,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};gr.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const bn="_timeLineButton_wnej3_1",yn="_splitPeriodImage_wnej3_24",cn="_splitPeriodPosition_wnej3_30",vn="_leftMargin_wnej3_33",fn="_margin_wnej3_37",Tn="_fix_wnej3_41",Fe={timeLineButton:bn,splitPeriodImage:yn,splitPeriodPosition:cn,leftMargin:vn,margin:fn,fix:Tn},jn=!1,pr=({setNestePeriode:r,setForrigePeriode:t,readOnly:n,lukkPeriode:a,periode:s,beregnBelop:d,behandlingUuid:m,oppdaterSplittedePerioder:b})=>{const g=C(),[y,o]=j.useState(!1),[p,u]=j.useState(!1),v=j.useCallback(A=>{o(!0),A.preventDefault()},[o]),E=j.useCallback(()=>{o(!1)},[]),f=A=>{u(!1);const G={belop:s.feilutbetaling,fom:A.forstePeriode.fom,tom:A.forstePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "},_={belop:s.feilutbetaling,fom:A.andrePeriode.fom,tom:A.andrePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "};d({behandlingUuid:m,perioder:[G,_]}).then(N=>{const{perioder:I}=N;if(I.some(D=>D.belop===0))u(!0);else{const D={fom:G.fom,tom:G.tom,feilutbetaling:I[0].belop},ne={fom:_.fom,tom:_.tom,feilutbetaling:I[1].belop};E(),b([D,ne])}})};return e.jsxs(L,{children:[e.jsxs($,{size:"small",children:[e.jsx(l,{id:"PeriodeController.Detaljer"}),jn]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(_e,{}),e.jsx(S,{className:Fe.margin,size:"xsmall",icon:e.jsx(an,{"aria-hidden":!0}),onClick:v,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(l,{id:"PeriodeController.DelOppPerioden"})})]}),y&&e.jsx(gr,{cancelEvent:E,showModal:y,periodeData:s,splitPeriod:f,finnesBelopMed0Verdi:p}),e.jsx(_e,{}),e.jsx(S,{className:Fe.margin,size:"xsmall",icon:e.jsx(ur,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(l,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(S,{className:Fe.margin,size:"xsmall",icon:e.jsx(dr,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(l,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(S,{size:"xsmall",icon:e.jsx(sn,{"aria-hidden":!0}),onClick:a,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};pr.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params?: any, keepData?: boolean) => Promise<any>",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},oppdaterSplittedePerioder:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppdatertePerioder: SplittetPeriode[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const hn="_infoSummary_14r2l_1",qn="_positivNumber_14r2l_8",xn="_redNumber_14r2l_12",Rn="_resultName_14r2l_17",ie={infoSummary:hn,positivNumber:qn,redNumber:xn,resultName:Rn},kr=({fom:r,tom:t,feilutbetaling:n,arsakHendelseNavn:a})=>{const s=$r(r,t);return e.jsxs("div",{className:ie.infoSummary,children:[e.jsxs(L,{children:[e.jsx($,{size:"small",children:`${x(r).format(Z)} - ${x(t).format(Z)}`}),e.jsx(_e,{}),e.jsx(w,{size:"small",children:s.formattedString})]}),e.jsx(k,{sixteenPx:!0}),e.jsxs(L,{gap:"4",children:[e.jsxs(w,{size:"small",className:ie.resultName,children:[e.jsx(l,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:n?ie.redNumber:ie.positivNumber,children:Q(n)})]}),a&&e.jsx(w,{size:"small",className:ie.resultName,children:a})]})]})};kr.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var P=(r=>(r.FORSETT="FORSETT",r.GROVT_UAKTSOM="GROVT_UAKTSOM",r.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",r))(P||{});const Pn=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var br=(r=>(r.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",r.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",r.STOERRELSE_BELOEP="STOERRELSE_BELOEP",r.TID_FRA_UTBETALING="TID_FRA_UTBETALING",r.ANNET="ANNET",r))(br||{}),O=(r=>(r.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",r.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",r.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",r.GOD_TRO="GOD_TRO",r))(O||{});const yr=({name:r,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const a=Ge(),s=`${r}.skalDetTilleggesRenter`;return j.useEffect(()=>{a.getValues(s)===void 0&&a.setValue(s,!1)},[]),e.jsx("div",{children:e.jsxs(Y,{alignOffset:n?320:360,children:[n&&e.jsxs(e.Fragment,{children:[e.jsx($,{size:"small",children:e.jsx(l,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(w,{size:"small",children:"100 %"}),e.jsx(k,{sixteenPx:!0}),e.jsx(K,{name:`${r}.skalDetTilleggesRenter`,label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[R],radios:[{label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:t,parse:d=>d==="true",isHorizontal:!0})]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(qe,{children:e.jsx(l,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(w,{size:"small",children:"100 %"}),e.jsx(k,{eightPx:!0}),e.jsx(w,{size:"small",children:e.jsx(l,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})};yr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const Bn="_suffix_cawxu_1",An="_suffixGrovText_cawxu_4",Fn="_labelPadding_cawxu_8",wn="_inputFelt_cawxu_12",X={suffix:Bn,suffixGrovText:An,labelPadding:Fn,inputFelt:wn},$e=ar(0),Sn=Nr(99.99),_n=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},Vn=(r,t)=>n=>{if(n>=t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},oe="Egendefinert",Ve=["30","50","70",oe],cr=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:s,feilutbetalingBelop:d,andelSomTilbakekreves:m})=>{const b=C(),g=Ge(),y=`${r}.skalDetTilleggesRenter`;return j.useEffect(()=>{g.getValues(y)===void 0&&g.setValue(y,!1)},[]),e.jsxs(e.Fragment,{children:[e.jsx(k,{sixteenPx:!0}),e.jsx(K,{name:`${r}.harGrunnerTilReduksjon`,label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[R],radios:[{label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0}),e.jsx(k,{sixteenPx:!0}),t&&e.jsx(Y,{alignOffset:24,children:e.jsxs(L,{gap:"4",children:[!s&&m!==oe&&e.jsxs(e.Fragment,{children:[e.jsx($,{size:"small",children:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(L,{gap:"2",children:[e.jsx(tr,{name:`${r}.andelSomTilbakekreves`,label:"",validate:[R],selectValues:Ve.map(o=>e.jsx("option",{value:o,children:o},o))}),e.jsx("div",{className:X.suffix,children:"%"})]})]}),!s&&m===oe&&e.jsxs(e.Fragment,{children:[e.jsx($,{size:"small",children:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(L,{gap:"4",children:[e.jsx(we,{className:X.inputFelt,name:`${r}.andelSomTilbakekrevesManuell`,readOnly:n,validate:[R,$e,Sn],normalizeOnBlur:o=>Number.isNaN(o)?o:parseFloat(o.toString()).toFixed(2),format:o=>o.toString().replace(".",","),parse:o=>o.toString().replace(",",".")}),e.jsx("div",{className:a===P.GROVT_UAKTSOM?X.suffixGrovText:X.suffix,children:"%"})]})]}),s&&e.jsx(we,{name:`${r}.belopSomSkalTilbakekreves`,label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[R,$e,Vn(b,d)],readOnly:n,format:Q,parse:_n}),a===P.GROVT_UAKTSOM&&e.jsxs("div",{children:[e.jsx(qe,{children:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),e.jsx(w,{size:"small",className:X.labelPadding,children:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),t===!1&&e.jsxs(Y,{alignOffset:90,children:[e.jsx(qe,{children:e.jsx(l,{id:s?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),e.jsx(w,{size:"small",className:X.labelPadding,children:s?Q(d):"100%"}),e.jsx(k,{sixteenPx:!0}),a===P.GROVT_UAKTSOM&&e.jsx(K,{name:y,label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[R],radios:[{label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})};cr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const On=Me(3),In=Ee(1500),Oe=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:s,sarligGrunnTyper:d,harMerEnnEnYtelse:m,feilutbetalingBelop:b,andelSomTilbakekreves:g})=>{const y=C(),{watch:o}=Ge(),p=!d.some(v=>!!o(`${r}.${v.kode}`)),u=Sr(r,p?y.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return e.jsxs("div",{children:[e.jsx($,{size:"small",children:e.jsx(l,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),e.jsx(k,{eightPx:!0}),d.map(v=>e.jsxs(ir.Fragment,{children:[e.jsx(_r,{name:`${r}.${v.kode}`,label:v.navn,readOnly:n},v.kode),e.jsx(k,{eightPx:!0})]},v.kode)),s&&e.jsx(le,{name:`${r}.annetBegrunnelse`,label:"",validate:[R,On,In,Te],maxLength:1500,readOnly:n}),u&&e.jsx(Xr,{children:u}),e.jsx(cr,{name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:m,feilutbetalingBelop:b,andelSomTilbakekreves:g})]})};Oe.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Mn="_explanationTextarea_1kabz_1",En="_panelWidth_1kabz_5",vr={explanationTextarea:Mn,panelWidth:En},Gn=Me(3),Nn=Ee(1500),Ce=(r,t,n)=>e.jsxs("div",{children:[e.jsx($,{size:"small",children:e.jsx(l,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),e.jsx(k,{eightPx:!0}),e.jsx(le,{name:`${r}.sarligGrunnerBegrunnelse`,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[R,Gn,Nn,Te],maxLength:1500,readOnly:t,className:vr.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})}),e.jsx(k,{twentyPx:!0})]}),fr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:d,feilutbetalingBelop:m,erTotalBelopUnder4Rettsgebyr:b,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:y,name:o})=>{const p=C(),u=y?180:200;return e.jsx(Y,{alignOffset:n===P.GROVT_UAKTSOM?u:20,children:e.jsxs("div",{className:vr.panelWidth,children:[n===P.SIMPEL_UAKTSOM&&b&&e.jsxs(e.Fragment,{children:[e.jsx(K,{name:`${o}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:e.jsx(l,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[R],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:t,radios:[{label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:e.jsxs(e.Fragment,{children:[e.jsx(k,{eightPx:!0}),Ce(o,t,p),e.jsx(Oe,{name:o,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:d,feilutbetalingBelop:m,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:g})]})},{label:e.jsx(l,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:e.jsxs(e.Fragment,{children:[e.jsx(k,{eightPx:!0}),e.jsx(Y,{alignOffset:20,children:e.jsx(l,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})]})}]}),e.jsx(k,{eightPx:!0})]}),(n!==P.SIMPEL_UAKTSOM||!b)&&e.jsxs(e.Fragment,{children:[Ce(o,t,p),e.jsx(Oe,{name:o,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:d,feilutbetalingBelop:m,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:g})]})]})})};fr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Tr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:d,harMerEnnEnYtelse:m,feilutbetalingBelop:b,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:y,name:o})=>e.jsxs(e.Fragment,{children:[e.jsx(k,{eightPx:!0}),n===P.FORSETT&&e.jsx(yr,{name:o,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:s}),n!==P.FORSETT&&e.jsx(fr,{name:o,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:d,harMerEnnEnYtelse:m,feilutbetalingBelop:b,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:y,erValgtResultatTypeForstoBurdeForstaatt:s})]});Tr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Dn=[P.GROVT_UAKTSOM,P.SIMPEL_UAKTSOM,P.FORSETT],Un={[P.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[P.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[P.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},ee=({readOnly:r,resetFields:t,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:s=!1,erValgtResultatTypeForstoBurdeForstaatt:d=!1,aktsomhetTyper:m,sarligGrunnTyper:b,antallYtelser:g,feilutbetalingBelop:y,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:p,name:u})=>e.jsxs(e.Fragment,{children:[e.jsx(k,{sixteenPx:!0}),e.jsx(K,{name:`${u}.handletUaktsomhetGrad`,label:e.jsx(l,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[R],radios:m.map(v=>({label:d?e.jsx(l,{id:Un[v.kode]}):v.navn,value:v.kode})),isReadOnly:r,onChange:t,isHorizontal:!0}),Dn.some(v=>v===n)&&e.jsx(Tr,{name:`${u}.${n}`,harGrunnerTilReduksjon:a,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:s,erValgtResultatTypeForstoBurdeForstaatt:d,sarligGrunnTyper:b,harMerEnnEnYtelse:g>1,feilutbetalingBelop:y,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:p})]}),Ln=(r,t)=>{const n=parseInt(r,10);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Kn=(r,t)=>{const n=parseFloat(r);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},$n=(r,t)=>{if(r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=t.reduce((d,m)=>r[m.kode]?d.concat(m.kode):d,[]),{harGrunnerTilReduksjon:a}=r,s=r.andelSomTilbakekreves===oe?Kn(r.andelSomTilbakekrevesManuell,a):Ln(r.andelSomTilbakekreves,a);return{harGrunnerTilReduksjon:a,ileggRenter:a?void 0:r.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:r.harGrunnerTilReduksjon?sr(r.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:r.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...s}};ee.transformValues=(r,t,n)=>{const a=r[r.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:r.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:a?$n(a,t):null}};const Cn=(r,t)=>({andelSomTilbakekreves:t===void 0||Ve.includes(t)?t:oe,andelSomTilbakekrevesManuell:t&&Ve.includes(t)?void 0:r.andelTilbakekreves,harGrunnerTilReduksjon:r.harGrunnerTilReduksjon,skalDetTilleggesRenter:r.ileggRenter,belopSomSkalTilbakekreves:r.tilbakekrevesBelop,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:fe(r.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...r.sarligGrunner?r.sarligGrunner.reduce((n,a)=>({...n,[a.kode?a.kode:a]:!0}),{}):{}});ee.buildInitalValues=r=>{const{aktsomhet:t,aktsomhetInfo:n}=r,a=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,s=n?{[t.kode&&"kode"in t?t.kode:t]:Cn(n,a)}:{};return{handletUaktsomhetGrad:t&&t.kode&&"kode"in t?t.kode:t,...s}};ee.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const jr=()=>e.jsxs(L,{gap:"4",children:[e.jsx(le,{name:"foreldetBegrunnelse",label:e.jsx(l,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),e.jsx(K,{name:"periodenErForeldet",label:e.jsx(qe,{children:e.jsx(l,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:e.jsx(l,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]});jr.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const zn="_arrowbox_ych2z_1",Hn="_tilbakekrevdBelopInput_ych2z_4",ze={arrowbox:zn,tilbakekrevdBelopInput:Hn},Yn=ar(1),Wn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},Jn=(r,t)=>n=>{if(n>t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},re=({name:r,readOnly:t,erBelopetIBehold:n,feilutbetalingBelop:a})=>{const s=C();return e.jsxs(e.Fragment,{children:[e.jsx(K,{name:`${r}.erBelopetIBehold`,label:e.jsx(l,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[R],radios:[{label:e.jsx(l,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:e.jsx(l,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:t,isTrueOrFalseSelection:!0,isHorizontal:!0}),e.jsx(k,{eightPx:!0}),e.jsxs("div",{className:ze.arrowbox,children:[n===!0&&e.jsx(Y,{alignOffset:25,children:e.jsx(we,{name:`${r}.tilbakekrevdBelop`,label:e.jsx(l,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[R,Yn,Jn(s,a)],readOnly:t,className:ze.tilbakekrevdBelopInput,format:Q,parse:Wn})}),n===!1&&e.jsx(Y,{alignOffset:90,children:e.jsx(w,{size:"small",children:e.jsx(l,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};re.transformValues=(r,t)=>({"@type":"godTro",begrunnelse:t,erBelopetIBehold:r.erBelopetIBehold,tilbakekrevesBelop:r.erBelopetIBehold?sr(r.tilbakekrevdBelop):void 0});re.buildIntialValues=r=>({erBelopetIBehold:r.erBelopetIBehold,tilbakekrevdBelop:r.tilbakekrevesBelop});re.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Xn="_feilutbetalingTable_e3ydt_1",Zn={feilutbetalingTable:Xn},Qn=["TilbakekrevingAktivitetTabell.Aktivitet","TilbakekrevingAktivitetTabell.FeilutbetaltBelop"],hr=({ytelser:r})=>{if(r.length===0)return null;let t=0;return e.jsx(zr,{headerTextCodes:Qn,noHover:!0,classNameTable:Zn.feilutbetalingTable,children:r.map(n=>(t+=1,e.jsxs(Hr,{children:[e.jsx(Ue,{children:e.jsx(w,{size:"small",children:n.aktivitet})}),e.jsx(Ue,{children:e.jsx(w,{size:"small",children:Q(n.belop)})})]},n.aktivitet+n.belop+t)))})};hr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const et="_explanationTextarea_1udkt_1",rt="_leftColumn_1udkt_5",nt="_rightColumn_1udkt_9",tt="_selectWidth_1udkt_12",pe={explanationTextarea:et,leftColumn:rt,rightColumn:nt,selectWidth:tt},He=Me(3),Ye=Ee(1500),qr=({data:r,periode:t,skjulPeriode:n,readOnly:a,oppdaterPeriode:s,vilkarsVurdertePerioder:d,kodeverkSamlingFpTilbake:m,antallPerioderMedAksjonspunkt:b})=>{const g=C(),[y,o]=j.useState(!1),p=lr({defaultValues:t}),u=p.watch("valgtVilkarResultatType"),v=p.watch(`${u}.handletUaktsomhetGrad`),E=p.watch(`${u}.${v}.harGrunnerTilReduksjon`),f=p.watch(`${u}.${v}.andelSomTilbakekreves`),A=p.watch(`${u}.${v}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),G=p.watch(`${u}.${v}.${br.ANNET}`),_=p.watch(`${u}.erBelopetIBehold`),i=Le(u),N=Le(v),I=r.redusertBeloper,ue=m[ce.SARLIG_GRUNN],D=m[ce.VILKAR_RESULTAT],ne=Pn.map(c=>m[ce.AKTSOMHET].find(F=>F.kode===c)),te=(c,F)=>{const J=c.target.value.split("_"),q=F.find(B=>B.fom===J[0]&&B.tom===J[1]),V=q==null?void 0:q.valgtVilkarResultatType,Be=q&&V?q[V]:void 0,z=JSON.parse(JSON.stringify(Be));if(V!==O.GOD_TRO){const{handletUaktsomhetGrad:B}=z;B!==P.FORSETT&&(t==null?void 0:t.harMerEnnEnYtelse)!==(q==null?void 0:q.harMerEnnEnYtelse)&&(z[B].andelSomTilbakekreves=null,z[B].andelSomTilbakekrevesManuell=null,z[B].belopSomSkalTilbakekreves=null)}p.setValue("valgtVilkarResultatType",V,{shouldDirty:!0}),p.setValue("begrunnelse",q==null?void 0:q.begrunnelse,{shouldDirty:!0}),p.setValue("vurderingBegrunnelse",q==null?void 0:q.vurderingBegrunnelse,{shouldDirty:!0}),V&&p.setValue(V,z,{shouldDirty:!0}),c.preventDefault()},de=()=>{o(!y),s(p.getValues())},xe=c=>{b>1&&r.erTotalBelopUnder4Rettsgebyr&&A===!1?o(!y):s(c)},Re=()=>{i&&p.resetField(i)},Pe=()=>{N&&p.resetField(`${u}.${N}`)},ae=j.useCallback(c=>e.jsx("b",{children:c}),[]),W=d.filter(c=>!c.erForeldet&&c.valgtVilkarResultatType!=null);return e.jsxs(nr,{formMethods:p,onSubmit:xe,children:[I&&I.map(c=>e.jsxs(ir.Fragment,{children:[e.jsx(w,{size:"small",children:e.jsx(l,{id:c.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:Q(c.belop),b:ae}})}),e.jsx(k,{eightPx:!0})]},c.belop)),e.jsx(hr,{ytelser:r.ytelser}),e.jsx(k,{twentyPx:!0}),!a&&!r.erForeldet&&W.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(tr,{name:"perioderForKopi",selectValues:W.map(c=>{const F=`${c.fom}_${c.tom}`,J=`${x(c.fom).format(Z)} - ${x(c.tom).format(Z)}`;return e.jsx("option",{value:F,children:J},F)}),onChange:c=>te(c,W),className:pe.selectWidth,label:e.jsx(l,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),e.jsx(k,{twentyPx:!0})]}),e.jsxs(L,{gap:"4",wrap:!0,children:[e.jsxs("div",{className:pe.leftColumn,children:[r.erForeldet&&e.jsx(jr,{}),!r.erForeldet&&e.jsxs(e.Fragment,{children:[e.jsx(he,{size:"small",children:e.jsx(l,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),e.jsx(k,{sixteenPx:!0}),e.jsx(le,{name:"begrunnelse",label:g.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[R,He,Ye,Te],maxLength:1500,readOnly:a,className:pe.explanationTextarea,description:g.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),e.jsx(k,{sixteenPx:!0}),e.jsx(K,{name:"valgtVilkarResultatType",label:e.jsx(l,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[R],radios:D.map(c=>({label:c.navn,value:c.kode})),isReadOnly:a,onChange:Re})]})]}),e.jsx("div",{className:pe.rightColumn,children:u&&e.jsxs(e.Fragment,{children:[e.jsx(he,{size:"small",children:e.jsx(l,{id:u===O.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),e.jsx(k,{sixteenPx:!0}),e.jsx(le,{name:"vurderingBegrunnelse",label:g.formatMessage({id:u===O.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[R,He,Ye,Te],maxLength:1500,readOnly:a}),e.jsx(k,{eightPx:!0}),u===O.GOD_TRO&&e.jsx(re,{name:u,readOnly:a,erBelopetIBehold:_,feilutbetalingBelop:r.feilutbetaling}),u!==O.GOD_TRO&&e.jsx(ee,{name:u,harGrunnerTilReduksjon:E,readOnly:a,handletUaktsomhetGrad:v,resetFields:Pe,erSerligGrunnAnnetValgt:G,erValgtResultatTypeForstoBurdeForstaatt:u===O.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:ne,sarligGrunnTyper:ue,antallYtelser:r.ytelser.length,feilutbetalingBelop:r.feilutbetaling,erTotalBelopUnder4Rettsgebyr:r.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:f},u)]})})]}),e.jsx(k,{twentyPx:!0}),e.jsxs(L,{gap:"4",children:[e.jsx(S,{size:"small",variant:"primary",disabled:!p.formState.isDirty||a,children:e.jsx(l,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),e.jsx(S,{size:"small",variant:"secondary",onClick:n,type:"button",children:e.jsx(l,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),y&&e.jsx(ln,{showModal:!0,submit:de})]})},at=(r,t)=>{const{vilkarResultat:n,begrunnelse:a,vilkarResultatInfo:s}=r,d=n&&n.kode?n.kode:n;let m;const b=r.erForeldet?r.erForeldet:r.foreldet;if(b){const p=t.perioder.find(u=>u.fom===r.fom&&u.tom===r.tom);m={erForeldet:b,periodenErForeldet:!0,foreldetBegrunnelse:p?fe(p.begrunnelse):void 0}}else m={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const g={valgtVilkarResultatType:d,begrunnelse:fe(a),harMerEnnEnYtelse:r.ytelser.length>1,...m},y=d===O.GOD_TRO?re.buildIntialValues(s):{},o=d!==void 0&&d!==O.GOD_TRO?ee.buildInitalValues(s):{};return{...g,vurderingBegrunnelse:s?fe(s.begrunnelse):void 0,[g.valgtVilkarResultatType]:{...y,...o}}},st=(r,t)=>{const{valgtVilkarResultatType:n,begrunnelse:a,vurderingBegrunnelse:s}=r,d=r[n],m=n===O.GOD_TRO?re.transformValues(d,s):{},b=n!==O.GOD_TRO?ee.transformValues(d,t,s):{};return{begrunnelse:a,fom:r.fom,tom:r.tom,vilkarResultat:n,vilkarResultatInfo:{...m,...b}}};qr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const it="_margin_1wl4t_1",ke={margin:it},lt={danger:e.jsx(en,{}),success:e.jsx(rn,{}),warning:e.jsx(nn,{})},ot=(r,t)=>r.fom<t.fom?-1:r.fom>t.fom?1:0,ut=r=>{const t=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":t},dt=(r=[])=>[...r].sort(ot).map(t=>({...t,status:ut(t)})),mt=r=>r===ve.MOR||r===ve.MEDMOR?e.jsx(on,{width:20,height:20,color:"var(--a-red-200)"}):r===ve.FAR?e.jsx(un,{width:20,height:20,color:"var(--a-blue-600)"}):e.jsx(tn,{width:20,height:20}),xr=({perioder:r,valgtPeriode:t,setPeriode:n,relasjonsRolleType:a,relasjonsRolleTypeKodeverk:s})=>{var _;const d=C(),m=dt(r),b=j.useCallback(i=>{const N=r.find(I=>I.id===i);N&&n(N)},[r,n]),g=x(m[0].fom),y=x(m[m.length-1].tom),[o,p]=j.useState(g),[u,v]=j.useState(y),E=j.useCallback(()=>{o.subtract(1,"month").isBefore(g)||(p(o.subtract(1,"month")),v(u.subtract(1,"month")))},[o,u,g]),f=j.useCallback(()=>{u.add(1,"month").isAfter(y)||(p(o.add(1,"month")),v(u.add(1,"month")))},[o,u,g]),A=j.useCallback(()=>{o.add(3,"month").isAfter(u)||(p(o.add(1,"month")),v(u.subtract(1,"month")))},[o,u]),G=j.useCallback(()=>{u.add(1,"month").diff(o.subtract(1,"month"),"months")<36&&(p(o.subtract(1,"month")),v(u.add(1,"month")))},[o,u]);return e.jsxs(e.Fragment,{children:[e.jsx(k,{fourtyPx:!0}),e.jsx(Ae,{startDate:x(o).toDate(),endDate:x(u).add(1,"days").toDate(),children:e.jsx(Ae.Row,{label:((_=s.find(i=>i.kode===a))==null?void 0:_.navn)||"-",icon:mt(a),children:m.map(i=>e.jsx(Ae.Period,{start:x(i.fom).toDate(),end:x(i.tom).toDate(),status:i.status,icon:lt[i.status],onSelectPeriod:()=>b(i.id),isActive:(t==null?void 0:t.id)===i.id,"aria-controls":"panel-tilbakekreving",id:i.id.toString()},i.id))})}),e.jsx(k,{twentyPx:!0}),e.jsxs(Yr,{children:[e.jsx(S,{className:ke.margin,size:"small",icon:e.jsx(Zr,{"aria-hidden":!0}),onClick:A,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(S,{className:ke.margin,size:"small",icon:e.jsx(Qr,{"aria-hidden":!0}),onClick:G,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(S,{className:ke.margin,size:"small",icon:e.jsx(ur,{"aria-hidden":!0}),onClick:E,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(S,{className:ke.margin,size:"small",icon:e.jsx(dr,{"aria-hidden":!0}),onClick:f,variant:"primary-neutral",type:"button",title:d.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};xr.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const gt="_container_wdk2x_1",pt="_fadein_wdk2x_1",kt="_space_wdk2x_11",bt={container:gt,fadein:pt,space:kt},Ie=(r,t)=>M(r.fom).diff(M(t.fom)),We=r=>!r.erForeldet&&(r.begrunnelse===void 0||r.erSplittet),yt=r=>{const t=r[r.valgtVilkarResultatType],n=t[t.handletUaktsomhetGrad];return t.tilbakekrevdBelop?{...r,[r.valgtVilkarResultatType]:{...je(t,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...r,[r.valgtVilkarResultatType]:{...t,[t.handletUaktsomhetGrad]:{...je(n,"belopSomSkalTilbakekreves")}}}:r},ct=(r,t=[])=>t.map((n,a)=>{const s=r.find(b=>b.fom===n.fom&&b.tom===n.tom),d=s&&s[s.valgtVilkarResultatType]?s[s.valgtVilkarResultatType].erBelopetIBehold:void 0,m=s?!!s.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&((s==null?void 0:s.begrunnelse)===void 0||m),isGodkjent:!(n.erForeldet||d===!1),id:a}}),Rr=(r,t)=>t.find(n=>!M(r.fom).isBefore(M(n.fom))&&!M(r.tom).isAfter(M(n.tom))),vt=(r,t)=>t.every(n=>!(M(r.fom).isSameOrBefore(M(n.tom))&&M(n.fom).isSameOrBefore(M(r.tom)))),ft=(r,t,n)=>{const s=r.reduce((g,y)=>g+y.feilutbetaling,0)<n*4,m=t.vilkarsVurdertePerioder.map(g=>{const y=Rr(g,r);return{...y,harMerEnnEnYtelse:y&&y.ytelser.length>1,...je(g,"feilutbetalingBelop"),feilutbetaling:g.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:s}});return{perioder:r.filter(g=>vt(g,m)).map(g=>({...g,harMerEnnEnYtelse:g.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:s})).concat(m)}},Tt=(r,t)=>{if(!(!r||!t))return t.map(n=>{const a=Rr(n,r.perioder),s=a.foreldelseVurderingType?a.foreldelseVurderingType===Se.FORELDET:a.foreldet;return{redusertBeloper:a.redusertBeloper,ytelser:a.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:a.årsak,begrunnelse:a.begrunnelse,erForeldet:s||!1}})},jt=(r,t)=>r.perioder.map(n=>({...at(n,t),fom:n.fom,tom:n.tom})).sort(Ie),ht=(r,t)=>({kode:Ne.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:r.filter(n=>!n.erForeldet).map(n=>st(n,t))}),qt=r=>{if(!r||r.reduce((a,s)=>s.erForeldet?a:a+1,0)<2)return;const n=r.reduce((a,s)=>{const{valgtVilkarResultatType:d}=s,m=s[d],{handletUaktsomhetGrad:b}=m,g=m[b];return g&&g.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?a+1:a},0);if(n>0&&n!==r.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Pr=({perioderForeldelse:r,kodeverkSamlingFpTilbake:t,submitCallback:n,readOnly:a,alleMerknaderFraBeslutter:s,perioder:d,vilkarvurdering:m,rettsgebyr:b,relasjonsRolleType:g,relasjonsRolleTypeKodeverk:y,beregnBelop:o,behandlingUuid:p,formData:u,setFormData:v})=>{var De;const E=ft(d,m,b),[f,A]=j.useState(u||jt(E,r)),[G,_]=j.useState(!!u),[i,N]=j.useState(f==null?void 0:f.find(We)),[I,ue]=j.useState(!1),[D,ne]=j.useState();j.useEffect(()=>{ne(qt(f))},[f]);const te=Tt(E,f),de=a||(i==null?void 0:i.erForeldet)===!0,xe=f.reduce((T,h)=>h.erForeldet?T:T+1,0),Re=s[Ne.VURDER_TILBAKEKREVING],Pe=j.useCallback(()=>{ue(!0),n(ht(f,t[ce.SARLIG_GRUNN]))},[f]),ae=ct(f,te),W=ae.some(T=>T.isAksjonspunktOpen),c=i?ae.find(T=>T.fom===i.fom&&T.tom===i.tom):void 0,F=T=>{const h=T?f.find(U=>U.fom===T.fom&&U.tom===T.tom):void 0;N(h)},J=()=>{const T=f.findIndex(h=>h.fom===(i==null?void 0:i.fom)&&h.tom===(i==null?void 0:i.tom));F(f[T+1])},q=()=>{const T=f.findIndex(h=>h.fom===(i==null?void 0:i.fom)&&h.tom===(i==null?void 0:i.tom));F(f[T-1])},V=()=>{F(void 0)},Be=T=>{const h=je(T,"erSplittet"),me=f.filter(H=>H.fom!==h.fom&&H.tom!==h.tom).concat(h).sort(Ie);A(me),v(me),_(!0),V();const se=me.find(We);se&&F(se)},z=T=>{const h=f.find(U=>U.fom===(i==null?void 0:i.fom)&&U.tom===(i==null?void 0:i.tom));if(h){const U=T.map(H=>({...yt(h),...H,erSplittet:!0})),se=f.filter(H=>H.fom!==(i==null?void 0:i.fom)&&H.tom!==(i==null?void 0:i.tom)).concat(U).sort(Ie);V(),_(!0),A(se),v(se),F(U[0])}},B=te?te.find(T=>T.fom===(i==null?void 0:i.fom)&&T.tom===(i==null?void 0:i.tom)):void 0;return e.jsxs(Wr,{merknaderFraBeslutter:Re,withoutBorder:!0,children:[e.jsx(he,{size:"small",children:e.jsx(l,{id:"Behandlingspunkt.Tilbakekreving"})}),e.jsx(k,{twentyPx:!0}),W&&e.jsx(Jr,{children:e.jsx(l,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),e.jsx(k,{twentyPx:!0}),f&&e.jsxs(e.Fragment,{children:[e.jsx(xr,{perioder:ae,valgtPeriode:c,setPeriode:F,relasjonsRolleType:g,relasjonsRolleTypeKodeverk:y}),i&&B&&e.jsxs("div",{id:"panel-tilbakekreving","aria-controls":c==null?void 0:c.id.toString(),children:[e.jsx("div",{className:bt.space}),e.jsxs(dn,{border:!0,children:[e.jsx(pr,{setNestePeriode:J,setForrigePeriode:q,periode:B,readOnly:a,oppdaterSplittedePerioder:z,behandlingUuid:p,beregnBelop:o,lukkPeriode:V}),e.jsx(k,{sixteenPx:!0}),e.jsx(kr,{feilutbetaling:B.feilutbetaling,fom:B.fom,tom:B.tom,arsakHendelseNavn:(De=t[Dr.HENDELSE_TYPE].find(T=>{var h;return T.kode===((h=B.årsak)==null?void 0:h.hendelseType)}))==null?void 0:De.navn}),e.jsx(k,{twentyPx:!0}),e.jsx(qr,{periode:i,data:B,antallPerioderMedAksjonspunkt:xe,readOnly:de,skjulPeriode:V,oppdaterPeriode:Be,kodeverkSamlingFpTilbake:t,vilkarsVurdertePerioder:f},c==null?void 0:c.id)]})]})]}),e.jsx(k,{twentyPx:!0}),D&&e.jsxs(e.Fragment,{children:[e.jsx(or,{variant:"error",children:e.jsx(l,{id:D})}),e.jsx(k,{twentyPx:!0})]}),e.jsx(Vr,{isReadOnly:de,isDirty:G,isSubmittable:!W&&!i&&!D,onClick:Pe,isSubmitting:I})]})};Pr.__docgenInfo={description:`TilbakekrevingForm

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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const xt=Cr(mr),Br=({behandling:r,perioderForeldelse:t,vilkarvurderingsperioder:n,vilkarvurdering:a,beregnBelop:s,kodeverkSamlingFpTilbake:d,submitCallback:m,alleMerknaderFraBeslutter:b,isReadOnly:g,formData:y,setFormData:o,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:u})=>e.jsx(Lr,{value:xt,children:e.jsx(Pr,{behandlingUuid:r.uuid,perioderForeldelse:t,perioder:n.perioder,rettsgebyr:n.rettsgebyr,vilkarvurdering:a,submitCallback:m,readOnly:g,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:u,alleMerknaderFraBeslutter:b,kodeverkSamlingFpTilbake:d,beregnBelop:s,formData:y,setFormData:o})});Br.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Rt=Or(mr),Pt={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:Se.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:Se.FORELDET}]},Ar={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:"MEDLEMSKAP"},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},Bt={vilkarsVurdertePerioder:[]},At=Ir,_a={title:"prosess-tilbakekreving/TilbakekrevingProsessIndex",component:Br,decorators:[Rt],args:{submitCallback:Fr("button-click"),behandling:{uuid:"1",versjon:1,status:Ur.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:At,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:Pt,vilkarvurdering:Bt,beregnBelop:r=>Promise.resolve(r),alleMerknaderFraBeslutter:{},relasjonsRolleType:ve.MOR,relasjonsRolleTypeKodeverk:[{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},be={args:{vilkarvurderingsperioder:Ar}},ye={args:{vilkarvurderingsperioder:{perioder:[Ar.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:{kode:"MEDLEM",kodeverk:"",navn:"§22 Medlemskap"}},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};var Je,Xe,Ze;be.parameters={...be.parameters,docs:{...(Je=be.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...(Ze=(Xe=be.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var Qe,er,rr;ye.parameters={...ye.parameters,docs:{...(Qe=ye.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(rr=(er=ye.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};const Va=["Default","MedToPerioder"];export{be as Default,ye as MedToPerioder,Va as __namedExportsOrder,_a as default};
