import React from 'react';
import { bemUtils } from '@navikt/ft-utils';
import ChildIcon from './icons/Child';
import ManIcon from './icons/Man';
import WomanIcon from './icons/Woman';
import UnknownIcon from './icons/Unknown';
import styles from './personCard.less';

const cardCls = bemUtils('personCard');

export type GenderType = 'male' | 'female' | 'unknown';

interface GenderIconProps {
    gender?: GenderType;
    isChild?: boolean;
}

const GenderIcon = ({ gender, isChild }: GenderIconProps): JSX.Element => {
  let icon;
  if (isChild) {
    icon = <ChildIcon />;
  } else if (gender === 'male') {
    icon = <ManIcon />;
  } else if (gender === 'female') {
    icon = <WomanIcon />;
  }
  return (
    <div
      className={
                !icon
                  ? `${styles[cardCls.element('gender-icon')]} ${styles['personCard__gender-icon--unknown']}`
                  : styles[cardCls.element('gender-icon')]
            }
    >
      {icon || <UnknownIcon />}
    </div>
  );
};

export default GenderIcon;
