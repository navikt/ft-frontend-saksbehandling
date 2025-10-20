import { FormattedMessage, useIntl } from 'react-intl';

import { ExpansionCard } from '@navikt/ds-react';
import dayjs from 'dayjs';
import norskFormat from 'dayjs/locale/nb';

import { LønnsendringScenario } from '@navikt/ft-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, LønnsendringSaksopplysning } from '@navikt/ft-types';
import { dateFormat, formaterArbeidsgiver, YYYY_MM_FORMAT } from '@navikt/ft-utils';

interface Props {
  skjeringstidspunktDato: string;
  lønnsendringSaksopplysning: LønnsendringSaksopplysning[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const uledMåned = (dato: string) => dayjs(dato).locale(norskFormat).format('MMMM');

function finnLønnsendringsdatoer(
  opplysninger: LønnsendringSaksopplysning[],
  scenario: LønnsendringScenario,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) {
  const datoListe = opplysninger
    .filter(it => it.lønnsendringscenario === scenario)
    .map(
      it => `i ${formaterArbeidsgiver(arbeidsgiverOpplysningerPerId[it.arbeidsforhold.arbeidsgiverIdent])}
      ${dateFormat(it.sisteLønnsendringsdato)}`,
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
          id="Lønnsendring.manueltBehandlet"
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
          id="Lønnsendring.delvisMåned"
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
          id="Lønnsendring.fullEnMåned"
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
          id="Lønnsendring.fullToMåned"
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
  const unikeScenario = opplysninger
    .map(o => o.lønnsendringscenario)
    .filter((it, index, self) => index === self.findIndex(t => t === it));
  return unikeScenario.map(scenario => (
    <p key={scenario}>
      {finnScenarioTekst(scenario, skjeringstidspunktDato, opplysninger, arbeidsgiverOpplysningerPerId)}
    </p>
  ));
}

/**
 * Lønnsendring
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */

export const Lønnsendring = ({
  skjeringstidspunktDato,
  lønnsendringSaksopplysning,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const intl = useIntl();
  const tittel = intl.formatMessage({ id: 'SkjeringspunktOgStatusPanel.LonnsendringSisteTreMan' });
  return (
    <ExpansionCard size="small" aria-label={tittel}>
      <ExpansionCard.Header>
        <ExpansionCard.Title size="small">{tittel}</ExpansionCard.Title>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        {lagLesMer(lønnsendringSaksopplysning, skjeringstidspunktDato, arbeidsgiverOpplysningerPerId)}
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};
