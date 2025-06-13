import { useState } from "react"
import FullSessionView from "./FullSessionView"
import './scss/MeditationPopup.scss'

function MeditationPopup({ session, onClose }) {
  // Controls whether the session has started
  const [start, setStart] = useState(false)

  // If session has started, show the full immersive view
  if (start) {
    return <FullSessionView session={session} onClose={onClose} />
  }

  return (
    // Overlay that closes the popup when clicked outside the card
    <div className="popup-overlay" onClick={onClose}>
      {/* Inner card that stops propagation of click event */}
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        {/* Header with image and start button */}
        <div className="popup-header">
          <img src={session.image} alt={session.title} className="popup-image" />
          <button className="popup-button" onClick={() => setStart(true)}>
            INIZIA SESSIONE
          </button>
        </div>

        {/* Title of the session */}
        <h2 className="popup-title">{session.title}</h2>

        {/* Descriptive content for the session */}
        <div className="popup-body">
          <p><strong>Durata Consigliata:</strong> {session.duration}</p>
          <p><strong>Sensazioni da evocare:</strong> {session.feelings}</p>
          <p><strong>Elemento speciale:</strong><br />{session.element}</p>
          <p><strong>Mantra mentale:</strong> “{session.mantra}”</p>
        </div>
      </div>
    </div>
  )
}

export default MeditationPopup
