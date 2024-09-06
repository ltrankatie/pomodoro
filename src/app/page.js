'use client';
import Image from "next/image";
import StartButton from "./ui/start-button";
import styles from "./page.module.css";
import Timer from "./ui/timer";
import { useState, useEffect } from 'react';

const SECONDS_PER_MIN = 60;
const POMODORO_TIME_SECS = 25 * SECONDS_PER_MIN;

export default function Home() {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME_SECS);
  function toggleTimer() {
    setTimerStarted(prev => !prev);
  }
  function countDown() {
    if (timeLeft > 0 && timerStarted) {
      setTimeLeft(timeLeft - 1);
    }
  }
  useEffect(() => {
    const interval = setInterval(countDown, 1000 /* ms */);
    return () => clearInterval(interval);
  }, [
    timeLeft,
    timerStarted,
  ]);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <Timer timeLeft={timeLeft} />
      <StartButton timerStarted={timerStarted} onStart={toggleTimer} />
      </div>
    </main>
  );
}
