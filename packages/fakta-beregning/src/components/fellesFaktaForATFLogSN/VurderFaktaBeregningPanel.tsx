import { Form } from '@navikt/ft-form-hooks';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
} from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { ReactElement, useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { BeregningFaktaOgOverstyringAP } from '../../typer/interface/BeregningFaktaAP';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { findBegrunnelse } from '../avklareAktiviteter/avklareAktiviteterHjelpefunksjoner';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import SubmitButton from '../felles/SubmitButton';
import { erOverstyringAvBeregningsgrunnlag } from './BgFaktaUtils';
import FaktaForATFLOgSNPanel, { getBuildInitialValuesFaktaForATFLOgSN } from './FaktaForATFLOgSNPanel';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';
import { transformValuesVurderFaktaBeregning } from './transformValuesHjelpefunksjoner';
import VurderFaktaContext from './VurderFaktaContext';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = FaktaBeregningAksjonspunktCode;

const hasAksjonspunkt = (aksjonspunktKode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === aksjonspunktKode);

const findAvklaringsbehovMedBegrunnelse = (avklaringsbehov: BeregningAvklaringsbehov[]): BeregningAvklaringsbehov => {
  if (avklaringsbehov.some(ap => ap.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG)) {
    return avklaringsbehov.find(ap => ap.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);
  }
  return avklaringsbehov.find(ap => ap.definisjon === VURDER_FAKTA_FOR_ATFL_SN && ap.begrunnelse !== null);
};

export const BEGRUNNELSE_FAKTA_TILFELLER_NAME = 'begrunnelseFaktaTilfeller';

export const harIkkeEndringerIAvklarMedFlereAksjonspunkter = (
  verdiForAvklarAktivitetErEndret: boolean,
  avklaringsbehov: BeregningAvklaringsbehov[],
): boolean => {
  if (
    hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) ||
    hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov)
  ) {
    return !verdiForAvklarAktivitetErEndret;
  }
  return true;
};

const isAksjonspunktClosed = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean => {
  const relevantAp = avklaringsbehov.filter(
    ap =>
      ap.definisjon === FaktaBeregningAksjonspunktCode.VURDER_FAKTA_FOR_ATFL_SN ||
      ap.definisjon === FaktaBeregningAksjonspunktCode.OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  );
  return relevantAp.length === 0 ? false : relevantAp.some(ap => !isAksjonspunktOpen(ap.status));
};

const lagHelpTextsForFakta = (): ReactElement[] => {
  const helpTexts = [];
  helpTexts.push(
    <FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning" />,
  );
  return helpTexts;
};

const hasOpenAksjonspunkt = (kode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === kode && isAksjonspunktOpen(ap.status));

export const erSubmittable = (submittable: boolean, submitEnabled: boolean, hasErrors: boolean): boolean =>
  submittable && submitEnabled && !hasErrors;

type VurderFaktaBeregningPanelProps = {
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag[];
  alleKodeverk: AlleKodeverk;
  erOverstyrer: boolean;
  submitCallback: (aksjonspunktData: BeregningFaktaOgOverstyringAP[]) => Promise<void>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aktivtBeregningsgrunnlagIndeks: number;
};

export const buildInitialValuesVurderFaktaBeregning = (
  props,
  avklaringsbehov: BeregningAvklaringsbehov[],
): VurderFaktaBeregningFormValues => ({
  [formNameVurderFaktaBeregning]: props.beregningsgrunnlag.map(bg => ({
    avklaringsbehov,
    ...FaktaBegrunnelseTextField.buildInitialValues(
      findAvklaringsbehovMedBegrunnelse(bg.avklaringsbehov)?.begrunnelse,
      BEGRUNNELSE_FAKTA_TILFELLER_NAME,
    ),
    ...getBuildInitialValuesFaktaForATFLOgSN({ ...props, avklaringsbehov, beregningsgrunnlag: bg }),
  })),
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
  } = props;
  const verdiForAvklarAktivitetErEndret = false;

  const avklaringsbehov = beregningsgrunnlag.flatMap(bg => bg.avklaringsbehov);
  const formMethods = useForm<VurderFaktaBeregningFormValues>({
    defaultValues: buildInitialValuesVurderFaktaBeregning(props, avklaringsbehov),
  });
  const { control, getValues, formState, trigger } = formMethods;
  const { fields, update } = useFieldArray({
    name: formNameVurderFaktaBeregning,
    control,
  });
  const { isDirty, isSubmitting, errors, isSubmitted, dirtyFields } = formState;

  useEffect(() => {
    if (isSubmitted && dirtyFields.vurderFaktaBeregningForm?.[aktivtBeregningsgrunnlagIndeks]) {
      trigger();
    }
  }, [aktivtBeregningsgrunnlagIndeks]);

  const erOverstyrt = (index: number) => {
    const formValue = getValues(`${formNameVurderFaktaBeregning}.${index}`);
    return erOverstyringAvBeregningsgrunnlag(formValue, beregningsgrunnlag[index], avklaringsbehov);
  };

  const finnesFeilForBegrunnelse = fieldId => !!errors.vurderFaktaBeregningForm?.[fieldId]?.begrunnelseFaktaTilfeller;

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
            console.log(values);
            losAvklaringsbehov(values);
          }}
        >
          {fields.map(
            (field, index) =>
              aktivtBeregningsgrunnlagIndeks === index && (
                <React.Fragment key={field.id}>
                  {hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) && (
                    <AksjonspunktHelpTextHTML>
                      {!isAksjonspunktClosed(avklaringsbehov) ? lagHelpTextsForFakta() : null}
                    </AksjonspunktHelpTextHTML>
                  )}
                  <VerticalSpacer twentyPx />

                  <FaktaForATFLOgSNPanel
                    readOnly={readOnly}
                    isAksjonspunktClosed={isAksjonspunktClosed(avklaringsbehov)}
                    avklaringsbehov={avklaringsbehov}
                    beregningsgrunnlag={beregningsgrunnlag[index]}
                    alleKodeverk={alleKodeverk}
                    erOverstyrer={erOverstyrer}
                    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                    updateOverstyring={updateOverstyring}
                  />
                  <VerticalSpacer twentyPx />
                  {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, avklaringsbehov) || erOverstyrt(index)) && (
                    <>
                      <FaktaBegrunnelseTextField
                        name={`${formNameVurderFaktaBeregning}.${index}.${BEGRUNNELSE_FAKTA_TILFELLER_NAME}`}
                        isSubmittable={submittable}
                        isReadOnly={readOnly}
                        hasBegrunnelse={findBegrunnelse(avklaringsbehov) !== null}
                      />
                      <VerticalSpacer twentyPx />
                      {/* @ts-ignore */}
                      <SubmitButton
                        isSubmittable={erSubmittable(
                          submittable &&
                            harIkkeEndringerIAvklarMedFlereAksjonspunkter(
                              verdiForAvklarAktivitetErEndret,
                              avklaringsbehov,
                            ) &&
                            !isAksjonspunktClosed(avklaringsbehov),
                          true,
                          finnesFeilForBegrunnelse(index),
                        )}
                        isReadOnly={readOnly}
                        isDirty={isDirty}
                        isSubmitting={isSubmitting}
                        hasEmptyRequiredFields={finnesFeilForBegrunnelse(index)}
                      />
                    </>
                  )}
                </React.Fragment>
              ),
          )}
        </Form>
      </VurderFaktaContext.Provider>
    );
  }
  return null;
};

export default VurderFaktaBeregningPanelImpl;
