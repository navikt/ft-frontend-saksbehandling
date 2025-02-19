import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { UserPanel } from './UserPanel';

const meta = {
  title: 'plattform-komponenter/UserPanel',
  component: UserPanel,
  args: {
    onClick: action('button-click'),
    isToggled: false,
    name: 'navn',
  },
  render: storyArgs => {
    const [args, setArgs] = useState(storyArgs);

    const onClick = (e: React.FormEvent<HTMLButtonElement>) => {
      args.onClick?.(e);
      setArgs(oldArgs => ({ ...oldArgs, isToggled: !args.isToggled }));
    };

    return (
      <div style={{ backgroundColor: 'black', width: '100px' }}>
        <UserPanel name="navn" onClick={onClick} isToggled={args.isToggled} />
      </div>
    );
  },
} satisfies Meta<typeof UserPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
