import { Label, List, ReadMore } from '@navikt/ds-react';
import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { AndelForFaktaOmBeregning, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
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
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const InntektInputFields: React.FunctionComponent<InntektInputFieldsProps> = ({
  beregningsgrunnlag,
  readOnly,
  isAksjonspunktClosed,
  tilfeller,
  arbeidsgiverOpplysningerPerId,
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
              andel => andel.arbeidsforhold.arbeidsgiverIdent === atflSammeOrg.arbeidsforhold.arbeidsgiverIdent,
            ),
        )
      : arbeidstakerOgFrilanserISammeOrganisasjonListe;

  const getArbeidsinntektInputLabel = (andel: AndelForFaktaOmBeregning) => {
    const arbeidsgiverNavn = arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent]?.navn;
    if (
      getValues(`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${lonnsendringField}`) &&
      skalRedigereArbeidsinntektRadioValues.filter(value => value === true).length === 1
    ) {
      return (
        <>
          <FormattedMessage
            id="BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift"
            values={{
              bedrift: `${arbeidsgiverNavn} (${andel.arbeidsforhold.arbeidsgiverIdent})`,
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
        </>
      );
    }
    return (
      <FormattedMessage
        id="BeregningInfoPanel.InntektInputFields.ManedsinntektBedrift"
        values={{
          bedrift: `${arbeidsgiverNavn} (${andel.arbeidsforhold.arbeidsgiverIdent})`,
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
        </>
      );
    }
    if (getValues([`vurderFaktaBeregningForm.${beregningsgrunnlagIndeks}.${erNyoppstartetFLField}`])) {
      return (
        <>
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
          <ReadMore
            size="small"
            header={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.HvordanGarJegFrem" />}
          >
            <List size="small">
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate1" />
              </List.Item>
              <List.Item>
                <FormattedMessage id="BeregningInfoPanel.InntektInputFields.ATFLSammeOrgFremgangsmate2" />
              </List.Item>
            </List>
          </ReadMore>
          {atflOgSammeOrgArbeidsgivere.map(arbeidsgiver => (
            <ArbeidsinntektInput
              key={arbeidsgiver.arbeidsforhold.arbeidsgiverIdent}
              arbeidsgiver={arbeidsgiver}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
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
              key={andel.arbeidsforhold.arbeidsgiverIdent}
              arbeidsgiver={andel}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              label={getArbeidsinntektInputLabel(andel)}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          ))
        : arbeidstakerAndelerUtenIM?.map(andel => (
            <ArbeidsinntektInput
              key={andel.arbeidsforhold.arbeidsgiverIdent}
              arbeidsgiver={andel}
              readOnly={readOnly}
              isAksjonspunktClosed={isAksjonspunktClosed}
              label={getArbeidsinntektInputLabel(andel)}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          ))}

      {skalRedigereDagpengerInntekt && (
        <>
          {(skalRedigereFrilansinntekt || skalRedigereArbeidsinntekt) && <VerticalSpacer thirtyTwoPx />}
          <InntektInput
            name={dagpengerInntektFieldName}
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed}
            label={<FormattedMessage id="BeregningInfoPanel.InntektInputFields.ManedsinntektDagpenger" />}
          />
        </>
      )}
    </>
  );
};

export default InntektInputFields;
