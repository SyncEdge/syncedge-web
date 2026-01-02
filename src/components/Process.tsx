import { useTranslation } from 'react-i18next'
import './Process.css'

const Process = () => {
  const { t } = useTranslation('process')

  const steps = t('steps', { returnObjects: true }) as Array<{
    number: string
    title: string
    description: string
    simple: string
    complex: string
  }>

  return (
    <section className="process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-step"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-timelines">
                  <div className="timeline-item">
                    <span className="timeline-label">{t('labels.simple')}</span>
                    <span className="timeline-value">{step.simple}</span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-label">{t('labels.complex')}</span>
                    <span className="timeline-value">{step.complex}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="process-note">
          <strong>{t('timeline.label')}</strong> {t('timeline.simple')} | {t('timeline.complex')} |{' '}
          {t('timeline.note')}
        </div>
      </div>
    </section>
  )
}

export default Process
