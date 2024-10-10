import React from 'react';
import { FigureChildFillIcon } from '@navikt/aksel-icons';

interface Props {
  size?: number;
}

const ChildIcon = ({ size = 24 }: Props) => (
  <FigureChildFillIcon
    height={size}
    width={size}
    color="white"
    style={{ background: 'var(--a-gray-400)', borderRadius: '50%' }}
  />
);

export default ChildIcon;
