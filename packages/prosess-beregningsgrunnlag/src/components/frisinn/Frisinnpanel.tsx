import { FormattedMessage } from 'react-intl';

import { Detail, VStack } from '@navikt/ds-react';

import { Beregningsgrunnlag } from '@navikt/ft-types';

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
  <VStack gap="4" className={styles.aksjonspunktBehandlerContainer}>
    <Detail>
      <FormattedMessage id="Beregningsgrunnlag.Frisinn.Tittel" />
    </Detail>
    <Søknadsopplysninger beregningsgrunnlag={beregningsgrunnlag} />
    <Inntektsopplysninger beregningsgrunnlag={beregningsgrunnlag} />
    {erDagsatsBeregnet(beregningsgrunnlag) && (
      <>
        <Grenseverdi beregningsgrunnlag={beregningsgrunnlag} />
        <Beregningsresultat beregningsgrunnlag={beregningsgrunnlag} />
      </>
    )}
  </VStack>
);
