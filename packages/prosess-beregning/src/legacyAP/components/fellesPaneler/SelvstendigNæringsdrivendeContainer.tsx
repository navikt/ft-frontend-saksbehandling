import type { ReactElement } from 'react';

import type { BeregningAvklaringsbehov, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';

import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import type { FormNameType } from '../../types/BeregningFormValues';
import { AksjonspunktsbehandlerSNEllerMidlertidigInaktiv } from '../selvstendigNaeringsdrivende/AksjonspunktsbehandlerSNEllerMidlertidigInaktiv';
import { finnAlleAndelerIFørstePeriode } from './aksjonspunktBehandlerUtils';

export const SelvstendigNæringsdrivendeContainer = ({
  readOnly,
  allePerioder,
  aksjonspunkt,
  fieldIndex,
  formName,
  skalValideres,
}: {
  readOnly: boolean;
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  aksjonspunkt: BeregningAvklaringsbehov;
  fieldIndex: number;
  formName: FormNameType;
  skalValideres: boolean;
}): ReactElement | null => {
  const snAndel = finnAlleAndelerIFørstePeriode(allePerioder).find(
    andel => andel.aktivitetStatus && andel.aktivitetStatus === 'SN',
  );

  const erNyIArbeidslivet = snAndel?.erNyIArbeidslivet;
  const erVarigEndring =
    aksjonspunkt.definisjon === AksjonspunktKode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON ||
    snAndel?.næringer?.some(naring => naring.erVarigEndret === true);
  const erNyoppstartet = snAndel?.næringer?.some(naring => naring.erNyoppstartet === true);

  if (!erNyIArbeidslivet && !erNyoppstartet && !erVarigEndring) {
    return null;
  }

  return (
    <AksjonspunktsbehandlerSNEllerMidlertidigInaktiv
      readOnly={readOnly}
      aksjonspunkt={aksjonspunkt}
      erNyIArbeidslivet={erNyIArbeidslivet}
      erVarigEndring={erVarigEndring}
      erNyoppstartet={erNyoppstartet}
      fieldIndex={fieldIndex}
      formName={formName}
      skalValideres={skalValideres}
    />
  );
};
