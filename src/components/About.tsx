import './About.css'

const About = () => {
  const highlights = [
    {
      icon: '',
      title: 'Fixed-Price Contracts',
      description:
        'Clear project scope and timeline with fixed pricing. No surprises or hidden costs.',
    },
    {
      icon: '',
      title: 'Experienced Team',
      description: 'Senior developers with 5+ years experience. Based in Bangkok, Thailand.',
    },
    {
      icon: '',
      title: 'Modern Technologies',
      description: 'React, Angular, Node.js, Java, Golang, AWS, GCP, Docker, Kubernetes.',
    },
    {
      icon: '',
      title: 'Bilingual Team',
      description: 'Fluent in Thai and English. Clear communication throughout the project.',
    },
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">Why Work With Us</h2>
          <p className="section-subtitle">
            Experienced team based in Bangkok, delivering quality software since 2020
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="highlight-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
