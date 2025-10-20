import { FaktaOmBeregningTilfelle } from '../../../kodeverk/faktaOmBeregningTilfelle';
import type { FaktaOmBeregningAksjonspunktValues } from '../../../typer/FaktaBeregningTypes';
import { erRefusjonskravGyldigFieldPrefix, VurderRefusjonForm } from './VurderRefusjonForm';

const { VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT } = FaktaOmBeregningTilfelle;

const lagFieldName = (arbeidsgiverId: string): string => erRefusjonskravGyldigFieldPrefix + arbeidsgiverId;

describe('VurderRefusjonForm', () => {
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
    const vurderRefusjonValues = {
      [lagFieldName('8279312213')]: false,
      [lagFieldName('45345345345')]: true,
    };
    const values = {
      vurderRefusjonValues: vurderRefusjonValues,
    } as FaktaOmBeregningAksjonspunktValues;
    const transformedValues = VurderRefusjonForm.transformValues(senRefusjonkravListe)(values);
    const vals = transformedValues.refusjonskravGyldighet || [];
    expect(vals.length).toBe(2);
    expect(vals[0].arbeidsgiverId).toBe('8279312213');
    expect(vals[0].skalUtvideGyldighet).toBe(false);
    expect(vals[1].arbeidsgiverId).toBe('45345345345');
    expect(vals[1].skalUtvideGyldighet).toBe(true);
  });
});
