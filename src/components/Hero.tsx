import { useTranslation } from 'react-i18next'
import './Hero.css'

// Professional SVG Icons
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="principle-icon-svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="principle-icon-svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 6v6l4 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="principle-icon-svg">
    <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M22 10H18a2 2 0 000 4h4" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="12" r="1" fill="currentColor" />
    <path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="trust-check-icon">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M8 12l3 3 5-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="btn-arrow">
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Hero = () => {
  const { t } = useTranslation('hero')

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const principleCards = t('principles.cards', { returnObjects: true }) as Array<{
    name: string
    text: string
  }>

  const principleIcons = [
    <TargetIcon key="target" />,
    <ClockIcon key="clock" />,
    <WalletIcon key="wallet" />,
  ]

  return (
    <section id="hero" className="hero">
      {/* Animated background elements */}
      <div className="hero-bg-grid"></div>
      <div className="hero-bg-gradient"></div>
      <div className="hero-bg-shapes">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
      </div>
      <div className="hero-glow"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            {t('badge')}
          </div>

          <h1 className="hero-title">
            <span className="title-line">{t('title.line1')}</span>
            <span className="gradient-text">{t('title.line2')}</span>
          </h1>

          <p className="hero-subtitle">{t('subtitle')}</p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">
                <span className="stat-value">{t('stats.delivery.value')}</span>
              </div>
              <div className="stat-label">{t('stats.delivery.label')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="stat-value">{t('stats.pricing.value')}</span>
              </div>
              <div className="stat-label">{t('stats.pricing.label')}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="stat-value">{t('stats.ownership.value')}</span>
              </div>
              <div className="stat-label">{t('stats.ownership.label')}</div>
            </div>
          </div>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              <span>{t('cta.primary')}</span>
              <ArrowRightIcon />
            </button>
            <button className="btn btn-secondary" onClick={scrollToServices}>
              <span>{t('cta.secondary')}</span>
            </button>
          </div>

          {/* Trust indicator */}
          <div className="hero-trust">
            <div className="trust-item">
              <CheckCircleIcon />
              <span>{t('trust.noVendorLock')}</span>
            </div>
            <div className="trust-item">
              <CheckCircleIcon />
              <span>{t('trust.fullOwnership')}</span>
            </div>
            <div className="trust-item">
              <CheckCircleIcon />
              <span>{t('trust.weeklyDemos')}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="principles-container">
            <div className="principle-header">
              <div className="principle-badge">
                <span className="badge-pulse"></span>
                {t('principles.badge')}
              </div>
              <h3 className="principle-title">{t('principles.title')}</h3>
              <p className="principle-subtitle">{t('principles.subtitle')}</p>
            </div>

            <div className="principles-grid">
              {principleCards.map((principle, index) => (
                <div
                  key={index}
                  className="principle-card"
                  style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                >
                  <div className="principle-icon-wrapper">{principleIcons[index]}</div>
                  <div className="principle-content">
                    <h4 className="principle-name">{principle.name}</h4>
                    <p className="principle-text">{principle.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="principles-footer">
              <div className="delivery-badge">
                <span className="delivery-icon">⚡</span>
                <span>{t('principles.delivery')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
