// Component that displays a single summary statistic card
function SummaryCard({ icon, title, value, label }) {
  return (
    <div className="summary-card">
      {/* Icon representing the statistic */}
      <div className="summary-icon">{icon}</div>

      {/* Text content: title, value, and label */}
      <div className="summary-content">
        <h3>{title}</h3>
        <p className="summary-value">{value}</p>
        <span className="summary-label">{label}</span>
      </div>
    </div>
  )
}

export default SummaryCard
