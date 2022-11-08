import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Detail, Heading, Label } from '@navikt/ds-react';

import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { formatCurrencyNoKr } from '@navikt/ft-utils';
import { BeregningsgrunnlagAndel, PgiVerdier } from '@navikt/ft-types';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import Ledelinje from '../fellesPaneler/Ledelinje';

const createHeaderRow = (): React.ReactNode => (
  <FlexRow>
    <FlexColumn className={beregningStyles.næringTabellAktivitet}>
      <Detail className={beregningStyles.etikettLiten}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar" />
      </Detail>
    </FlexColumn>
    <FlexColumn className={beregningStyles.næringTabellInntekt}>
      <Detail className={beregningStyles.etikettLiten}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.TotalPensjonsGivende" />
      </Detail>
    </FlexColumn>
  </FlexRow>
);

const createSumRow = (pgiSnitt: number): React.ReactNode => (
  <>
    <Ledelinje prosentBredde={60} />
    <FlexRow>
      <FlexColumn className={beregningStyles.næringTabellAktivitet}>
        <Label size="small">
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SnittPensjonsGivende" />
        </Label>
      </FlexColumn>
      <FlexColumn className={beregningStyles.næringTabellInntekt}>
        <Label size="small">{formatCurrencyNoKr(pgiSnitt)}</Label>
      </FlexColumn>
    </FlexRow>
  </>
);
const createInntektRows = (pgiVerdier: PgiVerdier[]): React.ReactNode => (
  <>
    {pgiVerdier.map(element => (
      <FlexRow key={element.årstall}>
        <FlexColumn className={beregningStyles.næringTabellAktivitet}>
          <BodyShort size="small">{element.årstall}</BodyShort>
        </FlexColumn>
        <FlexColumn className={beregningStyles.næringTabellInntekt}>
          <BodyShort size="small">{formatCurrencyNoKr(element.beløp)}</BodyShort>
        </FlexColumn>
      </FlexRow>
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
  const andel = alleAndeler.find(
    a =>
      a.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE ||
      a.aktivitetStatus === AktivitetStatus.BRUKERS_ANDEL,
  );
  if (!andel || !andel.pgiSnitt || !andel.pgiVerdier) {
    return null;
  }
  const { pgiVerdier, pgiSnitt } = andel;
  return (
    <>
      <Heading size="medium">
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt" />
      </Heading>
      <VerticalSpacer fourPx />
      {createHeaderRow()}
      <Ledelinje prosentBredde={60} />
      {!!pgiVerdier && <>{createInntektRows(pgiVerdier)}</>}
      {pgiSnitt !== undefined && <>{createSumRow(pgiSnitt)}</>}
    </>
  );
};

export default GrunnlagForAarsinntektPanelSN;
