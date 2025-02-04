import { FormattedMessage } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';

import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
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
const AksjonspunktBehandlerFL: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  fieldIndex,
  formName,
  alleAndelerIForstePeriode,
  skalValideres,
}) => (
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
          validate={skalValideres ? [required, maxValueFormatted(178956970)] : undefined}
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
