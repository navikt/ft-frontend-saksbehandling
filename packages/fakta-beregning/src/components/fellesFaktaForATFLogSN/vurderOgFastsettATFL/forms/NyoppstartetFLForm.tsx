import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { List, ReadMore } from '@navikt/ds-react';

import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, FaktaOmBeregning } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { FaktaOmBeregningAksjonspunktValues, NyoppstartetFLValues } from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import { parseStringToBoolean } from '../../vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';

/**
 * NyOppstartetFLForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_NYOPPSTARTET_FL som ber
 * bruker bestemme om en søker er nyoppstartet frilanser med en radioknapp.
 * Tilhørende tilfelle for å fastsette FL inntekt er FASTSETT_MAANEDSINNTEKT_FL.
 * Denne komponenten kan vise intektstabell under radioknappene dersom skalViseInntektstabell er satt
 */

export const erNyoppstartetFLField = 'NyoppstartetFLField';

type Props = {
  readOnly: boolean;
};

export const NyoppstartetFLForm = ({ readOnly }: Props) => {
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const intl = useIntl();

  return (
    <div>
      <RadioGroupPanel
        label={
          <>
            <FormattedMessage id="BeregningInfoPanel.NyoppstartetFLForm.ErSokerNyoppstartetFL" />
            <ReadMore
              size="small"
              header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
            >
              <List size="small">
                <List.Item>
                  <FormattedMessage id="BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem1" />
                </List.Item>
                <List.Item>
                  <FormattedMessage id="BeregningInfoPanel.NyoppstartetFLForm.HvordanGarJegFrem2" />
                </List.Item>
              </List>
            </ReadMore>
          </>
        }
        name={`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${erNyoppstartetFLField}`}
        validate={[required]}
        isReadOnly={readOnly}
        radios={[
          {
            value: 'true',
            label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.JaMaanedsinntektMaaFastsettes' }),
          },
          { value: 'false', label: intl.formatMessage({ id: 'BeregningInfoPanel.FormAlternativ.NeiBrukerAInntekt' }) },
        ]}
        parse={parseStringToBoolean}
      />
      <VerticalSpacer twentyPx />
    </div>
  );
};
NyoppstartetFLForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): NyoppstartetFLValues => {
  const initialValues: NyoppstartetFLValues = {};
  if (beregningsgrunnlag === undefined || beregningsgrunnlag.beregningsgrunnlagPeriode === undefined) {
    return initialValues;
  }
  const alleAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode.map(
    periode => periode.beregningsgrunnlagPrStatusOgAndel,
  );
  const flAndeler = alleAndeler.flat().filter(andel => andel?.aktivitetStatus === AktivitetStatus.FRILANSER);
  if (flAndeler.length > 0) {
    initialValues[erNyoppstartetFLField] = flAndeler[0]?.erNyoppstartet;
  }
  return initialValues;
};

NyoppstartetFLForm.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  inntektPrMnd: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  fastsatteAndelsnr: number[],
): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (!tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL)) {
    return {};
  }
  if (!inntektPrMnd || inntektPrMnd.length === 0) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: !!values[erNyoppstartetFLField] },
    };
  }
  const frilansField = inntektPrMnd.find(field => field.aktivitetStatus === AktivitetStatus.FRILANSER);
  if (!frilansField) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: !!values[erNyoppstartetFLField] },
    };
  }
  if (frilansField.andelsnr && fastsatteAndelsnr.includes(frilansField.andelsnr)) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: !!values[erNyoppstartetFLField] },
    };
  }
  if (frilansField.andelsnr) fastsatteAndelsnr.push(frilansField.andelsnr)
  const inntekt = {
    fastsettMaanedsinntektFL: { maanedsinntekt: frilansField.fastsattBelop },
  };
  return {
    faktaOmBeregningTilfeller: [
      FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
      FaktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL,
    ],
    ...inntekt,
    vurderNyoppstartetFL: { erNyoppstartetFL: !!values[erNyoppstartetFLField] },
  };
};
