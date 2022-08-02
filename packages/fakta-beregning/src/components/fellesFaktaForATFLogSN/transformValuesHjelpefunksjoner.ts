import { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { FaktaOmBeregningAksjonspunktValues } from '../../typer/FaktaBeregningTypes';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import { transformValuesFaktaForATFLOgSN } from './FaktaForATFLOgSNPanel';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';

const { VURDER_FAKTA_FOR_ATFL_SN, OVERSTYRING_AV_BEREGNINGSGRUNNLAG } = FaktaBeregningAksjonspunktCode;

const harAvklaringsbehovSomKanLøses = (
  avklaringsbehovCode: string,
  avklaringsbehov: BeregningAvklaringsbehov[],
): boolean => avklaringsbehov.some(ap => ap.definisjon === avklaringsbehovCode && ap.kanLoses);

const skalKunneLoseAvklaringsbehov = (skalOverstyre: boolean, avklaringsbehov: BeregningAvklaringsbehov[]) =>
  skalOverstyre || harAvklaringsbehovSomKanLøses(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov);

const transformFieldValue = (values: FaktaOmBeregningAksjonspunktValues) => {
  const skalOverstyre = values[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD];
  const skalLoseAvklaringsbehov = skalKunneLoseAvklaringsbehov(skalOverstyre, values.avklaringsbehov);

  if (!skalLoseAvklaringsbehov) {
    return null;
  }

  const vurderAktiviteterTransformed = transformValuesFaktaForATFLOgSN(values);

  return {
    ...vurderAktiviteterTransformed,
    begrunnelse: values.begrunnelseFaktaTilfeller,
    periode: values.periode,
  };
};

// eslint-disable-next-line import/prefer-default-export
export const transformValuesVurderFaktaBeregning = (values: VurderFaktaBeregningFormValues) => {
  const fieldArrayList = values[formNameVurderFaktaBeregning];
  const overstyrteGrunnlag = fieldArrayList
    .filter(v => v.erTilVurdering)
    .filter(v => v[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD])
    .map(transformFieldValue)
    .filter(v => v);
  const avklarGrunnlag = fieldArrayList
    .filter(v => v.erTilVurdering)
    .filter(v => !v[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD])
    .map(transformFieldValue)
    .filter(v => v);

  const apDataTilSubmit = [];

  if (overstyrteGrunnlag.length > 0) {
    const beg = overstyrteGrunnlag
      .map(({ begrunnelse }) => begrunnelse)
      .reduce(
        (samletBegrunnelse, begrunnelse) =>
          samletBegrunnelse === '' ? begrunnelse : `${samletBegrunnelse} ${begrunnelse}`,
        '',
      );
    const data = {
      kode: OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
      begrunnelse: beg,
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
