import { Label, List, ReadMore } from '@navikt/ds-react';
import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, FaktaOmBeregning } from '@navikt/ft-types';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import ArbeidsinntektInput from '../../../felles/ArbeidsinntektInput';

export const transformValuesForATFLISammeOrg = (
  inntektVerdier: InntektTransformed[],
  faktaOmBeregning: FaktaOmBeregning,
  fastsatteAndelsnr: number[],
): FaktaBeregningTransformedValues => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (
    tilfeller.map(kode => kode).includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON) &&
    inntektVerdier
  ) {
    const andelsliste = inntektVerdier
      .filter(field => !fastsatteAndelsnr.includes(field.andelsnr))
      .filter(field =>
        faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe
          .map(({ andelsnr }) => andelsnr)
          .includes(field.andelsnr),
      )
      .map(field => ({
        andelsnr: field.andelsnr,
        arbeidsinntekt: field.fastsattBelop,
      }));

    if (faktaOmBeregning.frilansAndel && !fastsatteAndelsnr.includes(faktaOmBeregning.frilansAndel.andelsnr)) {
      const frilansVerdi = inntektVerdier.find(verdi => verdi.andelsnr === faktaOmBeregning.frilansAndel.andelsnr);
      andelsliste.push({
        andelsnr: faktaOmBeregning.frilansAndel.andelsnr,
        arbeidsinntekt: frilansVerdi.fastsattBelop,
      });
    }
    andelsliste.forEach(andel => fastsatteAndelsnr.push(andel.andelsnr));
    if (andelsliste.length > 0) {
      return {
        faktaOmBeregningTilfeller: [FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
        vurderATogFLiSammeOrganisasjon: { vurderATogFLiSammeOrganisasjonAndelListe: andelsliste },
      };
    }
  }
  return { faktaOmBeregningTilfeller: [] };
};

export const harRiktigTilfelle = beregningsgrunnlag =>
  beregningsgrunnlag.faktaOmBeregning.faktaOmBeregningTilfeller
    ? beregningsgrunnlag.faktaOmBeregning.faktaOmBeregningTilfeller
        .map(kode => kode)
        .includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)
    : false;

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
};

export const ATFLSammeOrg: FunctionComponent<OwnProps> = ({ beregningsgrunnlag, isAksjonspunktClosed, readOnly }) => {
  const { arbeidstakerOgFrilanserISammeOrganisasjonListe } = beregningsgrunnlag.faktaOmBeregning;

  return (
    <>
      <Label>
        <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet" />
      </Label>
      <ReadMore size="small" header="Hvordan går jeg frem">
        <List>
          <List.Item>
            Trekk fra arbeidsinntekt oppgitt i inntektsmelding eller det arbeidsgiver opplyser på telefon fra
            totalinntekt i A-inntekt. Ta hensyn til eventuelle lønnsendringer.
          </List.Item>
          <List.Item>Restbeløp er frilansinntekt.</List.Item>
        </List>
      </ReadMore>
      {arbeidstakerOgFrilanserISammeOrganisasjonListe?.map(arbeidsgiver => (
        <ArbeidsinntektInput
          key={arbeidsgiver.arbeidsforhold.arbeidsgiverId}
          arbeidsgiver={arbeidsgiver}
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
        />
      ))}
    </>
  );
};
