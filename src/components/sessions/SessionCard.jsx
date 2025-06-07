function SessionCard({ session, onClick }) {
  return (
    <div className="session-card" onClick={() => onClick(session)}>
      <img src={session.image} alt={session.title} className="session-image" />
      <div className="session-overlay">
        <h3 className="session-title">{session.title}</h3>
        <p className="session-duration">{session.duration}</p>
      </div>
    </div>
  );
}

export default SessionCard;
