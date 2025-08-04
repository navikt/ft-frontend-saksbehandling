import React, { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';

import { AktivitetStatus, Dekningsgrad, FagsakYtelseType, VilkarUtfallType } from '@navikt/ft-kodeverk';
import type { Beregningsgrunnlag, YtelseGrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { BTag, formatCurrencyNoKr, periodFormat } from '@navikt/ft-utils';

import type { TabellData, TabellRadData } from '../../types/BeregningsresultatTabellType';
import type { Vilkårperiode } from '../../types/Vilkår';
import { HorizontalBox } from '../../util/HorizontalBox';

import styles from './oppsummertGrunnlagPanel.module.css';

const VIRKEDAGER_PR_AAR = 260;

type StatusKonfigEntry = {
  rekkefølgePri: number;
  beskrivelseId: string;
};

type StatusKonfig = {
  [key: string]: StatusKonfigEntry;
};

// Visningsrekkefølge på statuser i tabellen. Lavere tall = høyere opp i tabellen
const statusKonfigMap: StatusKonfig = {
  [AktivitetStatus.ARBEIDSTAKER]: {
    rekkefølgePri: 1,
    beskrivelseId: 'OppsummertGrunnlagPanel.Arbeid',
  },
  [AktivitetStatus.FRILANSER]: {
    rekkefølgePri: 2,
    beskrivelseId: 'OppsummertGrunnlagPanel.Frilans',
  },
  [AktivitetStatus.DAGPENGER]: {
    rekkefølgePri: 3,
    beskrivelseId: 'OppsummertGrunnlagPanel.Dagpenger',
  },
  [AktivitetStatus.SYKEPENGER_AV_DAGPENGER]: {
    rekkefølgePri: 3,
    beskrivelseId: 'OppsummertGrunnlagPanel.SykepengerAvDagpenger',
  },
  [AktivitetStatus.PLEIEPENGER_AV_DAGPENGER]: {
    rekkefølgePri: 3,
    beskrivelseId: 'OppsummertGrunnlagPanel.PleiepengerAvDagpenger',
  },
  [AktivitetStatus.ARBEIDSAVKLARINGSPENGER]: {
    rekkefølgePri: 4,
    beskrivelseId: 'OppsummertGrunnlagPanel.Arbeidsavklaringspenger',
  },
  [AktivitetStatus.KUN_YTELSE]: {
    rekkefølgePri: 5,
    beskrivelseId: 'OppsummertGrunnlagPanel.Ytelse',
  },
  [AktivitetStatus.MILITAER_ELLER_SIVIL]: {
    rekkefølgePri: 6,
    beskrivelseId: 'OppsummertGrunnlagPanel.Militær',
  },
  [AktivitetStatus.BRUKERS_ANDEL]: {
    rekkefølgePri: 7,
    beskrivelseId: 'OppsummertGrunnlagPanel.BrukersAndel',
  },
  [AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE]: {
    rekkefølgePri: 8,
    beskrivelseId: 'OppsummertGrunnlagPanel.Næring',
  },
};

const finnRekkefølgePrioritet = (andel: TabellRadData): number => {
  const pri = statusKonfigMap[andel.status]?.rekkefølgePri;
  return pri || 100; // Default settes veldig høyt så den havner nederst i tabellen
};

const finnStatusBeskrivelse = (andel: TabellRadData): string => {
  const beskrivelseId = statusKonfigMap[andel.status]?.beskrivelseId;
  return beskrivelseId || 'Ukjent andel';
};

const ikkeBeregnetTekst = (): ReactElement => <FormattedMessage id="OppsummertGrunnlagPanel.IkkeBeregnet" />;

const finnTotalInntekt = (andeler: TabellRadData[]): number =>
  andeler.reduce((sum, andel) => (andel.inntektPlussNaturalytelse || 0) + sum, 0);

const finnDagsats = (tabellData: TabellData, ytelseGrunnlag?: YtelseGrunnlag): number => {
  if (ytelseGrunnlag?.ytelsetype !== FagsakYtelseType.FORELDREPENGER && tabellData.avkortetPrÅr) {
    return Math.round(tabellData.avkortetPrÅr / VIRKEDAGER_PR_AAR);
  }
  return tabellData.dagsats || 0;
};

const lagIkkeOppfyltVisning = (grunnbeløp: number, erMidlertidigInaktiv: boolean): ReactElement => (
  <HStack gap="space-8">
    <XMarkOctagonFillIcon className={styles.avslåttIkon} />
    <BodyShort size="small" className={styles.avslåttIkon}>
      <FormattedMessage
        id={
          erMidlertidigInaktiv
            ? 'OppsummertGrunnlagPanel.VilkarIkkeOppfyltMidlertidigInaktiv'
            : 'OppsummertGrunnlagPanel.VilkarIkkeOppfylt'
        }
        values={{
          grunnbeløp: formatCurrencyNoKr(grunnbeløp),
          b: BTag,
        }}
      />
    </BodyShort>
  </HStack>
);

const sjekkErMidlertidigInaktiv = (beregningsgrunnlag: Beregningsgrunnlag): boolean =>
  !!beregningsgrunnlag.aktivitetStatus &&
  beregningsgrunnlag.aktivitetStatus.some(a => a === AktivitetStatus.MIDLERTIDIG_INAKTIV);

const lagResultatRader = (
  tabellData: TabellData,
  vilkårPeriode: Vilkårperiode,
  beregningsgrunnlag: Beregningsgrunnlag,
): ReactElement | null => {
  const sumBrutto = tabellData.andeler.reduce((sum, andel) => (andel.inntektPlussNaturalytelse || 0) + sum, 0);
  if (vilkårPeriode.vilkarStatus === VilkarUtfallType.IKKE_VURDERT) {
    return null;
  }
  if (vilkårPeriode.vilkarStatus === VilkarUtfallType.IKKE_OPPFYLT) {
    return lagIkkeOppfyltVisning(beregningsgrunnlag.grunnbeløp, sjekkErMidlertidigInaktiv(beregningsgrunnlag));
  }
  const seksG = beregningsgrunnlag.grunnbeløp * 6;
  const skalViseAvkortetRad = sumBrutto > seksG;
  const skalViseRedusertRad = beregningsgrunnlag.dekningsgrad !== Dekningsgrad.HUNDRE;
  const dagsatsSomVises = finnDagsats(tabellData, beregningsgrunnlag.ytelsesspesifiktGrunnlag);

  return (
    <>
      {(skalViseAvkortetRad || skalViseRedusertRad) && (
        <div>
          {skalViseAvkortetRad && (
            <HorizontalBox borderTop borderBottom>
              <BodyShort size="small">
                <FormattedMessage id="OppsummertGrunnlagPanel.Avkortet" />
              </BodyShort>
              <BodyShort size="small">
                <BeløpLabel beløp={tabellData.avkortetPrÅr} />
              </BodyShort>
            </HorizontalBox>
          )}
          {skalViseRedusertRad && (
            <HorizontalBox borderBottom borderTop={!skalViseAvkortetRad}>
              <BodyShort size="small">
                <FormattedMessage id="OppsummertGrunnlagPanel.Redusert" />
              </BodyShort>
              <BodyShort size="small">
                <BeløpLabel beløp={tabellData.redusertPrÅr} />
              </BodyShort>
            </HorizontalBox>
          )}
        </div>
      )}
      <HorizontalBox doubleBorderBottom>
        <Label size="medium">
          <FormattedMessage id="OppsummertGrunnlagPanel.Dagsats" />
        </Label>
        <Label size="medium">
          <BeløpLabel beløp={dagsatsSomVises} />
        </Label>
      </HorizontalBox>
    </>
  );
};

type Props = {
  tabellData: TabellData;
  skalVisePeriode: boolean;
  vilkårsperiode: Vilkårperiode;
  beregningsgrunnlag: Beregningsgrunnlag;
};

export const OppsummertGrunnlagPanel = ({ tabellData, skalVisePeriode, vilkårsperiode, beregningsgrunnlag }: Props) => {
  const skalViseOppsummeringsrad =
    tabellData.andeler.length > 1 && !tabellData.andeler.some(andel => !andel.erFerdigBeregnet);
  tabellData.andeler.sort((a, b) => finnRekkefølgePrioritet(a) - finnRekkefølgePrioritet(b));
  const alleAndelerErFastsatt = tabellData.andeler.every(andel => andel.erFerdigBeregnet);

  return (
    <VStack gap="space-8">
      {skalVisePeriode && (
        <Label size="small">
          <FormattedMessage
            id="OppsummertGrunnlagPanel.Periode"
            values={{
              periode: periodFormat(tabellData.fom, tabellData.tom),
            }}
          />
        </Label>
      )}
      <VStack gap="space-24">
        <div>
          {tabellData.andeler.map((rad, index) => (
            <React.Fragment key={rad.status}>
              <HorizontalBox borderBottom borderTop={index === 0}>
                <BodyShort size="small">
                  <FormattedMessage id={finnStatusBeskrivelse(rad)} />
                </BodyShort>
                <BodyShort size="small" className={rad.erFerdigBeregnet ? '' : styles.kolVerdiRød}>
                  {rad.erFerdigBeregnet ? <BeløpLabel beløp={rad.inntekt} /> : ikkeBeregnetTekst()}
                </BodyShort>
              </HorizontalBox>
              {!!rad.bortfaltNaturalytelse && (
                <HorizontalBox borderBottom>
                  <BodyShort size="small">
                    <FormattedMessage id="OppsummertGrunnlagPanel.Naturalytelser" />
                  </BodyShort>
                  <BodyShort size="small">
                    <BeløpLabel beløp={rad.bortfaltNaturalytelse} />
                  </BodyShort>
                </HorizontalBox>
              )}
            </React.Fragment>
          ))}
          {skalViseOppsummeringsrad && (
            <HorizontalBox doubleBorderBottom borderTop>
              <BodyShort size="small">
                <FormattedMessage id="OppsummertGrunnlagPanel.TotalÅrsinntekt" />
              </BodyShort>
              <BodyShort size="small">
                <BeløpLabel beløp={finnTotalInntekt(tabellData.andeler)} />
              </BodyShort>
            </HorizontalBox>
          )}
        </div>
        {alleAndelerErFastsatt && <>{lagResultatRader(tabellData, vilkårsperiode, beregningsgrunnlag)}</>}
      </VStack>
    </VStack>
  );
};
