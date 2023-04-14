import { Form } from '@navikt/ft-form-hooks';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, BeregningAvklaringsbehov, Beregningsgrunnlag, Vilkar } from '@navikt/ft-types';
import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { BeregningFaktaOgOverstyringAP } from '../../typer/interface/BeregningFaktaAP';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import { getBuildInitialValuesFaktaForATFLOgSN } from './FaktaForATFLOgSNPanel';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';
import transformValuesVurderFaktaBeregning from './transformValuesHjelpefunksjoner';
import VurderFaktaContext, { BeregningsgrunnlagIndexContext } from './VurderFaktaContext';
import VurderFaktaBeregningField, { BEGRUNNELSE_FAKTA_TILFELLER_NAME } from './VurderFaktaBeregningField';
import KodeverkForPanel from '../../typer/kodeverkForPanel';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = FaktaBeregningAvklaringsbehovCode;

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
  kodeverkSamling: KodeverkForPanel;
  erOverstyrer: boolean;
  submitCallback: (aksjonspunktData: BeregningFaktaOgOverstyringAP[]) => Promise<void>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aktivtBeregningsgrunnlagIndeks: number;
  setFormData: (data: VurderFaktaBeregningFormValues) => void;
  formData: VurderFaktaBeregningFormValues;
  vilkar: Vilkar;
  avklarAktiviteterErEndret: boolean;
  skalKunneAvbryteOverstyring: boolean;
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
      erTilVurdering: vilkarsperiode.vurderesIBehandlingen && !vilkarsperiode.erForlengelse,
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
    kodeverkSamling,
    erOverstyrer,
    arbeidsgiverOpplysningerPerId,
    aktivtBeregningsgrunnlagIndeks,
    submitCallback,
    setFormData,
    formData,
    vilkar,
    avklarAktiviteterErEndret,
    skalKunneAvbryteOverstyring,
  } = props;
  const verdiForAvklarAktivitetErEndret = avklarAktiviteterErEndret;

  const avklaringsbehov = beregningsgrunnlag.flatMap(bg => bg.avklaringsbehov);
  const formMethods = useForm<VurderFaktaBeregningFormValues>({
    defaultValues: formData || buildInitialValuesVurderFaktaBeregning(props, avklaringsbehov, vilkar),
  });
  const { control, formState, trigger, getValues, watch } = formMethods;
  const { fields, update } = useFieldArray({
    name: formNameVurderFaktaBeregning,
    control,
  });
  const { errors, isSubmitted } = formState;
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
  const formValues = watch(formNameVurderFaktaBeregning);
  useEffect(() => {
    if (isSubmitted) {
      trigger();
    }
  }, [JSON.stringify(formValues)]);

  const updateOverstyring = (index: number, skalOverstyre: boolean): void => {
    const currVal = getValues(`${formNameVurderFaktaBeregning}.${index}`);
    update(index, {
      ...currVal,
      [MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD]: skalOverstyre,
    });
  };

  const losAvklaringsbehov = values => {
    if (Object.keys(errors).length === 0) {
      setSubmitDisabled(true);
      submitCallback(transformValuesVurderFaktaBeregning(values, skalKunneAvbryteOverstyring));
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
          {fields.map((field, index) => (
            <BeregningsgrunnlagIndexContext.Provider key={field.id} value={index}>
              <VurderFaktaBeregningField
                key={field.id}
                vilkarsperiode={vilkar.perioder.find(
                  p => p.periode.fom === beregningsgrunnlag[index].vilkårsperiodeFom,
                )}
                beregningsgrunnlag={beregningsgrunnlag[index]}
                erOverstyrer={erOverstyrer}
                readOnly={readOnly}
                kodeverkSamling={kodeverkSamling}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                submittable={submittable}
                updateOverstyring={updateOverstyring}
                submitDisabled={submitDisabled}
                verdiForAvklarAktivitetErEndret={verdiForAvklarAktivitetErEndret}
              />
            </BeregningsgrunnlagIndexContext.Provider>
          ))}
        </Form>
      </VurderFaktaContext.Provider>
    );
  }
  return null;
};

export default VurderFaktaBeregningPanelImpl;
