function SessionList({ sessions }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "short",
    })
  }

  return (
    <div className="recent-sessions">
      <h3>Sessioni Recenti</h3>
      <div className="sessions-list">
        {sessions.map((session, index) => (
          <div key={index} className="session-item">
            <div className="session-date">
              <span className="date">{formatDate(session.date)}</span>
            </div>
            <div className="session-details">
              <span className="duration">{session.duration} min</span>
              <span className="sound">{session.sound}</span>
            </div>
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
