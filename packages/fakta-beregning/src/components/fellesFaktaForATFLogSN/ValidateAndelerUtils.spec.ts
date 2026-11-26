import { getIntlMock } from '@navikt/ft-frontend-utils-test';

import type { AndelFieldValue } from '../../typer/FieldValues';
import { compareAndeler, ulikeAndelerErrorMessage, validateUlikeAndeler } from './ValidateAndelerUtils';

import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('ValidateAndelerUtils', () => {
  it.each([
    [1, 1, 1, 1, 0],
    [1, 1, 1, 2, -1],
    [1, 2, 1, 1, 1],
    [1, 1, 2, 1, -1],
    [2, 1, 1, 1, 1],
    [1, 1, 2, 2, -1],
    [2, 2, 1, 1, 1],
  ])(
    'skal sammenligne andelsinfo %i og kategori %i med andelsinfo %i og kategori %i og returnere %i',
    (info1, kategori1, info2, kategori2, forventet) => {
      const compare = compareAndeler(
        { andelsinfo: `Andelsinfo${info1}`, inntektskategori: `Inntektskategori${kategori1}` },
        { andelsinfo: `Andelsinfo${info2}`, inntektskategori: `Inntektskategori${kategori2}` },
      );
      expect(compare).toBe(forventet);
    },
  );

  it('skal ikkje gi error om det er ingen andeler lagt til av saksbehandler og ingen har lik inntektskategori og andelsnr', () => {
    const andeler: AndelFieldValue[] = [
      {
        andelsnr: 1,
        andel: 'Virksomheten 1',
        nyAndel: false,
        lagtTilAvSaksbehandler: false,
        aktivitetStatus: 'AT',
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 2,
        andel: 'Virksomheten 2',
        nyAndel: false,
        lagtTilAvSaksbehandler: false,
        aktivitetStatus: 'AT',
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 3,
        andel: 'Virksomheten 3',
        nyAndel: false,
        lagtTilAvSaksbehandler: false,
        aktivitetStatus: 'AT',
        inntektskategori: 'ARBEIDSTAKER',
      },
    ];
    const ulikeAndelerError = validateUlikeAndeler(andeler, intlMock);
    expect(ulikeAndelerError).toBe(undefined);
  });

  it('skal ikkje gi error om det er andeler lagt til av saksbehandler og ingen har lik inntektskategori og andelsnr', () => {
    const andeler: AndelFieldValue[] = [
      {
        andelsnr: 1,
        andel: 'Virksomheten 1',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 2,
        andel: 'Virksomheten 2',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        aktivitetStatus: 'AT',
        andelsnr: undefined,
        andel: '2',
        nyAndel: true,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'SJØMANN',
      },
    ];
    const ulikeAndelerError = validateUlikeAndeler(andeler, intlMock);
    expect(ulikeAndelerError).toBe(undefined);
  });

  it('skal gi error om det er nye andeler to har lik inntektskategori og andelsnr', () => {
    const andeler: AndelFieldValue[] = [
      {
        andelsnr: 1,
        andel: 'Virksomheten 1',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 2,
        andel: 'Virksomheten 2',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: undefined,
        andel: '2',
        aktivitetStatus: 'AT',
        nyAndel: true,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
    ];
    const ulikeAndelerError = validateUlikeAndeler(andeler, intlMock);
    expect(ulikeAndelerError).toBe(ulikeAndelerErrorMessage(intlMock));
  });

  it('skal gi error om det er nye andeler to har lik inntektskategori og andelsnr når det finnes to eksisterende andeler med samme virksomhet', () => {
    const andeler: AndelFieldValue[] = [
      {
        andelsnr: 1,
        andel: 'Virksomheten 1 (...fesf342334)',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 2,
        andel: 'Virksomheten 2',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 3,
        andel: 'Virksomheten 1 (...fesf342334)',
        aktivitetStatus: 'AT',
        nyAndel: false,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'SJØMANN',
      },
      {
        andelsnr: undefined,
        andel: '1',
        aktivitetStatus: 'AT',
        nyAndel: true,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'SJØMANN',
      },
    ];
    const ulikeAndelerError = validateUlikeAndeler(andeler, intlMock);
    expect(ulikeAndelerError).toBe(ulikeAndelerErrorMessage(intlMock));
  });

  it('skal ikkje gi error om det er nye andeler der to har lik andelstype og ulik inntektskategori', () => {
    const andeler: AndelFieldValue[] = [
      {
        andelsnr: 1,
        andel: 'Virksomheten 1',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 2,
        andel: 'Virksomheten 2',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: undefined,
        andel: 'BRUKERS_ANDEL',
        aktivitetStatus: 'BA',
        nyAndel: true,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: undefined,
        andel: 'BRUKERS_ANDEL',
        aktivitetStatus: 'BA',
        nyAndel: true,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'FRILANSER',
      },
    ];
    const ulikeAndelerError = validateUlikeAndeler(andeler, intlMock);
    expect(ulikeAndelerError).toBe(undefined);
  });

  it('skal gi error om det er nye andeler der to har lik inntektskategori og andelstype', () => {
    const andeler: AndelFieldValue[] = [
      {
        andelsnr: 1,
        andel: 'Virksomheten 1',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 2,
        andel: 'Virksomheten 2',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: undefined,
        andel: 'BRUKERS_ANDEL',
        nyAndel: true,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: undefined,
        andel: 'BRUKERS_ANDEL',
        aktivitetStatus: 'BA',
        nyAndel: true,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
    ];
    const ulikeAndelerError = validateUlikeAndeler(andeler, intlMock);
    expect(ulikeAndelerError).toBe(ulikeAndelerErrorMessage(intlMock));
  });

  it('skal gi error om det er ingen nye andeler, men andel lagt til av saksbehandler der to har lik inntektskategori og andelstype', () => {
    const andeler: AndelFieldValue[] = [
      {
        andelsnr: 1,
        andel: 'Virksomheten 1',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 2,
        andel: 'Virksomheten 2',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 3,
        andel: 'Brukers andel',
        nyAndel: false,
        aktivitetStatus: 'BA',
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 4,
        andel: 'Brukers andel',
        nyAndel: false,
        aktivitetStatus: 'BA',
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
    ];
    const ulikeAndelerError = validateUlikeAndeler(andeler, intlMock);
    expect(ulikeAndelerError).toBe(ulikeAndelerErrorMessage(intlMock));
  });

  it('skal gi error om det er ein ny brukers andel, og ein eksisterende der begge har lik inntektskategori', () => {
    const andeler: AndelFieldValue[] = [
      {
        andelsnr: 1,
        andel: 'Virksomheten 1',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 2,
        andel: 'Virksomheten 2',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 3,
        andel: 'Brukers andel',
        aktivitetStatus: 'BA',
        nyAndel: false,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 4,
        andel: 'BRUKERS_ANDEL',
        aktivitetStatus: 'BA',
        nyAndel: true,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
    ];
    const ulikeAndelerError = validateUlikeAndeler(andeler, intlMock);
    expect(ulikeAndelerError).toBe(ulikeAndelerErrorMessage(intlMock));
  });

  it('skal gi error om det er ein ny egen næring, og ein selvstendig næringsdrivende lagt til tidligere der begge har lik inntektskategori', () => {
    const andeler: AndelFieldValue[] = [
      {
        andelsnr: 1,
        andel: 'Virksomheten 1',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 2,
        andel: 'Virksomheten 2',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 3,
        andel: 'Selvstendig næringsdrivende',
        aktivitetStatus: 'SN',
        nyAndel: false,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 4,
        andel: 'EGEN_NÆRING',
        aktivitetStatus: 'SN',
        nyAndel: true,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
    ];
    const ulikeAndelerError = validateUlikeAndeler(andeler, intlMock);
    expect(ulikeAndelerError).toBe(ulikeAndelerErrorMessage(intlMock));
  });

  it('skal gi error om det er ein ny egen næring, og ein eksisterende selvstendig næringsdrivende der begge har lik inntektskategori', () => {
    const andeler: AndelFieldValue[] = [
      {
        andelsnr: 1,
        andel: 'Virksomheten 1',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 2,
        andel: 'Virksomheten 2',
        nyAndel: false,
        aktivitetStatus: 'AT',
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 3,
        andel: 'Selvstendig næringsdrivende',
        aktivitetStatus: 'SN',
        nyAndel: false,
        lagtTilAvSaksbehandler: false,
        inntektskategori: 'ARBEIDSTAKER',
      },
      {
        andelsnr: 4,
        andel: 'EGEN_NÆRING',
        aktivitetStatus: 'SN',
        nyAndel: true,
        lagtTilAvSaksbehandler: true,
        inntektskategori: 'ARBEIDSTAKER',
      },
    ];
    const ulikeAndelerError = validateUlikeAndeler(andeler, intlMock);
    expect(ulikeAndelerError).toBe(ulikeAndelerErrorMessage(intlMock));
  });
});
