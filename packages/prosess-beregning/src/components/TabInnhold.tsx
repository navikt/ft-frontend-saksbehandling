import { VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import type { KodeverkForPanel } from '../types/KodeverkForPanel';
import type { Vilkår } from '../types/Vilkår';
import { GrunnlagForBeregning } from './grunnlagForBeregning/GrunnlagForBeregning';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkår: Vilkår | null;
  kodeverkSamling: KodeverkForPanel;
}
export const TabInnhold = ({
  beregningsgrunnlag,
  beregningsgrunnlagsvilkår,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  return (
    <VStack gap="space-8" paddingBlock="space-16">
      <GrunnlagForBeregning
        beregningsgrunnlag={beregningsgrunnlag}
        beregningsgrunnlagsvilkår={beregningsgrunnlagsvilkår}
        kodeverkSamling={kodeverkSamling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      />
      {/* her legges graf, tabell, ap, osv. */}
    </VStack>
  );
};
