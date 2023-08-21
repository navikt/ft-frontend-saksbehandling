import { Label, List, ReadMore } from '@navikt/ds-react';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { AndelForFaktaOmBeregning, Beregningsgrunnlag } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import VurderFaktaBeregningFormValues from '../../../../typer/VurderFaktaBeregningFormValues';
import ArbeidsinntektInput from '../../../felles/ArbeidsinntektInput';
import InntektInput from '../../../felles/InntektInput';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';
import { besteberegningField } from '../../besteberegningFodendeKvinne/VurderBesteberegningForm';
import { lonnsendringField } from './LonnsendringForm';
import { erNyoppstartetFLField } from './NyoppstartetFLForm';
import { harEtterlonnSluttpakkeField } from './VurderEtterlonnSluttpakkeForm';
import { finnFrilansFieldName, utledArbeidsforholdFieldName } from './VurderMottarYtelseUtils';

const erATFLSammeOrg = (tilfeller: string[]) =>
  tilfeller?.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON);

interface InntektInputFieldsProps {
  beregningsgrunnlag: Beregningsgrunnlag;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  tilfeller: string[];
}

const InntektInputFields: React.FunctionComponent<InntektInputFieldsProps> = ({
  beregningsgrunnlag,
  readOnly,
  isAksjonspunktClosed,
  tilfeller,
}) => {
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const vurderMottarYtelse = beregningsgrunnlag?.faktaOmBeregning?.vurderMottarYtelse;
  const erFrilans = vurderMottarYtelse && vurderMottarYtelse.erFrilans;

  const skalRedigereFrilansinntektRadioValues = getValues([
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderMottarYtelseValues.${finnFrilansFieldName()}`,
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${erNyoppstartetFLField}`,
  ]);
  const skalRedigereFrilansinntekt = skalRedigereFrilansinntektRadioValues.includes(true);
  const skalRedigereArbeidsinntektRadioValues = getValues([
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${lonnsendringField}`,
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`,
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${harEtterlonnSluttpakkeField}`,
  ]);
  const arbeidstakerAndelerUtenIM =
    beregningsgrunnlag?.faktaOmBeregning?.vurderMottarYtelse?.arbeidstakerAndelerUtenIM?.filter(andel => {
      const vurderMottarYtelseValues = getValues(
        `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderMottarYtelseValues`,
      );
      return vurderMottarYtelseValues?.[utledArbeidsforholdFieldName(andel)];
    });
  const skalRedigereArbeidsinntekt = skalRedigereArbeidsinntektRadioValues.includes(true);

  const skalRedigereDagpengerInntekt = getValues(
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`,
  );

  const frilanserInntektFieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.frilansInntektValues.fastsattBelop`;
  const dagpengerInntektFieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.dagpengerInntektValues.fastsattBelop`;
  const andelerMedArbeidsinntekt = beregningsgrunnlag.faktaOmBeregning.andelerForFaktaOmBeregning.filter(
    andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER,
  );
  const { arbeidstakerOgFrilanserISammeOrganisasjonListe } = beregningsgrunnlag.faktaOmBeregning;

  const atflOgSammeOrgArbeidsgivere =
    erATFLSammeOrg(tilfeller) && skalRedigereArbeidsinntekt
      ? arbeidstakerOgFrilanserISammeOrganisasjonListe?.filter(
          atflSammeOrg =>
            !andelerMedArbeidsinntekt?.find(
              andel => andel.arbeidsforhold.arbeidsgiverId === atflSammeOrg.arbeidsforhold.arbeidsgiverId,
            ),
        )
      : arbeidstakerOgFrilanserISammeOrganisasjonListe;

  const getArbeidsinntektInputLabel = (andel: AndelForFaktaOmBeregning) => {
    if (
      getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${lonnsendringField}`) &&
      skalRedigereArbeidsinntektRadioValues.filter(value => value === true).length === 1
    ) {
      return (
        <>
          <FormattedMessage
            id="BeregningInfoPanel.VurderMottarYtelse.ManedsinntektBedrift"
            values={{
              bedrift: `${andel.arbeidsforhold.arbeidsgiverNavn} (${andel.arbeidsforhold.arbeidsgiverId})`,
            }}
          />
          <ReadMore size="small" header="Hvordan går jeg frem?">
            <List>
              <List.Item>Bruk A-inntekt til å fastsette ny månedsinntekt hvis mulig.</List.Item>
              <List.Item>
                Hvis ny inntekt ikke fremgår av A-inntekt, kontakt arbeidsgiver og be de sende oppdatert
                inntektsmelding. Eventuelt kan du kontakte søker og be de dokumentere varig lønnsøkning med kontrakt,
                lønnslipp eller lignende.
              </List.Item>
              <List.Item>
                Eksempel: En person får en varig lønnsendring med virkning fra 5. oktober. Vedkommende har første
                fraværsdato 20. oktober og beregningsperioden er september, august og juli. Ved fastsettelse av inntekt
                skal tidsrommet etter lønnsendringen 5. oktober legges til grunn.
              </List.Item>
            </List>
          </ReadMore>
        </>
      );
    }
    return (
      <FormattedMessage
        id="BeregningInfoPanel.VurderMottarYtelse.ManedsinntektBedrift"
        values={{
          bedrift: `${andel.arbeidsforhold.arbeidsgiverNavn} (${andel.arbeidsforhold.arbeidsgiverId})`,
        }}
      />
    );
  };

  const getFrilansinntektInputLabel = () => {
    if (erATFLSammeOrg(tilfeller) || skalRedigereFrilansinntektRadioValues.filter(value => value === true).length > 1) {
      return <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans" />;
    }
    if (
      getValues(
        `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderMottarYtelseValues.${finnFrilansFieldName()}`,
      )
    ) {
      return (
        <>
          <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans" />
          <ReadMore size="small" header="Hvordan går jeg frem">
            <List>
              <List.Item>
                Benytt A-inntekt (filter 8-30) eller utbetalinger i Modia for å se hvor mye søker har mottatt i ytelse i
                beregningsperioden.
              </List.Item>
              <List.Item>Bruk A-inntekt for å finne gjennomsnittet av frilansinntekten i beregningsperioden.</List.Item>
              <List.Item>
                Fastsett månedsinntekten under ved å summere gjennomsnitt av mottatt ytelse og frilansinntekt.
              </List.Item>
            </List>
          </ReadMore>
        </>
      );
    }
    if (getValues([`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${erNyoppstartetFLField}`])) {
      return (
        <>
          <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans" />
          <ReadMore size="small" header="Hvordan går jeg frem">
            <List>
              <List.Item>Fastsett månedsinntekt ut ifra antall måneder/dager med utbetaling.</List.Item>
              <List.Item>
                Eksempel:
                <br />
                Hvis søker startet som frilanser for 2 mnd siden, skal samlet inntekt deles på 2 og ikke 3. Hvis det er
                under 1 mnd siden oppstart, må du regne om inntekt til dagsats per virkedag. Dagsats x 260 / 12 mnd =
                månedsinntekt.
              </List.Item>
            </List>
          </ReadMore>
        </>
      );
    }
    return null;
  };

  return (
    <>
      {erATFLSammeOrg(tilfeller) && atflOgSammeOrgArbeidsgivere?.length > 0 ? (
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
          {atflOgSammeOrgArbeidsgivere.map(arbeidsgiver => (
            <ArbeidsinntektInput
              key={arbeidsgiver.arbeidsforhold.arbeidsgiverId}
              arbeidsgiver={arbeidsgiver}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
            />
          ))}
        </>
      ) : null}
      {skalRedigereFrilansinntekt && erFrilans && (
        <>
          <VerticalSpacer thirtyTwoPx />
          <InntektInput
            name={frilanserInntektFieldName}
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed}
            label={getFrilansinntektInputLabel()}
          />
        </>
      )}
      {skalRedigereArbeidsinntekt
        ? andelerMedArbeidsinntekt.map(andel => (
            <ArbeidsinntektInput
              key={andel.arbeidsforhold.arbeidsgiverId}
              arbeidsgiver={andel}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              label={getArbeidsinntektInputLabel(andel)}
            />
          ))
        : arbeidstakerAndelerUtenIM?.map(andel => (
            <ArbeidsinntektInput
              key={andel.arbeidsforhold.arbeidsgiverId}
              arbeidsgiver={andel}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              label={getArbeidsinntektInputLabel(andel)}
            />
          ))}

      {skalRedigereDagpengerInntekt && (
        <>
          {(skalRedigereFrilansinntekt || skalRedigereArbeidsinntekt) && <VerticalSpacer thirtyTwoPx />}
          <InntektInput
            name={dagpengerInntektFieldName}
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed}
            label={<FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.ManedsinntektDagpenger" />}
          />
        </>
      )}
    </>
  );
};

export default InntektInputFields;
