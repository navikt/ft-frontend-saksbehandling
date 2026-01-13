import { FormattedMessage } from 'react-intl';

import type { Beregningsgrunnlag } from '@navikt/ft-types';
import { FaktaBoks } from '@navikt/ft-ui-komponenter';

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
    <FaktaBoks tittel={<FormattedMessage id="Dagsats.Tittel" />}>
      {tabellData.map(tabellPeriode => (
        <Dagsats
          key={tabellPeriode.fom}
          beregningsgrunnlag={beregningsgrunnlag}
          vilkarStatus={vilkårsperiode.vilkarStatus}
          tabellPeriode={tabellPeriode}
          skalVisePeriode={tabellData.length > 1}
          kodeverkSamling={kodeverkSamling}
        />
      ))}
    </FaktaBoks>
  );
};
