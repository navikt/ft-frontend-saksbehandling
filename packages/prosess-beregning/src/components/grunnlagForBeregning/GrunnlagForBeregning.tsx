import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Heading, HStack, Spacer, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { BTag, dateFormat } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import type { Vilkår } from '../../types/Vilkår';
import { AktivitetStatusTags } from './AktivitetStatusTags';
import { Arbeidsinntekt } from './Arbeidsinntekt';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkår: Vilkår | null;
  kodeverkSamling: KodeverkForPanel;
}

export const GrunnlagForBeregning = ({ beregningsgrunnlag, arbeidsgiverOpplysningerPerId, kodeverkSamling }: Props) => {
  return (
    <Box.New background="neutral-soft" padding="5">
      <VStack gap="space-12">
        <Heading size="medium" level="2">
          <FormattedMessage id="GrunnlagForBeregning.Tittel" />
        </Heading>
        <HStack align="center">
          <AktivitetStatusTags
            kodeverkSamling={kodeverkSamling}
            beregningsgrunnlagPeriode={beregningsgrunnlag.beregningsgrunnlagPeriode}
          />
          <Spacer />
          <BodyShort size="small">
            <FormattedMessage
              id="GrunnlagForBeregning.Skjæringstidspunkt"
              values={{ dato: dateFormat(beregningsgrunnlag.skjaeringstidspunktBeregning), b: BTag }}
            />
          </BodyShort>
        </HStack>

        <Arbeidsinntekt
          beregningsgrunnlag={beregningsgrunnlag}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          kodeverkSamling={kodeverkSamling}
        />
      </VStack>
    </Box.New>
  );
};
