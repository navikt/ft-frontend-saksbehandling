import { RawIntlProvider } from 'react-intl';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { createIntl } from '@navikt/ft-utils';

import { arbeidsgiverOpplysningerPerId } from '../../../testdata/arbeidgiverOpplysningerPerId';
import { refusjonsandelerForTreArbeidsgivere } from '../../../testdata/refusjonsandeler';
import { AksjonspunktTekst } from './AksjonspunktTekst';

import messages from '../../../i18n/nb_NO.json';

import '@navikt/ft-ui-komponenter/dist/style.css';

const intl = createIntl(messages);

const meta = {
  component: AksjonspunktTekst,
  decorators: [
    Story => (
      <RawIntlProvider value={intl}>
        <Story />
      </RawIntlProvider>
    ),
  ],
  args: {
    aksjonspunkt: [{ kode: 'AVKLAR_REFUSJONSKRAV', status: 'OPPR' }],
    refusjonsandeler: refusjonsandelerForTreArbeidsgivere,
    arbeidsgiverOpplysningerPerId,
  },
} satisfies Meta<typeof AksjonspunktTekst>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
