import {
  KodeverkType, AvslagsarsakCodes, ArbeidType, VilkarType,
} from '@navikt/ft-kodeverk';
import { AlleKodeverk } from '@navikt/ft-types';

import { getKodeverknavnFn, getKodeverknavnFraKode } from './kodeverkUtils';

describe('<kodeverkUtils>', () => {
  it('skal finne navn til gitt kodeverk-kode', () => {
    const alleKodeverk = {
      [KodeverkType.ARBEID_TYPE]: [{
        kode: ArbeidType.LONN_UNDER_UTDANNING,
        kodeverk: 'ARBEID_TYPE',
        navn: 'Lønn under utdanning',
      }],
    } as AlleKodeverk;

    const kodeverkType = KodeverkType.ARBEID_TYPE;
    const kode = ArbeidType.LONN_UNDER_UTDANNING;

    const navn = getKodeverknavnFraKode(alleKodeverk, kodeverkType, kode);

    expect(navn).toBe('Lønn under utdanning');
  });

  it('skal finne navn til gitt kodeverk-objekt', () => {
    const alleKodeverk = {
      [KodeverkType.ARBEID_TYPE]: [{
        kode: ArbeidType.LONN_UNDER_UTDANNING,
        kodeverk: 'ARBEID_TYPE',
        navn: 'Lønn under utdanning',
      }],
    } as AlleKodeverk;

    const navn = getKodeverknavnFn(alleKodeverk)(ArbeidType.LONN_UNDER_UTDANNING, KodeverkType.ARBEID_TYPE);

    expect(navn).toBe('Lønn under utdanning');
  });

  it('skal finne navn til gitt kodeverk-objekt når en har underkategori i kodeverk-json', () => {
    const alleKodeverk = {
      [KodeverkType.AVSLAGSARSAK]: {
        [VilkarType.FODSELSVILKARET_MOR]: [{
          kode: AvslagsarsakCodes.INGEN_BEREGNINGSREGLER,
          kodeverk: 'AVSLAGSARSAK',
          navn: 'Ingen beregningsregler',
        }],
        [VilkarType.MEDLEMSKAPSVILKÅRET_LØPENDE]: [{
          kode: 'test 2',
          kodeverk: 'AVSLAGSARSAK',
          navn: 'test 2',
        }],
      },
    };

    // @ts-ignore (Kodeverket for avslagsårsak er anleis enn alle andre. Bør nok flyttast til eigen resttjeneste,
    // evt. må typen til alle-kodeverk endrast i heile appen)
    const navn = getKodeverknavnFn(alleKodeverk)(avslagsarsakCodes.INGEN_BEREGNINGSREGLER, KodeverkType.AVSLAGSARSAK, vilkarType.FODSELSVILKARET_MOR);

    expect(navn).toBe('Ingen beregningsregler');
  });
});
