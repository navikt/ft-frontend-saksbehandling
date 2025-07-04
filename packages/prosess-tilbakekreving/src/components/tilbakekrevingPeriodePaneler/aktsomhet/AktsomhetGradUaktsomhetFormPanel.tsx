import { useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';

import { RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { ArrowBox } from '@navikt/ft-ui-komponenter';

import { Aktsomhet } from '../../../kodeverk/aktsomhet';
import type { KodeverkMedNavnTilbakekreving } from '../../../types/KodeverkTilbakeForPanel';
import { AktsomhetSarligeGrunnerFormPanel } from './AktsomhetSarligeGrunnerFormPanel';

import styles from './aktsomhetGradUaktsomhetFormPanel.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const SærligGrunnerBegrunnelseDiv = ({ name, readOnly }: { name: string; readOnly: boolean }) => {
  const intl = useIntl();
  // TODO (TOR) Manglar type
  const { control } = useFormContext();

  return (
    <VStack gap="4">
      <Label size="small">
        <FormattedMessage id="AktsomhetGradUaktsomhetFormPanel.SærligGrunner" />
      </Label>
      <RhfTextarea
        name={`${name}.sarligGrunnerBegrunnelse`}
        control={control}
        label={intl.formatMessage({ id: 'AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner' })}
        validate={[required, minLength3, maxLength1500, hasValidText]}
        maxLength={1500}
        readOnly={readOnly}
        className={styles.explanationTextarea}
        description={intl.formatMessage({ id: 'AktsomhetGradUaktsomhetFormPanel.VurderSærligGrunner.Hjelpetekst' })}
      />
    </VStack>
  );
};

export interface Props {
  harGrunnerTilReduksjon?: boolean;
  readOnly: boolean;
  handletUaktsomhetGrad?: string;
  erSerligGrunnAnnetValgt?: boolean;
  harMerEnnEnYtelse: boolean;
  feilutbetalingBelop: number;
  erTotalBelopUnder4Rettsgebyr: boolean;
  sarligGrunnTyper: KodeverkMedNavnTilbakekreving<'SærligGrunn'>[];
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
  // TODO (TOR) Manglar type
  const { control } = useFormContext();

  const grovUaktsomOffset = erValgtResultatTypeForstoBurdeForstaatt ? 180 : 200;
  return (
    <ArrowBox alignOffset={handletUaktsomhetGrad === Aktsomhet.GROVT_UAKTSOM ? grovUaktsomOffset : 20}>
      <div className={styles.panelWidth}>
        {handletUaktsomhetGrad === Aktsomhet.SIMPEL_UAKTSOM && erTotalBelopUnder4Rettsgebyr && (
          <RhfRadioGroup
            name={`${name}.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr`}
            control={control}
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
                  <div style={{ marginTop: '10px' }}>
                    <SærligGrunnerBegrunnelseDiv name={name} readOnly={readOnly} />
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
                  </div>
                ),
              },
              {
                label: <FormattedMessage id="AktsomhetReduksjonAvBelopFormPanel.Nei" />,
                value: 'false',
                element: (
                  <div style={{ marginTop: '10px' }}>
                    <ArrowBox alignOffset={55}>
                      <FormattedMessage id="AktsomhetGradUaktsomhetFormPanel.AllePerioderBehandlesLikt" />
                    </ArrowBox>
                  </div>
                ),
              },
            ]}
          />
        )}
        {(handletUaktsomhetGrad !== Aktsomhet.SIMPEL_UAKTSOM || !erTotalBelopUnder4Rettsgebyr) && (
          <>
            <SærligGrunnerBegrunnelseDiv name={name} readOnly={readOnly} />
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
