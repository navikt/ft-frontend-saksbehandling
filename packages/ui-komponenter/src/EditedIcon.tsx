import { PersonPencilFillIcon } from '@navikt/aksel-icons';

export const EditedIcon = () => (
  <PersonPencilFillIcon
    data-testid="editedIcon"
    title="Saksbehandler har endret feltets verdi"
    height={20}
    width={20}
    color="var(--a-icon-warning)"
  />
);
