"use client"

import { useState, useEffect } from "react"
import './scss/Header.scss'


function Header({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <button className="logo" onClick={() => handleNavClick("home")}>
            <span className="logo-icon">🧘</span>
            <span>Mindful Moments</span>
          </button>

          <nav className={`nav ${mobileMenuOpen ? "active" : ""}`}>
              {[
                { id: "home", label: "Home" },
                { id: "timer", label: "Timer" },
                { id: "sessions", label: "Sessioni" },
                { id: "stats", label: "Statistiche" },
              ].map((item) => (
                <button
                  key={item.id}
                  className={`nav-item ${currentPage === item.id ? "active" : ""}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </nav>


          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
