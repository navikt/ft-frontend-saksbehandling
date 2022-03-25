import { KodeverkType } from '@ft-frontend-saksbehandling/kodeverk';

const behandlingFormName = 'behandling_1000051_v1';

export const getBehandlingFormName = () => behandlingFormName;

const kodeverk = {};
kodeverk[KodeverkType.AKTIVITET_STATUS] = [
  { kode: 'AT', navn: 'Arbeidstaker', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'FL', navn: 'Frilanser', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'TY', navn: 'Tilstøtende ytelse', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'SN', navn: 'Selvstendig næringsdrivende', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'AT_FL', navn: 'Kombinert arbeidstaker og frilanser', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'AT_SN', navn: 'Kombinert arbeidstaker og selvstendig næringsdrivende', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'FL_SN', navn: 'Kombinert frilanser og selvstendig næringsdrivende', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'AT_FL_SN', navn: 'Kombinert arbeidstaker, frilanser og selvstendig næringsdrivende', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'DP', navn: 'Dagpenger', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'AAP', navn: 'Arbeidsavklaringspenger', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'MS', navn: 'Militær eller sivil', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'KUN_YTELSE', navn: 'Kun ytelse', kodeverk: KodeverkType.AKTIVITET_STATUS },
  { kode: 'VENTELØNN_VARTPENGER', navn: 'Ventelønn/vartpenger', kodeverk: KodeverkType.AKTIVITET_STATUS },
];

kodeverk[KodeverkType.INNTEKTSKATEGORI] = [
  { kode: 'ARBEIDSTAKER', navn: 'Arbeidstaker', kodeverk: KodeverkType.INNTEKTSKATEGORI },
  { kode: 'FRILANSER', navn: 'Frilanser', kodeverk: KodeverkType.INNTEKTSKATEGORI },
];

export const lagStateMedAksjonspunkterOgBeregningsgrunnlag = (aksjonspunkter, beregningsgrunnlag, formName = 'test', values = {}, initial = {}) => {
  const dataState = {};

  const state = {
    default: {
      // @ts-ignore
      ...dataState.default,
      fagsak: {
        selectedSaksnummer: '1',
      },
      forstegangOgRevurderingBehandling: {
        behandlingUuid: '1000051',
        kodeverk,
      },
      behandling: {
        behandlingInfoHolder: {},
      },
    },
    form: {},
  };
  state.form[behandlingFormName] = {
    [formName]: {
      values,
      initial,
    },
  };
  return state;
};
