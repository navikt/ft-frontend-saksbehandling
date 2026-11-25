import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';

import { SubmitButton } from '@navikt/ft-form-hooks';
import { testAsynkronePeriodeHandlinger } from '@navikt/ft-frontend-utils-test';

import { DelOppPeriodeModal } from './components/splittePerioder/DelOppPeriodeModal';
import * as stories from './TilbakekrevingProsessIndex.stories';

vi.mock('@navikt/ft-form-hooks', async importOriginal => ({
  ...(await importOriginal<typeof import('@navikt/ft-form-hooks')>()),
  SubmitButton: vi.fn(() => null),
}));

vi.mock('./components/splittePerioder/DelOppPeriodeModal', () => ({
  DelOppPeriodeModal: vi.fn(() => null),
}));

const { Default } = composeStories(stories);

describe('asynkrone handlinger i tilbakekreving', () => {
  testAsynkronePeriodeHandlinger({
    renderSkjema: callbacks => {
      render(<Default {...callbacks} />);
    },
    hentLagreknapp: () => vi.mocked(SubmitButton).mock.lastCall![0],
    hentDelingsdialog: () => vi.mocked(DelOppPeriodeModal).mock.lastCall![0],
    perioder: {
      forstePeriode: { fom: '2019-01-01', tom: '2019-01-15' },
      andrePeriode: { fom: '2019-01-16', tom: '2019-04-01' },
    },
    opprinneligPeriode: '01.01.2019 - 01.04.2019',
    beløp: [4, 6],
  });
});
