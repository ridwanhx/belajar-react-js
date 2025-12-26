import "../App.css";
import { useState } from "react";
import { Label } from "../utils/Label";

function NoteForm({ onAddNote }) {
  // inisiasi state
  const [text, setText] = useState("");

  // inisiasi method untuk handle change / perubahan pada input
  function handleChange(e) {
    setText(e.target.value);
  }

  // inisiasi method untuk handle click pada tombol
  function handleClick() {
    setText("");    // reset State
    onAddNote(text);
  }

  return (
    <>
      <Label labelFor={"note"} text={"Your note"} />
      <input
        type="text"
        id="note"
        className="form-control"
        onChange={handleChange}
        value={text}
      />
      <button className="btn btn-outline-primary" onClick={handleClick}>
        + Add Note
      </button>
    </>
  );
}

export { NoteForm };
