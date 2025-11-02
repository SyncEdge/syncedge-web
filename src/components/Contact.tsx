import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content-centered">
          <h2 className="section-title">Start Your Project</h2>
          <p className="contact-description">
            Get a detailed project proposal within 48 hours. Share your requirements and we'll
            provide a fixed-price quote with timeline.
          </p>

          <div className="contact-cta">
            <a href="mailto:contact@syncedge.tech" className="btn-contact-primary">
              Send Email
            </a>
            <a href="tel:+66659519292" className="btn-contact-secondary">
              Call Now
            </a>
          </div>

          <div className="contact-details-centered">
            <div className="contact-item-large">
              <div>
                <div className="contact-label">Email</div>
                <a href="mailto:contact@syncedge.tech" className="contact-value-link">
                  contact@syncedge.tech
                </a>
              </div>
            </div>

            <div className="contact-item-large">
              <div>
                <div className="contact-label">Phone</div>
                <a href="tel:+66659519292" className="contact-value-link">
                  065-951-9292
                </a>
              </div>
            </div>

            <div className="contact-item-large">
              <div>
                <div className="contact-label">Location</div>
                <div className="contact-value">Bangkok, Thailand</div>
              </div>
            </div>
          </div>

          <p className="contact-note">
            Response time: Within 2 hours during business hours (Mon-Fri, 9AM-6PM Bangkok time)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
