import { createIntl } from './createIntl';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

export const replaceNorwegianCharacters = (str: string): string =>
  str.replaceAll('æ', 'ae').replaceAll('ø', 'oe').replaceAll('å', 'aa');

export const getLanguageFromSprakkode = (sprakkode?: string): string => {
  switch (sprakkode) {
    case 'NN':
      return intl.formatMessage({ id: 'Malform.Nynorsk' });
    case 'EN':
      return intl.formatMessage({ id: 'Malform.Engelsk' });
    default:
      return intl.formatMessage({ id: 'Malform.Bokmal' });
  }
};
