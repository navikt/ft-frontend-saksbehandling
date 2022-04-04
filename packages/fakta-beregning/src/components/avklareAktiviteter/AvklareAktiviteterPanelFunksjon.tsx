import React, { Component, FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import {
  FormAction, initialize as reduxFormInitialize, InjectedFormProps, reduxForm,
} from 'redux-form';
import { createSelector } from 'reselect';
import { bindActionCreators, Dispatch } from 'redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';

import { FaktaBegrunnelseTextField } from '@ft-frontend-saksbehandling/fakta-felles';
import { VerticalSpacer } from '@ft-frontend-saksbehandling/shared-components';
import aksjonspunktCodes, { hasAksjonspunkt } from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktCodes';
import { isAksjonspunktOpen } from '@ft-frontend-saksbehandling/kodeverk/src/aksjonspunktStatus';
import Aksjonspunkt from '@ft-frontend-saksbehandling/types/src/aksjonspunktTsType';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  AvklarBeregningAktiviteterMap,
  Beregningsgrunnlag,
} from '@ft-frontend-saksbehandling/types';
import BeregningAktivitetAP, {
  AvklarBeregningsaktiviteterAP,
  OverstyrBeregningsaktiviteterAP,
} from '@ft-frontend-saksbehandling/types-avklar-aksjonspunkter/src/fakta/BeregningAktivitetAP';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import {
  formNameAvklarAktiviteter,
  getFormInitialValuesForAvklarAktiviteter,
  getFormValuesForAvklarAktiviteter,
} from '../BeregningFormUtils';
import { erOverstyringAvBeregningsgrunnlag } from '../fellesFaktaForATFLogSN/BgFaktaUtils';
import VurderAktiviteterPanel from './VurderAktiviteterPanel';
import AvklarAktiviteterValues from '../../typer/AvklarAktivitetTypes';
import AvklareAktiviteterField from './AvklareAktiviteterField';

const {
  AVKLAR_AKTIVITETER,
  OVERSTYRING_AV_BEREGNINGSAKTIVITETER,
} = aksjonspunktCodes;

export const BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME = 'begrunnelseAvklareAktiviteter';

export const MANUELL_OVERSTYRING_FIELD = 'manuellOverstyringBeregningAktiviteter';

const findAksjonspunktMedBegrunnelse = (aksjonspunkter: Aksjonspunkt[], kode: string): Aksjonspunkt => aksjonspunkter
  .filter((ap) => ap.definisjon === kode && ap.begrunnelse !== null)[0];

const getAvklarAktiviteter = createSelector(
  [(ownProps: OwnProps) => ownProps.beregningsgrunnlag.faktaOmBeregning],
  (faktaOmBeregning): AvklarBeregningAktiviteterMap => (faktaOmBeregning ? faktaOmBeregning.avklarAktiviteter : undefined),
);

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

const getHelpTextsAvklarAktiviteter = createSelector(
  [(ownProps: OwnProps) => ownProps.aksjonspunkter],
  (aksjonspunkter): ReactElement[] => (hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter)
    ? [<FormattedMessage key="VurderFaktaForBeregningen" id="BeregningInfoPanel.AksjonspunktHelpText.VurderAktiviteter" />]
    : []),
);

const skalViseSubmitKnappEllerBegrunnelse = (aksjonspunkter: Aksjonspunkt[],
  erOverstyrt: boolean): boolean => hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) || erOverstyrt;

const buildInitialValues = (aksjonspunkter: Aksjonspunkt[],
  avklarAktiviteter: AvklarBeregningAktiviteterMap,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  harOverstyrt = false): AvklarAktiviteterValues => {
  const harAvklarAksjonspunkt = hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter);
  const erOverstyrt = hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter);
  let aktiviteterValues;
  if (avklarAktiviteter && avklarAktiviteter.aktiviteterTomDatoMapping) {
    aktiviteterValues = VurderAktiviteterPanel.buildInitialValues(avklarAktiviteter.aktiviteterTomDatoMapping,
      alleKodeverk, erOverstyrt, harAvklarAksjonspunkt, arbeidsgiverOpplysningerPerId);
  }
  const overstyrAksjonspunktMedBegrunnelse = findAksjonspunktMedBegrunnelse(aksjonspunkter, OVERSTYRING_AV_BEREGNINGSAKTIVITETER);
  const aksjonspunktMedBegrunnelse = findAksjonspunktMedBegrunnelse(aksjonspunkter, AVKLAR_AKTIVITETER);
  const begrunnelse = erOverstyrt ? overstyrAksjonspunktMedBegrunnelse : aksjonspunktMedBegrunnelse;
  return {
    [MANUELL_OVERSTYRING_FIELD]: erOverstyrt || harOverstyrt,
    aksjonspunkter,
    avklarAktiviteter,
    aktiviteterValues,
    ...FaktaBegrunnelseTextField.buildInitialValues(begrunnelse, BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME),
  };
};

const hasOpenAksjonspunkt = (kode: string, aksjonspunkter: Aksjonspunkt[]): boolean => aksjonspunkter.some((ap) => ap.definisjon === kode
  && isAksjonspunktOpen(ap.status));

const hasOpenAvklarAksjonspunkter = (aksjonspunkter: Aksjonspunkt[]): boolean => hasOpenAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter)
|| hasOpenAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter);

const skalSkjuleKomponent = (aksjonspunkter: Aksjonspunkt[],
  kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => !hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) && !kanOverstyre && !erOverstyrt;

const skalViseSubmitknappInneforBorderBox = (harAndreAksjonspunkterIPanel: boolean,
  erOverstyrt: boolean,
  erBgOverstyrt: boolean,
  aksjonspunkter: Aksjonspunkt[]): boolean => (harAndreAksjonspunkterIPanel || erOverstyrt || erBgOverstyrt) && !hasOpenAvklarAksjonspunkter(aksjonspunkter);

const skalViseSubmitknappForPanel = (harAndreAksjonspunkterIPanel: boolean,
  erOverstyrt: boolean,
  erBgOverstyrt: boolean,
  aksjonspunkter: Aksjonspunkt[]): boolean => !skalViseSubmitknappInneforBorderBox(harAndreAksjonspunkterIPanel, erOverstyrt, erBgOverstyrt, aksjonspunkter)
    && skalViseSubmitKnappEllerBegrunnelse(aksjonspunkter, erOverstyrt);

const skalViseAktiviteterTabell = (aksjonspunkter: Aksjonspunkt[],
  kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter) || kanOverstyre || erOverstyrt;

const harBlittOverstyrt = (erOverstyrtKnappTrykket: boolean,
  aksjonspunkter: Aksjonspunkt[],
  readOnly: boolean): boolean => erOverstyrtKnappTrykket || hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSAKTIVITETER, aksjonspunkter) || readOnly;

const erSubmittable = (submittable: boolean,
  submitEnabled: boolean,
  formProps: InjectedFormProps): boolean => submittable && submitEnabled && !formProps.error;

const skalViseOverstyringsknapp = (kanOverstyre: boolean,
  erOverstyrt: boolean): boolean => kanOverstyre || erOverstyrt;

type OwnProps = {
    readOnly: boolean;
    submittable: boolean;
    harAndreAksjonspunkterIPanel: boolean;
    alleKodeverk: AlleKodeverk;
    beregningsgrunnlag: Beregningsgrunnlag;
    aksjonspunkter: Aksjonspunkt[];
    erOverstyrer: boolean;
    submitCallback: (aksjonspunktData: AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP) => Promise<void>;
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

type MappedOwnProps = {
  formValues?: AvklarAktiviteterValues;
  onSubmit: (formValues: AvklarAktiviteterValues) => void;
  kanOverstyre: boolean;
  helpText: React.ReactNode[];
  isAksjonspunktClosed: boolean;
  avklarAktiviteter?: AvklarBeregningAktiviteterMap;
  hasBegrunnelse: boolean;
  erOverstyrt: boolean;
  erBgOverstyrt: boolean;
  validate: (values: AvklarAktiviteterValues) => any;
  initialValues: AvklarAktiviteterValues;
}

type OwnState = {
  submitEnabled: boolean;
  erOverstyrtKnappTrykket: boolean;
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
  kanOverstyre,
  erOverstyrt,
  readOnly,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  submittable,
  submitCallback,
}) => {
  const methods = useForm({
    defaultValues: {},
  });

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

export class AvklareAktiviteterPanelImpl extends Component<OwnProps & InjectedFormProps & WrappedComponentProps & MappedOwnProps & DispatchProps, OwnState> {
  constructor(props: OwnProps & InjectedFormProps & WrappedComponentProps & MappedOwnProps & DispatchProps) {
    super(props);
    this.state = {
      submitEnabled: false,
      erOverstyrtKnappTrykket: false,
    };
  }

  componentDidMount() {
    const { submitEnabled } = this.state;
    if (!submitEnabled) {
      this.setState({
        submitEnabled: true,
      });
    }
  }

  initializeAktiviteter() {
    const {
      reduxFormInitialize: formInitialize,
      avklarAktiviteter, aksjonspunkter, alleKodeverk, arbeidsgiverOpplysningerPerId,
    } = this.props;
    const { erOverstyrtKnappTrykket } = this.state;
    this.setState((state) => ({
      ...state,
      erOverstyrtKnappTrykket: !erOverstyrtKnappTrykket,
    }));
    formInitialize(formNameAvklarAktiviteter, buildInitialValues(aksjonspunkter, avklarAktiviteter,
      alleKodeverk, arbeidsgiverOpplysningerPerId, !erOverstyrtKnappTrykket));
  }

  render() {
    const {
      props: {
        intl,
        readOnly,
        isAksjonspunktClosed,
        submittable,
        hasBegrunnelse,
        helpText,
        harAndreAksjonspunkterIPanel,
        erOverstyrt,
        aksjonspunkter,
        kanOverstyre,
        erBgOverstyrt,
        alleKodeverk,
        formValues,
        arbeidsgiverOpplysningerPerId,
        ...formProps
      },
      state: {
        submitEnabled,
        erOverstyrtKnappTrykket,
      },
    } = this;
    if (skalSkjuleKomponent(aksjonspunkter, kanOverstyre, erOverstyrt)) {
      return null;
    }
    const avklarAktiviteter = getAvklarAktiviteter(this.props);

    if (!skalViseAktiviteterTabell(aksjonspunkter, kanOverstyre, erOverstyrt)) {
      return (
        <>
          <form onSubmit={formProps.handleSubmit}>
            <VerticalSpacer sixteenPx />
          </form>
          {harAndreAksjonspunkterIPanel && <VerticalSpacer twentyPx />}
        </>
      );
    }
    return (
      <>
        <form onSubmit={formProps.handleSubmit}>
          {/* FIELD ARRAY SOM SETTER OPP FIELDS */}
        </form>
        {harAndreAksjonspunkterIPanel && <VerticalSpacer twentyPx />}
      </>
    );
  }
}

const skalKunneLoseAksjonspunkt = (skalOverstyre: boolean,
  aksjonspunkter: Aksjonspunkt[]): boolean => skalOverstyre || hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter);

const validate = (values: AvklarAktiviteterValues): any => {
  const { avklarAktiviteter } = values;
  if (avklarAktiviteter) {
    const erOverstyrt = values[MANUELL_OVERSTYRING_FIELD];
    return VurderAktiviteterPanel.validate(values, avklarAktiviteter.aktiviteterTomDatoMapping, erOverstyrt);
  }
  return {};
};

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

export const buildInitialValuesAvklarAktiviteter = createSelector([(ownProps: OwnProps) => ownProps.aksjonspunkter,
  (ownProps: OwnProps) => getAvklarAktiviteter(ownProps),
  (ownProps: OwnProps) => ownProps.alleKodeverk,
  (ownProps: OwnProps) => ownProps.arbeidsgiverOpplysningerPerId], buildInitialValues);

const skalKunneOverstyre = (erOverstyrer: boolean,
  aksjonspunkter: Aksjonspunkt[]): boolean => erOverstyrer && !hasAksjonspunkt(AVKLAR_AKTIVITETER, aksjonspunkter);

const getIsAksjonspunktClosed = createSelector([(ownProps: OwnProps) => ownProps.aksjonspunkter],
  (alleAp): boolean => {
    const relevantOpenAps = alleAp.filter((ap) => ap.definisjon === aksjonspunktCodes.AVKLAR_AKTIVITETER
    || ap.definisjon === aksjonspunktCodes.OVERSTYRING_AV_BEREGNINGSAKTIVITETER)
      .filter((ap) => isAksjonspunktOpen(ap.status));
    return relevantOpenAps.length === 0;
  });

const lagSubmitFn = createSelector([
  (ownProps: OwnProps) => ownProps.submitCallback],
(submitCallback) => (values: AvklarAktiviteterValues): Promise<void> => submitCallback(transformValues(values)));

const mapStateToProps = (state, ownProps: OwnProps): MappedOwnProps => {
  const values = getFormValuesForAvklarAktiviteter(state);
  const initialValues = buildInitialValuesAvklarAktiviteter(ownProps);
  return ({
    initialValues,
    validate,
    formValues: values,
    onSubmit: lagSubmitFn(ownProps),
    kanOverstyre: skalKunneOverstyre(ownProps.erOverstyrer, ownProps.aksjonspunkter),
    helpText: getHelpTextsAvklarAktiviteter(ownProps),
    isAksjonspunktClosed: getIsAksjonspunktClosed(ownProps),
    avklarAktiviteter: getAvklarAktiviteter(ownProps),
    hasBegrunnelse: initialValues && !!initialValues[BEGRUNNELSE_AVKLARE_AKTIVITETER_NAME],
    erOverstyrt: !!values && values[MANUELL_OVERSTYRING_FIELD],
    // @ts-ignore FIX reselect
    erBgOverstyrt: erOverstyringAvBeregningsgrunnlag(state, ownProps),
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
