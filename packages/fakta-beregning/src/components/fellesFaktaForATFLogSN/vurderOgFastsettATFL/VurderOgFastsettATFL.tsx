import React, { ReactElement, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { VStack } from '@navikt/ds-react';

import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  FaktaOmBeregning,
} from '@navikt/ft-types';
import { AksjonspunktBox } from '@navikt/ft-ui-komponenter';

import { FaktaOmBeregningAksjonspunktValues, VurderOgFastsettATFLValues } from '../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../typer/FieldValues';
import {
  BeregningFaktaTransformedValues,
  FaktaBeregningTransformedValues,
  FastsettBeregningsgrunnlagAndelTransformedValues,
} from '../../../typer/interface/BeregningFaktaAP';
import { KodeverkForPanel } from '../../../typer/KodeverkForPanel';
import { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { besteberegningField, VurderBesteberegningForm } from '../besteberegningFodendeKvinne/VurderBesteberegningForm';
import { vurderBesteberegningTransform } from '../besteberegningFodendeKvinne/vurderBesteberegningFormUtils';
import { erOverstyringAvBeregningsgrunnlag, INNTEKT_FIELD_ARRAY_NAME } from '../BgFaktaUtils';
import { InntektFieldArray } from '../InntektFieldArray';
import { InntektstabellPanel } from '../InntektstabellPanel';
import { NyIArbeidslivetSNForm } from '../nyIArbeidslivet/NyIArbeidslivetSNForm';
import { TidsbegrensetArbeidsforholdForm } from '../tidsbegrensetArbeidsforhold/TidsbegrensetArbeidsforholdForm';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';
import { VurderMilitaer } from '../vurderMilitaer/VurderMilitaer';
import { VurderRefusjonForm } from '../vurderrefusjon/VurderRefusjonForm';
import { transformValuesArbeidUnderAap } from './forms/arbeidUnderAapFormUtils';
import { transformValuesArbeidUtenInntektsmelding } from './forms/ArbeidUtenInntektsmelding';
import { transformValuesForATFLISammeOrg } from './forms/ATFLSammeOrg';
import { InntektInputFields } from './forms/InntektInputFields';
import { LonnsendringForm } from './forms/LonnsendringForm';
import { NyoppstartetFLForm } from './forms/NyoppstartetFLForm';
import { VurderEtterlonnSluttpakkeForm } from './forms/VurderEtterlonnSluttpakkeForm';
import { VurderMottarYtelseForm } from './forms/VurderMottarYtelseForm';

const getSkalViseTabell = (tilfeller: string[]) => !tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE);

interface Props {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  tilfeller: string[];
  kodeverkSamling: KodeverkForPanel;
  erOverstyrer: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  renderTextFieldAndSubmitButton: () => React.ReactNode;
  vilkarsperiodeSkalVurderesIBehandlingen: boolean;
}

/**
 * VurderOgFastsettATFL
 *
 * Presentasjonskomponent. Styrer samspillet mellom tre tilfeller av vurdering: VURDER_LONNSENDRING,
 * VURDER_NYOPPSTARTET_FL og VURDER_AT_OG_FL_I_SAMME_ORGANISASJON.
 * Dersom alle tre opptrer samtidig er det et spesialtilfelle, der saksbehandler først må vurdere to
 * tilfeller før h*n kan fastsette inntekt.
 */

export const VurderOgFastsettATFL = ({
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
  vilkarsperiodeSkalVurderesIBehandlingen,
}: Props) => {
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}`);
  const erOverstyrt = useMemo(
    () => erOverstyringAvBeregningsgrunnlag(formValues),
    [formValues, beregningsgrunnlag, avklaringsbehov],
  );
  const skalViseTabell = useMemo(() => getSkalViseTabell(tilfeller), [tilfeller]);

  const byggForms = () => {
    const forms: ReactElement[] = [];
    const { faktaOmBeregning } = beregningsgrunnlag;
    if (!faktaOmBeregning || !vilkarsperiodeSkalVurderesIBehandlingen) {
      return null;
    }

    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)) {
      forms.push(
        <TidsbegrensetArbeidsforholdForm
          readOnly={readOnly}
          faktaOmBeregning={faktaOmBeregning}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          key={FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD}
        />,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET)) {
      forms.push(
        <NyIArbeidslivetSNForm readOnly={readOnly} key={FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET} />,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE)) {
      forms.push(<VurderMilitaer readOnly={readOnly} key={FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE} />);
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)) {
      forms.push(
        <VurderRefusjonForm
          readOnly={readOnly}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          faktaOmBeregning={faktaOmBeregning}
          key={FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT}
        />,
      );
    }

    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING)) {
      forms.push(<LonnsendringForm readOnly={readOnly} key={FaktaOmBeregningTilfelle.VURDER_LONNSENDRING} />);
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE)) {
      forms.push(
        <VurderEtterlonnSluttpakkeForm
          beregningsgrunnlag={beregningsgrunnlag}
          isAksjonspunktClosed={isAksjonspunktClosed}
          readOnly={readOnly}
          key={FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE}
        />,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)) {
      forms.push(<NyoppstartetFLForm readOnly={readOnly} key={FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL} />);
    }
    if (
      tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING) &&
      !tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE)
    ) {
      forms.push(
        <VurderBesteberegningForm
          readOnly={readOnly}
          erOverstyrt={erOverstyrt}
          key={FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING}
        />,
      );
    }

    if (
      tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE) ||
      tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING) ||
      tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)
    ) {
      forms.push(
        <VurderMottarYtelseForm
          readOnly={readOnly}
          tilfeller={tilfeller}
          beregningsgrunnlag={beregningsgrunnlag}
          kodeverkSamling={kodeverkSamling}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          key={FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE}
        />,
      );
    }

    if (forms.length > 0) {
      if (readOnly) {
        return (
          <>
            {forms}
            <InntektInputFields
              beregningsgrunnlag={beregningsgrunnlag}
              isAksjonspunktClosed={isAksjonspunktClosed}
              readOnly={readOnly}
              tilfeller={tilfeller}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              kodeverkSamling={kodeverkSamling}
            />
            {renderTextFieldAndSubmitButton()}
          </>
        );
      }
      return (
        <AksjonspunktBox erAksjonspunktApent={true} erIkkeGodkjentAvBeslutter={false}>
          <VStack gap="6">
            {forms}
            {!erOverstyringAvBeregningsgrunnlag(formValues) && (
              <InntektInputFields
                beregningsgrunnlag={beregningsgrunnlag}
                isAksjonspunktClosed={isAksjonspunktClosed}
                readOnly={readOnly}
                tilfeller={tilfeller}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                kodeverkSamling={kodeverkSamling}
              />
            )}
            {renderTextFieldAndSubmitButton()}
          </VStack>
        </AksjonspunktBox>
      );
    }
    if (erOverstyringAvBeregningsgrunnlag(formValues)) {
      return renderTextFieldAndSubmitButton();
    }
    return null;
  };

  return (
    <VStack gap="8">
      <InntektstabellPanel
        key="inntektstabell"
        tabell={
          <InntektFieldArray
            readOnly={readOnly}
            skalKunneLeggeTilDagpengerManuelt={erOverstyrt}
            beregningsgrunnlag={beregningsgrunnlag}
            kodeverkSamling={kodeverkSamling}
          />
        }
        skalViseTabell={skalViseTabell}
        readOnly={readOnly}
        erOverstyrer={erOverstyrer}
        avklaringsbehov={avklaringsbehov}
        updateOverstyring={updateOverstyring}
        erOverstyrt={erOverstyrt}
      />
      {byggForms()}
    </VStack>
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
    [INNTEKT_FIELD_ARRAY_NAME]: InntektFieldArray.buildInitialValues(
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
    ? transformed.faktaOmBeregningTilfeller?.concat(newTransformedValues.faktaOmBeregningTilfeller)
    : transformed.faktaOmBeregningTilfeller,
});

const krevAndelsnr = (andelsnr: number | undefined): number => {
  if (!andelsnr) {
    throw new Error('Forventer andelsnr');
  }
  return andelsnr;
};

const transformValuesForOverstyring = (
  values: FaktaOmBeregningAksjonspunktValues,
  transformed: FaktaBeregningTransformedValues,
  inntektVerdier: InntektTransformed[],
  fastsatteAndelsnr: number[],
): BeregningFaktaTransformedValues => {
  if (erOverstyringAvBeregningsgrunnlag(values)) {
    const overstyrteAndeler: FastsettBeregningsgrunnlagAndelTransformedValues[] = inntektVerdier
      .filter(andel => !fastsatteAndelsnr.includes(krevAndelsnr(andel.andelsnr)))
      .filter(verdi => verdi.fastsattBelop != null)
      .map(verdi => ({
        andelsnr: verdi.andelsnr,
        nyAndel: !!verdi.nyAndel,
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

    // Arbeid under AAP
    transformed = concatTilfeller(transformed, transformValuesArbeidUnderAap(values, faktaOmBeregning));

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
    const inntektVerdier = InntektFieldArray.transformValues(
      values[INNTEKT_FIELD_ARRAY_NAME],
      values.frilansInntektValues,
      values.arbeidstakerInntektValues,
      values.dagpengerInntektValues,
      values.selvstendigNæringsdrivendeInntektValues,
      values.militærEllerSivilInntektValues,
      values.kunstigAndelInntektValues,
      !!values.manuellOverstyringRapportertInntekt,
    );
    const fastsatteAndelsnr: number[] = [];
    const transformed = transformValuesForAksjonspunkt(
      values,
      inntektVerdier,
      fastsatteAndelsnr,
      faktaOmBeregning,
      beregningsgrunnlag,
    );
    return transformValuesForOverstyring(values, transformed, inntektVerdier, fastsatteAndelsnr);
  };
