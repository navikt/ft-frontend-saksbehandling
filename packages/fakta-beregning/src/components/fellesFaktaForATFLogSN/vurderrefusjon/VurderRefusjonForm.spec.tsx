import { FaktaOmBeregningTilfelle } from '@navikt/ft-kodeverk';

import { VurderRefusjonForm, lagFieldName } from './VurderRefusjonForm';

const { VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT } = FaktaOmBeregningTilfelle;

describe('<VurderRefusjonForm>', () => {
  it('skal bygge initial values', () => {
    const senRefusjonkravListe = [
      { erRefusjonskravGyldig: true, arbeidsgiverIdent: '8279312213' },
      { erRefusjonskravGyldig: false, arbeidsgiverIdent: '45345345345' },
    ];
    const initialValues = VurderRefusjonForm.buildInitialValues(
      [VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT],
      senRefusjonkravListe,
    );
    expect(initialValues[lagFieldName('8279312213')]).toBe(true);
    expect(initialValues[lagFieldName('45345345345')]).toBe(false);
  });

  it('skal bygge transform values', () => {
    const senRefusjonkravListe = [
      { arbeidsgiverIdent: '8279312213', erRefusjonskravGyldig: true },
      { arbeidsgiverIdent: '45345345345', erRefusjonskravGyldig: false },
    ];
    const values = { vurderRefusjonValues: {} };
    values.vurderRefusjonValues[lagFieldName('8279312213')] = false;
    values.vurderRefusjonValues[lagFieldName('45345345345')] = true;
    const transformedValues = VurderRefusjonForm.transformValues(senRefusjonkravListe)(values);
    expect(transformedValues.refusjonskravGyldighet.length).toBe(2);
    expect(transformedValues.refusjonskravGyldighet[0].arbeidsgiverId).toBe('8279312213');
    expect(transformedValues.refusjonskravGyldighet[0].skalUtvideGyldighet).toBe(false);
    expect(transformedValues.refusjonskravGyldighet[1].arbeidsgiverId).toBe('45345345345');
    expect(transformedValues.refusjonskravGyldighet[1].skalUtvideGyldighet).toBe(true);
  });
});
