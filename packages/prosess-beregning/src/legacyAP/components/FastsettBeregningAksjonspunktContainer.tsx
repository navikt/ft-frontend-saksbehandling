import { useState } from 'react';

import { HGrid } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import type { Vilkår } from '../../types/Vilkår';
import { AksjonspunktKode, erBeregningsAP } from '../../utils/aksjonspunkt';
import { type BeregningFormValues } from '../types/BeregningFormValues';
import type { BeregningAksjonspunktSubmitType } from '../types/BeregningsgrunnlagAP';
import { AksjonspunktBehandler } from './fellesPaneler/AksjonspunktBehandler';

interface Props {
  readOnly: boolean;
  kodeverkSamling: KodeverkForPanel;
  isSubmittable: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkår: Vilkår;
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
  aktivtBeregningsgrunnlag: Beregningsgrunnlag;
}

export const FastsettBeregningAksjonspunktContainer = ({ beregningsgrunnlagListe, ...rest }: Props) => {
  const gruppertPrAksjonspunkt = grupperPrAksjonspunkt(beregningsgrunnlagListe);
  const [finnesFormSomSubmittes, setFinnesFormSomSubmittes] = useState(false);

  return (
    <HGrid columns="repeat(auto-fit, minmax(40rem, 1fr))" gap="space-12">
      {Object.entries(gruppertPrAksjonspunkt).map(([aksjonspunktKode, beregningsgrunnlagForAksjonspunkt]) => (
        <AksjonspunktBehandler
          key={aksjonspunktKode}
          {...rest}
          aksjonspunktKode={aksjonspunktKode as AksjonspunktKode}
          beregningsgrunnlagForAksjonspunkt={beregningsgrunnlagForAksjonspunkt}
          finnesFormSomSubmittes={finnesFormSomSubmittes}
          setSubmitting={setFinnesFormSomSubmittes}
        />
      ))}
    </HGrid>
  );
};

type GruppertPrAP = {
  [key in AksjonspunktKode]: Beregningsgrunnlag[];
};

const grupperPrAksjonspunkt = (beregningsgrunnlagListe: Beregningsgrunnlag[]) => {
  return beregningsgrunnlagListe.reduce((prev, curr) => {
    curr.avklaringsbehov
      .filter(erBeregningsAP)
      .map(a => a.definisjon as AksjonspunktKode)
      .forEach(apKode => {
        if (!prev[apKode]) {
          prev[apKode] = [];
        }
        prev[apKode].push(curr);
      });
    return prev;
  }, {} as GruppertPrAP);
};
