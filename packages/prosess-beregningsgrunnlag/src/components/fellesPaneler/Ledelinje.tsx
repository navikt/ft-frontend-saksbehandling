import styles from './ledelinje.module.css';

export interface Props {
  prosentBredde: number;
}

/**
 * Ledelinje
 *
 * Presentasjonskomponent. Legger inn en horisontal ledelinje for å skille på innhold.
 */
export const Ledelinje = ({ prosentBredde }: Props) => {
  const styleBredde = `${prosentBredde}%`;
  return (
    <div style={{ width: styleBredde }}>
      <div className={styles.colDevider} />
    </div>
  );
};
