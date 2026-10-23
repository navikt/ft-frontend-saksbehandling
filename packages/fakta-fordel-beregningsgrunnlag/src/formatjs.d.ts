import type nb from '../i18n/nb_NO.json';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof nb;
    }
  }
}
