import React, { FunctionComponent, useEffect } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, Vilkar, Vilkarperiode, } from '@navikt/ft-types';
import { Form } from '@navikt/ft-form-hooks';
import BeregningAvklaringsbehov from '@navikt/ft-types/src/beregningAvklaringsbehovTsType';
import { formNameAvklarAktiviteter } from '../BeregningFormUtils';
import AvklareAktiviteterField, { buildInitialValues, transformFieldValue } from './AvklareAktiviteterField';
import AvklarAktiviteterFormValues from '../../typer/AvklarAktiviteterFormValues';
import SubmitBeregningType from '../../typer/SubmitBeregningTsType';
import { hasAvklaringsbehov } from '../felles/avklaringsbehovUtil';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';

const {
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
  AVKLAR_AKTIVITETER,
} = FaktaBeregningAksjonspunktCode;

const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

const finnVilkårperiode = (vilkår: Vilkar,
  vilkårperiodeFom: string): Vilkarperiode => vilkår.perioder.find(({ periode }) => periode.fom === vilkårperiodeFom);

const skalSkjuleKomponent = (avklaringsbehov: BeregningAvklaringsbehov[],
  erOverstyrer: boolean): boolean => !hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov)
  && !hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov)
  && !erOverstyrer;

type OwnProps = {
  readOnly: boolean;
  submittable: boolean;
  harAndreAvklaringsbehovIPanel: boolean;
  alleKodeverk: AlleKodeverk;
  beregningsgrunnlag: Beregningsgrunnlag[];
  aktivtBeregningsgrunnlagIndeks: number;
  erOverstyrer: boolean;
  submitCallback: (aksjonspunktData: SubmitBeregningType[]) => Promise<void>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkår: Vilkar;
  setFormData: (data: AvklarAktiviteterFormValues) => void;
  formData?: AvklarAktiviteterFormValues;
};

const transformValues = (values: AvklarAktiviteterFormValues): SubmitBeregningType[] => {
  const fieldArrayList = values[formNameAvklarAktiviteter];
  const overstyrteGrunnlag = fieldArrayList
    .filter((v) => v[MANUELL_OVERSTYRING_FIELD])
    .map(transformFieldValue)
    .filter((v) => v);
  const avklarGrunnlag = fieldArrayList
    .filter((v) => !v[MANUELL_OVERSTYRING_FIELD])
    .map(transformFieldValue)
    .filter((v) => v);

  const apDataTilSubmit = [];

  if (overstyrteGrunnlag.length > 0) {
    const beg = overstyrteGrunnlag.map(({ begrunnelse }) => begrunnelse)
      .reduce((samletBegrunnelse, begrunnelse) => (samletBegrunnelse === '' ? begrunnelse : `${samletBegrunnelse} ${begrunnelse}`), '');
    const data = {
      kode: OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
      begrunnelse: beg,
      grunnlag: overstyrteGrunnlag,
    };
    apDataTilSubmit.push(data);
  }

  if (avklarGrunnlag.length > 0) {
    const beg = avklarGrunnlag.map(({ begrunnelse }) => begrunnelse)
      .reduce((samletBegrunnelse, begrunnelse) => (samletBegrunnelse === '' ? begrunnelse : `${samletBegrunnelse} ${begrunnelse}`), '');
    const data = {
      kode: AVKLAR_AKTIVITETER,
      begrunnelse: beg,
      grunnlag: avklarGrunnlag,
    };
    apDataTilSubmit.push(data);
  }

  return apDataTilSubmit;
};

const buildFormInitialValues = (beregningsgrunnlag: Beregningsgrunnlag[], alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  vilkår: Vilkar): AvklarAktiviteterFormValues => ({
  [formNameAvklarAktiviteter]: beregningsgrunnlag.map((bg) => buildInitialValues(
    bg.avklaringsbehov,
    bg.faktaOmBeregning.avklarAktiviteter,
    alleKodeverk,
    arbeidsgiverOpplysningerPerId,
    finnVilkårperiode(vilkår, bg.vilkårperiodeFom),
  )),
});

/**
 * AvklareAktiviteterPanel
 *
 * Container komponent.. Inneholder panel for å avklare om aktivitet fra opptjening skal tas med i beregning
 */

const AvklareAktiviteterPanelImpl: FunctionComponent<OwnProps> = ({
  harAndreAvklaringsbehovIPanel,
  erOverstyrer,
  readOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  submittable,
  submitCallback,
  beregningsgrunnlag,
  aktivtBeregningsgrunnlagIndeks,
  vilkår,
  setFormData,
  formData,
}) => {
  const formMethods = useForm<AvklarAktiviteterFormValues>({
    defaultValues: formData || buildFormInitialValues(beregningsgrunnlag, alleKodeverk, arbeidsgiverOpplysningerPerId, vilkår),
  });

  const {
    formState: {
      dirtyFields,
      errors,
      isSubmitted
    },
    control,
    getValues,
    trigger,
  } = formMethods;

  useEffect(() => {
    if (isSubmitted && dirtyFields.avklarAktiviteterForm?.[aktivtBeregningsgrunnlagIndeks]) {
      trigger();
    }
  }, [aktivtBeregningsgrunnlagIndeks]);

  const avklaringsbehov = beregningsgrunnlag.flatMap((bg) => bg.avklaringsbehov);

  const {
    fields,
    update
  } = useFieldArray({
    name: formNameAvklarAktiviteter,
    control,
  });

  const updateOverstyring = (index: number, skalOverstyre: boolean): void => {
    const currVal = getValues(`avklarAktiviteterForm.${index}`);
    update(index, {
      ...currVal,
      manuellOverstyringBeregningAktiviteter: skalOverstyre
    });
  };

  if (skalSkjuleKomponent(avklaringsbehov, erOverstyrer)) {
    return null;
  }

  const losAvklaringsbehov = (values) => {
    if (Object.keys(errors).length === 0) {
      submitCallback(transformValues(values as AvklarAktiviteterFormValues));
    }
  };

  return (
    <>
      <Form<AvklarAktiviteterFormValues>
        // @ts-ignore
        formMethods={formMethods}
        onSubmit={(values) => losAvklaringsbehov(values)}
        setDataOnUnmount={setFormData}
      >
        {fields.map((field, index) => (
          (aktivtBeregningsgrunnlagIndeks === index
            && (
              <AvklareAktiviteterField
                aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
                key={field.id}
                fieldId={index}
                avklarAktiviteter={beregningsgrunnlag[index].faktaOmBeregning.avklarAktiviteter}
                avklaringsbehov={beregningsgrunnlag[index].avklaringsbehov}
                erOverstyrer={erOverstyrer}
                readOnly={readOnly}
                submittable={submittable}
                alleKodeverk={alleKodeverk}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                updateOverstyring={updateOverstyring}
              />
            ))
        ))}
      </Form>
      {harAndreAvklaringsbehovIPanel && <VerticalSpacer twentyPx/>}
    </>
  );
};

export default AvklareAktiviteterPanelImpl;
