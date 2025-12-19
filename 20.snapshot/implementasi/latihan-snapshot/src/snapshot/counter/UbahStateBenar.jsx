import { useState } from "react";
import "../App.css";

function UbahStateBenar({ btnColor }) {
  const [counter, setCounter] = useState(0);

  console.info("Render counter : " + counter);

  // kesalahan dalam mengubah state
  function handleClick() {
    setCounter(counter + 3);
    console.info(counter);
  }

  return (
    <>
      <h3>{counter}</h3>
      <button className={"btn btn-" + btnColor} onClick={handleClick}>
        Increment +3
      </button>
    </>
  );
}

export { UbahStateBenar };
