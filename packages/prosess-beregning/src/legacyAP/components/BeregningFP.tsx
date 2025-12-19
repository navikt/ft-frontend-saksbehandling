import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';

import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import type { Vilkår, Vilkårperiode } from '../../types/Vilkår';
import { AksjonspunktKode } from '../../utils/aksjonspunkt';
import type { BeregningFormValues } from '../types/BeregningFormValues';
import type { BeregningAksjonspunktSubmitType } from '../types/BeregningsgrunnlagAP';
import { SammenligningOgFastsettelsePanel } from './fellesPaneler/SammenligningOgFastsettelsePanel';
import { GraderingUtenBGReadOnly } from './gradering/GraderingUtenBGReadOnly';

interface Props {
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  kodeverkSamling: KodeverkForPanel;
  aktivtBeregningsgrunnlagIndeks: number;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkår: Vilkår;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
}

const skalVurderes = (vilkår: Vilkår, beregningsgrunnlag: Beregningsgrunnlag) => {
  const periode = finnVilkårperiode(vilkår, beregningsgrunnlag.vilkårsperiodeFom);
  return periode.vurderesIBehandlingen && !periode.erForlengelse;
};

const finnVilkårperiode = (vilkår: Vilkår, vilkårsperiodeFom: string): Vilkårperiode =>
  // @ts-expect-error Fiks
  vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);

/**
 * BeregningFP
 *
 * Presentasjonskomponent. Holder på alle komponenter relatert til beregning av foreldrepenger.
 * Finner det gjeldende aksjonspunktet hvis vi har et.
 */
export const BeregningFP = ({
  aktivtBeregningsgrunnlagIndeks,
  beregningsgrunnlagListe,
  submitCallback,
  readOnly,
  readOnlySubmitButton,
  vilkår,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}: Props) => {
  const aktivtBeregningsgrunnlag = beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks];

  return (
    <>
      <SammenligningOgFastsettelsePanel
        readOnly={readOnly || !skalVurderes(vilkår, aktivtBeregningsgrunnlag)}
        sammenligningsgrunnlag={aktivtBeregningsgrunnlag.sammenligningsgrunnlagPrStatus || []}
        readOnlySubmitButton={readOnlySubmitButton}
        kodeverkSamling={kodeverkSamling}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        beregningsgrunnlagListe={beregningsgrunnlagListe}
        vilkår={vilkår}
        submitCallback={submitCallback}
        formData={formData}
        setFormData={setFormData}
        aktivIndex={aktivtBeregningsgrunnlagIndeks}
      />

      <GraderingUtenBGReadOnly
        avklaringsbehov={aktivtBeregningsgrunnlag.avklaringsbehov.find(
          ap => ap.definisjon === AksjonspunktKode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
        )}
      />
    </>
  );
};
