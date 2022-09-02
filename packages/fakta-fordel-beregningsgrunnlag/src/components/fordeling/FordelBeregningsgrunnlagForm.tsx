import React, { Component } from 'react';
import { AktivitetStatus, KodeverkType } from '@navikt/ft-kodeverk';
import { BorderBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
} from '@navikt/ft-types';
import {
  FordelBeregningsgrunnlagPerioderTransformedValues,
  FordelBeregningsgrunnlagPeriodeTransformedValues,
} from '../../types/interface/FordelBeregningsgrunnlagAP';
import FordelBeregningsgrunnlagPeriodePanel from './FordelBeregningsgrunnlagPeriodePanel';

import styles from './fordelBeregningsgrunnlagForm.less';
import { FordelBeregningsgrunnlagValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import {
  fordelBGFieldArrayNamePrefix,
  getFieldNameKey,
  lagPerioderForSubmit,
  slaaSammenPerioder,
} from './FordelPerioderUtils';

const finnRiktigBgPeriode = (
  periode: FordelBeregningsgrunnlagPeriode,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
): BeregningsgrunnlagPeriodeProp => bgPerioder.find(p => p.beregningsgrunnlagPeriodeFom === periode.fom);

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
      openPanels: props.perioder
        .filter(periode => periode.skalKunneEndreRefusjon || periode.skalRedigereInntekt)
        .map(periode => periode.fom),
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
