import type { BeregningAvklaringsbehov, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { hasAksjonspunkt, isAksjonspunktOpen } from '@navikt/ft-utils';

import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import type { FormNameType } from '../../types/BeregningFormValues';
import type {
  NyIArbeidslivetBruttoNæringResultatAP,
  VurderVarigEndretNyoppstartetResultatAP,
} from '../../types/BeregningsgrunnlagAP';
import type { NyIArbeidslivetValues, VurderOgFastsettValues } from '../../types/NæringAksjonspunkt';
import { FastsettSNNyIArbeid } from './FastsettSNNyIArbeid';
import { VurderVarigEndringEllerNyoppstartet } from './VurderVarigEndringEllerNyoppstartet';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = AksjonspunktKode;

const skalFastsette = (ap: BeregningAvklaringsbehov) =>
  [
    VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
    FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
    VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
  ].includes(ap.definisjon as AksjonspunktKode);

interface Props {
  readOnly: boolean;
  aksjonspunkt: BeregningAvklaringsbehov;
  erNyIArbeidslivet?: boolean;
  erVarigEndring?: boolean;
  erNyoppstartet?: boolean;
  fieldIndex: number;
  formName: FormNameType;
  skalValideres: boolean;
}

export const AksjonspunktBehandlerSNEllerMidlertidigInaktiv = ({
  readOnly,
  aksjonspunkt,
  erNyIArbeidslivet = false,
  erVarigEndring = false,
  erNyoppstartet = false,
  fieldIndex,
  formName,
  skalValideres,
}: Props) => {
  if (!skalFastsette(aksjonspunkt)) {
    return null;
  }
  const isAksjonspunktClosed = !isAksjonspunktOpen(aksjonspunkt);
  if (erNyIArbeidslivet) {
    return (
      <FastsettSNNyIArbeid
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        erNyIArbeidslivet={erNyIArbeidslivet}
        fieldIndex={fieldIndex}
        formName={formName}
        aksjonspunkt={aksjonspunkt}
        skalValideres={skalValideres}
      />
    );
  }
  return (
    <VurderVarigEndringEllerNyoppstartet
      readOnly={readOnly}
      erVarigEndring={erVarigEndring}
      erVarigEndretArbeidssituasjon={aksjonspunkt.definisjon === VURDER_VARIG_ENDRET_ARBEIDSSITUASJON}
      erNyoppstartet={erNyoppstartet}
      fieldIndex={fieldIndex}
      formName={formName}
      isAksjonspunktClosed={isAksjonspunktClosed}
      aksjonspunkt={aksjonspunkt}
      skalValideres={skalValideres}
    />
  );
};

AksjonspunktBehandlerSNEllerMidlertidigInaktiv.buildInitialValues = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  aksjonspunkt: BeregningAvklaringsbehov[],
): VurderOgFastsettValues | NyIArbeidslivetValues => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, aksjonspunkt)) {
    return FastsettSNNyIArbeid.buildInitialValues(relevanteAndeler, aksjonspunkt);
  }
  return VurderVarigEndringEllerNyoppstartet.buildInitialValues(relevanteAndeler, aksjonspunkt);
};

AksjonspunktBehandlerSNEllerMidlertidigInaktiv.transformValues = (
  values: VurderOgFastsettValues | NyIArbeidslivetValues,
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): VurderVarigEndretNyoppstartetResultatAP | NyIArbeidslivetBruttoNæringResultatAP => {
  if (hasAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, gjeldendeAvklaringsbehov)) {
    return FastsettSNNyIArbeid.transformValues(values as Required<NyIArbeidslivetValues>);
  }
  return VurderVarigEndringEllerNyoppstartet.transformValues(values as Required<VurderOgFastsettValues>);
};
