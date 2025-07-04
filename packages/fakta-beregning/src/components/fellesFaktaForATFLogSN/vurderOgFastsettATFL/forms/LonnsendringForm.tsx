import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { List, ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import type { Beregningsgrunnlag, BeregningsgrunnlagAndel, FaktaOmBeregning } from '@navikt/ft-types';

import type { FaktaOmBeregningAksjonspunktValues, LønnsendringValues } from '../../../../typer/FaktaBeregningTypes';
import type { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import type { VurderFaktaBeregningFormValues } from '../../../../typer/VurderFaktaBeregningFormValues';
import { parseStringToBoolean } from '../../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';
import { lonnsendringField } from './lonnsendringFormUtils';

/**
 * LonnsendringForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_LØNNSENDRING som ber
 * bruker fastsette lønnsendring for en liste med arbeidsforhold.
 * Tilhørende tilfelle for å fastsette FL inntekt er FASTSETT_MAANEDSLONN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING.
 * Denne komponenten kan vise intektstabell under radioknappene dersom skalViseInntektstabell er satt
 */

interface Props {
  readOnly: boolean;
}

export const LonnsendringForm = ({ readOnly }: Props) => {
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();
  const intl = useIntl();

  return (
    <RhfRadioGroup
      name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.lonnsendringField`}
      control={control}
      label={
        <VStack gap="2">
          <FormattedMessage id="BeregningInfoPanel.LonnsendringForm.HarSokerEndring" />
          <ReadMore size="small" header={<FormattedMessage id="BeregningInfoPanel.LonnsendringForm.HvaBetyrDette" />}>
            <List size="small">
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.LonnsendringForm.HvaBetyrDette1" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.LonnsendringForm.HvaBetyrDette2" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.LonnsendringForm.HvaBetyrDette3" />
              </List.Item>
            </List>
          </ReadMore>
        </VStack>
      }
      isReadOnly={readOnly}
      radios={[
        {
          value: 'true',
          label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes' }),
        },
        { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt' }) },
      ]}
      validate={[required]}
      parse={parseStringToBoolean}
    />
  );
};

const buildInitialLonnsendring = (alleATAndeler: BeregningsgrunnlagAndel[]): boolean | undefined => {
  const harSattLonnsendringTilTrue =
    alleATAndeler.find(andel => andel.lonnsendringIBeregningsperioden === true) !== undefined;
  const harSattLonnsendringTilFalse =
    alleATAndeler.find(andel => andel.lonnsendringIBeregningsperioden === false) !== undefined;
  return harSattLonnsendringTilTrue || (harSattLonnsendringTilFalse ? false : undefined);
};

LonnsendringForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): LønnsendringValues => {
  const initialValues: LønnsendringValues = {};
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
    return initialValues;
  }
  const alleAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel;
  if (!alleAndeler || alleAndeler.length < 1) {
    return initialValues;
  }
  const alleATAndeler = alleAndeler.filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER);
  if (!alleATAndeler || alleATAndeler.length < 1) {
    return initialValues;
  }
  initialValues[lonnsendringField] = buildInitialLonnsendring(alleATAndeler);
  return initialValues;
};

LonnsendringForm.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  faktaOmBeregning: FaktaOmBeregning,
): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ?? [];
  if (!tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.VURDER_LONNSENDRING)) {
    return {};
  }
  return {
    faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_LONNSENDRING],
    vurdertLonnsendring: { erLønnsendringIBeregningsperioden: !!values[lonnsendringField] },
  };
};
