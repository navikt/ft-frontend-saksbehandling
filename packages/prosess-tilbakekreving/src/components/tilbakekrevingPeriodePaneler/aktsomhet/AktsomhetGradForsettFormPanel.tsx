import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, InlineMessage, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { ArrowBox, LabeledValue } from '@navikt/ft-ui-komponenter';

import type { AktsomhetFormName, AktsomhetFormValues } from './aktsomhetFormTypes';

interface Props {
  name: Extract<
    AktsomhetFormName,
    'FORSTO_BURDE_FORSTAATT.FORSETT' | 'FEIL_OPPLYSNINGER.FORSETT' | 'MANGELFULL_OPPLYSNING.FORSETT'
  >;
  readOnly: boolean;
  erValgtResultatTypeForstoBurdeForstaatt?: boolean;
}

export const AktsomhetGradForsettFormPanel = ({ name, readOnly, erValgtResultatTypeForstoBurdeForstaatt }: Props) => {
  const context = useFormContext<AktsomhetFormValues>();
  const tilleggesRenterFelt = `${name}.skalDetTilleggesRenter` as const;
  useEffect(() => {
    const value = context.getValues(tilleggesRenterFelt);
    if (value === undefined) {
      context.setValue(tilleggesRenterFelt, false);
    }
  }, []);
  return (
    <ArrowBox alignOffset={erValgtResultatTypeForstoBurdeForstaatt ? 320 : 360}>
      <VStack gap="space-8">
        <LabeledValue size="small" label={<FormattedMessage id="AktsomhetGradForsettFormPanel.Andel" />} value="100%" />

        {erValgtResultatTypeForstoBurdeForstaatt && (
          <RhfRadioGroup
            name={`${name}.skalDetTilleggesRenter`}
            control={context.control}
            legend={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" />}
            validate={[required]}
            readOnly={readOnly}
          >
            <HStack gap="space-20">
              <Radio value={true} size="small">
                <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />
              </Radio>
              <Radio value={false} size="small">
                <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />
              </Radio>
            </HStack>
          </RhfRadioGroup>
        )}

        {!erValgtResultatTypeForstoBurdeForstaatt && (
          <InlineMessage status="info" size="small">
            <FormattedMessage id="AktsomhetGradForsettFormPanel.Renter" />
          </InlineMessage>
        )}
      </VStack>
    </ArrowBox>
  );
};
