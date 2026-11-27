import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';

type FormValues = {
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
};

export const ForeldetFormPanel = () => {
  const { control } = useFormContext<FormValues>();
  return (
    <VStack gap="space-16">
      <RhfTextarea
        name="foreldetBegrunnelse"
        control={control}
        label={<FormattedMessage id="ForeldetFormPanel.Vurdering" />}
        readOnly
      />
      <RhfRadioGroup
        name="periodenErForeldet"
        control={control}
        legend={<FormattedMessage id="ForeldetFormPanel.VurderOmPeriodenErForeldet" />}
      >
        <Radio value="true" size="small">
          <FormattedMessage id="ForeldetFormPanel.PeriodenErForeldet" />
        </Radio>
      </RhfRadioGroup>
    </VStack>
  );
};
