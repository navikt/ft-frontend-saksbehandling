import { useState } from 'react';

import { VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { hasAksjonspunkt } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import type { Vilkår } from '../../types/Vilkår';
import { AksjonspunktKode } from '../../utils/aksjonspunkt';
import { type BeregningFormValues, finnFormName } from '../types/BeregningFormValues';
import type { BeregningAksjonspunktSubmitType } from '../types/BeregningsgrunnlagAP';
import { AksjonspunktBehandler } from './fellesPaneler/AksjonspunktBehandler';
import { finnLovparagraf, finnLovparagrafForAksjonspunkt, LovParagraf } from './fellesPaneler/lovparagrafUtils';

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
  aktivtBeregningsgrunnlagIndeks: number;
}

export const FastsettBeregningAksjonspunktContainer = ({
  readOnly,
  isSubmittable,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  beregningsgrunnlagListe,
  vilkår,
  submitCallback,
  formData,
  setFormData,
  aktivtBeregningsgrunnlagIndeks,
}: Props) => {
  const gruppertPrLovparagraf = grupperPrLovparagraf(beregningsgrunnlagListe);
  const [finnesFormSomSubmittes, setFinnesFormSomSubmittes] = useState(false);

  const lagPanelForLovparagraf = (lovparagraf: LovParagraf) => {
    if (gruppertPrLovparagraf[lovparagraf] && gruppertPrLovparagraf[lovparagraf].length > 0) {
      const grunnlagForLovparagraf = gruppertPrLovparagraf[lovparagraf];
      const aktivPeriodeFom = beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks].vilkårsperiodeFom;
      const aktivtGrunnlagForLovparagraf = grunnlagForLovparagraf.find(bg => bg.vilkårsperiodeFom === aktivPeriodeFom);

      const harAvklaringsbehovForLovparagraf = gruppertPrLovparagraf[lovparagraf].some(bg =>
        bg.avklaringsbehov.some(a => finnLovparagrafForAksjonspunkt(a) === lovparagraf),
      );
      const harAktivtAvklaringsbehovForLovparagraf = aktivtGrunnlagForLovparagraf?.avklaringsbehov.some(
        a => finnLovparagrafForAksjonspunkt(a) === lovparagraf,
      );
      const formName = finnFormName(lovparagraf);

      return (
        <VStack gap="space-40">
          {harAvklaringsbehovForLovparagraf && (
            <div style={{ display: harAktivtAvklaringsbehovForLovparagraf ? 'block' : 'none' }}>
              <AksjonspunktBehandler
                readOnly={readOnly}
                lovparagraf={lovparagraf}
                kodeverkSamling={kodeverkSamling}
                isSubmittable={isSubmittable}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                beregningsgrunnlagListe={beregningsgrunnlagListe}
                vilkår={vilkår}
                submitCallback={submitCallback}
                formData={formData && formName in formData ? formData : undefined}
                setFormData={setFormData}
                aktivIndex={aktivtBeregningsgrunnlagIndeks}
                finnesFormSomSubmittes={finnesFormSomSubmittes}
                setSubmitting={setFinnesFormSomSubmittes}
              />
            </div>
          )}
        </VStack>
      );
    }
    return null;
  };

  return (
    <VStack gap="space-20">
      {lagPanelForLovparagraf(LovParagraf.ÅTTE_TRETTI)}
      {lagPanelForLovparagraf(LovParagraf.ÅTTE_TRETTIFEM)}
    </VStack>
  );
};

type GruppertPrLovparagraf = {
  [key: string]: Beregningsgrunnlag[];
};

const leggTilBeregningsgrunnlag = (
  gruppert: GruppertPrLovparagraf,
  lovparagraf: LovParagraf,
  bg: Beregningsgrunnlag,
): GruppertPrLovparagraf => {
  const nyGruppert = {
    ...gruppert,
  };
  if (nyGruppert[lovparagraf]) {
    nyGruppert[lovparagraf].push(bg);
  } else {
    nyGruppert[lovparagraf] = [bg];
  }
  return nyGruppert;
};

const grupperPrLovparagraf = (beregningsgrunnlagListe: Beregningsgrunnlag[]) =>
  beregningsgrunnlagListe.reduce((gruppert, bg) => {
    let nyGruppert = {
      ...gruppert,
    };

    if (hasAksjonspunkt(AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, bg.avklaringsbehov)) {
      nyGruppert = leggTilBeregningsgrunnlag(nyGruppert, LovParagraf.ÅTTE_TRETTIFEM, bg);
    }
    if (!bg.sammenligningsgrunnlagPrStatus || bg.sammenligningsgrunnlagPrStatus.length === 0) {
      return nyGruppert;
    }
    bg.sammenligningsgrunnlagPrStatus.forEach(sg => {
      const lovparagraf = finnLovparagraf(sg.sammenligningsgrunnlagType, bg.aktivitetStatus);
      nyGruppert = leggTilBeregningsgrunnlag(nyGruppert, lovparagraf, bg);
    });
    return nyGruppert;
  }, {} as GruppertPrLovparagraf);
