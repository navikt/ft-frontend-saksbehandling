import React, { FunctionComponent } from 'react';

import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import {
  NyIArbeidslivetruttoNĂ¦ringResultatAP,
  VurderVarigEndretNyoppstartetResultatAP,
} from '../../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import FastsettSNNyIArbeid from './FastsettSNNyIArbeid';
import VurderVarigEndretEllerNyoppstartetSN from './VurderVarigEndretEllerNyoppstartetSN';
import { NyIArbeidslivetValues, VurderOgFastsettValues } from '../../types/NaringAksjonspunktTsType';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
} = ProsessBeregningsgrunnlagAksjonspunktCode;

const hasAksjonspunkt = (kode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === kode);

const skalFastsetteSN = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov &&
  avklaringsbehov.some(
    ap =>
      ap.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE ||
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  );

const finnSnAksjonspunkt = (avklaringsbehov: BeregningAvklaringsbehov[]): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov &&
  avklaringsbehov.find(
    ap =>
      ap.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE ||
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  );

type OwnProps = {
  readOnly: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  erNyArbLivet?: boolean;
  erVarigEndring?: boolean;
  erNyoppstartet?: boolean;
  fieldIndex: number;
};

interface StaticFunctions {
  buildInitialValues: (
    relevanteAndeler: BeregningsgrunnlagAndel[],
    avklaringsbehov: BeregningAvklaringsbehov[],
  ) => VurderOgFastsettValues | NyIArbeidslivetValues;
  transformValues: (
    values: VurderOgFastsettValues | NyIArbeidslivetValues,
    gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
  ) => VurderVarigEndretNyoppstartetResultatAP | NyIArbeidslivetruttoNĂ¦ringResultatAP;
}

const AksjonspunktsbehandlerSN: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  avklaringsbehov,
  erNyArbLivet,
  erVarigEndring,
  erNyoppstartet,
  fieldIndex,
}) => {
  if (!skalFastsetteSN(avklaringsbehov)) {
    return null;
  }
  const aksjonspunkt = finnSnAksjonspunkt(avklaringsbehov);
  const isAksjonspunktClosed = aksjonspunkt ? !isAksjonspunktOpen(aksjonspunkt.status) : false;
  if (erNyArbLivet) {
    return (
      <FastsettSNNyIArbeid
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        avklaringsbehov={avklaringsbehov}
        erNyArbLivet={erNyArbLivet}
        fieldIndex={fieldIndex}
      />
    );
  }
  return (
    <VurderVarigEndretEllerNyoppstartetSN
      readOnly={readOnly}
      erVarigEndring={erVarigEndring}
      erNyoppstartet={erNyoppstartet}
      fieldIndex={fieldIndex}
    />
  );
};

AksjonspunktsbehandlerSN.defaultProps = {
  erNyArbLivet: false,
  erVarigEndring: false,
  erNyoppstartet: false,
};

AksjonspunktsbehandlerSN.buildInitialValues = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  avklaringsbehov: BeregningAvklaringsbehov[],
): VurderOgFastsettValues | NyIArbeidslivetValues => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, avklaringsbehov)) {
    return FastsettSNNyIArbeid.buildInitialValuesNyIArbeidslivet(relevanteAndeler, avklaringsbehov);
  }
  return {
    ...VurderVarigEndretEllerNyoppstartetSN.buildInitialValues(relevanteAndeler, avklaringsbehov),
  };
};

AksjonspunktsbehandlerSN.transformValues = (
  values: VurderOgFastsettValues | NyIArbeidslivetValues,
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): VurderVarigEndretNyoppstartetResultatAP | NyIArbeidslivetruttoNĂ¦ringResultatAP => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, gjeldendeAvklaringsbehov)) {
    return FastsettSNNyIArbeid.transformValuesNyIArbeidslivet(values as Required<NyIArbeidslivetValues>);
  }
  return VurderVarigEndretEllerNyoppstartetSN.transformValues(values as Required<VurderOgFastsettValues>);
};

export default AksjonspunktsbehandlerSN;
