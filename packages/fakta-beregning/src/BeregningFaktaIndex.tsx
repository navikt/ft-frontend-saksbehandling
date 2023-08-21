import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  StandardFaktaPanelProps,
  Vilkar,
  Vilkarperiode,
} from '@navikt/ft-types';
import { createIntl, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { Tabs } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import React, { FunctionComponent, useState } from 'react';
import { RawIntlProvider } from 'react-intl';
import messages from '../i18n/nb_NO.json';
import styles from './beregningFaktaIndex.module.css';
import BeregningInfoPanel from './components/BeregningInfoPanel';
import AvklarAktiviteterFormValues from './typer/AvklarAktiviteterFormValues';
import FaktaBeregningAvklaringsbehovCode from './typer/interface/FaktaBeregningAvklaringsbehovCode';
import SubmitBeregningType from './typer/interface/SubmitBeregningTsType';
import { GetErrorsContext } from './components/fellesFaktaForATFLogSN/VurderFaktaContext';
import { formNameVurderFaktaBeregning } from './components/BeregningFormUtils';
import KodeverkForPanel from './typer/kodeverkForPanel';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag?: Beregningsgrunnlag[];
  erOverstyrer: boolean;
  skalKunneOverstyreAktiviteter?: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkar: Vilkar;
  kodeverkSamling: KodeverkForPanel;
  submittable: boolean;
  skalKunneAvbryteOverstyring?: boolean;
};

const { VURDER_FAKTA_FOR_ATFL_SN, AVKLAR_AKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const erForlengelse = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkarperiode[]) => {
  const vilkårPeriode = vilkårsperioder.find(({ periode }) => periode.fom === bg.vilkårsperiodeFom);
  return vilkårPeriode?.erForlengelse === true;
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

const harAvklaringsbehovIPanel = (avklaringsbehov: BeregningAvklaringsbehov[]): boolean => {
  const harBehovForAvklaring = !!avklaringsbehov;
  if (harBehovForAvklaring) {
    const harVurderFaktaAksjonspunkt = avklaringsbehov.some(
      ap => ap.definisjon === VURDER_FAKTA_FOR_ATFL_SN && ap.kanLoses,
    );
    const harAvklarAktiviteterAP = avklaringsbehov.some(ap => ap.definisjon === AVKLAR_AKTIVITETER && ap.kanLoses);
    return harVurderFaktaAksjonspunkt || harAvklarAktiviteterAP;
  }
  return false;
};

const skalVurderes = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkarperiode[]) => {
  const aktuellPeriode = vilkårsperioder.find(({ periode }) => periode.fom === bg.skjaeringstidspunktBeregning);
  return (
    harAvklaringsbehovIPanel(bg.avklaringsbehov) &&
    aktuellPeriode?.vurderesIBehandlingen &&
    !aktuellPeriode.erForlengelse
  );
};

type AksjonspunktDataDef = SubmitBeregningType[];

const BeregningFaktaIndex: FunctionComponent<
  OwnProps & StandardFaktaPanelProps<AksjonspunktDataDef, AvklarAktiviteterFormValues>
> = ({
  beregningsgrunnlag = [],
  kodeverkSamling,
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
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);
  const [vurderFaktaBeregningFormErrors, setVurderFaktaBeregningFormErrors] = useState(undefined);
  if (beregningsgrunnlag.length === 0 || !vilkar) {
    return <>Har ikke beregningsgrunnlag.</>;
  }

  const skalBrukeTabs = beregningsgrunnlag.length > 1;
  const aktivtBeregningsgrunnlag = beregningsgrunnlag[aktivtBeregningsgrunnlagIndeks];

  const aktiveAvklaringsBehov = aktivtBeregningsgrunnlag.avklaringsbehov;
  const vilkårsperioder = vilkar.perioder;
  const beregningsgrunnlagIndeksHarFeil = (indeks: number) =>
    !!vurderFaktaBeregningFormErrors?.[`${formNameVurderFaktaBeregning}`]?.[indeks];

  return (
    <RawIntlProvider value={intl}>
      {skalBrukeTabs && (
        <div className={styles.tabsContainer}>
          <Tabs
            value={aktivtBeregningsgrunnlagIndeks.toString()}
            onChange={(clickedIndex: string) => setAktivtBeregningsgrunnlagIndeks(Number(clickedIndex))}
          >
            <Tabs.List>
              {beregningsgrunnlag.map((currentBeregningsgrunnlag, currentBeregningsgrunnlagIndex) => (
                <Tabs.Tab
                  key={currentBeregningsgrunnlag.skjaeringstidspunktBeregning}
                  value={currentBeregningsgrunnlagIndex.toString()}
                  label={lagLabel(currentBeregningsgrunnlag, vilkårsperioder)}
                  className={skalVurderes(currentBeregningsgrunnlag, vilkårsperioder) ? 'harAksjonspunkt' : ''}
                  icon={
                    currentBeregningsgrunnlagIndex !== aktivtBeregningsgrunnlagIndeks &&
                    beregningsgrunnlagIndeksHarFeil(currentBeregningsgrunnlagIndex) && (
                      <ExclamationmarkTriangleFillIcon width={20} height={20} color="Orange" />
                    )
                  }
                />
              ))}
            </Tabs.List>
          </Tabs>
        </div>
      )}
      {/* @ts-ignore Fiks denne */}
      <GetErrorsContext.Provider value={setVurderFaktaBeregningFormErrors}>
        <BeregningInfoPanel
          aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
          beregningsgrunnlag={beregningsgrunnlag}
          kodeverkSamling={kodeverkSamling}
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
      </GetErrorsContext.Provider>
    </RawIntlProvider>
  );
};

export default BeregningFaktaIndex;
