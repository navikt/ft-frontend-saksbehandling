import React, { FunctionComponent, ReactElement } from 'react';
import { BodyShort } from '@navikt/ds-react';

import { InputField } from '@navikt/ft-form-hooks';
import { getKodeverknavnFn, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';
import { maxValueFormatted, required } from '@navikt/ft-form-validators';
import { AktivitetStatus, KodeverkType } from '@navikt/ft-kodeverk';

import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { FlexColumn, FlexRow } from '@navikt/ft-ui-komponenter';
import { ArbeidsinntektResultat } from '../../types/interface/BeregningsgrunnlagAP';
import { createVisningsnavnForAndel } from '../../util/createVisningsnavnForAktivitet';

import styles from '../fellesPaneler/aksjonspunktBehandler.module.css';
import { ArbeidstakerInntektValues } from '../../types/ATFLAksjonspunktTsType';

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
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  readOnly: boolean,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  fieldIndex: number,
  formName: string,
): ReactElement[] =>
  relevanteAndelerAT.map((andel, index) => (
    <FlexRow key={`index${index + 1}`} className={styles.verticalAlignMiddle}>
      <FlexColumn className={styles.atflAvvikAktivitet}>
        <BodyShort size="small">
          {createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, getKodeverknavn)}
        </BodyShort>
      </FlexColumn>
      <FlexColumn className={styles.atflAvvikInntekt}>
        <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
          <InputField
            name={`${formName}.${fieldIndex}.inntekt${index}`}
            validate={[required, maxValueFormatted(178956970)]}
            readOnly={readOnly}
            parse={parseCurrencyInput}
            className={styles.bredde}
            isEdited={readOnly && (!!andel.overstyrtPrAar || andel.overstyrtPrAar === 0)}
          />
        </div>
      </FlexColumn>
    </FlexRow>
  ));

interface StaticFunctions {
  transformValues: (
    values: ArbeidstakerInntektValues,
    alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
  ) => ArbeidsinntektResultat[];
}

type OwnProps = {
  readOnly: boolean;
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
  formName: string;
};
const AksjonspunktBehandlerAT: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  alleAndelerIForstePeriode,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
  formName,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  const relevanteAndelerAT = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode);
  return (
    <>
      {createRows(relevanteAndelerAT, getKodeverknavn, readOnly, arbeidsgiverOpplysningerPerId, fieldIndex, formName)}
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

export default AksjonspunktBehandlerAT;
