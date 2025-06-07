import SessionCard from '../../components/Sessions/SessionCard';
import FullSessionView from '../../components/Sessions/FullSessionView';
import MeditationPopup from '../../components/Sessions/MeditationPopup';

function Sessions() {
  const [active, setActive] = useState(null)

  return (
    <div className="sessions-page">
      <div className="container">
        <h1>Esplora la tua energia</h1>
        <p className="subtitle">Scegli la forma che risuona con il tuo momento presente</p>

        <div className="sessions-grid">
          {sessions.map((s, i) => (
            <SessionCard key={i} session={s} onClick={setActive} />
          ))}
        </div>

        {active && (
          <MeditationPopup session={active} onClose={() => setActive(null)} />
        )}
      </div>
    </div>
  )
}

export default Sessions