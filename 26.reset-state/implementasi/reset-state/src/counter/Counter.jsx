import { useState } from "react";

function Counter({ name = "Test" }) {
    // inisiasi state
    const [counter, setCounter] = useState(0);

    // inisiasi method u/ handle click
    function handleClick() {
        setCounter(counter + 1);    // increment counter
    }

    return (
        <>
            <h3>Counter {name + ' ' + counter}</h3>
            <button className="btn btn-outline-primary" onClick={handleClick}>Increment +1</button>
        </>
    );
}

export { Counter };