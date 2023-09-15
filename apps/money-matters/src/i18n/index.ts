import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    backend: {
      loadpath: './assets/i18n/translations/{{lng}}/{{ns}}.json',
    },
    ns: 'common',
    defaultNS: 'common',
  });

i18n.loadNamespaces(['auth']);

export default i18n;
