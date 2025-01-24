import React, { ComponentProps, useState } from 'react';
import { StoryFn } from '@storybook/react';
import { UserPanel } from './UserPanel';

export default {
  title: 'UserPanel',
  component: UserPanel,
};

const Template: StoryFn<ComponentProps<typeof UserPanel>> = () => {
  const [isToggled, toggle] = useState(false);

  const doToggle = () => {
    toggle(!isToggled);
  };

  return (
    <div style={{ backgroundColor: 'black', width: '100px' }}>
      <UserPanel name="navn" onClick={doToggle} isToggled={isToggled} />
    </div>
  );
};

export const Default = Template.bind({});
