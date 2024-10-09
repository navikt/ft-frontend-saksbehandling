import React from 'react';

/* Brukes til å tilgjengeliggjøre saksbehandlernavn. Brukes direkte i AssessedBy.tsx 
  
{
  'Z12345': 'Tommy Tilbakekreving',
}
*/

const SaksbehandlernavnContext = React.createContext<Record<string, string>>({});

export default SaksbehandlernavnContext;
