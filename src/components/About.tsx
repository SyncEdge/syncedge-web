import './About.css'

const About = () => {
  const highlights = [
    {
      icon: '',
      title: 'Weekly Demos',
      description:
        'Every Friday: working features demo, progress update, and next week plan. No surprises.',
    },
    {
      icon: '',
      title: 'Thai Team, English Ready',
      description:
        'Developed by experienced Thai engineers. Full communication in English or Thai. Same timezone, no language barriers.',
    },
    {
      icon: '',
      title: 'You Own the Code',
      description: 'Git access from day one. Clean, documented code. No vendor lock-in.',
    },
    {
      icon: '',
      title: '2-Hour Response',
      description: 'Business hours (Mon-Fri, 9AM-6PM). Dedicated communication channel.',
    },
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Transparent process. No vendor lock-in. Based in Bangkok.
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
