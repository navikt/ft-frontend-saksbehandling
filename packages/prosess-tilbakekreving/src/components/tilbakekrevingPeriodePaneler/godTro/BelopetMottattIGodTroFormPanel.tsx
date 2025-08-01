import { useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BodyShort, VStack } from '@navikt/ds-react';

import { RhfRadioGroup, RhfTextField } from '@navikt/ft-form-hooks';
import { minValue, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';

import styles from './belopetMottattIGodTroFormPanel.module.css';

const minValue1 = minValue(1);

const parseCurrencyInput = (input: string | number) => {
  const inputNoSpace = input.toString().replace(/\s/g, '');
  const parsedValue = parseInt(inputNoSpace, 10);
  return Number.isNaN(parsedValue) ? '' : parsedValue;
};

const validerAtMindreEnn = (intl: IntlShape, feilutbetalingBelop: number) => (tilbakekrevdBelop: number | string) => {
  const numericValue = typeof tilbakekrevdBelop === 'string' ? Number(tilbakekrevdBelop) : tilbakekrevdBelop;
  if (numericValue > feilutbetalingBelop) {
    return intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.BelopKanIkkeVereStorreEnnFeilutbetalingen' });
  }
  return undefined;
};

export interface InitialValuesGodTroForm {
  erBelopetIBehold: boolean;
  tilbakekrevdBelop?: number;
}

interface Props {
  name: string;
  readOnly: boolean;
  erBelopetIBehold?: boolean;
  feilutbetalingBelop: number;
}

export const BelopetMottattIGodTroFormPanel = ({ name, readOnly, erBelopetIBehold, feilutbetalingBelop }: Props) => {
  const intl = useIntl();

  // TODO (TOR) Manglar type
  const { control } = useFormContext();

  return (
    <VStack gap="space-8">
      <RhfRadioGroup
        name={`${name}.erBelopetIBehold`}
        control={control}
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
      <div className={styles.arrowbox}>
        {erBelopetIBehold === true && (
          <ArrowBox alignOffset={25}>
            <RhfTextField
              name={`${name}.tilbakekrevdBelop`}
              label={<FormattedMessage id="BelopetMottattIGodTroFormPanel.AngiBelop" />}
              validate={[required, minValue1, validerAtMindreEnn(intl, feilutbetalingBelop)]}
              readOnly={readOnly}
              className={styles.tilbakekrevdBelopInput}
              // @ts-expect-error Fiks
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
    </VStack>
  );
};

BelopetMottattIGodTroFormPanel.transformValues = (
  info: { erBelopetIBehold: boolean; tilbakekrevdBelop: number },
  vurderingBegrunnelse: string,
) => ({
  '@type': 'godTro',
  begrunnelse: vurderingBegrunnelse,
  erBelopetIBehold: info.erBelopetIBehold,
  tilbakekrevesBelop: info.erBelopetIBehold ? removeSpacesFromNumber(info.tilbakekrevdBelop) : undefined,
});

BelopetMottattIGodTroFormPanel.buildIntialValues = (info: {
  erBelopetIBehold: boolean;
  tilbakekrevesBelop: number;
}) => ({
  erBelopetIBehold: info.erBelopetIBehold,
  tilbakekrevdBelop: info.tilbakekrevesBelop,
});
