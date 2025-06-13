import './scss/FeaturesSection.scss'

function FeaturesSection() {
  // List of key features with icon, title, and description
  const features = [
    {
      icon: "⏱️",
      title: "Timer Personalizzabile",
      description: "Imposta la durata perfetta per le tue sessioni, da 5 minuti a un'ora completa.",
    },
    {
      icon: "🎵",
      title: "Suoni Rilassanti",
      description: "Scegli tra una varietà di suoni naturali per accompagnare la tua meditazione.",
    },
    {
      icon: "📱",
      title: "Design Responsive",
      description: "Medita ovunque tu sia, su qualsiasi dispositivo, con un'esperienza ottimizzata.",
    },
    {
      icon: "📊",
      title: "Traccia i Progressi",
      description: "Monitora le tue sessioni e celebra i traguardi raggiunti nel tuo percorso.",
    },
  ]

  return (
    <section className="features-section">
      <div className="container">
        {/* Section title and subtitle */}
        <div className="section-title">
          <h2>Le Nostre Funzionalità</h2>
          <p>
            Tutto ciò di cui hai bisogno per iniziare e mantenere una pratica meditativa costante e gratificante.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
