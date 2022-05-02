import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';

import { InputField } from '@navikt/ft-form-hooks';
import {
  formatCurrencyNoKr, parseCurrencyInput, required,
} from '@navikt/ft-utils';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';

import styles from '../fellesPaneler/aksjonspunktBehandler.less';
import { FrilansInntektValues } from '../../types/ATFLAksjonspunktTsType';

interface StaticFunctions {
  buildInitialValues: (relevanteAndeler: BeregningsgrunnlagAndel[]) => FrilansInntektValues;
}

type OwnProps = {
  readOnly: boolean;
};

const AksjonspunktBehandlerFL: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => (
  <Row className={styles.verticalAlignMiddle}>
    <Column xs="7">
      <Normaltekst>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerFL" />
      </Normaltekst>
    </Column>
    <Column xs="5">
      <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
        <InputField
          name="inntektFrilanser"
          validate={[required]}
          readOnly={readOnly}
          parse={parseCurrencyInput}
          bredde="XS"
        />
      </div>
    </Column>
  </Row>
);

AksjonspunktBehandlerFL.buildInitialValues = (relevanteAndeler: BeregningsgrunnlagAndel[]): FrilansInntektValues => {
  const overstyrtBeløp = relevanteAndeler.length > 0 ? relevanteAndeler[0].overstyrtPrAar : undefined;
  return {
    inntektFrilanser: overstyrtBeløp !== undefined ? formatCurrencyNoKr(overstyrtBeløp) : '',
  };
};

export default AksjonspunktBehandlerFL;
