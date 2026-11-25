import { render } from '@testing-library/react';

import { RhfForm } from '@navikt/ft-form-hooks';

import { FordelingForm } from './components/fordeling/FordelingForm';
import { VurderEndringRefusjonForm } from './components/refusjon/VurderEndringRefusjonForm';

vi.mock('@navikt/ft-form-hooks', async importOriginal => ({
  ...(await importOriginal<typeof import('@navikt/ft-form-hooks')>()),
  RhfForm: vi.fn(() => null),
}));

describe('innsending av beregningsgrunnlag', () => {
  beforeEach(() => {
    vi.mocked(RhfForm).mockClear();
  });

  it('skal håndtere tom fordeling og returnere lagringsløftet', async () => {
    const lagringsløfte = Promise.resolve();
    const submitCallback = vi.fn(() => lagringsløfte);

    render(
      <FordelingForm
        aktivtBeregningsgrunnlagIndeks={0}
        submitCallback={submitCallback}
        readOnly={false}
        submittable
        beregningsgrunnlagListe={[]}
        vilkårsperioder={[]}
        kodeverkSamling={{ AktivitetStatus: [], Inntektskategori: [], OpptjeningAktivitetType: [] }}
        arbeidsgiverOpplysningerPerId={{}}
        setFormData={vi.fn()}
        setFordelingFormIsDirty={vi.fn()}
      />,
    );

    const onSubmit = vi.mocked(RhfForm).mock.lastCall![0].onSubmit!;
    expect(onSubmit({ FORDEL_BEREGNING_FORM: [] })).toBe(lagringsløfte);
    expect(submitCallback).toHaveBeenCalledWith({
      begrunnelse: '',
      grunnlag: [],
      kode: 'FORDEL_BG',
    });
    await lagringsløfte;
  });

  it('skal håndtere tom refusjon og returnere lagringsløftet', async () => {
    const lagringsløfte = Promise.resolve();
    const submitCallback = vi.fn(() => lagringsløfte);

    render(
      <VurderEndringRefusjonForm
        aktivtBeregningsgrunnlagIndeks={0}
        submitCallback={submitCallback}
        readOnly={false}
        submittable
        beregningsgrunnlagListe={[]}
        vilkarperioder={[]}
        arbeidsgiverOpplysningerPerId={{}}
        setFormData={vi.fn()}
        setRefusjonFormIsDirty={vi.fn()}
      />,
    );

    const onSubmit = vi.mocked(RhfForm).mock.lastCall![0].onSubmit!;
    expect(onSubmit({ VURDER_REFUSJON_BERGRUNN_FORM: [] })).toBe(lagringsløfte);
    expect(submitCallback).toHaveBeenCalledWith({
      begrunnelse: '',
      grunnlag: [],
      kode: 'VURDER_REFUSJONSKRAV',
    });
    await lagringsløfte;
  });
});
