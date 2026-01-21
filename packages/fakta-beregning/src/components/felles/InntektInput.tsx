import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import type { TextFieldProps } from '@navikt/ds-react';

import { RhfTextField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import type { AktivitetStatus, AndelForFaktaOmBeregning } from '@navikt/ft-types';
import { parseCurrencyInput } from '@navikt/ft-utils';

import type { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';

type Props = {
  name: string;
  isAksjonspunktClosed: boolean;
} & TextFieldProps;

export const InntektInput = ({ name, readOnly, isAksjonspunktClosed, ...textfieldProps }: Props) => {
  const { resetField, control } = useFormContext<VurderFaktaBeregningFormValues>();
  useEffect(() => () => resetField(name as 'vurderFaktaBeregningForm.0.arbeidstakerInntektValues.0.fastsattBelop'), []);

  return (
    <RhfTextField
      dir="rtl"
      // @ts-expect-error fiks
      name={name}
      control={control}
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
