import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, VStack } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import type { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';

import { HorizontalBox } from '../../util/HorizontalBox';

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
    <VStack gap="space-8">
      <Heading size="medium" level="4">
        <FormattedMessage id="MilitaerPanel.Tittel" />
      </Heading>
      <HorizontalBox>
        <BodyShort size="small">
          <FormattedMessage id="MilitaerPanel.BeregnetAar" />
        </BodyShort>
        <BodyShort size="small">
          <BeløpLabel beløp={beregnetAarsinntekt} />
        </BodyShort>
      </HorizontalBox>
    </VStack>
  );
};
