import { useState } from "react";
import { useImmer } from "use-immer";
import { Label } from "../utils/Label";

function Task() {
  // inisiasi state
  const [item, setItem] = useState(""); // state untuk menyimpan nilai item (singular)
  const [items, setItems] = useImmer([]); // state untuk menyimpan nilai items (plural)

  function handleChange(e) {
    // karena item kita inisiasikan sebagai string, kita cukup ambil saja langsung nilainya
    setItem(e.target.value);
  }

  function handleClick(e) {
    // karena kita tidak akan mengirimkan data nya melalui form, kita akan melakukan prevent default terlebih dahulu terhadap tombol nya
    e.preventDefault();

    // tambahkan item (string) kedalam items (array)
    setItems((draft) => {
      draft.push(item);
    });

    // reset item
    setItem("");
  }

  return (
    <>
      <form>
        <Label labelFor={"task"} text={"Task"} />
        <input
          type="text"
          id="task"
          className="form-control"
          onChange={handleChange}
          value={item}
        />
        <button className="btn btn-outline-primary" onClick={handleClick}>
          + Add Task
        </button>
      </form>

      <h3>List Task</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export { Task };
