import { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';

import { TotalbelopetUnder4RettsgebyrModal } from './TotalbelopetUnder4RettsgebyrModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  component: TotalbelopetUnder4RettsgebyrModal,
  args: {
    submit: action('onSubmit'),
    showModal: true,
  },
  decorators: [withIntl],
} satisfies Meta<typeof TotalbelopetUnder4RettsgebyrModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
