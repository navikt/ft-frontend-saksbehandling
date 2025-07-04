import { useState } from 'react';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
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
    return (
      <div style={{ width: '400px', border: '1px dotted black' }}>
        <HStack>
          <SideMenu heading={heading} links={linksWithActiveState} onClick={handleOnClick} />
          <div style={{ width: '200px', height: '800px', padding: '24px' }}>annet innhold</div>
        </HStack>
      </div>
    );
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
        icon: <ExclamationmarkTriangleFillIcon fontSize="1rem" color={'var(--a-icon-warning)'} />,
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
