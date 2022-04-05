import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import {
  FormAction, initialize as reduxFormInitialize, InjectedFormProps, reduxForm,
} from 'redux-form';
import { createSelector } from 'reselect';
import { bindActionCreators, Dispatch } from 'redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';

import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import aksjonspunktCodes, { hasAksjonspunkt, hasAvklaringsbehov } from '@navikt/ft-kodeverk/src/aksjonspunktCodes';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteterMap, BeregningAvklaringsbehov,
  Beregningsgrunnlag,
} from '@navikt/ft-types';
import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import {
  AvklarBeregningsaktiviteterAP,
  BeregningAktivitetAP,
  OverstyrBeregningsaktiviteterAP,
} from '@navikt/ft-types-aksjonspunkter';
import {
  formNameAvklarAktiviteter,
  getFormInitialValuesForAvklarAktiviteter,
  getFormValuesForAvklarAktiviteter,
} from '../BeregningFormUtils';
import { erOverstyringAvBeregningsgrunnlag, harOverstyringsAP } from '../fellesFaktaForATFLogSN/BgFaktaUtils';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';
import AvklareAktiviteterField from './AvklareAktiviteterField';
import FaktaBegrunnelseTextField from '../../legacy/FaktaBegrunnelseTextField';
import { FaktaOmBeregningAksjonspunktValues } from '../../typer/FaktaBeregningTypes';
import { MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD } from '../fellesFaktaForATFLogSN/InntektstabellPanel';

const {
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = aksjonspunktCodes;

export const BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME = 'begrunnelseAvklareAktiviteter';

export const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

const findAksjonspunktMedBegrunnelse = (aksjonspunkter: Aksjonspunkt[], kode: string): Aksjonspunkt => aksjonspunkter
  .filter((ap) => ap.definisjon === kode && ap.begrunnelse !== null)[0];

export const erAvklartAktivitetEndret = createSelector(
  [(state, ownProps: OwnProps) => ownProps.aksjonspunkter,
    (state, ownProps) => ownProps.erOverstyrt,
    (state, ownProps: OwnProps) => getAvklarAktiviteter(ownProps),
    getFormValuesForAvklarAktiviteter,
    getFormInitialValuesForAvklarAktiviteter],
  (aksjonspunkter, erOverstyrt, avklarAktiviteter, values, initialValues) => {
    if (!hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) && (!values || !values[MANUELL_OVERSTYRING_FIELD])) {
      return false;
    }
    if (!!values[MANUELL_OVERSTYRING_FIELD] !== hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter)) {
      return true;
    }
    let harEndring = false;
    if (values && avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping) {
      harEndring = VurderAktiviteterPanel.hasValueChangedFromInitial(avklarAktiviteter.aktiviteterTomDatoMapping,
        values,
        initialValues,
        erOverstyrt);
    }
    if (values && !harEndring) {
      harEndring = initialValues[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME] !== values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME];
    }
    return harEndring;
  },
);

const buildInitialValues = (avklaringsbehov: BeregningAvklaringsbehov[],
  avklarAktiviteter: AvklarBeregningAktiviteterMap,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  harOverstyrt = false): AvklarAktiviteterValues => {
  const harAvklarAksjonspunkt = hasAvklaringsbehov(AVKLAR_AKTIVITETER, avklaringsbehov);
  const erOverstyrt = hasAvklaringsbehov(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, avklaringsbehov);
  let aktiviteterValues;
  if (avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping) {
    aktiviteterValues = VurderAktiviteterPanel.buildInitialValues(avklarAktiviteter.aktiviteterTomDatoMapping,
      alleKodeverk, erOverstyrt, harAvklarAksjonspunkt, arbeidsgiverOpplysningerPerId);
  }
  const overstyrAksjonspunktMedBegrunnelse = findAksjonspunktMedBegrunnelse(avklaringsbehov, OVERSTYRING_AV_BEREGNINGSAKTIVITETER);
  const aksjonspunktMedBegrunnelse = findAksjonspunktMedBegrunnelse(avklaringsbehov, AVKLAR_AKTIVITETER);
  const begrunnelse = erOverstyrt ? overstyrAksjonspunktMedBegrunnelse.begrunnelse : aksjonspunktMedBegrunnelse.begrunnelse;
  return {
    [MANUELL_OVERSTYRING_FIELD]: erOverstyrt || harOverstyrt,
    avklaringsbehov,
    avklarAktiviteter,
    aktiviteterValues,
    ...FaktaBegrunnelseTextField.buildInitialValues(begrunnelse, BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME),
  };
};

const skalKunneLoseAksjonspunkt = (skalOverstyre: boolean,
                                   aksjonspunkter: Aksjonspunkt[]): boolean => skalOverstyre || hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter);

export const transformValues = (values: AvklarAktiviteterValues): BeregningAktivitetAP => {
  const { aksjonspunkter, avklarAktiviteter } = values;
  const skalOverstyre = values[MANUELL_OVERSTYRING_FIELD];
  if (skalKunneLoseAksjonspunkt(skalOverstyre, aksjonspunkter)) {
    const vurderAktiviteterTransformed = VurderAktiviteterPanel.transformValues(values, avklarAktiviteter.aktiviteterTomDatoMapping, skalOverstyre);
    const beg = values[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME];
    return {
      kode: skalOverstyre ? OVERSTYRING_AV_BEREGNINGSAKTIVITETER : AVKLAR_AKTIVITETER,
      begrunnelse: beg === undefined ? null : beg,
      ...vurderAktiviteterTransformed,
    };
  }
  return null;
};


const hasOpenAksjonspunkt = (kode: string, aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter.some((ap) => ap.definisjon === kode
  && isAksjonspunktOpen(ap.status));

const skalSkjuleKomponent = (aksjonspunkter: Aksjonspunkt[],
  kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => !hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) && !kanOverstyre && !erOverstyrt;

const skalViseAktiviteterTabell = (aksjonspunkter: Aksjonspunkt[],
  kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) || kanOverstyre || erOverstyrt;

type OwnProps = {
    readOnly: boolean;
    submittable: boolean;
    harAndreAksjonspunkterIPanel: boolean;
    alleKodeverk: AlleKodeverk;
    beregningsgrunnlag: Beregningsgrunnlag[];
    aksjonspunkter: Aksjonspunkt[];
    erOverstyrer: boolean;
    submitCallback: (aksjonspunktData: AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP) => Promise<void>;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

type MappedOwnProps = {
  formValues?: AvklarAktiviteterValues;
  onSubmit: (formValues: AvklarAktiviteterValues) => void;
  helpText: React.ReactNode[];
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  hasBegrunnelse: boolean;
  erOverstyrt: boolean;
  erBgOverstyrt: boolean;
  validate: (values: AvklarAktiviteterValues) => any;
  initialValues: AvklarAktiviteterValues;
}

interface DispatchProps {
  reduxFormInitialize: (form: string, data: AvklarAktiviteterValues) => FormAction;
}

/**
 * AvklareAktiviteterPanel
 *
 * Container komponent.. Inneholder panel for å avklare om aktivitet fra opptjening skal tas med i beregning
 */

const AvklareAktiviteterPanelImpl: FunctionComponent<OwnProps & InjectedFormProps & WrappedComponentProps & MappedOwnProps & DispatchProps> = ({
  aksjonspunkter,
  harAndreAksjonspunkterIPanel,
  erOverstyrer,
  erOverstyrt,
  readOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  submittable,
  submitCallback,
  beregningsgrunnlag
}) => {
  const methods = useForm({
    defaultValues: {
      formNameAvklarAktiviteter: beregningsgrunnlag.map(bg => buildInitialValues(
        bg.avklaringsbehov,
        bg.avklarAktiviteter,
        alleKodeverk,
        arbeidsgiverOpplysningerPerId
        ))
    },
  });
  const kanOverstyre: boolean = erOverstyrer && !hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter);

  const getIsAksjonspunktClosed: boolean = aksjonspunkter.filter((ap) => ap.definisjon === aksjonspunktCodes.AVKLAR_AKTIVITETER
        || ap.definisjon === aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSAKTIVITETER)
    .filter((ap) => isAksjonspunktOpen(ap.status))
    .length === 0;

  const avklarAktiviteter = beregningsgrunnlag.faktaOmBeregning ? beregningsgrunnlag.faktaOmBeregning.avklarAktiviteter : undefined;

  const erOverstyring = (values: FaktaOmBeregningAksjonspunktValues): boolean => (!!values
    && values[MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD] === true);

  const erBgOverstyrt = erOverstyring || beregningsgrunnlag.erOverstyrtInntekt || harOverstyringsAP(aksjonspunkter);


  /* const { control, register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {},
  }); */

  const {
    fields, append, prepend, remove, swap, move, insert,
  } = useFieldArray({
    control: methods.control,
    name: formNameAvklarAktiviteter,
  });

  const losAvklaringsbehov = () => {
    // TO DO
  };

  if (skalSkjuleKomponent(aksjonspunkter, kanOverstyre, erOverstyrt)) {
    return null;
  }

  if (!skalViseAktiviteterTabell(aksjonspunkter, kanOverstyre, erOverstyrt)) {
    return (
      <>
        <form onSubmit={losAvklaringsbehov}>
          {/* TODO, HVA SKA VI HA HER DERSOM VI IKKE HAR FIELD? overskriftOgKnapp */}
          <VerticalSpacer sixteenPx />
        </form>
        {harAndreAksjonspunkterIPanel && <VerticalSpacer twentyPx />}
      </>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(losAvklaringsbehov)}>
        {fields.map((field, index) => (
          <AvklareAktiviteterField
            fieldId={field.id}
            avklarAktiviteter={}
            avklaringsbehov={}
            erOverstyrer={kanOverstyre}
            erOverstyrt={erOverstyrt}
            readOnly={readOnly}
            submittable={submittable}
            alleKodeverk={alleKodeverk}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            harAndreAksjonspunkterIPanel={harAndreAksjonspunkterIPanel}
          />
        ))}
      </form>
      {harAndreAksjonspunkterIPanel && <VerticalSpacer twentyPx />}
    </FormProvider>
  );
};


const validate = (values: AvklarAktiviteterValues): any => {
  const { avklarAktiviteter } = values;
  if (avklarAktiviteter) {
    const erOverstyrt = values[MANUELL_OVERSTYRING_FIELD];
    return VurderAktiviteterPanel.validate(values, avklarAktiviteter.aktiviteterTomDatoMapping, erOverstyrt);
  }
  return {};
};

export const buildInitialValuesAvklarAktiviteter = createSelector([(ownProps: OwnProps) => ownProps.aksjonspunkter,
  (ownProps: OwnProps) => getAvklarAktiviteter(ownProps),
  (ownProps: OwnProps) => ownProps.alleKodeverk,
  (ownProps: OwnProps) => ownProps.arbeidsgiverOpplysningerPerId], buildInitialValues);

const mapStateToProps = (state, ownProps: OwnProps): MappedOwnProps => {
  const values = getFormValuesForAvklarAktiviteter(state);
  const initialValues = buildInitialValuesAvklarAktiviteter(ownProps);
  return ({
    initialValues,
    validate,
    formValues: values,
    erOverstyrt: !!values && values[MANUELL_OVERSTYRING_FIELD],
  });
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    reduxFormInitialize,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formNameAvklarAktiviteter,
  destroyOnUnmount: false,
})(injectIntl(AvklareAktiviteterPanelImpl)));
