import MeditationTimer from '../../components/UI/MeditationTimer';
import Reset from '../../components/UI/Reset';

function Timer() {
  return (
    <div className="timer-page">
      <div className="container">
        <h1>🧘 Timer Meditazione</h1>
        <div className="timer-container">
          <MeditationTimer />
        </div>
      </div>
    </div>
  )
}

export default Timer
