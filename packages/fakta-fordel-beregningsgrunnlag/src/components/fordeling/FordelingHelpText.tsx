import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { DDMMYYYY_DATE_FORMAT, getKodeverknavnFn, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { AksjonspunktHelpTextTemp } from '@navikt/ft-ui-komponenter';
import {
  AlleKodeverk,
  ArbeidsforholdTilFordeling,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  PerioderMedGraderingEllerRefusjon,
} from '@navikt/ft-types';
import { createVisningsnavnForAktivitetFordeling } from '../util/visningsnavnHelper';
import FaktaFordelBeregningAksjonspunktCode from '../../types/interface/FaktaFordelBeregningAksjonspunktCode';

const { FORDEL_BEREGNINGSGRUNNLAG } = FaktaFordelBeregningAksjonspunktCode;

const hasAksjonspunkt = (aksjonspunktKode: string, aksjonspunkter: BeregningAvklaringsbehov[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktKode);

export const textCase = {
  GRADERING: 'GRADERING',
  REFUSJON: 'REFUSJON',
  PERMISJON: 'PERMISJON',
  ENDRING_YTELSE: 'ENDRING_YTELSE',
};

const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const byggListeSomStreng = (listeMedStrenger: string[]): string => {
  if (listeMedStrenger.length === 0) {
    return '';
  }
  if (listeMedStrenger.length === 1) {
    return listeMedStrenger[0];
  }
  if (listeMedStrenger.length === 2) {
    return `${listeMedStrenger[0]} og ${listeMedStrenger[1]}`;
  }
  if (listeMedStrenger.length > 2) {
    return `${listeMedStrenger.splice(0, listeMedStrenger.length - 1).join(', ')} og ${
      listeMedStrenger[listeMedStrenger.length - 1]
    }`;
  }
  return '';
};

const lagPeriodeStreng = (perioder: PerioderMedGraderingEllerRefusjon[]): string => {
  const listeMedPeriodeStrenger = perioder.map(periode => {
    let periodeStreng = ` f.o.m. ${formatDate(periode.fom)}`;
    if (periode.tom) {
      periodeStreng = periodeStreng.concat(` - t.o.m. ${formatDate(periode.tom)}`);
    }
    return periodeStreng;
  });
  return byggListeSomStreng(listeMedPeriodeStrenger);
};

const finnVisningsnavn = (
  arbeidsforhold: ArbeidsforholdTilFordeling,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
): string => {
  const agOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent];
  if (!agOpplysninger) {
    return arbeidsforhold.arbeidsforholdType
      ? getKodeverknavn(arbeidsforhold.arbeidsforholdType, KodeverkType.OPPTJENING_AKTIVITET_TYPE)
      : '';
  }
  return createVisningsnavnForAktivitetFordeling(agOpplysninger, arbeidsforhold.eksternArbeidsforholdId);
};

export const createFordelArbeidsforholdString = (
  listOfArbeidsforhold: ArbeidsforholdTilFordeling[],
  mTextCase: string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
): string => {
  const listOfStrings = listOfArbeidsforhold.map(arbeidsforhold => {
    const visningsnavn = finnVisningsnavn(arbeidsforhold, arbeidsgiverOpplysningerPerId, getKodeverknavn);
    if (mTextCase === textCase.GRADERING) {
      return (
        visningsnavn +
        lagPeriodeStreng(arbeidsforhold.perioderMedGraderingEllerRefusjon.filter(({ erGradering }) => erGradering))
      );
    }
    if (mTextCase === textCase.REFUSJON) {
      return (
        visningsnavn +
        lagPeriodeStreng(arbeidsforhold.perioderMedGraderingEllerRefusjon.filter(({ erRefusjon }) => erRefusjon))
      );
    }
    if (mTextCase === textCase.ENDRING_YTELSE) {
      return (
        visningsnavn +
        lagPeriodeStreng(arbeidsforhold.perioderMedGraderingEllerRefusjon.filter(({ erSøktYtelse }) => erSøktYtelse))
      );
    }
    if (mTextCase === textCase.PERMISJON) {
      return visningsnavn.concat(` f.o.m ${formatDate(arbeidsforhold.permisjon.permisjonTom)}`);
    }
    return null;
  });
  return byggListeSomStreng(listOfStrings);
};

const createGraderingOrRefusjonString = (
  graderingArbeidsforhold: ArbeidsforholdTilFordeling[],
  refusjonArbeidsforhold: ArbeidsforholdTilFordeling[],
  permisjonMedGraderingEllerRefusjon: ArbeidsforholdTilFordeling[],
  endringYtelse: ArbeidsforholdTilFordeling[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => {
  const text = [];
  if (permisjonMedGraderingEllerRefusjon.length > 0) {
    const arbeidsforholdString = createFordelArbeidsforholdString(
      permisjonMedGraderingEllerRefusjon,
      textCase.PERMISJON,
      arbeidsgiverOpplysningerPerId,
      getKodeverknavn,
    );
    text.push(
      <FormattedMessage
        key="EndringBeregningsgrunnlagPermisjon"
        id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Permisjon"
        values={{
          arbeidsforhold: arbeidsforholdString,
        }}
      />,
    );
  }
  if (graderingArbeidsforhold.length > 0) {
    const arbeidsforholdString = createFordelArbeidsforholdString(
      graderingArbeidsforhold,
      textCase.GRADERING,
      arbeidsgiverOpplysningerPerId,
      getKodeverknavn,
    );
    text.push(
      <FormattedMessage
        key="EndringBeregningsgrunnlagGradering"
        id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Gradering"
        values={{ arbeidsforhold: arbeidsforholdString }}
      />,
    );
  }
  if (refusjonArbeidsforhold.length > 0) {
    const arbeidsforholdString = createFordelArbeidsforholdString(
      refusjonArbeidsforhold,
      textCase.REFUSJON,
      arbeidsgiverOpplysningerPerId,
      getKodeverknavn,
    );
    text.push(
      <FormattedMessage
        key="EndringBeregningsgrunnlagRefusjon"
        id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.Refusjon"
        values={{ arbeidsforhold: arbeidsforholdString }}
      />,
    );
  }
  if (endringYtelse.length > 0) {
    const arbeidsforholdString = createFordelArbeidsforholdString(
      endringYtelse,
      textCase.ENDRING_YTELSE,
      arbeidsgiverOpplysningerPerId,
      getKodeverknavn,
    );
    text.push(
      <FormattedMessage
        key="EndringBeregningsgrunnlagEndringYtelse"
        id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.EndringYtelse"
        values={{ arbeidsforhold: arbeidsforholdString }}
      />,
    );
  }
  if (text.length < 1) {
    return text;
  }
  text.push(
    <FormattedMessage
      key="EndringBeregningsgrunnlagFastsetÅrsbeløp"
      id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.FastsetÅrsbeløp"
    />,
  );
  return text;
};

const harGraderingEllerRefusjon = (perioderMedGraderingEllerRefusjon: PerioderMedGraderingEllerRefusjon[]): boolean =>
  perioderMedGraderingEllerRefusjon.map(({ erRefusjon }) => erRefusjon).includes(true) ||
  perioderMedGraderingEllerRefusjon.map(({ erGradering }) => erGradering).includes(true);

const lagHelpTextsFordelBG = (
  endredeArbeidsforhold: ArbeidsforholdTilFordeling[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => {
  const gradering = endredeArbeidsforhold.filter(({ perioderMedGraderingEllerRefusjon }) =>
    perioderMedGraderingEllerRefusjon.map(({ erGradering }) => erGradering).includes(true),
  );
  const refusjon = endredeArbeidsforhold.filter(({ perioderMedGraderingEllerRefusjon }) =>
    perioderMedGraderingEllerRefusjon.map(({ erRefusjon }) => erRefusjon).includes(true),
  );
  const permisjonMedGraderingEllerRefusjon = endredeArbeidsforhold
    .filter(({ permisjon }) => permisjon !== undefined && permisjon !== null)
    .filter(({ perioderMedGraderingEllerRefusjon }) => harGraderingEllerRefusjon(perioderMedGraderingEllerRefusjon));
  const endringYtelse = endredeArbeidsforhold.filter(({ perioderMedGraderingEllerRefusjon }) =>
    perioderMedGraderingEllerRefusjon.map(({ erSøktYtelse }) => erSøktYtelse).includes(true),
  );
  return createGraderingOrRefusjonString(
    gradering,
    refusjon,
    permisjonMedGraderingEllerRefusjon,
    endringYtelse,
    getKodeverknavn,
    arbeidsgiverOpplysningerPerId,
  );
};

export const getHelpTextsFordelBG = (
  beregningsgrunnlag: Beregningsgrunnlag,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement[] => {
  const fordelBG = beregningsgrunnlag.faktaOmFordeling.fordelBeregningsgrunnlag;
  const endredeArbeidsforhold = fordelBG ? fordelBG.arbeidsforholdTilFordeling : [];
  return hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, beregningsgrunnlag.avklaringsbehov)
    ? lagHelpTextsFordelBG(endredeArbeidsforhold, getKodeverknavnFn(alleKodeverk), arbeidsgiverOpplysningerPerId)
    : [];
};

type OwnProps = {
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const FordelingHelpText: FunctionComponent<OwnProps> = ({
  isAksjonspunktClosed,
  beregningsgrunnlag,
  alleKodeverk,
  arbeidsgiverOpplysningerPerId,
}) => {
  const helpText = getHelpTextsFordelBG(beregningsgrunnlag, alleKodeverk, arbeidsgiverOpplysningerPerId);
  return <AksjonspunktHelpTextTemp isAksjonspunktOpen={!isAksjonspunktClosed}>{helpText}</AksjonspunktHelpTextTemp>;
};

export default FordelingHelpText;
