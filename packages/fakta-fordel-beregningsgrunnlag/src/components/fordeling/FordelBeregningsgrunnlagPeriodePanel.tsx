import { Accordion } from '@navikt/ds-react';
import dayjs from 'dayjs';

import {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagAndel,
  FordelBeregningsgrunnlagPeriode,
} from '@navikt/ft-types';
import { PeriodLabel } from '@navikt/ft-ui-komponenter';
import { formatCurrencyNoKr } from '@navikt/ft-utils';

import { FordelBeregningsgrunnlagAndelValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import { KodeverkForPanel } from '../../types/kodeverkForPanel';
import { VurdertIForrigeBehandlingIcon } from '../felles/VurdertIForrigeBehandlingIcon';
import {
  finnFastsattPrAar,
  setArbeidsforholdInitialValues,
  setGenerellAndelsinfo,
  settAndelIArbeid,
  settFastsattBelop,
} from './bgFordelingUtils';
import { FordelPeriodeFieldArray } from './FordelPeriodeFieldArray';

const finnBortfaltNaturalytelse = (andel: BeregningsgrunnlagAndel): number =>
  andel.arbeidsforhold?.naturalytelseBortfaltPrÅr ? andel.arbeidsforhold?.naturalytelseBortfaltPrÅr : 0;

const finnBeregnetPlussBortfaltNat = (andel: BeregningsgrunnlagAndel): number => {
  const bortfaltNaturalytelse = finnBortfaltNaturalytelse(andel);
  if (andel.besteberegningPrAar !== undefined && andel.besteberegningPrAar !== null) {
    return andel.besteberegningPrAar + bortfaltNaturalytelse;
  }
  if (andel.overstyrtPrAar !== undefined && andel.overstyrtPrAar !== null) {
    return andel.overstyrtPrAar + bortfaltNaturalytelse;
  }
  if (andel.beregnetPrAar !== undefined && andel.beregnetPrAar !== null) {
    return andel.beregnetPrAar + bortfaltNaturalytelse;
  }
  return 0;
};

const finnSumIPeriode = (bgPerioder: BeregningsgrunnlagPeriodeProp[], fom: string): number => {
  const andeler = bgPerioder.find(p => p.beregningsgrunnlagPeriodeFom === fom)?.beregningsgrunnlagPrStatusOgAndel || [];
  return andeler
    .map(andel => finnBeregnetPlussBortfaltNat(andel))
    .reduce((sum, fastsattBelop) => sum + fastsattBelop, 0);
};

interface Props {
  readOnly: boolean;
  fordelBGFieldArrayName: string;
  open?: boolean;
  isAksjonspunktClosed: boolean;
  showPanel: (...args: any[]) => any;
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
  fordelingsperiode: FordelBeregningsgrunnlagPeriode;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
  setFieldArrayToRepeat: (fieldArrayName: string) => void;
  fieldArrayToRepeat: string;
  erVurdertTidligere: boolean;
}

export const FordelBeregningsgrunnlagPeriodePanel = ({
  readOnly,
  erVurdertTidligere,
  isAksjonspunktClosed,
  open,
  showPanel,
  beregningsgrunnlag,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fordelBGFieldArrayName,
  fordelingsperiode,
  fieldIndex,
  setFieldArrayToRepeat,
  fieldArrayToRepeat,
}: Props) => {
  if (!fordelingsperiode.fom) {
    return null;
  }
  return (
    <Accordion.Item open={open}>
      <Accordion.Header onClick={() => showPanel(fordelingsperiode.fom)}>
        <PeriodLabel dateStringFom={fordelingsperiode.fom} dateStringTom={fordelingsperiode.tom} />
        {erVurdertTidligere && <VurdertIForrigeBehandlingIcon />}
      </Accordion.Header>
      <Accordion.Content>
        <FordelPeriodeFieldArray
          fieldName={fordelBGFieldArrayName}
          readOnly={readOnly}
          sumIPeriode={finnSumIPeriode(beregningsgrunnlag.beregningsgrunnlagPeriode, fordelingsperiode.fom)}
          skalIkkeRedigereInntekt={!fordelingsperiode.skalRedigereInntekt}
          skalKunneEndreRefusjon={!!fordelingsperiode.skalKunneEndreRefusjon}
          periodeFom={fordelingsperiode.fom}
          isAksjonspunktClosed={isAksjonspunktClosed}
          kodeverkSamling={kodeverkSamling}
          beregningsgrunnlag={beregningsgrunnlag}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          vilkårperiodeFieldIndex={fieldIndex}
          setFieldArrayToRepeat={setFieldArrayToRepeat}
          fieldArrayToRepeat={fieldArrayToRepeat}
        />
      </Accordion.Content>
    </Accordion.Item>
  );
};

const finnRiktigAndel = (
  andel: FordelBeregningsgrunnlagAndel,
  bgPeriode: BeregningsgrunnlagPeriodeProp,
): BeregningsgrunnlagAndel => {
  const andeler = bgPeriode.beregningsgrunnlagPrStatusOgAndel || [];
  const matchetAndel = andeler.find(a => a.andelsnr === andel.andelsnr);
  if (!matchetAndel) {
    throw Error(`Finner ikke matchende andel med andelsnr ${andel.andelsnr}`);
  }
  return matchetAndel;
};

const starterPaaEllerEtterStp = (bgAndel: BeregningsgrunnlagAndel, skjaeringstidspunktBeregning: string): boolean => {
  const startdato = bgAndel.arbeidsforhold?.startdato;
  return !!startdato && !dayjs(startdato).isBefore(dayjs(skjaeringstidspunktBeregning));
};

const finnBeregningsgrunnlagPrAar = (bgAndel: BeregningsgrunnlagAndel): string | undefined => {
  if (!bgAndel) {
    return undefined;
  }
  const bortfaltNaturalytelse =
    bgAndel.arbeidsforhold?.naturalytelseBortfaltPrÅr === null ||
    bgAndel.arbeidsforhold?.naturalytelseBortfaltPrÅr === undefined
      ? 0
      : bgAndel.arbeidsforhold.naturalytelseBortfaltPrÅr;
  const tilkommetNaturalytelse =
    bgAndel.arbeidsforhold?.naturalytelseTilkommetPrÅr === null ||
    bgAndel.arbeidsforhold?.naturalytelseTilkommetPrÅr === undefined
      ? 0
      : bgAndel.arbeidsforhold.naturalytelseTilkommetPrÅr;
  if (bgAndel.besteberegningPrAar || bgAndel.besteberegningPrAar === 0) {
    return formatCurrencyNoKr(bgAndel.besteberegningPrAar + bortfaltNaturalytelse - tilkommetNaturalytelse);
  }
  if (bgAndel.overstyrtPrAar || bgAndel.overstyrtPrAar === 0) {
    return formatCurrencyNoKr(bgAndel.overstyrtPrAar + bortfaltNaturalytelse - tilkommetNaturalytelse);
  }
  if (bgAndel.beregnetPrAar || bgAndel.beregnetPrAar === 0) {
    return formatCurrencyNoKr(bgAndel.beregnetPrAar + bortfaltNaturalytelse - tilkommetNaturalytelse);
  }
  return undefined;
};

const finnBeløpFraForrigeBehandling = (andel: FordelBeregningsgrunnlagAndel): string => {
  const formatertBeløp =
    andel.fordelingForrigeBehandlingPrAar || andel.fordelingForrigeBehandlingPrAar === 0
      ? formatCurrencyNoKr(andel.fordelingForrigeBehandlingPrAar)
      : '';
  return formatertBeløp || '';
};

FordelBeregningsgrunnlagPeriodePanel.buildInitialValues = (
  periode: FordelBeregningsgrunnlagPeriode,
  bgPeriode: BeregningsgrunnlagPeriodeProp,
  skjaeringstidspunktBeregning: string,
  harKunYtelse: boolean,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FordelBeregningsgrunnlagAndelValues[] => {
  if (!periode || !periode.fordelBeregningsgrunnlagAndeler) {
    return [];
  }
  return periode.fordelBeregningsgrunnlagAndeler.map(andel => {
    const bgAndel = finnRiktigAndel(andel, bgPeriode);
    return {
      ...setGenerellAndelsinfo(andel, harKunYtelse, kodeverkSamling, arbeidsgiverOpplysningerPerId),
      ...setArbeidsforholdInitialValues(andel),
      andelIArbeid: settAndelIArbeid(andel.andelIArbeid || []),
      fordelingForrigeBehandling: finnBeløpFraForrigeBehandling(andel),
      fastsattBelop: settFastsattBelop(
        andel.fordeltPrAar,
        bgAndel.bruttoPrAar,
        !!periode.skalPreutfyllesMedBeregningsgrunnlag,
      ),
      readOnlyBelop: finnBeregningsgrunnlagPrAar(bgAndel),
      refusjonskrav:
        andel.refusjonskravPrAar !== null && andel.refusjonskravPrAar !== undefined
          ? formatCurrencyNoKr(andel.refusjonskravPrAar)
          : '',
      skalKunneEndreRefusjon:
        periode.skalKunneEndreRefusjon && !andel.lagtTilAvSaksbehandler && andel.refusjonskravFraInntektsmeldingPrAar
          ? periode.skalKunneEndreRefusjon
          : false,
      belopFraInntektsmelding: andel.belopFraInntektsmeldingPrAar,
      skalRedigereInntekt: !!periode.skalRedigereInntekt,
      refusjonskravFraInntektsmelding: andel.refusjonskravFraInntektsmeldingPrAar,
      nyttArbeidsforhold: andel.nyttArbeidsforhold || starterPaaEllerEtterStp(bgAndel, skjaeringstidspunktBeregning),
      beregningsgrunnlagPrAar: finnBeregningsgrunnlagPrAar(bgAndel),
      forrigeRefusjonPrAar: andel.refusjonskravPrAar,
      forrigeArbeidsinntektPrAar: finnFastsattPrAar(andel.fordeltPrAar),
      beregningsperiodeFom: bgAndel.beregningsperiodeFom,
      beregningsperiodeTom: bgAndel.beregningsperiodeTom,
    };
  });
};
