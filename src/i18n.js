// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';

i18n.use(initReactI18next).init({
        resources: {
            en: {
                translation: enTranslation,
            },
            ar: {
                translation: arTranslation,
            },
        },
        fallbackLng: 'en',
        lng: 'en',// Fallback language
        debug: true,
        interpolation: {
            escapeValue: false, // React already does escaping
        },
    });

export default i18n;


