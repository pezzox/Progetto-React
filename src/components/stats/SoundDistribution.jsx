import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from "recharts"

// Custom label renderer for pie chart segments
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  if (percent < 0.05) return null // Hide labels for very small slices

  const RADIAN = Math.PI / 180
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize="12"
      fontWeight="600"
    >
      {(percent * 100).toFixed(0)}%
    </text>
  )
}

// Pie chart component showing sound distribution data
function SoundDistribution({ data }) {
  return (
    <div className="chart-card">
      {/* Chart title and subtitle */}
      <h3>Suoni Preferiti</h3>
      <p className="chart-subtitle">Distribuzione dei suoni di sottofondo utilizzati</p>

      {/* Chart container with responsive layout */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {/* Each chart segment colored individually */}
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

            {/* Tooltip shows number of sessions (not percent) */}
            <Tooltip formatter={(value) => [`${value} sessioni`, "Utilizzo"]} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Custom legend below the chart */}
      <div className="legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <div className="legend-color" style={{ backgroundColor: item.color }}></div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SoundDistribution
