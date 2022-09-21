import React from 'react';

import { Image, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';
import { NavBrukerKjonn } from '@navikt/ft-kodeverk';
import { Kjønnkode } from '@navikt/ft-types';

import urlMann from '../images/mann.svg';
import urlUkjent from '../images/ukjent.svg';
import urlKvinne from '../images/kvinne.svg';

import messages from '../../i18n/nb_NO.json';

import styles from './timeLineSoker.less';

const intl = createIntl(messages);

interface TimeLineSokerProps {
  soker1KjonnKode: Kjønnkode;
  soker2KjonnKode: Kjønnkode;
}

const getKjønn = (kode: string) => {
  switch (kode) {
    case NavBrukerKjonn.KVINNE:
      return { src: urlKvinne, title: 'Person.Woman' };
    case NavBrukerKjonn.MANN:
      return { src: urlMann, title: 'Person.Man' };
    case NavBrukerKjonn.UDEFINERT:
      return { src: urlUkjent, title: 'Person.Unknown' };
    default:
      return { src: urlUkjent, title: 'Person.Unknown' };
  }
};

/**
 * TimeLineSoker
 *
 * Presentationskomponent. Viser korrekt ikon for soker/medsoker
 */
const TimeLineSoker: React.FunctionComponent<TimeLineSokerProps> = ({ soker1KjonnKode, soker2KjonnKode }) => (
  <div className={styles.timelineSokerContatiner}>
    <Image
      className={styles.iconHovedsoker}
      src={getKjønn(soker1KjonnKode).src}
      alt={intl.formatMessage({ id: 'Person.ImageText' })}
      tooltip={intl.formatMessage({ id: getKjønn(soker1KjonnKode).title })}
    />
    <VerticalSpacer fourPx />
    <Image
      className={styles.iconMedsoker}
      src={getKjønn(soker2KjonnKode).src}
      alt={intl.formatMessage({ id: 'Person.ImageText' })}
      tooltip={intl.formatMessage({ id: getKjønn(soker2KjonnKode).title })}
    />
  </div>
);

export default TimeLineSoker;
