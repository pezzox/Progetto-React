import './scss/BenefitsSection.scss'
function BenefitsSection() {
  const benefits = [
    {
      icon: "🧠",
      title: "Migliora la Concentrazione",
      description:
        "Sviluppa una mente più focalizzata e attenta, aumentando la produttività e riducendo le distrazioni nella vita quotidiana.",
    },
    {
      icon: "😌",
      title: "Riduce lo Stress",
      description:
        "Abbassa i livelli di cortisolo e attiva la risposta di rilassamento naturale del corpo, portando serenità e calma interiore.",
    },
    {
      icon: "❤️",
      title: "Migliora il Benessere",
      description:
        "Aumenta la produzione di endorfine e serotonina, migliorando l'umore e la qualità generale della vita.",
    },
    {
      icon: "💤",
      title: "Sonno Migliore",
      description:
        "Favorisce un riposo più profondo e rigenerante, aiutando a combattere l'insonnia e i disturbi del sonno.",
    },
    {
      icon: "🎯",
      title: "Maggiore Consapevolezza",
      description:
        "Sviluppa la mindfulness e la presenza mentale, aiutandoti a vivere pienamente ogni momento della giornata.",
    },
    {
      icon: "🌱",
      title: "Crescita Personale",
      description:
        "Favorisce l'autoconoscenza e lo sviluppo emotivo, creando una base solida per la crescita personale continua.",
    },
  ]

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-title">
          <h2>I Benefici della Meditazione</h2>
          <p>
            La scienza conferma: la meditazione regolare trasforma corpo e mente, portando benefici duraturi nella vita
            quotidiana.
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <span className="benefit-icon">{benefit.icon}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
