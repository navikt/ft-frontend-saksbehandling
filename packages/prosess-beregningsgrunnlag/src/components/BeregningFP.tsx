import React, { FunctionComponent } from 'react';

import {
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
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  Vilkar,
  Vilkarperiode,
} from '@navikt/ft-types';
import { BeregningAksjonspunktSubmitType } from '../types/interface/BeregningsgrunnlagAP';
import ProsessBeregningsgrunnlagAksjonspunktCode from '../types/interface/ProsessBeregningsgrunnlagAksjonspunktCode';

import GraderingUtenBGReadOnly from './gradering/GraderingUtenBGReadOnly';
import BeregningForm from './beregningForm/BeregningForm';
import RelevanteStatuserProp from '../types/RelevanteStatuserTsType';

import BeregningFormValues from '../types/BeregningFormValues';

const beregningAksjonspunkter = [
  ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  ProsessBeregningsgrunnlagAksjonspunktCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
];

const finnAvklaringsbehov = (beregningsgrunnlag: Beregningsgrunnlag) =>
  beregningsgrunnlag.avklaringsbehov.filter(ab => beregningAksjonspunkter.some(bap => bap === ab.definisjon));

const getRelevanteStatuser = (statuser: string[]): RelevanteStatuserProp => ({
  isArbeidstaker: statuser.some(kode => isStatusArbeidstakerOrKombinasjon(kode)),
  isFrilanser: statuser.some(kode => isStatusFrilanserOrKombinasjon(kode)),
  isSelvstendigNaeringsdrivende: statuser.some(kode => isStatusSNOrKombinasjon(kode)),
  harAndreTilstotendeYtelser: statuser.some(kode => isStatusTilstotendeYtelse(kode)),
  harDagpengerEllerAAP: statuser.some(kode => isStatusDagpengerOrAAP(kode)),
  isAAP: statuser.some(kode => kode === AktivitetStatus.ARBEIDSAVKLARINGSPENGER),
  isDagpenger: statuser.some(
    kode => kode === AktivitetStatus.DAGPENGER || kode === AktivitetStatus.SYKEPENGER_AV_DAGPENGER,
  ),
  skalViseBeregningsgrunnlag: statuser.length > 0,
  isKombinasjonsstatus: statuser.some(kode => isStatusKombinasjon(kode)) || statuser.length > 1,
  isMilitaer: statuser.some(kode => isStatusMilitaer(kode)),
});

const getAvklaringsbehovForGraderingPaaAndelUtenBG = (
  avklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined =>
  avklaringsbehov
    ? avklaringsbehov.find(
        ap => ap.definisjon === ProsessBeregningsgrunnlagAksjonspunktCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
      )
    : undefined;

type OwnProps = {
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: AlleKodeverk;
  aktivtBeregningsgrunnlagIndeks: number;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkar: Vilkar;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
};

const finnVilkårperiode = (vilkår: Vilkar, vilkårsperiodeFom: string): Vilkarperiode =>
  // @ts-ignore
  vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);

/**
 * BeregningFP
 *
 * Presentasjonskomponent. Holder på alle komponenter relatert til beregning av foreldrepenger.
 * Finner det gjeldende aksjonspunktet hvis vi har et.
 */
const BeregningFP: FunctionComponent<OwnProps> = ({
  aktivtBeregningsgrunnlagIndeks,
  beregningsgrunnlagListe,
  submitCallback,
  readOnly,
  readOnlySubmitButton,
  vilkar,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
}) => {
  const aktivtBeregningsgrunnlag = beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks];
  // @ts-ignore
  const relevanteStatuser = getRelevanteStatuser(aktivtBeregningsgrunnlag.aktivitetStatus);
  const aksjonspunktGraderingPaaAndelUtenBG = getAvklaringsbehovForGraderingPaaAndelUtenBG(
    aktivtBeregningsgrunnlag.avklaringsbehov,
  );

  function skalVurderes(beregningsgrunnlag: Beregningsgrunnlag) {
    const periode = finnVilkårperiode(vilkar, beregningsgrunnlag.vilkårsperiodeFom);
    return periode.vurderesIBehandlingen && !periode.erForlengelse;
  }

  return (
    <>
      <BeregningForm
        readOnly={readOnly || !skalVurderes(beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks])}
        valgtBeregningsgrunnlag={beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks]}
        gjeldendeAvklaringsbehov={finnAvklaringsbehov(beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks])}
        relevanteStatuser={relevanteStatuser}
        readOnlySubmitButton={readOnlySubmitButton}
        alleKodeverk={alleKodeverk}
        vilkarPeriode={finnVilkårperiode(
          vilkar,
          beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks].vilkårsperiodeFom,
        )}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        alleBeregningsgrunnlag={beregningsgrunnlagListe}
        vilkår={vilkar}
        submitCallback={submitCallback}
        formData={formData}
        setFormData={setFormData}
        aktivIndex={aktivtBeregningsgrunnlagIndeks}
      />

      {aksjonspunktGraderingPaaAndelUtenBG && (
        <GraderingUtenBGReadOnly avklaringsbehov={aksjonspunktGraderingPaaAndelUtenBG} />
      )}
    </>
  );
};

export default BeregningFP;
