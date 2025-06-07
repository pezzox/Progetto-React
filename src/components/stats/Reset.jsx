// src/components/stats/Reset.jsx
import { useState } from "react"

function Reset() {
  const [success, setSuccess] = useState(false)

  const handleReset = () => {
    const confirm = window.confirm("Sei sicuro di voler resettare tutte le statistiche?")
    if (!confirm) return

    localStorage.removeItem("meditationSessions")
    setSuccess(true)

    // opzionale: aggiornamento forzato dopo 1s
    setTimeout(() => window.location.reload(), 1500)
  }

  return (
    <div className="reset-wrapper">
      <button className="reset-button" onClick={handleReset}>
        🗑️ Reset Statistiche
      </button>
      {success && <p className="reset-message">Statistiche resettate con successo ✅</p>}
    </div>
  )
}

export default Reset
