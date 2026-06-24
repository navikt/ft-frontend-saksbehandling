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
  let title = 'Ukjent kjønn';
  if (isChild) {
    Icon = FigureChildFillIcon;
    title = 'Barn';
  } else if (gender === Gender.male) {
    Icon = SilhouetteFillIcon;
    backgroundColor = 'var(--ax-accent-500)';
    title = 'Mann';
  } else if (gender === Gender.female) {
    Icon = FigureOutwardFillIcon;
    backgroundColor = 'var(--ax-danger-500)';
    title = 'Kvinne';
  }

  return (
    <Icon height={size} width={size} color="white" title={title} style={{ backgroundColor, borderRadius: '50%' }} />
  );
};
