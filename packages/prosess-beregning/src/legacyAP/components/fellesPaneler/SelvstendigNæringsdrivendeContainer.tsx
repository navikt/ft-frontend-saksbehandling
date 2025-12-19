import type { ReactElement } from 'react';

import type { BeregningAvklaringsbehov, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';

import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import type { FormNameType } from '../../types/BeregningFormValues';
import { AksjonspunktsbehandlerSNEllerMidlertidigInaktiv } from '../selvstendigNaeringsdrivende/AksjonspunktsbehandlerSNEllerMidlertidigInaktiv';
import { finnAlleAndelerIFørstePeriode } from './aksjonspunktBehandlerUtils';

export const SelvstendigNæringsdrivendeContainer = ({
  readOnly,
  allePerioder,
  avklaringsbehov,
  fieldIndex,
  formName,
  skalValideres,
}: {
  readOnly: boolean;
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  avklaringsbehov: BeregningAvklaringsbehov;
  fieldIndex: number;
  formName: FormNameType;
  skalValideres: boolean;
}): ReactElement | null => {
  const alleAndelerIForstePeriode = finnAlleAndelerIFørstePeriode(allePerioder);
  const snAndel = alleAndelerIForstePeriode.find(andel => andel.aktivitetStatus && andel.aktivitetStatus === 'SN');
  const erNyArbLivet = snAndel?.erNyIArbeidslivet;
  const erVarigEndring =
    avklaringsbehov.definisjon === AksjonspunktKode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON ||
    snAndel?.næringer?.some(naring => naring.erVarigEndret === true);
  const erNyoppstartet = snAndel?.næringer?.some(naring => naring.erNyoppstartet === true);
  if (!erNyArbLivet && !erNyoppstartet && !erVarigEndring) {
    return null;
  }
  return (
    <AksjonspunktsbehandlerSNEllerMidlertidigInaktiv
      readOnly={readOnly}
      avklaringsbehov={avklaringsbehov}
      erNyArbLivet={erNyArbLivet}
      erVarigEndring={erVarigEndring}
      erNyoppstartet={erNyoppstartet}
      fieldIndex={fieldIndex}
      formName={formName}
      skalValideres={skalValideres}
    />
  );
};
