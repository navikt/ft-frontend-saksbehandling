import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { BodyShort, Detail, Label } from '@navikt/ds-react';

import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

import styles from './aktsomhetReduksjonAvBelopFormPanel.less';

interface OwnProps {
  name: string;
  readOnly: boolean;
  erValgtResultatTypeForstoBurdeForstaatt?: boolean;
}

const AktsomhetGradForsettFormPanel: FunctionComponent<OwnProps> = ({
  name,
  readOnly,
  erValgtResultatTypeForstoBurdeForstaatt,
}) => (
  <div>
    <ArrowBox alignOffset={erValgtResultatTypeForstoBurdeForstaatt ? 320 : 360}>
      {erValgtResultatTypeForstoBurdeForstaatt && (
        <Row>
          <Column md="6">
            <Label size="small">
              <FormattedMessage id="AktsomhetGradForsettFormPanel.Andel" />
            </Label>
            <BodyShort size="small" className={styles.labelPadding}>
              100 %
            </BodyShort>
          </Column>
          <Column md="6">
            <RadioGroupPanel
              name={`${name}.skalDetTilleggesRenter`}
              label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" />}
              validate={[required]}
              radios={[
                {
                  label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />,
                  value: 'true',
                },
                {
                  label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />,
                  value: 'false',
                },
              ]}
              isReadOnly={readOnly}
              parse={(value: string) => value === 'true'}
              isHorizontal
            />
          </Column>
        </Row>
      )}
      {!erValgtResultatTypeForstoBurdeForstaatt && (
        <>
          <Detail size="small">
            <FormattedMessage id="AktsomhetGradForsettFormPanel.Andel" />
          </Detail>
          <BodyShort size="small">100 %</BodyShort>
          <VerticalSpacer eightPx />
          <BodyShort size="small">
            <FormattedMessage id="AktsomhetGradForsettFormPanel.Renter" />
          </BodyShort>
        </>
      )}
    </ArrowBox>
  </div>
);

export default AktsomhetGradForsettFormPanel;
