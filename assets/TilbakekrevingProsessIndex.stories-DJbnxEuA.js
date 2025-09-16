import{c as H,aa as Je,j as e,aw as Xe,M as be,I as je,V as q,L as $,B as S,d as c,n as te,aT as qr,A as Ze,y as F,m as xr,r as w,H as P,aU as Qe,aV as er,am as Rr,ab as Br,aW as Pr,ad as ae,i as C,aY as ee,aS as z,U as A,D as qe,at as rr,aZ as Oe,a_ as wr,ax as Ar,aA as me,E as Sr,aB as Te,an as nr,a$ as De,b0 as Fr,ay as Or,av as Vr,z as Gr,aQ as Ir,aX as xe,P as Er,h as _r}from"./iframe-Ij6u3qkZ.js";import{g as Ur}from"./withIntl-DgdbAPIE.js";import{a as Mr}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{t as R,O as Dr,J as Nr,R as Kr,i as tr,l as Lr,a as _e,o as Ue,N as Re,b as de,$ as Ve,y as ar}from"./style-idQLgP5J.js";import{M as i}from"./message-BGJyuEPI.js";import{S as Ne,T as Se,a as $r,b as zr,c as Hr,d as Cr,e as Yr,f as Wr}from"./Timeline-CDqIHMF4.js";import{S as Jr}from"./Scissors-C2ShDMwe.js";import{T as M}from"./Table-24vFMoGj.js";import{T as Xr,m as sr}from"./nb_NO-B0Y-9en7.js";import{a as Zr,S as Qr}from"./SilhouetteFill-B3xX3non.js";import"./preload-helper-D9Z9MdNV.js";const en="_button_8q57x_1",rn="_cancelButton_8q57x_5",Ke={button:en,cancelButton:rn},nn=(r,t)=>n=>n&&(Nr(n)(c(r.tom.toString()).subtract(1,"day"))||Kr(n)(r.fom))?t.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,tn=(r,t)=>{const n=c(r.forstePeriodeTomDato).add(1,"days"),a={fom:t.fom,tom:r.forstePeriodeTomDato},s={fom:n.format(xr),tom:t.tom};return{forstePeriode:a,andrePeriode:s}},ir=({periodeData:r,showModal:t,cancelEvent:n,finnesBelopMed0Verdi:a,splitPeriod:s})=>{const l=H(),u=Je();return e.jsx(Xe,{formMethods:u,onSubmit:g=>s(tn(g,r)),children:e.jsxs(be,{open:t,"aria-label":l.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[e.jsx(be.Header,{children:e.jsx(je,{size:"small",level:"2",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(be.Body,{children:e.jsxs(q,{gap:"space-16",children:[e.jsxs("div",{children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(S,{size:"small",children:`${c(r.fom.toString()).format(te)} - ${c(r.tom.toString()).format(te)}`})]}),e.jsx(qr,{name:"forstePeriodeTomDato",control:u.control,label:e.jsx(i,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[R,Dr,nn(r,l)],fromDate:c(r.fom).toDate(),toDate:c(r.tom).toDate()}),a&&e.jsx(Ze,{variant:"error",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(be.Footer,{children:[e.jsx(F,{size:"small",variant:"primary",className:Ke.button,disabled:!u.formState.isDirty,children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(F,{size:"small",variant:"secondary",onClick:n,className:Ke.cancelButton,type:"button",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};ir.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const an="_margin_1dkor_37",Fe={margin:an},sn=!1,lr=({setNestePeriode:r,setForrigePeriode:t,readOnly:n,lukkPeriode:a,periode:s,beregnBelop:l,behandlingUuid:u,oppdaterSplittedePerioder:g})=>{const o=H(),[k,d]=w.useState(!1),[p,m]=w.useState(!1),T=b=>{d(!0),b.preventDefault()},h=()=>{d(!1)},D=b=>{m(!1);const G={belop:s.feilutbetaling,fom:b.forstePeriode.fom,tom:b.forstePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "},j={belop:s.feilutbetaling,fom:b.andrePeriode.fom,tom:b.andrePeriode.tom,begrunnelse:s.begrunnelse?s.begrunnelse:" "};l({behandlingUuid:u,perioder:[G,j]}).then(y=>{const{perioder:N}=y;if(N.some(Y=>Y.belop===0))m(!0);else{const Y={fom:G.fom,tom:G.tom,feilutbetaling:N[0].belop},W={fom:j.fom,tom:j.tom,feilutbetaling:N[1].belop};h(),g([Y,W])}})};return e.jsxs(P,{children:[e.jsxs($,{size:"small",children:[e.jsx(i,{id:"PeriodeController.Detaljer"}),sn]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(Ne,{}),e.jsx(F,{className:Fe.margin,size:"xsmall",icon:e.jsx(Jr,{"aria-hidden":!0}),onClick:T,variant:"tertiary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(i,{id:"PeriodeController.DelOppPerioden"})})]}),k&&e.jsx(ir,{cancelEvent:h,showModal:k,periodeData:s,splitPeriod:D,finnesBelopMed0Verdi:p}),e.jsx(Ne,{}),e.jsx(F,{className:Fe.margin,size:"xsmall",icon:e.jsx(Qe,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(i,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(F,{className:Fe.margin,size:"xsmall",icon:e.jsx(er,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(i,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(F,{size:"xsmall",icon:e.jsx(Rr,{"aria-hidden":!0}),onClick:a,variant:"tertiary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};lr.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var he={exports:{}},ln=he.exports,Le;function on(){return Le||(Le=1,function(r,t){(function(n,a){r.exports=a()})(ln,function(){return function(n,a){a.prototype.isSameOrBefore=function(s,l){return this.isSame(s,l)||this.isBefore(s,l)}}})}(he)),he.exports}var un=on();const dn=Br(un);var V=(r=>(r.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",r.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",r.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",r.GOD_TRO="GOD_TRO",r))(V||{}),Me=(r=>(r.VURDER_TILBAKEKREVING="5002",r))(Me||{});const mn="_infoSummary_14z0n_1",pn="_positivNumber_14z0n_8",gn="_redNumber_14z0n_12",kn="_resultName_14z0n_17",ue={infoSummary:mn,positivNumber:pn,redNumber:gn,resultName:kn},or=({fom:r,tom:t,feilutbetaling:n,arsakHendelseNavn:a})=>{const s=Pr(r,t);return e.jsxs(q,{gap:"space-8",className:ue.infoSummary,children:[e.jsxs(P,{justify:"space-between",children:[e.jsx($,{size:"small",children:`${c(r).format(te)} - ${c(t).format(te)}`}),e.jsx(S,{size:"small",children:s.formattedString})]}),e.jsxs(P,{gap:"space-16",children:[e.jsxs(S,{size:"small",className:ue.resultName,children:[e.jsx(i,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:n?ue.redNumber:ue.positivNumber,children:ae(n)})]}),a&&e.jsx(S,{size:"small",className:ue.resultName,children:a})]})]})};or.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var B=(r=>(r.FORSETT="FORSETT",r.GROVT_UAKTSOM="GROVT_UAKTSOM",r.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",r))(B||{});const bn=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var ur=(r=>(r.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",r.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",r.STOERRELSE_BELOEP="STOERRELSE_BELOEP",r.TID_FRA_UTBETALING="TID_FRA_UTBETALING",r.ANNET="ANNET",r))(ur||{});const dr=({name:r,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const a=C(),s=`${r}.skalDetTilleggesRenter`;return w.useEffect(()=>{a.getValues(s)===void 0&&a.setValue(s,!1)},[]),e.jsxs(ee,{alignOffset:n?320:360,children:[n&&e.jsxs(q,{gap:"space-16",children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(S,{size:"small",children:"100 %"}),e.jsxs(z,{name:`${r}.skalDetTilleggesRenter`,control:a.control,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[R],isReadOnly:t,children:[e.jsx(A,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(A,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]}),!n&&e.jsxs(q,{gap:"space-8",children:[e.jsxs("div",{children:[e.jsx(qe,{children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(S,{size:"small",children:"100 %"})]}),e.jsx(S,{size:"small",children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})};dr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const pe="Egendefinert",Ge=["30","50","70",pe],vn="_suffix_cawxu_1",cn="_suffixGrovText_cawxu_4",yn="_labelPadding_cawxu_8",fn="_inputFelt_cawxu_12",ne={suffix:vn,suffixGrovText:cn,labelPadding:yn,inputFelt:fn},$e=tr(0),Tn=Lr(99.99),hn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},jn=(r,t)=>n=>{if((typeof n=="string"?Number(n):n)>=t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},mr=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:s,feilutbetalingBelop:l,andelSomTilbakekreves:u})=>{const g=H(),o=C(),k=`${r}.skalDetTilleggesRenter`;return w.useEffect(()=>{o.getValues(k)===void 0&&o.setValue(k,!1)},[]),e.jsxs(q,{gap:"space-12",children:[e.jsx(z,{name:`${r}.harGrunnerTilReduksjon`,control:o.control,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[R],isReadOnly:n,children:e.jsxs(P,{gap:"space-20",children:[e.jsx(A,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(A,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})}),t&&e.jsx(ee,{alignOffset:24,children:e.jsxs(P,{gap:"space-16",children:[!s&&u!==pe&&e.jsxs(e.Fragment,{children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(P,{gap:"space-8",children:[e.jsx(rr,{name:`${r}.andelSomTilbakekreves`,control:o.control,label:"",validate:[R],selectValues:Ge.map(d=>e.jsx("option",{value:d,children:d},d))}),e.jsx("div",{className:ne.suffix,children:"%"})]})]}),!s&&u===pe&&e.jsxs(e.Fragment,{children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(P,{gap:"space-16",children:[e.jsx(Oe,{name:`${r}.andelSomTilbakekrevesManuell`,control:o.control,className:ne.inputFelt,readOnly:n,validate:[R,$e,Tn],normalizeOnBlur:d=>Number.isNaN(d)?d:parseFloat(d.toString()).toFixed(2),format:d=>d.toString().replace(".",","),parse:d=>d.toString().replace(",",".")}),e.jsx("div",{className:a===B.GROVT_UAKTSOM?ne.suffixGrovText:ne.suffix,children:"%"})]})]}),s&&e.jsx(Oe,{name:`${r}.belopSomSkalTilbakekreves`,control:o.control,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[R,$e,jn(g,l)],readOnly:n,format:ae,parse:hn}),a===B.GROVT_UAKTSOM&&e.jsxs("div",{children:[e.jsx(qe,{children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),e.jsx(S,{size:"small",className:ne.labelPadding,children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),t===!1&&e.jsxs(ee,{alignOffset:90,children:[e.jsx(qe,{children:e.jsx(i,{id:s?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),e.jsxs(q,{gap:"space-16",children:[e.jsx(S,{size:"small",className:ne.labelPadding,children:s?ae(l):"100%"}),a===B.GROVT_UAKTSOM&&e.jsx(z,{name:k,control:o.control,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[R],isReadOnly:n,children:e.jsxs(P,{gap:"space-20",children:[e.jsx(A,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(A,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})})]})]})]})};mr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const qn=_e(3),xn=Ue(1500),Ie=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:s,sarligGrunnTyper:l,harMerEnnEnYtelse:u,feilutbetalingBelop:g,andelSomTilbakekreves:o})=>{const k=H(),{watch:d,control:p}=C(),m=!l.some(h=>!!d(`${r}.${h.kode}`)),T=wr(r,m?k.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return e.jsxs(q,{gap:"space-16",children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),e.jsx("div",{children:l.map(h=>e.jsx(Ar,{name:`${r}.${h.kode}`,control:p,label:h.navn,readOnly:n},h.kode))}),s&&e.jsx(me,{name:`${r}.annetBegrunnelse`,control:p,label:"",validate:[R,qn,xn,Re],maxLength:1500,readOnly:n}),T&&e.jsx(Sr,{children:T}),e.jsx(mr,{name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:u,feilutbetalingBelop:g,andelSomTilbakekreves:o})]})};Ie.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Rn="_explanationTextarea_1kabz_1",Bn="_panelWidth_1kabz_5",pr={explanationTextarea:Rn,panelWidth:Bn},Pn=_e(3),wn=Ue(1500),ze=({name:r,readOnly:t})=>{const n=H(),{control:a}=C();return e.jsxs(q,{gap:"space-16",children:[e.jsx($,{size:"small",children:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),e.jsx(me,{name:`${r}.sarligGrunnerBegrunnelse`,control:a,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[R,Pn,wn,Re],maxLength:1500,readOnly:t,className:pr.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]})},gr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:u,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:o,erValgtResultatTypeForstoBurdeForstaatt:k,name:d})=>{const{control:p,watch:m}=C(),T=m(`${d}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),h=k?180:200;return e.jsx(ee,{alignOffset:n===B.GROVT_UAKTSOM?h:20,children:e.jsxs("div",{className:pr.panelWidth,children:[n===B.SIMPEL_UAKTSOM&&g&&e.jsxs(q,{gap:"space-12",children:[e.jsx(z,{name:`${d}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,control:p,label:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[R],isReadOnly:t,children:e.jsxs(P,{gap:"space-16",children:[e.jsx(A,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(A,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})}),T&&e.jsxs(e.Fragment,{children:[e.jsx(ze,{name:d,readOnly:t}),e.jsx(Ie,{name:d,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:u,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:o})]}),T===!1&&e.jsx(ee,{alignOffset:55,children:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})]}),(n!==B.SIMPEL_UAKTSOM||!g)&&e.jsxs(e.Fragment,{children:[e.jsx(ze,{name:d,readOnly:t}),e.jsx(Ie,{name:d,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:l,feilutbetalingBelop:u,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:o})]})]})})};gr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const kr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:l,harMerEnnEnYtelse:u,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:k,name:d})=>e.jsxs(e.Fragment,{children:[n===B.FORSETT&&e.jsx(dr,{name:d,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:s}),n!==B.FORSETT&&e.jsx(gr,{name:d,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:l,harMerEnnEnYtelse:u,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:k,erValgtResultatTypeForstoBurdeForstaatt:s})]});kr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const An=[B.GROVT_UAKTSOM,B.SIMPEL_UAKTSOM,B.FORSETT],Sn={[B.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[B.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[B.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},se=({readOnly:r,resetFields:t,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:s=!1,erValgtResultatTypeForstoBurdeForstaatt:l=!1,aktsomhetTyper:u,sarligGrunnTyper:g,antallYtelser:o,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:d,andelSomTilbakekreves:p,name:m})=>{const{control:T}=C();return e.jsxs(q,{gap:"space-12",children:[e.jsx(z,{name:`${m}.handletUaktsomhetGrad`,control:T,label:e.jsx(i,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[R],isReadOnly:r,onChange:t,children:e.jsx(P,{gap:"space-20",children:u.map(h=>e.jsx(A,{value:h.kode,size:"small",children:l?e.jsx(i,{id:Sn[h.kode]}):h.navn},h.kode))})}),An.some(h=>h===n)&&e.jsx(kr,{name:`${m}.${n}`,harGrunnerTilReduksjon:a,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:s,erValgtResultatTypeForstoBurdeForstaatt:l,sarligGrunnTyper:g,harMerEnnEnYtelse:o>1,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:d,andelSomTilbakekreves:p})]})},Fn=(r,t)=>{const n=parseInt(r,10);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},On=(r,t)=>{const n=parseFloat(r);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Vn=(r,t)=>{if(r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=t.reduce((l,u)=>r[u.kode]?l.concat(u.kode):l,[]),{harGrunnerTilReduksjon:a}=r,s=r.andelSomTilbakekreves===pe?On(r.andelSomTilbakekrevesManuell,a):Fn(r.andelSomTilbakekreves,a);return{harGrunnerTilReduksjon:a,ileggRenter:a?void 0:r.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:r.harGrunnerTilReduksjon?nr(r.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:r.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...s}};se.transformValues=(r,t,n)=>{const a=r[r.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:r.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:a?Vn(a,t):null}};const Gn=(r,t)=>({andelSomTilbakekreves:t===void 0||Ge.includes(t)?t:pe,andelSomTilbakekrevesManuell:t&&Ge.includes(t)?void 0:r.andelTilbakekreves,harGrunnerTilReduksjon:r.harGrunnerTilReduksjon,skalDetTilleggesRenter:r.ileggRenter,belopSomSkalTilbakekreves:r.tilbakekrevesBelop,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:Te(r.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...r.sarligGrunner?r.sarligGrunner.reduce((n,a)=>({...n,[a.kode??a]:!0}),{}):{}});se.buildInitalValues=r=>{const{aktsomhet:t,aktsomhetInfo:n}=r,a=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,s=n?{[t.kode&&"kode"in t?t.kode:t]:Gn(n,a)}:{};return{handletUaktsomhetGrad:t&&t.kode&&"kode"in t?t.kode:t,...s}};se.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const br=()=>{const{control:r}=C();return e.jsxs(P,{gap:"space-16",children:[e.jsx(me,{name:"foreldetBegrunnelse",control:r,label:e.jsx(i,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),e.jsx(z,{name:"periodenErForeldet",control:r,label:e.jsx(qe,{children:e.jsx(i,{id:"ForeldetFormPanel.VurderOmPeriodenErForeldet"})}),children:e.jsx(A,{value:"true",size:"small",children:e.jsx(i,{id:"ForeldetFormPanel.PeriodenErForeldet"})})})]})};br.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const In="_arrowbox_ych2z_1",En="_tilbakekrevdBelopInput_ych2z_4",He={arrowbox:In,tilbakekrevdBelopInput:En},_n=tr(1),Un=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},Mn=(r,t)=>n=>{if((typeof n=="string"?Number(n):n)>t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ie=({name:r,readOnly:t,erBelopetIBehold:n,feilutbetalingBelop:a})=>{const s=H(),{control:l}=C();return e.jsxs(q,{gap:"space-12",children:[e.jsx(z,{name:`${r}.erBelopetIBehold`,control:l,label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[R],isReadOnly:t,children:e.jsxs(P,{gap:"space-20",children:[e.jsx(A,{value:!0,size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.Ja"})}),e.jsx(A,{value:!1,size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.Nei"})})]})}),e.jsxs("div",{className:He.arrowbox,children:[n===!0&&e.jsx(ee,{alignOffset:25,children:e.jsx(Oe,{name:`${r}.tilbakekrevdBelop`,label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[R,_n,Mn(s,a)],readOnly:t,className:He.tilbakekrevdBelopInput,format:ae,parse:Un})}),n===!1&&e.jsx(ee,{alignOffset:90,children:e.jsx(S,{size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ie.transformValues=(r,t)=>({"@type":"godTro",begrunnelse:t,erBelopetIBehold:r.erBelopetIBehold,tilbakekrevesBelop:r.erBelopetIBehold?nr(r.tilbakekrevdBelop):void 0});ie.buildIntialValues=r=>({erBelopetIBehold:r.erBelopetIBehold,tilbakekrevdBelop:r.tilbakekrevesBelop});ie.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const Dn="_feilutbetalingTable_1fsd2_1",Nn={feilutbetalingTable:Dn},vr=({ytelser:r})=>{if(r.length===0)return null;let t=0;return e.jsxs(M,{className:Nn.feilutbetalingTable,children:[e.jsx(M.Header,{children:e.jsxs(M.Row,{children:[e.jsx(M.HeaderCell,{scope:"col",children:e.jsx(i,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),e.jsx(M.HeaderCell,{scope:"col",children:e.jsx(i,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),e.jsx(M.Body,{children:r.map(n=>(t+=1,e.jsxs(M.Row,{children:[e.jsx(M.DataCell,{children:e.jsx(S,{size:"small",children:n.aktivitet})}),e.jsx(M.DataCell,{children:e.jsx(S,{size:"small",children:ae(n.belop)})})]},n.aktivitet+n.belop+t)))})]})};vr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Kn="_explanationTextarea_1udkt_1",Ln="_leftColumn_1udkt_5",$n="_rightColumn_1udkt_9",zn="_selectWidth_1udkt_12",ve={explanationTextarea:Kn,leftColumn:Ln,rightColumn:$n,selectWidth:zn},Ce=_e(3),Ye=Ue(1500),cr=({data:r,periode:t,skjulPeriode:n,readOnly:a,oppdaterPeriode:s,vilkarsVurdertePerioder:l,kodeverkSamlingFpTilbake:u,antallPerioderMedAksjonspunkt:g})=>{const o=H(),[k,d]=w.useState(!1),p=Je({defaultValues:t}),m=p.watch("valgtVilkarResultatType"),T=p.watch(`${m}.handletUaktsomhetGrad`),h=p.watch(`${m}.${T}.harGrunnerTilReduksjon`),D=p.watch(`${m}.${T}.andelSomTilbakekreves`),b=p.watch(`${m}.${T}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),G=p.watch(`${m}.${T}.${ur.ANNET}`),j=p.watch(`${m}.erBelopetIBehold`),E=De(m),y=De(T),N=r.redusertBeloper,ge=u.SærligGrunn,Y=u.VilkårResultat,W=bn.map(v=>u.Aktsomhet.find(I=>I.kode===v)),Be=(v,I)=>{const O=v.target.value.split("_"),K=I.find(_=>_.fom===O[0]&&_.tom===O[1]),L=K?.valgtVilkarResultatType,re=K&&L?K[L]:void 0,X=JSON.parse(JSON.stringify(re));if(L!==V.GOD_TRO){const{handletUaktsomhetGrad:_}=X;_!==B.FORSETT&&t?.harMerEnnEnYtelse!==K?.harMerEnnEnYtelse&&(X[_].andelSomTilbakekreves=null,X[_].andelSomTilbakekrevesManuell=null,X[_].belopSomSkalTilbakekreves=null)}p.setValue("valgtVilkarResultatType",L,{shouldDirty:!0}),p.setValue("begrunnelse",K?.begrunnelse,{shouldDirty:!0}),p.setValue("vurderingBegrunnelse",K?.vurderingBegrunnelse,{shouldDirty:!0}),L&&p.setValue(L,X,{shouldDirty:!0}),v.preventDefault()},le=()=>{d(!k),s(p.getValues())},Pe=v=>{g>1&&r.erTotalBelopUnder4Rettsgebyr&&b===!1?d(!k):s(v)},we=()=>{E&&p.resetField(E)},Ae=()=>{y&&p.resetField(`${m}.${y}`)},J=l.filter(v=>!v.erForeldet&&v.valgtVilkarResultatType!=null);return e.jsx(Xe,{formMethods:p,onSubmit:Pe,children:e.jsxs(q,{gap:"space-16",children:[e.jsx(q,{gap:"space-8",children:N&&N.map(v=>e.jsx(S,{size:"small",children:e.jsx(i,{id:v.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:ae(v.belop),b:Fr}})},v.belop))}),e.jsx(vr,{ytelser:r.ytelser}),!a&&!r.erForeldet&&J.length>0&&e.jsx(rr,{name:"perioderForKopi",control:p.control,selectValues:J.map(v=>{const I=`${v.fom}_${v.tom}`,O=`${c(v.fom).format(te)} - ${c(v.tom).format(te)}`;return e.jsx("option",{value:I,children:O},I)}),onChange:v=>Be(v,J),className:ve.selectWidth,label:e.jsx(i,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),e.jsxs(P,{gap:"space-16",wrap:!0,children:[e.jsxs("div",{className:ve.leftColumn,children:[r.erForeldet&&e.jsx(br,{}),!r.erForeldet&&e.jsxs(q,{gap:"space-8",children:[e.jsx(je,{size:"small",level:"3",children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),e.jsx(me,{name:"begrunnelse",control:p.control,label:o.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[R,Ce,Ye,Re],maxLength:1500,readOnly:a,className:ve.explanationTextarea,description:o.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),e.jsx(z,{name:"valgtVilkarResultatType",control:p.control,label:e.jsx(i,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[R],isReadOnly:a,onChange:we,children:Y.map(v=>e.jsx(A,{value:v.kode,size:"small",children:v.navn},v.kode))})]})]}),e.jsx("div",{className:ve.rightColumn,children:m&&e.jsxs(q,{gap:"space-8",children:[e.jsx(je,{size:"small",level:"3",children:e.jsx(i,{id:m===V.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),e.jsx(me,{name:"vurderingBegrunnelse",control:p.control,label:o.formatMessage({id:m===V.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[R,Ce,Ye,Re],maxLength:1500,readOnly:a}),m===V.GOD_TRO&&e.jsx(ie,{name:m,readOnly:a,erBelopetIBehold:j,feilutbetalingBelop:r.feilutbetaling}),m!==V.GOD_TRO&&e.jsx(se,{name:m,harGrunnerTilReduksjon:h,readOnly:a,handletUaktsomhetGrad:T,resetFields:Ae,erSerligGrunnAnnetValgt:G,erValgtResultatTypeForstoBurdeForstaatt:m===V.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:W,sarligGrunnTyper:ge,antallYtelser:r.ytelser.length,feilutbetalingBelop:r.feilutbetaling,erTotalBelopUnder4Rettsgebyr:r.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:D},m)]})})]}),e.jsxs(P,{gap:"space-16",children:[e.jsx(F,{size:"small",variant:"primary",disabled:!p.formState.isDirty||a,children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),e.jsx(F,{size:"small",variant:"secondary",onClick:n,type:"button",children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),k&&e.jsx(Xr,{showModal:!0,submit:le})]})})};cr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const Hn="_margin_1wl4t_1",ce={margin:Hn},Cn={danger:e.jsx(Wr,{}),success:e.jsx(Yr,{}),warning:e.jsx(Cr,{})},Yn=(r,t)=>r.fom<t.fom?-1:r.fom>t.fom?1:0,Wn=r=>{const t=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":t},Jn=(r=[])=>[...r].sort(Yn).map(t=>({...t,status:Wn(t)})),Xn=r=>r===de.MOR||r===de.MEDMOR?e.jsx(Zr,{width:20,height:20,color:"var(--ax-danger-500)"}):r===de.FAR?e.jsx(Qr,{width:20,height:20,color:"var(--ax-accent-700)"}):e.jsx(Hr,{width:20,height:20}),yr=({perioder:r,valgtPeriode:t,setPeriode:n,relasjonsRolleType:a,relasjonsRolleTypeKodeverk:s})=>{const l=H(),u=Jn(r),g=j=>{const E=r.find(y=>y.id===j);E&&n(E)},o=c(u[0].fom),k=c(u[u.length-1].tom),[d,p]=w.useState(o),[m,T]=w.useState(k),h=()=>{d.subtract(1,"month").isBefore(o)||(p(d.subtract(1,"month")),T(m.subtract(1,"month")))},D=()=>{m.add(1,"month").isAfter(k)||(p(d.add(1,"month")),T(m.add(1,"month")))},b=()=>{d.add(3,"month").isAfter(m)||(p(d.add(1,"month")),T(m.subtract(1,"month")))},G=()=>{m.add(1,"month").diff(d.subtract(1,"month"),"months")<36&&(p(d.subtract(1,"month")),T(m.add(1,"month")))};return e.jsxs(q,{gap:"space-16",children:[e.jsx(Se,{startDate:c(d).toDate(),endDate:c(m).add(1,"days").toDate(),children:e.jsx(Se.Row,{label:s.find(j=>j.kode===a)?.navn||"-",icon:Xn(a),children:u.map(j=>e.jsx(Se.Period,{start:c(j.fom).toDate(),end:c(j.tom).toDate(),status:j.status,icon:Cn[j.status],onSelectPeriod:()=>g(j.id),isActive:t?.id===j.id,"aria-controls":"panel-tilbakekreving",id:j.id.toString()},j.id))})}),e.jsxs(P,{justify:"end",children:[e.jsx(F,{className:ce.margin,size:"small",icon:e.jsx($r,{"aria-hidden":!0}),onClick:b,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(F,{className:ce.margin,size:"small",icon:e.jsx(zr,{"aria-hidden":!0}),onClick:G,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(F,{className:ce.margin,size:"small",icon:e.jsx(Qe,{"aria-hidden":!0}),onClick:h,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(F,{className:ce.margin,size:"small",icon:e.jsx(er,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};yr.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};c.extend(dn);const Ee=(r,t)=>c(r.fom).diff(c(t.fom)),We=r=>!r.erForeldet&&(r.begrunnelse===void 0||r.erSplittet),Zn=r=>{const t=r[r.valgtVilkarResultatType],n=t[t.handletUaktsomhetGrad];return t.tilbakekrevdBelop?{...r,[r.valgtVilkarResultatType]:{...xe(t,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...r,[r.valgtVilkarResultatType]:{...t,[t.handletUaktsomhetGrad]:{...xe(n,"belopSomSkalTilbakekreves")}}}:r},Qn=(r,t=[])=>t.map((n,a)=>{const s=r.find(g=>g.fom===n.fom&&g.tom===n.tom),l=s&&s[s.valgtVilkarResultatType]?s[s.valgtVilkarResultatType].erBelopetIBehold:void 0,u=s?!!s.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&(s?.begrunnelse===void 0||u),isGodkjent:!(n.erForeldet||l===!1),id:a}}),fr=(r,t)=>t.find(n=>!c(r.fom).isBefore(c(n.fom))&&!c(r.tom).isAfter(c(n.tom))),et=(r,t)=>t.every(n=>!(c(r.fom).isSameOrBefore(c(n.tom))&&c(n.fom).isSameOrBefore(c(r.tom)))),rt=(r,t,n)=>{const s=r.reduce((o,k)=>o+k.feilutbetaling,0)<n*4,u=t.vilkarsVurdertePerioder.map(o=>{const k=fr(o,r);return{...k,harMerEnnEnYtelse:k&&k.ytelser.length>1,...xe(o,"feilutbetalingBelop"),feilutbetaling:o.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:s}});return{perioder:r.filter(o=>et(o,u)).map(o=>({...o,harMerEnnEnYtelse:o.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:s})).concat(u)}},nt=(r,t)=>{if(!(!r||!t))return t.map(n=>{const a=fr(n,r.perioder),s=a.foreldelseVurderingType?a.foreldelseVurderingType===Ve.FORELDET:a.foreldet;return{redusertBeloper:a.redusertBeloper,ytelser:a.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:a.årsak,begrunnelse:a.begrunnelse,erForeldet:s||!1}})},tt=(r,t)=>{const{vilkarResultat:n,begrunnelse:a,vilkarResultatInfo:s}=r,l=n?.kode??n;let u;const g=r.erForeldet??r.foreldet;if(g){const p=t.perioder.find(m=>m.fom===r.fom&&m.tom===r.tom);u={erForeldet:g,periodenErForeldet:!0,foreldetBegrunnelse:p?Te(p.begrunnelse):void 0}}else u={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const o={valgtVilkarResultatType:l,begrunnelse:Te(a),harMerEnnEnYtelse:r.ytelser.length>1,...u},k=l===V.GOD_TRO?ie.buildIntialValues(s):{},d=l!==void 0&&l!==V.GOD_TRO?se.buildInitalValues(s):{};return{...o,vurderingBegrunnelse:s?Te(s.begrunnelse):void 0,[o.valgtVilkarResultatType]:{...k,...d}}},at=(r,t)=>{const{valgtVilkarResultatType:n,begrunnelse:a,vurderingBegrunnelse:s}=r,l=r[n],u=n===V.GOD_TRO?ie.transformValues(l,s):{},g=n!==V.GOD_TRO?se.transformValues(l,t,s):{};return{begrunnelse:a,fom:r.fom,tom:r.tom,vilkarResultat:n,vilkarResultatInfo:{...u,...g}}},st=(r,t)=>r.perioder.map(n=>({...tt(n,t),fom:n.fom,tom:n.tom})).sort(Ee),it=(r,t)=>({kode:Me.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:r.filter(n=>!n.erForeldet).map(n=>at(n,t))}),lt=r=>{if(!r||r.reduce((a,s)=>s.erForeldet?a:a+1,0)<2)return;const n=r.reduce((a,s)=>{const{valgtVilkarResultatType:l}=s,u=s[l],{handletUaktsomhetGrad:g}=u,o=u[g];return o&&o.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?a+1:a},0);if(n>0&&n!==r.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Tr=({perioderForeldelse:r,kodeverkSamlingFpTilbake:t,vilkarvurderingsperioder:n,submitCallback:a,isReadOnly:s,alleMerknaderFraBeslutter:l,vilkarvurdering:u,relasjonsRolleType:g,relasjonsRolleTypeKodeverk:o,beregnBelop:k,behandlingUuid:d,formData:p,setFormData:m})=>{const T=n.perioder,h=n.rettsgebyr,D=rt(T,u,h),[b,G]=w.useState(p||st(D,r)),[j,E]=w.useState(!!p),[y,N]=w.useState(b?.find(We)),[ge,Y]=w.useState(!1),[W,Be]=w.useState();w.useEffect(()=>{Be(lt(b))},[b]);const le=nt(D,b),Pe=b.reduce((f,x)=>x.erForeldet?f:f+1,0),we=l[Me.VURDER_TILBAKEKREVING],Ae=()=>{Y(!0),a(it(b,t.SærligGrunn))},J=Qn(b,le),v=J.some(f=>f.isAksjonspunktOpen),I=y?J.find(f=>f.fom===y.fom&&f.tom===y.tom):void 0,O=f=>{const x=f?b.find(U=>U.fom===f.fom&&U.tom===f.tom):void 0;N(x)},K=()=>{const f=b.findIndex(x=>x.fom===y?.fom&&x.tom===y?.tom);O(b[f+1])},L=()=>{const f=b.findIndex(x=>x.fom===y?.fom&&x.tom===y?.tom);O(b[f-1])},re=()=>{O(void 0)},X=f=>{const x=xe(f,"erSplittet"),ke=b.filter(Q=>Q.fom!==x.fom&&Q.tom!==x.tom).concat(x).sort(Ee);G(ke),m(ke),E(!0),re();const oe=ke.find(We);oe&&O(oe)},_=f=>{const x=b.find(U=>U.fom===y?.fom&&U.tom===y?.tom);if(x){const U=f.map(Q=>({...Zn(x),...Q,erSplittet:!0})),oe=b.filter(Q=>Q.fom!==y?.fom&&Q.tom!==y?.tom).concat(U).sort(Ee);re(),E(!0),G(oe),m(oe),O(U[0])}},Z=le?le.find(f=>f.fom===y?.fom&&f.tom===y?.tom):void 0;return e.jsx(Or,{merknaderFraBeslutter:we,withoutBorder:!0,children:e.jsxs(q,{gap:"space-16",children:[e.jsx(je,{size:"small",level:"2",children:e.jsx(i,{id:"Behandlingspunkt.Tilbakekreving"})}),v&&e.jsx(Vr,{children:e.jsx(i,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),b&&e.jsxs(e.Fragment,{children:[e.jsx(yr,{perioder:J,valgtPeriode:I,setPeriode:O,relasjonsRolleType:g,relasjonsRolleTypeKodeverk:o}),y&&Z&&e.jsx("div",{id:"panel-tilbakekreving","aria-controls":I?.id.toString(),children:e.jsx(Gr.New,{borderWidth:"1",padding:"4",children:e.jsxs(q,{gap:"space-16",children:[e.jsx(lr,{setNestePeriode:K,setForrigePeriode:L,periode:Z,readOnly:s,oppdaterSplittedePerioder:_,behandlingUuid:d,beregnBelop:k,lukkPeriode:re}),e.jsx(or,{feilutbetaling:Z.feilutbetaling,fom:Z.fom,tom:Z.tom,arsakHendelseNavn:t.HendelseType.find(f=>f.kode===Z.årsak?.hendelseType)?.navn}),e.jsx(cr,{periode:y,data:Z,antallPerioderMedAksjonspunkt:Pe,readOnly:s||y?.erForeldet===!0,skjulPeriode:re,oppdaterPeriode:X,kodeverkSamlingFpTilbake:t,vilkarsVurdertePerioder:b},I?.id)]})})})]}),W&&e.jsx(Ze,{variant:"error",children:e.jsx(i,{id:W})}),e.jsx("div",{children:e.jsx(Ir,{isReadOnly:s||y?.erForeldet===!0,isDirty:j,isSubmittable:!v&&!y&&!W,onClick:Ae,isSubmitting:ge})})]})})};Tr.__docgenInfo={description:`TilbakekrevingForm

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
}[]`,required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"signature",type:"object",raw:"{ perioder: { belop: number }[] }",signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ belop: number }",signature:{properties:[{key:"belop",value:{name:"number",required:!0}}]}}],raw:"{ belop: number }[]",required:!0}}]}}],raw:"Promise<{ perioder: { belop: number }[] }>"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},formData:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const ot=_r(sr),hr=r=>e.jsx(Er,{value:ot,children:e.jsx(Tr,{...r})});hr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},perioderForeldelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:ut}=__STORYBOOK_MODULE_ACTIONS__,dt=Ur(sr),mt={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:Ve.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:Ve.FORELDET}]},jr={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:ar.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},qt={component:hr,decorators:[dt],args:{submitCallback:ut("button-click"),behandlingUuid:"1",kodeverkSamlingFpTilbake:Mr,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:mt,vilkarvurdering:{vilkarsVurdertePerioder:[]},beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleType:de.MOR,relasjonsRolleTypeKodeverk:[{kode:de.MOR,kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},ye={args:{vilkarvurderingsperioder:jr}},fe={args:{vilkarvurderingsperioder:{perioder:[jr.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:ar.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...ye.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
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
}`,...fe.parameters?.docs?.source}}};const xt=["Default","MedToPerioder"];export{ye as Default,fe as MedToPerioder,xt as __namedExportsOrder,qt as default};
