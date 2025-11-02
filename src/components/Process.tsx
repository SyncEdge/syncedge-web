import './Process.css'

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'We start with understanding your business goals, technical requirements, and constraints.',
      duration: '1-2 weeks',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Detailed technical architecture, project timeline, and resource allocation.',
      duration: '1 week',
    },
    {
      number: '03',
      title: 'Development',
      description:
        'Agile sprints with weekly demos. You see progress every week, not just at the end.',
      duration: '4-12 weeks',
    },
    {
      number: '04',
      title: 'Deployment',
      description: 'CI/CD setup, cloud infrastructure, monitoring, and production launch.',
      duration: '1-2 weeks',
    },
    {
      number: '05',
      title: 'Support',
      description: 'Post-launch monitoring, bug fixes, and ongoing maintenance as needed.',
      duration: 'Ongoing',
    },
  ]

  return (
    <section className="process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">Transparent process, regular updates, no surprises</p>
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
                <div className="step-duration">⏱️ {step.duration}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="process-note">
          <p>
            <strong>Average project timeline:</strong> 6-14 weeks from kickoff to production
          </p>
          <p>Most projects start within 1-2 weeks of contract signing</p>
        </div>
      </div>
    </section>
  )
}

export default Process
