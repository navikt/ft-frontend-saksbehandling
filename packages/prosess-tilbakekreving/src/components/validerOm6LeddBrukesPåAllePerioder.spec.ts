import type { CustomVilkarsVurdertePeriode } from './TilbakekrevingPeriodeForm';
import { validerOm6LeddBrukesPåAllePerioder } from './validerOm6LeddBrukesPåAllePerioder';

const lagPeriode = (tilbakekrevSelvOmBeloepErUnder4Rettsgebyr?: boolean): CustomVilkarsVurdertePeriode =>
  ({
    fom: '2024-01-01',
    tom: '2024-01-31',
    valgtVilkarResultatType: 'FORSTO_BURDE_FORSTAATT',
    FORSTO_BURDE_FORSTAATT: {
      handletUaktsomhetGrad: 'SIMPEL_UAKTSOM',
      SIMPEL_UAKTSOM: { tilbakekrevSelvOmBeloepErUnder4Rettsgebyr },
    },
  }) as unknown as CustomVilkarsVurdertePeriode;

const lagForeldetPeriode = (): CustomVilkarsVurdertePeriode =>
  ({
    fom: '2023-01-01',
    tom: '2023-01-31',
    erForeldet: true,
  }) as unknown as CustomVilkarsVurdertePeriode;

describe('validerOm6LeddBrukesPåAllePerioder', () => {
  it('skal være gyldig når alle ikke-foreldede perioder ikke tilbakekreves under 4 rettsgebyr', () => {
    expect(validerOm6LeddBrukesPåAllePerioder([lagForeldetPeriode(), lagPeriode(false), lagPeriode(false)])).toBe(
      undefined,
    );
  });

  it('skal gi feil når bare én av to ikke-foreldede perioder ikke tilbakekreves under 4 rettsgebyr', () => {
    expect(validerOm6LeddBrukesPåAllePerioder([lagPeriode(false), lagPeriode(true)])).toBe(
      'TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr',
    );
  });

  it('skal være gyldig når det bare finnes én ikke-foreldet periode', () => {
    expect(validerOm6LeddBrukesPåAllePerioder([lagForeldetPeriode(), lagPeriode(false)])).toBe(undefined);
  });
});
