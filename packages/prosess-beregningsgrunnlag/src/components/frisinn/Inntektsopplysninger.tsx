import { BodyShort, Label } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { FormattedMessage } from 'react-intl';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import { finnBruttoForStatusIPeriode } from './FrisinnUtils';

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
    <div>
      <FlexRow>
        <FlexColumn>
          <Label size="small" className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.Søknad.Inntektsopplysninger" />
          </Label>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn className={beregningStyles.tabellAktivitet}>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektAT" />
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={beregningStyles.tabellInntekt}>
          <Label size="small">{formatCurrencyNoKr(bruttoAT)}</Label>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn className={beregningStyles.tabellAktivitet}>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektFL" />
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={beregningStyles.tabellInntekt}>
          <Label size="small">{formatCurrencyNoKr(bruttoFL)}</Label>
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn className={beregningStyles.tabellAktivitet}>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektSN" />
          </BodyShort>
        </FlexColumn>
        <FlexColumn className={beregningStyles.tabellInntekt}>
          <Label size="small">{formatCurrencyNoKr(bruttoSN)}</Label>
        </FlexColumn>
      </FlexRow>
    </div>
  );
};
