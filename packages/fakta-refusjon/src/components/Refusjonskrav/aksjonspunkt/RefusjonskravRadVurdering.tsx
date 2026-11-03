import { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, HStack, Radio, ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { dateFormat } from '@navikt/ft-utils';

import type { UtfallÅrsak } from '../../../types/dataTypes';
import type { RefusjonskravFormPeriode, RefusjonskravVurdering } from '../formValues';

type Vurderingsskjema = {
  vurderinger: Record<string, RefusjonskravVurdering>;
};

interface Props {
  andelIndex: number;
  periodeIndex: number;
  krav: RefusjonskravFormPeriode;
  readOnly: boolean;
  onSave: (andelIndex: number, periodeIndex: number, values: RefusjonskravVurdering) => void;
  onDirtyChange: (andelIndex: number, periodeIndex: number, dirty: boolean) => void;
}

export const RefusjonskravRadVurdering = ({
  andelIndex,
  periodeIndex,
  krav,
  readOnly,
  onSave,
  onDirtyChange,
}: Props) => {
  const index = `${andelIndex}-${periodeIndex}`;
  const fieldName = `vurderinger.${index}` as const;
  const formMethods = useForm<Vurderingsskjema>({
    defaultValues: buildInitialValues(index, krav),
  });
  const utfall = useWatch({
    control: formMethods.control,
    name: `${fieldName}.utfall`,
  });
  /* eslint-disable react-you-might-not-need-an-effect/no-pass-data-to-parent -- Radskjemaet lagres separat; hovedskjemaet må vite om ulagrede valg. */
  useEffect(() => {
    onDirtyChange(andelIndex, periodeIndex, formMethods.formState.isDirty);
  }, [andelIndex, periodeIndex, formMethods.formState.isDirty, onDirtyChange]);
  /* eslint-enable react-you-might-not-need-an-effect/no-pass-data-to-parent */

  return (
    <FormProvider {...formMethods}>
      <VStack gap="space-16">
        <RhfRadioGroup
          control={formMethods.control}
          name={`${fieldName}.utfall`}
          legend={
            <FormattedMessage
              id="RefusjonskravForm.Utfall"
              values={{ dato: dateFormat(krav.fom, { day: 'numeric', month: 'long' }) }}
            />
          }
          description={
            <ReadMore size="small" header={<FormattedMessage id="RefusjonskravForm.HvordanGårJegFrem" />}>
              <FormattedMessage id="RefusjonskravForm.HvordanGårJegFrem.Beskrivelse" />
            </ReadMore>
          }
          validate={[required]}
          readOnly={readOnly}
        >
          <Radio value="INNVILGET">
            <FormattedMessage id="RefusjonskravForm.Ja" />
          </Radio>
          <Radio value="AVSLÅTT">
            <FormattedMessage
              id="RefusjonskravForm.Nei"
              values={{
                dato: dateFormat(krav.tidligsteMuligeDatoMedRefusjonEtterFrist, { month: 'long' }),
              }}
            />
          </Radio>
        </RhfRadioGroup>

        {utfall === 'AVSLÅTT' && (
          <RhfRadioGroup
            control={formMethods.control}
            name={`${fieldName}.utfallÅrsak`}
            legend={<FormattedMessage id="RefusjonskravForm.Årsak" />}
            validate={[required]}
            readOnly={readOnly}
          >
            <Radio value={'KONKURS' satisfies UtfallÅrsak}>
              <FormattedMessage id="RefusjonskravForm.Årsak.KONKURS" />
            </Radio>
            <Radio value={'UTMELDT' satisfies UtfallÅrsak}>
              <FormattedMessage id="RefusjonskravForm.Årsak.UTMELDT" />
            </Radio>
            <Radio value={'AVTALT_MED_ARBEIDSGIVER' satisfies UtfallÅrsak}>
              <FormattedMessage id="RefusjonskravForm.Årsak.AVTALT_MED_ARBEIDSGIVER" />
            </Radio>
          </RhfRadioGroup>
        )}

        {!readOnly && (
          <HStack gap="space-8">
            <Button
              variant="secondary"
              type="button"
              size="small"
              disabled={!formMethods.formState.isDirty}
              onClick={() =>
                void formMethods.handleSubmit(values => {
                  onSave(andelIndex, periodeIndex, values.vurderinger[index]);
                  formMethods.reset(values);
                })()
              }
            >
              <FormattedMessage id="RefusjonskravForm.Lagre" />
            </Button>
            <Button
              variant="tertiary"
              type="button"
              size="small"
              disabled={!formMethods.formState.isDirty}
              onClick={() => formMethods.reset()}
            >
              <FormattedMessage id="RefusjonskravForm.Angre" />
            </Button>
          </HStack>
        )}
      </VStack>
    </FormProvider>
  );
};

const buildInitialValues = (index: string, krav: RefusjonskravFormPeriode): Vurderingsskjema => ({
  vurderinger: {
    [index]: {
      utfall: krav.utfall === 'REDUSERT' ? undefined : krav.utfall,
      utfallÅrsak: krav.utfallÅrsak,
    },
  },
});
