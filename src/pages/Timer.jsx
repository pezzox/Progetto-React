import { useState } from "react"

// Import the meditation timer component
import MeditationTimer from '../components/timer/MeditationTimer'

// Optional: Custom timer hook (not used directly here)
import useTimer from "../hooks/useTimer"

function Timer() {
  return (
    // Main container for the meditation timer page
    <div className="timer-page">
      <div className="container">
        {/* Page heading */}
        <h1>🧘 Timer Meditazione</h1>

        {/* Timer component container */}
        <div className="timer-container">
          <MeditationTimer />
        </div>
      </div>
    </div>
  )
}

export default Timer
