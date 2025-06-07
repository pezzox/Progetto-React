"use client"

import './scss/HeroSection.scss';


function HeroSection({ setCurrentPage }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Trova la Tua Pace Interiore</h1>
        <p>
          Scopri il potere trasformativo della meditazione con la nostra piattaforma dedicata al benessere mentale e
          alla crescita personale.
        </p>
        <button className="cta-button" onClick={() => setCurrentPage("timer")}>
          Inizia Ora
        </button>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default HeroSection
