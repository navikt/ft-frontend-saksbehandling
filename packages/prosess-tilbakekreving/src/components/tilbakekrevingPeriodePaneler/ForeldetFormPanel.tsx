import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Detail, HStack } from '@navikt/ds-react';

import { RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';

export const ForeldetFormPanel = () => (
  <HStack gap="4">
    <TextAreaField name="foreldetBegrunnelse" label={<FormattedMessage id="ForeldetPanel.Vurdering" />} readOnly />
    <RadioGroupPanel
      name="periodenErForeldet"
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
