import React from 'react';
import { HStack } from '@navikt/ds-react';

import { Step, StepProps } from './Step';

interface ProcessMenuProps {
  steps: StepProps[];
  onClick?: (index: number) => void;
  stepArrowContainerStyle?: string;
}

export const ProcessMenu = ({ steps, onClick, stepArrowContainerStyle }: ProcessMenuProps): JSX.Element => (
  <HStack as="ol" justify="space-between" padding="0" align="end" gap="4">
    {steps.map((step, index) => (
      <Step
        key={step.label}
        index={index}
        onClick={onClick}
        {...step}
        stepArrowContainerStyle={stepArrowContainerStyle}
      />
    ))}
  </HStack>
);
