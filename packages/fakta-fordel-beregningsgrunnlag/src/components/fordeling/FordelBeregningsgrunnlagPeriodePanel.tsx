import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import classnames from 'classnames/bind';
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

import dayjs from 'dayjs';
import { Accordion, Label } from '@navikt/ds-react';
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
import VurdertIForrigeBehandlingIcon from '../felles/VurdertIForrigeBehandlingIcon';

const classNames = classnames.bind(styles);

const formatDate = (date: string): string => (date ? dayjs(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const renderDateHeading = (fom: string, tom: string | undefined): ReactElement => {
  if (!tom) {
    return (
      <Label size="small">
        <FormattedMessage id="BeregningInfoPanel.FordelBG.PeriodeFom" values={{ fom: formatDate(fom) }} />
      </Label>
    );
  }
  return (
    <Label size="small">
      <FormattedMessage
        id="BeregningInfoPanel.FordelBG.PeriodeFomOgTom"
        values={{
          fom: formatDate(fom),
          tom: formatDate(tom),
        }}
      />
    </Label>
  );
};

const finnBortfaltNaturalytelse = (andel: BeregningsgrunnlagAndel): number =>
  andel.bortfaltNaturalytelse ? andel.bortfaltNaturalytelse : 0;

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

type OwnProps = {
  readOnly: boolean;
  fordelBGFieldArrayName: string;
  open?: boolean;
  isAksjonspunktClosed: boolean;
  showPanel: (...args: any[]) => any;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  fordelingsperiode: FordelBeregningsgrunnlagPeriode;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
  setFieldArrayToRepeat: (fieldArrayName: string) => void;
  fieldArrayToRepeat: string;
  erVurdertTidligere: boolean;
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
  erVurdertTidligere,
  isAksjonspunktClosed,
  open,
  showPanel,
  beregningsgrunnlag,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  fordelBGFieldArrayName,
  fordelingsperiode,
  fieldIndex,
  setFieldArrayToRepeat,
  fieldArrayToRepeat,
}) => {
  if (!fordelingsperiode.fom) {
    return null;
  }
  return (
    <Accordion
      className={readOnly ? styles.statusOk : classNames(`fordelBeregningsgrunnlagPeriode--${fordelingsperiode.fom}`)}
    >
      <Accordion.Item open={open}>
        <Accordion.Header onClick={() => showPanel(fordelingsperiode.fom)}>
          {renderDateHeading(fordelingsperiode.fom, fordelingsperiode.tom)}{' '}
          {erVurdertTidligere ? <VurdertIForrigeBehandlingIcon /> : ''}
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
            alleKodeverk={alleKodeverk}
            beregningsgrunnlag={beregningsgrunnlag}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            vilkårperiodeFieldIndex={fieldIndex}
            setFieldArrayToRepeat={setFieldArrayToRepeat}
            fieldArrayToRepeat={fieldArrayToRepeat}
          />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
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

export default FordelBeregningsgrunnlagPeriodePanel;
