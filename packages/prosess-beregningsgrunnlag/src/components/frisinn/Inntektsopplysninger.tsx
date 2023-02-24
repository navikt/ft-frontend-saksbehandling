import React, { FunctionComponent } from 'react';
import { BodyShort, Label } from '@navikt/ds-react/esm';

import { FormattedMessage } from 'react-intl';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { finnBruttoForStatusIPeriode } from './FrisinnUtils';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

const Inntektsopplysninger: FunctionComponent<OwnProps> = ({ beregningsgrunnlag }) => {
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
export default Inntektsopplysninger;
