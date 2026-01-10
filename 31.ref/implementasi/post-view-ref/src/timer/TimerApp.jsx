import "../App.css"
import { useRef, useState } from "react";

function TimerApp() {
  // inisiasi state
  const [now, setNow] = useState(null);
  const [start, setStart] = useState(null);

  // inisiasi ref
  const timer = useRef(null);

  // inisiasi handler click start
  function handleStart() {
    // inisiasi nilai awal u/ masing-masing state
    setNow(Date.now());
    setStart(Date.now());

    // inisiasi nilai u/ timer ref saat ini / current menggunakan interval
    timer.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    }
    
    return (
    <div className="card">
      <div className="card-body">
        <div className="timer-display">
          <h5 className="fw-bold">{now - start} ms</h5>
        </div>
        <div className="buttons">
          <button className="btn btn-primary" onClick={handleStart}>
            Start
          </button>
          <button className="btn btn-danger" onClick={handleStop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export { TimerApp };
