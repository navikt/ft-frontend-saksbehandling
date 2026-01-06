import { alleKodeverk } from '@navikt/ft-frontend-storybook-utils';
import type {
  AktivitetStatus,
  AndelForFaktaOmBeregning,
  ArbeidsgiverOpplysningerPerId,
  ArbeidstakerUtenIMAndel,
  ATFLSammeOrgAndel,
  Beregningsgrunnlag,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregning,
  Inntektskategori,
} from '@navikt/ft-types';

import { FaktaOmBeregningTilfelle } from '../../kodeverk/faktaOmBeregningTilfelle';
import { Organisasjonstype } from '../../kodeverk/organisasjonstype';
import type { FaktaOmBeregningAksjonspunktValues, VurderMottarYtelseValues } from '../../typer/FaktaBeregningTypes';
import type { AndelFieldIdentifikator } from '../../typer/FieldValues';
import type { KodeverkForPanel } from '../../typer/KodeverkForPanel';
import {
  kanRedigereInntektForAndel,
  mapAndelToField,
  setGenerellAndelsinfo,
  skalFastsetteInntektForAndel,
  skalRedigereInntektskategoriForAndel,
} from './BgFaktaUtils';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';
import { lonnsendringField } from './vurderOgFastsettATFL/forms/lonnsendringFormUtils';
import { erNyoppstartetFLField } from './vurderOgFastsettATFL/forms/NyoppstartetFLForm';
import { frilansFieldName, utledArbeidsforholdFieldName } from './vurderOgFastsettATFL/forms/VurderMottarYtelseUtils';

const kodeverkSamling = alleKodeverk as KodeverkForPanel;

const arbeidsgiver = {
  arbeidsgiverIdent: '3284788923',
  startdato: '2017-01-01',
  opphoersdato: '2018-01-01',
};

const agOpplysning: ArbeidsgiverOpplysningerPerId = {
  3284788923: {
    identifikator: '3284788923',
    navn: 'Virksomheten',
    erPrivatPerson: false,
  },
};

const arbeidstakerIkkeFastsatt = {
  lagtTilAvSaksbehandler: false,
  aktivitetStatus: 'AT',
  inntektskategori: 'ARBEIDSTAKER' as Inntektskategori,
} satisfies Partial<AndelForFaktaOmBeregning>;

const arbeidstakerAndel1: ArbeidstakerUtenIMAndel = {
  arbeidsforhold: {
    ...arbeidsgiver,
    arbeidsforholdId: '6765756g5',
  } as BeregningsgrunnlagArbeidsforhold,
  andelsnr: 1,
  ...arbeidstakerIkkeFastsatt,
};

describe('BgFaktaUtils', () => {
  const dagpengerAndel: AndelForFaktaOmBeregning = {
    aktivitetStatus: 'DP',
    andelsnr: 1,
    skalKunneEndreAktivitet: false,
    lagtTilAvSaksbehandler: true,
    inntektskategori: 'DAGPENGER',
    fastsattBelop: 20000,
    belopReadOnly: 0,
  };

  const dagpengeField = mapAndelToField(dagpengerAndel, {}, kodeverkSamling);

  it('skal mappe dagpengerandel til feltverdier', () => {
    expect(dagpengeField.aktivitetStatus).toBe('DP');
    expect(dagpengeField.andelsnr).toBe(1);
    expect(dagpengeField.nyAndel).toBe(false);
    expect(dagpengeField.lagtTilAvSaksbehandler).toBe(true);
    expect(dagpengeField.skalKunneEndreAktivitet).toBe(false);
    expect(dagpengeField.inntektskategori).toBe('DAGPENGER');
    expect(dagpengeField.fastsattBelop).toBe('20 000');
    expect(dagpengeField.belopReadOnly).toBe('0');
    expect(dagpengeField.refusjonskrav).toBe('');
  });

  it('skal mappe AAP-andel til feltverdier', () => {
    const AAPAndel: AndelForFaktaOmBeregning = {
      aktivitetStatus: 'AAP',
      andelsnr: 1,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
      inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
      fastsattBelop: undefined,
      belopReadOnly: 10000,
    };
    const aapField = mapAndelToField(AAPAndel, {}, kodeverkSamling);
    expect(aapField.aktivitetStatus).toBe('AAP');
    expect(aapField.andelsnr).toBe(1);
    expect(aapField.nyAndel).toBe(false);
    expect(aapField.lagtTilAvSaksbehandler).toBe(false);
    expect(aapField.skalKunneEndreAktivitet).toBe(false);
    expect(aapField.inntektskategori).toBe('ARBEIDSAVKLARINGSPENGER');
    expect(aapField.fastsattBelop).toBe('');
    expect(aapField.belopReadOnly).toBe('10 000');
    expect(aapField.refusjonskrav).toBe('');
  });

  it('skal mappe AT uten inntektsmelding med FL i samme org til feltverdier', () => {
    const ATAndel: AndelForFaktaOmBeregning = {
      aktivitetStatus: 'AT',
      andelsnr: 1,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
      inntektskategori: 'ARBEIDSTAKER',
    };
    const atField = mapAndelToField(ATAndel, {}, kodeverkSamling);
    expect(atField.aktivitetStatus).toBe('AT');
    expect(atField.andelsnr).toBe(1);
    expect(atField.nyAndel).toBe(false);
    expect(atField.lagtTilAvSaksbehandler).toBe(false);
    expect(atField.skalKunneEndreAktivitet).toBe(false);
    expect(atField.inntektskategori).toBe('ARBEIDSTAKER');
    expect(atField.fastsattBelop).toBe('');
    expect(atField.belopReadOnly).toBe('');
    expect(atField.refusjonskrav).toBe('');
  });

  it('skal mappe FL med AT i samme org til feltverdier', () => {
    const ATAndel: AndelForFaktaOmBeregning = {
      aktivitetStatus: 'FL',
      andelsnr: 1,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
      inntektskategori: 'FRILANSER',
    };
    const atField = mapAndelToField(ATAndel, {}, kodeverkSamling);
    expect(atField.aktivitetStatus).toBe('FL');
    expect(atField.andelsnr).toBe(1);
    expect(atField.nyAndel).toBe(false);
    expect(atField.lagtTilAvSaksbehandler).toBe(false);
    expect(atField.skalKunneEndreAktivitet).toBe(false);
    expect(atField.inntektskategori).toBe('FRILANSER');
    expect(atField.fastsattBelop).toBe('');
    expect(atField.belopReadOnly).toBe('');
    expect(atField.refusjonskrav).toBe('');
  });

  it('skal mappe AT med inntektsmelding til feltverdier', () => {
    const ATAndel: AndelForFaktaOmBeregning = {
      aktivitetStatus: 'AT',
      andelsnr: 1,
      skalKunneEndreAktivitet: false,
      lagtTilAvSaksbehandler: false,
      inntektskategori: 'ARBEIDSTAKER',
      fastsattBelop: undefined,
      belopReadOnly: 20000,
      arbeidsforhold: { belopFraInntektsmeldingPrMnd: 20000 } as BeregningsgrunnlagArbeidsforhold,
    };
    const atField = mapAndelToField(ATAndel, {}, kodeverkSamling);
    expect(atField.aktivitetStatus).toBe('AT');
    expect(atField.andelsnr).toBe(1);
    expect(atField.nyAndel).toBe(false);
    expect(atField.lagtTilAvSaksbehandler).toBe(false);
    expect(atField.skalKunneEndreAktivitet).toBe(false);
    expect(atField.inntektskategori).toBe('ARBEIDSTAKER');
    expect(atField.fastsattBelop).toBe('');
    expect(atField.belopReadOnly).toBe('20 000');
    expect(atField.refusjonskrav).toBe('');
  });

  it('skal sette initial values for generell andelinfo med arbeidsforhold', () => {
    const andelValueFromState: AndelForFaktaOmBeregning = {
      arbeidsforhold: {
        arbeidsgiverIdent: '3284788923',
        arbeidsforholdId: '321378huda7e2',
        eksternArbeidsforholdId: 'sdfgsdfgda7e2',
      } as BeregningsgrunnlagArbeidsforhold,
      aktivitetStatus: 'AT',
      andelsnr: 3,
      lagtTilAvSaksbehandler: false,
      inntektskategori: 'ARBEIDSTAKER',
    };

    const andelsInfo = setGenerellAndelsinfo(andelValueFromState, agOpplysning, kodeverkSamling);
    expect(andelsInfo.andel).toBe('Virksomheten (3284788923)...a7e2');
    expect(andelsInfo.aktivitetStatus).toBe('AT');
    expect(andelsInfo.andelsnr).toBe(3);
    expect(andelsInfo.nyAndel).toBe(false);
    expect(andelsInfo.lagtTilAvSaksbehandler).toBe(false);
    expect(andelsInfo.inntektskategori).toBe('ARBEIDSTAKER');
  });

  it('skal sette initial values for generell andelinfo uten arbeidsforhold', () => {
    const andelValueFromState: AndelForFaktaOmBeregning = {
      aktivitetStatus: 'SN',
      andelsnr: 2,
      lagtTilAvSaksbehandler: true,
      inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
    };
    const andelsInfo = setGenerellAndelsinfo(andelValueFromState, {}, kodeverkSamling);
    expect(andelsInfo.andel).toBe('Selvstendig næringsdrivende');
    expect(andelsInfo.aktivitetStatus).toBe('SN');
    expect(andelsInfo.andelsnr).toBe(2);
    expect(andelsInfo.nyAndel).toBe(false);
    expect(andelsInfo.lagtTilAvSaksbehandler).toBe(true);
    expect(andelsInfo.inntektskategori).toBe('SELVSTENDIG_NÆRINGSDRIVENDE');
  });

  it('skal ikkje sette arbeidsforhold initial values for andel uten arbeidsforhold', () => {
    const andelValueFromState: AndelForFaktaOmBeregning = {
      aktivitetStatus: 'SN',
      andelsnr: 2,
      lagtTilAvSaksbehandler: true,
      inntektskategori: 'SELVSTENDIG_NÆRINGSDRIVENDE',
    };
    const arbeidsforholdIV = mapAndelToField(andelValueFromState, {}, kodeverkSamling);
    expect(arbeidsforholdIV.arbeidsforholdId).toBe(undefined);
    expect(arbeidsforholdIV.arbeidsperiodeFom).toBe('');
    expect(arbeidsforholdIV.arbeidsperiodeTom).toBe('');
  });

  const andelsnrKunstigArbeid = 241;

  const kunstigArbeidsgiver: BeregningsgrunnlagArbeidsforhold = {
    arbeidsgiverIdent: '42672364432',
    startdato: '2017-01-01',
    opphoersdato: '2018-01-01',
    // @ts-expect-error Denne skal vel ikkje kunna vera ''? (Testar feilar om eg set den til noko anna)
    arbeidsforholdType: '',
    organisasjonstype: Organisasjonstype.KUNSTIG,
  };

  const kunstigArbeidstakerAndel = {
    arbeidsforhold: {
      ...kunstigArbeidsgiver,
      arbeidsforholdId: undefined,
    } as BeregningsgrunnlagArbeidsforhold,
    andelsnr: andelsnrKunstigArbeid,
    ...arbeidstakerIkkeFastsatt,
  };

  const arbeidstakerAndel3: AndelForFaktaOmBeregning = {
    arbeidsforhold: {
      ...arbeidsgiver,
      arbeidsforholdId: '321378huda7e2',
    } as BeregningsgrunnlagArbeidsforhold,
    andelsnr: 3,
    ...arbeidstakerIkkeFastsatt,
  };

  it('skal sette arbeidsforhold initial values for andel med arbeidsforhold', () => {
    const arbeidsforholdIV = mapAndelToField(arbeidstakerAndel3, {}, kodeverkSamling);
    expect(arbeidsforholdIV.arbeidsforholdId).toBe('321378huda7e2');
    expect(arbeidsforholdIV.arbeidsperiodeFom).toBe('2017-01-01');
    expect(arbeidsforholdIV.arbeidsperiodeTom).toBe('2018-01-01');
  });

  const arbeidstakerAndel4 = {
    arbeidsforhold: {
      ...arbeidsgiver,
      arbeidsforholdId: '546546g54',
    } as BeregningsgrunnlagArbeidsforhold,
    andelsnr: 4,
    inntektPrMnd: undefined,
    ...arbeidstakerIkkeFastsatt,
  };

  const frilansAndel = {
    aktivitetStatus: 'FL' as AktivitetStatus,
    andelsnr: 2,
    lagtTilAvSaksbehandler: false,
  };

  const beregningsgrunnlag = {
    beregningsgrunnlagPeriode: [
      {
        beregningsgrunnlagPrStatusOgAndel: [
          arbeidstakerAndel1,
          arbeidstakerAndel3,
          frilansAndel,
          arbeidstakerAndel4,
          kunstigArbeidstakerAndel,
        ],
      },
    ],
  } as Beregningsgrunnlag;

  const faktaOmBeregning: FaktaOmBeregning = {
    faktaOmBeregningTilfeller: [],
    andelerForFaktaOmBeregning: [],
    arbeidstakerOgFrilanserISammeOrganisasjonListe: undefined,
    arbeidsforholdMedLønnsendringUtenIM: undefined,
    vurderMottarYtelse: {
      erFrilans: true,
      frilansMottarYtelse: undefined,
      frilansInntektPrMnd: 20000,
      arbeidstakerAndelerUtenIM: [arbeidstakerAndel3, arbeidstakerAndel1],
    },
  };

  const vurderYtelse: VurderMottarYtelseValues = {};
  vurderYtelse[utledArbeidsforholdFieldName(arbeidstakerAndel3)] = true;
  vurderYtelse[frilansFieldName] = true;
  const values: FaktaOmBeregningAksjonspunktValues = {
    vurderMottarYtelseValues: vurderYtelse,
    erTilVurdering: true,
    periode: { fom: '2022-01-01', tom: '2022-02-01' },
  } as FaktaOmBeregningAksjonspunktValues;
  values[lonnsendringField] = true;

  const andelValuesUtenInntektsmelding = {
    fordelingForrigeBehandling: '',
    fastsattBelop: '',
    readOnlyBelop: 25000,
    kanRedigereInntekt: false,
    refusjonskrav: '',
    skalKunneEndreRefusjon: false,
    belopFraInntektsmelding: null,
    refusjonskravFraInntektsmelding: null,
  };

  const andelValuesMedInntektsmelding = {
    fordelingForrigeBehandling: 25000,
    fastsattBelop: 25000,
    readOnlyBelop: 25000,
    kanRedigereInntekt: false,
    refusjonskrav: '',
    skalKunneEndreRefusjon: false,
    belopFraInntektsmelding: 25000,
    refusjonskravFraInntektsmelding: null,
  };

  it('skal redigere inntektskategori for kunstig arbeid', () => {
    const andelFieldValue: AndelFieldIdentifikator = {
      ...andelValuesUtenInntektsmelding,
      arbeidsgiverId: kunstigArbeidsgiver.arbeidsgiverIdent,
      ...setGenerellAndelsinfo(kunstigArbeidstakerAndel, agOpplysning, kodeverkSamling),
    };
    const skalRedigereInntektskategori = skalRedigereInntektskategoriForAndel(beregningsgrunnlag, andelFieldValue);
    expect(skalRedigereInntektskategori).toBe(true);
  });

  it('skal redigere inntekt ved overstyring', () => {
    const andelFieldValue: AndelFieldIdentifikator = {
      ...andelValuesMedInntektsmelding,
      ...setGenerellAndelsinfo(arbeidstakerAndel4, agOpplysning, kodeverkSamling),
    };
    const copyValues = { ...values };
    copyValues[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD] = true;
    const skalRedigereInntekt = kanRedigereInntektForAndel(
      copyValues,
      faktaOmBeregning,
      beregningsgrunnlag,
    )(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal redigere inntekt for arbeidstakerandel som mottar ytelse', () => {
    const andelFieldValue: AndelFieldIdentifikator = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(arbeidstakerAndel3, agOpplysning, kodeverkSamling),
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(
      values,
      faktaOmBeregning,
      beregningsgrunnlag,
    )(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal redigere inntekt for arbeidstakerandel som ikke mottar ytelse, men har lonnsendring', () => {
    const andelFieldValue: AndelFieldIdentifikator = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(arbeidstakerAndel1, agOpplysning, kodeverkSamling),
    };
    const nyFakta: FaktaOmBeregning = {
      ...faktaOmBeregning,
      arbeidsforholdMedLønnsendringUtenIM: [arbeidstakerAndel1],
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(values, nyFakta, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal redigere inntekt for kun ytelse', () => {
    const brukersAndel: AndelFieldIdentifikator = {
      andelsnr: 1,
      aktivitetStatus: 'BA',
    };
    const fakta = {
      ...faktaOmBeregning,
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE],
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(values, fakta, beregningsgrunnlag)(brukersAndel);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal ikkje redigere inntekt for arbeidstakerandel med inntektsmelding i samme org som frilans', () => {
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(arbeidstakerAndel4, agOpplysning, kodeverkSamling),
    };
    const at4Copy: ATFLSammeOrgAndel = {
      ...arbeidstakerAndel4,
      inntektPrMnd: 30000,
    };
    const faktaOmBeregningCopy = {
      ...faktaOmBeregning,
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [at4Copy],
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(
      values,
      faktaOmBeregningCopy,
      beregningsgrunnlag,
    )(andelFieldValue);
    expect(skalRedigereInntekt).toBe(false);
  });

  it('skal redigere inntekt for arbeidstakerandel uten inntektsmelding i samme org som frilans', () => {
    const andelFieldValue = {
      ...andelValuesMedInntektsmelding,
      ...setGenerellAndelsinfo(arbeidstakerAndel4, agOpplysning, kodeverkSamling),
    };
    const at4Copy: ATFLSammeOrgAndel = {
      ...arbeidstakerAndel4,
      inntektPrMnd: undefined,
    };
    const faktaOmBeregningCopy: FaktaOmBeregning = {
      ...faktaOmBeregning,
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [at4Copy],
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(
      values,
      faktaOmBeregningCopy,
      beregningsgrunnlag,
    )(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal redigere inntekt for frilansandel som mottar ytelse', () => {
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(frilansAndel, {}, kodeverkSamling),
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(
      values,
      faktaOmBeregning,
      beregningsgrunnlag,
    )(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal redigere inntekt for frilansandel som ikke mottar ytelse, men er nyoppstartet', () => {
    const vurderYtelseKopi: VurderMottarYtelseValues = {
      [frilansFieldName]: false,
    };
    const valuesLocalCopy: FaktaOmBeregningAksjonspunktValues = {
      ...values,
      vurderMottarYtelseValues: vurderYtelseKopi,
    };
    valuesLocalCopy[erNyoppstartetFLField] = true;
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(frilansAndel, {}, kodeverkSamling),
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(
      valuesLocalCopy,
      faktaOmBeregning,
      beregningsgrunnlag,
    )(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });

  it('skal ikke redigere inntekt for frilansandel som ikke mottar ytelse og ikke er nyoppstartet', () => {
    const vurderYtelseKopi: VurderMottarYtelseValues = {
      [frilansFieldName]: false,
    };
    const valuesLocalCopy = {
      ...values,
      vurderMottarYtelseValues: vurderYtelseKopi,
    };
    valuesLocalCopy[erNyoppstartetFLField] = false;
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(frilansAndel, {}, kodeverkSamling),
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(
      valuesLocalCopy,
      faktaOmBeregning,
      beregningsgrunnlag,
    )(andelFieldValue);
    expect(skalRedigereInntekt).toBe(false);
  });
  it('skal redigere inntekt for frilansandel i samme org som arbeidstaker', () => {
    const andelFieldValue = {
      ...andelValuesUtenInntektsmelding,
      ...setGenerellAndelsinfo(frilansAndel, {}, kodeverkSamling),
    };
    const faktaKopi: FaktaOmBeregning = {
      ...faktaOmBeregning,
      arbeidstakerOgFrilanserISammeOrganisasjonListe: [arbeidstakerAndel4],
    };
    const skalRedigereInntekt = skalFastsetteInntektForAndel(values, faktaKopi, beregningsgrunnlag)(andelFieldValue);
    expect(skalRedigereInntekt).toBe(true);
  });
});
