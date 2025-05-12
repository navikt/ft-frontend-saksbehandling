import{a as Z}from"./index-B-lxVbXh.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as ee,O as re,Y as te}from"./index.es-bvI9ibP-.js";import{a as ne}from"./alleTilbakekrevingKodeverk-dIUSSyeF.js";import{e as ie,a as ae,N as _,o as O,I as U,j as se,d as le}from"./style-j4lPI8dA.js";import{u as M,d as ue,G as oe,C as c,P as de,r as ke}from"./index.es-D-bTLu-p.js";import{r as V,e as ge}from"./index-DNHX5htx.js";import{u as me,b as ve}from"./index.esm-FZjZzVNN.js";import{c as pe}from"./index-DFtWylL1.js";import{S as be}from"./PlusCircle-Bh9z4REp.js";import{D as L,H as K,L as B,a as b}from"./Label-CYbek38p.js";import{M as m}from"./message-DRmKFRPQ.js";import{V as T,H as S}from"./VStack-xkjQwvKn.js";import"./Theme-C_brBVJK.js";import{E as h}from"./ExpansionCard-ypp3LTjM.js";import{S as fe}from"./ExclamationmarkTriangleFill-DrBUO71d.js";import{n as ye}from"./index.es-G1pRqW5a.js";import{T as s}from"./Table-CAbNZsjR.js";/* empty css              */import"./v4-CtRu48qb.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Button-Cc809GDC.js";import"./Loader-42dkOmtz.js";import"./omit-B7stZg_p.js";import"./useId-CsAOvYkp.js";import"./Provider-BZs7ODlm.js";import"./Checkbox-BaSR81FM.js";import"./ReadOnlyIcon-BUzfiMc5.js";import"./useId-SP_zdaIa.js";import"./useFormField-Bu2NUIkp.js";import"./Fieldset-B4jGbpi0.js";import"./Tag-ntoonGP8.js";import"./Textarea-BjE6whUD.js";import"./index-DU09BupE.js";import"./index-7Fg4giie.js";import"./useClientLayoutEffect-pkze6c0k.js";import"./Select-CvyZY3UD.js";import"./ChevronDown-6T9JsqER.js";import"./Radio-Pmn7OwXu.js";import"./useDatepicker-Cb-Ak60T.js";import"./Date.Input-D651xWgA.js";import"./DatePicker-BW3IWtn9.js";import"./useControllableState-CEDyyUuG.js";import"./Modal-OqvqWSjt.js";import"./floating-ui.react-CQaPAoM5.js";import"./XMark-6H9iuGiv.js";import"./Popover-w-TwxTI4.js";import"./TextField-DY81zaLa.js";import"./BasePrimitive-gBgyIEwX.js";import"./Alert-Ja4tf6sE.js";import"./XMarkOctagonFill-Dr7RQDrl.js";import"./PersonPencilFill-DqunLdn1.js";import"./Box-C3b4VC_S.js";import"./KeyVerticalFill-DmgzHF4Z.js";var E=(n=>(n.FORSETT="FORSETT",n.GROVT_UAKTSOM="GROVT_UAKTSOM",n.SIMPEL_UAKTSOM="SIMPEL_UAKTSOM",n))(E||{});const v={OPPSUMMERING:"OPPSUMMERING",FAKTA:"FAKTA",FORELDELSE:"FORELDELSE",VILKAR:"VILKÅR",SARLIGEGRUNNER:"SÆRLIGEGRUNNER",SARLIGEGRUNNER_ANNET:"SÆRLIGEGRUNNER_ANNET"};var C=(n=>(n.FORESLA_VEDTAK="5004",n))(C||{});const ce="_addCircleIcon_84ecs_1",Te="_imageText_84ecs_7",qe="_addPeriode_84ecs_12",w={addCircleIcon:ce,imageText:Te,addPeriode:qe},H=ae(3),Ae=O(4e3),he=[H,_],je=[ie,H,_],z=({type:n,readOnly:i,fritekstPakrevet:t,maximumLength:r})=>{const a=M(),{watch:u}=me(),l=u(n)===void 0,[k,d]=V.useState(l&&!t),g=t?je:he;return g.push(r?O(r):Ae),e.jsxs(e.Fragment,{children:[k&&!i&&e.jsx(e.Fragment,{children:e.jsxs("div",{onClick:p=>{p.preventDefault(),d(!1)},onKeyDown:p=>{p.preventDefault(),d(!1)},className:w.addPeriode,role:"button",tabIndex:0,children:[e.jsx(be,{className:w.addCircleIcon,title:a.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})}),e.jsx(L,{size:"small",className:w.imageText,children:e.jsx(m,{id:"TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst"})})]})}),!k&&e.jsx(ee,{name:n,label:a.formatMessage({id:"TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst"}),validate:g,maxLength:r||4e3,readOnly:i})]})};z.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakUtdypendeTekstPanel",props:{type:{required:!0,tsType:{name:"string"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fritekstPakrevet:{required:!1,tsType:{name:"boolean"},description:""},maximumLength:{required:!1,tsType:{name:"number"},description:""}}};const Pe="_container_aetpe_1",Re="_gulmarkering_aetpe_4",G={container:Pe,gulmarkering:Re},P=({intl:n,vedtaksbrevAvsnitt:i,readOnly:t,perioderSomIkkeHarUtfyltObligatoriskVerdi:r,fritekstOppsummeringPakrevdMenIkkeUtfylt:a=!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:u})=>e.jsxs(T,{gap:"2",className:G.container,children:[e.jsx(K,{size:"small",children:e.jsx(m,{id:"TilbakekrevingVedtak.Vedtaksbrev"})}),i.map(l=>{const k=l.underavsnittsliste,d=`${l.fom}_${l.tom}`,g=r.some(o=>o===d),p=l.avsnittstype===v.OPPSUMMERING&&a;return e.jsx(ge.Fragment,{children:e.jsxs(h,{"aria-label":"periode",defaultOpen:g||p,className:g||p?G.gulmarkering:"",children:[e.jsx(h.Header,{children:e.jsx(h.Title,{size:"small",children:l.overskrift?l.overskrift:n.formatMessage({id:"TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift"})})}),e.jsx(h.Content,{children:e.jsx(T,{gap:"2",children:k.map(o=>e.jsxs(T,{gap:"2",children:[o.overskrift&&e.jsx(B,{size:"small",children:o.overskrift}),o.brødtekst&&e.jsx(b,{size:"small",children:o.brødtekst}),o.fritekstTillatt&&e.jsx(e.Fragment,{children:e.jsx(z,{type:o.underavsnittstype?`${d}.${o.underavsnittstype}`:l.avsnittstype,readOnly:t,fritekstPakrevet:o.fritekstPåkrevet,maximumLength:u?1e4:void 0})})]},(o.underavsnittstype||"")+o.overskrift+o.brødtekst))})})]})},l.avsnittstype+l.fom)})]});P.buildInitialValues=n=>n.filter(i=>i.underavsnittsliste.some(t=>t.fritekst)).reduce((i,t)=>{const a=t.underavsnittsliste.filter(l=>l.fritekst).reduce((l,k)=>({...l,[k.underavsnittstype?k.underavsnittstype:t.avsnittstype]:ue(k.fritekst)}),{}),u=t.fom?{[`${t.fom}_${t.tom}`]:a}:a;return{...i,...u}},{});P.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"vedtaksbrevAvsnitt",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"string",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"}}],returns:{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"}}}],displayName:"TilbakekrevingEditerVedtaksbrevPanel",props:{intl:{required:!0,tsType:{name:"IntlShape"},description:""},vedtaksbrevAvsnitt:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"string",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},perioderSomIkkeHarUtfyltObligatoriskVerdi:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},fritekstOppsummeringPakrevdMenIkkeUtfylt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""}}};const we="_buttonLink_sudxz_1",xe="_padding_sudxz_8",Ve="_infoTextIcon_sudxz_14",x={buttonLink:we,padding:xe,infoTextIcon:Ve},Y=n=>{const i=oe(n,v.OPPSUMMERING);return{oppsummeringstekst:n[v.OPPSUMMERING],perioderMedTekst:Object.keys(i).map(t=>({fom:t.split("_")[0],tom:t.split("_")[1],faktaAvsnitt:i[t][v.FAKTA],foreldelseAvsnitt:i[t][v.FORELDELSE],vilkaarAvsnitt:i[t][v.VILKAR],saerligeGrunnerAvsnitt:i[t][v.SARLIGEGRUNNER],saerligeGrunnerAnnetAvsnitt:i[t][v.SARLIGEGRUNNER_ANNET]}))}},Be=(n,i)=>n.some(t=>t.avsnittstype===v.OPPSUMMERING&&t.underavsnittsliste.some(r=>r.fritekstPåkrevet)&&!i[v.OPPSUMMERING]),Ee=n=>({kode:C.FORESLA_VEDTAK,...Y(n)}),Se=(n,i)=>n.reduce((t,r)=>{const a=`${r.fom}_${r.tom}`,u=i[a];return r.underavsnittsliste.some(d=>d.fritekstPåkrevet&&d.underavsnittstype===v.FAKTA)&&(!u||!u[v.FAKTA])||r.underavsnittsliste.some(d=>d.fritekstPåkrevet&&d.underavsnittstype===v.SARLIGEGRUNNER_ANNET)&&(!u||!u[v.SARLIGEGRUNNER_ANNET])?t.concat(a):t},[]),N=(n,i,t)=>r=>{n({uuid:i,...Y(t)}),r.preventDefault()},$=({submitCallback:n,readOnly:i,fetchPreviewVedtaksbrev:t,avsnittsliste:r,behandlingUuid:a,erRevurderingTilbakekrevingKlage:u,erRevurderingTilbakekrevingFeilBeløpBortfalt:l,formData:k,setFormData:d})=>{const g=r,p=V.useMemo(()=>k||P.buildInitialValues(g),[k,g]),o=M(),f=ve({defaultValues:p}),y=f.watch(),R=Be(g,y),q=Se(g,y),X=R||q.length>0;return e.jsx(re,{formMethods:f,onSubmit:A=>n(Ee(A)),setDataOnUnmount:d,children:e.jsxs(T,{gap:"4",children:[e.jsx(P,{intl:o,vedtaksbrevAvsnitt:g,readOnly:i,perioderSomIkkeHarUtfyltObligatoriskVerdi:V.useMemo(()=>q,[]),fritekstOppsummeringPakrevdMenIkkeUtfylt:R,erRevurderingTilbakekrevingFeilBeløpBortfalt:l}),e.jsxs(S,{gap:"10",children:[e.jsx(te,{text:o.formatMessage({id:"TilbakekrevingVedtakForm.TilGodkjenning"}),isReadOnly:i,isSubmittable:q.length===0&&!R,isSubmitting:f.formState.isSubmitting,isDirty:f.formState.isDirty,hasErrors:X}),q.length===0&&e.jsx("div",{className:x.padding,children:e.jsx("a",{href:"",onClick:N(t,a,y),onKeyDown:A=>A.key==="Enter"?N(t,a,y)(A):null,className:pe(x.buttonLink,"lenke lenke--frittstaende"),children:e.jsx(m,{id:"TilbakekrevingVedtakForm.ForhandvisBrev"})})})]}),u&&e.jsxs(S,{children:[e.jsx(fe,{className:x.infoTextIcon}),e.jsx(m,{id:"TilbakekrevingVedtakForm.Infotekst.Klage"})]})]})})};$.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakForm",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
  oppsummeringstekst?: string;
} & AksjonspunktTilBekreftelse<VedtakAksjonspunktCode.FORESLA_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
  oppsummeringstekst?: string;
}`,signature:{properties:[{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!0}},{key:"vilkaarAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}[]`,required:!0}},{key:"oppsummeringstekst",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},avsnittsliste:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"string",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<any>",signature:{arguments:[{type:{name:"intersection",raw:`{
  uuid: string;
} & VedtakData`,elements:[{name:"signature",type:"object",raw:`{
  uuid: string;
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  oppsummeringstekst: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    foreldelseAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!0}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!0}},{key:"foreldelseAvsnitt",value:{name:"string",required:!0}},{key:"vilkaarAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},name:"data"}],return:{name:"void"}}},description:""}}};const Ge="_table_gko8z_1",Ne={table:Ge},J=({perioder:n,kodeverkSamlingFpTilbake:i})=>{const t=n.map(r=>{var a;return e.jsxs(s.Row,{children:[e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:e.jsx(ye,{dateStringFom:r.periode.fom,dateStringTom:r.periode.tom})})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:c(r.feilutbetaltBeløp)})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:(a=i[U.AKTSOMHET].find(u=>u.kode===r.vurdering))==null?void 0:a.navn})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:r.andelAvBeløp!==void 0&&r.andelAvBeløp!==null?`${r.andelAvBeløp}%`:""})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:r.renterProsent?`${r.renterProsent}%`:""})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:c(r.tilbakekrevingBeløp)})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:c(r.tilbakekrevingBeløpEtterSkatt)})})]},r.periode.fom)}).concat(e.jsxs(s.Row,{children:[e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.Sum"})})}),e.jsx(s.DataCell,{children:e.jsx(b,{size:"small",children:c(n.reduce((r,a)=>r+a.feilutbetaltBeløp,0))})}),e.jsx(s.DataCell,{}),e.jsx(s.DataCell,{}),e.jsx(s.DataCell,{}),e.jsx(s.DataCell,{children:e.jsx(B,{size:"small",children:c(n.reduce((r,a)=>r+a.tilbakekrevingBeløp,0))})}),e.jsx(s.DataCell,{children:e.jsx(B,{size:"small",children:c(n.reduce((r,a)=>r+a.tilbakekrevingBeløpEtterSkatt,0))})})]},"sum"));return e.jsx("div",{className:Ne.table,children:e.jsxs(s,{children:[e.jsx(s.Header,{children:e.jsxs(s.Row,{children:[e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.Periode"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.Vurdering"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.AndelAvBelop"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.Renter"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.ForSkatt"})}),e.jsx(s.HeaderCell,{scope:"col",children:e.jsx(m,{id:"TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves"})})]})}),e.jsx(s.Body,{children:t})]})})};J.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtakPeriodeTabell",props:{perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  vurdering: string;
  feilutbetaltBeløp: number;
  andelAvBeløp: number;
  renterProsent: number;
  manueltSattTilbakekrevingsbeløp: number;
  tilbakekrevingBeløpUtenRenter: number;
  renteBeløp: number;
  tilbakekrevingBeløp: number;
  skattBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
  utbetaltYtelseBeløp: number;
  riktigYtelseBeløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"manueltSattTilbakekrevingsbeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpUtenRenter",value:{name:"number",required:!0}},{key:"renteBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"skattBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}},{key:"utbetaltYtelseBeløp",value:{name:"number",required:!0}},{key:"riktigYtelseBeløp",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""}}};const Q=({submitCallback:n,readOnly:i,resultat:t,perioder:r,kodeverkSamlingFpTilbake:a,behandlingUuid:u,avsnittsliste:l,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:d,erRevurderingTilbakekrevingFeilBeløpBortfalt:g,formData:p,setFormData:o})=>{var f;return e.jsxs(T,{gap:"4",children:[e.jsx(K,{size:"small",children:e.jsx(m,{id:"TilbakekrevingVedtak.Vedtak"})}),e.jsxs("div",{children:[e.jsx(L,{children:e.jsx(m,{id:"TilbakekrevingVedtak.Resultat"})}),e.jsx(b,{size:"small",children:(f=a[U.VEDTAK_RESULTAT_TYPE].find(y=>y.kode===t))==null?void 0:f.navn})]}),e.jsx(J,{perioder:r,kodeverkSamlingFpTilbake:a}),e.jsx($,{submitCallback:n,readOnly:i,behandlingUuid:u,avsnittsliste:l,fetchPreviewVedtaksbrev:k,erRevurderingTilbakekrevingKlage:d,erRevurderingTilbakekrevingFeilBeløpBortfalt:g,formData:p,setFormData:o})]})};Q.__docgenInfo={description:"",methods:[],displayName:"TilbakekrevingVedtak",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
  oppsummeringstekst?: string;
} & AksjonspunktTilBekreftelse<VedtakAksjonspunktCode.FORESLA_VEDTAK>`,elements:[{name:"signature",type:"object",raw:`{
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
  oppsummeringstekst?: string;
}`,signature:{properties:[{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!0}},{key:"vilkaarAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}[]`,required:!0}},{key:"oppsummeringstekst",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  kode: T;
  begrunnelse?: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}]},name:"aksjonspunktData"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},resultat:{required:!0,tsType:{name:"string"},description:""},perioder:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  vurdering: string;
  feilutbetaltBeløp: number;
  andelAvBeløp: number;
  renterProsent: number;
  manueltSattTilbakekrevingsbeløp: number;
  tilbakekrevingBeløpUtenRenter: number;
  renteBeløp: number;
  tilbakekrevingBeløp: number;
  skattBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
  utbetaltYtelseBeløp: number;
  riktigYtelseBeløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"manueltSattTilbakekrevingsbeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpUtenRenter",value:{name:"number",required:!0}},{key:"renteBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"skattBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}},{key:"utbetaltYtelseBeløp",value:{name:"number",required:!0}},{key:"riktigYtelseBeløp",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]"},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},avsnittsliste:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"string",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]"},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ForhandsvisData) => Promise<any>",signature:{arguments:[{type:{name:"intersection",raw:`{
  uuid: string;
} & VedtakData`,elements:[{name:"signature",type:"object",raw:`{
  uuid: string;
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  oppsummeringstekst: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    foreldelseAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!0}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!0}},{key:"foreldelseAvsnitt",value:{name:"string",required:!0}},{key:"vilkaarAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}[]`,required:!0}}]}}]},name:"data"}],return:{name:"Promise",elements:[{name:"any"}],raw:"Promise<any>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!1,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!1,tsType:{name:"boolean"},description:""},formData:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},description:""},setFormData:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: FormValues) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"union",raw:"Record<string, string> | string",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"string"}]}],raw:"Record<string, Record<string, string> | string>"},name:"data"}],return:{name:"void"}}},description:""}}};const Fe={"TilbakekrevingVedtak.Resultat":"Resultat","TilbakekrevingVedtak.Vedtaksbrev":"Vedtaksbrev","TilbakekrevingVedtak.Vedtak":"Vedtak","TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst":"Legg til utdypende tekst","TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst":"Utdypende tekst","TilbakekrevingVedtakPeriodeTabell.Periode":"Periode","TilbakekrevingVedtakPeriodeTabell.FeilutbetaltBelop":"Feilutbetalt beløp","TilbakekrevingVedtakPeriodeTabell.Vurdering":"Vurdering","TilbakekrevingVedtakPeriodeTabell.AndelAvBelop":"Andel av beløp","TilbakekrevingVedtakPeriodeTabell.Renter":"Renter","TilbakekrevingVedtakPeriodeTabell.ForSkatt":"Beløp før skatt","TilbakekrevingVedtakPeriodeTabell.BelopSomTilbakekreves":"Beløp etter skatt","TilbakekrevingVedtakPeriodeTabell.Sum":"Sum","TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift":"Lovhjemler og klagerett","TilbakekrevingVedtakForm.TilGodkjenning":"Til godkjenning","TilbakekrevingVedtakForm.ForhandvisBrev":"Forhåndsvis brev","TilbakekrevingVedtakForm.Infotekst.Klage":"Vedtaksbrev sendes ikke ut fra denne behandlingen, men må sendes av saksbehandler fra klagebehandlingen"},De=ke(Fe),W=({behandling:n,beregningsresultat:i,isReadOnly:t,submitCallback:r,kodeverkSamlingFpTilbake:a,formData:u,setFormData:l,vedtaksbrev:k,fetchPreviewVedtaksbrev:d,erRevurderingTilbakekrevingKlage:g,erRevurderingTilbakekrevingFeilBeløpBortfalt:p})=>e.jsx(de,{value:De,children:e.jsx(Q,{behandlingUuid:n.uuid,perioder:i.beregningResultatPerioder,resultat:i.vedtakResultatType,avsnittsliste:k.avsnittsliste,submitCallback:r,readOnly:t,kodeverkSamlingFpTilbake:a,fetchPreviewVedtaksbrev:d,erRevurderingTilbakekrevingKlage:g,erRevurderingTilbakekrevingFeilBeløpBortfalt:p,formData:u,setFormData:l})});W.__docgenInfo={description:"",methods:[],displayName:"VedtakTilbakekrevingProsessIndex",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"readOnly",value:{name:"boolean",required:!0}}]},required:!1}}]}},description:""},beregningsresultat:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  beregningResultatPerioder: BeregningResultatPeriode[];
  vedtakResultatType: string;
}`,signature:{properties:[{key:"beregningResultatPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: {
    fom: string;
    tom: string;
  };
  vurdering: string;
  feilutbetaltBeløp: number;
  andelAvBeløp: number;
  renterProsent: number;
  manueltSattTilbakekrevingsbeløp: number;
  tilbakekrevingBeløpUtenRenter: number;
  renteBeløp: number;
  tilbakekrevingBeløp: number;
  skattBeløp: number;
  tilbakekrevingBeløpEtterSkatt: number;
  utbetaltYtelseBeløp: number;
  riktigYtelseBeløp: number;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]},required:!0}},{key:"vurdering",value:{name:"string",required:!0}},{key:"feilutbetaltBeløp",value:{name:"number",required:!0}},{key:"andelAvBeløp",value:{name:"number",required:!0}},{key:"renterProsent",value:{name:"number",required:!0}},{key:"manueltSattTilbakekrevingsbeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpUtenRenter",value:{name:"number",required:!0}},{key:"renteBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløp",value:{name:"number",required:!0}},{key:"skattBeløp",value:{name:"number",required:!0}},{key:"tilbakekrevingBeløpEtterSkatt",value:{name:"number",required:!0}},{key:"utbetaltYtelseBeløp",value:{name:"number",required:!0}},{key:"riktigYtelseBeløp",value:{name:"number",required:!0}}]}}],raw:"BeregningResultatPeriode[]",required:!0}},{key:"vedtakResultatType",value:{name:"string",required:!0}}]}},description:""},kodeverkSamlingFpTilbake:{required:!0,tsType:{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},description:""},vedtaksbrev:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  avsnittsliste: VedtaksbrevAvsnitt[];
}`,signature:{properties:[{key:"avsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avsnittstype: string;
  fom?: string;
  tom?: string;
  overskrift?: string;
  underavsnittsliste: {
    brødtekst?: string;
    fritekst?: string;
    fritekstTillatt: boolean;
    overskrift?: string;
    underavsnittstype?: string;
    fritekstPåkrevet?: boolean;
  }[];
}`,signature:{properties:[{key:"avsnittstype",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittsliste",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}`,signature:{properties:[{key:"brødtekst",value:{name:"string",required:!1}},{key:"fritekst",value:{name:"string",required:!1}},{key:"fritekstTillatt",value:{name:"boolean",required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"underavsnittstype",value:{name:"string",required:!1}},{key:"fritekstPåkrevet",value:{name:"boolean",required:!1}}]}}],raw:`{
  brødtekst?: string;
  fritekst?: string;
  fritekstTillatt: boolean;
  overskrift?: string;
  underavsnittstype?: string;
  fritekstPåkrevet?: boolean;
}[]`,required:!0}}]}}],raw:"VedtaksbrevAvsnitt[]",required:!0}}]}},description:""},fetchPreviewVedtaksbrev:{required:!0,tsType:{name:"signature",type:"function",raw:"(param: ForhandsvisData) => Promise<void>",signature:{arguments:[{type:{name:"intersection",raw:`{
  uuid: string;
} & VedtakData`,elements:[{name:"signature",type:"object",raw:`{
  uuid: string;
}`,signature:{properties:[{key:"uuid",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  oppsummeringstekst: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    foreldelseAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
}`,signature:{properties:[{key:"oppsummeringstekst",value:{name:"string",required:!0}},{key:"perioderMedTekst",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"faktaAvsnitt",value:{name:"string",required:!0}},{key:"foreldelseAvsnitt",value:{name:"string",required:!0}},{key:"vilkaarAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAvsnitt",value:{name:"string",required:!0}},{key:"saerligeGrunnerAnnetAvsnitt",value:{name:"string",required:!0}}]}}],raw:`{
  fom: string;
  tom: string;
  faktaAvsnitt: string;
  foreldelseAvsnitt: string;
  vilkaarAvsnitt: string;
  saerligeGrunnerAvsnitt: string;
  saerligeGrunnerAnnetAvsnitt: string;
}[]`,required:!0}}]}}]},name:"param"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erRevurderingTilbakekrevingKlage:{required:!0,tsType:{name:"boolean"},description:""},erRevurderingTilbakekrevingFeilBeløpBortfalt:{required:!0,tsType:{name:"boolean"},description:""}}};const Ie={avsnittsliste:[{overskrift:"Du må betale tilbake foreldrepenger",underavsnittsliste:[{brødtekst:"Vi varslet deg 31. oktober 2019 om at du har fått 49863 kroner for mye. Du må betale tilbake 22950 kroner, som er deler av det feilutbetalte beløpet.",fritekstTillatt:!0,fritekstPåkrevet:!1}],avsnittstype:"OPPSUMMERING"},{overskrift:"Gjelder perioden fra og med 16. mars 2016 til og med 26. mai 2016",underavsnittsliste:[{brødtekst:"Du er ikke medlem av folketrygden. Fordi du ikke har jobbet eller hatt familie som forsørget deg i Norge, har du ikke rett til opphold etter EØS avtalen. Derfor har du ikke rett til foreldrepenger.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"FAKTA"},{brødtekst:"Derfor har du fått 51000 kroner for mye utbetalt i denne perioden.",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"FAKTA"},{overskrift:"Hvordan har vi kommet fram til at du må betale tilbake?",brødtekst:"Du har fått vite om du har rett til foreldrepenger og hvor mye du har rett til. Selv om du har meldt fra til oss, kan vi kreve tilbake det du har fått for mye dersom du må ha forstått at beløpet var feil.",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{brødtekst:"Ut fra informasjonen du har fått, må du etter vår vurdering ha forstått at du fikk for mye utbetalt. Derfor kan vi kreve tilbake.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"VILKÅR"},{overskrift:"Er det særlige grunner til å redusere beløpet?",fritekstTillatt:!0,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER"},{brødtekst:"Vi har lagt vekt på at du må ha forstått at du fikk penger du ikke har rett til. Vi vurderer likevel at uaktsomheten din har vært så liten at vi har redusert beløpet du må betale tilbake. Det er i vurderingen også lagt vekt på ",fritekstTillatt:!0,fritekstPåkrevet:!0,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"},{brødtekst:"Du må betale 22950 kroner.",fritekstTillatt:!1,fritekstPåkrevet:!1,underavsnittstype:"SÆRLIGEGRUNNER_ANNET"}],avsnittstype:"PERIODE",fom:"2016-03-16",tom:"2016-05-26"},{underavsnittsliste:[{brødtekst:"Vedtaket er gjort etter folketrygdloven § 22-15 og foreldelsesloven §§ 2 og 3.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Skatt",brødtekst:"Nav gir opplysninger til skatteetaten når det feilutbetalte beløpet er tilbakebetalt. Skatteetaten vil da vurdere om det er grunnlag for å endre tidligere skatteoppgjør.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Hvordan betale tilbake pengene du skylder",brødtekst:"Vi har overført beløpet du skylder til Nav Innkreving, som vil sende deg et krav om å betale tilbake det feilutbetalte beløpet. Har du spørsmål om dette, kan du kontakte Nav Innkreving på telefon 21 05 11 00.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til å klage",brødtekst:"Du kan klage innen 6 uker fra den datoen du mottok vedtaket. Du finner skjema og informasjon på nav.no/klage.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Du må som hovedregel begynne å betale beløpet tilbake, selv om du klager på dette vedtaket. Dette følger av forvaltningsloven § 42. Hvis du får vedtak om at du ikke trengte å betale tilbake hele eller deler av beløpet du skyldte, betaler vi pengene tilbake til deg.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Du har rett til innsyn",brødtekst:"På nav.no/dittnav kan du se dokumentene i saken din.",fritekstTillatt:!1,fritekstPåkrevet:!1},{overskrift:"Har du spørsmål?",brødtekst:"Du finner nyttig informasjon på nav.no/familie. Du kan også kontakte oss på telefon 55 55 33 33.",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Med vennlig hilsen",fritekstTillatt:!1,fritekstPåkrevet:!1},{brødtekst:"Nav familie- og pensjonsytelser",fritekstTillatt:!1,fritekstPåkrevet:!1}],avsnittstype:"TILLEGGSINFORMASJON"}]},_e={beregningResultatPerioder:[{periode:{fom:"2018-10-01",tom:"2019-01-01"},feilutbetaltBeløp:1e4,vurdering:E.FORSETT,andelAvBeløp:50,renterProsent:0,tilbakekrevingBeløp:5e3,tilbakekrevingBeløpEtterSkatt:4e3},{periode:{fom:"2018-01-01",tom:"2019-01-01"},feilutbetaltBeløp:1e3,vurdering:E.FORSETT,andelAvBeløp:50,renterProsent:80,tilbakekrevingBeløp:500,tilbakekrevingBeløpEtterSkatt:400}],vedtakResultatType:se.DELVIS_TILBAKEBETALING},Oe=ne,Mr={component:W,args:{submitCallback:Z("button-click"),behandling:{uuid:"1",versjon:1,status:le.BEHANDLING_UTREDES},vedtaksbrev:Ie,fetchPreviewVedtaksbrev:()=>Promise.resolve(),kodeverkSamlingFpTilbake:Oe,isReadOnly:!1,setFormData:()=>{},beregningsresultat:_e,erRevurderingTilbakekrevingKlage:!1,erRevurderingTilbakekrevingFeilBeløpBortfalt:!0}},j={};var F,D,I;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(I=(D=j.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Lr=["Default"];export{j as Default,Lr as __namedExportsOrder,Mr as default};
