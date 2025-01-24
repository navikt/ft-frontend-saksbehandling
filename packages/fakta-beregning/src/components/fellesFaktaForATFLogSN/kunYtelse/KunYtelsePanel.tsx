import { FaktaOmBeregning, KunYtelse } from '@navikt/ft-types';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
import { FaktaOmBeregningAksjonspunktValues, KunYtelseValues } from '../../../typer/FaktaBeregningTypes';
import { FaktaBeregningTransformedValues } from '../../../typer/interface/BeregningFaktaAP';
import { KodeverkForPanel } from '../../../typer/KodeverkForPanelForFb';
import { setGenerellAndelsinfo } from '../BgFaktaUtils';
import { KunYtelseBesteberegning } from './KunYtelseBesteberegningPanel';
import { KunYtelseUtenBesteberegningPanel } from './KunYtelseUtenBesteberegningPanel';

export const brukersAndelFieldArrayName = 'brukersAndelBG';

type Props = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  skalSjekkeBesteberegning: boolean;
  skalViseInntektstabell?: boolean;
  kodeverkSamling: KodeverkForPanel;
  faktaOmBeregning: FaktaOmBeregning;
};

/**
 * KunYtelsePanel
 *
 * Presentasjonskomponent. Behandling av aksjonspunktet for fastsetting av bg for kun ytelse.
 */

export const KunYtelsePanel = ({
  readOnly,
  faktaOmBeregning,
  isAksjonspunktClosed,
  skalViseInntektstabell = true,
  kodeverkSamling,
}: Props) => {
  const { kunYtelse } = faktaOmBeregning;
  const skalSjekkeBesteberegning = kunYtelse.fodendeKvinneMedDP;

  return (
    <div>
      {skalSjekkeBesteberegning && (
        <KunYtelseBesteberegning
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          brukersAndelFieldArrayName={brukersAndelFieldArrayName}
          skalViseInntektstabell={skalViseInntektstabell}
          kodeverkSamling={kodeverkSamling}
        />
      )}
      {!skalSjekkeBesteberegning && skalViseInntektstabell && (
        <KunYtelseUtenBesteberegningPanel
          readOnly={readOnly}
          brukersAndelFieldArrayName={brukersAndelFieldArrayName}
          isAksjonspunktClosed={isAksjonspunktClosed}
          kodeverkSamling={kodeverkSamling}
        />
      )}
    </div>
  );
};

KunYtelsePanel.buildInitialValues = (
  kunYtelse,
  faktaOmBeregningAndeler,
  arbeidsgiverOpplysningerPerId,
  kodeverkSamling,
): KunYtelseValues => {
  if (!kunYtelse || !kunYtelse.andeler || kunYtelse.andeler.length === 0) {
    return {};
  }
  const kunYtelseValues = kunYtelse.andeler.map(andel => {
    const andelMedInfo = faktaOmBeregningAndeler.find(faktaAndel => faktaAndel.andelsnr === andel.andelsnr);
    if (!andelMedInfo) {
      throw new Error(`Finner ikke faktaAndel med andelsnr ${andel.andelsnr}`);
    }

    return {
      ...setGenerellAndelsinfo(andelMedInfo, arbeidsgiverOpplysningerPerId, kodeverkSamling),
      fastsattBelop: formatCurrencyNoKr(andel.fastsattBelopPrMnd) || '',
    };
  });
  const initialValues: KunYtelseValues = {
    [brukersAndelFieldArrayName]: kunYtelseValues,
  };
  if (kunYtelse.fodendeKvinneMedDP) {
    return {
      ...KunYtelseBesteberegning.buildInitialValues(kunYtelse),
      ...initialValues,
    };
  }
  return initialValues;
};

KunYtelsePanel.summerFordeling = values =>
  values[brukersAndelFieldArrayName]
    .map(({ fastsattBelop }) => (fastsattBelop ? removeSpacesFromNumber(fastsattBelop) : 0))
    .reduce((sum, fastsattBelop) => sum + fastsattBelop, 0);

KunYtelsePanel.transformValues = (
  values: FaktaOmBeregningAksjonspunktValues,
  kunYtelse: KunYtelse,
): FaktaBeregningTransformedValues => ({
  kunYtelseFordeling: {
    andeler: values[brukersAndelFieldArrayName].map(fieldValue => ({
      andelsnr: fieldValue.andelsnr,
      fastsattBeløp: removeSpacesFromNumber(fieldValue.fastsattBelop),
      inntektskategori: fieldValue.inntektskategori,
      nyAndel: fieldValue.nyAndel,
      lagtTilAvSaksbehandler: fieldValue.lagtTilAvSaksbehandler,
    })),
    skalBrukeBesteberegning: kunYtelse.fodendeKvinneMedDP ? KunYtelseBesteberegning.transformValues(values) : null,
  },
});
