import type { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';

import { createFordelArbeidsforholdString, textCase } from './fordelingHelpTextUtils';

const arbeidsforhold = {
  arbeidsforholdId: '987654321',
  arbeidsgiverIdent: '123456789',
  eksternArbeidsforholdId: '56789',
  permisjon: {
    permisjonFom: '2016-01-01',
    permisjonTom: '2018-10-01',
  },
  perioderMedGraderingEllerRefusjon: [
    {
      erGradering: true,
      erRefusjon: false,
      fom: '2015-01-01',
      tom: '2025-01-01',
    },
    {
      erGradering: false,
      erRefusjon: true,
      fom: '2016-01-01',
      tom: '2026-01-01',
    },
  ],
};

const arbeidsforholdListe = [arbeidsforhold];

const agOpplysninger: ArbeidsgiverOpplysningerPerId = {
  123456789: {
    identifikator: '123456789',
    navn: 'Sopra Steria',
    erPrivatPerson: false,
  },
};

describe('fordelingHelpTextUtils', () => {
  it('skal lage endret arbeidsforhold for permisjon', () => {
    const string = createFordelArbeidsforholdString(arbeidsforholdListe, textCase.PERMISJON, agOpplysninger);
    expect(string).toEqual('Sopra Steria (123456789)...6789 f.o.m 01.10.2018');
  });

  it('skal lage endret arbeidsforhold for permisjon når permisjonTom er undefined', () => {
    const string = createFordelArbeidsforholdString(
      [
        {
          ...arbeidsforhold,
          permisjon: {
            permisjonFom: '2016-10-01',
            permisjonTom: undefined,
          },
        },
      ],
      textCase.PERMISJON,
      agOpplysninger,
    );
    expect(string).toEqual('Sopra Steria (123456789)...6789 f.o.m -');
  });
  it('skal lage endret arbeidsforhold for gradering', () => {
    const string = createFordelArbeidsforholdString(arbeidsforholdListe, textCase.GRADERING, agOpplysninger);
    expect(string).toEqual('Sopra Steria (123456789)...6789 f.o.m. 01.01.2015 - t.o.m. 01.01.2025');
  });
  it('skal lage endret arbeidsforhold for refusjon', () => {
    const string = createFordelArbeidsforholdString(arbeidsforholdListe, textCase.REFUSJON, agOpplysninger);
    expect(string).toEqual('Sopra Steria (123456789)...6789 f.o.m. 01.01.2016 - t.o.m. 01.01.2026');
  });

  const arbeidsforholdMedEndringISøktYtelse = {
    arbeidsforholdId: '987654321',
    arbeidsgiverIdent: '123456789',
    eksternArbeidsforholdId: '56789',
    permisjon: {
      permisjonFom: '2016-01-01',
      permisjonTom: '2018-10-01',
    },
    perioderMedGraderingEllerRefusjon: [
      {
        erGradering: false,
        erRefusjon: false,
        erSøktYtelse: true,
        fom: '2016-01-01',
        tom: '2026-01-01',
      },
    ],
  };

  it('skal lage endret arbeidsforhold for endring i ytelse', () => {
    const string = createFordelArbeidsforholdString(
      [arbeidsforholdMedEndringISøktYtelse],
      textCase.ENDRING_YTELSE,
      agOpplysninger,
    );
    expect(string).toEqual('Sopra Steria (123456789)...6789 f.o.m. 01.01.2016 - t.o.m. 01.01.2026');
  });
});
