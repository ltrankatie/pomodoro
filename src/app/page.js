'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Timer from "./ui/timer";
import { useState } from 'react';

const SECONDS_PER_MIN = 60;
const POMODORO_TIME_SECS = 25 * SECONDS_PER_MIN;

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(POMODORO_TIME_SECS);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <Timer timeLeft={timeLeft} />
      </div>
    </main>
  );
}
