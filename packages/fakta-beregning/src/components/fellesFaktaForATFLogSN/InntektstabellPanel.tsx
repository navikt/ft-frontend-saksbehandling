import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { FlexColumn, FlexContainer, FlexRow, OverstyringKnapp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Button, Label } from '@navikt/ds-react';
import React, { FunctionComponent, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ErOverstyringValues } from '../../typer/FaktaBeregningTypes';
import FaktaBeregningAvklaringsbehovCode from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import styles from './InntektstabellPanel.module.css';
import { BeregningsgrunnlagIndexContext } from './VurderFaktaContext';

export const MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD = 'manuellOverstyringRapportertInntekt';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG, AVKLAR_AKTIVITETER } = FaktaBeregningAvklaringsbehovCode;

const hasAksjonspunkt = (aksjonspunktKode: string, avklaringsbehov: BeregningAvklaringsbehov[]): boolean =>
  avklaringsbehov.some(ap => ap.definisjon === aksjonspunktKode);

const getSkalKunneOverstyre = (erOverstyrer, avklaringsbehov: BeregningAvklaringsbehov[]) =>
  erOverstyrer && !avklaringsbehov.some(ap => ap.definisjon === AVKLAR_AKTIVITETER && isAksjonspunktOpen(ap.status));

type OwnProps = {
  children: React.ReactNode | React.ReactNode[];
  tabell: React.ReactNode;
  hjelpeTekstId?: string;
  skalViseTabell?: boolean;
  readOnly: boolean;
  avklaringsbehov: BeregningAvklaringsbehov[];
  erOverstyrer: boolean;
  updateOverstyring: (index: number, skalOverstyre: boolean) => void;
  erOverstyrt: boolean;
};

interface StaticFunctions {
  buildInitialValues: (erOverstyrt: boolean) => ErOverstyringValues;
}

/**
 * Inntektstabell
 *
 *
 */
export const InntektstabellPanelImpl: FunctionComponent<OwnProps> & StaticFunctions = ({
  tabell,
  hjelpeTekstId = undefined,
  children,
  skalViseTabell = true,
  readOnly,
  avklaringsbehov,
  updateOverstyring,
  erOverstyrer,
  erOverstyrt,
}) => {
  const [erTabellOverstyrt, setOverstyring] = useState(erOverstyrt);

  const beregningsgrunnlagIndeks = React.useContext(BeregningsgrunnlagIndexContext);
  const kanOverstyre = useMemo(
    () => getSkalKunneOverstyre(erOverstyrer, avklaringsbehov),
    [erOverstyrer, avklaringsbehov],
  );

  const toggleOverstyring = () => {
    setOverstyring(!erTabellOverstyrt);
    updateOverstyring(beregningsgrunnlagIndeks, !erTabellOverstyrt);
  };
  return (
    <>
      {children}
      <div className={styles.fadeinTabell}>
        <VerticalSpacer sixteenPx />
        {skalViseTabell && (
          <>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Label size="small" className={styles.avsnittOverskrift}>
                    <FormattedMessage id="InntektstabellPanel.RapporterteInntekter" />
                  </Label>
                </FlexColumn>
                {(kanOverstyre || erTabellOverstyrt) && (
                  <FlexColumn>
                    <OverstyringKnapp
                      onClick={toggleOverstyring}
                      erOverstyrt={
                        readOnly ||
                        erTabellOverstyrt ||
                        hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov)
                      }
                    />
                  </FlexColumn>
                )}
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer sixteenPx />
            {hjelpeTekstId && (
              <Label size="small">
                <FormattedMessage id={hjelpeTekstId} />
              </Label>
            )}
            {tabell}
            {erTabellOverstyrt && !readOnly && (
              <Button size="small" onClick={toggleOverstyring} variant="secondary">
                <FormattedMessage id="InntektstabellPanel.Avbryt" />
              </Button>
            )}
          </>
        )}
      </div>
    </>
  );
};

InntektstabellPanelImpl.buildInitialValues = (erOverstyrt: boolean): ErOverstyringValues => ({
  // I revurderinger kopieres det ikke med aksjonspunkt, og derfor er det ikke nok å kun se på aksjonspunkt her
  [MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD]: erOverstyrt,
});

export default InntektstabellPanelImpl;
