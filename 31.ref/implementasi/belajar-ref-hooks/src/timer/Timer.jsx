import { useState } from "react";
import { useRef } from "react";

function Timer() {
    // inisiasi states
    const [now, setNow] = useState(null);
    const [start, setStart] = useState(null);

    // inisiasi Ref
    const timer = useRef(null);

    function handleStart() {
        setStart(Date.now());
        setNow(Date.now());

        timer.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
    }

    return (
        <>
            <h1>Time : {now - start} ms</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}

export { Timer };