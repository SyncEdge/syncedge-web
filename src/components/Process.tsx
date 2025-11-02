import './Process.css'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Proposal',
      description:
        'Requirements workshop to map your business needs. Deliverables: scope document, technical design, and fixed-price quote.',
      simple: '3-5 days',
      complex: '1-2 weeks',
    },
    {
      number: '02',
      title: 'Development',
      description:
        'Iterative builds with Friday demos. Code pushed to your GitHub/GitLab daily. You review progress weekly, not at the end.',
      simple: '2-4 weeks',
      complex: '8-12 weeks',
    },
    {
      number: '03',
      title: 'Launch & Transfer',
      description:
        'UAT on staging, production deployment, monitoring setup. Complete handover: credentials, docs, and training session.',
      simple: '3-5 days',
      complex: '1-2 weeks',
    },
  ]

  return (
    <section className="process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">Three-phase approach. Weekly visibility. No surprises.</p>
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
                    <span className="timeline-label">Simple:</span>
                    <span className="timeline-value">{step.simple}</span>
                  </div>
                  <div className="timeline-item">
                    <span className="timeline-label">Complex:</span>
                    <span className="timeline-value">{step.complex}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="process-note">
          <strong>Total timeline:</strong> Simple apps ~4-6 weeks | Complex systems ~10-14 weeks |
          Fixed quote after scoping
        </div>
      </div>
    </section>
  )
}

export default Process
