import { useState } from "react";
import "../style.css";

function Counter({ text, color }) {
  // inisialisasi State
  const [counter, setCounter] = useState(0);

  // inisialisasi method u/ menangani aksi ketika tombol di klik
  function handleClick() {
    setCounter(counter + 1);
    console.info(counter);
  }

  return (
    <>
      <h3 className="fw-bold">{counter}</h3>
      <button className={"btn btn-" + color} onClick={handleClick}>{text}</button>
    </>
  );
}

export { Counter };