import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Spacer } from '@navikt/ds-react';

import { RhfTextField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import type { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import type { ATFLValues, FrilansInntektValues } from '../../types/ATFLAksjonspunkt';
import type { BeregningFormValues, FormNameType } from '../../types/BeregningFormValues';

const erFrilansFastsatt = (alleAndelerIForstePeriode: BeregningsgrunnlagAndel[]): boolean =>
  alleAndelerIForstePeriode.some(
    andel => andel.aktivitetStatus === 'FL' && (andel.overstyrtPrAar || andel.overstyrtPrAar === 0),
  );

interface Props {
  readOnly: boolean;
  fieldIndex: number;
  formName: FormNameType;
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
  skalValideres: boolean;
}

/**
 * AksjonspunktBehandlerFL
 *
 * Viser et inputfelt for å sette frilansinntekt ved aksjonspunkt.
 */
export const AksjonspunktBehandlerFL = ({
  readOnly,
  fieldIndex,
  formName,
  alleAndelerIForstePeriode,
  skalValideres,
}: Props) => {
  const { control } = useFormContext<BeregningFormValues>();
  return (
    <HStack wrap={false}>
      <BodyShort size="small">
        <FormattedMessage id="AksjonspunktBehandlerFL.Label" />
      </BodyShort>
      <Spacer />
      <RhfTextField
        control={control}
        name={`${formName}.${fieldIndex}.inntektFrilanser`}
        validate={skalValideres ? [required, maxValueFormatted(178956970)] : undefined}
        readOnly={readOnly}
        hideLabel
        parse={parseCurrencyInput}
        htmlSize={12}
        style={{ textAlign: 'right' }}
        isEdited={readOnly && erFrilansFastsatt(alleAndelerIForstePeriode)}
      />
    </HStack>
  );
};

AksjonspunktBehandlerFL.buildInitialValues = (relevanteAndeler: BeregningsgrunnlagAndel[]): FrilansInntektValues => {
  const overstyrtBeløp =
    relevanteAndeler.length > 0 ? formatCurrencyNoKr(relevanteAndeler[0].overstyrtPrAar) : undefined;
  if (overstyrtBeløp) {
    return {
      inntektFrilanser: overstyrtBeløp,
    };
  }
  return {};
};

AksjonspunktBehandlerFL.transformValues = (values: ATFLValues) => ({
  inntektFrilanser: values.inntektFrilanser === undefined ? null : removeSpacesFromNumber(values.inntektFrilanser),
});
