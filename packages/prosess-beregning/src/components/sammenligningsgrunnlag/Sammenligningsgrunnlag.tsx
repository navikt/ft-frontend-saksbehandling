import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BarChartIcon, TableIcon } from '@navikt/aksel-icons';
import { ToggleGroup, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, InntektsgrunnlagMåned } from '@navikt/ft-types';
import { FaktaBoks } from '@navikt/ft-ui-komponenter';

import { SammenligningsgrunnlagGraf } from './SammenligningsgrunnlagGraf';
import { SammenligningsgrunnlagTabell } from './SammenligningsgrunnlagTabell';

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
  const [valgtVisning, setValgtVisning] = useState<Visning>('graf');

  return (
    <FaktaBoks
      tittel={<FormattedMessage id="Sammenligningsgrunnlag.ExpansionCard.Header" />}
      beskrivelse={<FormattedMessage id="Sammenligningsgrunnlag.ExpansionCard.Description" />}
    >
      <VStack gap="space-16">
        <ToggleGroup size="small" value={valgtVisning} onChange={value => setValgtVisning(value as Visning)}>
          <ToggleGroup.Item value="graf" icon={<BarChartIcon aria-hidden />} label="Graf" />
          <ToggleGroup.Item value="tabell" icon={<TableIcon aria-hidden />} label="Tabell" />
        </ToggleGroup>
        {valgtVisning === 'graf' && (
          <SammenligningsgrunnlagGraf
            sammenligningsgrunnlagInntekter={sammenligningsgrunnlagInntekter}
            sammenligningsgrunnlagFom={sammenligningsgrunnlagFom}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        )}
        {valgtVisning === 'tabell' && (
          <SammenligningsgrunnlagTabell
            sammenligningsgrunnlagInntekter={sammenligningsgrunnlagInntekter}
            sammenligningsgrunnlagFom={sammenligningsgrunnlagFom}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          />
        )}
      </VStack>
    </FaktaBoks>
  );
};
