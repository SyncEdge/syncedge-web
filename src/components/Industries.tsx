import { useTranslation } from 'react-i18next'
import './Industries.css'

const Industries = () => {
  const { t } = useTranslation('industries')

  const industries = t('cards', { returnObjects: true }) as Array<{
    name: string
    icon: string
    description: string
    highlight: string
  }>

  return (
    <section id="industries" className="industries">
      <div className="industries-container">
        <div className="industries-header">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
              <p className="industry-description">{industry.description}</p>
              <div className="industry-highlight">{industry.highlight}</div>
            </div>
          ))}
        </div>

        <div className="industries-proof">
          <div className="proof-item">
            <div className="proof-number">{t('proof.scale.number')}</div>
            <div className="proof-label">{t('proof.scale.label')}</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">{t('proof.price.number')}</div>
            <div className="proof-label">{t('proof.price.label')}</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">{t('proof.delivery.number')}</div>
            <div className="proof-label">{t('proof.delivery.label')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
