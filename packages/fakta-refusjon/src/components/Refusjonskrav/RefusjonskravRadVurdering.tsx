import { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, HStack, Radio, ReadMore, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { dateFormat } from '@navikt/ft-utils';

import type { RefusjonskravFormRad, RefusjonskravVurdering } from './formValues';

type Vurderingsskjema = {
  vurderinger: RefusjonskravVurdering[];
};

interface Props {
  index: number;
  krav: RefusjonskravFormRad;
  readOnly: boolean;
  onSave: (index: number, values: RefusjonskravVurdering) => void;
  onDirtyChange: (index: number, dirty: boolean) => void;
}

export const RefusjonskravRadVurdering = ({ index, krav, readOnly, onSave, onDirtyChange }: Props) => {
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
    onDirtyChange(index, formMethods.formState.isDirty);
  }, [index, formMethods.formState.isDirty, onDirtyChange]);
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
            <Radio value="ÅRSAK1">Årsak 1</Radio>
            <Radio value="ÅRSAK2">Årsak 2</Radio>
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
                  onSave(index, values.vurderinger[index]);
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

const buildInitialValues = (index: number, krav: RefusjonskravFormRad): Vurderingsskjema => ({
  vurderinger: Array.from({ length: index + 1 }, (_, currentIndex) =>
    currentIndex === index
      ? {
          utfall: krav.utfall === 'REDUSERT' ? undefined : krav.utfall,
          utfallÅrsak: krav.utfallÅrsak,
        }
      : {},
  ),
});
