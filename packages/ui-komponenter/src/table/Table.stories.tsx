import { ComponentProps } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';
import { TableColumn } from './TableColumn';
import { TableRow } from './TableRow';

const meta = {
  title: 'Table',
  component: Table,
  args: {
    children: <></>,
  },
  render: ({ noHover, isDashedBottomBorder, isSelected, isBold, isApLeftBorder }) => (
    <Table headerColumnContent={[<div key="1">Navn</div>, <div key="2">Alder</div>]} noHover={noHover}>
      <TableRow isDashedBottomBorder={isDashedBottomBorder} isSelected={isSelected}>
        <TableColumn>Espen Utvikler</TableColumn>
        <TableColumn>41</TableColumn>
      </TableRow>
      <TableRow isApLeftBorder={isApLeftBorder} isBold={isBold}>
        <TableColumn>Auto Joakim</TableColumn>
        <TableColumn>35</TableColumn>
      </TableRow>
    </Table>
  ),
} satisfies Meta<
  ComponentProps<typeof Table> & {
    isDashedBottomBorder: boolean;
    isSelected: boolean;
    isBold: boolean;
    isApLeftBorder: boolean;
  }
>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TabellMedRadhoover: Story = {
  args: {
    noHover: false,
    isDashedBottomBorder: true,
    isSelected: false,
    isBold: false,
    isApLeftBorder: true,
  },
};

export const TabellUtenRadhoover: Story = {
  args: {
    noHover: true,
    isDashedBottomBorder: false,
    isSelected: true,
    isBold: true,
    isApLeftBorder: false,
  },
};
