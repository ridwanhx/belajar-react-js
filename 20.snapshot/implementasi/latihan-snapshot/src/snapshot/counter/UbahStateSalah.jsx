import { useState } from "react";
import "../App.css";

function UbahStateSalah({ btnColor }) {
  const [counter, setCounter] = useState(0);

  console.info("Render counter : " + counter);

  // kesalahan dalam mengubah state
  function handleClick() {
    setCounter(counter + 1); // setCounter(0 + 1)
    setCounter(counter + 1); // setCounter(0 + 1)
    setCounter(counter + 1); // setCounter(0 + 1)

    // dengan begini, sudah jelas bahwa cara kerja dari State bukanlah sebagaimana yang kita pikir sebelumnya
    //   baris kode diatas tidak akan dijalankan semuanya, selain karena untuk alasan performansi, baris kode diatas tidak akan dijalankan semua karena jika demikian tentu akan memakan waktu untuk render nya dan secara pengimplementasian kode nya juga tidak sesuai
    //   adapun jika memang mengharapkan nilai yang sesuai untuk kasus seperti diatas, kita cukup langsung atur saja agar setCounter(counter + 3) langsung
    //   pada kasus ini, konsep Snapshot nya itu adalah ketika program di render ulang, data State nya akan immutable (tidak akan berubah)
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

export { UbahStateSalah };
