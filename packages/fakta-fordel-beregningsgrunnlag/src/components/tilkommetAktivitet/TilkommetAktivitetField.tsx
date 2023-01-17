import { Alert, BodyShort, Heading, Tag } from '@navikt/ds-react';
import { formHooks, InputField, RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { Inntektsforhold, VurderInntektsforholdPeriode } from '@navikt/ft-types/src/beregningsgrunnlagFordelingTsType';
import { Table, TableColumn, TableRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { formatCurrencyWithKr, parseCurrencyInput } from '@navikt/ft-utils';
import React from 'react';
import { useIntl } from 'react-intl';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import SubmitButton from '../felles/SubmitButton';
import styles from './tilkommetAktivitet.less';
import { getInntektsforhold } from './TilkommetAktivitetUtils';
import TidligereVurderteInntektsforholdPanel from './TidligereVurderteInntektsforholdPanel';

const finnAktivitetStatus = (
  aktivitetStatus: AktivitetStatus,
  vurderInntektsforholdPerioder?: VurderInntektsforholdPeriode[],
) =>
  vurderInntektsforholdPerioder?.some(inntektsforholdPeriode =>
    inntektsforholdPeriode.inntektsforholdListe.some(
      inntektsforhold => inntektsforhold.aktivitetStatus === aktivitetStatus,
    ),
  );

interface TilkommetAktivitetField {
  formName: string;
  beregningsgrunnlag: Beregningsgrunnlag;
  index: number;
  readOnly: boolean;
  submittable: boolean;
  erAksjonspunktÅpent: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const TilkommetAktivitetField = ({
  formName,
  beregningsgrunnlag,
  index,
  readOnly,
  submittable,
  erAksjonspunktÅpent,
  arbeidsgiverOpplysningerPerId,
}: TilkommetAktivitetField) => {
  const formMethods = formHooks.useFormContext<TilkommetAktivitetFormValues>();
  const intl = useIntl();

  const vurderInntektsforholdPerioder =
    beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder;

  const getAktivitetNavn = (inntektsforhold: Inntektsforhold) => {
    let agOpplysning = null;
    if (inntektsforhold.arbeidsgiverId !== null && inntektsforhold.arbeidsgiverId !== undefined) {
      agOpplysning = arbeidsgiverOpplysningerPerId[inntektsforhold.arbeidsgiverId];
    }

    if (inntektsforhold.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER) {
      if (!agOpplysning) {
        return 'Arbeidsforhold';
      }
      return `${agOpplysning.navn} (Arbeidsforhold)`;
    }

    if (inntektsforhold.aktivitetStatus === AktivitetStatus.FRILANSER) {
      if (!agOpplysning) {
        return 'Frilanser';
      }
      return `${agOpplysning.navn} (Frilanser)`;
    }

    if (inntektsforhold.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE) {
      if (!agOpplysning) {
        return 'Selvstendig næringsdrivende';
      }
      return `${agOpplysning.navn}`;
    }

    return '';
  };

  const getInntektsforholdTableRows = (inntektsforholdPerioder: VurderInntektsforholdPeriode[]): JSX.Element[] => {
    const tableRows: JSX.Element[] = [];
    const inntektsforhold = getInntektsforhold(inntektsforholdPerioder);
    if (inntektsforhold) {
      const harBruttoInntekt = !!inntektsforhold.bruttoInntektPrÅr && +inntektsforhold.bruttoInntektPrÅr > 0;
      tableRows.push(
        <TableRow key={inntektsforhold.arbeidsgiverId}>
          <TableColumn>{getAktivitetNavn(inntektsforhold)}</TableColumn>
          {harBruttoInntekt && (
            <TableColumn className={styles.inntektColumn}>
              {formatCurrencyWithKr(inntektsforhold.bruttoInntektPrÅr)}
              {inntektsforhold.harInntektsmelding && (
                <Tag className={styles.inntektsmeldingTag} variant="neutral" size="xsmall">
                  IM
                </Tag>
              )}
            </TableColumn>
          )}
        </TableRow>,
      );
    }
    return tableRows;
  };

  const skalRedusereUtbetaling = formMethods.watch(`VURDER_TILKOMMET_AKTIVITET_FORM.${index}.skalRedusereUtbetaling`);
  const harInntektsforholdMedÅrsinntekt = vurderInntektsforholdPerioder?.some(inntektsforholdPeriode =>
    inntektsforholdPeriode.inntektsforholdListe.some(inntektsforhold => inntektsforhold.bruttoInntektPrÅr),
  );

  const getAlertHeading = () => {
    const harSNAktvitet = finnAktivitetStatus(
      AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      vurderInntektsforholdPerioder,
    );
    const harFrilanserAktvitet = finnAktivitetStatus(AktivitetStatus.FRILANSER, vurderInntektsforholdPerioder);

    if (harSNAktvitet) {
      return 'Søker har opplyst om ny inntekt som selvstendig næringsdrivende.';
    }

    if (harFrilanserAktvitet) {
      return 'Søker har en ny frilansaktivitet i AA-registeret.';
    }

    return 'Søker har et nytt arbeidsforhold i AA-registeret';
  };

  const getRadioGroupLabel = () => {
    const harSNAktvitet = finnAktivitetStatus(
      AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      vurderInntektsforholdPerioder,
    );
    const harFrilanserAktvitet = finnAktivitetStatus(AktivitetStatus.FRILANSER, vurderInntektsforholdPerioder);

    if (harSNAktvitet) {
      return 'Har søker inntekt fra den nye aktiviteten som reduserer søkers inntektstap?';
    }

    if (harFrilanserAktvitet) {
      return 'Har søker inntekt fra den nye frilanseraktiviteten som reduserer søkers inntektstap?';
    }

    return 'Har søker inntekt fra det nye arbeidsforholdet som reduserer søkers inntektstap?';
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
      <VerticalSpacer eightPx />
      <TidligereVurderteInntektsforholdPanel
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        beregningsgrunnlag={beregningsgrunnlag}
      />
      <VerticalSpacer eightPx />
      <div className={styles.aktivitetContainer}>
        <Heading size="small" level="3">
          Ny aktivitet
        </Heading>
        <hr className={styles.separator} />
        {vurderInntektsforholdPerioder && vurderInntektsforholdPerioder.length > 0 && (
          <Table
            headerTextCodes={[
              'BeregningInfoPanel.TilkommetAktivitet.Aktivitet',
              harInntektsforholdMedÅrsinntekt ? 'BeregningInfoPanel.TilkommetAktivitet.Årsinntekt' : 'EMPTY',
            ]}
            noHover
            classNameTable={styles.aktivitetTable}
          >
            {getInntektsforholdTableRows(vurderInntektsforholdPerioder)}
          </Table>
        )}
      </div>
      <VerticalSpacer sixteenPx />
      <div className={styles.aksjonspunktContainer}>
        <RadioGroupPanel
          label={getRadioGroupLabel()}
          name={`${formName}.${index}.skalRedusereUtbetaling`}
          radios={[
            { value: 'true', label: 'Ja' },
            { value: 'false', label: 'Nei' },
          ]}
          isReadOnly={readOnly}
          validate={[required]}
          isTrueOrFalseSelection
        />

        {skalRedusereUtbetaling && (
          <>
            <VerticalSpacer sixteenPx />
            <div className={styles.bruttoInntektContainer}>
              <InputField
                name={`${formName}.${index}.bruttoInntektPrÅr`}
                label="Fastsett årsinntekt"
                readOnly={readOnly}
                className={styles.bruttoInntektInput}
                parse={parseCurrencyInput}
                validate={[required, maxValueFormatted(178956970)]}
              />
              <span className={styles.bruttoInntektCurrency}>kr</span>
            </div>
          </>
        )}
        <VerticalSpacer fourtyPx />
        <TextAreaField
          name={`${formName}.${index}.begrunnelse`}
          label="Begrunnelse"
          readOnly={readOnly}
          validate={[required]}
        />
        <VerticalSpacer sixteenPx />

        <SubmitButton
          isSubmittable={submittable}
          isReadOnly={readOnly}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={formMethods.formState.isDirty}
        />
      </div>
    </>
  );
};
export default TilkommetAktivitetField;
