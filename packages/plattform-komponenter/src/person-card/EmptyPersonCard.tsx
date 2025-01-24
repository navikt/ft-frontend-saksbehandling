import { BodyShort } from '@navikt/ds-react';
import { GenderIcon } from './GenderIcon';
import { VisittKort } from './VisittKort';

interface Props {
  namePlaceholder: string;
}

export const EmptyPersonCard = ({ namePlaceholder }: Props) => (
  <VisittKort icon={<GenderIcon />}>
    <BodyShort textColor="subtle" truncate style={{ minWidth: '80px' }}>
      {namePlaceholder}
    </BodyShort>
  </VisittKort>
);
