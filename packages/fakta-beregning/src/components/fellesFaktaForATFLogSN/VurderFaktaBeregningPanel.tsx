import { Form } from '@navikt/ft-form-hooks';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { Aksjonspunkt, AlleKodeverk, ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag } from '@navikt/ft-types';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { ReactElement } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { FaktaOmBeregningAksjonspunktValues } from '../../typer/FaktaBeregningTypes';
import { BeregningFaktaOgOverstyringAP } from '../../typer/interface/BeregningFaktaAP';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import VurderFaktaBeregningFormValues from '../../typer/VurderFaktaBeregningFormValues';
import { formNameVurderFaktaBeregning } from '../BeregningFormUtils';
import FaktaBegrunnelseTextField from '../felles/FaktaBegrunnelseTextField';
import SubmitButton from '../felles/SubmitButton';
import { erOverstyring } from './BgFaktaUtils';
import FaktaForATFLOgSNPanel, {
  getBuildInitialValuesFaktaForATFLOgSN,
  transformValuesFaktaForATFLOgSN,
} from './FaktaForATFLOgSNPanel';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from './InntektstabellPanel';
import VurderFaktaContext from './VurderFaktaContext';

const {
  VURDER_FAKTA_FOR_ATFL_SN,
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = FaktaBeregningAksjonspunktCode;

const hasAksjonspunkt = (aksjonspunktKode: string, aksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktKode);

const findAksjonspunktMedBegrunnelse = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt => {
  if (aksjonspunkter.some(ap => ap.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG)) {
    return aksjonspunkter.find(ap => ap.definisjon === OVERSTYRING_AV_BEREGNINGSGRUNNLAG && ap.begrunnelse !== null);
  }
  return aksjonspunkter.find(ap => ap.definisjon === VURDER_FAKTA_FOR_ATFL_SN && ap.begrunnelse !== null);
};

export const BEGRUNNELSE_FAKTA_TILFELLER_NAME = 'begrunnelseFaktaTilfeller';

export const harIkkeEndringerIAvklarMedFlereAksjonspunkter = (
  verdiForAvklarAktivitetErEndret: boolean,
  aksjonspunkter: Aksjonspunkt[],
): boolean => {
  if (
    hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter) ||
    hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, aksjonspunkter)
  ) {
    return !verdiForAvklarAktivitetErEndret;
  }
  return true;
};

const isAksjonspunktClosed = (alleAp: Aksjonspunkt[]): boolean => {
  const relevantAp = alleAp.filter(
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

const hasOpenAksjonspunkt = (kode: string, aksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === kode && isAksjonspunktOpen(ap.status));

type VurderFaktaBeregningPanelProps = {
  readOnly: boolean;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag[];
  aksjonspunkter: Aksjonspunkt[];
  alleKodeverk: AlleKodeverk;
  erOverstyrer: boolean;
  // submitCallback: (aksjonspunktData: BeregningFaktaOgOverstyringAP) => Promise<void>;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  aktivtBeregningsgrunnlagIndeks: number;
};

type MappedOwnProps = {
  verdiForAvklarAktivitetErEndret: boolean;
  erOverstyrt: boolean;
  hasBegrunnelse: boolean;
};

export const buildInitialValuesVurderFaktaBeregning = (
  aksjonspunkter: Aksjonspunkt[],
  props, // TODO: Finn ut av typing her
): VurderFaktaBeregningFormValues => ({
  [formNameVurderFaktaBeregning]: props.beregningsgrunnlag.map(bg => ({
    aksjonspunkter,
    ...FaktaBegrunnelseTextField.buildInitialValues(
      findAksjonspunktMedBegrunnelse(aksjonspunkter)?.begrunnelse,
      BEGRUNNELSE_FAKTA_TILFELLER_NAME,
    ),
    ...getBuildInitialValuesFaktaForATFLOgSN({ ...props, beregningsgrunnlag: bg }),
  })),
});

// export const validateVurderFaktaBeregning =
//   (getValues: UseFormGetValues<FaktaOmBeregningAksjonspunktValues>, fieldId: number, intl: IntlShape) => () => {
//     const values = getValues(`vurderFaktaBeregningForm.${fieldId}`);
//     const { aksjonspunkter } = values;
//     if (
//       values &&
//       ((aksjonspunkter && hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter)) || erOverstyring(values))
//     ) {
//       return {
//         ...validationForVurderFakta(values, intl),
//       };
//     }
//     return null;
//   };

/**
 * VurderFaktaBeregningPanel
 *
 * Container komponent.. Inneholder begrunnelsefelt og komponent som innholder panelene for fakta om beregning tilfeller
 */
const VurderFaktaBeregningPanelImpl: React.FC<VurderFaktaBeregningPanelProps & MappedOwnProps> = props => {
  const {
    beregningsgrunnlag,
    verdiForAvklarAktivitetErEndret,
    readOnly,
    submittable,
    hasBegrunnelse,
    aksjonspunkter,
    erOverstyrt,
    alleKodeverk,
    erOverstyrer,
    arbeidsgiverOpplysningerPerId,
    aktivtBeregningsgrunnlagIndeks,
  } = props;
  const formMethods = useForm<VurderFaktaBeregningFormValues>({
    defaultValues: buildInitialValuesVurderFaktaBeregning(aksjonspunkter, props),
  });
  const { control, getValues } = formMethods;
  const { fields, update } = useFieldArray({
    name: formNameVurderFaktaBeregning,
    control,
  });

  const updateOverstyring = (index: number, skalOverstyre: boolean): void => {
    const currVal = getValues(`${formNameVurderFaktaBeregning}.${index}`);
    update(index, {
      ...currVal,
      [MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD]: skalOverstyre,
    });
  };

  // const validate = fieldId => [validateVurderFaktaBeregning(getValues, fieldId, intl)];

  if (
    !(
      hasOpenAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) ||
      hasOpenAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter)
    )
  ) {
    return (
      <VurderFaktaContext.Provider value={aktivtBeregningsgrunnlagIndeks}>
        <Form formMethods={formMethods} onSubmit={values => console.log(values)}>
          {fields.map(
            (field, index) =>
              aktivtBeregningsgrunnlagIndeks === index && (
                <React.Fragment key={field.id}>
                  {hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter) && (
                    <AksjonspunktHelpTextHTML>
                      {!isAksjonspunktClosed(aksjonspunkter) ? lagHelpTextsForFakta() : null}
                    </AksjonspunktHelpTextHTML>
                  )}
                  <VerticalSpacer twentyPx />
                  {/* @ts-ignore */}

                  <FaktaForATFLOgSNPanel
                    readOnly={readOnly}
                    isAksjonspunktClosed={isAksjonspunktClosed(aksjonspunkter)}
                    aksjonspunkter={aksjonspunkter}
                    beregningsgrunnlag={beregningsgrunnlag[index]}
                    alleKodeverk={alleKodeverk}
                    erOverstyrer={erOverstyrer}
                    arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                    updateOverstyring={updateOverstyring}
                  />
                  <VerticalSpacer twentyPx />
                  {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter) || erOverstyrt) && (
                    <>
                      <FaktaBegrunnelseTextField
                        name={`${formNameVurderFaktaBeregning}.${index}.${BEGRUNNELSE_FAKTA_TILFELLER_NAME}`}
                        isSubmittable={submittable}
                        isReadOnly={readOnly}
                        hasBegrunnelse={hasBegrunnelse}
                      />
                      <VerticalSpacer twentyPx />
                      {/* @ts-ignore */}
                      <SubmitButton
                        isSubmittable={
                          submittable &&
                          harIkkeEndringerIAvklarMedFlereAksjonspunkter(
                            verdiForAvklarAktivitetErEndret,
                            aksjonspunkter,
                          ) &&
                          isAksjonspunktClosed(aksjonspunkter)
                        }
                        isReadOnly={readOnly}
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

export const transformValuesVurderFaktaBeregning = (
  values: FaktaOmBeregningAksjonspunktValues,
): BeregningFaktaOgOverstyringAP => {
  const { aksjonspunkter } = values;
  if (hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aksjonspunkter) || erOverstyring(values)) {
    const faktaBeregningValues = values;
    const beg = faktaBeregningValues[BEGRUNNELSE_FAKTA_TILFELLER_NAME];
    return {
      kode: erOverstyring(values) ? OVERSTYRING_AV_BEREGNINGSGRUNNLAG : VURDER_FAKTA_FOR_ATFL_SN,
      begrunnelse: beg === undefined ? null : beg,
      ...transformValuesFaktaForATFLOgSN(faktaBeregningValues),
    };
  }
  return null;
};

// const lagSubmitFn = createSelector(
//   [(ownProps: OwnProps) => ownProps.submitCallback],
//   submitCallback => (values: FaktaOmBeregningAksjonspunktValues) =>
//     submitCallback(transformValuesVurderFaktaBeregning(values)),
// );

// const mapStateToPropsFactory = (_state: any, initialProps: OwnProps) => {
//   const validate = values => validateVurderFaktaBeregning(values, initialProps.intl);
//   return (state: any, ownProps: OwnProps): MappedOwnProps => {
//     // @ts-ignore FIX reselect
//     const initialValues = buildInitialValuesVurderFaktaBeregning(state, ownProps);
//     return {
//       initialValues,
//       validate,
//       onSubmit: lagSubmitFn(ownProps),
//       // @ts-ignore
//       verdiForAvklarAktivitetErEndret: false,
//       // @ts-ignore FIX reselect
//       erOverstyrt: erOverstyringAvBeregningsgrunnlag(state, ownProps),
//       hasBegrunnelse: initialValues && !!initialValues[BEGRUNNELSE_FAKTA_TILFELLER_NAME],
//     };
//   };
// };

// export default connect(mapStateToPropsFactory)(
//   reduxForm({
//     form: formNameVurderFaktaBeregning,
//     enableReinitialize: true,
//     destroyOnUnmount: false,
//     keepDirtyOnReinitialize: true,
//   })(VurderFaktaBeregningPanelImpl),
// );

export default VurderFaktaBeregningPanelImpl;
