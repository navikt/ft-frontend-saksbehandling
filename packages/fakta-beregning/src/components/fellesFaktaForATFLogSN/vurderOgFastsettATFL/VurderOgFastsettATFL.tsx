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

import { FaktaOmBeregningAksjonspunktValues, VurderOgFastsettATFLValues } from '../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../typer/FieldValues';
import {
  BeregningFaktaTransformedValues,
  FaktaBeregningTransformedValues,
  FastsettBeregningsgrunnlagAndelTransformedValues,
} from '../../../typer/interface/BeregningFaktaAP';
import { KodeverkForPanel } from '../../../typer/KodeverkForPanelForFb';
import { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { AksjonspunktBoks } from '../../felles/AksjonspunktBoks';
import {
  besteberegningField,
  VurderBesteberegningPanel,
} from '../besteberegningFodendeKvinne/VurderBesteberegningForm';
import { vurderBesteberegningTransform } from '../besteberegningFodendeKvinne/vurderBesteberegningFormUtils';
import { erOverstyring, erOverstyringAvBeregningsgrunnlag, INNTEKT_FIELD_ARRAY_NAME } from '../BgFaktaUtils';
import { InntektFieldArray } from '../InntektFieldArray';
import { InntektstabellPanel } from '../InntektstabellPanel';
import { NyIArbeidslivetSNForm } from '../nyIArbeidslivet/NyIArbeidslivetSNForm';
import { TidsbegrensetArbeidsforholdForm } from '../tidsbegrensetArbeidsforhold/TidsbegrensetArbeidsforholdForm';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';
import { VurderMilitaer } from '../vurderMilitaer/VurderMilitaer';
import { VurderRefusjonForm } from '../vurderrefusjon/VurderRefusjonForm';
import { transformValuesArbeidUtenInntektsmelding } from './forms/ArbeidUtenInntektsmelding';
import { transformValuesForATFLISammeOrg } from './forms/ATFLSammeOrg';
import { InntektInputFields } from './forms/InntektInputFields';
import { LonnsendringForm } from './forms/LonnsendringForm';
import { NyoppstartetFLForm } from './forms/NyoppstartetFLForm';
import { VurderEtterlonnSluttpakkeForm } from './forms/VurderEtterlonnSluttpakkeForm';
import { VurderMottarYtelseForm } from './forms/VurderMottarYtelseForm';

const getSkalViseTabell = (tilfeller: string[]) => !tilfeller.includes(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE);

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

type Props = {
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
  vilkarsperiodeSkalVurderesIBehandlingen: boolean;
};

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
    const keys: string[] = [];
    let hasShownPanel = false;
    const { faktaOmBeregning } = beregningsgrunnlag;
    if (!faktaOmBeregning) {
      return null;
    }

    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD)) {
      hasShownPanel = true;
      keys.push(FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);
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
      keys.push(FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET);
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET}>
          <NyIArbeidslivetSNForm readOnly={readOnly} />
        </React.Fragment>,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE)) {
      hasShownPanel = true;
      keys.push(FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE);
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE}>
          <VurderMilitaer readOnly={readOnly} />
        </React.Fragment>,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT)) {
      hasShownPanel = true;
      keys.push(FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT);
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

    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING)) {
      hasShownPanel = true;
      keys.push(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING);
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_LONNSENDRING}>
          <LonnsendringForm readOnly={readOnly} />
        </React.Fragment>,
      );
    }
    if (tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE)) {
      hasShownPanel = true;
      keys.push(FaktaOmBeregningTilfelle.VURDER_ETTERLONN_SLUTTPAKKE);
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
      keys.push(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL);
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
      keys.push(FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING);
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_BESTEBEREGNING}>
          <VurderBesteberegningPanel readOnly={readOnly} erOverstyrt={erOverstyrt} />
        </React.Fragment>,
      );
    }

    if (
      tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE) ||
      tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)
    ) {
      hasShownPanel = true;
      keys.push(FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE);
      forms.push(
        <React.Fragment key={FaktaOmBeregningTilfelle.VURDER_MOTTAR_YTELSE}>
          <VurderMottarYtelseForm
            readOnly={readOnly}
            tilfeller={tilfeller}
            beregningsgrunnlag={beregningsgrunnlag}
            kodeverkSamling={kodeverkSamling}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </React.Fragment>,
      );
    }
    if (!vilkarsperiodeSkalVurderesIBehandlingen) {
      return null;
    }
    if (hasShownPanel) {
      if (readOnly) {
        return (
          <>
            {forms.map((form, index) => (
              <VStack gap="8" key={keys[index]}>
                {form}
              </VStack>
            ))}
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
        <AksjonspunktBoks>
          <VStack gap="4">
            {forms.map((form, index) => (
              <VStack gap="8" key={keys[index]}>
                {form}
              </VStack>
            ))}
            {!erOverstyring(formValues) && (
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
        </AksjonspunktBoks>
      );
    }
    if (erOverstyring(formValues)) {
      return renderTextFieldAndSubmitButton();
    }
    return null;
  };

  return (
    <VStack gap="8">
      <InntektstabellPanel
        key="inntektstabell"
        tabell={finnInntektstabell(readOnly, beregningsgrunnlag, kodeverkSamling, erOverstyrt)}
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
  if (erOverstyring(values)) {
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
