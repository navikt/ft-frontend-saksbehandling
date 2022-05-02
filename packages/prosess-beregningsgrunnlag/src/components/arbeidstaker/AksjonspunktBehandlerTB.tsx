import React, { FunctionComponent, ReactElement } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import {
  dateFormat,
  formatCurrencyNoKr,
  parseCurrencyInput,
  removeSpacesFromNumber,
  required,
  getKodeverknavnFn,
} from '@navikt/ft-utils';
import { formHooks, InputField } from '@navikt/ft-form-hooks';
import { AktivitetStatus, KodeverkType, PeriodeAarsak, isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';
import {
  TidsbegrensetArbeidsforholdInntektResultat,
  TidsbegrensetArbeidsforholdPeriodeResultat,
} from '../../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import { createVisningsnavnForAndel } from '../../util/createVisningsnavnForAktivitet';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import {
  TidsbegrenseArbeidsforholdInntektMap,
  TidsbegrenseArbeidsforholdTabellCelle,
  TidsbegrenseArbeidsforholdTabellData,
  TidsbegrenseArbeidsforholdValues,
} from '../../types/ATFLAksjonspunktTsType';
import BeregningsgrunnlagValues from '../../types/BeregningsgrunnlagAksjonspunktTsType';

import styles from '../fellesPaneler/aksjonspunktBehandler.less';

const formPrefix = 'inntektField';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
} = ProsessBeregningsgrunnlagAksjonspunktCode;

const finnAksjonspunktForFastsettBgTidsbegrensetAT = (gjeldendeAksjonspunkter: Aksjonspunkt[]): Aksjonspunkt | undefined => gjeldendeAksjonspunkter
  && (gjeldendeAksjonspunkter.find((ap) => ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD
  || ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS));

const harPeriodeArbeidsforholdAvsluttet = (periode: BeregningsgrunnlagPeriodeProp): boolean => !!periode.periodeAarsaker
  && periode.periodeAarsaker.map((kode) => kode).includes(periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET);

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

const findRelevanteArbeidstakerAndeler = (periode: BeregningsgrunnlagPeriodeProp): BeregningsgrunnlagAndel[] => (!periode.beregningsgrunnlagPrStatusOgAndel
  ? []
  : periode.beregningsgrunnlagPrStatusOgAndel.filter((andel) => andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER)
    .filter((andel) => !andel.erTilkommetAndel));

const createArbeidsforholdMapKey = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold, arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): string => {
  const arbeidsforholdInformasjon = arbeidsforhold.arbeidsgiverIdent ? arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent] : undefined;
  if (!arbeidsforholdInformasjon) {
    return arbeidsforhold.arbeidsforholdType ? arbeidsforhold.arbeidsforholdType : '';
  }
  return `${arbeidsforholdInformasjon.navn}${arbeidsforhold.arbeidsforholdId}`;
};

// Finner beregnetPrAar for alle andeler, basert på data fra den første perioden
const createBeregnetInntektForAlleAndeler = (perioder: BeregningsgrunnlagPeriodeProp[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId): TidsbegrenseArbeidsforholdInntektMap => {
  const mapMedInnteker = {} as TidsbegrenseArbeidsforholdInntektMap;
  const arbeidstakerAndeler = perioder.length > 0
    ? perioder[0].beregningsgrunnlagPrStatusOgAndel?.filter((andel) => andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER)
    : [];
  if (arbeidstakerAndeler) {
    arbeidstakerAndeler.forEach((andel) => {
      if (andel.arbeidsforhold) {
        mapMedInnteker[createArbeidsforholdMapKey(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId)] = formatCurrencyNoKr(andel.beregnetPrAar) || '';
      }
    });
  }
  return mapMedInnteker;
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
  perioder: BeregningsgrunnlagPeriodeProp[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): TidsbegrenseArbeidsforholdTabellData => {
  const inntektMap = createBeregnetInntektForAlleAndeler(perioder, arbeidsgiverOpplysningerPerId);
  const alleAndeler = findRelevanteArbeidstakerAndeler(perioder[0]);
  const mapMedAndeler = {} as TidsbegrenseArbeidsforholdTabellData;
  alleAndeler.forEach((andel) => {
    const andelMapNavn = andel.arbeidsforhold ? createArbeidsforholdMapKey(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId) : '';
    const mapValueMedAndelNavn = createMapValueObject();
    mapValueMedAndelNavn.tabellInnhold = createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, getKodeverknavn);
    mapValueMedAndelNavn.erTidsbegrenset = andel.erTidsbegrensetArbeidsforhold !== undefined ? andel.erTidsbegrensetArbeidsforhold : false;

    const mapValueMedBeregnetForstePeriode = createMapValueObject();
    mapValueMedBeregnetForstePeriode.erTidsbegrenset = false;
    mapValueMedBeregnetForstePeriode.tabellInnhold = inntektMap[andelMapNavn];
    mapMedAndeler[andelMapNavn] = [mapValueMedAndelNavn];
  });
  return mapMedAndeler;
};

const createTableData = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): TidsbegrenseArbeidsforholdTabellData => {
  // Vi er ikke interessert i perioder som oppstår grunnet naturalytelse
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(allePerioder);
  const kopiAvPerioder = relevantePerioder.slice(0);
  const arbeidsforholdPeriodeMap = initializeMap(
    kopiAvPerioder,
    getKodeverknavnFn(alleKodeverk),
    arbeidsgiverOpplysningerPerId,
  );
  // Etter å ha initialiser mappet med faste bokser kan vi fjerne første element fra lista, da
  // denne ikke skal være en av de redigerbare feltene i tabellen, og det er disse vi skal lage nå
  kopiAvPerioder.forEach(periode => {
    const arbeidstakerAndeler = findRelevanteArbeidstakerAndeler(periode);
    arbeidstakerAndeler.forEach((andel) => {
      const mapKey = andel.arbeidsforhold ? createArbeidsforholdMapKey(andel.arbeidsforhold, arbeidsgiverOpplysningerPerId) : '';
      const mapValue = arbeidsforholdPeriodeMap[mapKey];
      const newMapValue = createMapValueObject();
      const ovsterstyrt = formatCurrencyNoKr(andel.overstyrtPrAar);
      newMapValue.tabellInnhold = ovsterstyrt || '';
      newMapValue.erTidsbegrenset = false;
      newMapValue.isEditable = true;
      newMapValue.inputfieldKey = createInputFieldKey(andel, periode);
      mapValue.push(newMapValue);
      arbeidsforholdPeriodeMap[mapKey] = mapValue;
    });
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
      <td key={element.periode} colSpan={2}>
        <Normaltekst className={beregningStyles.semiBoldText}>{formatCurrencyNoKr(element.brutto)}</Normaltekst>
      </td>
    ))}
  </tr>
);

const createPerioderRow = (relevantePerioder: BruttoPrPeriode[]): ReactElement => (
  <tr key="PeriodeHeaderRad">
    <td />
    {relevantePerioder.map(element => {
      const fraDato = element.periode.split('_')[0];
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
): ReactElement[] => {
  const rows = [];
  rows.push(createPerioderRow(perioder));
  rows.push(
    <tr key="Tabletop">
      <td key="ombergenetAarBlank" colSpan={2} />
      {perioder.map((element, index) => (
        <React.Fragment key={`PeriodeWrapper${index + 1}`}>
          <td key={`Col_Tittel_${element.periode}`} colSpan={2}>
            <Undertekst>
              <FormattedMessage
                id="Beregningsgrunnlag.AarsinntektPanel.AksjonspunktBehandler.OmberegnetAar"
                key={`Tittel_${element.periode}`}
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
                    name={element.inputfieldKey}
                    validate={[required]}
                    readOnly={readOnly}
                    parse={parseCurrencyInput}
                    bredde="XS"
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

const getIsAksjonspunktClosed = (gjeldendeAksjonspunkter: Aksjonspunkt[]): boolean => {
  const aksjonspunkt = finnAksjonspunktForFastsettBgTidsbegrensetAT(gjeldendeAksjonspunkter);
  return aksjonspunkt ? !isAksjonspunktOpen(aksjonspunkt.status) : false;
};

const undefinedTil0 = (beløp: number | undefined): number => (beløp || 0);

interface StaticFunctions {
  buildInitialValues: (allePerioder: BeregningsgrunnlagPeriodeProp[]) => TidsbegrenseArbeidsforholdValues;
  transformValues: (values: TidsbegrenseArbeidsforholdValues,
                     perioder: BeregningsgrunnlagPeriodeProp[]) => TidsbegrensetArbeidsforholdPeriodeResultat[];
}

type BruttoPrPeriode = {
  brutto: number;
  periode: string;
};

const lagBruttoPrPeriodeListe = (allePerioder: BeregningsgrunnlagPeriodeProp[], formMethods: UseFormReturn<BeregningsgrunnlagValues>): BruttoPrPeriode[] => {
  const bruttoPrPeriodeList = [] as BruttoPrPeriode[];
  if (allePerioder.length < 1) {
    return bruttoPrPeriodeList;
  }
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(allePerioder);
  const forstePeriodeATInntekt = relevantePerioder[0].beregningsgrunnlagPrStatusOgAndel
    ? relevantePerioder[0].beregningsgrunnlagPrStatusOgAndel.filter((andel) => andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER)
      .map((andel) => andel.beregnetPrAar)
    : [];
  const forstePeriodeInntekt = forstePeriodeATInntekt.reduce((a, b) => undefinedTil0(a) + undefinedTil0(b));
  bruttoPrPeriodeList.push({
    brutto: forstePeriodeInntekt || 0,
    periode:
      `beregnetInntekt_${relevantePerioder[0].beregningsgrunnlagPeriodeFom}_${relevantePerioder[0].beregningsgrunnlagPeriodeTom}`,
  });
  relevantePerioder.forEach((periode) => {
    const arbeidstakerAndeler = periode.beregningsgrunnlagPrStatusOgAndel
      ? periode.beregningsgrunnlagPrStatusOgAndel.filter((andel) => andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER)
      : [];
    const bruttoPrAndelForPeriode = arbeidstakerAndeler.map((andel) => {
      const inputFieldKey = createInputFieldKey(andel, periode);
      const fastsattInntekt = formMethods.watch(inputFieldKey);
      return fastsattInntekt === undefined || fastsattInntekt === '' ? 0 : removeSpacesFromNumber(fastsattInntekt);
    });
    const samletBruttoForPeriode = bruttoPrAndelForPeriode.reduce((a, b) => a + b);
    bruttoPrPeriodeList.push({
      brutto: samletBruttoForPeriode,
      periode: `${periode.beregningsgrunnlagPeriodeFom}_${periode.beregningsgrunnlagPeriodeTom}`,
    });
  });
  return bruttoPrPeriodeList;
};

type OwnProps = {
  readOnly: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formName: string;
  aksjonspunkter: Aksjonspunkt[];
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  alleKodeverk: AlleKodeverk;
};

const AksjonspunktBehandlerTidsbegrenset: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  allePerioder,
  aksjonspunkter,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  const tabellData = createTableData(allePerioder, alleKodeverk, arbeidsgiverOpplysningerPerId);
  const isAksjonspunktClosed = getIsAksjonspunktClosed(aksjonspunkter);
  const formMethods = formHooks.useFormContext<BeregningsgrunnlagValues>();
  const bruttoPrPeriodeList = lagBruttoPrPeriodeListe(allePerioder, formMethods);
  const perioder = bruttoPrPeriodeList.slice(1);
  return (
    <table className={styles.inntektTableTB}>
      <tbody>{createRows(tabellData, readOnly, isAksjonspunktClosed, perioder)}</tbody>
    </table>
  );
};

AksjonspunktBehandlerTidsbegrenset.buildInitialValues = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
): TidsbegrenseArbeidsforholdValues => {
  const initialValues = {} as TidsbegrenseArbeidsforholdValues;
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(allePerioder);
  relevantePerioder.forEach((periode) => {
    const arbeidstakerAndeler = periode.beregningsgrunnlagPrStatusOgAndel
      ? periode.beregningsgrunnlagPrStatusOgAndel.filter((andel) => andel.aktivitetStatus === aktivitetStatus.ARBEIDSTAKER)
      : [];
    arbeidstakerAndeler.forEach((andel) => {
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
  const fastsattePerioder = [] as TidsbegrensetArbeidsforholdPeriodeResultat[];
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(perioder);
  relevantePerioder.forEach(periode => {
    const arbeidstakerAndeler = findRelevanteArbeidstakerAndeler(periode);
    const fastsatteTidsbegrensedeAndeler = [] as TidsbegrensetArbeidsforholdInntektResultat[];
    arbeidstakerAndeler.forEach(andel => {
      if (!andel.andelsnr) {
        throw new Error('Forventer andelsnr på andeler som skal fastsettes');
      }
      const overstyrtInntekt = removeSpacesFromNumber(values[createInputFieldKey(andel, periode)]);
      fastsatteTidsbegrensedeAndeler.push({
        andelsnr: andel.andelsnr,
        bruttoFastsattInntekt: overstyrtInntekt,
      });
    });
    if (!periode.beregningsgrunnlagPeriodeFom || !periode.beregningsgrunnlagPeriodeTom) {
      throw new Error('Forventer en definert periode');
    }
    fastsattePerioder.push({
      periodeFom: periode.beregningsgrunnlagPeriodeFom,
      periodeTom: periode.beregningsgrunnlagPeriodeTom,
      fastsatteTidsbegrensedeAndeler,
    });
  });
  return fastsattePerioder;
};

export default AksjonspunktBehandlerTidsbegrenset;
