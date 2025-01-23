import { Alert } from '@navikt/ds-react';

interface PageErrorProps {
  message: string;
}

export const PageError = ({ message }: PageErrorProps) => <Alert variant="error">{message}</Alert>;
