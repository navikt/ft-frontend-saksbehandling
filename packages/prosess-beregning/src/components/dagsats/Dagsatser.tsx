import { FormattedMessage } from 'react-intl';

import { Box, Heading, VStack } from '@navikt/ds-react';

import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { Vilkår } from '../../types/Vilkår';
import { finnVilkårperiode } from '../../utils/vilkårUtils';
import { Dagsats } from './Dagsats';
import { utledTabellData } from './dagsatserUtils';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  beregningsgrunnlagsvilkår: Vilkår;
}

export const Dagsatser = ({ beregningsgrunnlag, beregningsgrunnlagsvilkår }: Props) => {
  const vilkårsperiode = finnVilkårperiode(beregningsgrunnlagsvilkår, beregningsgrunnlag.vilkårsperiodeFom);
  const tabellData = utledTabellData(beregningsgrunnlag);
  return (
    <Box.New background="neutral-soft" padding="5" flexBasis="0%" flexGrow="1">
      <VStack gap="space-20">
        <Heading size="small" level="4">
          <FormattedMessage id="Dagsats.Tittel" />
        </Heading>
        {tabellData.map(data => (
          <Dagsats
            key={data.fom}
            beregningsgrunnlag={beregningsgrunnlag}
            vilkårsperiode={vilkårsperiode}
            tabellData={data}
            skalVisePeriode={tabellData.length > 1}
          />
        ))}
      </VStack>
    </Box.New>
  );
};
