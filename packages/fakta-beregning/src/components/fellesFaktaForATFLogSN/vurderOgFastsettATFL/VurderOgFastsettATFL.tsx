import { formHooks } from '@navikt/ft-form-hooks';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  FaktaOmBeregning,
  VurderMottarYtelse,
} from '@navikt/ft-types';
import React, { FunctionComponent, useMemo } from 'react';
import { IntlShape } from 'react-intl';
import { FaktaOmBeregningAksjonspunktValues, VurderOgFastsettATFLValues } from '../../../typer/FaktaBeregningTypes';
import AndelFieldValue, { InntektTransformed } from '../../../typer/FieldValues';
import {
  BeregningFaktaTransformedValues,
  FaktaBeregningTransformedValues,
} from '../../../typer/interface/BeregningFaktaAP';
import VurderFaktaBeregningFormValues from '../../../typer/VurderFaktaBeregningFormValues';
import VurderBesteberegningForm, {
  besteberegningField,
  vurderBesteberegningTransform,
} from '../besteberegningFodendeKvinne/VurderBesteberegningForm';
import {
  erOverstyring,
  erOverstyringAvBeregningsgrunnlag,
  getKanRedigereInntekt,
  INNTEKT_FIELD_ARRAY_NAME,
  mapAndelFieldIdentifikator,
  skalFastsetteInntektForAndel,
} from '../BgFaktaUtils';
import InntektFieldArray, { InntektFieldArray as InntektFieldArrayImpl } from '../InntektFieldArray';
import InntektstabellPanel from '../InntektstabellPanel';
import { validateMinstEnFastsatt } from '../ValidateAndelerUtils';
import VurderFaktaContext from '../VurderFaktaContext';
import transformValuesArbeidUtenInntektsmelding from './forms/ArbeidUtenInntektsmelding';
import { ATFLSammeOrgTekst, transformValuesForATFLISammeOrg } from './forms/ATFLSammeOrg';
import { harKunstigArbeidsforhold } from './forms/KunstigArbeidsforhold';
import LonnsendringForm, { lonnsendringField } from './forms/LonnsendringForm';
import NyoppstartetFLForm, { erNyoppstartetFLField } from './forms/NyoppstartetFLForm';
import VurderEtterlonnSluttpakkeForm from './forms/VurderEtterlonnSluttpakkeForm';
import VurderMottarYtelseForm from './forms/VurderMottarYtelseForm';
import { harVurdertMottarYtelse } from './forms/VurderMottarYtelseUtils';

const lonnsendringErVurdertEllerIkkjeTilstede = (
  tilfeller: string[],
  values: FaktaOmBeregningAksjonspunktValues,
): boolean =>
  !tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING) ||
  (values[lonnsendringField] !== undefined && values[lonnsendringField] !== null);

const nyoppstartetFLErVurdertEllerIkkjeTilstede = (
  tilfeller: string[],
  values: FaktaOmBeregningAksjonspunktValues,
): boolean =>
  !tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL) ||
  (values[erNyoppstartetFLField] !== undefined && values[erNyoppstartetFLField] !== null);

const besteberegningErVurdertEllerIkkjeTilstede = (
  tilfeller: string[],
  values: FaktaOmBeregningAksjonspunktValues,
): boolean =>
  !tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING) ||
  (values[besteberegningField] !== undefined && values[besteberegningField] !== null);

const mottarYtelseErVurdertEllerIkkjeTilstede = (
  tilfeller: string[],
  vurderMottarYtelse: VurderMottarYtelse,
  values: FaktaOmBeregningAksjonspunktValues,
): boolean =>
  !tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE) ||
  harVurdertMottarYtelse(values, vurderMottarYtelse);

const harVurdert = (
  tilfeller: string[],
  values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
): boolean =>
  lonnsendringErVurdertEllerIkkjeTilstede(tilfeller, values) &&
  nyoppstartetFLErVurdertEllerIkkjeTilstede(tilfeller, values) &&
  mottarYtelseErVurdertEllerIkkjeTilstede(tilfeller, faktaOmBeregning.vurderMottarYtelse, values) &&
  besteberegningErVurdertEllerIkkjeTilstede(tilfeller, values);

const skalFastsetteInntekt = (
  values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
) =>
  faktaOmBeregning.andelerForFaktaOmBeregning
    .map(andel => mapAndelFieldIdentifikator(andel))
    .find(skalFastsetteInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag)) !== undefined;

export const skalFastsettInntektForArbeidstaker = (
  values: FaktaOmBeregningAksjonspunktValues,
  beregningsgrunnlag: Beregningsgrunnlag,
) => {
  const skalFastsette = andel => getKanRedigereInntekt(values, beregningsgrunnlag)(andel);

  const fields = values[INNTEKT_FIELD_ARRAY_NAME];
  if (!fields) {
    return false;
  }
  return fields
    .filter(field => field.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER)
    .map(skalFastsette)
    .includes(true);
};

export const skalFastsettInntektForFrilans = (
  values: FaktaOmBeregningAksjonspunktValues,
  beregningsgrunnlag: Beregningsgrunnlag,
) => {
  const skalFastsette = andel => getKanRedigereInntekt(values, beregningsgrunnlag)(andel);

  const fields = values[INNTEKT_FIELD_ARRAY_NAME];
  if (!fields) {
    return false;
  }
  return fields
    .filter(field => field.aktivitetStatus === AktivitetStatus.FRILANSER)
    .map(skalFastsette)
    .includes(true);
};

const getManglerInntektsmelding = (beregningsgrunnlag: Beregningsgrunnlag) => {
  const { faktaOmBeregning } = beregningsgrunnlag;
  if (
    faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe &&
    faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe.length > 0
  ) {
    return (
      faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe.find(forhold => !forhold.inntektPrMnd) !==
      undefined
    );
  }
  return false;
};

const getSkalViseTabell = (tilfeller: string[]) => !tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE);
export const findInstruksjonForFastsetting = (
  skalHaBesteberegning,
  skalFastsetteFL,
  skalFastsetteAT,
  harKunstigArbeid,
) => {
  if (harKunstigArbeid) {
    return 'BeregningInfoPanel.KunstigArbeidsforhold.FastsettKunstigArbeidsforhold';
  }
  if (skalHaBesteberegning) {
    return 'KunYtelsePanel.OverskriftBesteberegning';
  }
  if (skalFastsetteFL) {
    if (!skalFastsetteAT) {
      return 'BeregningInfoPanel.VurderOgFastsettATFL.FastsettFrilans';
    }
    return 'BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLAlleOppdrag';
  }
  if (skalFastsetteAT) {
    return 'BeregningInfoPanel.VurderOgFastsettATFL.FastsettArbeidsinntekt';
  }
  return ' ';
};

const finnInntektstabell = (readOnly, beregningsgrunnlag, isAksjonspunktClosed, alleKodeverk, erOverstyrt) => (
  <InntektFieldArray
    readOnly={readOnly}
    skalKunneLeggeTilDagpengerManuelt={erOverstyrt}
    beregningsgrunnlag={beregningsgrunnlag}
    alleKodeverk={alleKodeverk}
    isAksjonspunktClosed={isAksjonspunktClosed}
  />
);

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  tilfeller: string[];
  manglerInntektsmelding: boolean;
  skalFastsetteAT: boolean;
  skalFastsetteFL: boolean;
  skalHaBesteberegning: boolean;
  harKunstigArbeid: boolean;
  skalViseTabell: boolean;
  alleKodeverk: AlleKodeverk;
  erOverstyrer: boolean;
  aksjonspunkter: Aksjonspunkt[];
  beregningsgrunnlag: Beregningsgrunnlag;
  erOverstyrt: boolean;
  skalHaMilitær: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
};

interface StaticFunctions {
  buildInitialValues: (
    faktaOmBeregning: FaktaOmBeregning,
    erOverstyrt: boolean,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
    alleKodeverk: AlleKodeverk,
  ) => VurderOgFastsettATFLValues;
  validate: (
    values: FaktaOmBeregningAksjonspunktValues,
    tilfeller: string[],
    faktaOmBeregning: FaktaOmBeregning,
    beregningsgrunnlag: Beregningsgrunnlag,
    intl: IntlShape,
  ) => any;
  transformValues: (
    faktaOmBeregning: FaktaOmBeregning,
    beregningsgrunnlag: Beregningsgrunnlag,
  ) => (values: FaktaOmBeregningAksjonspunktValues) => BeregningFaktaTransformedValues;
}

/**
 * VurderOgFastsettATFL
 *
 * Presentasjonskomponent. Styrer samspillet mellom tre tilfeller av vurdering: VURDER_LONNSENDRING,
 * VURDER_NYOPPSTARTET_FL og VURDER_AT_OG_FL_I_SAMME_ORGANISASJON.
 * Dersom alle tre opptrer samtidig er det et spesialtilfelle, der saksbehandler først må vurdere to
 * tilfeller før h*n kan fastsette inntekt.
 */

const VurderOgFastsettATFL: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  tilfeller,
  beregningsgrunnlag,
  aksjonspunkter,
  alleKodeverk,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  updateOverstyring,
}) => {
  const { getValues } = formHooks.useFormContext<VurderFaktaBeregningFormValues>();
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}`);
  const erOverstyrt = useMemo(
    () => erOverstyringAvBeregningsgrunnlag(formValues, beregningsgrunnlag, aksjonspunkter),
    [formValues, beregningsgrunnlag, aksjonspunkter],
  );
  const skalFastsetteAT = useMemo(
    () => skalFastsettInntektForArbeidstaker(formValues, beregningsgrunnlag),
    [formValues, beregningsgrunnlag],
  );
  const skalFastsetteFL = useMemo(
    () => skalFastsettInntektForFrilans(formValues, beregningsgrunnlag),
    [formValues, beregningsgrunnlag],
  );
  const skalHaBesteberegning = formValues[besteberegningField] === 'true';
  const manglerInntektsmelding = useMemo(() => getManglerInntektsmelding(beregningsgrunnlag), [beregningsgrunnlag]);
  const skalViseTabell = useMemo(() => getSkalViseTabell(tilfeller), [tilfeller]);
  const harKunstigArbeid = useMemo(
    () => harKunstigArbeidsforhold(tilfeller, beregningsgrunnlag),
    [tilfeller, beregningsgrunnlag],
  );

  return (
    <div>
      <InntektstabellPanel
        key="inntektstabell"
        tabell={finnInntektstabell(readOnly, beregningsgrunnlag, isAksjonspunktClosed, alleKodeverk, erOverstyrt)}
        skalViseTabell={skalViseTabell}
        hjelpeTekstId={findInstruksjonForFastsetting(
          skalHaBesteberegning,
          skalFastsetteFL,
          skalFastsetteAT,
          harKunstigArbeid,
        )}
        readOnly={readOnly}
        erOverstyrer={erOverstyrer}
        aksjonspunkter={aksjonspunkter}
        updateOverstyring={updateOverstyring}
        erOverstyrt={erOverstyrt}
      >
        <ATFLSammeOrgTekst beregningsgrunnlag={beregningsgrunnlag} manglerInntektsmelding={manglerInntektsmelding} />
        {tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING) && (
          <LonnsendringForm readOnly={readOnly} isAksjonspunktClosed={isAksjonspunktClosed} />
        )}
        {tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE) && (
          <VurderEtterlonnSluttpakkeForm readOnly={readOnly} isAksjonspunktClosed={isAksjonspunktClosed} />
        )}
        {tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL) && (
          <NyoppstartetFLForm readOnly={readOnly} isAksjonspunktClosed={isAksjonspunktClosed} />
        )}
        {tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE) && (
          <VurderMottarYtelseForm
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed}
            tilfeller={tilfeller}
            beregningsgrunnlag={beregningsgrunnlag}
            alleKodeverk={alleKodeverk}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        )}
        {tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING) &&
          !tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE) && (
            /* @ts-ignore */
            <VurderBesteberegningForm
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              erOverstyrt={erOverstyrt}
            />
          )}
      </InntektstabellPanel>
    </div>
  );
};

VurderOgFastsettATFL.buildInitialValues = (
  faktaOmBeregning: FaktaOmBeregning,
  erOverstyrt: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): VurderOgFastsettATFLValues => {
  if (!faktaOmBeregning) {
    return {};
  }
  const andeler = faktaOmBeregning.andelerForFaktaOmBeregning;
  if (andeler.length === 0) {
    return {};
  }
  return {
    [INNTEKT_FIELD_ARRAY_NAME]: InntektFieldArrayImpl.buildInitialValues(
      andeler,
      arbeidsgiverOpplysningerPerId,
      alleKodeverk,
    ),
    ...InntektstabellPanel.buildInitialValues(erOverstyrt),
  };
};

const validateEnFastsattVedOverstyring = (values: AndelFieldValue[], intl: IntlShape): any => {
  const minstEnFastsattFeilmelding = validateMinstEnFastsatt(values, intl);
  if (minstEnFastsattFeilmelding != null) {
    return { _error: minstEnFastsattFeilmelding };
  }
  return null;
};

VurderOgFastsettATFL.validate = (
  values: FaktaOmBeregningAksjonspunktValues,
  tilfeller: string[],
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
  intl: IntlShape,
): any => {
  const errors = {};
  if (
    harVurdert(tilfeller, values, faktaOmBeregning) &&
    skalFastsetteInntekt(values, faktaOmBeregning, beregningsgrunnlag)
  ) {
    errors[INNTEKT_FIELD_ARRAY_NAME] = InntektFieldArrayImpl.validate(
      values[INNTEKT_FIELD_ARRAY_NAME],
      false,
      skalFastsetteInntektForAndel(values, faktaOmBeregning, beregningsgrunnlag),
      intl,
    );
  }
  if (!errors[INNTEKT_FIELD_ARRAY_NAME] && erOverstyring(values)) {
    errors[INNTEKT_FIELD_ARRAY_NAME] = validateEnFastsattVedOverstyring(values[INNTEKT_FIELD_ARRAY_NAME], intl);
  }
  return errors;
};

const concatTilfeller = (
  transformed: FaktaBeregningTransformedValues,
  newTransformedValues: FaktaBeregningTransformedValues,
): FaktaBeregningTransformedValues => ({
  ...transformed,
  ...newTransformedValues,
  faktaOmBeregningTilfeller: newTransformedValues.faktaOmBeregningTilfeller
    ? transformed.faktaOmBeregningTilfeller.concat(newTransformedValues.faktaOmBeregningTilfeller)
    : transformed.faktaOmBeregningTilfeller,
});

const transformValuesForOverstyring = (
  values: FaktaOmBeregningAksjonspunktValues,
  transformed: FaktaBeregningTransformedValues,
  inntektVerdier: InntektTransformed[],
  fastsatteAndelsnr: number[],
): BeregningFaktaTransformedValues => {
  if (erOverstyring(values)) {
    const overstyrteAndeler = inntektVerdier
      .filter(andel => !fastsatteAndelsnr.includes(andel.andelsnr))
      .filter(verdi => verdi.fastsattBelop != null)
      .map(verdi => ({
        andelsnr: verdi.andelsnr,
        nyAndel: verdi.nyAndel,
        aktivitetStatus: verdi.aktivitetStatus,
        lagtTilAvSaksbehandler: verdi.lagtTilAvSaksbehandler,
        fastsatteVerdier: {
          fastsattBeløp: verdi.fastsattBelop,
          inntektskategori: verdi.inntektskategori,
        },
      }));
    return {
      fakta: transformed,
      overstyrteAndeler,
    };
  }
  return {
    fakta: transformed,
  };
};

const transformValuesForAksjonspunkt = (
  values: FaktaOmBeregningAksjonspunktValues,
  inntektVerdier: InntektTransformed[],
  fastsatteAndelsnr: number[],
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller
    ? faktaOmBeregning.faktaOmBeregningTilfeller.map(kode => kode)
    : [];
  let transformed = { faktaOmBeregningTilfeller: [] } as FaktaBeregningTransformedValues;
  if (tilfeller.length > 0) {
    // Besteberegning
    transformed = concatTilfeller(transformed, vurderBesteberegningTransform(faktaOmBeregning)(values, inntektVerdier));
    const allInntektErFastsatt = values[besteberegningField] === 'true';
    // Nyoppstartet FL
    transformed = concatTilfeller(
      transformed,
      NyoppstartetFLForm.transformValues(
        values,
        allInntektErFastsatt ? null : inntektVerdier,
        faktaOmBeregning,
        fastsatteAndelsnr,
      ),
    );
    // Etterlønn / sluttpakke
    transformed = concatTilfeller(
      transformed,
      VurderEtterlonnSluttpakkeForm.transformValues(
        values,
        allInntektErFastsatt ? null : inntektVerdier,
        faktaOmBeregning,
        fastsatteAndelsnr,
      ),
    );
    // Lønnsendring FL
    transformed = concatTilfeller(transformed, LonnsendringForm.transformValues(values, faktaOmBeregning));
    // Mottar ytelse
    transformed = concatTilfeller(
      transformed,
      VurderMottarYtelseForm.transformValues(
        values,
        allInntektErFastsatt ? null : inntektVerdier,
        faktaOmBeregning,
        beregningsgrunnlag,
        fastsatteAndelsnr,
      ),
    );
    // ATFL i samme org
    transformed = concatTilfeller(
      transformed,
      transformValuesForATFLISammeOrg(
        allInntektErFastsatt ? null : inntektVerdier,
        faktaOmBeregning,
        fastsatteAndelsnr,
      ),
    );
    // Inntekt for arbeid uten inntektsmelding
    transformed = concatTilfeller(
      transformed,
      transformValuesArbeidUtenInntektsmelding(
        values,
        allInntektErFastsatt ? null : inntektVerdier,
        faktaOmBeregning,
        beregningsgrunnlag,
        fastsatteAndelsnr,
      ),
    );
  }
  return transformed;
};

VurderOgFastsettATFL.transformValues =
  (faktaOmBeregning: FaktaOmBeregning, beregningsgrunnlag: Beregningsgrunnlag) =>
  (values: FaktaOmBeregningAksjonspunktValues): BeregningFaktaTransformedValues => {
    const inntektVerdier = InntektFieldArrayImpl.transformValues(values[INNTEKT_FIELD_ARRAY_NAME]);
    const fastsatteAndelsnr = [];
    const transformed = transformValuesForAksjonspunkt(
      values,
      inntektVerdier,
      fastsatteAndelsnr,
      faktaOmBeregning,
      beregningsgrunnlag,
    );
    return transformValuesForOverstyring(values, transformed, inntektVerdier, fastsatteAndelsnr);
  };

export default VurderOgFastsettATFL;
