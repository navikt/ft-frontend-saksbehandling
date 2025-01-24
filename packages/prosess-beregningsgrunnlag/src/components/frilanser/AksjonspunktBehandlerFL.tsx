import { BodyShort } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr, parseCurrencyInput } from '@navikt/ft-utils';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
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
};

/**
 * AksjonspunktBehandlerFL
 *
 * Viser et inputfelt for å sette frilansinntekt ved aksjonspunkt.
 */
export const AksjonspunktBehandlerFL = ({ readOnly, fieldIndex, formName, alleAndelerIForstePeriode }: Props) => (
  <FlexRow className={styles.verticalAlignMiddle}>
    <FlexColumn className={styles.atflAvvikAktivitet}>
      <BodyShort size="small">
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL" />
      </BodyShort>
    </FlexColumn>
    <FlexColumn className={styles.atflAvvikInntekt}>
      <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
        <InputField
          name={`${formName}.${fieldIndex}.inntektFrilanser`}
          validate={[required, maxValueFormatted(178956970)]}
          readOnly={readOnly}
          parse={parseCurrencyInput}
          className={styles.breddeInntekt}
          isEdited={readOnly && erFrilansFastsatt(alleAndelerIForstePeriode)}
        />
      </div>
    </FlexColumn>
  </FlexRow>
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
