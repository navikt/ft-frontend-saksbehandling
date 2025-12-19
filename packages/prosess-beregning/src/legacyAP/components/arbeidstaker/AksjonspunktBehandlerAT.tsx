import { useFormContext } from 'react-hook-form';

import { BodyShort, HStack, Spacer } from '@navikt/ds-react';

import { RhfTextField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import type { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import type { KodeverkForPanel } from '../../../types/KodeverkForPanel';
import type { ArbeidstakerInntektValues } from '../../types/ATFLAksjonspunkt';
import type { BeregningFormValues, FormNameType } from '../../types/BeregningFormValues';
import type { FastsettAvvikATFLResultatAP } from '../../types/BeregningsgrunnlagAP';
import { createVisningsnavnForAndel } from '../../util/createVisningsnavnForAktivitet';

const andelErIkkeTilkommetEllerLagtTilAvSBH = (andel: BeregningsgrunnlagAndel): boolean => {
  if (andel.overstyrtPrAar !== null && andel.overstyrtPrAar !== undefined) {
    return true;
  }
  // Andeler som er lagt til av sbh eller tilkom før stp skal ikke kunne endres på
  return andel.erTilkommetAndel === false && andel.lagtTilAvSaksbehandler === false;
};

const finnAndelerSomSkalVisesAT = (andeler: BeregningsgrunnlagAndel[]): BeregningsgrunnlagAndel[] => {
  if (!andeler) {
    return [];
  }
  return andeler
    .filter(andel => andel.aktivitetStatus === 'AT')
    .filter(andel => andel.skalFastsetteGrunnlag === true)
    .filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};

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
  return (
    <>
      {relevanteAndelerAT.map((andel, index) => (
        <HStack wrap={false} key={andel.andelsnr}>
          <BodyShort size="small">
            {createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling)}
          </BodyShort>
          <Spacer />
          <RhfTextField
            name={`${formName}.${fieldIndex}.inntekt${index}`}
            control={control}
            validate={skalValideres ? [required, maxValueFormatted(178956970)] : []}
            readOnly={readOnly}
            parse={parseCurrencyInput}
            htmlSize={12}
            style={{ textAlign: 'right' }}
            hideLabel
            isEdited={readOnly && (!!andel.overstyrtPrAar || andel.overstyrtPrAar === 0)}
          />
        </HStack>
      ))}
    </>
  );
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
