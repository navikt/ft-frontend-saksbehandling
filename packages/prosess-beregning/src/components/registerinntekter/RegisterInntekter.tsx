import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BarChartIcon, TableIcon } from '@navikt/aksel-icons';
import { Checkbox, HStack, Spacer, ToggleGroup, VStack } from '@navikt/ds-react';

import type { ArbeidsgiverOpplysningerPerId, Inntektsgrunnlag } from '@navikt/ft-types';
import { FaktaBoks } from '@navikt/ft-ui-komponenter';

import { RegisterinntekterGraf } from './graf/RegisterinntekterGraf';
import { transformerRegisterinntekter } from './registerinntekterUtils';
import { RegisterinntekterTabell } from './tabell/RegisterinntekterTabell';

interface Props {
  inntektsgrunnlag: Inntektsgrunnlag;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

type Visning = 'graf' | 'tabell';

export const RegisterInntekter = ({ inntektsgrunnlag, arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();
  const [valgtVisning, setValgtVisning] = useState<Visning>('graf');
  const [vis_8_28, setVis_8_28] = useState(inntektsgrunnlag.beregningsgrunnlagInntekter.length > 0);

  const transformerteRegisterinntekter = transformerRegisterinntekter(
    inntektsgrunnlag,
    arbeidsgiverOpplysningerPerId,
    intl,
    vis_8_28,
  );

  if (
    inntektsgrunnlag.sammenligningsgrunnlagInntekter.length === 0 &&
    inntektsgrunnlag.beregningsgrunnlagInntekter.length === 0
  ) {
    return null;
  }

  return (
    <FaktaBoks
      tittel={intl.formatMessage({ id: 'Registerinntekt.Header' })}
      beskrivelse={<FormattedMessage id="Registerinntekt.Description" />}
    >
      <VStack gap="space-16">
        <HStack gap="space-16">
          <ToggleGroup size="small" value={valgtVisning} onChange={value => setValgtVisning(value as Visning)}>
            <ToggleGroup.Item value="graf" icon={<BarChartIcon aria-hidden />} label="Graf" />
            <ToggleGroup.Item value="tabell" icon={<TableIcon aria-hidden />} label="Tabell" />
          </ToggleGroup>
          <Spacer />
          <Checkbox
            size="small"
            disabled={inntektsgrunnlag.beregningsgrunnlagInntekter.length === 0}
            checked={vis_8_28}
            onChange={() => setVis_8_28(s => !s)}
          >
            Vis § 8-28
          </Checkbox>
        </HStack>
        {valgtVisning === 'graf' && (
          <RegisterinntekterGraf transformerteRegisterinntekter={transformerteRegisterinntekter} />
        )}
        {valgtVisning === 'tabell' && (
          <RegisterinntekterTabell transformerteRegisterinntekter={transformerteRegisterinntekter} />
        )}
      </VStack>
    </FaktaBoks>
  );
};
