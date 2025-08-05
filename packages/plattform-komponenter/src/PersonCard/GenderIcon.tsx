import {
  FigureChildFillIcon,
  FigureCombinationFillIcon,
  FigureOutwardFillIcon,
  SilhouetteFillIcon,
} from '@navikt/aksel-icons';

import { Gender } from './Gender';

interface Props {
  gender?: Gender;
  isChild?: boolean;
  size?: number;
}

export const GenderIcon = ({ gender, isChild = false, size = 30 }: Props) => {
  let Icon = FigureCombinationFillIcon;

  let backgroundColor = 'var(--ax-neutral-500)';
  if (isChild) {
    Icon = FigureChildFillIcon;
  } else if (gender === Gender.male) {
    Icon = SilhouetteFillIcon;
    backgroundColor = 'var(--ax-accent-500)';
  } else if (gender === Gender.female) {
    Icon = FigureOutwardFillIcon;
    backgroundColor = 'var(--ax-danger-400)';
  }

  return <Icon height={size} width={size} color="white" style={{ backgroundColor, borderRadius: '50%' }} />;
};
