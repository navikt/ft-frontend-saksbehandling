import React from 'react';
import { FormattedMessage, type IntlShape } from 'react-intl';

import { BodyShort, ExpansionCard, Heading, Label, VStack } from '@navikt/ds-react';

import { decodeHtmlEntity } from '@navikt/ft-utils';

import { UnderavsnittType } from '../../kodeverk/avsnittType';
import type { VedtaksbrevAvsnitt } from '../../types/VedtaksbrevAvsnitt';
import { TilbakekrevingVedtakUtdypendeTekstPanel } from './TilbakekrevingVedtakUtdypendeTekstPanel';

import styles from './tilbakekrevingEditerVedtaksbrevPanel.module.css';

export type FormValues = Record<string, Record<string, string> | string>;

export interface Props {
  intl: IntlShape;
  vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[];
  readOnly: boolean;
  perioderSomIkkeHarUtfyltObligatoriskVerdi: string[];
  fritekstOppsummeringPakrevdMenIkkeUtfylt?: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt?: boolean;
}

export const TilbakekrevingEditerVedtaksbrevPanel = ({
  intl,
  vedtaksbrevAvsnitt,
  readOnly,
  perioderSomIkkeHarUtfyltObligatoriskVerdi,
  fritekstOppsummeringPakrevdMenIkkeUtfylt = false,
  erRevurderingTilbakekrevingFeilBeløpBortfalt,
}: Props) => (
  <VStack gap="4">
    <Heading size="small">
      <FormattedMessage id="TilbakekrevingVedtak.Vedtaksbrev" />
    </Heading>
    {vedtaksbrevAvsnitt.map(avsnitt => {
      const underavsnitter = avsnitt.underavsnittsliste;
      const periode = `${avsnitt.fom}_${avsnitt.tom}`;
      const harPeriodeSomManglerObligatoriskVerdi = perioderSomIkkeHarUtfyltObligatoriskVerdi.some(p => p === periode);
      const visApen =
        avsnitt.avsnittstype === UnderavsnittType.OPPSUMMERING && fritekstOppsummeringPakrevdMenIkkeUtfylt;
      return (
        <React.Fragment key={avsnitt.avsnittstype + avsnitt.fom}>
          <ExpansionCard
            size="small"
            aria-label={periode}
            defaultOpen={harPeriodeSomManglerObligatoriskVerdi || visApen}
            className={harPeriodeSomManglerObligatoriskVerdi || visApen ? styles.gulmarkering : ''}
          >
            <ExpansionCard.Header>
              <ExpansionCard.Title size="small">
                {avsnitt.overskrift
                  ? avsnitt.overskrift
                  : intl.formatMessage({ id: 'TilbakekrevingEditerVedtaksbrevPanel.LovhjemlerOgKlagerettOverskrift' })}
              </ExpansionCard.Title>
            </ExpansionCard.Header>
            <ExpansionCard.Content>
              <VStack gap="2">
                {underavsnitter.map(underavsnitt => (
                  <React.Fragment
                    key={(underavsnitt.underavsnittstype ?? '') + underavsnitt.overskrift + underavsnitt.brødtekst}
                  >
                    {underavsnitt.overskrift && <Label className={styles.paddingTop}>{underavsnitt.overskrift}</Label>}
                    {underavsnitt.brødtekst && <BodyShort>{underavsnitt.brødtekst}</BodyShort>}
                    {underavsnitt.fritekstTillatt && (
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
                    )}
                  </React.Fragment>
                ))}
              </VStack>
            </ExpansionCard.Content>
          </ExpansionCard>
        </React.Fragment>
      );
    })}
  </VStack>
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
