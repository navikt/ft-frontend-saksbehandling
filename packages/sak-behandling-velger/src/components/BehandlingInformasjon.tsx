import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import classNames from 'classnames';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import Panel from 'nav-frontend-paneler';
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

import styles from './behandlingInformasjon.less';

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
            <Element>
              {getKodeverkMedNavn(behandling.type, KodeverkType.BEHANDLING_TYPE, behandling.type)?.navn || ''}
            </Element>
          </FlexColumn>
          {behandling.type === BehandlingType.REVURDERING && behandling.førsteÅrsak?.behandlingArsakType && (
            <>
              <FlexColumn className={styles.arsakPadding}>-</FlexColumn>
              <FlexColumn>
                <Normaltekst>
                  {getKodeverkMedNavn(
                    behandling.førsteÅrsak.behandlingArsakType,
                    KodeverkType.BEHANDLING_AARSAK,
                    BehandlingType.REVURDERING,
                  )?.navn || ''}
                </Normaltekst>
              </FlexColumn>
            </>
          )}
          {behandling.type === BehandlingType.TILBAKEKREVING_REVURDERING &&
            erTilbakekrevingÅrsakKlage(behandling.førsteÅrsak?.behandlingArsakType) && (
              <>
                <FlexColumn className={styles.arsakPadding}>-</FlexColumn>
                <FlexColumn>
                  <Normaltekst>
                    <FormattedMessage id="Behandlingspunkt.Årsak.Klage" />
                  </Normaltekst>
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
            <Normaltekst>
              <FormattedMessage id="BehandlingPickerItemContent.Behandlingstatus" />
            </Normaltekst>
          </FlexColumn>
          <FlexColumn>
            <Normaltekst>
              {getKodeverkMedNavn(behandling.status, KodeverkType.BEHANDLING_STATUS, BehandlingType.FORSTEGANGSSOKNAD)
                ?.navn || ''}
            </Normaltekst>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className={styles.firstColumnWidth}>
            <Normaltekst>
              <FormattedMessage id="BehandlingPickerItemContent.Resultat" />
            </Normaltekst>
          </FlexColumn>
          <FlexColumn>
            <Normaltekst>
              {behandling.behandlingsresultat?.type
                ? getKodeverkMedNavn(
                    behandling.behandlingsresultat.type,
                    KodeverkType.BEHANDLING_RESULTAT_TYPE,
                    behandling.type,
                  )?.navn
                : '-'}
            </Normaltekst>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn className={styles.firstColumnWidth}>
            <Normaltekst>
              <FormattedMessage id="BehandlingPickerItemContent.Opprettet" />
            </Normaltekst>
          </FlexColumn>
          <FlexColumn>
            <Normaltekst className={styles.inline}>
              <DateLabel dateString={behandling.opprettet} />
            </Normaltekst>
            <Undertekst className={classNames(styles.inline, styles.timePadding)}>
              <FormattedMessage id="DateTimeLabel.Kl" />
            </Undertekst>
            <Undertekst className={styles.inline}>
              <TimeLabel dateTimeString={behandling.opprettet} />
            </Undertekst>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn className={styles.firstColumnWidth}>
            <Normaltekst>
              <FormattedMessage id="BehandlingPickerItemContent.Avsluttet" />
            </Normaltekst>
          </FlexColumn>
          <FlexColumn>
            {behandling.avsluttet && (
              <>
                <Normaltekst className={styles.inline}>
                  <DateLabel dateString={behandling.avsluttet} />
                </Normaltekst>
                <Undertekst className={classNames(styles.inline, styles.timePadding)}>
                  <FormattedMessage id="DateTimeLabel.Kl" />
                </Undertekst>
                <Undertekst className={styles.inline}>
                  <TimeLabel dateTimeString={behandling.avsluttet} />
                </Undertekst>
              </>
            )}
          </FlexColumn>
          <FlexColumn className={styles.pushRightCorner}>
            <Normaltekst className={styles.inline}>
              <FormattedMessage id="BehandlingPickerItemContent.Enhet" />
            </Normaltekst>
            <Tooltip content={behandling.behandlendeEnhetNavn} alignLeft>
              <Normaltekst className={styles.inline}>{behandling.behandlendeEnhetId}</Normaltekst>
            </Tooltip>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer fourPx />
    </Panel>
  );
};

export default BehandlingInformasjon;
