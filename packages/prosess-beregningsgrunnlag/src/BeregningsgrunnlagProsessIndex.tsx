import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  StandardProsessPanelProps,
  Vilkar,
} from '@navikt/ft-types';

import { SideMenu } from '@navikt/ft-plattform-komponenter';

import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import styles from './beregningsgrunnlagProsessIndex.less';
import messages from '../i18n/nb_NO.json';
import BeregningFP from './components/BeregningFP';
import { BeregningAksjonspunktSubmitType } from './types/interface/BeregningsgrunnlagAP';
import BeregningFormValues from './types/BeregningFormValues';
import ProsessBeregningsgrunnlagAksjonspunktCode from './types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';
import advarsel from './images/advarsel.svg';

const beregningAksjonspunkter = [
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
];

const cx = classNames.bind(styles);

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  beregningsgrunnlagsvilkar: Vilkar;
  readOnlySubmitButton: boolean;
  alleKodeverk: AlleKodeverk;
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
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const skalBrukeSidemeny = beregningsgrunnlagListe.length > 1;
  const kronologiskeGrunnlag = beregningsgrunnlagListe.sort((a: Beregningsgrunnlag, b: Beregningsgrunnlag) =>
    a.skjaeringstidspunktBeregning.localeCompare(b.skjaeringstidspunktBeregning),
  );
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);

  const menyProps = lagMenyProps(kronologiskeGrunnlag, beregningsgrunnlagsvilkar);
  const mainContainerClassnames = cx('mainContainer', { 'mainContainer--withSideMenu': skalBrukeSidemeny });

  const [data, setData] = useState<BeregningFormValues>({});
  const changeFormState = useCallback(
    (d: BeregningFormValues) => {
      const newObj = {
        ...d,
        ...data,
      };
      setData(newObj);
    },
    [data],
  );
  useEffect(
    () => () => {
      setFormData(data);
    },
    [],
  );

  useEffect(() => {
    const førsteSkjæringstidspunktMedAksjonspunktIndex = menyProps.findIndex(
      menyProp => menyProp.skalVurderes && menyProp.harAvklaringsbehov,
    );
    if (førsteSkjæringstidspunktMedAksjonspunktIndex > -1) {
      setAktivtBeregningsgrunnlagIndeks(førsteSkjæringstidspunktMedAksjonspunktIndex);
    }
  }, []);

  return (
    <RawIntlProvider value={intl}>
      <div className={mainContainerClassnames}>
        {skalBrukeSidemeny && (
          <div className={styles.sideMenuContainer}>
            <SideMenu
              links={menyProps.map((menyProp, index) => ({
                iconSrc: menyProp.skalVurderes && menyProp.harAvklaringsbehov ? advarsel : null,
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
            beregningsgrunnlagListe={beregningsgrunnlagListe}
            submitCallback={submitCallback}
            readOnly={isReadOnly}
            readOnlySubmitButton={readOnlySubmitButton}
            vilkar={beregningsgrunnlagsvilkar}
            alleKodeverk={alleKodeverk}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            changeFormState={changeFormState}
            formData={formData}
          />
        </div>
      </div>
    </RawIntlProvider>
  );
};

export default BeregningsgrunnlagProsessIndex;
