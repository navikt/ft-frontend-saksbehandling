import { FormattedMessage } from 'react-intl';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';
import { isAksjonspunktOpen } from '@navikt/ft-utils';

import { AksjonspunktKode } from '../utils/aksjonspunkt';
import { finnAlleAndelerIFørstePeriode } from '../utils/beregningsgrunnlagUtils';

const {
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
} = AksjonspunktKode;

const APTekster = {
  [FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS]: 'LegacyAksjonspunktTittel.Arbeidstaker',
  [FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD]: 'LegacyAksjonspunktTittel.TidsbegrensetArbeidsforhold',
  [FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET]: 'LegacyAksjonspunktTittel.NyIArbeidslivetSN',
  [VURDER_VARIG_ENDRET_ARBEIDSSITUASJON]: 'LegacyAksjonspunktTittel.VarigEndretArbeidssituasjon',
  [VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE]:
    'LegacyAksjonspunktTittel.SelvstendigNaeringsdrivende',
} as Record<string, string>;

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
}

export const LegacyAksjonspunktTittel = ({
  beregningsgrunnlag: { avklaringsbehov, beregningsgrunnlagPeriode },
}: Props) => {
  const andelerIFørstePeriode = finnAlleAndelerIFørstePeriode(beregningsgrunnlagPeriode);
  const åpneAksjonspunkter = avklaringsbehov.filter(isAksjonspunktOpen);

  if (andelerIFørstePeriode.length === 0) {
    return null;
  }
  const snAndel = andelerIFørstePeriode.find(andel => andel.aktivitetStatus === 'SN');
  const erVarigEndring = (snAndel?.næringer ?? []).some(næring => næring.erVarigEndret === true);
  return (
    <AksjonspunktHelpTextHTML>
      {åpneAksjonspunkter.map(ap => (
        <FormattedMessage key={ap.definisjon} id={APTekster[ap.definisjon]} values={{ erVarigEndring }} />
      ))}
    </AksjonspunktHelpTextHTML>
  );
};
