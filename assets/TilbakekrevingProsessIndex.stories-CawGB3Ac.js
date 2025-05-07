import{a as Pr}from"./index-B-lxVbXh.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{O as nr,P as wr,F as $,M as tr,y as Se,$ as Fr,w as Sr,D as ue,Y as Vr}from"./index.es-F2BLFXtm.js";import{g as Or}from"./withIntl-CF66rPFJ.js";import{a as _r}from"./alleTilbakekrevingKodeverk-dIUSSyeF.js";import{e as x,O as Er,H as Mr,D as Ir,l as ar,i as Gr,a as Me,o as Ie,N as he,S as ce,h as fe,I as Nr,m as Ve,d as Dr}from"./style-DXP0ZQqt.js";import{u as z,E as ne,L as Ur,d as Lr,e as te,C as Te,O as ir,t as Kr,n as qe,P as $r,r as Cr}from"./index.es-Djg88Nde.js";import{r as P}from"./index-DNHX5htx.js";import{h as M}from"./moment-C5S46NFB.js";import{M as s,H as Q,s as Ue,r as zr,V as Hr}from"./index.es-CMsDddE7.js";import{b as sr,u as Ge}from"./index.esm-FZjZzVNN.js";import{d as j}from"./dayjs.min-Cke173X9.js";import{M as pe}from"./Modal-OqvqWSjt.js";import{H as je,L as C,a as w,D as xe,E as Yr}from"./Label-CYbek38p.js";import{V as R,H as I}from"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import{A as lr}from"./Alert-Ja4tf6sE.js";import{B as F}from"./Button-Cc809GDC.js";import{S as Le,T as we,a as Wr,b as Jr,c as Xr,d as Zr,e as Qr,f as en}from"./Timeline-BxrrVreS.js";import{S as rn}from"./Scissors-slXG3Pr9.js";import{S as or,e as ur}from"./DatePicker-CrEkBviX.js";import{S as nn}from"./XMark-6H9iuGiv.js";import{T as D}from"./Table-C5sJMb2u.js";import{T as tn,m as dr}from"./nb_NO-BV0swapL.js";import{a as an,S as sn}from"./SilhouetteFill-BavFPiUa.js";import{B as ln}from"./Box-C3b4VC_S.js";/* empty css              */import"./v4-CtRu48qb.js";import"./Checkbox-BaSR81FM.js";import"./omit-B7stZg_p.js";import"./useId-CsAOvYkp.js";import"./ReadOnlyIcon-BUzfiMc5.js";import"./Loader-42dkOmtz.js";import"./Provider-BZs7ODlm.js";import"./useId-SP_zdaIa.js";import"./useFormField-Bu2NUIkp.js";import"./Fieldset-B4jGbpi0.js";import"./Tag-ntoonGP8.js";import"./Textarea-BjE6whUD.js";import"./index-DU09BupE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-7Fg4giie.js";import"./useClientLayoutEffect-pkze6c0k.js";import"./Select-CvyZY3UD.js";import"./ChevronDown-6T9JsqER.js";import"./Radio-Pmn7OwXu.js";import"./useDatepicker-Bm8fLnqa.js";import"./Date.Input-D651xWgA.js";import"./TextField-DY81zaLa.js";import"./PersonPencilFill-DqunLdn1.js";import"./KeyVerticalFill-DmgzHF4Z.js";import"./Checkmark-DkINtRdf.js";import"./floating-ui.react-CQaPAoM5.js";import"./BasePrimitive-gBgyIEwX.js";import"./ExclamationmarkTriangleFill-DrBUO71d.js";import"./XMarkOctagonFill-Dr7RQDrl.js";import"./Popover-D6iHV8xT.js";var V=(r=>(r.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",r.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",r.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",r.GOD_TRO="GOD_TRO",r))(V||{}),Ne=(r=>(r.VURDER_TILBAKEKREVING="5002",r))(Ne||{});const on="_button_8q57x_1",un="_cancelButton_8q57x_5",Ke={button:on,cancelButton:un},dn=(r,t)=>n=>n&&(Mr(n)(j(r.tom.toString()).subtract(1,"day"))||Ir(n)(r.fom))?t.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,mn=(r,t)=>{const n=j(r.forstePeriodeTomDato).add(1,"days"),a={fom:t.fom,tom:r.forstePeriodeTomDato},i={fom:n.format(Ur),tom:t.tom};return{forstePeriode:a,andrePeriode:i}},mr=({periodeData:r,showModal:t,cancelEvent:n,finnesBelopMed0Verdi:a,splitPeriod:i})=>{const o=z(),u=sr();return e.jsx(nr,{formMethods:u,onSubmit:k=>i(mn(k,r)),children:e.jsxs(pe,{open:t,"aria-label":o.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[e.jsx(pe.Header,{children:e.jsx(je,{size:"small",children:e.jsx(s,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(pe.Body,{children:e.jsxs(R,{gap:"4",children:[e.jsxs("div",{children:[e.jsx(C,{size:"small",children:e.jsx(s,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(w,{size:"small",children:`${j(r.fom.toString()).format(ne)} - ${j(r.tom.toString()).format(ne)}`})]}),e.jsx(wr,{name:"forstePeriodeTomDato",label:e.jsx(s,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[x,Er,dn(r,o)],fromDate:j(r.fom).toDate(),toDate:j(r.tom).toDate()}),a&&e.jsx(lr,{variant:"error",children:e.jsx(s,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(pe.Footer,{children:[e.jsx(F,{size:"small",variant:"primary",className:Ke.button,disabled:!u.formState.isDirty,children:e.jsx(s,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(F,{size:"small",variant:"secondary",onClick:n,className:Ke.cancelButton,type:"button",children:e.jsx(s,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};mr.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const gn="_margin_wnej3_37",Fe={margin:gn},pn=!1,gr=({setNestePeriode:r,setForrigePeriode:t,readOnly:n,lukkPeriode:a,periode:i,beregnBelop:o,behandlingUuid:u,oppdaterSplittedePerioder:k})=>{const g=z(),[b,d]=P.useState(!1),[p,m]=P.useState(!1),y=v=>{d(!0),v.preventDefault()},U=()=>{d(!1)},L=v=>{m(!1);const O={belop:i.feilutbetaling,fom:v.forstePeriode.fom,tom:v.forstePeriode.tom,begrunnelse:i.begrunnelse?i.begrunnelse:" "},_={belop:i.feilutbetaling,fom:v.andrePeriode.fom,tom:v.andrePeriode.tom,begrunnelse:i.begrunnelse?i.begrunnelse:" "};o({behandlingUuid:u,perioder:[O,_]}).then(l=>{const{perioder:E}=l;if(E.some(H=>H.belop===0))m(!0);else{const H={fom:O.fom,tom:O.tom,feilutbetaling:E[0].belop},Y={fom:_.fom,tom:_.tom,feilutbetaling:E[1].belop};U(),k([H,Y])}})};return e.jsxs(I,{children:[e.jsxs(C,{size:"small",children:[e.jsx(s,{id:"PeriodeController.Detaljer"}),pn]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(Le,{}),e.jsx(F,{className:Fe.margin,size:"xsmall",icon:e.jsx(rn,{"aria-hidden":!0}),onClick:y,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(s,{id:"PeriodeController.DelOppPerioden"})})]}),b&&e.jsx(mr,{cancelEvent:U,showModal:b,periodeData:i,splitPeriod:L,finnesBelopMed0Verdi:p}),e.jsx(Le,{}),e.jsx(F,{className:Fe.margin,size:"xsmall",icon:e.jsx(or,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(s,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(F,{className:Fe.margin,size:"xsmall",icon:e.jsx(ur,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(s,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(F,{size:"xsmall",icon:e.jsx(nn,{"aria-hidden":!0}),onClick:a,variant:"tertiary-neutral",type:"button",title:g.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};gr.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<{ perioder: { belop: number }[] }>"}}},description:""},oppdaterSplittedePerioder:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppdatertePerioder: SplittetPeriode[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const kn="_infoSummary_14r2l_1",bn="_positivNumber_14r2l_8",vn="_redNumber_14r2l_12",yn="_resultName_14r2l_17",oe={infoSummary:kn,positivNumber:bn,redNumber:vn,resultName:yn},pr=({fom:r,tom:t,feilutbetaling:n,arsakHendelseNavn:a})=>{const i=Lr(r,t);return e.jsxs(R,{gap:"2",className:oe.infoSummary,children:[e.jsxs(I,{justify:"space-between",children:[e.jsx(C,{size:"small",children:`${j(r).format(ne)} - ${j(t).format(ne)}`}),e.jsx(w,{size:"small",children:i.formattedString})]}),e.jsxs(I,{gap:"4",children:[e.jsxs(w,{size:"small",className:oe.resultName,children:[e.jsx(s,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:n?oe.redNumber:oe.positivNumber,children:te(n)})]}),a&&e.jsx(w,{size:"small",className:oe.resultName,children:a})]})]})};pr.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var B=(r=>(r.FORSETT="FORSETT",r.GROVT_UAKTSOM="GROVT_UAKTSOM",r.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",r))(B||{});const cn=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var kr=(r=>(r.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",r.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",r.STOERRELSE_BELOEP="STOERRELSE_BELOEP",r.TID_FRA_UTBETALING="TID_FRA_UTBETALING",r.ANNET="ANNET",r))(kr||{});const br=({name:r,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const a=Ge(),i=`${r}.skalDetTilleggesRenter`;return P.useEffect(()=>{a.getValues(i)===void 0&&a.setValue(i,!1)},[]),e.jsx("div",{children:e.jsxs(Q,{alignOffset:n?320:360,children:[n&&e.jsxs(R,{gap:"4",children:[e.jsx(C,{size:"small",children:e.jsx(s,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(w,{size:"small",children:"100 %"}),e.jsx($,{name:`${r}.skalDetTilleggesRenter`,label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[x],radios:[{label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:t,parse:o=>o==="true",isHorizontal:!0})]}),!n&&e.jsxs(R,{gap:"2",children:[e.jsxs("div",{children:[e.jsx(xe,{children:e.jsx(s,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(w,{size:"small",children:"100 %"})]}),e.jsx(w,{size:"small",children:e.jsx(s,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})})};br.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const de="Egendefinert",Oe=["30","50","70",de],fn="_suffix_cawxu_1",Tn="_suffixGrovText_cawxu_4",hn="_labelPadding_cawxu_8",qn="_inputFelt_cawxu_12",re={suffix:fn,suffixGrovText:Tn,labelPadding:hn,inputFelt:qn},$e=ar(0),jn=Gr(99.99),xn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},Rn=(r,t)=>n=>{if(n>=t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},vr=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:i,feilutbetalingBelop:o,andelSomTilbakekreves:u})=>{const k=z(),g=Ge(),b=`${r}.skalDetTilleggesRenter`;return P.useEffect(()=>{g.getValues(b)===void 0&&g.setValue(b,!1)},[]),e.jsxs(R,{gap:"4",children:[e.jsx($,{name:`${r}.harGrunnerTilReduksjon`,label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[x],radios:[{label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0}),t&&e.jsx(Q,{alignOffset:24,children:e.jsxs(I,{gap:"4",children:[!i&&u!==de&&e.jsxs(e.Fragment,{children:[e.jsx(C,{size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(I,{gap:"2",children:[e.jsx(tr,{name:`${r}.andelSomTilbakekreves`,label:"",validate:[x],selectValues:Oe.map(d=>e.jsx("option",{value:d,children:d},d))}),e.jsx("div",{className:re.suffix,children:"%"})]})]}),!i&&u===de&&e.jsxs(e.Fragment,{children:[e.jsx(C,{size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(I,{gap:"4",children:[e.jsx(Se,{className:re.inputFelt,name:`${r}.andelSomTilbakekrevesManuell`,readOnly:n,validate:[x,$e,jn],normalizeOnBlur:d=>Number.isNaN(d)?d:parseFloat(d.toString()).toFixed(2),format:d=>d.toString().replace(".",","),parse:d=>d.toString().replace(",",".")}),e.jsx("div",{className:a===B.GROVT_UAKTSOM?re.suffixGrovText:re.suffix,children:"%"})]})]}),i&&e.jsx(Se,{name:`${r}.belopSomSkalTilbakekreves`,label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[x,$e,Rn(k,o)],readOnly:n,format:te,parse:xn}),a===B.GROVT_UAKTSOM&&e.jsxs("div",{children:[e.jsx(xe,{children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),e.jsx(w,{size:"small",className:re.labelPadding,children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),t===!1&&e.jsxs(Q,{alignOffset:90,children:[e.jsx(xe,{children:e.jsx(s,{id:i?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),e.jsxs(R,{gap:"4",children:[e.jsx(w,{size:"small",className:re.labelPadding,children:i?te(o):"100%"}),a===B.GROVT_UAKTSOM&&e.jsx($,{name:b,label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[x],radios:[{label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true"},{label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false"}],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0})]})]})]})};vr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const Bn=Me(3),An=Ie(1500),_e=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:i,sarligGrunnTyper:o,harMerEnnEnYtelse:u,feilutbetalingBelop:k,andelSomTilbakekreves:g})=>{const b=z(),{watch:d}=Ge(),p=!o.some(y=>!!d(`${r}.${y.kode}`)),m=Fr(r,p?b.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return e.jsxs(R,{gap:"4",children:[e.jsx(C,{size:"small",children:e.jsx(s,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),e.jsx("div",{children:o.map(y=>e.jsx(Sr,{name:`${r}.${y.kode}`,label:y.navn,readOnly:n},y.kode))}),i&&e.jsx(ue,{name:`${r}.annetBegrunnelse`,label:"",validate:[x,Bn,An,he],maxLength:1500,readOnly:n}),m&&e.jsx(Yr,{children:m}),e.jsx(vr,{name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:u,feilutbetalingBelop:k,andelSomTilbakekreves:g})]})};_e.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Pn="_explanationTextarea_1kabz_1",wn="_panelWidth_1kabz_5",yr={explanationTextarea:Pn,panelWidth:wn},Fn=Me(3),Sn=Ie(1500),Ce=(r,t,n)=>e.jsxs(R,{gap:"4",children:[e.jsx(C,{size:"small",children:e.jsx(s,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),e.jsx(ue,{name:`${r}.sarligGrunnerBegrunnelse`,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[x,Fn,Sn,he],maxLength:1500,readOnly:t,className:yr.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]}),cr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:i,harMerEnnEnYtelse:o,feilutbetalingBelop:u,erTotalBelopUnder4Rettsgebyr:k,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:b,name:d})=>{const p=z(),m=b?180:200;return e.jsx(Q,{alignOffset:n===B.GROVT_UAKTSOM?m:20,children:e.jsxs("div",{className:yr.panelWidth,children:[n===B.SIMPEL_UAKTSOM&&k&&e.jsx($,{name:`${d}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,label:e.jsx(s,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[x],isTrueOrFalseSelection:!0,isHorizontal:!0,isReadOnly:t,radios:[{label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"}),value:"true",element:e.jsxs("div",{style:{marginTop:"10px"},children:[Ce(d,t,p),e.jsx(_e,{name:d,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:i,harMerEnnEnYtelse:o,feilutbetalingBelop:u,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:g})]})},{label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"}),value:"false",element:e.jsx("div",{style:{marginTop:"10px"},children:e.jsx(Q,{alignOffset:55,children:e.jsx(s,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})})}]}),(n!==B.SIMPEL_UAKTSOM||!k)&&e.jsxs(e.Fragment,{children:[Ce(d,t,p),e.jsx(_e,{name:d,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:i,harMerEnnEnYtelse:o,feilutbetalingBelop:u,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:g})]})]})})};cr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const fr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:i,sarligGrunnTyper:o,harMerEnnEnYtelse:u,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:b,name:d})=>e.jsxs(e.Fragment,{children:[n===B.FORSETT&&e.jsx(br,{name:d,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:i}),n!==B.FORSETT&&e.jsx(cr,{name:d,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:o,harMerEnnEnYtelse:u,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:b,erValgtResultatTypeForstoBurdeForstaatt:i})]});fr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Vn=[B.GROVT_UAKTSOM,B.SIMPEL_UAKTSOM,B.FORSETT],On={[B.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[B.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[B.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},ae=({readOnly:r,resetFields:t,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:i=!1,erValgtResultatTypeForstoBurdeForstaatt:o=!1,aktsomhetTyper:u,sarligGrunnTyper:k,antallYtelser:g,feilutbetalingBelop:b,erTotalBelopUnder4Rettsgebyr:d,andelSomTilbakekreves:p,name:m})=>e.jsxs(e.Fragment,{children:[e.jsx($,{name:`${m}.handletUaktsomhetGrad`,label:e.jsx(s,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[x],radios:u.map(y=>({label:o?e.jsx(s,{id:On[y.kode]}):y.navn,value:y.kode})),isReadOnly:r,onChange:t,isHorizontal:!0}),Vn.some(y=>y===n)&&e.jsx(fr,{name:`${m}.${n}`,harGrunnerTilReduksjon:a,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:i,erValgtResultatTypeForstoBurdeForstaatt:o,sarligGrunnTyper:k,harMerEnnEnYtelse:g>1,feilutbetalingBelop:b,erTotalBelopUnder4Rettsgebyr:d,andelSomTilbakekreves:p})]}),_n=(r,t)=>{const n=parseInt(r,10);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},En=(r,t)=>{const n=parseFloat(r);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Mn=(r,t)=>{if(r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=t.reduce((o,u)=>r[u.kode]?o.concat(u.kode):o,[]),{harGrunnerTilReduksjon:a}=r,i=r.andelSomTilbakekreves===de?En(r.andelSomTilbakekrevesManuell,a):_n(r.andelSomTilbakekreves,a);return{harGrunnerTilReduksjon:a,ileggRenter:a?void 0:r.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:r.harGrunnerTilReduksjon?ir(r.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:r.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...i}};ae.transformValues=(r,t,n)=>{const a=r[r.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:r.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:a?Mn(a,t):null}};const In=(r,t)=>({andelSomTilbakekreves:t===void 0||Oe.includes(t)?t:de,andelSomTilbakekrevesManuell:t&&Oe.includes(t)?void 0:r.andelTilbakekreves,harGrunnerTilReduksjon:r.harGrunnerTilReduksjon,skalDetTilleggesRenter:r.ileggRenter,belopSomSkalTilbakekreves:r.tilbakekrevesBelop,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:Te(r.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...r.sarligGrunner?r.sarligGrunner.reduce((n,a)=>({...n,[a.kode??a]:!0}),{}):{}});ae.buildInitalValues=r=>{const{aktsomhet:t,aktsomhetInfo:n}=r,a=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,i=n?{[t.kode&&"kode"in t?t.kode:t]:In(n,a)}:{};return{handletUaktsomhetGrad:t&&t.kode&&"kode"in t?t.kode:t,...i}};ae.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Tr=()=>e.jsxs(I,{gap:"4",children:[e.jsx(ue,{name:"foreldetBegrunnelse",label:e.jsx(s,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),e.jsx($,{name:"periodenErForeldet",label:e.jsx(xe,{children:e.jsx(s,{id:"ForeldetPanel.VurderOmPeriodenErForeldet"})}),radios:[{label:e.jsx(s,{id:"ForeldetPanel.PeriodenErForeldet"}),value:"true"}],isReadOnly:!0})]});Tr.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const Gn="_arrowbox_ych2z_1",Nn="_tilbakekrevdBelopInput_ych2z_4",ze={arrowbox:Gn,tilbakekrevdBelopInput:Nn},Dn=ar(1),Un=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},Ln=(r,t)=>n=>{if(n>t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ie=({name:r,readOnly:t,erBelopetIBehold:n,feilutbetalingBelop:a})=>{const i=z();return e.jsxs(R,{gap:"2",children:[e.jsx($,{name:`${r}.erBelopetIBehold`,label:e.jsx(s,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[x],radios:[{label:e.jsx(s,{id:"BelopetMottattIGodTroFormPanel.Ja"}),value:"true"},{label:e.jsx(s,{id:"BelopetMottattIGodTroFormPanel.Nei"}),value:"false"}],isReadOnly:t,isTrueOrFalseSelection:!0,isHorizontal:!0}),e.jsxs("div",{className:ze.arrowbox,children:[n===!0&&e.jsx(Q,{alignOffset:25,children:e.jsx(Se,{name:`${r}.tilbakekrevdBelop`,label:e.jsx(s,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[x,Dn,Ln(i,a)],readOnly:t,className:ze.tilbakekrevdBelopInput,format:te,parse:Un})}),n===!1&&e.jsx(Q,{alignOffset:90,children:e.jsx(w,{size:"small",children:e.jsx(s,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ie.transformValues=(r,t)=>({"@type":"godTro",begrunnelse:t,erBelopetIBehold:r.erBelopetIBehold,tilbakekrevesBelop:r.erBelopetIBehold?ir(r.tilbakekrevdBelop):void 0});ie.buildIntialValues=r=>({erBelopetIBehold:r.erBelopetIBehold,tilbakekrevdBelop:r.tilbakekrevesBelop});ie.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Kn="_feilutbetalingTable_1fsd2_1",$n={feilutbetalingTable:Kn},hr=({ytelser:r})=>{if(r.length===0)return null;let t=0;return e.jsxs(D,{className:$n.feilutbetalingTable,children:[e.jsx(D.Header,{children:e.jsxs(D.Row,{children:[e.jsx(D.HeaderCell,{scope:"col",children:e.jsx(s,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),e.jsx(D.HeaderCell,{scope:"col",children:e.jsx(s,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),e.jsx(D.Body,{children:r.map(n=>(t+=1,e.jsxs(D.Row,{children:[e.jsx(D.DataCell,{children:e.jsx(w,{size:"small",children:n.aktivitet})}),e.jsx(D.DataCell,{children:e.jsx(w,{size:"small",children:te(n.belop)})})]},n.aktivitet+n.belop+t)))})]})};hr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Cn="_explanationTextarea_1udkt_1",zn="_leftColumn_1udkt_5",Hn="_rightColumn_1udkt_9",Yn="_selectWidth_1udkt_12",ke={explanationTextarea:Cn,leftColumn:zn,rightColumn:Hn,selectWidth:Yn},He=Me(3),Ye=Ie(1500),qr=({data:r,periode:t,skjulPeriode:n,readOnly:a,oppdaterPeriode:i,vilkarsVurdertePerioder:o,kodeverkSamlingFpTilbake:u,antallPerioderMedAksjonspunkt:k})=>{const g=z(),[b,d]=P.useState(!1),p=sr({defaultValues:t}),m=p.watch("valgtVilkarResultatType"),y=p.watch(`${m}.handletUaktsomhetGrad`),U=p.watch(`${m}.${y}.harGrunnerTilReduksjon`),L=p.watch(`${m}.${y}.andelSomTilbakekreves`),v=p.watch(`${m}.${y}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),O=p.watch(`${m}.${y}.${kr.ANNET}`),_=p.watch(`${m}.erBelopetIBehold`),T=Ue(m),l=Ue(y),E=r.redusertBeloper,me=u[ce.SARLIG_GRUNN],H=u[ce.VILKAR_RESULTAT],Y=cn.map(c=>u[ce.AKTSOMHET].find(A=>A.kode===c)),Re=(c,A)=>{const S=c.target.value.split("_"),q=A.find(G=>G.fom===S[0]&&G.tom===S[1]),K=q==null?void 0:q.valgtVilkarResultatType,ee=q&&K?q[K]:void 0,J=JSON.parse(JSON.stringify(ee));if(K!==V.GOD_TRO){const{handletUaktsomhetGrad:G}=J;G!==B.FORSETT&&(t==null?void 0:t.harMerEnnEnYtelse)!==(q==null?void 0:q.harMerEnnEnYtelse)&&(J[G].andelSomTilbakekreves=null,J[G].andelSomTilbakekrevesManuell=null,J[G].belopSomSkalTilbakekreves=null)}p.setValue("valgtVilkarResultatType",K,{shouldDirty:!0}),p.setValue("begrunnelse",q==null?void 0:q.begrunnelse,{shouldDirty:!0}),p.setValue("vurderingBegrunnelse",q==null?void 0:q.vurderingBegrunnelse,{shouldDirty:!0}),K&&p.setValue(K,J,{shouldDirty:!0}),c.preventDefault()},se=()=>{d(!b),i(p.getValues())},Be=c=>{k>1&&r.erTotalBelopUnder4Rettsgebyr&&v===!1?d(!b):i(c)},Ae=()=>{T&&p.resetField(T)},Pe=()=>{l&&p.resetField(`${m}.${l}`)},W=o.filter(c=>!c.erForeldet&&c.valgtVilkarResultatType!=null);return e.jsx(nr,{formMethods:p,onSubmit:Be,children:e.jsxs(R,{gap:"4",children:[e.jsx(R,{gap:"2",children:E&&E.map(c=>e.jsx(w,{size:"small",children:e.jsx(s,{id:c.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:te(c.belop),b:Kr}})},c.belop))}),e.jsx(hr,{ytelser:r.ytelser}),!a&&!r.erForeldet&&W.length>0&&e.jsx(tr,{name:"perioderForKopi",selectValues:W.map(c=>{const A=`${c.fom}_${c.tom}`,S=`${j(c.fom).format(ne)} - ${j(c.tom).format(ne)}`;return e.jsx("option",{value:A,children:S},A)}),onChange:c=>Re(c,W),className:ke.selectWidth,label:e.jsx(s,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),e.jsxs(I,{gap:"4",wrap:!0,children:[e.jsxs("div",{className:ke.leftColumn,children:[r.erForeldet&&e.jsx(Tr,{}),!r.erForeldet&&e.jsxs(R,{gap:"2",children:[e.jsx(je,{size:"small",children:e.jsx(s,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),e.jsx(ue,{name:"begrunnelse",label:g.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[x,He,Ye,he],maxLength:1500,readOnly:a,className:ke.explanationTextarea,description:g.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),e.jsx($,{name:"valgtVilkarResultatType",label:e.jsx(s,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[x],radios:H.map(c=>({label:c.navn,value:c.kode})),isReadOnly:a,onChange:Ae})]})]}),e.jsx("div",{className:ke.rightColumn,children:m&&e.jsxs(R,{gap:"2",children:[e.jsx(je,{size:"small",children:e.jsx(s,{id:m===V.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),e.jsx(ue,{name:"vurderingBegrunnelse",label:g.formatMessage({id:m===V.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[x,He,Ye,he],maxLength:1500,readOnly:a}),m===V.GOD_TRO&&e.jsx(ie,{name:m,readOnly:a,erBelopetIBehold:_,feilutbetalingBelop:r.feilutbetaling}),m!==V.GOD_TRO&&e.jsx(ae,{name:m,harGrunnerTilReduksjon:U,readOnly:a,handletUaktsomhetGrad:y,resetFields:Pe,erSerligGrunnAnnetValgt:O,erValgtResultatTypeForstoBurdeForstaatt:m===V.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:Y,sarligGrunnTyper:me,antallYtelser:r.ytelser.length,feilutbetalingBelop:r.feilutbetaling,erTotalBelopUnder4Rettsgebyr:r.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:L},m)]})})]}),e.jsxs(I,{gap:"4",children:[e.jsx(F,{size:"small",variant:"primary",disabled:!p.formState.isDirty||a,children:e.jsx(s,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),e.jsx(F,{size:"small",variant:"secondary",onClick:n,type:"button",children:e.jsx(s,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),b&&e.jsx(tn,{showModal:!0,submit:se})]})})};qr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]},description:""},skjulPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: CustomVilkarsVurdertePeriode) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]},name:"values"}],return:{name:"void"}}},description:""},vilkarsVurdertePerioder:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const Wn="_margin_1wl4t_1",be={margin:Wn},Jn={danger:e.jsx(en,{}),success:e.jsx(Qr,{}),warning:e.jsx(Zr,{})},Xn=(r,t)=>r.fom<t.fom?-1:r.fom>t.fom?1:0,Zn=r=>{const t=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":t},Qn=(r=[])=>[...r].sort(Xn).map(t=>({...t,status:Zn(t)})),et=r=>r===fe.MOR||r===fe.MEDMOR?e.jsx(an,{width:20,height:20,color:"var(--a-red-200)"}):r===fe.FAR?e.jsx(sn,{width:20,height:20,color:"var(--a-blue-600)"}):e.jsx(Xr,{width:20,height:20}),jr=({perioder:r,valgtPeriode:t,setPeriode:n,relasjonsRolleType:a,relasjonsRolleTypeKodeverk:i})=>{var _;const o=z(),u=Qn(r),k=T=>{const l=r.find(E=>E.id===T);l&&n(l)},g=j(u[0].fom),b=j(u[u.length-1].tom),[d,p]=P.useState(g),[m,y]=P.useState(b),U=()=>{d.subtract(1,"month").isBefore(g)||(p(d.subtract(1,"month")),y(m.subtract(1,"month")))},L=()=>{m.add(1,"month").isAfter(b)||(p(d.add(1,"month")),y(m.add(1,"month")))},v=()=>{d.add(3,"month").isAfter(m)||(p(d.add(1,"month")),y(m.subtract(1,"month")))},O=()=>{m.add(1,"month").diff(d.subtract(1,"month"),"months")<36&&(p(d.subtract(1,"month")),y(m.add(1,"month")))};return e.jsxs(R,{gap:"4",children:[e.jsx(we,{startDate:j(d).toDate(),endDate:j(m).add(1,"days").toDate(),children:e.jsx(we.Row,{label:((_=i.find(T=>T.kode===a))==null?void 0:_.navn)||"-",icon:et(a),children:u.map(T=>e.jsx(we.Period,{start:j(T.fom).toDate(),end:j(T.tom).toDate(),status:T.status,icon:Jn[T.status],onSelectPeriod:()=>k(T.id),isActive:(t==null?void 0:t.id)===T.id,"aria-controls":"panel-tilbakekreving",id:T.id.toString()},T.id))})}),e.jsxs(I,{justify:"end",children:[e.jsx(F,{className:be.margin,size:"small",icon:e.jsx(Wr,{"aria-hidden":!0}),onClick:v,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(F,{className:be.margin,size:"small",icon:e.jsx(Jr,{"aria-hidden":!0}),onClick:O,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(F,{className:be.margin,size:"small",icon:e.jsx(or,{"aria-hidden":!0}),onClick:U,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(F,{className:be.margin,size:"small",icon:e.jsx(ur,{"aria-hidden":!0}),onClick:L,variant:"primary-neutral",type:"button",title:o.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};jr.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const Ee=(r,t)=>M(r.fom).diff(M(t.fom)),We=r=>!r.erForeldet&&(r.begrunnelse===void 0||r.erSplittet),rt=r=>{const t=r[r.valgtVilkarResultatType],n=t[t.handletUaktsomhetGrad];return t.tilbakekrevdBelop?{...r,[r.valgtVilkarResultatType]:{...qe(t,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...r,[r.valgtVilkarResultatType]:{...t,[t.handletUaktsomhetGrad]:{...qe(n,"belopSomSkalTilbakekreves")}}}:r},nt=(r,t=[])=>t.map((n,a)=>{const i=r.find(k=>k.fom===n.fom&&k.tom===n.tom),o=i&&i[i.valgtVilkarResultatType]?i[i.valgtVilkarResultatType].erBelopetIBehold:void 0,u=i?!!i.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&((i==null?void 0:i.begrunnelse)===void 0||u),isGodkjent:!(n.erForeldet||o===!1),id:a}}),xr=(r,t)=>t.find(n=>!M(r.fom).isBefore(M(n.fom))&&!M(r.tom).isAfter(M(n.tom))),tt=(r,t)=>t.every(n=>!(M(r.fom).isSameOrBefore(M(n.tom))&&M(n.fom).isSameOrBefore(M(r.tom)))),at=(r,t,n)=>{const i=r.reduce((g,b)=>g+b.feilutbetaling,0)<n*4,u=t.vilkarsVurdertePerioder.map(g=>{const b=xr(g,r);return{...b,harMerEnnEnYtelse:b&&b.ytelser.length>1,...qe(g,"feilutbetalingBelop"),feilutbetaling:g.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:i}});return{perioder:r.filter(g=>tt(g,u)).map(g=>({...g,harMerEnnEnYtelse:g.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:i})).concat(u)}},it=(r,t)=>{if(!(!r||!t))return t.map(n=>{const a=xr(n,r.perioder),i=a.foreldelseVurderingType?a.foreldelseVurderingType===Ve.FORELDET:a.foreldet;return{redusertBeloper:a.redusertBeloper,ytelser:a.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:a.årsak,begrunnelse:a.begrunnelse,erForeldet:i||!1}})},st=(r,t)=>{const{vilkarResultat:n,begrunnelse:a,vilkarResultatInfo:i}=r,o=(n==null?void 0:n.kode)??n;let u;const k=r.erForeldet??r.foreldet;if(k){const p=t.perioder.find(m=>m.fom===r.fom&&m.tom===r.tom);u={erForeldet:k,periodenErForeldet:!0,foreldetBegrunnelse:p?Te(p.begrunnelse):void 0}}else u={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const g={valgtVilkarResultatType:o,begrunnelse:Te(a),harMerEnnEnYtelse:r.ytelser.length>1,...u},b=o===V.GOD_TRO?ie.buildIntialValues(i):{},d=o!==void 0&&o!==V.GOD_TRO?ae.buildInitalValues(i):{};return{...g,vurderingBegrunnelse:i?Te(i.begrunnelse):void 0,[g.valgtVilkarResultatType]:{...b,...d}}},lt=(r,t)=>{const{valgtVilkarResultatType:n,begrunnelse:a,vurderingBegrunnelse:i}=r,o=r[n],u=n===V.GOD_TRO?ie.transformValues(o,i):{},k=n!==V.GOD_TRO?ae.transformValues(o,t,i):{};return{begrunnelse:a,fom:r.fom,tom:r.tom,vilkarResultat:n,vilkarResultatInfo:{...u,...k}}},ot=(r,t)=>r.perioder.map(n=>({...st(n,t),fom:n.fom,tom:n.tom})).sort(Ee),ut=(r,t)=>({kode:Ne.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:r.filter(n=>!n.erForeldet).map(n=>lt(n,t))}),dt=r=>{if(!r||r.reduce((a,i)=>i.erForeldet?a:a+1,0)<2)return;const n=r.reduce((a,i)=>{const{valgtVilkarResultatType:o}=i,u=i[o],{handletUaktsomhetGrad:k}=u,g=u[k];return g&&g.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?a+1:a},0);if(n>0&&n!==r.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Rr=({perioderForeldelse:r,kodeverkSamlingFpTilbake:t,vilkarvurderingsperioder:n,submitCallback:a,isReadOnly:i,alleMerknaderFraBeslutter:o,vilkarvurdering:u,relasjonsRolleType:k,relasjonsRolleTypeKodeverk:g,beregnBelop:b,behandling:d,formData:p,setFormData:m})=>{var De;const y=n.perioder,U=n.rettsgebyr,L=at(y,u,U),[v,O]=P.useState(p||ot(L,r)),[_,T]=P.useState(!!p),[l,E]=P.useState(v==null?void 0:v.find(We)),[me,H]=P.useState(!1),[Y,Re]=P.useState();P.useEffect(()=>{Re(dt(v))},[v]);const se=it(L,v),Be=v.reduce((f,h)=>h.erForeldet?f:f+1,0),Ae=o[Ne.VURDER_TILBAKEKREVING],Pe=()=>{H(!0),a(ut(v,t[ce.SARLIG_GRUNN]))},W=nt(v,se),c=W.some(f=>f.isAksjonspunktOpen),A=l?W.find(f=>f.fom===l.fom&&f.tom===l.tom):void 0,S=f=>{const h=f?v.find(N=>N.fom===f.fom&&N.tom===f.tom):void 0;E(h)},q=()=>{const f=v.findIndex(h=>h.fom===(l==null?void 0:l.fom)&&h.tom===(l==null?void 0:l.tom));S(v[f+1])},K=()=>{const f=v.findIndex(h=>h.fom===(l==null?void 0:l.fom)&&h.tom===(l==null?void 0:l.tom));S(v[f-1])},ee=()=>{S(void 0)},J=f=>{const h=qe(f,"erSplittet"),ge=v.filter(Z=>Z.fom!==h.fom&&Z.tom!==h.tom).concat(h).sort(Ee);O(ge),m(ge),T(!0),ee();const le=ge.find(We);le&&S(le)},G=f=>{const h=v.find(N=>N.fom===(l==null?void 0:l.fom)&&N.tom===(l==null?void 0:l.tom));if(h){const N=f.map(Z=>({...rt(h),...Z,erSplittet:!0})),le=v.filter(Z=>Z.fom!==(l==null?void 0:l.fom)&&Z.tom!==(l==null?void 0:l.tom)).concat(N).sort(Ee);ee(),T(!0),O(le),m(le),S(N[0])}},X=se?se.find(f=>f.fom===(l==null?void 0:l.fom)&&f.tom===(l==null?void 0:l.tom)):void 0;return e.jsx(zr,{merknaderFraBeslutter:Ae,withoutBorder:!0,children:e.jsxs(R,{gap:"4",children:[e.jsx(je,{size:"small",children:e.jsx(s,{id:"Behandlingspunkt.Tilbakekreving"})}),c&&e.jsx(Hr,{children:e.jsx(s,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),v&&e.jsxs(e.Fragment,{children:[e.jsx(jr,{perioder:W,valgtPeriode:A,setPeriode:S,relasjonsRolleType:k,relasjonsRolleTypeKodeverk:g}),l&&X&&e.jsx("div",{id:"panel-tilbakekreving","aria-controls":A==null?void 0:A.id.toString(),children:e.jsx(ln,{borderWidth:"1",padding:"4",children:e.jsxs(R,{gap:"4",children:[e.jsx(gr,{setNestePeriode:q,setForrigePeriode:K,periode:X,readOnly:i,oppdaterSplittedePerioder:G,behandlingUuid:d.uuid,beregnBelop:b,lukkPeriode:ee}),e.jsx(pr,{feilutbetaling:X.feilutbetaling,fom:X.fom,tom:X.tom,arsakHendelseNavn:(De=t[Nr.HENDELSE_TYPE].find(f=>{var h;return f.kode===((h=X.årsak)==null?void 0:h.hendelseType)}))==null?void 0:De.navn}),e.jsx(qr,{periode:l,data:X,antallPerioderMedAksjonspunkt:Be,readOnly:i||(l==null?void 0:l.erForeldet)===!0,skjulPeriode:ee,oppdaterPeriode:J,kodeverkSamlingFpTilbake:t,vilkarsVurdertePerioder:v},A==null?void 0:A.id)]})})})]}),Y&&e.jsx(lr,{variant:"error",children:e.jsx(s,{id:Y})}),e.jsx("div",{children:e.jsx(Vr,{isReadOnly:i||(l==null?void 0:l.erForeldet)===!0,isDirty:_,isSubmittable:!c&&!l&&!Y,onClick:Pe,isSubmitting:me})})]})})};Rr.__docgenInfo={description:`TilbakekrevingForm

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},vilkarvurderingsperioder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}],raw:"DetaljertFeilutbetalingPeriode[]",required:!0}},{key:"rettsgebyr",value:{name:"number",required:!0}}]}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: VilkårsvurderingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},vilkarvurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:"VilkårsvurdertPeriode[]",required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"string"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<{ perioder: { belop: number }[] }>"}}},description:""},behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}}]}},description:""},formData:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const mt=Cr(dr),Br=r=>e.jsx($r,{value:mt,children:e.jsx(Rr,{...r})});Br.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:"VilkårsvurdertPeriode[]",required:!0}}]}},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<{ perioder: { belop: number }[] }>"}}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"},description:""}}};const gt=Or(dr),pt={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:Ve.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:Ve.FORELDET}]},Ar={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:"MEDLEMSKAP"},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},kt={vilkarsVurdertePerioder:[]},bt=_r,fa={component:Br,decorators:[gt],args:{submitCallback:Pr("button-click"),behandling:{uuid:"1",versjon:1,status:Dr.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:bt,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:pt,vilkarvurdering:kt,beregnBelop:r=>Promise.resolve(r),alleMerknaderFraBeslutter:{},relasjonsRolleType:fe.MOR,relasjonsRolleTypeKodeverk:[{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},ve={args:{vilkarvurderingsperioder:Ar}},ye={args:{vilkarvurderingsperioder:{perioder:[Ar.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:{kode:"MEDLEM",kodeverk:"",navn:"§22 Medlemskap"}},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};var Je,Xe,Ze;ve.parameters={...ve.parameters,docs:{...(Je=ve.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...(Ze=(Xe=ve.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var Qe,er,rr;ye.parameters={...ye.parameters,docs:{...(Qe=ye.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(rr=(er=ye.parameters)==null?void 0:er.docs)==null?void 0:rr.source}}};const Ta=["Default","MedToPerioder"];export{ve as Default,ye as MedToPerioder,Ta as __namedExportsOrder,fa as default};
