import { FormattedMessage } from 'react-intl';

import type {
  ArbeidsforholdTilFordeling,
  Beregningsgrunnlag,
  PerioderMedGraderingEllerRefusjon,
} from '@navikt/ft-types';
import { BTag } from '@navikt/ft-utils';

import { FaktaFordelBeregningAvklaringsbehovCode } from '../../types/interface/FaktaFordelBeregningAvklaringsbehovCode';

const { FORDEL_BEREGNINGSGRUNNLAG } = FaktaFordelBeregningAvklaringsbehovCode;

const harGraderingEllerRefusjon = (perioderMedGraderingEllerRefusjon: PerioderMedGraderingEllerRefusjon[]): boolean =>
  perioderMedGraderingEllerRefusjon.some(({ erRefusjon }) => erRefusjon) ||
  perioderMedGraderingEllerRefusjon.some(({ erGradering }) => erGradering);

const lagHelpTextsFordelBG = (endredeArbeidsforhold: ArbeidsforholdTilFordeling[]) => {
  const harGradering = endredeArbeidsforhold.some(({ perioderMedGraderingEllerRefusjon }) =>
    perioderMedGraderingEllerRefusjon?.some(({ erGradering }) => erGradering),
  );
  const harRefusjon = endredeArbeidsforhold.some(({ perioderMedGraderingEllerRefusjon }) =>
    perioderMedGraderingEllerRefusjon?.some(({ erRefusjon }) => erRefusjon),
  );
  const harPermisjonMedGraderingEllerRefusjon = endredeArbeidsforhold
    .filter(({ permisjon }) => permisjon != null)
    .some(({ perioderMedGraderingEllerRefusjon }) =>
      harGraderingEllerRefusjon(perioderMedGraderingEllerRefusjon || []),
    );
  const harEndringYtelse = endredeArbeidsforhold.some(({ perioderMedGraderingEllerRefusjon }) =>
    perioderMedGraderingEllerRefusjon?.some(({ erSøktYtelse }) => erSøktYtelse),
  );

  if (harEndringYtelse || harRefusjon || harGradering || harPermisjonMedGraderingEllerRefusjon) {
    return (
      <FormattedMessage
        id="BeregningInfoPanel.AksjonspunktHelpText.FaktaOmBeregning.EndringBeregningsgrunnlag.TilkommetAktivitet"
        values={{
          b: BTag,
          br: <br />,
        }}
      />
    );
  }
  return null;
};

export const getHelpTextsFordelBG = (beregningsgrunnlag: Beregningsgrunnlag) => {
  const harAP = beregningsgrunnlag.avklaringsbehov.some(ap => ap.definisjon === FORDEL_BEREGNINGSGRUNNLAG);
  if (harAP) {
    const endredeArbeidsforhold =
      beregningsgrunnlag.faktaOmFordeling?.fordelBeregningsgrunnlag?.arbeidsforholdTilFordeling ?? [];
    return lagHelpTextsFordelBG(endredeArbeidsforhold);
  }
  return null;
};
