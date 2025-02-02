import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: { translation: { welcome: "Welcome to my portfolio!" } },
    fr: { translation: { welcome: "Bienvenue sur mon portfolio !" } },
    mg: { translation: { welcome: "Tongasoa amin'ny portfolio-ko!" } }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: { escapeValue: false }
    });

export default i18n;
