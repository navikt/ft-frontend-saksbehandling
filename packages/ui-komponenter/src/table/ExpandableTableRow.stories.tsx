import React, { useCallback, useState } from 'react';
import { StoryFn } from '@storybook/react';

import Table from './Table';
import ExpandableTableRow from './ExpandableTableRow';
import TableColumn from './TableColumn';

export default {
  title: 'TableMedEkspanderbarRad',
  component: Table,
};

const Template: StoryFn = () => {
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
};

export const TabellMedEkspanderbarRad = Template.bind({});
