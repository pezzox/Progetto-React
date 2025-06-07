import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts"

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

function DailyChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Progresso Giornaliero</h3>
      <p className="chart-subtitle">Minuti di meditazione negli ultimi 7 giorni</p>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
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
