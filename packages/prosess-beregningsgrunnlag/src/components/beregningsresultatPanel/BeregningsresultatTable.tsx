import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  AktivitetStatus,
  PeriodeAarsak,
  Dekningsgrad as dekningsgradKode,
  FagsakYtelseType,
  VilkarUtfallType,
} from '@navikt/ft-kodeverk';
import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr, removeSpacesFromNumber } from '@navikt/ft-utils';
import {
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  Vilkarperiode,
  YtelseGrunnlag,
} from '@navikt/ft-types';

import dayjs from 'dayjs';
import { andelErIkkeTilkommetEllerLagtTilAvSBH } from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import BeregningsresutatPanel from './BeregningsresutatPanel';
import BeregningsresultatPeriodeTabellType, {
  AvkortetRadType,
  BeregningsresultatAndelElementType,
  BruttoRadType,
  DagsatsRadType,
  RedusertRadType,
} from '../../types/BeregningsresultatPeriodeTabellType';

const VIRKEDAGER_PR_AAR = 260;

const periodeHarAarsakSomTilsierVisning = (aarsaker: string[]): boolean => {
  if (aarsaker.length < 1) {
    return true;
  }
  const aarsakerSomTilsierMuligEndringIDagsats = [
    PeriodeAarsak.NATURALYTELSE_BORTFALT,
    PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET,
    PeriodeAarsak.NATURALYTELSE_TILKOMMER,
  ];
  return aarsaker.filter(aarsak => aarsakerSomTilsierMuligEndringIDagsats.some(a => a === aarsak)).length > 0;
};

const setTekstStrengKeyPavilkaarUtfallType = (vilkarStatus: string, skalFastsetteGrunnlag: boolean): string => {
  if (!vilkarStatus) return 'Fastsatt';
  if (vilkarStatus === VilkarUtfallType.OPPFYLT && !skalFastsetteGrunnlag) {
    return 'Omberegnet';
  }
  if (vilkarStatus === VilkarUtfallType.IKKE_OPPFYLT) {
    return 'Omberegnet';
  }
  return 'Fastsatt';
};

const erVilkaarOppfyltForEnAvAndelene = (vilkarStatus: string, andeler: any[]): boolean => {
  if (!vilkarStatus) return false;
  if (vilkarStatus === VilkarUtfallType.IKKE_OPPFYLT) {
    return false;
  }
  if (vilkarStatus === VilkarUtfallType.IKKE_VURDERT) {
    return false;
  }
  if (vilkarStatus === VilkarUtfallType.OPPFYLT) {
    const harOverstyrt = andeler.find(andel => andel.overstyrtPrAar !== true);
    if (harOverstyrt) {
      return true;
    }
  }
  return false;
};

const bel??pEller0 = (bel??p?: number): number => bel??p || 0;

const hentAndelFraPeriode = (periode: BeregningsgrunnlagPeriodeProp, andelType: string): BeregningsgrunnlagAndel[] =>
  periode && periode.beregningsgrunnlagPrStatusOgAndel
    ? periode.beregningsgrunnlagPrStatusOgAndel
        .filter(andel => andel.aktivitetStatus === andelType)
        .filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel))
    : [];

const lagPeriodeHeader = (fom: string, tom?: string): ReactElement => (
  <FormattedMessage
    id="Beregningsgrunnlag.BeregningTable.Periode"
    key={`fom-tom${fom}${tom}`}
    values={{ fom: dayjs(fom).format(DDMMYYYY_DATE_FORMAT), tom: tom ? dayjs(tom).format(DDMMYYYY_DATE_FORMAT) : '' }}
  />
);

const opprettSNElement = (andel: BeregningsgrunnlagAndel, vilk??rstatus: string): BeregningsresultatAndelElementType => {
  let erOverstyrt = false;
  let inntekt;
  const { skalFastsetteGrunnlag } = andel;
  if (skalFastsetteGrunnlag && vilk??rstatus !== VilkarUtfallType.IKKE_VURDERT) {
    if (andel.overstyrtPrAar || andel.overstyrtPrAar === 0) {
      inntekt = andel.overstyrtPrAar;
      erOverstyrt = true;
    } else {
      inntekt = andel.beregnetPrAar || andel.beregnetPrAar === 0 ? andel.beregnetPrAar : '';
    }
  } else if (skalFastsetteGrunnlag && vilk??rstatus === VilkarUtfallType.IKKE_VURDERT) {
    inntekt = 'fastsett';
  } else {
    inntekt = andel.bruttoPrAar || andel.bruttoPrAar === 0 ? andel.bruttoPrAar : '';
  }
  const pgiSnitt = andel.pgiSnitt || andel.pgiSnitt === 0 ? andel.pgiSnitt : undefined;
  return {
    erOverstyrt,
    skalFastsetteGrunnlag: !!skalFastsetteGrunnlag,
    inntekt,
    pgiSnitt,
  };
};

const opprettATElement = (
  andeler: BeregningsgrunnlagAndel[],
  vilk??rstatus: string,
): BeregningsresultatAndelElementType => {
  let inntekt;
  let erOverstyrt = false;
  const skalFastsetteGrunnlag = andeler.some(atAndel => atAndel.skalFastsetteGrunnlag === true);
  if (skalFastsetteGrunnlag && vilk??rstatus !== VilkarUtfallType.IKKE_VURDERT) {
    // denne testen kan brukes p?? alle
    erOverstyrt = andeler.some(atAndel => atAndel.overstyrtPrAar !== undefined && atAndel.overstyrtPrAar !== null);
    if (erOverstyrt) {
      inntekt =
        andeler && andeler.length > 0 ? andeler.reduce((sum, andel) => sum + bel??pEller0(andel.overstyrtPrAar), 0) : 0;
    } else {
      inntekt =
        andeler && andeler.length > 0 ? andeler.reduce((sum, andel) => sum + bel??pEller0(andel.beregnetPrAar), 0) : 0;
    }
  } else if (skalFastsetteGrunnlag && vilk??rstatus === VilkarUtfallType.IKKE_VURDERT) {
    inntekt = 'fastsett';
  } else {
    inntekt =
      andeler && andeler.length > 0 ? andeler.reduce((sum, andel) => sum + bel??pEller0(andel.bruttoPrAar), 0) : 0;
  }
  return {
    erOverstyrt,
    skalFastsetteGrunnlag,
    inntekt,
  };
};

const opprettDefaultElement = (
  f??rsteAndel: BeregningsgrunnlagAndel,
  vilk??rstatus: string,
): BeregningsresultatAndelElementType => {
  let inntekt;
  let erOverstyrt = false;
  let { skalFastsetteGrunnlag } = f??rsteAndel;
  if (skalFastsetteGrunnlag && vilk??rstatus !== VilkarUtfallType.IKKE_VURDERT) {
    if (f??rsteAndel.overstyrtPrAar || f??rsteAndel.overstyrtPrAar === 0) {
      inntekt = f??rsteAndel.overstyrtPrAar;
      erOverstyrt = true;
    } else {
      inntekt = f??rsteAndel.beregnetPrAar || f??rsteAndel.beregnetPrAar === 0 ? f??rsteAndel.beregnetPrAar : '';
    }
  } else if (skalFastsetteGrunnlag && vilk??rstatus === VilkarUtfallType.IKKE_VURDERT) {
    inntekt = 'fastsett';
  } else {
    inntekt = f??rsteAndel.bruttoPrAar || f??rsteAndel.bruttoPrAar === 0 ? f??rsteAndel.bruttoPrAar : '';
  }
  skalFastsetteGrunnlag = f??rsteAndel.skalFastsetteGrunnlag;
  return {
    erOverstyrt,
    skalFastsetteGrunnlag: !!skalFastsetteGrunnlag,
    inntekt,
  };
};

const opprettAndelElement = (
  periode: BeregningsgrunnlagPeriodeProp,
  andelType: string,
  vilkarStatus: string,
): BeregningsresultatAndelElementType => {
  const andelElement = {
    erOverstyrt: false,
    skalFastsetteGrunnlag: false,
    inntekt: '',
  } as BeregningsresultatAndelElementType;
  andelElement.ledetekst = <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Generell" />;
  const andeler = hentAndelFraPeriode(periode, andelType);
  if (!andeler || andeler.length < 1) {
    return andelElement;
  }
  const f??rsteAndel = andeler[0]; // Vil kun v??re en for statuser som ikke er ARBEIDSTAKER s?? drar for bruk i switch her
  if (andelType === AktivitetStatus.ARBEIDSTAKER) {
    const atElement = opprettATElement(andeler, vilkarStatus);
    andelElement.inntekt = atElement.inntekt;
    andelElement.erOverstyrt = atElement.erOverstyrt;
    andelElement.skalFastsetteGrunnlag = atElement.skalFastsetteGrunnlag;
  } else if (andelType === AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE) {
    const snElement = opprettSNElement(f??rsteAndel, vilkarStatus);
    andelElement.inntekt = snElement.inntekt;
    andelElement.erOverstyrt = snElement.erOverstyrt;
    andelElement.skalFastsetteGrunnlag = snElement.skalFastsetteGrunnlag;
    andelElement.pgiSnitt = snElement.pgiSnitt;
  } else {
    const defaultElement = opprettDefaultElement(f??rsteAndel, vilkarStatus);
    andelElement.inntekt = defaultElement.inntekt;
    andelElement.erOverstyrt = defaultElement.erOverstyrt;
    andelElement.skalFastsetteGrunnlag = defaultElement.skalFastsetteGrunnlag;
  }
  if ((andelElement.inntekt || andelElement.inntekt === 0) && andelElement.inntekt !== -1) {
    andelElement.verdi = Number(andelElement.inntekt);
  }
  const strKey = setTekstStrengKeyPavilkaarUtfallType(vilkarStatus, andelElement.skalFastsetteGrunnlag);
  andelElement.ledetekst = <FormattedMessage id={`Beregningsgrunnlag.BeregningTable.${strKey}.${andelType}`} />;
  return andelElement;
};

const hentVerdiFraAndel = (andel: BeregningsresultatAndelElementType): number => {
  if (!andel || !andel.verdi) {
    return 0;
  }
  return andel.verdi;
};

const hentPGIFraSNAndel = (andel: BeregningsresultatAndelElementType): number => {
  if (!andel || !andel.pgiSnitt) {
    return 0;
  }
  return andel.pgiSnitt;
};

const settVisningsRaderForATSN = (
  periode: BeregningsgrunnlagPeriodeProp,
  rowsAndeler: BeregningsresultatAndelElementType[],
  rowsForklaringer: ReactElement[],
  vilkarStatus: string,
): void => {
  const atElement = opprettAndelElement(periode, AktivitetStatus.ARBEIDSTAKER, vilkarStatus);
  const snElement = opprettAndelElement(periode, AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, vilkarStatus);
  // legger til regler for s??rtilfeller
  const erOppfylt = erVilkaarOppfyltForEnAvAndelene(vilkarStatus, [atElement, snElement]);
  if (hentVerdiFraAndel(atElement) < hentPGIFraSNAndel(snElement) && !erOppfylt) {
    snElement.verdi = snElement.pgiSnitt;
    rowsAndeler.push(snElement);
    return;
  }
  if (hentVerdiFraAndel(atElement) > hentPGIFraSNAndel(snElement)) {
    rowsForklaringer.push(
      <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringAToverstigerSN" />,
    );
    if (!erOppfylt) {
      atElement.ledetekst = <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.AT" />;
    }
    rowsAndeler.push(atElement);
    return;
  }
  rowsAndeler.push(atElement);
  rowsAndeler.push(snElement);
};
const settVisningsRaderForATFLSN = (
  periode: BeregningsgrunnlagPeriodeProp,
  rowsAndeler: BeregningsresultatAndelElementType[],
  rowsForklaringer: ReactElement[],
  vilkarStatus: string,
): void => {
  const atElement = opprettAndelElement(periode, AktivitetStatus.ARBEIDSTAKER, vilkarStatus);
  const snElement = opprettAndelElement(periode, AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, vilkarStatus);
  const flElement = opprettAndelElement(periode, AktivitetStatus.FRILANSER, vilkarStatus);
  const erOppfylt = erVilkaarOppfyltForEnAvAndelene(vilkarStatus, [atElement, flElement, snElement]);
  if (hentVerdiFraAndel(atElement) + hentVerdiFraAndel(flElement) > hentVerdiFraAndel(snElement)) {
    rowsForklaringer.push(
      <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringAT_FLoverstigerSN" />,
    );
    rowsAndeler.push(atElement);
    rowsAndeler.push(flElement);
  } else {
    // setter SN ledetekst til Pensjonsgibevnde ??rsintekt
    if (erOppfylt) {
      // setter SN ledetekst til Fastsatt ??rsintekt
      snElement.ledetekst = <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Fastsatt.SN" />;
    } else {
      snElement.ledetekst = <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.SN" />;
    }
    rowsAndeler.push(atElement);
    rowsAndeler.push(flElement);
    rowsAndeler.push(snElement);
    rowsAndeler.push(snElement);
  }
};
const settVisningsRaderForDPFLSN = (
  periode: BeregningsgrunnlagPeriodeProp,
  rowsAndeler: BeregningsresultatAndelElementType[],
  rowsForklaringer: ReactElement[],
  vilkarStatus: string,
): void => {
  const snElement = opprettAndelElement(periode, AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, vilkarStatus);
  const flElement = opprettAndelElement(periode, AktivitetStatus.FRILANSER, vilkarStatus);
  const dpElement = opprettAndelElement(periode, AktivitetStatus.DAGPENGER, vilkarStatus);
  if (hentVerdiFraAndel(dpElement) + hentVerdiFraAndel(flElement) > hentVerdiFraAndel(snElement)) {
    rowsForklaringer.push(
      <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringDP_FLoverstigerSN" />,
    );
    rowsAndeler.push(flElement);
    rowsAndeler.push(dpElement);
  } else {
    rowsAndeler.push(flElement);
    rowsAndeler.push(dpElement);
    rowsAndeler.push(snElement);
  }
};
const settVisningsRaderForATDPSN = (
  periode: BeregningsgrunnlagPeriodeProp,
  rowsAndeler: BeregningsresultatAndelElementType[],
  rowsForklaringer: ReactElement[],
  vilkarStatus: string,
): void => {
  const atElement = opprettAndelElement(periode, AktivitetStatus.ARBEIDSTAKER, vilkarStatus);
  const snElement = opprettAndelElement(periode, AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, vilkarStatus);
  const dpElement = opprettAndelElement(periode, AktivitetStatus.DAGPENGER, vilkarStatus);

  if (hentVerdiFraAndel(dpElement) + hentVerdiFraAndel(atElement) > hentPGIFraSNAndel(snElement)) {
    rowsForklaringer.push(
      <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Omberegnet.ForklaringAT_DPoverstigerSN" />,
    );
    rowsAndeler.push(atElement);
    rowsAndeler.push(dpElement);
  } else {
    rowsAndeler.push(atElement);
    rowsAndeler.push(dpElement);
    rowsAndeler.push(snElement);
  }
};

const settVisningsRaderForDefault = (
  periode: BeregningsgrunnlagPeriodeProp,
  rowsAndeler: BeregningsresultatAndelElementType[],
  rowsForklaringer: ReactElement[],
  vilkarStatus: string,
  harBortfallNaturalYtelse: boolean,
): void => {
  // NOSONAR ikke vanskelig ?? lese, men kunne v??rt splittet?
  const atElement = opprettAndelElement(periode, AktivitetStatus.ARBEIDSTAKER, vilkarStatus);
  const flElement = opprettAndelElement(periode, AktivitetStatus.FRILANSER, vilkarStatus);
  const snElement = opprettAndelElement(periode, AktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE, vilkarStatus);
  const aapElement = opprettAndelElement(periode, AktivitetStatus.ARBEIDSAVKLARINGSPENGER, vilkarStatus);
  const dpElement = opprettAndelElement(periode, AktivitetStatus.DAGPENGER, vilkarStatus);
  const baElement = opprettAndelElement(periode, AktivitetStatus.BRUKERS_ANDEL, vilkarStatus);
  const msElement = opprettAndelElement(periode, AktivitetStatus.MILITAER_ELLER_SIVIL, vilkarStatus);
  const kyElement = opprettAndelElement(periode, AktivitetStatus.KUN_YTELSE, vilkarStatus);

  if (baElement && baElement.verdi !== undefined) {
    rowsAndeler.push(baElement);
  }
  if (atElement && atElement.verdi !== undefined) {
    rowsAndeler.push({ ...atElement });
  }
  if (flElement && flElement.verdi !== undefined) {
    rowsAndeler.push(flElement);
  }
  if (snElement && snElement.verdi !== undefined) {
    rowsAndeler.push(snElement);
  }
  if (aapElement && aapElement.verdi !== undefined) {
    rowsAndeler.push(aapElement);
  }
  if (dpElement && dpElement.verdi !== undefined) {
    rowsAndeler.push(dpElement);
  }
  if (msElement && msElement.verdi !== undefined) {
    rowsAndeler.push(msElement);
  }
  if (kyElement && kyElement.verdi !== undefined) {
    rowsAndeler.push(kyElement);
  }

  if (harBortfallNaturalYtelse) {
    const ntElement = {
      verdi: undefined,
      skalFastsetteGrunnlag: false,
      ledetekst: undefined,
      inntekt: 0,
    } as BeregningsresultatAndelElementType;
    const atAndel = periode.beregningsgrunnlagPrStatusOgAndel
      ? periode.beregningsgrunnlagPrStatusOgAndel.filter(
          andel =>
            andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER && andel.arbeidsforhold?.naturalytelseBortfaltPr??r,
        )
      : [];
    ntElement.verdi =
      atAndel && atAndel.length > 0
        ? atAndel.reduce((sum, andel) => sum + bel??pEller0(andel.arbeidsforhold?.naturalytelseBortfaltPr??r), 0)
        : undefined;
    ntElement.skalFastsetteGrunnlag = false;
    ntElement.ledetekst = <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Naturalytelser" />;
    rowsAndeler.push(ntElement);
  }
};

const finnDagsatsGrunnlag = (
  bruttoRad: BruttoRadType,
  avkortetRad: AvkortetRadType,
  redusertRad: RedusertRadType,
): string | null => {
  if (redusertRad.verdi && redusertRad.display !== false) return redusertRad.verdi;
  if (avkortetRad.verdi && avkortetRad.display !== false) return avkortetRad.verdi;
  if (bruttoRad.verdi && bruttoRad.display !== false) return bruttoRad.verdi;
  return null;
};

const harSVPGrunnlag = (ytelseGrunnlag?: YtelseGrunnlag): boolean =>
  ytelseGrunnlag?.ytelsetype === FagsakYtelseType.SVANGERSKAPSPENGER;

const finnDagsats = (periode: BeregningsgrunnlagPeriodeProp, ytelseGrunnlag?: YtelseGrunnlag): number => {
  if (harSVPGrunnlag(ytelseGrunnlag) && periode.avkortetPrAar) {
    return Math.round(periode.avkortetPrAar / VIRKEDAGER_PR_AAR);
  }
  return periode.dagsats || 0;
};

const sjekkHarBortfaltNaturalYtelse = (periode: BeregningsgrunnlagPeriodeProp): boolean => {
  if (!periode) {
    return false;
  }
  return periode && periode.beregningsgrunnlagPrStatusOgAndel
    ? periode.beregningsgrunnlagPrStatusOgAndel.some(
        andel =>
          andel.arbeidsforhold?.naturalytelseBortfaltPr??r !== undefined &&
          andel.arbeidsforhold?.naturalytelseBortfaltPr??r !== null &&
          andel.arbeidsforhold?.naturalytelseBortfaltPr??r !== 0,
      )
    : false;
};

const bel??pEllerBlankString = (bel??p?: number): string => formatCurrencyNoKr(bel??p) || '';

const createBeregningTableData = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  aktivitetStatusList: string[],
  dekningsgrad: number,
  grunnbelop: number,
  vilkarPeriode: Vilkarperiode,
  ytelseGrunnlag?: YtelseGrunnlag,
): BeregningsresultatPeriodeTabellType[] => {
  const perioderSomSkalVises = allePerioder.filter(periode =>
    periodeHarAarsakSomTilsierVisning(periode.periodeAarsaker || []),
  );
  if (perioderSomSkalVises.length < 1) {
    // Alle perioder har periode??rsak som egentlig ikke trengs vises, velger f??rste periode som den eneste som blir vist.
    perioderSomSkalVises.push(allePerioder[0]);
  }
  const periodeResultatTabeller = [] as BeregningsresultatPeriodeTabellType[];
  const seksG = grunnbelop * 6;
  perioderSomSkalVises.forEach(periode => {
    const headers = [];
    const bruttoRad = {
      ledetekst: <FormattedMessage id="Beregningsgrunnlag.BeregningTable.BruttoTotalt" />,
      verdi: null,
      display: null,
      grunnlag: null,
    } as BruttoRadType;
    const avkortetRad = {
      ledetekst: <FormattedMessage id="Beregningsgrunnlag.BeregningTable.Avkortet6g" />,
      verdi: null,
      display: null,
    } as AvkortetRadType;
    const redusertRad = {
      ledetekst: (
        <FormattedMessage id="Beregningsgrunnlag.BeregningTable.RedusertProsent" values={{ redusert: dekningsgrad }} />
      ),
      verdi: null,
      display: null,
    } as RedusertRadType;
    const dagsatserRad = {
      verdi: null,
      grunnlag: null,
    } as DagsatsRadType;
    const harBortfallNaturalYtelse = sjekkHarBortfaltNaturalYtelse(periode);
    headers.push(lagPeriodeHeader(periode.beregningsgrunnlagPeriodeFom, periode.beregningsgrunnlagPeriodeTom));
    bruttoRad.verdi = bel??pEllerBlankString(periode.bruttoInkludertBortfaltNaturalytelsePrAar);
    avkortetRad.verdi = bel??pEllerBlankString(periode.avkortetPrAar);
    if (dekningsgrad !== dekningsgradKode.HUNDRE) {
      redusertRad.verdi = bel??pEllerBlankString(periode.redusertPrAar);
    }
    dagsatserRad.verdi = bel??pEllerBlankString(finnDagsats(periode, ytelseGrunnlag));
    const rowsAndeler = [] as BeregningsresultatAndelElementType[];
    const rowsForklaringer = [] as ReactElement[];
    aktivitetStatusList.sort((a, b) => (a > b ? 1 : -1)); // sorter alfabetisk
    const aktivitetStatusKodeKombo = aktivitetStatusList.map(andelKode => andelKode).join('_');
    switch (aktivitetStatusKodeKombo) {
      case 'AT_SN': {
        settVisningsRaderForATSN(periode, rowsAndeler, rowsForklaringer, vilkarPeriode.vilkarStatus);
        break;
      }
      case 'AT_FL_SN': {
        settVisningsRaderForATFLSN(periode, rowsAndeler, rowsForklaringer, vilkarPeriode.vilkarStatus);
        break;
      }
      case 'DP_FL_SN': {
        settVisningsRaderForDPFLSN(periode, rowsAndeler, rowsForklaringer, vilkarPeriode.vilkarStatus);
        break;
      }
      case 'AT_DP_SN': {
        settVisningsRaderForATDPSN(periode, rowsAndeler, rowsForklaringer, vilkarPeriode.vilkarStatus);
        break;
      }
      default: {
        settVisningsRaderForDefault(
          periode,
          rowsAndeler,
          rowsForklaringer,
          vilkarPeriode.vilkarStatus,
          harBortfallNaturalYtelse,
        );
      }
    }

    // sjekk om spesialrader skul vises
    // IKKE vis avkortet rad hvis mindre en 6G
    if (removeSpacesFromNumber(bruttoRad.verdi) < seksG) {
      avkortetRad.display = false;
    }
    dagsatserRad.grunnlag = finnDagsatsGrunnlag(bruttoRad, avkortetRad, redusertRad);
    if (rowsAndeler.length < 2) {
      bruttoRad.display = false;
    }
    if (bruttoRad.display && bruttoRad.verdi === redusertRad.verdi) {
      redusertRad.display = false;
    }

    periodeResultatTabeller.push({
      headers,
      rowsAndeler,
      avkortetRad,
      redusertRad,
      bruttoRad,
      dagsatser: dagsatserRad,
      rowsForklaringer,
    });
  });
  return periodeResultatTabeller;
};

type OwnProps = {
  vilkarPeriode: Vilkarperiode;
  beregningsgrunnlagPerioder: BeregningsgrunnlagPeriodeProp[];
  aktivitetStatusList: string[];
  dekningsgrad: number;
  grunnbelop: number;
  ytelseGrunnlag?: YtelseGrunnlag;
};

/**
 * BeregningsresultatTable
 *
 * Presentasjonskomponent. Viser faktagruppe med beregningstabellen som viser inntekter brukt i
 * beregningen og hva dagsatsen ble.
 * Dersom vilk??ret ble avsl??tt vil grunnen til dette vises istedenfor tabellen
 */
const BeregningsresultatTable: FunctionComponent<OwnProps> = ({
  vilkarPeriode,
  beregningsgrunnlagPerioder,
  aktivitetStatusList,
  grunnbelop,
  dekningsgrad,
  ytelseGrunnlag,
}) => {
  const periodeResultatTabeller = createBeregningTableData(
    beregningsgrunnlagPerioder,
    aktivitetStatusList,
    dekningsgrad,
    grunnbelop,
    vilkarPeriode,
    ytelseGrunnlag,
  );
  return (
    <BeregningsresutatPanel
      grunnbel??p={grunnbelop}
      periodeResultatTabeller={periodeResultatTabeller}
      vilkarPeriode={vilkarPeriode}
    />
  );
};

export default BeregningsresultatTable;
