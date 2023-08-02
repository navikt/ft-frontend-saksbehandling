import React, { useEffect, FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Detail, Label } from '@navikt/ds-react';

import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { useFormContext } from 'react-hook-form';

export interface OwnProps {
  name: string;
  readOnly: boolean;
  erValgtResultatTypeForstoBurdeForstaatt?: boolean;
}

const AktsomhetGradForsettFormPanel: FunctionComponent<OwnProps> = ({
  name,
  readOnly,
  erValgtResultatTypeForstoBurdeForstaatt,
}) => {
  const context = useFormContext();
  const tilleggesRenterFelt = `${name}.skalDetTilleggesRenter`;
  useEffect(() => {
    const value = context.getValues(tilleggesRenterFelt);
    if (value === undefined) {
      context.setValue(tilleggesRenterFelt, false);
    }
  }, []);
  return (
    <div>
      <ArrowBox alignOffset={erValgtResultatTypeForstoBurdeForstaatt ? 320 : 360}>
        {erValgtResultatTypeForstoBurdeForstaatt && (
          <>
            <Label size="small">
              <FormattedMessage id="AktsomhetGradForsettFormPanel.Andel" />
            </Label>
            <BodyShort size="small">100 %</BodyShort>
            <VerticalSpacer sixteenPx />
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
          </>
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
};

export default AktsomhetGradForsettFormPanel;
