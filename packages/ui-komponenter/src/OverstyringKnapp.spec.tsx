import { composeStories } from '@storybook/react-vite';
import { render, screen } from '@testing-library/react';

import * as stories from './OverstyringKnapp.stories';

const { VisDefaultOverstyringsknapp, VisOverstyringsknappNårOverstyrt } = composeStories(stories);

describe('OverstyringKnapp', () => {
  it('skal ha tilgjengelig navn når den ikke er overstyrt', () => {
    render(<VisDefaultOverstyringsknapp />);
    expect(screen.getByRole('button', { name: 'Overstyr' })).toBeEnabled();
  });

  it('skal ha tilgjengelig navn når den er overstyrt', () => {
    render(<VisOverstyringsknappNårOverstyrt />);
    expect(screen.getByRole('button', { name: 'Har overstyrt' })).toBeDisabled();
  });
});
