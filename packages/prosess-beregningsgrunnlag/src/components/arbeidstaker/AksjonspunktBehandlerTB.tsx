import React, { FunctionComponent, ReactElement } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import {
  dateFormat,
  formatCurrencyNoKr,
  getKodeverknavnFn,
  parseCurrencyInput,
  removeSpacesFromNumber,
} from '@navikt/ft-utils';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { formHooks, InputField } from '@navikt/ft-form-hooks';
import { AktivitetStatus, isAksjonspunktOpen, KodeverkType, PeriodeAarsak } from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';
import {
  TidsbegrensetArbeidsforholdInntektResultat,
  TidsbegrensetArbeidsforholdPeriodeResultat,
} from '../../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import createVisningsnavnForAktivitet from '../../util/createVisningsnavnForAktivitet';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import {
  TidsbegrenseArbeidsforholdTabellCelle,
  TidsbegrenseArbeidsforholdTabellData,
  TidsbegrenseArbeidsforholdValues,
} from '../../types/ATFLAksjonspunktTsType';

import styles from '../fellesPaneler/aksjonspunktBehandler.less';
import BeregningFormValues from '../../types/BeregningFormValues';

const formPrefix = 'inntektField';

const { FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD, FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS } =
  ProsessBeregningsgrunnlagAksjonspunktCode;

const finnAksjonspunktForFastsettBgTidsbegrensetAT = (
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined =>
  gjeldendeAvklaringsbehov &&
  gjeldendeAvklaringsbehov.find(
    ap =>
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD ||
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  );

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
    : periode.beregningsgrunnlagPrStatusOgAndel.filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER);

const createArbeidsforholdMapKey = (arbeidsforhold?: BeregningsgrunnlagArbeidsforhold): string =>
  !arbeidsforhold
    ? ''
    : `${arbeidsforhold.arbeidsgiverIdent}${arbeidsforhold.arbeidsforholdId ? arbeidsforhold.arbeidsforholdId : ''}`;

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
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => {
  const arbeidsforholdInfo = arbeidsforhold.arbeidsgiverIdent
    ? arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent]
    : null;
  if (!arbeidsforholdInfo) {
    return arbeidsforhold.arbeidsforholdType
      ? getKodeverknavn(arbeidsforhold.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE)
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
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
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
      getKodeverknavn,
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
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): TidsbegrenseArbeidsforholdTabellData => {
  // Vi er ikke interessert i perioder som oppstår grunnet naturalytelse
  const relevantPeriode = finnPeriodeEtterOpphørAvTidsbegrensetArbeid(allePerioder);
  const kopiAvPeriode = { ...relevantPeriode };
  const arbeidsforholdPeriodeMap = initializeMap(
    allePerioder[0],
    getKodeverknavnFn(alleKodeverk),
    arbeidsgiverOpplysningerPerId,
  );

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
      <Normaltekst>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandlerTB.SumPeriode" />
      </Normaltekst>
    </td>
    {listOfBruttoPrPeriode.map(element => (
      <td key={element.periodeFom} colSpan={2}>
        <Normaltekst className={beregningStyles.semiBoldText}>{formatCurrencyNoKr(element.brutto)}</Normaltekst>
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
          <Undertekst>{dateFormat(fraDato)}</Undertekst>
        </td>
      );
    })}
    <td />
  </tr>
);
const createRows = (
  tableData: TidsbegrenseArbeidsforholdTabellData,
  readOnly: boolean,
  isAksjonspunktClosed: boolean,
  perioder: BruttoPrPeriode[],
  fieldIndex: number,
): ReactElement[] => {
  const rows = [];
  rows.push(createPerioderRow(perioder));
  rows.push(
    <tr key="Tabletop">
      <td key="ombergenetAarBlank" colSpan={2} />
      {perioder.map((element, index) => (
        <React.Fragment key={`PeriodeWrapper${index + 1}`}>
          <td key={`Col_Tittel_${element.periodeFom}`} colSpan={2}>
            <Undertekst>
              <FormattedMessage
                id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"
                key={`Tittel_${element.periodeFom}`}
              />
            </Undertekst>
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
                <Normaltekst>{element.tabellInnhold}</Normaltekst>
              </td>
            );
          }
          return (
            <React.Fragment key={`key${element.inputfieldKey}`}>
              <td key={`Col-${element.inputfieldKey}`} colSpan={2}>
                <div className={isAksjonspunktClosed && readOnly ? styles.adjustedField : undefined}>
                  <InputField
                    name={`BeregningForm.${fieldIndex}.${element.inputfieldKey}`}
                    validate={[required, maxValueFormatted(178956970)]}
                    readOnly={readOnly}
                    parse={parseCurrencyInput}
                    className={styles.bredde}
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

const getIsAksjonspunktClosed = (gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[]): boolean => {
  const avklaringsbehov = finnAksjonspunktForFastsettBgTidsbegrensetAT(gjeldendeAvklaringsbehov);
  return avklaringsbehov ? !isAksjonspunktOpen(avklaringsbehov.status) : false;
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
    const fastsattInntekt = formMethods.watch(`BeregningForm.${fieldIndex}.${inputFieldKey}`);
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
  avklaringsbehov: BeregningAvklaringsbehov[];
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  alleKodeverk: AlleKodeverk;
  fieldIndex: number;
};

const AksjonspunktBehandlerTidsbegrenset: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  allePerioder,
  avklaringsbehov,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
}) => {
  const tabellData = createTableData(allePerioder, alleKodeverk, arbeidsgiverOpplysningerPerId);
  const isAvklaringsbehovClosed = getIsAksjonspunktClosed(avklaringsbehov);
  const formMethods = formHooks.useFormContext<BeregningFormValues>();
  const bruttoPrPeriodeList = lagBruttoPrPeriodeListe(allePerioder, formMethods, fieldIndex);
  return (
    <table className={styles.inntektTableTB}>
      <tbody>{createRows(tabellData, readOnly, isAvklaringsbehovClosed, bruttoPrPeriodeList, fieldIndex)}</tbody>
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
