import { useState } from "react";
import { Label } from "../utils/Label";
import { Counter } from "./Counter";

function CounterApp() {
    // inisiasi state
    const [showCounter2, setShowCounter2] = useState(true);

    // inisiasi handle change
    function handleChange(e) {
        setShowCounter2(e.target.checked);
    }

    return (
        <>
            {/* <Counter /> */}

            {/* Implementasi Posisi Component */}
            {/* hanya tampilkan jika showCounter2 nya bernilai true */}
            {/* {showCounter2 && <Counter/>} */}

            {/* Implementasi mempertahankan komponen */}
            {/* Komponen yang sama, di posisi yang sama maka State dipertahankan */}
            {/* jika showCounter bernilai true, maka tampilkan salah satu data */}
            {showCounter2 ? <Counter name={"Ridwan"}/> : <Counter name={"Eria"}/>}
            <input type="checkbox" name="show2" id="show2" onChange={handleChange} checked={showCounter2} />
            <Label labelFor={"show2"} text={"Show Counter 2"} />
        </>
    );
}

export { CounterApp };