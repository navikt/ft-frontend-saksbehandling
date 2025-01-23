import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  FaktaOmBeregning,
  KortvarigAndel,
} from '@navikt/ft-types';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import React, { FunctionComponent, ReactElement } from 'react';
import { FaktaOmBeregningAksjonspunktValues, FaktaOmBeregningValues } from '../../typer/FaktaBeregningTypes';
import {
  BeregningFaktaTransformedValues,
  FaktaBeregningTransformedValues,
} from '../../typer/interface/BeregningFaktaAP';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import KodeverkForPanel from '../../typer/kodeverkForPanel';
import ArbeidsinntektInput from '../felles/ArbeidsinntektInput';
import InntektInput from '../felles/InntektInput';
import {
  erInitialOverstyringAvBeregningsgrunnlag,
  getFaktaOmBeregning,
  getFaktaOmBeregningTilfellerKoder,
} from './BgFaktaUtils';
import VurderBesteberegningForm from './besteberegningFodendeKvinne/VurderBesteberegningForm';
import {
  buildInitialValuesKunYtelse,
  setFaktaPanelForKunYtelse,
  transformValuesForKunYtelse,
} from './kunYtelse/FastsettBgKunYtelse';
import NyIArbeidslivetSNForm from './nyIArbeidslivet/NyIArbeidslivetSNForm';
import TidsbegrensetArbeidsforholdForm from './tidsbegrensetArbeidsforhold/TidsbegrensetArbeidsforholdForm';
import VurderMilitaer from './vurderMilitaer/VurderMilitaer';
import VurderOgFastsettATFL from './vurderOgFastsettATFL/VurderOgFastsettATFL';
import LonnsendringForm from './vurderOgFastsettATFL/forms/LonnsendringForm';
import NyoppstartetFLForm from './vurderOgFastsettATFL/forms/NyoppstartetFLForm';
import VurderEtterlonnSluttpakkeForm from './vurderOgFastsettATFL/forms/VurderEtterlonnSluttpakkeForm';
import VurderMottarYtelseForm from './vurderOgFastsettATFL/forms/VurderMottarYtelseForm';
import VurderRefusjonForm from './vurderrefusjon/VurderRefusjonForm';

const { VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAvklaringsbehovCode;

export const getKortvarigeArbeidsforhold = (beregningsgrunnlag: Beregningsgrunnlag) =>
  getFaktaOmBeregning(beregningsgrunnlag)?.kortvarigeArbeidsforhold || undefined;

export const getKunYtelse = (beregningsgrunnlag: Beregningsgrunnlag) =>
  getFaktaOmBeregning(beregningsgrunnlag)?.kunYtelse || undefined;

export const getVurderMottarYtelse = (beregningsgrunnlag: Beregningsgrunnlag) =>
  getFaktaOmBeregning(beregningsgrunnlag)?.vurderMottarYtelse || undefined;
export const getVurderBesteberegning = (beregningsgrunnlag: Beregningsgrunnlag) =>
  getFaktaOmBeregning(beregningsgrunnlag)?.vurderBesteberegning || undefined;
export const getArbeidsgiverInfoForRefusjonskravSomKommerForSent = (beregningsgrunnlag: Beregningsgrunnlag) =>
  getFaktaOmBeregning(beregningsgrunnlag)?.refusjonskravSomKommerForSentListe || [];

const spacer = (hasShownPanel: boolean): ReactElement => {
  if (hasShownPanel) {
    return <VerticalSpacer twentyPx />;
  }
  return null;
};

const getFaktaPanels = ({
  readOnly,
  isAksjonspunktClosed,
  beregningsgrunnlag,
  kodeverkSamling,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  updateOverstyring,
  renderTextFieldAndSubmitButton,
  vilkarsperiodeSkalVurderesIBehandlingen,
}: {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  renderTextFieldAndSubmitButton: () => React.ReactNode;
  vilkarsperiodeSkalVurderesIBehandlingen: boolean;
}) => {
  const { avklaringsbehov } = beregningsgrunnlag;
  const tilfeller = getFaktaOmBeregningTilfellerKoder(beregningsgrunnlag);
  const faktaOmBeregning = getFaktaOmBeregning(beregningsgrunnlag);
  const faktaPanels = [];

  setFaktaPanelForKunYtelse(
    faktaPanels,
    tilfeller,
    readOnly,
    isAksjonspunktClosed,
    faktaOmBeregning,
    kodeverkSamling,
    renderTextFieldAndSubmitButton,
  );
  faktaPanels.push(
    // @ts-expect-error Fiks
    <React.Fragment key="VurderOgFastsettATFL">
      {spacer(true)}
      {/* @ts-ignore */}
      <VurderOgFastsettATFL
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        tilfeller={tilfeller}
        beregningsgrunnlag={beregningsgrunnlag}
        kodeverkSamling={kodeverkSamling}
        erOverstyrer={erOverstyrer}
        avklaringsbehov={avklaringsbehov}
        updateOverstyring={updateOverstyring}
        renderTextFieldAndSubmitButton={renderTextFieldAndSubmitButton}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        vilkarsperiodeSkalVurderesIBehandlingen={vilkarsperiodeSkalVurderesIBehandlingen}
      />
    </React.Fragment>,
  );
  return faktaPanels;
};

type OwnProps = {
  readOnly: boolean;
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  renderTextFieldAndSubmitButton: () => React.ReactNode;
  vilkarsperiodeSkalVurderesIBehandlingen: boolean;
};

/**
 * FaktaForArbeidstakerFLOgSNPanel
 *
 * Container komponent.. Inneholder paneler for felles faktaavklaring for aksjonspunktet Vurder fakta for arbeidstaker, frilans og selvstendig næringsdrivende
 */
export const FaktaForATFLOgSNPanelImpl: FunctionComponent<OwnProps> = ({
  readOnly,
  isAksjonspunktClosed,
  beregningsgrunnlag,
  kodeverkSamling,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  updateOverstyring,
  renderTextFieldAndSubmitButton,
  vilkarsperiodeSkalVurderesIBehandlingen,
}) => (
  <div>
    {getFaktaPanels({
      readOnly,
      isAksjonspunktClosed,
      beregningsgrunnlag,
      kodeverkSamling,
      erOverstyrer,
      arbeidsgiverOpplysningerPerId,
      updateOverstyring,
      renderTextFieldAndSubmitButton,
      vilkarsperiodeSkalVurderesIBehandlingen,
    }).map(panelOrSpacer => panelOrSpacer)}
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

const getVurderFaktaAksjonspunkt = (avklaringsbehov: BeregningAvklaringsbehov[]) =>
  avklaringsbehov ? avklaringsbehov.find(ap => ap.definisjon === VURDER_FAKTA_FOR_ATFL_SN) : undefined;

export const getBuildInitialValuesFaktaForATFLOgSN = (
  beregningsgrunnlag: Beregningsgrunnlag,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FaktaOmBeregningValues => {
  const tilfeller = getFaktaOmBeregningTilfellerKoder(beregningsgrunnlag);
  const faktaOmBeregning = getFaktaOmBeregning(beregningsgrunnlag);
  return {
    beregningsgrunnlag,
    tilfeller,
    faktaOmBeregning,
    kortvarigeArbeidsforhold: getKortvarigeArbeidsforhold(beregningsgrunnlag),
    vurderMottarYtelse: getVurderMottarYtelse(beregningsgrunnlag),
    kunYtelse: getKunYtelse(beregningsgrunnlag),
    tidsbegrensetValues: TidsbegrensetArbeidsforholdForm.buildInitialValues(
      getKortvarigeArbeidsforhold(beregningsgrunnlag),
    ),
    vurderMottarYtelseValues: VurderMottarYtelseForm.buildInitialValues(
      getVurderMottarYtelse(beregningsgrunnlag),
      tilfeller,
    ),
    arbeidstakerInntektValues: ArbeidsinntektInput.buildInitialValues(
      beregningsgrunnlag.faktaOmBeregning.andelerForFaktaOmBeregning,
    ),
    frilansInntektValues: InntektInput.buildInitialValues(
      beregningsgrunnlag.faktaOmBeregning.andelerForFaktaOmBeregning,
      AktivitetStatus.FRILANSER,
    ),
    dagpengerInntektValues: InntektInput.buildInitialValues(
      beregningsgrunnlag.faktaOmBeregning.andelerForFaktaOmBeregning,
      AktivitetStatus.DAGPENGER,
    ),
    selvstendigNæringsdrivendeInntektValues: InntektInput.buildInitialValues(
      beregningsgrunnlag.faktaOmBeregning.andelerForFaktaOmBeregning,
      AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
    ),
    militærEllerSivilInntektValues: InntektInput.buildInitialValues(
      beregningsgrunnlag.faktaOmBeregning.andelerForFaktaOmBeregning,
      AktivitetStatus.MILITAER_ELLER_SIVIL,
    ),
    vurderRefusjonValues: VurderRefusjonForm.buildInitialValues(
      tilfeller,
      getArbeidsgiverInfoForRefusjonskravSomKommerForSent(beregningsgrunnlag),
    ),
    ...VurderMilitaer.buildInitialValues(faktaOmBeregning),
    ...NyIArbeidslivetSNForm.buildInitialValues(beregningsgrunnlag),
    ...LonnsendringForm.buildInitialValues(beregningsgrunnlag),
    ...NyoppstartetFLForm.buildInitialValues(beregningsgrunnlag),
    ...VurderEtterlonnSluttpakkeForm.buildInitialValues(
      beregningsgrunnlag,
      getVurderFaktaAksjonspunkt(beregningsgrunnlag.avklaringsbehov),
    ),
    ...VurderBesteberegningForm.buildInitialValues(
      beregningsgrunnlag.avklaringsbehov,
      getVurderBesteberegning(beregningsgrunnlag),
      tilfeller,
      erInitialOverstyringAvBeregningsgrunnlag(beregningsgrunnlag),
    ),
    ...VurderOgFastsettATFL.buildInitialValues(
      faktaOmBeregning,
      erInitialOverstyringAvBeregningsgrunnlag(beregningsgrunnlag),
      arbeidsgiverOpplysningerPerId,
      kodeverkSamling,
    ),
    ...buildInitialValuesKunYtelse(
      getKunYtelse(beregningsgrunnlag),
      tilfeller,
      faktaOmBeregning.andelerForFaktaOmBeregning,
      arbeidsgiverOpplysningerPerId,
      kodeverkSamling,
    ),
  };
};

export default FaktaForATFLOgSNPanelImpl;
