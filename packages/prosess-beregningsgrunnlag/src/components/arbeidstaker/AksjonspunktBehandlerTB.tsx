import React, { ReactElement } from 'react';
import { useFormContext, UseFormReturn } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus, KodeverkType, PeriodeAarsak } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';
import { dateFormat, formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import {
  TidsbegrenseArbeidsforholdTabellCelle,
  TidsbegrenseArbeidsforholdTabellData,
  TidsbegrenseArbeidsforholdValues,
} from '../../types/ATFLAksjonspunkt';
import { BeregningFormValues } from '../../types/BeregningFormValues';
import {
  TidsbegrensetArbeidsforholdInntektResultat,
  TidsbegrensetArbeidsforholdPeriodeResultat,
} from '../../types/interface/BeregningsgrunnlagAP';
import { KodeverkForPanel } from '../../types/KodeverkForPanelForBg';
import { createVisningsnavnForAktivitet } from '../../util/createVisningsnavnForAktivitet';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import styles from '../fellesPaneler/aksjonspunktBehandler.module.css';

const formPrefix = 'inntektField';

const harPeriodeArbeidsforholdAvsluttet = (periode: BeregningsgrunnlagPeriodeProp): boolean =>
  !!periode.periodeAarsaker &&
  periode.periodeAarsaker.map(kode => kode).includes(PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET);

// Kombinerer perioder mellom avsluttede arbeidsforhold
const finnPerioderMedAvsluttetArbeidsforhold = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
): BeregningsgrunnlagPeriodeProp[] => {
  const perioderMellomSluttdatoForArbeidsforhold = [];
  let k = 0;
  while (k < allePerioder.length) {
    const nyPeriode = { ...allePerioder[k] };
    k += 1;
    while (k < allePerioder.length && !harPeriodeArbeidsforholdAvsluttet(allePerioder[k])) {
      k += 1;
    }
    nyPeriode.beregningsgrunnlagPeriodeTom = allePerioder[k - 1].beregningsgrunnlagPeriodeTom;
    perioderMellomSluttdatoForArbeidsforhold.push(nyPeriode);
  }
  return perioderMellomSluttdatoForArbeidsforhold;
};

// Nøkkelen til et inputfield konstrueres utifra navnet på andelen og perioden den er i samt en fast prefix
const createInputFieldKey = (andel: BeregningsgrunnlagAndel, periode: BeregningsgrunnlagPeriodeProp): string => {
  if (!andel.arbeidsforhold) {
    return `${formPrefix}_${andel.andelsnr}_${periode.beregningsgrunnlagPeriodeFom}`;
  }
  return `${formPrefix}_${andel.arbeidsforhold.arbeidsforholdId}_${andel.andelsnr}_${periode.beregningsgrunnlagPeriodeFom}`;
};

const findArbeidstakerAndeler = (periode: BeregningsgrunnlagPeriodeProp): BeregningsgrunnlagAndel[] =>
  !periode.beregningsgrunnlagPrStatusOgAndel
    ? []
    : periode.beregningsgrunnlagPrStatusOgAndel.filter(
        andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER && andel.erTilkommetAndel !== true,
      );

const createArbeidsforholdMapKey = (arbeidsforhold?: BeregningsgrunnlagArbeidsforhold): string => {
  const arbeidsforholdId = arbeidsforhold?.arbeidsforholdId ? arbeidsforhold?.arbeidsforholdId : '';
  return arbeidsforhold ? `${arbeidsforhold.arbeidsgiverIdent}${arbeidsforholdId}` : '';
};

const lagVisningsnavnForAktivitet = (
  arbeidsforhold: BeregningsgrunnlagArbeidsforhold,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => {
  const arbeidsforholdInfo = arbeidsforhold.arbeidsgiverIdent
    ? arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent]
    : null;
  if (!arbeidsforholdInfo) {
    return arbeidsforhold.arbeidsforholdType
      ? kodeverkSamling[KodeverkType.OPPTJENING_AKTIVITET_TYPE].find(a => a.kode === arbeidsforhold.arbeidsforholdType)
          ?.navn
      : '';
  }
  return createVisningsnavnForAktivitet(arbeidsforholdInfo, arbeidsforhold.eksternArbeidsforholdId);
};

// Dette er objektet hver key i mappen vil ha en liste med
const createMapValueObject = (): TidsbegrenseArbeidsforholdTabellCelle => ({
  erTidsbegrenset: true,
  isEditable: false,
  tabellInnhold: '',
  inputfieldKey: '',
});

// Initialiserer arbeidsforholdet mappet med data som skal vises uansett hva slags data vi har.
// Dette innebærer at første kolonne i raden skal inneholde andelsnavn og andre kolonne skal inneholde beregnetPrAar.
// Vi antar at alle andeler ligger i alle perioder, henter derfor kun ut andeler fra den første perioden.
const initializeMap = (
  periode: BeregningsgrunnlagPeriodeProp,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): TidsbegrenseArbeidsforholdTabellData => {
  const alleAndeler = findArbeidstakerAndeler(periode);
  const mapMedAndeler = {} as TidsbegrenseArbeidsforholdTabellData;
  alleAndeler.forEach(andel => {
    if (!andel.arbeidsforhold) {
      return;
    }

    // Første kolonne er arbeidsgivernavn og orgnr
    const andelMapNavn = createArbeidsforholdMapKey(andel.arbeidsforhold);
    const mapValueMedAndelNavn = createMapValueObject();
    mapValueMedAndelNavn.tabellInnhold = lagVisningsnavnForAktivitet(
      andel.arbeidsforhold,
      kodeverkSamling,
      arbeidsgiverOpplysningerPerId,
    );
    mapValueMedAndelNavn.erTidsbegrenset =
      andel.erTidsbegrensetArbeidsforhold !== undefined ? andel.erTidsbegrensetArbeidsforhold : false;
    mapMedAndeler[andelMapNavn] = [mapValueMedAndelNavn];
  });
  return mapMedAndeler;
};

const finnFørstePeriode = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagPeriodeProp =>
  allePerioder.sort((a, b) => dayjs(a.beregningsgrunnlagPeriodeFom).diff(dayjs(b.beregningsgrunnlagPeriodeFom)))[0];

const finnAndelIPeriode = (
  andel: BeregningsgrunnlagAndel,
  periode: BeregningsgrunnlagPeriodeProp,
): BeregningsgrunnlagAndel | undefined => {
  const andeler = periode.beregningsgrunnlagPrStatusOgAndel;
  if (andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER) {
    return andeler?.find(
      a =>
        a.arbeidsforhold?.arbeidsgiverIdent === andel.arbeidsforhold?.arbeidsgiverIdent &&
        a.arbeidsforhold?.arbeidsforholdId === andel.arbeidsforhold?.arbeidsforholdId,
    );
  }
  return andeler?.find(a => a.aktivitetStatus === andel.aktivitetStatus);
};

const erAndelTidsbegrenset = (
  andel: BeregningsgrunnlagAndel,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
): boolean => {
  const førstePeriode = finnFørstePeriode(allePerioder);
  const erTidsbegrenset = finnAndelIPeriode(andel, førstePeriode)?.erTidsbegrensetArbeidsforhold;
  return !!erTidsbegrenset;
};

const createTableData = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): TidsbegrenseArbeidsforholdTabellData => {
  // Vi er ikke interessert i perioder som oppstår grunnet naturalytelse
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(allePerioder);
  const førstePeriodeFom = allePerioder[0].beregningsgrunnlagPeriodeFom;
  const arbeidsforholdPeriodeMap = initializeMap(allePerioder[0], kodeverkSamling, arbeidsgiverOpplysningerPerId);

  relevantePerioder.forEach(periode => {
    const erFørstePeriode = periode.beregningsgrunnlagPeriodeFom === førstePeriodeFom;
    const arbeidstakerAndeler = findArbeidstakerAndeler(periode);
    arbeidstakerAndeler.forEach(andel => {
      const erTidsbegrensetAndel = erAndelTidsbegrenset(andel, allePerioder);
      const mapKey = createArbeidsforholdMapKey(andel.arbeidsforhold);
      const newMapValue = createMapValueObject();
      newMapValue.tabellInnhold =
        andel.overstyrtPrAar !== undefined && andel.overstyrtPrAar !== null
          ? formatCurrencyNoKr(andel.overstyrtPrAar)
          : '';
      newMapValue.erTidsbegrenset = false;
      newMapValue.isEditable = erTidsbegrensetAndel ? true : erFørstePeriode;
      newMapValue.inputfieldKey = createInputFieldKey(andel, periode);
      arbeidsforholdPeriodeMap[mapKey].push(newMapValue);
    });
  });
  return arbeidsforholdPeriodeMap;
};

const createSummaryTableRow = (listOfBruttoPrPeriode: BruttoPrPeriode[]): ReactElement => (
  <tr id="bruttoPrPeriodeRad" key="bruttoPrPeriodeRad">
    <td key="bruttoTittel" colSpan={2}>
      <BodyShort size="small">
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode" />
      </BodyShort>
    </td>
    {listOfBruttoPrPeriode.map(element => (
      <td key={element.periodeFom} colSpan={2}>
        <BodyShort size="small" className={beregningStyles.semiBoldText}>
          {formatCurrencyNoKr(element.brutto)}
        </BodyShort>
      </td>
    ))}
  </tr>
);

const createPerioderRow = (relevantePerioder: BruttoPrPeriode[]): ReactElement => (
  <tr key="PeriodeHeaderRad">
    <td />
    {relevantePerioder.map(element => {
      const fraDato = element.periodeFom;
      return (
        <td key={`periodeittel${fraDato}`} colSpan={2}>
          <Detail>{dateFormat(fraDato)}</Detail>
        </td>
      );
    })}
    <td />
  </tr>
);
const createRows = (
  tableData: TidsbegrenseArbeidsforholdTabellData,
  readOnly: boolean,
  finnesAlleredeLøstPeriode: boolean,
  perioder: BruttoPrPeriode[],
  fieldIndex: number,
  formName: string,
): ReactElement[] => {
  const rows = [];
  rows.push(createPerioderRow(perioder));
  rows.push(
    <tr key="Tabletop">
      <td key="ombergenetAarBlank" colSpan={2} />
      {perioder.map((element, index) => (
        <React.Fragment key={`PeriodeWrapper${index + 1}`}>
          <td key={`Col_Tittel_${element.periodeFom}`} colSpan={2}>
            <Detail>
              <FormattedMessage
                id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"
                key={`Tittel_${element.periodeFom}`}
              />
            </Detail>
          </td>
        </React.Fragment>
      ))}
    </tr>,
  );

  Object.keys(tableData).forEach(val => {
    const list = tableData[val];
    rows.push(
      <tr key={val}>
        {list.map(element => {
          if (!element.isEditable) {
            return (
              <td key={element.tabellInnhold} colSpan={2}>
                <BodyShort size="small">{element.tabellInnhold}</BodyShort>
              </td>
            );
          }
          return (
            <React.Fragment key={`key${element.inputfieldKey}`}>
              <td key={`Col-${element.inputfieldKey}`} colSpan={2}>
                <div className={finnesAlleredeLøstPeriode && readOnly ? styles.adjustedField : undefined}>
                  <InputField
                    name={`${formName}.${fieldIndex}.${element.inputfieldKey}`}
                    validate={[required, maxValueFormatted(178956970)]}
                    readOnly={readOnly}
                    isEdited={readOnly && finnesAlleredeLøstPeriode}
                    parse={parseCurrencyInput}
                    className={styles.breddeInntekt}
                  />
                </div>
              </td>
            </React.Fragment>
          );
        })}
      </tr>,
    );
  });

  rows.push(
    <tr key="sdeparator" className={styles.rowSpacer}>
      <td />
    </tr>,
  );
  rows.push(createSummaryTableRow(perioder));

  return rows;
};

type BruttoPrPeriode = {
  brutto: number;
  periodeFom: string;
  periodeTom: string;
};

const lagBruttoPrPeriodeListe = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  formMethods: UseFormReturn<BeregningFormValues>,
  fieldIndex: number,
  formName: string,
): BruttoPrPeriode[] => {
  const bruttoPrPeriodeList = [] as BruttoPrPeriode[];
  if (allePerioder.length < 1) {
    return bruttoPrPeriodeList;
  }
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(allePerioder);
  relevantePerioder.forEach(relevantPeriode => {
    const arbeidstakerAndeler = findArbeidstakerAndeler(relevantPeriode);
    const bruttoPrAndelForPeriode = arbeidstakerAndeler.map(andel => {
      const inputFieldKey = createInputFieldKey(andel, relevantPeriode);
      const fastsattInntekt = formMethods.watch(`${formName}.${fieldIndex}.${inputFieldKey}`);
      return fastsattInntekt === undefined || fastsattInntekt === '' ? 0 : removeSpacesFromNumber(fastsattInntekt);
    });
    const samletBruttoForPeriode = bruttoPrAndelForPeriode.reduce((a, b) => a + b);
    bruttoPrPeriodeList.push({
      brutto: samletBruttoForPeriode,
      periodeFom: relevantPeriode.beregningsgrunnlagPeriodeFom,
      periodeTom: relevantPeriode.beregningsgrunnlagPeriodeTom,
    });
  });
  return bruttoPrPeriodeList;
};

type Props = {
  readOnly: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formName: string;
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  kodeverkSamling: KodeverkForPanel;
  fieldIndex: number;
};

export const AksjonspunktBehandlerTidsbegrenset = ({
  readOnly,
  allePerioder,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
  formName,
}: Props) => {
  const tabellData = createTableData(allePerioder, kodeverkSamling, arbeidsgiverOpplysningerPerId);
  const finnesAlleredeLøstPeriode = allePerioder.some(periode =>
    periode.beregningsgrunnlagPrStatusOgAndel?.some(
      andel =>
        andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER &&
        (!!andel.overstyrtPrAar || andel.overstyrtPrAar === 0),
    ),
  );
  const formMethods = useFormContext<BeregningFormValues>();
  const bruttoPrPeriodeList = lagBruttoPrPeriodeListe(allePerioder, formMethods, fieldIndex, formName);
  return (
    <table className={styles.inntektTableTB}>
      <tbody>
        {createRows(tabellData, readOnly, finnesAlleredeLøstPeriode, bruttoPrPeriodeList, fieldIndex, formName)}
      </tbody>
    </table>
  );
};

AksjonspunktBehandlerTidsbegrenset.buildInitialValues = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
): TidsbegrenseArbeidsforholdValues => {
  const initialValues = {} as TidsbegrenseArbeidsforholdValues;
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(allePerioder);
  const førstePeriode = finnFørstePeriode(allePerioder);
  relevantePerioder.forEach(periode => {
    const arbeidstakerAndeler = periode.beregningsgrunnlagPrStatusOgAndel
      ? periode.beregningsgrunnlagPrStatusOgAndel.filter(
          andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER,
        )
      : [];
    arbeidstakerAndeler.forEach(andel => {
      const erTB = erAndelTidsbegrenset(andel, allePerioder);
      if (erTB) {
        const overstyrt = formatCurrencyNoKr(andel.overstyrtPrAar);
        initialValues[createInputFieldKey(andel, periode)] = overstyrt || '';
      } else {
        const matchendeAndelIFørstePeriode = finnAndelIPeriode(andel, førstePeriode);
        const overstyrt = formatCurrencyNoKr(matchendeAndelIFørstePeriode?.overstyrtPrAar);
        initialValues[createInputFieldKey(andel, periode)] = overstyrt || '';
      }
    });
  });
  return initialValues;
};

AksjonspunktBehandlerTidsbegrenset.transformValues = (
  values: TidsbegrenseArbeidsforholdValues,
  perioder: BeregningsgrunnlagPeriodeProp[],
): TidsbegrensetArbeidsforholdPeriodeResultat[] => {
  const respons: TidsbegrensetArbeidsforholdPeriodeResultat[] = [];
  const førstePeriode = finnFørstePeriode(perioder);
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(perioder);
  relevantePerioder.forEach(relevantPeriode => {
    const arbeidstakerAndeler = findArbeidstakerAndeler(relevantPeriode);
    const fastsatteTidsbegrensedeAndeler = [] as TidsbegrensetArbeidsforholdInntektResultat[];
    arbeidstakerAndeler.forEach(andel => {
      const erTB = erAndelTidsbegrenset(andel, perioder);
      if (erTB) {
        const overstyrtInntekt = removeSpacesFromNumber(values[createInputFieldKey(andel, relevantPeriode)]);
        fastsatteTidsbegrensedeAndeler.push({
          andelsnr: andel.andelsnr,
          bruttoFastsattInntekt: overstyrtInntekt,
        });
      } else {
        const overstyrtInntekt = removeSpacesFromNumber(values[createInputFieldKey(andel, førstePeriode)]);
        fastsatteTidsbegrensedeAndeler.push({
          andelsnr: andel.andelsnr,
          bruttoFastsattInntekt: overstyrtInntekt,
        });
      }
    });
    respons.push({
      periodeFom: relevantPeriode.beregningsgrunnlagPeriodeFom,
      periodeTom: relevantPeriode.beregningsgrunnlagPeriodeTom,
      fastsatteTidsbegrensedeAndeler,
    });
  });
  return respons;
};
