import { BodyShort, Detail, HStack, Label } from '@navikt/ds-react';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { useEffect } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { InputField, RadioGroupPanel, SelectField } from '@navikt/ft-form-hooks';
import { maxValue, minValue, required } from '@navikt/ft-form-validators';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { useFormContext } from 'react-hook-form';

import styles from './aktsomhetReduksjonAvBelopFormPanel.module.css';
import { Aktsomhet } from '../../../kodeverk/aktsomhet';

const minValue1 = minValue(0.0);
const maxValue100 = maxValue(99.99);

const parseCurrencyInput = (input: any) => {
  const inputNoSpace = input.toString().replace(/\s/g, '');
  const parsedValue = parseInt(inputNoSpace, 10);
  return Number.isNaN(parsedValue) ? '' : parsedValue;
};

const validerAtMindreEnn = (intl: IntlShape, feilutbetalingBelop: number) => (belopSomSkalTilbakekreves: number) => {
  if (belopSomSkalTilbakekreves >= feilutbetalingBelop) {
    return intl.formatMessage({ id: 'TilbakekrevingPeriodeForm.BelopMaVereMindreEnnFeilutbetalingen' });
  }
  return undefined;
};

export const EGENDEFINERT = 'Egendefinert';
export const ANDELER = ['30', '50', '70', EGENDEFINERT];

export interface Props {
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

  const context = useFormContext();
  const tilleggesRenterFelt = `${name}.skalDetTilleggesRenter`;
  useEffect(() => {
    const value = context.getValues(tilleggesRenterFelt);
    if (value === undefined) {
      context.setValue(tilleggesRenterFelt, false);
    }
  }, []);

  return (
    <>
      <VerticalSpacer sixteenPx />
      <RadioGroupPanel
        name={`${name}.harGrunnerTilReduksjon`}
        label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon" />}
        validate={[required]}
        radios={[
          {
            label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />,
            value: 'true',
          },
          {
            label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />,
            value: 'false',
          },
        ]}
        isReadOnly={readOnly}
        isTrueOrFalseSelection
        isHorizontal
      />
      <VerticalSpacer sixteenPx />
      {harGrunnerTilReduksjon && (
        <ArrowBox alignOffset={24}>
          <HStack gap="4">
            {!harMerEnnEnYtelse && andelSomTilbakekreves !== EGENDEFINERT && (
              <>
                <Label size="small">
                  <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves" />
                </Label>
                <HStack gap="2">
                  <SelectField
                    name={`${name}.andelSomTilbakekreves`}
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
                <HStack gap="4">
                  <InputField
                    className={styles.inputFelt}
                    name={`${name}.andelSomTilbakekrevesManuell`}
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
              <InputField
                name={`${name}.belopSomSkalTilbakekreves`}
                label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves" />}
                validate={[required, minValue1, validerAtMindreEnn(intl, feilutbetalingBelop)]}
                readOnly={readOnly}
                // @ts-ignore Fiks
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
          <BodyShort size="small" className={styles.labelPadding}>
            {harMerEnnEnYtelse ? formatCurrencyNoKr(feilutbetalingBelop) : '100%'}
          </BodyShort>
          <VerticalSpacer sixteenPx />
          {handletUaktsomhetGrad === Aktsomhet.GROVT_UAKTSOM && (
            <RadioGroupPanel
              name={tilleggesRenterFelt}
              label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" />}
              validate={[required]}
              radios={[
                {
                  label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />,
                  value: 'true',
                },
                {
                  label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />,
                  value: 'false',
                },
              ]}
              isReadOnly={readOnly}
              isTrueOrFalseSelection
              isHorizontal
            />
          )}
        </ArrowBox>
      )}
    </>
  );
};
