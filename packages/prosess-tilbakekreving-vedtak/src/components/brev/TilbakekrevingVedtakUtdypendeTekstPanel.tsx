import { useState } from 'react';
import type { FieldPath } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Detail, HStack } from '@navikt/ds-react';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';

import type { FormValues } from './TilbakekrevingEditerVedtaksbrevPanel';

import styles from './tilbakekrevingVedtakUtdypendeTekstPanel.module.css';

const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

const valideringsregler = [minLength3, hasValidText];
const valideringsreglerPakrevet = [required, minLength3, hasValidText];

interface Props {
  name: FieldPath<FormValues>;
  readOnly: boolean;
  fritekstPakrevet?: boolean;
  maximumLength?: number;
}

export const TilbakekrevingVedtakUtdypendeTekstPanel = ({ name, readOnly, fritekstPakrevet, maximumLength }: Props) => {
  const intl = useIntl();

  const { watch, control } = useFormContext<FormValues>();

  const isEmpty = watch(name) === undefined;

  const [isTextfieldHidden, hideTextField] = useState(isEmpty && !fritekstPakrevet);
  const valideringsRegler = fritekstPakrevet ? valideringsreglerPakrevet : valideringsregler;
  valideringsRegler.push(maximumLength ? maxLength(maximumLength) : maxLength4000);

  return (
    <>
      {isTextfieldHidden && !readOnly && (
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
          <HStack gap="space-8" align="center">
            <PlusCircleIcon
              className={styles.addCircleIcon}
              title={intl.formatMessage({ id: 'TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst' })}
            />
            <Detail as="span">
              <FormattedMessage id="TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst" />
            </Detail>
          </HStack>
        </div>
      )}
      {!isTextfieldHidden && (
        <RhfTextarea
          className={styles.textfield}
          name={name}
          control={control}
          label={<FormattedMessage id="TilbakekrevingVedtakUtdypendeTekstPanel.UtdypendeTekst" />}
          validate={valideringsRegler}
          maxLength={maximumLength || 4000}
          readOnly={readOnly}
        />
      )}
    </>
  );
};
