import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregning,
  KortvarigAndel,
} from '@navikt/ft-types';
import { dateFormat, formaterArbeidsgiver } from '@navikt/ft-utils';

import type { FaktaOmBeregningAksjonspunktValues, TidsbegrensetandelValues } from '../../../typer/FaktaBeregningTypes';
import type {
  FaktaBeregningTransformedValues,
  VurderteArbeidsforholdTransformedValues,
} from '../../../typer/interface/BeregningFaktaAP';
import type { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

const createArbeidsforholdRadioKey = (andel: KortvarigAndel): string =>
  andel && andel.arbeidsforhold
    ? `${andel.arbeidsforhold.arbeidsgiverIdent}(${andel.arbeidsforhold.arbeidsforholdId})(${andel.andelsnr})`
    : '';

const lagVisningsnavn = (
  arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  if (!arbeidsforhold.arbeidsgiverIdent) {
    throw new Error('Ikke arbeidsgiverident på kortvarig andel, ugyldig tilstand');
  }
  const agOpplysning = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  return formaterArbeidsgiver(agOpplysning, arbeidsforhold.eksternArbeidsforholdId);
};

const krevArbeidsforhold = (arbfor: BeregningsgrunnlagArbeidsforhold | undefined): BeregningsgrunnlagArbeidsforhold => {
  if (!arbfor) {
    throw new Error('Mangler arbeidsforhold på kortvarig andel, ugyldig tilstand');
  }
  return arbfor;
};

interface Props {
  readOnly: boolean;
  faktaOmBeregning: FaktaOmBeregning;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * TidsbegrensetArbeidsforholdForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for Vurder Tidsbegrenset Arbeidsforhold som ber
 * bruker bestemme om en liste med arbeidsforhold er tidsbegrenset eller ikke.
 */

export const TidsbegrensetArbeidsforholdForm = ({
  readOnly,
  faktaOmBeregning,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();
  const andelsliste = faktaOmBeregning.kortvarigeArbeidsforhold;
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const intl = useIntl();
  if (!andelsliste || andelsliste.length === 0) {
    return null;
  }

  return (
    <VStack gap="space-24">
      {andelsliste.map(andel => {
        const arbeidsforhold = krevArbeidsforhold(andel.arbeidsforhold);
        const visningsNavn = lagVisningsnavn(arbeidsforhold, arbeidsgiverOpplysningerPerId);

        return (
          <RhfRadioGroup
            key={`fastsettTidsbegrensedeForhold_${visningsNavn}`}
            name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.tidsbegrensetValues.${createArbeidsforholdRadioKey(
              andel,
            )}`}
            control={control}
            label={
              <VStack gap="space-8">
                <FormattedMessage
                  id="BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold"
                  values={{
                    navn: visningsNavn,
                    fom: arbeidsforhold.startdato ? dateFormat(arbeidsforhold?.startdato) : '',
                    tom: arbeidsforhold.opphoersdato ? dateFormat(arbeidsforhold.opphoersdato) : '',
                  }}
                />
                <ReadMore
                  size="small"
                  header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
                >
                  <FormattedMessage id="BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore" />
                </ReadMore>
              </VStack>
            }
            isReadOnly={readOnly}
            radios={[
              { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
              { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
            ]}
            validate={[required]}
            parse={parseStringToBoolean}
          />
        );
      })}
    </VStack>
  );
};

TidsbegrensetArbeidsforholdForm.buildInitialValues = (andeler?: KortvarigAndel[]): TidsbegrensetandelValues => {
  const initialValues: TidsbegrensetandelValues = {};
  if (!andeler) {
    return initialValues;
  }
  andeler.forEach(andel => {
    if (andel.erTidsbegrensetArbeidsforhold !== undefined) {
      initialValues[createArbeidsforholdRadioKey(andel)] = andel.erTidsbegrensetArbeidsforhold;
    }
  });
  return initialValues;
};

TidsbegrensetArbeidsforholdForm.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  andeler: KortvarigAndel[],
): FaktaBeregningTransformedValues => {
  const newValues: VurderteArbeidsforholdTransformedValues[] = [];
  andeler.forEach(andel => {
    const fieldName = createArbeidsforholdRadioKey(andel);
    const booleanValue = !!values.tidsbegrensetValues && values.tidsbegrensetValues[fieldName];
    if (!andel.andelsnr) {
      throw new Error('Ikke satt andelsnr på tidsbegrense andel, ugyldig tilstand');
    }
    const valueObject = {
      andelsnr: andel.andelsnr,
      tidsbegrensetArbeidsforhold: booleanValue,
      opprinneligVerdi: andel.erTidsbegrensetArbeidsforhold,
    };
    newValues.push(valueObject);
  });
  return {
    vurderTidsbegrensetArbeidsforhold: { fastsatteArbeidsforhold: newValues },
  };
};
