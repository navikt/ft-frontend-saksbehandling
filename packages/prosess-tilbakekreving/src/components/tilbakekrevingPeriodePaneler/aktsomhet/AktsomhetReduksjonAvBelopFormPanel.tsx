import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BodyShort, Detail, HStack, Label, Radio, VStack } from '@navikt/ds-react';

import { RhfRadioGroupNew, RhfSelect, RhfTextField } from '@navikt/ft-form-hooks';
import { maxValue, minValue, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { Aktsomhet } from '../../../kodeverk/aktsomhet';
import { ANDELER, EGENDEFINERT } from './aktsomhetUtils';

import styles from './aktsomhetReduksjonAvBelopFormPanel.module.css';

const minValue1 = minValue(0.0);
const maxValue100 = maxValue(99.99);

const parseCurrencyInput = (input: string | number) => {
  const inputNoSpace = input.toString().replace(/\s/g, '');
  const parsedValue = parseInt(inputNoSpace, 10);
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
  name: string;
  harGrunnerTilReduksjon?: boolean;
  readOnly: boolean;
  handletUaktsomhetGrad?: string;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
  andelSomTilbakekreves?: string;
}

export const AktsomhetReduksjonAvBelopFormPanel = ({
  name,
  harGrunnerTilReduksjon,
  readOnly,
  handletUaktsomhetGrad,
  harMerEnnEnYtelse,
  feilutbetalingBelop,
  andelSomTilbakekreves,
}: Props) => {
  const intl = useIntl();

  // TODO (TOR) Mangler type for useFormContext
  const context = useFormContext();
  const tilleggesRenterFelt = `${name}.skalDetTilleggesRenter`;
  useEffect(() => {
    const value = context.getValues(tilleggesRenterFelt);
    if (value === undefined) {
      context.setValue(tilleggesRenterFelt, false);
    }
  }, []);

  return (
    <VStack gap="space-12">
      <RhfRadioGroupNew
        name={`${name}.harGrunnerTilReduksjon`}
        control={context.control}
        label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon" />}
        validate={[required]}
        isReadOnly={readOnly}
      >
        <HStack gap="space-20">
          <Radio value={true} size="small">
            <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />
          </Radio>
          <Radio value={false} size="small">
            <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />
          </Radio>
        </HStack>
      </RhfRadioGroupNew>
      {harGrunnerTilReduksjon && (
        <ArrowBox alignOffset={24}>
          <HStack gap="space-16">
            {!harMerEnnEnYtelse && andelSomTilbakekreves !== EGENDEFINERT && (
              <>
                <Label size="small">
                  <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves" />
                </Label>
                <HStack gap="space-8">
                  <RhfSelect
                    name={`${name}.andelSomTilbakekreves`}
                    control={context.control}
                    label=""
                    validate={[required]}
                    selectValues={ANDELER.map(andel => (
                      <option key={andel} value={andel}>
                        {andel}
                      </option>
                    ))}
                  />
                  <div className={styles.suffix}>%</div>
                </HStack>
              </>
            )}
            {!harMerEnnEnYtelse && andelSomTilbakekreves === EGENDEFINERT && (
              <>
                <Label size="small">
                  <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves" />
                </Label>
                <HStack gap="space-16">
                  <RhfTextField
                    name={`${name}.andelSomTilbakekrevesManuell`}
                    control={context.control}
                    className={styles.inputFelt}
                    readOnly={readOnly}
                    validate={[required, minValue1, maxValue100]}
                    normalizeOnBlur={(value: string | number) =>
                      Number.isNaN(value) ? value : parseFloat(value.toString()).toFixed(2)
                    }
                    format={(value: string | number) => value.toString().replace('.', ',')}
                    parse={(value: string | number) => value.toString().replace(',', '.')}
                  />
                  <div
                    className={
                      handletUaktsomhetGrad === Aktsomhet.GROVT_UAKTSOM ? styles.suffixGrovText : styles.suffix
                    }
                  >
                    %
                  </div>
                </HStack>
              </>
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
            {handletUaktsomhetGrad === Aktsomhet.GROVT_UAKTSOM && (
              <div>
                <Detail>
                  <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" />
                </Detail>
                <BodyShort size="small" className={styles.labelPadding}>
                  <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />
                </BodyShort>
              </div>
            )}
          </HStack>
        </ArrowBox>
      )}
      {harGrunnerTilReduksjon === false && (
        <ArrowBox alignOffset={90}>
          <Detail>
            <FormattedMessage
              id={
                harMerEnnEnYtelse
                  ? 'AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves'
                  : 'AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves'
              }
            />
          </Detail>
          <VStack gap="space-16">
            <BodyShort size="small" className={styles.labelPadding}>
              {harMerEnnEnYtelse ? formatCurrencyNoKr(feilutbetalingBelop) : '100%'}
            </BodyShort>
            {handletUaktsomhetGrad === Aktsomhet.GROVT_UAKTSOM && (
              <RhfRadioGroupNew
                name={tilleggesRenterFelt}
                control={context.control}
                label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" />}
                validate={[required]}
                isReadOnly={readOnly}
              >
                <HStack gap="space-20">
                  <Radio value={true} size="small">
                    <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />
                  </Radio>
                  <Radio value={false} size="small">
                    <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />
                  </Radio>
                </HStack>
              </RhfRadioGroupNew>
            )}
          </VStack>
        </ArrowBox>
      )}
    </VStack>
  );
};
