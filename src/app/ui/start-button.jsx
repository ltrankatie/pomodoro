'use client';
export default function StartButton({ timerStarted, onStart }) {
return (
    <button id="start-button" onClick={onStart}>
        {timerStarted ? 'Pause' : 'Start'}
    </button>
);
}