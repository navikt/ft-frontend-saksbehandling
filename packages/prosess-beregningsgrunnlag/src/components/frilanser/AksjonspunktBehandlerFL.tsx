import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack } from '@navikt/ds-react';

import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr, parseCurrencyInput } from '@navikt/ft-utils';

import { FrilansInntektValues } from '../../types/ATFLAksjonspunkt';

import styles from '../fellesPaneler/aksjonspunktBehandler.module.css';

const erFrilansFastsatt = (alleAndelerIForstePeriode: BeregningsgrunnlagAndel[]): boolean =>
  alleAndelerIForstePeriode.some(
    andel =>
      andel.aktivitetStatus === AktivitetStatus.FRILANSER && (andel.overstyrtPrAar || andel.overstyrtPrAar === 0),
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
}: Props) => (
  <HStack gap="2" align="center">
    <BodyShort size="small">
      <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL" />
    </BodyShort>
    <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
      <InputField
        name={`${formName}.${fieldIndex}.inntektFrilanser`}
        validate={skalValideres ? [required, maxValueFormatted(178956970)] : undefined}
        readOnly={readOnly}
        parse={parseCurrencyInput}
        className={styles.breddeInntekt}
        isEdited={readOnly && erFrilansFastsatt(alleAndelerIForstePeriode)}
      />
    </div>
  </HStack>
);

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
