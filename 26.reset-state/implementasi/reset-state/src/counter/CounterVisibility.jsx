import { useState } from "react";
import { Label } from "../utils/Label";
import { Counter } from "./Counter";

function CounterVisibility({ counterName }) {
  // inisiasi state
  // state di inisiasi sebagai boolean state dengan nilai default nya adalah true
  const [visible, setVisible] = useState(true);

  // inisiasi method u/ handle change pada checkbox
  function handleChange(e) {
    setVisible(e.target.checked);
  }

  return (
    <>
      {/* Implementasi Reset State : mengubah dengan component lain */}
      {/* Pada kasus ini, kita mengubah Counter menjadi component paragraf jika visible nya bernilai false / ketika counter di hilangkan */}
      {/* {(visible) ? <Counter name={ counterName } /> : <p>State has already reset.</p>} */}

      {/* Implementasi Reset State : Mengubah posisi Component */}
      {/* Pada kasus ini akan menggunakan kasus dimana State akan di reset karena kita menggunakan dua pembungkus berbeda, yaitu div dan section */}
      {/* {visible ? (
        <div>
          <Counter name={counterName} />
        </div>
      ) : (
        <section>
          <Counter name="Eria" />
        </section>
      )} */}

      {/* Implementasi Reset State : Posisi Component Berbeda */}
      {/* Mungkin akan membingungkan, tapi pada kasus ini, kita bisa lihat dari perilaku Component nya akan menentukan State nya itu sendiri */}
      {/* Misal pada kasus ini, keduanya adalah Component yang sama, namun punya perilaku yang berbeda */}
      {/* Perilaku berbeda yang di maksud adalah, Counter yang pertama muncul ketika visible bernilai false, dan Counter yang satunya lagi muncul ketika visible bernilai true */}
      {/* Pada akhirnya, perilaku tersebut akan memengaruhi State dan kemudian setiap perubahannya akan membuat State ter reset. */}
      {/* Tapi cara seperti ini, cukup umum dan biasanya digunakan oleh programmer React */}
      {/* {!visible && <Counter name={counterName} />}
      {visible && <Counter name="Eria" />} */}

      {/* Implementasi Reset State : Menggunakan Key (Recomended) */}
      {visible ? (
        <Counter name={counterName} key={1} />
      ) : (
        <Counter name="Eria" key={2} />
      )}
      <input
        type="checkbox"
        name="chk-show"
        id="chk-show"
        onChange={handleChange}
        checked={visible}
      />
      <Label labelFor={"chk-show"} text={"Show Counter"} />
    </>
  );
}

export { CounterVisibility };
