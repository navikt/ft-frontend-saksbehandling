import type { ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import { Box, Heading, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import type { Vilkår } from '../../types/Vilkår';

interface Props {
  skjæringstidspunktVelger: ReactNode;
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkår: Vilkår | null;
  kodeverkSamling: KodeverkForPanel;
}
export const GrunnlagForBeregning = ({ skjæringstidspunktVelger }: Props) => {
  return (
    <Box.New background="neutral-soft" padding="5">
      <VStack gap="space-8">
        <Heading size="large" level="2">
          <FormattedMessage id="BeregningsgrunnlagFakta.Tittel" />
        </Heading>
        {skjæringstidspunktVelger}
      </VStack>
    </Box.New>
  );
};
