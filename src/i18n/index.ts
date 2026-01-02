import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enCommon from './locales/en/common.json'
import enHero from './locales/en/hero.json'
import enServices from './locales/en/services.json'
import enIndustries from './locales/en/industries.json'
import enAbout from './locales/en/about.json'
import enProcess from './locales/en/process.json'
import enTechstack from './locales/en/techstack.json'
import enContact from './locales/en/contact.json'
import enSeo from './locales/en/seo.json'

import thCommon from './locales/th/common.json'
import thHero from './locales/th/hero.json'
import thServices from './locales/th/services.json'
import thIndustries from './locales/th/industries.json'
import thAbout from './locales/th/about.json'
import thProcess from './locales/th/process.json'
import thTechstack from './locales/th/techstack.json'
import thContact from './locales/th/contact.json'
import thSeo from './locales/th/seo.json'

const resources = {
  en: {
    common: enCommon,
    hero: enHero,
    services: enServices,
    industries: enIndustries,
    about: enAbout,
    process: enProcess,
    techstack: enTechstack,
    contact: enContact,
    seo: enSeo,
  },
  th: {
    common: thCommon,
    hero: thHero,
    services: thServices,
    industries: thIndustries,
    about: thAbout,
    process: thProcess,
    techstack: thTechstack,
    contact: thContact,
    seo: thSeo,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'th'],
    defaultNS: 'common',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'syncedge-lang',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
