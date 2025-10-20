import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, Table, VStack } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagArbeidsforhold,
} from '@navikt/ft-types';
import { BeløpLabel, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import type { ArbeidstakerInntektValues } from '../../types/ATFLAksjonspunkt';
import type { KodeverkForPanel } from '../../types/KodeverkForPanel';
import { createVisningsnavnForAndel } from '../../util/createVisningsnavnForAktivitet';

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

const createArbeidsStillingsNavnOgProsent = (arbeidsforhold: BeregningsgrunnlagArbeidsforhold): string => {
  const { stillingsProsent, stillingsNavn } = arbeidsforhold;
  return `${stillingsNavn} ${stillingsProsent}%`;
};

const finnBeregnetEller0 = (andel: BeregningsgrunnlagAndel): number => andel.beregnetPrAar ?? 0;

const createArbeidinntektRows = (
  relevanteAndeler: BeregningsgrunnlagAndel[],
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => {
  return relevanteAndeler.map(andel => {
    const visningsNavn = createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling);
    return (
      <Table.Body key={`ArbInntektWrapper${visningsNavn}`}>
        <Table.Row shadeOnHover={false}>
          <Table.HeaderCell textSize="small" colSpan={3}>
            {visningsNavn}
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell textSize="small">
            {andel.arbeidsforhold && andel.arbeidsforhold.stillingsNavn && (
              <div>{createArbeidsStillingsNavnOgProsent(andel.arbeidsforhold)}</div>
            )}
            {andel.arbeidsforhold && andel.arbeidsforhold.startdato && (
              <div>
                <PeriodLabel
                  dateStringFom={andel.arbeidsforhold.startdato}
                  dateStringTom={andel.arbeidsforhold.opphoersdato}
                />
              </div>
            )}
            {andel.erTidsbegrensetArbeidsforhold && (
              <FormattedMessage id="GrunnlagForAarsinntektPanelAT.Tidsbegrenset" tagName="div" />
            )}
          </Table.DataCell>
          <Table.DataCell align="right" textSize="small">
            <BeløpLabel beløp={finnBeregnetEller0(andel) / 12} />
          </Table.DataCell>
          <Table.DataCell align="right" textSize="small">
            <BeløpLabel beløp={andel.beregnetPrAar} />
          </Table.DataCell>
        </Table.Row>
      </Table.Body>
    );
  });
};

const createSummaryRow = (relevanteAndeler: BeregningsgrunnlagAndel[]): ReactElement => {
  const beregnetAarsinntekt = relevanteAndeler.reduce((acc, andel) => acc + finnBeregnetEller0(andel), 0);
  const beregnetMaanedsinntekt = beregnetAarsinntekt ? beregnetAarsinntekt / 12 : 0;
  return (
    <tfoot>
      <Table.Row>
        <Table.DataCell>
          <FormattedMessage id="GrunnlagForAarsinntektPanelAT.TotaltArbeidsinntekt" />
        </Table.DataCell>
        <Table.DataCell align="right" textSize="small">
          <BeløpLabel beløp={beregnetMaanedsinntekt} />
        </Table.DataCell>
        <Table.HeaderCell align="right" textSize="small">
          <BeløpLabel beløp={beregnetAarsinntekt} />
        </Table.HeaderCell>
      </Table.Row>
    </tfoot>
  );
};

type Props = {
  alleAndelerIFørstePeriode: BeregningsgrunnlagAndel[];
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
  arbeidsgiverOpplysningerPerId,
  kodeverkSamling,
}: Props) => {
  const relevanteAndeler = finnAndelerSomSkalVises(alleAndelerIFørstePeriode);
  if (!relevanteAndeler || relevanteAndeler.length === 0) return null;
  return (
    <VStack gap="space-8">
      <Heading size="medium" level="4">
        <FormattedMessage id="GrunnlagForAarsinntektPanelAT.Tittel" />
      </Heading>
      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="TabellKolonne.Maaned" />
            </Table.HeaderCell>
            <Table.HeaderCell align="right" textSize="small">
              <FormattedMessage id="TabellKolonne.BeregnetAar" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {createArbeidinntektRows(relevanteAndeler, kodeverkSamling, arbeidsgiverOpplysningerPerId)}
        {relevanteAndeler.length > 1 && createSummaryRow(relevanteAndeler)}
      </Table>
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
