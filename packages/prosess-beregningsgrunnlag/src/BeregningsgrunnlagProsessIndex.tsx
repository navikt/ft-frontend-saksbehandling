import { useEffect, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Heading, VStack } from '@navikt/ds-react';
import classNames from 'classnames/bind';

import { SideMenu } from '@navikt/ft-plattform-komponenter';
import type { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, StandardProsessPanelProps } from '@navikt/ft-types';
import { createIntl, dateFormat } from '@navikt/ft-utils';

import { BeregningFP } from './components/BeregningFP';
import type { BeregningFormValues } from './types/BeregningFormValues';
import type { BeregningAksjonspunktSubmitType } from './types/interface/BeregningsgrunnlagAP';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from './types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import type { KodeverkForPanel } from './types/KodeverkForPanel';
import type { Vilkår } from './types/Vilkår';

import styles from './beregningsgrunnlagProsessIndex.module.css';

import messages from '../i18n/nb_NO.json';

const beregningAksjonspunkter = [
  ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
];

const cx = classNames.bind(styles);

const intl = createIntl(messages);

const visningForManglendeBG = (beregningsgrunnlagsvilkar: Vilkår | null) => {
  const ikkeTilstrekkeligInntektsgrunnlag = beregningsgrunnlagsvilkar?.perioder?.some(
    periode => periode.avslagKode === '1043',
  );

  return (
    <VStack gap="space-8">
      <Heading size="medium" level="2">
        <FormattedMessage id="BeregningsgrunnlagProsessIndex.Title" />
      </Heading>
      <BodyShort size="small">
        <FormattedMessage
          id={
            ikkeTilstrekkeligInntektsgrunnlag
              ? 'BeregningsgrunnlagProsessIndex.IkkeTilstrekkeligInntektsgrunnlag'
              : 'BeregningsgrunnlagProsessIndex.HarIkkeBeregningsregler'
          }
        />
      </BodyShort>
    </VStack>
  );
};

type Props = {
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkar: Vilkår | null;
  readOnlySubmitButton: boolean;
  kodeverkSamling: KodeverkForPanel;
};

type MenyProp = {
  skalVurderes: boolean;
  harAvklaringsbehov: boolean;
  stp: string;
};

const erBGTilVurdering = (bgVilkar: Vilkår | null, beregningsgrunnlag: Beregningsgrunnlag) => {
  const vilårsperiodeFom = beregningsgrunnlag.vilkårsperiodeFom;
  const perioderTilVurdering =
    bgVilkar && bgVilkar.perioder
      ? bgVilkar.perioder.filter(periode => periode.vurderesIBehandlingen && !periode.erForlengelse)
      : [];
  return perioderTilVurdering.some(vkp => vkp.periode.fom === vilårsperiodeFom);
};

const harAvklaringsbehovSomkanLøses = (beregningsgrunnlag: Beregningsgrunnlag) =>
  beregningsgrunnlag.avklaringsbehov.some(
    ab => beregningAksjonspunkter.some(bap => bap === ab.definisjon) && ab.kanLoses,
  );

const lagMenyProps = (kronologiskeGrunnlag: Beregningsgrunnlag[], bgVilkår: Vilkår | null): MenyProp[] =>
  kronologiskeGrunnlag.map(gr => ({
    skalVurderes: erBGTilVurdering(bgVilkår, gr),
    harAvklaringsbehov: harAvklaringsbehovSomkanLøses(gr),
    stp: dateFormat(gr.skjaeringstidspunktBeregning),
  }));

export const BeregningsgrunnlagProsessIndex = ({
  beregningsgrunnlagListe,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  beregningsgrunnlagsvilkar,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}: Props & StandardProsessPanelProps<BeregningAksjonspunktSubmitType[], BeregningFormValues>) => {
  const listeMedGrunnlag = beregningsgrunnlagListe || [];

  const skalBrukeSidemeny = listeMedGrunnlag.length > 1;
  listeMedGrunnlag
    .sort((a: Beregningsgrunnlag, b: Beregningsgrunnlag) =>
      a.skjaeringstidspunktBeregning.localeCompare(b.skjaeringstidspunktBeregning),
    )
    .reverse();
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);

  const menyProps = lagMenyProps(listeMedGrunnlag, beregningsgrunnlagsvilkar);
  const mainContainerClassnames = cx('mainContainer', { 'mainContainer--withSideMenu': skalBrukeSidemeny });

  useEffect(() => {
    const førsteSkjæringstidspunktMedAksjonspunktIndex = menyProps.findIndex(
      menyProp => menyProp.skalVurderes && menyProp.harAvklaringsbehov,
    );
    if (førsteSkjæringstidspunktMedAksjonspunktIndex > -1) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAktivtBeregningsgrunnlagIndeks(førsteSkjæringstidspunktMedAksjonspunktIndex);
    }
  }, [beregningsgrunnlagListe]);

  if (
    !beregningsgrunnlagsvilkar ||
    beregningsgrunnlagListe.length === 0 ||
    (beregningsgrunnlagListe.length === 1 && !beregningsgrunnlagListe[0].aktivitetStatus)
  ) {
    return <RawIntlProvider value={intl}>{visningForManglendeBG(beregningsgrunnlagsvilkar)}</RawIntlProvider>;
  }

  return (
    <RawIntlProvider value={intl}>
      <div className={mainContainerClassnames}>
        {skalBrukeSidemeny && (
          <div className={styles.sideMenuContainer}>
            <SideMenu
              links={menyProps.map((menyProp, index) => ({
                icon:
                  menyProp.skalVurderes && menyProp.harAvklaringsbehov ? (
                    <ExclamationmarkTriangleFillIcon className={styles.advarselIkon} />
                  ) : null,
                active: aktivtBeregningsgrunnlagIndeks === index,
                label: `${menyProp.stp}`,
              }))}
              onClick={setAktivtBeregningsgrunnlagIndeks}
            />
          </div>
        )}
        <div className={styles.contentContainer}>
          <BeregningFP
            aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
            beregningsgrunnlagListe={listeMedGrunnlag}
            submitCallback={submitCallback}
            readOnly={isReadOnly}
            readOnlySubmitButton={readOnlySubmitButton}
            vilkar={beregningsgrunnlagsvilkar}
            kodeverkSamling={kodeverkSamling}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            setFormData={setFormData}
            formData={formData}
          />
        </div>
      </div>
    </RawIntlProvider>
  );
};
