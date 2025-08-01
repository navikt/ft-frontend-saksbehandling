import React from 'react';

import { HStack } from '@navikt/ds-react';

interface CardProps {
  children: React.ReactNode;
  active?: boolean;
  icon: React.ReactNode;
}

export const VisittKort = ({ children, active, icon }: CardProps) => (
  <HStack
    gap="space-16"
    align="center"
    wrap={false}
    padding="4"
    style={{
      zIndex: 2,
      overflow: 'hidden',
      borderBottom: active ? '4px solid var(--a-border-action-selected)' : '0',
    }}
  >
    <div style={{ display: 'flex' }}>{icon}</div>
    {children}
  </HStack>
);
