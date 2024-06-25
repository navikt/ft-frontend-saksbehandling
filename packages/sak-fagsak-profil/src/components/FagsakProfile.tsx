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
    <>
      <Heading size="medium">{fagsakYtelseType.navn}</Heading>
      <VerticalSpacer eightPx />
      <BodyShort size="small">{`${saksnummer} - ${fagsakStatus.navn}`}</BodyShort>
      <HStack gap="4">
        {visSakDekningsgrad(fagsakYtelseType.kode, dekningsgrad) && (
          <Tooltip content={intl.formatMessage({ id: 'FagsakProfile.Dekningsgrad' }, { dekningsgrad })} alignBottom>
            <Tag size="small" variant="info">{`${dekningsgrad}%`}</Tag>
          </Tooltip>
        )}
        {fagsakMarkeringTekster && fagsakMarkeringTekster.length > 0 && fagsakMarkeringTekster.map((tekst) => (
          <Tooltip
            content={intl.formatMessage({ id: 'FagsakProfile.FagsakMarkering' }, { tekst })}
            alignBottom
          >
            <Tag size="small" variant="alt1">{`${tekst}`}</Tag>
          </Tooltip>
        ))
        }
      </HStack>
    </>
  );
};

export default FagsakProfile;
