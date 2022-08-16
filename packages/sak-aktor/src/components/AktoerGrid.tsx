import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import Lenkepanel from 'nav-frontend-lenkepanel';
import { getKodeverknavnFn } from '@navikt/ft-utils';
import VisittkortSakIndex from '@navikt/ft-sak-visittkort';
import { Fagsak, FagsakPerson, AlleKodeverk } from '@navikt/ft-types';
import { KodeverkType, RelasjonsRolleType } from '@navikt/ft-kodeverk';

import styles from './aktoerGrid.less';

interface OwnProps {
  aktorInfo: {
    fagsaker: Fagsak[];
    person: FagsakPerson;
  };
  alleKodeverk: AlleKodeverk;
  renderSomLenke: (className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement;
}

const AktoerGrid: FunctionComponent<OwnProps> = ({ aktorInfo, alleKodeverk, renderSomLenke }) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
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
          aktorInfo.fagsaker.map(fagsak => (
            <Lenkepanel
              linkCreator={props => renderSomLenke(props.className, props.children, fagsak.saksnummer)}
              key={fagsak.saksnummer}
              href="#"
              tittelProps="normaltekst"
            >
              {getKodeverknavn(fagsak.fagsakYtelseType, KodeverkType.FAGSAK_YTELSE)}
              {` (${fagsak.saksnummer}) `}
              {getKodeverknavn(fagsak.status, KodeverkType.FAGSAK_STATUS)}
            </Lenkepanel>
          ))
        ) : (
          <FormattedMessage id="AktoerGrid.IngenFagsaker" />
        )}
      </div>
    </>
  );
};

export default AktoerGrid;
