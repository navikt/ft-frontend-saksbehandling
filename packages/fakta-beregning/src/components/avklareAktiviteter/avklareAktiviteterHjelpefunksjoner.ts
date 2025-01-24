import { BeregningAvklaringsbehov } from '@navikt/ft-types';

import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { hasAvklaringsbehov, isAvklaringsbehovOpen } from '../felles/avklaringsbehovUtil';

const { AVKLAR_AKTIVITETER, OVERSTYRING_AV_BEREGNINGSAKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

export const harAvklaringsbehovSomKanLøses = (
  avklaringsbehovCode: string,
  avklaringsbehov: BeregningAvklaringsbehov[],
): boolean => avklaringsbehov.some(ap => ap.definisjon === avklaringsbehovCode && ap.kanLoses);

export const skalKunneLoseAvklaringsbehov = (
  skalOverstyre: boolean,
  avklaringsbehov: BeregningAvklaringsbehov[],
  erTilVurdering: boolean,
) => (skalOverstyre || harAvklaringsbehovSomKanLøses(AVKLAR_AKTIVITETER, avklaringsbehov)) && erTilVurdering;

export const hasOpenAvklaringsbehov = (kode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === kode && isAvklaringsbehovOpen(ap.status));

export const hasOpenAvklarAvklaringsbehov = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  hasOpenAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) ||
  hasOpenAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov);

export const findAvklaringsbehovForAktiviteter = (
  avklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov.find(
    ab => ab.definisjon === OVERSTYRING_AV_BEREGNINGSAKTIVITETER || ab.definisjon === AVKLAR_AKTIVITETER,
  );

export const skalViseSubmitknappInneforBorderBox = (
  harAndreAvklaringsbehovIPanel: boolean,
  erOverstyrt: boolean,
  erBgOverstyrt: boolean,
  avklaringsbehov: BeregningAvklaringsbehov[],
): boolean =>
  (harAndreAvklaringsbehovIPanel || erOverstyrt || erBgOverstyrt) && !hasOpenAvklarAvklaringsbehov(avklaringsbehov);

export const skalViseSubmitKnappEllerBegrunnelse = (
  avklaringsbehov: BeregningAvklaringsbehov[],
  erOverstyrt: boolean,
): boolean => hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) || erOverstyrt;

export const erSubmittable = (submittable: boolean, submitEnabled: boolean, hasErrors: boolean): boolean =>
  submittable && submitEnabled && !hasErrors;
