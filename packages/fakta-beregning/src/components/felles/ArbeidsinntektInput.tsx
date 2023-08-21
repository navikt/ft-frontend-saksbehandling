import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ATFLSammeOrgAndel, AndelForFaktaOmBeregning } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { ArbeidstakerInntektValues } from '../../typer/FaktaBeregningTypes';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { BeregningsgrunnlagIndexContext } from '../fellesFaktaForATFLogSN/VurderFaktaContext';
import InntektInput from './InntektInput';

export const getArbeidsgiverIndex = (arbeidstakerInntektValues: ArbeidstakerInntektValues[], arbeidsgiverId: string) =>
  arbeidstakerInntektValues.findIndex(a => a.arbeidsgiverId === arbeidsgiverId);

interface ArbeidsinntektInputProps {
  arbeidsgiver: ATFLSammeOrgAndel;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  label?: React.ReactNode;
}

export type FormValues = {
  fastsattBelop: number;
  arbeidsgiverId: string;
};

interface StaticFunctions {
  buildInitialValues: (andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[]) => FormValues[];
}

const ArbeidsinntektInput: FunctionComponent<ArbeidsinntektInputProps> & StaticFunctions = ({
  arbeidsgiver,
  readOnly,
  isAksjonspunktClosed,
  label,
}) => {
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues`);
  const arbeidsgiverIndex = getArbeidsgiverIndex(formValues, arbeidsgiver.arbeidsforhold.arbeidsgiverId);

  const fieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues.${arbeidsgiverIndex}.fastsattBelop`;

  return (
    <>
      <VerticalSpacer thirtyTwoPx />
      <InntektInput
        name={fieldName}
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        label={
          label || (
            <FormattedMessage
              id="BeregningInfoPanel.VurderMottarYtelse.ManedsinntektBedrift"
              values={{
                bedrift: `${arbeidsgiver.arbeidsforhold.arbeidsgiverNavn} (${arbeidsgiver.arbeidsforhold.arbeidsgiverId})`,
              }}
            />
          )
        }
      />
    </>
  );
};

ArbeidsinntektInput.buildInitialValues = (andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[]): FormValues[] => {
  const initialValues = [];
  andelerForFaktaOmBeregning
    ?.filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER && andel.arbeidsforhold)
    .forEach(andel => {
      const arbeidsgiver = {
        fastsattBelop: '',
        arbeidsgiverId: andel.arbeidsforhold.arbeidsgiverId,
      };
      initialValues.push(arbeidsgiver);
    });

  return initialValues;
};

export default ArbeidsinntektInput;
