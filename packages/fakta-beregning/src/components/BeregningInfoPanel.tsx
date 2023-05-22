import { ArbeidsgiverOpplysningerPerId, BeregningAvklaringsbehov, Beregningsgrunnlag, Vilkar } from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent, useState } from 'react';
import AvklarAktiviteterFormValues from '../typer/AvklarAktiviteterFormValues';
import FaktaBeregningAvklaringsbehovCode from '../typer/interface/FaktaBeregningAvklaringsbehovCode';
import SubmitBeregningType from '../typer/interface/SubmitBeregningTsType';
import VurderFaktaBeregningFormValues from '../typer/VurderFaktaBeregningFormValues';
import AvklareAktiviteterPanel from './avklareAktiviteter/AvklareAktiviteterPanelFunksjon';
import { formNameAvklarAktiviteter, formNameVurderFaktaBeregning } from './BeregningFormUtils';
import { hasAvklaringsbehov } from './felles/avklaringsbehovUtil';
import VurderFaktaBeregningPanel from './fellesFaktaForATFLogSN/VurderFaktaBeregningPanel';
import KodeverkForPanel from '../typer/kodeverkForPanel';

const { VURDER_FAKTA_FOR_ATFL_SN, OVERSTYRING_AV_BEREGNINGSAKTIVITETER, AVKLAR_AKTIVITETER } =
  FaktaBeregningAvklaringsbehovCode;

const relevanteKoder = [OVERSTYRING_AV_BEREGNINGSAKTIVITETER, AVKLAR_AKTIVITETER];

type OwnProps = {
  submitCallback: (aksjonspunktData: SubmitBeregningType[]) => Promise<void>;
  readOnly: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  vilkar: Vilkar;
  submittable: boolean;
  erOverstyrer: boolean;
  skalKunneOverstyreAktiviteter: boolean;
  kodeverkSamling: KodeverkForPanel;
  beregningsgrunnlag: Beregningsgrunnlag[];
  aktivtBeregningsgrunnlagIndeks: number;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  setFormData: (data: any) => void;
  formData: AvklarAktiviteterFormValues | VurderFaktaBeregningFormValues;
  skalKunneAvbryteOverstyring: boolean;
};

/**
 * BeregningInfoPanel
 *
 * Container komponent.. Har ansvar for å sette opp Formen for "avklar fakta om beregning" panel.
 */
const BeregningInfoPanel: FunctionComponent<OwnProps> = ({
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
}) => {
  const relevanteLøsbareAvklaringsbehov = avklaringsbehov.filter(
    ap => relevanteKoder.some(kode => kode === ap.definisjon) && ap.kanLoses,
  );
  const avklarAktiviteterReadOnly =
    readOnly ||
    ((relevanteLøsbareAvklaringsbehov.length === 0 ||
      hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov)) &&
      !erOverstyrer);
  const [avklarAktiviteterErEndret, setAvklarAktiviteterErEndret] = useState<boolean>(false);

  return (
    <div>
      <AvklareAktiviteterPanel
        readOnly={avklarAktiviteterReadOnly}
        harAndreAvklaringsbehovIPanel={hasAvklaringsbehov(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov)}
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
      <VerticalSpacer thirtyTwoPx />
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
    </div>
  );
};

export default BeregningInfoPanel;
