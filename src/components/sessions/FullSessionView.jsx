// ✅ FullSessionView.jsx (effetto fullscreen funzionante senza React Portal)
import { useEffect, useRef, useState } from "react"
import './scss/FullSessionView.scss'

function FullSessionView({ session, onClose }) {
  if (!session) return null

  const audioRef = useRef(null)
  const [showText, setShowText] = useState(true)
  const totalSeconds = parseInt(session.duration) * 60
  const [remaining, setRemaining] = useState(totalSeconds)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true
      audioRef.current.play()
    }

    const timeout = setTimeout(() => setShowText(false), 5000)
    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
      if (audioRef.current) audioRef.current.pause()
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="full-session">
      <video
        src={session.video}
        className="fullscreen-video"
        autoPlay
        loop
        muted
        playsInline
      />

      <button className="exit-button" onClick={onClose}>Termina Sessione</button>

      <div className="overlay-content">
        {showText && (
          <p className="mantra">{session.mantra || session.element.split('.')[0]}</p>
        )}
      </div>

      <div className="timer-circle">
        <svg width="100" height="100">
          <circle cx="50" cy="50" r="45" stroke="#999999" strokeWidth="8" fill="none" />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#ffffff"
            strokeWidth="8"
            fill="none"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={(2 * Math.PI * 45 * remaining) / totalSeconds}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="timer-label">
          {String(Math.floor(remaining / 60)).padStart(2, '0')}:
          {String(remaining % 60).padStart(2, '0')}
        </div>
      </div>

      <audio ref={audioRef} src={session.audio} />
    </div>
  )
}

export default FullSessionView