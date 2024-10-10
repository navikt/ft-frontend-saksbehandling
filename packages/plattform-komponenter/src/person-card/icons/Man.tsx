import React from 'react';
import { SilhouetteFillIcon } from '@navikt/aksel-icons';

interface Props {
  size?: number;
}

const ManIcon = ({ size = 24 }: Props) => (
  <SilhouetteFillIcon
    height={size}
    width={size}
    color="white"
    style={{ background: 'var(--a-blue-400)', borderRadius: '50%' }}
  />
);

export default ManIcon;
