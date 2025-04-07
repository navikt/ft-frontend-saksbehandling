import { useEffect, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Heading, Tabs, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  StandardFaktaPanelProps,
} from '@navikt/ft-types';
import { createIntl, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import { BeregningInfoPanel } from './components/BeregningInfoPanel';
import { hasAksjonspunkt, isAksjonspunktClosed } from './components/fellesFaktaForATFLogSN/BgFaktaUtils';
import { lagHelpTextsForFakta } from './lagHelpTextsForFakta';
import { AvklarAktiviteterFormValues } from './typer/AvklarAktiviteterFormValues';
import { FaktaBeregningAvklaringsbehovCode } from './typer/interface/FaktaBeregningAvklaringsbehovCode';
import { SubmitBeregningType } from './typer/interface/SubmitBeregningTsType';
import { KodeverkForPanel } from './typer/KodeverkForPanelForFb';
import { Vilkår, Vilkårperiode } from './typer/Vilkår';
import { VurderFaktaBeregningFormValues } from './typer/VurderFaktaBeregningFormValues';

import styles from './beregningFaktaIndex.module.css';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag?: Beregningsgrunnlag[];
  erOverstyrer: boolean;
  skalKunneOverstyreAktiviteter?: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkar: Vilkår;
  kodeverkSamling: KodeverkForPanel;
  submittable: boolean;
  skalKunneAvbryteOverstyring?: boolean;
};

const { VURDER_FAKTA_FOR_ATFL_SN, AVKLAR_AKTIVITETER, OVERSTYRING_AV_BEREGNINGSGRUNNLAG } =
  FaktaBeregningAvklaringsbehovCode;

const erForlengelse = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[]) => {
  const vilkårPeriode = vilkårsperioder.find(({ periode }) => periode.fom === bg.vilkårsperiodeFom);
  return vilkårPeriode?.erForlengelse === true;
};

const lagLabel = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[]) => {
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

const skalVurderes = (bg: Beregningsgrunnlag, vilkårsperioder: Vilkårperiode[]) => {
  const aktuellPeriode = vilkårsperioder.find(({ periode }) => periode.fom === bg.skjaeringstidspunktBeregning);
  return (
    harAvklaringsbehovIPanel(bg.avklaringsbehov) &&
    aktuellPeriode?.vurderesIBehandlingen &&
    !aktuellPeriode.erForlengelse
  );
};

type AksjonspunktDataDef = SubmitBeregningType[];

export const BeregningFaktaIndex = ({
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
}: OwnProps &
  StandardFaktaPanelProps<AksjonspunktDataDef, AvklarAktiviteterFormValues | VurderFaktaBeregningFormValues>) => {
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);
  const vilkårsperioder = vilkar?.perioder;
  useEffect(() => {
    if (vilkårsperioder) {
      const periodeMedAksjonspunktIndex = beregningsgrunnlag?.findIndex(bg => skalVurderes(bg, vilkårsperioder));
      if (periodeMedAksjonspunktIndex > -1) {
        setAktivtBeregningsgrunnlagIndeks(periodeMedAksjonspunktIndex);
      }
    }
  }, []);

  if (beregningsgrunnlag.length === 0 || !vilkar) {
    return <>Har ikke beregningsgrunnlag.</>;
  }

  const skalBrukeTabs = beregningsgrunnlag.length > 1;
  const aktivtBeregningsgrunnlag = beregningsgrunnlag[aktivtBeregningsgrunnlagIndeks];

  const aktiveAvklaringsBehov = aktivtBeregningsgrunnlag.avklaringsbehov;

  return (
    <RawIntlProvider value={intl}>
      <div className={styles.main}>
        <VStack gap="4">
          <Heading size="small" level="2">
            <FormattedMessage id="BeregningInfoPanel.AksjonspunktHelpText.SaksopplysningerBeregning" />
          </Heading>
          {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aktiveAvklaringsBehov) ||
            hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, aktiveAvklaringsBehov)) &&
            !isAksjonspunktClosed(aktiveAvklaringsBehov) && (
              <>{lagHelpTextsForFakta(aktivtBeregningsgrunnlag, arbeidsgiverOpplysningerPerId)}</>
            )}
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
                        skalVurderes(currentBeregningsgrunnlag, vilkårsperioder) && (
                          <ExclamationmarkTriangleFillIcon width={20} height={20} color="Orange" />
                        )
                      }
                    />
                  ))}
                </Tabs.List>
              </Tabs>
            </div>
          )}
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
        </VStack>
      </div>
    </RawIntlProvider>
  );
};
