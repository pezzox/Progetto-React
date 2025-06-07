import SummaryCard from '../../components/Stats/SummaryCard';
import DailyChart from '../../components/Stats/DailyChart';
import SessionList from '../../components/Stats/SessionList';
import SoundDistribution from '../../components/Stats/SoundDistribution';


console.log("👀 Stats component mounted")

function Stats() {
  const getColor = (name) => {
    return {
      Silenzio: "#667eea",
      Pioggia: "#764ba2",
      Foresta: "#48bb78",
      Onde: "#38b2ac",
      Natura: "#ed8936",
    }[name] || "#a0aec0"
  }

  const [statsData, setStatsData] = useState({
    weeklyTotal: 0,
    dailyData: [],
    soundsData: [],
    recentSessions: [],
    streak: 0,
    totalSessions: 0,
  })

  useEffect(() => {
    let sessions = []
    try {
      sessions = JSON.parse(localStorage.getItem("meditationSessions") || "[]")
    } catch (err) {
      console.error("❌ Errore parsing localStorage:", err)
      sessions = []
    }

    const now = new Date()
    const past7Days = [...Array(7)].map((_, i) => {
      const date = new Date(now)
      date.setDate(now.getDate() - (6 - i))
      return date.toISOString().split("T")[0]
    })

    const dailyData = past7Days.map((dateStr) => {
      const dayName = new Date(dateStr).toLocaleDateString("it-IT", { weekday: "short" })
      const totalMinutes = sessions
        .filter((s) => s.date === dateStr)
        .reduce((sum, s) => sum + s.duration, 0)
      return { day: dayName, minutes: totalMinutes }
    })

    const soundsCount = {}
    sessions.forEach((s) => {
      const name = {
        silence: "Silenzio",
        nature: "Natura",
        rain: "Pioggia",
        waves: "Onde",
        forest: "Foresta",
      }[s.sound] || s.sound
      soundsCount[name] = (soundsCount[name] || 0) + 1
    })

    const soundsData = Object.entries(soundsCount).map(([name, count]) => ({
      name,
      value: count,
      color: getColor(name),
    }))

    const uniqueDates = [...new Set(sessions.map((s) => s.date))].sort().reverse()
    let streak = 0
    for (let i = 0; i < 7; i++) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      const str = d.toISOString().split("T")[0]
      if (uniqueDates.includes(str)) streak++
      else break
    }

    setStatsData({
      weeklyTotal: dailyData.reduce((sum, d) => sum + d.minutes, 0),
      dailyData,
      soundsData,
      recentSessions: sessions.slice(-5).reverse(),
      streak,
      totalSessions: sessions.length,
    })
  }, [])

  const formatDuration = (minutes) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return `${hours}h ${remainingMinutes}m`
  }

  return (
    <div className="stats-page">
      <div className="container">
        <h1>📊 Statistiche Meditazione</h1>

        <div className="stats-summary">
          <SummaryCard
            icon="🧘‍♀️"
            title="Questa Settimana"
            value={formatDuration(statsData.weeklyTotal)}
            label="Tempo totale meditato"
          />
          <SummaryCard
            icon="🔥"
            title="Streak Attuale"
            value={`${statsData.streak} giorni`}
            label="Giorni consecutivi"
          />
          <SummaryCard
            icon="⭐"
            title="Sessioni Totali"
            value={statsData.totalSessions}
            label="Questo mese"
          />
        </div>

        <div className="charts-section">
          <DailyChart data={statsData.dailyData} />
          <SoundDistribution data={statsData.soundsData} />
        </div>

        <SessionList sessions={statsData.recentSessions} />
      
      </div>
    </div>
    
  )
}

export default Stats
