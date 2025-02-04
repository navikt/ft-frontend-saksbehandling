import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ReadMore } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagArbeidsforhold,
  FaktaOmBeregning,
  KortvarigAndel,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import { FaktaOmBeregningAksjonspunktValues, TidsbegrensetandelValues } from '../../../typer/FaktaBeregningTypes';
import {
  FaktaBeregningTransformedValues,
  VurderteArbeidsforholdTransformedValues,
} from '../../../typer/interface/BeregningFaktaAP';
import { createVisningsnavnFakta } from '../../ArbeidsforholdHelper';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

const kortvarigStringId = 'BeregningInfoPanel.TidsbegrensetArbFor.Arbeidsforhold';

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
  return createVisningsnavnFakta(agOpplysning, arbeidsforhold.eksternArbeidsforholdId);
};

const krevArbeidsforhold = (arbfor: BeregningsgrunnlagArbeidsforhold | undefined): BeregningsgrunnlagArbeidsforhold => {
  if (!arbfor) {
    throw new Error('Mangler arbeidsforhold på kortvarig andel, ugyldig tilstand');
  }
  return arbfor;
};

type Props = {
  readOnly: boolean;
  faktaOmBeregning: FaktaOmBeregning;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

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
  const andelsliste = faktaOmBeregning.kortvarigeArbeidsforhold;
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const intl = useIntl();
  if (!andelsliste || andelsliste.length === 0) {
    return null;
  }
  return (
    <div>
      {andelsliste.map((andel, index) => (
        <div
          key={`fastsettTidsbegrensedeForhold_${lagVisningsnavn(krevArbeidsforhold(andel.arbeidsforhold), arbeidsgiverOpplysningerPerId)}`}
        >
          {index > 0 && <VerticalSpacer twentyPx />}
          <RadioGroupPanel
            label={
              <>
                <FormattedMessage
                  id={kortvarigStringId}
                  values={{
                    navn: lagVisningsnavn(krevArbeidsforhold(andel.arbeidsforhold), arbeidsgiverOpplysningerPerId),
                    fom: dayjs(krevArbeidsforhold(andel.arbeidsforhold).startdato).format(DDMMYYYY_DATE_FORMAT),
                    tom: dayjs(krevArbeidsforhold(andel.arbeidsforhold).opphoersdato).format(DDMMYYYY_DATE_FORMAT),
                  }}
                />
                <ReadMore
                  size="small"
                  header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
                >
                  <FormattedMessage id="BeregningInfoPanel.TidsbegrensetArbeidsforholdForm.ReadMore" />
                </ReadMore>
              </>
            }
            name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.tidsbegrensetValues.${createArbeidsforholdRadioKey(
              andel,
            )}`}
            isReadOnly={readOnly}
            radios={[
              { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
              { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
            ]}
            validate={[required]}
            parse={parseStringToBoolean}
          />
        </div>
      ))}
    </div>
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
