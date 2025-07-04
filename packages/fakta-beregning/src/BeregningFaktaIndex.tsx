import { useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Heading, Tabs, VStack } from '@navikt/ds-react';

import type {
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  StandardFaktaPanelProps,
} from '@navikt/ft-types';
import { createIntl, dateFormat, periodFormat } from '@navikt/ft-utils';

import { AksjonspunktTekster } from './AksjonspunktTekster';
import { BeregningInfoPanel } from './components/BeregningInfoPanel';
import type { AvklarAktiviteterFormValues } from './typer/AvklarAktiviteterFormValues';
import { FaktaBeregningAvklaringsbehovCode } from './typer/interface/FaktaBeregningAvklaringsbehovCode';
import type { SubmitBeregningType } from './typer/interface/SubmitBeregningTsType';
import type { KodeverkForPanel } from './typer/KodeverkForPanel';
import type { Vilkår, Vilkårperiode } from './typer/Vilkår';
import type { VurderFaktaBeregningFormValues } from './typer/VurderFaktaBeregningFormValues';
import { hasAksjonspunkt, isAksjonspunktClosed } from './utils/aksjonspunktUtils';

import styles from './beregningFaktaIndex.module.css';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  beregningsgrunnlag?: Beregningsgrunnlag[];
  erOverstyrer: boolean;
  skalKunneOverstyreAktiviteter?: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkar: Vilkår | null;
  kodeverkSamling: KodeverkForPanel;
  submittable: boolean;
  skalKunneAvbryteOverstyring?: boolean;
}

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
    return periodFormat(fom, tom);
  }
  return dateFormat(stpOpptjening);
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

const initAktivtBeregningsgrunnlagIndeks = (beregningsgrunnlag: Beregningsgrunnlag[], vilkår: Vilkår | null) => {
  if (vilkår?.perioder) {
    const periodeMedAksjonspunktIndex = beregningsgrunnlag.findIndex(bg => skalVurderes(bg, vilkår.perioder));
    if (periodeMedAksjonspunktIndex > -1) {
      return periodeMedAksjonspunktIndex;
    }
  }
  return 0;
};

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
}: Props &
  StandardFaktaPanelProps<SubmitBeregningType[], AvklarAktiviteterFormValues | VurderFaktaBeregningFormValues>) => {
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(
    initAktivtBeregningsgrunnlagIndeks(beregningsgrunnlag, vilkar),
  );

  if (beregningsgrunnlag.length === 0 || !vilkar) {
    return (
      <RawIntlProvider value={intl}>
        <BodyShort>
          <FormattedMessage id="BeregningFaktaIndex.IngenBeregningsgrunnlag" />
        </BodyShort>
      </RawIntlProvider>
    );
  }

  const vilkårsperioder = vilkar.perioder;

  const skalBrukeTabs = beregningsgrunnlag.length > 1;
  const aktivtBeregningsgrunnlag = beregningsgrunnlag[aktivtBeregningsgrunnlagIndeks];

  const aktiveAvklaringsBehov = aktivtBeregningsgrunnlag.avklaringsbehov;

  return (
    <RawIntlProvider value={intl}>
      <div className={styles.main}>
        <VStack gap="6" className={styles.container}>
          <Heading size="small" level="2">
            <FormattedMessage id="BeregningFaktaIndex.SaksopplysningerBeregning" />
          </Heading>
          {(hasAksjonspunkt(VURDER_FAKTA_FOR_ATFL_SN, aktiveAvklaringsBehov) ||
            hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, aktiveAvklaringsBehov)) &&
            !isAksjonspunktClosed(aktiveAvklaringsBehov) && (
              <AksjonspunktTekster
                beregningsgrunnlag={aktivtBeregningsgrunnlag}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
              />
            )}
          {skalBrukeTabs && (
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
                    icon={
                      skalVurderes(currentBeregningsgrunnlag, vilkårsperioder) && (
                        <ExclamationmarkTriangleFillIcon aria-hidden color="Orange" />
                      )
                    }
                  />
                ))}
              </Tabs.List>
            </Tabs>
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
