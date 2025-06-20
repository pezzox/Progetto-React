// src/components/home/HeroSection.jsx
import "./scss/HeroSection.scss";


export default function HeroSection({ setCurrentPage }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>TROVA LA TUA PACE INTERIORE</h1>
        <p>
          Scopri il potere trasformativo della meditazione con la nostra
          piattaforma dedicata al benessere mentale e alla crescita personale.
        </p>

        <button className="cta-button" onClick={() => setCurrentPage("timer")}>
          Inizia Ora
        </button>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow" /> 
      </div>
    </section>
  );
}
