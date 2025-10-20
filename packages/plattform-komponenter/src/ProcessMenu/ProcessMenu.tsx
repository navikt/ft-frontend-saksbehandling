import { HStack } from '@navikt/ds-react';

import { Step, type StepProps } from './components/Step';

interface ProcessMenuProps {
  steps: StepProps[];
  onClick?: (index: number) => void;
  stepArrowContainerStyle?: string;
}

export const ProcessMenu = ({ steps, onClick, stepArrowContainerStyle }: ProcessMenuProps) => (
  <HStack as="ol" justify="space-between" padding="0" align="end" gap="space-16">
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
