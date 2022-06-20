import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { Aksjonspunkt } from '@navikt/ft-types';
import {
  BEGRUNNELSE_FAKTA_TILFELLER_NAME,
  harIkkeEndringerIAvklarMedFlereAksjonspunkter,
} from './VurderFaktaBeregningPanel';
import FaktaBeregningAksjonspunktCode from '../../typer/interface/FaktaBeregningAksjonspunktCode';
import { transformValuesVurderFaktaBeregning } from './transformValuesHjelpefunksjoner';

const { AVKLAR_AKTIVITETER, VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAksjonspunktCode;

const avklarAktiviteterAp = {
  id: 1,
  definisjon: AVKLAR_AKTIVITETER,
  status: AksjonspunktStatus.OPPRETTET,
  kanLoses: true,
  erAktivt: true,
} as Aksjonspunkt;

const aksjonspunkter = [
  {
    definisjon: VURDER_FAKTA_FOR_ATFL_SN,
    status: 'OPPR',
    erAktivt: true,
    kanLoses: true,
  },
];

describe('<VurderFaktaBeregningPanel>', () => {
  it('skal ikkje transformValues uten aksjonspunkt', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
    };
    const values = {
      vurderFaktaBeregningForm: [
        {
          avklaringsbehov: [avklarAktiviteterAp],
          faktaOmBeregning,
        },
      ],
    };
    const transformed = transformValuesVurderFaktaBeregning(values);
    expect(transformed.length).toBe(0);
  });

  it('skal transformValues med aksjonspunkt', () => {
    const faktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
    };
    const tilfeller = [];
    const values = {
      vurderFaktaBeregningForm: [
        {
          [BEGRUNNELSE_FAKTA_TILFELLER_NAME]: 'begrunnelse',
          avklaringsbehov: aksjonspunkter,
          faktaOmBeregning,
          tilfeller,
        },
      ],
    };
    const transformed = transformValuesVurderFaktaBeregning(values);
    expect(transformed[0].begrunnelse).toBe('begrunnelse');
    expect(transformed[0].kode).toBe(VURDER_FAKTA_FOR_ATFL_SN);
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
