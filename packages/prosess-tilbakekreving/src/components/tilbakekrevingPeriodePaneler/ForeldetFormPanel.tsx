import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Detail } from '@navikt/ds-react/esm';

import { RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

const ForeldetFormPanel = () => (
  <FlexContainer>
    <FlexRow>
      <FlexColumn>
        <TextAreaField name="foreldetBegrunnelse" label={<FormattedMessage id="ForeldetPanel.Vurdering" />} readOnly />
      </FlexColumn>
      <FlexColumn>
        <RadioGroupPanel
          name="periodenErForeldet"
          label={
            <Detail size="small">
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
      </FlexColumn>
    </FlexRow>
  </FlexContainer>
);

export default ForeldetFormPanel;
