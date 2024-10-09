import React, { FC, useState, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Alert, BodyShort, Heading, Label, Button } from '@navikt/ds-react';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { ScissorsIcon } from '@navikt/aksel-icons';
import dayjs from 'dayjs';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, VurderInntektsforholdPeriode } from '@navikt/ft-types';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { useFieldArray, useFormContext } from 'react-hook-form';
import TilkommetAktivitetAccordion from './TilkommetAktivitetAccordion';
import styles from './tilkommetAktivitet.module.css';
import PeriodesplittModal from './PeriodesplittModal';
import { TilkommetAktivitetFormValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { Periode } from './PeriodesplittDatoValg';

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
  bgIndex: number;
  readOnly: boolean;
  submittable: boolean;
  erAksjonspunktÅpent: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const TilkommetAktivitetPanel: FC<TilkommetAktivitetPanelType> = ({
  formName,
  beregningsgrunnlag,
  bgIndex,
  readOnly,
  submittable,
  erAksjonspunktÅpent,
  arbeidsgiverOpplysningerPerId,
}) => {
  const intl = useIntl();
  const [modalErÅpen, setModalErÅpen] = useState<boolean>(false);

  const { control, watch } = useFormContext<TilkommetAktivitetFormValues>();
  const { fields, remove, insert } = useFieldArray({
    control,
    name: `VURDER_TILKOMMET_AKTIVITET_FORM.${bgIndex}.perioder`,
  });
  fields.sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));

  const vurderInntektsforholdPerioder =
    beregningsgrunnlag.faktaOmFordeling?.vurderNyttInntektsforholdDto?.vurderInntektsforholdPerioder;

  const getAlertHeading = () => {
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

    const harSNAktvitet = finnAktivitetStatus(
      AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
      vurderInntektsforholdPerioder,
    );
    if (harSNAktvitet) {
      return intl.formatMessage({ id: 'TilkommetAktivitet.AlertHeading.SelvstendigNæringsdrivende' });
    }

    const harFrilanserAktvitet = finnAktivitetStatus(AktivitetStatus.FRILANSER, vurderInntektsforholdPerioder);
    if (harFrilanserAktvitet) {
      return intl.formatMessage({ id: 'TilkommetAktivitet.AlertHeading.Frilans' });
    }

    const harDagpengerAktivitet = finnAktivitetStatus(AktivitetStatus.DAGPENGER, vurderInntektsforholdPerioder);
    if (harDagpengerAktivitet) {
      return intl.formatMessage({ id: 'TilkommetAktivitet.AlertHeading.Dagpenger' });
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

  const mapInntektsforhold = (
    andel: any,
    taMedAlleFelter: boolean,
    periodeFieldIndex: number,
    andelFieldIndex: number,
  ) => {
    const skalRedusereValg = watch(
      `${formName}.${bgIndex}.perioder.${periodeFieldIndex}.inntektsforhold.${andelFieldIndex}.skalRedusereUtbetaling`,
    );
    const bruttoVerdi = watch(
      `${formName}.${bgIndex}.perioder.${periodeFieldIndex}.inntektsforhold.${andelFieldIndex}.bruttoInntektPrÅr`,
    );
    return {
      aktivitetStatus: andel.aktivitetStatus,
      arbeidsgiverIdent: andel.arbeidsgiverIdent,
      arbeidsforholdId: andel.arbeidsforholdId,
      bruttoInntektPrÅr: taMedAlleFelter ? bruttoVerdi : undefined,
      skalRedusereUtbetaling: taMedAlleFelter ? skalRedusereValg : undefined,
    };
  };

  const overlapper = (fom: string, tom: string, dato: string): boolean =>
    !dayjs(fom).isAfter(dayjs(dato)) && !dayjs(tom).isBefore(dayjs(dato));

  const finnNyePerioder = useCallback(
    (nyFom: string): Periode[] => {
      const fieldSomSplittes = fields.find(field => overlapper(field.fom, field.tom, nyFom));
      if (!fieldSomSplittes) {
        throw new Error(`Finner ikke field somme inneholder dato ${nyFom}`);
      }
      const splittDel1Tom = dayjs(nyFom).subtract(1, 'day');
      const splittDel1 = {
        fom: dayjs(fieldSomSplittes.fom).format(ISO_DATE_FORMAT),
        tom: splittDel1Tom.format(ISO_DATE_FORMAT),
      };
      const splittDel2 = {
        fom: dayjs(nyFom).format(ISO_DATE_FORMAT),
        tom: fieldSomSplittes.tom,
      };
      return [splittDel1, splittDel2];
    },
    [fields],
  );

  const splittPeriode = useCallback(
    (nyFom: string) => {
      const fieldSomSplittes = fields.find(field => overlapper(field.fom, field.tom, nyFom));
      if (!fieldSomSplittes) {
        throw new Error(`Finner ikke field somme inneholder dato ${nyFom}`);
      }
      const nyePerioder = finnNyePerioder(nyFom);
      const periodeFieldIndex = fields.indexOf(fieldSomSplittes);
      const andelerFraField = fieldSomSplittes.inntektsforhold || [];
      const splittDel1 = {
        inntektsforhold: andelerFraField.map((andel, index) =>
          mapInntektsforhold(andel, true, periodeFieldIndex, index),
        ),
        fom: nyePerioder[0].fom,
        tom: nyePerioder[0].tom,
      };
      const splittDel2 = {
        inntektsforhold: andelerFraField.map((andel, index) =>
          mapInntektsforhold(andel, false, periodeFieldIndex, index),
        ),
        fom: nyePerioder[1].fom,
        tom: nyePerioder[1].tom,
      };
      remove(periodeFieldIndex);
      insert(periodeFieldIndex, [splittDel1, splittDel2]);
    },
    [fields],
  );

  const åpneModal = useCallback(() => {
    setModalErÅpen(true);
  }, [modalErÅpen]);

  const lukkModal = useCallback(() => {
    setModalErÅpen(false);
  }, [modalErÅpen]);

  return (
    <>
      {getAksjonspunktText()}
      {!!vurderInntektsforholdPerioder && erAksjonspunktÅpent && (
        <>
          <VerticalSpacer eightPx />
          <Alert size="small" variant="info" title="">
            {intl.formatMessage({ id: 'TilkommetAktivitet.AksjonspunktAlert' })}
          </Alert>
        </>
      )}
      <VerticalSpacer fourtyPx />

      <FlexContainer>
        <FlexRow className={styles.tittelRad}>
          <FlexColumn>
            <Heading size="small" level="3">
              {intl.formatMessage({ id: 'TilkommetAktivitet.Heading' })}
            </Heading>
          </FlexColumn>
          <FlexColumn className={styles.modalKnapp}>
            <Button
              variant="tertiary"
              loading={false}
              disabled={readOnly}
              onClick={åpneModal}
              size="small"
              type="button"
              icon={<ScissorsIcon height={32} width={32} />}
            >
              {intl.formatMessage({ id: 'TilkommetAktivitet.Modal.Knapp' })}
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      {modalErÅpen && (
        <PeriodesplittModal
          fields={fields}
          forhåndsvisPeriodesplitt={finnNyePerioder}
          lukkModal={lukkModal}
          skalViseModal={modalErÅpen}
          utførPeriodesplitt={splittPeriode}
        />
      )}
      <TilkommetAktivitetAccordion
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        formName={formName}
        fields={fields}
        bgIndex={bgIndex}
        readOnly={readOnly}
        erAksjonspunktÅpent={erAksjonspunktÅpent}
        submittable={submittable}
      />
    </>
  );
};
export default TilkommetAktivitetPanel;
