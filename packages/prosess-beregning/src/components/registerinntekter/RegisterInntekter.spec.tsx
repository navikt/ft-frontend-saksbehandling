import { composeStories } from '@storybook/react-vite';
import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getInstanceByDom } from 'echarts/core';

import * as stories from './Registerinntekter.stories';

const { VisningAvSammenligningsgrunnlag } = composeStories(stories);

describe('RegisterInntekter', () => {
  it('skal åpne en større graf med større tekst og samme inntekter, og kunne åpne den igjen etter lukking', async () => {
    const user = userEvent.setup();
    const { container } = render(<VisningAvSammenligningsgrunnlag />);
    const vanligGraf = getChart(container);
    const vanligOption = vanligGraf.getOption();
    const vanligHøyde = vanligGraf.getDom().style.height;

    await user.click(screen.getByRole('button', { name: 'Åpne i modal' }));

    const modal = await screen.findByRole('dialog', { name: 'Grunnlag §§ 8-28 og 8-30 fra A-ordningen' });
    const utvidetGraf = getChart(modal);
    const utvidetOption = utvidetGraf.getOption();

    expect(utvidetGraf.getDom().style.height).not.toBe(vanligHøyde);
    expect(utvidetOption).toMatchObject({
      textStyle: { fontSize: 16 },
      legend: [{ textStyle: { fontSize: 16 } }],
      xAxis: [{ data: (vanligOption['xAxis'] as { data: unknown }[])[0].data, axisLabel: { fontSize: 16 } }],
      yAxis: [{ axisLabel: { fontSize: 16 } }],
      tooltip: [{ textStyle: { fontSize: 16 }, confine: true }],
      series: expect.arrayContaining([expect.objectContaining({ label: expect.objectContaining({ fontSize: 14 }) })]),
    });
    expect((utvidetOption['series'] as { data: unknown }[]).map(serie => serie.data)).toEqual(
      (vanligOption['series'] as { data: unknown }[]).map(serie => serie.data),
    );
    expect(within(modal).getByText('Sammenligningsgrunnlag § 8-30:')).toBeInTheDocument();
    expect(within(modal).getByText('A-ordningen § 8-28:')).toBeInTheDocument();

    await user.click(within(modal).getByRole('button', { name: 'Lukk' }));
    await waitFor(() => expect(modal).not.toBeInTheDocument());
    await user.click(screen.getByRole('button', { name: 'Åpne i modal' }));
    expect(await screen.findByRole('dialog')).toBeInTheDocument();
  });

  it('skal dele legendefiltrering mellom grafen og modalen og beholde valget etter lukking', async () => {
    const user = userEvent.setup();
    const { container } = render(<VisningAvSammenligningsgrunnlag />);
    const vanligGraf = getChart(container);
    const inntektskilde = (vanligGraf.getOption()['series'] as { name: string }[])[0].name;
    const filtrertOption = { legend: [{ selected: { [inntektskilde]: false } }] };
    act(() => {
      vanligGraf.dispatchAction({ type: 'legendToggleSelect', name: inntektskilde });
    });

    await user.click(screen.getByRole('button', { name: 'Åpne i modal' }));
    const modal = await screen.findByRole('dialog');
    expect(vanligGraf.isDisposed()).toBeFalsy();
    expect(getChart(container).getOption()).toMatchObject(filtrertOption);
    expect(getChart(modal).getOption()).toMatchObject(filtrertOption);

    act(() => {
      getChart(modal).dispatchAction({ type: 'legendToggleSelect', name: inntektskilde });
    });
    expect(getChart(container).getOption()).toMatchObject({
      legend: [{ selected: { [inntektskilde]: true } }],
    });
    act(() => {
      getChart(modal).dispatchAction({ type: 'legendToggleSelect', name: inntektskilde });
    });

    await user.click(within(modal).getByRole('button', { name: 'Lukk' }));
    await waitFor(() => expect(modal).not.toBeInTheDocument());
    expect(vanligGraf.isDisposed()).toBeFalsy();
    expect(getChart(container).getOption()).toMatchObject(filtrertOption);

    await user.click(screen.getByRole('button', { name: 'Åpne i modal' }));
    expect(getChart(await screen.findByRole('dialog')).getOption()).toMatchObject(filtrertOption);
  });

  it('skal beholde valget om å skjule § 8-28 når grafen åpnes i modal', async () => {
    const user = userEvent.setup();
    const { container } = render(<VisningAvSammenligningsgrunnlag />);

    await user.click(screen.getByRole('checkbox', { name: 'Vis § 8-28' }));
    expect(getChart(container).getOption()['series']).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ stack: '8-28' })]),
    );
    await user.click(screen.getByRole('button', { name: 'Åpne i modal' }));

    const modal = await screen.findByRole('dialog');
    expect(within(modal).getByText('Sammenligningsgrunnlag § 8-30:')).toBeInTheDocument();
    expect(within(modal).queryByText('A-ordningen § 8-28:')).not.toBeInTheDocument();
    expect(getChart(modal).getOption()['series']).toEqual(
      expect.arrayContaining([expect.objectContaining({ stack: '8-30' })]),
    );
    expect(getChart(modal).getOption()['series']).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ stack: '8-28' })]),
    );
  });

  it('skal åpne valgt tabell i modal og beholde visningsvalg og paragrafvalg etter lukking', async () => {
    const user = userEvent.setup();
    render(<VisningAvSammenligningsgrunnlag />);

    await user.click(screen.getByRole('radio', { name: 'Tabell' }));
    const tabellinnhold = screen.getByRole('table').textContent;
    await user.click(screen.getByRole('button', { name: 'Åpne i modal' }));

    const modal = await screen.findByRole('dialog');
    const modalInnhold = within(modal);
    expect(modalInnhold.getByRole('radio', { name: 'Tabell' })).toBeChecked();
    expect(modalInnhold.getByRole('table').textContent).toBe(tabellinnhold);
    expect(modalInnhold.getByText('Totalt')).toBeInTheDocument();
    expect(modalInnhold.queryByRole('button', { name: 'Åpne i modal' })).not.toBeInTheDocument();

    await user.click(modalInnhold.getByRole('radio', { name: 'Graf' }));
    expect(modalInnhold.queryByRole('table')).not.toBeInTheDocument();
    expect(getChart(modal).getOption()).toMatchObject({ textStyle: { fontSize: 16 } });

    await user.click(modalInnhold.getByRole('checkbox', { name: 'Vis § 8-28' }));
    expect(modalInnhold.queryByText('A-ordningen § 8-28:')).not.toBeInTheDocument();
    await user.click(modalInnhold.getByRole('radio', { name: 'Tabell' }));
    expect(modalInnhold.queryByRole('columnheader', { name: '§ 8-28' })).not.toBeInTheDocument();
    expect(modalInnhold.getByRole('columnheader', { name: '§ 8-30' })).toBeInTheDocument();

    await user.click(modalInnhold.getByRole('button', { name: 'Lukk' }));
    await waitFor(() => expect(modal).not.toBeInTheDocument());
    expect(screen.getByRole('radio', { name: 'Tabell' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Vis § 8-28' })).not.toBeChecked();
    expect(screen.queryByRole('columnheader', { name: '§ 8-28' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Åpne i modal' }));
    const gjenåpnetModal = within(await screen.findByRole('dialog'));
    expect(gjenåpnetModal.getByRole('table')).toBeInTheDocument();
    expect(gjenåpnetModal.getByRole('checkbox', { name: 'Vis § 8-28' })).not.toBeChecked();
  });

  it.skipIf(!globalThis.ResizeObserver)('skal tilpasse grafen når bare forelderens bredde endres', async () => {
    const { page } = await import('vitest/browser');
    await page.viewport(1440, 1000);
    const { container } = render(
      <div style={{ width: 600 }}>
        <VisningAvSammenligningsgrunnlag />
      </div>,
    );
    const graf = getChart(container);
    const opprinneligBredde = graf.getWidth();
    const forelder = container.firstElementChild as HTMLElement;

    forelder.style.width = '900px';

    await waitFor(() => {
      expect(graf.getWidth()).toBeGreaterThan(opprinneligBredde);
      expect(graf.getWidth()).toBeCloseTo(graf.getDom().getBoundingClientRect().width, 0);
    });
  });

  it.skipIf(!globalThis.ResizeObserver)(
    'skal begrense modalbredden, vise større graf, tilpasse tabellbredden og kunne lukkes med Escape',
    async () => {
      const { page, userEvent: browserUser } = await import('vitest/browser');
      await page.viewport(1440, 1000);
      const { container } = render(
        <div style={{ maxWidth: '40rem' }}>
          <VisningAvSammenligningsgrunnlag />
        </div>,
      );
      const vanligGraf = getChart(container);
      const vanligBredde = vanligGraf.getWidth();
      const vanligHøyde = vanligGraf.getHeight();

      await browserUser.click(screen.getByRole('button', { name: 'Åpne i modal' }));

      const modal = await screen.findByRole('dialog');
      await waitFor(() => {
        expect(getChart(modal).getWidth()).toBeGreaterThan(vanligBredde);
        expect(getChart(modal).getHeight()).toBeGreaterThan(vanligHøyde);
      });

      await browserUser.click(within(modal).getByRole('radio', { name: 'Tabell' }));
      await document.fonts.ready;
      const tabell = within(modal).getByRole('table');
      const tabellbredde = tabell.getBoundingClientRect().width;
      const modalbredde = modal.getBoundingClientRect().width;

      await page.viewport(1920, 1000);
      await waitFor(() => {
        expect(modal.getBoundingClientRect().width).toBeGreaterThan(modalbredde);
        expect(tabell.getBoundingClientRect().width).toBeCloseTo(tabellbredde, 0);
      });

      const maksimalModalbredde = modal.getBoundingClientRect().width;
      await page.viewport(2560, 1000);
      await waitFor(() => {
        expect(modal.getBoundingClientRect().width).toBeCloseTo(maksimalModalbredde, 0);
      });

      await browserUser.keyboard('{Escape}');
      await waitFor(() => expect(modal).not.toBeInTheDocument());
      expect(screen.getByRole('button', { name: 'Åpne i modal' })).toHaveFocus();
    },
  );
});

const getChart = (container: HTMLElement) => {
  const element = container.querySelector<HTMLElement>('[_echarts_instance_]');
  const chart = element && getInstanceByDom(element);
  if (!chart) {
    throw new Error('Fant ikke registerinntektsgrafen');
  }
  return chart;
};
