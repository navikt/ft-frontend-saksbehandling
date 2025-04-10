import React from 'react';

interface IconProps {
  children: React.ReactNode;
  size: number;
}

/**
 * @deprecated Bruk heller ikona frå Aksel: https://aksel.nav.no/ikoner
 */
export const Icon = ({ size, children }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
);
