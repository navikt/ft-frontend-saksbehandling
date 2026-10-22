import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import type { TextFieldProps } from '@navikt/ds-react';

import { RhfTextField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import type { AktivitetStatus, AndelForFaktaOmBeregning } from '@navikt/ft-types';
import { parseCurrencyInput } from '@navikt/ft-utils';

import type { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';

type Props = {
  name:
    | `vurderFaktaBeregningForm.${number}.arbeidstakerInntektValues.${number}.fastsattBelop`
    | `vurderFaktaBeregningForm.${number}.frilansInntektValues.fastsattBelop`
    | `vurderFaktaBeregningForm.${number}.kunstigAndelInntektValues.fastsattBelop`
    | `vurderFaktaBeregningForm.${number}.dagpengerInntektValues.fastsattBelop`
    | `vurderFaktaBeregningForm.${number}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`
    | `vurderFaktaBeregningForm.${number}.militærEllerSivilInntektValues.fastsattBelop`;
  isAksjonspunktClosed: boolean;
  readOnly: boolean;
} & Pick<TextFieldProps, 'label' | 'description'>;

export const InntektInput = ({ name, readOnly, isAksjonspunktClosed, ...textfieldProps }: Props) => {
  const { resetField, control } = useFormContext<VurderFaktaBeregningFormValues>();
  useEffect(() => () => resetField(name), []);

  return (
    <RhfTextField
      name={name}
      control={control}
      align="right"
      htmlSize={10}
      parse={parseCurrencyInput}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
      validate={readOnly ? [] : [required, maxValueFormatted(178956970)]}
      {...textfieldProps}
    />
  );
};

InntektInput.buildInitialValues = (
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[],
  aktivitetStatus: AktivitetStatus,
): { fastsattBelop: number } | undefined => {
  const fastsattBelop = andelerForFaktaOmBeregning?.find(
    andel => andel.aktivitetStatus === aktivitetStatus,
  )?.fastsattBelop;

  if (!fastsattBelop) {
    return undefined;
  }

  return { fastsattBelop };
};
