import './Services.css'

const FixedPriceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
    <path
      d="M9 14l2 2 4-4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 11V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2h5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M17 15.5v3M15.5 17h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const SecurityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
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
)

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
    <path
      d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MaintenanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const serviceIcons = [FixedPriceIcon, SecurityIcon, CloudIcon, MaintenanceIcon]

const Services = () => {
  const services = [
    {
      title: 'Fixed-Price Development',
      description:
        "Launch your mission-critical system in 6-12 weeks with locked-in pricing. No hourly rates, no scope creep. We define everything upfront so you know exactly what you're paying for.",
      features: [
        'Detailed project scope and timeline',
        'Fixed total cost after planning phase',
        'Weekly progress updates with demos',
        'Full source code ownership from day 1',
      ],
    },
    {
      title: 'Secure & Compliant Systems',
      description:
        'Built for regulated industries. Bank-grade security, data encryption, audit logs, and compliance-ready architecture. React, Angular, Node.js, Java, Golang with secure coding practices.',
      features: [
        'Data encryption at rest and in transit',
        'Role-based access control (RBAC)',
        'Automated security testing',
        'HIPAA and PCI-DSS ready architecture',
      ],
    },
    {
      title: 'Reliable Cloud Infrastructure',
      description:
        'Mission-critical deployment on AWS or GCP. Auto-scaling, 24/7 monitoring, automated backups, and disaster recovery. Proven 99.9% uptime for healthcare and financial systems.',
      features: [
        '99.9% uptime SLA with monitoring',
        'Automated backup and recovery',
        'DDoS protection and WAF',
        '24/7 critical incident support',
      ],
    },
    {
      title: 'Maintenance Agreement (MA)',
      description:
        'Optional monthly retainer for post-launch support. Includes security patches, bug fixes, infrastructure monitoring, and minor updates. New features quoted separately.',
      features: [
        '4-hour response time for critical issues',
        'Monthly security patches and dependency updates',
        'Server monitoring and performance optimization',
        'Up to 8 hours/month for bug fixes and minor changes',
      ],
    },
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">What You Get</h2>
          <p className="section-subtitle">
            Predictable pricing, modern technology, and infrastructure that scales
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[index]
            return (
              <div
                key={index}
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon-wrapper">
                  <IconComponent />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
