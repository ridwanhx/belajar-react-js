import { Card } from "../util/Card";
import { Button } from "../util/Button";
import { useState } from "react";
import { useRef } from "react";

function PomodoroApp() {
  // inisialisasi state
  // atur default state timeLeft dengan nilai default 1500s / 25 menit
  const [timeLeft, setTimeLeft] = useState(1500);

  // menggunakan setInterval pada React
  // useRef akan mempertahankan state interval pada setiap kali render ulang
  const intervalRef = useRef(null);

  // inisiasi method u/ start timer
  function startWorkTime() {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        // setelah timer bernilai 0, bersihkan interval dan update nilai intervalRef ke null
        if (prevTimeLeft <= 0) {
          // hentikan interval
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          // hentikan program
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  }

  // inisiasi stop timer
  // untuk menghentikan timer, kita perlu membersihkan intervalnya
  function restTimer() {
    clearInterval(intervalRef.current);
  }

  function resetTimer() {
    setTimeLeft(1500);
    clearInterval(intervalRef.current);
  }

  return (
    <Card>
      <h3 className="fw-bold text-center">Pomodoro App</h3>
      <div className="d-flex justify-content-evenly">
        <div className="text-center">
          <label htmlFor="focus" className="form-label">
            Focus (min)
          </label>
          <input type="text" className="form-control text-center" id="focus" value={25} />
        </div>
        <div className="text-center">
          <label htmlFor="rest" className="form-label">
            Rest (min)
          </label>
          <input type="text" className="form-control text-center" id="rest" value={5} />
        </div>
      </div>
      <hr />
      <div className="timer-display">
        <div className="d-flex justify-content-center align-items-center">
          <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
          <span>:</span>
          <span>{String(timeLeft % 60).padStart(2, "0")}</span>
        </div>
      </div>
      <div className="buttons">
        <Button
          btnColor={"primary"}
          text="START WORK"
          handleClick={startWorkTime}
        />
        <div className="d-flex justify-content-between">
          <Button
            btnColor={"success"}
            text="REST"
            handleClick={restTimer}
          />
          <Button btnColor={"light"} text="RESET" handleClick={resetTimer} />
        </div>
      </div>
      <hr />
      <div className="text-center">
        <small>Total Focus: 0 min</small>
      </div>
    </Card>
  );
}

export { PomodoroApp };
