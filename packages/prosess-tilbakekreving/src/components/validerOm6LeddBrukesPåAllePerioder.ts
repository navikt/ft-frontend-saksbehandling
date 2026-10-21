import type { CustomVilkarsVurdertePeriode } from './TilbakekrevingPeriodeForm';

export const validerOm6LeddBrukesPåAllePerioder = (vilkarsVurdertePerioder: CustomVilkarsVurdertePeriode[]) => {
  if (!vilkarsVurdertePerioder) {
    return undefined;
  }
  const antallPerioderMedAksjonspunkt = vilkarsVurdertePerioder.reduce(
    (sum: number, periode) => (!periode.erForeldet ? sum + 1 : sum),
    0,
  );
  if (antallPerioderMedAksjonspunkt < 2) {
    return undefined;
  }

  const antallValgt = vilkarsVurdertePerioder.reduce((sum: number, periode: CustomVilkarsVurdertePeriode) => {
    if (periode.erForeldet) {
      return sum;
    }
    const { valgtVilkarResultatType } = periode;
    const vilkarResultatInfo = periode[valgtVilkarResultatType];
    if (vilkarResultatInfo && 'handletUaktsomhetGrad' in vilkarResultatInfo) {
      const { handletUaktsomhetGrad } = vilkarResultatInfo;
      const info = vilkarResultatInfo[handletUaktsomhetGrad];
      if (info) {
        return info.tilbakekrevSelvOmBeloepErUnder4Rettsgebyr === false ? sum + 1 : sum;
      }
    }
    return sum;
  }, 0);
  if (antallValgt > 0 && antallValgt !== antallPerioderMedAksjonspunkt) {
    return 'TilbakekrevingPeriodeForm.TotalbelopetUnder4Rettsgebyr';
  }
  return undefined;
};
