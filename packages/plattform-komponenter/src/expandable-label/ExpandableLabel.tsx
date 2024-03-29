import React from 'react';
import { Collapse } from 'react-collapse';
import ChevronIconBlue from '../icons/ChevronIconBlue';
import styles from './expandableLabel.module.css';

interface HelptextProps {
  labelText: React.ReactNode;
  helptext: string;
  labelFor: string;
}

const ExpandableLabel = ({ helptext, labelText, labelFor }: HelptextProps): JSX.Element => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.expandableLabel}>
      <label htmlFor={labelFor}>{labelText}</label>
      {/* @ts-ignore */}
      <Collapse isOpened={open}>
        <p className={styles.expandableLabel__helptext}>{helptext}</p>
      </Collapse>

      <button
        className={styles.expandableLabel__button}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? 'Lukk hjelpetekst' : 'Mer hjelpetekst'}
        <span
          className={
            open
              ? `${styles.expandableLabel__chevron} ${styles['expandableLabel__chevron--open']}`
              : styles.expandableLabel__chevron
          }
        >
          <ChevronIconBlue />
        </span>
      </button>
    </div>
  );
};

export default ExpandableLabel;
