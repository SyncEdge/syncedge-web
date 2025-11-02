import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">Bangkok-Based • Fixed Pricing • 6-12 Weeks</div>
          <h1 className="hero-title">
            Software That Solves
            <span className="gradient-text"> Real Business Problems</span>
          </h1>
          <p className="hero-subtitle">
            End-to-end solutions focused on business value. From discovery to deployment, we deliver
            software that drives results—not just features.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">6-12 Weeks</div>
              <div className="stat-label">Typical Delivery</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3 Industries</div>
              <div className="stat-label">Proven Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Fixed Price</div>
              <div className="stat-label">No Surprises</div>
            </div>
          </div>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get a Quote
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                const element = document.getElementById('services')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              How We Work
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="principles-container">
            <div className="principle-header">
              <div className="principle-badge">Our Philosophy</div>
              <h3 className="principle-title">We Value What You Value</h3>
              <p className="principle-subtitle">Working software that delivers business results</p>
            </div>
            <div className="principles-grid">
              <div className="principle-card">
                <div className="principle-icon">🎯</div>
                <div className="principle-content">
                  <h4 className="principle-name">Your Bottom Line</h4>
                  <p className="principle-text">Increase revenue, reduce costs, mitigate risks</p>
                </div>
              </div>
              <div className="principle-card">
                <div className="principle-icon">⏱️</div>
                <div className="principle-content">
                  <h4 className="principle-name">Your Time</h4>
                  <p className="principle-text">
                    Fast delivery. No endless meetings or scope creep
                  </p>
                </div>
              </div>
              <div className="principle-card">
                <div className="principle-icon">💰</div>
                <div className="principle-content">
                  <h4 className="principle-name">Your Budget</h4>
                  <p className="principle-text">Fixed price. No surprises. Know costs upfront</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
