import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Tag, BodyShort, Heading, HStack, VStack } from '@navikt/ds-react';
import { Tooltip } from '@navikt/ft-ui-komponenter';
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
  fagsakMarkeringTekster?: string[];
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
  fagsakMarkeringTekster,
}) => {
  const intl = useIntl();
  return (
    <VStack gap="4">
      <HStack gap="4">
        <Heading size="medium">{fagsakYtelseType.navn}</Heading>
        {visSakDekningsgrad(fagsakYtelseType.kode, dekningsgrad) && (
          <Tooltip content={intl.formatMessage({ id: 'FagsakProfile.Dekningsgrad' }, { dekningsgrad })} alignBottom>
            <Tag variant="info">{`${dekningsgrad}%`}</Tag>
          </Tooltip>
        )}
      </HStack>
      <BodyShort size="small">{`${saksnummer} - ${fagsakStatus.navn}`}</BodyShort>
      {fagsakMarkeringTekster && fagsakMarkeringTekster.length > 0 && (
        <HStack gap="4">
          {fagsakMarkeringTekster.map(tekst => (
            <Tooltip
              key={tekst}
              content={intl.formatMessage({ id: 'FagsakProfile.FagsakMarkering' }, { tekst })}
              alignBottom
            >
              <Tag size="small" variant="alt1">
                {tekst}
              </Tag>
            </Tooltip>
          ))}
        </HStack>
      )}
    </VStack>
  );
};

export default FagsakProfile;
