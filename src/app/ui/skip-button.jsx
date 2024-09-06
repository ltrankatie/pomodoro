'use client';
import styles from "./button.module.css";
export default function SkipButton({ timerStarted, onSkip }) {
return (
    <button id="start-button" className={styles.button} onClick={onSkip}>
        {timerStarted ? 'Skip' : 'Skip'}
    </button>
);
}