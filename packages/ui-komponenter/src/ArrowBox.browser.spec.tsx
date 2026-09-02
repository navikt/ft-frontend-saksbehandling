import { composeStories } from '@storybook/react-vite';
import { render } from '@testing-library/react';
import axe from 'axe-core';

import * as stories from './ArrowBox.stories';

const arrowBoxStories = Object.entries(composeStories(stories));

describe('ArrowBox tilgjengelighet', () => {
  it.each(arrowBoxStories)('%s har ingen tilgjengelighetsbrudd', async (_navn, Story) => {
    const { container } = render(<Story />);
    const resultater = await axe.run(container);

    expect(resultater.violations).toEqual([]);
  });
});
