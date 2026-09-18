import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    // Cleanup function runs when `running` changes or on unmount
    return () => clearInterval(interval);
  }, [running]);

  // Helper formatting for minutes, seconds, and centiseconds
  const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const milliseconds = ("0" + Math.floor((time / 10) % 100)).slice(-2);

  return (
    <div className="app">
      <h1>01-Stopwatch</h1>
      <div className="stopwatch-display">
        <span>{minutes}</span>:
        <span>{seconds}</span>:
        <span>{milliseconds}</span>
      </div>
      <div className="stopwatch-buttons">
        {running ? (
          <button onClick={() => setRunning(false)}>Stop</button>
        ) : (
          <button onClick={() => setRunning(true)}>Start</button>
        )}
        <button
          onClick={() => {
            setTime(0);
            setRunning(false);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;