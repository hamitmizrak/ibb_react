import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
            {
                translations: {
                    'homepage': "Home Page",
                    'about': "About",
                    'blog': "Blog",
                }
            },
        tr:
            {
                translations: {
                    'homepage': "Ana Sayfa",
                    'about': "Hakkımızda",
                    'blog': "Blog",
                }
            }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {escapeValue: false, formatSeparator: ','},
    react: {
        wait: true
    }
});
export default i18n;