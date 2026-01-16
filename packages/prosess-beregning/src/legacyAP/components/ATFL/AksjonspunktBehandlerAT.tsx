import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { RhfTextField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import type { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { formatCurrencyNoKr, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../../../types/KodeverkForPanel';
import { andelErIkkeTilkommetEllerLagtTilAvSBH } from '../../../utils/beregningsgrunnlagUtils';
import { createVisningsnavnForAndel } from '../../../utils/createVisningsnavnForAktivitet';
import type { ArbeidstakerInntektValues } from '../../types/ATFLAksjonspunkt';
import type { BeregningFormValues, FormNameType } from '../../types/BeregningFormValues';
import type { FastsettAvvikATFLResultatAP } from '../../types/BeregningsgrunnlagAP';

interface Props {
  readOnly: boolean;
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
  formName: FormNameType;
  skalValideres: boolean;
}

export const AksjonspunktBehandlerAT = ({
  readOnly,
  alleAndelerIForstePeriode,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
  formName,
  skalValideres,
}: Props) => {
  const { control } = useFormContext<BeregningFormValues>();
  const relevanteAndelerAT = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode);
  const formaterAndel = createVisningsnavnForAndel(arbeidsgiverOpplysningerPerId, kodeverkSamling);

  return (
    <>
      {relevanteAndelerAT.map((andel, index) => (
        <RhfTextField
          key={andel.andelsnr}
          label={
            <FormattedMessage id="AksjonspunktBehandlerAT.Label" values={{ arbeidsgiver: formaterAndel(andel) }} />
          }
          name={`${formName}.${fieldIndex}.inntekt${index}`}
          control={control}
          validate={skalValideres ? [required, maxValueFormatted(178956970)] : []}
          readOnly={readOnly || andel.skalFastsetteGrunnlag !== true}
          parse={parseCurrencyInput}
          htmlSize={12}
          style={{ textAlign: 'right' }}
          isEdited={readOnly && (!!andel.overstyrtPrAar || andel.overstyrtPrAar === 0)}
        />
      ))}
    </>
  );
};

AksjonspunktBehandlerAT.buildInitialValues = (alleAndeler: BeregningsgrunnlagAndel[]): ArbeidstakerInntektValues => {
  const relevanteAndeler = finnAndelerSomSkalVisesAT(alleAndeler);
  const initialValues = {} as ArbeidstakerInntektValues;
  relevanteAndeler.forEach((inntekt, index) => {
    initialValues[`inntekt${index}`] = formatCurrencyNoKr(inntekt.overstyrtPrAar) ?? '';
  });
  return initialValues;
};

AksjonspunktBehandlerAT.transformValues = (
  values: ArbeidstakerInntektValues,
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
): Pick<FastsettAvvikATFLResultatAP, 'inntektPrAndelList'> => {
  if (alleAndelerIForstePeriode.some(a => a.aktivitetStatus === 'AT')) {
    const inntektPrAndelList = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode).map(({ andelsnr }, index) => {
      const overstyrtInntekt = values[`inntekt${index}`];
      if (!andelsnr) {
        throw new Error('Forventer andelsnr på andeler som skal fastsettes.');
      }
      return {
        inntekt:
          overstyrtInntekt === undefined || overstyrtInntekt === '' ? 0 : removeSpacesFromNumber(overstyrtInntekt),
        andelsnr,
      };
    });
    return { inntektPrAndelList };
  }
  return { inntektPrAndelList: [] };
};

const finnAndelerSomSkalVisesAT = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] => {
  if (!andeler) {
    return [];
  }
  return andeler
    .filter(andel => andel.aktivitetStatus === 'AT')
    .filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};
