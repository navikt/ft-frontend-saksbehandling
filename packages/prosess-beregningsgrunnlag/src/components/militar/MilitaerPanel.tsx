import { FormattedMessage } from 'react-intl';

import { Heading, Label, VStack } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

type Props = {
  alleAndeler: BeregningsgrunnlagAndel[];
};

/**
 * MilitaerPanel
 *
 * Presentasjonskomponent. Viser beregningsgrunnlag for militær og sivilforsvarstjeneste.
 */
export const MilitaerPanel = ({ alleAndeler }: Props) => {
  const relevanteAndeler = alleAndeler.filter(andel => andel.aktivitetStatus === AktivitetStatus.MILITAER_ELLER_SIVIL);
  const beregnetAarsinntekt = relevanteAndeler && relevanteAndeler.length > 0 ? relevanteAndeler[0].beregnetPrAar : '';
  return (
    <VStack gap="2">
      <Heading size="medium">
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Militær" />
      </Heading>
      <Label size="small">{formatCurrencyNoKr(beregnetAarsinntekt)}</Label>
    </VStack>
  );
};
