import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';

import { RhfTextField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import type { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr, parseCurrencyInput } from '@navikt/ft-utils';

import type { FrilansInntektValues } from '../../types/ATFLAksjonspunkt';
import type { BeregningFormValues } from '../../types/BeregningFormValues';
import { HorizontalBox } from '../../util/HorizontalBox';

import styles from '../fellesPaneler/aksjonspunktBehandler.module.css';

const erFrilansFastsatt = (alleAndelerIForstePeriode: BeregningsgrunnlagAndel[]): boolean =>
  alleAndelerIForstePeriode.some(
    andel => andel.aktivitetStatus === 'FL' && (andel.overstyrtPrAar || andel.overstyrtPrAar === 0),
  );

type Props = {
  readOnly: boolean;
  fieldIndex: number;
  formName: string;
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
  skalValideres: boolean;
};

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
    <HorizontalBox>
      <BodyShort size="small">
        <FormattedMessage id="AksjonspunktBehandlerFL.Label" />
      </BodyShort>
      <RhfTextField
        control={control}
        name={`${formName}.${fieldIndex}.inntektFrilanser`}
        validate={skalValideres ? [required, maxValueFormatted(178956970)] : undefined}
        readOnly={readOnly}
        hideLabel
        parse={parseCurrencyInput}
        className={styles.beløpInput}
        isEdited={readOnly && erFrilansFastsatt(alleAndelerIForstePeriode)}
      />
    </HorizontalBox>
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
