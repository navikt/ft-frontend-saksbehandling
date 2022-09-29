import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Label, BodyShort, Detail } from '@navikt/ds-react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { BeregningsgrunnlagAndel, PgiVerdier } from '@navikt/ft-types';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

const createHeaderRow = (): React.ReactNode => (
  <Row key="SNInntektHeader">
    <Column xs="10">
      <Detail size="small" className={beregningStyles.etikettLiten}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AarHeader" />
      </Detail>
    </Column>
    <Column xs="2" className={beregningStyles.colAarText}>
      <Detail size="small" className={beregningStyles.etikettLiten}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende" />
      </Detail>
    </Column>
  </Row>
);
const createSumRow = (pgiSnitt: number): React.ReactNode => (
  <>
    <Row key="grunnlagAarsinntektSNLine">
      <Column xs="12" className={beregningStyles.noPaddingRight}>
        <div className={beregningStyles.colDevider} />
      </Column>
    </Row>
    <Row key="grunnlagAarsinntektSN">
      <Column xs="10">
        <Label size="small">
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende" />
        </Label>
      </Column>
      <Column xs="2" className={beregningStyles.colAarText}>
        <Label size="small">{formatCurrencyNoKr(pgiSnitt)}</Label>
      </Column>
    </Row>
  </>
);
const createInntektRows = (pgiVerdier: PgiVerdier[]): React.ReactNode => (
  <>
    {pgiVerdier.map(element => (
      <Row key={element.årstall}>
        <Column xs="7">
          <Detail size="small">{element.årstall}</Detail>
        </Column>
        <Column xs="5" className={beregningStyles.colAarText}>
          <Detail size="small">{formatCurrencyNoKr(element.beløp)}</Detail>
        </Column>
      </Row>
    ))}
  </>
);

type OwnProps = {
  alleAndeler: BeregningsgrunnlagAndel[];
};

/**
 * GrunnlagForAarsinntektPanelSN
 *
 * Presentasjonskomponent. Viser PGI-verdier for selvstendig næringsdrivende.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer selvstendig næringsdrivende.
 */
const GrunnlagForAarsinntektPanelSN: FunctionComponent<OwnProps> = ({ alleAndeler }) => {
  const snAndel = alleAndeler.find(andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  if (!snAndel) {
    return null;
  }
  const { pgiVerdier, pgiSnitt } = snAndel;
  return (
    <>
      <Label size="medium" className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt" />
      </Label>
      <Row key="SNInntektIngress">
        <Column xs="8">
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar" />
          </BodyShort>
        </Column>
      </Row>
      <VerticalSpacer fourPx />
      {createHeaderRow()}
      {!!pgiVerdier && <>{createInntektRows(pgiVerdier)}</>}
      {pgiSnitt !== undefined && <>{createSumRow(pgiSnitt)}</>}
    </>
  );
};

export default GrunnlagForAarsinntektPanelSN;
