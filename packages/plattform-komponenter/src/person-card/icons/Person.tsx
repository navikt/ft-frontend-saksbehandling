import React from 'react';
import { FigureCombinationFillIcon } from '@navikt/aksel-icons';

interface Props {
  size?: number;
}

const PersonIcon = ({ size = 24 }: Props) => (
  <FigureCombinationFillIcon
    height={size}
    width={size}
    color="white"
    style={{ background: 'var(--a-gray-400)', borderRadius: '50%' }}
  />
);

export default PersonIcon;
