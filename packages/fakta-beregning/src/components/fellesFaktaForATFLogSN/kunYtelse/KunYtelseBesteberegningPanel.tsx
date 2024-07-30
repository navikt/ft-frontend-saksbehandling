import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { LINK_TIL_BESTE_BEREGNING_REGNEARK } from '@navikt/ft-konstanter';
// TODO (SAFIR) PFP-6021 Ta i bruk InntektFieldArray i staden for BrukersAndelFieldArray
import { Label } from '@navikt/ds-react';
import { KunYtelse } from '@navikt/ft-types';
import { ArrowBox, FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useFormContext } from 'react-hook-form';
import {
  FaktaOmBeregningAksjonspunktValues,
  VurderBesteberegningMedKunYtelseValues,
} from '../../../typer/FaktaBeregningTypes';
import VurderFaktaBeregningFormValues from '../../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../../BeregningFormUtils';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';
import BrukersAndelFieldArray from './BrukersAndelFieldArray';
import styles from './kunYtelseBesteberegningPanel.module.css';
import KodeverkForPanel from '../../../typer/kodeverkForPanel';

export const besteberegningField = 'besteberegningField';

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  brukersAndelFieldArrayName: string;
  skalViseInntektstabell?: boolean;
  kodeverkSamling: KodeverkForPanel;
};

interface StaticFunctions {
  buildInitialValues: (kunYtelse: KunYtelse) => VurderBesteberegningMedKunYtelseValues;
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
  skalViseInntektstabell = true,
  kodeverkSamling,
}) => {
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`${formNameVurderFaktaBeregning}.${beregningsgrunnlagIndeks}`);
  const erBesteberegning = formValues[besteberegningField];
  const intl = useIntl();
  return (
    <div>
      <RadioGroupPanel
        name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.besteberegningField`}
        isReadOnly={readOnly}
        label={<FormattedMessage id="KunYtelsePanel.HarBesteberegning" />}
        radios={[
          { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
        ]}
        validate={readOnly ? [] : [required]}
        parse={parseStringToBoolean}
        isHorizontal
      />

      {erBesteberegning !== undefined && erBesteberegning !== null && (
        <ArrowBox alignOffset={erBesteberegning ? 0 : 60}>
          <FlexRow>
            <FlexColumn className={styles.flexColumn9}>
              <Label size="small">
                <FormattedMessage id="KunYtelsePanel.OverskriftBesteberegning" />
              </Label>
            </FlexColumn>
            {erBesteberegning && (
              <FlexColumn className={styles.flexColumn3}>
                <a
                  className={styles.navetLink}
                  href={LINK_TIL_BESTE_BEREGNING_REGNEARK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet" />
                </a>
              </FlexColumn>
            )}
          </FlexRow>
          {skalViseInntektstabell && (
            <FlexRow>
              <FlexColumn className={styles.flexColumn12}>
                <BrukersAndelFieldArray
                  name={brukersAndelFieldArrayName}
                  readOnly={readOnly}
                  isAksjonspunktClosed={isAksjonspunktClosed}
                  kodeverkSamling={kodeverkSamling}
                />
              </FlexColumn>
            </FlexRow>
          )}
        </ArrowBox>
      )}
    </div>
  );
};

KunYtelseBesteberegningImpl.buildInitialValues = (kunYtelse): VurderBesteberegningMedKunYtelseValues => ({
  [besteberegningField]: kunYtelse.erBesteberegning,
});

KunYtelseBesteberegningImpl.transformValues = (values: FaktaOmBeregningAksjonspunktValues): boolean =>
  values[besteberegningField];

export default KunYtelseBesteberegningImpl;
