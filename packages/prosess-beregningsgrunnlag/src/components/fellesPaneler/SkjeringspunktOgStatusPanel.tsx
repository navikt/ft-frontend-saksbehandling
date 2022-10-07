import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { EtikettInfo } from 'nav-frontend-etiketter';

import { getKodeverknavnFn } from '@navikt/ft-utils';
import { DateLabel, VerticalSpacer, FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { KodeverkType } from '@navikt/ft-kodeverk';
import { AlleKodeverk } from '@navikt/ft-types';

import { BodyShort } from '@navikt/ds-react';
import styles from './skjeringspunktOgStatusPanel.less';
import beregningStyles from '../beregningsgrunnlagPanel/beregningsgrunnlag.less';

type statusObjekt = {
  visningsNavn: string;
  kode: string;
  className: string;
};

const createStatusEtiketter = (
  listeMedStatuser: string[],
  getKodeverknavn: (kode: string, kodeverk: KodeverkType) => string,
): ReactElement => {
  const statusList = [] as statusObjekt[];
  const unikeStatuser = listeMedStatuser.filter((status, index, self) => index === self.findIndex(t => t === status));
  unikeStatuser.forEach(status => {
    const statusName = getKodeverknavn(status, KodeverkType.AKTIVITET_STATUS);
    statusList.push({ visningsNavn: statusName, kode: status, className: `statusFarge${status}` });
  });
  statusList.sort((a, b) => (a.visningsNavn > b.visningsNavn ? 1 : -1));
  // TODO Tag fungerer ikke med egen styling, må undersøke hvorfor
  return (
    <>
      {statusList.map(status => (
        <EtikettInfo key={status.visningsNavn} className={styles[status.className]} title={status.visningsNavn}>
          {status.visningsNavn}
        </EtikettInfo>
      ))}
    </>
  );
};

type OwnProps = {
  skjeringstidspunktDato: string;
  aktivitetStatusList: string[];
  alleKodeverk: AlleKodeverk;
};

/**
 * SkjeringspunktOgStatusPanel
 *
 * Viser skjæringstidspunkt for beregningen og en liste med aktivitetsstatuser.
 */

const SkjeringspunktOgStatusPanel: FunctionComponent<OwnProps> = ({
  skjeringstidspunktDato,
  aktivitetStatusList,
  alleKodeverk,
}) => {
  const getKodeverknavn = getKodeverknavnFn(alleKodeverk);
  return (
    <div className={beregningStyles.panelLeft}>
      {createStatusEtiketter(aktivitetStatusList, getKodeverknavn)}
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <BodyShort size="small">
              <FormattedMessage id="Beregningsgrunnlag.Skjeringstidspunkt.SkjeringForBeregning" />
            </BodyShort>
          </FlexColumn>
          <FlexColumn>
            <BodyShort size="small" className={beregningStyles.semiBoldText}>
              <DateLabel dateString={skjeringstidspunktDato} />
            </BodyShort>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default SkjeringspunktOgStatusPanel;
