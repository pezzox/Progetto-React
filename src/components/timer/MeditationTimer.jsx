import { useState, useEffect, useRef } from "react"
import useTimer from "../../hooks/useTimer"

function MeditationTimer() {
  const [duration, setDuration] = useState(10)
  const { time, isRunning, start, pause, reset } = useTimer(duration * 60)
  const [selectedSound, setSelectedSound] = useState("silence")

  // Reference to the audio element
  const audioRef = useRef(new Audio())

  // Map each sound ID to a file path in /public/audio
  const soundFiles = {
    nature: "/sounds/nature.mp3",
    rain: "/sounds/rain.mp3",
    waves: "/sounds/waves.mp3",
    forest: "/sounds/forest.mp3",
  }

  // Play or stop audio when sound or timer state changes
 // Play or stop audio when sound or timer state changes
useEffect(() => {
  const audio = audioRef.current

  // Stop audio if selected sound is silence
  if (selectedSound === "silence") {
    audio.pause()
    audio.src = ""
    return
  }

  // Set up audio properties and play
  audio.pause() // pause current playback
  audio.src = soundFiles[selectedSound]
  audio.load() // ensure audio is reloaded
  audio.loop = true // loop the audio
  audio.volume = 0.3

  if (isRunning) {
    const playAudio = async () => {
      try {
        await audio.play()
      } catch (err) {
        console.error("Audio playback error:", err)
      }
    }
    playAudio()
  }

  return () => {
    audio.pause()
  }
}, [selectedSound, isRunning])



  // Save session to localStorage
  useEffect(() => {
    if (!isRunning && time < duration * 60) {
      const elapsedMinutes = Math.round((duration * 60 - time) / 60)
      if (elapsedMinutes > 0) {
        const today = new Date().toISOString().split("T")[0]
        const session = {
          date: today,
          duration: elapsedMinutes,
          sound: selectedSound,
        }
        const prevSessions = JSON.parse(localStorage.getItem("meditationSessions") || "[]")
        localStorage.setItem("meditationSessions", JSON.stringify([...prevSessions, session]))
      }
    }
  }, [isRunning])

  const sounds = [
    { id: "silence", name: "Silenzio" },
    { id: "nature", name: "Natura" },
    { id: "rain", name: "Pioggia" },
    { id: "waves", name: "Onde" },
    { id: "forest", name: "Foresta" },
  ]

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration)
    reset(newDuration * 60)
  }

  return (
    <div className="meditation-timer">
      <div className="timer-display">
        <div className="time">{formatTime(time)}</div>
      </div>

      <div className="timer-controls">
        {!isRunning ? (
          <button className="control-btn start" onClick={start}>
            Inizia
          </button>
        ) : (
          <button className="control-btn pause" onClick={pause}>
            Pausa
          </button>
        )}
        <button className="control-btn reset" onClick={() => reset(duration * 60)}>
          Reset
        </button>
      </div>

      <div className="timer-settings">
        <div className="duration-selector">
          <h3>Durata</h3>
          <div className="duration-buttons">
            {[5, 10, 15, 20, 30, 45, 60].map((mins) => (
              <button
                key={mins}
                className={`duration-btn ${duration === mins ? "active" : ""}`}
                onClick={() => handleDurationChange(mins)}
              >
                {mins} min
              </button>
            ))}
          </div>
        </div>

        <div className="sound-selector">
          <h3>Suono di Sottofondo</h3>
          <div className="sound-options">
            {sounds.map((sound) => (
              <button
                key={sound.id}
                className={`sound-btn ${selectedSound === sound.id ? "active" : ""}`}
                onClick={() => setSelectedSound(sound.id)}
              >
                {sound.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeditationTimer
