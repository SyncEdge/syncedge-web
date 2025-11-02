import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '',
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
      icon: '',
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
      icon: '',
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
      icon: '',
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
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
