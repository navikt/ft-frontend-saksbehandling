import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Undertittel } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  VilkarType,
  AktivitetStatus,
  isStatusArbeidstakerOrKombinasjon,
  isStatusDagpengerOrAAP,
  isStatusFrilanserOrKombinasjon,
  isStatusKombinasjon,
  isStatusMilitaer,
  isStatusSNOrKombinasjon,
  isStatusTilstotendeYtelse,
} from '@navikt/ft-kodeverk';
import {
  Vilkar, Beregningsgrunnlag, AlleKodeverk, ArbeidsgiverOpplysningerPerId, Aksjonspunkt,
} from '@navikt/ft-types';
import BeregningsgrunnlagResultatAP from '../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import GraderingUtenBGReadOnly from './gradering/GraderingUtenBGReadOnly';
import BeregningForm from './beregningForm/BeregningForm';
import RelevanteStatuserProp from '../types/RelevanteStatuserTsType';
import BeregningsgrunnlagValues from '../types/BeregningsgrunnlagAksjonspunktTsType';

const beregningAksjonspunkter = [
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_DEKNINGSGRAD,
];

const visningForManglendeBG = () => (
  <>
    <Undertittel>
      <FormattedMessage id="Beregningsgrunnlag.Title" />
    </Undertittel>
    <VerticalSpacer eightPx />
    <Row>
      <Column xs="6">
        <FormattedMessage id="Beregningsgrunnlag.HarIkkeBeregningsregler" />
      </Column>
    </Row>
    <Row>
      <Column xs="6">
        <FormattedMessage id="Beregningsgrunnlag.SakTilInfo" />
      </Column>
    </Row>
  </>
);

const getAksjonspunkterForBeregning = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt[] => (aksjonspunkter
  ? aksjonspunkter.filter((ap) => beregningAksjonspunkter.some((a) => a === ap.definisjon))
  : []);

const getRelevanteStatuser = (bg: Beregningsgrunnlag): RelevanteStatuserProp => (bg.aktivitetStatus ? ({
  isArbeidstaker: bg.aktivitetStatus.some((kode) => isStatusArbeidstakerOrKombinasjon(kode)),
  isFrilanser: bg.aktivitetStatus.some((kode) => isStatusFrilanserOrKombinasjon(kode)),
  isSelvstendigNaeringsdrivende: bg.aktivitetStatus.some((kode) => isStatusSNOrKombinasjon(kode)),
  harAndreTilstotendeYtelser: bg.aktivitetStatus.some((kode) => isStatusTilstotendeYtelse(kode)),
  harDagpengerEllerAAP: bg.aktivitetStatus.some((kode) => isStatusDagpengerOrAAP(kode)),
  isAAP: bg.aktivitetStatus.some((kode) => kode === AktivitetStatus.ARBEIDSAVKLARINGSPENGER),
  isDagpenger: bg.aktivitetStatus.some((kode) => kode === AktivitetStatus.DAGPENGER),
  skalViseBeregningsgrunnlag: bg.aktivitetStatus && bg.aktivitetStatus.length > 0,
  isKombinasjonsstatus: bg.aktivitetStatus.some((kode) => isStatusKombinasjon(kode)) || bg.aktivitetStatus.length > 1,
  isMilitaer: bg.aktivitetStatus.some((kode) => isStatusMilitaer(kode)),
}) : null);

const getBGVilkar = (vilkar: Vilkar[]): Vilkar => (vilkar
  ? vilkar.find((v) => v.vilkarType && v.vilkarType === VilkarType.BEREGNINGSGRUNNLAGVILKARET)
  : undefined);

const getAksjonspunktForGraderingPaaAndelUtenBG = (aksjonspunkter: Aksjonspunkt[]): Aksjonspunkt => (aksjonspunkter
  ? aksjonspunkter.find((ap) => ap.definisjon === ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG)
  : undefined);

type OwnProps = {
    submitCallback: (aksjonspunktData: BeregningsgrunnlagResultatAP[]) => Promise<void>;
    readOnly: boolean;
    readOnlySubmitButton: boolean;
    aksjonspunkter: Aksjonspunkt[];
    alleKodeverk: AlleKodeverk;
    beregningsgrunnlag: Beregningsgrunnlag;
    vilkar: Vilkar[];
    arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
    formData?: BeregningsgrunnlagValues;
    setFormData: (data: BeregningsgrunnlagValues) => void,
};

/**
 * BeregningFP
 *
 * Presentasjonskomponent. Holder på alle komponenter relatert til beregning av foreldrepenger.
 * Finner det gjeldende aksjonspunktet hvis vi har et.
 */
const BeregningFP: FunctionComponent<OwnProps> = ({
  beregningsgrunnlag,
  aksjonspunkter,
  submitCallback,
  readOnly,
  readOnlySubmitButton,
  vilkar,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  if (!beregningsgrunnlag) {
    return visningForManglendeBG();
  }
  const gjeldendeAksjonspunkter = getAksjonspunkterForBeregning(aksjonspunkter);
  const relevanteStatuser = getRelevanteStatuser(beregningsgrunnlag);
  const vilkaarBG = getBGVilkar(vilkar);
  const aksjonspunktGraderingPaaAndelUtenBG = getAksjonspunktForGraderingPaaAndelUtenBG(aksjonspunkter);
  return (
    <>
      <BeregningForm
        readOnly={readOnly}
        beregningsgrunnlag={beregningsgrunnlag}
        gjeldendeAksjonspunkter={gjeldendeAksjonspunkter}
        relevanteStatuser={relevanteStatuser}
        submitCallback={submitCallback}
        readOnlySubmitButton={readOnlySubmitButton}
        alleKodeverk={alleKodeverk}
        vilkaarBG={vilkaarBG}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        setFormData={setFormData}
        formData={formData}
      />

      {aksjonspunktGraderingPaaAndelUtenBG
          && (
          <GraderingUtenBGReadOnly
            aksjonspunkt={aksjonspunktGraderingPaaAndelUtenBG}
          />
          )}
    </>
  );
};

export default BeregningFP;
