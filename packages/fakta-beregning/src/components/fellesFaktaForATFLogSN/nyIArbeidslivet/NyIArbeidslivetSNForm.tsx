import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { List, ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { FaktaOmBeregningAksjonspunktValues, NyIArbeidslivetValues } from '../../../typer/FaktaBeregningTypes';
import type { VurderFaktaBeregningFormValues } from '../../../typer/VurderFaktaBeregningFormValues';
import { parseStringToBoolean } from '../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../VurderFaktaContext';

/**
 * NyIArbeidslivetSNForm
 *
 * Presentasjonskomponent. Setter opp fakta om beregning tilfelle VURDER_SN_NY_I_ARBEIDSLIVET som ber
 * bruker bestemme om en søker er selvstendig næringsdrivende og ny i arbeidslivet med en radioknapp.
 */

const radioGroupFieldName = 'erSNNyIArbeidslivet';

interface Props {
  readOnly: boolean;
}

export const NyIArbeidslivetSNForm = ({ readOnly }: Props) => {
  const { control } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const intl = useIntl();

  return (
    <RhfRadioGroup
      name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${radioGroupFieldName}`}
      control={control}
      label={
        <VStack gap="space-8">
          <FormattedMessage id="BeregningInfoPanel.NyIArbeidslivet.SelvstendigNaeringsdrivende" />
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem1" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem2" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.NyIArbeidslivet.HvordanGarJegFrem3" />
              </List.Item>
            </List>
          </ReadMore>
        </VStack>
      }
      validate={[required]}
      isReadOnly={readOnly}
      radios={[
        { value: 'true', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Ja' }) },
        { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.Nei' }) },
      ]}
      parse={parseStringToBoolean}
    />
  );
};

NyIArbeidslivetSNForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): NyIArbeidslivetValues => {
  const initialValues: NyIArbeidslivetValues = {};
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
    return initialValues;
  }
  const alleAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode.map(
    periode => periode.beregningsgrunnlagPrStatusOgAndel,
  );
  const snAndeler = alleAndeler
    .flat()
    .filter(andel => andel?.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  if (snAndeler.length > 0) {
    initialValues[radioGroupFieldName] = snAndeler[0]?.erNyIArbeidslivet;
  }
  return initialValues;
};

NyIArbeidslivetSNForm.transformValues = (values: FaktaOmBeregningAksjonspunktValues) => ({
  vurderNyIArbeidslivet: { erNyIArbeidslivet: !!values[radioGroupFieldName] },
});
