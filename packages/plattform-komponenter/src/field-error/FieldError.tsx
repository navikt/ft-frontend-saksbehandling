import React, { ReactElement } from 'react';
import styles from './fieldError.module.css';

interface FieldErrorProps {
  message?: string;
}

const FieldError = ({ message }: FieldErrorProps): ReactElement<any> => <p className={styles.fieldError}>{message}</p>;

export default FieldError;
