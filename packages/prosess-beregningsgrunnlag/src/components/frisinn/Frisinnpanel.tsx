import React, { FunctionComponent } from 'react';
import { Undertittel } from 'nav-frontend-typografi';
import { FormattedMessage } from 'react-intl';
import Panel from 'nav-frontend-paneler';
import { Beregningsgrunnlag } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import styles from './søknadsopplysninger.less';
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
    <Panel>
      <Undertittel>
        <FormattedMessage id="Beregningsgrunnlag.Frisinn.Tittel" />
      </Undertittel>
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
    </Panel>
  </div>
);

export default Frisinnpanel;
