import React, { FunctionComponent } from 'react';
import { BodyShort } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';

import { InputField } from '@navikt/ft-form-hooks';
import { formatCurrencyNoKr, parseCurrencyInput } from '@navikt/ft-utils';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';

import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import styles from '../fellesPaneler/aksjonspunktBehandler.less';
import { FrilansInntektValues } from '../../types/ATFLAksjonspunktTsType';

interface StaticFunctions {
  buildInitialValues: (relevanteAndeler: BeregningsgrunnlagAndel[]) => FrilansInntektValues;
}

type OwnProps = {
  readOnly: boolean;
  fieldIndex: number;
};

const AksjonspunktBehandlerFL: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly, fieldIndex }) => (
  <FlexRow>
    <FlexColumn className={styles.atflAvvikAktivitet}>
      <BodyShort size="small">
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL" />
      </BodyShort>
    </FlexColumn>
    <FlexColumn className={styles.atflAvvikInntekt}>
      <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
        <InputField
          name={`BeregningForm.${fieldIndex}.inntektFrilanser`}
          validate={[required, maxValueFormatted(178956970)]}
          readOnly={readOnly}
          parse={parseCurrencyInput}
          className={styles.bredde}
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

export default AksjonspunktBehandlerFL;
