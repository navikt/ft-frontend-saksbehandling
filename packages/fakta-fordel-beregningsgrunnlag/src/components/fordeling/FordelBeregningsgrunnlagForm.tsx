import React, { FunctionComponent, useEffect, useState } from 'react';
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

interface StaticFunctions {
  buildInitialValues: (
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bg: Beregningsgrunnlag,
    getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  ) => FordelBeregningsgrunnlagValues;
  transformValues: (
    values: FordelBeregningsgrunnlagValues,
    fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
    bgPerioder: BeregningsgrunnlagPeriodeProp[],
  ) => FordelBeregningsgrunnlagPerioderTransformedValues;
}

/**
 * FordelBeregningsgrunnlagForm
 *
 * Container komponent.. Behandling av aksjonspunktet for fasetting av nytt/endret beregningsgrunnlag.
 */

const FordelBeregningsgrunnlagForm: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  perioder,
  isAksjonspunktClosed,
  bgPerioder,
  beregningsgrunnlag,
  alleKodeverk,
  behandlingType,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
}) => {
  const [openPanels, setOpenPanels] = useState<string[]>([]);
  useEffect(() => {
    const åpnePaneler = perioder
      .filter(periode => periode.skalKunneEndreRefusjon || periode.skalRedigereInntekt)
      .map(periode => periode.fom);
    setOpenPanels(åpnePaneler);
  }, [perioder]);

  const showPanel = (fom: string) => {
    if (openPanels.includes(fom)) {
      const oppdatertePaneler = openPanels.filter(panel => panel !== fom);
      setOpenPanels(oppdatertePaneler);
    } else {
      const nyListe = openPanels.map(p => p);
      nyListe.push(fom);
      setOpenPanels(nyListe);
    }
  };
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
            showPanel={showPanel}
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
};

FordelBeregningsgrunnlagForm.transformValues = (
  values: FordelBeregningsgrunnlagValues,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
): FordelBeregningsgrunnlagPerioderTransformedValues => ({
  endretBeregningsgrunnlagPerioder: transformPerioder(fordelBGPerioder, values, bgPerioder),
});

FordelBeregningsgrunnlagForm.buildInitialValues = (
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
export default FordelBeregningsgrunnlagForm;
