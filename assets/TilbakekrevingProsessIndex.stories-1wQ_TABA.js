import{i as H,ae as We,j as e,ay as Je,M as ke,U as he,V as q,L as $,B as P,d as c,n as te,aV as qr,N as Xe,v as S,P as Rr,r as B,H as A,aW as Ze,aX as Qe,w as xr,af as Ar,aY as Br,ai as ae,u as C,a_ as ee,aU as z,a1 as w,f as je,av as er,a$ as Se,b0 as wr,az as Pr,aC as de,E as Fr,aD as fe,ah as rr,b1 as De,b2 as Sr,x as Or,aA as Er,ax as Vr,O as Mr,aN as Gr,aO as qe,l as Ir,p as _r}from"./iframe-Bd0DBNA6.js";import{g as Dr}from"./withIntl-CncZ_c5b.js";import{a as Ur}from"./alleTilbakekrevingKodeverk-M8dTUOKV.js";import{F as Oe,Y as nr}from"./index.es-y3XBOrzW.js";import{t as x,O as Nr,J as Kr,R as Lr,i as tr,l as $r,a as Ge,o as Ie,N as Re}from"./style-KbBJdCFa.js";import{M as s}from"./message-LFI6YUoy.js";import{S as Ue,T as Pe,a as zr,b as Hr,c as Cr,d as Yr,e as Wr}from"./Timeline-DiruiUqR.js";import{S as Jr}from"./Scissors-DbHYJRmf.js";import{T as D}from"./Table-DOYt4UYG.js";import{T as Xr,m as ar}from"./nb_NO-aHQzpnFr.js";import{a as Zr,S as Qr}from"./SilhouetteFill-BPegvWVV.js";import"./preload-helper-PPVm8Dsz.js";const en="_button_8q57x_1",rn="_cancelButton_8q57x_5",Ne={button:en,cancelButton:rn},nn=(r,t)=>n=>n&&(Kr(n)(c(r.tom.toString()).subtract(1,"day"))||Lr(n)(r.fom))?t.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,tn=(r,t)=>{const n=c(r.forstePeriodeTomDato).add(1,"days"),a={fom:t.fom,tom:r.forstePeriodeTomDato},i={fom:n.format(Rr),tom:t.tom};return{forstePeriode:a,andrePeriode:i}},ir=({periodeData:r,showModal:t,cancelEvent:n,finnesBelopMed0Verdi:a,splitPeriod:i})=>{const l=H(),u=We();return e.jsx(Je,{formMethods:u,onSubmit:g=>i(tn(g,r)),children:e.jsxs(ke,{open:t,"aria-label":l.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[e.jsx(ke.Header,{children:e.jsx(he,{size:"small",level:"2",children:e.jsx(s,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(ke.Body,{children:e.jsxs(q,{gap:"space-16",children:[e.jsxs("div",{children:[e.jsx($,{size:"small",children:e.jsx(s,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(P,{size:"small",children:`${c(r.fom.toString()).format(te)} - ${c(r.tom.toString()).format(te)}`})]}),e.jsx(qr,{name:"forstePeriodeTomDato",control:u.control,label:e.jsx(s,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[x,Nr,nn(r,l)],fromDate:c(r.fom).toDate(),toDate:c(r.tom).toDate()}),a&&e.jsx(Xe,{variant:"error",children:e.jsx(s,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(ke.Footer,{children:[e.jsx(S,{size:"small",variant:"primary",className:Ne.button,disabled:!u.formState.isDirty,children:e.jsx(s,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(S,{size:"small",variant:"secondary",onClick:n,className:Ne.cancelButton,type:"button",children:e.jsx(s,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};ir.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const an="_margin_1dkor_37",Fe={margin:an},sn=!1,sr=({setNestePeriode:r,setForrigePeriode:t,readOnly:n,lukkPeriode:a,periode:i,beregnBelop:l,behandlingUuid:u,oppdaterSplittedePerioder:g})=>{const o=H(),[k,d]=B.useState(!1),[p,m]=B.useState(!1),T=b=>{d(!0),b.preventDefault()},h=()=>{d(!1)},U=b=>{m(!1);const V={belop:i.feilutbetaling,fom:b.forstePeriode.fom,tom:b.forstePeriode.tom,begrunnelse:i.begrunnelse?i.begrunnelse:" "},j={belop:i.feilutbetaling,fom:b.andrePeriode.fom,tom:b.andrePeriode.tom,begrunnelse:i.begrunnelse?i.begrunnelse:" "};l({behandlingUuid:u,perioder:[V,j]}).then(y=>{const{perioder:N}=y;if(N.some(Y=>Y.belop===0))m(!0);else{const Y={fom:V.fom,tom:V.tom,feilutbetaling:N[0].belop},W={fom:j.fom,tom:j.tom,feilutbetaling:N[1].belop};h(),g([Y,W])}})};return e.jsxs(A,{children:[e.jsxs($,{size:"small",children:[e.jsx(s,{id:"PeriodeController.Detaljer"}),sn]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(Ue,{}),e.jsx(S,{className:Fe.margin,size:"xsmall",icon:e.jsx(Jr,{"aria-hidden":!0}),onClick:T,variant:"tertiary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(s,{id:"PeriodeController.DelOppPerioden"})})]}),k&&e.jsx(ir,{cancelEvent:h,showModal:k,periodeData:i,splitPeriod:U,finnesBelopMed0Verdi:p}),e.jsx(Ue,{}),e.jsx(S,{className:Fe.margin,size:"xsmall",icon:e.jsx(Ze,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(s,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(S,{className:Fe.margin,size:"xsmall",icon:e.jsx(Qe,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(s,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(S,{size:"xsmall",icon:e.jsx(xr,{"aria-hidden":!0}),onClick:a,variant:"tertiary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};sr.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var Te={exports:{}},ln=Te.exports,Ke;function on(){return Ke||(Ke=1,function(r,t){(function(n,a){r.exports=a()})(ln,function(){return function(n,a){a.prototype.isSameOrBefore=function(i,l){return this.isSame(i,l)||this.isBefore(i,l)}}})}(Te)),Te.exports}var un=on();const dn=Ar(un);var E=(r=>(r.FORSTO_BURDE_FORSTAATT="FORSTO_BURDE_FORSTAATT",r.FEIL_OPPLYSNINGER="FEIL_OPPLYSNINGER",r.MANGELFULL_OPPLYSNING="MANGELFULL_OPPLYSNING",r.GOD_TRO="GOD_TRO",r))(E||{}),_e=(r=>(r.VURDER_TILBAKEKREVING="5002",r))(_e||{});const mn="_infoSummary_14z0n_1",pn="_positivNumber_14z0n_8",gn="_redNumber_14z0n_12",kn="_resultName_14z0n_17",ue={infoSummary:mn,positivNumber:pn,redNumber:gn,resultName:kn},lr=({fom:r,tom:t,feilutbetaling:n,arsakHendelseNavn:a})=>{const i=Br(r,t);return e.jsxs(q,{gap:"space-8",className:ue.infoSummary,children:[e.jsxs(A,{justify:"space-between",children:[e.jsx($,{size:"small",children:`${c(r).format(te)} - ${c(t).format(te)}`}),e.jsx(P,{size:"small",children:i.formattedString})]}),e.jsxs(A,{gap:"space-16",children:[e.jsxs(P,{size:"small",className:ue.resultName,children:[e.jsx(s,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:n?ue.redNumber:ue.positivNumber,children:ae(n)})]}),a&&e.jsx(P,{size:"small",className:ue.resultName,children:a})]})]})};lr.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};var F=(r=>(r.FORSETT="FORSETT",r.GROVT_UAKTSOM="GROVT_UAKTSOM",r.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",r))(F||{});const or=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"];var ur=(r=>(r.GRAD_AV_UAKTSOMHET="GRAD_AV_UAKTSOMHET",r.HELT_ELLER_DELVIS_NAVS_FEIL="HELT_ELLER_DELVIS_NAVS_FEIL",r.STOERRELSE_BELOEP="STOERRELSE_BELOEP",r.TID_FRA_UTBETALING="TID_FRA_UTBETALING",r.ANNET="ANNET",r))(ur||{});const dr=({name:r,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const a=C(),i=`${r}.skalDetTilleggesRenter`;return B.useEffect(()=>{a.getValues(i)===void 0&&a.setValue(i,!1)},[]),e.jsxs(ee,{alignOffset:n?320:360,children:[n&&e.jsxs(q,{gap:"space-16",children:[e.jsx($,{size:"small",children:e.jsx(s,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(P,{size:"small",children:"100 %"}),e.jsxs(z,{name:`${r}.skalDetTilleggesRenter`,control:a.control,label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[x],isReadOnly:t,children:[e.jsx(w,{value:!0,size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(w,{value:!1,size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]}),!n&&e.jsxs(q,{gap:"space-8",children:[e.jsxs("div",{children:[e.jsx(je,{children:e.jsx(s,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(P,{size:"small",children:"100 %"})]}),e.jsx(P,{size:"small",children:e.jsx(s,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})};dr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const me="Egendefinert",Ee=["30","50","70",me],bn="_suffix_cawxu_1",vn="_suffixGrovText_cawxu_4",cn="_labelPadding_cawxu_8",yn="_inputFelt_cawxu_12",ne={suffix:bn,suffixGrovText:vn,labelPadding:cn,inputFelt:yn},Le=tr(0),fn=$r(99.99),Tn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},hn=(r,t)=>n=>{if((typeof n=="string"?Number(n):n)>=t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},mr=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:i,feilutbetalingBelop:l,andelSomTilbakekreves:u})=>{const g=H(),o=C(),k=`${r}.skalDetTilleggesRenter`;return B.useEffect(()=>{o.getValues(k)===void 0&&o.setValue(k,!1)},[]),e.jsxs(q,{gap:"space-12",children:[e.jsx(z,{name:`${r}.harGrunnerTilReduksjon`,control:o.control,label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[x],isReadOnly:n,children:e.jsxs(A,{gap:"space-20",children:[e.jsx(w,{value:!0,size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(w,{value:!1,size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})}),t&&e.jsx(ee,{alignOffset:24,children:e.jsxs(A,{gap:"space-16",children:[!i&&u!==me&&e.jsxs(e.Fragment,{children:[e.jsx($,{size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(A,{gap:"space-8",children:[e.jsx(er,{name:`${r}.andelSomTilbakekreves`,control:o.control,label:"",validate:[x],selectValues:Ee.map(d=>e.jsx("option",{value:d,children:d},d))}),e.jsx("div",{className:ne.suffix,children:"%"})]})]}),!i&&u===me&&e.jsxs(e.Fragment,{children:[e.jsx($,{size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(A,{gap:"space-16",children:[e.jsx(Se,{name:`${r}.andelSomTilbakekrevesManuell`,control:o.control,className:ne.inputFelt,readOnly:n,validate:[x,Le,fn],normalizeOnBlur:d=>Number.isNaN(d)?d:parseFloat(d.toString()).toFixed(2),format:d=>d.toString().replace(".",","),parse:d=>d.toString().replace(",",".")}),e.jsx("div",{className:a===F.GROVT_UAKTSOM?ne.suffixGrovText:ne.suffix,children:"%"})]})]}),i&&e.jsx(Se,{name:`${r}.belopSomSkalTilbakekreves`,control:o.control,label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[x,Le,hn(g,l)],readOnly:n,format:ae,parse:Tn}),a===F.GROVT_UAKTSOM&&e.jsxs("div",{children:[e.jsx(je,{children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),e.jsx(P,{size:"small",className:ne.labelPadding,children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),t===!1&&e.jsxs(ee,{alignOffset:90,children:[e.jsx(je,{children:e.jsx(s,{id:i?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),e.jsxs(q,{gap:"space-16",children:[e.jsx(P,{size:"small",className:ne.labelPadding,children:i?ae(l):"100%"}),a===F.GROVT_UAKTSOM&&e.jsx(z,{name:k,control:o.control,label:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[x],isReadOnly:n,children:e.jsxs(A,{gap:"space-20",children:[e.jsx(w,{value:!0,size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(w,{value:!1,size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})})]})]})]})};mr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const jn=Ge(3),qn=Ie(1500),Ve=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:i,sarligGrunnTyper:l,harMerEnnEnYtelse:u,feilutbetalingBelop:g,andelSomTilbakekreves:o})=>{const k=H(),{watch:d,control:p}=C(),m=!l.some(h=>!!d(`${r}.${h.kode}`)),T=wr(r,m?k.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return e.jsxs(q,{gap:"space-16",children:[e.jsx($,{size:"small",children:e.jsx(s,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),e.jsx("div",{children:l.map(h=>e.jsx(Pr,{name:`${r}.${h.kode}`,control:p,label:h.navn,readOnly:n},h.kode))}),i&&e.jsx(de,{name:`${r}.annetBegrunnelse`,control:p,label:"",validate:[x,jn,qn,Re],maxLength:1500,readOnly:n}),T&&e.jsx(Fr,{children:T}),e.jsx(mr,{name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:u,feilutbetalingBelop:g,andelSomTilbakekreves:o})]})};Ve.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Rn="_explanationTextarea_1kabz_1",xn="_panelWidth_1kabz_5",pr={explanationTextarea:Rn,panelWidth:xn},An=Ge(3),Bn=Ie(1500),$e=({name:r,readOnly:t})=>{const n=H(),{control:a}=C();return e.jsxs(q,{gap:"space-16",children:[e.jsx($,{size:"small",children:e.jsx(s,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),e.jsx(de,{name:`${r}.sarligGrunnerBegrunnelse`,control:a,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[x,An,Bn,Re],maxLength:1500,readOnly:t,className:pr.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]})},gr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:i,harMerEnnEnYtelse:l,feilutbetalingBelop:u,erTotalBelopUnder4Rettsgebyr:g,andelSomTilbakekreves:o,erValgtResultatTypeForstoBurdeForstaatt:k,name:d})=>{const{control:p,watch:m}=C(),T=m(`${d}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),h=k?180:200;return e.jsx(ee,{alignOffset:n===F.GROVT_UAKTSOM?h:20,children:e.jsxs("div",{className:pr.panelWidth,children:[n===F.SIMPEL_UAKTSOM&&g&&e.jsxs(q,{gap:"space-12",children:[e.jsx(z,{name:`${d}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,control:p,label:e.jsx(s,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[x],isReadOnly:t,children:e.jsxs(A,{gap:"space-16",children:[e.jsx(w,{value:!0,size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(w,{value:!1,size:"small",children:e.jsx(s,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})}),T&&e.jsxs(e.Fragment,{children:[e.jsx($e,{name:d,readOnly:t}),e.jsx(Ve,{name:d,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:i,harMerEnnEnYtelse:l,feilutbetalingBelop:u,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:o})]}),T===!1&&e.jsx(ee,{alignOffset:55,children:e.jsx(s,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})]}),(n!==F.SIMPEL_UAKTSOM||!g)&&e.jsxs(e.Fragment,{children:[e.jsx($e,{name:d,readOnly:t}),e.jsx(Ve,{name:d,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:i,harMerEnnEnYtelse:l,feilutbetalingBelop:u,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:o})]})]})})};gr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"string"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const kr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:i,sarligGrunnTyper:l,harMerEnnEnYtelse:u,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:k,name:d})=>e.jsxs(e.Fragment,{children:[n===F.FORSETT&&e.jsx(dr,{name:d,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:i}),n!==F.FORSETT&&e.jsx(gr,{name:d,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:l,harMerEnnEnYtelse:u,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:k,erValgtResultatTypeForstoBurdeForstaatt:i})]});kr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"Aktsomhet"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const wn={[F.FORSETT]:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",[F.GROVT_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",[F.SIMPEL_UAKTSOM]:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},ie=({readOnly:r,resetFields:t,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:i=!1,erValgtResultatTypeForstoBurdeForstaatt:l=!1,aktsomhetTyper:u,sarligGrunnTyper:g,antallYtelser:o,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:d,andelSomTilbakekreves:p,name:m})=>{const{control:T}=C();return e.jsxs(q,{gap:"space-12",children:[e.jsx(z,{name:`${m}.handletUaktsomhetGrad`,control:T,label:e.jsx(s,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[x],isReadOnly:r,onChange:t,children:e.jsx(A,{gap:"space-20",children:u.map(h=>e.jsx(w,{value:h.kode,size:"small",children:l?e.jsx(s,{id:wn[h.kode]}):h.navn},h.kode))})}),or.some(h=>h===n)&&e.jsx(kr,{name:`${m}.${n}`,harGrunnerTilReduksjon:a,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:i,erValgtResultatTypeForstoBurdeForstaatt:l,sarligGrunnTyper:g,harMerEnnEnYtelse:o>1,feilutbetalingBelop:k,erTotalBelopUnder4Rettsgebyr:d,andelSomTilbakekreves:p})]})},Pn=(r,t)=>{const n=parseInt(r,10);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Fn=(r,t)=>{const n=parseFloat(r);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},Sn=(r,t)=>{if(r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=t.reduce((l,u)=>r[u.kode]?l.concat(u.kode):l,[]),{harGrunnerTilReduksjon:a}=r,i=r.andelSomTilbakekreves===me?Fn(r.andelSomTilbakekrevesManuell,a):Pn(r.andelSomTilbakekreves,a);return{harGrunnerTilReduksjon:a,ileggRenter:a?void 0:r.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:r.harGrunnerTilReduksjon?rr(r.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:r.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...i}};ie.transformValues=(r,t,n)=>{const a=r[r.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:r.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:a?Sn(a,t):null}};const On=(r,t)=>({andelSomTilbakekreves:t===void 0||Ee.includes(t)?t:me,andelSomTilbakekrevesManuell:t&&Ee.includes(t)?void 0:r.andelTilbakekreves,harGrunnerTilReduksjon:r.harGrunnerTilReduksjon,skalDetTilleggesRenter:r.ileggRenter,belopSomSkalTilbakekreves:r.tilbakekrevesBelop,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:fe(r.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...r.sarligGrunner?r.sarligGrunner.reduce((n,a)=>({...n,[a.kode??a]:!0}),{}):{}});ie.buildInitalValues=r=>{const{aktsomhet:t,aktsomhetInfo:n}=r,a=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,i=n?{[t.kode&&"kode"in t?t.kode:t]:On(n,a)}:{};return{handletUaktsomhetGrad:t&&t.kode&&"kode"in t?t.kode:t,...i}};ie.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const br=()=>{const{control:r}=C();return e.jsxs(A,{gap:"space-16",children:[e.jsx(de,{name:"foreldetBegrunnelse",control:r,label:e.jsx(s,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),e.jsx(z,{name:"periodenErForeldet",control:r,label:e.jsx(je,{children:e.jsx(s,{id:"ForeldetFormPanel.VurderOmPeriodenErForeldet"})}),children:e.jsx(w,{value:"true",size:"small",children:e.jsx(s,{id:"ForeldetFormPanel.PeriodenErForeldet"})})})]})};br.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const En="_arrowbox_ych2z_1",Vn="_tilbakekrevdBelopInput_ych2z_4",ze={arrowbox:En,tilbakekrevdBelopInput:Vn},Mn=tr(1),Gn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},In=(r,t)=>n=>{if((typeof n=="string"?Number(n):n)>t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},se=({name:r,readOnly:t,erBelopetIBehold:n,feilutbetalingBelop:a})=>{const i=H(),{control:l}=C();return e.jsxs(q,{gap:"space-12",children:[e.jsx(z,{name:`${r}.erBelopetIBehold`,control:l,label:e.jsx(s,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[x],isReadOnly:t,children:e.jsxs(A,{gap:"space-20",children:[e.jsx(w,{value:!0,size:"small",children:e.jsx(s,{id:"BelopetMottattIGodTroFormPanel.Ja"})}),e.jsx(w,{value:!1,size:"small",children:e.jsx(s,{id:"BelopetMottattIGodTroFormPanel.Nei"})})]})}),e.jsxs("div",{className:ze.arrowbox,children:[n===!0&&e.jsx(ee,{alignOffset:25,children:e.jsx(Se,{name:`${r}.tilbakekrevdBelop`,label:e.jsx(s,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[x,Mn,In(i,a)],readOnly:t,className:ze.tilbakekrevdBelopInput,format:ae,parse:Gn})}),n===!1&&e.jsx(ee,{alignOffset:90,children:e.jsx(P,{size:"small",children:e.jsx(s,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};se.transformValues=(r,t)=>({"@type":"godTro",begrunnelse:t,erBelopetIBehold:r.erBelopetIBehold,tilbakekrevesBelop:r.erBelopetIBehold?rr(r.tilbakekrevdBelop):void 0});se.buildIntialValues=r=>({erBelopetIBehold:r.erBelopetIBehold,tilbakekrevdBelop:r.tilbakekrevesBelop});se.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ erBelopetIBehold: boolean; tilbakekrevdBelop: number }",signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevdBelop",value:{name:"number",required:!0}}]}}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const _n="_feilutbetalingTable_1fsd2_1",Dn={feilutbetalingTable:_n},vr=({ytelser:r})=>{if(r.length===0)return null;let t=0;return e.jsxs(D,{className:Dn.feilutbetalingTable,children:[e.jsx(D.Header,{children:e.jsxs(D.Row,{children:[e.jsx(D.HeaderCell,{scope:"col",children:e.jsx(s,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),e.jsx(D.HeaderCell,{scope:"col",children:e.jsx(s,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),e.jsx(D.Body,{children:r.map(n=>(t+=1,e.jsxs(D.Row,{children:[e.jsx(D.DataCell,{children:e.jsx(P,{size:"small",children:n.aktivitet})}),e.jsx(D.DataCell,{children:e.jsx(P,{size:"small",children:ae(n.belop)})})]},n.aktivitet+n.belop+t)))})]})};vr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Un="_explanationTextarea_1udkt_1",Nn="_leftColumn_1udkt_5",Kn="_rightColumn_1udkt_9",Ln="_selectWidth_1udkt_12",be={explanationTextarea:Un,leftColumn:Nn,rightColumn:Kn,selectWidth:Ln},He=Ge(3),Ce=Ie(1500),cr=({data:r,periode:t,skjulPeriode:n,readOnly:a,oppdaterPeriode:i,vilkarsVurdertePerioder:l,kodeverkSamlingFpTilbake:u,antallPerioderMedAksjonspunkt:g})=>{const o=H(),[k,d]=B.useState(!1),p=We({defaultValues:t}),m=p.watch("valgtVilkarResultatType"),T=p.watch(`${m}.handletUaktsomhetGrad`),h=p.watch(`${m}.${T}.harGrunnerTilReduksjon`),U=p.watch(`${m}.${T}.andelSomTilbakekreves`),b=p.watch(`${m}.${T}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),V=p.watch(`${m}.${T}.${ur.ANNET}`),j=p.watch(`${m}.erBelopetIBehold`),G=De(m),y=De(T),N=r.redusertBeloper,pe=u.SærligGrunn,Y=u.VilkårResultat,W=or.map(v=>u.Aktsomhet.find(M=>M.kode===v)),xe=(v,M)=>{const O=v.target.value.split("_"),K=M.find(I=>I.fom===O[0]&&I.tom===O[1]),L=K?.valgtVilkarResultatType,re=K&&L?K[L]:void 0,X=JSON.parse(JSON.stringify(re));if(L!==E.GOD_TRO){const{handletUaktsomhetGrad:I}=X;I!==F.FORSETT&&t?.harMerEnnEnYtelse!==K?.harMerEnnEnYtelse&&(X[I].andelSomTilbakekreves=null,X[I].andelSomTilbakekrevesManuell=null,X[I].belopSomSkalTilbakekreves=null)}p.setValue("valgtVilkarResultatType",L,{shouldDirty:!0}),p.setValue("begrunnelse",K?.begrunnelse,{shouldDirty:!0}),p.setValue("vurderingBegrunnelse",K?.vurderingBegrunnelse,{shouldDirty:!0}),L&&p.setValue(L,X,{shouldDirty:!0}),v.preventDefault()},le=()=>{d(!k),i(p.getValues())},Ae=v=>{g>1&&r.erTotalBelopUnder4Rettsgebyr&&b===!1?d(!k):i(v)},Be=()=>{G&&p.resetField(G)},we=()=>{y&&p.resetField(`${m}.${y}`)},J=l.filter(v=>!v.erForeldet&&v.valgtVilkarResultatType!=null);return e.jsx(Je,{formMethods:p,onSubmit:Ae,children:e.jsxs(q,{gap:"space-16",children:[e.jsx(q,{gap:"space-8",children:N&&N.map(v=>e.jsx(P,{size:"small",children:e.jsx(s,{id:v.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:ae(v.belop),b:Sr}})},v.belop))}),e.jsx(vr,{ytelser:r.ytelser}),!a&&!r.erForeldet&&J.length>0&&e.jsx(er,{name:"perioderForKopi",control:p.control,selectValues:J.map(v=>{const M=`${v.fom}_${v.tom}`,O=`${c(v.fom).format(te)} - ${c(v.tom).format(te)}`;return e.jsx("option",{value:M,children:O},M)}),onChange:v=>xe(v,J),className:be.selectWidth,label:e.jsx(s,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),e.jsxs(A,{gap:"space-16",wrap:!0,children:[e.jsxs("div",{className:be.leftColumn,children:[r.erForeldet&&e.jsx(br,{}),!r.erForeldet&&e.jsxs(q,{gap:"space-8",children:[e.jsx(he,{size:"small",level:"3",children:e.jsx(s,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),e.jsx(de,{name:"begrunnelse",control:p.control,label:o.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[x,He,Ce,Re],maxLength:1500,readOnly:a,className:be.explanationTextarea,description:o.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),e.jsx(z,{name:"valgtVilkarResultatType",control:p.control,label:e.jsx(s,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[x],isReadOnly:a,onChange:Be,children:Y.map(v=>e.jsx(w,{value:v.kode,size:"small",children:v.navn},v.kode))})]})]}),e.jsx("div",{className:be.rightColumn,children:m&&e.jsxs(q,{gap:"space-8",children:[e.jsx(he,{size:"small",level:"3",children:e.jsx(s,{id:m===E.GOD_TRO?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),e.jsx(de,{name:"vurderingBegrunnelse",control:p.control,label:o.formatMessage({id:m===E.GOD_TRO?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[x,He,Ce,Re],maxLength:1500,readOnly:a}),m===E.GOD_TRO&&e.jsx(se,{name:m,readOnly:a,erBelopetIBehold:j,feilutbetalingBelop:r.feilutbetaling}),m!==E.GOD_TRO&&e.jsx(ie,{name:m,harGrunnerTilReduksjon:h,readOnly:a,handletUaktsomhetGrad:T,resetFields:we,erSerligGrunnAnnetValgt:V,erValgtResultatTypeForstoBurdeForstaatt:m===E.FORSTO_BURDE_FORSTAATT,aktsomhetTyper:W,sarligGrunnTyper:pe,antallYtelser:r.ytelser.length,feilutbetalingBelop:r.feilutbetaling,erTotalBelopUnder4Rettsgebyr:r.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:U},m)]})})]}),e.jsxs(A,{gap:"space-16",children:[e.jsx(S,{size:"small",variant:"primary",disabled:!p.formState.isDirty||a,children:e.jsx(s,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),e.jsx(S,{size:"small",variant:"secondary",onClick:n,type:"button",children:e.jsx(s,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),k&&e.jsx(Xr,{showModal:!0,submit:le})]})})};cr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const $n="_margin_1wl4t_1",ve={margin:$n},zn={danger:e.jsx(Wr,{}),success:e.jsx(Yr,{}),warning:e.jsx(Cr,{})},Hn=(r,t)=>r.fom<t.fom?-1:r.fom>t.fom?1:0,Cn=r=>{const t=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":t},Yn=(r=[])=>[...r].sort(Hn).map(t=>({...t,status:Cn(t)})),Wn=r=>r==="MORA"||r==="MMOR"?e.jsx(Zr,{width:20,height:20,color:"var(--ax-danger-500)"}):r==="FARA"?e.jsx(Qr,{width:20,height:20,color:"var(--ax-accent-700)"}):e.jsx(Hr,{width:20,height:20}),yr=({perioder:r,valgtPeriode:t,setPeriode:n,relasjonsRolleType:a,relasjonsRolleTypeKodeverk:i})=>{const l=H(),u=Yn(r),g=j=>{const G=r.find(y=>y.id===j);G&&n(G)},o=c(u[0].fom),k=c(u[u.length-1].tom),[d,p]=B.useState(o),[m,T]=B.useState(k),h=()=>{d.subtract(1,"month").isBefore(o)||(p(d.subtract(1,"month")),T(m.subtract(1,"month")))},U=()=>{m.add(1,"month").isAfter(k)||(p(d.add(1,"month")),T(m.add(1,"month")))},b=()=>{d.add(3,"month").isAfter(m)||(p(d.add(1,"month")),T(m.subtract(1,"month")))},V=()=>{m.add(1,"month").diff(d.subtract(1,"month"),"months")<36&&(p(d.subtract(1,"month")),T(m.add(1,"month")))};return e.jsxs(q,{gap:"space-16",children:[e.jsx(Pe,{startDate:c(d).toDate(),endDate:c(m).add(1,"days").toDate(),children:e.jsx(Pe.Row,{label:i.find(j=>j.kode===a)?.navn||"-",icon:Wn(a),children:u.map(j=>e.jsx(Pe.Period,{start:c(j.fom).toDate(),end:c(j.tom).toDate(),status:j.status,icon:zn[j.status],onSelectPeriod:()=>g(j.id),isActive:t?.id===j.id,"aria-controls":"panel-tilbakekreving",id:j.id.toString()},j.id))})}),e.jsxs(A,{justify:"end",children:[e.jsx(S,{className:ve.margin,size:"small",icon:e.jsx(Or,{"aria-hidden":!0}),onClick:b,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(S,{className:ve.margin,size:"small",icon:e.jsx(zr,{"aria-hidden":!0}),onClick:V,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(S,{className:ve.margin,size:"small",icon:e.jsx(Ze,{"aria-hidden":!0}),onClick:h,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(S,{className:ve.margin,size:"small",icon:e.jsx(Qe,{"aria-hidden":!0}),onClick:U,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};yr.__docgenInfo={description:`TilbakekrevingTimeLine

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
}>`},name:"periode"}],return:{name:"void"}}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"union",raw:"'MORA' | 'FARA' | 'MMOR' | 'DELTAKER'",elements:[{name:"literal",value:"'MORA'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'DELTAKER'"}]},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"'MORA' | 'FARA' | 'MMOR' | 'DELTAKER'",elements:[{name:"literal",value:"'MORA'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'DELTAKER'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};c.extend(dn);const Me=(r,t)=>c(r.fom).diff(c(t.fom)),Ye=r=>!r.erForeldet&&(r.begrunnelse===void 0||r.erSplittet),Jn=r=>{const t=r[r.valgtVilkarResultatType],n=t[t.handletUaktsomhetGrad];return t.tilbakekrevdBelop?{...r,[r.valgtVilkarResultatType]:{...qe(t,"tilbakekrevdBelop")}}:n&&n.belopSomSkalTilbakekreves?{...r,[r.valgtVilkarResultatType]:{...t,[t.handletUaktsomhetGrad]:{...qe(n,"belopSomSkalTilbakekreves")}}}:r},Xn=(r,t=[])=>t.map((n,a)=>{const i=r.find(g=>g.fom===n.fom&&g.tom===n.tom),l=i&&i[i.valgtVilkarResultatType]?i[i.valgtVilkarResultatType].erBelopetIBehold:void 0,u=i?!!i.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&(i?.begrunnelse===void 0||u),isGodkjent:!(n.erForeldet||l===!1),id:a}}),fr=(r,t)=>t.find(n=>!c(r.fom).isBefore(c(n.fom))&&!c(r.tom).isAfter(c(n.tom))),Zn=(r,t)=>t.every(n=>!(c(r.fom).isSameOrBefore(c(n.tom))&&c(n.fom).isSameOrBefore(c(r.tom)))),Qn=(r,t,n)=>{const i=r.reduce((o,k)=>o+k.feilutbetaling,0)<n*4,u=t.vilkarsVurdertePerioder.map(o=>{const k=fr(o,r);return{...k,harMerEnnEnYtelse:k&&k.ytelser.length>1,...qe(o,"feilutbetalingBelop"),feilutbetaling:o.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:i}});return{perioder:r.filter(o=>Zn(o,u)).map(o=>({...o,harMerEnnEnYtelse:o.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:i})).concat(u)}},et=(r,t)=>{if(!(!r||!t))return t.map(n=>{const a=fr(n,r.perioder),i=a.foreldelseVurderingType?a.foreldelseVurderingType===Oe.FORELDET:a.foreldet;return{redusertBeloper:a.redusertBeloper,ytelser:a.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:a.årsak,begrunnelse:a.begrunnelse,erForeldet:i||!1}})},rt=(r,t)=>{const{vilkarResultat:n,begrunnelse:a,vilkarResultatInfo:i}=r,l=n?.kode??n;let u;const g=r.erForeldet??r.foreldet;if(g){const p=t.perioder.find(m=>m.fom===r.fom&&m.tom===r.tom);u={erForeldet:g,periodenErForeldet:!0,foreldetBegrunnelse:p?fe(p.begrunnelse):void 0}}else u={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const o={valgtVilkarResultatType:l,begrunnelse:fe(a),harMerEnnEnYtelse:r.ytelser.length>1,...u},k=l===E.GOD_TRO?se.buildIntialValues(i):{},d=l!==void 0&&l!==E.GOD_TRO?ie.buildInitalValues(i):{};return{...o,vurderingBegrunnelse:i?fe(i.begrunnelse):void 0,[o.valgtVilkarResultatType]:{...k,...d}}},nt=(r,t)=>{const{valgtVilkarResultatType:n,begrunnelse:a,vurderingBegrunnelse:i}=r,l=r[n],u=n===E.GOD_TRO?se.transformValues(l,i):{},g=n!==E.GOD_TRO?ie.transformValues(l,t,i):{};return{begrunnelse:a,fom:r.fom,tom:r.tom,vilkarResultat:n,vilkarResultatInfo:{...u,...g}}},tt=(r,t)=>r.perioder.map(n=>({...rt(n,t),fom:n.fom,tom:n.tom})).sort(Me),at=(r,t)=>({kode:_e.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:r.filter(n=>!n.erForeldet).map(n=>nt(n,t))}),it=r=>{if(!r||r.reduce((a,i)=>i.erForeldet?a:a+1,0)<2)return;const n=r.reduce((a,i)=>{const{valgtVilkarResultatType:l}=i,u=i[l],{handletUaktsomhetGrad:g}=u,o=u[g];return o&&o.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?a+1:a},0);if(n>0&&n!==r.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},Tr=({perioderForeldelse:r,kodeverkSamlingFpTilbake:t,vilkarvurderingsperioder:n,submitCallback:a,isReadOnly:i,alleMerknaderFraBeslutter:l,vilkarvurdering:u,relasjonsRolleType:g,relasjonsRolleTypeKodeverk:o,beregnBelop:k,behandlingUuid:d,formData:p,setFormData:m})=>{const T=n.perioder,h=n.rettsgebyr,U=Qn(T,u,h),[b,V]=B.useState(p||tt(U,r)),[j,G]=B.useState(!!p),[y,N]=B.useState(b?.find(Ye)),[pe,Y]=B.useState(!1),[W,xe]=B.useState();B.useEffect(()=>{xe(it(b))},[b]);const le=et(U,b),Ae=b.reduce((f,R)=>R.erForeldet?f:f+1,0),Be=l[_e.VURDER_TILBAKEKREVING],we=()=>{Y(!0),a(at(b,t.SærligGrunn))},J=Xn(b,le),v=J.some(f=>f.isAksjonspunktOpen),M=y?J.find(f=>f.fom===y.fom&&f.tom===y.tom):void 0,O=f=>{const R=f?b.find(_=>_.fom===f.fom&&_.tom===f.tom):void 0;N(R)},K=()=>{const f=b.findIndex(R=>R.fom===y?.fom&&R.tom===y?.tom);O(b[f+1])},L=()=>{const f=b.findIndex(R=>R.fom===y?.fom&&R.tom===y?.tom);O(b[f-1])},re=()=>{O(void 0)},X=f=>{const R=qe(f,"erSplittet"),ge=b.filter(Q=>Q.fom!==R.fom&&Q.tom!==R.tom).concat(R).sort(Me);V(ge),m(ge),G(!0),re();const oe=ge.find(Ye);oe&&O(oe)},I=f=>{const R=b.find(_=>_.fom===y?.fom&&_.tom===y?.tom);if(R){const _=f.map(Q=>({...Jn(R),...Q,erSplittet:!0})),oe=b.filter(Q=>Q.fom!==y?.fom&&Q.tom!==y?.tom).concat(_).sort(Me);re(),G(!0),V(oe),m(oe),O(_[0])}},Z=le?le.find(f=>f.fom===y?.fom&&f.tom===y?.tom):void 0;return e.jsx(Er,{merknaderFraBeslutter:Be,withoutBorder:!0,children:e.jsxs(q,{gap:"space-16",children:[e.jsx(he,{size:"small",level:"2",children:e.jsx(s,{id:"Behandlingspunkt.Tilbakekreving"})}),v&&e.jsx(Vr,{children:e.jsx(s,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),b&&e.jsxs(e.Fragment,{children:[e.jsx(yr,{perioder:J,valgtPeriode:M,setPeriode:O,relasjonsRolleType:g,relasjonsRolleTypeKodeverk:o}),y&&Z&&e.jsx("div",{id:"panel-tilbakekreving","aria-controls":M?.id.toString(),children:e.jsx(Mr.New,{borderWidth:"1",padding:"4",children:e.jsxs(q,{gap:"space-16",children:[e.jsx(sr,{setNestePeriode:K,setForrigePeriode:L,periode:Z,readOnly:i,oppdaterSplittedePerioder:I,behandlingUuid:d,beregnBelop:k,lukkPeriode:re}),e.jsx(lr,{feilutbetaling:Z.feilutbetaling,fom:Z.fom,tom:Z.tom,arsakHendelseNavn:t.HendelseType.find(f=>f.kode===Z.årsak?.hendelseType)?.navn}),e.jsx(cr,{periode:y,data:Z,antallPerioderMedAksjonspunkt:Ae,readOnly:i||y?.erForeldet===!0,skjulPeriode:re,oppdaterPeriode:X,kodeverkSamlingFpTilbake:t,vilkarsVurdertePerioder:b},M?.id)]})})})]}),W&&e.jsx(Xe,{variant:"error",children:e.jsx(s,{id:W})}),e.jsx("div",{children:e.jsx(Gr,{isReadOnly:i||y?.erForeldet===!0,isDirty:j,isSubmittable:!v&&!y&&!W,onClick:we,isSubmitting:pe})})]})})};Tr.__docgenInfo={description:`TilbakekrevingForm

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
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}},{key:"erBelopetIBehold",value:{name:"boolean",required:!1}},{key:"tilbakekrevesBelop",value:{name:"number",required:!1}}]},required:!0}},{key:"feilutbetalingBelop",value:{name:"number",required:!1}}]}}],raw:"VilkårsvurdertPeriode[]",required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"union",raw:"'MORA' | 'FARA' | 'MMOR' | 'DELTAKER'",elements:[{name:"literal",value:"'MORA'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'DELTAKER'"}]},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"'MORA' | 'FARA' | 'MMOR' | 'DELTAKER'",elements:[{name:"literal",value:"'MORA'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'DELTAKER'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"InitialValuesDetailForm"}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const st=_r(ar),hr=r=>e.jsx(Ir,{value:st,children:e.jsx(Tr,{...r})});hr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},perioderForeldelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"union",raw:"'MORA' | 'FARA' | 'MMOR' | 'DELTAKER'",elements:[{name:"literal",value:"'MORA'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'DELTAKER'"}]},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"'MORA' | 'FARA' | 'MMOR' | 'DELTAKER'",elements:[{name:"literal",value:"'MORA'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'DELTAKER'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:lt}=__STORYBOOK_MODULE_ACTIONS__,ot=Dr(ar),ut={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:Oe.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:Oe.FORELDET}]},jr={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:nr.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},jt={component:hr,decorators:[ot],args:{submitCallback:lt("submit"),behandlingUuid:"1",kodeverkSamlingFpTilbake:Ur,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:ut,vilkarvurdering:{vilkarsVurdertePerioder:[]},beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleType:"MORA",relasjonsRolleTypeKodeverk:[{kode:"MORA",kodeverk:"RELASJONSROLLE_TYPE",navn:"Mor"}]}},ce={args:{vilkarvurderingsperioder:jr}},ye={args:{vilkarvurderingsperioder:{perioder:[jr.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:nr.MEDLEMSKAP},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...ce.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
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
}`,...ye.parameters?.docs?.source}}};const qt=["Default","MedToPerioder"];export{ce as Default,ye as MedToPerioder,qt as __namedExportsOrder,jt as default};
