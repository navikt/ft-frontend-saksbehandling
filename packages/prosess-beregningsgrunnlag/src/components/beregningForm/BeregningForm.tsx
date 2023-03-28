import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  BeregningsgrunnlagPeriodeProp,
  FaktaOmBeregning,
  Vilkarperiode,
  YtelseGrunnlag,
  Vilkar,
} from '@navikt/ft-types';
import { Heading } from '@navikt/ds-react';
import { BeregningAksjonspunktSubmitType } from '../../types/interface/BeregningsgrunnlagAP';

import BesteberegningResultatGrunnlagPanel from '../besteberegning/BesteberegningResultatGrunnlagPanel';
import SkjeringspunktOgStatusPanel from '../fellesPaneler/SkjeringspunktOgStatusPanel';
import Beregningsgrunnlag from '../beregningsgrunnlagPanel/Beregningsgrunnlag';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import AksjonspunktTittel from '../fellesPaneler/AksjonspunktTittel';
import YtelsegrunnlagPanel from '../frisinn/YtelsegrunnlagPanel';
import SammenligningOgFastsettelsePanel from '../fellesPaneler/SammenligningOgFastsettelsePanel';
import BeregningFormValues from '../../types/BeregningFormValues';
import BeregningsresultatPanel from '../beregningsresultat/BeregningsresultatPanel';
import KodeverkForPanel from '../../types/kodeverkForPanel';

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

type OwnProps = {
  readOnly: boolean;
  relevanteStatuser: RelevanteStatuserProp;
  readOnlySubmitButton: boolean;
  valgtBeregningsgrunnlag: BeregningsgrunnlagProp;
  kodeverkSamling: KodeverkForPanel;
  vilkarPeriode?: Vilkarperiode;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[];
  alleBeregningsgrunnlag: BeregningsgrunnlagProp[];
  vilkår: Vilkar;
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
  aktivIndex: number;
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
}) => {
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

export default BeregningForm;
