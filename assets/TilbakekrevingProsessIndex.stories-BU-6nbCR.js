import{l as Y,am as Ce,j as e,aE as He,a2 as ke,a0 as ye,X as R,Y as x,B as P,d as c,b as re,b2 as yr,a4 as Je,J as F,x as Or,r as _,H as f,b3 as We,b4 as Xe,K as Ar,an as Sr,b5 as Rr,ap as ne,u as $,b7 as Z,b1 as D,O as M,g as Oe,aC as Ze,b8 as Pe,b9 as Er,aF as hr,aI as oe,E as fr,aJ as ce,y as Qe,ba as Ke,a$ as _r,L as Mr,aG as Pr,aD as Fr,$ as qr,aV as Gr,aW as Ae,P as Ir,k as jr}from"./iframe-BZfQ8D8o.js";import{g as Ur}from"./withIntl-CE05awTB.js";import{a as Lr}from"./alleTilbakekrevingKodeverk-BIIVe2EV.js";import{A as Fe}from"./index.es-BDctT3QU.js";import{t as h,O as Kr,J as wr,R as Nr,i as er,l as Vr,a as je,o as Ue,N as Se}from"./index.es-8SG4kmoH.js";import{M as i}from"./message-7vUcpa0A.js";import{S as we,T as _e,a as Br,b as xr,c as Dr,d as Yr,e as $r}from"./Timeline-DFPDKacw.js";import{S as zr}from"./Scissors-CtkRh-uf.js";import{T as K}from"./Table--mEcUxkR.js";import{T as Cr,m as rr}from"./nb_NO-Cnc3nlNX.js";import{a as Hr,S as Jr}from"./SilhouetteFill-Dpzov7hZ.js";/* empty css              */import"./preload-helper-PPVm8Dsz.js";const Wr="_button_8q57x_1",Xr="_cancelButton_8q57x_5",Ne={button:Wr,cancelButton:Xr},Zr=(r,t)=>n=>n&&(wr(n)(c(r.tom.toString()).subtract(1,"day"))||Nr(n)(r.fom))?t.formatMessage({id:"DelOppPeriodeModalImpl.DatoUtenforPeriode"}):null,Qr=(r,t)=>{const n=c(r.forstePeriodeTomDato).add(1,"days"),a={fom:t.fom,tom:r.forstePeriodeTomDato},l={fom:n.format(Or),tom:t.tom};return{forstePeriode:a,andrePeriode:l}},nr=({periodeData:r,showModal:t,cancelEvent:n,finnesBelopMed0Verdi:a,splitPeriod:l})=>{const s=Y(),u=Ce();return e.jsx(He,{formMethods:u,onSubmit:p=>l(Qr(p,r)),children:e.jsxs(ke,{open:t,"aria-label":s.formatMessage({id:"DelOppPeriodeModalImpl.ModalDescription"}),onClose:n,width:"medium",children:[e.jsx(ke.Header,{children:e.jsx(ye,{size:"small",level:"2",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.DelOppPerioden"})})}),e.jsx(ke.Body,{children:e.jsxs(R,{gap:"space-16",children:[e.jsxs("div",{children:[e.jsx(x,{size:"small",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Periode"})}),e.jsx(P,{size:"small",children:`${c(r.fom.toString()).format(re)} - ${c(r.tom.toString()).format(re)}`})]}),e.jsx(yr,{name:"forstePeriodeTomDato",control:u.control,label:e.jsx(i,{id:"DelOppPeriodeModalImpl.AngiTomDato"}),validate:[h,Kr,Zr(r,s)],fromDate:c(r.fom).toDate(),toDate:c(r.tom).toDate()}),a&&e.jsx(Je,{variant:"error",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.BelopEr0"})})]})}),e.jsxs(ke.Footer,{children:[e.jsx(F,{size:"small",variant:"primary",className:Ne.button,disabled:!u.formState.isDirty,children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Ok"})}),e.jsx(F,{size:"small",variant:"secondary",onClick:n,className:Ne.cancelButton,type:"button",children:e.jsx(i,{id:"DelOppPeriodeModalImpl.Avbryt"})})]})]})})};nr.__docgenInfo={description:"",methods:[],displayName:"DelOppPeriodeModal",props:{periodeData:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}}]}},name:"perioder"}],return:{name:"void"}}},description:""}}};const en="_margin_1dkor_37",Me={margin:en},rn=!1,tr=({setNestePeriode:r,setForrigePeriode:t,readOnly:n,lukkPeriode:a,periode:l,beregnBelop:s,behandlingUuid:u,oppdaterSplittedePerioder:p})=>{const o=Y(),[g,m]=_.useState(!1),[k,d]=_.useState(!1),O=T=>{m(!0),T.preventDefault()},A=()=>{m(!1)},w=T=>{d(!1);const G={belop:l.feilutbetaling,fom:T.forstePeriode.fom,tom:T.forstePeriode.tom,begrunnelse:l.begrunnelse?l.begrunnelse:" "},S={belop:l.feilutbetaling,fom:T.andrePeriode.fom,tom:T.andrePeriode.tom,begrunnelse:l.begrunnelse?l.begrunnelse:" "};s({behandlingUuid:u,perioder:[G,S]}).then(b=>{const{perioder:N}=b;if(N.some(z=>z.belop===0))d(!0);else{const z={fom:G.fom,tom:G.tom,feilutbetaling:N[0].belop},C={fom:S.fom,tom:S.tom,feilutbetaling:N[1].belop};A(),p([z,C])}})};return e.jsxs(f,{children:[e.jsxs(x,{size:"small",children:[e.jsx(i,{id:"PeriodeController.Detaljer"}),rn]}),!n&&e.jsxs(e.Fragment,{children:[e.jsx(we,{}),e.jsx(F,{className:Me.margin,size:"xsmall",icon:e.jsx(zr,{"aria-hidden":!0}),onClick:O,variant:"tertiary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.DelOppPerioden"}),children:e.jsx(i,{id:"PeriodeController.DelOppPerioden"})})]}),g&&e.jsx(nr,{cancelEvent:A,showModal:g,periodeData:l,splitPeriod:w,finnesBelopMed0Verdi:k}),e.jsx(we,{}),e.jsx(F,{className:Me.margin,size:"xsmall",icon:e.jsx(We,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.prevPeriod"}),children:e.jsx(i,{id:"PeriodeController.prevPeriodShort"})}),e.jsx(F,{className:Me.margin,size:"xsmall",icon:e.jsx(Xe,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.nextPeriod"}),iconPosition:"right",children:e.jsx(i,{id:"PeriodeController.nextPeriodShort"})}),e.jsx(F,{size:"xsmall",icon:e.jsx(Ar,{"aria-hidden":!0}),onClick:a,variant:"tertiary-neutral",type:"button",title:o.formatMessage({id:"PeriodeController.LukkPeriode"})})]})};tr.__docgenInfo={description:"",methods:[],displayName:"PeriodeController",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},beregnBelop:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: BeregnBeløpParams) => Promise<{ perioder: { belop: number }[] }>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"hendelseUndertype",value:{name:"union",raw:"'IKKE_INNTEKT' | 'IKKE_YRKESAKTIV' | 'OKONOMI_FEIL_TREKK' | 'IKKE_BOSATT'",elements:[{name:"literal",value:"'IKKE_INNTEKT'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'OKONOMI_FEIL_TREKK'"},{name:"literal",value:"'IKKE_BOSATT'"}],required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}[]`,required:!1}},{key:"oppfyltValg",value:{name:"string",required:!1}},{key:"foreldet",value:{name:"boolean",required:!1}}]}}]},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};var be={exports:{}},nn=be.exports,Ve;function tn(){return Ve||(Ve=1,function(r,t){(function(n,a){r.exports=a()})(nn,function(){return function(n,a){a.prototype.isSameOrBefore=function(l,s){return this.isSame(l,s)||this.isBefore(l,s)}}})}(be)),be.exports}var an=tn();const ln=Sr(an);var Le=(r=>(r.VURDER_TILBAKEKREVING="5002",r))(Le||{});const sn="_infoSummary_14z0n_1",on="_positivNumber_14z0n_8",un="_redNumber_14z0n_12",mn="_resultName_14z0n_17",se={infoSummary:sn,positivNumber:on,redNumber:un,resultName:mn},ar=({fom:r,tom:t,feilutbetaling:n,arsakHendelseNavn:a})=>{const l=Rr(r,t);return e.jsxs(R,{gap:"space-8",className:se.infoSummary,children:[e.jsxs(f,{justify:"space-between",children:[e.jsx(x,{size:"small",children:`${c(r).format(re)} - ${c(t).format(re)}`}),e.jsx(P,{size:"small",children:l.formattedString})]}),e.jsxs(f,{gap:"space-16",children:[e.jsxs(P,{size:"small",className:se.resultName,children:[e.jsx(i,{id:"PeriodeInformasjon.Feilutbetaling"}),":",e.jsx("span",{className:n?se.redNumber:se.positivNumber,children:ne(n)})]}),a&&e.jsx(P,{size:"small",className:se.resultName,children:a})]})]})};ar.__docgenInfo={description:`PeriodeInformasjon

Tilbakekreving periode oppsummering

Presentationskomponent`,methods:[],displayName:"PeriodeInformasjon",props:{fom:{required:!0,tsType:{name:"string"},description:""},tom:{required:!0,tsType:{name:"string"},description:""},feilutbetaling:{required:!0,tsType:{name:"number"},description:""},arsakHendelseNavn:{required:!1,tsType:{name:"string"},description:""}}};const lr=["SIMPEL_UAKTSOM","GROVT_UAKTSOM","FORSETT"],ir=({name:r,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:n})=>{const a=$(),l=`${r}.skalDetTilleggesRenter`;return _.useEffect(()=>{a.getValues(l)===void 0&&a.setValue(l,!1)},[]),e.jsxs(Z,{alignOffset:n?320:360,children:[n&&e.jsxs(R,{gap:"space-16",children:[e.jsx(x,{size:"small",children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(P,{size:"small",children:"100 %"}),e.jsxs(D,{name:`${r}.skalDetTilleggesRenter`,control:a.control,legend:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[h],readOnly:t,children:[e.jsx(M,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(M,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]}),!n&&e.jsxs(R,{gap:"space-8",children:[e.jsxs("div",{children:[e.jsx(Oe,{children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Andel"})}),e.jsx(P,{size:"small",children:"100 %"})]}),e.jsx(P,{size:"small",children:e.jsx(i,{id:"AktsomhetGradForsettFormPanel.Renter"})})]})]})};ir.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradForsettFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""}}};const ue="Egendefinert",qe=["30","50","70",ue],dn="_suffix_cawxu_1",kn="_suffixGrovText_cawxu_4",pn="_labelPadding_cawxu_8",gn="_inputFelt_cawxu_12",ee={suffix:dn,suffixGrovText:kn,labelPadding:pn,inputFelt:gn},Be=er(0),Tn=Vr(99.99),vn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},cn=(r,t)=>n=>{if((typeof n=="string"?Number(n):n)>=t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen"})},sr=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:l,feilutbetalingBelop:s,andelSomTilbakekreves:u})=>{const p=Y(),o=$(),g=`${r}.skalDetTilleggesRenter`;return _.useEffect(()=>{o.getValues(g)===void 0&&o.setValue(g,!1)},[]),e.jsxs(R,{gap:"space-12",children:[e.jsx(D,{name:`${r}.harGrunnerTilReduksjon`,control:o.control,legend:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon"}),validate:[h],readOnly:n,children:e.jsxs(f,{gap:"space-20",children:[e.jsx(M,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(M,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})}),t&&e.jsx(Z,{alignOffset:24,children:e.jsxs(f,{gap:"space-16",children:[!l&&u!==ue&&e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(f,{gap:"space-8",children:[e.jsx(Ze,{name:`${r}.andelSomTilbakekreves`,control:o.control,label:"",validate:[h],selectValues:qe.map(m=>e.jsx("option",{value:m,children:m},m))}),e.jsx("div",{className:ee.suffix,children:"%"})]})]}),!l&&u===ue&&e.jsxs(e.Fragment,{children:[e.jsx(x,{size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves"})}),e.jsxs(f,{gap:"space-16",children:[e.jsx(Pe,{name:`${r}.andelSomTilbakekrevesManuell`,control:o.control,className:ee.inputFelt,readOnly:n,validate:[h,Be,Tn],normalizeOnBlur:m=>Number.isNaN(m)?m:parseFloat(m.toString()).toFixed(2),format:m=>m.toString().replace(".",","),parse:m=>m.toString().replace(",",".")}),e.jsx("div",{className:a==="GROVT_UAKTSOM"?ee.suffixGrovText:ee.suffix,children:"%"})]})]}),l&&e.jsx(Pe,{name:`${r}.belopSomSkalTilbakekreves`,control:o.control,label:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves"}),validate:[h,Be,cn(p,s)],readOnly:n,format:ne,parse:vn}),a==="GROVT_UAKTSOM"&&e.jsxs("div",{children:[e.jsx(Oe,{children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"})}),e.jsx(P,{size:"small",className:ee.labelPadding,children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})]})}),t===!1&&e.jsxs(Z,{alignOffset:90,children:[e.jsx(Oe,{children:e.jsx(i,{id:l?"AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves":"AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves"})}),e.jsxs(R,{gap:"space-16",children:[e.jsx(P,{size:"small",className:ee.labelPadding,children:l?ne(s):"100%"}),a==="GROVT_UAKTSOM"&&e.jsx(D,{name:g,control:o.control,legend:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter"}),validate:[h],readOnly:n,children:e.jsxs(f,{gap:"space-20",children:[e.jsx(M,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(M,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})})]})]})]})};sr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetReduksjonAvBelopFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}]},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""}}};const bn=je(3),yn=Ue(1500),Ge=({name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,erSerligGrunnAnnetValgt:l,sarligGrunnTyper:s,harMerEnnEnYtelse:u,feilutbetalingBelop:p,andelSomTilbakekreves:o})=>{const g=Y(),{watch:m,control:k}=$(),d=!s.some(A=>!!m(`${r}.${A.kode}`)),O=Er(r,d?g.formatMessage({id:"TilbakekrevingPeriodeForm.MaVelgeSarligGrunn"}):void 0);return e.jsxs(R,{gap:"space-16",children:[e.jsx(x,{size:"small",children:e.jsx(i,{id:"AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon"})}),e.jsx("div",{children:s.map(A=>e.jsx(hr,{name:`${r}.${A.kode}`,control:k,label:A.navn,readOnly:n},A.kode))}),l&&e.jsx(oe,{name:`${r}.annetBegrunnelse`,control:k,label:"",validate:[h,bn,yn,Se],maxLength:1500,readOnly:n}),O&&e.jsx(fr,{children:O}),e.jsx(sr,{name:r,harGrunnerTilReduksjon:t,readOnly:n,handletUaktsomhetGrad:a,harMerEnnEnYtelse:u,feilutbetalingBelop:p,andelSomTilbakekreves:o})]})};Ge.__docgenInfo={description:"",methods:[],displayName:"AktsomhetSarligeGrunnerFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}]},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const On="_explanationTextarea_1kabz_1",An="_panelWidth_1kabz_5",or={explanationTextarea:On,panelWidth:An},Sn=je(3),Rn=Ue(1500),xe=({name:r,readOnly:t})=>{const n=Y(),{control:a}=$();return e.jsxs(R,{gap:"space-16",children:[e.jsx(x,{size:"small",children:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.SærligGrunner"})}),e.jsx(oe,{name:`${r}.sarligGrunnerBegrunnelse`,control:a,label:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner"}),validate:[h,Sn,Rn,Se],maxLength:1500,readOnly:t,className:or.explanationTextarea,description:n.formatMessage({id:"AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst"})})]})},ur=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:l,harMerEnnEnYtelse:s,feilutbetalingBelop:u,erTotalBelopUnder4Rettsgebyr:p,andelSomTilbakekreves:o,erValgtResultatTypeForstoBurdeForstaatt:g,name:m})=>{const{control:k,watch:d}=$(),O=d(`${m}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),A=g?180:200;return e.jsx(Z,{alignOffset:n==="GROVT_UAKTSOM"?A:20,children:e.jsxs("div",{className:or.panelWidth,children:[n==="SIMPEL_UAKTSOM"&&p&&e.jsxs(R,{gap:"space-12",children:[e.jsx(D,{name:`${m}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`,control:k,legend:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.Tilbakekrev"}),validate:[h],readOnly:t,children:e.jsxs(f,{gap:"space-16",children:[e.jsx(M,{value:!0,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Ja"})}),e.jsx(M,{value:!1,size:"small",children:e.jsx(i,{id:"AktsomhetReduksjonAvBelopFormPanel.Nei"})})]})}),O&&e.jsxs(e.Fragment,{children:[e.jsx(xe,{name:m,readOnly:t}),e.jsx(Ge,{name:m,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:l,harMerEnnEnYtelse:s,feilutbetalingBelop:u,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:o})]}),O===!1&&e.jsx(Z,{alignOffset:55,children:e.jsx(i,{id:"AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt"})})]}),(n!=="SIMPEL_UAKTSOM"||!p)&&e.jsxs(e.Fragment,{children:[e.jsx(xe,{name:m,readOnly:t}),e.jsx(Ge,{name:m,harGrunnerTilReduksjon:r,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:l,harMerEnnEnYtelse:s,feilutbetalingBelop:u,readOnly:t,handletUaktsomhetGrad:n,andelSomTilbakekreves:o})]})]})})};ur.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradUaktsomhetFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}]},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const mr=({harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,erValgtResultatTypeForstoBurdeForstaatt:l,sarligGrunnTyper:s,harMerEnnEnYtelse:u,feilutbetalingBelop:p,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:g,name:m})=>e.jsxs(e.Fragment,{children:[n==="FORSETT"&&e.jsx(ir,{name:m,readOnly:t,erValgtResultatTypeForstoBurdeForstaatt:l}),n!=="FORSETT"&&e.jsx(ur,{name:m,harGrunnerTilReduksjon:r,readOnly:t,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:a,sarligGrunnTyper:s,harMerEnnEnYtelse:u,feilutbetalingBelop:p,erTotalBelopUnder4Rettsgebyr:o,andelSomTilbakekreves:g,erValgtResultatTypeForstoBurdeForstaatt:l})]});mr.__docgenInfo={description:"",methods:[],displayName:"AktsomhetGradFormPanel",props:{harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},handletUaktsomhetGrad:{required:!1,tsType:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}]},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:""},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:""},harMerEnnEnYtelse:{required:!0,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const En={FORSETT:"AktsomhetFormPanel.AktsomhetTyperLabel.Forsett",GROVT_UAKTSOM:"AktsomhetFormPanel.AktsomhetTyperLabel.GrovtUaktsomt",SIMPEL_UAKTSOM:"AktsomhetFormPanel.AktsomhetTyperLabel.SimpelUaktsom"},te=({readOnly:r,resetFields:t,handletUaktsomhetGrad:n,harGrunnerTilReduksjon:a,erSerligGrunnAnnetValgt:l=!1,erValgtResultatTypeForstoBurdeForstaatt:s=!1,aktsomhetTyper:u,sarligGrunnTyper:p,antallYtelser:o,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:m,andelSomTilbakekreves:k,name:d})=>{const{control:O}=$();return e.jsxs(R,{gap:"space-12",children:[e.jsx(D,{name:`${d}.handletUaktsomhetGrad`,control:O,legend:e.jsx(i,{id:"AktsomhetFormPanel.HandletUaktsomhetGrad"}),validate:[h],readOnly:r,onChange:t,children:e.jsx(f,{gap:"space-20",children:u.map(A=>e.jsx(M,{value:A.kode,size:"small",children:s?e.jsx(i,{id:En[A.kode]}):A.navn},A.kode))})}),lr.some(A=>A===n)&&e.jsx(mr,{name:`${d}.${n}`,harGrunnerTilReduksjon:a,readOnly:r,handletUaktsomhetGrad:n,erSerligGrunnAnnetValgt:l,erValgtResultatTypeForstoBurdeForstaatt:s,sarligGrunnTyper:p,harMerEnnEnYtelse:o>1,feilutbetalingBelop:g,erTotalBelopUnder4Rettsgebyr:m,andelSomTilbakekreves:k})]})},hn=(r,t)=>{const n=parseInt(r,10);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},fn=(r,t)=>{const n=parseFloat(r);return!t||Number.isNaN(n)?{}:{andelTilbakekreves:n}},_n=(r,t)=>{if(r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1)return{tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr};const n=t.reduce((s,u)=>r[u.kode]?s.concat(u.kode):s,[]),{harGrunnerTilReduksjon:a}=r,l=r.andelSomTilbakekreves===ue?fn(r.andelSomTilbakekrevesManuell,a):hn(r.andelSomTilbakekreves,a);return{harGrunnerTilReduksjon:a,ileggRenter:a?void 0:r.skalDetTilleggesRenter,sarligGrunner:n.length>0?n:void 0,tilbakekrevesBelop:r.harGrunnerTilReduksjon?Qe(r.belopSomSkalTilbakekreves):void 0,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:r.sarligGrunnerBegrunnelse,tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...l}};te.transformValues=(r,t,n)=>{const a=r[r.handletUaktsomhetGrad];return{"@type":"annet",aktsomhet:r.handletUaktsomhetGrad,begrunnelse:n,aktsomhetInfo:a?_n(a,t):null}};const Mn=(r,t)=>({andelSomTilbakekreves:t===void 0||qe.includes(t)?t:ue,andelSomTilbakekrevesManuell:t&&qe.includes(t)?void 0:r.andelTilbakekreves,harGrunnerTilReduksjon:r.harGrunnerTilReduksjon,skalDetTilleggesRenter:r.ileggRenter,belopSomSkalTilbakekreves:r.tilbakekrevesBelop,annetBegrunnelse:r.annetBegrunnelse,sarligGrunnerBegrunnelse:ce(r.sarligGrunnerBegrunnelse),tilbakekrevSelvOmBeloepErUnder4Rettsgebyr:r.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr,...r.sarligGrunner?r.sarligGrunner.reduce((n,a)=>({...n,[a.kode??a]:!0}),{}):{}});te.buildInitalValues=r=>{const{aktsomhet:t,aktsomhetInfo:n}=r,a=n&&n.andelTilbakekreves!==void 0?`${n.andelTilbakekreves}`:void 0,l=n?{[t.kode&&"kode"in t?t.kode:t]:Mn(n,a)}:{};return{handletUaktsomhetGrad:t&&t.kode&&"kode"in t?t.kode:t,...l}};te.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:"{ handletUaktsomhetGrad: string }",signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"string",required:!0}}]}}},{name:"sarligGrunnTyper",optional:!1,type:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
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
}`,signature:{properties:[{key:"sarligGrunner",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"harGrunnerTilReduksjon",value:{name:"boolean",required:!0}},{key:"andelTilbakekreves",value:{name:"number",required:!0}},{key:"ileggRenter",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}},{key:"tilbakekrevSelvOmBeloepErUnder4Rettsgebyr",value:{name:"boolean",required:!0}},{key:"annetBegrunnelse",value:{name:"string",required:!0}},{key:"sarligGrunnerBegrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}}],returns:null}],displayName:"AktsomhetFormPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},resetFields:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},harGrunnerTilReduksjon:{required:!1,tsType:{name:"boolean"},description:""},erSerligGrunnAnnetValgt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erValgtResultatTypeForstoBurdeForstaatt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},handletUaktsomhetGrad:{required:!1,tsType:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}]},description:""},antallYtelser:{required:!0,tsType:{name:"number"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""},erTotalBelopUnder4Rettsgebyr:{required:!0,tsType:{name:"boolean"},description:""},aktsomhetTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Aktsomhet'>[]"},description:""},sarligGrunnTyper:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<'SærligGrunn'>[]"},description:""},andelSomTilbakekreves:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const dr=()=>{const{control:r}=$();return e.jsxs(f,{gap:"space-16",children:[e.jsx(oe,{name:"foreldetBegrunnelse",control:r,label:e.jsx(i,{id:"ForeldetPanel.Vurdering"}),readOnly:!0}),e.jsx(D,{name:"periodenErForeldet",control:r,legend:e.jsx(Oe,{children:e.jsx(i,{id:"ForeldetFormPanel.VurderOmPeriodenErForeldet"})}),children:e.jsx(M,{value:"true",size:"small",children:e.jsx(i,{id:"ForeldetFormPanel.PeriodenErForeldet"})})})]})};dr.__docgenInfo={description:"",methods:[],displayName:"ForeldetFormPanel"};const Pn="_arrowbox_ych2z_1",Fn="_tilbakekrevdBelopInput_ych2z_4",De={arrowbox:Pn,tilbakekrevdBelopInput:Fn},qn=er(1),Gn=r=>{const t=r.toString().replace(/\s/g,""),n=parseInt(t,10);return Number.isNaN(n)?"":n},In=(r,t)=>n=>{if((typeof n=="string"?Number(n):n)>t)return r.formatMessage({id:"TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen"})},ae=({name:r,readOnly:t,erBelopetIBehold:n,feilutbetalingBelop:a})=>{const l=Y(),{control:s}=$();return e.jsxs(R,{gap:"space-12",children:[e.jsx(D,{name:`${r}.erBelopetIBehold`,control:s,legend:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.BelopetIBehold"}),validate:[h],readOnly:t,children:e.jsxs(f,{gap:"space-20",children:[e.jsx(M,{value:!0,size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.Ja"})}),e.jsx(M,{value:!1,size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.Nei"})})]})}),e.jsxs("div",{className:De.arrowbox,children:[n===!0&&e.jsx(Z,{alignOffset:25,children:e.jsx(Pe,{name:`${r}.tilbakekrevdBelop`,label:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.AngiBelop"}),validate:[h,qn,In(l,a)],readOnly:t,className:De.tilbakekrevdBelopInput,format:ne,parse:Gn})}),n===!1&&e.jsx(Z,{alignOffset:90,children:e.jsx(P,{size:"small",children:e.jsx(i,{id:"BelopetMottattIGodTroFormPanel.IngenTilbakekreving"})})})]})]})};ae.transformValues=(r,t)=>({"@type":"godTro",begrunnelse:t,erBelopetIBehold:r.erBelopetIBehold,tilbakekrevesBelop:r.erBelopetIBehold?Qe(r.tilbakekrevdBelop):void 0});ae.buildIntialValues=r=>({erBelopetIBehold:r.erBelopetIBehold,tilbakekrevdBelop:r.tilbakekrevesBelop});ae.__docgenInfo={description:"",methods:[{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"InitialValuesGodTroForm",alias:"InitialValuesGodTroForm"}},{name:"vurderingBegrunnelse",optional:!1,type:{name:"string"}}],returns:null},{name:"buildIntialValues",docblock:null,modifiers:["static"],params:[{name:"info",optional:!1,type:{name:"signature",type:"object",raw:`{
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}`,signature:{properties:[{key:"erBelopetIBehold",value:{name:"boolean",required:!0}},{key:"tilbakekrevesBelop",value:{name:"number",required:!0}}]}}}],returns:null}],displayName:"BelopetMottattIGodTroFormPanel",props:{name:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},erBelopetIBehold:{required:!1,tsType:{name:"boolean"},description:""},feilutbetalingBelop:{required:!0,tsType:{name:"number"},description:""}}};const jn="_feilutbetalingTable_1fsd2_1",Un={feilutbetalingTable:jn},kr=({ytelser:r})=>r.length===0?null:e.jsxs(K,{className:Un.feilutbetalingTable,children:[e.jsx(K.Header,{children:e.jsxs(K.Row,{children:[e.jsx(K.HeaderCell,{scope:"col",children:e.jsx(i,{id:"TilbakekrevingAktivitetTabell.Aktivitet"})}),e.jsx(K.HeaderCell,{scope:"col",children:e.jsx(i,{id:"TilbakekrevingAktivitetTabell.FeilutbetaltBelop"})})]})}),e.jsx(K.Body,{children:r.map(t=>e.jsxs(K.Row,{children:[e.jsx(K.DataCell,{children:e.jsx(P,{size:"small",children:t.aktivitet})}),e.jsx(K.DataCell,{children:e.jsx(P,{size:"small",children:ne(t.belop)})})]},t.aktivitet+t.belop))})]});kr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingAktivitetTabell",props:{ytelser:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktivitet: string;
  belop: number;
}`,signature:{properties:[{key:"aktivitet",value:{name:"string",required:!0}},{key:"belop",value:{name:"number",required:!0}}]}}],raw:`{
  aktivitet: string;
  belop: number;
}[]`},description:""}}};const Ln="_explanationTextarea_1udkt_1",Kn="_leftColumn_1udkt_5",wn="_rightColumn_1udkt_9",Nn="_selectWidth_1udkt_12",pe={explanationTextarea:Ln,leftColumn:Kn,rightColumn:wn,selectWidth:Nn},Ye=je(3),$e=Ue(1500),pr=({data:r,periode:t,skjulPeriode:n,readOnly:a,oppdaterPeriode:l,vilkarsVurdertePerioder:s,kodeverkSamlingFpTilbake:u,antallPerioderMedAksjonspunkt:p})=>{const o=Y(),[g,m]=_.useState(!1),k=Ce({defaultValues:t}),d=k.watch("valgtVilkarResultatType"),O=k.watch(`${d}.handletUaktsomhetGrad`),A=k.watch(`${d}.${O}.harGrunnerTilReduksjon`),w=k.watch(`${d}.${O}.andelSomTilbakekreves`),T=k.watch(`${d}.${O}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`),G=k.watch(`${d}.${O}.ANNET`),S=k.watch(`${d}.erBelopetIBehold`),j=Ke(d),b=Ke(O),N=r.redusertBeloper,me=u.SærligGrunn,z=u.VilkårResultat,C=lr.map(v=>u.Aktsomhet.find(I=>I.kode===v)),Re=(v,I)=>{const q=v.target.value.split("_"),V=I.find(U=>U.fom===q[0]&&U.tom===q[1]),B=V?.valgtVilkarResultatType,Q=V&&B?V[B]:void 0,J=JSON.parse(JSON.stringify(Q));if(B!=="GOD_TRO"){const{handletUaktsomhetGrad:U}=J;U!=="FORSETT"&&t?.harMerEnnEnYtelse!==V?.harMerEnnEnYtelse&&(J[U].andelSomTilbakekreves=null,J[U].andelSomTilbakekrevesManuell=null,J[U].belopSomSkalTilbakekreves=null)}k.setValue("valgtVilkarResultatType",B,{shouldDirty:!0}),k.setValue("begrunnelse",V?.begrunnelse,{shouldDirty:!0}),k.setValue("vurderingBegrunnelse",V?.vurderingBegrunnelse,{shouldDirty:!0}),B&&k.setValue(B,J,{shouldDirty:!0}),v.preventDefault()},le=()=>{m(!g),l(k.getValues())},Ee=v=>{p>1&&r.erTotalBelopUnder4Rettsgebyr&&T===!1?m(!g):l(v)},he=()=>{j&&k.resetField(j)},fe=()=>{b&&k.resetField(`${d}.${b}`)},H=s.filter(v=>!v.erForeldet&&v.valgtVilkarResultatType!=null);return e.jsx(He,{formMethods:k,onSubmit:Ee,children:e.jsxs(R,{gap:"space-16",children:[e.jsx(R,{gap:"space-8",children:N&&N.map(v=>e.jsx(P,{size:"small",children:e.jsx(i,{id:v.erTrekk?"TilbakekrevingPeriodeForm.FeilutbetaltBelopTrekk":"TilbakekrevingPeriodeForm.FeilutbetaltBelopEtterbetaling",values:{belop:ne(v.belop),b:_r}})},v.belop))}),e.jsx(kr,{ytelser:r.ytelser}),!a&&!r.erForeldet&&H.length>0&&e.jsx(Ze,{name:"perioderForKopi",control:k.control,selectValues:H.map(v=>{const I=`${v.fom}_${v.tom}`,q=`${c(v.fom).format(re)} - ${c(v.tom).format(re)}`;return e.jsx("option",{value:I,children:q},I)}),onChange:v=>Re(v,H),className:pe.selectWidth,label:e.jsx(i,{id:"TilbakekrevingPeriodeForm.KopierVilkårsvurdering"})}),e.jsxs(f,{gap:"space-16",wrap:!0,children:[e.jsxs("div",{className:pe.leftColumn,children:[r.erForeldet&&e.jsx(dr,{}),!r.erForeldet&&e.jsxs(R,{gap:"space-8",children:[e.jsx(ye,{size:"small",level:"3",children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.VilkarForTilbakekreving"})}),e.jsx(oe,{name:"begrunnelse",control:k.control,label:o.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering"}),validate:[h,Ye,$e,Se],maxLength:1500,readOnly:a,className:pe.explanationTextarea,description:o.formatMessage({id:"TilbakekrevingPeriodeForm.Vurdering.Hjelpetekst"})}),e.jsx(D,{name:"valgtVilkarResultatType",control:k.control,legend:e.jsx(i,{id:"TilbakekrevingPeriodeForm.oppfylt"}),validate:[h],readOnly:a,onChange:he,children:z.map(v=>e.jsx(M,{value:v.kode,size:"small",children:v.navn},v.kode))})]})]}),e.jsx("div",{className:pe.rightColumn,children:d&&e.jsxs(R,{gap:"space-8",children:[e.jsx(ye,{size:"small",level:"3",children:e.jsx(i,{id:d==="GOD_TRO"?"TilbakekrevingPeriodeForm.BelopetMottattIGodTro":"TilbakekrevingPeriodeForm.Aktsomhet"})}),e.jsx(oe,{name:"vurderingBegrunnelse",control:k.control,label:o.formatMessage({id:d==="GOD_TRO"?"TilbakekrevingPeriodeForm.VurderingMottattIGodTro":"TilbakekrevingPeriodeForm.VurderingAktsomhet"}),validate:[h,Ye,$e,Se],maxLength:1500,readOnly:a}),d==="GOD_TRO"&&e.jsx(ae,{name:d,readOnly:a,erBelopetIBehold:S,feilutbetalingBelop:r.feilutbetaling}),d!=="GOD_TRO"&&e.jsx(te,{name:d,harGrunnerTilReduksjon:A,readOnly:a,handletUaktsomhetGrad:O,resetFields:fe,erSerligGrunnAnnetValgt:G,erValgtResultatTypeForstoBurdeForstaatt:d==="FORSTO_BURDE_FORSTAATT",aktsomhetTyper:C,sarligGrunnTyper:me,antallYtelser:r.ytelser.length,feilutbetalingBelop:r.feilutbetaling,erTotalBelopUnder4Rettsgebyr:r.erTotalBelopUnder4Rettsgebyr,andelSomTilbakekreves:w},d)]})})]}),e.jsxs(f,{gap:"space-16",children:[e.jsx(F,{size:"small",variant:"primary",disabled:!k.formState.isDirty||a,children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.Oppdater"})}),e.jsx(F,{size:"small",variant:"secondary",onClick:n,type:"button",children:e.jsx(i,{id:"TilbakekrevingPeriodeForm.Avbryt"})})]}),g&&e.jsx(Cr,{showModal:!0,submit:le})]})})};pr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingPeriodeForm",props:{data:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"hendelseUndertype",value:{name:"union",raw:"'IKKE_INNTEKT' | 'IKKE_YRKESAKTIV' | 'OKONOMI_FEIL_TREKK' | 'IKKE_BOSATT'",elements:[{name:"literal",value:"'IKKE_INNTEKT'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'OKONOMI_FEIL_TREKK'"},{name:"literal",value:"'IKKE_BOSATT'"}],required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"intersection",raw:`{
  valgtVilkarResultatType: VilkårResultat;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
} & Pick<VilkårResultatMap, VilkårResultat>`,elements:[{name:"signature",type:"object",raw:`{
  valgtVilkarResultatType: VilkårResultat;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
}`,signature:{properties:[{key:"valgtVilkarResultatType",value:{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erForeldet",value:{name:"boolean",required:!1}},{key:"periodenErForeldet",value:{name:"boolean",required:!1}},{key:"foreldetBegrunnelse",value:{name:"string",required:!1}},{key:"vurderingBegrunnelse",value:{name:"string",required:!0}},{key:"harMerEnnEnYtelse",value:{name:"boolean",required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FEIL_OPPLYSNINGER: InitialValuesAktsomhetForm;
  FORSTO_BURDE_FORSTAATT: InitialValuesAktsomhetForm;
  MANGELFULL_OPPLYSNING: InitialValuesAktsomhetForm;
  GOD_TRO: InitialValuesGodTroForm;
}`,signature:{properties:[{key:"FEIL_OPPLYSNINGER",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"FORSTO_BURDE_FORSTAATT",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"MANGELFULL_OPPLYSNING",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"GOD_TRO",value:{name:"InitialValuesGodTroForm",required:!0}}]}},{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}],raw:"Pick<VilkårResultatMap, VilkårResultat>"}]}]},description:""},skjulPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},oppdaterPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"(values: CustomVilkarsVurdertePeriode) => void",signature:{arguments:[{type:{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"intersection",raw:`{
  valgtVilkarResultatType: VilkårResultat;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
} & Pick<VilkårResultatMap, VilkårResultat>`,elements:[{name:"signature",type:"object",raw:`{
  valgtVilkarResultatType: VilkårResultat;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
}`,signature:{properties:[{key:"valgtVilkarResultatType",value:{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erForeldet",value:{name:"boolean",required:!1}},{key:"periodenErForeldet",value:{name:"boolean",required:!1}},{key:"foreldetBegrunnelse",value:{name:"string",required:!1}},{key:"vurderingBegrunnelse",value:{name:"string",required:!0}},{key:"harMerEnnEnYtelse",value:{name:"boolean",required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FEIL_OPPLYSNINGER: InitialValuesAktsomhetForm;
  FORSTO_BURDE_FORSTAATT: InitialValuesAktsomhetForm;
  MANGELFULL_OPPLYSNING: InitialValuesAktsomhetForm;
  GOD_TRO: InitialValuesGodTroForm;
}`,signature:{properties:[{key:"FEIL_OPPLYSNINGER",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"FORSTO_BURDE_FORSTAATT",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"MANGELFULL_OPPLYSNING",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"GOD_TRO",value:{name:"InitialValuesGodTroForm",required:!0}}]}},{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}],raw:"Pick<VilkårResultatMap, VilkårResultat>"}]}]},name:"values"}],return:{name:"void"}}},description:""},vilkarsVurdertePerioder:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"intersection",raw:`{
  valgtVilkarResultatType: VilkårResultat;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
} & Pick<VilkårResultatMap, VilkårResultat>`,elements:[{name:"signature",type:"object",raw:`{
  valgtVilkarResultatType: VilkårResultat;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
}`,signature:{properties:[{key:"valgtVilkarResultatType",value:{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erForeldet",value:{name:"boolean",required:!1}},{key:"periodenErForeldet",value:{name:"boolean",required:!1}},{key:"foreldetBegrunnelse",value:{name:"string",required:!1}},{key:"vurderingBegrunnelse",value:{name:"string",required:!0}},{key:"harMerEnnEnYtelse",value:{name:"boolean",required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FEIL_OPPLYSNINGER: InitialValuesAktsomhetForm;
  FORSTO_BURDE_FORSTAATT: InitialValuesAktsomhetForm;
  MANGELFULL_OPPLYSNING: InitialValuesAktsomhetForm;
  GOD_TRO: InitialValuesGodTroForm;
}`,signature:{properties:[{key:"FEIL_OPPLYSNINGER",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"FORSTO_BURDE_FORSTAATT",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"MANGELFULL_OPPLYSNING",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"GOD_TRO",value:{name:"InitialValuesGodTroForm",required:!0}}]}},{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}],raw:"Pick<VilkårResultatMap, VilkårResultat>"}]}]}],raw:"CustomVilkarsVurdertePeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [K in KodeverkType]: KodeverkMedNavnTilbakekreving<K>[];
}`,signature:{properties:[{key:{name:"signature",type:"object",raw:`{
  Aktsomhet: Aktsomhet;
  HendelseType: HendelseType;
  SærligGrunn: SærligGrunn;
  VilkårResultat: VilkårResultat;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}},{key:"HendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"SærligGrunn",value:{name:"union",raw:`| 'GRAD_AV_UAKTSOMHET'
| 'HELT_ELLER_DELVIS_NAVS_FEIL'
| 'STOERRELSE_BELOEP'
| 'TID_FRA_UTBETALING'
| 'ANNET'`,elements:[{name:"literal",value:"'GRAD_AV_UAKTSOMHET'"},{name:"literal",value:"'HELT_ELLER_DELVIS_NAVS_FEIL'"},{name:"literal",value:"'STOERRELSE_BELOEP'"},{name:"literal",value:"'TID_FRA_UTBETALING'"},{name:"literal",value:"'ANNET'"}],required:!0}},{key:"VilkårResultat",value:{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},antallPerioderMedAksjonspunkt:{required:!0,tsType:{name:"number"},description:""}}};const Vn="_margin_1wl4t_1",ge={margin:Vn},Bn={danger:e.jsx($r,{}),success:e.jsx(Yr,{}),warning:e.jsx(Dr,{})},xn=(r,t)=>r.fom<t.fom?-1:r.fom>t.fom?1:0,Dn=r=>{const t=r.isGodkjent?"success":"danger";return r.isAksjonspunktOpen?"warning":t},Yn=(r=[])=>[...r].sort(xn).map(t=>({...t,status:Dn(t)})),$n=r=>r==="MORA"||r==="MMOR"?e.jsx(Hr,{width:20,height:20,color:"var(--ax-danger-500)"}):r==="FARA"?e.jsx(Jr,{width:20,height:20,color:"var(--ax-accent-700)"}):e.jsx(xr,{width:20,height:20}),gr=({perioder:r,valgtPeriode:t,setPeriode:n,relasjonsRolleType:a,relasjonsRolleTypeKodeverk:l})=>{const s=Y(),u=Yn(r),p=S=>{const j=r.find(b=>b.id===S);j&&n(j)},o=c(u[0].fom),g=c(u[u.length-1].tom),[m,k]=_.useState(o),[d,O]=_.useState(g),A=()=>{m.subtract(1,"month").isBefore(o)||(k(m.subtract(1,"month")),O(d.subtract(1,"month")))},w=()=>{d.add(1,"month").isAfter(g)||(k(m.add(1,"month")),O(d.add(1,"month")))},T=()=>{m.add(3,"month").isAfter(d)||(k(m.add(1,"month")),O(d.subtract(1,"month")))},G=()=>{d.add(1,"month").diff(m.subtract(1,"month"),"months")<36&&(k(m.subtract(1,"month")),O(d.add(1,"month")))};return e.jsxs(R,{gap:"space-16",children:[e.jsx(_e,{startDate:c(m).toDate(),endDate:c(d).add(1,"days").toDate(),children:e.jsx(_e.Row,{label:l.find(S=>S.kode===a)?.navn||"-",icon:$n(a),children:u.map(S=>e.jsx(_e.Period,{start:c(S.fom).toDate(),end:c(S.tom).toDate(),status:S.status,icon:Bn[S.status],onSelectPeriod:()=>p(S.id),isActive:t?.id===S.id,"aria-controls":"panel-tilbakekreving",id:S.id.toString()},S.id))})}),e.jsxs(f,{justify:"end",children:[e.jsx(F,{className:ge.margin,size:"small",icon:e.jsx(Mr,{"aria-hidden":!0}),onClick:T,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomInn"})}),e.jsx(F,{className:ge.margin,size:"small",icon:e.jsx(Br,{"aria-hidden":!0}),onClick:G,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ZoomUt"})}),e.jsx(F,{className:ge.margin,size:"small",icon:e.jsx(We,{"aria-hidden":!0}),onClick:A,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilVenstre"})}),e.jsx(F,{className:ge.margin,size:"small",icon:e.jsx(Xe,{"aria-hidden":!0}),onClick:w,variant:"primary-neutral",type:"button",title:s.formatMessage({id:"TilbakekrevingTimeline.ScrollTilHogre"})})]})]})};gr.__docgenInfo={description:`TilbakekrevingTimeLine

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
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"'MORA' | 'FARA' | 'MMOR' | 'DELTAKER'",elements:[{name:"literal",value:"'MORA'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'DELTAKER'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};c.extend(ln);const Ie=(r,t)=>c(r.fom).diff(c(t.fom)),ze=r=>!r.erForeldet&&(r.begrunnelse===void 0||r.erSplittet),zn=r=>{const t=r[r.valgtVilkarResultatType];if("tilbakekrevdBelop"in t)return{...r,[r.valgtVilkarResultatType]:{...Ae(t,"tilbakekrevdBelop")}};if("handletUaktsomhetGrad"in t){const n=t[t.handletUaktsomhetGrad];if(n&&n.belopSomSkalTilbakekreves)return{...r,[r.valgtVilkarResultatType]:{...t,[t.handletUaktsomhetGrad]:{...Ae(n,"belopSomSkalTilbakekreves")}}}}return r},Cn=(r,t=[])=>t.map((n,a)=>{const l=r.find(p=>p.fom===n.fom&&p.tom===n.tom),s=l&&l[l.valgtVilkarResultatType]?l[l.valgtVilkarResultatType].erBelopetIBehold:void 0,u=l?!!l.erSplittet:!1;return{fom:n.fom,tom:n.tom,isAksjonspunktOpen:!n.erForeldet&&(l?.begrunnelse===void 0||u),isGodkjent:!(n.erForeldet||s===!1),id:a}}),Tr=(r,t)=>t.find(n=>!c(r.fom).isBefore(c(n.fom))&&!c(r.tom).isAfter(c(n.tom))),Hn=(r,t)=>t.every(n=>!(c(r.fom).isSameOrBefore(c(n.tom))&&c(n.fom).isSameOrBefore(c(r.tom)))),Jn=(r,t,n)=>{const l=r.reduce((o,g)=>o+g.feilutbetaling,0)<n*4,u=t.vilkarsVurdertePerioder.map(o=>{const g=Tr(o,r);return{...g,harMerEnnEnYtelse:g&&g.ytelser.length>1,...Ae(o,"feilutbetalingBelop"),feilutbetaling:o.feilutbetalingBelop,erTotalBelopUnder4Rettsgebyr:l}});return{perioder:r.filter(o=>Hn(o,u)).map(o=>({...o,harMerEnnEnYtelse:o.ytelser.length>1,erTotalBelopUnder4Rettsgebyr:l})).concat(u)}},Wn=(r,t)=>{if(!(!r||!t))return t.map(n=>{const a=Tr(n,r.perioder),l=a.foreldelseVurderingType?a.foreldelseVurderingType===Fe.FORELDET:a.foreldet;return{redusertBeloper:a.redusertBeloper,ytelser:a.ytelser,feilutbetaling:n.feilutbetaling?n.feilutbetaling:a.feilutbetaling,erTotalBelopUnder4Rettsgebyr:a.erTotalBelopUnder4Rettsgebyr,fom:n.fom,tom:n.tom,årsak:a.årsak,begrunnelse:a.begrunnelse,erForeldet:l||!1}})},Xn=(r,t)=>{const{vilkarResultat:n,begrunnelse:a,vilkarResultatInfo:l}=r,s=n?.kode??n;let u;const p=r.erForeldet??r.foreldet;if(p){const k=t.perioder.find(d=>d.fom===r.fom&&d.tom===r.tom);u={erForeldet:p,periodenErForeldet:!0,foreldetBegrunnelse:k?ce(k.begrunnelse):void 0}}else u={erForeldet:!1,periodenErForeldet:void 0,foreldetBegrunnelse:void 0};const o={valgtVilkarResultatType:s,begrunnelse:ce(a),harMerEnnEnYtelse:r.ytelser.length>1,...u},g=s==="GOD_TRO"?ae.buildIntialValues(l):{},m=s!==void 0&&s!=="GOD_TRO"?te.buildInitalValues(l):{};return{...o,vurderingBegrunnelse:l?ce(l.begrunnelse):void 0,[o.valgtVilkarResultatType]:{...g,...m}}},Zn=(r,t)=>{const{valgtVilkarResultatType:n,begrunnelse:a,vurderingBegrunnelse:l}=r,s=r[n],u=n==="GOD_TRO"&&"erBelopetIBehold"in s?ae.transformValues(s,l):{},p=n!=="GOD_TRO"&&"handletUaktsomhetGrad"in s?te.transformValues(s,t,l):{};return{begrunnelse:a,fom:r.fom,tom:r.tom,vilkarResultat:n,vilkarResultatInfo:{...u,...p}}},Qn=(r,t)=>r.perioder.map(n=>({...Xn(n,t),fom:n.fom,tom:n.tom})).sort(Ie),et=(r,t)=>({kode:Le.VURDER_TILBAKEKREVING,vilkarsVurdertePerioder:r.filter(n=>!n.erForeldet).map(n=>Zn(n,t))}),rt=r=>{if(!r||r.reduce((a,l)=>l.erForeldet?a:a+1,0)<2)return;const n=r.reduce((a,l)=>{const{valgtVilkarResultatType:s}=l,u=l[s];if("handletUaktsomhetGrad"in u){const{handletUaktsomhetGrad:p}=u,o=u[p];if(o)return o.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr===!1?a+1:a}return a},0);if(n>0&&n!==r.length)return"TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr"},vr=({perioderForeldelse:r,kodeverkSamlingFpTilbake:t,vilkarvurderingsperioder:n,submitCallback:a,isReadOnly:l,alleMerknaderFraBeslutter:s,vilkarvurdering:u,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:o,beregnBelop:g,behandlingUuid:m,formData:k,setFormData:d})=>{const O=n.perioder,A=n.rettsgebyr,w=Jn(O,u,A),[T,G]=_.useState(k||Qn(w,r)),[S,j]=_.useState(!!k),[b,N]=_.useState(T?.find(ze)),[me,z]=_.useState(!1),[C,Re]=_.useState();_.useEffect(()=>{Re(rt(T))},[T]);const le=Wn(w,T),Ee=T.reduce((y,E)=>E.erForeldet?y:y+1,0),he=s[Le.VURDER_TILBAKEKREVING],fe=()=>{z(!0),a(et(T,t.SærligGrunn))},H=Cn(T,le),v=H.some(y=>y.isAksjonspunktOpen),I=b?H.find(y=>y.fom===b.fom&&y.tom===b.tom):void 0,q=y=>{const E=y?T.find(L=>L.fom===y.fom&&L.tom===y.tom):void 0;N(E)},V=()=>{const y=T.findIndex(E=>E.fom===b?.fom&&E.tom===b?.tom);q(T[y+1])},B=()=>{const y=T.findIndex(E=>E.fom===b?.fom&&E.tom===b?.tom);q(T[y-1])},Q=()=>{q(void 0)},J=y=>{const E=Ae(y,"erSplittet"),de=T.filter(X=>X.fom!==E.fom&&X.tom!==E.tom).concat(E).sort(Ie);G(de),d(de),j(!0),Q();const ie=de.find(ze);ie&&q(ie)},U=y=>{const E=T.find(L=>L.fom===b?.fom&&L.tom===b?.tom);if(E){const L=y.map(X=>({...zn(E),...X,erSplittet:!0})),ie=T.filter(X=>X.fom!==b?.fom&&X.tom!==b?.tom).concat(L).sort(Ie);Q(),j(!0),G(ie),d(ie),q(L[0])}},W=le?le.find(y=>y.fom===b?.fom&&y.tom===b?.tom):void 0;return e.jsx(Pr,{merknaderFraBeslutter:he,withoutBorder:!0,children:e.jsxs(R,{gap:"space-16",children:[e.jsx(ye,{size:"small",level:"2",children:e.jsx(i,{id:"Behandlingspunkt.Tilbakekreving"})}),v&&e.jsx(Fr,{children:e.jsx(i,{id:"TilbakekrevingForm.AksjonspunktHjelpetekst"})}),T&&e.jsxs(e.Fragment,{children:[e.jsx(gr,{perioder:H,valgtPeriode:I,setPeriode:q,relasjonsRolleType:p,relasjonsRolleTypeKodeverk:o}),b&&W&&e.jsx("div",{id:"panel-tilbakekreving","aria-controls":I?.id.toString(),children:e.jsx(qr.New,{borderWidth:"1",padding:"4",children:e.jsxs(R,{gap:"space-16",children:[e.jsx(tr,{setNestePeriode:V,setForrigePeriode:B,periode:W,readOnly:l,oppdaterSplittedePerioder:U,behandlingUuid:m,beregnBelop:g,lukkPeriode:Q}),e.jsx(ar,{feilutbetaling:W.feilutbetaling,fom:W.fom,tom:W.tom,arsakHendelseNavn:t.HendelseType.find(y=>y.kode===W.årsak?.hendelseType)?.navn}),e.jsx(pr,{periode:b,data:W,antallPerioderMedAksjonspunkt:Ee,readOnly:l||b?.erForeldet===!0,skjulPeriode:Q,oppdaterPeriode:J,kodeverkSamlingFpTilbake:t,vilkarsVurdertePerioder:T},I?.id)]})})})]}),C&&e.jsx(Je,{variant:"error",children:e.jsx(i,{id:C})}),e.jsx("div",{children:e.jsx(Gr,{isReadOnly:l||b?.erForeldet===!0,isDirty:S,isSubmittable:!v&&!b&&!C,onClick:fe,isSubmitting:me})})]})})};vr.__docgenInfo={description:`TilbakekrevingForm

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
  VilkårResultat: VilkårResultat;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}},{key:"HendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"SærligGrunn",value:{name:"union",raw:`| 'GRAD_AV_UAKTSOMHET'
| 'HELT_ELLER_DELVIS_NAVS_FEIL'
| 'STOERRELSE_BELOEP'
| 'TID_FRA_UTBETALING'
| 'ANNET'`,elements:[{name:"literal",value:"'GRAD_AV_UAKTSOMHET'"},{name:"literal",value:"'HELT_ELLER_DELVIS_NAVS_FEIL'"},{name:"literal",value:"'STOERRELSE_BELOEP'"},{name:"literal",value:"'TID_FRA_UTBETALING'"},{name:"literal",value:"'ANNET'"}],required:!0}},{key:"VilkårResultat",value:{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
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
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"hendelseUndertype",value:{name:"union",raw:"'IKKE_INNTEKT' | 'IKKE_YRKESAKTIV' | 'OKONOMI_FEIL_TREKK' | 'IKKE_BOSATT'",elements:[{name:"literal",value:"'IKKE_INNTEKT'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'OKONOMI_FEIL_TREKK'"},{name:"literal",value:"'IKKE_BOSATT'"}],required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"'MORA' | 'FARA' | 'MMOR' | 'DELTAKER'",elements:[{name:"literal",value:"'MORA'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'DELTAKER'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
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
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"intersection",raw:`{
  valgtVilkarResultatType: VilkårResultat;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
} & Pick<VilkårResultatMap, VilkårResultat>`,elements:[{name:"signature",type:"object",raw:`{
  valgtVilkarResultatType: VilkårResultat;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
}`,signature:{properties:[{key:"valgtVilkarResultatType",value:{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erForeldet",value:{name:"boolean",required:!1}},{key:"periodenErForeldet",value:{name:"boolean",required:!1}},{key:"foreldetBegrunnelse",value:{name:"string",required:!1}},{key:"vurderingBegrunnelse",value:{name:"string",required:!0}},{key:"harMerEnnEnYtelse",value:{name:"boolean",required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FEIL_OPPLYSNINGER: InitialValuesAktsomhetForm;
  FORSTO_BURDE_FORSTAATT: InitialValuesAktsomhetForm;
  MANGELFULL_OPPLYSNING: InitialValuesAktsomhetForm;
  GOD_TRO: InitialValuesGodTroForm;
}`,signature:{properties:[{key:"FEIL_OPPLYSNINGER",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"FORSTO_BURDE_FORSTAATT",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"MANGELFULL_OPPLYSNING",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"GOD_TRO",value:{name:"InitialValuesGodTroForm",required:!0}}]}},{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}],raw:"Pick<VilkårResultatMap, VilkårResultat>"}]}]}],raw:"CustomVilkarsVurdertePeriode[]"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: CustomVilkarsVurdertePeriode[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
} & InitialValuesDetailForm`,elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  erSplittet?: boolean;
  feilutbetaling?: number;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"erSplittet",value:{name:"boolean",required:!1}},{key:"feilutbetaling",value:{name:"number",required:!1}}]}},{name:"intersection",raw:`{
  valgtVilkarResultatType: VilkårResultat;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
} & Pick<VilkårResultatMap, VilkårResultat>`,elements:[{name:"signature",type:"object",raw:`{
  valgtVilkarResultatType: VilkårResultat;
  begrunnelse: string;
  erForeldet?: boolean;
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
  vurderingBegrunnelse: string;
  harMerEnnEnYtelse: boolean;
}`,signature:{properties:[{key:"valgtVilkarResultatType",value:{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erForeldet",value:{name:"boolean",required:!1}},{key:"periodenErForeldet",value:{name:"boolean",required:!1}},{key:"foreldetBegrunnelse",value:{name:"string",required:!1}},{key:"vurderingBegrunnelse",value:{name:"string",required:!0}},{key:"harMerEnnEnYtelse",value:{name:"boolean",required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FEIL_OPPLYSNINGER: InitialValuesAktsomhetForm;
  FORSTO_BURDE_FORSTAATT: InitialValuesAktsomhetForm;
  MANGELFULL_OPPLYSNING: InitialValuesAktsomhetForm;
  GOD_TRO: InitialValuesGodTroForm;
}`,signature:{properties:[{key:"FEIL_OPPLYSNINGER",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"FORSTO_BURDE_FORSTAATT",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"MANGELFULL_OPPLYSNING",value:{name:"intersection",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
} & Pick<AktomhetMap, Aktsomhet>`,elements:[{name:"signature",type:"object",raw:`{
  handletUaktsomhetGrad: Aktsomhet;
}`,signature:{properties:[{key:"handletUaktsomhetGrad",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}}]}},{name:"Pick",elements:[{name:"signature",type:"object",raw:`{
  FORSETT?: AktsomhetData;
  GROVT_UAKTSOM?: AktsomhetData;
  SIMPEL_UAKTSOM?: AktsomhetData;
}`,signature:{properties:[{key:"FORSETT",value:{name:"AktsomhetData",required:!1}},{key:"GROVT_UAKTSOM",value:{name:"AktsomhetData",required:!1}},{key:"SIMPEL_UAKTSOM",value:{name:"AktsomhetData",required:!1}}]}},{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}],raw:"Pick<AktomhetMap, Aktsomhet>"}],required:!0}},{key:"GOD_TRO",value:{name:"InitialValuesGodTroForm",required:!0}}]}},{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}],raw:"Pick<VilkårResultatMap, VilkårResultat>"}]}]}],raw:"CustomVilkarsVurdertePeriode[]"},name:"data"}],return:{name:"void"}}},description:""}}};const nt=jr(rr),cr=r=>e.jsx(Ir,{value:nt,children:e.jsx(vr,{...r})});cr.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingProsessIndex",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},perioderForeldelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"hendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"hendelseUndertype",value:{name:"union",raw:"'IKKE_INNTEKT' | 'IKKE_YRKESAKTIV' | 'OKONOMI_FEIL_TREKK' | 'IKKE_BOSATT'",elements:[{name:"literal",value:"'IKKE_INNTEKT'"},{name:"literal",value:"'IKKE_YRKESAKTIV'"},{name:"literal",value:"'OKONOMI_FEIL_TREKK'"},{name:"literal",value:"'IKKE_BOSATT'"}],required:!1}}]},required:!0}},{key:"feilutbetaling",value:{name:"number",required:!0}},{key:"ytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  VilkårResultat: VilkårResultat;
}`,signature:{properties:[{key:"Aktsomhet",value:{name:"union",raw:"'FORSETT' | 'GROVT_UAKTSOM' | 'SIMPEL_UAKTSOM'",elements:[{name:"literal",value:"'FORSETT'"},{name:"literal",value:"'GROVT_UAKTSOM'"},{name:"literal",value:"'SIMPEL_UAKTSOM'"}],required:!0}},{key:"HendelseType",value:{name:"union",raw:"'MEDLEMSKAP' | 'OKONOMI_FEIL' | 'BEREGNING_TYPE'",elements:[{name:"literal",value:"'MEDLEMSKAP'"},{name:"literal",value:"'OKONOMI_FEIL'"},{name:"literal",value:"'BEREGNING_TYPE'"}],required:!0}},{key:"SærligGrunn",value:{name:"union",raw:`| 'GRAD_AV_UAKTSOMHET'
| 'HELT_ELLER_DELVIS_NAVS_FEIL'
| 'STOERRELSE_BELOEP'
| 'TID_FRA_UTBETALING'
| 'ANNET'`,elements:[{name:"literal",value:"'GRAD_AV_UAKTSOMHET'"},{name:"literal",value:"'HELT_ELLER_DELVIS_NAVS_FEIL'"},{name:"literal",value:"'STOERRELSE_BELOEP'"},{name:"literal",value:"'TID_FRA_UTBETALING'"},{name:"literal",value:"'ANNET'"}],required:!0}},{key:"VilkårResultat",value:{name:"union",raw:"'FORSTO_BURDE_FORSTAATT' | 'FEIL_OPPLYSNINGER' | 'MANGELFULL_OPPLYSNING' | 'GOD_TRO'",elements:[{name:"literal",value:"'FORSTO_BURDE_FORSTAATT'"},{name:"literal",value:"'FEIL_OPPLYSNINGER'"},{name:"literal",value:"'MANGELFULL_OPPLYSNING'"},{name:"literal",value:"'GOD_TRO'"}],required:!0}}]},required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>`}],raw:"KodeverkMedNavnTilbakekreving<K>[]"}}]}},description:""},alleMerknaderFraBeslutter:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [key: string]: { notAccepted?: boolean } }",signature:{properties:[{key:{name:"string"},value:{name:"signature",type:"object",raw:"{ notAccepted?: boolean }",signature:{properties:[{key:"notAccepted",value:{name:"boolean",required:!1}}]},required:!0}}]}},description:""},relasjonsRolleType:{required:!0,tsType:{name:"union",raw:"'MORA' | 'FARA' | 'MMOR' | 'DELTAKER'",elements:[{name:"literal",value:"'MORA'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'DELTAKER'"}]},description:""},relasjonsRolleTypeKodeverk:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: T;
  navn: string;
}`,signature:{properties:[{key:"kode",value:{name:"union",raw:"'MORA' | 'FARA' | 'MMOR' | 'DELTAKER'",elements:[{name:"literal",value:"'MORA'"},{name:"literal",value:"'FARA'"},{name:"literal",value:"'MMOR'"},{name:"literal",value:"'DELTAKER'"}],required:!0}},{key:"navn",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: T;
  navn: string;
}>`}],raw:"KodeverkMedNavn<RelasjonsRolleType>[]"},description:""}}};const{action:tt}=__STORYBOOK_MODULE_ACTIONS__,at=Ur(rr),lt={perioder:[{fom:"2019-01-01",tom:"2019-02-02",belop:1e3,foreldelseVurderingType:Fe.IKKE_FORELDET},{fom:"2019-02-03",tom:"2019-04-02",belop:3e3,foreldelseVurderingType:Fe.FORELDET}]},br={perioder:[{fom:"2019-01-01",tom:"2019-04-01",foreldet:!1,feilutbetaling:10,årsak:{hendelseType:"MEDLEMSKAP"},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:1050}]}],rettsgebyr:1e3},yt={component:cr,decorators:[at],args:{submitCallback:tt("submit"),behandlingUuid:"1",kodeverkSamlingFpTilbake:Lr,isReadOnly:!1,setFormData:()=>{},perioderForeldelse:lt,vilkarvurdering:{vilkarsVurdertePerioder:[]},beregnBelop:()=>Promise.resolve({perioder:[{belop:1e4},{belop:12e3}]}),alleMerknaderFraBeslutter:{},relasjonsRolleType:"MORA",relasjonsRolleTypeKodeverk:[{kode:"MORA",navn:"Mor"}]}},Te={args:{vilkarvurderingsperioder:br}},ve={args:{vilkarvurderingsperioder:{perioder:[br.perioder[0],{fom:"2019-04-01",tom:"2019-10-01",foreldet:!1,feilutbetaling:100,årsak:{hendelseType:"MEDLEMSKAP"},redusertBeloper:[],ytelser:[{aktivitet:"Arbeidstaker",belop:2050}]}],rettsgebyr:1e3}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: defaultVilkarvurderingsperioder
  }
}`,...Te.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  args: {
    vilkarvurderingsperioder: {
      perioder: [defaultVilkarvurderingsperioder.perioder[0], {
        fom: '2019-04-01',
        tom: '2019-10-01',
        foreldet: false,
        feilutbetaling: 100,
        årsak: {
          hendelseType: 'MEDLEMSKAP'
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
}`,...ve.parameters?.docs?.source}}};const Ot=["Default","MedToPerioder"];export{Te as Default,ve as MedToPerioder,Ot as __namedExportsOrder,yt as default};
