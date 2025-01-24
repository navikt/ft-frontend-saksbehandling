import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import { Meta, StoryObj } from '@storybook/react';
import { useMemo, useState } from 'react';
import { SideMenu } from './SideMenu';

const meta = {
  title: 'Side menu',
  component: SideMenu,
  render: ({ heading, links, onClick }) => {
    const [currentIndex, setCurrentIndex] = useState(links.findIndex(({ active }) => active) ?? 0);
    const handleOnClick = (index: number): void => {
      setCurrentIndex(index);
      onClick(index);
    };

    const linksWithActiveState = useMemo(
      () =>
        links.map((link, index) => ({
          ...link,
          active: currentIndex === index,
        })),
      [links, currentIndex],
    );
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
