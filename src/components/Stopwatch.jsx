import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./stopwatch.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0); 
  const timeRef = useRef(null);
  const startTimeRef = useRef(null);

//    const startTimer = () => {
//     if (timeRef.current) return; // prevent multiple intervals
//     timeRef.current = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);
//   };

  const startTimer = () => {
    if (timeRef.current) return; // prevent multiple intervals

    startTimeRef.current = Date.now() - time; // resume from pause

    timeRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setTime(elapsed);
    }, 10);
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  // format time
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    if (minutes > 0) {
      // show MM:SS:MS if minutes exist
      return `${minutes}:${String(seconds).padStart(2, "0")}:${String(
        milliseconds
      ).padStart(2, "0")}`;
    } else {
      // otherwise only SS:MS
      return `${seconds}:${String(milliseconds).padStart(2, "0")}`;
    }
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-wrapper">
        <h2>Stopwatch</h2>
        <h1>{formatTime(time)}</h1>

        <div className="button-group">
          <button className="btn btn-success" onClick={startTimer}>
            Start
          </button>
          <button className="btn btn-danger" onClick={stopTimer}>
            Stop
          </button>
          <button className="btn btn-warning" onClick={resetTimer}>
            Reset
          </button>
        </div>

         <Link to="/" className="btn btn-primary mt-3">
        Go Home
      </Link>
      </div>
    </div>
  );
};  

export default Stopwatch;
