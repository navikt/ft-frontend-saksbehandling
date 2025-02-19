import { ReactNode } from 'react';

import { Label } from '@navikt/ds-react';

import { BorderBox } from './BorderBox';
import { VerticalSpacer } from './VerticalSpacer';

export interface PropsWrapper {
  error: boolean;
  children: ReactNode;
  withoutBorder: boolean;
  className: string;
}

const Wrapper = ({ withoutBorder, error, children, className }: PropsWrapper) => {
  if (withoutBorder) {
    return children;
  }

  return (
    <BorderBox error={error} className={className}>
      {children}
    </BorderBox>
  );
};

export interface Props {
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
export const FaktaGruppe = ({
  merknaderFraBeslutter,
  title,
  children,
  withoutBorder = false,
  className = '',
}: Props) => {
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
