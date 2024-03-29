import React from 'react';
import { bemUtils } from '@navikt/ft-utils';
import styles from './card.module.css';

const cardCls = bemUtils('card');

interface CardProps {
  children: React.ReactNode;
  active?: boolean;
}

const Card = ({ children, active }: CardProps): JSX.Element => (
  <div className={active ? `${styles[cardCls.block]} ${styles[cardCls.modifier('active')]}` : styles[cardCls.block]}>
    {children}
  </div>
);

export default Card;
