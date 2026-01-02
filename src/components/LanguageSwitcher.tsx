import { useTranslation } from 'react-i18next'
import './LanguageSwitcher.css'

interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher = ({ className = '' }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className={`language-switcher ${className}`}>
      <button
        onClick={() => changeLanguage('en')}
        className={`lang-btn ${i18n.language === 'en' || i18n.language.startsWith('en-') ? 'active' : ''}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="lang-separator">|</span>
      <button
        onClick={() => changeLanguage('th')}
        className={`lang-btn ${i18n.language === 'th' || i18n.language.startsWith('th-') ? 'active' : ''}`}
        aria-label="เปลี่ยนเป็นภาษาไทย"
      >
        TH
      </button>
    </div>
  )
}

export default LanguageSwitcher
