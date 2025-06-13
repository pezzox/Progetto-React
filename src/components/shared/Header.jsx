"use client"

import { useState, useEffect } from "react"
import './scss/Header.scss'

// Header with logo, navigation links and mobile menu toggle
function Header({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detect scroll to apply "scrolled" class for background change
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

  // Handle navigation and close mobile menu
  const handleNavClick = (page) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo button to return to homepage */}
          <button className="logo" onClick={() => handleNavClick("home")}>
            <span className="logo-icon">🧘</span>
            <span>Mindful Moments</span>
          </button>

          {/* Desktop + mobile navigation */}
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

          {/* Hamburger / close icon for mobile menu */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
