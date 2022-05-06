import React, { FunctionComponent } from 'react';

import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { Aksjonspunkt, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import {
  NyIArbeidslivetruttoNæringResultatAP,
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

const hasAksjonspunkt = (aksjonspunktKode: string, aksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktKode);

const skalFastsetteSN = (aksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter &&
  aksjonspunkter.some(
    ap =>
      ap.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE ||
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  );

const finnSnAksjonspunkt = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt | undefined =>
  aksjonspunkter &&
  aksjonspunkter.find(
    ap =>
      ap.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE ||
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  );

type OwnProps = {
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  erNyArbLivet?: boolean;
  erVarigEndring?: boolean;
  erNyoppstartet?: boolean;
};

interface StaticFunctions {
  buildInitialValues: (
    relevanteAndeler: BeregningsgrunnlagAndel[],
    gjeldendeAksjonspunkter: Aksjonspunkt[],
  ) => VurderOgFastsettValues | NyIArbeidslivetValues;
  transformValues: (
    values: VurderOgFastsettValues | NyIArbeidslivetValues,
    gjeldendeAksjonspunkter: Aksjonspunkt[],
  ) => VurderVarigEndretNyoppstartetResultatAP | NyIArbeidslivetruttoNæringResultatAP;
}

const AksjonspunktsbehandlerSN: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  aksjonspunkter,
  erNyArbLivet,
  erVarigEndring,
  erNyoppstartet,
}) => {
  if (!skalFastsetteSN(aksjonspunkter)) {
    return null;
  }
  const aksjonspunkt = finnSnAksjonspunkt(aksjonspunkter);
  const isAksjonspunktClosed = aksjonspunkt ? !isAksjonspunktOpen(aksjonspunkt.status) : false;
  if (erNyArbLivet) {
    return (
      <FastsettSNNyIArbeid
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        gjeldendeAksjonspunkter={aksjonspunkter}
        erNyArbLivet={erNyArbLivet}
      />
    );
  }
  return (
    <VurderVarigEndretEllerNyoppstartetSN
      readOnly={readOnly}
      erVarigEndring={erVarigEndring}
      erNyoppstartet={erNyoppstartet}
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
  gjeldendeAksjonspunkter: Aksjonspunkt[],
): VurderOgFastsettValues | NyIArbeidslivetValues => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, gjeldendeAksjonspunkter)) {
    return FastsettSNNyIArbeid.buildInitialValuesNyIArbeidslivet(relevanteAndeler, gjeldendeAksjonspunkter);
  }
  return {
    ...VurderVarigEndretEllerNyoppstartetSN.buildInitialValues(relevanteAndeler, gjeldendeAksjonspunkter),
  };
};

AksjonspunktsbehandlerSN.transformValues = (
  values: VurderOgFastsettValues | NyIArbeidslivetValues,
  gjeldendeAksjonspunkter: Aksjonspunkt[],
): VurderVarigEndretNyoppstartetResultatAP | NyIArbeidslivetruttoNæringResultatAP => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, gjeldendeAksjonspunkter)) {
    return FastsettSNNyIArbeid.transformValuesNyIArbeidslivet(values as Required<NyIArbeidslivetValues>);
  }
  return VurderVarigEndretEllerNyoppstartetSN.transformValues(values as Required<VurderOgFastsettValues>);
};

export default AksjonspunktsbehandlerSN;
