import React from 'react';
import { bemUtils } from '@navikt/ft-utils';
import { BodyShort } from '@navikt/ds-react';
import Card from './Card';
import GenderIcon from './GenderIcon';
import styles from './personCard.module.css';

const personCardCls = bemUtils('personCard');

interface EmptyPersonCard {
  namePlaceholder: string;
}

const EmptyPersonCard: React.FC<EmptyPersonCard> = ({ namePlaceholder }) => (
  <Card>
    <div className={styles[personCardCls.element('container')]}>
      <GenderIcon />
      <BodyShort size="small" as="p" className={styles[personCardCls.element('namePlaceholder')]}>
        {namePlaceholder}
      </BodyShort>
    </div>
  </Card>
);

export default EmptyPersonCard;
