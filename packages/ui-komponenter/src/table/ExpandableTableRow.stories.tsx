import { useCallback, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ExpandableTableRow } from './ExpandableTableRow';
import { Table } from './Table';
import { TableColumn } from './TableColumn';

const meta = {
  title: 'TableMedEkspanderbarRad',
  component: Table,
  args: {
    children: <></>,
  },
  render: () => {
    const [visRad, toggleRad] = useState(false);

    const toggle = useCallback(() => toggleRad(!visRad), [visRad]);

    return (
      <Table headerColumnContent={[<div key="1">Navn</div>, <div key="2">Alder</div>]} noHover>
        <ExpandableTableRow
          isApLeftBorder
          showContent={visRad}
          toggleContent={toggle}
          content={<div>Innhold i rad</div>}
          alignWithColumn={0}
        >
          <TableColumn>Auto Joakim</TableColumn>
          <TableColumn>35</TableColumn>
        </ExpandableTableRow>
      </Table>
    );
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TabellMedEkspanderbarRad: Story = {};
