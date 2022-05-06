import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-utils';

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
            <Undertekst>
              <FormattedMessage id="AktsomhetGradForsettFormPanel.Andel" />
            </Undertekst>
            <Normaltekst className={styles.labelPadding}>100 %</Normaltekst>
          </Column>
          <Column md="6">
            <RadioGroupPanel
              name={`${name}.skalDetTilleggesRenter`}
              label={<Undertekst><FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" /></Undertekst>}
              validate={[required]}
              radios={[{
                label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />,
                value: 'true',
              }, {
                label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />,
                value: 'false',
              }]}
              isReadOnly={readOnly}
              parse={(value: string) => value === 'true'}
              isHorizontal
            />
          </Column>
        </Row>
      )}
      {!erValgtResultatTypeForstoBurdeForstaatt && (
        <>
          <Undertekst>
            <FormattedMessage id="AktsomhetGradForsettFormPanel.Andel" />
          </Undertekst>
          <Normaltekst>100 %</Normaltekst>
          <VerticalSpacer eightPx />
          <Normaltekst>
            <FormattedMessage id="AktsomhetGradForsettFormPanel.Renter" />
          </Normaltekst>
        </>
      )}
    </ArrowBox>
  </div>
);

export default AktsomhetGradForsettFormPanel;
