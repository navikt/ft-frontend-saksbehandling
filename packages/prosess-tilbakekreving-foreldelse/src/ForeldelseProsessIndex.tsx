import React, { FunctionComponent, useState } from 'react';
import { BodyShort, Timeline } from '@navikt/ds-react';
import { PiggybankIcon, VirusIcon, PencilIcon, ParasolBeachIcon, PersonIcon, HospitalIcon } from '@navikt/aksel-icons';

const person = [
  {
    id: 1,
    start: new Date('Jan 1 2022'),
    end: new Date('Jan 31 2022'),
    status: 'warning',
    icon: <PencilIcon aria-hidden />,
    statusLabel: 'Sykemeldt',
  },
  {
    id: 2,
    start: new Date('Apr 1 2022'),
    end: new Date('Apr 30 2022'),
    status: 'neutral',
    icon: <ParasolBeachIcon aria-hidden />,
    label: 'test',
    statusLabel: 'Ferie',
  },
  {
    id: 3,
    start: new Date('Jul 1 2022'),
    end: new Date('Jul 31 2022'),
    status: 'warning',
    icon: <PencilIcon aria-hidden />,
    statusLabel: 'Sykemeldt',
  },
  {
    id: 4,
    start: new Date('Aug 1 2022'),
    end: new Date('Aug 30 2022'),
    status: 'warning',
    icon: <VirusIcon aria-hidden />,
    statusLabel: 'Stønad korona',
  },
];

const jobb = [
  {
    id: 5,
    start: new Date('Feb 2 2022'),
    end: new Date('Mar 1 2022'),
    status: 'success',
    statusLabel: 'Utbetaling',
    icon: <PiggybankIcon aria-hidden />,
  },
  {
    id: 6,
    start: new Date('Mar 2 2022'),
    end: new Date('Apr 1 2022'),
    status: 'success',
    statusLabel: 'Utbetaling',
    icon: <PiggybankIcon aria-hidden />,
  },
  {
    id: 7,
    start: new Date('May 2 2022'),
    end: new Date('June 1 2022'),
    status: 'success',
    statusLabel: 'Utbetaling',
    icon: <PiggybankIcon aria-hidden />,
  },
  {
    id: 8,
    start: new Date('June 2 2022'),
    end: new Date('July 1 2022'),
    status: 'success',
    statusLabel: 'Utbetaling',
    icon: <PiggybankIcon aria-hidden />,
  },
];

const ForeldelseProsessIndex: FunctionComponent = () => {
  const [activePeriod, setActivePeriod] = useState<any>();

  return (
    <form>
      <BodyShort>Vurder om perioden er foreldet</BodyShort>
      <label htmlFor="test">
        Vurdering
        <input id="test" />
      </label>

      <label htmlFor="html">
        Foreldet
        <input type="radio" id="html" name="fav_language" value="HTML" />
      </label>

      <Timeline>
        <Timeline.Row label="Person" icon={<PersonIcon aria-hidden />}>
          {person.map((p: any, i) => (
            <Timeline.Period
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              start={p.start}
              end={p.end}
              status={p.status}
              icon={p.icon}
              onSelectPeriod={() => setActivePeriod(p.id)}
              isActive={activePeriod && activePeriod === p.id}
              aria-controls="timeline-panel"
              id={p.id}
            />
          ))}
        </Timeline.Row>
        <Timeline.Row label="Sykehus A" icon={<HospitalIcon aria-hidden />}>
          {jobb.map((p: any, i) => (
            <Timeline.Period
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              start={p.start}
              end={p.end}
              status={p.status}
              icon={p.icon}
              onSelectPeriod={() => setActivePeriod(p.id)}
              isActive={activePeriod && activePeriod === p.id}
              aria-controls="timeline-panel"
              id={p.id}
            />
          ))}
        </Timeline.Row>
      </Timeline>
      {activePeriod && (
        <div aria-controls={activePeriod.id} id="timeline-panel" className="mt-8">{`${activePeriod}: ${
          [...person, ...jobb].find(x => x.id === activePeriod).start
        }`}</div>
      )}
    </form>
  );
};

export default ForeldelseProsessIndex;
