import { FormattedMessage } from 'react-intl';

import { Heading } from '@navikt/ds-react';

import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  BeregningsgrunnlagPeriodeProp,
  FaktaOmBeregning,
  YtelseGrunnlag,
} from '@navikt/ft-types';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { BeregningFormValues } from '../../types/BeregningFormValues';
import { BeregningAksjonspunktSubmitType } from '../../types/interface/BeregningsgrunnlagAP';
import { KodeverkForPanel } from '../../types/KodeverkForPanelForBg';
import { RelevanteStatuserProp } from '../../types/RelevanteStatuser';
import { Vilkår, Vilkårperiode } from '../../types/Vilkår';
import { Beregningsgrunnlag } from '../beregningsgrunnlagPanel/Beregningsgrunnlag';
import { BeregningsresultatPanel } from '../beregningsresultat/BeregningsresultatPanel';
import { BesteberegningResultatGrunnlagPanel } from '../besteberegning/BesteberegningResultatGrunnlagPanel';
import { AksjonspunktTittel } from '../fellesPaneler/AksjonspunktTittel';
import { SammenligningOgFastsettelsePanel } from '../fellesPaneler/SammenligningOgFastsettelsePanel';
import { SkjeringspunktOgStatusPanel } from '../fellesPaneler/SkjeringspunktOgStatusPanel';
import { YtelsegrunnlagPanel } from '../frisinn/YtelsegrunnlagPanel';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

const gjelderBehandlingenBesteberegning = (faktaOmBeregning?: FaktaOmBeregning): boolean =>
  faktaOmBeregning && faktaOmBeregning.faktaOmBeregningTilfeller
    ? faktaOmBeregning.faktaOmBeregningTilfeller.some(
        tilfelle => tilfelle === FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE,
      )
    : false;

const erAutomatiskBesteberegnet = (ytelsesspesifiktGrunnlag?: YtelseGrunnlag): boolean =>
  !!ytelsesspesifiktGrunnlag?.besteberegninggrunnlag;

const getStatusList = (beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[]): string[] =>
  beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel
    ? beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel
        .filter(statusAndel => statusAndel.erTilkommetAndel !== true)
        .map(statusAndel => statusAndel.aktivitetStatus)
    : [];

type Props = {
  readOnly: boolean;
  relevanteStatuser: RelevanteStatuserProp;
  readOnlySubmitButton: boolean;
  valgtBeregningsgrunnlag: BeregningsgrunnlagProp;
  kodeverkSamling: KodeverkForPanel;
  vilkarPeriode?: Vilkårperiode;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[];
  alleBeregningsgrunnlag: BeregningsgrunnlagProp[];
  vilkår: Vilkår;
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
  aktivIndex: number;
  sentryCallback?: (error: string) => void;
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
export const BeregningForm = ({
  readOnly,
  valgtBeregningsgrunnlag,
  relevanteStatuser,
  readOnlySubmitButton,
  kodeverkSamling,
  vilkarPeriode,
  arbeidsgiverOpplysningerPerId,
  gjeldendeAvklaringsbehov,
  alleBeregningsgrunnlag,
  vilkår,
  submitCallback,
  formData,
  setFormData,
  aktivIndex,
  sentryCallback,
}: Props) => {
  const { skjaeringstidspunktBeregning, beregningsgrunnlagPeriode, faktaOmBeregning, ytelsesspesifiktGrunnlag } =
    valgtBeregningsgrunnlag;

  const gjelderBesteberegning = gjelderBehandlingenBesteberegning(faktaOmBeregning);
  const gjelderAutomatiskBesteberegning = erAutomatiskBesteberegnet(ytelsesspesifiktGrunnlag);
  const storSpacer = <div className={beregningStyles.storSpace} />;

  const aktivitetStatusList = getStatusList(beregningsgrunnlagPeriode);
  const harAksjonspunkter = gjeldendeAvklaringsbehov && gjeldendeAvklaringsbehov.length > 0;
  return (
    <>
      {harAksjonspunkter && (
        <>
          <VerticalSpacer eightPx />
          <AksjonspunktTittel avklaringsbehov={gjeldendeAvklaringsbehov} beregningsgrunnlag={valgtBeregningsgrunnlag} />
        </>
      )}
      <FlexRow>
        <FlexColumn className={beregningStyles.venstreKolonne}>
          <Heading size="medium">
            <FormattedMessage id="Beregningsgrunnlag.Title.Beregning" />
          </Heading>
          <VerticalSpacer sixteenPx />
          <SkjeringspunktOgStatusPanel
            kodeverkSamling={kodeverkSamling}
            aktivitetStatusList={aktivitetStatusList}
            skjeringstidspunktDato={skjaeringstidspunktBeregning}
            saksopplysninger={
              valgtBeregningsgrunnlag.faktaOmBeregning
                ? valgtBeregningsgrunnlag.faktaOmBeregning.saksopplysninger
                : undefined
            }
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
          {storSpacer}
          {relevanteStatuser.skalViseBeregningsgrunnlag && (
            <Beregningsgrunnlag
              relevanteStatuser={relevanteStatuser}
              allePerioder={beregningsgrunnlagPeriode}
              gjelderBesteberegning={gjelderBesteberegning}
              kodeverkSamling={kodeverkSamling}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              sammenligningsGrunnlagInntekter={valgtBeregningsgrunnlag.inntektsgrunnlag}
              sammenligningsgrunnlag={valgtBeregningsgrunnlag.sammenligningsgrunnlagPrStatus}
            />
          )}
          {gjelderAutomatiskBesteberegning && (
            <>
              {storSpacer}
              <BesteberegningResultatGrunnlagPanel
                besteMåneder={ytelsesspesifiktGrunnlag?.besteberegninggrunnlag?.besteMåneder}
                periode={beregningsgrunnlagPeriode[0]}
              />
            </>
          )}
        </FlexColumn>
        <FlexColumn className={beregningStyles.hoyreKolonne}>
          <Heading size="medium" className={beregningStyles.panelRight}>
            <FormattedMessage id="Beregningsgrunnlag.Title.Fastsettelse" />
          </Heading>
          <VerticalSpacer sixteenPx />
          <SammenligningOgFastsettelsePanel
            readOnly={readOnly}
            readOnlySubmitButton={readOnlySubmitButton}
            kodeverkSamling={kodeverkSamling}
            relevanteStatuser={relevanteStatuser}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            gjelderBesteberegning={gjelderBesteberegning}
            sammenligningsgrunnlag={valgtBeregningsgrunnlag.sammenligningsgrunnlagPrStatus || []}
            beregningsgrunnlagListe={alleBeregningsgrunnlag}
            vilkår={vilkår}
            submitCallback={submitCallback}
            formData={formData}
            setFormData={setFormData}
            aktivIndex={aktivIndex}
            sentryCallback={sentryCallback}
          />
          <>
            <VerticalSpacer sixteenPx />
            <YtelsegrunnlagPanel beregningsgrunnlag={valgtBeregningsgrunnlag} />
          </>
          {vilkarPeriode && (
            <BeregningsresultatPanel beregningsgrunnlag={valgtBeregningsgrunnlag} vilkårsperiode={vilkarPeriode} />
          )}
        </FlexColumn>
      </FlexRow>
    </>
  );
};
