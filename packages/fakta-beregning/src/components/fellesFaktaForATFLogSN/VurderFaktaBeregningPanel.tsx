import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';

import { BeregningFaktaOgOverstyringAP } from '../../typer/interface/BeregningFaktaAP';
import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { KodeverkFpSakForPanel } from '../../typer/KodeverkForPanelForFb';
import { Vilkår, Vilkårperiode } from '../../typer/Vilkår';
import { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import { hasAksjonspunkt } from '../../utils/aksjonspunktUtils';
import { formNameVurderFaktaBeregning } from '../../utils/BeregningFormUtils';
import { FaktaBegrunnelseTextField } from '../felles/FaktaBegrunnelseTextField';
import { getBuildInitialValuesFaktaForATFLOgSN } from './faktaForATFLOgSNPanelUtils';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';
import { transformValuesVurderFaktaBeregning } from './transformValuesHjelpefunksjoner';
import { VurderFaktaBeregningField } from './VurderFaktaBeregningField';
import { BEGRUNNELSE_FAKTA_TILFELLER_NAME } from './vurderFaktaBeregningHjelpefunksjoner';
import { BeregningsgrunnlagIndexContext, VurderFaktaContext } from './VurderFaktaContext';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = FaktaBeregningAvklaringsbehovCode;

const findAvklaringsbehovMedBegrunnelse = (
  avklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined => {
  if (avklaringsbehov.some(ap => ap.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG)) {
    return avklaringsbehov.find(ap => ap.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);
  }
  return avklaringsbehov.find(ap => ap.definisjon === VURDER_FAKTA_FOR_ATFL_SN && ap.begrunnelse !== null);
};

const hasOpenAksjonspunkt = (kode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === kode && isAksjonspunktOpen(ap.status));

interface Props {
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag[];
  kodeverkSamling: KodeverkFpSakForPanel;
  erOverstyrer: boolean;
  submitCallback: (aksjonspunktData: BeregningFaktaOgOverstyringAP[]) => Promise<void>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aktivtBeregningsgrunnlagIndeks: number;
  setFormData: (data: VurderFaktaBeregningFormValues) => void;
  formData?: VurderFaktaBeregningFormValues;
  vilkar: Vilkår;
  avklarAktiviteterErEndret: boolean;
  skalKunneAvbryteOverstyring: boolean;
}

const buildInitialValuesVurderFaktaBeregning = (
  alleBeregningsgrunnlag: Beregningsgrunnlag[],
  kodeverkSamling: KodeverkFpSakForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkar: Vilkår,
): VurderFaktaBeregningFormValues => ({
  [formNameVurderFaktaBeregning]: alleBeregningsgrunnlag.map(bg => {
    const vilkarsperiode = vilkar.perioder.find(p => p.periode.fom === bg.vilkårsperiodeFom);
    if (!vilkarsperiode) {
      throw new Error(`Finner ikke vilkårsperiode med fom ${bg.vilkårsperiodeFom}`);
    }
    return {
      avklaringsbehov: bg.avklaringsbehov,
      erTilVurdering: vilkarsperiode.vurderesIBehandlingen && !vilkarsperiode.erForlengelse,
      periode: vilkarsperiode.periode,
      ...FaktaBegrunnelseTextField.buildInitialValues(
        findAvklaringsbehovMedBegrunnelse(bg.avklaringsbehov)?.begrunnelse,
        BEGRUNNELSE_FAKTA_TILFELLER_NAME,
      ),
      ...getBuildInitialValuesFaktaForATFLOgSN(bg, kodeverkSamling, arbeidsgiverOpplysningerPerId),
    };
  }),
});

const relevanteKoder = [VURDER_FAKTA_FOR_ATFL_SN, OVERSTYRING_AV_BEREGNINGSGRUNNLAG];
const erForlengelse = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[]) => {
  const vilkårPeriode = vilkårsperioder.find(({ periode }) => periode.fom === bg.vilkårsperiodeFom);
  return vilkårPeriode?.erForlengelse === true;
};
/**
 * VurderFaktaBeregningPanel
 *
 * Container komponent.. Inneholder begrunnelsefelt og komponent som innholder panelene for fakta om beregning tilfeller
 */
export const VurderFaktaBeregningPanel = ({
  beregningsgrunnlag,
  submittable,
  readOnly,
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
}: Props) => {
  const verdiForAvklarAktivitetErEndret = avklarAktiviteterErEndret;

  const avklaringsbehov = beregningsgrunnlag.flatMap(bg => bg.avklaringsbehov);
  const formMethods = useForm<VurderFaktaBeregningFormValues>({
    defaultValues:
      formData ||
      buildInitialValuesVurderFaktaBeregning(
        beregningsgrunnlag,
        kodeverkSamling,
        arbeidsgiverOpplysningerPerId,
        vilkar,
      ),
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

  const losAvklaringsbehov = (values: VurderFaktaBeregningFormValues): void => {
    if (Object.keys(errors).length === 0) {
      setSubmitDisabled(true);
      submitCallback(transformValuesVurderFaktaBeregning(values, skalKunneAvbryteOverstyring));
    } else {
      // eslint-disable-next-line no-console
      console.error(errors);
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
          {fields.map((field, index) => {
            const harRelevantAksjonspunkt = (avklaringspunkt: BeregningAvklaringsbehov): boolean =>
              relevanteKoder.some(kode => kode === avklaringspunkt.definisjon);

            const kanLøses = (avklaringspunkt: BeregningAvklaringsbehov): boolean => avklaringspunkt.kanLoses;

            const løsbareAksjonspunkter = avklaringsbehov.filter(
              avklaringspunkt => harRelevantAksjonspunkt(avklaringspunkt) && kanLøses(avklaringspunkt),
            );

            const readOnlyAvAndreÅrsaker =
              readOnly ||
              erForlengelse(beregningsgrunnlag[index], vilkar.perioder) ||
              (hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov) && !erOverstyrer);

            const isReadOnly = readOnlyAvAndreÅrsaker || (løsbareAksjonspunkter.length === 0 && !erOverstyrer);

            const vilkårsperiode = vilkar.perioder.find(
              p => p.periode.fom === beregningsgrunnlag[index].vilkårsperiodeFom,
            );
            if (!vilkårsperiode) {
              throw new Error(`Filler ikke vilkårsperiode med fom ${beregningsgrunnlag[index].vilkårsperiodeFom}`);
            }

            return (
              <BeregningsgrunnlagIndexContext.Provider key={field.id} value={index}>
                <VurderFaktaBeregningField
                  key={field.id}
                  vilkarsperiode={vilkårsperiode}
                  beregningsgrunnlag={beregningsgrunnlag[index]}
                  erOverstyrer={erOverstyrer}
                  readOnly={isReadOnly}
                  kodeverkSamling={kodeverkSamling}
                  arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                  submittable={submittable}
                  updateOverstyring={updateOverstyring}
                  submitDisabled={submitDisabled}
                  verdiForAvklarAktivitetErEndret={verdiForAvklarAktivitetErEndret}
                />
              </BeregningsgrunnlagIndexContext.Provider>
            );
          })}
        </Form>
      </VurderFaktaContext.Provider>
    );
  }
  return null;
};
