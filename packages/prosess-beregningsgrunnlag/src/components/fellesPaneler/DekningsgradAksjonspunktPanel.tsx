import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import { isAksjonspunktOpen, Dekningsgrad } from '@navikt/ft-kodeverk';

import { Aksjonspunkt, Beregningsgrunnlag } from '@navikt/ft-types';
import { RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { DekningsgradResultatAp } from '../../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import DekningsgradValues from '../../types/DekningsgradAksjonspunktTsType';
import styles from './aksjonspunktBehandler.less';

const RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN = 'dekningsgrad';
const TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING = 'begrunnDekningsgradEndring';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

enum DekningsgradOption {
  HUNDRE = 'HUNDRE',
  ATTI = 'ÅTTI',
}

const stringTilNumberParser = (value: string): number => {
  if (value === DekningsgradOption.ATTI) {
    return Dekningsgrad.ATTI;
  }
  if (value === DekningsgradOption.HUNDRE) {
    return Dekningsgrad.HUNDRE;
  }
  throw new Error(`Ukjent dekningsgrad ${value}`);
};

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag, aksjonspunkter: Aksjonspunkt[]) => DekningsgradValues;
  transformValues: (values: Required<DekningsgradValues>) => DekningsgradResultatAp;
}

type OwnProps = {
  readOnly: boolean;
};

/**
 * SkjeringspunktOgStatusPanel
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */
const DekningsgradAksjonspunktPanel: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => {
  const intl = useIntl();
  const radioknapper = [
    {
      value: DekningsgradOption.ATTI,
      label: intl.formatMessage({ id: 'Beregningsgrunnlag.Skjeringstidspunkt.Prosent80' }),
    },
    {
      value: DekningsgradOption.HUNDRE,
      label: intl.formatMessage({ id: 'Beregningsgrunnlag.Skjeringstidspunkt.Prosent100' }),
    },
  ];
  return (
    <>
      <RadioGroupPanel
        name={RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN}
        isReadOnly={readOnly}
        validate={[required]}
        radios={radioknapper}
        parse={stringTilNumberParser}
      />
      <Row>
        <Column xs="12">
          <TextAreaField
            name={TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING}
            label={<FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />}
            validate={[required, maxLength1500, minLength3, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
            textareaClass={styles.textAreaStyle}
            placeholder={intl.formatMessage({ id: 'Beregningsgrunnlag.Forms.BegrunnEndringAvDekningsgrad' })}
          />
        </Column>
      </Row>
    </>
  );
};

DekningsgradAksjonspunktPanel.buildInitialValues = (
  beregningsgrunnlag: Beregningsgrunnlag,
  aksjonspunter: Aksjonspunkt[],
): DekningsgradValues => {
  const aksjonspunkt =
    aksjonspunter &&
    aksjonspunter.find(ap => ap.definisjon === ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_DEKNINGSGRAD);
  const begrunnelse = aksjonspunkt && aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : null;
  const initialDekningsgrad =
    aksjonspunkt && !isAksjonspunktOpen(aksjonspunkt.status) ? beregningsgrunnlag.dekningsgrad : null;
  if (initialDekningsgrad && begrunnelse) {
    return {
      [RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN]: initialDekningsgrad,
      [TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING]: begrunnelse,
    };
  }
  return {};
};

DekningsgradAksjonspunktPanel.transformValues = (values: Required<DekningsgradValues>): DekningsgradResultatAp => ({
  kode: ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_DEKNINGSGRAD,
  begrunnelse: values[TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING],
  dekningsgrad: values[RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN],
});

export default DekningsgradAksjonspunktPanel;
