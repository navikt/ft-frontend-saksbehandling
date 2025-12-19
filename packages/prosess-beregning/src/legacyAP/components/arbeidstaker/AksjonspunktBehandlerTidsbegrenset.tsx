import { type ReactElement } from 'react';
import { type Control, useFormContext, type UseFormReturn } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Label, Spacer, Table } from '@navikt/ds-react';

import { RhfTextField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { PeriodeÅrsak } from '@navikt/ft-kodeverk';
import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';
import { BeløpLabel, DateLabel } from '@navikt/ft-ui-komponenter';
import {
  formatCurrencyNoKr,
  formaterArbeidsgiver,
  parseCurrencyInput,
  removeSpacesFromNumber,
  sortPeriodsBy,
} from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../../../types/KodeverkForPanel';
import type {
  TidsbegrenseArbeidsforholdTabellCelle,
  TidsbegrenseArbeidsforholdTabellData,
  TidsbegrenseArbeidsforholdValues,
} from '../../types/ATFLAksjonspunkt';
import type { BeregningFormValues, FormNameType } from '../../types/BeregningFormValues';
import type {
  FastsettAvvikATFLTidsbegrensetResultatAP,
  TidsbegrensetArbeidsforholdInntektResultat,
  TidsbegrensetArbeidsforholdPeriodeResultat,
} from '../../types/BeregningsgrunnlagAP';

const formPrefix = 'inntektField';

const harPeriodeArbeidsforholdAvsluttet = (periode: BeregningsgrunnlagPeriodeProp): boolean =>
  !!periode.periodeAarsaker &&
  periode.periodeAarsaker.map(kode => kode).includes(PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET);

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
    perioderMellomSluttdatoForArbeidsforhold.push({
      ...nyPeriode,
      beregningsgrunnlagPeriodeTom: allePerioder[k - 1].beregningsgrunnlagPeriodeTom,
    });
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
  periode.beregningsgrunnlagPrStatusOgAndel
    ? periode.beregningsgrunnlagPrStatusOgAndel.filter(
        andel => andel.aktivitetStatus === 'AT' && andel.erTilkommetAndel !== true,
      )
    : [];

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
      ? kodeverkSamling['OpptjeningAktivitetType'].find(a => a.kode === arbeidsforhold.arbeidsforholdType)?.navn
      : '';
  }
  return formaterArbeidsgiver(arbeidsforholdInfo, arbeidsforhold.eksternArbeidsforholdId);
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
      andel.erTidsbegrensetArbeidsforhold === undefined ? false : andel.erTidsbegrensetArbeidsforhold;
    mapMedAndeler[andelMapNavn] = [mapValueMedAndelNavn];
  });
  return mapMedAndeler;
};

const finnFørstePeriode = (allePerioder: BeregningsgrunnlagPeriodeProp[]): BeregningsgrunnlagPeriodeProp =>
  allePerioder.toSorted(sortPeriodsBy('beregningsgrunnlagPeriodeFom'))[0];

const finnAndelIPeriode = (
  andel: BeregningsgrunnlagAndel,
  periode: BeregningsgrunnlagPeriodeProp,
): BeregningsgrunnlagAndel | undefined => {
  const andeler = periode.beregningsgrunnlagPrStatusOgAndel;
  if (andel.aktivitetStatus === 'AT') {
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

const SummaryTableRow = ({ relevantePerioder }: { relevantePerioder: BruttoPrPeriode[] }): ReactElement => (
  <Table.Row shadeOnHover={false}>
    <Table.HeaderCell textSize="small">
      <FormattedMessage id="AksjonspunktBehandlerTB.SumPeriode" />
    </Table.HeaderCell>
    {relevantePerioder.map(({ periodeFom, brutto }) => (
      <Table.HeaderCell key={periodeFom} textSize="small" align="right">
        <BeløpLabel beløp={brutto} />
      </Table.HeaderCell>
    ))}
  </Table.Row>
);

const PerioderRow = ({ relevantePerioder }: { relevantePerioder: BruttoPrPeriode[] }): ReactElement => (
  <Table.Row shadeOnHover={false}>
    <Table.HeaderCell scope="col" />
    {relevantePerioder.map(({ periodeFom }) => {
      return (
        <Table.HeaderCell key={`periodetittel${periodeFom}`} align="right">
          <Label size="small">
            <DateLabel dateString={periodeFom} />
            <br />
            <FormattedMessage id="AksjonspunktBehandlerTB.OmberegnetAar" key={`Tittel_${periodeFom}`} />
          </Label>
        </Table.HeaderCell>
      );
    })}
  </Table.Row>
);

const Rows = ({
  tabellData,
  readOnly,
  finnesAlleredeLøstPeriode,
  fieldIndex,
  formName,
  skalValideres,
  control,
}: {
  tabellData: TidsbegrenseArbeidsforholdTabellData;
  readOnly: boolean;
  finnesAlleredeLøstPeriode: boolean;
  fieldIndex: number;
  formName: FormNameType;
  skalValideres: boolean;
  control: Control<BeregningFormValues, any, BeregningFormValues>;
}): ReactElement[] => {
  return Object.entries(tabellData).map(([key, val]) => (
    <Table.Row key={key} shadeOnHover={false}>
      {val.map(element => {
        if (!element.isEditable) {
          return (
            <Table.DataCell textSize="small" key={element.tabellInnhold}>
              {element.tabellInnhold}
            </Table.DataCell>
          );
        }
        return (
          <Table.DataCell key={`Col-${element.inputfieldKey}`} align="right">
            <HStack>
              <Spacer />
              <RhfTextField
                name={`${formName}.${fieldIndex}.${element.inputfieldKey}`}
                control={control}
                validate={skalValideres ? [required, maxValueFormatted(178956970)] : undefined}
                readOnly={readOnly}
                isEdited={readOnly && finnesAlleredeLøstPeriode}
                hideLabel
                parse={parseCurrencyInput}
                htmlSize={12}
                style={{ textAlign: 'right' }}
              />
            </HStack>
          </Table.DataCell>
        );
      })}
    </Table.Row>
  ));
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
  formName: FormNameType,
): BruttoPrPeriode[] => {
  if (allePerioder.length < 1) {
    return [];
  }
  const relevantePerioder = finnPerioderMedAvsluttetArbeidsforhold(allePerioder);
  const bruttoPrPeriodeList: BruttoPrPeriode[] = [];

  relevantePerioder.forEach(relevantPeriode => {
    const arbeidstakerAndeler = findArbeidstakerAndeler(relevantPeriode);
    const bruttoPrAndelForPeriode = arbeidstakerAndeler.map(andel => {
      const inputFieldKey = createInputFieldKey(andel, relevantPeriode);
      const fastsattInntekt = formMethods.watch(`${formName}.${fieldIndex}.${inputFieldKey}`);
      return fastsattInntekt === undefined || fastsattInntekt === '' ? 0 : removeSpacesFromNumber(fastsattInntekt);
    });
    const samletBruttoForPeriode = bruttoPrAndelForPeriode.reduce((a, b) => a + b, 0);

    bruttoPrPeriodeList.push({
      brutto: samletBruttoForPeriode,
      periodeFom: relevantPeriode.beregningsgrunnlagPeriodeFom,
      periodeTom: relevantPeriode.beregningsgrunnlagPeriodeTom,
    });
  });
  return bruttoPrPeriodeList;
};

interface Props {
  readOnly: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formName: FormNameType;
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  kodeverkSamling: KodeverkForPanel;
  fieldIndex: number;
  skalValideres: boolean;
}

export const AksjonspunktBehandlerTidsbegrenset = ({
  readOnly,
  allePerioder,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
  formName,
  skalValideres,
}: Props) => {
  const tabellData = createTableData(allePerioder, kodeverkSamling, arbeidsgiverOpplysningerPerId);
  const finnesAlleredeLøstPeriode = allePerioder.some(periode =>
    periode.beregningsgrunnlagPrStatusOgAndel?.some(
      andel => andel.aktivitetStatus === 'AT' && (!!andel.overstyrtPrAar || andel.overstyrtPrAar === 0),
    ),
  );
  const formMethods = useFormContext<BeregningFormValues>();
  const bruttoPrPeriodeList = lagBruttoPrPeriodeListe(allePerioder, formMethods, fieldIndex, formName);
  return (
    <Table>
      <Table.Header>
        <PerioderRow relevantePerioder={bruttoPrPeriodeList} />
      </Table.Header>
      <Table.Body>
        <Rows
          tabellData={tabellData}
          readOnly={readOnly}
          finnesAlleredeLøstPeriode={finnesAlleredeLøstPeriode}
          fieldIndex={fieldIndex}
          formName={formName}
          skalValideres={skalValideres}
          control={formMethods.control}
        />
      </Table.Body>
      <tfoot>
        <SummaryTableRow relevantePerioder={bruttoPrPeriodeList} />
      </tfoot>
    </Table>
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
      ? periode.beregningsgrunnlagPrStatusOgAndel.filter(andel => andel.aktivitetStatus === 'AT')
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
): Pick<FastsettAvvikATFLTidsbegrensetResultatAP, 'fastsatteTidsbegrensedePerioder'> => {
  const fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeResultat[] = [];
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
    fastsatteTidsbegrensedePerioder.push({
      periodeFom: relevantPeriode.beregningsgrunnlagPeriodeFom,
      periodeTom: relevantPeriode.beregningsgrunnlagPeriodeTom,
      fastsatteTidsbegrensedeAndeler,
    });
  });
  return { fastsatteTidsbegrensedePerioder };
};
