import { ReduxWrapper } from '@navikt/ft-form-redux-legacy';
import {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag,
  StandardFaktaPanelProps,
  Vilkar,
} from '@navikt/ft-types';
import vilkarperiodeTsType from '@navikt/ft-types/src/vilkarperiodeTsType';
import { createIntl, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import { TabsPure } from 'nav-frontend-tabs';
import React, { FunctionComponent, useState } from 'react';
import { RawIntlProvider } from 'react-intl';
import messages from '../i18n/nb_NO.json';
import styles from './beregningFaktaIndex.less';
import BeregningInfoPanel from './components/BeregningInfoPanel';
import AvklarAktiviteterFormValues from './typer/AvklarAktiviteterFormValues';
import { OverstyrBeregningsaktiviteterAP } from './typer/interface/BeregningAktivitetAP';
import BeregningFaktaAP, {
  AvklarBeregningsaktiviteterAP,
  BeregningOverstyringAP,
} from './typer/interface/BeregningFaktaAP';
import FaktaBeregningAksjonspunktCode from './typer/interface/FaktaBeregningAksjonspunktCode';
import SubmitBeregningType from './typer/SubmitBeregningTsType';

const intl = createIntl(messages);

type OwnProps = {
  beregningsgrunnlag?: Beregningsgrunnlag[];
  erOverstyrer: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  vilkar: Vilkar;
  alleKodeverk: AlleKodeverk;
  submittable: boolean;
};

const { VURDER_FAKTA_FOR_ATFL_SN, AVKLAR_AKTIVITETER } = FaktaBeregningAksjonspunktCode;

const lagLabel = (bg, vilkårsperioder) => {
  const stpOpptjening = bg.vilkårperiodeFom;
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
      ap => ap.definisjon.kode === VURDER_FAKTA_FOR_ATFL_SN && ap.kanLoses !== false,
    );
    const harAvklarAktiviteterAP = avklaringsbehov.some(
      ap => ap.definisjon.kode === AVKLAR_AKTIVITETER && ap.kanLoses !== false,
    );
    return harVurderFaktaAksjonspunkt || harAvklarAktiviteterAP;
  }
  return false;
};

const skalVurderes = (bg: Beregningsgrunnlag, vilkårsperioder: vilkarperiodeTsType[]) =>
  harAvklaringsbehovIPanel(bg.avklaringsbehov) &&
  vilkårsperioder.find(({ periode }) => periode.fom === bg.skjaeringstidspunktBeregning).vurderesIBehandlingen;

type AksjonspunktDataDef =
  | AvklarBeregningsaktiviteterAP
  | OverstyrBeregningsaktiviteterAP
  | BeregningFaktaAP[]
  | BeregningOverstyringAP[]
  | SubmitBeregningType[];

const BeregningFaktaIndex: FunctionComponent<
  OwnProps & StandardFaktaPanelProps<AksjonspunktDataDef, AvklarAktiviteterFormValues>
> = ({
  beregningsgrunnlag,
  alleKodeverk,
  submitCallback,
  readOnly,
  submittable,
  erOverstyrer,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  vilkar,
}) => {
  if (beregningsgrunnlag.length === 0 || !vilkar) {
    return <>Har ikke beregningsgrunnlag.</>;
  }
  const skalBrukeTabs = beregningsgrunnlag.length > 1;
  const [aktivtBeregningsgrunnlagIndeks, setAktivtBeregningsgrunnlagIndeks] = useState(0);
  const aktivtBeregningsgrunnlag = beregningsgrunnlag[aktivtBeregningsgrunnlagIndeks];

  const aktiveAvklaringsBehov = aktivtBeregningsgrunnlag.avklaringsbehov;
  const vilkårsperioder = vilkar.perioder;

  return (
    <RawIntlProvider value={intl}>
      <ReduxWrapper formName="BeregningFaktaIndex" formData={formData} setFormData={setFormData}>
        {skalBrukeTabs && (
          <div className={styles.tabsContainer}>
            <TabsPure
              tabs={beregningsgrunnlag.map((currentBeregningsgrunnlag, currentBeregningsgrunnlagIndex) => ({
                aktiv: aktivtBeregningsgrunnlagIndeks === currentBeregningsgrunnlagIndex,
                label: lagLabel(currentBeregningsgrunnlag, vilkårsperioder),
                className: skalVurderes(currentBeregningsgrunnlag, vilkårsperioder) ? 'harAksjonspunkt' : '',
              }))}
              onChange={(e, clickedIndex) => setAktivtBeregningsgrunnlagIndeks(clickedIndex)}
            />
          </div>
        )}
        <BeregningInfoPanel
          aktivtBeregningsgrunnlagIndeks={aktivtBeregningsgrunnlagIndeks}
          beregningsgrunnlag={beregningsgrunnlag}
          alleKodeverk={alleKodeverk}
          avklaringsbehov={aktiveAvklaringsBehov}
          submitCallback={submitCallback}
          readOnly={readOnly}
          submittable={submittable}
          erOverstyrer={erOverstyrer}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          setFormData={setFormData}
          formData={formData}
          vilkar={vilkar}
        />
      </ReduxWrapper>
    </RawIntlProvider>
  );
};

export default BeregningFaktaIndex;
