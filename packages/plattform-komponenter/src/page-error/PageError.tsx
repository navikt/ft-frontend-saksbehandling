import React from 'react';
import { Alert } from '@navikt/ds-react/esm';

interface PageErrorProps {
  message: string;
}

const PageError = ({ message }: PageErrorProps) => <Alert variant="error">{message}</Alert>;

export default PageError;
