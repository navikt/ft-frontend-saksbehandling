import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, List, ReadMore, VStack } from '@navikt/ds-react';

import { AktivitetStatus, FaktaOmBeregningTilfelle, OpptjeningAktivitetType } from '@navikt/ft-kodeverk';
import { AndelForFaktaOmBeregning, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import { KodeverkForPanel } from '../../../../typer/KodeverkForPanelForFb';
import { VurderFaktaBeregningFormValues } from '../../../../typer/VurderFaktaBeregningFormValues';
import { ArbeidsinntektInput } from '../../../felles/ArbeidsinntektInput';
import { InntektInput } from '../../../felles/InntektInput';
import { besteberegningField } from '../../besteberegningFodendeKvinne/VurderBesteberegningForm';
import { getKanRedigereInntekt, mapAndelToField } from '../../BgFaktaUtils';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';
import { arbeidUnderAapField } from './arbeidUnderAapFormUtils';
import { lonnsendringField } from './lonnsendringFormUtils';
import { erNyoppstartetFLField } from './NyoppstartetFLForm';
import { harEtterlonnSluttpakkeField } from './VurderEtterlonnSluttpakkeForm';
import { frilansFieldName, utledArbeidsforholdFieldName } from './VurderMottarYtelseUtils';

const erATFLSammeOrg = (tilfeller: string[]) =>
  tilfeller.includes(FaktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON);

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  tilfeller: string[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  kodeverkSamling: KodeverkForPanel;
}

/**
 * InntektInputFields
 *
 * Presentasjonskomponent. Viser inputfelt for all inntekt som skal legges inn for aksjonspunkter.
 * Må håndtere hvilke som skal vises og sørge for at ingen vises flere ganger
 */

export const InntektInputFields = ({
  beregningsgrunnlag,
  readOnly,
  isAksjonspunktClosed,
  tilfeller,
  arbeidsgiverOpplysningerPerId,
  kodeverkSamling,
}: Props) => {
  const { getValues } = useFormContext<VurderFaktaBeregningFormValues>();
  const beregningsgrunnlagIndeks = React.useContext<number>(BeregningsgrunnlagIndexContext);
  const formValues = getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}`);
  const skalRedigereFrilansinntektRadioValues = getValues([
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderMottarYtelseValues.${frilansFieldName}`,
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${erNyoppstartetFLField}`,
  ]);
  const skalRedigereFrilansinntekt = () => {
    const erVurderMottarYtelseEllerNyoppstartetFL = skalRedigereFrilansinntektRadioValues.includes(true);
    if (erVurderMottarYtelseEllerNyoppstartetFL) {
      return true;
    }

    const erBesteberegning = getValues([
      `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`,
    ]).includes(true);
    const harFrilansandel = beregningsgrunnlag.faktaOmBeregning?.andelerForFaktaOmBeregning.some(
      andel => andel.aktivitetStatus === AktivitetStatus.FRILANSER,
    );

    return erBesteberegning && harFrilansandel;
  };

  const skalRedigereSelvstendigNæringsgivendeInntekt = () => {
    const harSelvstendigNæringsgivendeAndel = beregningsgrunnlag.faktaOmBeregning?.andelerForFaktaOmBeregning.some(
      andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    );

    const erBesteberegning = getValues([
      `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`,
    ]).includes(true);

    return erBesteberegning && harSelvstendigNæringsgivendeAndel;
  };

  const skalRedigereMilitærEllerSivilInntekt = () => {
    const harMilitærEllerSivilAndel = beregningsgrunnlag.faktaOmBeregning?.andelerForFaktaOmBeregning.some(
      andel => andel.aktivitetStatus === AktivitetStatus.MILITAER_ELLER_SIVIL,
    );

    const erBesteberegning = getValues([
      `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`,
    ]).includes(true);

    return erBesteberegning && harMilitærEllerSivilAndel;
  };

  const skalRedigereArbeidsinntektRadioValues = getValues([
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${lonnsendringField}`,
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`,
  ]);
  const skalRedigereArbeidsinntekt = skalRedigereArbeidsinntektRadioValues.includes(true);
  const skalRedigereArbeidUnderAAPInntekt = (): boolean =>
    !!beregningsgrunnlag.faktaOmBeregning?.andelerForFaktaOmBeregning.some(
      andel => andel.arbeidsforhold?.arbeidsforholdType === OpptjeningAktivitetType.ARBEID_UNDER_AAP,
    );
  const skalRedigereEtterlønnSluttpakke = getValues([
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${harEtterlonnSluttpakkeField}`,
  ]).includes(true);

  const atflSammeOrgListe = beregningsgrunnlag.faktaOmBeregning?.arbeidstakerOgFrilanserISammeOrganisasjonListe;

  /**
   * Henter ut alle arbeidstakerandelene som mangler inntektsmelding
   *
   */
  const arbeidstakerAndelerUtenIM =
    beregningsgrunnlag?.faktaOmBeregning?.vurderMottarYtelse?.arbeidstakerAndelerUtenIM?.filter(andel => {
      const vurderMottarYtelseValues = getValues(
        `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderMottarYtelseValues`,
      );
      return vurderMottarYtelseValues?.[utledArbeidsforholdFieldName(andel)];
    });

  /**
   * Henter ut alle arbeidstakerandelene som med inntekt
   *
   */
  const andelerMedArbeidsinntekt = beregningsgrunnlag.faktaOmBeregning?.andelerForFaktaOmBeregning
    .filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER)
    ?.filter(andel =>
      getKanRedigereInntekt(
        formValues,
        beregningsgrunnlag,
      )(mapAndelToField(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling)),
    );

  /**
   * Henter ut alle andelene der det er frilans og arbeidstaker i samme organisasjon.
   * Dersom man også har tilfelle for å redigere arbeidsinntekt må andelene som finnes både i
   * arbeidstakerOgFrilanserISammeOrganisasjonListe og i andelerMedArbeidsinntekt filtreres ut
   * slik at inputfelt for disse andelene ikke kommer dobbelt opp.
   *
   */
  const atflOgSammeOrgArbeidsgivere = (
    erATFLSammeOrg(tilfeller) && skalRedigereArbeidsinntekt
      ? atflSammeOrgListe?.filter(
          atflSammeOrg =>
            !andelerMedArbeidsinntekt?.find(
              andel => andel.arbeidsforhold?.arbeidsgiverIdent === atflSammeOrg.arbeidsforhold?.arbeidsgiverIdent,
            ),
        )
      : atflSammeOrgListe
  )?.filter(andel =>
    getKanRedigereInntekt(
      formValues,
      beregningsgrunnlag,
    )(mapAndelToField({ ...andel, lagtTilAvSaksbehandler: false }, arbeidsgiverOpplysningerPerId, kodeverkSamling)),
  );

  const skalRedigereDagpengerInntekt = getValues(
    `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`,
  );

  const frilanserInntektFieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.frilansInntektValues.fastsattBelop`;
  const arbeidUnderAAPInntektFieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${arbeidUnderAapField}.fastsattBelop`;
  const dagpengerInntektFieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.dagpengerInntektValues.fastsattBelop`;
  // eslint-disable-next-line max-len
  const selvstendigNæringsdrivendeInntektFieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.selvstendigNæringsdrivendeInntektValues.fastsattBelop`;
  const militærEllerSivilInntektFieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.militærEllerSivilInntektValues.fastsattBelop`;

  const atflSammeOrgHarInntektsmelding =
    beregningsgrunnlag?.faktaOmBeregning?.arbeidstakerOgFrilanserISammeOrganisasjonListe?.some(
      aftlSammeOrg => !!aftlSammeOrg.inntektPrMnd,
    );

  /**
   * Viser label med fremgangsmåte for innfylling for inntektsfelter. Dersom man har flere tilfeller med ulik fremgangsmåte vises en enklere label.
   *
   */
  const getArbeidsinntektInputLabel = (andel: AndelForFaktaOmBeregning) => {
    const arbeidsgiverNavn = andel.arbeidsforhold?.arbeidsgiverIdent
      ? arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent]?.navn
      : undefined;
    if (
      getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${lonnsendringField}`) &&
      skalRedigereArbeidsinntektRadioValues.filter(value => value === true).length === 1
    ) {
      return (
        <VStack gap="2">
          <FormattedMessage
            id="BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift"
            values={{
              bedrift: `${arbeidsgiverNavn} (${andel.arbeidsforhold?.arbeidsgiverIdent})`,
            }}
          />
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3" />
              </List.Item>
            </List>
          </ReadMore>
        </VStack>
      );
    }
    return (
      <FormattedMessage
        id="BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift"
        values={{
          bedrift: `${arbeidsgiverNavn} (${andel.arbeidsforhold?.arbeidsgiverIdent})`,
        }}
      />
    );
  };

  const lagArbeidUnderAAPLabel = () => {
    return (
      <VStack gap="2">
        <FormattedMessage id="BeregningInfoPanel.InntektInputFields.MånedsinntektAap" />
        <ReadMore
          size="small"
          header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
        >
          <List size="small">
            <List.Item>
              <FormattedMessage id="BeregningInfoPanel.InntektInputFields.ArbeidUnderAap1" />
            </List.Item>
          </List>
        </ReadMore>
      </VStack>
    );
  };

  /**
   * Viser label med fremgangsmåte for innfylling for inntektsfelter. Dersom man har flere tilfeller med ulik fremgangsmåte vises en enklere label.
   *
   */
  const getFrilansinntektInputLabel = () => {
    const harFlereTilfellerMedFrilansinntektSomSkalFastsettes =
      skalRedigereFrilansinntektRadioValues.filter(value => value === true).length > 1;
    const erNyoppstartetFrilanser = getValues([
      `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${erNyoppstartetFLField}`,
    ]).includes(true);
    const erBesteberegning = getValues([
      `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`,
    ]).includes(true);
    if (erATFLSammeOrg(tilfeller) || harFlereTilfellerMedFrilansinntektSomSkalFastsettes || erBesteberegning) {
      return <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans" />;
    }
    if (
      getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderMottarYtelseValues.${frilansFieldName}`)
    ) {
      return (
        <VStack gap="2">
          <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans" />
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3" />
              </List.Item>
            </List>
          </ReadMore>
        </VStack>
      );
    }
    if (erNyoppstartetFrilanser) {
      return (
        <VStack gap="2">
          <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans" />
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1" />
              </List.Item>
              <List.Item>
                <FormattedMessage
                  id="BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2"
                  values={{
                    br: <br />,
                  }}
                />
              </List.Item>
            </List>
          </ReadMore>
        </VStack>
      );
    }
    return null;
  };

  return (
    <>
      {erATFLSammeOrg(tilfeller) && (
        <>
          <VStack gap="2" color="red">
            <Label>
              <FormattedMessage
                id={
                  atflSammeOrgHarInntektsmelding
                    ? 'BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans'
                    : 'BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet'
                }
              />
            </Label>
            <ReadMore
              size="small"
              header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
            >
              <List size="small">
                <List.Item>
                  <FormattedMessage
                    id={
                      atflSammeOrgHarInntektsmelding
                        ? 'BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM'
                        : 'BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1'
                    }
                    values={{
                      br: <br />,
                    }}
                  />
                </List.Item>
                <List.Item>
                  <FormattedMessage id="BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2" />
                </List.Item>
              </List>
            </ReadMore>
          </VStack>
          {atflOgSammeOrgArbeidsgivere?.map(arbeidsgiver => (
            <ArbeidsinntektInput
              key={arbeidsgiver.arbeidsforhold?.arbeidsgiverIdent}
              arbeidsgiver={arbeidsgiver}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          ))}
        </>
      )}
      {skalRedigereFrilansinntekt() && (
        <InntektInput
          name={frilanserInntektFieldName}
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          label={getFrilansinntektInputLabel()}
        />
      )}
      {skalRedigereArbeidUnderAAPInntekt() && (
        <InntektInput
          name={arbeidUnderAAPInntektFieldName}
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          label={lagArbeidUnderAAPLabel()}
        />
      )}
      {skalRedigereArbeidsinntekt || skalRedigereEtterlønnSluttpakke
        ? andelerMedArbeidsinntekt
            ?.filter(andel => {
              if (skalRedigereEtterlønnSluttpakke && !skalRedigereArbeidsinntekt) {
                return andel.arbeidsforhold?.arbeidsforholdType === OpptjeningAktivitetType.ETTERLONN_SLUTTPAKKE;
              }
              return true;
            })
            .map(andel => (
              <ArbeidsinntektInput
                key={andel.arbeidsforhold?.arbeidsgiverIdent}
                arbeidsgiver={andel}
                readOnly={readOnly}
                isAksjonspunktClosed={isAksjonspunktClosed}
                label={getArbeidsinntektInputLabel(andel)}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              />
            ))
        : arbeidstakerAndelerUtenIM?.map(andel => (
            <ArbeidsinntektInput
              key={andel.arbeidsforhold?.arbeidsgiverIdent}
              arbeidsgiver={andel}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              label={getArbeidsinntektInputLabel(andel)}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          ))}

      {skalRedigereDagpengerInntekt && (
        <InntektInput
          name={dagpengerInntektFieldName}
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          label={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger" />}
        />
      )}
      {skalRedigereSelvstendigNæringsgivendeInntekt() && (
        <InntektInput
          name={selvstendigNæringsdrivendeInntektFieldName}
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          label={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.SelvstendigNæringsdrivende" />}
        />
      )}
      {skalRedigereMilitærEllerSivilInntekt() && (
        <InntektInput
          name={militærEllerSivilInntektFieldName}
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          label={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.MilitærEllerSivil" />}
        />
      )}
    </>
  );
};
