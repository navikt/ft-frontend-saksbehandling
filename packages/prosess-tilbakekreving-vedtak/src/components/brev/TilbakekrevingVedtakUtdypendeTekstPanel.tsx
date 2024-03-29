import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Detail } from '@navikt/ds-react';
import { PlusCircleIcon } from '@navikt/aksel-icons';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { required, hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { TextAreaField } from '@navikt/ft-form-hooks';

import { useFormContext } from 'react-hook-form';
import styles from './tilbakekrevingVedtakUtdypendeTekstPanel.module.css';

const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

const valideringsregler = [minLength3, hasValidText];
const valideringsreglerPakrevet = [required, minLength3, hasValidText];

export interface OwnProps {
  type: string;
  readOnly: boolean;
  fritekstPakrevet?: boolean;
  maximumLength?: number;
}

const TilbakekrevingVedtakUtdypendeTekstPanel: FunctionComponent<OwnProps> = ({
  type,
  readOnly,
  fritekstPakrevet,
  maximumLength,
}) => {
  const intl = useIntl();
  const { watch } = useFormContext();
  const isEmpty = watch(type) === undefined;

  const [isTextfieldHidden, hideTextField] = useState(isEmpty && !fritekstPakrevet);
  const valideringsRegler = fritekstPakrevet ? valideringsreglerPakrevet : valideringsregler;
  valideringsRegler.push(maximumLength ? maxLength(maximumLength) : maxLength4000);
  return (
    <>
      {isTextfieldHidden && !readOnly && (
        <>
          <VerticalSpacer eightPx />
          <div
            onClick={event => {
              event.preventDefault();
              hideTextField(false);
            }}
            onKeyDown={event => {
              event.preventDefault();
              hideTextField(false);
            }}
            className={styles.addPeriode}
            role="button"
            tabIndex={0}
          >
            <PlusCircleIcon
              className={styles.addCircleIcon}
              title={intl.formatMessage({ id: 'TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst' })}
            />
            <Detail size="small" className={styles.imageText}>
              <FormattedMessage id="TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst" />
            </Detail>
          </div>
        </>
      )}
      {!isTextfieldHidden && (
        <>
          <VerticalSpacer eightPx />
          <TextAreaField
            name={type}
            label={intl.formatMessage({ id: 'TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst' })}
            validate={valideringsRegler}
            maxLength={maximumLength || 4000}
            readOnly={readOnly}
          />
        </>
      )}
    </>
  );
};

export default TilbakekrevingVedtakUtdypendeTekstPanel;
