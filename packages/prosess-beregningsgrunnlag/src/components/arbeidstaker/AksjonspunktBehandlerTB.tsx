import React, { FunctionComponent, ReactElement } from 'react';
import { UseFormReturn, useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Detail } from '@navikt/ds-react';

import { dateFormat, formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { InputField } from '@navikt/ft-form-hooks';
import { AktivitetStatus, KodeverkType, PeriodeAarsak } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';
import {
  TidsbegrensetArbeidsforholdInntektResultat,
  TidsbegrensetArbeidsforholdPeriodeResultat,
} from '../../types/interface/BeregningsgrunnlagAP';

import createVisningsnavnForAktivitet from '../../util/createVisningsnavnForAktivitet';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import {
  TidsbegrenseArbeidsforholdTabellCelle,
  TidsbegrenseArbeidsforholdTabellData,
  TidsbegrenseArbeidsforholdValues,
} from '../../types/ATFLAksjonspunktTsType';

import styles from '../fellesPaneler/aksjonspunktBehandler.module.css';
import BeregningFormValues from '../../types/BeregningFormValues';
import KodeverkForPanel from '../../types/kodeverkForPanel';

const formPrefix = 'inntektField';

const harPeriodeArbeidsforholdAvsluttet = (periode: BeregningsgrunnlagPeriodeProp): boolean =>
  !!periode.periodeAarsaker &&
  periode.periodeAarsaker.map(kode => kode).includes(PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET);

// Finner sammenslått periode etter opphør av tidsbegrenset arbeid
const finnPeriodeEtterOpphørAvTidsbegrensetArbeid = (allePerioder: BeregningsgrunnlagPeriodeProp[]) => {
  let k = 0;
  while (k < allePerioder.length && !harPeriodeArbeidsforholdAvsluttet(allePerioder[k])) {
    k += 1;
  }
  const periodeUtenKortvarigArbeid = { ...allePerioder[k] };
  periodeUtenKortvarigArbeid.beregningsgrunnlagPeriodeTom =
    allePerioder[allePerioder.length - 1].beregningsgrunnlagPeriodeTom;
  return periodeUtenKortvarigArbeid;
};

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

type InntektMapType = {
  [key: string]: string | undefined;
};

// Finner beregnetPrAar for alle andeler, basert på data fra den første perioden
const createBeregnetInntektForAlleAndeler = (periode: BeregningsgrunnlagPeriodeProp): InntektMapType => {
  const mapMedInnteker = {} as InntektMapType;
  const arbeidstakerAndeler = findArbeidstakerAndeler(periode);
  arbeidstakerAndeler.forEach(andel => {
    mapMedInnteker[createArbeidsforholdMapKey(andel.arbeidsforhold)] = formatCurrencyNoKr(andel.beregnetPrAar);
  });
  return mapMedInnteker;
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
  const inntektMap = createBeregnetInntektForAlleAndeler(periode);
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

    // Andre kolonne er read-only visning av grunnlag
    const mapValueMedBeregnetForstePeriode = createMapValueObject();
    mapValueMedBeregnetForstePeriode.erTidsbegrenset = false;
    mapValueMedBeregnetForstePeriode.tabellInnhold = inntektMap[andelMapNavn] || '';
    mapMedAndeler[andelMapNavn].push(mapValueMedBeregnetForstePeriode);
  });
  return mapMedAndeler;
};

const createTableData = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): TidsbegrenseArbeidsforholdTabellData => {
  // Vi er ikke interessert i perioder som oppstår grunnet naturalytelse
  const relevantPeriode = finnPeriodeEtterOpphørAvTidsbegrensetArbeid(allePerioder);
  const kopiAvPeriode = { ...relevantPeriode };
  const arbeidsforholdPeriodeMap = initializeMap(allePerioder[0], kodeverkSamling, arbeidsgiverOpplysningerPerId);

  // Oppretter element for redigerbar periode
  const arbeidstakerAndeler = findArbeidstakerAndeler(kopiAvPeriode);
  arbeidstakerAndeler.forEach(andel => {
    const mapKey = createArbeidsforholdMapKey(andel.arbeidsforhold);
    const newMapValue = createMapValueObject();
    newMapValue.tabellInnhold =
      andel.overstyrtPrAar !== undefined && andel.overstyrtPrAar !== null
        ? formatCurrencyNoKr(andel.overstyrtPrAar)
        : '';
    newMapValue.erTidsbegrenset = false;
    newMapValue.isEditable = true;
    newMapValue.inputfieldKey = createInputFieldKey(andel, kopiAvPeriode);
    arbeidsforholdPeriodeMap[mapKey].push(newMapValue);
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

interface StaticFunctions {
  buildInitialValues: (allePerioder: BeregningsgrunnlagPeriodeProp[]) => TidsbegrenseArbeidsforholdValues;
  transformValues: (
    values: TidsbegrenseArbeidsforholdValues,
    perioder: BeregningsgrunnlagPeriodeProp[],
  ) => TidsbegrensetArbeidsforholdPeriodeResultat[];
}

type BruttoPrPeriode = {
  brutto: number;
  periodeFom: string;
  periodeTom: string;
};

const lagSummeringsdataForFørstePeriode = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BruttoPrPeriode => {
  const førstePeriode = allePerioder[0];
  const forstePeriodeATInntekt = !førstePeriode.beregningsgrunnlagPrStatusOgAndel
    ? []
    : (førstePeriode.beregningsgrunnlagPrStatusOgAndel
        .filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER)
        .map(andel => andel.beregnetPrAar) as number[]);
  const forstePeriodeInntekt = forstePeriodeATInntekt.reduce((a, b) => a + b);
  return {
    brutto: forstePeriodeInntekt,
    periodeFom: førstePeriode.beregningsgrunnlagPeriodeFom,
    periodeTom: førstePeriode.beregningsgrunnlagPeriodeTom,
  };
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
  const relevantPeriode = finnPeriodeEtterOpphørAvTidsbegrensetArbeid(allePerioder);
  bruttoPrPeriodeList.push(lagSummeringsdataForFørstePeriode(allePerioder));
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
  return bruttoPrPeriodeList;
};

type OwnProps = {
  readOnly: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formName: string;
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  kodeverkSamling: KodeverkForPanel;
  fieldIndex: number;
};

const AksjonspunktBehandlerTidsbegrenset: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  allePerioder,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
  formName,
}) => {
  const tabellData = createTableData(allePerioder, kodeverkSamling, arbeidsgiverOpplysningerPerId);
  const finnesAlleredeLøstPeriode = allePerioder.some(
    periode =>
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
  relevantePerioder.forEach(periode => {
    const arbeidstakerAndeler = periode.beregningsgrunnlagPrStatusOgAndel
      ? periode.beregningsgrunnlagPrStatusOgAndel.filter(
          andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER,
        )
      : [];
    arbeidstakerAndeler.forEach(andel => {
      const overstyrt = formatCurrencyNoKr(andel.overstyrtPrAar);
      initialValues[createInputFieldKey(andel, periode)] = overstyrt || '';
    });
  });
  return initialValues;
};

AksjonspunktBehandlerTidsbegrenset.transformValues = (
  values: TidsbegrenseArbeidsforholdValues,
  perioder: BeregningsgrunnlagPeriodeProp[],
): TidsbegrensetArbeidsforholdPeriodeResultat[] => {
  const relevantPeriode = finnPeriodeEtterOpphørAvTidsbegrensetArbeid(perioder);
  const arbeidstakerAndeler = findArbeidstakerAndeler(relevantPeriode);

  const fastsatteTidsbegrensedeAndeler = [] as TidsbegrensetArbeidsforholdInntektResultat[];
  arbeidstakerAndeler.forEach(andel => {
    const overstyrtInntekt = removeSpacesFromNumber(values[createInputFieldKey(andel, relevantPeriode)]);
    fastsatteTidsbegrensedeAndeler.push({
      andelsnr: andel.andelsnr,
      bruttoFastsattInntekt: overstyrtInntekt,
    });
  });

  return [
    {
      periodeFom: relevantPeriode.beregningsgrunnlagPeriodeFom,
      periodeTom: relevantPeriode.beregningsgrunnlagPeriodeTom,
      fastsatteTidsbegrensedeAndeler,
    },
  ];
};

export default AksjonspunktBehandlerTidsbegrenset;
