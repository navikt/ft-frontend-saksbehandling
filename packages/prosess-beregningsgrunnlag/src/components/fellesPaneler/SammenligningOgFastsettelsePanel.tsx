import { ReactNode, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';

import { AktivitetStatus, SammenligningType } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  SammenligningsgrunlagProp,
} from '@navikt/ft-types';

import { BeregningFormValues } from '../../types/BeregningFormValues';
import { BeregningAksjonspunktSubmitType } from '../../types/interface/BeregningsgrunnlagAP';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import { KodeverkForPanel } from '../../types/KodeverkForPanelForBg';
import { RelevanteStatuserProp } from '../../types/RelevanteStatuser';
import { Vilkår } from '../../types/Vilkår';
import { AksjonspunktBehandler, defaultFormName } from './AksjonspunktBehandler';
import { LovParagraf, mapAvklaringsbehovTilLovparagraf, mapSammenligningtypeTilLovparagraf } from './lovparagraf';
import { SammenligningForklaringPanel } from './SammenligningForklaringPanel';
import { SammenligningsgrunnlagPanel } from './SammenligningsgrunnlagPanel';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

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

const beregnet = (andel: BeregningsgrunnlagAndel): number => andel.beregnetPrAar ?? 0;

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

const finnTittel = (sammenligningsgrunnlag: SammenligningsgrunlagProp, lovparagraf: LovParagraf): ReactNode => {
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
      return lovparagraf === LovParagraf.ÅTTE_TRETTIFEM ? snTittel : atflTittel;
    case SammenligningType.MIDLERTIDIG_INAKTIV:
      return <FormattedMessage id="Beregningsgrunnlag.Avviksopplysninger.MIDL.Tittel" />;
    default:
      throw new Error(`Ukjent sammenligningstype ${sammenligningsgrunnlag.sammenligningsgrunnlagType}`);
  }
};

type BeregnetInntektProp = {
  inntekt: number;
  erPGI: boolean;
};
const finnBeregnetInntekt = (
  sg: SammenligningsgrunlagProp,
  alleAndelerIFørstePeriode: BeregningsgrunnlagAndel[],
): BeregnetInntektProp => {
  const pgiAndel = alleAndelerIFørstePeriode.find(
    andel =>
      (andel.aktivitetStatus === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE ||
        andel.aktivitetStatus === AktivitetStatus.BRUKERS_ANDEL) &&
      !andel.erTilkommetAndel,
  );
  if (sg.sammenligningsgrunnlagType === SammenligningType.SN && pgiAndel) {
    return {
      inntekt: pgiAndel.pgiSnitt ?? 0,
      erPGI: true,
    };
  }
  if (sg.sammenligningsgrunnlagType === SammenligningType.MIDLERTIDIG_INAKTIV && pgiAndel) {
    return {
      inntekt: pgiAndel.pgiSnitt ?? 0,
      erPGI: true,
    };
  }
  if (sg.sammenligningsgrunnlagType === SammenligningType.ATFLSN) {
    return pgiAndel
      ? {
          inntekt: pgiAndel.pgiSnitt ?? 0,
          erPGI: true,
        }
      : {
          inntekt: beregnAarsintektForAktivitetStatuser(alleAndelerIFørstePeriode, [
            AktivitetStatus.ARBEIDSTAKER,
            AktivitetStatus.FRILANSER,
          ]),
          erPGI: false,
        };
  }
  return {
    inntekt: beregnAarsintektForAktivitetStatuser(alleAndelerIFørstePeriode, [
      AktivitetStatus.ARBEIDSTAKER,
      AktivitetStatus.FRILANSER,
    ]),
    erPGI: false,
  };
};

type Props = {
  readOnly: boolean;
  kodeverkSamling: KodeverkForPanel;
  readOnlySubmitButton: boolean;
  sammenligningsgrunnlag: SammenligningsgrunlagProp[];
  relevanteStatuser: RelevanteStatuserProp;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  gjelderBesteberegning: boolean;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkår: Vilkår;
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
  aktivIndex: number;
};

type GruppertPrLovparagraf = {
  [key: string]: Beregningsgrunnlag[];
};

const finnFormName = (lovparagraf: LovParagraf): string => `${defaultFormName}_${lovparagraf}`;

function leggTilBeregningsgrunnlag(
  gruppert: GruppertPrLovparagraf,
  lovparagraf: LovParagraf,
  bg: Beregningsgrunnlag,
): GruppertPrLovparagraf {
  const nyGruppert = {
    ...gruppert,
  };
  if (nyGruppert[lovparagraf]) {
    nyGruppert[lovparagraf].push(bg);
  } else {
    nyGruppert[lovparagraf] = [bg];
  }
  return nyGruppert;
}

const grupperPrLovparagraf = (beregningsgrunnlagListe: Beregningsgrunnlag[]) =>
  beregningsgrunnlagListe.reduce((gruppert, bg) => {
    let nyGruppert = {
      ...gruppert,
    };

    const harAvklaringUtenSG = bg.avklaringsbehov.find(
      a =>
        a.definisjon === ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
    );
    if (harAvklaringUtenSG) {
      nyGruppert = leggTilBeregningsgrunnlag(nyGruppert, LovParagraf.ÅTTE_TRETTIFEM, bg);
    }
    if (!bg.sammenligningsgrunnlagPrStatus || bg.sammenligningsgrunnlagPrStatus.length === 0) {
      return nyGruppert;
    }
    bg.sammenligningsgrunnlagPrStatus.forEach(sg => {
      const lovparagraf = mapSammenligningtypeTilLovparagraf(sg.sammenligningsgrunnlagType, bg.aktivitetStatus);
      nyGruppert = leggTilBeregningsgrunnlag(nyGruppert, lovparagraf, bg);
    });
    return nyGruppert;
  }, {} as GruppertPrLovparagraf);

export const SammenligningOgFastsettelsePanel = ({
  readOnly,
  readOnlySubmitButton,
  kodeverkSamling,
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
}: Props) => {
  const gruppertPrLovparagraf = grupperPrLovparagraf(beregningsgrunnlagListe);
  const [finnesFormSomSubmittes, setSubmitting] = useState(false);

  const panelForklaring = (
    <SammenligningForklaringPanel
      sammenligningsgrunnlag={sammenligningsgrunnlag}
      relevanteStatuser={relevanteStatuser}
      erManueltBesteberegnet={gjelderBesteberegning}
      erNyIArbeidslivet={
        !!beregningsgrunnlagListe[aktivIndex].beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel?.find(
          a => a.erNyIArbeidslivet,
        )
      }
    />
  );

  const lagPanelForLovparagraf = (lovparagraf: LovParagraf) => {
    if (gruppertPrLovparagraf[lovparagraf] && gruppertPrLovparagraf[lovparagraf].length > 0) {
      const grunnlagForLovparagraf = gruppertPrLovparagraf[lovparagraf];
      const aktivPeriodeFom = beregningsgrunnlagListe[aktivIndex].vilkårsperiodeFom;
      const aktivtGrunnlagForLovparagraf = grunnlagForLovparagraf.find(bg => bg.vilkårsperiodeFom === aktivPeriodeFom);
      const sg = aktivtGrunnlagForLovparagraf
        ? aktivtGrunnlagForLovparagraf.sammenligningsgrunnlagPrStatus?.find(
            s =>
              mapSammenligningtypeTilLovparagraf(
                s.sammenligningsgrunnlagType,
                aktivtGrunnlagForLovparagraf?.aktivitetStatus,
              ) === lovparagraf,
          )
        : undefined;
      const harAvklaringsbehovForLovparagraf = !!gruppertPrLovparagraf[lovparagraf].find(
        bg => !!bg.avklaringsbehov.find(a => mapAvklaringsbehovTilLovparagraf(a) === lovparagraf),
      );
      const harAktivtAvklaringsbehovForLovparagraf =
        aktivtGrunnlagForLovparagraf &&
        !!aktivtGrunnlagForLovparagraf.avklaringsbehov.find(a => mapAvklaringsbehovTilLovparagraf(a) === lovparagraf);
      const andelerIFørstePeriode =
        aktivtGrunnlagForLovparagraf?.beregningsgrunnlagPeriode[0].beregningsgrunnlagPrStatusOgAndel ?? [];
      const formName = finnFormName(lovparagraf);
      return (
        <VStack gap="10">
          {!!sg && (
            <VStack gap="1">
              <Heading size="xsmall">{finnTittel(sg, lovparagraf)}</Heading>
              <SammenligningsgrunnlagPanel
                sammenligningsgrunnlag={sg}
                beregnetAarsinntekt={finnBeregnetInntekt(sg, andelerIFørstePeriode).inntekt}
                erPGI={finnBeregnetInntekt(sg, andelerIFørstePeriode).erPGI}
              />
            </VStack>
          )}
          {harAvklaringsbehovForLovparagraf && (
            <div style={{ display: harAktivtAvklaringsbehovForLovparagraf ? 'block' : 'none' }}>
              <AksjonspunktBehandler
                readOnly={readOnly}
                lovparagraf={lovparagraf}
                kodeverkSamling={kodeverkSamling}
                readOnlySubmitButton={readOnlySubmitButton}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                beregningsgrunnlagListe={beregningsgrunnlagListe}
                vilkår={vilkår}
                submitCallback={submitCallback}
                formData={formData && formName in formData ? formData : undefined}
                setFormData={setFormData}
                aktivIndex={aktivIndex}
                finnesFormSomSubmittes={finnesFormSomSubmittes}
                setSubmitting={setSubmitting}
              />
            </div>
          )}
        </VStack>
      );
    }
    return null;
  };

  return (
    <VStack gap="5" className={beregningStyles.panelRight}>
      {panelForklaring}
      <VStack gap="8">
        {lagPanelForLovparagraf(LovParagraf.ÅTTE_TRETTI)}
        {lagPanelForLovparagraf(LovParagraf.ÅTTE_TRETTIFEM)}
      </VStack>
    </VStack>
  );
};
