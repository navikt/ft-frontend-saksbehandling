import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Label, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

interface Props {
  name: string;
  readOnly: boolean;
  erValgtResultatTypeForstoBurdeForstaatt?: boolean;
}

export const AktsomhetGradForsettFormPanel = ({ name, readOnly, erValgtResultatTypeForstoBurdeForstaatt }: Props) => {
  // TODO (TOR) Mangler type for useFormContext
  const context = useFormContext();
  const tilleggesRenterFelt = `${name}.skalDetTilleggesRenter`;
  useEffect(() => {
    const value = context.getValues(tilleggesRenterFelt);
    if (value === undefined) {
      context.setValue(tilleggesRenterFelt, false);
    }
  }, []);
  return (
    <ArrowBox alignOffset={erValgtResultatTypeForstoBurdeForstaatt ? 320 : 360}>
      {erValgtResultatTypeForstoBurdeForstaatt && (
        <VStack gap="space-16">
          <Label size="small">
            <FormattedMessage id="AktsomhetGradForsettFormPanel.Andel" />
          </Label>
          <BodyShort size="small">100 %</BodyShort>
          <RhfRadioGroup
            name={`${name}.skalDetTilleggesRenter`}
            control={context.control}
            legend={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" />}
            validate={[required]}
            readOnly={readOnly}
          >
            <Radio value={true} size="small">
              <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />
            </Radio>
            <Radio value={false} size="small">
              <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />
            </Radio>
          </RhfRadioGroup>
        </VStack>
      )}
      {!erValgtResultatTypeForstoBurdeForstaatt && (
        <VStack gap="space-8">
          <div>
            <Detail>
              <FormattedMessage id="AktsomhetGradForsettFormPanel.Andel" />
            </Detail>
            <BodyShort size="small">100 %</BodyShort>
          </div>
          <BodyShort size="small">
            <FormattedMessage id="AktsomhetGradForsettFormPanel.Renter" />
          </BodyShort>
        </VStack>
      )}
    </ArrowBox>
  );
};
