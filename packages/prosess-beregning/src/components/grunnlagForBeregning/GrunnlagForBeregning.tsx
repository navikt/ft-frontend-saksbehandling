import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Heading, VStack } from '@navikt/ds-react';

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
      <VStack gap="space-16">
        <Heading size="large" level="2">
          <FormattedMessage id="GrunnlagForBeregning.Tittel" />
        </Heading>
        <BodyShort size="small">
          <FormattedMessage
            id="GrunnlagForBeregning.Skjæringstidspunkt"
            values={{ dato: dateFormat(beregningsgrunnlag.skjaeringstidspunktBeregning), b: BTag }}
          />
        </BodyShort>
        <AktivitetStatusTags
          kodeverkSamling={kodeverkSamling}
          beregningsgrunnlagPeriode={beregningsgrunnlag.beregningsgrunnlagPeriode}
        />
        <Arbeidsinntekt
          beregningsgrunnlag={beregningsgrunnlag}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        />
      </VStack>
    </Box.New>
  );
};
