import { formHooks, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { LINK_TIL_BESTE_BEREGNING_REGNEARK } from '@navikt/ft-konstanter';
// TODO (SAFIR) PFP-6021 Ta i bruk InntektFieldArray i staden for BrukersAndelFieldArray
import { AlleKodeverk, KunYtelse } from '@navikt/ft-types';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { Column, Row } from 'nav-frontend-grid';
import { Element } from 'nav-frontend-typografi';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  FaktaOmBeregningAksjonspunktValues,
  VurderBesteberegningMedKunYtelseValues,
} from '../../../typer/FaktaBeregningTypes';
import VurderFaktaBeregningFormValues from '../../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../../BeregningFormUtils';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import VurderFaktaContext from '../VurderFaktaContext';
import BrukersAndelFieldArray from './BrukersAndelFieldArray';
import styles from './kunYtelseBesteberegningPanel.less';

export const besteberegningField = 'besteberegningField';

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  brukersAndelFieldArrayName: string;
  erBesteberegning?: boolean;
  skalViseInntektstabell?: boolean;
  alleKodeverk: AlleKodeverk;
};

interface StaticFunctions {
  buildInitialValues: (kunYtelse: KunYtelse) => VurderBesteberegningMedKunYtelseValues;
  validate: (values: FaktaOmBeregningAksjonspunktValues) => any;
  transformValues: (values: FaktaOmBeregningAksjonspunktValues) => boolean;
}

/**
 * KunYtelseBesteberegningPanel
 *
 * Presentasjonskomponent. Behandling av aksjonspunktet for fastsetting av bg for kun ytelse
 *  med vurdering av besteberegning.
 */
const KunYtelseBesteberegningImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  brukersAndelFieldArrayName,
  skalViseInntektstabell,
  alleKodeverk,
}) => {
  const { getValues } = formHooks.useFormContext<VurderFaktaBeregningFormValues>();
  const aktivtBeregningsgrunnlagIndeks = React.useContext<number>(VurderFaktaContext);
  const formValues = getValues(`${formNameVurderFaktaBeregning}.${aktivtBeregningsgrunnlagIndeks}`);
  const erBesteberegning = formValues[besteberegningField];
  const intl = useIntl();
  return (
    <div>
      <RadioGroupPanel
        name={`vurderFaktaBeregningForm.${aktivtBeregningsgrunnlagIndeks}.besteberegningField`}
        isReadOnly={readOnly}
        label={<FormattedMessage id="KunYtelsePanel.HarBesteberegning" />}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
        ]}
        validate={[required]}
        parse={parseStringToBoolean}
        isHorizontal
      />

      {erBesteberegning !== undefined && erBesteberegning !== null && (
        <ArrowBox alignOffset={erBesteberegning ? 0 : 60}>
          <Row>
            <Column xs="9">
              <Element>
                <FormattedMessage id="KunYtelsePanel.OverskriftBesteberegning" />
              </Element>
            </Column>
            {erBesteberegning && (
              <Column xs="3">
                <a
                  className={styles.navetLink}
                  href={LINK_TIL_BESTE_BEREGNING_REGNEARK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet" />
                </a>
              </Column>
            )}
          </Row>
          {skalViseInntektstabell && (
            <Row>
              <Column xs="12">
                <BrukersAndelFieldArray
                  name={brukersAndelFieldArrayName}
                  readOnly={readOnly}
                  isAksjonspunktClosed={isAksjonspunktClosed}
                  alleKodeverk={alleKodeverk}
                />
              </Column>
            </Row>
          )}
        </ArrowBox>
      )}
    </div>
  );
};

KunYtelseBesteberegningImpl.defaultProps = {
  erBesteberegning: undefined,
  skalViseInntektstabell: true,
};

KunYtelseBesteberegningImpl.buildInitialValues = (kunYtelse): VurderBesteberegningMedKunYtelseValues => ({
  [besteberegningField]: kunYtelse.erBesteberegning,
});

KunYtelseBesteberegningImpl.validate = (values: FaktaOmBeregningAksjonspunktValues): any => {
  const errors = {};
  errors[besteberegningField] = required(values[besteberegningField]);
  return errors;
};

KunYtelseBesteberegningImpl.transformValues = (values: FaktaOmBeregningAksjonspunktValues): boolean =>
  values[besteberegningField];

export default KunYtelseBesteberegningImpl;
