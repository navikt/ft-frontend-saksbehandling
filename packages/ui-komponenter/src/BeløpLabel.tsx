import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { KopierbarTekst } from './KopierbarTekst';

import styles from './beløpLabel.module.css';

interface Props {
  beløp: string | number | undefined | null;
  kr?: boolean;
  rød?: boolean;
}

export const BeløpLabel = ({ beløp, kr = false, rød = false }: Props) => {
  const formattedBeløp = beløp?.toString().replace(/\s/g, '');

  return (
    <KopierbarTekst tekst={formattedBeløp}>
      <span className={rød ? styles.rød : styles.default}>
        {formattedBeløp ? formatCurrencyNoKr(formattedBeløp) : '-'}
        {formattedBeløp && kr && ' kr'}
      </span>
    </KopierbarTekst>
  );
};
