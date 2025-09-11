import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Detail, HStack, Radio } from '@navikt/ds-react';

import { RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';

// TODO (TOR) Er denne i bruk? (Det mangla tekstar her utan at det har blitt rapportert som feil)

type FormValues = {
  periodenErForeldet?: boolean;
  foreldetBegrunnelse?: string;
};

export const ForeldetFormPanel = () => {
  const { control } = useFormContext<FormValues>();
  return (
    <HStack gap="space-16">
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
            <FormattedMessage id="ForeldetFormPanel.VurderOmPeriodenErForeldet" />
          </Detail>
        }
      >
        <Radio value="true" size="small">
          <FormattedMessage id="ForeldetFormPanel.PeriodenErForeldet" />
        </Radio>
      </RhfRadioGroup>
    </HStack>
  );
};
