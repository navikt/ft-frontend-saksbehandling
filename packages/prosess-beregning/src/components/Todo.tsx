import { Tag, Tooltip } from '@navikt/ds-react';

/**
 * Tag for å visuelt vise tings som må avklares eller gjøres
 */
export const Todo = ({ beskrivelse }: { beskrivelse: string }) => {
  if (window.location.href.includes('intern.nav.no')) {
    return null;
  }
  return (
    <Tooltip content={beskrivelse}>
      <Tag variant="warning" size="xsmall">
        TODO
      </Tag>
    </Tooltip>
  );
};
