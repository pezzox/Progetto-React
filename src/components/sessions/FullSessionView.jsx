import { useRef, useState, useEffect } from "react";
import "./scss/FullSessionView.scss";

function FullSessionView({ session, onClose }) {
  if (!session) return null;

  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const totalDuration = parseInt(session.duration) * 60;
  const [remainingTime, setRemainingTime] = useState(totalDuration);
  const [volume, setVolume] = useState(0.5);
  const [showMantra, setShowMantra] = useState(true);

  useEffect(() => {
    // Blocca scroll pagina
    document.body.style.overflow = "hidden";

    // Play video e audio
    if (videoRef.current) videoRef.current.play();
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
      audioRef.current.play();
    }

    // Timer per nascondere il mantra
    const mantraTimeout = setTimeout(() => {
      setShowMantra(false);
    }, 5000);

    // Countdown sessione
    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup
    return () => {
      document.body.style.overflow = "auto";
      clearTimeout(mantraTimeout);
      clearInterval(interval);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="full-session">
      <video
        ref={videoRef}
        className="fullscreen-video"
        src={session.video}
        autoPlay
        muted
        loop
        playsInline
      />

      <button className="exit-button" onClick={onClose}>
        Termina Sessione
      </button>

      {showMantra && (
        <div className="overlay-content">
          <p className="mantra">{session.mantra}</p>
        </div>
      )}

      <div className="timer-circle">
        <div className="timer-label">{formatTime(remainingTime)}</div>
      </div>

      <div className="volume-control">
        <label>Volume</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>

      <audio ref={audioRef} src={session.audio} />
    </div>
  );
}

export default FullSessionView;
