import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { RhfTextField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import type { AndelForFaktaOmBeregning } from '@navikt/ft-types';
import { parseCurrencyInput } from '@navikt/ft-utils';

import type { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';

interface Props {
  name: string;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  label: React.ReactNode;
}

export const InntektInput = ({ name, readOnly, isAksjonspunktClosed, label }: Props) => {
  const { resetField, control } = useFormContext<VurderFaktaBeregningFormValues>();
  useEffect(() => () => resetField(name as 'vurderFaktaBeregningForm.0.arbeidstakerInntektValues.0.fastsattBelop'), []);

  return (
    <RhfTextField
      // @ts-expect-error fiks
      name={name}
      control={control}
      htmlSize={8}
      parse={parseCurrencyInput}
      readOnly={readOnly}
      isEdited={isAksjonspunktClosed}
      validate={readOnly ? [] : [required, maxValueFormatted(178956970)]}
      label={label}
    />
  );
};

InntektInput.buildInitialValues = (
  andelerForFaktaOmBeregning: AndelForFaktaOmBeregning[],
  aktivitetStatus: string,
): { fastsattBelop: number } | undefined => {
  const fastsattBelop = andelerForFaktaOmBeregning?.find(
    andel => andel.aktivitetStatus === aktivitetStatus,
  )?.fastsattBelop;

  if (!fastsattBelop) {
    return undefined;
  }

  return { fastsattBelop };
};
