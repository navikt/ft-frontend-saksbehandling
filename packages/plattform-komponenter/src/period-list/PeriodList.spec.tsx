import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './PeriodList.stories';

const { Default } = composeStories(stories);

describe('<PeriodList>', () => {
  it('skal vise alle perioder', async () => {
    render(<Default />);

    expect(await screen.findByText('Perioder')).toBeInTheDocument();
    expect(screen.getByText('16.01.2022 - 23.01.2022')).toBeInTheDocument();
    expect(screen.getByText('24.01.2022 - 31.01.2022')).toBeInTheDocument();
    expect(screen.getByText('01.02.2022 - 07.02.2022')).toBeInTheDocument();
    expect(screen.getByText('08.02.2022 - 15.02.2022')).toBeInTheDocument();
    expect(screen.getByText('16.02.2022 - 23.02.2022')).toBeInTheDocument();

    expect(screen.getAllByText('Land')).toHaveLength(5);
    expect(screen.getByText('Tyrkia')).toBeInTheDocument();
    expect(screen.getByText('Finland')).toBeInTheDocument();
    expect(screen.getByText('Mosambik')).toBeInTheDocument();
    expect(screen.getByText('Kina')).toBeInTheDocument();
    expect(screen.getByText('Luxemburg')).toBeInTheDocument();

    expect(screen.getAllByText('EØS')).toHaveLength(5);
    expect(screen.getAllByText('Nei')).toHaveLength(3);
    expect(screen.getAllByText('Ja')).toHaveLength(2);

    expect(screen.getAllByText('Årsak')).toHaveLength(5);
    expect(
      screen.getByText(
        'Barnet er innlagt i helseinstitusjon for norsk offentlig regning (mottar pleiepenger' +
          ' som i Norge, telles ikke i 8 uker)',
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Ukjent årsak')).toHaveLength(2);
    expect(
      screen.getByText(
        'Barnet er innlagt i helseinstitusjon dekket etter avtale med annet land om trygd (mottar pleiepenger' +
          ' som i Norge, telles ikke i 8 uker)',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Ingen, telles i 8 uker.')).toBeInTheDocument();
  });
});
