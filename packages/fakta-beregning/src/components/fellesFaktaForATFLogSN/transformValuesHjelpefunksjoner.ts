import { BeregningAvklaringsbehov } from '@navikt/ft-types';

import { FaktaOmBeregningAksjonspunktValues } from '../../typer/FaktaBeregningTypes';
import { BeregningFaktaOgOverstyringAP } from '../../typer/interface/BeregningFaktaAP';
import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import { transformValuesFaktaForATFLOgSN } from './FaktaForATFLOgSNPanel';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';

const { VURDER_FAKTA_FOR_ATFL_SN, OVERSTYRING_AV_BEREGNINGSGRUNNLAG } = FaktaBeregningAvklaringsbehovCode;

const harAvklaringsbehovSomKanLøses = (
  avklaringsbehovCode: string,
  avklaringsbehov: BeregningAvklaringsbehov[],
): boolean => avklaringsbehov.some(ap => ap.definisjon === avklaringsbehovCode && ap.kanLoses);

const skalKunneLoseAvklaringsbehov = (skalOverstyre: boolean, avklaringsbehov: BeregningAvklaringsbehov[]) =>
  skalOverstyre || harAvklaringsbehovSomKanLøses(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov);

const transformFieldValue = (values: FaktaOmBeregningAksjonspunktValues, transformForOverstyring: boolean) => {
  const skalOverstyre = values[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD];
  if (
    transformForOverstyring &&
    !skalOverstyre &&
    harAvklaringsbehovSomKanLøses(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, values.avklaringsbehov || [])
  ) {
    return {
      periode: values.periode,
      avbrutt: true,
      begrunnelse: undefined,
    };
  }

  const skalLoseAvklaringsbehov = skalKunneLoseAvklaringsbehov(!!skalOverstyre, values.avklaringsbehov || []);
  if (!skalLoseAvklaringsbehov) {
    throw new Error('Feil: Kjører submit uten aksjonspunkt og uten overstyringsrolle');
  }

  const vurderAktiviteterTransformed = transformValuesFaktaForATFLOgSN(values);

  return {
    ...vurderAktiviteterTransformed,
    begrunnelse: values.begrunnelseFaktaTilfeller,
    periode: values.periode,
  };
};

export const transformValuesVurderFaktaBeregning = (
  values: VurderFaktaBeregningFormValues,
  skalKunneAvbryteOverstyring = true,
): BeregningFaktaOgOverstyringAP[] => {
  const fieldArrayList = values[formNameVurderFaktaBeregning];
  const overstyrteGrunnlag = fieldArrayList
    .filter(v => v.erTilVurdering)
    .filter(
      v =>
        v[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD] ||
        harAvklaringsbehovSomKanLøses(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, v.avklaringsbehov || []),
    )
    .map(v => transformFieldValue(v, true))
    .filter(v => v);
  const avklarGrunnlag = fieldArrayList
    .filter(v => v.erTilVurdering)
    .filter(
      v =>
        (!v[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD] || skalKunneAvbryteOverstyring) &&
        harAvklaringsbehovSomKanLøses(VURDER_FAKTA_FOR_ATFL_SN, v.avklaringsbehov || []),
    )
    .map(v => transformFieldValue(v, false))
    .filter(v => v);

  const apDataTilSubmit: BeregningFaktaOgOverstyringAP[] = [];

  if (overstyrteGrunnlag.length > 0) {
    const beg = overstyrteGrunnlag
      .filter(({ begrunnelse }) => begrunnelse !== null)
      .map(({ begrunnelse }) => begrunnelse)
      .reduce(
        (samletBegrunnelse, begrunnelse) =>
          samletBegrunnelse === '' ? begrunnelse : `${samletBegrunnelse} ${begrunnelse}`,
        '',
      );
    const data = {
      kode: OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
      begrunnelse: beg !== '' ? beg : null,
      grunnlag: overstyrteGrunnlag,
    };
    apDataTilSubmit.push(data);
  }

  if (avklarGrunnlag.length > 0) {
    const beg = avklarGrunnlag
      .map(({ begrunnelse }) => begrunnelse)
      .reduce(
        (samletBegrunnelse, begrunnelse) =>
          samletBegrunnelse === '' ? begrunnelse : `${samletBegrunnelse} ${begrunnelse}`,
        '',
      );
    const data = {
      kode: VURDER_FAKTA_FOR_ATFL_SN,
      begrunnelse: beg,
      grunnlag: avklarGrunnlag,
    };
    apDataTilSubmit.push(data);
  }

  return apDataTilSubmit;
};
