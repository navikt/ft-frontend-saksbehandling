import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { LinkPanel } from '@navikt/ds-react';
import { VisittkortSakIndex } from '@navikt/ft-sak-visittkort';
import { Fagsak, FagsakPerson } from '@navikt/ft-types';
import { RelasjonsRolleType } from '@navikt/ft-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import KodeverkForPanel from '../typer/kodeverkForPanel';

import styles from './aktoerGrid.module.css';

interface OwnProps {
  aktorInfo: {
    fagsaker: Fagsak[];
    person: FagsakPerson;
  };
  kodeverkForPanel: KodeverkForPanel;
  renderSomLenke: (className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement;
}

const AktoerGrid: FunctionComponent<OwnProps> = ({ aktorInfo, kodeverkForPanel, renderSomLenke }) => {
  const vFagsak =
    aktorInfo.fagsaker.length > 0 ? aktorInfo.fagsaker[0] : { relasjonsRolleType: RelasjonsRolleType.MOR };

  return (
    <>
      <VisittkortSakIndex
        fagsak={vFagsak as Fagsak}
        fagsakPersoner={{
          bruker: aktorInfo.person,
        }}
      />
      <div className={styles.list}>
        {aktorInfo.fagsaker.length ? (
          aktorInfo.fagsaker.map(fagsak => {
            const fagsakYtelseNavn = kodeverkForPanel.FagsakYtelseType.find(
              s => s.kode === fagsak.fagsakYtelseType,
            )?.navn;
            const fagsakStatusNavn = kodeverkForPanel.FagsakStatus.find(s => s.kode === fagsak.status)?.navn;
            return (
              <React.Fragment key={fagsak.saksnummer}>
                <LinkPanel href="#">
                  <LinkPanel.Title>
                    {renderSomLenke(
                      undefined,
                      `${fagsakYtelseNavn} (${fagsak.saksnummer}) ${fagsakStatusNavn}`,
                      fagsak.saksnummer,
                    )}
                  </LinkPanel.Title>
                </LinkPanel>
                <VerticalSpacer sixteenPx />
              </React.Fragment>
            );
          })
        ) : (
          <FormattedMessage id="AktoerGrid.IngenFagsaker" />
        )}
      </div>
    </>
  );
};

export default AktoerGrid;
