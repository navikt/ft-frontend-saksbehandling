import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Button, Heading, HStack, Label, VStack } from '@navikt/ds-react';

import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import type { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { OverstyringKnapp } from '@navikt/ft-ui-komponenter';

import type { ErOverstyringValues } from '../../typer/FaktaBeregningTypes';
import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { hasAksjonspunkt } from '../../utils/aksjonspunktUtils';
import { BeregningsgrunnlagIndexContext } from './VurderFaktaContext';

import styles from './InntektstabellPanel.module.css';

export const MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD = 'manuellOverstyringRapportertInntekt';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG, AVKLAR_AKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const getSkalKunneOverstyre = (erOverstyrer: boolean, avklaringsbehov: BeregningAvklaringsbehov[]) =>
  erOverstyrer && !avklaringsbehov.some(ap => ap.definisjon === AVKLAR_AKTIVITETER && isAksjonspunktOpen(ap.status));

interface Props {
  tabell: React.ReactNode;
  hjelpeTekstId?: string;
  skalViseTabell?: boolean;
  readOnly: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  erOverstyrer: boolean;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  erOverstyrt: boolean;
}

export const InntektstabellPanel = ({
  tabell,
  hjelpeTekstId = undefined,
  skalViseTabell = true,
  readOnly,
  avklaringsbehov,
  updateOverstyring,
  erOverstyrer,
  erOverstyrt,
}: Props) => {
  const [erTabellOverstyrt, setOverstyring] = useState(erOverstyrt);

  const beregningsgrunnlagIndeks = React.useContext(BeregningsgrunnlagIndexContext);
  const kanOverstyre = getSkalKunneOverstyre(erOverstyrer, avklaringsbehov);

  const toggleOverstyring = () => {
    setOverstyring(!erTabellOverstyrt);
    updateOverstyring(beregningsgrunnlagIndeks, !erTabellOverstyrt);
  };
  return (
    <div className={styles.fadeinTabell}>
      {skalViseTabell && (
        <VStack gap="space-16">
          <HStack gap="space-16">
            <Heading level="3" size="xsmall">
              <FormattedMessage id="InntektstabellPanel.RapporterteInntekter" />
            </Heading>
            {(kanOverstyre || erTabellOverstyrt) && (
              <OverstyringKnapp
                onClick={toggleOverstyring}
                erOverstyrt={
                  readOnly || erTabellOverstyrt || hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov)
                }
              />
            )}
          </HStack>
          {hjelpeTekstId && (
            <Label size="small">
              <FormattedMessage id={hjelpeTekstId} />
            </Label>
          )}
          {tabell}
          {erTabellOverstyrt && !readOnly && (
            <HStack>
              <Button size="small" onClick={toggleOverstyring} variant="secondary">
                <FormattedMessage id="InntektstabellPanel.Avbryt" />
              </Button>
            </HStack>
          )}
        </VStack>
      )}
    </div>
  );
};

InntektstabellPanel.buildInitialValues = (erOverstyrt: boolean): ErOverstyringValues => ({
  // I revurderinger kopieres det ikke med aksjonspunkt, og derfor er det ikke nok å kun se på aksjonspunkt her
  [MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD]: erOverstyrt,
});
