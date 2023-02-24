import React, { FunctionComponent, useEffect } from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import { BodyShort, Label, Detail } from '@navikt/ds-react/esm';
import { ArrowBox, VerticalSpacer, FlexColumn, FlexRow, FlexContainer } from '@navikt/ft-ui-komponenter';

import { InputField, SelectField, RadioGroupPanel, formHooks } from '@navikt/ft-form-hooks';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { minValue, maxValue, required } from '@navikt/ft-form-validators';

import aktsomhet from '../../../kodeverk/aktsomhet';

import styles from './aktsomhetReduksjonAvBelopFormPanel.module.css';

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

interface OwnProps {
  name: string;
  harGrunnerTilReduksjon?: boolean;
  readOnly: boolean;
  handletUaktsomhetGrad?: string;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
  andelSomTilbakekreves?: string;
}

const AktsomhetReduksjonAvBelopFormPanel: FunctionComponent<OwnProps> = ({
  name,
  harGrunnerTilReduksjon,
  readOnly,
  handletUaktsomhetGrad,
  harMerEnnEnYtelse,
  feilutbetalingBelop,
  andelSomTilbakekreves,
}) => {
  const intl = useIntl();

  const context = formHooks.useFormContext();
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
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                {!harMerEnnEnYtelse && andelSomTilbakekreves !== EGENDEFINERT && (
                  <>
                    <Label size="small">
                      <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves" />
                    </Label>
                    <FlexRow>
                      <FlexColumn>
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
                      </FlexColumn>
                      <FlexColumn className={styles.suffix}>%</FlexColumn>
                    </FlexRow>
                  </>
                )}
                {!harMerEnnEnYtelse && andelSomTilbakekreves === EGENDEFINERT && (
                  <>
                    <Label size="small">
                      <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves" />
                    </Label>
                    <FlexRow>
                      <FlexColumn>
                        <InputField
                          name={`${name}.andelSomTilbakekrevesManuell`}
                          readOnly={readOnly}
                          validate={[required, minValue1, maxValue100]}
                          normalizeOnBlur={(value: string | number) =>
                            Number.isNaN(value) ? value : parseFloat(value.toString()).toFixed(2)
                          }
                          format={(value: string | number) => value.toString().replace('.', ',')}
                          parse={(value: string | number) => value.toString().replace(',', '.')}
                        />
                      </FlexColumn>
                      <FlexColumn
                        className={
                          handletUaktsomhetGrad === aktsomhet.GROVT_UAKTSOM ? styles.suffixGrovText : styles.suffix
                        }
                      >
                        %
                      </FlexColumn>
                    </FlexRow>
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
              </FlexColumn>
              {handletUaktsomhetGrad === aktsomhet.GROVT_UAKTSOM && (
                <FlexColumn>
                  <Detail size="small">
                    <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" />
                  </Detail>
                  <BodyShort size="small" className={styles.labelPadding}>
                    <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />
                  </BodyShort>
                </FlexColumn>
              )}
            </FlexRow>
          </FlexContainer>
        </ArrowBox>
      )}
      {harGrunnerTilReduksjon === false && (
        <ArrowBox alignOffset={90}>
          <FlexContainer>
            <FlexRow>
              <FlexColumn>
                <Detail size="small">
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
              </FlexColumn>
              {handletUaktsomhetGrad === aktsomhet.GROVT_UAKTSOM && (
                <FlexColumn>
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
                </FlexColumn>
              )}
            </FlexRow>
          </FlexContainer>
        </ArrowBox>
      )}
    </>
  );
};

export default AktsomhetReduksjonAvBelopFormPanel;
