import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import Table from './Table';
import TableRow from './TableRow';
import TableColumn from './TableColumn';

export default {
  title: 'Table',
  component: Table,
};

const Template: StoryFn<{
  noHover: boolean;
  isDashedBottomBorder: boolean;
  isSelected: boolean;
  isBold: boolean;
  isApLeftBorder: boolean;
}> = ({ noHover, isDashedBottomBorder, isSelected, isBold, isApLeftBorder }) => (
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
);

export const TabellMedRadhoover = Template.bind({});
TabellMedRadhoover.args = {
  noHover: false,
  isDashedBottomBorder: true,
  isSelected: false,
  isBold: false,
  isApLeftBorder: true,
};

export const TabellUtenRadhoover = Template.bind({});
TabellUtenRadhoover.args = {
  noHover: true,
  isDashedBottomBorder: false,
  isSelected: true,
  isBold: true,
  isApLeftBorder: false,
};
