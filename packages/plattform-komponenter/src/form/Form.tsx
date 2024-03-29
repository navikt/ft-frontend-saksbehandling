import React from 'react';
import { Button } from '@navikt/ds-react';
import styles from './form.module.css';
import Box, { Margin } from '../box/Box';

export interface FormProps {
  children: React.ReactNode;
  buttonLabel?: string;
  onSubmit: (e?: any) => void;
  shouldShowSubmitButton?: boolean;
  onAvbryt?: () => void;
  submitButtonDisabled?: boolean;
  cancelButtonDisabled?: boolean;
}

const Form = ({
  children,
  onSubmit,
  buttonLabel,
  shouldShowSubmitButton,
  onAvbryt,
  submitButtonDisabled,
  cancelButtonDisabled,
}: FormProps): JSX.Element => (
  <form onSubmit={onSubmit}>
    {children}
    {shouldShowSubmitButton !== false && (
      <Box marginTop={Margin.xxLarge}>
        <div className={styles.buttonContainer}>
          <Button id="submitButton" disabled={submitButtonDisabled === true} loading={submitButtonDisabled === true}>
            {buttonLabel}
          </Button>
          {onAvbryt && (
            <div className={styles.buttonContainer__avbryt}>
              <Button variant="secondary" onClick={onAvbryt} disabled={cancelButtonDisabled === true}>
                Avbryt
              </Button>
            </div>
          )}
        </div>
      </Box>
    )}
  </form>
);

export default Form;
