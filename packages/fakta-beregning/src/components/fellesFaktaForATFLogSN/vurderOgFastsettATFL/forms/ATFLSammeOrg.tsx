import { BodyShort, Label, List, ReadMore } from '@navikt/ds-react';
import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { ATFLSammeOrgAndel, Beregningsgrunnlag, FaktaOmBeregning } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { parseCurrencyInput } from '@navikt/ft-utils';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { ArbeidstakerInntektValues } from '../../../../typer/FaktaBeregningTypes';
import { InntektTransformed } from '../../../../typer/FieldValues';
import { FaktaBeregningTransformedValues } from '../../../../typer/interface/BeregningFaktaAP';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';
import { finnFrilansFieldName } from './VurderMottarYtelseUtils';
import styles from './atflSammeOrg.module.css';

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

const arbeidsinntektInputField = (
  index: number,
  arbeidsgiver: ATFLSammeOrgAndel,
  beregningsgrunnlagIndeks: number,
  readOnly: boolean,
  isAksjonspunktClosed: boolean,
) => {
  const fieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.arbeidstakerInntektValues.${arbeidsgiver.arbeidsforhold.arbeidsgiverId}`;

  return (
    <React.Fragment key={arbeidsgiver.arbeidsforhold.arbeidsgiverId}>
      <VerticalSpacer twentyPx />
      <div className={styles.inntektInput}>
        <InputField
          name={fieldName}
          htmlSize={8}
          parse={parseCurrencyInput}
          readOnly={readOnly}
          isEdited={isAksjonspunktClosed}
          validate={[required, maxValueFormatted(178956970)]}
          label={
            <div>
              <BodyShort>
                <FormattedMessage
                  id="BeregningInfoPanel.VurderMottarYtelse.ManedsinntektBedrift"
                  values={{
                    bedrift: `${arbeidsgiver.arbeidsforhold.arbeidsgiverNavn} (${arbeidsgiver.arbeidsforhold.arbeidsgiverId})`,
                  }}
                />
              </BodyShort>
            </div>
          }
        />
        <p className={styles.krLabel}>kr</p>
      </div>
    </React.Fragment>
  );
};

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
};

interface StaticFunctions {
  buildInitialValues: (
    arbeidstakerOgFrilanserISammeOrganisasjonListe: ATFLSammeOrgAndel[],
  ) => ArbeidstakerInntektValues;
}

export const ATFLSammeOrg: FunctionComponent<OwnProps> & StaticFunctions = ({
  beregningsgrunnlag,
  isAksjonspunktClosed,
  readOnly,
}) => {
  const { arbeidstakerOgFrilanserISammeOrganisasjonListe } = beregningsgrunnlag.faktaOmBeregning;
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const frilanserInntektFieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.frilansinntektValues.fastsattBelop`;

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
      {arbeidstakerOgFrilanserISammeOrganisasjonListe?.map((arbeidsgiver, index) =>
        arbeidsinntektInputField(index, arbeidsgiver, beregningsgrunnlagIndeks, readOnly, isAksjonspunktClosed),
      )}
      <VerticalSpacer twentyPx />
      <div className={styles.inntektInput}>
        <InputField
          name={frilanserInntektFieldName}
          htmlSize={8}
          parse={parseCurrencyInput}
          readOnly={readOnly}
          isEdited={isAksjonspunktClosed}
          validate={[required, maxValueFormatted(178956970)]}
          label={
            <div key={finnFrilansFieldName()}>
              <BodyShort>
                <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.ManedsinntektFrilanser" />
              </BodyShort>
            </div>
          }
        />
        <p className={styles.krLabel}>kr</p>
      </div>
    </>
  );
  // const manglerInntektsmelding = useMemo(() => getManglerInntektsmelding(beregningsgrunnlag), [beregningsgrunnlag]);
  // if (!harRiktigTilfelle(beregningsgrunnlag)) {
  return null;
  // }
  // if (manglerInntektsmelding) {
  //   return (
  //     <BodyShort>
  //       <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.ATFLSammeOrgUtenIM" />
  //     </BodyShort>
  //   );
  // }
  // return (
  //   <BodyShort>
  //     <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.ATFLSammeOrg" />
  //   </BodyShort>
  // );
};

ATFLSammeOrg.buildInitialValues = (
  arbeidstakerOgFrilanserISammeOrganisasjonListe: ATFLSammeOrgAndel[],
): ArbeidstakerInntektValues => {
  const initialValues = {};
  arbeidstakerOgFrilanserISammeOrganisasjonListe?.forEach(andel => {
    initialValues[andel.arbeidsforhold.arbeidsgiverId] = '';
  });
  return initialValues;
};
