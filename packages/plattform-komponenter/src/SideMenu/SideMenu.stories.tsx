import { useState } from 'react';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { SideMenu } from './SideMenu';

const meta = {
  component: SideMenu,
  render: ({ heading, links, onClick }) => {
    const [currentIndex, setCurrentIndex] = useState(links.findIndex(({ active }) => active) ?? 0);
    const handleOnClick = (index: number): void => {
      setCurrentIndex(index);
      onClick(index);
    };

    const linksWithActiveState = links.map((link, index) => ({
      ...link,
      active: currentIndex === index,
    }));
    return <SideMenu heading={heading} links={linksWithActiveState} onClick={handleOnClick} />;
  },
} satisfies Meta<typeof SideMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Fakta om',
    links: [
      {
        label: 'Saken',
      },
      {
        label: 'Medlemskap',
      },
      {
        icon: <ExclamationmarkTriangleFillIcon fontSize="1rem" color={'var(--ax-text-warning-decoration)'} />,
        label: 'Opptjening',
        active: true,
      },
      {
        label: 'Arbeid og inntekt',
      },
    ],
    onClick: () => null,
  },
};
