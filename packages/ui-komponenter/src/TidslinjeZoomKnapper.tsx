import { MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { Button, HStack } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface TidslinjeZoomKnapperProps {
  onZoomInn: () => void;
  onZoomUt: () => void;
  kanZoomeInn: boolean;
}

export const TidslinjeZoomKnapper = ({ onZoomInn, onZoomUt, kanZoomeInn }: TidslinjeZoomKnapperProps) => (
  <HStack gap="space-2" align="center">
    <Button
      data-color="neutral"
      icon={<PlusIcon title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ZoomInn' })} />}
      variant="secondary"
      size="small"
      type="button"
      disabled={!kanZoomeInn}
      onClick={onZoomInn}
    />
    <Button
      data-color="neutral"
      icon={<MinusIcon title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ZoomUt' })} />}
      variant="secondary"
      size="small"
      type="button"
      onClick={onZoomUt}
    />
  </HStack>
);
