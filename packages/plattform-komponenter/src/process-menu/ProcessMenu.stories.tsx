import React from 'react';
import { ProcessMenu } from './ProcessMenu';
import { StepType } from './StepType';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

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
      {
        label: 'Inngangsvilkår',
        type: StepType.success,
      },
      {
        label: 'Beregning',
        type: StepType.success,
      },
      {
        label: 'Uttak',
        type: StepType.warning,
      },
      {
        label: 'Tilkjent ytelse',
        type: StepType.danger,
      },
      {
        label: 'Simulering',
      },
      {
        label: 'Vedtak',
      },
    ],
  },
};

export const MangeSteg: Story = {
  args: {
    steps: [
      {
        label: 'Inngangsvilkår',
        type: StepType.success,
      },
      {
        label: 'Beregning',
        type: StepType.success,
      },
      {
        label: 'Uttak',
        usePartialStatus: true,
        type: StepType.success,
      },
      {
        label: 'Tilkjent ytelse',
        usePartialStatus: true,
        type: StepType.warning,
      },
      {
        label: 'Simulering',
        type: StepType.warning,
        usePartialStatus: true,
      },
      {
        label: 'Vedtak',
        type: StepType.danger,
      },
      {
        label: 'Inngangsvilkår2',
        type: StepType.danger,
        usePartialStatus: true,
      },
      {
        label: 'Beregning2',
      },
      {
        label: 'Uttak2',
      },
      {
        label: 'Tilkjent ytelse2',
      },
      {
        label: 'Simulering2',
        type: StepType.danger,
      },
      {
        label: 'Vedtak2',
      },
    ],
  },
};
