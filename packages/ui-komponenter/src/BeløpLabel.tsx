import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { KopierbarTekst } from './KopierbarTekst';

import styles from './beløpLabel.module.css';

interface Props {
  beløp: string | number | undefined | null;
  kr?: boolean;
  rød?: boolean;
}

/**
 * MERK: Endringer i hvordan beløp/enhet eksponeres for skjermleser må testes med skjermleser,
 * ikke bare automatiske tester. Se FAGSYSTEM-443070.
 */
export const BeløpLabel = ({ beløp, kr = false, rød = false }: Props) => {
  const formattedBeløp = formatCurrencyNoKr(beløp);

  return (
    <KopierbarTekst tekst={formattedBeløp}>
      <span className={rød ? styles.rød : styles.default}>
        {formattedBeløp || '-'}
        {formattedBeløp && kr && ' '}
        {formattedBeløp && kr && <span aria-label="kroner">kr</span>}
      </span>
    </KopierbarTekst>
  );
};
