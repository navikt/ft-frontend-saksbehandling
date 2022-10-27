import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';
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
import { Heading } from '@navikt/ds-react';
import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
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
];

const cx = classNames.bind(styles);

const intl = createIntl(messages);

const visningForManglendeBG = () => (
  <>
    <Heading size="medium">
      <FormattedMessage id="Beregningsgrunnlag.Title" />
    </Heading>
    <VerticalSpacer eightPx />
    <FlexRow>
      <FlexColumn>
        <FormattedMessage id="Beregningsgrunnlag.HarIkkeBeregningsregler" />
      </FlexColumn>
    </FlexRow>
    <FlexRow>
      <FlexColumn>
        <FormattedMessage id="Beregningsgrunnlag.SakTilInfo" />
      </FlexColumn>
    </FlexRow>
  </>
);

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
  if (
    beregningsgrunnlagListe.length === 0 ||
    (beregningsgrunnlagListe.length === 1 && !beregningsgrunnlagListe[0].aktivitetStatus)
  ) {
    return visningForManglendeBG();
  }

  const skalBrukeSidemeny = beregningsgrunnlagListe.length > 1;
  const kronologiskeGrunnlag = beregningsgrunnlagListe.sort((a: Beregningsgrunnlag, b: Beregningsgrunnlag) =>
    a.skjaeringstidspunktBeregning.localeCompare(b.skjaeringstidspunktBeregning),
  );
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);

  const menyProps = lagMenyProps(kronologiskeGrunnlag, beregningsgrunnlagsvilkar);
  const mainContainerClassnames = cx('mainContainer', { 'mainContainer--withSideMenu': skalBrukeSidemeny });

  return (
    <RawIntlProvider value={intl}>
      <div className={mainContainerClassnames}>
        {skalBrukeSidemeny && (
          <div className={styles.sideMenuContainer}>
            <SideMenu
              links={menyProps.map((menyProp, index) => ({
                iconSrc: menyProp.skalVurderes && menyProp.harAvklaringsbehov ? advarsel : null,
                active: aktivtBeregningsgrunnlagIndeks === index,
                label: `${intl.formatMessage({ id: 'Sidemeny.Beregningsgrunnlag' })} ${menyProp.stp}`,
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
            setFormData={setFormData}
            formData={formData}
          />
        </div>
      </div>
    </RawIntlProvider>
  );
};

export default BeregningsgrunnlagProsessIndex;
