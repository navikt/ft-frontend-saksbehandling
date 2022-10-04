import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { BodyShort, Label } from '@navikt/ds-react';

import { FormattedMessage } from 'react-intl';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { finnBruttoForStatusIPeriode } from './FrisinnUtils';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

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
      <Row>
        <Column xs="12">
          <Label size="small" className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.Søknad.Inntektsopplysninger" />
          </Label>
        </Column>
      </Row>
      <Row>
        <Column xs="10">
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektAT" />
          </BodyShort>
        </Column>
        <Column xs="2">
          <Label size="small">{formatCurrencyNoKr(bruttoAT)}</Label>
        </Column>
      </Row>
      <Row>
        <Column xs="10">
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektFL" />
          </BodyShort>
        </Column>
        <Column xs="2">
          <Label size="small">{formatCurrencyNoKr(bruttoFL)}</Label>
        </Column>
      </Row>
      <Row>
        <Column xs="10">
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektSN" />
          </BodyShort>
        </Column>
        <Column xs="2">
          <Label size="small">{formatCurrencyNoKr(bruttoSN)}</Label>
        </Column>
      </Row>
    </div>
  );
};
export default Inntektsopplysninger;
