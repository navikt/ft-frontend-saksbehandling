import { type SyntheticEvent, useState } from 'react';
import type { FieldPath } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

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
  const { watch, control } = useFormContext<FormValues>();

  const isEmpty = watch(name) === undefined;

  const [isTextfieldHidden, hideTextField] = useState(isEmpty && !fritekstPakrevet);
  const valideringsRegler = fritekstPakrevet ? valideringsreglerPakrevet : valideringsregler;
  valideringsRegler.push(maximumLength ? maxLength(maximumLength) : maxLength4000);

  const handleOnClick = (event: SyntheticEvent) => {
    event.preventDefault();
    hideTextField(false);
  };

  return (
    <>
      {isTextfieldHidden && !readOnly && (
        <div>
          <Button
            icon={<PlusCircleIcon aria-hidden />}
            variant="tertiary"
            type="button"
            size="xsmall"
            onClick={handleOnClick}
            className={styles.addPeriodeButton}
          >
            <FormattedMessage id="TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst" />
          </Button>
        </div>
      )}
      {!isTextfieldHidden && (
        <RhfTextarea
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
