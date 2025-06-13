// Component that displays a list of recent meditation sessions
function SessionList({ sessions }) {
  // Format date as "day month" (e.g., "12 gen")
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "short",
    })
  }

  return (
    <div className="recent-sessions">
      {/* Section heading */}
      <h3>Sessioni Recenti</h3>

      {/* List of session entries */}
      <div className="sessions-list">
        {sessions.map((session, index) => (
          <div key={index} className="session-item">
            {/* Display formatted session date */}
            <div className="session-date">
              <span className="date">{formatDate(session.date)}</span>
            </div>

            {/* Display session duration and sound name */}
            <div className="session-details">
              <span className="duration">{session.duration} min</span>
              <span className="sound">{session.sound}</span>
            </div>

            {/* Show appropriate icon based on sound type */}
            <div className="session-icon">
              {session.sound === "Silenzio" && "🔇"}
              {session.sound === "Pioggia" && "🌧️"}
              {session.sound === "Foresta" && "🌲"}
              {session.sound === "Onde" && "🌊"}
              {session.sound === "Natura" && "🍃"}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SessionList
