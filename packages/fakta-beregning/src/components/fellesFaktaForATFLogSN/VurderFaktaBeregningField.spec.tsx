import { Aksjonspunkt } from '@navikt/ft-types';

import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { harIkkeEndringerIAvklarMedFlereAksjonspunkter } from './vurderFaktaBeregningHjelpefunksjoner';

const { AVKLAR_AKTIVITETER, VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAvklaringsbehovCode;

describe('<VurderFaktaBeregningField>', () => {
  it('skal returnere true for endring i avklar med kun avklar aksjonspunkt', () => {
    const aps = [{ definisjon: AVKLAR_AKTIVITETER }];
    const knappSkalKunneTrykkes = harIkkeEndringerIAvklarMedFlereAksjonspunkter(true, aps as Aksjonspunkt[]);
    expect(knappSkalKunneTrykkes).toBe(true);
  });

  it('skal returnere false for endring i avklar med to aksjonspunkter', () => {
    const aps = [{ definisjon: AVKLAR_AKTIVITETER }, { definisjon: VURDER_FAKTA_FOR_ATFL_SN }];
    const knappSkalKunneTrykkes = harIkkeEndringerIAvklarMedFlereAksjonspunkter(true, aps as Aksjonspunkt[]);
    expect(knappSkalKunneTrykkes).toBe(false);
  });

  it('skal returnere true for ingen endring i avklar med VURDER_FAKTA_FOR_ATFL_SN', () => {
    const aps = [{ definisjon: VURDER_FAKTA_FOR_ATFL_SN }];
    const knappSkalKunneTrykkes = harIkkeEndringerIAvklarMedFlereAksjonspunkter(false, aps as Aksjonspunkt[]);
    expect(knappSkalKunneTrykkes).toBe(true);
  });

  it('skal returnere true for ingen endring i avklar med to aksjonspunkter', () => {
    const aps = [{ definisjon: AVKLAR_AKTIVITETER }, { definisjon: VURDER_FAKTA_FOR_ATFL_SN }];
    const knappSkalKunneTrykkes = harIkkeEndringerIAvklarMedFlereAksjonspunkter(false, aps as Aksjonspunkt[]);
    expect(knappSkalKunneTrykkes).toBe(true);
  });
});
