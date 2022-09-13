import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';

import { minValue, required } from '@navikt/ft-form-validators';
import { removeSpacesFromNumber, formatCurrencyNoKr } from '@navikt/ft-utils';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { InputField, RadioGroupPanel } from '@navikt/ft-form-hooks';

import styles from './belopetMottattIGodTroFormPanel.less';

const minValue1 = minValue(1);

const parseCurrencyInput = (input: any) => {
  const inputNoSpace = input.toString().replace(/\s/g, '');
  const parsedValue = parseInt(inputNoSpace, 10);
  return Number.isNaN(parsedValue) ? '' : parsedValue;
};

const validerAtMindreEnn = (intl: IntlShape, feilutbetalingBelop: number) => (tilbakekrevdBelop: number) => {
  if (tilbakekrevdBelop > feilutbetalingBelop) {
    return intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen' });
  }
  return undefined;
};

export interface InitialValuesGodTroForm {
  erBelopetIBehold: boolean;
  tilbakekrevdBelop?: number;
}

interface OwnProps {
  name: string;
  readOnly: boolean;
  erBelopetIBehold?: boolean;
  feilutbetalingBelop: number;
}

interface StaticFunctions {
  buildIntialValues: (info: { erBelopetIBehold: boolean; tilbakekrevesBelop: number }) => InitialValuesGodTroForm;
  transformValues: (
    info: { erBelopetIBehold: boolean; tilbakekrevdBelop: number },
    vurderingBegrunnelse: string,
  ) => {
    '@type': string;
    begrunnelse: string;
    erBelopetIBehold: boolean;
    tilbakekrevesBelop?: number;
  };
}

const BelopetMottattIGodTroFormPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  name,
  readOnly,
  erBelopetIBehold,
  feilutbetalingBelop,
}) => {
  const intl = useIntl();
  return (
    <>
      <RadioGroupPanel
        name={`${name}.erBelopetIBehold`}
        label={<FormattedMessage id="BelopetMottattIGodTroFormPanel.BelopetIBehold" />}
        validate={[required]}
        radios={[
          {
            label: <FormattedMessage id="BelopetMottattIGodTroFormPanel.Ja" />,
            value: 'true',
          },
          {
            label: <FormattedMessage id="BelopetMottattIGodTroFormPanel.Nei" />,
            value: 'false',
          },
        ]}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        isHorizontal
      />
      <VerticalSpacer eightPx />
      <div className={styles.arrowbox}>
        {erBelopetIBehold === true && (
          <ArrowBox alignOffset={25}>
            <InputField
              name={`${name}.tilbakekrevdBelop`}
              label={<FormattedMessage id="BelopetMottattIGodTroFormPanel.AngiBelop" />}
              validate={[required, minValue1, validerAtMindreEnn(intl, feilutbetalingBelop)]}
              readOnly={readOnly}
              className={styles.tilbakekrevdBelopInput}
              // @ts-ignore Fiks
              format={formatCurrencyNoKr}
              parse={parseCurrencyInput}
            />
          </ArrowBox>
        )}
        {erBelopetIBehold === false && (
          <ArrowBox alignOffset={90}>
            <BodyShort size="small">
              <FormattedMessage id="BelopetMottattIGodTroFormPanel.IngenTilbakekreving" />
            </BodyShort>
          </ArrowBox>
        )}
      </div>
    </>
  );
};

BelopetMottattIGodTroFormPanel.transformValues = (info, vurderingBegrunnelse) => ({
  '@type': 'godTro',
  begrunnelse: vurderingBegrunnelse,
  erBelopetIBehold: info.erBelopetIBehold,
  tilbakekrevesBelop: info.erBelopetIBehold ? removeSpacesFromNumber(info.tilbakekrevdBelop) : undefined,
});

BelopetMottattIGodTroFormPanel.buildIntialValues = info => ({
  erBelopetIBehold: info.erBelopetIBehold,
  tilbakekrevdBelop: info.tilbakekrevesBelop,
});

export default BelopetMottattIGodTroFormPanel;
