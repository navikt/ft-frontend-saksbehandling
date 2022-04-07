import Aksjonspunkt from '@ft-frontend-saksbehandling/types/src/aksjonspunktTsType';
import aksjonspunktCodes, {
  hasAvklaringsbehov,
} from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';
import { BeregningAvklaringsbehov } from '@ft-frontend-saksbehandling/types';
import { isAksjonspunktOpen } from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktStatus';

const {
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = aksjonspunktCodes;

export const harAvklaringsbehovSomKanLøses = (
  avklaringsbehovCode: string,
  avklaringsbehov: BeregningAvklaringsbehov[],
): boolean => avklaringsbehov.some((ap) => ap.definisjon === avklaringsbehovCode && ap.kanLoses);

export const skalKunneLoseAvklaringsbehov = (
  skalOverstyre,
  avklaringsbehov,
  erTilVurdering) => (skalOverstyre || harAvklaringsbehovSomKanLøses(AVKLAR_AKTIVITETER, avklaringsbehov)) && erTilVurdering;

export const hasOpenAvklaringsbehov = (kode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean => avklaringsbehov.some((ap) => ap.definisjon === kode
  && isAksjonspunktOpen(ap.status));

export const hasOpenAvklarAvklaringsbehov = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean => hasOpenAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov)
  || hasOpenAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov);

export const findBegrunnelse = (avklaringsbehov: BeregningAvklaringsbehov[]): string => (avklaringsbehov.some(
  (ab) => ab.definisjon === OVERSTYRING_AV_BEREGNINGSAKTIVITETER || ab.definisjon === AVKLAR_AKTIVITETER)
  ? avklaringsbehov.find((ab) => (ab.definisjon === OVERSTYRING_AV_BEREGNINGSAKTIVITETER || ab.definisjon === AVKLAR_AKTIVITETER)).begrunnelse
  : null);

export const findAksjonspunktMedBegrunnelse = (aksjonspunkter: Aksjonspunkt[], kode: string): Aksjonspunkt => aksjonspunkter
  .filter((ap) => ap.definisjon === kode && ap.begrunnelse !== null)[0];

export const hasOpenAksjonspunkt = (kode: string, aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter.some((ap) => ap.definisjon === kode
  && isAksjonspunktOpen(ap.status));

export const hasOpenAvklarAksjonspunkter = (aksjonspunkter: Aksjonspunkt[]): boolean => hasOpenAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter)
  || hasOpenAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter);

export const skalViseSubmitknappInneforBorderBox = (harAndreAvklaringsbehovIPanel: boolean,
  erOverstyrt: boolean,
  erBgOverstyrt: boolean,
  avklaringsbehov: BeregningAvklaringsbehov[]): boolean => (
  harAndreAvklaringsbehovIPanel || erOverstyrt || erBgOverstyrt)
  && !hasOpenAvklarAvklaringsbehov(avklaringsbehov);

export const skalViseSubmitKnappEllerBegrunnelse = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  erOverstyrt: boolean,
): boolean => hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) || erOverstyrt;

export const erSubmittable = (submittable: boolean,
  submitEnabled: boolean,
  hasErrors: boolean): boolean => submittable && submitEnabled && !hasErrors;

export const skalViseOverstyringsknapp = (kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => kanOverstyre || erOverstyrt;
