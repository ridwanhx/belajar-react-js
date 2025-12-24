import "../App.css";
import { useState } from "react";
import { Label } from "../utils/Label";

// inisiasi method TaskForm dengan parameter nya adalah merupakan props
function TaskForm({ setItems }) {
  // inisiasi state
  const [item, setItem] = useState("");

  // inisiasi method untuk handle change
  function handleTaskChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    // cegah agar data tidak dikirimkan oleh form ketika tombol ditekan
    e.preventDefault();

    // tahapan cloning state
    // cara sebelumnya
    // onsubmit(item);

    // cara alternatif
    // set items nya langsung
    setItems((draft) => {
      draft.push(item);
    });
    // reset / kosongkan kembali item
    setItem("");
  }

  return (
    <>
      <h3>Create Task</h3>
      <form>
        <Label labelFor={"task"} text={"Your Task"} />
        <input
          type="text"
          id="task"
          className="form-control"
          onChange={handleTaskChange}
          value={item}
          autoFocus
          autoComplete="off"
        />
        <button className="btn btn-outline-primary" onClick={handleClick}>
          + Add Task
        </button>
      </form>
    </>
  );
}

export { TaskForm };
