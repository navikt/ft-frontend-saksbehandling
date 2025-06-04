import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ErrorMessage, Label, VStack } from '@navikt/ds-react';

import { CheckboxField, TextAreaField, useCustomValidation } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import { KodeverkMedNavnTilbakekreving } from '../../../types/KodeverkTilbakeForPanel';
import { AktsomhetReduksjonAvBelopFormPanel } from './AktsomhetReduksjonAvBelopFormPanel';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

export interface Props {
  harGrunnerTilReduksjon?: boolean;
  readOnly: boolean;
  handletUaktsomhetGrad?: string;
  erSerligGrunnAnnetValgt?: boolean;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
  andelSomTilbakekreves?: string;
  sarligGrunnTyper: KodeverkMedNavnTilbakekreving<'SærligGrunn'>[];
  name: string;
}

export const AktsomhetSarligeGrunnerFormPanel = ({
  name,
  harGrunnerTilReduksjon,
  readOnly,
  handletUaktsomhetGrad,
  erSerligGrunnAnnetValgt,
  sarligGrunnTyper,
  harMerEnnEnYtelse,
  feilutbetalingBelop,
  andelSomTilbakekreves,
}: Props) => {
  const intl = useIntl();
  const { watch } = useFormContext();

  const hasError = !sarligGrunnTyper.some(sgt => !!watch(`${name}.${sgt.kode}`));
  const errorMessage = useCustomValidation(
    name,
    hasError ? intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.MaVelgeSarligGrunn' }) : undefined,
  );

  return (
    <VStack gap="4">
      <Label size="small">
        <FormattedMessage id="AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon" />
      </Label>
      <div>
        {sarligGrunnTyper.map(sgt => (
          <CheckboxField key={sgt.kode} name={`${name}.${sgt.kode}`} label={sgt.navn} readOnly={readOnly} />
        ))}
      </div>
      {erSerligGrunnAnnetValgt && (
        <TextAreaField
          name={`${name}.annetBegrunnelse`}
          label=""
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly}
        />
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <AktsomhetReduksjonAvBelopFormPanel
        name={name}
        harGrunnerTilReduksjon={harGrunnerTilReduksjon}
        readOnly={readOnly}
        handletUaktsomhetGrad={handletUaktsomhetGrad}
        harMerEnnEnYtelse={harMerEnnEnYtelse}
        feilutbetalingBelop={feilutbetalingBelop}
        andelSomTilbakekreves={andelSomTilbakekreves}
      />
    </VStack>
  );
};
