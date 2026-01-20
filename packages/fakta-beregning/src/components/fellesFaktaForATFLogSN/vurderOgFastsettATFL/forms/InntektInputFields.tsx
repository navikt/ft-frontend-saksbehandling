import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, List, ReadMore, type TextFieldProps } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, FaktaOmBeregningAndel } from '@navikt/ft-types';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import { FaktaOmBeregningTilfelle } from '../../../../kodeverk/faktaOmBeregningTilfelle';
import type { KodeverkForPanel } from '../../../../typer/KodeverkForPanel';
import type { VurderFaktaBeregningFormValues } from '../../../../typer/VurderFaktaBeregningFormValues';
import { ArbeidsinntektInput } from '../../../felles/ArbeidsinntektInput';
import { InntektInput } from '../../../felles/InntektInput';
import { besteberegningField } from '../../besteberegningFodendeKvinne/VurderBesteberegningForm';
import { getKanRedigereInntekt, mapAndelToField } from '../../BgFaktaUtils';
import { BeregningsgrunnlagIndexContext } from '../../VurderFaktaContext';
import { erKunstigAndel, kunstigAndelField } from './KunstigArbeidsforhold';
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

  const skalRedigereKunstigAndelInntekt =
    beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel?.some(a =>
      erKunstigAndel(a.arbeidsforhold?.arbeidsgiverIdent),
    );

  const skalRedigereFrilansinntekt = () => {
    const erVurderMottarYtelseEllerNyoppstartetFL = skalRedigereFrilansinntektRadioValues.includes(true);
    if (erVurderMottarYtelseEllerNyoppstartetFL) {
      return true;
    }

    const erBesteberegning = getValues([
      `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`,
    ]).includes(true);
    const harFrilansandel = beregningsgrunnlag.faktaOmBeregning?.andelerForFaktaOmBeregning.some(
      andel => andel.aktivitetStatus === 'FL',
    );

    return erBesteberegning && harFrilansandel;
  };

  const skalRedigereSelvstendigNæringsgivendeInntekt = () => {
    const harSelvstendigNæringsgivendeAndel = beregningsgrunnlag.faktaOmBeregning?.andelerForFaktaOmBeregning.some(
      andel => andel.aktivitetStatus === 'SN',
    );

    const erBesteberegning = getValues([
      `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${besteberegningField}`,
    ]).includes(true);

    return erBesteberegning && harSelvstendigNæringsgivendeAndel;
  };

  const skalRedigereMilitærEllerSivilInntekt = () => {
    const harMilitærEllerSivilAndel = beregningsgrunnlag.faktaOmBeregning?.andelerForFaktaOmBeregning.some(
      andel => andel.aktivitetStatus === 'MS',
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
    .filter(andel => andel.aktivitetStatus === 'AT')
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
  const kunstigAndelFieldName = `vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${kunstigAndelField}.fastsattBelop`;
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
   */
  const getArbeidsinntektInputLabel = (andel: FaktaOmBeregningAndel): TextFieldProps => {
    const arbeidsgiverIdent = andel.arbeidsforhold?.arbeidsgiverIdent;
    const bedrift = arbeidsgiverIdent
      ? formaterArbeidsgiver(arbeidsgiverOpplysningerPerId[arbeidsgiverIdent])
      : 'Ukjent bedrift';

    return {
      label: <FormattedMessage id="BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift" values={{ bedrift }} />,
      description:
        getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${lonnsendringField}`) &&
        skalRedigereArbeidsinntektRadioValues.filter(value => value === true).length === 1 ? (
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <FormattedMessage
                tagName={List.Item}
                id="BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate1"
              />
              <FormattedMessage
                tagName={List.Item}
                id="BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate2"
              />
              <FormattedMessage
                tagName={List.Item}
                id="BeregningInfoPanel.InntektInputFields.LonnsendringFremgangsmate3"
              />
            </List>
          </ReadMore>
        ) : undefined,
    };
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
      return { label: <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans" /> };
    }
    if (
      getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.vurderMottarYtelseValues.${frilansFieldName}`)
    ) {
      return {
        label: <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans" />,
        description: (
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <FormattedMessage
                tagName={List.Item}
                id="BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate1"
              />
              <FormattedMessage
                tagName={List.Item}
                id="BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate2"
              />
              <FormattedMessage
                tagName={List.Item}
                id="BeregningInfoPanel.InntektInputFields.FrilanserFremgangsmate3"
              />
            </List>
          </ReadMore>
        ),
      };
    }
    if (erNyoppstartetFrilanser) {
      return {
        label: <FormattedMessage id="BeregningInfoPanel.VurderMottarYtelse.FastsettManedsinntektFrilans" />,
        description: (
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <FormattedMessage
                tagName={List.Item}
                id="BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate1"
              />
              <FormattedMessage
                tagName={List.Item}
                id="BeregningInfoPanel.InntektInputFields.NyoppstartetFrilansFremgangsmate2"
                values={{
                  br: <br />,
                }}
              />
            </List>
          </ReadMore>
        ),
      };
    }
    return { label: undefined, hideLabel: true };
  };

  return (
    <>
      {erATFLSammeOrg(tilfeller) && (
        <>
          <div>
            <Label>
              {atflSammeOrgHarInntektsmelding ? (
                <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLFrilans" />
              ) : (
                <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.FastsettATFLSamlet" />
              )}
            </Label>
            <ReadMore
              size="small"
              header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
            >
              <List size="small">
                {atflSammeOrgHarInntektsmelding ? (
                  <FormattedMessage
                    tagName={List.Item}
                    id="BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1MedIM"
                    values={{ br: <br /> }}
                  />
                ) : (
                  <FormattedMessage
                    tagName={List.Item}
                    id="BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1"
                  />
                )}
                <FormattedMessage
                  tagName={List.Item}
                  id="BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2"
                />
              </List>
            </ReadMore>
          </div>
          {atflOgSammeOrgArbeidsgivere?.map(arbeidsgiver => (
            <ArbeidsinntektInput
              key={arbeidsgiver.arbeidsforhold?.arbeidsgiverIdent}
              arbeidsgiver={arbeidsgiver}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              {...getArbeidsinntektInputLabel(arbeidsgiver)}
            />
          ))}
        </>
      )}
      {skalRedigereKunstigAndelInntekt && (
        <InntektInput
          name={kunstigAndelFieldName}
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          label={<FormattedMessage id="BeregningInfoPanel.KunstigArbeidsforhold.FastsettKunstigArbeidsforhold" />}
          description={
            <ReadMore
              size="small"
              header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
            >
              <List size="small">
                <FormattedMessage
                  tagName={List.Item}
                  id="BeregningInfoPanel.KunstigArbeidsforhold.HvordanGarJegFrem1"
                />
                <FormattedMessage
                  tagName={List.Item}
                  id="BeregningInfoPanel.KunstigArbeidsforhold.HvordanGarJegFrem2"
                />
              </List>
            </ReadMore>
          }
        />
      )}
      {skalRedigereFrilansinntekt() && (
        <InntektInput
          name={frilanserInntektFieldName}
          readOnly={readOnly}
          isAksjonspunktClosed={isAksjonspunktClosed}
          {...getFrilansinntektInputLabel()}
        />
      )}
      {skalRedigereArbeidsinntekt || skalRedigereEtterlønnSluttpakke
        ? andelerMedArbeidsinntekt
            ?.filter(andel => {
              if (skalRedigereEtterlønnSluttpakke && !skalRedigereArbeidsinntekt) {
                return andel.arbeidsforhold?.arbeidsforholdType === 'ETTERLØNN_SLUTTPAKKE';
              }
              return true;
            })
            .map(andel => (
              <ArbeidsinntektInput
                key={andel.arbeidsforhold?.arbeidsgiverIdent}
                arbeidsgiver={andel}
                readOnly={readOnly}
                isAksjonspunktClosed={isAksjonspunktClosed}
                {...getArbeidsinntektInputLabel(andel)}
              />
            ))
        : arbeidstakerAndelerUtenIM?.map(andel => (
            <ArbeidsinntektInput
              key={andel.arbeidsforhold?.arbeidsgiverIdent}
              arbeidsgiver={andel}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              {...getArbeidsinntektInputLabel(andel)}
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
