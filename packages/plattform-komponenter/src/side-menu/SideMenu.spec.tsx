import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './SideMenu.stories';

const { StatefulSideMenu } = composeStories(stories);

describe('<SideMenu>', () => {
  it('skal vise meny', async () => {
    render(<StatefulSideMenu />);

    expect(await screen.findByText('Dette er en test')).toBeInTheDocument();
    expect(screen.getByText('en link')).toBeInTheDocument();
    expect(screen.getByText('en link til')).toBeInTheDocument();
  });
});
