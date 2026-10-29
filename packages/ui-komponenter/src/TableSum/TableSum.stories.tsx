import { Table } from '@navikt/ds-react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { TableSum } from './TableSum';

const meta = {
  title: 'TableSum',
  component: TableSum,
  args: {
    bottomBorder: 'single',
    children: (
      <Table.Row>
        <Table.HeaderCell scope="row">Sum</Table.HeaderCell>
        <Table.DataCell align="right">300</Table.DataCell>
      </Table.Row>
    ),
  },
  decorators: [
    Story => (
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.DataCell>A</Table.DataCell>
            <Table.DataCell align="right">100</Table.DataCell>
          </Table.Row>
          <Table.Row>
            <Table.DataCell>B</Table.DataCell>
            <Table.DataCell align="right">200</Table.DataCell>
          </Table.Row>
        </Table.Body>
        <Story />
      </Table>
    ),
  ],
} satisfies Meta<typeof TableSum>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {};

export const Double: Story = {
  args: {
    bottomBorder: 'double',
  },
};

export const MedSubtotaler: Story = {
  args: {
    bottomBorder: 'double',
    withSubtotals: true,
    children: (
      <>
        <Table.Row>
          <Table.HeaderCell scope="row">Subtotal A</Table.HeaderCell>
          <Table.DataCell align="right">100</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope="row">Subtotal B</Table.HeaderCell>
          <Table.DataCell align="right">200</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope="row">Total</Table.HeaderCell>
          <Table.HeaderCell align="right">300</Table.HeaderCell>
        </Table.Row>
      </>
    ),
  },
};
