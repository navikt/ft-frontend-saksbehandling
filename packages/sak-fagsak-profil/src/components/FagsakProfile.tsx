import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Tag, BodyShort, Heading, HStack } from '@navikt/ds-react';
import { Tooltip, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { KodeverkMedNavn } from '@navikt/ft-types';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

const visSakDekningsgrad = (saksKode: string, dekningsgrad?: number): boolean => {
  const erForeldrepenger = saksKode === FagsakYtelseType.FORELDREPENGER;
  const gyldigDekningsGrad = dekningsgrad === 100 || dekningsgrad === 80;

  return erForeldrepenger && gyldigDekningsGrad;
};

export interface OwnProps {
  saksnummer: string;
  fagsakYtelseType: KodeverkMedNavn;
  fagsakStatus: KodeverkMedNavn;
  dekningsgrad?: number;
  fagsakMarkeringTekst?: string;
}

/**
 * FagsakProfile
 *
 * Viser fagsakinformasjon og knapper for å endre status eller lukke sak.
 */
const FagsakProfile: FunctionComponent<OwnProps> = ({
  saksnummer,
  fagsakYtelseType,
  fagsakStatus,
  dekningsgrad,
  fagsakMarkeringTekst,
}) => {
  const intl = useIntl();
  return (
    <>
      <HStack gap="4">
        <Heading size="medium">{fagsakYtelseType.navn}</Heading>
        {visSakDekningsgrad(fagsakYtelseType.kode, dekningsgrad) && (
          <Tooltip content={intl.formatMessage({ id: 'FagsakProfile.Dekningsgrad' }, { dekningsgrad })} alignBottom>
            <Tag variant="info">{`${dekningsgrad}%`}</Tag>
          </Tooltip>
        )}
        {fagsakMarkeringTekst && (
          <Tooltip
            content={intl.formatMessage({ id: 'FagsakProfile.FagsakMarkering' }, { fagsakMarkeringTekst })}
            alignBottom
          >
            <Tag variant="alt1">{`${fagsakMarkeringTekst}`}</Tag>
          </Tooltip>
        )}
      </HStack>
      <VerticalSpacer eightPx />
      <BodyShort size="small">{`${saksnummer} - ${fagsakStatus.navn}`}</BodyShort>
    </>
  );
};

export default FagsakProfile;
