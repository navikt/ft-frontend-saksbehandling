import { Alert } from '@navikt/ds-react';

interface PageErrorProps {
  message: string;
}

/**
 * @deprecated Bruk heller Alert frå Aksel direkte https://aksel.nav.no/komponenter/core/alert
 */
export const PageError = ({ message }: PageErrorProps) => <Alert variant="error">{message}</Alert>;
