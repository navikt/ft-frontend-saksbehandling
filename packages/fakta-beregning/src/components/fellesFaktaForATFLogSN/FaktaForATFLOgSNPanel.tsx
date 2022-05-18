import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  Aksjonspunkt,
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  FaktaOmBeregning,
  KortvarigAndel,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent } from 'react';
import { IntlShape } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  FaktaOmBeregningAksjonspunktValues,
  FaktaOmBeregningValues,
  FaktaStateProps,
  TilfellerValues,
} from '../../typer/FaktaBeregningTypes';
import {
  BeregningFaktaTransformedValues,
  FaktaBeregningTransformedValues,
} from '../../typer/interface/BeregningFaktaAP';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import VurderBesteberegningForm from './besteberegningFodendeKvinne/VurderBesteberegningForm';
import { erInitialOverstyringAvBeregningsgrunnlag } from './BgFaktaUtils';
import {
  buildInitialValuesKunYtelse,
  getKunYtelseValidation,
  setFaktaPanelForKunYtelse,
  transformValuesForKunYtelse,
} from './kunYtelse/FastsettBgKunYtelse';
import NyIArbeidslivetSNForm from './nyIArbeidslivet/NyIArbeidslivetSNForm';
import TidsbegrensetArbeidsforholdForm from './tidsbegrensetArbeidsforhold/TidsbegrensetArbeidsforholdForm';
import VurderMilitaer from './vurderMilitaer/VurderMilitaer';
import LonnsendringForm from './vurderOgFastsettATFL/forms/LonnsendringForm';
import NyoppstartetFLForm from './vurderOgFastsettATFL/forms/NyoppstartetFLForm';
import VurderEtterlonnSluttpakkeForm from './vurderOgFastsettATFL/forms/VurderEtterlonnSluttpakkeForm';
import VurderMottarYtelseForm from './vurderOgFastsettATFL/forms/VurderMottarYtelseForm';
import VurderOgFastsettATFL from './vurderOgFastsettATFL/VurderOgFastsettATFL';
import VurderRefusjonForm from './vurderrefusjon/VurderRefusjonForm';

const { VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAksjonspunktCode;

export const getFaktaOmBeregning = createSelector(
  [(ownProps: OwnProps) => ownProps.beregningsgrunnlag],
  beregningsgrunnlag => (beregningsgrunnlag ? beregningsgrunnlag.faktaOmBeregning : undefined),
);
export const getKortvarigeArbeidsforhold = createSelector(
  [(ownProps: OwnProps) => getFaktaOmBeregning(ownProps)],
  (faktaOmBeregning = {} as FaktaOmBeregning) =>
    faktaOmBeregning ? faktaOmBeregning.kortvarigeArbeidsforhold : undefined,
);
export const getKunYtelse = createSelector(
  [(ownProps: OwnProps) => getFaktaOmBeregning(ownProps)],
  (faktaOmBeregning = {} as FaktaOmBeregning) => (faktaOmBeregning ? faktaOmBeregning.kunYtelse : undefined),
);
export const getFaktaOmBeregningTilfellerKoder = createSelector(
  [(ownProps: OwnProps) => getFaktaOmBeregning(ownProps)],
  (faktaOmBeregning = {} as FaktaOmBeregning) =>
    faktaOmBeregning && faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [],
);
export const getVurderMottarYtelse = createSelector(
  [getFaktaOmBeregning],
  (faktaOmBeregning = {} as FaktaOmBeregning) => (faktaOmBeregning ? faktaOmBeregning.vurderMottarYtelse : undefined),
);
export const getVurderBesteberegning = createSelector(
  [getFaktaOmBeregning],
  (faktaOmBeregning = {} as FaktaOmBeregning) => (faktaOmBeregning ? faktaOmBeregning.vurderBesteberegning : undefined),
);
export const getArbeidsgiverInfoForRefusjonskravSomKommerForSent = createSelector(
  [getFaktaOmBeregning],
  (faktaOmBeregning = {} as FaktaOmBeregning) => {
    if (faktaOmBeregning && faktaOmBeregning.refusjonskravSomKommerForSentListe) {
      return faktaOmBeregning.refusjonskravSomKommerForSentListe;
    }
    return [];
  },
);

export const validationForVurderFakta = (values: FaktaOmBeregningAksjonspunktValues, intl: IntlShape): any => {
  if (!values) {
    return {};
  }
  const { faktaOmBeregning, beregningsgrunnlag, tilfeller, kunYtelse, vurderMottarYtelse } = values;
  if (!faktaOmBeregning || !beregningsgrunnlag || !tilfeller) {
    return {};
  }
  return {
    ...getKunYtelseValidation(values, kunYtelse, tilfeller, intl),
    ...VurderMottarYtelseForm.validate(values, vurderMottarYtelse),
    ...VurderBesteberegningForm.validate(values, tilfeller),
    ...VurderOgFastsettATFL.validate(values, tilfeller, faktaOmBeregning, beregningsgrunnlag, intl),
  };
};

const spacer = hasShownPanel => {
  if (hasShownPanel) {
    return <VerticalSpacer twentyPx />;
  }
  return {};
};

const getFaktaPanels = (
  readOnly,
  tilfeller,
  isAksjonspunktClosed,
  faktaOmBeregning,
  beregningsgrunnlag,
  alleKodeverk,
  aksjonspunkter,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  updateOverstyring: (index: number, skalOverstyre: boolean) => void,
) => {
  const faktaPanels = [];
  let hasShownPanel = false;
  tilfeller.forEach(tilfelle => {
    if (tilfelle === FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD) {
      hasShownPanel = true;
      faktaPanels.push(
        <React.Fragment key={tilfelle}>
          <TidsbegrensetArbeidsforholdForm
            readOnly={readOnly}
            isAksjonspunktClosed={isAksjonspunktClosed}
            faktaOmBeregning={faktaOmBeregning}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        </React.Fragment>,
      );
    }
    if (tilfelle === FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET) {
      hasShownPanel = true;
      faktaPanels.push(
        <React.Fragment key={tilfelle}>
          {spacer(hasShownPanel)}
          <NyIArbeidslivetSNForm readOnly={readOnly} isAksjonspunktClosed={isAksjonspunktClosed} />
        </React.Fragment>,
      );
    }
    if (tilfelle === FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE) {
      hasShownPanel = true;
      faktaPanels.push(
        <React.Fragment key={tilfelle}>
          <VurderMilitaer readOnly={readOnly} isAksjonspunktClosed={isAksjonspunktClosed} />
        </React.Fragment>,
      );
    }
    if (tilfelle === FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT) {
      hasShownPanel = true;
      faktaPanels.push(
        <React.Fragment key={tilfelle}>
          <VurderRefusjonForm
            readOnly={readOnly}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            isAksjonspunktClosed={isAksjonspunktClosed}
            faktaOmBeregning={faktaOmBeregning}
          />
        </React.Fragment>,
      );
    }
  });
  setFaktaPanelForKunYtelse(faktaPanels, tilfeller, readOnly, isAksjonspunktClosed, faktaOmBeregning, alleKodeverk);
  faktaPanels.push(
    <React.Fragment key="VurderOgFastsettATFL">
      {spacer(true)}
      {/* @ts-ignore */}
      <VurderOgFastsettATFL
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        tilfeller={tilfeller}
        faktaOmBeregning={faktaOmBeregning}
        beregningsgrunnlag={beregningsgrunnlag}
        alleKodeverk={alleKodeverk}
        erOverstyrer={erOverstyrer}
        aksjonspunkter={aksjonspunkter}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        updateOverstyring={updateOverstyring}
      />
    </React.Fragment>,
  );
  return faktaPanels;
};

type OwnProps = {
  readOnly: boolean;
  aktivePaneler: string[];
  faktaOmBeregning: FaktaOmBeregning;
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  aksjonspunkter: Aksjonspunkt[];
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
};

type MappedOwnProps = {
  faktaOmBeregning: FaktaOmBeregning;
  aktivePaneler: string[];
};

/**
 * FaktaForArbeidstakerFLOgSNPanel
 *
 * Container komponent.. Inneholder paneler for felles faktaavklaring for aksjonspunktet Vurder fakta for arbeidstaker, frilans og selvstendig næringsdrivende
 */
export const FaktaForATFLOgSNPanelImpl: FunctionComponent<OwnProps & MappedOwnProps> = ({
  readOnly,
  aktivePaneler,
  isAksjonspunktClosed,
  faktaOmBeregning,
  beregningsgrunnlag,
  alleKodeverk,
  aksjonspunkter,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  updateOverstyring,
}) => (
  <div>
    {getFaktaPanels(
      readOnly,
      aktivePaneler,
      isAksjonspunktClosed,
      faktaOmBeregning,
      beregningsgrunnlag,
      alleKodeverk,
      aksjonspunkter,
      erOverstyrer,
      arbeidsgiverOpplysningerPerId,
      updateOverstyring,
    ).map(panelOrSpacer => panelOrSpacer)}
  </div>
);

const kunYtelseTransform =
  (faktaOmBeregning: FaktaOmBeregning, aktivePaneler: string[]) =>
  (values: FaktaOmBeregningAksjonspunktValues): FaktaBeregningTransformedValues =>
    transformValuesForKunYtelse(values, faktaOmBeregning.kunYtelse, aktivePaneler);

const nyIArbeidslivetTransform = (vurderFaktaValues, values) => {
  vurderFaktaValues.faktaOmBeregningTilfeller.push(FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET);
  return {
    ...vurderFaktaValues,
    ...NyIArbeidslivetSNForm.transformValues(values),
  };
};

const kortvarigeArbeidsforholdTransform =
  (kortvarigeArbeidsforhold: KortvarigAndel[]) => (vurderFaktaValues, values: FaktaOmBeregningAksjonspunktValues) => {
    vurderFaktaValues.faktaOmBeregningTilfeller.push(FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD);
    return {
      ...vurderFaktaValues,
      ...TidsbegrensetArbeidsforholdForm.transformValues(values, kortvarigeArbeidsforhold),
    };
  };

const vurderMilitaerSiviltjenesteTransform = (vurderFaktaValues, values) => {
  vurderFaktaValues.faktaOmBeregningTilfeller.push(FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE);
  return {
    ...vurderFaktaValues,
    ...VurderMilitaer.transformValues(values),
  };
};

const vurderRefusjonskravTransform = faktaOmBeregning => (vurderFaktaValues, values) => {
  vurderFaktaValues.faktaOmBeregningTilfeller.push(
    FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT,
  );
  return {
    ...vurderFaktaValues,
    ...VurderRefusjonForm.transformValues(faktaOmBeregning.refusjonskravSomKommerForSentListe)(values),
  };
};

export const transformValues =
  (aktivePaneler, nyIArbTransform, kortvarigTransform, militaerTransform, vurderRefusjonTransform) =>
  (vurderFaktaValues, values) => {
    let transformed = { ...vurderFaktaValues };
    aktivePaneler.forEach(kode => {
      if (kode === FaktaOmBeregningTilfelle.VURDER_SN_NY_I_ARBEIDSLIVET) {
        transformed = nyIArbTransform(transformed, values);
      }
      if (kode === FaktaOmBeregningTilfelle.VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD) {
        transformed = kortvarigTransform(transformed, values);
      }
      if (kode === FaktaOmBeregningTilfelle.VURDER_MILITÆR_SIVILTJENESTE) {
        transformed = militaerTransform(transformed, values);
      }
      if (kode === FaktaOmBeregningTilfelle.VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT) {
        transformed = vurderRefusjonTransform(transformed, values);
      }
    });
    return transformed;
  };

export const setInntektValues =
  (
    aktivePaneler: string[],
    fatsettKunYtelseTransform: (values: FaktaOmBeregningAksjonspunktValues) => FaktaBeregningTransformedValues,
    vurderOgFastsettATFLTransform: (values: FaktaOmBeregningAksjonspunktValues) => BeregningFaktaTransformedValues,
  ) =>
  (values: FaktaOmBeregningAksjonspunktValues): BeregningFaktaTransformedValues => {
    if (aktivePaneler.includes(FaktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE)) {
      return { fakta: fatsettKunYtelseTransform(values) };
    }
    return { ...vurderOgFastsettATFLTransform(values) };
  };

const setValuesForVurderFakta = (
  aktivePaneler: string[],
  values: FaktaOmBeregningAksjonspunktValues,
  kortvarigeArbeidsforhold: KortvarigAndel[],
  faktaOmBeregning: FaktaOmBeregning,
  beregningsgrunnlag: Beregningsgrunnlag,
): BeregningFaktaTransformedValues => {
  const vurderFaktaValues = setInntektValues(
    aktivePaneler,
    kunYtelseTransform(faktaOmBeregning, aktivePaneler),
    VurderOgFastsettATFL.transformValues(faktaOmBeregning, beregningsgrunnlag),
  )(values);
  return {
    fakta: transformValues(
      aktivePaneler,
      nyIArbeidslivetTransform,
      kortvarigeArbeidsforholdTransform(kortvarigeArbeidsforhold),
      vurderMilitaerSiviltjenesteTransform,
      vurderRefusjonskravTransform(faktaOmBeregning),
    )(vurderFaktaValues.fakta, values),
    overstyrteAndeler: vurderFaktaValues.overstyrteAndeler,
  };
};

export const transformValuesFaktaForATFLOgSN = (
  values: FaktaOmBeregningAksjonspunktValues,
): BeregningFaktaTransformedValues => {
  const { tilfeller, kortvarigeArbeidsforhold, faktaOmBeregning, beregningsgrunnlag } = values;
  return setValuesForVurderFakta(tilfeller, values, kortvarigeArbeidsforhold, faktaOmBeregning, beregningsgrunnlag);
};

const getVurderFaktaAksjonspunkt = createSelector([(ownProps: OwnProps) => ownProps.aksjonspunkter], aksjonspunkter =>
  aksjonspunkter ? aksjonspunkter.find(ap => ap.definisjon === VURDER_FAKTA_FOR_ATFL_SN) : undefined,
);

const buildInitialValuesForTilfeller = (props: FaktaStateProps): TilfellerValues => ({
  tidsbegrensetValues: TidsbegrensetArbeidsforholdForm.buildInitialValues(props.kortvarigeArbeidsforhold),
  vurderMottarYtelseValues: VurderMottarYtelseForm.buildInitialValues(props.vurderMottarYtelse),
  vurderRefusjonValues: VurderRefusjonForm.buildInitialValues(
    props.tilfeller,
    props.refusjonskravSomKommerForSentListe,
  ),
  ...VurderMilitaer.buildInitialValues(props.faktaOmBeregning),
  ...NyIArbeidslivetSNForm.buildInitialValues(props.beregningsgrunnlag),
  ...LonnsendringForm.buildInitialValues(props.beregningsgrunnlag),
  ...NyoppstartetFLForm.buildInitialValues(props.beregningsgrunnlag),
  ...VurderEtterlonnSluttpakkeForm.buildInitialValues(props.beregningsgrunnlag, props.vurderFaktaAP),
  ...VurderBesteberegningForm.buildInitialValues(
    props.aksjonspunkter,
    props.vurderBesteberegning,
    props.tilfeller,
    props.erOverstyrt,
  ),
  ...VurderOgFastsettATFL.buildInitialValues(
    props.faktaOmBeregning,
    props.erOverstyrt,
    props.arbeidsgiverOpplysningerPerId,
    props.alleKodeverk,
  ),
  ...buildInitialValuesKunYtelse(
    props.kunYtelse,
    props.tilfeller,
    props.faktaOmBeregning.andelerForFaktaOmBeregning,
    props.arbeidsgiverOpplysningerPerId,
    props.alleKodeverk,
  ),
});

const mapStateToBuildInitialValuesProps = (ownProps: OwnProps) => ({
  beregningsgrunnlag: ownProps.beregningsgrunnlag,
  kortvarigeArbeidsforhold: getKortvarigeArbeidsforhold(ownProps),
  vurderFaktaAP: getVurderFaktaAksjonspunkt(ownProps),
  kunYtelse: getKunYtelse(ownProps),
  tilfeller: getFaktaOmBeregningTilfellerKoder(ownProps),
  vurderMottarYtelse: getVurderMottarYtelse(ownProps),
  vurderBesteberegning: getVurderBesteberegning(ownProps),
  alleKodeverk: ownProps.alleKodeverk,
  aksjonspunkter: ownProps.aksjonspunkter,
  faktaOmBeregning: getFaktaOmBeregning(ownProps),
  arbeidsgiverOpplysningerPerId: ownProps.arbeidsgiverOpplysningerPerId,
  refusjonskravSomKommerForSentListe: getArbeidsgiverInfoForRefusjonskravSomKommerForSent(ownProps),
  erOverstyrt: erInitialOverstyringAvBeregningsgrunnlag(ownProps),
});

export const getBuildInitialValuesFaktaForATFLOgSN = (props: OwnProps): FaktaOmBeregningValues => {
  const initialValuesFromProps: FaktaStateProps = mapStateToBuildInitialValuesProps(props);
  return {
    tilfeller: initialValuesFromProps.tilfeller,
    kortvarigeArbeidsforhold: initialValuesFromProps.kortvarigeArbeidsforhold,
    faktaOmBeregning: initialValuesFromProps.faktaOmBeregning,
    beregningsgrunnlag: initialValuesFromProps.beregningsgrunnlag,
    vurderMottarYtelse: initialValuesFromProps.vurderMottarYtelse,
    kunYtelse: initialValuesFromProps.kunYtelse,
    ...buildInitialValuesForTilfeller(initialValuesFromProps),
  };
};

const emptyArray = [];

const mapStateToProps = (state, ownProps) => ({
  faktaOmBeregning: getFaktaOmBeregning(ownProps),
  aktivePaneler: getFaktaOmBeregningTilfellerKoder(ownProps) ? getFaktaOmBeregningTilfellerKoder(ownProps) : emptyArray,
});

export default connect(mapStateToProps)(FaktaForATFLOgSNPanelImpl);
