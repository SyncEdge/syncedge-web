import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '',
      title: 'Planning & Architecture',
      description:
        'System design and technical planning. We define requirements, select appropriate technologies, and create scalable architectures.',
      features: [
        'Requirements Analysis',
        'System Architecture Design',
        'Technology Selection',
        'Project Planning',
      ],
    },
    {
      icon: '',
      title: 'Software Development',
      description:
        'Full-stack development using React, Angular, Node.js, Java, and Golang. We build web applications, APIs, and backend systems.',
      features: ['Web Applications', 'REST APIs', 'Database Design', 'Integration Services'],
    },
    {
      icon: '',
      title: 'Cloud & DevOps',
      description:
        'Infrastructure setup on AWS and GCP. We handle deployment, CI/CD pipelines, monitoring, and ongoing maintenance.',
      features: ['AWS/GCP Setup', 'CI/CD Automation', 'Docker/Kubernetes', 'System Monitoring'],
    },
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            End-to-end software development and deployment services
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
