import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Box, ErrorMessage, Heading, HStack, VStack } from '@navikt/ds-react';

import { RhfForm, RhfTextarea, SubmitButton } from '@navikt/ft-form-hooks';
import { hasValidDate, hasValidDecimal, maxLength, minLength, minValue, required } from '@navikt/ft-form-validators';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { formaterArbeidsgiver, isEqual, notEmpty, sortPeriodsByFom, TIDENES_ENDE } from '@navikt/ft-utils';

import { useOverstyring } from '../../hooks/useOverstyring';
import type { AksjonspunktRefusjon, OverstyrRefusjonskravSubmitType } from '../../types/aksjonspunkt';
import type { RefusjonsandelDto, Saksdokument } from '../../types/dataTypes';
import { Utbetaling } from '../Utbetaling';
import type { OverstyrRefusjonFormValues, RefusjonsAndelFormValues, RefusjonsAndelTilVisning } from './formValues';
import { erGyldigOppdeling } from './overstyring/erGyldigOppdeling';
import { RefusjonskravOverstyring } from './overstyring/RefusjonskravOverstyring';
import { utledRefusjonsperioder } from './overstyring/utledRefusjonsperioder';
import { refusjonsandelNøkkel } from './refusjonsandelNøkkel';
import { RefusjonskravTabell } from './RefusjonskravTabell';
import { useOpenRows } from './useOpenRows';

interface Props {
  aksjonspunkt: AksjonspunktRefusjon[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  refusjonsandeler: RefusjonsandelDto[];
  dokumenter: Saksdokument[];
  åpneDokument: (journalpostId: string, dokumentId: string) => void;
  readOnly: boolean;
  erOverstyrer: boolean;
  submitCallback: (aksjonspunktData: OverstyrRefusjonskravSubmitType) => Promise<void>;
  formData?: OverstyrRefusjonFormValues;
  setFormData: (data: OverstyrRefusjonFormValues) => void;
}

export const RefusjonskravForm = (props: Props) => (
  <RefusjonskravSkjema key={JSON.stringify(props.refusjonsandeler)} {...props} />
);

const RefusjonskravSkjema = ({
  aksjonspunkt,
  arbeidsgiverOpplysningerPerId,
  refusjonsandeler,
  dokumenter,
  åpneDokument,
  readOnly,
  erOverstyrer,
  submitCallback,
  formData,
  setFormData,
}: Props) => {
  const overstyringsAksjonspunkt = aksjonspunkt.find(ap => ap.kode === 'OVERSTYR_REFUSJONSKRAV');
  const formMethods = useForm<OverstyrRefusjonFormValues>({
    mode: 'onChange',
    defaultValues: buildInitialValues(
      aksjonspunkt,
      refusjonsandeler,
      arbeidsgiverOpplysningerPerId,
      erOverstyrer && !readOnly && !!overstyringsAksjonspunkt,
      formData,
    ),
  });

  const [andeler, erOverstyring, begrunnelse] = useWatch({
    control: formMethods.control,
    name: ['refusjonsandeler', 'erOverstyring', 'begrunnelse'],
  });

  const harGyldigePerioder = erGyldigeAndeler(andeler, refusjonsandeler);
  const harOverlappendeKrav = harOverlapp(utledRefusjonskrav(andeler, refusjonsandeler));
  const andelerTilVisning: RefusjonsAndelTilVisning[] = andeler.map(andel => ({
    ...andel,
    refusjonsperioder: utledRefusjonsperioder(
      andel.refusjonsperioder,
      finnOpprinneligAndel(andel, refusjonsandeler),
    ).filter(
      periode =>
        Number.isFinite(periode.refusjonPrMnd) &&
        !required(periode.fom) &&
        !required(periode.tom) &&
        !hasValidDate(periode.fom) &&
        (periode.tom === TIDENES_ENDE || !hasValidDate(periode.tom)) &&
        periode.fom <= periode.tom,
    ),
  }));

  const { openRowsIndices, onOpenChange } = useOpenRows();

  const { erOverstyringRedigerbar, erOverstyringReadOnly, visOverstyring, overstyringKnapp } = useOverstyring({
    readOnly,
    erOverstyrer,
    harVærtOverstyrt: !!overstyringsAksjonspunkt,
    erOverstyringRedigerbar: erOverstyring,
    onAktiverOverstyring: () => {
      formMethods.setValue('erOverstyring', true, { shouldDirty: true });
      andeler.forEach((_, index) => onOpenChange(index, true));
    },
    onAvbrytOverstyring: () => {
      formMethods.reset(buildInitialValues(aksjonspunkt, refusjonsandeler, arbeidsgiverOpplysningerPerId));
    },
    isSubmitting: formMethods.formState.isSubmitting,
  });

  return (
    <RhfForm
      formMethods={formMethods}
      setDataOnUnmount={setFormData}
      onSubmit={values =>
        erOverstyringRedigerbar &&
        erGyldigeAndeler(values.refusjonsandeler, refusjonsandeler) &&
        submitCallback(transformValues(values, refusjonsandeler))
      }
    >
      <VStack gap="space-20">
        <HStack gap="space-16" align="center">
          <Heading size="small" level="2">
            <FormattedMessage id="FaktaRefusjonIndex.Tittel" />
          </Heading>
          {overstyringKnapp}
        </HStack>

        <Utbetaling
          refusjonsandeler={andelerTilVisning}
          onSelectAndel={andelIndex => {
            if (visOverstyring) {
              onOpenChange(andelIndex, true);
            }
          }}
        />

        {erOverstyringRedigerbar && harOverlappendeKrav && (
          <ErrorMessage role="alert" size="small" showIcon>
            <FormattedMessage id="RefusjonskravForm.OverlappendeKrav" />
          </ErrorMessage>
        )}

        <RefusjonskravTabell
          rader={andelerTilVisning}
          dokumenter={dokumenter}
          åpneDokument={åpneDokument}
          åpneRader={openRowsIndices}
          onOpenChange={onOpenChange}
          renderRowContent={(andel, andelIndex) =>
            visOverstyring ? (
              <RefusjonskravOverstyring
                key={refusjonsandelNøkkel(andel)}
                andelIndex={andelIndex}
                opprinneligAndel={finnOpprinneligAndel(andel, refusjonsandeler)}
                readOnly={erOverstyringReadOnly}
              />
            ) : null
          }
        />

        {visOverstyring && (erOverstyringRedigerbar || begrunnelse) && (
          <Box maxWidth="800px">
            <RhfTextarea
              control={formMethods.control}
              name="begrunnelse"
              label={<FormattedMessage id="RefusjonskravForm.Begrunnelse" />}
              readOnly={erOverstyringReadOnly}
              validate={[required, minLength(3), maxLength(3000)]}
              maxLength={3000}
            />
            <AssessedBy ident={overstyringsAksjonspunkt?.vurdertAv} date={overstyringsAksjonspunkt?.vurdertTidspunkt} />
          </Box>
        )}

        {erOverstyringRedigerbar && (
          <HStack gap="space-8">
            <SubmitButton
              isReadOnly={false}
              isSubmitting={formMethods.formState.isSubmitting}
              isSubmittable={formMethods.formState.isValid && harGyldigePerioder}
              hasErrors={Object.keys(formMethods.formState.errors).length > 0}
            />
          </HStack>
        )}
      </VStack>
    </RhfForm>
  );
};

const buildInitialValues = (
  aksjonspunkt: AksjonspunktRefusjon[],
  refusjonsandeler: RefusjonsandelDto[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  erOverstyring = false,
  formData?: OverstyrRefusjonFormValues,
): OverstyrRefusjonFormValues => ({
  erOverstyring: formData?.erOverstyring ?? erOverstyring,
  begrunnelse:
    formData?.begrunnelse ??
    aksjonspunkt.find(ap => ap.kode === 'OVERSTYR_REFUSJONSKRAV' && ap.status === 'UTFO')?.begrunnelse ??
    '',
  opprinneligeRefusjonsandeler: refusjonsandeler,
  refusjonsandeler: refusjonsandeler.map(andel => {
    const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[andel.arbeidsgiverIdent];
    const opprinneligAndel = formData?.opprinneligeRefusjonsandeler?.find(
      original => refusjonsandelNøkkel(original) === refusjonsandelNøkkel(andel),
    );
    const lagretAndel =
      opprinneligAndel && isEqual(opprinneligAndel, andel)
        ? formData?.refusjonsandeler.find(lagret => refusjonsandelNøkkel(lagret) === refusjonsandelNøkkel(andel))
        : undefined;
    return {
      ...andel,
      arbeidsgiverNavn: arbeidsgiverOpplysninger?.navn
        ? formaterArbeidsgiver(arbeidsgiverOpplysninger)
        : andel.arbeidsgiverIdent,
      refusjonsperioder:
        lagretAndel?.refusjonsperioder ??
        andel.refusjonsperioder
          .toSorted(sortPeriodsByFom)
          .map(periode => ({ ...periode, tom: periode.tom || TIDENES_ENDE })),
    };
  }),
});

const finnOpprinneligAndel = (
  andel: Omit<RefusjonsandelDto, 'refusjonsperioder'>,
  opprinneligeAndeler: RefusjonsandelDto[],
) => notEmpty(opprinneligeAndeler.find(original => refusjonsandelNøkkel(original) === refusjonsandelNøkkel(andel)));

const erGyldigeAndeler = (andeler: RefusjonsAndelFormValues[], opprinneligeAndeler: RefusjonsandelDto[]) =>
  andeler.every(andel => {
    const original = finnOpprinneligAndel(andel, opprinneligeAndeler);
    return (
      erGyldigOppdeling(utledRefusjonsperioder(andel.refusjonsperioder, original), original.refusjonsperioder) &&
      andel.refusjonsperioder.every(periode => {
        const beløp = periode.refusjonPrMnd ?? '';
        return !required(beløp) && !hasValidDecimal(beløp) && !minValue(0)(beløp);
      })
    );
  }) && !harOverlapp(utledRefusjonskrav(andeler, opprinneligeAndeler));

const utledRefusjonskrav = (
  andeler: RefusjonsAndelFormValues[],
  opprinneligeAndeler: RefusjonsandelDto[],
): OverstyrRefusjonskravSubmitType['refusjonskrav'] => {
  const perioderPerArbeidsgiver = new Map<
    string,
    OverstyrRefusjonskravSubmitType['refusjonskrav'][number]['perioder']
  >();
  for (const andel of andeler) {
    const perioder = utledRefusjonsperioder(
      andel.refusjonsperioder,
      finnOpprinneligAndel(andel, opprinneligeAndeler),
    ).map(rad => ({
      fom: rad.fom,
      tom: rad.tom,
      refusjonsbeløpPrMnd: rad.refusjonPrMnd,
      utfallÅrsak: rad.overstyringsÅrsak,
    }));
    perioderPerArbeidsgiver.set(andel.arbeidsgiverIdent, [
      ...(perioderPerArbeidsgiver.get(andel.arbeidsgiverIdent) ?? []),
      ...perioder,
    ]);
  }
  return Array.from(perioderPerArbeidsgiver, ([arbeidsgiverIdent, perioder]) => ({
    arbeidsgiverIdent,
    perioder: perioder.toSorted(sortPeriodsByFom),
  }));
};

const harOverlapp = (krav: OverstyrRefusjonskravSubmitType['refusjonskrav']) =>
  krav.some(({ perioder }) => {
    const gyldigePerioder = perioder.filter(
      periode =>
        !required(periode.fom) &&
        !hasValidDate(periode.fom) &&
        !required(periode.tom) &&
        (periode.tom === TIDENES_ENDE || !hasValidDate(periode.tom)) &&
        periode.fom <= periode.tom,
    );
    return gyldigePerioder.some((periode, index) => index > 0 && periode.fom <= gyldigePerioder[index - 1].tom);
  });

const transformValues = (
  values: OverstyrRefusjonFormValues,
  opprinneligeAndeler: RefusjonsandelDto[],
): OverstyrRefusjonskravSubmitType => ({
  '@type': 'OVERSTYR_REFUSJONSKRAV',
  kode: 'OVERSTYR_REFUSJONSKRAV',
  begrunnelse: values.begrunnelse,
  refusjonskrav: utledRefusjonskrav(values.refusjonsandeler, opprinneligeAndeler),
});
