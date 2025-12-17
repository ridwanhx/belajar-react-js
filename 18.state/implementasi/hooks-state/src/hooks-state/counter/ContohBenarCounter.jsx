import { useState } from "react";
import "../style.css";

function ContohBenarCounter() {
  // inisiasi state
  // Pada kasus kali ini, state merepresentasikan nilai saat ini
  // Ketika kita menginisiasikan state pertama kali, kita melakukan set nilai state nya adalah 0
  // setState akan kita gunakan sebagai function yang akan mengolah/memanipulasi nilai daripada state nya ini
  // terkait penamaan daripada state dan setState nya ini sebenarnya bebas / menyesuaikan saja, tidak harus selalu di inisiasikan seperti ini
  const [state, setState] = useState(0);

  function handleClick() {
    //   bisa terlihat disini, kita akan menambahkan nilai state saat ini, ditambah 1 (increment)
    setState(state + 1);
    // mencetak hasil ke console
    console.info(state);
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button className="btn-counter me-4" title="increment" onClick={handleClick}>
        +
      </button>
      {/* menampilkan hasil ke layar */}
      <h3>{state}</h3>
    </div>
  );
}

export { ContohBenarCounter };
