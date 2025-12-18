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

  const principles = [
    {
      icon: <TargetIcon />,
      name: 'Your Bottom Line',
      text: 'Increase revenue, reduce costs, mitigate risks',
    },
    {
      icon: <ClockIcon />,
      name: 'Your Time',
      text: 'Fast delivery. No endless meetings or scope creep',
    },
    {
      icon: <WalletIcon />,
      name: 'Your Budget',
      text: 'Fixed price. No surprises. Know costs upfront',
    },
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
            Bangkok-Based • Fixed Pricing • 6-12 Weeks
          </div>

          <h1 className="hero-title">
            <span className="title-line">Software That Solves</span>
            <span className="gradient-text">Real Business Problems</span>
          </h1>

          <p className="hero-subtitle">
            End-to-end solutions focused on business value. From discovery to deployment, we deliver
            software that drives results—not just features.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">
                <span className="stat-value">6-12</span>
              </div>
              <div className="stat-label">Weeks Delivery</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="stat-value">Fixed</span>
              </div>
              <div className="stat-label">Price Guarantee</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                <span className="stat-value">100%</span>
              </div>
              <div className="stat-label">Code Ownership</div>
            </div>
          </div>

          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              <span>Get a Quote</span>
              <ArrowRightIcon />
            </button>
            <button className="btn btn-secondary" onClick={scrollToServices}>
              <span>How We Work</span>
            </button>
          </div>

          {/* Trust indicator */}
          <div className="hero-trust">
            <div className="trust-item">
              <CheckCircleIcon />
              <span>No vendor lock-in</span>
            </div>
            <div className="trust-item">
              <CheckCircleIcon />
              <span>Full code ownership</span>
            </div>
            <div className="trust-item">
              <CheckCircleIcon />
              <span>Weekly demos</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>
          <div className="principles-container">
            <div className="principle-header">
              <div className="principle-badge">
                <span className="badge-pulse"></span>
                Our Philosophy
              </div>
              <h3 className="principle-title">We Value What You Value</h3>
              <p className="principle-subtitle">Working software that delivers business results</p>
            </div>

            <div className="principles-grid">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="principle-card"
                  style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                >
                  <div className="principle-icon-wrapper">{principle.icon}</div>
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
                <span>6-12 weeks typical delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
