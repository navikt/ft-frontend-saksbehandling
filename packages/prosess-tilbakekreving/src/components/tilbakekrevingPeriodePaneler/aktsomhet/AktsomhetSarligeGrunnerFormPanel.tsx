import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { UseFormGetValues } from 'react-hook-form';
import { Column, Row } from 'nav-frontend-grid';
import { Undertekst } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  formHooks, CheckboxField, TextAreaField, SkjemaGruppeMedFeilviser,
} from '@navikt/ft-form-hooks';
import {
  hasValidText, maxLength, minLength, required,
} from '@navikt/ft-utils';
import { KodeverkMedNavn } from '@navikt/ft-types';

import AktsomhetReduksjonAvBelopFormPanel from './AktsomhetReduksjonAvBelopFormPanel';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const validerAtMinstEnSærligGrunnErValgt = (
  intl: IntlShape,
  getValues: UseFormGetValues<any>,
  name: string,
  sarligGrunnTyper: KodeverkMedNavn[],
) => () => {
  if (sarligGrunnTyper.some((sgt) => !!getValues(`${name}.${sgt.kode}`))) {
    return undefined;
  }
  return intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.MaVelgeSarligGrunn' });
};

interface OwnProps {
  harGrunnerTilReduksjon?: boolean;
  readOnly: boolean;
  handletUaktsomhetGrad: string;
  erSerligGrunnAnnetValgt: boolean;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
  andelSomTilbakekreves?: string;
  sarligGrunnTyper: KodeverkMedNavn[];
  name: string;
}

const AktsomhetSarligeGrunnerFormPanel: FunctionComponent<OwnProps> = ({
  name,
  harGrunnerTilReduksjon,
  readOnly,
  handletUaktsomhetGrad,
  erSerligGrunnAnnetValgt,
  sarligGrunnTyper,
  harMerEnnEnYtelse,
  feilutbetalingBelop,
  andelSomTilbakekreves,
}) => {
  const intl = useIntl();
  const {
    getValues,
  } = formHooks.useFormContext();
  return (
    <div>
      <Undertekst>
        <FormattedMessage id="AktsomhetSarligeGrunnerFormPanel.GrunnerTilReduksjon" />
      </Undertekst>
      <VerticalSpacer eightPx />
      <SkjemaGruppeMedFeilviser
        name={`${name}.reduksjonsgrunner`}
        validate={[validerAtMinstEnSærligGrunnErValgt(intl, getValues, name, sarligGrunnTyper)]}
      >
        {sarligGrunnTyper.map((sgt: KodeverkMedNavn) => (
          <React.Fragment key={sgt.kode}>
            <CheckboxField
              key={sgt.kode}
              name={`${name}.${sgt.kode}`}
              label={sgt.navn}
              readOnly={readOnly}
            />
            <VerticalSpacer eightPx />
          </React.Fragment>
        ))}
        {erSerligGrunnAnnetValgt && (
          <Row>
            <Column md="1" />
            <Column md="10">
              <TextAreaField
                name={`${name}.annetBegrunnelse`}
                label=""
                validate={[required, minLength3, maxLength1500, hasValidText]}
                maxLength={1500}
                readOnly={readOnly}
              />
            </Column>
          </Row>
        )}
      </SkjemaGruppeMedFeilviser>
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

export default AktsomhetSarligeGrunnerFormPanel;
