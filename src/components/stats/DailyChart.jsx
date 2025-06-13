import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts"

// Custom tooltip displayed on hover
function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{`${label}: ${payload[0].value} min`}</p>
      </div>
    )
  }
  return null
}

// Line chart showing daily meditation progress
function DailyChart({ data }) {
  return (
    <div className="chart-card">
      {/* Chart heading and subtitle */}
      <h3>Progresso Giornaliero</h3>
      <p className="chart-subtitle">Minuti di meditazione negli ultimi 7 giorni</p>

      {/* Responsive chart container */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            {/* Grid lines */}
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />

            {/* Horizontal axis (days) */}
            <XAxis dataKey="day" stroke="#64748b" fontSize={12} />

            {/* Vertical axis (minutes) */}
            <YAxis stroke="#64748b" fontSize={12} />

            {/* Tooltip with custom content */}
            <Tooltip content={<CustomTooltip />} />

            {/* Line representing minutes of meditation */}
            <Line
              type="monotone"
              dataKey="minutes"
              stroke="#667eea"
              strokeWidth={3}
              dot={{ fill: "#667eea", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: "#667eea", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DailyChart

