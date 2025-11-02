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
                  <a href="#services">Planning & Architecture</a>
                </li>
                <li>
                  <a href="#services">Software Development</a>
                </li>
                <li>
                  <a href="#services">Cloud & DevOps</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
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
