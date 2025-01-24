import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { Aksjonspunkt } from '@navikt/ft-types';
import { BEGRUNNELSE_FAKTA_TILFELLER_NAME } from './VurderFaktaBeregningField';
import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { transformValuesVurderFaktaBeregning } from './transformValuesHjelpefunksjoner';

const { AVKLAR_AKTIVITETER, VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAvklaringsbehovCode;

const avklarAktiviteterAp = {
  id: 1,
  definisjon: AVKLAR_AKTIVITETER,
  status: AksjonspunktStatus.OPPRETTET,
  kanLoses: true,
} as Aksjonspunkt;

const aksjonspunkter = [
  {
    definisjon: VURDER_FAKTA_FOR_ATFL_SN,
    status: 'OPPR',
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
          erTilVurdering: true,
          periode: { fom: '2022-01-01', tom: '2022-02-01' },
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
          erTilVurdering: true,
          periode: { fom: '2022-01-01', tom: '2022-02-01' },
        },
      ],
    };
    const transformed = transformValuesVurderFaktaBeregning(values);
    expect(transformed[0].begrunnelse).toBe('begrunnelse');
    expect(transformed[0].kode).toBe(VURDER_FAKTA_FOR_ATFL_SN);
  });
});
