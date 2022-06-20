import {
  AlleKodeverk,
  AndelForFaktaOmBeregning,
  ArbeidsgiverOpplysningerPerId,
  FaktaOmBeregning,
  KunYtelse,
} from '@navikt/ft-types';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import { FaktaOmBeregningAksjonspunktValues, KunYtelseValues } from '../../../typer/FaktaBeregningTypes';
import { FaktaBeregningTransformedValues } from '../../../typer/interface/BeregningFaktaAP';
import { setGenerellAndelsinfo } from '../BgFaktaUtils';
import KunYtelseBesteberegningPanel from './KunYtelseBesteberegningPanel';
import KunYtelseUtenBesteberegningPanel from './KunYtelseUtenBesteberegningPanel';

export const brukersAndelFieldArrayName = 'brukersAndelBG';

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  skalSjekkeBesteberegning: boolean;
  skalViseInntektstabell?: boolean;
  alleKodeverk: AlleKodeverk;
  faktaOmBeregning: FaktaOmBeregning;
};

interface StaticFunctions {
  buildInitialValues: (
    kunYtelse: KunYtelse,
    faktaOmBeregningAndeler: AndelForFaktaOmBeregning[],
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
    alleKodeverk: AlleKodeverk,
  ) => KunYtelseValues;
  summerFordeling: (values: any) => number;
  transformValues: (
    values: FaktaOmBeregningAksjonspunktValues,
    kunYtelse: KunYtelse,
  ) => FaktaBeregningTransformedValues;
}

/**
 * KunYtelsePanel
 *
 * Presentasjonskomponent. Behandling av aksjonspunktet for fastsetting av bg for kun ytelse.
 */

const KunYtelsePanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  faktaOmBeregning,
  isAksjonspunktClosed,
  skalViseInntektstabell,
  alleKodeverk,
}) => {
  const { kunYtelse } = faktaOmBeregning;
  const skalSjekkeBesteberegning = kunYtelse.fodendeKvinneMedDP;

  return (
    <div>
      {skalSjekkeBesteberegning && (
        /* @ts-ignore */
        <KunYtelseBesteberegningPanel
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          brukersAndelFieldArrayName={brukersAndelFieldArrayName}
          skalViseInntektstabell={skalViseInntektstabell}
          alleKodeverk={alleKodeverk}
        />
      )}
      {!skalSjekkeBesteberegning && skalViseInntektstabell && (
        <KunYtelseUtenBesteberegningPanel
          readOnly={readOnly}
          brukersAndelFieldArrayName={brukersAndelFieldArrayName}
          isAksjonspunktClosed={isAksjonspunktClosed}
          alleKodeverk={alleKodeverk}
        />
      )}
    </div>
  );
};
KunYtelsePanel.defaultProps = {
  skalViseInntektstabell: true,
};

KunYtelsePanel.buildInitialValues = (
  kunYtelse,
  faktaOmBeregningAndeler,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk,
): KunYtelseValues => {
  if (!kunYtelse || !kunYtelse.andeler || kunYtelse.andeler.length === 0) {
    return {};
  }
  const kunYtelseValues = kunYtelse.andeler.map(andel => {
    const andelMedInfo = faktaOmBeregningAndeler.find(faktaAndel => faktaAndel.andelsnr === andel.andelsnr);
    return {
      ...setGenerellAndelsinfo(andelMedInfo, arbeidsgiverOpplysningerPerId, alleKodeverk),
      fastsattBelop:
        andel.fastsattBelopPrMnd || andel.fastsattBelopPrMnd === 0 ? formatCurrencyNoKr(andel.fastsattBelopPrMnd) : '',
    };
  });
  const initialValues = {
    [brukersAndelFieldArrayName]: kunYtelseValues,
  };
  if (kunYtelse.fodendeKvinneMedDP) {
    return {
      ...KunYtelseBesteberegningPanel.buildInitialValues(kunYtelse),
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
    skalBrukeBesteberegning: kunYtelse.fodendeKvinneMedDP ? KunYtelseBesteberegningPanel.transformValues(values) : null,
  },
});

export default KunYtelsePanel;
