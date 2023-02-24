import React, { FunctionComponent } from 'react';
import { Detail } from '@navikt/ds-react/esm';

import { FormattedMessage } from 'react-intl';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import styles from './søknadsopplysninger.module.css';
import Søknadsopplysninger from './Søknadsopplysninger';
import Beregningsresultat from './Beregningsresultat';
import Inntektsopplysninger from './Inntektsopplysninger';
import Grenseverdi from './Grenseverdi';

const erDagsatsBeregnet = (bg: Beregningsgrunnlag) =>
  bg.beregningsgrunnlagPeriode.some(p => p.dagsats || p.dagsats === 0);

type OwnProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
};

const Frisinnpanel: FunctionComponent<OwnProps> = ({ beregningsgrunnlag }) => (
  <div className={styles.aksjonspunktBehandlerContainer}>
    <Detail size="small">
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

export default Frisinnpanel;
