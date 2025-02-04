import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import {
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteterMap,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AvklarAktiviteterFormValues } from '../../typer/AvklarAktiviteterFormValues';
import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { SubmitBeregningType } from '../../typer/interface/SubmitBeregningTsType';
import { KodeverkForPanel } from '../../typer/KodeverkForPanelForFb';
import { Vilkår, Vilkårperiode } from '../../typer/Vilkår';
import { formNameAvklarAktiviteter } from '../BeregningFormUtils';
import { hasAvklaringsbehov } from '../felles/avklaringsbehovUtil';
import { AvklareAktiviteterField, buildInitialValues, transformFieldValue } from './AvklareAktiviteterField';

const { OVERSTYRING_AV_BEREGNINGSAKTIVITETER, AVKLAR_AKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

const finnVilkårperiode = (vilkår: Vilkår, vilkårsperiodeFom: string): Vilkårperiode => {
  const vp = vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);
  if (!vp) {
    throw new Error(`Finner ikke vilkårsperiode med fom ${vilkårsperiodeFom}`);
  }
  return vp;
};

const skalSkjuleKomponent = (avklaringsbehov: BeregningAvklaringsbehov[], erOverstyrer: boolean): boolean =>
  !hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov) &&
  !hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov) &&
  !erOverstyrer;

type Props = {
  readOnly: boolean;
  submittable: boolean;
  harAndreAvklaringsbehovIPanel: boolean;
  kodeverkSamling: KodeverkForPanel;
  beregningsgrunnlag: Beregningsgrunnlag[];
  aktivtBeregningsgrunnlagIndeks: number;
  erOverstyrer: boolean;
  submitCallback: (aksjonspunktData: SubmitBeregningType[]) => Promise<void>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkår: Vilkår;
  setFormData: (data: AvklarAktiviteterFormValues) => void;
  formData?: AvklarAktiviteterFormValues;
  setAvklarAktiviteterErEndret: (value: boolean) => void;
};

const transformValues = (values: AvklarAktiviteterFormValues): SubmitBeregningType[] => {
  const fieldArrayList = values[formNameAvklarAktiviteter];
  const overstyrteGrunnlag = fieldArrayList
    .filter(v => v[MANUELL_OVERSTYRING_FIELD])
    .map(transformFieldValue)
    .filter(v => v);
  const avklarGrunnlag = fieldArrayList
    .filter(v => !v[MANUELL_OVERSTYRING_FIELD])
    .map(transformFieldValue)
    .filter(v => v);

  const apDataTilSubmit: any[] = [];

  if (overstyrteGrunnlag.length > 0) {
    const beg = overstyrteGrunnlag
      .map(og => og?.begrunnelse)
      .reduce(
        (samletBegrunnelse, begrunnelse) =>
          samletBegrunnelse === '' ? begrunnelse : `${samletBegrunnelse} ${begrunnelse}`,
        '',
      );
    const data = {
      kode: OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
      begrunnelse: beg,
      grunnlag: overstyrteGrunnlag,
    };
    apDataTilSubmit.push(data);
  }

  if (avklarGrunnlag.length > 0) {
    const beg = avklarGrunnlag
      .map(ag => ag?.begrunnelse)
      .reduce(
        (samletBegrunnelse, begrunnelse) =>
          samletBegrunnelse === '' ? begrunnelse : `${samletBegrunnelse} ${begrunnelse}`,
        '',
      );
    const data = {
      kode: AVKLAR_AKTIVITETER,
      begrunnelse: beg,
      grunnlag: avklarGrunnlag,
    };
    apDataTilSubmit.push(data);
  }

  return apDataTilSubmit;
};

const buildFormInitialValues = (
  beregningsgrunnlag: Beregningsgrunnlag[],
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkår: Vilkår,
): AvklarAktiviteterFormValues => ({
  [formNameAvklarAktiviteter]: beregningsgrunnlag.map(bg =>
    buildInitialValues(
      bg.avklaringsbehov,
      bg.faktaOmBeregning?.avklarAktiviteter,
      kodeverkSamling,
      arbeidsgiverOpplysningerPerId,
      finnVilkårperiode(vilkår, bg.vilkårsperiodeFom),
    ),
  ),
});

const getAvklarAktiviteter = (alleGrunnlag: Beregningsgrunnlag[], index: number): AvklarBeregningAktiviteterMap => {
  const aa = alleGrunnlag[index].faktaOmBeregning?.avklarAktiviteter;
  if (!aa) {
    throw new Error('Mangler aktivteter å populere skjema med!');
  }
  return aa;
};
/**
 * AvklareAktiviteterPanel
 *
 * Container komponent.. Inneholder panel for å avklare om aktivitet fra opptjening skal tas med i beregning
 */

export const AvklareAktiviteterPanel = ({
  harAndreAvklaringsbehovIPanel,
  erOverstyrer,
  readOnly,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  submittable,
  submitCallback,
  beregningsgrunnlag,
  aktivtBeregningsgrunnlagIndeks,
  vilkår,
  setFormData,
  formData,
  setAvklarAktiviteterErEndret,
}: Props) => {
  const formMethods = useForm<AvklarAktiviteterFormValues>({
    defaultValues:
      formData || buildFormInitialValues(beregningsgrunnlag, kodeverkSamling, arbeidsgiverOpplysningerPerId, vilkår),
  });

  const {
    formState: { dirtyFields, errors, isSubmitted },
    control,
    getValues,
    trigger,
    setValue,
  } = formMethods;

  useEffect(() => {
    if (dirtyFields.avklarAktiviteterForm?.some(isDirty => !!isDirty)) {
      setAvklarAktiviteterErEndret(true);
    } else {
      setAvklarAktiviteterErEndret(false);
    }
  }, [dirtyFields]);

  useEffect(() => {
    if (isSubmitted && dirtyFields.avklarAktiviteterForm?.[aktivtBeregningsgrunnlagIndeks]) {
      trigger();
    }
  }, [aktivtBeregningsgrunnlagIndeks]);

  const avklaringsbehov = beregningsgrunnlag.flatMap(bg => bg.avklaringsbehov);

  const { fields } = useFieldArray({
    name: formNameAvklarAktiviteter,
    control,
  });

  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);

  const updateOverstyring = (index: number, skalOverstyre: boolean): void => {
    const currVal = getValues(`avklarAktiviteterForm.${index}`);
    setValue(
      `${formNameAvklarAktiviteter}.${index}`,
      {
        ...currVal,
        manuellOverstyringBeregningAktiviteter: skalOverstyre,
      },
      { shouldDirty: true },
    );
  };

  if (skalSkjuleKomponent(avklaringsbehov, erOverstyrer)) {
    return null;
  }

  const losAvklaringsbehov = (values: AvklarAktiviteterFormValues): void => {
    if (Object.keys(errors).length === 0) {
      setSubmitDisabled(true);
      submitCallback(transformValues(values as AvklarAktiviteterFormValues));
    }
  };

  return (
    <>
      <Form<AvklarAktiviteterFormValues>
        formMethods={formMethods}
        onSubmit={values => losAvklaringsbehov(values)}
        setDataOnUnmount={setFormData}
      >
        {fields.map(
          (field, index) =>
            aktivtBeregningsgrunnlagIndeks === index && (
              <AvklareAktiviteterField
                // @ts-expect-error Fiks
                aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
                key={field.id}
                fieldId={index}
                avklarAktiviteter={getAvklarAktiviteter(beregningsgrunnlag, index)}
                avklaringsbehovListe={beregningsgrunnlag[index].avklaringsbehov}
                erOverstyrer={erOverstyrer}
                readOnly={readOnly}
                submittable={submittable}
                kodeverkSamling={kodeverkSamling}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                updateOverstyring={updateOverstyring}
                submitDisabled={submitDisabled}
              />
            ),
        )}
      </Form>
      {harAndreAvklaringsbehovIPanel && <VerticalSpacer twentyPx />}
    </>
  );
};
