"use client"
import './scss/Footer.scss'

// Footer component with site description, navigation, and disclaimer
function Footer({ setCurrentPage }) {
  const navigationLinks = [
    { id: "home", label: "Home" },
    { id: "timer", label: "Timer Meditazione" },
    { id: "sessions", label: "Sessioni Guidate" },
    { id: "stats", label: "Statistiche" },
  ]

  return (
    <footer className="footer">
      <div className="container">

        {/* Top section with description and navigation */}
        <div className="footer-content">
          {/* Left column: title and description */}
          <div className="footer-section">
            <h3>Mindful Moments</h3>
            <p>
              La tua piattaforma di fiducia per la meditazione e il benessere mentale.
              <br />
              Inizia oggi il tuo viaggio verso una vita più serena e consapevole.
            </p>
          </div>

          {/* Right column: navigation links aligned right */}
          <div className="footer-section nav-right">
            <h3>Navigazione</h3>
            <ul className="footer-links">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => setCurrentPage(link.id)}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="footer-bottom">
          <p>
            ⓘ Questo sito è un progetto didattico. Tutte le immagini, i video e gli audio sono generati tramite intelligenza artificiale.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
