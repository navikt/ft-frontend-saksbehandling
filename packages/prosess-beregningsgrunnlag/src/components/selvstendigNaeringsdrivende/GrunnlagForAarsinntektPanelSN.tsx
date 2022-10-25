import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Label, BodyShort, Detail, Heading } from '@navikt/ds-react';

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
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.AarHeader" />
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
    <Ledelinje prosentBredde={55} />
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
  const snAndel = alleAndeler.find(andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
  if (!snAndel) {
    return null;
  }
  const { pgiVerdier, pgiSnitt } = snAndel;
  return (
    <>
      <Heading size="medium">
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Pensjonsgivendeinntekt" />
      </Heading>
      <FlexRow key="SNInntektIngress">
        <FlexColumn>
          <Detail>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.SN.sisteTreAar" />
          </Detail>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer fourPx />
      {createHeaderRow()}
      <Ledelinje prosentBredde={55} />
      {!!pgiVerdier && <>{createInntektRows(pgiVerdier)}</>}
      {pgiSnitt !== undefined && <>{createSumRow(pgiSnitt)}</>}
    </>
  );
};

export default GrunnlagForAarsinntektPanelSN;
