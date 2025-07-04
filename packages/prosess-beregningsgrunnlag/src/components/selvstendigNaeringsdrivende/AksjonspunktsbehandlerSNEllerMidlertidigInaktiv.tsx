import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import type { BeregningAvklaringsbehov, BeregningsgrunnlagAndel } from '@navikt/ft-types';

import type {
  NyIArbeidslivetruttoNæringResultatAP,
  VurderVarigEndretNyoppstartetResultatAP,
} from '../../types/interface/BeregningsgrunnlagAP';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import type { NyIArbeidslivetValues, VurderOgFastsettValues } from '../../types/NæringAksjonspunkt';
import { FastsettSNNyIArbeid } from './FastsettSNNyIArbeid';
import { VurderVarigEndringEllerNyoppstartet } from './VurderVarigEndringEllerNyoppstartet';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = ProsessBeregningsgrunnlagAvklaringsbehovCode;

const hasAksjonspunkt = (kode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === kode);

const skalFastsette = (ap: BeregningAvklaringsbehov): boolean =>
  ap &&
  (ap.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE ||
    ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET ||
    ap.definisjon === VURDER_VARIG_ENDRET_ARBEIDSSITUASJON);

type Props = {
  readOnly: boolean;
  avklaringsbehov: BeregningAvklaringsbehov;
  erNyArbLivet?: boolean;
  erVarigEndring?: boolean;
  erNyoppstartet?: boolean;
  fieldIndex: number;
  formName: string;
  skalValideres: boolean;
};

export const AksjonspunktsbehandlerSNEllerMidlertidigInaktiv = ({
  readOnly,
  avklaringsbehov,
  erNyArbLivet = false,
  erVarigEndring = false,
  erNyoppstartet = false,
  fieldIndex,
  formName,
  skalValideres,
}: Props) => {
  if (!skalFastsette(avklaringsbehov)) {
    return null;
  }
  const isAksjonspunktClosed = avklaringsbehov ? !isAksjonspunktOpen(avklaringsbehov.status) : false;
  if (erNyArbLivet) {
    return (
      <FastsettSNNyIArbeid
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        erNyArbLivet={erNyArbLivet}
        fieldIndex={fieldIndex}
        formName={formName}
        avklaringsbehov={avklaringsbehov}
        skalValideres={skalValideres}
      />
    );
  }
  return (
    <VurderVarigEndringEllerNyoppstartet
      readOnly={readOnly}
      erVarigEndring={erVarigEndring}
      erVarigEndretArbeidssituasjon={avklaringsbehov.definisjon === VURDER_VARIG_ENDRET_ARBEIDSSITUASJON}
      erNyoppstartet={erNyoppstartet}
      fieldIndex={fieldIndex}
      formName={formName}
      isAksjonspunktClosed={isAksjonspunktClosed}
      avklaringsbehov={avklaringsbehov}
      skalValideres={skalValideres}
    />
  );
};

AksjonspunktsbehandlerSNEllerMidlertidigInaktiv.buildInitialValues = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  avklaringsbehov: BeregningAvklaringsbehov[],
): VurderOgFastsettValues | NyIArbeidslivetValues => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, avklaringsbehov)) {
    return FastsettSNNyIArbeid.buildInitialValuesNyIArbeidslivet(relevanteAndeler, avklaringsbehov);
  }
  return {
    ...VurderVarigEndringEllerNyoppstartet.buildInitialValues(relevanteAndeler, avklaringsbehov),
  };
};

AksjonspunktsbehandlerSNEllerMidlertidigInaktiv.transformValues = (
  values: VurderOgFastsettValues | NyIArbeidslivetValues,
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): VurderVarigEndretNyoppstartetResultatAP | NyIArbeidslivetruttoNæringResultatAP => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, gjeldendeAvklaringsbehov)) {
    return FastsettSNNyIArbeid.transformValuesNyIArbeidslivet(values as Required<NyIArbeidslivetValues>);
  }
  return VurderVarigEndringEllerNyoppstartet.transformValues(values as Required<VurderOgFastsettValues>);
};
