import { RawIntlProvider } from 'react-intl';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { createIntl } from '@navikt/ft-utils';

import { refusjonsandelerForTreArbeidsgivere } from '../../../testdata/refusjonsandeler';
import type { RefusjonskravFormRad } from './formValues';
import { RefusjonskravRadVurdering } from './RefusjonskravRadVurdering';

import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('RefusjonskravRadVurdering', () => {
  it('skal vise vurderingsvalg og veiledning', async () => {
    render(
      <RawIntlProvider value={intl}>
        <RefusjonskravRadVurdering index={0} krav={krav} readOnly={false} onSave={vi.fn()} onDirtyChange={vi.fn()} />
      </RawIntlProvider>,
    );

    expect(screen.getByRole('radiogroup', { name: /Skal det gis refusjon fra/ })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'Ja' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: /Nei/ })).not.toBeChecked();
    expect(screen.queryByRole('radio', { name: 'Årsak 1' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Lagre' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Angre' })).toBeDisabled();

    await userEvent.click(screen.getByText('Hvordan går jeg frem?'));
    expect(
      screen.getByText(
        'Undersøk om det har vært fristavbrytende kontakt med arbeidsgiver innen frist for refusjonskrav (3 måneder).',
      ),
    ).toBeVisible();
  });

  it('skal lagre utfylt utfall og årsak', async () => {
    const onSave = vi.fn();
    const onDirtyChange = vi.fn();
    render(
      <RawIntlProvider value={intl}>
        <RefusjonskravRadVurdering
          index={0}
          krav={krav}
          readOnly={false}
          onSave={onSave}
          onDirtyChange={onDirtyChange}
        />
      </RawIntlProvider>,
    );

    expect(screen.getByRole('button', { name: 'Lagre' })).toBeDisabled();
    expect(onSave).not.toHaveBeenCalled();

    const nei = screen.getByRole('radio', { name: /Nei/ });
    await userEvent.click(nei);
    expect(nei).toBeChecked();
    expect(onDirtyChange).toHaveBeenLastCalledWith(0, true);
    expect(screen.getByRole('button', { name: 'Angre' })).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Lagre' })).toBeEnabled();
    expect(screen.getByRole('radio', { name: 'Årsak 1' })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Angre' }));
    expect(nei).not.toBeChecked();
    expect(screen.queryByRole('radio', { name: 'Årsak 1' })).not.toBeInTheDocument();
    expect(onDirtyChange).toHaveBeenLastCalledWith(0, false);
    expect(screen.getByRole('button', { name: 'Angre' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Lagre' })).toBeDisabled();

    await userEvent.click(nei);
    await userEvent.click(screen.getByRole('button', { name: 'Lagre' }));
    expect(screen.getByText('Feltet må fylles ut')).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();

    await userEvent.click(screen.getByRole('radio', { name: 'Årsak 1' }));
    await userEvent.click(screen.getByRole('button', { name: 'Lagre' }));
    expect(onSave).toHaveBeenCalledExactlyOnceWith(0, { utfall: 'AVSLÅTT', utfallÅrsak: 'ÅRSAK1' });
    expect(screen.getByRole('button', { name: 'Lagre' })).toBeDisabled();
  });
});

const krav: RefusjonskravFormRad = {
  arbeidsgiverIdent: '999999999',
  arbeidsgiverNavn: 'Brunostfabrikken AS',
  kilde: 'IM',
  ...refusjonsandelerForTreArbeidsgivere[0].refusjonsperioder[0],
};
