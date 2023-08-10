import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  FaktaOmBeregning,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FaktaOmBeregningAksjonspunktValues, VurderOgFastsettATFLValues } from '../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../typer/FieldValues';
import VurderFaktaBeregningFormValues from '../../../typer/VurderFaktaBeregningFormValues';
import {
  BeregningFaktaTransformedValues,
  FaktaBeregningTransformedValues,
} from '../../../typer/interface/BeregningFaktaAP';
import KodeverkForPanel from '../../../typer/kodeverkForPanel';
import AksjonspunktBoks from '../../felles/AksjonspunktBoks';
import {
  INNTEKT_FIELD_ARRAY_NAME,
  erOverstyring,
  erOverstyringAvBeregningsgrunnlag,
  getKanRedigereInntekt,
} from '../BgFaktaUtils';
import InntektFieldArray, { InntektFieldArray as InntektFieldArrayImpl } from '../InntektFieldArray';
import InntektstabellPanel from '../InntektstabellPanel';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';
import VurderBesteberegningForm, {
  besteberegningField,
  vurderBesteberegningTransform,
} from '../besteberegningFodendeKvinne/VurderBesteberegningForm';
import NyIArbeidslivetSNForm from '../nyIArbeidslivet/NyIArbeidslivetSNForm';
import TidsbegrensetArbeidsforholdForm from '../tidsbegrensetArbeidsforhold/TidsbegrensetArbeidsforholdForm';
import VurderMilitaer from '../vurderMilitaer/VurderMilitaer';
import VurderRefusjonForm from '../vurderrefusjon/VurderRefusjonForm';
import { transformValuesForATFLISammeOrg } from './forms/ATFLSammeOrg';
import transformValuesArbeidUtenInntektsmelding from './forms/ArbeidUtenInntektsmelding';
import { harKunstigArbeidsforhold } from './forms/KunstigArbeidsforhold';
import LonnsendringForm from './forms/LonnsendringForm';
import NyoppstartetFLForm from './forms/NyoppstartetFLForm';
import VurderEtterlonnSluttpakkeForm from './forms/VurderEtterlonnSluttpakkeForm';
import VurderMottarYtelseForm from './forms/VurderMottarYtelseForm';

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
  values: Partial<FaktaOmBeregningAksjonspunktValues>,
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
  return '';
};

const finnInntektstabell = (
  readOnly: boolean,
  beregningsgrunnlag: Beregningsgrunnlag,
  kodeverkSamling: KodeverkForPanel,
  erOverstyrt: boolean,
) => (
  <InntektFieldArray
    readOnly={readOnly}
    skalKunneLeggeTilDagpengerManuelt={erOverstyrt}
    beregningsgrunnlag={beregningsgrunnlag}
    kodeverkSamling={kodeverkSamling}
  />
);

const spacer = (hasShownPanel: boolean): ReactElement => {
  if (hasShownPanel) {
    return <VerticalSpacer twentyPx />;
  }
  return null;
};

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  tilfeller: string[];
  manglerInntektsmelding: boolean;
  skalFastsetteAT: boolean;
  skalFastsetteFL: boolean;
  skalHaBesteberegning: string;
  harKunstigArbeid: boolean;
  skalViseTabell: boolean;
  kodeverkSamling: KodeverkForPanel;
  erOverstyrer: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  beregningsgrunnlag: Beregningsgrunnlag;
  erOverstyrt: boolean;
  skalHaMilitær: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  renderTextFieldAndSubmitButton: () => React.ReactNode;
};

interface StaticFunctions {
  buildInitialValues: (
    faktaOmBeregning: FaktaOmBeregning,
    erOverstyrt: boolean,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
    kodeverkSamling: KodeverkForPanel,
  ) => VurderOgFastsettATFLValues;
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
  avklaringsbehov,
  kodeverkSamling,
  erOverstyrer,
  updateOverstyring,
  renderTextFieldAndSubmitButton,
  arbeidsgiverOpplysningerPerId,
}) => {
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}`);
  const erOverstyrt = useMemo(
    () => erOverstyringAvBeregningsgrunnlag(formValues),
    [formValues, beregningsgrunnlag, avklaringsbehov],
  );
  const skalFastsetteAT = useMemo(
    () => skalFastsettInntektForArbeidstaker(formValues, beregningsgrunnlag),
    [formValues, beregningsgrunnlag],
  );
  const skalFastsetteFL = useMemo(
    () => skalFastsettInntektForFrilans(formValues, beregningsgrunnlag),
    [formValues, beregningsgrunnlag],
  );
  const skalHaBesteberegning = formValues[besteberegningField] === true;
  const skalViseTabell = useMemo(() => getSkalViseTabell(tilfeller), [tilfeller]);
  const harKunstigArbeid = useMemo(
    () => harKunstigArbeidsforhold(tilfeller, beregningsgrunnlag),
    [tilfeller, beregningsgrunnlag],
  );

  const byggForms = () => {
    const forms = [];
    let hasShownPanel = false;
    const { faktaOmBeregning } = beregningsgrunnlag;

    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)) {
      hasShownPanel = true;
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD}>
          <TidsbegrensetArbeidsforholdForm
            readOnly={readOnly}
            faktaOmBeregning={faktaOmBeregning}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </React.Fragment>,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET)) {
      hasShownPanel = true;
      forms.push(
        // @ts-ignore Fiks
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET}>
          {spacer(hasShownPanel)}
          <NyIArbeidslivetSNForm readOnly={readOnly} />
        </React.Fragment>,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE)) {
      hasShownPanel = true;
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE}>
          <VurderMilitaer readOnly={readOnly} />
        </React.Fragment>,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)) {
      hasShownPanel = true;
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT}>
          <VurderRefusjonForm
            readOnly={readOnly}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            faktaOmBeregning={faktaOmBeregning}
          />
        </React.Fragment>,
      );
    }
    // if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)) {
    //   hasShownPanel = true;

    //   forms.push(
    //     <ATFLSammeOrg
    //       key="ATFLSammeOrgTekst"
    //       beregningsgrunnlag={beregningsgrunnlag}
    //       isAksjonspunktClosed={isAksjonspunktClosed}
    //       readOnly={readOnly}
    //     />,
    //   );
    // }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING)) {
      hasShownPanel = true;
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_LONNSENDRING}>
          <LonnsendringForm readOnly={readOnly} />
        </React.Fragment>,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE)) {
      hasShownPanel = true;
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE}>
          <VurderEtterlonnSluttpakkeForm
            beregningsgrunnlag={beregningsgrunnlag}
            isAksjonspunktClosed={isAksjonspunktClosed}
            readOnly={readOnly}
          />
        </React.Fragment>,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)) {
      hasShownPanel = true;
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL}>
          <NyoppstartetFLForm readOnly={readOnly} />
        </React.Fragment>,
      );
    }
    if (
      tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING) &&
      !tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE)
    ) {
      hasShownPanel = true;
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING}>
          <VurderBesteberegningForm
            readOnly={readOnly}
            erOverstyrt={erOverstyrt}
            beregningsgrunnlag={beregningsgrunnlag}
            isAksjonspunktClosed={isAksjonspunktClosed}
          />
        </React.Fragment>,
      );
    }

    if (
      tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE) ||
      tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)
    ) {
      hasShownPanel = true;
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE}>
          <VurderMottarYtelseForm
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed}
            tilfeller={tilfeller}
            beregningsgrunnlag={beregningsgrunnlag}
            kodeverkSamling={kodeverkSamling}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </React.Fragment>,
      );
    }
    if (hasShownPanel) {
      return (
        <>
          <VerticalSpacer thirtyTwoPx />
          <AksjonspunktBoks>
            {forms.map(panelOrSpacer => panelOrSpacer)}
            {renderTextFieldAndSubmitButton()}
          </AksjonspunktBoks>
        </>
      );
    }
    if (erOverstyring(formValues)) {
      return (
        <>
          <VerticalSpacer thirtyTwoPx />
          {renderTextFieldAndSubmitButton()}
        </>
      );
    }
    return null;
  };

  return (
    <div>
      <InntektstabellPanel
        key="inntektstabell"
        tabell={finnInntektstabell(readOnly, beregningsgrunnlag, kodeverkSamling, erOverstyrt)}
        skalViseTabell={skalViseTabell}
        hjelpeTekstId={findInstruksjonForFastsetting(
          skalHaBesteberegning,
          skalFastsetteFL,
          skalFastsetteAT,
          harKunstigArbeid,
        )}
        readOnly={readOnly}
        erOverstyrer={erOverstyrer}
        avklaringsbehov={avklaringsbehov}
        updateOverstyring={updateOverstyring}
        erOverstyrt={erOverstyrt}
      />
      {byggForms()}
    </div>
  );
};

VurderOgFastsettATFL.buildInitialValues = (
  faktaOmBeregning: FaktaOmBeregning,
  erOverstyrt: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  kodeverkSamling: KodeverkForPanel,
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
      kodeverkSamling,
    ),
    ...InntektstabellPanel.buildInitialValues(erOverstyrt),
  };
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
    const allInntektErFastsatt = values[besteberegningField] === true;
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
    const inntektVerdier = InntektFieldArrayImpl.transformValues(
      values[INNTEKT_FIELD_ARRAY_NAME],
      values.frilansInntektValues,
      values.arbeidstakerInntektValues,
      values.dagpengerInntektValues,
    );
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
