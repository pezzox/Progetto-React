"use client"

import './scss/HeroSection.scss'

// Hero section with main call-to-action and scroll indicator
function HeroSection({ setCurrentPage }) {
  return (
    <section className="hero">
      {/* Main content block: title, description and CTA button */}
      <div className="hero-content">
        <h1>TROVA LA TUA PACE INTERIORE</h1>
        <p>
          Scopri il potere trasformativo della meditazione con la nostra piattaforma dedicata
          al benessere mentale e alla crescita personale.
        </p>
        <button className="cta-button" onClick={() => setCurrentPage("timer")}>
          Inizia Ora
        </button>
      </div>

      {/* Scroll indicator at the bottom of the hero section */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default HeroSection

