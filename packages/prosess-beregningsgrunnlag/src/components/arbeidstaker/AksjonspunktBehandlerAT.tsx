import { BodyShort } from '@navikt/ds-react';
import { ReactElement } from 'react';

import { InputField } from '@navikt/ft-form-hooks';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus } from '@navikt/ft-kodeverk';
import { parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';

import { ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { ArbeidsinntektResultat } from '../../types/interface/BeregningsgrunnlagAP';
import { createVisningsnavnForAndel } from '../../util/createVisningsnavnForAktivitet';

import { ArbeidstakerInntektValues } from '../../types/ATFLAksjonspunkt';
import { KodeverkForPanel } from '../../types/KodeverkForPanelForBg';
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

const createRows = (
  relevanteAndelerAT: BeregningsgrunnlagAndel[],
  kodeverkSamling: KodeverkForPanel,
  readOnly: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  fieldIndex: number,
  formName: string,
): ReactElement[] =>
  relevanteAndelerAT.map((andel, index) => (
    <FlexRow key={`index${index + 1}`} className={styles.verticalAlignMiddle}>
      <FlexColumn className={styles.atflAvvikAktivitet}>
        <BodyShort size="small">
          {createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, kodeverkSamling)}
        </BodyShort>
      </FlexColumn>
      <FlexColumn className={styles.atflAvvikInntekt}>
        <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
          <InputField
            name={`${formName}.${fieldIndex}.inntekt${index}`}
            validate={[required, maxValueFormatted(178956970)]}
            readOnly={readOnly}
            parse={parseCurrencyInput}
            className={styles.breddeInntekt}
            isEdited={readOnly && (!!andel.overstyrtPrAar || andel.overstyrtPrAar === 0)}
          />
        </div>
      </FlexColumn>
    </FlexRow>
  ));

type Props = {
  readOnly: boolean;
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
  kodeverkSamling: KodeverkForPanel;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
  formName: string;
};

export const AksjonspunktBehandlerAT = ({
  readOnly,
  alleAndelerIForstePeriode,
  kodeverkSamling,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
  formName,
}: Props) => {
  const relevanteAndelerAT = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode);
  return (
    <>
      {createRows(relevanteAndelerAT, kodeverkSamling, readOnly, arbeidsgiverOpplysningerPerId, fieldIndex, formName)}
    </>
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
