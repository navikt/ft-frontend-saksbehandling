import { Meta, StoryObj } from '@storybook/react';

import { PeriodList } from './PeriodList';

const perioder = [
  {
    fom: '2022-02-16',
    tom: '2022-02-23',
    items: [
      {
        label: 'Land',
        value: 'Luxemburg',
      },
      {
        label: 'EØS',
        value: 'Ja',
      },
      {
        label: 'Årsak',
        value: 'Ukjent årsak',
      },
    ],
  },
  {
    fom: '2022-02-08',
    tom: '2022-02-15',
    items: [
      {
        label: 'Land',
        value: 'Kina',
      },
      {
        label: 'EØS',
        value: 'Nei',
      },
      {
        label: 'Årsak',
        value: 'Ingen, telles i 8 uker.',
      },
    ],
  },
  {
    fom: '2022-02-01',
    tom: '2022-02-07',
    items: [
      {
        label: 'Land',
        value: 'Mosambik',
      },
      {
        label: 'EØS',
        value: 'Nei',
      },
      {
        label: 'Årsak',
        value:
          'Barnet er innlagt i helseinstitusjon dekket etter avtale med annet land om trygd (mottar pleiepenger som i Norge, telles ikke i 8 uker)',
      },
    ],
  },
  {
    fom: '2022-01-24',
    tom: '2022-01-31',
    items: [
      {
        label: 'Land',
        value: 'Finland',
      },
      {
        label: 'EØS',
        value: 'Ja',
      },
      {
        label: 'Årsak',
        value: 'Ukjent årsak',
      },
    ],
  },
  {
    fom: '2022-01-16',
    tom: '2022-01-23',
    items: [
      {
        label: 'Land',
        value: 'Tyrkia',
      },
      {
        label: 'EØS',
        value: 'Nei',
      },
      {
        label: 'Årsak',
        value:
          'Barnet er innlagt i helseinstitusjon for norsk offentlig regning (mottar pleiepenger som i Norge, telles ikke i 8 uker)',
      },
    ],
  },
];

const meta = {
  title: 'plattform-komponenter/Period list',
  component: PeriodList,
  args: {
    perioder,
    tittel: 'Perioder',
  },
} satisfies Meta<typeof PeriodList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
