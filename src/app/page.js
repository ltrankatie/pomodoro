'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Timer from "./ui/timer";
import { useState, useEffect } from 'react';

const SECONDS_PER_MIN = 60;
const POMODORO_TIME_SECS = 25 * SECONDS_PER_MIN;

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME_SECS);
  function countDown() {
    if (timeLeft > 0) {
      setTimeLeft(timeLeft - 1);
    }
  }
  useEffect(() => {
    const interval = setInterval(countDown, 1000 /* ms */);
    return () => clearInterval(interval);
  }, [
    timeLeft,
  ]);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <Timer timeLeft={timeLeft} />
      </div>
    </main>
  );
}
