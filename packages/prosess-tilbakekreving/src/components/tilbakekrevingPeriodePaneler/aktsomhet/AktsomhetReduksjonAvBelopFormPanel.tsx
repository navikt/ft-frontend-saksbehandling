import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BodyShort, HStack, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroup, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { maxValue, minValue, required } from '@navikt/ft-form-validators';
import { ArrowBox, LabeledValue } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import type { Aktsomhet } from '../../../kodeverk/aktsomhet';
import type { AktsomhetFormName, AktsomhetFormValues } from './aktsomhetFormTypes';
import { ANDELER, EGENDEFINERT } from './aktsomhetUtils';

import styles from './aktsomhetReduksjonAvBelopFormPanel.module.css';

const minValue1 = minValue(0.0);
const maxValue100 = maxValue(99.99);

const parseCurrencyInput = (input: string | number) => {
  const inputNoSpace = input.toString().replace(/\s/g, '');
  const parsedValue = Number.parseInt(inputNoSpace, 10);
  return Number.isNaN(parsedValue) ? '' : parsedValue;
};

const validerAtMindreEnn =
  (intl: IntlShape, feilutbetalingBelop: number) => (belopSomSkalTilbakekreves: number | string) => {
    const numericValue =
      typeof belopSomSkalTilbakekreves === 'string' ? Number(belopSomSkalTilbakekreves) : belopSomSkalTilbakekreves;
    if (numericValue >= feilutbetalingBelop) {
      return intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen' });
    }
    return undefined;
  };

interface Props {
  name: AktsomhetFormName;
  readOnly: boolean;
  handletUaktsomhetGrad?: Aktsomhet;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
}

export const AktsomhetReduksjonAvBelopFormPanel = ({
  name,
  readOnly,
  handletUaktsomhetGrad,
  harMerEnnEnYtelse,
  feilutbetalingBelop,
}: Props) => {
  const intl = useIntl();

  const context = useFormContext<AktsomhetFormValues>();
  const harGrunnerTilReduksjon = useWatch({ control: context.control, name: `${name}.harGrunnerTilReduksjon` });
  const andelSomTilbakekreves = useWatch({ control: context.control, name: `${name}.andelSomTilbakekreves` });
  const tilleggesRenterFelt = `${name}.skalDetTilleggesRenter` as const;
  useEffect(() => {
    const value = context.getValues(tilleggesRenterFelt);
    if (value === undefined) {
      context.setValue(tilleggesRenterFelt, false);
    }
  }, []);

  return (
    <VStack gap="space-12">
      <RhfRadioGroup
        name={`${name}.harGrunnerTilReduksjon`}
        control={context.control}
        legend={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon" />}
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

      {harGrunnerTilReduksjon && (
        <ArrowBox alignOffset={24}>
          <VStack gap="space-12">
            {!harMerEnnEnYtelse && andelSomTilbakekreves !== EGENDEFINERT && (
              <HStack gap="space-8">
                <RhfSelect
                  name={`${name}.andelSomTilbakekreves`}
                  control={context.control}
                  label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves" />}
                  validate={[required]}
                  selectValues={ANDELER.map(andel => (
                    <option key={andel} value={andel}>
                      {andel}
                    </option>
                  ))}
                />
                <BodyShort as="span" className={styles.suffix}>
                  %
                </BodyShort>
              </HStack>
            )}
            {!harMerEnnEnYtelse && andelSomTilbakekreves === EGENDEFINERT && (
              <HStack gap="space-16">
                <RhfTextField
                  name={`${name}.andelSomTilbakekrevesManuell`}
                  control={context.control}
                  label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves" />}
                  readOnly={readOnly}
                  validate={[required, minValue1, maxValue100]}
                  normalizeOnBlur={(value: string | number) =>
                    Number.isNaN(value) ? value : Number.parseFloat(value.toString()).toFixed(2)
                  }
                  format={(value: string | number) => value.toString().replace('.', ',')}
                  parse={(value: string | number) => value.toString().replace(',', '.')}
                />
                <div className={styles.suffix}>%</div>
              </HStack>
            )}
            {harMerEnnEnYtelse && (
              <RhfTextField
                name={`${name}.belopSomSkalTilbakekreves`}
                control={context.control}
                label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves" />}
                validate={[required, minValue1, validerAtMindreEnn(intl, feilutbetalingBelop)]}
                readOnly={readOnly}
                // @ts-expect-error Fiks
                format={formatCurrencyNoKr}
                parse={parseCurrencyInput}
              />
            )}
            {handletUaktsomhetGrad === 'GROVT_UAKTSOM' && (
              <LabeledValue
                size="small"
                label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" />}
                value={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />}
              />
            )}
          </VStack>
        </ArrowBox>
      )}
      {harGrunnerTilReduksjon === false && (
        <ArrowBox alignOffset={90}>
          <VStack gap="space-12">
            {harMerEnnEnYtelse ? (
              <LabeledValue
                size="small"
                label={<FormattedMessage id={'AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves'} />}
                value={formatCurrencyNoKr(feilutbetalingBelop) ?? '-'}
              />
            ) : (
              <LabeledValue
                size="small"
                label={<FormattedMessage id={'AktsomhetReduksjonAvBelopFormPanel.AndelSomTilbakekreves'} />}
                value="100%"
              />
            )}

            {handletUaktsomhetGrad === 'GROVT_UAKTSOM' && (
              <RhfRadioGroup
                name={tilleggesRenterFelt}
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
          </VStack>
        </ArrowBox>
      )}
    </VStack>
  );
};
