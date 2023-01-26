import { Alert, BodyShort, Heading } from '@navikt/ds-react';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React from 'react';
import { useIntl } from 'react-intl';
import TilkommetAktivitetAccordion from './TilkommetAktivitetAccordion';
import styles from './tilkommetAktivitet.less';

const finnAktivitetStatus = (
  aktivitetStatus: AktivitetStatus,
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[],
) =>
  vurderInntektsforholdPerioder?.some(inntektsforholdPeriode =>
    inntektsforholdPeriode.inntektsforholdListe.some(
      inntektsforhold => inntektsforhold.aktivitetStatus === aktivitetStatus,
    ),
  );

interface TilkommetAktivitetPanel {
  formName: string;
  beregningsgrunnlag: Beregningsgrunnlag;
  index: number;
  readOnly: boolean;
  submittable: boolean;
  erAksjonspunktÅpent: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const TilkommetAktivitetPanel = ({
  formName,
  beregningsgrunnlag,
  index,
  readOnly,
  submittable,
  erAksjonspunktÅpent,
  arbeidsgiverOpplysningerPerId,
}: TilkommetAktivitetPanel) => {
  const intl = useIntl();

  const vurderInntektsforholdPerioder =
    beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder;

  const getAlertHeading = () => {
    const harSNAktvitet = finnAktivitetStatus(
      AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      vurderInntektsforholdPerioder,
    );
    const harFrilanserAktvitet = finnAktivitetStatus(AktivitetStatus.FRILANSER, vurderInntektsforholdPerioder);

    const harArbeidsforhold = finnAktivitetStatus(AktivitetStatus.ARBEIDSTAKER, vurderInntektsforholdPerioder);

    let alertText = '';

    if (harSNAktvitet) {
      alertText += 'Søker har opplyst om ny inntekt som selvstendig næringsdrivende.';
    }

    if (harFrilanserAktvitet) {
      alertText += 'Søker har en ny frilansaktivitet i AA-registeret.';
    }

    if (harArbeidsforhold) {
      alertText += 'Søker har et nytt arbeidsforhold i AA-registeret';
    }

    return alertText;
  };

  const getAksjonspunktText = () => {
    if (erAksjonspunktÅpent) {
      return (
        <Alert size="small" variant="warning">
          <Heading size="xsmall" level="3">
            {getAlertHeading()}
          </Heading>
          Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.
        </Alert>
      );
    }
    return (
      <>
        <BodyShort size="small">
          <strong>{intl.formatMessage({ id: 'HelpText.Aksjonspunkt.BehandletAksjonspunkt' })}</strong>
          <strong>{getAlertHeading()}</strong>
        </BodyShort>
        <BodyShort size="small">Vurder om pleiepengene skal reduseres på grunn av den nye inntekten.</BodyShort>
      </>
    );
  };

  return (
    <>
      {getAksjonspunktText()}
      {!!vurderInntektsforholdPerioder && erAksjonspunktÅpent && (
        <>
          <VerticalSpacer eightPx />
          <Alert size="small" variant="info">
            Inntekter som kommer til underveis i en løpende pleiepengeperiode er ikke en del av søkers
            beregningsgrunnlag. Dersom inntekten reduserer søkers inntektstap, må det vurderes om pleiepengene skal
            graderes mot den nye inntekten.
          </Alert>
        </>
      )}
      <VerticalSpacer fourtyPx />

      <Heading size="small" level="3">
        Ny aktivitet
      </Heading>
      <hr className={styles.separator} />

      <TilkommetAktivitetAccordion
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        formName={formName}
        index={index}
        readOnly={readOnly}
        submittable={submittable}
      />
    </>
  );
};
export default TilkommetAktivitetPanel;
