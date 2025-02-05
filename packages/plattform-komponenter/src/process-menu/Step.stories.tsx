import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Step } from './Step';
import { StepType } from './StepType';

const meta = {
  title: 'plattform-komponenter/Step',
  component: Step,
  args: {
    onClick: action('onClick'),
    index: 0,
    isActive: false,
    type: StepType.success,
    usePartialStatus: false,
  },
  render: args => {
    const [isActive, setIsActive] = useState(false);
    return (
      <div style={{ width: '200px' }}>
        <Step
          {...args}
          isActive={isActive}
          onClick={prop => {
            setIsActive(currState => !currState);
            args.onClick?.(prop);
          }}
        />
      </div>
    );
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Step>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SuccessStep: Story = {
  args: {
    label: 'Vedtak',
    type: StepType.success,
  },
};

export const SuccessStepWithPartialStatus: Story = {
  args: {
    label: 'Inngangsvilkår',
    type: StepType.success,
    usePartialStatus: true,
  },
};

export const WarningStep: Story = {
  args: {
    label: 'Uttak',
    type: StepType.warning,
  },
};

export const WarningStepWithPartialStatus: Story = {
  args: {
    label: 'Uttak',
    type: StepType.warning,
    usePartialStatus: true,
  },
};

export const DangerStep: Story = {
  args: {
    label: 'Tilkjent ytelse',
    type: StepType.danger,
  },
};

export const DangerStepWithPartialStatus: Story = {
  args: {
    label: 'Tilkjent ytelse',
    type: StepType.danger,
    usePartialStatus: true,
  },
};

export const DefaultStep: Story = {
  args: {
    label: 'Simulering',
    type: StepType.default,
  },
};

export const DefaultStepWithPartialStatus: Story = {
  args: {
    label: 'Simulering',
    type: StepType.default,
    usePartialStatus: true,
  },
};
