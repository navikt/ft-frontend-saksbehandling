import React, { FunctionComponent, ReactElement } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames/bind';
import { Element } from 'nav-frontend-typografi';
import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';
import { DDMMYYYY_DATE_FORMAT, formatCurrencyNoKr, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagAndel,
  FordelBeregningsgrunnlagPeriode,
} from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';

import {
  finnFastsattPrAar,
  setArbeidsforholdInitialValues,
  setGenerellAndelsinfo,
  settAndelIArbeid,
  settFastsattBelop,
} from './BgFordelingUtils';
import { FordelBeregningsgrunnlagAndelValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import FordelPeriodeFieldArray from './FordelPeriodeFieldArray';

import styles from './fordelBeregningsgrunnlagPeriodePanel.less';

const classNames = classnames.bind(styles);

const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const renderDateHeading = (fom: string, tom: string): ReactElement => {
  if (!tom) {
    return (
      <Element>
        <FormattedMessage id="BeregningInfoPanel.FordelBG.PeriodeFom" values={{ fom: formatDate(fom) }} />
      </Element>
    );
  }
  return (
    <Element>
      <FormattedMessage
        id="BeregningInfoPanel.FordelBG.PeriodeFomOgTom"
        values={{
          fom: formatDate(fom),
          tom: formatDate(tom),
        }}
      />
    </Element>
  );
};

const finnSumIPeriode = (bgPerioder: BeregningsgrunnlagPeriodeProp[], fom: string): number => {
  const periode = bgPerioder.find(p => p.beregningsgrunnlagPeriodeFom === fom);
  return periode.bruttoInkludertBortfaltNaturalytelsePrAar;
};

type OwnProps = {
  readOnly: boolean;
  fordelBGFieldArrayName: string;
  open?: boolean;
  isAksjonspunktClosed: boolean;
  showPanel: (...args: any[]) => any;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  behandlingType: string;
  fordelingsperiode: FordelBeregningsgrunnlagPeriode;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
};

interface StaticFunctions {
  buildInitialValues: (
    periode: FordelBeregningsgrunnlagPeriode,
    bgPeriode: BeregningsgrunnlagPeriodeProp,
    skjaeringstidspunktBeregning: string,
    harKunYtelse: boolean,
    getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  ) => FordelBeregningsgrunnlagAndelValues[];
}

/**
 * FordelBeregningsgrunnlagPeriodePanel
 *
 * Presentasjonskomponent. Viser ekspanderbart panel for perioder i nytt/endret beregningsgrunnlag
 */

const FordelBeregningsgrunnlagPeriodePanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  isAksjonspunktClosed,
  open,
  showPanel,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  arbeidsgiverOpplysningerPerId,
  fordelBGFieldArrayName,
  fordelingsperiode,
  fieldIndex,
}) => (
  <EkspanderbartpanelBase
    className={readOnly ? styles.statusOk : classNames(`fordelBeregningsgrunnlagPeriode--${fordelingsperiode.fom}`)}
    tittel={renderDateHeading(fordelingsperiode.fom, fordelingsperiode.tom)}
    apen={open}
    onClick={() => showPanel(fordelingsperiode.fom)}
  >
    <FordelPeriodeFieldArray
      fieldName={fordelBGFieldArrayName}
      readOnly={readOnly}
      sumIPeriode={finnSumIPeriode(beregningsgrunnlag.beregningsgrunnlagPeriode, fordelingsperiode.fom)}
      skalIkkeRedigereInntekt={!fordelingsperiode.skalRedigereInntekt}
      skalKunneEndreRefusjon={fordelingsperiode.skalKunneEndreRefusjon}
      periodeFom={fordelingsperiode.fom}
      isAksjonspunktClosed={isAksjonspunktClosed}
      alleKodeverk={alleKodeverk}
      beregningsgrunnlag={beregningsgrunnlag}
      behandlingType={behandlingType}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      vilk??rperiodeFieldIndex={fieldIndex}
    />
  </EkspanderbartpanelBase>
);

FordelBeregningsgrunnlagPeriodePanel.defaultProps = {
  open: null,
};

const finnRiktigAndel = (
  andel: FordelBeregningsgrunnlagAndel,
  bgPeriode: BeregningsgrunnlagPeriodeProp,
): BeregningsgrunnlagAndel => bgPeriode.beregningsgrunnlagPrStatusOgAndel.find(a => a.andelsnr === andel.andelsnr);

const starterPaaEllerEtterStp = (bgAndel: BeregningsgrunnlagAndel, skjaeringstidspunktBeregning: string): boolean =>
  bgAndel &&
  bgAndel.arbeidsforhold &&
  bgAndel.arbeidsforhold.startdato &&
  !moment(bgAndel.arbeidsforhold.startdato).isBefore(moment(skjaeringstidspunktBeregning));

const finnBeregningsgrunnlagPrAar = (bgAndel: BeregningsgrunnlagAndel): string | undefined => {
  if (!bgAndel) {
    return null;
  }
  const bortfaltNaturalytelse =
    bgAndel.bortfaltNaturalytelse === null || bgAndel.bortfaltNaturalytelse === undefined
      ? 0
      : bgAndel.bortfaltNaturalytelse;
  const tilkommetNaturalytelse =
    bgAndel.tilkommetNaturalytelse === null || bgAndel.tilkommetNaturalytelse === undefined
      ? 0
      : bgAndel.tilkommetNaturalytelse;
  if (bgAndel.besteberegningPrAar || bgAndel.besteberegningPrAar === 0) {
    return formatCurrencyNoKr(bgAndel.besteberegningPrAar + bortfaltNaturalytelse - tilkommetNaturalytelse);
  }
  if (bgAndel.overstyrtPrAar || bgAndel.overstyrtPrAar === 0) {
    return formatCurrencyNoKr(bgAndel.overstyrtPrAar + bortfaltNaturalytelse - tilkommetNaturalytelse);
  }
  if (bgAndel.beregnetPrAar || bgAndel.beregnetPrAar === 0) {
    return formatCurrencyNoKr(bgAndel.beregnetPrAar + bortfaltNaturalytelse - tilkommetNaturalytelse);
  }
  return null;
};

FordelBeregningsgrunnlagPeriodePanel.buildInitialValues = (
  periode: FordelBeregningsgrunnlagPeriode,
  bgPeriode: BeregningsgrunnlagPeriodeProp,
  skjaeringstidspunktBeregning: string,
  harKunYtelse: boolean,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FordelBeregningsgrunnlagAndelValues[] => {
  if (!periode || !periode.fordelBeregningsgrunnlagAndeler) {
    return [];
  }
  return periode.fordelBeregningsgrunnlagAndeler.map(andel => {
    const bgAndel = finnRiktigAndel(andel, bgPeriode);
    return {
      ...setGenerellAndelsinfo(andel, harKunYtelse, getKodeverknavn, arbeidsgiverOpplysningerPerId),
      ...setArbeidsforholdInitialValues(andel),
      andelIArbeid: settAndelIArbeid(andel.andelIArbeid),
      fordelingForrigeBehandling:
        andel.fordelingForrigeBehandlingPrAar || andel.fordelingForrigeBehandlingPrAar === 0
          ? formatCurrencyNoKr(andel.fordelingForrigeBehandlingPrAar)
          : '',
      fastsattBelop: settFastsattBelop(
        andel.fordeltPrAar,
        bgAndel.bruttoPrAar,
        periode.skalPreutfyllesMedBeregningsgrunnlag,
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
      skalRedigereInntekt: periode.skalRedigereInntekt,
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

export default FordelBeregningsgrunnlagPeriodePanel;
