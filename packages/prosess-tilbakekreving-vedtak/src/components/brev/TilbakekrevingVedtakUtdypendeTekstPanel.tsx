import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Detail } from '@navikt/ds-react';

import { TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import styles from './tilbakekrevingVedtakUtdypendeTekstPanel.module.css';

const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

const valideringsregler = [minLength3, hasValidText];
const valideringsreglerPakrevet = [required, minLength3, hasValidText];

export interface Props {
  type: string;
  readOnly: boolean;
  fritekstPakrevet?: boolean;
  maximumLength?: number;
}

export const TilbakekrevingVedtakUtdypendeTekstPanel = ({ type, readOnly, fritekstPakrevet, maximumLength }: Props) => {
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
