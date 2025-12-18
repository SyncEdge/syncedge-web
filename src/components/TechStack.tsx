import './TechStack.css'

const TechStack = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Java', category: 'Backend' },
    { name: 'Go', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'GCP', category: 'Cloud' },
  ]

  const certifications = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="cert-icon">
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Secure Development',
      description: 'OWASP best practices',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="cert-icon">
          <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
          <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: 'Data Protection',
      description: 'PDPA compliant systems',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="cert-icon">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Cloud Architecture',
      description: 'AWS & GCP certified patterns',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="cert-icon">
          <path
            d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'Audit Ready',
      description: 'Complete documentation',
    },
  ]

  return (
    <section id="tech-stack" className="tech-stack">
      <div className="tech-stack-container">
        <div className="tech-header">
          <h2 className="section-title">Built With Modern Technology</h2>
          <p className="section-subtitle">
            Enterprise-grade tools and frameworks trusted by leading companies worldwide
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item" style={{ animationDelay: `${index * 0.05}s` }}>
              <span className="tech-name">{tech.name}</span>
              <span className="tech-category">{tech.category}</span>
            </div>
          ))}
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="certification-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-icon-wrapper">{cert.icon}</div>
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
