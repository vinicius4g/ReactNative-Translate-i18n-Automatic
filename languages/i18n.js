import i18next from "i18next";

import { initReactI18next } from 'react-i18next'
import * as RNLocalize from "react-native-localize";

import english from './english.json';
import italian from './italian.json';
import portuguese from './portuguese.json';


const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    return callback(RNLocalize.getLocales()[0].languageCode)
  },
  init: () => {},
  cacheUserLanguage: () => {}
}

i18next
.use(languageDetector)
.use(initReactI18next)
.init({
  fallbackLng: 'en',
  resources: {
    en: english,
    it: italian,
    pt: portuguese
  },
  react: {
    useSuspense: false
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18next;