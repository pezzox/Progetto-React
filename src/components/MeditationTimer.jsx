"use client"

import { useState, useEffect } from "react"
import useTimer from "../hooks/useTimer"
import './scss/Timer.scss'

function MeditationTimer() {
  const [duration, setDuration] = useState(10) // Default 10 minutes
  const { time, isRunning, start, pause, reset } = useTimer(duration * 60)
  const [selectedSound, setSelectedSound] = useState("silence")

  useEffect(() => {
    if (!isRunning && time < duration * 60) {
      const elapsedMinutes = Math.round((duration * 60 - time) / 60);
      if (elapsedMinutes > 0) {
        const today = new Date().toISOString().split("T")[0];
        const session = {
          date: today,
          duration: elapsedMinutes,
          sound: selectedSound,
        };

        const prevSessions = JSON.parse(localStorage.getItem("meditationSessions") || "[]");
        localStorage.setItem("meditationSessions", JSON.stringify([...prevSessions, session]));
      }
    }
  }, [isRunning]);

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
