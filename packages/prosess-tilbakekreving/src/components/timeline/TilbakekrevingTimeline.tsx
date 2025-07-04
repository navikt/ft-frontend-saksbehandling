import { type ReactElement, useState } from 'react';
import { useIntl } from 'react-intl';

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckmarkCircleIcon,
  ExclamationmarkTriangleIcon,
  FigureCombinationIcon,
  FigureOutwardFillIcon,
  MinusIcon,
  PlusIcon,
  SilhouetteFillIcon,
  XMarkOctagonIcon,
} from '@navikt/aksel-icons';
import { Button, HStack, Timeline, VStack } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { RelasjonsRolleType } from '@navikt/ft-kodeverk';

import type { KodeverkMedNavn } from '../../types/kodeverkMedNavn';
import type { TidslinjePeriode } from '../../types/TidslinjePeriode';

import styles from './tilbakekrevingTimeline.module.css';

type Periode = {
  id: number;
  fom: string;
  tom: string;
  status: 'success' | 'danger' | 'warning';
};

const PERIODE_STATUS_IKON_MAP = {
  danger: <XMarkOctagonIcon />,
  success: <CheckmarkCircleIcon />,
  warning: <ExclamationmarkTriangleIcon />,
} as Record<string, ReactElement>;

const sortByDate = (a: TidslinjePeriode, b: TidslinjePeriode) => {
  if (a.fom < b.fom) {
    return -1;
  }
  if (a.fom > b.fom) {
    return 1;
  }
  return 0;
};

const finnStatus = (periode: TidslinjePeriode): 'success' | 'danger' | 'warning' => {
  const status = periode.isGodkjent ? 'success' : 'danger';
  return periode.isAksjonspunktOpen ? 'warning' : status;
};

const formaterPerioder = (periodItems: TidslinjePeriode[] = []): Periode[] =>
  [...periodItems].sort(sortByDate).map(p => ({
    ...p,
    status: finnStatus(p),
  }));

const finnIkonGittRelasjon = (relasjonsRolleType: string): ReactElement => {
  if (relasjonsRolleType === RelasjonsRolleType.MOR || relasjonsRolleType === RelasjonsRolleType.MEDMOR) {
    return <FigureOutwardFillIcon width={20} height={20} color="var(--a-red-200)" />;
  }
  if (relasjonsRolleType === RelasjonsRolleType.FAR) {
    return <SilhouetteFillIcon width={20} height={20} color="var(--a-blue-600)" />;
  }
  return <FigureCombinationIcon width={20} height={20} />;
};

export interface Props {
  perioder: TidslinjePeriode[];
  valgtPeriode?: TidslinjePeriode;
  setPeriode: (periode?: TidslinjePeriode) => void;
  relasjonsRolleType: RelasjonsRolleType;
  relasjonsRolleTypeKodeverk: KodeverkMedNavn<RelasjonsRolleType>[];
}

/**
 * TilbakekrevingTimeLine
 *
 * Masserer data og populerer felten samt formatterar tidslinjen for tilbakekreving
 */
export const TilbakekrevingTimeline = ({
  perioder,
  valgtPeriode,
  setPeriode,
  relasjonsRolleType,
  relasjonsRolleTypeKodeverk,
}: Props) => {
  const intl = useIntl();

  const formatertePerioder = formaterPerioder(perioder);

  const velgPeriode = (id: number): void => {
    const periode = perioder.find(p => p.id === id);
    if (periode) {
      setPeriode(periode);
    }
  };

  const originalFomDato = dayjs(formatertePerioder[0].fom);
  const originalTomDato = dayjs(formatertePerioder[formatertePerioder.length - 1].tom);

  const [fomDato, setFomDato] = useState(originalFomDato);
  const [tomDato, setTomDato] = useState(originalTomDato);

  const goBackward = () => {
    if (!fomDato.subtract(1, 'month').isBefore(originalFomDato)) {
      setFomDato(fomDato.subtract(1, 'month'));
      setTomDato(tomDato.subtract(1, 'month'));
    }
  };

  const goForward = () => {
    if (!tomDato.add(1, 'month').isAfter(originalTomDato)) {
      setFomDato(fomDato.add(1, 'month'));
      setTomDato(tomDato.add(1, 'month'));
    }
  };

  const zoomIn = () => {
    if (!fomDato.add(3, 'month').isAfter(tomDato)) {
      setFomDato(fomDato.add(1, 'month'));
      setTomDato(tomDato.subtract(1, 'month'));
    }
  };

  const zoomOut = () => {
    if (tomDato.add(1, 'month').diff(fomDato.subtract(1, 'month'), 'months') < 36) {
      setFomDato(fomDato.subtract(1, 'month'));
      setTomDato(tomDato.add(1, 'month'));
    }
  };

  return (
    <VStack gap="4">
      <Timeline startDate={dayjs(fomDato).toDate()} endDate={dayjs(tomDato).add(1, 'days').toDate()}>
        <Timeline.Row
          label={relasjonsRolleTypeKodeverk.find(k => k.kode === relasjonsRolleType)?.navn || '-'}
          icon={finnIkonGittRelasjon(relasjonsRolleType)}
        >
          {formatertePerioder.map(periode => (
            <Timeline.Period
              key={periode.id}
              start={dayjs(periode.fom).toDate()}
              end={dayjs(periode.tom).toDate()}
              status={periode.status}
              icon={PERIODE_STATUS_IKON_MAP[periode.status]}
              onSelectPeriod={() => velgPeriode(periode.id)}
              isActive={valgtPeriode?.id === periode.id}
              aria-controls="panel-tilbakekreving"
              id={periode.id.toString()}
            />
          ))}
        </Timeline.Row>
      </Timeline>
      <HStack justify="end">
        <Button
          className={styles.margin}
          size="small"
          icon={<PlusIcon aria-hidden />}
          onClick={zoomIn}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ZoomInn' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<MinusIcon aria-hidden />}
          onClick={zoomOut}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ZoomUt' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<ArrowLeftIcon aria-hidden />}
          onClick={goBackward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ScrollTilVenstre' })}
        />
        <Button
          className={styles.margin}
          size="small"
          icon={<ArrowRightIcon aria-hidden />}
          onClick={goForward}
          variant="primary-neutral"
          type="button"
          title={intl.formatMessage({ id: 'TilbakekrevingTimeline.ScrollTilHogre' })}
        />
      </HStack>
    </VStack>
  );
};
