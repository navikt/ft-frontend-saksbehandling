import React, { JSX } from 'react';

import styles from './fieldError.module.css';

interface FieldErrorProps {
  message?: string;
}

/**
 * @deprecated Bruk heller ErrorMessage frå Aksel: https://aksel.nav.no
 */
export const FieldError = ({ message }: FieldErrorProps): JSX.Element => <p className={styles.fieldError}>{message}</p>;
