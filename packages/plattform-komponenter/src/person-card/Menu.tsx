import React from 'react';
import { bemUtils } from '@navikt/ft-utils';
import OtherIcon from './icons/Other';
import styles from './menu.module.css';

const menuCls = bemUtils('menu');

interface MenuProps {
  onClick: () => void;
  isOpen: boolean;
}

const Menu = ({ onClick, isOpen }: MenuProps): JSX.Element => (
  <button
    className={styles[menuCls.block]}
    type="button"
    onClick={onClick}
    aria-haspopup="dialog"
    aria-expanded={isOpen}
    aria-label="Meny"
  >
    <OtherIcon />
  </button>
);

export default Menu;
