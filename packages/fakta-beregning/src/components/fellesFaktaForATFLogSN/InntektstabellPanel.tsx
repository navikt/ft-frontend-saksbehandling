import { isAksjonspunktOpen } from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov } from '@navikt/ft-types';
import { FlexColumn, FlexContainer, FlexRow, OverstyringKnapp, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Knapp } from 'nav-frontend-knapper';
import { Element } from 'nav-frontend-typografi';
import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ErOverstyringValues } from '../../typer/FaktaBeregningTypes';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import styles from './InntektstabellPanel.less';
import VurderFaktaContext from './VurderFaktaContext';

export const MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD = 'manuellOverstyringRapportertInntekt';

const { OVERSTYRING_AV_BEREGNINGSGRUNNLAG, AVKLAR_AKTIVITETER } = FaktaBeregningAksjonspunktCode;

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
  hjelpeTekstId,
  children,
  skalViseTabell,
  readOnly,
  avklaringsbehov,
  updateOverstyring,
  erOverstyrer,
  erOverstyrt,
}) => {
  const [erTabellOverstyrt, setOverstyring] = useState(erOverstyrt);
  const aktivtBeregningsgrunnlagIndeks = React.useContext(VurderFaktaContext);
  const kanOverstyre = useMemo(
    () => getSkalKunneOverstyre(erOverstyrer, avklaringsbehov),
    [erOverstyrer, avklaringsbehov],
  );

  const toggleOverstyring = useCallback(() => {
    setOverstyring(!erTabellOverstyrt);
    updateOverstyring(aktivtBeregningsgrunnlagIndeks, !erTabellOverstyrt);
  }, [erTabellOverstyrt]);
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
                  <Element className={styles.avsnittOverskrift}>
                    <FormattedMessage id="InntektstabellPanel.RapporterteInntekter" />
                  </Element>
                </FlexColumn>
                {(kanOverstyre || erTabellOverstyrt) && (
                  <FlexColumn>
                    <OverstyringKnapp
                      onClick={toggleOverstyring}
                      erOverstyrt={
                        erTabellOverstyrt ||
                        hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, avklaringsbehov) ||
                        readOnly
                      }
                    />
                  </FlexColumn>
                )}
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer sixteenPx />
            {hjelpeTekstId && (
              <Element>
                <FormattedMessage id={hjelpeTekstId} />
              </Element>
            )}
            {tabell}
            {erTabellOverstyrt && (
              <Knapp htmlType="button" onClick={toggleOverstyring} mini>
                <FormattedMessage id="InntektstabellPanel.Avbryt" />
              </Knapp>
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

InntektstabellPanelImpl.defaultProps = {
  hjelpeTekstId: undefined,
  skalViseTabell: true,
};

export default InntektstabellPanelImpl;
