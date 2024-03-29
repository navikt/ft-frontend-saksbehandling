import React, { FunctionComponent, useEffect, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
import { createIntl, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { ArbeidsgiverOpplysningerPerId, Beregningsgrunnlag, StandardProsessPanelProps, Vilkar } from '@navikt/ft-types';

import { SideMenu } from '@navikt/ft-plattform-komponenter';

import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { Heading } from '@navikt/ds-react';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import styles from './beregningsgrunnlagProsessIndex.module.css';
import messages from '../i18n/nb_NO.json';
import BeregningFP from './components/BeregningFP';
import { BeregningAksjonspunktSubmitType } from './types/interface/BeregningsgrunnlagAP';
import BeregningFormValues from './types/BeregningFormValues';
import ProsessBeregningsgrunnlagAvklaringsbehovCode from './types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import KodeverkForPanel from './types/kodeverkForPanel';

const beregningAksjonspunkter = [
  ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
];

const TOM_ARRAY: Beregningsgrunnlag[] = [];

const cx = classNames.bind(styles);

const intl = createIntl(messages);

const visningForManglendeBG = (beregningsgrunnlagsvilkar: Vilkar) => {
  const ikkeTilstrekkeligInntektsgrunnlag = beregningsgrunnlagsvilkar?.perioder?.some(
    periode => periode.avslagKode === '1043',
  );

  return (
    <>
      <Heading size="medium">
        <FormattedMessage id="Beregningsgrunnlag.Title" />
      </Heading>
      <VerticalSpacer eightPx />
      <FlexRow>
        <FlexColumn>
          <FormattedMessage
            id={
              ikkeTilstrekkeligInntektsgrunnlag
                ? 'Beregningsgrunnlag.Avslagsårsak.IkkeTilstrekkeligInntektsgrunnlag'
                : 'Beregningsgrunnlag.HarIkkeBeregningsregler'
            }
          />
        </FlexColumn>
      </FlexRow>
    </>
  );
};

type OwnProps = {
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkar: Vilkar;
  readOnlySubmitButton: boolean;
  kodeverkSamling: KodeverkForPanel;
};

type MenyProp = {
  skalVurderes: boolean;
  harAvklaringsbehov: boolean;
  stp: string;
};

const erBGTilVurdering = (bgVilkar: Vilkar, beregningsgrunnlag: Beregningsgrunnlag) => {
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

const lagMenyProps = (kronologiskeGrunnlag: Beregningsgrunnlag[], bgVilkår: Vilkar): MenyProp[] =>
  kronologiskeGrunnlag.map(gr => ({
    skalVurderes: erBGTilVurdering(bgVilkår, gr),
    harAvklaringsbehov: harAvklaringsbehovSomkanLøses(gr),
    stp: dayjs(gr.skjaeringstidspunktBeregning).format(DDMMYYYY_DATE_FORMAT),
  }));

const BeregningsgrunnlagProsessIndex: FunctionComponent<
  OwnProps & StandardProsessPanelProps<BeregningAksjonspunktSubmitType[], BeregningFormValues>
> = ({
  beregningsgrunnlagListe,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  beregningsgrunnlagsvilkar,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const listeMedGrunnlag = beregningsgrunnlagListe || TOM_ARRAY;

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
      setAktivtBeregningsgrunnlagIndeks(førsteSkjæringstidspunktMedAksjonspunktIndex);
    }
  }, [beregningsgrunnlagListe]);

  if (
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
              theme="arrow"
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

export default BeregningsgrunnlagProsessIndex;
