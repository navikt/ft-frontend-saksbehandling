import { BodyShort } from '@navikt/ds-react';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ATFLSammeOrgAndel, AndelForFaktaOmBeregning } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import InntektInput from './InntektInput';
import { BeregningsgrunnlagIndexContext } from '../fellesFaktaForATFLogSN/VurderFaktaContext';

interface ArbeidsinntektInputProps {
  arbeidsgiver: ATFLSammeOrgAndel;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
}

export type FormValues = {
  [key: string]: any;
};

interface StaticFunctions {
  buildInitialValues: (andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[]) => FormValues;
}

const ArbeidsinntektInput: FunctionComponent<ArbeidsinntektInputProps> & StaticFunctions = ({
  arbeidsgiver,
  readOnly,
  isAksjonspunktClosed,
}) => {
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const fieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues.${arbeidsgiver.arbeidsforhold.arbeidsgiverId}`;

  return (
    <>
      <VerticalSpacer twentyPx />
      <InntektInput
        name={fieldName}
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        label={
          <BodyShort>
            <FormattedMessage
              id="BeregningInfoPanel.VurderMottarYtelse.ManedsinntektBedrift"
              values={{
                bedrift: `${arbeidsgiver.arbeidsforhold.arbeidsgiverNavn} (${arbeidsgiver.arbeidsforhold.arbeidsgiverId})`,
              }}
            />
          </BodyShort>
        }
      />
    </>
  );
};

ArbeidsinntektInput.buildInitialValues = (andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[]): FormValues => {
  const initialValues = {};
  andelerForFaktaOmBeregning
    ?.filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER && andel.arbeidsforhold)
    .forEach(andel => {
      initialValues[andel.arbeidsforhold.arbeidsgiverId] = '';
    });
  return initialValues;
};

export default ArbeidsinntektInput;
