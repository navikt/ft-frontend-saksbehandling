import { useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ErrorMessage, Label, VStack } from '@navikt/ds-react';

import { RhfCheckbox, RhfTextarea, useCustomValidation } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import type { Aktsomhet } from '../../../kodeverk/aktsomhet';
import type { KodeverkMedNavnTilbakekreving, KodeverkTilbakeForPanel } from '../../../types/kodeverkTilbakeForPanel';
import type { AktsomhetFormName, AktsomhetFormValues } from './aktsomhetFormTypes';
import { AktsomhetReduksjonAvBelopFormPanel } from './AktsomhetReduksjonAvBelopFormPanel';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

interface Props {
  readOnly: boolean;
  handletUaktsomhetGrad?: Aktsomhet;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
  kodeverkSamlingFpTilbake: KodeverkTilbakeForPanel;
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

export const AktsomhetSarligeGrunnerFormPanel = ({
  name,
  readOnly,
  handletUaktsomhetGrad,
  kodeverkSamlingFpTilbake,
  harMerEnnEnYtelse,
  feilutbetalingBelop,
}: Props) => {
  const intl = useIntl();
  const { watch, control } = useFormContext<AktsomhetFormValues>();
  const erSærligGrunnAnnetValgt = useWatch({ control, name: `${name}.ANNET` });

  const særligGrunnTyper = kodeverkSamlingFpTilbake['SærligGrunn'].toSorted(sorterGrunner);

  const hasError = !særligGrunnTyper.some(sgt => !!watch(`${name}.${sgt.kode}`));
  const errorMessage = useCustomValidation(
    name,
    hasError ? intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.MaVelgeSarligGrunn' }) : undefined,
  );

  return (
    <>
      <VStack gap="space-4">
        <Label size="small">
          <FormattedMessage id="AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon" />
        </Label>
        <div>
          {særligGrunnTyper.map(sgt => (
            <RhfCheckbox
              key={sgt.kode}
              name={`${name}.${sgt.kode}`}
              control={control}
              label={sgt.navn}
              readOnly={readOnly}
            />
          ))}
        </div>

        {erSærligGrunnAnnetValgt && (
          <RhfTextarea
            name={`${name}.annetBegrunnelse`}
            control={control}
            label=""
            hideLabel
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
          />
        )}
      </VStack>

      {errorMessage && <ErrorMessage size="small">{errorMessage}</ErrorMessage>}

      <AktsomhetReduksjonAvBelopFormPanel
        name={name}
        readOnly={readOnly}
        handletUaktsomhetGrad={handletUaktsomhetGrad}
        harMerEnnEnYtelse={harMerEnnEnYtelse}
        feilutbetalingBelop={feilutbetalingBelop}
      />
    </>
  );
};

const sorterGrunner = (
  a: KodeverkMedNavnTilbakekreving<'SærligGrunn'>,
  b: KodeverkMedNavnTilbakekreving<'SærligGrunn'>,
) => {
  if (a.kode === 'ANNET') {
    return 1;
  }
  if (b.kode === 'ANNET') {
    return -1;
  }

  return a.navn.localeCompare(b.navn);
};
