import { ArbeidstakerInntektValues } from '../../typer/FaktaBeregningTypes';

export const getArbeidsgiverIndex = (
  arbeidstakerInntektValues: ArbeidstakerInntektValues[],
  arbeidsgiverIdent?: string,
) => arbeidstakerInntektValues.findIndex(a => a.arbeidsgiverIdent === arbeidsgiverIdent);
