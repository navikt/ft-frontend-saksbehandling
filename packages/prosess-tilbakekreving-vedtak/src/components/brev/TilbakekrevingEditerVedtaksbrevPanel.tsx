import React from 'react';
import { FormattedMessage, type IntlShape } from 'react-intl';

import { BodyShort, ExpansionCard, Heading, Label, VStack } from '@navikt/ds-react';

import { decodeHtmlEntity } from '@navikt/ft-utils';

import type { AvsnittType, UnderavsnittType, VedtaksbrevAvsnitt } from '../../types/Vedtaksbrev';
import { TilbakekrevingVedtakUtdypendeTekstPanel } from './TilbakekrevingVedtakUtdypendeTekstPanel';

import styles from './tilbakekrevingEditerVedtaksbrevPanel.module.css';

export type FormValues = {
  [key: string]: {
    [key in UnderavsnittType]?: string;
  };
} & { [key in AvsnittType]?: string };

interface Props {
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
  <VStack gap="space-16">
    <Heading size="small" level="2">
      <FormattedMessage id="TilbakekrevingVedtak.Vedtaksbrev" />
    </Heading>
    {vedtaksbrevAvsnitt.map(avsnitt => {
      const underavsnitter = avsnitt.underavsnittsliste;
      const periode = `${avsnitt.fom}_${avsnitt.tom}` as const;
      const harPeriodeSomManglerObligatoriskVerdi = perioderSomIkkeHarUtfyltObligatoriskVerdi.some(p => p === periode);
      const visApen = avsnitt.avsnittstype === 'OPPSUMMERING' && fritekstOppsummeringPakrevdMenIkkeUtfylt;
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
              <VStack gap="space-8">
                {underavsnitter.map(underavsnitt => (
                  <React.Fragment
                    key={(underavsnitt.underavsnittstype ?? '') + underavsnitt.overskrift + underavsnitt.brødtekst}
                  >
                    {underavsnitt.overskrift && <Label className={styles.paddingTop}>{underavsnitt.overskrift}</Label>}
                    {underavsnitt.brødtekst && <BodyShort>{underavsnitt.brødtekst}</BodyShort>}
                    {underavsnitt.fritekstTillatt && (
                      <TilbakekrevingVedtakUtdypendeTekstPanel
                        name={
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

      const nyeFritekster: FormValues = avsnitt.fom
        ? { [`${avsnitt.fom}_${avsnitt.tom}`]: friteksterForUnderavsnitt }
        : friteksterForUnderavsnitt;

      return { ...acc, ...nyeFritekster };
    }, {});
