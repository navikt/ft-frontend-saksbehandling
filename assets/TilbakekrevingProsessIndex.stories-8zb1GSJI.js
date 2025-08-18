import{c as z,aa as Je,j as e,aw as Ze,M as be,J as qe,V as j,L as $,B as S,d as y,o as te,aT as jr,A as Xe,z as F,m as Rr,r as P,H as A,aU as Qe,aV as er,am as Br,ab as xr,aW as Ar,ad as ae,i as C,aY as ee,aS as H,v as w,D as je,at as rr,aZ as Oe,a_ as Pr,ax as wr,aA as me,E as Sr,aB as Te,an as nr,a$ as De,b0 as Fr,ay as Or,av as Vr,F as Er,aL as Gr,aX as Re,P as Ir,h as _r}from"./iframe-BD85B6wt.js";import{g as Ur}from"./withIntl-BfItdlWJ.js";import{a as Mr}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as B,O as Dr,J as Nr,R as Kr,l as tr,i as Lr,a as _e,o as Ue,M as Be,b as de,$ as Ve,Z as $r,y as ar}from"./style-CZ1MF8Vp.js";import{M as i}from"./message-CJ7amByF.js";import{S as Ne,T as Se,a as Hr,b as zr,c as Cr,d as Yr,e as Wr,f as Jr}from"./Timeline-BUY7mYXt.js";import{S as Zr}from"./Scissors-D-UMezl0.js";import{T as M}from"./Table-CBPZBMPs.js";import{T as Xr,m as sr}from"./nb_NO-BAT0JYfA.js";import{a as Qr,S as en}from"./SilhouetteFill-Doyo2Uwc.js";import"./preload-helper-D9Z9MdNV.js";const rn="_button_8q57x_1",nn="_cancelButton_8q57x_5",Ke={button:rn,cancelButton:nn},tn=(r,t)=>n=>n&&(Nr(n)(y(r.tom.toString()).subtract(1,"day"))||Kr(n)(r.fom))?t.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,an=(r,t)=>{const n=y(r.forstePeriodeTomDato).add(1,"days"),a={fom:t.fom,tom:r.forstePeriodeTomDato},s={fom:n.format(Rr),tom:t.tom};return{forstePeriode:a,andrePeriode:s}},ir=({periodeData:r,showModal:t,cancelEvent:n,finnesBelopMed0Verdi:a,splitPeriod:s})=>{const l=z(),u=Je();return e.jsx(Ze,{formMethods:u,onSubmit:k=>s(an(k,r)),children:e.jsxs(be,{open:t,"aria-label":l.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[e.jsx(be.Header,{children:e.jsx(qe,{size:"small",level:"2",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(be.Body,{children:e.jsxs(j,{gap:"space-16",children:[e.jsxs("div",{children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(S,{size:"small",children:`${y(r.fom.toString()).format(te)} - ${y(r.tom.toString()).format(te)}`})]}),e.jsx(jr,{name:"forstePeriodeTomDato",control:u.control,label:e.jsx(i,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[B,Dr,tn(r,l)],fromDate:y(r.fom).toDate(),toDate:y(r.tom).toDate()}),a&&e.jsx(Xe,{variant:"error",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(be.Footer,{children:[e.jsx(F,{size:"small",variant:"primary",className:Ke.button,disabled:!u.formState.isDirty,children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(F,{size:"small",variant:"secondary",onClick:n,className:Ke.cancelButton,type:"button",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};ir.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const sn="_margin_1dkor_37",Fe={margin:sn},ln=!1,lr=({setNestePeriode:r,setForrigePeriode:t,readOnly:n,lukkPeriode:a,periode:s,beregnBelop:l,behandlingUuid:u,oppdaterSplittedePerioder:k})=>{const o=z(),[p,d]=P.useState(!1),[g,m]=P.useState(!1),T=b=>{d(!0),b.preventDefault()},h=()=>{d(!1)},D=b=>{m(!1);const E={belop:s.feilutbetaling,fom:b.forstePeriode.fom,tom:b.forstePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "},q={belop:s.feilutbetaling,fom:b.andrePeriode.fom,tom:b.andrePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "};l({behandlingUuid:u,perioder:[E,q]}).then(c=>{const{perioder:N}=c;if(N.some(Y=>Y.belop===0))m(!0);else{const Y={fom:E.fom,tom:E.tom,feilutbetaling:N[0].belop},W={fom:q.fom,tom:q.tom,feilutbetaling:N[1].belop};h(),k([Y,W])}})};return e.jsxs(A,{children:[e.jsxs($,{size:"small",children:[e.jsx(i,{id:"PeriodeController.Detaljer"}),ln]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(Ne,{}),e.jsx(F,{className:Fe.margin,size:"xsmall",icon:e.jsx(Zr,{"aria-hidden":!0}),onClick:T,variant:"tertiary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(i,{id:"PeriodeController.DelOppPerioden"})})]}),p&&e.jsx(ir,{cancelEvent:h,showModal:p,periodeData:s,splitPeriod:D,finnesBelopMed0Verdi:g}),e.jsx(Ne,{}),e.jsx(F,{className:Fe.margin,size:"xsmall",icon:e.jsx(Qe,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(i,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(F,{className:Fe.margin,size:"xsmall",icon:e.jsx(er,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(i,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(F,{size:"xsmall",icon:e.jsx(Br,{"aria-hidden":!0}),onClick:a,variant:"tertiary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};lr.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
    hendelseType: HendelseType;
    hendelseUndertype?: HendelseUnderType;
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
  hendelseType: HendelseType;
  hendelseUndertype?: HendelseUnderType;
}`,signature:{properties:[{key:"hendelseType",value:{name:"HendelseType",required:!0}},{key:"hendelseUndertype",value:{name:"HendelseUnderType",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var he={exports:{}},on=he.exports,Le;function un(){return Le||(Le=1,function(r,t){(function(n,a){r.exports=a()})(on,function(){return function(n,a){a.prototype.isSameOrBefore=function(s,l){return this.isSame(s,l)||this.isBefore(s,l)}}})}(he)),he.exports}var dn=un();const mn=xr(dn);var V=(r=>(r.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",r.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",r.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",r.GOD_TRO="GOD_TRO",r))(V||{}),Me=(r=>(r.VURDER_TILBAKEKREVING="5002",r))(Me||{});const gn="_infoSummary_14z0n_1",kn="_positivNumber_14z0n_8",pn="_redNumber_14z0n_12",bn="_resultName_14z0n_17",ue={infoSummary:gn,positivNumber:kn,redNumber:pn,resultName:bn},or=({fom:r,tom:t,feilutbetaling:n,arsakHendelseNavn:a})=>{const s=Ar(r,t);return e.jsxs(j,{gap:"space-8",className:ue.infoSummary,children:[e.jsxs(A,{justify:"space-between",children:[e.jsx($,{size:"small",children:`${y(r).format(te)} - ${y(t).format(te)}`}),e.jsx(S,{size:"small",children:s.formattedString})]}),e.jsxs(A,{gap:"space-16",children:[e.jsxs(S,{size:"small",className:ue.resultName,children:[e.jsx(i,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:n?ue.redNumber:ue.positivNumber,children:ae(n)})]}),a&&e.jsx(S,{size:"small",className:ue.resultName,children:a})]})]})};or.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var x=(r=>(r.FORSETT="FORSETT",r.GROVT_UAKTSOM="GROVT_UAKTSOM",r.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",r))(x||{});const vn=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var ur=(r=>(r.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",r.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",r.STOERRELSE_BELOEP="STOERRELSE_BELOEP",r.TID_FRA_UTBETALING="TID_FRA_UTBETALING",r.ANNET="ANNET",r))(ur||{});const dr=({name:r,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const a=C(),s=`${r}.skalDetTilleggesRenter`;return P.useEffect(()=>{a.getValues(s)===void 0&&a.setValue(s,!1)},[]),e.jsxs(ee,{alignOffset:n?320:360,children:[n&&e.jsxs(j,{gap:"space-16",children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(S,{size:"small",children:"100 %"}),e.jsxs(H,{name:`${r}.skalDetTilleggesRenter`,control:a.control,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[B],isReadOnly:t,children:[e.jsx(w,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(w,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]}),!n&&e.jsxs(j,{gap:"space-8",children:[e.jsxs("div",{children:[e.jsx(je,{children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(S,{size:"small",children:"100 %"})]}),e.jsx(S,{size:"small",children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})};dr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const ge="Egendefinert",Ee=["30","50","70",ge],yn="_suffix_cawxu_1",cn="_suffixGrovText_cawxu_4",fn="_labelPadding_cawxu_8",Tn="_inputFelt_cawxu_12",ne={suffix:yn,suffixGrovText:cn,labelPadding:fn,inputFelt:Tn},$e=tr(0),hn=Lr(99.99),qn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},jn=(r,t)=>n=>{if((typeof n=="string"?Number(n):n)>=t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},mr=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,andelSomTilbakekreves:u})=>{const k=z(),o=C(),p=`${r}.skalDetTilleggesRenter`;return P.useEffect(()=>{o.getValues(p)===void 0&&o.setValue(p,!1)},[]),e.jsxs(j,{gap:"space-12",children:[e.jsx(H,{name:`${r}.harGrunnerTilReduksjon`,control:o.control,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[B],isReadOnly:n,children:e.jsxs(A,{gap:"space-20",children:[e.jsx(w,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(w,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})}),t&&e.jsx(ee,{alignOffset:24,children:e.jsxs(A,{gap:"space-16",children:[!s&&u!==ge&&e.jsxs(e.Fragment,{children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(A,{gap:"space-8",children:[e.jsx(rr,{name:`${r}.andelSomTilbakekreves`,control:o.control,label:"",validate:[B],selectValues:Ee.map(d=>e.jsx("option",{value:d,children:d},d))}),e.jsx("div",{className:ne.suffix,children:"%"})]})]}),!s&&u===ge&&e.jsxs(e.Fragment,{children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(A,{gap:"space-16",children:[e.jsx(Oe,{name:`${r}.andelSomTilbakekrevesManuell`,control:o.control,className:ne.inputFelt,readOnly:n,validate:[B,$e,hn],normalizeOnBlur:d=>Number.isNaN(d)?d:parseFloat(d.toString()).toFixed(2),format:d=>d.toString().replace(".",","),parse:d=>d.toString().replace(",",".")}),e.jsx("div",{className:a===x.GROVT_UAKTSOM?ne.suffixGrovText:ne.suffix,children:"%"})]})]}),s&&e.jsx(Oe,{name:`${r}.belopSomSkalTilbakekreves`,control:o.control,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[B,$e,jn(k,l)],readOnly:n,format:ae,parse:qn}),a===x.GROVT_UAKTSOM&&e.jsxs("div",{children:[e.jsx(je,{children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),e.jsx(S,{size:"small",className:ne.labelPadding,children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),t===!1&&e.jsxs(ee,{alignOffset:90,children:[e.jsx(je,{children:e.jsx(i,{id:s?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),e.jsxs(j,{gap:"space-16",children:[e.jsx(S,{size:"small",className:ne.labelPadding,children:s?ae(l):"100%"}),a===x.GROVT_UAKTSOM&&e.jsx(H,{name:p,control:o.control,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[B],isReadOnly:n,children:e.jsxs(A,{gap:"space-20",children:[e.jsx(w,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(w,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})})]})]})]})};mr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const Rn=_e(3),Bn=Ue(1500),Ge=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:s,sarligGrunnTyper:l,harMerEnnEnYtelse:u,feilutbetalingBelop:k,andelSomTilbakekreves:o})=>{const p=z(),{watch:d,control:g}=C(),m=!l.some(h=>!!d(`${r}.${h.kode}`)),T=Pr(r,m?p.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return e.jsxs(j,{gap:"space-16",children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),e.jsx("div",{children:l.map(h=>e.jsx(wr,{name:`${r}.${h.kode}`,control:g,label:h.navn,readOnly:n},h.kode))}),s&&e.jsx(me,{name:`${r}.annetBegrunnelse`,control:g,label:"",validate:[B,Rn,Bn,Be],maxLength:1500,readOnly:n}),T&&e.jsx(Sr,{children:T}),e.jsx(mr,{name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:u,feilutbetalingBelop:k,andelSomTilbakekreves:o})]})};Ge.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const xn="_explanationTextarea_1kabz_1",An="_panelWidth_1kabz_5",gr={explanationTextarea:xn,panelWidth:An},Pn=_e(3),wn=Ue(1500),He=({name:r,readOnly:t})=>{const n=z(),{control:a}=C();return e.jsxs(j,{gap:"space-16",children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),e.jsx(me,{name:`${r}.sarligGrunnerBegrunnelse`,control:a,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[B,Pn,wn,Be],maxLength:1500,readOnly:t,className:gr.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]})},kr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:u,erTotalBelopUnder4Rettsgebyr:k,andelSomTilbakekreves:o,erValgtResultatTypeForstoBurdeForstaatt:p,name:d})=>{const{control:g,watch:m}=C(),T=m(`${d}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),h=p?180:200;return e.jsx(ee,{alignOffset:n===x.GROVT_UAKTSOM?h:20,children:e.jsxs("div",{className:gr.panelWidth,children:[n===x.SIMPEL_UAKTSOM&&k&&e.jsxs(j,{gap:"space-12",children:[e.jsx(H,{name:`${d}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,control:g,label:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[B],isReadOnly:t,children:e.jsxs(A,{gap:"space-16",children:[e.jsx(w,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(w,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})}),T&&e.jsxs(e.Fragment,{children:[e.jsx(He,{name:d,readOnly:t}),e.jsx(Ge,{name:d,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:u,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:o})]}),T===!1&&e.jsx(ee,{alignOffset:55,children:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})]}),(n!==x.SIMPEL_UAKTSOM||!k)&&e.jsxs(e.Fragment,{children:[e.jsx(He,{name:d,readOnly:t}),e.jsx(Ge,{name:d,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:u,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:o})]})]})})};kr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const pr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:l,harMerEnnEnYtelse:u,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:p,name:d})=>e.jsxs(e.Fragment,{children:[n===x.FORSETT&&e.jsx(dr,{name:d,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:s}),n!==x.FORSETT&&e.jsx(kr,{name:d,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:l,harMerEnnEnYtelse:u,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:p,erValgtResultatTypeForstoBurdeForstaatt:s})]});pr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Sn=[x.GROVT_UAKTSOM,x.SIMPEL_UAKTSOM,x.FORSETT],Fn={[x.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[x.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[x.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},se=({readOnly:r,resetFields:t,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:s=!1,erValgtResultatTypeForstoBurdeForstaatt:l=!1,aktsomhetTyper:u,sarligGrunnTyper:k,antallYtelser:o,feilutbetalingBelop:p,erTotalBelopUnder4Rettsgebyr:d,andelSomTilbakekreves:g,name:m})=>{const{control:T}=C();return e.jsxs(j,{gap:"space-12",children:[e.jsx(H,{name:`${m}.handletUaktsomhetGrad`,control:T,label:e.jsx(i,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[B],isReadOnly:r,onChange:t,children:e.jsx(A,{gap:"space-20",children:u.map(h=>e.jsx(w,{value:h.kode,size:"small",children:l?e.jsx(i,{id:Fn[h.kode]}):h.navn},h.kode))})}),Sn.some(h=>h===n)&&e.jsx(pr,{name:`${m}.${n}`,harGrunnerTilReduksjon:a,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:s,erValgtResultatTypeForstoBurdeForstaatt:l,sarligGrunnTyper:k,harMerEnnEnYtelse:o>1,feilutbetalingBelop:p,erTotalBelopUnder4Rettsgebyr:d,andelSomTilbakekreves:g})]})},On=(r,t)=>{const n=parseInt(r,10);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Vn=(r,t)=>{const n=parseFloat(r);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},En=(r,t)=>{if(r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=t.reduce((l,u)=>r[u.kode]?l.concat(u.kode):l,[]),{harGrunnerTilReduksjon:a}=r,s=r.andelSomTilbakekreves===ge?Vn(r.andelSomTilbakekrevesManuell,a):On(r.andelSomTilbakekreves,a);return{harGrunnerTilReduksjon:a,ileggRenter:a?void 0:r.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:r.harGrunnerTilReduksjon?nr(r.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:r.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...s}};se.transformValues=(r,t,n)=>{const a=r[r.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:r.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:a?En(a,t):null}};const Gn=(r,t)=>({andelSomTilbakekreves:t===void 0||Ee.includes(t)?t:ge,andelSomTilbakekrevesManuell:t&&Ee.includes(t)?void 0:r.andelTilbakekreves,harGrunnerTilReduksjon:r.harGrunnerTilReduksjon,skalDetTilleggesRenter:r.ileggRenter,belopSomSkalTilbakekreves:r.tilbakekrevesBelop,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:Te(r.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...r.sarligGrunner?r.sarligGrunner.reduce((n,a)=>({...n,[a.kode??a]:!0}),{}):{}});se.buildInitalValues=r=>{const{aktsomhet:t,aktsomhetInfo:n}=r,a=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,s=n?{[t.kode&&"kode"in t?t.kode:t]:Gn(n,a)}:{};return{handletUaktsomhetGrad:t&&t.kode&&"kode"in t?t.kode:t,...s}};se.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildInitalValues",docblock:null,modifiers:["static"],params:[{name:"vilkarResultatInfo",optional:!1,type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}}],returns:null}],displayName:"AktsomhetFormPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},resetFields:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},antallYtelser:{required:!0,tsType:{name:"number"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},aktsomhetTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Aktsomhet'>[]"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const br=()=>{const{control:r}=C();return e.jsxs(A,{gap:"space-16",children:[e.jsx(me,{name:"foreldetBegrunnelse",control:r,label:e.jsx(i,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),e.jsx(H,{name:"periodenErForeldet",control:r,label:e.jsx(je,{children:e.jsx(i,{id:"ForeldetFormPanel.VurderOmPeriodenErForeldet"})}),children:e.jsx(w,{value:"true",size:"small",children:e.jsx(i,{id:"ForeldetFormPanel.PeriodenErForeldet"})})})]})};br.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const In="_arrowbox_ych2z_1",_n="_tilbakekrevdBelopInput_ych2z_4",ze={arrowbox:In,tilbakekrevdBelopInput:_n},Un=tr(1),Mn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},Dn=(r,t)=>n=>{if((typeof n=="string"?Number(n):n)>t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ie=({name:r,readOnly:t,erBelopetIBehold:n,feilutbetalingBelop:a})=>{const s=z(),{control:l}=C();return e.jsxs(j,{gap:"space-12",children:[e.jsx(H,{name:`${r}.erBelopetIBehold`,control:l,label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[B],isReadOnly:t,children:e.jsxs(A,{gap:"space-20",children:[e.jsx(w,{value:!0,size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.Ja"})}),e.jsx(w,{value:!1,size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.Nei"})})]})}),e.jsxs("div",{className:ze.arrowbox,children:[n===!0&&e.jsx(ee,{alignOffset:25,children:e.jsx(Oe,{name:`${r}.tilbakekrevdBelop`,label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[B,Un,Dn(s,a)],readOnly:t,className:ze.tilbakekrevdBelopInput,format:ae,parse:Mn})}),n===!1&&e.jsx(ee,{alignOffset:90,children:e.jsx(S,{size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ie.transformValues=(r,t)=>({"@type":"godTro",begrunnelse:t,erBelopetIBehold:r.erBelopetIBehold,tilbakekrevesBelop:r.erBelopetIBehold?nr(r.tilbakekrevdBelop):void 0});ie.buildIntialValues=r=>({erBelopetIBehold:r.erBelopetIBehold,tilbakekrevdBelop:r.tilbakekrevesBelop});ie.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Nn="_feilutbetalingTable_1fsd2_1",Kn={feilutbetalingTable:Nn},vr=({ytelser:r})=>{if(r.length===0)return null;let t=0;return e.jsxs(M,{className:Kn.feilutbetalingTable,children:[e.jsx(M.Header,{children:e.jsxs(M.Row,{children:[e.jsx(M.HeaderCell,{scope:"col",children:e.jsx(i,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),e.jsx(M.HeaderCell,{scope:"col",children:e.jsx(i,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),e.jsx(M.Body,{children:r.map(n=>(t+=1,e.jsxs(M.Row,{children:[e.jsx(M.DataCell,{children:e.jsx(S,{size:"small",children:n.aktivitet})}),e.jsx(M.DataCell,{children:e.jsx(S,{size:"small",children:ae(n.belop)})})]},n.aktivitet+n.belop+t)))})]})};vr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Ln="_explanationTextarea_1udkt_1",$n="_leftColumn_1udkt_5",Hn="_rightColumn_1udkt_9",zn="_selectWidth_1udkt_12",ve={explanationTextarea:Ln,leftColumn:$n,rightColumn:Hn,selectWidth:zn},Ce=_e(3),Ye=Ue(1500),yr=({data:r,periode:t,skjulPeriode:n,readOnly:a,oppdaterPeriode:s,vilkarsVurdertePerioder:l,kodeverkSamlingFpTilbake:u,antallPerioderMedAksjonspunkt:k})=>{const o=z(),[p,d]=P.useState(!1),g=Je({defaultValues:t}),m=g.watch("valgtVilkarResultatType"),T=g.watch(`${m}.handletUaktsomhetGrad`),h=g.watch(`${m}.${T}.harGrunnerTilReduksjon`),D=g.watch(`${m}.${T}.andelSomTilbakekreves`),b=g.watch(`${m}.${T}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),E=g.watch(`${m}.${T}.${ur.ANNET}`),q=g.watch(`${m}.erBelopetIBehold`),I=De(m),c=De(T),N=r.redusertBeloper,ke=u.SærligGrunn,Y=u.VilkårResultat,W=vn.map(v=>u.Aktsomhet.find(G=>G.kode===v)),xe=(v,G)=>{const O=v.target.value.split("_"),K=G.find(_=>_.fom===O[0]&&_.tom===O[1]),L=K?.valgtVilkarResultatType,re=K&&L?K[L]:void 0,Z=JSON.parse(JSON.stringify(re));if(L!==V.GOD_TRO){const{handletUaktsomhetGrad:_}=Z;_!==x.FORSETT&&t?.harMerEnnEnYtelse!==K?.harMerEnnEnYtelse&&(Z[_].andelSomTilbakekreves=null,Z[_].andelSomTilbakekrevesManuell=null,Z[_].belopSomSkalTilbakekreves=null)}g.setValue("valgtVilkarResultatType",L,{shouldDirty:!0}),g.setValue("begrunnelse",K?.begrunnelse,{shouldDirty:!0}),g.setValue("vurderingBegrunnelse",K?.vurderingBegrunnelse,{shouldDirty:!0}),L&&g.setValue(L,Z,{shouldDirty:!0}),v.preventDefault()},le=()=>{d(!p),s(g.getValues())},Ae=v=>{k>1&&r.erTotalBelopUnder4Rettsgebyr&&b===!1?d(!p):s(v)},Pe=()=>{I&&g.resetField(I)},we=()=>{c&&g.resetField(`${m}.${c}`)},J=l.filter(v=>!v.erForeldet&&v.valgtVilkarResultatType!=null);return e.jsx(Ze,{formMethods:g,onSubmit:Ae,children:e.jsxs(j,{gap:"space-16",children:[e.jsx(j,{gap:"space-8",children:N&&N.map(v=>e.jsx(S,{size:"small",children:e.jsx(i,{id:v.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:ae(v.belop),b:Fr}})},v.belop))}),e.jsx(vr,{ytelser:r.ytelser}),!a&&!r.erForeldet&&J.length>0&&e.jsx(rr,{name:"perioderForKopi",control:g.control,selectValues:J.map(v=>{const G=`${v.fom}_${v.tom}`,O=`${y(v.fom).format(te)} - ${y(v.tom).format(te)}`;return e.jsx("option",{value:G,children:O},G)}),onChange:v=>xe(v,J),className:ve.selectWidth,label:e.jsx(i,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),e.jsxs(A,{gap:"space-16",wrap:!0,children:[e.jsxs("div",{className:ve.leftColumn,children:[r.erForeldet&&e.jsx(br,{}),!r.erForeldet&&e.jsxs(j,{gap:"space-8",children:[e.jsx(qe,{size:"small",level:"3",children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),e.jsx(me,{name:"begrunnelse",control:g.control,label:o.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[B,Ce,Ye,Be],maxLength:1500,readOnly:a,className:ve.explanationTextarea,description:o.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),e.jsx(H,{name:"valgtVilkarResultatType",control:g.control,label:e.jsx(i,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[B],isReadOnly:a,onChange:Pe,children:Y.map(v=>e.jsx(w,{value:v.kode,size:"small",children:v.navn},v.kode))})]})]}),e.jsx("div",{className:ve.rightColumn,children:m&&e.jsxs(j,{gap:"space-8",children:[e.jsx(qe,{size:"small",level:"3",children:e.jsx(i,{id:m===V.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),e.jsx(me,{name:"vurderingBegrunnelse",control:g.control,label:o.formatMessage({id:m===V.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[B,Ce,Ye,Be],maxLength:1500,readOnly:a}),m===V.GOD_TRO&&e.jsx(ie,{name:m,readOnly:a,erBelopetIBehold:q,feilutbetalingBelop:r.feilutbetaling}),m!==V.GOD_TRO&&e.jsx(se,{name:m,harGrunnerTilReduksjon:h,readOnly:a,handletUaktsomhetGrad:T,resetFields:we,erSerligGrunnAnnetValgt:E,erValgtResultatTypeForstoBurdeForstaatt:m===V.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:W,sarligGrunnTyper:ke,antallYtelser:r.ytelser.length,feilutbetalingBelop:r.feilutbetaling,erTotalBelopUnder4Rettsgebyr:r.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:D},m)]})})]}),e.jsxs(A,{gap:"space-16",children:[e.jsx(F,{size:"small",variant:"primary",disabled:!g.formState.isDirty||a,children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),e.jsx(F,{size:"small",variant:"secondary",onClick:n,type:"button",children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),p&&e.jsx(Xr,{showModal:!0,submit:le})]})})};yr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
    hendelseType: HendelseType;
    hendelseUndertype?: HendelseUnderType;
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
  hendelseType: HendelseType;
  hendelseUndertype?: HendelseUnderType;
}`,signature:{properties:[{key:"hendelseType",value:{name:"HendelseType",required:!0}},{key:"hendelseUndertype",value:{name:"HendelseUnderType",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  HendelseType: HendelseType;
  SærligGrunn: SærligGrunn;
  VilkårResultat: VilkarResultatInfo;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"Aktsomhet",required:!0}},{key:"HendelseType",value:{name:"HendelseType",required:!0}},{key:"SærligGrunn",value:{name:"SærligGrunn",required:!0}},{key:"VilkårResultat",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const Cn="_margin_1wl4t_1",ye={margin:Cn},Yn={danger:e.jsx(Jr,{}),success:e.jsx(Wr,{}),warning:e.jsx(Yr,{})},Wn=(r,t)=>r.fom<t.fom?-1:r.fom>t.fom?1:0,Jn=r=>{const t=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":t},Zn=(r=[])=>[...r].sort(Wn).map(t=>({...t,status:Jn(t)})),Xn=r=>r===de.MOR||r===de.MEDMOR?e.jsx(Qr,{width:20,height:20,color:"var(--ax-danger-500)"}):r===de.FAR?e.jsx(en,{width:20,height:20,color:"var(--ax-accent-700)"}):e.jsx(Cr,{width:20,height:20}),cr=({perioder:r,valgtPeriode:t,setPeriode:n,relasjonsRolleType:a,relasjonsRolleTypeKodeverk:s})=>{const l=z(),u=Zn(r),k=q=>{const I=r.find(c=>c.id===q);I&&n(I)},o=y(u[0].fom),p=y(u[u.length-1].tom),[d,g]=P.useState(o),[m,T]=P.useState(p),h=()=>{d.subtract(1,"month").isBefore(o)||(g(d.subtract(1,"month")),T(m.subtract(1,"month")))},D=()=>{m.add(1,"month").isAfter(p)||(g(d.add(1,"month")),T(m.add(1,"month")))},b=()=>{d.add(3,"month").isAfter(m)||(g(d.add(1,"month")),T(m.subtract(1,"month")))},E=()=>{m.add(1,"month").diff(d.subtract(1,"month"),"months")<36&&(g(d.subtract(1,"month")),T(m.add(1,"month")))};return e.jsxs(j,{gap:"space-16",children:[e.jsx(Se,{startDate:y(d).toDate(),endDate:y(m).add(1,"days").toDate(),children:e.jsx(Se.Row,{label:s.find(q=>q.kode===a)?.navn||"-",icon:Xn(a),children:u.map(q=>e.jsx(Se.Period,{start:y(q.fom).toDate(),end:y(q.tom).toDate(),status:q.status,icon:Yn[q.status],onSelectPeriod:()=>k(q.id),isActive:t?.id===q.id,"aria-controls":"panel-tilbakekreving",id:q.id.toString()},q.id))})}),e.jsxs(A,{justify:"end",children:[e.jsx(F,{className:ye.margin,size:"small",icon:e.jsx(Hr,{"aria-hidden":!0}),onClick:b,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(F,{className:ye.margin,size:"small",icon:e.jsx(zr,{"aria-hidden":!0}),onClick:E,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(F,{className:ye.margin,size:"small",icon:e.jsx(Qe,{"aria-hidden":!0}),onClick:h,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(F,{className:ye.margin,size:"small",icon:e.jsx(er,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};cr.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`},name:"periode"}],return:{name:"void"}}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"RelasjonsRolleType"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};y.extend(mn);const Ie=(r,t)=>y(r.fom).diff(y(t.fom)),We=r=>!r.erForeldet&&(r.begrunnelse===void 0||r.erSplittet),Qn=r=>{const t=r[r.valgtVilkarResultatType],n=t[t.handletUaktsomhetGrad];return t.tilbakekrevdBelop?{...r,[r.valgtVilkarResultatType]:{...Re(t,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...r,[r.valgtVilkarResultatType]:{...t,[t.handletUaktsomhetGrad]:{...Re(n,"belopSomSkalTilbakekreves")}}}:r},et=(r,t=[])=>t.map((n,a)=>{const s=r.find(k=>k.fom===n.fom&&k.tom===n.tom),l=s&&s[s.valgtVilkarResultatType]?s[s.valgtVilkarResultatType].erBelopetIBehold:void 0,u=s?!!s.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&(s?.begrunnelse===void 0||u),isGodkjent:!(n.erForeldet||l===!1),id:a}}),fr=(r,t)=>t.find(n=>!y(r.fom).isBefore(y(n.fom))&&!y(r.tom).isAfter(y(n.tom))),rt=(r,t)=>t.every(n=>!(y(r.fom).isSameOrBefore(y(n.tom))&&y(n.fom).isSameOrBefore(y(r.tom)))),nt=(r,t,n)=>{const s=r.reduce((o,p)=>o+p.feilutbetaling,0)<n*4,u=t.vilkarsVurdertePerioder.map(o=>{const p=fr(o,r);return{...p,harMerEnnEnYtelse:p&&p.ytelser.length>1,...Re(o,"feilutbetalingBelop"),feilutbetaling:o.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:s}});return{perioder:r.filter(o=>rt(o,u)).map(o=>({...o,harMerEnnEnYtelse:o.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:s})).concat(u)}},tt=(r,t)=>{if(!(!r||!t))return t.map(n=>{const a=fr(n,r.perioder),s=a.foreldelseVurderingType?a.foreldelseVurderingType===Ve.FORELDET:a.foreldet;return{redusertBeloper:a.redusertBeloper,ytelser:a.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:a.årsak,begrunnelse:a.begrunnelse,erForeldet:s||!1}})},at=(r,t)=>{const{vilkarResultat:n,begrunnelse:a,vilkarResultatInfo:s}=r,l=n?.kode??n;let u;const k=r.erForeldet??r.foreldet;if(k){const g=t.perioder.find(m=>m.fom===r.fom&&m.tom===r.tom);u={erForeldet:k,periodenErForeldet:!0,foreldetBegrunnelse:g?Te(g.begrunnelse):void 0}}else u={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const o={valgtVilkarResultatType:l,begrunnelse:Te(a),harMerEnnEnYtelse:r.ytelser.length>1,...u},p=l===V.GOD_TRO?ie.buildIntialValues(s):{},d=l!==void 0&&l!==V.GOD_TRO?se.buildInitalValues(s):{};return{...o,vurderingBegrunnelse:s?Te(s.begrunnelse):void 0,[o.valgtVilkarResultatType]:{...p,...d}}},st=(r,t)=>{const{valgtVilkarResultatType:n,begrunnelse:a,vurderingBegrunnelse:s}=r,l=r[n],u=n===V.GOD_TRO?ie.transformValues(l,s):{},k=n!==V.GOD_TRO?se.transformValues(l,t,s):{};return{begrunnelse:a,fom:r.fom,tom:r.tom,vilkarResultat:n,vilkarResultatInfo:{...u,...k}}},it=(r,t)=>r.perioder.map(n=>({...at(n,t),fom:n.fom,tom:n.tom})).sort(Ie),lt=(r,t)=>({kode:Me.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:r.filter(n=>!n.erForeldet).map(n=>st(n,t))}),ot=r=>{if(!r||r.reduce((a,s)=>s.erForeldet?a:a+1,0)<2)return;const n=r.reduce((a,s)=>{const{valgtVilkarResultatType:l}=s,u=s[l],{handletUaktsomhetGrad:k}=u,o=u[k];return o&&o.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?a+1:a},0);if(n>0&&n!==r.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Tr=({perioderForeldelse:r,kodeverkSamlingFpTilbake:t,vilkarvurderingsperioder:n,submitCallback:a,isReadOnly:s,alleMerknaderFraBeslutter:l,vilkarvurdering:u,relasjonsRolleType:k,relasjonsRolleTypeKodeverk:o,beregnBelop:p,behandling:d,formData:g,setFormData:m})=>{const T=n.perioder,h=n.rettsgebyr,D=nt(T,u,h),[b,E]=P.useState(g||it(D,r)),[q,I]=P.useState(!!g),[c,N]=P.useState(b?.find(We)),[ke,Y]=P.useState(!1),[W,xe]=P.useState();P.useEffect(()=>{xe(ot(b))},[b]);const le=tt(D,b),Ae=b.reduce((f,R)=>R.erForeldet?f:f+1,0),Pe=l[Me.VURDER_TILBAKEKREVING],we=()=>{Y(!0),a(lt(b,t.SærligGrunn))},J=et(b,le),v=J.some(f=>f.isAksjonspunktOpen),G=c?J.find(f=>f.fom===c.fom&&f.tom===c.tom):void 0,O=f=>{const R=f?b.find(U=>U.fom===f.fom&&U.tom===f.tom):void 0;N(R)},K=()=>{const f=b.findIndex(R=>R.fom===c?.fom&&R.tom===c?.tom);O(b[f+1])},L=()=>{const f=b.findIndex(R=>R.fom===c?.fom&&R.tom===c?.tom);O(b[f-1])},re=()=>{O(void 0)},Z=f=>{const R=Re(f,"erSplittet"),pe=b.filter(Q=>Q.fom!==R.fom&&Q.tom!==R.tom).concat(R).sort(Ie);E(pe),m(pe),I(!0),re();const oe=pe.find(We);oe&&O(oe)},_=f=>{const R=b.find(U=>U.fom===c?.fom&&U.tom===c?.tom);if(R){const U=f.map(Q=>({...Qn(R),...Q,erSplittet:!0})),oe=b.filter(Q=>Q.fom!==c?.fom&&Q.tom!==c?.tom).concat(U).sort(Ie);re(),I(!0),E(oe),m(oe),O(U[0])}},X=le?le.find(f=>f.fom===c?.fom&&f.tom===c?.tom):void 0;return e.jsx(Or,{merknaderFraBeslutter:Pe,withoutBorder:!0,children:e.jsxs(j,{gap:"space-16",children:[e.jsx(qe,{size:"small",level:"2",children:e.jsx(i,{id:"Behandlingspunkt.Tilbakekreving"})}),v&&e.jsx(Vr,{children:e.jsx(i,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),b&&e.jsxs(e.Fragment,{children:[e.jsx(cr,{perioder:J,valgtPeriode:G,setPeriode:O,relasjonsRolleType:k,relasjonsRolleTypeKodeverk:o}),c&&X&&e.jsx("div",{id:"panel-tilbakekreving","aria-controls":G?.id.toString(),children:e.jsx(Er.New,{borderWidth:"1",padding:"4",children:e.jsxs(j,{gap:"space-16",children:[e.jsx(lr,{setNestePeriode:K,setForrigePeriode:L,periode:X,readOnly:s,oppdaterSplittedePerioder:_,behandlingUuid:d.uuid,beregnBelop:p,lukkPeriode:re}),e.jsx(or,{feilutbetaling:X.feilutbetaling,fom:X.fom,tom:X.tom,arsakHendelseNavn:t.HendelseType.find(f=>f.kode===X.årsak?.hendelseType)?.navn}),e.jsx(yr,{periode:c,data:X,antallPerioderMedAksjonspunkt:Ae,readOnly:s||c?.erForeldet===!0,skjulPeriode:re,oppdaterPeriode:Z,kodeverkSamlingFpTilbake:t,vilkarsVurdertePerioder:b},G?.id)]})})})]}),W&&e.jsx(Xe,{variant:"error",children:e.jsx(i,{id:W})}),e.jsx("div",{children:e.jsx(Gr,{isReadOnly:s||c?.erForeldet===!0,isDirty:q,isSubmittable:!v&&!c&&!W,onClick:we,isSubmitting:ke})})]})})};Tr.__docgenInfo={description:`TilbakekrevingForm

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
}>`},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  HendelseType: HendelseType;
  SærligGrunn: SærligGrunn;
  VilkårResultat: VilkarResultatInfo;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"Aktsomhet",required:!0}},{key:"HendelseType",value:{name:"HendelseType",required:!0}},{key:"SærligGrunn",value:{name:"SærligGrunn",required:!0}},{key:"VilkårResultat",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},vilkarvurderingsperioder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  perioder: DetaljertFeilutbetalingPeriode[];
  rettsgebyr: number;
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: HendelseType;
    hendelseUndertype?: HendelseUnderType;
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
  hendelseType: HendelseType;
  hendelseUndertype?: HendelseUnderType;
}`,signature:{properties:[{key:"hendelseType",value:{name:"HendelseType",required:!0}},{key:"hendelseUndertype",value:{name:"HendelseUnderType",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:"VilkårsvurdertPeriode[]",required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"RelasjonsRolleType"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const ut=_r(sr),hr=r=>e.jsx(Ir,{value:ut,children:e.jsx(Tr,{...r})});hr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}>`},description:""},vilkarvurderingsperioder:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  perioder: DetaljertFeilutbetalingPeriode[];
  rettsgebyr: number;
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  årsak: {
    hendelseType: HendelseType;
    hendelseUndertype?: HendelseUnderType;
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
  hendelseType: HendelseType;
  hendelseUndertype?: HendelseUnderType;
}`,signature:{properties:[{key:"hendelseType",value:{name:"HendelseType",required:!0}},{key:"hendelseUndertype",value:{name:"HendelseUnderType",required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<{ perioder: { belop: number }[] }>"}}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  HendelseType: HendelseType;
  SærligGrunn: SærligGrunn;
  VilkårResultat: VilkarResultatInfo;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"Aktsomhet",required:!0}},{key:"HendelseType",value:{name:"HendelseType",required:!0}},{key:"SærligGrunn",value:{name:"SærligGrunn",required:!0}},{key:"VilkårResultat",value:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"RelasjonsRolleType"},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:dt}=__STORYBOOK_MODULE_ACTIONS__,mt=Ur(sr),gt={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:Ve.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:Ve.FORELDET}]},qr={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:ar.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},Rt={component:hr,decorators:[mt],args:{submitCallback:dt("button-click"),behandling:{uuid:"1",versjon:1,status:$r.BEHANDLING_UTREDES},kodeverkSamlingFpTilbake:Mr,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:gt,vilkarvurdering:{vilkarsVurdertePerioder:[]},beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleType:de.MOR,relasjonsRolleTypeKodeverk:[{kode:de.MOR,kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},ce={args:{vilkarvurderingsperioder:qr}},fe={args:{vilkarvurderingsperioder:{perioder:[qr.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:ar.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...ce.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: {
      perioder: [defaultVilkarvurderingsperioder.perioder[0], {
        fom: '2019-04-01',
        tom: '2019-10-01',
        foreldet: false,
        feilutbetaling: 100,
        årsak: {
          hendelseType: HendelseType.MEDLEMSKAP
        },
        redusertBeloper: [],
        ytelser: [{
          aktivitet: 'Arbeidstaker',
          belop: 2050
        }]
      }],
      rettsgebyr: 1000
    }
  }
}`,...fe.parameters?.docs?.source}}};const Bt=["Default","MedToPerioder"];export{ce as Default,fe as MedToPerioder,Bt as __namedExportsOrder,Rt as default};
