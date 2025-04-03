import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';
import { dateFormat, formatCurrencyNoKr } from '@navikt/ft-utils';

import { ArbeidstakerInntektValues } from '../../types/ATFLAksjonspunkt';
import { KodeverkForPanel } from '../../types/KodeverkForPanelForBg';
import { createVisningsnavnForAndel } from '../../util/createVisningsnavnForAktivitet';
import { HorizontalLine } from '../../util/HorizontalLine';
import { Ledelinje } from '../fellesPaneler/Ledelinje';
import { NaturalytelsePanel } from './NaturalytelsePanel';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
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

const finnBeregnetEller0 = (andel: BeregningsgrunnlagAndel): number => andel.beregnetPrAar ?? 0;

const createArbeidinntektRows = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => {
  const beregnetAarsinntekt = relevanteAndeler.reduce((acc, andel) => acc + finnBeregnetEller0(andel), 0);
  const beregnetMaanedsinntekt = beregnetAarsinntekt ? beregnetAarsinntekt / 12 : 0;

  const rows = relevanteAndeler.map((andel, index) => (
    <React.Fragment
      key={`ArbInntektWrapper${createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling)}${
        index + 1
      }`}
    >
      <HStack justify="space-between" wrap={false}>
        <Label size="small" className={beregningStyles.semiBoldText}>
          {createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling)}
        </Label>
        <HStack gap="10">
          <BodyShort>{formatCurrencyNoKr(finnBeregnetEller0(andel) / 12)}</BodyShort>
          <Label>{formatCurrencyNoKr(andel.beregnetPrAar)}</Label>
        </HStack>
      </HStack>
      <HStack gap="4" align="center">
        {andel.arbeidsforhold && andel.arbeidsforhold.stillingsNavn && (
          <BodyShort>{createArbeidsStillingsNavnOgProsent(andel.arbeidsforhold)}</BodyShort>
        )}
        {andel.arbeidsforhold && andel.arbeidsforhold.startdato && (
          <Detail>{createArbeidsPeriodeText(andel.arbeidsforhold)}</Detail>
        )}
        {andel.erTidsbegrensetArbeidsforhold && (
          <Detail>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Tidsbegrenset" />
          </Detail>
        )}
      </HStack>
      <Ledelinje prosentBredde={100} />
    </React.Fragment>
  ));
  if (relevanteAndeler.length > 1) {
    const summaryRow = (
      <VStack gap="0" key="summary-row">
        <HStack justify="space-between">
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.TotaltArbeidsinntekt" />
          <HStack gap="10" justify="end">
            <BodyShort>{formatCurrencyNoKr(beregnetMaanedsinntekt)}</BodyShort>
            <Label>{formatCurrencyNoKr(beregnetAarsinntekt)}</Label>
          </HStack>
        </HStack>
      </VStack>
    );
    rows.push(summaryRow);
  }
  return rows;
};

type Props = {
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
export const GrunnlagForAarsinntektPanelAT = ({
  alleAndelerIFørstePeriode,
  allePerioder,
  arbeidsgiverOpplysningerPerId,
  kodeverkSamling,
}: Props) => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndelerIFørstePeriode);
  if (!relevanteAndeler || relevanteAndeler.length === 0) return null;
  return (
    <VStack gap="8">
      <VStack gap="2">
        <Heading size="medium">
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt" />
        </Heading>
        <Box>
          <VStack gap="1">
            <HStack gap="10" justify="end">
              <Detail>
                <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
              </Detail>
              <Detail>
                <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
              </Detail>
            </HStack>
            <HorizontalLine />
            {createArbeidinntektRows(relevanteAndeler, kodeverkSamling, arbeidsgiverOpplysningerPerId)}
          </VStack>
        </Box>
      </VStack>
      <NaturalytelsePanel allePerioder={allePerioder} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} />
    </VStack>
  );
};

GrunnlagForAarsinntektPanelAT.buildInitialValues = (
  alleAndeler: BeregningsgrunnlagAndel[],
): ArbeidstakerInntektValues => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndeler);
  const initialValues = {} as ArbeidstakerInntektValues;
  relevanteAndeler.forEach((inntekt, index) => {
    initialValues[`inntekt${index}`] = formatCurrencyNoKr(inntekt.overstyrtPrAar) ?? '';
  });
  return initialValues;
};
