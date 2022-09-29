import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { AvsnittSkiller, FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  BeregningsgrunnlagPeriodeProp,
  FaktaOmBeregning,
  Vilkarperiode,
  YtelseGrunnlag,
} from '@navikt/ft-types';
import { Heading } from '@navikt/ds-react';
import BeregningsgrunnlagResultatAP, { GruppertAksjonspunktData } from '../../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import BesteberegningResultatGrunnlagPanel from '../besteberegning/BesteberegningResultatGrunnlagPanel';
import AvviksopplysningerPanel from '../fellesPaneler/AvvikopplysningerPanel';
import SkjeringspunktOgStatusPanel from '../fellesPaneler/SkjeringspunktOgStatusPanel';
import AksjonspunktBehandlerSN from '../selvstendigNaeringsdrivende/AksjonspunktsbehandlerSN';
import GrunnlagForAarsinntektPanelAT from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import AksjonspunktBehandlerTidsbegrenset from '../arbeidstaker/AksjonspunktBehandlerTB';
import Beregningsgrunnlag from '../beregningsgrunnlagPanel/Beregningsgrunnlag';
import AksjonspunktBehandler from '../fellesPaneler/AksjonspunktBehandler';
import BeregningsresultatTable from '../beregningsresultatPanel/BeregningsresultatTable';
import AksjonspunktBehandlerFL from '../frilanser/AksjonspunktBehandlerFL';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import { AksjonspunktDataValues, BeregningsgrunnlagValues } from '../../types/BeregningsgrunnlagAksjonspunktTsType';
import { ATFLTidsbegrensetValues, ATFLValues } from '../../types/ATFLAksjonspunktTsType';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import AksjonspunktTittel from '../fellesPaneler/AksjonspunktTittel';
import DekningsgradAksjonspunktPanel from '../fellesPaneler/DekningsgradAksjonspunktPanel';
import DekningsgradValues from '../../types/DekningsgradAksjonspunktTsType';
import { VurderOgFastsettValues } from '../../types/NaringAksjonspunktTsType';
import YtelsegrunnlagPanel from '../frisinn/YtelsegrunnlagPanel';

// ------------------------------------------------------------------------------------------ //
// Variables
// ------------------------------------------------------------------------------------------ //

const formName = 'BeregningForm';
const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_DEKNINGSGRAD,
} = ProsessBeregningsgrunnlagAksjonspunktCode;
// ------------------------------------------------------------------------------------------ //
// Methods
// ------------------------------------------------------------------------------------------ //

const gjelderBehandlingenBesteberegning = (faktaOmBeregning?: FaktaOmBeregning): boolean =>
  faktaOmBeregning && faktaOmBeregning.faktaOmBeregningTilfeller
    ? faktaOmBeregning.faktaOmBeregningTilfeller.some(
        tilfelle => tilfelle === FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE,
      )
    : false;

const sjekkErMidlertidigInaktiv = (beregningsgrunnlag: BeregningsgrunnlagProp): boolean =>
  !!beregningsgrunnlag.aktivitetStatus &&
  beregningsgrunnlag.aktivitetStatus.some(a => a === AktivitetStatus.MIDLERTIDIG_INAKTIV);

const erAutomatiskBesteberegnet = (ytelsesspesifiktGrunnlag?: YtelseGrunnlag): boolean =>
  !!ytelsesspesifiktGrunnlag?.besteberegninggrunnlag;

export const buildInitialValues = (beregningsgrunnlag: BeregningsgrunnlagProp): AksjonspunktDataValues => {
  if (!beregningsgrunnlag || !beregningsgrunnlag.beregningsgrunnlagPeriode) {
    return {};
  }
  const allePerioder = beregningsgrunnlag.beregningsgrunnlagPeriode;
  const alleAndelerIForstePeriode =
    beregningsgrunnlag.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel || [];
  const arbeidstakerAndeler = alleAndelerIForstePeriode.filter(
    andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER,
  );
  const frilanserAndeler = alleAndelerIForstePeriode.filter(
    andel => andel.aktivitetStatus === AktivitetStatus.FRILANSER,
  );
  const selvstendigNaeringAndeler = alleAndelerIForstePeriode.filter(
    andel => andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE,
  );
  return {
    ...Beregningsgrunnlag.buildInitialValues(beregningsgrunnlag.avklaringsbehov),
    ...AksjonspunktBehandlerTidsbegrenset.buildInitialValues(allePerioder),
    ...AksjonspunktBehandlerFL.buildInitialValues(frilanserAndeler),
    ...AksjonspunktBehandlerSN.buildInitialValues(selvstendigNaeringAndeler, beregningsgrunnlag.avklaringsbehov),
    ...GrunnlagForAarsinntektPanelAT.buildInitialValues(arbeidstakerAndeler),
    ...DekningsgradAksjonspunktPanel.buildInitialValues(beregningsgrunnlag),
  };
};

const harAksjonspunkt = (aksjonspunktKode: string, gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  gjeldendeAvklaringsbehov !== undefined &&
  gjeldendeAvklaringsbehov !== null &&
  gjeldendeAvklaringsbehov.some(ap => ap.definisjon === aksjonspunktKode);

export const transformValues = (values: BeregningsgrunnlagValues): GruppertAksjonspunktData[] => {
  const { allePerioder } = values;
  if (allePerioder.length < 1) {
    throw new Error('Ingen beregningsgrunnlagperioder, ugyldig tilstand');
  }
  allePerioder.sort((p1, p2) => {
    if (!p1.beregningsgrunnlagPeriodeFom || !p2.beregningsgrunnlagPeriodeFom) {
      return 0;
    }
    return p1.beregningsgrunnlagPeriodeFom.localeCompare(p2.beregningsgrunnlagPeriodeFom);
  });
  const alleAndelerIFørstePeriode = allePerioder[0].beregningsgrunnlagPrStatusOgAndel || [];
  const aksjonspunkter = [] as BeregningsgrunnlagResultatAP[];
  const grupperteAksjonspunkter = [] as GruppertAksjonspunktData[];
  if (harAksjonspunkt(VURDER_DEKNINGSGRAD, values.gjeldendeAvklaringsbehov)) {
    grupperteAksjonspunkter.push({
      kode: VURDER_DEKNINGSGRAD,
      aksjonspunktData: DekningsgradAksjonspunktPanel.transformValues(values as Required<DekningsgradValues>),
    });
    aksjonspunkter.push(DekningsgradAksjonspunktPanel.transformValues(values as Required<DekningsgradValues>));
  }
  if (harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, values.gjeldendeAvklaringsbehov)) {
    grupperteAksjonspunkter.push({
      kode: FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
      aksjonspunktData: Beregningsgrunnlag.transformATFLValues(
        values as ATFLValues,
        values.relevanteStatuser,
        alleAndelerIFørstePeriode,
      ),
    });
    return grupperteAksjonspunkter;
  }
  if (
    harAksjonspunkt(
      VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      values.gjeldendeAvklaringsbehov,
    ) ||
    harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, values.gjeldendeAvklaringsbehov)
  ) {
    grupperteAksjonspunkter.push({
      kode: harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET, values.gjeldendeAvklaringsbehov)
        ? FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET
        : VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      aksjonspunktData: AksjonspunktBehandlerSN.transformValues(
        values as VurderOgFastsettValues,
        values.gjeldendeAvklaringsbehov,
      ),
    });
    return grupperteAksjonspunkter;
  }
  if (harAksjonspunkt(FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD, values.gjeldendeAvklaringsbehov)) {
    grupperteAksjonspunkter.push({
      kode: FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
      aksjonspunktData: Beregningsgrunnlag.transformATFLTidsbegrensetValues(
        values as ATFLTidsbegrensetValues,
        allePerioder,
      ),
    });
    return grupperteAksjonspunkter;
  }
  return grupperteAksjonspunkter;
};

const getStatusList = (beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[]): string[] =>
  beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel
    ? beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel
        .filter(statusAndel => statusAndel.erTilkommetAndel !== true)
        .map(statusAndel => statusAndel.aktivitetStatus)
    : [];

type OwnProps = {
  readOnly: boolean;
  relevanteStatuser: RelevanteStatuserProp;
  readOnlySubmitButton: boolean;
  beregningsgrunnlag: BeregningsgrunnlagProp;
  alleKodeverk: AlleKodeverk;
  vilkarPeriode?: Vilkarperiode;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[];
  isSubmitting: boolean;
  isDirty: boolean;
  fieldIndex: number;
};

// ------------------------------------------------------------------------------------------ //
// Component : BeregningFormImpl
// ------------------------------------------------------------------------------------------ //
/**
 *
 * BeregningForm
 *
 * Fungerer som den overordnene formen for beregningkomponentene og håndterer alt av submits
 * relatert til beregning.
 *
 */
const BeregningForm: FunctionComponent<OwnProps> = ({
  readOnly,
  beregningsgrunnlag,
  relevanteStatuser,
  readOnlySubmitButton,
  alleKodeverk,
  vilkarPeriode,
  arbeidsgiverOpplysningerPerId,
  gjeldendeAvklaringsbehov,
  isSubmitting,
  isDirty,
  fieldIndex,
}) => {
  const {
    dekningsgrad,
    skjaeringstidspunktBeregning,
    beregningsgrunnlagPeriode,
    faktaOmBeregning,
    ytelsesspesifiktGrunnlag,
  } = beregningsgrunnlag;

  const gjelderBesteberegning = gjelderBehandlingenBesteberegning(faktaOmBeregning);
  const gjelderAutomatiskBesteberegning = erAutomatiskBesteberegnet(ytelsesspesifiktGrunnlag);
  const erMidlertidigInaktiv = sjekkErMidlertidigInaktiv(beregningsgrunnlag);

  const aktivitetStatusList = getStatusList(beregningsgrunnlagPeriode);
  const harAksjonspunkter = gjeldendeAvklaringsbehov && gjeldendeAvklaringsbehov.length > 0;
  return (
    <>
      {harAksjonspunkter && (
        <>
          <VerticalSpacer eightPx />
          <AksjonspunktTittel avklaringsbehov={gjeldendeAvklaringsbehov} beregningsgrunnlag={beregningsgrunnlag} />
        </>
      )}
      <FlexRow>
        <FlexColumn className={beregningStyles.venstreKolonne}>
          <Heading size="medium">
            <FormattedMessage id="Beregningsgrunnlag.Title.Beregning" />
          </Heading>
          <VerticalSpacer sixteenPx />
          <SkjeringspunktOgStatusPanel
            alleKodeverk={alleKodeverk}
            aktivitetStatusList={aktivitetStatusList}
            skjeringstidspunktDato={skjaeringstidspunktBeregning}
          />
          <VerticalSpacer thirtyTwoPx />
          {relevanteStatuser.skalViseBeregningsgrunnlag && (
            <Beregningsgrunnlag
              relevanteStatuser={relevanteStatuser}
              allePerioder={beregningsgrunnlagPeriode}
              gjelderBesteberegning={gjelderBesteberegning}
              alleKodeverk={alleKodeverk}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              sammenligningsGrunnlagInntekter={beregningsgrunnlag.inntektsgrunnlag}
              sammenligningsgrunnlag={beregningsgrunnlag.sammenligningsgrunnlagPrStatus}
            />
          )}
          <VerticalSpacer twentyPx />
          {gjelderAutomatiskBesteberegning && (
            <BesteberegningResultatGrunnlagPanel
              besteMåneder={ytelsesspesifiktGrunnlag?.besteberegninggrunnlag?.besteMåneder}
              periode={beregningsgrunnlagPeriode[0]}
            />
          )}
        </FlexColumn>
        <FlexColumn className={beregningStyles.hoyreKolonne}>
          <div className={beregningStyles.paragrafSkiller}>
            <AvsnittSkiller spaceAbove spaceUnder dividerParagraf />
          </div>
          <Heading size="medium" className={beregningStyles.panelRight}>
            <FormattedMessage id="Beregningsgrunnlag.Title.Fastsettelse" />
          </Heading>
          <VerticalSpacer sixteenPx />
          <AvviksopplysningerPanel
            sammenligningsgrunnlagPrStatus={beregningsgrunnlag.sammenligningsgrunnlagPrStatus}
            relevanteStatuser={relevanteStatuser}
            allePerioder={beregningsgrunnlagPeriode}
            harAksjonspunkter={harAksjonspunkter}
            gjelderBesteberegning={gjelderBesteberegning}
          />
          {harAksjonspunkter && (
            <>
              <VerticalSpacer fourtyPx />
              <AksjonspunktBehandler
                readOnly={readOnly}
                readOnlySubmitButton={readOnlySubmitButton}
                formName={formName}
                allePerioder={beregningsgrunnlagPeriode}
                alleKodeverk={alleKodeverk}
                avklaringsbehov={gjeldendeAvklaringsbehov}
                relevanteStatuser={relevanteStatuser}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                isSubmitting={isSubmitting}
                isDirty={isDirty}
                fieldIndex={fieldIndex}
              />
            </>
          )}
          <>
            <AvsnittSkiller spaceAbove spaceUnder rightPanel />
            <YtelsegrunnlagPanel beregningsgrunnlag={beregningsgrunnlag} />
          </>
          {vilkarPeriode && (
            <BeregningsresultatTable
              beregningsgrunnlagPerioder={beregningsgrunnlag.beregningsgrunnlagPeriode}
              dekningsgrad={dekningsgrad}
              vilkarPeriode={vilkarPeriode}
              aktivitetStatusList={aktivitetStatusList}
              grunnbelop={beregningsgrunnlag.grunnbeløp}
              ytelseGrunnlag={beregningsgrunnlag.ytelsesspesifiktGrunnlag}
              erMidlertidigInaktiv={erMidlertidigInaktiv}
            />
          )}
        </FlexColumn>
      </FlexRow>
    </>
  );
};

export default BeregningForm;
