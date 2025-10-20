import { useState } from 'react';

import type { ArbeidsgiverOpplysningerPerId, BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';

import { type AvklarAktiviteterFormValues } from '../typer/AvklarAktiviteterFormValues';
import { FaktaBeregningAvklaringsbehovCode } from '../typer/interface/FaktaBeregningAvklaringsbehovCode';
import type { SubmitBeregningType } from '../typer/interface/SubmitBeregningTsType';
import type { KodeverkForPanel } from '../typer/KodeverkForPanel';
import type { Vilkår } from '../typer/Vilkår';
import type { VurderFaktaBeregningFormValues } from '../typer/VurderFaktaBeregningFormValues';
import { formNameAvklarAktiviteter, formNameVurderFaktaBeregning } from '../utils/BeregningFormUtils';
import { hasAksjonspunkt } from './../utils/aksjonspunktUtils';
import { AvklareAktiviteterPanel } from './avklareAktiviteter/AvklareAktiviteterPanelFunksjon';
import { VurderFaktaBeregningPanel } from './fellesFaktaForATFLogSN/VurderFaktaBeregningPanel';

const { OVERSTYRING_AV_BEREGNINGSAKTIVITETER, AVKLAR_AKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const relevanteKoder = [OVERSTYRING_AV_BEREGNINGSAKTIVITETER, AVKLAR_AKTIVITETER];

interface Props {
  submitCallback: (aksjonspunktData: SubmitBeregningType[]) => Promise<void>;
  readOnly: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  vilkar: Vilkår;
  submittable: boolean;
  erOverstyrer: boolean;
  skalKunneOverstyreAktiviteter: boolean;
  kodeverkSamling: KodeverkForPanel;
  beregningsgrunnlag: Beregningsgrunnlag[];
  aktivtBeregningsgrunnlagIndeks: number;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  setFormData: (data: AvklarAktiviteterFormValues | VurderFaktaBeregningFormValues) => void;
  formData?: AvklarAktiviteterFormValues | VurderFaktaBeregningFormValues;
  skalKunneAvbryteOverstyring: boolean;
}

/**
 * BeregningInfoPanel
 *
 * Container komponent.. Har ansvar for å sette opp Formen for "avklar fakta om beregning" panel.
 */
export const BeregningInfoPanel = ({
  readOnly,
  avklaringsbehov,
  submittable,
  submitCallback,
  aktivtBeregningsgrunnlagIndeks,
  beregningsgrunnlag,
  erOverstyrer,
  skalKunneOverstyreAktiviteter,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  setFormData,
  formData,
  vilkar,
  skalKunneAvbryteOverstyring,
}: Props) => {
  const relevanteLøsbareAvklaringsbehov = avklaringsbehov.filter(
    ap => relevanteKoder.some(kode => kode === ap.definisjon) && ap.kanLoses,
  );
  const avklarAktiviteterReadOnly =
    readOnly ||
    ((relevanteLøsbareAvklaringsbehov.length === 0 ||
      hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov)) &&
      !erOverstyrer);
  const [avklarAktiviteterErEndret, setAvklarAktiviteterErEndret] = useState<boolean>(false);

  return (
    <>
      <AvklareAktiviteterPanel
        readOnly={avklarAktiviteterReadOnly}
        submitCallback={submitCallback}
        submittable={submittable}
        erOverstyrer={erOverstyrer && skalKunneOverstyreAktiviteter}
        kodeverkSamling={kodeverkSamling}
        aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
        beregningsgrunnlag={beregningsgrunnlag}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        setFormData={setFormData}
        formData={formData && formNameAvklarAktiviteter in formData ? formData : undefined}
        vilkår={vilkar}
        setAvklarAktiviteterErEndret={setAvklarAktiviteterErEndret}
      />
      <VurderFaktaBeregningPanel
        submitCallback={submitCallback}
        submittable={submittable}
        kodeverkSamling={kodeverkSamling}
        beregningsgrunnlag={beregningsgrunnlag}
        erOverstyrer={erOverstyrer}
        readOnly={readOnly}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
        setFormData={setFormData}
        formData={formData && formNameVurderFaktaBeregning in formData ? formData : undefined}
        vilkar={vilkar}
        avklarAktiviteterErEndret={avklarAktiviteterErEndret}
        skalKunneAvbryteOverstyring={skalKunneAvbryteOverstyring}
      />
    </>
  );
};
