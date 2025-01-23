import { Label } from '@navikt/ds-react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';

import { RadioGroupPanel, TextAreaField } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { ArrowBox, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { Aktsomhet } from '../../../kodeverk/aktsomhet';
import { AktsomhetSarligeGrunnerFormPanel } from './AktsomhetSarligeGrunnerFormPanel';

import styles from './aktsomhetGradUaktsomhetFormPanel.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const sarligGrunnerBegrunnelseDiv = (name: string, readOnly: boolean, intl: IntlShape) => (
  <div>
    <Label size="small">
      <FormattedMessage id="AktsomhetGradUaktsomhetFormPanel.SærligGrunner" />
    </Label>
    <VerticalSpacer eightPx />
    <TextAreaField
      name={`${name}.sarligGrunnerBegrunnelse`}
      label={intl.formatMessage({ id: 'AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner' })}
      validate={[required, minLength3, maxLength1500, hasValidText]}
      maxLength={1500}
      readOnly={readOnly}
      className={styles.explanationTextarea}
      description={intl.formatMessage({ id: 'AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst' })}
    />
    <VerticalSpacer twentyPx />
  </div>
);

export interface Props {
  harGrunnerTilReduksjon?: boolean;
  readOnly: boolean;
  handletUaktsomhetGrad?: string;
  erSerligGrunnAnnetValgt?: boolean;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
  erTotalBelopUnder4Rettsgebyr: boolean;
  sarligGrunnTyper: KodeverkMedNavn[];
  andelSomTilbakekreves?: string;
  erValgtResultatTypeForstoBurdeForstaatt?: boolean;
  name: string;
}

export const AktsomhetGradUaktsomhetFormPanel = ({
  harGrunnerTilReduksjon,
  readOnly,
  handletUaktsomhetGrad,
  erSerligGrunnAnnetValgt,
  sarligGrunnTyper,
  harMerEnnEnYtelse,
  feilutbetalingBelop,
  erTotalBelopUnder4Rettsgebyr,
  andelSomTilbakekreves,
  erValgtResultatTypeForstoBurdeForstaatt,
  name,
}: Props) => {
  const intl = useIntl();
  const grovUaktsomOffset = erValgtResultatTypeForstoBurdeForstaatt ? 180 : 200;
  return (
    <ArrowBox alignOffset={handletUaktsomhetGrad === Aktsomhet.GROVT_UAKTSOM ? grovUaktsomOffset : 20}>
      <div className={styles.panelWidth}>
        {handletUaktsomhetGrad === Aktsomhet.SIMPEL_UAKTSOM && erTotalBelopUnder4Rettsgebyr && (
          <>
            <RadioGroupPanel
              name={`${name}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`}
              label={<FormattedMessage id="AktsomhetGradUaktsomhetFormPanel.Tilbakekrev" />}
              validate={[required]}
              isTrueOrFalseSelection
              isHorizontal
              isReadOnly={readOnly}
              radios={[
                {
                  label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Ja" />,
                  value: 'true',
                  element: (
                    <>
                      <VerticalSpacer eightPx />
                      {sarligGrunnerBegrunnelseDiv(name, readOnly, intl)}
                      <AktsomhetSarligeGrunnerFormPanel
                        name={name}
                        harGrunnerTilReduksjon={harGrunnerTilReduksjon}
                        erSerligGrunnAnnetValgt={erSerligGrunnAnnetValgt}
                        sarligGrunnTyper={sarligGrunnTyper}
                        harMerEnnEnYtelse={harMerEnnEnYtelse}
                        feilutbetalingBelop={feilutbetalingBelop}
                        readOnly={readOnly}
                        handletUaktsomhetGrad={handletUaktsomhetGrad}
                        andelSomTilbakekreves={andelSomTilbakekreves}
                      />
                    </>
                  ),
                },
                {
                  label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />,
                  value: 'false',
                  element: (
                    <>
                      <VerticalSpacer eightPx />
                      <ArrowBox alignOffset={20}>
                        <FormattedMessage id="AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt" />
                      </ArrowBox>
                    </>
                  ),
                },
              ]}
            />
            <VerticalSpacer eightPx />
          </>
        )}
        {(handletUaktsomhetGrad !== Aktsomhet.SIMPEL_UAKTSOM || !erTotalBelopUnder4Rettsgebyr) && (
          <>
            {sarligGrunnerBegrunnelseDiv(name, readOnly, intl)}
            <AktsomhetSarligeGrunnerFormPanel
              name={name}
              harGrunnerTilReduksjon={harGrunnerTilReduksjon}
              erSerligGrunnAnnetValgt={erSerligGrunnAnnetValgt}
              sarligGrunnTyper={sarligGrunnTyper}
              harMerEnnEnYtelse={harMerEnnEnYtelse}
              feilutbetalingBelop={feilutbetalingBelop}
              readOnly={readOnly}
              handletUaktsomhetGrad={handletUaktsomhetGrad}
              andelSomTilbakekreves={andelSomTilbakekreves}
            />
          </>
        )}
      </div>
    </ArrowBox>
  );
};
