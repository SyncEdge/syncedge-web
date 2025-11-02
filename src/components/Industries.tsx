import './Industries.css'

const Industries = () => {
  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'From simple appointment systems to full hospital management platforms',
      highlight: 'Any complexity level',
    },
    {
      name: 'Banking & Finance',
      icon: '🏦',
      description: 'Payment integrations to full financial systems with compliance',
      highlight: 'Secure by default',
    },
    {
      name: 'Insurance',
      icon: '🛡️',
      description: 'Quote calculators to complete claims processing platforms',
      highlight: 'Scalable solutions',
    },
  ]

  return (
    <section id="industries" className="industries">
      <div className="industries-container">
        <div className="industries-header">
          <h2 className="section-title">From Simple Apps to Complex Systems</h2>
          <p className="section-subtitle">
            Whether you need a straightforward business application or a mission-critical system for
            regulated industries—we deliver at the quality level you need
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="industry-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-name">{industry.name}</h3>
              <p className="industry-description">{industry.description}</p>
              <div className="industry-highlight">{industry.highlight}</div>
            </div>
          ))}
        </div>

        <div className="industries-proof">
          <div className="proof-item">
            <div className="proof-number">Any Scale</div>
            <div className="proof-label">Simple to Complex</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">Fixed Price</div>
            <div className="proof-label">No Hourly Billing</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">6-12 Weeks</div>
            <div className="proof-label">Typical Delivery</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
