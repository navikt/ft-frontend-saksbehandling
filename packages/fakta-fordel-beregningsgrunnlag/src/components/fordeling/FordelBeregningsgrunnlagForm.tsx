import React, { Component } from 'react';
import moment from 'moment';

import { removeSpacesFromNumber } from '@navikt/ft-utils';
import { PeriodeAarsak, AktivitetStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  ArbeidsgiverOpplysningerPerId,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
  AlleKodeverk,
  Beregningsgrunnlag,
} from '@navikt/ft-types';
import {
  FordelBeregningsgrunnlagPerioderTransformedValues,
  FordelBeregningsgrunnlagAndelTransformedValues,
  FordelBeregningsgrunnlagFastsatteVerdierTransformedValues,
  FordelBeregningsgrunnlagPeriodeTransformedValues,
} from '../../types/interface/FordelBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagPeriodePanel from './FordelBeregningsgrunnlagPeriodePanel';

import styles from './fordelBeregningsgrunnlagForm.less';
import {
  FordelBeregningsgrunnlagAndelValues,
  FordelBeregningsgrunnlagValues,
} from '../../types/FordelBeregningsgrunnlagPanelValues';

const fordelBGFieldArrayNamePrefix = 'fordelBGPeriode';

export const getFieldNameKey = (index: number): string => fordelBGFieldArrayNamePrefix + index;

export const mapTilFastsatteVerdier = (
  aktivitet: FordelBeregningsgrunnlagAndelValues,
): FordelBeregningsgrunnlagFastsatteVerdierTransformedValues => ({
  refusjonPrÅr: aktivitet.skalKunneEndreRefusjon ? removeSpacesFromNumber(aktivitet.refusjonskrav) : null,
  fastsattÅrsbeløpInklNaturalytelse: removeSpacesFromNumber(aktivitet.fastsattBelop),
  inntektskategori: aktivitet.inntektskategori,
});

const finnRiktigBgPeriode = (
  periode: FordelBeregningsgrunnlagPeriode,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
): BeregningsgrunnlagPeriodeProp => bgPerioder.find(p => p.beregningsgrunnlagPeriodeFom === periode.fom);

const getAndelsnr = (aktivitet: FordelBeregningsgrunnlagAndelValues): number | string => {
  if (aktivitet.nyAndel === true) {
    return aktivitet.andel;
  }
  return aktivitet.andelsnr;
};

export const mapAndel = (
  aktivitet: FordelBeregningsgrunnlagAndelValues,
): FordelBeregningsgrunnlagAndelTransformedValues => ({
  andelsnr: getAndelsnr(aktivitet),
  aktivitetStatus: aktivitet.aktivitetStatus,
  arbeidsgiverId: aktivitet.arbeidsgiverId !== '' ? aktivitet.arbeidsgiverId : null,
  arbeidsforholdId: aktivitet.arbeidsforholdId !== '' ? aktivitet.arbeidsforholdId : null,
  nyAndel: aktivitet.nyAndel,
  kilde: aktivitet.kilde,
  lagtTilAvSaksbehandler: aktivitet.lagtTilAvSaksbehandler,
  arbeidsforholdType: aktivitet.arbeidsforholdType,
  beregningsperiodeTom: aktivitet.beregningsperiodeTom,
  beregningsperiodeFom: aktivitet.beregningsperiodeFom,
  forrigeArbeidsinntektPrÅr: aktivitet.forrigeArbeidsinntektPrAar,
  forrigeRefusjonPrÅr: aktivitet.forrigeRefusjonPrAar,
  forrigeInntektskategori: aktivitet.forrigeInntektskategori,
  fastsatteVerdier: mapTilFastsatteVerdier(aktivitet),
});

const harPeriodeSomKanKombineresMedForrige = (
  periode: BeregningsgrunnlagPeriodeProp,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
  fordelPeriode: FordelBeregningsgrunnlagPeriode,
  periodeList: FordelBeregningsgrunnlagPeriode[],
): boolean => {
  const forrigeEndringPeriode = periodeList[periodeList.length - 1];
  if (fordelPeriode.skalRedigereInntekt !== forrigeEndringPeriode.skalRedigereInntekt) {
    return false;
  }
  if (
    periode.periodeAarsaker.map(kode => kode).includes(PeriodeAarsak.ENDRING_I_REFUSJONSKRAV) ||
    periode.periodeAarsaker.map(kode => kode).includes(PeriodeAarsak.REFUSJON_OPPHOERER) ||
    periode.periodeAarsaker.map(kode => kode).includes(PeriodeAarsak.GRADERING) ||
    periode.periodeAarsaker.map(kode => kode).includes(PeriodeAarsak.GRADERING_OPPHOERER)
  ) {
    return false;
  }
  if (periode.periodeAarsaker.map(kode => kode).includes(PeriodeAarsak.ARBEIDSFORHOLD_AVSLUTTET)) {
    const periodeIndex = bgPerioder.indexOf(periode);
    const forrigePeriode = bgPerioder[periodeIndex - 1];
    return forrigePeriode.bruttoPrAar === periode.bruttoPrAar;
  }
  return true;
};

const oppdaterTomDatoForSistePeriode = (
  liste: FordelBeregningsgrunnlagPeriode[],
  periode: FordelBeregningsgrunnlagPeriode,
) => {
  const forrigePeriode = liste.pop();
  // @ts-ignore Fiks denne
  forrigePeriode.tom = periode.tom;
  liste.push(forrigePeriode);
};

const sjekkOmPeriodeSkalLeggesTil =
  (bgPerioder: BeregningsgrunnlagPeriodeProp[]) =>
  (
    aggregatedPeriodList: FordelBeregningsgrunnlagPeriode[],
    periode: FordelBeregningsgrunnlagPeriode,
  ): FordelBeregningsgrunnlagPeriode[] => {
    if (aggregatedPeriodList.length === 0) {
      aggregatedPeriodList.push({ ...periode });
      return aggregatedPeriodList;
    }
    const matchendeBgPeriode = bgPerioder.find(p => p.beregningsgrunnlagPeriodeFom === periode.fom);
    if (matchendeBgPeriode) {
      if (harPeriodeSomKanKombineresMedForrige(matchendeBgPeriode, bgPerioder, periode, aggregatedPeriodList)) {
        oppdaterTomDatoForSistePeriode(aggregatedPeriodList, periode);
        return aggregatedPeriodList;
      }
      aggregatedPeriodList.push({ ...periode });
    }
    return aggregatedPeriodList;
  };

const inkludererPeriode =
  (periode: FordelBeregningsgrunnlagPeriode) =>
  ({ fom, tom }: FordelBeregningsgrunnlagPeriode): boolean =>
    moment(fom).isSameOrAfter(moment(periode.fom)) &&
    (periode.tom === null || moment(tom).isSameOrBefore(moment(periode.tom)));

export const lagPerioderForSubmit = (
  values: FordelBeregningsgrunnlagValues,
  index: number,
  kombinertPeriode: FordelBeregningsgrunnlagPeriode,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
): FordelBeregningsgrunnlagPeriodeTransformedValues[] =>
  fordelBGPerioder.filter(inkludererPeriode(kombinertPeriode)).map((p: FordelBeregningsgrunnlagPeriode) => ({
    andeler: values[getFieldNameKey(index)].map(mapAndel),
    fom: p.fom,
    tom: p.tom,
  }));

export const slaaSammenPerioder = (
  perioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
): FordelBeregningsgrunnlagPeriode[] => perioder.reduce(sjekkOmPeriodeSkalLeggesTil(bgPerioder), []);

export const transformPerioder = (
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  values: FordelBeregningsgrunnlagValues,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
): FordelBeregningsgrunnlagPeriodeTransformedValues[] => {
  const fordelBeregningsgrunnlagPerioder = [];
  const kombinertePerioder = slaaSammenPerioder(fordelBGPerioder, bgPerioder);
  for (let index = 0; index < kombinertePerioder.length; index += 1) {
    const { skalRedigereInntekt } = kombinertePerioder[index];
    if (skalRedigereInntekt) {
      lagPerioderForSubmit(values, index, kombinertePerioder[index], fordelBGPerioder).forEach(
        (p: FordelBeregningsgrunnlagPeriodeTransformedValues) => fordelBeregningsgrunnlagPerioder.push(p),
      );
    }
  }
  return fordelBeregningsgrunnlagPerioder;
};

type OwnProps = {
  readOnly: boolean;
  perioder: FordelBeregningsgrunnlagPeriode[];
  isAksjonspunktClosed: boolean;
  bgPerioder: BeregningsgrunnlagPeriodeProp[];
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  behandlingType: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex;
};

interface OwnState {
  openPanels: string[];
}

/**
 * FordelBeregningsgrunnlagForm
 *
 * Container komponent.. Behandling av aksjonspunktet for fasetting av nytt/endret beregningsgrunnlag.
 */

export class FordelBeregningsgrunnlagForm extends Component<OwnProps, OwnState> {
  static transformValues = (
    values: FordelBeregningsgrunnlagValues,
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bgPerioder: BeregningsgrunnlagPeriodeProp[],
  ): FordelBeregningsgrunnlagPerioderTransformedValues => ({
    endretBeregningsgrunnlagPerioder: transformPerioder(fordelBGPerioder, values, bgPerioder),
  });

  static buildInitialValues = (
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bg: Beregningsgrunnlag,
    getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  ): FordelBeregningsgrunnlagValues => {
    const initialValues = {} as FordelBeregningsgrunnlagValues;
    if (!fordelBGPerioder) {
      return initialValues;
    }
    const harKunYtelse = bg.aktivitetStatus.some(status => status === AktivitetStatus.KUN_YTELSE);
    const bgPerioder = bg.beregningsgrunnlagPeriode;
    slaaSammenPerioder(fordelBGPerioder, bgPerioder).forEach((periode, index) => {
      const bgPeriode = finnRiktigBgPeriode(periode, bgPerioder);
      initialValues[getFieldNameKey(index)] = FordelBeregningsgrunnlagPeriodePanel.buildInitialValues(
        periode,
        bgPeriode,
        bg.skjaeringstidspunktBeregning,
        harKunYtelse,
        getKodeverknavn,
        arbeidsgiverOpplysningerPerId,
      );
    });
    return initialValues;
  };

  constructor(props: OwnProps) {
    super(props);
    this.state = {
      openPanels: props.perioder.map(periode => periode.fom),
    };
    this.showPanel = this.showPanel.bind(this);
  }

  showPanel(fom: string): void {
    const { openPanels } = this.state;
    if (openPanels.includes(fom)) {
      this.setState({ openPanels: openPanels.filter(panel => panel !== fom) });
    } else {
      openPanels.push(fom);
      this.setState({ openPanels });
    }
  }

  render() {
    const {
      readOnly,
      perioder,
      isAksjonspunktClosed,
      bgPerioder,
      beregningsgrunnlag,
      alleKodeverk,
      behandlingType,
      arbeidsgiverOpplysningerPerId,
      fieldIndex,
    } = this.props;
    const { openPanels } = this.state;
    return (
      <BorderBox className={styles.lessPadding}>
        {slaaSammenPerioder(perioder, bgPerioder).map((periode, index) => (
          <React.Fragment key={fordelBGFieldArrayNamePrefix + periode.fom}>
            <VerticalSpacer eightPx />
            <FordelBeregningsgrunnlagPeriodePanel
              readOnly={readOnly}
              fordelingsperiode={periode}
              fordelBGFieldArrayName={getFieldNameKey(index)}
              open={openPanels ? openPanels.filter(panel => panel === periode.fom).length > 0 : false}
              isAksjonspunktClosed={isAksjonspunktClosed}
              showPanel={this.showPanel}
              beregningsgrunnlag={beregningsgrunnlag}
              alleKodeverk={alleKodeverk}
              behandlingType={behandlingType}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              fieldIndex={fieldIndex}
            />
            <VerticalSpacer eightPx />
          </React.Fragment>
        ))}
      </BorderBox>
    );
  }
}

export default FordelBeregningsgrunnlagForm;
