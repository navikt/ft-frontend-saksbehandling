import React, { JSX } from 'react';
import styles from './fieldError.module.css';

interface FieldErrorProps {
  message?: string;
}

const FieldError = ({ message }: FieldErrorProps): JSX.Element => <p className={styles.fieldError}>{message}</p>;

export default FieldError;
