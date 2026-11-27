import { useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { HStack, InlineMessage, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup, RhfTextField } from '@navikt/ft-form-hooks';
import { minValue, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';

const minValue1 = minValue(1);

const parseCurrencyInput = (input: string | number) => {
  const inputNoSpace = input.toString().replace(/\s/g, '');
  const parsedValue = Number.parseInt(inputNoSpace, 10);
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
  name: 'GOD_TRO';
  readOnly: boolean;
  feilutbetalingBelop: number;
}

export const BelopetMottattIGodTroFormPanel = ({ name, readOnly, feilutbetalingBelop }: Props) => {
  const intl = useIntl();

  const { control, watch } = useFormContext<{ GOD_TRO: InitialValuesGodTroForm }>();
  const erBelopetIBehold = watch('GOD_TRO.erBelopetIBehold');

  return (
    <VStack gap="space-12">
      <RhfRadioGroup
        name={`${name}.erBelopetIBehold`}
        control={control}
        legend={<FormattedMessage id="BelopetMottattIGodTroFormPanel.BelopetIBehold" />}
        validate={[required]}
        readOnly={readOnly}
      >
        <HStack gap="space-20">
          <Radio value={true} size="small">
            <FormattedMessage id="BelopetMottattIGodTroFormPanel.Ja" />
          </Radio>
          <Radio value={false} size="small">
            <FormattedMessage id="BelopetMottattIGodTroFormPanel.Nei" />
          </Radio>
        </HStack>
      </RhfRadioGroup>

      {erBelopetIBehold === true && (
        <ArrowBox alignOffset={25}>
          <RhfTextField
            name={`${name}.tilbakekrevdBelop`}
            control={control}
            label={<FormattedMessage id="BelopetMottattIGodTroFormPanel.AngiBelop" />}
            validate={[required, minValue1, validerAtMindreEnn(intl, feilutbetalingBelop)]}
            readOnly={readOnly}
            htmlSize={12}
            // @ts-expect-error Fiks
            format={formatCurrencyNoKr}
            parse={parseCurrencyInput}
          />
        </ArrowBox>
      )}

      {erBelopetIBehold === false && (
        <ArrowBox alignOffset={90}>
          <InlineMessage status="info" size="small">
            <FormattedMessage id="BelopetMottattIGodTroFormPanel.IngenTilbakekreving" />
          </InlineMessage>
        </ArrowBox>
      )}
    </VStack>
  );
};

BelopetMottattIGodTroFormPanel.transformValues = (info: InitialValuesGodTroForm, vurderingBegrunnelse: string) => ({
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
