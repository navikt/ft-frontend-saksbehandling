import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Detail } from '@navikt/ds-react';

import { RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';

const ForeldetFormPanel = () => (
  <Row>
    <Column md="6">
      <TextAreaField name="foreldetBegrunnelse" label={<FormattedMessage id="ForeldetPanel.Vurdering" />} readOnly />
    </Column>
    <Column md="6">
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
    </Column>
  </Row>
);

export default ForeldetFormPanel;
