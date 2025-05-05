import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import { finnBruttoForStatusIPeriode } from './FrisinnUtils';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

type Props = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

export const Inntektsopplysninger = ({ beregningsgrunnlag }: Props) => {
  // Vi ønsker alltid kun å vise data fra siste beregnede periode, dvs nest siste periode (koronologisk) i grunnlaget
  if (beregningsgrunnlag.beregningsgrunnlagPeriode.length < 2) {
    return null;
  }
  const kronologiskePerioder = beregningsgrunnlag.beregningsgrunnlagPeriode.sort((a, b) =>
    a.beregningsgrunnlagPeriodeFom.localeCompare(b.beregningsgrunnlagPeriodeFom),
  );
  const gjeldendePeriode = kronologiskePerioder[kronologiskePerioder.length - 2];
  const bruttoSN = finnBruttoForStatusIPeriode(
    AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    beregningsgrunnlag,
    gjeldendePeriode,
  );
  const bruttoFL = finnBruttoForStatusIPeriode(AktivitetStatus.FRILANSER, beregningsgrunnlag, gjeldendePeriode);
  const bruttoAT = finnBruttoForStatusIPeriode(AktivitetStatus.ARBEIDSTAKER, beregningsgrunnlag, gjeldendePeriode);

  return (
    <VStack gap="2">
      <Label size="small" className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Beregningsgrunnlag.Søknad.Inntektsopplysninger" />
      </Label>
      <HStack gap="2">
        <BodyShort size="small" className={beregningStyles.tabellAktivitet}>
          <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektAT" />
        </BodyShort>
        <Label size="small" className={beregningStyles.tabellInntekt}>
          <BeløpLabel beløp={bruttoAT} />
        </Label>
      </HStack>
      <HStack gap="2">
        <BodyShort size="small" className={beregningStyles.tabellAktivitet}>
          <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektFL" />
        </BodyShort>
        <Label size="small" className={beregningStyles.tabellInntekt}>
          <BeløpLabel beløp={bruttoFL} />
        </Label>
      </HStack>
      <HStack gap="2">
        <BodyShort size="small" className={beregningStyles.tabellAktivitet}>
          <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektSN" />
        </BodyShort>
        <Label size="small" className={beregningStyles.tabellInntekt}>
          <BeløpLabel beløp={bruttoSN} />
        </Label>
      </HStack>
    </VStack>
  );
};
