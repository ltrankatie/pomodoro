'use client';
export default function SkipButton({ timerStarted, onSkip }) {
return (
    <button id="start-button" onClick={onSkip}>
        {timerStarted ? 'Skip' : 'Skip'}
    </button>
);
}