import React, { FunctionComponent, ReactNode } from 'react';
import { Label } from '@navikt/ds-react';

import BorderBox from './BorderBox';
import VerticalSpacer from './VerticalSpacer';

export interface OwnPropsWrapper {
  error: boolean;
  children: ReactNode;
  withoutBorder: boolean;
  className: string;
}

// @ts-ignore fiks
const Wrapper: FunctionComponent<OwnPropsWrapper> = ({ withoutBorder, error, children, className }) => {
  if (withoutBorder) {
    return children;
  }

  return (
    <BorderBox error={error} className={className}>
      {children}
    </BorderBox>
  );
};

export interface OwnPropsFaktaGruppe {
  merknaderFraBeslutter?: {
    notAccepted?: boolean;
  };
  children: ReactNode;
  title?: string;
  withoutBorder?: boolean;
  className?: string;
}

/**
 * FaktaGruppe
 *
 * Presentasjonskomponent. Grupperingsboks til bruk i faktapaneler, med eller uten ramme. Man kan også spesifisere hvilket aksjonspunkt
 * gruppen hører til, slik at gruppen får rød ramme hvis beslutter har lagt inn merknader.
 */
const FaktaGruppe: FunctionComponent<OwnPropsFaktaGruppe> = ({
  merknaderFraBeslutter,
  title,
  children,
  withoutBorder = false,
  className = '',
}) => {
  const error = !!(merknaderFraBeslutter && merknaderFraBeslutter.notAccepted);
  return (
    <Wrapper withoutBorder={withoutBorder && !error} error={error} className={className}>
      {title && (
        <>
          <Label size="small">{title}</Label>
          <VerticalSpacer twentyPx />
        </>
      )}
      {children}
    </Wrapper>
  );
};

export default FaktaGruppe;
