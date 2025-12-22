import { useState } from 'react';

import { VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import type { KodeverkForPanel } from '../../../types/KodeverkForPanel';
import type { Vilkår } from '../../../types/Vilkår';
import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import { type BeregningFormValues, finnFormName } from '../../types/BeregningFormValues';
import type { BeregningAksjonspunktSubmitType } from '../../types/BeregningsgrunnlagAP';
import { AksjonspunktBehandler } from './AksjonspunktBehandler';
import { finnLovparagrafForAksjonspunkt, LovParagraf, mapSammenligningtypeTilLovparagraf } from './lovparagrafUtils';

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
  aktivIndex: number;
}

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

    const harAvklaringUtenSG = bg.avklaringsbehov.find(
      a => a.definisjon === AksjonspunktKode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
    );
    if (harAvklaringUtenSG) {
      nyGruppert = leggTilBeregningsgrunnlag(nyGruppert, LovParagraf.ÅTTE_TRETTIFEM, bg);
    }
    if (!bg.sammenligningsgrunnlagPrStatus || bg.sammenligningsgrunnlagPrStatus.length === 0) {
      return nyGruppert;
    }
    bg.sammenligningsgrunnlagPrStatus.forEach(sg => {
      const lovparagraf = mapSammenligningtypeTilLovparagraf(sg.sammenligningsgrunnlagType, bg.aktivitetStatus);
      nyGruppert = leggTilBeregningsgrunnlag(nyGruppert, lovparagraf, bg);
    });
    return nyGruppert;
  }, {} as GruppertPrLovparagraf);

export const SammenligningOgFastsettelsePanel = ({
  readOnly,
  isSubmittable,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  beregningsgrunnlagListe,
  vilkår,
  submitCallback,
  formData,
  setFormData,
  aktivIndex,
}: Props) => {
  const gruppertPrLovparagraf = grupperPrLovparagraf(beregningsgrunnlagListe);
  const [finnesFormSomSubmittes, setFinnesFormSomSubmittes] = useState(false);

  const lagPanelForLovparagraf = (lovparagraf: LovParagraf) => {
    if (gruppertPrLovparagraf[lovparagraf] && gruppertPrLovparagraf[lovparagraf].length > 0) {
      const grunnlagForLovparagraf = gruppertPrLovparagraf[lovparagraf];
      const aktivPeriodeFom = beregningsgrunnlagListe[aktivIndex].vilkårsperiodeFom;
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
                aktivIndex={aktivIndex}
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
