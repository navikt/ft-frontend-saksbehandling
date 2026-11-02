import { composeStories } from '@storybook/react-vite';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './BeregningProsessIndex.stories';
import * as legacyAPStories from './legacyAP/LegacyAPForms.stories';

const {
  ArbeidstakerOgFrilansFP,
  CaseArbeidstakerMedEttArbeidsforholdFP,
  FrilansFP,
  SelvstendigNæringsdrivendeFP,
  ToGrunnlagHvorEnHarÅpentAP,
} = composeStories(stories);
const { MidlertidigInaktivOgATFLSNMedAksjonspunktAp5054Og5038Og5039 } = composeStories(legacyAPStories);

describe('BeregningProsessIndex', () => {
  it('skal vise tabs', async () => {
    render(<ToGrunnlagHvorEnHarÅpentAP />);

    expect(screen.getByRole('tab', { name: '31.10.2025', selected: true })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel', { name: '31.10.2025' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: '03.12.2025', selected: false })).toBeInTheDocument();

    await userEvent.click(screen.getByRole('tab', { name: '03.12.2025', selected: false }));
    expect(screen.queryByRole('tabpanel', { name: '31.10.2025' })).not.toBeInTheDocument();

    expect(screen.getByRole('tab', { name: '03.12.2025', selected: true })).toBeInTheDocument();
    expect(screen.getByRole('tabpanel', { name: '03.12.2025' })).toBeInTheDocument();
  });

  it('skjuler inaktive aksjonspunkt-former uten å miste skjemaverdier ved periodebytte', async () => {
    render(<MidlertidigInaktivOgATFLSNMedAksjonspunktAp5054Og5038Og5039 />);

    const arbeidstakerOgFrilansHeading = screen.getByRole('heading', {
      name: 'Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans',
      hidden: true,
    });
    const arbeidstakerOgFrilansForm = arbeidstakerOgFrilansHeading.closest('form');
    expect(arbeidstakerOgFrilansForm).toBeInTheDocument();
    expect(arbeidstakerOgFrilansForm).not.toBeVisible();

    const næringHeading = screen.getByRole('heading', {
      name: 'Vurder om det er varig endring i næringen og/eller arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig',
      hidden: true,
    });
    const næringForm = næringHeading.closest('form');
    expect(næringForm).toBeInTheDocument();
    expect(næringForm).not.toBeVisible();

    const midlertidigInaktivHeading = screen.getByRole('heading', {
      name: 'Vurder om det er varig endring i arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig',
      hidden: true,
    });
    expect(midlertidigInaktivHeading.closest('form')).toBeVisible();

    await userEvent.click(screen.getByRole('tab', { name: '01.02.2021' }));
    expect(arbeidstakerOgFrilansForm).toBeVisible();
    const vurdering = within(arbeidstakerOgFrilansForm!).getByLabelText('Vurdering');
    await userEvent.clear(vurdering);
    await userEvent.type(vurdering, 'Begrunnelse som skal beholdes');

    await userEvent.click(screen.getByRole('tab', { name: '01.01.2021' }));
    expect(arbeidstakerOgFrilansForm).not.toBeVisible();
    await userEvent.click(screen.getByRole('tab', { name: '01.02.2021' }));
    expect(within(arbeidstakerOgFrilansForm!).getByLabelText('Vurdering')).toHaveValue('Begrunnelse som skal beholdes');
  });

  it('skal vise arbeidstaker-panel', () => {
    render(<CaseArbeidstakerMedEttArbeidsforholdFP />);

    expect(screen.getByText('Beregning')).toBeInTheDocument();

    const arbeidsinntekt = screen.getByRole('region', { name: 'Arbeidsinntekt' });
    expect(arbeidsinntekt).toBeInTheDocument();
    expect(within(arbeidsinntekt).getByText('Inntektsmelding')).toBeInTheDocument();
    expect(within(arbeidsinntekt).getByText('Arbeidsgiver')).toBeInTheDocument();
    expect(within(arbeidsinntekt).queryByText('Inntektskilde')).not.toBeInTheDocument();
    expect(
      within(within(arbeidsinntekt).getByRole('table')).getByRole('button', { name: 'Vis mer' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('region', { name: 'Avviksberegning for arbeidstaker' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Grunnlag §§ 8-28 og 8-30' })).toBeInTheDocument();

    const aksjonspunktboks = within(
      screen.getByRole('region', { name: 'Fastsett årsinntekt skjønnsmessig for arbeidstaker' }),
    );
    expect(
      aksjonspunktboks.getByLabelText('Arbeidsinntekt fra TROSSIG NATURSTRIDIG TIGER AS (222222222) fastsettes til'),
    ).toBeInTheDocument();
    expect(aksjonspunktboks.getByLabelText('Vurdering')).toBeInTheDocument();
    expect(aksjonspunktboks.getAllByRole('textbox')).toHaveLength(2);
  });

  it('skal vise frilanser-panel', () => {
    render(<FrilansFP />);

    expect(screen.getByText('Beregning')).toBeInTheDocument();

    expect(
      screen.getAllByText('Det er mer enn 25% avvik mellom beregnet årsinntekt og sammenligningsgrunnlaget'),
    ).toHaveLength(2);
    const frilansinntekt = screen.getByRole('region', { name: 'Frilansinntekt' });
    expect(frilansinntekt).toBeInTheDocument();
    expect(within(frilansinntekt).getByText('Inntektskilde')).toBeInTheDocument();
    expect(within(frilansinntekt).queryByText('Arbeidsgiver')).not.toBeInTheDocument();
    expect(within(frilansinntekt).queryByText('Inntektsmelding')).not.toBeInTheDocument();

    expect(screen.getByRole('region', { name: 'Avviksberegning for frilans' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Grunnlag §§ 8-28 og 8-30' })).toBeInTheDocument();

    const aksjonspunktboks = within(
      screen.getByRole('region', { name: 'Fastsett årsinntekt skjønnsmessig for frilans' }),
    );
    expect(aksjonspunktboks.getByLabelText('Frilansinntekt fastsettes til')).toBeInTheDocument();
    expect(aksjonspunktboks.getByLabelText('Vurdering')).toBeInTheDocument();
    expect(aksjonspunktboks.getAllByRole('textbox')).toHaveLength(2);
  });

  it('skal vise kombinert arbeidstaker- og frilanser-panel', () => {
    render(<ArbeidstakerOgFrilansFP />);

    expect(screen.getByText('Beregning')).toBeInTheDocument();

    const arbeidOgFrilansinntekt = screen.getByRole('region', { name: 'Arbeid og frilansinntekt' });
    expect(arbeidOgFrilansinntekt).toBeInTheDocument();
    expect(within(arbeidOgFrilansinntekt).getByText('Inntektsmelding')).toBeInTheDocument();
    expect(within(arbeidOgFrilansinntekt).getByText('Inntektskilde')).toBeInTheDocument();

    expect(screen.getByRole('region', { name: 'Avviksberegning for arbeidstaker og frilans' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Grunnlag §§ 8-28 og 8-30' })).toBeInTheDocument();

    const aksjonspunktboks = within(
      screen.getByRole('region', { name: 'Fastsett årsinntekt skjønnsmessig for arbeidstaker og frilans' }),
    );
    expect(
      aksjonspunktboks.getByLabelText('Arbeidsinntekt fra TROSSIG NATURSTRIDIG TIGER AS (222222222) fastsettes til'),
    ).toBeInTheDocument();
    expect(aksjonspunktboks.getByLabelText('Frilansinntekt fastsettes til')).toBeInTheDocument();
    expect(aksjonspunktboks.getByLabelText('Vurdering')).toBeInTheDocument();
    expect(aksjonspunktboks.getAllByRole('textbox')).toHaveLength(3);
  });

  it('skal vise panelene for selvstendig næring', () => {
    render(<SelvstendigNæringsdrivendeFP />);

    const forventedeNavn = [
      'Pensjonsgivende inntekt',
      'Opplysninger om næring',
      'Avviksberegning for selvstendig næring',
      'Vurder om det er varig endring i næringen og/eller arbeidssituasjonen, som gjør at inntekten skal fastsettes skjønnsmessig',
    ];
    const paneler = screen.getAllByRole('region');

    expect(paneler).toHaveLength(forventedeNavn.length);
    forventedeNavn.forEach((navn, index) => {
      expect(paneler[index]).toHaveAccessibleName(navn);
    });
  });
});
