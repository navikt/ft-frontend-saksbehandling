import { Detail } from '@navikt/ds-react';

import { Beregningsgrunnlag } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { Beregningsresultat } from './Beregningsresultat';
import { Grenseverdi } from './Grenseverdi';
import { Inntektsopplysninger } from './Inntektsopplysninger';
import { Søknadsopplysninger } from './Søknadsopplysninger';
import styles from './søknadsopplysninger.module.css';

const erDagsatsBeregnet = (bg: Beregningsgrunnlag) =>
  bg.beregningsgrunnlagPeriode.some(p => p.dagsats || p.dagsats === 0);

type Props = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

export const Frisinnpanel = ({ beregningsgrunnlag }: Props) => (
  <div className={styles.aksjonspunktBehandlerContainer}>
    <Detail>
      <FormattedMessage id="Beregningsgrunnlag.Frisinn.Tittel" />
    </Detail>
    <VerticalSpacer sixteenPx />
    <Søknadsopplysninger beregningsgrunnlag={beregningsgrunnlag} />
    <VerticalSpacer sixteenPx />
    <Inntektsopplysninger beregningsgrunnlag={beregningsgrunnlag} />
    <VerticalSpacer sixteenPx />
    {erDagsatsBeregnet(beregningsgrunnlag) && (
      <>
        <Grenseverdi beregningsgrunnlag={beregningsgrunnlag} />
        <VerticalSpacer sixteenPx />
        <Beregningsresultat beregningsgrunnlag={beregningsgrunnlag} />
      </>
    )}
  </div>
);
