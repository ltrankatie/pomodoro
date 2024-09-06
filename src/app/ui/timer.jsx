// timer.jsx
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// We are creating a Component called "Timer"
// This takes a parameter called "timeLeft" which is the amount of seconds
// left on the timer.
export default function Timer({ timeLeft, maxTime }) {

	// This is a helper function for Timer that converts the number of seconds
	// to something prettier to display (ex. 90s -> 1:30)
  function secondsToTimeText(durationInSeconds) {
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = durationInSeconds % 60;

    return minutes + ':' + String(seconds).padStart(2, '0');
  }

	// This is the view - we are displaying the time formatted by secondsToTimeText.
	// The <h1> is just HTML for describing a header, ex. a title on a website.
  return (
    <div style={{ width: '80%', maxWidth: '600px' }}>
    <CircularProgressbar
   
  value={maxTime - timeLeft}
  maxValue={maxTime}
  text={secondsToTimeText(timeLeft)}
  styles={{
    text: {
      fill: 'white',
      fontSize: '24px',
    }
  }} />
  </div>) 
}