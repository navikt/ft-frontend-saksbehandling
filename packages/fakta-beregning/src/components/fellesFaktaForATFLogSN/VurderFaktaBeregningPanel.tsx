import { Form } from '@navikt/ft-form-hooks';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Vilkar,
} from '@navikt/ft-types';
import React, { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { BeregningFaktaOgOverstyringAP } from '../../typer/interface/BeregningFaktaAP';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import { getBuildInitialValuesFaktaForATFLOgSN } from './FaktaForATFLOgSNPanel';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';
import { transformValuesVurderFaktaBeregning } from './transformValuesHjelpefunksjoner';
import VurderFaktaContext from './VurderFaktaContext';
import VurderFaktaBeregningField, { BEGRUNNELSE_FAKTA_TILFELLER_NAME } from './VurderFaktaBeregningField';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = FaktaBeregningAksjonspunktCode;

const findAvklaringsbehovMedBegrunnelse = (avklaringsbehov: BeregningAvklaringsbehov[]): BeregningAvklaringsbehov => {
  if (avklaringsbehov.some(ap => ap.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG)) {
    return avklaringsbehov.find(ap => ap.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);
  }
  return avklaringsbehov.find(ap => ap.definisjon === VURDER_FAKTA_FOR_ATFL_SN && ap.begrunnelse !== null);
};

const hasOpenAksjonspunkt = (kode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === kode && isAksjonspunktOpen(ap.status));

type VurderFaktaBeregningPanelProps = {
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag[];
  alleKodeverk: AlleKodeverk;
  erOverstyrer: boolean;
  submitCallback: (aksjonspunktData: BeregningFaktaOgOverstyringAP[]) => Promise<void>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aktivtBeregningsgrunnlagIndeks: number;
  setFormData: (data: VurderFaktaBeregningFormValues) => void;
  formData: VurderFaktaBeregningFormValues;
  vilkar: Vilkar;
  avklarAktiviteterErEndret: boolean;
};

export const buildInitialValuesVurderFaktaBeregning = (
  props,
  avklaringsbehov: BeregningAvklaringsbehov[],
  vilkar: Vilkar,
): VurderFaktaBeregningFormValues => ({
  [formNameVurderFaktaBeregning]: props.beregningsgrunnlag.map(bg => {
    const vilkarsperiode = vilkar.perioder.find(p => p.periode.fom === bg.vilkårsperiodeFom);
    return {
      avklaringsbehov: bg.avklaringsbehov,
      erTilVurdering: vilkarsperiode.vurderesIBehandlingen,
      periode: vilkarsperiode.periode,
      ...FaktaBegrunnelseTextField.buildInitialValues(
        findAvklaringsbehovMedBegrunnelse(bg.avklaringsbehov)?.begrunnelse,
        BEGRUNNELSE_FAKTA_TILFELLER_NAME,
      ),
      ...getBuildInitialValuesFaktaForATFLOgSN({
        ...props,
        avklaringsbehov: bg.avklaringsbehov,
        beregningsgrunnlag: bg,
      }),
    };
  }),
});

/**
 * VurderFaktaBeregningPanel
 *
 * Container komponent.. Inneholder begrunnelsefelt og komponent som innholder panelene for fakta om beregning tilfeller
 */
const VurderFaktaBeregningPanelImpl: React.FC<VurderFaktaBeregningPanelProps> = props => {
  const {
    beregningsgrunnlag,
    readOnly,
    submittable,
    alleKodeverk,
    erOverstyrer,
    arbeidsgiverOpplysningerPerId,
    aktivtBeregningsgrunnlagIndeks,
    submitCallback,
    setFormData,
    formData,
    vilkar,
    avklarAktiviteterErEndret,
  } = props;
  const verdiForAvklarAktivitetErEndret = avklarAktiviteterErEndret;

  const avklaringsbehov = beregningsgrunnlag.flatMap(bg => bg.avklaringsbehov);
  const formMethods = useForm<VurderFaktaBeregningFormValues>({
    defaultValues: formData || buildInitialValuesVurderFaktaBeregning(props, avklaringsbehov, vilkar),
  });
  const { control, getValues, formState, trigger } = formMethods;
  const { fields, update } = useFieldArray({
    name: formNameVurderFaktaBeregning,
    control,
  });
  const { errors, isSubmitted, dirtyFields } = formState;

  useEffect(() => {
    if (isSubmitted && dirtyFields.vurderFaktaBeregningForm?.[aktivtBeregningsgrunnlagIndeks]) {
      trigger();
    }
  }, [aktivtBeregningsgrunnlagIndeks]);

  const updateOverstyring = (index: number, skalOverstyre: boolean): void => {
    const currVal = getValues(`${formNameVurderFaktaBeregning}.${index}`);
    update(index, {
      ...currVal,
      [MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD]: skalOverstyre,
    });
  };

  const losAvklaringsbehov = values => {
    if (Object.keys(errors).length === 0) {
      submitCallback(transformValuesVurderFaktaBeregning(values));
    }
  };

  if (
    !(
      hasOpenAksjonspunkt(AVKLAR_AKTIVITETER, avklaringsbehov) ||
      hasOpenAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov)
    )
  ) {
    return (
      <VurderFaktaContext.Provider value={aktivtBeregningsgrunnlagIndeks}>
        <Form
          formMethods={formMethods}
          onSubmit={values => {
            losAvklaringsbehov(values);
          }}
          setDataOnUnmount={setFormData}
        >
          {fields.map(
            (field, index) =>
              aktivtBeregningsgrunnlagIndeks === index && (
                <VurderFaktaBeregningField
                  vilkarsperiode={vilkar.perioder.find(
                    p => p.periode.fom === beregningsgrunnlag[index].vilkårsperiodeFom,
                  )}
                  beregningsgrunnlag={beregningsgrunnlag[index]}
                  erOverstyrer={erOverstyrer}
                  readOnly={readOnly}
                  alleKodeverk={alleKodeverk}
                  arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                  submittable={submittable}
                  fieldId={index}
                  updateOverstyring={updateOverstyring}
                  verdiForAvklarAktivitetErEndret={verdiForAvklarAktivitetErEndret}
                />
              ),
          )}
          ,
        </Form>
      </VurderFaktaContext.Provider>
    );
  }
  return null;
};

export default VurderFaktaBeregningPanelImpl;
