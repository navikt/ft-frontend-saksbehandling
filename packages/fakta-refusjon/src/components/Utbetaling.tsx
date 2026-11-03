import { FormattedMessage, useIntl } from 'react-intl';

import { Buildings3Icon, PersonPencilFillIcon } from '@navikt/aksel-icons';
import { Box, Heading, HStack, Spacer, Timeline } from '@navikt/ds-react';
import dayjs from 'dayjs';

import { useTidslinje } from '@navikt/ft-ui-komponenter';

import type { RefusjonsAndelFormValues } from './Refusjonskrav/formValues';

interface Props {
  refusjonsandeler: RefusjonsAndelFormValues[];
  onSelectAndel: (andelIndex: number) => void;
}

export const Utbetaling = ({ refusjonsandeler, onSelectAndel }: Props) => {
  const intl = useIntl();
  const perioder = refusjonsandeler.flatMap(andel => andel.refusjonsperioder);
  const { timelineProps, controllerElement } = useTidslinje({ perioder });

  return (
    <>
      <HStack>
        <Heading size="xsmall" level="3">
          <FormattedMessage id="Utbetaling.Tittel" />
        </Heading>
        <Spacer />
        {controllerElement}
      </HStack>
      <Box
        as="section"
        aria-label={intl.formatMessage({ id: 'Utbetaling.Tittel' })}
        background="neutral-soft"
        paddingBlock="space-8 space-24"
        paddingInline="space-20"
      >
        <Timeline {...timelineProps}>
          {refusjonsandeler.map((andel, andelIndex) => (
            <Timeline.Row
              label={andel.arbeidsgiverNavn}
              key={andel.arbeidsgiverIdent}
              icon={<Buildings3Icon aria-hidden />}
            >
              {andel.refusjonsperioder.map(p => (
                <Timeline.Period
                  key={`${p.fom}-${p.tom}`}
                  start={dayjs(p.fom).toDate()}
                  end={dayjs(p.tom).toDate()}
                  status={utledUtfallsFarge(p.utfall)}
                  onSelectPeriod={() => onSelectAndel(andelIndex)}
                  icon={
                    p.kilde === 'SAKSBEHANDLER' ? (
                      <PersonPencilFillIcon
                        title={intl.formatMessage({ id: 'RefusjonskravTabell.EndretAvSaksbehandler' })}
                      />
                    ) : undefined
                  }
                ></Timeline.Period>
              ))}
            </Timeline.Row>
          ))}
        </Timeline>
      </Box>
    </>
  );
};

const utledUtfallsFarge = (utfall?: 'INNVILGET' | 'AVSLÅTT' | 'REDUSERT') => {
  switch (utfall) {
    case 'INNVILGET':
      return 'success';
    case 'AVSLÅTT':
      return 'danger';
    case 'REDUSERT':
      return 'info';
    default:
      return 'warning';
  }
};
