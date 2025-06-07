import { useState } from "react"
import FullSessionView from "./FullSessionView"
import './scss/MeditationPopup.scss'

function MeditationPopup({ session, onClose }) {
  const [start, setStart] = useState(false)

  if (start) {
    return <FullSessionView session={session} onClose={onClose} />
  }

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <img src={session.image} alt={session.title} className="popup-image" />
          <button className="popup-button" onClick={() => setStart(true)}>
            INIZIA SESSIONE
          </button>
        </div>
        <h2 className="popup-title">{session.title}</h2>
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
