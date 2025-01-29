import { AksjonspunktStatus } from '@navikt/ft-kodeverk';
import { BeregningAvklaringsbehov, FaktaOmBeregning } from '@navikt/ft-types';

import { FaktaOmBeregningAksjonspunktValues } from '../../typer/FaktaBeregningTypes';
import { FaktaBeregningAvklaringsbehovCode } from '../../typer/interface/FaktaBeregningAvklaringsbehovCode';
import { VurderFaktaBeregningFormValues } from '../../typer/VurderFaktaBeregningFormValues';
import { transformValuesVurderFaktaBeregning } from './transformValuesHjelpefunksjoner';
import { BEGRUNNELSE_FAKTA_TILFELLER_NAME } from './VurderFaktaBeregningField';

const { AVKLAR_AKTIVITETER, VURDER_FAKTA_FOR_ATFL_SN } = FaktaBeregningAvklaringsbehovCode;

const avklarAktiviteterAp: BeregningAvklaringsbehov = {
  definisjon: AVKLAR_AKTIVITETER,
  status: AksjonspunktStatus.OPPRETTET,
  kanLoses: true,
};

const aksjonspunkter: BeregningAvklaringsbehov[] = [
  {
    definisjon: VURDER_FAKTA_FOR_ATFL_SN,
    status: 'OPPR',
    kanLoses: true,
  },
];

describe('<VurderFaktaBeregningPanel>', () => {
  it('skal ikkje transformValues uten aksjonspunkt', () => {
    const faktaOmBeregning: FaktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
    };
    const values: VurderFaktaBeregningFormValues = {
      vurderFaktaBeregningForm: [
        {
          avklaringsbehov: [avklarAktiviteterAp],
          faktaOmBeregning,
          erTilVurdering: true,
          periode: { fom: '2022-01-01', tom: '2022-02-01' },
        } as FaktaOmBeregningAksjonspunktValues,
      ],
    };
    const transformed = transformValuesVurderFaktaBeregning(values);
    expect(transformed.length).toBe(0);
  });

  it('skal transformValues med aksjonspunkt', () => {
    const faktaOmBeregning: FaktaOmBeregning = {
      andelerForFaktaOmBeregning: [],
    };
    const tilfeller: string[] = [];
    const values: VurderFaktaBeregningFormValues = {
      vurderFaktaBeregningForm: [
        {
          [BEGRUNNELSE_FAKTA_TILFELLER_NAME]: 'begrunnelse',
          avklaringsbehov: aksjonspunkter,
          faktaOmBeregning,
          tilfeller,
          erTilVurdering: true,
          periode: { fom: '2022-01-01', tom: '2022-02-01' },
        } as FaktaOmBeregningAksjonspunktValues,
      ],
    };
    const transformed = transformValuesVurderFaktaBeregning(values);
    expect(transformed[0].begrunnelse).toBe('begrunnelse');
    expect(transformed[0].kode).toBe(VURDER_FAKTA_FOR_ATFL_SN);
  });
});
