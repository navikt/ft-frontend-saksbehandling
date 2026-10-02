import { FormattedMessage } from 'react-intl';

import { Box, HStack } from '@navikt/ds-react';

import { DateLabel, LabeledValue } from '@navikt/ft-ui-komponenter';

import type { RefusjonskravFormRad } from './formValues';

interface Props {
  krav: RefusjonskravFormRad;
}

export const RefusjonskravDetaljer = ({ krav }: Props) => (
  <HStack gap="space-16">
    <Box paddingBlock="space-8" paddingInline="space-16" background="neutral-soft" borderRadius="8">
      <LabeledValue
        label={<FormattedMessage id="RefusjonskravForm.KreverRefusjonFra" />}
        value={<DateLabel dateString={krav.fom} month="long" />}
      />
    </Box>
    <Box paddingBlock="space-8" paddingInline="space-16" background="neutral-soft" borderRadius="8">
      <LabeledValue
        label={<FormattedMessage id="RefusjonskravForm.FristForInnsendingAvRefusjonskrav" />}
        value={<DateLabel dateString={krav.fristForInnsendingAvRefusjonskrav} month="long" />}
      />
    </Box>
    <Box paddingBlock="space-8" paddingInline="space-16" background="neutral-soft" borderRadius="8">
      <LabeledValue
        label={<FormattedMessage id="RefusjonskravForm.TidligsteMuligeDatoMedRefusjonEtterFrist" />}
        value={<DateLabel dateString={krav.tidligsteMuligeDatoMedRefusjonEtterFrist} month="long" />}
      />
    </Box>
  </HStack>
);
