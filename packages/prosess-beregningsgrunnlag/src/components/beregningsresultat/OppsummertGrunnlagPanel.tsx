import React, { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';

import { FagsakYtelseType } from '@navikt/ft-kodeverk';
import type { AktivitetStatus, Beregningsgrunnlag, YtelseGrunnlag } from '@navikt/ft-types';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { BTag, formatCurrencyNoKr, periodFormat } from '@navikt/ft-utils';

import { VilkårUtfallType } from '../../kodeverk/vilkårUtfallType';
import type { TabellData, TabellRadData } from '../../types/BeregningsresultatTabellType';
import type { Vilkårperiode } from '../../types/Vilkår';
import { HorizontalBox } from '../../util/HorizontalBox';

import styles from './oppsummertGrunnlagPanel.module.css';

const VIRKEDAGER_PR_AAR = 260;
const DEKNINGSGRAD_HUNDRE = 100;

type StatusKonfigEntry = {
  rekkefølgePri: number;
  beskrivelseId: string;
};

type StatusKonfig = Partial<Record<AktivitetStatus, StatusKonfigEntry>>;

// Visningsrekkefølge på statuser i tabellen. Lavere tall = høyere opp i tabellen
const statusKonfigMap: StatusKonfig = {
  AT: {
    rekkefølgePri: 1,
    beskrivelseId: 'OppsummertGrunnlagPanel.Arbeid',
  },
  FL: {
    rekkefølgePri: 2,
    beskrivelseId: 'OppsummertGrunnlagPanel.Frilans',
  },
  DP: {
    rekkefølgePri: 3,
    beskrivelseId: 'OppsummertGrunnlagPanel.Dagpenger',
  },
  SP_AV_DP: {
    rekkefølgePri: 3,
    beskrivelseId: 'OppsummertGrunnlagPanel.SykepengerAvDagpenger',
  },
  PSB_AV_DP: {
    rekkefølgePri: 3,
    beskrivelseId: 'OppsummertGrunnlagPanel.PleiepengerAvDagpenger',
  },
  AAP: {
    rekkefølgePri: 4,
    beskrivelseId: 'OppsummertGrunnlagPanel.Arbeidsavklaringspenger',
  },
  KUN_YTELSE: {
    rekkefølgePri: 5,
    beskrivelseId: 'OppsummertGrunnlagPanel.Ytelse',
  },
  MS: {
    rekkefølgePri: 6,
    beskrivelseId: 'OppsummertGrunnlagPanel.Militær',
  },
  BA: {
    rekkefølgePri: 7,
    beskrivelseId: 'OppsummertGrunnlagPanel.BrukersAndel',
  },
  SN: {
    rekkefølgePri: 8,
    beskrivelseId: 'OppsummertGrunnlagPanel.Næring',
  },
};

const finnRekkefølgePrioritet = (andel: TabellRadData): number => {
  const pri = statusKonfigMap[andel.aktivitetStatus]?.rekkefølgePri;
  return pri || 100; // Default settes veldig høyt så den havner nederst i tabellen
};

const finnStatusBeskrivelse = (andel: TabellRadData): string => {
  const beskrivelseId = statusKonfigMap[andel.aktivitetStatus]?.beskrivelseId;
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
  !!beregningsgrunnlag.aktivitetStatus && beregningsgrunnlag.aktivitetStatus.includes('MIDL_INAKTIV');

const lagResultatRader = (
  tabellData: TabellData,
  vilkårPeriode: Vilkårperiode,
  beregningsgrunnlag: Beregningsgrunnlag,
): ReactElement | null => {
  const sumBrutto = tabellData.andeler.reduce((sum, andel) => (andel.inntektPlussNaturalytelse || 0) + sum, 0);
  if (vilkårPeriode.vilkarStatus === VilkårUtfallType.IKKE_VURDERT) {
    return null;
  }
  if (vilkårPeriode.vilkarStatus === VilkårUtfallType.IKKE_OPPFYLT) {
    return lagIkkeOppfyltVisning(beregningsgrunnlag.grunnbeløp, sjekkErMidlertidigInaktiv(beregningsgrunnlag));
  }
  const seksG = beregningsgrunnlag.grunnbeløp * 6;
  const skalViseAvkortetRad = sumBrutto > seksG;
  const skalViseRedusertRad = beregningsgrunnlag.dekningsgrad !== DEKNINGSGRAD_HUNDRE;
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
            <React.Fragment key={rad.aktivitetStatus}>
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
