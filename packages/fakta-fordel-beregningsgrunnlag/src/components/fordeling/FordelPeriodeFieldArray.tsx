import { type ReactElement, useEffect } from 'react';
import { useFieldArray, type UseFieldArrayUpdate, useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { PlusCircleIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, Checkbox, ErrorMessage, HStack, Table, VStack } from '@navikt/ds-react';

import { RhfSelect, RhfTextField, useCustomValidation } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus, BeregningsgrunnlagAndelType, Inntektskategori } from '@navikt/ft-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, formaterArbeidsgiver, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import type {
  BGFordelArbeidsforhold,
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagFormValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';
import type { KodeverkForPanel, KodeverkMedNavn } from '../../types/kodeverkForPanel';
import { finnUnikeArbeidsforhold } from './finnUnikeArbeidsforhold';
import {
  validateSumFastsattBelop,
  validateSumFastsattForUgraderteAktiviteter,
  validateSumRefusjon,
  validateTotalRefusjonPrArbeidsforhold,
  validateUlikeAndeler,
  validerBGGraderteAndeler,
} from './validateFordelteAndelerUtils';

import styles from './fordelPeriodeFieldArray.module.css';

const defaultBGFordeling = (periodeUtenAarsak: boolean): any => ({
  nyAndel: true,
  kilde: 'SAKSBEHANDLER_FORDELING',
  fastsattBelop: formatCurrencyNoKr(0),
  lagtTilAvSaksbehandler: true,
  refusjonskravFraInntektsmelding: 0,
  belopFraInntektsmelding: null,
  skalRedigereInntekt: !periodeUtenAarsak,
});

const lagVisningsnavn = (
  arbeidsforhold: BGFordelArbeidsforhold,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  if (!arbeidsforhold.arbeidsgiverIdent || !arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent]) {
    return arbeidsforhold.arbeidsforholdType
      ? (kodeverkSamling['OpptjeningAktivitetType'].find(oat => oat.kode === arbeidsforhold.arbeidsforholdType)?.navn ??
          '')
      : '';
  }
  return formaterArbeidsgiver(
    arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent],
    arbeidsforhold.eksternArbeidsforholdId,
  );
};

const arbeidsgiverSelectValues = (
  arbeidsforholdList: BGFordelArbeidsforhold[],
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] =>
  arbeidsforholdList.map(arbeidsforhold => (
    <option value={arbeidsforhold.andelsnr.toString()} key={arbeidsforhold.andelsnr}>
      {lagVisningsnavn(arbeidsforhold, kodeverkSamling, arbeidsgiverOpplysningerPerId)}
    </option>
  ));

const arbeidsgiverSelectValuesForKunYtelse = (
  arbeidsforholdList: BGFordelArbeidsforhold[],
  intl: IntlShape,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => {
  const nedtrekksvalgListe = arbeidsforholdList.map(arbeidsforhold => (
    <option value={arbeidsforhold.andelsnr.toString()} key={arbeidsforhold.andelsnr}>
      {lagVisningsnavn(arbeidsforhold, kodeverkSamling, arbeidsgiverOpplysningerPerId)}
    </option>
  ));
  nedtrekksvalgListe.push(
    <option value={BeregningsgrunnlagAndelType.BRUKERS_ANDEL} key={BeregningsgrunnlagAndelType.BRUKERS_ANDEL}>
      {intl.formatMessage({ id: 'BeregningInfoPanel.FordelingBG.Ytelse' })}
    </option>,
  );
  return nedtrekksvalgListe;
};

const inntektskategoriSelectValues = (kategorier: KodeverkMedNavn<'Inntektskategori'>[]): ReactElement[] =>
  kategorier.map(ik => (
    <option value={ik.kode} key={ik.kode}>
      {ik.navn}
    </option>
  ));

const summerFordeling = (fields: FordelBeregningsgrunnlagAndelValues[]) => {
  const sum = fields.reduce((acc, { fastsattBelop, readOnlyBelop, skalRedigereInntekt }) => {
    const parsedValue = removeSpacesFromNumber(fastsattBelop);
    if (skalRedigereInntekt) {
      return acc + (parsedValue ?? 0);
    } else {
      return acc + (readOnlyBelop ? parsedValue : 0);
    }
  }, 0);
  return <BeløpLabel beløp={sum} />;
};

const summerBeregningsgrunnlagPrÅr = (fields: FordelBeregningsgrunnlagAndelValues[]) => {
  const sum = fields.reduce((acc, { beregningsgrunnlagPrAar }) => {
    const parsedValue = beregningsgrunnlagPrAar ? removeSpacesFromNumber(beregningsgrunnlagPrAar) : 0;
    return acc + parsedValue;
  }, 0);
  return <BeløpLabel beløp={sum} />;
};

const isSelvstendigOrFrilanser = (fieldVal: FordelBeregningsgrunnlagAndelValues): boolean => {
  if (!fieldVal.inntektskategori) {
    return false;
  }
  return (
    isSelvstendigNæringsdrivende(fieldVal.inntektskategori) || Inntektskategori.FRILANSER === fieldVal.inntektskategori
  );
};

const finnArbeidsforholdForAndel = (
  arbeidsforholdListe: BGFordelArbeidsforhold[],
  val: string,
): BGFordelArbeidsforhold | undefined => {
  const andelsnr = Number(val);
  return arbeidsforholdListe.find(arbeidsforhold => arbeidsforhold.andelsnr === andelsnr);
};

const finnAktivitetStatus = (fields: FordelBeregningsgrunnlagAndelValues[], val: string): string | undefined => {
  const andelsnr = Number(val);
  return fields.find(field => field.andelsnr === andelsnr)?.aktivitetStatus;
};

const setArbeidsforholdInfo = (
  fields: FordelBeregningsgrunnlagAndelValues[],
  index: number,
  arbeidsforholdList: BGFordelArbeidsforhold[],
  val: string,
  updateFieldMethod: UseFieldArrayUpdate<
    FordelBeregningsgrunnlagFormValues,
    `FORDEL_BEREGNING_FORM.${number}.${string}`
  >,
): void => {
  const field = fields[index];
  const arbeidsforhold = finnArbeidsforholdForAndel(arbeidsforholdList, val);
  if (arbeidsforhold) {
    field.arbeidsforholdId = arbeidsforhold.arbeidsforholdId;
    field.arbeidsgiverId = arbeidsforhold.arbeidsgiverIdent;
    field.arbeidsperiodeFom = arbeidsforhold.startdato;
    field.arbeidsperiodeTom = arbeidsforhold.opphoersdato;
    field.andelsnrRef = arbeidsforhold.andelsnr;
    field.aktivitetStatus = finnAktivitetStatus(fields, val);
    field.nyttArbeidsforhold = arbeidsforhold.nyttArbeidsforhold;
    field.arbeidsforholdType = arbeidsforhold.arbeidsforholdType;
    field.beregningsperiodeTom = arbeidsforhold.beregningsperiodeTom;
    field.beregningsperiodeFom = arbeidsforhold.beregningsperiodeFom;
    updateFieldMethod(index, field);
  }
};

const skalViseSletteknapp = (
  index: number,
  fields: FordelBeregningsgrunnlagAndelValues[],
  readOnly: boolean,
): boolean => (fields[index].nyAndel || fields[index].lagtTilAvSaksbehandler) && !readOnly;

interface Props {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  skalIkkeRedigereInntekt: boolean;
  kodeverkSamling: KodeverkForPanel;
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldName: string;
  skalKunneEndreRefusjon: boolean;
  sumIPeriode: number;
  vilkårperiodeFieldIndex: number;
  setFieldArrayToRepeat: (fieldArrayName: string) => void;
  fieldArrayToRepeat: string;
}

const getGjelderGradering = (beregningsgrunnlag: Beregningsgrunnlag): boolean => {
  const arbeidTilFordeling =
    beregningsgrunnlag.faktaOmFordeling?.fordelBeregningsgrunnlag?.arbeidsforholdTilFordeling ?? [];
  return arbeidTilFordeling.some(a => a.perioderMedGraderingEllerRefusjon?.some(p => p.erGradering));
};

export const FordelPeriodeFieldArray = ({
  fieldName,
  readOnly,
  skalIkkeRedigereInntekt,
  isAksjonspunktClosed,
  arbeidsgiverOpplysningerPerId,
  kodeverkSamling,
  beregningsgrunnlag,
  skalKunneEndreRefusjon,
  sumIPeriode,
  vilkårperiodeFieldIndex,
  setFieldArrayToRepeat,
  fieldArrayToRepeat,
}: Props) => {
  const { control, getValues } = useFormContext<FordelBeregningsgrunnlagFormValues>();
  const fieldArrayName = `FORDEL_BEREGNING_FORM.${vilkårperiodeFieldIndex}.${fieldName}` as const;

  const { fields, append, remove, update } = useFieldArray({
    control,
    name: fieldArrayName,
  });

  const watchedArray = useWatch({
    control,
    name: fieldArrayName,
  });

  useEffect(() => {
    if (fieldArrayToRepeat && fieldArrayToRepeat !== fieldArrayName && !readOnly && !skalIkkeRedigereInntekt) {
      const formValues = getValues(fieldArrayToRepeat as `FORDEL_BEREGNING_FORM.${number}.${string}`);
      formValues.forEach(val => {
        const matchendeFieldIndex = fields.findIndex(
          field =>
            field.andel === val.andel &&
            (field.inntektskategori === val.inntektskategori ||
              (!field.inntektskategori && !val.lagtTilAvSaksbehandler && !field.lagtTilAvSaksbehandler)),
        );
        if (matchendeFieldIndex > -1) {
          const nyttObj = {
            ...fields[matchendeFieldIndex],
            fastsattBelop: val.fastsattBelop,
            refusjonskrav: skalKunneEndreRefusjon ? val.refusjonskrav : fields[matchendeFieldIndex]?.refusjonskrav,
            inntektskategori: val.inntektskategori,
          };
          update(matchendeFieldIndex, nyttObj);
        }
      });
    }
  }, [fieldArrayToRepeat]);

  const harKunYtelse =
    !!beregningsgrunnlag.aktivitetStatus &&
    beregningsgrunnlag.aktivitetStatus.some(status => status === AktivitetStatus.KUN_YTELSE);
  const arbeidsforholdList = finnUnikeArbeidsforhold(beregningsgrunnlag);

  const gjelderGradering = getGjelderGradering(beregningsgrunnlag);
  const inntektskategoriKoder = kodeverkSamling['Inntektskategori'];
  const intl = useIntl();
  const selectVals = harKunYtelse
    ? arbeidsgiverSelectValuesForKunYtelse(arbeidsforholdList, intl, kodeverkSamling, arbeidsgiverOpplysningerPerId)
    : arbeidsgiverSelectValues(arbeidsforholdList, kodeverkSamling, arbeidsgiverOpplysningerPerId);

  const valideringsresultat: string[] = [];

  const valider = (feilmelding?: string): void => {
    if (feilmelding) {
      valideringsresultat.push(feilmelding);
    }
  };
  // Fields settes også opp for perioder om ikke skal endres, disse trenger vi ikke validere.
  // Felter som er i readonly skal ikke valideres
  const fieldsMåValideres =
    !readOnly && fields.some((field: any) => !!field.skalRedigereInntekt || !!field.skalKunneEndreRefusjon);
  if (fieldsMåValideres) {
    valider(validateUlikeAndeler(vilkårperiodeFieldIndex, getValues, fieldName, fields, intl));
    valider(validateSumFastsattBelop(vilkårperiodeFieldIndex, getValues, fieldName, fields, sumIPeriode, intl));
    if (gjelderGradering) {
      valider(validerBGGraderteAndeler(vilkårperiodeFieldIndex, getValues, fieldName, fields, intl));
      valider(
        validateSumFastsattForUgraderteAktiviteter(
          vilkårperiodeFieldIndex,
          getValues,
          fieldName,
          fields,
          intl,
          beregningsgrunnlag.grunnbeløp,
          kodeverkSamling,
        ),
      );
    }
    if (skalKunneEndreRefusjon) {
      valider(
        validateSumRefusjon(vilkårperiodeFieldIndex, fields, fieldName, getValues, beregningsgrunnlag.grunnbeløp, intl),
      );
      valider(
        validateTotalRefusjonPrArbeidsforhold(
          vilkårperiodeFieldIndex,
          fields,
          fieldName,
          getValues,
          arbeidsgiverOpplysningerPerId,
          intl,
        ),
      );
    }
  }
  const skjemaNavn = `${fieldArrayName}.skjemagruppe`;
  const feilmeldinger = valideringsresultat.filter(fm => !!fm);
  const feilmeldingSomSkalVises = feilmeldinger.length > 0 ? feilmeldinger[0] : undefined;
  const errorMessage = useCustomValidation(skjemaNavn, feilmeldingSomSkalVises);

  const handleBenyttCheckbox = () => {
    if (fieldArrayName === fieldArrayToRepeat) {
      setFieldArrayToRepeat('');
    } else {
      setFieldArrayToRepeat(fieldArrayName);
    }
  };
  return (
    <VStack gap="space-16">
      <Table className={styles.tableMedInput}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope="col" textSize="small">
              <FormattedMessage id="BeregningInfoPanel.FordelBG.Andel" />
            </Table.HeaderCell>
            {gjelderGradering && (
              <Table.HeaderCell scope="col" align="right" textSize="small">
                <FormattedMessage id="BeregningInfoPanel.FordelBG.AndelIArbeid" />
              </Table.HeaderCell>
            )}
            <Table.HeaderCell scope="col" align="right" textSize="small">
              <FormattedMessage id="BeregningInfoPanel.FordelBG.Refusjonskrav" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" align="right" textSize="small">
              <FormattedMessage id="BeregningInfoPanel.FordelBG.Beregningsgrunnlag" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" align="right" textSize="small">
              <FormattedMessage id="BeregningInfoPanel.FordelBG.Fordeling" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" textSize="small">
              <FormattedMessage id="BeregningInfoPanel.FordelBG.Inntektskategori" />
            </Table.HeaderCell>
            <Table.HeaderCell scope="col" />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {fields.map((field, index) => {
            const skalIkkeEndres = readOnly || skalIkkeRedigereInntekt;
            const feltNavnForRad = `${fieldArrayName}.${index}` as const;
            return (
              <Table.Row key={field.id}>
                <Table.DataCell textSize="small">
                  {fields[index].nyAndel ? (
                    <RhfSelect
                      control={control}
                      name={`${feltNavnForRad}.andel`}
                      size="small"
                      label=""
                      hideLabel
                      selectValues={selectVals}
                      readOnly={skalIkkeEndres}
                      validate={[required]}
                      onChange={event =>
                        setArbeidsforholdInfo(fields, index, arbeidsforholdList, event.target.value, update)
                      }
                    />
                  ) : (
                    <RhfTextField control={control} name={`${feltNavnForRad}.andel`} size="small" hideLabel readOnly />
                  )}
                  {!isSelvstendigOrFrilanser(fields[index]) && (
                    <div className={styles.wordwrap}>
                      <RhfTextField
                        control={control}
                        name={`${feltNavnForRad}.arbeidsperiodeFom - ${feltNavnForRad}.arbeidsperiodeTom`}
                        size="small"
                        hideLabel
                        readOnly
                      />
                    </div>
                  )}
                </Table.DataCell>
                {gjelderGradering && (
                  <Table.DataCell align="right" textSize="small">
                    <RhfTextField
                      control={control}
                      name={`${feltNavnForRad}.andelIArbeid`}
                      size="small"
                      hideLabel
                      readOnly
                      className={styles.litenBredde}
                      normalizeOnBlur={value => (Number.isNaN(value) ? value : parseFloat(value.toString()).toFixed(2))}
                    />
                  </Table.DataCell>
                )}
                <Table.DataCell align="right" textSize="small">
                  <RhfTextField
                    control={control}
                    name={`${feltNavnForRad}.refusjonskrav`}
                    size="small"
                    hideLabel
                    readOnly={skalIkkeEndres || !fields[index].skalKunneEndreRefusjon}
                    parse={parseCurrencyInput}
                    className={styles.litenBredde}
                    validate={fields[index].skalKunneEndreRefusjon ? [required, maxValueFormatted(178956970)] : []}
                  />
                </Table.DataCell>
                <Table.DataCell align="right" textSize="small">
                  <RhfTextField
                    control={control}
                    name={`${feltNavnForRad}.beregningsgrunnlagPrAar`}
                    size="small"
                    hideLabel
                    className={styles.litenBredde}
                    parse={parseCurrencyInput}
                    readOnly
                  />
                </Table.DataCell>

                <Table.DataCell>
                  {skalIkkeRedigereInntekt ? (
                    <RhfTextField
                      control={control}
                      name={`${feltNavnForRad}.readOnlyBelop`}
                      hideLabel
                      parse={parseCurrencyInput}
                      readOnly
                      isEdited={false}
                    />
                  ) : (
                    <RhfTextField
                      control={control}
                      name={`${feltNavnForRad}.fastsattBelop`}
                      hideLabel
                      parse={parseCurrencyInput}
                      readOnly={readOnly}
                      validate={[required, maxValueFormatted(178956970)]}
                      isEdited={isAksjonspunktClosed && !skalIkkeRedigereInntekt}
                    />
                  )}
                </Table.DataCell>
                <Table.DataCell textSize="small">
                  <RhfSelect
                    control={control}
                    name={`${feltNavnForRad}.inntektskategori`}
                    size="small"
                    label=""
                    hideLabel
                    className={styles.storBredde}
                    validate={skalIkkeEndres ? [] : [required]}
                    selectValues={inntektskategoriSelectValues(inntektskategoriKoder)}
                    readOnly={skalIkkeEndres}
                  />
                </Table.DataCell>
                <Table.DataCell align="right" textSize="small">
                  {skalViseSletteknapp(index, fields, skalIkkeEndres) && (
                    <Button
                      size="small"
                      icon={<XMarkIcon aria-hidden color="var(--ax-danger-600)" />}
                      onClick={() => remove(index)}
                      type="button"
                      variant="tertiary-neutral"
                    />
                  )}
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
        <tfoot>
          <Table.Row key="bruttoBGSummaryRow">
            <Table.HeaderCell textSize="small">
              <FormattedMessage id="BeregningInfoPanel.FordelBG.Sum" />
            </Table.HeaderCell>
            {gjelderGradering && <Table.DataCell />}
            <Table.DataCell />
            <Table.HeaderCell align="right" textSize="small">
              {summerBeregningsgrunnlagPrÅr(watchedArray)}
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              {summerFordeling(watchedArray)}
            </Table.HeaderCell>
            <Table.DataCell />
            <Table.DataCell />
          </Table.Row>
        </tfoot>
      </Table>
      {!readOnly && !skalIkkeRedigereInntekt && (
        <HStack justify="space-between">
          <Button
            size="small"
            icon={<PlusCircleIcon aria-hidden />}
            onClick={() => append(defaultBGFordeling(skalIkkeRedigereInntekt))}
            type="button"
            variant="tertiary"
          >
            <FormattedMessage id="BeregningInfoPanel.FordelingBG.LeggTilAndel" />
          </Button>
          <Checkbox size="small" checked={fieldArrayName === fieldArrayToRepeat} onChange={handleBenyttCheckbox}>
            Benytt for alle perioder
          </Checkbox>
        </HStack>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </VStack>
  );
};

const isSelvstendigNæringsdrivende = (inntektskategori: string): boolean =>
  [
    Inntektskategori.SELVSTENDIG_NÆRINGSDRIVENDE,
    Inntektskategori.JORDBRUKER,
    Inntektskategori.DAGMAMMA,
    Inntektskategori.FISKER,
  ].some(s => s === inntektskategori);
