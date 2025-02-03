import { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';

import { DateLabel } from './DateLabel';

const withIntl = getIntlDecorator({
  'OkAvbrytModal.Ok': 'Ok',
  'OkAvbrytModal.Avbryt': 'Avbryt',
  'Test.Test': 'Dette er ein test',
});

const meta = {
  title: 'ui-komponenter/DateLabel',
  component: DateLabel,
  decorators: [withIntl],
} satisfies Meta<typeof DateLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dateString: '2017-10-02',
  },
};
