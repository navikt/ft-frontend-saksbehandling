import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { BodyShort, Label } from '@navikt/ds-react/esm';

import { decodeHtmlEntity } from '@navikt/ft-utils';
import { Risikoklassifisering } from '@navikt/ft-types';

export const FarePanel: FunctionComponent<{
  risikoFaresignaler: {
    faresignaler: string[];
  };
  labelId: string;
}> = ({ risikoFaresignaler, labelId }) => (
  <div>
    <FlexRow>
      <FlexColumn>
        <Label size="small">
          <FormattedMessage id={labelId} />
        </Label>
        <ul>
          {risikoFaresignaler.faresignaler.map(faresignal => (
            <li key={faresignal}>
              <BodyShort size="small">{decodeHtmlEntity(faresignal)}</BodyShort>
            </li>
          ))}
        </ul>
      </FlexColumn>
    </FlexRow>
  </div>
);

interface OwnProps {
  risikoklassifisering: Risikoklassifisering;
}

/**
 * Faresignaler
 *
 * Presentasjonskomponent. Viser en liste over faresignaler knyttet til behandlingen.
 */
const Faresignaler: FunctionComponent<OwnProps> = ({ risikoklassifisering }) => (
  <FlexContainer>
    {risikoklassifisering.medlFaresignaler && risikoklassifisering.medlFaresignaler.faresignaler && (
      <FarePanel risikoFaresignaler={risikoklassifisering.medlFaresignaler} labelId="Risikopanel.Panel.Medlemskap" />
    )}
    {risikoklassifisering.iayFaresignaler && risikoklassifisering.iayFaresignaler.faresignaler && (
      <FarePanel
        risikoFaresignaler={risikoklassifisering.iayFaresignaler}
        labelId="Risikopanel.Panel.ArbeidsforholdInntekt"
      />
    )}
  </FlexContainer>
);

export default Faresignaler;
