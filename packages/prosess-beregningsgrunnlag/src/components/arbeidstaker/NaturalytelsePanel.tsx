import React, { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { Heading, Table, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';
import { BeløpLabel, NoWrap } from '@navikt/ft-ui-komponenter';
import { dateFormat, ISO_DATE_FORMAT, TIDENES_ENDE } from '@navikt/ft-utils';

import { NaturalytelseEndring, NaturalytelseTabellData, NaturalytelseTabellRad } from '../../types/NaturalytelseTable';
import { createVisningsnavnForAktivitet } from '../../util/createVisningsnavnForAktivitet';

import tableStyle from '../tableStyle.module.css';

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
    <VStack gap="1">
      <Heading size="medium">
        <FormattedMessage id="NaturalytelsePanel.Tittel" />
      </Heading>

      <Table size="small">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell textSize="small" align="right">
              <FormattedMessage id="TabellKolonne.Maaned" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small" align="right">
              <NoWrap>
                <FormattedMessage id="TabellKolonne.BeregnetAar" />
              </NoWrap>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {tableData.rader.map(rad => (
          <Table.Body key={rad.nøkkel} className={tableStyle.tableGroup}>
            <Table.Row shadeOnHover={false}>
              <Table.HeaderCell textSize="small" colSpan={3}>
                {rad.visningsnavn}
              </Table.HeaderCell>
            </Table.Row>
            {rad.naturalytelseEndringer.map(endring => (
              <Table.Row key={rad.nøkkel + endring.fom}>
                <Table.DataCell textSize="small">{lagPeriodeTekst(endring)}</Table.DataCell>
                <Table.DataCell textSize="small" align="right">
                  <BeløpLabel beløp={endring.beløpPrMåned} />
                </Table.DataCell>
                <Table.DataCell textSize="small" align="right">
                  <BeløpLabel beløp={endring.beløpPrÅr} />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        ))}
      </Table>
    </VStack>
  );
};
