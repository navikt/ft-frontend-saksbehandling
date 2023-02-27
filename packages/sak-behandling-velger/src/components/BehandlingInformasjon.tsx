import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import classNames from 'classnames';
import { Panel, BodyShort, Label, Detail } from '@navikt/ds-react';
import {
  FlexContainer,
  FlexRow,
  FlexColumn,
  Image,
  Tooltip,
  DateLabel,
  TimeLabel,
  VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { BehandlingAppKontekst, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType, BehandlingType, BehandlingArsakType } from '@navikt/ft-kodeverk';

import chevronUp from '../images/pil_opp.svg';
import chevronDown from '../images/pil_ned.svg';
import stjerneImg from '../images/stjerne.svg';

import styles from './behandlingInformasjon.module.css';

const tilbakekrevingÅrsakTyperKlage = [BehandlingArsakType.RE_KLAGE_KA, BehandlingArsakType.RE_KLAGE_NFP];

const erTilbakekrevingÅrsakKlage = (årsak?: string): boolean =>
  !!årsak && tilbakekrevingÅrsakTyperKlage.some(å => å === årsak);

const renderChevron = (intl: IntlShape, chevron: string, messageId: string): ReactElement => (
  <Image
    src={chevron}
    alt={intl.formatMessage({ id: messageId })}
    tooltip={intl.formatMessage({ id: messageId })}
    alignTooltipLeft
  />
);

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
              <Image
                className={styles.starImage}
                src={stjerneImg}
                tooltip={<FormattedMessage id="BehandlingPickerItemContent.GjeldendeVedtak" />}
                alignTooltipLeft
              />
            )}
          </FlexColumn>
          <FlexColumn>
            {withChevronDown && renderChevron(intl, chevronDown, 'BehandlingPickerItemContent.Open')}
            {withChevronUp && renderChevron(intl, chevronUp, 'BehandlingPickerItemContent.Close')}
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
