import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const useSEO = () => {
  const { t, i18n } = useTranslation('seo')

  useEffect(() => {
    const updateSEO = () => {
      // Update document title
      document.title = t('title')

      // Update html lang attribute
      document.documentElement.lang = i18n.language

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', t('description'))
      }

      // Update og:title
      const ogTitle = document.querySelector('meta[property="og:title"]')
      if (ogTitle) {
        ogTitle.setAttribute('content', t('og.title'))
      }

      // Update og:description
      const ogDescription = document.querySelector('meta[property="og:description"]')
      if (ogDescription) {
        ogDescription.setAttribute('content', t('og.description'))
      }

      // Update og:locale
      const ogLocale = document.querySelector('meta[property="og:locale"]')
      if (ogLocale) {
        ogLocale.setAttribute('content', i18n.language === 'th' ? 'th_TH' : 'en_US')
      }

      // Update twitter:title
      const twitterTitle = document.querySelector('meta[property="twitter:title"]')
      if (twitterTitle) {
        twitterTitle.setAttribute('content', t('og.title'))
      }

      // Update twitter:description
      const twitterDescription = document.querySelector('meta[property="twitter:description"]')
      if (twitterDescription) {
        twitterDescription.setAttribute('content', t('og.description'))
      }
    }

    updateSEO()

    // Listen for language changes
    i18n.on('languageChanged', updateSEO)

    return () => {
      i18n.off('languageChanged', updateSEO)
    }
  }, [t, i18n])
}
