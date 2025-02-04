import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

// TODO (SAFIR) PFP-6021 Ta i bruk InntektFieldArray i staden for BrukersAndelFieldArray
import { Label } from '@navikt/ds-react';

import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { LINK_TIL_BESTE_BEREGNING_REGNEARK } from '@navikt/ft-konstanter';
import { KunYtelse } from '@navikt/ft-types';
import { ArrowBox, FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';

import { VurderBesteberegningMedKunYtelseValues } from '../../../typer/FaktaBeregningTypes';
import { KodeverkForPanel } from '../../../typer/KodeverkForPanelForFb';
import { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../../BeregningFormUtils';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';
import { BrukersAndelFieldArray } from './BrukersAndelFieldArray';

import styles from './kunYtelseBesteberegningPanel.module.css';

export const besteberegningField = 'besteberegningField';

type Props = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  brukersAndelFieldArrayName: string;
  skalViseInntektstabell?: boolean;
  kodeverkSamling: KodeverkForPanel;
};

/**
 * KunYtelseBesteberegningPanel
 *
 * Presentasjonskomponent. Behandling av aksjonspunktet for fastsetting av bg for kun ytelse
 *  med vurdering av besteberegning.
 */
export const KunYtelseBesteberegning = ({
  readOnly,
  isAksjonspunktClosed,
  brukersAndelFieldArrayName,
  skalViseInntektstabell = true,
  kodeverkSamling,
}: Props) => {
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`${formNameVurderFaktaBeregning}.${beregningsgrunnlagIndeks}`);

  const erBesteberegning = besteberegningField in formValues ? formValues[besteberegningField] : undefined;
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

KunYtelseBesteberegning.buildInitialValues = (kunYtelse: KunYtelse): VurderBesteberegningMedKunYtelseValues => ({
  [besteberegningField]: kunYtelse.erBesteberegning,
});

KunYtelseBesteberegning.transformValues = (values: VurderBesteberegningMedKunYtelseValues): boolean =>
  !!values[besteberegningField];
