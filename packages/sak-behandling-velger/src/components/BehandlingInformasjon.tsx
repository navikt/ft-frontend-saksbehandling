import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import classNames from 'classnames';
import { ChevronDownIcon, ChevronUpIcon, StarFillIcon } from '@navikt/aksel-icons';
import { Panel, BodyShort, Label, Detail } from '@navikt/ds-react';
import {
  FlexContainer,
  FlexRow,
  FlexColumn,
  Tooltip,
  DateLabel,
  TimeLabel,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { BehandlingAppKontekst, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType, BehandlingType, BehandlingArsakType } from '@navikt/ft-kodeverk';

import styles from './behandlingInformasjon.module.css';

const tilbakekrevingÅrsakTyperKlage = [BehandlingArsakType.RE_KLAGE_KA, BehandlingArsakType.RE_KLAGE_NFP];

const erTilbakekrevingÅrsakKlage = (årsak?: string): boolean =>
  !!årsak && tilbakekrevingÅrsakTyperKlage.some(å => å === årsak);

interface OwnProps {
  withChevronDown?: boolean;
  withChevronUp?: boolean;
  behandling: BehandlingAppKontekst;
  getKodeverkMedNavn: (kode: string, kodeverk: KodeverkType, behandlingType?: string) => KodeverkMedNavn | undefined;
}

/**
 * BehandlingInformasjon
 *
 * Håndterer formatering av innholdet i den enkelte behandling i behandlingsvelgeren.
 */
const BehandlingInformasjon: FunctionComponent<OwnProps> = ({
  withChevronDown = false,
  withChevronUp = false,
  behandling,
  getKodeverkMedNavn,
}) => {
  const intl = useIntl();
  return (
    <Panel border>
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.arsakPadding}>
            <Label size="small">
              {getKodeverkMedNavn(behandling.type, KodeverkType.BEHANDLING_TYPE, behandling.type)?.navn || ''}
            </Label>
          </FlexColumn>
          {(behandling.type === BehandlingType.REVURDERING || behandling.type === BehandlingType.KLAGE) &&
            behandling.førsteÅrsak?.behandlingArsakType && (
              <>
                <FlexColumn className={styles.arsakPadding}>-</FlexColumn>
                <FlexColumn>
                  <BodyShort size="small">
                    {getKodeverkMedNavn(
                      behandling.førsteÅrsak.behandlingArsakType,
                      KodeverkType.BEHANDLING_AARSAK,
                      BehandlingType.REVURDERING,
                    )?.navn || ''}
                  </BodyShort>
                </FlexColumn>
              </>
            )}
          {behandling.type === BehandlingType.TILBAKEKREVING_REVURDERING &&
            erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak?.behandlingArsakType) && (
              <>
                <FlexColumn className={styles.arsakPadding}>-</FlexColumn>
                <FlexColumn>
                  <BodyShort size="small">
                    <FormattedMessage id="Behandlingspunkt.Årsak.Klage" />
                  </BodyShort>
                </FlexColumn>
              </>
            )}
          <FlexColumn className={styles.pushRight}>
            {behandling.gjeldendeVedtak && (
              <StarFillIcon
                className={styles.starImage}
                title={intl.formatMessage({ id: 'BehandlingPickerItemContent.GjeldendeVedtak' })}
              />
            )}
          </FlexColumn>
          <FlexColumn>
            {withChevronDown && (
              <ChevronDownIcon
                title={intl.formatMessage({ id: 'BehandlingPickerItemContent.Open' })}
                className={styles.chevronImage}
              />
            )}
            {withChevronUp && (
              <ChevronUpIcon
                title={intl.formatMessage({ id: 'BehandlingPickerItemContent.Close' })}
                className={styles.chevronImage}
              />
            )}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer eightPx />
      <hr className={styles.line} />
      <VerticalSpacer sixteenPx />
      <FlexContainer>
        <FlexRow>
          <FlexColumn className={styles.firstColumnWidth}>
            <BodyShort size="small">
              <FormattedMessage id="BehandlingPickerItemContent.Behandlingstatus" />
            </BodyShort>
          </FlexColumn>
          <FlexColumn>
            <BodyShort size="small">
              {getKodeverkMedNavn(behandling.status, KodeverkType.BEHANDLING_STATUS, BehandlingType.FORSTEGANGSSOKNAD)
                ?.navn || ''}
            </BodyShort>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className={styles.firstColumnWidth}>
            <BodyShort size="small">
              <FormattedMessage id="BehandlingPickerItemContent.Resultat" />
            </BodyShort>
          </FlexColumn>
          <FlexColumn>
            <BodyShort size="small">
              {behandling.behandlingsresultat?.type
                ? getKodeverkMedNavn(
                    behandling.behandlingsresultat.type,
                    KodeverkType.BEHANDLING_RESULTAT_TYPE,
                    behandling.type,
                  )?.navn
                : '-'}
            </BodyShort>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn className={styles.firstColumnWidth}>
            <BodyShort size="small">
              <FormattedMessage id="BehandlingPickerItemContent.Opprettet" />
            </BodyShort>
          </FlexColumn>
          <FlexColumn>
            <BodyShort size="small" className={styles.inline}>
              <DateLabel dateString={behandling.opprettet} />
            </BodyShort>
            <Detail size="small" className={classNames(styles.inline, styles.timePadding)}>
              <FormattedMessage id="DateTimeLabel.Kl" />
            </Detail>
            <Detail size="small" className={styles.inline}>
              <TimeLabel dateTimeString={behandling.opprettet} />
            </Detail>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className={styles.firstColumnWidth}>
            <BodyShort size="small">
              <FormattedMessage id="BehandlingPickerItemContent.Avsluttet" />
            </BodyShort>
          </FlexColumn>
          <FlexColumn>
            {behandling.avsluttet && (
              <>
                <BodyShort size="small" className={styles.inline}>
                  <DateLabel dateString={behandling.avsluttet} />
                </BodyShort>
                <Detail size="small" className={classNames(styles.inline, styles.timePadding)}>
                  <FormattedMessage id="DateTimeLabel.Kl" />
                </Detail>
                <Detail size="small" className={styles.inline}>
                  <TimeLabel dateTimeString={behandling.avsluttet} />
                </Detail>
              </>
            )}
          </FlexColumn>
          <FlexColumn className={styles.pushRightCorner}>
            <BodyShort size="small" className={styles.inline}>
              <FormattedMessage id="BehandlingPickerItemContent.Enhet" />
            </BodyShort>
            <Tooltip content={behandling.behandlendeEnhetNavn} alignLeft>
              <BodyShort size="small" className={styles.inline}>
                {behandling.behandlendeEnhetId}
              </BodyShort>
            </Tooltip>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer fourPx />
    </Panel>
  );
};

export default BehandlingInformasjon;
