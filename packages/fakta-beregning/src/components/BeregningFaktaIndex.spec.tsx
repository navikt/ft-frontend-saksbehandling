import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from '../BeregningFaktaIndex.stories';

const { ArbeidOgDagpenger, ArbeidOgAAP } = composeStories(stories);

describe('<BeregningFaktaIndexSpec', () => {
  it('skal kunne løse aksjonspunkt for Arbeid og full AAP', () => {
    render(<ArbeidOgAAP />);
    // TODO: Valider på at AAP ikkje skal kunne endres
    userEvent.click(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 01.04.2020'));
    userEvent.type(screen.getAllByLabelText('Begrunn endringene')[0], 'Test');
    userEvent.click(screen.getByRole('button', { name: 'Oppdater' }));
    const feltetMåFyllesUtfeilmelding = screen.queryByText('Feltet må fylles ut');
    expect(feltetMåFyllesUtfeilmelding).not.toBeInTheDocument();
  });

  it('skal vise feilmelding dersom ingen benyttede aktiviteter', async () => {
    render(<ArbeidOgDagpenger />);
    userEvent.click(screen.getAllByTestId('overstyringsknapp')[0]);
    userEvent.click(screen.getByLabelText('Ikke benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020'));
    userEvent.click(screen.getByLabelText('Ikke benytt Dagpenger 03.02.2019 til 11.11.2019'));
    userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));

    const måHaAktivitetFeilmelding = await screen.findByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmelding = await screen.findByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmelding).toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmelding).toBeInTheDocument();
  });

  it('skal beholde feilmelding dersom man bytter tab', async () => {
    render(<ArbeidOgDagpenger />);
    // TODO: Trykk på overstyrknapp før vi endrer sidan vi ikkje har aksjonspunkt her
    userEvent.click(screen.getAllByTestId('overstyringsknapp')[0]);
    userEvent.click(screen.getByLabelText('Ikke benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020'));
    userEvent.click(screen.getByLabelText('Ikke benytt Dagpenger 03.02.2019 til 11.11.2019'));
    userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    const måHaAktivitetFeilmeldingFørBytteAvTab = await screen.findByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmeldingFørBytteAvTab = await screen.findByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmeldingFørBytteAvTab).toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmeldingFørBytteAvTab).toBeInTheDocument();

    // Bytter tab
    userEvent.click(screen.getByRole('tab', { name: '13.02.2020' }));
    expect(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020')).toBeDisabled();
    userEvent.click(screen.getAllByTestId('overstyringsknapp')[0]);
    userEvent.type(screen.getAllByLabelText('Begrunn endringene')[0], 'Test');
    userEvent.click(screen.getByRole('button', { name: 'Overstyr' }));
    const måHaAktivitetFeilmeldingNyTab = screen.queryByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmeldingNyTab = screen.queryByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmeldingNyTab).not.toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmeldingNyTab).not.toBeInTheDocument();

    // Byttet tab tilbake til første
    userEvent.click(screen.getByRole('tab', { name: '13.01.2020' }));
    const måHaAktivitetFeilmeldingEtterBytteAvTab = await screen.findByText(
      'Må ha minst én aktivitet for å kunne fastsette beregningsgrunnlag',
    );
    const feltetMåFyllesUtfeilmeldingEtterBytteAvTab = await screen.findByText('Feltet må fylles ut');
    expect(måHaAktivitetFeilmeldingEtterBytteAvTab).toBeInTheDocument();
    expect(feltetMåFyllesUtfeilmeldingEtterBytteAvTab).toBeInTheDocument();
  });

  // TODO : Skriv test for ikke overstyrer + ingen aksjonspunkt => ikke vises
  // TODO : Skriv test for ikke overstyrer + overstyringsaksjonspunkt => vises, men readonly
  // TODO : Skriv test for AAP, ingen EditedIcon for AAP-rad når aksjonspunkt er uført
});
