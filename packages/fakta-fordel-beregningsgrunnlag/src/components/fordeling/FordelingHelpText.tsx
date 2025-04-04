import { Beregningsgrunnlag } from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { getHelpTextsFordelBG } from './fordelingHelpTextUtils';

type Props = {
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
};

export const FordelingHelpText = ({ isAksjonspunktClosed, beregningsgrunnlag }: Props) => {
  const helpText = getHelpTextsFordelBG(beregningsgrunnlag);
  return isAksjonspunktClosed ? <></> : <AksjonspunktHelpTextHTML>{helpText}</AksjonspunktHelpTextHTML>;
};
