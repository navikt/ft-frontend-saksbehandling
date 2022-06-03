import React, { FunctionComponent, ReactElement } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst } from 'nav-frontend-typografi';

import { InputField } from '@navikt/ft-form-hooks';
import { getKodeverknavnFn, parseCurrencyInput, removeSpacesFromNumber } from '@navikt/ft-utils';
import { required } from '@navikt/ft-form-validators';
import { KodeverkType, AktivitetStatus } from '@navikt/ft-kodeverk';

import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, BeregningsgrunnlagAndel } from '@navikt/ft-types';
import { ArbeidsinntektResultat } from '../../types/interface/BeregningsgrunnlagAP';

import RelevanteStatuserProp from '../../types/RelevanteStatuserTsType';
import { createVisningsnavnForAndel } from '../../util/createVisningsnavnForAktivitet';

import styles from '../fellesPaneler/aksjonspunktBehandler.less';
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
): ReactElement[] =>
  relevanteAndelerAT.map((andel, index) => (
    <Row key={`index${index + 1}`} className={styles.verticalAlignMiddle}>
      <Column xs="7">
        <Normaltekst>{createVisningsnavnForAndel(andel, arbeidsgiverOpplysningerPerId, getKodeverknavn)}</Normaltekst>
      </Column>
      <Column xs="5">
        <div id="readOnlyWrapper" className={readOnly ? styles.inputPadding : undefined}>
          <InputField
            name={`BeregningForm.${fieldIndex}.inntekt${index}`}
            validate={[required]}
            readOnly={readOnly}
            parse={parseCurrencyInput}
            bredde="XS"
          />
        </div>
      </Column>
    </Row>
  ));

interface StaticFunctions {
  transformValues: (
    values: ArbeidstakerInntektValues,
    relevanteStatuser: RelevanteStatuserProp,
    alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
  ) => ArbeidsinntektResultat[];
}

type OwnProps = {
  readOnly: boolean;
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[];
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  fieldIndex: number;
};
const AksjonspunktBehandlerAT: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  alleAndelerIForstePeriode,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
  fieldIndex,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  const relevanteAndelerAT = finnAndelerSomSkalVisesAT(alleAndelerIForstePeriode);
  return <>{createRows(relevanteAndelerAT, getKodeverknavn, readOnly, arbeidsgiverOpplysningerPerId, fieldIndex)}</>;
};

AksjonspunktBehandlerAT.transformValues = (
  values: ArbeidstakerInntektValues,
  relevanteStatuser: RelevanteStatuserProp,
  alleAndelerIForstePeriode: BeregningsgrunnlagAndel[],
): ArbeidsinntektResultat[] => {
  let inntektPrAndelList = [] as ArbeidsinntektResultat[];
  if (relevanteStatuser.isArbeidstaker) {
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
