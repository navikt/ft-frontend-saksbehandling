import { Alert, BodyShort, Heading, Label } from '@navikt/ds-react';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, VurderInntektsforholdPeriode } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import TilkommetAktivitetAccordion from './TilkommetAktivitetAccordion';
import styles from './tilkommetAktivitet.module.css';

const finnAktivitetStatus = (
  aktivitetStatus: AktivitetStatus,
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[],
) =>
  vurderInntektsforholdPerioder?.some(inntektsforholdPeriode =>
    inntektsforholdPeriode.inntektsforholdListe.some(
      inntektsforhold => inntektsforhold.aktivitetStatus === aktivitetStatus,
    ),
  );

type TilkommetAktivitetPanelType = {
  formName: string;
  beregningsgrunnlag: Beregningsgrunnlag;
  index: number;
  readOnly: boolean;
  submittable: boolean;
  erAksjonspunktÅpent: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const TilkommetAktivitetPanel: FC<TilkommetAktivitetPanelType> = ({
  formName,
  beregningsgrunnlag,
  index,
  readOnly,
  submittable,
  erAksjonspunktÅpent,
  arbeidsgiverOpplysningerPerId,
}) => {
  const intl = useIntl();

  const vurderInntektsforholdPerioder =
    beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder;

  const getAlertHeading = () => {
    const harSNAktvitet = finnAktivitetStatus(
      AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      vurderInntektsforholdPerioder,
    );
    const harFrilanserAktvitet = finnAktivitetStatus(AktivitetStatus.FRILANSER, vurderInntektsforholdPerioder);

    const unikestatuser = vurderInntektsforholdPerioder
      ?.flatMap(p => p.inntektsforholdListe.map(a => a.aktivitetStatus))
      .reduce((liste: string[], a) => {
        if (!liste.some(it => it === a)) {
          liste.push(a);
        }
        return liste;
      }, []);

    const antallStatuser = !unikestatuser ? 0 : unikestatuser.length;

    if (antallStatuser > 1) {
      return intl.formatMessage({ id: 'TilkommetAktivitet.AlertHeading.FlereStatuser' });
    }

    if (harSNAktvitet) {
      return intl.formatMessage({ id: 'TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende' });
    }

    if (harFrilanserAktvitet) {
      return intl.formatMessage({ id: 'TilkommetAktivitet.AlertHeading.Frilans' });
    }

    return intl.formatMessage({ id: 'TilkommetAktivitet.AlertHeading.Arbeidsforhold' });
  };

  const getAksjonspunktText = () => {
    if (erAksjonspunktÅpent) {
      return (
        <Alert size="small" variant="warning">
          <Heading size="xsmall" level="3">
            {getAlertHeading()}
          </Heading>
          {intl.formatMessage({ id: 'TilkommetAktivitet.AksjonspunktHelpText' })}
        </Alert>
      );
    }
    return (
      <>
        <Label size="small">
          {intl.formatMessage({ id: 'HelpText.Aksjonspunkt.BehandletAksjonspunkt' })}
          {getAlertHeading()}
        </Label>
        <BodyShort size="small">{intl.formatMessage({ id: 'TilkommetAktivitet.AksjonspunktHelpText' })}</BodyShort>
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
            {intl.formatMessage({ id: 'TilkommetAktivitet.AksjonspunktAlert' })}
          </Alert>
        </>
      )}
      <VerticalSpacer fourtyPx />

      <Heading size="small" level="3">
        {intl.formatMessage({ id: 'TilkommetAktivitet.Heading' })}
      </Heading>
      <hr className={styles.separator} />

      <TilkommetAktivitetAccordion
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        formName={formName}
        index={index}
        readOnly={readOnly}
        erAksjonspunktÅpent={erAksjonspunktÅpent}
        submittable={submittable}
      />
    </>
  );
};
export default TilkommetAktivitetPanel;
