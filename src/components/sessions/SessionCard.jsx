// Component that renders a single meditation session card
function SessionCard({ session, onClick }) {
  return (
    // Card container with click handler to open the session
    <div className="session-card" onClick={() => onClick(session)}>
      {/* Session image */}
      <img src={session.image} alt={session.title} className="session-image" />

      {/* Overlay with title and duration */}
      <div className="session-overlay">
        <h3 className="session-title">{session.title}</h3>
        <p className="session-duration">{session.duration}</p>
      </div>
    </div>
  )
}

export default SessionCard
