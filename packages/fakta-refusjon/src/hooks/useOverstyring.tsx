import { type JSX, useState } from 'react';

import { KeyVerticalFillIcon, KeyVerticalIcon } from '@navikt/aksel-icons';
import { Button } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface UseOverstyringProps {
  /**
   * Panelets lesemodus. true sperrer redigering og skjuler overstyringKnapp.
   * Tidligere overstyringer kan vises i lesemodus.
   */
  readOnly: boolean;
  /**
   * Om brukeren har overstyringsrolle. Her skal ikke readOnly sendes inn.
   * Uten overstyringsrolle kan brukeren bare se innholdet skrivebeskyttet.
   */
  erOverstyrer: boolean;
  /**
   * Om det finnes et utført overstyringsaksjonspunkt (UTFO).
   * Aksjonspunktet finnes først etter innsending av første overstyring.
   * Skal ikke settes ut fra endringer i det åpne skjemaet.
   * true gjør historikken synlig og fjerner avbrytknappen ved redigering.
   */
  harVærtOverstyrt: boolean;
  /**
   * Om overstyringen skal være redigerbar, styrt av kalleren. Utelat for lokal tilstand.
   * Når verdien er satt, må kalleren oppdatere den via aktiverOverstyring og
   * avbrytOverstyring. Hooket endrer den ikke selv.
   * true gir ikke redigeringstilgang i lesemodus eller uten overstyringsrolle.
   */
  erOverstyringRedigerbar?: boolean;
  /**
   * Varsles ved tillatt aktivering via Overstyr-knappen, ikke ved automatisk oppstart.
   * I kontrollert modus må callbacken sette erOverstyringRedigerbar til true.
   * I lokal modus oppdaterer hooket tilstanden selv.
   */
  onAktiverOverstyring?: () => void;
  /**
   * Varsles ved tillatt avbryt. Kalleren må selv tilbakestille skjemadata;
   * hooket forkaster ikke endringer i skjemaet.
   * I kontrollert modus må callbacken også sette erOverstyringRedigerbar
   * til false. I lokal modus avslutter hooket redigeringen selv.
   */
  onAvbrytOverstyring?: () => void;
  /**
   * Om innsending pågår. Deaktiverer knappen og blokkerer aktivering og avbryt.
   * Endrer ikke synlighet eller om overstyringen er redigerbar, og skrivebeskytter ikke feltene.
   * Standardverdi er false.
   */
  isSubmitting?: boolean;
}

export interface UseOverstyringResult {
  /**
   * Om overstyringen faktisk er redigerbar. Krever både ønsket redigering
   * og overstyringsrolle i et skrivbart panel.
   * Er alltid false når readOnly er true eller erOverstyrer er false.
   */
  erOverstyringRedigerbar: boolean;
  /**
   * Om overstyringsfeltene skal være skrivebeskyttet. Bruk på skjemaets readOnly-prop.
   * Er motsatt av erOverstyringRedigerbar og sier ikke om innholdet skal vises.
   */
  erOverstyringReadOnly: boolean;
  /**
   * Om overstyringsinnholdet skal vises. true ved tidligere overstyring eller når
   * lokal eller kontrollert tilstand ber om redigering.
   * Kan være true selv om brukeren mangler redigeringstilgang.
   * Bruk erOverstyringReadOnly til å styre om innholdet kan redigeres.
   */
  visOverstyring: boolean;
  /**
   * Overstyr-knapp når brukeren har tilgang, men redigering er avslått.
   * Ved aktiv førstegangsoverstyring vises Avbryt overstyring.
   * Ved aktiv redigering av tidligere overstyring returneres null.
   * Er også null i lesemodus eller uten overstyringsrolle.
   * Knappen er deaktivert mens isSubmitting er true.
   */
  overstyringKnapp: JSX.Element | null;
}

/**
 * Håndterer synlighet og om overstyringen er redigerbar, uten å eie skjemadata.
 * I lokal modus krever førstegangsoverstyring et klikk på Overstyr.
 * Ved tidligere overstyring starter redigering automatisk for overstyrere i et skrivbart panel.
 * Senere endringer i tilgang initialiserer ikke den lokale tilstanden på nytt.
 */
export const useOverstyring = ({
  readOnly,
  erOverstyrer,
  harVærtOverstyrt,
  erOverstyringRedigerbar: kontrollertOverstyring,
  onAktiverOverstyring: onAktiverOverstyring,
  onAvbrytOverstyring: onAvbrytOverstyring,
  isSubmitting = false,
}: UseOverstyringProps): UseOverstyringResult => {
  const kanOverstyre = erOverstyrer && !readOnly;
  const [lokalOverstyring, setLokalOverstyring] = useState(kanOverstyre && harVærtOverstyrt);
  const ønsketOverstyring = kontrollertOverstyring ?? lokalOverstyring;
  const erOverstyringRedigerbar = kanOverstyre && ønsketOverstyring;

  const aktiverOverstyring = () => {
    if (!kanOverstyre || erOverstyringRedigerbar || isSubmitting) {
      return;
    }
    if (kontrollertOverstyring === undefined) {
      setLokalOverstyring(true);
    }
    onAktiverOverstyring?.();
  };

  const avbrytOverstyring = () => {
    if (!erOverstyringRedigerbar || harVærtOverstyrt || isSubmitting) {
      return;
    }
    if (kontrollertOverstyring === undefined) {
      setLokalOverstyring(false);
    }
    onAvbrytOverstyring?.();
  };

  return {
    erOverstyringRedigerbar,
    erOverstyringReadOnly: !erOverstyringRedigerbar,
    visOverstyring: harVærtOverstyrt || ønsketOverstyring,
    overstyringKnapp:
      !kanOverstyre || (erOverstyringRedigerbar && harVærtOverstyrt) ? null : erOverstyringRedigerbar ? (
        <Button
          type="button"
          variant="tertiary"
          size="small"
          icon={<KeyVerticalFillIcon aria-hidden />}
          onClick={avbrytOverstyring}
          disabled={isSubmitting}
        >
          {intl.formatMessage({ id: 'OverstyringKnapp.Avbryt' })}
        </Button>
      ) : (
        <Button
          type="button"
          variant="tertiary"
          size="small"
          icon={<KeyVerticalIcon title={intl.formatMessage({ id: 'OverstyringKnapp.Overstyring' })} />}
          onClick={aktiverOverstyring}
          disabled={isSubmitting}
        />
      ),
  };
};
