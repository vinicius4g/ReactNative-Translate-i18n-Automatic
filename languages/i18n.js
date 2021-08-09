import i18next from "i18next";

import { initReactI18next } from 'react-i18next'

import english from './english.json';
import italian from './italian.json';
import portuguese from './portuguese.json';


i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: english,
    it: italian,
    pt: portuguese
  },
  react: {
    useSuspense: false
  }
})

export default i18next;