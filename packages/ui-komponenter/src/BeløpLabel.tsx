import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { NoWrap } from './NoWrap';

interface Props {
  beløp: string | number | undefined;
  withKr?: boolean;
}

export const BeløpLabel = ({ beløp, withKr = false }: Props) => {
  const formattedBeløp = beløp?.toString().replace(/\s/g, '');
  return (
    <NoWrap>
      {formattedBeløp ? formatCurrencyNoKr(formattedBeløp) : '-'}
      {formattedBeløp && withKr && ' kr'}
    </NoWrap>
  );
};
