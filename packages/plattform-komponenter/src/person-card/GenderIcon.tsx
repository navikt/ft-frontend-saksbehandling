import React from 'react';
import ChildIcon from './icons/Child';
import ManIcon from './icons/Man';
import WomanIcon from './icons/Woman';
import PersonIcon from './icons/Person';
import { Gender } from './PersonCard';

interface Props {
  gender?: Gender;
  isChild?: boolean;
  size?: number;
}

const GenderIcon = ({ gender, isChild = false, size = 24 }: Props) => {
  let Icon = PersonIcon;
  if (isChild) {
    Icon = ChildIcon;
  } else if (gender === Gender.male) {
    Icon = ManIcon;
  } else if (gender === Gender.female) {
    Icon = WomanIcon;
  }
  return <Icon size={size} />;
};

export default GenderIcon;
