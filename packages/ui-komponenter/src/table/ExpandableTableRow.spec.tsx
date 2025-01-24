import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './ExpandableTableRow.stories';

const { TabellMedEkspanderbarRad } = composeStories(stories);

describe('<ExpandableTableRow>', () => {
  it('skal ekspandere rad ved å klikke på den', async () => {
    render(<TabellMedEkspanderbarRad />);

    expect(await screen.findByText('Navn')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Auto Joakim'));

    expect(await screen.findByText('Innhold i rad')).toBeInTheDocument();
  });
});
