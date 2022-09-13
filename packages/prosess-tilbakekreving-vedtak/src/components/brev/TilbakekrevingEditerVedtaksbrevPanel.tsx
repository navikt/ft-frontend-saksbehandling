import React, { FunctionComponent } from 'react';
import { FormattedMessage, IntlShape } from 'react-intl';
import { Accordion, BodyShort, Label, Heading } from '@navikt/ds-react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { VedtaksbrevAvsnitt } from '@navikt/ft-types';

import TilbakekrevingVedtakUtdypendeTekstPanel from './TilbakekrevingVedtakUtdypendeTekstPanel';
import underavsnittType from '../../kodeverk/avsnittType';

import styles from './tilbakekrevingEditerVedtaksbrevPanel.less';

export type FormValues = Record<string, Record<string, string> | string>;

interface OwnProps {
  intl: IntlShape;
  vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[];
  readOnly: boolean;
  perioderSomIkkeHarUtfyltObligatoriskVerdi: string[];
  fritekstOppsummeringPakrevdMenIkkeUtfylt?: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt?: boolean;
}

interface StaticFunctions {
  buildInitialValues: (vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[]) => FormValues;
}

export const TilbakekrevingEditerVedtaksbrevPanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  intl,
  vedtaksbrevAvsnitt,
  readOnly,
  perioderSomIkkeHarUtfyltObligatoriskVerdi,
  fritekstOppsummeringPakrevdMenIkkeUtfylt = false,
  erRevurderingTilbakekrevingFeilBeløpBortfalt,
}) => (
  <div className={styles.container}>
    <VerticalSpacer twentyPx />
    <Heading size="small">
      <FormattedMessage id="TilbakekrevingVedtak.Vedtaksbrev" />
    </Heading>
    <VerticalSpacer eightPx />
    {vedtaksbrevAvsnitt.map(avsnitt => {
      const underavsnitter = avsnitt.underavsnittsliste;
      const periode = `${avsnitt.fom}_${avsnitt.tom}`;
      const harPeriodeSomManglerObligatoriskVerdi = perioderSomIkkeHarUtfyltObligatoriskVerdi.some(p => p === periode);
      const visApen =
        avsnitt.avsnittstype === underavsnittType.OPPSUMMERING && fritekstOppsummeringPakrevdMenIkkeUtfylt;
      return (
        <React.Fragment key={avsnitt.avsnittstype + avsnitt.fom}>
          <Accordion
            className={harPeriodeSomManglerObligatoriskVerdi || visApen ? styles.panelMedGulmarkering : styles.panel}
          >
            <Accordion.Item defaultOpen={harPeriodeSomManglerObligatoriskVerdi || visApen}>
              <Accordion.Header>
                {avsnitt.overskrift
                  ? avsnitt.overskrift
                  : intl.formatMessage({ id: 'TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift' })}
              </Accordion.Header>
              <Accordion.Content>
                {underavsnitter.map(underavsnitt => (
                  <React.Fragment
                    key={(underavsnitt.underavsnittstype || '') + underavsnitt.overskrift + underavsnitt.brødtekst}
                  >
                    {underavsnitt.overskrift && <Label size="small">{underavsnitt.overskrift}</Label>}
                    {underavsnitt.brødtekst && <BodyShort size="small">{underavsnitt.brødtekst}</BodyShort>}
                    {underavsnitt.fritekstTillatt && (
                      <>
                        <VerticalSpacer eightPx />
                        <TilbakekrevingVedtakUtdypendeTekstPanel
                          type={
                            underavsnitt.underavsnittstype
                              ? `${periode}.${underavsnitt.underavsnittstype}`
                              : avsnitt.avsnittstype
                          }
                          readOnly={readOnly}
                          fritekstPakrevet={underavsnitt.fritekstPåkrevet}
                          maximumLength={erRevurderingTilbakekrevingFeilBeløpBortfalt ? 10000 : undefined}
                        />
                      </>
                    )}
                    <VerticalSpacer eightPx />
                  </React.Fragment>
                ))}
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
          <VerticalSpacer eightPx />
        </React.Fragment>
      );
    })}
  </div>
);

TilbakekrevingEditerVedtaksbrevPanel.buildInitialValues = (vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[]): FormValues =>
  vedtaksbrevAvsnitt
    .filter(avsnitt => avsnitt.underavsnittsliste.some(underavsnitt => underavsnitt.fritekst))
    .reduce((acc, avsnitt) => {
      const underavsnitter = avsnitt.underavsnittsliste;
      const friteksterForUnderavsnitt = underavsnitter
        .filter(underavsnitt => underavsnitt.fritekst)
        .reduce(
          (underAcc, underavsnitt) => ({
            ...underAcc,
            [underavsnitt.underavsnittstype ? underavsnitt.underavsnittstype : avsnitt.avsnittstype]: decodeHtmlEntity(
              underavsnitt.fritekst,
            ),
          }),
          {},
        );

      const nyeFritekster = avsnitt.fom
        ? { [`${avsnitt.fom}_${avsnitt.tom}`]: friteksterForUnderavsnitt }
        : friteksterForUnderavsnitt;

      return { ...acc, ...nyeFritekster };
    }, {});

export default TilbakekrevingEditerVedtaksbrevPanel;
