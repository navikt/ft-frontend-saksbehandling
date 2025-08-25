import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { AktivitetStatus, isAksjonspunktOpen, PeriodeAarsak } from '@navikt/ft-kodeverk';
import type { BeregningAvklaringsbehov, Beregningsgrunnlag, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import type { TabellData, TabellMap, TabellRadData } from '../../types/BeregningsresultatTabellType';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import type { Vilkårperiode } from '../../types/Vilkår';
import { OppsummertGrunnlagPanel } from './OppsummertGrunnlagPanel';

const ÅRSAKER_SOM_KAN_GI_NY_DAGSATS: string[] = [
  PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET,
  PeriodeAarsak.NATURALYTELSE_TILKOMMER,
  PeriodeAarsak.NATURALYTELSE_BORTFALT,
];

const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean =>
  andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;

const finnForeslåttBeløp = (andel: BeregningsgrunnlagAndel): number => {
  if (andel.besteberegningPrAar || andel.besteberegningPrAar === 0) {
    return andel.besteberegningPrAar;
  }
  if (andel.overstyrtPrAar || andel.overstyrtPrAar === 0) {
    return andel.overstyrtPrAar;
  }
  return andel.beregnetPrAar || 0;
};

const finnAksjonspunktForStatus = (
  status: string,
  avklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined => {
  switch (status) {
    case AktivitetStatus.ARBEIDSTAKER:
    case AktivitetStatus.FRILANSER:
      return avklaringsbehov.find(
        ak =>
          ak.definisjon ===
            ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS ||
          ak.definisjon ===
            ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
      );
    case AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE:
      return avklaringsbehov.find(
        ak =>
          ak.definisjon ===
            ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET ||
          ak.definisjon ===
            ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
      );
    case AktivitetStatus.BRUKERS_ANDEL:
      return avklaringsbehov.find(
        ak => ak.definisjon === ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
      );
    default:
      return undefined;
  }
};

const finnNaturalytelsebeløp = (andel: BeregningsgrunnlagAndel): number => {
  const bortfaltNat = andel?.arbeidsforhold?.naturalytelseBortfaltPrÅr;
  const tilkommetNat = andel?.arbeidsforhold?.naturalytelseTilkommetPrÅr || 0;
  if (!bortfaltNat) {
    return 0;
  }
  return bortfaltNat - tilkommetNat;
};

const erBeregnet = (andel: BeregningsgrunnlagAndel): boolean => {
  const { beregnetPrAar, pgiSnitt } = andel;
  const beregnetErSatt = !!beregnetPrAar || beregnetPrAar === 0;
  const pgiErSatt = !!pgiSnitt || pgiSnitt === 0;
  return beregnetErSatt || pgiErSatt;
};

const lagAndeler = (
  andeler: BeregningsgrunnlagAndel[],
  avklaringsbehov: BeregningAvklaringsbehov[],
): TabellRadData[] => {
  const andelerSomSkalVises = andeler.filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
  const grupperteAndeler: TabellMap = {};
  andelerSomSkalVises.forEach(andel => {
    const eksisterendeListe = grupperteAndeler[andel.aktivitetStatus];
    if (!eksisterendeListe) {
      grupperteAndeler[andel.aktivitetStatus] = [andel];
    } else {
      eksisterendeListe.push(andel);
    }
  });
  const radListe: TabellRadData[] = [];
  Object.keys(grupperteAndeler).forEach(key => {
    const liste = grupperteAndeler[key];
    const aksjonspunkt = finnAksjonspunktForStatus(key, avklaringsbehov);
    const alleAndelerErBeregnet = liste.every(andel => erBeregnet(andel));
    const inntekt = liste.reduce((sum, andel) => finnForeslåttBeløp(andel) + sum, 0);
    const bortfaltNaturalytelse = liste.reduce((sum, andel) => finnNaturalytelsebeløp(andel) + sum, 0);
    const inntektPlussNaturalytelse = (inntekt || 0) + (bortfaltNaturalytelse || 0);
    const erFerdigBeregnet = alleAndelerErBeregnet && !isAksjonspunktOpen(aksjonspunkt);
    radListe.push({
      inntekt,
      bortfaltNaturalytelse,
      inntektPlussNaturalytelse,
      erFerdigBeregnet,
      status: key,
    });
  });
  return radListe;
};

const harÅrsakSomKanGiNyDagsats = (årsaker: string[]) => årsaker.some(k => ÅRSAKER_SOM_KAN_GI_NY_DAGSATS.includes(k));

const utledTabellData = (beregningsgrunnlag: Beregningsgrunnlag): TabellData[] => {
  // Vi skal alltid vise første periode, deretter kun perioder som er opprettet pga noe som \kan endre dagsatsen i perioden
  const { beregningsgrunnlagPeriode } = beregningsgrunnlag;
  const fomDatoer = beregningsgrunnlagPeriode
    .filter(
      bgp =>
        bgp.beregningsgrunnlagPeriodeFom === beregningsgrunnlag.skjaeringstidspunktBeregning ||
        (!!bgp.periodeAarsaker && harÅrsakSomKanGiNyDagsats(bgp.periodeAarsaker)),
    )
    .map(bgp => bgp.beregningsgrunnlagPeriodeFom)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  const tabellData: TabellData[] = [];
  for (let i = 0; i < fomDatoer.length; i += 1) {
    const fom = fomDatoer[i];
    const tom =
      i + 1 < fomDatoer.length
        ? dayjs(fomDatoer[i + 1])
            .subtract(1, 'day')
            .format(ISO_DATE_FORMAT)
            .toString()
        : undefined;
    const matchendePeriode = beregningsgrunnlagPeriode.find(bgp => bgp.beregningsgrunnlagPeriodeFom === fom);
    const årsak = matchendePeriode?.periodeAarsaker || [];
    const andeler = lagAndeler(
      matchendePeriode?.beregningsgrunnlagPrStatusOgAndel || [],
      beregningsgrunnlag.avklaringsbehov,
    );
    const redusertPrÅr = matchendePeriode?.redusertPrAar;
    const avkortetPrÅr = matchendePeriode?.avkortetPrAar;
    const dagsats = matchendePeriode?.dagsats;
    tabellData.push({
      fom,
      tom,
      årsak,
      andeler,
      redusertPrÅr,
      avkortetPrÅr,
      dagsats,
    });
  }
  return tabellData;
};

type Props = {
  beregningsgrunnlag: Beregningsgrunnlag;
  vilkårsperiode: Vilkårperiode;
};

export const BeregningsresultatPanel = ({ beregningsgrunnlag, vilkårsperiode }: Props) => {
  const tabellData = utledTabellData(beregningsgrunnlag);

  return (
    <VStack gap="space-4">
      <Heading size="xsmall" level="4">
        <FormattedMessage id="BeregningsresultatPanel.Tittel" />
      </Heading>
      <VStack gap="space-32">
        {tabellData.map(tab => (
          <OppsummertGrunnlagPanel
            key={tab.fom}
            tabellData={tab}
            skalVisePeriode={tabellData.length > 1}
            vilkårsperiode={vilkårsperiode}
            beregningsgrunnlag={beregningsgrunnlag}
          />
        ))}
      </VStack>
    </VStack>
  );
};
