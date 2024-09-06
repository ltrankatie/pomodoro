'use client';
import Image from "next/image";
import StartButton from "./ui/start-button";
import SkipButton from "./ui/skip-button";
import styles from "./page.module.css";
import Timer from "./ui/timer";
import { useState, useEffect } from 'react';

const SECONDS_PER_MIN = 60;
const POMODORO_TIME_SECS = 25 * SECONDS_PER_MIN;
const BREAK_TIME_SECS = 5 * SECONDS_PER_MIN;

export default function Home() {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME_SECS);
  const [isOnBreak, setIsOnBreak] = useState(false);
  function toggleTimer() {
    setTimerStarted(prev => !prev);
  }
  function countDown() {
    if (timeLeft > 0 && timerStarted) {
      setTimeLeft(timeLeft - 1);
    }
    if (timeLeft == 0) {
      skipToNextSession();
    }
  }
  function skipToNextSession() {
    if (isOnBreak) {
      setIsOnBreak(false);
      setTimeLeft(POMODORO_TIME_SECS);
    } else {
      setIsOnBreak(true);
      setTimeLeft(BREAK_TIME_SECS);
    }
  }
  useEffect(() => {
    const interval = setInterval(countDown, 1000 /* ms */);
    return () => clearInterval(interval);
  }, [
    timeLeft,
    timerStarted,
    isOnBreak,
  ]);
  return (
    <main className={styles.main} style={{
      backgroundColor: isOnBreak ? "#16a085" : "#b33939",
      transition: "all 1.0s ease",
      WebkitTransition: "all 1.0s ease",
      MozTransition: "all 1.0s ease"
  }}>
      <div className={styles.description}>
      <Timer timeLeft={timeLeft} />
      <StartButton timerStarted={timerStarted} onStart={toggleTimer} />
      <SkipButton timerStarted={timerStarted} onSkip={skipToNextSession} />
      </div>
    </main>
  );
}
