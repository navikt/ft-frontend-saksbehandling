import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './LoadingPanel.stories';

const { Default } = composeStories(stories);

describe('<LoadingPanel>', () => {
  it('skal vise lasteikon', async () => {
    render(<Default />);

    expect(await screen.findByText('venter...')).toBeInTheDocument();
  });
});
