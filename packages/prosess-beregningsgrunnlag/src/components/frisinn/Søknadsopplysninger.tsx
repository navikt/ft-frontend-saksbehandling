import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, VStack } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { dateFormat } from '@navikt/ft-utils';

import { FrisinnGrunnlag, FrisinnPeriode } from './FrisinnUtils';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

const lagPerioderadMedTekst = (tekstId: string, fom: string, tom: string) => (
  <BodyShort size="small">
    <FormattedMessage
      id={tekstId}
      values={{
        fom: dateFormat(fom),
        tom: dateFormat(tom),
      }}
    />
  </BodyShort>
);

const lagSøktYtelseRadPeriode = (periode: FrisinnPeriode) => {
  const snAndel = periode.frisinnAndeler.find(
    andel => andel.statusSøktFor === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  const flAndel = periode.frisinnAndeler.find(andel => andel.statusSøktFor === AktivitetStatus.FRILANSER);
  return (
    <div key={periode.fom}>
      {flAndel && lagPerioderadMedTekst('Beregningsgrunnlag.Søknad.SøktYtelseFL', periode.fom, periode.tom)}
      {snAndel && lagPerioderadMedTekst('Beregningsgrunnlag.Søknad.SøktYtelseSN', periode.fom, periode.tom)}
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
    <VStack gap="2">
      <Label size="small" className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Beregningsgrunnlag.Søknad.Tittel" />
      </Label>
      {Array.isArray(frisinnPerioder) && frisinnPerioder.map(periode => lagSøktYtelseRadPeriode(periode))}
    </VStack>
  );
};
