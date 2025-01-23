import { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/ft-frontend-storybook-utils';
import { BlaBoksMedCheckmarkListe } from './BlaBoksMedCheckmarkListe';

const withIntlProvider = getIntlDecorator({
  'tittel.1': 'Tittel 1',
  'tittel.2': 'Tittel 2',
});

const meta = {
  title: 'BlaBoksMedCheckmarkListe',
  component: BlaBoksMedCheckmarkListe,
  decorators: [withIntlProvider],
} satisfies Meta<typeof BlaBoksMedCheckmarkListe>;

export default meta;

type Story = StoryObj<typeof BlaBoksMedCheckmarkListe>;

export const Default: Story = {
  args: {
    saksopplysninger: [
      { textId: 'tittel.1', readMoreContent: <div>test test test test</div> },
      { textId: 'tittel.2', readMoreContent: <div>innhold innhold innhold innhold</div> },
    ],
  },
};

export const UtenContent: Story = {
  args: {
    saksopplysninger: [{ textId: 'tittel.1', readMoreContent: undefined }],
  },
};
