function SummaryCard({ icon, title, value, label }) {
  return (
    <div className="summary-card">
      <div className="summary-icon">{icon}</div>
      <div className="summary-content">
        <h3>{title}</h3>
        <p className="summary-value">{value}</p>
        <span className="summary-label">{label}</span>
      </div>
    </div>
  )
}

export default SummaryCard
