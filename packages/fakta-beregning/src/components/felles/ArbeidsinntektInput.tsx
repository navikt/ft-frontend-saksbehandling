import React from 'react';
import { useFormContext } from 'react-hook-form';

import { type TextFieldProps } from '@navikt/ds-react';

import type { AndelForFaktaOmBeregning, ATFLSammeOrgAndel } from '@navikt/ft-types';

import type { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import { BeregningsgrunnlagIndexContext } from '../fellesFaktaForATFLogSN/VurderFaktaContext';
import { getArbeidsgiverIndex } from './arbeidsinntektInputUtils';
import { InntektInput } from './InntektInput';

type Props = {
  arbeidsgiver: ATFLSammeOrgAndel;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
} & TextFieldProps;

type FormValues = {
  fastsattBelop: number | undefined;
  arbeidsgiverIdent: string | undefined;
};

export const ArbeidsinntektInput = ({ arbeidsgiver, readOnly, isAksjonspunktClosed, ...textfieldProps }: Props) => {
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues`);
  if (!formValues) {
    return null;
  }
  const agIdent = arbeidsgiver.arbeidsforhold?.arbeidsgiverIdent;
  const arbeidsgiverIndex = getArbeidsgiverIndex(formValues, agIdent);

  const fieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues.${arbeidsgiverIndex}.fastsattBelop`;

  return (
    <InntektInput
      name={fieldName}
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      {...textfieldProps}
    />
  );
};

ArbeidsinntektInput.buildInitialValues = (andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[]): FormValues[] => {
  const initialValues: FormValues[] = [];
  andelerForFaktaOmBeregning
    ?.filter(andel => andel.aktivitetStatus === 'AT' && andel.arbeidsforhold)
    .forEach(andel => {
      const arbeidsgiver = {
        fastsattBelop: andel.fastsattBelop,
        arbeidsgiverIdent: andel.arbeidsforhold?.arbeidsgiverIdent,
      };
      initialValues.push(arbeidsgiver);
    });

  return initialValues;
};
