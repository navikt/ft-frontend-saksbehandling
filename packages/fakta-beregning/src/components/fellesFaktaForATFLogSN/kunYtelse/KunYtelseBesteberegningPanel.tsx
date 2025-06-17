import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

// TODO (SAFIR) PFP-6021 Ta i bruk InntektFieldArray i staden for BrukersAndelFieldArray
import { BodyShort, Label, Link, VStack } from '@navikt/ds-react';

import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { KunYtelse } from '@navikt/ft-types';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import { VurderBesteberegningMedKunYtelseValues } from '../../../typer/FaktaBeregningTypes';
import { KodeverkForPanel } from '../../../typer/KodeverkForPanel';
import { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../../../utils/BeregningFormUtils';
import { LINK_TIL_BESTE_BEREGNING_REGNEARK } from '../eksterneLenker';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';
import { BrukersAndelFieldArray } from './BrukersAndelFieldArray';

const besteberegningField = 'besteberegningField';

interface Props {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  brukersAndelFieldArrayName: string;
  skalViseInntektstabell?: boolean;
  kodeverkSamling: KodeverkForPanel;
}

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
        <div style={{ marginTop: '10px' }}>
          <ArrowBox alignOffset={erBesteberegning ? 0 : 60}>
            <VStack gap="4">
              <VStack gap="2" justify="space-between">
                <Label size="small">
                  <FormattedMessage id="KunYtelsePanel.OverskriftBesteberegning" />
                </Label>
                {erBesteberegning && (
                  <BodyShort>
                    <Link href={LINK_TIL_BESTE_BEREGNING_REGNEARK} target="_blank" rel="noopener noreferrer">
                      <FormattedMessage id="BeregningInfoPanel.FastsettBBFodendeKvinne.RegnarkNavet" />
                    </Link>
                  </BodyShort>
                )}
              </VStack>
              {skalViseInntektstabell && (
                <BrukersAndelFieldArray
                  name={brukersAndelFieldArrayName}
                  readOnly={readOnly}
                  isAksjonspunktClosed={isAksjonspunktClosed}
                  kodeverkSamling={kodeverkSamling}
                />
              )}
            </VStack>
          </ArrowBox>
        </div>
      )}
    </div>
  );
};

KunYtelseBesteberegning.buildInitialValues = (kunYtelse: KunYtelse): VurderBesteberegningMedKunYtelseValues => ({
  [besteberegningField]: kunYtelse.erBesteberegning,
});

KunYtelseBesteberegning.transformValues = (values: VurderBesteberegningMedKunYtelseValues): boolean =>
  !!values[besteberegningField];
