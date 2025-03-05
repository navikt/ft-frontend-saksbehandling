import React from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import {
  DangerStep,
  DangerStepWithPartialStatus,
  DefaultStep,
  DefaultStepWithPartialStatus,
  SuccessStep,
  SuccessStepWithPartialStatus,
  WarningStep,
} from './components/Step.stories';
import { ProcessMenu } from './ProcessMenu';

const meta = {
  component: ProcessMenu,
  args: {
    onClick: action('onClick'),
  },
  render: ({ steps, onClick }) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const handleOnClick = (index: number): void => {
      setActiveIndex(index);
      if (onClick) {
        onClick(index);
      }
    };

    const buildSteps = () =>
      steps.map((step, index) => ({
        ...step,
        isActive: activeIndex === index,
      }));
    return <ProcessMenu steps={buildSteps()} onClick={handleOnClick} />;
  },
} satisfies Meta<typeof ProcessMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: [
      SuccessStep.args,
      SuccessStepWithPartialStatus.args,
      WarningStep.args,
      DangerStep.args,
      DefaultStep.args,
      DefaultStepWithPartialStatus.args,
    ],
  },
};

export const MangeSteg: Story = {
  args: {
    steps: [
      SuccessStep.args,
      SuccessStepWithPartialStatus.args,
      WarningStep.args,
      DangerStep.args,
      DefaultStep.args,
      DefaultStepWithPartialStatus.args,
      {
        label: 'Beregning2',
      },
      {
        label: 'Uttak2',
      },
      {
        label: 'Tilkjent ytelse2',
      },
      DangerStepWithPartialStatus.args,
      {
        label: 'Vedtak2',
      },
    ],
  },
};
