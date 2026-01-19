import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BarChartIcon, TableIcon } from '@navikt/aksel-icons';
import { ToggleGroup, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { FaktaBoks } from '@navikt/ft-ui-komponenter';

import { SammenligningsgrunnlagGraf } from './SammenligningsgrunnlagGraf';
import { SammenligningsgrunnlagTabell } from './SammenligningsgrunnlagTabell';
import { transformerSammenligningsgrunnlag } from './sammenligningsgrunnlagUtils';

interface Props {
  sammenligningsgrunnlagFom: string;
  sammenligningsgrunnlagInntekter: InntektsgrunnlagMåned[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

type Visning = 'graf' | 'tabell';

export const Sammenligningsgrunnlag = ({
  sammenligningsgrunnlagInntekter,
  sammenligningsgrunnlagFom,
  arbeidsgiverOpplysningerPerId,
}: Props) => {
  const intl = useIntl();
  const [valgtVisning, setValgtVisning] = useState<Visning>('graf');

  const transformertSammenligningsgrunnlag = transformerSammenligningsgrunnlag(
    sammenligningsgrunnlagInntekter,
    sammenligningsgrunnlagFom,
    arbeidsgiverOpplysningerPerId,
    intl,
  );
  return (
    <FaktaBoks
      tittel={intl.formatMessage({ id: 'Sammenligningsgrunnlag.ExpansionCard.Header' })}
      beskrivelse={<FormattedMessage id="Sammenligningsgrunnlag.ExpansionCard.Description" />}
    >
      <VStack gap="space-16">
        <ToggleGroup size="small" value={valgtVisning} onChange={value => setValgtVisning(value as Visning)}>
          <ToggleGroup.Item value="graf" icon={<BarChartIcon aria-hidden />} label="Graf" />
          <ToggleGroup.Item value="tabell" icon={<TableIcon aria-hidden />} label="Tabell" />
        </ToggleGroup>
        {valgtVisning === 'graf' && (
          <SammenligningsgrunnlagGraf transformertSammenligningsgrunnlag={transformertSammenligningsgrunnlag} />
        )}
        {valgtVisning === 'tabell' && (
          <SammenligningsgrunnlagTabell transformertSammenligningsgrunnlag={transformertSammenligningsgrunnlag} />
        )}
      </VStack>
    </FaktaBoks>
  );
};
