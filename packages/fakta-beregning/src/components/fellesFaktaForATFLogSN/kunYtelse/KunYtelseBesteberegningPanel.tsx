import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

// TODO (SAFIR) PFP-6021 Ta i bruk InntektFieldArray i staden for BrukersAndelFieldArray
import { BodyShort, HStack, Label, Link, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroupNew } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import type { KunYtelse } from '@navikt/ft-types';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import type { VurderBesteberegningMedKunYtelseValues } from '../../../typer/FaktaBeregningTypes';
import type { KodeverkForPanel } from '../../../typer/KodeverkForPanel';
import type { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../../../utils/BeregningFormUtils';
import { LINK_TIL_BESTE_BEREGNING_REGNEARK } from '../eksterneLenker';
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
  const { getValues, control } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`${formNameVurderFaktaBeregning}.${beregningsgrunnlagIndeks}`);

  const erBesteberegning = besteberegningField in formValues ? formValues[besteberegningField] : undefined;

  return (
    <VStack gap="space-12">
      <RhfRadioGroupNew
        name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.besteberegningField`}
        control={control}
        isReadOnly={readOnly}
        label={<FormattedMessage id="KunYtelsePanel.HarBesteberegning" />}
        validate={readOnly ? [] : [required]}
      >
        <HStack gap="space-16">
          <Radio value={true} size="small">
            <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Ja" />
          </Radio>
          <Radio value={false} size="small">
            <FormattedMessage id="BeregningInfoPanel.FormAlternativ.Nei" />
          </Radio>
        </HStack>
      </RhfRadioGroupNew>
      {erBesteberegning !== undefined && erBesteberegning !== null && (
        <ArrowBox alignOffset={erBesteberegning ? 0 : 60}>
          <VStack gap="space-16">
            <VStack gap="space-8" justify="space-between">
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
      )}
    </VStack>
  );
};

KunYtelseBesteberegning.buildInitialValues = (kunYtelse: KunYtelse): VurderBesteberegningMedKunYtelseValues => ({
  [besteberegningField]: kunYtelse.erBesteberegning,
});

KunYtelseBesteberegning.transformValues = (values: VurderBesteberegningMedKunYtelseValues): boolean =>
  !!values[besteberegningField];
