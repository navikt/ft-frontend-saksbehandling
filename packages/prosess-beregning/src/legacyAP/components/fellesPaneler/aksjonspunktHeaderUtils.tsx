import { FormattedMessage } from 'react-intl';

import type { BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';

import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import { isStatusArbeidstakerOrKombinasjon, isStatusFrilanserOrKombinasjon } from '../../util/aktivitetStatusUtils';

const {
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
} = AksjonspunktKode;

const finnAPBeskrivelseSN = (bg: Beregningsgrunnlag) => {
  const alleAndelerIForstePeriode =
    bg.beregningsgrunnlagPeriode && bg.beregningsgrunnlagPeriode.length > 0
      ? bg.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel || []
      : [];
  const snAndel = alleAndelerIForstePeriode.find(andel => andel.aktivitetStatus && andel.aktivitetStatus === 'SN');
  const erNyoppstartet = !!snAndel?.næringer?.some(naring => naring.erNyoppstartet === true);
  if (erNyoppstartet) {
    return <FormattedMessage id="AksjonspunktBehandlerHeader.Detaljer.Nyoppstartet" />;
  }
  return <FormattedMessage id="AksjonspunktBehandlerHeader.Detaljer.VarigEndring" />;
};

export const finnAPBeskrivelse = (aksjonspunkt: BeregningAvklaringsbehov, bg: Beregningsgrunnlag) => {
  switch (aksjonspunkt.definisjon) {
    case VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
      return finnAPBeskrivelseSN(bg);
    case FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return <FormattedMessage id="AksjonspunktBehandlerHeader.Detaljer.SNNyIArb" />;
    case VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:
      return <FormattedMessage id="AksjonspunktBehandlerHeader.Detaljer.VarigEndringArbeid" />;
    case FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:
      return <FormattedMessage id="AksjonspunktBehandlerHeader.Detaljer.ATFL" />;
    case FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:
      return <FormattedMessage id="AksjonspunktBehandlerHeader.Detaljer.ATFLTidsbegrenset" />;
    default:
      return 'Ukjent aksjonspunkt';
  }
};

const finnAPTittelATFL = (bg: Beregningsgrunnlag) => {
  const statuser = bg.aktivitetStatus || [];
  const erAT = statuser.some(st => isStatusArbeidstakerOrKombinasjon(st));
  const erFL = statuser.some(st => isStatusFrilanserOrKombinasjon(st));
  if (erAT && erFL) {
    return <FormattedMessage id="AksjonspunktBehandlerHeader.Tittel.ATFLAvvik" />;
  }
  if (erFL) {
    return <FormattedMessage id="AksjonspunktBehandlerHeader.Tittel.FLAvvik" />;
  }
  return <FormattedMessage id="AksjonspunktBehandlerHeader.Tittel.ATAvvik" />;
};

export const finnAPTittel = (avklaringsbehov: BeregningAvklaringsbehov, bg: Beregningsgrunnlag) => {
  switch (avklaringsbehov.definisjon) {
    case VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE:
      return <FormattedMessage id="AksjonspunktBehandlerHeader.Tittel.VarigEndringNyoppstartet" />;
    case FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET:
      return <FormattedMessage id="AksjonspunktBehandlerHeader.Tittel.SNNyIArb" />;
    case VURDER_VARIG_ENDRET_ARBEIDSSITUASJON:
      return <FormattedMessage id="AksjonspunktBehandlerHeader.Tittel.VarigEndringArbeid" />;
    case FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS:
    case FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD:
      return finnAPTittelATFL(bg);
    default:
      return 'Ukjent aksjonspunkt';
  }
};
