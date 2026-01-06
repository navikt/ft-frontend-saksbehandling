import type { ReactElement } from 'react';

import type { BeregningAvklaringsbehov, BeregningsgrunnlagPeriodeProp } from '@navikt/ft-types';

import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import { finnAlleAndelerIFørstePeriode } from '../../../utils/beregningsgrunnlagUtils';
import type { FormNameType } from '../../types/BeregningFormValues';
import { AksjonspunktBehandlerSNEllerMidlertidigInaktiv } from '../selvstendigNaeringsdrivende/AksjonspunktBehandlerSNEllerMidlertidigInaktiv';

interface Props {
  readOnly: boolean;
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  aksjonspunkt: BeregningAvklaringsbehov;
  fieldIndex: number;
  formName: FormNameType;
  skalValideres: boolean;
}

export const SelvstendigNæringsdrivendeContainer = ({
  readOnly,
  beregningsgrunnlagPeriode,
  aksjonspunkt,
  fieldIndex,
  formName,
  skalValideres,
}: Props): ReactElement | null => {
  const snAndel = finnAlleAndelerIFørstePeriode(beregningsgrunnlagPeriode).find(
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
    <AksjonspunktBehandlerSNEllerMidlertidigInaktiv
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
