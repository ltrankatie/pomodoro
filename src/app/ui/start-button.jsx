'use client';
import styles from "./button.module.css";

export default function StartButton({ timerStarted, onStart }) {
return (
    <button id="start-button" className={styles.button} onClick={onStart}>
        {timerStarted ? 'Pause' : 'Start'}
    </button>
);
}