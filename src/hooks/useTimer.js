"use client"

import { useState, useEffect, useRef } from "react"

function useTimer(initialTime = 600) {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  const start = () => {
    if (time > 0) {
      setIsRunning(true)
    }
  }

  const pause = () => {
    setIsRunning(false)
  }

  const reset = (newTime = initialTime) => {
    setIsRunning(false)
    setTime(newTime)
  }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalRef.current)
            setIsRunning(false)
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning])

  return { time, isRunning, start, pause, reset }
}

export default useTimer
