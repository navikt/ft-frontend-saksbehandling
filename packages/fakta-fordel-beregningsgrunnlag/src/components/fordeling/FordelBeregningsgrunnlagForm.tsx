import { useEffect, useState } from 'react';

import { Accordion } from '@navikt/ds-react';

import { AktivitetStatus } from '@navikt/ft-kodeverk';
import type {
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  BeregningsgrunnlagPeriodeProp,
  FordelBeregningsgrunnlagPeriode,
  ForlengelsePeriodeProp,
} from '@navikt/ft-types';

import type { FordelBeregningsgrunnlagValues } from '../../types/FordelBeregningsgrunnlagPanelValues';
import type {
  FordelBeregningsgrunnlagPerioderTransformedValues,
  FordelBeregningsgrunnlagPeriodeTransformedValues,
} from '../../types/interface/FordelBeregningsgrunnlagAP';
import type { KodeverkForPanel } from '../../types/kodeverkForPanel';
import { erPeriodeTilVurdering } from '../util/forlengelseUtils';
import { FordelBeregningsgrunnlagPeriodePanel } from './FordelBeregningsgrunnlagPeriodePanel';
import { fordelBGFieldArrayNamePrefix, lagPerioderForSubmit, slåSammenPerioder } from './fordelPerioderUtils';

const getFieldNameKey = (index: number): string => fordelBGFieldArrayNamePrefix + index;

const finnRiktigBgPeriode = (
  periode: FordelBeregningsgrunnlagPeriode,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
): BeregningsgrunnlagPeriodeProp => {
  const matchetPeriode = bgPerioder.find(p => p.beregningsgrunnlagPeriodeFom === periode.fom);
  if (!matchetPeriode) {
    throw Error(`Finner ikke matchende beregningsgrunnlagperiode for fordelingsperiode med fom ${periode.fom}`);
  }
  return matchetPeriode;
};

const transformPerioder = (
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  values: FordelBeregningsgrunnlagValues,
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
  forlengelseperioder?: ForlengelsePeriodeProp[],
): FordelBeregningsgrunnlagPeriodeTransformedValues[] => {
  const fordelBeregningsgrunnlagPerioder: FordelBeregningsgrunnlagPeriodeTransformedValues[] = [];
  const kombinertePerioder = slåSammenPerioder(fordelBGPerioder, bgPerioder, forlengelseperioder);
  for (let index = 0; index < kombinertePerioder.length; index += 1) {
    const { skalRedigereInntekt } = kombinertePerioder[index];
    if (skalRedigereInntekt && erPeriodeTilVurdering(kombinertePerioder[index])) {
      lagPerioderForSubmit(values, index, kombinertePerioder[index], fordelBGPerioder).forEach(
        (p: FordelBeregningsgrunnlagPeriodeTransformedValues) => fordelBeregningsgrunnlagPerioder.push(p),
      );
    }
  }
  return fordelBeregningsgrunnlagPerioder;
};

interface Props {
  readOnly: boolean;
  perioder: FordelBeregningsgrunnlagPeriode[];
  isAksjonspunktClosed: boolean;
  bgPerioder: BeregningsgrunnlagPeriodeProp[];
  beregningsgrunnlag: Beregningsgrunnlag;
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
}

function filtrerForlengelse(beregningsgrunnlag: Beregningsgrunnlag, periode: FordelBeregningsgrunnlagPeriode) {
  return erPeriodeTilVurdering(periode, beregningsgrunnlag.forlengelseperioder);
}

function erVurdertTidligere(periode: FordelBeregningsgrunnlagPeriode, beregningsgrunnlag: Beregningsgrunnlag): boolean {
  return (
    !erPeriodeTilVurdering(periode, beregningsgrunnlag.forlengelseperioder) &&
    periode.skalRedigereInntekt === true &&
    !!periode.fordelBeregningsgrunnlagAndeler &&
    periode.fordelBeregningsgrunnlagAndeler?.every(a => a.fordeltPrAar !== null && a.fordeltPrAar !== undefined)
  );
}

/**
 * FordelBeregningsgrunnlagForm
 *
 * Container komponent. Behandling av aksjonspunktet for ny fordeling av beregningsgrunnlag.
 */

export const FordelBeregningsgrunnlagForm = ({
  readOnly,
  perioder,
  isAksjonspunktClosed,
  bgPerioder,
  beregningsgrunnlag,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
}: Props) => {
  const [openPanels, setOpenPanels] = useState<string[]>([]);
  const [fieldArrayToRepeat, setFieldArrayToRepeat] = useState('');
  useEffect(() => {
    const åpnePaneler = perioder
      .filter(periode => filtrerForlengelse(beregningsgrunnlag, periode))
      .filter(periode => periode.skalKunneEndreRefusjon || periode.skalRedigereInntekt)
      .filter(periode => !!periode.fom)
      .map(periode => periode.fom);
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

  // dersom beregningsgrunnlag.forlengelsesperioder er tom, så skal skal alle perioder kunne redigeres
  // dersom den ikke er tom, så skal kun forlengelsesperioder kunne redigeres

  return (
    <Accordion size="medium">
      {slåSammenPerioder(perioder, bgPerioder, beregningsgrunnlag.forlengelseperioder).map((periode, index) => (
        <FordelBeregningsgrunnlagPeriodePanel
          key={fordelBGFieldArrayNamePrefix + periode.fom}
          readOnly={readOnly || !erPeriodeTilVurdering(periode, beregningsgrunnlag.forlengelseperioder)}
          erVurdertTidligere={erVurdertTidligere(periode, beregningsgrunnlag)}
          fordelingsperiode={periode}
          fordelBGFieldArrayName={getFieldNameKey(index)}
          open={openPanels ? openPanels.filter(panel => panel === periode.fom).length > 0 : false}
          isAksjonspunktClosed={isAksjonspunktClosed}
          showPanel={showPanel}
          beregningsgrunnlag={beregningsgrunnlag}
          kodeverkSamling={kodeverkSamling}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          fieldIndex={fieldIndex}
          setFieldArrayToRepeat={setFieldArrayToRepeat}
          fieldArrayToRepeat={fieldArrayToRepeat}
        />
      ))}
    </Accordion>
  );
};

FordelBeregningsgrunnlagForm.transformValues = (
  values: FordelBeregningsgrunnlagValues,
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bgPerioder: BeregningsgrunnlagPeriodeProp[],
  forlengelseperioder?: ForlengelsePeriodeProp[],
): FordelBeregningsgrunnlagPerioderTransformedValues => ({
  endretBeregningsgrunnlagPerioder: transformPerioder(fordelBGPerioder, values, bgPerioder, forlengelseperioder),
});

FordelBeregningsgrunnlagForm.buildInitialValues = (
  fordelBGPerioder: FordelBeregningsgrunnlagPeriode[],
  bg: Beregningsgrunnlag,
  kodeverkSamling: KodeverkForPanel,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): FordelBeregningsgrunnlagValues => {
  const initialValues = {} as FordelBeregningsgrunnlagValues;
  if (!fordelBGPerioder) {
    return initialValues;
  }
  const harKunYtelse = !!bg.aktivitetStatus && bg.aktivitetStatus.some(status => status === AktivitetStatus.KUN_YTELSE);
  const bgPerioder = bg.beregningsgrunnlagPeriode;
  slåSammenPerioder(fordelBGPerioder, bgPerioder, bg.forlengelseperioder).forEach((periode, index) => {
    const bgPeriode = finnRiktigBgPeriode(periode, bgPerioder);
    initialValues[getFieldNameKey(index)] = FordelBeregningsgrunnlagPeriodePanel.buildInitialValues(
      periode,
      bgPeriode,
      bg.skjaeringstidspunktBeregning,
      harKunYtelse,
      kodeverkSamling,
      arbeidsgiverOpplysningerPerId,
    );
  });
  return initialValues;
};
