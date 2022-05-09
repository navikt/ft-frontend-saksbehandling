import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { dateFormat, formatCurrencyNoKr, ISO_DATE_FORMAT, TIDENES_ENDE } from '@navikt/ft-utils';
import { VerticalSpacer, AvsnittSkiller } from '@navikt/ft-ui-komponenter';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';

import dayjs from 'dayjs';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';
import NaturalytelseTabellData, {
  NaturalytelseEndring,
  NaturalytelseTabellRad,
} from '../../types/NaturalytelseTableTsType';
import createVisningsnavnForAktivitet from '../../util/createVisningsnavnForAktivitet';

type OwnProps = {
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

const lagTabell = (data: NaturalytelseTabellData): ReactElement[] =>
  data.rader.map(rad => (
    <div key={rad.nøkkel}>
      <Row>
        <Column xs="11" className={beregningStyles.noPaddingRight}>
          <Element>{rad.visningsnavn}</Element>
        </Column>
      </Row>
      {rad.naturalytelseEndringer.map(endring => (
        <Row key={rad.nøkkel + endring.fom}>
          <Column xs="7">
            <Normaltekst>{lagPeriodeTekst(endring)}</Normaltekst>
          </Column>
          <Column xs="2" className={beregningStyles.colMaanedText}>
            <Normaltekst>{formatCurrencyNoKr(endring.beløpPrMåned)}</Normaltekst>
          </Column>
          <Column xs="2" className={beregningStyles.colAarText}>
            <Element>{formatCurrencyNoKr(endring.beløpPrÅr)}</Element>
          </Column>
        </Row>
      ))}
    </div>
  ));

/**
 * NaturalytelsePanel
 *
 * Presentasjonskomponent. Viser en tabell med oversikt over hvilke arbeidsgivere som har hatt bortfall
 * av naturalytelse og for hvilke perioder det gjelder.
 */
const NaturalytelsePanel: FunctionComponent<OwnProps> = ({ allePerioder, arbeidsgiverOpplysningerPerId }) => {
  const tableData = useMemo(
    () => lagNaturalytelseTabelldata(allePerioder, arbeidsgiverOpplysningerPerId),
    [allePerioder],
  );
  if (!tableData) {
    return null;
  }
  return (
    <>
      <AvsnittSkiller spaceAbove spaceUnder />
      <Element className={beregningStyles.avsnittOverskrift}>
        <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Naturalytelse2" />
      </Element>
      <VerticalSpacer eightPx />
      <Row>
        <Column xs="7" key="ATempthy1" />
        <Column xs="2" className={beregningStyles.colMaanedText}>
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Maaned" />
          </Undertekst>
        </Column>
        <Column xs="2" className={beregningStyles.colAarText}>
          <Undertekst>
            <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Arbeidsinntekt.Aar" />
          </Undertekst>
        </Column>
        <Column className={beregningStyles.colLink} />
      </Row>
      {lagTabell(tableData)}
    </>
  );
};

export default NaturalytelsePanel;
