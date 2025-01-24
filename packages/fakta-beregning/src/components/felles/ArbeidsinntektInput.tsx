import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ATFLSammeOrgAndel, AndelForFaktaOmBeregning, ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { ArbeidstakerInntektValues } from '../../typer/FaktaBeregningTypes';
import { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import { BeregningsgrunnlagIndexContext } from '../fellesFaktaForATFLogSN/VurderFaktaContext';
import { InntektInput } from './InntektInput';

export const getArbeidsgiverIndex = (
  arbeidstakerInntektValues: ArbeidstakerInntektValues[],
  arbeidsgiverIdent: string,
) => arbeidstakerInntektValues.findIndex(a => a.arbeidsgiverIdent === arbeidsgiverIdent);

interface Props {
  arbeidsgiver: ATFLSammeOrgAndel;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  label?: React.ReactNode;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export type FormValues = {
  fastsattBelop: number;
  arbeidsgiverIdent: string;
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
  const arbeidsgiverIndex = getArbeidsgiverIndex(formValues, arbeidsgiver.arbeidsforhold.arbeidsgiverIdent);

  const fieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues.${arbeidsgiverIndex}.fastsattBelop`;
  const arbeidsgiverNavn = arbeidsgiverOpplysningerPerId[arbeidsgiver.arbeidsforhold.arbeidsgiverIdent]?.navn;

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
              id="BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift"
              values={{
                bedrift: `${arbeidsgiverNavn} (${arbeidsgiver.arbeidsforhold.arbeidsgiverIdent})`,
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
        fastsattBelop: andel.fastsattBelop,
        arbeidsgiverIdent: andel.arbeidsforhold.arbeidsgiverIdent,
      };
      initialValues.push(arbeidsgiver);
    });

  return initialValues;
};
