import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Heading, HStack, InlineMessage, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import type { Aktsomhet } from '../../../kodeverk/aktsomhet';
import type { KodeverkTilbakeForPanel } from '../../../types/kodeverkTilbakeForPanel';
import type { AktsomhetFormName, AktsomhetFormValues } from './aktsomhetFormTypes';
import { AktsomhetSarligeGrunnerFormPanel } from './AktsomhetSarligeGrunnerFormPanel';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

interface Props {
  name: Extract<
    AktsomhetFormName,
    | 'FORSTO_BURDE_FORSTAATT.GROVT_UAKTSOM'
    | 'FORSTO_BURDE_FORSTAATT.SIMPEL_UAKTSOM'
    | 'FEIL_OPPLYSNINGER.GROVT_UAKTSOM'
    | 'FEIL_OPPLYSNINGER.SIMPEL_UAKTSOM'
    | 'MANGELFULL_OPPLYSNING.GROVT_UAKTSOM'
    | 'MANGELFULL_OPPLYSNING.SIMPEL_UAKTSOM'
  >;
  readOnly: boolean;
}

const SærligGrunnerBegrunnelseDiv = ({ name, readOnly }: Props) => {
  const { control } = useFormContext<AktsomhetFormValues>();

  return (
    <VStack gap="space-16">
      <Heading size="xsmall" level="4">
        <FormattedMessage id="AktsomhetGradUaktsomhetFormPanel.SærligGrunner" />
      </Heading>
      <RhfTextarea
        name={`${name}.sarligGrunnerBegrunnelse`}
        control={control}
        label={<FormattedMessage id="AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner" />}
        validate={[required, minLength3, maxLength1500, hasValidText]}
        maxLength={1500}
        readOnly={readOnly}
        description={<FormattedMessage id="AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst" />}
      />
    </VStack>
  );
};

interface Props {
  readOnly: boolean;
  handletUaktsomhetGrad: Extract<Aktsomhet, 'SIMPEL_UAKTSOM' | 'GROVT_UAKTSOM'>;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
  erTotalBelopUnder4Rettsgebyr: boolean;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
  erValgtResultatTypeForstoBurdeForstaatt?: boolean;
  name: Extract<
    AktsomhetFormName,
    | 'FORSTO_BURDE_FORSTAATT.GROVT_UAKTSOM'
    | 'FORSTO_BURDE_FORSTAATT.SIMPEL_UAKTSOM'
    | 'FEIL_OPPLYSNINGER.GROVT_UAKTSOM'
    | 'FEIL_OPPLYSNINGER.SIMPEL_UAKTSOM'
    | 'MANGELFULL_OPPLYSNING.GROVT_UAKTSOM'
    | 'MANGELFULL_OPPLYSNING.SIMPEL_UAKTSOM'
  >;
}

export const AktsomhetGradUaktsomhetFormPanel = ({
  readOnly,
  handletUaktsomhetGrad,
  kodeverkSamlingFpTilbake,
  harMerEnnEnYtelse,
  feilutbetalingBelop,
  erTotalBelopUnder4Rettsgebyr,
  name,
}: Props) => {
  const { control, watch } = useFormContext<AktsomhetFormValues>();

  const erUnder4Rettsgebyr = watch(`${name}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`);
  return (
    <ArrowBox alignOffset={handletUaktsomhetGrad === 'GROVT_UAKTSOM' ? 180 : 20}>
      <VStack gap="space-12">
        {handletUaktsomhetGrad === 'SIMPEL_UAKTSOM' && erTotalBelopUnder4Rettsgebyr && (
          <>
            <RhfRadioGroup
              name={`${name}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`}
              control={control}
              legend={<FormattedMessage id="AktsomhetGradUaktsomhetFormPanel.Tilbakekrev" />}
              validate={[required]}
              readOnly={readOnly}
            >
              <HStack gap="space-16">
                <Radio value={true} size="small">
                  <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />
                </Radio>
                <Radio value={false} size="small">
                  <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />
                </Radio>
              </HStack>
            </RhfRadioGroup>

            {erUnder4Rettsgebyr === true && (
              <>
                <SærligGrunnerBegrunnelseDiv name={name} readOnly={readOnly} />
                <AktsomhetSarligeGrunnerFormPanel
                  name={name}
                  kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
                  harMerEnnEnYtelse={harMerEnnEnYtelse}
                  feilutbetalingBelop={feilutbetalingBelop}
                  readOnly={readOnly}
                  handletUaktsomhetGrad={handletUaktsomhetGrad}
                />
              </>
            )}

            {erUnder4Rettsgebyr === false && (
              <ArrowBox alignOffset={55}>
                <InlineMessage status="info" size="small">
                  <FormattedMessage id="AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt" />
                </InlineMessage>
              </ArrowBox>
            )}
          </>
        )}
        {!(handletUaktsomhetGrad === 'SIMPEL_UAKTSOM' && erTotalBelopUnder4Rettsgebyr) && (
          <>
            <SærligGrunnerBegrunnelseDiv name={name} readOnly={readOnly} />
            <AktsomhetSarligeGrunnerFormPanel
              name={name}
              kodeverkSamlingFpTilbake={kodeverkSamlingFpTilbake}
              harMerEnnEnYtelse={harMerEnnEnYtelse}
              feilutbetalingBelop={feilutbetalingBelop}
              readOnly={readOnly}
              handletUaktsomhetGrad={handletUaktsomhetGrad}
            />
          </>
        )}
      </VStack>
    </ArrowBox>
  );
};
