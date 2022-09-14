import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';

import { isAksjonspunktOpen, Dekningsgrad } from '@navikt/ft-kodeverk';

import { Beregningsgrunnlag } from '@navikt/ft-types';
import { RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DekningsgradResultatAp } from '../../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import DekningsgradValues from '../../types/DekningsgradAksjonspunktTsType';
import styles from './aksjonspunktBehandler.less';

const RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN = 'dekningsgrad';
const TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING = 'begrunnDekningsgradEndring';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const stringTilNumberParser = (value: string): number => (value === 'HUNDRE' ? Dekningsgrad.HUNDRE : Dekningsgrad.ATTI);

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag) => DekningsgradValues;
  transformValues: (values: Required<DekningsgradValues>) => DekningsgradResultatAp;
}

type OwnProps = {
  readOnly: boolean;
  fieldIndex: number;
};

/**
 * SkjeringspunktOgStatusPanel
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */
const DekningsgradAksjonspunktPanel: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly, fieldIndex }) => {
  const intl = useIntl();
  const radioknapper = [
    {
      value: 'ÅTTI',
      label: intl.formatMessage({ id: 'Beregningsgrunnlag.Skjeringstidspunkt.Prosent80' }),
    },
    {
      value: 'HUNDRE',
      label: intl.formatMessage({ id: 'Beregningsgrunnlag.Skjeringstidspunkt.Prosent100' }),
    },
  ];
  return (
    <>
      <RadioGroupPanel
        name={`BeregningForm.${fieldIndex}.${RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN}`}
        isReadOnly={readOnly}
        validate={[required]}
        radios={radioknapper}
        parse={stringTilNumberParser}
      />
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="12">
          <TextAreaField
            name={`BeregningForm.${fieldIndex}.${TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING}`}
            label={<FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />}
            validate={[required, maxLength1500, minLength3, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
            className={styles.textAreaStyle}
            description={intl.formatMessage({ id: 'Beregningsgrunnlag.Forms.BegrunnEndringAvDekningsgrad' })}
            parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
          />
        </Column>
      </Row>
    </>
  );
};

DekningsgradAksjonspunktPanel.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): DekningsgradValues => {
  const avklaringsbehov =
    beregningsgrunnlag.avklaringsbehov &&
    beregningsgrunnlag.avklaringsbehov.find(
      ap => ap.definisjon === ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_DEKNINGSGRAD,
    );
  const begrunnelse = avklaringsbehov && avklaringsbehov.begrunnelse ? avklaringsbehov.begrunnelse : null;
  const initialDekningsgrad =
    avklaringsbehov && !isAksjonspunktOpen(avklaringsbehov.status) ? beregningsgrunnlag.dekningsgrad : null;
  if (initialDekningsgrad && begrunnelse) {
    return {
      [RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN]: initialDekningsgrad,
      [TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING]: begrunnelse,
    };
  }
  return {};
};

DekningsgradAksjonspunktPanel.transformValues = (values: Required<DekningsgradValues>): DekningsgradResultatAp => ({
  begrunnelse: values[TEKSTFELTNAVN_BEGRUNN_DEKNINGSGRAD_ENDRING],
  dekningsgrad: values[RADIO_GROUP_FIELD_DEKNINGSGRAD_NAVN],
});

export default DekningsgradAksjonspunktPanel;
