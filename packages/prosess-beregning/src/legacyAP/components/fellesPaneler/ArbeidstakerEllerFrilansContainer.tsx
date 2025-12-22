import type { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { PeriodeÅrsak } from '@navikt/ft-kodeverk';
import { AssessedBy } from '@navikt/ft-plattform-komponenter';
import type {
  AktivitetStatus,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  BeregningsgrunnlagAndel,
  BeregningsgrunnlagPeriodeProp,
} from '@navikt/ft-types';

import type { KodeverkForPanel } from '../../../types/KodeverkForPanel';
import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import { finnAlleAndelerIFørstePeriode } from '../../../utils/beregningsgrunnlagUtils';
import type { ATFLBegrunnelseValues, ATFLTidsbegrensetValues, ATFLValues } from '../../types/ATFLAksjonspunkt';
import type { BeregningFormValues, FormNameType } from '../../types/BeregningFormValues';
import type {
  FastsettAvvikATFLResultatAP,
  FastsettAvvikATFLTidsbegrensetResultatAP,
} from '../../types/BeregningsgrunnlagAP';
import { AksjonspunktBehandlerAT } from '../arbeidstaker/AksjonspunktBehandlerAT';
import { AksjonspunktBehandlerTidsbegrenset } from '../arbeidstaker/AksjonspunktBehandlerTidsbegrenset';
import { AksjonspunktBehandlerFL } from '../frilanser/AksjonspunktBehandlerFL';

const { FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS, FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD } =
  AksjonspunktKode;

const finnAksjonspunktForATFL = (
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): BeregningAvklaringsbehov | undefined =>
  gjeldendeAvklaringsbehov?.find(
    ap =>
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS ||
      ap.definisjon === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  );

const minLength3 = minLength(3);
const MAX_LENGTH = 4000;
const maxLength4000 = maxLength(MAX_LENGTH);

interface Props {
  kodeverkSamling: KodeverkForPanel;
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  readOnly: boolean;
  fieldIndex: number;
  formName: FormNameType;
  avklaringsbehov: BeregningAvklaringsbehov;
  skalValideres: boolean;
}

export const ArbeidstakerEllerFrilansContainer = ({
  kodeverkSamling,
  beregningsgrunnlagPeriode,
  arbeidsgiverOpplysningerPerId,
  readOnly,
  fieldIndex,
  formName,
  avklaringsbehov,
  skalValideres,
}: Props): ReactElement => {
  const { control } = useFormContext<BeregningFormValues>();

  const erTidsbegrenset = harPerioderMedAvsluttedeArbeidsforhold(beregningsgrunnlagPeriode);
  const visFL = finnesAndelÅFastsetteMedStatus(beregningsgrunnlagPeriode, 'FL');
  const visAT = finnesAndelÅFastsetteMedStatus(beregningsgrunnlagPeriode, 'AT');

  return (
    <>
      {erTidsbegrenset && (
        <AksjonspunktBehandlerTidsbegrenset
          readOnly={readOnly}
          formName={formName}
          beregningsgrunnlagPeriode={beregningsgrunnlagPeriode}
          kodeverkSamling={kodeverkSamling}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          fieldIndex={fieldIndex}
          skalValideres={skalValideres}
        />
      )}
      <div>
        {!erTidsbegrenset && visAT && (
          <AksjonspunktBehandlerAT
            readOnly={readOnly}
            alleAndelerIForstePeriode={finnAlleAndelerIFørstePeriode(beregningsgrunnlagPeriode)}
            kodeverkSamling={kodeverkSamling}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            fieldIndex={fieldIndex}
            formName={formName}
            skalValideres={skalValideres}
          />
        )}
        {visFL && (
          <AksjonspunktBehandlerFL
            readOnly={readOnly}
            fieldIndex={fieldIndex}
            formName={formName}
            alleAndelerIForstePeriode={finnAlleAndelerIFørstePeriode(beregningsgrunnlagPeriode)}
            skalValideres={skalValideres}
          />
        )}
      </div>
      <div>
        <RhfTextarea
          name={`${formName}.${fieldIndex}.ATFLVurdering`}
          control={control}
          label={<FormattedMessage id="Forms.Vurdering" />}
          validate={[required, maxLength4000, minLength3, hasValidText]}
          maxLength={MAX_LENGTH}
          readOnly={readOnly}
          minRows={3}
          description={<FormattedMessage id="Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst" />}
          parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
        />
        <AssessedBy ident={avklaringsbehov?.vurdertAv} date={avklaringsbehov?.vurdertTidspunkt} />
      </div>
    </>
  );
};

const finnesAndelÅFastsetteMedStatus = (
  beregningsgrunnlagPeriode: BeregningsgrunnlagPeriodeProp[],
  status: AktivitetStatus,
): boolean => {
  if (!beregningsgrunnlagPeriode || beregningsgrunnlagPeriode.length < 1) {
    return false;
  }
  const andeler = finnAlleAndelerIFørstePeriode(beregningsgrunnlagPeriode);
  return andeler?.some(a => a.aktivitetStatus === status && a.skalFastsetteGrunnlag);
};

const harPerioderMedAvsluttedeArbeidsforhold = (allePerioder: BeregningsgrunnlagPeriodeProp[]): boolean =>
  allePerioder.some(({ periodeAarsaker }) => periodeAarsaker?.includes(PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET));

ArbeidstakerEllerFrilansContainer.buildInitialValues = (
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): ATFLBegrunnelseValues => {
  const aksjonspunktATFL = finnAksjonspunktForATFL(gjeldendeAvklaringsbehov);
  return {
    ATFLVurdering: aksjonspunktATFL?.begrunnelse ? aksjonspunktATFL.begrunnelse : '',
  };
};

ArbeidstakerEllerFrilansContainer.transformATFLValues = (
  values: ATFLValues,
  alleAndelerIFørstePeriode: BeregningsgrunnlagAndel[],
): FastsettAvvikATFLResultatAP => ({
  begrunnelse: values.ATFLVurdering,
  ...AksjonspunktBehandlerAT.transformValues(values, alleAndelerIFørstePeriode),
  ...AksjonspunktBehandlerFL.transformValues(values),
});

ArbeidstakerEllerFrilansContainer.transformATFLTidsbegrensetValues = (
  values: ATFLTidsbegrensetValues,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
): FastsettAvvikATFLTidsbegrensetResultatAP => ({
  begrunnelse: values.ATFLVurdering,
  ...AksjonspunktBehandlerTidsbegrenset.transformValues(values, allePerioder),
  frilansInntekt: AksjonspunktBehandlerFL.transformValues(values).inntektFrilanser,
});
