import './Footer.css'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="social-icon">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="social-icon"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="social-icon"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
)

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="social-icon"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">SyncEdge</h3>
            <p className="footer-tagline">
              Building reliable software solutions for businesses across Thailand and Southeast
              Asia. Fixed-price development with no surprises.
            </p>
            <div className="footer-contact-info">
              <a href="mailto:contact@syncedge.tech" className="footer-contact-item">
                <EmailIcon />
                <span>contact@syncedge.tech</span>
              </a>
              <a href="tel:+66659519292" className="footer-contact-item">
                <PhoneIcon />
                <span>065-951-9292</span>
              </a>
              <div className="footer-contact-item">
                <LocationIcon />
                <span>Bangkok, Thailand</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <ul>
                <li>
                  <a onClick={() => scrollToSection('services')}>Fixed-Price Development</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('services')}>Secure & Compliant Systems</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('services')}>Cloud Infrastructure</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('services')}>Maintenance Agreement</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Industries</h4>
              <ul>
                <li>
                  <a onClick={() => scrollToSection('industries')}>Healthcare</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('industries')}>Banking & Finance</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('industries')}>Insurance</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul>
                <li>
                  <a onClick={() => scrollToSection('about')}>Why Choose Us</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection('contact')}>Get a Quote</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SyncEdge Solution (Thailand) Co., Ltd. All rights reserved.</p>
          <div className="footer-social">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="footer-legal">
            <a onClick={() => scrollToSection('contact')}>Privacy Policy</a>
            <span className="separator">•</span>
            <a onClick={() => scrollToSection('contact')}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
