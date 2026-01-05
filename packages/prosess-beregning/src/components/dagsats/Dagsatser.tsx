import { FormattedMessage } from 'react-intl';

import { Box, Heading } from '@navikt/ds-react';

import type { Beregningsgrunnlag } from '@navikt/ft-types';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import type { Vilkår } from '../../types/Vilkår';
import { finnVilkårperiode } from '../../utils/vilkårUtils';
import { Dagsats } from './Dagsats';
import { utledTabellData } from './dagsatserUtils';

interface Props {
  beregningsgrunnlag: Beregningsgrunnlag;
  beregningsgrunnlagsvilkår: Vilkår;
  kodeverkSamling: KodeverkForPanel;
}

export const Dagsatser = ({ beregningsgrunnlag, beregningsgrunnlagsvilkår, kodeverkSamling }: Props) => {
  const vilkårsperiode = finnVilkårperiode(beregningsgrunnlagsvilkår, beregningsgrunnlag.vilkårsperiodeFom);
  const tabellData = utledTabellData(beregningsgrunnlag);
  return (
    <Box.New background="neutral-soft" padding="5" flexBasis="0%" flexGrow="1">
      <Heading size="small" level="4">
        <FormattedMessage id="Dagsats.Tittel" />
      </Heading>
      {tabellData.map(tabellPeriode => (
        <Dagsats
          key={tabellPeriode.fom}
          beregningsgrunnlag={beregningsgrunnlag}
          vilkårsperiode={vilkårsperiode}
          tabellPeriode={tabellPeriode}
          skalVisePeriode={tabellData.length > 1}
          kodeverkSamling={kodeverkSamling}
        />
      ))}
    </Box.New>
  );
};
