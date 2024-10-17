import React from 'react';
import { BodyShort } from '@navikt/ds-react';
import VisittKort from './VisittKort';
import GenderIcon from './GenderIcon';

interface Props {
  namePlaceholder: string;
}

const EmptyPersonCard = ({ namePlaceholder }: Props) => (
  <VisittKort icon={<GenderIcon />}>
    <BodyShort textColor="subtle" truncate style={{ minWidth: '80px' }}>
      {namePlaceholder}
    </BodyShort>
  </VisittKort>
);

export default EmptyPersonCard;
