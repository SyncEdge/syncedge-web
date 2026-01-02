import { useTranslation } from 'react-i18next'
import './Contact.css'

const Contact = () => {
  const { t } = useTranslation('contact')

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content-centered">
          <h2 className="section-title">{t('title')}</h2>
          <p className="contact-description">{t('description')}</p>

          <div className="contact-cta">
            <a href="mailto:contact@syncedge.tech" className="btn-contact-primary">
              {t('cta.email')}
            </a>
            <a href="tel:+66659519292" className="btn-contact-secondary">
              {t('cta.call')}
            </a>
          </div>

          <div className="contact-details-centered">
            <div className="contact-item-large">
              <div>
                <div className="contact-label">{t('labels.email')}</div>
                <a href="mailto:contact@syncedge.tech" className="contact-value-link">
                  contact@syncedge.tech
                </a>
              </div>
            </div>

            <div className="contact-item-large">
              <div>
                <div className="contact-label">{t('labels.phone')}</div>
                <a href="tel:+66659519292" className="contact-value-link">
                  065-951-9292
                </a>
              </div>
            </div>

            <div className="contact-item-large">
              <div>
                <div className="contact-label">{t('labels.location')}</div>
                <div className="contact-value">{t('values.location')}</div>
              </div>
            </div>
          </div>

          <p className="contact-note">{t('note')}</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
