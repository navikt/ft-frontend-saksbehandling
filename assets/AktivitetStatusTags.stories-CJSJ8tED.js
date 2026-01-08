import"./iframe-BElCH5MN.js";import{a as r}from"./alleKodeverk-BqlsAwOV.js";import{A as a}from"./AktivitetStatusTags-DF6abrzC.js";import"./preload-helper-PPVm8Dsz.js";const l={component:a,args:{kodeverkSamling:r}},n=["MIDL_INAKTIV","AAP","AT","DP","SP_AV_DP","PSB_AV_DP","FL","MS","SN","AT_FL","AT_SN","FL_SN","AT_FL_SN","BA","IKKE_YRKESAKTIV","KUN_YTELSE","TY","VENTELØNN_VARTPENGER"],e={args:{beregningsgrunnlagPeriode:[{beregningsgrunnlagPrStatusOgAndel:n.map(t=>({aktivitetStatus:t}))}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    beregningsgrunnlagPeriode: [{
      beregningsgrunnlagPrStatusOgAndel: alleAktivitetStatuser.map(aktivitetStatus => ({
        aktivitetStatus
      }) as BeregningsgrunnlagAndel)
    }]
  }
}`,...e.parameters?.docs?.source}}};const A=["AlleStatuser"];export{e as AlleStatuser,A as __namedExportsOrder,l as default};
