import React, { FunctionComponent } from 'react';
import { Row } from 'nav-frontend-grid';
import { Image } from '@navikt/ft-ui-komponenter';

import { Kjønnkode } from '@navikt/ft-types';
import { NavBrukerKjonn } from '@navikt/ft-kodeverk';
import { createIntl } from '@navikt/ft-utils';

import urlMann from '../images/mann.svg';
import urlKvinne from '../images/kvinne.svg';
import messages from '../../i18n/nb_NO.json';

import styles from './timeLineSokerEnsamSoker.less';

const intl = createIntl(messages);

const isKvinne = (kode: string): boolean => kode === NavBrukerKjonn.KVINNE;

/**
 * TimeLineSoker
 *
 * Presentationskomponent. Viser korrekt ikon for soker/medsoker
 */
const TimeLineSokerEnsamSoker: FunctionComponent<{ hovedsokerKjonnKode: Kjønnkode }> = ({ hovedsokerKjonnKode }) => (
  <div className={styles.timelineSokerContatinerEnsamSoker}>
    <Row>
      <Image
        className={styles.iconHovedsoker}
        src={isKvinne(hovedsokerKjonnKode) ? urlKvinne : urlMann}
        alt={intl.formatMessage({ id: 'Person.ImageText' })}
        tooltip={intl.formatMessage({ id: isKvinne(hovedsokerKjonnKode) ? 'Person.Woman' : 'Person.Man' })}
      />
    </Row>
  </div>
);

export default TimeLineSokerEnsamSoker;
