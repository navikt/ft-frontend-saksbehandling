import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { Aksjonspunkt } from '@navikt/ft-types';
import {
  BEGRUNNELSE_FAKTA_TILFELLER_NAME,
  harIkkeEndringerIAvklarMedFlereAksjonspunkter,
  transformValuesVurderFaktaBeregning,
} from './VurderFaktaBeregningPanel';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';

const {
  AVKLAR_AKTIVITETER,
  VURDER_FAKTA_FOR_ATFL_SN,
} = FaktaBeregningAksjonspunktCode;

const avklarAktiviteterAp = {
  id: 1,
  definisjon: AVKLAR_AKTIVITETER,
  status: AksjonspunktStatus.OPPRETTET,
  kanLoses: true,
  erAktivt: true,
} as Aksjonspunkt;

const aksjonspunkter = [{
  definisjon: VURDER_FAKTA_FOR_ATFL_SN,
  status: 'OPPR',
  erAktivt: true,
  kanLoses: true,
}];

describe('<VurderFaktaBeregningPanel>', () => {
  it('skal ikkje transformValues uten aksjonspunkt', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
    };
    const values = {
      aksjonspunkter: [avklarAktiviteterAp],
      faktaOmBeregning,
    };
    const transformed = transformValuesVurderFaktaBeregning(values);
    expect(transformed).toBeNull();
  });

  it('skal transformValues med aksjonspunkt', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
    };
    const tilfeller = [];
    const values = {
      [BEGRUNNELSE_FAKTA_TILFELLER_NAME]: 'begrunnelse', aksjonspunkter, faktaOmBeregning, tilfeller,
    };
    const transformed = transformValuesVurderFaktaBeregning(values);
    expect(transformed.begrunnelse).toBe('begrunnelse');
    expect(transformed.kode).toBe(VURDER_FAKTA_FOR_ATFL_SN);
  });

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
