import type { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage, type IntlShape } from 'react-intl';

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
import { removeSpacesFromNumber } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../../../types/KodeverkForPanel';
import { AksjonspunktKode } from '../../../utils/aksjonspunkt';
import type { ATFLBegrunnelseValues, ATFLTidsbegrensetValues, ATFLValues } from '../../types/ATFLAksjonspunkt';
import type { BeregningFormValues, FormNameType } from '../../types/BeregningFormValues';
import type {
  FastsettAvvikATFLResultatAP,
  FastsettAvvikATFLTidsbegrensetResultatAP,
} from '../../types/BeregningsgrunnlagAP';
import { AksjonspunktBehandlerAT } from '../arbeidstaker/AksjonspunktBehandlerAT';
import { AksjonspunktBehandlerTidsbegrenset } from '../arbeidstaker/AksjonspunktBehandlerTB';
import { AksjonspunktBehandlerFL } from '../frilanser/AksjonspunktBehandlerFL';
import { finnAlleAndelerIFørstePeriode } from './aksjonspunktBehandlerUtils';

import styles from './aksjonspunktBehandler.module.css';

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

export const ArbeidstakerEllerFrilansContainer = ({
  kodeverkSamling,
  allePerioder,
  arbeidsgiverOpplysningerPerId,
  readOnly,
  intl,
  fieldIndex,
  formName,
  avklaringsbehov,
  skalValideres,
}: {
  kodeverkSamling: KodeverkForPanel;
  allePerioder: BeregningsgrunnlagPeriodeProp[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  readOnly: boolean;
  intl: IntlShape;
  fieldIndex: number;
  formName: FormNameType;
  avklaringsbehov: BeregningAvklaringsbehov;
  skalValideres: boolean;
}): ReactElement => {
  const { control } = useFormContext<BeregningFormValues>();

  const erTidsbegrenset = harPerioderMedAvsluttedeArbeidsforhold(allePerioder);
  const visFL = finnesAndelÅFastsetteMedStatus(allePerioder, 'FL');
  const visAT = finnesAndelÅFastsetteMedStatus(allePerioder, 'AT');

  return (
    <>
      {erTidsbegrenset && (
        <AksjonspunktBehandlerTidsbegrenset
          readOnly={readOnly}
          formName={formName}
          allePerioder={allePerioder}
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
            alleAndelerIForstePeriode={finnAlleAndelerIFørstePeriode(allePerioder)}
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
            alleAndelerIForstePeriode={finnAlleAndelerIFørstePeriode(allePerioder)}
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
          className={styles.textAreaStyle}
          description={intl.formatMessage({
            id: 'Forms.VurderingAvFastsattBeregningsgrunnlag.Undertekst',
          })}
          parse={value => value.toString().replaceAll('‑', '-').replaceAll('\t', ' ')}
        />
        <AssessedBy ident={avklaringsbehov?.vurdertAv} date={avklaringsbehov?.vurdertTidspunkt} />
      </div>
    </>
  );
};

const finnesAndelÅFastsetteMedStatus = (
  allePerioder: BeregningsgrunnlagPeriodeProp[],
  status: AktivitetStatus,
): boolean => {
  if (!allePerioder || allePerioder.length < 1) {
    return false;
  }
  const andeler = allePerioder[0].beregningsgrunnlagPrStatusOgAndel ?? [];
  return andeler?.some(a => a.aktivitetStatus === status && a.skalFastsetteGrunnlag);
};

const harPerioderMedAvsluttedeArbeidsforhold = (allePerioder: BeregningsgrunnlagPeriodeProp[]): boolean =>
  allePerioder.some(({ periodeAarsaker }) => periodeAarsaker?.includes(PeriodeÅrsak.ARBEIDSFORHOLD_AVSLUTTET));

ArbeidstakerEllerFrilansContainer.buildInitialValues = (
  gjeldendeAvklaringsbehov: BeregningAvklaringsbehov[],
): ATFLBegrunnelseValues => {
  const aksjonspunktATFL = finnAksjonspunktForATFL(gjeldendeAvklaringsbehov);
  return {
    ATFLVurdering: aksjonspunktATFL && aksjonspunktATFL.begrunnelse ? aksjonspunktATFL.begrunnelse : '',
  };
};

ArbeidstakerEllerFrilansContainer.transformATFLValues = (
  values: ATFLValues,
  alleAndelerIFørstePeriode: BeregningsgrunnlagAndel[],
): FastsettAvvikATFLResultatAP => ({
  begrunnelse: values.ATFLVurdering,
  inntektPrAndelList: AksjonspunktBehandlerAT.transformValues(values, alleAndelerIFørstePeriode),
  inntektFrilanser: values.inntektFrilanser !== undefined ? removeSpacesFromNumber(values.inntektFrilanser) : null,
});

ArbeidstakerEllerFrilansContainer.transformATFLTidsbegrensetValues = (
  values: ATFLTidsbegrensetValues,
  allePerioder: BeregningsgrunnlagPeriodeProp[],
): FastsettAvvikATFLTidsbegrensetResultatAP => ({
  begrunnelse: values.ATFLVurdering,
  fastsatteTidsbegrensedePerioder: AksjonspunktBehandlerTidsbegrenset.transformValues(values, allePerioder),
  frilansInntekt: values.inntektFrilanser !== undefined ? removeSpacesFromNumber(values.inntektFrilanser) : null,
});
