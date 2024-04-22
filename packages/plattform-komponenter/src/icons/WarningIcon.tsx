import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import React from 'react';

interface WarningIconProps {
  alt?: string;
}

const WarningIcon = ({ alt }: WarningIconProps) => (
  <ExclamationmarkTriangleFillIcon
    title={alt}
    fontSize="1.5rem"
    style={{ color: 'var(--ac-alert-icon-warning-color,var(--a-icon-warning))' }}
  />
);

export default WarningIcon;
