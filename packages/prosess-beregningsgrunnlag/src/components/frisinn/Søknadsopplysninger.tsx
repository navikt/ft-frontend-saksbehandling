import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, VStack } from '@navikt/ds-react';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { dateFormat } from '@navikt/ft-utils';

import { type FrisinnGrunnlag, type FrisinnPeriode } from './FrisinnUtils';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

const lagPerioderadMedTekst = (tekstId: string, fom: string, tom: string) => (
  <BodyShort size="small">
    <FormattedMessage
      id={tekstId}
      values={{
        periode: dateFormat(fom),
        tom: dateFormat(tom),
      }}
    />
  </BodyShort>
);

const lagSøktYtelseRadPeriode = (periode: FrisinnPeriode) => {
  const snAndel = periode.frisinnAndeler.find(andel => andel.statusSøktFor === 'SN');
  const flAndel = periode.frisinnAndeler.find(andel => andel.statusSøktFor === 'FL');
  return (
    <div key={periode.fom}>
      {flAndel && lagPerioderadMedTekst('Søknad.SøktYtelseFL', periode.fom, periode.tom)}
      {snAndel && lagPerioderadMedTekst('Søknad.SøktYtelseSN', periode.fom, periode.tom)}
    </div>
  );
};

type Props = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

export const Søknadsopplysninger = ({ beregningsgrunnlag }: Props) => {
  const ytelsegrunnlag = beregningsgrunnlag.ytelsesspesifiktGrunnlag as FrisinnGrunnlag;
  const { frisinnPerioder } = ytelsegrunnlag;
  return (
    <VStack gap="space-8">
      <Label size="small" className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Søknad.Tittel" />
      </Label>
      {Array.isArray(frisinnPerioder) && frisinnPerioder.map(periode => lagSøktYtelseRadPeriode(periode))}
    </VStack>
  );
};
