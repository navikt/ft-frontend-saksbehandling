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
import { ArbeidsgiverOpplysningerPerId, BeregningAvklaringsbehov, Beregningsgrunnlag } from '@navikt/ft-types';

import { BeregningFormValues } from '../types/BeregningFormValues';
import { BeregningAksjonspunktSubmitType } from '../types/interface/BeregningsgrunnlagAP';
import { ProsessBeregningsgrunnlagAvklaringsbehovCode } from '../types/interface/ProsessBeregningsgrunnlagAvklaringsbehovCode';
import { KodeverkForPanel } from '../types/KodeverkForPanelForBg';
import { RelevanteStatuserProp } from '../types/RelevanteStatuser';
import { Vilkår, Vilkårperiode } from '../types/Vilkår';
import { BeregningForm } from './beregningForm/BeregningForm';
import { GraderingUtenBGReadOnly } from './gradering/GraderingUtenBGReadOnly';

const beregningAksjonspunkter = [
  ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_VARIG_ENDRET_ARBEIDSSITUASJON,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  ProsessBeregningsgrunnlagAvklaringsbehovCode.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
];

const finnAvklaringsbehov = (beregningsgrunnlag: Beregningsgrunnlag) =>
  beregningsgrunnlag.avklaringsbehov.filter(ab => beregningAksjonspunkter.some(bap => bap === ab.definisjon));

const getRelevanteStatuser = (statuser: string[]): RelevanteStatuserProp => ({
  isArbeidstaker: statuser.some(kode => isStatusArbeidstakerOrKombinasjon(kode)),
  isFrilanser: statuser.some(kode => isStatusFrilanserOrKombinasjon(kode)),
  isSelvstendigNaeringsdrivende: statuser.some(kode => isStatusSNOrKombinasjon(kode)),
  isMidlertidigInaktiv: statuser.some(kode => kode === AktivitetStatus.MIDLERTIDIG_INAKTIV),
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
        ap => ap.definisjon === ProsessBeregningsgrunnlagAvklaringsbehovCode.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
      )
    : undefined;

type Props = {
  submitCallback: (aksjonspunktData: BeregningAksjonspunktSubmitType[]) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  kodeverkSamling: KodeverkForPanel;
  aktivtBeregningsgrunnlagIndeks: number;
  beregningsgrunnlagListe: Beregningsgrunnlag[];
  vilkar: Vilkår;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: BeregningFormValues;
  setFormData: (data: BeregningFormValues) => void;
  sentryCallback?: (error: string) => void;
};

const finnVilkårperiode = (vilkår: Vilkår, vilkårsperiodeFom: string): Vilkårperiode =>
  // @ts-expect-error
  vilkår.perioder.find(({ periode }) => periode.fom === vilkårsperiodeFom);

/**
 * BeregningFP
 *
 * Presentasjonskomponent. Holder på alle komponenter relatert til beregning av foreldrepenger.
 * Finner det gjeldende aksjonspunktet hvis vi har et.
 */
export const BeregningFP = ({
  aktivtBeregningsgrunnlagIndeks,
  beregningsgrunnlagListe,
  submitCallback,
  readOnly,
  readOnlySubmitButton,
  vilkar,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  formData,
  setFormData,
  sentryCallback,
}: Props) => {
  const aktivtBeregningsgrunnlag = beregningsgrunnlagListe[aktivtBeregningsgrunnlagIndeks];
  // @ts-expect-error
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
        kodeverkSamling={kodeverkSamling}
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
        sentryCallback={sentryCallback}
      />

      {aksjonspunktGraderingPaaAndelUtenBG && (
        <GraderingUtenBGReadOnly avklaringsbehov={aksjonspunktGraderingPaaAndelUtenBG} />
      )}
    </>
  );
};
