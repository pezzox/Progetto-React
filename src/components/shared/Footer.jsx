"use client"
import './scss/Footer.scss'

function Footer({ setCurrentPage }) {
  const navigationLinks = [
    { id: "home", label: "Home" },
    { id: "timer", label: "Timer Meditazione" },
    { id: "sessions", label: "Sessioni Guidate" },
    { id: "stats", label: "Statistiche" },
  ]

  const socialIcons = ["📘", "📷", "🐦", "📺"]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mindful Moments</h3>
            <p>
              La tua piattaforma di fiducia per la meditazione e il benessere mentale. Inizia oggi il tuo viaggio verso
              una vita più serena e consapevole.
            </p>
            <div className="social-links">
              {socialIcons.map((icon, index) => (
                <a href="#" className="social-link" key={index}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3>Navigazione</h3>
            <ul className="footer-links">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => setCurrentPage(link.id)}>{link.label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Mindful Moments. Tutti i diritti riservati. Progettato con ❤️ per il tuo benessere.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer