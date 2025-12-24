import { useState } from "react";

// inisiasi method Counter
// implementasi materi mempertahankan state
function Counter({name}) {
    // inisiasi state
    const [counter, setCounter] = useState(0);

    // inisiasi method untuk handle click
    function handleClick() {
        setCounter(counter + 1);
    }

    return (
        <>
            <h3>Counter {name + ' ' + counter}</h3>
            <button className="btn btn-outline-primary" onClick={handleClick}>Increment</button>
        </>
    );
}

export { Counter };