import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BarChartIcon, TableIcon } from '@navikt/aksel-icons';
import { ExpansionCard, ToggleGroup, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, InntektsgrunnlagMåned } from '@navikt/ft-types';

import { SammenligningsgrunnlagGraf } from './SammenligningsgrunnlagGraf';
import { SammenligningsgrunnlagTabell } from './SammenligningsgrunnlagTabell';

interface Props {
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}
type VisningType = 'graf' | 'tabell';
export const Sammenligningsgrunnlag = ({
  sammenligningsgrunnlagInntekter,
  sammenligningsgrunnlagFom,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const intl = useIntl();
  const [visGraf, setVisGraf] = useState<VisningType>('graf');

  return (
    <ExpansionCard
      defaultOpen
      size="small"
      aria-label={intl.formatMessage({ id: 'Sammenligningsgrunnlag.ExpansionCard.Header' })}
    >
      <ExpansionCard.Header>
        <ExpansionCard.Title size="small">
          <FormattedMessage id="Sammenligningsgrunnlag.ExpansionCard.Header" />
        </ExpansionCard.Title>
        <ExpansionCard.Description>
          <FormattedMessage id="Sammenligningsgrunnlag.ExpansionCard.Description" />
        </ExpansionCard.Description>
      </ExpansionCard.Header>
      <ExpansionCard.Content>
        <VStack gap="space-16">
          <ToggleGroup size="small" defaultValue="graf" onChange={value => setVisGraf(value as VisningType)}>
            <ToggleGroup.Item value="graf" icon={<BarChartIcon aria-hidden />} label="Graf" />
            <ToggleGroup.Item value="tabell" icon={<TableIcon aria-hidden />} label="Tabell" />
          </ToggleGroup>
          {visGraf === 'graf' && (
            <SammenligningsgrunnlagGraf
              sammenligningsgrunnlagInntekter={sammenligningsgrunnlagInntekter}
              sammenligningsgrunnlagFom={sammenligningsgrunnlagFom}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          )}
          {visGraf === 'tabell' && (
            <SammenligningsgrunnlagTabell
              sammenligningsgrunnlagInntekter={sammenligningsgrunnlagInntekter}
              sammenligningsgrunnlagFom={sammenligningsgrunnlagFom}
              arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            />
          )}
        </VStack>
      </ExpansionCard.Content>
    </ExpansionCard>
  );
};
