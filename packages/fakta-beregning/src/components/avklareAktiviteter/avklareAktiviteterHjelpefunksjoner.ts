import {
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteterMap,
  BeregningAvklaringsbehov,
  BeregningsgrunnlagTilBekreftelse,
} from '@navikt/ft-types';

import { AvklarAktiviteterValues } from '../../typer/AvklarAktivitetTypes';
import { BeregningAktiviteterTransformedValues } from '../../typer/interface/BeregningFaktaAP';
import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { KodeverkForPanel } from '../../typer/KodeverkForPanelForFb';
import { Vilkårperiode } from '../../typer/Vilkår';
import { hasAvklaringsbehov, isAvklaringsbehovOpen } from '../felles/avklaringsbehovUtil';
import { FaktaBegrunnelseTextField } from '../felles/FaktaBegrunnelseTextField';
import { VurderAktiviteterPanel } from './VurderAktiviteterPanel';

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

const BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME = 'begrunnelseAvklareAktiviteter';
const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

export const buildInitialValues = (
  avklaringsbehovListe: BeregningAvklaringsbehov[],
  avklarAktiviteter: AvklarBeregningAktiviteterMap | undefined,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkårsperiode: Vilkårperiode,
): AvklarAktiviteterValues => {
  const harAvklarAktiviteterAvklaringsbehov = hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehovListe);
  const erOverstyrt = hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehovListe);
  const avklaringsbehov = findAvklaringsbehovForAktiviteter(avklaringsbehovListe);
  let aktiviteterValues;

  if (avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping) {
    aktiviteterValues = VurderAktiviteterPanel.buildInitialValues(
      avklarAktiviteter.aktiviteterTomDatoMapping,
      kodeverkSamling,
      erOverstyrt,
      harAvklarAktiviteterAvklaringsbehov,
      arbeidsgiverOpplysningerPerId,
    );
  }

  return {
    [MANUELL_OVERSTYRING_FIELD]: erOverstyrt,
    periode: vilkårsperiode.periode,
    erTilVurdering: vilkårsperiode.vurderesIBehandlingen && !vilkårsperiode.erForlengelse,
    avklaringsbehovListe,
    avklarAktiviteter,
    aktiviteterValues,
    ...FaktaBegrunnelseTextField.buildInitialValues(avklaringsbehov?.begrunnelse, BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME),
  };
};

export const transformFieldValue = (
  values: AvklarAktiviteterValues,
): BeregningsgrunnlagTilBekreftelse<BeregningAktiviteterTransformedValues> | null => {
  const skalOverstyre = values[MANUELL_OVERSTYRING_FIELD];
  const skalLoseAvklaringsbehov = skalKunneLoseAvklaringsbehov(
    !!skalOverstyre,
    values.avklaringsbehovListe || [],
    values.erTilVurdering,
  );
  const { avklarAktiviteter } = values;

  if (!skalLoseAvklaringsbehov) {
    return null;
  }

  const aktivitetListe = VurderAktiviteterPanel.transformValues(
    values,
    avklarAktiviteter?.aktiviteterTomDatoMapping || [],
    !!skalOverstyre,
  );

  return {
    beregningsaktivitetLagreDtoList: aktivitetListe,
    periode: values.periode,
    begrunnelse: values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME],
  };
};
