import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

interface WarningIconProps {
  alt?: string;
}

/**
 * @deprecated Bruk heller ikona frå Aksel: https://aksel.nav.no/ikoner
 */
export const WarningIcon = ({ alt }: WarningIconProps) => (
  <ExclamationmarkTriangleFillIcon
    title={alt}
    fontSize="1.5rem"
    style={{ color: 'var(--ac-alert-icon-warning-color,var(--a-icon-warning))' }}
  />
);
