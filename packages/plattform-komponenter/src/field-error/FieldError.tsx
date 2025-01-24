import React, { JSX } from 'react';
import styles from './fieldError.module.css';

interface FieldErrorProps {
  message?: string;
}

export const FieldError = ({ message }: FieldErrorProps): JSX.Element => <p className={styles.fieldError}>{message}</p>;
