import { MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { Button, HStack } from '@navikt/ds-react';

interface TidslinjeZoomKnapperProps {
  onZoomInn: () => void;
  onZoomUt: () => void;
  kanZoomeInn: boolean;
  zoomInnLabel: string;
  zoomUtLabel: string;
}

export const TidslinjeZoomKnapper = ({
  onZoomInn,
  onZoomUt,
  kanZoomeInn,
  zoomInnLabel,
  zoomUtLabel,
}: TidslinjeZoomKnapperProps) => (
  <HStack gap="space-2" align="center">
    <Button
      data-color="neutral"
      icon={<PlusIcon title={zoomInnLabel} />}
      variant="secondary"
      size="small"
      type="button"
      disabled={!kanZoomeInn}
      onClick={onZoomInn}
    />
    <Button
      data-color="neutral"
      icon={<MinusIcon title={zoomUtLabel} />}
      variant="secondary"
      size="small"
      type="button"
      onClick={onZoomUt}
    />
  </HStack>
);
