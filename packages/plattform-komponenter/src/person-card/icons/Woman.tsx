import React from 'react';
import { FigureOutwardFillIcon } from '@navikt/aksel-icons';

interface Props {
  size?: number;
}

const WomanIcon = ({ size = 24 }: Props) => (
  <FigureOutwardFillIcon
    height={size}
    width={size}
    color="white"
    style={{ background: 'var(--a-red-300)', borderRadius: '50%' }}
  />
);
export default WomanIcon;
