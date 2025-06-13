import { useState } from "react"

// Import components related to meditation sessions
import SessionCard from '../components/sessions/SessionCard'
import FullSessionView from '../components/sessions/FullSessionView'
import MeditationPopup from '../components/sessions/MeditationPopup'
import sessions from '../components/sessions/SessionsData'

function Sessions() {
  // Tracks the currently selected session
  const [active, setActive] = useState(null)

  return (
    // Main layout for the Sessions page
    <div className="sessions-page">
      <div className="container">
        {/* Page title and subtitle */}
        <h1>Esplora la tua energia</h1>
        <p className="subtitle">Scegli la forma che risuona con il tuo momento presente</p>

        {/* Grid displaying all session cards */}
        <div className="sessions-grid">
          {sessions.map((s, i) => (
            <SessionCard key={i} session={s} onClick={setActive} />
          ))}
        </div>

        {/* Popup with full session details */}
        {active && (
          <MeditationPopup session={active} onClose={() => setActive(null)} />
        )}
      </div>
    </div>
  )
}

export default Sessions
