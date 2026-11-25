import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';

import { SubmitButton } from '@navikt/ft-form-hooks';
import { testAsynkronePeriodeHandlinger } from '@navikt/ft-frontend-utils-test';

import { DelOppPeriodeModal } from './components/splittePerioder/DelOppPeriodeModal';
import * as stories from './ForeldelseProsessIndex.stories';

vi.mock('@navikt/ft-form-hooks', async importOriginal => ({
  ...(await importOriginal<typeof import('@navikt/ft-form-hooks')>()),
  SubmitButton: vi.fn(() => null),
}));

vi.mock('./components/splittePerioder/DelOppPeriodeModal', () => ({
  DelOppPeriodeModal: vi.fn(() => null),
}));

const { Default } = composeStories(stories);

describe('asynkrone handlinger i foreldelse', () => {
  testAsynkronePeriodeHandlinger({
    renderSkjema: callbacks => {
      render(<Default {...callbacks} />);
    },
    hentLagreknapp: () => vi.mocked(SubmitButton).mock.lastCall![0],
    hentDelingsdialog: () => vi.mocked(DelOppPeriodeModal).mock.lastCall![0],
    perioder: {
      forstePeriode: { fom: '2019-03-01', tom: '2019-03-15' },
      andrePeriode: { fom: '2019-03-16', tom: '2019-03-31' },
    },
    opprinneligPeriode: '01.03.2019 - 31.03.2019',
    beløp: [1000, 2000],
  });
});
