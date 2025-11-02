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
          <h1 className="hero-title">
            Software Development &<span className="gradient-text"> Cloud Solutions</span>
          </h1>
          <p className="hero-subtitle">
            We build and deploy enterprise software for businesses in Thailand and Southeast Asia.
            Full-stack development, cloud infrastructure, and DevOps automation.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              Get in Touch
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                const element = document.getElementById('services')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Services
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-text">Planning</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-text">Development</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-text">Deployment</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
