import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ErrorMessage, Label } from '@navikt/ds-react';

import { CheckboxField, TextAreaField, useCustomValidation } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

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
  sarligGrunnTyper: KodeverkMedNavn[];
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
    <div>
      <Label size="small">
        <FormattedMessage id="AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon" />
      </Label>
      <VerticalSpacer eightPx />
      {sarligGrunnTyper.map((sgt: KodeverkMedNavn) => (
        <React.Fragment key={sgt.kode}>
          <CheckboxField key={sgt.kode} name={`${name}.${sgt.kode}`} label={sgt.navn} readOnly={readOnly} />
          <VerticalSpacer eightPx />
        </React.Fragment>
      ))}
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
    </div>
  );
};
