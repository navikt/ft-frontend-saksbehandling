import { BlaBoksMedCheckmarkListe, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT, unique, YYYY_MM_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';
import norskFormat from 'dayjs/locale/nb';
import { FormattedMessage } from 'react-intl';

import { LønnsendringScenario } from '@navikt/ft-kodeverk';
import { ArbeidsgiverOpplysningerPerId, LønnsendringSaksopplysning, Saksopplysninger } from '@navikt/ft-types';
import { createVisningsnavnForAktivitet } from '../../util/createVisningsnavnForAktivitet';

type Props = {
  skjeringstidspunktDato: string;
  saksopplysninger?: Saksopplysninger;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
};

const uledMåned = (dato: string) => dayjs(dato).locale(norskFormat).format('MMMM');

function finnLønnsendringsdatoer(
  opplysninger: LønnsendringSaksopplysning[],
  scenario: LønnsendringScenario,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) {
  const datoListe = opplysninger
    .filter(it => it.lønnsendringscenario === scenario)
    .map(
      it => `i ${createVisningsnavnForAktivitet(
        arbeidsgiverOpplysningerPerId[it.arbeidsforhold.arbeidsgiverIdent],
        undefined,
      )}
      ${dayjs(it.sisteLønnsendringsdato).format(DDMMYYYY_DATE_FORMAT)}`,
    );
  return datoListe.reduce((concatString, current, index) => {
    if (index === 0) {
      return current;
    }
    if (index < datoListe.length - 2) {
      return `${concatString}, ${current}`;
    }
    return `${concatString} og ${current}`;
  }, '');
}

const finnScenarioTekst = (
  scenario: string,
  stp: string,
  opplysninger: LønnsendringSaksopplysning[],
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => {
  switch (scenario) {
    case LønnsendringScenario.MANUELT_BEHANDLET:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.manueltBehandlet"
          values={{
            datoer: finnLønnsendringsdatoer(
              opplysninger,
              LønnsendringScenario.MANUELT_BEHANDLET,
              arbeidsgiverOpplysningerPerId,
            ),
          }}
        />
      );
    case LønnsendringScenario.DELVIS_MÅNEDSINNTEKT_SISTE_MND:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.delvisMåned"
          values={{
            datoer: finnLønnsendringsdatoer(
              opplysninger,
              LønnsendringScenario.DELVIS_MÅNEDSINNTEKT_SISTE_MND,
              arbeidsgiverOpplysningerPerId,
            ),
            måned: uledMåned(dayjs(stp).subtract(1, 'month').format(YYYY_MM_FORMAT)),
            forrigeMåned: uledMåned(dayjs(stp).subtract(2, 'month').format(YYYY_MM_FORMAT)),
          }}
        />
      );
    case LønnsendringScenario.FULL_MÅNEDSINNTEKT_EN_MND:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullEnMåned"
          values={{
            datoer: finnLønnsendringsdatoer(
              opplysninger,
              LønnsendringScenario.FULL_MÅNEDSINNTEKT_EN_MND,
              arbeidsgiverOpplysningerPerId,
            ),
            nesteMåned: uledMåned(dayjs(stp).subtract(1, 'month').format(YYYY_MM_FORMAT)),
          }}
        />
      );
    case LønnsendringScenario.FULL_MÅNEDSINNTEKT_TO_MND:
      return (
        <FormattedMessage
          id="Beregningsgrunnlag.Skjeringstidspunkt.lønnsendring.fullToMåned"
          values={{
            datoer: finnLønnsendringsdatoer(
              opplysninger,
              LønnsendringScenario.FULL_MÅNEDSINNTEKT_TO_MND,
              arbeidsgiverOpplysningerPerId,
            ),
            sisteMåned: uledMåned(dayjs(stp).subtract(1, 'month').format(YYYY_MM_FORMAT)),
            nesteMåned: uledMåned(dayjs(stp).subtract(2, 'month').format(YYYY_MM_FORMAT)),
          }}
        />
      );
    default:
      return null;
  }
};

function lagLesMer(
  opplysninger: LønnsendringSaksopplysning[],
  skjeringstidspunktDato: string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) {
  const unikeScenario = unique(opplysninger.map(o => o.lønnsendringscenario));
  return unikeScenario.map(scenario => (
    <>
      {finnScenarioTekst(scenario, skjeringstidspunktDato, opplysninger, arbeidsgiverOpplysningerPerId)}
      <br />
      <VerticalSpacer sixteenPx />
    </>
  ));
}

/**
 * SkjeringspunktOgStatusPanel
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */

export const SaksopplysningPanel = ({
  skjeringstidspunktDato,
  saksopplysninger,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const saksopplysningerTilBlaBoksMedCheckmarkListe = [];
  if (
    saksopplysninger &&
    saksopplysninger.lønnsendringSaksopplysning &&
    saksopplysninger.lønnsendringSaksopplysning.length > 0
  ) {
    saksopplysningerTilBlaBoksMedCheckmarkListe.push({
      textId: 'Beregningsgrunnlag.Skjeringstidspunkt.LonnsendringSisteTreMan',
      readMoreContent: lagLesMer(
        saksopplysninger.lønnsendringSaksopplysning,
        skjeringstidspunktDato,
        arbeidsgiverOpplysningerPerId,
      ),
    });
  }
  return <BlaBoksMedCheckmarkListe saksopplysninger={saksopplysningerTilBlaBoksMedCheckmarkListe} />;
};
