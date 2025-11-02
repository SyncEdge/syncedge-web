import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">SyncEdge</h3>
            <p className="footer-tagline">
              Software development and cloud solutions for businesses in Thailand.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <ul>
                <li>
                  <a href="#services">Fixed-Price Development</a>
                </li>
                <li>
                  <a href="#services">Secure & Compliant Systems</a>
                </li>
                <li>
                  <a href="#services">Cloud Infrastructure</a>
                </li>
                <li>
                  <a href="#services">Maintenance Agreement</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Industries</h4>
              <ul>
                <li>
                  <a href="#industries">Healthcare</a>
                </li>
                <li>
                  <a href="#industries">Banking & Finance</a>
                </li>
                <li>
                  <a href="#industries">Insurance</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul>
                <li>
                  <a href="#about">How We Work</a>
                </li>
                <li>
                  <a href="#contact">Start Your Project</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SyncEdge. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#contact">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#contact">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
