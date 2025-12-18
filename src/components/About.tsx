import './About.css'

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="highlight-icon"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const TeamIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="highlight-icon"
  >
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="5" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M3 21v-1a3 3 0 013-3M21 21v-1a3 3 0 00-3-3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="highlight-icon"
  >
    <path
      d="M16 18l6-6-6-6M8 6l-6 6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="highlight-icon"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 6v6l4 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const highlightIcons = [CalendarIcon, TeamIcon, CodeIcon, ClockIcon]

const About = () => {
  const highlights = [
    {
      title: 'Weekly Demos',
      description:
        'Every Friday: working features demo, progress update, and next week plan. No surprises.',
    },
    {
      title: 'Thai Team, English Ready',
      description:
        'Developed by experienced Thai engineers. Full communication in English or Thai. Same timezone, no language barriers.',
    },
    {
      title: 'You Own the Code',
      description: 'Git access from day one. Clean, documented code. No vendor lock-in.',
    },
    {
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
          {highlights.map((highlight, index) => {
            const IconComponent = highlightIcons[index]
            return (
              <div
                key={index}
                className="highlight-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="highlight-icon-wrapper">
                  <IconComponent />
                </div>
                <div className="highlight-content">
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
