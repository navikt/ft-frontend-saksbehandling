import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, HStack } from '@navikt/ds-react';

import { RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';

export const ForeldetFormPanel = () => {
  // TODO (TOR) Manglar type
  const { control } = useFormContext();
  return (
    <HStack gap="4">
      <RhfTextarea
        name="foreldetBegrunnelse"
        control={control}
        label={<FormattedMessage id="ForeldetPanel.Vurdering" />}
        readOnly
      />
      <RhfRadioGroup
        name="periodenErForeldet"
        control={control}
        label={
          <Detail>
            <FormattedMessage id="ForeldetPanel.VurderOmPeriodenErForeldet" />
          </Detail>
        }
        radios={[
          {
            label: <FormattedMessage id="ForeldetPanel.PeriodenErForeldet" />,
            value: 'true',
          },
        ]}
        isReadOnly
      />
    </HStack>
  );
};
