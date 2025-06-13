import { useState, useEffect } from "react"
import './scss/QuoteSection.scss'

// List of rotating inspirational quotes
const quotes = [
  { text: "La pace viene dall'interno. Non cercarla all'esterno.", author: "Buddha" },
  { text: "Respira. Sei vivo. Questo è già un miracolo.", author: "Thich Nhat Hanh" },
  { text: "Il momento presente è l’unico momento che conta.", author: "Eckhart Tolle" },
  { text: "Ogni respiro consapevole è un passo verso la libertà.", author: "Nyanaponika Thera" },
]

function QuoteSection() {
  // Tracks the index of the currently displayed quote
  const [index, setIndex] = useState(0)

  // Automatically change quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="quote-section">
      <div className="container">
        {/* Display the current quote with fade-in animation */}
        <div className="quote-content fade-in">
          <p className="quote-text">"{quotes[index].text}"</p>
          <p className="quote-author">— {quotes[index].author}</p>
        </div>
      </div>
    </section>
  )
}

export default QuoteSection
