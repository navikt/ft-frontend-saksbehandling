import React, { FunctionComponent, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { BodyShort, Heading } from '@navikt/ds-react';
import { EtikettInfo } from 'nav-frontend-etiketter';
import { FlexColumn, FlexContainer, FlexRow, Tooltip, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

const visSakDekningsgrad = (saksKode: string, dekningsgrad?: number): boolean => {
  const erForeldrepenger = saksKode === FagsakYtelseType.FORELDREPENGER;
  const gyldigDekningsGrad = dekningsgrad === 100 || dekningsgrad === 80;

  return erForeldrepenger && gyldigDekningsGrad;
};

interface OwnProps {
  saksnummer: string;
  fagsakYtelseType: KodeverkMedNavn;
  fagsakStatus: KodeverkMedNavn;
  renderBehandlingMeny: () => ReactNode;
  renderBehandlingVelger: () => ReactNode;
  dekningsgrad?: number;
}

/**
 * FagsakProfile
 *
 * Presentasjonskomponent. Viser fagsakinformasjon og knapper for å endre status eller lukke sak.
 */
const FagsakProfile: FunctionComponent<OwnProps> = ({
  saksnummer,
  fagsakYtelseType,
  fagsakStatus,
  renderBehandlingMeny,
  renderBehandlingVelger,
  dekningsgrad,
}) => {
  const intl = useIntl();
  return (
    <>
      <FlexContainer>
        <FlexRow spaceBetween alignItemsToBaseline>
          <FlexColumn>
            <FlexRow wrap>
              <FlexColumn>
                <Heading size="medium">{fagsakYtelseType.navn}</Heading>
              </FlexColumn>
              {visSakDekningsgrad(fagsakYtelseType.kode, dekningsgrad) && (
                <FlexColumn>
                  <Tooltip
                    content={intl.formatMessage({ id: 'FagsakProfile.Dekningsgrad' }, { dekningsgrad })}
                    alignBottom
                  >
                    <EtikettInfo>{`${dekningsgrad}%`}</EtikettInfo>
                  </Tooltip>
                </FlexColumn>
              )}
            </FlexRow>
          </FlexColumn>
          <FlexColumn>{renderBehandlingMeny()}</FlexColumn>
        </FlexRow>
        <VerticalSpacer eightPx />
        <FlexRow>
          <FlexColumn>
            <BodyShort size="small">{`${saksnummer} - ${fagsakStatus.navn}`}</BodyShort>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      {renderBehandlingVelger()}
    </>
  );
};

export default FagsakProfile;
