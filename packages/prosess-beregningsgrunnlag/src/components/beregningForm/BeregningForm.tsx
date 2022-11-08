import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import { AktivitetStatus, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
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
import { Vilkar } from '@navikt/ft-types/index';
import { BeregningAksjonspunktSubmitType } from '../../types/interface/BeregningsgrunnlagAP';

import BesteberegningResultatGrunnlagPanel from '../besteberegning/BesteberegningResultatGrunnlagPanel';
import SkjeringspunktOgStatusPanel from '../fellesPaneler/SkjeringspunktOgStatusPanel';
import Beregningsgrunnlag from '../beregningsgrunnlagPanel/Beregningsgrunnlag';
import BeregningsresultatTable from '../beregningsresultatPanel/BeregningsresultatTable';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import AksjonspunktTittel from '../fellesPaneler/AksjonspunktTittel';
import YtelsegrunnlagPanel from '../frisinn/YtelsegrunnlagPanel';
import SammenligningOgFastsettelsePanel from '../fellesPaneler/SammenligningOgFastsettelsePanel';
import BeregningFormValues from '../../types/BeregningFormValues';

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

const getStatusList = (beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[]): string[] =>
  beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel
    ? beregningsgrunnlagPerioder[0].beregningsgrunnlagPrStatusOgAndel
        .filter(statusAndel => statusAndel.erTilkommetAndel !== true)
        .map(statusAndel => statusAndel.aktivitetStatus)
    : [];

const sjekkLonnsendringSisteTreMan = (beregningsgrunnlag: BeregningsgrunnlagProp): boolean =>
  beregningsgrunnlag.faktaOmBeregning &&
  beregningsgrunnlag.faktaOmBeregning.saksopplysninger &&
  beregningsgrunnlag.faktaOmBeregning.saksopplysninger.arbeidsforholdMedLønnsendring
    ? beregningsgrunnlag.faktaOmBeregning.saksopplysninger.arbeidsforholdMedLønnsendring.length > 0
    : false;

type OwnProps = {
  readOnly: boolean;
  relevanteStatuser: RelevanteStatuserProp;
  readOnlySubmitButton: boolean;
  valgtBeregningsgrunnlag: BeregningsgrunnlagProp;
  alleKodeverk: AlleKodeverk;
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
  alleKodeverk,
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
  const {
    dekningsgrad,
    skjaeringstidspunktBeregning,
    beregningsgrunnlagPeriode,
    faktaOmBeregning,
    ytelsesspesifiktGrunnlag,
  } = valgtBeregningsgrunnlag;

  const gjelderBesteberegning = gjelderBehandlingenBesteberegning(faktaOmBeregning);
  const gjelderAutomatiskBesteberegning = erAutomatiskBesteberegnet(ytelsesspesifiktGrunnlag);
  const erMidlertidigInaktiv = sjekkErMidlertidigInaktiv(valgtBeregningsgrunnlag);
  const storSpacer = <div className={beregningStyles.storSpace} />;

  const aktivitetStatusList = getStatusList(beregningsgrunnlagPeriode);
  const harAksjonspunkter = gjeldendeAvklaringsbehov && gjeldendeAvklaringsbehov.length > 0;
  const lonnsendringSisteTreMan = sjekkLonnsendringSisteTreMan(valgtBeregningsgrunnlag);
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
            alleKodeverk={alleKodeverk}
            aktivitetStatusList={aktivitetStatusList}
            skjeringstidspunktDato={skjaeringstidspunktBeregning}
            lonnsendringSisteTreMan={lonnsendringSisteTreMan}
          />
          {storSpacer}
          {relevanteStatuser.skalViseBeregningsgrunnlag && (
            <Beregningsgrunnlag
              relevanteStatuser={relevanteStatuser}
              allePerioder={beregningsgrunnlagPeriode}
              gjelderBesteberegning={gjelderBesteberegning}
              alleKodeverk={alleKodeverk}
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
            alleKodeverk={alleKodeverk}
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
            <BeregningsresultatTable
              beregningsgrunnlagPerioder={valgtBeregningsgrunnlag.beregningsgrunnlagPeriode}
              dekningsgrad={dekningsgrad}
              vilkarPeriode={vilkarPeriode}
              aktivitetStatusList={aktivitetStatusList}
              grunnbelop={valgtBeregningsgrunnlag.grunnbeløp}
              ytelseGrunnlag={valgtBeregningsgrunnlag.ytelsesspesifiktGrunnlag}
              erMidlertidigInaktiv={erMidlertidigInaktiv}
            />
          )}
        </FlexColumn>
      </FlexRow>
    </>
  );
};

export default BeregningForm;
