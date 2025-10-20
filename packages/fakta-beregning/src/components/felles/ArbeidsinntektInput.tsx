import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import type { AndelForFaktaOmBeregning, ArbeidsgiverOpplysningerPerId, ATFLSammeOrgAndel } from '@navikt/ft-types';

import type { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import { BeregningsgrunnlagIndexContext } from '../fellesFaktaForATFLogSN/VurderFaktaContext';
import { getArbeidsgiverIndex } from './arbeidsinntektInputUtils';
import { InntektInput } from './InntektInput';

interface Props {
  arbeidsgiver: ATFLSammeOrgAndel;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  label?: React.ReactNode;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

type FormValues = {
  fastsattBelop: number | undefined;
  arbeidsgiverIdent: string | undefined;
};

export const ArbeidsinntektInput = ({
  arbeidsgiver,
  readOnly,
  isAksjonspunktClosed,
  label,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues`);
  if (!formValues) {
    return null;
  }
  const agIdent = arbeidsgiver.arbeidsforhold?.arbeidsgiverIdent;
  const arbeidsgiverIndex = getArbeidsgiverIndex(formValues, agIdent);

  const fieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues.${arbeidsgiverIndex}.fastsattBelop`;
  const arbeidsgiverNavn = agIdent ? arbeidsgiverOpplysningerPerId[agIdent]?.navn : undefined;

  return (
    <InntektInput
      name={fieldName}
      readOnly={readOnly}
      isAksjonspunktClosed={isAksjonspunktClosed}
      label={
        label ?? (
          <FormattedMessage
            id="BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift"
            values={{
              bedrift: `${arbeidsgiverNavn} (${agIdent})`,
            }}
          />
        )
      }
    />
  );
};

ArbeidsinntektInput.buildInitialValues = (andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[]): FormValues[] => {
  const initialValues: FormValues[] = [];
  andelerForFaktaOmBeregning
    ?.filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER && andel.arbeidsforhold)
    .forEach(andel => {
      const arbeidsgiver = {
        fastsattBelop: andel.fastsattBelop,
        arbeidsgiverIdent: andel.arbeidsforhold?.arbeidsgiverIdent,
      };
      initialValues.push(arbeidsgiver);
    });

  return initialValues;
};
