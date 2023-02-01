import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  StandardFaktaPanelProps,
  Vilkar,
  Vilkarperiode,
} from '@navikt/ft-types';
import { createIntl, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { Tabs } from '@navikt/ds-react';
import React, { FunctionComponent, useState } from 'react';
import { RawIntlProvider } from 'react-intl';
import messages from '../i18n/nb_NO.json';
import styles from './beregningFaktaIndex.less';
import BeregningInfoPanel from './components/BeregningInfoPanel';
import AvklarAktiviteterFormValues from './typer/AvklarAktiviteterFormValues';
import FaktaBeregningAvklaringsbehovCode from './typer/interface/FaktaBeregningAvklaringsbehovCode';
import SubmitBeregningType from './typer/interface/SubmitBeregningTsType';
import mapAvklaringsbehovKode from './typer/interface/AvklaringsbehovMapping';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag?: Beregningsgrunnlag[];
  erOverstyrer: boolean;
  skalKunneOverstyreAktiviteter?: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkar: Vilkar;
  alleKodeverk: AlleKodeverk;
  submittable: boolean;
  skalKunneAvbryteOverstyring?: boolean;
};

const { VURDER_FAKTA_FOR_ATFL_SN, AVKLAR_AKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const erForlengelse = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkarperiode[]) => {
  const vilkårPeriode = vilkårsperioder.find(({ periode }) => periode.fom === bg.vilkårsperiodeFom);
  return vilkårPeriode.erForlengelse === true;
};

const lagLabel = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkarperiode[]) => {
  const stpOpptjening = bg.vilkårsperiodeFom;
  const vilkårPeriode = vilkårsperioder.find(({ periode }) => periode.fom === stpOpptjening);
  if (vilkårPeriode) {
    const { fom, tom } = vilkårPeriode.periode;
    if (tom !== null) {
      return `${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(tom).format(DDMMYYYY_DATE_FORMAT)}`;
    }
    return `${dayjs(fom).format(DDMMYYYY_DATE_FORMAT)} - `;
  }
  return `${dayjs(stpOpptjening).format(DDMMYYYY_DATE_FORMAT)}`;
};

const harAvklaringsbehovIPanel = avklaringsbehov => {
  const harBehovForAvklaring = !!avklaringsbehov;
  if (harBehovForAvklaring) {
    const harVurderFaktaAksjonspunkt = avklaringsbehov.some(
      ap => ap.definisjon === VURDER_FAKTA_FOR_ATFL_SN && ap.kanLoses !== false,
    );
    const harAvklarAktiviteterAP = avklaringsbehov.some(
      ap => ap.definisjon === AVKLAR_AKTIVITETER && ap.kanLoses !== false,
    );
    return harVurderFaktaAksjonspunkt || harAvklarAktiviteterAP;
  }
  return false;
};

const skalVurderes = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkarperiode[]) => {
  const aktuellPeriode = vilkårsperioder.find(({ periode }) => periode.fom === bg.skjaeringstidspunktBeregning);
  return (
    harAvklaringsbehovIPanel(bg.avklaringsbehov) &&
    aktuellPeriode.vurderesIBehandlingen &&
    !aktuellPeriode.erForlengelse
  );
};

type AksjonspunktDataDef = SubmitBeregningType[];

function konverterTilNyeAvklaringsbehovKoder(beregningsgrunnlag: Beregningsgrunnlag[]): Beregningsgrunnlag[] {
  const res = [...beregningsgrunnlag];
  for (let i = 0; i < res.length; i += 1) {
    const bg = res[i];
    for (let j = 0; j < bg.avklaringsbehov.length; j += 1) {
      const a = bg.avklaringsbehov[j];
      // @ts-ignore
      a.definisjon = mapAvklaringsbehovKode(a.definisjon);
    }
  }
  return res;
}

const BeregningFaktaIndex: FunctionComponent<
  OwnProps & StandardFaktaPanelProps<AksjonspunktDataDef, AvklarAktiviteterFormValues>
> = ({
  beregningsgrunnlag,
  alleKodeverk,
  submitCallback,
  readOnly,
  submittable,
  erOverstyrer,
  skalKunneOverstyreAktiviteter = true,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  vilkar,
  skalKunneAvbryteOverstyring = false,
}) => {
  if (beregningsgrunnlag.length === 0 || !vilkar) {
    return <>Har ikke beregningsgrunnlag.</>;
  }

  const konverterteBg = konverterTilNyeAvklaringsbehovKoder(beregningsgrunnlag);

  const skalBrukeTabs = beregningsgrunnlag.length > 1;
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);
  const aktivtBeregningsgrunnlag = konverterteBg[aktivtBeregningsgrunnlagIndeks];

  const aktiveAvklaringsBehov = aktivtBeregningsgrunnlag.avklaringsbehov;
  const vilkårsperioder = vilkar.perioder;

  return (
    <RawIntlProvider value={intl}>
      {skalBrukeTabs && (
        <div className={styles.tabsContainer}>
          <Tabs
            value={aktivtBeregningsgrunnlagIndeks.toString()}
            onChange={(clickedIndex: string) => setAktivtBeregningsgrunnlagIndeks(Number(clickedIndex))}
          >
            <Tabs.List>
              {konverterteBg.map((currentBeregningsgrunnlag, currentBeregningsgrunnlagIndex) => (
                <Tabs.Tab
                  key={currentBeregningsgrunnlag.skjaeringstidspunktBeregning}
                  value={currentBeregningsgrunnlagIndex.toString()}
                  label={lagLabel(currentBeregningsgrunnlag, vilkårsperioder)}
                  className={skalVurderes(currentBeregningsgrunnlag, vilkårsperioder) ? 'harAksjonspunkt' : ''}
                />
              ))}
            </Tabs.List>
          </Tabs>
        </div>
      )}
      <BeregningInfoPanel
        aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
        beregningsgrunnlag={konverterteBg}
        alleKodeverk={alleKodeverk}
        avklaringsbehov={aktiveAvklaringsBehov}
        submitCallback={submitCallback}
        readOnly={readOnly || erForlengelse(beregningsgrunnlag[aktivtBeregningsgrunnlagIndeks], vilkårsperioder)}
        submittable={submittable}
        erOverstyrer={erOverstyrer}
        skalKunneOverstyreAktiviteter={skalKunneOverstyreAktiviteter}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        setFormData={setFormData}
        formData={formData}
        vilkar={vilkar}
        skalKunneAvbryteOverstyring={skalKunneAvbryteOverstyring}
      />
    </RawIntlProvider>
  );
};

export default BeregningFaktaIndex;
