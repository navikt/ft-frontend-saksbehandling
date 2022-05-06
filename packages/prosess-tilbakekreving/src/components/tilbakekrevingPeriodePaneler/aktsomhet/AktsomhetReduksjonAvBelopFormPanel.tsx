import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';
import {
  ArrowBox, VerticalSpacer, FlexColumn, FlexRow,
} from '@navikt/ft-ui-komponenter';

import { InputField, SelectField, RadioGroupPanel } from '@navikt/ft-form-hooks';
import {
  formatCurrencyNoKr, minValue, maxValue, required,
} from '@navikt/ft-utils';

import aktsomhet from '../../../kodeverk/aktsomhet';

import styles from './aktsomhetReduksjonAvBelopFormPanel.less';

const minValue1 = minValue(0.00);
const maxValue100 = maxValue(99.99);

const parseCurrencyInput = (input: any) => {
  const inputNoSpace = input.toString().replace(/\s/g, '');
  const parsedValue = parseInt(inputNoSpace, 10);
  return Number.isNaN(parsedValue) ? '' : parsedValue;
};

const validerAtMindreEnn = (
  intl: IntlShape,
  feilutbetalingBelop: number,
) => (belopSomSkalTilbakekreves: number) => {
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
  handletUaktsomhetGrad: string;
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
  return (
    <>
      <Row>
        <Column md="12">
          <VerticalSpacer eightPx />
          <RadioGroupPanel
            name={`${name}.harGrunnerTilReduksjon`}
            label={<Undertekst><FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalSarligeGrunnerGiReduksjon" /></Undertekst>}
            validate={[required]}
            radios={[{
              label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />,
              value: 'true',
            }, {
              label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />,
              value: 'false',
            }]}
            isReadOnly={readOnly}
            parse={(value: string) => value === 'true'}
            isHorizontal
          />
        </Column>
      </Row>
      {harGrunnerTilReduksjon && (
        <ArrowBox alignOffset={24}>
          <Row>
            <Column md="6">
              {(!harMerEnnEnYtelse && andelSomTilbakekreves !== EGENDEFINERT) && (
                <>
                  <Undertekst><FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves" /></Undertekst>
                  <FlexRow>
                    <FlexColumn>
                      <SelectField
                        name={`${name}.andelSomTilbakekreves`}
                        label=""
                        validate={[required]}
                        selectValues={ANDELER.map((andel) => <option key={andel} value={andel}>{andel}</option>)}
                        bredde="s"
                      />
                    </FlexColumn>
                    <FlexColumn className={styles.suffix}>%</FlexColumn>
                  </FlexRow>
                </>
              )}
              {(!harMerEnnEnYtelse && andelSomTilbakekreves === EGENDEFINERT) && (
                <>
                  <Undertekst><FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiAndelSomTilbakekreves" /></Undertekst>
                  <FlexRow>
                    <FlexColumn>
                      <InputField
                        name={`${name}.andelSomTilbakekrevesManuell`}
                        readOnly={readOnly}
                        validate={[required, minValue1, maxValue100]}
                        normalizeOnBlur={(value: string) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
                        format={(value: string | number) => value.toString().replace('.', ',')}
                        parse={(value: string) => value.replace(',', '.')}
                        bredde="S"
                      />
                    </FlexColumn>
                    <FlexColumn className={handletUaktsomhetGrad === aktsomhet.GROVT_UAKTSOM ? styles.suffixGrovText : styles.suffix}>%</FlexColumn>
                  </FlexRow>
                </>
              )}
              {(harMerEnnEnYtelse) && (
                <InputField
                  name={`${name}.belopSomSkalTilbakekreves`}
                  label={<FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.AngiBelopSomSkalTilbakekreves" />}
                  validate={[required, minValue1, validerAtMindreEnn(intl, feilutbetalingBelop)]}
                  readOnly={readOnly}
                  format={formatCurrencyNoKr}
                  parse={parseCurrencyInput}
                  bredde="S"
                />
              )}
            </Column>
            {handletUaktsomhetGrad === aktsomhet.GROVT_UAKTSOM && (
              <Column md="6">
                <Undertekst><FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" /></Undertekst>
                <Normaltekst className={styles.labelPadding}><FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" /></Normaltekst>
              </Column>
            )}
          </Row>
        </ArrowBox>
      )}
      {harGrunnerTilReduksjon === false && (
        <ArrowBox alignOffset={90}>
          <Row>
            <Column md="6">
              <Undertekst>
                <FormattedMessage
                  id={harMerEnnEnYtelse ? 'AktsomhetReduksjonAvBelopFormPanel.BelopSomSkalTilbakekreves'
                    : 'AktsomhetReduksjonAvBelopFormPanel.andelSomTilbakekreves'}
                />
              </Undertekst>
              <Normaltekst className={styles.labelPadding}>{harMerEnnEnYtelse ? formatCurrencyNoKr(feilutbetalingBelop) : '100%'}</Normaltekst>
            </Column>
            { handletUaktsomhetGrad === aktsomhet.GROVT_UAKTSOM && (
              <Column md="6">
                <RadioGroupPanel
                  name={`${name}.skalDetTilleggesRenter`}
                  label={<Undertekst><FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.SkalTilleggesRenter" /></Undertekst>}
                  validate={[required]}
                  radios={[{
                    label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />,
                    value: 'true',
                  }, {
                    label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />,
                    value: 'false',
                  }]}
                  isReadOnly={readOnly}
                  parse={(value: string) => value === 'true'}
                  isHorizontal
                />
              </Column>
            )}
          </Row>
        </ArrowBox>
      )}
    </>
  );
};

export default AktsomhetReduksjonAvBelopFormPanel;
