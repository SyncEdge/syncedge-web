import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content-centered">
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-description">
            Discuss your project with our team. We typically respond within 2 hours during business
            hours (Mon-Fri, 9AM-6PM Bangkok time).
          </p>

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
                <div className="contact-label">Phone / WhatsApp</div>
                <a href="tel:0659519292" className="contact-value-link">
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
        </div>
      </div>
    </section>
  )
}

export default Contact
