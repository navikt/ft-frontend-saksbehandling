import { ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { Button, HStack } from '@navikt/ds-react';

import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

export interface TidslinjeControllerProps {
  id: string;
  'aria-controls': string;
  kanGåFremover: boolean;
  kanGåBakover: boolean;
  kanZoomeInn: boolean;
  kanZoomeUt: boolean;
  onNeste: () => void;
  onForrige: () => void;
  onZoomInn: () => void;
  onZoomUt: () => void;
}

export const TidslinjeController = ({
  id,
  'aria-controls': ariaControls,
  kanGåFremover,
  kanGåBakover,
  kanZoomeInn,
  kanZoomeUt,
  onNeste,
  onForrige,
  onZoomInn,
  onZoomUt,
}: TidslinjeControllerProps) => {
  return (
    <HStack gap="space-12" align="center" aria-controls={ariaControls} id={id}>
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
          disabled={!kanZoomeUt}
          onClick={onZoomUt}
        />
      </HStack>
      <HStack gap="space-2" align="center">
        <Button
          data-color="neutral"
          icon={<ChevronLeftIcon title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ScrollTilVenstre' })} />}
          variant="secondary"
          size="small"
          type="button"
          disabled={!kanGåBakover}
          onClick={onForrige}
        />
        <Button
          data-color="neutral"
          icon={<ChevronRightIcon title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ScrollTilHøyre' })} />}
          variant="secondary"
          size="small"
          type="button"
          disabled={!kanGåFremover}
          onClick={onNeste}
        />
      </HStack>
    </HStack>
  );
};
