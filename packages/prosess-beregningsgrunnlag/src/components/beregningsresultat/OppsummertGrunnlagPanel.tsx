import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { AktivitetStatus, Dekningsgrad, FagsakYtelseType, VilkarUtfallType } from '@navikt/ft-kodeverk';
import { Beregningsgrunnlag, YtelseGrunnlag } from '@navikt/ft-types';
import { FlexColumn, FlexContainer, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';

import { TabellData, TabellRadData } from '../../types/BeregningsresultatTabellType';
import { Vilkårperiode } from '../../types/Vilkår';

import styles from './beregningsresultat.module.css';

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
    beskrivelseId: 'Beregningsgrunnlag.Beregningsresultat.Arbeid',
  },
  [AktivitetStatus.FRILANSER]: {
    rekkefølgePri: 2,
    beskrivelseId: 'Beregningsgrunnlag.Beregningsresultat.Frilans',
  },
  [AktivitetStatus.DAGPENGER]: {
    rekkefølgePri: 3,
    beskrivelseId: 'Beregningsgrunnlag.Beregningsresultat.Dagpenger',
  },
  [AktivitetStatus.SYKEPENGER_AV_DAGPENGER]: {
    rekkefølgePri: 3,
    beskrivelseId: 'Beregningsgrunnlag.Beregningsresultat.SykepengerAvDagpenger',
  },
  [AktivitetStatus.PLEIEPENGER_AV_DAGPENGER]: {
    rekkefølgePri: 3,
    beskrivelseId: 'Beregningsgrunnlag.Beregningsresultat.PleiepengerAvDagpenger',
  },
  [AktivitetStatus.ARBEIDSAVKLARINGSPENGER]: {
    rekkefølgePri: 4,
    beskrivelseId: 'Beregningsgrunnlag.Beregningsresultat.Arbeidsavklaringspenger',
  },
  [AktivitetStatus.KUN_YTELSE]: {
    rekkefølgePri: 5,
    beskrivelseId: 'Beregningsgrunnlag.Beregningsresultat.Ytelse',
  },
  [AktivitetStatus.MILITAER_ELLER_SIVIL]: {
    rekkefølgePri: 6,
    beskrivelseId: 'Beregningsgrunnlag.Beregningsresultat.Militær',
  },
  [AktivitetStatus.BRUKERS_ANDEL]: {
    rekkefølgePri: 7,
    beskrivelseId: 'Beregningsgrunnlag.Beregningsresultat.BrukersAndel',
  },
  [AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE]: {
    rekkefølgePri: 8,
    beskrivelseId: 'Beregningsgrunnlag.Beregningsresultat.Næring',
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

const ikkeBeregnetTekst = (): ReactElement => (
  <FormattedMessage id="Beregningsgrunnlag.Beregningsresultat.IkkeBeregnet" />
);

const finnTotalInntekt = (andeler: TabellRadData[]): number =>
  andeler.reduce((sum, andel) => (andel.inntektPlussNaturalytelse || 0) + sum, 0);

const finnDagsats = (tabellData: TabellData, ytelseGrunnlag?: YtelseGrunnlag): number => {
  if (ytelseGrunnlag?.ytelsetype !== FagsakYtelseType.FORELDREPENGER && tabellData.avkortetPrÅr) {
    return Math.round(tabellData.avkortetPrÅr / VIRKEDAGER_PR_AAR);
  }
  return tabellData.dagsats || 0;
};

const skilleRad = (): ReactElement => <div className={styles.radEnkelLinje} />;

const lagIkkeOppfyltVisning = (grunnbeløp: number, erMidlertidigInaktiv: boolean): ReactElement => (
  <HStack gap="2">
    <XMarkOctagonFillIcon className={styles.avslåttIkon} />
    <BodyShort size="small" className={styles.avslåttIkon}>
      <FormattedMessage
        id={
          erMidlertidigInaktiv
            ? 'Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfyltMidlertidigInaktiv'
            : 'Beregningsgrunnlag.BeregningTable.VilkarIkkeOppfylt2'
        }
        values={{
          grunnbeløp: formatCurrencyNoKr(grunnbeløp),
          b: chunks => <b>{chunks}</b>,
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
  harFlereAndeler: boolean,
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
  const skalHaSkilleFraGrunnlagsrader = harFlereAndeler && (skalViseAvkortetRad || skalViseRedusertRad);
  return (
    <FlexContainer>
      {skalHaSkilleFraGrunnlagsrader && <VerticalSpacer fourtyPx />}
      {skalViseAvkortetRad && (
        <>
          {skilleRad()}
          <FlexRow className={styles.radNoBorder}>
            <FlexColumn className={styles.kolBeskrivelse}>
              <BodyShort size="small">
                <FormattedMessage id="Beregningsgrunnlag.Beregningsresultat.Avkortet" />
              </BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.kolVerdi}>
              <BodyShort size="small">{formatCurrencyNoKr(tabellData.avkortetPrÅr)}</BodyShort>
            </FlexColumn>
          </FlexRow>
          {skilleRad()}
        </>
      )}
      {skalViseRedusertRad && (
        <>
          {!skalViseAvkortetRad && harFlereAndeler && <>{skilleRad()}</>}
          <FlexRow className={styles.radNoBorder}>
            <FlexColumn className={styles.kolBeskrivelse}>
              <BodyShort size="small">
                <FormattedMessage id="Beregningsgrunnlag.Beregningsresultat.Redusert" />
              </BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.kolVerdi}>
              <BodyShort size="small">{formatCurrencyNoKr(tabellData.redusertPrÅr)}</BodyShort>
            </FlexColumn>
          </FlexRow>
          {skilleRad()}
        </>
      )}
      <VerticalSpacer fourtyPx />
      <FlexRow className={styles.radNoBorder}>
        <FlexColumn className={styles.kolBeskrivelse}>
          <Label size="medium">
            <FormattedMessage id="Beregningsgrunnlag.Beregningsresultat.Dagsats" />
          </Label>
        </FlexColumn>
        <FlexColumn className={styles.kolVerdi}>
          <Label size="medium">{dagsatsSomVises}</Label>
        </FlexColumn>
      </FlexRow>
      <div className={styles.radDobbelLinje} />
    </FlexContainer>
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
  const harFlereAndeler = tabellData.andeler.length > 1;
  const alleAndelerErFastsatt = tabellData.andeler.every(andel => andel.erFerdigBeregnet);
  return (
    <VStack gap="5">
      <div>
        {skalVisePeriode && (
          <>
            <FlexRow>
              <FlexColumn>
                <Heading size="xsmall">
                  <FormattedMessage
                    id="Beregningsgrunnlag.Beregningsresultat.Periode"
                    values={{
                      fom: dayjs(tabellData.fom).format(DDMMYYYY_DATE_FORMAT),
                      tom: tabellData.tom ? dayjs(tabellData.tom).format(DDMMYYYY_DATE_FORMAT) : '',
                    }}
                  />
                </Heading>
              </FlexColumn>
            </FlexRow>
            <VerticalSpacer eightPx />
          </>
        )}
        {tabellData.andeler.map((rad, index) => (
          <React.Fragment key={rad.status}>
            {index === 0 && <>{skilleRad()}</>}
            <FlexRow className={styles.radNoBorder}>
              <FlexColumn className={styles.kolBeskrivelse}>
                <BodyShort size="small">
                  <FormattedMessage id={finnStatusBeskrivelse(rad)} />
                </BodyShort>
              </FlexColumn>
              <FlexColumn className={styles.kolVerdi}>
                <BodyShort size="small" className={rad.erFerdigBeregnet ? '' : styles.kolVerdiRød}>
                  {rad.erFerdigBeregnet ? formatCurrencyNoKr(rad.inntekt) : ikkeBeregnetTekst()}
                </BodyShort>
              </FlexColumn>
            </FlexRow>
            {!!rad.bortfaltNaturalytelse && (
              <>
                {skilleRad()}
                <FlexRow className={styles.radNoBorder}>
                  <FlexColumn className={styles.kolBeskrivelse}>
                    <BodyShort size="small">
                      <FormattedMessage id="Beregningsgrunnlag.Beregningsresultat.Naturalytelser" />
                    </BodyShort>
                  </FlexColumn>
                  <FlexColumn className={styles.kolVerdi}>
                    <BodyShort size="small">{formatCurrencyNoKr(rad.bortfaltNaturalytelse)}</BodyShort>
                  </FlexColumn>
                </FlexRow>
              </>
            )}
            {skilleRad()}
          </React.Fragment>
        ))}
        {skalViseOppsummeringsrad && (
          <>
            <FlexRow className={styles.radNoBorder}>
              <FlexColumn className={styles.kolBeskrivelse}>
                <BodyShort size="small">
                  <FormattedMessage id="Beregningsgrunnlag.Beregningsresultat.TotalÅrsinntekt" />
                </BodyShort>
              </FlexColumn>
              <FlexColumn className={styles.kolVerdi}>
                <BodyShort size="small">{formatCurrencyNoKr(finnTotalInntekt(tabellData.andeler))}</BodyShort>
              </FlexColumn>
            </FlexRow>
            <div className={styles.radTykkLinje} />
          </>
        )}
      </div>
      {alleAndelerErFastsatt && (
        <>{lagResultatRader(tabellData, vilkårsperiode, beregningsgrunnlag, harFlereAndeler)}</>
      )}
    </VStack>
  );
};
