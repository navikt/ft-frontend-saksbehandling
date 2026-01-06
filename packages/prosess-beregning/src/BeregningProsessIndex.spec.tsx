import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './BeregningProsessIndex.stories';

const { ToGrunnlagHvorEnHarÅpentAP } = composeStories(stories);

describe('BeregningProsessIndex', () => {
  it('skal vise tabs', async () => {
    render(<ToGrunnlagHvorEnHarÅpentAP />);

    expect(screen.getByRole('tab', { name: '31.10.2025', selected: true })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel', { name: '31.10.2025' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: '03.12.2025', selected: false })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: '03.12.2025', selected: false }));
    expect(screen.queryByRole('tabpanel', { name: '31.10.2025' })).not.toBeInTheDocument();

    expect(screen.getByRole('tab', { name: '03.12.2025', selected: true })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel', { name: '03.12.2025' })).toBeInTheDocument();
  });
});
