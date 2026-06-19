import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en.json';
import ar from '../locales/ar.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    // Safely get the initial language
    lng: (typeof window !== 'undefined' && localStorage.getItem('i18nextLng')) || 'ar',
    fallbackLng: 'ar',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Handle RTL
i18n.on('languageChanged', (lng) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr';
  if (typeof document !== 'undefined') {
    document.documentElement.dir = dir;
    document.documentElement.lang = lng;
  }
});

// Set initial direction
const initialDir = i18n.language === 'ar' ? 'rtl' : 'ltr';
if (typeof document !== 'undefined') {
  document.documentElement.dir = initialDir;
  document.documentElement.lang = i18n.language;
}

export default i18n;
