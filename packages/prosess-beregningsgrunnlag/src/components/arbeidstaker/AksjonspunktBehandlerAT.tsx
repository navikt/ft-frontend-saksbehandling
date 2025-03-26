import { BodyShort, HStack, VStack } from '@navikt/ds-react';

import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import { ArbeidstakerInntektValues } from '../../types/ATFLAksjonspunkt';
import { ArbeidsinntektResultat } from '../../types/interface/BeregningsgrunnlagAP';
import { KodeverkForPanel } from '../../types/KodeverkForPanelForBg';
import { createVisningsnavnForAndel } from '../../util/createVisningsnavnForAktivitet';

import styles from '../fellesPaneler/aksjonspunktBehandler.module.css';

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
    .filter(andel => andel.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER)
    .filter(andel => andel.skalFastsetteGrunnlag === true)
    .filter(andel => andelErIkkeTilkommetEllerLagtTilAvSBH(andel));
};

type Props = {
  readOnly: boolean;
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
  formName: string;
  skalValideres: boolean;
};

export const AksjonspunktBehandlerAT = ({
  readOnly,
  alleAndelerIForstePeriode,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
  formName,
  skalValideres,
}: Props) => {
  const relevanteAndelerAT = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode);
  return (
    <VStack gap="2">
      {relevanteAndelerAT.map((andel, index) => (
        <HStack gap="4" key={andel.andelsnr} align="center">
          <BodyShort size="small">
            {createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling)}
          </BodyShort>
          <InputField
            name={`${formName}.${fieldIndex}.inntekt${index}`}
            validate={skalValideres ? [required, maxValueFormatted(178956970)] : []}
            readOnly={readOnly}
            parse={parseCurrencyInput}
            className={styles.breddeInntekt}
            isEdited={readOnly && (!!andel.overstyrtPrAar || andel.overstyrtPrAar === 0)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

AksjonspunktBehandlerAT.transformValues = (
  values: ArbeidstakerInntektValues,
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
): ArbeidsinntektResultat[] => {
  let inntektPrAndelList = [] as ArbeidsinntektResultat[];
  if (alleAndelerIForstePeriode.find(a => a.aktivitetStatus === AktivitetStatus.ARBEIDSTAKER)) {
    inntektPrAndelList = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode).map(({ andelsnr }, index) => {
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
  }
  return inntektPrAndelList;
};
