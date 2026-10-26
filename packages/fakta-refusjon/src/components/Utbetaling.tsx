import { FormattedMessage, useIntl } from 'react-intl';

import { Buildings3Icon, PersonPencilFillIcon } from '@navikt/aksel-icons';
import { Box, Heading, HStack, Spacer, Timeline } from '@navikt/ds-react';
import dayjs from 'dayjs';

import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';
import { useTidslinje } from '@navikt/ft-ui-komponenter';

import type { RefusjonsAndel } from '../types/dataTypes';

interface Props {
  refusjonsandeler: RefusjonsAndel[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const Utbetaling = ({ refusjonsandeler, arbeidsgiverOpplysningerPerId }: Props) => {
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
      <Box background="neutral-soft" paddingBlock="space-8 space-24" paddingInline="space-20">
        <Timeline {...timelineProps}>
          {refusjonsandeler.map(andel => (
            <Timeline.Row
              label={arbeidsgiverOpplysningerPerId[andel.arbeidsgiverIdent]?.navn || andel.arbeidsgiverIdent}
              key={andel.arbeidsgiverIdent}
              icon={<Buildings3Icon aria-hidden />}
            >
              {andel.refusjonsperioder.map(p => (
                <Timeline.Period
                  key={`${p.fom}-${p.tom}`}
                  start={dayjs(p.fom).toDate()}
                  end={dayjs(p.tom).toDate()}
                  status={utledUtfallsFarge(p.utfall)}
                  icon={
                    andel.kilde === 'SAKSBEHANDLER' ? (
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
