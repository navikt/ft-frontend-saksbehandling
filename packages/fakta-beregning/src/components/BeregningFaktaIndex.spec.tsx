import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import * as stories from '../BeregningFaktaIndex.stories';

const {
  ArbeidOgDagpenger,
  ArbeidOgAAP,
  IkkeOverstyrerOgIngenAksjonspunkt,
  IkkeOverstyrerOgHarOverstyringsaksjonspunkt,
  ArbeidOgAAPMedUtførtAksjonspunkt,
} = composeStories(stories);

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

  it('skal ikke vise panel for å avklare aktiviterer dersom ikke overstyrer og ingen aksjonspunkt', () => {
    render(<IkkeOverstyrerOgIngenAksjonspunkt />);
    expect(screen.queryByTestId('avklareAktiviteterHeading')).not.toBeInTheDocument();
  });

  it('skal vise read only dersom ikke overstyrer men har overstyringsaksjonspunkt', () => {
    render(<IkkeOverstyrerOgHarOverstyringsaksjonspunkt />);
    expect(screen.getAllByTestId('overstyringsknapp')[0]).toHaveAttribute('aria-disabled', 'true');
    expect(screen.getByLabelText('Benytt BEDRIFT AS (910909088) 03.02.2019 til 14.02.2020')).toBeDisabled();
  });

  it('skal ikke vise redigertikon dersom arbeid og AAP med utført aksjonspunkt', () => {
    render(<ArbeidOgAAPMedUtførtAksjonspunkt />);
    expect(screen.queryByTestId('editedIcon')).not.toBeInTheDocument();
  });

  it('skal ikke få sende inn vurder fakta uten å ha fylt ut felter', async () => {
    render(<ArbeidOgDagpenger />);
    const radioJa = screen.getByLabelText('Ja');
    userEvent.click(radioJa);
    expect(screen.getByLabelText('Månedsinntekt for BEDRIFT AS (910909088)')).toBeInTheDocument();
    expect(screen.getByLabelText('Månedsinntekt for Dagpenger')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    const valideringsmeldinger = await screen.findAllByText('Feltet må fylles ut');
    expect(valideringsmeldinger.length).toBe(3);
  });

  it('skal måtte overstyre inntekt for minst én aktivitet', async () => {
    render(<ArbeidOgDagpenger />);
    const secondOverstyrknapp = screen.getAllByTestId('overstyringsknapp')[1];
    userEvent.click(secondOverstyrknapp);
    expect(screen.getByLabelText('Månedsinntekt for BEDRIFT AS (910909088)')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));
    const valideringsmelding = await screen.findByText('Må ha overstyrt inntekt for minst én aktivitet.');
    expect(valideringsmelding).toBeInTheDocument();
  });
});
