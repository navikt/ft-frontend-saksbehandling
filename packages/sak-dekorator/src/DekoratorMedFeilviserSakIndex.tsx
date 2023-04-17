import React, { FunctionComponent, useState, useMemo, useCallback, useEffect, useRef, RefObject } from 'react';
import { RawIntlProvider } from 'react-intl';
import { BoxedListWithLinks, Header, Popover, SystemButton, UserPanel } from '@navikt/ft-plattform-komponenter';
import { createIntl } from '@navikt/ft-utils';
import { RETTSKILDE_URL } from '@navikt/ft-konstanter';

import FeilmeldingPanel from './components/FeilmeldingPanel';
import Feilmelding from './typer/feilmeldingTsType';

import messages from '../i18n/nb_NO.json';

import styles from './dekoratorMedFeilviserSakIndex.module.css';

const intl = createIntl(messages);

const useOutsideClickEvent = (
  erLenkepanelApent: boolean,
  setLenkePanelApent: (erApent: boolean) => void,
): RefObject<HTMLDivElement> => {
  const wrapperRef = useRef<any>(null);
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setLenkePanelApent(false);
      }
    },
    [wrapperRef.current],
  );

  useEffect(() => {
    if (erLenkepanelApent) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [erLenkepanelApent]);

  return wrapperRef;
};

interface OwnProps {
  tittel: string;
  tittelLenke?: string;
  visSaksbehandlerside?: (event: React.SyntheticEvent) => void;
  visAvdelingslederside?: (event: React.SyntheticEvent) => void;
  visJournalføringside?: (event: React.SyntheticEvent) => void;
  navAnsattNavn?: string;
  systemrutineUrl: string;
  kanOppgavestyre?: boolean;
  kanJournalføre?: boolean;
  feilmeldinger: Feilmelding[];
  fjernFeilmeldinger: () => void;
  setSiteHeight: (height: number) => void;
}

/**
 * DekoratorMedFeilviserSakIndex
 *
 * Definerer header-linjen som alltid vises øverst nettleservinduet.
 * Denne viser lenke tilbake til hovedsiden, nettside-navnet, NAV-ansatt navn og lenke til rettskildene og systemrutinen.
 * I tillegg vil den vise potensielle feilmeldinger i ErrorMessagePanel.
 */
const DekoratorMedFeilviserSakIndex: FunctionComponent<OwnProps> = ({
  tittel,
  tittelLenke,
  visSaksbehandlerside,
  visAvdelingslederside,
  visJournalføringside,
  navAnsattNavn = '',
  systemrutineUrl,
  kanOppgavestyre,
  kanJournalføre,
  feilmeldinger,
  fjernFeilmeldinger,
  setSiteHeight,
}) => {
  const [erLenkepanelApent, setLenkePanelApent] = useState(false);
  const wrapperRef = useOutsideClickEvent(erLenkepanelApent, setLenkePanelApent);

  const fixedHeaderRef = useRef<any>();
  useEffect(() => {
    setSiteHeight(fixedHeaderRef.current.clientHeight);
  }, [feilmeldinger.length]);

  const lenkerFormatertForBoxedList = useMemo(() => {
    const items = [
      {
        name: intl.formatMessage({ id: 'DekoratorMedFeilviserSakIndex.Rettskilde' }),
        href: RETTSKILDE_URL,
        isExternal: true,
      },
      {
        name: intl.formatMessage({ id: 'DekoratorMedFeilviserSakIndex.Systemrutine' }),
        href: systemrutineUrl,
        isExternal: true,
      },
    ];
    if (kanOppgavestyre) {
      items.push({
        name: intl.formatMessage({ id: 'DekoratorMedFeilviserSakIndex.Avdelingsleder' }),
        href: '#',
        isExternal: false,
      });
    }
    if (kanJournalføre) {
      items.push({
        name: intl.formatMessage({ id: 'DekoratorMedFeilviserSakIndex.Journalforing' }),
        href: '#',
        isExternal: false,
      });
    }
    return items;
  }, [kanOppgavestyre, systemrutineUrl, kanJournalføre]);

  const popperPropsChildren = useCallback(
    () => (
      <BoxedListWithLinks
        items={lenkerFormatertForBoxedList}
        onClick={(index, e) => {
          setLenkePanelApent(false);

          if (index === 2 && visAvdelingslederside) {
            visAvdelingslederside(e);
          }
          if (index === 2 && !visAvdelingslederside && visJournalføringside) {
            visJournalføringside(e);
          }
          if (index === 3 && visJournalføringside) {
            visJournalføringside(e);
          }
        }}
      />
    ),
    [],
  );

  const referencePropsChildren = useCallback(
    // @ts-ignore Fiks
    ({ ref }) => (
      <div ref={ref}>
        <SystemButton
          onClick={() => {
            setLenkePanelApent(!erLenkepanelApent);
          }}
          isToggled={erLenkepanelApent}
        />
      </div>
    ),
    [erLenkepanelApent],
  );

  return (
    <header ref={fixedHeaderRef} className={styles.container}>
      <RawIntlProvider value={intl}>
        <div ref={wrapperRef}>
          <Header title={tittel} titleHref={tittelLenke} changeLocation={visSaksbehandlerside}>
            <Popover
              popperIsVisible={erLenkepanelApent}
              renderArrowElement
              customPopperStyles={{ top: '11px', zIndex: 1 }}
              popperProps={{
                children: popperPropsChildren,
                placement: 'bottom-start',
                strategy: 'fixed',
              }}
              referenceProps={{
                children: referencePropsChildren,
              }}
            />
            <UserPanel name={navAnsattNavn} />
          </Header>
        </div>
        <FeilmeldingPanel fjernFeilmeldinger={fjernFeilmeldinger} feilmeldinger={feilmeldinger} />
      </RawIntlProvider>
    </header>
  );
};

export default DekoratorMedFeilviserSakIndex;
