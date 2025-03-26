import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';

import { AktivitetStatus, isStatusDagpengerOrAAP } from '@navikt/ft-kodeverk';
import { BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { RelevanteStatuserProp } from '../../types/RelevanteStatuser';
import { Ledelinje } from '../fellesPaneler/Ledelinje';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

export const getTekstForAndelBruktIBeregning = (andel: BeregningsgrunnlagAndel): string => {
  if (andel.aktivitetStatus === AktivitetStatus.DAGPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.Dagpenger';
  }
  if (andel.aktivitetStatus === AktivitetStatus.SYKEPENGER_AV_DAGPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.SykepengerAvDagpenger';
  }
  if (andel.aktivitetStatus === AktivitetStatus.PLEIEPENGER_AV_DAGPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.PleiepengerAvDagpenger';
  }
  if (andel.aktivitetStatus === AktivitetStatus.ARBEIDSAVKLARINGSPENGER) {
    return 'Beregningsgrunnlag.TilstottendeYtelse.AAP';
  }
  return '';
};
const isAktivitetKodeDagpenger = (aktivitetStatusKode: string): boolean =>
  aktivitetStatusKode === AktivitetStatus.DAGPENGER;

type Props = {
  alleAndeler: BeregningsgrunnlagAndel[];
  relevanteStatuser: RelevanteStatuserProp;
  gjelderBesteberegning: boolean;
};

export const TilstotendeYtelser = ({ alleAndeler, relevanteStatuser, gjelderBesteberegning }: Props) => {
  const relevanteAndeler = alleAndeler.filter(andel => isStatusDagpengerOrAAP(andel.aktivitetStatus));
  const harFlereYtelser = relevanteAndeler.length > 1;

  return (
    <VStack gap="2">
      {relevanteStatuser.isKombinasjonsstatus && (
        <Heading size="medium">
          <FormattedMessage id="Beregningsgrunnlag.TilstottendeYtelse.TittelNav" />
        </Heading>
      )}
      <HStack justify="end" gap="10">
        <Detail>
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
        </Detail>
        <Detail>
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
        </Detail>
      </HStack>
      <Ledelinje prosentBredde={100} />
      {relevanteAndeler.map((andel: BeregningsgrunnlagAndel) => (
        <div key={andel.aktivitetStatus}>
          <HStack gap="2" justify="space-between">
            <Label size="small">
              <FormattedMessage id={getTekstForAndelBruktIBeregning(andel)} />
            </Label>
            <HStack gap="14">
              <BodyShort size="small">
                {formatCurrencyNoKr(andel.beregnetPrAar ? andel.beregnetPrAar / 12 : 0)}
              </BodyShort>
              <BodyShort size="small" className={!harFlereYtelser ? beregningStyles.semiBoldText : ''}>
                {formatCurrencyNoKr(andel.beregnetPrAar)}
              </BodyShort>
            </HStack>
          </HStack>
          <Ledelinje prosentBredde={100} />
          {gjelderBesteberegning && isAktivitetKodeDagpenger(andel.aktivitetStatus) && (
            <BodyShort size="small">
              <FormattedMessage id="Beregningsgrunnlag.TilstottendeYtelse.Besteberegning" />
            </BodyShort>
          )}
        </div>
      ))}
    </VStack>
  );
};
