import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BarChartIcon, ExpandIcon, TableIcon } from '@navikt/aksel-icons';
import { Box, Button, Checkbox, HStack, Modal, Spacer, ToggleGroup, VStack } from '@navikt/ds-react';

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
  const [visModal, setVisModal] = useState(false);
  const [vis_8_28, setVis_8_28] = useState(inntektsgrunnlag.beregningsgrunnlagInntekter.length > 0);
  const [valgteInntektskilder, setValgteInntektskilder] = useState<Record<string, boolean>>({});

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

  const åpneIModalTekst = intl.formatMessage({ id: 'Registerinntekt.ÅpneIModal' });
  const visningsvalg = (
    <ToggleGroup size="small" value={valgtVisning} onChange={value => setValgtVisning(value as Visning)}>
      <ToggleGroup.Item value="graf" icon={<BarChartIcon aria-hidden />} label="Graf" />
      <ToggleGroup.Item value="tabell" icon={<TableIcon aria-hidden />} label="Tabell" />
    </ToggleGroup>
  );
  const paragrafvalg = (
    <Checkbox
      size="small"
      disabled={inntektsgrunnlag.beregningsgrunnlagInntekter.length === 0}
      checked={vis_8_28}
      onChange={() => setVis_8_28(s => !s)}
    >
      <FormattedMessage id="Registerinntekt.Vis8-28" />
    </Checkbox>
  );
  const tabell = <RegisterinntekterTabell transformerteRegisterinntekter={transformerteRegisterinntekter} />;

  return (
    <FaktaBoks tittel={intl.formatMessage({ id: 'Registerinntekt.Header' })}>
      <VStack gap="space-16">
        <HStack gap="space-16" align="center">
          {visningsvalg}
          {paragrafvalg}
          <Spacer />
          <Button
            type="button"
            variant="tertiary"
            size="medium"
            aria-label={åpneIModalTekst}
            title={åpneIModalTekst}
            icon={<ExpandIcon aria-hidden />}
            onClick={() => setVisModal(true)}
          />
        </HStack>
        {valgtVisning === 'graf' && (
          <RegisterinntekterGraf
            transformerteRegisterinntekter={transformerteRegisterinntekter}
            valgteInntektskilder={valgteInntektskilder}
            onLegendefiltreringEndret={setValgteInntektskilder}
          />
        )}
        {valgtVisning === 'tabell' && tabell}
      </VStack>
      {visModal && (
        <Modal
          open
          onClose={() => setVisModal(false)}
          header={{ heading: intl.formatMessage({ id: 'Registerinntekt.Header' }) }}
          width="90vw"
          style={{ maxWidth: 1440 }}
          portal
        >
          <Modal.Body>
            <VStack gap="space-16">
              <HStack gap="space-16" align="center">
                {visningsvalg}
                {paragrafvalg}
              </HStack>
              {valgtVisning === 'graf' && (
                <RegisterinntekterGraf
                  transformerteRegisterinntekter={transformerteRegisterinntekter}
                  valgteInntektskilder={valgteInntektskilder}
                  onLegendefiltreringEndret={setValgteInntektskilder}
                  erUtvidet
                />
              )}
              {valgtVisning === 'tabell' && (
                <Box width="fit-content" maxWidth="100%" overflowX="auto">
                  {tabell}
                </Box>
              )}
            </VStack>
          </Modal.Body>
        </Modal>
      )}
    </FaktaBoks>
  );
};
