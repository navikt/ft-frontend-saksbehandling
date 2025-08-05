import { PersonPencilFillIcon } from '@navikt/aksel-icons';

export const EditedIcon = () => (
  <span data-testid="editedIcon">
    <PersonPencilFillIcon
      title="Saksbehandler har endret feltets verdi"
      height={20}
      width={20}
      color="var(--ax-text-warning-decoration)"
    />
  </span>
);
