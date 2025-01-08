import { KodeverkType } from '@navikt/ft-kodeverk';
import {
  ArbeidsforholdTilFordeling,
  ArbeidsgiverOpplysningerPerId,
  BeregningAvklaringsbehov,
  Beregningsgrunnlag,
  PerioderMedGraderingEllerRefusjon,
} from '@navikt/ft-types';
import { AksjonspunktHelpTextTemp } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import FaktaFordelBeregningAvklaringsbehovCode from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';
import { createVisningsnavnForAktivitetFordeling } from '../util/visningsnavnHelper';

const { FORDEL_BEREGNINGSGRUNNLAG } = FaktaFordelBeregningAvklaringsbehovCode;

const hasAksjonspunkt = (aksjonspunktKode: string, aksjonspunkter: BeregningAvklaringsbehov[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktKode);

export const textCase = {
  GRADERING: 'GRADERING',
  REFUSJON: 'REFUSJON',
  PERMISJON: 'PERMISJON',
  ENDRING_YTELSE: 'ENDRING_YTELSE',
};

const formatDate = (date: string | undefined): string =>
  date ? dayjs(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-';

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
  const agOpplysninger = arbeidsforhold.arbeidsgiverIdent
    ? arbeidsgiverOpplysningerPerId[arbeidsforhold.arbeidsgiverIdent]
    : undefined;
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
    if (!arbeidsforhold.perioderMedGraderingEllerRefusjon) {
      return '';
    }
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
      return visningsnavn.concat(` f.o.m ${formatDate(arbeidsforhold.permisjon?.permisjonTom)}`);
    }
    return 'Ukjent årsak';
  });
  return byggListeSomStreng(listOfStrings);
};

const createGraderingOrRefusjonString = (
  graderingArbeidsforhold: ArbeidsforholdTilFordeling[],
  refusjonArbeidsforhold: ArbeidsforholdTilFordeling[],
  permisjonMedGraderingEllerRefusjon: ArbeidsforholdTilFordeling[],
  endringYtelse: ArbeidsforholdTilFordeling[],
): ReactElement<any>[] => {
  const text: ReactElement<any>[] = [];

  if (
    endringYtelse.length === 0 &&
    refusjonArbeidsforhold.length === 0 &&
    graderingArbeidsforhold.length === 0 &&
    permisjonMedGraderingEllerRefusjon.length === 0
  ) {
    return text;
  }
  text.push(
    <FormattedMessage
      key="EndringBeregningsgrunnlagFastsetÅrsbeløp"
      id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet"
      values={{
        b: (...chunks) => <b>{chunks}</b>,
        br: <br />,
      }}
    />,
  );
  return text;
};

const harGraderingEllerRefusjon = (perioderMedGraderingEllerRefusjon: PerioderMedGraderingEllerRefusjon[]): boolean =>
  perioderMedGraderingEllerRefusjon.map(({ erRefusjon }) => erRefusjon).includes(true) ||
  perioderMedGraderingEllerRefusjon.map(({ erGradering }) => erGradering).includes(true);

const lagHelpTextsFordelBG = (endredeArbeidsforhold: ArbeidsforholdTilFordeling[]): ReactElement<any>[] => {
  const gradering = endredeArbeidsforhold.filter(({ perioderMedGraderingEllerRefusjon }) =>
    perioderMedGraderingEllerRefusjon?.map(({ erGradering }) => erGradering).includes(true),
  );
  const refusjon = endredeArbeidsforhold.filter(({ perioderMedGraderingEllerRefusjon }) =>
    perioderMedGraderingEllerRefusjon?.map(({ erRefusjon }) => erRefusjon).includes(true),
  );
  const permisjonMedGraderingEllerRefusjon = endredeArbeidsforhold
    .filter(({ permisjon }) => permisjon !== undefined && permisjon !== null)
    .filter(({ perioderMedGraderingEllerRefusjon }) =>
      harGraderingEllerRefusjon(perioderMedGraderingEllerRefusjon || []),
    );
  const endringYtelse = endredeArbeidsforhold.filter(({ perioderMedGraderingEllerRefusjon }) =>
    perioderMedGraderingEllerRefusjon?.map(({ erSøktYtelse }) => erSøktYtelse).includes(true),
  );
  return createGraderingOrRefusjonString(gradering, refusjon, permisjonMedGraderingEllerRefusjon, endringYtelse);
};

export const getHelpTextsFordelBG = (beregningsgrunnlag: Beregningsgrunnlag): ReactElement<any>[] => {
  const endredeArbeidsforhold =
    beregningsgrunnlag.faktaOmFordeling?.fordelBeregningsgrunnlag?.arbeidsforholdTilFordeling || [];
  return hasAksjonspunkt(FORDEL_BEREGNINGSGRUNNLAG, beregningsgrunnlag.avklaringsbehov)
    ? lagHelpTextsFordelBG(endredeArbeidsforhold)
    : [];
};

type OwnProps = {
  isAksjonspunktClosed: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
};

const FordelingHelpText: FunctionComponent<OwnProps> = ({ isAksjonspunktClosed, beregningsgrunnlag }) => {
  const helpText = getHelpTextsFordelBG(beregningsgrunnlag);
  return <AksjonspunktHelpTextTemp isAksjonspunktOpen={!isAksjonspunktClosed}>{helpText}</AksjonspunktHelpTextTemp>;
};

export default FordelingHelpText;
