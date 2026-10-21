import { useIntl } from 'react-intl';

import { ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon } from '@navikt/aksel-icons';
import { Button, HStack, ToggleGroup } from '@navikt/ds-react';

import {
  erTidslinjeUtvidelse,
  type TidslinjeUtvidelse,
} from './tidslinjeUtvidelser';

interface TimelineToolbarProps {
  visNestePeriode: () => void;
  visForrigePeriode: () => void;
  aktivUtvidelse: TidslinjeUtvidelse | '';
  kanZoomeInn: boolean;
  velgUtvidelse: (value: TidslinjeUtvidelse) => void;
  zoomInn: () => void;
  zoomUt: () => void;
}

export const TimelineToolbar = ({
  velgUtvidelse,
  visNestePeriode,
  visForrigePeriode,
  aktivUtvidelse,
  kanZoomeInn,
  zoomInn,
  zoomUt,
}: TimelineToolbarProps) => {
  const intl = useIntl();

  return (
    <HStack gap="space-12" align="center" aria-controls="timeline-dynamic" id="timeline-toolbar">
      <HStack gap="space-2" align="center">
        <Button
          data-color="neutral"
          icon={<PlusIcon title={intl.formatMessage({ id: 'TimelineToolbar.ZoomInn' })} />}
          variant="secondary"
          size="small"
          type="button"
          disabled={!kanZoomeInn}
          onClick={zoomInn}
        />
        <Button
          data-color="neutral"
          icon={<MinusIcon title={intl.formatMessage({ id: 'TimelineToolbar.ZoomUt' })} />}
          variant="secondary"
          size="small"
          type="button"
          onClick={zoomUt}
        />
      </HStack>
      <HStack gap="space-2" align="center">
        <Button
          data-color="neutral"
          icon={<ChevronLeftIcon title={intl.formatMessage({ id: 'TimelineToolbar.ForrigePeriode' })} />}
          variant="secondary"
          size="small"
          type="button"
          onClick={visForrigePeriode}
        />
        <Button
          data-color="neutral"
          icon={<ChevronRightIcon title={intl.formatMessage({ id: 'TimelineToolbar.NestePeriode' })} />}
          variant="secondary"
          size="small"
          type="button"
          onClick={visNestePeriode}
        />
      </HStack>
      <ToggleGroup
        data-color="neutral"
        size="small"
        value={aktivUtvidelse}
        onChange={value => {
          if (erTidslinjeUtvidelse(value)) {
            velgUtvidelse(value);
          }
        }}
      >
        <ToggleGroup.Item
          value={'4' satisfies TidslinjeUtvidelse}
          label={intl.formatMessage({ id: 'TimelineToolbar.AntallMåneder' }, { antall: 4 })}
        />
        <ToggleGroup.Item
          value={'8' satisfies TidslinjeUtvidelse}
          label={intl.formatMessage({ id: 'TimelineToolbar.AntallMåneder' }, { antall: 8 })}
        />
        <ToggleGroup.Item
          value={'12' satisfies TidslinjeUtvidelse}
          label={intl.formatMessage({ id: 'TimelineToolbar.AntallMåneder' }, { antall: 12 })}
        />
      </ToggleGroup>
    </HStack>
  );
};
