import { JSX } from 'react';

import { BodyShort, Heading, Label } from '@navikt/ds-react';

import { Period, sortPeriodsByFomDate } from '@navikt/ft-utils';

import { CalendarIcon } from '../icons/CalendarIcon';

import styles from './periodList.module.css';

type Item = {
  label: string;
  value: string;
};
type Periode = {
  fom: string;
  tom: string;
  items: Item[];
};

type OwnProps = {
  perioder: Periode[];
  tittel: string;
  customRenderFunc?: (items: { label: string; value: string }[]) => JSX.Element | null;
};

//TODO (TOR) Veldig spesifikk funksjonalitet som heller bør ligga i applikasjonen som brukar den. Kjem ikkje til å bli brukt i fp-frontend
export const PeriodList = ({ perioder, tittel, customRenderFunc }: OwnProps) => {
  if (!perioder || !Array.isArray(perioder)) {
    return null;
  }

  return (
    <>
      {tittel && (
        <Heading spacing size="xsmall" level="4">
          {tittel}
        </Heading>
      )}
      <ul className={styles.periodList}>
        {perioder
          .map(periode => ({ period: new Period(periode.fom, periode.tom), items: periode.items }))
          .sort((periode1, periode2) => sortPeriodsByFomDate(periode1.period, periode2.period))
          .map(periode => {
            const { period, items = [] } = periode;
            return (
              <li className={styles.element} key={period.fom}>
                <div className={styles.title}>
                  <CalendarIcon />
                  <span className={styles.period}>{period.prettifyPeriod()}</span>
                </div>
                {!customRenderFunc ? (
                  <div className={styles.content}>
                    {items.map(item => (
                      <div className={styles.item} key={item.label}>
                        <Label size="small">{item.label}</Label>
                        <BodyShort size="small">{item.value}</BodyShort>
                      </div>
                    ))}
                  </div>
                ) : (
                  customRenderFunc(items)
                )}
              </li>
            );
          })}
      </ul>
    </>
  );
};
