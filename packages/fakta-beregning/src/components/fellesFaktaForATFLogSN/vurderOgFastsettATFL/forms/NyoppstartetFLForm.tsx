import { List, ReadMore } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, FaktaOmBeregning } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { FaktaOmBeregningAksjonspunktValues, NyoppstartetFLValues } from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';
import { parseStringToBoolean } from '../../vurderFaktaBeregningHjelpefunksjoner';

/**
 * NyOppstartetFLForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet VURDER_FAKTA_FOR_ATFL_SN for tilfelle VURDER_NYOPPSTARTET_FL som ber
 * bruker bestemme om en søker er nyoppstartet frilanser med en radioknapp.
 * Tilhørende tilfelle for å fastsette FL inntekt er FASTSETT_MAANEDSINNTEKT_FL.
 * Denne komponenten kan vise intektstabell under radioknappene dersom skalViseInntektstabell er satt
 */

export const erNyoppstartetFLField = 'NyoppstartetFLField';

type OwnProps = {
  readOnly: boolean;
};

interface StaticFunctions {
  buildInitialValues: (beregningsgrunnlag: Beregningsgrunnlag) => NyoppstartetFLValues;
  transformValues: (
    values: FaktaOmBeregningAksjonspunktValues,
    inntektPrMnd: InntektTransformed[],
    faktaOmBeregning: FaktaOmBeregning,
    fastsatteAndelsnr: number[],
  ) => FaktaBeregningTransformedValues;
}

const NyoppstartetFLForm: FunctionComponent<OwnProps> & StaticFunctions = ({ readOnly }) => {
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const intl = useIntl();
  // const skalRedigereInntekt = getValues(
  //   `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${erNyoppstartetFLField}`,
  // );
  // const frilanserInntektFieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.frilansInntektValues.fastsattBelop`;

  return (
    <div>
      <RadioGroupPanel
        label={
          <>
            <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.ErSokerNyoppstartetFL" />
            <ReadMore size="small" header="Hvordan går jeg frem?">
              <List>
                <List.Item>Gå til Aa-registeret og A-inntekt for å se frilansoppdrag og inntekter.</List.Item>
                <List.Item>
                  {`Undersøk om søker faktisk var
                  nyoppstartet frilanser i beregningsperioden. Frilansere har ofte ujevne utbetalinger, og kan bli meldt
                  inn/ut av Aa-registeret selvom de fast jobber som frilanser. Hvis dette er tilfelle skal du velge
                  "nei".`}
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
      {/* {skalRedigereInntekt && (
        <>
          <VerticalSpacer twentyPx />
          <InntektInput
            name={frilanserInntektFieldName}
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed}
            label={
              <>
                <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntekt" />
                <ReadMore size="small" header="Hvordan går jeg frem">
                  <List>
                    <List.Item>Fastsett månedsinntekt ut ifra antall måneder/dager med utbetaling.</List.Item>
                    <List.Item>
                      Eksempel:
                      <br />
                      Hvis søker startet som frilanser for 2 mnd siden, skal samlet inntekt deles på 2 og ikke 3. Hvis
                      det er under 1 mnd siden oppstart, må du regne om inntekt til dagsats per virkedag. Dagsats x 260
                      / 12 mnd = månedsinntekt.
                    </List.Item>
                  </List>
                </ReadMore>
              </>
            }
          />
        </>
      )} */}
      <VerticalSpacer twentyPx />
    </div>
  );
};
NyoppstartetFLForm.buildInitialValues = (beregningsgrunnlag: Beregningsgrunnlag): NyoppstartetFLValues => {
  const initialValues = {};
  if (beregningsgrunnlag === undefined || beregningsgrunnlag.beregningsgrunnlagPeriode === undefined) {
    return initialValues;
  }
  const alleAndeler = beregningsgrunnlag.beregningsgrunnlagPeriode.map(
    periode => periode.beregningsgrunnlagPrStatusOgAndel,
  );
  const flAndeler = alleAndeler.flat().filter(andel => andel.aktivitetStatus === AktivitetStatus.FRILANSER);
  if (flAndeler.length > 0) {
    initialValues[erNyoppstartetFLField] = flAndeler[0].erNyoppstartet;
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
      vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
    };
  }
  const frilansField = inntektPrMnd.find(field => field.aktivitetStatus === AktivitetStatus.FRILANSER);
  if (!frilansField) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
    };
  }
  if (fastsatteAndelsnr.includes(frilansField.andelsnr)) {
    return {
      faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL],
      vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
    };
  }
  fastsatteAndelsnr.push(frilansField.andelsnr);
  const inntekt = {
    fastsettMaanedsinntektFL: { maanedsinntekt: frilansField.fastsattBelop },
  };
  return {
    faktaOmBeregningTilfeller: [
      FaktaOmBeregningTilfelle.VURDER_NYOPPSTARTET_FL,
      FaktaOmBeregningTilfelle.FASTSETT_MAANEDSINNTEKT_FL,
    ],
    ...inntekt,
    vurderNyoppstartetFL: { erNyoppstartetFL: values[erNyoppstartetFLField] },
  };
};

export default NyoppstartetFLForm;
