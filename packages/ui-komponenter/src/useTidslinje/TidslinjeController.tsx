import { ChevronLeftIcon, ChevronRightIcon } from '@navikt/aksel-icons';
import { Button, HStack } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import { TidslinjeZoomKnapper } from '../TidslinjeZoomKnapper';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface TidslinjeControllerProps {
  id: string;
  'aria-controls': string;
  kanZoomeInn: boolean;
  onNeste: () => void;
  onForrige: () => void;
  onZoomInn: () => void;
  onZoomUt: () => void;
}

export const TidslinjeController = ({
  id,
  'aria-controls': ariaControls,
  kanZoomeInn,
  onNeste,
  onForrige,
  onZoomInn,
  onZoomUt,
}: TidslinjeControllerProps) => {
  return (
    <HStack gap="space-12" align="center" aria-controls={ariaControls} id={id}>
      <TidslinjeZoomKnapper onZoomInn={onZoomInn} onZoomUt={onZoomUt} kanZoomeInn={kanZoomeInn} />
      <HStack gap="space-2" align="center">
        <Button
          data-color="neutral"
          icon={<ChevronLeftIcon title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ScrollTilVenstre' })} />}
          variant="secondary"
          size="small"
          type="button"
          onClick={onForrige}
        />
        <Button
          data-color="neutral"
          icon={<ChevronRightIcon title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ScrollTilHøyre' })} />}
          variant="secondary"
          size="small"
          type="button"
          onClick={onNeste}
        />
      </HStack>
    </HStack>
  );
};
