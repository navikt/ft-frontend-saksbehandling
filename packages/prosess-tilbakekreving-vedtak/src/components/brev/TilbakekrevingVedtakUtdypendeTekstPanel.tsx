import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Undertekst } from 'nav-frontend-typografi';
import { Image, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { required, hasValidText, maxLength, minLength } from '@navikt/ft-form-validators';
import { TextAreaField, formHooks } from '@navikt/ft-form-hooks';

import addCircleIcon from '../../images/add-circle.svg';
import styles from './tilbakekrevingVedtakUtdypendeTekstPanel.less';

const minLength3 = minLength(3);
const maxLength4000 = maxLength(4000);

const valideringsregler = [minLength3, hasValidText];
const valideringsreglerPakrevet = [required, minLength3, hasValidText];

interface OwnProps {
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
  const { watch } = formHooks.useFormContext();
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
            <Image
              className={styles.addCircleIcon}
              src={addCircleIcon}
              alt={intl.formatMessage({ id: 'TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst' })}
            />
            <Undertekst className={styles.imageText}>
              <FormattedMessage id="TilbakekrevingVedtakUtdypendeTekstPanel.LeggTilUtdypendeTekst" />
            </Undertekst>
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
