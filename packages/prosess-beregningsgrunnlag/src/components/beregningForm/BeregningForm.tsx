import { FormattedMessage } from 'react-intl';

import { Heading, HGrid, VStack } from '@navikt/ds-react';

import { AktivitetStatus, FagsakYtelseType, FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag as BeregningsgrunnlagProp,
  BeregningsgrunnlagPeriodeProp,
  FaktaOmBeregning,
  YtelseGrunnlag,
} from '@navikt/ft-types';

import { BeregningFormValues } from '../../types/BeregningFormValues';
import { BeregningAksjonspunktSubmitType } from '../../types/interface/BeregningsgrunnlagAP';
import { KodeverkFpSakForPanel } from '../../types/KodeverkForPanelForBg';
import { RelevanteStatuserProp } from '../../types/RelevanteStatuser';
import { Vilkår, Vilkårperiode } from '../../types/Vilkår';
import { Beregningsgrunnlag } from '../beregningsgrunnlagPanel/Beregningsgrunnlag';
import { BeregningsresultatPanel } from '../beregningsresultat/BeregningsresultatPanel';
import { BesteberegningResultatGrunnlagPanel } from '../besteberegning/BesteberegningResultatGrunnlagPanel';
import { AksjonspunktTittel } from '../fellesPaneler/AksjonspunktTittel';
import { SammenligningOgFastsettelsePanel } from '../fellesPaneler/SammenligningOgFastsettelsePanel';
import { SkjeringspunktOgStatusPanel } from '../fellesPaneler/SkjeringspunktOgStatusPanel';
import { Frisinnpanel } from '../frisinn/Frisinnpanel';

const gjelderBehandlingenBesteberegning = (faktaOmBeregning: FaktaOmBeregning | undefined): boolean =>
  faktaOmBeregning && faktaOmBeregning.faktaOmBeregningTilfeller
    ? faktaOmBeregning.faktaOmBeregningTilfeller.some(
        tilfelle => tilfelle === FaktaOmBeregningTilfelle.FASTSETT_BESTEBEREGNING_FODENDE_KVINNE,
      )
    : false;

const erAutomatiskBesteberegnet = (ytelsesspesifiktGrunnlag: YtelseGrunnlag | undefined): boolean =>
  !!ytelsesspesifiktGrunnlag?.besteberegninggrunnlag;

const erFrisinn = (ytelsesspesifiktGrunnlag: YtelseGrunnlag | undefined): boolean =>
  !!ytelsesspesifiktGrunnlag && ytelsesspesifiktGrunnlag.ytelsetype === FagsakYtelseType.FRISINN;

const getStatusList = (beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[]): AktivitetStatus[] =>
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
  kodeverkSamling: KodeverkFpSakForPanel;
  vilkarPeriode?: Vilkårperiode;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[];
  alleBeregningsgrunnlag: BeregningsgrunnlagProp[];
  vilkår: Vilkår;
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
  aktivIndex: number;
};

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
}: Props) => {
  const { skjaeringstidspunktBeregning, beregningsgrunnlagPeriode, faktaOmBeregning, ytelsesspesifiktGrunnlag } =
    valgtBeregningsgrunnlag;

  const gjelderBesteberegning = gjelderBehandlingenBesteberegning(faktaOmBeregning);
  const gjelderAutomatiskBesteberegning = erAutomatiskBesteberegnet(ytelsesspesifiktGrunnlag);
  const gjelderFrisinn = erFrisinn(ytelsesspesifiktGrunnlag);
  const aktivitetStatusList = getStatusList(beregningsgrunnlagPeriode);
  const harAksjonspunkter = gjeldendeAvklaringsbehov && gjeldendeAvklaringsbehov.length > 0;
  return (
    <VStack gap="4">
      {harAksjonspunkter && (
        <AksjonspunktTittel avklaringsbehov={gjeldendeAvklaringsbehov} beregningsgrunnlag={valgtBeregningsgrunnlag} />
      )}
      <HGrid gap="12" columns={{ sm: 1, md: 2 }}>
        <VStack gap="4">
          <Heading size="medium">
            <FormattedMessage id="BeregningForm.Beregning.Tittel" />
          </Heading>
          <VStack gap="10">
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
              <BesteberegningResultatGrunnlagPanel
                besteMåneder={ytelsesspesifiktGrunnlag?.besteberegninggrunnlag?.besteMåneder}
                periode={beregningsgrunnlagPeriode[0]}
              />
            )}
          </VStack>
        </VStack>
        <VStack gap="6">
          <Heading size="medium">
            <FormattedMessage id="BeregningForm.Fastsettelse.Tittel" />
          </Heading>
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
          {gjelderFrisinn && <Frisinnpanel beregningsgrunnlag={valgtBeregningsgrunnlag} />}
          {vilkarPeriode && (
            <BeregningsresultatPanel beregningsgrunnlag={valgtBeregningsgrunnlag} vilkårsperiode={vilkarPeriode} />
          )}
        </VStack>
      </HGrid>
    </VStack>
  );
};
