import React, { FunctionComponent, ReactNode } from 'react';
import { BodyShort, Heading } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AktivitetStatus, SammenligningType } from '@navikt/ft-kodeverk';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  SammenligningsgrunlagProp,
} from '@navikt/ft-types';
import { Vilkar } from '@navikt/ft-types/index';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import SammenligningForklaringPanel from './SammenligningForklaringPanel';
import SammenligningsgrunnlagPanel from './SammenligningsgrunnlagPanel';
import AksjonspunktBehandler from './AksjonspunktBehandler';
import { BeregningAksjonspunktSubmitType } from '../../types/interface/BeregningsgrunnlagAP';
import BeregningFormValues from '../../types/BeregningFormValues';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
} = ProsessBeregningsgrunnlagAksjonspunktCode;

type SammenligningtypeRekkefølgeType = {
  [key: string]: number;
};

// Lavere tall = høyere opp i skjermbildet
const sammenligningRekkefølgeMap: SammenligningtypeRekkefølgeType = {
  [SammenligningType.FL]: 1,
  [SammenligningType.AT]: 1,
  [SammenligningType.AT_FL]: 1,
  [SammenligningType.ATFLSN]: 1,
  [SammenligningType.SN]: 2,
};

const sorterSammenligningsgrunnlag = (
  sammenligningsgrunnlag: SammenligningsgrunlagProp[],
): SammenligningsgrunlagProp[] =>
  sammenligningsgrunnlag.sort((sg1, sg2) => {
    if (sg1.sammenligningsgrunnlagType === sg2.sammenligningsgrunnlagType) {
      return 0;
    }
    return sammenligningRekkefølgeMap[sg1.sammenligningsgrunnlagType as keyof SammenligningtypeRekkefølgeType] <
      sammenligningRekkefølgeMap[sg2.sammenligningsgrunnlagType as keyof SammenligningtypeRekkefølgeType]
      ? -1
      : 1;
  });

const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
  // Andelen er fastsatt før og må kunne fastsettes igjen
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }
  // Andeler som er lagt til av sbh eller tilkom før stp skal ikke kunne endres på
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};

const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[], statuser: string[]): BeregningsgrunnlagAndel[] => {
  if (!andeler) {
    return [];
  }

  return andeler
    .filter(andel => statuser.includes(andel.aktivitetStatus))
    .filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};

const beløpEller0 = (beløp: number | undefined): number => {
  if (!beløp) {
    return 0;
  }
  return beløp;
};

const beregnet = (andel: BeregningsgrunnlagAndel): number => (andel.beregnetPrAar ? andel.beregnetPrAar : 0);

const beregnAarsintektForAktivitetStatuser = (
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
  statuser: string[],
): number => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndelerIForstePeriode, statuser);
  if (relevanteAndeler) {
    const brutto = relevanteAndeler.reduce((acc, andel) => acc + beregnet(andel), 0);
    const bortfaltNaturalytelse = relevanteAndeler.reduce(
      (acc, andel) => acc + beløpEller0(andel?.arbeidsforhold?.naturalytelseBortfaltPrÅr),
      0,
    );
    const tilkommetNaturalytelse = relevanteAndeler.reduce(
      (acc, andel) => acc + beløpEller0(andel?.arbeidsforhold?.naturalytelseTilkommetPrÅr),
      0,
    );
    return brutto + bortfaltNaturalytelse - tilkommetNaturalytelse;
  }
  return 0;
};

const matcherSammenligningsgrunnlag = (
  sammenligningsgrunnlag: SammenligningsgrunlagProp,
  avklaringsbehov: BeregningAvklaringsbehov,
): boolean => {
  switch (sammenligningsgrunnlag.sammenligningsgrunnlagType) {
    case SammenligningType.FL:
      return avklaringsbehov.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS;
    case SammenligningType.AT:
    case SammenligningType.AT_FL:
      return (
        avklaringsbehov.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS ||
        avklaringsbehov.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD
      );
    case SammenligningType.SN:
      return avklaringsbehov.definisjon === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE;
    case SammenligningType.MIDLERTIDIG_INAKTIV:
      return avklaringsbehov.definisjon === VURDER_VARIG_ENDRET_ARBEIDSSITUASJON;
    case SammenligningType.ATFLSN:
      return true; // Catch-all type som betyr at vi kun skal ha et aksjonspunkt, brukes til grunnlag er migrert til spesifikke typer
    default:
      throw new Error(`Ukjent sammenligningstype ${sammenligningsgrunnlag.sammenligningsgrunnlagType}`);
  }
};

const finnAksjonspunktForSammenligningsgrunnlag = (
  sammenligningsgrunnlag: SammenligningsgrunlagProp,
  avklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov.find(ab => matcherSammenligningsgrunnlag(sammenligningsgrunnlag, ab));

const finnTittel = (sammenligningsgrunnlag: SammenligningsgrunlagProp, harPGIAndel: boolean): ReactNode => {
  const atflTittel = <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.ATFL.Tittel" />;
  const snTittel = <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.SN.Tittel" />;
  switch (sammenligningsgrunnlag.sammenligningsgrunnlagType) {
    case SammenligningType.AT:
    case SammenligningType.FL:
    case SammenligningType.AT_FL:
      return atflTittel;
    case SammenligningType.SN:
      return snTittel;
    case SammenligningType.ATFLSN:
      return harPGIAndel ? snTittel : atflTittel;
    case SammenligningType.MIDLERTIDIG_INAKTIV:
      return <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel" />;
    default:
      throw new Error(`Ukjent sammenligningstype ${sammenligningsgrunnlag.sammenligningsgrunnlagType}`);
  }
};

const finnBeregnetInntekt = (
  sg: SammenligningsgrunlagProp,
  pgiAndel: BeregningsgrunnlagAndel | undefined,
  alleAndelerIFørstePeriode: BeregningsgrunnlagAndel[],
): number => {
  if (sg.sammenligningsgrunnlagType === SammenligningType.SN && pgiAndel) {
    return pgiAndel.pgiSnitt || 0;
  }
  if (sg.sammenligningsgrunnlagType === SammenligningType.MIDLERTIDIG_INAKTIV && pgiAndel) {
    return pgiAndel.pgiSnitt || 0;
  }
  if (sg.sammenligningsgrunnlagType === SammenligningType.ATFLSN) {
    return pgiAndel
      ? pgiAndel.pgiSnitt || 0
      : beregnAarsintektForAktivitetStatuser(alleAndelerIFørstePeriode, [
          AktivitetStatus.ARBEIDSTAKER,
          AktivitetStatus.FRILANSER,
        ]);
  }
  return beregnAarsintektForAktivitetStatuser(alleAndelerIFørstePeriode, [
    AktivitetStatus.ARBEIDSTAKER,
    AktivitetStatus.FRILANSER,
  ]);
};

type OwnProps = {
  readOnly: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  alleKodeverk: AlleKodeverk;
  readOnlySubmitButton: boolean;
  sammenligningsgrunnlag: SammenligningsgrunlagProp[];
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  relevanteStatuser: RelevanteStatuserProp;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  gjelderBesteberegning: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkår: Vilkar;
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
  aktivIndex: number;
};

const SammenligningOgFastsettelsePanel: FunctionComponent<OwnProps> = ({
  readOnly,
  avklaringsbehov,
  readOnlySubmitButton,
  allePerioder,
  alleKodeverk,
  relevanteStatuser,
  arbeidsgiverOpplysningerPerId,
  gjelderBesteberegning,
  sammenligningsgrunnlag,
  beregningsgrunnlagListe,
  vilkår,
  submitCallback,
  formData,
  setFormData,
  aktivIndex,
}) => {
  const storSpacer = <div className={beregningStyles.storSpace} />;
  const alleAndelerIFørstePeriode = allePerioder[0].beregningsgrunnlagPrStatusOgAndel || [];
  const sorterteGrunnlag = sorterSammenligningsgrunnlag(sammenligningsgrunnlag);
  const aksjonspunktUtenSammenligningsgrunnlag = avklaringsbehov.find(
    ab => ab.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  );

  const panelForklaring = (
    <SammenligningForklaringPanel
      sammenligningsgrunnlag={sammenligningsgrunnlag}
      relevanteStatuser={relevanteStatuser}
      erManueltBesteberegnet={gjelderBesteberegning}
    />
  );
  const panelerPrSg = sorterteGrunnlag.map((sg: SammenligningsgrunlagProp) => {
    const andelMedPGI = alleAndelerIFørstePeriode.find(
      andel =>
        (andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE ||
          andel.aktivitetStatus === AktivitetStatus.BRUKERS_ANDEL) &&
        !andel.erTilkommetAndel,
    );

    const avklaring = finnAksjonspunktForSammenligningsgrunnlag(sg, avklaringsbehov);
    const tittel = finnTittel(sg, !!andelMedPGI);
    return (
      <div key={sg.sammenligningsgrunnlagType}>
        <Heading size="xsmall">{tittel}</Heading>
        <SammenligningsgrunnlagPanel
          sammenligningsgrunnlag={sg}
          beregnetAarsinntekt={finnBeregnetInntekt(sg, andelMedPGI, alleAndelerIFørstePeriode)}
        />
        {storSpacer}
        {avklaring && (
          <AksjonspunktBehandler
            readOnly={readOnly}
            avklaringsbehov={avklaring}
            alleKodeverk={alleKodeverk}
            allePerioder={allePerioder}
            readOnlySubmitButton={readOnlySubmitButton}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            beregningsgrunnlagListe={beregningsgrunnlagListe}
            vilkår={vilkår}
            submitCallback={submitCallback}
            relevanteStatuser={relevanteStatuser}
            formData={formData}
            setFormData={setFormData}
            aktivIndex={aktivIndex}
            sammenligningsgrunnlag={sg}
          />
        )}
        {storSpacer}
      </div>
    );
  });
  return (
    <div className={beregningStyles.panelRight}>
      {panelForklaring}
      <VerticalSpacer eightPx />
      {panelerPrSg}
      {aksjonspunktUtenSammenligningsgrunnlag && (
        <>
          <BodyShort size="small">
            <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.SN.NyIArbeidslivet" />
          </BodyShort>
          <AksjonspunktBehandler
            readOnly={readOnly}
            avklaringsbehov={aksjonspunktUtenSammenligningsgrunnlag}
            alleKodeverk={alleKodeverk}
            allePerioder={allePerioder}
            readOnlySubmitButton={readOnlySubmitButton}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            beregningsgrunnlagListe={beregningsgrunnlagListe}
            vilkår={vilkår}
            submitCallback={submitCallback}
            relevanteStatuser={relevanteStatuser}
            formData={formData}
            setFormData={setFormData}
            aktivIndex={aktivIndex}
          />
        </>
      )}
    </div>
  );
};

export default SammenligningOgFastsettelsePanel;
