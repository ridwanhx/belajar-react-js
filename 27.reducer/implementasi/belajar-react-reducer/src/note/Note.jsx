import "../App.css";
import { useState } from "react";
import { Label } from "../utils/Label";

function Note({ note, onChange, onDelete }) {
  // inisiasi state
  const [isEditing, setIsEditing] = useState(false);
  // simpan dalam variabel component
  let component;

  // inisiasi method untuk handle perubahan pada text
  function handleChangeText(e) {
    // inisiasi note baru (ambil semua notes nya, akan tetapi untuk text nya mengambil nilai yaitu text saat ini)
    const newNote = { ...note, text: e.target.value };
    // lalu kita kirim nilai newNote nya untuk menjadi nilai dari props onChange
    onChange(newNote);
  }

  // jika isEditing bernilai true
  if (isEditing) {
    // maka kembalikan component nya berupa input text yang di edit nya
    component = (
      <>
        <input
          type="text"
          id="note"
          className="form-control"
          value={note.text} onChange={handleChangeText}
        />
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button
          className="btn btn-outline-primary"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  function handleChangeDone(e) {
    const newNote = { ...note, done: e.target.checked };
    onChange(newNote);
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={note.done}
        onChange={handleChangeDone}
      />

      {component}

      <button className="btn" onClick={() => onDelete(note)}>
        Delete
      </button>
    </label>
  );
}

export { Note };
