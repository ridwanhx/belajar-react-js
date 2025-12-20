import { useState } from "react";
import "../App.css"

function Counter() {
    const [counter, setCounter] = useState(0);
    
    console.info("Render ke : " + counter);

  function handleClick() {
    // implementasi state updates
    // dituliskan menggunakan closure arrow function
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
    setCounter((c) => c + 1);
    console.info(counter);
  }

  return (
      <>
          <h3>{ counter }</h3>
      <button
        className="btn btn-outline-primary"
        onClick={handleClick}
      >Increment +3</button>
    </>
  );
}

export { Counter };