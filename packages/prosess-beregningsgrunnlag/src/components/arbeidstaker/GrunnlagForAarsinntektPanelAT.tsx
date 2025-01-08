import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { dateFormat, formatCurrencyNoKr } from '@navikt/ft-utils';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { VerticalSpacer, FlexColumn, FlexRow, FlexContainer } from '@navikt/ft-ui-komponenter';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';

import { Label, Detail, BodyShort, Heading } from '@navikt/ds-react';
import { createVisningsnavnForAndel } from '../../util/createVisningsnavnForAktivitet';
import NaturalytelsePanel from './NaturalytelsePanel';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';
import { ArbeidstakerInntektValues } from '../../types/ATFLAksjonspunktTsType';
import Ledelinje from '../fellesPaneler/Ledelinje';
import KodeverkForPanel from '../../types/kodeverkForPanel';

export const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
  // Andelen er fastsatt før og må kunne fastsettes igjen
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }

  // Andeler som er lagt til av sbh eller tilkom før stp skal ikke kunne endres på
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};

const finnAndelerSomSkalVises = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] => {
  if (!andeler) {
    return [];
  }
  return andeler
    .filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER)
    .filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};

const createArbeidsPeriodeText = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold): string => {
  const periodeArr = [];

  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'startdato') && arbeidsforhold.startdato) {
    periodeArr.push(dateFormat(arbeidsforhold.startdato));
  }
  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'opphoersdato') && arbeidsforhold.opphoersdato) {
    periodeArr.push('-');
    periodeArr.push(dateFormat(arbeidsforhold.opphoersdato));
  }
  return periodeArr.join(' ');
};

const createArbeidsStillingsNavnOgProsent = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold): string => {
  // TODO: her må stillingsnavn og stillingsprosent hentes når vi får disse dataene fra backend
  const stillingArr = [''];
  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'stillingsNavn') && arbeidsforhold.stillingsNavn) {
    stillingArr.push(arbeidsforhold.stillingsNavn);
  }
  if (Object.prototype.hasOwnProperty.call(arbeidsforhold, 'stillingsProsent') && arbeidsforhold.stillingsProsent) {
    stillingArr.push(`${arbeidsforhold.stillingsProsent}%`);
  }
  if (stillingArr.length !== 0) {
    return stillingArr.join(' ');
  }
  return ' ';
};

const finnBeregnetEller0 = (andel: BeregningsgrunnlagAndel): number => (andel.beregnetPrAar ? andel.beregnetPrAar : 0);

const createArbeidinntektRows = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement<any>[] => {
  const beregnetAarsinntekt = relevanteAndeler.reduce((acc, andel) => acc + finnBeregnetEller0(andel), 0);
  const beregnetMaanedsinntekt = beregnetAarsinntekt ? beregnetAarsinntekt / 12 : 0;
  const rows = relevanteAndeler.map((andel, index) => (
    <React.Fragment
      key={`ArbInntektWrapper${createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling)}${
        index + 1
      }`}
    >
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={beregningStyles.tabellAktivitet}>
            <Label size="small" key={`ColLableTxt${index + 1}`} className={beregningStyles.semiBoldText}>
              {createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling)}
            </Label>
          </FlexColumn>
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <BodyShort key={`ColBrgMndTxt${andel.arbeidsforhold?.arbeidsgiverIdent}`}>
              {formatCurrencyNoKr(finnBeregnetEller0(andel) / 12)}
            </BodyShort>
          </FlexColumn>
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <Label key={`ColBrgAarTxt${andel.arbeidsforhold?.arbeidsgiverIdent}`}>
              {formatCurrencyNoKr(andel.beregnetPrAar)}
            </Label>
          </FlexColumn>
        </FlexRow>
        <FlexRow key={`indexD${andel.arbeidsforhold?.arbeidsgiverIdent}`}>
          {andel.arbeidsforhold && andel.arbeidsforhold.stillingsNavn && (
            <FlexColumn>
              <BodyShort>{createArbeidsStillingsNavnOgProsent(andel.arbeidsforhold)}</BodyShort>
            </FlexColumn>
          )}
          {andel.arbeidsforhold && andel.arbeidsforhold.startdato && (
            <FlexColumn>
              <Detail>{createArbeidsPeriodeText(andel.arbeidsforhold)}</Detail>
            </FlexColumn>
          )}
          {andel.erTidsbegrensetArbeidsforhold && (
            <FlexColumn>
              <Detail>
                <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset" />
              </Detail>
            </FlexColumn>
          )}
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer eightPx />
      <Ledelinje prosentBredde={100} />
    </React.Fragment>
  ));
  if (relevanteAndeler.length > 1) {
    const summaryRow = (
      <FlexContainer key="SummaryRow">
        <FlexRow>
          <FlexColumn className={beregningStyles.tabellAktivitet}>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt" />
          </FlexColumn>
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <BodyShort>{formatCurrencyNoKr(beregnetMaanedsinntekt)}</BodyShort>
          </FlexColumn>
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <Label>{formatCurrencyNoKr(beregnetAarsinntekt)}</Label>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    );
    rows.push(summaryRow);
  }
  return rows;
};

interface StaticFunctions {
  buildInitialValues: (alleAndeler: BeregningsgrunnlagAndel[]) => ArbeidstakerInntektValues;
}

type OwnProps = {
  alleAndelerIFørstePeriode: BeregningsgrunnlagAndel[];
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  kodeverkSamling: KodeverkForPanel;
};

/**
 * GrunnlagForAarsinntektPanelAT
 *
 * Presentasjonskomponent. Viser beregningsgrunnlagstabellen for arbeidstakere.
 * Vises også hvis status er en kombinasjonsstatus som inkluderer arbeidstaker.
 */
const GrunnlagForAarsinntektPanelAT: FunctionComponent<OwnProps> & StaticFunctions = ({
  alleAndelerIFørstePeriode,
  allePerioder,
  arbeidsgiverOpplysningerPerId,
  kodeverkSamling,
}) => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndelerIFørstePeriode);
  if (!relevanteAndeler || relevanteAndeler.length === 0) return null;
  return (
    <>
      <FlexRow>
        <FlexColumn>
          <Heading size="medium">
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={beregningStyles.tabellAktivitet} />
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <Detail>
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
            </Detail>
          </FlexColumn>
          <FlexColumn className={beregningStyles.tabellInntekt}>
            <Detail>
              <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
            </Detail>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <Ledelinje prosentBredde={100} />
      {createArbeidinntektRows(relevanteAndeler, kodeverkSamling, arbeidsgiverOpplysningerPerId)}
      <NaturalytelsePanel allePerioder={allePerioder} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} />
    </>
  );
};

GrunnlagForAarsinntektPanelAT.buildInitialValues = (
  alleAndeler: BeregningsgrunnlagAndel[],
): ArbeidstakerInntektValues => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndeler);
  const initialValues = {} as ArbeidstakerInntektValues;
  relevanteAndeler.forEach((inntekt, index) => {
    initialValues[`inntekt${index}`] = formatCurrencyNoKr(inntekt.overstyrtPrAar) || '';
  });
  return initialValues;
};
export default GrunnlagForAarsinntektPanelAT;
