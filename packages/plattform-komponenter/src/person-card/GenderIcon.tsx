import React from 'react';
import { Gender } from './PersonCard';
import {
  FigureChildFillIcon,
  FigureCombinationFillIcon,
  FigureOutwardFillIcon,
  SilhouetteFillIcon,
} from '@navikt/aksel-icons';

interface Props {
  gender?: Gender;
  isChild?: boolean;
  size?: number;
}

const GenderIcon = ({ gender, isChild = false, size = 24 }: Props) => {
  let Icon = FigureCombinationFillIcon;

  let backgroundColor = 'var(--a-gray-400)';
  if (isChild) {
    Icon = FigureChildFillIcon;
  } else if (gender === Gender.male) {
    Icon = SilhouetteFillIcon;
    backgroundColor = 'var(--a-blue-400)';
  } else if (gender === Gender.female) {
    Icon = FigureOutwardFillIcon;
    backgroundColor = 'var(--a-red-300)';
  }

  return <Icon height={size} width={size} color="white" style={{ backgroundColor, borderRadius: '50%' }} />;
};

export default GenderIcon;
