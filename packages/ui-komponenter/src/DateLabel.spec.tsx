import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';

import * as stories from './DateLabel.stories';

const { Default, MedTilpassetUtrykk } = composeStories(stories);

describe('DateLabel', () => {
  it('skal vise dato med default format', async () => {
    render(<Default />);

    expect(await screen.findByText('02.10.2017')).toBeInTheDocument();
  });

  it('skal vise dato med tilpasset format', async () => {
    render(<MedTilpassetUtrykk />);

    expect(await screen.findByText('2. oktober 17')).toBeInTheDocument();
  });
});
