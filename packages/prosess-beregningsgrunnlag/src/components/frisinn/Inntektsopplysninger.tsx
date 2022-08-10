import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Element, Normaltekst } from 'nav-frontend-typografi';

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
          <Element className={beregningStyles.avsnittOverskrift}>
            <FormattedMessage id="Beregningsgrunnlag.Søknad.Inntektsopplysninger" />
          </Element>
        </Column>
      </Row>
      <Row>
        <Column xs="10">
          <Normaltekst>
            <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektAT" />
          </Normaltekst>
        </Column>
        <Column xs="2">
          <Element>{formatCurrencyNoKr(bruttoAT)}</Element>
        </Column>
      </Row>
      <Row>
        <Column xs="10">
          <Normaltekst>
            <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektFL" />
          </Normaltekst>
        </Column>
        <Column xs="2">
          <Element>{formatCurrencyNoKr(bruttoFL)}</Element>
        </Column>
      </Row>
      <Row>
        <Column xs="10">
          <Normaltekst>
            <FormattedMessage id="Beregningsgrunnlag.Frisinn.InntektSN" />
          </Normaltekst>
        </Column>
        <Column xs="2">
          <Element>{formatCurrencyNoKr(bruttoSN)}</Element>
        </Column>
      </Row>
    </div>
  );
};
export default Inntektsopplysninger;
