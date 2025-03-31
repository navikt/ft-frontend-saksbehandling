import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Detail, HStack, Label, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';
import { dateFormat, formatCurrencyNoKr, ISO_DATE_FORMAT, TIDENES_ENDE } from '@navikt/ft-utils';

import { NaturalytelseEndring, NaturalytelseTabellData, NaturalytelseTabellRad } from '../../types/NaturalytelseTable';
import { createVisningsnavnForAktivitet } from '../../util/createVisningsnavnForAktivitet';

import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.module.css';

type Props = {
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const lagAndelNøkkel = (andel: BeregningsgrunnlagAndel): string => {
  if (!andel.arbeidsforhold || !andel.arbeidsforhold.arbeidsgiverIdent) {
    return 'N/A';
  }
  return andel.arbeidsforhold.arbeidsforholdId
    ? andel.arbeidsforhold.arbeidsgiverIdent + andel.arbeidsforhold.arbeidsforholdId
    : andel.arbeidsforhold.arbeidsgiverIdent;
};

const lagVisningForAndel = (
  andel: BeregningsgrunnlagAndel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  if (!andel.arbeidsforhold || !andel.arbeidsforhold.arbeidsgiverIdent) {
    return 'Ukjent arbeidsforhold';
  }
  const arbeidsforholdInfo = arbeidsgiverOpplysningerPerId[andel.arbeidsforhold.arbeidsgiverIdent];
  return createVisningsnavnForAktivitet(arbeidsforholdInfo, andel.arbeidsforhold.eksternArbeidsforholdId);
};

const andelslisteEllerTom = (bgperiode: BeregningsgrunnlagPeriodeProp): BeregningsgrunnlagAndel[] =>
  bgperiode.beregningsgrunnlagPrStatusOgAndel ? bgperiode.beregningsgrunnlagPrStatusOgAndel : [];

const lagNatAndel = (
  andel: BeregningsgrunnlagAndel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): NaturalytelseTabellRad => {
  const visningsnavn = lagVisningForAndel(andel, arbeidsgiverOpplysningerPerId);
  const nøkkel = lagAndelNøkkel(andel);
  const naturalytelseEndringer = [] as NaturalytelseEndring[];
  return {
    visningsnavn,
    nøkkel,
    naturalytelseEndringer,
  };
};

const andelHarBortfaltNaturalytelse = (andel: BeregningsgrunnlagAndel): boolean =>
  !!andel.arbeidsforhold?.naturalytelseBortfaltPrÅr;

const finnAlleArbeidstakernøkkler = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): NaturalytelseTabellRad[] => {
  if (!allePerioder || allePerioder.length < 1) {
    return [];
  }
  const natAndeler = [] as NaturalytelseTabellRad[];
  allePerioder.forEach(periode => {
    andelslisteEllerTom(periode)
      .filter(andel => andelHarBortfaltNaturalytelse(andel))
      .map(andel => lagNatAndel(andel, arbeidsgiverOpplysningerPerId))
      .forEach(natAndel => {
        if (!natAndeler.some(({ nøkkel }) => nøkkel === natAndel.nøkkel)) {
          natAndeler.push(natAndel);
        }
      });
  });
  return natAndeler;
};

const finnBortfaltBeløp = (periode: BeregningsgrunnlagPeriodeProp, nøkkel: string): number => {
  const matchendeAndel = andelslisteEllerTom(periode).find(bgAndel => lagAndelNøkkel(bgAndel) === nøkkel);
  const bortfalt =
    matchendeAndel && matchendeAndel.arbeidsforhold ? matchendeAndel.arbeidsforhold.naturalytelseBortfaltPrÅr : 0;
  return bortfalt || 0;
};

const lagNatEndringForAndel = (
  natAndel: NaturalytelseTabellRad,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
): NaturalytelseEndring[] => {
  const endringer = [] as NaturalytelseEndring[];
  allePerioder.forEach(periode => {
    const bortfaltBeløp = finnBortfaltBeløp(periode, natAndel.nøkkel);
    if (bortfaltBeløp) {
      endringer.push({
        fom: periode.beregningsgrunnlagPeriodeFom || '',
        tom: periode.beregningsgrunnlagPeriodeTom || '',
        beløpPrÅr: bortfaltBeløp,
        beløpPrMåned: bortfaltBeløp / 12,
      });
    }
  });
  return endringer;
};

const slåSammenEndringerSomHengerSammen = (endringer: NaturalytelseEndring[]): NaturalytelseEndring[] => {
  if (!endringer || endringer.length < 2) {
    return endringer;
  }
  endringer.sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));
  const sammenslåtteEndringer = [] as NaturalytelseEndring[];
  let kontrollertTom = dayjs(endringer[0].fom);
  endringer.forEach(end => {
    if (!dayjs(end.fom).isBefore(kontrollertTom)) {
      const førsteEndredePeriode = endringer.find(
        end2 => dayjs(end2.fom).isAfter(end.fom) && end2.beløpPrÅr !== end.beløpPrÅr,
      );
      if (førsteEndredePeriode) {
        const tom = dayjs(førsteEndredePeriode.fom).subtract(1, 'd');
        sammenslåtteEndringer.push({
          tom: tom.format(ISO_DATE_FORMAT),
          fom: end.fom,
          beløpPrÅr: end.beløpPrÅr,
          beløpPrMåned: end.beløpPrMåned,
        });
        kontrollertTom = tom;
      } else {
        // Beløp endres aldri, setter kontrollertTom til TIDENES_ENDE
        kontrollertTom = dayjs(TIDENES_ENDE);
        sammenslåtteEndringer.push({
          tom: '',
          fom: end.fom,
          beløpPrÅr: end.beløpPrÅr,
          beløpPrMåned: end.beløpPrMåned,
        });
      }
    }
  });
  return sammenslåtteEndringer;
};

const lagNaturalytelseTabelldata = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): undefined | NaturalytelseTabellData => {
  const alleNatAndeler = finnAlleArbeidstakernøkkler(allePerioder, arbeidsgiverOpplysningerPerId);
  alleNatAndeler.forEach(natAndel => {
    const endringer = lagNatEndringForAndel(natAndel, allePerioder);

    const sammenslåtteEndringer = slåSammenEndringerSomHengerSammen(endringer);
    sammenslåtteEndringer.forEach(endring => natAndel.naturalytelseEndringer.push(endring));
  });
  return !alleNatAndeler || alleNatAndeler.length < 1 ? undefined : { rader: alleNatAndeler };
};

const lagPeriodeTekst = (endring: NaturalytelseEndring): string => {
  if (endring.tom) {
    return `${dateFormat(endring.fom)} - ${dateFormat(endring.tom)}`;
  }
  return `${dateFormat(endring.fom)} -`;
};

/**
 * NaturalytelsePanel
 *
 * Presentasjonskomponent. Viser en tabell med oversikt over hvilke arbeidsgivere som har hatt bortfall
 * av naturalytelse og for hvilke perioder det gjelder.
 */
export const NaturalytelsePanel = ({ allePerioder, arbeidsgiverOpplysningerPerId }: Props) => {
  const tableData = useMemo(
    () => lagNaturalytelseTabelldata(allePerioder, arbeidsgiverOpplysningerPerId),
    [allePerioder],
  );

  if (!tableData) {
    return null;
  }

  return (
    <div>
      <Label size="small" className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2" />
      </Label>
      <HStack gap="10" justify="end">
        <Detail style={{ width: '70px' }}>
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
        </Detail>
        <Detail style={{ width: '70px' }}>
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
        </Detail>
      </HStack>
      {tableData.rader.map(rad => (
        <VStack gap="1" key={rad.nøkkel}>
          <Label size="small">{rad.visningsnavn}</Label>
          <VStack gap="1">
            {rad.naturalytelseEndringer.map(endring => (
              <HStack justify="space-between" wrap={false} key={rad.nøkkel + endring.fom}>
                <BodyShort size="small">{lagPeriodeTekst(endring)}</BodyShort>
                <HStack gap="4" justify="end">
                  <BodyShort size="small" style={{ width: '70px' }}>
                    {formatCurrencyNoKr(endring.beløpPrMåned)}
                  </BodyShort>
                  <Label size="small" style={{ width: '70px' }}>
                    {formatCurrencyNoKr(endring.beløpPrÅr)}
                  </Label>
                </HStack>
              </HStack>
            ))}
          </VStack>
        </VStack>
      ))}
    </div>
  );
};
